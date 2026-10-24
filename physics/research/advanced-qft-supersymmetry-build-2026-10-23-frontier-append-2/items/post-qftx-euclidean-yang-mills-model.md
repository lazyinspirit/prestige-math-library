---
id: post-qftx-euclidean-yang-mills-model
kind: postulate
title: Independent classical Euclidean SU(2) Yang–Mills model
status: draft
origin: session
dependency_level: 2
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
physical_scope: Adopted classical source-free Euclidean SU(2) model on closed oriented Riemannian four-manifolds, or R4 with a specified smooth S4 extension and finite action. No Lorentzian continuation, empirical assertion or quantum construction.
axiom_base: ZF + AC_omega through the specified gauge geometry; no integral Chern-class comparison is used.
deps:
- def-countable-choice
- def-qftx-nonabelian-gauge-data
- def-qftx-principal-connection-form
- def-qftx-lie-algebra-valued-form-bracket
- lem-qftx-principal-curvature-cartan-bianchi
- def-gauge-group-of-a-smooth-principal-bundle
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qftx-nonabelian-gauge-data: mathematical-premise
  def-qftx-principal-connection-form: mathematical-premise
  def-qftx-lie-algebra-valued-form-bracket: mathematical-premise
  lem-qftx-principal-curvature-cartan-bianchi: mathematical-premise
  def-gauge-group-of-a-smooth-principal-bundle: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
  - title: 'David Tong, TASI Lectures on Solitons, Lecture 1: Instantons (full lecture notes)'
    url: https://www.damtp.cam.ac.uk/user/tong/tasi/instanton.pdf
    locator: '§§1.1–1.1.1, printed pp. 6–9: Euclidean SU(N) action, finite-action boundary data, winding sectors, action bound, and the Bianchi implication.'
verification:
  precheck: pass
---

## Postulate

Assume countable choice $\mathrm{AC}_\omega$, meaning that every countable family of nonempty sets has a choice function, for the specified smooth gauge-data and principal-connection constructions. Let $(X,g_X)$ be a connected, compact, oriented, finite-dimensional Hausdorff second-countable smooth four-manifold without boundary, with a supplied Riemannian metric. The alternative flat-space branch is standard oriented Euclidean $M=\mathbb R^4$ together with a fixed smooth trivialization outside a ball and a specified smooth extension $(\bar P,\bar A)$ over $X=S^4$ with its unit round metric, which is conformal to the flat metric in the stereographic chart. In the compact branch set $M=X$ and $(\bar P,\bar A)=(P,A)$. The extension and its transition map are part of the field data. Finite action alone is not asserted to imply such an extension. Write $g=g_X$ in the compact branch and $g=\delta$ in the flat branch.

Fix the global structure group $G=SU(2)$, not its quotient, and let $\bar P\to X$ be a smooth right principal $SU(2)$-bundle: the right action is smooth, free, and transitive on each fibre, and local trivializations are equivariant. Its isomorphism class belongs to the model-specified set $\Sigma$ of admitted bundle sectors. In the flat branch the physical bundle is $P=\bar P|_M$. An isomorphism here is a smooth equivariant diffeomorphism over $\operatorname{id}_X$, and $\Sigma$ may be a singleton. Let $\bar\omega$ be a smooth $\mathfrak{su}(2)$-valued principal connection one-form satisfying $R_g^*\bar\omega=\operatorname{Ad}_{g^{-1}}\bar\omega$ and $\bar\omega(\xi_{\bar P})=\xi$, where $\xi_{\bar P}(p)=\left.\frac{d}{dt}\right|_0p\exp_{SU(2)}(t\xi)$. In a local section $s_i$ of $\bar P$, write $A_i=s_i^*\bar\omega$ and $F_i=dA_i+\tfrac12[A_i\wedge A_i]$; the alternating wedge–Lie bracket is normalized by $\tfrac12[A_i\wedge A_i](Y,Z)=[A_i(Y),A_i(Z)]$. The Hodge star is determined by $\alpha\wedge *_{g_X}\beta=\langle\alpha,\beta\rangle_{g_X}\,d\operatorname{vol}_{g_X}$ on two-forms, acts on the form part of $\mathfrak{su}(2)$-valued forms, and satisfies $*_{g_X}^2=1$ there.

Adopt, independently of any Lorentzian theory, the source-free pure Euclidean $SU(2)$ model on exactly these supplied geometric data. The representation used for normalization is the defining representation on $\mathbb C^2$; no matter fields are present. In an anti-Hermitian basis $T_a=-i\sigma_a/2$, let $\kappa(X,Y)=-2\operatorname{tr}_{\mathbf2}(XY)$, so $\kappa(T_a,T_b)=\delta_{ab}$. Fix a dimensionless coupling $g_{\mathrm{YM}}>0$. In natural units $c=\hbar=1$, $A_\mu$ has mass dimension one and $F_{\mu\nu}$ mass dimension two. Adopt the dimensionless action

$$S_E[A]=\frac{1}{2g_{\mathrm{YM}}^2}\int_M\kappa(F_A\wedge *_gF_A).$$

In the flat-space branch require finite action in addition to the specified smooth compactification extension. Smooth gauge transformations are equivariant bundle automorphisms covering the identity; the action is evaluated on the supplied admissible connection. Classical stationarity means vanishing first variation for smooth compactly supported adjoint-bundle-valued one-form variations preserving the supplied extension/boundary data. On a closed base every smooth variation has compact support.

This is a classical Euclidean model assumption. It neither derives a Euclidean theory by Wick rotation from a Lorentzian postulate nor asserts empirical confirmation, reflection positivity, a functional measure, gauge fixing, a convergent quantum integral, or a continuum quantum theory. The closed-manifold formulation is the explicitly adopted geometric extension of the cited flat Euclidean action; finite action alone is not claimed to prove removable singularities or compactification.

## Postulate references

[David Tong, Lecture 1 §§1.1–1.1.1, printed pp. 6–9](https://www.damtp.cam.ac.uk/user/tong/tasi/instanton.pdf)
