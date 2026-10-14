---
id: thm-gaussian-sparse-sequence-minimax-lower-bound
kind: theorem
title: "Gaussian sparse-sequence minimax lower bound"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 6
deps:
  - def-axiom-of-choice
  - def-loss-function-and-risk
  - def-randomized-procedure-as-a-markov-kernel
  - lem-statistic-induces-deterministic-procedure
  - lem-sparse-hamming-packing
  - lem-gaussian-location-kl-formula
  - thm-product-kl-additivity
  - thm-fano-packing
  - thm-pinsker
  - thm-two-point-le-cam-risk-bound
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - def-integral-logarithm
  - cor-integral-logarithm-agrees-with-natural-logarithm
  - thm-monotonicity-of-the-integral
  - lem-of-square-monotone
  - thm-of-square-roots
  - def-real-exponential-function-and-e
  - thm-exponential-is-strictly-increasing
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Philippe Rigollet and Jan-Christian Hütter, High-Dimensional Statistics: Lecture Notes, Chapter 4, §§18–19.2"
      url: "https://arxiv.org/pdf/2310.19244v1"
---

## Statement

Assume the Axiom of Choice. Let $n,d\ge1$, $\sigma>0$, and let
$1\le s\le d/2$ be integers. Observe $Z\in\mathbb R^d$ with independent
coordinates $Z_j\sim N(\theta_j,\sigma^2/n)$ for a parameter
$$\Theta_{s,d}:=\{\theta\in\mathbb R^d: |\{j\in\{1,\ldots,d\}:\theta_j\ne0\}|\le s\}.$$
For every Borel estimator $T:\mathbb R^d\to\mathbb R^d$,
$$\sup_{\theta\in\Theta_{s,d}} \mathbb E_\theta\|T(Z)-\theta\|_2^2 \ge \frac{\sigma^2s\log(ed/s)}{200000n}.$$

## Facts & Assumptions

**Given:** AC, integers $n,d\ge1$, $\sigma>0$, $1\le s\le d/2$, the
independent-coordinate Gaussian sequence experiment, and a Borel estimator
$T:\mathbb R^d\to\mathbb R^d$.

[A1] Assume AC, as required by the Fano, KL, and Gaussian-location suppliers
([[def-axiom-of-choice]]).

[F1] For $1\le s\le d/2$, there is a finite code of binary vectors with
exactly $s$ ones, pairwise squared Euclidean distance greater than $s/2$, and
$\log M\ge(s/1024)\log(ed/s)$
([[lem-sparse-hamming-packing]]).

[F2] For independent coordinates $N(\theta_j,\sigma^2/n)$, the KL divergence
between two sequence laws is $n\|\theta-\theta'\|_2^2/(2\sigma^2)$
([[lem-gaussian-location-kl-formula]], [[thm-product-kl-additivity]]).

[F3] For $M$ separated hypotheses and a reference law $Q$, every randomized
estimator has uniform average squared-error risk at least
$$\frac{\Delta^2}{4}\left(1-\frac{M^{-1}\sum_jD(P_j\|Q)+\log2}{\log M}\right)$$
([[thm-fano-packing]]).

[F4] Under the event-supremum convention,
$\|P-Q\|_{\rm TV}\le\sqrt{D(P\|Q)/2}$
([[thm-pinsker]]).

[F5] For scalar targets separated by $b>0$, every randomized scalar estimator
has maximum squared-error risk at least
$$\frac{b^2}{8}(1-\|P_0-P_1\|_{\rm TV})$$
([[thm-two-point-le-cam-risk-bound]]).

[F6] Risk is the expected nonnegative loss under the sampling and action laws
([[def-loss-function-and-risk]]).

[F7] A Borel estimator induces a measurable point-mass probability kernel
([[def-randomized-procedure-as-a-markov-kernel]],
[[lem-statistic-induces-deterministic-procedure]]).

