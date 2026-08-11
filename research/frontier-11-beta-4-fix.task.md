# frontier-11, batch 4 — step-3 fixes

You are **Beta-frontier-11-4**. Artifacts: `research/frontier-11-batch-4.*`.

Read `research/frontier-11-alpha-step3-scaffold-review.md` **§7** and **§8**.

## `the-determinant-of-a-linear-operator` (84) — INSUFFICIENT — §7

- **D1, D2** — §7 names both. D2 is the **alternating top-form
  characterisation**: the basis-free statement that the determinant is the scalar
  by which the operator acts on alternating top-degree forms. Scaffold it only as
  far as you can honestly state and prove from what the library has — if the
  exterior-algebra machinery is not there, §7 tells you what the honest version
  is. Do not state a characterisation you cannot prove.
- **Two B-page boundary items** — your B page is 6 items against an 18-item A
  page.
- **R-D** — add a **commutative-ring** source to the harvest. Cramer's rule and
  the adjugate behave differently over a ring than over a field, and the pair's
  present sourcing does not carry that distinction. Record the exact range and
  enumerate that source's own headings.

Your recommendations D6 (build the missing cofactor/Laplace/adjugate/Cramer
machinery locally, since order 82 genuinely lacks it) and D7 (the rank-one route
to similarity-equivariance, avoiding the nonexistent fraction field) were both
**approved**. Keep them. Per Alpha §0, do not build a field of fractions.

## `the-integral-logarithm-and-its-characterisations` (178.1) — SUFFICIENT — §8

Read §8; change nothing unless it names something. This pair is an **owner
standing scope obligation** and your scaffold closes all three required gaps —
the integral-first `L(x) := \int_1^x dt/t` developed with no `exp` in its proofs,
the functional-equation characterisation, and the equivalence theorem with its
roadmap remark. Preserve that structure exactly; in particular keep the
identification to the **single** citation of `thm-exponential-ivp-uniqueness`.

Your D8 substitution — citing `thm-log-one-plus-x-power-series` on the A page
instead of the published B-page example — was approved and stands.
