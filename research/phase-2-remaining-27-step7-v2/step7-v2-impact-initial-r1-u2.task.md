# Step 7 repair: impact-initial, round 1, unit 2

Read briefs/step7-owner-repair.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-remaining-27-step7-v2/impact-initial-1.json.

Write only your assigned item files, genuinely required new prerequisite items, their owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-remaining-27-step7-v2/step7-v2-impact-initial-r1-u2.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Read all cited suppliers and relevant consumers. Repair confirmed fatal defects fully. Identify all downstream consumers, including published items.

Review every assigned downstream item, including published items. Repair each relevant impact, or explain why unaffected. Work supplier-before-consumer. Published repairs are authorized by the owner for this impact wave. Reconcile proof contracts, dependencies, page metadata and publication audit evidence.

Return JSON {run,phase,round,unit,input_sha256:"644b9921bd49bd02bc1acc98098d689d307c8cfa9818b91bb7f5fbaaf1b5bafe",decisions:[],reviews:[],created_items:[],downstream:[]}. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters); unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run phase-2-remaining-27 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

Owner repair units run serially. You may update research/published-consumer-supplier-ledger.md for your assigned findings, maintaining its canonical deduplicated classification index and exact supplier/evidence links. Resolve supplied ledger proposals; do not silently discard them. Do not write judge verdicts or shared adjudication JSONL. Unit 1 also reconciles initial-adjudicator ledger proposals whose item has no downstream owner assignment. Record unresolved ledger work honestly in your report; it blocks the final gate.

