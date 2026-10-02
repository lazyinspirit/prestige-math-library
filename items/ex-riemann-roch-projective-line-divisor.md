---
id: ex-riemann-roch-projective-line-divisor
kind: example
title: "Riemann-Roch on the projective line for every degree"
status: draft
origin: pipeline
deps:
  - cor-h0-projective-space-o-d-homogeneous-polynomials
  - cor-picard-projective-line-integers
  - cor-top-cohomology-projective-space-o-d
  - def-axiom-of-choice
  - def-complete-linear-system
  - def-degree-divisor-proper-curve
  - def-divisor-smooth-proper-curve
  - def-index-speciality-divisor
  - def-little-l-divisor
  - def-nonspecial-divisor
  - lem-projective-line-divisors-classified-by-degree
  - thm-riemann-roch-as-l-minus-index
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "William Fulton, Algebraic Curves (Internet Archive copy), Chs. 8 and 6"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025), Ch. 18.5 and Ch. 21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
pipeline_run: frontier-37-owner-30
verification:
  precheck: pass
---

## Example

Assume the Axiom of Choice inherited from the current projective-line cohomology and divisor/Picard suppliers.

Let $k$ be a field, let $\mathbb P^1_k$ have coordinate $t$ with point at
infinity $\infty$, and let $D=d[\infty]$ for an integer $d$. Since
$\mathcal O_{\mathbb P^1_k}(d)$ is isomorphic to
$\mathcal O_{\mathbb P^1_k}(d[\infty])$ — the class of the point at infinity
generates $\operatorname{Pic}(\mathbb P^1_k)=\mathbb Z$ with
$\mathcal O(1)$ corresponding to $1$
([[cor-picard-projective-line-integers]]) — the explicit cohomology of the
twists gives
$$l(D)=h^0(\mathcal O(d))=\max(d+1,0),\qquad i(D)=h^1(\mathcal O(d))=\max(-d-1,0),$$
the values being read off from
[[cor-h0-projective-space-o-d-homogeneous-polynomials]] and
[[cor-top-cohomology-projective-space-o-d]]. Hence
$$l(D)-i(D)=d+1=\deg_k(D)+1-g$$
with $g=0$ for every integer $d$: on the projective line Riemann-Roch is an
identity between explicit numbers, including the negative-degree range where
$l(D)=0$ and $i(D)=-d-1$ compensates. The divisors of degree at least $-1$
are exactly the nonspecial ones here, and the complete linear system $|D|$ of
[[def-complete-linear-system]] is nonempty exactly for $d\ge0$.

*Scaffold repair, recorded for the owner.* The frozen scaffold statement cited
the examples-page item `ex-cohomology-o-d-projective-line-all-d` for the
cohomology of the twists. That item is homed on the examples page
`cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes-examples`,
and an examples-page item may not depend on another examples-page item, so the
citation is replaced here by the published A-page corollaries
[[cor-h0-projective-space-o-d-homogeneous-polynomials]] and
[[cor-top-cohomology-projective-space-o-d]], which contain the same values for
$n=1$; every promised claim is preserved. The example's negative-degree
compensation clause is also corrected to $l(D)=0$ and $i(D)=-d-1$ with
$l-i=d+1$, so that the displayed identity is true at every $d$.

The current [[lem-projective-line-divisors-classified-by-degree]] and
[[cor-picard-projective-line-integers]] give the divisor-to-twist identification
used in the calculation. The dimension notation is supplied by
[[def-little-l-divisor]], [[def-index-speciality-divisor]] and
[[def-nonspecial-divisor]], and the complete linear system by
[[def-complete-linear-system]].

## Facts & Assumptions

**Given:** the Axiom of Choice inherited from the current projective-line cohomology and divisor/Picard suppliers; a field $k$, the projective line $\mathbb P^1_k$ with coordinate $t$ and point at infinity $\infty$, and the divisor $D=d[\infty]$ for an integer $d$.

[F1] Projective-line data: $\mathbb P^1_k$ is a smooth proper geometrically integral curve over $k$ of genus $0$; the coordinate section $x_0$ of $\mathcal O(1)$ vanishes exactly at infinity with multiplicity one, so $\operatorname{div}(x_0)=[\infty]$ and $\mathcal O(1)\cong\mathcal O(\infty)$ with $\deg_k\mathcal O(1)=1$; every divisor $D'$ is linearly equivalent to $\deg_k(D')[\infty]$, and the degree homomorphism on divisor classes is an isomorphism, so linearly equivalent divisors have equal degree and $[\kappa(\infty):k]=1$ ([[lem-projective-line-divisors-classified-by-degree]], [[cor-picard-projective-line-integers]]).

