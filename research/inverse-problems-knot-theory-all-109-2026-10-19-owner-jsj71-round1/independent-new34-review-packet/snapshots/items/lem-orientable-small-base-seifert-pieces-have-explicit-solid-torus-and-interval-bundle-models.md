---
id: lem-orientable-small-base-seifert-pieces-have-explicit-solid-torus-and-interval-bundle-models
kind: lemma
title: "Explicit models for the small orientable Seifert pieces"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: [def-axiom-of-choice, def-countable-choice, thm-choice-implies-dependent-implies-countable-choice, def-incompressibility-seifert-fibration-and-jsj-system, thm-picard-lindelof-local-existence-and-uniqueness, thm-smooth-dependence-of-ode-solutions-on-parameters, thm-isotopy-extension, lem-finite-polygonal-disk-and-collar-surgery]
justified_by: []
proof_strategy: direct
axiom_use: "Full AC implies the countable choice required by smooth isotopy extension. All other constructions use finite charts, circle lifts and explicit quotients."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Printed pp.13–14 for fibered solid tori and p.20, Lemmas 1.14–1.15, for the small interval-bundle exceptions; explicit model identifications are supplied below"
---

## Statement

Assume full AC. Let $M$ be a compact connected orientable smooth Seifert-fibered three-manifold with nonempty boundary and underlying base surface $B$.

* If $B$ is a disk with zero or one exceptional point, $M$ is a solid torus.
* If $B$ is an annulus with no exceptional points, $M$ is $T^2\times I$.
* If $B$ is a Möbius band with no exceptional points, or a disk with exactly two exceptional points both of multiplicity two, $M$ is the orientable twisted interval bundle over the Klein bottle.

For the last manifold an explicit common model is
$$W=\bigl(\mathbb R\times(\mathbb R/\mathbb Z)\times[-1,1]\bigr)/\bigl((x,y,t)\sim(x+1,-y,-t)\bigr).$$
Its interval projection forgets $t$ and has Klein-bottle base. It has a Seifert fibration over a Möbius band by the $y$-circles, and another over a disk with two multiplicity-two points by the $x$-flow. In particular the twisted interval bundle over the torus and the product of a Klein bottle with an interval are not orientable exceptions.

The assertions concern underlying smooth manifolds, with boundary collars allowed to be rounded. They impose no fixed outer-boundary parametrization and assert no triangulation or smoothing of an arbitrary topological three-manifold.

## Facts & Assumptions

**Given:** Full AC and the orientable Seifert piece in the Statement.

