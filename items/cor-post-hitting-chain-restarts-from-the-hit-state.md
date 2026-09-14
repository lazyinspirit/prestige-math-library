---
id: cor-post-hitting-chain-restarts-from-the-hit-state
kind: corollary
title: "The post-hitting chain restarts from the hit state"
status: published
origin: pipeline
deps: [def-axiom-of-choice, thm-discrete-strong-markov-property, cor-canonical-markov-chain-on-path-space]
proof_strategy: specialization
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, Section 5.2"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
      locator: "Theorem 5.2.5 and complete proof, printed p. 283"
---

## Statement

Assume Choice. For a measurable set $D\in\mathcal E$, define its hitting time
$$\tau_D:=\inf\{n\ge0:X_n\in D\},\qquad\inf\varnothing:=\infty.$$ For every bounded measurable path functional $H$, set both sides below to zero on $\{\tau_D=\infty\}$. Then $$ \mathbb E[H(X_{\tau_D},X_{\tau_D+1},\ldots)\mid\mathcal F_{\tau_D}] =\mathbb E_{X_{\tau_D}}H\quad\text{on }\{\tau_D<\infty\}, $$
in the explicit eventwise sense of the discrete strong Markov theorem. Thus,
conditional on the information at the hit, the shifted chain has the canonical
path law started from the hit state.

## Facts & Assumptions

**Given:** Choice, a $K$-chain and a measurable target $D$.

[F1] The discrete strong Markov theorem gives the eventwise future-functional identity at every stopping time, with both sides zero at infinity. ([[thm-discrete-strong-markov-property]])

[F2] For each $x$, the canonical law $\mathbb P_x$ is the unique path-space law of the $K$-chain started from $x$. ([[cor-canonical-markov-chain-on-path-space]])

## Proof

1.1 Adaptedness gives [given] $$ \{\tau_D\le n\}=\bigcup_{k=0}^n\{X_k\in D\}\in\mathcal F_n, $$ so $\tau_D$ is a stopping time. If $D=\varnothing$, it is identically infinity; if $D=E$, it is identically zero. [given]

2.1 Apply [F1] to $\tau_D$. Its function [F1, F2, step 1.1] $h(x)=\mathbb E_xH$ is exactly expectation under the canonical restarted law in [F2]. Therefore the conditional expectation of the shifted future equals $h(X_{\tau_D})$ on the finite-hit event, with the slice-sum zero convention on its complement. Since this holds for every bounded measurable $H$, it identifies the conditional path law, not only its one-time marginals. Constants zero and one check respectively zero mass and the finite-hit indicator. Choice is used by [F1]--[F2]. [F1, F2, step 1.1] ∎

