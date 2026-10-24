---
id: thm-compact-support-dbar-solution-cn
kind: theorem
title: Compactly supported dbar solutions on complex Euclidean space
status: published
origin: pipeline
deps:
  - def-bigraded-complex-differential-forms
  - thm-cauchy-pompeiu-formula
  - lem-cauchy-transform-with-smooth-parameters
  - def-axiom-of-choice
  - thm-cauchy-riemann-characterization-in-several-complex-variables
  - def-holomorphic-function-in-several-complex-variables
  - thm-identity-theorem-in-several-complex-variables
  - def-compactly-supported-differential-form
  - def-interior-closure-boundary-top
  - thm-closed-subspace-of-a-compact-space-is-compact
  - rem-complex-euclidean-space-dictionary
  - def-metric-bounded-diameter
  - def-metric-ball
  - def-norm-and-normed-space
  - def-euclidean-spheres-and-closed-balls
  - cor-euclidean-spheres-are-path-connected
  - thm-path-connected-implies-connected
  - def-connected-component-and-quasicomponent
  - cor-components-of-open-subsets-of-rn-are-polygonally-connected
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lebl, Tasty Bits of Several Complex Variables, v4.4, Chapter 4 §4.2"
      url: https://www.jirka.org/scv/scv.pdf
      locator: "Theorem 4.2.1 and complete proof, printed pp. 132–134, PDF lines 10838–10967. The source's Exercise 4.2.2 is only a prompt about differentiating under the integral; this proof instead uses the fully proved local Cauchy-transform supplier."
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
---

## Statement

Assume AC. Let $n\ge2$, and let $g=\sum_{j=1}^n g_j\,d\bar z_j$ be a smooth compactly supported $\bar\partial$-closed $(0,1)$-form on $\mathbb C^n$. Then there is a unique smooth compactly supported function $u$ on $\mathbb C^n$ such that $\bar\partial u=g$. The solution vanishes on the unique unbounded connected component of $\mathbb C^n\setminus\operatorname{supp}g$.

## Facts & Assumptions

**Given:** An integer $n\ge2$, the full Axiom of Choice, and a smooth compactly supported $\bar\partial$-closed $(0,1)$-form $g=\sum_{j=1}^n g_j\,d\bar z_j$ on $\mathbb C^n$.

[F1] The $dz^I\wedge d\bar z^J$ expansion is unique, and the $\bar\partial$ coefficient formula differentiates each coefficient in $\bar z_j$ and wedges $d\bar z_j$ before its type factors ([[def-bigraded-complex-differential-forms]]).

[F2] Under full AC, the whole-plane Cauchy transform $T_k h$ of a compactly supported smooth function is globally smooth and satisfies $\partial_{\bar z_k}T_kh=h$ ([[lem-cauchy-transform-with-smooth-parameters]]).

[F3] For every $\ell\ne k$, the same whole-plane transform obeys $\partial_{\bar z_\ell}T_kh=T_k(\partial_{\bar z_\ell}h)$ ([[lem-cauchy-transform-with-smooth-parameters]]).

[F4] AC says every family of nonempty sets has a choice function ([[def-axiom-of-choice]]); the Cauchy transform supplier and Cauchy–Pompeiu formula both explicitly assume AC ([[lem-cauchy-transform-with-smooth-parameters]], [[thm-cauchy-pompeiu-formula]]).

[F5] The support of a differential form is the closure of its nonzero locus; the form is compactly supported when that support is compact ([[def-compactly-supported-differential-form]]).

[F6] A closure is a closed superset of the original set ([[def-interior-closure-boundary-top]]).

[F7] A closed subset of a compact space is compact ([[thm-closed-subspace-of-a-compact-space-is-compact]]).

[F8] The complex Euclidean norm and metric agree under $\mathbb C^n\cong\mathbb R^{2n}$, and in this metric a set is compact exactly when it is closed and bounded ([[rem-complex-euclidean-space-dictionary]]).

[F9] A set is bounded when it is empty or contained in a ball $B(c,r)$ for some center $c$ and radius $r>0$ ([[def-metric-bounded-diameter]], [[def-metric-ball]]).

[F10] The Euclidean norm satisfies the triangle inequality $\|x+y\|\le\|x\|+\|y\|$ ([[def-norm-and-normed-space]]).

[F11] In $\mathbb R^m$, the unit sphere is $S^{m-1}$ ([[def-euclidean-spheres-and-closed-balls]]) and is path-connected for $m\ge2$ ([[cor-euclidean-spheres-are-path-connected]]).

[F12] Every path-connected space is connected ([[thm-path-connected-implies-connected]]).

[F13] A connected component is the largest connected subset containing each of its points ([[def-connected-component-and-quasicomponent]]).

[F14] Each connected component of an open subset of $\mathbb R^m$ is open ([[cor-components-of-open-subsets-of-rn-are-polygonally-connected]]).

[F15] For a $C^1$ function on an open subset of $\mathbb C^m$, the pointwise Cauchy–Riemann system implies complex differentiability, and complex differentiability at every point is holomorphy ([[thm-cauchy-riemann-characterization-in-several-complex-variables]], [[def-holomorphic-function-in-several-complex-variables]]). Here take $m=n$ and match the theorem's zero-based coordinate index $0\le k<m$ with our one-based index $j=k+1$.

[F16] A holomorphic function on a nonempty connected open set that vanishes on a nonempty open subset vanishes identically ([[thm-identity-theorem-in-several-complex-variables]]).

