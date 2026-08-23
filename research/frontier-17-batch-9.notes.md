# Frontier 17, batch 9 — Beta-9 scaffold notes

## Continuity checkpoint

- Current substage: Step 2 artifacts are drafted; the proof contracts and final mechanical checks remain.
- Owned artifacts: research/frontier-17-batch-9.pages.json, research/frontier-17-batch-9.coverage.json, research/frontier-17-batch-9.proof-contracts.json, and this notes file.
- Completed checks: all required repository instructions and exemplars; the MA-4 design and live plan; five full source treatments; 111 harvested source headings; semantic id search; every proposed published dependency's actual Definition/Statement and provenance; internal order, B-leaf, status, and generated-dependency preflight.
- Open constraints: finish exact version-1 contracts; keep the finitary proof at DC rather than AC; keep Manes' hard direction at UL/BPI; retain no dependencies on predecessor examples-page items; record the unstampable-source blocker without inventing stamps.
- Exact next action: write the proof contracts, run proof-contract/coverage/content/prose checks, and update this checkpoint with the final results.

## Scope, order, and artifact boundary

The live spec gives the A page order 365.007 and the companion order 365.008. The manifest contains 44 A-page items and 7 companion items. The A page is below the binding 60-item split ceiling, so no split is proposed.

The four namespaced artifacts include the separately gated coverage harvest. The dispatch's three-file list omits coverage.json, but CLAUDE.md and QUALITY-CONTROLS.md require it at Step 2; the most recently completed batch-1 notes record the same prompt omission. No other file is written.

## Design/spec drift held for the engine

Recommendation: approve the live spec unchanged at this stage and adjudicate the drift centrally.

Design old text:

> **requires** monads-comonads-and-their-algebras, nets-and-filters, separation-axioms, compactness-in-metric-spaces

Live spec text:

> requires: monads-comonads-and-their-algebras-examples

The manifest retains the live spec. All topology dependencies are nevertheless published at strictly smaller orders. The design also puts def-monadic-and-strictly-monadic-functor and def-conservative-functor on MA-4, whereas the live plan and disk place both as published items on monads-comonads-and-their-algebras at order 365.005. They are cited rather than re-minted. The design gives no numeric order; the live spec supplies 365.007/365.008, so no order conflict exists.

## Applyable amendments to research/plan-category-theory-track.md

### Amendment MA4-1 — reuse the published monadicity and conservativity definitions

Recommendation: approve.

Exact old text:

> 1. def-monadic-and-strictly-monadic-functor — def. U is monadic when the comparison functor is an equivalence, strictly monadic when it is an isomorphism.
> 2. def-conservative-functor — def. Reflects isomorphisms.

Exact new text:

> The published def-monadic-and-strictly-monadic-functor and def-conservative-functor live on monads-comonads-and-their-algebras and are prerequisites here; do not list or re-mint them on MA-4.

If declined, the scaffold duplicates immutable published ids and the splice must fail.

### Amendment MA4-2 — define absolute colimits before using the term

Recommendation: approve.

Exact old text:

> 3. def-split-coequalizer
> 4. thm-a-split-coequalizer-is-a-coequalizer-and-is-absolute
> 5. def-absolute-colimit

Exact new text:

> 1. def-absolute-colimit
> 2. def-split-coequalizer
> 3. thm-a-split-coequalizer-is-a-coequalizer-and-is-absolute

If declined, item 4's title and Statement use a technical notion not introduced until the following item.

### Amendment MA4-3 — narrow the canonical-splitting claim

Recommendation: approve.

Exact old text:

> thm-the-canonical-presentation-is-split-in-the-base-but-not-in-the-algebras — Split by eta_TA and eta_A in C, and the splittings do not lift.

Exact new text:

> thm-the-canonical-presentation-is-split-in-the-base-but-not-in-the-algebras — The canonical presentation is split by eta_TA and eta_A in the base, but these canonical splittings need not be algebra homomorphisms. The free-monoid monad supplies an explicit failure; no universal failure is asserted.

If declined, the design reads as though no canonical splitting can ever lift, which is stronger than the source and false for special monads.

### Amendment MA4-4 — expose Beck's reconstruction step

Recommendation: approve.

Exact old text:

> 11. thm-becks-monadicity-theorem — A right adjoint U is monadic iff it creates coequalizers of U-split pairs.

Exact new text:

> Insert lem-created-canonical-presentations-give-a-quasi-inverse-to-the-comparison-functor immediately before thm-becks-monadicity-theorem. It constructs the inverse comparison from created coequalizers of FTA ⇉ FA and proves both comparison composites naturally isomorphic to identities. Beck's theorem then combines this converse with the Eilenberg–Moore strict-creation theorem.

If declined, the longest and most delicate half of Beck's theorem remains hidden in one monolithic proof.

### Amendment MA4-5 — build the missing free-ring route

Recommendation: approve.

Exact old text:

> 16. thm-monoids-and-rings-are-monadic-over-sets.

Exact new text:

> Before thm-monoids-and-rings-are-monadic-over-sets insert lem-free-word-rings-are-unital-rings, thm-the-free-unital-ring-functor-is-left-adjoint-to-the-underlying-set-functor, and lem-the-underlying-set-functor-on-rings-strictly-creates-split-coequalizers. Apply strict Beck to the ring case and the published free-monoid comparison to the monoid case.

If declined, the ring claim silently assumes both a left adjoint and the entire operation-descent argument.

### Amendment MA4-6 — state and decompose the finitary choice cost

Recommendation: approve.

Exact old text:

> thm-a-finitary-monad-on-a-complete-cocomplete-locally-small-category-has-complete-and-cocomplete-algebras — thm. Riehl Thm. 5.6.12.

Exact new text:

> Under dependent choice, a finitary monad on a complete, cocomplete, locally small category has a complete and cocomplete algebra category. Decompose the proof through prop-a-monadic-category-over-a-cocomplete-base-is-cocomplete-iff-it-has-coequalizers and lem-finitary-monad-algebras-have-coequalizers-under-dependent-choice. The latter uses rank-minimal coded witnesses to set-bound each recursively chosen stage before applying DC.

If declined, the Statement suppresses the principle used to choose the recursively dependent sequence, and the proof hides its solution-set construction.

### Amendment MA4-7 — decompose the hard Manes direction

Recommendation: approve.

Exact old text:

> lem-an-ultrafilter-algebra-determines-a-compact-hausdorff-topology — Closed sets are those A with xi(U) in A for every ultrafilter U containing A; the algebra axioms give the Kuratowski closure laws and Hausdorffness.

Exact new text:

> Define def-topology-induced-by-an-ultrafilter-algebra by the alpha-open condition. Prove separately lem-the-open-sets-induced-by-an-ultrafilter-algebra-form-a-topology, lem-closure-in-an-ultrafilter-algebra-topology, and lem-an-ultrafilter-algebra-map-is-the-unique-ultrafilter-limit. Then lem-an-ultrafilter-algebra-determines-a-compact-hausdorff-topology obtains compactness and Hausdorffness under the ultrafilter lemma.

If declined, a source proof that uses two ultrafilter extensions and both algebra laws is compressed into one unauditable paragraph.

### Amendment MA4-8 — move the conservative nonmonadic witness onto the A page

Recommendation: approve.

Exact old text:

> B page: cex-a-conservative-functor-that-is-not-monadic.

Exact new text:

> Place cex-a-conservative-functor-that-is-not-monadic on the A page immediately before fs-every-conservative-right-adjoint-is-monadic. Use torsion-free abelian groups over Set. The B page retains only examples that no A-page proof consumes.

If declined, the false-statement refutation would depend forward on an examples-page item, violating both plan order and the B-page leaf rule.

### Amendment MA4-9 — include the harvested Paré application

Recommendation: approve.

Exact old text:

> No contravariant power-set monadicity item is listed.

Exact new text:

> After crude monadicity insert lem-pullback-direct-image-inverse-image-beck-chevalley-for-sets and thm-the-contravariant-power-set-functor-is-monadic (Riehl Theorem 5.5.9 and Lemma 5.5.10).

If declined, a named theorem in the primary source range is omitted despite all prerequisites being available.

### Amendment MA4-10 — restore the apostrophe in the reader-facing page title

Recommendation: approve when the engine next owns the plan text.

Exact old text:

> Monadicity and Becks Theorem

Exact new text:

> Monadicity and Beck's Theorem

