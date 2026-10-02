---
id: ex-green-function-of-a-circular-conductor
kind: example
title: "Infinity-pole Green function recovered from a circular conductor"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-axiom-of-choice
  - def-logarithmic-potential-and-energy
  - def-logarithmic-capacity-compact-set
  - def-polar-set-and-quasi-everywhere
  - def-complex-domain
  - def-green-function-with-pole-at-infinity
  - def-plane-harmonic-function
  - lem-log-modulus-is-harmonic-off-its-centre
  - thm-complement-of-a-compact-plane-set-has-one-unbounded-component
  - thm-choice-implies-dependent-implies-countable-choice
  - ex-logarithmic-capacity-of-disc-and-equilibrium-circle
  - thm-green-function-from-equilibrium-potential
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "E. B. Saff, Logarithmic Potential Theory with Applications to Approximation Theory, §§1–3"
      url: "https://arxiv.org/pdf/1010.3760"
      locator: "§3, Definition 3.4 and the exterior of a disc; §1, equilibrium measure of the circle"
    - title: "B. Khoruzhenko, LTCC Potential Theory notes, §§3 and 5"
      url: "https://maths.qmul.ac.uk/~boris/potential_th_notes.pdf"
      locator: "§3, Green function of the exterior of a disc"
---

## Statement

Assume the Axiom of Choice. Let $a\in\mathbb C$, $r>0$, let
$K:=\overline{D(a,r)}$ be the closed disc, and let
$\Omega:=\{z\in\mathbb C:|z-a|>r\}$ be its exterior. Then the normalized
infinity-pole Green function of $\Omega$ is

$$g_\Omega(z,\infty)=g(z):=\log\frac{|z-a|}{r}\qquad(z\in\Omega),$$

so that $g_\Omega(z,\infty)=V_K-U^{\mu_K}(z)$ on $\Omega$. Moreover $g$ has
boundary limit $0$ at **every** point of the boundary circle
$\{z:|z-a|=r\}$, with no exceptional set, and
$g(z)-\log|z|\to-\log r$ as $|z|\to\infty$.

The Axiom of Choice is spent through the equilibrium-measure input
([[ex-logarithmic-capacity-of-disc-and-equilibrium-circle]] and
[[thm-green-function-from-equilibrium-potential]]); the explicit radial
computations for $g$ are choice-free.

## Facts & Assumptions

**Given:** $a\in\mathbb C$, $r>0$, the closed disc $K:=\overline{D(a,r)}$, its exterior $\Omega:=\{z:|z-a|>r\}$, the Axiom of Choice, and the conventions of [[def-logarithmic-potential-and-energy]], [[def-logarithmic-capacity-compact-set]], [[def-polar-set-and-quasi-everywhere]] and [[def-green-function-with-pole-at-infinity]].

[F1] Assume the Axiom of Choice. With $K:=\overline{D(a,r)}$ and $\mu$ the normalized arclength measure $d\mu=dt/(2\pi)$ on the circle $w=a+re^{it}$, $\mu$ is the unique equilibrium measure of $K$, $$U^\mu(z)=\log\frac1r\quad(|z-a|\le r),\qquad U^\mu(z)=\log\frac1{|z-a|}\quad(|z-a|\ge r),$$ and $\operatorname{cap}(K)=r$ with Robin constant $V_K=\log(1/r)$; the same potential, capacity and equilibrium measure hold for the boundary circle ([[ex-logarithmic-capacity-of-disc-and-equilibrium-circle]]).

[F2] A Green function of $\Omega$ with pole at infinity and Robin constant $V_K$ is a function $g:\Omega\to\mathbb R$ that is positive and harmonic on $\Omega$, satisfies $g(z)-\log|z|\to V_K$ as $|z|\to\infty$, is locally bounded near every point of $\partial\Omega$, and has boundary limit $0$ outside a Borel capacity-polar subset of $\partial\Omega$; if existence and uniqueness hold the function is written $g_\Omega(\cdot,\infty)$ ([[def-green-function-with-pole-at-infinity]]).

[F3] A compact set $K$ with $\operatorname{cap}(K)>0$ is nonempty, $\Omega:=\Omega(K)$ denotes the unbounded connected component of $\mathbb C\setminus K$ and is a complex domain with compact boundary $\partial\Omega\subseteq K$, and $V_K=\inf_{\mu\in P(K)}I(\mu)$ is a real number ([[def-green-function-with-pole-at-infinity]], [[def-logarithmic-capacity-compact-set]]).

[F4] Assume the Axiom of Choice. For $K\subseteq\mathbb C$ compact with $\operatorname{cap}(K)>0$, the unbounded component $\Omega$ of $\mathbb C\setminus K$, the equilibrium measure $\mu_K$ and $V_K=\log\frac1{\operatorname{cap}(K)}$, the function $g(z)=V_K-U^{\mu_K}(z)$ satisfies properties 1-4 of [F2], every function satisfying properties 1-4 equals it, and $g_\Omega(z,\infty)=V_K-U^{\mu_K}(z)$ on $\Omega$; hence $K$ has exactly one Green function with pole at infinity ([[thm-green-function-from-equilibrium-potential]]).

[F5] For every $a\in\mathbb C$ the function $u_a(z)=\log|z-a|$ is smooth and harmonic on $\mathbb C\setminus\{a\}$; no choice principle is required ([[lem-log-modulus-is-harmonic-off-its-centre]], [[def-plane-harmonic-function]]).

