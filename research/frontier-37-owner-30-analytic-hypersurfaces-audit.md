# Frontier 37 batch 30 analytic hypersurfaces audit

Date: 2026-10-01. This report records the current mathematical audit and the
repairs explicitly released by the owner. It is not an item decision or a
Step-3 completion receipt.

## Scope and review basis

The current batch manifest contains 29 draft items: 21 on the A page
`analytic-hypersurfaces-and-local-parametrisation` and eight examples on its B
companion. All 29 item files exist, and the current manifest IDs match the 29
canonical coverage IDs and 29 proof-contract keys. The current page category is
`complex-analysis`, in orders 869 and 870. The A page requires the six earlier
pages declared in the manifest; the B page requires the A page.

The owner reported that the current Step-3 state is 0/29 closed after schema
normalization of `justified_by`. I treated all current statements, facts,
proofs and used suppliers as needing review. Earlier author-level `accept` or
`repaired` records were not treated as mathematical approval. I read the
current item bodies and their declared direct supplier statements and proofs,
then checked the released repairs against the source evidence recorded in the
batch coverage.

The coverage file has 29 canonical items and 36 source headings: 19 included,
six inline, four already published and seven out of scope. Its source records
were not changed by the proof repairs.

## Mathematical route and source evidence

The intended chain is mathematically coherent when its local interfaces are
stated precisely:

1. Center a germ at its point, choose a regular direction, prepare it as a
   Weierstrass polynomial, and shrink to a product neighborhood with stable
   slice count. The quotient is finite by Weierstrass division. Properness is
   the closed-zero-set argument on `K × closed D`, using the absence of zeros
   on the boundary circle. Simple roots give local sheets by the holomorphic
   implicit-function theorem; the discriminant excludes repeated-root
   fibres.
2. For a reduced hypersurface, the principal vanishing-ideal result, the
   holomorphic-germ UFD and irreducible-implies-prime give finite unique
   irreducible components. The singular-locus and pure-codimension claims use
   the stated dimension and finite-integral-extension suppliers. The
   hypersurface scope does not silently assert the general analytic-set or
   coherence theorems.
3. For an irreducible plane branch, the connected punctured covering and its
   cyclic monodromy support the pullback `x=t^m`. Local implicit-function
   graphs must be continued across both sides of the slit, including the
   boundary fibres. Bounded roots and removability then produce a convergent
   parametrization; distinct fibres prove injectivity and image exhaustion.
   The order calculation, shear, and fibre count establish the claimed
   normalization and minimal exponent.
4. The examples use explicit equations and computations to illustrate these
   results; they do not substitute for the general proofs.

The complete PDFs recorded in coverage were fetched, and the relevant cited
passages were read in full. The source metadata records exact locators and
SHA-256 prefixes:

- Jiří Lebl, *Tasty Bits of Several Complex Variables*, v4.4 (2026), 248 pp.,
  prefix `729cdb8a00685da5`; Chapter 6 §§6.1–6.7, printed pp. 167–196, and the
  §6.8 scope heading at p. 197. Used passages include Theorem 6.3.3 (p. 178),
  Theorems 6.4.1–6.4.2 (pp. 181–182), Theorems 6.5.9 and 6.6.1 (pp. 187–188),
  Theorem 6.6.5 (p. 191), Proposition 6.7.3 (p. 194), and the Puiseux and
  parametrization results of §6.7 (pp. 195–196).
- Jean-Pierre Demailly, *Complex Analytic and Differential Geometry* (2012),
  455 pp., prefix `d7c7654a7417e832`; Chapter II §§2, 4 and 6, printed pp.
  78–83, 90–99 and 105–107, plus Exercise 11.8 (p. 128). Used passages
  include Theorems II.2.7 and II.2.10 (pp. 81–82), Theorem II.4.19 (p. 95),
  Lemma II.4.21 and Theorems II.4.22–II.4.23 (pp. 96–98), Example II.4.27
  (pp. 98–99), and Theorem II.6.6 (pp. 106–107).

The manifest declares 96 distinct direct dependency IDs across the 29 items:
19 in-run suppliers and 77 external suppliers. The current author audit reports
all 77 external suppliers published. The full-text reading supports the
Weierstrass, discriminant, UFD, vanishing-ideal, finite-projection,
connected-cover and Puiseux routes above. Seven source headings are explicitly
out of scope with reasons in coverage; none is a premise silently used by an
included item.

