---
id: "cor-absolute-value-and-powers-of-a-martingale-are-submartingales"
kind: "corollary"
title: "Absolute value and powers of a martingale are submartingales"
deps: ["thm-convex-functions-of-martingales-are-submartingales", "lem-absolute-real-powers-are-convex", "def-axiom-of-choice"]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
status: published
origin: "pipeline"
---

## Statement

Assume AC. If $M$ is a martingale then $(|M_n|)$ is a submartingale. More generally, for real $p\ge1$, if $E|M_n|^p<\infty$ for every $n\ge0$, then $(|M_n|^p)$ is a submartingale. We use $0^p=0$.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

[F1] For every real p at least one, the absolute pth power is finite, Borel and convex, including its value zero. [[lem-absolute-real-powers-are-convex]].

[F2] A finite convex martingale image is a submartingale when integrable at every time. [[thm-convex-functions-of-martingales-are-submartingales]].

[F3] AC supplies the inherited conditional-expectation existence and any stated choice of versions. [[def-axiom-of-choice]].

## Proof

**Proof technique:** direct.

1.1 Fix $p\ge1$ and set $\phi(t)=|t|^p$ on all of $\mathbb R$, using $\phi(0)=0$. The power lemma supplies finiteness, Borel measurability and convexity, including real noninteger $p$ and the endpoint $p=1$. Since $\phi(M_n)\ge0$, the assumed finite pth moment is exactly its $L^1$ condition. The convex-transform theorem therefore gives $E[|M_{n+1}|^p\mid\mathcal F_n]\ge |M_n|^p$ a.s. for every $n$. [given, F1, F2]

2.1 At $p=1$, $E|M_n|<\infty$ already follows from the martingale definition, so the first assertion requires no extra moment hypothesis. AC is inherited from the convex-transform theorem and its conditional Jensen argument. For $p>1$ the moment assumption is retained; no assertion for $p<1$ is made. [given, F2, F3, step 1.1] ∎
