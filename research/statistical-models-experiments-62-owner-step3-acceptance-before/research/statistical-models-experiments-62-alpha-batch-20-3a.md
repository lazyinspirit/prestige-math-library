# Batch 20 Step 3a adjudication

Run: statistical-models-experiments-62. Group: batch-20. Scope: batch 20 only.

The scope routes five touched obligations, no page obligations, and no reader/refuter findings. The reader report, empty findings, refuter report and pre/post inventories were read. Review covers current authored arguments and direct prerequisite statements, not a transitive audit of the published library. Published carriers remain read-only. No judge or engine transition is authorized here.

## Dependency-ordered review checkpoints

### lem-conditional-independence-under-kernel-extension-and-conditioning (level 0)

Steps 1.1–3.1 checked against the bounded-function CI and event-integral CE definitions, tower, kernel measurability, pi-lambda, simple approximation and monotone convergence statements. For each fixed g, rectangle tests extend to sigma(L,C), then the supplied K(l,c,dv) extends the joint law without constructing an RCD; tower gives the enlarged-conditioning identity. Boundedness gives integrability throughout and no uniform null set is needed. Singleton/constant cases obey the same equations. AC is explicit for CE. Aldous–Chewi Lecture 9 pp.35–36 Definition 9.1 and full Splice Lemma proof were read; its Borel disintegration is not imported.

Disposition: current proof sound; no decision owed. Next: level-1 definitions.

### lem-finite-products-of-probability-kernels (level 0)

Steps 1.1–3.1 checked: finite recursion applies the two-factor sigma-finite product theorem to probability measures; rectangle evaluations are finite products of measurable functions; the measurable-evaluation class is a lambda-system. Finite-measure uniqueness uses the whole-space rectangle as a common exhaustion. Empty source is vacuous; an empty target with nonempty source contradicts a probability-kernel hypothesis. n=0 singleton and n=1 base cases are explicit. No AC used. Hunter §5.3 pp.58–60 product construction and Theorem 5.14 support the two-factor input; all five actual local dependency statements were checked.

Disposition: current proof sound; no decision owed. Next: level-1 definitions.

### def-faithfulness-of-a-dag-model (level 1)

Checked the entire Definition with d-separation, finite-product, CI and AC definitions. It explicitly defines the CI-to-separation implication separately from the global Markov implication, rather than claiming factorization implies faithfulness. Pairwise disjoint triples, empty vectors, and arbitrary measurable vertex spaces are handled. No existence or Markov-equivalence theorem is asserted. Pearl §2-1 pp.671–672 supplies the graph convention; the item states its own converse convention.

Disposition: current content sound; no decision owed. Next: next routed item in dependency order.

### def-recursive-structural-causal-model-and-dag (level 1)

Checked the entire Definition against measurable spaces/functions, independent random elements and recursive finite-product conventions. Specified finite topological order gives a unique measurable solution without choice; joint response measurability follows by finite substitution of jointly measurable structural maps. Intervention constants are admissible values, other equations and exogenous law stay fixed, and eventwise consistency follows by induction. Empty graph/parent sets are singleton products. Latent marginalization is not claimed to preserve observed graph factorization. Pearl §2-2 pp.672–674 supplies independent-error structural functions and equation replacement.

Disposition: current content sound; no decision owed. Next: next routed item in dependency order.

### lem-d-separation-ancestral-moral-separation (level 2)

All three steps and exact three local suppliers checked. Forward direction: following an outgoing edge reaches an endpoint or activated collider, so all path vertices are ancestral; collider bypasses remove all conditioned vertices. Reverse: expand moral edges into a route, minimize bad collider occurrences, and splice to an endpoint along a directed C-avoiding chain. New chain incidences are noncolliders; repetitions are retained until the proved active-route shortening supplier applies. In that supplier the only possible new inactive collider forces a directed route to an old activated collider, a contradiction. Both directions and empty endpoints hold; finite minimization uses no AC. Pearl §2-1 p.672 states the exact moralization criterion.

Disposition: current content sound; no decision owed. Next: next routed item in dependency order.

### lem-recursive-scm-topological-kernel-factorization (level 2)

Steps 1.1–3.1 checked against all ten direct suppliers. Structural kernels are pushforwards with measurable evaluations by integration of joint indicators against constant probability kernels. Fubini applies to bounded tests on finite product probability spaces; prior endogenous coordinates depend only on prior independent errors. Dirac retention times the next structural kernel forms a genuine common-source product kernel; composition and finite rectangle uniqueness identify each joint marginal. Empty graph, parent products and intervened factors are explicit. No unspecified RCD or AC is used. Latent pushforward makes no observed-only factorization claim. Pearl §2-2 pp.672–674 supports the surgery convention.

