# Quantum Algorithms — lane 05 rendering review

**Result:** Two confirmed literal-math presentation findings; no confirmed TeX/TikZ rendering or diagram-mathematics defects. Reviewed 72 assigned items and 107 local PNG tiles.

## Review scope

Read-only review of every frozen assignment title and complete rendered ItemBody using the local snapshots/HTML and all receipt-listed PNG tiles. Every tile was opened individually at original resolution. Source, snapshot, HTML, receipt, and PNG hashes were checked against the frozen assignment and local capture receipts. No live site, HTTP(S), external image, source edit, publication-status change, build, test, or gate was accessed or run.

All 72 assignment source hashes matched their frozen snapshots; all local HTML hashes and all 107 tile hashes matched their assignments/receipts. Capture metadata reports zero KaTeX errors and zero diagram failures. The only supplied TikZ schematic in this lane is in the Fibonacci fusion-measurement example; it correctly shows two τ inputs, the channel projectors, classical outcome, and projected branch.

## Findings

1. **Confirmed literal-math presentation issue — `thm-qa-16-controlled-consistency-reflection-correct`, Proof lines 61–65.** The proof renders formulas such as `H=span{|start⟩}⊕(C^N⊗K⊗C²)`, `|start⟩⟨start|`, and `O_x²=I` as literal text. Typeset these inline expressions consistently, preserving the source’s register order and plus-on-range sign. Evidence: tile `--01` and `--02` (hashes in the ledger).

2. **Confirmed literal-math presentation issue — `thm-qa-35-private-coin-equality-lower-bound`, Statement line 34.** The raw text `sqrt(n/(60 ln 2))/t` is inconsistent with the typeset rearranged bound in Proof line 50. Format the statement bound as math and retain the fixed odd `t` condition. Evidence: tile `--01` (hash in ledger).

No visible clipping, title/body mismatch, reference-title leakage, Scratch leakage, TeX/KaTeX defect, or mathematically incorrect existing diagram was confirmed. Citation/link blocks that wrap across lines were treated as intentional content.

## Optional source-supported diagram candidates

These are pedagogical candidates, not defects or proof requirements.

1. **`lem-qa-30-membership-height-geometry`** (source lines 30–34, 53–63): a schematic cross-section of convex body K between inner/outer balls, lower height graph h, vertical query point, and binary-search interval. Show the IN/OUT bounds with their signs; label as schematic.

2. **`alg-qa-bernstein-vazirani-query`** (source lines 44–52): the stated address/target circuit, with H on all n address wires, X then H on target, one XOR-oracle box across A and T, final H on A, and measurement only on A.

## Per-item and per-tile coverage

Every tile below was opened individually at original resolution. Hashes are SHA256. The JSON ledger includes capture counts, tile heights/y offsets, and the same complete coverage.

### alg-qa-12-amplitude-amplification — Amplitude amplification with a fixed integer iteration count

- Frozen snapshot: `snapshots/alg-qa-12-amplitude-amplification.md` — `03e7688e8da29ae4497336a92f64d48664df9a14063ea3c6f0835f49ebb30b22`
- Local HTML: `html/alg-qa-12-amplitude-amplification.html` — `cae8701eefe883fcf2a0020951236e7883701f2c0d8b920eff77db46f6135422`
- Viewed individually at original resolution: `screenshots/alg-qa-12-amplitude-amplification--01.png` — `3687e0c8e9e82b511f769175523fb918f0da9490aac3d414c40f22f2af2efc17`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### alg-qa-13-relative-approximate-counting — Relative approximate counting with unknown marked count

- Frozen snapshot: `snapshots/alg-qa-13-relative-approximate-counting.md` — `362e797479d62e90f51d7e453c7917f297b809496041732c2c3b35358fe9b63b`
- Local HTML: `html/alg-qa-13-relative-approximate-counting.html` — `836a64048897c51ce6b48914d5d95ec2ac9277e21149485729f3cb7eb4424621`
- Viewed individually at original resolution: `screenshots/alg-qa-13-relative-approximate-counting--01.png` — `1e72702097d944f389e85871a5b7c422de50dcae27e2ec976b0ab4636ba04438`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### alg-qa-20-suzuki-recursive-product-formula — Finite higher-order Suzuki product formula

- Frozen snapshot: `snapshots/alg-qa-20-suzuki-recursive-product-formula.md` — `a607f4867cef17856526a4d6d4882c44f38f87ae38fcad3ee408dd1ee9653d03`
- Local HTML: `html/alg-qa-20-suzuki-recursive-product-formula.html` — `dbdba10f35d288b778d2b3154ddd2579116d3aed1e3f0d27656aa67e07f8d99a`
- Viewed individually at original resolution: `screenshots/alg-qa-20-suzuki-recursive-product-formula--01.png` — `8bc33401f5244787705f7c87f384a966a8fd2f27c39916b6afaf330e83b2d18b`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### alg-qa-24-qsvt — Quantum singular-value transformation circuit

- Frozen snapshot: `snapshots/alg-qa-24-qsvt.md` — `4039183773468b1c187b27e3708525690463d5434f7862506fe436ca0c41ac26`
- Local HTML: `html/alg-qa-24-qsvt.html` — `3a34f1b8fdddccf16da7722a3ec18d0b8fc3178ca0e275b7e43562f00c493c72`
- Viewed individually at original resolution: `screenshots/alg-qa-24-qsvt--01.png` — `cb0525cea7db3d109a5f5d57d80888616c97b1f9b0e081cc13d1ed25adc482de`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### alg-qa-28-qsvt-matrix-function — QSVT implementation of a bounded matrix function

- Frozen snapshot: `snapshots/alg-qa-28-qsvt-matrix-function.md` — `01a0e6c77018bfa46e6c56554d94fc2aeca12a82af581325c9acbfb8bc6b7004`
- Local HTML: `html/alg-qa-28-qsvt-matrix-function.html` — `b50fb307c0054a54db6bc8f3f1eeed2d1f725492b01752ca6b349e8b3d80e0ef`
- Viewed individually at original resolution: `screenshots/alg-qa-28-qsvt-matrix-function--01.png` — `0c77d9a40a5cff5ca9302c59032e3129a93fb90e4a6f81db5595cf1db0bd3087`
- Viewed individually at original resolution: `screenshots/alg-qa-28-qsvt-matrix-function--02.png` — `023b5badb81d7be36409d432ecf366c99b9bd631661535c1c35f9f6e860bc0f1`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### alg-qa-32-simon-query-rank-test — Simon promise decision by sampled rank

- Frozen snapshot: `snapshots/alg-qa-32-simon-query-rank-test.md` — `dd1ae267485105794aff223270a87315bc09345c4eb85cb6c05dbc42052ab380`
- Local HTML: `html/alg-qa-32-simon-query-rank-test.html` — `f734f8d240344cb112c91e98d6f738697850c6f110da25fb832d904e037bcffe`
- Viewed individually at original resolution: `screenshots/alg-qa-32-simon-query-rank-test--01.png` — `43c886dd505d2f185bbf5f2708c44f0aa382c6f0e8af35a7e5779629a159db34`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### alg-qa-bernstein-vazirani-query — One-query Bernstein–Vazirani algorithm

- Frozen snapshot: `snapshots/alg-qa-bernstein-vazirani-query.md` — `d0d2d92a9f3e0c26322875d034813e47a2fe449a17113f758093a89ffcc57bab`
- Local HTML: `html/alg-qa-bernstein-vazirani-query.html` — `503efbaf622996cc29b4a7518ba327b98c093ed048fdd01a99f164bd9707dcab`
- Viewed individually at original resolution: `screenshots/alg-qa-bernstein-vazirani-query--01.png` — `97cced29097aeaa36ee2dba2a459f1cc34667584991db45f62c0688777fd1b82`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### alg-qa-finite-cyclic-discrete-logarithm — Finite cyclic discrete logarithm by Fourier sampling

