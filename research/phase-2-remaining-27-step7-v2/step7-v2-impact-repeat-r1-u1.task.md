# Step 7 repair: impact-repeat, round 1, unit 1

Read briefs/step7-owner-repair.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-remaining-27-step7-v2/impact-repeat-1.json.

Write only your assigned item files, genuinely required new prerequisite items, their owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-remaining-27-step7-v2/step7-v2-impact-repeat-r1-u1.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Read all cited suppliers and relevant consumers. Repair confirmed fatal defects fully. Identify all downstream consumers, including published items.

Examine every assigned downstream item, including published items. Assignment requires impact review, not an edit. Leave a sound consumer byte-for-byte unchanged and explain why it is unaffected. Repair only when the supplier change makes the consumer logically invalid or inaccurate, and then make the smallest logically sufficient change without stylistic or unrelated rewriting. Work supplier-before-consumer. Necessary published repairs are authorized by the owner for this impact wave. Reconcile only proof contracts, dependencies, page metadata and publication audit evidence actually invalidated by a necessary repair. Reference-only candidates require examination of the actual cited clause, not automatic transitive propagation; declare genuine missing load-bearing dependencies and report downstream effects of necessary repairs.

Return JSON {run,phase,round,unit,input_sha256:"feac14180eedce0a9e4388479d41a241e9a232d56e83bad78ae6652f4045d57d",decisions:[],reviews:[],created_items:[],downstream:[]}. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters); unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run phase-2-remaining-27 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

Owner repair units run in parallel with disjoint item ownership. Follow the shared metadata lock protocol in briefs/step7-owner-repair.md before editing pages, contracts, manifests, registry/index or the published-consumer-supplier ledger; reread shared files after acquiring the lock and release promptly. Maintain the canonical deduplicated classification index and exact supplier/evidence links. Resolve supplied ledger proposals; do not silently discard them. Do not write judge verdicts or shared adjudication JSONL. Unit 1 also reconciles initial-adjudicator ledger proposals whose item has no downstream owner assignment. Record unresolved ledger work honestly in your report; it blocks the final gate.