The batch manifest keeps the live spec's title verbatim; declining the future correction leaves a visible possessive typo but does not affect mathematics.

## Exact A-page summary for Step 5

Monads and their Eilenberg–Moore algebras provide the comparison functor attached to a right adjoint, while the preceding development distinguishes equivalences from isomorphisms and defines conservative functors. Coequalizers, creation of colimits, filtered colimits, compactness, Hausdorff separation, filters, and the ultrafilter monad supply the categorical and topological language used below.

Split and U-split coequalizers lead to the ordinary and strict forms of Beck's theorem and to the reflexive criterion. Applications establish monadicity for familiar algebraic categories, the contravariant power-set functor, finitary algebra categories, and compact Hausdorff spaces. The compact Hausdorff result is proved by constructing mutually inverse topological and ultrafilter-algebra structures, with the ultrafilter lemma and dependent-choice costs stated where they enter.

## Web research ledger and convention decisions

- Riehl, Category Theory in Context, Example 4.1.10(vi) and §§5.3–5.6: https://emilyriehl.github.io/files/context.pdf. Supports all modern definitions, ordinary Beck, reflexive Beck, concrete algebra examples, Paré's power-set theorem, finitary algebra completeness/cocompleteness, and compact Hausdorff monadicity.
- Mac Lane, Categories for the Working Mathematician, §§VI.6–VI.9: https://pages.jh.edu/rrynasi1/NewFoundations4Math/Literature/Textbooks/Mac_Lane1998CategoriesForTheWorkingMathematician.2ndEdition.pdf. Supports split coequalizers, the strict form of Beck, algebraic examples, and compact Hausdorff monadicity.
- Mehrle/Johnstone course notes, Lectures 16–17: https://pi.math.cornell.edu/~dmehrle/notes/partiii/cattheory_partiii_notes.pdf. Independently supports both Beck criteria, operation descent, the torsion-free-abelian nonexample, compact Hausdorff monadicity, and contravariant power set.
- Goubault-Larrecq, Manes theorem supplement: https://topology.lmf.cnrs.fr/algebras-of-the-filter-related-monads-i-ultrafilters-and-manes-theorem/. Supplies the direct closure and unique-limit proof of the CompHaus/ultrafilter-algebra isomorphism.
- Adámek–Koubek–Velebil, *A duality between infinitary varieties and algebraic theories*, Definition 4.2 and Example 4.3: https://dml.cz/bitstream/handle/10338.dmlcz/119187/CommentatMathUnivCarolRetro_41-2000-3_10.pdf. Supplies the explicit reflexive coequalizer not preserved by any infinite power functor, including Set(N,-).

Convention disagreements:

- Riehl defines monadic using an equivalence and separates strict monadicity; Mac Lane VI.7 states an isomorphism theorem under his on-the-nose creation convention. The scaffold keeps the ordinary and strict theorems and their creation notions separate.
- Mac Lane's split-fork labels interchange the names of the two parallel arrows relative to Riehl. The scaffold fixes Riehl's equations hf=hg, hs=1, gt=1, ft=sh and never mixes diagrams by letter alone.
- Riehl and Mac Lane work in ordinary foundations where needed choice is implicit. This scaffold states DC in the sequential finitary construction and UL/BPI in the hard Manes direction.
- Goubault-Larrecq invokes Zorn to obtain ultrafilters of ultrafilters. The local Statement assumes only the ultrafilter lemma, the exact extension principle used; it does not import full AC from the library's proof of UL from Zorn.
- The direct Manes source obtains an isomorphism of concrete categories. The page claims monadicity, and records the stronger inverse-on-the-nose construction only in the comparison theorem.

Fetch discipline, source-scouting round (2026-08-21, retried): the initial `node tools/source-fetch-check.mjs --coverage research/frontier-17-batch-9.coverage.json` identified only Jiří Velebil's `cats & monads` as unstamped, and `--stamp` failed before HTTP with sandbox DNS error `EAI_AGAIN`. The author-hosted URL nevertheless opened through the web channel as a complete 83-page `application/pdf`, and Velebil's current CTU publications and downloads pages point to that document. Exact-filename, title, unique-clause, GitHub, GitLab, legacy-host, and indexed-archive searches found no alternate live URL or complete archive capture of the same notes. Following the required re-source order, the coverage now uses the peer-reviewed Adámek–Koubek–Velebil paper at the Czech Digital Mathematics Library. Its DML full-text URL opened as a complete 14-page PDF; Definition 4.2 and Example 4.3 on printed p. 538 give the source's exact local headings, and Example 4.3 gives the same reflexive pair and its failure under every infinite power functor. The source was re-harvested against that range rather than retaining Velebil's headings: the split-coequalizer definition and proposition removed with the old range remain independently harvested from Riehl and Mac Lane. The coverage retains the CTU URL as `original_url`. The sandbox still returns `EAI_AGAIN` before HTTP for the replacement URL, so no stamp was fabricated and a network-capable stage must rerun the stamp command.

## Published dependency closure

Every proposed published dependency was opened from items/ and checked for status, exact Definition/Statement, domain, quantifiers, direction, and statement provenance. All are published. Every external dependency is on a strictly smaller-order A page or is an already published unhomed foundational item. No dependency points to an examples-page item, and no target has provenance.statement ai-generated.

Source-checked AI-altered targets:

- thm-the-comparison-functor-exists-and-is-unique: checked against Riehl Proposition 5.2.13; its on-the-nose induced-monad hypothesis is preserved.
- thm-the-free-group-monad-and-its-algebras-are-groups and thm-the-free-module-monad-and-its-algebras-are-modules: checked against Riehl's examples/exercises; each gives an isomorphism over Set, not merely an equivalence.
- thm-compact-iff-fip, lem-ultrafilter-cluster-points-are-limits, and thm-compactness-via-nets-filters-and-ultrafilters: checked against the direct filter argument in the Manes source; the UL assumption is retained exactly where filter extension is used.
- The source-backed def-ultrafilter-extension-principle is added locally so UL/BPI can be assumed exactly, without citing the published proof of UL from full AC as though its stronger hypothesis were needed.
- def-ring, def-ring-homomorphism, lem-finite-sum-reindexing-and-fubini, def-semigroup-and-monoid, def-topological-space, def-continuous-map-top, def-hausdorff-space, def-homeomorphism-and-open-maps, and def-standard-topologies: their exact elementary clauses were opened and independently confirmed from established mathematics.
- prop-integers-modulo-n-as-a-quotient-group: checked at n=2; the quotient has a nonzero element killed by 2 and therefore supplies the required torsion witness.

No legacy-unclassified item is load-bearing. No published dependency contains an unambiguous falsehood requiring the published-dependency-repair protocol. No external proved_here:false fallback is planned.

## Planned component provenance and Step-5 rationale

### monadicity-and-becks-theorem

