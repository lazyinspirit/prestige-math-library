---
id: lem-knot-floer-large-surgery-and-filtered-cobordism-input
kind: lemma
title: "Knot Floer cobordism maps give the tau genus shift"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-knot-floer-filtration-and-tau
  - def-smooth-knot-concordance
  - def-smooth-and-topological-slice-genus
  - lem-smooth-and-topological-slice-genus-minima-exist
  - def-admissible-pointed-heegaard-floer-data
  - def-grid-diagram-for-an-oriented-knot
  - thm-grid-homology-independent-of-grid-and-equals-knot-floer
  - lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing
  - def-generic-movie-of-an-oriented-knot-cobordism
  - lem-smooth-link-cobordisms-admit-finite-generic-movies
  - def-decorated-link-cobordism-and-floer-target
  - def-knot-floer-cobordism-map
  - lem-knot-floer-holomorphic-triangle-transversality-compactness-gluing
  - lem-knot-floer-cobordism-naturality-and-movie-invariance
  - def-countable-choice
  - lem-rational-heegaard-floer-absolute-grading-and-cobordism-maps
  - lem-tau-threshold-under-nonzero-filtered-maps
  - lem-tau-connected-sum-filtered-tensor-product
  - lem-tau-additive-for-filtered-tensor-products
  - lem-knot-floer-duality-and-filtration-swap
dependency_level: 8
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "AC_omega suffices for the fixed compact trace specialization: finite diagrams and handle data, countably many homotopy/Spin-c labels and generic analytic choices. The general full-choice four-manifold theorem is not silently cast as a countable-choice theorem."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Peter S. Ozsvath and Zoltan Szabo, Knot Floer homology and the four-ball genus"
      url: "https://arxiv.org/pdf/math/0301149v4"
      locator: "Theorem 1.1 and §§3.3–3.5, printed pp.2 and 9–15; large-surgery cobordism maps, adjunction, and the four-ball genus bound"
    - title: "Jennifer Hom, A survey on Heegaard Floer homology and concordance"
      url: "https://arxiv.org/pdf/1512.00383v3"
      locator: "§§3.1–3.2, printed pp.8–12; tau threshold, genus bound, and large-surgery maps"
    - title: "Ian Zemke, Link cobordisms and absolute gradings on link Floer homology"
      url: "https://arxiv.org/pdf/1701.03454v2"
      locator: "Theorem 1.4, §§7.3, 9.9, and 10.1; Alexander grading shifts and the cobordism genus inequality"
---

## Statement

Assume the Axiom of Countable Choice. Let $S$ be a connected compact smooth oriented surface properly embedded in $S^3\times[0,1]$, with product collars and oriented boundary $-K_0\times\{0\}\sqcup K_1\times\{1\}$ for smooth oriented knots $K_0,K_1$. Let $g$ be the genus of $S$, and use the standard absolute Alexander normalization for the endpoint knot Floer complexes. Then
$$|\tau(K_1)-\tau(K_0)|\le g.$$
In particular, a smooth concordance annulus gives equal tau values, and a genus-$g$ surface from a knot to the unknot gives the four-ball genus estimate.

## Statement references

[[def-knot-floer-filtration-and-tau|The normalized tau value from the filtered complex]]

[[def-smooth-knot-concordance|Smooth cobordisms with oriented boundary and product collars]]

[[def-knot-floer-cobordism-map|The representative map for a decorated knot cobordism]]

[[lem-knot-floer-holomorphic-triangle-transversality-compactness-gluing|The required triangle moduli spaces]]

