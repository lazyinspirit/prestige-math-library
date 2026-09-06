# frontier-31a — Alpha group f — Step 3 scaffold review

Group f covers batches 3, 16, and 17: the functional-analysis, PDE, and
differential-geometry A/B pairs. For each pair I read the current manifest,
coverage harvest, notes, governing design section, and current
research/plan-spec.json. I also reviewed the complete recorded source passages
needed for the load-bearing claims and the declared prerequisite closure.

## Verdicts

| Batch | A page | B page | Verdict |
| ---: | --- | --- | --- |
| 3 | geometric-hahn-banach-and-convex-separation | geometric-hahn-banach-and-convex-separation-examples | sufficient |
| 16 | quasilinear-characteristics-and-cauchy-kovalevskaya | quasilinear-characteristics-and-cauchy-kovalevskaya-examples | sufficient |
| 17 | the-exterior-derivative-and-cartan-calculus | the-exterior-derivative-and-cartan-calculus-examples | sufficient |

No owned A page is insufficient; consequently the machine verdict file has no
missing-result rows.

## Batch 3 — geometric Hahn–Banach and convex separation

The 19-item A page and 11-item B page implement FA-5 in
research/plan-functional-analysis-track.md:527-600, with the declared
predecessor the-analytic-hahn-banach-theorem-examples. The route is sufficient:
Minkowski gauge for an absorbing open convex neighbourhood of zero; real
dominated Hahn–Banach and real-part reconstruction over C; point/open,
closed/compact, and subspace separation; annihilator closure and density;
finite-dimensional and finite-codimensional complements; closed hyperplanes;
Mazur closure; then the c_0 subset ell-infinity Phillips companion route.

