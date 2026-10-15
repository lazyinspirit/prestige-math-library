# Step 3a adjudication — batch 23

Run: `statistical-models-experiments-62`; group: `batch-23`.

Scope has no touched items, changed pages, reader findings or refuter findings. No decisions are owed. Pre/post snapshots agree for all nine item, contract and manifest entries and both pages. Reader and refuter evidence was read independently of its verdicts.

## Completed reviews in dependency order

### `def-simple-markovian-mediation-scm`

Reviewed the complete Definition and all eight direct suppliers. The finite recursive equations have jointly measurable response maps, nonempty countable-discrete treatment, standard-Borel baseline and mediator, real outcome and mutually independent errors. Intervention substitution preserves baseline and gives Y^a=Y(a,M(a)); no additional post-treatment common cause is allowed. Constant baseline, singleton treatment and degenerate errors remain admissible; positivity is a later assumption, not claimed here. Pearl §§3.1, 4.3 and 5.1.2 and Hernan–Robins Technical Point 23.1 support the model restriction. Reader and refuter report no findings. No defect or repair.

### `lem-npsem-ie-implies-cross-world-independence-for-mediation`

Read both proof steps and all nine cited dependency interfaces. Product joint law applies to four independent errors on probability spaces; bounded measurable test functions are integrable for finite-product Fubini. Integrating each error gives measurable bounded alpha functions by the kernel integration theorem. Testing against indicators of sigma(L) identifies the conditional expectations and triple product; setting each test function to one yields exactly the three asserted pairwise identities. This works for fixed supplied a,a′,m, including equal levels, constant functions and degenerate baseline, without a common null set over uncountably many interventions. AC is explicitly inherited only by conditional-expectation classes. Hernan–Robins Technical Point 23.1, printed p.324, distinguishes NPSEM-IE from FFRCISTG; Pearl §4.3 equations (41)–(42), §5.1.2 supports the structural interpretation. No reader/refuter findings, defect or repair.

### `def-natural-effect-identification-assumptions`

Read the complete Definition and its nine direct supplier interfaces. Within the stipulated independent-error four-equation model the response independences follow from the reviewed lemma; the equivalence wording in clause 2 is restricted to that model. Consistency, absence of post-treatment common causes, target-law strict positive treatment propensity, one-direction measure-level Q_a′<<Q_a and integrability of every nested response are explicit. Positivity is not asserted to be uniform; diagonal pairs need only self-domination; mediator zero-mass sets are treated by absolute continuity. Cross-world independence is substantive and not implied by FFRCISTG or an observed regression; verified in Hernan–Robins Technical Point 23.1, printed pp.324–325. Reader/refuter found no defects. No repair.

### `thm-natural-effect-identification-under-cross-world-independence`

Read all five proof steps, all 21 direct dependency interfaces and relevant supplier proofs. Countable-discrete A is standard Borel by its complete separable discrete metric; finite products, AC-based RCD existence and factorization give Q,R. Jointly measurable structural response pushforwards are everywhere probability kernels. Bounded event-testing with the independent-error product law proves Q*,R* are observed conditional-law versions. For each used b, dP_(L|A=b)/dP_L=e_b/P(A=b)>0 almost everywhere, so their null sets transfer to target baseline strata. The single common RCD null set transfers to P_L Q_a and then to P_L Q_a′ by support domination. Absolute integrability of the nested outcome justifies finite-product Fubini, the zero-filled structural mean and its integrability under P_L Q_a′; no infinity subtraction occurs. Kernel versions do not affect the observed functional. Diagonal pairs use automatic self-domination; cancellation yields NDE+NIE=total even for equal treatment levels and zero effects. The actual theorem assumes the full independent-error SCM, so the proof does not improperly substitute pointwise cross-world independence for independence at a random mediator. AC uses match suppliers. Hernan–Robins Technical Point 23.1, printed p.324 gives the discrete formula and the same pure-direct/total-indirect convention; the local argument establishes the standard-Borel extension. Reader/refuter evidence has no findings. No defect or repair.

