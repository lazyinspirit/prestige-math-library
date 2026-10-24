# Number Theory rendering audit — lane 05

**Result:** One confirmed rendering defect observed across 76 assigned items and 97 local PNG tiles.

## Review scope

Read-only review of frozen source snapshots, corresponding local HTML, and assigned PNG tiles. Every receipt-listed PNG was opened individually with `tools.view_image` at original resolution. Local source snapshots and screenshot hashes were checked. No live website, HTTP(S), external image, production edit, publication/status change, build, test, or gate was accessed or run.

## Findings

1. **`thm-product-formula-for-number-fields` — Proof technique, snapshot line 91.** The proof-technique field is rendered as uppercase plain text and exposes literal `$|N_{K/\mathbb Q}(x)|$` markup. [Tile](screenshots/thm-product-formula-for-number-fields--02.png), SHA256 `98c93e3497ec8aa4e357d6859f78dad8fdb5085eab9854dad3a2c1690917c5a4`. Repair: keep the technique field plain prose, or move formulas into a math-rendered proof sentence.

## Rejected visual observation

The initial review suspected left-edge clipping of “Fo” in the Definition sentence for `def-chebyshev-psi-function` (snapshot line 29). Coordinator standalone original-resolution recheck confirmed the full sentence, including “Fo”, is visible at the normal left inset, so this is a false positive and is not listed as a defect. The tile remains in coverage: [screenshots/def-chebyshev-psi-function--01.png](screenshots/def-chebyshev-psi-function--01.png), SHA256 `7e7e898789257607f364c02ff29caefb7999bd734fd2e49060df74c7e870e1e4`.

## Diagram review

No existing TikZ diagrams occur in this lane (`tikz_count: 0` throughout the receipts). No source-supported missing-diagram candidate was found; the reviewed items present their arguments and examples without a diagram-dependent construction. The explicit diagram-candidate and existing-diagram-check lists are empty.

## Per-item and per-tile coverage

Every listed tile was viewed individually at original resolution. Tile hashes are SHA256. The source snapshot and local HTML hashes match the assignment entries.

### `cex-an-odd-three-mod-four-valuation-obstructs-two-squares` — $539=7^2\cdot11$ is not a sum of two squares
- Frozen snapshot: `snapshots/cex-an-odd-three-mod-four-valuation-obstructs-two-squares.md` — `fd8ec6fc685e36de3353bec3d2f5c461d93ff1d27c6ce293cf7e59c1cfa299d9`
- Local HTML: `html/cex-an-odd-three-mod-four-valuation-obstructs-two-squares.html` — `ef868a5bbf125498857f43258f1de3e2a1427841b13ed239903d6520e2a69546`
- Viewed individually at original resolution: `screenshots/cex-an-odd-three-mod-four-valuation-obstructs-two-squares--01.png` — `94d37740f5e1a411dc78aed1166f2bdfbfeead4b45a4e074c240a9a3a86bc820` (y=0, height=1400)

### `cex-divides-a-product-without-dividing-a-factor` — $6 \mid 4 \cdot 9$ while $6 \nmid 4$ and $6 \nmid 9$: dividing a product does not force dividing a factor, and the coprimality hypothesis is what fails
- Frozen snapshot: `snapshots/cex-divides-a-product-without-dividing-a-factor.md` — `f77a8bb963380122c712ea6e14b2580e04ebc0ee13225bd4bd8ac2d60e0e4992`
- Local HTML: `html/cex-divides-a-product-without-dividing-a-factor.html` — `445121ce1861c51a703c510e5bdcc5f6bd437dc21b089b36e28686639b5d5b35`
- Viewed individually at original resolution: `screenshots/cex-divides-a-product-without-dividing-a-factor--01.png` — `acdc8aa5fa809e884399632ef232a59361d3e5fd17629040fe6142e6473e4213` (y=0, height=1400)
- Viewed individually at original resolution: `screenshots/cex-divides-a-product-without-dividing-a-factor--02.png` — `ee7707f99f0720e2739f8e411ef31e6b1510e5acb86c03cad7b814daded04ed2` (y=1300, height=1400)
- Viewed individually at original resolution: `screenshots/cex-divides-a-product-without-dividing-a-factor--03.png` — `2282481e55f8c5652ab73ef718523cddf9e934a0c2a02bd15f380b5295ff4dd2` (y=2600, height=202)

### `cex-local-global-fails-for-a-cubic-curve` — Selmer's cubic is locally soluble but globally insoluble
- Frozen snapshot: `snapshots/cex-local-global-fails-for-a-cubic-curve.md` — `d71e65992bc61fe485e6a60019a1fe0514bdc54b8ba78304ba23c3e23da0ec1a`
- Local HTML: `html/cex-local-global-fails-for-a-cubic-curve.html` — `8bd58b51846b731c662a8e63963ad40b4a47fdb3da93ebc9a2054e2c826996e0`
- Viewed individually at original resolution: `screenshots/cex-local-global-fails-for-a-cubic-curve--01.png` — `378832c152bf45ee0372102d7a230ac639dec44abc930feed515ee941cd614af` (y=0, height=1400)

### `cex-same-represented-integers-do-not-imply-proper-equivalence` — Distinct reduced forms can represent the same integers
- Frozen snapshot: `snapshots/cex-same-represented-integers-do-not-imply-proper-equivalence.md` — `2aea2778873306f90a385342616698e76f60db1b063fa2669cf5ea51c0ba1672`
- Local HTML: `html/cex-same-represented-integers-do-not-imply-proper-equivalence.html` — `53aafaa9d3de9cdd4e6e876e9e83d234ecb7d6ae0a93791cd7e4ac141bae2263`
- Viewed individually at original resolution: `screenshots/cex-same-represented-integers-do-not-imply-proper-equivalence--01.png` — `85900b758e80b711ed2bde2e2311bf614006890251b825aed3d7845a9a4ffb90` (y=0, height=1400)

### `cex-zp-is-not-the-integral-closure-of-z-in-qp` — Z_p is not the integral closure of Z in Q_p
- Frozen snapshot: `snapshots/cex-zp-is-not-the-integral-closure-of-z-in-qp.md` — `1a12b6a44820f36c9e73301c14df0570a1c0b0ba7b8854f796e981fab3ef5d28`
- Local HTML: `html/cex-zp-is-not-the-integral-closure-of-z-in-qp.html` — `ed7cfd28c5281b86204fffe0bcf97082ae80a0a536c74ee11ff901cd76d78534`
- Viewed individually at original resolution: `screenshots/cex-zp-is-not-the-integral-closure-of-z-in-qp--01.png` — `9d94fa41cddce6f1df3637ae57aab441a4ee372fa7d60de419a9635eb92a79e2` (y=0, height=1400)

### `cor-chebyshev-theta-prime-number-theorem-error` — Chebyshev theta prime number theorem error
- Frozen snapshot: `snapshots/cor-chebyshev-theta-prime-number-theorem-error.md` — `7a749dfc236db9b8a4dbe94adc3ec13b70683b86152effe8c42e15766660b4d8`
- Local HTML: `html/cor-chebyshev-theta-prime-number-theorem-error.html` — `2aa318877185566456d14822e4724b8f9fd80b62e3cb9fedcaef067dc12c4b41`
- Viewed individually at original resolution: `screenshots/cor-chebyshev-theta-prime-number-theorem-error--01.png` — `89cf951713e952be048d24a74e05fce4c8e7e39a6ad036c94eed101b844a23b4` (y=0, height=1400)

### `cor-dirichlet-l-trivial-zeros` — Parity-forced trivial zeros
- Frozen snapshot: `snapshots/cor-dirichlet-l-trivial-zeros.md` — `ec8109d959a4d6cf643a0ba69b8b83b09b6ea4afd748c117a3fbfefbb2c50b10`
- Local HTML: `html/cor-dirichlet-l-trivial-zeros.html` — `98d5ef51a456c7cba7402bbdeab77c312bd52657b610435d2252a4c274c519cf`
- Viewed individually at original resolution: `screenshots/cor-dirichlet-l-trivial-zeros--01.png` — `dfa3b279512918ed1dd5a9f15e230da69d64630bcc1075aa931108cd4cfadd17` (y=0, height=1400)

