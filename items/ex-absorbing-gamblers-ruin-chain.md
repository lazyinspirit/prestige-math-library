---
id: ex-absorbing-gamblers-ruin-chain
kind: example
title: "Absorbing gambler's-ruin chain"
status: draft
origin: pipeline
deps: [def-axiom-of-choice, def-killed-and-absorbed-transition-kernels, lem-killed-and-absorbed-kernels-are-probability-kernels, cor-post-hitting-chain-restarts-from-the-hit-state]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Levin, Peres, Wilmer, Markov Chains and Mixing Times, Section 2.1"
      url: "https://pages.uoregon.edu/dlevin/MARKOV/markovmixing.pdf"
      locator: "Gambler's ruin construction and absorbing endpoints, Section 2.1, printed pp. 21-22"
---

## Statement

Assume Choice. Fix $N\ge1$ and $p\in[0,1]$, put $q=1-p$, and take
$S=\{0,1,\ldots,N\}$. The gambler's-ruin transition matrix is
$$ P(0,0)=P(N,N)=1, \qquad P(x,x+1)=p,\quad P(x,x-1)=q\quad(0<x<N), $$
with all other entries zero. It is an absorbed kernel on
$D=\{0,N\}$, and first entrance into $D$ is a hitting time. After a finite hit,
the chain restarts at—and remains at—the boundary point hit.

## Facts & Assumptions

**Given:** $N,p,q,S,D$ as displayed and a chain with this transition matrix.

[F1] Absorption on $D$ replaces every row at $x\in D$ by $\delta_x$ and leaves the rows on $D^c$ unchanged. ([[def-killed-and-absorbed-transition-kernels]])

[F2] The absorbed construction is a probability kernel. ([[lem-killed-and-absorbed-kernels-are-probability-kernels]])

[F3] At a measurable hitting time, the conditional future path law is the canonical chain law started from the hit state. ([[cor-post-hitting-chain-restarts-from-the-hit-state]])

## Verification

1.1 For $0<x<N$, the only row masses are $p$ and $q$, which are nonnegative and [F1, F2] sum to one. At $0$ and $N$ the rows are the corresponding Dirac masses. Thus these rows are exactly [F1] applied to any base kernel having the displayed interior transitions, and [F2] verifies the kernel. When $N=1$ there are no interior rows; when $p=0$ or $p=1$ the interior motion is deterministic. [F1, F2]

1.2 Define [given] $$\tau_D=\inf\{n\ge0:X_n\in\{0,N\}\}.$$ Then $\{\tau_D\le n\}=\bigcup_{k=0}^n\{X_k\in D\}\in\mathcal F_n$, so it is a hitting time. If $X_0\in D$, then $\tau_D=0$; otherwise it may be infinite in the general eventwise formulation. [given]

2.1 By [F3], on $\{\tau_D<\infty\}$ the conditional future is the chain started [F3, step 1.1, step 1.2] from $X_{\tau_D}$. Step 1.1 gives $P(X_{\tau_D},X_{\tau_D})=1$, so every subsequent coordinate equals the same boundary state. Constants zero and one give respectively zero and the finite-hit event in the eventwise formula. Choice is used only through [F3]. [F3, step 1.1, step 1.2] ∎
