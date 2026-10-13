---
id: pthm-cm02-continuation
kind: physics-theorem
title: "Maximal Newtonian motions and the compact-continuation criterion: finite-time breakdown requires escape from every compact subset of the time-state domain"
status: published
origin: session
domain: physics
dependency_level: 11
deps: [post-cm02-force-superposition, def-cm02-newtonian-flow, pthm-cm02-ivp, def-cm01-configuration, def-first-order-ode-initial-value-problem-and-solution, def-locally-lipschitz-in-the-state-variable, def-maximal-ode-solution, thm-cm-compact-continuation-for-locally-lipschitz-odes, cor-cm-finite-time-breakdown-requires-escape, thm-existence-and-uniqueness-of-a-maximal-ode-solution, thm-heine-borel-rn]
dependency_roles:
  post-cm02-force-superposition: physical-assumption
  def-cm02-newtonian-flow: formulation-prerequisite
  pthm-cm02-ivp: physical-result
  def-cm01-configuration: formulation-prerequisite
  def-first-order-ode-initial-value-problem-and-solution: mathematical-premise
  def-locally-lipschitz-in-the-state-variable: mathematical-premise
  def-maximal-ode-solution: mathematical-premise
  thm-cm-compact-continuation-for-locally-lipschitz-odes: mathematical-premise
  cor-cm-finite-time-breakdown-requires-escape: mathematical-premise
  thm-existence-and-uniqueness-of-a-maximal-ode-solution: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "The continuation and breakdown criterion for the adopted Newtonian force model: the maximal motion of an initial datum is unique; at a finite right endpoint its time-state graph leaves every compact subset of the open time-state domain. On the extended time window R, the state leaves every compact subset of the open state domain; equivalently, it is unbounded on every terminal interval or, if it is bounded on some terminal interval and Q is proper, positions approach the excluded configurations in the explicitly stated sense. A finite right boundary of a finite time window is a separate possible endpoint. An autonomous force whose state is trapped in a compact subset of the state domain extends past the putative endpoint. The result is a conditional deduction from the adopted force postulate and the cited mathematical continuation theorems; it asserts no global existence for particular force laws, no empirical statement and no claim that any physical system realizes the model."
sources:
  references:
    - title: "G. Teschl, Ordinary Differential Equations and Dynamical Systems (AMS Graduate Studies in Mathematics 140, online edition), Section 2.6 'Extensibility of solutions', Corollary 2.15 (compact continuation) and Corollary 2.16 (escape of every compact set), printed pages 50-53"
      url: "https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf"
    - title: "Julien Arino, MATH 8430 Fundamental Theory of Ordinary Differential Equations (University of Manitoba), Section 1.3 'Continuation of solutions', Lemma 1.3.1, Theorem 1.3.3 and Corollary 1.3.4, printed pages 24-28: a maximal solution whose right endpoint is finite approaches the boundary of the domain"
      url: "https://julien-arino.github.io/assets/pdf/courses/math8430_lecture_notes.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Section 7.1.1, printed page 143 (PDF page 146): deterministic evolution from the local existence and uniqueness theorem, with no global-existence claim"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the force model of [[post-cm02-force-superposition]] with time window
$I_{0}$, open configuration domain $Q\subseteq\mathbb R^{3N}$, masses
$m_{1},\dots,m_{N}>0$ and force map $F$ continuous and locally Lipschitz in the
state variable, locally uniformly in time; let $D=I_{0}\times Q\times(\mathbb
R^{3})^{N}$, $\mathcal F(t,x,v)=\bigl(v,\mathsf M^{-1}F(t,x,v)\bigr)$,
$U:=Q\times\mathbb R^{3N}$, and let motions, maximal motions and the state
curve $z=(x,\dot x)$ be as in [[def-cm02-newtonian-flow]]. Fix an initial datum
$(t_{0},x_{0},v_{0})\in I_{0}\times Q\times(\mathbb R^{3})^{N}$, write
$z_{0}=(x_{0},v_{0})$, and let $x_{\max}:J_{\max}\to Q$ be the maximal motion
with this datum, with state curve $z=(x_{\max},\dot x_{\max}):J_{\max}\to U$
and $J_{\max}=(a,b)$ its maximal interval, $-\infty\le a<b\le+\infty$.

