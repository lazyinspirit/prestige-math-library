---
id: def-simple-reflections-and-the-kac-moody-weyl-group
kind: definition
title: "Simple reflections and the kac moody weyl group"
status: draft
origin: pipeline
deps: ["def-realization-of-a-generalized-cartan-matrix", "def-kac-moody-root-lattice-height-and-positive-cone"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Kleshchev, Lectures on Infinite Dimensional Lie Algebras — §3.2, pp.39–42"
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
---

## Definition

For a minimal realization, put $s_i(\lambda)=\lambda-\lambda(h_i)\alpha_i$ on $\mathfrak h^*$. The **Weyl group** is $W=\langle s_1,\ldots,s_n\rangle\subset\operatorname{GL}(\mathfrak h^*)$. Its dual action is $s_i(h)=h-\alpha_i(h)h_i$.

By [[def-realization-of-a-generalized-cartan-matrix]], $\alpha_i(h_i)=2$. Hence $(s_i\lambda)(h_i)=-\lambda(h_i)$ and $s_i^2\lambda=\lambda$. Furthermore $s_i\alpha_j=\alpha_j-a_{ij}\alpha_i$, so $s_i$ preserves the lattice in [[def-kac-moody-root-lattice-height-and-positive-cone]]. The two actions are dual since $\lambda(s_ih)=(s_i\lambda)(h)$. This definition requires neither a finite group nor a Coxeter presentation.

## Sources

Source comparison: [Kleshchev](https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf), §3.2, pp.39–42.
