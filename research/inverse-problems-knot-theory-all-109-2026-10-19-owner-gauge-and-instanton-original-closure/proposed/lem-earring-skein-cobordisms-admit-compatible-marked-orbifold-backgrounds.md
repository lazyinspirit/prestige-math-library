---
id: lem-earring-skein-cobordisms-admit-compatible-marked-orbifold-backgrounds
kind: lemma
title: Earring skein cobordisms admit marked orbifold backgrounds
status: draft
origin: session
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - lem-earring-relative-arc-data-supply-admissible-orbifold-and-determinant-lifts
  - thm-poincare-lefschetz-duality
  - thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold
  - thm-first-chern-class-classifies-complex-line-bundles
  - lem-the-second-homotopy-group-of-so-three-vanishes
  - lem-finite-good-covers-of-compact-smooth-boundary-manifolds-compute-integral-cohomology
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Kronheimer and Mrowka, Khovanov homology is an unknot-detector
      url: https://people.math.harvard.edu/~kronheim/khovanov-unknot.pdf
      locator: full local bundle construction PDF7–10; classification discussion PDF12–15; actual local saddle surfaces PDF77–79
---

## Statement

Assume full AC. In $[0,m]\times S^3$ take a finite composite of the specified local skein saddles and standard disk births or deaths, with every surface component meeting a temporal boundary and every local ball disjoint from the fixed basepoint earring and its radius arc. Include the vertical earring annulus in the surface $\Sigma$, and put $\Omega=[0,m]\times\omega$. There are actual marked order-two orbifold $SO(3)$ data on this four-dimensional pair, product in the temporal end collars, with surface isotropy rotation by $\pi$ and ordinary residue $\frac14\operatorname{diag}(i,-i)d\theta$. Their sheet cover on $\Sigma$ is dual modulo two to $\partial\Omega\cap\Sigma$. The exterior bundle has $w_2=PD_{\mathbb F_2}[\Omega]$ and an actual $U(2)$ lift with determinant class $PD_{\mathbb Z}[\Omega]$. Every determinant-one connection has central stabilizer only. The endpoint restrictions are admissible based-link earring data, with nontrivial axis cover on the two marked components and trivial axis covers on the other oriented end components.

The assertion is existence of compatible backgrounds for these actual surfaces. It asserts no four-dimensional count, cobordism-map invariance or sutured nonvanishing theorem. Whole end collars may be fixed for a chosen background. Cut pieces of that background retain their actual restriction identifications.

## Facts & Assumptions

**Given:** The specified finite disk-and-band surface, every component having temporal boundary, its fixed vertical marking rectangle and full AC.

[F1] [[lem-earring-relative-arc-data-supply-admissible-orbifold-and-determinant-lifts]]: The actual boundary models have meridian/marked-longitude lifts $i,j$, and quaternionic commutator $-1$ computes their $w_2$. It also supplies the finite cocycle construction of a determinant lift from an integral lift of $w_2$.

[F2] Relative cap duality is coefficient-compatible. [[thm-poincare-lefschetz-duality]]

[F3] Integral degree-two classes are Chern classes of actual line bundles. Finite good covers compute these classes compatibly and supply smooth partitions. [[thm-first-chern-class-classifies-complex-line-bundles]] [[lem-finite-good-covers-of-compact-smooth-boundary-manifolds-compute-integral-cohomology]]

[F4] The quaternionic cover has $\pi_1SO(3)=\mathbb Z/2$ and $\pi_2SO(3)=0$. [[lem-the-second-homotopy-group-of-so-three-vanishes]]

[F5] [[thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold]]: A closed smooth embedded surface has an actual normal tube, proved by Euclidean retraction and inverse radii under Countable Choice.

[A1] Full AC is [[def-axiom-of-choice]], inherited from these bundle and duality suppliers.

## Proof

1.1 Every component has boundary by the stated hypothesis. For the saddle-only subcase this is automatic: a closed component would have a height minimum and maximum, whereas its critical points have index one. A standard birth or death supplies an actual disk, and the saddles supply its actual attached bands, so the surface still has the specified finite disk-and-band description. A finite free-edge collapse gives a finite graph spine, and the surface is a regular neighborhood of that spine. Double the pair through its supplied temporal product collars and apply [F5] to that closed smooth surface; restricting gives its actual normal tube. On a smaller temporal collar use the product tube. Their maps have the same normal derivative, so interpolation in finite normal coordinates, with a cutoff in the temporal coordinate, agrees to first order on the zero section; a sufficiently small common normal radius makes this interpolation a diffeomorphism by local inversion and compact separation. This supplies a tube product near both ends. The normal two-plane bundle $N$ has orientation line $o(\Sigma)$ because the ambient four-manifold is oriented. It has a nowhere-zero smooth section: choose unit vectors over the finitely many graph vertices, extend over its edges since the circle fiber is connected, and transport over the collapse homotopy using a smooth connection in finite surface charts. Piecewise smooth choices may be smoothed with positive compact nonzero tolerance. Thus choose an isometry $N\cong\mathbb R\oplus o(\Sigma)$, without imposing any relative extension of previously chosen boundary normal frames. The latter are not input to this existence statement; they will be the restrictions of the constructed background. The two vertical arcs $\partial\Omega\cap\Sigma$ define a double cover $\Sigma_\Delta$ by cutting the surface along those arcs and exchanging two copies. It has odd monodromy on each marked boundary component and even monodromy on the other boundary circles. [given, F3, F5, A1, construct]

