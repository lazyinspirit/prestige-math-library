# Step 3b — finite-coxeter-invariants-and-coinvariant-gradings

Run `frontier-42-coxeter-32`, batch 20, design label CG-15.

- A: `finite-coxeter-invariants-and-coinvariant-gradings` (order 1756)
- B: `finite-coxeter-invariants-and-coinvariant-gradings-examples` (order 1757, leaf)

Owned items (dispatch order; final dependency levels recomputed after dependency edits):

| Dispatch # | Dispatch level | Final level | item | page | Step-3 decision |
|-----------:|---------------:|------------:|------|------|-----------------|
| 1 | 15 | 14 | `lem-cg-complexification-satisfies-reflection-invariant-hypotheses` | A | repaired |
| 2 | 16 | 15 | `def-cg-coxeter-basic-degrees-and-graded-coinvariants` | A | accept |
| 3 | 16 | 15 | `lem-cg-classical-coxeter-spectra-from-reflection-models` | A | repaired |
| 4 | 17 | 16 | `lem-cg-basic-degrees-independent-and-coinvariant-series` | A | accept |
| 5 | 17 | 16 | `lem-cg-formal-rational-differentials-and-invariant-jacobian` | A | repaired |
| 6 | 17 | 16 | `ex-cg-i2m-invariants-and-coinvariant-hilbert-series` | B | repaired |
| 7 | 18 | 18 | `lem-cg-exceptional-coxeter-spectra-from-exact-certificates` | A | accept |
| 8 | 18 | 17 | `thm-cg-coinvariant-top-degree-and-discriminant` | A | repaired |
| 9 | 19 | 19 | `thm-cg-regular-coxeter-eigenvectors-determine-basic-degrees` | A | repaired |
| 10 | 19 | 16 | `ex-cg-a2-discriminant-jacobian-and-top-coinvariant-class` | B | repaired |
| 11 | 20 | 20 | `ex-cg-e6-and-h3-spectra-from-exact-matrices` | B | repaired |

After the dependency edits, the recomputed A/B author order is #1, #2, #3, #4, #5, #10, #6, #8, #7, #9, #11. No proof uses a later item as a supplier; the A2 example is local and the discriminant theorem does not consume the exceptional-spectrum lemma.

## Open obligations at entry

- **Un-authored in-run suppliers.** All 26 in-run supplier items of this pair
  are still scaffold-only (no `items/<id>.md` on disk at entry): batches 2, 4,
  7, 13, 17 and 19 of this run. Each owned consumer that uses one of them will
  be authored anyway and its Step-3b decision will be recorded as `escalate`
  naming the exact supplier IDs and consuming steps until the supplier and its
  actual use are reconciled. Exact rows are listed in the checkpoint sections
  below as each item is authored.
- **Published suppliers used directly** (statements read in full at entry):
  `def-finite-linear-invariant-and-coinvariant-polynomial-algebras`,
  `lem-finite-reflection-invariant-generators-are-algebraically-independent`,
  `lem-reflection-basic-invariants-form-a-regular-sequence`,
  `lem-weyl-coinvariant-hilbert-series-has-order-w-dimension`,
  `thm-chevalley-shephard-todd-for-finite-weyl-groups` (AC-scoped, general
  complex-reflection clause), plus the complexification, polynomial-ring,
  derivative, Jacobian, Hilbert-series, determinant, cyclotomic and root-system
  suppliers declared in the batch-20 manifest.
- **No published Molien-identity item exists.** The Molien identity used by
  `thm-cg-coinvariant-top-degree-and-discriminant` is derived locally from the
  Reynolds projection and the diagonalisability of finite-order operators;
  the published coinvariant Hilbert-series supplier is cited for its statement
  (series and order), not for its internal proof lines.
- Batch files owned: `research/frontier-42-coxeter-32-batch-20.pages.json`,
  `...batch-20.proof-contracts.json`, both library pages under
  `library/coxeter-groups/`, and the eleven `items/<id>.md` files.

## Checkpoints

### Checkpoint 1 — `lem-cg-complexification-satisfies-reflection-invariant-hypotheses` (level 15)

- Authored: `items/lem-cg-complexification-satisfies-reflection-invariant-hypotheses.md`.
  Claims kept exactly as scaffolded: (1) complexified representation is faithful
  of order $|W|$ on a complex $n$-basis $e_s\otimes1$; (2) each $t=t_\alpha$ acts
  as a complex reflection with fixed hyperplane $\ell_\alpha=0$ and image line
  $\mathbb C\alpha$; (3) $V_{\mathbb C}^W=0$ and all invariant linear forms
  vanish; (4) under AC the CST/independence/regular-sequence/Hilbert-supplier
  conclusions apply; (5) rank-zero, reducible and noncrystallographic
  conventions and the abstentions.
