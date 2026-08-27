# Step 8 closure recovery — group c

## Outcome

Handled all 11 current unadjudicated tuples owned by group c: 5 confirmed fatal and repaired, 6 confirmed nonfatal with no content edit. No false-positive outcome, cross-group alert, or group-c blocker was recorded.

## Exact rows handled

| item | context_sha256 | item_sha256 | outcome | rationale |
|---|---|---|---|---|
| `def-weighted-zero-and-pole-counts-on-cycle` | `70a03b2d530b860306e55e9a9982f1cfd9e108517d9fe948e388bed4b5486ed6` | `70741f1bcf64ca1b0d98631ee1bd2bb1c6d40cce088a85febf21193adbcc3e3c` | `confirmed_fatal` | Fatal: the definition used a domain-only meromorphic notion on an arbitrary open set; repaired with an explicit componentwise convention. |
| `ex-hurwitz-preserves-a-simple-zero-under-local-uniform-convergence` | `8d7b4b6f0aeebd48774fbfe121f93d550ef3c17063a737d671e987886dd11a38` | `c4e4302889e659ee98c4d2050edb71d7f93fe841cc4db25067101e573783d239` | `confirmed_nonfatal` | Nonfatal: the example givens supply holomorphy, local uniform convergence, and the isolated simple zero; L1 is only an overcompressed restatement. |
| `ex-the-holomorphic-hull-of-a-product-torus-in-the-bidisc-is-the-polydisc` | `ad924af8e7312f0c4ac6e74a52fb571879823e1a571a51117e21031ab7f38b60` | `995aaca01f99500471c08a1041a8295daefc9bee454113c0b526b2ffbb131cd6` | `confirmed_nonfatal` | Nonfatal: step 1.1 explicitly supplies continuity on the closed polydisc and holomorphy on its interior; L2 merely abbreviates those local givens. |
| `lem-riemann-integrable-function-has-borel-darboux-envelopes` | `8d29b4a2cd41256049464569c42372e5e3857107cfaed538bfc9ca2b74e062c8` | `0577d4ce4e4fa5b2906746cdf8635325d8667a115a6125ef5e062c885aa8b2f5` | `confirmed_nonfatal` | Nonfatal: L10 supplies reciprocal smallness and the eventual form follows immediately from order monotonicity, closing the squeeze. |
| `thm-additive-jordan-chevalley-decomposition` | `dea4cb42c0cc20007547b5ca4f690ef65365cf6d3b95c449425c362226a2eaf4` | `1ec6bd2e3e5ea46448c22ed2298e4957e3599403ffe80b80e34b34e0e280f5e8` | `confirmed_nonfatal` | Nonfatal: a splitting field of one finite-degree polynomial is finite by the standard finite root-adjoining construction; this is an immediate omitted citation. |
| `thm-argument-principle-null-homologous-cycle` | `fd92afbdeb7bf856a3b1047978747a8d9104873f2442338bd3bf4351f4f73c27` | `2e8463b127c6f1905aa69ce781f8d3bc778bb92f6a257f0490ff5822cd521aae` | `confirmed_fatal` | Fatal: the statement used the domain-only meromorphic definition on arbitrary open Omega; repaired by inheriting the componentwise convention. |
| `thm-cartan-thullen-theorem` | `2ba7766e3b86334f69536e5b1acb94cac9e91b7f14856621abbfb99bd83be2b7` | `049569461850ba734876195954f1e6fbc226128dc4dbdce47c643506c92c0c9a` | `confirmed_fatal` | Fatal: the prior blow-up sequence was not tied to the extension overlap component; repaired using a first-exit path and the identity theorem on that component. |
| `thm-domains-of-holomorphy-are-hartogs-pseudoconvex` | `632ecb725435aef2f96b2a74cf263d0dcab9e1615bc750e603f8dc0820c17a90` | `8d812057a9b62e58e70ad836cfaa9a640612ea976606cc8f30226a59a086d1c9` | `confirmed_fatal` | Fatal: polynomial majorants alone did not establish the full subharmonic criterion; repaired by uniform trigonometric approximation and the disc-submean inequality. |
| `thm-levi-and-hartogs-pseudoconvexity-for-c-two-domains` | `c048370bd2792d52ef3c93e13beb03177aa16d05209a793c8c54dea09b2b1704` | `ad27206c9c321d61e4c9448487064b1c77b2d4dec95b942d73ca2252580c0ad8` | `confirmed_fatal` | Fatal: the analytic discs moved in an imaginary direction after choosing a real normal coordinate; repaired with the inward real shift -s. |
| `thm-maximum-principle-for-plurisubharmonic-functions` | `6aaa1ad68066ada09b9ab63d7f60ae8f0c40c58254ef2b65be1ada29ac3a70fe` | `6f6e0dc21be3e78b8ccb95be7de67a59894e39329302042992e9b3160c10ce15` | `confirmed_nonfatal` | Nonfatal: the line through the finite maximizer cannot have restriction identically -infinity, so the omitted alternative is immediately excluded. |
| `thm-weyl-inequalities-for-self-adjoint-sums` | `c56b6cc5faa69d067f4e90ca6c7e8c764cfb4a5139ed749c0d56f9b2123c52cd` | `72b209becbf0925a815471f78a447c0f803dc84ab19a3b71bf57fc028d5715e6` | `confirmed_nonfatal` | Nonfatal: (A+B)*=A*+B*=A+B is an immediate elementary derivation from the givens. |

