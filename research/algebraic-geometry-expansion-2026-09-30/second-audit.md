# Independent second audit: algebraic geometry and scheme theory

Date: 2026-09-30

## Scope and result

This is an independent audit of the published Scheme Theory AV-9–19 and
AV-21–22 pages, the prose-only AV-20 route, and the proposed algebraic-group
expansion. I read `CLAUDE.md`, `README.md`, `WORKFLOW.md`, both AG plans, the
four source reports, and the first audit draft before writing this report.
The first audit and current main plan were re-read after their live updates.
After the first auditor confirmed its edits were stable, the parent requested
that I correct the three stale [07S6] sentences in the expansion roadmap. I
made no edit to the main AV plan or first audit. I also corrected the GA-3
boundary in `source-brion-actions.md` and [07S6] status in `source-stacks.md`.
No live run manifest, item, or engine state was touched.

**Result.** I found no published AV-9–19 or AV-21–22 A-page placement with a
missing item file or missing direct proof destination. The exact item-level
matrix below records the main theorem routes and their hypotheses. The current
first audit has corrected the earlier AV-17 generic-freeness proof summary,
the AV-20 Picard-group label, and the AV-25 coefficient-trace restriction.
The current plan and first audit now limit the elementary coefficient-trace
formula to perfect base fields or separable residue fields. Abstract curve
duality and divisor Riemann–Roch remain over arbitrary fields by a separate
published route.

This is not a fresh mathematical referee of every one of the 375 theorem-like
published proofs. My census check is structural: it verifies page-listed IDs,
published files, direct `Proof` sections, and dependency references. The
selected high-risk statements below were checked against their actual live
item statements and proof routes. A full line-by-line mathematical re-review
of all 375 proofs remains outside this audit.

## Published AV claim and supplier matrix

The IDs in the second column are the direct live proof destinations for the
main claims in each pair. A listed direct theorem is not a substitute for its
stated hypotheses or its published dependencies; the third column records the
important scope constraints and local assembly steps. The page counts are A/B
placements, not counts of theorem claims.

