---
id: lem-smc-backward-operator-oscillation-bound
kind: lemma
title: "Uniform SMC backward-operator contraction controls oscillation"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 5
deps:
  - def-axiom-of-choice
  - def-smc-clt-function-classes-and-variance-recursions
proof_strategy: direct
axiom_use: "AC is inherited through the SMC target/proposal flow. The oscillation argument adds no choice."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Nicolas Chopin, Central Limit Theorem for Sequential Monte Carlo Methods and its Application to Bayesian Inference, §3.3 and Appendix A.4"
      url: "https://arxiv.org/pdf/math/0508594"
    - title: "Arnaud Doucet and Adam M. Johansen, A Tutorial on Particle Filtering and Smoothing: Fifteen Years Later, §3.6"
      url: "https://www.stats.ox.ac.uk/~doucet/doucet_johansen_tutorialPF2011.pdf"
---

## Statement

Let $E_s$ be the forward operators of [[def-smc-clt-function-classes-and-variance-recursions]], and for bounded real $h$ put $\operatorname{osc}(h)=\sup h-\inf h$. Suppose there is one $\beta\in[0,1)$ such that
$$\operatorname{osc}(E_s h)\le\beta\operatorname{osc}(h)$$
for every $s$ and every bounded real $h$ with $\pi_s(h)=0$, with bounded measurable versions of $E_sh$. The stronger condition on every bounded $h$ is sufficient but is not necessary here. For bounded $\phi:\Theta_t\to\mathbb R$, put $\Delta\phi=\operatorname{osc}(\phi)$ and $\bar\phi=\phi-\pi_t(\phi)$. Then for every $0\le k\le t$,
$$\bigl\lVert E_{k+1:t}\bar\phi\bigr\rVert_\infty\le\beta^{t-k}\Delta\phi,$$
with $\beta^0=1$ and $E_{t+1:t}$ the identity. This condition concerns the actual SMC backward operators; it is not implied merely by mixing ratios of the proposal densities.

## Facts & Assumptions

**Given:** The SMC flow and operators in the Statement, bounded real $\phi$, and the uniform operator contraction hypothesis.

[A1] [[def-axiom-of-choice]]: AC is inherited through the finite-horizon path and Radon–Nikodym construction.

[F1] [[def-smc-clt-function-classes-and-variance-recursions]]: $E_s h=k_s(\upsilon_s h)$, $\widetilde\pi_s=\pi_{s-1}k_s$, and $\widetilde\pi_s(\upsilon_s h)=\pi_s(h)$.

## Proof

**Given:** The hypotheses in the Statement.

1.1 For any bounded measurable $h$ and $s\ge1$, [F1] gives $\pi_{s-1}(E_sh)=\pi_{s-1}(k_s(\upsilon_sh))=\widetilde\pi_s(\upsilon_sh)=\pi_s(h).$ Iterating this identity yields $\pi_k(E_{k+1:t}\bar\phi)=\pi_t(\bar\phi)=0$ for every $k<t$; for $k=t$ the identity operator also gives mean zero. [A1, F1, given]

2.1 Repeated application of the assumed oscillation contraction gives $\operatorname{osc}(E_{k+1:t}\bar\phi)\le\beta^{t-k}\operatorname{osc}(\bar\phi)=\beta^{t-k}\Delta\phi$. By step 1.1 its $\pi_k$-mean is zero, so its infimum is at most zero and its supremum at least zero; hence its sup norm is at most its oscillation. For $k=t$ this is $\|\bar\phi\|_\infty\le\Delta\phi$. [F1, step 1.1, given] ∎
