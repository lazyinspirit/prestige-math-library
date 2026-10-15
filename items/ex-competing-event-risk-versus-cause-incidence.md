---
id: ex-competing-event-risk-versus-cause-incidence
kind: example
title: "Higher competing mortality lowers incidence in a two-time table"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - alg-aalen-johansen-cumulative-incidence-estimator
  - def-competing-risk-data-cause-specific-hazards-and-cumulative-incidence
  - def-event-time-observation-schemes
  - def-nelson-aalen-kaplan-meier-greenwood-estimators
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "Lu Tian and Richard Olshen, Competing Risk and Alternatives to Cox Model, Stanford University STAT331, slides 6–8, 12"
      url: "https://web.stanford.edu/~lutian/coursepdf/survweek11.pdf"
    - title: "Janne Pitkäniemi and Esa Läärä, Survival analysis with competing risks, Statistical Practice in Epidemiology using R, University of Tartu, slides 13–24"
      url: "https://bendixcarstensen.com/SPE/2015/h3-allslides.pdf"
    - title: "Peter C. Austin, D. S. Lee, and Jason P. Fine, Introduction to the Analysis of Survival Data in the Presence of Competing Risks, Circulation 133(6) (2016), pp. 601–609"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4741409/"
---

## Example

Cause 1 is cancer death and cause 2 is cardiovascular death. Consider two
exact groups of 16 right-censored records, with follow-up through time $2$.
Remaining event-free subjects are censored at $2$. At time $1$, the low-CV
group has 4 cancer deaths and 4 cardiovascular deaths; the high-CV group has
4 cancer deaths and 8 cardiovascular deaths. At time $2$, the corresponding
risk sets and cancer deaths are 8 and 2 in the low-CV group, and 4 and 1 in
the high-CV group. Events from different causes at the same time are grouped
in the common risk-set update.

## Facts & Assumptions

**Given:** Both groups have 16 subjects; events are observed at times $1$ and
$2$ with the risk and cause counts stated above. Compute the cause-1
Aalen–Johansen incidence and compare it with the complement of the
cause-specific Kaplan–Meier product that treats cause 2 as censored.

[F1] [[def-competing-risk-data-cause-specific-hazards-and-cumulative-incidence]]: the observed cause-$k$ cumulative incidence is $F_k(t)=\mathbb P(T\le t,D=k)$.

[F2] [[alg-aalen-johansen-cumulative-incidence-estimator]]: at an event time $u$, the cause-$k$ increment is $\widehat S(u-)\,\Delta N_k(u)/Y(u)$ and all-cause survival is multiplied by $1-\Delta N(u)/Y(u)$.

[F3] [[def-event-time-observation-schemes]]: under right censoring, $U=\min(T,C)$ and $\delta=\mathbf 1\{T\le C\}$; an event tied with censoring is counted as an event.

[F4] [[def-nelson-aalen-kaplan-meier-greenwood-estimators]]: the single-event Kaplan–Meier product multiplies $1-\Delta N(u)/Y(u)$ over event times, with tied event counts grouped in the risk set.

## Verification

1.1 At time $1$, both groups have $Y(1)=16$ and $\Delta N_1(1)=4$. The low-CV group has $\Delta N(1)=8$, so $\widehat S(1)=1-8/16=1/2$ and $\widehat F_1(1)=4/16=1/4$. The high-CV group has $\Delta N(1)=12$, so $\widehat S(1)=1-12/16=1/4$ and $\widehat F_1(1)=4/16=1/4$. [F2, given, algebra]

2.1 At time $2$, the low-CV risk count is $8$ and $\Delta N_1(2)=2$, giving increment $(1/2)(2/8)=1/8$ and $\widehat F_1(2)=1/4+1/8=3/8$. The high-CV risk count is $4$ and $\Delta N_1(2)=1$, giving increment $(1/4)(1/4)=1/16$ and $\widehat F_1(2)=1/4+1/16=5/16$. Thus higher cardiovascular mortality lowers the observed cancer cumulative incidence even though both groups have cause-1 event fractions $1/4$ at each event time. [F1, step 1.1, F2, given, algebra]

3.1 If cause-2 deaths are instead recoded as censorings for the cause-1 Kaplan–Meier calculation, the low-CV product is $(1-4/16)(1-2/8)=(3/4)^2=9/16$, and the high-CV product is $(1-4/16)(1-1/4)=(3/4)^2=9/16$. Both complements are $7/16$, which differs from both observed cause-1 incidences, $3/8$ and $5/16$. The cause-specific product-limit complement therefore does not equal the observed cause-specific cumulative incidence in these records. [F1, F3, F4, step 2.1, given, algebra] ∎

