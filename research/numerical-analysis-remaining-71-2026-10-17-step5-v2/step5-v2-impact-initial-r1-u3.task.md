# Step 5 repair: impact-initial, round 1, unit 3

Read briefs/step5-owner-repair.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/impact-initial-1.json.



Owner-confirmed Step-4 reader concerns assigned for genuine current review and smallest necessary repair (these are not judge rejections or downstream claims):
[
  {
    "id": "thm-na-weighted-rational-alternation-characterization",
    "batch": "4",
    "source_kind": "concern",
    "reader_batch": "4",
    "concern_index": 0,
    "concern": {
      "id": "thm-na-weighted-rational-alternation-characterization",
      "concern": "Step 2.2 says, “By step 1.2, r has N+2 alternating nodes,” but step 1.2 only sets up the contradiction and constructs a perturbation; necessity is completed in step 2.1. Likewise step 3.1 attributes the two directions to steps 1.1 and 1.2 while omitting step 2.1. The complete argument is present, but these conclusion references point to the setup rather than its discharge.",
      "severity": "presentation"
    },
    "before_guard_sha256": "0b2d91719be97118b5dffff71ff504c6dba5120dd8afa49eb18e60ffc76d5308",
    "owner_review": {
      "reviewed_by": "root",
      "confirmed_defect": true,
      "reviewed_at": "2026-10-18T04:19:40.217194+00:00",
      "reason": "I read the full current proof. Necessity is only completed by the admissible perturbation contradiction in step2.1, so the conclusion references to step1.2 must credit step2.1. The criterion, degree count, zero-error case and uniqueness proof stay intact.",
      "evidence_file": "research/numerical-analysis-remaining-71-2026-10-17-owner-planning-integration/step5-admission-root-confirmations.json",
      "proposed_edits": [
        {
          "source_excerpt": "By step 1.2, $r$ has $N+2$ alternating nodes.",
          "proposed_replacement": "By step 2.1, $r$ has $N+2$ alternating nodes."
        },
        {
          "source_excerpt": "[F1, F3, F5, F7, step 1.2, algebra]",
          "proposed_replacement": "[F1, F3, F5, F7, step 2.1, algebra]"
        },
        {
          "source_excerpt": "Steps 1.1 and 1.2 prove the two directions of the criterion for positive error;",
          "proposed_replacement": "Steps 1.1 and 2.1 prove the two directions of the criterion for positive error;"
        },
        {
          "source_excerpt": "[F2, step 1.1, step 1.2, step 1.3, step 2.2]",
          "proposed_replacement": "[F2, step 1.1, step 2.1, step 1.3, step 2.2]"
        }
      ],
      "candidate_patch_file": "research/numerical-analysis-remaining-71-2026-10-17-owner-planning-integration/step5-reader-concern-proposals-a.json"
    },
    "digest_path": "/home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-batch-4-step5-context.json"
  },
  {
    "id": "lem-na-d4-multilevel-detail-support-and-moments",
    "batch": "6",
    "source_kind": "concern",
    "reader_batch": "6",
    "concern_index": 0,
    "concern": {
      "id": "lem-na-d4-multilevel-detail-support-and-moments",
      "concern": "Step 1.1 says that at the displayed index t, “its coefficient is” g_r times the product of the h_{s_v}. Different tuples can produce the same t, so an effective row entry is the sum of those products. Already at ℓ=2, t=2 receives both (r,s₁)=(0,2) and (1,0), giving g₀h₂+g₁h₀, rather than either individual product. The support, moment and normalization conclusions remain valid after explicitly accumulating coincident contributions; the current coefficient description omits that summation.",
      "severity": "gap-a-reader-closes"
    },
    "before_guard_sha256": "8142afa477c2fc5b0e9a95b4e222d9b2dec384809488715c82af3bfde798c757",
    "owner_review": {
      "reviewed_by": "root",
      "confirmed_defect": true,
      "reviewed_at": "2026-10-18T04:19:40.217194+00:00",
      "reason": "I read the full current proof. At stage2, index2 receives both g0h2 and g1h0; individual tuple products must be accumulated at their shared index. The support interval has fewer thanN integer locations, so location-based modulo injection, affine cancellation and orthogonal row norms remain valid.",
      "evidence_file": "research/numerical-analysis-remaining-71-2026-10-17-owner-planning-integration/step5-admission-root-confirmations.json",
      "proposed_edits": [
        {
          "source_excerpt": "t=2^{\\ell-1}r+2^{\\ell-2}s_{\\ell-1}+\\cdots+2s_2+s_1",
          "proposed_replacement": "t=2^{\\ell-1}r+\\sum_{v=1}^{\\ell-1}2^{v-1}s_v"
        },
        {
          "source_excerpt": "its coefficient is $g_r\\prod_{v=1}^{\\ell-1}h_{s_v}$.",
          "proposed_replacement": "each tuple contributes $g_r\\prod_{v=1}^{\\ell-1}h_{s_v}$ at that index, and the effective coefficient at $t$ is the sum of these products over all tuples with that index."
        },
        {
          "source_excerpt": "Periodic reduction only assigns these taps to residues; because step 1.1 gives fewer than $N$ taps, each residue is unique and the row can be lifted back to the same support interval.",
          "proposed_replacement": "After summing all tuple contributions at each lifted location, periodic reduction assigns the resulting effective coefficients to residues. Step 1.1 confines these locations to one interval of fewer than $N$ consecutive integers, so reduction modulo $N$ is injective on that interval and the row lifts back to the same interval."
        }
      ],
      "candidate_patch_file": "research/numerical-analysis-remaining-71-2026-10-17-owner-planning-integration/step5-reader-concern-proposals-a.json"
    },
    "digest_path": "/home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-batch-6-step5-context.json"
  },
  {
    "id": "lem-periodic-cell-poincare",
    "batch": "65",
    "source_kind": "concern",
    "reader_batch": "65",
    "concern_index": 0,
    "concern": {
      "id": "lem-periodic-cell-poincare",
      "concern": "Step 2.1 says, “The inherited H1 norm is complete because V-periodic is closed in H1-periodic.” This also requires completeness of the ambient H1 space. The published supplier lem-w-one-two-is-a-hilbert-space supplies precisely that fact, but it is absent from this item's deps and facts. The conclusion is valid; the omitted completeness prerequisite is immediately supplied by that lemma.",
      "severity": "gap-a-reader-closes"
    },
    "before_guard_sha256": "bf2aabb705e1e760d01d0c4c722b427496a0e810d38ec0f806bfce05cb524b92",
    "owner_review": {
      "reviewed_by": "root",
      "confirmed_defect": true,
      "reviewed_at": "2026-10-18T04:19:40.217194+00:00",
      "reason": "I read the full current proof and the published H1 Hilbert-space theorem. Closedness alone needs ambient completeness; under the existing Countable Choice and positive-dimensional open unit cube, that supplier makes H1 complete. Closed periodic closure and continuous mean imply a complete mean-zero subspace, with the same norm equivalence.",
      "evidence_file": "research/numerical-analysis-remaining-71-2026-10-17-owner-planning-integration/step5-admission-root-confirmations.json",
      "proposed_edits": [
        {
          "source_excerpt": "  - thm-tonelli-theorem-for-sigma-finite-product-spaces\n",
          "proposed_replacement": "  - thm-tonelli-theorem-for-sigma-finite-product-spaces\n  - lem-w-one-two-is-a-hilbert-space\n"
        },
        {
          "source_excerpt": "\n## Proof\n",
          "proposed_replacement": "\n[F7] [[lem-w-one-two-is-a-hilbert-space]]: under Countable Choice, the real Sobolev space $H^1(Y)$ is Hilbert and hence complete in its inherited norm.\n\n## Proof\n"
        },
        {
          "source_excerpt": "The inherited $H^1$ norm is complete because $V_\\#$ is closed in $H^1_\\#$;",
          "proposed_replacement": "By [F7], $H^1(Y)$ is complete. Its closure-defined subspace $H^1_\\#(Y)$ is closed, and the mean is continuous by $|\\int_Yv|\\le\\|v\\|_2\\le\\|v\\|_{H^1}$, so $V_\\#$ is closed in $H^1(Y)$. Every $H^1$-Cauchy sequence in $V_\\#$ therefore has an ambient limit that remains in $V_\\#$; hence its inherited $H^1$ norm is complete."
        },
        {
          "source_excerpt": "[F5, step 1.2, F1, F3, algebra] ∎",
          "proposed_replacement": "[F5, step 1.2, F1, F3, F7, algebra] ∎"
        }
      ],
      "candidate_patch_file": "research/numerical-analysis-remaining-71-2026-10-17-owner-planning-integration/step5-reader-concern-proposals-b.json"
    },
    "digest_path": "/home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-batch-65-step5-context.json"
  },
  {
    "id": "thm-periodic-effective-tensor-symmetric-elliptic",
    "batch": "65",
    "source_kind": "concern",
    "reader_batch": "65",
    "concern_index": 1,
    "concern": {
      "id": "thm-periodic-effective-tensor-symmetric-elliptic",
      "concern": "Step 1.1 explains its first equality p·A*q = integral a(p+gradient χ_p)·(q+gradient χ_q) as “adding the zero term with gradient χ_q.” Starting from p·A*q, the added term is integral a(q+gradient χ_q)·gradient χ_p, which vanishes by the q cell equation. Both cell equations were correctly established immediately beforehand, so the displayed identity and theorem remain valid; the explanation names the wrong corrector.",
      "severity": "presentation"
    },
    "before_guard_sha256": "92689422a7e8b10e4b9f5beaea66bb2a588e703aeb21f60f2802222a41175e98",
    "owner_review": {
      "reviewed_by": "root",
      "confirmed_defect": true,
      "reviewed_at": "2026-10-18T04:19:40.217194+00:00",
      "reason": "I read the full current proof. Expanding p dot Astar q adds the term integral a(q+grad chi_q) dot grad chi_p, already zero by the preceding interchanged cell equation. Only the explanation must name chi_p; the symmetric energy identity and both ellipticity constants remain unchanged.",
      "evidence_file": "research/numerical-analysis-remaining-71-2026-10-17-owner-planning-integration/step5-admission-root-confirmations.json",
      "proposed_edits": [
        {
          "source_excerpt": "where the first equality follows from [F1] after adding the zero term with $\\nabla\\chi_q$,",
          "proposed_replacement": "where the first equality follows from [F1] after adding the zero term with $\\nabla\\chi_p$,"
        }
      ],
      "candidate_patch_file": "research/numerical-analysis-remaining-71-2026-10-17-owner-planning-integration/step5-reader-concern-proposals-b.json"
    },
    "digest_path": "/home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-batch-65-step5-context.json"
  }
]. Review the bound original digest and individual owner evidence; repair confirmed presentation defects as well as mathematical defects. Return ordinary reviews, with no adjudication decision for these concerns. Only actual Statement/Definition changes propagate consumer examinations.

Owner-confirmed findings from original native initial adjudication, assigned for current review and smallest necessary repair:
[
  {
    "id": "alg-certified-integer-order-bessel-evaluation",
    "batch": "25",
    "unit": "25",
    "open_finding_index": 6,
    "finding": {
      "ledger": "canonical-defect-ledger",
      "action": "record-open-finding",
      "id": "alg-certified-integer-order-bessel-evaluation",
      "route": "frontier owner, batch 25; outside this dispatch item assignment",
      "severity": "nonfatal",
      "affected_use": "Definition stage-constant paragraph attributes the alternating arctangent tails to lem-trigonometric-identities-machin-and-range-reduction, whose Statement only contains sine/cosine tails.",
      "minimality": "Cite the actual arctangent-tail lemma in the stage-constant paragraph and deps; no numerical instruction or domain needs changing.",
      "reason": "The explicit estimate is correct and proved in the existing range-reduced arctangent supplier; this is the same direct citation mismatch corrected in the assigned algorithms.",
      "uncertain": false,
      "source_urls": [
        "https://dlmf.nist.gov/4.24#E3"
      ],
      "familiar": true
    },
    "route": "frontier-owner",
    "output_finding_index": 2,
    "output_finding": {
      "ledger": "canonical-defect-ledger",
      "action": "record-open-finding",
      "id": "alg-certified-integer-order-bessel-evaluation",
      "reason": "Its stage-constant paragraph retains the arctangent-tail attribution mismatch. Route a citation/dependency correction to its frontier owner."
    },
    "current_guard_sha256": "e4bf039b7b07a47d8b2bab3a5d49eaf6443468f10ce6117581dc1ae8b7796806",
    "source_read": {
      "native_log_span": {
        "start_byte": 1516864,
        "end_byte": 1527620,
        "sha256": "5308b461d8c2c2368a20c352724960d0fe381dada53fa1b5f6acf2f30ca3ecd6"
      },
      "source_excerpt": "At stage $q$, compute an outward dyadic interval $P_q$ containing $\\pi$",
      "source_file": "research/numerical-analysis-remaining-71-2026-10-17-step5-v2/initial-scope-findings/bessel-current-source-before.md"
    },
    "owner_review": {
      "reviewed_by": "root",
      "confirmed_defect": true,
      "reviewed_at": "2026-10-18T04:19:40.217194+00:00",
      "reason": "I read the complete algorithm and the range-tail and Machin suppliers. The Machin Statement supplies the identity but not the arctangent tail. Cite the direct tail lemma; its N=q-1 instance covers q>=2. For q1, its N1 bound plus triangle inequality gives r^3/3+r^5/(5(1-r^2))<=r^3/(3(1-r^2)), since the difference is2r^5/(15(1-r^2)). This preserves every stage, cap, numerical operation and budget.",
      "evidence_file": "research/numerical-analysis-remaining-71-2026-10-17-owner-planning-integration/step5-admission-root-confirmations.json",
      "proposed_edits": [
        {
          "source_excerpt": "thm-real-elementary-range-enclosures, lem-trigonometric-identities-machin-and-range-reduction, def-factorial-and-falling-factorial",
          "proposed_replacement": "thm-real-elementary-range-enclosures, lem-trigonometric-identities-machin-and-range-reduction, lem-range-reduced-exp-log-and-arctan-series-enclosures, def-factorial-and-falling-factorial"
        },
        {
          "source_excerpt": "At stage $q$, compute an outward dyadic interval $P_q$ containing $\\pi$\nfrom the Machin identity and alternating arctangent tails in\n[[lem-trigonometric-identities-machin-and-range-reduction]]: for\n$r=1/5,1/239$, use the $q$-term sum\n$\\sum_{k=0}^{q-1}(-1)^kr^{2k+1}/(2k+1)$ and tail bound\n$r^{2q+1}/((2q+1)(1-r^2))$, combine by $16\\arctan(1/5)-4\\arctan(1/239)$,\nand round outward to the selected format at precision $p$. If this\nconversion is non-finite or $\\inf P_q\\le0$, midpoint candidates are\nunavailable at this stage; the independent power-series or Miller branches may\nstill be attempted.",
          "proposed_replacement": "At stage $q$, compute an outward dyadic interval $P_q$ containing $\\pi$\nfrom the Machin identity in\n[[lem-trigonometric-identities-machin-and-range-reduction]] and the\narctangent tail in\n[[lem-range-reduced-exp-log-and-arctan-series-enclosures]]: for\n$r=1/5,1/239$, use the $q$-term sum\n$\\sum_{k=0}^{q-1}(-1)^kr^{2k+1}/(2k+1)$ and tail bound\n$r^{2q+1}/((2q+1)(1-r^2))$, combine by $16\\arctan(1/5)-4\\arctan(1/239)$,\nand round outward to the selected format at precision $p$. If this\nconversion is non-finite or $\\inf P_q\\le0$, midpoint candidates are\nunavailable at this stage; the independent power-series or Miller branches may\nstill be attempted.\n\nFor justification of the same tail bound at every stage, both rational\narguments satisfy $0<r\\le1/2$. For $q\\ge2$, apply the cited arctangent\ntail with $N=q-1\\ge1$. For $q=1$, its case $N=1$ gives\n$$|\\arctan r-r|\\le r^3/3+\\frac{r^5}{5(1-r^2)}\n\\le\\frac{r^3}{3(1-r^2)},$$\nwhich is exactly the bound used for the one-term sum. The second inequality\nfollows since the right side minus the preceding expression is\n$2r^5/(15(1-r^2))\\ge0$."
        }
      ],
      "candidate_patch_file": "research/numerical-analysis-remaining-71-2026-10-17-owner-planning-integration/step5-bessel-initial-scope-proposal.json",
      "summary_correspondence": {
        "confirmed_same_finding": true,
        "report_excerpt": "Definition stage-constant paragraph attributes the alternating arctangent tails to lem-trigonometric-identities-machin-and-range-reduction",
        "output_excerpt": "Its stage-constant paragraph retains the arctangent-tail attribution mismatch.",
        "reason": "I compared the actual immutable final JSON finding with the saved native report finding. Both name this same Bessel algorithm and identify the stage-constant arctangent-tail attribution mismatch, routed as a separate frontier-owner citation repair. The shorter final summary omits route and uncertainty fields; it contains no contrary route or uncertainty assertion. No absent field is fabricated or counted as native repair acceptance."
      }
    }
  }
]. Read the original native report/finding and bound individual root instructions. These are explicit work requests, not Step-4 reader concerns, judge rejections, new adjudication decisions, or current acceptance. Return ordinary reviews with no adjudication decision. Only actual Statement/Definition changes propagate consumer examination.

Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-impact-initial-r1-u3.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Examine assigned frontier consumers, not the whole library. Assignment requires examination, not an edit. Leave a sound consumer byte-for-byte unchanged with an item-specific explanation. Repair only an actual logical defect using the smallest sufficient edit; no stylistic or unrelated rewriting. Work supplier-before-consumer and reconcile only metadata actually invalidated. A reference is not automatic repair authority. Report direct downstream effects of statement changes, including outside consumers for separate maintenance.

