# Step 7 adjudicate: initial, round 1, unit 26

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-40-geometry-braids-rep-27-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u26.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-40-geometry-braids-rep-27",phase:"initial",round:1,unit:"26",input_sha256:"2f03bb52479aaa390bb3dcd48c71478e0016d3408c93c2f9769a7db5ae31ba68",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-40-geometry-braids-rep-27 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:lem-order-and-snc-under-smooth-morphisms, 3:def-multiple-test-blowup-and-controlled-transform, 4:lem-derivative-ideals-have-the-same-support, 4:lem-restriction-of-marked-ideal-to-a-smooth-subvariety, 5:def-maximal-order-and-tangent-directions, 5:lem-derivatives-commute-with-controlled-transform, 5:lem-smooth-pullback-of-multiple-test-blowups, 6:lem-codimension-one-maximal-order-components, 6:lem-maximal-order-preserved-by-controlled-transform, 8:lem-glueing-homogenized-ideals, 8:lem-tangent-direction-contains-the-support, 9:lem-refined-giraud-maximal-contact, 10:prop-canonical-resolution-of-marked-ideals, 11:lem-canonical-resolution-commutes-with-ambient-embeddings, 11:lem-canonical-resolution-under-field-isomorphisms, 11:lem-etale-commutativity-of-maximal-order-case, 12:lem-etale-commutativity-of-companion-step, 13:lem-canonical-resolution-commutes-with-smooth-morphisms, 17:thm-bravo-villamayor-full-transform.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-order-and-snc-under-smooth-morphisms",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "(2) lacks pure dimensionality of X', required by the SNC definition. Take X=A¹, E={0}, and X'=A¹ ⊔ A² mapping by identity and projection. This is smooth, but X' is not pure dimensional, so the conclusion is outside the supplied SNC interface.",
      "context_sha256": "17be06836fcab3c20a57d9357145069ec2d05fdcb8c5780c762b0b257939ed71",
      "item_sha256": "6e94559f550cfc6c4933fe24716941fa1de7f3d40dcd224c705ba981e5426413",
      "at": "2026-10-05T20:04:23.800Z"
    },
    {
      "id": "def-multiple-test-blowup-and-controlled-transform",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "For X=A¹, I=(x), μ=1, blowing up C=V(x) is an isomorphism whose exceptional subscheme is C, not empty. The rule making D empty for isomorphisms yields controlled transform (x) instead of O_X, contradicting the supplied codimension-one interface.",
      "context_sha256": "8128056d3225848314dca53339da6cfc4c3bd381d2ee0c5d8ba8273ce21ca2ed",
      "item_sha256": "c466533959933cbb512e956a54a5929c575ada3bc15989f9c0dfc905a2ec0bd4",
      "at": "2026-10-05T20:04:26.383Z"
    },
    {
      "id": "lem-derivative-ideals-have-the-same-support",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The title overclaims equality. Over F_p, take I=(x^p), μ=p+1 and i=1: supp(I,μ) is empty, whereas D(I)=I and supp(D(I),p)={0}. The proof establishes equality only under the stated characteristic/order restrictions.",
      "context_sha256": "c4ade8ece39ec06ac2ca218bc24957aaeaa8d8f5c6591c6c57380380a804a16e",
      "item_sha256": "5f4c4d56218ef345592a6f3ba75dc56a146c018b4d6d7313259dad059f5f9e93",
      "at": "2026-10-05T20:04:56.188Z"
    },
    {
      "id": "lem-restriction-of-marked-ideal-to-a-smooth-subvariety",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F4 gives y'_m=y_m/y_m=1 but also calls y'_m an exceptional-divisor equation. On the y_m-chart the exceptional equation is y_m, not 1. This local restatement of the cited blowup and strict-transform facts is false.",
      "context_sha256": "5feec9aedbc4b072d473909b3911b9094941791f894cd999fb0f8a00041e7a89",
      "item_sha256": "4be125db81f82a67ae4158cc1076fab23e125704816c5e1cc995da47543de7ef",
      "at": "2026-10-05T20:05:11.238Z"
    },
    {
      "id": "def-maximal-order-and-tangent-directions",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Transversality allows u to equal a boundary parameter. On A²_Q with I=(x,y), μ=1 and E={x=0}, u=x and v=x+y both qualify at 0. No automorphism preserving (x) sends x to x+y, contradicting the completion-automorphism interface.",
      "context_sha256": "f0fddf52b69d6de12c3ac2685cb2e4ccff3196dc2661c8b68ff1483c9b478142",
      "item_sha256": "7e49dc53ac076c3918c27cdf34fb917fd17f6ab556327a06a4ca710a07c288ab",
      "at": "2026-10-05T20:04:47.701Z"
    },
    {
      "id": "lem-derivatives-commute-with-controlled-transform",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F1 inaccurately says derivatives D(f) alone generate D(A). For the allowed smooth scheme X=Spec K and A=O_X, all K-derivations vanish, but the supplied interface gives D(A)=O_X by including A itself.",
      "context_sha256": "6161231d5806ccc593d3150017d44e8b56829996976f9e43c5920636799571c7",
      "item_sha256": "031a8c89d15a72c8928391f222560f490e8bd4974005c82e728009c07273d654",
      "at": "2026-10-05T20:04:58.177Z"
    },
    {
      "id": "lem-smooth-pullback-of-multiple-test-blowups",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Take X=A¹_K and X'=A¹_K ⊔ A²_K, with φ the identity and projection on the two components. This is smooth, but X' is not pure-dimensional. Thus its pullback is not a marked ideal under def-marked-ideal, contradicting (2) already for r=0.",
      "context_sha256": "b9fa61dec93a221837362523c6af94136f59ba5c99ac2be24015a96847e4a34c",
      "item_sha256": "1d38ce8115afc9da5c8f5f2362ee2d0b89a2eade61145a2fd51dd5c797a73221",
      "at": "2026-10-05T20:05:03.540Z"
    },
    {
      "id": "lem-codimension-one-maximal-order-components",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The final sentence incorrectly says the marking is divided by μ. The supplied controlled-transform interface keeps the marking μ unchanged and divides the ideal by y^μ; for μ>1 these are different marked ideals.",
      "context_sha256": "5869d0d8e9e2367bfc24f18daa2a4a35818dc74f0363da89c9286af8e04b9417",
      "item_sha256": "4237931af614a9b34dabfc1ac954db1e5ef68091db2ba8043f7c1e557c81957f",
      "at": "2026-10-05T20:05:18.889Z"
    },
    {
      "id": "lem-maximal-order-preserved-by-controlled-transform",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "For μ=0, take X=A¹, I=O_X, E=∅ and C=X, all allowed. Blowing up the zero center ideal gives X'=∅, where the transformed ideal O_{X'} is zero. It therefore fails the supplied maximal-order definition's explicit I≠0 hypothesis.",
      "context_sha256": "47dca6dc36f2e4730c0e70120af7d3dff2a5d009cf571e81cc0122c262cbd4b3",
      "item_sha256": "e79f02b6a7677350e741d1f430ae30fa1f5708312d5ec830a452c6615c1f1cac",
      "at": "2026-10-05T20:05:21.959Z"
    },
    {
      "id": "lem-glueing-homogenized-ideals",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.1 requires the specific substitution u_i↦v_i to preserve H. The completion-automorphism interface only guarantees existence of some automorphism matching u↦v, not preservation by this chosen substitution. F3's stronger restatement is unsupported.",
      "context_sha256": "013665f8ba2a819b92524154d881892ff85a4a048fbd66fbd91e6eeef1603460",
      "item_sha256": "66d53a6af32393f722e2ea448f486a890c506012791f34f9b0d952b77220fd3e",
      "at": "2026-10-05T20:05:31.984Z"
    },
    {
      "id": "lem-tangent-direction-contains-the-support",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The final restriction claim lacks an SNC hypothesis: on A² take I=(x+y²), μ=1, u=x+y² and E={x=0}. The restricted boundary on V(u) is V(y²), a nonreduced divisor, so it does not define the asserted restricted marked ideal.",
      "context_sha256": "55606af0b04538dfdbd6b6336f89990d08300dddfae02ce76f007bf034778354",
      "item_sha256": "29c7a73e30d39ef0002870e9b61856a43a4c7b954e27e031e2cd1f502e11c52e",
      "at": "2026-10-05T20:05:28.410Z"
    },
    {
      "id": "lem-refined-giraud-maximal-contact",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "A1 claims AC is used only for (2)–(4), but the cited strict-transform interface explicitly assumes AC, and the resolution conventions inherit AC from blowup/Proj. Clause (1)'s asserted choice-free scope is unsupported by its suppliers.",
      "context_sha256": "1e0ba7797e088f2042cfa48168449331eb5fdce390b1cc0536d728dc1168c2d2",
      "item_sha256": "1746de666977a883da0d102843ca0ea6b104559aa5ece6e3214bb9358ff12cf8",
      "at": "2026-10-05T20:05:29.437Z"
    },
    {
      "id": "prop-canonical-resolution-of-marked-ideals",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 3.1 uses inv_O on all of supp(I), although it is defined only on supp(O). For μ=1, E=∅ and I=(x²)⊔(x) on A¹⊔A¹, r=2; the second origin belongs to supp(I) but not supp(O). Its invariant is undefined; 4.1 supplies no construction there.",
      "context_sha256": "4f61c09b8681b0b2ce8105bc66ce8163aa5cd40c584ea9a4905596ffacce55c4",
      "item_sha256": "4a5344676d5d54eb3d7446c1fc7e5c6db099f071389b74f911aa39999012ef4e",
      "at": "2026-10-05T20:06:52.137Z"
    },
    {
      "id": "lem-canonical-resolution-commutes-with-ambient-embeddings",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.1 attributes the encoding (1,0) as (0,1,0,0) to F3, but the supplied proposition gives no such encoding or recursive invariant formula. F2's support containment does not establish the claimed invariant equality.",
      "context_sha256": "0a5b2d74e24a8ac66d07805119b7200dc9f08fbc33a3f68892f7d589cffdb59f",
      "item_sha256": "1b5e0375f1a740c06a1c102b3f89fc71ba76e94b9d7c282c85b343130d48bd37",
      "at": "2026-10-05T20:05:16.170Z"
    },
    {
      "id": "lem-canonical-resolution-under-field-isomorphisms",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.1 applies H(I,mu) and C(H(I,mu)) to the unrestricted input, but both cited definitions require maximal order. The allowed input I=(x^2), mu=1 fails this hypothesis. The general algorithm must first pass to a maximal-order companion.",
      "context_sha256": "5f90e5970edc64aaa3f9a6e9dd49cc96ca93be04698ff70ef1624ab3aa7f2cbd",
      "item_sha256": "c8b7d01a3fbb1076708f355ad12b9a68f6a76a50a7f6b34fbb08bff00a77cab7",
      "at": "2026-10-05T20:05:17.619Z"
    },
    {
      "id": "lem-etale-commutativity-of-maximal-order-case",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 4.1 omits codimension-one removal and applies maximal-contact induction without its codimension-two hypothesis. For J=(x), mu=1, E=empty on A^1, restriction to V(x) is zero, so the lower-dimensional canonical-resolution theorem does not apply.",
      "context_sha256": "b26afcd618169041f1e0f4c59b1b68d3f36772b128dc9ebe3bbff14c1d20ab60",
      "item_sha256": "63f95ce98b83e6bf547bf0ebd64fef944716dbd90edee741c358fcaf8a81a957",
      "at": "2026-10-05T20:05:11.872Z"
    },
    {
      "id": "lem-etale-commutativity-of-companion-step",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F1 and step 2.1 require I=M globally, but ord_N=0 implies this only near the support. On A¹, E={0}, I=(x²(x−1)), μ=2 has support {0} and ord_N=0 yet I≠M. It has no companion, and neither proof branch covers it.",
      "context_sha256": "444e4f0f40c742200811f5f4ef45a426cde4a104a72b4225109670a97d648ab2",
      "item_sha256": "b81564e91cf5441aa76e6260725d8f2208083940af262430554af5917984f274",
      "at": "2026-10-05T20:05:30.582Z"
    },
    {
      "id": "lem-canonical-resolution-commutes-with-smooth-morphisms",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The hypotheses allow X' to be an infinite disjoint union of copies of X, mapping smoothly to X with relative dimension zero. X' is not finite type, so F1 falsely claims the pullback satisfies the canonical-resolution proposition's hypotheses.",
      "context_sha256": "b7cfda09f021888d70c635000b41812dd1f0a62753eb312ff4a07b105b170d74",
      "item_sha256": "9b897d446fbdf0529314eaa254f668478ee4d1c42423f9bfeadd4f87d554eee2",
      "at": "2026-10-05T20:05:40.718Z"
    },
    {
      "id": "thm-bravo-villamayor-full-transform",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F1 inaccurately attributes the 3/2 monomial replacement to dependencies that establish only the original companion algorithm. Step 1.1 does not prove that the replacement preserves canonical regular SNC centers or functoriality.",
      "context_sha256": "93f1945312a14ae58379f0f3b15e236caed1954856318d637c6abce16873b02e",
      "item_sha256": "1e78f4814d07767fbcd2ab0784719fc3788aecdf12cec49c522878be52ec4608",
      "at": "2026-10-05T20:06:03.095Z"
    }
  ]
