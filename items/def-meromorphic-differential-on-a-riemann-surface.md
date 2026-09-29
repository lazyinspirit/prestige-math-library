---
id: def-meromorphic-differential-on-a-riemann-surface
kind: definition
title: Meromorphic differentials, orders and residues
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
landmark: true
deps:
  - def-riemann-surface-and-holomorphic-atlas
  - def-holomorphic-and-meromorphic-map-of-riemann-surfaces
  - def-meromorphic-function-complex-domain
  - def-isolated-singularity-types
  - def-residue-isolated-singularity
  - thm-laurent-expansion-annulus
  - thm-laurent-coefficient-formula-and-uniqueness
  - thm-laurent-regular-principal-decomposition
  - thm-identity-theorem-holomorphic-functions
  - thm-chain-rule-for-complex-derivatives
  - thm-algebra-of-complex-derivatives
  - cor-injective-holomorphic-derivative-nonzero
  - cor-complex-analytic-functions-have-local-primitives
  - lem-local-holomorphic-logarithm-nonvanishing-function-on-disc
  - cor-holomorphic-logarithm-has-the-logarithmic-derivative
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Eduard Looijenga, Riemann Surfaces (2007)"
      url: https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf
      locator: "Ch. 6 §2, Definition 6.2 and the discussion of MΩ_{S,p}, printed pp. 54–55: the residue as the coefficient of z^{-1}dz in a local coordinate, and the local C{z}[z^{-1}]dz description of the space of meromorphic differentials at a point."
    - title: "Curtis T. McMullen, Riemann Surfaces, Math 213b course notes (2026)"
      url: https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf
      locator: "Ch. 6, meromorphic forms, Laurent orders and contour residues; used as an independent cross-check of the transition law and of the invariance of order and residue."
---

## Definition

Let $X$ be a Riemann surface with its maximal holomorphic atlas
$\mathcal A$ ([[def-riemann-surface-and-holomorphic-atlas]]). Let
$\mathcal A_c$ be the subatlas of all charts in $\mathcal A$ with nonempty
connected domain. It covers $X$: a chart restricts to each connected component
of its domain, and these components are open because its image is open in
$\mathbb C$. Thus every image of a chart in $\mathcal A_c$ is a plane domain
([[def-meromorphic-function-complex-domain]]).

A **meromorphic differential** $\omega$ on $X$ is a family
$(h_\varphi)_{\varphi\in\mathcal A_c}$, where each $h_\varphi$ is a meromorphic
function on the domain $\varphi(U_\varphi)$
([[def-meromorphic-function-complex-domain]]), subject to the **transition
law**: for charts $\varphi,\psi$ with coordinates $z=\varphi(x)$ and
$w=\psi(x)$ and transition $z=z(w)=\varphi\circ\psi^{-1}(w)$, on each connected
component of $\psi(U_\varphi\cap U_\psi)$,

$$h_\psi(w)=h_\varphi\bigl(z(w)\bigr)\,z'(w).$$

One writes $\omega=h_\varphi\,dz$ in the chart $\varphi$, so that the law is the
familiar $h_\psi\,dw=h_\varphi\,dz$. The differential is **zero** when every
$h_\varphi$ is the zero function, and **nonzero** otherwise; a nonzero
differential has a local expression that is not identically zero near every
point, as the well-definedness argument below shows. The differential is
**holomorphic at** $p\in X$ when some, equivalently every, local expression
$h_\varphi$ is holomorphic at $\varphi(p)$, and **holomorphic** when it is
holomorphic at every point.

The **pole set** of $\omega$ is the set of points $p$ at which some, equivalently
every, local expression of a nonzero $\omega$ has a pole. Since poles of a
meromorphic function on a plane domain are isolated
([[def-isolated-singularity-types]]), the pole set of a nonzero $\omega$ is a
discrete subset of $X$.

**Order and residue.** Let $\omega\ne0$ and $p\in X$, and choose a chart
$\varphi$ with $\varphi(p)=0$; such centred charts exist, since translations of
charts are again compatible with the maximal atlas. Writing $h=h_\varphi$, the
**order** of $\omega$ at $p$ is

$$\operatorname{ord}_p(\omega):=\begin{cases} k,& h \text{ has a zero of order } k \text{ at } 0,\\ -k,& h \text{ has a pole of order } k \text{ at } 0,\\ 0,& h(0)\ne0, \end{cases}$$

