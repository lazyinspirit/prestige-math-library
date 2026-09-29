---
id: ex-sphere-polygonal-schema
kind: example
title: "Sphere as a polygonal quotient"
status: draft
origin: pipeline
deps: [def-polygonal-schema-and-edge-pairing, def-quotient-topology, lem-polygonal-schema-reduction-moves, def-euclidean-spheres-and-closed-balls, thm-heine-borel-rn, thm-metric-hausdorff-separation, lem-t0-t1-and-hausdorff-are-hereditary, thm-compactness-under-continuous-maps, def-euler-characteristic-of-a-finite-cw-complex, def-r-orientation-of-a-topological-manifold, def-orientation-local-system-and-orientation-cover]
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Gallier and Xu, A Guide to the Classification Theorem for Compact Surfaces"
      url: "https://www.cis.upenn.edu/~jean/surfclassif-root.pdf"
      locator: "Chapter 1 §1.2 and Chapter 6 §6.2, printed pp.4–6 and 84–86"
    - title: "Koch, Classification of Surfaces"
      url: "https://pages.uoregon.edu/koch/math431/Surfaces.pdf"
      locator: "§3 sphere discussion, printed pp.3–4"
pipeline_run: frontier-36-complete
---

## Example

The digon with boundary word $a\,a^{-1}$ is a polygonal schema whose
realization $Y$ is homeomorphic to the unit sphere $S^2$ of
[[def-euclidean-spheres-and-closed-balls]]. It has two vertex classes, one
edge class and one face, so $V=2$, $E=1$, $F=1$ and
$\chi(S^2)=2-1+1=2$
([[def-euler-characteristic-of-a-finite-cw-complex]]), and it is orientable.
This finite example uses no choice axiom.

## Facts & Assumptions

**Given:** The digon $D$, a closed disk whose boundary is divided by two
corners $v_0,v_1$ into the sides $s_1$ from $v_0$ to $v_1$, labelled $a$, and
$s_2$ from $v_1$ to $v_0$, labelled $a^{-1}$, paired by the parameter reversal
$s_1(t)\sim s_2(1-t)$, with realization $Y=D/{\sim}$; and the unit sphere
$S^2=\{(\alpha,t)\in\mathbb R^2\times\mathbb R:\lVert\alpha\rVert_2^2+t^2=1\}$
with its closed upper hemisphere
$S^2_+=\{(\alpha,\sqrt{1-\lVert\alpha\rVert_2^2}):\lVert\alpha\rVert_2\le1\}$,
its closed lower hemisphere
$S^2_-=\{(\alpha,-\sqrt{1-\lVert\alpha\rVert_2^2}):\lVert\alpha\rVert_2\le1\}$,
and the common equator $S^2_+\cap S^2_-$.

[L1] Schema conventions: a polygonal schema is finite data of oriented
nondegenerate closed disks whose sides are paired by homeomorphisms, its
realization is the quotient by the generated relation, and its corner classes,
paired side classes and disk interiors form a finite cell structure with
counts $(V,E,F)$; each disk is a closed bounded subset of the plane; a disk
with exactly two sides is a bigon whose sides are simple arcs meeting exactly
at the two corners; in a one-polygon word a pair with opposite exponents is
orientation compatible, while equal exponents give a twisted pairing
([[def-polygonal-schema-and-edge-pairing]]).

[L2] The realization carries the quotient topology, and a map out of the
quotient is continuous exactly when its composite with the quotient map is
continuous; images of compact spaces under continuous maps are compact
([[def-quotient-topology]], [[thm-compactness-under-continuous-maps]]).

[L3] Cutting a polygon along an embedded polygonal diagonal whose interior
lies in the polygon interior and regluing the two new boundary sides to each
other preserves the quotient homeomorphism type
([[lem-polygonal-schema-reduction-moves]]).

[L4] The unit sphere $S^2$ is the Euclidean sphere of radius one in
$\mathbb R^3$ with the subspace topology; closed bounded subsets of
$\mathbb R^3$ are compact by Heine–Borel; $\mathbb R^3$ is a metric space,
hence Hausdorff, and Hausdorffness is hereditary, so $S^2$ is Hausdorff; a
continuous bijection from a compact space onto a Hausdorff space is a
homeomorphism ([[def-euclidean-spheres-and-closed-balls]],
[[thm-heine-borel-rn]], [[thm-metric-hausdorff-separation]],
[[lem-t0-t1-and-hausdorff-are-hereditary]],
[[thm-compactness-under-continuous-maps]]).

[L5] The Euler characteristic of a space with finitely many cells is
$\chi(X)=\sum_n(-1)^nc_n(X)$
([[def-euler-characteristic-of-a-finite-cw-complex]]).

[L6] An integral orientation is a continuous section of the local homology
system whose value generates every fiber; the system is trivialized over
coordinate balls, where a continuous generator section is locally constant, so
a generator prescribed on the oriented face continues across an edge exactly
when the pairing is orientation compatible
([[def-r-orientation-of-a-topological-manifold]],
[[def-orientation-local-system-and-orientation-cover]]).

