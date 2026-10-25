---
id: ex-scaffold-control-correction
kind: example
title: SCAFFOLD controls cancel shifted local gradients at the server model
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-federated-objective-and-client-sampling
  - alg-scaffold
justified_by: []
aliases: []
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification: {}
sources:
  references:
    - title: "Sai Praneeth Karimireddy et al., SCAFFOLD: Stochastic Controlled Averaging for Federated Learning, §4"
      url: https://cs.nyu.edu/~mohri/pub/scaffold.pdf
proof_strategy: direct
---

## Example

Let two clients have objectives $f_1(w)=\tfrac12(w-1)^2$ and
$f_2(w)=\tfrac12(w+1)^2$. At server model $x=0$, initialize
$c_i=\nabla f_i(0)$ and $c=(c_1+c_2)/2$. Under SCAFFOLD's corrected local
gradient $\nabla f_i(y)-c_i+c$, every local step starting from $0$ remains at
$0$, for every positive local step size and every finite local-step count.

## Example references

[Karimireddy et al., SCAFFOLD, §4 and Algorithm 1](https://cs.nyu.edu/~mohri/pub/scaffold.pdf)

## Facts & Assumptions
**Given:** The two client objectives, server model and control initialization in the Example.

[F1] [[alg-scaffold]]: the server control is initialized to the average of the client controls, as specified in the Example.

[F2] [[alg-scaffold]]: a local step uses $y\leftarrow y-\eta_l(g_i(y)-c_i+c)$. For the exact-gradient corrected direction specified in the Example, take the deterministic oracle $g_i(y)=\nabla f_i(y)$.



**Proof technique:** direct.

## Proof

1.1 The client gradients are $\nabla f_1(w)=w-1$ and $\nabla f_2(w)=w+1$. Thus at $x=0$ the initialized controls are $c_1=-1$, $c_2=1$, and $c=0$ by [F1]. [F1, given, algebra]

2.1 If a client's local point is $y=0$, then $\nabla f_1(0)-c_1+c=-1-(-1)+0=0$ and $\nabla f_2(0)-c_2+c=1-1+0=0$. Hence its next local point is still zero by [F2]. Induction on the local-step index proves every local point is zero. [F2, step 1.1, given, induction] ∎
