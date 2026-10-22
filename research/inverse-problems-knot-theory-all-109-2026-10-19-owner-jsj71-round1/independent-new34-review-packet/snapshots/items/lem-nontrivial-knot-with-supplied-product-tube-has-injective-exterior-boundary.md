---
id: lem-nontrivial-knot-with-supplied-product-tube-has-injective-exterior-boundary
kind: lemma
title: "A nontrivial knot with a supplied product tube has injective exterior boundary"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - thm-mayer-vietoris-sequence-in-singular-homology
  - cor-homology-of-spheres
  - thm-cellular-homology-computes-singular-homology
  - thm-cellular-boundary-is-the-incidence-degree-matrix
  - thm-homotopy-equivalences-induce-isomorphisms-on-singular-homology
  - lem-choice-free-smooth-torus-curves-and-annulus-strips
  - lem-choice-free-smooth-jordan-disk-parameters-and-prescribed-collars
  - lem-choice-free-isotopy-extension-for-a-compact-smooth-source
  - lem-choice-free-relative-transversality-for-a-compact-smooth-embedding
  - thm-smooth-loop-theorem-and-incompressibility-criterion-in-orientable-three-manifolds
justified_by: []
proof_strategy: direct
axiom_use: "Choice-free conditional on the supplied smooth product tube. The finite Mayer-Vietoris matrix computation uses no duality or UCT. Torus normalization, radial annulus construction, disk shrinking and compact-source smooth extension are finite. No claim of choice-free tubular-neighborhood existence is made."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Printed pp.10–11 and Corollary3.3, p.48, boundary disk obstruction; the supplied-tube homology and actual smooth annulus/disk unknotting are proved here."
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
      locator: "Mayer-Vietoris and finite circle/torus homology, through the fully read local exact-sequence and cellular suppliers."
---

## Statement

Let $e:S^1\times D^2\to S^3$ be a supplied orientation-preserving smooth embedding, let $K=e(S^1\times\{0\})$ with its core orientation, let $N=e(S^1\times D^2)$, and put $E=S^3\setminus\operatorname{Int}N$ and $T=\partial E$. If there is a smooth properly embedded disk in $E$ whose boundary is essential in $T$, then $K$ is smoothly ambient isotopic, through orientation-preserving diffeomorphisms, to the standard oriented unknot. Consequently, if $K$ is not that unknot, $T$ has no such disk and $\pi_1(T)\to\pi_1(E)$ is injective. No choice axiom is assumed beyond the supplied input data.

All ambient isotopies asserted here are jointly smooth and may be stationary near their time endpoints.

## Facts & Assumptions

**Given:** The supplied smooth product tube, its oriented core and exterior, and for the first assertion a proper smooth exterior disk with essential boundary.

[F1] Mayer-Vietoris is exact for a two-open cover. The sphere computation gives $H_2(S^3;\mathbb Z)=H_1(S^3;\mathbb Z)=0$. Finite cellular homology and its incidence differentials compute singular homology. Deformation retractions induce homology isomorphisms. [[thm-mayer-vietoris-sequence-in-singular-homology]] [[cor-homology-of-spheres]] [[thm-cellular-homology-computes-singular-homology]] [[thm-cellular-boundary-is-the-incidence-degree-matrix]] [[thm-homotopy-equivalences-induce-isomorphisms-on-singular-homology]]

[F2] Essential smooth torus circles have primitive nonzero classes, and same-class circles admit a jointly smooth finite ambient torus isotopy. Smooth disk parameters extend boundary maps with prescribed collars. [[lem-choice-free-smooth-torus-curves-and-annulus-strips]] [[lem-choice-free-smooth-jordan-disk-parameters-and-prescribed-collars]]

[F3] Compact-source embedding isotopies extend smoothly with prescribed support, without choice; its finite graph-field and compact-time flow construction also constructs collars of a compact cooriented hypersurface. Embedded arcs admit supported transversality fixing endpoint neighborhoods. [[lem-choice-free-isotopy-extension-for-a-compact-smooth-source]] [[lem-choice-free-relative-transversality-for-a-compact-smooth-embedding]]

[F4] Strong smooth Loop applies to a compact connected orientable smooth three-manifold and a connected boundary subsurface, with a specified normal subgroup. [[thm-smooth-loop-theorem-and-incompressibility-criterion-in-orientable-three-manifolds]]

## Proof

1.1 The exterior is a compact oriented smooth three-manifold with boundary the product torus. It is connected: join any two distinct exterior points by an embedded great-circle arc in $S^3$, perturb it relative its endpoint neighborhoods to avoid $K$ by [F3] (transversality in dimensions one and one in dimension three forces empty intersection), and retract the punctured tube radially to its unit-radius boundary, fixing the exterior. This gives a path in $E$. Construct a two-sided collar of $T$ by choosing its outward normal field, extending it in finitely many slice charts by normalized finite bumps, and applying the compact-flow construction of [F3]. Its local inverse and compact separation estimates give a common positive width. Take $U$ to be $N$ with a short exterior collar adjoined, and $V$ to be $E$ with a short interior collar adjoined. They are open, cover $S^3$, and intersect in the full torus collar. Collapsing the respective added collar coordinates gives retractions to $N,E,T$, with the original inclusions as the resulting homology maps. This does not change or enlarge the supplied tube. [F1, F3, given, construct]