### `cex-natural-effect-cross-world-nonidentification`

Read all five counterexample steps and all three cited dependencies. Both explicit finite response laws obey consistency, randomized fair treatment and mediator probabilities 1/2 in both arms. Same-world independence holds because Y(0,m)=0 and M(1) is independent of V. In model II, M(0)=V violates the omitted cross-world condition at both m values; this law is not claimed to belong to the independent-error model. Exact rational enumeration of all 16/8 underlying equally weighted assignments verifies identical joint observed (A,M,Y) laws and nested means (1/2,1/2,0) versus (1,1/2,0). Thus (NDE,NIE)=(1/2,0) versus (1,-1/2), with total effect 1/2 in both, refuting identification without the extra restriction. Every finite variable is measurable, every response is bounded and integrable, and both mediator support points have positive mass. No AC selection is needed to construct the finite witnesses. Reader/refuter report no findings; no defect or repair.

## Sources and prerequisite coverage

Independently fetched and read [Hernán–Robins, *Causal Inference: What If*, 19 August 2026 revision](https://miguelhernan.org/s/hernanrobins_WhatIf_19aug26.pdf), Chapter 23.1–23.2, PDF pages 332–334 (printed 323–325), especially Technical Point 23.1. The browser fetch failed; a direct download and PyMuPDF extraction supplied the complete relevant passage. Its pure-direct/total-indirect convention agrees with the local NDE/NIE definitions; it explicitly distinguishes NPSEM-IE and FFRCISTG. Read [Pearl, *Causal inference in statistics: An overview*](https://ftp.cs.ucla.edu/pub/stat_ser/r350.pdf), §4.3 equations (41)–(42) and §§5.1.1–5.1.3, printed pp.131–136: intervention semantics, error independence, cross-world sufficiency and the mediation formula. Pearl's indirect-effect orientation differs; the local total-indirect convention is supported by Hernán–Robins and verified algebraically above.

Read each current routed carrier and its direct cited suppliers, including the conditional-expectation conventions, product joint law, Fubini, kernel measurability, RCD existence/factorization/uniqueness, conditional integration and identifiability. Reviewed the material supplier arguments used by the theorem, without recursively auditing the entire published foundational closure. The standard-Borel supplier theorem assumes AC and requires no completeness of the conditioning sigma-algebra; the factorization supplier requires standard-Borel conditioning spaces, established locally in step 1.1. No published supplier defect was identified at these interfaces.

The existing batch-23 cross-batch dependency input was inspected and preserved. The used potential-outcome, recursive-intervention and target-positivity definitions support the owned consumers; no supplier or consumer interface changed, no proposed withdrawal was removed, and no outside-batch repair is needed. Page-only obligations: none.

## Checks and disposition

- Initial `node tools/risk-report.mjs research/statistical-models-experiments-62-batch-23.proof-contracts.json`: exit 0; five required reviews identified.
- Final same command with `--require-reviewed`: exit 0, zero errors; all five HIGH/CRITICAL risk reviews complete.
- Exact rational finite enumeration: identical observed laws and both reported effect pairs verified.
- Current raw SHA-256 values match all nine identical pre/post reader item snapshots; both snapshot page records also agree. No historical delta is unknown.
- All reviewed contract derivations and citation quotes match current carriers after whitespace normalization. An initial literal comparison detected only wrapped lines in theorem step 1.1; no mathematical or contract correction was required.
- Decisions JSON parses and contains exactly the owed obligations: none, so `decisions: []`.

Changes are limited to five `risk_review` audit entries in the owning proof contract and the task-named report and decisions file. No items, manifests, pages or mathematical statements were edited. Consequently no proof-layout, formatter or precheck run is required for changed items. No mathematical repair, defect-ledger row, published-ledger entry, escalation or blocker arose. No judge, stamp, self-certification or gate battery was initiated; the engine owns those actions. The live engine status and latest git commit were checked, confirming this active run rather than relying on concluded RESUME files.