## Licensed repairs and rejudge targets

| item | repair | defect row |
|---|---|---|
| `def-weighted-zero-and-pole-counts-on-cycle` | Defined meromorphicity on disconnected open sets componentwise. | `frontier-21-c-step8-r1-001` |
| `thm-argument-principle-null-homologous-cycle` | Made the theorem inherit the componentwise meromorphic convention. | `frontier-21-c-step8-r1-002` |
| `thm-cartan-thullen-theorem` | Connected the exploding series to the exact simultaneous-extension component via a first-exit path. | `frontier-21-c-step8-r1-003` |
| `thm-domains-of-holomorphy-are-hartogs-pseudoconvex` | Replaced the incomplete majorant argument by Stone-Weierstrass approximation and a submean proof. | `frontier-21-c-step8-r1-004` |
| `thm-levi-and-hartogs-pseudoconvexity-for-c-two-domains` | Corrected the analytic-disc family to move in the inward real normal direction. | `frontier-21-c-step8-r1-005` |

These five items are the complete group-c rejudge target set for the next engine-owned cycle.

## Documentary updates

- Regenerated current citation and derivation records for the repaired items and their direct contract consumers.
- Updated Cartan–Thullen, Hartogs-pseudoconvexity, and Levi boundary/risk records to match the repaired proofs.
- Rebuilt the merged proof-contract document from all ten per-batch sources.

## Checks

- Exact-row/hash audit: 11/11 answered; 5 fatal items changed and all 6 nonfatal items unchanged.
- Focused precheck: 4/4 repaired proof-bearing items pass.
- Focused render check: all 5 repaired items pass YAML, math, delimiter, and KaTeX checks.
- Focused proof contract: 9/9 affected entries pass with zero errors or warnings.
- Group-c boundary audit: 872 rows, no template reuse or contradicted disposition.
- Focused risk review: all 3 high/critical repaired proofs have complete reviews.
- Citation fidelity: 307 citations across batches 4, 7, and 8; no missing quote or widening candidate.
- Dependency check: zero errors; 238 existing corpus warnings.
- Defect-ledger bijection: 259 frontier-21 rows checked with zero errors.
- Step-8 scope check: 433 items partitioned, zero open rejection and zero cross-group alert.
- Step-8 guard: 41/41 current changes licensed; zero creation or deletion.

## Alerts and blockers

No cross-group alert was raised. No blocker remains for group c. A further rejection of any second-cycle target is subject to the engine’s terminal cycle limit; no extra judge cycle was initiated here.

