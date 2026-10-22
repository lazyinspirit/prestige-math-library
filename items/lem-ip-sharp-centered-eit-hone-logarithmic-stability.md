---
id: lem-ip-sharp-centered-eit-hone-logarithmic-stability
kind: lemma
title: H1 logarithmic stability from centered three-dimensional NtD data
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
  - lem-ip-collared-liouville-potential-and-hone-recovery
  - lem-ip-centered-ntd-cgo-identity-and-modulated-remainder
  - lem-ip-sharp-weighted-modulated-cgo-remainder-absorption
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Frederic Weidling, Variational Source Conditions and Conditional Stability Estimates for Inverse Problems in PDEs
      url: https://univerlag.uni-goettingen.de/bitstream/handle/3/isbn-978-3-86395-411-6/weidling.pdf?sequence=1
      locator: Theorems 6.10–6.11; the proof here repairs the printed pointwise modulation inference by weighted integration
dependency_level: 3
---

## Statement

Assume the Axiom of Choice, Countable Choice and Dependent Choice. Fix $5/2<s<7/2$, $0<\rho<1$, $0<m<1<M$ and $A>0$. Let $\sigma_j=1+a_j$ be real conductivities on $\mathbb R^3$, with $a_j$ supported in $\overline{B_\rho}$, $\|a_j\|_{H^s}\le A$, and $m\le\sigma_j\le M$, for $j=1,2$. Let $\mathscr N_j$ be their boundary-mean-zero NtD maps on $S^2=\partial B_1$, and let
$$\delta=\left(\sum_{\ell\ge1}\sum_{k=1}^{2\ell+1}\|(\mathscr N_1-\mathscr N_2)Y_{\ell k}\|_{L^2(S^2)}^2\right)^{1/2}.$$
Then there is $C>0$ depending only on $s,\rho,m,M,A$ such that
$$\|\sigma_1-\sigma_2\|_{H^1(\mathbb R^3)}\le C\left[\log(3+\delta^{-1})\right]^{-(s-3/2)}\qquad(\delta>0).$$
If $\delta=0$, the conductivities are equal. The zero-noise modulus is therefore defined to be zero. Restricting the left side to $B_1$ gives the same $H^1$ norm because the difference is supported in $\overline{B_\rho}$.

## Statement references

[[lem-ip-collared-liouville-potential-and-hone-recovery]]

[[lem-ip-centered-ntd-cgo-identity-and-modulated-remainder]]

[[lem-ip-sharp-weighted-modulated-cgo-remainder-absorption]]

[Weidling, Theorems 6.10–6.11](https://univerlag.uni-goettingen.de/bitstream/handle/3/isbn-978-3-86395-411-6/weidling.pdf?sequence=1)

## Facts & Assumptions

**Given:** The choice assumptions and fixed collared Sobolev conductivity class in the Statement.

[F1] With $q_j=(\Delta\sqrt{\sigma_j})/\sqrt{\sigma_j}$ and $Q=q_1-q_2$, one has $\|Q\|_{H^{s-2}}\le C$, and $\|\sigma_1-\sigma_2\|_{H^1}\le C\|Q\|_{H^{-1}}$. [[lem-ip-collared-liouville-potential-and-hone-recovery]]

[F2] The exact centered NtD/CGO identity has boundary term at most $C\delta e^{Ct}$. For each $|\xi|\le t$, its remaining Fourier term is the bilinear pairing of $e^{-i\xi\cdot x}Q$ with a cutoff remainder of $H^{1/2}$ norm at most $C/t$, uniformly in phase direction. [[lem-ip-centered-ntd-cgo-identity-and-modulated-remainder]]

[F3] For every $b\ge1$, $\int_{|\xi|\le b}\langle\xi\rangle^{-1}\|e^{-i\xi\cdot x}Q\|_{H^{-1/2}}^2d\xi\le Cb^2\|Q\|_{H^{-1/2}}^2$. [[lem-ip-sharp-weighted-modulated-cgo-remainder-absorption]]

[A1] All choice assumptions are retained from the actual suppliers [F1]–[F3]. [[def-axiom-of-choice]], [[def-countable-choice]], [[def-dependent-choice]]

## Proof

1.1 Put $N=\|Q\|_{H^{-1/2}}$ and $\kappa=s-3/2>0$. For $b\ge1$, the high-frequency contribution satisfies $\int_{|\xi|>b}\langle\xi\rangle^{-1}|\widehat Q(\xi)|^2d\xi\le Cb^{-2\kappa}\|Q\|_{H^{s-2}}^2\le Cb^{-2\kappa}$. Indeed the ratio of the two Fourier weights is $\langle\xi\rangle^{-1-2(s-2)}=\langle\xi\rangle^{-2\kappa}$. [A1, F1, given, algebra]

2.1 For $t\ge\max\{T,b\}$, [F2] gives the pointwise inequality $|\widehat Q(\xi)|\le C\delta e^{Ct}+(C/t)\|e^{-i\xi\cdot x}Q\|_{H^{-1/2}}$ for $|\xi|\le b$. The right side is measurable by the nonnegative Fourier integral in [F3]; thus this inequality can be integrated without selecting a measurable family of CGO phases. Square it using $(u+v)^2\le2u^2+2v^2$, multiply by $\langle\xi\rangle^{-1}$ and integrate. Since $\int_{|\xi|\le b}\langle\xi\rangle^{-1}d\xi\le Cb^2$, [F3] yields a low-frequency bound $Cb^2\delta^2 e^{Ct}+Cb^2t^{-2}N^2$, after increasing the exponential constant. Combining with step 1.1 gives $N^2\le Cb^{-2\kappa}+Cb^2\delta^2e^{Ct}+Cb^2t^{-2}N^2$. This uses the integrated modulated estimate, not an unmodulated pointwise Sobolev pairing. [F2, F3, step 1.1, algebra]

3.1 Choose a fixed $K\ge\max\{T,1\}$ large enough that $C/K^2\le1/2$ for the last constant in step 2.1, and set $t=Kb$. Absorb that term into the left side and take square roots. Increasing fixed constants and using $b\le e^b$ for $b\ge1$ gives $N\le Cb^{-\kappa}+C\delta e^{Db}$ for some $D>0$ depending only on the fixed class. If $\delta=0$, let $b\to\infty$ to obtain $N=0$. If $0<\delta<e^{-2D}$, take $b=\log(1/\delta)/(2D)\ge1$. Then $\delta e^{Db}=\sqrt\delta$, which is bounded by a constant times $[\log(1/\delta)]^{-\kappa}$ because $e^{-x/2}x^\kappa$ is bounded for $x\ge1$. Hence $N\le C[\log(1/\delta)]^{-\kappa}$ for all sufficiently small positive $\delta$. [step 2.1, choose, algebra]

4.1 By [F1] and the Fourier weight inequality, $\|\sigma_1-\sigma_2\|_{H^1}\le C\|Q\|_{H^{-1}}\le CN$. This proves the claimed small-noise rate and, if $\delta=0$, equality of the conductivities. For larger positive $\delta$, the uniform bound $\|a_1-a_2\|_{H^1}\le2A$ and the positive lower bound for $[\log(3+\delta^{-1})]^{-\kappa}$ on that region prove the same displayed estimate after increasing $C$. On a sufficiently small noise interval, $\log(3+\delta^{-1})$ is comparable to $\log(1/\delta)$, so the two small-noise formulations agree. All constants came from the fixed class. [F1, step 3.1, algebra] ∎