- Conventions fixed in the item: $B_{\mathbb C}$ is the $\mathbb C$-bilinear
  extension of $B$ with $B_{\mathbb C}(z\otimes u,w\otimes v)=zw\,B(u,v)$;
  $t_\alpha$ is the reflection attached to the positive root $\alpha$ by
  `thm-cg-root-inversion-formulas-and-strong-exchange` (1).
- Source locators: Etingof Theorem 10.6 (p. 58) and surrounding 10.6
  discussion; Swanson Theorems 7/15 and Definitions 6, 9, 14 (pp. 2-3), as in
  the batch-20 coverage record.
- Dependencies: the 23 declared batch-20 deps; the proof uses facts [F1]-[F11]
  over `def-cg-real-coxeter-form-and-reflection`,
  `lem-cg-reflection-form-invariance-and-rank-two-orders`,
  `def-cg-canonical-reflection-homomorphism`,
  `lem-cg-reflection-representation-descends-and-root-norms`,
  `thm-cg-root-length-criterion-and-faithfulness`,
  `thm-cg-finite-type-positive-definite-criterion`,
  `thm-cg-root-inversion-formulas-and-strong-exchange`, the published
  complexification/eigenspace/faithfulness/invariant-algebra items, and the
  published AC-scoped invariant-theory suppliers (CST, independence,
  regular sequence, coinvariant Hilbert).
- Checks run: `precheck` PASS (direct); `proof-layout` 6 steps, 0 defects;
  `rendercheck` OK (KaTeX + YAML).
- Open gaps: in-run suppliers
  `def-cg-real-coxeter-form-and-reflection`,
  `lem-cg-reflection-form-invariance-and-rank-two-orders`,
  `def-cg-canonical-reflection-homomorphism`,
  `lem-cg-reflection-representation-descends-and-root-norms`,
  `thm-cg-root-length-criterion-and-faithfulness`,
  `thm-cg-root-inversion-formulas-and-strong-exchange`,
  `thm-cg-finite-type-positive-definite-criterion` are scaffold-only at
  authoring time (consuming steps 2.1, 3.1, 3.2, 4.1, 5.1); the item decision
  is therefore left for escalation/reconciliation until those files exist.
- Next action: author `def-cg-coxeter-basic-degrees-and-graded-coinvariants`
  (level 16, tie broken by page order).

### Checkpoint 2 — `def-cg-coxeter-basic-degrees-and-graded-coinvariants` (level 16)

- Authored: `items/def-cg-coxeter-basic-degrees-and-graded-coinvariants.md`.
  Definition of the basic degrees, exponents and graded coinvariant algebra,
  with the explicit abstention (4); `justified_by` is
  `lem-cg-basic-degrees-independent-and-coinvariant-series` as bound in the
  scaffold. Not-applicable proof phase; AC scope stated exactly as the
  existence/count of the basic family.
- Source locators: Etingof §12.1 pp. 63-64; Swanson Definitions 9 and 14 (p. 2).
- Checks: `precheck` n/a (definition, 0 checked, 0 failing); `proof-layout`
  0 steps, 0 defects; `rendercheck` OK.
- Open gaps: in-run suppliers
  `def-cg-coxeter-diagram-components-and-finite-type`,
  `def-cg-real-coxeter-form-and-reflection`,
  `def-cg-canonical-reflection-homomorphism` are scaffold-only; AC-scoped
  published suppliers present on disk. The justifier item is authored in this
  batch (item 4).
- Next action: `lem-cg-classical-coxeter-spectra-from-reflection-models`
  (level 16, tie by page order after the definition).

### Checkpoint 3 — `lem-cg-classical-coxeter-spectra-from-reflection-models` (level 16)

- Authored the four classical spectral claims from explicit reflection models.
  The route is (1.1) a normalized-simple-root isometry from the canonical
  representation to the classical model; (1.2) the exact rank-two matrix for
  $I_2(m)$; (2.1) the $A_n$ coordinate cycle and its restriction to the
  sum-zero space; (2.2) the $B_n$ signed cycle; (2.3) the parity-dependent
  $D_n$ signed cycle and its extra $-1$ eigenvalue; (3.1) transfer to the
  complexification and the order comparison.
