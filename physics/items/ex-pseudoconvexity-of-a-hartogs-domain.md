---
id: ex-pseudoconvexity-of-a-hartogs-domain
kind: example
title: "A Hartogs domain with a strictly plurisubharmonic exhaustion"
status: published
origin: pipeline
deps:
  - def-levi-form-and-strict-plurisubharmonicity
  - def-levi-pseudoconvex-domain
  - def-plurisubharmonic-exhaustion-and-hartogs-pseudoconvexity
  - thm-c-two-levi-criterion-for-plurisubharmonicity
  - def-wirtinger-operators-in-several-complex-variables
  - def-path-connected
  - thm-path-connected-implies-connected
  - thm-heine-borel-rn
  - rem-complex-euclidean-space-dictionary
  - def-axiom-of-choice
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jiri Lebl, Tasty Bits of Several Complex Variables"
      url: https://www.jirka.org/scv/scv.pdf
      locator: "Ch. 2 §§2.3–2.5, Hartogs domains, psh exhaustions and Example 2.5.4."
    - title: "Harold P. Boas, Lecture Notes on Several Complex Variables"
      url: https://haroldpboas.gitlab.io/courses/650-2019c/notes.pdf
      locator: "§3.2.4, exhaustion criterion and strictly pseudoconvex examples."
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Example

Assume the Axiom of Choice (AC). Put $s(z,w):=|w|^2e^{2|z|^2}$ and
$$\Omega:=\{(z,w)\in\mathbb C^2:s(z,w)<1\}=\{(z,w):|w|<e^{-|z|^2}\}.$$
Then $\Omega$ is a domain, the function
$$\psi(z,w):=|z|^2+|w|^2+\bigl(1-s(z,w)\bigr)^{-1}$$
is a $C^\infty$ **strictly plurisubharmonic exhaustion** of $\Omega$, and
$\Omega$ is Levi pseudoconvex with strict positivity on complex tangents:
$\mathcal L_s(p;\xi)>0$ for every nonzero complex tangent vector $\xi$ at every
boundary point $p$ of $\Omega$. In particular $\Omega$ carries the continuous
plurisubharmonic exhaustion function $\psi$.

## Facts & Assumptions

**Given:** The Axiom of Choice; the functions $s(z,w)=|w|^2e^{2|z|^2}$ and $\psi=|z|^2+|w|^2+(1-s)^{-1}$; and the domain $\Omega=\{(z,w):s(z,w)<1\}=\{(z,w):|w|<e^{-|z|^2}\}$.

[F1] The Levi form of a $C^2$ function $u$ is $$\mathcal L_u(a;v):=\sum_{j,k}\frac{\partial^2u}{\partial z_j\partial\bar z_k}(a)v_j\overline{v_k},$$ and $u$ is strictly plurisubharmonic when $\mathcal L_u(a;v)>0$ for every $a$ and every $v\ne0$ ([[def-levi-form-and-strict-plurisubharmonicity]]).

[F2] A domain $\Omega$ with $C^2$ boundary is Levi pseudoconvex when every boundary point $p$ has a neighbourhood $U$ and a $C^2$ function $\rho$ with $\Omega\cap U=\{\rho<0\}$, $d\rho(p)\ne0$, and $\mathcal L_\rho(p;v)\ge0$ for every complex tangent vector $v$ with $\sum_j\frac{\partial\rho}{\partial z_j}(p)v_j=0$ ([[def-levi-pseudoconvex-domain]]).

[F3] A $C^2$ function on an open set is plurisubharmonic exactly when its Levi form is semipositive everywhere ([[thm-c-two-levi-criterion-for-plurisubharmonicity]]).

[F4] A continuous plurisubharmonic exhaustion of $\Omega$ is a continuous plurisubharmonic $u$ with $\{u\le c\}$ compact in $\Omega$ for every real $c$ ([[def-plurisubharmonic-exhaustion-and-hartogs-pseudoconvexity]]).

[F5] The Wirtinger operators are $\partial_{z_k}=\tfrac12(\partial_{x_k}-i\partial_{y_k})$ and $\partial_{\bar z_k}=\tfrac12(\partial_{x_k}+i\partial_{y_k})$ ([[def-wirtinger-operators-in-several-complex-variables]]).

