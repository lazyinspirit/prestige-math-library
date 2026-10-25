---
id: "thm-singular-homology-satisfies-dimension-and-arbitrary-additivity"
kind: "theorem"
title: "Singular homology satisfies dimension and arbitrary additivity"
deps: ["def-unreduced-homology-theory-on-cw-pairs", "thm-singular-homology-satisfies-homotopy-exactness-and-excision", "def-singular-chain-complex-and-singular-homology", "prop-singular-homology-of-a-disjoint-union-is-the-direct-sum"]
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Miller, Algebraic Topology I lecture notes, Definition 11.1, pp.25–26"
      url: "https://ocw.mit.edu/courses/18-905-algebraic-topology-i-fall-2016/64c56d8bcc2967c1d289a61c959f3095_MIT18_905F16_lec11.pdf"
      locator: "Definition 11.1, pp.25–26"
status: published
origin: "pipeline"
proof_strategy: "Compute the one-generator point complex with alternating zero and identity differentials; extend the existing absolute disjoint-sum result to relative chain quotients."
---

## Statement

For any abelian group $G$, $H_0(*;G)\cong G$ and $H_n(*;G)=0$ for every integer $n\ne0$. For every set-indexed family of pairs the canonical map
$$\bigoplus_\alpha H_n(X_\alpha,A_\alpha;G)\longrightarrow H_n\left(\bigsqcup_\alpha X_\alpha,\bigsqcup_\alpha A_\alpha;G\right)$$
is an isomorphism. Together with the structural axioms, singular homology is an ordinary theory with coefficient group $G$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement above.

[F1] A **CW pair** is $(X,A)$ with $A$ a CW subcomplex of $X$, as in def-skeleta-cw-subcomplex-and-relative-cw-complex. Morphisms are all continuous maps of pairs, not just cellular maps. An **ordinary unreduced homology theory** assigns covariant functors $h_n$ from CW pairs to abelian groups, for every $n\in\mathbb Z$, and natural homomorphisms $\partial:h_n(X,A)\to h_{n-1}(A)$, where $h_n(X)=h_n(X,\varnothing)$, satisfying: - Homotopic maps of pairs induce equal homomorphisms. - The inclusion maps and $\partial$ form an exact sequence $\cdots\to h_n(A)\to h_n(X)\to h_n(X,A)\to h_{n-1}(A)\to\cdots$. - For CW subcomplexes $U,V$ of $X=U\cup V$, inclusion induces $h_n(U,U\cap V)\cong h_n(X,V)$. - For a point $*$, $h_n(*)=0$ when $n\ne0$; write $G=h_0(*)$. - For every set-indexed family of CW pairs, including the empty family, the inclusions induce $\bigoplus_\alpha h_n(X_\alpha,A_\alpha)\cong h_n(\bigsqcup_\alpha X_\alpha,\bigsqcup_\alpha A_\alpha)$. Thus $h_n(\varnothing)=0$. No finite-dimensionality or finite-cell restriction is implicit. ([[def-unreduced-homology-theory-on-cw-pairs]])

[F2] For every fixed abelian group $G$, singular homology $H_n(-,-;G)$, extended by zero in negative degrees, satisfies homotopy invariance, pair exactness, naturality of the connecting maps, and CW excision in def-unreduced-homology-theory-on-cw-pairs. ([[thm-singular-homology-satisfies-homotopy-exactness-and-excision]])

[F3] For a topological space $X$ and an abelian group $G$, the singular chain groups and boundary maps of def-singular-boundary-operator form the **singular chain complex** $$C_\bullet(X;G):=\bigl(\cdots\to C_n(X;G)\xrightarrow{\partial_n}C_{n-1}(X;G)\to\cdots\bigr),$$ because thm-the-singular-boundary-squares-to-zero gives $\partial_{n-1}\partial_n=0$. Its degree-$n$ cycles and boundaries are $$Z_n^{\mathrm{sing}}(X;G):=\ker\partial_n,\qquad B_n^{\mathrm{sing}}(X;G):=\operatorname{im}\partial_{n+1},$$ in the sense of def-cycle-and-boundary-subobjects-of-a-complex. The **$n$th singular homology group** is the homology object of this chain complex: $$H_n^{\mathrm{sing}}(X;G):=Z_n^{\mathrm{sing}}(X;G)\big/B_n^{\mathrm{sing}}(X;G),$$ equivalently $H_n(C_\bullet(X;G))$ in the notation of def-homology-object-of-a-chain-complex. When the coefficient group is $\mathbb Z$, write simply $C_n(X)$ and $H_n(X)$ when no confusion can arise. ([[def-singular-chain-complex-and-singular-homology]])

[F4] Let $X=\bigsqcup_{\alpha\in A}X_\alpha$ be a disjoint union of topological spaces, and let $G$ be an abelian group. Then for every $n\geq 0$, $$H_n^{\mathrm{sing}}(X;G)\cong\bigoplus_{\alpha\in A}H_n^{\mathrm{sing}}(X_\alpha;G).$$ ([[prop-singular-homology-of-a-disjoint-union-is-the-direct-sum]])

## Proof

1.1 In the point complex there is one singular simplex in every nonnegative degree. The boundary on its copy of $G$ is multiplication by $\sum_{j=0}^n(-1)^j$: it is the identity for positive even $n$ and zero for odd $n$; $\partial_0=0$. Thus its homology is $G$ in degree zero and zero in every other degree, also when $G=0$. [F3, algebra]

1.2 A singular simplex has connected domain and hence its image lies in a single summand of a disjoint union. The chain complex of a union is consequently the direct sum of the chain complexes; this is the chain mechanism underlying F4. Taking the quotient by the corresponding subspace chains gives the direct sum of the relative chain complexes. [F4, F3]

2.1 A finite-support tuple is a cycle exactly when every coordinate is a cycle. It is a boundary exactly when every coordinate is a boundary: choose a bounding chain in each of its finitely many nonzero coordinates. Thus homology commutes with this direct sum. This includes the empty family, whose chain complex is zero, and a singleton family. With F2 this verifies all axioms of F1. [F1, F2, step 1.1, step 1.2] ∎
