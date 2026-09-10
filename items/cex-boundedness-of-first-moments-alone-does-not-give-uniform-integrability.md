---
id: cex-boundedness-of-first-moments-alone-does-not-give-uniform-integrability
kind: counterexample
title: Boundedness of first moments alone does not give uniform integrability
deps: ["def-uniformly-integrable-family", "def-weak-convergence-of-borel-probability-measures", "def-tight-family-of-probability-measures", "cor-markov-inequality-for-random-variables", "thm-heine-borel-rn"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Durrett, §3.2, weak convergence versus moment convergence; explicit two-point construction
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement refuted

There are nonnegative variables $(X_n)_{n\ge 1}$ on one probability space with $P(X_n=n)=1/n$, $P(X_n=0)=1-1/n$. They have $\mathbb E|X_n|=1$ and tight laws converging weakly to $\delta_0$, but are not uniformly integrable.

## Facts & Assumptions

[F1] [[def-uniformly-integrable-family]]: Let $(X,\mathcal A,\mu)$ be a measure space. A family
$\mathcal F \subseteq L^1(\mu)$ of integrable real-valued functions is
**uniformly integrable** when
$$\sup_{f \in \mathcal F}\int_{\{|f|>M\}} |f|\,d\mu \to 0 \qquad\text{as } M \to \infty.$$

Equivalently, for every $\varepsilon>0$ there is $M>0$ such that
$$f \in \mathcal F \qquad\Longrightarrow\qquad \int_{\{|f|>M\}} |f|\,d\mu < \varepsilon.$$

This page adopts the tail-integral definition. On finite measure spaces it is
equivalent to $L^1$-boundedness plus uniform absolute continuity, proved later
on this page.

[F2] [[def-weak-convergence-of-borel-probability-measures]]: For Borel probability measures $\mu_n,\mu$ on a metric space S, write $\mu_n\Rightarrow\mu$ if $\int f\,d\mu_n\to\int f\,d\mu$ for every bounded continuous real function f on S. Continuity is def-metric-continuity. Such f is Borel measurable (inverse images of open sets are open) and $\int|f|\,d\mu\le\|f\|_\infty\mu(S)<\infty$, so the integrals are finite in def-integrable-real-and-complex-functions-and-their-integrals. No completeness or coupling is required.

[F3] [[cor-markov-inequality-for-random-variables]]: If $X:\Omega\to[0,+\infty]$ is a nonnegative random variable on a probability
space and $a>0$, then
$$\mathbb P(X\ge a)\le\frac{\mathbb E[X]}{a}.$$

[F4] [[thm-heine-borel-rn]]: Let $n \in \mathbb{N}$ with $n \ge 1$, let $\mathbb{R}^n$ be the set of functions
$n \to \mathbb{R}$ and let $d_2$ be the Euclidean metric on it
(lem-metrics-on-rn). Then:

1. **Closed boxes are compact.** For reals $a_k \le b_k$ $(k < n)$ the box
   $Q = \{\, x \in \mathbb{R}^n : a_k \le x_k \le b_k \text{ for every } k < n \,\}$
   is a compact subset of $(\mathbb{R}^n, d_2)$ (def-metric-compactness).
2. **Heine-Borel.** A subset $K \subseteq \mathbb{R}^n$ is a compact subset of
   $(\mathbb{R}^n, d_2)$ if and only if $K$ is closed in $\mathbb{R}^n$
   (def-metric-topology) and bounded
   (def-metric-bounded-diameter).
3. **The real line.** A subset $K \subseteq \mathbb{R}$ is a compact subset of
   $(\mathbb{R}, d_{\mathbb{R}})$, the usual metric $d_{\mathbb{R}}(x,y) = |x-y|$
   (lem-real-line-is-a-metric-space), if and only if $K$ is closed in
   $\mathbb{R}$ and bounded.

**No choice principle is used.** The bisection below halves one coordinate at a
time and takes the **left** half whenever the left half still fails to be finitely
covered, the right half otherwise: a rule with two outcomes, decided by a
property of the box, not a selection. That is the whole reason the theorem is
available in ZF, while the general "complete and totally bounded implies compact"
(thm-complete-and-totally-bounded-implies-compact) is not.

The hypothesis $n \ge 1$ is inherited from lem-metrics-on-rn, which defines
$\mathbb{R}^n$ and its metrics only there; the last remark below records what
happens at $n = 0$.

## Counterexample

**Given:** The objects, hypotheses and definitions in the statement. Its conclusions are to be established below.

1.1 Use the countable space of positive integers, with $P(\{k\})=1/(k(k+1))=1/k-1/(k+1)$. Its masses sum to one by telescoping. Define P(E) as the sum over k in E; for disjoint countable unions the nonnegative double sum can be interchanged by taking suprema of finite subsums, proving countable additivity. Set $X_n(k)=n\mathbf1_{\{k\ge n\}}$. Telescoping gives $P(k\ge n)=1/n$, proving the displayed law, including $n=1$. [given, algebra]

1.2 The finite-law calculation gives $\mathbb E|X_n|=n/n=1$. If n>K, then $\mathbb E[|X_n|\mathbf1_{\{|X_n|>K\}}]=1$. Thus the supremum of these tail integrals is one for every $K>0$, and F1 fails. [F1]

2.1 The interval $[-R,R]$ is compact by F4. For bounded continuous f the law integral is $f(0)+(f(n)-f(0))/n$, whose difference from f(0) is at most $2\|f\|_\infty/n\to0$. This is weak convergence by F2. F3 gives $P(|X_n|>R)\le1/R$ uniformly; the compact interval [-R,R] with $R>1$/$\varepsilon$ therefore verifies tightness. Step 1.2 nevertheless excludes uniform integrability. [F2, F3, F4] ∎
