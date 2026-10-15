---
id: lem-qft-mass-shell-measure-invariant
kind: lemma
title: Local finiteness and Lorentz invariance of the scalar shell measure
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 1
deps:
  - def-qft-scalar-mass-shell
  - def-countable-choice
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - def-sr-affine-minkowski-model
  - def-lorentz-form-and-inertia
  - def-time-orientation-and-future-causal-sets
  - def-causal-classification-of-lorentz-vectors
dependency_roles:
  def-qft-scalar-mass-shell: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Mark Srednicki, Quantum Field Theory, author draft, chapter 3
      url: https://www.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf
      locator: Complete author-hosted draft; equations 3.15–3.19 derive the positive-energy mass-shell measure.
    - title: David Tong, Quantum Field Theory, section 2.4.1
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S2.html
      locator: Author-hosted HTML text of chapter 2, section 2.4.1 equations 2.133–2.141 discusses Lorentz-invariant one-particle normalization; the complete lecture-note set is also listed as a 155-page PDF.
---

## Statement

Assume Countable Choice. For every $\mu\ge0$, the measure $d\nu_\mu$ of
[[def-qft-scalar-mass-shell]] is locally finite and sigma-finite on $H_\mu^+$.
For every proper orthochronous Lorentz transformation $\Lambda$ and every
nonnegative Borel function $g$ on $H_\mu^+$,
$$\int_{H_\mu^+}g(\Lambda^{-1}p)\,d\nu_\mu(p)
=\int_{H_\mu^+}g(p)\,d\nu_\mu(p).$$
The claim applies off the omitted apex when $\mu=0$.

## Facts & Assumptions

**Given:** Countable Choice, the shell parameterization, measure and metric
convention of [[def-qft-scalar-mass-shell]], and a proper orthochronous
Lorentz map $\Lambda$.

[A1] Assume Countable Choice. [[def-countable-choice]]

[F1] The shell is parameterized by $F_\mu(\mathbf k)=(\omega_\mu(\mathbf
k),\mathbf k)$; $-\eta(p,x)=p\circ x$ and
$d\nu_\mu=d^3\mathbf k/[(2\pi)^3\,2\omega_\mu(\mathbf k)]$.
[[def-qft-scalar-mass-shell]]

[F2] The affine Minkowski metric has signature $(-+++)$ in an inertial frame;
proper orthochronous Lorentz maps preserve that form, have determinant $+1$,
and preserve the chosen future timelike cone.
[[def-sr-affine-minkowski-model]]
[[def-lorentz-form-and-inertia]]
[[def-time-orientation-and-future-causal-sets]]
[[def-causal-classification-of-lorentz-vectors]]

[F3] Under Countable Choice, a $C^1$ diffeomorphism between open Euclidean
sets satisfies change of variables for every nonnegative Lebesgue-measurable
function. [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]

## Proof

1.1 On $\mathbf k\ne0$ if $\mu=0$, and on all $\mathbf k$ if $\mu>0$,
$F_\mu$ is a smooth chart of the shell. On every compact subset of this chart
the density $[(2\pi)^3 2\omega_\mu]^{-1}$ is bounded; for $\mu=0$ near the
omitted apex it is proportional to $|\mathbf k|^{-1}$, whose integral over a
radius-$r$ ball is proportional to $\int_0^r s\,ds<\infty$. Compact annuli,
and for $\mu>0$ compact balls, give a countable cover by finite-measure sets;
hence $d\nu_\mu$ is locally finite and sigma-finite. [F1, given, algebra]

2.1 Fix $\Lambda$ and write $F=F_\mu$, $F(\mathbf k')=\Lambda F(\mathbf k)$.
Because $\Lambda$ preserves the future shell, this defines a smooth
diffeomorphism $\mathbf k\mapsto\mathbf k'$ on the chart; let
$J=D\mathbf k'/D\mathbf k$. Put $q_0=(1,0,0,0)$. The columns of
$[q_0,DF(\mathbf k)]$ have determinant $1$. Differentiating
$\Lambda F(\mathbf k)=F(\mathbf k')$ gives
$\Lambda DF(\mathbf k)=DF(\mathbf k')J$, and therefore
$$1=\det[\Lambda q_0,DF(\mathbf k')]\det J.$$
For any $u\in\mathbb R^4$, direct expansion of the determinant gives
$\det[u,DF(\mathbf k')]=-\eta(u,F(\mathbf k'))/\omega_\mu(\mathbf k')$.
Take $u=\Lambda q_0$. Metric preservation and
$F(\mathbf k')=\Lambda F(\mathbf k)$ imply
$-\eta(\Lambda q_0,F(\mathbf k'))=-\eta(q_0,F(\mathbf k))
=\omega_\mu(\mathbf k)$. Thus $\det J=\omega_\mu(\mathbf k')/
\omega_\mu(\mathbf k)>0$. [F1, F2, step 1.1, algebra]

3.1 The change-of-variables theorem [F3] and the Jacobian from 2.1 give
$$\frac{d^3\mathbf k'}{\omega_\mu(\mathbf k')}
=\frac{\det J\,d^3\mathbf k}{\omega_\mu(\mathbf k')}
=\frac{d^3\mathbf k}{\omega_\mu(\mathbf k)}.$$
Multiplication by the constant $[2(2\pi)^3]^{-1}$ proves invariance for
nonnegative Borel functions. The massless apex is a
single omitted point and was never in the chart; the locally finite density
has no extra point mass there. [A1, F1, F3, step 2.1, given, algebra] ∎
