---
id: cor-weak-limits-are-unique
kind: corollary
title: Weak limits are unique
deps: ["thm-portmanteau-theorem", "thm-dynkin-pi-lambda"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: van Gaans, Theorem 4.1, definiteness argument, pp. 9–10
      url: https://pub.math.leidenuniv.nl/~gaansowvan/jancol1.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

Bounded continuous real tests determine Borel probability measures on any metric space. In particular, weak limits are unique.

## Facts & Assumptions

[F1] [[thm-portmanteau-theorem]]: For Borel probabilities $\mu_n,\mu$ on a metric space S, the following are equivalent: (i) $\mu_n\Rightarrow\mu$; (ii) integrals converge for all bounded uniformly continuous real tests; (iii) $\limsup_n\mu_n(F)\le\mu(F)$ for every closed F; (iv) $\liminf_n\mu_n(G)\ge\mu(G)$ for every open G; (v) $\mu_n(A)\to\mu(A)$ for every Borel A with $\mu(\partial A)=0$.

[F2] [[thm-dynkin-pi-lambda]]: Let $\mathcal P$ be a $\pi$-system on $X$. Then
$\lambda_X(\mathcal P)=\sigma_X(\mathcal P)$. Consequently, if $\mathcal D$ is
any lambda-system on $X$ with $\mathcal P\subseteq\mathcal D$, then
$\sigma_X(\mathcal P)\subseteq\mathcal D$.

## Proof

**Given:** The objects, hypotheses and definitions in the statement. Its conclusions are to be established below.

1.1 If $\mu$ and $\nu$ have equal integrals of every bounded continuous test, the constant sequence $\mu$ converges weakly to $\nu$. F1 gives $\mu(F)\le\nu(F)$ for every closed F. Reverse the roles to get equality. [F1]

2.1 The class of Borel sets on which the two probabilities agree contains S, is closed under complements and disjoint countable unions, and contains the closed sets by step 1.1. Closed sets form a $\pi$-system generating the Borel $\sigma$-algebra; F2 therefore gives equality on all Borel sets. If a sequence has two weak limits, uniqueness of each numerical integral limit gives the hypothesis of step 1.1, so those limits agree. [F2, step 1.1] ∎
