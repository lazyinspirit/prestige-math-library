---
id: lem-qftx-positive-real-monad-hyperplane-twist-sequences
kind: lemma
title: Exact holomorphic hyperplane sequences for negative twists
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-positive-real-linear-monad-normal-forms
dependency_level: 1
deps:
  - def-complex-projective-space-and-holomorphic-charts
  - def-qftx-gaga-projective-twisting-line-bundles
dependency_roles:
  def-complex-projective-space-and-holomorphic-charts: mathematical-premise
  def-qftx-gaga-projective-twisting-line-bundles: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "MIT OpenCourseWare 18.117 Topics in Several Complex Variables, Spring 2005, lecture notes prepared by Jonathan Campbell"
      url: https://ocw.mit.edu/courses/18-117-topics-in-several-complex-variables-spring-2005/3e8b0c3499d6226959485ace042cdaab_18117notes.pdf
      locator: "Lecture 7, PDF pp. 18–20: standard projective charts and coordinate transition functions; the exact hyperplane-kernel computation is supplied here."
    - title: "R. Dervan, lectures; Qiangru Kuang, notes, University of Cambridge Mathematics Tripos Part III, Complex Manifolds, Lent 2019"
      url: https://qk206.user.srcf.net/notes/complex_manifolds.pdf
      locator: "§5, printed pp. 27–29: local frames and restriction of line bundles; the stalkwise exactness is reconstructed here."
verification:
  precheck: pending
---

## Statement

For $r\ge1$, let $H=\{[Z_0:\cdots:Z_r]\in\mathbb P^r(\mathbb C):Z_0=0\}$ and
let $i:H\hookrightarrow\mathbb P^r(\mathbb C)$ be inclusion. For every
integer $m$, the homogeneous coordinate $Z_0$ defines an exact sequence of
holomorphic sheaves
$$
0\longrightarrow\mathcal O_{\mathbb P^r}(m-1)
\xrightarrow{\ \cdot Z_0\ }\mathcal O_{\mathbb P^r}(m)
\longrightarrow i_*\mathcal O_H(m)\longrightarrow0.
$$
Here $i_*\mathcal O_H(m)$ assigns to an open set $U$ the holomorphic
sections of $\mathcal O_H(m)$ on $U\cap H$. Twisting the sequence with
$m=0$ by $\mathcal O_{\mathbb P^r}(-1)$ gives, in particular,
$$
0\longrightarrow\mathcal O_{\mathbb P^r}(-2)
\longrightarrow\mathcal O_{\mathbb P^r}(-1)
\longrightarrow i_*\mathcal O_H(-1)\longrightarrow0.
$$

## Statement references

[[def-complex-projective-space-and-holomorphic-charts]]

[[def-qftx-gaga-projective-twisting-line-bundles]]

[MIT OpenCourseWare 18.117, Lecture 7](https://ocw.mit.edu/courses/18-117-topics-in-several-complex-variables-spring-2005/3e8b0c3499d6226959485ace042cdaab_18117notes.pdf)

[Dervan–Kuang, *Complex Manifolds*, §5](https://qk206.user.srcf.net/notes/complex_manifolds.pdf)

## Facts & Assumptions

**Given:** The standard projective charts, the coordinate hyperplane $H$, and
the transition-defined twisting line bundles.

[F1] On the affine chart $Z_j\ne0$, the projective coordinates are the
holomorphic ratios $Z_i/Z_j$; on a chart with $j\ne0$, the hyperplane $H$ is
the local coordinate divisor $Z_0/Z_j=0$.
[[def-complex-projective-space-and-holomorphic-charts]]

[F2] The bundles $\mathcal O_{\mathbb P^r}(m)$ are locally free line bundles
with transition functions $(Z_i/Z_j)^m$, and their restrictions to $H$ have
the corresponding twisting transitions.
[[def-qftx-gaga-projective-twisting-line-bundles]]

## Proof

**Given:** The projective charts and transition rules in [F1]–[F2].

1.1 On a chart $Z_j\ne0$ with $j\ne0$, put $w=Z_0/Z_j$. In local frames of
$\mathcal O(m-1)$ and $\mathcal O(m)$, multiplication by $Z_0$ is
multiplication by $w$ up to the invertible frame factor. The holomorphic
local ring has no zero divisors, so this map is injective on stalks. The
quotient map is restriction to $w=0$. If a holomorphic germ $f(u,w)$
restricts to zero there, then $f(u,0)=0$ and
$$
f(u,w)=w\,g(u,w),\qquad
g(u,w)=\int_0^1\frac{\partial f}{\partial w}(u,tw)\,dt.
$$
On a sufficiently small polydisc the integrand is holomorphic in $(u,w)$;
its locally uniformly convergent power series may be integrated termwise,
so $g$ is holomorphic and the germ lies in $(w)$. Thus the kernel of
restriction is precisely the image of multiplication. On a chart not
meeting $H$, the section $Z_0$ is nowhere zero, so multiplication is an
isomorphism and the quotient sheaf is zero. These stalk calculations prove
exactness of the first sequence for every $m$.
[F1, F2, given, algebra]

2.1 Tensor the exact $m=0$ sequence by the locally free line bundle
$\mathcal O(-1)$. Tensoring is exact because on each stalk this bundle is a
free rank-one module. By the transition rule in [F2], its restriction to
$H$ is $\mathcal O_H(-1)$; hence
$i_*\mathcal O_H\otimes\mathcal O(-1)\cong i_*\mathcal O_H(-1)$ on each
stalk. The resulting exact sequence is
$$
0\to\mathcal O_{\mathbb P^r}(-2)\to\mathcal O_{\mathbb P^r}(-1)
\to i_*\mathcal O_H(-1)\to0,
$$
as claimed. [F1, F2, step 1.1, algebra] ∎
