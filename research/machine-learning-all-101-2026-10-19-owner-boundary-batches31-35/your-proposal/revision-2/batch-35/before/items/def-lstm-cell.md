---
id: def-lstm-cell
kind: definition
title: Standard LSTM cell
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps: [def-recurrent-neural-network]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Goodfellow, Bengio, and Courville, Deep Learning, Chapter 10, §10.10.1, Eqs. 10.40–10.44"
      url: "https://www.deeplearningbook.org/contents/rnn"
---

## Definition

Fix positive finite dimensions $d_x,d_h$, inputs $x_t\in\mathbb R^{d_x}$, hidden states $h_t\in\mathbb R^{d_h}$, cell states $c_t\in\mathbb R^{d_h}$, and initial values $h_0,c_0$. A standard long short-term memory (LSTM) cell without peephole connections or projection has shared matrices $W_i,W_f,W_o,W_c\in\mathbb R^{d_h\times d_x}$, $U_i,U_f,U_o,U_c\in\mathbb R^{d_h\times d_h}$, and biases $b_i,b_f,b_o,b_c\in\mathbb R^{d_h}$. Apply $\sigma(s)=(1+e^{-s})^{-1}$ and $\tanh(s)=(e^s-e^{-s})/(e^s+e^{-s})$ coordinatewise. At each time $t\ge1$, set

$$ i_t=\sigma(W_i x_t+U_i h_{t-1}+b_i),\qquad f_t=\sigma(W_f x_t+U_f h_{t-1}+b_f),\qquad o_t=\sigma(W_o x_t+U_o h_{t-1}+b_o), $$

$$ g_t=\tanh(W_c x_t+U_c h_{t-1}+b_c),\qquad c_t=f_t\odot c_{t-1}+i_t\odot g_t,\qquad h_t=o_t\odot\tanh(c_t), $$

where $\odot$ is coordinatewise multiplication. The same matrices and biases are reused at every time step. The vectors $i_t,f_t,o_t$ are the input, forget, and output gates, and $g_t$ is the candidate state update.

## Definition references

[Goodfellow, Bengio, and Courville, *Deep Learning*, Chapter 10, §10.10.1, Eqs. 10.40–10.44](https://www.deeplearningbook.org/contents/rnn)
