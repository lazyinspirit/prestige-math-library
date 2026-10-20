---
id: ex-lstm-scalar-gates
kind: example
title: A scalar LSTM cell with constant gates
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps: [def-lstm-cell]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Goodfellow, Bengio, and Courville, Deep Learning, Chapter 10, §10.10.1"
      url: "https://www.deeplearningbook.org/contents/rnn"
---

## Example

Take $d_x=d_h=1$, set every LSTM weight and bias to zero, allow any scalar input sequence and any initial values $h_0,c_0\in\mathbb R$. Then for every $t\ge1$, the input, forget, and output gates equal $1/2$, the candidate update is zero, and
$$
c_t=2^{-t}c_0,\qquad h_t=\tfrac12\tanh(2^{-t}c_0).
$$

## Example references

[[def-lstm-cell]]

[Goodfellow, Bengio, and Courville, *Deep Learning*, Chapter 10, §10.10.1](https://www.deeplearningbook.org/contents/rnn)

## Facts & Assumptions

**Given:** The scalar LSTM, zero weights and biases, arbitrary scalar inputs, and initial values $h_0,c_0$ as in the Example.

[F1] [[def-lstm-cell]]: each gate's argument is its input-weight matrix times $x_t$, plus its hidden-state matrix times $h_{t-1}$, plus its bias; the gates use $\sigma(s)=(1+e^{-s})^{-1}$ and coordinatewise $\tanh$, with $c_t=f_t\odot c_{t-1}+i_t\odot g_t$ and $h_t=o_t\odot\tanh(c_t)$.

## Proof

1.1 Every gate's affine argument is zero because all weights and biases vanish. By [F1], $\sigma(0)=1/(1+1)=1/2$ and $\tanh(0)=0$, so $i_t=f_t=o_t=1/2$ and $g_t=0$. Substitution into the cell recurrence gives $c_t=c_{t-1}/2$ and $h_t=\tfrac12\tanh(c_t)$. [given, F1, algebra]

2.1 The recurrence in step 1.1 gives $c_1=2^{-1}c_0$. If $c_{t-1}=2^{-(t-1)}c_0$, then $c_t=c_{t-1}/2=2^{-t}c_0$; induction proves this for every $t\ge1$. Substituting this expression into the hidden-state identity in step 1.1 gives $h_t=\tfrac12\tanh(2^{-t}c_0)$. [given, step 1.1, induction, algebra] ∎