### `cor-euler-totient-is-multiplicative` — Euler's totient is multiplicative: $\gcd(m,n)=1$ implies $\varphi(mn)=\varphi(m)\varphi(n)$ for positive $m,n$
- Frozen snapshot: `snapshots/cor-euler-totient-is-multiplicative.md` — `14e0d407a9bb7eca2272ed10a7e04ab776a00329f2969c6b2167fea5c2098d20`
- Local HTML: `html/cor-euler-totient-is-multiplicative.html` — `f9ab9807c97037285a58369614386db9af317549580f8eb8aed7c5ed7fd5e666`
- Viewed individually at original resolution: `screenshots/cor-euler-totient-is-multiplicative--01.png` — `73844357453df7d87cfdc02149f214930dfa9788ee19af504874b86c60edbad3` (y=0, height=1400)

### `cor-generators-of-a-finite-cyclic-group` — The generators of a cyclic group of order $m$ are the $g^a$ with $\gcd(a,m)=1$, so there are $\varphi(m)$ of them
- Frozen snapshot: `snapshots/cor-generators-of-a-finite-cyclic-group.md` — `e646eed03fef98b3b2456d520d2cd162962d33eed1c5e97ad59884726e60397e`
- Local HTML: `html/cor-generators-of-a-finite-cyclic-group.html` — `23db6cc6386fb821dfa44636715b9ce1cf5c6a28581a96eebede39628e588733`
- Viewed individually at original resolution: `screenshots/cor-generators-of-a-finite-cyclic-group--01.png` — `0779d2ff28e253ee50177712c83caf648dc7f719c4c21c272e4b6ff2e19774e0` (y=0, height=1400)

### `cor-nth-prime-asymptotic` — Nth prime asymptotic
- Frozen snapshot: `snapshots/cor-nth-prime-asymptotic.md` — `8c520edab2dc90e5620b46b9132300404b668a8b9c584d4745dab837c895d8a0`
- Local HTML: `html/cor-nth-prime-asymptotic.html` — `b33040b6c757825893e7abc0caa457dcb7d4cfa1b26007e8e97ed356a7a25eb8`
- Viewed individually at original resolution: `screenshots/cor-nth-prime-asymptotic--01.png` — `478237647c4bbb54d7d92f55a340ec7072251f79b19dfe48980a7e18750824d7` (y=0, height=1400)

### `cor-orders-of-decomposition-and-inertia-groups` — Orders of decomposition and inertia groups
- Frozen snapshot: `snapshots/cor-orders-of-decomposition-and-inertia-groups.md` — `0bf17189110fb5a8184d33d3e6004cd6bfe4f2837d664e9d5b10325b12abb303`
- Local HTML: `html/cor-orders-of-decomposition-and-inertia-groups.html` — `6bb9c36e33dc9987bd7f1bc7cc6d61a28308a44cbc30e07f23b26a3f1b6f8345`
- Viewed individually at original resolution: `screenshots/cor-orders-of-decomposition-and-inertia-groups--01.png` — `51f6a94a1fe18a4f7dce9dcda19e91179df749d9c31b3e3a6ac22e2b1c6fabb8` (y=0, height=1400)

### `cor-rational-root-of-an-integer-is-an-integer` — A rational root of $x^{k} = m$ is an integer: if $k \ge 1$, $m \in \mathbb{Z}$, $x \in \mathbb{Q}$ and $x^{k}$ is the image of $m$, then $x$ is the image of an integer
- Frozen snapshot: `snapshots/cor-rational-root-of-an-integer-is-an-integer.md` — `6749e785b98f231cb76e6530455d400dbb592a46de9e9bcb779b367deda5b310`
- Local HTML: `html/cor-rational-root-of-an-integer-is-an-integer.html` — `8be02d157826bc6cf70ea28ce87a2d3c50f48102f6652a345bb0cb2a910bd2a6`
- Viewed individually at original resolution: `screenshots/cor-rational-root-of-an-integer-is-an-integer--01.png` — `6bfed0f3cee398e8a4ce6d89e8168c0b324bf3d66c169c449fc17be3fe6913a9` (y=0, height=1400)
- Viewed individually at original resolution: `screenshots/cor-rational-root-of-an-integer-is-an-integer--02.png` — `7436e16e613067f1e0ba88b867570c9c6ca69ee232f88bbcfb05fad100132ea3` (y=1300, height=1400)
- Viewed individually at original resolution: `screenshots/cor-rational-root-of-an-integer-is-an-integer--03.png` — `2f27d26054c0155277faf1b7401aaef8f1d6221b3cbe336b065d3149e1b6b199` (y=2600, height=1400)
- Viewed individually at original resolution: `screenshots/cor-rational-root-of-an-integer-is-an-integer--04.png` — `124a25e262602884620d4e975c35c49cbbba2af1e4c2bc263becaabada5fd7ed` (y=3900, height=1238)

### `cor-totient-at-one-and-at-a-prime` — $\varphi(1)=1$, and $\varphi(p)=p-1$ for every prime $p$
- Frozen snapshot: `snapshots/cor-totient-at-one-and-at-a-prime.md` — `f4e78533f7e4dc9d6cc68ceb10c47c576b68322e7a1246434608b6612a429a6e`
- Local HTML: `html/cor-totient-at-one-and-at-a-prime.html` — `03109b98d834c13ab929fd0eb2657de970defa0b36ed13c009d3048d56b2e325`
- Viewed individually at original resolution: `screenshots/cor-totient-at-one-and-at-a-prime--01.png` — `0b0ce69455808553f95f9ef1722ffa7adb721907b389ec148e99a122564a5815` (y=0, height=1400)
- Viewed individually at original resolution: `screenshots/cor-totient-at-one-and-at-a-prime--02.png` — `349ce62f89dffff939a8c481ece93e5ed45b285110be701da693d3911ffc7e3d` (y=1300, height=291)

### `def-abscissae-dirichlet-series` — The convergence and absolute-convergence abscissae of a Dirichlet series
- Frozen snapshot: `snapshots/def-abscissae-dirichlet-series.md` — `ee5fbc15a725dba7e918abbeb24e5a3ff5b281cc26eea6c34f30252620c671ea`
- Local HTML: `html/def-abscissae-dirichlet-series.html` — `5f6a6fc18e7f7a4e153b3413c07d33c1e7b1b596c6a25821a0b0794d575e6f62`
- Viewed individually at original resolution: `screenshots/def-abscissae-dirichlet-series--01.png` — `13bb29b92c372ebe8b3f88fa96d0742e87fdbf5a4d7f0c5b8a3390f27a5050b2` (y=0, height=1400)

### `def-chebyshev-psi-function` — Chebyshev's psi function
- Frozen snapshot: `snapshots/def-chebyshev-psi-function.md` — `28cb307a27bb9dd531e73d98d6ec67fdef46a26b09aedc90d5f4760152ee3f12`
- Local HTML: `html/def-chebyshev-psi-function.html` — `81888ae053dc78f481b802f14fb9a217399698945770f13877b14e67e02120a5`
- Viewed individually at original resolution: `screenshots/def-chebyshev-psi-function--01.png` — `7e7e898789257607f364c02ff29caefb7999bd734fd2e49060df74c7e870e1e4` (y=0, height=1400)

### `def-coprime` — Coprime integers: $\gcd(a,b) = 1$
- Frozen snapshot: `snapshots/def-coprime.md` — `fb09e68dfa0a991037e455ebcf1053573da031a8fd2a2a07f0f09cd01214ab66`
- Local HTML: `html/def-coprime.html` — `04ed7d660c4c89815ca02e1239afe958e9ee2d39388ae6be8ecd163553faa418`
- Viewed individually at original resolution: `screenshots/def-coprime--01.png` — `3f6048b9866415a375fe5827f4fa428b4e73ac546d9989d0695e2abef2f2d2dc` (y=0, height=1400)

