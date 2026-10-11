# Reader 12 — batch 12

Run: `frontier-44-special-representation-examples-28-six-step`.

## Scope and opened inventory

The current batch manifest assigns the following draft pages, both opened in
full:

- `library/special-topics-in-representation-theory/ordinary-hecke-specht-polytabloids-and-signed-murphy-comparison.md` (A).
- `library/special-topics-in-representation-theory/ordinary-hecke-specht-polytabloids-and-signed-murphy-comparison-examples.md` (B).

The batch notes and cross-batch dependency file were opened but describe the
historical Soergel assignment. They do not establish scope or correctness for
this dispatch. The current manifest and current carriers govern this review.
The engine status command identified the current six-step run as running in
Step 3a; no publication or transition was attempted.

All 14 assigned carriers were opened, with mathematical suppliers read before
their consumers:

1. `def-dj-bridge-row-column-permutation-modules-and-polytabloids`.
2. `lem-dj-bridge-row-permutation-module-standard-action`.
3. `lem-dj-bridge-permutation-form-invariance-and-restriction`.
4. `lem-dj-bridge-sign-automorphism-and-star-dual`.
5. `lem-dj-bridge-parabolic-double-coset-annihilation`.
6. `lem-dj-bridge-murphy-cellular-basis-and-cell-form`.
7. `lem-dj-bridge-integral-murphy-and-polytabloid-straightening`.
8. `lem-dj-bridge-theta-transport-of-the-cellular-structure`.
9. `thm-dj-bridge-murphy-cell-is-the-same-shape-specht-dual`.
10. `thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell`.
11. `cor-dj-bridge-specialization-and-composition-multiplicity-dictionary`.
12. `cex-dj-bridge-untwisted-conjugation-changes-the-module`.
13. `ex-dj-bridge-row-and-column-shapes-at-rank-three`.
14. `ex-dj-bridge-singular-two-tableau-shape`.

The direct published suppliers opened were:
`def-generic-type-a-hecke-algebra`,
`thm-standard-basis-of-the-generic-type-a-hecke-algebra`,
`def-partition-young-diagram-and-conjugate-partition`,
`def-young-tableau-standard-tableau-and-shape`,
`def-weyl-group-and-length-for-finite-gl-n`,
`lem-hom-from-a-finite-free-module`,
`def-dominance-order-on-partitions`,
`lem-conjugation-reverses-dominance`,
`cor-sum-of-squares-of-standard-tableau-numbers`,
`thm-jacobson-radical-is-nilpotent-and-the-quotient-is-semisimple`,
`def-integral-specht-lattice-and-base-change`,
`lem-conjugate-specht-sign-duality-over-fields`, and
`thm-the-symmetric-group-has-the-coxeter-presentation`.
Their used interfaces and arguments were checked; unrelated applications in
those suppliers were not recursively audited.

Additional targeted supplier readings: full proofs of
`lem-garnir-straightening-of-polytabloids`,
`lem-leading-tabloid-coefficient-of-a-standard-polytabloid`, and
`thm-james-submodule-theorem-over-an-arbitrary-field`; the Statement of
`thm-robinson-schensted-correspondence`; and the Definition sections of
`def-integral-tabloid-bilinear-form-and-specht-gram-matrix` and
`def-young-subgroup-tabloid-and-permutation-module`.
The outside consumer `ex-q-schaper-for-shape-three-two-at-e-two` was opened
for an interface-impact check, not a full audit of its other prerequisites.

The batch proof contracts were opened. Large terminal outputs were truncated;
missing mathematical sections were subsequently fetched in bounded chunks.
The later compact contract inventory was also inspected. No rendered Step-3a
bundle for this batch was found; current Markdown and contracts supplied the
evidence. No prior verdict was used as mathematical acceptance.

## Repairs and evidence

- **Definition:** word reversal fixes the quadratic and braid relators but
  negates a distant commutator; corrected the claim that every relator is a
  palindrome. Clarified the source's right-function convention and the empty
  basis notation `T_id=1`. The modules, forms and tableau action are unchanged.
- **Row-module lemma, Proof 1.4:** clarified that star sends `T_w` to
  `T_(w inverse)`; it does not take the algebraic inverse of `T_w`.
- **Permutation-form lemma, Proof 2.1:** the decreasing-length diagonal
  pairing is `(q-1)q^ell(v)`, not zero. Recomputed all four orbit pairings.
  **Proof 4.1:** right exactness does not preserve the injection of a right
  ideal under arbitrary base change. Replaced that inference with the exact
  pullback identity of forms along the natural tensor map; its image is the
  specialized cyclic ideal, and the later split basis establishes injectivity.
- **Sign lemma, Proof 2.2 and 3.1:** corrected the references to the row
  eigenvector identity and to the common eigenspace (2.2, not 2.1).
