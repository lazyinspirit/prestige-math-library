---
id: thm-pp-is-closed-under-complement
kind: theorem
title: "PP is closed under complement"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-sharpp-and-gap-p-functions, thm-pp-is-sign-testing-gap-p]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Lance Fortnow, Counting Complexity"
      url: "https://lance.fortnow.com/papers/files/counting.pdf"
---

## Statement

If $L\in\mathrm{PP}$, then its complement belongs to $\mathrm{PP}$.

## Facts & Assumptions

**Given:** $L\in\mathrm{PP}$.

[L1] GapP values are integer differences of accepting and rejecting path counts, by [[def-sharpp-and-gap-p-functions]].

[L2] A language is in PP exactly when membership is strict positivity of a GapP function, by [[thm-pp-is-sign-testing-gap-p]].

## Proof

**Proof technique:** direct.

1.1 By [L2], choose $g\in\mathrm{GapP}$ with $L=\{x:g(x)>0\}$. Since $g$ is integer-valued, $$x\notin L\iff g(x)\le0\iff1-g(x)>0.$$ [L2, given, algebra]

2.1 If $g$ is witnessed by a machine, exchanging its accepting and rejecting labels witnesses $-g$ in GapP. A deterministic accepting machine witnesses the constant-one gap, and a leading tagged branch adds two gap functions. Hence $1-g\in\mathrm{GapP}$ by [L1]. [L1, step 1.1, construct]

3.1 Applying [L2] to $1-g$ shows that $\overline L\in\mathrm{PP}$. The added $1$ is exactly what turns the non-strict condition $g\le0$ into strict positivity, including $g=0$. [L2, step 1.1, step 2.1] ∎
