---
id: thm-the-casimir-and-place-permutation-operators-satisfy-degenerate-affine-hecke-relations
kind: theorem
title: "The Casimir and place-permutation operators satisfy the degenerate affine Hecke relations"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 2
deps: [def-arakawa-suzuki-casimir-operators-on-tensor-functors,
       def-degenerate-affine-hecke-algebra, def-classical-complex-matrix-lie-algebras,
       prop-trace-forms-are-symmetric-and-invariant,
       def-casimir-operator-relative-to-an-invariant-form,
       lem-the-casimir-operator-is-basis-independent-and-intertwining,
       def-representation-of-a-lie-algebra,
       thm-associativity-of-balanced-tensor-products]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Tomoyuki Arakawa and Takeshi Suzuki, Lie algebras and degenerate affine Hecke algebras of type A, J. Algebra 209 (1998) 288-304 (complete 16-page arXiv preprint)"
      url: "https://arxiv.org/pdf/q-alg/9710037"
      locator: "Lemma 2.2.1, printed p. 7, and its proof: [y_i,y_j]=0 from [Omega_ij+Omega_jk,Omega_ik]=0 and [Omega_ij,Omega_km]=0 for distinct labels, and the cross relation (2.2.4) from s_iOmega_0j=Omega_0s_i(j)s_i."
    - title: "Jonathan Brundan and Alexander Kleshchev, Representations of shifted Yangians and finite W-algebras, Mem. Amer. Math. Soc. 196 (2008), no. 918 (complete 109-page arXiv memoir)"
      url: "https://arxiv.org/pdf/math/0508003"
      locator: "Section 8.1, (8.15)-(8.23), printed pp. 86-87: the explicit checks x_ix_j=x_jx_i, s_ix_i=x_{i+1}s_i-1, s_ix_j=x_js_i for j not i,i+1, s_i^2=1 and the braid and commutation relations, identified as the defining relations of H_d."
verification:
  precheck: pass
---

## Statement

Let $N\ge1$, let $M$ be a $\mathfrak{gl}_N(\mathbb C)$-module, let
$V=\mathbb C^N$ be the natural module, and on $M\otimes V^{\otimes d}$ use the
operators $x_j=\Omega_{0j}+\sum_{k<j}P_{kj}$ and $s_i=P_{i,i+1}$ of
[[def-arakawa-suzuki-casimir-operators-on-tensor-functors]]. Then:

1. The operators $x_1,\dots,x_d,s_1,\dots,s_{d-1}$ commute with the
   $\mathfrak g$-action and are natural in $M$, and satisfy all the defining
   relations of the degenerate affine Hecke algebra
   [[def-degenerate-affine-hecke-algebra]]: the Coxeter relations for the
   $s_i$; $s_ix_j=x_js_i$ for $j\notin\{i,i+1\}$; $s_ix_{i+1}=x_is_i+1$ and
   $x_{i+1}s_i=s_ix_i+1$; and the polynomial commutation $[x_i,x_j]=0$.
2. Consequently they define, via the generator-fixing anti-involution of the
   Hecke algebra, a natural right $H_d$-action on $M\otimes V^{\otimes d}$
   commuting with the left $\mathfrak g$-action.

The commutation of the $x_i$ is an independent check: it does not follow from
the braid relations of the $s_i$ alone.

## Facts & Assumptions

**Given:** $N\ge1$, a $\mathfrak g$-module $M$ with $\mathfrak g=\mathfrak{gl}_N(\mathbb C)$, the natural module $V$, $d\ge0$, and the operators of [[def-arakawa-suzuki-casimir-operators-on-tensor-functors]] built from the trace-form Casimir $\Omega=\sum_{i,j}E_{ij}\otimes E_{ji}$.

[F1] The operators $P_{ab}$ are the place permutations of the labelled tensor factors; $P_{ab}^2=1$, and $P_{ab}$ commutes with $P_{cd}$ when $\{a,b\}\cap\{c,d\}=\varnothing$ ([[def-arakawa-suzuki-casimir-operators-on-tensor-functors]], [[thm-associativity-of-balanced-tensor-products]]).