- Frozen snapshot: `snapshots/alg-qa-finite-cyclic-discrete-logarithm.md` — `32d9c5ebedb5e500b1906a8aa160a42d16bdb750d2c424dbe999692cfe362cf2`
- Local HTML: `html/alg-qa-finite-cyclic-discrete-logarithm.html` — `66a63308d285ce2824e67b2dedc0cafc0805b6d0a80f7ca7f3950874c3663392`
- Viewed individually at original resolution: `screenshots/alg-qa-finite-cyclic-discrete-logarithm--01.png` — `3b6aa1b87d13845c43e664b502bde07612a624d36ac5639cb4a2e5df40287e6b`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### alg-qa-simon-recovery-with-budget — Budgeted Simon recovery with explicit failure branch

- Frozen snapshot: `snapshots/alg-qa-simon-recovery-with-budget.md` — `44d41774d346fae718ea81f816928708f69abc275c7cf1bd54c87037ba9b5c3a`
- Local HTML: `html/alg-qa-simon-recovery-with-budget.html` — `3837fe6aa41439e7996d1be125d2e70cc7e932e4251ea1a9c6c426c61c1a05ba`
- Viewed individually at original resolution: `screenshots/alg-qa-simon-recovery-with-budget--01.png` — `8861e7ad04bd6b931825c395fd1da9f508f6874e0113b60b0350a521eecbc730`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### cex-qa-18-query-cost-is-not-gate-cost — One oracle query can require many ordinary gates

- Frozen snapshot: `snapshots/cex-qa-18-query-cost-is-not-gate-cost.md` — `81e6c888d8a3ec4d520297be338aaac582b18a47fa8ff441c0deab872767b674`
- Local HTML: `html/cex-qa-18-query-cost-is-not-gate-cost.html` — `14b539aba7960241692fb4a4598cc09f3f1ed70e8584563907ecd732bf00ff30`
- Viewed individually at original resolution: `screenshots/cex-qa-18-query-cost-is-not-gate-cost--01.png` — `75fe4fc3114bf41dc69a84b533ec513e2ef8940955347d6c98fab694e3014fae`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### cex-qa-34-tang-without-sampling-access — Entry queries alone do not provide Tang's sampling access

- Frozen snapshot: `snapshots/cex-qa-34-tang-without-sampling-access.md` — `18ab6399f19b9814c46d82c7144c10f378f38633e1fd24b295b84bc84a027899`
- Local HTML: `html/cex-qa-34-tang-without-sampling-access.html` — `8b663b899504e1a73b187b6a66b6d615a5f9af5e5cdf792a9024cea1bee6ab1b`
- Viewed individually at original resolution: `screenshots/cex-qa-34-tang-without-sampling-access--01.png` — `dbae5e6494aefea03310df0929b3ded5994afe07af2a1ba0c17346c49a5e57cc`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### def-qa-15-acceptance-polynomial — Acceptance polynomials and approximate degree on Boolean domains

- Frozen snapshot: `snapshots/def-qa-15-acceptance-polynomial.md` — `a9e5903205d6d401d9863d61e271f117bcc0a7e7a0e8581976e5e5805b02e9d6`
- Local HTML: `html/def-qa-15-acceptance-polynomial.html` — `c4ec6f90297be9e8d2c9bba8dfa0362b5d3a8e0049bf480c17e786e91488a0ea`
- Viewed individually at original resolution: `screenshots/def-qa-15-acceptance-polynomial--01.png` — `1072777f365d35c7efd9c176ae94b570053b24bd5f3cd999068b88b14260b56a`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### def-qa-17-finite-reversible-chain — Finite reversible Markov chain with positive stationary law

- Frozen snapshot: `snapshots/def-qa-17-finite-reversible-chain.md` — `0de330cd9d74ba5a4d8c29cfe2b874f85f10460a5001c6498aca22a9ab17be85`
- Local HTML: `html/def-qa-17-finite-reversible-chain.html` — `f459721adbcece11455532849f8f20befe707ad771c602ca751dac2792a59d88`
- Viewed individually at original resolution: `screenshots/def-qa-17-finite-reversible-chain--01.png` — `4abca22109d78255975bc910da11d3c8663a78b6856aa2ca4a9d146ba3d7f5fb`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### def-qa-19-continuous-time-walk — Continuous-time quantum walk

- Frozen snapshot: `snapshots/def-qa-19-continuous-time-walk.md` — `e3e0c554a48baf46464079cb5c0cf57ab78d0dc9e7bbc966c62d3882ae583722`
- Local HTML: `html/def-qa-19-continuous-time-walk.html` — `d8c60b440aa147d0cee1fafe04dea77d990717409c675bcf34151b79e2945bc6`
- Viewed individually at original resolution: `screenshots/def-qa-19-continuous-time-walk--01.png` — `88f9a05d73129da1b7f2b525a1eac32e055f64550f7bfd5e8825fc2a29311f1d`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### def-qa-21-lcu-input-and-access-model — LCU decomposition and access model

- Frozen snapshot: `snapshots/def-qa-21-lcu-input-and-access-model.md` — `c1d07d0852fa49084cc3b36494c892a0da0079983b015f2728a43ad1cacb510b`
- Local HTML: `html/def-qa-21-lcu-input-and-access-model.html` — `c5c68cf51ed8e46582d8448ed20178d143beba3c2e8bfeee55e1a129624ff739`
- Viewed individually at original resolution: `screenshots/def-qa-21-lcu-input-and-access-model--01.png` — `e39ed4edff0ca40c56b819fab7adcaa03dbd3490a129bcf6138e1955bc98e48d`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### def-qa-25-qubitization-access-model — Qubitization access model

- Frozen snapshot: `snapshots/def-qa-25-qubitization-access-model.md` — `4effcb3074c8e7b967b4d0468204b81ecc3a4e7397b97180aa82598b9ae8fe2b`
- Local HTML: `html/def-qa-25-qubitization-access-model.html` — `d6fd8cd393f80c35915b8a244a5758f18d7b8e883c417f876a69f60788b44a98`
- Viewed individually at original resolution: `screenshots/def-qa-25-qubitization-access-model--01.png` — `351b6857e8009f984593d5ccc3fe882c7a5ffe37196d6e053ba9ddf5611c3d94`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### def-qa-29-coherent-sampler — Coherent finite sampler and observable value

- Frozen snapshot: `snapshots/def-qa-29-coherent-sampler.md` — `4930660dc891645178dab2fab11ed29a2e308bb6843a42fba38ad4c36aa6ed68`
- Local HTML: `html/def-qa-29-coherent-sampler.html` — `a7f67b356040264eb7bc8c64b169fd45acaab563e2e5c93e350e8ed673416e73`
- Viewed individually at original resolution: `screenshots/def-qa-29-coherent-sampler--01.png` — `f57335c03d6147eb77252f4d4acb22c937ed9393b435050aa217cd6908b54c94`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### def-qa-30-vqe-rayleigh-objective — Variational eigenvalue objective

- Frozen snapshot: `snapshots/def-qa-30-vqe-rayleigh-objective.md` — `c7187c00c43cc863d42c32e272a2fba7410a42d61d508a56296b0e74bf6eeb97`
- Local HTML: `html/def-qa-30-vqe-rayleigh-objective.html` — `91ad7c493133fdf7d311e7f96c7552754b4e15c581e12aa706ad6894d71d6a13`
- Viewed individually at original resolution: `screenshots/def-qa-30-vqe-rayleigh-objective--01.png` — `ac8b45bc8bc72d69d86bf93f2afa68965b09db192395ddbafd7891c3aeb312c5`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### def-qa-33-witness-verifier-interface — Uniform verifier interface with a quantum witness

