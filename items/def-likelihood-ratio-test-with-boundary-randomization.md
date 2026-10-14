---
id: def-likelihood-ratio-test-with-boundary-randomization
kind: definition
title: "Likelihood-ratio tests with boundary randomization"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 6
deps:
  - def-axiom-of-choice
  - def-statistical-experiment
  - def-dominated-statistical-experiment
  - def-likelihood-density
  - def-randomized-test
  - def-test-size-and-power
  - lem-likelihood-ratio-threshold-exists
  - lem-common-support-likelihood-ratio-is-measurable
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "George Deligiannidis, SB2.1 Foundations of Statistical Inference, Chapter 13, §13.1.2, PDF p. 77"
      url: "https://www.stats.ox.ac.uk/~deligian/pdf/sb21/sb21_notes.pdf"
    - title: "Anna Mikusheva, MIT 14.381 Lecture 9: Uniformly Most Powerful Tests, PDF pp. 2–3"
      url: "https://ocw.mit.edu/courses/14-381-statistical-method-in-economics-fall-2018/0427ff2a36e01927fa4b692a6d60a81a_MIT14_381F18_lec9.pdf"
    - title: "Karl B. Gregory, USC STAT 713 Lecture 11: Neyman–Pearson and Karlin–Rubin, PDF pp. 7–9"
      url: "https://people.stat.sc.edu/gregorkb/STAT_713_sp_2023/STAT_713_Lec_11_slides_annotated.pdf"
---

## Definition

Let $\mathsf E=((\mathcal X,\mathcal A),\{0,1\},(P_0,P_1))$ be the
two-law statistical experiment ([[def-statistical-experiment]]). Assume
$P_0,P_1$ are both absolutely continuous with respect to a supplied
sigma-finite measure $\mu$ on $(\mathcal X,\mathcal A)$
([[def-dominated-statistical-experiment]]) and specify finite-valued,
nonnegative measurable RN density representatives $p_0=dP_0/d\mu$ and
$p_1=dP_1/d\mu$ ([[def-likelihood-density]]). Under the Axiom of Choice
([[def-axiom-of-choice]]),
[[def-likelihood-density]] supplies such representatives for arbitrary
dominated laws. If the representatives are given as part of the setup, the
construction below requires no choice.

Define the common-support likelihood ratio
$$R(x)=\begin{cases}p_1(x)/p_0(x),&p_0(x)>0,\\0,&p_0(x)=0.\end{cases}$$
The result [[lem-common-support-likelihood-ratio-is-measurable]] shows that
$R$ is finite-valued, nonnegative, and measurable. The set
$\{p_0=0<p_1\}$ is kept separate from the ratio region.

For $\alpha=0$, define the rejection function
$$\varphi^*_0(x)=\mathbf 1_{\{p_0=0<p_1\}}(x).$$
For $0<\alpha\le1$, choose $c\ge0$ and $\gamma\in[0,1]$ satisfying
$$P_0(R>c)+\gamma P_0(R=c)=\alpha,$$
whose existence follows from
[[lem-likelihood-ratio-threshold-exists]] applied to $Q=P_0$ and $T=R$.
Define
$$
\varphi^*_\alpha(x)=\begin{cases}1,&p_0(x)=0<p_1(x),\\1,&p_0(x)>0\text{ and }R(x)>c,\\\gamma,&p_0(x)>0\text{ and }R(x)=c,\\0,&\text{otherwise}.\end{cases}
$$
This specifies the candidate likelihood-ratio rejection function.

## Remarks

The common dominating measure and the specified density representatives are
part of the setup. The general density-selection branch uses the Axiom of
Choice through [[def-likelihood-density]]; with explicit representatives,
the cutoff existence result and displayed construction are choice-free.
