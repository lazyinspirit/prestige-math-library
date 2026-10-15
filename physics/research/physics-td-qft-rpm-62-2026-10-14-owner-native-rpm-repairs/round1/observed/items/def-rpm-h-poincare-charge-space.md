---
id: def-rpm-h-poincare-charge-space
kind: definition
title: "Poincare semidirect group, dual pairing and moment components"
status: draft
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
domain: mathematics
library: physics
physical_scope: null
dependency_level: 1
deps: ["thm-sr-proper-orthochronous-lorentz-algebra", "def-rpm-h-cotangent-phase-space", "def-symplectic-and-hamiltonian-lie-group-action", "thm-a-regular-level-set-is-an-embedded-submanifold", "def-countable-choice", "lem-timelike-cone-has-two-convex-components", "lem-lorentz-lie-algebra-structure"]
dependency_roles: {"thm-sr-proper-orthochronous-lorentz-algebra": "mathematical-premise", "def-rpm-h-cotangent-phase-space": "mathematical-premise", "def-symplectic-and-hamiltonian-lie-group-action": "mathematical-premise", "thm-a-regular-level-set-is-an-embedded-submanifold": "mathematical-premise", "def-countable-choice": "mathematical-premise", "lem-timelike-cone-has-two-convex-components": "mathematical-premise", "lem-lorentz-lie-algebra-structure": "mathematical-premise"}
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jerrold E. Marsden and Tudor S. Ratiu, Introduction to Mechanics and Symmetry, 2nd ed., complete book PDF; §12.1 Theorem 12.1.4 pp. 393–395; §12.4 Theorem 12.4.1 pp. 412–413; §§14.2–14.3 pp. 466–473; §7.9 pp. 208–211."
      url: https://fisica.net/mecanicaclassica/introduction_to_mechanics_and_symmetry_by_jerrold_marsden.pdf
      locator: "Complete 549-page book; full relevant sections inspected."
    - title: "Nesta van der Schaaf, Classical and Quantum Particles in Galilean and Poincaré Spacetime, complete 2017 monograph PDF; §9.3 PDF pp. 77–79; §10.2.2 PDF pp. 81–82."
      url: https://www.math.ru.nl/~landsman/Nesta.pdf
      locator: "Complete 85-page monograph; full relevant sections inspected. Source uses natural units and signature (+---), translated explicitly in local statements."
landmark: false
---

## Definition

Assume $\mathrm{AC}_\omega$ for the referenced cotangent and symplectic-action conventions. Work on affine Minkowski spacetime with inertial coordinates $x^0=ct,x^1,x^2,x^3$ in metres, metric matrix $\eta=\operatorname{diag}(-1,1,1,1)$, and cotangent coordinates $(x^a,p_a)$, where each $p_a$ has SI momentum units. Fix the future cone as the timelike component containing the positive $x^0$ axis, equivalently $v^0>\lvert\mathbf v\rvert$. Let $SO^+(1,3)$ denote the determinant-one, future-cone-preserving Lorentz subgroup. Define the proper orthochronous Poincaré group and its multiplication by

$$G=\mathbb R^4\rtimes SO^+(1,3),\qquad (a,\Lambda)(b,L)=(a+\Lambda b,\Lambda L).$$

Its action on spacetime and the cotangent lift are $x'=\Lambda x+a$ and $p'=\Lambda^{-T}p$. The Lie algebra consists of pairs $(a,A)$ with $A^T\eta+\eta A=0$, bracket

$$[(a,A),(b,B)]=(Ab-Ba,[A,B]).$$

Use the library convention $\xi_M=\left.\frac d{ds}\right|_0\exp_G(-s\xi)\cdot z$. Thus the positive affine generator on spacetime is $Y_{(a,A)}(x)=a+Ax$, the fundamental field is its negative, and the cotangent-lifted positive field is $(a+Ax,-A^Tp)$. Pair the cotangent point with a Lie-algebra element by

