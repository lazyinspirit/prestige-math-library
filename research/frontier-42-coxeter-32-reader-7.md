# Reader 7 — frontier-42-coxeter-32, batch 7

Independent Step 5a review. Scope: the two assigned pages and their eight draft items; only assigned items and A-page prose may be repaired. No judgment or certification is issued here.

## Opened inventory and review order

Read `CLAUDE.md`, `README.md`, `briefs/reader.md`, `SCHEMA.md`, and the exact batch-7 page manifest. Opened both pages in full:

- `library/coxeter-groups/canonical-roots-signs-and-faithful-reflections.md` (A).
- `library/coxeter-groups/canonical-roots-signs-and-faithful-reflections-examples.md` (B; read-only prose).

Before reviewing the assigned proofs, opened the real-form/representation suppliers and the combinatorial exchange/parabolic suppliers, including their arguments. Definitions were first used as notation; newly discovered supplier targets were opened before assessing their sufficiency. Assigned proof review followed the chain:

1. `lem-cg-rank-two-prefix-and-chamber-length-induction`.
2. `thm-cg-root-sign-and-simple-reflection-positivity`.
3. `thm-cg-root-length-criterion-and-faithfulness`.
4. `def-cg-geometric-inversion-set`.
5. `thm-cg-root-inversion-formulas-and-strong-exchange`.
6. `ex-cg-root-inversions-and-chambers-in-i2-5-a2-and-i2-infinity`.
7. `ex-cg-indefinite-form-admits-faithful-reflection-representation`.
8. `ex-cg-mixed-sign-vector-is-not-a-root`.

Additional opened item bodies (all under `items/`):

- `def-hh-coxeter-matrix-word-group-and-length`, `def-hh-geometric-coxeter-representation-and-roots`, `lem-hh-dihedral-root-recurrence-and-root-sign`, `thm-hh-coxeter-exchange-deletion-and-faithfulness`, `thm-hh-matsumoto-reduced-word-theorem`, `thm-hh-parabolic-minimal-representatives-and-length-additivity`.
- `def-cg-real-coxeter-form-and-reflection`, `lem-cg-reflection-form-invariance-and-rank-two-orders`, `def-cg-canonical-reflection-homomorphism`, `lem-cg-reflection-representation-descends-and-root-norms`, `def-cg-dual-chambers-and-reflection-hyperplanes`, `lem-cg-dual-action-and-chamber-faces-exist`.
- `def-group`, `def-natural-numbers`, `thm-induction-principle`, `def-group-homomorphism`, `def-generated-subgroup`, `def-coset`, `def-linear-combination-and-span`, `def-linear-basis`, `def-algebraic-dual-and-linear-functional`, `def-definiteness-inertia-and-signature-data-over-the-reals`, `def-free-product-of-a-family-of-groups`, `def-eigenvalue-eigenvector-eigenspace-and-spectrum`.
- `def-pi-via-first-positive-cosine-zero`, `thm-sine-and-cosine-addition-formulas`, `cor-trigonometric-parity-and-pythagorean-identity`, `thm-quarter-turn-values-and-shift-formulas`, `thm-sine-cosine-signs-monotonicity-and-ranges`, `thm-of-square-roots`.

Opened the batch-7 proof contracts by citation, derivation, and boundary clause. Checked every existing quoted source section against the current target bytes; all original citation quotations were present. The exact batch-7 cross-batch dependency records and batch-2 ownership manifest were inspected as routing evidence, not as mathematical verdicts.

## Authoritative source evidence