1. **Existence and uniqueness of the maximal motion.** $J_{\max}$ is an open
   interval containing $t_{0}$ and contained in $I_{0}$, and every motion with
   the datum is a restriction of $x_{\max}$.
2. **Breakdown criterion.** If $b<+\infty$, then for every compact
   $K\subseteq D$ and every $\eta>0$ with $(b-\eta,b)\cap J_{\max}\neq\varnothing$
   there is $t\in(b-\eta,b)\cap J_{\max}$ with $(t,z(t))\notin K$. Equivalently:
   if there are a compact $K\subseteq D$ and $\delta>0$ with
   $(t,z(t))\in K$ for all $t\in(b-\delta,b)\cap J_{\max}$, then
   $x_{\max}$ extends to a motion of the model on a strictly larger interval
   than $J_{\max}$ — so $J_{\max}$ cannot have right endpoint $b$.
3. **Autonomous case.** Suppose $F$ does not depend on its time argument:
   $F(t,x,v)=F_{0}(x,v)$ for a map $F_{0}:U\to(\mathbb R^{3})^{N}$ satisfying
   the standing regularity of [[post-cm02-force-superposition]] clause (iii).
   Then the associated field is autonomous,
   $\mathcal F(t,x,v)=(v,\mathsf M^{-1}F_{0}(x,v))$, the equations do not use
   the time coordinate, and **the model is read on the extended time window
   $\mathbb R$** (the standing hypotheses are unchanged by the extension).
   For this clause, take the same autonomous force law as a model on the
   extended time window $I_{0}=\mathbb R$, and let $J_{\max}=(a,b)$ be the
   maximal interval for that extended-time model. If $b<+\infty$ and there
   are a compact $K_{0}\subseteq U$ and $\delta>0$ with $z(t)\in K_{0}$ for
   all $t\in(b-\delta,b)\cap J_{\max}$, then the state curve extends past
   $b$ as a solution of the same model, contradicting maximality; thus no
   finite maximal endpoint has such a terminal compact trap. In particular,
   if one compact $K_{0}\subseteq U$ contains $z(t)$ for every
   $t\in J_{\max}\cap[t_{0},+\infty)$, then $b=+\infty$ and the motion is
   defined for all forward times $t\ge t_{0}$.
4. **Reading.** Suppose the time window is all of $\mathbb R$ (the
   time-dependent case included) and $b<+\infty$. Then for every compact
   $K_{0}\subseteq U$ and every $\delta>0$ there is $t\in(b-\delta,b)\cap J_{\max}$ with
   $z(t)\notin K_{0}$: near a finite breakdown the state leaves every compact
   subset of the open state domain $U=Q\times\mathbb R^{3N}$. Consequently
   either the state is unbounded on every terminal interval, meaning that for
   every $M,\delta>0$ some $t\in(b-\delta,b)\cap J_{\max}$ has
   $\lVert z(t)\rVert_{2}>M$, or $Q\ne\mathbb R^{3N}$ and the positions
   approach the excluded configurations in the following sense: for every
   $\varepsilon,\delta>0$ there are $t\in(b-\delta,b)\cap J_{\max}$ and
   $y\in\mathbb R^{3N}\setminus Q$ with
   $\lVert x_{\max}(t)-y\rVert_{2}<\varepsilon$. If $Q=\mathbb R^{3N}$, the
   unbounded-state alternative necessarily holds.

## Facts & Assumptions

**Given:** The force model, its associated field $\mathcal F$ on $D$, the initial datum and the maximal motion $x_{\max}$ with state curve $z$ and maximal interval $J_{\max}=(a,b)$.

[L1] The associated first-order system, its motions and their equivalence with the second-order motions, the state domain $D=I_{0}\times U$, and maximal motions are [[def-cm02-newtonian-flow]]; the state is $z=(x,v)$ and $U=Q\times\mathbb R^{3N}$.

[L2] The force-model hypotheses ([[post-cm02-force-superposition]] clauses (i), (iii)): $I_{0}$ open and nondegenerate, $Q$ open, $m_{i}>0$, $F$ continuous and locally Lipschitz in the state variable, locally uniformly in time ([[def-locally-lipschitz-in-the-state-variable]]); the associated field $\mathcal F$ is continuous and has the same local Lipschitz property, with the admissibility estimate proved in [[pthm-cm02-ivp]].

