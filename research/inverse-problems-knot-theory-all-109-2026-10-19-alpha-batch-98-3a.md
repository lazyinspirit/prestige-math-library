# Batch 98 Step 3a adjudication

Run: `inverse-problems-knot-theory-all-109-2026-10-19`; group: `batch-98`; scope: batch 98 only. Three decisions are owed: `refuter:98:1`, `reader:98:1`, `refuter:98:2`. No touched/page/foreign-gate decisions are owed. The reader made no edits, and immutable pre/post item and page snapshots agree. No reader repair is being accepted by implication.

## Decisions and repairs

### refuter:98:1 — confirmed_fatal

Confirmed the literal exactly-one wording in the original Statement, while Proof 2.1 establishes that both knots have the same unknot/nontrivial status. The identity homeomorphism with K=K' equal to a trefoil already contradicts an exactly-one-nontrivial reading. Replaced only that sentence with the explicit both-unknotted/both-nontrivial split proved in 2.1, retaining both orientation signs and the full extension claim. The entire current proof and actual supplier interfaces were reviewed, including the first smooth Loop assertion and normalized tube uniqueness. Updated manifest statement and statement provenance to ai-altered; no prior judge record exists. Only reference consumer is the owning YAML-only A page; no consumer repair is needed. Precheck, rendercheck and final proof-layout pass.

The original sentence admits the intended prohibition reading, but its literal exactly-one predicate is false. The replacement is unambiguous and matches the already authored proof; the finding is not dismissed because its intended meaning can be inferred. Completed repair confidence: 1. Closed ledger row: `ipkt109-b98-3a-unknot-case-split`.

The pre/post raw item hash is `582e8ec172abc9c6a5a3f585f140be0612714a10fbd7750de5949d4540133d1d`; refuter observed carrier fingerprint is `af5595eb11fc45392da5a3790d1728bc2197e26d22a31494662610643697949b`. These are different kinds of fingerprint and are not conflated. Replacing the corrected sentence and provenance with their originals reconstructs the exact pre/post raw hash. Current raw hash: `bf2908a11f353fa716ebb02267f69a7a6fca7729f0227d91b252aa2ec6ca447f`.

### reader:98:1 and refuter:98:2 — confirmed_nonfatal

Independent current Proof 5.1 review confirms an omitted relative approximation/general-position justification: compatible triangulation alone does not establish that a cap can be changed relative to its boundary collar with finite circle preimage. Hatcher, Notes on Basic 3-Manifold Topology, Corollary 3.3, printed p.48, uses transversality and the same innermost-circle argument. A smooth approximation relative to a collar followed by transversality to the two-sided surface gives a compact one-dimensional preimage, hence finitely many circles; this standard local justification is nonfatal. Current first-assertion Proof 1.1–4.1 and its actual triangulation, PL Loop, subdivision, rounding and collar interfaces were independently checked for the assigned application. Gordon–Luecke Proof 2.1 supplies a continuous cap, whole torus, trivial normal subgroup and connected orientable smooth exterior; it uses no part of the separate criterion. Source remains read-only and unchanged. Owner should add the relative approximation/transversality justification or exact prerequisite to Proof 5.1; no source repair is claimed.

Both obligations reference the single closed `nonfatal-recorded` row `ipkt109-b98-3a-loop-relative-general-position`; closure records the nonfatal disposition and owner routing, not a completed mathematical repair. The two location descriptions identify the same inference. Native `consumer_id: null` and missing producer batch remain; `owner_context_consumer_id` is only the actual assigned use witness. The helper has no current batch-manifest home and is outside authorized edits. Its current raw hash is `ba52fa90595d689465d7a317c26edd62929715fd6e8dfbd711ade759dd794d2b`, equal to the registered owner-current source hash.

The dispatch and root registration in inverse-problems-knot-theory-all-109-2026-10-19-step3-owner-unmanifested-draft-context.json explicitly authorize read-only independent adjudication of this genuine null-observation finding against owner-current context. The archived owner-current source and root-current-proof-use-adoption.json preserve the nonfatal gap and actual consumer use. Neither registration nor current review recovers the originally observed bytes: observed_source and observed_sha256 remain null; no historical source equality or acceptance is inferred.

No substantial unmet prerequisite blocks the assigned Gordon–Luecke proof: its use is confined to the first assertion. The separate criterion needs the routine relative approximation/general-position explanation described above. Owner maintenance remains pending; it is neither a repaired supplier nor a whole-supplier acceptance.

