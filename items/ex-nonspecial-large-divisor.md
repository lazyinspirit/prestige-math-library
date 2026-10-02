---
id: ex-nonspecial-large-divisor
kind: example
title: "A sufficiently positive divisor is nonspecial and Riemann-Roch counts its sections"
status: draft
origin: pipeline
deps:
  - cor-h0-projective-space-o-d-homogeneous-polynomials
  - cor-picard-projective-line-integers
  - cor-top-cohomology-projective-space-o-d
  - def-algebraic-curve-over-field
  - def-axiom-of-choice
  - def-degree-divisor-proper-curve
  - def-divisor-smooth-proper-curve
  - def-genus-euler-characteristic-curve
  - def-index-speciality-divisor
  - def-little-l-divisor
  - def-nonspecial-divisor
  - lem-large-positive-divisors-nonspecial
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

Assume the Axiom of Choice inherited from the current fixed-direction vanishing, divisor and Riemann-Roch suppliers.

Let $k$ be a field, let $C$ be a smooth proper geometrically integral curve
over $k$ of genus $g=g(C)$ ([[def-algebraic-curve-over-field]],
[[def-genus-euler-characteristic-curve]]), let $\varphi:C\to\mathbb P^1_k$ be
a finite $k$-morphism, and let $A$ be an effective divisor on $C$ with
$\mathcal O_C(A)\cong\varphi^*\mathcal O_{\mathbb P^1_k}(1)$. Let $D_0$ be any
divisor on $C$ and let $n_0=n_0(D_0,\varphi)$ be an integer supplied for $D_0$
and $\varphi$ by the fixed-direction vanishing theorem. Then for every $n\ge
n_0$ and every effective divisor $E$ the divisor
$$D=D_0+nA+E$$
is nonspecial, $H^1(C,\mathcal O_C(D))=0$
([[lem-large-positive-divisors-nonspecial]]), so Riemann-Roch computes its
dimension exactly:
$$l(D)=\deg_k(D)+1-g$$
([[thm-riemann-roch-as-l-minus-index]]).

The concrete instance is the projective line. Take $C=\mathbb P^1_k$,
$\varphi=\mathrm{id}$ and $A=[\infty]$, so that
$\varphi^*\mathcal O(1)=\mathcal O(1)\cong\mathcal O([\infty])$; then
$g=0$ and, for every $d\in\mathbb Z$,
$$l(d[\infty])=h^0(\mathbb P^1_k,\mathcal O(d))=\begin{cases}d+1,&d\ge0,\\0,&d<0,\end{cases} \qquad i(d[\infty])=h^1(\mathbb P^1_k,\mathcal O(d))=\begin{cases}0,&d\ge-1,\\-d-1,&d\le-2,\end{cases}$$
while $\deg_k(d[\infty])=d\cdot[\kappa(\infty):k]=d$. Consequently:

1. for $d\ge-1$ the divisor $d[\infty]$ is nonspecial, $i(d[\infty])=0$, and
   Riemann-Roch reads $l(d[\infty])=d+1=\deg_k(d[\infty])+1-g$ — including
   the boundary case $d=-1$, where $l=i=0$ (the sheaf $\mathcal O(-1)$ has no
   sections);
2. for $d\le-2$ the divisor is special, with $l(d[\infty])=0$ and
   $i(d[\infty])=-d-1\ge1$, and Riemann-Roch reads
   $0-(-d-1)=d+1$;
3. so in this family nonspeciality holds exactly for $d\ge-1$, and the exact
   threshold is the boundary value $d=-1$; the general statement only
   provides some threshold $n_0(D_0,\varphi)$ depending on $D_0$ and on the
   fixed morphism, which this instance computes exactly.

The "sufficiently positive" threshold of the general statement is the
fixed-direction one of the vanishing theorem; the example does not assert the
universal bound "$\deg_k(D)>2g-2$ implies $i(D)=0$", which requires Serre
duality and belongs to the next pair.