- Frozen snapshot: `snapshots/def-qa-33-witness-verifier-interface.md` — `10ba3bf0acb3e984bcd7a97d68378c8ef9a3947960bc99d0316743b7611e4ccb`
- Local HTML: `html/def-qa-33-witness-verifier-interface.html` — `cd2933a9402031c9acd24bcd3e1464f9c4130928033116f9166ccc0606426957`
- Viewed individually at original resolution: `screenshots/def-qa-33-witness-verifier-interface--01.png` — `5e9df8a7307209798dbbe7b20f2110bdfbf7fe1b7e5ef2537184971bf4f6e7f0`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### def-qa-35-swap-test-effect — Symmetric and antisymmetric swap-test measurement

- Frozen snapshot: `snapshots/def-qa-35-swap-test-effect.md` — `709b95cd758b6d1e353382e0b2b810437766d4c2e8270fe6f52f58df6b9ebb07`
- Local HTML: `html/def-qa-35-swap-test-effect.html` — `4cea2f2e446a25bd7ab05bb9cb0f5e8db24e5aecb33a296dfd03f4848604696a`
- Viewed individually at original resolution: `screenshots/def-qa-35-swap-test-effect--01.png` — `3349da6fd037e1198470abbbd057c3348248f70394ef1ea5a6975cfe021953e2`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### def-qa-37-phase-reference-cost — Braid phase reference and correction ledger

- Frozen snapshot: `snapshots/def-qa-37-phase-reference-cost.md` — `2149074d142148f4307eb4a1486ee5aa86ba7c9982b1ad31cc196c956a249b63`
- Local HTML: `html/def-qa-37-phase-reference-cost.html` — `c8c3d1defbd952bd2b00a5c66d7110e158af4c62e239ea8f8c23d47f49234d08`
- Viewed individually at original resolution: `screenshots/def-qa-37-phase-reference-cost--01.png` — `ee48194c704c9ede6a34192989db42f01282bc80ddeea00b109535b4640d8e9d`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### def-qa-classical-query-algorithm — Classical query algorithm

- Frozen snapshot: `snapshots/def-qa-classical-query-algorithm.md` — `3a7faa127ee13c126293a19ab6c497dc472c6c0bfa500e67ee40d0fece5bb79a`
- Local HTML: `html/def-qa-classical-query-algorithm.html` — `e143dc104f4c2d4b0c85f785fb85738788fcf2fd712725f255cf7b74ae6dbda8`
- Viewed individually at original resolution: `screenshots/def-qa-classical-query-algorithm--01.png` — `a930ba8593b8489ca9beeca6ec39496005d7ba08a1dce2901b7d47b3efea0e2d`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### def-qa-finite-abelian-hidden-shift-problem — Finite abelian hidden-shift promise

- Frozen snapshot: `snapshots/def-qa-finite-abelian-hidden-shift-problem.md` — `842828bf6a77e244b75106dc74d5a73e80975004b8d3b02fe1c9e079e72a034f`
- Local HTML: `html/def-qa-finite-abelian-hidden-shift-problem.html` — `1d16ce7eaaf31ae31b32a16b4be929237c9da6198bacea3461afb5b0d3698977`
- Viewed individually at original resolution: `screenshots/def-qa-finite-abelian-hidden-shift-problem--01.png` — `5ebc9156d75f93226cf2eb1cfbc77fd23f288ea40722f4fddbb0ebd0c95e4f47`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### def-qa-qft-gate-cost-model — QFT ideal and finite-set gate-cost models

- Frozen snapshot: `snapshots/def-qa-qft-gate-cost-model.md` — `b55021f2853920ccaaffdab4fdd20d81464df76aadeb0534dd8ff595f093aa16`
- Local HTML: `html/def-qa-qft-gate-cost-model.html` — `911c0d16107c6350b40ee0adeb5b2383554a9ad379893406510326072f959c43`
- Viewed individually at original resolution: `screenshots/def-qa-qft-gate-cost-model--01.png` — `f132d26b9a802709a243dc80225b16f528f9f6ac1e114002a56f062ca52667dc`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### ex-qa-11-small-grover-rotation — Exact Grover rotation for four addresses and one marked item

- Frozen snapshot: `snapshots/ex-qa-11-small-grover-rotation.md` — `fc50450b8f94dccbca99723946f2a4ae811ca541ab1d604043d4e07cffe47e18`
- Local HTML: `html/ex-qa-11-small-grover-rotation.html` — `b4202af708e7f146357b1b8fd1626c46399697424fe33b94c90dce52399c7788`
- Viewed individually at original resolution: `screenshots/ex-qa-11-small-grover-rotation--01.png` — `a777f980eb70e047426c7ca03a36a8a93ba531c6f818b0845302fea0e3f31652`
- Viewed individually at original resolution: `screenshots/ex-qa-11-small-grover-rotation--02.png` — `d20d2ba7c2390f356410da1412a5cb37c0383766bf551e0ee31932cb78ef32e9`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### ex-qa-19-complete-graph-search-matrix — Complete-graph search matrix and gap

- Frozen snapshot: `snapshots/ex-qa-19-complete-graph-search-matrix.md` — `6e65b9120492039867923c5e16694203e5617e9dc3db6127803ab935a71eb3fe`
- Local HTML: `html/ex-qa-19-complete-graph-search-matrix.html` — `5f018110a48b26bdd0c60702ee2693fa27773196ff709b6805ddf1cc8b9013d9`
- Viewed individually at original resolution: `screenshots/ex-qa-19-complete-graph-search-matrix--01.png` — `33bbc565ebf3ea274dd7037935630da430dbc8c4c859d0046b76718eb480a892`
- Viewed individually at original resolution: `screenshots/ex-qa-19-complete-graph-search-matrix--02.png` — `b983b8bde2c8c5651886a37815eaa3d5d8bc996d259639474cd1c9b5629e3ace`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### ex-qa-25-chebyshev-truncation — Low-degree Chebyshev simulation polynomial

- Frozen snapshot: `snapshots/ex-qa-25-chebyshev-truncation.md` — `de6d0fcac07f26c3943046d86c8720f86eec545891b7450ceaf719bb7ef391f7`
- Local HTML: `html/ex-qa-25-chebyshev-truncation.html` — `a0a54a5555b84871da9b4d2df084fc7e11a5481bb0f32c1ec7d51c9c3fd148dc`
- Viewed individually at original resolution: `screenshots/ex-qa-25-chebyshev-truncation--01.png` — `dc9b8ef6cf4c2188965bbc678ba35b9af6982d00dae94cc31f6bc4c0af7a7086`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### ex-qa-30-vqe-and-qaoa-objectives — VQE and MaxCut-QAOA objective calculation

- Frozen snapshot: `snapshots/ex-qa-30-vqe-and-qaoa-objectives.md` — `969c61df6b0348ba86a68120803caffbe81f35dfa4ea10232e3bfe28b600294e`
- Local HTML: `html/ex-qa-30-vqe-and-qaoa-objectives.html` — `57cde148c2a5d027c1dfe741c37ec988d87f5cfa6abbd9f8ae10a2e11526dbad`
- Viewed individually at original resolution: `screenshots/ex-qa-30-vqe-and-qaoa-objectives--01.png` — `4888f98a85309a345fc763bd94b754419a25d6a38f5423d210ed5813d74827fe`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### ex-qa-37-fusion-measurement-branches — Fibonacci fusion measurement branches and zero outcomes

- Frozen snapshot: `snapshots/ex-qa-37-fusion-measurement-branches.md` — `dc08a9bec5e39381f36d9610873c92cd92f4b2dd24f971de32a66720d914797d`
- Local HTML: `html/ex-qa-37-fusion-measurement-branches.html` — `bce1c874a545061efbf51e2328712d6897888b7c4a9ce779439616e39c0aa90d`
- Viewed individually at original resolution: `screenshots/ex-qa-37-fusion-measurement-branches--01.png` — `b5b67f484756e7d9ebbe38a0de22a7c8ad1df4e06242476988d621caf696f7f4`
- Capture: KaTeX errors 0; TikZ diagrams 1; diagram failures 0