- [Davis, *The Geometry and Topology of Coxeter Groups*](https://people.math.osu.edu/davis.12/davisbook.pdf), §4.8, printed pp. 55–56: Property (P), Remark 4.8.1, Lemma 4.8.3, and both complete induction arguments; Appendix D.1, printed pp. 439–442: the dual action, Theorem D.1.1, Corollary D.1.2, Lemma D.1.5 with both complete rank-two cases, and the proof of D.1.1. First read the cached extracted sections, then downloaded the institutional PDF and checked the relevant pages with PyMuPDF. PDF SHA-256: `ccefbb950fdcfce98e178e995f674e199c00a1970cdeaa817e2b6f520e7a3b05`. Browser fetch timed out; direct download succeeded. Davis uses both P_n and Q_n for his first conditional and a different Q-step; the local stronger first conditional is justified by deriving P_n from Q_n when rank is at least two, and its parabolic Q-step is independently valid.
- [Björner–Brenti, *Combinatorics of Coxeter Groups*](https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf), §4.4, printed pp. 101–105: read the full relevant definition, sign/length and unit-norm formulas (4.24)–(4.28), Lemma 4.4.3 and its proof, Proposition 4.4.4 and its complete induction proof, the conjugation calculation (4.29)–(4.32), Proposition 4.4.5 and its argument, and Proposition 4.4.6 and its proof. These fix exactly the convention N(w) = positive roots sent negative by w. Figure descriptions were read; figures and exercises were not used to supply missing proofs.

## Repairs and evidence

1. `lem-cg-rank-two-prefix-and-chamber-length-induction`, Proof 5.1: replaced the false equality `ell(stu) = ell(sv)-1` by `ell(stu) = ell(v)-1`, where v=tu and part (1) supplies ell(sv)=ell(v)-1. Explained the bound ell(tu)≤1+ell(u) by prepending t to a shortest word. The remaining chain gives exactly ell(sw)≤ell(w)-1; parity/triangle bounds supply equality. Davis §4.8, printed p. 56, has this precise stu/tu length calculation. Also repaired the malformed bold closing delimiters in headings 5.1 and 6.1. No statement changed.
2. `thm-cg-root-sign-and-simple-reflection-positivity`, Facts [F4]: replaced the ill-typed assertion that f_s is nonnegative “on C” (C is a subset of V*, whereas f_s has domain V) by f(e_s)≥0 for every f∈C. This is exactly the chamber definition. The sign criterion and root-sign proof remain unchanged.
3. `thm-cg-root-inversion-formulas-and-strong-exchange`, Proof 2.1: corrected the order/direction of the composition establishing Φ_+→T. The map from positive roots to their ± classes is followed by the class-to-reflection bijection, not its inverse. The unit-norm and negative-eigenspace argument already proves injectivity; no root/reflection claim changed. Björner–Brenti Proposition 4.4.5, printed p. 104, confirms the positive-root-to-reflection direction.
4. `ex-cg-root-inversions-and-chambers-in-i2-5-a2-and-i2-infinity`, Facts [F5]: qualified (st)^m=1 by m<∞, so no infinite exponent or relator is asserted for I_2(∞). Independently traced the displayed A_2/I_2(5) inversion sets through the right-step recursion, the u_5 complement formula, and the infinite-dihedral formulas through their induction. All displayed inversion tables, including N(u_7), were correct and preserved. Checked the golden-ratio constant factorization, chamber cyclic order, negative-side ranges, and open/closed distinctions.
5. `ex-cg-indefinite-form-admits-faithful-reflection-representation`, Example (i), Facts [F4], Proof 1.1: made the conventions explicit. The cited definition calls p−q the signature; the form has inertia (2,1,0), scalar signature 1, and positive/negative index pair (2,1), conventionally also called signature. This preserves the companion page's pair terminology. Supplied the basis p=(1,−1,0), q=(1,1,−2), a=(1,1,1), whose determinant is 6; direct substitution gives the diagonal form diag(4,12,−3). Thus inertia is justified locally without silently importing spectral diagonalization. Facts [F4] now give definitions rather than repeating the desired computation. Proof 1.3 compares values at t to justify the nontrivial root image. Added Proof 1.5 proving the asserted free-product universal property directly from the presented-group universal property, and cited the already opened `def-free-product-of-a-family-of-groups`; also added the eigenvector definition to make its nonzero requirement explicit. All root computations and both faithfulness conclusions are preserved.
6. `ex-cg-mixed-sign-vector-is-not-a-root`, Facts [F6]: the original citation to the definition of linear combinations did not establish uniqueness of coordinates. Replaced it with the actual canonical-basis supplier, `lem-cg-reflection-form-invariance-and-rank-two-orders` (1), and supplied the immediate coordinate argument by evaluation at s and t. The vector, norms, sign conclusion and comparison roots are unchanged.

Updated the six affected contracts in `research/frontier-42-coxeter-32-batch-7.proof-contracts.json`: proof paragraphs/inputs, exact relevant source quotations, the corrected F6 supplier and the new free-product/eigenvector uses. Corrected three independent boundary-record defects: zero is in ker J but is not an eigenvector; the mixed-sign example covers all finite m≥3 as well as infinity, not just two isolated parameter values; and the multiplicative group W has an identity, not a “zero.” The last correction affects the inversion-definition contract only; that item file needed no change. No changed item had a `verification.judge` record to remove, and none was added. No page prose, manifest, published item, or other batch was edited.

## Uneditable historical findings and concurrent correction

Both subjects are draft suppliers in exact current-run batch 2. Assigned consumer `lem-cg-rank-two-prefix-and-chamber-length-induction` reaches the parabolic theorem directly and Matsumoto through that theorem's dependencies. They were not in this reader's edit scope.

- `thm-hh-matsumoto-reduced-word-theorem`, Statement (3), sentence asserting that each outside generator acts nontrivially on E/P, and Proof 1.1's corresponding sentence: **ill-formed, fatal in the observed statement.** A quotient endomorphism needs preservation of P=span(α_s,α_t). In the allowed all-infinite three-generator system, sigma_r(α_s)=α_s+2α_r is outside P, so sigma_r does not preserve P. The intended exclusion r∉⟨s,t⟩ follows instead from sigma_r(α_r)−α_r=−2α_r∉P, whereas every dihedral element satisfies g(v)−v∈P. That congruence argument closes the claim without any induced quotient action by the outside generator. During this review, another writer changed the Statement and Proof to exactly that argument; the corrected clauses were opened and checked. Current raw source SHA-256 when checked: `bd00bea1205a52a1b7f4a727542c9ec84cc59f13f0fc439fa70cd273bb7cb6f0`.
- `thm-hh-parabolic-minimal-representatives-and-length-additivity`, Proof 3.1, sentence about inversion: **ill-formed, nonfatal proof wording omission.** The observed wording was “interchanging left and left cosets.” The local coset definition is gH left / Hg right, and inversion sends W_Ja to a^{-1}W_J, so the needed wording is right and left. The exact displayed families and theorem conclusion already identify the intended argument, making this immediately recoverable. Another writer corrected the sentence during this review; the corrected clause was opened and checked. Current raw source SHA-256 when checked: `80c0715d9c4fcea40b74d5d0a639e59f461605ce30f8f1b356671486135bae60`.

The returned findings retain these historical observations as directed. Their `observed_source` is null: the original observed defective raw bytes were not retained in an immutable snapshot that this reader can bind. Later corrected-current hashes are not claimed to identify the old defect. The recorded initial fingerprints alone are not proof that the whole observed sources matched a producer pre-reader snapshot. No unresolved defect in these corrected clauses remains; Step 5b can reconcile the historical findings with producer repair evidence.

## Page verdicts

| Page | Reader verdict |
| --- | --- |
| `canonical-roots-signs-and-faithful-reflections` (A) | Sound within the reviewed scope after the three local theory-item repairs. The rank-two alternative, simultaneous induction, root sign argument, faithfulness, inversion identities, dictionary, and strong-exchange argument are justified by the opened suppliers and elementary derivations. No A-page prose repair was needed. |
| `canonical-roots-signs-and-faithful-reflections-examples` (B) | Sound within the reviewed scope after the three example repairs. Its signature pair is now explicitly distinguished from the scalar convention in the example. The explicit roots, inversions, chamber images, indefinite/degenerate form calculations and mixed-sign non-root witness check out. B-page prose remained read-only. |

## Validation, limitations, and handoff

- For each of the six changed item paths, ran `node tools/tsx-run.mjs tools/reflow.mts items/<id>.md` followed by `node tools/tsx-run.mjs tools/precheck.mts items/<id>.md`. All twelve commands exited 0; reflow reported unchanged, and all six prechecks passed.
- After every item edit and formatter, ran once: `node tools/proof-layout.mjs items/lem-cg-rank-two-prefix-and-chamber-length-induction.md items/thm-cg-root-sign-and-simple-reflection-positivity.md items/thm-cg-root-inversion-formulas-and-strong-exchange.md items/ex-cg-root-inversions-and-chambers-in-i2-5-a2-and-i2-infinity.md items/ex-cg-indefinite-form-admits-faithful-reflection-representation.md items/ex-cg-mixed-sign-vector-is-not-a-root.md`. Exit 0: **6 items, 55 steps, 0 defects**.
- Checked that all repaired contract derivation claims match their current item paragraphs after reflow. These are local checks, not independent judgments or certification.
- Coverage comprises both assigned pages, all eight assigned item bodies, the listed relevant supplier bodies/arguments and the stated source sections. This is not a full audit of the recursively reachable foundational corpus or unrelated supplier clauses. Newly discovered targets were opened before their use was accepted; some supplier definitions were initially read for notation before their own antecedents. Source quotations and exact relevant passages were used for follow-up checks instead of rereading whole files. No rendered reader evidence bundle was located; current carriers were the mathematical evidence. No exercises or unseen figures were used as proofs.
- No present mathematical blocker remains in the reviewed assigned claims. The outstanding handoff duty is reconciliation of the two historical supplier observations with their concurrent producer corrections. The absence of immutable observed-defect bytes is explicitly reported in the JSON coverage note.