[F6] A path in a set $A$ from $x$ to $y$ is a continuous $\gamma:[0,1]\to A$ with $\gamma(0)=x$, $\gamma(1)=y$, and $A$ is path-connected when every two of its points are joined by a path ([[def-path-connected]]); every path-connected space is connected ([[thm-path-connected-implies-connected]]).

[F7] A subset of $\mathbb R^N$ is compact exactly when it is closed and bounded ([[thm-heine-borel-rn]]).

[F8] Through $\Phi(z,w)=(\operatorname{Re}z,\operatorname{Im}z,\operatorname{Re}w,\operatorname{Im}w)$, the metric, the balls, the open sets and the compact sets of $\mathbb C^2$ are verbatim those of $\mathbb R^4$ ([[rem-complex-euclidean-space-dictionary]]).

[F9] AC states that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

**Choice use.** AC is the ambient hypothesis recorded in the Example, and [F9] is cited as that hypothesis. The proof selects nothing: the star-shaped paths, the function $\psi$, the open sublevel bounds and the halving radius arguments are explicit formulas.

## Verification

**Proof technique:** direct.

1.1 Put $E:=e^{2|z|^2}$, so that $s=|w|^2E$ is $C^\infty$ on $\mathbb C^2$; the Wirtinger operators of [F5] give $\partial_zs=2\bar zs$, $\partial_{\bar z}s=2zs$, $\partial_ws=\bar wE$, $\partial_{\bar w}s=wE$, and differentiating once more gives $\partial^2s/\partial z\partial\bar z=2s(1+2|z|^2)$, $\partial^2s/\partial w\partial\bar w=E$, $\partial^2s/\partial z\partial\bar w=2\bar zwE$, $\partial^2s/\partial w\partial\bar z=2z\bar wE$. [F5, F9, given, algebra]

1.2 $\Omega=\{s<1\}$ is open and nonempty ($s(0,0)=0<1$), and it is star-shaped about the origin: if $(z,w)\in\Omega$ and $0<t\le1$, then $|w|<e^{-|z|^2}$ gives $|tw|=t|w|<te^{-|z|^2}\le e^{-t^2|z|^2}$, since $t\le1$ and $t^2|z|^2\le|z|^2$, so $(tz,tw)\in\Omega$; at $t=0$ the point is $(0,0)\in\Omega$. Thus each radial segment $t\mapsto(tz,tw)$ lies in $\Omega$ and joins $(z,w)$ to the origin, so $\Omega$ is path-connected and, by [F6], connected. Hence $\Omega$ is a domain. [F6, given, algebra]

1.3 The function $h(t):=(1-t)^{-1}$ is $C^\infty$ and satisfies $h'(t)=(1-t)^{-2}>0$ and $h''(t)=2(1-t)^{-3}>0$ on $(-\infty,1)$, so $h$ is strictly increasing and convex there; since $s<1$ on $\Omega$, the function $\psi=|z|^2+|w|^2+h(s)$ is $C^\infty$ and real-valued on $\Omega$. [given, algebra]

1.4 For a real-valued $C^2$ function $u$ and a $C^2$ function $\phi$ of one real variable one has $\partial\bar\partial(\phi\circ u)=\phi'(u)\,\partial\bar\partial u+\phi''(u)\,\partial u\wedge\bar\partial u$, hence at every point $\mathcal L_{\phi\circ u}(a;\xi)=\phi'(u(a))\mathcal L_u(a;\xi)+\phi''(u(a))\bigl|\sum_j\partial_{z_j}u(a)\xi_j\bigr|^2$. [F1, F5, algebra]

2.1 The Hermitian matrix of the coefficients of step 1.1 is $M=\begin{pmatrix}2s(1+2|z|^2)&2\bar zwE\\2z\bar wE&E\end{pmatrix}$: its diagonal entries are nonnegative, its determinant is $2s(1+2|z|^2)E-4|z|^2|w|^2E^2=2|w|^2E^2\ge0$, and for $w=0$ it is $\operatorname{diag}(0,E)$ with $E>0$; hence $\mathcal L_s(a;\xi)=\sum_{j,k}\xi_jM_{jk}\bar\xi_k\ge0$ for all $a,\xi$, so [F3] makes $s$ plurisubharmonic on $\mathbb C^2$, and at every point with $w\ne0$ the matrix $M$ is even positive definite (trace at least $E>0$, determinant $2|w|^2E^2>0$). [F3, step 1.1, algebra]