## Released item repairs

These six current drafts had concrete proof or interface defects. Their public
IDs, titles, claimed results and page order were preserved.

| Item | Defect found in the actual item | Repair made |
| --- | --- | --- |
| `ex-cusp-puiseux-y-two-equals-x-three` | The proof treated every nonunit in `O_{C,0}[y]` as having positive degree. A nonunit may be constant. | In a monic factorization the factor leading coefficients are units. A degree-zero factor would therefore be a unit; any nontrivial factors of the quadratic have positive degree, can be normalized to monic linear factors, and coefficient comparison gives `a²=x³`, impossible by odd order. |
| `ex-cusp-puiseux-y-two-equals-x-five` | Same unit/degree gap as the `x³` cusp. | The same monic-factor argument yields `a²=x⁵`, again impossible by odd order. Parametrization, singularity and minimality claims remain in place. |
| `thm-local-irreducible-decomposition-hypersurface-germ` | The proof reversed the vanishing-ideal divisibility direction. Also, two selected factors do not cover a union with three or more branches. | From `Z(q_i)⊆Z(q_j)`, use that `q_j` vanishes on `Z(q_i)` to get `q_j∈(q_i)` and `q_i∣q_j`. For a multiple-factor subgerm, split one factor from the product of all remaining factors and prove both subgerms proper using reduced vanishing ideals and the distinct irreducible factors. |
| `thm-puiseux-parametrisation-plane-curve-germ` | The earlier algebraic irreducibility inference lacked a proper-subgerm/UFD argument; the root-bound sequence could limit to the boundary of the coefficient domain; the whole graph across the slit was incorrectly treated as lying in the slit complement; `sqrt(epsilon)` was not valid for general `m`; and the sector argument did not settle boundary-ray fibres. | The proof now obtains algebraic irreducibility from the local decomposition, principal vanishing ideal and UFD suppliers; uses a uniform monic root bound on a closed coefficient disc; continues upper/lower local graph halves along the connected slit; takes `delta=epsilon^(1/m)`; and proves distinctness and exhaustion on slit fibres by local IFT root separation. |
| `thm-weierstrass-finite-projection-hypersurface-germ` | The origin-based generic-coordinate result was applied without explicitly centering a general point `p`. The theorem named `Z(W)` as the projection domain although its properness proof used the chosen local product representative. The properness proof needed to justify why the zero set in the closed vertical disc is exactly the inverse image. | The item now applies the linear change to `f̃(z)=f(p+z)`, names `X_W=Z(W)∩(V×D)` in the statement, and identifies the compact inverse image with the closed zero set in `K×closed D`; the no-boundary-zero condition is explicit in the proof. The n=1 case and step references are reconciled. |
| `lem-reduced-prepared-hypersurface-remains-reduced-near-germ` | The stable slice disc for a local factor `g` could extend outside the neighborhood on which `W=g²h` holds. | Choose the product neighborhood and vertical disc wholly inside that factorization neighborhood before applying the stable slice-zero count. |

The four A-page item entries in `pages.json` now summarize these repaired
arguments, including the corrected Puiseux direct suppliers; both B-page cusp
entries summarize the monic-factor correction. The selected derivation claims,
step inputs and citation-use labels in `proof-contracts.json` were synchronized
to the current six proof texts. The current dependency levels remain
consistent: the decomposition is level 7, Puiseux level 8, the cusp examples
level 9, finite projection level 2, and nearby reducedness level 4.

## Connected-cover supplier audit and released repair

I read the current statements and proofs of all 12 direct suppliers declared
by `lem-connected-cover-of-punctured-disc-for-irreducible-plane-curve`.
Together they support the proof route as follows:

- `def-weierstrass-polynomial` gives monicity and `W(0,y)=y^m`; the reduced
  equation convention is supplied by
  `def-reduced-holomorphic-germ-for-hypersurface`.
- `thm-weierstrass-finite-projection-hypersurface-germ` supplies the chosen
  product representative, stable slice count, proper local projection and
  the `m`-sheeted cover away from the discriminant. Its projection domain is
  explicitly `X_W=Z(W)∩(V×D)`.