| AV | Exact live suppliers and claim route | Hypotheses / closure check |
|---|---|---|
| **AV-9** (29/9) | `thm-sheaf-equalizer-condition`; `thm-sheaves-as-local-homeomorphisms`; `thm-sheafification-universal-property`; `thm-sheafification-preserves-stalks`; `cor-sheafification-idempotent`; `thm-sheaf-morphism-isomorphism-stalkwise`. | The live proofs build the plus construction, verify the universal property, and identify stalks. These are direct published destinations; no external citation is needed to close the page claims. |
| **AV-10** (30/9) | `thm-inverse-direct-image-adjunction`; `thm-extension-by-zero-adjunction-exactness`; `thm-abelian-sheaves-form-abelian-category`; `thm-exactness-of-sheaves-stalkwise`; `thm-pullback-pushforward-module-adjunction`; `thm-gluing-sheaves`; `thm-gluing-ringed-and-locally-ringed-spaces`. | The proofs reduce exactness to stalks, use sheafification for inverse image, and prove gluing on the stated open covers. Ringed-space gluing retains the local-ring condition for locally ringed spaces. |
| **AV-11** (30/7) | `thm-structure-sheaf-affine-scheme`; `thm-sections-basic-open-affine-scheme`; `thm-stalk-structure-sheaf-prime-localization`; `thm-global-sections-affine-scheme`; `thm-affine-scheme-ring-anti-equivalence`; `thm-spectrum-sober`; `thm-affine-schemes-determined-by-functor-of-points`. | The structure sheaf is proved from localization on distinguished opens, then the affine anti-equivalence is assembled from the affine-local ring maps. The functor-of-points claim is for affine schemes and uses the stated Yoneda argument. |
| **AV-12** (31/8) | `thm-morphisms-into-affine-scheme-global-sections`; `thm-gluing-affine-schemes`; `thm-affine-closed-immersions-quotient-rings`; `thm-reduction-universal-property`. The full scheme-wide QC-ideal/closed-subscheme correspondence is supplied by published AV-18 IDs `thm-qc-ideal-closed-subscheme-correspondence-complete` and `thm-quasi-coherent-ideal-closed-subscheme-correspondence`. | The AV-18 correspondence assumes AC. Its route proves the affine quotient case, localizes, glues ideals and quotient schemes, and checks inverse assignments on an affine cover. Do not attribute the full correspondence to AV-12 alone. |
| **AV-13** (42/11) | `thm-affine-fibre-product-tensor-ring`; `thm-fibre-products-of-schemes-exist`; `thm-affine-fibre-coordinate-ring`; base-change and scheme-theoretic-fibre items on the live page. | The affine tensor-product universal property is proved first; the general scheme fibre product follows by affine-cover gluing. The base-change and fibre statements use those constructed products and retain the relevant quasi-coherence hypotheses. |
| **AV-14** (29/8) | `thm-valuative-criterion-separatedness`; `thm-separatedness-gluing-overlap-criterion`; the diagonal and affine-local separatedness criteria. | The valuative uniqueness criterion assumes AC and quasi-separatedness, quantifies over every valuation ring, and proves uniqueness only. It is not a DVR-only test. The proof uses that the diagonal is a quasi-compact immersion and that an immersion with closed image is a closed immersion. |
| **AV-15** (49/9) | `thm-properness-descent-fpqc`; `thm-valuative-criterion-properness`; `thm-proper-morphism-closed-image`; `thm-projective-morphism-proper`; the finite/proper and projective-morphism results. | The properness valuative criterion assumes AC, finite type, and quasi-separatedness, and uses all valuation rings with existence plus uniqueness. FPQC descent is a separate published item; its proof reduces to universal closedness, separatedness, and finite type. The projective-to-proper route uses projective-space properness, a closed immersion, and composition stability. |
| **AV-16** (33/9) | `thm-sheaf-differentials-universal-property`; `thm-conormal-sequence-closed-immersion`; `thm-tangent-vectors-dual-numbers`; `thm-unramified-diagonal-open-immersion`. | These direct proofs use the stated morphism and module hypotheses. The locally free differentials/smoothness results are on AV-17, not implied by the universal property alone. The tangent-vector item’s point/residue-field convention must be retained. |
| **AV-17** (77/9) | `lem-generic-freeness-finite-type-algebra-module`; `thm-differentials-smooth-locally-free`; `thm-smooth-local-standard-form`; `thm-jacobian-criterion-smooth-morphism`; `lem-scheme-zariski-main-factorization-quasi-finite`; `thm-proper-quasi-finite-is-finite`. | Generic freeness assumes AC, a Noetherian domain A, a finite-type A-algebra B, and a finite B-module M; the rank after localization may be infinite. The actual published proof inducts over algebra generators: prime filtration handles the zero-generator case; for B=A′[x], stabilizing kernels give a finite module Q for successive x-adic layers; localize the initial module and Q to free modules and split the resulting short exact sequences. Scheme Zariski Main assumes separated quasi-finite f and qcqs base for a global open-then-finite factorization, with Zariski-local factorization over an arbitrary base. Its chain is `lem-relative-normalization-finite-stage` → `thm-quasi-finite-algebra-open-finite-factorization` → `lem-scheme-zariski-main-factorization-quasi-finite`; the affine theorem uses CA `thm-algebraic-zariski-main-localization`. `thm-proper-quasi-finite-is-finite` adds properness. |
| **AV-18** (40/10) | `thm-affine-quasi-coherent-equivalence`; `thm-vector-bundles-locally-free-sheaves-equivalence`; `thm-qc-ideal-closed-subscheme-correspondence-complete`; `thm-quasi-coherent-ideal-closed-subscheme-correspondence`; `thm-pushforward-qc-under-qcqs-morphism`. | The scheme-wide QC-ideal correspondence explicitly assumes AC. The pushforward result retains quasi-compact, quasi-separated morphism hypotheses. Vector-bundle equivalence is with finite-rank locally free sheaves. |
| **AV-19** (38/10) | `thm-proj-structure-sheaf-scheme`; `lem-relative-proj-affine-local-gluing`; `thm-relative-proj-base-change`; `thm-projective-map-line-bundle-data-equivalence`; `thm-serre-criterion-ampleness`; `thm-ample-powers-very-ample-proper-base`. | Relative Proj and projectivity are proved with the page’s graded finite-generation and saturation conditions. The ample-power statement retains its proper/finite-type and base hypotheses. |
| **AV-21** (63/10) | `thm-abelian-sheaves-have-enough-injectives`; `thm-flasque-sheaves-acyclic`; `thm-cech-to-sheaf-cohomology-comparison`; `thm-leray-acyclic-cover-theorem`; `thm-mayer-vietoris-sheaf-cohomology`. | The Čech-to-derived comparison is only for the stated acyclic-cover setting. Leray/acyclic-cover assumptions are part of the result; the page does not identify arbitrary Čech cohomology with sheaf cohomology. |
| **AV-22** (56/12) | `thm-qc-sheaf-affine-higher-cohomology-vanishes`; `thm-cohomology-projective-space-twisting-sheaves`; `thm-proper-pushforward-coherent`; `thm-serre-vanishing`; `thm-serre-finiteness-projective-cohomology`; `thm-hilbert-polynomial-coherent-sheaf`; `lem-proper-flat-cohomology-perfect-complex`; `lem-proper-flat-fp-cohomology-perfect-complex`; `thm-cohomology-and-base-change`. | Keep the two perfect-complex statements distinct: the first assumes a Noetherian ring A, proper X→Spec A, coherent F flat over A; the second assumes proper finite-presentation X→Spec A and finitely presented F flat over A, for arbitrary A. The arbitrary-base cohomology-and-base-change theorem assumes proper f of finite presentation and coherent F flat over S, plus the item’s fibre-surjectivity hypotheses at s for the local conclusions. It does not say every base-change map is an isomorphism without those hypotheses. |

