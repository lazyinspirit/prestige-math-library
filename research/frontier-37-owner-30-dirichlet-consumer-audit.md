# Frontier 37, owner 30 — Dirichlet consumer audit

Date: 2026-09-30  
Scope: the 14 Step-3 consumer IDs listed below, their current definitions/proofs,
and the actual supplier clauses they invoke. This is a mathematical evidence
record, not an autopilot transition or a decision receipt.

## Audit status

The original ordinary `confidence: 1` receipts for these 14 items are stale:
the six batch-2 suppliers now have actual authored content that was not the
content those receipts examined. I re-read the current consumer proofs and
definitions and checked their actual supplier uses. I did not write refreshed
receipts, alter carriers, cross-batch ledger inputs, shared plans, gates, or run
state. Root directed that ordinary decisions remain held until the stable
published lattice supplier revision is released and rechecked.

Two exact proof repairs were authorized and made, preserving both Statements:

- `thm-number-field-regulator-is-well-defined`: the proof now defines `B` by
  putting the coordinates of each new logarithm in a column, derives
  `A'=AB`, proves `B∈GL_r(Z)` from the reverse integer basis change, and uses
  `|det B|=1`. The batch-3 manifest strategy and the `step-1-4`, `step-1-5`,
  and `step-2-2` contract derivations now use the same convention.
- `ex-real-quadratic-units-and-pell`: step 4.1 now sets
  `w=u_d ε_d^{-m}` inside `Z[√d]`. It derives `w²=ε_d`, `u_d=w^n`, `w>1`,
  then `N_d(w)=-1` by norm multiplicativity; the positive coordinates of `w`
  give a smaller positive negative-Pell solution. The invalid appeal to
  integrality over `O_K` is gone. Its no-longer-needed integral-closure facts
  and dependencies were removed; the manifest strategy and contract are
  synchronized, with the contract's three unused `F8` source citations
  removed.

The repair work above is proof editing. It does not itself establish a fresh
mechanical gate pass or mathematical acceptance. I ran no proof-contract,
render, precheck, test, or decision-receipt command as part of this audit.

## Consumer-by-consumer findings