- def-absolute-colimit: provenance.statement literature-derived; provenance.proof not-applicable. The definition follows Riehl or Mac Lane with only notation and library-creation conventions normalized.
- def-split-coequalizer: provenance.statement literature-derived; provenance.proof not-applicable. The definition follows Riehl or Mac Lane with only notation and library-creation conventions normalized.
- thm-a-split-coequalizer-is-a-coequalizer-and-is-absolute: provenance.statement literature-derived; provenance.proof ai-altered. The Statement or construction is explicitly present in the harvested sources; the local derivation is reorganized into phase-stratified, dependency-explicit form.
- def-reflexive-pair: provenance.statement literature-derived; provenance.proof not-applicable. The definition follows Riehl or Mac Lane with only notation and library-creation conventions normalized.
- def-u-split-coequalizer-and-creation-of-their-coequalizers: provenance.statement literature-derived; provenance.proof not-applicable. The definition follows Riehl or Mac Lane with only notation and library-creation conventions normalized.
- thm-every-algebra-is-the-coequalizer-of-a-canonical-pair-of-free-algebras: provenance.statement literature-derived; provenance.proof ai-altered. The Statement or construction is explicitly present in the harvested sources; the local derivation is reorganized into phase-stratified, dependency-explicit form.
- thm-the-canonical-presentation-is-split-in-the-base-but-not-in-the-algebras: provenance.statement ai-altered; provenance.proof ai-altered. This is a source-grounded extraction or narrowed repair of a named source proof component, stated separately to expose a load-bearing argument.
- thm-the-forgetful-functor-from-eilenberg-moore-strictly-creates-coequalizers-of-u-t-split-pairs: provenance.statement literature-derived; provenance.proof ai-altered. The Statement or construction is explicitly present in the harvested sources; the local derivation is reorganized into phase-stratified, dependency-explicit form.
- lem-created-canonical-presentations-give-a-quasi-inverse-to-the-comparison-functor: provenance.statement ai-altered; provenance.proof ai-altered. This is a source-grounded extraction or narrowed repair of a named source proof component, stated separately to expose a load-bearing argument.
- thm-becks-monadicity-theorem: provenance.statement ai-altered; provenance.proof ai-altered. The harvested theorem is restated in the library's data-supplied form because global choice is not adopted; the local derivation is dependency-explicit.
- thm-becks-strict-monadicity-theorem: provenance.statement literature-derived; provenance.proof ai-altered. The Statement or construction is explicitly present in the harvested sources; the local derivation is reorganized into phase-stratified, dependency-explicit form.
- thm-crude-monadicity-the-reflexive-tripleability-theorem: provenance.statement ai-altered; provenance.proof ai-altered. The harvested criterion is restated with a supplied coequalizer assignment because existence alone does not select objects over a proper class.
- thm-groups-are-monadic-over-sets: provenance.statement ai-altered; provenance.proof ai-altered. The cited literature supplies the underlying result, while the local Statement materially strengthens, narrows, or combines it; the proof is locally adapted.
- thm-modules-are-monadic-over-sets: provenance.statement ai-altered; provenance.proof ai-altered. The cited literature supplies the underlying result, while the local Statement materially strengthens, narrows, or combines it; the proof is locally adapted.
- lem-free-word-rings-are-unital-rings: provenance.statement ai-altered; provenance.proof ai-generated. Riehl supplies the free-ring formula; the lemma isolates its convolution ring-law verification and the local proof will be generated from finite-sum laws.
- thm-the-free-unital-ring-functor-is-left-adjoint-to-the-underlying-set-functor: provenance.statement literature-derived; provenance.proof ai-altered. The Statement or construction is explicitly present in the harvested sources; the local derivation is reorganized into phase-stratified, dependency-explicit form.
- lem-the-underlying-set-functor-on-rings-strictly-creates-split-coequalizers: provenance.statement ai-altered; provenance.proof ai-altered. This is a source-grounded extraction or narrowed repair of a named source proof component, stated separately to expose a load-bearing argument.
- thm-monoids-and-rings-are-monadic-over-sets: provenance.statement ai-altered; provenance.proof ai-altered. The cited literature supplies the underlying result, while the local Statement materially strengthens, narrows, or combines it; the proof is locally adapted.
- cor-group-actions-are-strictly-monadic-over-sets: provenance.statement ai-altered; provenance.proof ai-altered. The cited literature supplies the underlying result, while the local Statement materially strengthens, narrows, or combines it; the proof is locally adapted.
- lem-pullback-direct-image-inverse-image-beck-chevalley-for-sets: provenance.statement ai-altered; provenance.proof ai-altered. The cited literature supplies the underlying result, while the local Statement materially strengthens, narrows, or combines it; the proof is locally adapted.
- thm-the-contravariant-power-set-functor-is-monadic: provenance.statement literature-derived; provenance.proof ai-altered. The Statement or construction is explicitly present in the harvested sources; the local derivation is reorganized into phase-stratified, dependency-explicit form.
- def-finitary-functor-and-finitary-monad: provenance.statement literature-derived; provenance.proof not-applicable. The definition follows Riehl or Mac Lane with only notation and library-creation conventions normalized.
- def-category-of-models-for-an-algebraic-theory: provenance.statement literature-derived; provenance.proof not-applicable. The definition follows Riehl or Mac Lane with only notation and library-creation conventions normalized.
- prop-a-monadic-category-over-a-cocomplete-base-is-cocomplete-iff-it-has-coequalizers: provenance.statement literature-derived; provenance.proof ai-altered. The Statement or construction is explicitly present in the harvested sources; the local derivation is reorganized into phase-stratified, dependency-explicit form.
- lem-finitary-monad-algebras-have-coequalizers-under-dependent-choice: provenance.statement ai-altered; provenance.proof ai-altered. This is a source-grounded extraction or narrowed repair of a named source proof component, stated separately to expose a load-bearing argument.
- thm-a-finitary-monad-on-a-complete-cocomplete-locally-small-category-has-complete-and-cocomplete-algebras: provenance.statement ai-altered; provenance.proof ai-altered. The cited literature supplies the underlying result, while the local Statement materially strengthens, narrows, or combines it; the proof is locally adapted.
- cor-categories-of-models-for-algebraic-theories-are-complete-and-cocomplete: provenance.statement ai-altered; provenance.proof ai-altered. The cited literature supplies the underlying result, while the local Statement materially strengthens, narrows, or combines it; the proof is locally adapted.
- def-ultrafilter-extension-principle: provenance.statement literature-derived; provenance.proof not-applicable. The definition states exactly the UL/BPI filter-extension principle used in the Manes source, avoiding the stronger AC hypothesis of the published proof of UL.
- lem-a-given-ultrafilter-on-a-compact-hausdorff-space-has-a-unique-limit: provenance.statement literature-derived; provenance.proof ai-altered. The Statement or construction is explicitly present in the harvested sources; the local derivation is reorganized into phase-stratified, dependency-explicit form.
- lem-the-limit-map-of-a-compact-hausdorff-space-is-an-ultrafilter-algebra: provenance.statement literature-derived; provenance.proof ai-altered. The Statement or construction is explicitly present in the harvested sources; the local derivation is reorganized into phase-stratified, dependency-explicit form.
- lem-a-continuous-map-of-compact-hausdorff-spaces-is-an-ultrafilter-algebra-homomorphism: provenance.statement literature-derived; provenance.proof ai-altered. The Statement or construction is explicitly present in the harvested sources; the local derivation is reorganized into phase-stratified, dependency-explicit form.
- def-topology-induced-by-an-ultrafilter-algebra: provenance.statement literature-derived; provenance.proof not-applicable. The open-set condition is the construction stated in Goubault-Larrecq's treatment of Manes' theorem.
- lem-the-open-sets-induced-by-an-ultrafilter-algebra-form-a-topology: provenance.statement literature-derived; provenance.proof ai-altered. The Statement or construction is explicitly present in the harvested sources; the local derivation is reorganized into phase-stratified, dependency-explicit form.
- lem-closure-in-an-ultrafilter-algebra-topology: provenance.statement ai-altered; provenance.proof ai-altered. The cited literature supplies the underlying result, while the local Statement materially strengthens, narrows, or combines it; the proof is locally adapted.
- lem-an-ultrafilter-algebra-map-is-the-unique-ultrafilter-limit: provenance.statement ai-altered; provenance.proof ai-altered. The cited literature supplies the underlying result, while the local Statement materially strengthens, narrows, or combines it; the proof is locally adapted.
- lem-an-ultrafilter-algebra-determines-a-compact-hausdorff-topology: provenance.statement ai-altered; provenance.proof ai-altered. The cited literature supplies the underlying result, while the local Statement materially strengthens, narrows, or combines it; the proof is locally adapted.
- thm-the-compact-hausdorff-and-ultrafilter-algebra-constructions-are-inverse: provenance.statement ai-altered; provenance.proof ai-altered. The cited literature supplies the underlying result, while the local Statement materially strengthens, narrows, or combines it; the proof is locally adapted.
- thm-compact-hausdorff-spaces-are-monadic-over-sets: provenance.statement ai-altered; provenance.proof ai-altered. The cited literature supplies the underlying result, while the local Statement materially strengthens, narrows, or combines it; the proof is locally adapted.
- cor-a-continuous-bijection-of-compact-hausdorff-spaces-is-a-homeomorphism-by-conservativity: provenance.statement ai-altered; provenance.proof ai-altered. The cited literature supplies the underlying result, while the local Statement materially strengthens, narrows, or combines it; the proof is locally adapted.
- cex-a-conservative-functor-that-is-not-monadic: provenance.statement ai-altered; provenance.proof ai-altered. The cited literature supplies the underlying result, while the local Statement materially strengthens, narrows, or combines it; the proof is locally adapted.
- fs-becks-theorem-characterises-strict-monadicity: provenance.statement ai-altered; provenance.proof ai-generated. The false claim is the source-documented equivalence/isomorphism conflation; the tagged-set counterexample is a new directly checkable witness.
- fs-every-conservative-right-adjoint-is-monadic: provenance.statement ai-altered; provenance.proof ai-altered. The false claim is a conventional overstatement identified by the harvested sources, and the refutation adapts a source-backed or published witness.
- fs-a-u-split-pair-is-a-split-pair-in-the-domain: provenance.statement ai-altered; provenance.proof ai-altered. The false claim is a conventional overstatement identified by the harvested sources, and the refutation adapts a source-backed or published witness.
- fs-the-forgetful-functor-from-topological-spaces-is-monadic: provenance.statement ai-altered; provenance.proof ai-altered. The false claim is a conventional overstatement identified by the harvested sources, and the refutation adapts a source-backed or published witness.

