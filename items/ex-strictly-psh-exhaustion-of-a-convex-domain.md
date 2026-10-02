---
id: ex-strictly-psh-exhaustion-of-a-convex-domain
kind: example
title: "A strictly plurisubharmonic exhaustion of the convex unit ball"
status: published
origin: pipeline
deps:
  - def-levi-form-and-strict-plurisubharmonicity
  - thm-c-two-levi-criterion-for-plurisubharmonicity
  - def-plurisubharmonic-exhaustion-and-hartogs-pseudoconvexity
  - def-balls-and-polydiscs-in-complex-euclidean-space
  - thm-metric-open-set-algebra
  - rem-complex-euclidean-space-dictionary
  - def-metric-bounded-diameter
  - def-norm-and-normed-space
  - def-convex-subset-of-euclidean-space
  - def-compact-space
  - def-wirtinger-operators-in-several-complex-variables
  - thm-logarithm-derivative-and-integral
  - thm-real-power-continuity-and-derivatives
  - thm-exponential-is-strictly-increasing
  - def-natural-logarithm
  - def-path-connected
  - thm-path-connected-implies-connected
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
      locator: "§3.2.4, plurisubharmonic exhaustions and strictly pseudoconvex examples"
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry"
      url: https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf
      locator: "Ch. VIII §5, exhaustion functions on the ball"
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Example

Assume the Axiom of Choice (AC). Fix $m\ge1$, let $B:=\{z\in\mathbb C^m:\lVert z\rVert<1\}$ be the unit ball, put $u(z):=1-\lVert z\rVert^2$, and set
$$\psi(z):=-\log u(z)=-\log\bigl(1-\lVert z\rVert^2\bigr).$$
Then $B$ is a nonempty convex domain in $\mathbb C^m$ and $\psi$ is a $C^\infty$ strictly plurisubharmonic exhaustion of $B$: at every $a\in B$ and every $\xi\in\mathbb C^m\setminus\{0\}$ the Levi form is
$$\mathcal L_\psi(a;\xi)=\frac{\lVert\xi\rVert^2}{u(a)}+\frac{\bigl|\sum_{j<m}\overline{a_j}\xi_j\bigr|^2}{u(a)^2}>0,$$
and every sublevel set $\{\psi\le c\}$, $c\in\mathbb R$, is a compact subset of $B$.

## Facts & Assumptions

**Given:** The Axiom of Choice; the unit ball $B=\{z\in\mathbb C^m:\lVert z\rVert<1\}$ with $m\ge1$; the functions $u=1-\lVert z\rVert^2$ and $\psi=-\log u$.

[F1] For open $\Omega\subseteq\mathbb C^m$ and $u\in C^2(\Omega,\mathbb R)$ the Levi form is $$\mathcal L_u(a;v):=\sum_{j<m}\sum_{k<m} \frac{\partial^2 u}{\partial z_j\partial\overline z_k}(a)\,v_j\overline{v_k},$$ and $u$ is **strictly plurisubharmonic** when $\mathcal L_u(a;v)>0$ for every $a\in\Omega$ and every $v\ne0$ ([[def-levi-form-and-strict-plurisubharmonicity]], with its coordinate labels relabeled from $1,\ldots,m$ to the canonical $0,\ldots,m-1$).

[F2] A $C^2$ function is plurisubharmonic on $\Omega$ exactly when $\mathcal L_u(a;v)\ge0$ for every $a\in\Omega$ and every $v\in\mathbb C^m$ ([[thm-c-two-levi-criterion-for-plurisubharmonicity]]).

[F3] A continuous plurisubharmonic exhaustion of a domain $\Omega$ is a continuous plurisubharmonic $u$ on $\Omega$ with $\{u\le c\}$ compact in $\Omega$ for every real $c$ ([[def-plurisubharmonic-exhaustion-and-hartogs-pseudoconvexity]]).

[F4] The **open ball** and **closed ball** of centre $a$ and radius $\rho>0$ are $B(a,\rho)=\{z:\lVert z-a\rVert<\rho\}$ and $\overline B(a,\rho)=\{z:\lVert z-a\rVert\le\rho\}$ ([[def-balls-and-polydiscs-in-complex-euclidean-space]]).

