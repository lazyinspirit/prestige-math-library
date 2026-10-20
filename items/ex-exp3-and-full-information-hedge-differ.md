---
id: ex-exp3-and-full-information-hedge-differ
kind: example
title: Exp3 and full-information Hedge update differently
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - alg-exp3
  - alg-hedge
  - def-bandit-importance-weighted-estimator
  - def-real-exponential-function-and-e
  - cor-exponential-reciprocal-and-positivity
  - thm-exponential-is-strictly-increasing
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Tor Lattimore and Csaba Szepesvári, Bandit Algorithms"
      url: "https://tor-lattimore.com/downloads/book/book.pdf"
      locator: "§11.3, Algorithm 9 and Eq. (11.7), and §11.5 Note 3 on full-information Hedge, PDF pp. 161–162 and 166–167 / printed pp. 152–153 and 157–158."
---

## Example

Take one round with two arms, reward vector $(1,0)$, learning rate $\eta>0$, and uniform initial probabilities. Run full-information Hedge with $\epsilon=\eta$ on losses $(0,1)$; its next distribution is $(\exp(\eta)/(\exp(\eta)+1),1/(\exp(\eta)+1))$. After the first round, Exp3 has next distribution $(1/2,1/2)$ if it sampled arm 1 and $(\exp(\eta)/(\exp(\eta)+\exp(-\eta)),\exp(-\eta)/(\exp(\eta)+\exp(-\eta)))$ if it sampled arm 2. Both outcomes differ from the full-information distribution.

## Example references

[[alg-exp3]]: the estimated rewards and exponential probability update.

[[alg-hedge]]: full-information losses, equal initial weights, and the exponential loss update.

[[def-bandit-importance-weighted-estimator]]: the observed reward and loss-based estimator formulas.

## Facts & Assumptions

**Given:** One round, two arms, reward vector $(1,0)$, Exp3 learning rate $\eta>0$, full-information Hedge learning rate $\epsilon=\eta$, uniform initial weights, and the two update rules.

[F1] [[alg-exp3]]: Exp3 samples proportionally to $\exp(\eta\widehat S_{t-1,i})$ and updates $\widehat S_{t,i}=\widehat S_{t-1,i}+\widehat X_{t,i}$.

[F2] [[alg-hedge]]: Hedge initializes both weights at one, samples from their normalized values, then updates $W_{t+1,i}=W_{t,i}\exp(-\eta\ell_{t,i})$ after observing the entire loss vector.

[F3] [[def-bandit-importance-weighted-estimator]]: $\widehat Y_{t,i}=\mathbf1\{A_t=i\}(1-X_t)/P_{t,i}$ and $\widehat X_{t,i}=1-\widehat Y_{t,i}$.

[F4] [[def-real-exponential-function-and-e]]: $\exp(0)=1$.

[F5] [[cor-exponential-reciprocal-and-positivity]]: $\exp(z)>0$ and $\exp(-z)=1/\exp(z)$ for real $z$.

[F6] [[thm-exponential-is-strictly-increasing]]: $\exp$ is strictly increasing on $\mathbb R$.

## Verification

1.1 Since $\widehat S_{0,1}=\widehat S_{0,2}=0$, Exp3 starts with probabilities $(1/2,1/2)$. If $A_1=1$, then $Y_1=0$ and $\widehat X_{1,1}=\widehat X_{1,2}=1$, so the next Exp3 distribution is uniform. If $A_1=2$, then $Y_1=1$, $P_{1,2}=1/2$, and $(\widehat Y_{1,1},\widehat Y_{1,2})=(0,2)$; hence $\widehat X_1=(1,-1)$ and the next distribution is $(\exp(\eta)/(\exp(\eta)+\exp(-\eta)),\exp(-\eta)/(\exp(\eta)+\exp(-\eta)))$. [given, F1, F3]

1.2 Full-information Hedge uses $\epsilon=\eta$ and sees losses $(0,1)$, so its next weights are $(1,\exp(-\eta))$ and its normalized distribution is $(\exp(\eta)/(\exp(\eta)+1),1/(\exp(\eta)+1))$. [given, F2, F5, algebra]

2.1 By [F4] and [F6], $\exp(\eta)>1$, so Hedge's first probability exceeds $1/2$ and differs from Exp3's first probability after $A_1=1$. Also $\exp(2\eta)>\exp(\eta)$, so the odds ratio after $A_1=2$ is $\exp(2\eta)$ for Exp3 and $\exp(\eta)$ for Hedge; these distributions differ as well. [F4, F6, step 1.1, step 1.2, algebra] ∎