- `def-discriminant-and-branch-locus-weierstrass-hypersurface` and
  `thm-discriminant-root-formula-and-repeated-root-criterion` identify the
  branch values and repeated-root fibres; together with
  `thm-zero-order-factorization-holomorphic-function`, these show that after
  shrinking the only discriminant zero is the origin.
- `thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity`
  shows that the `m` distinct points in a covering fibre inside `D` account
  for every complex root of the monic degree-`m` slice.
- `thm-holomorphic-implicit-function-theorem` supplies the local holomorphic
  root graphs; `def-covering-map-and-evenly-covered-neighbourhoods` supplies
  connected local sheets over a disc.
- `thm-removable-singularity-characterizations` extends the bounded
  symmetric coefficients; `thm-identity-theorem-in-several-complex-variables`
  extends the product identity from the punctured product to the full
  neighbourhood.
- `lem-prepared-factorizations-and-irreducibility` proves that a positive-
  degree Weierstrass factorization gives a nontrivial germ factorization.
  The repaired proof uses this direction only; it does not infer the reverse
  implication from the supplier's first numbered clause.

The actual gap was in the old Step 2.1: boundedness in the open disc did not
place a subsequential limit back in that disc, so relative closedness on
`V×D` could not be applied. The released repair preserves the full
`D*×C` statement. Step 1.1 first identifies the local `m`-sheeted cover with
all roots over `D*` by combining its `m` points in `D` with the total
degree-`m` root count. Step 2.1 allows sequence terms with `x_n=0` (then
`y_n=0`), places all other tail terms in the closed vertical disc, and applies
polynomial continuity at any subsequential limit to get
`W(0,y∞)=y∞^m=0`. A subsequence bounded away from zero would have a nonzero
limit in the closed disc, contradicting this identity. Thus every sequence of
zeros in the full `D*×C` representative tends to the origin over the base.
The positive-degree factorization contradiction now cites only the valid
direction of the prepared-factorization supplier. IDs, title, claimed result,
dependencies and position are unchanged. The page strategy and this item's
selected proof-contract entry now reflect the full-root and closed-disc
arguments.

### Finite-projection direct consumers

The revised finite-projection theorem names its local representative
`X_W=Z(W)∩(V×D)`. I checked all seven item files that declare it directly:

| Consumer | Current use | Interface result |
| --- | --- | --- |
| `lem-connected-cover-of-punctured-disc-for-irreducible-plane-curve` | `π:Z(W)∩(V×D)→V` | Already names the local domain; the released repair uses that domain and proves it contains every root over the smaller punctured disc. |
| `def-discriminant-and-branch-locus-weierstrass-hypersurface` | Says `π:Z(W)→V` is proper on the product neighbourhood. | Needs `X_W` and `π:X_W→V` so the properness claim uses the theorem's chosen representative. |
| `cex-projection-branch-locus-is-not-singular-locus` | Fact F5 says the theorem makes `π:Z(W)→V` proper and covering. | Needs to restrict this theorem-backed assertion to `X_W`; any global claim about the entire affine example requires its own justification. |
| `ex-regular-hyperplane-hypersurface-germ` | Fact F6 invokes the proper finite projection without naming its local domain. | Clarify the theorem-backed local map as `π:X_W→V`; the example's global hyperplane map is separately the identity projection. |
| `thm-singular-locus-reduced-hypersurface` | Chooses the prepared product and uses its local hypersurface representative. | No domain repair identified. |
| `def-regular-singular-point-analytic-hypersurface` | Explicitly writes `Z(W)∩(V×D)` in the local discussion. | No domain repair identified. |
| `lem-vanishing-ideal-of-a-reduced-hypersurface-germ` | Uses preparation and equality of zero germs on a product neighbourhood, not a global projection claim. | No domain repair identified. |

These remaining consumer edits were not included in the released scope. The
item and its selected manifest and proof-contract entries were the only
content rows changed for this repair. After those proof and carrier edits,
focused `precheck` passed the item (1/1), `rendercheck` passed its YAML and
math rendering (1 file), and a selected-entry consistency check verified all
11 contract derivation claims against the proof, all 12 citation rows, and the
finite-projection quote naming `X_W`. No broader carrier refresh or gate was
run.

