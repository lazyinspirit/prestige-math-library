---
id: def-kac-moody-verma-module
kind: definition
title: "Kac moody verma module"
status: published
verification:
  audited: 2026-09-10
origin: pipeline
deps: ["def-kac-moody-category-o", "lem-pbw-for-countably-presented-kac-moody-lie-algebras", "def-universal-enveloping-algebra-as-a-tensor-quotient"]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Kleshchev, Lectures on Infinite Dimensional Lie Algebras — §9.1, pp.116–117; local countable PBW verification"
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
---

## Definition

For $\lambda\in\mathfrak h^*$ let $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$ and let $\mathbb C_\lambda$ be the one-dimensional $\mathfrak b$-module with $hv=\lambda(h)v$ and $\mathfrak n^+v=0$. Define $M_A(\lambda)=U(\mathfrak g)\otimes_{U(\mathfrak b)}\mathbb C_\lambda$. Define $\widetilde M(\lambda)$ in the same way for $\widetilde{\mathfrak g}$ and its positive Borel.

The tensor quotient is [[def-universal-enveloping-algebra-as-a-tensor-quotient]]. Order a homogeneous negative basis, then a Cartan basis, then a positive basis. [[lem-pbw-for-countably-presented-kac-moody-lie-algebras]] makes multiplication $U(\mathfrak n^-)\otimes U(\mathfrak b)\to U(\mathfrak g)$ a vector-space isomorphism and a right $U(\mathfrak b)$-module isomorphism. Tensoring gives $M_A(\lambda)\cong U(\mathfrak n^-)$, with $1\otimes1$ corresponding to 1. The same reasoning gives $\widetilde M(\lambda)\cong U(\widetilde{\mathfrak n}^-)$. Thus the top space has dimension one, and all other weights are $\lambda-\beta$ for $\beta\in Q^+\setminus\{0\}$. At a fixed height there are finitely many monomials: only finitely many root degrees and basis elements of height at most that height can occur, with bounded exponents. Hence $M_A(\lambda)$ belongs to [[def-kac-moody-category-o]]. The module $\widetilde M(\lambda)$ has the same finite-weight-space and downward-cone properties as a $\widetilde{\mathfrak g}$-module; no factorization of its action through $\mathfrak g(A)$ is asserted. Mapping $u\otimes1\mapsto uv$ gives the unique module map to any module with a specified highest vector $v$ of weight $\lambda$, because the tensor relations hold for that vector.

## Sources

Source comparison: [Kleshchev](https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf), §9.1, pp.116–117; local countable PBW verification.
