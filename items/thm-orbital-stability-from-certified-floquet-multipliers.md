---
id: thm-orbital-stability-from-certified-floquet-multipliers
kind: theorem
title: "Strict Floquet cluster enclosures certify orbital asymptotic stability"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 10
deps:
  - alg-validated-periodic-orbit-corrector
  - lem-rational-box-affine-chart-and-dyadic-enclosure
  - thm-floquet-multiplier-cluster-certificate-soundness
  - thm-validated-periodic-orbit-certificate-soundness
  - lem-periodic-poincare-spectrum-matches-transverse-monodromy
  - thm-poincare-map-stability-implies-orbital-stability
  - lem-autonomous-periodic-orbit-has-neutral-floquet-multiplier
  - lem-phase-bordered-shooting-jacobian-invertibility
  - alg-krawczyk-root-certification
  - lem-complex-infinity-neumann-inverse-norm-bound
  - lem-c1-euclidean-maximal-flow-with-c2-upgrade
  - thm-chain-rule-for-total-derivatives
  - def-eigenvalue-eigenvector-eigenspace-and-spectrum
  - thm-jordan-form-exists-iff-the-characteristic-polynomial-splits
  - thm-spectrum-is-the-root-set-of-the-characteristic-polynomial
  - lem-characteristic-polynomial-is-monic-and-has-extreme-coefficients
  - thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Y. A. Kuznetsov, Elements of Applied Bifurcation Theory, 2nd ed., Chapter 1, §1.5"
      url: "https://www.ma.imperial.ac.uk/~dturaev/kuznetsov.pdf"
      locator: "Complete 614-page second-edition PDF retrieved; inspected printed pp. 26–30 on transverse sections, return maps, variational equation, monodromy, and phase multiplier."
    - title: "E. J. Doedel and B. E. Oldeman, AUTO-07P full manual (2021)"
      url: "https://raw.githubusercontent.com/auto-07p/auto-07p/master/doc/auto.tex"
      locator: "Full 12,856-line manual retrieved; inspected periodic families/Floquet source lines 587–645, ISP warning lines 4926–4950, and phase-shifting demo ph1 lines 6822–6863."
---

## Statement

Let an exact nonconstant phase-fixed periodic orbit and monodromy matrix $M_*$ be supplied by a sound periodic-orbit certificate. Suppose $M_*$ belongs to a matrix family with a certified complete cluster list of pairwise disjoint filled convex polygons $P_0,\ldots,P_s$: each count is certified by [[thm-floquet-multiplier-cluster-certificate-soundness]], the counts sum to the state dimension $d$, $1\in\operatorname{int}P_0$, and the count in $P_0$ is one. Suppose also that for each $j\ge1$, $P_j\subset\{z:|z|\le1-\sigma\}$ for one supplied $\sigma>0$. Then the periodic orbit is orbitally asymptotically stable. If any non-phase cluster enclosure meets or intersects the unit circle, these hypotheses fail and this theorem gives no stability verdict.

## Facts & Assumptions

**Given:** A nonconstant periodic solution of positive period $T$, its phase section, its monodromy matrix in the certified matrix family, and the complete disjoint cluster list with the stated counts and strict disk margin.

[F1] The orbit certificate supplies an exact periodic solution, positive period, and a monodromy matrix contained in its validated family ([[thm-validated-periodic-orbit-certificate-soundness]]).

[F2] The phase tangent is an eigenvector of the monodromy with multiplier $1$ ([[lem-autonomous-periodic-orbit-has-neutral-floquet-multiplier]]).

[F3] Every successful polygon count is valid for each matrix in the supplied family and counts algebraic multiplicities ([[thm-floquet-multiplier-cluster-certificate-soundness]]).

[F4] For a least-period orbit with simple phase multiplier and transverse affine section, the Poincare derivative has exactly the other monodromy multipliers ([[lem-periodic-poincare-spectrum-matches-transverse-monodromy]]).

[F5] For a $C^1$ autonomous field and a transverse section, if every eigenvalue of the $C^1$ Poincare return map derivative lies strictly inside the unit disk, the orbit is orbitally asymptotically stable ([[thm-poincare-map-stability-implies-orbital-stability]]).

[F6] The $C^2$ autonomous field supplied by the orbit certificate has a unique maximal $C^2$ flow with time derivative $f(\phi_t(x))$ ([[lem-c1-euclidean-maximal-flow-with-c2-upgrade]]). Uniqueness identifies a shifted trajectory with the solution from its shifted initial state, giving the flow law on the common domain. Composition derivatives obey the chain rule ([[thm-chain-rule-for-total-derivatives]]). Eigenvectors have the meaning of [[def-eigenvalue-eigenvector-eigenspace-and-spectrum]], and generalized vectors are supplied by [[thm-jordan-form-exists-iff-the-characteristic-polynomial-splits]]. Algebraic multiplicity means characteristic-polynomial root multiplicity.

[F7] The corrector's record supplies the original-box affine chart $z=a+Du$ with positive diagonal $D$ and a nonsingular preconditioner $C$ for the normalized residual. For each physical shooting Jacobian $J$ in the certified root box, its verified contraction gives $\|I-CJD\|_\infty\le q<1$. The chart transfers nonsingularity of $CJD$ to $J$ ([[alg-validated-periodic-orbit-corrector]], [[alg-krawczyk-root-certification]], [[lem-rational-box-affine-chart-and-dyadic-enclosure]]).