- **Double-coset lemma, Proof 1.3:** the count of earlier requests for a target
  block used the position within the entire source block rather than the
  number of requests for that target. Corrected the count and proved uniqueness
  of the sorted representative. **Proof 2.1:** the equality
  `T_(wdv)=T_w T_d T_v` is false without additive length (already repeated
  simple generators violate it). Replaced it by a terminating left/right
  descent reduction. Each step uses an additive one-generator product and
  multiplies the sandwiched vector by the unit `q` or `-1`. The exact zero
  product in 3.1 then proves vanishing at every specialization.
- **Murphy cellular lemma, Proof 2.1:** proved that all intermediate tableaux
  are row standard by stripping descents backwards from the endpoint; the old
  triangle argument used distinguished permutations before establishing that
  they existed. **Proof 2.2:** corrected the direction of block reordering and
  its two distinct monotonicity conditions. **New Proof 4.2:** supplied the
  missing length-additive Garnir reduction using linear extensions of the row
  order plus the offending lower-before-upper constraint. Adjacent sorting
  preserves that order and decreases inversion length. **Proof 5.1:** made
  preservation of the first index explicit. **Proof 2.3:** supplied the intersection-subgroup transversals needed for the belt-product bijections. **Proof 7.1:** removed the false
  assertion that arbitrary multiplication only raises the same-shape tableau
  indices; shape preservation and the first-index cell law suffice. **Proof 8.1:** explicitly identified the dominance spans as sums of the corresponding generated two-sided ideals. Also
  exposed the already proved trace, block-reordering and Garnir identities in
  the Statement, so downstream fact citations have explicit supplier interfaces.
- **Integral straightening lemma, Proof 1.1:** arbitrary entries in
  incomparable cells cannot always be swapped while preserving standardness;
  restricted the argument to consecutive labels, which is precisely what the
  subsequent chain uses. **Proof 1.3:** proved the omitted length additivity
  of `w_lambda u` through the monotonicity of its inverse on column blocks.
  **Statement 3:** defined the full coefficient array, including the diagonal
  and zero entries, needed by the Gram sum. **Proof 1.4:** removed a false
  equality between a sandwiched space and its right-ideal extension; both vanish
  by the same proved identity. **Proof 5.1:** supplied finite straightening by
  row coordinates and the inverse unit-triangular minor, replacing an unproved
  additional signed-belt induction. The basis, splitting and Garnir identities
  remain intact.
- **Theta transport, Statement 1 and Proof 2.1:** the proposed nonmembership
  fails at `q=-1`, where `q-T_1=-(1+T_1)`. Qualified the witness to the generic
  Laurent ring, proved the exact equality exception, and made the same caveat
  in the assigned A-page prose. The transported cellular structure and form
  remain valid over every ring and unit parameter.
- **Same-shape dual theorem, Facts F1:** supplied the exact locator of the
  local trace proof, keeping its essential Poincare-polynomial scaling.
- **Main comparison theorem, Proof 2.1:** supplied the elementary reason a
  quotient of a finite-dimensional semisimple algebra has semisimple regular
  module and cannot have a nonzero square-zero ideal. **Proof 2.2:** derived
  the generator cell-form value directly from the row eigenvector identity
  and the defining cell product. Removed references to an "approved" map as
  mathematical authority. The normalization remains `Phi(z)=m_0` and the
  exact form multiplier remains `q^(N-L)`.
- **Citation metadata on assigned carriers:** corrected the page offsets in
  the fetched Mathas edition, whose printed p. 18 is PDF p. 24; distinguished
  `T_(d(s) inverse)` from the inverse of the Hecke element in Ryom-Hansen;
  identified its equation (6) as a cell action requiring straightening;
  corrected the counterexample's description of Mathas's Warning; and removed
  the assertion that the KLR-generator sign formula (3.14) itself states the
  ordinary Hecke-generator formula. The ordinary formula is independently
  proved locally and is also stated in Kleshchev's Section 11.5.

Only assigned item carriers, this report, the batch proof contracts, and
assigned A-page prose are edited. B-page prose, other batches, published
content, the manifest and the shared plan remain outside the write scope.
The contract updates preserve their other evidence while replacing affected
derivations and quotations, correcting zero-ring boundary assertions and the
theta exception. No judge or acceptance stamp is added.

## Source readings

Authoritative full texts were opened through the web tool, with the relevant
complete arguments read in bounded sections:

