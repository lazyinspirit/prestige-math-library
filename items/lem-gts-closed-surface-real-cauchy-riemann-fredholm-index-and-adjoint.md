---
id: lem-gts-closed-surface-real-cauchy-riemann-fredholm-index-and-adjoint
kind: lemma
title: Closed-surface real Cauchy–Riemann index and smooth adjoint obstructions
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
proof_strategy: direct
axiom_strength: Full AC, through the published complex Dirac index and compact Sobolev suppliers.
deps:
  - def-axiom-of-choice
  - def-graded-hermitian-clifford-module-and-geometric-dirac
  - def-ahat-and-relative-chern-character-forms
  - thm-geometric-clifford-module-dirac-index-formula
  - thm-plancherel
  - thm-bounded-inverse-theorem
  - thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity
  - thm-fredholm-index-is-stable-under-compact-perturbations
  - thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle
  - cor-euler-number-of-the-tangent-bundle-is-the-euler-characteristic
  - thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals
  - lem-countable-choice-cauchy-riemann-similarity-and-unique-continuation
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-graded-hermitian-clifford-module-and-geometric-dirac: mathematical-premise
  def-ahat-and-relative-chern-character-forms: mathematical-premise
  thm-geometric-clifford-module-dirac-index-formula: mathematical-premise
  thm-plancherel: mathematical-premise
  thm-bounded-inverse-theorem: mathematical-premise
  thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity: mathematical-premise
  thm-fredholm-index-is-stable-under-compact-perturbations: mathematical-premise
  thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle: mathematical-premise
  cor-euler-number-of-the-tangent-bundle-is-the-euler-characteristic: mathematical-premise
  thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals: mathematical-premise
  lem-countable-choice-cauchy-riemann-similarity-and-unique-continuation: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Chris Wendl, Lectures on Holomorphic Curves in Symplectic and Contact Geometry
      url: https://arxiv.org/pdf/1011.1690v2
      locator: Closed-curve index and adjoint argument in §§3–4; the arbitrary-rank index below is derived from the actual local complex Dirac supplier.
dependency_level: 2
---

## Statement

Assume full AC. Let $(\Sigma,j)$ be a connected compact closed Riemann surface of genus $g$, with a smooth compatible metric, and let $E\to\Sigma$ be a smooth Hermitian complex bundle of rank $n$. Put $G=\Lambda^{0,1}T^*\Sigma\otimes E$. A real Cauchy–Riemann operator is a smooth real-linear first-order operator $P:\Gamma(E)\to\Gamma(G)$ whose principal symbol is that of $\bar\partial$; its zeroth-order term need not be complex linear. For every integer $q\ge0$, the operator $P:H^{q+1}(E)\to H^q(G)$ is real Fredholm of index
$$2n(1-g)+2\langle c_1(E),[\Sigma]\rangle.$$
The Sobolev norms are finite-chart weak-derivative norms. Kernels are smooth and independent of $q$; the higher range is $H^q\cap\operatorname{Ran}(P:H^1\to L^2)$, and the higher cokernel is canonically the same finite-dimensional cokernel.

Every $L^2$ section annihilating $\operatorname{Ran}P$ is smooth and solves the actual formal adjoint equation. If nonzero, it cannot vanish on any nonempty source open set. The same conclusion applies to an annihilator of the augmented range $P(H^1)+V$, for any subspace $V$ of smooth target sections. This augmented range is closed, and it is all $L^2$ exactly when its smooth adjoint annihilator is zero. When $V$ is finite dimensional, surjectivity is equivalent at every higher Sobolev order and gives a bounded right inverse there.

## Statement references

[[thm-geometric-clifford-module-dirac-index-formula]]

[[lem-countable-choice-cauchy-riemann-similarity-and-unique-continuation]]

## Facts & Assumptions

**Given:** Full AC and the closed smooth complex-bundle data in the Statement.

[F1] The geometric complex Clifford-module Dirac theorem gives actual $H^1\to L^2$ Fredholmness and complex index $\int\widehat A\operatorname{ch}(V/S)$. Its definitions fix the curvature normalization $\operatorname{ch}(W)=\operatorname{tr}\exp(-F^W/(2\pi i))$. [[def-graded-hermitian-clifford-module-and-geometric-dirac]] [[def-ahat-and-relative-chern-character-forms]] [[thm-geometric-clifford-module-dirac-index-formula]]

