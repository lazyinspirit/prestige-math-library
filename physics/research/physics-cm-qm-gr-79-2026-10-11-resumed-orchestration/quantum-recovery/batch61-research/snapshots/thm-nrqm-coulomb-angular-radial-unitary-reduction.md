---
id: thm-nrqm-coulomb-angular-radial-unitary-reduction
aliases: [nrqm-coulomb-angular-radial-unitary-reduction]
kind: theorem
domain: mathematics
title: "Angular radial unitary reduction"
status: draft
origin: pipeline
dependency_level: 5
deps: [thm-nrqm-orbital-and-spin-sphere-onb, thm-nrqm-orbital-and-spin-associated-polynomial-normalization, thm-nrqm-orbital-and-spin-sphere-laplacian-diagonal-domain, lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates, def-polar-surface-measure-on-the-unit-sphere, thm-polar-coordinates-formula-for-lebesgue-measure, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-tonelli-and-fubini-for-completed-product-measures, thm-parseval-equivalences-for-a-complete-orthonormal-family, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn, thm-dominated-convergence, def-laplacian-of-a-c2-function, def-directional-and-partial-derivatives, thm-chain-rule-for-total-derivatives, thm-total-derivative-computes-directional-and-partial-derivatives, thm-ck-euclidean-maps-closed-under-algebra-and-composition, def-ck-euclidean-maps-and-diffeomorphisms, def-hilbert-space, def-l-p-space-as-a-quotient-by-null-functions, def-complex-lp-and-euclidean-test-function-conventions, cor-cauchy-schwarz-inequality-for-l-two, def-countable-choice]
dependency_roles:
  thm-nrqm-orbital-and-spin-sphere-onb: mathematical-premise
  thm-nrqm-orbital-and-spin-associated-polynomial-normalization: mathematical-premise
  thm-nrqm-orbital-and-spin-sphere-laplacian-diagonal-domain: mathematical-premise
  lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates: mathematical-premise
  def-polar-surface-measure-on-the-unit-sphere: mathematical-premise
  thm-polar-coordinates-formula-for-lebesgue-measure: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  thm-tonelli-and-fubini-for-completed-product-measures: mathematical-premise
  thm-parseval-equivalences-for-a-complete-orthonormal-family: mathematical-premise
  def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis: mathematical-premise
  cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  def-laplacian-of-a-c2-function: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-total-derivative-computes-directional-and-partial-derivatives: mathematical-premise
  thm-ck-euclidean-maps-closed-under-algebra-and-composition: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-complex-lp-and-euclidean-test-function-conventions: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 10.2 pp. 222-225 (spherical coordinates (10.16)-(10.21) and separation of the Coulomb eigenvalue equation) and Section 10.3 pp. 225-229 (Theorems 10.6-10.7: associated Legendre functions and the spherical harmonics Y_l^m as an orthonormal basis)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "S. Axler, P. Bourdon, W. Ramey, Harmonic Function Theory, 2nd edition, author-hosted full text, Chapter 5 'Harmonic Polynomials' pp. 73-105, in particular 'Spherical Harmonic Decomposition of L^2(S)' p. 78 and 'Explicit Bases of H_m(R^n) and H_m(S)' p. 92"
      url: "https://www.axler.net/HFT.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$S^2=\{x\in\mathbb R^3:|x|=1\}$, let $\sigma$ be the polar surface measure on
$S^2$ ([[def-polar-surface-measure-on-the-unit-sphere]]), and let
$(Y_{lm})_{l\ge0,\,-l\le m\le l}$ be the complete orthonormal family of
$L^2(S^2,\sigma)$ of [[thm-nrqm-orbital-and-spin-sphere-onb]]. Write
$L^2=L^2(\mathbb R^3;\mathbb C)$ with Lebesgue measure and inner product linear
in the first argument ([[def-l-p-space-as-a-quotient-by-null-functions]],
[[def-hilbert-space]]), and let
$$K:=\bigoplus_{(l,m)}L^2\bigl((0,\infty),dr;\mathbb C\bigr)$$
be the Hilbert direct sum over $l\ge0$, $-l\le m\le l$. For $\psi\in L^2$ and
each $(l,m)$ define the coefficient function and the reduced function
$$c_{lm}(r):=\int_{S^2}\psi(r\Omega)\overline{Y_{lm}(\Omega)}\,d\sigma(\Omega)\quad(r>0,\ \text{a.e.}),\qquad u_{lm}(r):=r\,c_{lm}(r).$$
Then:

