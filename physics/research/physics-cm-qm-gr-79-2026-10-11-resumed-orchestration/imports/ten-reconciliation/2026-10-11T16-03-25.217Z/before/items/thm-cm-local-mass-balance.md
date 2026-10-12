---
id: thm-cm-local-mass-balance
kind: theorem
title: "Local mass balance: conservation on every material subregion is equivalent to $\\partial_t\\rho+\\operatorname{div}(\\rho u)=0$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 3
deps: [def-cm-material-region-and-density, def-cm-continuum-motion, def-cm-euclidean-spatial-calculus, thm-cm-transport-theorem, lem-cm-localization-of-vanishing-integrals, def-countable-choice, def-integral-over-a-measurable-set, def-integrable-real-and-complex-functions-and-their-integrals, thm-linearity-of-the-lebesgue-integral-on-l-one, prop-order-and-scalar-rules-for-the-nonnegative-integral, thm-lebesgue-measure-of-a-box-of-every-kind, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, def-metric-ball, def-half-open-box, thm-heine-borel-rn, thm-extreme-value-metric, def-ck-euclidean-maps-and-diffeomorphisms, thm-algebra-of-derivatives, def-interval, thm-total-derivative-computes-directional-and-partial-derivatives]
dependency_roles:
  def-cm-material-region-and-density: mathematical-premise
  def-cm-continuum-motion: mathematical-premise
  def-cm-euclidean-spatial-calculus: mathematical-premise
  thm-cm-transport-theorem: mathematical-premise
  lem-cm-localization-of-vanishing-integrals: mathematical-premise
  def-countable-choice: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  thm-lebesgue-measure-of-a-box-of-every-kind: mathematical-premise
  def-lebesgue-measure-and-the-lebesgue-sigma-algebra: mathematical-premise
  def-metric-ball: mathematical-premise
  def-half-open-box: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-interval: mathematical-premise
  thm-total-derivative-computes-directional-and-partial-derivatives: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "R. Abeyaratne, Continuum Mechanics, Volume II of Lecture Notes on the Mechanics of Solids (MIT, 1988, revised 2020), Section 4.2 (conservation of mass and the local continuity equation)"
      url: "https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf"
    - title: "W. Barsukow, Introduction to Conservation Laws: Theory and Numerics (lecture notes, TUM, Winter term 2021/22), Section 1.1 (integral and differential forms of the continuity equation)"
      url: "https://user.math.uzh.ch/barsukow/exercises2122/conservationlaws.pdf"

  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]), as used by the transport theorem. Let $I\subseteq\mathbb R$ be a nonempty open interval, let $B\subseteq\mathbb R^3$ be a material region, let $\chi$ be a motion of $B$ on $I$ ([[def-cm-continuum-motion]]) with spatial velocity $u$, let $J_0\subseteq I$ be an open interval with $\overline{J_0}\subseteq I$, and let $U\subseteq\mathbb R\times\mathbb R^3$ be an open set containing the swept region

$$\Sigma:=\bigl\{(t,x):t\in\overline{J_0},\ x\in\chi_t(\overline B)\bigr\}.$$

Let $\rho:U\to(0,\infty)$ be of class $C^1$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]); call it a **density field**. A **material subregion** is a nonempty bounded open $B'\subseteq B$ with $\overline{B'}\subseteq B$ ([[def-cm-material-region-and-density]]); for such $B'$ the same $\chi$ is a motion of $B'$.

**(i) Localization.** If for every material subregion $B'$ and every $t\in J_0$

$$\frac{d}{dt}\int_{\chi_t(B')}\rho(t,x)\,dx=0, \tag{CM}$$

then

$$\partial_t\rho(t,x)+\operatorname{div}\bigl(\rho u\bigr)(t,x)=0$$

for every $(t,x)\in J_0\times\chi_t(B)$, with the material derivative and divergence of [[def-cm-euclidean-spatial-calculus]].

**(ii) Converse.** Conversely, if $\partial_t\rho+\operatorname{div}(\rho u)=0$ on an open neighbourhood of $\Sigma$ in $U$, then (CM) holds for every material subregion $B'$ and every $t\in J_0$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$; the motion $\chi$; the open interval $J_0$; the $C^1$ density field $\rho$; the conservation hypothesis (CM) in (i), or the local equation in (ii).

[F1] Transport theorem: for every material subregion $B'$ and every function $f$ of class $C^1$ on a neighbourhood of its swept region, $\frac{d}{dt}\int_{\chi_t(B')}f=\int_{\chi_t(B')}(\partial_tf+\operatorname{div}(fu))$ at each $t$ in the interior of the relevant interval ([[thm-cm-transport-theorem]], [[def-cm-continuum-motion]]).

[F2] Localization lemma: if $H$ is continuous on an open $W\subseteq\mathbb R^3$ and $\int_AH\,dx=0$ for every member $A$ of a family $\mathcal F$ of nonempty open subsets of $W$ such that every point of $W$ has members of $\mathcal F$ contained in each of its neighbourhoods, then $H=0$ on $W$ ([[lem-cm-localization-of-vanishing-integrals]]). The supporting order rule for the nonnegative Lebesgue integral and the positivity of box volumes are those cited there ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]], [[thm-lebesgue-measure-of-a-box-of-every-kind]], [[def-half-open-box]], [[def-integral-over-a-measurable-set]]).

