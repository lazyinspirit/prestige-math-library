---
id: cor-minimal-recurrence-and-reduced-denominator
kind: corollary
title: "The least eventual recurrence order is the degree of the reduced denominator"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-linear-recurrence-iff-rational-generating-function, thm-polynomial-ring-over-a-field-is-a-ufd]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "R. P. Stanley, Enumerative Combinatorics, vol. 1, 2nd ed., Corollary 4.2.1"
      url: "https://math.mit.edu/~rstan/ec/ec1.pdf"
    - title: "M. Waldschmidt, Linear Recurrence Sequences VI, Order of a linear recurrence sequence"
      url: "https://webusers.imj-prg.fr/~michel.waldschmidt/articles/pdf/LinRecSeqVI.pdf"
pipeline_run: null
---

## Statement

Let $F=\sum_{n\ge0}a_nx^n\in K\llbracket x\rrbracket$ be rational over a field, and let $P/Q$ be a normalised reduced presentation. The least order of an eventual constant-coefficient recurrence satisfied by $(a_n)$ is $\deg Q$, with the convention that $\deg 1=0$. Thus polynomial series have minimal eventual order zero.

## Facts & Assumptions

**Given:** A rational series $F=P/Q$ over a field $K$, where $Q(0)=1$ and $P,Q$ are coprime.

[L1] A sequence is eventually linearly recurrent exactly when its generating function is rational, and a denominator $D$ of degree $e$ supplies an eventual recurrence of order $e$ ([[thm-linear-recurrence-iff-rational-generating-function]]).

[L2] The polynomial ring over a field is a unique factorisation domain ([[thm-polynomial-ring-over-a-field-is-a-ufd]]).

## Proof

**Proof technique:** direct.

1.1 If $(a_n)$ satisfies an eventual recurrence of order $e$, [L1] gives a polynomial $A$ and a normalised denominator $D$ of degree $e$ with $F=A/D$, so $PD=AQ$. [given, L1]

2.1 Since $P$ and $Q$ are coprime in the UFD $K[x]$, the identity $PD=AQ$ forces $Q\mid D$; therefore $\deg Q\le e$. [step 1.1, L2, algebra]

3.1 If $\deg Q>0$, the presentation $P/Q$ itself gives by [L1] an eventual recurrence of order $\deg Q$, so step 2.1 proves minimality. If $Q=1$, then $F=P$ is a polynomial and its coefficients are eventually zero, giving minimal order zero. [step 2.1, L1] ∎