### monadicity-and-becks-theorem-examples

- ex-a-split-coequalizer-in-set: provenance.statement ai-generated; provenance.proof ai-generated. This is a new finite, non-load-bearing example with an explicit exhaustive witness.
- ex-the-canonical-presentation-of-a-monoid: provenance.statement ai-generated; provenance.proof ai-generated. This is a new finite, non-load-bearing example with an explicit exhaustive witness.
- ex-the-comparison-functor-for-the-free-group-adjunction: provenance.statement ai-altered; provenance.proof ai-altered. The cited literature supplies the underlying result, while the local Statement materially strengthens, narrows, or combines it; the proof is locally adapted.
- ex-the-kleisli-adjunction-for-the-maybe-monad-is-monadic-but-not-strictly-monadic: provenance.statement ai-altered; provenance.proof ai-altered. The cited literature supplies the underlying result, while the local Statement materially strengthens, narrows, or combines it; the proof is locally adapted.
- cex-a-reflexive-pair-whose-coequalizer-is-not-preserved: provenance.statement literature-derived; provenance.proof ai-altered. The Statement or construction is explicitly present in the harvested sources; the local derivation is reorganized into phase-stratified, dependency-explicit form.
- ex-the-ultrafilter-algebra-structure-on-a-finite-discrete-space: provenance.statement ai-altered; provenance.proof ai-generated. The construction specializes the source-backed Manes correspondence; the finite verification is local and exhaustive.
- ex-beta-of-the-naturals-as-an-ultrafilter-algebra: provenance.statement literature-derived; provenance.proof ai-altered. The Statement or construction is explicitly present in the harvested sources; the local derivation is reorganized into phase-stratified, dependency-explicit form.

Generation frontmatter is required only for ex-a-split-coequalizer-in-set and ex-the-canonical-presentation-of-a-monoid, each with generation.role example. Neither is a dependency target. Their truth-risk checks are exhaustive evaluation of the displayed finite functions and the two-element multiplication table. No other planned Statement or construction is AI-generated.

All literature-derived and AI-altered items will cite the exact supporting URL above in sources.references. Riehl backs the general categorical spine and algebra/finitary items; Mac Lane additionally backs strict Beck; Cornell backs the torsion-free and operation-descent items; Goubault-Larrecq backs the Manes block; the Adámek–Koubek–Velebil paper backs the reflexive nonpreservation counterexample.

## Exact same-batch clauses to preserve at Step 5

- def-split-coequalizer must state all four equations hf=hg, hs=1_z, gt=1_y, and ft=sh.
- def-u-split-coequalizer-and-creation-of-their-coequalizers must keep ordinary creation, reflection of any lifted fork, and strict creation as three distinct clauses.
- thm-the-canonical-presentation-is-split-in-the-base-but-not-in-the-algebras must say need not lift, never do not lift.
- thm-becks-monadicity-theorem concludes equivalence from ordinary creation together with supplied canonical lifts; thm-becks-strict-monadicity-theorem concludes isomorphism from strict creation.
- thm-crude-monadicity-the-reflexive-tripleability-theorem assumes a left adjoint, a supplied coequalizer for every reflexive pair, preservation of those coequalizers, and reflection of isomorphisms.
- the finitary main theorem and its coequalizer lemma explicitly assume DC; completeness itself is choice-free.
- def-ultrafilter-extension-principle must contain the exact sentence: "The ultrafilter extension principle says that every filter on a set is contained in an ultrafilter on that set." All hard Manes items cite that definition rather than importing the published AC proof of UL.
- lem-closure-in-an-ultrafilter-algebra-topology, lem-an-ultrafilter-algebra-map-is-the-unique-ultrafilter-limit, the induced compact-Hausdorff lemma, the inverse-construction theorem, the monadicity theorem, and its conservativity corollary explicitly assume UL/BPI.
- thm-the-compact-hausdorff-and-ultrafilter-algebra-constructions-are-inverse must prove both object directions and both morphism directions; object bijection alone is insufficient.
- cor-a-continuous-bijection-of-compact-hausdorff-spaces-is-a-homeomorphism-by-conservativity will name thm-compactness-under-continuous-maps as the direct topological proof. The reciprocal link cannot be added within this batch's write boundary; Alpha should record whether the owner waives the otherwise two-way cross-reference rule or schedules a separate published-item edit.

## Per-pair richness report

Long-proof decomposition performed:

- Beck's converse is decomposed through lem-created-canonical-presentations-give-a-quasi-inverse-to-the-comparison-functor.
- Ring monadicity is decomposed through the free word-ring law, free-ring adjunction, and strict split-coequalizer creation.
- Paré's power-set application is decomposed through the pullback Beck–Chevalley lemma.
- Finitary completeness/cocompleteness is decomposed through the cocompleteness/coequalizer criterion and the DC sequential weak-coequalizer/GAFT lemma.
- Manes' hard direction is decomposed through the induced open-set family, topology verification, closure formula, and unique-limit lemma.

Corollary pass performed. It added cor-group-actions-are-strictly-monadic-over-sets and cor-categories-of-models-for-algebraic-theories-are-complete-and-cocomplete; it retained the design's conservativity proof of the compact-Hausdorff homeomorphism theorem. The example pass added the maybe-monad witness separating monadic from strictly monadic. No further cheap consequence survived the nonduplication and B-leaf checks.

The A page has 44 items, so no split is proposed. No item was pruned to stay below the ceiling.

## Per-page item list

### monadicity-and-becks-theorem — 44 items

