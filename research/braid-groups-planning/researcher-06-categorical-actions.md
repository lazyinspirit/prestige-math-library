# Researcher 06 — Khovanov--Seidel and Rouquier categorical actions

**Commission lane.** ArXiv primary-source audit for the braid-groups prose
scaffold, 2026-09-07.  This is evidence and a proposed repair chain only.  It
does not edit the scaffold, any live plan, runtime state, or library item.

## Retrieval and full-text verification

| source | legitimate full-text URL checked | cached complete PDF | SHA-256 | verification | body checked |
|---|---|---|---|---|---|
| M. Khovanov and P. Seidel, *Quivers, Floer cohomology, and braid group actions*, arXiv:math/0006056v2 (2001) | <https://arxiv.org/pdf/math/0006056> — live `200`, `application/pdf` | `scratchpad/source-cache/braid-groups/khovanov-seidel.pdf` | `34e747083f6229d6e53049ab2107d01e1b554459ed9a528bf021163ffcd6957d` | first bytes `%PDF-1.4`; `mutool info` reports 72 pages | complete `mutool` extraction `khovanov-seidel.txt`, 35,253 words through the references |
| R. Rouquier, *Categorification of the braid groups*, arXiv:math/0409593 (2004) | <https://arxiv.org/pdf/math/0409593> — live `200`, `application/pdf` | `scratchpad/source-cache/braid-groups/rouquier-categorification.pdf` | `ad965f5c808388245c348adfee28f47127cacf09c057110082bb8723d79050cb` | first bytes `%PDF-1.4`; `mutool info` reports 22 pages | complete `mutool` extraction `rouquier-categorification.txt`, 9,483 words through the appendix |

The cache files, hashes, page counts, and extracted-word totals agree with
`source-manifest.json`.  A complete download is not being represented as a
whole-paper reading.

### Sections actually inspected

- **KS:** §1b, printed pp. 3--4; §§2a--2e, pp. 9--17 (in particular
  Proposition 2.1, Theorem 2.2, Proposition 2.4, Theorem 2.5, Definition 2.6,
  Proposition 2.7, and Proposition 2.8); §§3a--3e, pp. 17--33, for the
  standard arcs, intersection detection, bigradings, normal form, and the
  lifted braid action; and §§4a--4c, pp. 33--47 (Theorem 4.3, Proposition 4.4,
  Corollary 4.8, Proposition 4.9, and the final deduction of Corollary 1.2).
  I did not inspect the Floer-theoretic material in §§5--6.
- **Rouquier:** §§3.1.1--3.1.2, pp. 6--7; §§3.2.1--3.2.4, pp. 6--10
  (Lemma 3.1, Proposition 3.2, Lemma 3.3, Proposition 3.4); and §§3.3.1--3.3.3,
  pp. 10--11 (Theorems 3.5 and 3.7, Remarks 3.6 and 3.10).  I did not inspect
  the category-`O`, flag-variety, or other applications in §§4--6.

## Source harvest and heading-disposition ledger