[F6] If $K\subseteq\mathbb C$ is compact, the complement $\mathbb C\setminus K$ has exactly one unbounded connected component and every other component is bounded; for $K=\overline{D(a,r)}$ that component is $\{z:|z-a|>r\}$, which is therefore a complex domain ([[thm-complement-of-a-compact-plane-set-has-one-unbounded-component]], [[def-complex-domain]]).

[F7] A set is capacity-polar when every compact subset of it has capacity zero; $\varnothing$ is capacity-polar, and a subset of a capacity-polar set is capacity-polar ([[def-polar-set-and-quasi-everywhere]]).

[F8] The Axiom of Choice implies Dependent Choice, which implies Countable Choice ([[thm-choice-implies-dependent-implies-countable-choice]]).

## Verification

**Proof technique:** direct.

1.1 **Setup.** With $K=\overline{D(a,r)}$ and $\Omega=\{z:|z-a|>r\}$, [F6] identifies $\Omega$ with the unbounded connected component of $\mathbb C\setminus K$ and makes it a complex domain with $\partial\Omega=\{z:|z-a|=r\}$; by [F1] $\operatorname{cap}(K)=r>0$, $V_K=\log\frac1r$, and the equilibrium measure $\mu_K$ has potential $U^{\mu_K}(z)=\log\frac1{|z-a|}$ for $|z-a|\ge r$ and $U^{\mu_K}(z)=\log\frac1r$ for $|z-a|\le r$. [F1, F3, F6, given]

1.2 **Positivity and harmonicity.** Define $g(z):=\log\frac{|z-a|}{r}$ for $z\in\Omega$. Then $g(z)>0$ on $\Omega$, since $|z-a|>r$; and $g$ is harmonic on $\Omega$, because $\log|z-a|$ is harmonic on the open set $\mathbb C\setminus\{a\}\supseteq\Omega$ by [F5] and subtracting the constant $\log r$ leaves its Laplacian zero. [F5, algebra, given]

1.3 **Boundary values, local boundedness and the infinity normalization.** If $\xi\in\partial\Omega$, that is $|\xi-a|=r$, then for $z\in\Omega$, $|g(z)-0|=\log\frac{|z-a|}{r}\to\log\frac{r}{r}=0$ as $z\to\xi$, and for every $\delta>0$ one has $\sup\{g(z):z\in\Omega,\ |z-\xi|<\delta\}\le\log\frac{r+\delta}{r}<+\infty$; moreover $g(z)-\log|z|=\log\frac{|z-a|}{|z|}-\log r\to-\log r$ as $|z|\to\infty$, because $\frac{|z-a|}{|z|}\to1$ and $\log$ is continuous at $1$. [given, algebra]

2.1 **Identification with the equilibrium potential.** On $\Omega$ one has $|z-a|>r$, so by [F1] $U^{\mu_K}(z)=\log\frac1{|z-a|}$ there and $$V_K-U^{\mu_K}(z)=\log\frac1r-\log\frac1{|z-a|}=\log\frac{|z-a|}{r}=g(z).$$ [step 1.1, step 1.2, F1]

2.2 **The explicit function is a Green function.** Steps 1.2 and 1.3 give properties 1, 2 and 3 of [F2] for $g$ with Robin constant $V_K=\log\frac1r$; property 4 holds with the exceptional set $E:=\varnothing$, because step 1.3 gives the boundary limit $0$ at every point of $\partial\Omega$, and $\varnothing$ is Borel and capacity-polar by [F7]. Hence $g$ is a Green function of $\Omega$ with pole at infinity and Robin constant $V_K$ in the sense of [F2]. [step 1.2, step 1.3, F2, F7]

3.1 **Uniqueness and the notation.** By step 1.1, $K$ is compact with $\operatorname{cap}(K)=r>0$, so [F4] applies and gives: the Green function of $\Omega$ with pole at infinity exists, every function satisfying properties 1-4 of [F2] equals $V_K-U^{\mu_K}$, and the notation $g_\Omega(\cdot,\infty)$ is licensed with $g_\Omega(z,\infty)=V_K-U^{\mu_K}(z)$ on $\Omega$. By step 2.2 the function $g$ satisfies properties 1-4, so $g=V_K-U^{\mu_K}=g_\Omega(\cdot,\infty)$ on $\Omega$ by step 2.1, and the boundary and normalization assertions are step 1.3. [step 1.1, step 2.1, step 2.2, F4]

4.1 **Assembly and choice.** Assertions of the Statement are exactly steps 2.1 and 3.1 (identification, notation, boundary limit on the entire circle and the infinity normalization); the boundary set is empty, so no exceptional set is needed. The Axiom of Choice is used only through [F1] and [F4], which by [F8] also supply Dependent and Countable Choice to their equilibrium-measure and Frostman inputs; the radial computations of steps 1.2, 1.3 and 2.1 are choice-free. [step 2.1, step 3.1, F1, F4, F8] ∎

## Remarks

**Direct radial computation, not the general quasi-everywhere machinery.** The properties of $g$ are verified here by direct radial computation: positivity and harmonicity came from $\log|z-a|$ being harmonic off its centre, the boundary limit $0$ holds at *every* boundary point because $g=\log(|z-a|/r)$ extends continuously to the closed exterior with value $0$ on the circle, and the normalization at infinity is the elementary limit $\log(|z-a|/|z|)\to0$. In particular the exceptional set in property 4 of [[def-green-function-with-pole-at-infinity]] may be taken empty here; the general quasi-everywhere uniqueness theorem ([[thm-green-function-from-equilibrium-potential]]) is invoked only for the uniqueness clause, where the ordinary maximum principle on the exterior alone would not suffice for candidates whose boundary limit is assumed only quasi-everywhere.
