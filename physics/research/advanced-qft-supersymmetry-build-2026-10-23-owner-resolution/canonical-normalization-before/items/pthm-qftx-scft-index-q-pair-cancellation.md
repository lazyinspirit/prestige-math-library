---
id: pthm-qftx-scft-index-q-pair-cancellation
kind: physics-theorem
title: Positive-Supercharge Pair Cancellation in the Superconformal Index
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 9
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-susy-scft-and-frontier
deps:
  - def-qftx-scft-protected-data
dependency_roles:
  def-qftx-scft-protected-data: formulation-prerequisite
physical_scope: "Conditional trace identity for a discrete unitary superconformal Hilbert-space representation with the stated operator domains and trace-class assumptions. It does not construct a continuum N=4 quantum field theory or prove invariance under changes of coupling."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Justin Kinney, Juan Maldacena, Shiraz Minwalla, and Suvrat Raju, An Index for 4 Dimensional Super Conformal Theories"
      url: "https://arxiv.org/pdf/hep-th/0510251v1"
      locator: "§3, equations (3.1)–(3.3), printed pp. 12–13: the positive supercharge anticommutator, pairing of positive-Delta states, and index trace."
    - title: "David Tong, Supersymmetric Field Theory"
      url: "https://www.damtp.cam.ac.uk/user/tong/susy/susy.pdf"
      locator: "§§2.2–2.3 and 6.4.2, printed pp. 23–35 and 193–194, for the unitary superalgebra representation and index context."
verification:
  precheck: pending
---

## Statement

Let $\mathcal H=\mathcal H^{\bar 0}\oplus\mathcal H^{\bar 1}$ be a $\mathbb Z_2$-graded Hilbert space in a unitary representation of the selected four-dimensional superconformal algebra. Let $Q$ be the selected odd supercharge and $S=Q^\dagger$ its Hilbert adjoint. Assume a common invariant dense domain $D$ on which $Q^2=S^2=0$ and

$$\delta=2(SQ+QS)$$

is positive and extends to a self-adjoint operator. Assume further that $\mathcal H$ is the orthogonal direct sum of finite-dimensional eigenspaces $\mathcal H_\lambda$ of $\delta$, indexed by a countable set $\Lambda\subseteq[0,\infty)$, each contained in $D$, and that $Q$ and $S$ preserve each $\mathcal H_\lambda$. Let $U$ be a bounded even operator commuting with $Q$, $S$, and $\delta$, and assume $e^{-\beta\delta}U$ is trace class for every $\beta>0$. Define

$$\mathcal I(\beta)=\operatorname{Tr}_{\mathcal H}\!\left((-1)^F e^{-\beta\delta}U\right),$$

where $(-1)^F$ acts as $+1$ on $\mathcal H^{\bar 0}$ and $-1$ on $\mathcal H^{\bar 1}$. Then

$$\mathcal I(\beta)=\operatorname{Tr}_{\ker\delta}\!\left((-1)^F U\right)$$

for every $\beta>0$. In particular, this trace is independent of $\beta$, and $\ker\delta=\ker Q\cap\ker S$. The conclusion applies to the superconformal index only when its Hilbert-space, operator-domain, spectral, commuting-charge, and trace hypotheses above hold; it makes no conclusion for continuous spectrum or a non-trace-class formal path integral.

## Statement references

[Kinney, Maldacena, Minwalla, and Raju, §3, equations (3.1)–(3.3)](https://arxiv.org/pdf/hep-th/0510251v1)

[David Tong, *Supersymmetric Field Theory*, §§2.2–2.3 and 6.4.2](https://www.damtp.cam.ac.uk/user/tong/susy/susy.pdf)

## Facts & Assumptions

**Given:** The selected superconformal-index operator $\delta$, a discrete unitary $\mathbb Z_2$-graded Hilbert representation, the invariant domain and finite-dimensional eigenspaces specified in the statement, and the trace-class commuting insertion $U$.

[F1] [[def-qftx-scft-protected-data]]: the chosen radial-quantization index uses the supercharge pair $S=Q^\dagger$ and $\delta=2\{S,Q\}$; admissible chemical-potential insertions commute with both supercharges and preserve fermion parity.

[A1] The eigenspaces of $\delta$ form the stated orthogonal countable direct sum, have finite dimension, lie in the common invariant domain, and are preserved by $Q$, $S$, and $U$; the weighted heat operator is trace class for each $\beta>0$.



## Proof

1.1 For $\lambda>0$, define $K_\lambda=(Q+S)|_{\mathcal H_\lambda}$. Since $Q^2=S^2=0$ and $\delta=2(SQ+QS)$, $K_\lambda$ is an odd self-adjoint operator and $K_\lambda^2=\lambda I/2$. Hence $B_\lambda=\sqrt{2/\lambda}\,K_\lambda$ is an odd involution on the finite-dimensional eigenspace: it maps $\mathcal H_\lambda^{\bar0}$ bijectively to $\mathcal H_\lambda^{\bar1}$ and conversely. [given, F1, A1, algebra]

2.1 The operator $U$ commutes with $K_\lambda$, so the two parity subspaces have equal $U$-traces under the bijection $B_\lambda$. Therefore $\operatorname{Tr}_{\mathcal H_\lambda}((-1)^F U)=0$ for every $\lambda>0$. Trace class in [A1] permits the eigenspace traces to be summed; only $\mathcal H_0=\ker\delta$ contributes, where $e^{-\beta\delta}=I$. [given, F1, A1, step 1.1, algebra]

3.1 For $\psi\in\ker\delta$, positivity and $\delta=2(SQ+QS)$ give $0=\langle\psi,\delta\psi\rangle=2(\|Q\psi\|^2+\|S\psi\|^2)$, so $Q\psi=S\psi=0$. Conversely, $Q\psi=S\psi=0$ implies $\delta\psi=0$. Thus $\ker\delta=\ker Q\cap\ker S$, and the remaining trace is exactly the stated trace on that joint kernel. [given, A1, step 2.1, algebra] ∎
