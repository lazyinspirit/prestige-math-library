---
id: def-clifford-algebra-of-a-quadratic-space
kind: definition
title: Universal Clifford algebra of a quadratic space
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: clifford-universal-algebras-and-pbw
dependency_level: 0
deps: [def-tensor-algebra-of-a-vector-space, def-left-right-and-two-sided-ideal]
justified_by: []
landmark: false
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
    - title: "Jean Gallier, Clifford Algebras, Clifford Groups, and a Generalization of the Quaternions: The Pin and Spin Groups, §1.2"
      url: https://arxiv.org/pdf/0805.0311
    - title: "M. F. Atiyah, R. Bott, and A. Shapiro, Clifford Modules, Part I, §1"
      url: https://www.math.ens.psl.eu/~benoist/refs/ABS.pdf
---

## Definition

Let $k$ be a field with $\operatorname{char}(k)\ne2$, let $V$ be a finite-dimensional $k$-vector space, and let $B:V\times V\to k$ be a symmetric bilinear form, not necessarily nondegenerate. Put $Q(v)=B(v,v)$. Write $T_k(V)$ for the tensor algebra and $j:V\to T_k(V)$ for its degree-one inclusion ([[def-tensor-algebra-of-a-vector-space]]). For each $v\in V$, set $r_v=j(v)j(v)-Q(v)1$ and let $J_Q$ be the intersection of all two-sided ideals of $T_k(V)$ containing every $r_v$ ([[def-left-right-and-two-sided-ideal]]). This family is nonempty because it contains $T_k(V)$, and its intersection is a two-sided ideal; thus $J_Q$ is the smallest such ideal.

Define the **universal Clifford algebra** with the plus-$Q$ convention by

$$\mathrm{Cl}^{+}(V,Q):=T_k(V)/J_Q.$$

The quotient operations are induced from $T_k(V)$; the two-sided ideal condition makes multiplication of cosets well defined. Let $q_Q:T_k(V)\to\mathrm{Cl}^{+}(V,Q)$ be the quotient map, put $i_Q=q_Q\circ j$, and write $\bar v=i_Q(v)$. The defining relation is $\bar v^{\,2}=Q(v)1$. In this pair, $\mathrm{Cl}(V,Q)$ abbreviates $\mathrm{Cl}^{+}(V,Q)$ after this sign convention has been fixed. No nondegeneracy assumption is imposed.