| source heading/result actually read | mathematical content used | disposition in current BG-14/15/17 | audit result / exact locator |
|---|---|---|---|
| KS §1b, pp. 3--4 | Doubled line quiver, grading, relations, and the `4m+1` path basis of `A_m` | BG-14 definitions and basis lemma | **Included and accurate.**  The displayed relations really are imposed for `0<i<m`; the end relation is `(0|1|0)=0`. |
| KS Prop. 2.1, pp. 9--10; §2c, pp. 10--11 | finite projective resolutions, finite homological dimension, and `C_m=K^b(proj A_m)` | BG-14 resolution and derived-category rows | **Included, with one proof obligation retained.**  The author must prove `A_m` is left Noetherian (finite free over central `Z` suffices) before importing HA-21.7; KS itself only states finite homological dimension. |
| KS §2b and Theorem 2.2, p. 10 | `U_i=P_i tensor_Z {}_iP`; exactness/projective preservation; the four Temperley--Lieb functor relations | BG-14 two-sided-bimodule and TL rows | **Included and accurate.**  Right projectivity yields exactness; left finite projectivity yields preservation of finite left projectives.  These must remain separate assertions. |
| KS §§2c--2d, pp. 10--14 | a bounded bimodule complex must be projective on *both* sides; maps `beta_i`, `gamma_i`; inverse complexes; chain-level braid isomorphisms | BG-14 twist definitions; BG-15 inverse/far/three-term lemmas | **Included but make the requested chain maps/contractions non-optional.**  Proposition 2.4 gives `T_{-1} direct-sum T_0 direct-sum T_1`; Theorem 2.5 identifies the two four-term cones through the maps `e=f`, normalized by coefficients `(1,-1)`.  A bare equality in `K_0` cannot replace either calculation. |
| KS Def. 2.6 and Prop. 2.7, p. 14 | weak action: `F_1=Id` and existence of `F_{fg} isomorphic F_fF_g`; no chosen compositor/pentagon | BG-15 weak-action definition and action theorem | **Included and correctly limited.**  It must not be promoted to a coherent action. |
| KS §2e.1, pp. 14--15; Prop. 2.8 | `K(A_m-mod)` is free of rank `m+1` over `Z[q,q^{-1}]`; `[R_i]=[Id]-[U_i]`; unreduced and reduced Burau comparison | BG-15 `K_0` and decategorification rows | **Included, convention-sensitive.**  The planned author must display the source action on every `[P_j]` and compare with the BG-9 column-vector convention; do not merely assert `q=t`. |
| KS §§3a--3b, pp. 17--21, especially Lemmas 3.4--3.6 | basic arcs and the intersection-number detector; equality of intersection data for both `f` and `f^2` forces the identity mapping class | BG-15 arc/Hom and faithfulness rows | **Missing load-bearing supplier.**  The current faithfulness proof invokes an unnamed “arc-detection lemma”; it needs a planned lemma and dependency below. |
| KS §§3d--3e, pp. 23--33; Prop. 3.19 | bigraded curves, normal form, `k`-strings, and the lifted Artin action | BG-15 intersection-polynomial definition | **Under-specified.**  The definition must explicitly fix the `Z^2` cover/bigrading, basic arcs, and the preferred lift; braid-isotopy alone does not supply them. |
| KS §§4a--4c, pp. 33--47; Thm. 4.3, Prop. 4.4, Prop. 4.9 | curve complex `L`, generator intertwining by localized homotopy equivalences, and equality of Hom Poincare polynomial with bigraded intersections | BG-15 Hom/intersection theorem and faithfulness theorem | **Included only after the two preceding suppliers are added.**  The source proves faithfulness from Prop. 4.9 specialized at `q_1=q_2=1`, together with Lemma 3.6; the latter requires the `sigma` and `sigma^2` tests. |
| Rouquier §§3.1.1--3.1.2, pp. 6--7 | finite Coxeter system, faithful reflection representation, and `2m_{st}` invertible; graph bimodules `A_w` and canonical multiplication comparisons `c_{x,y}` | BG-17 coherent-action rows | **Missing load-bearing supplier.**  The current plan names the hypotheses but never defines `A_w` or the canonical comparisons used to normalize coherence. |
| Rouquier §§3.2.1--3.2.4, pp. 6--10; Prop. 3.2 and Lemma 3.3 | generator complexes, Coxeter braid homotopy equivalences, inverse complexes, and only an action up to isomorphism | BG-17 first four rows | **Included, but the advertised type-A proof must present actual maps and contractions.**  Rouquier proves the general relation by a finite-dihedral construction, not by a citation to an abstract decategorification theorem. |
| Rouquier §3.3.1, p. 10; Thm. 3.5 | derived graph-bimodule comparisons select unique `gamma_{t,u}` in degree-zero graded Hom; their transitive system gives `G_v`, `m_{v,v'}`, `m_1` and a monoidal action | BG-17 normalization/coherent-action/well-definedness rows | **Significant gap.**  The current normalization lemma omits the derived comparison bridge and the Hom identification.  The repair chain below is required; pairwise braid maps alone do not prove the pentagon. |
| Rouquier §3.3.2, p. 10; Thm. 3.7 | full category on `G_v`, strict product, dual `G_v^*=G_{v^{-1}}`, strict rigid monoidal structure; its decategorification is a quotient of the braid group | cited only in BG-17 coherent theorem | **Missing explicit disposition.**  Add a distinct theorem.  This is not the same assertion as Soergel/Hecke decategorification. |
| Rouquier Remark 3.10, p. 11 | Soergel bimodule subcategory categorifies the Hecke algebra; tensor-ideal quotient categorifies Temperley--Lieb | BG-16 and BG-17 Hecke context | **Use only here.**  It does *not* support word-complex comparison maps or their coherence; remove it as a locator from the canonical-homotopy theorem. |

## Required repair chains