(a) for every $\psi\in L^2$ and every $(l,m)$ the function $u_{lm}$ is a well-defined element of $L^2((0,\infty),dr)$ depending only on the class of $\psi$, and $U\psi:=(u_{lm})_{l,m}$ is a linear isometry of $L^2$ into (indeed onto) $K$ with
$$\|U\psi\|_K^2=\sum_{l\ge0}\sum_{m=-l}^{l}\int_0^\infty|u_{lm}(r)|^2\,dr=\|\psi\|_{L^2}^2;$$

(b) $U$ is unitary, and for every $(u_{lm})\in K$ the finite-subset sums $\sum_{l\le N,\,|m|\le l}u_{lm}(r)Y_{lm}(\Omega)/r$ converge in $L^2$ to a function $\psi$ with $U\psi=(u_{lm})$;

(c) on $\mathbb R^3\setminus\{0\}$ every $f\in C^2$ satisfies, in the notation $\partial_r f$, $\Delta_{S^2}f$ of [[def-directional-and-partial-derivatives]], [[def-laplacian-of-a-c2-function]], [[thm-nrqm-orbital-and-spin-sphere-laplacian-diagonal-domain]],
$$\Delta f=\partial_r^2f+\frac2r\partial_rf+\frac1{r^2}\Delta_{S^2}f;$$

(d) for every $l\ge0$, $m$, and $u\in C_c^\infty((0,\infty);\mathbb C)$, the function $\psi:=u(r)Y_{lm}(\Omega)/r$ lies in $C_c^\infty(\mathbb R^3\setminus\{0\})\subseteq H^2(\mathbb R^3;\mathbb C)$, its image under $U$ is the finite-support vector with $(l,m)$-entry $u$, and
$$-\Delta\psi=\frac1r\Bigl(-u''(r)+\frac{l(l+1)}{r^2}u(r)\Bigr)Y_{lm}(\Omega),\qquad \int_{\mathbb R^3}|\nabla\psi|^2\,dx=\int_0^\infty\Bigl(\Bigl|u'(r)-\frac{u(r)}{r}\Bigr|^2+\frac{l(l+1)}{r^2}|u(r)|^2\Bigr)dr .$$

All statements are purely mathematical assertions about $L^2$ spaces, the
surface measure and the Laplacian; no physical interpretation and no statement
about operators with unbounded potentials is included.

## Facts & Assumptions

**Given:** the sphere $S^2$ with polar measure $\sigma$ and the complete orthonormal family $(Y_{lm})$; a function $\psi\in L^2(\mathbb R^3)$; a function $f\in C^2(\mathbb R^3\setminus\{0\})$; indices $l,m$ and $u\in C_c^\infty((0,\infty))$.

[F1] Angle coordinates: $\int_{S^2}G\,d\sigma=\int_{(0,\pi)\times(0,2\pi)}G(\Phi(\theta,\varphi))\sin\theta\,d(\theta,\varphi)$ for Borel $G\ge0$, and $\sigma(S^2)=4\pi$ ([[lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates]], [[def-polar-surface-measure-on-the-unit-sphere]]).

[F2] $(Y_{lm})$ is a complete orthonormal family of $L^2(S^2,\sigma)$: for every $F\in L^2(S^2,\sigma)$, $F=\sum_{l,m}\langle F,Y_{lm}\rangle Y_{lm}$ in the finite-subset net and $\|F\|^2=\sum_{l,m}|\langle F,Y_{lm}\rangle|^2$ ([[thm-nrqm-orbital-and-spin-sphere-onb]], [[thm-parseval-equivalences-for-a-complete-orthonormal-family]], [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]).

[F3] Polar coordinates: $\int_{\mathbb R^3}g\,dx=\int_0^\infty r^2\int_{S^2}g(r\Omega)\,d\sigma(\Omega)\,dr$ for every Borel $g\ge0$ ([[thm-polar-coordinates-formula-for-lebesgue-measure]]); iterated integrals of nonnegative completed-product-measurable functions may be interchanged ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-tonelli-and-fubini-for-completed-product-measures]]).