Disposition: current content sound; no decision owed. Next: next routed item in dependency order.

### ex-same-observed-law-different-intervention-law (level 2)

Both verification steps checked with the five model/SCM definitions. The two-model parameter set gives identical observed masses 1/2 at 00 and 11. Replacing A alone gives Y=a in model 1 and Y=U in model 2; at a=0 the success probabilities are 0 and 1/2. This is a valid nonidentifiability witness on that model, not a claim under an imposed common causal graph. Constant independent errors complete both finite Markovian systems. Pearl §3-1 pp.674–675 describes the two-structural-model witness method. No choice or support inversion is used.

Disposition: current content sound; no decision owed. Next: next routed item in dependency order.

### thm-dag-factorization-implies-d-separation-conditional-independence (level 3)

All four steps and 13 exact direct prerequisite statements checked. Ancestor pruning removes only childless outside kernels. The stronger full-moral partition assertion is valid by sink induction: an L/R sink extends its side, while a conditioned sink has all nonseparator parents on one side because its parents form a moral clique. Both conclusions of the supplied kernel-extension lemma apply to specified kernels on arbitrary measurable spaces. Thus the conditioned-sink factor is retained; no density, positivity or arbitrary-space RCD is assumed. Ancestor moral separation then supplies the partition. Empty vectors and empty graphs give constant bounded tests. AC is declared for CE/CI. Pearl §2-1 pp.671–672 provides the global-Markov and moralization statements; the arbitrary-space induction is proved locally.

Disposition: current proof sound; no decision owed. Next: backdoor response-family lemma.

### lem-backdoor-criterion-implies-counterfactual-exchangeability (level 4)

Steps 1.1–5.1 and all 12 direct suppliers checked. Finitely many response copies share nondescendants and exogenous roots in a genuinely finite acyclic SCM. Every retained vertex projects to an ancestor in G_underline T. A factual descendant of T retained on the factual side is an ancestor of a later treatment, hence belongs to a treatment-side moral component. Nonroot families preserve the treatment/right partition, including factual families with a treatment parent. Roots for C have only co-parent neighbors after deleting C; the shared-C family is a moral clique, so root placement cannot bridge the sides. Global Markov gives finite response-vector CI. The fixed-f bounded-event lambda-system extends to the arbitrary response-family sigma-algebra without a simultaneous uncountable null set. Empty endpoints/empty T and finite minimization are harmless; AC is explicit. Reader pairwise disjointness correction makes the graph premise well-formed and matches the proof Given. Current raw hash equals post-reader hash. Accept repair; confidence 1.

Consumer obligations: the backdoor lemma is used only by the owned backdoor theorem; the frontdoor helper only by the owned frontdoor theorem. Their explicit disjoint/distinct vertex hypotheses supply the repaired premises. No outside carrier uses were found by a current items/library reference search. Next: level-5 adjustment theorems.

### lem-frontdoor-interventional-identities (level 4)

All eight steps and eight direct suppliers checked. Fork witnesses prove I_M is disjoint from I_A and I_Y; directed paths to Y after fixing M avoid A by condition (i). In step 1.4 the last intersection in the directed q order gives a simple active splice; root leaves introduce no internal shortcuts. Pruning the factual expanded graph is legitimate because M has no descendant ancestor of A (condition ii), or of any exogenous root. Hence the actual factual marginal factors on a subgraph with no outgoing M edge, proving M independent of U_IY given A. Finite exogenous-vector independence proves both unconditional independences. Joint structural measurability and no A-to-Y path after fixing M justify the realized-value composition Y^a=Y^{M^a}, including non-atomic mediators, without diagonal substitution into an a.e. identity. Reader pairwise distinctness makes all three graph conditions well-formed. Current raw hash equals post-reader hash. Accept repair; confidence 1.

Consumer obligations: the backdoor lemma is used only by the owned backdoor theorem; the frontdoor helper only by the owned frontdoor theorem. Their explicit disjoint/distinct vertex hypotheses supply the repaired premises. No outside carrier uses were found by a current items/library reference search. Next: level-5 adjustment theorems.

### thm-backdoor-adjustment-sufficiency (level 5)

All three steps and 13 direct suppliers checked. The response-family lemma applies with T={A}, W={Y}, C=L because the repaired vertex sets are disjoint and L contains no descendant. Standard-Borel outcome and covariates, with countable discrete A, permit law-space disintegration; a countable determining algebra yields one exceptional set for kernel equalities. At the supported atom the density e_a(l)/P(A=a) is strictly positive, making P_L and P_(L|A=a) equivalent. Consistency therefore transfers the observed conditional kernel to all target covariate mass. Distribution integration gives identification; positive/negative truncations give the expectation formula when Y^a is integrable. The continuous-treatment sentence is read as an a.e./null-value limitation, not an assertion of identification without overlap. Empty L and deterministic Y satisfy the same tests. Potential-outcome supplier is used only for terminology; general standard-Borel responses and consistency are derived from the SCM definition. Reader distinctness/disjointness repairs correctly supply the strengthened response-lemma premise. Current raw hash equals post-reader hash. Accept repair; confidence 1.