No additional concrete invalidation was identified in the other 22 current
items: `def-reduced-holomorphic-germ-for-hypersurface`,
`lem-square-free-reduction-of-holomorphic-germ`,
`lem-reduced-prepared-polynomial-has-nonzero-discriminant`,
`def-discriminant-and-branch-locus-weierstrass-hypersurface`,
`lem-vanishing-ideal-of-a-reduced-hypersurface-germ`,
`def-complex-analytic-hypersurface-germ-and-reduced-equation`,
`def-irreducible-hypersurface-germ`,
`def-regular-singular-point-analytic-hypersurface`,
`lem-irreducible-holomorphic-germ-is-prime`,
`lem-dimension-of-holomorphic-germ-ring`,
`def-local-dimension-hypersurface-germ`,
`thm-hypersurface-germs-have-pure-codimension-one`,
`thm-singular-locus-reduced-hypersurface`,
`def-total-quotient-ring-and-normalisation-of-reduced-plane-curve-germ`,
`lem-total-fractions-split-over-hypersurface-branches`,
`cor-normalisation-plane-curve-germ`,
`ex-regular-hyperplane-hypersurface-germ`,
`ex-ordinary-node-plane-curve-germ`,
`ex-crossing-coordinate-axes-hypersurface`,
`ex-nonreduced-equation-same-hypersurface-germ`,
`cex-projection-branch-locus-is-not-singular-locus`, and
`rem-general-analytic-sets-need-more-than-hypersurface-arguments`.
This is an audit finding, not an acceptance or a closure decision.

## Cross-scope owner observations

- The earlier batch-19 Hochschild repair report records 13 group-d reading-list
  declines backed by full-text evidence for BPW §§3.8.4–3.8.6, Weibel Chapter
  9 §§9.1 and 9.5, Weibel Chapter 5 §§5.5–5.6, and Khovanov pp. 5–7. I reviewed
  that report's evidence and its item-by-item scope descriptions; I did not
  re-fetch those sources or edit the shared group-d decision file. I recommend
  upholding the 13 declines: the rows concern twisted or q-deformed cyclicity,
  group-ring and tensor-algebra applications, truncated-polynomial homology,
  general Morita properties, or braid/Rouquier/closure applications beyond
  the selected untwisted bounded-complex scope. This is a recommendation for
  the two shared owners, not a disposition.
- `def-modular-specht-form-and-radical-quotient` is a live draft in batch 23,
  not a published item. Its double-quoted YAML title contains the invalid
  escape `\c` (and `\p`), which is a real parse issue. No published-ledger
  defect is established by that fact. The item was not edited because its
  author is live.

## Focused checks and boundaries

After the released edits, focused `precheck` passed all six items directly
(6/6), and `rendercheck` passed all six (balanced KaTeX, no multiline display
blocks, renderer-valid YAML). A read-only consistency check found 29 unique
manifest items, 29 unique matching coverage IDs, 29 matching contract keys,
all 29 files present, and no in-run dependency-level mismatch. The six
selected proof-contract derivations and citation-use labels match the current
proof steps.

No whole-run gate, engine transition, ordinary receipt, shared scope decision,
plan, ledger or run-state edit was made. No commit was created. The current
Step-3 decisions remain for the root owner to integrate and evaluate. The
item-level mathematical finding above remains report-only until separately
released.

## Finite-projection consumer notation repair

The current finite-projection supplier's statement defines the projection on
the chosen local representative
`X_W=Z(W)∩(V×D)`. I independently checked the declared dependencies of both
authorized consumers: all six dependencies of
`def-discriminant-and-branch-locus-weierstrass-hypersurface` and all eight of
`cex-projection-branch-locus-is-not-singular-locus` resolve to item files and
are linked in the respective bodies. Their dependency lists and mathematical
claims were preserved.

The exact consumer interfaces clarified are:

- `def-discriminant-and-branch-locus-weierstrass-hypersurface`: the fixed
  projection and its branch set are now defined for
  `π:X_W→V`, where `X_W=Z(W)∩(V×D)`. The zero-set equality is stated on that
  product representative.