[F2] The compact Laplace-type bundle theorem supplies the finite-chart Hilbert Sobolev spaces, smooth density, compact inclusions $H^{q+1}\hookrightarrow H^q$, higher embedding, and actual elliptic estimates. Compact perturbations preserve the Fredholm index. Plancherel identifies the integer derivative norms with their weighted Fourier norms, and the bounded inverse theorem applies to Hilbert range complements. [[thm-plancherel]] [[thm-bounded-inverse-theorem]] [[thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity]] [[thm-fredholm-index-is-stable-under-compact-perturbations]]

[F3] Chern–Weil identifies the curvature forms with their real characteristic classes; the first Chern class of the complex tangent line is its oriented real Euler class, whose evaluation is $\chi(\Sigma)=2-2g$. [[thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals]] [[thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle]] [[cor-euler-number-of-the-tangent-bundle-is-the-euler-characteristic]]

[F4] The actual bounded-matrix similarity theorem gives continuation from an open set for a weak $W^{1,p}$ real Cauchy–Riemann system, $p>2$, including a smooth variable principal complex structure. [[lem-countable-choice-cauchy-riemann-similarity-and-unique-continuation]]

[A1] Full AC is required by the geometric Dirac-index supplier in [F1] and the compact Sobolev suppliers in [F2]. No additional choice is used in the local multiplier, curvature or finite-dimensional range calculations below. [[def-axiom-of-choice]]

## Proof

1.1 Choose a unitary connection on $E$. On the complex surface of real dimension two, the compatible Levi–Civita connection preserves $j$: in an oriented orthonormal frame its connection matrix commutes with the quarter-turn. Thus $V=\Lambda^{0,*}T^*\Sigma\otimes E$, with even part $E$ and odd part $G$, has the unitary product connection and Clifford action $c(\alpha)=\sqrt2(\alpha^{0,1}\wedge-\iota_{(\alpha^{1,0})^\sharp})$. In a unitary coframe these matrices square to minus the squared covector norm, are skew Hermitian and interchange the two degrees. The connection preserves this action because it preserves $j$, the metric and wedge/contraction. Directly on degree-zero sections its chiral operator is $D_V^+=\sqrt2\bar\partial_\nabla$. These verify all module hypotheses of [F1]; no Spin structure on the surface is required. [F1, given, construct, algebra]

1.2 We record weak first-order regularity, including the initial regularity needed for an adjoint. In conformal source and complex bundle coordinates, multiply the equation by a smooth invertible scalar factor to put its principal part in the form $D_0=\partial_x+i\partial_y$ (for the adjoint, reverse the $x$ coordinate). A smooth real-linear zeroth-order matrix remains. If a compactly supported distribution $w\in H^s(\mathbb R^2)$ satisfies $(D_0+C)w=f$, use a smooth frequency cutoff $\chi$, zero near zero and one outside the radius-two disk. The multiplier $Q(\xi)=\chi(\xi)\sigma(D_0)(\xi)^{-1}$ maps $H^s$ boundedly to $H^{s+1}$ for every integer $s$, by its explicit weighted $L^2$ Fourier bound. Its complementary low-frequency multiplier $1-Q\sigma(D_0)$ maps $H^s$ to every higher order. For nested spatial cutoffs the identity $\rho w=Q(D)(\rho f-\rho Cw+[D_0,\rho]w)+(1-Q(D)D_0)(\rho w)$ gains one derivative whenever $f$ has the current order. Smooth coefficient multiplication is bounded at nonnegative integer orders by Leibniz; the commutator is zeroth order. Starting at $L^2$ this proves smoothness for a homogeneous weak equation, and starting at $H^1$ proves the estimate $\|w\|_{H^{q+1}(K)}\le C(\|Pw\|_{H^q(U)}+\|w\|_{H^1(U)})$ on nested patches. Fourier Cauchy–Schwarz and [F2]'s embeddings turn arbitrary high Sobolev order into smoothness. A finite patch cover gives the global estimate. This argument uses explicit multipliers only, not an unproved general first-order parametrix theorem. [F2, given, construct, algebra]

