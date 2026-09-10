---
id: ex-uniform-laws-on-expanding-finite-grids-converge-to-uniform-zero-one
kind: example
title: Uniform laws on expanding finite grids converge to uniform zero one
deps: ["def-weak-convergence-of-borel-probability-measures", "thm-heine-cantor-r", "thm-lebesgue-measure-of-a-box-of-every-kind", "def-axiom-of-choice", "def-countable-choice", "prop-the-nonnegative-integral-agrees-with-the-simple-integral", "thm-linearity-of-the-lebesgue-integral-on-l-one", "thm-integral-triangle-inequality"]
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Durrett, §3.2.1, weak convergence examples; elementary Riemann sum specialization
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
status: published
origin: pipeline
proof_strategy: direct
---

## Example

Assume AC. For $n\ge1$, the laws $\mu_n=n^{-1}\sum_{k=1}^n\delta_{k/n}$ converge weakly to Lebesgue probability on [0,1].

## Facts & Assumptions

[F1] [[def-countable-choice]]: The **Axiom of Countable Choice**, written $\mathrm{AC}_\omega$, is the following
statement.

> For every family $(X_n)_{n \in \mathbb{N}}$ of nonempty sets indexed by
> $\mathbb{N}$ there is a function $f$ with domain $\mathbb{N}$ such that
> $f(n) \in X_n$ for every $n \in \mathbb{N}$.

Equivalently, in the vocabulary of def-choice-function: every at most
countable family of nonempty sets (def-countable) has a choice function.

[F2] [[thm-lebesgue-measure-of-a-box-of-every-kind]]: Let $n \ge 1$, **assume the Axiom of Countable Choice**
(def-countable-choice), and let $a_i \le b_i$ be reals for $i<n$. Write

$$R^{\circ} := \{\, x \in \mathbb{R}^n : a_i < x_i < b_i \text{ for every } i<n \,\}, \qquad \overline{R} := [a,b] = \{\, x \in \mathbb{R}^n : a_i \le x_i \le b_i \text{ for every } i<n \,\}$$

(def-multidimensional-rectangle-and-volume). Then $R^{\circ}$ is open and
$\overline{R}$ is closed, so both are Borel and Lebesgue measurable, and **every**
set $R$ with $R^{\circ} \subseteq R \subseteq \overline{R}$ is Lebesgue
measurable with

$$\lambda_n(R) \;=\; \prod_{i<n}(b_i-a_i).$$

In particular this covers the four one-dimensional face conventions in each
coordinate — the open box, the closed box $[a,b]$, the half-open box
$B(a,b) = \prod_{i<n}(a_i,b_i]$ of def-half-open-box, and every mixture of
them, in any combination of coordinates — and it gives measure $0$ to all of them
whenever $a_i = b_i$ for some $i<n$. For a half-open box with infinite
parameters the value is already
$\lambda_n(B) = \operatorname{vol}(B)$ (thm-lebesgue-measure-is-a-complete-measure).

[F3] [[prop-the-nonnegative-integral-agrees-with-the-simple-integral]]: If $s$ is a nonnegative simple measurable function, then its nonnegative
Lebesgue integral equals its simple integral:
$$\int s\,d\mu=\int_{\mathrm{simple}} s\,d\mu.$$

[F4] [[thm-heine-cantor-r]]: Let $K \subseteq \mathbb{R}$ be compact (def-open-cover-r) and let
$f : K \to \mathbb{R}$ be continuous on $K$ (def-continuity-real). Then $f$
is uniformly continuous on $K$ (def-uniform-continuity-real).

**This theorem is stated twice in this library, on purpose.** Its metric-space
twin is thm-heine-cantor-metric, proved there from the cover machinery of
metric spaces; the proof below is $\mathbb{R}$-native and runs through
thm-compact-iff-sequentially-compact-r, which is order-based. That the two
statements are the same statement in two vocabularies is
lem-real-and-metric-notions-agree, clauses 1, 2 and 5, immediately above.

**The choice cost, named.** The proof invokes the axiom of countable choice
(def-countable-choice) exactly once, at step 3.1, to select one bad pair of
points from each of countably many nonempty sets. The backward implication of
thm-compact-iff-sequentially-compact-r also spends countable choice, and
that item names its own uses; the forward implication used here, from compact to
sequentially compact, does not. No claim is made that the axiom is necessary
for either.

[F5] [[thm-linearity-of-the-lebesgue-integral-on-l-one]]: The class $L^1(\mu)$ is a complex vector space, and the Lebesgue integral is
complex-linear on it:
$$\int (\alpha f+\beta g)\,d\mu=\alpha\int f\,d\mu+\beta\int g\,d\mu \qquad(\alpha,\beta\in\mathbb C,\ f,g\in L^1(\mu)).$$

[F6] [[thm-integral-triangle-inequality]]: If $f\in L^1(\mu)$, then
$$\left|\int f\,d\mu\right|\le\int |f|\,d\mu.$$

[F7] [[def-weak-convergence-of-borel-probability-measures]]: For Borel probability measures $\mu_n,\mu$ on a metric space S, write $\mu_n\Rightarrow\mu$ if $\int f\,d\mu_n\to\int f\,d\mu$ for every bounded continuous real function f on S. Continuity is def-metric-continuity. Such f is Borel measurable (inverse images of open sets are open) and $\int|f|\,d\mu\le\|f\|_\infty\mu(S)<\infty$, so the integrals are finite in def-integrable-real-and-complex-functions-and-their-integrals. No completeness or coupling is required.

## Verification

**Given:** The objects, hypotheses and definitions in the statement. Its conclusions are to be established below.

1.1 Fix $n\ge1$. AC restricted to a countable family gives F1. By F2, the Borel restriction lambda on [0,1] has mass one, each interval ((k-1)/n,k/n] has mass 1/n, and {0} has mass zero. The finite sum defining $\mu_n$ is a probability: disjoint-set indicators add at each of its n atoms and total mass is n/$n=1$. [F1, F2]

2.1 For a bounded continuous real f, put $s_n$(x)=f(k/n) on ((k-1)/n,k/n] and $s_n$(0)=f(0). By F3 applied to positive and negative parts, $\int s_n\,d\lambda=n^{-1}\sum_{k=1}^nf(k/n)=\int f\,d\mu_n$. F4, with its CC use supplied by step 1.1, makes f uniformly continuous on [0,1]. Thus $\|s_n-f\|_\infty\to0$, since each cell has length 1/n. [F3, F4, step 1.1]

3.1 F5 and F6 give $|\int f\,d\mu_n-\int f\,d\lambda|=|\int(s_n-f)\,d\lambda|\le\|s_n-f\|_\infty\lambda([0,1])\to0$. This is F7. [F5, F6, F7] ∎
