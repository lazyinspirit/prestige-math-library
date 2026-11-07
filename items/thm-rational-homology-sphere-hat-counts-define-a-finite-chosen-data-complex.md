---
id: thm-rational-homology-sphere-hat-counts-define-a-finite-chosen-data-complex
kind: theorem
title: "Rational homology sphere hat counts define a finite chosen-data complex"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - def-hat-heegaard-floer-complex-of-a-closed-three-manifold
  - lem-smooth-jordan-disk-boundary-maps-extend-to-diffeomorphisms
  - lem-proper-compression-disks-admit-neat-witnesses-with-standard-cut-balls
  - lem-neat-balanced-handlebody-cuts-supply-finite-surface-polygons
  - lem-rational-homology-sphere-heegaard-periodic-domains-are-constant
  - lem-rational-homology-sphere-zero-marked-strips-have-uniform-energy-bounds
  - lem-equal-whitney-domains-have-equal-boundary-windings-and-fredholm-index
  - lem-continuous-whitney-classes-admit-relative-smooth-fixed-end-models
  - lem-smooth-relative-whitney-homotopies-preserve-strip-fredholm-index
  - lem-symmetric-product-divisor-intersections-and-point-movement
  - lem-nearly-symmetric-heegaard-strip-domain-energy-bound
  - thm-countable-choice-flat-endpoint-jet-universal-strip-regularity
  - lem-zero-marked-bounded-energy-strip-regularity-survives-collar-approximation
  - thm-finite-zero-marked-actual-index-one-strip-counts-under-an-energy-bound
  - thm-fixed-zero-marked-whitney-class-index-two-compactification-and-mod-two-cancellation
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ozsvath and Szabo, Holomorphic disks and topological invariants for closed three-manifolds"
      url: "https://arxiv.org/abs/math/0101206"
      locator: "Sections3-4; rational-homology-sphere chosen-data finite counts and differential-square assembly proved locally below"
---

## Statement

Assume Countable Choice. Give an actual complete singly pointed Heegaard diagram of a closed connected oriented rational homology three-sphere $Y$, with transverse attaching systems, one-ball compression cuts on both sides, reference orientation-compatible Riemann surface structure and positive area form, and basepoint $z$ off the curves. Broad smooth tangencies of auxiliary compression-disk witnesses are permitted.

There is a CHOICE of surface complex structure, protected region and marked-divisor neighborhoods, common product-integrable generator charts and a smooth nearly symmetric tame path constant on genuine endpoint time collars, for which every nonconstant finite-energy strip with $n_z=0$ has onto actual fixed-end Cauchy--Riemann operator. There are finitely many actual index-one strip orbits with $n_z=0$, across all endpoints and Whitney classes. Their modulo-two matrix on the finite generator space is an actual differential: $\widehat\partial^2=0$. Thus these chosen data define a finite chain complex over $\mathbb F_2$ by the stated holomorphic counts.

Within every component of the groupoid of zero-basepoint Whitney classes, its integer relative grading is well defined up to an additive constant, with difference $M(x)-M(y)=\mu(\phi)$ for a class $\phi:x\to y$ with $n_z(\phi)=0$; the counted differential lowers it by one. This does not identify those components with Spin-c structures or assign absolute degrees.

This is a chosen-data existence and well-definedness result on rational homology spheres. It does not replace the broader closed-manifold scope: general $Y$ admissibility, invariance under auxiliary choices and Heegaard moves, absolute grading, Spin-c identifications and any plus/infinity/cobordism package remain separate. It makes no assertion that a possibly empty positive-genus generator set has nonzero homology. For genus zero the target is a point, and its one-generator complex has zero differential.

## Facts & Assumptions

**Given:** The actual complete singly pointed splitting and reference complex structure, $H_2(Y;\mathbb Q)=0$, positive area form and basepoint.

[F1] Proper compression disks have same-boundary neat replacements and smooth cut-ball parametrizations after transporting an abstract handlebody to its standard embedded model. These data supply an actual finite oriented surface polygon. A prescribed positive local surface germ extends to a supported disk diffeomorphism with identity boundary collar. ([[lem-proper-compression-disks-admit-neat-witnesses-with-standard-cut-balls]], [[lem-neat-balanced-handlebody-cuts-supply-finite-surface-polygons]], [[lem-smooth-jordan-disk-boundary-maps-extend-to-diffeomorphisms]])

