---
id: ex-dbar-cutoff-extension-at-a-puncture
kind: example
title: Cutoff extension across a puncture in complex dimension two
status: published
origin: pipeline
deps:
  - thm-compact-support-dbar-solution-cn
  - def-bigraded-complex-differential-forms
  - thm-d-dbar-decomposition-and-identities
  - def-axiom-of-choice
  - lem-manifold-bump-for-a-compact-set-inside-an-open-set
  - def-compactly-supported-differential-form
  - rem-complex-euclidean-space-dictionary
  - def-balls-and-polydiscs-in-complex-euclidean-space
  - def-euclidean-spheres-and-closed-balls
  - cor-euclidean-spheres-are-path-connected
  - thm-path-connected-implies-connected
  - def-connected-component-and-quasicomponent
  - lem-reverse-triangle-inequality-in-a-normed-space
  - thm-metric-open-set-algebra
  - lem-vector-operations-are-continuous-in-a-normed-space
  - cor-holomorphic-functions-in-several-variables-are-smooth
  - def-holomorphic-function-in-several-complex-variables
  - thm-cauchy-riemann-characterization-in-several-complex-variables
  - thm-identity-theorem-in-several-complex-variables
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lebl, Tasty Bits of Several Complex Variables, v4.4, Chapter 4 §4.3"
      url: https://www.jirka.org/scv/scv.pdf
      locator: "Theorem 4.3.1 and complete proof, printed pp. 135–136, PDF text lines 10987–11043. The source's Exercise 4.3.1 (cutoff existence) and Exercise 4.2.3 (support of the compact solution) are prompts, not proof text; the local bump and compact-support theorem suppliers plus the exterior-component argument below provide those steps."
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
---

## Example

Assume full AC. Let
$G=B(0,2)\setminus\{0\}\subset\mathbb C^2$ and let
$f:G\to\mathbb C$ be holomorphic. Choose a smooth function $\chi$ on
$\mathbb C^2$ with $\chi=1$ on a neighborhood of $0$ and
$\operatorname{supp}\chi\subset B(0,1)$. Define
$$f_0(z)=\begin{cases}(1-\chi(z))f(z),&z\in G,\\0,&z=0.\end{cases}$$
On $B(0,2)$ set $g=\bar\partial f_0$ and extend $g$ by zero outside that
ball. Let $u$ be the compactly supported solution of $\bar\partial u=g$ on
$\mathbb C^2$. Then $F=f_0-u$ is holomorphic on $B(0,2)$ and equals $f$ on
$G$. For the concrete input $f\equiv1$, the construction returns $F\equiv1$.

## Facts & Assumptions

**Given:** Full AC, a holomorphic $f$ on $G=B(0,2)\setminus\{0\}$, and a
smooth cutoff $\chi$ equal to $1$ near $0$ with support contained in
$B(0,1)$.

[F1] Under full AC, every smooth compactly supported closed $(0,1)$ form on
$\mathbb C^n$, $n\ge2$, has a unique smooth compactly supported solution; that
solution vanishes on the unique unbounded connected component of the
complement of the datum's support
([[thm-compact-support-dbar-solution-cn]]).

[F2] Full AC means every family of nonempty sets has a choice function
([[def-axiom-of-choice]]); [F1] explicitly assumes AC.

[F3] For a compact $K$ in an open $W$, a smooth cutoff exists that equals $1$
near $K$ and has support contained in $W$
([[lem-manifold-bump-for-a-compact-set-inside-an-open-set]]).

[F4] The support of a smooth form is the closure of its nonzero locus
([[def-compactly-supported-differential-form]]).

[F5] In complex Euclidean space, closed bounded sets are compact
([[rem-complex-euclidean-space-dictionary]]).

[F6] For a pure-type smooth form, $\bar\partial$ differentiates each
coefficient in the $\bar z_j$ direction and wedges by $d\bar z_j$
([[def-bigraded-complex-differential-forms]]).

[F7] $\bar\partial^2=0$
([[thm-d-dbar-decomposition-and-identities]]).

[F8] The open ball $B(a,r)$ and Euclidean spheres are defined using the
complex Euclidean norm ([[def-balls-and-polydiscs-in-complex-euclidean-space]]).

[F9] The unit sphere in $\mathbb R^m$ is path-connected for $m\ge2$
([[cor-euclidean-spheres-are-path-connected]]).

[F10] A path-connected subset is connected and every path component lies in a
connected component ([[thm-path-connected-implies-connected]]).

[F11] A connected component is the maximal connected subset containing its
points ([[def-connected-component-and-quasicomponent]]).

[F12] Holomorphic functions of several variables are smooth
([[cor-holomorphic-functions-in-several-variables-are-smooth]]).

[F13] For a $C^1$ function, the Cauchy–Riemann system is equivalent to complex
differentiability at each point ([[thm-cauchy-riemann-characterization-in-several-complex-variables]]).

[F14] A function holomorphic on an open set is complex differentiable at every
point of that set ([[def-holomorphic-function-in-several-complex-variables]]).

[F15] A holomorphic function on a connected open set that vanishes on a
nonempty open subset vanishes identically
([[thm-identity-theorem-in-several-complex-variables]]).

[F16] The reverse triangle inequality gives
$|\|z\|-\|w\||\le\|z-w\|$
([[lem-reverse-triangle-inequality-in-a-normed-space]]).

[F17] Every metric ball is open in its metric topology
([[thm-metric-open-set-algebra]]).

