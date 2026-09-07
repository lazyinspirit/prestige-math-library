# Researcher 04 — classical braid models and topology

**Assignment.** Audit the classical-model portion of the braid scaffold, in
particular BG-1 through BG-7, against Juan González-Meneses, *Basic results
on braid groups* (GM) and the original Fadell--Neuwirth paper (FN). This is
research evidence, not authored library content and not a claim that every
listed local proof is ready.

## Retrieval, identity, and reading ledger

| key | bibliographic identity and fetch-verified URL | local complete object and SHA-256 | full-text status | ranges actually read for this report |
|---|---|---|---|---|
| GM | Juan González-Meneses, *Basic results on braid groups*, arXiv:1010.0321v1, 2010 (working-version PDF itself says September 2018), [PDF](https://arxiv.org/pdf/1010.0321). A live 2026-09-07 request returned `200`, `application/pdf`, filename `1010.0321v1.pdf`, 474454 bytes. | `scratchpad/source-cache/braid-groups/gonzalez-meneses-basic-results.pdf`; `8fef987df3601d1e388d4b1ea653af5bc0a4ca80259702dda01e0d8ff728b836` | PDF signature, 45 pages (`file`); extracted body reaches bibliography. Complete retrieval is **not** a claim to have read all 45 pages. | Printed pp. 3--10: §§1.1--1.6.2; pp. 11--13: §2.1 and Theorems 2.1--2.2/Cor. 2.3; pp. 23--30: §3.2 and §§4--4.3; printed pp. 30--31 only for the center proof. The braid-combing proof in §3.1 was not relied on. |
| FN | Edward Fadell and Lee Neuwirth, *Configuration Spaces*, *Math. Scand.* 10 (1962), 111--118, official scan, [PDF](https://tidsskrift.dk/math/article/download/10517/8538). A live 2026-09-07 request returned `200`, `application/pdf`, 649774 bytes. | `scratchpad/source-cache/braid-groups/fadell-neuwirth-config-spaces.pdf`; `ae27d6eb1cc845776a5ff111f885e059757787709d0d59a9ce160490d7cef789` | Image-only PDF, 8 pages (`file`). No OCR extraction was treated as text evidence. | **All eight scan pages visually inspected:** 111 (Introduction, §II setup, Thm. 1 statement), 112 (proof of Thm. 1), 113 (Thm. 2 and Cors. 2.1--2.2), 114 (completion of Cor. 2.2, Cor. 2.3, Thm. 3, §III), 115 (Thms. 4--5), 116 (Thm. 5 proof and §IV start), 117 (Thms. 6--7), and 118 (Thms. 8--9). |

The PDF cache locations are intentionally under `scratchpad/source-cache/`.
The adjacent eight-line FN text extraction is blank form-feed output and was
not used to assert anything.

## What the sources actually establish

### GM: four models, presentation, action, and Garside route

- **Configuration/strand models.** GM §1.1 (p. 3) defines the ordered
  configuration space \(M_n=\mathbb C^n\setminus\bigcup H_{ij}\) and
  \(PB_n=\pi_1(M_n)\). Section 1.2 (pp. 4--5) turns a loop into disjoint
  height-monotone strands, with endpoint-fixed deformation corresponding to
  loop homotopy. Section 1.3 (pp. 5--6) takes
  \(N_n=M_n/\Sigma_n\), defines \(B_n=\pi_1(N_n)\), and states that stacking
  corresponds to concatenation. This supports the planned trace/slice proof,
  provided its continuity and relative-endpoint steps are actually supplied.
- **Disk mapping classes.** GM §1.4 (pp. 6--7) uses the closed disk minus
  punctures, orientation-preserving homeomorphisms fixing the boundary
  pointwise, and quotient by the identity component. It invokes Alexander's
  trick to identify this mapping-class group with \(B_n\). It also explicitly
  warns that the punctured-plane version loses the boundary full twist and is
  \(B_n/Z(B_n)\), not \(B_n\). This is a convention-critical support, but not
  a self-contained proof of the evaluation-bundle statement proposed in BG-4.
- **Artin generators/action.** GM §1.5 (pp. 7--8) gives generic projection,
  finite distinct-height crossings, and generation by adjacent half twists.
  GM §1.6 (pp. 8--10), equation (1.1), gives
  \(x_i\mapsto x_{i+1}\),
  \(x_{i+1}\mapsto x_{i+1}^{-1}x_ix_{i+1}\), fixes the other generators,
  states faithfulness is topological and independent of the presentation, and
  states Artin's image theorem as Theorem 1.3. The latter is attributed to
  Artin, not proved: GM directs the reader to Artin 1925/1947 for the
  algebraic proof. See the BG-7 audit below.
- **Fadell--Neuwirth consequences.** GM §2.1 (pp. 11--13), Theorem 2.1,
  records \(M_{n+1}\to M_n\), its fiber \(\mathbb C\setminus\{z_1,\ldots,z_n\}\),
  the explicit planar section
  \((z_1,\ldots,z_n)\mapsto(z_1,\ldots,z_n,\sum|z_i|+1)\), the split free
  kernel sequence, and induction to \(K(\pi,1)\). This is a compact
  secondary route, with the usual needed prior fact that a finite-punctured
  plane is a wedge of circles.
- **Fox--Neuwirth presentation.** GM §3.2 (pp. 23--26) says, without proof,
  that the complement of a codimension-two subcomplex in a regular cell
  complex has the stated dual-graph/codimension-two presentation procedure.
  It defines the lexicographic cells of \(\mathbb C^n/\Sigma_n\), says they
  form a regular cell decomposition, identifies the equality cells as the
  diagonal subcomplex, and calculates the one top cell, codimension-one
  cells, and the two codimension-two cases. The resulting relations are the
  far-commuting square and the adjacent braid hexagon. This is an excellent
  *calculation once the dual-cell theorem is available*, not a proof of that
  theorem.
- **Garside chain.** GM §4 (pp. 26--28) supplies the intended architecture:
  homogeneous positive Artin monoid; prefix/suffix orders; cancellativity and
  pairwise atomic lcms; induction to all lcms/gcds; \(\Delta\) as lcm of the
  atoms; \(\sigma_i\Delta=\Delta\sigma_{n-i}\); common \(\Delta\)-multiples;
  Ore embedding in \(B_n\); then extension of the lattice order. GM §4.1
  (pp. 29--30) constructs \(\Delta^p A\) and the left normal form. GM Prop.
  4.1 (p. 30) proves torsion-freeness using the *extended group lattice*.
  GM Thm. 4.2 (pp. 30--31) proves \(Z(B_n)=\langle\Delta^2\rangle\) for
  \(n>2\), separately recording \(B_2\cong\mathbb Z\).

### FN: exact statements and limits of the primary paper

FN uses \(F_{m,n}(M)\) for configurations of \(n\) points in
\(M-Q_m\), where \(Q_m\) is a fixed set of \(m\) distinct points; its
\(F_{0,n}\) is the ordered configuration space. This notation must not be
silently identified with the plan's \(F_n\) without stating that translation.

- **Thm. 1, pp. 111--112:** for a locally Euclidean connected Hausdorff
  manifold \(M\), \(\dim M\ge2\),
  \(\pi:F_{m,n}\to M-Q_m\), \((p_1,\ldots,p_n)\mapsto p_1\), \(n>1\), is a
  locally trivial fiber space with fiber \(F_{m+1,n-1}\); it has a cross
  section if \(m\ge1\). Page 112 gives actual local coordinates by a
  point-moving homeomorphism. This is stronger and more precise than simply
  calling a forgetful map a fibration.
- **Thm. 2 and Cors. 2.1--2.3, pp. 113--114:** calculate higher homotopy
  groups through the fibration sequence. For Euclidean \(r\)-space the
  higher groups are sums of those of wedges of \(S^{r-1}\); for \(r=2\)
  this yields the required vanishing. The compact-surface assertions have
  stated \(S^2\)/\(\mathbb{RP}^2\) exceptions. Cor. 2.3 specifically gives
  the coincidence-free extension formulation for \(E^2\) or the stated
  compact surfaces. These pages support planar asphericity, not a blanket
  assertion for arbitrary surfaces.
- **Thm. 3, p. 114:** the general projection
  \(F_{m,n}\to F_{m,r}\), retaining the first \(r\) points, is locally
  trivial with fiber \(F_{m+r,n-r}\), for \(n\ge r\), \(m\ge0\). The proof is
  explicitly omitted. It is the closest primary locator for the plan's
  multiple-point forgetful bundle.
- **§III, Thms. 4--5, pp. 114--116:** gives product/section criteria. A
  suitable manifold makes \(F_{0,n}\to M\) a product; a non-vanishing vector
  field gives a section, while fixed-point and even-sphere caveats are real.
  Thus a planar section is supported, but the planned direct
  ``far-right point'' formula should be verified as a map into the chosen
  disk/plane model rather than attributed verbatim to FN.
- **§IV, Thms. 6--9, pp. 116--118:** gives exact sequences relating
  homeomorphism/diffeomorphism groups to configuration spaces (Thm. 6), the
  ordered-to-unordered principal \(\Sigma_n\)-bundle and universal-bundle
  result under connectivity hypotheses (Thm. 7), and torsion-freeness of
  braid groups for \(E^2\) or the specified compact surfaces (Thm. 8), by
  finite-dimensional \(K(\pi,1)\) plus P. Smith's theorem. It does **not**
  state the plan's boundary-fixed punctured-disk Birman exact sequence.

## Dispositions by planned heading

| heading | included / supported IDs | exact route and disposition |
|---|---|---|
| BG-1 `geometric-braids-and-artin-generators` | `def-geometric-braid-with-setwise-endpoints`, `def-braid-isotopy-relative-top-and-bottom`, `prop-stacking-of-geometric-braids-is-well-defined`, `thm-geometric-braids-form-a-group`, `def-elementary-geometric-half-twist`, `lem-geometric-far-commutativity`, `lem-geometric-three-strand-braid-relation`, `lem-every-geometric-braid-is-a-word-in-half-twists`, `prop-the-artin-presentation-surjects-onto-geometric-braids` | GM §§1.2--1.5, pp. 4--8, supports the strand conventions, stacking picture, generic-projection generation, and visible relations. **Include with repair:** state an actual generic-position lemma (projection immersion, finitely many transverse double points, distinct heights) and the local removal/word-stripping induction. GM calls this clear; it is not a written proof. |
| BG-2 `ordered-and-unordered-configuration-spaces` | `def-ordered-configuration-space` through `thm-configuration-braid-pure-braid-short-exact-sequence`; `lem-forgetting-configuration-points-is-locally-trivial`; `thm-fadell-neuwirth-forgetful-fibration` | GM §§1.1--1.3; FN Thms. 1 and 3, pp. 111--114. **Include with correction:** FN's exact hypotheses and notation above; use \(\operatorname{int}D^2\cong\mathbb R^2\), rather than treating the boundary disk itself as the paper's manifold. The quotient covering and its monodromy need the planned direct evenly-covered-neighborhood proof; FN does not provide that quotient argument. |
| BG-3 `braids-as-fundamental-groups-of-configuration-spaces` | `def-motion-of-an-unordered-point-configuration` through `prop-geometric-endpoint-permutation-equals-covering-monodromy` | GM §§1.2--1.3, pp. 4--6. **Include with explicit topology:** use local ordered lifts of a path/homotopy in the finite quotient to make trace, slice, and their inverse homotopies continuous; do not use a diagram as a proof. |
| BG-3 Fox--Neuwirth block | `def-fox-neuwirth-configuration-strata`, `lem-codimension-one-fox-neuwirth-strata-give-artin-generators`, `lem-codimension-two-fox-neuwirth-strata-give-exactly-the-artin-relations` | GM §3.2, pp. 23--26, Figs. 7--9. **Include conditionally:** the cell calculation is supported, including the exact square and hexagon relations, but it needs the new intermediate topology described below before it can prove the presentation. |
| BG-3 dual-cell and conclusion | `lem-the-dual-two-skeleton-presents-the-configuration-fundamental-group`, `thm-fox-neuwirth-cells-give-the-artin-presentation-of-configuration-braids`, `cor-artin-geometric-and-configuration-braid-groups-are-canonically-isomorphic`, `thm-the-four-classical-braid-models-share-the-artin-presentation-first-step` | **Do not mark locally proved from GM alone.** GM p. 23 begins “It is well known” and gives the four-step recipe; it neither proves the complement deformation/reduction nor proves the stated regularity/local-link hypotheses. The proposed lemma expressly promises those proofs, so it is not fully supported by its cited range. Obtain a primary/cell-topology source with the proof or scaffold the missing lemmas below. |
| BG-4 `punctured-disks-mapping-classes-and-point-pushing` | `def-boundary-fixed-mapping-class-group-of-a-punctured-disk`, `def-pure-mapping-class-group-of-a-punctured-disk`, `thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk`, `cor-pure-braids-are-pure-punctured-disk-mapping-classes` | GM §1.4, pp. 6--7, supports the conventions and high-level identification. **Defer proof support to the planned Birman/Farb--Margalit source:** neither assigned source proves contractibility of the boundary-fixed disk homeomorphism group or the exact evaluation-bundle boundary-isomorphism. |
| BG-4 point pushing | `def-point-pushing-homomorphism-for-a-puncture`, `thm-point-pushing-is-the-kernel-of-forgetting-a-puncture` | FN §IV, pp. 116--117 is relevant only as a homeomorphism-group/configuration exact-sequence method. **Insufficient as cited:** FN fixes marked points pointwise and has no boundary-fixed punctured-disk mapping-class Birman sequence. Retain the theorem only with a precise Birman-exact-sequence source and the evaluation/fiber identification. |
| BG-5 `pure-braids-fadell-neuwirth-and-asphericity` | `lem-a-finitely-punctured-disk-retracts-to-a-wedge-of-circles`, `lem-the-planar-forgetful-map-has-a-continuous-section`, `thm-ordered-planar-configuration-spaces-are-aspherical`, `cor-unordered-planar-configuration-spaces-are-aspherical` | FN Thms. 1--5 and Cors. 2.1--2.3, pp. 111--116; GM Thm. 2.1--2.2, pp. 12--13. **Include:** establish the punctured-plane wedge-of-circles lemma and use simultaneous induction in the homotopy LES. The source supports this result for the planar case. |
| BG-5 group extensions/generators/torsion | `thm-pure-braid-forgetting-a-strand-short-exact-sequence`, `cor-the-pure-braid-extension-splits`, `def-standard-pure-braid-generators`, `lem-standard-pure-braids-generate-each-free-kernel`, `thm-standard-pure-braids-generate-the-pure-braid-group`, `thm-pure-braid-groups-are-torsion-free` | GM §2.1, pp. 11--13; FN §II and §IV. **Include after dependency repair:** injectivity of \(\pi_1\) of the fiber requires \(\pi_2(F_{n-1}(\mathbb C))=0\), so the short exact sequence as presently placed cannot precede the asphericity (or a simultaneous-induction lemma proving that vanishing). The torsion induction then works. |
| BG-6 `garside-structure-normal-forms-and-the-center` | all eleven listed A-page items | GM §§4--4.3, pp. 26--31. **Include only as a longer proof chain:** source supports the results, but the inventory compresses essential cancellation, complement, Ore, and lattice-extension steps; detailed repair below. |
| BG-7 `the-artin-action-on-a-free-group` | `def-standard-meridians-of-a-punctured-disk`, `thm-the-punctured-disk-fundamental-group-is-free-on-standard-meridians`, `def-artin-automorphisms-of-the-free-group`, `lem-artin-automorphisms-satisfy-the-braid-relations`, `def-the-artin-representation-on-a-free-group`, `prop-the-geometric-action-on-meridians-is-the-artin-representation`, `lem-artin-automorphisms-permute-meridian-conjugacy-classes-and-fix-the-boundary-word`, `cor-the-artin-action-solves-the-braid-word-problem` | GM §1.6--1.6.1, pp. 8--10. **Include:** the formula, relation check, necessary image conditions, and word-problem corollary after faithfulness. |
| BG-7 faithfulness and image | `lem-a-boundary-fixed-punctured-disk-map-acting-trivially-on-pi-one-is-isotopic-to-the-identity`, `thm-the-artin-representation-is-faithful`, `thm-artins-characterization-of-the-braid-subgroup-of-aut-f-n` | GM §1.6 states these outcomes, but gives no proof and explicitly sends the image-theorem proof to Artin 1925/1947. **Insufficient for the proposed local proofs:** acquire/read the English Artin 1947 proof or a precise modern proof, then add the arc-system/realization infrastructure below. Do not let Artin's characterization prove the preceding faithfulness, or conversely, without a noncircular route. |

## Mandatory proof-dependency repairs

### Fox--Neuwirth: the proposed dual-cell lemma is not fully supported

The answer to the specific audit question is **no**. GM supports the
calculation after the dual-cell presentation theorem but does not support the
plan's promise to prove its reduction and local-link argument. A locally
honest chain must add, or cite and accurately delimit, at least:

1. `lem-lexicographic-fox-neuwirth-symbols-form-a-regular-cell-complex`:
   characteristic maps/closures and face incidence, including that equality
   symbols form a subcomplex. A casual stratification is not enough.
2. `lem-the-unordered-configuration-space-is-the-complement-of-the-equality-subcomplex`:
   identify the complement exactly with \(C_n(\mathbb C)\), respecting the
   quotient and no-collision condition.
3. `lem-complement-of-the-codimension-two-subcomplex-has-the-dual-two-complex-as-a-pi-one-model`:
   give a regular-neighborhood/barycentric-dual deformation (or an exact
   CW-pair theorem), proving that strata of codimension at least three do not
   add \(\pi_1\) data.
4. `lem-codimension-two-links-provide-the-dual-two-cell-attaching-loops`:
   prove that the transverse link is a circle and orient/read its boundary;
   this is what licenses “one relation for each codimension-two cell.”
5. Then retain the already proposed generator and two relation calculations,
   and make the presentation theorem depend on all four new lemmas. The
   current `lem-the-dual-two-skeleton-...` is itself an overly large theorem;
   it can replace 3--4 only if it is sourced to a proof and its statement
   includes the exact regularity/codimension hypotheses.

This repair is noncircular: it computes \(\pi_1(C_n)\) before using
geometric/mapping-class or Artin-action faithfulness to identify it.

### FN tower: ordering and hypotheses

- Replace the BG-2 FN locator by **FN Thm. 3, p. 114** for general
  forgetting, with Thm. 1, pp. 111--112, as the local-coordinate model.
  Theorem 3's proof is omitted in FN; this is adequate source attribution,
  not proof coverage for a local proof.
- Before `thm-pure-braid-forgetting-a-strand-short-exact-sequence`, add a
  simultaneous-induction lemma such as
  `lem-planar-configuration-bases-have-vanishing-pi-two`, or move the short
  exact theorem after `thm-ordered-planar-configuration-spaces-are-aspherical`.
  The LES otherwise only gives
  \(\pi_2(F_{n-1})\to\pi_1(\mathbb C\setminus Q_{n-1})\to PB_n\), so the
  fiber map need not be injective on the displayed dependencies.
- State the \(n\ge2\) range for the free kernel, base case \(PB_1=1\), and
  distinguish a continuous space-level section from its induced group
  splitting. The source's broad cross-section claims have genuine surface
  exceptions; the plan's special planar formula avoids them only when it is
  written and checked in the plane.
- `ex-the-pure-three-strand-braid-group-is-f-two-times-z` is true but not
  supplied by a split extension alone. A split extension yields
  \(F_2\rtimes\mathbb Z\); add an explicit action calculation and a central
  \(\Delta^2\) splitting (which currently lies later in BG-6), or change its
  dependencies/proof route. No later A page may be a prerequisite.

### Garside: intermediate lemmas that cannot stay implicit

The source's actual order shows the needed chain. The following can be
scaffolded as separate lemmas or proved inside larger results only if every
step is demonstrably written:

1. homogeneous length and both-sided cancellation in \(B_n^+\);
2. lcm/complement calculations for each pair of Artin atoms;
3. induction from atomic lcms plus cancellation to all left/right gcds and
   lcms;
4. \(\Delta\) is the lcm of all atoms, every positive has a common
   \(\Delta\)-multiple, and \(\Delta\sigma_i\Delta^{-1}=\sigma_{n-i}\);
5. Ore's theorem/hypotheses and the identification of its fraction group
   with the Artin group; only here may the positive monoid be called a
   submonoid of \(B_n\);
6. extension of divisibility/gcd/lcm from the monoid to the group;
7. finite simple divisors, complements, and the left-weighted greedy normal
   form, including uniqueness; then the algorithmic normalization claim.

Consequences for exact existing IDs:

- `thm-positive-braids-have-left-gcds-and-lcms` currently claims too much
  from only definitions. It needs 1--4, rather than an unsupported appeal to
  “crossing reductions.”
- `lem-simple-braids-are-indexed-by-permutations` must not argue from
  geometric crossings before monoid embedding. Give a positive-lift/reduced
  permutation-word proof, or make it depend on the embedding and the
  already-proved BG-3 geometric equivalence. Its current deps do neither.
- `thm-the-positive-braid-monoid-embeds-in-the-braid-group` needs
  cancellativity and common multiples explicitly, not merely the final
  gcd/lcm headline unless that theorem genuinely contains their proof.
- `thm-left-garside-normal-form-is-unique` also needs the \(\Delta\)
  conjugation/complement step to convert inverse letters, finite simples and
  the group lattice. Its current two dependencies omit this.
- `thm-braid-groups-are-torsion-free-by-garside-normal-form` is mismatched
  to GM Prop. 4.1: GM uses \(d=1\wedge x\wedge\cdots\wedge x^{r-1}\) in
  the **group** lattice. Add the lattice-extension lemma, or instead supply
  a distinct normal-form proof. Normal-form uniqueness and delta conjugation
  alone do not establish the stated argument.
- `thm-the-center-of-b-n-is-generated-by-the-full-twist` needs the normal
  form, atom-lcm propagation along the connected type-A graph, and
  \(\Delta^2\) centrality. State exactly \(n>2\); for \(B_2\),
  \(Z(B_2)=B_2=\langle\Delta\rangle\), not merely an afterthought.

### Artin faithfulness and image: avoid the circular seam

GM supplies the outcomes and formulas but not the planned proofs. For the
faithfulness route the proposed
`lem-a-boundary-fixed-punctured-disk-map-acting-trivially-on-pi-one-is-isotopic-to-the-identity`
needs, at minimum:

1. a based meridian-and-stem arc system and a lemma that equality of the
   induced \(\pi_1\) classes makes each image arc isotopic rel endpoints to
   its original arc (with a bigon/arc-isotopy argument);
2. sequential ambient isotopy extension that straightens the finite arc
   system while keeping the boundary and punctures in the stipulated manner;
3. Alexander contraction on the complementary disk, in the topology used
   for the mapping-class definition.

`thm-artins-characterization-of-the-braid-subgroup-of-aut-f-n` needs a
separate converse-realization theorem: an automorphism that permutes
peripheral conjugacy classes and fixes the *ordered* boundary word is induced
by a boundary-pointwise disk mapping class. Calling that unproved assertion
“realize the induced permutation and conjugate words” merely restates the
hard direction. GM p. 10 identifies Artin 1925/1947 as the actual proof
source; until its proof is read, retain this as a source-recorded theorem or
add a precise modern proof source. It must not use the characterization to
prove faithfulness, nor use faithfulness to manufacture the realization.

## Convention hazards to preserve in authorship

- GM's diagrams use a conventional vertical orientation; the plan fixes
  bottom-under-second stacking. Translate composition order before copying
  the displayed Artin automorphism. With the plan's frozen formula, test
  \(B_2\) and the boundary word explicitly.
- FN's \(F_{m,n}\) has fixed deleted points \(Q_m\) and then ordered moving
  points; the plan uses \(F_n\) for all ordered configurations. State the
  translation at every fibration use.
- “Fix punctures” is ambiguous. GM §1.4 defines homeomorphisms of the
  punctured disk; the full mapping class allows the puncture set to be
  permuted, while the pure subgroup fixes each puncture. Boundary fixing is
  pointwise throughout. FN Thm. 6 instead uses pointwise-fixed marked sets
  in homeomorphism subgroups.
- FN's asphericity statements have dimension/surface qualifications; only
  the intended plane/interior-disk specialization should enter BG-5.
- In the Garside section, prefix order is not Dehornoy's total order, simple
  divisors should not be called geometric positive braids before the Ore
  embedding, and the source's \(\Delta\) word convention must be reconciled
  with the plan's reversed displayed product before asserting formulas.

## Bottom line

GM and FN substantiate the intended classical track, especially its planar
Fadell--Neuwirth/asphericity route and the Fox--Neuwirth calculation. They
do **not** close three promised local proof seams: the dual-cell \(\pi_1\)
theorem, the boundary-fixed Birman sequence, and Artin's faithfulness/image
arguments. The Garside page also needs the explicit seven-stage algebraic
chain above. These are required scaffold additions or precise-source reads,
not results that can be removed or silently delegated to a citation.