### `def-divides-in-z` — Divisibility in $\mathbb{Z}$: $d \mid a$ when $a = dq$ for some integer $q$
- Frozen snapshot: `snapshots/def-divides-in-z.md` — `2401bb127973b056376525da20d2d65ed486d7d2c04b0475ce20892c12a16749`
- Local HTML: `html/def-divides-in-z.html` — `f9ad3bc9f61f8608e9f3af63bf32cad7dd0872bcc84ab7af1934139e191c64d8`
- Viewed individually at original resolution: `screenshots/def-divides-in-z--01.png` — `2f9bf639161e1b5d939da8895af896419050c1e1dc749cba823d7e365d5d30bb` (y=0, height=1400)

### `def-gauss-sum-dirichlet-character` — Gauss sum of a Dirichlet character
- Frozen snapshot: `snapshots/def-gauss-sum-dirichlet-character.md` — `55cf8088cd90876264e29361a0716979637a378361e0a604f7f383052cb38448`
- Local HTML: `html/def-gauss-sum-dirichlet-character.html` — `047e3f05dfa18ac18b6ff75a32782f4c7b5c3f5f11b35dc7cb9fc2e5e1df34ce`
- Viewed individually at original resolution: `screenshots/def-gauss-sum-dirichlet-character--01.png` — `0bebb60e476efdd28d3c6c0bc0a3fd06b00cd20324ab1a2ed49bd57ed085e643` (y=0, height=1400)

### `def-integral-basis-and-power-integral-basis` — Integral and power integral bases
- Frozen snapshot: `snapshots/def-integral-basis-and-power-integral-basis.md` — `e7c623e93cd3b33b93e4651eeef77441fa30030ffeb477a75f900cfca341124b`
- Local HTML: `html/def-integral-basis-and-power-integral-basis.html` — `5cfe5539593623898e2ecc2442617bcc72d32e9c008cf343f0000b587bd380ac`
- Viewed individually at original resolution: `screenshots/def-integral-basis-and-power-integral-basis--01.png` — `5e0ab3b4cc78eff74e1942801a222fedac00b9f46e0553f7f345cc3dada0a6d3` (y=0, height=1400)

### `def-multiplicative-absolute-value-on-a-field` — Absolute values on a field
- Frozen snapshot: `snapshots/def-multiplicative-absolute-value-on-a-field.md` — `99fe6d9116aefec83dcb383e2a2b69bbe6d1506fb68f1894679b15ea922aa2bb`
- Local HTML: `html/def-multiplicative-absolute-value-on-a-field.html` — `0a567b23cc7a0443e72fe6c6718a91fa3aca763d52154a3726f9b6767d908435`
- Viewed individually at original resolution: `screenshots/def-multiplicative-absolute-value-on-a-field--01.png` — `fc6e09bc7518927c86589b73c0bf440ac7acf3fea3e3606bafc96d5c85d12473` (y=0, height=1400)

### `def-parity-dirichlet-character` — Parity of a Dirichlet character
- Frozen snapshot: `snapshots/def-parity-dirichlet-character.md` — `526547f7eb288796b20c3ba464d0f4ef9420310bb56900cdbe5e5d3bf5804679`
- Local HTML: `html/def-parity-dirichlet-character.html` — `7b3172214309192e1b885d5c503a9ee96576e58b2abebe398c3b9cadbac78825`
- Viewed individually at original resolution: `screenshots/def-parity-dirichlet-character--01.png` — `576a8c4a91fc48b6687df2c4e44437e2ff2dc028a038499072facd71f3addd82` (y=0, height=1400)

### `def-primitive-root-modulo-n` — Primitive roots modulo $n$
- Frozen snapshot: `snapshots/def-primitive-root-modulo-n.md` — `91447b0022ce1b7592974fe55986871ebe054684237835c2e11d7c678c8a54c5`
- Local HTML: `html/def-primitive-root-modulo-n.html` — `131c186f5b4e062ef47530feca7253acc6ecbd619124348d5cf6b7897e5d3972`
- Viewed individually at original resolution: `screenshots/def-primitive-root-modulo-n--01.png` — `6f57fbb53f45bb10ca6a01dc4b50847c4ecb58356be18f6b90cc4f4713b1873b` (y=0, height=1400)

### `def-regular-continued-fraction` — Finite and infinite regular continued fractions
- Frozen snapshot: `snapshots/def-regular-continued-fraction.md` — `68f251ba331b490fb47d177ce86a34b4fc976789b8ccb406ed72c4a2aa9ee5a9`
- Local HTML: `html/def-regular-continued-fraction.html` — `8202201f9d85b622db57814c9f81a69141a18150f37a30f12b4aa30172df9b88`
- Viewed individually at original resolution: `screenshots/def-regular-continued-fraction--01.png` — `37553bc80c696dc1dcc80de2c188d83c0221d961b9ab0a6234cb108ecf059657` (y=0, height=1400)

### `def-tame-and-wild-ramification` — Tame and wild ramification
- Frozen snapshot: `snapshots/def-tame-and-wild-ramification.md` — `b7f862854d0ceb4fc1df311533ce95079792aa06ec25f7e87f3628093d4b4101`
- Local HTML: `html/def-tame-and-wild-ramification.html` — `39919147abfa6009597b9c358b7339a90a442c116fc8c856c9fed8028b5e1b07`
- Viewed individually at original resolution: `screenshots/def-tame-and-wild-ramification--01.png` — `3afbbceff99ebecd58a8b3bb7c8b94689086f30c1aa07822b0595453c8c27b3c` (y=0, height=1400)

### `ex-best-rational-approximations-to-pi` — The fractions 22/7, 333/106, and 355/113 as approximations to pi
- Frozen snapshot: `snapshots/ex-best-rational-approximations-to-pi.md` — `e3d91b5a7782cf3275b4ac4bb9ea44c4657b63bf94dc18e52a51a2ba0e73cd8d`
- Local HTML: `html/ex-best-rational-approximations-to-pi.html` — `ede6633cf5617c1822f2b0c1e9625b2519583a970351f8071e5577b8907ff292`
- Viewed individually at original resolution: `screenshots/ex-best-rational-approximations-to-pi--01.png` — `23abdbbc9a1ff0ce8305ad7d8401a4bd83eaf510334b23d5f9f7939b49e06845` (y=0, height=1400)

### `ex-class-group-of-q-sqrt-ten` — Class group of Q(sqrt 10)
- Frozen snapshot: `snapshots/ex-class-group-of-q-sqrt-ten.md` — `a7580721603104016a1c6b695f586e7f86b73a80ee5e3b440d5ea746f2b62163`
- Local HTML: `html/ex-class-group-of-q-sqrt-ten.html` — `4aed55aa6a842d1e1d6676154d3de6bcbe879433f792da6dc841e1bea90a44b4`
- Viewed individually at original resolution: `screenshots/ex-class-group-of-q-sqrt-ten--01.png` — `e27c9feb17dbf2550110dc88693aa28ee9692c9cca1d85345dd0dcd025c74d82` (y=0, height=1400)
- Viewed individually at original resolution: `screenshots/ex-class-group-of-q-sqrt-ten--02.png` — `11a3c7a5fc8a635d9fe0e40de40bb1926fddfcaaca16ef7bd9e6954815dbcc40` (y=1300, height=1400)
- Viewed individually at original resolution: `screenshots/ex-class-group-of-q-sqrt-ten--03.png` — `6ec4c73eb8a194da5f9328bcfe1467ee01618e355a35be68d5a8565d7c7715e6` (y=2600, height=765)

### `ex-dirichlet-characters-modulo-eight-and-twelve` — Dirichlet character tables modulo 8 and 12
- Frozen snapshot: `snapshots/ex-dirichlet-characters-modulo-eight-and-twelve.md` — `a8ff9c0f0e68414b89be8f9a6c3d57efd420c330be77096fa2fba4c31b419b03`
- Local HTML: `html/ex-dirichlet-characters-modulo-eight-and-twelve.html` — `3f4edb0b6cc5c33c8b9b5d919dc05238a0e1cd5b49918e910fa1f23abf156a09`
- Viewed individually at original resolution: `screenshots/ex-dirichlet-characters-modulo-eight-and-twelve--01.png` — `37672333097de3aa849735845cfbb5c2331bbaa05d06dcf884385c66dfdaa7b0` (y=0, height=1400)

