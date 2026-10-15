---
id: thm-cause-specific-cumulative-incidence-decomposition
kind: theorem
title: "Cause-specific cumulative incidence as an integral against its hazard measure"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-competing-risk-data-cause-specific-hazards-and-cumulative-incidence
  - def-measure-with-density
  - thm-integration-against-a-density
  - thm-monotone-real-functions-are-borel-measurable
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
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

## Statement

For every cause $k\in\{1,\ldots,K\}$ and every $t\ge0$, the cumulative
incidence decomposes as
$$F_k(t)=\int_{[0,t]}S(u-)\,d\Lambda_k(u).$$
If $\nu_k$ has a Lebesgue density $f_k$ and $S(u)>0$ for every $u\in(0,t]$,
then $d\Lambda_k(u)=\lambda_k(u)\,du$ for Lebesgue-a.e. $u\in(0,t]$ with
$\lambda_k(u):=f_k(u)/S(u)$, and
$$F_k(t)=\int_0^tS(u)\lambda_k(u)\,du.$$

## Facts & Assumptions

**Given:** A finite-cause competing-risk model as in
[[def-competing-risk-data-cause-specific-hazards-and-cumulative-incidence]],
its event subdistribution $\nu_k$, survival function $S$, and cause-specific
hazard measure $\Lambda_k$.

[F1] [[def-competing-risk-data-cause-specific-hazards-and-cumulative-incidence]]: $F_k(t)=\nu_k([0,t])$, $S(u-)=\mathbb P(T\ge u)$, and $\Lambda_k=w\,\nu_k$ with $w(u)=1/S(u-)$ when $S(u-)>0$ and $w(u)=0$ otherwise.

[F2] [[def-measure-with-density]]: if $w$ is nonnegative and measurable, then $w\,\nu_k$ is the measure defined by $(w\,\nu_k)(B)=\int_Bw\,d\nu_k$.

[F3] [[thm-integration-against-a-density]]: for nonnegative measurable $f,g$, $\int g\,d(f\,d\mu)=\int gf\,d\mu$.

[F4] [[thm-monotone-real-functions-are-borel-measurable]]: every monotone real function is Borel measurable.

## Proof

1.1 The set function $\nu_k(B)=\mathbb P(T\in B,D=k)$ is a finite measure: it is the restriction of the law of $(T,D)$ to the measurable cause slice $D=k$, so disjoint Borel sets have disjoint preimages and probability countable additivity applies. [F1, given, algebra]

2.1 The function $s(u):=S(u-)=\mathbb P(T\ge u)$ is nonincreasing, hence Borel by [F4]. Thus $R:=\{u:s(u)>0\}$ is Borel and $w=s^{-1}\mathbf 1_R$ is nonnegative Borel. [F1, F4, step 1.1]

3.1 The set $R^c$ is an upper interval. If $R^c=[a,\infty)$, then $\nu_k(R^c)\le\mathbb P(T\ge a)=s(a)=0$. If $R^c=(a,\infty)$, then $\{T>a\}=\bigcup_{m\ge1}\{T\ge a+1/m\}$ and each event on the right has probability $s(a+1/m)=0$; hence again $\nu_k(R^c)=0$. The empty case is immediate. [F1, step 2.1, given]

3.2 By [F2], $\Lambda_k=w\,\nu_k$ is a measure. [F2, step 2.1]

4.1 Applying [F3] with $g(u)=\mathbf 1_{[0,t]}(u)s(u)$ gives $\int_{[0,t]}s(u)\,d\Lambda_k(u)=\int_{[0,t]}s(u)w(u)\,d\nu_k(u)=\int_{[0,t]}\mathbf 1_R(u)\,d\nu_k(u)=\nu_k([0,t])=F_k(t)$. The penultimate equality uses step 3.1, so this proves the measure-valued identity, including atoms and $t=0$. [F1, F3, step 3.1, step 3.2, algebra]

5.1 Suppose $\nu_k(du)=f_k(u)\,du$ and $S(u)>0$ for every $u\in(0,t]$. For each integer $m\ge1$, the set $A_m:=\{u\in(0,t]:\mathbb P(T=u)\ge1/m\}$ has at most $m$ points, since distinct singleton events are disjoint and their probabilities sum to at most $1$. Every positive atom belongs to some $A_m$, so $A:=\bigcup_{m\ge1}A_m$ is countable and therefore Lebesgue-null. For $0<u\le t$, the definitions $s(u)=\mathbb P(T\ge u)$ and $S(u)=\mathbb P(T>u)$ give $s(u)-S(u)=\mathbb P(T=u)$; hence $s(u)=S(u)$ outside $A$. Also $s(u)\ge S(u)>0$, so $w(u)=1/s(u)$ on $(0,t]$. Since $d\nu_k=f_k\,du$, [F1, F3] give $d\Lambda_k=w f_k\,du$, whose density agrees with $f_k/S=\lambda_k$ Lebesgue-a.e. on $(0,t]$. Finally, $\nu_k(\{0\})=0$ because $\nu_k$ has a Lebesgue density, so the point $0$ contributes nothing to either side of step 4.1; substituting the density on $(0,t]$ into that identity gives the stated formula, including $t=0$. [F1, F3, given, step 4.1, algebra] ∎