1. def-absolute-colimit — definition — Absolute colimits
2. def-split-coequalizer — definition — Split coequalizer diagrams
3. thm-a-split-coequalizer-is-a-coequalizer-and-is-absolute — theorem — Every split coequalizer is a coequalizer and an absolute colimit
4. def-reflexive-pair — definition — Reflexive parallel pairs and reflexive coequalizers
5. def-u-split-coequalizer-and-creation-of-their-coequalizers — definition — $U$-split pairs and ordinary or strict creation of their coequalizers
6. thm-every-algebra-is-the-coequalizer-of-a-canonical-pair-of-free-algebras — theorem — Every algebra is the coequalizer of its canonical pair of free algebras
7. thm-the-canonical-presentation-is-split-in-the-base-but-not-in-the-algebras — theorem — The canonical algebra presentation is split in the base, but its canonical splittings need not be algebra homomorphisms
8. thm-the-forgetful-functor-from-eilenberg-moore-strictly-creates-coequalizers-of-u-t-split-pairs — theorem — The Eilenberg–Moore forgetful functor strictly creates coequalizers of $U^T$-split pairs
9. lem-created-canonical-presentations-give-a-quasi-inverse-to-the-comparison-functor — lemma — Supplied created canonical presentations give a quasi-inverse to the comparison functor
10. thm-becks-monadicity-theorem — theorem — Beck's monadicity theorem in data-supplied form
11. thm-becks-strict-monadicity-theorem — theorem — Strict Beck monadicity theorem
12. thm-crude-monadicity-the-reflexive-tripleability-theorem — theorem — Data-supplied crude monadicity theorem for reflexive coequalizers
13. thm-groups-are-monadic-over-sets — theorem — Groups are strictly monadic over sets
14. thm-modules-are-monadic-over-sets — theorem — Modules over a fixed unital ring are strictly monadic over sets
15. lem-free-word-rings-are-unital-rings — lemma — Integer-valued finite formal sums of words form free word rings
16. thm-the-free-unital-ring-functor-is-left-adjoint-to-the-underlying-set-functor — theorem — The free unital ring functor is left adjoint to the underlying-set functor
17. lem-the-underlying-set-functor-on-rings-strictly-creates-split-coequalizers — lemma — The underlying-set functor on unital rings strictly creates split coequalizers
18. thm-monoids-and-rings-are-monadic-over-sets — theorem — Monoids and unital rings are strictly monadic over sets
19. cor-group-actions-are-strictly-monadic-over-sets — corollary — $G$-sets are strictly monadic over sets
20. lem-pullback-direct-image-inverse-image-beck-chevalley-for-sets — lemma — Direct and inverse image satisfy Beck–Chevalley for pullback squares of sets
21. thm-the-contravariant-power-set-functor-is-monadic — theorem — The contravariant power-set functor is monadic
22. def-finitary-functor-and-finitary-monad — definition — Finitary functors and finitary monads
23. def-category-of-models-for-an-algebraic-theory — definition — Categories of models for algebraic theories
24. prop-a-monadic-category-over-a-cocomplete-base-is-cocomplete-iff-it-has-coequalizers — proposition — Over a cocomplete base, a monadic category is cocomplete exactly when it has coequalizers
25. lem-finitary-monad-algebras-have-coequalizers-under-dependent-choice — lemma — Under dependent choice, algebras for a finitary monad on a complete cocomplete locally small category have coequalizers
26. thm-a-finitary-monad-on-a-complete-cocomplete-locally-small-category-has-complete-and-cocomplete-algebras — theorem — Under dependent choice, a finitary monad on a complete cocomplete locally small category has complete and cocomplete algebras
27. cor-categories-of-models-for-algebraic-theories-are-complete-and-cocomplete — corollary — Under dependent choice, categories of models for algebraic theories are complete and cocomplete
28. def-ultrafilter-extension-principle — definition — The ultrafilter extension principle (UL/BPI)
29. lem-a-given-ultrafilter-on-a-compact-hausdorff-space-has-a-unique-limit — lemma — A given ultrafilter on a compact Hausdorff space has a unique limit
30. lem-the-limit-map-of-a-compact-hausdorff-space-is-an-ultrafilter-algebra — lemma — The ultrafilter-limit map of a compact Hausdorff space is an algebra for the ultrafilter monad
31. lem-a-continuous-map-of-compact-hausdorff-spaces-is-an-ultrafilter-algebra-homomorphism — lemma — A continuous map of compact Hausdorff spaces is an ultrafilter-algebra homomorphism
32. def-topology-induced-by-an-ultrafilter-algebra — definition — The open-set family induced by an ultrafilter algebra
33. lem-the-open-sets-induced-by-an-ultrafilter-algebra-form-a-topology — lemma — The open-set family induced by an ultrafilter algebra is a topology
34. lem-closure-in-an-ultrafilter-algebra-topology — lemma — Under the ultrafilter lemma, closure in an ultrafilter-algebra topology is the image of ultrafilters containing the set
35. lem-an-ultrafilter-algebra-map-is-the-unique-ultrafilter-limit — lemma — Under the ultrafilter lemma, an ultrafilter algebra maps each ultrafilter to its unique limit
36. lem-an-ultrafilter-algebra-determines-a-compact-hausdorff-topology — lemma — Under the ultrafilter lemma, every ultrafilter algebra determines a compact Hausdorff topology
37. thm-the-compact-hausdorff-and-ultrafilter-algebra-constructions-are-inverse — theorem — Under the ultrafilter lemma, compact Hausdorff spaces and ultrafilter algebras are recovered by the two limit constructions
38. thm-compact-hausdorff-spaces-are-monadic-over-sets — theorem — Under the ultrafilter lemma, compact Hausdorff spaces are monadic over sets
39. cor-a-continuous-bijection-of-compact-hausdorff-spaces-is-a-homeomorphism-by-conservativity — corollary — A continuous bijection of compact Hausdorff spaces is a homeomorphism, by conservativity
40. cex-a-conservative-functor-that-is-not-monadic — counterexample — Torsion-free abelian groups give a conservative right adjoint that is not monadic
41. fs-becks-theorem-characterises-strict-monadicity — false-statement — FALSE: ordinary Beck creation characterizes strict monadicity
42. fs-every-conservative-right-adjoint-is-monadic — false-statement — FALSE: every conservative right adjoint is monadic
43. fs-a-u-split-pair-is-a-split-pair-in-the-domain — false-statement — FALSE: every $U$-split pair is split in the domain
44. fs-the-forgetful-functor-from-topological-spaces-is-monadic — false-statement — FALSE: the underlying-set functor from topological spaces is monadic

### monadicity-and-becks-theorem-examples — 7 items

1. ex-a-split-coequalizer-in-set — example — A split coequalizer on a two-element set
2. ex-the-canonical-presentation-of-a-monoid — example — The canonical free-algebra presentation of a two-element idempotent monoid
3. ex-the-comparison-functor-for-the-free-group-adjunction — example — The comparison functor for the free-group adjunction
4. ex-the-kleisli-adjunction-for-the-maybe-monad-is-monadic-but-not-strictly-monadic — example — The Kleisli adjunction for the maybe monad is monadic but not strictly monadic
5. cex-a-reflexive-pair-whose-coequalizer-is-not-preserved — counterexample — A reflexive coequalizer of sets not preserved by $\mathbf{Set}(\mathbb N,-)$
6. ex-the-ultrafilter-algebra-structure-on-a-finite-discrete-space — example — The ultrafilter algebra on a finite discrete space
7. ex-beta-of-the-naturals-as-an-ultrafilter-algebra — example — $\beta\mathbb N$ as the free ultrafilter algebra

## Findings for Step-3 Alpha

1. Approve the mathematical correction from blanket non-lifting to need-not-lift for the canonical algebra splittings. Declining leaves an overstrong source misstatement.
2. Approve explicit DC in the finitary theorem and its decomposition. Declining hides a real recursively dependent selection and the set-bounding needed before DC applies.
3. Approve UL/BPI, not full AC, as the hard Manes hypothesis. Declining either overpays foundationally or leaves the filter extensions unlicensed.
4. Approve moving cex-a-conservative-functor-that-is-not-monadic to the A page. Declining forces a forbidden dependency on a later B-page item.
5. Approve the ordinary/strict Beck split and the reconstruction lemma. Declining conflates equivalence with isomorphism or leaves the converse proof monolithic.
6. Approve the local free-ring and operation-descent prerequisites. Declining makes ring monadicity rest on results the library has not established.
7. Approve the Paré contravariant-power-set theorem and its Beck–Chevalley lemma. Declining drops a named primary-source theorem despite closed prerequisites.
8. Approve reuse of the two published definitions from the predecessor page. Declining creates immutable-id collisions.
9. Approve the future reader-facing apostrophe correction in the page title while leaving this batch manifest aligned to the live spec. Declining leaves only a typography defect.
10. Decide the reciprocal-cross-reference policy for the conservativity proof of the compact-to-Hausdorff homeomorphism theorem. The new item can link to the published direct proof, but this batch has no authority to edit that true published theorem back. Declining both a waiver and a separate edit conflicts with the owner rule for second proofs.

## Forward references and cross-batch dependencies

Forward references kept: none. All dependencies are published earlier A-page items or earlier same-page items.

Cross-batch dependencies: none. This batch uses only published material and its own earlier items. No other frontier-17 batch needs a new id from this batch according to the live spec.

## New-id and reuse report

An exact fixed-string search across items/ and research/plan-spec.json was run for every proposed id before writing the manifest: 51 ids searched, zero collisions. Semantic searches for split coequalizers, canonical algebra presentations, Beck monadicity, finitary monads, ultrafilter algebras, conservative nonmonadic functors, and reflexive nonpreservation found the published predecessor definitions and no duplicate statement under another id. The existing def-monadic-and-strictly-monadic-functor and def-conservative-functor are reused.

## Proof-obligation and boundary summary

The version-1 proof-contract file is the durable step-by-step map. In addition:

- every iff has separately mapped forward and reverse directions;
- split and reflexive diagrams retain all type-compatible equations;
- empty categories, empty sets, the zero/one stages, singleton and finite discrete spaces, the empty generating set, the zero ring, and principal ultrafilters receive explicit dispositions;
- every selection is labeled as a single existential choice, finite choice, DC, or UL/BPI; no class-indexed choice is hidden;
- the Manes closure and uniqueness proofs each record the exact ultrafilter-of-ultrafilters extension;
- the reflexive nonpreservation witness records the uniform-bound invariant for every finite zigzag;
- no registered finite-smoke implementation matches these categorical claims, so finite_smoke arrays are empty and no mechanical evidence is claimed.