Adjudicator ledger proposals requiring reconciliation:
[
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append_batch",
    "run": "phase-2-remaining-27",
    "phase": "repeat",
    "round": 1,
    "unit": 1,
    "entries": [
      {
        "subject": "cor-separable-infinite-dimensional-hilbert-space-is-ell-two",
        "severity": "nonfatal",
        "subclass": "supplier-scope-overstatement",
        "location": "fact-A6",
        "disposition": "fixed",
        "post_sha256": "00b20740e32ba1878a0a6377826973133e37736dab4e1b6ba39d813e184d5da8",
        "evidence": "A6 now states finite Pythagoras with an explicit finite list; proof step 3.2 uses it only for the finite index interval n <= k < m."
      }
    ]
  },
  {
    "ledger": "published-consumer-supplier",
    "supplier_ids": [
      "cor-separable-infinite-dimensional-hilbert-space-is-ell-two"
    ],
    "audit_status": "complete",
    "finding": "The canonical item, library-page, and article scan found no item or published consumer of this corollary. Its sole canonical occurrence outside its own carrier is its unchanged placement on the draft owning page.",
    "published_consumers": []
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append_batch",
    "run": "phase-2-remaining-27",
    "phase": "repeat",
    "round": 1,
    "unit": 10,
    "entries": [
      {
        "subject": "lem-compact-fibre-numerable-bundle-totals-are-paracompact-hausdorff-of-cw-type",
        "severity": "nonfatal",
        "subclass": "boundary-case-misidentification",
        "location": "proof-step-2.1",
        "disposition": "fixed",
        "post_sha256": "8fa63a0113680bfde8e724861426a30ef6f917067a33d0135501a2d7edd0c19b",
        "evidence": "The boundary clause now identifies the singleton projective fiber as RP^0={*} and the empty convention as RP^{-1}=empty; both retain the compact finite-CW conclusion."
      },
      {
        "subject": "def-real-flag-bundle-and-stiefel-whitney-roots",
        "severity": "nonfatal",
        "subclass": "supplier-scope-overstatement",
        "location": "fact-F6",
        "disposition": "fixed",
        "post_sha256": "5ac1b72797cdef41a693717440c85fd3947c40e02cde440e2d2b79a2a66d4b18",
        "evidence": "F6 now makes CW-type preservation conditional on CW-type base and fiber, then verifies that every stage fiber RP^{r-1} is a compact finite CW complex."
      },
      {
        "subject": "thm-real-splitting-principle-with-mod-two-injective-pullback",
        "severity": "nonfatal",
        "subclass": "missing-base-change-derivation",
        "location": "proof-step-1.3",
        "disposition": "fixed",
        "post_sha256": "200417f569383a58c574a42c6dd8aa4c190c4acdb25fdddafa083afed480e80e",
        "evidence": "Step 1.3 constructs P(h^*G) as the pullback of P(G) in bundle charts and checks pullback compatibility for tautological lines, metrics, complements, and the iterated flag bundle."
      },
      {
        "subject": "ex-euler-class-of-zero-and-trivial-positive-rank-bundles",
        "severity": "nonfatal",
        "subclass": "unverified-orientation-hypothesis",
        "location": "fact-F3-and-proof-step-1.2",
        "disposition": "fixed",
        "post_sha256": "ecf7aafa95d53fbb30126b8da281a3c51c2d0c0be49a5d6add725a14b632e190",
        "evidence": "The global product chart now supplies the constant generator 1_R of the orientation local system, and step 1.2 explicitly applies the vanishing theorem to that product R-orientation."
      },
      {
        "subject": "thm-naturality-orientation-sign-and-whitney-product-for-euler-classes",
        "severity": "nonfatal",
        "subclass": "false-pair-identification",
        "location": "proof-step-1.3",
        "disposition": "fixed",
        "post_sha256": "f839206d83c07a398a2fe0e1d86be4b504425945e49d85b5fbf723817ab999a6",
        "evidence": "Step 1.3 now uses the maximum-norm product pair and the supplied radial homeomorphism to the direct-sum metric pair; the map fixes the zero section, so the Euler product pullback is well typed."
      }
    ]
  },
  {
    "ledger": "published-consumer-supplier",
    "supplier_ids": [
      "lem-compact-fibre-numerable-bundle-totals-are-paracompact-hausdorff-of-cw-type",
      "def-real-flag-bundle-and-stiefel-whitney-roots",
      "thm-real-splitting-principle-with-mod-two-injective-pullback",
      "ex-euler-class-of-zero-and-trivial-positive-rank-bundles",
      "thm-naturality-orientation-sign-and-whitney-product-for-euler-classes"
    ],
    "audit_status": "complete",
    "finding": "The whole-library dependency and citation closure found 58 downstream item candidates, all draft and none published. Direct consumers use only the unchanged conclusions: compact-CW projective fibers satisfy the repaired total-space hypotheses; flag and splitting consumers use the same admissibility, splitting, and injectivity conclusions; Euler consumers use the same naturality, sign, and Whitney-product conclusions. No consumer repeats the repaired false pair identification or boundary convention, so no downstream edit is required.",
    "published_consumers": []
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append_batch",
    "run": "phase-2-remaining-27",
    "phase": "repeat",
    "round": 1,
    "unit": 11,
    "entries": [
      {
        "subject": "ex-weyl-reflection-in-sl-two",
        "severity": "fatal",
        "subclass": "unbound-root-triple-specialization",
        "location": "given-and-step-2.1",
        "disposition": "fixed",
        "post_sha256": "a16238fde9c38c8792e9f30ce28470da54fa41e38158a450ac13e7cac79008b0",
        "evidence": "The example now explicitly chooses the standard sl_2 root triple (e,f,h), defines its local inner automorphism, and verifies the conjugation action by the displayed matrix product."
      },
      {
        "subject": "lem-killing-length-of-a-root-is-nonzero",
        "severity": "fatal",
        "subclass": "supplier-interface-overstatement",
        "location": "fact-L4-and-step-1.2",
        "disposition": "fixed",
        "post_sha256": "3b2bf86974168ef3b30874980bce52c83caa3728a7ea5bce941a64d23efc63ce",
        "evidence": "L4 now states only Lie's common-eigenvector theorem; step 1.2 iterates it on invariant quotients to obtain the full flag needed for simultaneous upper triangularity."
      },
      {
        "subject": "prop-bracket-of-opposite-root-spaces-is-the-root-line-in-the-cartan-subalgebra",
        "severity": "fatal",
        "subclass": "unsupported-zero-weight-identification",
        "location": "fact-L1-and-step-1.1",
        "disposition": "fixed",
        "post_sha256": "c776a21d01cca88125305f9fb2b82ebaba56e473be540949cdebe231ab0f7af0",
        "evidence": "The proof now derives g_0=h from Cartan maximal torality, abelianness, directness of the root decomposition, and the nonzero-root condition before using bracket containment."
      },
      {
        "subject": "prop-duality-exchanges-b-n-and-c-n-and-fixes-the-other-types",
        "severity": "fatal",
        "subclass": "supplier-interface-overstatement",
        "location": "fact-L2-and-step-2.1",
        "disposition": "fixed",
        "post_sha256": "c7e7cc35fb92164d7983438e3a440ea70cf1dba66d0e704d2fe9f7013a2b1674",
        "evidence": "The repaired proof builds the dual positive system from the same regular vector and proves each simple coroot is indecomposable using signed simple-root coordinates, yielding the transposed Cartan matrix."
      },
      {
        "subject": "prop-killing-form-orthogonality-of-root-spaces",
        "severity": "fatal",
        "subclass": "unsupported-zero-weight-identification",
        "location": "fact-L2-and-steps-1.1-2.1",
        "disposition": "fixed",
        "post_sha256": "4ac34ff4faf3f2a02680b1f97ca60f9dc907b22dc8b023a5a4288dfbcfb4f92e",
        "evidence": "The proof now establishes g_0=h from maximal torality and the direct decomposition before proving orthogonality and restricting global Killing-form nondegeneracy to h."
      }
    ]
  },
  {
    "ledger": "published-consumer-supplier",
    "supplier_ids": [
      "ex-weyl-reflection-in-sl-two",
      "lem-killing-length-of-a-root-is-nonzero",
      "prop-bracket-of-opposite-root-spaces-is-the-root-line-in-the-cartan-subalgebra",
      "prop-duality-exchanges-b-n-and-c-n-and-fixes-the-other-types",
      "prop-killing-form-orthogonality-of-root-spaces"
    ],
    "audit_status": "complete",
    "finding": "The declared and reference dependency closure contains 149 routed item candidates. Inspection of the direct consumers and the three owning page interfaces found that the repaired statements are unchanged and no immediate consumer edit is logically required; all candidates are draft and the complete closure contains no published consumer.",
    "published_consumers": []
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append_batch",
    "run": "phase-2-remaining-27",
    "phase": "repeat",
    "round": 1,
    "unit": 14,
    "entries": [
      {
        "subject": "thm-fleissner-normal-moore-space-construction",
        "severity": "fatal",
        "subclass": "invalid-finite-cardinal-enumeration-bound",
        "location": "proof-steps-1.2-11.4",
        "disposition": "fixed",
        "post_sha256": "69339c1e66a1a21ee5b96e2a9e7fa7cc329584ce0e6b40cac92990e4463e0a76",
        "evidence": "For kappa=omega the original kappa_m-long list could not enumerate the finite union of several kappa_m-sized prefix sets. The repair uses local enumerations and a finite length-dependent bound in the Ramsey case, while infinite-cardinal absorption supplies the original kappa_m bound when kappa>omega."
      },
      {
        "subject": "thm-ch-normal-nonmetrizable-moore-space",
        "severity": "nonfatal",
        "subclass": "omitted-construction-hypotheses",
        "location": "fact-F3",
        "disposition": "fixed",
        "post_sha256": "b183ddbc263cf906e3fe65158c1cc05c66eee2cb8e3c8c2b46702bc8430e0f5c",
        "evidence": "Fact F3 now states that kappa is infinite and that the cardinal sequence is increasing. The CH parameters kappa=omega and kappa_n=n satisfy both conditions, so the repaired supplier interface leaves the application valid."
      },
      {
        "subject": "thm-formal-nmsc-consistency-lower-bound",
        "severity": "fatal",
        "subclass": "false-or-overstrong-title",
        "location": "title",
        "disposition": "fixed",
        "post_sha256": "c1d6f48754137ed1c4486ef69b424d3f3d37aed1d45dd2fdd42bb274959eec94",
        "evidence": "The title now calls the result metatheoretic. The item proves an external finite-refutation transformation but no proof-code reduction verified inside the named arithmetic base, so the previous word 'formal' asserted more than the proof supplies."
      },
      {
        "subject": "thm-relative-consistency-countable-choice-without-urysohn",
        "severity": "nonfatal",
        "subclass": "false-urysohn-definition",
        "location": "fact-F2",
        "disposition": "fixed",
        "post_sha256": "73294af16334d7c11e44ab4ce184337a3d5860a774567f4026e194540b745a3e",
        "evidence": "The negated Urysohn assertion now uses endpoint-fibre inclusions, equivalently pointwise endpoint values. It no longer uses equality of images, which is automatically false when one of the allowed closed sets is empty."
      },
      {
        "subject": "cex-kelley-cofinite-set-is-not-closed",
        "severity": "nonfatal",
        "subclass": "false-equivalence-of-counterexamples",
        "location": "statement",
        "disposition": "fixed",
        "post_sha256": "391dca16965e0126f9eba764ba2152a0375ad3e67ac28f10f4f65482af627639",
        "evidence": "The carrier now separates the even-naturals counterexample, whose complement is infinite, from the coordinate N in N union {infinity}, whose complement is a singleton. Both nonclosedness claims are proved, without the false assertion that they are equivalent instances."
      },
      {
        "subject": "ex-isolated-point-repair-recovers-choice-function",
        "severity": "nonfatal",
        "subclass": "missing-domain-conversion-map",
        "location": "fact-L1-and-proof-steps-3.1-4.1",
        "disposition": "fixed",
        "post_sha256": "63972d02584fcaac08eaf9c66c7a768fd2f415f80e2c81bc33d7d73a644ab830",
        "evidence": "The proof now converts the coordinate-indexed product point into a function on the family by choosing each member's least occurrence and proves the selected coordinate belongs to that member. It also distinguishes this finite-list conversion from products indexed directly by the family."
      }
    ]
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append_batch",
    "run": "phase-2-remaining-27",
    "entries": [
      {
        "subject": "normal-moore-spaces-pmea-and-consistency-strength",
        "severity": "nonfatal",
        "disposition": "pending-owner-repair",
        "location": "library/foundations/normal-moore-spaces-pmea-and-consistency-strength.md:61",
        "supplier_path": [
          "thm-formal-nmsc-consistency-lower-bound",
          "thm-normal-moore-consistency-strength-sandwich"
        ],
        "finding": "The owning page still says that 'the formal consistency lower bound follows'. The assigned supplier was narrowed precisely because it establishes only an external metatheoretic consistency implication and no base-verified formal proof-code reduction.",
        "required_repair": "Change 'formal consistency lower bound' to 'metatheoretic consistency lower bound'; no theorem statement or proof change is required in the sandwich consumer."
      }
    ]
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_change",
    "reason": "The complete mechanically discovered cone contains thirteen current item consumers, all with draft status, and no published consumer. The only necessary downstream correction found is the draft owning-page terminology recorded above; all item-level consumers use unchanged theorem statements or hypotheses already met."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append_batch",
    "run": "phase-2-remaining-27",
    "phase": "repeat",
    "round": 1,
    "unit": 15,
    "entries": [
      {
        "subject": "fs-the-baire-property-model-needs-an-inaccessible",
        "severity": "nonfatal",
        "subclass": "unsupported-consistency-strength-comparison",
        "location": "proof-step-1.3",
        "disposition": "fixed",
        "post_sha256": "75627743dad72315639fd95b623f155cdde27d5d69905c2122e71a7c320f20e7",
        "evidence": "Step 1.3 now records only the inaccessible equiconsistency calibration for universal measurability and expressly declines to infer a separating model or strict nonimplication between bare consistency statements."
      },
      {
        "subject": "lem-shelah-homogeneous-truth-has-baire-representatives",
        "severity": "fatal",
        "subclass": "noninjective-generic-name-boolean-map",
        "location": "former-proof-step-2.1",
        "disposition": "fixed",
        "post_sha256": "118b03dc885f1d206c18a08982cd07049ad6e3d3ae206bc90990e156b125134d",
        "evidence": "The proof now acknowledges the kernel exposed by the prepend-zero Cohen-name example and replaces the unsupported full-copy isomorphism with supported local charts, free-amalgamation readings, coherent overlaps, and a countable pasted Borel code."
      },
      {
        "subject": "thm-shelah-universal-meagre-composition-preserves-sweetness",
        "severity": "fatal",
        "subclass": "restricted-name-carrier-type-error",
        "location": "proof-step-1.2-and-conditional-unions",
        "disposition": "fixed",
        "post_sha256": "c537808ab889908cf3f2d0d783d5d0ae16b50e88fbc7f9d805f7df0b01d588aa",
        "evidence": "The statement now assumes ZFC, and steps 1.2, 3.1, 3.2, and 3.3 normalize each source-local conditional name into the fixed set R below its first coordinate using AC-based maximal-antichain mixing."
      }
    ]
  },
  {
    "ledger": "published-consumer-supplier",
    "supplier_ids": [
      "fs-the-baire-property-model-needs-an-inaccessible",
      "lem-shelah-homogeneous-truth-has-baire-representatives",
      "thm-shelah-universal-meagre-composition-preserves-sweetness"
    ],
    "audit_status": "complete",
    "finding": "The whole-library dependency closure contains ten item candidates, all draft and none published. The only direct composition consumer is items/thm-shelah-ch-omega-one-sweet-construction.md:46,60,64; it already assumes ZFC+CH and uses only the unchanged fixed-model sweetness conclusion, so the added AC hypothesis requires no repair. The only direct homogeneous-reading consumer is items/thm-shelah-inner-model-all-sets-of-reals-have-baire-property.md:32,40; its step 1.1 uses exactly the unchanged Borel-code-plus-coded-meagre-error conclusion, so no repair is needed. The false-statement carrier has no downstream consumer. Transitive paths through the CH construction, HOD(S) definition, closure and real-capture lemmas, inner-model theorems, equiconsistency theorem, and separation theorem were routed in downstream; their interfaces consume unchanged conclusions and require no edit.",
    "published_consumers": []
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append_batch",
    "run": "phase-2-remaining-27",
    "phase": "repeat",
    "round": 1,
    "unit": 3,
    "entries": [
      {
        "subject": "ex-integral-operator-trace-under-a-valid-diagonal-hypothesis",
        "severity": "nonfatal",
        "subclass": "zero-based-index-domain",
        "location": "fact-A4",
        "disposition": "fixed",
        "post_sha256": "113e3ff47dd0ea58718ff3faa8ce478bc66e3e4d7ae8ee9a0d0558e9b58fc764",
        "evidence": "A4 now chooses finite reciprocal-radius nets only for integers n>=1; these positive scales still yield a countable dense union."
      },
      {
        "subject": "ex-the-derivative-of-a-bounded-bilinear-map",
        "severity": "fatal",
        "subclass": "interface-domain-mismatch",
        "location": "statement-multiplication-specialization",
        "disposition": "fixed",
        "post_sha256": "dab2b5905fcbbf4d006a7d66c356afc61016608f07cd690e73fc999eec77a4cf",
        "evidence": "The multiplication specialization now requires a real Banach space, matching the completeness hypotheses of the supplied Frechet-derivative interface."
      },
      {
        "subject": "lem-singular-values-equal-approximation-numbers",
        "severity": "fatal",
        "subclass": "ill-typed-central-definition",
        "location": "statement-definition-a_n",
        "disposition": "fixed",
        "post_sha256": "a1caa99f4640a2c2e0f4795be7d0727ca42ed9df471a7b09cb004b1d306be3ca",
        "evidence": "The admissible operators F now explicitly have finite-dimensional range before dim_F ran F is formed; the proof uses the same repaired domain."
      }
    ]
  },
  {
    "ledger": "published-consumer-supplier",
    "supplier_ids": [
      "ex-integral-operator-trace-under-a-valid-diagonal-hypothesis",
      "ex-the-derivative-of-a-bounded-bilinear-map",
      "lem-singular-values-equal-approximation-numbers"
    ],
    "audit_status": "complete",
    "finding": "The declared/reference closure and exact item, library-page, article, and explainer citation scan found one draft direct consumer: cor-compact-operator-iff-approximation-numbers-tend-to-zero. It already defines approximation numbers using only finite-rank F, so the supplier's typing repair requires no consumer edit. The two repaired examples have no item consumers, and no published consumer was found for any repaired supplier.",
    "published_consumers": []
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append_batch",
    "run": "phase-2-remaining-27",
    "phase": "repeat",
    "round": 1,
    "unit": 4,
    "entries": [
      {
        "subject": "lem-extreme-points-of-the-dual-ball-of-c-of-k",
        "severity": "fatal",
        "subclass": "unsupported-real-scalar-interface",
        "location": "proof-real-case-and-final-remark",
        "disposition": "fixed",
        "post_sha256": "b74e32e51318b33ec71572a9b16c79231158ac40b9a2e93a330229c517d2c628",
        "evidence": "The proof now derives an isometric complexification of every real functional and uses uniqueness in the supplied complex Riesz theorem to prove that its representing measure is signed before invoking the common variation argument."
      },
      {
        "subject": "thm-holomorphic-functional-calculus-homomorphism",
        "severity": "nonfatal",
        "subclass": "false-cycle-component-claim",
        "location": "fact-L5-and-proof-step-1.3",
        "disposition": "fixed",
        "post_sha256": "5d4df22fa22a36cf2cb0ff91b61606584486e5aae839c438bb264e839fad47ef",
        "evidence": "L5 and the proof contract now distinguish a cycle's vanishing total boundary from closure of each constituent contour; endpoint cancellation supplies the only constant-integral identity used later."
      },
      {
        "subject": "thm-banach-stone",
        "severity": "nonfatal",
        "subclass": "stale-exact-supplier-quote",
        "location": "proof-contract-citation-L1",
        "disposition": "pending-owner-repair",
        "supplier_path": [
          "lem-extreme-points-of-the-dual-ball-of-c-of-k",
          "thm-banach-stone"
        ],
        "evidence": "The supplier's mathematical conclusion and the Banach-Stone proof remain valid, but the repaired supplier Statement has changed, so the exact L1 quote in both current proof-contract registries must be refreshed after owner review; no theorem-body edit is needed."
      }
    ]
  },
  {
    "ledger": "published-consumer-supplier",
    "supplier_ids": [
      "lem-extreme-points-of-the-dual-ball-of-c-of-k",
      "thm-holomorphic-functional-calculus-homomorphism"
    ],
    "audit_status": "complete",
    "finding": "The complete declared/reference closure contains eight draft consumers and no published consumer. The extreme-point supplier's conclusion is unchanged: thm-banach-stone remains mathematically sound but needs its exact contract quote refreshed, and its example consumer needs no content change. The functional-calculus repair is proof-internal and leaves the algebra-homomorphism interface unchanged, so its definition reference, spectral-mapping theorem, Riesz-projection definition and properties theorem, and two examples need no content repair after examination.",
    "published_consumers": []
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append_batch",
    "run": "phase-2-remaining-27",
    "phase": "repeat",
    "round": 1,
    "unit": 5,
    "entries": [
      {
        "subject": "thm-continuous-functional-calculus-properties",
        "severity": "nonfatal",
        "subclass": "inconsistent-function-domain-quantification",
        "location": "Given and proof steps 1.1, 1.2, 2.2, and 3.1",
        "disposition": "fixed",
        "post_sha256": "81611b6e2da09c458190a9486bb8d8d2a93e2affe88675cbe4e076225ccf12fd",
        "evidence": "The proof now reserves k for the second C(sigma(T)) algebra input and quantifies h independently on sigma(f(T)); star-polynomial approximation and both calculus isometries establish h(f(T))=(h composed with f)(T) for every admissible h."
      }
    ]
  },
  {
    "ledger": "published-consumer-supplier",
    "supplier_ids": [
      "thm-continuous-functional-calculus-properties"
    ],
    "audit_status": "complete",
    "finding": "The current declared-dependency and body-reference graph has 51 downstream draft items and no published consumer. Every downstream carrier and all six owning page interfaces were inspected. The repair changes only bound-variable typing and expands the proof of the already-stated composition clause; it does not weaken or alter any supplied theorem clause. Therefore no direct or transitive consumer requires an edit.",
    "published_consumers": [],
    "direct_findings": [
      {
        "id": "cor-spectral-projections-and-resolution-of-the-identity",
        "affected_clause": "Fact A3 and its eigenspace argument use f(T)x=f(lambda)x.",
        "required_repair": "None; the eigenvector-evaluation clause and its proof are unchanged."
      },
      {
        "id": "def-borel-functional-calculus-for-a-bounded-normal-operator",
        "affected_clause": "The commutation paragraph uses the continuous commutant property.",
        "required_repair": "None; the commutant clause is unchanged by the variable repair."
      },
      {
        "id": "def-cyclic-vector-and-cyclic-normal-operator",
        "affected_clause": "The reducing-subspace argument uses multiplication and conjugation in the calculus.",
        "required_repair": "None; both algebraic identities retain exactly the same hypotheses and conclusions."
      },
      {
        "id": "ex-functional-calculus-for-a-diagonal-operator",
        "affected_clause": "Fact A3 and step 3.1 use the eigenvector-evaluation identity.",
        "required_repair": "None; the supplied identity is unchanged."
      },
      {
        "id": "ex-sign-and-positive-negative-parts-of-a-self-adjoint-operator",
        "affected_clause": "Fact A4 uses positivity preservation and the isometric calculus.",
        "required_repair": "None; both clauses remain valid with the same interface."
      },
      {
        "id": "lem-continuous-functional-calculus-produces-a-regular-pvm",
        "affected_clause": "The target is a declared dependency, while the written proof uses the normal-calculus homomorphism supplier directly.",
        "required_repair": "None; no proof step depends on the formerly ambiguous outer-function symbol."
      },
      {
        "id": "thm-borel-functional-calculus-for-bounded-normal-operators",
        "affected_clause": "Fact A2 and the commutant extension use the continuous calculus homomorphism and commutant clauses.",
        "required_repair": "None; those clauses and their hypotheses are unchanged."
      },
      {
        "id": "thm-positive-square-root",
        "affected_clause": "Fact A4 and steps 2.1 through 4.1 use products, positivity, isometry, and commutation.",
        "required_repair": "None; the repair preserves every used clause."
      },
      {
        "id": "thm-self-adjoint-norm-and-spectrum-extrema",
        "affected_clause": "Fact A1 and steps 1.2 through 1.3 use positivity and isometry.",
        "required_repair": "None; the repaired carrier proves the same positivity and norm statements."
      },
      {
        "id": "thm-spectral-theorem-for-bounded-normal-operators-pvm-form",
        "affected_clause": "Fact A1 and step 1.1 use the unital star-homomorphism properties of the continuous calculus.",
        "required_repair": "None; the theorem interface is unchanged and this branch does not use the ambiguous notation."
      }
    ],
    "transitive_finding": "Each transitive item below was read with its incoming dependency chain. Since every direct consumer above remains valid without modification, each transitive item's affected clause is only its declared or cited use of the preceding unchanged carrier on the recorded path; no transitive repair is logically necessary.",
    "dependency_paths": [
      [
        "thm-continuous-functional-calculus-properties",
        "cor-spectral-projections-and-resolution-of-the-identity",
        "cex-a-normal-operator-need-not-have-any-eigenvectors"
      ],
      [
        "thm-continuous-functional-calculus-properties",
        "def-borel-functional-calculus-for-a-bounded-normal-operator",
        "cex-continuous-functional-calculus-cannot-produce-every-spectral-projection"
      ],
      [
        "thm-continuous-functional-calculus-properties",
        "thm-spectral-theorem-for-bounded-normal-operators-pvm-form",
        "thm-spectral-theorem-for-unbounded-self-adjoint-operators",
        "ex-position-operator-on-l-two-of-r",
        "cex-strongly-continuous-unitary-group-need-not-be-norm-continuous"
      ],
      [
        "thm-continuous-functional-calculus-properties",
        "thm-spectral-theorem-for-bounded-normal-operators-pvm-form",
        "thm-spectral-theorem-for-unbounded-self-adjoint-operators",
        "cex-the-minimal-derivative-is-symmetric-not-self-adjoint"
      ],
      [
        "thm-continuous-functional-calculus-properties",
        "cor-spectral-projections-and-resolution-of-the-identity"
      ],
      [
        "thm-continuous-functional-calculus-properties",
        "thm-spectral-theorem-for-bounded-normal-operators-pvm-form",
        "thm-spectral-theorem-for-unbounded-self-adjoint-operators",
        "cor-unitary-groups-converge-under-strong-resolvent-convergence"
      ],
      [
        "thm-continuous-functional-calculus-properties",
        "thm-positive-square-root",
        "def-absolute-value-of-a-bounded-operator"
      ],
      [
        "thm-continuous-functional-calculus-properties",
        "def-borel-functional-calculus-for-a-bounded-normal-operator"
      ],
      [
        "thm-continuous-functional-calculus-properties",
        "def-cyclic-vector-and-cyclic-normal-operator"
      ],
      [
        "thm-continuous-functional-calculus-properties",
        "thm-spectral-theorem-for-bounded-normal-operators-pvm-form",
        "thm-spectral-theorem-for-unbounded-self-adjoint-operators",
        "def-discrete-and-essential-spectrum-of-a-self-adjoint-operator"
      ],
      [
        "thm-continuous-functional-calculus-properties",
        "thm-spectral-theorem-for-bounded-normal-operators-pvm-form",
        "thm-spectral-theorem-for-unbounded-self-adjoint-operators",
        "def-pure-point-absolutely-continuous-and-singular-continuous-spectral-subspaces"
      ],
      [
        "thm-continuous-functional-calculus-properties",
        "thm-spectral-theorem-for-bounded-normal-operators-pvm-form",
        "thm-spectral-theorem-for-unbounded-self-adjoint-operators",
        "def-relative-compactness-with-respect-to-an-operator"
      ],
      [
        "thm-continuous-functional-calculus-properties",
        "def-cyclic-vector-and-cyclic-normal-operator",
        "def-spectral-multiplicity-function-in-the-separable-case"
      ],
      [
        "thm-continuous-functional-calculus-properties",
        "cor-spectral-projections-and-resolution-of-the-identity",
        "ex-borel-functional-calculus-defines-a-discontinuous-characteristic-function"
      ],
      [
        "thm-continuous-functional-calculus-properties",
        "ex-functional-calculus-for-a-diagonal-operator"
      ],
      [
        "thm-continuous-functional-calculus-properties",
        "thm-spectral-theorem-for-bounded-normal-operators-pvm-form",
        "thm-spectral-theorem-for-unbounded-self-adjoint-operators",
        "lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group",
        "thm-stone-one-parameter-unitary-groups",
        "ex-periodic-derivative-and-its-unitary-translation-group"
      ],
      [
        "thm-continuous-functional-calculus-properties",
        "thm-positive-square-root",
        "def-absolute-value-of-a-bounded-operator",
        "ex-polar-decomposition-of-the-unilateral-shift"
      ],
      [
        "thm-continuous-functional-calculus-properties",
        "thm-spectral-theorem-for-bounded-normal-operators-pvm-form",
        "thm-spectral-theorem-for-unbounded-self-adjoint-operators",
        "ex-position-operator-on-l-two-of-r"
      ],
      [
        "thm-continuous-functional-calculus-properties",
        "def-borel-functional-calculus-for-a-bounded-normal-operator",
        "ex-pvm-of-a-diagonal-normal-operator"
      ],
      [
        "thm-continuous-functional-calculus-properties",
        "def-borel-functional-calculus-for-a-bounded-normal-operator",
        "ex-pvm-of-a-multiplication-operator"
      ],
      [
        "thm-continuous-functional-calculus-properties",
        "ex-sign-and-positive-negative-parts-of-a-self-adjoint-operator"
      ],
      [
        "thm-continuous-functional-calculus-properties",
        "cor-spectral-projections-and-resolution-of-the-identity",
        "ex-spectral-projection-of-an-isolated-eigenvalue-agrees-with-the-riesz-projection"
      ],
      [
        "thm-continuous-functional-calculus-properties",
        "thm-positive-square-root",
        "ex-square-root-and-absolute-value-of-a-matrix"
      ],
      [
        "thm-continuous-functional-calculus-properties",
        "thm-spectral-theorem-for-bounded-normal-operators-pvm-form",
        "thm-spectral-theorem-for-unbounded-self-adjoint-operators",
        "ex-unbounded-multiplication-operator-and-its-domain"
      ],
      [
        "thm-continuous-functional-calculus-properties",
        "lem-continuous-functional-calculus-produces-a-regular-pvm"
      ],
      [
        "thm-continuous-functional-calculus-properties",
        "def-cyclic-vector-and-cyclic-normal-operator",
        "lem-maximal-orthogonal-family-of-cyclic-reducing-subspaces"
      ],
      [
        "thm-continuous-functional-calculus-properties",
        "thm-spectral-theorem-for-bounded-normal-operators-pvm-form",
        "thm-spectral-theorem-for-unbounded-self-adjoint-operators",
        "lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group"
      ],
      [
        "thm-continuous-functional-calculus-properties",
        "thm-spectral-theorem-for-bounded-normal-operators-pvm-form",
        "thm-spectral-theorem-for-unbounded-self-adjoint-operators",
        "lem-spectral-form-domain-and-core-of-a-semibounded-operator"
      ],
      [
        "thm-continuous-functional-calculus-properties",
        "thm-borel-functional-calculus-for-bounded-normal-operators",
        "lem-unitary-intertwiners-preserve-direct-integral-fiber-dimension"
      ],
      [
        "thm-continuous-functional-calculus-properties",
        "cor-spectral-projections-and-resolution-of-the-identity",
        "cex-a-normal-operator-need-not-have-any-eigenvectors",
        "rem-direct-integrals-and-general-multiplicity-theory"
      ],
      [
        "thm-continuous-functional-calculus-properties",
        "thm-positive-square-root",
        "rem-positive-square-root-and-covariance-matrices"
      ],
      [
        "thm-continuous-functional-calculus-properties",
        "thm-spectral-theorem-for-bounded-normal-operators-pvm-form",
        "thm-spectral-theorem-for-unbounded-self-adjoint-operators",
        "cex-the-minimal-derivative-is-symmetric-not-self-adjoint",
        "rem-self-adjoint-extensions-and-deficiency-indices"
      ],
      [
        "thm-continuous-functional-calculus-properties",
        "thm-borel-functional-calculus-for-bounded-normal-operators"
      ],
      [
        "thm-continuous-functional-calculus-properties",
        "thm-spectral-theorem-for-bounded-normal-operators-pvm-form",
        "thm-spectral-theorem-for-unbounded-self-adjoint-operators",
        "thm-canonical-spectral-type-decomposition"
      ],
      [
        "thm-continuous-functional-calculus-properties",
        "thm-spectral-theorem-for-bounded-normal-operators-pvm-form",
        "thm-spectral-theorem-for-unbounded-self-adjoint-operators",
        "thm-continuous-functional-calculus-under-resolvent-convergence"
      ],
      [
        "thm-continuous-functional-calculus-properties",
        "def-borel-functional-calculus-for-a-bounded-normal-operator",
        "thm-cyclic-spectral-representation"
      ],
      [
        "thm-continuous-functional-calculus-properties",
        "thm-spectral-theorem-for-bounded-normal-operators-pvm-form",
        "thm-spectral-theorem-for-unbounded-self-adjoint-operators",
        "thm-kato-rellich"
      ],
      [
        "thm-continuous-functional-calculus-properties",
        "thm-spectral-theorem-for-bounded-normal-operators-pvm-form",
        "thm-spectral-theorem-for-unbounded-self-adjoint-operators",
        "thm-min-max-principle-below-essential-spectrum"
      ],
      [
        "thm-continuous-functional-calculus-properties",
        "def-cyclic-vector-and-cyclic-normal-operator",
        "thm-multiplication-operator-form-of-the-bounded-normal-spectral-theorem"
      ],
      [
        "thm-continuous-functional-calculus-properties",
        "thm-positive-square-root",
        "def-absolute-value-of-a-bounded-operator",
        "thm-polar-decomposition-for-bounded-operators"
      ],
      [
        "thm-continuous-functional-calculus-properties",
        "thm-positive-square-root"
      ],
      [
        "thm-continuous-functional-calculus-properties",
        "thm-self-adjoint-norm-and-spectrum-extrema"
      ],
      [
        "thm-continuous-functional-calculus-properties",
        "thm-spectral-theorem-for-bounded-normal-operators-pvm-form"
      ],
      [
        "thm-continuous-functional-calculus-properties",
        "thm-spectral-theorem-for-bounded-normal-operators-pvm-form",
        "thm-spectral-theorem-for-unbounded-self-adjoint-operators"
      ],
      [
        "thm-continuous-functional-calculus-properties",
        "thm-spectral-theorem-for-bounded-normal-operators-pvm-form",
        "thm-spectral-theorem-for-unbounded-self-adjoint-operators",
        "lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group",
        "thm-stone-one-parameter-unitary-groups"
      ],
      [
        "thm-continuous-functional-calculus-properties",
        "def-borel-functional-calculus-for-a-bounded-normal-operator",
        "thm-stone-resolvent-formula-for-spectral-projections"
      ],
      [
        "thm-continuous-functional-calculus-properties",
        "lem-continuous-functional-calculus-produces-a-regular-pvm",
        "thm-support-and-uniqueness-of-the-spectral-measure"
      ],
      [
        "thm-continuous-functional-calculus-properties",
        "thm-spectral-theorem-for-bounded-normal-operators-pvm-form",
        "thm-spectral-theorem-for-unbounded-self-adjoint-operators",
        "thm-unbounded-borel-functional-calculus"
      ],
      [
        "thm-continuous-functional-calculus-properties",
        "def-borel-functional-calculus-for-a-bounded-normal-operator",
        "thm-cyclic-spectral-representation",
        "thm-unitary-equivalence-classified-by-measure-class-and-multiplicity"
      ],
      [
        "thm-continuous-functional-calculus-properties",
        "thm-spectral-theorem-for-bounded-normal-operators-pvm-form",
        "thm-spectral-theorem-for-unbounded-self-adjoint-operators",
        "thm-weyl-criterion-for-essential-spectrum"
      ],
      [
        "thm-continuous-functional-calculus-properties",
        "thm-spectral-theorem-for-bounded-normal-operators-pvm-form",
        "thm-spectral-theorem-for-unbounded-self-adjoint-operators",
        "def-discrete-and-essential-spectrum-of-a-self-adjoint-operator",
        "thm-weyl-essential-spectrum-invariance"
      ]
    ]
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append_batch",
    "run": "phase-2-remaining-27",
    "phase": "repeat",
    "round": 1,
    "unit": 6,
    "entries": [
      {
        "subject": "def-densely-defined-closed-and-closable-operator",
        "severity": "nonfatal",
        "subclass": "false-norm-linearity-justification",
        "location": "Remarks Claim 1",
        "disposition": "fixed",
        "post_sha256": "769905a55c8cc3bc1638798db4395d5a961a938684f84c6886c38eb04a1db18a",
        "evidence": "Claim 1 now pulls homogeneity and the triangle inequality back from the norm on H direct-sum H along the linear graph map J, rather than falsely calling the ambient norm linear."
      },
      {
        "subject": "def-pure-point-absolutely-continuous-and-singular-continuous-spectral-subspaces",
        "severity": "fatal",
        "subclass": "undefined-central-measure-class",
        "location": "Definition of H_pp and Well-definedness",
        "disposition": "fixed",
        "post_sha256": "26af515d171b838022ba6efe9d01d52fff389c719ad69bd391fd759ca24fc409",
        "evidence": "The definition now makes purely atomic synonymous with discrete concentration on a countable subset of R, exactly matching the declared finite-measure decomposition theorem."
      }
    ]
  },
  {
    "ledger": "published-consumer-supplier",
    "supplier_ids": [
      "def-densely-defined-closed-and-closable-operator",
      "def-pure-point-absolutely-continuous-and-singular-continuous-spectral-subspaces"
    ],
    "audit_status": "complete",
    "finding": "The current declared-dependency and direct-reference closure contains 42 downstream item candidates. Every candidate is draft, all are on the draft unbounded-self-adjoint-operators-and-stones-theorem page, and the exact canonical scan found no article or explainer occurrence and no published consumer. The graph-norm repair changes only the proof of an unchanged norm/closedness/core interface. The spectral-type repair defines the synonym already used as the supplier's discrete countable-carrier condition; its direct canonical-decomposition consumer states that same condition. No downstream item or page edit is logically required.",
    "published_consumers": [],
    "downstream_findings": [
      {
        "path": [
          "def-densely-defined-closed-and-closable-operator",
          "def-adjoint-of-a-densely-defined-unbounded-operator"
        ],
        "affected_clause": "Definition opening dense-domain hypothesis",
        "required_repair": "none; it uses only the unchanged meaning of densely defined"
      },
      {
        "path": [
          "def-densely-defined-closed-and-closable-operator",
          "thm-closure-of-a-closable-operator"
        ],
        "affected_clause": "Statement condition 1 and Fact A2",
        "required_repair": "none; closability and graph closedness are unchanged"
      },
      {
        "path": [
          "def-densely-defined-closed-and-closable-operator",
          "def-symmetric-self-adjoint-and-essentially-self-adjoint"
        ],
        "affected_clause": "Essential self-adjointness and closed-extension consequences",
        "required_repair": "none; the repaired norm justification does not alter either definition"
      },
      {
        "path": [
          "def-densely-defined-closed-and-closable-operator",
          "def-deficiency-subspaces-and-deficiency-indices"
        ],
        "affected_clause": "Opening closed symmetric hypothesis and closed-range argument",
        "required_repair": "none; the consumer uses the unchanged closed-graph interface"
      },
      {
        "path": [
          "def-densely-defined-closed-and-closable-operator",
          "def-resolvent-and-spectrum-of-a-closed-unbounded-operator"
        ],
        "affected_clause": "Nonempty-resolvent-implies-closedness paragraph",
        "required_repair": "none; it uses only the unchanged graph definition of closedness"
      },
      {
        "path": [
          "def-densely-defined-closed-and-closable-operator",
          "lem-unbounded-adjoint-is-well-defined-and-closed"
        ],
        "affected_clause": "Statement and proof step 1.2 closedness conclusion",
        "required_repair": "none; no graph-norm axiom is repeated or used"
      },
      {
        "path": [
          "def-densely-defined-closed-and-closable-operator",
          "thm-closable-iff-adjoint-domain-is-dense"
        ],
        "affected_clause": "Statement and Facts A3-A4",
        "required_repair": "none; only the unchanged closable and closed-extension interface is used"
      },
      {
        "path": [
          "def-densely-defined-closed-and-closable-operator",
          "cex-symmetric-need-not-be-self-adjoint"
        ],
        "affected_clause": "Statement clause 1 and proof step 2.3",
        "required_repair": "none; the consumer proves graph closedness directly and does not repeat the rejected norm argument"
      },
      {
        "path": [
          "def-densely-defined-closed-and-closable-operator",
          "cex-an-everywhere-defined-closed-operator-on-a-banach-space-cannot-be-unbounded"
        ],
        "affected_clause": "Closed-graph hypothesis and self-adjoint consequence",
        "required_repair": "none; closedness retains exactly the same meaning"
      },
      {
        "path": [
          "def-densely-defined-closed-and-closable-operator",
          "lem-generator-of-a-unitary-group-is-skew-adjoint"
        ],
        "affected_clause": "Fact A4 and proof step 1.3",
        "required_repair": "none; the consumer uses the unchanged graph criterion for closedness"
      },
      {
        "path": [
          "def-densely-defined-closed-and-closable-operator",
          "lem-unbounded-pvm-integral-is-well-defined-and-closed"
        ],
        "affected_clause": "Fact A6 closedness and density vocabulary",
        "required_repair": "none; the repaired supplier statement is unchanged"
      },
      {
        "path": [
          "def-densely-defined-closed-and-closable-operator",
          "lem-second-resolvent-identity-for-closed-operator-perturbations"
        ],
        "affected_clause": "Statement graph-norm boundedness hypothesis",
        "required_repair": "none; the same graph norm is now justified correctly"
      },
      {
        "path": [
          "def-densely-defined-closed-and-closable-operator",
          "thm-kato-rellich"
        ],
        "affected_clause": "Fact A1 graph norm and proof step 4.1 graph closure",
        "required_repair": "none; both use the unchanged formulas and conclusions"
      },
      {
        "path": [
          "def-densely-defined-closed-and-closable-operator",
          "thm-von-neumann-self-adjoint-extension-parameterization"
        ],
        "affected_clause": "Fact A3 density interface",
        "required_repair": "none; no repaired proof clause is imported"
      },
      {
        "path": [
          "def-pure-point-absolutely-continuous-and-singular-continuous-spectral-subspaces",
          "thm-canonical-spectral-type-decomposition"
        ],
        "affected_clause": "Statement spectral types and Fact A1",
        "required_repair": "none; Fact A1 already says discrete means concentrated on a countable set, exactly the repaired supplier convention"
      }
    ],
    "page_interfaces": [
      {
        "path": "library/functional-analysis/unbounded-self-adjoint-operators-and-stones-theorem.md",
        "status": "draft",
        "repair_required": false,
        "reason": "The page says graph norm turns closedness into completeness and records the canonical spectral-type decomposition; both interfaces are unchanged and now better justified."
      }
    ]
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append_batch",
    "run": "phase-2-remaining-27",
    "phase": "repeat",
    "round": 1,
    "unit": 7,
    "entries": [
      {
        "subject": "cex-brownian-hitting-time-is-almost-surely-finite-but-not-integrable",
        "severity": "fatal",
        "subclass": "witness-codomain-mismatch",
        "location": "Statement refuted and Counterexample steps 1.1-4.1",
        "disposition": "fixed",
        "post_sha256": "7db571aff118271da8fbc8a42fea1c95aac188f65c9c8e9ab4e86010eab88b1b",
        "evidence": "The carrier now replaces the extended hitting time by zero on its measurable null non-hitting event, proves the resulting map is R-valued and measurable, and transfers the same infinite-mean density."
      },
      {
        "subject": "cex-finite-quadratic-variation-does-not-imply-finite-total-variation",
        "severity": "fatal",
        "subclass": "missing-witness-hypothesis-event",
        "location": "Fact F1 and Counterexample step 1.1",
        "disposition": "fixed",
        "post_sha256": "375d824d5335858ae4e4ed43ece6490d22ecb6d1c7f6467623edd5c53c30ad88",
        "evidence": "F1 and step 1.1 now include the Brownian full-measure continuity event in the same intersection as the two variation properties before selecting the deterministic witness."
      },
      {
        "subject": "thm-blumenthal-zero-one-law",
        "severity": "nonfatal",
        "subclass": "probability-event-conflation",
        "location": "Proof step 3.1",
        "disposition": "fixed",
        "post_sha256": "2cd6781c24961303c4e4ddbfc4d6e3983822716354a93f419be9f5b19a07166c",
        "evidence": "Step 3.1 now says only P(A) is forced to be zero or one and records how a nonempty proper null raw-germ event can occur on an exceptional Brownian outcome."
      }
    ]
  },
  {
    "ledger": "published-consumer-supplier",
    "supplier_ids": [
      "cex-brownian-hitting-time-is-almost-surely-finite-but-not-integrable",
      "cex-finite-quadratic-variation-does-not-imply-finite-total-variation",
      "thm-blumenthal-zero-one-law"
    ],
    "audit_status": "complete",
    "finding": "The canonical dependency and body-link scan found no published item or article consumer of the three repaired suppliers. The two counterexamples have no item consumers. Blumenthal's theorem has four draft downstream candidates: cex-a-nonadapted-step-integrand-breaks-the-ito-isometry uses only its unchanged probability-zero-or-one statement; thm-brownian-filtration-martingale-representation uses that same statement in F11 and step 2.1; its two corollaries consume only the unchanged representation theorem. Their owning draft page summaries also use only those unchanged interfaces, so this supplier repair requires no downstream prose change.",
    "published_consumers": [],
    "downstream_findings": [
      {
        "path": [
          "thm-blumenthal-zero-one-law",
          "cex-a-nonadapted-step-integrand-breaks-the-ito-isometry"
        ],
        "affected_clause": "Consumer Fact F2 and proof step 1.2",
        "required_repair": "none; the consumer uses only the unchanged conclusion that every raw-germ event has probability zero or one"
      },
      {
        "path": [
          "thm-blumenthal-zero-one-law",
          "thm-brownian-filtration-martingale-representation"
        ],
        "affected_clause": "Consumer Fact F11 and proof step 2.1",
        "required_repair": "none; the downward-convergence argument uses only the unchanged probability-zero-or-one conclusion"
      },
      {
        "path": [
          "thm-blumenthal-zero-one-law",
          "thm-brownian-filtration-martingale-representation",
          "cor-brownian-filtration-local-martingales-have-continuous-versions"
        ],
        "affected_clause": "Corollary Fact F1",
        "required_repair": "none; the corollary consumes only the unchanged martingale-representation statement"
      },
      {
        "path": [
          "thm-blumenthal-zero-one-law",
          "thm-brownian-filtration-martingale-representation",
          "cor-square-integrable-brownian-terminal-variables-have-ito-representations"
        ],
        "affected_clause": "Corollary Fact F1",
        "required_repair": "none; the corollary consumes only the unchanged fixed-horizon representation statement"
      }
    ]
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append_batch",
    "run": "phase-2-remaining-27",
    "phase": "repeat",
    "round": 1,
    "unit": 8,
    "entries": [
      {
        "subject": "cor-deterministic-ito-integrals-are-gaussian",
        "severity": "fatal",
        "subclass": "missing-prerequisite",
        "location": "fact-F7-and-proof-step-2.1",
        "disposition": "fixed",
        "post_sha256": "59b1c6b3e309501c344b6d935d613348add93f67748f12864411f723b0532a34",
        "evidence": "The load-bearing step approximation is now derived by zero-extending to R, applying published box-step density under Countable Choice, restricting to [0,T], and refining the finitely many endpoints."
      },
      {
        "subject": "cor-deterministic-ito-integrals-are-gaussian",
        "severity": "nonfatal",
        "subclass": "measure-space-interface-mismatch",
        "location": "fact-F5-and-proof-steps-1.1-2.1",
        "disposition": "fixed",
        "post_sha256": "59b1c6b3e309501c344b6d935d613348add93f67748f12864411f723b0532a34",
        "evidence": "The probability-space Cauchy--Schwarz citation was unnecessary for Lebesgue L2[0,T]; F5 now derives variance convergence from the reverse triangle inequality in the supplied normed-space interface."
      },
      {
        "subject": "def-continuous-time-adapted-process-and-martingale",
        "severity": "fatal",
        "subclass": "definition-underconstraint",
        "location": "definition-clause-4",
        "disposition": "fixed",
        "post_sha256": "a61e0011a7d8de307e098d2d583329548a3a34c1566f07dd83d5a8fbe3119616",
        "evidence": "Clause 4 now requires E|X_0|<infinity, making centered stopped martingales equivalent to ordinary stopped martingales and excluding nonintegrable F_0-measurable constant processes."
      },
      {
        "subject": "thm-density-of-elementary-predictable-processes-in-predictable-l2",
        "severity": "nonfatal",
        "subclass": "supplier-scope-overstatement",
        "location": "fact-F2",
        "disposition": "fixed",
        "post_sha256": "eb8838650dbf898b6cf0979020f9bb2cd03a424b03b6aaf477802607f1622eb8",
        "evidence": "F2 now records only the quotient L2 norm and norm axioms actually supplied and used; the unsupported claim that this norm is induced by an inner product was removed."
      },
      {
        "subject": "thm-space-time-harmonic-functions-yield-brownian-local-martingales",
        "severity": "nonfatal",
        "subclass": "carrier-title-overstatement",
        "location": "frontmatter-title",
        "disposition": "fixed",
        "post_sha256": "0da30e042f3fd30491b1fa93360ff09cbbdbe0e33dfdddf83e956865df8f02e7",
        "evidence": "The title now says 'up to exit lifetime,' matching clause 3, whose localizers increase only to tau_U and whose process is not defined after that lifetime."
      },
      {
        "subject": "thm-integration-by-parts-for-brownian-ito-processes",
        "severity": "fatal",
        "subclass": "downstream-initial-integrability-gap",
        "location": "statement-local-martingale-corollary-fact-F2-and-proof-step-6.1",
        "disposition": "requires_owner_repair",
        "evidence": "The draft consumer still asserts that XY-[X,Y] is a local martingale without integrability of X_0Y_0. With zero coefficients and a nonintegrable finite F_0-measurable initial product this is a constant nonintegrable process, so the corollary must assume E|X_0Y_0|<infinity or remain centered by subtracting X_0Y_0."
      }
    ]
  },
  {
    "ledger": "published-consumer-supplier",
    "supplier_ids": [
      "cor-deterministic-ito-integrals-are-gaussian",
      "def-continuous-time-adapted-process-and-martingale",
      "thm-density-of-elementary-predictable-processes-in-predictable-l2",
      "thm-space-time-harmonic-functions-yield-brownian-local-martingales"
    ],
    "audit_status": "complete_with_draft_repair_required",
    "finding": "The whole-library dependency and body-link closure contains 46 item candidates, all draft and none published. The Gaussian corollary and predictable-density repairs preserve their conclusions, so their consumers use unchanged interfaces. The harmonic direct consumers already use the equation alone or the precise up-to-exit assertion. Consumers of the strengthened local-martingale definition have integrable initial values or zero-start martingale components except items/thm-integration-by-parts-for-brownian-ito-processes.md: its statement, F2, and step 6.1 retain the rejected nonintegrable-initial-value convention and require owner repair before certification.",
    "published_consumers": [],
    "required_repairs": [
      {
        "id": "thm-integration-by-parts-for-brownian-ito-processes",
        "path": "items/thm-integration-by-parts-for-brownian-ito-processes.md",
        "clauses": [
          "Statement local-martingale corollary",
          "F2 final sentence",
          "proof step 6.1"
        ],
        "reason": "A nonintegrable finite F_0-measurable constant process is no longer a local martingale; add integrability of X_0Y_0 to the uncentered corollary or assert only the centered process."
      }
    ],
    "page_interfaces": [
      {
        "path": "library/probability/the-ito-integral-with-respect-to-brownian-motion.md",
        "status": "draft",
        "repair_required": false,
        "reason": "The page describes the unchanged density and Gaussian conclusions and does not restate either repaired support claim."
      },
      {
        "path": "library/probability/itos-formula-and-brownian-martingales.md",
        "status": "draft",
        "repair_required": false,
        "reason": "The page's harmonic prose is compatible with stopped true martingales and the up-to-lifetime local assertion; it does not restate the defective integration-by-parts corollary."
      }
    ]
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append_batch",
    "run": "phase-2-remaining-27",
    "phase": "repeat",
    "round": 1,
    "unit": 9,
    "entries": [
      {
        "subject": "def-reduced-generalized-homology-theory",
        "severity": "fatal",
        "subclass": "incoherent-structure-data",
        "location": "definition-item-3-and-exactness-axiom",
        "disposition": "fixed",
        "post_sha256": "31e34c7642d5aa37b92cce733708c60b90060a8ec8012d6f7031667e4231b697",
        "evidence": "The cofiber connector is now the specified composite sigma_n(X)^{-1}(q_f)_*, so its sign and normalization cannot vary independently of the suspension data."
      },
      {
        "subject": "lem-pairings-of-skeletal-exact-couples-induce-multiplicative-ahss",
        "severity": "nonfatal",
        "subclass": "first-page-naturality-overstatement",
        "location": "statement-a-and-proof-step-2.1",
        "disposition": "fixed",
        "post_sha256": "2068d7230ac55a0a80721d44994d058a19e888a8ee2ad460395a2c6ca223d303",
        "evidence": "E1 naturality is now asserted only for morphisms of theories and cellular maps whose chosen filtered diagonals commute strictly; arbitrary independently chosen approximations are explicitly excluded, while E2 remains the natural cup product."
      },
      {
        "subject": "lem-complex-orientation-of-underlying-real-bundles",
        "severity": "fatal",
        "subclass": "supplier-hypothesis-omitted",
        "location": "statement-3-and-proof-step-3.3",
        "disposition": "fixed",
        "post_sha256": "b230e2e34ab11fbf2b732826b4fb26b12f9e68bd06e120adf37216af7bc7fb5f",
        "evidence": "The Euler-square assertion now assumes V numerable and explicitly transports its numeration to the complexification, underlying real bundle and Whitney sum before applying the Euler-class supplier."
      },
      {
        "subject": "ex-complex-k-ahss-for-spheres",
        "severity": "fatal",
        "subclass": "spectral-sequence-page-out-of-scope",
        "location": "verification-step-2.2",
        "disposition": "fixed",
        "post_sha256": "da90e65b36d4b42146d76e05802c503775c8b86a9849774c3bb6ae565205dcbb",
        "evidence": "The n=1 case now uses only differentials d_r with r at least two on the supplied E2-based AHSS; their target columns exceed the dimension of S^1."
      },
      {
        "subject": "ex-stability-and-rank-cutoff-under-adding-a-trivial-summand",
        "severity": "nonfatal",
        "subclass": "supplier-base-scope-omitted",
        "location": "example-hypotheses-and-proof-step-1.2",
        "disposition": "fixed",
        "post_sha256": "b101d42f21819bbfedcdb27489dff0bf0afad893f3d4353979f0ca12c4ab5087",
        "evidence": "The example now excludes the empty base, as its Pontryagin stability supplier does under the repository convention that path-connectedness alone permits the empty space."
      },
      {
        "subject": "lem-complexified-tautological-line-resolves-real-projective-k-theory-extensions",
        "severity": "nonfatal",
        "subclass": "differential-case-omitted",
        "location": "proof-step-1.2",
        "disposition": "fixed",
        "post_sha256": "76d0fc9e9dd03ce242c38794061b70d93a1c1baf666a3161cd43ce82bad1f226",
        "evidence": "The AHSS differential analysis now includes the free top source at p=r for odd r and kills every outgoing differential from it because its target column is greater than r."
      },
      {
        "subject": "lem-homological-ahss-exact-couple-from-the-skeletal-filtration",
        "severity": "fatal",
        "subclass": "pair-boundary-target-misidentified",
        "location": "fact-F4-and-proof-steps-1.4-through-2.1",
        "disposition": "fixed",
        "post_sha256": "3f1ed0846eb96dfa062413ac36c4019f10bfeeca8d34825bc5803402e2a7918a",
        "evidence": "The carrier no longer calls the disk-pair boundary an isomorphism onto reduced sphere homology; it uses structural suspension and the reduced kernel component of the actual unreduced pair boundary."
      },
      {
        "subject": "lem-ku-representability-and-skeletal-postnikov-d-three-comparison",
        "severity": "fatal",
        "subclass": "representing-space-bidegree-misindexed",
        "location": "fact-A5-and-proof-steps-1.3-through-2.1",
        "disposition": "fixed",
        "post_sha256": "862b3733afea322d9d44bfb1f2ae366cd4711a2e33a0695e852313a2e793a05d",
        "evidence": "At bidegree (p,q) the proof now uses ku_(p+q), verifies pi_p=pi_(-q), and evaluates the relevant k_(p+3) layer rather than applying the first invariant of ku_(-q) to an H^p class."
      },
      {
        "subject": "lem-universal-oriented-sphere-bundle-has-bso-n-minus-one-total-space",
        "severity": "nonfatal",
        "subclass": "title-overstates-model-equivalence",
        "location": "item-and-owning-page-title",
        "disposition": "fixed",
        "post_sha256": "14105cf3eb3aa621b285431ab817d23789cc5fb8a40140383f843e411fe6c9a4",
        "evidence": "The title now says that the actual universal sphere-bundle total space has the homotopy type of BSO(n-1), matching the proved complement equivalence rather than claiming literal equality."
      },
      {
        "subject": "thm-homological-atiyah-hirzebruch-spectral-sequence",
        "severity": "nonfatal",
        "subclass": "stale-supplier-convention",
        "location": "Statement final paragraph, proof step 1.2, Source notes, and proof-contract citation F1",
        "disposition": "pending-owner-repair",
        "supplier_path": [
          "def-reduced-generalized-homology-theory",
          "thm-homological-atiyah-hirzebruch-spectral-sequence"
        ],
        "evidence": "The theorem still says that connecting and suspension maps are separately specified and that arbitrary coordinate automorphisms absorb their mismatch. The repaired definition instead requires every connector to be sigma^{-1}q_*, so that explanatory language and the exact F1 quote are now false even though the AHSS conclusion remains valid.",
        "required_repair": "Replace the independent-data language by the required suspension-compatible cofiber convention, simplify or reinterpret the coordinate comparison accordingly, and refresh F1 in the aggregate and batch-9 proof contracts."
      },
      {
        "subject": "thm-first-possible-complex-k-ahss-differential-is-integral-sq-three",
        "severity": "nonfatal",
        "subclass": "stale-postnikov-indexing",
        "location": "fact A2 and proof-contract citation A2",
        "disposition": "pending-owner-repair",
        "supplier_path": [
          "lem-ku-representability-and-skeletal-postnikov-d-three-comparison",
          "thm-first-possible-complex-k-ahss-differential-is-integral-sq-three"
        ],
        "evidence": "Fact A2 still calls the operation the first representing-space Postnikov obstruction. The repaired supplier proves that bidegree (p,q) is evaluated in ku_(p+q) by its relevant k_(p+3) layer, a stable Bott translate; the theorem's d3 conclusion is unchanged but this indexing description and its exact supplier quote are stale.",
        "required_repair": "Describe A2 as the relevant Postnikov layer of the total-degree representing space ku_(p+q), retain the Bott-translation conclusion, and refresh only the supplier-A2 quote in both current contracts."
      },
      {
        "subject": "prop-degree-d-sphere-maps-act-by-multiplication-by-d-in-any-generalized-theory",
        "severity": "nonfatal",
        "subclass": "stale-exact-supplier-quote",
        "location": "proof-contract citation F3",
        "disposition": "pending-owner-repair",
        "supplier_path": [
          "def-reduced-generalized-homology-theory",
          "prop-degree-d-sphere-maps-act-by-multiplication-by-d-in-any-generalized-theory"
        ],
        "evidence": "The degree calculation uses only suspension isomorphisms and remains mathematically valid, but its exact F3 quote no longer occurs after the homology definition added the required cofiber-connector compatibility.",
        "required_repair": "Refresh F3 in the aggregate and batch-9 proof contracts after owner review; do not alter the proposition body. The separately reported F4 mismatch is not caused by this supplier repair."
      },
      {
        "subject": "thm-multiplicative-ahss-for-a-multiplicative-generalized-theory",
        "severity": "nonfatal",
        "subclass": "stale-exact-supplier-quotes",
        "location": "proof-contract citations A1 and A3",
        "disposition": "pending-owner-repair",
        "supplier_path": [
          "lem-pairings-of-skeletal-exact-couples-induce-multiplicative-ahss",
          "thm-multiplicative-ahss-for-a-multiplicative-generalized-theory"
        ],
        "evidence": "The theorem already limits the intrinsic ring structure and natural cup product to E2 onward, so its mathematics agrees with the repair. Its A1 and A3 exact quotes are stale because the supplier now states the stricter compatibility condition for E1 naturality.",
        "required_repair": "Refresh A1 and A3 in the aggregate and batch-9 proof contracts to quote the repaired supplier; no theorem-body or downstream result change is needed."
      },
      {
        "subject": "ex-realification-of-a-complex-line-compares-c-one-w-two-and-euler",
        "severity": "nonfatal",
        "subclass": "stale-exact-supplier-quote",
        "location": "proof-contract citation F4",
        "disposition": "pending-owner-repair",
        "supplier_path": [
          "lem-complex-orientation-of-underlying-real-bundles",
          "ex-realification-of-a-complex-line-compares-c-one-w-two-and-euler"
        ],
        "evidence": "The line-bundle example is already in the numerable CW setting and uses an unchanged orientation conclusion, but F4 quotes the supplier Statement from before its Euler-square clause acquired the numerability hypothesis.",
        "required_repair": "Refresh only F4 in the aggregate and batch-9 proof contracts; the example's statement and proof require no mathematical change."
      },
      {
        "subject": "lem-cohomology-ring-of-infinite-complex-projective-space",
        "severity": "nonfatal",
        "subclass": "stale-exact-supplier-quote",
        "location": "proof-contract citation F6",
        "disposition": "pending-owner-repair",
        "supplier_path": [
          "lem-complex-orientation-of-underlying-real-bundles",
          "lem-cohomology-ring-of-infinite-complex-projective-space"
        ],
        "evidence": "The universal complex line is numerable and the proof uses only the unchanged canonical orientation, but F6's exact quote became stale when the supplier's separate real-bundle Euler clause was restricted to numerable bundles.",
        "required_repair": "Refresh the supplier portion of F6 in the aggregate and both batch-9 and batch-10 proof contracts; no item-body change follows from the repair."
      },
      {
        "subject": "thm-mod-two-reduction-of-chern-classes",
        "severity": "nonfatal",
        "subclass": "stale-exact-supplier-quote",
        "location": "proof-contract citation F6",
        "disposition": "pending-owner-repair",
        "supplier_path": [
          "lem-complex-orientation-of-underlying-real-bundles",
          "thm-mod-two-reduction-of-chern-classes"
        ],
        "evidence": "The theorem assumes a numerable complex bundle and therefore meets the repaired supplier's scope. Its F6 exact Statement quote is stale solely because that supplier now expressly records numerability for the Euler-square clause.",
        "required_repair": "Refresh F6 in the aggregate and batch-9 proof contracts; preserve the theorem body and treat the other reported contract mismatches as independent findings."
      },
      {
        "subject": "thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle",
        "severity": "nonfatal",
        "subclass": "stale-exact-supplier-quote",
        "location": "proof-contract citation F3",
        "disposition": "pending-owner-repair",
        "supplier_path": [
          "lem-complex-orientation-of-underlying-real-bundles",
          "thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle"
        ],
        "evidence": "The theorem already assumes its complex bundle is numerable, and its use of the canonical complex orientation remains licensed. Only F3's exact quote of the expanded supplier Statement has become stale.",
        "required_repair": "Refresh F3 in the aggregate and batch-9 proof contracts; no theorem-body edit is required, and unrelated contract mismatches remain outside this supplier path."
      },
      {
        "subject": "thm-top-pontryagin-class-is-the-square-of-the-euler-class",
        "severity": "nonfatal",
        "subclass": "stale-exact-supplier-quotes",
        "location": "proof-contract citations F3 and F4",
        "disposition": "pending-owner-repair",
        "supplier_path": [
          "lem-complex-orientation-of-underlying-real-bundles",
          "thm-top-pontryagin-class-is-the-square-of-the-euler-class"
        ],
        "evidence": "The theorem's oriented real bundle is numerable, so the repaired Euler-square supplier applies exactly as required. Both F3 and F4 contain obsolete exact quotes of that supplier, while the mathematical proof and conclusion are unchanged.",
        "required_repair": "Refresh F3 and F4 in the aggregate and batch-9 proof contracts; do not change the theorem body or conflate the unrelated F1 contract mismatch with this repair."
      }
    ]
  },
  {
    "ledger": "published-consumer-supplier",
    "supplier_ids": [
      "def-reduced-generalized-homology-theory",
      "ex-complex-k-ahss-for-spheres",
      "ex-stability-and-rank-cutoff-under-adding-a-trivial-summand",
      "lem-complex-orientation-of-underlying-real-bundles",
      "lem-complexified-tautological-line-resolves-real-projective-k-theory-extensions",
      "lem-homological-ahss-exact-couple-from-the-skeletal-filtration",
      "lem-ku-representability-and-skeletal-postnikov-d-three-comparison",
      "lem-pairings-of-skeletal-exact-couples-induce-multiplicative-ahss",
      "lem-universal-oriented-sphere-bundle-has-bso-n-minus-one-total-space"
    ],
    "audit_status": "complete",
    "finding": "The complete declared-dependency and reference closure contains 45 current consumers, all with draft status, and no published consumer. Two direct consumers need wording aligned with the repaired connector and Postnikov conventions, and seven mathematically unaffected direct consumers need exact supplier quotes refreshed; those targets are recorded above. Every other direct or transitive candidate uses an unchanged conclusion under hypotheses already satisfied, so no additional content repair is prescribed.",
    "published_consumers": []
  }
]