2.2 The boundary of $\Omega$ is $\{s=1\}$: a point with $s(p)<1$ lies in the open set $\Omega$ and a point with $s(p)>1$ has a neighbourhood disjoint from $\Omega$, so neither is a boundary point; and if $s(p)=1$ then $w\ne0$, so $\partial_{\bar w}s(p)=wE\ne0$ and $ds(p)\ne0$, and the points $p-t\nabla s(p)$ for small $t>0$ satisfy $s(p-t\nabla s(p))=1-t|\nabla s(p)|^2+O(t^2)<1$, hence lie in $\Omega$ and converge to $p$, while $p\notin\Omega$; therefore $p\in\partial\Omega$. [step 1.1, step 1.2, algebra]

3.1 Applying step 1.4 to $\phi=h$ and $u=s$, and adding the strictly plurisubharmonic term $|z|^2+|w|^2$ with $\mathcal L_{|z|^2+|w|^2}(a;\xi)=|\xi_1|^2+|\xi_2|^2$, gives at every $a\in\Omega$ and every $\xi\ne0$ the bound $\mathcal L_\psi(a;\xi)=|\xi_1|^2+|\xi_2|^2+h'(s(a))\mathcal L_s(a;\xi)+h''(s(a))|\partial s(a;\xi)|^2\ge|\xi|^2>0$, because $h'>0$, $h''>0$ and $\mathcal L_s\ge0$ by step 2.1; hence $\psi$ is strictly plurisubharmonic on $\Omega$ by [F1]. [F1, step 2.1, step 1.3, step 1.4, algebra]

3.2 On $\{s=1\}$ the matrix $M$ of step 2.1 is positive definite, because $w\ne0$ there; hence with the global defining function $\rho:=s-1$, the neighbourhood $U=\mathbb C^2$ and $\mathcal L_\rho=\mathcal L_s$ one has $\Omega=\{\rho<0\}$, $d\rho(p)\ne0$ and $\mathcal L_\rho(p;\xi)>0$ for every nonzero complex tangent vector $\xi$ at every boundary point $p$; in particular $\Omega$ is Levi pseudoconvex in the sense of [F2]. [F2, step 2.1, step 2.2]

4.1 For $c\le0$ the sublevel set $\{\psi\le c\}$ is empty; for $c>0$ it is contained in $\{|z|^2+|w|^2\le c\}\cap\{s\le1-c^{-1}\}$, on which $\psi$ is continuous, so $\{\psi\le c\}$ is a closed subset of $\mathbb C^2$; it is bounded, and it lies in $\Omega$ because $s\le1-c^{-1}<1$; by [F8] it is a closed and bounded subset of $\mathbb R^4$, hence compact by [F7], and a compact subset of $\mathbb C^2$ contained in $\Omega$ is compact in $\Omega$. Thus every sublevel set of $\psi$ is compact, and with steps 1.2, 1.3 and 3.1 the function $\psi$ is a continuous strictly plurisubharmonic exhaustion of $\Omega$ in the sense of [F4]. [F4, F7, F8, step 1.2, step 1.3, step 3.1, step 3.2, algebra] ∎

## Remarks

- **Relation to the boundary-distance formulation.** The library defines Hartogs pseudoconvexity by plurisubharmonicity of $-\log\delta_\Omega$ ([[def-plurisubharmonic-exhaustion-and-hartogs-pseudoconvexity]]), and the direction *Hartogs pseudoconvexity implies the existence of a continuous plurisubharmonic exhaustion* is [[thm-equivalent-psh-exhaustion-and-boundary-distance-pseudoconvexity]]. The converse direction, which would upgrade the exhaustion $\psi$ constructed here to plurisubharmonicity of $-\log\delta_\Omega$, is not part of the published statement of that theorem. This example therefore establishes the exhaustion and the strict Levi boundary condition, and records the identification with Hartogs pseudoconvexity as an obligation rather than assuming it.