### `ex-divisor-summatory-error-table` — The divisor summatory estimate through several small values
- Frozen snapshot: `snapshots/ex-divisor-summatory-error-table.md` — `b7ffcc8f4830c417074e009bd23e2d6c6f8e50cd256b989f17af188b428bfc15`
- Local HTML: `html/ex-divisor-summatory-error-table.html` — `9d2587bd695396082a44bb8f1ed3f34519149618dd4f8ea6aee680077e4a7d75`
- Viewed individually at original resolution: `screenshots/ex-divisor-summatory-error-table--01.png` — `729e3580398098c43967d26e69f7e68f55f38767e9071e37e09d57455867ca7a` (y=0, height=1400)

### `ex-finite-euler-factors-under-character-induction` — Finite Euler factor from modulus 4 to 12
- Frozen snapshot: `snapshots/ex-finite-euler-factors-under-character-induction.md` — `0300315599df6fba83db32fc4aa55657bfa23129e6c13acdbf39c1debcd2f8e5`
- Local HTML: `html/ex-finite-euler-factors-under-character-induction.html` — `e75096d5bd33e57923fda275546a78a00077683fa775ae9163a671d46a1c402b`
- Viewed individually at original resolution: `screenshots/ex-finite-euler-factors-under-character-induction--01.png` — `548d11dd7b20799ac7c8cec26b116d6a0b0c19e5d5d46937c6a98849dbb1a923` (y=0, height=1400)

### `ex-from-psi-to-the-logarithmic-integral` — From psi to the logarithmic integral
- Frozen snapshot: `snapshots/ex-from-psi-to-the-logarithmic-integral.md` — `4efcf86e91dba5bc2d520c4ffb2e4bfd78b660055c1d1ed8906e5097cccbe5dd`
- Local HTML: `html/ex-from-psi-to-the-logarithmic-integral.html` — `86ee1eb93555abe3ccf5ac6cc93b669e2ddb8504c7b6529abb816cb98148c133`
- Viewed individually at original resolution: `screenshots/ex-from-psi-to-the-logarithmic-integral--01.png` — `fa49fe9ad7fb3b0f3961cc6c09dd3c99f12ca812af798a9e4f9050605ef403a1` (y=0, height=1400)

### `ex-hasse-minkowski-for-a-quaternary-form` — A quaternary Hasse-Minkowski calculation
- Frozen snapshot: `snapshots/ex-hasse-minkowski-for-a-quaternary-form.md` — `42fd5a2357e7c4fb6e0d5e639ae4b54faa3d17594a58e354b87c503a12f6dfd7`
- Local HTML: `html/ex-hasse-minkowski-for-a-quaternary-form.html` — `6866b471573e89483dd8935b08ade1731cb239b174b51744f708bf6b8bc8064e`
- Viewed individually at original resolution: `screenshots/ex-hasse-minkowski-for-a-quaternary-form--01.png` — `135d60290de230b71c32bc3a8ed58376378f19acfc31cccf83b441e880e0d132` (y=0, height=1400)

### `ex-linear-congruence-worked` — The congruence $14x\equiv30\pmod{100}$ has exactly the two solutions $x\equiv45,95\pmod{100}$
- Frozen snapshot: `snapshots/ex-linear-congruence-worked.md` — `a37aa0ae79f5b42091208cdd78233c71552f31f93b06b1222cd42a70f8afc053`
- Local HTML: `html/ex-linear-congruence-worked.html` — `2af1be18da5fee7877a3ca1663ea41baa2ade4190c6b406a7c7dea8518ac4974`
- Viewed individually at original resolution: `screenshots/ex-linear-congruence-worked--01.png` — `3691c166f342d3a91d1e6c10fb78bc2471c1d91bf293efa3a38d99d0fd30878d` (y=0, height=1400)

### `ex-no-everywhere-unramified-extension-of-q` — No nontrivial everywhere unramified number field over Q
- Frozen snapshot: `snapshots/ex-no-everywhere-unramified-extension-of-q.md` — `2ba650ab261b49b0e26d0b23549e9b79f8cffd3c9399d14081c32e3e4f3bbf1f`
- Local HTML: `html/ex-no-everywhere-unramified-extension-of-q.html` — `260bd7c4ecadda2984bfa0387f26ac97e29ebba3ffe8344851837d97a698ab3a`
- Viewed individually at original resolution: `screenshots/ex-no-everywhere-unramified-extension-of-q--01.png` — `125de45d4da5800bc569d427afe32cce5c26d9926430ad6c4a19e1e2918ed6a8` (y=0, height=1400)
- Viewed individually at original resolution: `screenshots/ex-no-everywhere-unramified-extension-of-q--02.png` — `c9d62ac36a0faaeb9f5a1d0a1377c2a94b07d18fd2142878ca5fa35a48bc6876` (y=1300, height=517)

### `ex-pell-equation-for-three` — The Pell equation for $D=3$
- Frozen snapshot: `snapshots/ex-pell-equation-for-three.md` — `8842631622ad0a79032c03cf23f8e8300535e2c1e7a5f46856ecce94130f0747`
- Local HTML: `html/ex-pell-equation-for-three.html` — `97c78b21bcc80e55a01d8c7a83dd534a025c5f2dc479f5d63b078ac67a265eef`
- Viewed individually at original resolution: `screenshots/ex-pell-equation-for-three--01.png` — `85a7040cc8d2e22d75ed6dd6feb150a73e7eec607e9ef529126d6c7638bebfe2` (y=0, height=1400)

### `ex-prime-number-theorem-in-a-small-progression` — Prime number theorem in a small progression
- Frozen snapshot: `snapshots/ex-prime-number-theorem-in-a-small-progression.md` — `70fa057954dc56444a461c9873c4e5cbd23d51313a1aae7e73838d4010f470f2`
- Local HTML: `html/ex-prime-number-theorem-in-a-small-progression.html` — `dea0c73a768ee242552c11acf4465154f67e7e2a8bb2063beaafdace2acd96ef`
- Viewed individually at original resolution: `screenshots/ex-prime-number-theorem-in-a-small-progression--01.png` — `e007c1e0dbf177af39e18056b344b47f4b3c8ffbf92a37f0eb90a7584ce06104` (y=0, height=1400)

### `ex-quadratic-congruence-from-its-discriminant` — A nonmonic quadratic congruence solved through its discriminant
- Frozen snapshot: `snapshots/ex-quadratic-congruence-from-its-discriminant.md` — `529491ebd13db0362e609f64ca614de75b68554f09e7ebe2cdb66eddc0bfaef9`
- Local HTML: `html/ex-quadratic-congruence-from-its-discriminant.html` — `07ecc9a98b86b6653440cdd4a0849dffa05a6ee2fece1022a79631655fee7fc5`
- Viewed individually at original resolution: `screenshots/ex-quadratic-congruence-from-its-discriminant--01.png` — `abcfdf6dd79709d39ff3bd37999ffc4dbff916651c0d93a07a95cbdcb0969ea3` (y=0, height=1400)

### `ex-reduced-forms-of-discriminant-minus-twenty` — The reduced primitive forms of discriminant $-20$
- Frozen snapshot: `snapshots/ex-reduced-forms-of-discriminant-minus-twenty.md` — `6519a00f301ee2ac98847be67261e787333ba0a950edc60a31cb276f272ac2e3`
- Local HTML: `html/ex-reduced-forms-of-discriminant-minus-twenty.html` — `d2793f62590b9a9dcb4105ee0549356b08cb7d38689e280a2dcb902162071639`
- Viewed individually at original resolution: `screenshots/ex-reduced-forms-of-discriminant-minus-twenty--01.png` — `b53002f2586b505b991fb3da996fd706e8670acbc86267f4241596f833a80564` (y=0, height=1400)

### `ex-square-root-of-minus-one-in-q5` — A square root of minus one in Q_5
- Frozen snapshot: `snapshots/ex-square-root-of-minus-one-in-q5.md` — `1ee637d5744a8f82978ca50dc12d47d0a81aa3a64d25da50843bbae6bc32d755`
- Local HTML: `html/ex-square-root-of-minus-one-in-q5.html` — `6612f2ec161cf4f605cbe016268861d6680de22a4e595594af5175bf6667d929`
- Viewed individually at original resolution: `screenshots/ex-square-root-of-minus-one-in-q5--01.png` — `6730217c077077afd4cc0b8a2e3467f55050161186342afb7828cf6df5a3a42e` (y=0, height=1400)

