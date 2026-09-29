---
id: ex-basic-riemann-surface-atlases
kind: example
title: Atlases on the sphere, plane, disc and annulus
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-riemann-surface-and-holomorphic-atlas
  - def-riemann-sphere-holomorphic-charts
  - thm-one-point-compactification-properties
  - rem-riemann-sphere-one-point-compactification
  - thm-stereographic-projection-riemann-sphere-homeomorphism
  - ex-euclidean-spaces-and-open-subsets-as-smooth-manifolds
  - def-topological-manifold-without-boundary
  - prop-second-countability-is-hereditary
  - lem-t0-t1-and-hausdorff-are-hereditary
  - thm-path-connected-implies-connected
  - ex-convex-subsets-of-rn-are-path-connected
  - def-complex-annulus
  - def-connected-space
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Eduard Looijenga, Riemann Surfaces (2007)"
      url: https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf
      locator: "Ch. 1 §2, Examples 1.7(i) and 1.9(i), printed pp. 9–10: the projective line as a complex manifold and Riemann surface, together with the standing examples of plane domains."
    - title: "Curtis T. McMullen, Riemann Surfaces, Math 213b course notes (2026)"
      url: https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf
      locator: "Ch. 2, examples of Riemann surfaces and the standard atlas of the sphere."
verification:
  precheck: pass
  audited: 2026-09-30
---

## Example

The two standard charts $\phi_0(z)=z$ on $\widehat{\mathbb C}\setminus\{\infty\}$
and $\phi_\infty(z)=1/z$ on $\widehat{\mathbb C}\setminus\{0\}$, whose
transition on the overlap $\mathbb C^\times$ is $w\mapsto 1/w$, form a
holomorphic atlas on the Riemann sphere; and for every nonempty connected open
$\Omega\subseteq\mathbb C$ — in particular $\Omega=\mathbb C$, the unit disc
$\mathbb D=\{z:|z|<1\}$, and every round annulus
$A(0;r,R)=\{z:r<|z|<R\}$ with $0<r<R$ — the single identity chart
$\mathrm{id}:\Omega\to\mathbb C$ is a holomorphic atlas. Each of these examples
satisfies all the Riemann-surface axioms of
[[def-riemann-surface-and-holomorphic-atlas]], and the sphere's chart transition
is $1/z$ on $\mathbb C^\times$.

## Facts & Assumptions

**Given:** The Riemann sphere $\widehat{\mathbb C}$ with its two standard charts, and the plane domains $\mathbb C$, $\mathbb D$ and $A(0;r,R)$.

[F1] A Riemann surface is a nonempty connected Hausdorff second-countable space with a holomorphic atlas: charts are homeomorphisms onto open subsets of $\mathbb C$ and compatible charts have holomorphic transitions in both directions ([[def-riemann-surface-and-holomorphic-atlas]]).

[F2] On $\widehat{\mathbb C}$ the sets $U_0=\widehat{\mathbb C}\setminus\{\infty\}$ and $U_\infty=\widehat{\mathbb C}\setminus\{0\}$ carry the charts $\phi_0(z)=z$ and $\phi_\infty(z)=1/z$ (with $\phi_\infty(\infty)=0$), and the transition maps on the overlap $\mathbb C^\times$ are $w\mapsto 1/w$ in both directions ([[def-riemann-sphere-holomorphic-charts]]).

[F3] By [[rem-riemann-sphere-one-point-compactification]], $\widehat{\mathbb C}$ is the one-point compactification of $\mathbb C$; hence it is compact and Hausdorff, $\mathbb C$ is an open subspace and, $\mathbb C$ being noncompact, $\mathbb C$ is dense in $\widehat{\mathbb C}$ ([[thm-one-point-compactification-properties]]).

[F4] Stereographic projection is a homeomorphism $\widehat{\mathbb C}\to S^2$, and $S^2$ is a subspace of $\mathbb R^3$ ([[thm-stereographic-projection-riemann-sphere-homeomorphism]]).

