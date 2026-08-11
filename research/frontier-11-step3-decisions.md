# frontier-11 — Step 3 decisions

Orchestrator adjudication of Beta recommendations. `CLAUDE.md`: the orchestrator
verifies each recommendation **from disk** and approves or declines using best
judgment. Priority order: (1) mathematical accuracy and correct dependency
citation, non-negotiable; then (2) minimize forward references; then (3) preserve
mathematical richness. Anything touching published content, ids or reading order
is escalated to the owner rather than decided here.

---

## D1 — batch 1 — ℂ is defined on a page order 54 cannot legally cite

**OWNER DECISION, 2026-08-11. Approved: relocate.**

**Finding, verified from disk.** `field-extensions-and-the-complex-numbers`
(order 54, abstract-algebra, level 19) is planned to construct ℂ. But
`def-complex-numbers-and-arithmetic`, `thm-complex-numbers-form-a-field`,
`def-complex-conjugate-real-imaginary-part-and-modulus` and
`lem-complex-conjugation-and-modulus-laws` are all `status: published` and all
live on `the-complex-exponential-and-eulers-formula` (order 189, real-analysis,
level 23). A level-19 page cannot cite a level-23 page, so order 54 had no legal
route to the existing definition. Beta-1 resolved it by claiming the four ids for
order 54, which would hard-fail the step-4 splice on id clash.

**Why this was not the orchestrator's call.** The fix moves published items
between published pages and changes reading order. `CLAUDE.md` reserves id
changes and reading-order changes to the owner, and the narrow
published-dependency repair delegation does not reach it: that delegation is for
an *unambiguous falsehood*, and order 189 is not false — it is merely the wrong
home for the construction.

**Blast radius, measured before escalating.** 20 published items cite at least
one of the four ids. Under relocation the **ids do not change**, so all 20
citations continue to resolve; `deps` edges are untouched. Order 189 goes from 32
items to 28. Adding `field-extensions-and-the-complex-numbers` to its `requires`
introduces no cycle, since level 19 sits below level 23 and does not raise
level(189).

**Approved action, to be applied at step 4.**

1. Move the four items to `field-extensions-and-the-complex-numbers`, ids
   unchanged. No `aliases` entry is needed because no id is renamed.
2. Add `field-extensions-and-the-complex-numbers` to order 189's `requires`;
   order 189 begins at polar/exponential material and defines ℂ no second time.
3. Take a dedicated `touchlog.mjs` baseline **before** the first edit, then run
   `impact-audit.mjs` from it and resolve every logical and direct-citation
   consumer before the level continues.
4. The four relocated items are published text moving to a new page, not new
   drafts. Their existing `verification` blocks and component provenance travel
   with them; nothing is retro-tagged and no provenance is fabricated.
5. Re-run `validate-plan.mjs` and `depcheck` after the move: order 54's item list
   grows to 16 including the four, and order 189's drops to 28.

## D2 — batch 1 — add `roots-and-rational-powers` to order 54's `requires`

**Approved (orchestrator).** Verified from disk: the modulus and complex
square-root items genuinely use published existence/uniqueness of nonnegative
real square roots and the associated order lemmas. Priority 1 governs — an
actually-used dependency is declared, not hidden inside "elementary algebra".
Adding it does not raise level(54) above 19.

## D3 — batch 1 — declines to re-examine at Alpha's step-3 review

Not overturned here, but routed to Alpha as named challenges rather than left
silent:

- **Simple transcendental extensions / `F(x)`** (`out-of-scope`, twice: Judson
  Thm 21.9 and Milne Ex. 1.24). The stated reason is that a field-of-fractions
  construction for `F[x]` is not built. Under the 2026-08-11 build-the-machinery
  rule a missing construction is normally something to build, and the library
  already carries `ex-rational-function-field-order`. Alpha is to rule on whether
  this is genuinely another page's topic or a decline that should have been a
  build. **Beta declared this its only whole-subject omission.**
- **Composite of two subfields** (`deferred` to `splitting-fields`, order 56).
  Plausible on its face — composites are a multi-generator construction and 56 is
  the next page — but it is a decline against a page in this same build's
  downstream, so Alpha should confirm the receiving page will actually carry it.

The remaining six declines are historical narrative, repeated numerical examples,
and polar form (which genuinely needs the later trigonometric development).
Those are accepted without challenge.

## D4 — batch 2 — the three integration-theory declines

