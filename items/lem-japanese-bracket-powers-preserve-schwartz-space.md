---
id: lem-japanese-bracket-powers-preserve-schwartz-space
kind: lemma
title: Real powers of the Japanese bracket act on Schwartz space
status: draft
origin: pipeline
deps:
  - def-schwartz-space-and-its-seminorms
  - lem-smooth-polynomially-bounded-multipliers-on-schwartz-space
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Semyon Dyatlov, Lecture Notes for 18.155, current revision"
      url: https://math.mit.edu/~dyatlov/18.155/155-notes.pdf
      locator: "Exercise 11.3, printed p. 135 (multiplier statement only; the bracket derivative bounds are proved here)"
    - title: "Richard B. Melrose, Differential Analysis, Chapter 3"
      url: https://math.mit.edu/~rbm/18-155-F17/Chapter3.pdf
      locator: "Proposition 4.8 proof, printed p. 69 (the bracket multiplier in the weighted L2 model)"
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
---

## Statement

For every integer $n\ge1$ and real $s$, the functions
$$w_s(\xi)=\langle\xi\rangle^s=(1+|\xi|^2)^{s/2},\qquad w_{-s}(\xi)=\langle\xi\rangle^{-s}$$
are smooth multipliers acting continuously on $\mathcal S(\mathbb R^n)$.
The multiplication maps are mutual inverses. By transposition they also act
continuously and invertibly on $\mathcal S'(\mathbb R^n)$, for both its weak
and strong dual topologies.

## Facts & Assumptions

**Given:** $n\ge1$, $s\in\mathbb R$, and the bracket $\langle\xi\rangle\ge1$.

[F1] Schwartz functions are actual smooth functions, and their topology is
given by the seminorms $p_{\alpha\beta}(f)=\sup_\xi|\xi^\alpha
\partial^\beta f(\xi)|$ ([[def-schwartz-space-and-its-seminorms]]).

[F2] A smooth multiplier whose every derivative has polynomial growth acts
continuously on $\mathcal S$; its transpose acts continuously on $\mathcal S'$
for both dual topologies ([[lem-smooth-polynomially-bounded-multipliers-on-schwartz-space]]).

## Proof

**Proof technique:** Chain-rule derivative bounds followed by transposition.

1.1 Put $q(\xi)=1+|\xi|^2$. Induction on $|\alpha|$, differentiating either the polynomial factor or $q^{s/2-j}$, expresses each derivative as a finite sum
$$\partial^\alpha w_s(\xi)=\sum_j P_{\alpha,j}(\xi)q(\xi)^{s/2-j},$$
where every $P_{\alpha,j}$ is a polynomial of degree at most $|\alpha|$. Since $q=\langle\xi\rangle^2$, each term is bounded by a constant times $\langle\xi\rangle^{s+|\alpha|}$, and hence by $C_{\alpha,s}\langle\xi\rangle^{\max(0,s+|\alpha|)}$. Enlarging the exponent to an integer gives a polynomial-growth bound for this derivative. [F1, algebra]

2.1 The same induction with $-s$ gives a polynomial-growth bound for every derivative of $w_{-s}$. [step 1.1, algebra]

3.1 The bounds in steps 1.1 and 2.1 meet the hypotheses of [F2], so multiplication by either weight is continuous on Schwartz space. Pointwise $w_sw_{-s}=1$, so both compositions on $\mathcal S$ are the identity. [F1, F2, step 1.1, step 2.1, algebra]

4.1 For $T\in\mathcal S'$, transposition defines $\langle w_{\pm s}T,\varphi\rangle=\langle T,w_{\pm s}\varphi\rangle$. By [F2] these maps are continuous for the weak and strong dual topologies; their compositions evaluate $T$ on $w_sw_{-s}\varphi=\varphi$, so they are inverse on $\mathcal S'$. [F2, step 3.1] ∎
