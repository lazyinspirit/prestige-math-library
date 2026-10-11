---
id: def-e-valued-dolbeault-operators-and-ltwo-structure
kind: definition
title: "E-valued Dolbeault operators and their L2 structure"
status: draft
origin: pipeline
dependency_level: 6
deps:
  - def-complex-manifolds-and-holomorphic-vector-bundles
  - def-second-order-laplace-type-operators-on-vector-bundles
  - lem-formal-adjoints-of-differential-operators-exist-and-are-unique
  - def-bigraded-complex-differential-forms
  - thm-d-dbar-decomposition-and-identities
  - def-wirtinger-operators-in-several-complex-variables
  - def-holomorphic-map-and-complex-jacobian
  - prop-riemannian-metrics-induce-metrics-on-dual-tensor-and-exterior-bundles
  - def-smooth-differential-k-form
  - prop-local-coordinate-expression-for-a-differential-form
  - def-density-bundle-and-smooth-density
  - def-riemannian-volume-density
  - def-integral-of-a-compactly-supported-smooth-density
  - def-complex-l-two-inner-product
  - thm-complex-holder-minkowski-and-the-quotient-norm
  - lem-l-two-with-the-integral-pairing-is-a-hilbert-space
  - def-countable-choice
  - thm-chain-rule-for-total-derivatives
  - thm-gram-schmidt-orthonormalisation
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry; Ch. I §10–§11, (10.1)–(10.2) and Definitions (11.1), (11.3), printed pp. 266–268: (0,1)-connections, holomorphic vector bundles, the canonical d'' connection and the Dolbeault complex; Ch. I §3.C, printed pp. 23–25: bidegree and d = d' + d''"
      url: https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf
    - title: "Christian Schnell, Complex Manifolds, MAT 545 Fall 2024; Class 7 (Definition 7.9 and the decomposition d = ∂ + ∂̄), Class 9 (Definition 9.4 and the local Hermitian formulas after it)"
      url: https://www.math.stonybrook.edu/~cschnell/mat545/class7.pdf
verification:
  precheck: pass
---

## Definition

Let $X$ be a complex manifold of dimension $m\ge1$
([[def-complex-manifolds-and-holomorphic-vector-bundles]]) with a Hermitian
metric $g$, and let $E\to X$ be a holomorphic vector bundle of rank $r$ with a
Hermitian metric $h$ ([[def-complex-manifolds-and-holomorphic-vector-bundles]]).
Fix integers $p,q\ge0$. In a holomorphic chart with coordinates
$z=(z_1,\ldots,z_m)$ and a holomorphic frame of $E$, an **$E$-valued
$(p,q)$-form** is an expression
$$s=\sum_{|I|=p}\sum_{|J|=q}s_{IJ}\otimes dz^I\wedge d\bar z^J,$$
with $s_{IJ}$ smooth local sections of $E$ and increasing multi-indices $I,J$
([[def-bigraded-complex-differential-forms]]); such expressions agree on
overlaps because holomorphic changes of coordinates preserve bidegree and
holomorphic frame changes are complex-linear. The resulting smooth global
sections of the bundle $\Lambda^{p,q}T^*X\otimes E$ are denoted
$\mathcal A^{p,q}(X,E)$; the bundle is zero, and so is
$\mathcal A^{p,q}(X,E)$, when $p>m$ or $q>m$.

The **Dolbeault operator** is the first-order operator
$$\bar\partial_E:\mathcal A^{p,q}(X,E)\to\mathcal A^{p,q+1}(X,E),\qquad \bar\partial_E s=\sum_{I,J}\sum_{k=1}^m \bar\partial_{z_k}s_{IJ}\otimes d\bar z_k\wedge dz^I\wedge d\bar z^J,$$
with the Wirtinger operators $\bar\partial_{z_k}$
([[def-wirtinger-operators-in-several-complex-variables]],
[[def-bigraded-complex-differential-forms]]) acting componentwise on the local
sections $s_{IJ}$. It is independent of the holomorphic chart and frame, and
$\bar\partial_E^2=0$
([[thm-d-dbar-decomposition-and-identities]]); both assertions are proved
below.

