# Six-functor construction state

Author: /root/klr_six_functor_construction. Preserves the preceding KLR review rounds. No canonical items, pages, plans, receipts, state or gates edited.

Crash recovery: CLAUDE.md and README.md reread fully. SCHEMA.md and relevant WORKFLOW recovery/authoring sections read before crash. Temporary files vanished; actual pre-crash source reading remains as recorded here, but downloads must be reacquired before current-byte checks.

## Source evidence actually read

- Verdier, Bourbaki exposé 300, *Dualité dans la cohomologie des espaces localement compacts*, https://www.numdam.org/item/SB_1964-1966__9__337_0.pdf . Downloaded full PDF; SHA256 48571f9856f26ba377c274ec8a54454c98a7f8e2036983710546255d0451aae0. Read all extracted text (14 PDF pages) fully. §§2–3 give the finite fibrewise-c-soft-resolution construction of the exceptional inverse-image adjoint. §1 explicitly imports the supporting Godement c-soft calculus. Formula OCR loses mathematical displays, so original display inspection remains required.
- Stacks Project, *Cohomology of Sheaves*, https://stacks.math.columbia.edu/download/cohomology.pdf . PDF SHA256 23fbd6af99fe8f0b36a010c0b69ebb0f0f54761f53b530c685b1375001bb5893. Read extracted text §§16.3–18.3 (PDF28–31): compact-neighbourhood cohomology continuity, canonical ordinary base-change map and proper base-change proof. Not claimed to have read the whole chapter.
- Goresky, *Lecture Notes on Sheaves and Perverse Sheaves*, https://www.math.ias.edu/~goresky/pdf/all2.pdf . PDF SHA256 dfd4e0721c8c2e313a5515dd06163c97bd4374b96837cde51bc70ebafe8f55ba. Read §§11–12 and32.2–32.3 extracted text. These provide outlines and interfaces, not full general extraordinary-adjoint proof. Several generic formulary clauses are unsafe without perfectness hypotheses; no use as proof fallback.
- Schapira AlTo.pdf downloaded/extracted; searches found c-soft section6.5, but it was not read. No mathematical supplier established from it.

## Actual existing suppliers read

lem-ringed-space-module-sheaves-enough-injectives (complete); def-sheaf-hom (complete); lem-derived-tensor-product-of-abelian-sheaves (read output was truncated; not a complete read); thm-godement-resolution-flasque (complete); lem-bounded-below-complexes-admit-injective-replacements (complete); thm-injective-complexes-model-the-bounded-below-derived-category (complete); def-inverse-image-presheaf-and-sheaf, lem-stalk-inverse-image-sheaf, def-direct-image-sheaf, lem-direct-image-is-sheaf (complete); thm-cech-to-sheaf-cohomology-comparison, lem-finite-star-refinement-for-compact-hausdorff-spaces, lem-injective-sheaves-flasque (complete); lem-extension-by-zero-short-exact-sequence, lem-sheaf-supported-on-a-closed-subset-is-a-pushforward (complete).

Important boundaries: k-sheaves use module sheaves over constant ring sheaf k_X, hence enough-injectives supplier applies; tensor must be over k, not the existing derived tensor over Z. Proper/quasicoherent algebraic sheaf cohomology is not an analytic constructible-sheaf supplier. Existing Čech comparison proves fixed-cover comparison maps, not global comparison without acyclicity.

## Construction route

All spaces locally compact Hausdorff, finite-dimensional for bounded soft resolutions; target applications analytic spaces of separated finite-type complex varieties, coefficient field k characteristic zero. AC enters through injective replacements. Ordinary f*=f^{-1} exact by stalks; Rf* uses bounded-below k-linear injectives; tensor over k is exact on stalks and bounded total complexes are K-flat. Internal RHom(A,B) is Hom(A,I_B), with A bounded and I_B bounded-below injective. Tensor-Hom adjunction and f*⊣Rf* are then proved by chain-Hom adjunction, not assumed.

Closed inclusion i has exact i*=i! and right adjoint i^!_0=i^{-1}Gamma_Z; derived i^! is computed on injectives. Both localization triangles follow from stalk exactness and flasqueness.

