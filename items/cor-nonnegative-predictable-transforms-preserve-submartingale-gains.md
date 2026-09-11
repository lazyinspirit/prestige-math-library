---
id: "cor-nonnegative-predictable-transforms-preserve-submartingale-gains"
kind: "corollary"
title: "Nonnegative predictable transforms preserve submartingale gains"
deps: ["def-discrete-martingale-transform", "def-martingale-submartingale-and-supermartingale", "thm-taking-out-what-is-known", "thm-basic-algebra-and-order-properties-of-conditional-expectation", "lem-conditioning-a-known-variable-and-an-independent-variable", "def-axiom-of-choice"]
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

Assume AC. Let $X$ be a submartingale and $H$ a finite nonnegative predictable process. If $E|H_k(X_k-X_{k-1})|<\infty$ for every $k\ge1$, then $H\mathbin\cdot X$ is a submartingale starting at zero. In particular the conclusion holds for timewise bounded nonnegative $H$.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

[F1] The product hypothesis gives adapted integrable sums, and timewise bounds suffice. [[def-discrete-martingale-transform]].

[F2] A finite measurable factor may be taken out when its product with the integrable input is integrable. [[thm-taking-out-what-is-known]].

[F3] Conditional expectation is linear, order preserving and expectation preserving. [[thm-basic-algebra-and-order-properties-of-conditional-expectation]].

[F4] An integrable variable measurable for the conditioning sigma-algebra conditions to itself. [[lem-conditioning-a-known-variable-and-an-independent-variable]].

[F5] AC supplies the inherited conditional-expectation existence and any stated choice of versions. [[def-axiom-of-choice]].

## Proof

**Proof technique:** direct.

1.1 Set $Z=H\mathbin\cdot X$ and $d_k=E[X_k-X_{k-1}\mid\mathcal F_{k-1}]$. By the transform domain $Z$ is adapted and integrable with $Z_0=0$. Linearity and the known-variable identity give $d_k=E[X_k\mid\mathcal F_{k-1}]-X_{k-1}\ge0$ a.s. by the submartingale hypothesis [[def-martingale-submartingale-and-supermartingale]]. [given, F1, F3, F4]

2.1 Apply [F2] with input $X_k-X_{k-1}$ and finite known factor $H_k$. The input and its product are integrable, so [F2] also guarantees $H_kd_k\in L^1$ and gives $E[Z_k-Z_{k-1}\mid\mathcal F_{k-1}]=H_kd_k\ge0$ a.s. Adding the known $Z_{k-1}$ yields $E[Z_k\mid\mathcal F_{k-1}]\ge Z_{k-1}$ for every $k\ge1$. For timewise bounds, [F1] verifies the product hypothesis. AC is inherited from the conditional classes; no positivity of $X$ or boundedness of an unbounded $H$ is inferred. [given, F1, F2, F3, F4, F5, step 1.1] ∎