### AV-20: local closure route and exact boundary

AV-20 remains an empty planned slot, so it has no current published theorem
supplier. Its claims can be locally proved from existing published inputs and
the following explicit arguments; this closes a route, not a published page.

1. For Cartier divisors, use the local equation description in
   `def-cartier-divisor` and prove it agrees with the sheaf quotient by units.
   Unit changes on overlaps make the local equations glue. Multiplying local
   equations proves addition corresponds to tensor product of the invertible
   sheaves O(D), and the inverse equations give the dual.
2. On an integral scheme, a line bundle has a nonzero vector at the generic
   point; this gives a nonzero rational section. Multiplication by local
   equations turns a rational section into a Cartier divisor. Changing the
   rational section multiplies it by a rational function, so Cartier classes
   modulo principal divisors identify with the ordinary group Pic(X) of
   isomorphism classes of invertible sheaves.
3. For a normal Noetherian integral scheme, CA-8
   `thm-height-one-localisation-of-normal-noetherian-domain-is-dvr` gives the
   height-one DVRs. Apply their valuations to local Cartier equations to get
   the Cartier-to-Weil map and show unit changes do not alter it. The reverse
   implication belongs only to locally factorial schemes as defined by UFD
   local rings: every codimension-one Weil prime is locally principal there.
   Do not replace this condition with “regular” without proving the
   regular-local-UFD theorem.
4. On a proper normal integral curve, a nonconstant rational function extends
   to a morphism C→P1: the local rings at closed points are DVRs and P1 is
   proper. The morphism is proper and quasi-finite, hence finite by published
   AV-17 `thm-proper-quasi-finite-is-finite`. A finite torsion-free algebra
   over a target DVR is free of rank d. Its zero and pole fibres therefore
   both have weighted degree d, proving degree(div(f))=0. The constant case
   has zero divisor.

