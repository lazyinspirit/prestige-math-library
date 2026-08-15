## Batch 3 of run `frontier-13` — linear algebra: minimal polynomials and inner products

Two A/B pairs. You own all four pages, and you author them at step 5.

> **Orders in the prose scaffolds are STALE.** `research/plan-algebra-track.md`
> and `research/plan-algebra-track-expansion.md` quote pre-splice orders (84, 90,
> …). `research/plan-spec.json` is the only live source of `order`. Identify
> everything by **page id**.

### Pair A — diagonalisation and the minimal polynomial

| | |
|---|---|
| A page | `diagonalisation-and-the-minimal-polynomial` · "Diagonalisation and the Minimal Polynomial" · category `linear-algebra` · order **88** |
| B page | `diagonalisation-and-the-minimal-polynomial-examples` · order **89** |
| requires | `eigenvalues-eigenvectors-and-the-characteristic-polynomial`, `euclidean-domains-pids-and-unique-factorisation` (both published) |
| prose scaffold | `research/plan-algebra-track.md` §II.5, block `LA-9`; `research/plan-algebra-track-expansion.md` line ~206 |

Diagonalisability, the **minimal polynomial** as the monic generator of the
annihilator ideal of the operator (this is why `euclidean-domains-pids-and-unique-factorisation`
is a prerequisite — say so in the proof rather than asserting the generator
exists), `μ ∣ χ` and the shared irreducible factors, **Cayley–Hamilton**,
eigenspaces and the direct-sum criterion, **diagonalisable iff `μ` splits into
distinct linear factors**, simultaneous diagonalisation of commuting operators,
the primary decomposition theorem, and generalised eigenspaces to the extent you
can close them here without pre-empting Jordan form (which is a separate planned
page, `triangularisation-and-jordan-canonical-form` — do not build it).

Cayley–Hamilton is the classic place for a bogus proof ("substitute `A` into
`det(xI − A)`"). Write a correct one — adjugate identity over `F[x]`, or the
density/algebraic-closure argument stated with its hypotheses intact — and record
in your notes which route you took and the source for it.

### Pair B — inner product spaces and orthogonality

| | |
|---|---|
| A page | `inner-product-spaces-and-orthogonality` · "Inner Product Spaces, Gram-Schmidt, Projections and Adjoints" · category `linear-algebra` · order **94** |
| B page | `inner-product-spaces-and-orthogonality-examples` · order **95** |
| requires | `dual-spaces-bilinear-forms-and-inertia`, `roots-and-rational-powers`, `field-extensions-and-the-complex-numbers` (all published) |
| prose scaffold | `research/plan-algebra-track-expansion.md` line ~209 |

**Real and complex inner products** with the conjugate-symmetry convention stated
explicitly (and the linear-in-which-argument convention recorded as a convention
choice in your notes — sources disagree and the disagreement must be recorded,
not silently resolved), the induced norm, **Cauchy–Schwarz** and the triangle
inequality, orthogonality and orthonormal sets, **Gram–Schmidt**, existence of
orthonormal bases in finite dimension, `V = W ⊕ W^⊥`, **orthogonal projection**
and its characterisation as the nearest point, Bessel's inequality and Parseval
in finite dimension, the Riesz representation theorem in finite dimension, and
**the adjoint** `T*` with its basic algebra (`(ST)* = T*S*`, `T** = T`,
`ker T* = (im T)^⊥`).

`research/plan-algebra-track-expansion.md` line ~445 records that a later
representation-theory page pins **the inner product on class functions** to
*this* page's definition. So the definition you write here is load-bearing for a
track that does not exist yet: make it the standard one, conjugate-symmetric and
positive definite, and do not invent a variant.

Do **not** reach into analysis: completeness, Hilbert spaces and infinite
orthonormal bases belong to the functional-analysis track and are out of scope.
`plan-algebra-track-expansion.md` line ~310 records that this page names no
analysis page above it.

### The hard constraint between your two pairs

`inner-product-spaces-and-orthogonality` does **not** declare
`diagonalisation-and-the-minimal-polynomial` in its `requires`, and neither is in
the other's closure. So **no item on either page may depend on an item on the
other** — `validate-plan` fails it as `undeclared-prereq`.

This bites in one specific place: the **spectral theorem** wants both. It is a
separate planned page (`the-spectral-theorem-and-singular-value-decomposition`)
and is **not yours to build** — it is downstream of both of your pairs plus two
others. Do not anticipate it on either page.

If you conclude one pair genuinely needs the other, **record it in your notes as
a recommendation** naming the exact result; the orchestrator decides at step 3.
Do not work around it, and do not edit `plan-spec.json`.