### `ex-thue-lemma-produces-a-two-square-representation` — Thue's collision argument gives $73=3^2+8^2$
- Frozen snapshot: `snapshots/ex-thue-lemma-produces-a-two-square-representation.md` — `98450403974637de5f0aa4c9e31e3432de1ec5b0abcf4ba29fd63cf8c8696250`
- Local HTML: `html/ex-thue-lemma-produces-a-two-square-representation.html` — `f38eab155115393939143e03854e44b7f2c2fbb107c23f9edd706ca457549824`
- Viewed individually at original resolution: `screenshots/ex-thue-lemma-produces-a-two-square-representation--01.png` — `5d540ed895d88a23f295d89cd6283086850c57caba2f476edd361abd5fa7f292` (y=0, height=1400)

### `ex-unit-group-modulo-two-hundred-forty` — The unit group modulo $240$ decomposes as $C_2^2\times C_4^2$
- Frozen snapshot: `snapshots/ex-unit-group-modulo-two-hundred-forty.md` — `0ba65a5635e9b9aca70094574ee978a7c1a2f2a0031538e4900766a08faf8118`
- Local HTML: `html/ex-unit-group-modulo-two-hundred-forty.html` — `c08943140153ffa56e5b4445daea43807a142e1377754a28b82f77f6cc396964`
- Viewed individually at original resolution: `screenshots/ex-unit-group-modulo-two-hundred-forty--01.png` — `459577fc9efa4587c9150c8051854a58d180c4a12d6ba9678761aba805cb06a7` (y=0, height=1400)

### `fs-euclids-product-of-primes-plus-one-is-prime` — FALSE: for every finite list $p_0, \dots, p_{n-1}$ of distinct primes, $p_0 \cdots p_{n-1} + 1$ is prime
- Frozen snapshot: `snapshots/fs-euclids-product-of-primes-plus-one-is-prime.md` — `40b28c390e6ae4438d6fab711639ef44b71d6ed179075a2cdf9d3d1a9783bfcc`
- Local HTML: `html/fs-euclids-product-of-primes-plus-one-is-prime.html` — `2b2bfe82917aa540813024d65b397ba5b27970b018d6385731891bc4b0e7a092`
- Viewed individually at original resolution: `screenshots/fs-euclids-product-of-primes-plus-one-is-prime--01.png` — `81db51f9c2b204c0fb83d1c400137ad915a1f43b9af017a539d762eecc89c2aa` (y=0, height=1400)
- Viewed individually at original resolution: `screenshots/fs-euclids-product-of-primes-plus-one-is-prime--02.png` — `629dd599a7ca7bda8c74f368294a7f7696aaaf59737c3e3fccfd8328074cfa2f` (y=1300, height=1400)
- Viewed individually at original resolution: `screenshots/fs-euclids-product-of-primes-plus-one-is-prime--03.png` — `72dfe95c69b6f00083d22d35331537975e75edc8747fec29fded8a831cc23c5b` (y=2600, height=1201)

### `lem-binary-quadratic-form-substitution-is-a-right-action` — Integral substitution defines a right action of $\mathrm{SL}_2(\mathbb Z)$ on integral binary quadratic forms
- Frozen snapshot: `snapshots/lem-binary-quadratic-form-substitution-is-a-right-action.md` — `e92577ebe424418d8a58edca9d9a6f6bf6dd23efe09c2f5e61ad4b774cc22b72`
- Local HTML: `html/lem-binary-quadratic-form-substitution-is-a-right-action.html` — `1c9d3f6fbef6a9a9d4134a38c7a032cb6b850f543414ce43ed263a849f09b88e`
- Viewed individually at original resolution: `screenshots/lem-binary-quadratic-form-substitution-is-a-right-action--01.png` — `fa0437061aed33487a69e638920dc0db2b776458c67f5d856334e308159abf60` (y=0, height=1400)

### `lem-codifferent-is-a-fractional-ideal` — The codifferent is a fractional ideal
- Frozen snapshot: `snapshots/lem-codifferent-is-a-fractional-ideal.md` — `b8270c8965cbb0e1b1ce8b94057dea640071a43856d3b7d77249aa7a2930abb1`
- Local HTML: `html/lem-codifferent-is-a-fractional-ideal.html` — `0cebeeb8d9e53002b9e8ea06078ecf28bd8e64f78a134dae6d381003c6dff810`
- Viewed individually at original resolution: `screenshots/lem-codifferent-is-a-fractional-ideal--01.png` — `b3b072f1e2f2ae91f13a98a0e1b6bde4d3903c16fb60d36ea04331153426726c` (y=0, height=1400)

### `lem-coprime-primitive-two-square-products-remain-primitive` — Coprime primitively represented factors have a primitive product representation
- Frozen snapshot: `snapshots/lem-coprime-primitive-two-square-products-remain-primitive.md` — `d94999f518f02b1a751c4cff48241bf2e0bc2aa14fddd422704ccf3ec4c02cda`
- Local HTML: `html/lem-coprime-primitive-two-square-products-remain-primitive.html` — `5d4d2a811a88206d42c962fe13b90245b341f7d22df55afd5a7f8a14aba97b7a`
- Viewed individually at original resolution: `screenshots/lem-coprime-primitive-two-square-products-remain-primitive--01.png` — `31ce437c335fb5c80823c9dacaec999cd0bb4475d1559205c91fe6f33f960846` (y=0, height=1400)

### `lem-divisibility-via-valuations` — For positive integers $a$ and $b$: $a \mid b$ if and only if $v_p(a) \le v_p(b)$ for every prime $p$
- Frozen snapshot: `snapshots/lem-divisibility-via-valuations.md` — `16bdd37ab0db04434e7cf2847750906d34e0b2b0a3d37eb7a4725f5e80e50601`
- Local HTML: `html/lem-divisibility-via-valuations.html` — `efc03485a464e6104c36bbda23a8b8bc247d77eee536b7d5c65f743b20d3cee1`
- Viewed individually at original resolution: `screenshots/lem-divisibility-via-valuations--01.png` — `39901cc01e2ef685c68bfbb6aab2dd5e13e21805126a41b4d753dd1c24532025` (y=0, height=1400)
- Viewed individually at original resolution: `screenshots/lem-divisibility-via-valuations--02.png` — `dcf421087ae0921c48ac06185b1dada28fcbf1ca448c699d0334a88f97a6f7ce` (y=1300, height=1400)
- Viewed individually at original resolution: `screenshots/lem-divisibility-via-valuations--03.png` — `3738417c97820be1f5aaf258e910a5bf78c039112fdb962d7c6ed7e05e50795f` (y=2600, height=1282)

### `lem-fourier-transform-of-a-gaussian` — Fourier transform of a Gaussian
- Frozen snapshot: `snapshots/lem-fourier-transform-of-a-gaussian.md` — `18f6ce038805c4319f01b773a448191edecfad91ac655d522f1754720672ac01`
- Local HTML: `html/lem-fourier-transform-of-a-gaussian.html` — `ac58b1ee8092ae806b814067667952cc0f0bf8daed73136902768802b530f6d6`
- Viewed individually at original resolution: `screenshots/lem-fourier-transform-of-a-gaussian--01.png` — `e91e6ba2893988a79d99246eaa4b9640e6064d3c8ed2fe63d8d287b737a5c9e3` (y=0, height=1400)

### `lem-good-polynomial-reduction-kills-inertia` — Good polynomial reduction kills inertia
- Frozen snapshot: `snapshots/lem-good-polynomial-reduction-kills-inertia.md` — `c02a617354de77c7214d6b8b77681673de494ef00929f9af85fc28341be57581`
- Local HTML: `html/lem-good-polynomial-reduction-kills-inertia.html` — `a3c52e83353a2ec2c16f4454c3362bddb687d9a333311f88bb8764b683a2d99f`
- Viewed individually at original resolution: `screenshots/lem-good-polynomial-reduction-kills-inertia--01.png` — `b07df8034bbeba3a15b93cc6d4ebbc8a11121ca17ba3b57ed1e7aa2fec2c7db8` (y=0, height=1400)