The ID `def-picard-group` is correctly the ordinary Picard group, not a
Picard scheme or a representability theorem. The plan still lists CA-9
`dedekind-domains-and-ideal-classes` as a prerequisite, although the general
Cartier/Weil route above does not need it. Replace the AV-20 `requires` text
with: “`requires`: `AV-18`, `AV-19`, `AV-12`, CA-8
`valuation-rings-and-discrete-valuation-rings`, and CA-10
`krull-dimension-and-height-theorems`. CA-9
`dedekind-domains-and-ideal-classes` is optional and applies only to the
Dedekind-curve specialization of divisor classes.” CA-9’s
`thm-ideal-class-group-is-the-picard-group` is a Dedekind-domain/rank-one
projective-module result, not a general scheme or Krull-domain supplier.

## Algebraic-group proposals and source-gate audit

The expansion roadmap generally does distinguish candidates from buildable
claims: its group rows name exact A/B targets and explicit open source gates;
its closing statement says those targets are not proof-ready until the gates
close. The following matrix records the actual scope and whether the gate is
adequate. The unread sources listed as gates are not counted as proof routes.

| Candidate | Checked source scope / exact boundary | Gate assessment |
|---|---|---|
| **AG-GS-1** group schemes over a field | M22 Chs. 1–2 gives field-level group schemes. Stacks [022S], [047D], [0G8L] supplies group-object, closed-subgroup, and valued-point factorization routes; [022U], [040M], [022V], [022W] supplies standard examples. In characteristic p, α_p and μ_p both have only the identity as a k-point, so rational points do not distinguish these group schemes. | Honest: the definition/basic-example route has two checked treatments, while an independent α_p/μ_p treatment and Milne-only content remain open. Stacks [040M] on roots of unity is not an α_p supplier. |
| **AG-GS-2** Hopf algebras and rational representations | M22 Props. 3.1, 3.6–3.15 and Thm. 4.9/Cor. 4.10 give the affine group/Hopf route, subgroup/Hopf-ideal route, and finite-dimensional subcomodule argument over fields. The published AG-LIE faithful-representation result is complex-only. | Honest: no Stacks Hopf/comodule proof was verified; the second-source gate is required. The candidate must prove all three obligations and state arbitrary-field/characteristic scope. |
| **AG-GS-3** Lie and infinitesimal groups | M22 Def. 10.6 and Thm. 10.23 support the Lie construction; Stacks [047I], [0BF5] supports invariant differentials/tangent addition, not the bracket. Cartier smoothness is characteristic zero. | Honest: the bracket/adjoint commutator proof and an independent treatment remain open. Do not infer the bracket from the tangent-module results or claim positive-characteristic smoothness. |
| **AG-ACT-1** actions and controlled quotients | M22 Thm. 7.18: if G is smooth affine over a field, G/H exists as a separated algebraic scheme for every algebraic subgroup H; proof uses Chevalley 4.27 and Prop. 7.17. Stacks [03BM]: U=Spec A and R=Spec B, s,t finite locally free, j=(t,s) an equivalence relation; Spec(A^R) represents the fppf quotient. Stacks [07S6] is for a groupoid scheme with s,t finite locally free, j an equivalence relation, and the extra condition that every nonempty closed Z⊂U contains u whose R-class lies in an affine open; it produces a finite-locally-free scheme quotient. | The arbitrary-group/G/H gate is honest and remains open: neither [03BM] nor [07S6] establishes unqualified representability for arbitrary subgroup schemes/actions. M22 Appendix B and its imported DG steps still need a close-read/local reconstruction and an independent treatment. |
| **AG-ACT-2** complex affine actions | Brion §§1.1 and Prop. 1.9 supplies the complex rational-action and equivariant finite-dimensional embedding route. It is not the general group-scheme representation pair. | Honest: the second complete treatment is open. The row correctly requires a separate affine-action embedding proof rather than reusing AG-LIE’s representation theorem. |
| **AG-ACT-3** reductive affine invariant theory | Brion Thm. 1.24, for a reductive complex group acting on an affine variety, gives finite generation/categorical quotient and one closed orbit in each quotient fibre. Prop. 1.26 gives a geometric quotient on the stable locus, where stable means closed orbit and finite stabilizer. Brion defers the reductivity-to-complete-reducibility proof to Schwarz–Brion Ch. 5. | Honest after the counterexample correction: the full Reynolds/reductivity proof and second treatment remain open. Do not extend reductive⇒linearly reductive to positive characteristic; the finite-group Noether theorem is not this proof. |
| **AG-ACT-4** projective GIT | Brion Props. 1.29/1.31 and Prop. 1.35 outline the invariant-section/Proj quotient under an ample G-linearized invertible sheaf. Prop. 1.35 is a sketch; Hilbert–Mumford is omitted. Any “some power linearizes” claim needs the row’s connectedness/normality hypotheses. | Honest: complete MFK/Dolgachev proof and an independent treatment are open. Keep projective GIT and Hilbert–Mumford as separate gates unless the latter is locally proved. |
| **AG-GRP-1** Barsotti–Chevalley and abelian varieties | M22 Thm. 8.27 gives the unique connected affine normal subgroup with abelian-variety quotient over a perfect field. Thm. 8.28 gives existence over an arbitrary field, without uniqueness in its statement; the subgroup may be nonsmooth. Stacks [0BFA] proves abelian varieties over any field are projective from [0BF7] and [0B45]. | Honest: reconstruct M22 Props. 8.6/8.26 and quotient reductions locally, then obtain a second source. M22 Thm. 8.45 is a statement plus citations, not its proof. AG-ACT-1’s smooth-affine quotient theorem does not discharge this nonaffine route. |
| **AG-GRP-2** multiplicative type and tori | M22 Defs. 12.14/12.17 and Thms. 12.18/12.23 give the character-module route for finitely generated abelian groups with continuous Galois action; Thm. 12.23 explicitly reduces to the split case and Galois descent A.64/A.66. Tori correspond to torsion-free finite-rank character lattices; general multiplicative type also allows torsion. | Honest: localize the exact descent proof and obtain an independent full treatment. The roadmap correctly keeps μ_p outside the smooth-torus class. |
| **AG-GRP-3** unipotent/solvable and Borel theory | M22 Thm. 14.5 gives the unipotent/upper-triangular criterion; Thm. 16.30 is Lie–Kolchin for smooth connected solvable groups over an algebraically closed field; Cor. 17.3 requires a nonempty complete scheme and yields a geometric-field fixed point; Thms. 17.9–17.10 give Borel/maximal-torus conjugacy for a group variety over an algebraically closed field. Thm. 14.37 uses imported Ado and Engel results. | Honest: the row retains exact field/smoothness/completeness boundaries and keeps the Ado/Engel-dependent equivalence gated. Obtain a second treatment. |
| **AG-GRP-4** split reductive roots, Bruhat, parabolics | M22 Thm. 21.11/Cor. 21.12, Thm. 21.68, Thm. 21.80, and Thm. 21.91 prove the field-level split structure, root groups, Bruhat decomposition, and parabolics/Levi structure; rank-one input is Thm. 20.22. Field root-data existence is Thm. 23.55, developed in §§23(h)–24. | Honest: independent split-field treatment remains open. The roadmap correctly excludes integral Thm. 23.74, whose proof explicitly cites Demazure and SGA 3 XXV. |
| **AG-GRP-5** highest weights | M22 Thm. 22.2 classifies simple finite-dimensional rational modules for a split reductive group over a field in arbitrary characteristic. Thm. 22.41 is characteristic-zero complete reducibility. The proof of key Lemma 22.24 is explicitly taken from Steinberg 1967, Ch. 12. | Honest: read/reconstruct the exact Steinberg argument and get a second treatment. Keep simple-module classification distinct from semisimplicity in positive characteristic. |

