---
id: ex-mobius-correlation-with-a-linear-phase
kind: example
title: Möbius correlation with a linear phase
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 15
deps:
  - thm-green-tao-mobius-orthogonality-to-polynomial-nilsequences
  - def-polynomial-sequence-on-a-filtered-group
  - def-filtered-nilpotent-lie-group-and-nilmanifold
  - def-malcev-basis-and-rationality
  - def-total-equidistribution-of-a-nil-orbit
  - thm-sine-and-cosine-derivatives
  - cor-trigonometric-parity-and-pythagorean-identity
  - cor-mean-value-theorem
  - thm-complex-exponential-addition-and-real-extension
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
justified_by: []
aliases: []
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: Ben Green and Terence Tao, The Möbius function is strongly orthogonal to nilsequences
      url: https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n2-p03-p.pdf
      locator: Theorem 1.1 and the one-step discussion, printed pp. 542–543
    - title: Terence Tao, 254A Notes 8, The Hardy–Littlewood circle method and Vinogradov’s theorem
      url: https://terrytao.wordpress.com/2015/03/30/254a-notes-8-the-hardy-littlewood-circle-method-and-vinogradovs-theorem/
      locator: Davenport estimate and linear phases
---

## Example

For every real $\alpha$ and every $A>0$, with
$e(t)=\exp(2\pi i t)$, the complex linear-phase sum satisfies
$$\left|\frac1N\sum_{n=1}^{N}\mu(n)e(\alpha n)\right| \ll_A(\log N)^{-A}\qquad(N\geq2),$$
with a constant independent of $\alpha$.

## Example references

[Green and Tao, Theorem 1.1](https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n2-p03-p.pdf)

[Tao, 254A Notes 8](https://terrytao.wordpress.com/2015/03/30/254a-notes-8-the-hardy-littlewood-circle-method-and-vinogradovs-theorem/)

## Facts & Assumptions

**Given:** A real $\alpha$, a real cutoff $N\ge2$ and $A>0$. In particular the proof covers the integer cutoff convention. No choice axiom is assumed.

[F1] The full unqualified GT Möbius theorem applies to arbitrary polynomial sequences, fixed rational-complexity nilmanifolds and real Lipschitz observables bounded by one; its constants do not depend on the chosen polynomial sequence ([[thm-green-tao-mobius-orthogonality-to-polynomial-nilsequences]]).

[F2] Polynomial sequences use the stated iterated right differences. The circle $\mathbb R/\mathbb Z$ with its standard basis has the coordinate-chain quotient metric; the full Lipschitz norm is sup norm plus Lipschitz seminorm ([[def-polynomial-sequence-on-a-filtered-group]], [[def-filtered-nilpotent-lie-group-and-nilmanifold]], [[def-malcev-basis-and-rationality]], [[def-total-equidistribution-of-a-nil-orbit]]).

[F3] The sine/cosine derivatives and real bounds hold; the real mean-value theorem bounds increments by a derivative bound. The complex exponential has its addition law, Cartesian form and $e^{i\pi}=-1$ ([[thm-sine-and-cosine-derivatives]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[cor-mean-value-theorem]], [[thm-complex-exponential-addition-and-real-extension]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

## Proof

**Proof technique:** two explicit real circle tests with fixed complexity.

1.1 Take $G=\mathbb R$, $\Gamma=\mathbb Z$, the standard $2$-rational basis, and the degree-one filtration $G_0=\cdots=G_1=G$, $G_2=\{0\}$. Set $g(n)=\alpha n$. Its first difference is $\alpha h$ and every second difference vanishes. Thus all iterated differences belong to the required filtration groups for every integer $n$ and every integral increment, so $g$ is polynomial. The group coordinate-chain metric is $|x-y|$, by its one-edge upper bound and the ordinary triangle lower bound; hence its quotient metric is $\min_{k\in\mathbb Z}|x-y-k|$. Neither the basis nor the filtration depends on $\alpha$. [F2, given, algebra]

2.1 Put $F_c(t)=\cos(2\pi t)$ and $F_s(t)=\sin(2\pi t)$. By [F3], $\exp(2\pi i)=\exp(i\pi)^2=1$, so both tests are $1$-periodic and descend to the circle; their sup norms are at most one. Their derivative magnitudes are at most $2\pi$: for the fixed scalar composition this follows directly by taking the sine/cosine difference quotient with increment $2\pi h$. The mean-value theorem bounds each lifted increment by $2\pi|x-y-k|$ for every integer $k$, so the circle Lipschitz norms are at most $1+2\pi$. Let $K=\lfloor N\rfloor\ge N/2$. Apply [F1] at the integer $K\ge2$ separately to these two real tests and the orbit in step 1.1. Their fixed basis/norm bounds and $F_c(g(n))+iF_s(g(n))=\exp(2\pi i g(n))$ give the claimed complex sum by the triangle inequality, with constants independent of $\alpha$. Its original $N$-normalization is $K/N$ times the $K$-normalization; since $\log K$ and $\log N$ are uniformly comparable for $N\ge2$, the asserted bound follows for real cutoffs as well as integer ones. [F1, F2, F3, step 1.1, algebra] ∎

## Source notes

This is a complete deduction from the full GT Möbius theorem using a fixed rational circle and two fixed real observables. Their norm and basis complexity do not depend on the polynomial coefficient, which proves the stated uniformity in every real $\alpha$. The former conditional analytic premise is supplied by the local AP deduction from the independently accepted unqualified character estimate; the old geometric supplier proofs are unchanged. No prime-pattern or prime-majorant theorem is asserted by this example.