[F17] For a bounded domain $D\subset\mathbb C$ with $C^1$ boundary, full AC, $f\in C^1(\overline D)$, and $z\in D$, Cauchy–Pompeiu gives
$$f(z)=\frac{1}{2\pi i}\int_{\partial D}\frac{f(\zeta)}{\zeta-z}\,d\zeta+\frac{1}{2\pi i}\int_D\frac{\partial_{\bar\zeta}f(\zeta)}{\zeta-z}\,d\zeta\wedge d\bar\zeta.$$
([[thm-cauchy-pompeiu-formula]])

## Proof

**Proof technique:** direct.

1.1 By [F1], $\bar\partial g=\sum_{a,b}(\partial_{\bar z_a}g_b)\,d\bar z_a\wedge d\bar z_b$; for $a<b$ the coefficient of $d\bar z_a\wedge d\bar z_b$ is $\partial_{\bar z_a}g_b-\partial_{\bar z_b}g_a$. Since $\bar\partial g=0$ and the wedge expansion is unique, $\partial_{\bar z_a}g_b=\partial_{\bar z_b}g_a$ for all $a,b$. [F1, given, algebra]

1.2 Put $K=\operatorname{supp}g$. If $K=\varnothing$ set $R=1$; otherwise [F8]–[F9] give a ball $B(c,r)$ containing $K$, and [F10] lets us take $R=\|c\|+r+1$ so $K\subset\{\|z\|\le R\}$. Let $E=\{\|z\|>R\}$. In $\mathbb R^{2n}$, radial segments from any two points of $E$ to a common radius $L>R$, joined by a rescaled path in $S^{2n-1}$ from [F11], stay in $E$; thus $E$ is path-connected and connected by [F12]. It is unbounded and lies in $\Omega=\mathbb C^n\setminus K$. Fix $e=(R+1,0,\ldots,0)\in E$ and put $C_\infty=C_\Omega(e)$. Then $E\subseteq C_\infty$ by [F13], and every unbounded component of $\Omega$ meets $E$ and equals $C_\infty$ by maximality; hence this is the unique unbounded component. [F8, F9, F10, F11, F12, F13, given, algebra]

1.3 For each $j$, $g_j\ne0$ implies $g\ne0$ by [F1]; hence $K_j:=\overline{\{z:g_j(z)\ne0\}}$ is a closed subset of the compact set $K$ and is compact by [F5]–[F7]. Thus $g_j\in C_c^\infty(\mathbb C^n)$. Define $u:=T_1g_1$. Since the full AC hypothesis in [F4] is present, [F2] gives $u\in C^\infty(\mathbb C^n)$ and $\partial_{\bar z_1}u=g_1$. [F1, F2, F4, F5, F6, F7, given, algebra]

2.1 For $j>1$, [F3] and step 1.1 give $\partial_{\bar z_j}u=T_1(\partial_{\bar z_j}g_1)=T_1(\partial_{\bar z_1}g_j)$. Fix $z=(z_1,z_2,\ldots,z_n)$ and choose $M>\max(R,|z_1|)$; the slice $h(\zeta)=g_j(\zeta,z_2,\ldots,z_n)$ is $C^1$ and vanishes on the boundary of the disc $D=\{|\zeta|<M\}$ because $K\subseteq\{\|z\|\le R\}$. Applying [F17] to this slice at $z_1$, its boundary term is zero. Since $\partial_{\bar z_1}g_j(\zeta,z_2,\ldots,z_n)=0$ whenever $|\zeta|>R$, the area integral over $D$ equals its whole-plane integral, namely $T_1(\partial_{\bar z_1}g_j)(z)$. Thus [F17] gives $T_1(\partial_{\bar z_1}g_j)(z)=g_j(z)$. Together with step 1.3 and the scalar case of [F1], this proves $\bar\partial u=g$. [F1, F3, F4, F17, step 1.1, step 1.3, given, algebra]

3.1 The set $K$ is closed by [F5]–[F6], so $\Omega$ is open. On $\Omega$ we have $\bar\partial u=g=0$; by [F15], $u$ is holomorphic there. The open half-space $V=\{z:\operatorname{Re}z_2>R\}$ is nonempty, connected, unbounded, and contained in $\Omega$. For every $z\in V$ and every integration coordinate $\zeta$, $\| (\zeta,z_2,\ldots,z_n)\|\ge |z_2|\ge\operatorname{Re}z_2>R$, so $g_1(\zeta,z_2,\ldots,z_n)=0$ and the defining integral gives $u(z)=0$. By step 1.2, $V\subseteq C_\infty$; [F14] makes $C_\infty$ open. Applying [F16] on this connected open component yields $u=0$ throughout $C_\infty$. [F5, F6, F8, F14, F15, F16, step 1.2, step 1.3, step 2.1, given, algebra]

4.1 Since $E\subseteq C_\infty$, step 3.1 gives $u=0$ on the open exterior $E$. Therefore $\operatorname{supp}u=\overline{\{z:u(z)\ne0\}}$ is closed and lies in $\{\|z\|\le R\}\subset B(0,R+1)$, so it is bounded by [F9]. By [F8], this closed bounded subset of complex Euclidean space is compact, and hence $u$ is compactly supported. [F5, F6, F8, F9, step 1.2, step 3.1, algebra]

5.1 If $v$ is another smooth compactly supported solution, then $w=u-v$ is smooth and $\bar\partial w=0$, so [F15] makes $w$ holomorphic on all of $\mathbb C^n$. By [F8]–[F10], each compact support lies in a ball $B(c_i,r_i)$ and the norm triangle inequality places both in one sufficiently large ball centred at $0$; hence $w=0$ on a nonempty open exterior. Since $\mathbb C^n$ is connected by straight paths and [F12], [F16] gives $w\equiv0$. Thus $u=v$. [F8, F9, F10, F12, F15, F16, step 2.1, step 4.1, given, algebra] ∎