*Scaffold repair, recorded for the owner.* The frozen scaffold cited the
examples-page item `ex-cohomology-o-d-projective-line-all-d` (on another page)
and `ex-riemann-roch-projective-line-divisor` (on this page) for the
projective-line values $l(d[\infty])=d+1$ and the nonspecial range. Both are
examples and cannot carry a load; the citations are replaced by the published
A-page suppliers
[[cor-h0-projective-space-o-d-homogeneous-polynomials]],
[[cor-top-cohomology-projective-space-o-d]] and
[[lem-projective-line-divisors-classified-by-degree]], together with
[[cor-picard-projective-line-integers]] for the identification
$\mathcal O(d[\infty])\cong\mathcal O(d)$ of the attached sheaves. Every
promised numerical claim is preserved: $l(d[\infty])=d+1$ for $d\ge0$,
nonspeciality exactly for $d\ge-1$, the boundary case $d=-1$ with
$l=i=0$, and the fixed-direction restriction.

The current [[lem-large-positive-divisors-nonspecial]] supplies the fixed-direction
vanishing, and [[thm-riemann-roch-as-l-minus-index]] supplies the dimension
identity. The current projective-line divisor and Picard interfaces
[[lem-projective-line-divisors-classified-by-degree]] and
[[cor-picard-projective-line-integers]] identify the attached twists; the
published cohomology corollaries supply their dimensions.

## Facts & Assumptions

**Given:** the Axiom of Choice inherited from the current fixed-direction vanishing, divisor and Riemann-Roch suppliers; a field $k$, a smooth proper geometrically integral curve $C$ over
$k$ of genus $g$, a finite $k$-morphism $\varphi:C\to\mathbb P^1_k$, an
effective divisor $A$ with $\mathcal O_C(A)\cong\varphi^*\mathcal O(1)$, a
divisor $D_0$ and an integer $n_0=n_0(D_0,\varphi)$ supplied by the
fixed-direction vanishing theorem for $D_0$; and the instance $C=\mathbb P^1_k$,
$\varphi=\mathrm{id}$, $A=[\infty]$, $d\in\mathbb Z$.

[F1] Fixed-direction nonspeciality: for every $n\ge n_0$ and every effective $E$, the divisor $D_0+nA+E$ is nonspecial, that is, $H^1(C,\mathcal O_C(D_0+nA+E))=0$; the threshold depends on $D_0$ and on $\varphi$ and is not a bound in the degree ([[lem-large-positive-divisors-nonspecial]], [[def-nonspecial-divisor]]).

[F2] Riemann-Roch and the index of speciality: $l(D)-i(D)=\deg_k(D)+1-g$ with $i(D)=h^1(D)\ge0$, and $D$ is nonspecial exactly when $i(D)=0$, equivalently when $l(D)=\deg_k(D)+1-g$; here $l(D)=h^0(D)$ and $i(D)=h^1(D)$ ([[thm-riemann-roch-as-l-minus-index]], [[def-genus-euler-characteristic-curve]], [[def-index-speciality-divisor]], [[def-little-l-divisor]]).

[F3] Projective-line data: $\mathbb P^1_k$ is a smooth proper geometrically integral curve of genus $0$; the point at infinity has residue degree $[\kappa(\infty):k]=1$; the coordinate section $x_0$ vanishes exactly at infinity with multiplicity one, so $\operatorname{div}(x_0)=[\infty]$ and $\mathcal O(1)\cong\mathcal O([\infty])$ with $\deg_k\mathcal O(1)=1$ ([[lem-projective-line-divisors-classified-by-degree]]).

[F4] The current [[cor-picard-projective-line-integers]] identifies the degree class of every invertible sheaf on $\mathbb P^1_k$ with a unique twist. Together with the divisor-to-line-bundle interface in [[lem-projective-line-divisors-classified-by-degree]], this gives $\mathcal O(d[\infty])\cong\mathcal O(d)$ for every $d\in\mathbb Z$.

[F5] Degree of a multiple: $\deg_k$ is a group homomorphism on divisors with $\deg_k[x]=[\kappa(x):k]$ for a closed point, so with [F3] one has $\deg_k(d[\infty])=d$ ([[def-degree-divisor-proper-curve]], [[def-divisor-smooth-proper-curve]]).

[F6] Cohomology of the twists of the projective line: for $n=1$, $H^0(\mathbb P^1_k,\mathcal O(d))\cong k[x_0,x_1]_d$ for $d\ge0$ and $0$ for $d<0$, while $H^1(\mathbb P^1_k,\mathcal O(d))=0$ for $d\ge-1$ and has dimension $\binom{-d-1}{1}=-d-1$ for $d\le-2$; with [F4] these are $l(d[\infty])$ and $i(d[\infty])$ ([[cor-h0-projective-space-o-d-homogeneous-polynomials]], [[cor-top-cohomology-projective-space-o-d]], [[def-little-l-divisor]], [[def-index-speciality-divisor]]).

