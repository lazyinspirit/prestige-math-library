# Step 7 adjudicate: initial, round 1, unit 27

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-40-geometry-braids-rep-27-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u27.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-40-geometry-braids-rep-27",phase:"initial",round:1,unit:"27",input_sha256:"2f03bb52479aaa390bb3dcd48c71478e0016d3408c93c2f9769a7db5ae31ba68",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-40-geometry-braids-rep-27 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-group-scheme-over-a-scheme, 0:def-neron-model-and-mapping-property, 0:lem-arith-finite-cartier-duality-and-exactness, 0:lem-finite-etale-lifting-over-complete-dvr, 1:lem-arith-dilatations-and-defect-of-smoothness, 1:lem-arith-strict-henselian-etale-sections, 2:def-rigidified-relative-picard-functor-and-dual-abelian-variety, 3:cor-extension-of-k-morphisms-into-abelian-schemes, 3:lem-abelian-scheme-fibrewise-constant-morphism-rigidity, 3:lem-arith-hilbert-divisor-charts-and-picard-diagonal, 3:lem-arith-projective-weak-model-and-rational-mapping, 3:lem-good-reduction-stable-under-base-change, 4:def-polarization-of-an-abelian-variety, 4:thm-abelian-scheme-is-the-neron-model-of-its-generic-fibre, 5:cor-good-reduction-admits-a-neron-model, 5:lem-arith-separated-minimal-model-and-translations, 6:lem-arith-abelian-scheme-torsion-specialization-unramified, 6:lem-arith-birational-group-law-from-minimal-model, 6:lem-arith-dual-and-poincare-bundle-finite-field-descent, 7:lem-arith-homogeneous-bundle-vanishing-and-mumford-surjectivity, 9:lem-arith-mumford-map-degree-is-euler-characteristic-square, 10:lem-arith-polarization-and-picard-twist-ampleness, 11:lem-arith-effective-ample-pair-and-group-descent, 12:lem-arith-full-minimal-model-embedding, 15:thm-good-reduction-and-smooth-proper-base-change.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-group-scheme-over-a-scheme",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The morphism definition requires f∘i_G=i_H, an ill-typed equality: the left side has domain G, while the right side has domain H. Inverse compatibility must read f∘i_G=i_H∘f.",
      "context_sha256": "81a17bbc347a05b9b47a3b12cd865c20e02ae1accef6f2b2d6355d0065c8b20c",
      "item_sha256": "1c1293bafdb978b57815e451d2e7398d2c237a9c8f5a7782133e41b11d6ae6b9",
      "at": "2026-10-05T20:05:31.210Z"
    },
    {
      "id": "def-neron-model-and-mapping-property",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The local converse fails for arbitrary models. Glue Spec Z_(p), for all primes p, along Spec Q. Each localization is Spec Z_(p), a Neron model of the point, but the glued model over Spec Z is not locally of finite type, hence not smooth.",
      "context_sha256": "108b866086fec24d127e64360e6d19a91977cdae3e2aaf6899a94a5581355316",
      "item_sha256": "84031b09bb4bf82ff3e6b8ed0e2987e4a1ac98e9c2e3d66eaa895157f840908c",
      "at": "2026-10-05T20:06:39.981Z"
    },
    {
      "id": "lem-arith-finite-cartier-duality-and-exactness",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The definition of a finite k-scheme omits affineness. An elliptic curve E has O(E)=k, hence rank 1 under the stated definition, but [1]_E is not zero and Spec O(E) does not recover E.",
      "context_sha256": "85008291121efbf79c06ffc439bcf45bbd4cbcae3a8dc40010e74709783874c1",
      "item_sha256": "ddb1b33e757ddbfd8003bd817e38dda1421cbb1d70a8c1821b4fdf26ae95130e",
      "at": "2026-10-05T20:06:05.688Z"
    },
    {
      "id": "lem-finite-etale-lifting-over-complete-dvr",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F5 and step 1.2 cite def-smooth-morphism-schemes for étale ⇒ smooth, but its interface explicitly defers that equivalence. The geometric regularity used to conclude that each E_i is a field is therefore unsupported by the cited dependency.",
      "context_sha256": "9e60833409984bf6238a0bd2510de81bd00d8998f69baf95cc5fa1086183094a",
      "item_sha256": "ee0cb482fd0f35feff3fa169896edfb20c5b8d92dc27686fe9dc2859740df21a",
      "at": "2026-10-05T20:05:39.324Z"
    },
    {
      "id": "lem-arith-dilatations-and-defect-of-smoothness",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F1 and step 1.1 assert that the blowup is globally projective. The supplied blowup interface guarantees only locally H-projective and proper; global H-projectivity requires globally finitely many ideal generators, which are not assumed.",
      "context_sha256": "bfca66135ab6a493078664cc29b2aa648a47f4235941c0409da88ec862751c6f",
      "item_sha256": "c060beb18b1a974d14465c8c12209de08f14851895a43f83312c7ff3d9ce88ed",
      "at": "2026-10-05T20:06:16.757Z"
    },
    {
      "id": "lem-arith-strict-henselian-etale-sections",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F3 falsely claims that strictly henselian local rings arise as strict henselizations of DVRs. A separably closed field is strictly henselian but is not such a DVR. The cited interface constructs strict henselizations only for DVRs.",
      "context_sha256": "1d1a239343580e2c72a21075da8d5378ec51b4e3f6842338e8f5e76ac48b5ba2",
      "item_sha256": "5f93d4d73918eac54fcdfa38b12273ac61d2dc9b012e099471ca9073829fe3b7",
      "at": "2026-10-05T20:06:00.475Z"
    },
    {
      "id": "def-rigidified-relative-picard-functor-and-dual-abelian-variety",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The defining fppf sheafification cites def-sheafification, whose interface applies only to presheaves on a topological space. It does not license sheafification on the site of S-schemes; the required site-level construction is not supplied.",
      "context_sha256": "37814d87683869d559319a6418bf2feb95caf1f4bcf18174978e1b471de67666",
      "item_sha256": "c526c43ce1f218d2000ba9b3737f483690d27d1227d9a5e428dd1871dfc82d16",
      "at": "2026-10-05T20:06:16.160Z"
    },
    {
      "id": "cor-extension-of-k-morphisms-into-abelian-schemes",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.1 falsely asserts V is open. For S=Spec Z, Z=A¹_S and every Wξ=D(T), V=D(T)∪Z_Q is not open: its complement is the closed points of the zero section. Thus V does not supply the required S-rational-map representative.",
      "context_sha256": "372ec57a0f889bd858056ea35ebf152916b372daf3053ffd3ecac16394d1f60f",
      "item_sha256": "5e52642a113ded1c4bc5f201e4fc3426975886c79698e12e19468e73671875ab",
      "at": "2026-10-05T20:06:38.543Z"
    },
    {
      "id": "lem-abelian-scheme-fibrewise-constant-morphism-rigidity",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.1 is ill-typed: D=T\\V lies in T, whereas u has target Z, so u^{-1}(D) is undefined. The intended preimage is f_T^{-1}(D).",
      "context_sha256": "d52a87e8a6c2e8133458628f7b6d13ecf7182e27e6c7f7adf8638655d7b9b8f5",
      "item_sha256": "4b4091c171db656293412ec4b29a422b750b13ad8409596fea581ec7b7a2116b",
      "at": "2026-10-05T20:06:16.952Z"
    },
    {
      "id": "lem-arith-hilbert-divisor-charts-and-picard-diagonal",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.1 misses Picard sheaf classes without line-bundle representatives. For an anisotropic conic, a sufficiently positive odd-degree class has fibre Sym^m(C), a nonsplit Severi–Brauer variety, not P^m_k. Thus (b) fails on arbitrary tests.",
      "context_sha256": "a6fd5d7ee98772c052b49976b9bb74ca3b9e532005578d057cb18506833c5727",
      "item_sha256": "7227de95cd820f481e468c4d62d54532bfb27c8e91c0c2895d75365e8802cbfc",
      "at": "2026-10-05T20:06:49.470Z"
    },
    {
      "id": "lem-arith-projective-weak-model-and-rational-mapping",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F2's associated-prime claim is false: B=k[e,t]/(e²,et) is a Noetherian base, and B is smooth and flat over itself, yet ann(e)=(e,t) is an embedded associated prime. Prime filtration does not imply minimality as asserted.",
      "context_sha256": "d0f42602d3c8166da3018ce0607732dd0d1a51f259a07fda0f84b16c88181c45",
      "item_sha256": "a1d186db1eb9536ead2c27d69f74f1ac7203e456eb0fc74c3c6f1612a82bf70d",
      "at": "2026-10-05T20:06:44.522Z"
    },
    {
      "id": "lem-good-reduction-stable-under-base-change",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F3 incorrectly asserts that every proper integral fibre has global functions equal to its base field. The cited interface requires geometric integrality; Spec(Q(√2)) over Q is a proper integral counterexample.",
      "context_sha256": "8f25c6bff93ae0740044ca22f56a955da79a6760c0458462edc83650134a2722",
      "item_sha256": "fae4344b2c97a2757ce409630b40210957e33debc1614871f186218af94748bc",
      "at": "2026-10-05T20:06:37.517Z"
    },
    {
      "id": "def-polarization-of-an-abelian-variety",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The title asserts that the Mumford morphism attached to an ample line bundle is an isogeny, but the item explicitly defers the isogeny property to a later theorem. Thus the title asserts more than this item establishes.",
      "context_sha256": "942a6aeb81e8575f00482317e40fb790406607c1e4d7da08f20aea58a2fd5758",
      "item_sha256": "285e18a2a186cbe31b9ad9d657d8f47989be9c48c85ebc62b68a43951dd3b7f7",
      "at": "2026-10-05T20:06:36.103Z"
    },
    {
      "id": "thm-abelian-scheme-is-the-neron-model-of-its-generic-fibre",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.1 applies the dense-open agreement lemma to the generic fibre, which need not be open (e.g. over Spec Z). The cited dependency's open-subscheme hypothesis is unmet; a separate argument for agreement on the generic fibre is needed.",
      "context_sha256": "7bbfd46c0a1bcb941a03fbcedd6aa0673b1ee75c3f2dec8bc0acdaa6090b3f42",
      "item_sha256": "92efd541ade64fa601bb5414d2d7210eb8660049ab81fff7e3cd1b5180bdfd48",
      "at": "2026-10-05T20:06:49.893Z"
    },
    {
      "id": "cor-good-reduction-admits-a-neron-model",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.1 drops the required generic-fibre compatibility: uniqueness holds only for isomorphisms inducing the specified identity on A_K. A constant elliptic scheme over Q[[t]] has distinct S-automorphisms id and [-1], contradicting unrestricted uniqueness.",
      "context_sha256": "d1f1aa687108a40907dbddf3fad64a7ad61d83c33d98c14e2edc732d0ba67ea5",
      "item_sha256": "0023fde26a80bb5ac20b0b7ed8902c6e89efd6d40dee59c346a95f1bbd979630",
      "at": "2026-10-05T20:06:41.165Z"
    },
    {
      "id": "lem-arith-separated-minimal-model-and-translations",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Steps 3.1–4.1 construct only rational maps on dense open domains. The statement promises an open immersion of X after base change, hence a morphism defined everywhere. Extension across the omitted special-fibre points is not proved.",
      "context_sha256": "82877fc6691e1f3d9966b24ad06a321be4db7eaf7ba78865d86a1967ee2f2fa7",
      "item_sha256": "7fce234bb13399b616a68d44431090b0f58c50ee8b7c3516884b26c68ed9f8c7",
      "at": "2026-10-05T20:07:49.121Z"
    },
    {
      "id": "lem-arith-abelian-scheme-torsion-specialization-unramified",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.1 incorrectly factors the full Galois action through the residue Galois group for a nonhenselian DVR. Over R=C[t]_(t), E:y²=x³−x+t has good reduction but nonrational 2-torsion, while k=C has trivial Galois group. Only the decomposition-group action factors.",
      "context_sha256": "af85d60556df668ff94816bd3776835bae298b7fc7f045421a6251cc94433728",
      "item_sha256": "19acbb92390a252ae487a9ab09806da7b6390b8251b2da6c619008de989585bc",
      "at": "2026-10-05T20:06:56.809Z"
    },
    {
      "id": "lem-arith-birational-group-law-from-minimal-model",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.1 misapplies F1: the generic point of the base-changed second factor is not a point over the fraction field of the chosen local DVR in the first factor. F1 therefore does not supply the asserted local translations or their claimed R-dense spread.",
      "context_sha256": "da0cb8edc983338864c95145e270afb81d9c1ee27a363578db766780e602741b",
      "item_sha256": "a81535062a32928f5b961dbfa2bd0f6bbef223c449adc46ebedcd67dffedeb25",
      "at": "2026-10-05T20:07:07.480Z"
    },
    {
      "id": "lem-arith-dual-and-poincare-bundle-finite-field-descent",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F1 asserts representability of the entire rigidified Picard functor. Its cited interfaces provide sheaf descent and rigidity, and properties of Pic^0, but no representability theorem for the entire functor. This is an unsupported dependency restatement.",
      "context_sha256": "8d96a558d6a431ed1df72d8ae81eff59ef15d4109becd0683f683902f08097dd",
      "item_sha256": "425cfd989c5b6b70d48307b3704444ec884bdac033872790d03cbbdb7d20ae96",
      "at": "2026-10-05T20:07:02.475Z"
    },
    {
      "id": "lem-arith-homogeneous-bundle-vanishing-and-mumford-surjectivity",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F1 attributes the square and cube identities and the normalized-square construction of the general Mumford map to two dependencies whose supplied interfaces assert neither. Step 1.1 relies essentially on this unsupported dependency restatement.",
      "context_sha256": "bff4d94118a0da684d6aa216d1ee36d77ef18d2346398db4c67b4548a34b53dd",
      "item_sha256": "52d71b44ecc92cd6f93988bae2e1726370537cc58da659946db269bdd93c296c",
      "at": "2026-10-05T20:07:12.755Z"
    },
    {
      "id": "lem-arith-mumford-map-degree-is-euler-characteristic-square",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F5 applies Serre duality requiring projectivity, but the supplied definition assumes only properness and no cited interface establishes projectivity of A. Thus step 3.1 lacks an essential hypothesis of its cited theorem.",
      "context_sha256": "3fb2d4d63877e395b4d7e5069bd803778af78367634e41d1379d4728f1a5c5c5",
      "item_sha256": "f80df25a477dfe0d2621b0847e409c5eeb31fb343ac2d0b9b4e26d5301d26906",
      "at": "2026-10-05T20:07:26.877Z"
    },
    {
      "id": "lem-arith-polarization-and-picard-twist-ampleness",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F2 and step 1.1 assert symmetry of every Mumford map from citations that do not establish it: the symmetric-homomorphism lemma assumes symmetry, while biduality supplies naturality, not this identity. This essential dependency restatement is unsupported.",
      "context_sha256": "f9e285299ec78aadb1dd7ca59d0422e2d2a67332378e16386877661d144ee073",
      "item_sha256": "5096325715eab969b6e41a9a57d6f545852f25fec08320bf841dfe7c144337df",
      "at": "2026-10-05T20:07:08.741Z"
    },
    {
      "id": "lem-arith-effective-ample-pair-and-group-descent",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F4 restates fppf morphism descent as fpqc descent, dropping the cited interface’s local finite presentation hypothesis. R→Rsh need not satisfy that hypothesis, so the morphism descent invoked in steps 3.1 and 4.1 is not licensed by the supplied interface.",
      "context_sha256": "f6a57ea0851b626fe9265a42b91c633e723694c242b28c094c6ff67139f24242",
      "item_sha256": "b6e207ef85792d919fb4fa5169b1f13efa218689eef7de7f10a0e4f655f91f69",
      "at": "2026-10-05T20:07:40.679Z"
    },
    {
      "id": "lem-arith-full-minimal-model-embedding",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F4 inaccurately restates the agreement and descent dependencies: schematic density and reducedness concern the source, not the target; descent also requires a faithfully flat cover and agreement of the two pullbacks.",
      "context_sha256": "07e2f696481729150e72d99d75edfaebf091981faad88346065aa01cca908787",
      "item_sha256": "128dd948b4c102d1b55897bd032f94b03f4a4920dfdee437c18dc59975657034",
      "at": "2026-10-05T20:07:29.451Z"
    },
    {
      "id": "thm-good-reduction-and-smooth-proper-base-change",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.4 invokes Neron–Ogg–Shafarevich for an arbitrary DVR and abelian variety, but the supplied theorem requires a finite-type Neron model. Clause (e) neither assumes nor establishes its existence; [F4] drops this essential hypothesis.",
      "context_sha256": "54389390bdf416eb65f77bc597ef46bf785619fd50d9c6b584592abb80ac04ea",
      "item_sha256": "af196a77897036da2304b84f1720b61932c39e4fd1e5185587d6c23c45e54785",
      "at": "2026-10-05T20:07:11.532Z"
    }
  ]
