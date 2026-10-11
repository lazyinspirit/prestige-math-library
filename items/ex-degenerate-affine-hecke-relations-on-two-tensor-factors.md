---
id: ex-degenerate-affine-hecke-relations-on-two-tensor-factors
kind: example
title: "The degenerate affine Hecke relations on two tensor factors"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 3
deps: [thm-the-casimir-and-place-permutation-operators-satisfy-degenerate-affine-hecke-relations,
       def-arakawa-suzuki-casimir-operators-on-tensor-functors,
       def-degenerate-affine-hecke-algebra]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Tomoyuki Arakawa and Takeshi Suzuki, Lie algebras and degenerate affine Hecke algebras of type A, J. Algebra 209 (1998) 288-304 (complete 16-page arXiv article; published version titled Duality between sl_n(C) and the degenerate affine Hecke algebra)"
      url: "https://arxiv.org/pdf/q-alg/9710037"
      locator: "Section 2.2, formulas (2.2.1)-(2.2.5) and Lemma 2.2.1, printed pp. 6-7: the operators y_i, s_ij on X tensor V^tensor l and the identities they satisfy; the d=2, M=V computation below specializes these."
    - title: "Jonathan Brundan and Alexander Kleshchev, Schur-Weyl duality for higher levels, Selecta Math. (N.S.) 14 (2008) 1-57 (complete 50-page arXiv article)"
      url: "https://arxiv.org/pdf/math/0605217"
      locator: "Section 3.4, formulas (3.10)-(3.13), printed pp. 12-13: the endomorphisms x and s of the tensor functor and the induced H_d-action; the d=2 case specializes these."
verification:
  precheck: pass
---

## Example

Take $\mathfrak g=\mathfrak{gl}_2(\mathbb C)$, the natural module $V=\mathbb C^2$
with basis $v_1,v_2$, the module $M=V$ and $d=2$, so that the Arakawa-Suzuki
construction acts on $M\otimes V^{\otimes2}=V^{\otimes3}$. Write $P_{ab}$ for
the operator that permutes the tensor factors in positions $a,b\in\{0,1,2\}$
of $V^{\otimes3}$. Then $x_1=P_{01}$, $s_1=P_{12}$ and
$x_2=P_{02}+P_{12}$.

The example verifies on the eight-element tensor basis all relations of the
degenerate affine Hecke presentation in this smallest nontrivial case:
$s_1^2=1$, $[x_1,x_2]=0$, $s_1x_2-x_1s_1=1$ and
$x_2s_1-s_1x_1=1$. It also records two points that are easy to misread: on
$v_1\otimes v_2\otimes v_1$ the two sides of the cross relation differ by
exactly the original vector, and the commutator $[s_1,x_2]$ is *not* the
identity, because the affine cross relation has $x_1$, not $x_2$, on its other
side.

## Facts & Assumptions

**Given:** The natural $\mathfrak{gl}_2$-module $V=\mathbb C^2$ with basis $v_1,v_2$, the tensor space $V^{\otimes3}$ with its eight basis words, and the place permutations $P_{ab}$.

[F1] In the Arakawa-Suzuki construction with $M=V$ and $d=2$ the operator $\Omega$ on two tensor slots is the flip, and $x_j=\Omega_{0j}+\sum_{k<j}P_{kj}$; hence $x_1=P_{01}$, $s_1=P_{12}$ and $x_2=P_{02}+P_{12}$, and each $P_{ab}$ is an involution ([[def-arakawa-suzuki-casimir-operators-on-tensor-functors]], [[def-degenerate-affine-hecke-algebra]]).

[F2] In general the Casimir and place permutation operators satisfy all Coxeter, commutation and affine cross relations, in particular $s_i^2=1$, $[x_i,x_j]=0$, $s_ix_{i+1}-x_is_i=1$ and $x_{i+1}s_i-s_ix_i=1$ ([[thm-the-casimir-and-place-permutation-operators-satisfy-degenerate-affine-hecke-relations]]).



