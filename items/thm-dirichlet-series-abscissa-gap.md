---
id: thm-dirichlet-series-abscissa-gap
kind: theorem
title: "The convergence and absolute-convergence abscissae differ by at most one"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-abscissae-dirichlet-series, thm-dirichlet-series-half-plane-convergence]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Leonard Tomczak, Analytic Number Theory, Theorem 3.4"
      url: "https://math.berkeley.edu/~ltomczak/notes/Mich2022/AnaNT_Notes.pdf"
    - title: "Kiran S. Kedlaya, Notes on Analytic Number Theory, Lemma 2.2"
      url: "https://kskedlaya.org/ant/part-1-3.html"
pipeline_run: null
---

## Statement

For every Dirichlet series, its abscissae satisfy

$$\sigma_c \le \sigma_a \le \sigma_c + 1$$

in the extended real line.

## Facts & Assumptions

**Given:** A Dirichlet series $D(s)=\sum_{n \ge 1} a_n n^{-s}$ with abscissae
$\sigma_c$ and $\sigma_a$.

[L1] The two abscissae are defined by right-half-plane convergence and absolute
convergence ([[def-abscissae-dirichlet-series]]).

[L2] Convergence at one point gives convergence on the entire open half-plane to
its right ([[thm-dirichlet-series-half-plane-convergence]]).

## Proof

**Proof technique:** direct.

1.1 Absolute convergence implies ordinary convergence term by term, so every half-plane counted for $\sigma_a$ is also counted for $\sigma_c$. Therefore $\sigma_c \le \sigma_a$. [L1, given, algebra]

1.2 Let $s_0$ be any point of convergence and write $\sigma_0 := \Re s_0$. Then the terms $a_n n^{-s_0}$ tend to $0$, so they are bounded: $|a_n| \le C n^{\sigma_0}$ for some $C$. Hence for every $s$ with $\Re s > \sigma_0+1$, $$|a_n| n^{-\Re s} \le C n^{-1-\delta}$$ for some $\delta>0$, and the right-hand side is summable. Thus absolute convergence holds throughout $\Re s > \sigma_0+1$. [L2, given, algebra]

2.1 Since step 1.2 applies at every point of convergence, taking infima in [L1] gives $\sigma_a \le \sigma_c+1$. Combined with step 1.1, this is the claimed gap bound. [step 1.1, step 1.2] ∎
