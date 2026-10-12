---
id: lem-cm-localization-of-vanishing-integrals
kind: lemma
title: "Localization: a continuous function whose integrals vanish over a neighbourhood-basis family is identically zero"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 0
deps: [def-continuity-real, def-metric-topology, def-metric-ball, def-half-open-box, thm-lebesgue-measure-of-a-box-of-every-kind, prop-order-and-scalar-rules-for-the-nonnegative-integral, thm-linearity-of-the-lebesgue-integral-on-l-one, def-integral-over-a-measurable-set, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, thm-extreme-value-metric, thm-heine-borel-rn, def-interval]
dependency_roles:
  def-continuity-real: mathematical-premise
  def-metric-topology: mathematical-premise
  def-metric-ball: mathematical-premise
  def-half-open-box: mathematical-premise
  thm-lebesgue-measure-of-a-box-of-every-kind: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
  def-lebesgue-measure-and-the-lebesgue-sigma-algebra: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "R. Abeyaratne, Continuum Mechanics, Volume II of Lecture Notes on the Mechanics of Solids (MIT, 1988, revised 2020), Sections 4.1–4.2 (the localization step from a global balance law to a field equation; conservation of mass)"
      url: "https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf"

  precheck: pass
---

## Statement

Let $W\subseteq\mathbb R^3$ be open and let $H:W\to\mathbb R$ be continuous ([[def-continuity-real]], [[def-metric-topology]]). Let $\mathcal F$ be a family of nonempty open subsets of $W$ such that

$$ \text{for every }y_0\in W\text{ and every neighbourhood }V\text{ of }y_0\text{ there is }A\in\mathcal F\text{ with }y_0\in A\subseteq V . \tag{L} $$

Suppose $\int_AH\,dx=0$ for every $A\in\mathcal F$ ([[def-integral-over-a-measurable-set]], [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]). Then $H=0$ on $W$.

## Facts & Assumptions

**Given:** The open set $W$, the continuous $H$, the family $\mathcal F$ satisfying (♡), and the vanishing of all integrals $\int_AH$.

[F1] For every $y_0\in W$ and $\sigma>0$ with $\overline B(y_0,\rho)\subseteq W$ for all $\rho<\sigma$: the ball $B_\sigma(y_0)$ is an open neighbourhood of $y_0$ ([[def-metric-ball]], [[def-metric-topology]]), and the half-open box

$$Q:=\prod_{j=1}^{3}\Bigl(y_{0,j}-\frac{\sigma}{2},\,y_{0,j}+\frac{\sigma}{2}\Bigr]$$

has $\overline Q\subseteq B_\sigma(y_0)$ because every point of $\overline Q$ is within distance $\tfrac{\sqrt3}{2}\sigma<\sigma$ of $y_0$; its Lebesgue measure is $\lambda_3(Q)=\sigma^3>0$ ([[def-half-open-box]], [[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[F2] Order and linearity of the Lebesgue integral: if $0\le g\le h$ pointwise and both are integrable on a measurable set, then $\int g\le\int h$; and $\int -H=-\int H$ whenever $H$ is integrable ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

[F3] If $H$ is continuous and positive at $y_1$, then there is a box $Q$ with $\overline Q$ in a neighbourhood on which $H>0$, and $\varepsilon:=\min_{\overline Q}H>0$ ([[thm-extreme-value-metric]], [[thm-heine-borel-rn]], [[def-continuity-real]]).

## Proof

**Proof technique:** direct; a positive value would force a positive integral over a small box.

1.1 Suppose for contradiction that $H(y_0)\ne0$ for some $y_0\in W$. If $H(y_0)>0$, continuity gives $\sigma>0$ with $B_\sigma(y_0)\subseteq W$ and $H>0$ on $B_\sigma(y_0)$; if $H(y_0)<0$, the same argument applied to $-H$ (equivalently, continuity of $H$ gives $H<0$ on a small ball). Fix such a ball and put $V:=B_\sigma(y_0)$. [given, F1, F3, choose]

2.1 Choose $A\in\mathcal F$ with $y_0\in A\subseteq V$ by (♡). By [F1] choose the box $Q$ around $y_0$ with $\overline Q\subseteq A$; then $H\ge0$ on $A$ in the case $H>0$ on $V$ (and $H\le0$ in the other case), and [F3] gives $\varepsilon:=\min_{\overline Q}H>0$ in the case $H>0$ on $V$ (respectively $\varepsilon:=\min_{\overline Q}(-H)>0$ in the other case). [step 1.1, given, F1, F3]

3.1 In the case $H>0$ on $V$: since $0\le\varepsilon\,\mathbf 1_Q\le H$ on $A$, [F2] and [F1] give $$\int_AH\,dx\ge\int_QH\,dx\ge\varepsilon\,\lambda_3(Q)>0,$$ contradicting $\int_AH=0$. In the case $H<0$ on $V$, applying the same argument to $-H$, whose integral over $A$ also vanishes by the linearity clause of [F2], gives $\int_A(-H)>0$, again a contradiction. Hence $H(y_0)=0$ for every $y_0\in W$. [step 2.1, F1, F2, algebra] ∎

## Remarks

- The family $\mathcal F$ is exactly the family for which vanishing region integrals are available in the applications: images of small reference boxes under a diffeomorphism, small Euclidean balls, or bounded $C^1$ domains shrinking to a point. The hypothesis (♡) is what makes "choose $A$ inside any neighbourhood" legitimate; no countable choice is used, since $A$ is chosen for a single specified neighbourhood.

- For an $\mathbb R^n$-valued continuous $H$ the statement and proof apply to each component separately; the applications in this collection use the scalar or the componentwise form.
