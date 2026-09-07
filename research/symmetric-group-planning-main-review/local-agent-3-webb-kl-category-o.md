# Local agent 3 — Webb textbook and KL/category-O bridge audit

Scope: independent read-only research for `/root/symmetric_scaffold`, 2026-09-07.
Only this report was created.  In particular, neither the existing RL scaffold's
exclusion of KL material nor the active frontier-33 BGG/category-`O` draft is
treated as a published supplier.

## Verdict

**The third distinct full textbook requirement is satisfied.**  Peter Webb's
author-posted *A Course in Finite Group Representation Theory* is a complete
294-PDF-page book, rather than Mathas's 73-printed-page notes or a publisher
preview.  It is an especially strong general modular/projective/Brauer source,
although it deliberately is not a Young-module/Specht-module text.  Do not
invent a “Webb Young module theorem.”

The exact nondegenerate Ariki seam is **not closed** by the extant quantum
page, Grojnowski, or Brundan--Kleshchev.  The missing load-bearing link is the
geometric identification of the affine-Hecke/projective basis with Lusztig's
perverse-sheaf canonical basis, and then with the selected Kashiwara global
basis.  A real category-`O`/higher Schur--Weyl route is available and valuable,
but it proves the **degenerate** theorem (and, through the generic equivalence,
the generic non-root-of-unity regime); it does not prove the finite-
root-of-unity nondegenerate Ariki theorem.

Use the following two prerequisite prose pages, each well below sixty items.
They form an acyclic fork after the quantum/global-basis foundation:

```
quantum affine datum, crystal and lower global basis
  -> A: affine-Hecke/KL/IC/cyclic-quiver geometric bridge
       -> SYMR nondegenerate Ariki (xi of finite order e)
  -> B: parabolic category O and degenerate Schur--Weyl bridge
       -> separate degenerate categorification only
```

No arrow from B to nondegenerate root-of-unity SYMR is permitted.  The category-
`O` arrow is a useful independent comparison and a source of precise proof
obligations, not a shortcut around A.

## Counted complete textbook: Webb

| field | independently checked record |
|---|---|
| bibliographic identity | Peter Webb, *A Course in Finite Group Representation Theory*, author-posted book manuscript, dated 23 February 2016 |
| full-text URL/status | <https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf>; fetched `200`, valid PDF 1.5, 1,322,988 bytes |
| reproducible cache/audit artifact | `/tmp/webb-audit/RepBookLatex.pdf` in this audit session (not copied into the repo, by scope) |
| SHA-256 | `3053d04310d379844d0ccac2ae078124492730a116e63343014d276169fb4c24` |
| completeness | `mutool info` reports **294 PDF pages**.  I read title/preface/contents, representative proof passages below, bibliography (PDF pp. 282–283; printed pp. 282–283), and the terminal index (PDF pp. 284–294).  The contents runs through Ch. 12 and Appendices A--B, matching the end matter. |
| qualification | Its preface calls it a book and gives a comprehensive graduate-course purpose.  It is distinct from the already-counted James and Macdonald books and is not Mathas's lecture-note manuscript. |

### Contents and usable exact joints

Webb's sequence is particularly appropriate for the non-Specht modular
foundations: Ch. 6 `p`-groups/radical (printed 85--102); Ch. 7 projectives
(103--119); Ch. 8 projective group modules (120--139); Ch. 9 splitting fields,
lattices and decomposition map (140--168); Ch. 10 Brauer characters
(169--187); Ch. 11 indecomposables/vertices/sources (188--225); Ch. 12 blocks,
defect and Brauer correspondence (226--254).  Appendix A develops DVRs
(255--259), and B gives character tables (260--281).