$$\ell_{(a,A)}(x,p)=p_b(a^b+A^b{}_cx^c).$$

Define $P^a=\eta^{ab}p_b$ and $J^{ab}=x^aP^b-x^bP^a$. The equivalent dual pairing is $\ell_{(a,A)}=p_ba^b-\tfrac12J_{bc}A^{bc}$, where $A^{bc}=A^b{}_d\eta^{dc}$ and $J_{bc}=\eta_{bd}\eta_{ce}J^{de}$. Here $[P^a]=\mathrm{kg\,m/s}$ and $[J^{ab}]=\mathrm{J\,s}$. These are charge-space definitions on the full cotangent bundle; shell reduction and the moment-map identities are stated separately. No spin or particle model is included.

## Facts & Assumptions

**Given:** The Lorentz metric convention, an inertial affine chart, and the cotangent phase-space data specified above.

[A1] [[def-countable-choice]]: assume countable choice $\mathrm{AC}_\omega$ only; no full axiom of choice is used.

[F1] [[thm-sr-proper-orthochronous-lorentz-algebra]]: $SO^+(1,3)$ is the determinant-one Lorentz subgroup preserving the selected future cone.

[L1] [[def-rpm-h-cotangent-phase-space]]: the current H0 draft defines finite-dimensional $T^*Q$ with $\theta=p_i\,dq^i$, $\omega=-d\theta=dq^i\wedge dp_i$, and $\mathrm{AC}_\omega$ only. Its H25 Step 1 record is ready and hash-current; that records readiness but is not independent proof approval. The carrier remains status draft with no pipeline_run binding; its definition and sign interface match here, and proof provenance is not-applicable.

[F2] [[def-symplectic-and-hamiltonian-lie-group-action]]: the Lie-algebra dual is the space of linear functionals $\mathfrak g^*=\mathcal L(\mathfrak g,\mathbb R)$; the library uses $\xi_M(z)=\left.\frac d{ds}\right|_0\exp(-s\xi)\cdot z$ and $d\mu^\xi=-\iota_{\xi_M}\omega$.

[F3] [[thm-a-regular-level-set-is-an-embedded-submanifold]]: a nonempty regular level of a smooth map between finite-dimensional manifolds is an embedded submanifold of codimension the target dimension.

[F4] [[lem-timelike-cone-has-two-convex-components]]: in an orthonormal inertial chart the timelike set has exactly two connected components $T_+$ and $T_-$; the chosen future cone is the component containing the positive time axis, and every invertible Lorentz map carries each component onto one component.

[F5] [[lem-lorentz-lie-algebra-structure]]: the derivatives at identity of $C^1$ curves in $O(1,3)$ satisfy $A^T\eta+\eta A=0$, and this condition defines a six-dimensional linear subspace closed under the matrix commutator.

## Proof

**Proof technique:** direct.

**Given:** $\eta=\operatorname{diag}(-1,1,1,1)$, the selected time orientation, affine action, cotangent convention, and [F1]–[F4].

1.1 On $GL(4,\mathbb R)$ define $\Phi(L)=L^T\eta L$ with values in the ten-dimensional space of symmetric matrices. At $\Phi(L)=\eta$, its derivative is $D\Phi_L(\Delta)=\Delta^T\eta L+L^T\eta\Delta$. For any symmetric $S$, set $\Delta=L\eta^{-1}S/2$; using $L^T\eta L=\eta$ and $S^T=S$, each summand equals $S/2$. Thus $D\Phi_L$ is onto. [F3, algebra]

