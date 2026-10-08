---
id: ex-bergman-versus-szego-normalization-on-the-disc
kind: example
title: Bergman versus Szegő normalization on the disc
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 6
proof_strategy: direct
deps:
  - def-analytic-hardy-space-disc
  - def-bergman-space-and-kernel
  - def-countable-choice
  - def-szego-kernel-smooth-bounded-domain
  - def-the-one-dimensional-torus-and-normalized-haar-integral
  - thm-model-domain-bergman-and-szego-kernels
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
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
        §5.2 Example 5.2.3, printed p. 162: the disc Bergman kernel
        1/(π(1−zζ̄)²) against planar area measure; §5.3 Example 5.3.1,
        printed pp. 165–166: the disc Szegő kernel 1/(2π(1−zζ̄)) against
        arc-length measure, which becomes 1/(1−zw̄) for the normalized Haar
        probability. The model-kernel theorem records the same formulas in
        the library's measure conventions.
---

## Example

Let $\mathbb D\subseteq\mathbb C$ be the unit disc with Lebesgue area measure
$\lambda_2$, and let $\mathbb T=\partial\mathbb D$ carry the normalized Haar
probability $m$ of [[def-the-one-dimensional-torus-and-normalized-haar-integral]].
The diagonal Bergman and Szegő kernels of
[[thm-model-domain-bergman-and-szego-kernels]] are

$$K_{\mathbb D}(z,z)=\frac{1}{\pi(1-|z|^2)^2},\qquad S_{\mathbb D}(z,z)=\frac{1}{1-|z|^2},\qquad z\in\mathbb D,$$

the first relative to Lebesgue area measure on $\mathbb D$ and the second
relative to $m$. In particular $K_{\mathbb D}(0,0)=1/\pi$ while
$S_{\mathbb D}(0,0)=1$. The two kernels are reproducing kernels of different
Hilbert spaces — $A^2(\mathbb D)$ for the area pairing, and the disc Hardy
space of boundary traces for the Haar pairing — and their boundary blow-up
exponents are $2$ and $1$: the two normalizations are comparable only after the
measure is declared.

## Facts & Assumptions

[A1] The only choice assumption is $\mathrm{AC}_\omega$ ([[def-countable-choice]]), inherited from the model-kernel theorem and from the Bergman and Szegő definitions; no full Axiom of Choice is used.

[F1] Under $\mathrm{AC}_\omega$, $A^2(\mathbb D)$ is the space of $L^2$ classes with a holomorphic representative for the area pairing, and its first-variable-linear kernel $K_{\mathbb D}$ is the Riesz kernel of evaluation; for a Szegő-regular pair $(\Omega,\sigma)$ the Szegő kernel is built from the Riesz representers of the extended boundary evaluations ([[def-bergman-space-and-kernel]], [[def-szego-kernel-smooth-bounded-domain]]).

[F2] The disc pair $(\mathbb D,\mu_{\mathbb T})$ is Szegő-regular, and the model theorem gives $K_{\mathbb D}(z,w)=\frac{1}{\pi(1-z\overline w)^2}$ and $S_{\mathbb D}(z,w)=\frac{1}{1-z\overline w}$ ([[thm-model-domain-bergman-and-szego-kernels]]).

[F3] The classical disc Hardy class $H^2(\mathbb D)$ consists of the holomorphic functions whose radial $L^2$ means are bounded, and $m$ is the normalized Haar probability carried by the boundary torus of the disc pair ([[def-analytic-hardy-space-disc]], [[def-the-one-dimensional-torus-and-normalized-haar-integral]]).

## Verification

**Proof technique:** direct substitution in the model formulas.

**Given:** $\mathrm{AC}_\omega$, the unit disc with its area measure, and the torus with normalized Haar measure.

1.1 Set $w=z$ in the two formulas of [F2]. Since $1-z\overline z=1-|z|^2>0$ on $\mathbb D$, the diagonal values are $K_{\mathbb D}(z,z)=\frac{1}{\pi(1-|z|^2)^2}$ and $S_{\mathbb D}(z,z)=\frac{1}{1-|z|^2}$; at $z=0$ these are $1/\pi$ and $1$. [A1, F2, given, algebra]

1.2 By [F1] the first kernel reproduces point evaluations in $A^2(\mathbb D)$ for the area pairing, while the second reproduces the extended evaluations of the Szegő-regular pair $(\mathbb D,\mu_{\mathbb T})$, whose Hardy space is its boundary-trace closure; [F3] records the classical radial-mean form of the disc Hardy class against the same normalized Haar boundary measure. [A1, F1, F2, F3]

2.1 As $|z|\to1$, the formulas of step 1.1 show $K_{\mathbb D}(z,z)=\frac{1}{\pi}(1-|z|^2)^{-2}$ and $S_{\mathbb D}(z,z)=(1-|z|^2)^{-1}$, so the boundary blow-up exponents are $2$ and $1$. Their ratio $K_{\mathbb D}(z,z)/S_{\mathbb D}(z,z)=\frac{1}{\pi(1-|z|^2)}$ is unbounded on $\mathbb D$; in particular the two diagonal kernels are not equal, so neither normalization may be read off the other without declaring which measure is used. [F1, F2, step 1.1] ∎
