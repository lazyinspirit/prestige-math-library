---
id: lem-absolutely-summable-fourier-coefficients-give-uniform-convergence
kind: lemma
title: "Absolutely summable Fourier coefficients give uniform convergence"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-wiener-algebra-of-the-circle, thm-abel-means-converge-in-lp-uniformly-and-at-lebesgue-points]
proof_strategy: direct
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes, Chapter 4"
      url: "https://arxiv.org/pdf/0903.3845"
---

## Statement

Assume the Axiom of Countable Choice. If $(a_k)_{k\in\mathbb Z}\in\ell^1(\mathbb Z)$, then $\sum_k a_ke_k$ converges absolutely and uniformly to a continuous function $g$, and $\widehat g(m)=a_m$. Consequently every $f\in A(\mathbb T)$ has $f=g$ almost everywhere for $a_k=\widehat f(k)$.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and an $\ell^1(\mathbb Z)$ sequence $(a_k)$.

[L1] Abel means of an $L^1(\mathbb T)$ function converge to that function in $L^1$ as $r\uparrow1$ ([[thm-abel-means-converge-in-lp-uniformly-and-at-lebesgue-points]]).

## Proof

**Proof technique:** direct.

1.1 Since $|a_ke_k(x)|=|a_k|$ and $\sum_k|a_k|<\infty$, the Weierstrass M-test gives absolute uniform convergence to a continuous $g$. [given, algebra]

2.1 Uniform convergence permits integration term by term against $e_{-m}$; character orthogonality gives $\widehat g(m)=a_m$. [step 1.1, algebra]

3.1 For $a_k=\widehat f(k)$, the Abel means are $\sum_k r^{|k|}a_ke_k$. They converge uniformly to $g$ by dominated tail control, while [L1] says they converge to $f$ in $L^1$; hence $f=g$ almost everywhere. [L1, step 1.1, algebra] ∎