| source passage read | exact claim and proof joints it actually supplies | safe use in SYMR |
|---|---|---|
| Ch. 7 §7.3, Thms. 7.3.5, 7.3.8--7.3.9, printed pp. 112--115 | Nilpotent-ideal lifting takes primitive idempotents to primitive idempotents.  For every simple of a finite-dimensional algebra, `P_S=A f` is its unique projective cover; the indecomposable projectives are precisely these covers and decompose the regular module.  The proof passes through `A/rad A`, idempotent lifting, Nakayama, and essential epimorphisms. | Proof-bearing supplier for projective-cover vocabulary and projective/simple indexing, after the library's finite-dimensional-algebra/radical prerequisites are explicit. |
| Ch. 8 §8.1, Lemma 8.1.2, Thm. 8.1.1, Cor. 8.1.3, printed pp. 120--122 | Restriction of a projective `RG`-module is projective and induction of a projective `RH`-module is projective; over a `p`-group in characteristic `p`, finitely generated projectives are free; hence a projective `kG` has dimension divisible by the Sylow `p`-order.  Proof: free summands, coset-free restriction, then the local `kP` argument. | A correct general projective functor joint.  It is not a proof of KLR/Hecke induction conventions. |
| Ch. 9 §9.4, Thm. 9.4.8 and definition following it, printed pp. 153--155 | Brauer--Nesbitt: reductions of any two full `RG` lattices in the same `FG` module have identical composition factors.  The proof reduces to nested lattices and uses the chain `L_2⊇L_1⊇πL_2⊇πL_1`, with `L_2/L_1 ≅ πL_2/πL_1`.  Thus the decomposition matrix is lattice-independent. | Exact ordinary-to-modular decomposition-map foundation, assuming a splitting `p`-modular system.  It does not give Hecke decomposition numbers. |
| Ch. 9 §9.4--9.5, Prop. 9.4.5, Thm. 9.4.11, Prop. 9.5.1, printed pp. 151--160 | Complete DVR lifts idempotents/projective covers; `d`, `c`, `e` give the cde triangle and `C=D^tD` in the splitting case.  In the semisimple case `p ∤ |G|`, reduction is a bijection on simples and respects tensor, Hom, induction and restriction. | Use to distinguish semisimple from defining-characteristic statements and to justify a Cartan/decomposition matrix joint only in its stated group-algebra system. |
| Ch. 10 §§10.1--10.3, Prop. 10.1.3, Thm. 10.2.2, Prop. 10.3.2, printed pp. 170--183 | Brauer characters live on `p`-regular classes, are additive on short exact sequences, and determine composition factors.  Row orthogonality makes simple and indecomposable-projective Brauer characters bases; the cde triangle becomes restriction to `p`-regular classes and extension by zero. | Supplier for the modular character language behind decomposition matrices; not a substitute for cellular/Specht theory. |
| Ch. 12 §§12.1--12.6, Thms. 12.3.3, 12.4.5, 12.5.2, 12.6.4, printed pp. 234--250 | Green's vertex/defect relation, trace characterization of defect groups, the Brauer morphism criterion, and Brauer's first main theorem.  Proof joints explicitly use relative projectivity, trace maps, fixed-point algebras and block idempotents. | Strong source for general block/defect background.  It cannot prove Nakayama's `p`-core block theorem for `S_n`, which needs a symmetric-group-specific supplier. |

**Boundary.**  Apart from examples/exercises on `S_3,S_4,S_5`, Webb has no
Young modules, Specht construction, `p`-cores, Hecke algebra, KLR, or Ariki
theorem.  Count it as the requested third *finite-group/modular* textbook, not
as false coverage for those specialized topics.

## Parameter firewall

The two parameters must stay visibly different.

