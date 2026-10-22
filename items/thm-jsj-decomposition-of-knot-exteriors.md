---
id: thm-jsj-decomposition-of-knot-exteriors
kind: theorem
title: "JSJ decomposition of compact knot exteriors"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-knot-exterior
  - def-incompressibility-seifert-fibration-and-jsj-system
  - lem-knot-exterior-is-irreducible
  - lem-knot-normal-circle-bundle-trivialization
  - lem-compact-smooth-three-manifold-pairs-admit-compatible-whole-star-triangulations
  - thm-smooth-loop-theorem-and-incompressibility-criterion-in-orientable-three-manifolds
  - lem-smooth-incompressible-torus-cuts-inject-groups-and-preserve-irreducibility
  - lem-choice-free-relative-transversality-for-a-compact-smooth-embedding
  - lem-haken-torus-bound-for-a-supplied-compatible-smooth-triangulation
  - lem-smooth-minimal-torus-splittings-have-unique-isotopy-class
  - def-axiom-of-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "The original full AC hypothesis is retained and supplies countable choice for the chosen tube, smooth exterior irreducibility and compatible Haken bound. Full AC is also the exact declared hypothesis of the Seifert-based smooth uniqueness supplier. The existence construction itself makes only a bounded finite sequence of choices."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "§1.2, Propositions 1.7–1.8, Lemma 1.10, Lemmas 1.14–1.16, and Theorem 1.9, printed pp.11–23"
    - title: "Stefan Friedl, An Introduction to 3-Manifolds"
      url: "https://www.math.csi.cuny.edu/abhijit/gt3m/Friedl-3mfds.pdf"
      locator: "§6.1, Theorem 6.1, printed pp.20–21; independent statement and scope check"
    - title: "Walter Neumann and Gadde Swarup, Canonical decompositions of 3-manifolds"
      url: "https://arxiv.org/pdf/math/9712227"
      locator: "§§2–4, torus-boundary JSJ system and isotopy uniqueness"
---

## Statement

Assume full AC. Let $K:S^1\to S^3$ be a smooth oriented knot with a chosen compact exterior $E_K$. There exists a finite inclusion-minimal collection $\mathcal T$ of pairwise disjoint incompressible tori in the interior of $E_K$ such that every component of $E_K$ cut along $\mathcal T$ is atoroidal or Seifert-fibered. Any two such inclusion-minimal collections are ambient isotopic in $E_K$. Atoroidal pieces in this statement are not asserted to be hyperbolic.

## Statement references