- `cex-projection-branch-locus-is-not-singular-locus`, Fact F5: the proper
  map and covering assertion used to identify the branch set now explicitly
  apply to the restriction `π|_{X_W}:X_W→V` of the given coordinate map, for
  the same chosen product representative. The counterexample's global curve
  and its smoothness claim are unchanged.

No other consumer or carrier was changed in this release. The previously
reported finite-projection consumers outside these two files remain as listed
above. Current SHA-256 values bind the two edited item files to the reviewed
supplier version:

| File | SHA-256 |
| --- | --- |
| `items/def-discriminant-and-branch-locus-weierstrass-hypersurface.md` | `9c8ee93fbe955ebea0234e011e76c6ddaf3dc8b04216e129521b0c8f6c769e7a` |
| `items/cex-projection-branch-locus-is-not-singular-locus.md` | `cbbdd94938ba23014b7ac52b8a6bd3a28685b5d16fcc1a98077e3f0cb4f4709c` |
| `items/thm-weierstrass-finite-projection-hypersurface-germ.md` (reviewed supplier) | `a21ea999d499d2fea5e7fbf7b9b64761d074601c8b9f6f180cf4dc39a0789a50` |

This is a notation-only consumer repair; per owner direction, the prior focused
format/render evidence was reused and no precheck, rendercheck, shared manifest
or contract update, receipt, or gate was run. This addendum supersedes the
earlier report sentence that the connected-cover finding remained report-only;
that item has since been repaired under a separate release above.


## Batch-30 current ordinary audit closure

The current 29-item audit is closed at the item-review level. I reused the
completed actual-item and direct-supplier audit recorded above, verified the
newly changed local/global projection interfaces and their selected contract
quotes, and checked the current item hashes and dependencies against the
receipts. The current ordinary nonowner receipts cover all 29 manifest items:
19 accept and 10 repaired, each with owner=false and confidence 1. The 10
repaired decisions correspond to the seven proof repairs and three
local-projection interface repairs documented above. No item IDs, claims or
dependencies were removed. No owner item or escalation record was present, so
no reopen was needed.

For the three selected carrier rows, the page strategies now state the local
representative explicitly; the counterexample and regular-hyperplane contract
quotes match the current definition and finite-projection statements, and the
regular-hyperplane Step 2.2 derivation matches its local/global distinction.
The rows outside that authorization were not changed. Existing focused format
and render evidence was reused for these notation-only edits; no gates were run.

Current batch carrier hashes:

- frontier-37-owner-30-batch-30.pages.json: 620f5a1803aff00a594a004d95e36bebd7ab06ed7899cbc1aa241c1823046d36
- frontier-37-owner-30-batch-30.proof-contracts.json: c1000fe31de7b409d0ed4ed2cf4670d0952d87aa326d4b2c9327b99c13cdf4a0

The table gives each item decision and the SHA-256 of the exact source content
bound by its current receipt.