[F5] In a metric space $(X,d)$ the open ball $B(x,r)$ is open and the closed ball $\bar B(x,r)$ is closed, for every $x$ and every $r>0$ ([[thm-metric-open-set-algebra]]).

[F6] Through the dictionary $\Phi:\mathbb C^m\to\mathbb R^{2m}$ one has $\lVert z\rVert=(\sum_{k<m}|z_k|^2)^{1/2}$ with $|z_k|^2=x_k^2+y_k^2$, the balls, open sets and continuous maps of $\mathbb C^m$ are **verbatim** those of $\mathbb R^{2m}$, and a subset of $\mathbb C^m$ is compact exactly when it is closed and bounded ([[rem-complex-euclidean-space-dictionary]]).

[F7] A subset $A$ of a metric space is **bounded** when $A=\emptyset$ or $A\subseteq B(x_0,r)$ for some point $x_0$ and some real $r>0$ ([[def-metric-bounded-diameter]]).

[F8] A norm $N$ satisfies $N(v)=0$ if and only if $v=0$, absolute homogeneity $N(\lambda v)=|\lambda|N(v)$, and the triangle inequality $N(u+v)\le N(u)+N(v)$ ([[def-norm-and-normed-space]]).

[F9] A subset $U\subseteq\mathbb R^m$ is **convex** when for all $x,y\in U$ and all $t\in[0,1]$ the point $(1-t)x+ty$ lies in $U$ ([[def-convex-subset-of-euclidean-space]]).

[F10] A subset $A$ of a topological space is a **compact subset** when the subspace $(A,\mathcal T_A)$ is a compact topological space ([[def-compact-space]]).

[F11] The Wirtinger operators are $\partial_{z_k}=\tfrac12(\partial_{x_k}-i\partial_{y_k})$ and $\partial_{\bar z_k}=\tfrac12(\partial_{x_k}+i\partial_{y_k})$ ([[def-wirtinger-operators-in-several-complex-variables]]).

[F12] For $x>0$, $\log$ is differentiable with $\log'(x)=1/x$ ([[thm-logarithm-derivative-and-integral]]).

[F13] For every real $\alpha$ the function $x\mapsto x^\alpha$ is differentiable on $(0,\infty)$ with $(x^\alpha)'=\alpha x^{\alpha-1}$ ([[thm-real-power-continuity-and-derivatives]]).

[F14] The exponential function is continuous and strictly increasing on $\mathbb R$ ([[thm-exponential-is-strictly-increasing]]).

[F15] $\log$ is the inverse function of $\exp$, so that $\exp(\log x)=x$ for every $x>0$ ([[def-natural-logarithm]]).

[F16] A set $X$ is **path-connected** when every pair of its points is joined by a path in $X$ ([[def-path-connected]]); every path-connected space is connected ([[thm-path-connected-implies-connected]]).

[F17] AC states that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

**Choice use.** AC is the ambient hypothesis recorded in the Example and [F17] is cited as that hypothesis. The proof selects nothing: the ball, the function $\psi$, the straight-line paths and the radii $r=(1-\exp(-c))^{1/2}$ are explicit formulas.

## Verification

**Proof technique:** direct.

1.1 By [F6] one has $\lVert z\rVert^2=\sum_{j<m}|z_j|^2=\sum_{j<m}(x_j^2+y_j^2)$, and $B$ is the open ball $B(0,1)$ in the sense of [F4]; it is open by [F5] and nonempty because $\lVert0\rVert=0<1$ by [F8]. It is convex: for $z,w\in B$ and $t\in[0,1]$, [F8] gives $\lVert(1-t)z+tw\rVert\le(1-t)\lVert z\rVert+t\lVert w\rVert<(1-t)+t=1$ since $1-t\ge0$ and $t\ge0$, so $(1-t)z+tw\in B$, which is the straight-line condition of [F9] transported by the $\mathbb R$-linear dictionary [F6]. The segments $t\mapsto(1-t)z+tw$ are continuous paths in $B$ from $z$ to $w$, so $B$ is path-connected by [F16] and connected by [F16]; hence $B$ is a nonempty convex domain in $\mathbb C^m$. [F4, F5, F6, F8, F9, F16, F17, given, algebra]