Consumer check: current items/library references show no outside consumers. The backdoor theorem has no item consumer; its page correctly states atom and positivity restrictions. The frontdoor theorem is used by the owned binary example, where the three vertices are distinct, all nested supports are positive, and Y is bounded. Next: level-6 example.

### thm-frontdoor-adjustment-sufficiency (level 5)

All four proof steps and 20 actual direct supplier statements checked. Countable A permits conditioning the possibly arbitrary measurable outcome-error vector at each supported atom without an arbitrary-space disintegration. Conditional M/error independence gives a product law; joint structural F yields an observed outcome kernel lambda_(a prime) on standard-Borel Y. Its a.e. equality transfers from mu_(a prime) to mu_a by the stated domination; countably many supported atoms allow a common target-full set. Nonnegative integration handles absolute values before signed means; nested integrability makes the final product integral and Y^a integrable. Mixing the conditional error laws recovers the unconditional error law. Independent M^a and outcome-side errors and structural response composition then give the formula. Thus no unsupported non-atomic-mediator diagonal evaluation is used. The functional is invariant under observed-law versions by precisely that domination. Pairwise-distinct A,M,Y repairs the graph premises and applies to the owned example. Non-atomic treatment caveat claims no pointwise identification. AC uses are declared for CI and standard-Borel kernels. Current raw hash equals post-reader hash. Accept repair; confidence 1.

Consumer check: current items/library references show no outside consumers. The backdoor theorem has no item consumer; its page correctly states atom and positivity restrictions. The frontdoor theorem is used by the owned binary example, where the three vertices are distinct, all nested supports are positive, and Y is bounded. Next: level-6 example.

### ex-frontdoor-adjustment-binary-model (level 6)

All three verification steps and four direct suppliers checked. Independent U,E_A,E_M have probabilities 1/2,1/4,1/5. Bayes gives U|A=1 probability 3/4 and U|A=0 probability 1/4; the mediator rates are 4/5 and 1/5. M=0 conditional outcome means are those U probabilities, so the marginal-A mixture is 1/2, and for M=1 it is 1. Both nested mediator laws have full binary support and bounded Y satisfies absolute integrability. Full graph conditions use three distinct observed vertices, a collider-blocked A/M backdoor and an A-blocked M/Y backdoor. The observed functional and direct do(A=1) recursion both give 9/10. Current source is byte-identical in pre and post inventories; only the reader contract changed to check the theorem distinctness hypothesis. Disposition reviewed_no_defect, audit_enrichment; no defect row or item edit.

All routed current mathematical reviews are now complete. Next: decision/ledger records and focused checks.

## Historical delta and decisions

Exact pre-reader source preimages were recovered at `research/statistical-models-experiments-62-owner-irls-causal-boundary-anchors/after-phases/items/`. Each of the four touched source files in that directory hashes exactly to its `pre` snapshot entry. Each current source hashes exactly to `post`. The only non-whitespace changes are the four Statement corrections described above; facts were reflowed and final newlines added, with proofs and references preserved. Historical uncertainty does not remain for these deltas. The example source is identical in pre/post/current, while its contract fingerprint changed.

Four `accepted_repair` decisions have confidence 1 and each references its own closed defect-ledger row. These are nonfatal explicit-domain omissions: the definition of d-separation already implicitly restricts its inputs, so no counterexample to the intended probability claim is asserted. The fifth decision is `reviewed_no_defect` / `audit_enrichment`, with no defect IDs. There are exactly five decisions and no invented reader/refuter/page obligations. This adjudicator changed no item, page, manifest, or proof argument.

## Sources and prerequisite evidence

