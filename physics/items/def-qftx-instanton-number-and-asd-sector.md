---
id: def-qftx-instanton-number-and-asd-sector
kind: definition
title: Trace-normalized instanton number and self-dual sectors
status: "published"
origin: session
dependency_level: 2
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
axiom_base: "ZF + full AC; full AC enters through the supplied integral Chern-class and Chern–Weil comparison results."
deps:
  - def-qftx-nonabelian-gauge-data
  - def-qftx-principal-connection-form
  - def-qftx-lie-algebra-valued-form-bracket
  - lem-qftx-principal-curvature-cartan-bianchi
  - def-qftx-associated-covariant-derivative
  - def-invariant-polynomial-on-a-matrix-lie-algebra
  - def-evaluation-of-an-invariant-polynomial-on-curvature
  - def-the-chern-weil-homomorphism
  - thm-chern-weil-homomorphism-is-independent-of-connection-and-natural
  - def-chern-pontryagin-and-euler-characteristic-forms
  - thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals
  - def-chern-classes-from-the-projective-bundle-relation
  - def-complex-linear-and-compatible-bundle-connections
  - thm-de-rham-theorem
  - def-axiom-of-choice
  - lem-qftx-hodge-star-decomposition-four-dimensions
  - thm-general-stokes-theorem
dependency_roles:
  def-qftx-nonabelian-gauge-data: mathematical-premise
  def-qftx-principal-connection-form: mathematical-premise
  def-qftx-lie-algebra-valued-form-bracket: mathematical-premise
  lem-qftx-principal-curvature-cartan-bianchi: mathematical-premise
  def-qftx-associated-covariant-derivative: mathematical-premise
  def-invariant-polynomial-on-a-matrix-lie-algebra: mathematical-premise
  def-evaluation-of-an-invariant-polynomial-on-curvature: mathematical-premise
  def-the-chern-weil-homomorphism: mathematical-premise
  thm-chern-weil-homomorphism-is-independent-of-connection-and-natural: mathematical-premise
  def-chern-pontryagin-and-euler-characteristic-forms: mathematical-premise
  thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals: mathematical-premise
  def-chern-classes-from-the-projective-bundle-relation: mathematical-premise
  def-complex-linear-and-compatible-bundle-connections: mathematical-premise
  thm-de-rham-theorem: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  lem-qftx-hodge-star-decomposition-four-dimensions: mathematical-premise
  thm-general-stokes-theorem: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "A. A. Belavin, A. M. Polyakov, A. S. Schwartz, and Yu. S. Tyupkin, Pseudoparticle Solutions of the Yang–Mills Equations"
      url: https://strings.itp.ac.ru/Papers/belavin1975.pdf
      locator: "Printed pp. 85–86, equations (3)–(10): topological charge, its boundary winding interpretation, and the self-dual action bound; signs and trace are translated to the library's anti-Hermitian c2 convention."
    - title: "David Tong, TASI Lectures on Solitons: Instantons, Monopoles, Vortices and Kinks"
      url: https://www.damtp.cam.ac.uk/user/tong/tasi/instanton.pdf
      locator: "Lecture 1, §§1.1–1.1.1, printed pp. 6–8: finite-action boundary condition, S3-to-SU(N) winding charge, and action normalization."
    - title: "Stefan Haller, The Atiyah–Singer Index Theorem"
      url: https://www.mat.univie.ac.at/~stefan/files/ASIT/ASIT.pdf
      locator: "§II.4.1 and Example II.4.5, printed pp. 88–92: connection-independent curvature classes and determinant normalization c(E)=det(I−R/(2πi))."
    - title: "John W. Milnor and James D. Stasheff, Characteristic Classes"
      url: https://aareyanmanzoor.github.io/assets/books/characteristic-classes.pdf
      locator: "Appendix C, printed pp. 308–309: curvature-polynomial representatives of integral Chern classes; the source's connection/curvature sign convention is recorded separately."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Definition