### ex-qa-phase-estimation-nearest-grid-and-tail — Nearest-grid and tail estimates in phase estimation

- Frozen snapshot: `snapshots/ex-qa-phase-estimation-nearest-grid-and-tail.md` — `93c3eb62190c44f02a86ce463713a56a97c096845de3332b80d382404fc1a83b`
- Local HTML: `html/ex-qa-phase-estimation-nearest-grid-and-tail.html` — `8a6497fc7ef98fabe2eec3b0a6e9067a01f119fe57648b7a82181977402e8db5`
- Viewed individually at original resolution: `screenshots/ex-qa-phase-estimation-nearest-grid-and-tail--01.png` — `86e2eaad5d1d94cdc26b6cfbfb05780cadc80ad16e3ef1d99ad435ae7aecc629`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### lem-qa-11-random-iteration-average — Average Grover success for a uniform integer iteration count

- Frozen snapshot: `snapshots/lem-qa-11-random-iteration-average.md` — `bfe9ef64e20a17fc03cd9beb947fc0eae45a9cf607b11edf4ad452f45998ad94`
- Local HTML: `html/lem-qa-11-random-iteration-average.html` — `8d809579cd2e7f8983feade65f2d876cc93b662e9e0f4ae198ddfc31a83a84e4`
- Viewed individually at original resolution: `screenshots/lem-qa-11-random-iteration-average--01.png` — `404ed3f08d485149949aa17462cc1a12a1d907b27484850c31734274c7a5e26b`
- Viewed individually at original resolution: `screenshots/lem-qa-11-random-iteration-average--02.png` — `344ac9f52a5d8ccfbe8c111934f90937cc358991a69e5acd01e9420afd088556`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### lem-qa-14-coherent-query-normal-form — Coherent normal form for finite quantum query algorithms

- Frozen snapshot: `snapshots/lem-qa-14-coherent-query-normal-form.md` — `21d1a3470dfc1ec08ad0bc6825cff59005b048acc3a153e134b794c73e5bcd1c`
- Local HTML: `html/lem-qa-14-coherent-query-normal-form.html` — `a05192ae39d85230dccb38ae2cc41cd7574b785220259ef2146f3da884227317`
- Viewed individually at original resolution: `screenshots/lem-qa-14-coherent-query-normal-form--01.png` — `518e51b568b17d654e45bf32bfcf82b3203d95935b2e58f841492b49df42ebad`
- Viewed individually at original resolution: `screenshots/lem-qa-14-coherent-query-normal-form--02.png` — `5061c0501eab864bbdbef8195e2cb935f007d56c1ee8e947de46bed053c9adf7`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### lem-qa-16-adversary-progress-endpoints — Adversary progress at initial and bounded-error final states

- Frozen snapshot: `snapshots/lem-qa-16-adversary-progress-endpoints.md` — `52ac827fe6e48b9f7eb50c3f8346b74d96a6231026efa47ed5c65dda23b0d559`
- Local HTML: `html/lem-qa-16-adversary-progress-endpoints.html` — `42af15b9e2860bbd0732b1112da1ad453d7205f1cf24ad57cce23d59ebe2a9de`
- Viewed individually at original resolution: `screenshots/lem-qa-16-adversary-progress-endpoints--01.png` — `95cd8f1de6bdfa30f2b08fd4ed2885b86338a0586eff06bea53622bfbef1ecf3`
- Viewed individually at original resolution: `screenshots/lem-qa-16-adversary-progress-endpoints--02.png` — `c1e46ef23244ec045da1a5697728c9d3ef8972d6d8c3c959ce6530d534808cd8`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### lem-qa-17-invariant-eigenplane — Szegedy walk invariant subspaces from discriminant eigenvectors

- Frozen snapshot: `snapshots/lem-qa-17-invariant-eigenplane.md` — `f9f765b858c8f502eae469d71a57099bd0954ada506e568096dbaadebe4a2d3f`
- Local HTML: `html/lem-qa-17-invariant-eigenplane.html` — `7adcf0d4600bab7e1d936328df80c603e25be7c179a713d348ead27a6e6422e7`
- Viewed individually at original resolution: `screenshots/lem-qa-17-invariant-eigenplane--01.png` — `399449a5db4a7e9c21d37ed6f1826dd0aa5ade4a5386b1f7e859ed55230ca4be`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### lem-qa-20-suzuki-order-cancellation — Suzuki recursive cancellation of error terms

- Frozen snapshot: `snapshots/lem-qa-20-suzuki-order-cancellation.md` — `c0e4dd2078c6b6d684ebf72e4453b9169a3b7b5396628d6ab24a498c1a5b107d`
- Local HTML: `html/lem-qa-20-suzuki-order-cancellation.html` — `0fa5d73cb1dd73b527f3f5c601e3122a88b19f4ccefcf5ab4ee2534e8d815ad1`
- Viewed individually at original resolution: `screenshots/lem-qa-20-suzuki-order-cancellation--01.png` — `0186acd3484e30dba7ecda179dff7d33b9bde4e0961bacf6b087b7fa7b5a2039`
- Viewed individually at original resolution: `screenshots/lem-qa-20-suzuki-order-cancellation--02.png` — `efa01642c2a2036931e7a1d749e836e81c02e4ed9dc6a74ecbb358d1bba04aa1`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### lem-qa-23-qsp-completion-peel-arithmetic-cost — Arithmetic cost of exact tower completion and QSP phase peeling

- Frozen snapshot: `snapshots/lem-qa-23-qsp-completion-peel-arithmetic-cost.md` — `c99354137f35a17741ed5a634d2d1a95794944ab1ceb093aac4f9690990abaa9`
- Local HTML: `html/lem-qa-23-qsp-completion-peel-arithmetic-cost.html` — `0a7af6df2b45d59bd4b69ee6823a851f364ca2c784cbaefae78f5aa855c3e955`
- Viewed individually at original resolution: `screenshots/lem-qa-23-qsp-completion-peel-arithmetic-cost--01.png` — `e2280a5367128ed3071fb340f735ca2c848dad402c9ae53aabf75159f1407ad3`
- Viewed individually at original resolution: `screenshots/lem-qa-23-qsp-completion-peel-arithmetic-cost--02.png` — `c0e6228052f52c873b6a0549287ec8bc7bef8dbf021dce9e8a2dba64ae9e8ae8`
- Viewed individually at original resolution: `screenshots/lem-qa-23-qsp-completion-peel-arithmetic-cost--03.png` — `db237e3ed9fe3d853867460ca9f475fabeab6eebd97fd3ac59537c1463ba2cf4`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### lem-qa-25-sorted-xor-sparse-access-isometries — Clean sparse-state preparation from sorted XOR locations

- Frozen snapshot: `snapshots/lem-qa-25-sorted-xor-sparse-access-isometries.md` — `47bb635d23f58a7adb6c0fd8c5c3f72ab1fcf0a5679b4e47fc8bcc2bb2cf9578`
- Local HTML: `html/lem-qa-25-sorted-xor-sparse-access-isometries.html` — `e5903817ae9528ef02e7fde977bfa63b9e94c36c1e83ef578167c46f57e4e040`
- Viewed individually at original resolution: `screenshots/lem-qa-25-sorted-xor-sparse-access-isometries--01.png` — `bfe299211351e1361891f496067cb32df3acee2bd9843176e0a6439e4b1abcba`
- Viewed individually at original resolution: `screenshots/lem-qa-25-sorted-xor-sparse-access-isometries--02.png` — `3a1360789cdfc9e3a3d9633adf19d2beb5789044132fd39ede4be7552976a2aa`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### lem-qa-26-postselection-normalization-bound — Normalization is stable under a small flagged-vector error