[Allen Hatcher, *Notes on Basic 3-Manifold Topology*, Theorem 1.9](https://pi.math.cornell.edu/~hatcher/3M/3M.pdf)

[Stefan Friedl, *An Introduction to 3-Manifolds*, Theorem 6.1](https://www.math.csi.cuny.edu/abhijit/gt3m/Friedl-3mfds.pdf)

[Walter Neumann and Gadde Swarup, *Canonical decompositions of 3-manifolds*](https://arxiv.org/pdf/math/9712227)

## Facts & Assumptions

**Given:** Full AC, the smooth oriented knot and its chosen compact exterior $E_K$.

[F1] Full AC implies countable choice. [[def-axiom-of-choice]] [[def-countable-choice]] [[thm-choice-implies-dependent-implies-countable-choice]]

[F2] The chosen tube and exterior are those of [[def-knot-exterior]]. The oriented normal plane bundle has a smooth global frame by [[lem-knot-normal-circle-bundle-trivialization]], Statement and full finite-frame proof. Under countable choice the exterior is irreducible by [[lem-knot-exterior-is-irreducible]], Statement.

[F3] The compact smooth exterior admits a supplied finite compatible whole-star manifold triangulation, taking the empty interior surface family. [[lem-compact-smooth-three-manifold-pairs-admit-compatible-whole-star-triangulations]]

[F4] For that very compatible triangulation, with $t$ triangular faces and $\beta=\dim_{\mathbb F_2}H_2(E_K;\mathbb F_2)$, every finite incompressible torus family with no $T^2\times I$ cut component has at most $4t+\beta-1$ members. [[lem-haken-torus-bound-for-a-supplied-compatible-smooth-triangulation]]

[F5] Cutting along a finite incompressible smooth torus family preserves smooth irreducibility and injects every cut-piece group into the original group, including for nonseparating cuts. [[lem-smooth-incompressible-torus-cuts-inject-groups-and-preserve-irreducibility]]

[F6] Geometric smooth incompressibility is fundamental-group injectivity. Compact embedded paths admit finite supported transversality relative to their endpoint neighborhoods. [[thm-smooth-loop-theorem-and-incompressibility-criterion-in-orientable-three-manifolds]] [[lem-choice-free-relative-transversality-for-a-compact-smooth-embedding]]

[F7] In a compact connected orientable irreducible smooth manifold with nonempty torus boundary, any two finite inclusion-minimal good torus systems are carried to one another by a jointly smooth ambient isotopy fixed near the original boundary. Its full proof treats the exceptional product and twisted-Klein-bundle overlaps and the final disjoint-system comparison. [[lem-smooth-minimal-torus-splittings-have-unique-isotopy-class]]

[F8] Incompressibility, atoroidality, the Seifert models and inclusion-minimal good systems have the conventions of [[def-incompressibility-seifert-fibration-and-jsj-system]].

## Proof

1.1 The exterior is a compact oriented smooth manifold with torus boundary. To verify the last assertion, orthonormalize the global normal frame of [F2] in the metric used for the tube's disk subbundle. Its chosen tube is then smoothly parametrized by $S^1\times D^2$, so its boundary is $T^2$. The exterior is connected as well: any two distinct points in it are joined by an embedded great-circle arc in $S^3$ (choose a half great circle in the antipodal case). Apply [F6]'s compact relative transversality to this arc and the knot, fixing its endpoint neighborhoods. A transverse one-dimensional arc cannot meet the one-dimensional knot in a three-manifold, so it avoids the knot. There is a continuous retraction $S^3\setminus K\to E_K$, equal to the identity outside the tube and sending a nonzero normal vector of length $r\le\epsilon$ radially to the vector of length $\epsilon$ in the same direction. It is continuous at the tube boundary and fixes both endpoints. The retracted arc is a path in the exterior. The coincident-endpoint case is constant. Thus $E_K$ is connected, and it is irreducible by [F1]–[F2]. [F1, F2, F6, given, construct]

2.1 Choose the finite compatible triangulation of [F3] once. If $E_K$ itself is atoroidal or Seifert, the empty family proves existence and is minimal. Otherwise start with the empty family, and whenever a current component $C$ is neither atoroidal nor Seifert, choose an incompressible torus not boundary-parallel in $C$, by [F8]'s definition of failure of atoroidality. It is two-sided: the torus and ambient orientations orient its normal line, and a finite normal-field flow gives a smooth product neighborhood. Every cut component has nonempty torus boundary. Indeed a boundaryless cut component would have no cutting face and no original boundary, hence would give a closed component of the original connected exterior, impossible by step 1.1. Irreducibility of the successive pieces will follow from [F5]. This construction is needed only for a bounded finite number of steps, as established below. [F3, F5, F8, step 1.1, construct]

3.1 Suppose a finite accumulated family is incompressible in $E_K$. By [F5] its cut pieces inject into $E_K$ and are irreducible. A new torus chosen in $C$ injects into $C$ by [F6], and then into $E_K$ by composition. It is therefore incompressible in $E_K$ by [F6]. The empty family starts this induction. Thus every finite stage consists of incompressible tori in the original exterior and has irreducible cut pieces, and all applications of [F4]–[F5] are within their smooth categories. [F5, F6, step 2.1, construct, algebra]

4.1 No finite stage has a product cut component. Initially the exterior is not good, hence is not $T^2\times I$. If a product first appears after a new cut along $T\subset C$, it must be one of the new components and must contain a boundary copy of $T$. If its other end is an old boundary face of $C$, the displayed product makes $T$ boundary-parallel in $C$, contradicting its choice. If both ends are the two copies of $T$, regluing them makes the entire connected old component $C$ a closed torus bundle; this contradicts the nonempty boundary of $C$ verified in step 2.1. Components unaffected by this cut were already nonproducts. This finite induction proves the no-product condition required by [F4], without assuming that selected tori separate. [F4, F8, step 2.1, step 3.1, construct]

5.1 Put $B=4t+\beta-1$, a fixed finite integer from [F4]. If no stage had become good after at most $B$ cuts, the construction could be extended through $B+1$ cuts by finite induction: at each of these finitely many stages use step 2.1. Steps 3.1 and 4.1 would then give an incompressible torus family with no product cut component and $B+1$ members, contradicting [F4]. Thus a finite good family exists. This argument selects only a bounded finite list of cuts, rather than postulating an infinite sequence of independent choices. The zero-cut empty family in the nongood initial case also satisfies [F4], so $B\ge0$ there. [F4, step 2.1, step 3.1, step 4.1, construct, algebra]

6.1 Among the subfamilies of that particular finite good family, take a good subfamily of least cardinality. There is at least one, and its finite power set suffices for the selection. No proper subfamily can be good, so it is inclusion-minimal in exactly [F8]'s sense. This proves existence with all the original hypotheses and no additional condition on the knot. [F8, step 5.1, construct, choose]

7.1 Finally let two finite inclusion-minimal systems as in the Statement be given. Step 1.1 verifies that their ambient exterior is compact, connected, orientable and irreducible with nonempty torus boundary. Their tori and good cut pieces have exactly [F7]'s smooth hypotheses. Apply that full uniqueness supplier to obtain a jointly smooth ambient isotopy of $E_K$, even fixed near its boundary, carrying one system to the other. The underlying convention is the ordinary smooth ambient isotopy of the knot definitions; no homeomorphism isotopy has replaced it. The conclusion asserts only atoroidal or Seifert pieces and introduces no hyperbolicity assertion. [F1, F7, F8, step 1.1, step 6.1] ∎