### `lem-leading-coefficient-is-minimal-in-a-reduced-class` — The leading coefficient of a reduced positive-definite form is minimal in its proper-equivalence class
- Frozen snapshot: `snapshots/lem-leading-coefficient-is-minimal-in-a-reduced-class.md` — `fe057d327f573cc3195089b2fb33410bd42f30a33f9ed6609354a66047f24208`
- Local HTML: `html/lem-leading-coefficient-is-minimal-in-a-reduced-class.html` — `2f25ce88277a7da38648dc78365396b24fa8b521ba1aca0291c9a722c821fec6`
- Viewed individually at original resolution: `screenshots/lem-leading-coefficient-is-minimal-in-a-reduced-class--01.png` — `41420eae06aade367edb07a5667a220e52bd6529f41429b892e073fcdc77b480` (y=0, height=1400)

### `lem-monogenic-prime-factorisation-by-polynomial-reduction` — Choice-free prime factorisation for a monogenic number ring
- Frozen snapshot: `snapshots/lem-monogenic-prime-factorisation-by-polynomial-reduction.md` — `0c2dbeed9798e2b240b425f3ea2c5068504bdb3536aa24c61574786f83ba69e5`
- Local HTML: `html/lem-monogenic-prime-factorisation-by-polynomial-reduction.html` — `a7f8beeff4d98f0b83268e099ba5d520af0c8cc45ded0a59f4c0c5895962a78a`
- Viewed individually at original resolution: `screenshots/lem-monogenic-prime-factorisation-by-polynomial-reduction--01.png` — `16ec40bd5abd93d4b1f2046341a9643c739dedd55f3c2b322d0b474e37750846` (y=0, height=1400)
- Viewed individually at original resolution: `screenshots/lem-monogenic-prime-factorisation-by-polynomial-reduction--02.png` — `02ddfca998a22afccc703879ead41908241395661124075cd798812ff2dfa0ff` (y=1300, height=1400)
- Viewed individually at original resolution: `screenshots/lem-monogenic-prime-factorisation-by-polynomial-reduction--03.png` — `f62fcbfcbc33648469331bfc540dfc77fc95195d3778cca15c02a177eb6be9fa` (y=2600, height=212)

### `lem-normalized-two-square-count-is-multiplicative` — The normalized two-square count is multiplicative with the expected prime-power values
- Frozen snapshot: `snapshots/lem-normalized-two-square-count-is-multiplicative.md` — `52d090f49923700b9b99b1b9e7491b4d8800519440dca1b8e96fed474db19abc`
- Local HTML: `html/lem-normalized-two-square-count-is-multiplicative.html` — `2ddb449dff5977ff7b8b3daaf1311787a8e4bdb7ce858715d3ca9732fcf920f7`
- Viewed individually at original resolution: `screenshots/lem-normalized-two-square-count-is-multiplicative--01.png` — `f2a0a022645d37240e9ba93a576f4c15c027b169b9435f881528d8251f8ca780` (y=0, height=1400)

### `lem-pell-norm-multiplication` — The Pell norm is multiplicative
- Frozen snapshot: `snapshots/lem-pell-norm-multiplication.md` — `3f91564a63c3990489d5dc8749062548d91c9dc89ba30aa4a70fab9dd4b78c15`
- Local HTML: `html/lem-pell-norm-multiplication.html` — `9bdc39e3b388ebda2be5b1a7af214de284d443cce8ce8fa07837a2cf723e8e26`
- Viewed individually at original resolution: `screenshots/lem-pell-norm-multiplication--01.png` — `a1e94baf3a1000529ebce22e387d6fc7f36a7c696955107dd2f00296240824aa` (y=0, height=1400)

### `lem-primitive-root-lift-to-prime-square` — For an odd prime $p$ and a primitive root $g$ modulo $p$, at least one of $g$ and $g+p$ is primitive modulo $p^2$
- Frozen snapshot: `snapshots/lem-primitive-root-lift-to-prime-square.md` — `b1eac74b6f0672e48dc7e8c4d5f6d51d0f5aae3370059f2e6a03f6e6c0022d37`
- Local HTML: `html/lem-primitive-root-lift-to-prime-square.html` — `1ac04e777271d61642bef1120c34aa59aa39d9008aaf6f0d2dff2e3290ae3528`
- Viewed individually at original resolution: `screenshots/lem-primitive-root-lift-to-prime-square--01.png` — `70cb1defb6950e6e46e21758b72294f9bde2592289005d60260c1fb37fc6c8de` (y=0, height=1400)
- Viewed individually at original resolution: `screenshots/lem-primitive-root-lift-to-prime-square--02.png` — `ff4522b90b1f5f083110ddaef2eb08ee05168754eed12a0ed5bc27c8a7fb492d` (y=1300, height=362)

### `lem-squares-modulo-eight` — A square is congruent to $0$, $1$ or $4$ modulo $8$
- Frozen snapshot: `snapshots/lem-squares-modulo-eight.md` — `bb95df62d8b4b6378385c83a816b1d1b4f7a4071d796a60378bee5d03b281aad`
- Local HTML: `html/lem-squares-modulo-eight.html` — `5d912d444c981ec1506e027f8fc119cefd7c50b684962a2da8936490c67139e5`
- Viewed individually at original resolution: `screenshots/lem-squares-modulo-eight--01.png` — `b3ca35512afb5225a348223191f79e120226979a5911d30b1c1d050b71d098ec` (y=0, height=1400)
- Viewed individually at original resolution: `screenshots/lem-squares-modulo-eight--02.png` — `d7e733ee9b13cdd6a63f6dc151983cad01b09a942515a187f078a7ee6cb08b24` (y=1300, height=718)

### `lem-two-square-representations-of-prime-powers` — Prime powers represented as sums of two squares
- Frozen snapshot: `snapshots/lem-two-square-representations-of-prime-powers.md` — `d8de762c0827637a75245ac31a992eeed6169d0ebb4f300ee197e1d140c24e5d`
- Local HTML: `html/lem-two-square-representations-of-prime-powers.html` — `16fcb6860ac8afc70b33b47f748b854000688e5f568e9aa1e760cc1aec5db0bc`
- Viewed individually at original resolution: `screenshots/lem-two-square-representations-of-prime-powers--01.png` — `5df7b5d54ef5584dba4eb96a889ee235efb5e8b871c7a717c6c19113d74e3935` (y=0, height=1400)

### `lem-zeta-reciprocal-zero-sum-bound` — Zeta reciprocal zero sum bound
- Frozen snapshot: `snapshots/lem-zeta-reciprocal-zero-sum-bound.md` — `f769e9a52ccab4977ca124b5cf42b0ce38b510d1b7760fe48ef61abed724eae2`
- Local HTML: `html/lem-zeta-reciprocal-zero-sum-bound.html` — `04971ac74c6483fecd657ab4939ba7092a526ed677dd9f675f00185e8d3f71d9`
- Viewed individually at original resolution: `screenshots/lem-zeta-reciprocal-zero-sum-bound--01.png` — `ba33719bdf83d48000a676b705ab042ae5d6989a7d64cf4e73f9ebd496e817fb` (y=0, height=1400)

### `prop-jacobi-symbol-well-defined` — The Jacobi symbol is well defined on numerator residue classes
- Frozen snapshot: `snapshots/prop-jacobi-symbol-well-defined.md` — `a4fba335bcbded7e2c33cc2925e2805b485f67fecca3f6c334ac686578039df1`
- Local HTML: `html/prop-jacobi-symbol-well-defined.html` — `2a1ffcb6caedaec83e02273338c7f8d13c96e9603c3b7ec5e57418480060c427`
- Viewed individually at original resolution: `screenshots/prop-jacobi-symbol-well-defined--01.png` — `e46854a202b848eed495082f5d4e6dc183125ed2c84952a24e0226339335d56c` (y=0, height=1400)

