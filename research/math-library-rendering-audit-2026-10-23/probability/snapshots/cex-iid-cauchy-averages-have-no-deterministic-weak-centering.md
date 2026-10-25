---
id: cex-iid-cauchy-averages-have-no-deterministic-weak-centering
title: "Cauchy averages admit no deterministic weak centering"
kind: counterexample
status: published
origin: pipeline
deps: ["thm-truncated-centering-criterion-for-an-iid-weak-law", "cor-countable-independent-copies-exist", "def-law-or-distribution-of-a-random-element", "thm-probability-law-and-distribution-function-correspondence"]
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Example 2.2.15, p. 65"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
proof_strategy: "The density integrates to one by arctangent; elementary integral bounds give n P(|X|>n)->2/pi. Apply the necessity theorem without characteristic functions or stable-law identities."
---

## Statement refuted

Assume countable choice and dependent choice. For IID real variables with density $f(x)=1/[\pi(1+x^2)]$ on $\mathbb R$, there is no deterministic real sequence $(\mu_n)$ for which $S_n/n-\mu_n\to0$ in probability, where $S_n=\sum_{k=1}^nX_k$. Thus IID alone cannot guarantee a weak law even with varying deterministic centering.

## Facts & Assumptions

[F1] [[thm-truncated-centering-criterion-for-an-iid-weak-law]]: For IID real random variables $(X_n)_{n\ge1}$ and $S_n=\sum_{k=1}^nX_k$, there exist deterministic real constants $(\mu_n)$ with $S_n/n-\mu_n\to0$ in probability if and only if $n\mathbb P(|X_1|>n)\longrightarrow0.$ When this condition holds, $\mu_n=\mathbb E[X_1\mathbf1_{\{|X_1|\le n\}}]$ works. Neither existence of an untruncated mean nor convergence of $(\mu_n)$ is asserted.

[F2] [[cor-countable-independent-copies-exist]]: Assume countable choice and dependent choice. Every probability measure $\nu$ on $(S,\Sigma)$ is the common law of a countable independent family of $S$-valued random elements.

[F3] [[def-law-or-distribution-of-a-random-element]]: Let $X:(\Omega,\mathcal F,\mathbb P)\to(S,\Sigma)$ be a random element. Its **law** or **distribution** is the set function $\mathbb P_X:\Sigma\to[0,+\infty],\qquad \mathbb P_X(B):=\mathbb P(X^{-1}(B)).$ Thus the law of $X$ records the probability of each measurable target set by pulling it back to an event in the original probability space.

[F4] [[thm-probability-law-and-distribution-function-correspondence]]: Assume the Axiom of Countable Choice. 1. Let $X$ be a real random variable, let $\mathbb P_X$ be its law, and let $F_X(x)=\mathbb P(X\le x)$. Then $F_X$ is nondecreasing and right-continuous, satisfies $\lim_{x\to-\infty}F_X(x)=0,\qquad \lim_{x\to+\infty}F_X(x)=1,$ and obeys $\mathbb P_X((a,b])=F_X(b)-F_X(a)\qquad(a<b).$ 2. Conversely, if $F:\mathbb R\to\mathbb R$ is nondecreasing and right-continuous with $\lim_{x\to-\infty}F(x)=0,\qquad \lim_{x\to+\infty}F(x)=1,$ then there is a unique Borel probability measure $\mu$ on $\mathbb R$ such that $\mu((a,b])=F(b)-F(a)\qquad(a<b),$ equivalently $F(x)=\mu((-\infty,x])\qquad(x\in\mathbb R).$

## Counterexample

**Given:** The construction and assumptions above.

1.1 The nonnegative density has total integral $[\arctan x/\pi]_{-\infty}^{\infty}=1$ and $F(x)=1/2+\arctan(x)/\pi$ is nondecreasing and continuous with limits zero and one. The distribution-function correspondence therefore supplies its Borel probability law; the fundamental theorem of calculus identifies its density as $f$. Under countable choice and dependent choice, construct IID copies with that law. Symmetry of the density gives $\mathbb P(|X_1|>n)=(2/\pi)\int_n^\infty(1+x^2)^{-1}\,dx$. [F3, F2, given, algebra, F4]

2.1 For $x\ge n\ge1$, $x^{-2}/(1+n^{-2})\le(1+x^2)^{-1}\le x^{-2}$. Integrating and multiplying by $n$ gives $2/[\pi(1+n^{-2})]\le n\mathbb P(|X_1|>n)\le2/\pi$. Thus this tail quantity tends to $2/\pi$, not zero. Necessity in the truncated-centering criterion rules out every deterministic centering sequence. [F1, step 1.1, algebra] ∎