[F3] For each fixed $t$ the map $\chi_t$ is a homeomorphism of $O$ onto the open set $\chi_t(O)$ and is continuous at each point $X_0$; every neighbourhood of $y_0=\chi_t(X_0)$ contains the image of a sufficiently small box around $X_0$ ([[def-cm-continuum-motion]], [[def-metric-ball]], [[def-half-open-box]]).

[F4] On the compact set $\overline{J_0}\times\overline B$ and on compact neighbourhoods of $\Sigma$, continuous functions are bounded ([[thm-heine-borel-rn]], [[thm-extreme-value-metric]]).

## Proof

**Proof technique:** direct; transport the vanishing integral to the reference region, then localize with an elementary open-set argument.

1.1 Assume (CM). Fix a material subregion $B'$ and $t\in J_0$. The domain of $f:=\rho$ is the open set $U$, which contains $\Sigma$, and $\rho$ is $C^1$, so [F1] applies to the motion of $B'$ and gives $$0=\frac{d}{dt}\int_{\chi_t(B')}\rho(t,x)\,dx=\int_{\chi_t(B')}\bigl(\partial_t\rho+\operatorname{div}(\rho u)\bigr)(t,x)\,dx.$$ [given, F1, algebra]

2.1 Put $H:=\partial_t\rho+\operatorname{div}(\rho u)$, a continuous function on $U$ ([[def-cm-euclidean-spatial-calculus]], [[thm-algebra-of-derivatives]]). Fix $t\in J_0$ and $y_0\in\chi_t(B)$, and put $X_0:=\chi_t^{-1}(y_0)\in B$. For every nonempty open box $Q$ with $\overline Q\subseteq B$ and $X_0\in Q$, the set $Q$ is a material subregion of $B$, so step 1.1 gives $\int_{\chi_t(Q)}H(t,\cdot)\,dx=0$. [step 1.1, given, construct]

3.1 Fix $t\in J_0$ and consider the function $y\mapsto H(t,y)$ on the open set $W_t:=\chi_t(B)$. Let $\mathcal F_t$ be the family of images $\chi_t(Q)$ of nonempty open boxes $Q$ with $\overline Q\subseteq B$; every member is a nonempty open subset of $W_t$, and by [F3] the family satisfies the neighbourhood condition of [F2] at every point of $W_t$. Step 2.1 says $\int_AH(t,\cdot)=0$ for every $A\in\mathcal F_t$. By [F2] applied to $H(t,\cdot)$ on $W_t$, we get $H(t,y_0)=0$ for every $y_0\in\chi_t(B)$. [step 2.1, F2, F3, construct]

4.1 Steps 1.1 and 3.1 prove (i): for every $t\in J_0$ and every $y_0\in\chi_t(B)$, $\partial_t\rho+\operatorname{div}(\rho u)=0$ at $(t,y_0)$. Conversely, if $\partial_t\rho+\operatorname{div}(\rho u)=0$ on a neighbourhood of $\Sigma$, then for every material subregion $B'$, [F1] applies to $f=\rho$ on the swept region of $B'$ (contained in $\Sigma$), and its integrand vanishes identically, so the derivative in (CM) is zero for every $t\in J_0$. This proves (ii). [step 1.1, step 3.1, F1, F4, algebra] ∎

## Remarks

- Positivity of $\rho$ is part of the density reading and is not used by the implication (i); only $C^1$ regularity on $U$ and the conservation hypothesis enter. The converse also uses only the stated regularity.

- The equivalence is conditional on the adopted conservation law (CM) or on the local equation; neither direction asserts that a physical density is conserved. The localization uses the full strength of "every material subregion", not merely a chosen family.

- The statement is local in the current region: it concludes the equation at every point of $\chi_t(B)$ for $t\in J_0$, and says nothing on $\partial\chi_t(B)$ or at the endpoints of $I$, where the transport theorem is not asserted.
