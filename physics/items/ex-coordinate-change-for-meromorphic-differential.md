---
id: ex-coordinate-change-for-meromorphic-differential
kind: example
title: Orders and residues under inversion on the sphere
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-meromorphic-differential-on-a-riemann-surface
  - thm-residue-theorem-compact-riemann-surface
  - def-riemann-sphere-holomorphic-charts
  - ex-basic-riemann-surface-atlases
  - rem-riemann-sphere-one-point-compactification
  - thm-algebra-of-complex-derivatives
  - def-residue-isolated-singularity
  - def-isolated-singularity-types
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Eduard Looijenga, Riemann Surfaces (2007)"
      url: https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf
      locator: "Ch. 6 §2, Definition 6.2 and Proposition 6.3, printed pp. 54–55: residues computed in a local coordinate and the vanishing of the total residue; the standard computations of dz/z and dz at infinity."
    - title: "Curtis T. McMullen, Riemann Surfaces, Math 213b course notes (2026)"
      url: https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf
      locator: "Ch. 6, meromorphic forms and their residues; the change-of-coordinates computation of dz in the chart at infinity."
verification:
  precheck: pass
  audited: 2026-09-30
---

## Example

On the Riemann sphere $\widehat{\mathbb C}$ with the standard charts
$\phi_0(z)=z$ on $U_0=\widehat{\mathbb C}\setminus\{\infty\}$ and
$\phi_\infty(z)=1/z$ on $U_\infty=\widehat{\mathbb C}\setminus\{0\}$,
consider the meromorphic differentials $\omega=\dfrac{dz}{z}$ and $\eta=dz$.
Then:

1. $\omega$ has simple poles exactly at $0$ and $\infty$, with
   $\operatorname{Res}_0(\omega)=+1$ and $\operatorname{Res}_\infty(\omega)=-1$;
2. $\eta$ has a pole of order $2$ at $\infty$ — that is,
   $\operatorname{ord}_\infty(\eta)=-2$ — with
   $\operatorname{Res}_\infty(\eta)=0$, and no other pole;
3. in both cases the residues sum to $0$, in agreement with the residue theorem
   on a compact Riemann surface.

## Facts & Assumptions

**Given:** The Riemann sphere $\widehat{\mathbb C}$ with its standard charts $\phi_0,\phi_\infty$, and the differentials $\omega=dz/z$ and $\eta=dz$.

[F1] $\phi_0:U_0\to\mathbb C$ is $z\mapsto z$ and $\phi_\infty:U_\infty\to\mathbb C$ is $z\mapsto1/z$ (with $\phi_\infty(\infty)=0$), where $U_0=\widehat{\mathbb C}\setminus\{\infty\}$ and $U_\infty=\widehat{\mathbb C}\setminus\{0\}$; the transitions on the overlap $\mathbb C^\times$ are $w\mapsto1/w$ in both directions ([[def-riemann-sphere-holomorphic-charts]]).

[F2] With these charts $\widehat{\mathbb C}$ is a Riemann surface ([[ex-basic-riemann-surface-atlases]]), and it is compact and Hausdorff, being the one-point compactification of $\mathbb C$ ([[rem-riemann-sphere-one-point-compactification]]).

[F3] A meromorphic differential on a Riemann surface is a family of local meromorphic expressions $h_\varphi$ satisfying the transition law $h_\psi(w)=h_\varphi(z(w))\,z'(w)$ on overlaps, where $z=\varphi\circ\psi^{-1}$; its order at a point is the Laurent order of any centred local expression and its residue is the coefficient of $z^{-1}$ there ([[def-meromorphic-differential-on-a-riemann-surface]]).

[F4] The residue of an isolated singularity is the Laurent coefficient $c_{-1}$, and is unchanged by shrinking the punctured disc; a local expression $z^{-1}$ has residue $1$ at $0$, and a local expression with Laurent expansion $c_{-2}z^{-2}$ has residue $0$ at $0$ ([[def-residue-isolated-singularity]], [[def-isolated-singularity-types]]).

[F5] The reciprocal rule for complex derivatives: if $g(a)\ne0$ then $(1/g)'(a)=-g'(a)/g(a)^2$ ([[thm-algebra-of-complex-derivatives]]); in particular the map $w\mapsto1/w$ has derivative $-1/w^2$ on $\mathbb C^\times$, so with $z=1/w$ one has $dz=-\dfrac{dw}{w^2}$.