### Quotient, invariant-theory, and source-report corrections

The earlier statement that Stacks [07S6] has an *active* comment questioning
whether its closed-subset hypothesis is sufficient is now stale in the
expansion roadmap. I corrected the same stale statement in `source-stacks.md`.
The official full HTML for [07S6]
contains the current strengthened hypothesis above and a 2025-07-22 Stacks
Project response: “I fixed it by requiring there to be ‘enough’ u ... such
that any nonempty closed subset of U contains at least one.” The concern led
to a theorem edit; it is not a live unresolved objection to the current
statement. This correction does not broaden [07S6] beyond finite-locally-free
groupoid equivalence relations.

I repaired the stale GA-3 B-boundary paragraph in `source-brion-actions.md`.
The weights (1,−1) action on A²−{0} has a geometric quotient: the
nonseparated doubled-origin line, formed by gluing the two affine-line
quotients over G_m. Failure of invariant rational functions to separate its
two axis orbits does not refute geometric-quotient existence. The valid
closed-orbit/not-stable example is the trivial G_m action on a point: the
orbit is closed, its stabilizer is positive-dimensional, and it is not stable
under Brion’s definition.

The three expansion-roadmap sentences have now been replaced with this
corrected scope:

> Use Stacks [07S6] only with its current hypotheses: s and t finite locally
> free, (t,s) an equivalence relation, and every nonempty closed subset of U
> contains a point whose equivalence class lies in an affine open. The Stacks
> Project strengthened this condition on 2025-07-22 to ensure enough affine
> neighborhoods; the earlier comment is resolved by that edit. This is a
> groupoid quotient theorem, not a theorem representing arbitrary G/H.

