---
id: thm-koebe-one-quarter-theorem
kind: theorem
title: "Every normalized univalent disc map contains the quarter disc"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-normalized-univalent-class, cor-bieberbach-second-coefficient-bound]
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  references:
    - title: "Matthias Weber, Complex Analysis, Corollary 7.5.7"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
    - title: "Walter Rudin, Real and Complex Analysis, Theorem 14.14"
      url: "https://perso.telecom-paristech.fr/decreuse/_downloads/c22155fef582344beb326c1f44f437d2/rudin.pdf"
---

## Statement

If $f\in\mathcal S$, then

$$D(0,1/4)\subset f(\mathbb D).$$

## Facts & Assumptions

**Given:** A function $f\in\mathcal S$.

[L1] Every normalized univalent function satisfies $|a_2|\le2$ ([[cor-bieberbach-second-coefficient-bound]]).

## Proof

**Proof technique:** direct.

1.1 Assume toward a contradiction that $w\in\mathbb C$ with $0<|w|<1/4$ is omitted by $f(\mathbb D)$. Define $$g(z):=\frac{wf(z)}{w-f(z)}.$$ Then $g$ is holomorphic and univalent on $\mathbb D$, $g(0)=0$, and $$g'(0)=1,\qquad g(z)=z+\left(a_2+\frac1w\right)z^2+\cdots.$$ [L1, given, assume-contra, algebra]

2.1 Since $g\in\mathcal S$, fact [L1] gives $$\left|a_2+\frac1w\right|\le2.$$ Applying [L1] again to $f$ yields $|a_2|\le2$, so $$\frac1{|w|}\le\left|a_2+\frac1w\right|+|a_2|\le4.$$ Thus $|w|\ge1/4$, contradicting step 1.1. [L1, step 1.1, discharge-contradiction]

3.1 Therefore no value of modulus less than $1/4$ is omitted, so $D(0,1/4)\subset f(\mathbb D)$. [step 2.1] ∎
