---
id: lem-summability-of-truncated-normalized-variances
kind: lemma
title: Summability of truncated normalized variances
deps: ["def-truncation-at-a-fixed-level", "lem-variance-and-covariance-identities-for-random-variables", "thm-change-of-variables-for-expectation", "thm-monotone-convergence-for-the-integral", "thm-integral-test-for-series", "lem-integer-part"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Durrett, §§2.4–2.5, pp. 76–87
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

For identically distributed integrable real $(X_n)$ and $Y_n=X_n\mathbf1_{\{|X_n|\le n\}}$, $\sum_{n\ge1}\operatorname{Var}(Y_n)/n^2\le2\mathbb E|X_1|<\infty$. No independence is required.

## Facts & Assumptions

[F1] [[lem-variance-and-covariance-identities-for-random-variables]]: Let $X,Y$ be square-integrable real random variables on one probability space.
Then
$$\operatorname{Var}(X)=\mathbb E[X^2]-\mathbb E[X]^2,$$
$$\operatorname{Cov}(X,Y)=\mathbb E[XY]-\mathbb E[X]\mathbb E[Y].$$
Moreover, covariance is symmetric and bilinear on finite linear combinations.
On finite full-power-set probability spaces these formulas reduce to the
published finite identities.

[F2] [[thm-change-of-variables-for-expectation]]: Let $X:(\Omega,\mathcal F,\mathbb P)\to(S,\Sigma)$ be a random element, let
$\mathbb P_X$ be its law, and let $g:(S,\Sigma)\to\mathbb R$ or
$g:(S,\Sigma)\to\mathbb C$ be measurable.

1. If $g\ge0$, then
   $$\mathbb E[g(X)]=\int_S g\,d\mathbb P_X.$$
2. If $g(X)$ is integrable, then $g$ is integrable with respect to
   $\mathbb P_X$ and the same formula holds:
   $$\mathbb E[g(X)]=\int_S g\,d\mathbb P_X.$$

[F3] [[lem-integer-part]]: Identify $\mathbb{Z}$ with its canonical copy inside $\mathbb{R}$, along the
embeddings $\mathbb{N} \to \mathbb{Z} \to \mathbb{Q} \to \mathbb{R}$
(lem-nat-embeds-int, lem-int-embeds-rat, lem-rat-embeds-dense,
def-integers). Then for every real $x$ there is **exactly one** integer $m$
with

$$m \;\le\; x \;<\; m + 1 .$$

It is written $\lfloor x \rfloor$ and called the **integer part**, or **floor**,
of $x$.

**Two independent ingredients are needed and neither may be dropped.** Existence
is the Archimedean property (thm-of-archimedean) together with the
well-ordering of $\mathbb{N}$ (thm-well-ordering-principle): the first says
that $x$ is caught between two integers at all, the second picks the *least*
integer above $x$. Uniqueness is the discreteness of $\mathbb{Z}$: no integer
lies strictly between $m$ and $m+1$.

This lemma is stated once here and reused. It is what turns "the nearest integer
to $x$" from a picture into an object, and the companion page's oscillator
$\psi(x) = \inf_{n \in \mathbb{Z}} |x - n|$ is computed from it in one line.

[F4] [[thm-monotone-convergence-for-the-integral]]: Let $0\le f_1\le f_2\le\cdots$ be measurable and suppose $f_n(x)\uparrow f(x)$
for every $x$. Then
$$\int f_n\,d\mu\uparrow\int f\,d\mu.$$

## Proof

**Given:** The objects, hypotheses and definitions in the statement. Its conclusions are to be established below.

1.1 The truncations satisfy $|Y_n|\le n$, so they are square-integrable. The variance identity F1 yields $\operatorname{Var}(Y_n)\le\mathbb EY_n^2$. By the common law and F2, the latter is $\mathbb E[|X_1|^2\mathbf1_{\{|X_1|\le n\}}]$. [F1, F2]

1.2 For $t>1$ put $m=\lceil t\rceil=-\lfloor-t\rfloor$, as supplied by F3. Then $m-1<t\le m$ and $\sum_{n\ge m}n^{-2}\le m^{-2}+\sum_{n>m}((n-1)^{-1}-n^{-1})=m^{-2}+m^{-1}\le2/t$. For $0\le t\le1$, the same telescoping bound from $n=1$ gives $t^2\sum_{n\ge1}n^{-2}\le2t^2\le2t$. Thus in all cases $\sum_{n\ge1}t^2\mathbf1_{\{t\le n\}}/n^2\le2t$. [F3]

2.1 Apply F4 to the increasing finite sums of the nonnegative functions in step 1.2 evaluated at $|X_1|$. Combining step 1.1 and step 1.2 gives $\sum_n\operatorname{Var}(Y_n)/n^2\le\mathbb E\sum_n |X_1|^2\mathbf1_{\{|X_1|\le n\}}/n^2\le2\mathbb E|X_1|$. [F4, step 1.2, step 1.1] ∎