[F2] Global sections: for $n=1$ and $A=k$ one has $H^0(\mathbb P^1_k,\mathcal O(d))\cong k[x_0,x_1]_d$ for $d\ge0$ and $H^0(\mathbb P^1_k,\mathcal O(d))=0$ for $d<0$; the monomials $x_0^ax_1^{d-a}$ for $0\le a\le d$ form a $k$-basis of $k[x_0,x_1]_d$, so $h^0(\mathcal O(d))=d+1$ for $d\ge0$ and $h^0(\mathcal O(d))=0$ for $d<0$ ([[cor-h0-projective-space-o-d-homogeneous-polynomials]]).

[F3] Top cohomology: for $n=1$ the group $H^1(\mathbb P^1_k,\mathcal O(d))$ vanishes for $d>-2$ and for $d\le-2$ it is free of rank $\binom{-d-1}{1}=-d-1$ over $k\ne0$; so $h^1(\mathcal O(d))=0$ for $d\ge-1$ and $h^1(\mathcal O(d))=-d-1$ for $d\le-2$ ([[cor-top-cohomology-projective-space-o-d]]).

[F4] Degree: for a divisor $D=\sum_xn_x[x]$ the $k$-degree is $\deg_k(D)=\sum_xn_x[\kappa(x):k]$, sum over the finite support, and it is a group homomorphism on the divisor group ([[def-degree-divisor-proper-curve]], [[def-divisor-smooth-proper-curve]]).

[F5] Riemann-Roch dimensions: $l(D)=\dim_kL(D)=h^0(D)=\dim_kH^0(C,\mathcal O_C(D))$ and $i(D)=h^1(D)=\dim_kH^1(C,\mathcal O_C(D))$, so $l(D)=h^0(\mathcal O(D))$ and $i(D)=h^1(\mathcal O(D))$ for the attached sheaf ([[def-little-l-divisor]], [[def-index-speciality-divisor]]).

[F6] Riemann-Roch: $l(D)-i(D)=\deg_k(D)+1-g$ with $i(D)\ge0$, and $l(D)=\deg_k(D)+1-g$ exactly for the nonspecial divisors ([[thm-riemann-roch-as-l-minus-index]], [[def-nonspecial-divisor]]).

[F7] Nonspeciality: $D$ is nonspecial exactly when $i(D)=0$, and special exactly when $i(D)\ge1$; equivalently nonspeciality is the equality case $l(D)=\deg_k(D)+1-g$ ([[def-nonspecial-divisor]]).

[F8] The complete linear system $|D|=\{\,D'\text{ effective}:D'\text{ is linearly equivalent to }D\,\}$ is in bijection with the set of $k$-lines in $L(D)$ and is empty exactly when $L(D)=0$ ([[def-complete-linear-system]]).

[F9] The current [[lem-projective-line-divisors-classified-by-degree]] and [[cor-picard-projective-line-integers]] identify the divisor class and attached twist; [[def-little-l-divisor]], [[def-index-speciality-divisor]], [[def-nonspecial-divisor]] and [[def-complete-linear-system]] supply the dimension and linear-system interpretations.

[F10] The Axiom of Choice is available and is inherited only through the suppliers named above; the computations below evaluate explicit formulas and select nothing ([[def-axiom-of-choice]]).


## Verification

**Proof technique:** direct computation of $l(D)$ and $i(D)$ from the explicit cohomology of the twists, followed by a case check on the sign of $d$ for the Riemann-Roch identity, the nonspecialty threshold and the nonemptiness of the complete linear system.

1.1 Degree and attached sheaf. By [F1] the residue degree of the point at infinity is $[\kappa(\infty):k]=1$ and the degree homomorphism is defined on linear-equivalence classes, so for $D=d[\infty]$ the degree is $\deg_k(D)=d\cdot[\kappa(\infty):k]=d$ by [F4]. By [F1] the class of $\infty$ generates $\operatorname{Pic}(\mathbb P^1_k)\cong\mathbb Z$ with $\mathcal O(1)\mapsto1$, so by the current divisor/Picard route [F9] one has $\mathcal O(D)=\mathcal O(d[\infty])\cong\mathcal O(1)^{\otimes d}\cong\mathcal O(d)$; hence $l(D)=l(0+d[\infty])=h^0(\mathcal O(d))$ and $i(D)=h^1(\mathcal O(d))$ by [F5], and $g=g(\mathbb P^1_k)=0$ by [F1]. [F1, F4, F5, F9]