## Proof

**Proof technique:** direct.

**Given:** The operators $x_1=P_{01}$, $s_1=P_{12}$ and $x_2=P_{02}+P_{12}$ on $V^{\otimes3}$ acting on the eight basis words $w_0\otimes w_1\otimes w_2$, $w_i\in\{v_1,v_2\}$.

1.1 The permutation identities. Since $P_{ab}$ exchanges two tensor positions it is an involution, $P_{ab}^2=1$; and evaluating on the eight words gives the two braid-type identities used below, $P_{12}P_{02}=P_{01}P_{12}$ and $P_{02}P_{12}=P_{12}P_{01}$, together with their transposes $P_{01}P_{02}=P_{12}P_{01}$ and $P_{02}P_{01}=P_{01}P_{12}$ (both sides of each identity send a word to the same word). [F1, algebra]

2.1 The four relations. First $s_1^2=P_{12}^2=1$. Next, $[x_1,x_2]=P_{01}P_{02}-P_{02}P_{01}+P_{01}P_{12}-P_{12}P_{01}$, and the identities $P_{01}P_{02}=P_{12}P_{01}$, $P_{02}P_{01}=P_{01}P_{12}$ of step 1.1 cancel the four 3-cycle terms pairwise. Finally $s_1x_2-x_1s_1=P_{12}P_{02}+P_{12}^2-P_{01}P_{12}=P_{01}P_{12}+1-P_{01}P_{12}=1$ and, symmetrically, $x_2s_1-s_1x_1=P_{02}P_{12}+P_{12}^2-P_{12}P_{01}=P_{12}P_{01}+1-P_{12}P_{01}=1$. Hence all degenerate affine Hecke relations of [F2] hold in this specialization. [F1, step 1.1, algebra]

3.1 The explicit vector. For $v_1\otimes v_2\otimes v_1$: $s_1$ sends it to $v_1\otimes v_1\otimes v_2$, which $x_1=P_{01}$ fixes, so $x_1s_1(v_1\otimes v_2\otimes v_1)=v_1\otimes v_1\otimes v_2$; and $x_2=P_{02}+P_{12}$ sends it to $v_1\otimes v_2\otimes v_1+v_1\otimes v_1\otimes v_2$, which $s_1$ sends to $v_1\otimes v_1\otimes v_2+v_1\otimes v_2\otimes v_1$. Hence $(s_1x_2-x_1s_1)(v_1\otimes v_2\otimes v_1)=v_1\otimes v_2\otimes v_1$, the identity action on this vector. [F1, step 2.1, algebra]

4.1 The commutator caveat. On the same vector, $x_2s_1(v_1\otimes v_2\otimes v_1)=v_2\otimes v_1\otimes v_1+v_1\otimes v_2\otimes v_1$ and $s_1x_1(v_1\otimes v_2\otimes v_1)=v_2\otimes v_1\otimes v_1$, so $(x_2s_1-s_1x_1)(v_1\otimes v_2\otimes v_1)=v_1\otimes v_2\otimes v_1$, while $[s_1,x_2](v_1\otimes v_2\otimes v_1)=v_1\otimes v_1\otimes v_2-v_2\otimes v_1\otimes v_1$, which has no component along $v_1\otimes v_2\otimes v_1$. So $[s_1,x_2]\neq1$: the affine cross relation relates $s_1x_2$ to $x_1s_1$, not to $x_2s_1$. [F1, step 3.1, algebra] ∎

## Remarks

- The braid-type identities are the only input: once they are checked on the eight words, the two nontrivial relations follow by cancellation of the 3-cycle terms, so the example is a finite verification of the normalization used by the Arakawa-Suzuki action.
- The distinction recorded in step 4.1 is not a defect: $[s_1,x_2]=-1$ is false as well; the correct affine relations are $s_1x_2-x_1s_1=1$ and $x_2s_1-s_1x_1=1$.
