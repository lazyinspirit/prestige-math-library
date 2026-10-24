---
id: lem-qftx-principal-curvature-cartan-bianchi
kind: lemma
title: Principal curvature, Cartan structure equation, and Bianchi identity
status: draft
origin: session
dependency_level: 1
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
axiom_base: "ZF + AC_omega, inherited only through the supplied principal-connection and Lie(G) inputs; no arbitrary choice is used."
deps:
  - def-countable-choice
  - def-qftx-principal-connection-form
  - def-qftx-lie-algebra-valued-form-bracket
  - def-principal-connection-and-vertical-curvature
  - def-smooth-principal-g-bundle
  - def-lie-group
  - thm-the-tangent-space-at-the-identity-is-a-lie-algebra
  - def-adjoint-representation-of-a-lie-algebra
  - def-conjugation-and-the-adjoint-representation-of-a-lie-group
  - prop-adjoint-is-a-smooth-lie-group-representation
  - thm-differential-of-a-lie-group-homomorphism-is-a-lie-algebra-homomorphism
  - thm-the-differential-of-adjoint-is-ad
  - def-left-maurer-cartan-form
  - def-differential-of-a-smooth-map
  - thm-chain-rule-for-differentials-of-smooth-maps
  - def-lie-derivative-of-a-tensor-field
  - def-lie-derivative-of-a-differential-form
  - thm-lie-derivative-of-a-vector-field-equals-the-lie-bracket
  - def-lie-bracket-of-smooth-vector-fields
  - def-finite-dimensional-vector-valued-forms-and-their-exterior-derivative
  - thm-the-exterior-derivative-commutes-with-pullback
  - thm-the-exterior-derivative-squares-to-zero
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qftx-principal-connection-form: mathematical-premise
  def-qftx-lie-algebra-valued-form-bracket: mathematical-premise
  def-principal-connection-and-vertical-curvature: mathematical-premise
  def-smooth-principal-g-bundle: mathematical-premise
  def-lie-group: mathematical-premise
  thm-the-tangent-space-at-the-identity-is-a-lie-algebra: mathematical-premise
  def-adjoint-representation-of-a-lie-algebra: mathematical-premise
  def-conjugation-and-the-adjoint-representation-of-a-lie-group: mathematical-premise
  prop-adjoint-is-a-smooth-lie-group-representation: mathematical-premise
  thm-differential-of-a-lie-group-homomorphism-is-a-lie-algebra-homomorphism: mathematical-premise
  thm-the-differential-of-adjoint-is-ad: mathematical-premise
  def-left-maurer-cartan-form: mathematical-premise
  def-differential-of-a-smooth-map: mathematical-premise
  thm-chain-rule-for-differentials-of-smooth-maps: mathematical-premise
  def-lie-derivative-of-a-tensor-field: mathematical-premise
  def-lie-derivative-of-a-differential-form: mathematical-premise
  thm-lie-derivative-of-a-vector-field-equals-the-lie-bracket: mathematical-premise
  def-lie-bracket-of-smooth-vector-fields: mathematical-premise
  def-finite-dimensional-vector-valued-forms-and-their-exterior-derivative: mathematical-premise
  thm-the-exterior-derivative-commutes-with-pullback: mathematical-premise
  thm-the-exterior-derivative-squares-to-zero: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Matthijs Vákár, Principal Bundles and Gauge Theories (full text)"
      url: "https://arxiv.org/html/2110.06334"
      locator: "§1.3.1, printed pp. 32–36: Cartan’s second structure equation, curvature horizontality/equivariance, Bianchi identity, and the local gauge convention."
    - title: "Karl-Hermann Neeb, Differential Topology of Fiber Bundles (full lecture notes, 2024)"
      url: "https://www.math.fau.de/wp-content/uploads/2024/01/bundle-lect.pdf"
      locator: "Chapter 5 §5.4, printed pp. 92–95, and Chapter 6 §6.1, printed pp. 100–101: connection forms, local transition law, curvature type, and local Cartan formula."
verification:
  precheck: pending
---

## Statement

Assume $\mathrm{AC}_\omega$, and let $\pi:P\to M$ be a smooth right principal $G$-bundle with a principal connection form $\omega$ associated to $H$, using $Z_P(p)=\left.\frac{d}{dt}\right|_0p\exp_G(tZ)$ for the right action. For Lie-algebra-valued forms use the graded bracket defined by alternating shuffle and the Lie bracket; in degree one, $[A\wedge B](X,Y)=[A(X),B(Y)]-[A(Y),B(X)]$. Define

$$\Omega_\omega:=d\omega+\frac12[\omega\wedge\omega],\qquad D_\omega\eta:=d\eta+[\omega\wedge\eta].$$