[F2] On two natural factors $\Omega_{ij}=P_{ij}$; more generally, for any triple of factors $a,b,c$ the element identity $[\Omega_{ab},\Omega_{ac}+\Omega_{bc}]=0$ holds in $U(\mathfrak g)^{\otimes3}$, and $[\Omega_{ab},P_{cd}]=0$ whenever the pairs of labels are disjoint ([[def-arakawa-suzuki-casimir-operators-on-tensor-functors]], [[def-classical-complex-matrix-lie-algebras]]).

[F3] $[E_{ab},E_{cd}]=\delta_{bc}E_{ad}-\delta_{ad}E_{cb}$ in $\mathfrak{gl}_N(\mathbb C)$ ([[def-classical-complex-matrix-lie-algebras]]).

[F4] The Hecke algebra $H_d$ is presented by the Coxeter relations for the $s_i$ and the cross relations $s_ix_{i+1}=x_is_i+1$, $x_{i+1}s_i=s_ix_i+1$, together with $x_ix_j=x_jx_i$; the generator-fixing anti-involution $\omega$ of $H_d$ is the anti-automorphism fixing all generators, and a left action $\rho$ of $H_d$ defines a right action by $e\cdot u=\rho(\omega(u))e$ ([[def-degenerate-affine-hecke-algebra]]).

[F5] The Casimir operator acts as an intertwiner and commutes with the $\mathfrak g$-action; place permutations of natural factors also commute with the $\mathfrak g$-action because the comultiplication is cocommutative ([[lem-the-casimir-operator-is-basis-independent-and-intertwining]], [[def-representation-of-a-lie-algebra]]).



## Proof

**Proof technique:** direct.

**Given:** The operators $x_j=\Omega_{0j}+\sum_{k<j}P_{kj}$ and $s_i=P_{i,i+1}$ on $M\otimes V^{\otimes d}$, and the identities of [F1]-[F5].

1.1 The infinitesimal braid identities. For distinct labels $a,b,c$ one has $[\Omega_{ab},\Omega_{ac}+\Omega_{bc}]=0$: expanding $\Omega=\sum E_{uv}\otimes E_{vu}$ and using [F3], the double commutator sum splits into terms $[E_{uv},E_{xy}]\otimes E_{vu}\otimes E_{yx}$ and $E_{uv}\otimes[E_{vu},E_{xy}]\otimes E_{yx}$, and the two resulting sums cancel term by term after relabelling; equivalently, this is the identity $[\Omega_{12},\Omega_{13}+\Omega_{23}]=0$ in $U(\mathfrak g)^{\otimes3}$, which is the derivative of the invariance of $\Omega$ under the diagonal adjoint action. Consequently $[\Omega_{ab},\Omega_{ac}]=-[\Omega_{ab},\Omega_{bc}]=[\Omega_{ac},\Omega_{bc}]$. In particular, for three natural factors this is the identity $[P_{ab},P_{ac}]+[P_{ab},P_{bc}]=0$ for the flips. [F2, F3, algebra]

1.2 The Coxeter relations for $s_i$. $s_i=P_{i,i+1}$ is an involution; $s_is_j=s_js_i$ for $|i-j|>1$ because the pairs of interchanged labels are disjoint; and $s_is_{i+1}s_i=s_{i+1}s_is_{i+1}$ because both sides are the permutation operator inducing the same permutation of the three labelled factors. [F1, algebra]