and the **residue** of $\omega$ at $p$ is the coefficient
$\operatorname{Res}_p(\omega):=c_{-1}$ of $z^{-1}$ in the Laurent expansion of
$h$ at $0$ ([[def-residue-isolated-singularity]],
[[thm-laurent-expansion-annulus]]); in particular
$\operatorname{Res}_p(\omega)=0$ when $\omega$ is holomorphic at $p$. The point
$p$ is a zero, respectively a pole, of $\omega$ of order $k\ge1$ when
$\operatorname{ord}_p(\omega)=k$, respectively $\operatorname{ord}_p(\omega)=-k$.

**Conventions.**

- On a disconnected chart of $\mathcal A$, its coefficient is determined
  component by component by the coefficients of its restrictions in
  $\mathcal A_c$; meromorphic on such an open set means meromorphic on each
  nonempty connected component. No plane-domain definition is applied to a
  disconnected set.
- Each local expression $h_\varphi$ is meromorphic on a possibly different
  domain, and the transition law is required only on connected components of
  overlaps; the two charts may be taken from any atlas contained in
  $\mathcal A$, because compatibility is a local condition on overlaps.
- On a plane domain $\Omega\subseteq\mathbb C$ with its identity atlas, a
  meromorphic differential is exactly an expression $h(z)\,dz$ with $h$
  meromorphic on $\Omega$, and the order and residue above are the usual
  Laurent order and residue of $h$ ([[def-isolated-singularity-types]],
  [[def-residue-isolated-singularity]]).
- **No choice principle is used**: the data are functions indexed by the charts
  of a fixed atlas, and the well-definedness argument below uses only the
  identity theorem and local Laurent expansions.

## Facts & Assumptions

**Given:** A Riemann surface $X$ with maximal holomorphic atlas $\mathcal A$, a meromorphic differential $\omega=(h_\varphi)$ on $X$, and charts $\varphi,\psi,\theta$ with coordinates $z,w,\zeta$ and components of overlaps on which the transitions are defined.

[F1] Charts are compatible when their transitions are holomorphic in both directions, and compatibility is local; a transition restricted to a connected component of the overlap of two charts in the maximal atlas is a biholomorphism between plane domains ([[def-riemann-surface-and-holomorphic-atlas]]).

[F2] A nonzero meromorphic function on a plane domain has finite order at each point: a zero of a finite order, a pole of a finite order, or a nonzero value; its Laurent development converges on an annulus around the point, with regular part and finite principal part, and the residue is the coefficient $c_{-1}$ ([[def-isolated-singularity-types]], [[thm-laurent-expansion-annulus]], [[thm-laurent-regular-principal-decomposition]], [[def-residue-isolated-singularity]]).

[F3] The chain rule $(f\circ g)'=(f'\circ g)\,g'$ and the product rule hold for complex derivatives ([[thm-chain-rule-for-complex-derivatives]], [[thm-algebra-of-complex-derivatives]]).

[F4] An injective holomorphic map on a complex domain has nowhere-vanishing derivative ([[cor-injective-holomorphic-derivative-nonzero]]).

[F5] A function analytic at a point has a holomorphic primitive on some neighbourhood of that point, and a nowhere-zero holomorphic function on a disc has a holomorphic logarithm whose derivative is $f'/f$ ([[cor-complex-analytic-functions-have-local-primitives]], [[lem-local-holomorphic-logarithm-nonvanishing-function-on-disc]], [[cor-holomorphic-logarithm-has-the-logarithmic-derivative]]).

[F6] If a holomorphic function on a domain vanishes on a set with an accumulation point in the domain, it vanishes identically ([[thm-identity-theorem-holomorphic-functions]]).

[F7] Laurent coefficients are unique: two convergent Laurent expansions of the same function on an annulus have equal coefficients ([[thm-laurent-coefficient-formula-and-uniqueness]]).

## Proof

**Proof technique:** direct.

1.1 (The transition law is a cocycle and its derivative is nowhere zero.) On each triple overlap, for charts $\varphi,\psi,\theta$ the law for the pair $(\varphi,\psi)$ follows from the laws for $(\varphi,\theta)$ and $(\psi,\theta)$ by the chain rule applied to $z=z(\zeta)$, $\zeta=\zeta(w)$; and on a connected component of an overlap the transition $w\mapsto z(w)$ is injective holomorphic on a complex domain, so $z'(w)\ne0$ there by [F4]. [F1, F3, F4]