2.1 Give the core circle its one-vertex one-edge CW structure and the boundary torus its square quotient structure, with one vertex, two factor edges and a two-cell attached by their commutator. The endpoint incidences and the commutator exponent sums are zero, so [F1] gives $H_1(N;\mathbb Z)=\mathbb Z$ and $H_1(T;\mathbb Z)=\mathbb Z[\mu]\oplus\mathbb Z[\sigma]$, where $\mu$ is the fiber meridian and $\sigma$ is the core section. Projection $p$ sends $\mu$ to zero and $\sigma$ to one. The segment of [F1]'s sequence for step 1.1 is $0\to H_1(T)\to H_1(N)\oplus H_1(E)\to0$, with middle map $(p_*,-i_*)$. It is therefore an isomorphism. Restricting it to $\ker p_*=\mathbb Z[\mu]$ identifies that subgroup with $0\oplus H_1(E)$: for any $(0,y)$ its unique preimage must have projection zero. Thus $H_1(E)$ is infinite cyclic generated by $i_*[\mu]$. Write $i_*[\sigma]=k\,i_*[\mu]$. Its kernel on the torus is exactly $\mathbb Z([\sigma]-k[\mu])$, whose generator has core projection one. Only the finite circle and torus complexes were used; no disk CW structure, universal coefficients or Alexander duality is required. [F1, step 1.1, construct, algebra]

3.1 Let $c$ be the essential boundary of the given disk. It is primitive by [F2] and has zero homology image in $E$. Step 2.1 makes its class an integral multiple of $[\sigma]-k[\mu]$, and primitivity forces that multiple to be $\pm1$. Orient it with core projection $+1$, so its class has coordinates $(1,a)$ in core-then-meridian order. By [F2] it admits a smooth torus isotopy to $\gamma_a(s)=(e^{2\pi is},e^{2\pi ias})$. Choose its circle parametrization so the final parametrization is this one: precompose by the inverse final circle map. Denote the resulting smooth isotopy by $c_t(s)=(u_t(s),z_t(s))$, with $|z_t|=1$. Choose a smooth $\tau(r)$ equal to zero near $r=1$ and one near $r=1/2$. For $1/2\le r\le1$ use $e(u_{\tau(r)}(s),r z_{\tau(r)}(s))$; for $0\le r\le1/2$ use $e(e^{2\pi is},r e^{2\pi ias})$. The two formulas agree on an open seam collar. Distinct positive radii separate their images, and each radius has an embedded circle. At zero the two derivatives are the core tangent and the nonzero meridian-plane vector, hence independent. This is a smooth embedded annulus from the exact curve $c$ to the core $K$, otherwise inside $N$. [F2, step 2.1, construct, algebra]

4.1 Join that annulus to the exterior disk. They meet only along $c$. Smooth the rim while fixing the core boundary. Here the local smoothing is explicit: frame the normal plane of $c$ by its transverse direction in the oriented torus and the torus normal. Compactness and [F3]'s finite flows give a common product coordinate $(s,y,q)$, with $T$ given by $q=0$. The exterior disk and tube annulus are graphs $y=h_\pm(s,q)$ on the two signs of $q$, by their transverse inward directions. Their common value at zero agrees. Convolve across $q=0$ with a small smooth compactly supported kernel and cut off the correction before the rim collar ends. This gives a smooth graph, fixed outside the collar; projection to $(s,q)$ retains embedding. The construction is periodic in $s$ and has one compact width. Reparametrize the original disk's boundary collar to the annular collar by [F2]; attaching an annulus to a disk then gives the usual parametrized disk by radial rescaling of that source collar. We have obtained a smooth embedding $f:D^2\to S^3$ with boundary exactly $K$. [F2, F3, step 3.1, construct]

5.1 Such a supplied disk parameter gives an actual smooth unknotting. Its circles $f(r s)$, $s\in S^1$, shrink smoothly from $r=1$ to a fixed small positive radius; the circle never collapses to a point. Choose a point off this compact disk and the fixed standard spanning disk. Each is closed with empty interior by its finite smooth graph charts, and a finite union of closed sets with empty interior still has empty interior, so such a point exists without choice. Its positive stereographic chart contains both disks. At the first disk center write its chart map as $p+F(x)$ with $F(0)=0$. For sufficiently small fixed $\eta>0$, the circles $p+F(t\eta s)/t$, continued at $t=0$ by $p+\eta\,dF_0(s)$, form a smooth embedded-circle isotopy. The Taylor integral formula gives the smooth continuation; derivatives on a small disk are uniformly close to the injective linear derivative, and projection onto its two-dimensional image plus integration on segments proves injectivity. Gram-Schmidt writes that derivative as an orthonormal two-frame times an upper-triangular matrix with positive diagonal. Interpolating that matrix to the identity keeps the diagonal positive, so turns the ellipse into a round circle through embeddings. Repeat this at the fixed standard disk. Join the resulting round circles by translation of their centers, positive-radius interpolation and a path of rotations of their positive three-frames; successive coordinate-axis rotations give such a finite smooth path. Reverse the second disk's isotopies. A half-turn about a diameter corrects the circle orientation if required and still preserves ambient orientation. Thus the original oriented $K$ is joined to the fixed standard oriented unknot through smooth embedded circles in one compact track. Apply [F3], with stationary time changes at all joins, to obtain a jointly smooth ambient isotopy starting at the identity. All its diffeomorphisms preserve orientation. [F2, F3, step 4.1, construct]

6.1 If $K$ is nontrivial this contradicts its definition, so no essential-boundary exterior disk exists. If $\pi_1(T)\to\pi_1(E)$ were noninjective, use a nontrivial kernel loop and its disk cap in [F4], with boundary subsurface the entire torus and normal subgroup $1$. Step 1.1 supplies its connected compact orientable smooth ambient hypotheses. Strong Loop gives a proper smooth disk with essential boundary, already excluded. Thus the boundary group injects as claimed. All tubes, disks and charts were supplied or chosen finitely, and every named supplier here is choice-free for these inputs. No existence of a tube without choice, general PL marking compatibility, or broad homology-choice principle is asserted. [F3, F4, step 1.1, step 5.1, construct, algebra] ∎
