---
id: lem-ip-planar-beltrami-cgo-power-phase-decay
kind: lemma
title: Uniform power phase decay for Beltrami CGO solutions
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - lem-ip-planar-measurable-beltrami-cgo-solutions
  - lem-ip-planar-principal-beltrami-inverse-gradient-integrability
  - lem-ip-planar-qc-composition-preserves-power-translation-moduli
  - lem-ip-planar-oscillatory-beltrami-phase-decay
  - lem-inverse-of-a-quasiconformal-map-is-quasiconformal
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Faraco and Prats, Characterization for stability in planar conductivities"
      url: "https://arxiv.org/pdf/1701.06480"
      locator: "Section 4.3, Theorem 4.13 and complete inverse-phase argument, printed pp. 25–27."
dependency_level: 3
---

## Statement

Assume the Axiom of Choice and Countable Choice. Fix $0<\kappa<1$, choose $2<r\le p_\kappa$, and put $p=4r/(r-2)$. Suppose $\mu\in L^\infty(\mathbb C;\mathbb C)$ is supported in $D_1$, $\|\mu\|_\infty\le\kappa$, and $\omega_p(\mu,t)\le At^\theta$ for $0<t\le1$, with fixed $A>0$ and $0<\theta\le1$. Let $f_\mu(z,k)=e^{ik\Phi_\mu(z,k)}$ be its measurable-coefficient Beltrami CGO solution and principal phase. There exist constants $C,b>0$, depending only on $\kappa,r,A,\theta$, such that
$$|\Phi_\mu(z,k)-z|\le C\min\{(1+|z|)^{-1},|k|^{-b}\}\qquad(z\in\mathbb C,\ |k|\ge1).$$
The same constants apply to every coefficient $\lambda\mu$, $|\lambda|=1$.

## Statement references

[[lem-ip-planar-measurable-beltrami-cgo-solutions|Measurable CGO solutions and their principal quasiconformal phases.]]

[[lem-ip-planar-qc-composition-preserves-power-translation-moduli|The power modulus under the inverse phase change of variables.]]

[[lem-ip-planar-oscillatory-beltrami-phase-decay|Decay for a complex-linear Beltrami equation with an oscillatory coefficient.]]

## Facts & Assumptions

**Given:** The Axiom of Choice and Countable Choice and the data in the statement.

[F1] The CGO phase $\Phi$ is a principal quasiconformal homeomorphism, conformal outside $\overline D_1$, with uniform deformation bounds and $|\Phi(z)-z|\le C/(1+|z|)$. Its inverse has the same dilatation and the standard inverse derivative identity. ([[lem-ip-planar-measurable-beltrami-cgo-solutions]], [[lem-ip-planar-principal-beltrami-inverse-gradient-integrability]], [[lem-inverse-of-a-quasiconformal-map-is-quasiconformal]])

[F2] If $p=4r/(r-2)$ and $\omega_p(\mu,t)\le At^\theta$, then composition with the inverse of any principal phase in [F1] gives a uniformly bounded-support coefficient with $L^4$ translation modulus at most $Ct^{\theta'}$, where $\theta'=\theta(1-2/r)/(1+\theta)>0$. ([[lem-ip-planar-qc-composition-preserves-power-translation-moduli]])

[F3] A principal solution of $\bar\partial\Psi=c e^{iv\cdot w}\widetilde\mu\partial\Psi$, with $|c|=1$, $|\widetilde\mu|\le\kappa$, fixed bounded support and uniform positive power $L^4$ translation modulus, has $\|\Psi-w\|_\infty\le C|v|^{-b}$ for some uniform $b>0$. ([[lem-ip-planar-oscillatory-beltrami-phase-decay]])

[A1] The Axiom of Choice and Countable Choice are used at [F1]–[F3]. ([[def-axiom-of-choice]], [[def-countable-choice]])

## Proof

**Given:** The data in the statement and $|k|\ge1$.

1.1 Write $\Phi=\Phi_\mu(\cdot,k)$ and $\Psi=\Phi^{-1}$. The equation $\bar\partial f=\mu\overline{\partial f}$ with $f=e^{ik\Phi}$ gives $\bar\partial\Phi=-(\overline k/k)\mu e^{-i(k\Phi+\overline k\overline\Phi)}\overline{\partial\Phi}$. The nonvanishing exponential permits division, and all derivatives agree almost everywhere by [F1]. Apply the inverse derivative identity: its two derivative factors cancel the quotient $\overline{\partial\Phi}/\partial\Phi$, leaving $\bar\partial\Psi(w)=(\overline k/k)e^{-i(kw+\overline k\overline w)}\mu(\Psi(w))\partial\Psi(w)$. Thus this is a complex-linear Beltrami equation with oscillation vector of length $2|k|$ and coefficient $\widetilde\mu=\mu\circ\Psi$. Its support lies in the fixed disk containing $\Phi(D_1)$ by [F1]. [A1, F1, given, algebra]

2.1 By [F2], $\widetilde\mu$ has uniform positive power $L^4$ translation modulus; its supremum bound remains $\kappa$, with almost-everywhere composition justified by null-set preservation in [F1]. It is legitimate that $\widetilde\mu$ depends on $k$, because [F3] is uniform over the entire coefficient family with these support and modulus bounds. Apply [F3] to the equation in step 1.1 to obtain $\|\Psi-w\|_\infty\le C|k|^{-b}$. Since $\Phi$ is onto, $|\Phi(z)-z|=|\Phi(z)-\Psi(\Phi(z))|\le C|k|^{-b}$. Combine this with the spatial decay in [F1] to obtain the stated minimum bound. Multiplication of $\mu$ by a unimodular constant preserves every support, supremum and translation-modulus hypothesis; the constants therefore work for all $\lambda\mu$. [F1, F2, F3, step 1.1, algebra] ∎
