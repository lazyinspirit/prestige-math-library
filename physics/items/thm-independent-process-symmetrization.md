---
id: thm-independent-process-symmetrization
kind: theorem
title: "Independent-process symmetrization for convex moments"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 1
deps:
  - def-empirical-process-and-rademacher-process
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-identically-distributed-and-iid-random-variables
  - def-independent-random-elements
  - thm-independent-random-elements-have-product-joint-law
  - thm-jensen-inequality-for-expectation
  - thm-monotone-convergence-for-the-integral
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - thm-composition-with-borel-functions-preserves-measurability
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "David Pollard, Empirical Processes: Theory and Applications, Chapter 2, Theorem 2.2"
      url: "http://www.stat.yale.edu/~pollard/Books/Iowa/Iowa-notes.pdf"
    - title: "Jon A. Wellner, Empirical Processes: Theory and Applications, Chapter 1, Lemma 5.1"
      url: "https://faculty.washington.edu/jonw/RESEARCH/TALKS/Delft/emp-proc-delft-big.pdf"
    - title: "David Pollard, Probability Tools, Tricks, and Miracles, 2026 manuscript, Section 13.2"
      url: "http://www.stat.yale.edu/~pollard/Books/Pttm/Pttm26-06-22.pdf"
---

## Statement

Let $n\ge1$, let $Z_1,\ldots,Z_n$ be IID observations with law $P$, and let $Z_1',\ldots,Z_n'$ be an independent IID copy. Let $\sigma_1,\ldots,\sigma_n$ be independent uniform signs, independent of both samples. Let $\mathcal F$ be a nonempty countable class of measurable $P$-integrable real functions. Assume the two suprema below are finite almost surely. If $\Phi:[0,\infty)\to[0,\infty)$ is finite, convex, and nondecreasing, then

$$\mathbb E\Phi\!\left(\sup_{f\in\mathcal F}\left|\sum_{i=1}^n(f(Z_i)-Pf)\right|\right)\le \mathbb E\Phi\!\left(2\sup_{f\in\mathcal F}\left|\sum_{i=1}^n\sigma_i f(Z_i)\right|\right).$$

The same statement holds for an uncountable class when a specified countable subclass gives the same three displayed suprema almost surely for the data, copy, and signs. This is an expectation inequality only; a tail form requires separate assumptions.

## Facts & Assumptions

**Given:** IID observations, an independent IID copy and independent signs, a nonempty countable measurable class of integrable functions, finite displayed suprema, and a finite convex nondecreasing $\Phi\ge0$.

[F1] $Pf=\mathbb E f(Z_i)$, $P_nf=n^{-1}\sum_i f(Z_i)$, and $\mathbb G_n(f)=\sqrt n(P_nf-Pf)$; the general centered independent-process sum is $\sum_i(X_i(t)-\mathbb E X_i(t))$ ([[def-empirical-process-and-rademacher-process]]).

[F2] Independence of random elements means independence of their generated sigma-algebras, and finite independent random elements have product joint law ([[def-independent-random-elements]], [[thm-independent-random-elements-have-product-joint-law]]).

[F3] For an integrable real random variable $X$ and a convex $\Phi$ with $\Phi(X)$ integrable or nonnegative, $\Phi(\mathbb E X)\le\mathbb E\Phi(X)$ ([[thm-jensen-inequality-for-expectation]]).

[F4] Tonelli's theorem permits iterated integration of nonnegative measurable functions on product measure spaces ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]).

[F5] Increasing nonnegative measurable functions pass to the limit under integration ([[thm-monotone-convergence-for-the-integral]]).

[F6] IID means independent and identically distributed; each observation and its copy therefore have the same law $P$ ([[def-identically-distributed-and-iid-random-variables]]).