- **Repairs made.** The odd and even color-class products in type $A_n$ have
  commuting factors internally, but do not generally commute with each other;
  the proof now fixes $c=OE_0$ and notes the reverse product is conjugate.
  The restricted $A_n$ order is established using the primitive
  $(n+1)$-st root in the sum-zero spectrum, not from the full-space orbit.
  The $B_n$ order argument uses $c^n$ commuting with $c$ to show $c^n=-I$
  on the signed-coordinate orbit basis. The $D_n$ action is stated separately
  by parity, with the repeated residue $n-1$ retained when $n$ is even. A final
  proof audit found that the original transfer computed the order of
  rho_C(c) but did not identify it with the group order h=ord(c); it now
  invokes the declared faithfulness result for the complexification and
  proves the equality explicitly.
- **Dependency changes.** Removed unused direct edges to
  `lem-cg-reflection-representation-descends-and-root-norms`,
  `thm-cg-finite-type-positive-definite-criterion`, and
  `def-hh-coxeter-matrix-word-group-and-length`; removed unused published
  edges to the Weyl-group definition and transposition-generation theorem.
  The item remains at level 16. The remaining cross-batch declarations were
  checked against the exact proof and marked verified; removed edges are
  recorded as removed in the owned input file.
- **Independent model check.** Exact-integer calculations previously recorded
  for $A_n$ ($n≤8$), $B_n$ ($n≤12$), and $D_n$ ($4≤n≤11$) matched the
  characteristic polynomials, orders and signed-cycle patterns.
- **Sources rechecked.** Casselman, Theorem 3.11 (printed p. 9) gives the Coxeter
  plane rotation; his table (printed p. 11) includes the applicable Coxeter
  numbers. The $B_n$ and $C_n$ diagrams coincide. Ripoll, slide 25, gives the
  invariant-plane rotation statement; neither is used as a proof supplier.
- Checks after the latest repair: explicit-path `precheck` PASS (1 checked,
  0 failing); explicit-path `rendercheck` OK. `manifest-deps` reports batch
  20: 11 items, 0 normalized, 0 errors. The run-ledger refresh was attempted
  but currently stops on malformed YAML in the out-of-scope sibling
  `items/lem-cg-affine-reflection-identities-and-local-finiteness.md`
  (duplicate `locator` key); that file was left untouched for its owner.
- Item decision remains pending final batch gates. Next in dispatch order was
  `lem-cg-basic-degrees-independent-and-coinvariant-series` (level 17), already
  checkpointed below.

### Checkpoint 4 — `lem-cg-basic-degrees-independent-and-coinvariant-series` (level 17)

- Authored: (1.1) multiset independence by extracting the least nonzero
  coefficient $c_d$ of $\prod(1-t^{d_i})^{-1}$ and dividing; (2.1) Hilbert
  series of $R$ and $A$, order formula and top degree $\sum e_i$ via the
  published AC-scoped suppliers; (3.1) Molien identity from the Reynolds
  projection trace and eigendiagonalisation of finite-order operators;
  (4.1) rank-zero conventions and the reducible concatenation (successive
  blockwise Reynolds averaging + blockwise algebraic independence).
- **Dependency changes (recorded).** Added to this item's deps (manifest and
  frontmatter): `lem-cg-diagram-products-and-invariant-form-comparison`
  (batch 13, in-run, needed for the reducible clause) and
  `def-multivariate-polynomial-ring-by-iteration` (published, blockwise
  expansion). Level stays 17 ($\max$ dep level 16, item 2).
- Source locators: Etingof §12.1 pp. 63-64 and Theorem 12.2 p. 64; Swanson
  Definitions 6, 9 and Remark 10 (pp. 2-3).
- Checks: `precheck` PASS (direct); `proof-layout` 4 steps, 0 defects;
  `rendercheck` OK; `manifest-deps` 0 errors.
- Open gaps: in-run suppliers `def-cg-coxeter-basic-degrees-and-graded-coinvariants`
  (authored here), `lem-cg-complexification-satisfies-reflection-invariant-hypotheses`
  (authored here), `thm-cg-finite-coxeter-classification-including-h-and-dihedral`
  and `lem-cg-diagram-products-and-invariant-form-comparison` (batch 13,
  scaffold-only). Consuming steps 1.1, 2.1, 3.1, 4.1.
- Next action: `lem-cg-formal-rational-differentials-and-invariant-jacobian`
  (level 17).

### Checkpoint 5 — `lem-cg-formal-rational-differentials-and-invariant-jacobian` (level 17)

- Authored: (1.1) orbit polynomial with invariant coefficients and $x_j$ algebraic
  over $K=\mathbb C(f)$; (1.2) local multivariate product/power/chain rules for
  the Jacobian partials; (2.1) $x_j\notin K$ from essentiality (no nonzero
  invariant linear form) and $m_j$ nonconstant with $m_j'\ne0$ and
  $m_j'(x_j)\ne0$; (3.1) clearing denominators, differentiating, and obtaining
  $BJ=\mathrm{id}$ over $L=\mathbb C(x)$, hence rank $n$ and nonzero
  $\mathbf J=\det(\partial f_i/\partial x_j)$.