[F7] Fixed direction only: the nonspeciality theorem is stated for the fixed ample direction $A$; it is explicitly not claimed there that every divisor of degree greater than $2g-2$ is nonspecial, which requires the duality pair following this page ([[lem-large-positive-divisors-nonspecial]]).

[F8] The Axiom of Choice is available and is inherited only through the suppliers of [F1], [F2], [F3], [F4] and [F6]; the computation evaluates the given data and selects nothing ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** apply the fixed-direction nonspeciality theorem and Riemann-Roch to the general divisor $D_0+nA+E$, then compute both sides explicitly on the projective line with the coordinate divisor $d[\infty]$.

1.1 The general statement. By [F1], for $n\ge n_0$ and $E\ge0$ the divisor $D=D_0+nA+E$ satisfies $H^1(C,\mathcal O_C(D))=0$. [F1]

1.2 The projective-line instance and its sheaves. Let $C=\mathbb P^1_k$, $\varphi=\mathrm{id}$ and $A=[\infty]$. By [F3] one has $\mathcal O(1)\cong\mathcal O([\infty])=\mathcal O(A)=\varphi^*\mathcal O(1)$, so this is an instance of the general data. By [F4] the attached invertible sheaves satisfy $\mathcal O(d[\infty])\cong\mathcal O(d)$ for every $d\in\mathbb Z$; the identifications use the current divisor/Picard interfaces of [F3] and [F4]. [F3, F4]

1.3 The degree. By [F5] and [F3] the residue degree of infinity is $1$, so $\deg_k(d[\infty])=d\cdot[\kappa(\infty):k]=d$. [F3, F5]

2.1 Riemann-Roch for $D$. By [F2] the identity $l(D)-i(D)=\deg_k(D)+1-g$ holds with $i(D)=h^1(D)$; by step 1.1 $i(D)=0$ and $D$ is nonspecial, so $l(D)=\deg_k(D)+1-g$. [F1, F2, step 1.1]

2.2 The dimensions of the twists. By [F6] and step 1.2, $l(d[\infty])=h^0(\mathcal O(d))$ is $d+1$ for $d\ge0$ and $0$ for $d<0$, while $i(d[\infty])=h^1(\mathcal O(d))$ is $0$ for $d\ge-1$ and $-d-1$ for $d\le-2$. In particular $i(d[\infty])=0$ exactly when $d\ge-1$. [F6, step 1.2]

3.1 Nonspeciality and Riemann-Roch on the projective line. Combine steps 2.2 and 1.3. If $d\ge-1$, then $i(d[\infty])=0$, so $d[\infty]$ is nonspecial by [F2], and the identity of [F2] reads $l(d[\infty])=d+1=\deg_k(d[\infty])+1-g$ since $g=0$ by [F3]; at $d=-1$ this is $l=i=0$. If $d\le-2$, then $i(d[\infty])=-d-1\ge1$, so $d[\infty]$ is special by [F2], while $l(d[\infty])=0$; the identity of [F2] reads $0-(-d-1)=d+1=\deg_k(d[\infty])+1-g$. Hence in this family nonspeciality holds exactly for $d\ge-1$, with $d=-1$ the exact threshold, whereas the general theorem supplies only the threshold $n_0(D_0,\varphi)$ along the fixed direction. [F2, F3, F6, step 2.2, step 1.3]

4.1 Fixed-direction restriction and choice accounting. The general statement is the fixed-direction form of [F1]: it is a bound along the one ample direction $A$, depending on $D_0$ and $\varphi$, and [F7] records that no universal bound $\deg_k(D)>2g-2$ is asserted here; that bound belongs to the duality pair following this page. The Axiom of Choice of [F8] is inherited only through the suppliers of [F1], [F2], [F3], [F4] and [F6] (the fixed-direction vanishing theorem, the divisor–tensor dictionary and the cohomology of projective space), and the computation selects nothing beyond the given curve, morphism, divisor and integer $d$. [F1, F7, F8, step 2.1, step 3.1] ∎
