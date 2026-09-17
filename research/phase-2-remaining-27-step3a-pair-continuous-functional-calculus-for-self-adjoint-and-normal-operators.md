# Step 3a scope review — continuous functional calculus for self-adjoint and normal operators

- Run: `phase-2-remaining-27` (role: alpha, this pair only; batch 5)
- A page: `continuous-functional-calculus-for-self-adjoint-and-normal-operators`
  (plan order 288.083, `research/plan-spec.json` pages[510])
- B page: `continuous-functional-calculus-for-self-adjoint-and-normal-operators-examples`
  (plan order 288.084, pages[511])
- Scope decision: **sufficient** (recorded with `tools/step3-decisions.mjs`; receipt
  `research/phase-2-remaining-27-step3a-review-continuous-functional-calculus-for-self-adjoint-and-normal-operators.json`)
- Scope is judged here, not proof correctness. No scaffolds, plans or item
  contracts were edited.

## Evidence read

| Artifact | Use |
|---|---|
| `research/phase-2-remaining-27-batch-5.pages.json` | Current A inventory (26 items, in order) and B inventory (7 items, in order); page `requires` |
| `research/phase-2-remaining-27-batch-5.coverage.json` | Four fetch-verified source records with per-result dispositions for this page |
| `research/phase-2-remaining-27-batch-5.notes.md` | Scaffolder construction, ordering, choice, and cross-batch statements |
| `research/phase-2-remaining-27-batch-5.cross-batch-dependencies.json` | 26 reviewed rows for this page (1 page edge to FA-18, 25 item edges to batch-1/batch-4 suppliers) |
| `research/plan-functional-analysis-track.md` | Prose design §5 FA-19, lines 1465–1525; binding amendment §14.4, lines 3207–3213; §6 boundary rows, lines 1974–1975; §7 seam, lines 2037–2039; §8 choice ledger, line 2114 |
| `research/plan-spec.json` | Pages[510]/[511] identity, order, companion, exact `requires` |
| `research/phase-2-remaining-27-owner-authoring-direction.md` | Binding run direction; §14.4–14.5 of the FA track is the controlling inventory amendment |
| `research/phase-2-remaining-27-drift-evidence.json` | Design locations and closure for this page (175-page closure; no consumer outside FA-20/B) |
| `research/frontier-34-fa-prereqs-batch-6.pages.json` | Prior-run 26-item inventory; current scaffold is ID-for-ID and order-identical (no silent dropping) |
| Open copy of Bühler–Salamon, *Functional Analysis* | Independent confirmation of the Theorem 5.54 / 5.70 scope and axiom list (see "Limits" below) |

## Role in the library

The pair sits between FA-18 (Gelfand theory) and FA-20 (spectral measures/Borel
calculus). The A page's exact prerequisite is
`gelfand-theory-and-commutative-c-star-algebras`, matching plan-spec and the
owner direction; the B page requires only its A companion, as required. The
only in-run consumer of A items is the FA-20 A page
`spectral-measures-and-borel-functional-calculus`, which declares exactly:
`thm-continuous-functional-calculus-for-bounded-normal-operators` (in four
items), `thm-continuous-functional-calculus-properties` (in the PVM-construction
lemma). FA-21 remains a later planned page (empty inventory), and §7 records
only the expected logical order FA-19 → FA-20 → FA-21. The former PT-9
interface is now expressly redirected: plan §14.12 and
`plan-probability-track.md` (lines 243–247, 685) state PT-9 must not wait for
FA-19 and uses the published linear-algebra square root instead, so the
`rem-positive-square-root-and-covariance-matrices` remark is orientation only.

## Inventory against the prose design and the binding amendment

All 20 design items of §5 FA-19 (lines 1473–1508) are present, plus the five
helpers required by §14.4 (line 3207): B(H) as a C\*-algebra, polynomial
isometry, spectral permanence, character-space/spectrum homeomorphism, and
2-D numerical-range convexity. Mapping (design → scaffold):

1–2 spectra lemmas; 3 `thm-self-adjoint-norm-and-spectrum-extrema`; 4 order
definition; 5 `thm-positive-square-root` + covariance remark; 6 absolute
value; 7 polar decomposition; 8 self-adjoint calculus; 9 calculus properties;
10 generated C\*-algebra; 11 normal calculus; 12–13 norm/zero-spectrum
corollaries; 14 spectral mapping; 15 abstract spectral theorem; 16–17 partial
isometries; 18–20 numerical range/radius and Toeplitz–Hausdorff.