Return JSON {run:"numerical-analysis-remaining-71-2026-10-17",phase:"impact-initial",round:1,unit:"3",input_sha256:"8d9e965074794522e858bf4831e169666f92b052318f46402203755da69ec977",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.



Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-analysis-remaining-71-2026-10-17 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.







All three owner lanes run in parallel with disjoint item ownership. Follow the shared metadata lock protocol before necessary shared edits; reread under lock and release promptly. Reconcile assigned frontier ledger evidence, preserve outside findings as separate maintenance proposals, and never turn them into frontier repair or gate obligations. Do not write judge verdicts or shared adjudication JSONL. Record unresolved in-scope obligations honestly.

Adjudicator ledger proposals requiring reconciliation:
[
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "alg-hosvd-truncation",
    "proposed_row": {
      "defect_id": "numerical-analysis-remaining-71-2026-10-17-step5-initial-r1-u10-hosvd-empty-core",
      "run": "numerical-analysis-remaining-71-2026-10-17",
      "at": "2026-10-18T03:56:37.513016+00:00",
      "class": "accuracy",
      "subclass": "ill-typed-construction",
      "severity": "fatal",
      "location": "definition",
      "subject": "alg-hosvd-truncation",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "repair_cost": "repair+rejudge",
      "adjudication_ref": {
        "id": "alg-hosvd-truncation",
        "model": "gpt-6-luna",
        "context_sha256": "43b4c4abb85ec55eee3bb8620d4175b544e2bccfc92d041a84c18e9a8560fd1b"
      },
      "evidence": "Zero unfolding rank or rank cap produced a zero-sized core without an admissible array/contraction convention. Added a local finite-index-set auxiliary-array definition and empty-sum contraction convention; retained all algorithm outputs and rank caps. Current guard 05d1cdb8c0865f882c132368a0fa7d357f42865ef7b50927b754d57a96a55f63."
    },
    "reason": "The original algorithm is undefined at an explicitly allowed zero retained rank under its positive-mode tensor supplier. The completed local convention repairs that logical well-definedness defect. The historical model/context remain exactly those assigned."
  },
  {
    "ledger": "published-consumer-ledger",
    "action": "no-update-required",
    "id": "alg-hosvd-truncation",
    "reason": "The current direct dependency/reference inventory contains only the draft frontier HOSVD quasioptimality theorem and its draft owning page. Their examined projector and quasioptimality uses remain sound. No published consumer or published repair was found, and no published item was edited."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "def-standard-real-and-normalized-complex-gaussian-matrix-law",
    "outcome": "confirmed_fatal",
    "disposition": "fixed",
    "reason": "The unrestricted matrix law called every expectation a Lebesgue integral although its suppliers define Lebesgue measure only in positive dimension. Added the deterministic empty-matrix law already used in the normalization supplier proof step 3.1; positive-dimensional densities and Countable Choice are unchanged.",
    "evidence": "research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u11.json",
    "model": "gpt-6-luna",
    "context_sha256": "9daeeb6e629057b821b7a1da95351bb515279b4a170333363fc93b27c7d5125f",
    "defect_type": "other"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-finite-real-gaussian-increment-comparison",
    "outcome": "confirmed_nonfatal",
    "disposition": "fixed",
    "reason": "A1 incorrectly attributes densities to possibly singular Gaussian images, for example (g,g), which is supported on a line. Reworded A1 to place the product density on the independent source coordinates. Step 1.1 already integrates those coordinates, proves integration by parts there and obtains the correct covariance interpolation derivative; endpoint domination and the soft-maximum limit prove the unchanged claim.",
    "evidence": "research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u11.json",
    "model": "gpt-6-luna",
    "context_sha256": "df44eacd378fd9cde71b111dd1acba34541b3d34d5b389d312f3f5e6e6fa008e"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "alg-randomized-power-subspace-iteration-with-qr",
    "outcome": "false_positive",
    "disposition": "false-positive",
    "reason": "The alleged circularity is the definition-discharge pattern explicitly permitted by SCHEMA.md: a justified_by result must depend on the procedure. The algorithm defines a finite number of compatible matrix products and deterministic scans; the cited lemma proof 1.1 invokes finite-scan termination and covers q=0 and empty branches, without assuming the conclusion. Measurability is an additional property, not a circular existence premise. No edit is needed.",
    "evidence": "research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u11.json",
    "model": "gpt-6-luna",
    "context_sha256": "3dd8bcd6a5b192e4eff78e6f549a5a1f180c405eb4cba3f94b0df54723c16dd8"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-finite-scan-range-basis-is-borel",
    "outcome": "confirmed_nonfatal",
    "disposition": "fixed",
    "reason": "F7 stated the constant-times-total-measure rule without resolving zero times infinity. Restricted its restatement to a finite nonnegative constant on a probability space, precisely the only use in step 3.1. The finite scan invariant proves termination and basis correctness; finite Borel branch records and phase substrata prove measurability, including empty inputs; projector contraction proves the unchanged integrability claim.",
    "evidence": "research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u11.json",
    "model": "gpt-6-luna",
    "context_sha256": "4bdd54afc57c133dcbd5957214b811cdb554b249079ab58129a92fc7ffaefc79"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-real-scaled-gaussian-product-expectation",
    "outcome": "confirmed_nonfatal",
    "disposition": "fixed",
    "reason": "F3 omitted the cited Jensen interface condition that the convex image be integrable or nonnegative. Added that condition. Step 2.1 already bounds the soft supremum by a linear Gaussian-norm majorant, so its conditional image is integrable; step 3.1 uses nonnegative squares with the computed second moments. The covariance difference (UUprime-c)(VVprime-d) has the required sign, finite dense sphere approximations are dominated, and the Frobenius expansion is correct.",
    "evidence": "research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u11.json",
    "model": "gpt-6-luna",
    "context_sha256": "2f46ac9cd2996e8f6b32b64cbe429645dfaf3d76ce486d3e6efc6170557509c7"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "thm-randomized-power-rangefinder-error-transfer",
    "outcome": "confirmed_fatal",
    "disposition": "fixed",
    "reason": "The arbitrary measurable sketch did not meet the cited algorithm sampling conditions. Defined the projector range directly as Ran((AA*)^q A Omega), preserving the intended general-sketch transfer, and restricted the algorithm range-identification argument to Gaussian draws. The pointwise projector-power inequality holds for every orthogonal projector; Z^(1/(2q+1))<=1+Z supplies the Jensen image integrability. The final bound and finite-expectation assumption are unchanged.",
    "evidence": "research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u11.json",
    "model": "gpt-6-luna",
    "context_sha256": "cf8979425c4c427d7b711618cb1c04abc8171f47f282e0203bcbf13b4d5de88f",
    "defect_type": "dependency_citation"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "ex-power-rangefinder-loses-small-mode-without-qr",
    "outcome": "confirmed_fatal",
    "disposition": "fixed",
    "reason": "The identity sketch is outside the Gaussian sampling interface, and the cited algorithm is exact-arithmetic. Clarified that this example executes its deterministic QR instructions with sampling omitted in the stated threshold model. The explicit computation remains valid: the unnormalized factor reaches 2^-90 and is zeroed, whereas each QR pass normalizes 2^-10 to one; even the squared norm 2^-20 stays above threshold. This establishes only the stipulated arithmetic witness.",
    "evidence": "research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u11.json",
    "model": "gpt-6-luna",
    "context_sha256": "6dc89ad8157e8d228ba4936ab09bb3b8706218feae2b8440daa5e00fb9259a30",
    "defect_type": "dependency_citation"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-wide-gaussian-pseudoinverse-spectral-moments-and-tail",
    "outcome": "confirmed_fatal",
    "disposition": "fixed",
    "reason": "F12 imported Gaussian-square laws and convolution from inside the Frobenius-moment proof, beyond its exported diagonal reciprocal-Gamma interface. Removed that fact and derived the square densities, common-scale Gamma convolution, and normalized-complex scaling directly in step 1.1 using F3, F6, F8, F9 and F13. Checked the beta sphere moments (k=1 separately), reciprocal moment domains, Gamma-ratio and factorial bounds, and both substitutions q=p/2 and q=p. The moment and integrable-tail statements are unchanged.",
    "evidence": "research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u11.json",
    "model": "gpt-6-luna",
    "context_sha256": "3d6377cc38244cb28ed3df3f7b397a66f11fa88dadf3194db37957bdba39e824",
    "defect_type": "dependency_citation"
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "action": "no-update",
    "reason": "All examined direct consumers are draft members of the frozen frontier. No potentially defective published consumer was identified, and no published item was edited or given new audit coverage."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "def-ewald-causal-cardinal-spline-window",
    "subject": "def-ewald-causal-cardinal-spline-window",
    "outcome": "false_positive",
    "severity": "nonfatal",
    "disposition": "false-positive",
    "status": "false-positive",
    "model": "gpt-6-luna",
    "context_sha256": "86d18584d9c433383825a11dba091470de6a422cf6be3eb04a711de77cdb289a",
    "post_sha256": "42286a3216fbc12768a86ee08232327fd10eefd5314392970c392d467d37ed5e",
    "reason": "The Definition explicitly fixes W_1 as the closed-interval indicator but asserts no pointwise partition identity for P=1. Its final sentence refers to the P>=2 windows just defined; lem-ewald-pme-spline-alias-and-dft-normalization step 2.2 states and proves partition unity only for P>=2, treating the integer-endpoint exceptions inside the P=2 convolution as measure zero. The assignment Definition also requires P>=2. Hence the value 2 at integer arguments of the W_1 translate sum contradicts no claim or consumer interface.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-ewald-screened-coulomb-kernel-and-self-limit",
    "subject": "lem-ewald-screened-coulomb-kernel-and-self-limit",
    "outcome": "confirmed_nonfatal",
    "severity": "nonfatal",
    "disposition": "fixed",
    "status": "fixed",
    "model": "gpt-6-luna",
    "context_sha256": "274e8574c928e76354f6b5f21f0c6e871b673a35b5ac108a65f6c27e9efcaf57",
    "post_sha256": "2f009c668c63965f9524646b35bd6eb25bbf6d29566943ab94b8cb1bdce15a15",
    "reason": "F6 was broader than the L^1 Statement quoted by its proof contract. Restricted the fact to that exact scaling formula; the only application uses f(y)=exp(-y^2), whose L^1 norm is sqrt(pi) by F3, so the kernel identities, inner-sphere flux signs, self expansion and derivative bounds remain unchanged. The supplier's proof step 6.1 in fact proves nonnegative substitution too, so this is a nonfatal citation-interface precision repair, not an invalid Gaussian calculation.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-ewald-gaussian-poisson-periodization",
    "subject": "lem-ewald-gaussian-poisson-periodization",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "severity": "fatal",
    "disposition": "fixed",
    "status": "fixed",
    "model": "gpt-6-luna",
    "context_sha256": "e06e30bf80561b08ee35bbfc0c1dcd462f31a55571460a04ffda2d2c7699b381",
    "post_sha256": "328d7d1108da2be97965c92bda20b78852a5aeb379280f95c68d37493a1b9832",
    "reason": "The proof established only the Poisson identity and absolute pointwise convergence, omitting the asserted local uniform convergence. Added step 1.2: on a compact |x|<=R, invertibility gives |x+An|>=c|n|/2 for large |n|, with summable product-Gaussian majorant (one-dimensional geometric comparison). Reciprocal absolute convergence at x=0 supplies an x-independent majorant since each character has modulus one. This closes the missing conclusion without changing the Statement or choice assumptions.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "ex-ewald-nonneutral-zero-mode-obstruction",
    "subject": "ex-ewald-nonneutral-zero-mode-obstruction",
    "outcome": "false_positive",
    "severity": "nonfatal",
    "disposition": "false-positive",
    "status": "false-positive",
    "model": "gpt-6-luna",
    "context_sha256": "895730511f5a417cea1cac6047e724a6c34574508fc1abfcad61121f87db6ee6",
    "post_sha256": "6ba50eb3ab4f4b06e30ae975c13231e306427386e855b40314f44396f8502a54",
    "reason": "The explicitly scoped Example claims only the unit-charge case, which the constant-test proof correctly establishes: <u,-Delta 1>=0 but 4pi<rho,1>=4pi. The title is an accurate description of the obstruction, not an added hypothesis-free claim about arbitrary sources. Moreover the same displayed F1 calculation for any finite point configuration gives 0=4pi sum_i q_i, proving the title's general finite-source assertion directly. The example, prerequisite and page interface are sound.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-ewald-pme-spline-alias-and-dft-normalization",
    "subject": "lem-ewald-pme-spline-alias-and-dft-normalization",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "severity": "fatal",
    "disposition": "fixed",
    "status": "fixed",
    "model": "gpt-6-luna",
    "context_sha256": "d18e422e00e86ede3126b29efcfb38f6df11b5ed7367e3d926208da4378ad9d6",
    "post_sha256": "91684f5040cbb0457530689f634d123d1298095cb7fd31ea194920a048c1fb0b",
    "reason": "The original real-J tail estimate is false: P=2 and J=1.99 retain a tail starting at |m|=2, and as u->0 its quotient by 2u^2 tends to sum_{m>=2}m^-2>1/1.99. Preserved every real threshold J>=1 by replacing J^(1-P) with floor(J)^(1-P). Step 1.2 now derives n^-P<=integral_{n-1}^n x^-P dx and sums from floor(J)+1; integer-index controllers and all exact aliases, conjugated D normalization and partition claims are unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-ewald-pme-derivative-window-alias-bound",
    "subject": "lem-ewald-pme-derivative-window-alias-bound",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "severity": "fatal",
    "disposition": "fixed",
    "status": "fixed",
    "model": "gpt-6-luna",
    "context_sha256": "15b3fb03fd1435706af871c16c29d7dadaa9cf90994474aa181d4368b6d96f6f",
    "post_sha256": "08e1fdf10093075e43da490400fef18126d47ed32495d88f362c3ea1aea58ae0",
    "reason": "F3 attributed a quantitative tail estimate to a supplier whose Statement proves convergence only; that unsupported estimate supplies the finite derivative certificates. Restricted F3 to convergence and proved the estimate in step 1.1 by summing m^-s<=integral_{m-1}^m x^-s dx. Also corrected the unspecified real truncation threshold to floor(J_0) in both remainders for J_0>=1, retaining real thresholds and unchanged integer calls. The tensor derivative sum for P>=3 and finite triangular-window P=2 knot bounds remain intact.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "thm-ewald-real-reciprocal-cutoff-error-bounds",
    "subject": "thm-ewald-real-reciprocal-cutoff-error-bounds",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "severity": "fatal",
    "disposition": "fixed",
    "status": "fixed",
    "model": "gpt-6-luna",
    "context_sha256": "c8afc34038c135f5c5f920ad3b47d6c78a4bc14d5ec6ba476b93486e50b2c180",
    "post_sha256": "9243dcef41c986f139f1adee3bab116f4c1fe4dd1dc2c3fc41ac0a7d6827b2a8",
    "reason": "The Statement used alpha^-1, the screened kernel and T_3((4alpha^2)^-1, M) without defining or restricting alpha. Added the explicit hypothesis alpha>0, already required in Given and by both kernel/Ewald suppliers. Checked the six constants: shell index m>=floor(R) or floor(K)>=1 permits discarding inverse radial powers, Q and Q^2/2 give the potential/energy weights, and first derivatives yield the stated force constants. Collision-free local uniform derivative sums and symmetric image pairing justify the energy gradient.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "ex-ewald-neutral-dipole-cell",
    "subject": "ex-ewald-neutral-dipole-cell",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "severity": "fatal",
    "disposition": "fixed",
    "status": "fixed",
    "model": "gpt-6-luna",
    "context_sha256": "5f921fc5879322ed5f7de3bc01ca8ad5bee2fc3a230b82087e768637e08b6dd5",
    "post_sha256": "eae75a0f31707b72b98fa545c541cc9034720e703b870a4c81bcd3b4efbea85f",
    "reason": "Step 2.1 allowed a symmetric finite set containing zero, although c_k is defined only at k!=0; multiplying undefined c_0 by rho_0=0 does not define the sum. Restricted the proof's retained set to Z^3 minus {0}, matching the Ewald supplier, and explicitly supplied alpha>0 and Countable Choice in Given for that supplementary energy calculation. The Example's parity claim rho_k=1-(-1)^k1 is unchanged, including rho_0=0, and both retained sums agree term by term.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "ex-ewald-mesh-energy-force-consistency",
    "subject": "ex-ewald-mesh-energy-force-consistency",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "severity": "fatal",
    "disposition": "fixed",
    "status": "fixed",
    "model": "gpt-6-luna",
    "context_sha256": "e339fe0b2c5f0010894300049e8dd851a19e32e46637ae98ceeea59ab2177c37",
    "post_sha256": "67f51922e38a6b2ccc7dc1619367616769e436bd9ca1ad57cf9e435792a87a49",
    "reason": "The assignment Definition and reciprocal theorem require a fixed alpha>0, but the Example supplied none although its c_k and energy depend on alpha. Added an arbitrary fixed alpha>0 to Example and Given. Checked neutral distinct sources, off-knot half-grid coordinates, signed nonzero symmetric injective +/-1 modes, and nonzero sinc(pi/4). At fixed alpha, differentiating the finite |z_k|^2 sum gives the negative energy gradient; differentiating C_M yields the printed corrected force, so the retained-mode error theorem applies under its existing hypotheses.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-na-one-dimensional-morse-coordinate",
    "severity": "fatal",
    "defect_type": "logic",
    "locus": "proof-step",
    "location": "2.1",
    "finding": "Step 2.1 differentiates v^2=sigma q before establishing differentiability of v; derivative algebra assumes that property and cannot establish it. Repaired by rationalizing increments: continuity follows from |v(x)-v(z)|<=|q(x)-q(z)|/v(z), and the difference quotient then tends to sigma q'(z)/(2v(z)). Quotient rules bootstrap C5. Added the actual positive-root supplier and IVT supplier for the open inverse domain; the C5 diffeomorphism Statement is unchanged.",
    "status": "fixed"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "alg-na-fourier-polynomial-moments",
    "finding": "The home page library/numerical-linear-algebra-and-approximation/oscillatory-filon-and-levin-quadrature.md lists thm-na-fourier-oscillatory-moment-recurrence separately. Its steps 1.1 and 2.1 prove the base antiderivative and integration-by-parts recurrence, then induct on k. The procedure has a finite increasing loop, admits m=0, divides only by nonzero i omega, and returns the stated list. Algorithm properties correctly reside in that separate theorem, so absence of a proof in this algorithm carrier is not a defect."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "alg-na-fourier-polynomial-moments",
    "severity": "nonfatal",
    "locus": "proof-contract",
    "location": "boundaries.endpoints",
    "status": "fixed",
    "finding": "The contract incorrectly called endpoints inapplicable despite both endpoint boundary values in the recurrence. Replaced that row with a concrete endpoint check; item carrier unchanged."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-na-complex-phase-derivative",
    "severity": "nonfatal",
    "locus": "facts-block",
    "location": "F3; step 2.1",
    "finding": "F3 omitted the chain-rule domain and limit-point conditions that the cited supplier explicitly requires. This is nonfatal for the actual application: A=[a,b] has every point as a limit point since a<b; B=R contains the entire image of theta=omega g, and sine/cosine are differentiable at every real image point. Repaired F3 and verified these conditions in step 2.1, including one-sided endpoint derivatives. The derivative identity and original Statement remain unchanged.",
    "status": "fixed"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "alg-na-levin-collocation-quadrature",
    "finding": "The home page library/numerical-linear-algebra-and-approximation/oscillatory-filon-and-levin-quadrature.md includes thm-na-levin-conditioned-residual-bound as a separate result. Its step 1.1 proves I(f,g)-Q=I(f-L_omega p,g), step 2.1 applies the smooth nonstationary residual expansion, and steps 1.2, 2.2, 3.1 and 4.1 prove inverse-matrix amplification and the total bound. These are conditional on a nonsingular matrix and the theorem's stronger smoothness hypotheses, exactly as required; the procedure explicitly returns failure when A is singular. A separate proof inside the algorithm carrier is not required."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-adjacent-window-divided-difference-recurrence",
    "severity": "fatal",
    "defect_type": "logic",
    "locus": "statement",
    "reason": "The original Statement never assigns real values to f, contrary to def-distinct-node-divided-difference, and defines G_i only for i<n-d although the final recurrence uses G_{n-d}. Added real nodes, a distinct real query, arbitrary real node/query data, and definitions for all 0<=i<=n-d; the identity remains for i<n-d. Symmetry puts x_i and x_{i+d+1} at the recursive endpoints, giving (G_{i+1}-G_i)/(x_{i+d+1}-x_i); rearrangement proves the sign and coefficient, including d=0,n=1.",
    "correction": "Assign f real values on all real nodes plus the distinct real query, define G_0 through G_{n-d}, and state the identity for 0<=i<n-d. Given now mirrors these hypotheses.",
    "status": "fixed",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "prop-barycentric-rational-quotient-well-defined",
    "model": "gpt-6-luna",
    "context_sha256": "c0357a6a9c72be6e1866644ef30d41ce2c0fa492698b9428424fedc783e5d604",
    "reason": "The supplier Statement asserts nonidentity of Q, but its complete Proof 1.1 explicitly computes Q(z_j)=w_j product_(ell!=j)(z_j-z_ell), and Proof 2.1 proves this is nonzero for each arbitrary j. Thus F2 cites an actually established supplier consequence, not an unsupported strengthening. Moreover this item Proof 2.1 itself evaluates both finite sums; nonzero weights and distinct nodes make the displayed Q value nonzero. Interpolation and the cancellation claim follow, including k=1 and a zero numerator.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "lem-floater-hormann-window-polynomial-interpolates",
    "model": "gpt-6-luna",
    "context_sha256": "92a681b17a497987c276e4625f25e0c32e5ab600da89892af058f20e71157a10",
    "reason": "The Statement concerns p_i from def-floater-hormann-window-polynomial, which explicitly imports the nodes, data and degree parameter of def-floater-hormann-interpolant. That Definition assumes x_0<...<x_n real and real data. Thus each window is already strictly increasing, and Given also says as in the Floater-Hormann definition. Reindexing its d+1 nodes by 0,...,d meets the cardinal theorem exactly. The local products give the nodal values, uniqueness gives partition of unity, and d=0 uses the empty product 1.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "lem-linear-cardinal-interpolant-on-an-edge",
    "severity": "nonfatal",
    "status": "fixed",
    "finding": "The Statement already correctly allows degree at most one and the coefficient proof gives existence and uniqueness over any field. Equal endpoint data produce a constant polynomial, so corrected only the overstrong title and its owning manifest/coverage mirrors; no Statement change or downstream propagation."
  },
  {
    "ledger": "defect",
    "id": "def-lexicographic-lift-tie-break",
    "severity": "nonfatal",
    "status": "fixed",
    "finding": "The displayed weighted polynomial is well-defined: height-column expansion gives distinct perturbation exponents and a nonzero query cofactor. Its final sentence incorrectly equated the weighted constant determinant with the unweighted raw predicate. Explicitly separated the zero-weight specialization from the squared-norm-minus-weight column extension; heights, ranks and returned signs are unchanged."
  },
  {
    "ledger": "defect",
    "id": "def-barycentric-point-location-interpolation-and-voronoi-query",
    "severity": "fatal",
    "status": "fixed",
    "finding": "The nearest-site clause quantified over a finite P without excluding the empty set, for which no minimizing site exists. Required P to be nonempty and indexed, matching the correctness theorem's existing nonempty hypotheses and least-identifier tie rule. The triangle coordinate and interpolation clauses are unchanged. Synchronized the owning manifest mirror under the shared lock."
  },
  {
    "ledger": "defect",
    "id": "lem-lifted-flip-potential-decreases",
    "severity": "nonfatal",
    "status": "fixed",
    "finding": "Step 4.1 reversed the sign of the normalized determinant: OP=-O^2 Delta_D, so a below-plane query gives a positive illegal sign. Corrected that sentence with the explicit identity. Steps 1.1–3.1 already prove the integral difference area(ABCD) times delta/3<0 independently of that sign sentence, so the Statement and potential-decrease argument remain valid and unchanged. Synchronized the owning contract derivation and source quote under the shared lock."
  },
  {
    "ledger": "defect",
    "id": "alg-incremental-planar-delaunay-edge-flips",
    "severity": "fatal",
    "status": "fixed",
    "finding": "The input sentence admitted a finite list without explicitly excluding the empty list, while all branches require a surviving site. Made the nonempty precondition explicit, as already required by def-indexed-geometric-site-set and the existing correctness contract. Duplicate collapse then leaves at least one site, so affine dimension zero, one or two exhausts the domain. No operational instructions or promised nonempty outputs were removed."
  },
  {
    "ledger": "defect",
    "id": "thm-incremental-planar-delaunay-correctness-and-termination",
    "severity": "fatal",
    "status": "fixed",
    "finding": "The literal full-universe lower-simplex invariant is false before completion: an uninserted site inside a current triangle lies below its paraboloid plane. Specified lower simplices of the current prefix plus synthetic vertices, with heights restricted from the fixed universe. Steps 1.1–5.1 already establish exactly that prefix induction, using supporting new-site edges and strict potential descent; step 6.1 identifies the final input triangulation. Final hull coverage, weak emptiness, ties and dimensional branches are unchanged."
  },
  {
    "ledger": "defect",
    "id": "def-indexed-geometric-site-set",
    "severity": "nonfatal",
    "status": "open",
    "route": "frontier_owner",
    "finding": "Definition calls the dyadic ring a subfield, but 3 has no dyadic reciprocal. Route the terminology correction and the matching F4 of lem-large-delaunay-supertriangle-exists to the actual owner.",
    "uncertain": false
  },
  {
    "ledger": "defect",
    "id": "def-three-dimensional-delaunay-and-weighted-regular-lower-hull",
    "severity": "nonfatal",
    "status": "open",
    "route": "frontier_owner",
    "finding": "Original-hidden and formal-hidden differ in the exact five-site witness recorded in repair_notes. Distinguish these notions in the Definition and algorithm/report terminology through the owner; no assigned carrier relies on equating them.",
    "uncertain": false
  },
  {
    "ledger": "defect",
    "id": "thm-barycentric-interpolation-and-nearest-neighbor-query-correct",
    "severity": "nonfatal",
    "status": "open",
    "route": "frontier_owner",
    "finding": "Statement says the edge interpolant is degree one, although constant equal endpoint data yield degree zero. Its F3 and proof step 1.2 correctly allow degree at most one. Route the separate minimal Statement wording correction to its frontier owner.",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "id": "def-hlr-cluster-trees-and-geometric-admissibility",
    "severity": "fatal",
    "location": "definition",
    "disposition": "fixed",
    "reason": "With row size 2 and threshold 1, column size 3 and threshold 3, and all points coincident, the pair is nonadmissible but the original larger-cardinality rule cannot select a nonleaf cluster. Added an explicit only-nonleaf branch; when both clusters are nonleaf, the original cardinality and row-tie rule remains. Each split still partitions the parent and descends one finite tree, so recursion terminates without choice.",
    "post_sha256": "da223ff9e66e112f186c13db542b1c7033890908b5a08fea5d9e3cadfc7c745a",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "defect_type": "logic"
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "id": "alg-hlr-compress-exact-lu-factors",
    "severity": "nonfatal",
    "location": "definition",
    "disposition": "fixed",
    "reason": "Confirmed a nonfatal call-interface omission: the supplied dense m-by-n block already gives the exact admissible one-pair input (D,I_n), since D I_n*=D over both real and complex fields. Made this conversion explicit and stated the real/complex field, positive matrix size, integer cap, and nonnegative tolerances required by the called routine. This is a routine conversion, not an unsatisfied mathematical prerequisite. Effective cap min(k,m,n), zero blocks, exact diagonal/near copies, failure identity, and successful discarded-tail outputs are preserved.",
    "post_sha256": "46f0c2f30a26d22de0dc49a61390ce309cbdcea61558a7e87ee8a170064da598",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "id": "ex-hlr-nearfield-block-requires-full-rank",
    "severity": "nonfatal",
    "location": "proof-step",
    "disposition": "fixed",
    "reason": "The Example and both mathematical calculations are valid: self-distance is zero, threshold 2 makes both clusters leaves, and Eckart-Young applies to I_2 with k=1<dim(V)=2 and second singular value 1, so every rank-at-most-one B has spectral error at least 1. The final far-block label incorrectly describes this near block; replaced only that conclusion by the impossibility of replacing this dense near block at subunit error. This is a nonfatal terminology defect, with the rank obstruction and all hypotheses unchanged; diag(1,0) attains the endpoint error 1.",
    "post_sha256": "6ad04cfddff59eefa9ca2fa137f386fd3f54db83387ff820385f1125fae3b24c",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "path": "research/published-consumer-supplier-ledger.md",
    "action": "no-update",
    "reason": "All eight direct item consumers of the two changed Definitions are draft frontier items. No outside or published direct consumer was found, and the inspected published Eckart-Young and operator-norm suppliers have no identified defect. Shared ledgers were not edited.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-oblivious-l2-subspace-embedding",
    "severity": "nonfatal",
    "locus": "Definition, second paragraph",
    "status": "fixed",
    "reason": "Confirmed a nonfatal missing parameter-domain declaration: for integer d>n no d-dimensional subspace of K^n exists, making the universal condition vacuous. This is a domain omission, not a false existence assertion or a failed proof. Added integer 0<=d<=n; at d=0 the sole subspace is {0} and every matrix satisfies the norm inequality. All distortion factors, quantifier order, real/complex conventions and least-squares subspace interfaces are unchanged."
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "action": "no-change",
    "id": "def-oblivious-l2-subspace-embedding",
    "reason": "Search of current item and page references found seven draft consumers in the frozen frontier and no direct published or outside-frontier item consumers; no published mathematical finding arose."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-cur-reconstruction-cores",
    "severity": "fatal",
    "defect_type": "logic",
    "locus": "Definition, final paragraph",
    "finding": "The assertion that the two core choices are distinct fails for A=[1], I=J=(1), and for k=0.",
    "repair": "Explicitly permit equal core matrices and give the scalar witness, preserving both original formulas and the projection-bound caveat.",
    "status": "fixed",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-finite-planar-quadtree-fmm-pair-lists",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "locus": "statement",
    "status": "fixed",
    "reason": "The admitted N=0 input has an empty root, outside the stipulated domain of nonempty cell pairs, so the unconditional root call is undefined. Explicitly defining both lists as empty without recursive calls repairs that missing boundary case and leaves the N>=1 recursion unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "section": "Definition"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "alg-planar-laplace-fmm-fixed-order",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "locus": "statement",
    "status": "fixed",
    "reason": "The last sentence identifies the finite-order derivative with the exact declared potential derivative, contradicting the prescribed truncation. For p=1, unit sources at c±1/4 and target d=c+2 give M0=2, M1=0 and returned derivative 1, whereas the exact sum is 4/9+4/7=64/63. The procedure now names approximate outputs and describes differentiation of its stored polynomial plus exact near terms.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "section": "Definition"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "thm-planar-fmm-global-potential-force-error",
    "status": "open",
    "route": "frontier-owner",
    "locus": "proof-step",
    "affected_use": "items/thm-planar-fmm-global-potential-force-error.md, proof step 2.2: “Summing the omitted degrees bounds the interaction derivative error”.",
    "invalidated_claim": "Bounding the derivative of a complete homogeneous degree-m term does not bound a subset of its differentiated monomials, which is what the rectangular n<=p,k<=p truncation omits.",
    "minimality": "Replace the degree-m bound in proof step 2.2 by the sum of absolute differentiated monomials: sum_{k=1}^m (k/m) binom(m,k) |x|^(k-1)|y_j|^(m-k)/R^m = (|x|+|y_j|)^(m-1)/R^m. Each omitted degree-m subset is bounded by this nonnegative complete sum. The stated tail estimate follows with no Statement change, new supplier or downstream propagation.",
    "reason": "Confirmed the Step-4 concern by checking the rectangular truncation against the complete proof. The theorem remains mathematically true, and the displayed absolute-monomial calculation supplies its missing inference. Its unassigned item is left unchanged for the ordinary frontier owner. This pre-existing gap is unrelated to either assigned interface correction.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "alg-augmented-rbf-finite-difference-weights",
    "run": "numerical-analysis-remaining-71-2026-10-17",
    "phase": "initial",
    "round": 1,
    "unit": "2",
    "severity": "fatal",
    "location": "definition",
    "subclass": "ill-typed-construction",
    "disposition": "fixed",
    "reason": "The inadmissible-input branch previously required global conditional positivity and neighborhood differentiability decisions with no oracle. Added total correct admissibility and exact-value oracles explicitly as primitive operations, preserving every branch, strict hypothesis and augmented system. Finite pivot selection and back substitution solve the unchanged invertible matrix.",
    "adjudication_ref": {
      "file": "research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u2.json",
      "id": "alg-augmented-rbf-finite-difference-weights",
      "model": "gpt-6-luna",
      "context_sha256": "572029c3afd1840bdcb12a56d2d8609aab3f8dd6ef06ecc176f1ad664e51a0b9"
    },
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-separated-sites-matern-gram-bound",
    "run": "numerical-analysis-remaining-71-2026-10-17",
    "phase": "initial",
    "round": 1,
    "unit": "2",
    "severity": "nonfatal",
    "location": "title",
    "subclass": "false-or-overstrong-title",
    "disposition": "fixed",
    "reason": "The rejection is correct as a nonfatal title overclaim: the proof fixes a smooth bump and a sufficiently large T existentially and proves a uniform positive constant, not a numerical explicit bound. Removed explicit from the title. Also made inherited Countable Choice explicit in the Statement and Given, matching A1 and the linked normalized-kernel definition. The shell count, rapidly decaying window, q^(2s-d)=q^(2nu) scaling, trace bound and singleton case are sound.",
    "adjudication_ref": {
      "file": "research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u2.json",
      "id": "lem-separated-sites-matern-gram-bound",
      "model": "gpt-6-luna",
      "context_sha256": "40a0ea8b2b0b050ddd2115fc5d65a167990cd78c3e9e73698236f5a8909a4ab1"
    },
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "cor-matern-mesh-ratio-conditioning-bound",
    "run": "numerical-analysis-remaining-71-2026-10-17",
    "phase": "initial",
    "round": 1,
    "unit": "2",
    "severity": "fatal",
    "location": "statement",
    "subclass": "missing-choice-scope",
    "disposition": "fixed",
    "reason": "The statement omitted the Countable Choice required by the ball-volume and linear change-of-variables interfaces. A1 stated the inherited assumption, but the unconditional exported Statement did not carry it. Added Countable Choice to the Statement and Given. Disjoint q-balls in a fixed R+1 ball give N <= (R+1)^d q^(-d); combining the separation estimate with q >= h/rho_0 gives exponent d+2nu=2s. The singleton convention and exact-arithmetic caveat are preserved.",
    "adjudication_ref": {
      "file": "research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u2.json",
      "id": "cor-matern-mesh-ratio-conditioning-bound",
      "model": "gpt-6-luna",
      "context_sha256": "b3e302fd9a678face1fec4313cb0de18f225b28fd0a67b787733774923f6b3e8"
    },
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-schwartz-dense-in-fourier-bessel-potential-space",
    "run": "numerical-analysis-remaining-71-2026-10-17",
    "phase": "initial",
    "round": 1,
    "unit": "2",
    "severity": "nonfatal",
    "location": "facts-block",
    "subclass": "missing-choice-scope",
    "disposition": "fixed",
    "reason": "A1 incorrectly called smoothing and Gaussian inversion choice-free while F2, the spectral Gaussian/Fubini/polar suppliers in F6, and integration by parts F7 require Countable Choice. The Statement already assumes full AC, which supplies these prerequisites; hence the density proof remains valid and this is nonfatal assumption-accounting prose. Replaced A1 with the exact inherited uses. Frequency truncation, bounded-weight smooth approximation, coordinate integration by parts and Gaussian-damped inversion establish all stated conclusions.",
    "adjudication_ref": {
      "file": "research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u2.json",
      "id": "lem-schwartz-dense-in-fourier-bessel-potential-space",
      "model": "gpt-6-luna",
      "context_sha256": "feb6159510145f5baba577e299b749c0106d0e112e2e0e2e7d06cf90f432a884"
    },
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-galerkin-coarse-correction-is-energy-orthogonal-projector",
    "locus": "statement",
    "severity": "fatal",
    "defect_type": "dependency_citation",
    "status": "fixed",
    "reason": "The explicit hypotheses allowed m=0 although the cited Galerkin definition requires 1<=m<=n. For n=1 and the empty one-row prolongation, full column rank holds but the named correction is outside that definition. Restored its exact dimension domain in Statement and Given; all matrix identities and both range inclusions remain proved.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "alg-aggregation-based-algebraic-multigrid-hierarchy",
    "locus": "definition",
    "severity": "fatal",
    "defect_type": "logic",
    "status": "fixed",
    "reason": "With A0=[[2,-1],[-1,2]], theta=1/2, n_min=1 and L=1, the first pass aggregates both vertices, but returning to old step 1 resets ell=0 and repeats the same pass indefinitely. Moved initialization outside the level loop; its successful branch now retains ell+1 and reaches the one-dimensional coarse matrix. All five step numbers and terminal-status branches are preserved.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "thm-two-grid-energy-contraction-under-joint-estimate",
    "locus": "proof-step 2.1",
    "status": "false_positive",
    "reason": "The imported energy inner product is defined for HPD matrices in the sense of def-cholesky-factorisation-with-positive-diagonal, whose Definition starts with n>=1. This is already an original supplier convention, independently of the projector repair. Thus n=0 is inadmissible and F6 really does apply. Checked the quadratic identity, self-adjointness and eigenvalue bounds; no item edit is warranted.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-na-two-site-tt-truncation-can-increase-energy",
    "severity": "nonfatal",
    "location": "Facts & Assumptions, F5",
    "finding": "The cited theorem Statement supplies an upper bound on the signed energy increase; changes energy by at most suggests an absolute bound.",
    "correction": "F5 now states the energy increase from the unrounded exact-sweep output to the normalized rounded output is at most 4||H||tau.",
    "reason": "The signed bound is exactly what verification step 3.1 uses to compare 2/9 with 4/3; no proof inference or example value changes.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-na-two-site-tt-truncation-can-increase-energy",
    "severity": "nonfatal",
    "location": "Example, exact-solve sentence",
    "finding": "Unique ground state is inaccurate for normalized arrays without quotienting by phase; both psi and -psi are unit ground vectors.",
    "correction": "The Example now calls psi the deterministically selected unit ground vector.",
    "reason": "Verification step 2.1 already proves that the first basis projection is a positive multiple of psi; the existing deterministic rule therefore gives the displayed vector exactly.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "alg-finite-budget-stable-block-reordering-for-schur-and-qz",
    "locus": "Definition: early-exit output",
    "severity": "fatal",
    "reason": "With W=0 the first validation operation returns before classification, so the previously required predicates and inversion count had no value. Initialized counts and lists before charged work and marked all uncomputed diagnostics unavailable; requested r remains separate. Exact swap systems, Gram–Schmidt graph completion and residual transport remain unchanged. The three direct item consumers only use completed ordering or status returns and remain sound."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "alg-finite-budget-newton-kleinman-policy-iteration",
    "locus": "Definition: exact solver controls and finite line search",
    "severity": "fatal",
    "reason": "The Bartels–Stewart supplier requires pivot threshold, both Schur controls, c0, sweep limits and controller budget; none was an input of the original call. Added a complete per-pass packet, specified coefficient order Aj*,Aj and right-hand side −S(Kj), and declared integer N,L. For dyadic inexact inputs, exact rational gain formation is retained and a common positive denominator scales the current-cost system to dyadic point-certifier inputs without changing its solution. Trial Neumann and raw residual bounds remain separate from preconditioned residual data."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "alg-finite-budget-structure-preserving-doubling-for-dare",
    "locus": "Definition: finite-mode initialization",
    "severity": "fatal",
    "reason": "For scalar R=3,B=1 the exact coefficient BR−1B*=1/3 is not dyadic, so the original finite recurrence had no initial stored G0. Finite initialization now solves RV=B* by the stated complete-pivoting rule in exact rational preprocessing, rounds BV and C*C componentwise to the declared format, and records rounding differences and failure diagnostics. The exact-mode standard coefficients and all three recurrence formulas remain unchanged. This adds no point-certificate calls, preserves the finite-status call bounds, and asserts no bit complexity or rounded PSD invariant."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-sda-doubling-composition-and-psd-invariants",
    "locus": "Proof 1.2: composition outer factors",
    "severity": "fatal",
    "reason": "Proof 1.2 computed only ΦG(H+A*UA)−ΦG(H); its outside factors were (I+HG)−1A* and A(I+GH)−1, which are not A1*,A1. Restored the outer A* and A from f(f(X))−H1, yielding A*(I+HG)−1A*=A1* and A(I+GH)−1A=A1. The middle inverse is (X−1+G1)−1, so the composition follows for positive X. Kernel positivity proves all required inverses and PSD updates; continuity extends to singular PSD X and induction yields Hj=f^(2^j)(0). Statement and exact-mode interface are unchanged."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "prop-inexact-newton-kleinman-safeguard",
    "locus": "Facts F5 and Proof 2.1",
    "severity": "nonfatal",
    "reason": "F5 attributed a raw residual bound and an inverse-norm bound κ to a definition that supplies only approximate-inverse defect q and preconditioned residual bounds. Corrected that restatement and attributed κ and raw r in Proof 2.1 to the explicit Statement hypotheses. This is nonfatal because those exact hypotheses already suffice: the Lyapunov witness forces Hurwitz stability, positivity of Q+Kt*RKt gives the PSD exact cost, and inverse-times-raw-residual plus η proves Pt≤Xj. The Statement is unchanged and the repaired supplier preserves every acceptance test."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-dare-local-residual-ball-certificate",
    "locus": "Facts F2 and Proof 2.1–3.1",
    "severity": "nonfatal",
    "reason": "F2 generalized a definition of linear defect q and preconditioned residual r to unrelated DARE enclosure constants. Corrected its scope and routed Proof 2.1–3.1 to the already explicit A1 hypotheses. Nonfatal: A1 and the Statement already assume the positive S-margin, norm/residual/inverse bounds and Stein margin. Independently checked the resolvent bounds for K and Ac, derivative Ac*EAc−E and its Lipschitz constant, Taylor remainder and closed-ball contraction, then the strict Stein perturbation bound and telescoping identity proving PSD. Statement and all radius/stability conditions remain unchanged."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-square-root-kalman-measurement-block-factor-identity",
    "severity": "nonfatal",
    "status": "fixed",
    "reason": "F2 omitted the supplier's Gaussian prior, mutual independence of U,q,r, and equations X=FU+q,Y=HX+r. Independent noises alone are insufficient: U=r~N(0,1),q=0,F=H=1 gives actual conditional variance 0 rather than the claimed 1/2. Restored the full hypotheses. This is nonfatal because the Statement is the deterministic block-factor identity, proved correctly without the optional Gaussian interpretation.",
    "location": "facts-block",
    "class": "accuracy",
    "subclass": "citation-truncated",
    "item": "lem-square-root-kalman-measurement-block-factor-identity",
    "disposition": "fixed",
    "before_guard_sha256": "8a33bd91c596ba23d5fccb47d544bde5590c1c7130c2678319f27c0e25f1befe",
    "post_sha256": "45805ee8eadb2f3548b766157db276c1993ed82e5dfd585a0db9eba270788555",
    "adjudication_ref": {
      "id": "lem-square-root-kalman-measurement-block-factor-identity",
      "model": "gpt-6-luna",
      "context_sha256": "573a4875815dbf9f70c1588d43f80c1a3976673d77c093b15ad0f2a259292582",
      "outcome": "confirmed_nonfatal"
    }
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "alg-finite-budget-square-root-kalman-filter",
    "severity": "fatal",
    "status": "fixed",
    "defect_type": "dependency_citation",
    "reason": "The called Householder procedure requires floating-point entries, but raw real L_Q and L_R were copied into its input. Scalar L_Q=sqrt(2),F=0,L0=0,H=LR=1 is admissible yet outside that supplier domain. Added checked conversion at every supplied-scalar read, including prearray copies, with deterministic ordering and first range-failure. This repairs the dependency-domain violation without narrowing the finite-real input domain; T=0 remains an immediate untouched return.",
    "location": "definition",
    "class": "accuracy",
    "subclass": "ill-typed-construction",
    "item": "alg-finite-budget-square-root-kalman-filter",
    "disposition": "fixed",
    "before_guard_sha256": "7d9f1b689582b870ed1edaf77dd9d3e5c4715f1fe845696962d18a185dde9c2b",
    "post_sha256": "d1ef3d0862dcfef02a2e39a4452a6cda654ef2ca1f4ed28cd5a3c4e75edf69ac",
    "adjudication_ref": {
      "id": "alg-finite-budget-square-root-kalman-filter",
      "model": "gpt-6-luna",
      "context_sha256": "a56dbe15feca750c7b543562654b435cae332cd3f86ec32aa05018d5ecf35d9b",
      "outcome": "confirmed_fatal"
    }
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-square-root-kalman-finite-procedure-status",
    "severity": "nonfatal",
    "status": "fixed",
    "step": "1.2",
    "reason": "Algorithm step 3 solves lower-triangular L11 z=v by forward substitution, exactly as F3 specifies. Step 1.2's upper-triangular wording was a nonfatal descriptive typo. Corrected it and checked the prior zero-diagonal failure branch. Steps 1.1 and 3.1 now explicitly cover input conversions: one rounding per supplied read/copy preserves termination and all stated operation orders, with no conversions at T=0.",
    "location": "proof-step",
    "class": "accuracy",
    "subclass": "other",
    "item": "thm-square-root-kalman-finite-procedure-status",
    "disposition": "fixed",
    "before_guard_sha256": "37fc3962b24adb48bd8866aba7c28af320bc943151526b65c60c946c557961bd",
    "post_sha256": "924066998261429e1cdc453ac5b3f10e6664c2600dab11e68d6342c9899e46b4",
    "adjudication_ref": {
      "id": "thm-square-root-kalman-finite-procedure-status",
      "model": "gpt-6-luna",
      "context_sha256": "ee79e7985bfed9ba6d8e6861e8f7ed91eaeda57b67dd33ba0af2a754e2b1d1cb",
      "outcome": "confirmed_nonfatal"
    }
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "id": "alg-certified-fresnel-erf-hypergeometric-series",
    "severity": "fatal",
    "reason": "The exact restriction on c does not exclude zero from rounded c+k (for example c=-1+2^-20 in a format whose least positive subnormal exceeds 2^-20). A split-domain quotient was unhandled. The repaired procedure skips every non-finite arithmetic candidate, while retaining overflow/range and all original domains, tails and caps. Also replaced the indirect arctangent-tail attribution by its actual proved supplier.",
    "status": "fixed",
    "uncertain": false,
    "source_urls": [
      "https://dlmf.nist.gov/4.24#E3"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "id": "alg-certified-erfcx-evaluation",
    "severity": "nonfatal",
    "reason": "The numerical tail E_q is correct: the arctangent series has omitted terms bounded by r^(2q+1) times a geometric series divided by 2q+1. The named Machin lemma uses that estimate in proof 4.1 through its L2 but does not state it. This is a nonfatal attribution/direct-dependency omission, repaired by citing the actual proved range-reduced arctangent supplier, without changing numerical instructions or claiming the computed P_q was unsound.",
    "status": "fixed",
    "uncertain": false,
    "source_urls": [
      "https://dlmf.nist.gov/4.24#E3"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "id": "alg-certified-gamma-loggamma-evaluation",
    "severity": "nonfatal",
    "reason": "The arctangent estimate is correct and the cited Machin proof 4.1 obtains it through its L2. However the defining interface misattributes the explicit tail to the Machin statement. Added the actual range-reduced arctangent lemma as a direct dependency and separate tail citation. This nonfatal citation correction preserves all numerical candidates, slit-plane branch, shift, work caps, and full-rectangle containment promises.",
    "status": "fixed",
    "uncertain": false,
    "source_urls": [
      "https://dlmf.nist.gov/4.24#E3"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "id": "ex-erfc-subtraction-cancellation",
    "severity": "nonfatal",
    "reason": "F5 and the last sentence of step 2.1 asserted an absolute erf enclosure for arbitrary real x from a finite evaluator restricted to exact dyadic arguments and allowed to return inconclusive. This does not invalidate the algebraic conditioning or Gaussian-tail argument, so it is nonfatal. Removed that unused availability claim and its algorithm dependency, and made the numerical scaled-product illustration conditional on exact dyadic input and successful factor evaluations. The Statement is byte-for-byte unchanged.",
    "status": "fixed",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "id": "thm-certified-integer-order-bessel-enclosures",
    "severity": "nonfatal",
    "reason": "The proposed fatal Miller gap is a false alarm: the cited algorithm explicitly calls SeriesJ at orders 0,1,n,N+1, constructs D and u by finite recurrences, and tests D_(N+1), u_s, J_s and J_s+q_M D_s for zero exclusion. F4 and A2 therefore supply sound operands for F5 without knowing exact Bessel values. During review a separate nonfatal defect was confirmed in F8: its explicit arctangent tails were attributed to a statement containing only Machin and trigonometric tails. Added the actual tail dependency/citation and expanded the Miller containment induction in step 1.2. No theorem statement or numerical instruction changed.",
    "status": "fixed",
    "uncertain": false,
    "source_urls": [
      "https://dlmf.nist.gov/3.6#iii",
      "https://dlmf.nist.gov/4.24#E3"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "thm-certified-gamma-loggamma-enclosures",
    "route": "frontier owner, batch 25; outside this dispatch item assignment",
    "severity": "nonfatal",
    "affected_use": "F7: Machin lemma gives the Machin identity and the finite arctangent tails used to enclose pi; proof 2.2 invokes F7.",
    "minimality": "Add lem-range-reduced-exp-log-and-arctan-series-enclosures to F7 and deps; retain the existing Statement and all proof bounds.",
    "reason": "The explicit estimate is correct and proved in the existing range-reduced arctangent supplier; this is the same direct citation mismatch corrected in the assigned algorithms.",
    "uncertain": false,
    "source_urls": [
      "https://dlmf.nist.gov/4.24#E3"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "alg-certified-integer-order-bessel-evaluation",
    "route": "frontier owner, batch 25; outside this dispatch item assignment",
    "severity": "nonfatal",
    "affected_use": "Definition stage-constant paragraph attributes the alternating arctangent tails to lem-trigonometric-identities-machin-and-range-reduction, whose Statement only contains sine/cosine tails.",
    "minimality": "Cite the actual arctangent-tail lemma in the stage-constant paragraph and deps; no numerical instruction or domain needs changing.",
    "reason": "The explicit estimate is correct and proved in the existing range-reduced arctangent supplier; this is the same direct citation mismatch corrected in the assigned algorithms.",
    "uncertain": false,
    "source_urls": [
      "https://dlmf.nist.gov/4.24#E3"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "route-existing-step4-alert",
    "id": "lem-pe18-outgoing-spherical-mode-expansion",
    "route": "frontier owner, batch 57, per current batch-57.pages.json",
    "severity": "nonfatal",
    "affected_use": "F3 asserts h_ell prime = h_(ell-1) - (ell+1)h_ell/z for every ell, and proof 2.1 uses it for outgoing and incoming radiation limits, including ell=0.",
    "invalidated_claim": "The supplier states the derivative recurrence only for ell>=1; h_(-1) is not defined by its interface.",
    "minimality": "Keep the Statement and radiation conclusions. Restrict the F3 recurrence to ell>=1 and compute the ell=0 limits directly from h_0=-i exp(iz)/z and its conjugate.",
    "reason": "Verified the exact F3 and proof 2.1 uses against the spherical supplier Statement. The consumer currently has status draft and is in the frozen frontier, so this is an owner route, not a published maintenance repair.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "route-existing-step4-concern",
    "id": "stable-special-function-recurrences-and-certified-evaluation",
    "route": "batch 25 page owner",
    "severity": "nonfatal",
    "reason": "Current A-page requires omits average-orders-divisor-sums-and-representation-counts although the current batch manifest requires it and def-loggamma-right-halfplane-branch uses its Euler constant. Reconcile owning page metadata; no assigned item mathematics changes.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "route-existing-step4-concern",
    "id": "stable-special-function-recurrences-and-certified-evaluation-examples",
    "route": "batch 25 page owner",
    "severity": "nonfatal",
    "reason": "Examples Objective prints $1-operatorname{erf}(x)$ with a missing TeX backslash. Owning page prose correction only; not an assigned frontier item repair.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "path": "research/published-consumer-supplier-ledger.md",
    "action": "record-no-published-change",
    "reason": "No changed assigned Statement/Definition has a direct published item consumer in the dependency/reference search. The Step4 spherical alert target is currently draft and in the frozen frontier; it is routed to its frontier owner. No published carrier was edited or adjudicated.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-real-power-lebesgue-integrability",
    "severity": "nonfatal",
    "location": "proof-step",
    "reason": "The n=1 cutoff gives [1,1], outside the a<b hypothesis of thm-ftc-second-part. This is a nonfatal endpoint citation defect: the cofinal cutoffs n>=2 prove exactly the same claim. Changed the starting index to 2 and explicitly reindexed monotone convergence as (g_{k+1})_{k>=1}. Measurability, bounded cutoff integrability, positive primitive denominator, monotone pointwise convergence including g(0)=0, and the Countable Choice boundary were checked against the local suppliers; Statement is unchanged.",
    "disposition": "fixed",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-double-exponential-transforms-and-integral-identities",
    "severity": "nonfatal",
    "location": "facts-block",
    "reason": "F3 omitted the integrable-derivative hypothesis in thm-substitution, but all three displayed maps have continuous derivatives and meet that hypothesis on [-T,T]. This is a nonfatal overstatement of the cited interface, rather than a failure of the actual change of variables. Restored the hypothesis, added thm-continuous-implies-integrable as F8 and a dependency (also in the owning manifest), and explicitly applied it before substitution. The positive derivatives, endpoint ranges, continuous target integrands, and separate absolute tails establish the unchanged Statement without a principal-value shortcut.",
    "disposition": "fixed",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "alg-duffy-weighted-product-gauss-quadrature",
    "severity": "nonfatal",
    "location": "definition",
    "reason": "The triangle-theorem attribution omitted its continuous-q hypothesis: for alpha=1 and G=1 the forced q(r,rs)=sqrt(1+s^2) has different limits along s=0 and s=1 as r tends to zero. This is a nonfatal interface-attribution defect: the finite weighted rule and its general continuous-G target remain well-defined and unchanged. Qualified both the triangle identity and cited error estimate by the transformed-amplitude condition G(r,s)=(1+s^2)^(-alpha/2)q(r,rs) with continuous q on T; arbitrary continuous G remains admissible. Checked rho>-1, both Jacobi parameter pairs, interior nodes, affine scaling 2^(-rho-1) and 1/2, and the finite tensor sum against the actual suppliers.",
    "disposition": "fixed",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "action": "record-no-published-consumer-effects",
    "id": "alg-duffy-weighted-product-gauss-quadrature",
    "reason": "Direct ID/reference search in items and library found exactly the four draft original-frontier consumers inventoried in downstream, plus the owning draft page. No aliases or published/outside-frontier consumers were found; no published maintenance repair is proposed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-boys-function-and-coulomb-auxiliary-recurrence",
    "status": "fixed",
    "severity": "nonfatal",
    "reason": "The integral definition and its nonnegative conventional domain are sound; “the finite evaluator below” is an unbound local reference. Removed that clause without changing any integral, domain, or Gamma convention.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "def-cartesian-gaussian-primitives-and-contractions",
    "status": "false-positive",
    "severity": "not-a-defect",
    "reason": "G is explicitly the Hermitian Gram pairing C(f_phi,psi,f_rho,sigma) of pair densities, so its first density is conjugated. Thus its x factor is phi times conjugate(psi), exactly as the judge expands; no formula instead declares G linear in psi. “Bras are conjugated” applies to the explicit bra in S,T,V and to the density bra in C. The owning contract expressly requires the additional first-density conjugation; the PSD screening theorem and complex contraction formulas use that same convention. Replacing G by a bilinear density form would destroy the intended positive diagonal convention.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-cartesian-gaussian-moments-and-parameter-derivatives",
    "status": "fixed",
    "severity": "nonfatal",
    "reason": "F7 omitted local Riemann integrability and proper compact-truncation substitution hypotheses. The actual uses are nonzero linear scalings and reflection, with continuous derivatives and polynomial-Gaussian integrands, so all omitted conditions hold. Restored the hypotheses and verified them at the uses; the factorial moments, absolute integrability, and repeated DCT parameter-derivative proof remain valid without a Statement change.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-boys-integral-identities-series-and-incomplete-gamma",
    "status": "fixed",
    "severity": "nonfatal",
    "reason": "F5 omitted the supplier’s local integrability and proper compact-truncation hypotheses. The inverse-square-root substitution for T>0 and the square map for Gamma(1/2) are smooth on positive compact truncations; the zero endpoint has exponent m-1/2>-1, and the Gaussian transformed integral converges at infinity. Restored F5 and verified each endpoint and truncation explicitly. All Boys identities and their stated domains are unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-boys-upward-downward-recurrence-error-amplification",
    "status": "fixed",
    "severity": "nonfatal",
    "reason": "F4 wrongly inferred finite rounding error from finiteness of one stored endpoint: overflow may saturate that endpoint while retaining infinite error. Restated F4 with the exact endpoint in finite range and explicit overflow caveat. The Statement already excludes every overflowing recurrence step; both outward endpoints being finite forces the exact interval endpoints into range. The affine radius estimates and their finite iteration are unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-cartesian-gaussian-integrals-absolutely-convergent",
    "status": "fixed",
    "severity": "nonfatal",
    "reason": "Step 1.1 stated uniform derivative domination using only an exponent lower bound, which fails for unbounded exponents because center/spatial derivatives have coefficients growing in a. The Statement and Given already require a compact positive exponent set. Rewrote the proof with a0<=a<=a1 and bounded polynomial coefficients, and explicitly bounded the exponential by exp(a0 R²)exp(-a0|x|²/2). The compact-domain theorem and all integral claims are unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-positive-coulomb-bilinear-cauchy-schwarz-screening",
    "status": "fixed",
    "severity": "fatal",
    "defect_type": "logic",
    "reason": "The abstract energy definition admits arbitrary real four-tensors, for which positive Coulomb diagonals cannot bound off-diagonal entries. With W11=W22=1, G1111=G2222=0 and G1122=100, the single omitted energy term is 50 while the proposed bound is zero. Explicitly required G_abcd=G(phi_a,phi_b;phi_c,phi_d) in the real functional. The Gram positivity proof, Cauchy–Schwarz including zero diagonals, and weighted finite reindexing now prove the claimed specialization.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "alg-certified-boys-finite-budget-branch-evaluation",
    "status": "fixed",
    "severity": "fatal",
    "defect_type": "dependency_citation",
    "reason": "The Gamma procedure requires a positive exact rational tolerance, whereas the Boys parent admits an arbitrary positive tolerance and passed epsilon_a/2^(k+2). The call was outside the supplier interface for irrational epsilon_a. Repaired it by a charged halving loop from q=1 until rational q<=epsilon_a, then passing q/2^(k+2). This preserves every parent input and gives a child tolerance no larger than the original target; all final parent accuracy tests remain mandatory and caps still return inconclusive.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "alg-finite-gaussian-basis-integral-recurrence-evaluation",
    "status": "false-positive",
    "severity": "not-a-defect",
    "reason": "The separate result thm-finite-gaussian-integral-evaluator-soundness-and-screening-error exists on the owning page and depends on this algorithm. Its steps 1.1–2.1 prove recurrence cutoff availability, exact formula and complex coefficient compatibility, and interval containment; step 1.2 proves uniform weighted screening; step 3.1 applies the explicit tensor energy/gradient estimates over C,D boxes; step 4.1 proves shared-counter termination. The algorithm’s real-coefficient energy branch computes precisely the Gaussian Coulomb tensor required by the repaired screening theorem. The added rational Gamma-tolerance construction lies inside its Boys child and preserves its full interface. No algorithm edit is needed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-screened-coulomb-blocks-accumulate-error",
    "status": "fixed",
    "severity": "fatal",
    "defect_type": "logic",
    "reason": "An only-if skip guard permits skipping eligible blocks but does not force either skip, so it does not imply a reported total of 0.8 tau. Moreover actual outward accumulation can increase this exact sum. Specified the permitted policy that takes each eligible skip, proved the two-then-third exact comparisons, and qualified the exact reported number by exact representability for the actual evaluator (tau=5, bounds=2 is a concrete witness). The general point that all skipped bounds accumulate is preserved.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "thm-gaussian-coulomb-hermite-recurrences-and-integral-formulas",
    "status": "open",
    "severity": "nonfatal",
    "reason": "An unassigned draft supplier still overstates the improper-substitution interface in F7 and mislabels the Coulomb-form citation in proof step 4.1. The actual positive substitutions satisfy the missing hypotheses; the base integral formulas are not shown false. Route the minimal fact/citation correction to its owner without editing it in this unit.",
    "path": "items/thm-gaussian-coulomb-hermite-recurrences-and-integral-formulas.md",
    "route": "Owner of this unassigned draft frontier item; do not treat as a published maintenance request.",
    "source_excerpt": "[F7] [[thm-substitution-for-improper-integrals]]: positive monotone substitutions preserve convergent improper integrals.",
    "affected_use": "Steps 1.1 and 2.1 use linear scaling and t=s/sqrt(p+s²) to obtain the Coulomb base formulas. As in the assigned restatement repairs, monotonicity alone is not the published substitution interface; the actual positive maps are smooth on their compact truncations.",
    "invalidated_claim": "The unrestricted F7 restatement is overbroad; this observation does not show the base integral identities false, since the actual transformations satisfy the missing proper/local integrability hypotheses.",
    "minimality": "Restore the published substitution hypotheses in F7 and verify its smooth changes on compact truncations, retaining the formulas and Statement. Separately step 4.1 calls F1 the Coulomb form although F1 is the Gaussian product theorem; use the Given definition or a correctly named fact there.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "ex-godunov-fv-captures-stationary-burgers-shock",
    "model": "gpt-6-luna",
    "context_sha256": "85d41a98629e95a53a7c40e9cef2d13b5333c34d24ab7a23cab4ee33a01c80fa",
    "outcome": "false_positive",
    "reason": "The carrier does not assert m in N or include m=0. It specifies h_m=1/m and tau_m=h_m/4 as meshes, whose imported definition requires h_m,tau_m>0; the positive-integer indexing m=1,2,... is therefore admissible and is explicitly identified in the owning contract risk_review. The convention 0 in N does not require every indexed mesh family to contain a zero index. Thus no h_0=1/0 is asserted and the rejection adds an absent hypothesis.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-natural-cubic-spline-second-derivative-perturbation",
    "severity": "nonfatal",
    "locus": "facts-block",
    "status": "fixed",
    "reason": "F1 incorrectly asserted that the explicit cubic formula occurs in the supplier Statement. The corrected F1 states exactly its endpoint-data interface; proof step 1.1 now derives the difference formula directly from those data. No Statement/Definition changed and no published defect was found.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-rankine-hugoniot-and-lax-shocks",
    "severity": "fatal",
    "defect_type": "other",
    "locus": "definition",
    "reason": "The Lax clause used eigenvalues at arbitrary states in G although its supplier defines ordered real eigenvalues only on N. For f(x,y)=(y,x^2/2), Df has eigenvalues +/-sqrt(x) on x>0 but no real eigenvalues on x<0. The repaired clause requires both states in the stated hyperbolicity set N; the Rankine-Hugoniot identity remains valid on all of G.",
    "path": "research/defect-ledger.jsonl"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "cex-roe-jump-property-does-not-imply-entropy-admissibility",
    "severity": "nonfatal",
    "locus": "facts-block",
    "reason": "F3 attributed weak-solution necessity to a definition that only names the algebraic RH identity. F4 already supplies the complete moving-jump equivalence and initial trace, so this is a nonfatal citation defect. F3 now states exactly the definition. The Roe scalar (uL+uR)/2 has all required properties, and the stationary (-1,1) jump has entropy production 2/3>0 for eta=u^2/2 and q=u^3/3.",
    "path": "research/defect-ledger.jsonl"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-euler-star-pressure-root-and-vacuum-criterion",
    "severity": "nonfatal",
    "locus": "proof-step",
    "reason": "The intended threshold is correct, but the ordered phrase left velocity then right velocity followed by their difference makes the signed gap ambiguous/reversed. Explicitly vR-vL=uR-uL-2(cL+cR)/(gamma-1)=Phi(0+). F3 now cites only the actual positive-pressure velocity/contact interface, and step 4.1 derives its limiting velocities from step 2.1. Both derivative formulas are positive, match at pK, and the explicit P gives Phi(P)>0; IVT and strict increase prove the unchanged existence/uniqueness statement.",
    "path": "research/defect-ledger.jsonl"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-acoustic-system-local-riemann-solution",
    "severity": "nonfatal",
    "locus": "proof-step",
    "reason": "The original coefficient calculation was correct for r-=(1,-1), r+=(1,1), but its strength bound did not bind the solver radii to that normalization. The example now selects those constant fields before delta and eta, cites the integral/mixed-curve definitions, and solves their IVPs to obtain Psi(U,sigma)=U+sigma*r. Consequently sigma-=sigma+=-epsilon/2 is in the strength box, uniqueness identifies the composition, and direct multiplication verifies the two ordered contact jump balances.",
    "path": "research/defect-ledger.jsonl"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-sod-tube-pressure-root",
    "severity": "nonfatal",
    "locus": "proof-step",
    "reason": "The geometric budget inequality is sufficient, not necessary. The algorithm may return early at an exact Newton root or when an actual bracket is narrow enough even if the worst-case bound fails. Step 3.1 now states this explicitly and makes root containment conditional on the actual budget-exhausted status. The Sod pressure signs, positive-density state conversion, sound speeds and contact matching remain correct: Phi(0+)<0 and Phi(1/10)<0<Phi(1), hence 1/10<p*<1.",
    "path": "research/defect-ledger.jsonl"
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "action": "record-current-observation",
    "id": "thm-c2-ode-flow-on-common-tube",
    "route": "owner/maintenance",
    "affected_use": "Step 4 batch-30 alert named proof 2.2 and 4.1, whose old time-interval symbol J was undefined. def-local-rarefaction-curve uses this theorem for joint C2 local flow regularity.",
    "invalidated_claim": "The old undefined-symbol presentation concern is already corrected on the current published carrier: both steps now explicitly use [0,T_+], matching the Statement.",
    "minimality": "No edit, published adjudication, or Step 5 gate is required from this unit; preserve the existing owner repair record and alert history.",
    "evidence": "items/thm-c2-ode-flow-on-common-tube.md:39,72,76; existing verification.repair points to research/numerical-analysis-remaining-71-2026-10-17-owner-planning-integration/step4-published-alert-repair-records/thm-c2-ode-flow-on-common-tube.json. This is a focused current-symbol check, not a whole published-proof audit.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "path": "research/published-consumer-supplier-ledger.md"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-na-star-shaped-bogovskii-integral",
    "severity": "nonfatal",
    "finding": "The existing kernel lemma proves the locally integrable bound |G(x,y)| <= C|x-y|^(1-d), both Schur bounds, compact support and the distributional divergence formula. Thus existence was supplied locally, contrary to the rejection, but justified_by omitted the required registration. Added that lemma to justified_by; the Definition and its claims are unchanged."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "lem-na-zero-mean-of-zero-boundary-divergence",
    "finding": "Given explicitly defines the vector space as the H1 closure of compactly supported smooth vector fields. Equivalently take the finite Cartesian product of the scalar closure: choose each component within 1/(n sqrt(d)) and assemble, so the squared product norm tends to zero. The finite derivative sum converges in L2 and Holder passes its integral. No vector-valued extension theorem or extra axiom is needed, including for empty D."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-na-bogovskii-kernel-support-and-divergence",
    "severity": "fatal",
    "defect_type": "dependency_citation",
    "finding": "F2 cited only a theorem for linear maps, which does not supply translation invariance for x=tz+(1-t)y. Added the existing translation-invariance theorem as a dependency and derived the affine integral substitution from the two measure identities, through indicator/simple functions. Also specified a harmless zero representative on the null diagonal. Verified compact segment support, the annular L1 bounds in both variables, the Schur estimate, and the divergence sign delta_y-omega. Statement unchanged."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-na-bogovskii-truncated-derivative-fourier-formula",
    "severity": "fatal",
    "defect_type": "dependency_citation",
    "finding": "The affine substitutions in F2 lacked the translation-invariance dependency; supplied it and derived the integral identity by composing translation and dilation. Also repaired step 3.1: for signed omega, |G| need not dominate truncated kernels, whereas C|x-y|^(1-d) does and is integrable against |f(y)| in both variables. Dominated convergence now gives L1 convergence of the fields. The uniform bound pi|xi_j| ||phi||_1 ||f||_1 justifies the Fourier limit against Schwartz tests. The derivative decomposition retains its minus sign; Statement unchanged."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-na-bogovskii-truncated-derivative-fourier-formula",
    "severity": "fatal",
    "defect_type": "logic",
    "finding": "Additional finding in step 3.1: a possibly signed bump makes |G| an invalid majorant for truncated kernels. Replaced that domination by the absolute radial majorant from kernel step 1.2, integrated in (x,y), and used dominated convergence to obtain L1 convergence. Step 2.1 now includes a uniform linear frequency-growth bound for the tempered limit. Statement unchanged.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/1103.3718"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "lem-na-mini-element-local-and-global-dimensions",
    "finding": "The published matching affine simplicial mesh convention defines a mesh as a finite set of nondegenerate cells exactly tiling a bounded polyhedral open set. F1 invokes the MINI spaces with their bounded-domain hypotheses and Given explicitly says finite. Thus an infinite mesh is outside this interface. Checked nodal unisolvence, both directions of zero boundary nodal values via closure/trace, independent cell bubbles, and the nonzero mean functional on constants. These give the stated dimensions without an additional finiteness hypothesis."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "ex-na-mini-element-bubble-moment",
    "finding": "The claim explicitly defines a local bilinear pairing and assumes the positive interior barycentric bubble; it claims no membership in global MINI or Stokes spaces outside dimensions two and three. For any nondegenerate simplex, applying Gauss-Green to q b_K grad(q), with the product rule, gives the displayed identity because b_K vanishes on the boundary. The affine nonconstant gradient is nonzero, so positivity is strict. In dimension one the same identity is ordinary integration by parts on an interval. Dimension restrictions of the contextual MINI definitions are therefore irrelevant to this local calculation."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-na-mini-element-fortin-stability",
    "severity": "nonfatal",
    "finding": "F1 states interpolation constants with possible fixed-domain dependence, so merely invoking it did not establish the stronger constant in the theorem. Kept the full claim and added a local derivation: solid-angle bounds limit vertex-star size, qualitative Lipschitz connectivity supplies bounded facet chains, and cell trace/Poincare plus scaled facet dual moments yield local H1 stability and L2 approximation with constants depending only on d and shape regularity. Bounded patch overlap and bubble scaling then give that same dependence for C_F. Domain charts supply connectivity only. Cell-mean preservation and weak integration by parts retain the exact pressure pairing and the inf-sup transfer."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "thm-na-infsup-bounded-right-inverse-hilbert",
    "route": "frontier-owner",
    "severity": "fatal",
    "defect_type": "logic",
    "finding": "Unassigned Step-4 concern verified against the current Statement and full proof: Statement assumes only bounded b, while Given and steps 1.1-3.1 use bilinearity. For V=Q=R, b(v,q)=vq/(1+|v|) satisfies |b(v,q)|<=|v||q| and beta=1, yet Bv=v/(1+|v|) has image (-1,1), so it is not onto. Minimal repair is to require bounded bilinear b in Statement and inspect its direct consumers. No edit or assigned adjudication was made here.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "action": "no-update",
    "reason": "No published items were edited or found defective in the actual supplier checks. All assigned Statements and Definitions are unchanged, so no published-consumer maintenance event is generated.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "cex-na-musc-minmod-forward-euler-not-tvd-at-cfl-one",
    "model": "gpt-6-luna",
    "context_sha256": "30e5d932ff2ba2720750bb6320bf6d679c7f40a21e718541723332d026833bf2",
    "reason": "The negative-index objection conflicts with the cited reconstruction definition's explicit sum over Z. The finite-support witness and all flux and variation calculations are valid; no mathematical defect or published-consumer repair is identified.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-pe03-burgers-entropy-residual",
    "subject": "ex-pe03-burgers-entropy-residual",
    "run": "numerical-analysis-remaining-71-2026-10-17",
    "at": "2026-10-18T03:57:55.930770+00:00",
    "class": "accuracy",
    "subclass": "citation-truncated",
    "severity": "nonfatal",
    "location": "facts-block",
    "caught_at_stage": "5.1-adjudicate",
    "caught_by_role": "final-adjudicator",
    "disposition": "fixed",
    "reason": "F2 omits continuity and symmetry required by the cited definition. The polynomial flux already has both properties, step 2.1 checks symmetry and consistency, and its cubic factorization and the residual -1/2 are correct; the omission is a nonfatal inaccurate local restatement. Repaired F2 and made polynomial continuity explicit in step 2.1.",
    "uncertain": false,
    "source_urls": [
      "https://math.umd.edu/~tadmor/references/files/Tadmor%20entropy%20stable%20schemes-r%20handbook2016.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-adjudication",
    "id": "lem-na-smooth-neighborhood-dense-in-h1-simplex",
    "model": "gpt-6-luna",
    "context_sha256": "9331935e2a6bd254087c7bd8cf5fa155ac5f52e7e2c0d1aaefdf935db9a05362",
    "outcome": "confirmed_nonfatal",
    "disposition": "fixed",
    "reason": "F3 cited a linear-only measure theorem for the affine contraction. Added the published translation-invariance supplier and derived affine integral scaling by indicators, simple approximation, and signed parts. The s^(-d/2) pullback bound, weak derivative factor s, inward collar, and L2 mollification convergence now follow with unchanged Statement. This is a local citation/derivation omission, not a counterexample to density.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-adjudication",
    "id": "def-na-h0div-space",
    "model": "gpt-6-luna",
    "context_sha256": "c98ddfca2a4f9191805323f245ef723563997401776d768131b50655e8afaaca",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "disposition": "fixed",
    "reason": "The original Definition invoked the quotient and bounded weak normal trace of lem-na-hdiv-weak-normal-trace without its explicit Countable Choice hypothesis. That supplier, and the underlying H1 and H1_0 interfaces, require it. Added precisely this hypothesis and its dependency; the kernel-of-Green-functional definition and arbitrary-open-domain scope are unchanged. All ten direct item consumers explicitly assume Countable Choice.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-adjudication",
    "id": "lem-na-piola-preserves-rt-bdm-spaces",
    "model": "gpt-6-luna",
    "context_sha256": "87b9bb247d2641cc006caeb06bf59713c7ceb0a6c642a83169b558f886b09e7d",
    "outcome": "confirmed_nonfatal",
    "disposition": "fixed",
    "reason": "The mesh-space definition only supplies RT/BDM notation for d=2,3, whereas the algebraic Piola argument is valid in every positive dimension. Preserved the full claim by explicitly defining the real polynomial families in the Statement for every d>=1, and qualified F2 as agreement with the existing d=2,3 convention. Polynomial degree decomposition and the inverse map prove bijectivity; k=0 has zero remainder. No new theorem or weakened conclusion is needed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-adjudication",
    "id": "lem-na-rt0-p0-kernel-is-divergencefree",
    "model": "gpt-6-luna",
    "context_sha256": "a8ad1adbdf4f355f50ad241e2436d99099583b5d1ed101ff9fcb3aab50af896a",
    "outcome": "false_positive",
    "disposition": "false-positive",
    "reason": "A1 correctly identifies inherited Countable Choice: the original weak-normal-trace lemma explicitly assumes it, as do the H1 and H1_0 interfaces, and the kernel lemma explicitly assumes it in its own Statement. The omitted restatement in the original H0(div) definition did not make those suppliers choice-free. For v_h in V_h its divergence is cellwise constant with zero mean, so testing by that divergence proves both kernel inclusions, including Q_h={0}. No item edit is warranted.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-adjudication",
    "id": "thm-na-rt0-bounded-commuting-projection",
    "model": "gpt-6-luna",
    "context_sha256": "cfe7c244b4cc28b297e9c011653a8308c00fe15beddbb24fe8df7694eac7fa86",
    "outcome": "false_positive",
    "disposition": "false-positive",
    "reason": "The Statement explicitly takes S_h:Q_h->V_h to be the stable right inverse above, rather than claiming such a lift for arbitrary domains. These are the V_h,Q_h of the cited mesh convention (d=2,3; bounded connected polyhedral Lipschitz D), and the referenced lift theorem supplies precisely its uniform C_R. Independently, given that lift, Pi_h v=S_h P0 div v+P_Z(v-S_h P0 div v) is a projection on any such pair: P_Z is an L2 contraction, its divergence is zero, and reproduction and the bound 1+sqrt(1+C_R^2)+C_R follow. Thus the rejection discards the explicit stable-lift premise and existing mesh notation; no claim or proof repair is needed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-adjudication",
    "id": "thm-na-rt0-p0-darcy-error-estimate",
    "model": "gpt-6-luna",
    "context_sha256": "5da3d81f05b8b0e13be42b6523cd99b6213c37144e60939fad32b67e3832b2ae",
    "outcome": "confirmed_nonfatal",
    "disposition": "fixed",
    "reason": "The cited Galerkin theorem names exact bilinear-form norms, while F4 proves only upper bounds. Replaced the erroneous equality inference by m_a=||a||<=M_a and m_b=||b||<=M_b, applied the supplier with m_a,m_b, and then proved successive monotonicity of R_h,U_h,P_h under replacing beta_h^(-1),m_a,m_b by their larger displayed bounds. The lift also explicitly supplies nonzero V_h when Q_h is nonzero. The Statement, weighted flux bound, one-cell branch, and permeability-contrast caveat remain intact.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "published-ledger",
    "path": "research/published-consumer-supplier-ledger.md",
    "action": "no-update-required",
    "reason": "Both changed interfaces have only draft frontier direct item consumers. Their inspected uses remain sound; there are no published or outside-frontier direct consumers and no confirmed published-consumer defect to add to maintenance. Existing ledger history is untouched.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-linear-elasticity-displacement-formulation-and-data",
    "severity": "fatal",
    "defect_type": "dependency_citation",
    "locus": "definition",
    "status": "fixed",
    "reason": "Confirmed missing prerequisite: the imported Stokes definition and the published Sobolev and zero-boundary definitions explicitly require an open set. The stated boundary graph-chart condition alone also holds for a closed ball, so nonempty, bounded, connected and Lipschitz do not explicitly supply that hypothesis. Added open to D, preserving all model formulas, coefficient bounds, full-boundary condition and Countable Choice assumption.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "id": "def-pe04-upwind-dg-transport-discretization",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "reason": "Confirmed: the mesh definition includes subfaces of every dimension, so an outward unit normal is not determined on a vertex in d=2. The DG relation now explicitly sums over codimension-one facets, with endpoints/counting measure in d=1; the upwind signs, zero-speed branch and polynomial weak form are preserved.",
    "uncertain": false,
    "source_urls": [
      "https://helper.ipam.ucla.edu/publications/pcatut2005/pcatut_5473_reprint2.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "id": "thm-pe04-upwind-dg-l2-energy-stability",
    "outcome": "confirmed_nonfatal",
    "defect_type": null,
    "reason": "The missing finiteness caveat is confirmed, but L1/non-L2 inflow does not refute the equality in extended reals: bounded polynomial traces imply both square integrals are infinite. The repair preserves all original inflow data, specifies the extended-real meaning, and proves that the identity is finite exactly when the weighted g-square integral is finite; zero inflow still yields the stated decrease.",
    "uncertain": false,
    "source_urls": [
      "https://helper.ipam.ucla.edu/publications/pcatut2005/pcatut_5473_reprint2.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "id": "lem-pe04-cellwise-l2-projection-exists-best-approximation",
    "outcome": "confirmed_nonfatal",
    "defect_type": null,
    "reason": "The projection relation fixes an integer degree. The lemma left that domain implicit in its universal p>=0 wording; this is a nonfatal interface ambiguity, not a counterexample to the finite-dimensional projection argument. The statement now explicitly carries integer degree and the already-required polynomial-subspace inclusion in raw L2. Positive full support makes the monomial Gram matrix strictly positive definite, Cauchy-Schwarz makes its moments finite, and orthogonality yields the Pythagorean inequality.",
    "uncertain": false,
    "source_urls": [
      "https://helper.ipam.ucla.edu/publications/pcatut2005/pcatut_5473_reprint2.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-false-positive",
    "id": "thm-pe04-ssprk33-first-order-upwind-entropy-preservation",
    "reason": "False positive: def-matching-affine-simplicial-meshes begins by fixing an integer d>=2, so the named matching affine simplicial mesh in this statement already excludes the distinct interval-mesh branch. Its FE condition also explicitly imports Countable Choice. The autonomous upwind operator is defined on the entire finite cell-state space; FE admissibility is state-independent at the fixed CFL. Positive volumes make Phi convex, and the prescribed SSPRK convex combinations give Phi(Y1), Phi(Y2), Phi(U_next) <= Phi(U_initial). No extra order/smoothness assumption from the separate local-order clause is needed.",
    "uncertain": false,
    "source_urls": [
      "https://helper.ipam.ucla.edu/publications/pcatut2005/pcatut_5473_reprint2.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "path": "research/published-consumer-supplier-ledger.md",
    "action": "no-update-required",
    "reason": "All nine direct item consumers of the three changed interfaces are draft frozen-frontier items. The energy theorem has no direct item consumer. No published or outside-frontier consumer use or defect was discovered, and no published item was edited. This is a scoped disposition, not a new audit of published suppliers.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-pe05-source-quadrature-consistency",
    "outcome": "false_positive",
    "status": "dismissed",
    "locus": "statement",
    "reason": "The Statement explicitly sets b_i=b(x_i), without exempting ghost indices. Thus every bed value used in the two reconstructed faces is sampled; the proposed constant-bed/raised-ghost counterexample violates this hypothesis. The general scheme permits arbitrary ghost beds, but that does not override this lemma's additional sampling assumption. Taylor expansion gives delta_+-delta_-=b'(x_i)d+O(d^2), and the clipping remainder lies in [0,delta^2], including h=0 and delta=h; the resulting O(d) estimate and local L1 limit are sound.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "ex-pe05-hll-dam-break-wets-dry-cell",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "locus": "facts-block and proof-step 2.1",
    "reason": "F2 omits the cited theorem's finite-chain/periodic domain. This is a nonfatal omitted localization: its N=1 case applies to each cell with its actual admissible neighbors as ghost states, producing exactly the same two face fluxes and update. F2 now states that scope and step 2.1 supplies this argument. The explicitly computed front flux (1/2,1/4), updates (3/4,1/8) and (1/4,1/8), and CFL products are correct.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "def-na-hcurl-space",
    "outcome": "false_positive",
    "reason": "The definition constructs the distributional curl and graph norm on every open subset of R^3. A polyhedron is a special case, so the narrower title makes no unsupported mathematical assertion; the L2 uniqueness and test-continuity arguments are valid with the declared Countable Choice convention.",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-na-zero-tangential-hcurl",
    "outcome": "confirmed_nonfatal",
    "reason": "The graph-closure Definition is sound for arbitrary open sets, but its Remark attributes an unqualified boundary trace assertion to a lemma restricted to bounded Lipschitz polyhedra with a finite matching affine tetrahedral mesh. Qualified only that Remark to the cited domain and trace-quotient convention; the Definition and all mathematical closure interfaces are unchanged.",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-na-weak-hcurl-tangential-trace",
    "outcome": "confirmed_nonfatal",
    "reason": "The classical surface formula needs boundary values, whereas unspecified smoothness can mean only interior smoothness. This is a nonfatal regularity-convention omission: the quotient functional, its sqrt(2) bound and the zero-trace closure conclusion are proved correctly. Specified C1 fields on a neighborhood of the closure in the Statement and step 1.2, so u cross v satisfies the exact closed-cell Gauss–Green hypothesis; mirrored that step in the contract.",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "thm-na-uniformly-bounded-commuting-cochain-projection",
    "outcome": "false_positive",
    "reason": "The correction lemma Statement explicitly adopts the hypotheses and notation of lem-na-whitney-averaged-pullback-moment-bounds. That supplier Statement defines the relative spaces by vanishing boundary moments and explicitly identifies them with E_h^k intersect H_0 Lambda^k; its proof 2.2 proves both inclusions using zero extension, outward smoothing and boundary surface distributions. The correction preserves that target by an inverse on the same finite-dimensional subcomplex. Thus F1 supplies the claimed homogeneous target through its inherited notation; no dependency or proof gap exists.",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "cex-pe12-linear-ritz-does-not-commute",
    "model": "gpt-6-luna",
    "context_sha256": "6ac1e64dc392058eecb09a0f9044de252fb274995e1a1b3b908bc4fc9a39b110",
    "outcome": "false_positive",
    "status": "false-positive",
    "reason": "False positive: the complete cited Poincare proof, steps 2.1–3.1, explicitly obtains C(p)=1, although its Statement permits an unspecified C(p). On (0,1) this licenses ||z||2<=||z'||2 and coercivity 1/2. Independently recomputed a(v,w)=1, a(w,w)=4, Rv=w/4 and the nonlinear pairings 1/2 and 2/3. Countable Choice supplies the stated real H0^1 evolution triple; the quadratic supplier is scaled by 2. No item or interface repair is warranted.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "def-pe12-monotone-diffusion-flux",
    "model": "gpt-6-luna",
    "context_sha256": "1be71167b7c1b139c9291281fda4c52bf41df6c122f62e68a2491e94515be9c1",
    "outcome": "false_positive",
    "status": "false-positive",
    "reason": "False positive: SCHEMA.md explicitly requires a justified_by target to depend on the definition through deps. This is a discharge edge, not a cyclic premise: the definition specifies flux hypotheses and the theorem proves finite-dimensional test-coordinate continuity from Caratheodory continuity, growth and dominated convergence in step 1.1. The definition's Remarks independently establish A(v) in V* by componentwise measurable composition, (p-1)p'=p and Holder. The solution clause defines a class and assumes a continuous representative; it makes no existence assertion. The strict Sobolev range, common exceptional set and declared AC remain sound.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-pe12-evolution-energy-chain-rule",
    "model": "gpt-6-luna",
    "context_sha256": "489ca7823b2b84b6354b75cf8c08d5755c17ef78420697ff54d10efa75981407",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "Confirmed nonfatal local proof/citation gap: F2 attributes derivative commutation and smooth V-valued differentiation to a supplier that proves only convolution convergence. Step 1.1 now differentiates kernel integrals using uniform difference-quotient error times ||u||L1(V), then tests the defining distribution identity with rho_epsilon(t-r) to establish Ji(dot u_epsilon)=rho_epsilon*u_prime. Applying the convergence supplier separately in V and V* proves both strong limits. Reviewed the uniform H Cauchy estimate, Holder passage and good-time endpoint estimate: delta^(1/p)||u(s_delta)||V <= 2^(1/p)||u||Lp(0,delta;V), so the endpoint oscillation vanishes for every p>1. Statement and all choice assumptions are preserved; no new prerequisite is needed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "thm-pe12-aubin-lions-compactness",
    "model": "gpt-6-luna",
    "context_sha256": "d0db936e37f049bb93fc1b1ebe57d9409f08e20fc24cbe2ed5f51140155f5e81",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "Confirmed nonfatal convention/citation defect: the supplier introduces the scalar-test equation only under conjugate Lp-prime membership, whereas this theorem allows q<p-prime. F2 now states the equation explicitly for g in the theorem’s Lq(V*) space and explains that finite-time L1 bounds make both sides meaningful. This is the same distributional derivative convention and preserves every stated p,q case. Reviewed the proof: finite-dimensional H projections have epsilon||v||V remainders; coefficients are W11 with uniformly Lq derivatives, hence have a common positive Holder modulus (Lipschitz for q=infinity). Finite-grid interpolation gives total boundedness; completeness gives compactness; the uniform H bound gives convergence of the same subsequence in every finite Lr. No statement, supplier or page change is needed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "ex-pe12-time-oscillations-without-derivative-control",
    "model": "gpt-6-luna",
    "context_sha256": "b49566a1a13c088a68a97c823d2c1ed804cc6c2980a691e1ef817379b54aa3bb",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "Confirmed nonfatal typing defect: J has domain H while the fixed vector v belongs to V. F1 and proof step 2.1 now consistently use J(iv); scalar integration by parts verifies the pivot weak derivative, and <J(iv),v>=||iv||H^2>0 verifies its nonzero norm. Direct period integration gives n-independent Lp(V) norms, sine orthogonality gives squared separation T||iv||H^2, and the cosine derivative norm is a positive constant times n for all 1<=q<=infinity. The Statement is unchanged and no downstream propagation is triggered.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-na-polynomial-alternating-signs-force-root-count",
    "severity": "nonfatal",
    "status": "fixed",
    "finding": "Step 1.1 omitted the temporary assumption that the sampled values alternate. This is a nonfatal proof-presentation omission: under that explicit supposition, polynomial continuity and IVT yield one root in each of n+1 disjoint open intervals, contradicting the bound of at most n roots. The supposition is now explicit; the Statement, dependencies and choice-free finite argument are unchanged.",
    "defect_type": "other",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "alg-na-minimax-approximation-and-remez-algorithms",
    "severity": "fatal",
    "status": "fixed",
    "finding": "For B=0, n=0, f(x)=x on [-1,1], X=(-1/2,1/2) gives p=0 and lambda=-1/2. A valid maximum(1,-1) response previously exchanged a node despite the zero exchange budget. The new k=B return precedes exchange and retains every earlier certificate/status branch; exchanges now require k<B, so there are at most B while solves/oracle calls remain at most B+1.",
    "defect_type": "logic",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-na-remez-zero-degree-equioscillation-certificate",
    "severity": "fatal",
    "status": "fixed",
    "finding": "The original unrestricted oracle input did not force the exact output tuple: a valid alternation(1/2,(-1,0)) response returns that reference rather than X=(0,1). The example now specifies the admissible maximum(1/2,0) response on its first candidate, and F2 precisely cites the maximum branch. Direct calculation gives p=1/2, lambda=-1/2, global error 1/2 and residuals (-1/2,1/2) on X, proving both the stipulated response and the unchanged optimality example.",
    "defect_type": "logic",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "alg-na-weighted-rational-remez-exchange",
    "severity": "fatal",
    "status": "fixed",
    "finding": "The rational procedure had the same off-by-one exchange: for m=n=B=0, w=1, f(x)=x on [-1,1] and X=(-1/2,1/2), the unique normalized candidate is r=0, q=1, defect 0, lambda=-1/2. maximum(1,-1) previously exchanged node 0. A k=B budget return now precedes exchange after all certificates and zero-level statuses; only k<B can exchange, with at most B+1 solves/oracle calls.",
    "defect_type": "logic",
    "uncertain": false,
    "source_urls": [
      "https://people.maths.ox.ac.uk/trefethen/minimax_published.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "thm-na-weighted-rational-alternation-characterization",
    "severity": "nonfatal",
    "status": "open",
    "owner_route": "frontier owner for batch 4; outside this unit assigned tuple inventory",
    "finding": "The Step-4 concern is confirmed on the current full proof. In step 2.2 the phrase \"By step 1.2, r has N+2 alternating nodes\" points to setup rather than the necessity proof completed in step 2.1. Step 3.1 likewise omits step 2.1 when crediting the criterion directions. Replace/add those references and tags with step 2.1; the complete necessity argument is already present and the Statement remains sound. No edit or adjudication of this unassigned item was made.",
    "affected_use": "items/thm-na-weighted-rational-alternation-characterization.md, proof steps 2.2 and 3.1: conclusion references to the necessity direction.",
    "invalidated_claim": "No theorem claim is invalidated; the cited step alone has not yet discharged necessity.",
    "minimality": "Repair only the two conclusion references and their tags, retaining all mathematical claims and proofs.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-metric-graph-kirchhoff-green-identity",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "status": "fixed",
    "reason": "The original H2 interface allows complex u, whereas both cited calculus theorems require real factors/functions. The missing scalar-field reduction in step 1.1 is repaired by applying those real theorems to Re(u_prime)*v and Im(u_prime)*v separately and recombining their integrals. The absolutely continuous representative interface supplies the component derivatives; v is real in V_D. The Statement, signs, loop-incidence counting, AC assumption and boundary cancellation are unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "cor-weighted-network-gauged-cg-applicability",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "F1 incorrectly imposed Dirichlet zeros on ker(L_C) even for nonempty D: for one unit-conductance edge and D={one endpoint}, L_C=[[1,-1],[-1,1]] annihilates (1,1), while L_D=[1]. This is a nonfatal overstatement because step 1.1 uses only the correct L_D characterization and step 1.2 explicitly assumes the closed case. F1 now distinguishes zero-extended L_D vectors from unrestricted componentwise constants for L_C when D is empty. All three SPD arguments, Euclidean gauge invariance, finite-dimensional surjectivity and CG hypotheses were checked; the Statement is unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-metric-graph-p1-interpolation-estimate",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "status": "fixed",
    "reason": "The original membership claim is false under its unspecified scalar field: on one unit edge with D empty and u(x)=i*x, all stated trace conditions hold and I_hu=i*x, which is outside the real V_h. The graph-space and mesh definitions fix real H1 spaces, so the H2 hypothesis now explicitly uses real scalars. The error estimate, constant h, arbitrary anchors, loops and AC hypothesis are preserved. Each cell slope is the derivative average; the AC increment formula and real Cauchy-Schwarz give the h_K-squared bound and its finite weighted sum. Step 4.1 also explains real edgewise H1 membership by cancellation of internal endpoint terms.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "published-consumer-ledger",
    "action": "no-update",
    "reason": "The only direct item consumer of the changed interpolation Statement is the draft frontier FEM theorem. No outside-frontier or published consumer, and no published defect, was discovered.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-na-periodic-taylor-green-vortex",
    "severity": "nonfatal",
    "reason": "F4 cited FTC I, whose conclusion only differentiates the integral function. Replaced it by FTC II: G(x)=sin(2x)/2 is differentiable and G prime=cos(2x) is continuous and integrable. Recomputed divergence zero, Laplacian -2u, convection A^2(sin2x,sin2y)/2 and the opposite pressure gradient; periodicity and the zero mean follow. This is a local citation repair; the Example is unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "path": "research/defect-ledger.jsonl",
    "locus": "facts-block",
    "current_itemHashGuard": "335d3594fea5e2dc00434ac4f03ebc8d84ee84361196819497d74b8ff07130e2"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-na-zero-mean-pressure-gauge",
    "severity": "nonfatal",
    "reason": "F1 used the Stokes pairing outside its declared mean-zero pressure space. Defined the finite extended pairing tilde b on all L2 pressures using Holder, and restricted its identification with b to the Stokes domain class. The existing zero-divergence-mean lemma applies on arbitrary bounded open sets, so no Lipschitz or dimension narrowing is needed. Added its explicit Countable Choice premise. Subtracting the mean fixes precisely the spatial-constant freedom since a nonempty open domain has positive volume.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "path": "research/defect-ledger.jsonl",
    "locus": "facts-block",
    "current_itemHashGuard": "23b92b0e48ec11a3c875bfeb4cfa90d4a8fc26da20fbd85ec0a1f1c30428cd0a"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-na-evolutionary-incompressible-ns-weak-solution",
    "severity": "nonfatal",
    "reason": "The original Definition left T free. Bound it explicitly by 0<T<infinity before the Bochner spaces, tests and energy inequality. The regular-pressure class, common H_sigma pivot, duality sign and viscosity convention are unchanged. This restores the finite time horizon intended by the page; it asserts no existence of regular pressure. Direct-consumer examination of this literal Definition change follows in repair_notes.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "path": "research/defect-ledger.jsonl",
    "locus": "statement",
    "current_itemHashGuard": "9360c7d9f17ce5494f96db8a28594826e2b60a36946f0d0b3777e46eb4b02c59"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-na-continuous-pressure-recovery-from-solenoidal-residual",
    "severity": "nonfatal",
    "reason": "The Statement did not spell out the dimension of the Stokes spaces V and Q used in F3. Made their existing two/three-dimensional convention explicit and bound the finite time interval. This matches the owning page and declared Stokes-space interface, rather than promising a new arbitrary-dimensional supplier. For ell(q)=R(B_D q), Riesz gives p_hat; p=-p_hat has R(v)=b(v,p), is strongly measurable by bounded linearity, has the stated Ls bound, and is unique by testing with B_D(p1-p2). The common null set suffices for all v.",
    "uncertain": false,
    "source_urls": [
      "https://people.tamu.edu/~guermond/M661_FALL_2025/chap53.pdf"
    ],
    "familiar": true,
    "path": "research/defect-ledger.jsonl",
    "locus": "statement",
    "current_itemHashGuard": "9cad31364f8bf1cbd14a5156309682edd45ca11f05d98172de9bdef68e106a1a"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-na-unit-square-mini-mesh-family",
    "severity": "nonfatal",
    "reason": "F2 omitted the Countable Choice premise of the MINI spaces and Fortin supplier. Added it to Given and deps, stated the full supplier domain class, and verified that the square is a bounded connected Lipschitz polygon in dimension two. Every cell is right isosceles with diameter sqrt(2)/n; common diagonals/grid edges give conformity and matching. Scaled copies give a fixed shape bound, so the Fortin norm and positive inf-sup lower bound are uniform in n.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "path": "research/defect-ledger.jsonl",
    "locus": "facts-block",
    "current_itemHashGuard": "7ce836a270eb371cd27432096f5f7cfcc2ccce2bab309d81ffa83c6ce834904c"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-na-mini-weak-solenoidal-compactness",
    "severity": "nonfatal",
    "reason": "F1 named a compact-composition corollary instead of the compact embedding that it used. Replaced it by thm-rellich-compactness-from-w-one-p-zero-to-lp at p=2, under the already assumed AC; finite component extraction supplies the vector case. Spatial compactness and pressure interpolation put bounded weak-kernel limits in V_sigma. Finite nets of bounded V_sigma balls approximate fine-mesh weak kernels; the energy bound controls times outside those balls. Coefficient Aubin-Lions compactness then gives finite-dimensional approximations and total boundedness in complete L2_tL2_x. The Statement is unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "path": "research/defect-ledger.jsonl",
    "locus": "facts-block",
    "current_itemHashGuard": "a848ea19dd303fc79f3cc09d3b55b59e3fef301b32d29bf7ecc132a1c78c9525"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-na-conditional-three-dimensional-flow-computation",
    "severity": "fatal",
    "reason": "F2 and step 2.1 invoked the weak-strong uniqueness theorem under Countable Choice alone, although its interface expressly requires the Axiom of Choice. This is a dependency-premise gap, not evidence that arbitrary energy weak solutions are unique. Added the AC dependency and explicitly conditioned only the continuum comparison branch on AC; the finite-step computation remains under Countable Choice. The compactly supported curl datum is exactly divergence-free and no-slip, and the mass initialization and discrete energy budget remain valid.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "path": "research/defect-ledger.jsonl",
    "locus": "facts-block",
    "current_itemHashGuard": "e649c5e39a7b8bb23de6572d991af64ed3a64bf39778a97beaa3e59541b0ecf7"
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "path": "research/published-consumer-supplier-ledger.md",
    "action": "record-no-published-consumer-impact",
    "supplier_ids": [
      "def-na-evolutionary-incompressible-ns-weak-solution",
      "lem-na-continuous-pressure-recovery-from-solenoidal-residual"
    ],
    "published_consumers": [],
    "reason": "Direct dependency/reference searches for both changed interfaces found only draft original-frontier consumers and the owning draft page. Their actual uses are recorded below and satisfy the clarified hypotheses. No published repair or outside-consumer maintenance is proposed by this unit.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-maxwell-rectangular-stokes-identity",
    "model": "gpt-6-luna",
    "context_sha256": "91aa3fee744a8546b2d240bd47b7f601775c1aae96b331e5a8b12227b68c2af4",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "severity": "nonfatal",
    "reason": "The FTC and Fubini suppliers require nondegenerate intervals. Added an explicit zero-width four-side cancellation case without narrowing the Statement; corrected F3 to require integrable sections and verified continuous sections in step 2.1. The ordinary positive-area curl calculation is unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "def-maxwell-discrete-cochain-and-yee-grid",
    "model": "gpt-6-luna",
    "context_sha256": "fd117ecd162d93f3fe327aa3c2ef0f3e3bdfc9c1cd1b15db233a55abb9edd5de",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "severity": "fatal",
    "reason": "For an edge tail-to-head incidence row (-1,+1), outgoing electric flux is -G^T M_e e, not G^T M_e e. Corrected physical Gauss charge to -G^T M_e e=rho and continuity to rho(next)-rho-dt G^T(total current)=0. The Ampere and Faraday updates and all mass matrices are unchanged. The prior physical charge interface had the opposite sign.",
    "defect_type": "logic",
    "uncertain": false,
    "source_urls": [
      "https://eecs.wsu.edu/~schneidj/ufdtd/ufdtd.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "ex-maxwell-pec-rectangular-cavity-mode",
    "model": "gpt-6-luna",
    "context_sha256": "c2843450ff2b0d102a6e71673d3662c4c152f32fe00763796482edf3af53f419",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "severity": "nonfatal",
    "reason": "The displayed fields satisfy both divergence equations with zero charge, and direct differentiation proves Faraday and Ampere precisely for J_src=0 and sigma=0. Made this source-free lossless instance explicit in Example, Given and F1, removing the unjustified omission of impressed current. The claimed cavity mode and frequency are preserved.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "def-maxwell-edge-fem-semidiscretization",
    "model": "gpt-6-luna",
    "context_sha256": "a519599bca487f1f81f3b498c21a7fdced05a5e0a0ef0771223cc1186bee261b",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "severity": "nonfatal",
    "reason": "The curl ODE is a legitimate evolution for every initial face vector, but DC=0 only preserves divergence and does not impose the physical magnetic constraint. Added the explicit requirement Db(0)=0 for the constrained Maxwell interpretation and proved its preservation directly, retaining the full arbitrary-data coefficient ODE and full magnetic space.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-maxwell-discrete-incidence-identities",
    "model": "gpt-6-luna",
    "context_sha256": "f026642212bbb48c0aa0afa7c2ca2e3f61ddcda0c1b9c0dbc5b56d4d591d04de",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "severity": "nonfatal",
    "reason": "F1 wrongly described the PEC closure as the ordinary boundary quotient; corrected it to the actual mixed restriction retaining all faces and cells. The existing PEC restriction calculation remains valid. Replaced simplex-only absolute calculations by the established cellular incidence and boundary-square-zero results, covering rectangular Yee faces and arbitrary cellular attachments while retaining the Statement.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "def-maxwell-edge-ritz-projection",
    "model": "gpt-6-luna",
    "context_sha256": "b29f8327ba8c09fb07a5c110a5aac706fe16a38198154d008272cce06ba76159",
    "outcome": "false_positive",
    "status": "false-positive",
    "reason": "The defining equation already gives a_+(u-R_hu,v_h)=0 by subtraction. The cited well-definedness lemma explicitly proves this identity in proof step 1.2 and uses it for Pythagorean best approximation in step 2.1. Thus the attribution is mathematically supported by the actual cited argument although its Statement does not separately list orthogonality; no item edit is needed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-maxwell-finite-dimensional-ode-existence-uniqueness",
    "model": "gpt-6-luna",
    "context_sha256": "13789e763e0a2088531151867a7dc273c7b56a2d2a9f543c4d952c1a89d0babd",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "severity": "fatal",
    "reason": "The original assertion of a C1 IVP solution included T=0, whereas the matrix supplier expressly declines any singleton-domain derivative. Preserved positive-time existence and uniqueness and added the mathematically valid zero-time unique-map and constant-load continuation clause. The augmented matrix proof now separates these cases and invokes its supplier only on nondegenerate intervals.",
    "defect_type": "logic",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-maxwell-edge-ritz-projection-well-defined",
    "model": "gpt-6-luna",
    "context_sha256": "ac9515f9006bf5408fc3d195b8d39428b610571b4684b3403f331954b3adf913",
    "outcome": "false_positive",
    "status": "false-positive",
    "reason": "A1 accurately describes inherited assumptions: the cited Ritz definition explicitly assumes Countable Choice in the edge/face branch, its FE supplier explicitly identifies H(div)/Piola inheritance, and def-na-hdiv-space and def-covariant-contravariant-piola-maps-and-hdiv-hcurl each explicitly assume Countable Choice. The finite Gram matrix proof makes no further choice. No unsupported strengthening or item repair is present.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-maxwell-magnetic-compatible-initial-projection",
    "model": "gpt-6-luna",
    "context_sha256": "03c09c14516928282a277d91d67e9ef4f008fcd982b9735e37ceaa8b4d0b77a2",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "severity": "fatal",
    "reason": "Step 2.1 invoked a canonical interpolation rate without the suppliers aligned-interface and cellwise C1 hypotheses. A tangential jump in a piecewise constant divergence-free field can have zero piecewise derivative bound while not belonging to the mesh RT0 space, contradicting the original derivative-only O(h) estimate on cut cells. Made the approved mesh-aligned smooth-data assumptions explicit for the rate and F3; divergence compatibility and curl orthogonality still hold independently of that rate qualification.",
    "defect_type": "dependency_citation",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "thm-maxwell-periodic-yee-smooth-solution-error",
    "model": "gpt-6-luna",
    "context_sha256": "ea2f3a5edaf9a92d4a6e9723f44b6ac9f8a11e817ed92f4a1a3eab7f4833c392",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "severity": "nonfatal",
    "reason": "The displayed identity in step 4.1 has the wrong sign: w(n)=bar w(n-1)+dt V(n-1)/2. Corrected it and explicitly separated n=0, which the initialization controls. The triangle-inequality curl bound is unchanged by the sign; the Rayleigh estimate dt sqrt(lambda_max)<2, forced square-root energy estimate and Faraday residual sum still establish the stated uniform second-order error.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "thm-maxwell-yee-gauss-constraints-propagate",
    "supplier": "def-maxwell-discrete-cochain-and-yee-grid",
    "status": "open",
    "route": "ordinary frontier owner lane after initial writers drain",
    "affected_use": "Statement initial/final G^T M_e e=rho and plus-dt continuity, F3, and proof 2.1 encode the old physical-charge signs. Replace both Gauss relations by -G^T M_e e=rho, use minus-dt continuity, and apply -G^T in step 2.1.",
    "minimality": "Only the physical-charge sign interface changed; retain all unaffected field updates, masses and energy statements.",
    "reason": "Unassigned draft frontier consumer needs focused alignment with the repaired supplier interface; this dispatch does not edit or adjudicate it.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "ex-maxwell-incompatible-current-gauss-drift",
    "supplier": "def-maxwell-discrete-cochain-and-yee-grid",
    "status": "open",
    "route": "ordinary frontier owner lane after initial writers drain",
    "affected_use": "Example initializes G^T M_e e=rho; Verification 1.1 has residual +dt J at tail and -dt J at head, and 2.1 updates rho by -dt G^T j. For physical charge reverse the Gauss operator and both residual/update signs.",
    "minimality": "Only the physical-charge sign interface changed; retain all unaffected field updates, masses and energy statements.",
    "reason": "Unassigned draft frontier consumer needs focused alignment with the repaired supplier interface; this dispatch does not edit or adjudicate it.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "thm-maxwell-edge-fem-smooth-solution-error",
    "supplier": "lem-maxwell-finite-dimensional-ode-existence-uniqueness",
    "status": "open",
    "route": "ordinary frontier owner lane after initial writers drain",
    "affected_use": "The Statement says the semidiscrete solution exists uniquely on [0,T], and F1 cites a unique global ODE solution without the positive-time qualification. Step 2.1 differentiates that solution. Positive-time use remains sound; for T=0 clarify that existence means the initialized singleton map/continuation and justify the estimate directly from the initial projections, without a singleton-domain IVP derivative.",
    "minimality": "Preserve the positive-time theorem and its proof; only singleton-domain terminology and endpoint treatment need attention.",
    "reason": "Unassigned draft frontier consumer needs focused alignment with the repaired supplier interface; this dispatch does not edit or adjudicate it.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-pe11-gauge-conforming-edge-approximation",
    "location": "facts-block",
    "outcome": "confirmed_nonfatal",
    "severity": "nonfatal",
    "reason": "F1 asserted continuity of discrete kernel fields, although conforming edge fields can have normal jumps (for example gradients of interior continuous piecewise-affine nodal hat functions). This is nonfatal: no proof step uses full continuity. The required inclusion follows directly from V_h being a subspace of V and zero distributional curl. Replaced only that assertion; the diagonal smooth approximants, finite-dimensional projections, P_n u=0 and graph-error estimates remain valid under Countable Choice and constant epsilon.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "evidence": "research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u43.json"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "thm-pe11-edge-maxwell-spectral-approximation",
    "location": "facts-block",
    "outcome": "false_positive",
    "severity": null,
    "reason": "The rejection overlooks the actual cited proof: lem-pe11-hcurl-weak-limit, Proof step 1.1, explicitly identifies distributional curl as a closed subspace of L2 x L2 and proves H(curl) Hilbert. The theorem itself repeats closedness in step 1.1 and includes the L2 Hilbert supplier F11. Thus the Hilbert assertion in F6 is proved locally, though absent from the supplier Statement; it is not an unsupported mathematical premise. Closed graph, finite product completeness and inherited graph inner product establish precisely what is needed. No item or contract edit is warranted.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "evidence": "research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u43.json"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-pe11-unit-cube-maxwell-mode",
    "location": "proof-step",
    "outcome": "confirmed_nonfatal",
    "severity": "nonfatal",
    "reason": "Step 2.1 incorrectly named F5 as the source of discrete full-multiplicity cluster approximation. F5 concerns only continuous compact-coercive spectrum; F3 is exactly the edge spectral approximation theorem. This is nonfatal because F3 was already declared and present among this step's trailing justification tags, with all domain, coefficient, choice and mesh assumptions explicit. Changed the inline citation from F5 to F3. The cutoff proof, curl-curl computation and testing against the full curl kernel are valid and unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "evidence": "research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u43.json"
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "id": "def-fv-regular-simplicial-companion-family",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "reason": "The supplier defines open cells and relatively open faces. A finite union of closed simplices/facets cannot equal those sets. Subdivision now explicitly covers their closures with disjoint simplex interiors; vertex stars, means, fan geometry and uniform cubical examples retain their intended meaning.",
    "defect_type": "logic",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "id": "def-hybrid-mimetic-fv-scheme",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "reason": "The linear load used an undeclared function f with no integrability condition. Requiring f in L1(Omega) makes every cell load finite and preserves arbitrary finite cell-source vectors (realized by piecewise constant f). The nonlinear branch already assumes Lp-prime space-time data and is unchanged.",
    "defect_type": "other",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "id": "prop-hybrid-mimetic-scheme-coercive-conservative-affine-exact",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "A nonzero local constant vector has zero gradient and all residuals zero, so the Remarks incorrectly called the local quantity a norm. It is now explicitly a seminorm with exactly the constants as kernel, hence a quotient norm. The lower bound, global zero-Dirichlet positive definiteness, monotonicity, conservation and affine flux calculation were already valid and are preserved.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "id": "ex-harmonic-transmissibility-material-interface",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "The mesh supplier permits arbitrary interior centers; it does not imply midpoint centers as F1 suggested. The Example now explicitly chooses 1/4 and 3/4 and F1 attributes them to that choice. With those data the resistance equation gives c=9/5, samples 9/20 and 19/20, transmissibility 18/5 and outward flux -9/5, whereas arithmetic averaging gives -5. The numerical argument was sound for the intended choices.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-false-positive",
    "id": "lem-hybrid-mimetic-backward-euler-energy-and-compactness",
    "outcome": "false_positive",
    "status": "not-a-defect",
    "reason": "False positive: f^n denotes the cell/time-averaged load f^n|K=f_K^n from F2, as confirmed by step 2.1 explicitly applying Jensen to cell/time averages. Thus sum_K |K| f_K^n (I_h z)_K = sum_K f_K^n integral_K z = integral_Omega f^n z exactly. Its Lp-prime norm obeys the existing Jensen bound. The mass pairing is likewise exact. Growth, mean-test stability and (p-1)p-prime=p prove the derivative bound; finite projections of companions prove compactness without a mesh/time coupling. No mathematical source change is warranted.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "id": "thm-tpfa-discrete-rellich-and-physical-gradient-closure",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "reason": "The direct weak-subsequence invocation did not cite or explicitly discharge its ultrafilter, DC and HB hypotheses. AC remains the sole assumed choice principle; added proved suppliers supply ultrafilters, DC/countable choice and dominated Hahn-Banach, now recorded in F4 and the extraction steps. Constant-in-time application of the existing space-time gradient lemma supplies H01 closure after compact L2 extraction, and scalar coordinate extraction supplies the physical vector-gradient subsequence. The pyramid volume factor d and cancellation estimate are unchanged and valid.",
    "defect_type": "dependency_citation",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "id": "def-hybrid-mimetic-fv-scheme",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "The zero-case contract worksheet incorrectly said the general nonlinear constitutive map vanishes at zero. The growth/coercivity hypotheses allow a(x,0) nonzero (for example a(x,xi)=xi+c at p=2 with an appropriate h). The worksheet now distinguishes vanishing linear gradient/residual terms from a possibly nonzero nonlinear a(x,0); no new hypothesis was added.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "path": "research/published-consumer-supplier-ledger.md",
    "action": "record-interface-examination",
    "ids": [
      "lem-fv-conforming-companion-and-test-recovery",
      "prop-hybrid-mimetic-scheme-coercive-conservative-affine-exact",
      "lem-hybrid-mimetic-backward-euler-energy-and-compactness",
      "thm-tpfa-discrete-rellich-and-physical-gradient-closure",
      "ex-anisotropic-mimetic-flux-on-skew-cell"
    ],
    "reason": "The current dependency/reference search for the two changed definitions and changed proposition Statement found only the five listed draft frontier consumers and the owning draft page. Their exact uses are recorded in downstream_examination; no affected published or outside-frontier item was found and no published item was edited.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "route-existing-alert-to-frontier-owner",
    "id": "def-phase-field-discrete-realizations",
    "status": "outside-lane-unedited",
    "reason": "Verified Step-4 alert: items/def-phase-field-discrete-realizations.md:72 says \"The published TPFA theorem\" while thm-tpfa-green-coercivity-maximum-principle is draft. This is another draft frontier item, not a published consumer. Its text already distinguishes the Neumann realization from the Dirichlet theorem, so the observed defect is publication-status wording; replace \"published\" with an accurate description in its owning lane. No mathematical consequence is inferred.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "ex-fas-reaction-poisson-tau-cancellation",
    "action": "record-false-positive",
    "status": "dismissed",
    "reason": "The claimed fixed point is already established directly: F_h(1,0)=(3,-1), Iu_*=1/2, Rf_h=2, F_H(1/2)=5/4, tau=-3/4, and P(v-Iu_*)=0. Every residual smoother fixes this zero-residual input. The citation also admits a level-1 V/W specialization: the polynomial domains are R^2 and R, the selected coarse root is the initial restriction 1/2, and the two-grid solver contract preserves that selected initial exact root. No unverified deeper hierarchy or base solve is used; any repeated calls remain at 1/2. The direct argument does not infer a general arbitrary-solver fixed-point theorem.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "ex-fas-semilinear-reaction-diffusion-local-convergence",
    "action": "record-fixed-finding",
    "status": "fixed",
    "severity": "nonfatal",
    "locus": "proof-step",
    "reason": "The supplier lem-fas-coarse-branch-derivative actually derives Dv=I-DF_H^{-1}RDF in its proof step 2.1, which gives Dv(0)=0 here because DF_H(0)=2 and RA=(1,1)=2I. Thus the rejected branch-derivative citation is supported by the complete supplier argument and is not a fatal gap. The assigned carrier nevertheless has a confirmed nonfatal arithmetic defect in step 1.4: 1/2(11r+12r^3(3r^2)^2) equals 5.5r+54r^7, so the printed strict comparison between them is false. Preserve the strict norm bound by writing norm<first expression=expanded expression. Also correct the owning contract finite-check summary from smoother eigenvalues 1/2,3/4 to 1/4,3/4. Make the already justified branch calculation explicit by differentiating phi(v(u))=g(u), yielding 2Dv(0)=Dg(0)=0; remove its redundant occurrence in step 1.2. These changes preserve every stated claim and the rate 27/400.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-meshfree-cell-quadrature-and-fill-radius",
    "action": "record-fixed-finding",
    "severity": "fatal",
    "status": "fixed",
    "reason": "The Definition uses R without binding it, so interiority is not a predicate of the supplied data. Bound R>0 and epsilon>0 explicitly, retaining B(x,R epsilon+2h) subset Omega and specifying the chosen unscaled-kernel support bound. The finite integration-compatible partition, positive h and volumes, local volume bound and choice-free quadrature data are unchanged."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-symmetric-kernel-moment-cancellation",
    "action": "record-fixed-finding",
    "severity": "nonfatal",
    "status": "fixed",
    "reason": "F2 omitted openness of U and support containment in T(U). For T:(0,1) into R the inclusion and a continuous nonzero bump supported near 2 give a positive full-space integral but zero transformed integral. This overstatement is nonfatal to the actual proof: reflection and positive scaling are global diffeomorphisms of R^d, all coordinate integrands are continuous and compactly supported, and oddness gives I=-I. Restated the exact supplier with zero extension; both moment conclusions are unchanged."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-scaled-kernel-moments-and-derivative-bounds",
    "action": "record-fixed-finding",
    "severity": "nonfatal",
    "status": "fixed",
    "reason": "F3 overstates the supplier by replacing supp(f) subset T(U) with containment in an arbitrary codomain V and omitting open U. The inclusion (0,1) into R with a nonzero bump near 2 disproves that version. The actual map u to epsilon u is globally onto with determinant epsilon^d, so its moment substitutions are valid; chain rule gives the derivative powers and onto scaling gives equality of suprema. Repaired F3 only, leaving the Statement and proof intact; the support assertion includes closure because the scaled closed ball contains every nonzero point."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "thm-first-derivative-meshfree-convolution-bias",
    "action": "record-fixed-finding",
    "severity": "nonfatal",
    "status": "fixed",
    "reason": "F4 falsely permits support merely in an arbitrary codomain: inclusion (0,1) into R and a nonzero continuous bump near 2 violate its formula. This is nonfatal to the theorem because y=x-epsilon u is globally onto with absolute determinant epsilon^d. Restored the exact open-domain/image-support/zero-extension conditions and made that single affine substitution explicit. Taylor on R^d gives |R| <= epsilon^3 ||D^3 f|| |u|^3/6; derivative moments annihilate the constant/quadratic terms and give +gradient f. Wrote the linear contraction with partial_j inside the sum, and retained the componentwise dual-unit-vector norm bound, including v=0, to obtain epsilon^2 m3/6. The Statement is unchanged."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-half-order-kernel-translation-modulus-in-l1",
    "phase": "initial",
    "round": 1,
    "severity": "nonfatal",
    "status": "fixed",
    "locus": "facts-block",
    "reason": "F1 incorrectly attributes the improper-limit convention to a definition of finite-interval integration. This is nonfatal: the Statement already specifies the improper convention and step 1.1 independently establishes the cutoff limit by an explicit Cauchy estimate. F1 now separates that local convention from the cited ordinary integral definition.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-half-order-midpoint-order-loss",
    "phase": "initial",
    "round": 1,
    "severity": "fatal",
    "status": "fixed",
    "locus": "proof-step",
    "reason": "The cited midpoint algorithm requires an everywhere evaluable real function on [0,1], but the original g was supplied only on (0,1]. This application omitted an actual domain hypothesis. The verification now calls the algorithm on the explicit extension g-tilde(0)=0, g-tilde(y)=y^(-1/2) for y>0. Every midpoint is positive, so all samples and the improper-integral comparison are preserved.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "id": "lem-na-periodic-staggered-grid-smooth-sampling-consistency",
    "severity": "fatal",
    "status": "fixed",
    "defect_type": "logic",
    "reason": "The final Statement clause wrongly bounds the mean of |g|. In d=1, g(x)=sin(2*pi*x) has zero integral but its sampled absolute means tend to 2/pi, contradicting any O(h^2) bound. Proof 4.1 instead proves |h^d sum_j g(x_j)| <= C_d h^2 ||D^2 g||_infty for zero integral, including translated face partitions. Replaced only the transposed absolute-value wording; all derivative consistency estimates and hypotheses remain intact.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "id": "thm-na-periodic-discrete-helmholtz-projection",
    "severity": "nonfatal",
    "status": "fixed",
    "defect_type": "dependency_citation",
    "reason": "F1 and its contract import the negative-adjoint identity from the grid lemma Statement, which only states zero mean, invertibility, kernel and Poincare. The identity is actually proved in that lemma proof 1.1, so the conclusion and mathematical argument are sound; the interface-only citation worksheet is incomplete, a nonfatal citation defect. Restricted F1 to its stated supplier interface, added F3 citing the explicit grid definition, and derived the required summation-by-parts identity directly in projection proof 2.1; synchronized its contract.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "path": "research/published-consumer-supplier-ledger.md",
    "action": "no-update",
    "reason": "No proposed changes to research/published-consumer-supplier-ledger.md: neither changed item is published, and the sampling interface has one draft frontier item consumer plus its draft home-page reference. No potentially defective published consumer was discovered.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-bernstein-convex-hull-and-positivity",
    "severity": "nonfatal",
    "locus": "facts-block",
    "location": "F10, used in proof step 1.1",
    "reason": "F10 restated only the base-one specialization, whereas step 1.1 needs arbitrary nonnegative real bases. This is a nonfatal incomplete fact summary: the already declared def-integer-power explicitly defines a^0=1 and a^(n+1)=a^n*a for every real a, including zero, and the existing F10 contract quotes this general recursion. Replacing only F10 with that general clause fully supports the stated induction without a new premise or changed argument.",
    "status": "fixed",
    "before_sha256": "efa95a87005a77694bd1ac1a3fc64dc554455a61197cd8c68e6a8f325eb94ccd",
    "post_sha256": "3a85d87f59ef73a68ab8603dddea6523a9d72abe5d773532b9def8009aecfc44",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-pe26-scalar-substructuring-model",
    "status": "fixed",
    "severity": "fatal",
    "reason": "The original open-set intersection clause is vacuous and does not impose face-to-face closure intersections. Replaced it by an explicit condition on closures. Also made the declared fixed polygon-shape parameters explicit: scaled Lipschitz graph count, radius and constants, and mean-zero Poincaré constants; the notch family in the Step-4 digest shows that pointwise cones alone cannot give uniform Euclidean trace constants. This qualification retains all fixed polygonal models with their actual shape constants and the intended uniform bounded-shape estimates.",
    "uncertain": false,
    "source_urls": [
      "https://d-nb.info/983219192/34"
    ],
    "familiar": false,
    "defect_type": "logic"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "thm-pe26-harmonic-extension-minimizes-energy",
    "status": "dismissed",
    "severity": "nonfatal",
    "reason": "The matrix is the local stiffness matrix of the symmetric bilinear form a_i(v,w)=rho_i sum_K integral grad(v) dot grad(w), inherited through the Schur definition and scalar model. Thus K_i is symmetric, both cross terms vanish when its interior row on H_i g is zero, and the positive interior quadratic term proves the unique minimum even for a floating block or empty interior.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "def-pe26-scaled-averaging-and-bddc-preconditioner",
    "status": "dismissed",
    "severity": "nonfatal",
    "reason": "The PE26 corner branch inherits rho_i>0 from the scalar model through both its primal-space and Schur-definition dependencies. Hence rho_i+rho_j>0, the two weights sum to one and preserve conforming values. The inverse in the BDDC formula is explicitly restricted to a positive definite partial Schur operator. No edit is needed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-pe26-discrete-trace-schur-equivalence",
    "status": "fixed",
    "severity": "fatal",
    "reason": "The original S_i was Dirichlet-restricted, so arbitrary nonzero outer-boundary data were outside its domain. Preserved the full arbitrary-trace estimate by defining the floating Schur matrix S_i^fl, proving its fixed-trace minimum by the symmetric block identity, and identifying its energy with S_i precisely for admissible zero-Dirichlet traces. The chart proof now uses the explicit scaled shape parameters, and the boundary-mean inequality works even when the boundary has multiple components; the averaging interpolant preserves every P1 trace and is H1 stable by bounded patch overlap.",
    "uncertain": false,
    "source_urls": [
      "https://d-nb.info/983219192/34"
    ],
    "familiar": false,
    "defect_type": "logic"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-pe26-feti-dp-dual-system-and-preconditioner",
    "status": "fixed",
    "severity": "fatal",
    "reason": "The original generic construction allowed no primal constraints on a floating subdomain, leaving a nonzero constant trace in the kernel of tilde S while using its inverse. Added the explicit symmetric-positive-definite admissibility requirement; the all-corners-primal theorem is a sufficient PE26 branch, not a claim about arbitrary constraints. The right inverse remains well defined by the direct-sum projection, BB_D^T=I and B_D^TB=I-RE_0. The inherited Euclidean identification of Lambda with its dual is now explicit for coordinate formulas.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/0708.4031"
    ],
    "familiar": true,
    "defect_type": "logic"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-pe26-complementary-primal-dual-spectrum",
    "status": "fixed",
    "severity": "nonfatal",
    "reason": "The displayed operators themselves are well typed, but the proof incorrectly labels X and Y with U_2 rather than its dual. Corrected X:U_2'→U_1 and Y:U_1→U_2', and located eigenvectors in those spaces. The given complementary identities give G_1-I=-XY and G_2-I=-YX; the scaled X map inverts Y on every nonunit eigenspace. In dual bases each product is similar to an SPD matrix, so eigenspace multiplicity is algebraic multiplicity. This is a nonfatal annotation error; the unchanged statement is true.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-pe26-two-floating-poisson-subdomains",
    "status": "fixed",
    "severity": "nonfatal",
    "reason": "F3 was an overbroad quotation of an all-subdomain-vertices-primal sufficient criterion, while only the shared endpoints are primal here. This is nonfatal because the preceding zero-top-side anchoring already kills the constant kernel on each local square, independently of primal choice. Corrected the quotation and made that direct positive-definiteness proof explicit: a zero partial energy has two zero local energies, hence two constants, both zero by the top side. Recomputed triangle gradients and the four-cycle quadratic form; all shared nodes are endpoints and there are no interior nodes, so exact condensation applies.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-pe26-coarse-solve-work-bottleneck",
    "status": "fixed",
    "severity": "fatal",
    "reason": "A generic dense cost model does not imply the PE26 spectral bound. Added all hypotheses of the cited two-dimensional theorem to the example and Given, with fixed geometric constants and H/h, SPD local dual/coarse blocks, and nonzero preconditioned spaces. Replaced the incompatible one-primal-variable-per-subdomain premise by the actual assumption n_c proportional to N, allowing all corners primal. Standard dense Cholesky gives local O(Nm^3) work, ideal O(m^3) local time, and coarse O(N^3) work/O(N^2) storage while the theorem gives an N-independent condition bound.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "defect_type": "dependency_citation"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "lem-pe26-scaled-averaging-energy-bound",
    "status": "open",
    "severity": "nonfatal",
    "reason": "Outside assigned lane: step 1.1 should name scaled boundary-chart geometry in the cross-edge zero-extension bound, now explicit in the model, and step 2.1 cites F1 for the cutoff norm although that norm is supplied by F4. The estimate itself has a sound argument with these parameters and the existing cutoff supplier.",
    "source_excerpt": "The $00,E$ norm controls the full boundary seminorm of an edge trace extended by zero off $E$: the cross-edge integrals are bounded by the endpoint weight in that norm, with constants uniform for the polygon angles and side count.",
    "affected_use": "The upper Schur estimate in step 1.1 is applied to a trace supported on a single interface edge, and step 2.1 uses the edge cutoff logarithmic norm.",
    "minimality": "Proof-only repair: include the model scaled Lipschitz character in the geometric constant and replace the step-2.1 prose reference F1 by F4 for the cutoff estimate; Statement stays unchanged.",
    "route": "Ordinary frozen-frontier owner lane; this unit does not edit or adjudicate that unassigned carrier.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "source_snippets": [
      "The $00,E$ norm controls the full boundary seminorm of an edge trace extended by zero off $E$: the cross-edge integrals are bounded by the endpoint weight in that norm, with constants uniform for the polygon angles and side count.",
      "Also [F1] bounds $\\|\\theta_E\\|_{00,E}^2$ by $CL$."
    ]
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "action": "record-no-published-consumer-effects",
    "reason": "All direct item consumers of the three changed defining sections are draft frontier PE26 items. Published finite-element suppliers were read as context and left untouched; no published or outside consumer was found in the current item/page reference search.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-crouzeix-raviart-fractional-sobolev-regularity",
    "severity": "nonfatal",
    "locus": "definition",
    "finding": "Confirmed nonfatal normalization inconsistency: for u(x)=x_1 x_2 on a positive-volume subset of R^d, the ordered Hessian sum contributes 2|U| whereas the ordinary W^{2,2} multi-index second-order sum contributes |U|. Retained the explicitly defined Hessian seminorm and full-norm rule and replaced the false identification with the ordinary norm by exact equivalence bounds 1 and sqrt(2); weak mixed derivatives commute distributionally. Membership, real scalars, and every quantitative estimate are preserved.",
    "status": "fixed"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "lem-crouzeix-raviart-simplex-traces-and-green-identity",
    "finding": "False positive: the declared affine-simplex/shape-regularity supplier def-matching-affine-simplicial-meshes begins “Fix an integer d>=2”; its reference simplex and affine images therefore exclude d=1. F2 invokes reference-simplex smooth density only in this inherited dimension range, matching lem-smooth-density-on-reference-simplex exactly. No unsupported one-dimensional extension is asserted. Checked the variance/Poincare estimate, finite affine orthant extensions, the dyadic trace series with exponent r-1/2>0, homothety and mollification convergence also in the divergence graph norm, Green boundary pairings, and compact-subfacet trace compatibility. The endpoint norm clarification leaves every local seminorm used here unchanged.",
    "status": "dismissed"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "lem-crouzeix-raviart-face-jump-estimate",
    "finding": "False positive: def-matching-affine-simplicial-meshes, a direct dependency of this lemma, fixes d>=2 before defining its matching mesh. The global CR space also uses real P1 elements defined only for d>=2. Thus every facet has positive diameter, and h_F^{-1} is defined. In the actual dimension range, affine singular-value bounds give h_F comparable to each incident h_K. An affine zero-mean jump vanishes at the face barycenter; its tangential variation is at most h_F times the adjacent gradients. Squaring, integrating and multiplying by h_F^{-1} gives a cell-volume factor, and each cell is counted at most d+1 times. Boundary facets use just one cell. No item change is warranted.",
    "status": "dismissed"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "lem-crouzeix-raviart-conforming-companion",
    "finding": "False positive: d=1 is excluded by the directly imported def-matching-affine-simplicial-meshes, whose first defining clause fixes d>=2, and by the real CR local element. For d>=2 the interior link S^{d-1} is connected. Boundary links come from the path-connected local Lipschitz polyhedral epigraph. Avoiding codimension-two faces gives facet chains (for d=2 the circle/arc link has no codimension-two skeleton to avoid). Shape-regular affine maps make the positive-dimensional shared facet diameter comparable to both adjacent cell diameters. The cone-volume argument bounds star cardinality, so bounded chains also bound all size ratios used in Step 3.1. Nodal averaging, finite overlap and zero-extension/cutoff approximation then give both estimates and H^1_0 membership. No one-dimensional interval comparison is used.",
    "status": "dismissed"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-crouzeix-raviart-discrete-well-posedness",
    "severity": "nonfatal",
    "locus": "facts-block",
    "finding": "Confirmed nonfatal scalar-convention omission: the construction and approved contract use real CR polynomials and real Lax-Milgram, but the theorem never explicitly selected the real branch of its real-or-complex Hilbert/Sobolev suppliers for the continuous problem and datum. If complex values were admitted, a(iw,iw)=-||grad w||^2 and a real CR space could not solve a general imaginary load, so that reading is invalid. Added the intended real-valued datum/Sobolev/L2 convention to Given. This selects the existing real CR formulation rather than replacing its bilinear form. Over R the displayed coercivity constant 1/(1+C_P^2), bounded linear load, real Lax-Milgram, and positive-definite real face-basis matrix are all valid; the zero-dimensional discrete space is explicitly covered.",
    "status": "fixed"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-crouzeix-raviart-energy-error-estimate",
    "severity": "nonfatal",
    "locus": "proof-step",
    "finding": "Confirmed nonfatal omitted boundary branch: on a one-simplex mesh the explicit face-basis supplier gives V_h={0}; the second-Strang Statement defines delta_h^{nc}=0 there, whereas local Step 1.4 displayed its supremum formula without its nonzero-space condition. Added the supplier’s zero-space branch before the quotient, so no empty supremum is asserted. All Strang hypotheses were checked: real Hilbert exact space in the gradient norm, finite Hilbert test space in the comparison norm, bounded loads, extension bound M_h=1 and coercivity alpha_h=(1+C_J)^{-1}. The interpolation and residual estimates still yield the complete comparison-norm rate, also when I_hu=u_h=0. The proof’s final paragraph already establishes an error constant depending only on d, shape regularity and r; Poincare constants establish hypotheses but are absent from the Strang bound.",
    "status": "fixed"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "thm-crouzeix-raviart-l2-error-estimate",
    "finding": "False positive: F5 expressly cites the energy estimate’s proof, not merely its weaker Statement. That proof’s Step 3.1 already states and establishes dependence only on d, shape regularity and r: the Strang coefficient uses M_h=1 and alpha_h=(1+C_J)^{-1}, while the approximation/residual constants are local; domain-dependent Poincare constants are used only to verify bounded loads and completeness. The zero-space repair preserves this stronger argument. In the L2 proof the cell Green identity has the correct sign; error jumps have zero face means; normal-trace mean subtraction gives h^s times the h^r error-jump bound; the volume split gives the actual discrete consistency residual, not an unjustified orthogonality claim. The smoothing bound then supplies exactly C_reg, and division occurs only after e!=0 is separated. Thus the stated C dependencies and rate h^{r+s} are proved without altering the claim.",
    "status": "dismissed"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "path": "research/defect-ledger.jsonl",
    "id": "def-nitsche-restriction-bessel-potential-sobolev-spaces",
    "severity": "fatal",
    "defect_type": "dependency_citation",
    "status": "fixed",
    "affected_locus": "Definition",
    "reason": "The completion supplier explicitly withholds a function realization, so the original a.e. restriction was undefined. Added the canonical L2 injection iota_s=F_2^{-1}(<xi>^{-s}J_s U): for s>=0 the multiplier is bounded and injective, J_s is an isometry and F_2 is unitary. This preserves the quotient norm and Countable Choice and makes restrictions well-defined.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "path": "research/defect-ledger.jsonl",
    "id": "lem-nitsche-scaled-fractional-simplex-trace",
    "severity": "nonfatal",
    "defect_type": "dependency_citation",
    "status": "fixed",
    "affected_locus": "Proof steps 4.1 and 5.1; F8; deps",
    "reason": "The endpoint formula is correct, but F3 states geometric bounds, not weak W1,2 pullback membership or the derivative identity. The geometric supplier itself cites lem-affine-pullback-weak-derivatives-and-scaling, whose proved Statement supplies exactly this formula. Made that existing prerequisite direct and explicit as F8 in steps 4.1 and 5.1; neither estimate nor Statement changes. This is a nonfatal citation defect with a proved transitive supplier, not a false endpoint inequality.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "action": "record-consumer-examination",
    "path": "research/published-consumer-supplier-ledger.md",
    "supplier": "def-nitsche-restriction-bessel-potential-sobolev-spaces",
    "consumers": [
      "lem-nitsche-fractional-face-trace-on-simplex",
      "lem-nitsche-scaled-fractional-simplex-trace",
      "def-nitsche-boundary-penalty-forms",
      "lem-nitsche-fractional-weak-green-and-flux-cancellation",
      "lem-nitsche-global-fractional-boundary-flux-trace",
      "thm-nitsche-zero-boundary-fractional-comparison-interpolation",
      "thm-nitsche-consistency-and-energy-quasioptimality",
      "thm-nonsymmetric-nitsche-l2-error-with-boundary-defect",
      "thm-symmetric-nitsche-l2-error-under-dual-regularity"
    ],
    "reason": "The actual Definition changed only by supplying its missing canonical L2 realization. All nine direct dependency/reference consumers are draft frontier items; each exact affected use and its unchanged soundness is recorded in repair_notes. No published consumer or outside-frontier maintenance target was found; no published carrier was edited or adjudicated.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "def-sipdg-bilinear-form-and-energy-norm",
    "outcome": "false_positive",
    "reason": "The Definition explicitly introduces a new cellwise constant symmetric matrix A_K and writes A|_K=A_K. Its use of def-matching-affine-simplicial-meshes imports the cells and mesh geometry, not an equation identifying the new coefficient with a reference-map matrix. No reference map F_K occurs in this Definition; the trace supplier independently denotes its geometric matrix by B. Local rebinding therefore imposes ellipticity only on the diffusion coefficient, with no restriction on the geometric map. All volume, flux and penalty expressions are well defined on the stated domain.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-sipdg-energy-error-estimate",
    "outcome": "confirmed_nonfatal",
    "severity": "nonfatal",
    "status": "fixed",
    "location": "Proof step 2.1",
    "finding": "The positive-division inference used norm definiteness without an explicit local fact, although definiteness is proved in the existing coercivity prerequisite chain.",
    "correction": "Replace the z_h=0 branch with the zero-DG-energy branch, prove the desired bound directly there, and divide only in the positive-energy branch. Mirror the derivation and zero-boundary evidence in the owning proof contract.",
    "reason": "Step 2.1 omits a local justification for inferring positive DG energy from z_h!=0: F5 supplies only a seminorm, and F2 records only its coercivity inequality. Definiteness is true, proved in lem-sipdg-energy-seminorm-is-a-norm and used by the cited coercivity theorem, so this is a nonfatal justification omission rather than a false estimate or substantial mathematical gap. Repaired by testing ||z_h||_DG=0 directly, proving the desired bound immediately there and dividing only in the positive-energy branch. No definiteness supplier is needed by the repaired argument.",
    "uncertain": false,
    "source_urls": [
      "https://people.tamu.edu/~guermond/M661_FALL_2025/chap38.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "cor-afem-constant-convection-weak-wellposedness",
    "severity": "nonfatal",
    "status": "fixed",
    "locus": "facts-block",
    "reason": "The original Statement, A1 and F1 falsely attribute full AC to the Sobolev/Poincare/Lax–Milgram interfaces. Those supplied statements assume Countable Choice; the original stronger hypothesis still yields a valid theorem, so the defect is nonfatal. Removed the surplus premise and def-axiom-of-choice dependency, corrected step 2.1 to include the F3 Countable Choice interface, and synchronized the owning contract and manifest. No published item was changed or found mathematically defective.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-volume-integral-scattering-fredholm-stability",
    "severity": "fatal",
    "defect_type": "logic",
    "locus": "statement",
    "finding": "Undefined injectivity clause does not state the premise used by Fredholm step 1.1.",
    "correction": "Replace “If $K_k$ is injective through $I-K_k$” by “If $I-K_k$ is injective”.",
    "status": "fixed",
    "reason": "The original Statement has the undefined condition “K_k is injective through I-K_k” rather than a well-formed hypothesis that A_k=I-K_k is injective. Injectivity of K_k alone is not the Fredholm hypothesis, so step 1.1 cannot follow from that wording. Replaced only that clause by “If I-K_k is injective”, matching Given, F2, the approved contract and the actual published Fredholm theorem. Compact K_k on complex Banach L2 under AC then gives a bounded inverse, and A_k(u-v)=f-A_kv proves the residual bound.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-supg-general-convection-diffusion-reaction-model",
    "severity": "fatal",
    "defect_type": "logic",
    "status": "fixed",
    "reason": "An individual finite nondegenerate mesh has some finite maximum h_K/rho_K, which may diverge across meshes. The original each-mesh wording omitted the single family bound defined by def-matching-affine-simplicial-meshes and needed for the downstream interpolation constant. The Definition now explicitly requires one sigma for all cells of all meshes; coefficients, domain and solution class are unchanged.",
    "post_sha256": "6718f5edbbfe6ac387e3a08d4a9dfb8b523ee504ca092f5dcd60efa922f0430d",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-supg-one-dimensional-convection-diffusion-model",
    "severity": "nonfatal",
    "status": "fixed",
    "reason": "For nonzero endpoint data the nodal set is an affine translate, not a vector subspace: zero need not satisfy the endpoints. Added the precise affine-space terminology and the explicit lifting ell(x)=(1-x)g0+xg1; V_h remains the homogeneous vector space. N=1 gives a singleton affine trial space and zero homogeneous space. Every actual trial set and PDE hypothesis is unchanged.",
    "post_sha256": "962eb78e8884639f84d4e4f502b918ea2475d378b6efdaee59b57359662492b5",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-supg-pspg-grad-div-stokes-forms",
    "severity": "fatal",
    "defect_type": "logic",
    "status": "fixed",
    "reason": "The original hypotheses admit Omega=R^d, a one-cell constant velocity space, Q_h={0}, sigma=1, beta=f=0; the reaction pairing of that constant with itself is infinite. This is a failure of real bilinear-form well-definedness. Added L2 integrability of velocities, cellwise first derivatives/Laplacians, pressures and cellwise pressure gradients. Bounded coefficients and Cauchy-Schwarz now make every residual, load, mixed, diffusion and grad-div integral finite; finite sums and nonnegative finite parameters cause no additional issue. No boundary or stability claim was added.",
    "post_sha256": "47dc7e8ef66b5b3ffb81e311c078d8ac98932336f469ceb75631b9e9048fee4f",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-supg-one-dimensional-l2-interpolation-estimate",
    "severity": "nonfatal",
    "status": "fixed",
    "reason": "F1 attributed arbitrary-partition nodal interpolation to a model defining only a uniform P1 space, and that supplier never defines I_hu. The Statement itself defines the interpolant, so F1 now explicitly derives its affine/nodal properties from that definition; the inaccurate citation contract was removed. The existing proof is sound: averaging u-prime gives a cell derivative error at most h_K times M, integration gives h_K squared times M, and summing h_K fifth powers yields at most h to the fourth. The general partition and bound are preserved.",
    "post_sha256": "ffa804ae9b0652189446feeb3a446a2efbf620b8946b47701ffba0d54a52cc1f",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-supg-convection-boundary-layer-coarse-mesh",
    "severity": "nonfatal",
    "status": "fixed",
    "reason": "F3 incorrectly presented the tau and Pe formulas as conclusions of the parameter-bound lemma. The residual-form Definition supplies tau and the model Definition supplies Pe; the facts now say so. F3 correctly records the lemma positivity and step 2.1 uses it to show D>0. Independently recomputed the two-cell equation D(2U-1)/h+b/2=0, D=(bh/2)coth(Pe), U=1/(exp(2Pe)+1), and the exact midpoint match. At x=.99, u_h=.98+.02U tends to .98 while the exponential exact solution tends to zero. The Example is unchanged.",
    "post_sha256": "d71165e4a5bca1ee2ac185f4229be53fe7fc9ca49065a31856d3f383e7c31b99",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-supg-overlarge-stabilization-smears-solution",
    "severity": "nonfatal",
    "status": "fixed",
    "reason": "The body and verification correctly use two half-unit cells and one interior hat-function coefficient. Only the title said one-cell; it now says two-cell. Checked the exact solution u=x-(exp(x)-1)/(e-1), u*=1/2-1/(sqrt(e)+1)>0, integral phi squared-gradient=4, integral phi=1/2, zero convection and stabilization load, and U=1/[8(1+M tau)]. Positivity of tau gives U tending to zero and the stated sufficient half-value threshold. The Example and verification are unchanged.",
    "post_sha256": "11281a3c048c00644bc521b2cadf3ad8954b0fc3d995bb714cb0791dcde0cf4d",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "action": "no-update",
    "reason": "No published consumer defect or outside-frontier affected consumer was discovered. All thirteen direct consumers of the three changed Definitions are draft frozen-frontier items; their exact mathematical uses and soundness dispositions are recorded in repair_notes.consumer_examinations. No published item was edited or adjudicated.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-adjudication",
    "id": "lem-bem-plane-poisson-kernel-fourier-transform",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "before_sha256": "77ff91c2f5721150d8555ddd957a84bf120e0b9ca871b565c224fa25fec4cefd",
    "post_sha256": "b187fc70ff04f90830f848391f58484b25041977dae18b7876091161bf0b5f03",
    "reason": "The given Countable Choice already licenses both polar-measure suppliers and the Fourier suppliers. Corrected the exclusive axiom-use attribution; the normalization integral, harmonic ODE, boundedness and t-downarrow-zero limit prove the unchanged multiplier identity.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-adjudication",
    "id": "lem-bem-newtonian-kernel-is-fundamental-solution",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "before_sha256": "2ba327963afa80e1cf728acecbf3e9d5a0eeba6bb33d59974b76d5f47f1349c3",
    "post_sha256": "9e63b8d605b625952908b4dd99034b1a314cb9148f3a3cae9c2aa1fc3e4b6003",
    "reason": "Full AC already implies the Countable Choice required by the divergence and polar-measure interfaces. Corrected the assertion that divergence requires full AC. The punctured-ball flux has the positive delta sign; its other boundary term is O(epsilon) and the omitted volume integral is O(epsilon squared).",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-adjudication",
    "id": "thm-bem-logarithmic-capacity-homothety-and-layer-scale",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "before_sha256": "58ea0ae5c8c323c621f9c150e1f1e52ab09eedcd01ad06f6b2e11f80eec9414b",
    "post_sha256": "c27c174ec5f510641ff7b89e0c245f0efc950a4a05f50e62b5ec3fb21a816df4",
    "reason": "The capacity definition has compact-set domain, implicitly invoked by the conventions but not repeated. Made compactness explicit, corrected ds_Y=s ds_y, and qualified the zero scale correction at s=1. Pushforward is a bijection of probability measures and shifts every extended energy by -log s, so taking infima and exponentiating proves homothety without assuming an energy minimizer.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-adjudication",
    "id": "ex-bem-logarithmic-capacity-and-scale-on-a-circle",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "before_sha256": "56d4b556b77006c0d7760d48441f061c0895f13575e7719d7f99bf21bed2f027",
    "post_sha256": "5400252128657c8ec5b475b120916f888f889534a74f855f57493f3480be6b9e",
    "reason": "The correction factors through total charge but has rank zero at s=1. Qualified the title and example and checked the nonzero case. Also supplied the missing admissibility check for capacity homothety: compactness, kernel lower bound -log 2, and finite energy of normalized arclength via its integrable logarithmic diagonal singularity.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-adjudication",
    "id": "lem-pe18-outgoing-spherical-mode-expansion",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "before_sha256": "c73ba88438cef2b4bbd4885de25203b24050c293569aa6f1938401c244bbdbf2",
    "post_sha256": "be14dfeef3ee9d0ca02825387f7c55208461d5688c7b3d30fcea229c012ff4b3",
    "reason": "The descending recurrence is supplied only for ell>=1; the degree-zero definition directly gives h0 prime=(i-1/z)h0. Added that separate branch and restricted the recurrence. The outgoing radiation residual vanishes and the incoming residual has limiting magnitude two at every degree, so finite-dimensional coefficient elimination and the unchanged modewise conclusion remain valid.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-adjudication",
    "id": "lem-bem-far-panel-quadrature-residual",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "before_sha256": "48915091e6f28db6b17d3279e0066e1a98a22c257263f73cd8a80c162ddcd16f",
    "post_sha256": "43ab5b5235b2aa020694d9ed11a10ac0f146c0b82ec4b9806a5b811e8cb43791",
    "reason": "Rephrased A1 as the actual assumption rather than attributing contextual assertions to the definition of Countable Choice. The mesh refers to the CC trace-space definition, while the residual itself is deterministic: convex paths preserve separation d, gradient bounds yield (hT+hS)/(4pi d squared), and positive area sums give the entry bound and physical cluster normalization.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-adjudication",
    "id": "lem-bem-p0-negative-half-order-approximation",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "before_sha256": "e9ee776442df8cda879de393276e533bdf6270d910d19fa0f83ed569d1f6ca3b",
    "post_sha256": "b4c1c99a3f61f4b0991252bb8bdfa8d7bb4eff3bcbf0dae57bc3d8f3d928432f",
    "reason": "The original local double-integral proof introduced hT squared/area(T), hence the family shape-regularity constant, and did not establish its stated family-independent C. Replaced only step 1.1 with fixed-atlas Fourier smoothing at length h, L2 projection contraction and shape-independent convex Poincare. The L2 approximation is now uniform across families; the existing zero-mean duality argument then proves the unchanged h^(3/2) estimate. No statement was weakened.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "defect_type": "logic"
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-adjudication",
    "id": "thm-bem-helmholtz-layer-jumps-match-laplace-jumps",
    "outcome": "false_positive",
    "status": "not-upheld",
    "before_sha256": "ef37fb2fa7f4c6b14ec90e7b6df3f2bb08027c50581e70f4ab6beebf88efd0b2",
    "post_sha256": "ef37fb2fa7f4c6b14ec90e7b6df3f2bb08027c50581e70f4ab6beebf88efd0b2",
    "reason": "The stated surface is from the combined-field definition, whose Definition explicitly imports the chart-space convention of def-bem-lipschitz-polyhedral-boundary-and-trace-spaces. That convention begins Assume Countable Choice. Thus the stated context supplies CC for both polar-measure suppliers and the plane-kernel lemma. The bounded Helmholtz remainder and integrable C2 curvature remainders give the claimed smooth-density jumps; no additional full AC assumption is required.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-adjudication",
    "id": "lem-bem-helmholtz-double-layer-conormal-jump",
    "outcome": "false_positive",
    "status": "not-upheld",
    "before_sha256": "d6464b1d6333d398c101d05928220c7fba64088f3eb9e8a2f081c2081a6c1039",
    "post_sha256": "d6464b1d6333d398c101d05928220c7fba64088f3eb9e8a2f081c2081a6c1039",
    "reason": "The actual cited supplier proves the supposedly missing facts: extension step 3.1 constructs S=G*Tlambda with common trace; step 4.1 proves the distributional double-layer source, constructs D=S q-(1+k squared)G*f-f, and explicitly concludes trace jump -phi. Steps 1.1 and 5.1 provide smooth-density approximation and weak Green identities. Substitution into the bilinear distributional jump identity cancels the dipole term and gives common D conormal and S conormal jump lambda. These are proved intermediate facts, even though not all are repeated in its Statement.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-adjudication",
    "id": "lem-bem-lipschitz-transmission-kernel-representation",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "before_sha256": "5355be5514e476774fa360ad71f308a08b3fb6ae440f2ed61ef9b540fde9bf1c",
    "post_sha256": "10d1ae04396acc6f18fa658a41f62f2a96a49d4905d991898e7ca8ec860ed207",
    "reason": "F1 over-attributed chart approximation to the trace/lift Statement. Removed that extra attribution: step 2.1 already invokes F5, the graph-Sobolev-Green interface, whose first-order Green identity applies directly to H1 inputs. Extension yields the interior L6 realization, the prescribed jump supplies the dipole source, and the global harmonic difference vanishes by its O(R^(5/2))+O(R) L1 growth and the R^(-3) mean-value bound. Statement and dependencies are unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-adjudication",
    "id": "lem-bem-polyhedral-edge-kernel-representation",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "before_sha256": "2097bf4185cb1827f3f7a23792c91e757072ae71e08c920b5cc9526192988d01",
    "post_sha256": "a50510144b0996e11601e8512f60ec0409b61d8122eaaff32f820cb6719e3e91",
    "reason": "The trace/lift Statement does not promise chart approximation. Restated F1 accurately and supplied step 2.1 approximation using the bounded Lipschitz extension supplier, now explicitly cited as F6 for both interior and exterior collars, followed by derivative commutation and L2 approximate-identity convergence in F4. Bounded trace convergence passes the first-order identity with no edge flux. Step 4.1 cites the actual approximation for the normal-slice identity, preserving the full Sobolev-density representation and face-interior half-jumps.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-adjudication",
    "id": "thm-bem-exterior-helmholtz-dirichlet-uniqueness",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "before_sha256": "51706b5c6ba7d6d3f3abcde55446e114308453d3edbcf0c2f6835b07f8e96c58",
    "post_sha256": "2a7c98929186532fa448d9e0ed404065e420ecc41fa0d1639e4c5302563acb60",
    "reason": "The supplier Statement grants Green identities for layers, while the uniqueness proof needs arbitrary weak solutions. Corrected F1 to its actual trace/lift interface and derived the needed identity in step 2.1: zero-trace cutoff approximation licenses weak tests, the compact trace lift defines an independent bounded conormal, and an outer-sphere lift gives the boundary flux. The real energy has zero inner trace term; positive Hankel flux eliminates all modes, then the harmonic lift gives continuation throughout the connected exterior.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-adjudication",
    "id": "thm-bem-smooth-helmholtz-operator-compact-perturbation",
    "outcome": "false_positive",
    "status": "not-upheld",
    "before_sha256": "20e006c2a73148595e340df728eea8ce68c831b9cd9dc173931983e41f5dca7f",
    "post_sha256": "20e006c2a73148595e340df728eea8ce68c831b9cd9dc173931983e41f5dca7f",
    "reason": "F2 explicitly refers to the local trace computation, not solely its exported jump difference. That actual supplier step 3.1 proves gamma-plus D0=one-half phi+K0 phi with common integrable remainder, and step 1.1 adds the bounded Helmholtz remainder without a jump. F2 identifies Kk as the surface integral of the double-layer boundary kernel, which is absolutely integrable by the C2 normal cancellation. The target-derivative Schur estimate gives H^(3/4) smoothing and compactness in H^(1/2); hence the stated decomposition is supported and Kk is defined.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-adjudication",
    "id": "cor-bem-p0-galerkin-rate-for-h1-density",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "before_sha256": "046422217fdfa8e6bbbf24e7ea468e693b15e7f3645eb8729d2c84b8e130d425",
    "post_sha256": "a508644d7f9e9ddfd99b6035312c7311c09c5b69bea5c0426a0e03abdaa00d35",
    "reason": "Made the AC and Countable Choice hypotheses of the quasioptimality and Poincare suppliers explicit rather than referring only to mesh/coercivity hypotheses. With Pi_h lambda in X_h, best approximation is bounded by its averaging error; the repaired supplier now establishes a family-independent h^(3/2) bound, and multiplication by the fixed quasioptimality constant gives the stated rate. There are no direct dependency/reference item consumers; the page already carries the same choice context.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-adjudication",
    "id": "lem-bem-panel-pair-duffy-certificates",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "before_sha256": "892b4dd2553776e62a8273bac2a44e1de3385531d5b94cc930cdaf5aecbf89c8",
    "post_sha256": "5594fafa3ee625521c6c8ddc52a6ca0845996d8779805f38be1b4c56000f7773",
    "reason": "Corrected A1 and axiom_use so def-countable-choice supplies only the axiom, while the positive Gaussian rules and remainder bounds are attributed to F6 and integration to F8. Checked the four-dimensional sign-cell/pulling-simplex decomposition, zero-face dimensions 0 through 2, Jacobian D r^(3-j)(1-r)^j, positive opposite-face denominator, derivative recurrence and midpoint error decay. The weak pairing follows from bounded-density potential continuity, bounded traces and dominated convergence; no quadrature or termination conclusion was changed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-adjudication",
    "id": "alg-bem-certified-inexact-matrix-assembly",
    "outcome": "false_positive",
    "status": "not-upheld",
    "before_sha256": "a4e89f263b58c04924195801277701e9a668e902d522965be37c29adfb689b90",
    "post_sha256": "a4e89f263b58c04924195801277701e9a668e902d522965be37c29adfb689b90",
    "reason": "SCHEMA explicitly requires a definition/algorithm justified_by result to depend on that procedure through deps, while forbidding only a reverse deps edge. This is precisely the present relation. The transfer theorem F4 treats the algorithm as instructions, explicitly says the guarantee is proved below rather than assumed, and proves standard-branch termination in step 1.5 from panel-pair/FMM remainders and shrinking arithmetic radii. Thus justified_by is a well-definedness discharge, not a circular logical premise. All finite branches, positive tolerances, physical charges, gamma-h certificate and uncertified outputs are specified.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "path": "research/published-consumer-supplier-ledger.md",
    "action": "no-update",
    "reason": "No published item was changed or found potentially defective, and neither changed Statement has a published direct dependency/reference consumer. The unlinked definition use and circle example remain in the frozen frontier and are sound under the clarified capacity interface.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-signorini-partial-trace-space",
    "status": "fixed",
    "severity": "fatal",
    "defect_type": "logic",
    "locus": "Definition",
    "finding": "Ordinary boundary restriction was asserted for continuous H1 representatives without continuous extension to the collar boundary; closed boundary segments were also incorrectly required to be relatively open patches.",
    "correction": "Require continuous extension to each closed collar for agreement, explicitly including C(closed Omega); require open flat patches containing the closed segments and describe stadium-shaped collars.",
    "reason": "Confirmed missing trace-agreement hypothesis: continuity only on the open polygon does not define boundary restrictions. The local C1 trace theorem requires a representative continuous on the closed collar. Restored precisely that condition, including the C(closed polygon) special case, and corrected the impossible assertion that each closed segment itself is relatively open in the collar boundary. The fixed traces, V, normal, AC assumption and polygon class are preserved.",
    "uncertain": false,
    "source_urls": [
      "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "lem-signorini-partial-trace-space-bounded",
    "status": "open",
    "severity": "nonfatal",
    "locus": "Facts F1",
    "route": "frontier-owner",
    "affected_use": "For j in {D,C}, restriction followed by the bounded collar trace and restriction to Gamma_j gives ||T_j v|| <= C_j ||v||_H1.",
    "invalidated_claim": "The generic fact asserts agreement for continuous H1 fields without specifying continuous extension to the relevant closed collar. This overbroad wording is not needed by its actual proof.",
    "minimality": "Qualify only F1 by continuity on the closed collar (or C(closed Omega)); retain the Statement and proof argument. The actual fields are globally affine, closed-polygon continuous, or the agreement clause is unused. Outside this dispatch item-write scope, so route the exact fact-only repair to the frontier owner.",
    "reason": "Confirmed nonfatal missing qualifier in a generic fact; actual proof hypotheses meet the repaired trace theorem and its conclusion remains valid. No unresolved mathematical question.",
    "uncertain": false,
    "source_urls": [
      "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
    ],
    "familiar": true,
    "source_excerpt": "[F1] On a bounded $C^1$ domain $U$, $T_U:H^1(U;\\mathbb R^2)\\to L^2(\\partial U;\\mathbb R^2)$ is bounded and linear, agrees with boundary restriction on continuous Sobolev functions, and satisfies $\\|T_Uw\\|_{L^2(\\partial U)}\\le C_U\\|w\\|_{H^1(U)}$. ([[thm-lp-trace-operator-on-a-bounded-c-one-domain]])"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "lem-signorini-rigid-motion-controlled-by-dirichlet-segment",
    "status": "open",
    "severity": "nonfatal",
    "locus": "Facts F1",
    "route": "frontier-owner",
    "affected_use": "By [F1], the trace T_D r is the boundary restriction of the continuous rigid motion.",
    "invalidated_claim": "The generic fact asserts agreement for continuous H1 fields without specifying continuous extension to the relevant closed collar. This overbroad wording is not needed by its actual proof.",
    "minimality": "Qualify only F1 by continuity on the closed collar (or C(closed Omega)); retain the Statement and proof argument. The actual fields are globally affine, closed-polygon continuous, or the agreement clause is unused. Outside this dispatch item-write scope, so route the exact fact-only repair to the frontier owner.",
    "reason": "Confirmed nonfatal missing qualifier in a generic fact; actual proof hypotheses meet the repaired trace theorem and its conclusion remains valid. No unresolved mathematical question.",
    "uncertain": false,
    "source_urls": [
      "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
    ],
    "familiar": true,
    "source_excerpt": "[F1] On continuous $H^1$ fields, $T_D$ agrees with ordinary boundary restriction to $\\Gamma_D$. ([[def-signorini-partial-trace-space]], [[thm-lp-trace-operator-on-a-bounded-c-one-domain]])"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "lem-signorini-contact-nodal-test-functions-surjective",
    "status": "open",
    "severity": "nonfatal",
    "locus": "Facts F3",
    "route": "frontier-owner",
    "affected_use": "Its ordinary boundary restriction vanishes on Gamma_D, so the vector-valued trace agreement in [F3] gives T_D w_i=0.",
    "invalidated_claim": "The generic fact asserts agreement for continuous H1 fields without specifying continuous extension to the relevant closed collar. This overbroad wording is not needed by its actual proof.",
    "minimality": "Qualify only F3 by continuity on the closed collar (or C(closed Omega)); retain the Statement and proof argument. The actual fields are globally affine, closed-polygon continuous, or the agreement clause is unused. Outside this dispatch item-write scope, so route the exact fact-only repair to the frontier owner.",
    "reason": "Confirmed nonfatal missing qualifier in a generic fact; actual proof hypotheses meet the repaired trace theorem and its conclusion remains valid. No unresolved mathematical question.",
    "uncertain": false,
    "source_urls": [
      "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
    ],
    "familiar": true,
    "source_excerpt": "[F3] For a continuous $H^1$ field, $T_D$ agrees with its boundary restriction on $\\Gamma_D$. ([[def-signorini-partial-trace-space]], [[thm-lp-trace-operator-on-a-bounded-c-one-domain]])"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "lem-signorini-nodal-contact-set-conforming",
    "status": "open",
    "severity": "nonfatal",
    "locus": "Facts F4",
    "route": "frontier-owner",
    "affected_use": "Let v in K intersect H2 intersect C(closed Omega); [F4] identifies its trace with the continuous boundary restriction.",
    "invalidated_claim": "The generic fact asserts agreement for continuous H1 fields without specifying continuous extension to the relevant closed collar. This overbroad wording is not needed by its actual proof.",
    "minimality": "Qualify only F4 by continuity on the closed collar (or C(closed Omega)); retain the Statement and proof argument. The actual fields are globally affine, closed-polygon continuous, or the agreement clause is unused. Outside this dispatch item-write scope, so route the exact fact-only repair to the frontier owner.",
    "reason": "Confirmed nonfatal missing qualifier in a generic fact; actual proof hypotheses meet the repaired trace theorem and its conclusion remains valid. No unresolved mathematical question.",
    "uncertain": false,
    "source_urls": [
      "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
    ],
    "familiar": true,
    "source_excerpt": "[F4] On continuous $H^1$ functions, $T_D$ and $T_C$ agree with ordinary restriction to the corresponding boundary segments. ([[def-signorini-partial-trace-space]], [[thm-lp-trace-operator-on-a-bounded-c-one-domain]])"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-signorini-mortar-active-set-change",
    "status": "fixed",
    "severity": "nonfatal",
    "locus": "proof contract boundaries iff-forward and iff-reverse",
    "finding": "Both rows claimed the item was not an equivalence, although Proof 2.1 establishes both VI/complementarity directions.",
    "correction": "Marked both rows checked and supplied the actual coordinate-test and residual-sum direction evidence. Item bytes unchanged.",
    "reason": "The contract now matches the complete local proof; the rejected multiplier-scaling assertion remains a false positive. This is metadata repair only.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-orthogonal-fv-compressible-viscous-flux-consistency",
    "severity": "nonfatal",
    "class": "accuracy",
    "subclass": "citation-missing",
    "location": "proof-step",
    "step": "1.2",
    "disposition": "fixed",
    "reason": "Step 1.2 cites the viscous-block fact for smoothness of v, although that interface does not provide it. This is a nonfatal missing citation: the already proved transitive entropy-variable supplier gives v=(c_v gamma-s-beta|u|^2/2,beta u,-beta), with positive rho and epsilon. Its logarithmic/rational formula is smooth on G. Added a direct dependency and F3, and explicitly derived C3 composition with bounded third derivative. Uniform centered Taylor error and smooth K multiplication prove the unchanged O(h^2) face estimate; no boundary or solution convergence assertion is introduced.",
    "evidence": {
      "path": "research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u59.json",
      "pointer": "/decisions/0",
      "before_sha256": "92ab12766eb9b65dc0cb6dc2b8b8cb43956db12c01c1ce9d397aacd7141fc64f",
      "post_sha256": "4239d98abeb03b472f32419a27bc665ddadc69f8805eb63e36cc896b856580c0"
    },
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-orthogonal-fv-compressible-viscous-entropy-dissipation",
    "severity": "nonfatal",
    "class": "accuracy",
    "subclass": "citation-missing",
    "location": "proof-step",
    "step": "1.2",
    "disposition": "fixed",
    "reason": "The chain-rule step omits its explicit v=gradient eta citation. This is nonfatal because that identity is already proved by lem-compressible-ideal-gas-entropy-pair-and-variables in the scheme dependency closure. Added its direct dependency, F3 and the step-1.2 citation. The finite conservative sum telescopes to zero; pairing each interior face gives exactly minus Delta v transpose K Delta v/h; admissible midpoints and PSD K give the inequality, including N=1. The Statement and boundary convention are unchanged.",
    "evidence": {
      "path": "research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u59.json",
      "pointer": "/decisions/1",
      "before_sha256": "90c69de06b5978861348f8a9f7f882db12ffad676a908288515cef9c511a6a03",
      "post_sha256": "43a932eeb21cf206fe42aa266d276c97bb82ff1acb7a026979d611df08b2abbf"
    },
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-sbp-inviscid-versus-viscous-entropy-budget",
    "severity": "nonfatal",
    "class": "accuracy",
    "subclass": "citation-misattributed",
    "location": "proof-step",
    "step": "2.1",
    "disposition": "fixed",
    "reason": "F2 is the flux-symmetry/jump identity and does not supply entropy-variable components, so the explicit reference in step 2.1 is wrong. This nonfatal miscitation is repaired by directly citing the existing entropy-variable lemma as F4, also licensing both entropy chain rules. With T=(1,2,1), u=0, direct matrix multiplication gives Dv_E=(1/4,0,-1/4), zero strain, and viscous rate -kappa(1/16+1/16)=-kappa/8. Skew symmetry and zero row/column sums give zero Euler entropy rate. Example data and conclusion are unchanged.",
    "evidence": {
      "path": "research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u59.json",
      "pointer": "/decisions/2",
      "before_sha256": "12096e7f2daac7f70d07de5d0d7aa3dc3eda172c1b5679be3a5b2c1d9fcd46d1",
      "post_sha256": "054750ea6d10ad32667e3fe57d1a20a1fa0de0f3a141377cde294c039cc63aa2"
    },
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-fixed-mesh-forward-euler-error-for-compressible-sbp",
    "severity": "nonfatal",
    "class": "accuracy",
    "subclass": "citation-missing",
    "location": "proof-step",
    "step": "1.1",
    "disposition": "fixed",
    "reason": "F3 describes K rather than v, so step 1.1 omits the supplier for entropy-variable regularity. This nonfatal citation gap is repaired by adding the existing entropy-variable lemma as a direct dependency and F6, and deriving smoothness of its logarithmic/rational formula on G. Fixed matrices, locally Lipschitz fluxes and smooth v,K give locally Lipschitz L_h. The compact near/far-pair argument works even for a nonconvex tube; the integral defect is at most LM dt^2/2, the geometric recurrence gives M(exp(LT)-1)dt/2 (zero for L=0), and the uniform interior margin accepts every candidate for N dt<=T. The fixed-grid conditional claim is unchanged.",
    "evidence": {
      "path": "research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u59.json",
      "pointer": "/decisions/3",
      "before_sha256": "a1c49a63c856f9afa53d5d6b4792f7d6bf230293e711e934099f0e8c03dcd1fc",
      "post_sha256": "78427f2b2d6ff3a1121dda7106cb76b62b6db3688c02b2f7da3f6e9a7a1dac48"
    },
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "action": "no-update",
    "reason": "No published carrier was edited or found defective. All four assigned drafts retain their original Statement/Example sections, and the directly cited entropy-variable supplier already belonged to their prerequisite closure. No supplier-interface event or outside-consumer maintenance finding was created.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "def-na-daubechies-d4-filter",
    "reason": "The rejected circularity allegation conflicts with the explicit justified_by rule in SCHEMA.md. The theorem uses only the prescribed entries and proves the filter identities algebraically; the definition does not assume those identities or depend on the theorem through deps.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "lem-na-d4-multilevel-detail-support-and-moments",
    "route": "owner; unassigned draft frontier item in batch 6",
    "path": "items/lem-na-d4-multilevel-detail-support-and-moments.md",
    "locus": "Proof steps 1.1 and 2.1",
    "reason": "Verified the existing Step-4 concern against the current proof. At ell=2, t=2r+s_1=2 has both (r,s_1)=(0,2) and (1,0); the effective coefficient is g_0 h_2 + g_1 h_0, not either single product. Step 1.1 says 'its coefficient is' the individual product, omitting accumulation, and step 2.1 must distinguish distinct lifted locations from contributing tuples. The support bound and affine-cancellation argument survive accumulation. This finding is outside this assignment and was not edited or adjudicated as an assigned rejection.",
    "minimality": "Describe each tuple as contributing its product and each effective coefficient as the sum over tuples with that index; refer to the bounded support interval, rather than the number of contributing tuples, when establishing injective reduction modulo N. No Statement change appears necessary.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "def-na-least-squares-poisson-first-order",
    "outcome": "false_positive",
    "reason": "The continuous formulation permits bounded Lipschitz domains; the discrete clause separately assumes a finite conforming triangular mesh using the cited exact affine mesh convention. Such a mesh covers the domain closure by finitely many straight triangles and requires the domain to be their union's interior, hence it is polyhedral. Nonpolyhedral domains admit no such mesh and are not discrete instances. The definition makes no mesh-existence assertion, so the RT supplier's domain hypothesis is satisfied whenever X_h is invoked.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "evidence": "research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u60.json"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-defect",
    "id": "lem-na-hdiv-normal-trace-surjectivity",
    "outcome": "confirmed_nonfatal",
    "reason": "The DPG definition concerns global skeleton ranges, whereas the local quotient on an arbitrary open set is supplied exactly by lem-na-hdiv-weak-normal-trace. The opening attribution was inaccurate but the proof already cites the correct local supplier as F4. Replaced that attribution without changing the quotient, Green functional, scope, onto conclusion or lift bound. Checked H1 completeness by L2 convergence, Riesz for L composed with q, the sign div(grad z)=z, and the resulting graph-norm bound, including the empty domain and zero functional.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "evidence": "research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u60.json"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-defect",
    "id": "rem-na-practical-dpg-roundoff-and-normal-equations",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "reason": "The rectangular spectral condition number used by the cited theorem is sigma_1/sigma_n and requires n>=1. A zero-column matrix has rank zero (full column rank) but no extremal singular values, so the original unconditional matrix sentence applied F2 outside its domain. Added m>=n>=1 in the Statement, Given and F2 and used both size and rank in step 2.1. The exact-arithmetic caveat remains unchanged; the conditioning identity follows from the squared positive singular values of A^T A.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "evidence": "research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u60.json"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-defect",
    "id": "cex-na-practical-dpg-too-small-test-space",
    "outcome": "confirmed_nonfatal",
    "reason": "The four volume fields are independent on a nondegenerate triangle, while the constant vector/scalar test space has dimension three. Its positive Gram matrix makes the practical map linear, so rank-nullity supplies a nonzero kernel and nonuniqueness of every consistent normal system. The title was broader than the stated concrete counterexample; narrowed only the title to the smaller constant-test example. Statement and proof remain unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "evidence": "research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u60.json"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-defect",
    "id": "thm-na-practical-dpg-residual-estimator-equivalence",
    "outcome": "confirmed_nonfatal",
    "reason": "F4 attributed orthogonal projections to a Riesz statement that supplies only representatives and their norm equality. Corrected F4 to that exact interface. This is nonfatal because step 1.1 already constructs epsilon_h in an orthonormal basis, so orthogonality and Pythagoras follow directly. Checked restriction efficiency, Fortin cancellation in the delta estimate, the zero-delta case, oscillation's best-approximation bound, and mean-preserving cellwise h-weighted Poisson oscillation. All theorem clauses remain unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "evidence": "research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u60.json"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-defect",
    "id": "ex-na-ideal-and-practical-dpg-test-vectors",
    "outcome": "confirmed_nonfatal",
    "reason": "The ideal Poisson algorithm requires its particular ultraweak spaces and bilinear form, so it is not an applicable supplier for the R2 matrix model. This citation/interface defect is nonfatal: the already-listed finite-dimensional Riesz theorem licenses the representatives and direct arithmetic establishes every claimed value. Defined both model maps explicitly in F1/F2 using that theorem, checked their representing equations for all admissible test vectors, and retained the Poisson algorithms only as analogies in Remarks. Ae2=(1,1), restricted test=e1, and the positive scalar equations give the unique coefficients 1/2 and 1.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "evidence": "research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u60.json"
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "action": "record-no-published-impact",
    "ids": [
      "def-na-least-squares-poisson-first-order",
      "lem-na-hdiv-normal-trace-surjectivity",
      "rem-na-practical-dpg-roundoff-and-normal-equations",
      "cex-na-practical-dpg-too-small-test-space",
      "thm-na-practical-dpg-residual-estimator-equivalence",
      "ex-na-ideal-and-practical-dpg-test-vectors"
    ],
    "reason": "The only direct item consumer of a changed Statement is draft frontier lem-na-ultraweak-poisson-trial-kernel, whose exact separation use remains sound. The changed matrix-size clause has no item consumers. No published or outside-frontier consumer repair was found or made; no published audit or maintenance acceptance is claimed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "alg-periodic-pic-classical-rk4-step",
    "severity": "fatal",
    "defect_type": "logic",
    "locus": "Definition stage recipe",
    "finding": "The electric-field gather was returned as acceleration without the required charge-to-mass factor Q/M.",
    "resolution": "At every stage compute E_h=-D^0 phi_h, gather and return (V_p,(Q/M)(G_X E_h)_p).",
    "status": "fixed",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "thm-periodic-pic-staged-fixed-regularization-error-budget",
    "finding": "Rejected on the premise that its supplier lacks the prescribed-coupling estimate.",
    "resolution": "The fact explicitly cites the supplier proof; its step 3.1 proves exactly the transported-cost bound, after steps 1.1-2.1 construct its single-valued defective characteristic flow. No source edit.",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-defect",
    "id": "def-reaction-invariant-rectangle",
    "severity": "fatal",
    "defect_type": "logic",
    "locus": "definition",
    "reason": "The claimed equivalence is false. For U=R^2, R=[0,1]^2 and F(x,y)=((1-x)(1-y),-y), all lower and upper face signs on R hold, but F_1(0,2)=-1 violates quasi-positivity on U intersect [0,infinity)^2. Replaced equivalence by the correct implication from quasi-positivity to lower-face signs and explicitly restricted the converse tests to R; the inward and invariant definitions are unchanged.",
    "status": "fixed"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "thm-quasipositive-reaction-flow-preserves-invariant-rectangle-and-mass",
    "supplier": "def-reaction-invariant-rectangle",
    "reason": "Statement repeats: The lower-face condition is quasi-positivity when a_i=0. The same F(x,y)=((1-x)(1-y),-y), R=[0,1]^2 counterexample disproves the unrestricted identification. The invariance and mass proof uses only inward face signs and remains valid. Owner should replace this sentence by quasi-positivity implies the lower-face condition, with no other mathematical change.",
    "status": "open-owner-route",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "defect_type": "logic",
    "affected_use": "items/thm-quasipositive-reaction-flow-preserves-invariant-rectangle-and-mass.md, final Statement sentence: The lower-face condition is quasi-positivity when $a_i=0$; upper-face inwardness remains a separate hypothesis.",
    "invalidated_claim": "Lower-face signs on a bounded rectangle do not assert quasi-positivity on U intersect the entire nonnegative orthant.",
    "minimality": "Replace only the quoted identification by quasi-positivity implies the lower-face condition when all a_i=0. Retain the full invariance and mass conclusions and proof.",
    "route": "ordinary frontier owner; outside unit 62 edit scope"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-defect",
    "id": "def-stoichiometric-mass-invariant",
    "severity": "fatal",
    "defect_type": "other",
    "locus": "definition",
    "reason": "A measurable spatial domain alone does not make the displayed total mass a finite real functional: for m=1, F=0, c=1, Omega=(0,1), u(x)=1/x is measurable but has infinite mass; a nonmeasurable u may lack any integral. Added the explicit domain of measurable fields with integrable scalar c^T u and specified Lebesgue integration. This preserves all finite masses, including bounded measurable fields on finite-volume domains, without requiring integrability of components with zero mass weight.",
    "status": "fixed"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-defect",
    "id": "def-semilinear-reaction-diffusion-system",
    "severity": "fatal",
    "defect_type": "other",
    "locus": "definition",
    "reason": "For d_1=0 and F=0 on Omega=(0,1), u(x,t)=x is a smooth stationary solution with identically zero diffusive flux, but its outward derivatives are -1 and 1. Requiring partial_n u_1=0 therefore wrongly excludes a zero-flux solution allowed by the stated nonnegative diffusivity convention. Replaced the boundary condition by d_i partial_n u_i=0 on each polyhedral face and explicitly imposed no boundary condition for zero-diffusivity components. Positive-diffusivity Neumann and periodic branches, diagonal diffusion, and rectangle membership are unchanged.",
    "status": "fixed"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-intersection-volume-conservative-remapping",
    "severity": "fatal",
    "defect_type": "dependency_citation",
    "reason": "The cited definition expressly withholds sigma-algebra closure and measure additivity. Added the proved complete-measure supplier and its Countable Choice hypothesis; intersections are now measurable subsets of the finite-measure domain and target denominators are finite and positive.",
    "status": "fixed"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-curved-p1-interpolation-scaling",
    "severity": "nonfatal",
    "reason": "AC and Countable Choice were already assumed in the Statement. F5 explicitly assumes AC for the continuous representative and nodal evaluations, so the exclusive attribution to F1 was false but did not invalidate the estimates. Corrected F1/F3/F4/F5 and step 3.1; the affine r=ell=2, k=1, p=2 estimates and uniformly bounded C2 pullbacks yield the claimed h-squared and h bounds.",
    "status": "fixed"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-curved-boundary-lift-residual",
    "severity": "nonfatal",
    "reason": "The Gauss--Green supplier explicitly assumes Countable Choice, and step 1.1 uses it to identify the cellwise gradients as weak gradients. The Statement already assumes Countable Choice. Corrected F6 and A1; matching traces cancel interior edges, the gradient gap is at most L1 e1 + M L2 e0, and the square volume bound gives the factor 2.",
    "status": "fixed"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-isoparametric-cofactor-normal-perturbation",
    "severity": "fatal",
    "defect_type": "logic",
    "reason": "The unqualified chart-factor equality is false: A=I and the unit-triangle edge chart f(t)=(1-t,t) give chart Gram factor sqrt(2) but relative surface Jacobian 1. Replaced it by sqrt(det(Df^T A^T A Df))=J_Gamma(A) sqrt(det(Df^T Df)); step 1.2 proves this using Df=TR. The cofactor Lipschitz estimate, J_Gamma>=j*/M, and normalized-vector estimate remain valid.",
    "status": "fixed"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-conservative-transfer-between-moving-curved-meshes",
    "severity": "nonfatal",
    "reason": "The mass-conservation supplier F3 explicitly assumes Countable Choice, so A1 incorrectly restricted that assumption to change of variables in F4. The Example already assumes it. Updated A1 and F2 to include the repaired remap interface. The unit-Jacobian shear preserves the four overlap areas 1, giving target areas 2, averages 1 and total mass 4.",
    "status": "fixed"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-isoparametric-unit-disk-mesh",
    "severity": "nonfatal",
    "reason": "F2 explicitly assumes Countable Choice, so A1 incorrectly described F3 as its only use. Corrected F2 and A1; the Example already assumes Countable Choice. The central map is bijective, sector determinant r*r_s*pi/4 is positive with r_s>=1-sqrt(2)/2, shared traces coincide, and the four sector areas plus the central area give pi.",
    "status": "fixed"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "cex-delaunay-tetrahedral-sliver",
    "reason": "False positive after inspecting actual prerequisites: the Delaunay definition depends on def-indexed-geometric-site-set, whose Definition requires p_i in D^d throughout that page. The example supplies distinct dyadic sites, so its input-condition attribution is licensed transitively. V=epsilon/6 and 1/2<=S<=8 give epsilon/16<=r<=epsilon, while diameter>=1. No item edit is needed.",
    "status": "closed"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-parabolic-curved-domain-linear-geometry-approximation",
    "severity": "nonfatal",
    "reason": "The nodal P1 construction on a matching mesh already forces equal edge traces, but the example omitted the separately required boundary-compatibility check. Added step 2.1 proving affine traces agree from endpoint data, describing boundary segments and their O(h^2) discrepancy, and verifying common image topology from global injectivity and the compact-bijection theorem. Step 3.1 now checks uniform derivative bounds and both Jacobian lower bounds before applying the tensor estimate cellwise; no claimed rate or Example text changed.",
    "status": "fixed"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "def-indexed-geometric-site-set",
    "route": "frontier-owner-batch-15",
    "status": "open",
    "severity": "nonfatal",
    "reason": "Outside assigned lane: Definition calls D={m2^e:m,e in Z} a dyadic subfield. It is a subring, not a field: 3 belongs but 1/3 does not. The dyadic site condition itself remains meaningful and the assigned sliver uses only membership, not inversion in D. The Step-4 alert is confirmed; owner should replace subfield by subring without changing D.",
    "affected_use": "cex-delaunay-tetrahedral-sliver Proof 1.1 uses only that its coordinates belong to D; no field property is used.",
    "minimality": "Correct the noun subfield in the defining supplier; preserve the dyadic coordinate set and downstream integer/dyadic arithmetic restrictions.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "action": "record-examination",
    "status": "no-published-consumer-repair-needed",
    "ids": [
      "def-intersection-volume-conservative-remapping",
      "lem-isoparametric-cofactor-normal-perturbation"
    ],
    "reason": "Direct dependency/reference searches in current items and library found six draft remap consumers and no cofactor item consumer. All actual remap uses remain sound under their existing Countable Choice assumptions; no potentially defective published consumer was found."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "thm-overlap-remap-error-from-approximation-and-geometry",
    "route": "ordinary-frontier-owner",
    "status": "open",
    "severity": "nonfatal",
    "reason": "Statement has literal backslash-n sequences rather than line breaks around the estimate. A1 also falsely restricts Countable Choice to F4 although F2 invokes the CC projection theorem.",
    "source_excerpt": "[A1] Countable Choice is assumed exactly for [F4] ([[def-countable-choice]]).",
    "path": "items/thm-overlap-remap-error-from-approximation-and-geometry.md",
    "affected_use": "Facts A1 misstates the uses of Countable Choice, which is already present in the Statement.",
    "minimality": "Correct the exclusive axiom attribution; for the remap-error theorem also replace only the two literal newline escapes.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "thm-certified-polygon-overlap-correctness",
    "route": "ordinary-frontier-owner",
    "status": "open",
    "severity": "nonfatal",
    "reason": "A1 says Countable Choice is assumed exactly for F4. The repaired remap interface F3 also assumes Countable Choice; its Statement already assumes CC, so this is a nonfatal attribution correction.",
    "source_excerpt": "[A1] Countable Choice is assumed exactly for [F4] ([[def-countable-choice]]).",
    "path": "items/thm-certified-polygon-overlap-correctness.md",
    "affected_use": "Facts A1 misstates the uses of Countable Choice, which is already present in the Statement.",
    "minimality": "Correct the exclusive axiom attribution; for the remap-error theorem also replace only the two literal newline escapes.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-unit-cube-h01-separability-and-l2-compactness",
    "defect_id": "na71-b65-step5-r1-1",
    "run": "numerical-analysis-remaining-71-2026-10-17",
    "batch": "65",
    "severity": "fatal",
    "class": "accuracy",
    "subclass": "unsupported-inference",
    "location": "proof-step",
    "caught_at_stage": "5-adjudicate",
    "disposition": "fixed",
    "summary": "Step 3.1 supplied only successive existential Bolzano–Weierstrass extractions, not a choice function on the changing subsequences. The proof explicitly promises no DC, so this is an unlicensed recursive inference. A deterministic left-first infinite-occupancy bisection with least increasing indices now supplies a unique extraction map; recursion and the diagonal tail argument require no choice. The Fourier N^-2 tail and Parseval still prove L2 compactness, and the Poincare, separability and Hilbert arguments retain their hypotheses.",
    "evidence": [
      {
        "path": "research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u65.json",
        "anchor": "decisions/0"
      },
      {
        "path": "items/lem-unit-cube-h01-separability-and-l2-compactness.md"
      }
    ],
    "independent_review": false,
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-two-scale-compactness-for-l2-bounded-sequences",
    "defect_id": "na71-b65-step5-r1-2",
    "run": "numerical-analysis-remaining-71-2026-10-17",
    "batch": "65",
    "severity": "fatal",
    "class": "accuracy",
    "subclass": "unsupported-inference",
    "location": "facts-block",
    "caught_at_stage": "5-adjudicate",
    "disposition": "fixed",
    "summary": "F4 attributes the diagonal extraction to AC_omega although the available subsequences depend on previous selections. Replaced that unlicensed choice inference by an explicit deterministic interval-bisection and least-index extraction, recursively iterated over the fixed countable rational test span. Averaging gives sampled norm convergence for every finite product test (expand all cross terms); the limiting rational-linear functional extends continuously and real-linearly, and Riesz plus the two fixed-test error bounds establishes the full stated convergence.",
    "evidence": [
      {
        "path": "research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u65.json",
        "anchor": "decisions/1"
      },
      {
        "path": "items/thm-two-scale-compactness-for-l2-bounded-sequences.md"
      }
    ],
    "independent_review": false,
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-two-scale-gradient-decomposition-for-h01",
    "defect_id": "na71-b65-step5-r1-3",
    "run": "numerical-analysis-remaining-71-2026-10-17",
    "batch": "65",
    "severity": "fatal",
    "class": "accuracy",
    "subclass": "missing-hypothesis",
    "location": "statement",
    "caught_at_stage": "5-adjudicate",
    "disposition": "fixed",
    "summary": "The original Statement allowed zero or negative scales tending to zero, whereas the explicitly cited two-scale definition has domain epsilon_n>0. Added positivity to the Statement, Given and F3; no claimed positive-scale conclusion is weakened. Weak/strong extraction uses the repaired cube compactness and two-scale compactness, finite component extraction and the published deterministic separable-Hilbert lemma. Divergence-free cosine/sine tests identify all nonzero Fourier modes as parallel to their frequencies; the weighted coefficient estimate constructs the real mean-zero H1 potential with integrable slice norm.",
    "evidence": [
      {
        "path": "research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u65.json",
        "anchor": "decisions/2"
      },
      {
        "path": "items/lem-two-scale-gradient-decomposition-for-h01.md"
      }
    ],
    "independent_review": false,
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-fehmm-period-aligned-sampling-has-zero-resonance",
    "defect_id": "na71-b65-step5-r1-4",
    "run": "numerical-analysis-remaining-71-2026-10-17",
    "batch": "65",
    "severity": "nonfatal",
    "class": "accuracy",
    "subclass": "citation-inflated",
    "location": "facts-block",
    "caught_at_stage": "5-adjudicate",
    "disposition": "fixed",
    "summary": "F4 incorrectly attributes divergence-free Fourier orthogonality to the basis/Parseval theorem. This is a nonfatal missing elementary derivation: sine and cosine of each nonzero integer frequency are legitimate mean-zero periodic cell tests, giving k dot qhat(k)=0. Added that calculation and restricted F4 to the actual Fourier interface. Integer-frequency dilation preserves orthogonality, the affine L2 bound passes the identity to the flux, and the translated-cell partition gives the exact mean A*p. The minimizer remains unique by ellipticity and mean-zero normalization.",
    "evidence": [
      {
        "path": "research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u65.json",
        "anchor": "decisions/3"
      },
      {
        "path": "items/lem-fehmm-period-aligned-sampling-has-zero-resonance.md"
      }
    ],
    "independent_review": false,
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-periodic-flux-corrector",
    "defect_id": "na71-b65-step5-r1-5",
    "run": "numerical-analysis-remaining-71-2026-10-17",
    "batch": "65",
    "severity": "nonfatal",
    "class": "accuracy",
    "subclass": "citation-misattributed",
    "location": "facts-block",
    "caught_at_stage": "5-adjudicate",
    "disposition": "fixed",
    "summary": "A1 misdescribes the Countable Choice definition as a statement about Fourier representatives. This is nonfatal: coefficients are representative-invariant integrals, and the Fourier theorem already records precisely the AC_omega assumption. Corrected A1 to that actual use. The cell equation tested with character real/imaginary parts proves frequency orthogonality; the displayed antisymmetric coefficient formula gives divergence q and a weighted square-summability bound. Explicit L2 limits of symmetric sums and derivatives now justify the periodic H1 reconstruction, zero mean, realness and norm bound.",
    "evidence": [
      {
        "path": "research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u65.json",
        "anchor": "decisions/4"
      },
      {
        "path": "items/lem-periodic-flux-corrector.md"
      }
    ],
    "independent_review": false,
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-layered-periodic-effective-tensor",
    "defect_id": "na71-b65-step5-r1-6",
    "run": "numerical-analysis-remaining-71-2026-10-17",
    "batch": "65",
    "severity": "nonfatal",
    "class": "accuracy",
    "subclass": "citation-inflated",
    "location": "facts-block",
    "caught_at_stage": "5-adjudicate",
    "disposition": "fixed",
    "summary": "F4 overstates the cited Statement by attributing a specific primitive construction and multidimensional lifting to a supplier whose stated interface gives a one-dimensional cell solution and harmonic mean flux. The original lifting calculation was elementary and sound, so this is a nonfatal citation-interface defect. F4 now states only that interface. Step 1.1 lifts its unique solution via smooth periodic approximants with equal H1 norm differences, applies the one-dimensional cell equation to each smooth slice, and averages the stated flux. Transverse correctors vanish by periodic slice integration, giving all displayed columns.",
    "evidence": [
      {
        "path": "research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u65.json",
        "anchor": "decisions/5"
      },
      {
        "path": "items/ex-layered-periodic-effective-tensor.md"
      }
    ],
    "independent_review": false,
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "lem-periodic-cell-poincare",
    "run": "numerical-analysis-remaining-71-2026-10-17",
    "batch": "65",
    "severity": "nonfatal",
    "location": "proof-step",
    "affected_use": "Proof step 2.1: The inherited H1 norm is complete because V_# is closed in H1_#.",
    "invalidated_claim": "The argument omits the ambient completeness premise; closedness alone implies no completeness.",
    "minimality": "Add lem-w-one-two-is-a-hilbert-space to deps and facts and cite it in step 2.1. Its complete Statement supplies H1 completeness; periodic closure and continuous mean define closed subspaces. No Statement change is needed.",
    "disposition": "owner_route_unassigned_frontier",
    "reason": "Confirmed the Step 4 digest concern against the current proof and the published H1 Hilbert-space supplier. This is an omitted citation to an available premise, not a counterexample to the conclusion. The item is outside this exact assigned tuple set and was not edited.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "thm-periodic-effective-tensor-symmetric-elliptic",
    "run": "numerical-analysis-remaining-71-2026-10-17",
    "batch": "65",
    "severity": "nonfatal",
    "location": "proof-step",
    "affected_use": "Step 1.1 says the first equality starting from p dot A* q adds the zero term with gradient chi_q.",
    "invalidated_claim": "That explanation names the wrong gradient; the term added to p dot A* q is integral a(q+gradient chi_q) dot gradient chi_p.",
    "minimality": "Change only chi_q to chi_p in the explanation. Both zero cell-equation identities are already established immediately before the equality. No formula, proof inference or Statement needs changing.",
    "disposition": "owner_route_unassigned_frontier",
    "reason": "Confirmed the Step 4 digest presentation concern by expanding p dot A* q from the column definition. The symmetric energy identity, lower bound and competitor upper bound remain mathematically valid. The unassigned item was not edited.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "action": "record-scoped-review",
    "run": "numerical-analysis-remaining-71-2026-10-17",
    "batch": "65",
    "disposition": "no_published_repair_or_consumer_impact",
    "reason": "The sole Statement change adds positive scales to the gradient-decomposition interface. The complete dependency/reference search found only thm-periodic-dirichlet-homogenization-on-unit-cube as a direct item consumer; it is draft and already restricts epsilon to positive values. Published suppliers were read only as prerequisite context; no published defect or published consumer repair is claimed.",
    "affected_use": "The draft Dirichlet theorem uses the gradient decomposition in F6 and step 2.1 on positive-scale oscillatory solutions.",
    "invalidated_claim": "None in any examined published item; no published interface changed.",
    "minimality": "Leave published carriers and all outside-frontier carriers unchanged. Route the two unassigned draft concerns to their ordinary frontier owner.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "alg-ale-upwind-finite-volume-step",
    "locus": "Definition, instructions 1-2 and final state-update requirement",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "status": "fixed",
    "reason": "A commanded mesh move preceded the rejection branch despite the no-update contract. Explicit trial computation and discard now prevent any rejected mesh update; successful formulas and all direct consumer claims are preserved.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-hp-simplex-p-dependent-face-trace-inverse",
    "outcome": "confirmed_nonfatal",
    "reason": "Step 3.1 incorrectly attributes Countable Choice to Fubini, whose supplied statement assumes only sigma-finiteness and L1 integrability. Countable Choice is already explicitly assumed and suffices for the affine scaling supplier. Removed the extra attribution; the Jacobi endpoint, pyramid Jacobian, normal derivative degree and geometric estimates are unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-hp-analytic-p-convergence-on-fixed-tensor-mesh",
    "outcome": "confirmed_nonfatal",
    "reason": "The conformity lemma explicitly assumes Countable Choice, omitted from F8 and contradicted by axiom_use saying only F7 uses it. The theorem already assumes Countable Choice globally, so step 4.1 is licensed. Corrected F8 and axiom_use to name both inherited uses without changing the claim or proof.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-hp-corner-exponential-energy-convergence",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "reason": "The Galerkin clause assumed only u in V, not a(u,v)=F(v). For zero load every Galerkin solution is zero; a nonzero weighted-analytic u in H01 therefore has constant nonzero error despite exponentially small best approximation. Made exact variational solvability and the bounded load explicit in the Statement, F5, and step 5.1. The approximation claim, weighted class, grading and rates are preserved.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "thm-hp-galerkin-h-p-regularity-energy-bound",
    "outcome": "false_positive",
    "reason": "The complete cited interpolation supplier proves exactly these bounds in Proof 1.1, not merely in its comparison Statement: ||w||_E <= C(h^-1/2||w||_K+h^1/2|w|H1) and ||d_tau w||_E <= C(h^-1/2|w|H1+h^1/2|w|H2). It derives the tangential trace identity by smooth H2 density and the H1 trace theorem. F1 explicitly points to that local proof, and ell_E comparable to h_K gives J_K,R_K <= C(h^-1||w||+|w|H1+h|w|H2), licensing both refinements. No defect or edit is needed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "id": "lem-isogeometric-pullback-energy-norm-equivalence",
    "severity": "nonfatal",
    "status": "fixed",
    "reason": "A1 omitted the Countable Choice assumptions of change of variables F2, Sobolev F3 and boundary integration F6. The Statement already assumes Countable Choice, so all proof hypotheses hold. Replaced only A1 with the complete interface and sequence-selection accounting; the cellwise chain rule, density limit, H1_0 closure and row-gradient transformation remain sound.",
    "ledger": "canonical-defect-ledger",
    "file": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "id": "lem-boundary-preserving-tensor-schoenberg-h1-approximation",
    "status": "false_positive",
    "reason": "F1 explicitly cites proof steps 3.1 and 3.2, not just the supplier Statement. Step 3.1 at k=1 gives coefficients (sum of interior support knots)/p; step 3.2 proves B-spline cell derivatives with empty-support zero-denominator terms omitted. These are precisely the identities used in 1.1–1.2. Nonnegative lower-degree partitions and equal endpoint samples also justify the gradient and fully repeated-knot continuity arguments.",
    "ledger": "canonical-defect-ledger",
    "file": "research/defect-ledger.jsonl",
    "action": "record-false-positive",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "id": "lem-nurbs-knot-cell-simplicial-geometry-adapter",
    "severity": "nonfatal",
    "status": "fixed",
    "reason": "The adapter correctly supplies common simplices, neighborhood diffeomorphisms, within-mesh traces and topology, but omitted the separate finite e0/e1 bounds demanded by the geometry-error definition. Added in proof 3.1 the convex-control-hull bound e0 <= max|P^F|+max|P^G|, e1 <= L_F+L_G and both determinant lower constants. These coarse bounds assert no closeness or rate; the original Statement is unchanged.",
    "ledger": "canonical-defect-ledger",
    "file": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "id": "thm-nurbs-quotient-best-approximation-transfer",
    "status": "false_positive",
    "reason": "The admissible-map definition explicitly fixes 0<j_-<=j_+<infinity and 1<=L<infinity, bounds the positive cell determinant between j_- and j_+, and bounds DF and its inverse by L. Thus the named constants in C_F and every pullback hypothesis are inherited by the Statement. The finite common rectangular refinement supplies the conformity partition; positivity and the cellwise quotient rule give the stated (nonsharp) C_W.",
    "ledger": "canonical-defect-ledger",
    "file": "research/defect-ledger.jsonl",
    "action": "record-false-positive",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "id": "thm-isogeometric-elasticity-galerkin-quasioptimality",
    "severity": "nonfatal",
    "status": "fixed",
    "reason": "F2 omitted the finite face-to-face piecewise C1 cell presentation and closed-cell hypotheses. Restored the full supplier conditions and made step 1.1 rely directly on the stipulated global H1_0 restriction. Finite-dimensionality follows from finite coefficient products; the elasticity supplier then applies with exactly the real domain, shear bounds, finite nonnegative lambda, bounded load and stated constant. The omitted conditions were not needed to establish this already assumed conformity.",
    "ledger": "canonical-defect-ledger",
    "file": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "id": "thm-nurbs-tensor-product-l2-approximation",
    "severity": "fatal",
    "defect_type": "dependency_citation",
    "status": "fixed",
    "reason": "The mapped error is only known to lie in L2: the pullback lemma Statement supplies H1 bounds, and its smooth/H1 proof does not explicitly certify the needed arbitrary-L2 interface. Replaced F5 by the nonnegative-measurable cell change-of-variables theorem and finite additivity, and proved the squared physical bound directly for z=(g-Qg)/W. Registered the direct integration dependencies and the Euclidean completed-product identification used by Fubini. No H1 regularity of the error is assumed.",
    "ledger": "canonical-defect-ledger",
    "file": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "id": "cex-multipatch-trace-mismatch-not-h1",
    "severity": "nonfatal",
    "status": "fixed",
    "reason": "The two open rectangles omit Gamma={1}x(0,1). Replaced the incorrect literal union by D=D_L union Gamma union D_R and defined v=0 on Gamma. Gamma is null, so L2 membership and all distributional integrals are unchanged. The proof gives a fixed nonzero test pairing while the test L2 norm tends to zero, excluding an L2 weak derivative. No item depends on or references this counterexample; its owning examples page uses the same valid trace-jump witness.",
    "ledger": "canonical-defect-ledger",
    "file": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "file": "research/published-consumer-supplier-ledger.md",
    "action": "no-update",
    "reason": "No published carrier was edited or found potentially defective in this lane. The only changed Statement is the null-interface counterexample, which has no item consumers; its owning examples page remains sound.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-resolved-finding",
    "id": "lem-leibniz-determinant-forward-error-bound",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "finding": "The selected relative-model system can contain nondyadic real numbers, while the cited definition covers only dyadic matrices. The repair explicitly defines the same finite Leibniz polynomial for real entries without narrowing the Statement. Checked s-1 product errors, s!-1 accumulator errors, exact zeros and gamma_a+gamma_b+gamma_a gamma_b <= gamma_(a+b) under qu<1; no dyadic assumption or choice is used.",
    "evidence": "research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u7.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-resolved-finding",
    "id": "alg-exact-dyadic-determinant-sign",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "finding": "The procedure itself is finite and correct for arbitrary positive matrix order, but its Definition contained its correctness argument and its justified_by target established only geometric orders. Removed the embedded proof and pointed justified_by at a separately authored arbitrary-order lemma. The lemma checks the actual row scales via det N=(product 2^k_i)det M, computes the exact finite integer sum, and proves termination on finite encodings including zero and s=1.",
    "evidence": "research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u7.json",
    "uncertain": false,
    "source_urls": [
      "https://doc.cgal.org/latest/Manual/devman_robustness.html"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-resolved-finding",
    "id": "lem-lifted-determinant-sign-matches-sphere-side",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "finding": "The Statement and proof correctly establish L_d=-O_d R and O_d L_d=-O_d^2 R. Swapping two base rows changes both raw determinants but leaves the geometric side fixed, so the old title omitted essential orientation normalization. Corrected only the title. Checked cofactor signs (-1)^d and (-1)^(d+3), the unique-sphere hypothesis O_d!=0, and inside/on/outside signs; Statement is unchanged.",
    "evidence": "research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u7.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-resolved-finding",
    "id": "thm-floating-filter-sign-is-exact",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "finding": "The cited algorithm step 4 already distinguishes the positive and negative endpoint tests, but F1 stated only that the interval excludes zero and therefore did not by itself imply the polarity asserted in proof 3.1. Expanded F1 to give the exact two cited branch tests. Verified S<=U, gamma_q>=0, E>=gamma_q U and determinant containment, so strict endpoint tests give the correct signs; Statement and proof remain unchanged.",
    "evidence": "research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u7.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-resolved-finding",
    "id": "alg-certified-dyadic-geometric-predicate",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "status": "fixed",
    "finding": "The old input admitted an arbitrary finite tuple, so e.g. a one-point d=2 orientation request had no square predicate matrix. Added exactly d+1 orientation points or d+2 lifted/sphere-side points as admissibility conditions already required by the determinant definition and owning contract. Specified outputs and explicit return for raw requests, retained all zero/degenerate and fallback behavior, and cited the new arbitrary-order fallback lemma as its correctness prerequisite.",
    "evidence": "research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u7.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "path": "research/published-consumer-supplier-ledger.md",
    "action": "record-consumer-examination",
    "suppliers": [
      "alg-exact-dyadic-determinant-sign",
      "alg-certified-dyadic-geometric-predicate",
      "lem-exact-dyadic-determinant-sign-correct-and-terminates"
    ],
    "published_consumers": [],
    "status": "no-published-consumer-defect-found",
    "reason": "Searched item dependency/reference uses and library/article links. All existing direct item consumers are draft members of the frozen frontier; the newly authored helper is outside the frontier and has creation-only review duties. No published item was edited or adjudicated, and no outside existing consumer needs maintenance for these interfaces.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-periodic-flow-departure-cells-have-positive-finite-volume",
    "class": "accuracy",
    "subclass": "citation-misattributed",
    "severity": "nonfatal",
    "location": "facts-block",
    "caught_at_stage": "5.1-adjudicate",
    "caught_by_role": "final-adjudicator",
    "disposition": "fixed",
    "reason": "F1 misattributes lattice equivariance to the orientation lemma, whose Statement only asserts the C1 diffeomorphism, inverse and positive determinant. The same characteristic flow is explicitly lattice-equivariant in thm-periodic-c1-velocity-has-global-characteristic-flow, Statement and proof step 3.1, already a dependency of the orientation lemma. Its hypotheses are inherited unchanged here, so the claim and measure argument remain valid. Repair adds that theorem directly to deps and attributes equivariance to it in F1; this is a citation defect rather than a missing mathematical hypothesis or invalid inference.",
    "correction": "Added thm-periodic-c1-velocity-has-global-characteristic-flow to item and manifest deps and as the explicit source of equivariance in F1; added its exact Statement quote to the assigned contract.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "published-consumer-ledger",
    "action": "no-update",
    "id": "lem-periodic-flow-departure-cells-have-positive-finite-volume",
    "reason": "The assigned item is draft, no Statement or Definition changed, no published item was edited, and no potentially defective published use was discovered in this review. No published-consumer maintenance event is created.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "id": "def-na-finite-state-discounted-bellman-system",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "locus": "remarks",
    "reason": "Repaired only Remarks using state/action-indexed transition rows and the exact discounted Bellman equation. Nonnegative entries, row sums, discount scaling, finite-choice conventions and the unchanged Definition agree with the owning contract and page.",
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "severity": "nonfatal"
  },
  {
    "id": "lem-na-convex-support-localization-and-lipschitz-dual-gradient",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "status": "fixed",
    "locus": "proof-step",
    "reason": "Added the explicit empty-domain and R^0 cases before using the positive-dimensional compactness interfaces. Checked all support, localization, strongly convex minimization and dual-gradient arguments; the Statement and full AC assumption are unchanged.",
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "severity": "fatal"
  },
  {
    "id": "lem-na-lipschitz-critical-image-null",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "status": "fixed",
    "locus": "proof-step",
    "reason": "Centered the rank-deficient affine image and adapted coordinates at g(p_i). Translation preserves the explicit cube-size estimate; rank deficiency, disjoint-ball summability and countable covers prove the unchanged null-image statement, including constant maps.",
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "severity": "fatal"
  },
  {
    "id": "thm-na-rademacher-euclidean",
    "outcome": "false_positive",
    "status": "dismissed",
    "reason": "F11 is sound because Lebesgue measure is outer measure restricted to measurable sets, explicitly recorded in the cited theorem Facts L1. Checked the ACL, strong Lebesgue-point, Poincare and Lipschitz-volume arguments; the item is unchanged.",
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "id": "alg-na-finite-control-howard-policy-iteration",
    "outcome": "false_positive",
    "status": "dismissed",
    "reason": "The later same-page Howard theorem proves strict value improvement, nonrecurrence, termination within P evaluations and Bellman uniqueness. Its proof matches the exact algorithm, including deterministic ties and convergence-before-exhaustion. The item and contract are unchanged.",
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "id": "alg-na-explicit-diagonal-diffusion-hjb-grid-step",
    "outcome": "false_positive",
    "status": "dismissed",
    "reason": "The separate same-page monotonicity lemma correctly proves nonnegative row weights and preservation of order under the two guards. Corrected only contract evidence that wrongly permitted zero diffusion; the inherited model requires alpha>=alpha_*>0. The item guard is unchanged.",
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-metadata-repair",
    "id": "alg-na-explicit-diagonal-diffusion-hjb-grid-step",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "locus": "contract-boundary",
    "reason": "The old degenerate-boundary sentence permitted alpha=0, contradicting the inherited uniform ellipticity alpha>=alpha_*>0. Corrected that owning-contract evidence without changing the algorithm carrier or its guards. This is separate from the false-positive monotonicity rejection.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "severity": "nonfatal"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "def-nufft-finite-array-norms",
    "outcome": "false_positive",
    "model": "gpt-6-luna",
    "context_sha256": "f64006110920a66c6b51b0e6a93092b658972ce484de8534385ddb96beb9dc2a",
    "reason": "This definition fixes finite-sum, square-root, maximum and counting-inner-product conventions and correctly proves their well-definedness. It need not duplicate the separate proved Euclidean triangle inequality: lem-nufft-finite-euclidean-norm-triangle, steps 1.1 and 2.1, obtains Cauchy-Schwarz from the nonnegative projection residual and then the squared-norm inequality. Positivity and definiteness follow from nonnegative moduli and a positive nonzero coordinate; homogeneity follows from modulus multiplicativity (and uniqueness of the nonnegative square root for l2). The l1 triangle inequality follows by summing scalar triangle inequalities; the maximum version follows by bounding each coordinate. The empty array is the sole vector of C^empty and has norm zero. No circular premise or choice principle is needed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-nufft-gaussian-spread-truncation-tail",
    "outcome": "false_positive",
    "model": "gpt-6-luna",
    "context_sha256": "94d21096c219d626a597306826872815de2f144658655b46cc2cdc15636b9c6e",
    "reason": "The actual declared dependency def-nufft-periodized-gaussian-gridding-kernel defines phi_tau(t)=sum_n exp(-pi(t+n)^2/tau). With y=Mx and m=ell+nM, pi(ell/M-x+n)^2/tau=pi(m-y)^2/(tau M^2), exactly the exponent a=pi/(tau M^2). Euclidean division makes this reindexing bijective, and the proved absolute convergence licenses it. Half-open distance shells contain at most two integers, giving S. Omitted residues lift into the full lattice tail |m-y|>w; bounding this superset on each side by its first term plus the decreasing Gaussian integral gives exp(-aw^2)(1+1/(2aw)). The integral bound follows by comparison with t/w and FTC applied to -exp(-at^2)/(2a); its integrand is continuous and w>=1. Nonnegative finite product sums and the union bound give T_d. The included cutoff endpoints, dimension one, positive denominators and no-choice claim are sound. The judges missing supplied interface does not establish a defect in the item.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-owner-alert",
    "id": "nonuniform-fast-fourier-transforms",
    "severity": "nonfatal",
    "locus": "page-frontmatter",
    "route": "Owning page/metadata lane; not an assigned rejected item and not an outside consumer effect.",
    "affected_paths": [
      "library/numerical-linear-algebra-and-approximation/nonuniform-fast-fourier-transforms.md",
      "research/numerical-analysis-remaining-71-2026-10-17-batch-8.pages.json"
    ],
    "reason": "The existing Step-4 page concern is corroborated by the current carriers: the batch-8 A-page manifest requires computed-fast-transforms-and-convolution, outward-rounded-interval-and-ball-arithmetic, and finite-precision-direct-factorizations; the page requires only computed-fast-transforms-and-convolution. Page prose explicitly states that the published outward-rounded-interval-and-ball-arithmetic interfaces are used directly by the certificate. Reconcile these prerequisite mirrors in the page-owning metadata lane. This is outside the two assigned item adjudications; neither item is defective because of this page metadata mismatch.",
    "minimality": "Restore the two omitted page prerequisite entries to match the current manifest; no assigned item Statement, Definition or proof change is needed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-realified-dense-residual-certificate",
    "location": "statement",
    "severity": "nonfatal",
    "finding": "The complex branch types the coefficient matrix as a vector.",
    "repair": "Changed A in C^n to A in C^{n x n} and made n>=1 explicit.",
    "evidence": "research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u9.json"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-displacement-rank-generators-and-lower-shift",
    "location": "definition",
    "severity": "nonfatal",
    "finding": "An unrestricted displacement-rank bound labels every matrix Toeplitz-like.",
    "repair": "Clarified small rank relative to dimension and a dimension-independent uniform bound for families; displacement and generator formulas unchanged.",
    "evidence": "research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u9.json"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-displacement-generator-update-under-scalar-schur-elimination",
    "location": "facts-block",
    "severity": "nonfatal",
    "finding": "F3 overstates the matrix-product supplier by attributing adjoints to it.",
    "repair": "Restricted the cited assertion to matrix products and supplied the local coordinate definition of conjugate transpose.",
    "evidence": "research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u9.json"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "thm-gohberg-semencul-inverse-identity-and-cost",
    "status": "owner-review-required",
    "location": "facts-block",
    "reason": "Outside assigned lane: F5 says “Matrix products and adjoints use the finite entrywise matrix-product convention” and cites only def-matrix-product-and-identity-matrix. The supplier does not define adjoints. Owner should examine the same citation overstatement repaired in the assigned Schur lemma. The affected shift formulas remain sound.",
    "minimal_repair": "Restrict the citation to multiplication and explicitly state conjugate transpose as a local convention; no Statement change or downstream expansion is indicated.",
    "evidence": "research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u9.json"
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "action": "no-update",
    "reason": "Exact-ID searches and the four direct consumer carriers identify only draft frontier consumers of the changed definition and no item consumers of the residual theorem. No potentially defective published consumer or published repair was found.",
    "evidence": "research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u9.json"
  }
]

For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[
  "lem-maxwell-magnetic-compatible-initial-projection",
  "lem-maxwell-periodic-yee-consistency",
  "lem-na-h0div-div-zero-mean",
  "lem-na-h1-zero-boundary-is-zero-normal-hdiv",
  "lem-na-practical-dpg-fortin-p1-r3",
  "lem-na-rt0-unisolvence-and-global-conformity",
  "lem-na-rt0-h1-interpolation-bounded-and-commuting",
  "lem-na-rt0-p0-kernel-is-divergencefree",
  "lem-na-solenoidal-evolution-integrated-pressure-recovery",
  "lem-na-ultraweak-poisson-trial-kernel",
  "lem-nitsche-scaled-fractional-simplex-trace",
  "lem-nitsche-fractional-weak-green-and-flux-cancellation",
  "lem-nitsche-global-fractional-boundary-flux-trace",
  "lem-wide-gaussian-matrix-has-full-row-rank-almost-surely",
  "lem-wide-gaussian-pseudoinverse-frobenius-moments",
  "lem-normalized-complex-gaussian-block-affine-spectral-second-moments",
  "lem-normalized-complex-rangefinder-direct-spectral-expectation",
  "lem-pe26-discrete-trace-schur-equivalence",
  "lem-pe26-log-edge-cutoff-and-discrete-sobolev",
  "lem-pe26-scaled-averaging-energy-bound",
  "lem-periodic-fv-grid-reaction-diffusion-commutator-bound",
  "lem-periodic-fv-grid-spatial-consistency",
  "lem-real-scaled-gaussian-product-expectation",
  "lem-schwarz-local-corrections-are-energy-orthogonal-projections",
  "lem-signorini-contact-nodal-test-functions-surjective",
  "lem-supg-general-p1-interpolation-estimate",
  "lem-supg-one-dimensional-l2-interpolation-estimate",
  "lem-toeplitz-matrix-has-displacement-rank-at-most-two",
  "lem-wide-gaussian-pseudoinverse-spectral-moments-and-tail",
  "prop-riccati-dense-work-and-acceptance-diagnostics",
  "prop-two-species-continuous-and-discrete-turing-criterion",
  "thm-na-mini-be-smooth-velocity-error",
  "thm-na-mini-be-smooth-integrated-pressure-error",
  "rem-na-pe06-pressure-recovery-escalation",
  "rem-pe26-conditioning-and-work-are-separate",
  "thm-afem-error-and-oscillation-contraction",
  "thm-ale-upwind-step-monotone-and-l1-contracting-under-cfl",
  "thm-exact-lie-step-preserves-invariant-rectangle-and-mass",
  "thm-periodic-reaction-diffusion-lie-error-estimate",
  "thm-cell-centered-no-flux-reaction-diffusion-lie-error",
  "thm-certified-polygon-overlap-correctness",
  "thm-crouzeix-raviart-energy-error-estimate",
  "thm-crouzeix-raviart-l2-error-estimate",
  "thm-cur-projection-residual-bound",
  "thm-euler-lie-step-preserves-invariant-rectangle-and-mass",
  "thm-fas-linear-cycle-reduces-to-galerkin-correction",
  "thm-floater-hormann-error-rate-c2",
  "thm-gaussian-oblivious-l2-subspace-embedding",
  "thm-gaussian-rangefinder-expected-spectral-error",
  "thm-real-gaussian-power-rangefinder-expected-error",
  "thm-gaussian-power-rangefinder-expected-error",
  "thm-gohberg-semencul-inverse-identity-and-cost",
  "thm-hll-flux-is-consistent-and-conservative",
  "thm-hlr-approximate-factorization-residual-and-inverse-error",
  "thm-hlr-separated-cauchy-block-rank-bound",
  "thm-hlr-storage-and-matvec-complexity",
  "thm-hosvd-quasioptimal-multilinear-rank-error",
  "thm-isogeometric-elasticity-galerkin-quasioptimality",
  "thm-leverage-score-row-sampling-subspace-embedding",
  "thm-maxwell-edge-fem-energy-conservation",
  "thm-maxwell-edge-fem-smooth-solution-error",
  "thm-maxwell-yee-strict-cfl-modified-energy",
  "thm-maxwell-periodic-yee-smooth-solution-error",
  "thm-maxwell-yee-cartesian-dispersion-and-cfl",
  "thm-maxwell-yee-gauss-constraints-propagate",
  "thm-maxwell-yee-midpoint-conductivity-energy-balance",
  "thm-metric-graph-p1-fem-cea-and-energy-rate",
  "thm-na-ns-weak-solution-uniqueness-2d-and-weak-strong-3d",
  "thm-na-periodic-pressure-correction-first-order-velocity-error",
  "thm-na-polynomial-remez-budget-termination",
  "thm-na-rt0-bounded-commuting-projection",
  "thm-na-weighted-rational-alternation-characterization",
  "thm-na-weighted-rational-remez-budget-termination",
  "thm-newton-kleinman-exact-global-and-local-quadratic-convergence",
  "thm-nitsche-consistency-and-energy-quasioptimality",
  "thm-nitsche-zero-boundary-fractional-comparison-interpolation",
  "thm-nonsymmetric-nitsche-l2-error-with-boundary-defect",
  "thm-overlap-remap-error-from-approximation-and-geometry",
  "thm-pe04-dg-smooth-solution-l2-error-bound",
  "thm-pe04-first-order-upwind-forward-euler-conservation-and-entropy",
  "thm-pe04-upwind-dg-l2-energy-stability",
  "thm-pe26-condition-number-2d-polylogarithmic",
  "lem-periodic-cell-poincare",
  "thm-periodic-effective-tensor-symmetric-elliptic",
  "thm-periodic-dirichlet-homogenization-on-unit-cube",
  "thm-periodic-pic-rk4-finite-time-error-on-a-controlled-tube",
  "thm-rbf-fd-polynomial-reproduction-and-local-truncation",
  "thm-reaction-diffusion-continuous-mass-balance",
  "thm-sda-convergence-and-eventual-quadratic-envelope",
  "thm-signorini-mortar-contact-kkt-and-complementarity",
  "thm-sketch-qr-right-preconditioner-conditioned-spectrum",
  "thm-square-root-kalman-finite-procedure-status",
  "thm-supg-general-p1-error-and-stability",
  "thm-supg-one-dimensional-consistency-coercivity",
  "thm-supg-one-dimensional-energy-error",
  "thm-supg-pspg-stokes-coercivity",
  "thm-symmetric-nitsche-l2-error-under-dual-regularity",
  "thm-tpfa-discrete-rellich-and-physical-gradient-closure",
  "thm-volume-product-integration-solution-and-far-field-error",
  "lem-na-d4-multilevel-detail-support-and-moments",
  "alg-certified-integer-order-bessel-evaluation"
]