The source stack has enough coverage for those claims: Bühler–Salamon,
Functional Analysis, §§2.3.2–2.3.5, printed pp. 76–87
(https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf);
Teschl, §§5.1 and 5.3, printed pp. 137–148
(https://pdfcoffee.com/topics-in-real-and-functional-analysis-gerald-teschl-pdf-free.html);
Knapp, IV §5, printed pp. 125–128
(https://www.math.stonybrook.edu/~aknapp/download/a2-realanal-inside.pdf);
and Hajlasz, §10.5, printed pp. 94–98
(https://sites.pitt.edu/~hajlasz/Notatki/Functional%20Analysis2.pdf).

Authoring obligations remain explicit in the notes: use Re f over C, only form
the recovered gauge for an open convex set containing zero, retain the
nonempty and compact/closed hypotheses in strong separation, use the
closed-half-space consequence in the Mazur argument, and retain AC_omega in
the countable-family step of the Phillips construction. Positivity,
polar/bipolar and quotient-dual material, weak-star/Banach–Alaoglu/Goldstine,
and the unit-sphere example are correctly out of scope or routed to their
named later pages. Verdict: sufficient.

## Batch 16 — quasilinear characteristics and Cauchy–Kovalevskaya

The 23-item A page and 10-item B page implement PDE-2 in
research/plan-pde-track.md:567-627 and its addendum at :2975-3007. The current
plan and manifest declare three earlier predecessors:
partial-differential-equations-and-characteristics-examples,
euclidean-ordinary-differential-equations-with-smooth-dependence, and
inverse-and-implicit-function-theorems. The last was added during this review:
the local graph construction and its design explicitly use the inverse and
implicit theorems, so this is a necessary backward prerequisite correction.
It creates no page, forward edge, or reading-order change.

The route is sufficient: augmented characteristic ODE, initial rank and
inverse-projection graph, characteristic compatibility, Burgers caustics,
Charpit constraint/contact invariants and local reconstruction, followed by
the deliberately recorded-only analytic Cauchy–Kovalevskaya boundary. The
sources are Andersson, Sections 1–5 and Theorems 1–4/Lemmas 1–3, PDF pp. 1–23
(https://www.kth.se/social/files/560a55b6f276543ece51692f/Lectures_Method_of_Characteristics.pdf);
Ageno, §§2.3.1–2.4.2, PDF pp. 20–29, and §§5.3.1–5.3.3, pp. 81–85
(https://giacomoageno.github.io/LectureNotesAPDE.pdf); and Trinity MA342H,
PDF pp. 7–16 (https://www.maths.tcd.ie/~pete/pde2/part_1.pdf).

One false scaffold claim was corrected in the batch notes: the previous
heat-equation example took t=0 as a noncharacteristic surface, but Ageno
explicitly gives heat-equation time slices as characteristic. The current B
example instead puts u_tt = u_xx with analytic data u(0,x) = g_0(x) and
u_t(0,x) = g_1(x) into a valid second-order noncharacteristic normal form.
It checks hypotheses only; Cauchy–Kovalevskaya remains proved_here false,
dependency-free, and unavailable to later items. The stated regularity,
rank, [0,infinity] caustic convention, and parameter-Hessian condition for
the envelope remain required. Verdict: sufficient.

## Batch 17 — exterior derivative and Cartan calculus

The 40-item A page and 12-item B page implement DG-12 in
research/plan-differential-geometry-track.md:2966 onward. The three declared
earlier interfaces—vector-fields-flows-and-lie-derivatives,
distributions-integral-manifolds-and-the-frobenius-theorem, and
tensor-fields-exterior-algebra-and-differential-forms—supply the needed
forms, flows, brackets, distributions, annihilators, and local Frobenius
vocabulary.

The route is sufficient: invariant construction and tensoriality of d,
coordinate formula, graded derivation and d squared zero; local-flow Lie
derivative, Cartan's formula and commutators; the two-time,
time-dependent pullback formula including dot omega; then the Pfaffian
Frobenius criterion and its codimension-one form. The source stack is Lee,
Chapters 14 and 19, PDF pp. 380–390 and 510–513
(https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf); Merry,
Lectures 22–23, PDF pp. 182–192
(https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf);
and Hitchin, §§6.4–6.5, PDF pp. 42–48, with the §6.6 heading
(https://people.maths.ox.ac.uk/~joyce/Nairobi2019/Hitchin-DifferentiableManifolds.pdf).

The deliberate boundaries are sufficient: the angular-form global-potential
proof waits for its nonzero circle period on the integration/Stokes page;
de Rham quotients and homotopy methods wait for DG-15; Maurer–Cartan waits
for the Lie block. The existing notes also preserve the nowhere-zero condition
in codimension one, the inverse-time vector-field convention, the derivation
extension in Cartan's formula, and the nonproper-map condition in the compact
support counterexample. Verdict: sufficient.

## Scope-decision record

After refresh, research/frontier-31a-alpha-f-scope-decisions.json contained
32 current pending declines: 21 for batch 3, 6 for batch 16, and 5 for batch
17. Each was reviewed against the current manifest, coverage, notes, plan
closure, and controlling design, then resolved as stands with row-level
evidence. The result is 32 stands and zero owner-decision rows. Every deferred
destination is either the named existing later page or the explicitly
dependency-free recorded Cauchy–Kovalevskaya proof boundary; no retained claim
depends on a deferred result.

## Checks run

- node tools/manifest-deps.mjs on batches 3, 16, and 17: thirty, thirty-three, and fifty-two
  items respectively; 0 errors in each run.
- node tools/coverage-checklist.mjs --require-destination on all three
  coverage files: 202 harvested results, 0 errors, and one batch-3
  coverage-low-yield warning. Review of its 21 current decline rows found no
  missing retained premise: each is a deliberate scope boundary.
- node tools/content-policy.mjs --manifest-only on all three manifests:
  115 scoped items, 0 errors, 0 warnings.
- node tools/source-fetch-check.mjs --coverage on batches 3, 16, and 17:
  4/4, 3/3, and 3/3 source records fetch-verified.
- node tools/validate-plan.mjs research/plan-spec.json after the batch-16
  backward-edge correction: completed with declared order acyclic and
  consistent, and no item-level cycles, forward references, B-page
  dependencies, or unresolved ids among the itemized pages.
- node tools/scope-decisions.mjs check --run frontier-31a --group f:
  32 current declines, 0 errors.

There is no remaining group-f scaffold blocker. The next action is ordinary
authoring from these dependency-closed pairs.
