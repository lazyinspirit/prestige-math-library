---
id: ex-square-integrable-entire-functions-vanish
kind: example
title: An unbounded domain with trivial Bergman space
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 3
proof_strategy: direct
deps:
  - def-balls-and-polydiscs-in-complex-euclidean-space
  - def-bergman-space-and-kernel
  - def-countable-choice
  - lem-bergman-mean-value-l2-bound
  - lem-monomial-integrals-over-disc-ball-and-polydisc
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: Jiří Lebl, Tasty Bits of Several Complex Variables (book)
      url: https://www.jirka.org/scv/scv.pdf
      locator: >-
        §5.2, Exercise 5.2.2(a,b) and Example 5.2.4, printed pp. 161–163:
        the exercises state that A²(ℂⁿ) and A²(𝔻×ℂ) are trivial, and the example
        records K_{ℂⁿ}≡0. The exercise supplies no proof; the local argument
        below proves the product-domain case directly from the polydisc mean
        bound and does not use Fubini or Liouville.
---

## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]) and let $m\ge1$. The
preceding definition [[def-bergman-space-and-kernel]] gives
$A^2(\mathbb C^m)=\{0\}$ and $K_{\mathbb C^m}\equiv0$. Also,
$A^2(\mathbb D\times\mathbb C)=\{0\}$ and
$K_{\mathbb D\times\mathbb C}\equiv0$. Thus neither unbounded domain has a
nontrivial Bergman kernel, and the kernel-derived Bergman metric is unavailable
there because $\log K(z,z)=\log0$ is undefined. In contrast, the bounded unit
disc has $K_{\mathbb D}(0,0)>0$.

## Facts & Assumptions

[A1] The only choice principle is $\mathrm{AC}_\omega$, inherited through the Bergman-space, mean-value and disc-integral suppliers; no full Axiom of Choice is used ([[def-countable-choice]]).

[F1] For every $m\ge1$, $A^2(\mathbb C^m)=\{0\}$ and $K_{\mathbb C^m}\equiv0$ ([[def-bergman-space-and-kernel]]).

[F2] Open and closed polydiscs are defined coordinatewise, and open polydiscs are open sets ([[def-balls-and-polydiscs-in-complex-euclidean-space]]).

[F3] If $f$ is holomorphic on an open neighborhood of a closed polydisc
$\overline\Delta_{\mathbf r}(a)\subseteq\Omega\subseteq\mathbb C^2$, then
$$|f(a)|^2\le\frac{1}{\pi^2r_0^2r_1^2}\int_{\Delta_{\mathbf r}(a)}|f|^2\,d\lambda_4$$
([[lem-bergman-mean-value-l2-bound]]).

[F4] If $0\le g\le h$ are measurable, then $\int g\le\int h$ ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[F5] The unit disc has area $\lambda_2(\mathbb D)=\pi$ ([[lem-monomial-integrals-over-disc-ball-and-polydisc]], with $m=1$ and $\alpha=0$).

[F6] Each class in $A^2(\Omega)$ has a unique holomorphic representative that is square-integrable ([[def-bergman-space-and-kernel]]).

[F7] Every point evaluation on $A^2(\Omega)$ has a unique Riesz representer $k_w$ satisfying $f(w)=\langle f,k_w\rangle$, and $K_\Omega(z,w)=k_w(z)$ ([[def-bergman-space-and-kernel]]).

## Proof

**Proof technique:** direct, using a growing polydisc in the unbounded coordinate.

**Given:** $\mathrm{AC}_\omega$, $m\ge1$, and the definitions of $A^2(\Omega)$ and $K_\Omega$ from [F1], [F6] and [F7].

1.1 The conclusion $A^2(\mathbb C^m)=\{0\}$ and $K_{\mathbb C^m}\equiv0$ is already proved in [[def-bergman-space-and-kernel]], so this example uses that earlier result without repeating its large-polydisc argument. [A1, F1, given]

1.2 Let $a=(z,w)\in\mathbb D\times\mathbb C$ and set $\rho=(1-|z|)/2>0$. For every $R>0$, the closed polydisc $\overline\Delta_{(\rho,R)}(a)$ lies in $\mathbb D\times\mathbb C$, since $|z|+\rho=(1+|z|)/2<1$ and the second coordinate is unrestricted. These polydiscs show that the product set is open. Let $f$ be the unique holomorphic representative of any class in $A^2(\mathbb D\times\mathbb C)$, as in [F6]. The mean bound [F3] and integral monotonicity [F4] give $|f(a)|^2\le(\pi^2\rho^2R^2)^{-1}\int_{\Delta_{(\rho,R)}(a)}|f|^2\,d\lambda_4\le\|[f]\|_{L^2(\mathbb D\times\mathbb C)}^2/(\pi^2\rho^2R^2)$. Letting $R\to\infty$ gives $f(a)=0$. Since $a$ was arbitrary, every holomorphic representative is identically zero, hence $A^2(\mathbb D\times\mathbb C)=\{0\}$. [A1, F2, F3, F4, F6, given]

2.1 By [F7], each point evaluation on the zero space $A^2(\mathbb D\times\mathbb C)$ has the unique representer $k_w=0$, so $K_{\mathbb D\times\mathbb C}(z,w)=0$ for all $z,w$. Its diagonal is zero, making the logarithm in the kernel-derived Bergman metric undefined. [A1, F7, step 1.2]

3.1 By [F5], the constant function $1$ is in $A^2(\mathbb D)$. Its evaluation at $0$ is $1$, so its Riesz representer $k_0$ is nonzero by [F7]. Reproduction with $f=k_0$ gives $K_{\mathbb D}(0,0)=k_0(0)=\langle k_0,k_0\rangle=\|k_0\|^2>0$, proving the claimed contrast with the two unbounded examples. [A1, F5, F7, given] ∎