| route | algebra/indices | permitted conclusion |
|---|---|---|
| **SYMR target** | Nondegenerate affine/cyclotomic Hecke algebra with `xi∈C^×`, `xi != 1`, `e=ord(xi)>=2`, `I=Z/eZ`; in Ariki's normalization `xi=q^2` and `ord(q^2)=e`. | Ariki's characteristic-zero, finite-root-of-unity theorem for the level-one Fock/basic module. |
| BK category-`O` route | Degenerate affine Hecke algebra with polynomial generators `x_r`, degenerately cyclotomic quotient `(x_1-m_1)…(x_1-m_l)`, `m_i∈Z`, and type `A_∞` (`I` bounded below for the actual `O`/Schur--Weyl construction). | Degenerate categorification.  At level one `H_d^{Λ_i}≅C S_d`, which is semisimple: it does not supply modular/root-of-unity decomposition numbers. |
| BK generic comparison | BK explicitly invokes `[BK4, Cor. 2]` to identify degenerate and nondegenerate cyclotomic Hecke algebras only for **generic** `xi`, hence `I=Z`. | Generic comparison only; cannot be re-labelled as `I=Z/eZ` or as a proof of Ariki's finite `e` theorem. |

For `e=2`, retain the affine Cartan entries `a_01=a_10=-2` and the
degree-three quantum Serre relation, as agent 6 records.  No simply-laced
degree-two shortcut is valid there.

## Page A — `affine-hecke-kazhdan-lusztig-and-cyclic-quiver-geometric-bridge`

This is a proposed proof-bearing A page with **18 items**, deliberately separate
from the basic quantum/Fock page.  “Recorded/blocker” below means that the
source establishes the result but no library-owned proof has yet been supplied;
it must not be passed off as citation-only closure.

