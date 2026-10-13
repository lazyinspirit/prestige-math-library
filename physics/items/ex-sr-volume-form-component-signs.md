---
id: ex-sr-volume-form-component-signs
kind: example
title: "Worked component signs of the oriented volume form"
status: published
origin: session
domain: mathematics
dependency_level: 7
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
deps: [def-inertial-frame-and-inertial-chart, def-oriented-minkowski-volume-form, lem-volume-form-is-independent-of-the-oriented-frame, def-determinant-of-a-square-matrix, thm-determinant-is-the-unique-normalized-alternating-multilinear-function]
dependency_roles:
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-oriented-minkowski-volume-form: mathematical-premise
  lem-volume-form-is-independent-of-the-oriented-frame: mathematical-premise
  def-determinant-of-a-square-matrix: mathematical-premise
  thm-determinant-is-the-unique-normalized-alternating-multilinear-function: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 1 pp. 2-7 (PDF pp. 9-14)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Example

Worked computation of the components of the oriented volume form in an inertial
frame with $\epsilon(e_0,e_1,e_2,e_3)=+1$. The covariant components are the
permutation signs: $\epsilon_{0123}=+1$;
$\epsilon_{0213}=-1$, the sign of a single transposition;
$\epsilon_{2301}=+1$, the product of the two transpositions $(0\,2)$ and
$(1\,3)$; $\epsilon_{3210}=+1$, the product of the two transpositions $(0\,3)$
and $(1\,2)$; and $\epsilon_{abcd}=0$ whenever two of the indices coincide.
Raising all indices with the diagonal inverse metric gives
$\epsilon^{0123}=\eta^{00}\eta^{11}\eta^{22}\eta^{33}\epsilon_{0123}=-1$. For
the spatial symbol, $\epsilon_{123}=+1$, $\epsilon_{213}=-1$,
$\epsilon_{312}=+1$, and $\epsilon_{ijk}=0$ if two spatial indices coincide.

## Facts & Assumptions

**Given:** An inertial frame $(o;e_0,e_1,e_2,e_3)$ of the model and the volume
form $\epsilon$ of [[def-oriented-minkowski-volume-form]].

[L1] $\epsilon(v_0,v_1,v_2,v_3)=\det[v_j^a]$, where the $j$-th column lists the
coordinates of $v_j$ in the inertial frame; consequently
$\epsilon_{abcd}=\epsilon(e_a,e_b,e_c,e_d)$ is $+1$ on $(0,1,2,3)$, the sign of
the permutation for a permutation tuple, and $0$ when two indices repeat. The
inverse metric is $\eta^{ab}=\operatorname{diag}(-1,1,1,1)^{ab}$ and
$\epsilon^{abcd}=\eta^{aa'}\eta^{bb'}\eta^{cc'}\eta^{dd'}\epsilon_{a'b'c'd'}$;
the spatial symbol is defined by $\epsilon_{123}=+1$ together with alternation
([[def-oriented-minkowski-volume-form]]).

[L2] The determinant is the unique column-multilinear, alternating, normalized
function of the columns; in particular a matrix with two equal columns has
determinant $0$ ([[thm-determinant-is-the-unique-normalized-alternating-multilinear-function]]).

[L3] For $A=(a_{ij})$, $\det A=\sum_{\sigma\in S_n}\operatorname{sgn}(\sigma)\prod_{i<n}a_{\sigma(i),i}$;
on a permutation matrix the sum has exactly one nonzero term, of value
$\operatorname{sgn}(\sigma)$ ([[def-determinant-of-a-square-matrix]]).

[L4] The form $\epsilon$ and the value $\epsilon(e_0,e_1,e_2,e_3)=1$ are the
same in every inertial frame
([[lem-volume-form-is-independent-of-the-oriented-frame]]).

## Verification

**Proof technique:** direct determinant computations on permutation matrices.

1.1 The coordinate matrix of the frame tuple $(e_0,e_1,e_2,e_3)$ is the identity matrix, whose determinant is $+1$; hence $\epsilon_{0123}=+1$ by [L1]; this value is frame independent by [L4]. [L1, L4, algebra]

1.2 The tuple $(e_0,e_2,e_1,e_3)$ has coordinate matrix equal to the permutation matrix of the transposition $(1\,2)$; its determinant is the single nonzero term of [L3], namely $\operatorname{sgn}(1\,2)=-1$, so $\epsilon_{0213}=-1$. [L1, L3, algebra]

1.3 The tuple $(e_2,e_3,e_0,e_1)$ has coordinate matrix the permutation matrix of $\sigma=(0\,2)(1\,3)$, a product of two transpositions, so $\operatorname{sgn}\sigma=(-1)^2=+1$ and $\epsilon_{2301}=+1$ by [L1] and [L3]. [L1, L3, algebra]

1.4 The tuple $(e_3,e_2,e_1,e_0)$ has coordinate matrix the permutation matrix of $\sigma=(0\,3)(1\,2)$, again a product of two transpositions, so $\epsilon_{3210}=+1$ by [L1] and [L3]. [L1, L3, algebra]

1.5 If two of the indices $a,b,c,d$ coincide, then two columns of the coordinate matrix $[e_a,e_b,e_c,e_d]$ coincide, so its determinant is $0$ by [L2]; hence $\epsilon_{abcd}=0$ for every tuple with a repeated index. [L1, L2, algebra]

2.1 For the spatial symbol: the coordinate matrix of $(e_1,e_2,e_3)$ in the spatial ordered basis $(e_1,e_2,e_3)$ is the identity, giving $\epsilon_{123}=+1$; the tuple $(e_2,e_1,e_3)$ is a transposition, giving $\epsilon_{213}=-1$; and $(e_3,e_1,e_2)$ corresponds to the $3$-cycle $(1\,3\,2)$, an even permutation, giving $\epsilon_{312}=+1$; repeated spatial indices give $0$ by the same column-coincidence argument as step 1.5. [L1, L2, L3, algebra]

3.1 Raising the indices with the diagonal inverse metric, exactly one term of the sum in [L1] survives for $(0,1,2,3)$, and $\epsilon^{0123}=\eta^{00}\eta^{11}\eta^{22}\eta^{33}\epsilon_{0123}=(-1)(+1)(+1)(+1)(+1)=-1$; this is the value in every inertial frame, since both $\epsilon$ and the diagonal inverse metric are frame independent by [L1] and [L4]. [step 1.1, L1, L4, algebra] ∎