2.1 Here is the actual local singular reduction, including its cocycle. On $\Sigma_\Delta$ take $\widetilde Q=\mathbb R\oplus o(\Sigma)$ and identify both this plane and the pullback of $N$ with a complex coordinate whose changes are identity or conjugation. For a normal vector $v$, define $\rho(v)(w)=v\bar w$ from the opposite sheet's $\widetilde Q$ to this one. Identity/conjugation changes preserve this formula, and for unit $v$ one has $\rho(v)\rho(\tau v)=1$. Over the deleted normal tube identify the two sheet bundles by $\rho(s)$, with $s$ the unit normal vector. This produces an actual two-plane bundle $Q$ on that tube and an oriented three-plane $\det Q\oplus Q$. Its non-Hausdorff two-sheet extensions are exactly the supplied two copies of $\widetilde Q$. In the normal angular coordinate the descended plane connection is $a_0+\tfrac12 i\,d\theta$; writing its adjoint action as an $SU(2)$ matrix gives residue $\tfrac14\operatorname{diag}(i,-i)d\theta$. On a local normal double cover $\theta=2\varphi$, the gauge $\exp(-\varphi\operatorname{diag}(i,-i)/2)$ removes that residue. It changes by the half-turn under the deck action. Consequently the resulting finite local bundle charts are genuine smooth order-two orbifold charts with that isotropy. The identity $\rho(s)\rho(\tau s)=1$ supplies the overlap cocycle; this is not an appeal to the primary's separate Morse-theory classification of all such data. [F1, F3, step 1.1, construct]

3.1 Compute its exterior obstruction before gluing. Over a loop $\gamma$ in $\Sigma$, let $\epsilon$ record reversal of the normal orientation and let $a$ record reversal of the meridional axis. The corresponding boundary circle bundle is a torus or Klein bottle. Its lifted meridian is $i$; a longitudinal lift is in the identity or reversing component of its axis normalizer according to $a$. Its lifted face relation is $hih^{-1}i^{-(-1)^\epsilon}=(-1)^{a+\epsilon}$. Hence the mod-two obstruction on that fibered surface is $a+\epsilon$. In the constructed reduction, normal reversal contributes one axis reversal and sheet exchange contributes another, so $a=w_1(\Sigma)(\gamma)+w_1(\Delta)(\gamma)$ and $\epsilon=w_1(\Sigma)(\gamma)$. Thus the obstruction is precisely $w_1(\Delta)(\gamma)$. This determines the degree-two class on the boundary tube: the base retracts to its finite graph, the circle bundle has a section from step1.1, and its finite cells are graph edges crossed with the fiber plus its one-skeleton. There is no base two-cell class left. On the compact ordinary exterior $E$ put $c=PD_{\mathbb Z}[\Omega]\in H^2(E;\mathbb Z)$, using the orientation of the vertical rectangle. Its restriction evaluates on each such fibered surface by counting intersections with the two marked arcs, namely $w_1(\Delta)(\gamma)$ modulo two. Its mod-two reduction therefore equals the class just computed. [F1, F2, F4, step 1.1, step 2.1, construct, algebra]

4.1 Choose a line bundle $L$ with $c_1(L)=c$. The projectivization of $\mathbb C\oplus L$ has $w_2=c\bmod2$: on a two-cell its determinant clutch has winding $n$, and its trace-free quaternion lift closes with sign $(-1)^n$, exactly the obstruction calculation of [F1]. This already gives the required exterior $U(2)$ lift. Its restriction to the tube boundary is isomorphic to the bundle in step2.1. To construct the isomorphism, use the finite three-dimensional cells of the circle bundle over the graph. Trivialize both oriented three-plane bundles on its one-skeleton. The obstruction to extending a comparison over the two-cells is the difference of their $w_2$ cocycles, zero after changing the one-skeleton comparison by a mod-two cochain. Over each three-cell the remaining comparison is a map of its boundary sphere to $SO(3)$, which contracts by [F4]. These extensions give an actual isomorphism; smooth it in bundle homomorphism charts and polar-normalize, retaining positive determinant. Glue along a product collar. Choose a metric and model connection by the finite invariant partitions, fixing smaller temporal product collars. This constructs the full marked orbifold atlas and actual exterior determinant lift, with no global $SU(2)$ lift of its nonzero-$w_2$ exterior claimed. [F1, F2, F3, F4, step 3.1, construct]

5.1 On an oriented temporal link component the normal orientation is trivial, so its axis reversal is exactly its sheet-cover reversal. Step1.1 gives the two odd marked components and the even remaining components. The two-dimensional torus comparison and explicit solid-torus construction of [F1] therefore identify these end restrictions with admissible based-link earring models; the same finite three-cell comparison extends their exterior bundle identifications. In particular the vertical earring annulus has the nontrivial axis cover throughout. A determinant-one stabilizer of any connection is a parallel unit quaternion. At its order-two fixed core it lies in the axis circle; parallel transport around the earring reverses that circle by $j$, so its imaginary coefficient vanishes. It is therefore $\pm1$, everywhere, exactly as in [F1]. For a chosen background, cutting a product temporal collar and composing such cobordisms uses its actual transition identifications, with ordinary associativity of restriction and gluing. Different finite metric families on that fixed pair vary only metrics and connections, not the background. These are the topological inputs for a later cobordism count; no compactness, determinant orientation or finite count follows from their existence alone. ∎ [F1, F4, step 1.1, step 4.1, construct]