[F5] Every Euclidean space $\mathbb R^n$ and every open subset of it is a smooth $n$-manifold; a topological $n$-manifold is by definition Hausdorff and second countable ([[ex-euclidean-spaces-and-open-subsets-as-smooth-manifolds]], [[def-topological-manifold-without-boundary]]).

[F6] Both the Hausdorff property and second countability pass to subspaces ([[lem-t0-t1-and-hausdorff-are-hereditary]], [[prop-second-countability-is-hereditary]]); a countable base of a space carries over to a countable base of any homeomorphic space.

[F7] A path-connected space is connected; every convex subset of $\mathbb R^n$ is path-connected ([[thm-path-connected-implies-connected]], [[ex-convex-subsets-of-rn-are-path-connected]]); the annulus is $A(0;r,R)=\{z:r<|z|<R\}$ with $0<r<R$ ([[def-complex-annulus]]).

## Verification

**Proof technique:** direct.

1.1 (Plane domains give Riemann surfaces through the identity chart.) Let $\Omega\subseteq\mathbb C$ be nonempty, connected and open; as a subset of $\mathbb R^2$ it is Hausdorff and second countable by [F5] and [F6], and the one-chart atlas $\{\mathrm{id}:\Omega\to\mathbb C\}$ has the holomorphic transition $\mathrm{id}\circ\mathrm{id}^{-1}=\mathrm{id}$ on $\Omega$; hence $\Omega$ is a Riemann surface by [F1]. [F1, F5, F6, given]

1.2 (The sphere's two charts are a holomorphic atlas.) The domains $U_0,U_\infty$ cover $\widehat{\mathbb C}$ and each chart is a homeomorphism onto $\mathbb C$; on the overlap the two transitions are $w\mapsto 1/w$, holomorphic on $\mathbb C^\times$ [F2]; $\widehat{\mathbb C}$ is nonempty and, by [F3], compact Hausdorff, and it is connected because a separation of $\widehat{\mathbb C}$ would put the connected dense subspace $\mathbb C$ on one side while the other side, being open and nonempty and containing a point of the closure of $\mathbb C$, meets $\mathbb C$; it is second countable because $S^2\subseteq\mathbb R^3$ is second countable by [F5] and [F6] and a homeomorphism transports a countable base, so [F4] transfers this to $\widehat{\mathbb C}$; hence $\widehat{\mathbb C}$ is a Riemann surface by [F1]. [F1, F2, F3, F4, F5, F6, given]

2.1 (The listed plane domains satisfy the hypotheses of step 1.1.) The plane $\mathbb C$ and the unit disc $\mathbb D$ are convex, hence path-connected and therefore connected by [F7]; the annulus $A(0;r,R)$ with $0<r<R$ is nonempty: fix a finite radius $\rho\in(r,R)$, taking $\rho=(r+R)/2$ if $R<\infty$ and $\rho=r+1$ if $R=\infty$. It is path-connected because for $u\in A(0;r,R)$ the radial segment from $u$ to $\tfrac{\rho}{|u|}u$ stays in the annulus (its modulus runs between $|u|$ and $\rho$, both in $(r,R)$) and any two points can be joined through the circle $|z|=\rho$; therefore step 1.1 applies to $\mathbb C$, $\mathbb D$ and $A(0;r,R)$. [F7, step 1.1, given]

3.1 (Conclusion.) Steps 1.1 and 2.1 exhibit the identity atlas on $\mathbb C$, on the unit disc and on every round annulus $A(0;r,R)$ with $0<r<R$, and step 1.2 exhibits the two-chart atlas on the sphere with transition $w\mapsto1/w$ on $\mathbb C^\times$; in each case the transition maps are holomorphic and the Riemann-surface axioms hold, as claimed. [step 1.1, step 1.2, step 2.1] ∎

## Remarks

The identity atlas on a plane domain is the smallest possible holomorphic atlas; its only transition is the identity. The sphere is the one case here where a second chart is needed; its standard two-chart atlas is contained in the maximal atlas of all charts compatible with it. The annulus is connected but not simply connected, and its identity chart is an injective coordinate onto the open annulus itself.