| ID | Current mathematical evidence and disposition |
| --- | --- |
| `thm-logarithmic-unit-image-is-a-full-lattice` | The fixed-product adjustment, equality-case Minkowski application, unit-ideal covolume, finite bounded-ideal representatives, and final orthogonal-complement argument are internally coherent conditional on the cited supplier clauses. Its actual batch-2 lattice suppliers need the qualifications below; no fresh acceptance. |
| `thm-dirichlet-unit-theorem` | The logarithm homomorphism/kernel, lifts of a finite lattice basis, existence and uniqueness of the product decomposition, and finite-generation/rank comparison follow from the cited kernel and full-lattice results. Lifting finitely many basis vectors is a finite choice. Conditional on the stable lattice input. |
| `def-fundamental-units` | The basis definition and its equivalent unique product description follow from the logarithm kernel being the roots of unity. The construction uses only finitely many preimages of basis vectors. No independent defect found; depends on the unit theorem and lattice result. |
| `def-number-field-regulator` | The regulator convention and empty determinant are clear, and the deleted-row argument is supplied by the local minor lemma. Its explanatory sentence that a `Z`-basis of a rank-`r` free abelian group is `R`-linearly independent is not justified by that premise alone. The conclusion follows from the full-lattice theorem, and the well-definedness proof below now establishes the needed real rank explicitly; the definition's explanation remains an unedited wording gap. |
| `thm-number-field-regulator-is-well-defined` | The deleted-row cofactors have equal absolute value and are nonzero once the columns have rank `r` and coordinate sum zero. The old change-of-basis equation had a transpose error; the authorized repair uses column coordinates `B`, so `A'=AB`, and the reverse integral basis change proves `det B=±1`. Corrected proof is consistent with matrix multiplication and the contract. Hold receipt pending stable lattice supplier. |
| `cor-unit-ranks-by-number-field-signature` | The rank follows from the Dirichlet decomposition and `r₁+2r₂=[K:Q]`; the rank-zero cases reduce to `Q` and imaginary quadratic fields. The local `O_Q=Z` argument covers the rational case. No independent defect found, conditional on the theorem supplier. |
| `thm-s-unit-theorem` | The valuation map has unit kernel by the principal-divisor sequence; class-group exponent `h` supplies `h e_p` in the image for each finite `p∈S`; this proves full rank and finite index. The map onto its free image splits after finitely many basis lifts, yielding the claimed rank and torsion. Actual class-group and exact-sequence inputs were checked; no independent defect found, but the relevant supplier evidence is not freshly certified. |
| `ex-units-of-q-and-imaginary-quadratic-fields` | Norm `±1` characterizes units in the stated orders; the rational and imaginary quadratic norm equations and torsion/rank cases are handled directly. No independent defect found. |
| `ex-real-quadratic-units-and-pell` | The Pell-order norm criterion, odd exponent argument, `d=5` half-integer enumeration, and group/index comparisons are coherent. Step 4.1 was repaired as above; it no longer applies a Pell-order theorem to an element only known to lie in `O_K`. The monotonicity used is that `(t−1/t)/2` strictly increases for `t>0`; `w>1` and `u_d=w^n>w` establish the smaller first coordinate. No fresh receipt. |
| `ex-units-in-a-real-cubic-field` | The three real roots, norms of `α`, `α−1`, `α+1`, logarithmic vectors, two independent units, rank two, and finite-index conclusion are supported by the displayed calculations and rank theorem. The cited norm equations and sign branches were checked; no independent defect found. |
| `ex-regulator-of-a-real-quadratic-field` | For rank one the deleted-row regulator reduces to the positive logarithm of the chosen generator; the example's norm and fundamental-unit calculations match the doubled logarithmic convention. No independent defect found, conditional on the fundamental-unit and regulator definitions. |
| `ex-change-of-fundamental-units-preserves-regulator` | The example writes the new logarithm columns as an integer matrix change, checks its determinant is `±1`, and applies determinant multiplicativity. This convention is already consistent; no independent defect found. |
| `ex-s-units-of-q` | The valuation support outside `S`, the localization membership criterion, prime-exponent representation, uniqueness, and rank comparison with the S-unit theorem are consistent, including the empty set `S=∅`. No independent defect found, conditional on the S-unit supplier. |
| `cex-z-sqrt-d-units-need-not-equal-ok-units` | For `d=5`, `ε=(1+√5)/2` is a maximal-order unit outside `Z[√5]`; the Pell-order units are `±⟨ε³⟩`, the maximal-order units are `±⟨ε⟩`, and the subgroup index is 3. The calculations and the comparison of generators agree with the preceding example. No independent defect found. |

## Supplier evidence and exact unresolved points

The full-lattice proof consumes the batch-2 equality-case Minkowski supplier and
the unit-ideal instance of the ideal-lattice covolume theorem in step 2.2; it
also uses clause 1 of `thm-ring-of-integers-and-ideals-are-full-lattices` in
step 2.2 and `lem-finitely-many-number-field-ideals-of-bounded-norm` in step
5.2. The S-unit proof uses `thm-finiteness-of-the-number-field-class-group`
and its exact class-group interface in steps 1.3 and 2.1/3.1. The roots of
unity, Kronecker, and logarithmic-discreteness consumers use
`lem-bounded-conjugates-give-finitely-many-integral-polynomials`. These are the
six authored batch-2 supplier items. Each actual consumer use was checked
against its present proof text, rather than relying on the old scaffold-only
contracts.

The initial supplier audit found these proof/evidence issues. The active
batch-2 helper has since repaired the two draft proofs described below; the
batch-2 and batch-3 supplier-quote records still need the helper's final
synchronization and a stable-content recheck. They therefore do not yet
support fresh consumer receipts.

