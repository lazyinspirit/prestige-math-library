---
id: def-competing-risk-data-cause-specific-hazards-and-cumulative-incidence
kind: definition
title: "Competing-risk data, cause-specific hazard measures, and cumulative incidence"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps:
  - def-event-time-observation-schemes
  - def-law-or-distribution-of-a-random-element
  - def-measure-with-density
  - thm-continuity-from-above-for-measures
  - thm-monotone-real-functions-are-borel-measurable
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Lu Tian and Richard Olshen, Competing Risk and Alternatives to Cox Model, Stanford University STAT331, slides 2–12"
      url: "https://web.stanford.edu/~lutian/coursepdf/survweek11.pdf"
    - title: "Janne Pitkäniemi and Esa Läärä, Survival analysis with competing risks, Statistical Practice in Epidemiology using R, University of Tartu, slides 13–24"
      url: "https://bendixcarstensen.com/SPE/2015/h3-allslides.pdf"
    - title: "Peter C. Austin, D. S. Lee, and Jason P. Fine, Introduction to the Analysis of Survival Data in the Presence of Competing Risks, Circulation 133(6) (2016), pp. 601–609"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4741409/"
---

## Definition

Fix a finite number $K\ge1$ of causes on a probability space. Let
$T_1,\ldots,T_K$ be measurable event times with values in $[0,\infty)$, and
assume that the minimum is attained by a unique cause almost surely. The
**observed first failure time** and its **cause** are
$$T:=\min_{1\le j\le K}T_j,\qquad D:=\min\{j:T_j=T\}\in\{1,\ldots,K\},$$
so $D$ is the smallest label attaining the minimum. For each $k$,
$$\{D=k\}=\bigcap_{j<k}\{T_k<T_j\}\cap\bigcap_{j>k}\{T_k\le T_j\},$$
which is measurable; the assumed almost-sure uniqueness makes the tie-break
irrelevant except on a null set.
No independence among the latent times $T_j$ is assumed. When an external
right-censoring time $C$ is present, the observation is
$(U,\delta,D^{\mathrm{obs}})$, where $U=\min(T,C)$ and
$\delta=\mathbf 1\{T\le C\}$ as in
[[def-event-time-observation-schemes]], and $D^{\mathrm{obs}}=D$ when
$\delta=1$; the cause label is absent when $\delta=0$. Thus an event tied with
censoring is recorded as an event.

The **all-cause survival function** is $S(t):=\mathbb P(T>t)$ for $t\ge0$.
For $u>0$, write $S(u-):=\mathbb P(T\ge u)$; this is the left limit of $S$
by continuity from above for measures
([[thm-continuity-from-above-for-measures]]). Set $S(0-):=1$.

For each cause $k$, its **event subdistribution measure** and
**cause-specific cumulative-incidence function** are
$$\nu_k(B):=\mathbb P(T\in B,D=k),\qquad F_k(t):=\nu_k([0,t])=\mathbb P(T\le t,D=k).$$
for Borel $B\subseteq[0,\infty)$ and $t\ge0$. The **cause-specific hazard
measure** is the measure with density
$$w(u):=\begin{cases}1/S(u-),&S(u-)>0,\\0,&S(u-)=0\end{cases}$$
relative to $\nu_k$:
$$\Lambda_k(B):=\int_B w(u)\,\nu_k(du),\qquad d\Lambda_k(u)=w(u)\,\nu_k(du).$$
The extension of $u\mapsto S(u-)$ by the constant $1$ for $u<0$ is
nonincreasing on $\mathbb R$ and therefore Borel measurable
([[thm-monotone-real-functions-are-borel-measurable]]), so $w$ is a
nonnegative Borel function and this measure is defined by
[[def-measure-with-density]]. It may have infinite total mass; no finite-horizon
integrability is assumed in this definition.

