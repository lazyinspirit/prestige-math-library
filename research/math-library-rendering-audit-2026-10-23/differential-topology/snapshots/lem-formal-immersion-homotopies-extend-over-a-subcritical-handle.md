---
id: lem-formal-immersion-homotopies-extend-over-a-subcritical-handle
kind: lemma
title: "Formal-immersion homotopies extend over a subcritical handle"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [lem-formal-immersion-homotopies-extend-over-a-collar, lem-parametric-immersion-extension-on-a-disk, lem-restriction-of-formal-immersion-data-has-the-parametric-lifting-property, def-compact-parameter-pair, def-space-of-immersions-and-space-of-formal-immersions, def-formal-immersion-between-smooth-manifolds, def-k-handle-core-cocore-attaching-region-and-belt-sphere, def-attaching-a-smooth-handle-with-corner-rounding, def-hurewicz-and-serre-fibrations, thm-long-exact-sequence-of-homotopy-groups-of-a-fibration, def-weak-homotopy-equivalence, def-countable-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "John Francis, The h-Principle, Lectures 5 & 6: The Hirsch–Smale theorem (notes by C. Elliott), PDF pp. 1–4: Lemma 1.1, Corollary 1.2, Lemma 1.3 (Hirsch–Smale Fibration Lemma, n > k), Theorems 1.5 and 1.7, Lemma 1.6, Lemma 1.9"
      url: https://sites.math.northwestern.edu/jnf960/classes/hprin/5%266smalehirsch.pdf
    - title: "John Francis, The h-Principle, Lecture 3: Immersion theory (notes by O. Gwilliam), PDF pp. 1–4: Proposition 2.2 (disk), Definition 2.5 (Serre fibration), Definition 2.6 and Proposition 2.7 (flexible sheaves)"
      url: https://sites.math.northwestern.edu/jnf960/classes/hprin/3immersions.pdf
    - title: "Janek Wilhelm, The Smale–Hirsch Immersion Theorem and other Applications to Closed Manifolds, §§1–2, PDF pp. 1–3 (Theorem 1, relative parametric C⁰-dense h-principle for immersions with q > n; microextension and local h-principle 8.3.1)"
      url: https://www2.mathematik.hu-berlin.de/~wendl/Sommer2025/hPrinzip/20250530_Wilhelm.pdf
dependency_level: 4
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $0\le k\le m\le n$ with $k<n$, let $N^n$ be a smooth manifold without boundary, let $A$ be a compact smooth $m$-manifold with boundary, and attach an $m$-dimensional $k$-handle $H=D^k\times D^{m-k}$ to obtain $M$. The restriction of holonomic full-$m$-column core/germ data to the attaching boundary jet is a Serre fibration. If the derivative map on $A$ is a weak homotopy equivalence, so is the derivative map on $M$. A compact-parameter formal family that is genuine on an open source neighbourhood of $A$ and smoothly holonomic on a closed relative parameter set $Q$ can be deformed to genuine immersions relative to $A$ and $Q$. The $m-k$ cocore factor remains a source factor. For $k=0$ the attaching region is empty; $k=m$ is allowed precisely when $m<n$.

The lifting assertion concerns the exact first-jet/germ interface proved below, rather than an unrestricted codimension-zero restriction theorem.

## Facts & Assumptions

**Given:** The boundaryless target $N^n$, handle, compact parameter pair, neighbourhood-holonomic relative data, and countable choice.

[F1] Full-column core restriction is a genuine/formal Serre fibration, with compact smooth parameter lifting ([[lem-restriction-of-formal-immersion-data-has-the-parametric-lifting-property]]).

[F2] Statement (iii) of [[lem-parametric-immersion-extension-on-a-disk]] supplies relative full-column core integration and positive cocore compression, preserving attaching germs. Its Statement (iv) transfers any compact-source derivative weak equivalence to the prescribed compact parameter class, with neighbourhood-holonomic relative input. In each use the source retains all $m$ columns and the core index is $k<n$.

[F3] An outward collar and the compact source have homotopy-equivalent genuine and formal mapping spaces; this comparison preserves source dimension ([[lem-formal-immersion-homotopies-extend-over-a-collar]]).

[F4] The geometric handle and its attaching-region smooth gluing have the specified source tangent directions ([[def-k-handle-core-cocore-attaching-region-and-belt-sphere]], [[def-attaching-a-smooth-handle-with-corner-rounding]]). Weak equivalence means all components and all based homotopy groups ([[def-weak-homotopy-equivalence]]).

## Proof

**Proof technique:** direct, using full-column core comparison and relative cocore compression.

1.1 The core lifting assertion is exactly [F1] with core dimension $k$, full column rank $m$, and target dimension $n$. The transverse columns are extended as frames in the normal quotient and with their tangential lift components; they are not differentiated parameter coordinates. The assumption $k<n$ supplies the positive normal direction in its covering-homotopy construction. [F1, F4, given]

1.2 For the relative family, use its given genuine map on a source neighbourhood of $A$ as reference in the attaching collar. Restrict the formal data on the handle to the $k$-core, retaining all $m$ columns. Its attaching jet is the jet of that reference. By [F2] this family deforms through full-column formal core data to holonomic core data, with the attaching jet and the parameter neighbourhood of $Q$ fixed. Realize the holonomic data near the core by target local addition in the cocore directions. Pinch this realization to the given reference near the attaching core: identical full first jets make the difference $O(|v|^2)$ and the first derivative difference $O(|v|)$, so the differentiated cutoff has size $O(\delta)$ on a cocore neighbourhood of radius $\delta$. Compactness gives one small radius preserving full rank for all parameters and homotopy times. These formulas match an actual open attaching germ, hence they glue to the unchanged immersion on $A$. [F1, F2, F4, construct]

2.1 The resulting genuine map is defined near the union of the core and the attaching collar, and equals the original whole-handle immersion on a smaller parameter neighbourhood of $Q$. To obtain this, on a parameter transition strip inside the given holonomic neighbourhood blend the original immersion and the reconstructed map in local-addition coordinates near the core. Their identical full core jets give $O(|v|^2)$ value and $O(|v|)$ derivative errors, so compactness and a sufficiently small common cocore radius preserve rank. On that smaller parameter neighbourhood keep the original map on the entire handle; the compression below is the identity there. Pull it back by the handle compression of [F2], with positive cocore scale $\lambda(p,x)$ equal to one near $Q$ and throughout a smaller attaching collar and transitioning inside the already prescribed reference region. This embeds the whole handle in that union, fixes $A$, and has triangular derivative blocks $I,\lambda I$. The associated formal homotopy starts from the original data: compress the original pair by this embedding isotopy, transport its full tangent columns to the core by the horizontal/vertical identity identifications, and reconstruct over a small cocore neighbourhood using the core homotopy. When the base map is not holonomic in the cocore directions, its vertical Taylor term can be interpolated to the supplied transverse formal columns freely; the base map has no immersion constraint during a formal homotopy. On the attaching region these terms already agree with the reference derivative. Transport target tangent fibres by local addition and interpolate the bundle columns after shrinking the cocore radius; their differences tend uniformly to zero from the common core monomorphism, so injectivity is preserved. This is fixed on the reference germ and on $Q$, and proves relative full-handle integration. [F1, F2, step 1.2, construct]

3.1 For the weak-equivalence preservation, take a sphere or disk parameter test with a formal family on $M$ and the prescribed genuine boundary family. An enlarged source collar $A^+$ inside the attaching region has the same derivative equivalence as $A$ by [F3]. The finite relative lifting in [F2] first holonomizes the family on $A^+$, keeping its prescribed genuine parameter data. Extend this deformation to the handle core using the formal first-jet lifting of [F1] on the cut attaching boundary. Reconstruct full formal handle data by the compression and target/bundle transport of step 2.1, using the varying $A^+$ family as attaching reference. This gives a global formal homotopy, then step 1.2–2.1 makes the whole handle genuine. All reconstructions are supported outside the fixed smaller $A$ collar where required; no all-boundary-jet extension of an arbitrary $A$ map is inferred from a bump function. Sphere tests give surjectivity and disk tests with their genuine boundary fixed give injectivity on each homotopy group and on components. Thus $D_M$ is a weak equivalence. [F1, F2, F3, F4, step 1.2, step 2.1] ∎