Equip $\Lambda^{p,q}T^*X\otimes E$ with the Hermitian metric induced by $g$ and
$h$ ([[prop-riemannian-metrics-induce-metrics-on-dual-tensor-and-exterior-bundles]]
and [[def-complex-manifolds-and-holomorphic-vector-bundles]]). For compactly
supported smooth $s,t\in\mathcal A^{p,q}(X,E)$ the **$L^2$ pairing**
$$\langle s,t\rangle_{L^2}=\int_X\langle s,t\rangle\,d\mu_g$$
uses the Riemannian volume density $\mu_g$
([[def-riemannian-volume-density]],
[[def-integral-of-a-compactly-supported-smooth-density]]) and is a complex
inner product in the first-variable-linear convention
([[def-complex-l-two-inner-product]]); its completion
$L^2(X,\Lambda^{p,q}T^*X\otimes E)$ is a complex Hilbert space
([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]],
[[thm-complex-holder-minkowski-and-the-quotient-norm]]). By
[[lem-formal-adjoints-of-differential-operators-exist-and-are-unique]] the
operator $\bar\partial_E$ has a **formal adjoint**
$\bar\partial_E^*:\mathcal A^{p,q+1}(X,E)\to\mathcal A^{p,q}(X,E)$, the unique
smooth first-order operator with
$$\langle\bar\partial_Es,t\rangle_{L^2}=\langle s,\bar\partial_E^*t\rangle_{L^2}$$
for all compactly supported smooth forms.

The **Dolbeault Laplacian**
$\Delta_{\bar\partial_E}=\bar\partial_E\bar\partial_E^*+\bar\partial_E^*\bar\partial_E$
is a formally symmetric Laplace-type second-order operator
([[def-second-order-laplace-type-operators-on-vector-bundles]]) preserving each
bidegree $(p,q)$, with
$$\langle\Delta_{\bar\partial_E}s,s\rangle_{L^2}=\|\bar\partial_Es\|_2^2+\|\bar\partial_E^*s\|_2^2\ge0$$
for compactly supported smooth $s$. Its principal symbol is
$\sigma_2(\Delta_{\bar\partial_E})(x,\xi)=|\xi^{0,1}|_g^2\,\mathrm{id}$, where
$\xi^{0,1}$ is the $(0,1)$-part of $\xi\in T_x^*X$; in particular the principal
form is smooth, and it is positive definite on nonzero real covectors.

## Facts & Assumptions

**Given:** The complex manifold $X$ with Hermitian metric $g$, the holomorphic bundle $E$ with Hermitian metric $h$, and the data of the Definition; completions rely on Countable Choice through [F4], the local constructions do not.

[F1] Complex forms on an open set decompose uniquely by bidegree, $\bar\partial$ is the $(p,q+1)$-component of $d$, and $\bar\partial^2=0$; a holomorphic change of coordinates has complex-linear Jacobian and preserves bidegrees ([[def-bigraded-complex-differential-forms]], [[thm-d-dbar-decomposition-and-identities]], [[def-holomorphic-map-and-complex-jacobian]]).

[F2] The Wirtinger operators are $\partial_{z_k}=\tfrac12(\partial_{x_k}-i\partial_{y_k})$ and $\partial_{\bar z_k}=\tfrac12(\partial_{x_k}+i\partial_{y_k})$, and the chain rule computes the derivatives of composites ([[def-wirtinger-operators-in-several-complex-variables]], [[thm-chain-rule-for-total-derivatives]]).

