---
id: def-cmp4-moduli-mass-matrix-and-evolution-cutoff
kind: definition
title: Canonical moduli mass matrix and EFT scale-control data
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
category: string-theory
page: cmp-4d-moduli-effective-field-theory
dependency_level: 15
deps:
  - def-cmp-compactification-scale-hierarchy
  - def-cmp4-compactification-derived-moduli-eft-data
  - pthm-cmp-unwarped-four-dimensional-planck-scale
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - cor-second-order-taylor-expansion-with-the-hessian
dependency_roles:
  def-cmp-compactification-scale-hierarchy: formulation-prerequisite
  def-cmp4-compactification-derived-moduli-eft-data: formulation-prerequisite
  pthm-cmp-unwarped-four-dimensional-planck-scale: physical-result
  cor-real-spectral-theorem-for-self-adjoint-endomorphisms: mathematical-premise
  cor-second-order-taylor-expansion-with-the-hessian: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
physical_scope: "Finite-dimensional retained scalar EFTs in a declared four-dimensional Einstein frame, with a C2 potential and positive target metric; stability criteria are local Hessian or explicitly stated AdS scalar-mode tests, and omitted-mode scale claims require the actual compactification spectrum."
empirical_premises: []
sources:
  references:
    - title: "D. Baumann and L. McAllister, Inflation and String Theory, arXiv:1404.2601v1"
      url: "https://arxiv.org/pdf/1404.2601v1"
      locator: "§§6.2–6.5; Kähler moduli masses, KKLT/LVS scales, and regime qualifications."
    - title: "T. Van Riet and G. Zoccarato, Beginners lectures on flux compactifications and related Swampland topics, arXiv:2305.01722v2"
      url: "https://arxiv.org/pdf/2305.01722v2"
      locator: "§2.2, PDF pp. 7–8, qualitative Hessian and scale-control discussion; its displayed mass/radius convention is not used to fix the numerical BF coefficient here. §§4.3–4.4, volume/dilaton and no-scale discussion."
    - title: "Igor R. Klebanov and Edward Witten, AdS/CFT Correspondence and Symmetry Breaking, arXiv:hep-th/9905104v2"
      url: "https://arxiv.org/pdf/hep-th/9905104v2"
      locator: "§2.1, equations (2.1)–(2.3), PDF pp. 4–5, and §2.2, PDF p. 12 (printed p. 11), the paragraph after equation (2.20) on the BF limiting value and the no-logarithmic-mode boundary condition; d is boundary dimension, L=1, so d=3 gives the AdS4 scalar threshold -9/4."
---

## Definition

Let $(M_4,g_{4,E})$ be a smooth four-dimensional Lorentzian spacetime in Einstein frame, with signature $(-,+,+,+)$, and let $U\subseteq\mathbb R^N$, $N\ge1$, be an open field-space coordinate patch with coordinate functions $\phi^a:U\to\mathbb R$ of mass dimension one. A spacetime scalar configuration in this patch is a smooth map $\Phi:M_4\to U$, with component fields $\phi^a\circ\Phi$. Let $G=G_{ab}(\phi)d\phi^a\otimes d\phi^b$ be a smooth dimensionless symmetric positive-definite metric on $U$, and let $V:U\to\mathbb R$ be a $C^2$ real function of mass dimension four. Adopt the retained scalar action
$$S_{\rm scal}=\int_{M_4}d^4x\sqrt{-g_{4,E}}\left[-\frac12G_{ab}(\phi)g_{4,E}^{\mu\nu}\partial_\mu\phi^a\partial_\nu\phi^b-V(\phi)\right].$$
Here the component fields in the action mean $\phi^a\circ\Phi$, and $G$ is the full kinetic coefficient, including all Planck normalization factors; no additional scalar kinetic term is suppressed. For interpreting the eigenvalues as physical scalar masses, use a linear scalar fluctuation sector with gauge redundancy resolved and no quadratic derivative mixing with other fields. An interior critical point is a point $p\in U$ with $dV_p=0$. Define the Hessian bilinear form $H_p(v,w)=(\nabla^2V)_p(v,w)$ and the mass endomorphism $(M^2)^a{}_b=G^{ac}\nabla_c\nabla_bV|_p$. The Hessian is nondegenerate when its kernel $\{v\in T_pU:H_p(v,w)=0\text{ for every }w\in T_pU\}$ is $\{0\}$. The endomorphism is self-adjoint for $G$. A local minimum is a point $p$ with a neighborhood $W\subseteq U$ such that $V(q)\ge V(p)$ for every $q\in W$; it is strict if there is such a neighborhood with $V(q)>V(p)$ for every $q\ne p$. At any local minimum the Hessian is positive semidefinite; a positive-definite Hessian is sufficient for a nondegenerate strict local minimum, and at a nondegenerate critical point that is a local minimum it is also necessary. Zero eigenvalues do not by themselves decide whether a critical point is a local minimum; that requires analysis of $V$ beyond its Hessian. For an AdS$_4$ scalar mode under standard reflecting boundary conditions, call the mode Breitenlohner–Freedman admissible when $m^2L^2\ge-9/4$; this mode test alone is not a claim of full nonlinear or decay stability. Write $\lambda_i$ for the real eigenvalues of $M^2$ and define the nonnegative comparison scales $m_i:=\sqrt{|\lambda_i|}$. For $\lambda_i<0$, this scale is the magnitude of a negative mass-squared eigenvalue, not a real stable-particle mass; the signed eigenvalue itself enters the AdS test, $m^2=\lambda_i$. EFT scale-control data are the explicit inequalities comparing every retained scalar scale $m_i$, the dS Hubble scale $H$ or the AdS curvature scale $L^{-1}$, and the external energy range to the lightest actually present omitted bulk Kaluza–Klein, throat, open-string, and string threshold in one common four-dimensional Einstein frame. This definition asserts no hierarchy or metastable vacuum.

