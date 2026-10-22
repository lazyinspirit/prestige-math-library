---
id: lem-supported-neat-proper-isotopies-extend-boundary-preservingly
kind: lemma
title: "Supported neat proper isotopies extend boundary-preservingly"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-countable-choice
  - thm-parametrized-implicit-function-theorem-with-higher-regularity
  - lem-manifold-bump-for-a-compact-set-inside-an-open-set
  - thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "C. T. C. Wall, Differential Topology"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
      locator: "Section2.4, isotopy extension by extension and integration of velocity; the neat proper boundary case is proved locally here"
---

## Statement

Assume Countable Choice. Let $P$ be a compact smooth manifold with boundary and $N$ a smooth manifold with boundary. Let $F_t:P\to N$, $0\le t\le1$, be a smooth isotopy of neat proper embeddings: $F_t^{-1}(\partial N)=\partial P$ and $F_t$ is transverse to $\partial N$. Let $V\subset N$ be any open neighborhood of the compact track $\bigcup_tF_t(P)$. Then there is a smooth ambient isotopy $H_t$ of $N$, with $H_0=\operatorname{id}$, preserving $\partial N$, supported in a compact subset of $V$, and satisfying $H_t\circ F_0=F_t$.

In particular it fixes any specified closed set disjoint from the chosen support neighborhood. The assertion also holds relative to a prescribed open region where the isotopy is stationary, provided the support neighborhood for its nonzero velocity has closure disjoint from the protected closed subset. Applied to a neat proper compression-disk isotopy, this supplies the ambient extension for a track with its boundary in $\partial N$ and its interior in $\operatorname{Int}N$.

## Facts & Assumptions

**Given:** The compact source, neat proper isotopy and specified support neighborhood.

[F1] Smooth local implicit inverses with parameters exist ([[thm-parametrized-implicit-function-theorem-with-higher-regularity]]).

[F2] Compact-set smooth cutoffs exist ([[lem-manifold-bump-for-a-compact-set-inside-an-open-set]]). Finite product-chart cutoffs, including one-sided time intervals at the parameter endpoints, follow by multiplying a spatial cutoff by a smooth one-variable time cutoff.

[F3] Smooth local ODE solutions exist uniquely and depend smoothly on their initial values and time ([[thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves]]); a time-dependent field is treated by adjoining its time coordinate.

## Proof

1.1 Define the velocity along the moving image by $Z_t(F_t(p))=\partial_tF_t(p)$. It is well defined because every $F_t$ is an embedding. The map $(p,t)\mapsto(F_t(p),t)$ is an embedding: its differential is injective, its time coordinate separates different times, and compactness gives a homeomorphism onto its image. Thus $Z$ is smooth along this compact track. At a boundary point of the source its value is tangent to $\partial N$, since the curve $t\mapsto F_t(p)$ stays in that boundary. [given, construct]

2.1 There are time-dependent product charts around this track in which the image is $\{z=0\}$ with coordinates $(x,r,z)$, $r\ge0$, and the ambient boundary is $r=0$. To construct them, begin with a boundary chart of $N$. Transversality of $F_t$ makes its boundary-normal coordinate have nonzero derivative along the inward source-normal direction. By [F1] use this ambient normal coordinate as the source coordinate $r$. Choose independent tangential source coordinates $x$ and complementary tangential ambient directions $z$ at the base point. In the ambient boundary chart the map obtained by adding those fixed $z$ directions to the parametrized image has invertible differential; [F1] makes it a smooth local chart with parameters $t$, retaining the same $r$ coordinate. All maps extend smoothly across the boundary in their chart coordinates. Interior points use the same argument without $r$. Compactness selects finitely many such charts. In a boundary chart, write the normal component of the velocity as $Z^r(x,r,t)$. It vanishes at $r=0$, so $$Z^r(x,r,t)=r\int_0^1\partial_r Z^r(x,sr,t)\,ds=rA(x,r,t).$$ This identity holds with smooth $A$ right up to the boundary. [F1, step 1.1, construct, algebra]

3.1 Extend the tangential and $z$ components of $Z$ independently of the transverse coordinates $z$ in each such chart, and extend its normal component by $rA(x,r,t)$, again independently of $z$. Thus each local extension is tangent to the whole ambient boundary, not only along the image. Interior charts may be chosen to have closures in the interior. Patch these finitely many extensions as follows. Refine their spacetime domains by finitely many spatial-open-set times time-interval products, with closures in those domains and smaller products covering the track. By [F2] choose supported product cutoffs equal to one on those smaller products. Their finite sum is positive near the track, so division by that sum gives subordinate weights adding to one there. Their parameter factors are restrictions of smooth one-variable cutoffs, also at $t=0,1$; no corner partition theorem or extension of the entire isotopy past its time endpoints is required. Multiply the weighted field by a second finite product-cutoff construction equal to one near the track and with compact spatial support in $V$. This gives a smooth time-dependent field $X_t$ on $N$, compactly supported in one fixed compact subset of $V$, equal to $Z$ along the track. Extend it by zero outside this neighborhood. Tangency to the boundary is preserved by linear combinations and multiplication by cutoffs. In the relative case perform the construction only near the nonzero-velocity support, put zero on the stationary protected region, and use a partition on their union; the extensions agree there with the zero prescribed velocity. [F2, step 2.1, construct]

4.1 Integrate $X_t$ for $0\le t\le1$. At a boundary chart its normal component has the form $rB(q,r,t)$ by the integral identity of step2.1, now for the patched field. Local smooth extensions across $r=0$ permit application of [F3] in an open Euclidean chart, and a solution starting in $r\ge0$ cannot cross the boundary: while it remains in the chart, $$r(t)=r(t_0)\exp\left(\int_{t_0}^t B(q(s),r(s),s)\,ds\right).$$ Thus positive normal coordinates remain positive and zero remains zero, in both time directions. Local flows consequently patch by uniqueness to a flow on $N$ preserving its boundary. They exist through the full compact time interval: outside the fixed compact spatial support they are constant, and on that compact support a finite chart cover and local uniform existence prevent a finite-time escape or failure of continuation. The inverse time evolution gives the inverse of every time slice, so the resulting $H_t$ are diffeomorphisms. They are the identity outside the support of $X_t$. [F3, step 2.1, step 3.1, construct, algebra]

5.1 For each $p$, the curve $F_t(p)$ solves $\dot x=X_t(x)$ with initial value $F_0(p)$ by construction. The curve $H_t(F_0(p))$ solves the same initial-value problem, so uniqueness in [F3] gives $H_t(F_0(p))=F_t(p)$. All protected points are fixed because the constructed field is zero there. This proves the extension, including the proper boundary/interior disk case. Countable Choice is used only in [F2] and the stated smooth-manifold ODE suppliers; the track cover and the geometric selections are finite. [F3, step 1.1, step 3.1, step 4.1] ∎