## Verification

**Proof technique:** direct.

1.1 The pairing is the parameter reversal $s_1(t)\sim s_2(1-t)$, so the corner $v_0=s_1(0)$ is paired with $s_2(1)=v_0$ and the corner $v_1=s_1(1)$ with $s_2(0)=v_1$: each corner forms its own vertex class, the two sides form one edge class, and the disk interior is the one face. Hence the realization $Y$ has $V=2$, $E=1$, $F=1$, and these are the cells of its finite CW structure. [L1]

1.2 First replace the bigon by a round-disk representative. A disk homeomorphism takes its two corners to two points of the unit circle; a circle homeomorphism carrying these to antipodal points extends radially, $ru\mapsto r\varphi(u)$, with radial inverse. Composing gives a disk homeomorphism taking the two corners to opposite ends of a diameter. Conjugate the side pairing by this homeomorphism; it induces a quotient homeomorphism by [L2], using the inverse to obtain the inverse quotient map. We may now cut the round representative along that diameter $\gamma$, whose interior lies in the disk interior; the pieces are two bigons, $B_1$ with sides $s_1$ and one copy of $\gamma$, and $B_2$ with sides $s_2$ and the other copy $\gamma'$. By the split identity of [L3] the quotient $Y$ is homeomorphic to the quotient of $B_1\sqcup B_2$ by the pair $s_1\sim s_2$ together with the pair $\gamma\sim\gamma'$; since $\partial B_1=s_1\cup\gamma$ and $\partial B_2=s_2\cup\gamma'$ and the two pairings match at the common endpoints $v_0,v_1$, they combine into a single homeomorphism $h:\partial B_1\to\partial B_2$ that identifies the whole boundary circle of $B_1$ with the whole boundary circle of $B_2$. [L1, L3]

2.1 Fix homeomorphisms $\alpha_1:B_1\to\overline B_2(0,1)$ and $u_2:B_2\to\overline B_2(0,1)$ onto the closed unit disk, which exist because bigons are closed disks, and let $\varphi=\alpha_1\circ h^{-1}\circ u_2^{-1}$ on the unit circle; extending $\varphi$ radially by $\kappa(tu)=t\,\varphi(u)$ and putting $\alpha_2=\kappa\circ u_2$ gives a homeomorphism $\alpha_2:B_2\to\overline B_2(0,1)$ with $\alpha_2\circ h=\alpha_1$ on $\partial B_1$. Here $\kappa^{-1}(tu)=t\,\varphi^{-1}(u)$ and $\alpha_2^{-1}=u_2^{-1}\circ\kappa^{-1}$. Define $\Phi$ on the class of $x\in B_1$ as $(\alpha_1(x),\sqrt{1-\lVert\alpha_1(x)\rVert_2^2})$ and on the class of $x\in B_2$ as $(\alpha_2(x),-\sqrt{1-\lVert\alpha_2(x)\rVert_2^2})$: the two formulas agree on the glued boundary circle because $\alpha_2\circ h=\alpha_1$ there, so $\Phi$ is a well-defined continuous map out of the quotient by [L2]. It is surjective onto $S^2_+\cup S^2_-=S^2$ and injective because the two formulas are homeomorphisms onto the closed upper and lower hemispheres, which meet exactly in the equator. The quotient is compact as a continuous image of the compact disk $D$ [L2], while $S^2$ is Hausdorff [L4], so $\Phi$ is a homeomorphism by the compact-to-Hausdorff criterion [L4], and $Y\cong S^2$. [L2, L4, step 1.2]

3.1 The single pair has opposite exponents, so by [L1] it is orientation compatible; by step 2.1 the realization $Y$ is a boundaryless surface, and the generator carried by the oriented face continues unchanged across the single edge class, its locally constant generator classes over face and vertex charts supplying a continuous generating section as in [L6]. Hence $Y$, and by step 2.1 the sphere $S^2$, is orientable. [L1, L6, step 1.1, step 2.1]

4.1 The cell counts of step 1.1 give $\chi(Y)=V-E+F=2-1+1=2$ by [L5], and this is the Euler characteristic of $S^2$ by step 2.1. Every construction used is finite and explicit: one diameter splitting a round representative into two bigons, one radial extension of a circle homeomorphism, and two hemisphere formulas, so no choice axiom is used. [L1, L5, step 1.1, step 2.1, step 3.1] ∎

## Remarks

The word $a\,a^{-1}$ is the empty product of crosscap and handle blocks, the
genus-zero case of the classification. The split move turns the digon into two
bigons whose whole boundary circles are glued to each other, and gluing two
disks along their boundaries is exactly the two-hemisphere model of $S^2$. The
argument uses only the finite split move and explicit disk-to-hemisphere
homeomorphisms, and never the classification theorem or the Axiom of Choice.