## Final Step-2 checks and confidence

Completed before this report:

- coverage-checklist: 1 page, 108 harvested results, 0 errors, 0 warnings after the DML re-harvest.
- content-policy --manifest-only: 51 scoped items, 0 errors, 0 warnings.
- dependency preflight: no unresolved id, no internal forward edge, no B-page dependency target, no nonpublished target, no planned-later target, and no AI-generated dependency target.
- custom contract structural audit: 43 proof-bearing ids, 43 contracts, 118 exact citation clauses, 191 mapped planned steps, all eight boundary dispositions per contract, no undeclared source, no unsupported external quote, and no invalid source section.
- proof-contract --strict was attempted, but correctly reported item-missing for all 43 future items because Step 5 has not authored them. This is not claimed as a passing gate; the same contracts must be synchronized and rerun after authoring.
- prosecheck --warnings: 0 errors and 14 count warnings. The warnings are the required item-count report and source-owned numbered headings in coverage.json, not page summary prose.
- scoped git diff --check: clean.
- source-fetch-check --stamp: 4/5 sources are stamped; the DML replacement is browser-verified as a complete 14-page PDF, but the shell fetch fails with sandbox `EAI_AGAIN` before HTTP. The unstamped replacement is an open mechanical blocker, not a source-content doubt.

Confidence is high in the ordinary/strict Beck distinction, the canonical-presentation equations, the torsion-free counterexample, the reflexive nonpreservation witness, and the choice accounting in the Manes block. Confidence is moderate-high in the finitary sequential construction because the source proof is long; the contract therefore exposes its rank-bounding, DC, filtered-colimit, algebra-law, solution-set, and GAFT obligations separately. I did not run a spliced validate-plan or authoritative depsource gate, because Step 4 owns splicing. I did not obtain fetch stamps, run any Step-6 reader or Step-7 judge, author item files, edit the live plan, or verify source material outside the locators in coverage.json.

## Continuity checkpoint

- Current substage: source-scout re-harvest complete; the Step 2 scaffold remains blocked only on the mechanically unavailable DML fetch stamp.
- Owned artifacts: research/frontier-17-batch-9.pages.json, research/frontier-17-batch-9.coverage.json, research/frontier-17-batch-9.proof-contracts.json, and research/frontier-17-batch-9.notes.md.
- Completed checks: manifest JSON parse; 44/7 item count; 51 unique ids; 43 proof contracts; dependency/order/B-leaf/provenance preflight; coverage checklist; manifest content policy; prosecheck; external-quote audit; scoped whitespace check.
- Open mathematical constraints for Step 5: preserve ordinary versus strict creation, the need-not-lift wording, DC and rank-bounding in the finitary construction, UL/BPI in both Manes extension steps, all four inverse-construction clauses, and the uniform-bound invariant in the reflexive counterexample.
- Open mechanical constraint: source-fetch-check reports 4/5 sources stamped; the live, complete DML paper remains unstamped because this sandbox cannot resolve external hosts, and no stamp was fabricated. The former Velebil URL is retained as `original_url`, and the replacement's Definition 4.2–Example 4.3 range has been re-harvested faithfully.
- Exact next action: the engine reruns `node tools/source-fetch-check.mjs --coverage research/frontier-17-batch-9.coverage.json --stamp` in a network-capable stage; after Step 4, Beta-9 authors from this manifest and synchronizes every contract to final step numbers and exact clauses.

## Step-3 fix pass

- B9-1 — already correct. In `research/frontier-17-batch-9.pages.json`, `thm-the-canonical-presentation-is-split-in-the-base-but-not-in-the-algebras` says that the canonical splittings need not be algebra homomorphisms, and its strategy explicitly says that no failure for every monad is asserted. Amendment MA4-3 above records the exact design replacement.
- B9-2 — applied. In the Mehrle coverage record for Lectures 16–17, added Example 5.20(e), included as `fs-the-forgetful-functor-from-topological-spaces-is-monadic`, and Exercise 5.22, inlined into `lem-pullback-direct-image-inverse-image-beck-chevalley-for-sets`. The declared continuous range now dispositions both named entries identified by Alpha.

## Step-5 authoring

### Authored artifacts and scaffold ledger

Authored all items in both approved page objects, together with `library/category-theory/monadicity-and-becks-theorem.md` and its examples companion. The A-page summary has exactly two prose paragraphs and the B page has no authored body. No item was dropped, renamed, merged, or moved; coverage dispositions therefore remain unchanged and truthful. No item title or `deps` list differs from the spliced scaffold, and no Statement was narrowed beyond the approved strategy. The definition of the induced ultrafilter-algebra topology adds `justified_by: [lem-the-open-sets-induced-by-an-ultrafilter-algebra-form-a-topology]` to discharge its topology obligation without creating a dependency cycle. The page summary replaces the scaffold-note phrase "preceding development" with direct links to the named prerequisite definitions, avoiding an unsupported positional claim.

The canonical-splitting theorem retains "need not" rather than universal non-lifting. The finitary theorem and its coequalizer lemma state DC and isolate rank-minimal set-bounding before the recursive selection. The Manes block states UL/BPI at both ultrafilter-extension steps and proves both object directions and both morphism directions. The reflexive nonpreservation example retains the finite-zigzag uniform-bound invariant. No external fallback and no published-dependency repair were used.

### Per-item results and component provenance

#### monadicity-and-becks-theorem