- Conventions fixed: the bridge identity is stated in $L$ (the scaffold phrase
  "holds in S" would be wrong because the $b_{ij}$ are rational functions); the
  existence of $B\in R$ clearing denominators uses $K=\operatorname{Frac}(R)$.
- Source locators: Etingof Proposition 12.1(i) p. 63 (orbit annihilator only);
  Swanson Definition 9 (p. 2).
- Checks: `precheck` PASS (direct); `proof-layout` 4 steps, 0 defects;
  `rendercheck` OK. No dependency changes (all cited items were declared).
- Open gaps: in-run suppliers `def-cg-coxeter-basic-degrees-and-graded-coinvariants`
  and `lem-cg-complexification-satisfies-reflection-invariant-hypotheses`
  (authored here), `def-cg-canonical-reflection-homomorphism` (batch 4,
  scaffold-only); consuming steps 1.1, 2.1, 3.1.
- Next action: `ex-cg-i2m-invariants-and-coinvariant-hilbert-series` (B page,
  level 17).

### Checkpoint 6 — `ex-cg-i2m-invariants-and-coinvariant-hilbert-series` (level 17, B page)

- Authored (completed and repaired at this session's entry; the file was on
  disk in a pre-stratification state). Route: (1.1) identification of the
  dihedral model and its invariants; (2.1) generation of
  $\mathbb C[u,z]^{W}=\mathbb C[a,b]$ with $a=uz$, $b=u^m+z^m$; (2.2) the
  coinvariant algebra $\mathbb C[u,z]/(uz,u^m+z^m)$ with its $2m$-element
  basis and Hilbert series $(1+t)(1+\dots+t^{m-1})$; (3.1) algebraic
  independence of $a,b$ by the minimal-relation/Jacobian argument and the
  minimality of the basic family, degrees $2,m$; (4.1) the
  noncrystallographic contrast from the rank-two classification
  $4\cos^2(\pi/m)\in\{0,1,2,3\}$.
- **Repair performed this session.** The step numbering was not stratified
  (the coinvariant step sat in phase 3 while citing only phase-1 steps);
  the steps were reordered to the canonical stratification
  $1.1,2.1,2.2,3.1,4.1,5.1$, with all trailing tags and the closing summary
  reference "Steps 1.1-4.1" updated. No mathematical content changed.
- Checks: `precheck` PASS (direct); `proof-layout` 6 steps, 0 defects;
  `rendercheck` OK.
- Open gaps: in-run suppliers of the reflection model
  (`def-cg-real-coxeter-form-and-reflection` etc.) are authored in this run;
  the item decision is recorded after the page/manifest pass.
- Next action: `lem-cg-exceptional-coxeter-spectra-from-exact-certificates`
  (level 18, tie by page order).

### Checkpoint 7 — `lem-cg-exceptional-coxeter-spectra-from-exact-certificates` (level 18)

- Authored the six exceptional characteristic polynomials, orders
  $h=12,18,30,12,10,30$, spectral residue multisets and
  $sum r_i=nh/2=|Phi_+|$.
- Route: (1.1) derive the trigonometric constants used by the edge labels;
  (2.1) construct the six matrices in the simple-root basis and verify their
  Gram preservation; (3.1) derive Newton's identities from the adjugate
  identity; (4.1) compute exact power sums and characteristic polynomials;
  (5.1)-(5.2) factor and identify the eigenvalues, prove exact orders and
  compare residue sums with the positive-root count.
- The matrices, characteristic polynomials, orders and residue lists were
  independently recomputed over exact coefficient rings and matched the local
  certificate. The $H_3,H_4$ root identities were also checked against the
  specified primitive roots of unity.
- Dependencies added during authoring are synchronized in the item and batch
  manifest; the unsupported B-page example supplier is not used. Current
  supplier proofs for `def-cg-bipartite-coxeter-element-and-root-recursion`
  and `lem-cg-steinberg-bipartite-root-enumeration` were reread. Their exact
  uses are verified: color-class product/order conventions at step 2.1, and
  $|Phi_+|=nh/2$ at step 5.2. Both owned cross-batch input rows now have
  `verified` status. All other declared supplier files are authored on disk;
  their remaining reconciliation is recorded for final batch gates.
- Sources rechecked: Casselman, Theorem 3.11 and type table (printed pp. 9, 11);
  Ripoll, slide 25. They are statement-level checks; the matrices and
  characteristic-polynomial proofs are local and exact.