2.1 Every point of $\Phi^{-1}(\eta)$ is regular by step 1.1, and the level is nonempty because it contains $I$. Thus [F3] makes $O(1,3)=\Phi^{-1}(\eta)$ an embedded six-dimensional submanifold of $GL(4,\mathbb R)$. For $L\in O(1,3)$, $Le_0$ is timelike and $L$ is a homeomorphism of the timelike set; [F4] implies that $L$ preserves the selected future component exactly when $Le_0$ lies in that component. Since $e_0$ is the positive time-axis vector, this is exactly $L^0{}_0>0$. Also $|L^0{}_0|\ge1$, and taking determinants in $L^T\eta L=\eta$ gives $(\det L)^2=1$. Therefore $\det L=1$ and $L^0{}_0>0$ select an open subset of $O(1,3)$. By [F1] this subset is $SO^+(1,3)$. Matrix multiplication and inversion restrict smoothly from $GL(4)$, so this subgroup is a six-dimensional Lie group. [F1, F3, F4, step 1.1, algebra]

3.1 Give $G=\mathbb R^4\times SO^+(1,3)$ the product manifold structure from step 2.1 and multiplication $(a,\Lambda)(b,L)=(a+\Lambda b,\Lambda L)$. Both parenthesizations of a triple product equal $(a+\Lambda b+\Lambda Lc,\Lambda LM)$; the identity is $(0,I)$; and direct substitution shows $(-\Lambda^{-1}a,\Lambda^{-1})$ is a left and right inverse. Multiplication and inversion are smooth because matrix multiplication and inversion on $SO^+(1,3)$ are smooth and the translation operations are smooth. The affine matrix map $\rho(a,\Lambda)=\begin{pmatrix}\Lambda&a\\0&1\end{pmatrix}$ is injective, has smooth inverse onto its image by block projection, and is a group homomorphism because matrix multiplication gives $\rho(a+\Lambda b,\Lambda L)$. The product manifold tangent at identity is $\mathbb R^4\times T_I SO^+(1,3)$. By [F5], the latter tangent space is contained in the six-dimensional space of matrices satisfying $A^T\eta+\eta A=0$; both have dimension six by step 2.1 and [F5], so they are equal. Hence $d\rho_I(a,A)=\begin{pmatrix}A&a\\0&0\end{pmatrix}$. A group homomorphism carries left-invariant vector fields to related left-invariant fields: differentiating $\rho\circ L_g=L_{\rho(g)}\circ\rho$ gives this relation. Related fields' brackets are related, since applying each bracket to a smooth test function and expanding $X(Yf)-Y(Xf)$ gives the same identity after composition with $\rho$. For matrices $M,N$, the left-invariant fields on $GL(5)$ are $g\mapsto gM$ and $g\mapsto gN$; differentiating these fields gives their commutator at the identity as $MN-NM$. Thus the bracket of two pair matrices is $\begin{pmatrix}[A,B]&Ab-Ba\\0&0\end{pmatrix}$, yielding $[(a,A),(b,B)]=(Ab-Ba,[A,B])$. [F5, step 2.1, algebra]

4.1 The cotangent lift preserves the covector-tangent pairing: $p'(dx')=(\Lambda^{-T}p)(\Lambda dx)=p(dx)$. For the one-parameter element $\exp(-s(a,A))$, differentiation of $x'=\Lambda_s x+a_s$ gives the fundamental field $(-(a+Ax),A^Tp)$ on $(x,p)$; its negative is the positive cotangent-lifted field $(a+Ax,-A^Tp)$. Pairing the covector with the positive base generator gives $\ell=p_b(a^b+A^b{}_cx^c)$. [L1, F2, A1, step 3.1, algebra]

5.1 Antisymmetry of $A^{bc}$ gives $J_{bc}A^{bc}=-2p_bA^b{}_cx^c$: expand $J_{bc}=x_bp_c-x_cp_b$ and interchange $b,c$ in the first term. Substitution yields $\ell=p_ba^b-\tfrac12J_{bc}A^{bc}$. The definitions of $P,J$ then give $[P^a]=\mathrm{kg\,m/s}$ and $[J^{ab}]=\mathrm{J\,s}$ from $[x]=\mathrm m$, $[p]=\mathrm{kg\,m/s}$, and $[c]=\mathrm{m/s}$. [L1, step 4.1, algebra] ∎