[A1] Full AC implies countable choice ([[def-axiom-of-choice]], [[def-countable-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]).

[F1] The local fibered solid tori and exceptional multiplicities are those of [[def-incompressibility-seifert-fibration-and-jsj-system]].

[F2] Smooth finite-dimensional ODEs have unique local solutions and smooth dependence on initial values and parameters ([[thm-picard-lindelof-local-existence-and-uniqueness]], [[thm-smooth-dependence-of-ode-solutions-on-parameters]]).

[F3] Smooth isotopies of a compact annulus in a manifold boundary extend to ambient isotopies preserving that boundary ([[thm-isotopy-extension]], Statement, clauses 1 and 3).

[F4] Finite polygonal disks admit extensions of prescribed PL boundary homeomorphisms; two polygonal disks glued along a boundary interval form a disk, by their matched polygon parameters ([[lem-finite-polygonal-disk-and-collar-surgery]], Proof 6.1–8.1).

## Proof

1.1 We record the circle-bundle coordinates used below. A smooth circle bundle over a disk or rectangle has a smooth trivialization. Construct horizontal lifts in each product chart and blend them by a finite smooth partition on the compact base. Such a partition is obtained by finitely many coordinate bump functions positive on a smaller covering family, divided by their positive sum; their linear combination of right inverses to the projection derivative is again a right inverse. Lift the straight contraction paths from a fixed interior basepoint to all other points. The resulting time-dependent vector fields have unique solutions by [F2]. They exist throughout the time interval: the total space over the compact disk is compact, the projected trajectory remains in the prescribed base path, and finitely many chart neighborhoods give a uniform local existence interval at every possible limiting point. Smooth parameter dependence and reverse transport give inverse smooth trivializations. At boundary corners use extensions of the bundle charts and restrict back to the rectangle; the prescribed projected paths stay inside it. For an annulus, cut the base along a spanning arc and trivialize over the resulting rectangle. Its gluing map has the form $(y,t)\mapsto(g_t(y),t)$ on the two cut faces, where $g_t$ is a family of circle diffeomorphisms. Orientability of the total space forces degree $+1$. Choose lifts $\widetilde g_t:\mathbb R\to\mathbb R$ continuously in the interval parameter $t$. The interpolation $(1-s)\widetilde g_t(y)+sy$ has positive $y$-derivative and period-one translation, so is an isotopy of these gluing maps to the identity. A smooth stationary reparametrization in $s$ may be used. Isotopic return maps have diffeomorphic mapping tori: if $f_s$ joins $f_0$ to $f_1$, the formula $(z,u)\mapsto(f_1^{-1}f_{1-u}(z),u)$ respects $(z,1)\sim(f_0(z),0)$ and the target $f_1$-identification. It is smooth across the seam when the isotopy is stationary near its endpoints. This proves the annulus assertion with explicit coordinates. [A1, F1, F2, given, construct]

2.1 The disk with no exceptional point is covered by the first trivialization in step 1.1, so its total space is $D^2\times S^1$. For a disk with one exceptional point, take a small fibered solid-torus neighborhood of that fiber. The remaining base is an annulus and the regular bundle over it is the product of step 1.1. Attaching this product to the neighborhood along its inner boundary merely adds a boundary collar: use the actual gluing map to parametrize the collar from its attached end, so no extension of an arbitrary torus map is required. Thus the total manifold is the given fibered solid torus with an elongated collar, hence a solid torus. This identification preserves the fiber direction on its boundary. [F1, step 1.1, construct]

2.2 For a Möbius base with no exceptional point, cut along a spanning arc. The rectangle trivialization glues by $(y,t)\mapsto(g_t(y),-t)$. The base normal coordinate is reversed, so orientability forces every $g_t$ to have degree $-1$. Continuous lifts have negative $y$-derivative; interpolating them to $-y$ retains negative derivative and the required degree. The same mapping-torus coordinate change as in step 1.1 identifies this total space with $W$. Forgetting $t$ exhibits $W$ as an interval bundle over $K=\mathbb R^2/\langle(x,y)\mapsto(x+1,-y),(x,y)\mapsto(x,y+1)\rangle$. It is twisted because transport around the first generator reverses $t$, and its total space is orientable because that generator reverses both $y$ and $t$. The $y$-circles have base $(\mathbb R\times[-1,1])/((x,t)\sim(x+1,-t))$, a Möbius band. These statements also directly construct its first Seifert fibration. [F1, step 1.1, construct]

3.1 The flow $(x,y,t)\mapsto(x+s,y,t)$ on $W$ has period two at every generic point. The points $(y,t)=(0,0),(1/2,0)$ have period one, and these are the only shorter orbits. Around either, the return map after time one is the linear half-turn $(v,t)\mapsto(-v,-t)$ on a transverse disk. They therefore give exactly two exceptional fibers of multiplicity two. Its orbit space is the annulus $S^1_y\times[-1,1]$ divided by $(y,t)\mapsto(-y,-t)$. A fundamental rectangle is $0\le y\le1/2$, $-1\le t\le1$, with each vertical side folded by $t\sim-t$. Split it at $t=0$. The two half-rectangles are disks glued along the three-edge boundary interval consisting of the left side, the $t=0$ side and the right side. By [F4] their quotient is a parametrized disk. The fold points $(0,0)$ and $(1/2,0)$ are its two marked interior points. Thus the second asserted Seifert structure on $W$ is explicit. [F1, F4, step 2.2, construct]

3.2 Now let $B$ be a disk with two multiplicity-two points. Cut it along an arc separating those points. Its inverse image is a vertical annulus $A$ splitting $M$ into two pieces of the one-exception disk type of step 2.1. Each is a fibered solid torus, and $A$ is a band around a regular-fiber slope on its boundary. In meridian-longitude coordinates that primitive fiber has class $p\mu+2\lambda$ with $p$ odd. The meridian twist $(z,w)\mapsto(w^kz,w)$ changes $p$ to $p+2k$; take $k=(1-p)/2$ to normalize it to $\mu+2\lambda$. This changes no prescribed outer marking because none is required. The band coordinates from the fibered boundary collar identify $A$ with a standard annular band about this normalized slope. The two solid tori and their marked annuli are therefore fixed standard pairs. [F1, step 2.1, construct]

4.1 It remains to check that their possible gluing maps give one underlying orientable manifold. A fiber-preserving map of their annuli has the form $(\theta,u)\mapsto(F_u(\theta),\sigma(u))$, with circle degree $\varepsilon=\pm1$ and interval orientation $\eta=\pm1$. Interpolate $\sigma$ to the corresponding affine interval map, and choose continuous lifts of $F_u$; their interpolation to $\varepsilon\theta$ retains nonzero derivative of the required sign. Thus the annulus map is isotopic, allowing its boundary circles to move, to $(\theta,u)\mapsto(\varepsilon\theta,\eta u)$. Orientability of the glued manifold requires $\varepsilon\eta=-1$. The two remaining maps differ by $(\theta,u)\mapsto(-\theta,-u)$. This latter map extends over the standard solid torus by $(z,w)\mapsto(\overline z,\overline w)$: choose its standard slope band invariant under simultaneous angle reversal, which reverses both the fiber and transverse band parameters. The preceding annulus isotopies also extend over that solid torus by [F3], using [A1]. Hence all allowable gluings are diffeomorphic. Step 3.1 constructs one of them in $W$, so every disk-two-order-two piece is $W$. The disk and annulus models were proved in steps 1.1–2.1, and the Möbius model in step 2.2. Finally a nontrivial interval bundle over an orientable torus reverses its interval direction around some loop and therefore reverses the total orientation; $K\times I$ is nonorientable because $K$ is. Neither is an additional orientable case. All model identifications were explicit finite constructions in smooth Seifert pieces. [A1, F3, step 1.1, step 2.1, step 2.2, step 3.1, step 3.2, construct] ∎
