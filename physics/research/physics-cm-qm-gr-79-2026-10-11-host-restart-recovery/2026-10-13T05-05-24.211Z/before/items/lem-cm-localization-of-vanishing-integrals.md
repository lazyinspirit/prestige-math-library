---
id: lem-cm-localization-of-vanishing-integrals
kind: lemma
title: "Localization: a continuous function whose integrals vanish over a neighbourhood-basis family is identically zero"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 0
deps: [def-continuity-real, def-metric-topology, def-metric-ball, def-half-open-box, thm-lebesgue-measure-of-a-box-of-every-kind, prop-order-and-scalar-rules-for-the-nonnegative-integral, thm-linearity-of-the-lebesgue-integral-on-l-one, def-integral-over-a-measurable-set, def-integrable-real-and-complex-functions-and-their-integrals, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, def-countable-choice, thm-extreme-value-metric, thm-heine-borel-rn, def-interval]
dependency_roles:
  def-continuity-real: mathematical-premise
  def-metric-topology: mathematical-premise
  def-metric-ball: mathematical-premise
  def-half-open-box: mathematical-premise
  thm-lebesgue-measure-of-a-box-of-every-kind: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  def-lebesgue-measure-and-the-lebesgue-sigma-algebra: mathematical-premise
  def-countable-choice: mathematical-premise
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

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$, which supplies the measure properties of Lebesgue measure used below ([[def-countable-choice]]).

Let $W\subseteq\mathbb R^3$ be open and let $H:W\to\mathbb R$ be continuous in the Euclidean metric: for every $y\in W$ and $\varepsilon>0$ there is $\delta>0$ such that $z\in W$, $\|z-y\|_2<\delta$ imply $|H(z)-H(y)|<\varepsilon$. Let $\mathcal F$ be a family of nonempty open subsets of $W$ such that

$$ \text{for every }y_0\in W\text{ and every neighbourhood }V\text{ of }y_0\text{ there is }A\in\mathcal F\text{ with }y_0\in A\subseteq V . \tag{L} $$

Suppose the signed Lebesgue integral is defined and $\int_AH\,dx=0$ for every $A\in\mathcal F$ ([[def-integral-over-a-measurable-set]], [[def-integrable-real-and-complex-functions-and-their-integrals]], [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]). Then $H=0$ on $W$.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, the open set $W$, the continuous $H$, the family $\mathcal F$ satisfying (L), and the defined signed integrals $\int_AH=0$.

[F1] If $y_0\in W$ and $A\subset W$ is open with $y_0\in A$, then some $\sigma>0$ has $B_\sigma(y_0)\subseteq A$; if $\sigma$ is chosen also so that $\overline B(y_0,\rho)\subseteq W$ for every $\rho<\sigma$, then for every $0<r<\sigma$ the half-open box

$$Q_r:=\prod_{j=0}^{2}\Bigl(y_{0,j}-\frac{r}{2},\,y_{0,j}+\frac{r}{2}\Bigr]$$

has $\overline{Q_r}\subseteq B_\sigma(y_0)\subseteq A$ because every point of $\overline{Q_r}$ is within distance $\tfrac{\sqrt3}{2}r<\sigma$ of $y_0$; its Lebesgue measure is $\lambda_3(Q_r)=r^3>0$ ([[def-half-open-box]], [[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[F2] Order and linearity of the Lebesgue integral: if $0\le g\le h$ pointwise and both are integrable on a measurable set, then $\int g\le\int h$; and $\int -H=-\int H$ whenever $H$ is integrable ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

[F3] If $H$ is continuous and positive throughout a compact set $K$, then it attains its minimum on $K$ and that minimum is positive ([[thm-extreme-value-metric]], [[def-continuity-real]]). Every closed box $\overline{Q_r}$ is compact by Heine--Borel ([[thm-heine-borel-rn]]).

## Proof

**Proof technique:** direct; a positive value would force a positive integral over a small box.

1.1 Suppose for contradiction that $H(y_0)\ne0$ for some $y_0\in W$. If $H(y_0)>0$, continuity and openness give $\sigma>0$ with $\overline B(y_0,\sigma)\subseteq W$ and $H>0$ on this closed ball; if $H(y_0)<0$, apply the same argument to $-H$. Put $V:=B_\sigma(y_0)$. [given, F1, F3, choose]

2.1 Choose $A\in\mathcal F$ with $y_0\in A\subseteq V$ by (L). Since $A$ is open, [F1] gives a box $Q_r$ with $\overline{Q_r}\subseteq A$. In the positive case, $H>0$ on $V$, so [F3] applied to the compact set $\overline{Q_r}\subset V$ gives $\varepsilon:=\min_{\overline{Q_r}}H>0$; in the negative case apply [F3] to $-H$. [step 1.1, given, F1, F3]

3.1 In the case $H>0$ on $V$: since $0\le\varepsilon\,\mathbf 1_{Q_r}\le H$ on $A$, [F2] and [F1] give $$\int_AH\,dx\ge\int_{Q_r}H\,dx\ge\varepsilon\,\lambda_3(Q_r)>0,$$ contradicting $\int_AH=0$. In the case $H<0$ on $V$, applying the same argument to $-H$, whose integral over $A$ also vanishes by the linearity clause of [F2], gives $\int_A(-H)>0$, again a contradiction. Hence $H(y_0)=0$ for every $y_0\in W$. [step 2.1, F1, F2, algebra] ∎

## Remarks

- The family $\mathcal F$ is exactly the family for which vanishing region integrals are available in the applications: images of small reference boxes under a diffeomorphism, small Euclidean balls, or bounded $C^1$ domains shrinking to a point. The hypothesis (L) is what makes "choose $A$ inside any neighbourhood" legitimate; no countable choice is used, since $A$ is chosen for a single specified neighbourhood.

- For an $\mathbb R^n$-valued continuous $H$ the statement and proof apply to each component separately; the applications in this collection use the scalar or the componentwise form.
