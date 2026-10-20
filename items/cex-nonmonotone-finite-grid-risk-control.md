---
id: cex-nonmonotone-finite-grid-risk-control
kind: counterexample
title: "A nonmonotone loss can defeat first-pass calibration"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-exchangeable-random-elements
  - alg-finite-grid-conformal-risk-control
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Anastasios N. Angelopoulos, Stephen Bates, Adam Fisch, Lihua Lei, and Tal Schuster, Conformal Risk Control, arXiv:2208.02814v4"
      url: "https://arxiv.org/pdf/2208.02814v4"
      locator: "§2.4 Proposition 1 and Appendix B, general warning that nonmonotone losses can invalidate first-pass calibration."
    - title: "Anastasios N. Angelopoulos, Rina Foygel Barber, and Stephen Bates, Theoretical Foundations of Conformal Prediction, prepublication book manuscript"
      url: "https://arxiv.org/pdf/2411.11824"
      locator: "Chapter 2 §§2.1–2.2, finite exchangeability as joint-law invariance."
    - title: "Glenn Shafer and Vladimir Vovk, A Tutorial on Conformal Prediction, Journal of Machine Learning Research 9 (2008), 371–421"
      url: "https://www.jmlr.org/papers/volume9/shafer08a/shafer08a.pdf"
      locator: "§3.1, exchangeability as permutation invariance and iid as a sufficient condition."
---

## Statement refuted

For every deterministic grid $\Lambda=\{\lambda_1<\cdots<\lambda_M\}$ with $M\ge1$, calibration size $n\ge1$, bound $B>0$, and target $\alpha\in[0,B)$, suppose a probability space carries $n+1$ exchangeable random elements $W_i=(L_i(\lambda_j))_{j=1}^M$ of the Borel space $[0,B]^M$, with $L_i(\lambda_M)\le\alpha$ almost surely for every $i$. The B-corrected first-passing rule then has expected test loss $\mathbb E[L_{n+1}(\hat\lambda)]\le\alpha$, even when the losses are not nonincreasing along the grid.

## Statement references

[[alg-finite-grid-conformal-risk-control]]: the first-passing rule and maximum-grid fallback.

[[def-exchangeable-random-elements]]: joint-law invariance under all row permutations.

[Angelopoulos et al., Conformal Risk Control, §2.4](https://arxiv.org/pdf/2208.02814v4)

## Facts & Assumptions

**Given:** The refuted assertion and the following finite model: $n=1$, $M=2$, $B=1$, $\alpha=3/4$, and $\lambda_1<\lambda_2$. Let $Z_1,Z_2$ be independent with $\mathbb P(Z_i=a)=1/10$ and $\mathbb P(Z_i=b)=9/10$. Define the losses by $L_i(\lambda_1)=0$ and $L_i(\lambda_2)=3/4$ when $Z_i=a$, and by $L_i(\lambda_1)=1$ and $L_i(\lambda_2)=3/4$ when $Z_i=b$.

[F1] Exchangeability means invariance of the joint law under every coordinate permutation. [[def-exchangeable-random-elements]]

[F2] The algorithm tests $(L_1(\lambda_j)+B)/(n+1)$ at each grid point in increasing order and returns the maximum point if no test passes. [[alg-finite-grid-conformal-risk-control]]

[A1] The two rows are independent draws from the same two-point law specified above, so their joint law is exchangeable.

[A2] The loss table has values in $[0,1]$ and endpoint losses $L_i(\lambda_2)=3/4=\alpha$; it is nonmonotone on type $a$ because $0<3/4$ as the grid index increases.

## Counterexample

1.1 By [A1] and [F1], the two loss rows are exchangeable. By [A2], their values are bounded by $B=1$, the endpoint is safe, and the family violates the required nonincreasing-loss condition on an event of probability $1/10$. [A1, A2, F1]

1.2 If the calibration row is type $a$, the first threshold is $(0+1)/2=1/2\le3/4$, so the algorithm selects $\lambda_1$. If it is type $b$, the first threshold is $(1+1)/2=1>3/4$ and the second is $(3/4+1)/2=7/8>3/4$, so the algorithm falls back to $\lambda_2$. [A2, F2, algebra]

2.1 Conditional on a type-$a$ calibration row, independence makes the expected test loss at $\lambda_1$ equal to $(1/10)0+(9/10)1=9/10$. Conditional on a type-$b$ calibration row, the selected endpoint loss is $3/4$ for either test type. [A1, A2, step 1.2, algebra]

3.1 Averaging over the calibration row gives $\mathbb E[L_2(\hat\lambda)]=(1/10)(9/10)+(9/10)(3/4)=153/200=3/4+3/200>3/4=\alpha$. Thus the asserted guarantee fails despite exchangeability, boundedness, and a safe endpoint. [A1, A2, step 2.1, algebra] ∎
