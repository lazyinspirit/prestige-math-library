---
id: lem-qftx-photon-invariant-measure-isometry
kind: lemma
title: The mass-shell weighted transverse space matches the Lebesgue transverse space
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 0
deps:
  - def-countable-choice
  - def-euclidean-inner-product
  - def-qft-fock-and-test-spaces
  - def-qft-photon-transverse-space
dependency_roles:
  def-countable-choice: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-qft-fock-and-test-spaces: mathematical-premise
  def-qft-photon-transverse-space: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: David Tong, Quantum Field Theory, Chapter 6, section 6.2.1
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html
      locator: Full author-hosted HTML chapter; section 6.2.1, equations 6.511–6.523, for the transverse photon fibers and projector.
    - title: Eric Palmerduca and Hong Qin, Photon topology, arXiv:2308.11147v2
      url: https://arxiv.org/pdf/2308.11147
      locator: Full 66-page PDF retrieved; section II and equations 14–15, for the mass-shell measure and transverse photon bundle. The local isometry below is proved explicitly.
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Countable Choice for the Hilbert-space supplier. Let $M=\mathbb R^3\setminus\{0\}$, let $\omega(\mathbf k)=|\mathbf k|$, and equip $M$ with the measure $d\nu(\mathbf k)=d^3\mathbf k/(2\omega(\mathbf k))$. On $\mathbb C^3$ use the positive Hermitian pairing $\overline u\cdot v=\sum_{j=1}^3\overline{u_j}v_j$ and the complex-bilinear extension of the Euclidean dot product in the transversality condition. Define $\mathcal H_T^\nu=\{f\in L^2(M,\nu;\mathbb C^3):\mathbf k\cdot f(\mathbf k)=0\text{ for }\nu\text{-almost every }\mathbf k\}$. Let $\mathcal H_T^0=\{u\in L^2(M,d^3\mathbf k;\mathbb C^3):\mathbf k\cdot u(\mathbf k)=0\text{ for Lebesgue-almost every }\mathbf k\}$ with the second-variable-linear integral pairing. Then $Wf(\mathbf k)=f(\mathbf k)/\sqrt{2\omega(\mathbf k)}$ is a unitary map from $\mathcal H_T^\nu$ onto $\mathcal H_T^0$.

## Statement references

[[def-qft-photon-transverse-space]]

[[def-qft-fock-and-test-spaces]]

[[def-countable-choice]]

[[def-euclidean-inner-product]]

## Facts & Assumptions

**Given:** Countable Choice; the mass-shell measure and transverse fields in the Statement; the published unweighted transverse space and Hilbert-pairing conventions.

[A1] Countable Choice, written $\mathrm{AC}_\omega$. [[def-countable-choice]]

[F1] The published transverse space is $\mathcal H_T^0=\{u\in L^2(\mathbb R^3,d^3\mathbf k;\mathbb C^3):\mathbf k\cdot u(\mathbf k)=0\text{ almost everywhere off }0\}$, a closed Hilbert subspace under $\mathrm{AC}_\omega$. [[def-qft-photon-transverse-space]]

[F2] The Hilbert pairing convention is conjugate-linear in the first variable and linear in the second: $\langle u,v\rangle_2=\int\overline{u(\mathbf k)}\cdot v(\mathbf k)\,d^3\mathbf k$. [[def-qft-fock-and-test-spaces]]

[F3] The Euclidean norm is $|\mathbf k|=(\mathbf k\cdot\mathbf k)^{1/2}$ on real vectors, and the real dot product extends complex-bilinearly for transversality. [[def-euclidean-inner-product]]

## Proof

**Given:** [A1], [F1]–[F3], and the definitions in the Statement.

1.1 The multiplier $Wf(\mathbf k)=f(\mathbf k)/\sqrt{2|\mathbf k|}$ is measurable on $M$, and
$$\|Wf\|_{L^2(d^3\mathbf k)}^2=\int_M\frac{|f(\mathbf k)|^2}{2|\mathbf k|}\,d^3\mathbf k=\|f\|_{L^2(d\nu)}^2.$$
The same identity for inner products shows that $W$ is an isometry with the second-variable-linear convention of [F2]. [F2, F3, given, algebra]

2.1 For any $u\in\mathcal H_T^0$, set $f(\mathbf k)=\sqrt{2|\mathbf k|}\,u(\mathbf k)$. Then
$$\|f\|_{L^2(d\nu)}^2=\int_M 2|\mathbf k|\,|u(\mathbf k)|^2\frac{d^3\mathbf k}{2|\mathbf k|}=\|u\|_{L^2(d^3\mathbf k)}^2,$$
so $f\in L^2(d\nu;\mathbb C^3)$, $Wf=u$, and $\mathbf k\cdot f(\mathbf k)=\sqrt{2|\mathbf k|}\,\mathbf k\cdot u(\mathbf k)=0$ almost everywhere. Conversely, multiplication by the positive finite scalar $(2|\mathbf k|)^{-1/2}$ preserves the transverse condition. Lebesgue measure and $\nu$ have the same null sets on $M$: on every annulus $1/m\le|\mathbf k|\le m$ their density ratio is bounded above and below by positive constants, and these annuli cover $M$. Thus $W$ maps $\mathcal H_T^\nu$ onto $\mathcal H_T^0$. The isometry and surjectivity transfer completeness from the Hilbert space [F1] to $\mathcal H_T^\nu$, so $W$ is unitary. [A1, F1, F3, step 1.1, given, construct] ∎