- Checks: explicit-path `precheck` PASS; explicit-path `rendercheck` OK; the
  exact exceptional certificate script passed for E6/E7/E8/F4/H3/H4.
- No item decision is recorded before the final content, contract, dependency
  and plan checks. Next in order, item 8, is authored and checkpointed below.

### Checkpoint 8 — thm-cg-coinvariant-top-degree-and-discriminant (level 18)

- Authored the five promised clauses: the exponent sum Σe_i=|Φ_+|=|T|; the anti-invariant Jacobian J=cΔ with nonzero scalar; S₀^det=ΔR; and the one-dimensional top coinvariant sign line generated by Δ. Conventions state rank zero and rank one separately, use B-orthonormal real coordinates, name det(ρ_C(w)), and describe basis-change and root-order effects exactly.
- Route: (1.1) empty/rank-one cases by explicit Molien expansion; (1.2) codimension-one fixed elements are exactly T, using a generic point in a reflecting hyperplane and the finite-chamber face stabilizer; (2.1) compare the normalized Molien Laurent coefficients; (3.1) prove the Jacobian is a scalar multiple of the discriminant; (4.1) identify all anti-invariants; (5.1) prove the discriminant class survives via the coefficient-factorial Hermitian pairing.
- A later exact-wording audit corrected the convention: listing the same fixed set of positive roots in a different order leaves the commutative product Δ unchanged; replacing Φ₊ by its opposite changes it by (−1)^N. The same correction is in the proof summary, and does not alter any mathematical claim or dependency.
- Scaffold repairs: the first two Molien coefficients now retain the 1/|W| factor (the identity contributes δ^−n/|W| and each reflection contributes δ^−(n−1)/(2|W|)); the rank-one case is explicit so the O(δ^−(n−2)) estimate is used only for n≥2; the multivariable operator chain rule uses Mᵀ∂ for column vectors; and the coordinate caveat distinguishes coordinate substitution from the scalar change in c.
- Sources rechecked: Etingof, Representations of Lie Groups, Theorem 12.2, printed p. 64, states ∏d_i=|G| and the coinvariant Hilbert polynomial ∏[d_i]_q; its stronger regular-representation clause is not used. Casselman, Coxeter elements in finite Coxeter groups, Proposition 3.2, printed p. 6, was checked as an independent Coxeter-element consistency source only, not an input. The local proof relies on item 4’s normalized Molien derivation and the exact root/face suppliers.
- Dependencies: 26 declared IDs; all corresponding item files are currently on disk. Relevant current suppliers were read: item 4 (Hilbert and Molien), item 5 (nonzero Jacobian), item 1 (faithful real reflection geometry), the root-to-reflection bijection, and finite-chamber clause (3). The added batch-2 definition edge def-hh-coxeter-matrix-word-group-and-length is reviewed and recorded verified in the owned batch-20 cross-batch input; its singleton presentation use is local and does not consume its later reduced-word justifiers. No item-8 supplier is missing.
- Checks: explicit-path precheck PASS (1 checked, 0 failing); explicit-path rendercheck OK; manifest-deps on batch 20 reports 11 items, 0 normalized, 0 errors; frontier-dependency-ledger refresh --run frontier-42-coxeter-32 accepted the updated 78-row run ledger.
- Decision: not recorded yet; the final content-policy, strict-contract, dependency-level and plan checks still apply. One Step-4 note: the pre-splice plan describes the identity “term” as δ^−n immediately after writing normalized Molien; interpret that as the unnormalized summand or add the 1/|W| coefficient. The proof now states it explicitly. No other plan/prose amendment was identified.
- Next action: audit and author thm-cg-regular-coxeter-eigenvectors-determine-basic-degrees (level 19).

### Checkpoint 9 — `thm-cg-regular-coxeter-eigenvectors-determine-basic-degrees` (level 19)

- Authored all four scaffold clauses: exponent-residue identification; the
  classical and exceptional degree tables with coincidence conventions and
  product formula; reducible invariant and coinvariant tensor products; and
  rank-zero/rank-one conventions. The statement now defines $N:=|\Phi_+|$ and
  explicitly records the repeated degree $n$ in even-rank $D_n$.
- Proof route after adopting precheck's canonical stratification: (1.1) show
  the Coxeter-plane eigenvector avoids every reflection hyperplane and the
  invariant gradients form a basis; (1.2) prove the reducible tensor
  factorizations; (2.1) differentiate invariance to get exponent residues;
  (3.1) sum conjugate residues and compare with the discriminant degree;
  (4.1) obtain the minimum and maximum degrees from the plane eigenvalues;
  (4.2) transfer exact spectra to the full table and use the product-degree
  result; (5.1) handle rank zero, rank one and the exact Choice use.
