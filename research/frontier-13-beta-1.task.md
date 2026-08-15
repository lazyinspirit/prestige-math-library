## Batch 1 of run `frontier-13` — field theory over the splitting-field base

Two A/B pairs. You own all four pages, and you author them at step 5.

> **Orders in the prose scaffolds are STALE.** `research/plan-algebra-track.md`
> and `research/plan-algebra-track-expansion.md` quote pre-splice orders (54, 92,
> …). `research/plan-spec.json` is the only live source of `order`. Identify
> everything by **page id**; treat a quoted order in prose as a hint about
> position, never as an identifier.

### Pair A — symmetric polynomials

| | |
|---|---|
| A page | `symmetric-polynomials` · "Symmetric Polynomials and the Fundamental Theorem of Symmetric Functions" · category `abstract-algebra` · order **58** |
| B page | `symmetric-polynomials-examples` · order **59** |
| requires | `splitting-fields` (order 56, published) |
| prose scaffold | `research/plan-algebra-track.md` §II.3, block `AA-14`; `research/plan-algebra-track-expansion.md` line ~190 |

Elementary symmetric polynomials, the monomial ordering and lexicographic
induction, **the fundamental theorem of symmetric polynomials** (every symmetric
polynomial is uniquely a polynomial in the elementary ones), Vieta's formulas
tying roots to coefficients, power sums and **Newton's identities**, the
discriminant, and the resultant if you can close it honestly here. The
uniqueness half of the fundamental theorem is as important as existence — do not
ship existence alone.

### Pair B — algebraic extensions and finite fields

| | |
|---|---|
| A page | `algebraic-extensions-degree-and-finite-fields` · "Algebraic Extensions, the Degree of an Extension, and Finite Fields" · category `abstract-algebra` · order **96** |
| B page | `algebraic-extensions-degree-and-finite-fields-examples` · order **97** |
| requires | `splitting-fields` (56), `linear-independence-bases-and-dimension` (published) |
| prose scaffold | `research/plan-algebra-track.md` §II.4, block `AA-15`; `research/plan-algebra-track-expansion.md` line ~210 |

`[K:F]`, the **tower law**, algebraic and transcendental elements, the minimal
polynomial of an element and `F(α) ≅ F[x]/(m_α)`, finite extensions are
algebraic, algebraic closure of `F` in `K`, and then **finite fields**:
existence and uniqueness of `𝔽_{p^n}`, the Frobenius endomorphism, the subfield
lattice, and cyclicity of the multiplicative group `𝔽_q^×`.

That last result is the one to get exactly right — it is a real theorem with a
real proof (via the number of solutions of `x^d = 1` in a field, or via the
structure of finite abelian groups, which **is** published as
`the-structure-of-finite-abelian-groups`). Open that page and decide which route
you can close cleanly, then say in your notes which you chose and why.

This page is broad. `plan-algebra-track.md` sizes it A 30 / B 16; if your harvest
pushes the A page past **60 items**, propose a split in your notes at step 2 —
the natural cut is algebraic extensions and degree on one page, finite fields on
another. Propose it early; after authoring it is a rewrite.

### The hard constraint between your two pairs

`algebraic-extensions-degree-and-finite-fields` does **not** declare
`symmetric-polynomials` in its `requires`, and neither is in the other's closure.
So **no item on either page may depend on an item on the other** —
`validate-plan` fails it as `undeclared-prereq`. They share a Beta for source
economy, not for citation freedom.

If while scaffolding you conclude one genuinely needs the other, do not work
around it and do not edit `plan-spec.json`. **Record it in your notes as a
recommendation**, name the exact result that needs it, and the orchestrator will
decide at step 3 whether to add the `requires` edge. That is a legal and expected
outcome — just not yours to apply.