[F4] The sphere Laplacian: for $F$ in the finite span of the $Y_{lm}$ and each chart point with $\sin\theta\ne0$ one has $\mathcal S F(\theta,\varphi)=(AF)(\theta,\varphi)$, where $\mathcal S=-\frac1{\sin\theta}\partial_\theta(\sin\theta\,\partial_\theta)-\frac1{\sin^2\theta}\partial_\varphi^2$ and $A$ is the diagonal operator with $AY_{lm}=l(l+1)Y_{lm}$; in particular the chart expression of the spherical Laplacian acts on $Y_{lm}$ by multiplication by $-l(l+1)$ ([[thm-nrqm-orbital-and-spin-sphere-laplacian-diagonal-domain]], [[thm-nrqm-orbital-and-spin-associated-polynomial-normalization]], [[def-laplacian-of-a-c2-function]]).

[F5] $C_c^\infty(\mathbb R^3;\mathbb C)$ is dense in $L^2(\mathbb R^3;\mathbb C)$ ([[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]]).

[F6] Cauchy-Schwarz and dominated convergence ([[cor-cauchy-schwarz-inequality-for-l-two]], [[thm-dominated-convergence]]).

[F7] Chain rule and partial derivatives: the total derivative computes directional derivatives, and $C^k$ maps are closed under sums, products and compositions, so the formal polar-coordinate differentiation below is legitimate for $C^2$ functions ([[thm-chain-rule-for-total-derivatives]], [[thm-total-derivative-computes-directional-and-partial-derivatives]], [[thm-ck-euclidean-maps-closed-under-algebra-and-composition]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-directional-and-partial-derivatives]]).

## Proof

1.1 [Polar measurability and the angular expansion] For $\psi$ continuous with compact support the function $(r,\Omega)\mapsto\psi(r\Omega)$ is continuous on $(0,\infty)\times S^2$, so $r\mapsto c_{lm}(r)=\int\psi(r\Omega)\overline{Y_{lm}(\Omega)}d\sigma$ is defined everywhere; applying [F1] to the integrand and [F3] to $|\psi|^2$ gives $\int_{\mathbb R^3}|\psi|^2dx=\int_0^\infty r^2\int_{S^2}|\psi(r\Omega)|^2d\sigma dr$. For each $r$ the angular function $\Omega\mapsto\psi(r\Omega)$ lies in $L^2(S^2,\sigma)$ and [F2] gives $\int_{S^2}|\psi(r\Omega)|^2d\sigma=\sum_{l,m}|c_{lm}(r)|^2$; for general $\psi\in L^2$ this identity holds for a.e. $r$ after applying [F3] to $|\psi|^2\in L^1$ and [F2] to the a.e.-defined class $\psi(r\,\cdot)$ (the section is measurable in $(r,\Omega)$ by completed-product Fubini [F3]). [F1, F2, F3, given, algebra]

1.2 [Polar form of the Laplacian] Let $f\in C^2(\mathbb R^3\setminus\{0\})$ and put $F(r,\Omega):=f(r\Omega)$. The Euclidean coordinates are $x=r\Theta(\Omega)$ with $\Theta$ the inclusion $S^2\hookrightarrow\mathbb R^3$; differentiating $x\mapsto f(x)$ along the curve $r\mapsto r\Omega$ gives $\partial_rF=\nabla f(r\Omega)\cdot\Omega$, and a second differentiation gives $\partial_r^2F=\sum_{i,j}\partial_i\partial_jf(r\Omega)\Omega_i\Omega_j$. Differentiating $F$ in $\Omega$ along a chart tangent vector $v$ gives $\partial_vF=r\,\nabla f(r\Omega)\cdot v$, and taking a second tangential derivative along the chart fields of [F4] yields $\Delta_{S^2}F=r^2\sum_{i,j}\partial_i\partial_jf(r\Omega)(\delta_{ij}-\Omega_i\Omega_j)-2r\partial_rF$, the spherical Laplacian $-\mathcal S$ of [F4]; the additional first-derivative term comes from differentiating the sphere tangent fields; adding the two displayed identities produces $\partial_r^2F+2r^{-1}\partial_rF+r^{-2}\Delta_{S^2}F=\sum_i\partial_i^2f(r\Omega)=\Delta f(r\Omega)$, using $\sum_i\Omega_i^2=1$ and $\Delta=\sum_i\partial_i^2$ ([F7]). This is (c). [F4, F7, algebra]