| ID | exact claim; dependencies | proof joint, primary locator, status |
|---|---|---|
| `def-nondegenerate-affine-hecke-algebra-and-bernstein-presentation` | Define `H_d(xi)` with invertible `X_r`, Hecke generators, Bernstein relations, and the cyclotomic level-one quotient in the `xi` convention.  Depends on braid/group algebra and field/parameter definitions. | Ariki 1996 §1, pp. 789--790.  **Recorded until relations and PBW/normal form are proved.** |
| `def-finite-root-of-unity-residue-quiver-and-cyclotomic-block-idempotent` | Set `I=Z/eZ`, residue sequence/block idempotent, and `xi=q^2`; require `char C=0`, `xi!=1`, `ord(xi)=e>=2`. | Ariki §1 and §4.6, pp. 789, 806; BK 2009 intro pp. 1--2 is a contrasting finite-`e` nondegenerate statement.  **Definition plus convention proof.** |
| `def-affine-hecke-standard-and-kazhdan-lusztig-bases` | Define standard `T_w`/Bernstein basis, bar involution and the normalized KL basis; state its triangular bar-invariant characterization.  Depends on a Coxeter-length/Hecke page, not merely a braid page. | Kazhdan--Lusztig, *Representations of Coxeter groups and Hecke algebras* (KL1), §1--2; cited in BK §2.3 around pp. 7--9. **New required supplier.** |
| `thm-kazhdan-lusztig-basis-positivity-and-parabolic-transition-polynomials` | Establish existence/uniqueness and the non-negative geometric interpretation of KL/parabolic KL coefficients in the exact normalization later used for standard-to-simple multiplicities. | KL1; finite-type localization proof is Beilinson--Bernstein/Brylinski--Kashiwara, as BK 2009 intro pp. 2--3 explicitly says. **Blocked:** a Hecke decategorification page does not prove positivity or orientation. |
| `def-constructible-derived-category-perverse-t-structure-and-ic-complex` | Define orbit stratification, middle extension `IC(\bar O,L)`, Verdier duality and the normalization in which IC is self-dual. | BBD is the primary prerequisite; Chriss--Ginzburg (CG) supplies the target affine-Hecke setting. **No published library supplier; required if using geometry.** |
| `thm-decomposition-theorem-and-ic-stalk-positivity` | State the proper-pushforward decomposition into shifted semisimple IC complexes and identify multiplicities/stalk polynomials giving nonnegative coefficients.  Depends on the preceding perverse/IC definitions. | BBD/Decomposition theorem. **Hard proof blocker**, not removable by quoting KL. |
| `def-equivariant-k-theory-borel-moore-homology-and-convolution` | Define the Steinberg correspondence convolution algebra and the Riemann--Roch comparison, including the side/opposite convention. | CG, Chs. 5--8; Ariki §3.4--3.9, pp. 796--800 cites CG Thms. 5.11.14--15, 6.2.4, 8.4.5, 8.6.15. **New geometric supplier.** |
| `thm-kazhdan-lusztig-deligne-langlands-geometric-affine-hecke-classification` | Identify the appropriate affine-Hecke simple/projective data through the geometric induction/convolution construction, with IC-labelled multiplicities. | Kazhdan--Lusztig, *Proof of the Deligne--Langlands conjecture* (KL2), Thm. 6.2; exactly Ariki §3.2 p. 794's imported theorem. **Recorded/blocker pending all preceding geometry.** |
| `def-cyclic-quiver-representation-variety-and-lusztig-induction-correspondence` | For the oriented cyclic `A_{e-1}^{(1)}` quiver define `E_V`, flag resolutions, induction/restriction correspondences and the relevant semisimple perverse category. | Lusztig, *Quivers, perverse sheaves, and quantized enveloping algebras* (L91), §§1--9. **Required; not “quiver variety” handwaving.** |
| `thm-lusztig-quiver-perverse-sheaf-grothendieck-algebra-is-u-minus` | Prove convolution realizes `U_v^-`, including the quantum Serre relations and divided powers. | L91 Thm. 10.7, cited precisely in Ariki §4.3 pp. 801--803. **Recorded/blocker.** |
| `thm-simple-quiver-perverse-sheaves-give-the-lusztig-canonical-basis` | The self-dual simple perverse sheaves yield the bar-invariant canonical basis; transition coefficients are graded IC multiplicities and so positive. | L91 Prop. 10.13 and Cor. 13.6; Ariki §4.3 pp. 801--803. **Recorded/blocker; depends on IC/decomposition.** |
| `thm-cyclic-quiver-highest-weight-quotient-realizes-the-level-one-basic-module` | Impose the framing/highest-weight quotient and identify the vacuum component with `V(Lambda_0)`, preserving induction operators and bar. | L91 Prop. 15.5 as used by Ariki §4.3. **Recorded/blocker.** |
| `thm-lusztig-canonical-basis-equals-kashiwara-lower-global-basis-in-selected-normalization` | After fixing lower/upper and contravariant/Shapovalov pairings, prove that the perverse-sheaf canonical basis is precisely the lower global basis from the quantum page. | Ariki §4.7 p. 807 cites Grojnowski--Lusztig; Grojnowski arXiv:math/9907129 §14.1, PDF p. 44, says the equality is “immediate” only from affine-Hecke geometry plus Lusztig perverse sheaves. **Hard blocker:** Grojnowski's elementary properties (i)--(iii) do not establish (iv). |
| `thm-affine-hecke-projective-grothendieck-group-is-the-basic-module` | Map residue induction/restriction to `f_i/e_i`, projective indecomposables to the geometric canonical basis, and establish the Cartan pairing. | Ariki §§3--4, especially Thm. 4.4 p. 806.  **Recorded until the KL/IC/quiver chain is authored.** |
| `thm-ariki-nondegenerate-canonical-projective-theorem-characteristic-zero` | In the exact nondegenerate finite-`e` regime, identify indecomposable projectives with canonical basis and simples with the dual canonical basis. | Ariki Thm. 4.4, p. 806.  **Recorded/proof-blocked**, not an already-closed one-row theorem. |
| `def-level-one-fock-standard-to-global-transition-polynomial` | Fix whether `d_{lambda,mu}(v)` expands lower global/canonical in the standard Fock basis, and fix transpose/dual labels before evaluation.  Depends on agent-6 balanced-triple/Fock convention dictionary. | Leclerc--Thibon Thms. 3.2, 3.3, 4.1, pp. 452--455; with agent-6 warnings about its imported wedge action. |
| `cor-characteristic-zero-ungraded-symmetric-hecke-decomposition-number-is-d-at-one` | State only the correctly oriented `[S(mu):D(lambda)]=d_{lambda,mu}(1)` consequence in the nondegenerate char-0 regime. | Ariki Thm. 4.4 plus the exact Specht/Fock dictionary. **Depends on all preceding geometric and convention items.** |
| `rem-positive-characteristic-adjustment-matrices-are-not-killed-by-ariki` | Record that char-`p` decomposition matrices involve adjustment data; canonical coefficients alone are not a general defining-characteristic formula. | BK, *Graded decomposition numbers for cyclotomic Hecke algebras*, §5.6; see also agent-6 boundary. |