- `def-absolute-colimit` - precheck n/a; provenance statement `literature-derived`, proof `not-applicable`; source/edit: E. Riehl, Category Theory in Context, 2nd ed., Exercise 3.4.vi(iii) and Lemma 5.4.6; definition normalized from the cited treatment; no proof component.
- `def-split-coequalizer` - precheck n/a; provenance statement `literature-derived`, proof `not-applicable`; source/edit: E. Riehl, Category Theory in Context, 2nd ed., Definition 5.4.4; definition normalized from the cited treatment; no proof component.
- `thm-a-split-coequalizer-is-a-coequalizer-and-is-absolute` - precheck pass; provenance statement `literature-derived`, proof `ai-altered`; source/edit: E. Riehl, Category Theory in Context, 2nd ed., Lemma 5.4.6; source statement retained; proof rewritten locally into dependency-explicit phases.
- `def-reflexive-pair` - precheck n/a; provenance statement `literature-derived`, proof `not-applicable`; source/edit: E. Riehl, Category Theory in Context, 2nd ed., Proposition 5.5.8; definition normalized from the cited treatment; no proof component.
- `def-u-split-coequalizer-and-creation-of-their-coequalizers` - precheck n/a; provenance statement `literature-derived`, proof `not-applicable`; source/edit: E. Riehl, Category Theory in Context, 2nd ed., Definition 5.4.8; definition normalized from the cited treatment; no proof component.
- `thm-every-algebra-is-the-coequalizer-of-a-canonical-pair-of-free-algebras` - precheck pass; provenance statement `literature-derived`, proof `ai-altered`; source/edit: E. Riehl, Category Theory in Context, 2nd ed., Proposition 5.4.2; source statement retained; proof rewritten locally into dependency-explicit phases.
- `thm-the-canonical-presentation-is-split-in-the-base-but-not-in-the-algebras` - precheck pass; provenance statement `ai-altered`, proof `ai-altered`; source/edit: E. Riehl, Category Theory in Context, 2nd ed., Example 5.4.7; source-backed claim extracted or narrowed for this dependency role; proof adapted locally.
- `thm-the-forgetful-functor-from-eilenberg-moore-strictly-creates-coequalizers-of-u-t-split-pairs` - precheck pass; provenance statement `literature-derived`, proof `ai-altered`; source/edit: E. Riehl, Category Theory in Context, 2nd ed., Proposition 5.4.10; source statement retained; proof rewritten locally into dependency-explicit phases.
- `lem-created-canonical-presentations-give-a-quasi-inverse-to-the-comparison-functor` - precheck pass; provenance statement `ai-altered`, proof `ai-altered`; source/edit: E. Riehl, Category Theory in Context, 2nd ed., proof of Theorem 5.5.1; source-backed claim extracted or narrowed for this dependency role; proof adapted locally.
- `thm-becks-monadicity-theorem` - precheck pass; provenance statement `ai-altered`, proof `ai-altered`; source/edit: E. Riehl, Category Theory in Context, 2nd ed., Theorem 5.5.1; the converse is narrowed to supplied created canonical lifts under the owner's no-global-choice convention.
- `thm-becks-strict-monadicity-theorem` - precheck pass; provenance statement `literature-derived`, proof `ai-altered`; source/edit: S. Mac Lane, Categories for the Working Mathematician, 2nd ed., Theorem VI.7.1; source statement retained; proof rewritten locally into dependency-explicit phases.
- `thm-crude-monadicity-the-reflexive-tripleability-theorem` - precheck pass; provenance statement `ai-altered`, proof `ai-altered`; source/edit: E. Riehl, Category Theory in Context, 2nd ed., Proposition 5.5.8; the coequalizer assignment is made supplied data rather than an unlicensed proper-class choice.
- `thm-groups-are-monadic-over-sets` - precheck pass; provenance statement `ai-altered`, proof `ai-altered`; source/edit: E. Riehl, Category Theory in Context, 2nd ed., Example 5.1.4(iv) and Corollary 5.5.3(i); statement materially strengthened, narrowed, or combined from the cited result; proof adapted locally.
- `thm-modules-are-monadic-over-sets` - precheck pass; provenance statement `ai-altered`, proof `ai-altered`; source/edit: E. Riehl, Category Theory in Context, 2nd ed., Example 5.1.4(iii) and Corollary 5.5.3(ii); statement materially strengthened, narrowed, or combined from the cited result; proof adapted locally.
- `lem-free-word-rings-are-unital-rings` - precheck pass; provenance statement `ai-altered`, proof `ai-generated`; source/edit: E. Riehl, Category Theory in Context, 2nd ed., Example 4.1.10(vi) and Corollary 5.5.3; source-backed construction retained; local verification generated from explicit algebra or finite checks.
- `thm-the-free-unital-ring-functor-is-left-adjoint-to-the-underlying-set-functor` - precheck pass; provenance statement `literature-derived`, proof `ai-altered`; source/edit: E. Riehl, Category Theory in Context, 2nd ed., Example 4.1.10(vi) and Corollary 5.5.3; source statement retained; proof rewritten locally into dependency-explicit phases.
- `lem-the-underlying-set-functor-on-rings-strictly-creates-split-coequalizers` - precheck pass; provenance statement `ai-altered`, proof `ai-altered`; source/edit: D. Mehrle, Category Theory Part III, Example 5.20(b); source-backed claim extracted or narrowed for this dependency role; proof adapted locally.
- `thm-monoids-and-rings-are-monadic-over-sets` - precheck pass; provenance statement `ai-altered`, proof `ai-altered`; source/edit: E. Riehl, Category Theory in Context, 2nd ed., Corollary 5.5.3(i); statement materially strengthened, narrowed, or combined from the cited result; proof adapted locally.
- `cor-group-actions-are-strictly-monadic-over-sets` - precheck pass; provenance statement `ai-altered`, proof `ai-altered`; source/edit: E. Riehl, Category Theory in Context, 2nd ed., Corollary 5.5.3(ii) and Exercise 5.5.iv; statement materially strengthened, narrowed, or combined from the cited result; proof adapted locally.
- `lem-pullback-direct-image-inverse-image-beck-chevalley-for-sets` - precheck pass; provenance statement `ai-altered`, proof `ai-altered`; source/edit: E. Riehl, Category Theory in Context, 2nd ed., Lemma 5.5.10, and D. Mehrle, Exercise 5.22; statement materially strengthened, narrowed, or combined from the cited result; proof adapted locally.
- `thm-the-contravariant-power-set-functor-is-monadic` - precheck pass; provenance statement `literature-derived`, proof `ai-altered`; source/edit: E. Riehl, Category Theory in Context, 2nd ed., Theorem 5.5.9; source statement retained; proof rewritten locally into dependency-explicit phases.
- `def-finitary-functor-and-finitary-monad` - precheck n/a; provenance statement `literature-derived`, proof `not-applicable`; source/edit: E. Riehl, Category Theory in Context, 2nd ed., Definition 5.5.4; definition normalized from the cited treatment; no proof component.
- `def-category-of-models-for-an-algebraic-theory` - precheck n/a; provenance statement `literature-derived`, proof `not-applicable`; source/edit: E. Riehl, Category Theory in Context, 2nd ed., Definition 5.5.5; definition normalized from the cited treatment; no proof component.
- `prop-a-monadic-category-over-a-cocomplete-base-is-cocomplete-iff-it-has-coequalizers` - precheck pass; provenance statement `literature-derived`, proof `ai-altered`; source/edit: E. Riehl, Category Theory in Context, 2nd ed., Proposition 5.6.11; source statement retained; proof rewritten locally into dependency-explicit phases.
- `lem-finitary-monad-algebras-have-coequalizers-under-dependent-choice` - precheck pass; provenance statement `ai-altered`, proof `ai-altered`; source/edit: E. Riehl, Category Theory in Context, 2nd ed., proof of Theorem 5.6.12; source-backed claim extracted or narrowed for this dependency role; proof adapted locally.
- `thm-a-finitary-monad-on-a-complete-cocomplete-locally-small-category-has-complete-and-cocomplete-algebras` - precheck pass; provenance statement `ai-altered`, proof `ai-altered`; source/edit: E. Riehl, Category Theory in Context, 2nd ed., Theorem 5.6.12; statement materially strengthened, narrowed, or combined from the cited result; proof adapted locally.
- `cor-categories-of-models-for-algebraic-theories-are-complete-and-cocomplete` - precheck pass; provenance statement `ai-altered`, proof `ai-altered`; source/edit: E. Riehl, Category Theory in Context, 2nd ed., Corollary 5.6.14; statement materially strengthened, narrowed, or combined from the cited result; proof adapted locally.
- `def-ultrafilter-extension-principle` - precheck n/a; provenance statement `literature-derived`, proof `not-applicable`; source/edit: J. Goubault-Larrecq, Algebras of filter-related monads: I. Ultrafilters and Manes' theorem; definition normalized from the cited treatment; no proof component.
- `lem-a-given-ultrafilter-on-a-compact-hausdorff-space-has-a-unique-limit` - precheck pass; provenance statement `literature-derived`, proof `ai-altered`; source/edit: J. Goubault-Larrecq, Algebras of filter-related monads: I. Ultrafilters and Manes' theorem; source statement retained; proof rewritten locally into dependency-explicit phases.
- `lem-the-limit-map-of-a-compact-hausdorff-space-is-an-ultrafilter-algebra` - precheck pass; provenance statement `literature-derived`, proof `ai-altered`; source/edit: J. Goubault-Larrecq, Algebras of filter-related monads: I. Ultrafilters and Manes' theorem; source statement retained; proof rewritten locally into dependency-explicit phases.
- `lem-a-continuous-map-of-compact-hausdorff-spaces-is-an-ultrafilter-algebra-homomorphism` - precheck pass; provenance statement `literature-derived`, proof `ai-altered`; source/edit: J. Goubault-Larrecq, Algebras of filter-related monads: I. Ultrafilters and Manes' theorem; source statement retained; proof rewritten locally into dependency-explicit phases.
- `def-topology-induced-by-an-ultrafilter-algebra` - precheck n/a; provenance statement `literature-derived`, proof `not-applicable`; source/edit: J. Goubault-Larrecq, Algebras of filter-related monads: I. Ultrafilters and Manes' theorem; definition normalized from the cited treatment; no proof component.
- `lem-the-open-sets-induced-by-an-ultrafilter-algebra-form-a-topology` - precheck pass; provenance statement `literature-derived`, proof `ai-altered`; source/edit: J. Goubault-Larrecq, Algebras of filter-related monads: I. Ultrafilters and Manes' theorem; source statement retained; proof rewritten locally into dependency-explicit phases.
- `lem-closure-in-an-ultrafilter-algebra-topology` - precheck pass; provenance statement `ai-altered`, proof `ai-altered`; source/edit: J. Goubault-Larrecq, Algebras of filter-related monads: I. Ultrafilters and Manes' theorem, Lemma A; statement materially strengthened, narrowed, or combined from the cited result; proof adapted locally.
- `lem-an-ultrafilter-algebra-map-is-the-unique-ultrafilter-limit` - precheck pass; provenance statement `ai-altered`, proof `ai-altered`; source/edit: J. Goubault-Larrecq, Algebras of filter-related monads: I. Ultrafilters and Manes' theorem, Lemmas B and C; statement materially strengthened, narrowed, or combined from the cited result; proof adapted locally.
- `lem-an-ultrafilter-algebra-determines-a-compact-hausdorff-topology` - precheck pass; provenance statement `ai-altered`, proof `ai-altered`; source/edit: J. Goubault-Larrecq, Algebras of filter-related monads: I. Ultrafilters and Manes' theorem; statement materially strengthened, narrowed, or combined from the cited result; proof adapted locally.
- `thm-the-compact-hausdorff-and-ultrafilter-algebra-constructions-are-inverse` - precheck pass; provenance statement `ai-altered`, proof `ai-altered`; source/edit: J. Goubault-Larrecq, Algebras of filter-related monads: I. Ultrafilters and Manes' theorem; statement materially strengthened, narrowed, or combined from the cited result; proof adapted locally.
- `thm-compact-hausdorff-spaces-are-monadic-over-sets` - precheck pass; provenance statement `ai-altered`, proof `ai-altered`; source/edit: E. Riehl, Category Theory in Context, 2nd ed., Corollary 5.5.6; statement materially strengthened, narrowed, or combined from the cited result; proof adapted locally.
- `cor-a-continuous-bijection-of-compact-hausdorff-spaces-is-a-homeomorphism-by-conservativity` - precheck pass; provenance statement `ai-altered`, proof `ai-altered`; source/edit: E. Riehl, Category Theory in Context, 2nd ed., Corollary 5.6.2; statement materially strengthened, narrowed, or combined from the cited result; proof adapted locally.
- `cex-a-conservative-functor-that-is-not-monadic` - precheck pass; provenance statement `ai-altered`, proof `ai-altered`; source/edit: D. Mehrle, Category Theory Part III, Example 5.20(d); statement materially strengthened, narrowed, or combined from the cited result; proof adapted locally.
- `fs-becks-theorem-characterises-strict-monadicity` - precheck pass; provenance statement `ai-altered`, proof `ai-generated`; source/edit: E. Riehl, Category Theory in Context, 2nd ed., Definition 5.3.1 and Theorem 5.5.1; source-backed construction retained; local verification generated from explicit algebra or finite checks.
- `fs-every-conservative-right-adjoint-is-monadic` - precheck pass; provenance statement `ai-altered`, proof `ai-altered`; source/edit: D. Mehrle, Category Theory Part III, Example 5.20(d); source-backed claim extracted or narrowed for this dependency role; proof adapted locally.
- `fs-a-u-split-pair-is-a-split-pair-in-the-domain` - precheck pass; provenance statement `ai-altered`, proof `ai-altered`; source/edit: E. Riehl, Category Theory in Context, 2nd ed., Example 5.4.7; source-backed claim extracted or narrowed for this dependency role; proof adapted locally.
- `fs-the-forgetful-functor-from-topological-spaces-is-monadic` - precheck pass; provenance statement `ai-altered`, proof `ai-altered`; source/edit: D. Mehrle, Category Theory Part III, Example 5.20(e); source-backed claim extracted or narrowed for this dependency role; proof adapted locally.