### `prop-unit-square-has-jacobi-symbol-one` — A unit square modulo an odd integer has Jacobi symbol one
- Frozen snapshot: `snapshots/prop-unit-square-has-jacobi-symbol-one.md` — `9ef3e15b9a7f26f59b222fec118c59f6b9267bc9a48d72b09e84e137c0819eaa`
- Local HTML: `html/prop-unit-square-has-jacobi-symbol-one.html` — `83725a45045fe62e53742d06251d7edfd22932b0fc20dcf7b507ced68cab3c16`
- Viewed individually at original resolution: `screenshots/prop-unit-square-has-jacobi-symbol-one--01.png` — `675a52712555bbce380f6655b8f00e98d02f162d62c5043ffb5bb41ad2f70e69` (y=0, height=1400)

### `thm-chebyshev-psi-prime-number-theorem-error` — Chebyshev psi prime number theorem error
- Frozen snapshot: `snapshots/thm-chebyshev-psi-prime-number-theorem-error.md` — `48dc4058312d4b2801f34b298d942869129cca55959b08a9c7770f1ee3763c16`
- Local HTML: `html/thm-chebyshev-psi-prime-number-theorem-error.html` — `17820dcb70b01bbf4264e6b80e20a5d161ac7d9841ee38fa85bd1959ec1c288f`
- Viewed individually at original resolution: `screenshots/thm-chebyshev-psi-prime-number-theorem-error--01.png` — `71847dff9f791675eb6f0459dc972f15dd2494cf49fa28e38bb7720a482f5019` (y=0, height=1400)

### `thm-convergence-of-infinite-regular-continued-fractions` — Every infinite regular continued fraction converges to a unique real number
- Frozen snapshot: `snapshots/thm-convergence-of-infinite-regular-continued-fractions.md` — `ddda91abec86b50abb21aa95fa72b4bfc30b81740a6b1681c19bcc6439d7faa1`
- Local HTML: `html/thm-convergence-of-infinite-regular-continued-fractions.html` — `c625142c0ac64a1e89cdb26ae29b8bd35d2fb5faffc9bd2b708db4bae6229afa`
- Viewed individually at original resolution: `screenshots/thm-convergence-of-infinite-regular-continued-fractions--01.png` — `4fd1341f6fdcc5ea101ae5b672afb404e260cd3d328399318351002e3900c1e1` (y=0, height=1400)
- Viewed individually at original resolution: `screenshots/thm-convergence-of-infinite-regular-continued-fractions--02.png` — `010ac4003322172b39edf6c9e963b3b8dc439596adf7cb79a5408e7208334fbc` (y=1300, height=283)

### `thm-different-exponent-in-tame-and-wild-ramification` — Different exponents in tame and wild ramification
- Frozen snapshot: `snapshots/thm-different-exponent-in-tame-and-wild-ramification.md` — `ecfd2b8bf846ab277aeb269926f8345a455b809d70719cb9a751ae1c1cb48f10`
- Local HTML: `html/thm-different-exponent-in-tame-and-wild-ramification.html` — `2039f4d1dc56934f00e87df974bd14eea3ab7c9f906759723164b4500e905642`
- Viewed individually at original resolution: `screenshots/thm-different-exponent-in-tame-and-wild-ramification--01.png` — `a68e95e2e2323d79114b912d285399048e2c04c4f5d78fae236304cb2a15daaa` (y=0, height=1400)

### `thm-dirichlet-l-nonvanishing-line-one` — Nonprincipal Dirichlet L-functions do not vanish on Re s = 1 away from s = 1
- Frozen snapshot: `snapshots/thm-dirichlet-l-nonvanishing-line-one.md` — `cc441db83e7bfa66327b6cf60eb648f1bd5da2fbe38b216ce6131ebbfa1df40c`
- Local HTML: `html/thm-dirichlet-l-nonvanishing-line-one.html` — `469ef32620a1aac107c8f5ac377c1fd9dffafd74152cddec6f4219cc09ebdf2a`
- Viewed individually at original resolution: `screenshots/thm-dirichlet-l-nonvanishing-line-one--01.png` — `57e1d90bb749826049fd7afe3e71dc0f286c062bb88d67de442b4fda864a3f5f` (y=0, height=1400)

### `thm-discriminant-is-the-norm-of-the-different` — The discriminant is the norm of the different
- Frozen snapshot: `snapshots/thm-discriminant-is-the-norm-of-the-different.md` — `d67d521bcbf26d6ba81ad4dcf746280a374e90bbd5269fbce3310e6a516bc080`
- Local HTML: `html/thm-discriminant-is-the-norm-of-the-different.html` — `3d4fa310d01b3fdb2022482a25492476b8bb567a50f81c07c3293444dfad6ef0`
- Viewed individually at original resolution: `screenshots/thm-discriminant-is-the-norm-of-the-different--01.png` — `efd5cd8b443468249205befb77680cacee28df6d2433ea28ccbb89564c213bd0` (y=0, height=1400)

### `thm-euler-totient-summatory-estimate` — The summatory totient function is 3 over pi squared times x squared plus O(x log x)
- Frozen snapshot: `snapshots/thm-euler-totient-summatory-estimate.md` — `dfce20e86750f1d5460e589f7c2c97d796809d340f0c4a8b821500a4a56b34a5`
- Local HTML: `html/thm-euler-totient-summatory-estimate.html` — `f50146193a816170e32507e8d28bce35305b991c91325de3985c66a8a6a59d54`
- Viewed individually at original resolution: `screenshots/thm-euler-totient-summatory-estimate--01.png` — `0314053ea8a6bd38708975c37b013ef6182d1c7dfac2f5c93da9eac099a0b80d` (y=0, height=1400)

### `thm-frobenius-elements-above-a-prime-are-conjugate` — Frobenius elements above a prime are conjugate
- Frozen snapshot: `snapshots/thm-frobenius-elements-above-a-prime-are-conjugate.md` — `51b1a4f62e2d772d3df34a1baeb0b115363e80e3613b34df6096753c2d3f4f74`
- Local HTML: `html/thm-frobenius-elements-above-a-prime-are-conjugate.html` — `7cacb091af9eb10a8baa9dacd32092efb74018d03c189618321cbcd0d4d3caae`
- Viewed individually at original resolution: `screenshots/thm-frobenius-elements-above-a-prime-are-conjugate--01.png` — `36c9ec98f1a9e6f814942069636a391701ce4193771c5bce2afc4f3b859b754e` (y=0, height=1400)

### `thm-hasse-minkowski-for-ternary-forms-over-q` — Hasse-Minkowski for ternary forms over Q
- Frozen snapshot: `snapshots/thm-hasse-minkowski-for-ternary-forms-over-q.md` — `1a7440caab7c9d56eef84bda7ce77267dff003f0ec1282d685491014c77a54e2`
- Local HTML: `html/thm-hasse-minkowski-for-ternary-forms-over-q.html` — `5fc25d077018110612ebb4f7c8fab8877ab7bf211e16e7bb0c2a383462e0eeda`
- Viewed individually at original resolution: `screenshots/thm-hasse-minkowski-for-ternary-forms-over-q--01.png` — `ae405c323167d93184ddec6b2a5157441b524efad7de0291061e64e42c99eba3` (y=0, height=1400)
- Viewed individually at original resolution: `screenshots/thm-hasse-minkowski-for-ternary-forms-over-q--02.png` — `59bfa7aede4ce99f7b1eb4949a792c35b03f464cf5213de6104228c8ff3e899b` (y=1300, height=581)

### `thm-jacobi-symbol-reciprocity` — Quadratic reciprocity for coprime odd Jacobi denominators
- Frozen snapshot: `snapshots/thm-jacobi-symbol-reciprocity.md` — `3d429a6dfbeac063545b23178795e81696dbdcf144bb9fca5553c4feda15b329`
- Local HTML: `html/thm-jacobi-symbol-reciprocity.html` — `89784e2bb55ef2a40d1a74009ef9b63b6934a29185cf3a64a4509ac1aec63772`
- Viewed individually at original resolution: `screenshots/thm-jacobi-symbol-reciprocity--01.png` — `4494e5677f385c3671c2982639b84ab2fc5e9aeba24e6d85c90e9c188bf1fc65` (y=0, height=1400)

