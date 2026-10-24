---
id: ex-jensen-for-logarithm-and-exponential
kind: example
title: "Jensen for logarithm and exponential"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-jensen-inequality-for-expectation]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., Section 1.6.1"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
---

## Example

Let $X$ be a positive integrable random variable such that $\log X$ is
integrable.

1. Applying Jensen to the concave function $\log$ yields
   $$\mathbb E[\log X]\le\log \mathbb E[X],$$
   equivalently
   $$\exp(\mathbb E[\log X])\le\mathbb E[X].$$
2. If $Y$ is any integrable real random variable with $\mathbb E[e^Y]<\infty$,
   then Jensen applied to the convex function $e^t$ gives
   $$e^{\mathbb E[Y]}\le\mathbb E[e^Y].$$

For a two-point law with $\mathbb P(X=a)=p$ and $\mathbb P(X=b)=1-p$,
$a,b>0$, the first inequality is the weighted arithmetic-geometric mean
inequality
$$a^pb^{1-p}\le pa+(1-p)b.$$

## Facts & Assumptions

**Given:** A positive integrable random variable $X$ such that $\log X$ is integrable, and an integrable real random variable $Y$ with finite exponential moment.

[L1] Jensen's inequality holds for expectation under the stated integrability hypotheses ([[thm-jensen-inequality-for-expectation]]).

## Verification

**Proof technique:** direct.

1.1 Apply [L1] to the convex function $t\mapsto e^t$ and to $Y$. This gives $$e^{\mathbb E[Y]}\le\mathbb E[e^Y].$$ [L1]

1.2 Applying the same theorem to $Z=\log X$ and the convex function $t\mapsto e^t$ gives $$e^{\mathbb E[\log X]}\le\mathbb E[e^{\log X}]=\mathbb E[X],$$ which is equivalent to $\mathbb E[\log X]\le\log\mathbb E[X]$. [L1, algebra]

2.1 For the two-point law, step 1.2 becomes $$e^{p\log a+(1-p)\log b}\le pa+(1-p)b,$$ that is, $$a^pb^{1-p}\le pa+(1-p)b.$$ [step 1.2, algebra]

3.1 Steps 1.1, 1.2, and 2.1 give the exponential-moment and weighted AM-GM forms of Jensen. [step 1.1, step 1.2, step 2.1] ∎
