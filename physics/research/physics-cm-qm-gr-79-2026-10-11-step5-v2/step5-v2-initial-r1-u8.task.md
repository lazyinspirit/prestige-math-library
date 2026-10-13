# Step 5 adjudicate: initial, round 1, unit 8

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-8-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u8.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"initial",round:1,unit:"8",input_sha256:"a190d6e1e698ac74ff228d5cd1752f8f5e2a8f3acbdac43f25de890342cc9699",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-cm-cyclic-spring-chain, 0:def-cm-euclidean-spatial-calculus, 0:lem-cm-determinant-derivative-along-a-matrix-curve, 0:lem-cm-fejer-completeness-for-continuous-periodic-functions, 0:lem-cm-localization-of-vanishing-integrals, 0:lem-cm-uniform-convergence-with-derivatives-on-a-rectangle, 0:thm-cm-burgers-characteristics-and-gradient-blowup, 1:def-cm-fluid-constitutive-models, 1:thm-cm-spring-chain-dispersion-relation, 2:thm-cm-plane-elastic-waves, 2:thm-cm-smooth-string-fourier-series-solution, 2:ex-cm-spring-chain-mode-and-limit-check, 3:thm-cm-local-momentum-balance, 3:ex-cm-string-modes-and-tail-constants, 3:ex-cm-transport-of-a-translating-uniform-flow, 5:thm-cm-kelvin-circulation.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-cm-cyclic-spring-chain",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title overclaims: the supplied interface defines “smooth” as C∞, but (c) requires only C² in t and C⁴ in x. For example, f(x)=|sin(πx/L)|^{9/2} and u(t,x)=f(x−ct) satisfy (c) but are not C∞.",
      "context_sha256": "1eb58a201104bf68f90cdcc95382ddbdf18b02d12d256f3e6c6c584a32382a0b",
      "item_sha256": "3ceb61803b51317197f581899139c80eea36dafa7cc65949d456851ef07a7d3b",
      "at": "2026-10-12T19:26:42.242Z"
    },
    {
      "id": "def-cm-euclidean-spatial-calculus",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Fatal index mismatch: the supplied Euclidean and Jacobian interfaces index R^3 coordinates from 0 to 2, but the definition uses 1 to 3. Thus its Jacobian includes out-of-range partials and its divergence sum is invalid.",
      "context_sha256": "3455482ce9ba8690e1cfb0c4dce143780eee853a533d3f36755b9853e0761cc6",
      "item_sha256": "cbdaad4dd9c78f4748bfe67bde0fb7926e6e913dd2e622a4facf51b4800a681d",
      "at": "2026-10-12T19:25:12.142Z"
    },
    {
      "id": "lem-cm-determinant-derivative-along-a-matrix-curve",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Steps 1.2–1.3 index columns by i∈{1,…,n}, but [[def-matrices-over-a-commutative-ring]] defines M_n using column indices j<n (0,…,n−1). For n=1, the proof refers to nonexistent column 1, making the determinant expansion and F3 application ill-typed.",
      "context_sha256": "eb6bcc9a137b87373310c2e42c8a84661322ee86b183f96c3fa35876b40a34cb",
      "item_sha256": "af173fb95e63fe57567c127f5cd0f8a4617ed738262a017dc41e7296a5b9d43c",
      "at": "2026-10-12T19:25:24.526Z"
    },
    {
      "id": "lem-cm-fejer-completeness-for-continuous-periodic-functions",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.2 needs e_k to be 1-periodic to apply [F3] to h(u)e_k(x-u). The supplied exponential interfaces give only the power-series definition and addition/real extension, not exp(2πik)=1; this essential character-periodicity fact is unestablished.",
      "context_sha256": "14c0f666c49e27fafda69333ca3847c1b6407b57074f182380a164736459feb9",
      "item_sha256": "2741d1e092da061eb84ec216f278170f62fa86c9a790629964e9993002f10211",
      "at": "2026-10-12T19:28:28.027Z"
    },
    {
      "id": "lem-cm-localization-of-vanishing-integrals",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Fatal typing error: the supplied R^3/box interface indexes coordinates 0≤j<3, but Q_r uses j=1,2,3; y_{0,3} is undefined and coordinate 0 is omitted, so Q_r and its cited volume and containment claims do not typecheck.",
      "context_sha256": "85f0500a1f06a2712e865f1d1829495c966e5112d46951e3b2e40d10dc08b79c",
      "item_sha256": "4ca4cda922c10a93009dc46ff85743c88ae42576ec6a666051bc2736340d1bd8",
      "at": "2026-10-12T19:25:47.689Z"
    },
    {
      "id": "lem-cm-uniform-convergence-with-derivatives-on-a-rectangle",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: F4 and 2.1 use Newton–Leibniz to turn derivatives into integral increments. Cited thm-ftc-first-part only says the integral function has derivative h; it does not license ∫h'=h(b)-h(a). No evaluation theorem or MVT is supplied, so mixed-partial equality is unsupported.",
      "context_sha256": "ea55c466025fe025b9fce4bce12aea5b919c3ad2c47b6b3635079940e60d7ad4",
      "item_sha256": "ec1e9052c6e5062470617461ff537ac07af82a0bec7bbc00ea76413574b90d31",
      "at": "2026-10-12T19:27:42.530Z"
    },
    {
      "id": "thm-cm-burgers-characteristics-and-gradient-blowup",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The item calls the solution “smooth,” but the library defines smooth as C∞ while only f∈C² is assumed. Since u(0,x)=f(x), admissible non-C∞ data need not yield a smooth solution.",
      "context_sha256": "c50098faeba346525d820dd6f4d84cfa877d41b3eac751b0e3490240b275152a",
      "item_sha256": "00e8e7a0e719bda9d1e75804cc021f221d9dcfec70e35d382b1ac51bb3e4548a",
      "at": "2026-10-12T19:27:27.033Z"
    },
    {
      "id": "def-cm-fluid-constitutive-models",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "(b) calls V a “potential” but specifies only its type, not what it is a potential for or how it relates to a force or energy. V is also unused in the constitutive law, leaving this claimed model datum undefined.",
      "context_sha256": "659c4c5c4865e372cf580e26cd4fd0d1a5c8d188b60a252b805534c4f91f26d8",
      "item_sha256": "f2e25f876441c91a27c1c5d9cb0a5b827c28df594e1cc6cd89f67e5d8fbe78c3",
      "at": "2026-10-12T19:26:22.531Z"
    },
    {
      "id": "thm-cm-spring-chain-dispersion-relation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 misstates its cited interfaces: they do not supply |sin r|≤|r|. Steps 1.2 and 3.1 rely on that bound; it needs a local derivation, for example from sin'=cos, the FTC, and |cos r|≤1.",
      "context_sha256": "1d8f16867f65d5f31660fcaf8728e80bef88ed4adf82276f3290fe0d1a5b8707",
      "item_sha256": "796cac2d08f95e8da6dd9a0c1d0d5457e899430004fed3db347fcd77c15fff31",
      "at": "2026-10-12T19:27:07.434Z"
    },
    {
      "id": "thm-cm-plane-elastic-waves",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The proof computation is sound, but this mathematics-domain theorem depends on def-cm-linear-elastic-constitutive-law, an adopted physical model item. The mandatory rule forbids mathematics items from depending on physics.",
      "context_sha256": "95c140f6684ed8f1321907ee5f6693a3ec9f8f8d2a31696c3bd8d00b3ba2802c",
      "item_sha256": "314b644bfa48e2a38c4f5a3a5ae418b06dfa1974fcc2364015228a9a2a308acd",
      "at": "2026-10-12T19:26:45.624Z"
    },
    {
      "id": "thm-cm-smooth-string-fourier-series-solution",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title overclaims: the cited C^k definition reserves “smooth” for C∞, while the hypotheses give only F∈C⁵ and G∈C⁴ and the conclusion gives u∈C². With G=0 and a C⁵ non-C∞ F, u(0,·)=F, so u need not be smooth.",
      "context_sha256": "0723e30ec29e62a60228fbe244cae2ef24b6600e572e7fc4751574b952b27822",
      "item_sha256": "1628b3a6a02ac10fcb1df03bc47454aa9420ae187fd038815aa22a3840d14800",
      "at": "2026-10-12T19:27:25.272Z"
    },
    {
      "id": "ex-cm-spring-chain-mode-and-limit-check",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "L3 relies on unprovided proof steps of the dispersion theorem for global sine-remainder bounds; the supplied interface licenses the continuum bound only when |κa|≤1. It does not justify using that dependency at κa=π/2.",
      "context_sha256": "9deb0933009c593cd271002d1bae6af5813f98b1bb5bbed42e1317ab8758368b",
      "item_sha256": "abbc1a7c874c48308939a715d5e800b63b5c72a71052d010b86edbe78ace486e",
      "at": "2026-10-12T19:30:48.397Z"
    },
    {
      "id": "thm-cm-local-momentum-balance",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title claims balance on every material subregion, but (L) assumes it only when the current image is a bounded C¹ domain; the title overstates the premise.",
      "context_sha256": "70d7a928704fe095a3356e177103649c80589d8347fac9d329de9c2c04f54f31",
      "item_sha256": "46692d341da27c4ddf0db5fff3be9bb9abbc719ba42faa34b99c10929c56ff25",
      "at": "2026-10-12T19:26:09.538Z"
    },
    {
      "id": "ex-cm-string-modes-and-tail-constants",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The displayed bound uses undefined $u_1$, while the cited theorem bounds the tail after the $N$-mode partial sum. The left side does not depend on $N$; state the matching tail inequality with that partial sum.",
      "context_sha256": "f1b7612f26ec4476c91cf3928d9bad9bb3418764aa8449836e433accd9f64c2f",
      "item_sha256": "e8d9ddf6e9bf973e6b3e8fb4a8e29faac2a6a4b6a26bd061f9dab1a7e330e635",
      "at": "2026-10-12T19:28:00.679Z"
    },
    {
      "id": "ex-cm-transport-of-a-translating-uniform-flow",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "L3 asserts the chain-rule derivatives of h(x−tv), but its cited interfaces do not establish the derivative of a composition; the total-derivative result only identifies directional and partial derivatives once differentiability is known. Thus steps 1.2 and 2.1 rely on an unsuppor",
      "context_sha256": "7744b4f25dfef15ddc071acf2fe844a809eac092f6b1f81f12c15e10b5596f30",
      "item_sha256": "6c90ef619c0740d180568501eb2db9384aee1559d2e990a5351e2c23ddee0c79",
      "at": "2026-10-12T19:27:33.668Z"
    },
    {
      "id": "thm-cm-kelvin-circulation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The pressure hypothesis refers to “the rectangle,” which is never defined; moreover, p is a function of density, not the stated time-space domain. Thus p’s required C¹ regularity for invoking the momentum theorem is not well-typed or established.",
      "context_sha256": "98fd48a8eb736196a749b5070637166f33d52e6b8ac7ff0128ccd47fff0c6793",
      "item_sha256": "cd713938fca92cad28659850d19c6c474d8b3c04e3078f920a43309d205f4c97",
      "at": "2026-10-12T19:28:21.262Z"
    }
  ]