### BG-14: retain the sidedness and the chain data

The BG-14 algebra and its proposed dependencies are sound, provided the prose
really carries out the promised work.  The exact chain is

`def-khovanov-seidel-type-a-quiver-algebra`
→ `lem-the-khovanov-seidel-algebra-has-the-four-m-plus-one-path-basis`
→ `def-graded-khovanov-seidel-module-category-and-projectives`
→ `lem-simple-khovanov-seidel-modules-have-explicit-finite-projective-resolutions`
→ `thm-the-khovanov-seidel-algebra-has-finite-homological-dimension`
→ `def-bounded-projective-homotopy-category-for-a-m`.

Separately,

`def-graded-khovanov-seidel-module-category-and-projectives`
→ `def-two-sided-projective-khovanov-seidel-bimodule-functors`
→ `thm-khovanov-seidel-u-functors-satisfy-temperley-lieb-relations`
→ `def-khovanov-seidel-beta-and-gamma-bimodule-maps`
→ `def-khovanov-seidel-positive-and-negative-twist-complexes`.

At the last arrow, state both roles explicitly: right `A_m`-projectivity makes
tensor exact/derived, and left finite projectivity keeps the output in
`K^b(proj A_m)`.  The `gamma_i(1)` formula must retain all four terms, omitting
only `(i+1|i) tensor (i|i+1)` when `i=m` (KS (2.7)).

### BG-15: add the omitted arc detector and make the final proof source-faithful

Add, before the Hom/intersection theorem, the unused proposed item
`lem-khovanov-seidel-basic-arcs-detect-the-identity-braid` with dependencies

`[thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk,
  def-bigraded-hom-intersection-polynomial-for-khovanov-seidel-curves]`.

Its statement must be: for a basic arc system `b_0,...,b_m` and a boundary-fixed
representative `f`, if
`I(b_j,f(b_k))=I(b_j,f^2(b_k))=I(b_j,b_k)` for every `j,k`, then `[f]=1`.
Its proof route is KS Lemmas 3.4--3.6, pp. 19--21: first get the limited Dehn
twist alternatives from the intersection table, then use the free abelian
subgroup generated by the twists and the second-iterate condition to force all
exponents to vanish.  It is not enough to assume that one iterate has the
identity intersection table.

Expand the current bigraded-intersection definition (or split it, if size
demands) so it declares the punctured disk, basic arcs, the `Z^2` tangent-line
cover, the preferred lifted mapping-class action, and the convention relating
`[r]` and `{r}` to a `Z^2` shift.  Its dependencies must include the
boundary-fixed mapping-class theorem, not merely geometric braid isotopy.

Then replace the faithfulness proof route by the exact chain

`def-khovanov-seidel-complex-of-a-braid-word`
→ `thm-khovanov-seidel-homs-compute-bigraded-arc-intersections`
→ `lem-khovanov-seidel-basic-arcs-detect-the-identity-braid`
→ `thm-the-khovanov-seidel-weak-braid-action-is-faithful`.

For the final theorem: an isomorphism `R_sigma isomorphic Id` gives the same
Hom ranks as `Id` for `sigma`; applying it again gives the corresponding ranks
for `sigma^2`.  Proposition 4.9 at `q_1=q_2=1` supplies both intersection
equalities, and the new lemma proves `sigma=1`.  This is the source's final
paragraph on p. 47, and makes the claimed arc faithfulness a proof rather than
an undeclared appeal.

### BG-17: replace the incomplete Rouquier coherence chain

The current item
`lem-rouquier-normalized-comparison-isomorphisms-are-transitive` is not
derivable from a word definition plus a three-term chain equivalence.  Insert
the following items immediately after `def-rouquier-complex-of-a-braid-word`
and before that lemma (the IDs are unused in the current inventory).

1. `def-rouquier-type-a-graph-bimodules-and-canonical-word-comparisons`
   depends on `[def-type-a-reflection-realization-and-polynomial-ring]`.
   Define `A_w` as left-regular `A` with right action twisted by `w`, and define
   the canonical multiplication comparisons
   `A_{x_1} tensor_A ... tensor_A A_{x_r} isomorphic A_{x_1...x_r}` and hence
   `c_{x,y}` for Coxeter words with the same product.  Locator: Rouquier
   §3.1.2, p. 6.