- Frozen snapshot: `snapshots/lem-qa-26-postselection-normalization-bound.md` — `f22d29da7f60437a92456aa29faf387685ac95b6e9042a3b81e6940870739cd4`
- Local HTML: `html/lem-qa-26-postselection-normalization-bound.html` — `1893d52418b586fe33582de4854dabf7258eb669619515376aa18728d65b3b79`
- Viewed individually at original resolution: `screenshots/lem-qa-26-postselection-normalization-bound--01.png` — `7ec717dcdbfaeec843330fe5c168429dce226e0943e20aceed89e4e01c4c167e`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### lem-qa-29-coherent-sampler-outcome-law — Measurement law of a coherent sampler

- Frozen snapshot: `snapshots/lem-qa-29-coherent-sampler-outcome-law.md` — `a97b4a6ab5d7d75c4b589f3531ef0621a39577cfaaa14ae505308530bcec9a4c`
- Local HTML: `html/lem-qa-29-coherent-sampler-outcome-law.html` — `f6322949495037e519a534bbd54c7e86c1e52856019ed5713d5d9d1a2c1c2dff`
- Viewed individually at original resolution: `screenshots/lem-qa-29-coherent-sampler-outcome-law--01.png` — `3c15b141d74fc9f5ab11f25bfac519309b8160deac65be49b569a1181be85f30`
- Viewed individually at original resolution: `screenshots/lem-qa-29-coherent-sampler-outcome-law--02.png` — `f9df702f6efd0e188a173f3f5f7c0ef1663cc2e6e4342f46b2c1f9394ed01acb`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### lem-qa-30-membership-height-geometry — Height geometry and weak-membership binary search

- Frozen snapshot: `snapshots/lem-qa-30-membership-height-geometry.md` — `5d3fc2a4248d2dcba6e3df9d63b2be71932f30e40ed2461e2bc3f02e48820ac7`
- Local HTML: `html/lem-qa-30-membership-height-geometry.html` — `54e3e1185e7cc962edfaf2747f4475a556cbc52bc479622dea4a5677655e3685`
- Viewed individually at original resolution: `screenshots/lem-qa-30-membership-height-geometry--01.png` — `efc09c10dd355f4929f15063a4f37932cc981562e5c6c3590208a01a264bbe50`
- Viewed individually at original resolution: `screenshots/lem-qa-30-membership-height-geometry--02.png` — `7308988f15c0134303f602371d045a1bbc12e2a92f94f6afb6555e35d70704a2`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### lem-qa-32-indexed-to-full-list-conversion — Indexed uniform circuits convert to polynomial-time full lists

- Frozen snapshot: `snapshots/lem-qa-32-indexed-to-full-list-conversion.md` — `0154d87218ef297795ac596899d134489379f161cfcc37861d67d616fa707de5`
- Local HTML: `html/lem-qa-32-indexed-to-full-list-conversion.html` — `f54174f1a00364beece487cb3d0ea04af804a17d24ece653c5a94f783799c939`
- Viewed individually at original resolution: `screenshots/lem-qa-32-indexed-to-full-list-conversion--01.png` — `fa58475e0c1a90666563d4800c579b5e1fd22b4304486b43f65667a2c2b40217`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### lem-qa-33-kkr-legal-clock-restriction — KKR restriction to legal unary clocks

- Frozen snapshot: `snapshots/lem-qa-33-kkr-legal-clock-restriction.md` — `93b9012bf95b770b06dd2e6adae24dc2d009481c7da139324567463bc7084394`
- Local HTML: `html/lem-qa-33-kkr-legal-clock-restriction.html` — `c4e7769a85f660856a63aa0d684efcf62e19fa878a40802a3f0f5b9e2e403fb5`
- Viewed individually at original resolution: `screenshots/lem-qa-33-kkr-legal-clock-restriction--01.png` — `44ccb512a17dc3920bf24e3cf48170df3258c87453cf8fc4f13e44a16fb9260c`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### lem-qa-34-modfkv-sampling-gram-bound — Two-stage ℓ2 sampling controls Gram matrices

- Frozen snapshot: `snapshots/lem-qa-34-modfkv-sampling-gram-bound.md` — `20e1249ff8d4744457f80555906b7ef19d0dff13d9df4919dd561371a48a386d`
- Local HTML: `html/lem-qa-34-modfkv-sampling-gram-bound.html` — `b598a1bbc2886f85917f81e9f0c2e5f3eb1f1135cb14b7c85f63c60ccd1a2f29`
- Viewed individually at original resolution: `screenshots/lem-qa-34-modfkv-sampling-gram-bound--01.png` — `9141b261bd5c14f7e346ba439d212edf273e240c806d71283947e5fa497bc41b`
- Viewed individually at original resolution: `screenshots/lem-qa-34-modfkv-sampling-gram-bound--02.png` — `43aa6fadb0c728ae30d3c730bdcb4ebf3b8d19c2e392238fb3eb6eaefdcdbdde`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### lem-qa-35-trace-norm-tensor-density-identity — Trace distance is unchanged by a fixed tensor factor

- Frozen snapshot: `snapshots/lem-qa-35-trace-norm-tensor-density-identity.md` — `2d4fe19feb9c7d3c1b5a120129039304340941c1513ac9402d6acf9f5e2ca901`
- Local HTML: `html/lem-qa-35-trace-norm-tensor-density-identity.html` — `7a9813d9bffd55bcd473a0af46a59da8d6951b541f23da709b1eddb5e2b107a8`
- Viewed individually at original resolution: `screenshots/lem-qa-35-trace-norm-tensor-density-identity--01.png` — `0f1dee9802d13a10aaa79829eef296411da709e114d0bae6931ee2d9c3732f82`
- Viewed individually at original resolution: `screenshots/lem-qa-35-trace-norm-tensor-density-identity--02.png` — `6242164d1349e46566535ddcdccd370597db477e94b7191ba6d227dc13ce9de4`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### lem-qa-37-fixed-sector-global-phase — Standalone and controlled phase accounting for a fixed-sector braid

- Frozen snapshot: `snapshots/lem-qa-37-fixed-sector-global-phase.md` — `b170ddfb90c333ac68ef8e0a8f2d787fd36878ee994b1e1d2c49789e6d2def17`
- Local HTML: `html/lem-qa-37-fixed-sector-global-phase.html` — `f286da84f0cf242f79875c70a9fa4ffba9492747ebc391ba5cf67a6aea20cd97`
- Viewed individually at original resolution: `screenshots/lem-qa-37-fixed-sector-global-phase--01.png` — `a40aa98d0a2607b0d032524a62cb26beed76ca92edc0bb70e850a3636f82bb02`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### lem-qa-controlled-cyclic-multiplication-clean — Clean reversible controlled multiplication by a cyclic constant

- Frozen snapshot: `snapshots/lem-qa-controlled-cyclic-multiplication-clean.md` — `7adb6ee9b01547cd937a712c1e827c5fe5dcc6058661557f7bf0753b5f752008`
- Local HTML: `html/lem-qa-controlled-cyclic-multiplication-clean.html` — `a82918adad412a3e49ca01c2f803e3246ef1262e1ebc24f1196d790bb16841dc`
- Viewed individually at original resolution: `screenshots/lem-qa-controlled-cyclic-multiplication-clean--01.png` — `64734c6147b1393762275c441e34d559a95ec3ba8c4b7b257e4e1538fca367bd`
- Viewed individually at original resolution: `screenshots/lem-qa-controlled-cyclic-multiplication-clean--02.png` — `249f2ccc0f9b8682be022e56ee4ef8b379d9c890cfa38e9759f53055f14cb49c`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### lem-qa-finite-rational-legendre-criterion — Finite-rational Legendre criterion before the terminal convergent