For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. Downstream is an array of item IDs; include consumers reached through changed intermediate items.

Assigned input:
[
  "cex-a-nonadapted-step-integrand-breaks-the-ito-isometry",
  "def-killing-dual-vector-of-a-root",
  "cor-opposite-root-spaces-pair-nondegenerately",
  "prop-bracket-of-opposite-root-spaces-is-the-root-line-in-the-cartan-subalgebra",
  "lem-killing-length-of-a-root-is-nonzero",
  "def-coroot-of-a-lie-algebra-root",
  "thm-root-sl-two-triple",
  "thm-root-string-property",
  "cor-cartan-integers-are-integral",
  "cor-the-only-scalar-multiples-of-a-root-that-are-roots-are-plus-or-minus-the-root",
  "def-root-reflection-from-a-coroot",
  "thm-root-reflections-preserve-the-root-set",
  "thm-root-spaces-of-a-complex-semisimple-lie-algebra-are-one-dimensional",
  "thm-roots-of-a-complex-semisimple-lie-algebra-form-a-reduced-crystallographic-root-system",
  "prop-the-center-is-the-common-kernel-of-all-roots-inside-the-cartan-subalgebra",
  "prop-the-roots-form-a-reduced-crystallographic-euclidean-root-system",
  "def-partial-order-on-weights",
  "def-positive-and-negative-nilpotent-subalgebras-and-borel-subalgebra",
  "def-highest-weight-vector-and-highest-weight-module",
  "def-integral-dominant-and-strictly-dominant-weights",
  "ex-verma-modules-for-sl-two",
  "cex-a-nondominant-integral-verma-quotient-that-is-infinite-dimensional",
  "lem-continuous-functional-calculus-produces-a-regular-pvm",
  "thm-spectral-theorem-for-bounded-normal-operators-pvm-form",
  "def-borel-functional-calculus-for-a-bounded-normal-operator",
  "thm-borel-functional-calculus-for-bounded-normal-operators",
  "thm-self-adjoint-norm-and-spectrum-extrema",
  "cor-spectral-projections-and-resolution-of-the-identity",
  "ex-pvm-of-a-multiplication-operator",
  "cex-a-normal-operator-need-not-have-any-eigenvectors",
  "def-adjoint-of-a-densely-defined-unbounded-operator",
  "lem-unbounded-adjoint-is-well-defined-and-closed",
  "thm-closure-of-a-closable-operator",
  "thm-closable-iff-adjoint-domain-is-dense",
  "def-symmetric-self-adjoint-and-essentially-self-adjoint",
  "cex-an-everywhere-defined-closed-operator-on-a-banach-space-cannot-be-unbounded",
  "thm-ito-isometry-for-elementary-integrands",
  "def-ito-integral-for-square-integrable-predictable-processes",
  "def-locally-square-integrable-predictable-brownian-integrand",
  "lem-general-ito-integral-is-independent-of-the-approximating-sequence-and-ae-representative",
  "lem-cross-ito-isometry",
  "thm-ito-isometry-and-linearity-in-predictable-l2",
  "thm-ito-integral-process-has-a-continuous-martingale-version",
  "thm-doob-maximal-bound-for-the-ito-integral",
  "thm-localized-ito-integral",
  "def-continuous-brownian-ito-process",
  "lem-adapted-continuous-processes-are-progressively-measurable",
  "thm-stopping-an-ito-integral",
  "thm-quadratic-variation-of-an-ito-integral",
  "thm-quadratic-covariation-of-brownian-ito-processes",
  "thm-ito-formula-one-dimensional",
  "cor-exponential-brownian-martingale",
  "cex-an-unbounded-stopped-exponential-local-martingale-needs-uniform-integrability",
  "ex-borel-functional-calculus-defines-a-discontinuous-characteristic-function",
  "cex-continuous-functional-calculus-cannot-produce-every-spectral-projection",
  "def-complex-projective-bundle-and-tautological-complex-line",
  "lem-complex-tautological-euler-class-restricts-to-the-projective-fiber-generator",
  "thm-integral-complex-projective-bundle-theorem",
  "def-chern-classes-from-the-projective-bundle-relation",
  "lem-complex-orientation-of-underlying-real-bundles",
  "lem-integral-cohomology-ring-of-complex-projective-space-by-splitting",
  "lem-cohomology-ring-of-infinite-complex-projective-space",
  "thm-first-chern-class-classifies-complex-line-bundles",
  "prop-first-chern-class-of-tensor-dual-and-conjugate-lines",
  "def-complex-flag-bundle-and-chern-roots",
  "thm-complex-splitting-principle-with-integral-injective-pullback",
  "thm-naturality-normalization-and-whitney-sum-for-chern-classes",
  "prop-complexification-is-conjugation-invariant",
  "cor-odd-chern-classes-of-a-complexified-real-bundle-are-two-torsion",
  "def-pontryagin-classes-by-complexification",
  "def-real-projective-bundle-and-tautological-line",
  "def-tautological-degree-one-class-on-a-real-projective-bundle",
  "lem-tautological-degree-one-class-is-well-defined-and-fiber-generating",
  "thm-mod-two-real-projective-bundle-theorem",
  "def-stiefel-whitney-classes-from-the-projective-bundle-relation",
  "def-real-flag-bundle-and-stiefel-whitney-roots",
  "thm-naturality-of-stiefel-whitney-classes",
  "thm-real-splitting-principle-with-mod-two-injective-pullback",
  "thm-whitney-sum-formula-for-stiefel-whitney-classes",
  "prop-first-stiefel-whitney-class-classifies-orientability",
  "thm-mod-two-euler-class-is-the-top-stiefel-whitney-class",
  "thm-mod-two-reduction-of-chern-classes",
  "lem-integral-powers-of-the-complexified-universal-real-line",
  "cex-integral-total-pontryagin-multiplicativity-cannot-ignore-two-torsion",
  "ex-stiefel-whitney-class-of-the-universal-real-line",
  "ex-total-stiefel-whitney-class-of-a-sum-of-universal-lines",
  "prop-euler-class-of-an-oriented-odd-rank-bundle-is-two-torsion",
  "cex-odd-rank-euler-class-need-not-vanish-with-two-torsion-coefficients",
  "cex-product-measure-ae-equality-is-not-pointwise-equality-of-integrands",
  "def-resolvent-and-spectrum-of-a-closed-unbounded-operator",
  "thm-self-adjoint-resolvent-estimate",
  "thm-self-adjointness-range-criterion",
  "def-cayley-transform-of-a-self-adjoint-operator",
  "lem-unbounded-pvm-integral-is-well-defined-and-closed",
  "thm-cayley-correspondence",
  "thm-support-and-uniqueness-of-the-spectral-measure",
  "thm-spectral-theorem-for-unbounded-self-adjoint-operators",
  "thm-unbounded-borel-functional-calculus",
  "ex-unbounded-multiplication-operator-and-its-domain",
  "lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group",
  "ex-position-operator-on-l-two-of-r",
  "cex-strongly-continuous-unitary-group-need-not-be-norm-continuous",
  "thm-compact-group-roots-form-a-reduced-crystallographic-root-system-on-the-semisimple-part",
  "thm-analytic-and-root-system-weyl-groups-agree",
  "def-root-datum-of-a-compact-connected-lie-group",
  "def-dominant-integrable-highest-weight-cyclic-module",
  "thm-triangular-decomposition-of-a-complex-semisimple-lie-algebra",
  "lem-highest-weight-modules-have-weights-below-the-top-weight",
  "def-serre-lie-algebra-of-a-finite-type-cartan-matrix",
  "prop-dimension-formula-from-roots",
  "thm-serre-presentation-theorem",
  "lem-pbw-shows-the-dominant-cyclic-highest-weight-generator-survives",
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
  "thm-existence-theorem-for-complex-semisimple-lie-algebras",
  "thm-isomorphism-theorem-for-complex-semisimple-lie-algebras"
]


