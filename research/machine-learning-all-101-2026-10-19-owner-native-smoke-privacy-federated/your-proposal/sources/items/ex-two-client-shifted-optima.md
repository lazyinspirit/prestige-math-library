---
id: ex-two-client-shifted-optima
kind: example
title: Two clients with shifted least-squares optima
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-federated-objective-and-client-sampling
  - alg-fedavg
  - def-linear-regression-objectives
justified_by: []
aliases: []
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification: {}
sources: []
proof_strategy: direct
---

## Example

Consider two one-observation scalar least-squares clients with data
$(a_1,y_1)=(1,1)$ and $(a_2,y_2)=(2,-2)$, using loss
$\tfrac12(y_i-a_iw)^2$. Their objectives are
$f_1(w)=\tfrac12(w-1)^2$ and $f_2(w)=2(w+1)^2$, with local minimizers $1$
and $-1$. The equal-client objective has minimizer $-3/5$. Starting FedAvg
from $w_0=0$, using both clients, two full-gradient local steps of size
$1/4$, and server scale $1$, gives the server model $-9/32$ after one round.

## Example references

[[def-linear-regression-objectives|Fixed-design least-squares objective]]

## Facts & Assumptions

**Given:** The two client data points and FedAvg parameters in the Example.

[F1] [[def-linear-regression-objectives]]: a one-observation scalar least-squares loss is $\tfrac12(y-aw)^2$.

[F2] [[def-federated-objective-and-client-sampling]]: the equal-client objective is the arithmetic mean of client objectives.

[F3] [[alg-fedavg]]: with all clients selected, the server adds the mean of their local model differences when $\eta_g=1$.

## Verification

**Proof technique:** direct.

1.1 By [F1], client 1 has derivative $w-1$ and minimizer $1$; client 2 has derivative $4(w+1)$ and minimizer $-1$. The equal-client derivative is $(w-1+4(w+1))/2=(5w+3)/2$, so its unique zero and minimizer is $-3/5$. [F1, F2, given, algebra]

1.2 From $w_0=0$, the two local trajectories are $0\mapsto1/4\mapsto7/16$ and $0\mapsto-1\mapsto-1$. Averaging the two final local models gives $(7/16-1)/2=-9/32$. [F1, F3, given, algebra]

2.1 Since $-9/32\ne-3/5$, this one-round FedAvg output is not the minimizer of the equal-client objective, although the clients' optima are shifted in opposite directions. [step 1.1, step 1.2, algebra] ∎