- Mathematical repairs: state $C^h=I$ from the homomorphism and $c^h=1$;
  state that the real supplier's invertibility of $c-I$ complexifies to
  invertibility of $C-I$; prove the transpose characteristic-polynomial
  equality from $\det(A^{\mathsf T})=\det(A)$; and retain the eigenvalue $-1$
  endpoint and multiplicity explicitly. Removed direct dependencies that were
  not used: `thm-cg-finite-type-positive-definite-criterion`,
  `thm-cg-root-inversion-formulas-and-strong-exchange`, and
  `thm-cg-root-length-criterion-and-faithfulness`. Added the published
  suppliers `def-multivariate-polynomial-ring-by-iteration`,
  `def-characteristic-polynomial-of-a-matrix`, and
  `def-determinant-of-a-square-matrix`. The level remains 19.
- Cross-batch reconciliation: verified the current uses of
  `def-cg-bipartite-coxeter-element-and-root-recursion`,
  `lem-cg-steinberg-bipartite-root-enumeration`,
  `def-cg-real-coxeter-form-and-reflection`,
  `def-cg-canonical-reflection-homomorphism`,
  `def-cg-coxeter-diagram-components-and-finite-type`,
  `lem-cg-diagram-products-and-invariant-form-comparison`,
  `thm-cg-finite-coxeter-classification-including-h-and-dihedral`,
  `def-cg-dual-chambers-and-reflection-hyperplanes`, and
  `thm-cg-root-sign-and-simple-reflection-positivity`. The three removed
  edges are recorded as `removed` in the owned cross-batch input.
- Sources reread: Swanson, Theorem 11 (printed p. 2), corroborates degrees as
  one plus Coxeter eigenvalue exponents; Ripoll, slide 25, states $h=d_n$ and
  the Coxeter-plane rotation; Casselman, Proposition 3.2 (printed p. 6),
  Theorem 3.11 (printed p. 9) and the type table (printed p. 11). These were
  independent statement checks; the regular-eigenvector and degree arguments
  are proved locally.
- Checks after final edits: explicit-path `precheck` PASS (1 checked,
  0 failing); explicit-path `rendercheck` OK; `manifest-deps` on batch 20:
  11 items, 0 normalized, 0 errors. No item decision is recorded before the
  batch content, contract, dependency and plan gates.
- Next action: `ex-cg-a2-discriminant-jacobian-and-top-coinvariant-class`
  (level 19, B page).


### Checkpoint 10 — ex-cg-a2-discriminant-jacobian-and-top-coinvariant-class (level 19, B page)

- Authored the four promised clauses: normalized A2 root forms and discriminant; the Jacobian scalar and anti-invariance; the nonzero top coinvariant class; and the degrees, exponents and order product. The proof identifies the A2 presentation with S3, proves the invariant ring and basic family locally, and derives the six-class quotient basis locally. It has no dependency on another B-page example or on the AC-scoped general coinvariant theorem.
- Scaffold repair: the factor product (u−z)(u−ζz)(u−ζ²z) is not the product of normalized root forms. For the chosen unit simple roots, the normalized discriminant is Δ=(u³−z³)/(8i); consequently the Jacobian in (u,z) coordinates is J=−24iΔ and [Δ]=−i[u³]/4. The scalar is coordinate-dependent as stated.
- Cross-batch inputs verified: def-cg-real-coxeter-form-and-reflection, def-cg-canonical-reflection-homomorphism, and thm-cg-finite-coxeter-classification-including-h-and-dihedral. Their current claims match the explicit model and A2 conventions. The Etingof locator now points to Theorem 12.2 and its S3 example immediately following it (printed p. 64): the Hilbert polynomial and top sign component are statement-level comparisons, while this proof computes the basis and class directly.
- Checks after final edits: explicit-path precheck PASS (1 checked, 0 failing); explicit-path rendercheck OK; manifest-deps on batch 20: 11 items, 0 normalized, 0 errors. No item decision is recorded before the final batch gates.
- Next action: ex-cg-e6-and-h3-spectra-from-exact-matrices (level 20, B page).

### Checkpoint 11 — ex-cg-e6-and-h3-spectra-from-exact-matrices (dispatch level 20; final level 20, B page)

- Authored and independently checked the promised E6/H3 characteristic
  polynomials, cyclotomic factors, spectral exponent multisets, exact orders,
  residue sums and basic-degree tables. The matrices are the products in the
  recorded application orders `[0,2,4,1,3,5]` and `[0,2,1]`; the statement
  uses the simple-root basis and `h=ord(c)`.