[F2] Every full-curve periodic domain of this complete rational homology sphere diagram is $c\Sigma$, and a zero-basepoint one is zero. Actual zero-basepoint strips therefore have one domain per ordered endpoint pair and uniformly bounded energy on small fixed-geometry families. ([[lem-rational-homology-sphere-heegaard-periodic-domains-are-constant]], [[lem-rational-homology-sphere-zero-marked-strips-have-uniform-energy-bounds]])

[F3] Continuous classes admit actual smooth fixed-end models, with homotopy-invariant additive actual index and additive point-divisor degrees. Differences of same-end smooth domains are full-curve periodic; equal domains give equal actual indices, with the supplied finite surface polygon. ([[lem-continuous-whitney-classes-admit-relative-smooth-fixed-end-models]], [[lem-smooth-relative-whitney-homotopies-preserve-strip-fredholm-index]], [[lem-symmetric-product-divisor-intersections-and-point-movement]], [[lem-equal-whitney-domains-have-equal-boundary-windings-and-fredholm-index]])

[F4] The domain-energy estimate is $E(u)\le C\sum_R n_R(u)\int_R\eta$, with one common $C$ on a sufficiently small fixed protected coefficient family. Auxiliary flat-endpoint-jet all-strip regular paths have actual constant-collar approximants regular on EVERY nonconstant zero-marked strip below any specified finite energy bound. The compact cut systems must each have a chosen zero mark in every cut component; here the single basepoint does so. ([[lem-nearly-symmetric-heegaard-strip-domain-energy-bound]], [[thm-countable-choice-flat-endpoint-jet-universal-strip-regularity]], [[lem-zero-marked-bounded-energy-strip-regularity-survives-collar-approximation]])

[F5] For a path regular on all zero-marked strips below $E_*$, the actual index-one orbits below that energy are finite. For each fixed zero-marked index-two class $\phi$, if $E_*>B_\phi=C\sum_R|n_R(\phi)|\int_R\eta$, the actual compactified one-manifold has finitely many broken rigid ends and gives their modulo-two cancellation. These results apply to general compact Heegaard data, without a torsion Spin-c or knot premise. ([[thm-finite-zero-marked-actual-index-one-strip-counts-under-an-energy-bound]], [[thm-fixed-zero-marked-whitney-class-index-two-compactification-and-mod-two-cancellation]])

## Proof

1.1 If the genus is zero, the target is a point and the stated one-generator zero differential and grading follow directly; assume henceforth positive genus. Prepare the geometric data without a category narrowing. View either actual handlebody as an abstract regular neighborhood of its finite graph, transport it to the standard ball-with-handles model embedded in $S^3$, apply [F1]'s broad same-boundary compression preparation there and transport back. The surface, attaching circles and diagram in $Y$ are unchanged. The resulting one-ball cut supplies the actual finite polygon needed by [F3]. To choose genuine integrable crossing charts, at each of finitely many crossings take a positive smooth chart $\Psi$ straightening the two arcs and an old holomorphic chart $c$. The positive local germ $c^{-1}\Psi$ fixes that crossing. Extend it by [F1] to a diffeomorphism supported in a small crossing disk, identity near its boundary. Choose these disks disjoint and off all chosen region points and $z$. Their finite composite $F$ gives the actual integrable structure $j=F^*j_{\mathrm{ref}}$; the charts $cF=\Psi$ are holomorphic, with unchanged holomorphic transition maps. Their products give common $\mathbb R^h/i\mathbb R^h$ generator charts in $\operatorname{Sym}^h\Sigma$. Choose protected diagonal and region-divisor neighborhoods separated from the two compact tori and smaller generator charts, and use the constant standard background path. No interpolation of surface complex structures has been presumed integrable. [F1, F3, given, construct, algebra]