**A proof route.**  The proof must visibly run

`KL basis -> IC/perverse decomposition -> affine-Hecke convolution/classification -> cyclic-quiver perverse sheaves -> Lusztig canonical -> Kashiwara lower global -> projective/simple Grothendieck comparison -> Ariki -> v=1`.

It is not sufficient to cite Ariki at the last arrow.  The source itself imports
each middle joint.  The named words “positivity,” “quiver variety,” or
“intersection cohomology” cannot replace the listed definitions and the
decomposition/convolution proofs.

## Page B — `parabolic-category-o-and-degenerate-schur-weyl-categorification`

This separate companion page has **14 items**.  It provides a first-class
explanation of the category-`O` bridge, but must carry a scope banner saying
“degenerate/type `A_infty`, not the finite-root-of-unity nondegenerate Ariki
bridge.”  The active BGG draft may eventually supply preliminaries, but is
currently unpublished and cannot discharge any row.

| ID | exact claim; dependencies | proof joint, locator, status |
|---|---|---|
| `def-integral-type-a-parabolic-category-o-block-and-highest-weight-objects` | Fix finite `g=gl_n(C)`, Cartan/Borel, standard parabolic with Levi determined by the charge, integral block, parabolic Vermas `M(A)`, simples `L(A)`, projectives `P(A)`, tiltings `T(A)`, and contragredient duality. | BK 2009 §3.1, pp. 20--21, equations (3.1)--(3.5). **Needs a published BGG/highest-weight supplier; frontier-33 draft is excluded.** |
| `thm-bgg-reciprocity-in-the-selected-parabolic-block` | `(P(A):M(B))=[M(B):L(A)]`, with exact order and finite-length hypotheses. | BK p. 20, (3.3), citing BGG. **Needs proof supplier.** |
| `def-parabolic-kazhdan-lusztig-polynomials-and-orientation` | Define Deodhar parabolic KL polynomials and pin their relation to the standard/costandard monomial bases. | BK §2.3, pp. 8--10, especially (2.16)--(2.21); `p_{A,B}` from KL1. **Must not reverse the matrix.** |
| `thm-parabolic-kazhdan-lusztig-character-and-projective-multiplicity-formula` | Give `[M(B):L(A)]=d_{A,B}(1)` and, through BGG reciprocity, projective standard multiplicities. | BK Thm. 3.1(i), proof pp. 21--22.  BK calls it a translation of the KL conjecture and cites [BK2]. **Recorded/blocker pending localization/IC or another full proof.** |
| `thm-category-o-grothendieck-group-is-fock-space-with-four-bases` | Under `[M(A)]↦M_A`, map simples to dual-canonical, projectives to canonical and tiltings to quasi-canonical/selected convention; map translation functors to Chevalley operators. | BK Thm. 3.1, pp. 21--22; its proof uses the preceding KL formula and BGG/Arkhipov--Soergel reciprocity. **Degenerate only.** |
| `def-casimir-tensor-action-of-the-degenerate-affine-hecke-algebra` | On `M⊗V^{⊗d}`, define `s_i` by tensor permutation and `x_1` by the Casimir `Omega`, then derive the degenerate affine-Hecke relations and commuting `g` action. | BK §3.5, p. 26; BK3 introduction pp. 1--3. **Needs relation verification, not merely a named functor.** |
| `def-degenerate-cyclotomic-hecke-quotient-and-prinjective-generator` | Define `(x_1-m_1)…(x_1-m_l)` quotient, the highest-weight projective `P(A^Lambda)`, and `T^Lambda_alpha` as the block summand of its tensor power. | BK (3.14), (3.27)--(3.28), pp. 23, 26--27. |
| `thm-higher-level-degenerate-schur-weyl-endomorphism-algebra` | `H^Lambda_alpha ≅ End_g(T^Lambda_alpha)^op`, with all central idempotent/block choices. | BK Thm. 3.6, p. 27, proved from BK3 Thm. 5.13 and Cor. 6.7.  BK3 complete author PDF `<https://pages.uoregon.edu/brundan/papers/schur.pdf>`, 57 pp., SHA-256 `64d4a890dd9c31671e30a4ed6d2bb8b823775dfce885545eb08e3eee18bf1fad`; Thm. 5.13 PDF p. 44 and Cor. 6.7 p. 46. **Proof-bearing but parameter-limited.** |
| `thm-schur-functor-images-and-full-faithfulness-on-projectives` | For `pi=Hom_g(T^Lambda,-)`, prove exactness; standards map to the specified degenerate Spechts, labelled simples map to simples/zero, projectives to projective covers, and `pi` is fully faithful on projectives. | BK Thm. 3.7, pp. 27--28, using BK3 Thm. 6.10/6.12 and quotient-functor results.  **Needs those imported functional/category proofs exposed.** |
| `thm-translation-functors-intertwine-degenerate-residue-induction-restriction` | Identify `e_i,f_i` on `O` with Hecke residue functors and retain biadjointness/duality. | BK Thm. 3.7(iv), p. 28; proof cites BK3 Lemma 5.16. |
| `thm-degenerate-categorification-projectives-simples-spechts-and-canonical-bases` | Projectives map to canonical `P_A`, simples to dual-canonical `D_A`, Spechts to monomial `S_A`; the Cartan pairing becomes Shapovalov and coefficients are `d_{A,B}(1)`. | BK Thm. 3.10, pp. 29--31. Its displayed commuting Grothendieck square is the proof joint, but it depends on Thm. 3.1 and 3.7. **Do not claim it closes A.** |
| `cor-degenerate-level-one-specialization-is-the-semismple-complex-symmetric-group-case` | At level one, identify the quotient with `C S_d`; explain why its semisimplicity excludes root-of-unity modular decomposition consequences. | BK3 intro pp. 1--2; BK 2009 intro pp. 1--2.  This is a guardrail, not a new result. |
| `rem-generic-nondegenerate-equivalence-is-not-finite-e-equivalence` | Record BK's own `generic xi` comparison and forbid its application when `xi` has finite order. | BK 2009 intro p. 2, paragraph beginning “All of this also makes sense if xi is generic”; pp. 2--3 paragraph beginning “Here, `m_1,…,m_l∈Z`.” |
| `ex-degenerate-category-o-to-hecke-grothendieck-square-in-a-small-level` | Compute a small bounded-below case, tracking `M,L,P` to Specht/simple/projective and matrix orientation. | Depends on the preceding theorems; it must be illustrative only, never proof of the finite-`e` theorem. |