- [Pearl, Causal Diagrams for Empirical Research](https://ftp.cs.ucla.edu/pub/stat_ser/R218-B.pdf), §2-1 pp.671–672, §2-2 pp.672–674, §3-1 pp.674–675, §3-2 pp.675–676: read the complete relevant sections. Checked pairwise disjoint d-separation inputs, ancestral moralization, independent disturbances, equation replacement, and the backdoor/frontdoor criteria and functionals. Local proofs supply the general measurable-space and response-family arguments rather than treating the cited formulas as proof substitutes.
- [Hernán–Robins, What If, 2 January 2025](https://miguelhernan.org/s/hernanrobins_WhatIf_2jan25.pdf), Technical Points 6.1–6.3 pp.72–74, Fine Points 6.1–6.2 pp.78–79, §7.2/Technical Point 7.1 pp.87–88 and complete Technical Point 7.4 p.101: read from the existing extracted author PDF at `/tmp/sme20-hernan-robins.txt` (header January 2, 2025). Fresh web PDF retrieval returned an internal error; no new retrieval success is claimed. In particular, the source distinguishes NPSEM with independent errors from its weaker default FFRCISTG; this batch explicitly uses the former. Its frontdoor argument uses well-defined interventions on M, as supplied locally.
- [Aldous–Chewi probability notes](https://www.stat.berkeley.edu/~aldous/205B/chewi_notes.pdf), Lecture 9 pp.35–36, Definition 9.1 and complete Splice Lemma 9.2 proof: bounded-function CI equivalence and supplied-kernel integration. The arbitrary-space helper does not import the Borel disintegration claim.
- [Hunter, Measure Theory](https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf), §5.3 pp.58–60 and Theorem 5.14: product construction and sigma-finite uniqueness, applied only to probability measures here.
- [Tao, An Introduction to Measure Theory](https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf), Proposition 1.7.11 and its complete proof pp.197–199: finite two-factor probability products and uniqueness. The kernel measurability upgrade is proved locally.

Every declared direct supplier was opened at its exact Statement/Definition and checked at its actual use. The batch-19 potential-outcome definition restricts itself to countable treatment versions and real outcomes; here it supplies terminology only. Standard-Borel law existence, law-space disintegration and its common-null-set uniqueness are used with their stated AC and target hypotheses. The kernel, CE/CI, finite-product, uniqueness, Fubini, monotone-convergence, simple-approximation and model-identifiability interfaces were checked as described in each item checkpoint. This is not an audit of every transitive published foundation proof.

## Published and consumer dispositions

No defective published supplier was established, so no published-ledger row or lock was needed. All published content remained read-only. Current item/page searches for the four changed supplier IDs found only the owned helper/theorem/example chain and its A-page placement. The strengthened helper Statements are supplied by the repaired theorem hypotheses; the binary example meets the theorem hypotheses explicitly. No affected outside consumer or proposed withdrawal was found, and no stable ID was removed. The owned cross-batch incoming edges to `def-potential-outcomes-and-consistency` are sound at their actual uses. The frontier dependency ledger receives a batch-specific checkpoint preserving other owners’ records.

## Local validation and handoff

- Initial `node tools/risk-report.mjs research/statistical-models-experiments-62-batch-20.proof-contracts.json`: 17 items routed, 13 HIGH/CRITICAL, zero errors. All 13 now have specific independent `alpha-batch-20` reviews. Required rerun with `--require-reviewed`: 17 items, zero errors.
- `node tools/proof-contract.mjs research/statistical-models-experiments-62-batch-20.proof-contracts.json --strict`: 17/17 checked, zero errors, zero warnings.
- `node tools/tsx-run.mjs tools/precheck.mts` on the four reader-edited items plus the binary example: 5 checked, zero failures.
- Final single `node tools/proof-layout.mjs` command on `items/lem-backdoor-criterion-implies-counterfactual-exchangeability.md`, `items/lem-frontdoor-interventional-identities.md`, `items/thm-backdoor-adjustment-sufficiency.md`, `items/thm-frontdoor-adjustment-sufficiency.md`, and `items/ex-frontdoor-adjustment-binary-model.md`: 5 items, 23 steps, zero defects. No item edits or formatter runs followed it.
- Native defect-ledger append recorded exactly four closed rows and refreshed the generated view under its append lock. `node tools/defect-ledger.mjs validate --run statistical-models-experiments-62`: 289 run rows checked, zero errors.
- Focused JSON/hash checks: exactly the five scope-owed obligations, no duplicate decisions; all 17 item raw hashes equal frozen reader-post; all four decision ledger links refer to fixed Step-3a rows; all 13 required risk reviews use this adjudicator identity.

Changed artifacts: this report, its decisions JSON, the owning proof-contract file (risk reviews only), the batch-specific frontier dependency checkpoint, and the four appended canonical defect rows/generated ledger view. Item/page/manifest sources remain unchanged from dispatch entry. The repository contained pre-existing unrelated working changes; they were preserved.

No mathematical blocker or unresolved uncertainty remains in the dispatched obligations. Historical owner/author notes about earlier causal proof gaps are retained in their original artifacts; this review independently checked the corrected current arguments and does not rewrite those historical reports. Sources were checked at the recorded relevant passages, with the fresh Hernán PDF fetch limitation stated above. Engine decision stamping and its gate battery remain pending; no judge, stamp, native gate battery, dispatch, or stage transition was initiated. Both task-named output files are complete.
