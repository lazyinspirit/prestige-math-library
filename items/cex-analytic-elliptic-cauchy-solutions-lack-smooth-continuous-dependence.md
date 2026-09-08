---
id: cex-analytic-elliptic-cauchy-solutions-lack-smooth-continuous-dependence
kind: counterexample
title: Hadamard instability despite analytic solvability
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: 'Ageno, Part III: Analysis of Partial Differential Equations'
      url: https://giacomoageno.github.io/LectureNotesAPDE.pdf
      locator: Ageno, §2.4.1 Hadamard example, PDF pp. 28–29. The factor exp(-sqrt(k)) is a local strengthening making all fixed derivative seminorms tend to zero.
status: draft
origin: pipeline
proof_strategy: direct
deps: ["thm-cauchy-kovalevskaya-for-a-noncharacteristic-analytic-cauchy-problem", "thm-exponential-beats-every-polynomial", "thm-sine-and-cosine-derivatives", "thm-derivative-of-exponential", "cor-trigonometric-parity-and-pythagorean-identity", "lem-exponential-series-has-infinite-radius", "lem-sine-and-cosine-series-converge-everywhere", "lem-coefficient-majorisation-is-preserved-by-sums-products-composition-and-differentiation"]
---

## Statement refuted

For positive integers k the harmonic analytic functions $u_k(x,t)=e^{-\sqrt{k}}\sinh(kt)\cos(kx)/k$ have zero value data and normal data $e^{-\sqrt{k}}\cos(kx)$ tending to zero in every $C^j$ seminorm on compact x-intervals, but $u_k(0,t)\to+\infty$ for every fixed t>0. Thus analytic solvability gives no continuous solution map from that smooth-data topology to pointwise evaluation at any positive time.

## Facts & Assumptions

**Given:** For each positive integer k define $u_k(x,t)=e^{-\sqrt{k}}\sinh(kt)\cos(kx)/k$. Its PDE, data, and limiting behavior are to be verified.

[F1] Sine and cosine differentiate into one another with the stated signs. ([[thm-sine-and-cosine-derivatives]]).

[F2] The exponential equals each of its derivatives. ([[thm-derivative-of-exponential]]).

[F3] Sine and cosine are bounded in modulus by one. ([[cor-trigonometric-parity-and-pythagorean-identity]]).

[F4] Every fixed polynomial is dominated by a positive exponential. ([[thm-exponential-beats-every-polynomial]]).

[F5] The exponential power series converges absolutely for every real argument. ([[lem-exponential-series-has-infinite-radius]]).

[F6] The sine and cosine defining power series converge absolutely everywhere. ([[lem-sine-and-cosine-series-converge-everywhere]]).

[F7] Products and substitutions by zero-constant inner series preserve convergent analyticity on a sufficiently small neighborhood. ([[lem-coefficient-majorisation-is-preserved-by-sums-products-composition-and-differentiation]]).

## Counterexample

1.1 Use $\sinh s=(e^s-e^{-s})/2$. F1 and F2 give $(u_k)_{tt}=k e^{-\sqrt{k}}\sinh(kt)\cos(kx)$ and $(u_k)_{xx}=-k e^{-\sqrt{k}}\sinh(kt)\cos(kx)$, so their sum is zero. At t=0, $\sinh0=0$ and its derivative is one, giving $u_k(x,0)=0$ and $(u_k)_t(x,0)=e^{-\sqrt{k}}\cos(kx)$. The exponential and trigonometric series make each u_k analytic. [given, F1, F2, algebra, F5, F6, F7]

2.1 For every nonnegative integer j, each x-derivative of order j of the normal data has modulus at most $k^je^{-\sqrt{k}}$ by F1 and F3. With $z=\sqrt{k}$ this is $z^{2j}e^{-z}\to0$ by F4. The bound is uniform on the entire real line, hence on every compact interval. All value-data derivatives are already zero. [step 1.1, F1, F3, F4]

3.1 Fix t>0. Eventually $\sinh(kt)\ge e^{kt}/4$ and $\sqrt{k}\le kt/2$. Hence $u_k(0,t)\ge e^{kt/2}/(4k)\to\infty$ by F4. The zero data give the zero solution, whereas these data converge to zero in every displayed seminorm and their solution values diverge. This disproves the asserted continuous dependence even though the Laplace principal coefficient on u_tt is one and each function is analytic. [step 1.1, step 2.1, F4] ∎

## Source notes

Ageno, §2.4.1 Hadamard example, PDF pp. 28–29. The factor exp(-sqrt(k)) is a local strengthening making all fixed derivative seminorms tend to zero.
