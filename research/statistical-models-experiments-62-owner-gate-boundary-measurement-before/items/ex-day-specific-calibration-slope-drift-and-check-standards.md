---
id: ex-day-specific-calibration-slope-drift-and-check-standards
kind: example
title: "Day-specific calibration slope drift and check standards"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 4
deps:
  - def-batch-and-measurement-process-variation
  - def-measurand-calibration-and-measurement-uncertainty
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "NIST/SEMATECH Engineering Statistics Handbook, Chapter 2: Measurement Process Characterization"
      url: "https://www.itl.nist.gov/div898/handbook/toolaids/pff/mpc.pdf"
    - title: "JCGM 100:2008, Evaluation of Measurement Data — Guide to the Expression of Uncertainty in Measurement, Annex H.3.1–H.3.3"
      url: "https://www.bipm.org/documents/20126/2071204/JCGM_100_2008_E.pdf/cb0ef43f-baa5-11cf-3f85-4dcd86f77bd6"
    - title: "Fan Li, STA610 Lecture 6 Notes: Linear Mixed-Effects Models"
      url: "https://stat.duke.edu/~fl35/teaching/610-26F/Lec6-LME.pdf"
---

## Example

Suppose the three stable reference standards have assigned quantities
$q\in\{0,5,10\}$. Remeasure these same standards on two days, obtaining the
stipulated exact response table

| Reference quantity $q$ | Day 1 response | Day 2 response |
|---:|---:|---:|
| $0$ | $1$ | $1$ |
| $5$ | $11$ | $12$ |
| $10$ | $21$ | $23$ |

Take $[0,10]$ as the declared calibration range.
The standards are check standards here: fixed reference artifacts measured
again over time to reveal changes in the measurement process. The numbers are
a deterministic illustration, not observed data. Fit one equally weighted
straight line with an intercept to all six response pairs and compare it with
the separate day-specific calibration curves.

## Facts & Assumptions

**Given:** The assigned reference values and stipulated responses in the
Example, with the pooled line defined to minimize the sum of squared vertical
residuals over all six pairs.

[F1] [[def-measurand-calibration-and-measurement-uncertainty]]: a calibration
curve is a specified relation between a reference quantity and instrument
response used to convert a later response into a measurand estimate.

[F2] [[def-batch-and-measurement-process-variation]]: day is a batch/process
condition, and calibration curves are pooled only under an explicit shared
curve or equivalence model.

[A1] The three reference standards remain stable with assigned values
$0,5,10$ on both days, and the response table is stipulated exactly as shown.

[A2] The pooled line is $a+bq$ with $a,b\in\mathbb R$, fitted by minimizing
$\sum_{d=1}^2\sum_{q\in\{0,5,10\}}(r_{dq}-a-bq)^2$ with equal weight for each
of the six readings.

## Verification

1.1 The day-specific lines are $r_1(q)=1+2q$ and $r_2(q)=1+2.2q$: each intercept is the response at $q=0$, and the slopes are $(21-1)/10=2$ and $(23-1)/10=2.2$. In particular the known standard at $q=5$ has responses $11$ and $12$. [given, A1, algebra]

1.2 The six reference values have mean $\bar q=5$ and the six responses have mean $\bar r=69/6=11.5$. Their centered sums are $S_{qq}=\sum(q-\bar q)^2=100$ and $S_{qr}=\sum(q-\bar q)(r-\bar r)=210$: the two $q=0$ readings contribute $105$, the $q=5$ readings contribute $0$, and the two $q=10$ readings contribute $105$. [given, A1, algebra]

2.1 Write each residual as $(r-\bar r)-b(q-\bar q)+(\bar r-a-b\bar q)$. The first two terms sum to zero over the six pairs, so expanding the sum of squared residuals gives $\sum[(r-\bar r)-b(q-\bar q)]^2+6(\bar r-a-b\bar q)^2$. For fixed $b$ this is minimized at $a=\bar r-b\bar q$; the remaining slope-dependent terms are $S_{qq}b^2-2S_{qr}b$, whose completed square is $S_{qq}(b-S_{qr}/S_{qq})^2$ plus a constant. Since $S_{qq}=100>0$, the unique minimizing slope is $b=210/100=21/10$ and $a=11.5-(21/10)(5)=1$, giving $\hat r(q)=1+(21/10)q$. [given, A2, step 1.2, algebra]

3.1 At the $q=5$ check standard, the pooled line predicts $11.5$, so its day-specific residuals are $11-11.5=-0.5$ and $12-11.5=0.5$. Inverting the pooled line maps the two observed responses to $10/(21/10)=100/21$ and $11/(21/10)=110/21$, whereas the separate day lines each map their own response back to $q=5$. The three-standard table exposes the differing slopes in this stipulated example; it supplies no empirical evidence, statistical test, or general justification for pooling calibration curves. [F1, F2, A1, step 1.1, step 2.1, algebra] ∎

## Remarks

There is one stipulated reading per standard per day, so the table does not
estimate repeatability, a variance component, a control limit, or uncertainty.
It only demonstrates the finite arithmetic of comparing three standard
responses under two specified lines.