| Item | Decision | Current source SHA-256 |
| --- | --- | --- |
| def-reduced-holomorphic-germ-for-hypersurface | accept | a8bfe78c15e0f10748ac8244c213219d81cbdb7aff92956f2431c35931949d09 |
| lem-square-free-reduction-of-holomorphic-germ | accept | 7b9e4d154fd9f1ce32941ae22c3ff9c9f551c8ca4524a8a9196164cede3e10b2 |
| lem-reduced-prepared-polynomial-has-nonzero-discriminant | accept | 0ca2265fd03c4b7e2799c2b5d2e7da3b1e22bbc0b67f46d577849e84e0cd0565 |
| thm-weierstrass-finite-projection-hypersurface-germ | repaired | a21ea999d499d2fea5e7fbf7b9b64761d074601c8b9f6f180cf4dc39a0789a50 |
| def-discriminant-and-branch-locus-weierstrass-hypersurface | repaired | 9c8ee93fbe955ebea0234e011e76c6ddaf3dc8b04216e129521b0c8f6c769e7a |
| lem-reduced-prepared-hypersurface-remains-reduced-near-germ | repaired | 1946092a6c4d50a6181500340fb1a8d5f20468e280d9ff769d2fc6f40f665d6c |
| lem-vanishing-ideal-of-a-reduced-hypersurface-germ | accept | 186ba8c33f840a8ab84da4d5cc33a93ee97cf466f22fb6fbb04dd596c4325938 |
| def-complex-analytic-hypersurface-germ-and-reduced-equation | accept | 5f121951ff27798db4bccb6fbe3befb98e87a82c78d853ddc0e009ee7bc5d91b |
| def-irreducible-hypersurface-germ | accept | 94d785be1b0bf06bcda955e44662c44125b71b65843e9fd1dffcd60133d4fd8f |
| def-regular-singular-point-analytic-hypersurface | accept | 8741abfef448d257b3ecd9efb37c63187b12598fe59cc53d3436ceb3e56be5c1 |
| lem-irreducible-holomorphic-germ-is-prime | accept | c6f49dafb502188755eda71f960cecf3a932079e5827c7d6dbd6fc7ad77ea477 |
| thm-local-irreducible-decomposition-hypersurface-germ | repaired | ea60f73884325a25d26881e2bc2c4a2571c1be8707b7a65c672a3d2016b20e6a |
| lem-dimension-of-holomorphic-germ-ring | accept | d53297ce55370322c3ae8b2bdf1a8d2f6473087d13ea13f37c246f4d4c9cbada |
| def-local-dimension-hypersurface-germ | accept | 74402586d9fd9af6ce0d6f954b25d0886afedd9a89860de335e5cec350b06a46 |
| thm-hypersurface-germs-have-pure-codimension-one | accept | 8d219e219276d065609228367ad19a1a50bc921eab19c79ed0aa40bc5e7e3620 |
| thm-singular-locus-reduced-hypersurface | accept | 5c816ef116c483426f2ad0f3973910381b5004b7cdc729fedbbeef2d3a8d5ac3 |
| lem-connected-cover-of-punctured-disc-for-irreducible-plane-curve | repaired | 55211eb9fc553adc285339e408aab1706085f0a6bd2c2d4c37c7b2726c8997e5 |
| thm-puiseux-parametrisation-plane-curve-germ | repaired | 07d53ff3e36543fa710b2bea97bb6af02d19682453442efa2685bd8a9c5254e4 |
| def-total-quotient-ring-and-normalisation-of-reduced-plane-curve-germ | accept | 6df6aabde1a7049a8fe970899fdc32b7251991ca8af6fa0346574987815a16ad |
| lem-total-fractions-split-over-hypersurface-branches | accept | f1bf8ea15e62781eb5ba31def9fe2f70124de95ac5cc955bf8761e6a0125e0ff |
| cor-normalisation-plane-curve-germ | accept | 179aedd0bb4bc2c96c1d829bc151aaef275cf2ce4ee4358bdac5b44ec2816630 |
| ex-regular-hyperplane-hypersurface-germ | repaired | 9ff505c3f9b90c0281abc596c5ae7685d9523f0a24a28ffe211987ec5974b6d6 |
| ex-ordinary-node-plane-curve-germ | accept | 716b8634778b47dda7e4996be623d0963e4e2110a38b5dea5d20d966136ca06d |
| ex-cusp-puiseux-y-two-equals-x-three | repaired | 5975a97c16570fd920f4682085986fa284cc00358340967f854ffc883f143b8f |
| ex-crossing-coordinate-axes-hypersurface | accept | e87a1bc4172a2a69ec28d2390d5bb17c334e775789e2e74f819cfea8b86ac6d4 |
| ex-nonreduced-equation-same-hypersurface-germ | accept | efb96509ad423507b87b6434c076386a54218f4ce783984865f9660b0fd7816c |
| cex-projection-branch-locus-is-not-singular-locus | repaired | cbbdd94938ba23014b7ac52b8a6bd3a28685b5d16fcc1a98077e3f0cb4f4709c |
| ex-cusp-puiseux-y-two-equals-x-five | repaired | f2ebad83648de7998e0383cc96588f5c7517139e9bc533541244031f56cdb96b |
| rem-general-analytic-sets-need-more-than-hypersurface-arguments | accept | 42de84ee7cf07829e89b565d1b7fd1dc86aceb5563cb3532d0e22a2022bc89a9 |

This addendum supersedes the earlier post-normalization 0/29 status in the
report. Root retains shared integration and gate ownership; no gate, receipt
refresh outside this batch, commit or publication change was made.
