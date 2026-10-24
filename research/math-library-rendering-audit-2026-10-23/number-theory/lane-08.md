# Number Theory rendering audit — lane 08

## Scope and coverage

Reviewed all 76 assigned titles and complete ItemBody snapshots. Opened each of the 109 receipt-listed PNG tiles individually using original resolution, without downscaling or collage. Each tile hash below was computed from the local PNG and compared with its receipt.

Receipt totals: 3713 KaTeX expressions, 0 TikZ diagrams, 0 KaTeX errors, and 0 diagram failures. 76/76 current sources match assignment hashes; 76/76 snapshots match those sources.

## Finding

- **lem-hermite-minkowski-bounded-primitive-integral-element**, proof conclusion / Remarks heading, source snapshot line 171. The final proof paragraph ends with `∎ ## Remarks`; in the rendered tile this heading token is literal text, not a section heading. Classification: `markdown-heading-parsing`. Repair: put `## Remarks` on a new line, separated from the proof paragraph by a blank line. Evidence: `screenshots/lem-hermite-minkowski-bounded-primitive-integral-element--04.png` (SHA256 `a46700c0715a6375c14a9bb717c3df12db8a2e4736ed33b5276d6347a40a25ab`), individually viewed at original resolution.

## Diagram review

No source-supported missing diagram candidate was warranted. The mathematical relations in these items are stated directly, and an added diagram would be optional rather than a correction. Receipts report no TikZ diagrams and no diagram failures for this lane.

## Item and tile coverage

Every listed tile was opened individually at original resolution. Resolution and SHA256 are recorded for each tile; hashes match the receipt unless otherwise recorded in the JSON coverage.

### cex-chebyshev-bounds-do-not-give-the-prime-number-theorem

Title: Two-sided Chebyshev bounds do not imply the prime number theorem

