---
id: lem-emg-maxwell-stress-conservation
kind: lemma
title: Maxwell stress algebra and covariant conservation
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
proof_strategy: direct
deps: [def-emg-electrovacuum-cauchy-system, def-emg-lorentzian-forms, lem-emg-lorentz-hodge-calculus, lem-emg-observer-field-decomposition]
dependency_roles:
  def-emg-electrovacuum-cauchy-system: mathematical-premise
  def-emg-lorentzian-forms: mathematical-premise
  lem-emg-lorentz-hodge-calculus: mathematical-premise
  lem-emg-observer-field-decomposition: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "H. S. Reall, Part III General Relativity, Cambridge lecture notes, October 12 2022 revision, sections 6.2-6.3"
      url: "https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      locator: "Section 6.2, equation (6.8), states the curved-spacetime Maxwell equations in Reall's Gaussian convention; section 6.3, equations (6.27)-(6.28), gives the Maxwell stress tensor and identifies stress conservation as a consequence to prove."
    - title: "M. Alcubierre, J. C. Degollado and M. Salgado, The Einstein-Maxwell system in 3+1 form and initial data for multiple charged black holes, arXiv:0907.1151v2"
      url: "https://arxiv.org/pdf/0907.1151"
      locator: "Section II.2, equations (70)-(78), computes the Maxwell stress tensor, trace, energy density and Poynting component in a 3+1 split; its Gaussian factor 1/(4 pi) is replaced here by the declared SI factor mu_0^{-1}."
verification:
  precheck: pending
---

## Statement

Let $F$ be a smooth real two-form on a smooth oriented Lorentzian four-manifold of signature $(-,+,+,+)$, with the connection, Hodge star, and tensor $Q_{ab}=F_{ac}F_b{}^c-\tfrac14g_{ab}F_{cd}F^{cd}$ of [[def-emg-electrovacuum-cauchy-system]]. For a smooth vector field $J$, suppose

$$dF=0,\qquad \nabla_aF^{ab}=-\mu_0J^b.$$

Then $Q_{ab}$ is symmetric and trace-free, and the SI-normalized stress tensor $T^{\rm EM}_{ab}=\mu_0^{-1}Q_{ab}$ satisfies

$$\nabla^aT^{\rm EM}_{ab}=-F_{bc}J^c.$$

In the source-free case $J=0$, $\nabla^aT^{\rm EM}_{ab}=0$. If $n$ is a future unit normal and $(\mathfrak e_1,\mathfrak e_2,\mathfrak e_3)$ a positively oriented orthonormal spatial triad, put $e_i:=F(\mathfrak e_i,n)$, $b_i:=\tfrac12\epsilon_i{}^{jk}F(\mathfrak e_j,\mathfrak e_k)$, and $(e\times b)_i:=\epsilon_{ijk}e_jb_k$. Then

$$T^{\rm EM}(n,n)=\frac{|e|^2+|b|^2}{2\mu_0},\qquad T^{\rm EM}(n,\mathfrak e_i)=-\frac{(e\times b)_i}{\mu_0}.$$

These are pointwise tensor identities. In the SI interpretation $e=E/c$ and $b=B$ have units tesla; no measurement or physical applicability claim is included.

## Facts & Assumptions

**Given:** The oriented Lorentzian geometry and smooth field $F$ above; for the sourced identity, the displayed smooth current equation is also assumed.

[A1] [[def-emg-electrovacuum-cauchy-system]]: $Q_{ab}=F_{ac}F_b{}^c-\tfrac14g_{ab}F_{cd}F^{cd}$, $T^{\rm EM}=\mu_0^{-1}Q$, and the source-free Maxwell equations are $dF=0=d(\star_gF)$.

[F1] [[def-emg-lorentzian-forms]]: $\nabla$ is torsion-free and metric-compatible, and the curvature convention is the stated $R(X,Y)Z$ convention.

[F2] [[lem-emg-lorentz-hodge-calculus]]: $(dF)_{abc}=3\partial_{[a}F_{bc]}$; under [A1], $dF=0$ is therefore the covariant cyclic identity. The Hodge star is fixed by the independent orientation.

[F3] [[lem-emg-observer-field-decomposition]]: in the specified oriented orthonormal tetrad, $F_{0i}=-e_i$ and $F_{ij}=\epsilon_{ijk}b_k$.

## Proof

1.1 By antisymmetry of $F$, $F_{ac}F_b{}^c=F_{bc}F_a{}^c$, so $Q_{ab}=Q_{ba}$. Contracting gives $g^{ab}Q_{ab}=F_{ac}F^{ac}-\tfrac14(4)F_{cd}F^{cd}=0$. Thus $Q$ is symmetric and trace-free in four dimensions. [A1, algebra]

1.2 Since $\nabla$ is torsion-free, antisymmetrizing its derivatives cancels the symmetric Christoffel terms; therefore $dF=0$ from [F2] is exactly $\nabla_aF_{bc}+\nabla_bF_{ca}+\nabla_cF_{ab}=0$. Contract with $F^{ac}$. The first and third terms agree after swapping $a,c$ and using $F^{ca}=-F^{ac}$ and $F_{cb}=-F_{bc}$; the middle term is $-\tfrac12\nabla_b(F_{cd}F^{cd})$. Hence $F^{ac}\nabla_aF_{bc}=\tfrac14\nabla_b(F_{cd}F^{cd})$. [A1, F1, F2, algebra]

1.3 In the stated tetrad, $F_{0i}=-e_i$ and $F_{ij}=\epsilon_{ijk}b_k$ by [F3]. Raising indices with $\operatorname{diag}(-1,1,1,1)$ gives $F_{0i}F^{0i}=-e_i^2$ and $\sum_{i<j}F_{ij}F^{ij}=|b|^2$, so $F_{ab}F^{ab}=2(|b|^2-|e|^2)$. Substitution in $Q_{00}=F_{0c}F_0{}^c+\tfrac14F_{ab}F^{ab}$ yields $Q_{00}=\tfrac12(|e|^2+|b|^2)$. [A1, F3, algebra]

2.1 Metric compatibility and the product rule give $\nabla^aQ_{ab}=(\nabla^aF_{ac})F_b{}^c+F_{ac}\nabla^aF_b{}^c-\tfrac14\nabla_b(F_{cd}F^{cd})$. The first term is $-\mu_0F_{bc}J^c$ by the assumed sourced Maxwell equation; the last two terms cancel by 1.2 after raising indices with $g$. Dividing by $\mu_0>0$ proves $\nabla^aT^{\rm EM}_{ab}=-F_{bc}J^c$. [A1, F1, step 1.2, algebra]

3.1 For a spatial index $i$, $g_{0i}=0$ and $F_{0c}F_i{}^c=\sum_j(-e_j)\epsilon_{ijk}b_k=-(e\times b)_i$. Thus $Q(n,\mathfrak e_i)=-(e\times b)_i$; division by $\mu_0$ gives the second observer formula. Setting $J=0$ in step 2.1 gives the source-free conservation statement. [A1, step 2.1, step 1.3, algebra] ∎