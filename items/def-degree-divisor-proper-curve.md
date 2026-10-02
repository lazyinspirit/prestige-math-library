---
id: def-degree-divisor-proper-curve
kind: definition
title: "Degree divisor proper curve"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-integral-scheme
  - def-proper-morphism
  - def-dimension-noetherian-topological-space
  - def-affine-scheme
  - def-residue-field-scheme-point
  - lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-10-02
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "Ravi Vakil, The Rising Sea, §§6.3.9 and 20.4.1 (closed-point and divisor degree definitions; §20.4.1 treats nonsingular projective curves)"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2111public.pdf"
---

## Definition

Let $k$ be a field. A **proper curve over $k$** is an integral $k$-scheme $C$
([[def-integral-scheme]]) whose structure morphism $C\to\operatorname{Spec}k$
is proper ([[def-proper-morphism]]) and whose underlying topological space has
chain dimension one ([[def-dimension-noetherian-topological-space]]). Thus $C$
is of finite type over $k$. No normality, regularity, projectivity, or
smoothness is assumed.

For a closed point $x\in C$, its residue field $\kappa(x)$
([[def-residue-field-scheme-point]]) is finite over $k$. Indeed, choose an
affine open neighborhood $U=\operatorname{Spec}A$ of $x$
([[def-affine-scheme]]). Since $C\to\operatorname{Spec}k$ is of finite type,
$A$ is a finite-type $k$-algebra; the closed point $x$ corresponds to a maximal
ideal $\mathfrak m\subset A$, so $\kappa(x)\cong A/\mathfrak m$ is finite over
$k$ ([[lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite]]). Write
$[\kappa(x):k]=\dim_k\kappa(x)$.

We use **divisor on $C$** to mean a finite formal integral linear combination
of closed points,
$$D=\sum_{x\in C\text{ closed}} n_x[x],\qquad n_x\in\mathbb Z,$$
where only finitely many $n_x$ are nonzero. These divisors form the free
abelian group $\operatorname{Div}(C)$ on the closed points. Define the
$k$-degree by
$$\deg_k D=\sum_{x\in C\text{ closed}} n_x[\kappa(x):k]\in\mathbb Z.$$
This is well-defined because the support is finite, and coefficientwise
addition makes $\deg_k:\operatorname{Div}(C)\to\mathbb Z$ a group
homomorphism.