[Ozsvath and Szabo, *Knot Floer homology and the four-ball genus*, Theorem 1.1 and §§3.3–3.5](https://arxiv.org/pdf/math/0301149v4)

[Hom, *A survey on Heegaard Floer homology and concordance*, §§3.1–3.2](https://arxiv.org/pdf/1512.00383v3)

[Zemke, *Link cobordisms and absolute gradings on link Floer homology*, Theorem 10.1](https://arxiv.org/pdf/1701.03454v2)

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, the collared smooth oriented cobordism $S$, its endpoint knots, and the fixed Alexander normalization.

[A1] [[def-countable-choice]] states that every sequence of nonempty sets has a choice function; the declared movie and diagram route uses this axiom.

[F1] [[thm-grid-homology-independent-of-grid-and-equals-knot-floer]] supplies the retained normalized full filtered grid/analytic comparison, including the actual chosen-variable versus collapsed-variable stabilization factors. That completed interface is reused without reading its proof; the historical grid hold is not a current missing input here.

[F2] [[lem-knot-floer-holomorphic-triangle-transversality-compactness-gluing]] supplies actual full-marked triangle regularity, finite counts, compactified boundaries, gluing and fixed-end auxiliary-data homotopies on its explicit positive-rank generic representatives with transported Spin-c and strict admissibility, and on the direct rank-zero point model. Its bilinear chain-map equation requires an actual cycle for a distinguished inserted top input. It does not assert an absolute Alexander shift or large-surgery nonvanishing.

[F3] [[lem-rational-heegaard-floer-absolute-grading-and-cobordism-maps]] supplies actual fixed-Spin-c infinity/plus cobordism maps between rational homology spheres, their handle-presentation independence and the absolute Maslov degree $(c_1^2-2\chi-3\sigma)/4$. This completed grading interface is reused directly. The theorem's degree is a Maslov degree, not a knot Alexander-filtration bound; it does not identify a knot large-surgery threshold or assert an adjunction inequality for every embedded surface.

[F4] [[lem-tau-threshold-under-nonzero-filtered-maps]] supplies the exact finite algebra: nonzero maps on one-dimensional total hat homology with filtration shift at most $g$ in both directions imply $|\tau(K_1)-\tau(K_0)|\le g$.

[F5] [[lem-tau-connected-sum-filtered-tensor-product]] and [[lem-tau-additive-for-filtered-tensor-products]] supply additivity of the normalized threshold. [[lem-knot-floer-duality-and-filtration-swap]] supplies normalized reverse-mirror duality; the finite annihilator-functional calculation gives $\tau(-K)=-\tau(K)$.

[E1] **External input, authorized by the run-specific source boundary.** Ozsváth–Szabó, *Knot Floer homology and the four-ball genus*, Geometry & Topology 7 (2003), Proposition 3.1, printed pp.625–626 (§3.1), gives the following actual finite-diagram statement. For a fixed knot $K\subset S^3$, normalized knot complex, and integer $m<\tau(K)$, choose a sufficiently large finite positive integer $n$. The map on $\widehat{HF}$ for the negative-$n$ two-handle trace $X_{-n}(K)$, in the actual Spin-c class $\mathfrak s_m$ with
$$\langle c_1(\mathfrak s_m),[\widehat F]\rangle-n=2m,$$
is nonzero on the $S^3$ generator. The large-surgery identification is the finite subquotient $C\{\min(i,j-m)=0\}$ with its displayed map; this is an external knot-filtration identification, not a consequence of the retained rational Maslov formula [F3]. No assertion at $m=\tau$ is needed. The proof uses the normalized filtered inclusion/quotient exact diagram and the large-surgery identification cited there.

[E2] **External input, at the same fixed compact trace scope.** In the proof of Theorem 1.1, printed pp.630–631 (§3.4), using Lemma 3.5, pp.629–630, the following vanishing is proved. Cap an actual smooth connected genus-$h>0$ spanning surface in $B^4$ by the core in $X_{-n}(K)$. Its closed cap has square $-n$. If a fixed Spin-c extension has Chern evaluation $n+2m$ on that cap and $2m>2h-2$, the corresponding trace map on $\widehat{HF}$ is zero. The mechanism is the actual tubular disk bundle of the capped surface, punctured at the incoming ball; its map vanishes when $\langle c_1,[\widehat F]\rangle+[\widehat F]^2>2h-2$, and the trace map factors through it. This imports the stated fixed-map factorization/vanishing, not merely the numerical degree-shift formula. Only the trace with ambient $B^4$ is used: no Donaldson diagonalization, arbitrary negative-definite four-manifold, or uncountable family of bundle choices is imported.

[E3] **Coefficient and choice scope of the imports.** The trace statements [E1, E2] are used for individually specified finite admissible diagrams, a finite integer $n$, and finitely many compact handles, with coefficients $\mathbb F_2$. Hom, *A survey on Heegaard Floer homology and concordance*, arXiv:1512.00383v3, explicitly fixes $\mathbb F_2$ coefficients on printed p.2; §3.1, Theorem 3.1(2) and §3.2.1, Theorem 3.4, printed pp.8–9, record respectively the same normalized genus inequality and the actual large-surgery map. This resolves the coefficient convention; it is not an integral rank calculation.

The CC use is the following bounded specialization of the published construction. A particular smooth compact surface, its finite handle description, and a particular endpoint diagram are fixed before the construction. Its capped surface, tubular bundle, and the two trace decompositions use finitely many charts, collars and handles. The relative homotopy, periodic-domain and Spin-c labels of each finite Heegaard multi-diagram are countable. The moduli-space data for those labels and the finitely many required count/homotopy identities are exactly the retained CC analytic inputs [F2], not a simultaneous choice over all knots or all smooth four-manifolds. The large integer $n$ is one witness for the single $m$ used, and all ensuing matrices and Chern evaluations are finite. The proof of [E1] is an exact diagram of these finite chain maps; the proof of [E2] is the disk-bundle calculation and these finite handle compositions. Thus the imported operations here require only the given CC analytic choices and finitely many geometric choices. This is an audit of that fixed-trace specialization, not a blanket inference that a theorem proved under full Choice is valid under CC, and not a local reconstruction of the imported large-surgery or disk-bundle calculations.

Actual source extent: Proposition 3.1 and its full proof, printed pp.625–626; Lemmas 3.4–3.5 and their full proofs, pp.628–630; both genus cases in §3.4 and the Corollary 1.3 deduction in §3.5, pp.630–632; Theorem 1.1/Corollary 1.3 on p.617; Hom's coefficient convention and the cited pp.8–9. No whole-paper reading is claimed.

## Proof

1.1 First fix an actual smooth connected genus-$h>0$ spanning surface $F\subset B^4$ for a knot $K$. Set $m=\tau(K)-1$. Choose one sufficiently large positive $n$ for [E1], also large enough for the negative disk-bundle description in [E2]. Cap $F$ by the core of that two-handle. The cap has self-intersection $-n$, because $F$ has zero relative self-intersection in $B^4$ and the handle framing is $-n$. Its Chern evaluation in the chosen trace class is $n+2m$, hence
$$\langle c_1(\mathfrak s_m),[\widehat F]\rangle+[\widehat F]^2=2m.$$
The trace map is nonzero by [E1]. Its vanishing criterion [E2] therefore forces $2m\le2h-2$, and substitution gives $\tau(K)\le h$. Reflect the surface and use [F5] to obtain $-\tau(K)\le h$. Thus $|\tau(K)|\le h$ for this individual positive-genus surface. All inequalities refer to its actual cap and fixed Spin-c class. [F1, F2, F3, F5, E1, E2, E3, construct, algebra]

1.2 If $F$ is a disk, boundary-connect-sum two copies to get a disk for $K\#K$, and add a single trivial interior surface handle to obtain a smooth genus-one spanning surface. Step 1.1 gives $\tau(K\#K)\le1$. By [F5], $2\tau(K)\le1$, so the integer $\tau(K)$ is at most zero. Apply the same argument to the reflected disk to get $-\tau(K)\le0$. Therefore $\tau(K)=0$. This finite doubling argument handles genus zero without an unproved genus-zero disk-bundle clause. It is the $B^4$ specialization of the source's separate genus-zero argument on printed p.631. [F5, E3, step 1.1, construct, algebra]

2.1 Now use the actual surface $S$ of the Statement. Choose one smooth embedded arc on $S$ joining its two boundary components. Cut $S$ along a thin strip about that arc, and remove from $S^3\times I$ the interior of a compatible tubular neighborhood of the arc. A properly embedded arc joining the two boundary spheres in this simply connected four-dimensional product is isotopic to a product arc relative its ends: a generic homotopy of such arcs is a path of embeddings, since the coincidence condition for two distinct arc points at the same time has dimension $1+1+1-4<0$, and the derivative-zero condition is also avoidable. These are finitely many compact smooth general-position choices. Removing the product arc neighborhood turns the ambient shell into $B^4$, after rounding its product corners. The cut surface has one boundary component $K_1\#(-K_0)$ and Euler characteristic $\chi(S)+1=1-2g$, hence genus $g$. Its product collars supply the ordinary connected-sum boundary convention. This gives an actual genus-$g$ spanning surface, without a cobordism movie or a choice of incident-band Floer maps. [given, construct]

2.2 Apply steps 1.1–1.2 to that spanning surface and use [F5]:
$$|\tau(K_1)-\tau(K_0)|=|\tau(K_1\#(-K_0))|\le g.$$
This is the full Statement. For $g=0$ it proves concordance invariance. Conversely, puncturing an actual proper genus-$g$ spanning surface near an interior point gives the stated cobordism to an unknot, preserving genus and product collars, so the four-ball specialization follows as well. The new source-qualified trace route does not assert that the formerly held decorated movie supplier has been proved. [F5, E1, E2, E3, step 1.1, step 1.2, step 2.1, algebra] ∎