- Frozen snapshot: `snapshots/lem-qa-finite-rational-legendre-criterion.md` — `224e2d8d617a33b7e88ec968d03deb799c4e461d5254ff8efd2fc160174da155`
- Local HTML: `html/lem-qa-finite-rational-legendre-criterion.html` — `bfd1eb3070b930d344ecc0cf283b1f1b0540a4037ea965d65587d14c337482c7`
- Viewed individually at original resolution: `screenshots/lem-qa-finite-rational-legendre-criterion--01.png` — `64ef1fba177bc9931bb5aa476ed6217d5391b61ea85b322bf0c22e022de98f9a`
- Viewed individually at original resolution: `screenshots/lem-qa-finite-rational-legendre-criterion--02.png` — `9846199d82b3c36bbc6ed698ec3189f9d373b1f4eb069731ae60ffe43b68ada9`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### lem-qa-rational-reconstruction-candidate-uniqueness — Uniqueness of denominator-bounded phase candidates

- Frozen snapshot: `snapshots/lem-qa-rational-reconstruction-candidate-uniqueness.md` — `ab6d503a9d3d118cd0c4cab86ff3db052a270851487918861659f8de6508e3bf`
- Local HTML: `html/lem-qa-rational-reconstruction-candidate-uniqueness.html` — `154b6800e86399679337b1fe89378ed438e2ad720250a744bc84c6931a422d9b`
- Viewed individually at original resolution: `screenshots/lem-qa-rational-reconstruction-candidate-uniqueness--01.png` — `990bb052ec975cc7cd7dc834f7be3eaf44a649f098a879434265325ad62c0612`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### prop-qa-12-amplitude-access-cost-accounting — Amplitude-amplification access and resource accounting

- Frozen snapshot: `snapshots/prop-qa-12-amplitude-access-cost-accounting.md` — `d1c9a0619d34967f9fb93f15db2213587d69827d21a1a79d880b7baa33311afb`
- Local HTML: `html/prop-qa-12-amplitude-access-cost-accounting.html` — `ff1ad44f2696f976c2baf322378544869be7b9c37c9801b74b19cbcfd18eb99d`
- Viewed individually at original resolution: `screenshots/prop-qa-12-amplitude-access-cost-accounting--01.png` — `346233d8a0d618fa92b7dbe73d015485d55626a526891fb03d301189db7208d4`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### rem-qa-number-theoretic-extension-scope — Scope of number-field and elliptic-curve extensions

- Frozen snapshot: `snapshots/rem-qa-number-theoretic-extension-scope.md` — `ecf3d109fce6453dea766acc8c8c7b400cadc117c09b819a242a51cf4e4f4f20`
- Local HTML: `html/rem-qa-number-theoretic-extension-scope.html` — `5eebc8830ed965d6cfaf5d7d857e0e16e2b822e0e5194a59c61429bc0429d48d`
- Viewed individually at original resolution: `screenshots/rem-qa-number-theoretic-extension-scope--01.png` — `de2ddbc019e671cbf6aee51be73fcabe32cdec6b23e61fb8b21a2cfeaa8a9a3e`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### thm-qa-12-amplification-rotation-correctness — Exact success probability after amplitude amplification

- Frozen snapshot: `snapshots/thm-qa-12-amplification-rotation-correctness.md` — `2344e5685587d666f06f74a90694058ebf3259048780e76577e425713dd1b28d`
- Local HTML: `html/thm-qa-12-amplification-rotation-correctness.html` — `53b572466c5eafb5c34e9089a05ffc88a3c98ed088e02de6091a71622a9db7cf`
- Viewed individually at original resolution: `screenshots/thm-qa-12-amplification-rotation-correctness--01.png` — `173b0eade1af4486e00c504a5f55a4f5a76d69a4d7517ce26cb261ad7964a3ef`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### thm-qa-12-unknown-amplitude-success — Unknown-amplitude search has no false positives and halts almost surely

- Frozen snapshot: `snapshots/thm-qa-12-unknown-amplitude-success.md` — `983fa86e113da705855f0605843181dc0f7693f355e3f189d32b2180be498bf7`
- Local HTML: `html/thm-qa-12-unknown-amplitude-success.html` — `a52e32805b79494adabe81fa4ee6a24befcf1c2e4582ebf464fbaaad51c3f9e2`
- Viewed individually at original resolution: `screenshots/thm-qa-12-unknown-amplitude-success--01.png` — `d82fbe9cf032db90a0793e8b8fc8a5b23832ffaf2adbbb015b58f3ee121c4118`
- Viewed individually at original resolution: `screenshots/thm-qa-12-unknown-amplitude-success--02.png` — `d012ec1c5eea6d12320611f2a40d7f5f365b428b950ac8965247bce1db5c0e58`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### thm-qa-14-bbbv-search-lower-bound — BBBV hybrid lower bound for unstructured search

- Frozen snapshot: `snapshots/thm-qa-14-bbbv-search-lower-bound.md` — `f75b5d8fc05aaeee3eb7b66ee0be69b0176a8288c74b9f40980815fd285a7a5d`
- Local HTML: `html/thm-qa-14-bbbv-search-lower-bound.html` — `bc04d6db4fb40dae50c741d019ee3fbbb85a99717dbfd8ec300da08db9b676d5`
- Viewed individually at original resolution: `screenshots/thm-qa-14-bbbv-search-lower-bound--01.png` — `8af441fdb33354c1a8b3f088f827089f575559fd426093bdd90b3f96a7d273c1`
- Viewed individually at original resolution: `screenshots/thm-qa-14-bbbv-search-lower-bound--02.png` — `4f67d95b2982db7a21e4b4e5e2a86fd1cf16c84f20225ff8970b7ee68b29d10c`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### thm-qa-16-controlled-consistency-reflection-correct — The controlled input-consistency circuit realizes the exact reflection

- Frozen snapshot: `snapshots/thm-qa-16-controlled-consistency-reflection-correct.md` — `394ba6afb94a2d076ab6377204a52654a4b15b1892831839f6c500137851200e`
- Local HTML: `html/thm-qa-16-controlled-consistency-reflection-correct.html` — `1d14a06c441be3cbc610a1408176c9588e93c6b3366d078e807f7c2368c43a00`
- Viewed individually at original resolution: `screenshots/thm-qa-16-controlled-consistency-reflection-correct--01.png` — `4167161a17c762a077402a185cf1e79335fa444be44acf9c8d49681fd06eabf2`
- Viewed individually at original resolution: `screenshots/thm-qa-16-controlled-consistency-reflection-correct--02.png` — `be04b0aa069ad8facec0d7d65cda1b9dadc98fcb725bb16deb82a779b725a1c7`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### thm-qa-17-szegedy-spectral-mapping — Szegedy spectral mapping for one and two reflections

- Frozen snapshot: `snapshots/thm-qa-17-szegedy-spectral-mapping.md` — `9f597cecccdf6a09b769983fefeac26066d8fd6ec4ce7f0f570612ae8060e4d1`
- Local HTML: `html/thm-qa-17-szegedy-spectral-mapping.html` — `0ab3d0bae06660a0836e8d9b6a560e4fb1b340cdcb03eb882ccd4a963551c4e5`
- Viewed individually at original resolution: `screenshots/thm-qa-17-szegedy-spectral-mapping--01.png` — `0f3f1389c3657e96126bfa22f28c9f3ad06fedf6e68726d80cefbfe6e1a120fd`
- Viewed individually at original resolution: `screenshots/thm-qa-17-szegedy-spectral-mapping--02.png` — `3624f2205a3af74857056afb862567799c064b139714d84380e6b81f8dd08ea3`
- Viewed individually at original resolution: `screenshots/thm-qa-17-szegedy-spectral-mapping--03.png` — `5c6643881353edf9bc915bf2deb86ac501d5f8787c7af05ae40034230130c1af`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### thm-qa-19-matrix-exponential-unitary-properties — Unitary and differential identities for finite matrix dynamics