[F18] Vector addition and scalar multiplication are continuous in a normed
space ([[lem-vector-operations-are-continuous-in-a-normed-space]]).

[F19] The Dolbeault operator obeys the graded product rule
([[thm-d-dbar-decomposition-and-identities]]).

[F20] The unit sphere in $\mathbb R^m$ is $S^{m-1}$
([[def-euclidean-spheres-and-closed-balls]]).

## Verification

**Proof technique:** cutoff and correction.

1.1 The singleton $\{0\}$ is compact, so [F3] gives $\chi=1$ near $0$ with support $K_\chi\subset B(0,1)$. By [F4], $K_\chi$ is closed; it is bounded because it lies in the unit ball, hence compact by [F5]. Since $f$ is holomorphic, [F14] makes it complex differentiable at each point; [F12] makes it smooth, and [F13] gives $\bar\partial f=0$ (the dictionary [F5] identifies the library's coordinates $0,1$ with $z_1,z_2$ here). Since $\chi=1$ near $0$, $f_0$ is identically zero near the puncture and therefore smooth on $B(0,2)$. The bidegree formula [F6] makes $g=\bar\partial f_0$ a smooth $(0,1)$ form. On $G$, the product rule [F19] gives $g=-f\bar\partial\chi$. Outside $K_\chi$, $\chi$ vanishes on a neighborhood, so $g=0$ there; hence $\operatorname{supp}g\subseteq K_\chi\subset B(0,1)$. The support is closed by [F4] and bounded, so [F5] makes it compact. Thus $g$ is zero near $\partial B(0,2)$, its zero extension is smooth, and [F7] gives $\bar\partial g=0$ on all of $\mathbb C^2$. [F3, F4, F5, F6, F7, F12, F13, F14, F19, given, algebra, construct]

1.2 The set $G$ is open: if $z\in G$ and $r=\|z\|$, choose $\delta=\tfrac12\min(r,2-r)>0$. For $w\in B(z,\delta)$, [F16] gives $0<\|w\|<2$, and [F17] makes this ball an open neighborhood contained in $G$. The ball notation and norm topology are those of [F8]. To connect two points of $G$, move each radially to the unit sphere; these paths remain at positive norm below $2$ and are continuous by [F18]. Join their endpoints by a path in the unit sphere using [F9] and [F20]. Thus $G$ is path-connected, hence connected by [F10]. [F8, F9, F10, F16, F17, F18, F20, given, algebra, construct]

2.1 Let $E=\{z\in\mathbb C^2:\|z\|>1\}$. It lies in $\mathbb C^2\setminus\operatorname{supp}g$ by step 1.1 and is unbounded. For each $z\in E$, a radial path joins $z$ to $2z/\|z\|$ while keeping the norm greater than $1$; [F18] ensures the path is continuous. The radius-$2$ sphere is path-connected by [F9] and [F20] after rescaling the unit sphere in $\mathbb R^4\cong\mathbb C^2$; the ball and sphere notation is that of [F8]. Thus $E$ is path-connected and connected by [F10]. It lies in a connected component by [F11]; that component is unbounded because it contains $E$, and therefore is the unique unbounded component named in [F1]. [F1, F8, F9, F10, F11, F18, F20, given, algebra, construct]

3.1 The full AC assumption [F2] permits applying [F1] to the smooth compactly supported closed $(0,1)$ form $g$ from step 1.1, giving $u\in C_c^\infty(\mathbb C^2)$ with $\bar\partial u=g$ and $u=0$ on the unique unbounded component identified in step 2.1. Therefore $u=0$ on $E$. Since $\chi=0$ on $E$, the correction $h=u+\chi f$ vanishes on $A=\{1<\|z\|<2\}\subset G$. The annulus is nonempty because $(3/2,0)\in A$. For any $z\in A$, set $\epsilon=\tfrac12\min(\|z\|-1,2-\|z\|)>0$; [F16] gives $B(z,\epsilon)\subset A$, and [F17] says this metric ball, with notation from [F8], is open. Thus $A$ is open. [F1, F2, F8, F16, F17, step 1.1, step 2.1, given, algebra, construct]

4.1 On $G$, [F19] and step 1.1 give $\bar\partial h=\bar\partial u+\bar\partial(\chi f)=g+f\bar\partial\chi+\chi\bar\partial f=0$. The function $h$ is smooth, so [F13]–[F14] make it holomorphic on $G$. By step 1.2, $G$ is connected and open; since $h=0$ on $A$, [F15] gives $h=0$ throughout $G$. Thus on $G$, $F=f_0-u=(1-\chi)f+\chi f=f$. [F13, F14, F15, F19, step 1.1, step 1.2, step 3.1, given, algebra]

5.1 On $B(0,2)$, $F=f_0-u$ is smooth and $\bar\partial F=\bar\partial f_0-g=0$ by step 3.1. The Cauchy–Riemann criterion [F13], followed by the definition [F14], makes $F$ holomorphic on the whole ball. For $f\equiv1$, step 1.1 gives $g=-\bar\partial\chi$ and step 4.1 gives $u=-\chi$ on $G$, so the formula yields $F=1$ there. Every neighborhood of $0$ in the ball contains nonzero points of $G$, so continuity gives $F(0)=1$. If $f\equiv0$, then $f_0=g=0$ and the unique solution in [F1] is $u=0$, since the zero function is a compactly supported solution; hence $F=0$. [F1, F13, F14, step 1.1, step 3.1, step 4.1, given, algebra] $\square$