#### monadicity-and-becks-theorem-examples

- `ex-a-split-coequalizer-in-set` - precheck pass; provenance statement `ai-generated`, proof `ai-generated`; source/edit: local finite construction; new non-load-bearing finite example; construction and verification exhaustively checked.
- `ex-the-canonical-presentation-of-a-monoid` - precheck pass; provenance statement `ai-generated`, proof `ai-generated`; source/edit: local finite construction; new non-load-bearing finite example; construction and verification exhaustively checked.
- `ex-the-comparison-functor-for-the-free-group-adjunction` - precheck pass; provenance statement `ai-altered`, proof `ai-altered`; source/edit: E. Riehl, Category Theory in Context, 2nd ed., Example 5.1.4(iv) and Section 5.3; statement materially strengthened, narrowed, or combined from the cited result; proof adapted locally.
- `ex-the-kleisli-adjunction-for-the-maybe-monad-is-monadic-but-not-strictly-monadic` - precheck pass; provenance statement `ai-altered`, proof `ai-altered`; source/edit: E. Riehl, Category Theory in Context, 2nd ed., Examples 5.1.4(i), 5.2.11(i), and 5.3.2; statement materially strengthened, narrowed, or combined from the cited result; proof adapted locally.
- `cex-a-reflexive-pair-whose-coequalizer-is-not-preserved` - precheck pass; provenance statement `literature-derived`, proof `ai-altered`; source/edit: J. Adámek, V. Koubek, and J. Velebil, A duality between infinitary varieties and algebraic theories, Definition 4.2 and Example 4.3; source statement retained; proof rewritten locally into dependency-explicit phases.
- `ex-the-ultrafilter-algebra-structure-on-a-finite-discrete-space` - precheck pass; provenance statement `ai-altered`, proof `ai-generated`; source/edit: J. Goubault-Larrecq, Algebras of filter-related monads: I. Ultrafilters and Manes' theorem; source-backed construction retained; local verification generated from explicit algebra or finite checks.
- `ex-beta-of-the-naturals-as-an-ultrafilter-algebra` - precheck pass; provenance statement `literature-derived`, proof `ai-altered`; source/edit: J. Goubault-Larrecq, Algebras of filter-related monads: I. Ultrafilters and Manes' theorem; source statement retained; proof rewritten locally into dependency-explicit phases.

The two AI-generated constructions, `ex-a-split-coequalizer-in-set` and `ex-the-canonical-presentation-of-a-monoid`, were counterexample-searched over their full displayed finite functions, multiplication table, empty-word cases, and universal-property equations; no failure was found. They are non-load-bearing and no item depends on them. The AI-generated proof of `fs-becks-theorem-characterises-strict-monadicity` uses an explicit tagged-set category; its forward implication is separately confirmed and its reverse implication is refuted by the noninjective comparison object map.

### Gate record

- Reflow: all owned files unchanged.
- Precheck: all proof-bearing items passed; definitions correctly record `n/a`.
- `validate-plan research/plan-spec.json`: pass.
- `content-policy research/frontier-17-batch-9.pages.json`: 51 scoped items, no errors or warnings.
- Proof contract strict: 43 contracts, 135 exact citations, 192 mapped numbered steps, no errors or warnings.
- Boundary audit: 344 dispositions, no repeated template cluster and no contradicted disposition.
- Citation fidelity: every quote found and no widening candidate.
- Coverage checklist: 1 page, 88 harvested source results, no errors or warnings.
- Source fetch check: 4/4 sources fetch-verified; the earlier DML stamp blocker is closed in the current coverage artifact.
- Prosecheck: 53 authored content/page files, no errors or warnings.
- Rendercheck: 53 authored content/page files, valid YAML, KaTeX, delimiters, and wikilink placement.
- Forward-reference and external-dependency checks: pass. Citecheck exits zero; its corpus-wide warnings name no batch-9 item. Depsource exits zero with no unresolved dependency.
- Finite smoke: zero registered checks match these categorical claims; the passing command is not counted as mathematical evidence.
- Risk report completed without requiring Step-6 reviews; high and critical items remain routed for Alpha's independent refuter as designed.
- The global depcheck command is not claimed as passing: it currently exits nonzero only for `items/rem-sine-period-arc-length-integrand-is-nonelementary.md`, an unrelated published `proved_here: false` item whose `verification.sources_checked` is unset. The depcheck log contains no batch-9 finding.

### Escalations and confidence

No mathematical or scaffold blocker remains. The one-way Remark from the new compact-Hausdorff homeomorphism corollary names the existing direct proof `thm-compactness-under-continuous-maps`; editing that true published theorem to add a reciprocal link remains outside this batch's write boundary and is left for Alpha's policy disposition. No other boundary in the authoring brief was approached.

Confidence is high in the ordinary/strict Beck separation, the canonical presentation and strict-creation equations, the torsion-free and topological nonmonadic counterexamples, the uniform-bound nonpreservation witness, and the two UL/BPI uses in the Manes construction. Confidence is moderate-high in the finitary sequential construction because it condenses Riehl's long stage diagrams; the final contract exposes the zero stage, DC selection, filtered colimit, algebra laws, solution set, pointwise completeness, and GAFT step separately. I rechecked Riehl's Theorem 5.6.12 proof and the direct Manes supplement, but did not verify source material outside the coverage locators. I did not run any Step-6 independent reader, Alpha risk review, Step-7 judge, browser preview, publish action, commit, or push.