**Approved (orchestrator).** The Lebesgue FTC for absolutely continuous
functions, Banach–Zarecki, and the full Henstock–Kurzweil FTC are declined as
`deferred`. Verified: each needs a whole integration theory the reading order has
not reached — Lebesgue measure and a.e. representation, Luzin property N and
measure-theoretic BV, gauge partitions respectively. That is the *licensed* use
of `deferred` under the 2026-08-11 rule, which reserves it for "a whole subject
area the library has not reached", and is not a missing-lemma excuse. Beta's own
phrasing is correct: "No retained result was declined for want of a constructible
lemma."

## D5 — batch 2 — thin FTC page, routed to Alpha, NOT approved here

**Escalated to Alpha's step-3 breadth review.** `the-fundamental-theorems-of-calculus`
scaffolds **8 A items** because 14 harvested headings resolved to
`already-published` on order 161 `properties-of-the-integral-and-the-working-ftc`.
The consequence is that a page titled *The Fundamental Theorems of Calculus*
states neither fundamental theorem, holding only refinements — a.e.
differentiability, Newton–Leibniz with interior derivative, one-sided FTC,
differentiation under the integral, and the Riemann–Stieltjes forms.

This is a genuine editorial question, not a mechanical one, and it is exactly
what the step-3 review exists to settle. Alpha decides whether the page is
`sufficient` as a refinements page, or must restate the two theorems it is named
for. The orchestrator does not pre-empt it. Note `arc-length-and-rectifiable-curves`
is also the one pair in the run with **no textbook** among its sources (two
`lecture-notes`, one `course-notes`) — legal under the harvest rule, but the
thinnest backing in the run, and worth Alpha's attention alongside its 13 items.

## D6 — batch 4 — local cofactor/adjugate machinery at order 84

**Approved (orchestrator), and the dispatch brief was wrong.** The batch-4
dispatch asserted that `determinants-of-matrices-over-a-commutative-ring` (order
82) "already owns the matrix determinant, multiplicativity, expansion and the
adjugate". Beta inspected the published page item by item and found it owns the
Leibniz determinant, alternation, multiplicativity, elementary-row effects,
triangular determinants and similarity invariance — but **no minor, cofactor,
Laplace-expansion, adjugate, adjugate-identity or Cramer's-rule item**. Building
them locally is therefore required, not duplication; declining would leave the
operator adjugate and Cramer's rule resting on nonexistent dependencies. The
error was mine and is recorded rather than quietly dropped.

## D7 — batch 4 — rank-one route to adjugate similarity-equivariance

**Approved (orchestrator).** The natural proof of `adj(AB) = adj(B)adj(A)` for
singular factors runs through a rational-function field, and no fraction-field
construction exists at this point in the reading order — the same gap D3 raises
for batch 1. Beta instead proves a rank-one update identity from column
multilinearity and compares `det(P^{-1}AP + uv^T)` two ways. Retaining
`lem-determinant-rank-one-update-over-a-commutative-ring` and
`thm-adjugate-is-equivariant-under-similarity` is what makes
`def-adjugate-of-a-linear-operator` known to be basis-independent.

## D8 — batch 4 — RA-27b's B-page citation replaced by its A-page source

**Approved (orchestrator).** RA-27b's design asks the new companion to relate
`log 2` to `ex-alternating-harmonic-series-sums-to-log-two`, but that id lives on
the B page `the-logarithm-and-general-powers-examples`, and the B-page leaf rule
forbids a B page becoming a formal dependency. Beta cites the A-page theorem
`thm-log-one-plus-x-power-series` and proves the `x = 1` specialisation directly.
Approving this keeps the page contract intact; the older example may still be
mentioned in reader-facing prose without becoming a proof dependency. **This is a
deviation from the letter of the owner's RA-27b design, made to satisfy a
structural rule the design did not anticipate, and is flagged for the step-10
report.**

## D9 — batch 5 — prose-scaffold amendments, including one false plan clause

**Approved (orchestrator) for Alpha to apply at step 4.** Beta proposed no edit
itself. The substantive item: the CT-2 clause asserting that `Nat(F,G)` is a set
for arbitrary functors between locally small categories is **false as written**,
and Beta correctly declined either to scaffold it or to assert a global
counterexample it could not prove from available size machinery — the right call
under the generated-claim rule. It becomes a Remark distinguishing the
representable case, where the Yoneda bijection proves sethood, from the general
one. Also approved: stating the objectwise Yoneda assignment for a locally small
`C` without silently forming a large-source functor category, and reserving "full
embedding" for when injectivity on objects actually holds.

Beta also noted the prose scaffold's heading still reads order 289 for this pair
while `plan-spec.json` has 361/362. **`plan-spec.json` is the machine authority**
and no prose renumbering is required — consistent with the standing rule that
`order` is not stable and must never be quoted from memory.
