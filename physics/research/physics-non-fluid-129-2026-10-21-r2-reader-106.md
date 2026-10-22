# Step 3a reader report — batch 106

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: read-only reader  
Assigned pair: `qsmx-integrable-transfer` / `qsmx-integrable-transfer-examples`

## Inventory reviewed

Read the batch manifest, the two assigned page carriers, all eight assigned
items, the batch proof contracts, cross-batch dependency record, notes and
coverage record. The notes and author dispositions were treated as evidence,
not as review verdicts. The manifest has no in-run item edges outside batch 106.

Assigned pages:

- `library/quantum-statistical-mechanics/qsmx-integrable-transfer.md`
- `library/quantum-statistical-mechanics/qsmx-integrable-transfer-examples.md`

Page prerequisites opened for context:

- `library/quantum-statistical-mechanics/qsm-local-ensemble-bridge.md`
- `library/hopf-hecke-algebras/hopf-hecke-and-quantum-symmetry-interfaces.md`

Assigned items were reviewed in dependency order:

1. `def-qsmx-rational-monodromy`
2. `lem-qsmx-monodromy-rtt`
3. `lem-qsmx-transfer-regular-point`
4. `thm-qsmx-transfer-commutativity`
5. `thm-qsmx-transfer-heisenberg-charge` and `def-qsmx-regular-bethe-data`
6. `thm-qsmx-regular-bethe-eigenpair` and `ex-qsmx-one-magnon`

Published mathematical item dependencies opened:

- `def-hh-rational-spectral-r-matrix`
- `lem-hh-rational-spectral-r-matrix-satisfies-yang-baxter`
- `def-hh-scalar-and-tensor-conventions`
- `thm-tensor-product-basis-from-bases`

The matching entries in `research/math-imports.json` pin the four mathematical
suppliers above. Relevant published statements and proofs were inspected at
their actual uses. The author’s batch contract rows for facts, derivations,
step inputs, boundaries and finite checks were compared with the current item
proofs.

## Mathematical and source review

The ordered monodromy definition fixes the finite spaces, factor order, trace,
shift orientation and dimensionless parameter. The RTT induction uses the
stated local Yang–Baxter equation and disjoint tensor supports correctly. The
regular-point calculation gives the stated oriented shift and periodic exchange
sum; the omitted-factor traces and cyclic reindexing are consistent with the
declared orientation. The transfer commutativity proof handles invertible
spectral differences and then extends the polynomial identity across the
exceptional differences; its local matrix-log argument is valid. The exchange
operator commutation, Hermiticity and Pauli identity follow from the stated
finite-dimensional conventions.

The Bethe-data definition states the root exclusions needed for all displayed
denominators and explicitly requires a nonzero vector. In the eigenpair proof,
the RTT component relations, wanted/unwanted-term induction, Bethe-equation
cancellation and polynomial pole removal establish the stated conditional
eigenpair. No completeness, singular-root or descendant conclusion is used.
The one-down-spin calculation has the correct two incident bonds, periodic
Fourier reindexing and eigenvalue for the item’s normalization
`H_N = J sum P`.

I consulted the cited portions of Faddeev, *How Algebraic Bethe Ansatz Works
for Integrable Model*, §§3–4, and the cited sections of *Classical and Quantum
Integrable Systems*, Lectures 10, 14 and 15. The local proofs were checked
independently; source references were not treated as proof substitutes. In
particular, Lecture 10 uses `H = (J_source/2) sum(P - I)`, whereas the assigned
example uses `H = J sum P`; the assigned finite-basis proof supplies its exact
normalization.

The two TikZ commutative diagrams in the assigned items (RTT and transfer
commutativity) have matching source/target spaces, labels and right-to-left
composition convention. No diagram repair or addition was needed. The items
are mathematical and make no empirical or statistical claim.

## Defects outside reader write scope

1. `qsmx-integrable-transfer`, opening paragraph, sentence 3: the page summary
   says “the transfer matrix is the oriented cyclic shift.” The exact result in
   `lem-qsmx-transfer-regular-point` is `t(0) = i^N U`; for example, at `N=3`
   the scalar is `-i`. The summary should state the scalar factor or say
   “proportional to” the shift. This is a nonfatal overstatement in assigned
   A-page prose.

2. `thm-qsmx-regular-bethe-eigenpair`, frontmatter `title`: “Regular Bethe data
   diagonalize the transfer family” may imply a complete diagonalization,
   while the theorem proves eigenpairs for the specified regular data and
   explicitly disclaims completeness. A title such as “Regular Bethe data give
   transfer-family eigenpairs” would state the proved scope directly. This is
   a suspected, nonfatal title overstatement; the theorem proof itself is
   sound.

3. `def-qsmx-regular-bethe-data`, frontmatter `deps` and `Definition
   references`: it declares `thm-qsmx-transfer-commutativity` as a mathematical
   prerequisite, but the definition of the shifted monodromy, root conditions
   and nonzero Bethe vector uses only `def-qsmx-rational-monodromy`. The
   commutativity theorem is not invoked in the definition. Unless it is needed
   for an unstated meaning of “on-shell,” this is an unnecessary logical edge
   under the schema’s prerequisite rule. This is a suspected, nonfatal
   ill-formed dependency declaration.

4. `ex-qsmx-one-magnon`, `Example references`, Faddeev reference locator: it
   names PDF pp. 15–16, equations (113)–(115), as the one-particle momentum and
   energy source. Faddeev’s one-particle energy dispersion is equations
   (109)–(112), PDF p. 15; equations (113)–(115), PDF p. 16, concern the
   logarithmic Bethe equations, free-particle momenta in the large-`N` route,
   and the scattering matrix. The separate Lecture 10 reference at
   §§10.2–10.3, equations (10.2)–(10.5), supports the one-magnon dispersion in
   its own normalization. This is a nonfatal citation-location defect; the
   assigned example’s local proof establishes its stated eigenvalue.

No source files were edited because this assignment is read-only. These defects
are reported for owner disposition.

## Page verdicts

- `qsmx-integrable-transfer`: the item definitions and conditional proofs are
  mathematically sound on their stated domains. The page summary has the scalar
  factor overstatement recorded above. **Verdict: nonfatal page-prose defect.**
- `qsmx-integrable-transfer-examples`: the one-magnon example and its page
  summary are mathematically consistent. Its Faddeev reference locator is
  inaccurate as recorded above. **Verdict: nonfatal citation defect in the
  assigned example.**

## Edits and blockers

- Source edits: none; read-only role.
- Blocker: none. The review did not re-audit the complete transitive foundation
  tree behind the published mathematics suppliers; it checked their direct
  statements/proofs and the cited finite-dimensional uses needed here.