## Risk reviews in dependency order

### `def-instanton-surgery-triangle-data`

Reviewed entire Definition and declared slope/exterior/longitude interfaces. Primitive triad representatives with cyclic determinants +1 are compatible (e.g. (1,0),(0,1),(-1,-1)). With dt wedge or(Y), the self-dual projection of dt wedge Bdot + F_B is one half of dt wedge (Bdot+*F_B)+*_Y(Bdot+*F_B), giving precisely the written perturbed gradient equation. The energy identity is the chain rule conditional on the stated limits; no unperturbed finite curvature energy or analytic existence/exactness is asserted. Gauge quotient and candidate data are definitions; full AC is retained without a new existence claim. No diagram or interrupted definition.

### `lem-trefoil-knot-group-is-nonabelian-with-abelianization-z`

Reviewed all three proof steps and both actual Wirtinger supplier statements and arguments. The oriented two-strand closure has three underpasses; following labels gives (b,c,a),(c,a,b),(a,b,c), consistent with the rightward local chart and its conjugation direction. Substitution eliminates c, leaves exactly aba=bab and makes the remaining relation redundant. Abelianization has single primitive relation a=b (no torsion); transpositions (12),(23) satisfy the braid relation and generate nonabelian S3. Nonempty finite diagram and chosen common base paths satisfy the suppliers; no AC use. TikZ crossings, closure directions and labels agree.

### `lem-property-p-instanton-surgery-triangle-and-rank-input`

Read both proof steps, current slope Definition and all eight declared dependency interfaces. Harvard primary PDF hrpthree.pdf Theorem 1 PDF p.1 states a noncyclic SU(2) image for nontrivial K and rational |r|<=2; pp.5-6 define the primitive pa+qb slope. For |p|=1,q nonzero, |r|=1/|q|<=1, including both signs. Full AC retained. No rank, exact-triangle or analytic-existence claim is made. External theorem accepted only as explicitly authorized imported input; gauge theory not reconstructed.

### `thm-property-p-for-nontrivial-knots`

Read every proof step and cited dependency statements, including filling-homology proof and published Hurewicz abelianization proof. Connected circle fibres and base give connected boundary; a second exterior component would be clopen in S3, so exterior and filling are path-connected. Thus Hurewicz applies. Cases p=0 (Z), |p|>=2 (nonzero finite homology) and |p|=1 (noncyclic representation) exhaust coprime pairs with q nonzero, including negative signs. Full AC supplies countable choice and retained external gauge hypothesis. No surgery-triangle assumption enters.

### `lem-s-three-filling-detects-the-meridian-slope`

Read all four proof steps, current exterior/slope definitions, filling-homology proof and reviewed Property P. Connectedness argument supplies homology premise. Vanishing S3 homology forces |p|=1; q nonzero would contradict simple connectivity by Property P. Conversely q=0 and coprimality give p=+/-1; slope-only gluing invariance restores original tube and S3. Both directions, p=0, both signs and excluded pair (0,0) checked. Full AC carried. TikZ has correct two gluing pieces and meridian p mu+q lambda; it is schematic, not proof.

### `thm-gordon-luecke-knot-complement-determines-knot`

Read entire statement, Facts and proof plus current exterior, slope, boundary-incompressibility, solid-torus extension and normalized tube-uniqueness interfaces/arguments and strong smooth Loop supplier. Corrected the literal exactly-one statement to the proved exhaustive case split. For nontrivial knots, phi-prime=h phi g^{-1} reverses boundary orientation for either sign of h and transports S3 filling; meridian detection yields the boundary isotopy. In the unknot case, vertical-derivative normalization satisfies tube uniqueness; shrinking/expanding a product collar transfers the essential disk. A homeomorphic image gives a continuous cap, and the first Loop assertion (whole torus, trivial normal subgroup, connected orientable exterior) gives a smooth compressing disk, contradicting boundary incompressibility. The separate criterion Proof5.1 is unused and its nonfatal gap remains read-only owner maintenance. Both unknots are equivalent independently of h; for both nontrivial knots the actual boundary map extends core-to-core with the same orientation sign. Diagram arrows commute by the constructed glued maps. AC is retained through suppliers. Only page consumer exists; unchanged YAML inventory needs no repair.

### `cex-knot-kt-15-boundary-case`

