---
id: lem-khovanov-seidel-complexes-satisfy-far-commutativity
kind: lemma
title: "Far commutativity of the generator complexes"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
deps:
  - def-khovanov-seidel-positive-and-negative-twist-complexes
  - thm-khovanov-seidel-u-functors-satisfy-temperley-lieb-relations
  - lem-bounded-two-sided-projective-a-m-bimodule-complexes-act-on-c-m
  - def-signed-totalization-of-graded-a-m-bimodule-actions
  - lem-graded-balanced-tensor-and-shift-isomorphisms
  - def-khovanov-seidel-beta-and-gamma-bimodule-maps
proof_strategy: direct
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mikhail Khovanov and Paul Seidel, Quivers, Floer Cohomology, and Braid Group Actions, J. Amer. Math. Soc. 15 (2002) 203-271, Theorem 2.5 and equation (2.10)"
      url: "https://arxiv.org/pdf/math/0006056"
      locator: "Theorem 2.5 and equation (2.10), printed pp. 13-14"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Fix $m\ge1$ and let $R_i$ and $R_i^{-1}$ be the twist complexes of graded
$(A_m,A_m)$-bimodules of
[[def-khovanov-seidel-positive-and-negative-twist-complexes]], with
$R_i=[U_i\xrightarrow{\beta_i}A_m]$ having $U_i$ in homological degree $-1$ and
$A_m$ in degree $0$. If $|i-j|>1$ then there is an isomorphism of complexes of
graded $(A_m,A_m)$-bimodules
$$R_i\otimes_{A_m}R_j\;\cong\;R_j\otimes_{A_m}R_i,$$
and consequently an isomorphism of endofunctors of $C_m$
$$R_iR_j\;\cong\;R_jR_i .$$

## Facts & Assumptions
**Given:** An integer $m\ge1$, indices $i,j$ with $|i-j|>1$, the two-term complexes $R_i=[U_i\xrightarrow{\beta_i}A_m]$, $R_j=[U_j\xrightarrow{\beta_j}A_m]$ with $U_i,U_j$ in homological degree $-1$ and the diagonal bimodule $A_m$ in degree $0$ in both, and the totalization of
[[def-signed-totalization-of-graded-a-m-bimodule-actions]].

[L1] $U_i=P_i\otimes_{\mathbb Z}{}_iP$ and $\beta_i:U_i\to A_m$ is the degree-zero bimodule map with $\beta_i(e_i\otimes e_i)=e_i$; both $R_i$ and $R_j$ are bounded complexes of graded $(A_m,A_m)$-bimodules with degree-zero differentials, the differential of $R_i$ being $\beta_i$ ([[def-khovanov-seidel-positive-and-negative-twist-complexes]], [[def-khovanov-seidel-beta-and-gamma-bimodule-maps]]).

[L2] If $|i-j|>1$ then $U_i\otimes_{A_m}U_j=0$ as a graded $(A_m,A_m)$-bimodule ([[thm-khovanov-seidel-u-functors-satisfy-temperley-lieb-relations]]).

[L3] For bounded complexes $R,S$ of graded $(A_m,A_m)$-bimodules the totalization has $(R\otimes_{A_m}S)^n=\bigoplus_{p+q=n}R^p\otimes_{A_m}S^q$ with $d(r\otimes s)=d_Rr\otimes s+(-1)^pr\otimes d_Ss$; it is a bounded complex, functorial in both variables, and its terms carry the bimodule structure inherited from the two factors ([[def-signed-totalization-of-graded-a-m-bimodule-actions]]).

[L4] For every graded $(A_m,A_m)$-bimodule $M$ the tensor-unit maps $A_m\otimes_{A_m}M\to M$, $a\otimes m\mapsto am$, and $M\otimes_{A_m}A_m\to M$, $m\otimes a\mapsto ma$, are degree-zero isomorphisms of graded bimodules ([[lem-graded-balanced-tensor-and-shift-isomorphisms]]).

[L5] A bounded complex of graded $(A_m,A_m)$-bimodules with two-sided finite graded projective terms acts on $C_m$ by an exact triangulated endofunctor, and an isomorphism of such complexes induces a natural isomorphism of the associated functors ([[lem-bounded-two-sided-projective-a-m-bimodule-complexes-act-on-c-m]]).