2.1 [The isometry] By step 1.1 and Tonelli [F3] applied to the nonnegative function $r^2\sum_{l,m}|c_{lm}(r)|^2$ one has $\int_{\mathbb R^3}|\psi|^2dx=\int_0^\infty r^2\sum_{l,m}|c_{lm}(r)|^2dr=\sum_{l,m}\int_0^\infty|u_{lm}(r)|^2dr$ for continuous compactly supported $\psi$, and both sides are finite; the linear map $U$ is thus isometric on the dense subspace $C_c(\mathbb R^3)$ (density [F5] applies to $C_c^\infty\subseteq C_c$), and for $\psi\in L^2$ the a.e. definition of $u_{lm}$ gives the same isometry by continuity and [F6]. [step 1.1, F3, F5, F6, algebra]

2.2 [Reduction of the free Laplacian on one block] Let $u\in C_c^\infty((0,\infty))$ and $\psi(x):=f(r)Y_{lm}(\Omega)$ with $f(r):=u(r)/r$ and $x=r\Omega$. Then $\psi\in C_c^\infty(\mathbb R^3\setminus\{0\})$, because $\operatorname{supp}u$ is a compact subset of $(0,\infty)$ and $Y_{lm}$ is smooth on $S^2$. Since $Y_{lm}$ lies in the finite span, [F4] gives $\Delta_{S^2}\psi(r\,\cdot)=-l(l+1)\psi(r\,\cdot)$ on the chart; by step 1.2, $-\Delta\psi=-\partial_r^2\psi-2r^{-1}\partial_r\psi-r^{-2}\Delta_{S^2}\psi=\bigl(-f''(r)-2f'(r)/r+l(l+1)f(r)/r^2\bigr)Y_{lm}$, and substituting $f=u/r$ gives $-f''-2f'/r+l(l+1)f/r^2=\bigl(-u''+l(l+1)u/r^2\bigr)/r$, which is the first identity of (d). [step 1.2, F4, algebra]

3.1 [Surjectivity and inverse] For $(u_{lm})\in K$ with finite support define $V(u_{lm}):=\sum_{l,m}u_{lm}(r)Y_{lm}(\Omega)/r$. Using [F3] and [F2], $\|V(u_{lm})\|^2_{L^2}=\int_0^\infty r^2\int_{S^2}|\sum u_{lm}(r)Y_{lm}(\Omega)/r|^2d\sigma dr=\sum_{l,m}\int|u_{lm}|^2dr$, the cross terms vanishing because $\int Y_{lm}\overline{Y_{l'm'}}d\sigma=\delta_{ll'}\delta_{mm'}$ by [F2]; hence $V$ is isometric on the dense finite-support subspace of $K$ and extends to a linear isometry $K\to L^2$. On finite sums the definitions give $U(V(u_{lm}))=(u_{lm})$, and on $C_c(\mathbb R^3)$ the angular expansion shows $V(U\psi)=\psi$; by density and continuity these identities extend, so $V=U^{-1}$ and $U$ is unitary. [step 2.1, F2, F3, algebra]

3.2 [The free form on one block] With $u,\psi$ as in step 2.2, $\int_{\mathbb R^3}|\nabla\psi|^2dx=\langle-\Delta\psi,\psi\rangle$ since the divergence theorem applied to the compactly supported $C^1$ field $\overline\psi\nabla\psi$ gives $\int|\nabla\psi|^2=\int(-\Delta\psi)\overline\psi$; substituting step 2.2 and using $\|Y_{lm}\|_{L^2(S^2)}=1$ yields $\int_{\mathbb R^3}|\nabla\psi|^2dx=\int_0^\infty\bigl(-u''(r)\overline{u(r)}+l(l+1)|u(r)|^2/r^2\bigr)dr$. Integration by parts in the compact support of $u$ gives $\int_0^\infty-u''\overline u\,dr=\int_0^\infty|u'|^2dr$, and the elementary identity $-2\operatorname{Re}(u'\overline u)/r+|u|^2/r^2=-(|u|^2/r)'$ integrates to zero over the compact support, so $\int|u'|^2=\int|u'-u/r|^2$; combining, the right-hand side equals $\int_0^\infty(|u'-u/r|^2+l(l+1)|u|^2/r^2)dr$, which is the second identity of (d). [step 2.2, F6, algebra]

4.1 [Conclusion] On the dense subspace of finite sums of one-block functions the map $U$ is given by the displayed coefficient formula, so clause (a) follows from step 2.1 for all $\psi\in L^2$; clause (b) is step 3.1; clauses (c) and (d) are steps 1.2, 2.2 and 3.2. [step 2.1, step 3.1, step 1.2, step 2.2, step 3.2] ∎
