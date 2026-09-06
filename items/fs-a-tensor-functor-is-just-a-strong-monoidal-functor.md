---
id: fs-a-tensor-functor-is-just-a-strong-monoidal-functor
kind: false-statement
title: "A tensor functor is just a strong monoidal functor"
status: published
origin: pipeline
deps: [def-tensor-functor-between-tensor-categories, def-lax-strong-and-strict-monoidal-functor]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Etingof, Gelaki, Nikshych, Ostrik, Tensor Categories, Definition 4.2.5"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Statement

**False claim.** A tensor functor is just a strong monoidal functor.

## Facts & Assumptions

**Given:** The two conventions.

[F1] Strong monoidal means that the tensor and unit comparison maps are isomorphisms ([[def-lax-strong-and-strict-monoidal-functor]]).

[F2] A tensor functor is also $k$-linear, exact, and faithful ([[def-tensor-functor-between-tensor-categories]]).

## Refutation

**Proof technique:** direct.

1.1 Over $k=\mathbb C$, send a finite-dimensional vector space $V$ to its conjugate vector space $\overline V$ and a linear map to the same underlying additive map.  The canonical maps $\overline V\otimes\overline W\cong \overline{V\otimes W}$ and $\mathbb C\cong\overline{\mathbb C}$ make this a strong monoidal endofunctor of $\mathbf{Vect}^{\mathrm{fd}}_{\mathbb C}$. [F1, construct]

2.1 It is not $\mathbb C$-linear on hom-spaces: for a nonreal scalar $\lambda$, the images of $\lambda f$ and of $\lambda\,F(f)$ differ.  Hence it fails the $k$-linearity required by [F2], so a strong monoidal functor need not be a tensor functor under this convention. [step 1.1, F2] ∎
