---
id: lem-complete-heegaard-data-have-a-zero-chern-spin-c-sector
kind: lemma
title: "Complete Heegaard data have a zero-Chern Spin-c sector"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - def-given-spin-and-spinc-structures-and-associated-spinor-bundles
  - thm-real-pin-spin-topological-double-covers
  - thm-morse-sard-for-smooth-manifolds
  - lem-proper-compression-disks-admit-neat-witnesses-with-standard-cut-balls
  - lem-finite-planar-hole-boundary-maps-extend-with-prescribed-collars
  - lem-finite-smooth-surface-presentations-have-prescribed-collar-matches
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Gallier, Clifford Algebras, Clifford Groups, and a Generalization of the Quaternions"
      url: "https://arxiv.org/pdf/0805.0311"
      locator: "Spin covering background; the finite Heegaard construction and its quadratic boundary test are proved here rather than assuming every oriented three-manifold is Spin"
---

## Statement

Assume Countable Choice. Give a complete oriented Heegaard splitting $Y=U_\alpha\cup_\Sigma U_\beta$ of a closed connected smooth three-manifold, with actual disjoint compression disks cutting each handlebody into a ball. Then $TY$ has a Spin structure, constructed by finite handle and boundary-lift operations. Its induced Spin-c structure has trivial determinant line and hence first Chern class zero. In particular its Chern class evaluates to zero on every capped periodic domain, whether or not that sector has a generator in the given diagram.

Consequently the following two full-diagram conditions are equivalent: every nonzero normalized integral periodic domain has both signs; and for EVERY Spin-c structure $\mathfrak s$ on Y, including those with no diagram generators, every such domain with $\langle c_1(\mathfrak s),H(P)\rangle=0$ has both signs. This equivalence does not identify either condition with a test only at existing generators. For ONE specified sector, ordinary weak admissibility remains a separate condition.

## Statement references

[[def-countable-choice]]

[[def-given-spin-and-spinc-structures-and-associated-spinor-bundles]]

## Facts & Assumptions

**Given:** The actual complete splitting and its compression disks. All vector spaces in the boundary argument are finite-dimensional over $\mathbb F_2$.

[F1] Spin is the actual central double cover of the oriented orthonormal frame group. A rotation through angle theta in an oriented two-plane lifts as $\cos(\theta/2)+e_1e_2\sin(\theta/2)$, so a full positive rotation changes its lift sign. Spin-c is $(\operatorname{Spin}(3)\times U(1))/\{(1,1),(-1,-1)\}$. Smooth finite-dimensional Sard holds under Countable Choice; a smooth loop in the unit-quaternion sphere misses a point and therefore contracts in its stereographic three-space. ([[thm-real-pin-spin-topological-double-covers]], [[def-given-spin-and-spinc-structures-and-associated-spinor-bundles]], [[thm-morse-sard-for-smooth-manifolds]])

[F2] The supplied broad compression witnesses have same-boundary neat replacements and actual smooth cut-ball parameters. For an abstract handlebody first identify its finite graph neighborhood with the standard ball-with-handles model, prepare there and transport back. Finite planar cuts and prescribed smooth collars give the usual meridian and dual-loop boundary coordinates. ([[lem-proper-compression-disks-admit-neat-witnesses-with-standard-cut-balls]], [[lem-finite-planar-hole-boundary-maps-extend-with-prescribed-collars]])

[F3] Finite disk-band surface presentations and their smooth collar identifications are actual constructions. A compact surface with boundary has a disk-band model; its tangent framing and boundary turning can be computed on those finitely many disks and bands. ([[lem-finite-smooth-surface-presentations-have-prescribed-collar-matches]])

## Proof

1.1 Prepare the disks by [F2]. Each handlebody is one parametrized zero-handle and g ordinary one-handles. Its tangent bundle has an explicit frame: take the coordinate frame on the ball, and on each handle interpolate between the two attaching-disk frame germs along its interval. The two disk germs contract to their center values, and a finite path of positive frames joins those values; Gram--Schmidt and plane rotations give that path. Restore the germs on the attaching collars, so the frames paste smoothly. This constructs an oriented global frame on $U_\alpha$ and its trivial Spin lift. Restrict it, using the outward normal, to a Spin structure sigma on the oriented boundary surface. No framing of the closed Y has been assumed. [F1, F2, given, construct, algebra]

