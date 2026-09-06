---
id: cex-dedekind-kummer-without-the-index-hypothesis
kind: counterexample
title: "Dedekind--Kummer without the index hypothesis"
status: draft
origin: pipeline
deps: [thm-dedekind-kummer-prime-factorisation, cor-order-index-discriminant-formula]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory, Remark 3.42"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
---

## Statement refuted

Reduction of a minimal polynomial modulo $p$ always gives the prime factorisation of $p\mathcal O_K$.

## Counterexample

**Given:** $K=\mathbb Q(\sqrt5)$ and $\alpha=\sqrt5$.

1.1 The order $\mathbb Z[\sqrt5]$ has discriminant $20$, whereas $d_K=5$, so the index formula gives index $2$. [given, algebra]

2.1 Yet $X^2-5\equiv(X+1)^2\pmod2$ while $2$ is unramified because $2\nmid d_K$.  Thus the repeated reduction factor incorrectly predicts ramification, demonstrating necessity of the index hypothesis. [step 1.1, algebra] ∎
