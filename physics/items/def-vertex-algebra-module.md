---
id: def-vertex-algebra-module
kind: definition
title: Module for an ordinary vertex algebra
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-formal-distribution-on-a-vector-space
  - def-vertex-algebra-state-field
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: Yi-Zhi Huang, James Lepowsky, and Lin Zhang, Logarithmic Tensor Category Theory for Generalized Modules for a Conformal Vertex Algebra, I, Definition 2.9
      url: https://arxiv.org/pdf/1012.4193
      locator: "Definition 2.9, specifically the lower-truncation, vacuum, and module-Jacobi clauses; its additional conformal grading and Virasoro conditions are not imposed in this underlying vertex-algebra module definition."
    - title: Tomoyuki Arakawa and Anne Moreau, Arc Spaces and Vertex Algebras
      url: https://www.imo.universite-paris-saclay.fr/~anne.moreau/Arc_space-vertex_algebras-BOOK_version.pdf
      locator: "Section 2.9, especially Definition 2.6 and Lemma 2.8 (modules over vertex algebras)."
---

## Definition

Let $V$ be a vertex algebra over $\mathbb C$ in the ordinary, non-super convention of [[def-vertex-algebra-state-field]]. A **left $V$-module** is a complex vector space $M$ and a linear map
$$
Y_M(-,z):V\longrightarrow \{\text{formal fields on }M\},\qquad a\longmapsto Y_M(a,z)=\sum_{n\in\mathbb Z}a^M_{(n)}z^{-n-1},
$$
with the following properties:

1. **Lower truncation.** For every $a\in V$ and $m\in M$, $a^M_{(n)}m=0$ for all sufficiently large integers $n$, so $Y_M(a,z)m\in M((z))$ in the support convention of [[def-formal-distribution-on-a-vector-space]].

2. **Vacuum.** $Y_M(\mathbf1,z)=\operatorname{id}_M$.

3. **Module Jacobi identity.** For every $a,b\in V$,
$$
z_0^{-1}\delta\!\left(\frac{z_1-z_2}{z_0}\right)Y_M(a,z_1)Y_M(b,z_2)-z_0^{-1}\delta\!\left(\frac{z_2-z_1}{-z_0}\right)Y_M(b,z_2)Y_M(a,z_1)=z_2^{-1}\delta\!\left(\frac{z_1-z_0}{z_2}\right)Y_M(Y(a,z_0)b,z_2).
$$
Here $\delta(x)=\sum_{r\in\mathbb Z}x^r$; the first expansion is in nonnegative powers of $z_2$, the second in nonnegative powers of $z_1$, and the right-hand expansion is in nonnegative powers of $z_0$. They use the formal binomial conventions of [[def-formal-distribution-on-a-vector-space]]. The $Y$ inside the right-hand side is the state-field map of $V$; it is not the action map $Y_M$.

A **$V$-module homomorphism** $f:M\to N$ is a linear map such that $fY_M(a,z)=Y_N(a,z)f$ for every $a\in V$. This definition does not impose a conformal grading, finite-dimensional weight spaces, semisimplicity of $L_0$, a right-module convention, or a twist by an automorphism. For a conformal vertex algebra, write $Y_M(\omega,z)=\sum_{n\in\mathbb Z}L_M(n)z^{-n-2}$ when a conformal vector $\omega$ is specified.

A **$V$-submodule** of $M$ is a linear subspace stable under every mode $a^M_{(n)}$. A module is **simple** (or **irreducible**) if it is nonzero and has no proper nonzero $V$-submodule. A module is **completely reducible** (or **semisimple**) if it is an internal direct sum of simple $V$-submodules; the empty direct sum is the zero module.