[F3] A Riemannian metric induces smooth metrics on dual, tensor and exterior bundles; on increasing orthonormal wedge monomials it is the determinant pairing and has value one, and the tangent bundle of a complex manifold carries the complex structure $J$ with the Hermitian compatibility $g(Jv,Jw)=g(v,w)$ ([[prop-riemannian-metrics-induce-metrics-on-dual-tensor-and-exterior-bundles]], [[def-complex-manifolds-and-holomorphic-vector-bundles]]).

[F4] On complex $L^2$ the first-variable-linear pairing $\langle f,g\rangle=\int f\bar g\,d\mu$ is an inner product and $L^2$ is a Hilbert space; the same holds for sections of a metric bundle after a trivializing cover, and the complex $L^p$ quotient norms are the ones used here ([[def-complex-l-two-inner-product]], [[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]], [[thm-complex-holder-minkowski-and-the-quotient-norm]]). Countable Choice is assumed exactly here ([[def-countable-choice]]).

[F5] A smooth first-order operator between finite-rank metric bundles over a boundaryless manifold with a smooth positive density has a unique formal adjoint, with the local formula and the leading-coefficient rule of that lemma ([[lem-formal-adjoints-of-differential-operators-exist-and-are-unique]]).

[F6] Laplace type, formal symmetry and the principal symbol $\sigma_2$ are as in [[def-second-order-laplace-type-operators-on-vector-bundles]]; in particular for an operator with second-order part $-\sum a^{ij}\partial_i\partial_j$ the symbol is the positive definite form $a^{ij}\xi_i\xi_j$.

[F7] Every finite-dimensional real or complex inner product space has an orthonormal basis, so at each point one may compute in a unitary basis of the cotangent space ([[thm-gram-schmidt-orthonormalisation]]).

## Proof

