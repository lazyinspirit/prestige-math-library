---
id: cex-the-composition-of-two-absolutely-continuous-functions-need-not-be-absolutely-continuous
kind: counterexample
title: "The composition of two absolutely continuous functions need not be absolutely continuous"
status: draft
origin: pipeline
deps: [def-countable-choice, def-dependent-choice, def-absolutely-continuous-function, cor-bounded-derivative-implies-lipschitz, thm-c1-lipschitz-ac-bv-hierarchy, thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Christopher Heil, Absolute Continuity and the Banach--Zaretsky Theorem, §3.2"
      url: "https://heil.math.gatech.edu/papers/abscont_typosmarked.pdf"
---

## Statement refuted

Absolute continuity is preserved under arbitrary composition.

## Facts & Assumptions

**Given:** Countable choice, dependent choice, $g(0)=0$, $g(x)=x^2\sin^2(1/x)$ for $x>0$, and $h(y)=\sqrt y$ on $[0,1]$.

## Counterexample

**Proof technique:** direct.

1.1 The derivative of $g$ is bounded on $(0,1]$ and $g'(0)=0$, so [[cor-bounded-derivative-implies-lipschitz]] and [[thm-c1-lipschitz-ac-bv-hierarchy]] show that $g$ is absolutely continuous. Since $h'(y)=1/(2\sqrt y)$ is integrable and $h(y)-h(0)=\int_0^y h'(t)\,dt$, [[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]] shows that $h$ is absolutely continuous. [given, algebra]

2.1 For $x>0$, $(h\circ g)(x)=|x\sin(1/x)|$. On the alternating half-waves accumulating at $0$, its total variation has a positive contribution comparable to $1/n$, and the harmonic series diverges. Thus $h\circ g$ is not of bounded variation. [step 1.1, algebra]

3.1 Every absolutely continuous function has bounded variation by [[thm-c1-lipschitz-ac-bv-hierarchy]], so $h\circ g$ is not absolutely continuous. Hence the universal composition assertion is false. [step 2.1] ∎
