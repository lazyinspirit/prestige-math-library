---
id: ex-normal-approximation-to-binomial-probabilities
kind: example
title: Normal approximation to binomial probabilities
deps: ["cor-de-moivre-laplace-central-limit-theorem", "thm-portmanteau-theorem", "def-standard-normal-and-normal-laws", "prop-countable-subsets-of-rn-are-lebesgue-null", "def-bernoulli-and-binomial-random-variables", "def-axiom-of-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: 'Durrett, Probability: Theory and Examples, Section 3.1'
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: Aldous and Chewi, Probability Theory notes, Corollary 6.1
      url: https://www.stat.berkeley.edu/users/aldous/205B/chewi_notes.pdf
status: draft
origin: pipeline
proof_strategy: direct
---

## Example

Assume AC and fix $0<p<1$. Write $\Phi(x)=\int_{-\infty}^x e^{-y^2/2}/\sqrt{2\pi}\,dy$. For fixed real $a<b$ and $B_n\sim\operatorname{Bin}(n,p)$ for every integer $n\ge1$, $$\mathbb P\!\left(a\le\frac{B_n-np}{\sqrt{np(1-p)}}\le b\right)\longrightarrow\Phi(b)-\Phi(a).$$ For a finite integer interval, continuity correction is a numerical approximation, not an error bound supplied by this theorem.

## Facts & Assumptions

[F1] Under AC standardized binomial laws converge to N(0,1). [[cor-de-moivre-laplace-central-limit-theorem]].

[F2] Weak convergence gives probabilities of target continuity sets. [[thm-portmanteau-theorem]].

[F3] The standard normal has density exp(-x^2/2)/sqrt(2pi). [[def-standard-normal-and-normal-laws]].

[F4] Finite endpoint sets are Lebesgue null under countable choice. [[prop-countable-subsets-of-rn-are-lebesgue-null]].

## Verification

**Given:** Assume AC and fix $0<p<1$. Write $\Phi(x)=\int_{-\infty}^x e^{-y^2/2}/\sqrt{2\pi}\,dy$. For fixed real $a<b$ and $B_n\sim\operatorname{Bin}(n,p)$ for every integer $n\ge1$, $$\mathbb P\!\left(a\le\frac{B_n-np}{\sqrt{np(1-p)}}\le b\right)\longrightarrow\Phi(b)-\Phi(a).$$ For a finite integer interval, continuity correction is a numerical approximation, not an error bound supplied by this theorem.

1.1 The normal law assigns zero mass to each singleton: its bounded density integrates to zero on a Lebesgue-null singleton by [F3]–[F4]. The boundary of [a,b] is contained in the two endpoints, so it is a continuity set. Apply [F1] and the continuity-set implication of [F2] to get the displayed limit. Open, closed or half-open choices of the two fixed standardized endpoints have the same limit. If a=b the closed singleton has limiting probability zero; if a>b the event is empty. [F1, F2, F3, F4]

2.1 Take n=100,p=1/2 and the event $45\le B_{100}\le55$. Its mean is 50 and standard deviation is $\sqrt{100/4}=5$. Raw standardization gives endpoints -1 and 1, and the corresponding normal probability is $\Phi(1)-\Phi(-1)\approx0.68268949$. The half-unit cell endpoints $89/2$ and $111/2$ give corrected standardized endpoints -1.1 and 1.1, and the corrected normal probability is $\Phi(1.1)-\Phi(-1.1)\approx0.72866788$. These decimal evaluations are of the displayed normal integrals. The theorem does not bound either finite-n approximation error or prove that the correction always improves it. AC is inherited through [F1] and the normal-density and null-set construction. [step 1.1, F1, F3] ∎