- Exact computation in the item: the E6 power traces are
  `(-1,1,2,-3,-1,-2)`, giving
  `X^6+X^5-X^3+X+1 = Phi_3 Phi_12` and residues
  `{1,4,5,7,8,11}`. The H3 traces are
  `(phi-1,phi,-phi)`, giving
  `X^3+(1-phi)X^2+(1-phi)X+1 = (X+1)(X^2-phi X+1)` and residues
  `{1,5,9}`. The roots first establish matrix orders 12 and 10; faithfulness
  of the complexified canonical representation then proves `h=12,10`, avoiding
  the scaffold's circular use of `h` in the order argument. The residue sums
  are 36 and 15; under AC, the regular-Coxeter degree theorem gives the degree
  lists and order products 51840 and 120.
- Direct dependencies: 24 IDs. The current cross-batch rows are verified for
  `def-cg-bipartite-coxeter-element-and-root-recursion`,
  `def-cg-canonical-reflection-homomorphism`,
  `def-cg-coxeter-diagram-components-and-finite-type`,
  `def-cg-real-coxeter-form-and-reflection`, and
  `thm-cg-finite-coxeter-classification-including-h-and-dihedral`. The direct
  edges to `lem-cg-reflection-form-invariance-and-rank-two-orders` and
  `thm-cg-finite-type-positive-definite-criterion` were removed because the
  matrix formula is proved from the declared reflection definition and
  finiteness comes directly from the classification clause.
- Source passages re-read: Casselman, Section 2, printed p. 5, gives the H3
  icosahedron Coxeter spectrum; his table on printed p. 11 gives `h(E6)=12`.
  Swanson, Theorem 11, printed p. 2, states the degree/exponent correspondence.
  These are independent checks; the matrices, recurrence and order proof are
  local. The corrected Casselman locator is in the item metadata.
- Checks: explicit-path precheck pass; rendercheck pass; strict proof contracts
  pass. The first proof-layout scan found terminal periods after the tags in
  item 9 steps 1.2, 3.1, 4.1 and 4.2 and item 11 steps 2.1 and 3.1; the
  punctuation was moved before those tags. The final proof-layout pass covers
  11 items and 56 steps with 0 defects.
  The item decision is `repaired`, confidence 1, with all 24 direct dependency
  IDs examined.

## Final pair reconciliation

- All 11 original scaffold items are authored and placed: 8 on A and 3 examples
  on B. No new prerequisite item IDs were created. The B page remains a leaf.
- Direct supplier edges added or made explicit during proof repair: item 4 uses
  `lem-cg-diagram-products-and-invariant-form-comparison` and
  `def-multivariate-polynomial-ring-by-iteration`; item 6 uses
  `def-hh-coxeter-matrix-word-group-and-length`; item 9 uses
  `def-multivariate-polynomial-ring-by-iteration`,
  `def-characteristic-polynomial-of-a-matrix`, and
  `def-determinant-of-a-square-matrix`; item 10 uses
  `thm-of-square-roots` and `thm-complex-nth-roots-and-roots-of-unity`; item 11
  uses `def-cg-canonical-reflection-homomorphism`,
  `lem-cg-complexification-satisfies-reflection-invariant-hypotheses`,
  `def-cg-coxeter-basic-degrees-and-graded-coinvariants`,
  `def-determinant-of-a-square-matrix`,
  `cor-an-element-of-finite-order-acts-diagonalisably-over-an-algebraically-closed-field-of-characteristic-zero`,
  `def-matrix-minors-cofactors-and-adjugate`,
  `thm-adjugate-identity-over-a-commutative-ring`,
  `def-trace-of-a-square-matrix-over-a-commutative-ring`,
  `thm-eulers-formula`, and `def-axiom-of-choice`; item 8 now declares
  `thm-cg-finite-type-positive-definite-criterion` for its orthonormal-coordinate
  hypothesis. No prerequisite item was newly created.
- Unused edges were removed from item 1 (`def-cg-geometric-inversion-set`,
  `thm-cg-finite-coxeter-classification-including-h-and-dihedral`), item 3's
  earlier unused classical-model edges, item 8 (`def-cg-geometric-inversion-set`,
  `thm-cg-root-sign-and-simple-reflection-positivity`), item 9's three unused
  root/positivity edges, item 10's B-example and general AC-scoped theorem, and
  item 11 (`lem-cg-reflection-form-invariance-and-rank-two-orders`,
  `thm-cg-finite-type-positive-definite-criterion`). Each removed edge is
  recorded in the owned cross-batch input where applicable.