Read both counterexample steps and actual Wirtinger, trefoil, exterior-homology, meridian, ambient-equivalence, loop/group and AC interfaces. Zero-crossing diagram yields one generator and no relations, hence Z. Choosing u0=H^{-1}(x0) correctly handles the basepoint of any hypothetical equivalence; induced group isomorphism contradicts nonabelian trefoil group. Exterior homology proof gives (Z,1,0) for both knots with product tubes; full AC supplies its countable-choice premise. Mapping positive meridian to positive meridian preserves the entire decorated abelianized triple. Thus the proposed classification is false. No diagram, hidden choice or endpoint issue.

The seven HIGH/CRITICAL reviews are complete in the owning contract. The moderate-risk longitude-twist example was also read for page/diagram context: its matrix columns and explicit inverse of `(z,w) -> (w^2 z,w)` agree, and disk rotation preserves the product orientation. The trefoil crossings/closures, S3-filling gluing schematic, Gordon–Luecke commutative filling square and longitude-twist slope diagram were checked against their exact text. Their rigorous arguments do not depend on the drawings. No assigned diagram repair was needed.

## Dependencies, consumers and sources

Read the current authored arguments and their relevant actual dependency interfaces, not merely the scaffold derivations. These include the exterior and peripheral definitions, slope/gluing Definition and proof, Wirtinger correctness and local crossing proof, exterior homology and filling Mayer–Vietoris proofs, published Hurewicz abelianization proof, boundary-incompressibility proof, meridian-preserving solid-torus extension proof and normalized tubular-neighborhood uniqueness proof. The smooth Loop helper's entire six-step argument and its six current supporting interfaces were read; the criterion's gap is kept separate from the first assertion actually used.

[The primary Kronheimer–Mrowka PDF](https://people.math.harvard.edu/~kronheim/hrpthree.pdf), Theorem 1, PDF p.1, was read for the exact nontrivial-knot, rational-coefficient and absolute-value hypotheses and noncyclic-image conclusion; the primitive filling convention was inspected at PDF pp.5–6. The definition's perturbation/configuration context was checked in §2; [Knots, sutures and excision](https://arxiv.org/pdf/0807.4891), §7.1, provides additional closed-instanton context. No claim of reading all of §§7.1–7.8 or reconstructing the imported gauge-theory proof is made. The Harvard PDF is a 17-page preprint; the recorded published page-741 locator belongs to the journal version, not its page numbering.

[Hatcher, Notes on Basic 3-Manifold Topology](https://pi.math.cornell.edu/~hatcher/3M/3M.pdf), Corollary 3.3, printed p.48, was read in full for the transversality/innermost-circle argument, including the two-sided hypothesis. It supports the nonfatal classification; it does not silently add an authored relative-approximation lemma to the current helper.

A search of all current `items/` and `library/` Markdown for the changed theorem ID found only its own file and its owning A page. The page is an inventory with no mathematical prose. Thus there are no affected direct item consumers or further statement changes to propagate. Both A/B pages remain YAML only with `page_layout: compact-v1`; their inventories and statuses are preserved. Existing cross-batch declarations and qualifications remain unchanged. The frontier dependency ledger records the owned consumer's exact first-assertion use and pending owner maintenance. No proposed withdrawal is removed or introduced. No defective published carrier was established and no published content was edited.

## Local checks and limits

- Initial `node tools/risk-report.mjs research/inverse-problems-knot-theory-all-109-2026-10-19-batch-98.proof-contracts.json`: eight items routed, seven HIGH/CRITICAL, zero errors.
- After final item edits, `node tools/proof-layout.mjs items/thm-gordon-luecke-knot-complement-determines-knot.md`: one item, five steps, zero defects.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-gordon-luecke-knot-complement-determines-knot.md --json`: one checked proof, zero failures.
- `node tools/rendercheck.mjs items/thm-gordon-luecke-knot-complement-determines-knot.md --json`: one checked file, zero errors or warnings.
- Required final risk report with `--require-reviewed`: zero errors, all seven required reviews complete.

All seven other item raw hashes still match both immutable snapshots. The changed theorem's metadata/provenance and statement are mirrored in the manifest; its proof and citations were not rewritten and it has no prior `verification.judge` to invalidate. No judgment, decision stamping, native gate battery, publication or workflow transition was performed. Engine owns those operations. Review limits: exact current assigned arguments and actual used prerequisite interfaces were checked; transitive foundations and external analytic proofs were not independently re-proved.
