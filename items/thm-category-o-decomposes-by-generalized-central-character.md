---
id: "thm-category-o-decomposes-by-generalized-central-character"
kind: "theorem"
title: "Generalized central-character decomposition of O"
deps: ["lem-generalized-central-character-submodules-are-direct-summands"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "§6 Theorem 6.2(1), pp.9–10"
      url: "https://math.jhu.edu/~sakellar/automorphic-files/vermamodules.pdf"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
status: "draft"
origin: "pipeline"
proof_strategy: "Central idempotents commute with maps; use a common finite image algebra for a short exact sequence to prove exactness componentwise"
---

## Statement

Fix a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra $\mathfrak h$, and a positive Borel $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$. Write $Q^+=\sum_i\mathbb Z_{\geq0}\alpha_i$, $\mu\leq\lambda$ when $\lambda-\mu\in Q^+$, and $w\cdot\lambda=w(\lambda+\rho)-\rho$.

The category is the categorical direct sum $\mathcal O=\bigoplus_\chi\mathcal O_\chi$: objects have finite support in the index $\chi$, morphisms between distinct components vanish, and the canonical component projections are exact.

## Facts & Assumptions

**Given:** The setting above and the hypotheses in the statement.

[F1] Fix a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra $\mathfrak h$, and a positive Borel $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$. Write $Q^+=\sum_i\mathbb Z_{\geq0}\alpha_i$, $\mu\leq\lambda$ when $\lambda-\mu\in Q^+$, and $w\cdot\lambda=w(\lambda+\rho)-\rho$. Every $M\in\mathcal O$ decomposes canonically into finitely many nonzero generalized central-character submodules: $$M=\bigoplus_\chi M_\chi.$$ For each summand there is a single $N\geq1$ such that $\mathfrak m_\chi^NM_\chi=0$. The decomposition of zero is empty. ([[lem-generalized-central-character-submodules-are-direct-summands]])

## Proof

1.1 Use the finite intrinsic decomposition of each object. If $f:M\to N$ is a module map, $\mathfrak m_\chi^Nv=0$ implies $\mathfrak m_\chi^Nf(v)=0$, so $f(M_\chi)\subset N_\chi$. Consequently all off-diagonal components of a map vanish, and maps between objects decompose uniquely into their same-character components. [F1]

2.1 For an exact sequence $0\to A\to B\to C\to0$, the image and kernel equalities restrict to each character. In particular, to lift $c\in C_\chi$, lift it to $b\in B$ and decompose $b=\sum_\psi b_\psi$. Preservation of characters and the direct decomposition of $C$ imply that $b_\chi$ maps to $c$. This proves surjectivity and hence exactness of every projection. [F1, algebra, step 1.1]

3.1 The functor taking a finitely supported family to its direct sum and the functor $M\mapsto(M_\chi)_\chi$ are inverse up to the canonical isomorphisms. An empty family gives zero, and a single nonzero component is fixed by its projection. [F1, algebra, step 2.1] ∎
