---
id: ex-levi-form-of-the-unit-ball
kind: example
title: "Levi form of the unit ball"
status: draft
origin: pipeline
deps:
  - def-levi-form-and-strict-plurisubharmonicity
  - def-levi-pseudoconvex-domain
  - def-wirtinger-operators-in-several-complex-variables
  - lem-metric-ball-neighbourhood-base
  - def-balls-and-polydiscs-in-complex-euclidean-space
  - rem-complex-euclidean-space-dictionary
  - def-norm-and-normed-space
  - ex-convex-subsets-of-rn-are-path-connected
  - def-metric-interior-closure-boundary
  - def-axiom-of-choice
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Harold P. Boas, Lecture Notes on Several Complex Variables"
      url: https://haroldpboas.gitlab.io/courses/650-2019c/notes.pdf
      locator: "§3.2.4, Levi form criterion and the model strongly pseudoconvex domain."
    - title: "Jiri Lebl, Tasty Bits of Several Complex Variables"
      url: https://www.jirka.org/scv/scv.pdf
      locator: "Ch. 2 §§2.3–2.5, Levi form of |z|^2 and strong pseudoconvexity."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Example

Assume the Axiom of Choice (AC). Let $m\ge1$ and put
$\rho(z):=|z|^2-1$ on $\mathbb C^m$, where $|z|^2=\sum_{j<m}|z_j|^2$. Then
$$\mathcal L_\rho(a;\xi)=|\xi|^2=\sum_{j<m}|\xi_j|^2$$
for every $a\in\mathbb C^m$ and every $\xi\in\mathbb C^m$. In particular, at
every point $p$ of the unit sphere $\{|z|=1\}$ and for every nonzero complex
tangent vector $\xi$ at $p$ one has $\mathcal L_\rho(p;\xi)=|\xi|^2>0$.
Consequently the unit ball $B=\{z\in\mathbb C^m:\rho(z)<0\}$ is **strongly
pseudoconvex**, that is: $B$ is a domain, and at every boundary point $p$ of $B$
the function $\rho$ is a $C^\infty$ defining function with $d\rho(p)\ne0$ and
with $\mathcal L_\rho(p;\xi)>0$ for every nonzero complex tangent vector $\xi$
at $p$. In the terminology of [[def-levi-pseudoconvex-domain]], $B$ is Levi
pseudoconvex with strict positivity on complex tangents.

## Facts & Assumptions

**Given:** The Axiom of Choice; an integer $m\ge1$; the function $\rho(z):=|z|^2-1=\sum_{j<m}|z_j|^2-1$ on $\mathbb C^m$; and the unit ball $B:=\{z\in\mathbb C^m:\rho(z)<0\}$.

[F1] For $u\in C^2$ on an open set, the Levi form is $$\mathcal L_u(a;v):=\sum_{j<m}\sum_{k<m}\frac{\partial^2u}{\partial z_j\partial\bar z_k}(a)\,v_j\overline{v_k},$$ and $u$ is strictly plurisubharmonic when $\mathcal L_u(a;v)>0$ for every $a$ and every $v\ne0$ ([[def-levi-form-and-strict-plurisubharmonicity]], with its coordinate labels relabeled from $1,\ldots,m$ to the canonical $0,\ldots,m-1$).

[F2] A domain $\Omega\subseteq\mathbb C^m$ with $C^2$ boundary is Levi pseudoconvex when for every $p\in\partial\Omega$ there are a neighbourhood $U$ and $\rho\in C^2(U,\mathbb R)$ with $\Omega\cap U=\{\rho<0\}$, $d\rho(p)\ne0$, and $\mathcal L_\rho(p;v)\ge0$ for every complex tangent vector $v$ satisfying $\sum_j\frac{\partial\rho}{\partial z_j}(p)v_j=0$ ([[def-levi-pseudoconvex-domain]]).

[F3] The Wirtinger operators are $$\partial_{z_k}f:=\tfrac12\bigl(\partial_{x_k}f-i\,\partial_{y_k}f\bigr),\qquad \partial_{\bar z_k}f:=\tfrac12\bigl(\partial_{x_k}f+i\,\partial_{y_k}f\bigr)\qquad(k<m),$$ and for real totally differentiable $f$ the differential is recovered by $Df(a)h=\sum_{k<m}\bigl(\partial_{z_k}f(a)h_k+\partial_{\bar z_k}f(a)\overline{h_k}\bigr)$ ([[def-wirtinger-operators-in-several-complex-variables]]).

[F4] In a metric space every ball $\beta_n=B(x,1/n)$ with $n\ge1$ is an open subset containing $x$ ([[lem-metric-ball-neighbourhood-base]]).

[F5] The open ball of centre $a$ and radius $\rho>0$ in $\mathbb C^m$ is $B(a,\rho)=\{z:\lVert z-a\rVert<\rho\}$ for the norm $\lVert\cdot\rVert$ of [F6] ([[def-balls-and-polydiscs-in-complex-euclidean-space]]).

[F6] $\lVert z\rVert:=\bigl(\sum_{k<m}|z_k|^2\bigr)^{1/2}$ is a norm on the real vector space underlying $\mathbb C^m$, $\lVert z-w\rVert$ is the metric of $\mathbb C^m$, and the metric, the balls, the open sets, the convergent sequences and the continuous maps of $\mathbb C^m$ are **verbatim** those of $\mathbb R^{2m}$ under $\Phi$ ([[rem-complex-euclidean-space-dictionary]]).

[F7] A norm $N$ satisfies $N(\lambda v)=|\lambda|N(v)$ and $N(u+v)\le N(u)+N(v)$, and $N(v)=0$ only for $v=0$ ([[def-norm-and-normed-space]], claims (N1)–(N3)).

