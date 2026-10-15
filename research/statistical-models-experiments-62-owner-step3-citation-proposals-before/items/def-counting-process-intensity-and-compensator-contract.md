---
id: def-counting-process-intensity-and-compensator-contract
kind: definition
title: "Simple counting-process intensity and compensator contract"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 0
deps:
  - def-continuous-time-filtration-and-all-pairs-martingale
  - def-continuous-time-adapted-process-and-martingale
  - def-progressively-measurable-and-predictable-process
  - def-conditional-expectation-as-an-ae-class
  - def-axiom-of-choice
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Lu Tian, STAT331 Unit 8: Lebesgue-Stieltjes Integrals, Martingales, Counting Processes, PDF pp. 1–5, 12–14"
      url: "https://web.stanford.edu/~lutian/coursepdf/martingale1.pdf"
    - title: "P. K. Andersen, Ø. Borgan, R. D. Gill, N. Keiding, Censoring, Truncation and Filtering in Statistical Models Based on Counting Processes, §2, PDF pp. 3–8"
      url: "https://ir.cwi.nl/pub/5993/5993D.pdf"
verification:
  precheck: n/a

---

## Definition

Assume the Axiom of Choice [[def-axiom-of-choice]]. Fix a finite horizon
$T>0$, a probability space $(\Omega,\mathcal F,P)$ and a continuous-time
filtration $(\mathcal F_t)_{0\le t\le T}$ in the all-pairs convention of
[[def-continuous-time-filtration-and-all-pairs-martingale]]. A **simple
unit-jump counting process** is an adapted, càdlàg (right-continuous with left
limits), nondecreasing, integer-valued process $N$ with $N_0=0$,
$N_T<\infty$ almost surely, and $\Delta N_t\in\{0,1\}$ for every
$0<t\le T$ outside one null event; here $\Delta N_t:=N_t-N_{t-}$.

An **at-risk process** is a predictable process
$Y:[0,T]\times\Omega\to\{0,1\}$, and an **intensity density** is a finite,
nonnegative predictable process $\lambda$. Form the Lebesgue integral
$$A_t:=\int_0^tY_s\lambda_s\,ds,\qquad 0\le t\le T.$$
For this model and every nonnegative predictable process $G$, define the
pathwise energy integral by
$$\int_0^tG_s\,dA_s:=\int_0^tG_sY_s\lambda_s\,ds,\qquad t\le T.$$
The **continuous intensity compensator contract** requires the defining
integral for $A$ to be finite pathwise, and requires $A$ to be continuous,
adapted and predictable with
$A_0=0$, and that $\mathbb E[A_T]<\infty$. Set $M_t:=N_t-A_t$. The model
contract is the additional hypothesis that $M$ is a square-integrable
martingale relative to the stated filtration. Under this contract $A$ is a
continuous predictable compensator of $N$.

The displayed intensity density alone does **not** assert that $N-A$ is a
martingale, that such a process exists for a given $N$, or that the contract
follows from an empirical observation scheme. No general compensator-existence
theorem is included here. The Axiom of Choice is inherited from the
continuous-time martingale and conditional-expectation interfaces; no further
choice is used to state the model contract.

## Source notes

Tian's Unit 8 sets up the one-event process, at-risk indicator and integrated
hazard; Andersen–Borgan–Gill–Keiding define the counting-process compensator
as a predictable finite-variation process for which $N-A$ is a local
martingale. This library contract strengthens that model clause to a
square-integrable martingale and imposes $\mathbb E[A_T]<\infty$ for the
isometry developed below. It makes no existence claim from an intensity
formula.