- [Mathas manuscript](https://web.math.ucsb.edu/~bigelow/books/mathas.pdf):
  Chapter 3, Lemma 3.2, Proposition 3.3, Corollary 3.4; Lemmas 3.9,
  3.12–3.14 and Corollary 3.15; the dominance-ideal argument and Theorem
  3.18; the Warning and cell-form definition. Printed pp. 18–26 correspond
  to PDF pp. 24–32. The local Garnir reduction supplies the prerequisite of
  Lemma 3.13 explicitly rather than importing its existence assertion.
- [Fayers](https://webspace.maths.qmul.ac.uk/m.fayers/papers/garnirhoms.pdf):
  Section 2.1, printed p. 2/PDF p. 3, including the right-function convention
  and the definitions of the row and signed sums and polytabloid ideal.
- [Ryom-Hansen v5](https://arxiv.org/pdf/0904.4243): Section 2,
  equations (5)–(9), PDF pp. 5–6, including the cellular action, form and
  Garnir qualifications.
- [Kleshchev survey](https://arxiv.org/pdf/0909.4844): Section 5.3,
  Remark 5.5, PDF p. 24, and the ordinary sign automorphism in Section
  11.5, PDF p. 54.
- [Kleshchev–Mathas–Ram](https://www.maths.usyd.edu.au/u/pubs/publist/preprints/2011/kleshchev-8.pdf):
  Section 3.3, equation (3.14) and its surrounding domain/codomain and
  cyclotomic-quotient discussion, PDF pp. 8–9. This is supporting analogy.

No claim is made to have read all pages of these books or articles. The
historically unavailable Dipper–James article and the James scan were not
read in this dispatch; neither substitutes for the local proofs checked here.

## Consumer checks and page verdicts

The assigned downstream proofs were checked after their suppliers. The
perfect cross-pairing retains its scaled universal trace argument and cancels
the Poincare polynomial only in the integral domain before specialization.
The signed comparison retains its integral map before the generic form
uniqueness argument. The specialization corollary uses the actual tabloid
basis map and the conditional Schur hypothesis. Both rank-one forms and all
rank-two actions, Gram entries, determinants and specializations were checked
by finite algebra. The nonzero/zero form quotient distinction is preserved.

The only qualified false witness in a public Statement is the theta ideal
example; its sole direct item consumer is the assigned main comparison
theorem, and its indirect assigned consumers are the corollary and the three
B items, all checked. The coefficient-array clarification changes no basis
or form; the outside q-Schaper consumer uses the unchanged row symmetrizers,
straightening and integral basis. The Definition's relator/dictionary fixes
leave the original algebra, module and form interfaces unchanged. No claim
of a full audit of the broader downstream Hecke/KLR frontier is made.

- **A page:** local review supports the repaired comparison mathematics and
  summary, subject to the independent subsequent workflow reviews; no stamp.
- **B page:** the three mathematical examples and summary are consistent
  with the repaired suppliers; no prose edit or stamp.

## Validation and remaining limitations

Final scoped validation:

- Reflow was run on every changed item, with exit 0; the final additional
  cellular-lemma edit was reflowed and prechecked again before handoff.
- Precheck: the definition has no phase proof (0 checked, 0 failing); each of
  the 13 proof-bearing assigned items passes (1 checked, 0 failing each).
- The contract regenerator updated 13 proof-bearing entries and correctly
  skipped the definition. Boundary corrections were made separately.
  An initial strict contract check rejected four unanchored replacement
  boundary descriptions; exact Statement/Proof anchors were added.
  Final `node tools/proof-contract.mjs
  research/frontier-44-special-representation-examples-28-six-step-batch-12.proof-contracts.json
  --strict`: **14/14 checked, 0 errors, 0 warnings**.
- `rendercheck` on the 14 assigned items and both pages: **16 files, no
  defects**, including real KaTeX and renderer YAML parsing. The final
  cellular-lemma edit also passed its one-file renderer check.
- After all item edits and reflow, one batched `node tools/proof-layout.mjs`
  command named all 14 changed item paths: **14 items, 90 steps, 0 defects**.
- A proposed SymPy check could not run because SymPy is absent. A replacement
  exact calculation using rational-coefficient Laurent-polynomial arithmetic
  verified both row quadratic relations, the row braid relation, both
  embedding action identities, the DJ Gram matrix, both comparison
  intertwining identities and the form identity. Both Gram determinants are
  `q(q^2+q+1)` and the cross-pairing determinant is `-q^2`, exactly.

The assigned carriers were already untracked on entry, so an ordinary
HEAD-relative `git diff` does not display this reader's edits; the workflow's
pre-reader byte snapshot is the correct comparison baseline. No acceptance,
judging, publication or whole-run gate was attempted. No algorithms were
introduced.

**Uneditable findings:** none confirmed within the assigned subjects and used
supplier interfaces. **Blockers:** none for this reader handoff. The broader
Hecke/KLR consumer closure was identified by a bounded dependency scan but
was not recursively audited: the proof repairs preserve the principal
module, basis, action, form and comparison interfaces. This review is
restricted to the assigned pages, their used suppliers and the explicitly
listed focused consumer interfaces. It does not claim a recursive proof
audit of every published dependency or acceptance of the entire current run.
The historical Dipper–James access failure was not independently retested;
that article and the James scan were not read here. All repaired defects are
recorded above and are excluded from the findings JSON.
