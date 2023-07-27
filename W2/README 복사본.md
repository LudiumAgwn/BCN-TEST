# Fungible Token (FT)

### 1. build fungible_token.wasm

```
./scripts/build.sh
```

```
near login
```

### 2. deploy fungible_token.wasm

```
near dev-deploy --wasmFile res/fungible_token.wasm --helperUrl https://near-contract-helper.onrender.com

source neardev/dev-account.env

echo $CONTRACT_NAME
```

### 3. initialize fungible_token.wasm

```
near call $CONTRACT_NAME new '{"owner_id": "'$CONTRACT_NAME'", "total_supply": "1000000000000000", "metadata": { "spec": "ft-1.0.0", "name": "LULULToken", "symbol": "lulul", "decimals": 8 }}' --accountId $CONTRACT_NAME

near view $CONTRACT_NAME ft_metadata
```

### 4. account to register: ludium_lecturer.testnet

```
❯ near call $CONTRACT_NAME storage_deposit '{"account_id": "ludium_lecturer.testnet"}' --accountId ludium_lecturer.testnet --amount 0.00125
```

### 5. transfer fungible_token.wasm

```

❯ near call $CONTRACT_NAME ft_transfer '{"receiver_id": "'ludium_lecturer.testnet'", "amount": "10000000000"}' --accountId $CONTRACT_NAME --amount 0.000000000000000000000001

```

```

near view $CONTRACT_NAME ft_balance_of '{"account_id": "ludium_lecturer.testnet"}'
ID=ludium_lecturer.testnet
echo $ID
near view $CONTRACT_NAME ft_balance_of '{"account_id": "'$ID'"}'
near call $CONTRACT_NAME storage_deposit '' --accountId $ID --amount 0.00125

```

### 6. create account

```

❯ near create-account bob.$CONTRACT_NAME --masterAccount $CONTRACT_NAME --initialBalance 1
❯ near view $CONTRACT_NAME ft_balance_of '{"account_id":"'bob.$CONTRACT_NAME'"}'

```

### 7. transfer fungible_token.wasm

```

❯ near call $CONTRACT_NAME ft_transfer '{"receiver_id": "'bob.$CONTRACT_NAME'", "amount": "19"}' --accountId $CONTRACT_NAME --amount 0.000000000000000000000001

❯ near view $CONTRACT_NAME ft_balance_of '{"account_id":"'bob.$CONTRACT_NAME'"}'

```

### 7. account to register: ludium_lecturer.testnet

```

❯ near call $CONTRACT_NAME storage_deposit '{"account_id": "ludium_lecturer.testnet"}' --accountId ludium_lecturer.testnet --amount 0.00125
❯ near call $CONTRACT_NAME ft_transfer '{"receiver_id": "'ludium_lecturer.testnet'", "amount": "10000000000"}' --accountId $CONTRACT_NAME --amount 0.000000000000000000000001

```

### linux bash

```
set -e: 이 명령은 스크립트를 실행하는 동안 오류가 발생하면 스크립트의 실행을 즉시 중지시킵니다.
-e 플래그는 'errexit'을 의미하며, 이는 스크립트에서 발생하는 모든 오류를 캐치합니다.

cd "dirname $0"/../ft: 이 명령은 현재 스크립트의 위치를 기반으로 상위 디렉토리에 있는 ft 디렉토리로 이동합니다.
dirname $0는 현재 스크립트의 위치를 나타냅니다.

cargo build --all --target wasm32-unknown-unknown --release: 이 명령은 Rust의 패키지 관리자인 Cargo를 사용하여 프로젝트를 빌드합니다.
여기서는 --all 플래그를 사용하여 모든 패키지를 빌드하고,
--target wasm32-unknown-unknown 옵션을 사용하여 웹어셈블리 타겟으로 빌드합니다.
--release 플래그는 최적화된 배포 버전을 빌드합니다.

cd ..: 이 명령은 현재 디렉토리에서 상위 디렉토리로 이동합니다.

cp ft/target/wasm32-unknown-unknown/release/\*.wasm ./res/:
이 명령은 ft/target/wasm32-unknown-unknown/release/ 디렉토리에서 모든 .wasm 파일을 현재 디렉토리의 res/ 디렉토리로 복사합니다.

이 스크립트의 목적은 Rust 프로젝트를 빌드하고, 생성된 웹어셈블리(.wasm) 파일을 적절한 위치로 복사하는 것입니다.
이렇게 하면 해당 파일을 필요에 따라 다른 곳에서 사용할 수 있게 됩니다.

```

### window batch

```

@echo off: 이 명령은 스크립트의 출력을 숨깁니다.
기본적으로, Windows Batch 스크립트는 실행하는 모든 명령어를 콘솔에 출력합니다.
이 명령은 그런 출력을 방지합니다.

title FT build: 이 명령은 스크립트를 실행하는 콘솔 창의 제목을 "FT build"로 변경합니다.

cd ..: 이 명령은 현재 디렉토리에서 상위 디렉토리로 이동합니다.

cargo build --all --target wasm32-unknown-unknown --release:
이 명령은 Rust의 패키지 관리자인 Cargo를 사용하여 프로젝트를 빌드합니다.
여기서는 --all 플래그를 사용하여 모든 패키지를 빌드하고,
--target wasm32-unknown-unknown 옵션을 사용하여 웹어셈블리 타겟으로 빌드합니다.
--release 플래그는 최적화된 배포 버전을 빌드합니다.

xcopy %CD%\target\wasm32-unknown-unknown\release\*.wasm %CD%\res /Y:
이 명령은 %CD%\target\wasm32-unknown-unknown\release\ 디렉토리에서 모든 .wasm 파일을 현재 디렉토리의 res 디렉토리로 복사합니다.
/Y 플래그는 복사할 때 질문 없이 덮어쓰기를 수행하도록 지시합니다.

pause: 이 명령은 스크립트의 실행이 끝나면 사용자가 키를 누를 때까지 콘솔 창을 열린 상태로 유지합니다.

이 스크립트의 목적은 Rust 프로젝트를 빌드하고, 생성된 웹어셈블리(.wasm) 파일을 적절한 위치로 복사하는 것입니다.
이렇게 하면 해당 파일을 필요에 따라 다른 곳에서 사용할 수 있게 됩니다.

```

```

```

```

```
