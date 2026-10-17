---
id: thm-emg-gauss-codazzi-maxwell-constraints
kind: theorem
title: Gauss-Codazzi and Maxwell initial constraints
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 3
proof_strategy: direct
deps: [def-emg-electrovacuum-cauchy-system, def-emg-constrained-electrovacuum-data, lem-emg-maxwell-stress-conservation, thm-gr-constraint-equations-in-normal-frame, lem-emg-lorentz-hodge-calculus, lem-emg-observer-field-decomposition]
dependency_roles:
  def-emg-electrovacuum-cauchy-system: mathematical-premise
  def-emg-constrained-electrovacuum-data: mathematical-premise
  lem-emg-maxwell-stress-conservation: mathematical-premise
  thm-gr-constraint-equations-in-normal-frame: mathematical-premise
  lem-emg-lorentz-hodge-calculus: mathematical-premise
  lem-emg-observer-field-decomposition: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Lecture Notes in Physics 540 (2000), sections 2.2 and 2.4"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
      locator: "Section 2.2, equations (2.10)-(2.13), derives the normal constraint equations from Gauss-Codazzi; section 2.4 discusses the initial-value split. The complete local proof used here is thm-gr-constraint-equations-in-normal-frame."
    - title: "M. Alcubierre, J. C. Degollado and M. Salgado, The Einstein-Maxwell system in 3+1 form and initial data for multiple charged black holes, arXiv:0907.1151v2"
      url: "https://arxiv.org/pdf/0907.1151"
      locator: "Sections II.2-II.3, equations (75)-(80), gives the Maxwell energy/momentum sources and Hamiltonian/momentum constraints in Gaussian units; the proof here converts to the declared SI normalization."
    - title: "H. S. Reall, Part III General Relativity, Cambridge lecture notes, October 12 2022 revision, sections 10.3-10.4"
      url: "https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      locator: "Section 10.3 states the Gauss-Codazzi equations and marks their proofs non-examinable; section 10.4 derives the normal-normal and normal-tangential constraint projections."
verification:
  precheck: pending
---

## Statement

Let $(g,F)$ be a smooth source-free electrovacuum solution of [[def-emg-electrovacuum-cauchy-system]] on a neighborhood of a smooth spacelike embedded hypersurface $i:\Sigma\hookrightarrow M$. Let $n$ be its future unit normal, $h=i^*g$, $K(X,Y)=g(\nabla_Xn,Y)$, and let $(e,b)$ be its observer electric/magnetic data. Then the induced tuple $(\Sigma,h,K,e,b)$ satisfies all four constraints in [[def-emg-constrained-electrovacuum-data]], namely the two Maxwell divergence constraints and

$$R(h)+(\operatorname{tr}_hK)^2-|K|_h^2=2\Lambda+\frac{\kappa}{\mu_0}(|e|_h^2+|b|_h^2),$$

$$D^jK_{ji}-D_i\operatorname{tr}_hK=-\frac{\kappa}{\mu_0}(e\times_hb)_i.$$

This is a necessary-constraint theorem for an existing smooth solution. It is not a sufficiency or local-existence theorem for arbitrary data satisfying these equations.

## Facts & Assumptions

**Given:** A smooth oriented, time-oriented Lorentzian four-manifold, a smooth source-free solution $(g,F)$, and a smooth spacelike hypersurface with the induced data above.

[A1] [[def-emg-electrovacuum-cauchy-system]]: $G+\Lambda g=\kappa T^{\rm EM}$, $dF=0$, and $d(\star_gF)=0$.

[F1] [[def-emg-constrained-electrovacuum-data]]: $K=+\tfrac12\mathcal L_nh$ and the four displayed constraints are the definition of constrained data.

[F2] [[lem-emg-maxwell-stress-conservation]]: $T^{\rm EM}(n,n)=(|e|_h^2+|b|_h^2)/(2\mu_0)$ and $T^{\rm EM}(n,V)=-h(e\times_hb,V)/\mu_0$.

[F3] [[thm-gr-constraint-equations-in-normal-frame]]: for this $K$ convention, $G(n,n)=\tfrac12(R(h)+(\operatorname{tr}_hK)^2-|K|_h^2)$ and $G(n,V)=D^jK_{ji}V^i-D_V\operatorname{tr}_hK$.

[F4] [[lem-emg-observer-field-decomposition]] and [[lem-emg-lorentz-hodge-calculus]]: in a positive normal tetrad, $F=-\theta^0\wedge e^\flat+\star_h b^\flat$ and $\star_gF=\theta^0\wedge b^\flat+\star_h e^\flat$; restriction to the slice removes the terms containing $\theta^0$.

## Proof

1.1 In a positively oriented local orthonormal tetrad $(n,\mathfrak e_1,\mathfrak e_2,\mathfrak e_3)$, [F4] gives $i^*F=\star_h b^\flat$ and $i^*(\star_gF)=\star_h e^\flat$. Pullback commutes with exterior differentiation, so [A1] implies $d_\Sigma(\star_hb^\flat)=0$ and $d_\Sigma(\star_he^\flat)=0$. In oriented coordinates, $\operatorname{vol}_h=\sqrt{\det h}\,dx^1\wedge dx^2\wedge dx^3$ and $\star_hv^\flat=\iota_v\operatorname{vol}_h$; differentiating gives $d_\Sigma(\iota_v\operatorname{vol}_h)=\partial_i(\sqrt{\det h}\,v^i)\,dx^1\wedge dx^2\wedge dx^3=(D_iv^i)\operatorname{vol}_h$, since $\Gamma^i{}_{ik}=\partial_k\log\sqrt{\det h}$. Therefore $D_ib^i=0$ and $D_ie^i=0$. [A1, F4, algebra]

1.2 Apply [F3] to the existing solution in [A1]. The normal-normal projection of $G+\Lambda g=\kappa T^{\rm EM}$ gives $\tfrac12(R(h)+\tau^2-|K|^2)-\Lambda=\kappa T^{\rm EM}(n,n)$ because $g(n,n)=-1$. Substitute [F2] and multiply by $2$ to obtain the Hamiltonian constraint. [A1, F2, F3, algebra]

1.3 For any tangent $V$, the normal-tangential projection gives $G(n,V)=\kappa T^{\rm EM}(n,V)$ because $g(n,V)=0$. Substitute [F2]–[F3] to get $(D^jK_{ji}-D_i\tau)V^i=-(\kappa/\mu_0)h(e\times_hb,V)$. Since this holds for every tangent $V$, the two covectors are equal, proving the momentum constraint. [A1, F2, F3, algebra]

2.1 The Maxwell divergence identities from 1.1 and the Einstein normal projections from 1.2–1.3 are exactly the four equations defining constrained data in [F1]. Thus the induced tuple satisfies that definition. [F1, step 1.1, step 1.2, step 1.3] ∎