The correction is applied to the AG-ACT-1 row, the “Quotient boundary”
section, and checklist item 1. The matching `source-stacks.md` correction is
also complete. Do not close the arbitrary-quotient source gate based on
[03BM] or [07S6].

Other gate assessment: the roadmap’s “coverage statement” is cautious enough
because it calls the rows candidate proof obligations, names open gates, and
disclaims universal coverage. Preserve this candidate/buildable distinction
when editing; do not present the checked bibliography or a proposed pair ID
as proof closure.

## Source access log

I read the four checked source reports in the dossier and fetched the
authoritative full texts below on 2026-09-30. These were direct official-site
retrievals, not search-result snippets. The downloaded files are in `/tmp` and
are not repository artifacts.

| Source and access | What I read / how it bears on the audit |
|---|---|
| Stacks Project official HTML, [03BM](https://stacks.math.columbia.edu/tag/03BM), `/tmp/second-audit-stacks-03BM.html`, 19,314 bytes, SHA-256 `87491264711a12e2ae192e5b683ed535321c199c83db99fc3a88402a4f9448fd`. | Full Prop. 39.23.9 statement and proof: affine U/R, s,t finite locally free, equivalence relation; invariant ring gives finite-locally-free fppf quotient. |
| Stacks Project official HTML, [07S6](https://stacks.math.columbia.edu/tag/07S6), `/tmp/second-audit-stacks-07S6.html`, 20,424 bytes, SHA-256 `c92e600b0a1979fd3d7729d1685c32faa7b5f44738dc247f5bb7f4c275b2ee1a`. | Full Prop. 66.14.1 statement/proof, footnote, and comments through the current 2025-07-22 response. Confirms the corrected “every nonempty closed subset” condition and that the proof glues [03BM] affine quotients. |
| Stacks Project official HTML, [0BFA](https://stacks.math.columbia.edu/tag/0BFA), `/tmp/second-audit-stacks-0BFA.html`, 13,729 bytes, SHA-256 `9bf755078b8432ab5d9897c1544ed7283da0d06736819acea1809769e5bc5893`. | Full Lemma 39.9.2: every abelian variety over a field is projective; proof refers to [0BF7] and [0B45]. |
| Stacks Project official HTML, [0BF7](https://stacks.math.columbia.edu/tag/0BF7), `/tmp/second-audit-stacks-0BF7.html`, 19,313 bytes, SHA-256 `ce28960d1cd122370f65a6ec5f7223aa55da3c09281eb9bb269e7350188f2969`. | Full Lemma 39.8.7 proof that an algebraic group scheme over a field is quasi-projective, including the ample invertible-sheaf construction. |
| Stacks Project official HTML, [0B45](https://stacks.math.columbia.edu/tag/0B45), `/tmp/second-audit-stacks-0B45.html`, 16,261 bytes, SHA-256 `d3057d3998eeec4460af5c5f4cac7be7e9d3f8683ffde265108cb76d3f2523f2`. | Full Lemma 37.50.1 proof: over a base with an ample invertible sheaf, proper plus ample is projective; enough to close the [0BFA] dependency route. |
| Milne, *Algebraic Groups*, official author PDF, `/tmp/second-audit-milne.pdf`, 4,838,013 bytes, SHA-256 `f2ddd8fa4d263085f173934664b246007a2c0bd539739b7c82de39bfb5d21f40`; full text extracted with `mutool` to `/tmp/second-audit-milne.txt`. | Rechecked §§4, 7–8, 12, 14, 16–17, 20–24 and App. C for quotient scopes, Barsotti–Chevalley, multiplicative type, unipotent/Borel, split reductive groups, highest weights, and the exact imported proof boundaries. |
| Brion, *Introduction to Actions of Algebraic Groups*, official publisher PDF, `/tmp/second-audit-brion.pdf`, 678,378 bytes, SHA-256 `1abc97e4b6ff41d68c4b900020709bc2ccca3e01d965d86cbd4c961a4ed0eef2`; extracted all 23 pages with `mutool` to `/tmp/second-audit-brion.txt`. | Rechecked §§1.18–1.35, especially the affine categorical quotient, stable locus, proof imports, projective GIT sketch, and the doubled-origin example boundary. |
| Vakil, *The Rising Sea* report; Stacks report; Milne report; Brion report; first audit draft. | Read the repository reports themselves for their saved access details and prior scope analyses. I make no new full-text-access claim for Vakil beyond what its report records. |

## Validation

- Reconciled counts: 13 published AV pages, 547 A placements and 121 B
  placements; AV-20 and AV-23–26 remain empty planned slots; AV-7/8 remain
  prose-only. The first audit’s scan found 375 theorem-like A destinations,
  all with published files and `Proof` sections. This is a status/structure
  check, not a proof-by-metadata argument.
- Re-read the current live item statements for the selected high-risk
  suppliers: AV-12 QC ideals; AV-14/15 valuative criteria; AV-17 generic
  freeness and scheme Zariski Main; AV-18 QC-ideal correspondence; and the
  AV-22 perfect-complex/base-change items. Their exact assumptions are
  preserved above.
- `source-brion-actions.md` has the corrected GA-3 B boundary;
  `source-stacks.md` has the corrected [07S6] status; and all three stale
  expansion-roadmap sentences have been corrected. The arbitrary G/H source
  gate remains open.
- No plan-spec, live page, item file, manifest, or engine state was changed.
  The plan validator was not rerun because the edit changes only roadmap
  prose.
- Targeted validation passed: `git diff --check` on the expansion roadmap;
  a search confirms its three [07S6] locations describe the current
  strengthened hypothesis and no longer call the comment active; trailing
  whitespace scans passed for the roadmap, this report, and both edited
  source reports.

**Post-audit page registration (2026-09-30).** At the owner's request, the 24
audited contracts to `plan-spec.json` as 48 future pages at orders 871--918,
with empty item lists and the seven Scheme Theory / seventeen Algebraic
Geometry category split. This does not close the source gates documented
above or alter the active 30-pair run. The plan validator passes after the
registration; 367 planned pages now have empty item lists.