## Proof

**Proof technique:** direct.

1.1 *The two totalizations are the same complex with the two factors interchanged.* By [L3] the degree $-2$ term of $R_i\otimes_{A_m}R_j$ is $U_i\otimes_{A_m}U_j$, which is $0$ by [L2]; its degree $-1$ term is $(U_i\otimes_{A_m}A_m)\oplus(A_m\otimes_{A_m}U_j)$ and its degree $0$ term is $A_m\otimes_{A_m}A_m$, with nothing else. Using the unit isomorphisms of [L4] to identify $U_i\otimes_{A_m}A_m\cong U_i$, $A_m\otimes_{A_m}U_j\cong U_j$ and $A_m\otimes_{A_m}A_m\cong A_m$, the differential of [L3] reads $(u,v)\mapsto\beta_i(u)+\beta_j(v)$: on $u\otimes1$ the Koszul sign multiplies the zero second summand only, and on $1\otimes v$ the first summand is zero and the sign is $(-1)^0=1$. Hence $R_i\otimes_{A_m}R_j$ is isomorphic to the two-term complex $C_{ij}=[U_i\oplus U_j\xrightarrow{\ (\beta_i,\beta_j)\ }A_m]$ with $U_i\oplus U_j$ in degree $-1$. Symmetrically $R_j\otimes_{A_m}R_i\cong C_{ji}=[U_j\oplus U_i\xrightarrow{(\beta_j,\beta_i)}A_m]$. [L1, L2, L3, L4]

2.1 *The flip is a chain isomorphism.* The flip $s:U_i\oplus U_j\to U_j\oplus U_i$, $s(u,v):=(v,u)$, is a degree-zero isomorphism of graded bimodules; together with the identity of $A_m$ it defines a degree-zero isomorphism of graded bimodule complexes $C_{ij}\to C_{ji}$. It commutes with the differentials because $(\beta_j,\beta_i)\circ s=(\beta_i(u)+\beta_j(v))$ on $(u,v)$ equals the composite $s$ after $(\beta_i,\beta_j)$, the target being $A_m$ in both cases and no sign entering the degree-zero component. [step 1.1, L1]

3.1 *Conclusion for the complexes.* The composite of the identifications of step 1.1 with the flip of step 2.1 is an isomorphism of complexes of graded $(A_m,A_m)$-bimodules $R_i\otimes_{A_m}R_j\cong R_j\otimes_{A_m}R_i$. [step 1.1, step 2.1]

4.1 *Conclusion for the functors.* Both $R_i\otimes_{A_m}R_j$ and $R_j\otimes_{A_m}R_i$ are bounded complexes with two-sided finite graded projective terms, since the terms $A_m$, $U_i\oplus U_j$, $U_j\oplus U_i$ are finite graded projective on both sides; by [L5] the isomorphism of step 3.1 induces a natural isomorphism of the endofunctors $M\mapsto(R_i\otimes_{A_m}R_j)\otimes_{A_m}M$ and $M\mapsto(R_j\otimes_{A_m}R_i)\otimes_{A_m}M$ of $C_m$. Composing with the canonical associativity identifications $(R_i\otimes_{A_m}R_j)\otimes_{A_m}M\cong R_i\otimes_{A_m}(R_j\otimes_{A_m}M)$ and $(R_j\otimes_{A_m}R_i)\otimes_{A_m}M\cong R_j\otimes_{A_m}(R_i\otimes_{A_m}M)$ gives the asserted natural isomorphism $R_iR_j\cong R_jR_i$. [step 3.1, L5]

5.1 *Conclusion.* For $|i-j|>1$ the vanishing $U_i\otimes_{A_m}U_j=0$ collapses both tensor complexes to the two-term complexes $C_{ij}$, $C_{ji}$, the flip identifies them, and the induced natural isomorphism of functors is $R_iR_j\cong R_jR_i$, both sides being the two-term complexes of [L1]. No choice principle is used. [step 3.1, step 4.1, L1] ∎ 