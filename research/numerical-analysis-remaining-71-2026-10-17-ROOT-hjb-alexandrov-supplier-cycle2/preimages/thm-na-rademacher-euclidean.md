---
id: thm-na-rademacher-euclidean
kind: theorem
title: "Rademacher differentiability in Euclidean space"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
axiom_base: "Full Axiom of Choice; uses identified in the proof."
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-null-and-content-zero-in-rn
  - def-weak-derivative-of-a-locally-integrable-function
  - def-sobolev-space-wkp-and-its-norm
  - def-lipschitz-holder-contraction
  - def-metric-ball
  - lem-acl-representatives-reconstruct-weak-gradients-by-fubini
  - thm-c1-lipschitz-ac-bv-hierarchy
  - thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions
  - thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n
  - thm-poincare-inequality-on-a-ball
  - lem-euclidean-balls-have-positive-finite-lebesgue-measure
  - thm-lebesgue-measure-under-dilations-and-reflections
  - thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
  - lem-null-sets-in-rn-closed-under-subsets-and-countable-unions
  - thm-rationals-countable
  - thm-product-of-countable
  - lem-rat-embeds-dense
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Juha Kinnunen, Sobolev Spaces, complete 168-page notes; Sections 2.6 and 3.3-3.4"
      url: "https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf"
    - title: "Crandall, Ishii and Lions, User's guide to viscosity solutions, Appendix A, Theorem A.2 and pp. 58-60, notes pp. 62-63"
      url: "https://arxiv.org/pdf/math/9207212"
---

## Statement

Assume the Axiom of Choice. For every open $U\subseteq\mathbb R^n$ and locally Lipschitz map $u:U\to\mathbb R^m$ (each point has a neighborhood on which $|u(y)-u(z)|\le L|y-z|$ for some finite $L$, [[def-lipschitz-holder-contraction]]), $u$ is Frechet differentiable outside a null subset of $U$. Here Frechet differentiability at $x$ means that a linear map $A:\mathbb R^n\to\mathbb R^m$ satisfies $u(x+h)=u(x)+Ah+o(|h|)$.

## Facts & Assumptions

**Given:** The Axiom of Choice, an open set $U\subseteq\mathbb R^n$, and a locally Lipschitz map $u:U\to\mathbb R^m$.

[A1] Every family of nonempty sets has a choice function ([[def-axiom-of-choice]]); in particular this supplies Countable Choice and Dependent Choice.

[F1] An ACL representative whose coordinate derivatives are locally $L^p$ has those derivatives as its weak derivatives ([[lem-acl-representatives-reconstruct-weak-gradients-by-fubini]]).

[F2] A Lipschitz function on an interval is absolutely continuous ([[thm-c1-lipschitz-ac-bv-hierarchy]]).

[F3] An absolutely continuous function has a derivative almost everywhere and is the integral of that derivative ([[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]]).

[F4] Ball averages of a locally integrable function converge to its value almost everywhere ([[thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n]]).

[F5] For $w\in W^{1,1}(B)$ on a ball of radius $r$, $\|w-w_B\|_{L^1(B)}\le C(n)r\|Dw\|_{L^1(B)}$ ([[thm-poincare-inequality-on-a-ball]]).

[F6] Countable unions and subsets of null subsets of $\mathbb R^n$ are null under Countable Choice ([[lem-null-sets-in-rn-closed-under-subsets-and-countable-unions]]).

[F7] Nullity is the closed-cube-cover condition in $\mathbb R^n$ ([[def-null-and-content-zero-in-rn]]).

[F8] $B(x,r)=\{y:|y-x|<r\}$, and its measure satisfies $\lambda(B(x,r))=v_nr^n$ with $0<v_n<\infty$ ([[def-metric-ball]], [[lem-euclidean-balls-have-positive-finite-lebesgue-measure]], [[thm-lebesgue-measure-under-dilations-and-reflections]], [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]).

[F9] A weak derivative is defined by the signed test-function identity, and $W^{1,1}(B)$ consists of $L^1$ functions whose first weak derivatives lie in $L^1$ ([[def-weak-derivative-of-a-locally-integrable-function]], [[def-sobolev-space-wkp-and-its-norm]]).

[F10] Rational vectors are countable and dense in $\mathbb R^n$ by coordinatewise rational approximation; rational open balls form a countable basis ([[thm-rationals-countable]], [[thm-product-of-countable]], [[lem-rat-embeds-dense]]).

