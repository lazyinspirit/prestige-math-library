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
- lem-qftx-su2-compact-nonabelian-invariant-form
- def-qftx-principal-connection-form
- def-qftx-lie-algebra-valued-form-bracket
- lem-qftx-principal-curvature-cartan-bianchi
- def-gauge-group-of-a-smooth-principal-bundle
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qftx-nonabelian-gauge-data: mathematical-premise
  lem-qftx-su2-compact-nonabelian-invariant-form: mathematical-premise
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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Postulate

Assume countable choice $\mathrm{AC}_\omega$, meaning that every countable family of nonempty sets has a choice function, for the specified smooth gauge-data and principal-connection constructions. Let $(X,g_X)$ be a connected, compact, oriented, finite-dimensional Hausdorff second-countable smooth four-manifold without boundary, with a supplied Riemannian metric. The alternative flat-space branch is standard oriented Euclidean $M=\mathbb R^4$ together with a fixed smooth trivialization outside a ball and a specified smooth extension $(\bar P,\bar A)$ over $X=S^4$ with its unit round metric, which is conformal to the flat metric in the stereographic chart; here $\bar A$ is a smooth principal connection one-form on $\bar P$. In the compact branch set $M=X$ and $(P,A)=(\bar P,\bar A)$. The extension and its transition map are part of the field data. Finite action alone is not asserted to imply such an extension. Write $g=g_X$ in the compact branch and $g=\delta$ in the flat branch.

Fix the global structure group $G=SU(2)=\{U\in M_2(\mathbb C):U^*U=I_2,\det U=1\}$, not its quotient, with Lie algebra $\mathfrak{su}(2)=\{X\in M_2(\mathbb C):X^*=-X,\operatorname{tr}_{\mathbf2}X=0\}$ and commutator bracket. For $U\in SU(2)$ define $\operatorname{Ad}_U X:=UXU^{-1}$ for $X\in\mathfrak{su}(2)$. Let $\bar P\to X$ be a smooth right principal $SU(2)$-bundle: the right action is smooth, free, and transitive on each fibre, and local trivializations are equivariant. Its bundle-sector code $[\bar P]$, the nonempty minimum-rank set of codes of smoothly isomorphic bundles in the supplied non-Abelian gauge-data convention, belongs to the model-specified set $\Sigma$ of admitted bundle sectors. In the flat branch the physical bundle and connection are $P=\bar P|_M$ and $A=\bar A|_P$. An isomorphism here is a smooth equivariant diffeomorphism over $\operatorname{id}_X$, and $\Sigma$ may be a singleton. For the defining representation, use the Pauli matrices $\sigma_1=\begin{pmatrix}0&1\\1&0\end{pmatrix}$, $\sigma_2=\begin{pmatrix}0&-i\\i&0\end{pmatrix}$, and $\sigma_3=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$, and put $T_a=-i\sigma_a/2$. The earlier lemma *Compactness and normalized invariant form for SU(2)* states that $T_1,T_2,T_3$ form a real basis of $\mathfrak{su}(2)$ and that $\kappa(X,Y)=-2\operatorname{tr}_{\mathbf2}(XY)$ is a positive-definite symmetric real bilinear form with $\kappa(T_a,T_b)=\delta_{ab}$ and $\kappa(\operatorname{Ad}_U X,\operatorname{Ad}_U Y)=\kappa(X,Y)$ for all $U\in SU(2)$ and $X,Y\in\mathfrak{su}(2)$. Writing $\bar\omega:=\bar A$, this principal connection one-form satisfies $R_g^*\bar\omega=\operatorname{Ad}_{g^{-1}}\bar\omega$ and $\bar\omega(\xi_{\bar P})=\xi$ for each $g\in SU(2)$ and $\xi\in\mathfrak{su}(2)$, where $R_g(p)=pg$ and $\xi_{\bar P}(p)=\left.\frac{d}{dt}\right|_0p\exp_{SU(2)}(t\xi)$. In a local section $s_i$ of $\bar P$, write $A_i=s_i^*\bar\omega$ and $F_i=dA_i+\tfrac12[A_i\wedge A_i]$; the alternating wedge–Lie bracket is normalized by $\tfrac12[A_i\wedge A_i](Y,Z)=[A_i(Y),A_i(Z)]$. The Hodge star is determined by $\alpha\wedge *_{g_X}\beta=\langle\alpha,\beta\rangle_{g_X}\,d\operatorname{vol}_{g_X}$ on two-forms, acts on the form part of $\mathfrak{su}(2)$-valued forms, and satisfies $*_{g_X}^2=1$ there.

The principal-curvature result gives $F_j=\operatorname{Ad}_{u_{ij}^{-1}}F_i$ on an overlap where $s_j=s_i u_{ij}$. Hence the $F_i$ are local representatives of one global curvature $F_{\bar A}$; in the compact branch put $F_A=F_{\bar A}$ and in the flat branch put $F_A=F_{\bar A}|_M$. For smooth $\mathfrak{su}(2)$-valued $p$- and $q$-forms $\alpha=\sum_{a=1}^3T_a\alpha^a$ and $\beta=\sum_{b=1}^3T_b\beta^b$, with real-valued coefficient forms $\alpha^a$ and $\beta^b$, define their coefficientwise pairing by

$$\kappa(\alpha\wedge\beta):=\sum_{a,b=1}^3\kappa(T_a,T_b)\,\alpha^a\wedge\beta^b.$$

This is independent of the chosen basis. The $\operatorname{Ad}$-invariance of $\kappa$ and the stated curvature transition law make the local four-forms $\kappa(F_i\wedge *_g F_i)$ agree on overlaps; they therefore define a global four-form, denoted $\kappa(F_A\wedge *_gF_A)$ in the action. Adopt, independently of any Lorentzian theory, the source-free pure Euclidean $SU(2)$ model on exactly these supplied geometric data. No matter fields are present. Fix a dimensionless coupling $g_{\mathrm{YM}}>0$. In natural units $c=\hbar=1$, $A_\mu$ has mass dimension one and $F_{\mu\nu}$ mass dimension two. Adopt the dimensionless action

$$S_E[A]=\frac{1}{2g_{\mathrm{YM}}^2}\int_M\kappa(F_A\wedge *_gF_A).$$

In the flat-space branch require finite action in addition to the specified smooth compactification extension. Smooth gauge transformations are equivariant bundle automorphisms covering the identity; the action is evaluated on the supplied admissible connection. Classical stationarity means vanishing first variation for smooth compactly supported adjoint-bundle-valued one-form variations preserving the supplied extension/boundary data. On a closed base every smooth variation has compact support.

This is a classical Euclidean model assumption. It neither derives a Euclidean theory by Wick rotation from a Lorentzian postulate nor asserts empirical confirmation, reflection positivity, a functional measure, gauge fixing, a convergent quantum integral, or a continuum quantum theory. The closed-manifold formulation is the explicitly adopted geometric extension of the cited flat Euclidean action; finite action alone is not claimed to prove removable singularities or compactification.

## Postulate references

[David Tong, Lecture 1 §§1.1–1.1.1, printed pp. 6–9](https://www.damtp.cam.ac.uk/user/tong/tasi/instanton.pdf)

[[lem-qftx-su2-compact-nonabelian-invariant-form|SU(2) matrix realization and normalized positive invariant form]]

[[lem-qftx-principal-curvature-cartan-bianchi|Local curvature transition law]]