[F6] Residue theorem on a compact Riemann surface: a meromorphic differential on a compact Riemann surface has only finitely many nonzero residues and their total sum is $0$ ([[thm-residue-theorem-compact-riemann-surface]]).


## Verification

**Proof technique:** direct.

1.1 (The finite-chart expression of $\omega$.) In the chart $\phi_0$ the local expression of $\omega=\frac{dz}{z}$ is $h_{\phi_0}(z)=1/z$, holomorphic on $\mathbb C^\times$ with Laurent expansion $z^{-1}$ at $0$; hence $\operatorname{ord}_0(\omega)=-1$ and $\operatorname{Res}_0(\omega)=1$, and $0$ is the only pole of $\omega$ in the chart $U_0$. [F1, F3, F4]

1.2 (The infinity-chart expression of $\omega$.) Put $w=\phi_\infty(z)=1/z$, so that $z=1/w$ and $z'(w)=-1/w^2$ by the reciprocal rule; the transition law gives $h_{\phi_\infty}(w)=h_{\phi_0}\bigl(z(w)\bigr)z'(w)=w\cdot(-1/w^2)=-1/w$. Thus the chart expression at infinity has a simple pole at $w=0$, the point $z=\infty$, so $\operatorname{ord}_\infty(\omega)=-1$ and $\operatorname{Res}_\infty(\omega)=-1$, and it is holomorphic on $U_\infty\setminus\{\infty\}$. [F1, F3, F4, F5]

1.3 (The differential $\eta=dz$ in both charts.) In the chart $\phi_0$ the local expression of $\eta$ is $h_{\phi_0}\equiv1$, holomorphic on all of $\mathbb C$, so $\eta$ has no pole in $U_0$ and $\operatorname{ord}_p(\eta)=0$ for $p\in\mathbb C$; in the chart $\phi_\infty$ the transition law with the same factor $z'(w)=-1/w^2$ gives $h_{\phi_\infty}(w)=1\cdot(-1/w^2)=-1/w^2$, holomorphic on $\mathbb C^\times$; hence $\operatorname{ord}_\infty(\eta)=-2$ and $\operatorname{Res}_\infty(\eta)=0$, the Laurent expansion $-w^{-2}$ having no $w^{-1}$ term. [F1, F3, F4, F5]

2.1 (Pole set of $\omega$.) The two chart domains cover $\widehat{\mathbb C}$, the only pole of $h_{\phi_0}$ is $z=0$ and the only pole of $h_{\phi_\infty}$ is $w=0$, corresponding to $z=\infty$; hence the pole set of $\omega$ is exactly $\{0,\infty\}$, both poles simple, with residues $+1$ and $-1$. [F1, step 1.1, step 1.2]

2.2 (Pole set of $\eta$.) Since $h_{\phi_0}$ is holomorphic on $U_0$ and the only pole of $h_{\phi_\infty}$ is at $w=0$, the pole set of $\eta$ is exactly $\{\infty\}$, a single pole of order $2$ with residue $0$. [step 1.3]

3.1 (Agreement with the residue theorem.) The sphere is a compact Riemann surface [F2], $\omega$ and $\eta$ are meromorphic differentials on it [F3], and each has a finite pole set, so [F6] applies to both; the totals are $\operatorname{Res}_0(\omega)+\operatorname{Res}_\infty(\omega)=1+(-1)=0$ and $\operatorname{Res}_\infty(\eta)=0$, and in each case only finitely many residues are nonzero, so both computations agree with the residue theorem. [F2, F3, F6, step 2.1, step 2.2] ∎


## Remarks

The inversion $z=1/w$ is exactly what the example is testing: in the chart at
infinity the differential $dz$ becomes $-dw/w^2$, so the expression that looks
constant in the finite chart acquires a double pole at infinity, and $dz/z$,
which has residue $+1$ at $0$, acquires residue $-1$ at $\infty$ because the
transition factor $z'(w)=-1/w^2$ turns the expression $w$ into $-1/w$. This is
the transition law of [[def-meromorphic-differential-on-a-riemann-surface]] in
its simplest nontrivial instance, and it shows that order and residue are
genuinely features of the differential and not of a chosen coordinate. The
sphere is also the smallest illustration of the residue theorem: a nonzero
residue at a finite point must be balanced by a residue elsewhere, and a
meromorphic differential whose only pole is at infinity must have residue $0$
there, as $\eta=dz$ illustrates.