[L3] Compact continuation ([[thm-cm-compact-continuation-for-locally-lipschitz-odes]]): for an open $D\subseteq\mathbb R\times\mathbb R^{n}$ and a continuous field that is locally Lipschitz in the state variable, a solution on $[t_{0},b)$ whose graph lies in a compact $K\subseteq D$ near $b$ extends to a solution on $[t_{0},b+\varepsilon)$ for some $\varepsilon>0$; and if $D=\mathbb R\times U$ with autonomous field $F(t,z)=G(z)$ and the solution stays in a compact $K_{0}\subseteq U$ near $b$, the same extension conclusion holds.

[L4] Finite-time breakdown requires escape ([[cor-cm-finite-time-breakdown-requires-escape]]): a solution of such an initial value problem that admits no extension past $b$ leaves every compact subset of the domain near $b$; and the autonomous trapping alternative of [L3] then forces an extension.

[L5] Maximal solutions ([[thm-existence-and-uniqueness-of-a-maximal-ode-solution]], [[def-maximal-ode-solution]]): the maximal solution of an initial value problem satisfying the Picard–Lindelöf hypotheses is unique, its domain is an open interval containing the initial time, and every other solution through the same data is its restriction. The maximal motion of [[pthm-cm02-ivp]] clause 4 is the corresponding statement for the model.

[L6] A subset of $\mathbb R^{m}$ is compact exactly when it is closed and bounded ([[thm-heine-borel-rn]]); in particular, for a compact $K_{0}\subseteq U$ and reals $b-\delta<b$ the product $[b-\delta,b]\times K_{0}$ is a compact subset of $D=\mathbb R\times U$ when $I_{0}=\mathbb R$.

## Proof

**Proof technique:** direct; transport the maximal motion to the associated first-order system, apply the compact-continuation and escape theorems there, and translate the conclusions back to the model.

1.1 $\mathcal F$ is continuous on $D$ and locally Lipschitz in the state variable, locally uniformly in time, by the admissibility estimate proved in [[pthm-cm02-ivp]] from clauses (i) and (iii) of [[post-cm02-force-superposition]]; the state graph $(t,z(t))$ of the maximal motion lies in $D$ and $z$ solves $z'=\mathcal F(t,z)$ on $J_{\max}=(a,b)$ by [L1]. [L1, L2]

2.1 Clause 1 is [L5] read through [L1]: the associated initial value problem satisfies the Picard–Lindelöf hypotheses at every point of $D$ by step 1.1, so its maximal solution exists, is unique, has open domain containing $t_{0}$ and contained in $I_{0}$, and every solution through the datum is its restriction; writing it as $(x_{\max},\dot x_{\max})$ returns the maximal motion, whose interval is therefore $J_{\max}=(a,b)$ with $a<b$ and $t_{0}\in(a,b)$. [step 1.1, L1, L5]

3.1 Clause 2: by step 2.1 the state curve $z$ admits no extension to a solution of the associated system on an interval strictly larger than $J_{\max}$; [L4] clause 1 applied to this solution with its finite endpoint $b$ gives exactly the displayed statement: for every compact $K\subseteq D$ and every $\eta>0$ there is $t$ in the indicated range with $(t,z(t))\notin K$. The equivalent formulation follows by contraposition: if such a compact $K$ and $\delta>0$ trapped the graph near $b$, [L3] clause 1 would produce an extension, contradicting the maximality established in step 2.1. [step 2.1, L3, L4]

4.1 Clause 3, extension: assume $F(t,x,v)=F_{0}(x,v)$ with $F_{0}$ satisfying the standing regularity. Then $\mathcal F$ is independent of $t$ and, as a map on $U$, continuous and locally Lipschitz in the state variable, so it extends to the autonomous field $\mathbb R\times U\ni(t,z)\mapsto\mathcal F_{0}^{\,*}(z):=(v,\mathsf M^{-1}F_{0}(x,v))$; the model's equations on the extended window are the same equations, and the standing hypotheses of clause (iii) of [[post-cm02-force-superposition]] hold for the extended model by the same estimates. If a compact $K_{0}\subseteq U$ and $\delta>0$ contain $z(t)$ for all $t\in(b-\delta,b)\cap J_{\max}$, then [L3] clause 2, or equivalently [L4] clause 2, supplies an extension of the maximal solution past $b$ in the extended autonomous system. [step 3.1, L3, L4]