Assume full Axiom of Choice. Let $X$ be a nonempty, connected, compact, oriented, finite-dimensional Hausdorff second-countable smooth four-manifold without boundary, with a supplied Riemannian metric. Let $G\subseteq U(V,h)$ be a compact non-Abelian matrix Lie group in its specified global form, let $\pi:P\to X$ be a smooth right principal $G$-bundle in a specified bundle sector (an isomorphism class of smooth principal bundles under isomorphisms over $X$), and let $\omega$ be a supplied smooth principal connection. Let $B:\mathfrak g\times\mathfrak g\to\mathbb R$ be a positive-definite symmetric bilinear form invariant under $\operatorname{Ad}(G)$. For local sections $s_i:U_i\to P$, set $A_i=s_i^*\omega$ and $F_i=dA_i+\tfrac12[A_i\wedge A_i]$. If $F_i=\sum_a e_a F_i^a$ in a finite basis of $\mathfrak g$, define $B(F_i\wedge F_i):=\sum_{a,b}B(e_a,e_b)F_i^a\wedge F_i^b$; this expression is independent of the basis. Invariance of $B$ makes the local expressions $\beta_B|_{U_i}:=(8\pi^2)^{-1}B(F_i\wedge F_i)$ restrictions of a global four-form $\beta_B$. The **trace-normalized topological charge** is

$$
q_B(P,\omega):=\int_X\beta_B.
$$

The number $q_B(P,\omega)$ is independent of the supplied connection. For a general compact matrix group and invariant $B$, it is a real characteristic number; no integrality is asserted. In the special case $G=SU(2)$ in its defining representation on $\mathbb C^2$, with $h(v,w)=w^*v$ (linear in $v$ and conjugate-linear in $w$) and $B(X,Y)=-\operatorname{tr}_2(XY)$, the associated Hermitian bundle $E=P\times_{SU(2)}\mathbb C^2$ has

$$
q_B(P,\omega)=-\langle c_2(E),[X]\rangle\in\mathbb Z,
$$

where $c_2(E)\in H^4(X;\mathbb Z)$ is the integral second Chern class and $[X]\in H_4(X;\mathbb Z)$ is the orientation fundamental class. This sign is fixed by the library convention $c(E,\nabla)=\det(I-\Omega_\nabla/(2\pi i))$.

The Hodge operator $*_g$ on two-forms is characterized by $\alpha\wedge *_g\beta=\langle\alpha,\beta\rangle_g\,d\operatorname{vol}_g$ and acts componentwise on $\mathfrak g$-valued forms. Set $F_i^+=(F_i+*_gF_i)/2$ and $F_i^-=(F_i-*_gF_i)/2$. The self-dual sector consists of connections with $F_i^-=0$, equivalently $F_i=*_gF_i$; the anti-self-dual (ASD) sector consists of connections with $F_i^+=0$, equivalently $F_i=-*_gF_i$. These conditions are independent of the local section.

## Definition references