Verdier construction: choose bounded resolution k_X→K by f-fibrewise-c-soft k-sheaves, with every open extension K_U=j_U!j_U* K termwise f!-acyclic. For bounded-below injective I on Y, define H(I)(U)=Hom•_Y(f!K_U,I). Čech extension-zero complexes and injectivity make H a flasque complex. Free generators j_U!k and their bounded-above resolutions prove Hom_D(X)(A,H(I))=Hom_D(Y)(Rf!A,I). This is the actual candidate f^!, not the formula Df*D assumed as axiom. Finite cohomological dimension controls totalization/convergence.

Still to construct: c-soft support-extension and acyclicity calculus; bounded fibrewise-soft resolutions from covering/cohomological dimension; composition and compact-support stalk formula; local dualizing normalization; induction proving constructible biduality and coherent Verdier mates. The globally simplicial algebraic-map route was explicitly rejected because general algebraic maps need not admit globally simplicial triangulations. Do not revive it.

## Owned target IDs

- def-derived-operations-on-analytic-sheaves-over-locally-compact-spaces
- thm-compactly-supported-derived-pushforward-has-exceptional-inverse-image-adjoint
- thm-analytic-sheaf-six-operations-have-coherent-base-change-projection-and-trace
- thm-verdier-duality-on-oriented-stratified-complex-varieties

No completion, source-proof closure, independent audit or gate pass is claimed. New necessary intermediates and complete proof text will be authored in sixfunctor-* files. Parent owns native integration; same author checks actual downstream uses after integration.

## Current durable handoff (2026-10-09)

Authoritative current item/page carriers are the twelve items and four scheme-theory pages in `research/frontier-44-special-representation-examples-28-klr-foundation-sixfunctor-drafts/`. Their paths, dependency arrays and exact raw hashes are in `-metadata.json`; actual source/read/check evidence is in `-packet.json`. The two pairs are compact-support-sheaf-calculus and analytic-derived-six-operations-and-duality. No candidate canonical-ID collision was found. A support-and-trace intermediary prevents a Verdier/extraordinary-base-change dependency cycle.

Local constructions now authored: compact-neighbourhood gluing; c-soft support-controlled lifting and acyclicity; compact metric global Čech-derived comparison and all-sheaf polyhedral dimension bounds; finite fibrewise-soft resolutions; bounded ordinary tensor-Hom/pullback-pushforward and k-linear flasque acyclicity; actual finite-K exceptional Hom construction with explicit proper-support counit; closed support and localization; ordinary proper-support base change, projection and composition; finite-cell Verdier dual computation and double evaluation; resulting coherent extraordinary proper exchange. Local product projection comes from the actually read product incidence resolution. Smooth nonproper base change is stated for an explicitly supplied proper/open factorization with conical boundary models, not an unproved universal compactification assertion.

Integrity refinements: bounded-source generator transposition alone is not called an unrestricted D+-source categorical adjunction. Full adjunction/triangle/comparison laws are on the bounded constructible specialization after the actual finite local model proves f^! preservation. Generator resolutions of complexes use the reproduced descending kernel recursion from the fully read existing bounded-above flat-resolution proof, not naive independent resolutions or projectivity of j!k. The actual draft carriers supersede the expository note where these refinements differ.

Final local checks after the last item edit: precheck 12 files,11 proofs,0 failures; renderer16 files,0 errors/warnings; proof-layout12 items,48 steps,0 defects. These are local formatting checks only. No independent mathematical acceptance, source-proof closure or native gate is asserted.

Remaining separately owned inputs: actual algebraic finite conical/triangulation existence/control; final hash-bound independent constant-sheaf/cochain and incidence suppliers. The actual constructible incidence proof and topology constant-comparison draft were read fully and hash-recorded. They are conditionally authored for their stated geometric hypotheses, not proofs of algebraic triangulation existence. Root owns native integration. After integration this author still owns exact literal consumed-clause checks and focused repairs of its downstream KLR consumers; no such check is claimed before canonical carriers exist.