Then $\Omega_\omega$ is horizontal and $\operatorname{Ad}$-equivariant, and $\Omega_\omega=\omega\circ K_H$ for the imported vertical-valued curvature $K_H(X,Y)=-v([hX,hY])$. For any trivializing cover with smooth sections $s_i:U_i\to P$, set $A_i=s_i^*\omega$ and $F_i=s_i^*\Omega_\omega$. On an overlap, let $g_{ij}:U_i\cap U_j\to G$ be the smooth map determined by $s_j=s_i g_{ij}$, and write $\theta_L(g_{ij})=g_{ij}^*\theta_L$ for the left Maurer–Cartan form. Then

$$A_j=\operatorname{Ad}_{g_{ij}^{-1}}A_i+\theta_L(g_{ij}),\qquad F_i=dA_i+\frac12[A_i\wedge A_i],\qquad F_j=\operatorname{Ad}_{g_{ij}^{-1}}F_i,\qquad D_{A_i}F_i=0,$$

where $D_{A_i}\eta:=d\eta+[A_i\wedge\eta]$. The transition equations concern changes of local sections; they do not identify an arbitrary map $M\to G$ with a global automorphism of a nontrivial bundle.

## Statement references

[Vákár, §1.3.1, principal curvature, Cartan formula, and Bianchi identity](https://arxiv.org/html/2110.06334)

[Neeb, Chapters 5–6, principal curvature and transition formulas](https://www.math.fau.de/wp-content/uploads/2024/01/bundle-lect.pdf)

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a smooth right principal $G$-bundle $P\to M$, a principal connection $H$, its form $\omega$, and local smooth sections $s_i$.

[A1] $\mathrm{AC}_\omega$ is countable choice, inherited through the Lie-group tangent-bracket and horizontal-connection inputs. [[def-countable-choice]]

[F1] The connection form satisfies $\omega(Z_P)=Z$, $\ker\omega=H$, and $R_g^*\omega=\operatorname{Ad}_{g^{-1}}\omega$; $\kappa_H=\omega\circ K_H$. [[def-qftx-principal-connection-form]]

[F2] The vertical curvature is $K_H(X,Y)=-v([hX,hY])$, with $TP=VP\oplus H$ and right-invariant horizontal distribution. [[def-principal-connection-and-vertical-curvature]]

[F3] The graded bracket of $\mathfrak g$-valued forms has the shuffle convention, graded skew-symmetry, graded Jacobi, and the exterior-derivative rule stated in its definition. [[def-qftx-lie-algebra-valued-form-bracket]]

[F4] Each $\operatorname{Ad}_g=d(C_g)_e$ is a Lie-algebra automorphism, and $\operatorname{Ad}_{gh}=\operatorname{Ad}_g\operatorname{Ad}_h$. [[def-conjugation-and-the-adjoint-representation-of-a-lie-group]], [[prop-adjoint-is-a-smooth-lie-group-representation]], [[thm-differential-of-a-lie-group-homomorphism-is-a-lie-algebra-homomorphism]]

[F5] The derivative of the adjoint representation at the identity is $d(\operatorname{Ad})_e(Z)=\operatorname{ad}_Z$. [[thm-the-differential-of-adjoint-is-ad]]

[F6] The left Maurer–Cartan form has fibre map $(\theta_L)_g=d(L_{g^{-1}})_g$; thus $\theta_L(g_{ij})(X)=d(L_{g_{ij}^{-1}})_{g_{ij}}(dg_{ij}(X))$. [[def-left-maurer-cartan-form]]

[F7] The componentwise exterior derivative is natural under pullback and satisfies $d^2=0$. [[def-finite-dimensional-vector-valued-forms-and-their-exterior-derivative]], [[thm-the-exterior-derivative-commutes-with-pullback]], [[thm-the-exterior-derivative-squares-to-zero]]

[F8] A smooth principal bundle has local equivariant diffeomorphisms $\pi^{-1}(U_i)\cong U_i\times G$, hence smooth local sections and unique smooth transition maps on overlaps. [[def-smooth-principal-g-bundle]]

[F9] For a 1-form $\lambda$, $(\mathcal L_X\lambda)(Y)=X(\lambda(Y))-\lambda([X,Y])$, from the flow definition of tensor Lie derivative and $\mathcal L_XY=[X,Y]$. [[def-lie-derivative-of-a-tensor-field]], [[def-lie-derivative-of-a-differential-form]], [[thm-lie-derivative-of-a-vector-field-equals-the-lie-bracket]], [[def-lie-bracket-of-smooth-vector-fields]]

## Proof

1.1 For a fundamental field $Z_P$, $\omega(Z_P)=Z$ is constant. The exterior-derivative formula therefore gives $d\omega(Z_P,Y)=Z_P(\omega(Y))-\omega([Z_P,Y])=(\mathcal L_{Z_P}\omega)(Y)$ by [F9]. Differentiating $R_{\exp(tZ)}^*\omega=\operatorname{Ad}_{\exp(-tZ)}\omega$ at $t=0$, [F5] yields $\mathcal L_{Z_P}\omega=-[Z,\omega]$. The shuffle convention gives $\tfrac12[\omega\wedge\omega](Z_P,Y)=[Z,\omega(Y)]$, so $\Omega_\omega(Z_P,Y)=0$. Every vertical vector is fundamental by the orbit-differential isomorphism, hence $\Omega_\omega$ is horizontal. [A1, F1, F3, F5, F7, F9]

1.2 Pullback commutes with $d$, and the fixed linear map $\operatorname{Ad}_{g^{-1}}$ preserves the Lie bracket by [F4]. Consequently, for fixed $g\in G$, $R_g^*\Omega_\omega=d(\operatorname{Ad}_{g^{-1}}\omega)+\tfrac12[\operatorname{Ad}_{g^{-1}}\omega\wedge\operatorname{Ad}_{g^{-1}}\omega]=\operatorname{Ad}_{g^{-1}}\Omega_\omega$. This is the claimed equivariance. [F1, F3, F4, F7]

1.3 On an overlap, differentiate $s_j(x)=s_i(x)g_{ij}(x)$ along $X\in T_xM$. The derivative is the sum of $d(R_{g_{ij}(x)})ds_i(X)$ and the fundamental vertical vector at $s_j(x)$ generated by $\theta_L(g_{ij})(X)$, since $g_{ij}(x)^{-1}g_{ij}(x(t))$ has initial tangent $\theta_L(g_{ij})(X)$ at the identity. Applying $\omega$, its right equivariance and reproduction property give $A_j(X)=\operatorname{Ad}_{g_{ij}^{-1}}A_i(X)+\theta_L(g_{ij})(X)$. [F1, F6, F8]

1.4 By [F7] and the graded-derivation rule in [F3], $d\Omega_\omega=\tfrac12 d[\omega\wedge\omega]=[d\omega\wedge\omega]$, because graded skew-symmetry gives $[\omega\wedge d\omega]=-[d\omega\wedge\omega]$. Hence $D_\omega\Omega_\omega=d\Omega_\omega+[\omega\wedge\Omega_\omega]=\tfrac12[\omega\wedge[\omega\wedge\omega]]=0$, the last equality being graded Jacobi from [F3] and the Jacobi identity in [F1]. Pulling back by each $s_i$ gives $D_{A_i}F_i=dF_i+[A_i\wedge F_i]=0$. [F1, F3, F7]

2.1 For horizontal vector fields $X,Y$, $\omega(X)=\omega(Y)=0$, so $\Omega_\omega(X,Y)=d\omega(X,Y)=-\omega([X,Y])$. Meanwhile $\omega(K_H(X,Y))=-\omega(v([X,Y]))=-\omega([X,Y])$, since $\omega$ vanishes on the horizontal component. Both $\Omega_\omega$ and $K_H$ depend only on the horizontal components of their inputs, so the equality extends to all $X,Y$: $\Omega_\omega=\omega\circ K_H$. This fixes the sign relative to the imported vertical-valued curvature. [F1, F2, step 1.1]

2.2 By [F7], pullback along $s_i$ commutes with the componentwise exterior derivative; the bracket is pointwise and pullback preserves its alternating arguments. Thus $F_i=s_i^*\Omega_\omega=dA_i+\tfrac12[A_i\wedge A_i]$. On the overlap, the same differentiated-section decomposition as in step 1.3 has a vertical term, which vanishes when inserted into $\Omega_\omega$ by step 1.1. Its remaining term is transformed by the equivariance in step 1.2, yielding $F_j=\operatorname{Ad}_{g_{ij}^{-1}}F_i$. [F1, F3, F7, F8, step 1.1, step 1.2, step 1.3]

3.1 The statements include the zero-dimensional or abelian Lie-algebra cases: then the corresponding brackets vanish, and each displayed identity reduces to the ordinary exterior-derivative identity. A zero-dimensional base has no nonzero 2-forms, and the formulas remain valid. Only the declared $\mathrm{AC}_\omega$ is inherited from [F1] and [F2]; no global section or full choice principle is assumed. [A1, F1, F2, F3, F7, step 1.1, step 1.2, step 2.1, step 1.3, step 2.2, step 1.4] ∎


## Remarks

The following diagram records the local gauge-covariance identity. Both horizontal spaces are forms on the same overlap $U_i\cap U_j$; the top arrow changes local section by $g_{ij}$, each vertical arrow forms the Cartan curvature, and the bottom arrow applies the adjoint action. Steps 1.3 and 2.2 prove commutativity; the proof does not rely on the diagram.

```tikzcd
\Omega^1(U_{ij},\mathfrak g) \arrow[r,"A\mapsto \operatorname{Ad}_{g_{ij}^{-1}}A+\theta_L(g_{ij})"] \arrow[d,"A\mapsto dA+\tfrac12[A\wedge A]"'] & \Omega^1(U_{ij},\mathfrak g) \arrow[d,"A\mapsto dA+\tfrac12[A\wedge A]"] \\
\Omega^2(U_{ij},\mathfrak g) \arrow[r,"\operatorname{Ad}_{g_{ij}^{-1}}"'] & \Omega^2(U_{ij},\mathfrak g)
```
