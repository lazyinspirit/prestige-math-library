---
id: thm-rpm-h-local-hamilton-jacobi
kind: theorem
title: "Local Hamilton-Jacobi solution by invertible characteristics"
status: draft
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
domain: mathematics
library: physics
physical_scope: null
dependency_level: 2
deps: ["thm-rpm-h-canonical-poisson-and-flow", "thm-smooth-dependence-of-ode-solutions-on-parameters", "lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space", "def-countable-choice"]
dependency_roles: {"thm-rpm-h-canonical-poisson-and-flow": "mathematical-premise", "thm-smooth-dependence-of-ode-solutions-on-parameters": "mathematical-premise", "lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space": "mathematical-premise", "def-countable-choice": "mathematical-premise"}
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jerrold E. Marsden and Tudor S. Ratiu, Introduction to Mechanics and Symmetry, 2nd ed., complete book PDF; §12.1 Theorem 12.1.4 pp. 393–395; §12.4 Theorem 12.4.1 pp. 412–413; §§14.2–14.3 pp. 466–473; §7.9 pp. 208–211."
      url: https://fisica.net/mecanicaclassica/introduction_to_mechanics_and_symmetry_by_jerrold_marsden.pdf
      locator: "Complete 549-page book; full relevant sections inspected."
    - title: "MIT OpenCourseWare 8.09 Classical Mechanics III, Fall 2014, complete Chapter 4 lecture notes PDF; §4.4 Hamilton–Jacobi equation and complete integrals, all 33 PDF pages inspected."
      url: https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/f00f7f68ac7ba346a0868efb7430582c_MIT8_09F14_Chapter_4.pdf
      locator: "Complete 33-page chapter; full relevant section inspected."
landmark: false
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $H\in C^\infty(U,\mathbb R)$ on an open set $U\subset\mathbb R\times T^*\mathbb R^n$, with coordinates $(t,q,p)$, and let $S_0\in C^\infty(Q_0,\mathbb R)$ on an open $Q_0\subset\mathbb R^n$. The Hamilton characteristic ODE is $\dot q^i=\partial H/\partial p_i$ and $\dot p_i=-\partial H/\partial q^i$. For a covector $p$ and vector $v$ in the canonical coordinates, write $p\cdot v:=\sum_i p_i v^i$. For each $a_0\in Q_0$ such that $(0,a_0,dS_0(a_0))\in U$, there are neighbourhoods of $(0,a_0)$ and a time interval on which this ODE with $q(0,a)=a$, $p(0,a)=dS_0(a)$ has a smooth solution and $(t,a)\mapsto(t,q(t,a))$ is a diffeomorphism onto its image after restriction. On that image the function

$$S(t,q(t,a))=S_0(a)+\int_0^t[p(u,a)\cdot\dot q(u,a)-H(u,q(u,a),p(u,a))]\,du$$

is smooth, has initial value $S_0$, and satisfies $S_t+H(t,q,S_q)=0$. The claim is local to the invertible projection domain; it asserts no continuation beyond a point where the characteristic projection loses invertibility. $S$ has action units, so $[S]=\mathrm{J\,s}$, $[S_q]=[p]$, and $[S_t]=\mathrm J$ when $t,q,p,H$ use SI time, length, momentum, and energy units.

## Facts & Assumptions

**Given:** The smooth Hamiltonian and initial exact graph in the statement, with the initial point $(0,a_0,dS_0(a_0))$ in $U$.

[A1] [[def-countable-choice]]: assume countable choice $\mathrm{AC}_\omega$ only for the cotangent-bundle suppliers; no full axiom of choice is used.

[L1] [[thm-rpm-h-canonical-poisson-and-flow]]: the current H0 draft states $\iota_{X_H}\omega=dH$, $\{F,G\}=F_qG_p-F_pG_q$, local unique Hamilton solutions with smooth dependence on their actual domain, and no completeness claim. Its H25 Step 1 record is ready and hash-current, but that is not independent proof approval; the carrier remains draft/unbound with ai-altered proof provenance. Its sign and local-flow interface match the proof.

[F1] [[thm-smooth-dependence-of-ode-solutions-on-parameters]]: a smooth finite-dimensional ODE vector field has jointly smooth local solutions in time and parameters near each initial datum, on a common sufficiently short interval after restricting the parameter neighbourhood.

[F2] [[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]]: a smooth map with invertible derivative at a point is a smooth diffeomorphism between suitable neighbourhoods of that point and its image.

## Proof

**Proof technique:** direct characteristics and endpoint action.

**Given:** The hypotheses of the statement and the exact conditional Hamiltonian-flow interface [L1].

1.1 The map $a\mapsto(0,a,dS_0(a))$ is continuous. Since its value at $a_0$ lies in the open set $U$, it stays in $U$ for all $a$ in a sufficiently small neighborhood of $a_0$. The characteristic vector field is $(H_p,-H_q)$ by [L1] and is smooth on $U$; hence the ODE existence and parameter theorem [F1] supplies smooth $q(t,a),p(t,a)$ near $(0,a_0)$ for these initial graph data. At $t=0$, $D_aq=I$. [L1, F1, A1, given, algebra]

1.2 Define $\widetilde S(t,a)$ by the integral in the statement. Differentiating with respect to $a$ and integrating the $p\cdot\partial_a\dot q$ term by parts yields $\partial_a\widetilde S=dS_0(a)+p(t,a)D_aq(t,a)-p(0,a)D_aq(0,a)+\int_0^t[-\dot p-H_q]D_aq+[\dot q-H_p]D_ap\,du.$ The initial terms cancel because $p(0,a)=dS_0(a)$ and $D_aq(0,a)=I$; both integrands vanish by Hamilton's equations [L1]. Thus $\partial_a\widetilde S=p(t,a)D_aq(t,a)$. [L1, A1, algebra]

2.1 The derivative of $(t,a)\mapsto(t,q(t,a))$ at $(0,a_0)$ is block triangular with diagonal blocks $1$ and $I$, so is invertible. [F2] gives a smooth local inverse $a=a(t,q)$; restrict to its image, which is the actual projection domain. [step 1.1, F2, algebra]

3.1 Differentiating the endpoint integral in time gives $\partial_t\widetilde S=p\cdot\dot q-H$, by the fundamental theorem of calculus. Put $S(t,q)=\widetilde S(t,a(t,q))$. The chain rule and step 1.2 give $S_q=p$; at fixed $q$, the inverse relation $q(t,a(t,q))=q$ gives $D_aq\,\partial_ta=-\dot q$. Thus $S_t=(p\cdot\dot q-H)+p\,D_aq\,\partial_ta=(p\cdot\dot q-H)-p\cdot\dot q=-H$. Therefore $S_t+H(t,q,S_q)=0$. At $t=0$, the integral is zero and $q=a$, so $S(0,q)=S_0(q)$. [step 1.2, algebra, given] ∎
