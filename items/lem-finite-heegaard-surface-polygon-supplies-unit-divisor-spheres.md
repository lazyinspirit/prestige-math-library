---
id: lem-finite-heegaard-surface-polygon-supplies-unit-divisor-spheres
kind: lemma
title: "A finite Heegaard surface polygon supplies unit-divisor spheres"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - lem-neat-balanced-handlebody-cuts-supply-finite-surface-polygons
  - lem-multipointed-symmetric-product-spheres-have-index-shift-two-k
  - lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space
  - thm-fundamental-theorem-on-flows
  - lem-manifold-bump-for-a-compact-set-inside-an-open-set
justified_by: []
proof_strategy: direct
axiom_use: "Countable choice is inherited from the actual sphere index comparison. The two-sheet construction and all auxiliary selections are finite."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Rasmussen, Floer homology and knot complements"
      url: "https://arxiv.org/pdf/math/0306378"
      locator: "Section9.3, Lemma9.2 uses a positive unit-divisor sphere for domain normalization. The finite construction here supplies existence without asserting a classification of all sphere classes."
---

## Statement

Assume countable choice. Let $\Sigma$ be an oriented genus-$h$ smooth surface with the actual finite commutator polygon supplied by neat balanced handlebody cut data, and give it any compatible Riemann surface structure. For every $m\ge2$ and every $\mathbf x\in\operatorname{Sym}^m\Sigma$, there is a smooth based sphere with point-divisor degree one. Reversing its source orientation gives degree minus one. Thus a realized Whitney class may be modified by interior sphere sums to add any integer multiple of the constant surface domain, without changing its corners or physical boundary data. For $m=h+k-1$, the corresponding actual index shift is $2k$ times that integer. No injectivity of sphere degree, homotopy-class/domain bijection or positive-domain incidence normalization is asserted.

## Facts & Assumptions

**Given:** The finite oriented commutator polygon, $m\ge2$, compatible smooth complex charts and the base divisor $\mathbf x$.

[F1] Neat balanced handlebody cut data construct the actual commutator polygon by finite cut-and-paste operations. [[lem-neat-balanced-handlebody-cuts-supply-finite-surface-polygons]]

[F2] For every actual smooth sphere, its determinant tangent degree is $(m+1-h)$ times its point-divisor degree. Attaching it to a physical Whitney model shifts its actual Fredholm index by twice that determinant degree. This theorem does not itself assert existence of a degree-one sphere. [[lem-multipointed-symmetric-product-spheres-have-index-shift-two-k]] [[def-countable-choice]]

[F3] Smooth local inverse coordinates, compactly supported coordinate vector fields and their flows allow a finite local coordinate adjustment while preserving orientation. [[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]] [[lem-manifold-bump-for-a-compact-set-inside-an-open-set]] [[thm-fundamental-theorem-on-flows]]

## Proof

1.1 **Construct the two-sheeted map on the supplied surface.** In an oriented sphere choose $h+1$ disjoint embedded straight arcs in one planar chart. Cut two copies of the sphere along these arcs and cross-glue their two banks, preserving orientation. The first slit joins the two cut spheres, giving a sphere; each additional paired slit joins two boundary circles by a tube and adds one handle. This assertion is an explicit cut description: remove the small disk surrounding that slit from each sheet, and its cross-glued banks form the cylinder between the two resulting rim circles. It is precisely one oriented one-handle on the previously joined surface. Induction gives the ordinary $h$-handle commutator polygon. Identify that polygon with the supplied one by matching their labelled handle bands and polygon interiors. For the smooth matching, cut off a vertex disk and the finitely many edge bands in both presentations, use their product collar coordinates on the bands, and match each remaining parametrized disk by its boundary angle map. An increasing angle lift $f(\theta)$ extends by $\theta\mapsto(1-\chi(r))(\theta+c)+\chi(r)f(\theta)$, with $\chi=0$ near the center and $1$ on its boundary collar; its angular derivative is positive, and near the center it is a rotation. Apply the same interpolation on the vertex disk after matching its cyclic sectors. These finite disk and collar maps agree on smaller common collars and give an orientation-preserving smooth parametrization of $\Sigma$ by the two-sheeted surface, rather than an invocation of an arbitrary-surface classification theorem. The sheet projection is a degree-two map $p:\Sigma\to S^2$, a local diffeomorphism except at the $2h+2$ slit endpoints, where its coordinate model is $z\mapsto z^2$. It is a genuine finite construction, with neither Riemann–Roch nor the existence of a holomorphic pencil on the previously chosen complex surface used. [F1, F3, given, construct]

2.1 **Take the unordered fibers, in the actual symmetric-product smooth charts.** Choose $m-2$ distinct constant points away from the branch points, with distinct images under $p$. These choices exclude only finitely many points or fibers at each finite step. Define $u(a)=p^{-1}(a)+c_1+\cdots+c_{m-2}$. Near a regular value its two roots vary smoothly. At a branch value choose a compatible complex coordinate $z$ on $\Sigma$ and an oriented complex coordinate $a$ on the target. The existing local projection has a smooth positive degree-two branch chart; its local source chart can be made equal to $z$ by an orientation-preserving local diffeomorphism, extended over a small larger disk by [F3]. In detail contract the derivative in $GL^+(2,\mathbb R)$ to a rotation and then a positive scaling, and contract the residual map with identity first jet by $F_t(z)=t^{-1}F(tz)$, extended at $t=0$ by its derivative; supported flows extend this disk isotopy. Apply this at the finitely many disjoint branch charts. The unordered two-root coefficient chart is then $(s_1,s_2)=(0,-a)$, so $u$ is smooth also at a branch value. Collisions with a constant point at a regular value are smooth because a smooth ordered tuple followed by elementary symmetric functions is smooth. Away from the constants and branch points, each $z\in\Sigma$ occurs in exactly one fiber, at $a=p(z)$, with positive local degree one. Hence the actual point-divisor degree is one there and is one at every point by the divisor-degree invariance in [F2]. [F2, F3, step 1.1, construct, algebra]

3.1 **Base the sphere and perform actual connected sums.** Join $u(a_0)$ to $\mathbf x$ by a path in the symmetric product: move its finitely many points one at a time along finite chart paths on the connected surface, permitting collisions. Contract a small disk at $a_0$ to its value and attach this path as a thin outgoing and returning tube. Smoothing the ends gives a based sphere representing the usual change of basepoint; its domain degree is unchanged because the added cylinder factors through a path. Reverse the source orientation for degree minus one. Interior connected sum with finitely many copies changes each point-divisor degree of a Whitney class by the number of copies, so its region domain changes by that multiple of $\Sigma$, and physical boundary and corner data remain fixed. Apply the actual determinant and Fredholm comparison [F2]: each positive copy shifts the index by $2(m+1-h)=2k$, and each negative copy gives the opposite shift. This proves only the asserted existence and shift, without classifying any other sphere or Whitney classes. [F2, F3, step 2.1, construct, algebra] ∎