- Frozen snapshot: `snapshots/thm-qa-19-matrix-exponential-unitary-properties.md` — `0017585ad50c923e259c805199282404fc454c19ad90ade453e4f6b808335ba8`
- Local HTML: `html/thm-qa-19-matrix-exponential-unitary-properties.html` — `1b13ca8d020bdec0f2b8833e667116d28ddd3f06bf09f75741b98db737f64c07`
- Viewed individually at original resolution: `screenshots/thm-qa-19-matrix-exponential-unitary-properties--01.png` — `22a94fd365f48bc13c1e72c0056be9adffc229bdad0faaec7dbe267af63d4c48`
- Viewed individually at original resolution: `screenshots/thm-qa-19-matrix-exponential-unitary-properties--02.png` — `3fe677520b0caf678ab46e7b5be0892e6bb67ded3796a0bec912db1842d659f2`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### thm-qa-21-taylor-tail-bound — Taylor simulation tail bound

- Frozen snapshot: `snapshots/thm-qa-21-taylor-tail-bound.md` — `3cf076189819264c47e30ff20004dfc0ca4c4cf42b714047cceccfa612040fbe`
- Local HTML: `html/thm-qa-21-taylor-tail-bound.html` — `ba5f1169c87b124dfacec9ca2bb403ffedc79f69826afdf783ec88915e8d58eb`
- Viewed individually at original resolution: `screenshots/thm-qa-21-taylor-tail-bound--01.png` — `94e17a1fdf2694e5c7594034e7c9a0a27cfd9fa80d23c07128b1df88478df943`
- Viewed individually at original resolution: `screenshots/thm-qa-21-taylor-tail-bound--02.png` — `001d54afa529cb52ee80560cbfc4963160fcf9a3c74c70334bc83077f04790e7`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### thm-qa-23-qsp-phase-implementation-error — Hybrid bound for imperfect QSP phase rotations

- Frozen snapshot: `snapshots/thm-qa-23-qsp-phase-implementation-error.md` — `1c50a830bb15a526fa61118d6280227738be5e57d3a00df231976436ef3efd9f`
- Local HTML: `html/thm-qa-23-qsp-phase-implementation-error.html` — `26f3ded91e0a2d5049fa916d4e3c563df2f78fc728d2325f23b7060f29c1fd06`
- Viewed individually at original resolution: `screenshots/thm-qa-23-qsp-phase-implementation-error--01.png` — `99a835fcf97cb08207e80b419e4d99fef9bb9bf1898370a97e0229f24dc3060c`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### thm-qa-25-qubitization-signal-sequence — Qubitization lifts scalar QSP

- Frozen snapshot: `snapshots/thm-qa-25-qubitization-signal-sequence.md` — `1a3cff9f032aae44bcd8377fe78fce140c4aa1e2f48914b94e70e4d172a3f368`
- Local HTML: `html/thm-qa-25-qubitization-signal-sequence.html` — `934a6ad341d935dfe15fb6144942ed426a47aa81e7e3cec8fb319433430d707f`
- Viewed individually at original resolution: `screenshots/thm-qa-25-qubitization-signal-sequence--01.png` — `27e673c96995d0eaaafe1cf3ac2b7b5955264121c2016ffeee72ec6dd1b3f563`
- Viewed individually at original resolution: `screenshots/thm-qa-25-qubitization-signal-sequence--02.png` — `ad9f7c91ad0706ec71cfcdb655ce3e0c660b25c5691c053db6309e8cbd69aa5b`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### thm-qa-27-cks-linear-condition-guarantee — CKS nearly-linear condition-number guarantee

- Frozen snapshot: `snapshots/thm-qa-27-cks-linear-condition-guarantee.md` — `869b2fd3b734ac8738ad84182c960e71be9a26c78381f34621c407187d379c13`
- Local HTML: `html/thm-qa-27-cks-linear-condition-guarantee.html` — `82be32910ec0a3166bc8a67ccbd1436c66dee3fb96c84a26ed18717701e03fb4`
- Viewed individually at original resolution: `screenshots/thm-qa-27-cks-linear-condition-guarantee--01.png` — `160e4519296a76c9ed344c9deb69c334087461769b0d76fb6d6f7131bfe43004`
- Viewed individually at original resolution: `screenshots/thm-qa-27-cks-linear-condition-guarantee--02.png` — `e0a03a9628c7174506692303bc4f84bcb35f800a5c4a7a4f7640dfad082de613`
- Viewed individually at original resolution: `screenshots/thm-qa-27-cks-linear-condition-guarantee--03.png` — `47f6da0ea3eb170fe72a0e819981b412d1ed683cf62458e8e9107a4d564dbb30`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### thm-qa-29-counting-is-indicator-expectation — Uniform counting is finite indicator expectation

- Frozen snapshot: `snapshots/thm-qa-29-counting-is-indicator-expectation.md` — `6c347dc34ed2ce17af20d852967a19072586782a93c5a69a3456d635216ac2d4`
- Local HTML: `html/thm-qa-29-counting-is-indicator-expectation.html` — `dfed15016fe77d809f9c820bfc5df1958d60ab48e2d7d49ccd305457eece3b97`
- Viewed individually at original resolution: `screenshots/thm-qa-29-counting-is-indicator-expectation--01.png` — `cd53c219d0b7e2d7c267136a6527bc43235b1cdb4247c0c21a9571a765dcce41`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### thm-qa-30-quantum-sdp-solver-guarantee — Quantum SDP additive-optimality guarantee

- Frozen snapshot: `snapshots/thm-qa-30-quantum-sdp-solver-guarantee.md` — `f77d12e102a14e81a5d3f01c02001cb71fada794a2a22ff51bac5f38b825fabc`
- Local HTML: `html/thm-qa-30-quantum-sdp-solver-guarantee.html` — `4c5ec3ee8062dd35379065eec6576b41fbf0106b7ab0fa08f506e452c5931129`
- Viewed individually at original resolution: `screenshots/thm-qa-30-quantum-sdp-solver-guarantee--01.png` — `6c572a86eca4cfd2c0e32d2e54e6c50a8623c3bec9d879074d6e6e0570c29f2a`
- Viewed individually at original resolution: `screenshots/thm-qa-30-quantum-sdp-solver-guarantee--02.png` — `4d25248b110a4ca72da541a013cac685b89c8c0a7471849d501c729052c3cc90`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### thm-qa-32-simon-classical-randomized-query-lower-bound — Classical randomized Simon decision requires square-root-many queries

- Frozen snapshot: `snapshots/thm-qa-32-simon-classical-randomized-query-lower-bound.md` — `acd084e63c0f92fc0ee2145cda41eb25bf39b02acc246755d9de1b7c88487f53`
- Local HTML: `html/thm-qa-32-simon-classical-randomized-query-lower-bound.html` — `b5a538ae022f10aa4e645c2d3b9624c6c08b5e30a48e3ded17125de68e25651f`
- Viewed individually at original resolution: `screenshots/thm-qa-32-simon-classical-randomized-query-lower-bound--01.png` — `e4709bb664d94ad4a100547e8482c866f08593bcdbf80d077b98c96085736c72`
- Viewed individually at original resolution: `screenshots/thm-qa-32-simon-classical-randomized-query-lower-bound--02.png` — `17924c4233bf6934dda00d95459563841faf1d00d6ded7e4dac59cf5453d2f21`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### thm-qa-34-classical-output-writing-lower-bound — Writing an N-bit output costs at least N bit operations

- Frozen snapshot: `snapshots/thm-qa-34-classical-output-writing-lower-bound.md` — `41e88979c20ae775d88f42f3dff3b5be8068c9bea5e6f4fe876a2247adb25703`
- Local HTML: `html/thm-qa-34-classical-output-writing-lower-bound.html` — `f507b78f054d275554e0c8ca395ec062bc73c98d2a48d0585ffdedc66a17fa8d`
- Viewed individually at original resolution: `screenshots/thm-qa-34-classical-output-writing-lower-bound--01.png` — `0f28cbbd9f0e7e5f96db9fe81f2777632ef65e9893e7fa1b806efaac36e56737`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### thm-qa-35-private-coin-equality-lower-bound — Private-coin SMP equality requires Ω(√n) bits