5.1 Clause 3, global-trapping consequence: suppose a single compact $K_{0}\subseteq U$ contains the state for every $t\in J_{\max}\cap[t_{0},+\infty)$. If $b<+\infty$, then $b>t_{0}$ and with $\delta=(b-t_{0})/2>0$ the state lies in $K_{0}$ throughout $(b-\delta,b)$. Step 4.1 extends the solution past $b$ in the extended-time model, contradicting maximality from [L5]. Hence $b=+\infty$, which means the motion is defined for all forward times. The terminal-neighborhood extension statement in clause 3 is exactly step 4.1. [step 4.1, L1, L5, algebra]

6.1 Clause 4: assume $I_{0}=\mathbb R$ and $b<+\infty$. For any compact $K_{0}\subseteq U$ and $\delta>0$, the product $[b-\delta,b]\times K_{0}$ is compact in $D$ by [L6]; applying step 3.1 to this product gives a $t\in(b-\delta,b)\cap J_{\max}$ with $z(t)\notin K_{0}$. If $Q=\mathbb R^{3N}$ and the state were bounded by $M$ on a terminal interval, then the set $K_{0}:=\{(x,v):\lVert x\rVert_{2}\le M,\ \lVert v\rVert_{2}\le M\}$ would be closed and bounded in $\mathbb R^{6N}$, hence compact by [L6], and would contain the state on that tail, contradicting step 3.1. Thus the state is unbounded on every terminal interval in this case. Now suppose $Q\ne\mathbb R^{3N}$. If the state were bounded by $M$ on some terminal interval but the position-approach alternative failed, there would be $\varepsilon,\delta_{1},\delta_{2}>0$ such that $\lVert z(t)\rVert_{2}\le M$ for all $t\in(b-\delta_{1},b)\cap J_{\max}$ and $\lVert x_{\max}(t)-y\rVert_{2}\ge\varepsilon$ for every $t\in(b-\delta_{2},b)\cap J_{\max}$ and every $y\in\mathbb R^{3N}\setminus Q$. Set $\delta:=\min\{\delta_{1},\delta_{2}\}>0$ and define $$K_{0}:=\{(x,v):\lVert x\rVert_{2}\le M,\ \lVert v\rVert_{2}\le M,\ \lVert x-y\rVert_{2}\ge\varepsilon\text{ for every }y\in\mathbb R^{3N}\setminus Q\}.$$ Each inequality is preserved under limits, so $K_{0}$ is closed; it is bounded and hence compact by [L6]. Also $K_{0}\subseteq U$: if $x\in\mathbb R^{3N}\setminus Q$, choosing $y=x$ would contradict $\varepsilon>0$. The state lies in $K_{0}$ throughout the terminal interval, contradicting step 3.1. Therefore, if the state is bounded on some terminal interval, positions approach the excluded configurations in the stated sense. [step 3.1, L1, L3, L6] ∎

## Remarks

- **No uniform lower bound on the maximal interval.** Clause 2 is a criterion, not a quantitative estimate; the length of existence depends on the local Lipschitz data of $F$ and on the distance of the datum from the complement of the domain, and it can shrink to zero along a sequence of data approaching the excluded configurations.

- **The excluded configurations matter.** For a singular force law read on the collision-excluded domain $Q=\mathbb R^{3N}\setminus\Delta$, a motion that reaches a collision configuration in finite time has no extension beyond it; the companion counterexample on the examples page instead computes arrival at an excluded external-source singularity for a single-label inverse-square model, where the state leaves every compact subset by unbounded velocity while the position approaches the excluded point.

- **Autonomous trapping is not automatic.** Clause 3 uses a compact subset of $U$ containing the state on a terminal neighborhood to extend past that endpoint. A single compact set containing the state throughout its entire maximal forward interval would rule out every finite right endpoint by the same criterion. Energy conservation, when a later page provides it, can be a source of such a global trap under suitable coercivity, but no conservation statement is made or used here.
