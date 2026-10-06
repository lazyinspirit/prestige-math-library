# Step 7 adjudicate: initial, round 1, unit 5

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-39-analysis-30-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-39-analysis-30-step7-v2/step7-v2-initial-r1-u5.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-39-analysis-30",phase:"initial",round:1,unit:"5",input_sha256:"9338524b8f90ef76ff4d0d3c41b2d942e870edbc6da3d7062fa8aeac770c3e1f",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-39-analysis-30 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-hp-atom-with-moment-order, 0:lem-whitney-type-ball-cover-of-a-proper-open-set, 1:cex-an-hone-atom-need-not-be-smooth, 2:def-grand-maximal-test-class-of-order-n, 4:lem-truncated-maximal-function-estimates, 6:ex-a-normalised-mean-zero-hone-atom, 8:thm-atomic-characterisation-of-real-hp, 10:cor-integrable-hardy-functions-have-vanishing-moments-in-the-atomic-range.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-hp-atom-with-moment-order",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The integrability justification attributes measurability closure properties to the L^p quotient and local-integrability definitions. Neither supplied interface states those properties, so the cited dependencies do not license that inference.",
      "context_sha256": "5f821a055a059b8502463ccad2490db40eb470a9426ca4c0cb2867c00c89fb2a",
      "item_sha256": "cc60570ffe0e5ddd3791aa25bbfb6a61a1c8450ff491a0b2d4dc42b60def04f4",
      "at": "2026-10-06T01:18:49.714Z"
    },
    {
      "id": "lem-whitney-type-ball-cover-of-a-proper-open-set",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[L1] inaccurately restates def-multidimensional-rectangle-and-volume as supplying distance-function Lipschitz and positivity properties. Its interface only defines rectangles and volumes; it does not license the facts used in steps 1.1, 2.1 and 2.2.",
      "context_sha256": "22228152af47fdd1bf11a95529cb388412f06c16642837b3754f7fb04d98d1be",
      "item_sha256": "33bd777b27286ed03a9eb3aa52a0e4f58c8a59f1a084b0761409fc09c319e9c1",
      "at": "2026-10-06T01:18:44.222Z"
    },
    {
      "id": "cex-an-hone-atom-need-not-be-smooth",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The supplied rectangle interfaces index coordinates by i<n, starting at 0. For the allowed case n=1, x_1, c_{Q,1}, and e_1 are undefined, so the cutting hyperplane and witness are not defined. Use coordinate 0 or specify an index r<n.",
      "context_sha256": "0c1dbf8c6a3ebc1f0dd9d7accbccc910de4e414d37d4d434d0450a9ea928b751",
      "item_sha256": "0ad1f8662eda008687f3a2fc344f1da383fbc5fe4d3bb4ed40bc8202e1ab151e",
      "at": "2026-10-06T01:34:06.799Z"
    },
    {
      "id": "def-grand-maximal-test-class-of-order-n",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The MSV bound is inaccurately restated: [section 1, p. 16](https://inmabb.criba.edu.ar/revuma/pdf/v50n2/v50n2a02.pdf) records N>1+n/p for its B_N class, not N≥floor(n/p)+1 as claimed.",
      "context_sha256": "845057238ff42a5fc920980dc6084809366f516481d343d08c269a727262785c",
      "item_sha256": "51b10b6cb8a44f882d2641170d11efb654260c3cd4793ed02bf72046d075057a",
      "at": "2026-10-06T01:19:02.300Z"
    },
    {
      "id": "lem-truncated-maximal-function-estimates",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The claimed grand-maximal convergence is false: the truncated M_N tends to the radial grand supremum, whereas the supplied M_N is nontangential. For n=1,N=2,f=δ₀,x=1, the radial supremum is ≤1/4, but M₂f(1)>1/4 using a normalized Gaussian.",
      "context_sha256": "a70a477bee1878323dff45aa7d704883695046aab5303ef0bd9232ac8916cf19",
      "item_sha256": "8734a8b15d6823557780b13fc4f09921fc0af7172b9a4b7078b890785aa648d3",
      "at": "2026-10-06T01:19:58.722Z"
    },
    {
      "id": "ex-a-normalised-mean-zero-hone-atom",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "For n=1, the specified hyperplane x_1=c_{Q,1} is undefined: the supplied rectangle interface indexes coordinates by j<n, so only coordinate 0 exists. Thus Q^± are not defined for an allowed case. Use coordinate 0 or explicitly declare a relabelling.",
      "context_sha256": "08ec402cced8b93d9aad9136f049358adeb4b2dfef660e899babf5aaea8bb963",
      "item_sha256": "bfc37eb70dd24fe87287e37f9f004229d6493117e61831a0a9062b8142c07422",
      "at": "2026-10-06T01:18:55.201Z"
    },
    {
      "id": "thm-atomic-characterisation-of-real-hp",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F1 omits the reproducing kernel Φ from the level-decomposition constant C(n,p,N,K,φ,Φ). The interface supplies no uniformity over Φ, so it does not license the claimed norm bound with constants depending only on n,p,N,K,φ.",
      "context_sha256": "5816ac511e0bbd203768f0842854f933f6323a1007a408be447b598c8d05426d",
      "item_sha256": "c4e1f31557511c2f54d8a98e2e53041af2d042ab3194638f9ac42d700dcb0e78",
      "at": "2026-10-06T01:18:48.334Z"
    },
    {
      "id": "cor-integrable-hardy-functions-have-vanishing-moments-in-the-atomic-range",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The title overclaims for p<1. For n=1,p=1/2, let a be a nonzero compactly supported (p,∞,1)-atom. The series ∑2^{-j}a(x−4^j) belongs to L¹∩H^{1/2}, but xf∉L¹. The proof requires the additional weighted integrability stated in the hypotheses.",
      "context_sha256": "d20aef3435410867a2d0e1c64b2e6ca7c64e918794f13d1c9378df24ced7a638",
      "item_sha256": "a7727af5877d66e279868488e14371179bc1413a60fe5f1a30fa00ae2d6cbb74",
      "at": "2026-10-06T01:19:07.326Z"
    }
  ]