- Frozen snapshot: `snapshots/thm-qa-35-private-coin-equality-lower-bound.md` — `9a4b7682146b83e7a191b4f99f75c8eace76634d3fce3f80b64bf97a6158258e`
- Local HTML: `html/thm-qa-35-private-coin-equality-lower-bound.html` — `a30c3e5cf77b03a28350299cb901e8002b6bf83af60734c862e86eea489ef561`
- Viewed individually at original resolution: `screenshots/thm-qa-35-private-coin-equality-lower-bound--01.png` — `14af1f7119ddc712ef60041b17e9cd6d86b4ad9d186133b5437b371e46aee260`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### thm-qa-37-fusion-branch-validity — Fusion measurement branches are normalized exactly when nonzero

- Frozen snapshot: `snapshots/thm-qa-37-fusion-branch-validity.md` — `fddcc95a4313c422cd22470ebe5fadb615d975850c5f3d06d8a1642213310464`
- Local HTML: `html/thm-qa-37-fusion-branch-validity.html` — `297e4895a3257f0c28a298c5b58fcf66c298458e222a1e8ea76a1697c0926c94`
- Viewed individually at original resolution: `screenshots/thm-qa-37-fusion-branch-validity--01.png` — `1961d877625f49d9b063d8ecaa0e211af3f586eadbf3718a7a9b1e3118922357`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### thm-qa-cyclic-group-power-evaluation-correctness — Correctness and clean-work cost of cyclic power evaluation

- Frozen snapshot: `snapshots/thm-qa-cyclic-group-power-evaluation-correctness.md` — `e9cfaa969a087e79d0599f70f28365027f22dfa058bfb4469c5e42626ac7dd8b`
- Local HTML: `html/thm-qa-cyclic-group-power-evaluation-correctness.html` — `03b4f0fa20231de83270b49c4a9355e99ad651b39cb424ea0f78706660d212dd`
- Viewed individually at original resolution: `screenshots/thm-qa-cyclic-group-power-evaluation-correctness--01.png` — `5f8c3d93100eebc7ffb75828c4b44978ff0ea6f82fa4e3cde1d1182038ce77e1`
- Viewed individually at original resolution: `screenshots/thm-qa-cyclic-group-power-evaluation-correctness--02.png` — `08d7f9dfbf4f5d5ed9ca1a25d4741b2182abb2b185ebbb50599a578d139cb19b`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### thm-qa-f2-gaussian-elimination-correct-and-cost — F2 row reduction returns the unique Simon mask

- Frozen snapshot: `snapshots/thm-qa-f2-gaussian-elimination-correct-and-cost.md` — `61650b2381ccf9ef7ea32b17fedd55d0b3ef96a0a3d2341f7b0fb1ccc78bfb14`
- Local HTML: `html/thm-qa-f2-gaussian-elimination-correct-and-cost.html` — `3ea1484e4106b48ae4e8661a4732fc934a47b6388e7bdbb96c090eeb8a0361bd`
- Viewed individually at original resolution: `screenshots/thm-qa-f2-gaussian-elimination-correct-and-cost--01.png` — `7546c4ff4d24002e445ebdb7381761ceb75fae9689b3a03783a1c20ba994e6ef`
- Viewed individually at original resolution: `screenshots/thm-qa-f2-gaussian-elimination-correct-and-cost--02.png` — `bba58eee05adfe1337a08401a2254fc5947c93ec9ba2a0a3cdafba637365410c`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### thm-qa-finite-abelian-hidden-subgroup-cost — Finite abelian hidden-subgroup query and circuit costs

- Frozen snapshot: `snapshots/thm-qa-finite-abelian-hidden-subgroup-cost.md` — `f56ed2ba252d01e7aea3bcc8cad74031aef6d4ea4999e178b5e94111aa5374c5`
- Local HTML: `html/thm-qa-finite-abelian-hidden-subgroup-cost.html` — `1fbc8eb86f8bbaf720466081e3b37e1e09b9715305d9cc70571349232a9bea8d`
- Viewed individually at original resolution: `screenshots/thm-qa-finite-abelian-hidden-subgroup-cost--01.png` — `101eead7f50ccfe96e4016bad53894ce7b0d3e75f9ebc0ccefbe2c4ff1227331`
- Viewed individually at original resolution: `screenshots/thm-qa-finite-abelian-hidden-subgroup-cost--02.png` — `62d466e3cbab00b177502470a13ebd862d4331071ec9c3c4e0b8d5e62b47157b`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### thm-qa-modular-order-finding-cost — Separate order-finding query, gate, and bit costs

- Frozen snapshot: `snapshots/thm-qa-modular-order-finding-cost.md` — `059ea9237148146d578975cb976e033387b4afd95e1f7a142380414b1210bf78`
- Local HTML: `html/thm-qa-modular-order-finding-cost.html` — `fe2b0dbd81068658b6500194793bbae3ef104bb9ba98b8299ce205d4c6325c2a`
- Viewed individually at original resolution: `screenshots/thm-qa-modular-order-finding-cost--01.png` — `2f2db431a4e9addcd25480f1b30234f27b9c32efc1de257cffc7798d993b8d9f`
- Viewed individually at original resolution: `screenshots/thm-qa-modular-order-finding-cost--02.png` — `30dccf30f9f07cf64f710150d94c7142b840ab141ee973efd8bf1edd55ad0228`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### thm-qa-promise-preserving-query-reduction-composition — Promise-preserving reduction composes with a query solver

- Frozen snapshot: `snapshots/thm-qa-promise-preserving-query-reduction-composition.md` — `74e8dacc2cad1e7de8bc836f0be80a60248299435539ce415712015c6f0afbcb`
- Local HTML: `html/thm-qa-promise-preserving-query-reduction-composition.html` — `9e38d8e7e215b037c68c828c2adbb8952268c933bd0f6cb75ea8ea7c0312c169`
- Viewed individually at original resolution: `screenshots/thm-qa-promise-preserving-query-reduction-composition--01.png` — `5dbe6b1d50b1bff1d4f74c18412ab6aff807aad1fd39669b3b2c0d2ffad42069`
- Viewed individually at original resolution: `screenshots/thm-qa-promise-preserving-query-reduction-composition--02.png` — `700479273e134188fb2909c762e79dbb31e0a42feeb8e171a10ef407fb0a9eba`
- Viewed individually at original resolution: `screenshots/thm-qa-promise-preserving-query-reduction-composition--03.png` — `058cf8110891c61c8e1a858c5486c7c6782d1aa51c4808e1d45375cdeace31ce`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0

### thm-qa-simon-hadamard-sampling-law — Simon samples uniformly from s-perp

- Frozen snapshot: `snapshots/thm-qa-simon-hadamard-sampling-law.md` — `98b2deaba77f9787a171b5432ef6a2f2246812f583d1bf0eb53bb0dad832f2dc`
- Local HTML: `html/thm-qa-simon-hadamard-sampling-law.html` — `97896736c0bba3abbe172f8990df5fe2a742dfd24685b761a50d532c40b39e61`
- Viewed individually at original resolution: `screenshots/thm-qa-simon-hadamard-sampling-law--01.png` — `920fcbc2489236d82706ac931b9acc70b4977509e441acdd91176dfb1ab66b78`
- Viewed individually at original resolution: `screenshots/thm-qa-simon-hadamard-sampling-law--02.png` — `03c7730d3b144b31288091421a1ec93100f52791fdc10355fa1304016f498feb`
- Capture: KaTeX errors 0; TikZ diagrams 0; diagram failures 0
