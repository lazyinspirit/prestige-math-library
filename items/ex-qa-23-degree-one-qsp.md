---
id: ex-qa-23-degree-one-qsp
kind: example
title: Degree-one QSP phase identity
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 9
deps:
  - def-qa-23-qsp-signal-sequence
  - def-qa-23-qsp-admissible-polynomial-pair
justified_by: []
proof_strategy: direct
axiom_use: "None; this is a finite two-by-two matrix multiplication."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, Quantum singular value transformation and beyond"
      url: "https://arxiv.org/pdf/1806.01838"
      locator: "Theorem 3, PDF pp. 7–10."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 29"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "Chapter 29 §29.2, equation (29.11) and Lemma 29.1, PDF pp. 144–145."
---

## Example

Take $d=1$ and phases $\phi_0=\phi_1=0$. Then $Z(0)=I$ and the sequence is $U(x)=W_R(x)$.

## Facts & Assumptions

**Given:** $x\in[-1,1]$, $s=\sqrt{1-x^2}\ge0$, and the definitions of $W_R$, $Z$, and the degree-one QSP matrix in [[def-qa-23-qsp-signal-sequence]].

[F1] [[def-qa-23-qsp-signal-sequence]]: $W_R(x)=\begin{pmatrix}x&s\\s&-x\end{pmatrix}$, $Z(0)=I$, and the length-one sequence is $Z(0)W_R(x)Z(0)$.

[F2] [[def-qa-23-qsp-admissible-polynomial-pair]]: an admissible pair has the declared degree/parity bounds and satisfies $PP^*+(1-x^2)QQ^*=1$.

## Verification

1.1 Multiplying $Z(0)W_R(x)Z(0)$ gives $U(x)=\begin{pmatrix}x&s\\s&-x\end{pmatrix}$. Thus the upper-left polynomial is $P(x)=x$ and the upper-right entry is $s(x)Q(x)$ with $Q(x)=1$. [F1, algebra]

2.1 The polynomial $P$ has degree one and odd parity; $Q$ is constant with degree zero and even parity. Also $P P^*+(1-x^2)Q Q^*=x^2+(1-x^2)=1$, so the pair is admissible by [F2]. [F2, step 1.1, algebra]

3.1 At $x=1$ and $x=-1$, $s(x)=0$, so $U(1)=\operatorname{diag}(1,-1)$ and $U(-1)=\operatorname{diag}(-1,1)$. These are exactly the endpoint values from the displayed matrix, with no division by $s(x)$ at either endpoint. [F1, step 1.1, algebra] ∎