## Proof

1.1 Fix a scalar component and a ball compactly contained in a neighborhood where it is $L$-Lipschitz. Each coordinate section is Lipschitz, hence absolutely continuous by [F2], and has a derivative almost everywhere by [F3], bounded by $L$. For measurability, write the limsup and liminf of the coordinate difference quotients as countable suprema and infima over rational increments; continuity of the section makes these equal the corresponding real-increment limits. Define $g_i$ by their common finite limit where it exists and by zero elsewhere. Fubini makes the exceptional set null. The continuous function is an ACL representative, so [F1] gives $D_i u=g_i$ weakly and $u\in W^{1,\infty}_{\mathrm{loc}}$. [A1, F1, F2, F3, F10, given, construct]

2.1 Outside a null set, $x$ is a strong Lebesgue point of $g=(g_1,\ldots,g_n)$. For each rational vector $q\in\mathbb Q^n$, apply [F4] locally to the scalar functions $|g-q|$ and to the components of $g$; remove the countable union of their exceptional null sets using [F6]. At each remaining point, for every rational $q$, $$\limsup_{r\downarrow0}\frac{1}{\lambda(B(x,r))}\int_{B(x,r)}|g(y)-g(x)|\,dy\le 2|q-g(x)|.$$ Rational vectors approximate $g(x)$ by [F10], so this limit is zero. The rational balls whose closures lie in neighborhoods on which the chosen component is Lipschitz form a countable cover of $U$: local Lipschitz continuity gives a suitable ball around each point, density of rational centers/radii gives a rational subball, and [A1] selects one Lipschitz neighborhood and constant for each such ball. Apply the local argument on these balls. [A1, F4, F6, F10, step 1.1, construct]

3.1 Fix such a point $x$, put $p=g(x)$, and on $B(x,r)\Subset U$ set $w(y)=u(y)-u(x)-p\cdot(y-x)$. The function $w$ is bounded on this ball. By [F1] and linearity of the test-function identity, its weak gradient is $g(y)-p$, which is bounded there; thus $w\in W^{1,1}(B(x,r))$ by [F9]. Also $w(x)=0$ and $w$ is $(L+|p|)$-Lipschitz. The strong Lebesgue-point property and [F8] give $\int_{B(x,r)}|Dw|=o(r^n)$. Applying [F5] yields $$\int_{B(x,r)}|w-w_{B(x,r)}|=o(r^{n+1}).$$ [F1, F5, F8, F9, step 1.1, step 2.1, algebra]

4.1 Write $M=L+|p|$. If $M=0$, $w$ vanishes on every sufficiently small ball. Otherwise fix $\epsilon>0$. If $|w_{B(x,r)}|\ge\epsilon r$, then on $B(x,c r)$, with $c=\min\{1/2,\epsilon/(2M)\}$, the Lipschitz bound and $w(x)=0$ give $|w-w_{B(x,r)}|\ge\epsilon r/2$. Since $\lambda(B(x,c r))=v_n c^n r^n$ by [F8], the integral in step 2.1 would be at least $v_n c^n\epsilon r^{n+1}/2$, a contradiction for all sufficiently small $r$. Hence $w_{B(x,r)}=o(r)$. If some $y\in B(x,r/2)$ had $|w(y)|\ge\epsilon r$, then for small $r$ we would have $|w(y)-w_{B(x,r)}|\ge\epsilon r/2$. On $B(y,c' r)\subset B(x,r)$, where $c'=\min\{1/4,\epsilon/(4M)\}$, Lipschitz continuity gives $|w-w_{B(x,r)}|\ge\epsilon r/4$. Its integral is at least $v_n(c')^n\epsilon r^{n+1}/4$, again contradicting step 3.1. Thus $\sup_{B(x,r/2)}|w|=o(r)$. For $h\ne0$, take $r=3|h|$, so $x+h\in B(x,r/2)$; this yields the Frechet expansion $u(x+h)-u(x)-p\cdot h=o(|h|)$. [F8, step 3.1, algebra]

5.1 The countable rational-ball basis [F10] and the finitely many real components of $u$ produce one exceptional cube-cover-null set by [F6] and the definition [F7]. The component derivatives assemble into the Frechet derivative. The full Axiom of Choice is used through the stated ACL, Fubini, differentiation, null-union and Poincare suppliers; no reduction to Countable Choice is asserted. [A1, F6, F7, F10, step 4.1] ∎
