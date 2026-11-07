---
id: thm-gts-local-torelli-for-compact-calabiyau-manifolds
kind: theorem
title: Local Torelli for compact Calabi–Yau manifolds
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 5
domain: mathematics
library: physics
category: string-theory
axiom_strength: ZF + full AC, inherited from the Kuranishi and Hodge suppliers.
deps:
- thm-gts-bogomolovtiantodorov-unobstructedness
- thm-gts-gaussmanin-connection-and-griffiths-transversality
- def-gts-kahler-class-canonical-bundle-and-ricci-form
- thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms
- def-axiom-of-choice
- thm-gts-kuranishi-semi-universal-deformation
- lem-gts-finite-nilpotent-hodge-transfer-and-length-equality
- lem-gts-ddbar-lemma-implies-frolicher-e1-degeneration
- thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition
- thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity
- thm-holomorphic-inverse-function-theorem-several-variables
dependency_roles:
  thm-gts-bogomolovtiantodorov-unobstructedness: mathematical-premise
  thm-gts-gaussmanin-connection-and-griffiths-transversality: mathematical-premise
  def-gts-kahler-class-canonical-bundle-and-ricci-form: mathematical-premise
  thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-gts-kuranishi-semi-universal-deformation: mathematical-premise
  lem-gts-finite-nilpotent-hodge-transfer-and-length-equality: mathematical-premise
  lem-gts-ddbar-lemma-implies-frolicher-e1-degeneration: mathematical-premise
  thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition: mathematical-premise
  thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity: mathematical-premise
  thm-holomorphic-inverse-function-theorem-several-variables: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
  - title: Claire Voisin, Hodge Structures and the Topology of Algebraic Varieties,
      Harvard CMSA revision
    url: https://cmsa.fas.harvard.edu/media/Voisin_HSTAVharvardrevision.pdf
    locator: '§1.1 and §3.3, printed pp. 4–8 and 41–44: deformation tangent, Hodge
      filtration and the period map.'
verification:
  precheck: pending
---


## Statement

Let $X$ be a compact Kähler complex $n$-fold with a specified nowhere-zero holomorphic $n$-form $\Omega$, and use its smooth Kuranishi base supplied by the Bogomolov–Tian–Todorov theorem. In a local flat marking, the differential of the top-period-line map at the central point sends $\xi\in H^1(X,T_X^{1,0})$ to $[\xi\mathbin{\lrcorner}\Omega]\in H^{n-1,1}(X)$. This map is an isomorphism, so the period map is a local immersion on the marked deformation germ. No global Torelli assertion is made.

## Statement references

[[thm-gts-bogomolovtiantodorov-unobstructedness]]

[[thm-gts-gaussmanin-connection-and-griffiths-transversality]]

[[def-gts-kahler-class-canonical-bundle-and-ricci-form]]