[F7] The finite product measure is determined by its rectangle formula, so a coordinate permutation that preserves those rectangle probabilities preserves the product law ([[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]).

[F8] For finite subclasses, coordinate lifts, sums, absolute values, maxima, and their compositions with a Borel map are measurable. Since $\Phi$ is nondecreasing, each strict upper level set is an upper interval and hence Borel; composition with $\Phi$ therefore preserves measurability ([[def-product-sigma-algebra-and-finite-product-sigma-algebras]], [[thm-arithmetic-and-lattice-operations-preserve-measurability]], [[thm-composition-with-borel-functions-preserves-measurability]]).

## Proof

**Given:** The objects and hypotheses of the statement.

1.1 First let $\mathcal F_0\subset\mathcal F$ be finite. For fixed observed values $z_1,\ldots,z_n$, write $D_f:=\sum_i(f(z_i)-f(Z_i'))$. Then $\sum_i(f(z_i)-Pf)=\mathbb E_{Z'}D_f$. For each $f$, $|\mathbb E_{Z'}D_f|\le\mathbb E_{Z'}|D_f|\le\mathbb E_{Z'}\max_{g\in\mathcal F_0}|D_g|$; taking the finite maximum and applying monotonicity of $\Phi$ and Jensen [F3] gives $\Phi(\max_f|\sum_i(f(z_i)-Pf)|)\le\mathbb E_{Z'}\Phi(\max_f|D_f|)$. By [F8], these finite statistics and their $\Phi$-compositions are measurable, so Tonelli [F4] applies when integrating over observations and copy. It gives $\mathbb E\Phi(\max_f|\sum_i(f(Z_i)-Pf)|)\le\mathbb E_{Z,Z'}\Phi(\max_f|\sum_i(f(Z_i)-f(Z_i'))|)$. [F1, F3, F4, F8, given]

2.1 By [F6], each $Z_i$ and $Z_i'$ has law $P$; by [F2] and the independent-copy hypothesis, all $2n$ coordinates have product law. [F7] makes this product law invariant under swapping the two coordinates in any selected pair. Thus for every fixed sign vector $\sigma$, the signed difference process $\sum_i\sigma_i(f(Z_i)-f(Z_i'))$ has the same law as the unsigned difference process. Averaging this equality over the finite sign space leaves the right-hand expectation in step 1.1 unchanged when $f(Z_i)-f(Z_i')$ is replaced by $\sigma_i(f(Z_i)-f(Z_i'))$. [F2, F6, F7, step 1.1]

3.1 For every outcome, put $A:=\max_f|\sum_i\sigma_i f(Z_i)|$ and $B:=\max_f|\sum_i\sigma_i f(Z_i')|$. By [F8] these statistics and their $\Phi$-compositions are measurable. The triangle inequality gives $\max_f|\sum_i\sigma_i(f(Z_i)-f(Z_i'))|\le A+B$. Monotonicity and convexity yield $\Phi(A+B)\le\tfrac12\Phi(2A)+\tfrac12\Phi(2B)$; since $A$ and $B$ have the same distribution, the resulting expectation is $\mathbb E\Phi(2A)$. Combining with steps 1.1 and 2.1 proves the desired inequality for finite $\mathcal F_0$. [F8, given, step 1.1, step 2.1, algebra]

4.1 Enumerate the countable class and let $\mathcal F_k$ be its first $k$ members. The finite-class inequality applies to every $\mathcal F_k$, and its suprema increase to those over $\mathcal F$. To justify the limit, fix $c>0$ and $b>c$. For $c<x<b$, monotonicity and convexity give $0\le\Phi(x)-\Phi(c)\le\frac{x-c}{b-c}(\Phi(b)-\Phi(c))$; for $0<x<c$, writing $c=\frac{b-c}{b-x}x+\frac{c-x}{b-x}b$ gives $0\le\Phi(c)-\Phi(x)\le\frac{c-x}{b-c}(\Phi(b)-\Phi(c))$. Thus $\Phi$ is continuous on $(0,\infty)$. At zero, for any $a>0$ and $t\downarrow0$, monotonicity and convexity give $\Phi(0)\le\Phi(ta)\le(1-t)\Phi(0)+t\Phi(a)$, so it is right-continuous there too. By [F8], the finite-class compositions are measurable; [F5] now passes both nonnegative expectations to the limit. A countable subclass giving the same suprema proves the stated separable-version extension. [F1, F5, F8, step 3.1, given] ∎