Source: `items/cex-chebyshev-bounds-do-not-give-the-prime-number-theorem.md` (SHA256 `57ba8f263b20b01aec89a82f48b9133ef1bfdc1301cb82ad2dae3d6700f715d9`; assignment match: true)
Snapshot: `snapshots/cex-chebyshev-bounds-do-not-give-the-prime-number-theorem.md` (SHA256 `57ba8f263b20b01aec89a82f48b9133ef1bfdc1301cb82ad2dae3d6700f715d9`; matches source: true)
Receipt: `screenshots/cex-chebyshev-bounds-do-not-give-the-prime-number-theorem.json` (SHA256 `8f91eafe4069ffe21f36943f5af213b667413d88d1374bc51343115db07368e5`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/cex-chebyshev-bounds-do-not-give-the-prime-number-theorem--01.png` — 1200x1400, SHA256 `89d30edb5eff74234169d43142f96fc9752cdac555eb6e962b5b757aef30f15d`; receipt match: true; viewed individually at original resolution: true.

### cex-frobenius-cycle-type-needs-good-reduction

Title: Frobenius cycle type needs good reduction

Source: `items/cex-frobenius-cycle-type-needs-good-reduction.md` (SHA256 `f8548a476bec21c48f108538286c531b698010f60bf19ad42b807cdd4e72b232`; assignment match: true)
Snapshot: `snapshots/cex-frobenius-cycle-type-needs-good-reduction.md` (SHA256 `f8548a476bec21c48f108538286c531b698010f60bf19ad42b807cdd4e72b232`; matches source: true)
Receipt: `screenshots/cex-frobenius-cycle-type-needs-good-reduction.json` (SHA256 `54a76aed0e7a30aae921ca19ed33e9f8044e2cb1c7b3e0f7ef8b149c68a105bd`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/cex-frobenius-cycle-type-needs-good-reduction--01.png` — 1200x1400, SHA256 `24da6e3727d1366b62d16fa163947535c30afcca2860d74696d334b9ea252a6e`; receipt match: true; viewed individually at original resolution: true.

### cex-pell-units-need-not-be-all-quadratic-field-units

Title: The elementary Pell order can miss units from the larger quadratic order

Source: `items/cex-pell-units-need-not-be-all-quadratic-field-units.md` (SHA256 `c18a0ad9d97e36ba96cd050d49ab22235fff4c12d57f08d08b0d3aabfa729156`; assignment match: true)
Snapshot: `snapshots/cex-pell-units-need-not-be-all-quadratic-field-units.md` (SHA256 `c18a0ad9d97e36ba96cd050d49ab22235fff4c12d57f08d08b0d3aabfa729156`; matches source: true)
Receipt: `screenshots/cex-pell-units-need-not-be-all-quadratic-field-units.json` (SHA256 `41686e39f10b7fd202e83c6a20fd1f7675f1a9cfd5f6d32afb9bf136391824ac`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/cex-pell-units-need-not-be-all-quadratic-field-units--01.png` — 1200x1400, SHA256 `5acce734f2c6bf2d6750984de05fabcfc9cfe7629e4a8affc3968d4ca761a2a4`; receipt match: true; viewed individually at original resolution: true.

### cex-squaring-on-units-is-not-a-homomorphism-nonabelian-warning

Title: Squaring is not a homomorphism on a nonabelian group

Source: `items/cex-squaring-on-units-is-not-a-homomorphism-nonabelian-warning.md` (SHA256 `281087446d78345c3b4a96129565d4d3f30095c7fa51643532279bf2a0977e47`; assignment match: true)
Snapshot: `snapshots/cex-squaring-on-units-is-not-a-homomorphism-nonabelian-warning.md` (SHA256 `281087446d78345c3b4a96129565d4d3f30095c7fa51643532279bf2a0977e47`; matches source: true)
Receipt: `screenshots/cex-squaring-on-units-is-not-a-homomorphism-nonabelian-warning.json` (SHA256 `5d9dfdf5ada71a50569f85cf3345c842b01e45814aedadd244688070c75f48c6`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/cex-squaring-on-units-is-not-a-homomorphism-nonabelian-warning--01.png` — 1200x1400, SHA256 `32041405ccec333a46d85c0cca546a362fb18843be9bc474728179f8e27a9302`; receipt match: true; viewed individually at original resolution: true.

### cor-asymptotic-density-of-coprime-pairs

Title: The proportion of pairs in {1,...,n}^2 that are coprime tends to 6 over pi squared

Source: `items/cor-asymptotic-density-of-coprime-pairs.md` (SHA256 `84c722d26c3054419c7026df5caeeeb6dd8bf5451a56fd1ba9be51a223886400`; assignment match: true)
Snapshot: `snapshots/cor-asymptotic-density-of-coprime-pairs.md` (SHA256 `84c722d26c3054419c7026df5caeeeb6dd8bf5451a56fd1ba9be51a223886400`; matches source: true)
Receipt: `screenshots/cor-asymptotic-density-of-coprime-pairs.json` (SHA256 `5a60a478f1c8b64c2fa8a104aab198efbc9b5b297f1a57d35364606cde724b5e`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/cor-asymptotic-density-of-coprime-pairs--01.png` — 1200x1400, SHA256 `9c3f1cc70699019ba26761090d404e4f710610386e3eb0f405e334d06d26e320`; receipt match: true; viewed individually at original resolution: true.

### cor-complete-splitting-and-trivial-frobenius

Title: Complete splitting and trivial frobenius

Source: `items/cor-complete-splitting-and-trivial-frobenius.md` (SHA256 `cc8c71e8d329289e202acd4ddcb7896b37b5452b9c2bdb3779c8c97285060d8e`; assignment match: true)
Snapshot: `snapshots/cor-complete-splitting-and-trivial-frobenius.md` (SHA256 `cc8c71e8d329289e202acd4ddcb7896b37b5452b9c2bdb3779c8c97285060d8e`; matches source: true)
Receipt: `screenshots/cor-complete-splitting-and-trivial-frobenius.json` (SHA256 `81b76fc994d3c2ac4958f25103f8b858a1b8596b023755c9b5881acda2469bab`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/cor-complete-splitting-and-trivial-frobenius--01.png` — 1200x1400, SHA256 `07203e3b8f6a5bf028060df216064d3d38fe817e7e9d93dcc5d19d9750e57be5`; receipt match: true; viewed individually at original resolution: true.

### cor-division-algorithm-nonzero-divisor

Title: Division with remainder for any nonzero divisor: for $a \in \mathbb{Z}$ and $b \ne 0$ there are unique $q, r \in \mathbb{Z}$ with $a = qb + r$ and $0 \le r < |b|$

Source: `items/cor-division-algorithm-nonzero-divisor.md` (SHA256 `dae07163203a595f2427eeafc1dacfe8fa8e69e9feae8d9f7b55edbf196f7010`; assignment match: true)
Snapshot: `snapshots/cor-division-algorithm-nonzero-divisor.md` (SHA256 `dae07163203a595f2427eeafc1dacfe8fa8e69e9feae8d9f7b55edbf196f7010`; matches source: true)
Receipt: `screenshots/cor-division-algorithm-nonzero-divisor.json` (SHA256 `038adaf73b3b7e86aaac1f2023524c65005675c27ae6790540b23f4fcc391863`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/cor-division-algorithm-nonzero-divisor--01.png` — 1200x1400, SHA256 `ce91f67a2c3e19f2e99ad8b96846c6711378c59162881a7b80e566f761d49750`; receipt match: true; viewed individually at original resolution: true.
- `screenshots/cor-division-algorithm-nonzero-divisor--02.png` — 1200x1152, SHA256 `ec1abd42aa1eb9d3497fe95276ad98a52a2ad33313b495eee3e3c8927080012e`; receipt match: true; viewed individually at original resolution: true.

### cor-finiteness-of-positive-definite-binary-form-classes

Title: For each negative discriminant, there are only finitely many proper-equivalence classes of positive-definite integral binary quadratic forms

Source: `items/cor-finiteness-of-positive-definite-binary-form-classes.md` (SHA256 `c7f6df860960c82db3cd04099198d3474b09a696edbc584302ed8cd5e2d20f5e`; assignment match: true)
Snapshot: `snapshots/cor-finiteness-of-positive-definite-binary-form-classes.md` (SHA256 `c7f6df860960c82db3cd04099198d3474b09a696edbc584302ed8cd5e2d20f5e`; matches source: true)
Receipt: `screenshots/cor-finiteness-of-positive-definite-binary-form-classes.json` (SHA256 `821ccdd43f7d2fb62ee9d02130694720527c7cba85618f9ed95933025bc78521`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/cor-finiteness-of-positive-definite-binary-form-classes--01.png` — 1200x1400, SHA256 `015578b9c729697adc79d48b042b8cc927368781b9e8d742676ce6c64690d662`; receipt match: true; viewed individually at original resolution: true.

### cor-jacobi-symbol-minus-one-obstructs-square

Title: Jacobi symbol minus one obstructs quadratic residuosity

Source: `items/cor-jacobi-symbol-minus-one-obstructs-square.md` (SHA256 `8f8609e5c17ae6e9ff155b0148318a2e7e10826588a6fbd2188eda40151b1678`; assignment match: true)
Snapshot: `snapshots/cor-jacobi-symbol-minus-one-obstructs-square.md` (SHA256 `8f8609e5c17ae6e9ff155b0148318a2e7e10826588a6fbd2188eda40151b1678`; matches source: true)
Receipt: `screenshots/cor-jacobi-symbol-minus-one-obstructs-square.json` (SHA256 `c0866e809cf6c608480d4bde0bf7f980811169c86e1ac191640a40d996f1ba5e`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/cor-jacobi-symbol-minus-one-obstructs-square--01.png` — 1200x1400, SHA256 `2c3e527267d3d9d4627cea3ab0dc2cedf06d5531bf9cd9832fad30e5bfa47c06`; receipt match: true; viewed individually at original resolution: true.

### cor-number-of-primitive-roots-modulo-odd-prime-power

Title: An odd prime power $p^k$ has exactly $\varphi(\varphi(p^k))$ primitive roots

Source: `items/cor-number-of-primitive-roots-modulo-odd-prime-power.md` (SHA256 `987d777ee0b791202e38ff6136918c7fe73c9bee99a8e129572bbe61216fdfbc`; assignment match: true)
Snapshot: `snapshots/cor-number-of-primitive-roots-modulo-odd-prime-power.md` (SHA256 `987d777ee0b791202e38ff6136918c7fe73c9bee99a8e129572bbe61216fdfbc`; matches source: true)
Receipt: `screenshots/cor-number-of-primitive-roots-modulo-odd-prime-power.json` (SHA256 `b6071d30e45c2626699f3e6ba7c85a6174d85f503969424cdd612bfd43ffb21d`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/cor-number-of-primitive-roots-modulo-odd-prime-power--01.png` — 1200x1400, SHA256 `0340ee233ad11ed8477aa8de56b74893de203252399e07b6fb6524ae5e9fa770`; receipt match: true; viewed individually at original resolution: true.

### cor-power-congruence-solution-count-modulo-a-prime

Title: For prime $p$ and $d\ge1$, the congruence $x^d\equiv1\pmod p$ has $\gcd(d,p-1)$ nonzero solutions

Source: `items/cor-power-congruence-solution-count-modulo-a-prime.md` (SHA256 `bdf1e4f69dadac0c00b08b34e32c53bbd5d43d4a5c51c41694ce162cedf0def8`; assignment match: true)
Snapshot: `snapshots/cor-power-congruence-solution-count-modulo-a-prime.md` (SHA256 `bdf1e4f69dadac0c00b08b34e32c53bbd5d43d4a5c51c41694ce162cedf0def8`; matches source: true)
Receipt: `screenshots/cor-power-congruence-solution-count-modulo-a-prime.json` (SHA256 `5992ebca6426ca5e555e39723ba160667a608c671803e5875113057e6a0d6f59`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/cor-power-congruence-solution-count-modulo-a-prime--01.png` — 1200x1400, SHA256 `edbbfe538ee67629214ccceb5b4e63a436ec8a5f0eb8cf915a16b26f8b972030`; receipt match: true; viewed individually at original resolution: true.

### cor-squarefree-power-basis-discriminant-gives-ring-of-integers

Title: Squarefree power discriminant criterion

Source: `items/cor-squarefree-power-basis-discriminant-gives-ring-of-integers.md` (SHA256 `d8741ebcb03bafbbd19e9d9ae31d11ece16ff2f3e3df1da6ef57c1fd1e660f88`; assignment match: true)
Snapshot: `snapshots/cor-squarefree-power-basis-discriminant-gives-ring-of-integers.md` (SHA256 `d8741ebcb03bafbbd19e9d9ae31d11ece16ff2f3e3df1da6ef57c1fd1e660f88`; matches source: true)
Receipt: `screenshots/cor-squarefree-power-basis-discriminant-gives-ring-of-integers.json` (SHA256 `519028727a35fd1d6bc309e4d39f2fc86e619d4019b1e43d37cd9bd51287d741`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/cor-squarefree-power-basis-discriminant-gives-ring-of-integers--01.png` — 1200x1400, SHA256 `1869f486d20a362aa44b7a84aa7a8f02093701453b59269cdc95986c414f88c3`; receipt match: true; viewed individually at original resolution: true.

### cor-unit-group-modulo-prime-is-cyclic

Title: For every prime $p$, the multiplicative group $(\mathbb Z/p\mathbb Z)^\times$ is cyclic

Source: `items/cor-unit-group-modulo-prime-is-cyclic.md` (SHA256 `4ca4c5d411dcf960cdd8476938c0bdc59f1f427d3437cb9cd1f6b179cb06fd36`; assignment match: true)
Snapshot: `snapshots/cor-unit-group-modulo-prime-is-cyclic.md` (SHA256 `4ca4c5d411dcf960cdd8476938c0bdc59f1f427d3437cb9cd1f6b179cb06fd36`; matches source: true)
Receipt: `screenshots/cor-unit-group-modulo-prime-is-cyclic.json` (SHA256 `a8e4cae5d8f6047989abdcd665ec15b35cfccda8d2cd5100d65341467b437a4e`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/cor-unit-group-modulo-prime-is-cyclic--01.png` — 1200x1400, SHA256 `0786e60df008929fa4863ed7946e63ffb2dffb32bc79833eb635010b2a54bf2b`; receipt match: true; viewed individually at original resolution: true.

### def-archimedean-embeddings-and-number-field-signature

Title: Archimedean embeddings and signature

Source: `items/def-archimedean-embeddings-and-number-field-signature.md` (SHA256 `5c9b8bd28d24bbf2bad4750fcc73043318d5d7aea2d352b17a02d82a43217343`; assignment match: true)
Snapshot: `snapshots/def-archimedean-embeddings-and-number-field-signature.md` (SHA256 `5c9b8bd28d24bbf2bad4750fcc73043318d5d7aea2d352b17a02d82a43217343`; matches source: true)
Receipt: `screenshots/def-archimedean-embeddings-and-number-field-signature.json` (SHA256 `3e8ee6af796ddaa958350e214fabbb19fc098dd46d319834d851736dc52261e3`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/def-archimedean-embeddings-and-number-field-signature--01.png` — 1200x1400, SHA256 `09013a4b6f0104d81f6782e8a69de839570b59c6ea530f6ecf28b39dc940076b`; receipt match: true; viewed individually at original resolution: true.

### def-completed-dirichlet-l-function

Title: Completed primitive Dirichlet L-function

Source: `items/def-completed-dirichlet-l-function.md` (SHA256 `538e20b130268de9594b5a43813e680729713bf13d073d19d0048cde29439b80`; assignment match: true)
Snapshot: `snapshots/def-completed-dirichlet-l-function.md` (SHA256 `538e20b130268de9594b5a43813e680729713bf13d073d19d0048cde29439b80`; matches source: true)
Receipt: `screenshots/def-completed-dirichlet-l-function.json` (SHA256 `ffffd77109f5ddf82ae80574ef9d742953536bb7bd1f7fda6994a3700ecaafb0`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/def-completed-dirichlet-l-function--01.png` — 1200x1400, SHA256 `2457274dc466621d485c0c651a4e1c1a89e66cbaa4491dd73ec5be07d352282a`; receipt match: true; viewed individually at original resolution: true.

### def-dirichlet-character-modulo-q

Title: Dirichlet characters modulo q

Source: `items/def-dirichlet-character-modulo-q.md` (SHA256 `231c65623a67321b06d781e4b54078d67390a97d43b389b2d505aed786624df7`; assignment match: true)
Snapshot: `snapshots/def-dirichlet-character-modulo-q.md` (SHA256 `231c65623a67321b06d781e4b54078d67390a97d43b389b2d505aed786624df7`; matches source: true)
Receipt: `screenshots/def-dirichlet-character-modulo-q.json` (SHA256 `925df27df333525d8192a72979d4737fa27c1cae8afabd1bc910de7cf1896b19`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/def-dirichlet-character-modulo-q--01.png` — 1200x1400, SHA256 `7aa6d76200879cc593c325a37b858defb602a57b587cc7222450e8c7499c39a5`; receipt match: true; viewed individually at original resolution: true.

### def-equivalent-field-absolute-values

Title: Equivalent nontrivial absolute values

Source: `items/def-equivalent-field-absolute-values.md` (SHA256 `89cd08b475db44615bf154dc8fa400ceaa600c9bf1523300092f6364102bfd9f`; assignment match: true)
Snapshot: `snapshots/def-equivalent-field-absolute-values.md` (SHA256 `89cd08b475db44615bf154dc8fa400ceaa600c9bf1523300092f6364102bfd9f`; matches source: true)
Receipt: `screenshots/def-equivalent-field-absolute-values.json` (SHA256 `64e8024f00786fe1a4bf06aa70b061c012512154ad3073df6aa2cff8bd0351a5`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/def-equivalent-field-absolute-values--01.png` — 1200x1400, SHA256 `9342f6aea2f8aa10ce86b3a15b7764e92fa102f3b2069d3a3f45705b0751ef8a`; receipt match: true; viewed individually at original resolution: true.

### def-hilbert-symbol-over-a-rational-completion

Title: The Hilbert symbol over a rational completion

Source: `items/def-hilbert-symbol-over-a-rational-completion.md` (SHA256 `08f11576cc93ee71f289a7527031c71699e0fe7128bfc7d7a9ad08a7d5e9abd1`; assignment match: true)
Snapshot: `snapshots/def-hilbert-symbol-over-a-rational-completion.md` (SHA256 `08f11576cc93ee71f289a7527031c71699e0fe7128bfc7d7a9ad08a7d5e9abd1`; matches source: true)
Receipt: `screenshots/def-hilbert-symbol-over-a-rational-completion.json` (SHA256 `e363b460294ffec7d0cce9426f55f0f57af5fafde51525e7440afe51e3d8d76b`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/def-hilbert-symbol-over-a-rational-completion--01.png` — 1200x1400, SHA256 `f8154c5e864ff1d38f72f085b33a4a2f3af4c189b13d8d11024d73ae078ca778`; receipt match: true; viewed individually at original resolution: true.

### def-legendre-symbol

Title: The Legendre symbol, including its zero value

Source: `items/def-legendre-symbol.md` (SHA256 `87a9da337bdf817b2a6cdbc7e94f14c25cf2bc600e9f6f6a4d540b4b840fa59a`; assignment match: true)
Snapshot: `snapshots/def-legendre-symbol.md` (SHA256 `87a9da337bdf817b2a6cdbc7e94f14c25cf2bc600e9f6f6a4d540b4b840fa59a`; matches source: true)
Receipt: `screenshots/def-legendre-symbol.json` (SHA256 `dec3fb99918375e6b41e386e2c07aff76d06e9e1e30504075f7d7c7514346f63`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/def-legendre-symbol--01.png` — 1200x1400, SHA256 `40b008eb842aa0dfe4bfadf66e2b51fc76214221c6b3e593415ffa5f738aa9a3`; receipt match: true; viewed individually at original resolution: true.

### def-norm-on-integer-square-root-order

Title: The norm on the explicit order $\mathbb{Z}[\sqrt{D}]$

Source: `items/def-norm-on-integer-square-root-order.md` (SHA256 `be5c83fe61ed8527e06ce603f5e14911bc3e852b428d2401f7a74d02fba7c851`; assignment match: true)
Snapshot: `snapshots/def-norm-on-integer-square-root-order.md` (SHA256 `be5c83fe61ed8527e06ce603f5e14911bc3e852b428d2401f7a74d02fba7c851`; matches source: true)
Receipt: `screenshots/def-norm-on-integer-square-root-order.json` (SHA256 `e4dc12af0a1e2c243a8bad8891ca0275540ede0f93018cf82f9a5017cc75bd75`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/def-norm-on-integer-square-root-order--01.png` — 1200x1400, SHA256 `618b6bc7a4c8601d7d363ef3f4c0c8a81536d57eb6dd19785c91180c9e62066d`; receipt match: true; viewed individually at original resolution: true.

### def-place-of-the-rationals

Title: Places of the rationals

Source: `items/def-place-of-the-rationals.md` (SHA256 `0035b6ca795d06cb0999a22290ea882f84cc44707e9a3d67e915367141dad11f`; assignment match: true)
Snapshot: `snapshots/def-place-of-the-rationals.md` (SHA256 `0035b6ca795d06cb0999a22290ea882f84cc44707e9a3d67e915367141dad11f`; matches source: true)
Receipt: `screenshots/def-place-of-the-rationals.json` (SHA256 `e98648053226777d459680d53f80df20d00ae8fd6eb92cd6df9b2fd38542826f`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/def-place-of-the-rationals--01.png` — 1200x1400, SHA256 `c8ff41cdfc19c51c6914b9a0214316c942d2552760aa60c9fd44be0b63a830e9`; receipt match: true; viewed individually at original resolution: true.

### def-proper-equivalence-of-binary-quadratic-forms

Title: Proper equivalence of binary quadratic forms

Source: `items/def-proper-equivalence-of-binary-quadratic-forms.md` (SHA256 `a97250471452cad559d761fb8493e22af456ea230d1c13af7eb4f2ecd9bcb653`; assignment match: true)
Snapshot: `snapshots/def-proper-equivalence-of-binary-quadratic-forms.md` (SHA256 `a97250471452cad559d761fb8493e22af456ea230d1c13af7eb4f2ecd9bcb653`; matches source: true)
Receipt: `screenshots/def-proper-equivalence-of-binary-quadratic-forms.json` (SHA256 `04480e9a6f5c81c171ed1485a9b7046f6f938bbb0b2a2f9dd4812db87bee1067`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/def-proper-equivalence-of-binary-quadratic-forms--01.png` — 1200x1400, SHA256 `e3f2fab4988ff8589008d785322c0bb25a5b043c7ef78566d82f8edaf8cf0b5e`; receipt match: true; viewed individually at original resolution: true.

### def-s-integers-and-s-units-of-a-number-field

Title: S-integers and S-units of a number field

Source: `items/def-s-integers-and-s-units-of-a-number-field.md` (SHA256 `d428cd0a38dc093b04690a0f53b5e61e2fb7fa797bdb7c1f981bd027388bae9e`; assignment match: true)
Snapshot: `snapshots/def-s-integers-and-s-units-of-a-number-field.md` (SHA256 `d428cd0a38dc093b04690a0f53b5e61e2fb7fa797bdb7c1f981bd027388bae9e`; matches source: true)
Receipt: `screenshots/def-s-integers-and-s-units-of-a-number-field.json` (SHA256 `c029914846f5b5be68d4b09e37a002977b9f183b33a379f3dbda6389d4736b09`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/def-s-integers-and-s-units-of-a-number-field--01.png` — 1200x1400, SHA256 `869471dda9b1522e630bdb249bb623c5639c52d4d0c275792e0775a9cdb27dc5`; receipt match: true; viewed individually at original resolution: true.
- `screenshots/def-s-integers-and-s-units-of-a-number-field--02.png` — 1200x421, SHA256 `580e6d4c2a376c4546616c1fa53f9dc20b59eca0e429f26b8de4a4d3a830e4eb`; receipt match: true; viewed individually at original resolution: true.

### def-unit-group-modulo-n-and-euler-totient

Title: The unit group $(\mathbb{Z}/n)^\times$ and Euler's totient $\varphi(n)=\lvert(\mathbb{Z}/n)^\times\rvert$ for $n\ge1$

Source: `items/def-unit-group-modulo-n-and-euler-totient.md` (SHA256 `64730f47e10c21f4918991672eda65c08ee5c5da67f98aafe78ac98f36c82739`; assignment match: true)
Snapshot: `snapshots/def-unit-group-modulo-n-and-euler-totient.md` (SHA256 `64730f47e10c21f4918991672eda65c08ee5c5da67f98aafe78ac98f36c82739`; matches source: true)
Receipt: `screenshots/def-unit-group-modulo-n-and-euler-totient.json` (SHA256 `97a41bb3e1f7840473695a18df1f1fe5e65ca39dd7dd336c5ec0ec12958aed1e`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/def-unit-group-modulo-n-and-euler-totient--01.png` — 1200x1400, SHA256 `fef8b4cfd7125a60bfde1bdb23a78be7dabf6576160d0088524c7452c3475f18`; receipt match: true; viewed individually at original resolution: true.

### ex-carmichael-function-of-one-thousand-seven-hundred-twenty-nine

Title: $\lambda(1729)=36$ although $\varphi(1729)=1296$

Source: `items/ex-carmichael-function-of-one-thousand-seven-hundred-twenty-nine.md` (SHA256 `e0dbe453184fe67bccd317b101b01a208eaf0dcdb8213c44d1bfec5af20c6736`; assignment match: true)
Snapshot: `snapshots/ex-carmichael-function-of-one-thousand-seven-hundred-twenty-nine.md` (SHA256 `e0dbe453184fe67bccd317b101b01a208eaf0dcdb8213c44d1bfec5af20c6736`; matches source: true)
Receipt: `screenshots/ex-carmichael-function-of-one-thousand-seven-hundred-twenty-nine.json` (SHA256 `9700d2b012cfa8cc45edddc8778f35cc4797d377bffa1a06b77f54128172f49a`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/ex-carmichael-function-of-one-thousand-seven-hundred-twenty-nine--01.png` — 1200x1400, SHA256 `c19ebc8886a11849a2499ea2290d221f3e8c17351a6aea51aeecd7dc94c77914`; receipt match: true; viewed individually at original resolution: true.

### ex-continued-fraction-of-square-root-fourteen

Title: The continued fraction [3; overline 1,2,1,6] for sqrt(14)

Source: `items/ex-continued-fraction-of-square-root-fourteen.md` (SHA256 `945bf15d108f6ec41446d89d2bf718f0953ede75dbc708a4209d4fec174d84f4`; assignment match: true)
Snapshot: `snapshots/ex-continued-fraction-of-square-root-fourteen.md` (SHA256 `945bf15d108f6ec41446d89d2bf718f0953ede75dbc708a4209d4fec174d84f4`; matches source: true)
Receipt: `screenshots/ex-continued-fraction-of-square-root-fourteen.json` (SHA256 `ff8ec7d25f3ca95aee163a1902707b9f4c10687404c05e87ccfc618447df9ffc`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/ex-continued-fraction-of-square-root-fourteen--01.png` — 1200x1400, SHA256 `af26daf879caecf0ecd57aef3e0860402b25e7022fcd4531a938aef425b698a0`; receipt match: true; viewed individually at original resolution: true.

### ex-dirichlet-density-of-primes-in-a-small-progression

Title: Dirichlet density for a small prime progression

Source: `items/ex-dirichlet-density-of-primes-in-a-small-progression.md` (SHA256 `ee32e9d406da9274f1d29175552d28912f29cbcae5fe60cac06e938a27ab7bba`; assignment match: true)
Snapshot: `snapshots/ex-dirichlet-density-of-primes-in-a-small-progression.md` (SHA256 `ee32e9d406da9274f1d29175552d28912f29cbcae5fe60cac06e938a27ab7bba`; matches source: true)
Receipt: `screenshots/ex-dirichlet-density-of-primes-in-a-small-progression.json` (SHA256 `33e6ee6325bae88598e15b67bbe7ed0ebe7e33bac3085cdba5d2b807fd7a6753`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/ex-dirichlet-density-of-primes-in-a-small-progression--01.png` — 1200x1400, SHA256 `fab93c4461b51a46388fc34caf3b7fb4f32f36def25cd67f1044c66366e609fd`; receipt match: true; viewed individually at original resolution: true.

### ex-euclidean-algorithm-worked

Title: $\gcd(1071, 462) = 21$ by the Euclidean algorithm, with the back-substitution giving $21 = 7 \cdot 462 - 3 \cdot 1071$

Source: `items/ex-euclidean-algorithm-worked.md` (SHA256 `8e9fd324bc2bedb9425d64bf6e928314c30acae238d5acd63ce153cf51af0ce9`; assignment match: true)
Snapshot: `snapshots/ex-euclidean-algorithm-worked.md` (SHA256 `8e9fd324bc2bedb9425d64bf6e928314c30acae238d5acd63ce153cf51af0ce9`; matches source: true)
Receipt: `screenshots/ex-euclidean-algorithm-worked.json` (SHA256 `539b1cbcce562dcd4af4a3233d07cffb7d81d4de950f93ff266218f741ad8169`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/ex-euclidean-algorithm-worked--01.png` — 1200x1400, SHA256 `3c32abfdae4afe79e82964ba5b19858a1fa10e33d7143474e74f3b8c84fc8c1a`; receipt match: true; viewed individually at original resolution: true.
- `screenshots/ex-euclidean-algorithm-worked--02.png` — 1200x1400, SHA256 `5011316a46c579692db6a0c2056dc44d6b14027d440966c1e943de1151b8e23a`; receipt match: true; viewed individually at original resolution: true.
- `screenshots/ex-euclidean-algorithm-worked--03.png` — 1200x755, SHA256 `bdb54ed1fe5c30a88d83a5982bc0ce2f8444becc157dde9b7064b6d9bf30d2c9`; receipt match: true; viewed individually at original resolution: true.

### ex-four-square-descent-for-thirteen

Title: Descending from $13\cdot 11$ to $13$ in two steps

Source: `items/ex-four-square-descent-for-thirteen.md` (SHA256 `f6c26cfca83fd8bf606b6eb9554042b60276cc9d29b1c899d9eb525444f8e546`; assignment match: true)
Snapshot: `snapshots/ex-four-square-descent-for-thirteen.md` (SHA256 `f6c26cfca83fd8bf606b6eb9554042b60276cc9d29b1c899d9eb525444f8e546`; matches source: true)
Receipt: `screenshots/ex-four-square-descent-for-thirteen.json` (SHA256 `3ee968614aef7b416ea8cad18dd878cde5bd2ae60be1766046b2ad9036d1d0e1`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/ex-four-square-descent-for-thirteen--01.png` — 1200x1400, SHA256 `4df0d21f4fbb4ea6ecabf8472724a0531edbcfae8845c0ebea0e16519eae8c88`; receipt match: true; viewed individually at original resolution: true.
- `screenshots/ex-four-square-descent-for-thirteen--02.png` — 1200x928, SHA256 `08e4677d965e640a7d3acbd2f32554131e0f502e2ceaed8a0137233231f6ac55`; receipt match: true; viewed individually at original resolution: true.

### ex-gaussian-and-eisenstein-frobenius

Title: Gaussian and eisenstein frobenius

Source: `items/ex-gaussian-and-eisenstein-frobenius.md` (SHA256 `c542d9413ee4a28e13acd17803fe9569b3abf4b3c645b2b47e640d053df4dee6`; assignment match: true)
Snapshot: `snapshots/ex-gaussian-and-eisenstein-frobenius.md` (SHA256 `c542d9413ee4a28e13acd17803fe9569b3abf4b3c645b2b47e640d053df4dee6`; matches source: true)
Receipt: `screenshots/ex-gaussian-and-eisenstein-frobenius.json` (SHA256 `e2a6cedc7cde24f2748d0afed9286d9579a2589fd7585108faf9c64b5fbebe4c`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/ex-gaussian-and-eisenstein-frobenius--01.png` — 1200x1400, SHA256 `2dfa30da3c88d622f9b06de9a4c8bbd446fa37bdab735c5e32d87d0188520649`; receipt match: true; viewed individually at original resolution: true.

### ex-hilbert-symbol-over-the-reals

Title: Hilbert symbols over the real numbers

Source: `items/ex-hilbert-symbol-over-the-reals.md` (SHA256 `71c4690da09e79e548f561e5dddf9f74150867642bb9e6416bf2035201fa9cba`; assignment match: true)
Snapshot: `snapshots/ex-hilbert-symbol-over-the-reals.md` (SHA256 `71c4690da09e79e548f561e5dddf9f74150867642bb9e6416bf2035201fa9cba`; matches source: true)
Receipt: `screenshots/ex-hilbert-symbol-over-the-reals.json` (SHA256 `322412c1b3d09cbf9030f53f74d60768a8954020ff95b6f1eba01abaa73fb846`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/ex-hilbert-symbol-over-the-reals--01.png` — 1200x1400, SHA256 `ebd30c446aa5c0fe49212433be9e6a19b744bfade110da66730dba13a94196b0`; receipt match: true; viewed individually at original resolution: true.

### ex-liouville-square-indicator

Title: Working out the square-indicator convolution for prime powers

Source: `items/ex-liouville-square-indicator.md` (SHA256 `d6b4673f53295bc1cb4b407f5c4ebcb0598ed1ff09ee35b0b3cceebbe9b6d808`; assignment match: true)
Snapshot: `snapshots/ex-liouville-square-indicator.md` (SHA256 `d6b4673f53295bc1cb4b407f5c4ebcb0598ed1ff09ee35b0b3cceebbe9b6d808`; matches source: true)
Receipt: `screenshots/ex-liouville-square-indicator.json` (SHA256 `d7d8bc28f32a1a5c3d383e45392ccaadb536ccf9dd372071dc15438468589b49`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/ex-liouville-square-indicator--01.png` — 1200x1400, SHA256 `5d49823371e90b5f26b70f644128f453e726df5900f2febfad51b37c380c4f59`; receipt match: true; viewed individually at original resolution: true.

### ex-nonabelian-frobenius-conjugacy-class

Title: Nonabelian frobenius conjugacy class

Source: `items/ex-nonabelian-frobenius-conjugacy-class.md` (SHA256 `3a5987350df47068ec8e5820cbbc77715273a074a30b1eb699d53aeb16c72317`; assignment match: true)
Snapshot: `snapshots/ex-nonabelian-frobenius-conjugacy-class.md` (SHA256 `3a5987350df47068ec8e5820cbbc77715273a074a30b1eb699d53aeb16c72317`; matches source: true)
Receipt: `screenshots/ex-nonabelian-frobenius-conjugacy-class.json` (SHA256 `6b23d0d0c4b343737d1f24d1a31d5ced5154e28799e43beb8d6b27d31a8d9068`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/ex-nonabelian-frobenius-conjugacy-class--01.png` — 1200x1400, SHA256 `5629da848cdae935ca778c855a19730db526ad80ea6dac592059cf3bc41b5f2d`; receipt match: true; viewed individually at original resolution: true.

### ex-perron-kernel-at-and-away-from-the-jump

Title: Perron's kernel at and away from its jump

Source: `items/ex-perron-kernel-at-and-away-from-the-jump.md` (SHA256 `6b09c49b73c1dda41cc0233f6c3c2ad0413edc49db58561be275b5e0abf6bdad`; assignment match: true)
Snapshot: `snapshots/ex-perron-kernel-at-and-away-from-the-jump.md` (SHA256 `6b09c49b73c1dda41cc0233f6c3c2ad0413edc49db58561be275b5e0abf6bdad`; matches source: true)
Receipt: `screenshots/ex-perron-kernel-at-and-away-from-the-jump.json` (SHA256 `6e50f2abf4757b5974640ea237dfd367f394c0624c4d2bf9ec6338fc2f40d04b`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/ex-perron-kernel-at-and-away-from-the-jump--01.png` — 1200x1400, SHA256 `e7be1990f8d12f85b3f0ab5f7d1ed88cfcc36f48e926ce288ede0c02769d3c60`; receipt match: true; viewed individually at original resolution: true.

### ex-primitive-ancestors-of-small-characters

Title: Primitive ancestors of small characters

Source: `items/ex-primitive-ancestors-of-small-characters.md` (SHA256 `b267e2444c1238207bb0a80bf706d4e723bb788305dae38ced887a1c124c6457`; assignment match: true)
Snapshot: `snapshots/ex-primitive-ancestors-of-small-characters.md` (SHA256 `b267e2444c1238207bb0a80bf706d4e723bb788305dae38ced887a1c124c6457`; matches source: true)
Receipt: `screenshots/ex-primitive-ancestors-of-small-characters.json` (SHA256 `8456d19a4d66cd605690b073184c2209c90f72d7524f8c7d12ced7fc52add65c`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/ex-primitive-ancestors-of-small-characters--01.png` — 1200x1400, SHA256 `2ad08d457c2fb5086bde59fd3d1e06690aed4334fe09c06923292fd043cd2a36`; receipt match: true; viewed individually at original resolution: true.

### ex-quadratic-gauss-sum-for-three

Title: Quadratic Gauss sum at p=3

Source: `items/ex-quadratic-gauss-sum-for-three.md` (SHA256 `d4e3bc5f49fd758c380c0cba06e33d2a2232883ea788d81bc5e02f3f366b5e0a`; assignment match: true)
Snapshot: `snapshots/ex-quadratic-gauss-sum-for-three.md` (SHA256 `d4e3bc5f49fd758c380c0cba06e33d2a2232883ea788d81bc5e02f3f366b5e0a`; matches source: true)
Receipt: `screenshots/ex-quadratic-gauss-sum-for-three.json` (SHA256 `909f2d08d4a7e2082ed81caf8dd09eb5017f450b678ded528c5301465d4edc14`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/ex-quadratic-gauss-sum-for-three--01.png` — 1200x1400, SHA256 `23db0ba6085db0f24e257e2232c8a632ce5e6831373f7b6ec4be5345719a2306`; receipt match: true; viewed individually at original resolution: true.
- `screenshots/ex-quadratic-gauss-sum-for-three--02.png` — 1200x240, SHA256 `eafe5c0a0af7ca927477d7ff71ae6c12e130977d1eab33afc2c425f5098d3262`; receipt match: true; viewed individually at original resolution: true.

### ex-regulator-of-a-real-quadratic-field

Title: Regulator of a real quadratic field

Source: `items/ex-regulator-of-a-real-quadratic-field.md` (SHA256 `b1d25b39ad07924cd7f9dabfe355ed9427e7cfd43c514d6c5a0cc0725174176f`; assignment match: true)
Snapshot: `snapshots/ex-regulator-of-a-real-quadratic-field.md` (SHA256 `b1d25b39ad07924cd7f9dabfe355ed9427e7cfd43c514d6c5a0cc0725174176f`; matches source: true)
Receipt: `screenshots/ex-regulator-of-a-real-quadratic-field.json` (SHA256 `b5daefd70eaf2fec243872c56087996d8586e923153ef2ece86283d2dd455133`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/ex-regulator-of-a-real-quadratic-field--01.png` — 1200x1400, SHA256 `94b0487e28eadae8f20168c4768e2d4ec4b979fecd1546ad41e3c9dc4e9fcc88`; receipt match: true; viewed individually at original resolution: true.
- `screenshots/ex-regulator-of-a-real-quadratic-field--02.png` — 1200x1400, SHA256 `04fa680dfc62428087bb69629675d50a39e809c26b31551f37525d5759c9dfdb`; receipt match: true; viewed individually at original resolution: true.
- `screenshots/ex-regulator-of-a-real-quadratic-field--03.png` — 1200x133, SHA256 `c7026354ae2f086de7651758de7a68fba203a60a9ca4f16da067f9e91c80b09d`; receipt match: true; viewed individually at original resolution: true.

### ex-square-roots-of-one-modulo-one-hundred-twenty-eight

Title: The four square roots of one modulo $128$ are $1,63,65,127$

Source: `items/ex-square-roots-of-one-modulo-one-hundred-twenty-eight.md` (SHA256 `2f68de1e8f08503ddd6cf8410c28bec7bc71b29f6ae00e644755f2106ccfaccd`; assignment match: true)
Snapshot: `snapshots/ex-square-roots-of-one-modulo-one-hundred-twenty-eight.md` (SHA256 `2f68de1e8f08503ddd6cf8410c28bec7bc71b29f6ae00e644755f2106ccfaccd`; matches source: true)
Receipt: `screenshots/ex-square-roots-of-one-modulo-one-hundred-twenty-eight.json` (SHA256 `deb411d90355ba83bf9a423717145400ff1903f214469fcee2e29652b3e89cd1`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/ex-square-roots-of-one-modulo-one-hundred-twenty-eight--01.png` — 1200x1400, SHA256 `3ff2b2d4055ff6d1152137b309aec5c6d4af9a0b69d30d1be69bf855b86a1e71`; receipt match: true; viewed individually at original resolution: true.

### ex-two-adic-square-test

Title: The two-adic square test separates 17 and 5

Source: `items/ex-two-adic-square-test.md` (SHA256 `68c4e248c00cfa02d82fa43f544d2fd34e9c41423935860974d53c8d5eeb4c4c`; assignment match: true)
Snapshot: `snapshots/ex-two-adic-square-test.md` (SHA256 `68c4e248c00cfa02d82fa43f544d2fd34e9c41423935860974d53c8d5eeb4c4c`; matches source: true)
Receipt: `screenshots/ex-two-adic-square-test.json` (SHA256 `d7f45b1df1852134df35ade4eea76bd2825a56a41b49947aa7eb5b52cd43ce3b`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/ex-two-adic-square-test--01.png` — 1200x1400, SHA256 `6208917c9f88e592133f8d28896d22ecc6b37b24cd80fd6c7fb2295e0c4dd1de`; receipt match: true; viewed individually at original resolution: true.

### ex-units-modulo-eight-are-not-cyclic

Title: $(\mathbb{Z}/8)^\times=\{[1],[3],[5],[7]\}$ is not cyclic because every element squares to $[1]$

Source: `items/ex-units-modulo-eight-are-not-cyclic.md` (SHA256 `141b9640086d33a713594302d18b2219653f024878a7b9fc63a56d56c05d8cf8`; assignment match: true)
Snapshot: `snapshots/ex-units-modulo-eight-are-not-cyclic.md` (SHA256 `141b9640086d33a713594302d18b2219653f024878a7b9fc63a56d56c05d8cf8`; matches source: true)
Receipt: `screenshots/ex-units-modulo-eight-are-not-cyclic.json` (SHA256 `5ae0e37b417ab32859985bf49c1b7807bdd8b1f29b3aa4e380265cf239ea9acd`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/ex-units-modulo-eight-are-not-cyclic--01.png` — 1200x1400, SHA256 `7c4bbf1fb04b890049b01a2a9a40d8d02342cd120ced37f59e7f570c183ccc4e`; receipt match: true; viewed individually at original resolution: true.
- `screenshots/ex-units-modulo-eight-are-not-cyclic--02.png` — 1200x164, SHA256 `1901b691088cb1737a695da5547a749eff15a38f5fe6324cb722d9c93e0087e5`; receipt match: true; viewed individually at original resolution: true.

### fs-gcd-times-lcm-equals-the-product

Title: FALSE: For all integers $a$ and $b$, $\gcd(a,b) \cdot \operatorname{lcm}(a,b) = ab$

Source: `items/fs-gcd-times-lcm-equals-the-product.md` (SHA256 `71ade429c9b9c463b6122a347e83e6c56442c8f9dd758d435cbc7f5189d7ea98`; assignment match: true)
Snapshot: `snapshots/fs-gcd-times-lcm-equals-the-product.md` (SHA256 `71ade429c9b9c463b6122a347e83e6c56442c8f9dd758d435cbc7f5189d7ea98`; matches source: true)
Receipt: `screenshots/fs-gcd-times-lcm-equals-the-product.json` (SHA256 `e3ae6f2493d974ce438dba52d1fa689ea0736df8bd5f20b646aaa3755893c768`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/fs-gcd-times-lcm-equals-the-product--01.png` — 1200x1400, SHA256 `d2a46a215119b977c1dcd0be2be52d193fedbc32ffa809d47cc328ec3277e06a`; receipt match: true; viewed individually at original resolution: true.
- `screenshots/fs-gcd-times-lcm-equals-the-product--02.png` — 1200x1400, SHA256 `1efaa336eb0fa9de82287d77060bb02ca29e3e125e7a56d3f2e223c6cbc72d28`; receipt match: true; viewed individually at original resolution: true.
- `screenshots/fs-gcd-times-lcm-equals-the-product--03.png` — 1200x459, SHA256 `28b808354b80dd448f5425b7b64e0385e762663bd2aad518280552a5cce07766`; receipt match: true; viewed individually at original resolution: true.

### lem-bounded-conjugates-give-finitely-many-integral-polynomials

Title: Bounded roots give finitely many monic integer polynomials

Source: `items/lem-bounded-conjugates-give-finitely-many-integral-polynomials.md` (SHA256 `b43a8c1af6a9cfdbb5f924087f9d58b4d9b954d4299551d1f33918835b7c5f72`; assignment match: true)
Snapshot: `snapshots/lem-bounded-conjugates-give-finitely-many-integral-polynomials.md` (SHA256 `b43a8c1af6a9cfdbb5f924087f9d58b4d9b954d4299551d1f33918835b7c5f72`; matches source: true)
Receipt: `screenshots/lem-bounded-conjugates-give-finitely-many-integral-polynomials.json` (SHA256 `ae5d859fed339b2cfa00bfe5d73f3d6ba09e0c9e1a035d2c0c2beaf384c46315`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/lem-bounded-conjugates-give-finitely-many-integral-polynomials--01.png` — 1200x1400, SHA256 `9319ee5e43d936957398c9b4f70557ff7855fbc76568f341f1fee5d048e3f413`; receipt match: true; viewed individually at original resolution: true.

### lem-continued-fraction-complete-quotient-formula

Title: Complete-quotient tail formula

Source: `items/lem-continued-fraction-complete-quotient-formula.md` (SHA256 `88210a1333864a6b889501e5ace90a3681c90ec1abbb19e188cc2f1f59864c3e`; assignment match: true)
Snapshot: `snapshots/lem-continued-fraction-complete-quotient-formula.md` (SHA256 `88210a1333864a6b889501e5ace90a3681c90ec1abbb19e188cc2f1f59864c3e`; matches source: true)
Receipt: `screenshots/lem-continued-fraction-complete-quotient-formula.json` (SHA256 `0c97fa894e393ae7b42f5354084708e48fc948e58efd9bd94b2e7b6df57d9a3d`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/lem-continued-fraction-complete-quotient-formula--01.png` — 1200x1400, SHA256 `0046d9ee8f598d421d0253e080ce934aa20de9abfff869c6b3f3a912da41f726`; receipt match: true; viewed individually at original resolution: true.

### lem-dirichlet-character-arithmetic-function-characterization

Title: Arithmetic characterization of Dirichlet characters modulo q

Source: `items/lem-dirichlet-character-arithmetic-function-characterization.md` (SHA256 `1ef64488799800a9eaae28a6a1744bd72d0b956d48aa298af97aac83a4f5daf6`; assignment match: true)
Snapshot: `snapshots/lem-dirichlet-character-arithmetic-function-characterization.md` (SHA256 `1ef64488799800a9eaae28a6a1744bd72d0b956d48aa298af97aac83a4f5daf6`; matches source: true)
Receipt: `screenshots/lem-dirichlet-character-arithmetic-function-characterization.json` (SHA256 `9d7ccb014b53ac5be6d1031d2dacbfc40199c37a8db4a49182f7c826b8f0e8c2`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/lem-dirichlet-character-arithmetic-function-characterization--01.png` — 1200x1400, SHA256 `3be317abafdf21473b7aba9f84dc630f365a6649dabe9ba1f083cc7dd09b7e20`; receipt match: true; viewed individually at original resolution: true.

### lem-euler-four-square-product-identity

Title: Euler's four-square product identity

Source: `items/lem-euler-four-square-product-identity.md` (SHA256 `33704bc79f85a40ce2cdcd53c27bbd2bffaf1c128a44a76c52097cf24c7156ca`; assignment match: true)
Snapshot: `snapshots/lem-euler-four-square-product-identity.md` (SHA256 `33704bc79f85a40ce2cdcd53c27bbd2bffaf1c128a44a76c52097cf24c7156ca`; matches source: true)
Receipt: `screenshots/lem-euler-four-square-product-identity.json` (SHA256 `62f76030e9e17afbfe765209ea97de7210a2d6ead49eea230a426d30a13dd3bd`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/lem-euler-four-square-product-identity--01.png` — 1200x1400, SHA256 `97f869dd26f35967c7817b0190fc83c2dafcb1182c97d900e2f1f68ce4471fdb`; receipt match: true; viewed individually at original resolution: true.

### lem-gauss-half-system-permutation

Title: Multiplication by $a$ with $p\nmid a$ permutes an odd prime's signed half-system up to sign

Source: `items/lem-gauss-half-system-permutation.md` (SHA256 `032b75d1cb7a619d775192e70ecb0dcc811774df5a9d411955fd6dd19e75de8e`; assignment match: true)
Snapshot: `snapshots/lem-gauss-half-system-permutation.md` (SHA256 `032b75d1cb7a619d775192e70ecb0dcc811774df5a9d411955fd6dd19e75de8e`; matches source: true)
Receipt: `screenshots/lem-gauss-half-system-permutation.json` (SHA256 `10822869fabc6673c1ed2dd05731890a11c56ef247a9f43ae8dfd843c7a73f02`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/lem-gauss-half-system-permutation--01.png` — 1200x1400, SHA256 `eb6cb0ed3df0cfda357451b0052efd33c880e5bca3b70f4e76a2a25371750928`; receipt match: true; viewed individually at original resolution: true.

### lem-hermite-minkowski-bounded-primitive-integral-element

Title: Bounded primitive integral element for Hermite-Minkowski

Source: `items/lem-hermite-minkowski-bounded-primitive-integral-element.md` (SHA256 `e095806bcbc0d1accef94d8c878e9a9be3d8181f5f45adda0a23a96037403425`; assignment match: true)
Snapshot: `snapshots/lem-hermite-minkowski-bounded-primitive-integral-element.md` (SHA256 `e095806bcbc0d1accef94d8c878e9a9be3d8181f5f45adda0a23a96037403425`; matches source: true)
Receipt: `screenshots/lem-hermite-minkowski-bounded-primitive-integral-element.json` (SHA256 `d2e668b1bf51acc79a09c859eae3a4cb4ef134ca7028a5ae0e8a2a031ff5c8d0`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/lem-hermite-minkowski-bounded-primitive-integral-element--01.png` — 1200x1400, SHA256 `838b39a52ccbed530593fa489a6aa1d7d3b743a487091beeee86365ff60fefc8`; receipt match: true; viewed individually at original resolution: true.
- `screenshots/lem-hermite-minkowski-bounded-primitive-integral-element--02.png` — 1200x1400, SHA256 `03c438f641b07c3c76a5ba7e82a6a06966c24ddde72ebf2f554fd0b230cd605b`; receipt match: true; viewed individually at original resolution: true.
- `screenshots/lem-hermite-minkowski-bounded-primitive-integral-element--03.png` — 1200x1400, SHA256 `7c7c04a7198c11a698002aae8e0bd0c0a7ca5225d1729921581786bb915a8f0d`; receipt match: true; viewed individually at original resolution: true.
- `screenshots/lem-hermite-minkowski-bounded-primitive-integral-element--04.png` — 1200x546, SHA256 `a46700c0715a6375c14a9bb717c3df12db8a2e4736ed33b5276d6347a40a25ab`; receipt match: true; viewed individually at original resolution: true.

### lem-lifting-residue-frobenius-by-galois-conjugates

Title: Lifting residue frobenius by galois conjugates

Source: `items/lem-lifting-residue-frobenius-by-galois-conjugates.md` (SHA256 `a4703136ac19ec7c3910516d69cf43ba13fd4f558a89899e2def263d3c9b3c94`; assignment match: true)
Snapshot: `snapshots/lem-lifting-residue-frobenius-by-galois-conjugates.md` (SHA256 `a4703136ac19ec7c3910516d69cf43ba13fd4f558a89899e2def263d3c9b3c94`; matches source: true)
Receipt: `screenshots/lem-lifting-residue-frobenius-by-galois-conjugates.json` (SHA256 `a134266759dc94682069e50a7b548fe6361756cf667b940f3f278aaa17ed8db4`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/lem-lifting-residue-frobenius-by-galois-conjugates--01.png` — 1200x1400, SHA256 `15d7b3b4c33ee0b0bb37fee105ada7d9fb877bde9fd031f57d8b771d11a65391`; receipt match: true; viewed individually at original resolution: true.

### lem-newman-damped-contour-estimates

Title: Newman damped contour estimates

Source: `items/lem-newman-damped-contour-estimates.md` (SHA256 `e4f1df2bfe40adda2005bc6fe8d44052539997076e3756412453eb456fa0d2ed`; assignment match: true)
Snapshot: `snapshots/lem-newman-damped-contour-estimates.md` (SHA256 `e4f1df2bfe40adda2005bc6fe8d44052539997076e3756412453eb456fa0d2ed`; matches source: true)
Receipt: `screenshots/lem-newman-damped-contour-estimates.json` (SHA256 `8f6071bfbf2b144be40ec34a01429712b7a5796970950defaaddc91f1593568b`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/lem-newman-damped-contour-estimates--01.png` — 1200x1400, SHA256 `a2255527da35a12cb9da5b58a96bc1d87e808847fc5e0b77b549e813c1ef5af2`; receipt match: true; viewed individually at original resolution: true.

### lem-order-of-five-modulo-two-powers

Title: For $k\ge3$, the class of $5$ has order $2^{k-2}$ modulo $2^k$

Source: `items/lem-order-of-five-modulo-two-powers.md` (SHA256 `e8a779a3930ed8fb1e2a5c7391488d27e156d1afc87d1837091b1668210dad70`; assignment match: true)
Snapshot: `snapshots/lem-order-of-five-modulo-two-powers.md` (SHA256 `e8a779a3930ed8fb1e2a5c7391488d27e156d1afc87d1837091b1668210dad70`; matches source: true)
Receipt: `screenshots/lem-order-of-five-modulo-two-powers.json` (SHA256 `d49338e5ccb9729d4d66c7b6960b1d05b9a0a93de5c38e1275869ddfedef0798`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/lem-order-of-five-modulo-two-powers--01.png` — 1200x1400, SHA256 `4e77774ff144007b063155ae25adf512326cf516fd116ada61ae428e09bf1f3f`; receipt match: true; viewed individually at original resolution: true.
- `screenshots/lem-order-of-five-modulo-two-powers--02.png` — 1200x191, SHA256 `523d7802817d17529ca5a9d2cc01fdfe9097da0655cdc5b6a37f231eb9b9e2d6`; receipt match: true; viewed individually at original resolution: true.

### lem-positive-log-dirichlet-series-nonvanishing

Title: Positive logarithmic Dirichlet series force boundary nonvanishing

Source: `items/lem-positive-log-dirichlet-series-nonvanishing.md` (SHA256 `2fdbe52c372d0aaf7769734524bb0a81952f34142935d70433629f0ec38aea99`; assignment match: true)
Snapshot: `snapshots/lem-positive-log-dirichlet-series-nonvanishing.md` (SHA256 `2fdbe52c372d0aaf7769734524bb0a81952f34142935d70433629f0ec38aea99`; matches source: true)
Receipt: `screenshots/lem-positive-log-dirichlet-series-nonvanishing.json` (SHA256 `cddb9db1d221d9a86074eb8b4c4f2b9253252702807b1c112afde7b6b91b088e`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/lem-positive-log-dirichlet-series-nonvanishing--01.png` — 1200x1400, SHA256 `c8ebe22f5d53f61badb74d07c2e77e762cede11397501d355bca77a35a40d225`; receipt match: true; viewed individually at original resolution: true.

### lem-real-dirichlet-l-nonzero-at-one

Title: A real nonprincipal Dirichlet L-function is nonzero at one

Source: `items/lem-real-dirichlet-l-nonzero-at-one.md` (SHA256 `e36bd86905501b4079f28828c5704d6ff3b1a01701e8d357cde7fc7df47f998c`; assignment match: true)
Snapshot: `snapshots/lem-real-dirichlet-l-nonzero-at-one.md` (SHA256 `e36bd86905501b4079f28828c5704d6ff3b1a01701e8d357cde7fc7df47f998c`; matches source: true)
Receipt: `screenshots/lem-real-dirichlet-l-nonzero-at-one.json` (SHA256 `6eeb49d24c9f58bc9209cd9049720c69c88b20f8b166daf76b0c6ad87cb7b7ea`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/lem-real-dirichlet-l-nonzero-at-one--01.png` — 1200x1400, SHA256 `fdb4dc06c5655a0813f598eff7e0202df3e2e41b813fa4d67e3937ebaba26942`; receipt match: true; viewed individually at original resolution: true.

### lem-sum-of-three-squares-is-never-seven-modulo-eight

Title: No sum of three integer squares is congruent to $7$ modulo $8$

Source: `items/lem-sum-of-three-squares-is-never-seven-modulo-eight.md` (SHA256 `4fef8227cd809d3f6123336d0aa84a50437c18b7ce64ded10624370e9a9f201e`; assignment match: true)
Snapshot: `snapshots/lem-sum-of-three-squares-is-never-seven-modulo-eight.md` (SHA256 `4fef8227cd809d3f6123336d0aa84a50437c18b7ce64ded10624370e9a9f201e`; matches source: true)
Receipt: `screenshots/lem-sum-of-three-squares-is-never-seven-modulo-eight.json` (SHA256 `1c679badb99f84b0d5af3d6e89acc4200a3297948cd4300015cddd40b0f90fe7`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/lem-sum-of-three-squares-is-never-seven-modulo-eight--01.png` — 1200x1400, SHA256 `d420e2fd396e81918093651e02ea227e18f24b33a3648af4a29340f91a4c93b6`; receipt match: true; viewed individually at original resolution: true.
- `screenshots/lem-sum-of-three-squares-is-never-seven-modulo-eight--02.png` — 1200x481, SHA256 `45c1ce582bcb3a136efaeee028a0954d151bdd5ea11ab1b478fe64ac6b5b003a`; receipt match: true; viewed individually at original resolution: true.

### lem-units-of-z

Title: $(\mathbb{Z}, \cdot, 1)$ is a commutative monoid whose group of units is $\{1, -1\}$; equivalently $u \mid 1$ holds exactly for $u = 1$ and $u = -1$

Source: `items/lem-units-of-z.md` (SHA256 `098d4a232755fe3cff60b7e7bcc0dfabac7d751ee7126fe9e3cba94e4e3db2d9`; assignment match: true)
Snapshot: `snapshots/lem-units-of-z.md` (SHA256 `098d4a232755fe3cff60b7e7bcc0dfabac7d751ee7126fe9e3cba94e4e3db2d9`; matches source: true)
Receipt: `screenshots/lem-units-of-z.json` (SHA256 `36dfca84d118e3d54f6a6fbcba061e700894e9113d8160d4cbb2b4f98cfae61e`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/lem-units-of-z--01.png` — 1200x1400, SHA256 `66d00b7157c51685a405d6ec6c4f64f246570ac9935e7664886dd8e650e82fe1`; receipt match: true; viewed individually at original resolution: true.
- `screenshots/lem-units-of-z--02.png` — 1200x1400, SHA256 `684cee7a51c84c536f5a58e6cf7a56630af40893637b769798719fd9ff1db6c3`; receipt match: true; viewed individually at original resolution: true.
- `screenshots/lem-units-of-z--03.png` — 1200x1285, SHA256 `19872e20a937bd5ea7dc6770d45f4a9d1f864c7c4f8e08a66bacd9586ca3c223`; receipt match: true; viewed individually at original resolution: true.

### prop-carmichael-function-as-maximal-order

Title: Carmichael's $\lambda(n)$ is the maximum order of a unit modulo $n$

Source: `items/prop-carmichael-function-as-maximal-order.md` (SHA256 `9db7fade6abddb7fc2929721bfaf7f1998a732ed5498dfba10e8f7dabbce1ec9`; assignment match: true)
Snapshot: `snapshots/prop-carmichael-function-as-maximal-order.md` (SHA256 `9db7fade6abddb7fc2929721bfaf7f1998a732ed5498dfba10e8f7dabbce1ec9`; matches source: true)
Receipt: `screenshots/prop-carmichael-function-as-maximal-order.json` (SHA256 `61e39f9e755272f0f6bb71067be43ee4a41b7c45a5bb03955fdfa463d1be4131`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/prop-carmichael-function-as-maximal-order--01.png` — 1200x1400, SHA256 `98b80533480af6976e22dd65aac3d31e07006c2862784a6584ebb1d12b9133d5`; receipt match: true; viewed individually at original resolution: true.
- `screenshots/prop-carmichael-function-as-maximal-order--02.png` — 1200x301, SHA256 `6473bb9889d609d55d0b384ef1fbacdc3a8b54d54c543ae7717f2720718f45e2`; receipt match: true; viewed individually at original resolution: true.

### prop-liouville-convolution-square-indicator

Title: The convolution $\mathbf 1*\lambda$ detects perfect squares

Source: `items/prop-liouville-convolution-square-indicator.md` (SHA256 `5116ff77828ea0a10615dd30de1f3759cd9a18207dc7ed12fdf6b4271c484650`; assignment match: true)
Snapshot: `snapshots/prop-liouville-convolution-square-indicator.md` (SHA256 `5116ff77828ea0a10615dd30de1f3759cd9a18207dc7ed12fdf6b4271c484650`; matches source: true)
Receipt: `screenshots/prop-liouville-convolution-square-indicator.json` (SHA256 `c143d1f6ad3996521fe46e8839d2aa2808935eb52f9f4057e61e919b6c724416`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/prop-liouville-convolution-square-indicator--01.png` — 1200x1400, SHA256 `8e972c61fbbb9820143c65c18b275e50fe603bc7cb3facd40f375a6129871ead`; receipt match: true; viewed individually at original resolution: true.

### rem-the-classical-zeta-region-is-not-a-uniform-dirichlet-l-region

Title: The classical zeta region is not a uniform dirichlet l region

Source: `items/rem-the-classical-zeta-region-is-not-a-uniform-dirichlet-l-region.md` (SHA256 `587c369ef870e7f1e5c22f52ea97d4058881804727194ba22b3fd08987c936cd`; assignment match: true)
Snapshot: `snapshots/rem-the-classical-zeta-region-is-not-a-uniform-dirichlet-l-region.md` (SHA256 `587c369ef870e7f1e5c22f52ea97d4058881804727194ba22b3fd08987c936cd`; matches source: true)
Receipt: `screenshots/rem-the-classical-zeta-region-is-not-a-uniform-dirichlet-l-region.json` (SHA256 `1f3039e9a26b583ab33f0400e4ef4a1f4b2b10e45636ebdd3670065b80f2d1f3`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/rem-the-classical-zeta-region-is-not-a-uniform-dirichlet-l-region--01.png` — 1200x1400, SHA256 `de7cbcc7b7e4ca55c5ae4ebcf693d1f6a21f857c2bb5bde15edabffb9a17329a`; receipt match: true; viewed individually at original resolution: true.

### thm-classification-of-moduli-with-primitive-roots

Title: A positive integer admits a primitive root exactly when it is $1$, $2$, $4$, $p^k$, or $2p^k$ for an odd prime $p$

Source: `items/thm-classification-of-moduli-with-primitive-roots.md` (SHA256 `1511476614550d55ace8eb3908399d62cac2b62baffc962900acc14c31616b07`; assignment match: true)
Snapshot: `snapshots/thm-classification-of-moduli-with-primitive-roots.md` (SHA256 `1511476614550d55ace8eb3908399d62cac2b62baffc962900acc14c31616b07`; matches source: true)
Receipt: `screenshots/thm-classification-of-moduli-with-primitive-roots.json` (SHA256 `2100d4efb62f983a4d6effb34676e30342eb87f5f55cb7c135d2a5ad11b36168`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/thm-classification-of-moduli-with-primitive-roots--01.png` — 1200x1400, SHA256 `169e02e6a22f196a22509ed1de660b3b55696a578d8fd95bb23877ab94a28166`; receipt match: true; viewed individually at original resolution: true.

### thm-covolume-of-an-ideal-lattice

Title: Covolume of an integral ideal lattice

Source: `items/thm-covolume-of-an-ideal-lattice.md` (SHA256 `ace5c6d6b04545acfbe2955a48031f6662bd46944583014f715292857a3108d7`; assignment match: true)
Snapshot: `snapshots/thm-covolume-of-an-ideal-lattice.md` (SHA256 `ace5c6d6b04545acfbe2955a48031f6662bd46944583014f715292857a3108d7`; matches source: true)
Receipt: `screenshots/thm-covolume-of-an-ideal-lattice.json` (SHA256 `edf8b9c2f97faedee258a61bef87093b3b3435372ca238c347389b81ee0fd070`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/thm-covolume-of-an-ideal-lattice--01.png` — 1200x1400, SHA256 `4b2264665d69a531ac97be9f00bacbd124580690a81fca0783a506d9850247b7`; receipt match: true; viewed individually at original resolution: true.
- `screenshots/thm-covolume-of-an-ideal-lattice--02.png` — 1200x1161, SHA256 `4a14a652f3e77c9fd3ff111b18137e54dc447110a89c0a7c9e2ff00a718a6982`; receipt match: true; viewed individually at original resolution: true.

### thm-dirichlet-character-orthogonality

Title: Orthogonality relations for Dirichlet characters modulo q

Source: `items/thm-dirichlet-character-orthogonality.md` (SHA256 `728e70281b9bb8c04abcfdeb11e35d61727052d16333dad4f9acd0439051d234`; assignment match: true)
Snapshot: `snapshots/thm-dirichlet-character-orthogonality.md` (SHA256 `728e70281b9bb8c04abcfdeb11e35d61727052d16333dad4f9acd0439051d234`; matches source: true)
Receipt: `screenshots/thm-dirichlet-character-orthogonality.json` (SHA256 `3a9cfd6fbf75136cf4926a2adcc07905ec465de8e4fae34bdcd280ec2a66c24c`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/thm-dirichlet-character-orthogonality--01.png` — 1200x1400, SHA256 `b5dd3fc837bc86509c68d876a516629fe506f5eedbd97762dfff03af76fdeb00`; receipt match: true; viewed individually at original resolution: true.

### thm-dirichlet-series-abscissa-gap

Title: The convergence and absolute-convergence abscissae differ by at most one

Source: `items/thm-dirichlet-series-abscissa-gap.md` (SHA256 `d11153e609cc2f296f12bd41403bd52b9e8b5c477f713bff528b794ebae56ad7`; assignment match: true)
Snapshot: `snapshots/thm-dirichlet-series-abscissa-gap.md` (SHA256 `d11153e609cc2f296f12bd41403bd52b9e8b5c477f713bff528b794ebae56ad7`; matches source: true)
Receipt: `screenshots/thm-dirichlet-series-abscissa-gap.json` (SHA256 `957fd0e4311e10df81d4aaf76c48b8782bf0c53cefe9fd35b3ce1cbadf5f001f`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/thm-dirichlet-series-abscissa-gap--01.png` — 1200x1400, SHA256 `92c0033534653500d534048380fe73a3aea93667cbb880c51b959948942ad265`; receipt match: true; viewed individually at original resolution: true.

### thm-divisor-sum-summatory-estimate

Title: The summatory divisor-sum function is pi squared over 12 times x squared plus O(x log x)

Source: `items/thm-divisor-sum-summatory-estimate.md` (SHA256 `513f568189b5668ce2259b61c50869e745aaaa48e106591579f4c76eef7e8ecc`; assignment match: true)
Snapshot: `snapshots/thm-divisor-sum-summatory-estimate.md` (SHA256 `513f568189b5668ce2259b61c50869e745aaaa48e106591579f4c76eef7e8ecc`; matches source: true)
Receipt: `screenshots/thm-divisor-sum-summatory-estimate.json` (SHA256 `07e68838a9ee465825c347770cb3f08b2d9a8293d9827611cfb792f4aec2d9f0`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/thm-divisor-sum-summatory-estimate--01.png` — 1200x1400, SHA256 `33ece950fb41ca25c5c80cd79743c3d956c1439c5703e4ef6c01292c4185c692`; receipt match: true; viewed individually at original resolution: true.

### thm-every-prime-is-a-sum-of-four-squares

Title: Every prime is a sum of four integer squares

Source: `items/thm-every-prime-is-a-sum-of-four-squares.md` (SHA256 `aea3f95e6664679a64e9be582e08dbeeabaf95c92ff7a1089d4d5807a48c5707`; assignment match: true)
Snapshot: `snapshots/thm-every-prime-is-a-sum-of-four-squares.md` (SHA256 `aea3f95e6664679a64e9be582e08dbeeabaf95c92ff7a1089d4d5807a48c5707`; matches source: true)
Receipt: `screenshots/thm-every-prime-is-a-sum-of-four-squares.json` (SHA256 `014dcde52f7fdca5078e9252db3e9cbe0b2ed9783fbf0be41a77768511da0b2b`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/thm-every-prime-is-a-sum-of-four-squares--01.png` — 1200x1400, SHA256 `a8a64c586348b9c8868c3f88b63466638b5b004009b8fffa9caa3794b3e19835`; receipt match: true; viewed individually at original resolution: true.
- `screenshots/thm-every-prime-is-a-sum-of-four-squares--02.png` — 1200x716, SHA256 `a6da4cbea54d3f0638f014ed98880dac42b7dea88c1178b7b94b1d8deab08a6b`; receipt match: true; viewed individually at original resolution: true.

### thm-fundamental-theorem-of-arithmetic

Title: The fundamental theorem of arithmetic: every integer $n \ge 1$ is a product of primes, and the factorisation is unique up to order — if $\prod_{i<r} p_i = \prod_{j<s} q_j$ with every $p_i$ and $q_j$ prime, then $r = s$ and $q_i = p_{\pi(i)}$ for some $\pi \in \operatorname{Sym}(r)$

Source: `items/thm-fundamental-theorem-of-arithmetic.md` (SHA256 `d330c0c35ebe61dbf9cc900cc61060276517f7de6537e773edfc5f59406ec028`; assignment match: true)
Snapshot: `snapshots/thm-fundamental-theorem-of-arithmetic.md` (SHA256 `d330c0c35ebe61dbf9cc900cc61060276517f7de6537e773edfc5f59406ec028`; matches source: true)
Receipt: `screenshots/thm-fundamental-theorem-of-arithmetic.json` (SHA256 `b1859f037d320496a601daf7b75616e755b9b3ec2fb2d6c981b90bb51639c80d`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/thm-fundamental-theorem-of-arithmetic--01.png` — 1200x1400, SHA256 `64eedacb40dd08fa1a44ad64c44dce301530934a7896173ef5fa9f2c570846ae`; receipt match: true; viewed individually at original resolution: true.
- `screenshots/thm-fundamental-theorem-of-arithmetic--02.png` — 1200x1400, SHA256 `6f5092a9140951ab7b162acadbfccc814a54ac69192f3f1c5b765f23b6a41681`; receipt match: true; viewed individually at original resolution: true.
- `screenshots/thm-fundamental-theorem-of-arithmetic--03.png` — 1200x1400, SHA256 `86825b23143730b34dc7929aa06af0f0b4175d609d4576e28dc019d21ce836db`; receipt match: true; viewed individually at original resolution: true.
- `screenshots/thm-fundamental-theorem-of-arithmetic--04.png` — 1200x1400, SHA256 `ddcbb57d026d707797f130face4caa2d2ec87e42ec746152ba7cf08909eec718`; receipt match: true; viewed individually at original resolution: true.
- `screenshots/thm-fundamental-theorem-of-arithmetic--05.png` — 1200x240, SHA256 `ff773f59a8417ca9dcba8d6c4fca0339bef31dad025a25e0db5247c23c42142d`; receipt match: true; viewed individually at original resolution: true.

### thm-hilbert-reciprocity-over-the-rationals

Title: Hilbert reciprocity over the rationals

Source: `items/thm-hilbert-reciprocity-over-the-rationals.md` (SHA256 `f67f0556d9d9e181b2908dc2fd75cdcfa32e32c1cb72fc32c594ec25606c6a0a`; assignment match: true)
Snapshot: `snapshots/thm-hilbert-reciprocity-over-the-rationals.md` (SHA256 `f67f0556d9d9e181b2908dc2fd75cdcfa32e32c1cb72fc32c594ec25606c6a0a`; matches source: true)
Receipt: `screenshots/thm-hilbert-reciprocity-over-the-rationals.json` (SHA256 `2695342158e36c5da28a7a3117712b49e3a0c90d93cb0750f8f223d6e14ec33c`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/thm-hilbert-reciprocity-over-the-rationals--01.png` — 1200x1400, SHA256 `56b4c1df12d179ae2f973202baff9516226d665258fe2f7210a55ef752f5e1e8`; receipt match: true; viewed individually at original resolution: true.
- `screenshots/thm-hilbert-reciprocity-over-the-rationals--02.png` — 1200x318, SHA256 `42de03d4b5288134efa8e8663fbf258990f772a62f12f53bad40fbc8c5f0888f`; receipt match: true; viewed individually at original resolution: true.

### thm-lagrange-existence-for-pell-equation

Title: Every Pell equation has a positive nontrivial integral solution

Source: `items/thm-lagrange-existence-for-pell-equation.md` (SHA256 `454e88d2185643eda5c3e2689cdcc7a03238b2468840d23d4381efa82a4068c1`; assignment match: true)
Snapshot: `snapshots/thm-lagrange-existence-for-pell-equation.md` (SHA256 `454e88d2185643eda5c3e2689cdcc7a03238b2468840d23d4381efa82a4068c1`; matches source: true)
Receipt: `screenshots/thm-lagrange-existence-for-pell-equation.json` (SHA256 `91dbe4b57cdb051ebc4a0edfff6cf27285dc8bc1513aec1fd70de6a386c68935`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/thm-lagrange-existence-for-pell-equation--01.png` — 1200x1400, SHA256 `d65f7f209c8eb4378da98b82b923976f9bc3d80ded21f9fe5a394daa1d294841`; receipt match: true; viewed individually at original resolution: true.

### thm-minkowski-bound-for-ideal-classes

Title: Minkowski bound for ideal classes

Source: `items/thm-minkowski-bound-for-ideal-classes.md` (SHA256 `a53b60bf4e8d597877c552256986bb3973218d6398b1c58d13528505b12d9e71`; assignment match: true)
Snapshot: `snapshots/thm-minkowski-bound-for-ideal-classes.md` (SHA256 `a53b60bf4e8d597877c552256986bb3973218d6398b1c58d13528505b12d9e71`; matches source: true)
Receipt: `screenshots/thm-minkowski-bound-for-ideal-classes.json` (SHA256 `8c6605a4efa9c3d2789e6c0063d186f1437df625615563c978d859be82d7476a`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/thm-minkowski-bound-for-ideal-classes--01.png` — 1200x1400, SHA256 `8f6b27278e64ca51d53cfe68fe4db17c9c0097e6bdd5cc30bc3297d9c8200de2`; receipt match: true; viewed individually at original resolution: true.
- `screenshots/thm-minkowski-bound-for-ideal-classes--02.png` — 1200x1153, SHA256 `88ef2f6a20202e1c86e32bdce2e305a5451095e525220f06b4bebb370552d07c`; receipt match: true; viewed individually at original resolution: true.

### thm-number-field-discriminant-is-well-defined-and-nonzero

Title: Number-field discriminant is well-defined and nonzero

Source: `items/thm-number-field-discriminant-is-well-defined-and-nonzero.md` (SHA256 `844d5974439609bbe62fdb0b8907e89db9cb4c99ec0cfa2e51d9250bcf7bb774`; assignment match: true)
Snapshot: `snapshots/thm-number-field-discriminant-is-well-defined-and-nonzero.md` (SHA256 `844d5974439609bbe62fdb0b8907e89db9cb4c99ec0cfa2e51d9250bcf7bb774`; matches source: true)
Receipt: `screenshots/thm-number-field-discriminant-is-well-defined-and-nonzero.json` (SHA256 `49c42a0948e3c8446c87dad7a3f35d459357b9747718fba70fd95f15bd6d3de7`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/thm-number-field-discriminant-is-well-defined-and-nonzero--01.png` — 1200x1400, SHA256 `d285a2def5d68025928282ec3dea6485b1a30c4d44c25e94cd86868e6ce2b7c3`; receipt match: true; viewed individually at original resolution: true.

### thm-p-adic-digit-expansion

Title: Every p-adic number has a unique digit expansion

Source: `items/thm-p-adic-digit-expansion.md` (SHA256 `3fbd710f6b2c441efeff61e266752f53e90c3beeb0994cdcc17570e69fe99682`; assignment match: true)
Snapshot: `snapshots/thm-p-adic-digit-expansion.md` (SHA256 `3fbd710f6b2c441efeff61e266752f53e90c3beeb0994cdcc17570e69fe99682`; matches source: true)
Receipt: `screenshots/thm-p-adic-digit-expansion.json` (SHA256 `dfb7dbffc891c22eaed33172b6540a8fa5ba1cd677053f1365bf4eec98d5f2bd`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/thm-p-adic-digit-expansion--01.png` — 1200x1400, SHA256 `2e11f972fb301cadea63bb8027c3725dd5f81e5cb5b1b97c8d69fa537d00e5fb`; receipt match: true; viewed individually at original resolution: true.

### thm-primitive-dirichlet-l-analytic-continuation

Title: Analytic continuation of primitive Dirichlet L-functions

Source: `items/thm-primitive-dirichlet-l-analytic-continuation.md` (SHA256 `9f72f28c9636eb5977b70d6a2eefcfda04151cbb2349bfbb6e5e51a3b7a37e9a`; assignment match: true)
Snapshot: `snapshots/thm-primitive-dirichlet-l-analytic-continuation.md` (SHA256 `9f72f28c9636eb5977b70d6a2eefcfda04151cbb2349bfbb6e5e51a3b7a37e9a`; matches source: true)
Receipt: `screenshots/thm-primitive-dirichlet-l-analytic-continuation.json` (SHA256 `e1b1f1568b05ae19e90b475f03d9957a97fe461dd3fe8e65eb51e3cbff73c226`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/thm-primitive-dirichlet-l-analytic-continuation--01.png` — 1200x1400, SHA256 `a694f31c014073b7ab2ecaddf0c6619d5d6576930444d49325c83544cb3773d0`; receipt match: true; viewed individually at original resolution: true.
- `screenshots/thm-primitive-dirichlet-l-analytic-continuation--02.png` — 1200x183, SHA256 `0af697456ba583cb0939bbece1722071d0417638d067ddff0b3bb52cd1695b36`; receipt match: true; viewed individually at original resolution: true.

### thm-quadratic-frobenius-restriction-identity

Title: Quadratic reciprocity as a Frobenius restriction identity

Source: `items/thm-quadratic-frobenius-restriction-identity.md` (SHA256 `07d11aa0157c59de83c716ebe3eeef784843bb4e966309c5158998de62b1e4b2`; assignment match: true)
Snapshot: `snapshots/thm-quadratic-frobenius-restriction-identity.md` (SHA256 `07d11aa0157c59de83c716ebe3eeef784843bb4e966309c5158998de62b1e4b2`; matches source: true)
Receipt: `screenshots/thm-quadratic-frobenius-restriction-identity.json` (SHA256 `5a053b46481fce935f8512925f83ccb14e334b70133b86848a7be3daa245dda5`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/thm-quadratic-frobenius-restriction-identity--01.png` — 1200x1400, SHA256 `04b97d646fd77359a84b61cfd22030d541c527d8125d778b45d32cc4f23f9610`; receipt match: true; viewed individually at original resolution: true.
- `screenshots/thm-quadratic-frobenius-restriction-identity--02.png` — 1200x901, SHA256 `0a6acb8944649650b09b04116f1f0a37e78cf6980c5780d3ce8fe791a85074c3`; receipt match: true; viewed individually at original resolution: true.

### thm-riemann-von-mangoldt-zero-counting

Title: The Riemann--von Mangoldt zero count

Source: `items/thm-riemann-von-mangoldt-zero-counting.md` (SHA256 `07cfc9ac738e936c53063acf8889c5286abafe96152604041f218fd46d6f4091`; assignment match: true)
Snapshot: `snapshots/thm-riemann-von-mangoldt-zero-counting.md` (SHA256 `07cfc9ac738e936c53063acf8889c5286abafe96152604041f218fd46d6f4091`; matches source: true)
Receipt: `screenshots/thm-riemann-von-mangoldt-zero-counting.json` (SHA256 `a0ef7ee340eabc8321e58f828071623e4af53f78e024f9185c7272a9ffc1e3f2`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/thm-riemann-von-mangoldt-zero-counting--01.png` — 1200x1400, SHA256 `157e7634834c79688e0f636dae1709a8cfa90cb001b806c84bb350456df4629e`; receipt match: true; viewed individually at original resolution: true.
- `screenshots/thm-riemann-von-mangoldt-zero-counting--02.png` — 1200x206, SHA256 `167893d35c4743b199f31835cf70e4d64b74d8638b82175bc4b9defb30979057`; receipt match: true; viewed individually at original resolution: true.

### thm-square-criterion-in-qp-for-odd-p

Title: Square criterion in Q_p for odd p

Source: `items/thm-square-criterion-in-qp-for-odd-p.md` (SHA256 `6703a3a6b536a6585486a59e02e3cda2b0acd5263d447eab0af26c6703c53361`; assignment match: true)
Snapshot: `snapshots/thm-square-criterion-in-qp-for-odd-p.md` (SHA256 `6703a3a6b536a6585486a59e02e3cda2b0acd5263d447eab0af26c6703c53361`; matches source: true)
Receipt: `screenshots/thm-square-criterion-in-qp-for-odd-p.json` (SHA256 `24b58a2765461d7abc3e97c06f9d51e4a8e2f3c85d67f61ae78e6a8ef324373d`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/thm-square-criterion-in-qp-for-odd-p--01.png` — 1200x1400, SHA256 `a1fa6024969d9f4a41cd5e771586707cc00a500721edf08d72f0ca17dc5c6744`; receipt match: true; viewed individually at original resolution: true.

### thm-two-adic-hilbert-symbol-formula

Title: The two-adic Hilbert symbol formula

Source: `items/thm-two-adic-hilbert-symbol-formula.md` (SHA256 `050cceb1ba580d201d8403b78e2a94cce42ad6750a1c962353789c1938732d92`; assignment match: true)
Snapshot: `snapshots/thm-two-adic-hilbert-symbol-formula.md` (SHA256 `050cceb1ba580d201d8403b78e2a94cce42ad6750a1c962353789c1938732d92`; matches source: true)
Receipt: `screenshots/thm-two-adic-hilbert-symbol-formula.json` (SHA256 `ee5d06a13d448d6616b885ca4602583dd04a30cdae7a95ace5299ff4d086b28e`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/thm-two-adic-hilbert-symbol-formula--01.png` — 1200x1400, SHA256 `7532c596c93ee73ced37b55e27d07aaed762deac3ce37d6c06e222e37592389a`; receipt match: true; viewed individually at original resolution: true.
- `screenshots/thm-two-adic-hilbert-symbol-formula--02.png` — 1200x280, SHA256 `8578b127d53f719db2eee1a0a6ed2b5559fba3d62e3d59a06ce3c1acf76c98cb`; receipt match: true; viewed individually at original resolution: true.

### thm-unit-square-criterion-modulo-n

Title: A unit is a square modulo $n$ exactly when it is a square at every prime-power factor

Source: `items/thm-unit-square-criterion-modulo-n.md` (SHA256 `dad0bbf4df4c51bd169370ce482d4dcbd9715940506d46e2bf6a9505c43af0f2`; assignment match: true)
Snapshot: `snapshots/thm-unit-square-criterion-modulo-n.md` (SHA256 `dad0bbf4df4c51bd169370ce482d4dcbd9715940506d46e2bf6a9505c43af0f2`; matches source: true)
Receipt: `screenshots/thm-unit-square-criterion-modulo-n.json` (SHA256 `ea52b944b9d2b6add3962a541d23b1057ad05cc804700620244c1e0daa40c28d`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/thm-unit-square-criterion-modulo-n--01.png` — 1200x1400, SHA256 `355652c8ca802d8a46c4cb73175af069e09f89a9435d3fdf23c03eaa8bb01048`; receipt match: true; viewed individually at original resolution: true.
- `screenshots/thm-unit-square-criterion-modulo-n--02.png` — 1200x101, SHA256 `5f83891fd48bb428dcaab53622400bf2a966a732ae40be7cc6a233e041bad71d`; receipt match: true; viewed individually at original resolution: true.

### thm-z-mod-p-is-a-field

Title: For every prime $p$, the two operations on $\mathbb{Z}/p$ make it a field

Source: `items/thm-z-mod-p-is-a-field.md` (SHA256 `6009c596c12b34d64173ee0bd83ef9c56a36469f0eba8dcf408bc0cdc44209a2`; assignment match: true)
Snapshot: `snapshots/thm-z-mod-p-is-a-field.md` (SHA256 `6009c596c12b34d64173ee0bd83ef9c56a36469f0eba8dcf408bc0cdc44209a2`; matches source: true)
Receipt: `screenshots/thm-z-mod-p-is-a-field.json` (SHA256 `07f6630fb09e64008f18646be6311b356cc9b8b140d568a5cc11cdc29c9398c9`; TikZ 0; KaTeX errors 0; diagram failures 0)
- `screenshots/thm-z-mod-p-is-a-field--01.png` — 1200x1400, SHA256 `db332ef20bca3f05a08ab56905790f26b2ffcc37655fcda055f2ae2faa34cb5c`; receipt match: true; viewed individually at original resolution: true.
- `screenshots/thm-z-mod-p-is-a-field--02.png` — 1200x124, SHA256 `4c9b5b5a8c31bb0a3fd53f314653d6dad8af0cae94a63aba9cc1e14a5f760cc3`; receipt match: true; viewed individually at original resolution: true.