Adjudicator ledger proposals requiring reconciliation:
[
  {
    "ledger": "defect",
    "supplier_id": "lem-compact-fibre-numerable-bundle-totals-are-paracompact-hausdorff-of-cw-type",
    "consumer_id": "def-real-projective-bundle-and-tautological-line",
    "path": [
      "lem-compact-fibre-numerable-bundle-totals-are-paracompact-hausdorff-of-cw-type",
      "def-real-projective-bundle-and-tautological-line"
    ],
    "affected_clause": "Verification 3.2 and the F5 total-space consequence",
    "finding": "The consumer still justifies compact generation from projective charts built over open subsets of a CGWH base. Arbitrary open subspaces of a compactly generated space need not themselves be compactly generated, so that argument does not establish the CGWH hypothesis used later.",
    "required_repair": "Invoke the repaired compact-fibre numerable-bundle lemma directly to obtain CGWH for P(E), and restate its paracompact Hausdorff, CGWH, and CW-type hypotheses exactly.",
    "status": "open",
    "published": false
  },
  {
    "ledger": "defect",
    "supplier_id": "lem-compact-fibre-numerable-bundle-totals-are-paracompact-hausdorff-of-cw-type",
    "consumer_id": "def-complex-projective-bundle-and-tautological-complex-line",
    "path": [
      "lem-compact-fibre-numerable-bundle-totals-are-paracompact-hausdorff-of-cw-type",
      "def-complex-projective-bundle-and-tautological-complex-line"
    ],
    "affected_clause": "Definition paragraph headed Base and orientation justification",
    "finding": "The paragraph establishes only paracompact Hausdorffness and CW homotopy type before declaring the tautological real bundle to lie in the general Thom scope. That scope also requires a CGWH base, which the written argument omits.",
    "required_repair": "Use the repaired compact-fibre lemma on the compact projective fibre to prove that P(E) is CGWH, then state all three resulting base properties before invoking the Thom construction.",
    "status": "open",
    "published": false
  },
  {
    "ledger": "defect",
    "supplier_id": "lem-compact-fibre-numerable-bundle-totals-are-paracompact-hausdorff-of-cw-type",
    "consumer_id": "def-complex-flag-bundle-and-chern-roots",
    "path": [
      "lem-compact-fibre-numerable-bundle-totals-are-paracompact-hausdorff-of-cw-type",
      "def-complex-flag-bundle-and-chern-roots"
    ],
    "affected_clause": "Definition of the iterated flag stages and their CGWH verification",
    "finding": "The flag construction claims each intermediate base is CGWH because its local product charts use open subspaces of the previous CGWH base. That inheritance is false in general, leaving later projective-bundle and Thom applications without a proved base hypothesis.",
    "required_repair": "At every compact complex-projective stage, apply the repaired compact-fibre lemma to obtain paracompact Hausdorffness, CGWH, and CW homotopy type instead of relying on open-subspace inheritance.",
    "status": "open",
    "published": false
  },
  {
    "ledger": "defect",
    "supplier_id": "lem-compact-fibre-numerable-bundle-totals-are-paracompact-hausdorff-of-cw-type",
    "consumer_id": "thm-integral-complex-projective-bundle-theorem",
    "path": [
      "lem-compact-fibre-numerable-bundle-totals-are-paracompact-hausdorff-of-cw-type",
      "thm-integral-complex-projective-bundle-theorem"
    ],
    "affected_clause": "F5 and Proof step 1.3",
    "finding": "F5 omits the repaired lemma's CGWH conclusion, and step 1.3 proves only paracompact Hausdorffness and CW type before placing the tautological bundle in Thom scope. The required CGWH premise is therefore not supplied by the written interface.",
    "required_repair": "Restate F5 with its conditional CGWH conclusion and invoke that clause for the projective total space before applying the Thom isomorphism machinery.",
    "status": "open",
    "published": false
  },
  {
    "ledger": "defect",
    "supplier_id": "lem-compact-fibre-numerable-bundle-totals-are-paracompact-hausdorff-of-cw-type",
    "consumer_id": "thm-complex-splitting-principle-with-integral-injective-pullback",
    "path": [
      "lem-compact-fibre-numerable-bundle-totals-are-paracompact-hausdorff-of-cw-type",
      "thm-complex-splitting-principle-with-integral-injective-pullback"
    ],
    "affected_clause": "F3 and Proof steps 1.1 and 3.2",
    "finding": "The proof says intermediate projective bases remain CGWH by local product charts over open subsets of a CGWH base. Open subspaces do not preserve compact generation in this generality, so the integral projective-bundle theorem is applied without a valid CGWH verification.",
    "required_repair": "Replace the local-open-subspace claim with the repaired compact-fibre lemma at each stage and make F3 state its CGWH clause as well as the paracompact and CW-type clauses.",
    "status": "open",
    "published": false
  },
  {
    "ledger": "defect",
    "supplier_id": "lem-compact-fibre-numerable-bundle-totals-are-paracompact-hausdorff-of-cw-type",
    "consumer_id": "lem-universal-oriented-sphere-bundle-has-bso-n-minus-one-total-space",
    "path": [
      "lem-compact-fibre-numerable-bundle-totals-are-paracompact-hausdorff-of-cw-type",
      "lem-universal-oriented-sphere-bundle-has-bso-n-minus-one-total-space"
    ],
    "affected_clause": "F3, F5, and Proof step 1.1",
    "finding": "The proof records paracompact Hausdorffness and CW type for the orientation cover and sphere-bundle total space, then treats them as Euler-scope bases. It omits the CGWH property required by that scope, although the repaired supplier now provides it.",
    "required_repair": "Carry the repaired lemma's CGWH conclusion through F3 and F5 for both compact-fibre bundles and state it before invoking any Euler-class interface.",
    "status": "open",
    "published": false
  },
  {
    "ledger": "defect",
    "supplier_id": "lem-compact-fibre-numerable-bundle-totals-are-paracompact-hausdorff-of-cw-type",
    "consumer_id": "def-real-flag-bundle-and-stiefel-whitney-roots",
    "path": [
      "lem-compact-fibre-numerable-bundle-totals-are-paracompact-hausdorff-of-cw-type",
      "def-real-flag-bundle-and-stiefel-whitney-roots"
    ],
    "affected_clause": "Definition, standing base convention, and F6",
    "finding": "The page retains an undefined admissible-base shorthand and a generic total-space restatement rather than the exact paracompact Hausdorff, CGWH, and CW-type hypotheses now required by the Stiefel-Whitney and projective-bundle interfaces.",
    "required_repair": "Replace the shorthand by the explicit base conditions and use the repaired compact-fibre lemma's CGWH clause at every real-projective flag stage.",
    "status": "open",
    "published": false
  },
  {
    "ledger": "published-consumer-supplier",
    "supplier_ids": [
      "lem-compact-fibre-numerable-bundle-totals-are-paracompact-hausdorff-of-cw-type",
      "def-characteristic-class-as-a-universal-natural-bundle-class",
      "def-stiefel-whitney-classes-from-the-projective-bundle-relation",
      "thm-real-splitting-principle-with-mod-two-injective-pullback",
      "thm-whitney-sum-formula-for-stiefel-whitney-classes",
      "def-euler-class-by-zero-section-pullback-of-the-thom-class",
      "thm-naturality-orientation-sign-and-whitney-product-for-euler-classes",
      "prop-a-nowhere-zero-section-forces-the-euler-class-to-vanish",
      "prop-euler-class-of-an-oriented-odd-rank-bundle-is-two-torsion",
      "ex-euler-class-of-zero-and-trivial-positive-rank-bundles",
      "ex-euler-class-of-the-universal-oriented-two-plane",
      "cex-zero-euler-class-does-not-in-general-imply-a-nowhere-zero-section",
      "cex-odd-rank-euler-class-need-not-vanish-with-two-torsion-coefficients"
    ],
    "audit_status": "complete",
    "finding": "The transitive dependency closure contains 62 draft consumers and no published consumers. A separate body-citation scan of every published item found no direct citation to any assigned changed supplier.",
    "published_consumers": []
  },
  {
    "ledger": "defect",
    "supplier_id": "prop-killing-form-orthogonality-of-root-spaces",
    "consumer_id": "cor-opposite-root-spaces-pair-nondegenerately",
    "path": [
      "prop-killing-form-orthogonality-of-root-spaces",
      "cor-opposite-root-spaces-pair-nondegenerately"
    ],
    "affected_clause": "Statement and L1-L2 use Killing orthogonality and the root decomposition without Choice.",
    "finding": "The consumer has no public Choice hypothesis, so both cited structural inputs are unlicensed under their repaired interfaces.",
    "required_repair": "Add Choice to the public statement, Given block, and direct dependencies before retaining the existing nondegeneracy proof.",
    "status": "open",
    "published": false
  },
  {
    "ledger": "defect",
    "supplier_id": "def-regular-root-hyperplanes",
    "consumer_id": "cor-regular-elements-form-a-dense-zariski-open-subset-of-a-cartan-subalgebra",
    "paths": [
      [
        "def-regular-root-hyperplanes",
        "cor-regular-elements-form-a-dense-zariski-open-subset-of-a-cartan-subalgebra"
      ],
      [
        "prop-centralizer-dimension-from-vanishing-roots",
        "cor-regular-elements-form-a-dense-zariski-open-subset-of-a-cartan-subalgebra"
      ]
    ],
    "affected_clause": "Statement and L1 import the regular-set and centralizer formulas unconditionally.",
    "finding": "Both direct suppliers now expressly assume Choice, while this corollary exposes neither that hypothesis nor the axiom dependency.",
    "required_repair": "Propagate Choice through the statement and facts before using the finite hyperplane union and centralizer formula.",
    "status": "open",
    "published": false
  },
  {
    "ledger": "defect",
    "supplier_id": "prop-killing-form-orthogonality-of-root-spaces",
    "consumer_id": "def-killing-dual-vector-of-a-root",
    "path": [
      "prop-killing-form-orthogonality-of-root-spaces",
      "def-killing-dual-vector-of-a-root"
    ],
    "affected_clause": "Definition asserts nondegeneracy of B restricted to h and hence the dual-vector isomorphism.",
    "finding": "The definition invokes the repaired Choice-dependent orthogonality proposition without carrying its hypothesis.",
    "required_repair": "Add an explicit Choice assumption and axiom dependency at the definition interface.",
    "status": "open",
    "published": false
  },
  {
    "ledger": "defect",
    "supplier_id": "def-regular-root-hyperplanes",
    "consumer_id": "ex-regular-and-singular-diagonal-elements-of-sl-n",
    "paths": [
      [
        "def-regular-root-hyperplanes",
        "ex-regular-and-singular-diagonal-elements-of-sl-n"
      ],
      [
        "prop-centralizer-dimension-from-vanishing-roots",
        "ex-regular-and-singular-diagonal-elements-of-sl-n"
      ]
    ],
    "affected_clause": "Example and steps 2.1-3.1 use the regular-set and centralizer-dimension interfaces.",
    "finding": "The coordinate calculation is correct, but its two general suppliers require Choice and the example does not expose that assumption.",
    "required_repair": "Either add Choice publicly or replace the general supplier uses by a complete direct matrix centralizer calculation.",
    "status": "open",
    "published": false
  },
  {
    "ledger": "defect",
    "supplier_id": "thm-roots-of-a-complex-semisimple-lie-algebra-form-a-reduced-crystallographic-root-system",
    "consumer_id": "ex-root-systems-b-two-and-c-two-from-matrix-lie-algebras",
    "path": [
      "thm-roots-of-a-complex-semisimple-lie-algebra-form-a-reduced-crystallographic-root-system",
      "ex-root-systems-b-two-and-c-two-from-matrix-lie-algebras"
    ],
    "affected_clause": "L3 and step 3.1 import the reduced crystallographic conclusion for the computed matrix roots.",
    "finding": "The example cites a supplier with an explicit Choice hypothesis but states the root-system conclusion unconditionally.",
    "required_repair": "Add Choice to the Example and facts, or independently verify every Euclidean root-system axiom for the two coordinate sets.",
    "status": "open",
    "published": false
  },
  {
    "ledger": "defect",
    "supplier_id": "prop-killing-form-orthogonality-of-root-spaces",
    "consumer_id": "ex-the-killing-form-identifies-roots-with-coroot-directions",
    "path": [
      "prop-killing-form-orthogonality-of-root-spaces",
      "ex-the-killing-form-identifies-roots-with-coroot-directions"
    ],
    "affected_clause": "Example and step 1.1 cite general nondegeneracy of the Killing restriction.",
    "finding": "The displayed sl_n computation is direct, but the public example also invokes a Choice-dependent supplier and downstream dual/coroot definitions without the hypothesis.",
    "required_repair": "Either expose Choice or make the matrix computation fully self-contained and remove the unlicensed general supplier chain.",
    "status": "open",
    "published": false
  },
  {
    "ledger": "defect",
    "supplier_id": "prop-killing-form-orthogonality-of-root-spaces",
    "consumer_id": "lem-killing-length-of-a-root-is-nonzero",
    "path": [
      "prop-killing-form-orthogonality-of-root-spaces",
      "lem-killing-length-of-a-root-is-nonzero"
    ],
    "affected_clause": "Statement, L1-L3, and the contradiction proof use the Killing-dual and root-decomposition chain.",
    "finding": "Several load-bearing structural facts now require Choice, but the lemma has no public Choice hypothesis.",
    "required_repair": "Propagate Choice through the lemma interface and declare the axiom dependency before retaining the proof.",
    "status": "open",
    "published": false
  },
  {
    "ledger": "defect",
    "supplier_id": "prop-killing-form-orthogonality-of-root-spaces",
    "consumer_id": "prop-bracket-of-opposite-root-spaces-is-the-root-line-in-the-cartan-subalgebra",
    "path": [
      "prop-killing-form-orthogonality-of-root-spaces",
      "prop-bracket-of-opposite-root-spaces-is-the-root-line-in-the-cartan-subalgebra"
    ],
    "affected_clause": "L1-L3 and both proof steps use g_0=h, nondegeneracy on h, and opposite-space pairing.",
    "finding": "The bracket-line proof is valid only under the Choice hypotheses of its repaired structural suppliers, which the proposition omits.",
    "required_repair": "Add Choice to the proposition statement, assumptions, and dependencies.",
    "status": "open",
    "published": false
  },
  {
    "ledger": "defect",
    "supplier_id": "prop-killing-form-orthogonality-of-root-spaces",
    "consumer_id": "thm-root-sl-two-triple",
    "path": [
      "prop-killing-form-orthogonality-of-root-spaces",
      "thm-root-sl-two-triple"
    ],
    "affected_clause": "Statement and L1-L3 depend on the Killing-dual, opposite-pairing, and nondegeneracy results.",
    "finding": "Existence of the normalized root triple is proved through suppliers that now explicitly assume Choice, but this theorem does not.",
    "required_repair": "Add Choice at the public theorem interface and as a direct dependency.",
    "status": "open",
    "published": false
  },
  {
    "ledger": "defect",
    "supplier_id": "def-killing-dual-vector-of-a-root",
    "consumer_id": "cor-the-only-scalar-multiples-of-a-root-that-are-roots-are-plus-or-minus-the-root",
    "path": [
      "prop-killing-form-orthogonality-of-root-spaces",
      "def-killing-dual-vector-of-a-root",
      "def-coroot-of-a-lie-algebra-root",
      "cor-the-only-scalar-multiples-of-a-root-that-are-roots-are-plus-or-minus-the-root"
    ],
    "affected_clause": "L1-L4 and the trace argument use coroots, root triples, and opposite brackets.",
    "finding": "The complete proof rests on the newly Choice-dependent Lie-root chain, while the corollary states its conclusion without Choice.",
    "required_repair": "Propagate Choice through the statement and direct dependencies.",
    "status": "open",
    "published": false
  },
  {
    "ledger": "defect",
    "supplier_id": "def-killing-dual-vector-of-a-root",
    "consumer_id": "def-cayley-transform-of-a-theta-stable-cartan-subalgebra",
    "path": [
      "prop-killing-form-orthogonality-of-root-spaces",
      "def-killing-dual-vector-of-a-root",
      "def-cayley-transform-of-a-theta-stable-cartan-subalgebra"
    ],
    "affected_clause": "The normalizing norm and both transform normalizations use Killing-dual vectors and coroots.",
    "finding": "The frontmatter lists the Choice axiom, but the definition's public interface never assumes it, so the imported dual/coroot constructions remain unlicensed.",
    "required_repair": "State Choice explicitly at the beginning of the definition and preserve the existing axiom dependency.",
    "status": "open",
    "published": false
  },
  {
    "ledger": "defect",
    "supplier_id": "def-killing-dual-vector-of-a-root",
    "consumer_id": "def-coroot-of-a-lie-algebra-root",
    "path": [
      "prop-killing-form-orthogonality-of-root-spaces",
      "def-killing-dual-vector-of-a-root",
      "def-coroot-of-a-lie-algebra-root"
    ],
    "affected_clause": "Definition uses the Killing-dual vector and its nonzero Killing length.",
    "finding": "Both suppliers inherit Choice, but the coroot definition exposes no matching hypothesis.",
    "required_repair": "Add Choice to the definition interface and direct dependencies.",
    "status": "open",
    "published": false
  },
  {
    "ledger": "defect",
    "supplier_id": "def-killing-dual-vector-of-a-root",
    "consumer_id": "ex-cartan-subalgebra-and-roots-of-sl-two",
    "path": [
      "prop-killing-form-orthogonality-of-root-spaces",
      "def-killing-dual-vector-of-a-root",
      "ex-cartan-subalgebra-and-roots-of-sl-two"
    ],
    "affected_clause": "Example names the general root decomposition, dual vector, and coroot interfaces.",
    "finding": "Its explicit sl_2 computations are sound, but the cited general interfaces require Choice and the example does not assume it.",
    "required_repair": "Either add Choice publicly or remove the general supplier assertions and present the computed objects directly.",
    "status": "open",
    "published": false
  },
  {
    "ledger": "defect",
    "supplier_id": "def-killing-dual-vector-of-a-root",
    "consumer_id": "ex-the-root-sl-two-triple-inside-sl-n",
    "path": [
      "prop-killing-form-orthogonality-of-root-spaces",
      "def-killing-dual-vector-of-a-root",
      "ex-the-root-sl-two-triple-inside-sl-n"
    ],
    "affected_clause": "Example and Given block identify the general dual vector, coroot, and root-triple notions.",
    "finding": "The matrix calculations independently verify the formulas, but the interface cites Choice-dependent general results unconditionally.",
    "required_repair": "Either assume Choice or recast the item as a direct matrix computation without relying on those general existence suppliers.",
    "status": "open",
    "published": false
  },
  {
    "ledger": "defect",
    "supplier_id": "cor-opposite-root-spaces-pair-nondegenerately",
    "consumer_id": "fs-if-alpha-and-beta-are-roots-then-alpha-plus-beta-is-always-a-root",
    "path": [
      "prop-killing-form-orthogonality-of-root-spaces",
      "cor-opposite-root-spaces-pair-nondegenerately",
      "fs-if-alpha-and-beta-are-roots-then-alpha-plus-beta-is-always-a-root"
    ],
    "affected_clause": "The first counterexample obtains -alpha from the opposite-root supplier.",
    "finding": "That supplier inherits Choice, while this false-statement refutation does not carry the hypothesis.",
    "required_repair": "Add Choice or use the explicit sl_2 witness for both counterexamples and remove the general supplier dependency.",
    "status": "open",
    "published": false
  },
  {
    "ledger": "defect",
    "supplier_id": "thm-root-sl-two-triple",
    "consumer_id": "fs-root-spaces-can-have-arbitrary-dimension-in-a-complex-semisimple-lie-algebra",
    "path": [
      "prop-killing-form-orthogonality-of-root-spaces",
      "thm-root-sl-two-triple",
      "fs-root-spaces-can-have-arbitrary-dimension-in-a-complex-semisimple-lie-algebra"
    ],
    "affected_clause": "Given and step 3.1 cite the general one-dimensionality and root-triple chain.",
    "finding": "The explicit sl_2 witness is choice-free, but the claimed universal refutation currently relies on Choice-dependent suppliers without assuming Choice.",
    "required_repair": "Either add Choice for the universal clause or restrict the refutation to the explicit counterexample and remove the general dependency.",
    "status": "open",
    "published": false
  },
  {
    "ledger": "defect",
    "supplier_id": "prop-bracket-of-opposite-root-spaces-is-the-root-line-in-the-cartan-subalgebra",
    "consumer_id": "thm-root-spaces-of-a-complex-semisimple-lie-algebra-are-one-dimensional",
    "path": [
      "prop-killing-form-orthogonality-of-root-spaces",
      "prop-bracket-of-opposite-root-spaces-is-the-root-line-in-the-cartan-subalgebra",
      "thm-root-spaces-of-a-complex-semisimple-lie-algebra-are-one-dimensional"
    ],
    "affected_clause": "L1-L3 and the invariant-subspace trace proof use the root triple, opposite bracket, and root decomposition.",
    "finding": "All load-bearing Lie-root suppliers now carry Choice, but the theorem does not.",
    "required_repair": "Add Choice at the theorem interface and direct dependency list.",
    "status": "open",
    "published": false
  },
  {
    "ledger": "defect",
    "supplier_id": "thm-root-sl-two-triple",
    "consumer_id": "thm-root-string-property",
    "path": [
      "prop-killing-form-orthogonality-of-root-spaces",
      "thm-root-sl-two-triple",
      "thm-root-string-property"
    ],
    "affected_clause": "L1-L5 and the module decomposition proof use the root triple, coroot, and root decomposition.",
    "finding": "The root-string theorem omits the Choice hypothesis required by the entire cited Lie-root construction chain.",
    "required_repair": "Propagate Choice through the statement, Given block, and dependencies.",
    "status": "open",
    "published": false
  },
  {
    "ledger": "defect",
    "supplier_id": "thm-root-string-property",
    "consumer_id": "cor-cartan-integers-are-integral",
    "path": [
      "prop-killing-form-orthogonality-of-root-spaces",
      "thm-root-sl-two-triple",
      "thm-root-string-property",
      "cor-cartan-integers-are-integral"
    ],
    "affected_clause": "L1 and both proof steps derive integrality from the root-string theorem.",
    "finding": "The corollary states integrality without the Choice hypothesis inherited through root strings and coroots.",
    "required_repair": "Add Choice publicly and as a direct dependency.",
    "status": "open",
    "published": false
  },
  {
    "ledger": "defect",
    "supplier_id": "def-coroot-of-a-lie-algebra-root",
    "consumer_id": "def-root-reflection-from-a-coroot",
    "path": [
      "prop-killing-form-orthogonality-of-root-spaces",
      "def-killing-dual-vector-of-a-root",
      "def-coroot-of-a-lie-algebra-root",
      "def-root-reflection-from-a-coroot"
    ],
    "affected_clause": "Definition assumes the coroot exists and satisfies alpha(h_alpha)=2.",
    "finding": "The imported coroot definition inherits Choice, but the reflection definition has no matching public hypothesis.",
    "required_repair": "Add Choice to the definition interface and direct dependency list.",
    "status": "open",
    "published": false
  },
  {
    "ledger": "defect",
    "supplier_id": "thm-root-string-property",
    "consumer_id": "ex-root-strings-in-type-a-two",
    "path": [
      "prop-killing-form-orthogonality-of-root-spaces",
      "thm-root-sl-two-triple",
      "thm-root-string-property",
      "ex-root-strings-in-type-a-two"
    ],
    "affected_clause": "Example and Given block identify the coordinate computation with the general root-string and coroot results.",
    "finding": "The explicit A2 enumeration is sound, but the cited general interfaces require Choice and the example omits it.",
    "required_repair": "Either add Choice publicly or remove the general supplier claims and keep only the direct six-root computation.",
    "status": "open",
    "published": false
  },
  {
    "ledger": "defect",
    "supplier_id": "def-root-reflection-from-a-coroot",
    "consumer_id": "ex-weyl-reflection-in-sl-two",
    "path": [
      "prop-killing-form-orthogonality-of-root-spaces",
      "def-killing-dual-vector-of-a-root",
      "def-coroot-of-a-lie-algebra-root",
      "def-root-reflection-from-a-coroot",
      "ex-weyl-reflection-in-sl-two"
    ],
    "affected_clause": "Example and Given block use the general coroot and reflection interfaces.",
    "finding": "The matrix conjugation is direct, but the public example imports the Choice-dependent reflection chain without the hypothesis.",
    "required_repair": "Either assume Choice or define and verify the rank-one reflection directly and remove the affected supplier chain.",
    "status": "open",
    "published": false
  },
  {
    "ledger": "defect",
    "supplier_id": "cor-the-only-scalar-multiples-of-a-root-that-are-roots-are-plus-or-minus-the-root",
    "consumer_id": "fs-all-integer-multiples-of-a-root-are-roots",
    "path": [
      "prop-killing-form-orthogonality-of-root-spaces",
      "def-killing-dual-vector-of-a-root",
      "def-coroot-of-a-lie-algebra-root",
      "cor-the-only-scalar-multiples-of-a-root-that-are-roots-are-plus-or-minus-the-root",
      "fs-all-integer-multiples-of-a-root-are-roots"
    ],
    "affected_clause": "Given and step 2.1 cite the general reducedness and root-string results.",
    "finding": "The explicit sl_2 eigenvalue witness already refutes the statement, but the item also imports Choice-dependent universal suppliers without assuming Choice.",
    "required_repair": "Remove the unnecessary general supplier claims and retain the direct witness, or add Choice publicly.",
    "status": "open",
    "published": false
  },
  {
    "ledger": "defect",
    "supplier_id": "thm-root-string-property",
    "consumer_id": "thm-root-reflections-preserve-the-root-set",
    "path": [
      "prop-killing-form-orthogonality-of-root-spaces",
      "thm-root-sl-two-triple",
      "thm-root-string-property",
      "thm-root-reflections-preserve-the-root-set"
    ],
    "affected_clause": "L1-L2 and all proof steps use root strings, Cartan integrality, coroots, and root reflections.",
    "finding": "The theorem's complete argument inherits Choice through every structural supplier, but its statement does not.",
    "required_repair": "Add Choice to the public theorem interface, facts, and dependencies.",
    "status": "open",
    "published": false
  },
  {
    "ledger": "published-consumer-supplier",
    "supplier_ids": [
      "prop-killing-form-orthogonality-of-root-spaces",
      "thm-roots-of-a-complex-semisimple-lie-algebra-form-a-reduced-crystallographic-root-system",
      "def-regular-root-hyperplanes",
      "prop-centralizer-dimension-from-vanishing-roots",
      "prop-the-center-is-the-common-kernel-of-all-roots-inside-the-cartan-subalgebra",
      "cex-a-maximal-abelian-subalgebra-that-is-not-a-cartan-subalgebra-in-a-nonsemisimple-algebra",
      "def-cartan-matrix-of-a-based-root-system",
      "ex-cartan-subalgebras-of-a-direct-sum",
      "prop-duality-exchanges-b-n-and-c-n-and-fixes-the-other-types",
      "prop-classical-matrix-lie-algebras-have-split-cartan-subalgebras",
      "prop-dimensions-of-the-exceptional-simple-lie-algebras",
      "rem-dynkin-diagrams-do-not-classify-global-lie-groups",
      "fs-b-n-and-c-n-are-isomorphic-root-systems-for-all-n",
      "thm-cartan-killing-classification-of-complex-simple-lie-algebras",
      "prop-root-systems-of-the-classical-complex-lie-algebras",
      "thm-isomorphism-theorem-for-complex-semisimple-lie-algebras",
      "cex-a-cycle-graph-fails-finite-type-positive-definiteness",
      "ex-positive-roots-and-highest-root-of-g-two",
      "lem-dynkin-diagrams-of-irreducible-finite-root-systems-are-trees-with-controlled-branching"
    ],
    "audit_status": "complete",
    "finding": "The controller's dependency-and-body-link closure contains 182 draft consumers and zero published consumers; a separate scan of published item bodies found no direct citation to an assigned supplier.",
    "published_consumers": []
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append_batch",
    "run": "phase-2-remaining-27",
    "phase": "initial",
    "round": 1,
    "unit": 14,
    "entries": [
      {
        "subject": "cex-kelley-cofinite-set-is-not-closed",
        "severity": "fatal",
        "subclass": "invalid-complement-argument",
        "location": "proof-step-2.1",
        "disposition": "fixed",
        "post_sha256": "838522001944f6c01784526ef5b01b042e6a5226d6b3286123d222806c0ca3cc",
        "evidence": "The repaired proof witnesses nonemptiness by 1 in the odd set and noncofiniteness by the infinite even complement; infinitude of the odd set alone would prove neither point."
      },
      {
        "subject": "thm-arbitrary-compact-product-theorem-iff-ac",
        "severity": "nonfatal",
        "subclass": "undeclared-bpi-interface",
        "location": "fact-F3-and-proof-step-3.1",
        "disposition": "fixed",
        "post_sha256": "87ea641e614ed4450eb4d6620d004da48aaf78e0c5c39a55126f0dae9c6364ab",
        "evidence": "The comparison with compact Hausdorff products now cites the explicit BPI equivalence instead of deriving that strictly weaker benchmark from the compact-T1 product theorem."
      },
      {
        "subject": "ex-isolated-point-repair-recovers-choice-function",
        "severity": "fatal",
        "subclass": "missing-global-product-hypothesis",
        "location": "statement-fact-F3-and-proof-step-3.1",
        "disposition": "fixed",
        "post_sha256": "bae79670150dc5ef8d2f2fc69eb634fc4bafac37ddbb3f885a872b3c8e444936",
        "evidence": "The example now assumes the global compact-T1 product principle before using it to make the constructed product compact and extract a choice function."
      },
      {
        "subject": "thm-dmc-implies-compact-hausdorff-baire",
        "severity": "nonfatal",
        "subclass": "missing-finite-set-closure-justification",
        "location": "fact-L3-and-proof-step-6.1",
        "disposition": "fixed",
        "post_sha256": "192ea3d1a69fb78d4a0555e91736ab5cde8c7543c6293d2718018f2f6fc7f434",
        "evidence": "The proof now cites subset-of-finite-set finiteness and carries a finite-union invariant, so the finite sets used at the DMC stage are justified in ZF."
      },
      {
        "subject": "lem-corson-stone-obstruction-is-ordinal-boundable",
        "severity": "nonfatal",
        "subclass": "incorrect-rank-bound",
        "location": "fact-L2-and-proof-rank-audit",
        "disposition": "fixed",
        "post_sha256": "29559ab1c4e47759b7cb0b64f5c0f5d28006f171819461ca13340635273b9682",
        "evidence": "The repaired rank calculation places Kuratowski pairs in V_2(X) and their Cartesian-product set in V_3(X); the later uniform omega-plus-omega bound remains valid."
      },
      {
        "subject": "thm-pincus-transfer-for-bpi-and-injectively-boundable-conjunctions",
        "severity": "fatal",
        "subclass": "overstated-transfer-clause",
        "location": "statement-fact-F2-and-proof-step-3.1",
        "disposition": "fixed",
        "post_sha256": "60dd2787eb4c71916d09c8991d6ac6fe318d6d857bdd4f6e7d3260354e0095b3",
        "evidence": "The transfer interface now distinguishes injectively boundable sentences, the BPI exception, and the simultaneous BPI-plus-countable-choice exception; it no longer licenses countable choice alone."
      },
      {
        "subject": "lem-brunner-urysohn-obstruction-is-injectively-boundable",
        "severity": "fatal",
        "subclass": "missing-relativization-certificate",
        "location": "proof-steps-3.1-through-5.1",
        "disposition": "fixed",
        "post_sha256": "061971a0f0810dcbe10fa990ef6d200dddc098ed661f5edf715797082bcec495",
        "evidence": "The proof now writes the atom-blind obstruction formula, bounds every topology, closed-set and function-graph witness below omega plus omega, and verifies the required ZFA relativization equivalence."
      },
      {
        "subject": "cor-dmc-is-not-provable-in-zf",
        "severity": "fatal",
        "subclass": "unconditional-title-overclaim",
        "location": "title",
        "disposition": "fixed",
        "post_sha256": "bbd43a7c1ced362cd14a4769a70208cc63d9466eae24b07f3df61a772c0a6e37",
        "evidence": "The title now states the consistency hypothesis matching the statement and proof, avoiding the false unconditional metatheoretic assertion when ZF is inconsistent."
      },
      {
        "subject": "cor-zf-does-not-prove-urysohn-lemma",
        "severity": "fatal",
        "subclass": "unconditional-title-overclaim",
        "location": "title",
        "disposition": "fixed",
        "post_sha256": "60cf695332a76a105533f0776412305cdd1292935a789eab5b93fea51706df06",
        "evidence": "The title now makes nonprovability conditional on Con(ZF), exactly as the relative-consistency argument requires."
      },
      {
        "subject": "rem-choice-strength-ledger-baire-urysohn-stone-tychonoff",
        "severity": "nonfatal",
        "subclass": "undeclared-choice-strength-supplier",
        "location": "baire-ledger-row-and-remarks",
        "disposition": "fixed",
        "post_sha256": "354b87474bc9a756a647a784efbb0961d29734f02f6dff2fa95a48f93a6fac35",
        "evidence": "The complete-metric Baire equivalence with dependent choice now has a declared theorem dependency; the separable-complete and compact-Hausdorff rows retain their distinct ZF and DMC scopes."
      },
      {
        "subject": "thm-moore-spaces-are-subparacompact",
        "severity": "fatal",
        "subclass": "undefined-index-order",
        "location": "proof-steps-1.1-through-2.3",
        "disposition": "fixed",
        "post_sha256": "8f7dc84500714717ecd06cfd5c5abb09734008145144c1b765ba00aded91ec9e",
        "evidence": "The refinement is now indexed directly by well-ordered cover members, so every least-element selection is made in the stipulated order rather than an absent order on arbitrary indices."
      },
      {
        "subject": "thm-normal-screenable-moore-spaces-are-metrizable",
        "severity": "nonfatal",
        "subclass": "false-supplier-restatement",
        "location": "proof-step-4.1-and-remark",
        "disposition": "fixed",
        "post_sha256": "d9fb0fff5a5e2bb7daf59e8eafa813fed4340cb1ec2ac01fb2ee5b9c5deae162",
        "evidence": "The theorem now applies the sigma-cellular-base lemma with its actual normal Moore hypotheses and removes the claim that normality is unused."
      },
      {
        "subject": "lem-ladder-separation-from-hyp",
        "severity": "nonfatal",
        "subclass": "cofinality-case-gap",
        "location": "fact-F1-and-proof-step-2.3",
        "disposition": "fixed",
        "post_sha256": "023410b6721d450b37e54fbdb2215f6a19eea4585b1d7d4192c8e4fac381e3f1",
        "evidence": "The proof invokes HYP nonreflection only at uncountable cofinality; at countable cofinality it explicitly constructs a cofinal club of successor ordinals disjoint from E."
      },
      {
        "subject": "thm-fleissner-hyp-normal-nonmetrizable-moore-space",
        "severity": "nonfatal",
        "subclass": "overstated-hyp-interface",
        "location": "fact-F1",
        "disposition": "fixed",
        "post_sha256": "40f7743bcb2ed4ee620982c76d2790d6f27dce82a272b7ddcc3a3606e4d1ad62",
        "evidence": "The HYP restatement now restricts E-intersection-beta nonstationarity to beta of cofinality greater than omega, matching the supplier and the repaired ladder argument."
      },
      {
        "subject": "thm-dodd-jensen-covering-supplies-fleissner-hyp-data",
        "severity": "nonfatal",
        "subclass": "overstated-club-limit-point-fact",
        "location": "fact-F2-and-proof-step-2.4",
        "disposition": "fixed",
        "post_sha256": "4eacca16d4a7c844ce8a0e211cd992499eb22a4329d157531217bc983dd25202",
        "evidence": "The accumulation-point club argument is now used only when cf(beta) is greater than omega, which is exactly the range demanded by HYP (3b)."
      },
      {
        "subject": "thm-ch-normal-nonmetrizable-moore-space",
        "severity": "nonfatal",
        "subclass": "false-stationarity-remark",
        "location": "remark",
        "disposition": "fixed",
        "post_sha256": "c3af38ac1ca4b118fab3bd9bc2265fa28940ec6fb5881896917f9a732eee4a59",
        "evidence": "The remark now notes that HYP (3b) is vacuous below omega-one and that E intersection omega-squared is nonstationary despite containing a club, because a disjoint successor club exists."
      },
      {
        "subject": "thm-formal-nmsc-consistency-lower-bound",
        "severity": "fatal",
        "subclass": "missing-fixed-interpretation",
        "location": "facts-F1-F2-and-proof",
        "disposition": "fixed",
        "post_sha256": "aea6c3747e49e2c80bc55625ca0817027a584e86172608c36c651e247f90733c",
        "evidence": "The proof now begins with one finite-support refutation and chooses one definable inner-model class satisfying precisely that finite support, so finite proof translation needs no unsupported uniform predicate."
      },
      {
        "subject": "thm-fleissner-normal-moore-space-construction",
        "severity": "fatal",
        "subclass": "noncovering-development",
        "location": "proof-step-5.1-and-related-construction-checks",
        "disposition": "fixed",
        "post_sha256": "3532721436a09c9a91580938b1a2fc1adcd55f57e6aecd4926eb70704374ab76",
        "evidence": "Every development level now contains every isolated singleton, while branch stars refine nested basic neighbourhoods; the repaired proof also supplies the regular-metacompact and normality verifications required by the construction."
      },
      {
        "subject": "thm-relative-consistency-countable-choice-without-urysohn",
        "severity": "fatal",
        "subclass": "invalid-downstream-transfer-use",
        "location": "fact-F3-and-proof-step-5.1",
        "disposition": "pending-owner-impact-review",
        "supplier": "thm-pincus-transfer-for-bpi-and-injectively-boundable-conjunctions",
        "evidence": "The consumer still transfers countable choice alone with the Brunner obstruction, but the corrected supplier licenses countable choice only simultaneously with BPI. A different exact transfer theorem or a revised model argument is required."
      },
      {
        "subject": "ex-development-stars-form-a-countable-local-base",
        "severity": "nonfatal",
        "subclass": "invalid-generation-metadata",
        "location": "frontmatter-generation",
        "disposition": "pending-owner-impact-review",
        "supplier": "def-moore-spaces-and-developments",
        "evidence": "The batch content-policy gate reports generation metadata on an item whose statement or construction is not marked AI-generated. The mathematical example is a transitive downstream candidate; its provenance metadata must be reconciled before the batch gate can close."
      },
      {
        "subject": "rem-baire-category-choice-strength",
        "severity": "fatal",
        "subclass": "unsupported-zf-strictness-claim",
        "location": "statement-separating-them-paragraph",
        "disposition": "pending-published-repair",
        "supplier": "rem-dmc-versus-dc-over-zf-is-open",
        "evidence": "The published remark says DMC is strictly weaker than DC in ZF, but Morillon's complete argument records the equivalent question whether DMC implies DC as open; only the ZFA separation is established by the cited permutation-model route.",
        "source_urls": [
          "https://lim.univ-reunion.fr/staff/mar/mem-HDR.pdf"
        ]
      }
    ]
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "record_finding",
    "supplier_ids": [
      "rem-dmc-versus-dc-over-zf-is-open"
    ],
    "audit_status": "repair_required",
    "published_consumers": [
      "rem-baire-category-choice-strength"
    ],
    "affected_clause": "Statement, Separating them paragraph",
    "finding": "The published consumer asserts that DMC is strictly weaker than DC both in ZF and ZFA. Morillon, Section 2.1, Question 1, states that whether DMC implies DC is open; the permutation-model evidence establishes the ZFA separation but does not transfer that separation to ZF.",
    "required_repair": "Replace the ZF strictness assertion by the open-status qualification, retain only the established implication DC implies DMC and the ZFA nonimplication, and correct the source annotation that attributes ZF strictness to Tachtsis.",
    "source_urls": [
      "https://lim.univ-reunion.fr/staff/mar/mem-HDR.pdf"
    ]
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append_batch",
    "run": "phase-2-remaining-27",
    "phase": "initial",
    "round": 1,
    "unit": 3,
    "entries": [
      {
        "subject": "lem-singular-values-equal-approximation-numbers",
        "severity": "fatal",
        "subclass": "missing-existence-premise",
        "location": "statement-and-facts",
        "disposition": "fixed",
        "post_sha256": "37e306f25013f118f038bc3d38f6075ae78fa413e77f59c705f9dcb67d12f8e6",
        "evidence": "The candidate set is now proved nonempty and lower-bounded and thm-infimum-property supplies the infimum before a_n is used."
      },
      {
        "subject": "ex-integral-operator-trace-under-a-valid-diagonal-hypothesis",
        "severity": "fatal",
        "subclass": "invalid-indexing",
        "location": "facts-and-proof",
        "disposition": "fixed",
        "post_sha256": "a13609797a825242c22b060e5f6b76e91ede9b7e4343e2b6318696c65a2bc94c",
        "evidence": "The actual basis now has an empty, finite, or countable index set; a separate zero-padded positive family supplies the nuclear series."
      },
      {
        "subject": "lem-nuclear-series-characterizes-trace-norm",
        "severity": "nonfatal",
        "subclass": "sequence-index-convention",
        "location": "statement-and-proof",
        "disposition": "fixed",
        "post_sha256": "1f2d66f634bef66b5c7b2ed27ae4e67e8f318b7bf37b20e95e1c47cf95b3c7d8",
        "evidence": "Positive-indexed objects are now families, while R_0=0 and the shifted coefficient sequence supply the library's zero-based sequence convention."
      },
      {
        "subject": "def-trace-class-operator",
        "severity": "nonfatal",
        "subclass": "ill-typed-dimension",
        "location": "definition",
        "disposition": "fixed",
        "post_sha256": "eddd63e7aedfb5846d747c4bbd6ba1d3510f99d6ea1b9f00c683aedbc06da992",
        "evidence": "The common scalar field is explicit and multiplicities use dim_F; finite-rank compactness and the nth-term test are also supplied."
      },
      {
        "subject": "cor-orthonormal-eigenbasis-for-a-compact-self-adjoint-operator",
        "severity": "nonfatal",
        "subclass": "false-degenerate-claim",
        "location": "proof-step-4.1",
        "disposition": "fixed",
        "post_sha256": "21278c5c3f9c1b9f8d024f842c71426f04a3a66155cf9e54b947c35ca7761094",
        "evidence": "Zero is called an eigenvalue only when an actual nonzero kernel-basis vector witnesses it; the injective case uses an empty kernel basis."
      },
      {
        "subject": "cex-hilbert-schmidt-does-not-imply-trace-class",
        "severity": "nonfatal",
        "subclass": "undefined-notation",
        "location": "proof-step-1.2",
        "disposition": "fixed",
        "post_sha256": "aab05649cd589ae406b5aac1ce64396b1f1a1216bc6c79c252a350ecdd7b100e",
        "evidence": "The proof now uses divergence of the singular-value series and does not assign an infinite value to a trace norm defined only on trace-class operators."
      },
      {
        "subject": "ex-rank-one-operator-adjoint-norm-and-trace",
        "severity": "fatal",
        "subclass": "misindexed-representation",
        "location": "proof-step-3.1",
        "disposition": "fixed",
        "post_sha256": "cb365f5d3d2d4d07d17e9b3e95e1c764361d37730a89e36ef63c0a8f29486b5f",
        "evidence": "The sole nuclear term is now at index one, with R_0=0 and R_m=T for every positive m."
      },
      {
        "subject": "thm-trace-class-is-a-two-sided-banach-operator-ideal",
        "severity": "nonfatal",
        "subclass": "citation-inflated",
        "location": "facts-A3",
        "disposition": "fixed",
        "post_sha256": "7adc486545dd05158ae0e795c811d60eee852fb3c22d4826be369541a71e7dbf",
        "evidence": "Unused basis-dependent Hilbert-Schmidt claims were removed; the proof now states only the basis-free adjoint and operator-norm calculus it consumes."
      },
      {
        "subject": "thm-spectral-theorem-for-compact-self-adjoint-operators",
        "severity": "fatal",
        "subclass": "unsupported-net-uniqueness",
        "location": "proof-step-4.1",
        "disposition": "fixed",
        "post_sha256": "2bbb9def687e6bbb58d0ae166a1478ffb2d3b2b8e78f4d84447f7d465d098e45",
        "evidence": "Uniqueness of the finite-subset-net limit is now proved directly by intersecting two tails and applying the triangle inequality."
      },
      {
        "subject": "lem-banach-manifold-differentials-are-chart-independent",
        "severity": "nonfatal",
        "subclass": "premature-quotient-use",
        "location": "proof-order",
        "disposition": "fixed",
        "post_sha256": "38020ed5d49feac9cfaf294f9d7dba0db950b7c33717cbe06e8674e7950e7c06",
        "evidence": "Equivalence, differential well-definedness, and chart-independent operations now precede the quotient-level functoriality assertions."
      },
      {
        "subject": "ex-the-derivative-of-a-bounded-bilinear-map",
        "severity": "fatal",
        "subclass": "ill-typed-specialization",
        "location": "statement-and-proof-step-3.2",
        "disposition": "fixed",
        "post_sha256": "4c90c9a5b0757549ce7075bd300e59428e6c00538e4a30609140b5ed41a927df",
        "evidence": "The diagonal specialization now assumes X=Y, making x↦(x,x) and B(x,x) well typed."
      },
      {
        "subject": "thm-regular-value-theorem-for-banach-manifolds",
        "severity": "fatal",
        "subclass": "missing-maximal-atlas-hypothesis",
        "location": "statement-and-proof-step-5.1",
        "disposition": "fixed",
        "post_sha256": "748554bb32845029b91a6b2296d57861098b5b1cc1fcac1fc45b952f27a2e1cf",
        "evidence": "The domain atlas is now assumed maximal and the straightening chart is proved compatible before maximality makes it a specified-atlas member."
      },
      {
        "subject": "thm-a-transverse-banach-bundle-section-has-a-split-zero-submanifold",
        "severity": "fatal",
        "subclass": "regularity-drop",
        "location": "proof-steps-1.1-to-2.1",
        "disposition": "fixed",
        "post_sha256": "f63eb255a7a19b57489ee19990a0e22aaf9b9586b4e9bc246fa7d0f5e71599c0",
        "evidence": "The local representative remains smooth and the regular-value theorem is applied with k=infinity; its maximal-domain-atlas premise is propagated."
      },
      {
        "subject": "lem-local-finite-dimensional-reduction-for-a-fredholm-map",
        "severity": "fatal",
        "subclass": "unavailable-centred-charts",
        "location": "statement-and-proof-step-1.1",
        "disposition": "fixed",
        "post_sha256": "a79aac150c4df9d333934686c6fb9a9e4f0a495b64a57d40593bcca0b3458719",
        "evidence": "Arbitrary supplied atlas charts are used and recentering occurs only inside the Banach-space representative; translated charts are never asserted to be atlas members."
      },
      {
        "subject": "cex-a-closed-uncomplemented-subspace-is-not-a-split-banach-submanifold",
        "severity": "nonfatal",
        "subclass": "missing-completeness-supplier",
        "location": "facts-F1",
        "disposition": "fixed",
        "post_sha256": "3c2cb854c4add1a406c86b56ece42aa1ae01083b991a18db95523253f66f1fa0",
        "evidence": "Completeness of ell-infinity is proved inline from scalar completeness and Replacement, and c_0 completeness is explicitly supplied before the closed-subspace theorem is used."
      }
    ]
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append_batch",
    "run": "phase-2-remaining-27",
    "entries": [
      {
        "subject": "ex-a-regular-level-set-in-a-banach-space",
        "severity": "fatal",
        "disposition": "pending-owner-repair",
        "location": "Statement, L2, Proof 3.1",
        "supplier_path": [
          "thm-regular-value-theorem-for-banach-manifolds",
          "ex-a-regular-level-set-in-a-banach-space"
        ],
        "finding": "The example invokes the repaired theorem without specifying a maximal smooth atlas on the domain X. Under the library's specified-atlas convention an identity-only atlas need not contain charts straightening every affine fibre. State the standard maximal smooth atlas, or prove the fibre claim directly within an explicitly adequate atlas."
      },
      {
        "subject": "rem-surjectivity-alone-does-not-give-a-banach-submanifold-without-a-split-kernel",
        "severity": "nonfatal",
        "disposition": "pending-owner-repair",
        "location": "Remarks, opening and Bookkeeping bullets",
        "supplier_path": [
          "thm-regular-value-theorem-for-banach-manifolds",
          "rem-surjectivity-alone-does-not-give-a-banach-submanifold-without-a-split-kernel"
        ],
        "finding": "The discussion correctly explains complemented kernels but now omits the theorem's separate maximal-domain-atlas hypothesis. Add that structural hypothesis without weakening the linear warning."
      },
      {
        "subject": "thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues",
        "severity": "fatal",
        "disposition": "pending-owner-repair",
        "location": "Proof 3.1",
        "supplier_path": [
          "lem-nuclear-series-characterizes-trace-norm",
          "thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues"
        ],
        "finding": "The SVD family is indexed only by J={1,...,r} in finite rank, but it is called a nuclear representation without the positive-integer zero padding required by the repaired supplier. Pad u_j=v_j=0 after r before invoking the trace formula."
      },
      {
        "subject": "library/functional-analysis/banach-space-differential-calculus-and-banach-manifolds.md",
        "severity": "nonfatal",
        "disposition": "pending-owner-page-repair",
        "location": "overview lines 38-50",
        "finding": "The page summarizes the regular-value and transverse-zero theorems without the maximal specified-atlas hypothesis now required by their item interfaces. Add the hypothesis to both overview clauses."
      },
      {
        "subject": "library/functional-analysis/banach-space-differential-calculus-and-banach-manifolds-examples.md",
        "severity": "nonfatal",
        "disposition": "pending-owner-page-repair",
        "location": "overview lines 9-33",
        "finding": "Qualify the bilinear diagonal specialization by X=Y; specify a maximal smooth structure for the affine projection fibres; and replace the stale tangent-curve description of the c_0 counterexample by its quotient-dual noncomplementation proof while retaining that ell-infinity is not a library Banach manifold."
      }
    ]
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_change",
    "reason": "The complete mechanically discovered cone contains 43 current consumers and every one has status draft; there is no published consumer finding to add. The pending repairs above are draft-item or draft-page findings and do not belong in the published ledger."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append_batch",
    "run": "phase-2-remaining-27",
    "phase": "initial",
    "round": 1,
    "unit": 4,
    "entries": [
      {
        "subject": "thm-resolvent-is-banach-valued-holomorphic",
        "severity": "fatal",
        "subclass": "logical-validity-or-interface",
        "location": "assigned rejected carrier",
        "disposition": "fixed",
        "post_sha256": "b40a6c9415ac3d5e7072b2ace2f5fa0e7d0e52a1bd161bcb07df4a4eb57df5af",
        "evidence": "The scalar power-series theorem did not type an A-valued derivative. The repair estimates the norm difference-quotient remainder directly from the Neumann series and obtains derivative -R(z,a)^2 without any unstated vector-valued extension."
      },
      {
        "subject": "lem-contour-integral-commutes-with-bounded-linear-maps",
        "severity": "fatal",
        "subclass": "logical-validity-or-interface",
        "location": "assigned rejected carrier",
        "disposition": "fixed",
        "post_sha256": "931ad6647bf5aaa32556958fb1a35cdc54a8ff393b7e1011ace92a5013c298e9",
        "evidence": "A corner tag need not have gamma'(xi), so both old tagged sums were undefined in an allowed case. The repaired sums use the derivative extension v_{k(j)} selected by each refined subinterval, including distinct values on opposite sides of a corner."
      },
      {
        "subject": "def-spectrum-and-resolvent-set-in-a-banach-algebra",
        "severity": "nonfatal",
        "subclass": "logical-validity-or-interface",
        "location": "assigned rejected carrier",
        "disposition": "fixed",
        "post_sha256": "000018c8e1db300c6503c1b5db292ce01dad7b4cbb625057876e7d59fb60e8a7",
        "evidence": "The core definition was sound, but sigma_B(a) was ill-typed for an arbitrary nonclosed subalgebra. Requiring B to be closed and to have the same unit makes it an inherited unital Banach algebra before the spectrum comparison is stated."
      },
      {
        "subject": "def-spectral-radius",
        "severity": "nonfatal",
        "subclass": "logical-validity-or-interface",
        "location": "assigned rejected carrier",
        "disposition": "fixed",
        "post_sha256": "164fe3cd17833eecb297640661d7eac9ba9711f1dfea103d6ad53bf0e7f339c4",
        "evidence": "The monotonicity remark overreached the definition rather than corrupting the core radius. It now assumes a closed same-unit subalgebra, so sigma_B and its real maximum exist and spectral containment yields the stated radius inequality."
      },
      {
        "subject": "def-riesz-spectral-projection",
        "severity": "fatal",
        "subclass": "logical-validity-or-interface",
        "location": "assigned rejected carrier",
        "disposition": "fixed",
        "post_sha256": "f4a8408e1c52cb04134efbe35d41d9e6af8c28490a5432530821cfe7f55d63da",
        "evidence": "The admissible-cycle theorem cannot compare a separating contour with index zero on the complementary spectral part. The repair applies Banach-valued Cauchy vanishing to the locally constant cutoff times the resolvent on a disconnected open domain."
      },
      {
        "subject": "def-point-continuous-and-residual-spectrum",
        "severity": "nonfatal",
        "subclass": "logical-validity-or-interface",
        "location": "assigned rejected carrier",
        "disposition": "fixed",
        "post_sha256": "0ed721c34fdc76339859e1f12b6128394ac1099692ae3d683d8e633eab94e079",
        "evidence": "The equality is true, but the remark attributed it to a supplier that only stated an inclusion. The revised remark derives it: deleting noninjective compression values leaves exactly the injective operators with non-dense range."
      },
      {
        "subject": "thm-riesz-spectral-projection-properties",
        "severity": "nonfatal",
        "subclass": "logical-validity-or-interface",
        "location": "assigned rejected carrier",
        "disposition": "fixed",
        "post_sha256": "8639ea5a023a956f687c1a9e0416c24ca4730aa4734eb03686de748c95ccf265",
        "evidence": "The statement guarded zero summands, but proof steps ignored those guards. Each restriction spectrum and resolvent is now formed only when its invariant summand is nonzero; empty spectral parts assign no spectrum to a zero-space operator."
      },
      {
        "subject": "lem-relations-among-the-five-spectral-parts",
        "severity": "nonfatal",
        "subclass": "logical-validity-or-interface",
        "location": "assigned rejected carrier",
        "disposition": "fixed",
        "post_sha256": "91f776798638401025f57ca717252d1deaeb0aa6347ab7a2219a46b984427e19",
        "evidence": "The supplier omitted the equality promised by its consumer. Compression means non-dense range, and removing point-spectrum values leaves precisely the injective non-dense-range case, so the statement and final proof now include the exact equality."
      },
      {
        "subject": "thm-holomorphic-functional-calculus-homomorphism",
        "severity": "fatal",
        "subclass": "logical-validity-or-interface",
        "location": "assigned rejected carrier",
        "disposition": "fixed",
        "post_sha256": "a5eddeee22b2f2f816435c031b8e5834184d932be261021d3e545f5e85faa873",
        "evidence": "The smooth circle was not an admissible finite polygonal cycle, so it could not compute 1(a). The repair builds a polygonal cycle around a disc containing the spectrum, uses its index for z^{-1}, and primitives for all higher negative powers."
      },
      {
        "subject": "def-approximate-point-and-compression-spectrum",
        "severity": "nonfatal",
        "subclass": "logical-validity-or-interface",
        "location": "assigned rejected carrier",
        "disposition": "fixed",
        "post_sha256": "fad7fce01feee8c16984f887dd7960641fb19fc1bcb9af36df2e0c00b44c9b36",
        "evidence": "A bounded-below operator on Banach spaces has complete and therefore closed range, so the advertised case was impossible. The remark now puts dense nonclosed range in sigma_ap and reserves sigma_cp for non-dense range."
      },
      {
        "subject": "lem-admissible-cycle-around-a-compact-plane-set",
        "severity": "fatal",
        "subclass": "logical-validity-or-interface",
        "location": "assigned rejected carrier",
        "disposition": "fixed",
        "post_sha256": "464fa33d64505b64c432a943c322e1997d50c1bdfcf8818da7fa73254c4a2540",
        "evidence": "The old chain listed whole rectangle boundaries, so deleting individual sides was undefined. The repair directly lists exposed oriented cell sides, proves endpoint cancellation at grid vertices, and derives the index by cancellation of internal side integrals."
      },
      {
        "subject": "def-c-star-algebra",
        "severity": "nonfatal",
        "subclass": "logical-validity-or-interface",
        "location": "assigned rejected carrier",
        "disposition": "fixed",
        "post_sha256": "c25891285cbd876cdca3e042da3c292124cbf556488a71ebeedfaf9ae3c0020f",
        "evidence": "The unconditional norm-uniqueness bullet exceeded the cited theorem's AC, unital, and nonzero hypotheses and was not definitional. It was removed, and the definition now explicitly makes no general norm-uniqueness assertion."
      },
      {
        "subject": "ex-maximal-ideal-space-of-c-of-k",
        "severity": "nonfatal",
        "subclass": "logical-validity-or-interface",
        "location": "assigned rejected carrier",
        "disposition": "fixed",
        "post_sha256": "1a6b858d61271e04cffbb8071e6124a123ae8961a598f3a6abc37c64d1e72bf3",
        "evidence": "Under DC the proof identifies characters with points but does not classify every maximal ideal. The title and page now say character space, and the remarks withhold maximal-ideal terminology unless the later AC correspondence is assumed."
      },
      {
        "subject": "ex-gelfand-kolmogorov-recovers-beta-x-not-x",
        "severity": "nonfatal",
        "subclass": "logical-validity-or-interface",
        "location": "assigned rejected carrier",
        "disposition": "fixed",
        "post_sha256": "037be1c534979a1031ca4d1858fdc73948042b45da8dc55c12b1dcb0ea37f8a4",
        "evidence": "The cited theorem gives only a point/maximal-ideal bijection, not the topology of beta N. The title, conclusion, and owning page now describe a set-theoretic parametrization and expressly say that topology is not reconstructed."
      },
      {
        "subject": "ex-stone-duality-for-a-finite-boolean-algebra",
        "severity": "nonfatal",
        "subclass": "logical-validity-or-interface",
        "location": "assigned rejected carrier",
        "disposition": "fixed",
        "post_sha256": "c2a64c1b30e9cdd7f6e908e1ad403caf83b4cfbf62849e33fbb6463e72bd4a3d",
        "evidence": "The atom claim omitted the permitted one-element Boolean algebra. The proof treats it separately with empty atom set and empty join, and invokes atom existence only for nontrivial finite Boolean algebras; the representation remains valid."
      },
      {
        "subject": "lem-zero-set-ultrafilters-and-stone-cech-points",
        "severity": "fatal",
        "subclass": "logical-validity-or-interface",
        "location": "assigned rejected carrier",
        "disposition": "fixed",
        "post_sha256": "6df87966a9b0ab41d26bd3448e3664e4262a6bac2434e09f3a9bb045fbc208a8",
        "evidence": "The quotient is not continuous for arbitrary u. The repaired fact assumes u vanishes on the common zero set, defines both split functions, and proves continuity at common zeros from the bound of each quotient term by |u|."
      },
      {
        "subject": "ex-maximal-ideal-space-of-the-disc-algebra",
        "severity": "fatal",
        "subclass": "logical-validity-or-interface",
        "location": "assigned rejected carrier",
        "disposition": "fixed",
        "post_sha256": "9266a813ea60418c956b8a276d4a5e6070bff771ca1b1d27fa3eba5583b3c5ed",
        "evidence": "Continuity of an existing uniform limit did not supply a limit, so Banachness was unproved. The repair uses the uniform Cauchy criterion, passes triangle integrals through the limit, and applies Goursat plus Morera to retain holomorphy."
      },
      {
        "subject": "ex-c-zero-of-a-locally-compact-space",
        "severity": "nonfatal",
        "subclass": "logical-validity-or-interface",
        "location": "assigned rejected carrier",
        "disposition": "fixed",
        "post_sha256": "0963ccc90e7ad7124c9e30e5cef0a12a7cf3aa0ec2d15f58f5753c5f44749a5f",
        "evidence": "The sequence-space definition did not type C_0(N). The item now cites the locally compact C_0 definition and proves that compact subsets of discrete N are finite, making its epsilon-level-set condition equivalent to convergence to zero."
      },
      {
        "subject": "lem-extreme-points-of-the-dual-ball-of-c-of-k",
        "severity": "nonfatal",
        "subclass": "logical-validity-or-interface",
        "location": "assigned rejected carrier",
        "disposition": "fixed",
        "post_sha256": "658d3b2ea5f10147e73a96cec0d979cc37beaedd3fd419670a216a7ed6988d85",
        "evidence": "The two restricted measures are mutually singular but need not have disjoint topological supports. The repair distinguishes them by their values on E, uses mutual singularity for variation, and derives the Dirac conclusion from regularity and the zero-one property."
      }
    ]
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append_batch",
    "run": "phase-2-remaining-27",
    "entries": [
      {
        "subject": "cex-spectrum-can-shrink-in-a-larger-banach-algebra",
        "severity": "nonfatal",
        "disposition": "pending-owner-repair",
        "location": "Remarks, larger-algebra bullet",
        "supplier_path": [
          "def-spectrum-and-resolvent-set-in-a-banach-algebra",
          "cex-spectrum-can-shrink-in-a-larger-banach-algebra"
        ],
        "finding": "The concrete comparison uses the closed isometric disc-algebra image and remains valid, but the phrase 'general inclusion for a unital subalgebra' no longer matches the repaired local interface. Qualify it by closedness and the same unit, or explicitly require both ambient spectra to be defined."
      }
    ]
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_change",
    "reason": "The complete mechanically discovered cone contains 143 current item consumers and none is published. Direct interface-use inspection found one draft wording repair, recorded above; all other changed clauses were proof-internal, strengthened hypotheses already met by consumers, or statement-preserving corrections."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append_batch",
    "run": "phase-2-remaining-27",
    "phase": "initial",
    "round": 1,
    "unit": 5,
    "entries": [
      {
        "subject": "thm-bounded-normal-operator-abstract-spectral-theorem",
        "severity": "nonfatal",
        "subclass": "missing-nonempty-interface",
        "location": "fact-A4-and-proof-step-1.2",
        "disposition": "fixed",
        "post_sha256": "d592b32d72f3ddbea3094d819e6796e7a52f66a46e08d7fa0b1fe8655e783937",
        "evidence": "The spectrum input now supplies both nonemptiness and compactness, so K=sigma(T) is a nonempty compact space before the representation theorem is applied."
      },
      {
        "subject": "ex-functional-calculus-for-a-diagonal-operator",
        "severity": "nonfatal",
        "subclass": "ill-typed-eigenvector-interface",
        "location": "fact-A3",
        "disposition": "fixed",
        "post_sha256": "2ec24ec69a486a8f7163def110d1a48ff4428edec64661fbecbb1ad1b62efdb7",
        "evidence": "The calculus property is now stated for a nonzero eigenvector, which first puts its eigenvalue in sigma(T) and makes f(lambda) defined."
      },
      {
        "subject": "lem-polynomial-calculus-is-isometric-for-self-adjoint-operators",
        "severity": "nonfatal",
        "subclass": "unsupported-compactness-restatement",
        "location": "proof-step-1.2",
        "disposition": "fixed",
        "post_sha256": "14ca50d62e880085e60fa62a76482099564d1890473d43ecfa1555ee1b4cf1da",
        "evidence": "The step no longer attributes spectral nonemptiness or compactness to real containment and spectral mapping; the cited norm formula supplies the attained maximum actually used."
      },
      {
        "subject": "thm-self-adjoint-norm-and-spectrum-extrema",
        "severity": "fatal",
        "subclass": "missing-boundedness-hypothesis",
        "location": "statement",
        "disposition": "fixed",
        "post_sha256": "29d47870f9c69bbfa5964fc8cdf1005d999add045663a5e5063fe7b6a193949a",
        "evidence": "The theorem now explicitly assumes T belongs to B(H), ensuring the operator norm is finite and the spectrum is compact so its extrema exist."
      },
      {
        "subject": "def-absolute-value-of-a-bounded-operator",
        "severity": "nonfatal",
        "subclass": "unlicensed-self-adjointness-use",
        "location": "definition-norm-identity",
        "disposition": "fixed",
        "post_sha256": "57e575af50d02bb9bd83d6d8db2fabcd8e14b84c32f89f8bdbdca0cf785c8000",
        "evidence": "The definition proves the positive square root is self-adjoint by polarization before replacing its adjoint-square by its ordinary square in the norm identity."
      },
      {
        "subject": "thm-continuous-functional-calculus-for-bounded-normal-operators",
        "severity": "nonfatal",
        "subclass": "missing-compact-character-space-interface",
        "location": "fact-A1-and-proof-step-1.1",
        "disposition": "fixed",
        "post_sha256": "9653bd23df5c2a07291b9ea7cda7adb907a3bcc15c47ae5553e9017080dce7ce",
        "evidence": "The theorem now cites compact Hausdorffness of the maximal ideal space and the spectrum's nonempty compactness before Stone-Weierstrass is applied."
      },
      {
        "subject": "thm-continuous-functional-calculus-properties",
        "severity": "nonfatal",
        "subclass": "false-dependency-restatement",
        "location": "fact-A1",
        "disposition": "fixed",
        "post_sha256": "f51e26e7e446ba13b1b110e3995cb1416556c1ff448b5d7de4c04c12f8d87880",
        "evidence": "A1 now says the normal and self-adjoint constructions agree on the same input function, not that two arbitrary functions have equal operator values."
      },
      {
        "subject": "thm-spectral-mapping-for-continuous-normal-functional-calculus",
        "severity": "nonfatal",
        "subclass": "false-dependency-restatement",
        "location": "fact-A7",
        "disposition": "fixed",
        "post_sha256": "eeb38a13e958a56ad01f8387ee3c2d9b7ef3340332a76ca8cad9063073f3751f",
        "evidence": "The proof now computes the resolvent of cI directly, avoiding an unsupported and generally false claim that characters separate every commutative Banach algebra."
      },
      {
        "subject": "cex-self-adjointness-cannot-be-dropped-from-the-order-calculus",
        "severity": "nonfatal",
        "subclass": "unsupported-spectral-order-equivalence",
        "location": "proof-step-3.1",
        "disposition": "fixed",
        "post_sha256": "41d2b0816465327aff856092e57614bd273103d10a97fc43d1393298c52a939e",
        "evidence": "The conclusion now rests solely on the explicit Jordan-block quadratic-form witness and does not assert an uncited self-adjoint spectral-order equivalence."
      },
      {
        "subject": "def-cyclic-vector-and-cyclic-normal-operator",
        "severity": "nonfatal",
        "subclass": "zero-space-interface",
        "location": "definition-elementary-properties",
        "disposition": "fixed",
        "post_sha256": "744aaea30735f49742106b638749fb18ef5c1e1a1a21503e31d8170a276c4f6b",
        "evidence": "The zero vector case is separated, while for x nonzero the reducing restriction and star-polynomial approximation prove cyclicity without applying a nonzero-space calculus to {0}."
      },
      {
        "subject": "ex-borel-functional-calculus-defines-a-discontinuous-characteristic-function",
        "severity": "nonfatal",
        "subclass": "unsupported-range-kernel-closedness",
        "location": "fact-A3-and-proof-step-2.1",
        "disposition": "fixed",
        "post_sha256": "1af105de05df39a08ca70e619f07eb43473c40d9662ac5bc67602aa86fc70649",
        "evidence": "The example now proves the indicator multiplier's range, kernel, orthogonality, and closedness directly from almost-everywhere support and the L2 norm."
      },
      {
        "subject": "cex-continuous-functional-calculus-cannot-produce-every-spectral-projection",
        "severity": "nonfatal",
        "subclass": "overgeneralized-conclusion",
        "location": "proof-step-4.1",
        "disposition": "fixed",
        "post_sha256": "d403e987a1f9b070de7e511ee17e371fa2eebb1dab49fcc0bdf737a4aa95870b",
        "evidence": "The conclusion is limited to E([0,1/2]), for which equality would force incompatible one-sided values at 1/2; no universal claim about null projections remains."
      },
      {
        "subject": "ex-sign-and-positive-negative-parts-of-a-self-adjoint-operator",
        "severity": "nonfatal",
        "subclass": "undeclared-real-spectrum-supplier",
        "location": "example-setup-and-fact-A1",
        "disposition": "fixed",
        "post_sha256": "28d1b41f2104f6bfa393c0251917ef88c96d084b2a32ce68e08e584f12264bfb",
        "evidence": "The exact real-spectrum lemma is now a declared dependency, licensing the real scalar functions and identities transported through the Borel calculus."
      },
      {
        "subject": "thm-unitary-equivalence-classified-by-measure-class-and-multiplicity",
        "severity": "nonfatal",
        "subclass": "supplier-domain-null-set-gap",
        "location": "proof-step-2.1",
        "disposition": "fixed",
        "post_sha256": "1739e2bb8be6dfc4ed9dfcc71b3e9d6ea358e7637212864755a88cb9deb2142b",
        "evidence": "Multiplicity functions are replaced by everywhere-positive Borel representatives on their null zero sets before the intertwiner lemma is invoked, without changing any L2 summand."
      },
      {
        "subject": "thm-multiplication-operator-form-of-the-bounded-normal-spectral-theorem",
        "severity": "nonfatal",
        "subclass": "unsupported-restriction-calculus-identification",
        "location": "fact-A3-and-proof-step-1.1",
        "disposition": "fixed",
        "post_sha256": "e5768dd1fbab27701c8541ba2013c130bfa8198889e9856da7563e7dd59d6f85",
        "evidence": "Reducing invariance and star-polynomial approximation now prove both inclusions between the ambient cyclic subspace and the cyclic restricted summand."
      },
      {
        "subject": "ex-spectral-projection-of-an-isolated-eigenvalue-agrees-with-the-riesz-projection",
        "severity": "nonfatal",
        "subclass": "missing-isolated-point-eigenvalue-proof",
        "location": "proof-step-4.2",
        "disposition": "fixed",
        "post_sha256": "22104d36183bcd25cba7e759a35e899f3708c897d91f6668e251d44b1eaa1567",
        "evidence": "The clopen singleton indicator has supremum norm one, so the isometric continuous calculus makes E({lambda}) nonzero; its range is then the nonzero lambda-eigenspace."
      }
    ]
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_change",
    "reason": "The complete declared transitive closure contains 58 current draft consumers and no published consumers; a separate citation scan found no published item directly citing any changed assigned supplier."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append_batch",
    "run": "phase-2-remaining-27",
    "phase": "initial",
    "round": 1,
    "unit": 6,
    "entries": [
      {
        "subject": "def-densely-defined-closed-and-closable-operator",
        "severity": "fatal",
        "subclass": "undeclared-choice-hypothesis",
        "location": "claim-2-and-core",
        "disposition": "fixed",
        "post_sha256": "108659f84bcd5590fb3b7f2fa9567959db7056cb42eba0d921a88cf437f19fc4",
        "evidence": "Countable Choice is now explicit for selecting graph points in shrinking balls, while the core equivalence uses the graph isometry and topological closures directly."
      },
      {
        "subject": "def-infinitesimal-generator-of-a-unitary-group",
        "severity": "fatal",
        "subclass": "missing-real-parameter-limit-interface",
        "location": "definition",
        "disposition": "fixed",
        "post_sha256": "6d7e372515d42fbb1889c9c2691e33295502c9f727e593509a971dff9ad7fd5a",
        "evidence": "The two-sided derivative is now defined by its punctured real epsilon-delta norm condition and equivalently by metric continuity after extension at zero."
      },
      {
        "subject": "def-adjoint-of-a-densely-defined-unbounded-operator",
        "severity": "nonfatal",
        "subclass": "invalid-uniqueness-argument",
        "location": "definition-uniqueness-paragraph",
        "disposition": "fixed",
        "post_sha256": "d0033a8e6e083fe1ecb16b5a53eb7bef38b92913124284c121c3fe42bc852ed8",
        "evidence": "Representing-vector uniqueness now uses inner products with x on the dense domain, continuity to all of H, and positive definiteness, rather than the operator range."
      },
      {
        "subject": "def-strongly-continuous-one-parameter-unitary-group",
        "severity": "fatal",
        "subclass": "missing-real-parameter-continuity-interface",
        "location": "definition",
        "disposition": "fixed",
        "post_sha256": "d1a0e9c7c9372bad9381c8490793f7ab3758d1262c2c39c7dd0416ed9fb4b095",
        "evidence": "Orbit continuity now uses the metric-continuity interface from the real line to H, and the weak/strong equivalence includes both directions."
      },
      {
        "subject": "def-norm-and-strong-resolvent-convergence",
        "severity": "fatal",
        "subclass": "missing-hypothesis",
        "location": "definition-well-posedness",
        "disposition": "fixed",
        "post_sha256": "45d16d076beb5d447e145ba5446c6518cd24863cd8963a4f2c856ab5075f2c41",
        "evidence": "Countable Choice is now assumed before the self-adjoint resolvent estimate is used to make every displayed nonreal resolvent well defined."
      },
      {
        "subject": "def-cayley-transform-of-a-self-adjoint-operator",
        "severity": "fatal",
        "subclass": "missing-hypothesis",
        "location": "definition-well-posedness",
        "disposition": "fixed",
        "post_sha256": "9bef36159cde2801dc6d9e0888d11f7c57fadf0f74dd10838f39181daded99dc",
        "evidence": "Countable Choice is now explicit before the cited self-adjoint resolvent theorem supplies the inverse of T+i used in the Cayley formula."
      },
      {
        "subject": "thm-self-adjointness-range-criterion",
        "severity": "nonfatal",
        "subclass": "resolvent-sign-error",
        "location": "proof-step-2.2",
        "disposition": "fixed",
        "post_sha256": "47048570cd93f9794c7fcf8891972923361e80f8ef6acf7c1a9796354ee342bd",
        "evidence": "The proof now concludes -i is in the resolvent set from invertibility of T+i, consistently with the convention R_T(z)=(z-T)^{-1}."
      },
      {
        "subject": "ex-position-operator-on-l-two-of-r",
        "severity": "nonfatal",
        "subclass": "supplier-hypothesis-overstatement",
        "location": "fact-A1",
        "disposition": "fixed",
        "post_sha256": "a57b44f99d7ed8b020ab6eeb984def6d8fc8580b571e3dd23e08d49f7291722a",
        "evidence": "A1 now states the multiplication theorem's sigma-finiteness and almost-everywhere finite real-multiplier hypotheses, both satisfied by the application."
      },
      {
        "subject": "def-pure-point-absolutely-continuous-and-singular-continuous-spectral-subspaces",
        "severity": "nonfatal",
        "subclass": "omitted-degenerate-case",
        "location": "definition-setup",
        "disposition": "fixed",
        "post_sha256": "e13221e8bd55a514dbd68dc8469b275a29546024ea8c47c46b67a4140cf1311f",
        "evidence": "The zero Hilbert space now receives its unique zero PVM directly, while the nonzero case invokes the spectral theorem and the measure-decomposition dependency explicitly."
      },
      {
        "subject": "thm-kato-rellich",
        "severity": "nonfatal",
        "subclass": "zero-index-division",
        "location": "proof-step-1.2",
        "disposition": "fixed",
        "post_sha256": "d7f71794b88798ddfd0d6c0c74f8d05d6e8f44290fa406721bed658daf064b3c",
        "evidence": "The spectral exhaustion now uses n+1, producing defined increasing bounded intervals for every natural index and the same union (-infinity,c)."
      },
      {
        "subject": "thm-spectral-theorem-for-unbounded-self-adjoint-operators",
        "severity": "fatal",
        "subclass": "ill-typed-scalar-vector-identity",
        "location": "proof-step-1.2",
        "disposition": "fixed",
        "post_sha256": "906898720c9416089d0b79d91dd5698a983ed118e0eff20aa48e9aeb8c81c345",
        "evidence": "The point spectral projection is now identified with the eigenspace projection through bounded-calculus norm identities, which rigorously yields F({1})=0."
      },
      {
        "subject": "ex-periodic-derivative-and-its-unitary-translation-group",
        "severity": "nonfatal",
        "subclass": "zero-index-division",
        "location": "proof-step-3.1",
        "disposition": "fixed",
        "post_sha256": "3d47ac624478cf4342d7e6984f13063900673fdbe288bd95f07c98519d286e60",
        "evidence": "The Borel derivative representative now uses n+1, so every continuous difference quotient is defined and its almost-everywhere limit is still f'."
      }
    ]
  },
  {
    "ledger": "defect",
    "supplier_id": "cor-one-dimensional-brownian-motion-hits-every-point-almost-surely",
    "consumer_id": "cex-brownian-hitting-time-is-almost-surely-finite-but-not-integrable",
    "path": [
      "cor-one-dimensional-brownian-motion-hits-every-point-almost-surely",
      "cex-brownian-hitting-time-is-almost-surely-finite-but-not-integrable"
    ],
    "affected_clause": "Counterexample Given and steps 1.1-1.2",
    "finding": "The counterexample defines tau_a from an arbitrary Brownian version, but both repaired suppliers establish measurability, almost-sure finiteness, and infinite mean only for their fixed everywhere-continuous zero-start representative.",
    "required_repair": "Adopt the same normalized representative before defining tau_a, then invoke the repaired finiteness corollary and density example for that exact random time.",
    "status": "open",
    "published": false
  },
  {
    "ledger": "defect",
    "supplier_id": "cor-one-dimensional-brownian-motion-hits-every-point-almost-surely",
    "consumer_id": "cor-one-dimensional-brownian-motion-is-recurrent",
    "path": [
      "cor-one-dimensional-brownian-motion-hits-every-point-almost-surely",
      "cor-one-dimensional-brownian-motion-is-recurrent"
    ],
    "affected_clause": "Statement, F1-F2, and Proof step 1.1",
    "finding": "The recurrence carrier neither fixes the continuous representative required by F1 nor justifies applying a deterministic-level hitting theorem directly to the F_n-measurable random level c-B_n inside a conditional probability.",
    "required_repair": "Normalize B once, express the continuous-path hitting event as a Borel function of the known state and independent future noise, and use the future-path/conditioning kernel whose value is one for every deterministic state.",
    "status": "open",
    "published": false
  },
  {
    "ledger": "defect",
    "supplier_id": "cor-one-dimensional-brownian-motion-hits-every-point-almost-surely",
    "consumer_id": "ex-exit-side-probability-from-an-interval",
    "path": [
      "cor-one-dimensional-brownian-motion-hits-every-point-almost-surely",
      "ex-exit-side-probability-from-an-interval"
    ],
    "affected_clause": "Example definition of T_c and Fact F4",
    "finding": "The example starts from an arbitrary Brownian process while its exit theorem and repaired hitting corollary use the normalized canonical continuous law; the displayed uncountable-time hitting variables therefore lack the required representative convention.",
    "required_repair": "Formulate the example under the canonical continuous P_0 law, or explicitly normalize B before defining T_3 and T_{-2}; then the exit theorem and finiteness facts apply to the same hitting times.",
    "status": "open",
    "published": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "run": "phase-2-remaining-27",
    "class": "accuracy",
    "subclass": "missing-hypothesis",
    "severity": "nonfatal",
    "location": "definition commentary",
    "subject": "def-pontryagin-classes-by-complexification",
    "supplier": "cor-odd-chern-classes-of-a-complexified-real-bundle-are-two-torsion",
    "disposition": "pending-owner-impact-review",
    "finding": "The definition's closing commentary invokes the repaired odd-Chern two-torsion corollary for an arbitrary real bundle on a CW or CW-type base, while that corollary now explicitly requires a numerable bundle over a path-connected paracompact Hausdorff CW complex. The odd-class sentence is explanatory and not needed to define p_i, so the definition itself remains usable.",
    "evidence": [
      {
        "path": "items/def-pontryagin-classes-by-complexification.md",
        "anchor": "Definition, closing paragraph"
      },
      {
        "path": "items/cor-odd-chern-classes-of-a-complexified-real-bundle-are-two-torsion.md",
        "anchor": "Statement"
      }
    ],
    "repair_strategy": "Qualify the explanatory odd-Chern sentence by the corollary's exact numerability and base hypotheses, or omit it because no odd Chern class enters the definition. Preserve the even-class definition and rank cutoff.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  }
]

For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. Downstream is an array of item IDs; include consumers reached through changed intermediate items.

Assigned input:
[
  "lem-a-dominant-cyclic-highest-weight-module-has-a-unique-simple-quotient",
  "prop-finite-dimensional-representations-of-a-complex-semisimple-lie-algebra-decompose-into-weight-spaces",
  "lem-every-finite-dimensional-irreducible-representation-has-a-highest-weight-vector",
  "lem-highest-weight-of-a-finite-dimensional-module-is-dominant-integral",
  "prop-a-finite-dimensional-irreducible-module-is-generated-by-any-highest-weight-vector",
  "prop-dominant-integral-weights-are-nonnegative-combinations-of-fundamental-weights",
  "lem-simple-root-integrability-bounds-the-dominant-cyclic-module",
  "thm-finite-dimensionality-of-lambda-highest-weight-simple-modules-for-dominant-integral-lambda",
  "lem-integrability-relations-for-a-dominant-highest-weight",
  "prop-the-highest-weight-space-of-an-irreducible-module-is-one-dimensional",
  "thm-simple-highest-weight-modules-are-classified-by-their-highest-weight",
  "thm-highest-weight-classification-of-finite-dimensional-irreducible-representations",
  "prop-root-and-weight-lattice-sandwich-for-a-compact-semisimple-group",
  "thm-a-based-root-system-is-determined-up-to-isomorphism-by-its-cartan-matrix",
  "thm-existence-theorem-for-complex-semisimple-lie-algebras",
  "thm-isomorphism-theorem-for-complex-semisimple-lie-algebras",
  "thm-compact-connected-semisimple-lie-groups-are-classified-up-to-isogeny-by-root-systems",
  "thm-compact-connected-lie-groups-are-classified-by-root-data",
  "prop-central-quotients-correspond-to-intermediate-character-lattices",
  "ex-character-lattices-of-su-two-and-so-three",
  "cex-su-two-and-so-three-share-a-root-system-but-are-not-isomorphic",
  "cex-symmetric-need-not-be-self-adjoint",
  "prop-irreducibility-corresponds-to-connectedness-of-the-dynkin-diagram",
  "lem-dynkin-diagrams-of-irreducible-finite-root-systems-are-trees-with-controlled-branching",
  "thm-classification-of-irreducible-reduced-crystallographic-root-systems",
  "thm-existence-of-each-classified-root-system",
  "prop-root-systems-of-the-classical-complex-lie-algebras",
  "ex-standard-and-dual-representations-of-sl-n-by-highest-weights",
  "ex-symmetric-powers-as-highest-weight-modules",
  "cex-the-full-weight-lattice-does-not-integrate-to-every-central-quotient-group",
  "thm-existence-of-a-maximal-orthonormal-family",
  "def-deficiency-subspaces-and-deficiency-indices",
  "thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set",
  "thm-von-neumann-self-adjoint-extension-parameterization",
  "cor-self-adjoint-extension-exists-iff-deficiency-indices-agree",
  "lem-laplace-resolvents-of-a-unitary-group",
  "lem-generator-of-a-unitary-group-is-skew-adjoint",
  "thm-stone-one-parameter-unitary-groups",
  "ex-periodic-derivative-and-its-unitary-translation-group",
  "cex-the-minimal-derivative-is-symmetric-not-self-adjoint",
  "cex-the-natural-filtration-need-not-be-right-continuous-before-augmentation",
  "cor-brownian-square-martingale",
  "cex-the-ordinary-chain-rule-fails-for-brownian-motion",
  "ex-rank-one-operator-adjoint-norm-and-trace",
  "thm-hilbert-schmidt-operators-are-compact",
  "thm-hilbert-schmidt-operators-form-a-two-sided-ideal",
  "thm-trace-class-iff-product-of-two-hilbert-schmidt-operators",
  "thm-trace-class-is-a-two-sided-banach-operator-ideal",
  "thm-cyclicity-of-the-trace",
  "cex-trace-of-products-is-not-cyclic-without-summability",
  "prop-bracket-relations-and-killing-signs-in-a-cartan-decomposition",
  "prop-complexification-preserves-semisimplicity",
  "thm-existence-of-a-cartan-involution",
  "def-cartan-involution-of-a-real-semisimple-lie-algebra",
  "def-cartan-decomposition-of-a-real-semisimple-lie-algebra",
  "ex-cartan-involution-and-k-plus-p-for-sl-n-r",
  "thm-conjugacy-of-cartan-involutions",
  "thm-every-real-cartan-subalgebra-is-conjugate-to-a-theta-stable-one",
  "def-theta-stable-cartan-subalgebra-and-compact-split-parts",
  "ex-compact-and-split-cartan-subalgebras-of-sl-two-r",
  "prop-real-cartan-subalgebras-need-not-be-conjugate",
  "cex-two-nonconjugate-real-cartan-subalgebras",
  "thm-marsden-weinstein-meyer-symplectic-reduction",
  "cex-zero-angular-momentum-level-with-nonfree-points-is-singular",
  "cex-zero-euler-class-does-not-in-general-imply-a-nowhere-zero-section",
  "lem-linear-combinations-of-compact-operators-are-compact",
  "def-calkin-algebra",
  "thm-atkinson",
  "cor-atkinson-in-calkin-algebra-language",
  "thm-relative-consistency-bpi-without-urysohn",
  "cor-bpi-does-not-imply-dmc",
  "lem-characteristic-exponential-for-a-continuous-local-martingale-with-clock-t",
  "thm-brownian-filtration-martingale-representation",
  "cor-brownian-filtration-local-martingales-have-continuous-versions",
  "cor-brownian-law-of-the-iterated-logarithm-at-zero",
  "thm-brownian-zero-set-has-no-isolated-points",
  "cor-brownian-zero-set-is-uncountable",
  "thm-relative-consistency-countable-choice-without-urysohn",
  "cor-brunner-models-also-refute-tietze-extension",
  "lem-singular-values-equal-approximation-numbers",
  "cor-compact-operator-iff-approximation-numbers-tend-to-zero",
  "cor-complete-reducibility-for-compact-lie-groups",
  "def-coefficient-groups-of-a-generalized-homology-theory",
  "prop-degree-d-sphere-maps-act-by-multiplication-by-d-in-any-generalized-theory",
  "lem-the-ahss-first-differential-is-the-cellular-coboundary",
  "thm-cohomological-atiyah-hirzebruch-spectral-sequence",
  "cor-complex-k-theory-ahss",
  "thm-cartan-killing-classification-of-complex-simple-lie-algebras",
  "cor-complex-semisimple-lie-algebras-are-classified-by-finite-disjoint-unions-of-dynkin-diagrams",
  "cor-critical-holder-boundary-at-zero-from-the-brownian-lil",
  "cor-deterministic-ito-integrals-are-gaussian",
  "cor-dmc-is-not-provable-in-zf",
  "def-convolution-operator-associated-to-a-continuous-function-on-a-compact-group",
  "lem-compact-lie-groups-admit-central-continuous-approximate-identities",
  "def-matrix-coefficient-and-character-of-a-compact-group-representation",
  "thm-l-two-kernels-give-hilbert-schmidt-operators",
  "lem-continuous-convolution-operators-are-hilbert-schmidt-and-compact",
  "lem-compact-convolution-operators-decompose-into-finite-dimensional-invariant-subspaces",
  "thm-schur-orthogonality-for-compact-lie-groups",
  "thm-peter-weyl-for-compact-lie-groups",
  "cor-matrix-coefficients-are-uniformly-dense-in-continuous-functions-on-a-compact-lie-group",
  "cor-finite-dimensional-unitary-representations-separate-points-of-a-compact-lie-group",
  "cor-every-compact-lie-group-is-isomorphic-to-a-closed-matrix-lie-group",
  "cor-every-finite-dimensional-representation-is-a-direct-sum-of-highest-weight-modules",
  "cor-finite-rank-operators-are-norm-dense-in-compact-hilbert-space-operators",
  "thm-brownian-markov-property",
  "cor-heat-semigroup-martingale",
  "cor-irreducible-characters-are-orthonormal-class-functions",
  "thm-fredholm-index-is-additive",
  "thm-fredholm-index-is-locally-constant",
  "thm-fredholm-index-is-stable-under-compact-perturbations",
  "cor-lambda-identity-minus-compact-has-index-zero",
  "thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group",
  "cor-maximal-compact-subgroups-exist-and-are-conjugate-in-a-connected-finite-center-semisimple-lie-group",
  "cor-one-dimensional-brownian-motion-is-recurrent",
  "cor-orthonormal-eigenbasis-for-a-compact-self-adjoint-operator",
  "cor-rank-of-a-compact-connected-lie-group-is-well-defined",
  "def-regular-root-hyperplanes",
  "prop-centralizer-dimension-from-vanishing-roots",
  "cor-regular-elements-form-a-dense-zariski-open-subset-of-a-cartan-subalgebra",
  "prop-conjugacy-classes-meet-a-fixed-maximal-torus-in-weyl-orbits",
  "thm-highest-weight-classification-for-a-compact-connected-lie-group",
  "cor-representation-ring-has-the-dominant-character-basis",
  "cor-separable-infinite-dimensional-hilbert-space-is-ell-two",
  "lem-riesz-schauder-ascent-and-descent-stabilize",
  "thm-fredholm-alternative-for-identity-minus-compact",
  "thm-riesz-schauder-spectrum-of-a-compact-operator",
  "cor-spectrum-of-a-compact-operator-is-countable-with-only-zero-as-possible-accumulation",
  "cor-square-integrable-brownian-terminal-variables-have-ito-representations",
  "def-norm-and-strong-resolvent-convergence",
  "lem-resolvent-star-algebra-is-dense-in-c-zero",
  "thm-continuous-functional-calculus-under-resolvent-convergence",
  "cor-unitary-groups-converge-under-strong-resolvent-convergence",
  "lem-collectionwise-normal-moore-spaces-are-screenable",
  "lem-sigma-cellular-base-yields-a-compatible-metric",
  "thm-collectionwise-normal-moore-spaces-are-metrizable",
  "def-moore-spaces-and-developments",
  "lem-ladder-separation-from-hyp",
  "def-dodd-jensen-covering-and-square-package",
  "thm-dodd-jensen-covering-supplies-fleissner-hyp-data",
  "def-fleissner-hyp-covering-interface",
  "thm-fleissner-normal-moore-space-construction",
  "thm-ch-normal-nonmetrizable-moore-space",
  "cor-v-equals-l-refutes-normal-moore-space-conjecture",
  "cor-vector-levy-characterization",
  "cor-zero-level-symplectic-reduction-and-dimension-formula",
  "cor-zf-does-not-prove-urysohn-lemma",
  "thm-positive-square-root",
  "def-absolute-value-of-a-bounded-operator",
  "def-approximable-operator",
  "def-point-continuous-and-residual-spectrum",
  "lem-relations-among-the-five-spectral-parts",
  "def-approximate-point-and-compression-spectrum",
  "def-banach-algebra-valued-contour-integral",
  "thm-multidimensional-ito-formula-for-brownian-driven-processes",
  "thm-space-time-harmonic-functions-yield-brownian-local-martingales",
  "def-brownian-generator",
  "thm-cayley-transforms-connect-theta-stable-cartans-in-the-classification",
  "def-cayley-transform-of-a-theta-stable-cartan-subalgebra",
  "def-characteristic-class-as-a-universal-natural-bundle-class",
  "def-chern-character-of-a-complex-vector-bundle",
  "def-cyclic-vector-and-cyclic-normal-operator",
  "def-discrete-and-essential-spectrum-of-a-self-adjoint-operator",
  "def-fredholm-map-between-banach-manifolds",
  "thm-chern-character-is-a-natural-ring-homomorphism-on-k-zero",
  "def-graded-chern-character-by-suspension-and-bott-periodicity",
  "lem-admissible-cycle-around-a-compact-plane-set",
  "lem-contour-integral-commutes-with-bounded-linear-maps",
  "lem-banach-valued-cauchy-integral-vanishes",
  "lem-holomorphic-functional-calculus-is-contour-independent",
  "thm-holomorphic-functional-calculus-homomorphism",
  "thm-holomorphic-spectral-mapping",
  "def-holomorphic-functional-calculus",
  "thm-kernel-of-the-gelfand-transform-is-the-radical",
  "def-jacobson-radical-and-semisimple-commutative-banach-algebra",
  "prop-cartan-decomposition-gives-the-invariant-metric-and-curvature-of-g-mod-k",
  "thm-cartan-decomposition-identifies-p-with-the-noncompact-symmetric-space",
  "def-riemannian-symmetric-pair-of-noncompact-type",
  "thm-maximal-abelian-subspaces-of-p-are-conjugate-by-k",
  "def-maximal-split-abelian-subspace-and-real-rank",
  "thm-restricted-root-space-decomposition",
  "def-restricted-root-and-restricted-root-space",
  "thm-iwasawa-decomposition-on-the-lie-algebra-level",
  "def-positive-restricted-roots-and-nilpotent-n-algebra",
  "def-pure-point-absolutely-continuous-and-singular-continuous-spectral-subspaces",
  "lem-solovay-almost-disjoint-extension-under-ma",
  "thm-bing-q-set-moore-space-is-normal-and-nonmetrizable",
  "lem-ma-produces-an-uncountable-q-set",
  "def-q-sets-and-heath-moore-space-interface",
  "def-relative-boundedness-with-respect-to-an-operator",
  "def-relative-compactness-with-respect-to-an-operator",
  "ex-classical-root-systems-in-euclidean-coordinates",
  "ex-weyl-groups-of-b-n-and-d-n-as-signed-permutation-groups",
  "prop-restricted-root-systems-may-be-nonreduced",
  "thm-restricted-weyl-group-is-the-reflection-group-of-the-restricted-root-system",
  "def-restricted-weyl-group",
  "thm-riesz-spectral-projection-properties",
  "def-riesz-spectral-projection",
  "def-vogan-diagram",
  "thm-vogan-diagram-of-a-real-semisimple-lie-algebra-is-well-defined-up-to-equivalence",
  "thm-classification-of-real-forms-by-vogan-diagrams",
  "thm-vogan-and-satake-diagrams-give-equivalent-real-form-classifications",
  "def-satake-diagram",
  "thm-shelah-ch-omega-one-sweet-construction",
  "lem-shelah-real-name-capture-and-coded-meagre-unions",
  "def-shelah-hereditarily-ordinal-sequence-definable-model",
  "def-smooth-banach-vector-bundle-and-section",
  "lem-maximal-orthogonal-family-of-cyclic-reducing-subspaces",
  "thm-cyclic-spectral-representation",
  "thm-multiplication-operator-form-of-the-bounded-normal-spectral-theorem",
  "def-spectral-multiplicity-function-in-the-separable-case",
  "prop-weyl-jacobian-is-well-defined-and-weyl-invariant",
  "thm-weyl-integration-formula",
  "def-weyl-jacobian-on-a-maximal-torus",
  "lem-maximal-ideals-of-c-of-x-and-zero-set-ultrafilters",
  "thm-gelfand-kolmogorov-for-rings-of-continuous-functions",
  "def-zero-set-filter-and-zero-set-ultrafilter",
  "ex-a-nonreduced-bc-root-system-from-a-real-form",
  "lem-local-finite-dimensional-reduction-for-a-fredholm-map",
  "ex-a-projection-with-finite-dimensional-kernel-is-fredholm",
  "thm-regular-value-theorem-for-banach-manifolds",
  "ex-a-regular-level-set-in-a-banach-space",
  "thm-banach-stone",
  "ex-banach-stone-weighted-composition-isometries",
  "ex-bounded-operators-form-a-noncommutative-banach-algebra",
  "thm-two-sided-exit-probability-for-brownian-motion",
  "ex-brownian-hitting-probability-from-an-exponential-martingale",
  "ex-brownian-path-p-variation-threshold",
  "ex-brownian-transition-density-and-semigroup-convolution",
  "ex-c-zero-of-a-locally-compact-space",
  "ex-cartan-subalgebra-and-roots-of-sl-two",
  "ex-chern-class-of-tautological-and-hyperplane-lines-on-complex-projective-space",
  "lem-universal-complex-flag-bundle-is-bt-n",
  "ex-chern-classes-of-a-sum-of-universal-complex-lines",
  "ex-complex-k-ahss-for-a-closed-oriented-surface",
  "lem-pairings-of-skeletal-exact-couples-induce-multiplicative-ahss",
  "thm-multiplicative-ahss-for-a-multiplicative-generalized-theory",
  "lem-complexified-tautological-line-resolves-real-projective-k-theory-extensions"
]