- Cross-batch inputs for owned items now have `verified` or `removed` status;
  no owned direct dependency row is open or missing. The local A2 proof no
  longer depends on a B-page example or the general AC-scoped top-class theorem.
- Current levels are recorded in both item metadata and the batch manifest.
  The recomputed order is #1, #2, #3, #4, #5, #10, #6, #8, #7, #9, #11.
  The repository level check reports no mismatch among these 11 items, but it
  still reports five out-of-scope items: `thm-cg-cone-cat-equivalence-and-polyhedral-link-criterion`
  (11 vs 10), `thm-cg-compact-local-cat-one-short-circle-criterion` (12 vs 11),
  `ex-cg-reducible-semidefinite-forms-are-factorwise` (15 vs 16),
  `lem-cg-davis-angular-vertex-link-is-metric-flag-nerve` (20 vs 19), and
  `ex-cg-link-angles-of-a2-affine-a2-and-universal-coxeter-nerve` (21 vs 20).
  These belong to sibling pairs and were left untouched.
- Final scoped checks: explicit-path precheck (10 proof-bearing items, 0
  failures; the definition is n/a); renderer (11 items plus both pages); batch
  content policy (11 items, 0 errors/warnings); strict proof contracts (11/11,
  0 errors/warnings); focused depcheck (0 errors); manifest-deps (11 items, 0
  normalized, 0 errors); source coverage (27 rows, 0 errors/warnings);
  source-fetch-check (4/4 verified and resolved); depsource (11/11 selected,
  0 unresolved); proof-layout (11 items, 56 steps, 0 defects). The run-wide
  dependency-level check and validate-plan were also run and their external or
  pre-splice findings are recorded below.
- `validate-plan research/plan-spec.json --run frontier-42-coxeter-32` still
  fails before Step 4 because the plan spec has empty item lists: all 11 owned
  manifest IDs are absent from the plan pages. It also reports these A/B
  prerequisite-page closure gaps: A lacks
  `complexification-realification-and-real-structures`,
  `root-systems-dynkin-diagrams-and-cartan-killing-classification`,
  `maschkes-theorem-and-complete-reducibility`, and
  `zariski-tangent-spaces-regular-points-smoothness-and-bertini`; B lacks
  `zariski-tangent-spaces-regular-points-smoothness-and-bertini`,
  `finite-proper-and-projective-morphisms`,
  `root-systems-dynkin-diagrams-and-cartan-killing-classification`, and
  `maschkes-theorem-and-complete-reducibility`. Step 4 should reconcile those
  page edges against the authored dependency closure, adding required pages to
  `requires` or dropping only edges shown to be unused; the item dependencies
  themselves resolve, and no mathematical supplier is missing.
  The direct paths are: A's `lem-cg-complexification-satisfies-reflection-invariant-hypotheses`
  to `def-complexification-of-a-real-vector-space` and
  `def-complexification-of-a-real-linear-map`; A's
  `lem-cg-classical-coxeter-spectra-from-reflection-models` and B's
  `ex-cg-i2m-invariants-and-coinvariant-hilbert-series` to root-system
  examples/classification; A's `lem-cg-classical-coxeter-spectra-from-reflection-models`,
  `lem-cg-basic-degrees-independent-and-coinvariant-series`,
  `thm-cg-coinvariant-top-degree-and-discriminant`,
  `lem-cg-exceptional-coxeter-spectra-from-exact-certificates`, and
  `thm-cg-regular-coxeter-eigenvectors-determine-basic-degrees`, plus B's
  `ex-cg-i2m-invariants-and-coinvariant-hilbert-series` and
  `ex-cg-e6-and-h3-spectra-from-exact-matrices`, through the finite-order
  diagonalization corollary whose page requires Maschke; A's
  `lem-cg-formal-rational-differentials-and-invariant-jacobian` and
  `thm-cg-coinvariant-top-degree-and-discriminant`, and B's two algebra/Jacobian
  examples, to `def-jacobian-matrix-affine-algebraic-set`; B's I2(m) example
  also reaches `def-algebraically-independent-finite-tuples-over-a-field`.
  These supplier items remain declared and proved; the mismatch is their
  page-level `requires` closure in the pre-splice plan.
- The frontier dependency-ledger refresh succeeded. The prior Step-3a scope
  review was refreshed as `sufficient` after the A2/scaffold wording and item
  order changed; all 11 current item decisions are closed at confidence 1.
- No published mathematical concern was found in the exact suppliers checked.
  The run itself remains in `3b-author` with other pairs missing and the
  engine-reported exclusive-cohort JSON parse, dispatch-profile, and invalid
  escape blockers; this pair's report and authoring artifacts are present, but
  the engine still does not count this pair as covered. No run transition was
  made here.