Ordering obligations of §14.4 hold: `lem-bounded-hilbert-operators-form-a-c-star-algebra`
is first (position 1 of 26); partial isometries (8–9) precede polar
decomposition (22); the polynomial isometry (12) precedes both calculi (13, 16)
and spectral permanence (14) precedes the normal calculus; the 2-D lemma (25)
precedes Toeplitz–Hausdorff (26). The design's proof plan is reflected in the
strategies: polynomial approximation + completeness for the self-adjoint
calculus, Gelfand/character homeomorphism for the normal calculus, no Borel or
holomorphic calculus in either, explicit uniqueness clauses, and positive
square root independent of Borel calculus. The B inventory is the design list
verbatim (diagonal, multiplication, matrix square root/absolute value, shift
polar decomposition, three counterexamples).

## Source coverage

The coverage record gives four independently fetched, hash-verified full
treatments for this page: Bühler–Salamon ch. 5 §§5.3–5.5 (Lemma 5.49,
Theorem 5.54, Definition 5.69, Theorem 5.70); Williams §§3–4 (B(H) as C\*,
spectral permanence, character identification, normal calculus, approximate
eigenvectors); Conway ch. IX §3 (positive square root, partial isometries,
Polar Decomposition 3.11); Shapiro §§3–6 (numerical radius, 2-D elliptical
range, Toeplitz–Hausdorff). Dispositions: 18 `included`, 2 `inline`
(polynomial isometry inside Theorem 5.54; the numerical-radius corollary
inside Corollary 4.11), 0 deferred or dropped. This covers the design's
"source backing read" content; the design's additional Teschl §6.2 and Müger
§§11.2/11.6–11.7 material is represented by these equivalent full treatments
(C\*-calculus, positivity, partial isometries, numerical range), and the failed
author-hosted Bühler–Salamon URL has a recorded recovery to a complete
university-hosted copy. No harvested result of this page lacks an item or an
explicit inline strategy.

I checked independently that the cited source really has this scope: an open
copy of Bühler–Salamon states Theorem 5.70 (continuous functional calculus for
bounded normal operators) with Product, Conjugation, Positive, Normalization,
Isometry, Commutative and Image axioms, Theorem 5.54 for the self-adjoint case,
and leaves the measurable calculus to §5.6 (FA-20). I also verified the one
concrete claim I use below: for `T = M_t` on `L^2[0,1]`, `W(T) = (0,1)`, so
convexity does not force closedness.

## Interface and boundary observations (not item approvals)

For the Step 3b author's attention; none of these makes the scope inadequate:

1. §6 (line 1975) says the possible non-closedness of the numerical range
   "remains explicit". The `thm-toeplitz-hausdorff` statement claims only
   convexity; the `M_t` example `W(T)=(0,1)` sits in its strategy. The author
   should keep that witness explicit in the proof or statement.
2. The commutant clause proved here is the `T`-and-`T*`-commuting form.
   Bühler–Salamon's Theorem 5.70 (Commutative) axiom uses `AB=BA` alone
   (Fuglede–Putnam strength); the scaffold deliberately does not claim it, and
   the FA-20 scaffold's Borel commutant strategy also says "do not invoke
   Fuglede". No current planned consumer needs the stronger form.
3. `cex-a-quasinilpotent-operator-need-not-be-zero` is titled "quasinilpotent"
   but its statement exhibits the 2×2 nilpotent Jordan block (which the design
   gloss calls a "Volterra/operator Jordan block"). Both claims are true; the
   author may want the title and statement to line up.
4. `thm-partial-isometry-characterizations` plans to define the orthogonal
   projection onto a closed subspace inline as a fallback; the run's batch-1
   FA-13 scaffold already carries `def-hilbert-orthogonal-projection` and
   `lem-orthogonal-projection-is-linear-self-adjoint-contractive`, so a real
   dependency is available if the author prefers not to re-derive it.
5. §8 (line 2114) labels the self-adjoint calculus "ZF relative to published
   approximation inputs", while the scaffold items conservatively declare AC
   through the Gelfand/spectral-radius route. The owner authorizes AC and no
   weaker branch is claimed as stronger; the author should simply keep the
   declared assumption and its exact uses consistent within the pair.

## Limits of this review

I did not re-fetch and re-read the full 452-page Bühler–Salamon PDF or the
other three PDFs; source records (URLs, hashes, page counts, per-result
dispositions) are the scaffolder's verified coverage, and my own independent
checks are the two stated above plus the standard mathematics of the subject.
Item-level proof correctness, dependency adequacy and choice accounting are
Step 3b/5 duties, not this decision. No owner scope receipt exists for this
pair yet, so this review is the current Step 3a decision.

## Decision

`sufficient`: the definitions, theorems, examples and counterexamples in the
current batch-5 scaffold cover the intended subject (positivity, square roots,
continuous calculus for self-adjoint and normal operators, the abstract bounded
normal spectral theorem, partial isometries/polar decomposition, numerical
range), match the binding FA-19 inventory and its order amendments, are backed
by four verified full treatments, and serve the pair's only in-run consumer
(FA-20) at the exact declared item IDs. No enrichment, merger or pair change is
requested.