1. In the initially audited authored batch-2
   `thm-ring-of-integers-and-ideals-are-full-lattices`, step 1.2 writes
   `a/b=Σ_i(m_i/b)α_i` with `m_i∈Z`, then calls this a `Q`-span. The coefficients
   `m_i/b` lie in `K`; this equality gives a `K`-linear combination and does
   not prove membership in the `Q`-span. The later proof of `Q`-linear
   independence and the fact that there are `n=[K:Q]` elements can finish the
   intended basis theorem, but that displayed span step was missing. The
   active helper's current live proof removes the `a/b` claim: it uses the
   published rank-degree result to take a `Z`-basis of `O_K`, proves
   `Q`-independence by clearing denominators, and then uses its cardinality
   `n`. The current batch-2 derivation contract reflects this route. Treat the
   correction as in progress until that helper drains and all supplier quotes
   are reconciled; the old consumer receipts do not certify it.
2. At the initial supplier audit, the authored **draft**
   `def-minkowski-embedding-of-a-number-field` had two genuine defects: its
   Definition gave the complex-block Euclidean norm as `Σ_j |τ_j(x)|`, and its
   basis-independence assertion did not justify why a `Q`-basis maps to an
   `R`-basis. The first correct value is `sqrt(Σ_j |τ_j(x)|²)`; the second
   needs the determinant calculation, not injectivity alone. The active
   batch-2 helper is repairing this draft and its contract. In the current
   live item text, the Definition has the square-root formula, the injectivity
   remark explicitly says injectivity alone is insufficient, and the following
   determinant calculation proves the real-basis conclusion. The batch-2 and
   batch-3 contracts still contain the earlier norm quote. Hold those quote
   updates and supplier certification until the helper drains and the stable
   supplier revision is rechecked. This is a dated correction of the live
   status, not a denial of the original defects.
3. Root has completed and integrated the choice-free repair of published
   `thm-ring-of-integers-free-of-rank-degree`. Its current proof supplies a
   finite `Z`-basis of `O_K` by the trace-dual sandwich and an explicit
   finite-rank subgroup induction. This resolves the rank-degree supplier
   concern. The separate batch-2 lattice helper's draft proof/quote changes
   remain in flight, so root still holds ordinary Dirichlet receipts pending
   that helper's drain and stable consumer recheck.

The consumer `def-number-field-regulator` also retains the explanatory
real-independence omission noted above. This was not among the authorized item
edit targets, and no item outside the two authorized proofs was changed.

## Mechanical and workflow record

After canonical step renumbering and contract synchronization, the selected
checks were run on the two repaired items:

- `precheck.mts`: 2 checked, 0 failing.
- `proof-contract.mjs … --strict --items thm-number-field-regulator-is-well-defined,ex-real-quadratic-units-and-pell`: 2/2 checked, 0 errors, 0 warnings.
- `rendercheck.mjs`: both item files parse; no math wikilinks or unbalanced delimiters, KaTeX and YAML checks pass.
- The modified batch-3 manifest and contract JSON parse; both repaired IDs have matching entries and Pell has no stale `F8` citation.

No test suite or decision-receipt command was run. These are mechanical checks,
not proof acceptance. The historical author-pass report records older checks
and ordinary decisions; those predate the proof repairs and do not validate
the current batch-2 supplier revision.
Root separately normalized `justified_by: null` to `justified_by: []` in
`lem-roots-of-unity-in-a-number-field-are-finite`; the two repaired item files
were normalized the same way. These are metadata-only changes; they do not
change the proofs or refresh ordinary receipts. All 14 IDs and their existing
receipt files/promises are preserved.

## Supplier-status correction (2026-09-30)

The initial audit correctly identified the two Minkowski-definition defects in
the then-current batch-2 draft. The active batch-2 helper has since changed the
live draft's Definition to the square-root norm formula and made the
injectivity remark explicitly defer real independence to its determinant
calculation; that calculation supplies the missing justification. The item is
still `status: draft`; the batch-2 quote and the corresponding batch-3 full
lattice quote still contain the prior norm wording. This Dirichlet audit does
not edit the supplier or its contracts and does not certify the in-progress
revision. Keep the consumer receipts held until the helper drains and the
stable quote/text is rechecked.
