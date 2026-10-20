---
id: lem-pinn-cell-occupancy-controls-uniform-residual
kind: lemma
title: "Populated sampling cells control the uniform PINN residual"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps: [def-probability-measure, def-independent-random-elements, thm-finite-and-countable-subadditivity-of-measures]
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Shin, Darbon, and Karniadakis, On the Convergence of Physics-Informed Neural Networks for Linear Second-Order Elliptic and Parabolic Type PDEs"
      url: "https://arxiv.org/pdf/2004.01806"
      locator: "Appendix B cell argument; strengthened to occupancy averaging in this repair"
---

## Statement

Let $X\subset\mathbb R^D$ carry a probability measure $\mu$, let $s,c>0$, and fix an integer $m\ge1$. Put $\ell=(c\sqrt m)^{-1/s}$. Suppose a specified finite measurable partition $X_1,\ldots,X_K$ of $X$ has each cell contained in a cube of side $\ell$ and of mass at least $c\ell^s$. Let $Y_1,\ldots,Y_m$ be independent points of law $\mu$, and put $\delta=\sqrt D\ell$. With probability at least $\max\{0,1-\sqrt m\exp(-\sqrt m/8)\}$ every cell contains at least $\sqrt m/2$ samples, counted with multiplicity. On this event, simultaneously for all real functions $v,g$ with finite $\alpha$-Hölder seminorms on $X$,
$$\|v-g\|_{\infty;X}^2\le6\sqrt m\left(\frac1m\sum_{i=1}^m|v(Y_i)-g(Y_i)|^2\right)+3\delta^{2\alpha}([v]_{\alpha;X}^2+[g]_{\alpha;X}^2).$$
No independence between the functions and the samples is required.

## Statement references

[[def-independent-random-elements]]

[Shin et al., Appendix B: the underlying cell construction](https://arxiv.org/pdf/2004.01806)

## Facts & Assumptions

**Given:** The specified partition, iid samples, and functions in the Statement.

[F1] A probability measure assigns total mass one; independence gives product probabilities for finite sample tuples ([[def-probability-measure]], [[def-independent-random-elements]]).

[F2] The probability of a finite union of events is bounded by the sum of their probabilities ([[thm-finite-and-countable-subadditivity-of-measures]]).

## Proof

1.1 Write $p_j=\mu(X_j)$ and $N_j=\sum_{i=1}^m\mathbf1_{\{Y_i\in X_j\}}$. Since $p_j\ge c\ell^s=m^{-1/2}$ and $\sum_jp_j=1$, we have $K\le\sqrt m$. Independence gives $\mathbb E e^{-N_j/2}=(1-p_j+p_je^{-1/2})^m\le\exp(-mp_j(1-e^{-1/2}))$. For a nonnegative random variable $Z$, $a\mathbb P(Z>a)\le\mathbb E Z$, by integrating $Z\ge a\mathbf1_{Z>a}$. Apply this with $Z=e^{-N_j/2}$ and $a=e^{-mp_j/4}$ to get $\mathbb P(N_j<mp_j/2)\le\exp(mp_j/4-mp_j(1-e^{-1/2}))\le e^{-mp_j/8}$. Here $e^{1/2}\ge1+1/2+1/8=13/8>8/5$ implies $e^{-1/2}<5/8$, and $1-x\le e^{-x}$ follows by differentiating $e^{-x}-1+x$. [given, F1, algebra]

2.1 The event $N_j<\sqrt m/2$ is contained in $N_j<mp_j/2$. By step 1.1 and [F2], its union over cells has probability at most $K e^{-\sqrt m/8}\le\sqrt m e^{-\sqrt m/8}$. This proves the probability assertion, with the trivial lower bound zero when necessary. [step 1.1, F2, algebra]

3.1 On the complementary event fix $x\in X_j$. Every sample $Y_i\in X_j$ is within $\delta$ of $x$. The three-term square inequality gives $|v(x)-g(x)|^2\le3|v(Y_i)-g(Y_i)|^2+3\delta^{2\alpha}([v]_{\alpha;X}^2+[g]_{\alpha;X}^2)$. Average over the $N_j\ge\sqrt m/2$ samples in this cell. Its first term is at most $(3/N_j)\sum_{i=1}^m|v(Y_i)-g(Y_i)|^2\le6\sqrt m\,m^{-1}\sum_i|v(Y_i)-g(Y_i)|^2$. Taking the supremum over $x$ proves the inequality. This is a deterministic inequality on the occupancy event, so it holds for sample-dependent trial functions as well. [step 2.1, algebra] ∎