2.1 Define its boundary quadratic test explicitly. For an oriented embedded circle C on Sigma, take its oriented tangent, its in-surface normal and the outward normal. Lift this frame loop using sigma and record $\epsilon(C)=0$ if the lift closes and one otherwise. Put $q(C)=\epsilon(C)+1$ and sum this value on disjoint components. It depends only on the mod-two homology class. Here are the finite checks. On a boundary circle of a disk its tangent frame makes one full rotation, so epsilon is one and q is zero. The cut-ball coordinates in [F2] give a finite polygon for Sigma. Move any finitely many cycles slightly transverse to its finite edges by [F1]; their intersections are finite. The resulting planar pieces are bounded by finitely many proper arcs and Jordan circles. Joining their finitely many holes to their outer boundaries by disjoint arcs gives actual disk pieces; pasting back the finite cut strips gives the disk-band presentation of any subsurface F used here. Thus [F3] applies to constructed finite data, not to an assumed triangulation of an arbitrary topological surface. An oriented tangent framing exists on that presentation; the total boundary turning is $\chi(F)$: a disk contributes one and each attached band subtracts one, as is seen by its two rounded attaching arcs. Any lift-sign contribution of a loop of this fixed framing cancels on the total boundary, which is a boundary chain in F. Hence $\sum_{C\subset\partial F}q(C)=\chi(F)+|\partial F|=0$ modulo two. A mod-two null-homologous embedded cycle on Sigma bounds a subsurface: cut along it, assign the two coefficient values by its finite face equation, and take the coefficient-one faces. Finally smooth one transverse crossing of two oriented cycles. The two inserted tangent quarter-turns are opposite, so the total epsilon is unchanged, while the number of components changes parity. Resolving all crossings therefore gives $$q(a+b)=q(a)+q(b)+a\mathbin\cdot b.$$ This also proves independence of representatives: the resolution of two homologous cycles bounds a subsurface, and their intersection parity is the alternating self-pairing zero. These computations use actual frame lifts and finite cuts, not an assumed classification of surface Spin structures. [F1, F3, step 1.1, construct, algebra]

3.1 Let A and B be the subspaces spanned by alpha and beta meridians in $H_1(\Sigma;\mathbb F_2)$. The cut-sphere and dual-loop coordinates of [F2] show that each has dimension g, is isotropic for the intersection pairing, and is the kernel of the map to its handlebody's first homology. The quadratic test of step2.1 vanishes on A. Indeed a meridian bounds its actual neat disk in $U_\alpha$; the boundary surface framing differs from the disk tangent-and-normal framing by a constant rotation in its normal two-plane. Its lift sign is therefore the disk's sign one, giving q zero. Since intersections vanish on A, the quadratic rule makes q zero on its entire span. Its restriction to B is a linear functional, because B too is isotropic, and is zero on $A\cap B$. Thus finite linear extension gives $\ell\in H^1(\Sigma;\mathbb F_2)$ vanishing on A and with $\ell|_B=q|_B$. Explicitly define it first on $(A+B)/A$ and extend a finite basis to $H_1(\Sigma)/A$. [F2, step 2.1, construct, algebra]

4.1 Twist the Spin lift on $U_\alpha$ by the flat sign bundle whose signs on its finitely many graph loops are the functional descending from ell. Such a bundle is constructed by taking trivial signs on the cut ball and choosing the indicated sign in the two-end identification of each handle. Its restriction to the boundary changes the lift sign on C by $\ell(C)$, so its quadratic test is $q'=q+\ell$. It vanishes on both A and B. Extend this boundary lift across $U_\beta$ by its compression description: from a boundary collar attach the g disjoint two-handles along beta meridians, then fill the remaining sphere by a ball. On each two-handle the only obstruction is the framed attaching-circle sign. Its disk framing has sign one, so extension is possible exactly when $q'(\beta_i)=0$; it is possible here. To see this without an abstract obstruction theorem, trivialize the disk frame, lift its circle comparison. Its sign is closed; its lift is a loop in Spin(3), the unit quaternions by direct multiplication in the even three-dimensional Clifford algebra. It misses a point by [F1] and contracts in that stereographic three-space. A radial cutoff constant near the disk center makes this filling smooth relative its prescribed boundary collar. This extends the difference over the disk; take its product with the normal interval. After these extensions the remaining boundary is a two-sphere. Two lifts of its stabilized tangent frame bundle differ by a flat sign bundle: locally their transition quotient is in the central kernel and is locally constant. Every such bundle on the sphere is trivial by its finite simply connected two-disk presentation. The obtained lift therefore agrees with the boundary of the coordinate ball lift and extends across that ball. The two handlebody lifts now paste on their common collar to a Spin lift of $TY$. [F1, F2, step 3.1, construct, algebra]

5.1 Extend this Spin principal bundle by the inclusion $s\mapsto[s,1]$ into Spin-c. The determinant character is $[s,z]\mapsto z^2$, so it is identically one on the given Spin transition functions. The associated determinant line has the constant nonzero section and first Chern class zero. This proves an actual zero-Chern sector on Y, independently of any diagram generator. The genus-zero case is covered as well: the two coordinate balls have their boundary lifts identified by the same sphere argument, with no meridians or linear extension. [F1, step 1.1, step 4.1, construct, algebra]

6.1 Global mixed signs plainly imply the stated sector condition for each Spin-c structure, since it merely restricts the tested periodic domains. Conversely impose the condition for every sector and choose the actual sector of step5.1. Its Chern pairing with EVERY capped periodic domain is zero, so the condition tests every nonzero normalized periodic domain and gives global mixed signs. No inference from the presence of a generator in that sector occurred. For one chosen sector alone, this argument does not apply unless its Chern pairing is zero on all those capped domains; ordinary sector weakness has not been replaced by global weakness in that separate construction. [step 5.1, construct, algebra] ∎