[F8] Every ball of $\mathbb R^n$ in each of the norms $\lVert\cdot\rVert_1,\lVert\cdot\rVert_2,\lVert\cdot\rVert_\infty$ is convex, path-connected and connected ([[ex-convex-subsets-of-rn-are-path-connected]]).

[F9] The boundary of a set $A$ in a metric space is $\partial A=\overline A\setminus\operatorname{int}(A)$ ([[def-metric-interior-closure-boundary]]).

[F10] AC states that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

**Choice use.** AC is the ambient hypothesis recorded in the Example, and [F10] is cited as that hypothesis. The proof selects nothing: the coordinate computations, the point $0\in B$, the explicit radius $r=(\lVert p\rVert-1)/2$ and the radial points $(1-t)p$ studied in the boundary step below are all formulas, so no family of nonempty sets is ever presented for selection.

## Verification

**Proof technique:** direct.

1.1 Writing $z_j=x_j+iy_j$, the coordinate expression $\rho=\sum_{j<m}(x_j^2+y_j^2)-1$ is a polynomial, so $\rho\in C^\infty(\mathbb C^m,\mathbb R)$; applying [F3] to the partials $\partial_{x_j}\rho=2x_j$ and $\partial_{y_j}\rho=2y_j$ gives $\partial_{z_j}\rho(a)=\tfrac12(2x_j-2iy_j)=\overline{a_j}$ and $\partial_{\bar z_j}\rho(a)=\tfrac12(2x_j+2iy_j)=a_j$ at every $a\in\mathbb C^m$. [F3, F10, given, algebra]

1.2 The set $B=\{z:\rho(z)<0\}=\{z:\lVert z\rVert<1\}=B(0,1)$ is the open ball of radius $1$ about $0$ in the sense of [F5], hence is an open subset of $\mathbb C^m$ by [F4] with $n=1$; it is nonempty because $\lVert0\rVert=0<1$ by [F7]; and it is connected, because $\Phi(B)$ is the unit ball of $\mathbb R^{2m}$ for the Euclidean norm, which is path-connected and connected by [F8], while [F6] carries the open sets of $\mathbb C^m$ onto those of $\mathbb R^{2m}$. Thus $B$ is a domain. [F4, F5, F6, F7, F8]

2.1 Differentiating the first-order expressions of step 1.1 gives $\partial^2\rho/\partial z_j\partial\bar z_k=\delta_{jk}$ for all $j,k<m$, so [F1] yields, for every $a\in\mathbb C^m$ and every $\xi\in\mathbb C^m$, $$\mathcal L_\rho(a;\xi)=\sum_{j,k<m}\delta_{jk}\xi_j\overline{\xi_k}=\sum_{j<m}|\xi_j|^2=|\xi|^2.$$ [F1, step 1.1, algebra]

2.2 The boundary of $B$ is exactly the unit sphere $\{\lVert z\rVert=1\}$: if $\lVert p\rVert<1$ then $p\in B$ and $B$ is open by step 1.2, so $p\notin\partial B$ by [F9]; if $\lVert p\rVert>1$ then with $r:=(\lVert p\rVert-1)/2>0$ every $z$ with $\lVert z-p\rVert<r$ satisfies $\lVert z\rVert\ge\lVert p\rVert-\lVert p-z\rVert>(\lVert p\rVert+1)/2>1$ by [F7], so the ball about $p$ of radius $r$ misses $B$ and $p\notin\overline B$, hence $p\notin\partial B$ by [F9]; and if $\lVert p\rVert=1$ then for $0<t<1$ the points $(1-t)p$ lie in $B$, since $\lVert(1-t)p\rVert=1-t<1$ by [F7], and converge to $p$, since $\lVert(1-t)p-p\rVert=t$, while $p\notin B$; hence $p\in\overline B\setminus B=\overline B\setminus\operatorname{int}(B)=\partial B$ by [F9]. [F7, F9, step 1.2]

3.1 At a point $p$ with $\lVert p\rVert=1$ one has $\rho(p)=0$; the complex tangent vectors at $p$ are those $\xi$ with $\sum_j\frac{\partial\rho}{\partial z_j}(p)\xi_j=\sum_j\overline{p_j}\xi_j=0$ by [F2] and step 1.1, and each nonzero such $\xi$ satisfies $\mathcal L_\rho(p;\xi)=|\xi|^2>0$ by step 2.1; also $d\rho(p)\ne0$, because if $D\rho(p)=0$ then [F3] forces every Wirtinger partial $\partial_{z_j}\rho(p)=\overline{p_j}$ and $\partial_{\bar z_j}\rho(p)=p_j$ to vanish, whereas some $p_j\ne0$ since $\lVert p\rVert=1$. [F2, F3, step 1.1, step 2.1]

4.1 Conclusion: every boundary point of $B$ satisfies $\lVert p\rVert=1$ by step 2.2, so with $U:=\mathbb C^m$ the pair $(U,\rho)$ satisfies $B\cap U=\{\rho<0\}$, $d\rho(p)\ne0$ and $\mathcal L_\rho(p;\xi)=|\xi|^2>0$ for every nonzero complex tangent vector $\xi$ by step 3.1; this is the strict form of the condition in [F2], so the unit ball is strongly pseudoconvex, and in particular, weakening $>$ to $\ge$, it is Levi pseudoconvex in the sense of [F2]; moreover $\rho$ is strictly plurisubharmonic on all of $\mathbb C^m$ by [F1] and step 2.1, since $\mathcal L_\rho(a;\xi)=|\xi|^2>0$ for every $a$ and every $\xi\ne0$. [F1, F2, step 2.1, step 2.2] ∎
