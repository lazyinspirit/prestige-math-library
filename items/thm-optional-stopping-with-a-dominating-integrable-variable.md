---
id: thm-optional-stopping-with-a-dominating-integrable-variable
kind: theorem
title: Optional stopping with a dominating integrable variable
status: published
origin: pipeline
deps: [thm-optional-sampling-for-bounded-stopping-times, thm-dominated-convergence, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Durrett, Probability: Theory and Examples, 5th ed., optional stopping criteria in §4.8", url: "https://web.archive.org/web/20240514054731if_/https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}
---

## Statement

Assume AC. Let $M$ be a martingale and $\tau$ an almost-surely finite stopping time. If $Y\in L^1$ and $|M_{\tau\wedge n}|\le Y$ almost surely for every $n$, define $M_\tau=M_{\tau(\omega)}(\omega)$ on $\{\tau<\infty\}$ and $M_\tau=0$ on $\{\tau=\infty\}$. Then $M_\tau\in L^1$ and $\mathbb EM_\tau=\mathbb EM_0$.

## Facts & Assumptions

**Given:** The hypotheses, objects, and conventions in the Statement.

[F1] [[thm-optional-sampling-for-bounded-stopping-times]] gives the expectation identity at $\tau\wedge n$.

[F2] [[thm-dominated-convergence]] passes to the finite-time limit.

[F3] [[def-axiom-of-choice]] is inherited from the martingale and optional-sampling interfaces.

## Proof

1.1 Since $\tau<\infty$ almost surely, $M_{\tau\wedge n}$ eventually equals $M_\tau$ almost surely. On the null event $\{\tau=\infty\}$ the stipulated cemetery value makes the stopped variable total; all limit assertions are almost-sure assertions. The assumed bound passes to $|M_\tau|\le Y$, proving integrability, and also gives $$|M_{\tau\wedge n}-M_\tau|\le2Y.$$ F2 therefore yields $L^1$ convergence. [F2]

2.1 F1 gives $\mathbb EM_{\tau\wedge n}=\mathbb EM_0$ for every $n$. Pass to the $L^1$ limit from step 1.1 to get $\mathbb EM_\tau=\mathbb EM_0$. AC has exactly the inherited role in F3. [F1, F3, step 1.1] ∎