[Belavin–Polyakov–Schwartz–Tyupkin, printed pp. 85–86](https://strings.itp.ac.ru/Papers/belavin1975.pdf)

[Tong, Lecture 1 §§1.1–1.1.1](https://www.damtp.cam.ac.uk/user/tong/tasi/instanton.pdf)

[Haller, §II.4.1 and Example II.4.5](https://www.mat.univie.ac.at/~stefan/files/ASIT/ASIT.pdf)

[Milnor–Stasheff, Appendix C](https://aareyanmanzoor.github.io/assets/books/characteristic-classes.pdf)

[[def-qftx-nonabelian-gauge-data|Specified global form, bundle, and representation data]]

[[def-qftx-principal-connection-form|Right-action principal connection form]]

[[def-qftx-lie-algebra-valued-form-bracket|Graded bracket and wedge convention]]

[[lem-qftx-principal-curvature-cartan-bianchi|Curvature, section transition, and Bianchi identities]]

[[def-qftx-associated-covariant-derivative|Associated Hermitian connection]]

[[def-invariant-polynomial-on-a-matrix-lie-algebra|Invariant quadratic polynomial]]

[[def-evaluation-of-an-invariant-polynomial-on-curvature|Global curvature-polynomial evaluation]]

[[def-the-chern-weil-homomorphism|Chern–Weil class of a fixed connection]]

[[thm-chern-weil-homomorphism-is-independent-of-connection-and-natural|Connection independence for supplied compatible connections]]

[[def-chern-pontryagin-and-euler-characteristic-forms|Determinant normalization of the Chern forms]]

[[thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals|Comparison with real characteristic classes]]

[[def-chern-classes-from-the-projective-bundle-relation|Integral second Chern class]]

[[def-complex-linear-and-compatible-bundle-connections|Hermitian compatibility identity]]

[[thm-de-rham-theorem|Integration pairing that identifies the de Rham class]]

[[def-axiom-of-choice|Full Axiom of Choice used in the characteristic-class comparison]]

[[thm-general-stokes-theorem|Exact top forms integrate to zero on the closed base]]

## Facts & Assumptions

**Given:** Full AC; a compact matrix group $G$, a smooth right principal $G$-bundle $P\to X$, a specified bundle sector, a supplied connection $\omega$, and an invariant positive-definite bilinear form $B$.

[A1] Full AC means every family of nonempty sets has a choice function. [[def-axiom-of-choice]]

[F1] The global group $G$, its Lie algebra, the right principal bundle, and the chosen bundle sector are part of the gauge datum; a bundle sector is an isomorphism class of principal bundles under smooth isomorphisms over the base. [[def-qftx-nonabelian-gauge-data]]

[F2] The principal form has local potentials $A_i=s_i^*\omega$; the associated representation bundle has local connection matrix $\rho_*(A_i)$, and a unitary representation gives its Hermitian metric. [[def-qftx-principal-connection-form]], [[def-qftx-associated-covariant-derivative]]

[F3] In local sections, $F_i=dA_i+\tfrac12[A_i\wedge A_i]$, $F_j=\operatorname{Ad}_{g_{ij}^{-1}}F_i$, and $D_{A_i}F_i=dF_i+[A_i\wedge F_i]=0$. [[def-qftx-lie-algebra-valued-form-bracket]], [[lem-qftx-principal-curvature-cartan-bianchi]]

[F4] The polarization of an invariant quadratic polynomial on a matrix Lie algebra evaluates on curvature to a global form. The Chern–Weil map for a fixed compatible connection is defined by its de Rham class. The cited connection-independence theorem covers the stated GL, U and SO reductions; independence for the general $G$ and $B$ here is proved directly below. [[def-invariant-polynomial-on-a-matrix-lie-algebra]], [[def-evaluation-of-an-invariant-polynomial-on-curvature]], [[def-the-chern-weil-homomorphism]], [[thm-chern-weil-homomorphism-is-independent-of-connection-and-natural]]

[F5] The Chern forms are the degree components of $\det(I-\Omega/(2\pi i))$. For an $SU(2)$ connection in the defining representation, $\operatorname{tr}_2\Omega=0$. [[def-chern-pontryagin-and-euler-characteristic-forms]]

[F6] With full AC, the Chern form class is the real coefficient image of the integral topological Chern class. [[thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals]], [[def-chern-classes-from-the-projective-bundle-relation]]

[F7] A Hermitian metric is linear in its first variable and conjugate-linear in its second; a Hermitian connection satisfies $Xh(s,t)=h(\nabla_Xs,t)+h(s,\nabla_Xt)$. For $h(v,w)=w^*v$, an $SU(2)$ matrix preserves $h$, so it induces a global metric on the associated bundle. For a real vector field $X$, the local connection matrix satisfies $A_i(X)^*=-A_i(X)$, whence $h(A_i(X)s,t)+h(s,A_i(X)t)=t^*(A_i(X)+A_i(X)^*)s=0$; the ordinary product rule proves the compatibility identity for $d+A_i$. [[def-complex-linear-and-compatible-bundle-connections]]

[F8] The de Rham isomorphism is induced by integration on smooth singular simplices, so its evaluation on the oriented fundamental class is integration of a top-degree form. [[thm-de-rham-theorem]]

[F9] In an oriented Riemannian four-dimensional space, the Hodge operator on two-forms is an isometric involution with orthogonal $+1$ and $-1$ eigenspaces; its eigenspace projections are $(I\pm *_g)/2$. [[lem-qftx-hodge-star-decomposition-four-dimensions]]

[F10] Under countable choice, the integral of the exterior derivative of a compactly supported smooth three-form on an oriented closed four-manifold is zero. [[thm-general-stokes-theorem]]

## Proof

1.1 On an overlap with $s_j=s_i g_{ij}$, [F3] gives $F_j=\operatorname{Ad}_{g_{ij}^{-1}}F_i$. Since $B$ is invariant, $B(F_j\wedge F_j)=B(F_i\wedge F_i)$; these restrictions therefore define the global four-form $\beta_B$. The polynomial $P_B(Z)=B(Z,Z)/(8\pi^2)$ is homogeneous, quadratic, and $G$-invariant, so its curvature evaluation [F4] is exactly $\beta_B$. It is closed because it has top degree on the four-manifold. To compare two supplied connections $\omega_0,\omega_1$, put $\omega_t=(1-t)\omega_0+t\omega_1$ for $t\in[0,1]$. The reproduction and equivariance identities of [F2] are preserved, so each is a principal connection. In local sections put $a_i=A_{1,i}-A_{0,i}$ and $A_{t,i}=A_{0,i}+ta_i$; the inhomogeneous transition terms cancel in $a_i$, so $B(a_i\wedge F_{t,i})$ patches globally. Differentiating the curvature formula gives $\partial_tF_{t,i}=D_{A_{t,i}}a_i$. Differentiating Ad-invariance gives $B([Z,X],Y)+B(X,[Z,Y])=0$; with the graded wedge rule this cancels the connection terms in $dB(a_i\wedge F_{t,i})=B(D_{A_{t,i}}a_i\wedge F_{t,i})-B(a_i\wedge D_{A_{t,i}}F_{t,i})$. The last term vanishes by Bianchi [F3]. Symmetry of $B$ and even degree of $F_t$ therefore give $\partial_tB(F_t\wedge F_t)=2dB(a\wedge F_t)$. Integration in $t$ yields $\beta_{B,1}-\beta_{B,0}=d\zeta$, where $\zeta=(4\pi^2)^{-1}\int_0^1B(a\wedge F_t)\,dt$ is a global smooth three-form; its coefficients are polynomials in $t$. Thus the de Rham classes agree. Integration over compact boundaryless $X$ gives equal charges by [F10], whose choice hypothesis follows from [A1]. [given, A1, F1, F2, F3, F4, F10, algebra]

2.1 By step 1.1, $q_B$ is independent of the supplied connection on the fixed $G$-bundle. In the $SU(2)$ defining representation, the associated connection matrix is $A_i$ because $\rho_*$ is the identity inclusion, and its curvature matrix is $\Omega_i=F_i$ by [F2, F3]. Put $C=i\Omega_i/(2\pi)=-\Omega_i/(2\pi i)$. Its entries have even form degree and commute, so the degree-four coefficient of $\det(I+C)$ is $\det C=\tfrac12((\operatorname{tr}_2C)^2-\operatorname{tr}_2(C\wedge C))$. By [F5], $\operatorname{tr}_2C=0$, and $C\wedge C=-\Omega_i\wedge\Omega_i/(4\pi^2)$; hence $c_2(\nabla)=\operatorname{tr}_2(\Omega_i\wedge\Omega_i)/(8\pi^2)$ and $\beta_B=-c_2(\nabla)$ because $B=-\operatorname{tr}_2$. The associated connection is Hermitian by [F7], so [F6] sends this de Rham class to the negative realification of $c_2(E)\in H^4(X;\mathbb Z)$. Evaluating by [F8] on the orientation class gives $q_B=-\langle c_2(E),[X]\rangle\in\mathbb Z$. Full AC is used only through the stated characteristic-class comparison and integral-class construction. [A1, F2, F3, F5, F6, F7, F8, step 1.1, algebra]

3.1 By [F9], $F_i^\pm=(F_i\pm *_gF_i)/2$ are the projections to the $\pm1$ eigenspaces, so $F_i^-=0$ is equivalent to $F_i=*_gF_i$, and $F_i^+=0$ is equivalent to $F_i=-*_gF_i$. The curvature transforms by the adjoint action on overlaps by [F3], while $*_g$ acts only on the form arguments, so each $F_i^\pm$ transforms by that same adjoint action. Thus $F^\pm$ are global adjoint-valued two-forms and the stated self-dual and ASD conditions do not depend on the local sections. [F3, F9, given, algebra] ∎
