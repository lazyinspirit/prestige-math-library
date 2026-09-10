---
id: ex-nonidentical-strong-law-under-summable-normalized-variances
kind: example
title: Nonidentical strong law under summable normalized variances
deps: ["cor-countable-independent-copies-exist", "thm-kolmogorov-strong-law-under-summable-normalized-variances", "def-probability-measure", "def-expectation-of-a-nonnegative-or-integrable-random-variable", "lem-variance-and-covariance-identities-for-random-variables", "def-real-power", "thm-real-power-laws", "thm-p-series-real-exponents", "def-axiom-of-choice", "def-countable-choice", "def-dependent-choice", "thm-recursion"]
verification:
  audited: 2026-09-10
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
status: published
origin: pipeline
proof_strategy: direct
---

## Example

Assume AC. Let $(\epsilon_n)$ be independent copies of $P(\epsilon=1)=P(\epsilon=-1)=1/2$, and set $X_n=n^{1/4}\epsilon_n$. Then $S_n/n\to0$ almost surely although $\operatorname{Var}(X_n)=\sqrt n$ is unbounded.

## Facts & Assumptions

[F1] [[lem-variance-and-covariance-identities-for-random-variables]]: Let $X,Y$ be square-integrable real random variables on one probability space.
Then
$$\operatorname{Var}(X)=\mathbb E[X^2]-\mathbb E[X]^2,$$
$$\operatorname{Cov}(X,Y)=\mathbb E[XY]-\mathbb E[X]\mathbb E[Y].$$
Moreover, covariance is symmetric and bilinear on finite linear combinations.
On finite full-power-set probability spaces these formulas reduce to the
published finite identities.

[F2] [[thm-recursion]]: Let $(N,0,\sigma)$ be a Peano system (def-peano-system), in particular the natural numbers $\mathbb{N}$ (def-natural-numbers). For any set $A$, any element $a \in A$, and any function $f : A \to A$, there is a unique function $g : N \to A$ such that $g(0) = a$ and $g(\sigma(n)) = f(g(n))$ for all $n \in N$.

[F3] [[cor-countable-independent-copies-exist]]: Assume countable choice and dependent choice. Every probability measure $\nu$
on $(S,\Sigma)$ is the common law of a countable independent family of
$S$-valued random elements.

[F4] [[thm-real-power-laws]]: For $a,b>0$ and $r,s\in\mathbb R$,
$$a^{r+s}=a^ra^s,\qquad (ab)^r=a^rb^r,\qquad (a/b)^r=a^r/b^r,\qquad (a^r)^s=a^{rs}.$$

[F5] [[thm-p-series-real-exponents]]: For every real $p$,
$$\sum_{k\ge1}\frac1{k^p}\text{ converges}\quad\Longleftrightarrow\quad p>1.$$

[F6] [[thm-kolmogorov-strong-law-under-summable-normalized-variances]]: Let $(X_n)_{n\ge1}$ be independent square-integrable real random variables. Let $0<b_n$ be deterministic and nondecreasing with $b_n\to\infty$. If
$$\sum_{n\ge1}\frac{\operatorname{Var}(X_n)}{b_n^2}<\infty,$$
then
$$\frac1{b_n}\sum_{k=1}^n(X_k-\mathbb EX_k)\longrightarrow0\quad\text{almost surely}.$$
In particular, for IID centered square-integrable variables and any $\varepsilon>0$, $S_n/[\sqrt n(\log n)^{1/2+\varepsilon}]\to0$ almost surely (the displayed normalization is used for $n\ge2$).

## Verification

**Given:** The objects, hypotheses and definitions in the statement. Its conclusions are to be established below.

1.1 The two equally weighted atoms define a probability law, with $\mathbb E\epsilon=(-1+1)/2=0$ and $\mathbb E\epsilon^2=(1+1)/2=1$. F1 gives variance one. [F1]

1.2 AC supplies a choice function on every countable nonempty family, hence CC. For a serial relation choose a successor function and iterate it by F2, giving DC. These are the hypotheses of F3, so the independent copies exist. [F2, F3]

2.1 Scaling each coordinate preserves independence, since the preimage of a Borel set depends only on that coordinate. F4 gives $\mathbb EX_n=0$, $\mathbb EX_n^2=n^{1/2}$ and $\operatorname{Var}(X_n)/n^2=n^{-3/2}$. By F5 the variance series is finite. Apply F6 with $b_n$=n to obtain the stated limit. The variances tend to infinity because their squares equal n. [F4, F5, F6] ∎