2.1 (Nonvanishing is chart-independent, so orders are defined.) If for some chart $h_\psi$ vanished identically near $w_0=\psi(p)$, then by the transition law and step 1.1 the same would hold for the expression in every chart near $p$; the set of points near which all local expressions vanish is then nonempty, open by definition and closed by [F6] applied in a small centred chart after clearing a possible pole: multiply $h(z)$ by $z^N$ for a sufficiently large nonnegative integer $N$ to obtain a holomorphic function. If locally zero points accumulate at the centre, this product vanishes identically, so the centre cannot be a pole and the differential is zero near it, hence is all of $X$ because $X$ is connected, contradicting $\omega\ne0$; therefore every local expression of a nonzero $\omega$ is not identically zero near any point, and the Laurent order supplied by [F2] is a finite integer at every point. [F1, F2, F6, step 1.1, given]

3.1 (Order is chart-independent.) Let $\varphi,\psi$ be centred charts at $p$, so that the transition satisfies $z(w)=a_1w+a_2w^2+\cdots$ with $a_1=z'(0)\ne0$ by step 1.1, and write $z(w)=w\,u(w)$ with $u$ holomorphic and $u(0)=a_1\ne0$; if $h_\varphi(z)=z^k g(z)$ with $g$ holomorphic and $g(0)\ne0$, then $h_\psi(w)=h_\varphi(z(w))z'(w)=w^k\,u(w)^k g(z(w))\,z'(w)$ with $u(0)^kg(0)z'(0)\ne0$, so $h_\psi$ has a zero or pole of the same order $k$ at $0$; hence $\operatorname{ord}_p$ does not depend on the centred chart. [F2, step 1.1, step 2.1]

4.1 (Residue is chart-independent.) Keep two centred charts as in step 3.1 and write $h_\psi=P+H$ with finite principal part $P(w)=\sum_{k=-N}^{-1}a_kw^k$ and $H$ holomorphic near $0$ by [F2], so that $h_\varphi(z)=P(w(z))w'(z)+H(w(z))w'(z)$; the term $H(w(z))w'(z)$ is the derivative of $K(w(z))$ for a local primitive $K$ of $H$ by [F5] and hence is holomorphic at $0$, contributing nothing to the coefficient of $z^{-1}$; in the finite sum the term with $k=-1$ equals $a_{-1}w(z)^{-1}w'(z)=a_{-1}\bigl(1/z+\text{holomorphic}\bigr)$, using $w(z)=z\,v(z)$ with $v(0)\ne0$ and the local logarithm of $v$ by [F5], so it contributes exactly $a_{-1}$ to that coefficient; and for $k\le-2$, writing $w(z)^{k+1}=z^{-m}s(z)$ with $m\ge1$ and $s$ holomorphic, the product $w^kw'=\frac{1}{k+1}\bigl(w^{k+1}\bigr)'$ has vanishing coefficient of $z^{-1}$ because $(-m)z^{-m-1}s+z^{-m}s'$ receives $-ms_m+m s_m=0$ there, $s_m$ being the coefficient of $z^m$ in $s$; hence the coefficient of $z^{-1}$ in $h_\varphi$ is $a_{-1}=\operatorname{Res}_p(\omega)$ in the $\psi$-chart, and the residue is chart-independent. [F2, F3, F5, F7, step 3.1]

5.1 (Conclusion.) Steps 2.1–4.1 show that the order and the residue of a nonzero meromorphic differential at a point are well defined by any centred chart, that they are the Laurent order and the coefficient of $z^{-1}dz$ of a local expression, and that a nonzero differential has no chart expression vanishing identically near a point; a nonzero differential is holomorphic exactly where its order is $\ge0$, and its residue vanishes away from its pole set. [step 2.1, step 3.1, step 4.1] ∎

## Remarks

The transition law $h_\psi(w)=h_\varphi(z(w))z'(w)$ is the statement that
$h\,dz$ transforms as a differential, and it is exactly what makes the order
invariant: the Jacobian factor $z'(w)$ is a unit in the local ring at
$w=0$ because a change of coordinates is injective. The residue is invariant
for the same reason, and the computation in step 4.1 isolates the one term
$k=-1$; a ramified map such as $w\mapsto w^2$ is *not* a change of coordinates,
which is consistent with the pullback formula
$\operatorname{ord}_x(f^*\eta)=e_x\operatorname{ord}_{f(x)}(\eta)+e_x-1$ proved
later for branched maps.
