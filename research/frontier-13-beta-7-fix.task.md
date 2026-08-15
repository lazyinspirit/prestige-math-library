## Batch 7 fix task — `linear-recurrences-and-rational-generating-functions` (195)

Alpha verdict: **insufficient**. No split (32 items, 34 after these additions,
against a 60 ceiling — ruled by name).

### F7.1 — a Statement that claims more than its proof gives (must fix)

`cor-cayley-hamilton-recurrences-for-matrix-powers` **drops both hypotheses its
source carries.** Waldschmidt slide 18 states it for $A\in GL_d(K)$ — nonzero
determinant — and your own recurrence definition needs $c_d\ne 0$, which is
$\pm\det A$. **A nilpotent $A$ falsifies the unqualified title.**

A title or Statement asserting more than the proof gives is a **fatal** class at
step 6, and the paired judges read Statements and cannot see a false title. Fix it
here, where it costs a scaffold edit.

Second defect in the same item: the cited `thm-cayley-hamilton` is **field-only**,
while this item sits on a page working over a commutative ring. Either restrict
the item to fields, or cite a commutative-ring Cayley–Hamilton and check it exists
before relying on it.

### F7.2 — R7.1 has been applied to the spec; use it

`prop-reciprocity-for-biinfinite-linear-recurrences` states its conclusion in
$K(x)$, which order 195 could not reach. Stanley appends a **Note** saying the
identity is precisely an equality of *rational functions*, not of power series —
so the fix is to reach $K(x)$ honestly, not to restate the conclusion.

The orchestrator added **`the-field-of-fractions-and-localisation` (order 53.2,
published)** to this page's `requires` on Alpha's recommendation. Verified: 0 seams
across all 11 run pairs, closure 42 → 43, `validate-plan` exit 0. Restate the
proposition in $K(x)$ with that page cited. Do not edit `plan-spec.json`.

### F7.3 — a result inside a declared range with no disposition row

**Stanley Ex 4.7.5** sits inside your stated Stanley range and has no coverage
row. `coverage-checklist.mjs` cannot catch this — it verifies the rows you wrote,
not the headings you skipped. Re-walk your Stanley range and add every heading you
passed over.

### F7.4 — proof-contract citations

20 of your 37 contracts have an empty `citations` array. Populate them: the exact
cited source clause and the steps using each fact. Batches 1 and 2 populated all
of theirs at scaffold time and are the standard.

### Confirmed — leave alone

- **D7.1 stands.** The orchestrator verified the four adjugate ids are published,
  homed on `the-determinant-of-a-linear-operator`, and that page is in your
  closure (via the order-86 eigenvalue page). Reuse rather than re-minting is
  correct.
- **D7.2 stands.** `CB-15` resolves to no page id in a 1176-page spec; carrying it
  as a planning note only is right.
- Every locator Alpha could open verified — Stanley, Sagan, Waldschmidt,
  Gallier–Quaintance all check out at their stated pages, and **134 of 134
  published-citation quotes across this group match their item files verbatim.**
- Your Stanley eigenvalue decline stands, but make the row accurate: the spectral
  theorem is `inner-product-spaces-and-orthogonality` at order **94**, *below* 195
  — it is not out of scope, it is simply not in this pair's declared closure. Say
  that.