2.1 We compute its relative curvature rather than assume a vector-bundle Riemann–Roch formula. Write $F^T$ for the curvature of $T^{1,0}\Sigma$. The line $\Lambda^{0,1}T^*\Sigma$ has the same curvature, so the curvature on the two summands of $V$ is $F^E$ and $F^E+F^TI$. In an oriented orthonormal frame $c(e^1)c(e^2)$ has diagonal entries $-i,i$. Its traceless spin-connection curvature is therefore $\operatorname{diag}(-F^T/2,F^T/2)$: this follows also by taking the commutator with the two Clifford matrices, which reproduces their covariant derivatives. Subtraction leaves the same multiplicity curvature $F^E+(F^T/2)I$ in both summands. Consequently $\widehat A$ has degree-zero part1 and no degree-two part, and the degree-two relative character is $c_1(E)+(n/2)c_1(T\Sigma)$ with [F1]'s normalization. By [F3] its integral is $\langle c_1(E),[\Sigma]\rangle+n(1-g)$. Thus [F1] gives this COMPLEX index for $\bar\partial_\nabla$. Its real index is twice that number. [F1, F3, step 1.1, algebra]

2.2 In a local real frame write $2P=\partial_x+J\partial_y+A$ and let $G_0$ be the smooth positive pairing-density matrix. An $L^2$ annihilator $\eta$ obeys $-v_x-\partial_y(J^{\mathsf T}v)+A^{\mathsf T}v=0$ distributionally, where $v=G_0\eta$. Equivalently $v_x+J^{\mathsf T}v_y+(\partial_yJ^{\mathsf T}-A^{\mathsf T})v=0$. Since $(J^{\mathsf T})^2=-I$, a smooth local frame change reduces its principal part to the constant one in step 1.2; explicitly $\Phi=(I-J^{\mathsf T}i)/2$ intertwines $i$ and $J^{\mathsf T}$ near a point in coordinates making the latter equal to $i$ there. Hence $\eta$ is smooth. If it vanishes on an open set, [F4] applied in these actual local adjoint coordinates makes it vanish on the connected surface. There was no assumption that an arbitrary higher-Sobolev dual functional is initially an $L^2$ function. [F4, step 1.2, construct, algebra]

3.1 The operator $P-\bar\partial_\nabla$ has zero principal symbol and so is a smooth real-linear multiplication map. It factors as the compact inclusion $H^1(E)\hookrightarrow L^2(E)$ followed by bounded multiplication. By [F2], $P:H^1\to L^2$ is therefore Fredholm of the real index in the Statement. This includes the zero-rank case, in which both spaces and index are zero. [F2, step 2.1, algebra]

4.1 Thus the higher kernels are the same smooth finite kernel, and $\operatorname{Ran}P_q=H^q\cap\operatorname{Ran}P_0$: if an $H^q$ target has an $H^1$ preimage, step 1.2 promotes it to $H^{q+1}$. This intersection is closed. Smooth targets are dense in $L^2$ by [F2], so their images span the finite-dimensional quotient $L^2/\operatorname{Ran}P_0$; a dense linear subspace of a finite-dimensional space is the whole space. Inclusion consequently identifies the higher quotient with that same finite cokernel. This proves all asserted Fredholm realizations and indices. [F2, step 3.1, step 1.2, algebra]

5.1 Let $q:L^2\to L^2/\operatorname{Ran}P_0$. Then $P(H^1)+V=q^{-1}(q(V))$. The image $q(V)$ is a subspace of a finite-dimensional space, hence closed, so the augmented range is closed. Hilbert orthogonal projection says it is all $L^2$ exactly when it has no nonzero annihilator. Any such annihilator already annihilates $P$ and is therefore the smooth section in step 2.2. For finite-dimensional smooth $V$, the higher and $L^2$ augmented ranges have the same quotient by step 4.1. Surjectivity consequently agrees at all levels. A surjective bounded operator between these Hilbert spaces has a bounded right inverse on its kernel orthogonal complement, by the bounded inverse theorem. This proves the augmented assertions as well. [F2, step 4.1, step 2.2, construct, algebra] ∎