### Directly read source evidence for B and the boundary

| source | full text/read status, URL, SHA-256, PDF pages | decisive locators |
|---|---|---|
| Brundan--Kleshchev, *The degenerate analogue of Ariki's categorification theorem*, arXiv:0901.0057 | Complete primary PDF read, `<https://arxiv.org/pdf/0901.0057>`, `31f6e1bc33cd9d42039dd5a063d2190d1363fabfa02c66d77a56ad813753d325`, 44 pages. | Intro pp. 1--3 defines the nondegenerate finite-`e` target and then distinguishes generic/degenerate regimes; §3.1 Thm. 3.1 pp. 20--22; §3.5 Thms. 3.6--3.7 pp. 27--28; Thm. 3.10 pp. 29--31.  Its proof explicitly begins from a *known* parabolic `O` categorification consequence of KL, rather than proving KL. |
| Brundan--Kleshchev, *Schur--Weyl duality for higher levels*, arXiv:math/0605217 | Complete author PDF read, `<https://pages.uoregon.edu/brundan/papers/schur.pdf>`, `64d4a890dd9c31671e30a4ed6d2bb8b823775dfce885545eb08e3eee18bf1fad`, 57 pages. | Intro pp. 1--3 declares ground field `C`, degenerate quotient and `A_infty`; Thm. A p. 4; Thm. 5.13 p. 44; Cor. 6.7 p. 46. |
| Grojnowski, *Affine sl_p controls the representation theory of the symmetric group and related Hecke algebras*, arXiv:math/9907129 | Complete primary PDF read, `<https://arxiv.org/pdf/math/9907129>`, `80b4a077c55c711a9c35feb0b4412f5ad23677f9d43a07d7a7ed2211abc105ac`, 45 pages. | Thms. 14.1--14.3, pp. 42--43 establish integral action/crystal and the `p`-canonical basis properties.  §14.1, p. 44 explicitly says property (iv), equality with the Lusztig--Kashiwara canonical/global basis, comes from geometric affine-Hecke and quiver-perverse-sheaf descriptions.  Hence it cannot close A without them. |
| Lusztig, *Quivers, perverse sheaves, and quantized enveloping algebras*, JAMS 4 (1991), 365--421 | Primary bibliographic and exact theorem locators independently cross-checked through Ariki; official AMS full-PDF endpoint `<https://www.ams.org/journals/jams/1991-04-02/S0894-0347-1991-1088333-2/S0894-0347-1991-1088333-2.pdf>` returned 403 to this audit.  **No local hash is honestly available.** | L91 Thm. 10.7, Prop. 10.13, Cor. 13.6, Prop. 15.5 are Ariki §4.3 pp. 801--803's exact imports.  Recover a complete text and audit/prove them before closing any L91 row. |
| Ariki, *On the decomposition numbers of the Hecke algebra of G(m,1,n)*, J. Math. Kyoto Univ. 36 (1996), 789--808 | The existing full mirror has been browser-validated by the concurrent audit, but direct stream returned 403 here; therefore no fresh hash is claimed.  URL `<https://scispace.com/pdf/on-the-decomposition-numbers-of-the-hecke-algebra-of-g-m-1-n-440do7n73s.pdf>`. | §3.2 p. 794 imports KL2 Thm. 6.2; §§3.4--3.9 pp. 796--800 import CG; §4.3 pp. 801--803 imports L91; §4.7 p. 807 cites the canonical/global identification; Thm. 4.4 p. 806 is the final characteristic-zero result. |

## What remains blocked, and the permitted handoff

1. A full proof-bearing **KL/IC/perverse/convolution** supplier chain does not
   yet exist in the library.  The A rows must remain visibly `recorded` until
   it does.  The unavailable direct PDF streams for L91/Ariki mean the next
   author must recover/cache the authoritative complete PDFs before declaring
   source closure; this report makes no fake checksums.

2. The B category-`O` page is likewise not closed merely by the active BGG
   draft.  It needs a published, proof-bearing category-`O`/highest-weight
   base plus the finite-type parabolic KL localization/IC theorem, and then
   the exact BK3 Schur--Weyl supplies.  It can become a useful standalone
   degenerate page even if A remains blocked.

3. The direct path into SYMR is A only: agent 6's quantum foundations and
   convention dictionary feed A's selected lower global basis.  Once A is
   genuinely supplied, only then may the SYMR Ariki row depend on
   `thm-affine-hecke-projective-grothendieck-group-is-the-basic-module`,
   `thm-lusztig-canonical-basis-equals-kashiwara-lower-global-basis-in-selected-normalization`,
   and the Fock transition convention.  Evaluation at `v=1` then gives the
   ungraded characteristic-zero number; it does not give the graded statement
   or positive-characteristic decomposition numbers for free.