[F8] A complex square matrix $E$ with $\|E\|_{\infty,\mathbb C}<1$ has $I-E$ invertible ([[lem-complex-infinity-neumann-inverse-norm-bound]]); the phase-bordered Jacobian criterion identifies nonsingularity with a simple neutral multiplier and transverse phase ([[lem-phase-bordered-shooting-jacobian-invertibility]]).

[F9] The characteristic polynomial of a $d\times d$ matrix is monic of degree $d$ ([[lem-characteristic-polynomial-is-monic-and-has-extreme-coefficients]]), its roots are exactly its eigenvalues ([[thm-spectrum-is-the-root-set-of-the-characteristic-polynomial]]), and it has exactly $d$ complex roots counted with multiplicity ([[thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity]]).

## Proof

1.1 By [F1]–[F3], exactly one multiplier of $M_*$ lies in $P_0$, and it is $1$ by [F2]. Thus the algebraic multiplicity of $1$ for $M_*$ is one. Every other multiplier lies in one of the polygons $P_j$, $j\ge1$: their counts together with the count one in $P_0$ sum to $d$, while [F9] says a $d\times d$ characteristic polynomial has exactly $d$ roots counted with multiplicity. The remaining multipliers therefore all have modulus at most $1-\sigma<1$. [F1, F2, F3, F9, given, algebra]

2.1 Nonconstancy and flow uniqueness [F6] imply $f(\gamma(0))\ne0$, since otherwise the constant solution through $\gamma(0)$ would be the unique trajectory. Define $H=\{t\in\mathbb R:\gamma(t)=\gamma(0)\}$. Flow uniqueness makes $H$ an additive subgroup: a return to $\gamma(0)$ repeats the entire trajectory, so sums and differences of return times are return times. Continuity makes $H$ closed. One coordinate has nonzero derivative at zero and is strictly monotone on a sufficiently short interval; hence $H$ has no nonzero element there. Its positive infimum $S$ is therefore positive and belongs to $H$ by closedness. For any positive period $T$, division by $S$ gives $T=kS+r$ with integer $k\ge1$ and $0\le r<S$; the subgroup property gives $r\in H$, so minimality forces $r=0$. Thus $T=kS$, where $S$ is the least positive period. [F1, F6, step 1.1, given, algebra]

3.1 Let $M_S$ be the monodromy over $S$. By flow composition and the chain rule [F6], $M_*=M_S^k$. The phase tangent is a $1$ eigenvector of $M_S$ by [F2]. If $M_Sv=\alpha v$ with $\alpha^k\ne1$, then $M_*v=\alpha^kv$ is a non-phase eigenvalue of $M_*$, so step 1.1 gives $|\alpha|^k<1$ and $|\alpha|<1$. If $\alpha^k=1$ and $\alpha\ne1$, then $v$ and the phase tangent are independent eigenvectors of $M_*$ for eigenvalue $1$, contradicting its algebraic simplicity. If $\alpha=1$ and there were an eigenvector independent of the phase tangent, the same contradiction follows. If the eigenvalue $1$ of $M_S$ had a nontrivial Jordan chain, [F6] gives a generalized vector $v$ with $(M_S-I)v=f(\gamma(0))$ after rescaling. Then $(M_* - I)v=(M_S^k-I)v=k f(\gamma(0))\ne0$, contradicting the algebraic simplicity of $1$ for $M_*$. Hence $1$ is simple for $M_S$ and every other eigenvalue of $M_S$ is strictly inside the unit circle. [F2, F6, step 1.1, step 2.1, algebra]

4.1 The orbit with period $S$ is least-period by step 2.1. The certificate [F1] validates the phase-bordered shooting Jacobian for the possibly repeated period $T$, and that is the Jacobian used in the following nonsingularity check. For the exact real Jacobian $J$ at that root, [F7] gives $\|I-CJD\|_\infty<1$ with the recorded positive diagonal scale $D$. Regard $I-CJD$ as a complex matrix; [F8] makes $CJD$ invertible over $\mathbb C$ and hence over $\mathbb R$. The affine-chart transfer in [F7] then makes $J$ invertible; explicitly, $J^{-1}=D(CJD)^{-1}C$. Step 1.1 gives a simple phase multiplier, so the bordered criterion in [F8] implies $c^\top f(\gamma(0))\ne0$. The same affine phase is therefore transverse for the least-period orbit. Apply [F4] to identify the Poincare derivative eigenvalues with all non-phase eigenvalues of $M_S$; step 3.1 places them strictly inside the unit circle. [F1, F4, F7, F8, step 1.1, step 2.1, step 3.1]

5.1 The certificate field is $C^2$ and its affine phase section is smooth; [F4]'s hypotheses therefore give a $C^1$ Poincare return map. Its derivative has no unit-circle multiplier, and all its eigenvalues are strictly inside by step 4.1. Shrink the section to a relatively compact patch whose closure meets the orbit only at $\gamma(0)$: transversality isolates that intersection along a short orbit arc, and the remaining compact arc stays away from $\gamma(0)$ by the least-period property. Apply the $C^1$ theorem [F5] on this patch to conclude orbital asymptotic stability. [F4, F5, F6, step 2.1, step 4.1] ∎