2.1 Cross relations. Conjugation by $s_i=P_{i,i+1}$ interchanges the labels $i$ and $i+1$ in any operator supported on those factors, so $s_i\Omega_{0,i+1}=\Omega_{0i}s_i$ and $s_iP_{k,i+1}=P_{ki}s_i$ for $k<i$. Therefore $s_ix_{i+1}=s_i\Omega_{0,i+1}+\sum_{k<i}s_iP_{k,i+1}+s_iP_{i,i+1}=\Omega_{0i}s_i+\sum_{k<i}P_{ki}s_i+1=x_is_i+1$, and symmetrically $x_{i+1}s_i=s_ix_i+1$. For $j<i$, all labels in $x_j$ are disjoint from $\{i,i+1\}$, so $s_i$ commutes with every summand. For $j>i+1$, $\Omega_{0j}$ and the terms $P_{kj}$ with $k\notin\{i,i+1\}$ commute with $s_i$, while conjugation by $s_i$ interchanges $P_{ij}$ and $P_{i+1,j}$. Their sum is invariant, so again $s_ix_j=x_js_i$; the two overlapping summands need not commute individually. [F1, step 1.1, algebra]

2.2 Polynomial commutation. Fix $i<j$. Since $x_i=\Omega_{0i}+\sum_{k<i}P_{ki}$ and $x_j=\Omega_{0j}+\sum_{l<j}P_{lj}$, the commutator is $[\Omega_{0i},\Omega_{0j}]+\sum_{l<j}[\Omega_{0i},P_{lj}]+\sum_{k<i}[P_{ki},\Omega_{0j}]+\sum_{k<i}\sum_{l<j}[P_{ki},P_{lj}]$. The second sum reduces to the single term $[\Omega_{0i},P_{ij}]$ (all other $P_{lj}$ are disjoint from the labels $0,i$), and the third sum vanishes (all pairs $\{k,i\}$, $\{0,j\}$ are disjoint since $k<i<j$). In the fourth sum only the terms with $k=l$ or $l=i$ can fail to vanish, so it equals $\sum_{k<i}([P_{ki},P_{kj}]+[P_{ki},P_{ij}])$. Hence $[x_i,x_j]=([\Omega_{0i},\Omega_{0j}]+[\Omega_{0i},P_{ij}])+\sum_{k<i}([P_{ki},P_{kj}]+[P_{ki},P_{ij}])$. The first bracket vanishes by step 1.1 with $a=0$, $b=i$, $c=j$ together with $\Omega_{ij}=P_{ij}$; each summand of the second bracket vanishes by step 1.1 for the three distinct labels $k,i,j$. Therefore $[x_i,x_j]=0$. [F1, F2, step 1.1, algebra]

3.1 Naturality, commutation with $\mathfrak g$, and the right action. The place permutations are natural in $M$ and commute with $\mathfrak g$; the Casimir operators are intertwiners by [F5]; hence every $x_j$ and $s_i$ is natural and $\mathfrak g$-linear. The relations established in steps 1.1, 1.2, 2.1 and 2.2 are exactly the defining relations of $H_d$ [F4], so the assignment $x_j\mapsto x_j$, $s_i\mapsto s_i$ defines a left $H_d$-action. The generator-fixing anti-automorphism $\omega$ of $H_d$ (which preserves each defining relation because the reversed cross relation $x_{i+1}s_i=s_ix_i+1$ is also a defining relation) converts it into a right action by $e\cdot u:=\rho(\omega(u))e$; the anti-automorphism property gives $(e\cdot u)\cdot v=\rho(\omega(v))\rho(\omega(u))e=\rho(\omega(uv))e=e\cdot(uv)$. This proves both assertions. [F4, F5, step 1.2, step 2.1, step 2.2] ∎

## Remarks

- The two cross relations are not symmetric consequences of the braid relation: the summand $+s_i$ has no counterpart in the Coxeter presentation of $S_d$, and it is exactly the term responsible for the inhomogeneous filtration discussed in [[def-degenerate-affine-hecke-algebra]].

- The computation of step 2.2 uses $\Omega_{ij}=P_{ij}$ only on pairs of natural factors; the identities involving the module label $0$ are the universal commutation identities of the Casimir element and hold for arbitrary $M$.
