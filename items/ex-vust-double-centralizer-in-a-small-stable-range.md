---
id: ex-vust-double-centralizer-in-a-small-stable-range
kind: example
title: "Vust's double centralizer in a small stable range"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 33
deps: [thm-vust-double-centralizer-for-the-type-a-nilpotent-centralizer,
       thm-the-finite-w-and-degenerate-cyclotomic-hecke-actions-satisfy-double-centralizer,
       thm-the-casimir-and-place-permutation-operators-satisfy-degenerate-affine-hecke-relations,
       def-degenerate-cyclotomic-hecke-algebra, thm-schur-weyl-double-centralizer,
       def-a-type-a-nilpotent-pyramid-good-grading-and-whittaker-character,
       def-classical-complex-matrix-lie-algebras,
       def-representation-of-a-lie-algebra,
       thm-weyls-complete-reducibility-theorem]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jonathan Brundan and Alexander Kleshchev, Schur-Weyl duality for higher levels, Selecta Math. (N.S.) 14 (2008) 1-57 (complete 50-page arXiv article)"
      url: "https://arxiv.org/pdf/math/0605217"
      locator: "Theorem 2.4 and the level-one specialisation, printed pp. 8-9: the Vust double centralizer reduces at level one to the classical Schur-Weyl situation, which is checked here in the smallest cases d=1,2."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
---

## Example

Take the pyramid $\lambda=(1,1)$, so $n=2$, $l=1$, $q_1=2$, $N=2$, and $e=0$
(all boxes lie in one column, and the grading is concentrated in degree $0$):
$\mathfrak g=\mathfrak g^e=\mathfrak{gl}_2(\mathbb C)$, $\mathfrak m=0$,
$\mathbb C_1[x_1,\dots,x_d]=\mathbb C[x_1,\dots,x_d]/(x_1,\dots,x_d)=\mathbb C$
and $\mathbb C_1[x]\rtimes\mathbb C[S_d]=\mathbb C[S_d]$. The stable range for
this $\lambda$ is $q_l\ge d$, i.e. $2\ge d$, so $d=1,2$ are exactly the positive stable
cases; degree zero is also stable. The example verifies Vust's double centralizer
([[thm-vust-double-centralizer-for-the-type-a-nilpotent-centralizer]]) in these
cases.

## Facts & Assumptions

**Given:** $V=\mathbb C^2$ with the natural $\mathfrak{gl}_2$-action, $e=0$, and $d=1,2$.

[F1] For $\lambda=(1,1)$ the pyramid has $n=2$ rows of length $1$ and one column of height $2$; the grading has $\mathfrak g_0=\mathfrak{gl}_2$, $\mathfrak m=0$, and $e=0$ ([[thm-vust-double-centralizer-for-the-type-a-nilpotent-centralizer]], [[def-a-type-a-nilpotent-pyramid-good-grading-and-whittaker-character]]).

[F2] The truncated variables vanish: $x_i=e=0$ on $V^{\otimes d}$, so $B=\mathbb C[S_d]$ acting by place permutations ([[def-degenerate-cyclotomic-hecke-algebra]]).

[F3] The flip eigenspaces are $S^2V=\operatorname{span}\{v_1\otimes v_1,v_1\otimes v_2+v_2\otimes v_1,v_2\otimes v_2\}$ and $\Lambda^2V=\mathbb C(v_1\otimes v_2-v_2\otimes v_1)$. The latter is the determinant representation: $X$ acts by $\operatorname{tr}X$, not by zero. The three distinct $E_{11}-E_{22}$ weights on $S^2V$, and the nonzero adjacent raising/lowering maps $E_{12},E_{21}$, show it is irreducible. The two summands are nonisomorphic. Classical Schur-Weyl duality identifies the full diagonal enveloping image with the commutant of the flip ([[thm-schur-weyl-double-centralizer]]).

[F4] $U(\mathfrak{gl}_2)\to\operatorname{End}(V)$ is surjective, of dimension $4$ ([[def-classical-complex-matrix-lie-algebras]], [[def-representation-of-a-lie-algebra]]).



## Proof

**Proof technique:** direct.

**Given:** The data and conventions of the Example.

1.1 The case $d=1$. Here $B=\mathbb C[S_1]=\mathbb C$, so $\operatorname{End}_{\mathfrak{gl}_2}(V)=\mathbb C\cdot1$ by Schur's lemma and the image $\varphi_1(U(\mathfrak{gl}_2))=\operatorname{End}_{\mathbb C}(V)$ by [F4]; both Vust identities reduce to these two equal-dimensional statements. [F4, F2, algebra]

1.2 The case $d=2$, second centralizer. By [F3], $V^{\otimes2}=S^2V\oplus\Lambda^2V$ with $\Lambda^2V$ one-dimensional and $S^2V$ three-dimensional irreducible. Since the flip acts by $+1$ on $S^2V$ and by $-1$ on $\Lambda^2V$, an endomorphism commuting with the $\mathbb C[S_2]$-action preserves each isotypic component, and its restrictions are arbitrary endomorphisms of the two (irreducible) components: $\operatorname{End}_{\mathbb C[S_2]}(V^{\otimes2})=\operatorname{End}(S^2V)\oplus\operatorname{End}(\Lambda^2V)$, of dimension $9+1=10$. [F3, algebra]

2.1 The case $d=2$, first centralizer. The image of $U(\mathfrak{gl}_2)$ in $\operatorname{End}(V^{\otimes2})$ is the diagonal action on the two isotypic components, which by the mutual-centralizer statement of [F3] is the block-diagonal algebra $\operatorname{End}(S^2V)\oplus\operatorname{End}(\Lambda^2V)$, also of dimension $10$; hence $\varphi_2(U(\mathfrak{gl}_2))=\operatorname{End}_{\mathbb C[S_2]}(V^{\otimes2})$. The other direction, $\operatorname{End}_{\mathfrak{gl}_2}(V^{\otimes2})=\mathbb C[S_2]$, follows because $\psi_2$ is injective ($\dim\mathbb C[S_2]=2$ and the flip is not a scalar on $V^{\otimes2}$) and $\dim\operatorname{End}_{\mathfrak{gl}_2}(V^{\otimes2})=2$ by Schur's lemma applied to the two nonisomorphic components. [F3, step 1.2, algebra]

3.1 Range check. For $d\le2=q_l$ the stable-range hypothesis $q_l\ge d$ holds, and for $d=3$ it fails; this example therefore realizes the theorem exactly in its stable range and shows that the level-one case is the classical Schur-Weyl duality. [F1, F2, step 1.1, step 2.1] ∎

## Remarks

- In this example the truncated polynomial algebra degenerates to $\mathbb C$ and the finite W-algebra degenerates to $U(\mathfrak{gl}_2)$; this is the smallest situation in which the general theorem is visible without any deformation.

- The companion counterexample with a nontrivial tensor module and a noninjective Hecke action is different: here the module is the raw tensor space with $e=0$, where the identities happen to hold in the stable range.