## Definition references

[Baumann and McAllister, §§6.2–6.5](https://arxiv.org/pdf/1404.2601v1)

[Van Riet and Zoccarato, §2.2 and §§4.3–4.4](https://arxiv.org/pdf/2305.01722v2)

[Klebanov and Witten, §2.1, equations (2.1)–(2.3)](https://arxiv.org/pdf/hep-th/9905104v2)

## Facts & Assumptions

**Given:** A finite-dimensional scalar patch, smooth positive metric $G$, $V\in C^2$, a declared four-dimensional Einstein frame, and an actual compactification spectrum for any claimed cutoff.

[F1] [[def-cmp4-compactification-derived-moduli-eft-data]] declares the retained scalar patch, four-dimensional Einstein metric, Planck normalization, truncation domain, cutoff, and omitted sectors.

[F2] [[def-cmp-compactification-scale-hierarchy]] defines a common-frame energy window and distinguishes a positive omitted-sector gap from the separate KK, warped-throat, open-string, and string thresholds; its carrier has a current escalated readiness record whose stated upstream reason is stale.

[F3] [[pthm-cmp-unwarped-four-dimensional-planck-scale]] gives the unwarped product Planck coefficient after Einstein-frame normalization; its current readiness record remains escalated for an upstream-record issue.

[F4] [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]] gives an orthonormal eigenbasis for a self-adjoint endomorphism of a finite-dimensional real inner-product space.

[F5] [[cor-second-order-taylor-expansion-with-the-hessian]] gives the quadratic expansion with $o(\|h\|^2)$ remainder for a $C^2$ real function in Euclidean coordinates.

[A1] The scalar patch is finite-dimensional and smooth, $G$ is positive definite and smooth, and $V$ is $C^2$; at a critical point the covariant Hessian is evaluated using the Levi-Civita connection of $G$. The scalar action and full kinetic normalization are those displayed in the Definition. The physical mass interpretation is for fluctuations about a constant-field solution in the stated scalar sector.

[A2] For the cosmological scales, use the four-dimensional Einstein equations with no additional vacuum-energy contribution: at a constant-field dS$_4$ solution $V=3M_P^2H^2$, and at an AdS$_4$ solution $V=-3M_P^2/L^2$. The Breitenlohner–Freedman test stated here assumes standard reflecting AdS$_4$ boundary conditions.

[A3] A mass or cutoff comparison is made only after every actually present omitted tower and threshold is listed in the same external Einstein frame; an unknown or gapless omitted sector does not satisfy a positive-gap EFT assumption.

## Proof

**Given:** The hypotheses in [A1]–[A3] and the conditional compactification interfaces [F1]–[F3].

1.1 At a critical point $p$, the Hessian $H_{ab}=\nabla_a\nabla_bV|_p$ is symmetric because the Levi-Civita connection is torsion-free and the commutator of covariant derivatives on a scalar has no curvature term. For tangent vectors $v,w$, the endomorphism $M^a{}_b=G^{ac}H_{cb}$ obeys $G(v,Mw)=H(v,w)=H(w,v)=G(Mv,w)$; hence it is self-adjoint with respect to the positive metric $G$. Apply [F4] to the finite-dimensional real inner-product space $(T_pU,G_p)$: it has an orthonormal eigenbasis with real eigenvalues, a finite nonempty list since $N\ge1$. [given, A1, F4, algebra]

1.2 Under the Einstein equations assumed in [A2], the constant-field relations define $H=\sqrt{V/(3M_P^2)}$ for $V>0$ and $L^2=-3M_P^2/V$ for $V<0$. The AdS$_4$ condition $m^2L^2\ge-9/4$ is the stated scalar-mode Breitenlohner–Freedman diagnostic under the boundary conditions in [A2]; checking this inequality does not test other fields, nonlinear stability, or decay rates. [given, A2, algebra]

2.1 Write a fluctuation about a constant-field solution as $\phi=p+\eta$. Since $dV_p=0$, the Taylor expansion [F5] and the displayed action give its quadratic scalar action $S_{\rm scal}^{(2)}=-\tfrac12\int d^4x\sqrt{-g_{4,E}}[G_{ab}(p)\partial_\mu\eta^a\partial^\mu\eta^b+H_{ab}\eta^a\eta^b]$. The connection term in the Hessian vanishes at $p$ because it is proportional to $dV_p$. The linearized equations are $\Box_{4,E}\eta^a-(M^2)^a{}_b\eta^b=0$. In the $G_p$-orthonormal eigenbasis of step 1.1, writing $\eta=\sum_i q_i e_i$ gives $S_{\rm scal}^{(2)}=-\tfrac12\sum_i\int d^4x\sqrt{-g_{4,E}}[(\partial q_i)^2+\lambda_i q_i^2]$, so $(\Box_{4,E}-\lambda_i)q_i=0$. Thus $\lambda_i$ are the signed canonically normalized scalar mass-squared parameters, with mass dimension two; no unspecified multiple of $G$ can be discarded. [given, A1, F5, step 1.1, algebra]

2.2 Choose a real coordinate chart centered at $p$. Since $p$ is critical, $dV_p=0$, so the connection term $\Gamma^c_{ab}\partial_cV$ vanishes at $p$ and the covariant Hessian there equals the ordinary chart Hessian. For any tangent vector $v$, the chart curve with coordinates $tv$ is defined for sufficiently small positive and negative $t$. At a local minimum, [F5] gives $V(tv)-V(0)=\tfrac12t^2H(v,v)+o(t^2)$, forcing $H(v,v)\ge0$. If $H$ is positive definite, use [F4] to choose a $G_p$-orthonormal eigenbasis for $G_p^{-1}H$ and a linear change of the chart to that basis. Its finite list of positive eigenvalues has a least member $\lambda>0$. The same Taylor formula gives $V(x)-V(0)\ge\tfrac12\lambda|x|^2+o(|x|^2)>0$ for all sufficiently small nonzero $x$, proving a strict local minimum. Conversely, at a nondegenerate local minimum the eigenvalues are nonnegative by the first argument and nonzero by nondegeneracy, hence positive. The examples $V(x)=x^4$ and $V(x)=-x^4$ have the same zero Hessian but opposite local-minimum behavior, so zero eigenvalues do not by themselves determine local-minimum status. No geodesic or exponential-map existence is used. [given, A1, F4, F5, step 1.1, algebra]

3.1 Let $M_{\rm omit}$ be the infimum of the finite declared list of omitted-sector thresholds from [F2], all measured in the same external Einstein frame; an absent sector has threshold $+\infty$, and an empty list has infimum $+\infty$. Thus a continuous spectrum needs no attained least mass. Comparisons with $+\infty$ impose no omitted-sector restriction, but leave the separate gravitational condition in force. The scale-control record lists $m_i=\sqrt{|\lambda_i|}\ll M_{\rm omit}$ for every retained scalar and $\mathcal H_{\rm bg}\ll M_{\rm omit}$, where $\mathcal H_{\rm bg}=H$ in dS$_4$ and $\mathcal H_{\rm bg}=L^{-1}$ in AdS$_4$, together with $E\ll M_{\rm omit}$ and the Planck-scale condition when gravitational EFT control is claimed. If a required tower is unknown or has zero gap, these inequalities have not been established. This is a record of inputs and comparisons, not an existence or stability proof for a vacuum. [given, F1, F2, F3, A3, step 2.1, step 1.2] ∎