2.1 The function $u=1-\sum_{j<m}(x_j^2+y_j^2)$ is a polynomial in the real coordinates, hence $C^\infty$ on $\mathbb C^m$, and $u>0$ on $B$ by step 1.1, so $\psi=-\log u$ is real-valued on $B$. Moreover $\log$ is $C^\infty$ on $(0,\infty)$: $\log'=1/t$ by [F12], and $t\mapsto t^{-1}$ has $k$-th derivative $(-1)^kk!\,t^{-k-1}$, a continuous function on $(0,\infty)$, by induction from [F13], so every higher derivative of $\log$ exists and is continuous there. Hence $\psi\in C^\infty(B)$, and differentiating the composition along the real coordinate directions gives $\partial_{x_j}\psi=2x_j/u$ and $\partial_{y_j}\psi=2y_j/u$ on $B$; applying the Wirtinger operators of [F11] gives $\partial_{z_j}\psi=\tfrac12(2x_j-2iy_j)/u=(x_j-iy_j)/u=\overline{z_j}/u$ and $\partial_{\bar z_j}\psi=\tfrac12(2x_j+2iy_j)/u=(x_j+iy_j)/u=z_j/u$ at every point of $B$. [F6, F11, F12, F13, induction, algebra]

3.1 Differentiating the first-order expressions of step 2.1 once more gives $\partial^2\psi/\partial z_j\partial\bar z_k=\delta_{jk}/u+\overline{z_j}z_k/u^2$: indeed $\partial_{\bar z_k}(\overline{z_j}/u)=(\partial_{\bar z_k}\overline{z_j})/u-\overline{z_j}(\partial_{\bar z_k}u)/u^2=\delta_{jk}/u+\overline{z_j}z_k/u^2$, because $\partial_{\bar z_k}u=-z_k$. [step 2.1, algebra]

3.2 For $z\in B$ and real $c$, since $\log$ is the inverse of the strictly increasing function $\exp$ by [F14] and [F15], one has $\psi(z)\le c\iff u(z)\ge\exp(-c)\iff\lVert z\rVert^2\le1-\exp(-c)$; hence $\{\psi\le c\}=\{z:\lVert z\rVert^2\le1-\exp(-c)\}$. If $1-\exp(-c)<0$ this set is empty; if $1-\exp(-c)=0$ it is the compact singleton $\{0\}$; otherwise it is the closed ball $\overline B(0,r)$ of [F4] with $r:=(1-\exp(-c))^{1/2}\in(0,1)$, which is closed by [F5] and bounded in the sense of [F7] because it is contained in $B(0,r+1)$, hence compact in $\mathbb C^m$ by [F6]. As it is contained in $B$, and compactness of a subset is intrinsic by [F10] with the subspace topology inherited from $B$ equal to that inherited from $\mathbb C^m$, it is a compact subset of $B$. [F4, F5, F6, F7, F10, F14, F15, step 2.1, algebra]

4.1 Substituting step 3.1 into [F1] gives, at every $a\in B$ and every $\xi\in\mathbb C^m$, the Levi form $\mathcal L_\psi(a;\xi)=\sum_{j,k}(\delta_{jk}/u(a)+\overline{a_j}a_k/u(a)^2)\xi_j\overline{\xi_k}=\lVert\xi\rVert^2/u(a)+\bigl|\sum_{j<m}\overline{a_j}\xi_j\bigr|^2/u(a)^2$, because $u(a)>0$ by step 2.1; this is $\ge\lVert\xi\rVert^2/u(a)>0$ for every $\xi\ne0$, so $\psi$ is strictly plurisubharmonic on $B$ by [F1], and in particular plurisubharmonic there by [F2]. [F1, F2, step 2.1, step 3.1, algebra]

5.1 Conclusion: by step 1.1 the ball $B$ is a nonempty convex domain in $\mathbb C^m$; by step 2.1 the function $\psi$ is $C^\infty$ on $B$; by step 4.1 it is strictly plurisubharmonic, hence plurisubharmonic; and by step 3.2 every sublevel set $\{\psi\le c\}$ is a compact subset of $B$. Therefore $\psi$ is a continuous strictly plurisubharmonic exhaustion of the convex unit ball in the sense of [F3]. [F3, step 1.1, step 2.1, step 3.2, step 4.1] ∎
