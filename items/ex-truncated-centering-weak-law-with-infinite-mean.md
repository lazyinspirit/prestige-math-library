---
id: ex-truncated-centering-weak-law-with-infinite-mean
title: "An infinite-mean law requiring diverging centering"
kind: example
status: draft
origin: pipeline
deps: ["thm-truncated-centering-criterion-for-an-iid-weak-law", "cor-countable-independent-copies-exist", "cor-layer-cake-formulas-for-random-variables", "thm-probability-law-and-distribution-function-correspondence"]
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Example 4.7, pp. 3\u20134, alpha=1 with endpoint correction"
      url: https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes4.pdf
proof_strategy: "Verify the distribution, integrate the survival, and use E[X1_{X<=n}]=integral_0^n P(X>t)dt-nP(X>n). Retain the atom correction omitted in the source displayed truncated integral; the asymptotic is mu_n~log log n."
---

## Example

Assume countable choice and dependent choice. Let $X\ge e$ have survival function $\mathbb P(X>x)=1/(x\log x)$ for $x\ge e$, with an atom of mass $1-1/e$ at $e$. For IID copies $(X_k)$, the untruncated mean is infinite but
$$S_n/n-\mu_n\longrightarrow0\quad\text{in probability},\qquad \mu_n=e+\log\log n-\frac1{\log n}\quad(n\ge e).$$
Here $\mu_n=\mathbb E[X\mathbf1_{\{X\le n\}}]$; for integer $n<e$ set $\mu_n=0$. More generally, the survival family $1/[x(\log x)^\alpha]$ for $x\ge e$, $\alpha\ge0$, has infinite second moment for every $\alpha$, finite first moment exactly for $\alpha>1$, and admits deterministic weak-law centering exactly for $\alpha>0$.

## Facts & Assumptions

[F1] [[thm-truncated-centering-criterion-for-an-iid-weak-law]]: For IID real random variables $(X_n)_{n\ge1}$ and $S_n=\sum_{k=1}^nX_k$, there exist deterministic real constants $(\mu_n)$ with $S_n/n-\mu_n\to0$ in probability if and only if $n\mathbb P(|X_1|>n)\longrightarrow0.$ When this condition holds, $\mu_n=\mathbb E[X_1\mathbf1_{\{|X_1|\le n\}}]$ works. Neither existence of an untruncated mean nor convergence of $(\mu_n)$ is asserted.

[F2] [[cor-countable-independent-copies-exist]]: Assume countable choice and dependent choice. Every probability measure $\nu$ on $(S,\Sigma)$ is the common law of a countable independent family of $S$-valued random elements.

[F3] [[cor-layer-cake-formulas-for-random-variables]]: Let $(\Omega,\mathcal F,\mathbb P)$ be a probability space. 1. If $X:\Omega\to[0,+\infty]$ is measurable, then $\mathbb E[X]=\int_0^\infty \mathbb P(X>t)\,dt,$ where the right-hand side may be $+\infty$. 2. If $X$ is an integrable real random variable, then $\mathbb E[X]=\int_0^\infty \mathbb P(X>t)\,dt-\int_0^\infty \mathbb P(X<-t)\,dt.$

[F4] [[thm-probability-law-and-distribution-function-correspondence]]: Assume the Axiom of Countable Choice. 1. Let $X$ be a real random variable, let $\mathbb P_X$ be its law, and let $F_X(x)=\mathbb P(X\le x)$. Then $F_X$ is nondecreasing and right-continuous, satisfies $\lim_{x\to-\infty}F_X(x)=0,\qquad \lim_{x\to+\infty}F_X(x)=1,$ and obeys $\mathbb P_X((a,b])=F_X(b)-F_X(a)\qquad(a<b).$ 2. Conversely, if $F:\mathbb R\to\mathbb R$ is nondecreasing and right-continuous with $\lim_{x\to-\infty}F(x)=0,\qquad \lim_{x\to+\infty}F(x)=1,$ then there is a unique Borel probability measure $\mu$ on $\mathbb R$ such that $\mu((a,b])=F(b)-F(a)\qquad(a<b),$ equivalently $F(x)=\mu((-\infty,x])\qquad(x\in\mathbb R).$

## Verification

**Given:** The construction and assumptions above.

1.1 Define $F(x)=0$ for $x<e$ and $F(x)=1-1/[x(\log x)^\alpha]$ for $x\ge e$, where $\alpha\ge0$. It is nondecreasing and right-continuous with limits zero and one at the two infinities. Its jump at $e$ is $1-1/e$. The distribution-function theorem constructs its Borel probability law (using countable choice); under countable choice and dependent choice the countable-copy result constructs IID variables with it. [F4, F2, given, algebra]

2.1 Layer cake gives $\mathbb EX=e+\int_e^\infty[x(\log x)^\alpha]^{-1}\,dx=e+\int_1^\infty u^{-\alpha}\,du$. This is finite exactly for $\alpha>1$, when it equals $e+1/(\alpha-1)$. Applying layer cake to $X^2$ and substituting $t=x^2$ gives $\mathbb EX^2=e^2+2\int_e^\infty(\log x)^{-\alpha}\,dx=\infty$: eventually $(\log x)^\alpha\le x$, so the last integrand dominates $1/x$. The comparison follows from $u^\alpha\le e^u$ for large $u$, for example by an exponential-series term of integer degree greater than $\alpha$. [F3, step 1.1, algebra]

2.2 For $n\ge e$ the tail quantity is $n\mathbb P(X>n)=(\log n)^{-\alpha}$. It tends to zero exactly for $\alpha>0$, whereas for $\alpha=0$ it equals one. Both directions of the truncated-centering criterion therefore give exactly the asserted centering range, even in the infinite-mean cases $0<\alpha\le1$. [F1, step 1.1, algebra]

3.1 For $\alpha=1$ use the pointwise identity $\min(X,n)=X\mathbf1_{\{X\le n\}}+n\mathbf1_{\{X>n\}}$. Layer cake for the bounded minimum gives $\mu_n=\int_0^n\mathbb P(X>t)\,dt-n\mathbb P(X>n)=e+\log\log n-1/\log n$ for real $n\ge e$. At $n=e$ this is $e-1$, exactly the contribution of the atom; below $e$ the zero truncation is zero. These finite centers work by the preceding step, although $\mathbb EX=\infty$ and $\mu_n\sim\log\log n\to\infty$. [F3, step 2.1, step 2.2, algebra] ∎