[Voisin, §§1.1 and 3.3](https://cmsa.fas.harvard.edu/media/Voisin_HSTAVharvardrevision.pdf)

## Facts & Assumptions

**Given:** Full AC; a compact Kähler $n$-fold $X$; a chosen nowhere-zero holomorphic $n$-form $\Omega$; a smooth marked Kuranishi germ from BTT; and a local flat marking of the cohomology local system.

[A1] Full AC is [[def-axiom-of-choice]], inherited through the Kuranishi and Hodge inputs.

[F1] The canonical bundle is $K_X=\Lambda^n\Omega_X^1$; the given nowhere-zero holomorphic $n$-form is a trivialization on each component ([[def-gts-kahler-class-canonical-bundle-and-ricci-form]]).

[F2] The marked tangent space to the Kuranishi germ is $H^1(X,T_X^{1,0})$ and BTT supplies a smooth base ([[thm-gts-bogomolovtiantodorov-unobstructedness]]).

[F3] The Gauss–Manin connection is flat, the Hodge filtration is holomorphic, and it satisfies Griffiths transversality under the theorem's relative de Rham hypotheses ([[thm-gts-gaussmanin-connection-and-griffiths-transversality]]).

[F4] For compact Kähler $X$, Dolbeault cohomology $H^1(X,\Omega_X^{n-1})$ identifies with $H^{n-1,1}(X)$ ([[thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms]]).

[F5] The finite contraction identities and the compact Dolbeault Green operators are the completed Hodge suppliers. Their norm-convergent analytic version on the named spaces below is obtained by the same algebra and an actual small-operator-norm estimate; nilpotence is not falsely assumed for an analytic parameter. Central Kähler E1 degeneration is the completed ddbar consequence. [[lem-gts-finite-nilpotent-hodge-transfer-and-length-equality]] [[thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition]] [[thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity]] [[lem-gts-ddbar-lemma-implies-frolicher-e1-degeneration]]

[F6] An invertible finite-dimensional complex Jacobian gives a local biholomorphic inverse. [[thm-holomorphic-inverse-function-theorem-several-variables]]

## Proof

1.1 We verify the actual relative Hodge and Kähler hypotheses of [F3] in the present family, rather than assume them from the central fibre alone. The completed BTT and Kuranishi suppliers give a proper holomorphic family over a smooth base B with its fixed smooth central manifold and a small holomorphic Beltrami ξ(t). On central (p,q) forms the relative Dolbeault differential is $D_\xi=\bar\partial+[\iota_\xi,\partial]$. Directly on coordinate forms, the finite contraction exponential satisfies $e^{\iota_\xi}d e^{-\iota_\xi}=\partial+D_\xi-\iota_R$, where $R=\bar\partial\xi+[\xi,\xi]/2=0$. Thus $D_\xi^2=0$, $\partial D_\xi+D_\xi\partial=0$, and the total smooth de Rham complex has constant cohomology. Local relative coordinates in Kuranishi's constructed family identify this complex with the actual relative Dolbeault/de Rham resolution. Its perturbation δ is first order with coefficients small and holomorphic in t. [F2, F5, construct, algebra]

2.1 For each p choose $E_q=H^{m-q}(\Lambda^{p,q})$, q=0,...,n, with one sufficiently large integer m. The central differential is bounded $E_q\to E_{q+1}$, the Green homotopy h=∂bar*G is bounded $E_q\to E_{q-1}$, and δ is bounded $E_q\to E_{q+1}$ with norm tending to0 at t=0. Therefore both hδ and δh have operator norm less than1/2 after one finite base shrinking. The convergent geometric series give $i'=(I+h\delta)^{-1}i$, $p'=p(I+\delta h)^{-1}$, $h'=h(I+\delta h)^{-1}$, and the finite harmonic differential $d_H=p\delta(I+h\delta)^{-1}i$. The identities $D_\xi i'=i'd_H$, $p'D_\xi=d_Hp'$ and $I-i'p'=D_\xi h'+h'D_\xi$ follow by multiplying the convergent series, using $\bar\partial h+h\bar\partial=I-ip$; all products are bounded on these exact E_q spaces. This is the completed finite-transfer algebra with its nilpotent sums replaced by norm-convergent sums. Hence $h^{p,q}(t)\le h^{p,q}(0)$ by the rank formula for the finite matrix complex. Central E1 degeneration and the constant total de Rham cohomology give, in every total degree k, $b_k\le\sum_{p+q=k}h^{p,q}(t)\le\sum_{p+q=k}h^{p,q}(0)=b_k$. All inequalities are equalities, all these Hodge numbers are constant, and each finite-column differential d_H is zero because its cohomology dimension in each degree equals the dimension of that degree. Transferring the remaining ∂ differential is a FINITE series, since it strictly raises p. Its total finite differential also has zero rank by the same total-dimension equality. The filtered inclusion maps therefore give holomorphic free Hodge bundles, holomorphic filtration flags and restriction/base-change on the actual analytic base. This conclusion uses finite matrix algebra, not an unproved extension of the Artin statement. [F2, F4, F5, step 1.1, construct, algebra]

3.1 We also obtain Kähler forms on the nearby fibres. At the central fibre the Hodge filtration and its conjugate are opposed by [F4]. The just constructed flags have constant dimensions and vary continuously, so opposedness persists by the nonvanishing of the same finite determinants. In degree2 their intersection $F^1_t\cap\overline{F^1_t}$ is consequently a smooth real H11 subbundle. Choose real classes c_t there close to the original Kähler class and smooth real d-closed representatives α_t close to the original Kähler form; a fixed central de Rham harmonic basis in the smooth trivialization supplies these representatives. Since c_t lies in F1, the (0,2) part of α_t is Dξ-exact: subtract a closed filtered representative of c_t and take the (0,2) component of the resulting de Rham coboundary. The transferred bounded homotopy from step2.1 gives a small (0,1) form a_t with $D_\xi a_t=\alpha_t^{0,2}$. On actual forms, $\omega_t=\alpha_t-d(a_t+\bar a_t)$ is real, closed and of type(1,1). It is C0-close to the central positive form, hence positive after shrinking. Every nearby fibre is therefore compact Kähler. Together with step2.1 this checks ALL hypotheses of [F3]. The analytic Hodge bundle F^n supplies a holomorphic volume section through Ω; it remains nowhere zero by compactness and continuity. If X has several components, normalize this section separately on each by a flat functional equal to1 on its central volume and zero on the other central Hodge summands. There are finitely many components. This makes the chosen top-period line well defined near the origin with zero vertical Hn0 component in its central derivative; for a connected X it is the usual top Hodge line. [F1, F2, F3, F4, F5, step 1.1, step 2.1, construct, algebra]

4.1 Represent the Kodaira–Spencer tangent class by a Čech cocycle $\{\theta_{\alpha\beta}\}$ of holomorphic vector fields on a holomorphic coordinate cover, using the convention that the first-order transition maps are $1+\epsilon\theta_{\alpha\beta}$ with $\epsilon^2=0$. Since $d\Omega=0$, Cartan's formula gives $\mathcal L_{\theta_{\alpha\beta}}\Omega=d(\theta_{\alpha\beta}\mathbin{\lrcorner}\Omega)$. In the Čech–de Rham double complex, this identity says that the first-order failure of the local representatives of the flat class $[\Omega]$ to agree is the de Rham coboundary of the contraction; hence the connecting cocycle modulo the top Hodge filtration is $\{\theta_{\alpha\beta}\mathbin{\lrcorner}\Omega\}$ in Čech degree one and holomorphic-form degree $n-1$. Its class is the cup-contraction $[\xi\mathbin{\lrcorner}\Omega]\in H^1(X,\Omega_X^{n-1})$. The relative de Rham connecting map is the Gauss–Manin connection by [F3], and [F4] identifies this class with $H^{n-1,1}(X)$. Changing the local lift of the period section changes its derivative by a multiple of $[\Omega]\in F^n$, so the class modulo $F^n$ is exactly the derivative of the period line. [F2, F3, F4, step 3.1, given, construct]

5.1 Contraction with the nowhere-zero form is a holomorphic bundle isomorphism $T_X^{1,0}\to\Omega_X^{n-1}$: in a local frame where $\Omega=f\,dz^1\wedge\cdots\wedge dz^n$ with $f\ne0$, the basis vector $\partial_{z^j}$ maps to $(-1)^{j-1}f\,dz^1\wedge\cdots\widehat{dz^j}\cdots\wedge dz^n$, a basis of $\Omega_X^{n-1}$. It induces an isomorphism on $H^1$; by [F4] the target is $H^{n-1,1}(X)$. Thus the derivative in step 4.1 is an isomorphism. [F1, F4, step 4.1, algebra]

6.1 The marked Kuranishi base is smooth by the completed BTT input [F2], and step 5.1 shows that the derivative of the period map is injective on its tangent space. If its tangent dimension is positive, compose the period map in a target chart with a linear projection onto a space of that same dimension for which the derivative is an isomorphism; [F6] gives a local biholomorphic inverse of that projection, and hence a local immersion of the period map. In tangent dimension zero the assertion is immediate. This argument is local and makes no assertion of global injectivity or quotient behavior under automorphisms. [A1, F2, F6, step 5.1, algebra] ∎

## Remarks

The completed Kuranishi, BTT and Hodge constructions discharge the prerequisites used here. The nearby Kähler and analytic Hodge/base-change hypotheses were verified in steps1.1–3.1. Automorphisms remain in the marked groupoid; no global Torelli or coarse-moduli manifold assertion is made.