2.1 The explicit values. By [F2] applied with $n=1$ and $A=k$, the space $H^0(\mathbb P^1_k,\mathcal O(d))$ has dimension $d+1$ for $d\ge0$ and vanishes for $d<0$, because $k[x_0,x_1]_d$ has dimension $d+1$ as the space of homogeneous polynomials of degree $d$ in two variables; hence $h^0(\mathcal O(d))=\max(d+1,0)$. By [F3] applied with $n=1$, $H^1(\mathbb P^1_k,\mathcal O(d))=0$ for $d>-2$, that is for $d\ge-1$, while for $d\le-2$ its rank is $\binom{-d-1}{1}=-d-1$; hence $h^1(\mathcal O(d))=\max(-d-1,0)$. Combining with step 1.1, $$l(D)=\max(d+1,0),\qquad i(D)=\max(-d-1,0)$$ for every integer $d$. [F2, F3, step 1.1]

3.1 Riemann-Roch as an identity between explicit numbers. If $d\ge-1$ then $-d-1\le0$, so $i(D)=\max(-d-1,0)=0$, while $d+1\ge0$ gives $l(D)=\max(d+1,0)=d+1$; then $l(D)-i(D)=d+1$. If instead $d\le-2$ then $d+1<0$, so $l(D)=\max(d+1,0)=0$, while $-d-1\ge1$ gives $i(D)=-d-1$; then $l(D)-i(D)=0-(-d-1)=d+1$. In both cases, by step 1.1, $$l(D)-i(D)=d+1=\deg_k(D)+1-g,$$ which is [F6] with $g=0$ and $\deg_k(D)=d$; the two cases $d\ge-1$ and $d\le-2$ exhaust $\mathbb Z$ and meet no other, and for $d\le-2$ the section space $l(D)=0$ is compensated by $i(D)=-d-1>0$, while at $d=-1$ both dimensions and the right-hand side are zero, so the right-hand side stays correct even where it is negative. [F4, F6, step 1.1, step 2.1]

3.2 Nonspecialty and the complete linear system. By [F7] the divisor $D$ is nonspecial exactly when $i(D)=\max(-d-1,0)=0$, that is exactly when $-d-1\le0$, i.e. $d\ge-1$: the divisors $d[\infty]$ of degree at least $-1$ are exactly the nonspecial ones, and by [F6] the same threshold is the equality case $l(D)=d+1$ of the Riemann inequality, while for $d\le-2$ one has $l(D)=0>d+1$ and $D$ is special. For the complete linear system, if $d\ge0$ then $D=d[\infty]$ is an effective divisor and $D$ is linearly equivalent to itself, so $D\in|D|$ and $|D|$ is nonempty; if $d<0$ and $D'=\sum_xn_x[x]$ is effective with $D'$ linearly equivalent to $D$, then $\deg_k(D')=\deg_k(D)=d<0$ by the well-definedness of the degree homomorphism on classes [F1], while effectivity gives $n_x\ge0$ and hence $\deg_k(D')=\sum_xn_x[\kappa(x):k]\ge0$ by [F4] and $[\kappa(x):k]\ge1$, a contradiction; so $|D|$ is empty for $d<0$. This agrees with [F8], under which $|D|$ is in bijection with the $k$-lines in $L(D)$: by step 2.1, $l(D)=\max(d+1,0)$ is at least $1$ exactly for $d\ge0$. [F1, F4, F6, F7, F8, step 2.1]

4.1 Assembly and choice accounting. Step 2.1 computes $l(D)=\max(d+1,0)$ and $i(D)=\max(-d-1,0)$; step 3.1 verifies $l(D)-i(D)=d+1=\deg_k(D)+1-g$ for every integer $d$ by an exhaustive case check on $d\ge-1$ versus $d\le-2$; step 3.2 identifies the nonspecial divisors with the degrees $d\ge-1$ and shows $|D|$ nonempty exactly for $d\ge0$, in agreement with the section dimension. The sheaf identification $\mathcal O(D)\cong\mathcal O(d)$ and the identity $l(D)=h^0(\mathcal O(D))$ of step 1.1 use the current interfaces [F9]; the numerical values of steps 2.1 and 3.1 depend on them only through that identification, and the cohomology values themselves are the published A-page corollaries [F2] and [F3]. The Axiom of Choice enters only through the suppliers recorded in [F10]; every value above is computed from explicit formulas, and no family of objects is selected. [F2, F3, F9, F10, step 1.1, step 2.1, step 3.1, step 3.2] ∎