2. `lem-rouquier-generator-complexes-have-canonical-derived-graph-models`
   depends on `[def-positive-and-negative-rouquier-generator-complexes,
   def-rouquier-type-a-graph-bimodules-and-canonical-word-comparisons]`.
   With the plan's convention `B_s=A tensor_{A^s}A(1)`, identify the displayed
   positive complex `[B_s -> A(1)]` with Rouquier's `F_s(1)`, and the negative
   complex `[A(-1) -> B_s]` with Rouquier's `F_{s^{-1}}(-1)`.  The source maps
   identify *each* with `A_s` in the derived category: §3.2.1, p. 6 and §3.3.1,
   p. 10.  This shift accounting is essential.
3. `lem-rouquier-derived-comparison-gives-unique-normalized-homotopy-maps`
   depends on `[def-rouquier-complex-of-a-braid-word,
   lem-rouquier-complexes-satisfy-far-commutativity,
   lem-rouquier-complexes-satisfy-the-three-term-braid-relation,
   lem-opposite-rouquier-generator-complexes-are-homotopy-inverse,
   def-rouquier-type-a-graph-bimodules-and-canonical-word-comparisons,
   lem-rouquier-generator-complexes-have-canonical-derived-graph-models]`.
   For two signed expressions `t,u` of one braid, prove the comparison from
   `K^b(A^e-mod^gr)` to `D^b(A^e-mod^gr)` is an isomorphism on the relevant
   **degree-zero graded** Hom, that this Hom is `k`, and define the unique
   `gamma_{t,u}` mapping to `c_{t,u}`.  Locator: Rouquier §3.3.1, p. 10.  The
   degree-zero qualifier matters: ungraded `End_{A^e}(A)` is not simply `k`.
4. Keep `lem-rouquier-normalized-comparison-isomorphisms-are-transitive`, but
   replace its dependencies by the preceding unique-normalized-map lemma.
   Transitivity follows because both composites have the same derived image
   `c_{t,v}`.  Do not call this a consequence of one-dimensionality alone.

The coherent-action theorem can then construct `G_v` from this transitive system
and construct `m_{v,v'}` and `m_1` by their compatibility with the canonical
derived multiplication maps.  Its stated type-A hypotheses must remain:
finite Coxeter system, faithful reflection representation, and invertible
`2m_{st}` for finite `m_{st}`; characteristic zero discharges them in the
specialized setup.  The pentagon and unit diagrams commute after passage to the
derived category, where both sides are the same canonical multiplication map,
and then commute in `K^b` by the comparison isomorphism.  This is Rouquier
Theorem 3.5, not braided-monoidal coherence.

Add a separate theorem,
`thm-rouquier-2-braid-category-is-strict-rigid-monoidal`, depending on
`[thm-rouquier-complexes-form-a-coherent-braid-group-action]`.  It must define
the full subcategory on the `G_v`, strict product `G_v tensor G_w=G_{vw}`, and
dual `G_v^*=G_{v^{-1}}`, then state exactly Rouquier Theorem 3.7.  Its
decategorification is a quotient of the braid group; it is not the later Hecke
class calculation.  Finally, change the source locator of
`thm-rouquier-complex-is-well-defined-up-to-canonical-homotopy-equivalence` to
Rouquier §3.3.1 and Theorem 3.5 only: Remark 3.10 is unrelated to `gamma`.

## Non-red-flag confirmations

- BG-14 correctly distinguishes left and right projectivity, unlike the common
  but invalid shortcut “right projective therefore an endofunctor of perfect
  complexes.”
- BG-15 correctly calls the KS construction weak, not coherent; its
  `K_0` warning is mathematically necessary.
- The BG-17 shifts are compatible with Rouquier *provided the planned source
  translation in repair item 2 is made explicit*.  In the plan convention,
  positive and negative generators both acquire a derived `A_s` model, which
  is exactly what §3.3.1 requires for normalized comparisons.
- The proposed three-term chain relations need explicit chain maps, homotopies,
  and contractions.  This requirement is correct and must survive authoring.

## Dependency and locator summary for the lead

No existing BG-14/15/17 item needs deletion.  The minimum additions are the
KS arc-detection lemma, the Rouquier graph-bimodule definition, the derived
generator-model lemma, the unique-normalized-map lemma, and the strict-rigid
2-braid-category theorem.  The current BG-17 normalization lemma then has a
valid source-grounded input; the current BG-15 faithfulness theorem then has the
missing topological input.  The only locator correction is to remove Rouquier
Remark 3.10 from the canonical-homotopy theorem and reserve it for the
Soergel/Hecke--Temperley--Lieb context.