1.1 Gluing of $\bar\partial_E$. First let $\theta_\alpha,\theta_\beta$ be holomorphic frames of $E$ with transition matrix $T$, a holomorphic function with values in $\mathrm{GL}_r(\mathbb C)$ ([[def-complex-manifolds-and-holomorphic-vector-bundles]]). For a local section $u$, the Leibniz rule for $\bar\partial$ ([F1]) and $\bar\partial T=0$ give $\bar\partial(Tu)=\bar\partial T\wedge u+T\,\bar\partial u=T\,\bar\partial u$, so the local $(p,q+1)$-forms computed in two frames agree. Next let $\varphi$ be a holomorphic transition between two holomorphic charts and write $g=f\circ\varphi$ for a coefficient function. Because $\varphi$ is holomorphic, $\bar\partial_{z'_k}\varphi_j=0$ and $\bar\partial_{z'_k}\bar\varphi_j=\overline{\partial_{z'_k}\varphi_j}$ ([F1], [F2]); the chain rule [F2] therefore gives $\bar\partial_{z'_k}g=\sum_j\overline{\partial_{z'_k}\varphi_j}\,(\partial_{\bar z_j}f)(\varphi)$. Since $\varphi^*(d\bar z_j)=\sum_k\overline{\partial z_j/\partial z'_k}\,d\bar z'_k$, multiplying by $d\bar z'_k$ and summing reproduces the pullback of $\sum_j(\partial_{\bar z_j}f)\,d\bar z_j$; the holomorphic factors $dz^I$ pull back to $dz'^I$-combinations, so bidegrees are preserved and $\varphi^*\bar\partial=\bar\partial\varphi^*$. Hence the local operators agree on overlaps and glue to a global smooth first-order operator $\bar\partial_E$ that is independent of the atlas and frames. [F1, F2, given, algebra]

2.1 Vanishing of the square and bidegree action. In each holomorphic chart $\bar\partial^2=0$ coefficientwise by [F1], and the gluing of step 1.1 identifies these local squares with $\bar\partial_E^2$; hence $\bar\partial_E^2=0$ globally. By construction $\bar\partial_E$ raises the second bidegree by one and preserves the first; when $p>m$ or $q>m$ the bundles and hence both sides vanish by the degree convention. [step 1.1, F1]

3.1 Formal adjoint and its bidegree. The operator $\bar\partial_E$ is a smooth first-order linear differential operator between the finite-rank Hermitian bundles $\Lambda^{p,q}T^*X\otimes E$ and $\Lambda^{p,q+1}T^*X\otimes E$ over $X$, whose density $\mu_g$ is smooth and positive, so [F5] supplies a unique smooth first-order formal adjoint $\bar\partial_E^*$, characterized by the displayed pairing identity. It lowers the second bidegree by one: for a compactly supported smooth form $t$ of bidegree $(p,q+1)$ and $s$ of bidegree $(p',q')$, the pairing $\langle\bar\partial_Es,t\rangle_{L^2}$ is zero unless $(p',q'+1)=(p,q+1)$ by step 2.1 and orthogonality of distinct bidegrees, so $\bar\partial_E^*t$ has no component in any bidegree other than $(p,q)$. [step 2.1, F3, F5]

4.1 Formal symmetry and energy. Let $s,t$ be compactly supported smooth $E$-valued forms. Using the defining adjoint identities of step 3.1, $$\langle\Delta_{\bar\partial_E}s,t\rangle_{L^2}=\langle\bar\partial_E\bar\partial_E^*s,t\rangle_{L^2}+\langle\bar\partial_E^*\bar\partial_Es,t\rangle_{L^2}=\langle\bar\partial_E^*s,\bar\partial_E^*t\rangle_{L^2}+\langle\bar\partial_Es,\bar\partial_Et\rangle_{L^2}.$$ Applying the pairing property of [F4] to each summand shows the right side is conjugate-symmetric in $s,t$, so $\langle\Delta_{\bar\partial_E}s,t\rangle_{L^2}=\overline{\langle\Delta_{\bar\partial_E}t,s\rangle_{L^2}}$; taking $s=t$ gives $\langle\Delta_{\bar\partial_E}s,s\rangle_{L^2}=\|\bar\partial_Es\|_2^2+\|\bar\partial_E^*s\|_2^2\ge0$. Thus $\Delta_{\bar\partial_E}$ is formally symmetric and nonnegative in the sense of [F6], and by step 3.1 it preserves every bidegree $(p,q)$. [step 3.1, F4, F6, algebra]

5.1 Principal symbol and Laplace type. Fix a point and compute in a chart and a unitary basis ([F7]); write $\xi^{0,1}$ for the $(0,1)$-part of a real covector $\xi$. In real coordinates the coefficient vectors of $\bar\partial_E$ multiply to $\varepsilon(\xi^{0,1})$, and those of $\bar\partial_E^*$ to $-\varepsilon(\xi^{0,1})^*$, where $\varepsilon$ is exterior multiplication and $*$ the metric adjoint; the metric adjoint of $\varepsilon(\eta)$ deletes each factor of a wedge monomial pairing with $\eta$, with alternating signs, so the deletion check on unitary wedge monomials gives $\varepsilon(\eta)\varepsilon(\eta)^*+\varepsilon(\eta)^*\varepsilon(\eta)=|\eta|^2\mathrm{id}$, including the holomorphic $p$-factors and the bundle factor. Therefore the second-order coefficient of $\Delta_{\bar\partial_E}$ is the scalar $|\xi^{0,1}|_g^2$, that is, $-\sum a^{ij}\partial_i\partial_j$ with $a^{ij}\xi_i\xi_j=|\xi^{0,1}|_g^2$; this form is smooth in $x$ and positive definite on nonzero real $\xi$, since $\xi^{0,1}=0$ forces the conjugate $(1,0)$-part $\xi^{1,0}=0$ and hence $\xi=0$. By [F6] the operator $\Delta_{\bar\partial_E}$ is therefore Laplace type with the displayed principal symbol, and all assertions of the Definition are established. [step 2.1, step 3.1, F3, F6, F7, algebra] ∎