### `thm-local-isotropy-at-almost-all-primes` — Almost all local completions are isotropic in dimension at least three
- Frozen snapshot: `snapshots/thm-local-isotropy-at-almost-all-primes.md` — `b84bcb7170c7e5a6893dd346edadd9637fdfbb0e3896375d86fbb88c7e258324`
- Local HTML: `html/thm-local-isotropy-at-almost-all-primes.html` — `ed4ae487ad58e70d6fed2839b0621ecf2033f5bf3a706ccfac2a56ac8df27b42`
- Viewed individually at original resolution: `screenshots/thm-local-isotropy-at-almost-all-primes--01.png` — `4d142865dc77d4fc10842b90c7b6ab01b2c458dc341be6759ee33a035176feda` (y=0, height=1400)

### `thm-newman-zagier-tauberian-theorem` — Newman zagier tauberian theorem
- Frozen snapshot: `snapshots/thm-newman-zagier-tauberian-theorem.md` — `b4054a0e7c2b71dbe6dbf34d0dad243005a46509d582eda5156cc1a09749caa7`
- Local HTML: `html/thm-newman-zagier-tauberian-theorem.html` — `c3f28de9423790180fff3cc38eca19d77a3bbb62c9a44995016d1198c53195d5`
- Viewed individually at original resolution: `screenshots/thm-newman-zagier-tauberian-theorem--01.png` — `bb2cda2820c98a36c40c5d6d8f42bb13b3a19c5e28c0de91f297e2b70b822811` (y=0, height=1400)

### `thm-p-adic-absolute-value-is-nonarchimedean` — The p-adic absolute value is nonarchimedean
- Frozen snapshot: `snapshots/thm-p-adic-absolute-value-is-nonarchimedean.md` — `5ac3f7eaa54ea7d1128d699de46f7abad39ce1c4a1a77df852e90926eb69be1c`
- Local HTML: `html/thm-p-adic-absolute-value-is-nonarchimedean.html` — `44514c0a3f5a300c4fd619ea2460e20d4c2cd603269efbdeb4e679912318668b`
- Viewed individually at original resolution: `screenshots/thm-p-adic-absolute-value-is-nonarchimedean--01.png` — `12e7c460f3352a7268445f04575dc7c901fc0cdd1956847e7c23841c4e18807c` (y=0, height=1400)

### `thm-prime-number-theorem-logarithmic-integral` — Prime number theorem logarithmic integral
- Frozen snapshot: `snapshots/thm-prime-number-theorem-logarithmic-integral.md` — `70de926dd79a440f01fed9f82e0a90c50a823eeef7c93e6d3d1d029da43ff97a`
- Local HTML: `html/thm-prime-number-theorem-logarithmic-integral.html` — `b1889330c01040e9ec1db312b3a4071d744f9ba7d727c0e45b1b1cd6b5af90d0`
- Viewed individually at original resolution: `screenshots/thm-prime-number-theorem-logarithmic-integral--01.png` — `34d3909ccc6f72ce74cf7dc2a1585f753cfe99fae23cdc7b4e01bebd85ab0e96` (y=0, height=1400)

### `thm-product-formula-for-number-fields` — Product formula for a number field
- Frozen snapshot: `snapshots/thm-product-formula-for-number-fields.md` — `b0103735d94737417f01e56fee108ba4f116c4f23486db23c28079458fc04a7b`
- Local HTML: `html/thm-product-formula-for-number-fields.html` — `8ba79d806310a9ef8da04dd891f2e4e94c8ca0cdaac020db15724c33e7d0ad7b`
- Viewed individually at original resolution: `screenshots/thm-product-formula-for-number-fields--01.png` — `b517681eaf362cfb6567496837cb0c1c187ae5ad035040157865914fe524c1c3` (y=0, height=1400)
- Viewed individually at original resolution: `screenshots/thm-product-formula-for-number-fields--02.png` — `98c93e3497ec8aa4e357d6859f78dad8fdb5085eab9854dad3a2c1690917c5a4` (y=1300, height=1291)

### `thm-rational-continued-fraction-termination` — The continued-fraction algorithm terminates exactly on rational numbers
- Frozen snapshot: `snapshots/thm-rational-continued-fraction-termination.md` — `0c0bfe209dccf5fdddf77d7a471fb0a071422a6ec57cd1ec5bfaf4a3f0261e2f`
- Local HTML: `html/thm-rational-continued-fraction-termination.html` — `8c8b1ad73336d06c6cd959490918a64c43357fbea3f933f47cfce278d0d5450e`
- Viewed individually at original resolution: `screenshots/thm-rational-continued-fraction-termination--01.png` — `5c93c3d00b011c2947931ffc58da18b05eee66aafd1920af1834cd0ec2dde10f` (y=0, height=1400)

### `thm-second-supplement-to-quadratic-reciprocity` — Second supplement: $(2/p)=(-1)^{(p^2-1)/8}$
- Frozen snapshot: `snapshots/thm-second-supplement-to-quadratic-reciprocity.md` — `85ff5a965fea2538300bbbfd934dcf7d69a6f4bc97c21e8f3579f8ddaae4090f`
- Local HTML: `html/thm-second-supplement-to-quadratic-reciprocity.html` — `61dd1aef736a3a53b9170c33b844e85e7af12056edc62a4364aacb7bbeb6b65d`
- Viewed individually at original resolution: `screenshots/thm-second-supplement-to-quadratic-reciprocity--01.png` — `173099de93fbe0cd0452abaeb27212fef5bdd2721c206df5fa9a0180123b37a9` (y=0, height=1400)

### `thm-totient-of-a-prime-power` — For a prime $p$ and $k\ge1$, $\varphi(p^k)=p^k-p^{k-1}$
- Frozen snapshot: `snapshots/thm-totient-of-a-prime-power.md` — `054f3f25fa4ac6744ed78061bf63b5e54252dfa16547e2c8a71b3e4a429f34e5`
- Local HTML: `html/thm-totient-of-a-prime-power.html` — `03696ec68b582fd58d71c17c635733ca25a992b1235cf6622ccd96da18cc6553`
- Viewed individually at original resolution: `screenshots/thm-totient-of-a-prime-power--01.png` — `2b625f53f59ff6d354982ade14a4be2faf3e923e98dd3a553614647496655ba8` (y=0, height=1400)
- Viewed individually at original resolution: `screenshots/thm-totient-of-a-prime-power--02.png` — `24d063c828356564529078a44fdef0012f0b0ed9ac574c90488b8db351fa6be2` (y=1300, height=859)

### `thm-unit-group-chinese-remainder-decomposition` — For pairwise coprime positive moduli, the Chinese remainder bijection restricts to an isomorphism of unit groups
- Frozen snapshot: `snapshots/thm-unit-group-chinese-remainder-decomposition.md` — `8cf40fd187fde6b44992fe39c6ac5e06c4edb0c2dfc64988e2cb45f143d4142d`
- Local HTML: `html/thm-unit-group-chinese-remainder-decomposition.html` — `f01fb1f3f525d9f5a6c42833f435634e47a372a8407203e09b4a7eb02ed30343`
- Viewed individually at original resolution: `screenshots/thm-unit-group-chinese-remainder-decomposition--01.png` — `55781f101203f5c444d297a095b20cfe0b61e5a5ac8eaaaab1f3d86e6e32af33` (y=0, height=1400)

### `thm-von-mangoldt-logarithmic-derivative-zeta` — The logarithmic derivative of the zeta Dirichlet series is the Dirichlet series of the von Mangoldt function on Re s greater than 1
- Frozen snapshot: `snapshots/thm-von-mangoldt-logarithmic-derivative-zeta.md` — `aa6e15f7cca2f41b3731a2c1eb9b2eefdbd3664d9740da8b3422c8bfd6ccdd49`
- Local HTML: `html/thm-von-mangoldt-logarithmic-derivative-zeta.html` — `d0dc72e00e9fbd14a609237ce7404341eb8665bc12977cd090ea9a2e03639b63`
- Viewed individually at original resolution: `screenshots/thm-von-mangoldt-logarithmic-derivative-zeta--01.png` — `7d13f1c4da55a20161fc606d7be14ab9d7a146961dac1d381e62fd1b17437b01` (y=0, height=1400)