2.1 Obtain an energy bound BEFORE choosing regular counts or rigid pairs. For each ordered generator pair admitting a continuous Whitney class of basepoint degree zero, its smooth models in [F3] have a UNIQUE region domain $D_{xy}$: the difference of two such models is full-curve periodic with basepoint coefficient zero, hence vanishes by [F2]. This argument uses arbitrary smooth models, not just holomorphic representatives. Choose one actual class witness for each nonempty pair; the generator set and the choices are finite. Let $C$ be uniform on the small protected family in [F4], and put $$B=\max\left(\{C\sum_R|n_R(D_{xy})|\int_R\eta\}_{x,y}\cup\{0\}\right),\qquad E_*=B+1.$$ Every actual zero-basepoint strip has energy at most $B$ by [F4], independent of its index. Moreover EVERY zero-basepoint class $\phi$ has $B_\phi\le B$, since its domain is that same $D_{xy}$. This includes classes later formed by concatenating rigid pairs. Thus the bound does not depend on which pairs turn out to be holomorphic for the chosen path. If there are no such pairs use $B=0$. [F2, F3, F4, step 1.1, construct, algebra]

3.1 Use the zero-mark set consisting ONLY of $z$; the additional protected region divisors are not required to have zero degree. Choose in this protected family an auxiliary all-strip regular flat-jet path from [F4]. Its genuine constant-collar approximants have the same surface, boundary structures, generator charts and common energy constant. The bounded-energy zero-marked openness theorem in [F4] makes every sufficiently late approximant regular on every nonconstant zero-basepoint strip of energy at most $E_*$. Fix one. Step 2.1 bounds ALL of its actual zero-basepoint strips by $B<E_*$, so it is regular for all of them, including every possible limiting level; no negative-index nonregular level is left uncontrolled. This also implies each nonconstant such strip has positive actual index, since its nonzero longitudinal derivative is a square-integrable kernel section by its exact end decay and onto-ness. Applying the actual finite-count assertion in [F5] now gives finitely many index-one orbits across every generator pair and represented class. Their modulo-two finite sums define a matrix on the finite vector space. [F4, F5, step 2.1, construct, algebra]

4.1 Fix initial and final generators. A term in the coefficient of their differential square is an ordered pair of these finitely many rigid orbits. Its concatenated continuous class $\phi$ has zero basepoint degree and actual index two by [F3]. There are only finitely many such ordered pairs and hence finitely many such concatenated classes; distinct classes with identical domains are not identified. For EACH of these actual classes step 2.1 gives $B_\phi\le B<E_*$. The chosen path is regular on its entire required zero-basepoint energy range by step 3.1, so [F5]'s fixed-class compactification and parity theorem apply. Its boundary pairs are exactly all the rigid orbit pairs whose concatenated class is this $\phi$. Their number is even. Summing this identity over the finite list of actual concatenated classes exhausts the coefficient of the differential square and makes it zero in $\mathbb F_2$. No summation over merely formal domains, no finiteness assumption for arbitrary class sets, and no positive-mark boundary-degeneration theorem were used. [F3, F5, step 2.1, step 3.1, construct, algebra]

5.1 For the relative grading, use the groupoid whose arrows are zero-basepoint continuous classes with concatenation. Reversal negates degree and index by [F3]. Any loop arrow at a generator has periodic domain with zero basepoint degree, so its domain is zero by [F2]. Comparing with the actual constant model by [F3] gives index zero. Two arrows with the same endpoints therefore have the same index by composing with a reversal; alternatively their equal domains give the same conclusion directly. On a nonempty groupoid component fix one generator, assign it degree zero and assign every other generator minus the index of any arrow from that one. Index additivity and the preceding independence prove the stated differences, with uniqueness up to a componentwise additive constant. Only finitely many generator components occur, and no Spin-c interpretation or absolute shift is inferred. Each counted arrow has index one, so its differential term lowers this degree by one. In genus zero the symmetric product is a point and the sole generator has no index-one strips, giving the stated one-generator zero differential directly. This proves the chosen-data finite complex only; broader closed-manifold existence, invariance and graded packages remain separate. [F2, F3, step 4.1, construct, algebra] ∎