[F8] The natural logarithm is strictly increasing and has the product law;
$\log x=\int_1^xdt/t$, the integral is monotone, squaring is strictly
increasing on nonnegative reals, and nonnegative square roots are unique
([[def-natural-logarithm]], [[thm-natural-logarithm-laws]],
[[def-integral-logarithm]],
[[cor-integral-logarithm-agrees-with-natural-logarithm]],
[[thm-monotonicity-of-the-integral]], [[lem-of-square-monotone]],
[[thm-of-square-roots]]).

[F9] $e=\exp(1)>2$, since the defining series for $e$ has initial terms
$1+1+1/2$ and positive remaining terms; $\exp$ is strictly increasing
([[def-real-exponential-function-and-e]],
[[thm-exponential-is-strictly-increasing]]).

## Proof


1.1 Choose the code $\mathcal C$ from [F1], with cardinality $M$. Since $ed/s\ge2e>1$ by [F9], [F8] gives $\log(ed/s)>0$; hence $M\ge2$. Put $$a:=\sqrt{\frac{\sigma^2\log M}{4ns}}>0,\qquad \theta^\omega=a u^\omega \quad(\omega\in\mathcal C).$$ Every $\theta^\omega$ belongs to $\Theta_{s,d}$, and distinct code targets have squared distance greater than $a^2s/2$. [F1, F8, F9, given, algebra]

1.2 Now suppose $M=2$. By [F8], $\log2=\int_1^2dt/t\le1$, because $1/t\le1$ on $[1,2]$. Hence [F1] gives $s\log(ed/s)\le1024$. Consider the two parameters $0$ and $b e_1$, where $b=\sigma/(2\sqrt n)$; both belong to $\Theta_{s,d}$. By [F2], their sequence laws have KL divergence $nb^2/(2\sigma^2)=1/8$, so [F4] gives total variation at most $1/4$. For the Borel vector estimator $T$, its first coordinate $T_1$ is Borel, and [F7] makes it an admissible scalar kernel. Pointwise, $$\|T(z)-\theta\|_2^2\ge|T_1(z)-\theta_1|^2$$ for both parameters. Applying [F5] to this scalar kernel shows the maximum vector risk is at least $$\frac{b^2}{8}\left(1-\frac14\right) =\frac{3\sigma^2}{128n} >\frac{1024\sigma^2}{200000n} \ge\frac{\sigma^2s\log(ed/s)}{200000n}.$$ [A1, F1, F2, F4, F5, F7, F8, given, algebra]

2.1 Take the reference law $Q=P_0$ of the zero-mean sequence. By [F2], $$D(P_{\theta^\omega}\|P_0) =\frac{n}{2\sigma^2}\|a u^\omega\|_2^2 =\frac{na^2s}{2\sigma^2}=\frac{\log M}{8}$$ for every $\omega$, since $u^\omega$ has exactly $s$ ones. [A1, F1, F2, step 1.1, algebra]

3.1 First suppose $M\ge3$. Since $3>2\sqrt2$ (squaring gives $9>8$), [F8] implies $\log3>\log(2\sqrt2)=\frac32\log2$. Thus $\log2/\log M<2/3$. The average reference KL ratio in [F3] is $1/8$ by step 2.1, so the Fano factor is greater than $1-1/8-2/3=5/24>1/5$. With separation $\Delta=a\sqrt{s/2}$, [F3] gives uniform average risk greater than $$\frac{\Delta^2}{20}=\frac{a^2s}{40} =\frac{\sigma^2\log M}{160n} \ge\frac{\sigma^2s\log(ed/s)}{163840n} >\frac{\sigma^2s\log(ed/s)}{200000n}.$$ The maximum risk dominates this finite-code average; the Borel estimator is an admissible kernel by [F7]. Thus its supremum risk satisfies the same lower bound. [A1, F3, F7, F8, step 1.1, step 2.1, algebra]

4.1 The cases $M\ge3$ and $M=2$ exhaust the possibilities by step 1.1. Step 3.1 proves the $M\ge3$ case, and step 1.2 proves the $M=2$ case. Thus the claimed lower bound holds for the arbitrary Borel estimator $T$, with risk understood as in [F6]. [F6, step 1.1, step 1.2, step 3.1] ∎
