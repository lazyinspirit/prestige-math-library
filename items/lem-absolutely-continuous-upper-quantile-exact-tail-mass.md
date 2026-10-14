---
id: lem-absolutely-continuous-upper-quantile-exact-tail-mass
kind: lemma
title: "An absolutely continuous upper quantile has its specified tail mass"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 0
deps: [def-random-element-and-real-random-variable, def-probability-measure, def-absolutely-continuous-with-respect-to-a-positive-measure, def-countable-choice, prop-countable-subsets-of-rn-are-lebesgue-null, thm-continuity-from-below-for-measures, thm-continuity-from-above-for-measures, cor-cauchy-reals-lub-complete]
proof_strategy: direct
axiom_use: Countable Choice is used only through the published result that a singleton in R is Lebesgue null.
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Gábor Lugosi and Shahar Mendelson, Robust Multivariate Mean Estimation: The Optimality of Trimmed Mean, §2.1"
      url: "https://arxiv.org/pdf/1907.11391"
      locator: "PDF pp. 8–13; upper-tail quantile convention and absolute-continuity hypotheses. The item proves exact tail mass locally."
    - title: "Gábor Lugosi, Mean Estimation in High Dimension, §2"
      url: "https://ems.press/content/book-chapter-files/33347?nt=1"
      locator: "PDF pp. 2–3; independent finite-variance mean-estimation context."
---

## Statement

Let $Z$ be a real random variable whose law is absolutely continuous with respect to Lebesgue measure on $\mathbb R$. For $0<u<1$, define
$$
Q_u(Z)=\sup\{t\in\mathbb R:P(Z\ge t)\ge1-u\}.
$$
Then $Q_u(Z)$ is finite and
$$
P(Z\ge Q_u(Z))=P(Z>Q_u(Z))=1-u.
$$

## Facts & Assumptions

**Given:** A real random variable $Z$ with an absolutely continuous law and $0<u<1$.

[A1] Countable Choice is used by the published singleton-null result, which is the only reason for an axiom assumption here ([[def-countable-choice]], [[prop-countable-subsets-of-rn-are-lebesgue-null]]).

[F1] Absolute continuity means every Lebesgue-null Borel set has probability zero ([[def-absolutely-continuous-with-respect-to-a-positive-measure]]).

[F2] Every singleton in $\mathbb R$ is Lebesgue null under Countable Choice ([[prop-countable-subsets-of-rn-are-lebesgue-null]]).

[F3] A probability measure has total mass one and is continuous from below and from above; the latter applies because the first term has mass at most one ([[def-probability-measure]], [[thm-continuity-from-below-for-measures]], [[thm-continuity-from-above-for-measures]]).

[F4] Every nonempty subset of $\mathbb R$ that is bounded above has a finite least upper bound ([[cor-cauchy-reals-lub-complete]]).

## Proof

**Proof technique:** direct.

**Given:** Countable Choice, a real random variable $Z$ with an absolutely continuous law, and $0<u<1$.

1.1 For each $t\in\mathbb R$, the event $\{Z=t\}$ is measurable and its singleton is Lebesgue null by [F2]. Absolute continuity [F1] gives $P(Z=t)=0$. Therefore, if $t_n\uparrow t$, the events $\{Z\ge t_n\}$ decrease to $\{Z\ge t\}$ and [F3] gives $P(Z\ge t_n)\downarrow P(Z\ge t)$. If $t_n\downarrow t$ with $t_n>t$, these events increase to $\{Z>t\}$, so [F3] gives convergence to $P(Z>t)=P(Z\ge t)$. Thus the nonincreasing tail function $S(t)=P(Z\ge t)$ is continuous at every $t$. [A1, F1, F2, F3, given, algebra]

1.2 As $n\to\infty$, the events $\{Z\ge n\}$ decrease to the empty set and $\{Z\ge -n\}$ increase to the whole sample space. By [F3], $S(n)\to0$ and $S(-n)\to1$. Since $1-u\in(0,1)$, the set $A=\{t:S(t)\ge1-u\}$ is nonempty and bounded above; [F4] gives its finite supremum. Continuity of $S$ makes $A$ closed, so that supremum $Q_u(Z)$ belongs to $A$. [F3, F4, given, algebra]

2.1 If $S(Q_u(Z))>1-u$, continuity at $Q_u(Z)$ would give some $t>Q_u(Z)$ with $S(t)>1-u$, contradicting that $Q_u(Z)$ is an upper bound for $A$. Hence $S(Q_u(Z))=1-u$. Step 1.1 gives $P(Z=Q_u(Z))=0$, so $P(Z>Q_u(Z))=P(Z\ge Q_u(Z))=1-u$. [step 1.1, step 1.2, algebra] ∎
