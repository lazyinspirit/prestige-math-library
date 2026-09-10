# Group g — Step 6B authored-content review

## Batch 14 — completed local review

Run: phase-2-catchup-24. Dispatch: 6b-g-14. Reviewed only the 56 assigned items and four assigned pages in scope-14. Decisions are merged by authored obligation in `research/phase-2-catchup-24-alpha-g-6b-decisions.json`. Item-by-item notes below are chronological checkpoints; the completed handoff below supersedes their next-action notes.

### def-robinson-q-and-peano-arithmetic — accepted

Read all seven axioms, full parameter induction and published def-set-coded-formal-derivation. Left-addend order is intentional; no Q induction assumed. Capture-free primitive-syntax expansions are explicit. Source locator Moschovakis 4B.5 p147; fresh source comparison pending for the proof chain, not needed to settle this definition.

Validation: direct authored-content and prerequisite comparison. Next: continue in manifest order.

### def-effective-theory-and-certified-godel-numbering — accepted

Read definition and its justified_by supplier in full. Axiom enumeration uses existential finite certificates, not decidable axiom membership. Leading sentinel and canonical one-bit zero ensure unique decoding; invalid codes and empty code 2 are specified. Published def-bounded-arithmetic-formula supplies precisely parameter primitive recursion, not universal PR evaluation.

Validation: direct authored-content and prerequisite comparison. Next: continue in manifest order.

### lem-certified-syntax-coding-operations-are-primitive-recursive — accepted

Steps 1.1–7.1 checked against the two published supplier statements and proofs. Bounded-search sum gives N on failure, pairing inverse searches are bounded by code, loops use fixed-register primitive recursion, header and payload integer formulas have the stated widths. Empty code 2, zero payload, invalid/trailing blocks and out-of-range coordinates checked. History recursion is ordinary state recursion and does not invoke a universal evaluator. Local constructive argument closes all claims without an external coding theorem.

Validation: direct authored-content and prerequisite comparison. Next: continue in manifest order.

### lem-q-numeral-calculation-and-bounded-cases — accepted

Steps 1.1–3.1: numeral recursion and cancellation follow the seven Q axioms; predecessor iteration yields the finite cases and left-addend witness z+n. Bounded formula induction substitutes all finite candidates, including empty strict bound zero. Both order schemes use external induction only. Contract facts reproduce the reviewed Q convention.

Validation: direct authored-content and prerequisite comparison. Next: continue in manifest order.

### lem-godel-beta-coding-and-q-remainder — repaired

Steps 1.1–4.1 reviewed: division, Bezout combination Avt+Bus, CRT, strict j bound, numeral-bounded Q graph and PA common-multiple/extension induction. Corrected the termination induction variable from u+v to v: when u<v the sum is unchanged at the first Euclidean step, but the second coordinate strictly decreases. Source read: Moschovakis https://www.math.ucla.edu/~ynm/lectures/lnl.pdf 1E.4–1E.6 pp19–20 and 4B.8 p147; local divisor-zero convention differs deliberately. No new prerequisite or AC. Repair reflowed and precheck passed; see completed checks below.

Validation: direct authored-content and prerequisite comparison. Next: continue in manifest order.

### def-numeralwise-representability-and-arithmetic-sigma-one — accepted

Unique values at numeral inputs are distinguished from PA uniform totality and uniqueness. Syntactic Sigma1 and PA-equivalent Sigma1 have explicitly different conventions; no Q equivalence is inferred. Source comparison: Moschovakis 4B.1–4B.2 pp145–146 and reviewed Q definition.

Validation: direct authored-content and prerequisite comparison; no mathematical repair or open obligation identified for this item. Next: continue in manifest order.

### thm-primitive-recursive-numeralwise-representability — accepted

Read steps 1.1–7.1, contract and F1/F2. Least-output strengthening transfers a known numeral coordinate even at nonnumeral beta-code inputs; finite induction includes t=0. PA history extension gives uniform totality/uniqueness; finite witness bounding is PA induction, and graph negations use totality plus different output. Thus Sigma1 conversion is PA equivalence only. Compared full Moschovakis 4B.11–13 p148: local variable roles and existential successor witnesses correctly avoid its displayed typos. No AC or Recorded supplier.

Validation: direct authored-content and prerequisite comparison; no mathematical repair or open obligation identified for this item. Next: continue in manifest order.

### lem-primitive-recursive-syntax-and-proof-checking — accepted

Read all five algorithm steps and contract: shorter-interval parsing, finite free-variable lists, binder scope checks, fresh renaming and exact unrenamed free-for substitution, all six Hilbert axiom templates and three rules. Boolean valuation enumeration is bounded by an explicit exponential in annotation size. Certified E witnesses are checked rather than searched for. Empty proofs and future premise indices are rejected. Each loop uses the already proved fixed-register/history primitive recursion; no missing syntax theorem is assumed.

Validation: direct authored-content and prerequisite comparison; no mathematical repair or open obligation identified for this item. Next: continue in manifest order.

### def-effective-interpretation-and-proof-translation — accepted

Domain nonemptiness, equality congruence, graph totality/uniqueness modulo E and sentence axiom translations are explicit. Free-variable guards prevent E-reflexivity outside D. Effective and base-verifiable primitive-recursive certificates are distinct hypotheses, with no quotient choice.

Validation: direct authored-content and prerequisite comparison; no mathematical repair or open obligation identified for this item. Next: continue in manifest order.

### lem-interpretation-translates-finite-derivations — accepted

Steps 1.1–6.1 checked with full published Boolean/quantifier lemma, sentence deduction and finite-support proofs. Term value existence and formula invariance justify substitution through negation and conjunction. Nonempty D removes surplus guards via restricted elimination; all six axioms and three rules receive guarded translations. Contradiction translation is refutable by E-reflexivity. Only finite proof selection occurs in ZF; formal Con implication explicitly assumes a verified total map.

Validation: direct authored-content and prerequisite comparison; no mathematical repair or open obligation identified for this item. Next: continue in manifest order.

### def-arithmetic-provability-and-consistency — accepted

The chosen representation is fixed to the constructive PR checking graph, with its PA computation-form equivalence. Code numeral versus external proof is separated. Fixed logical contradiction and Q arithmetic contradiction are converted by fixed proof blocks, not by merely extensionally correct replacement predicates.

Validation: direct authored-content and prerequisite comparison; no mathematical repair or open obligation identified for this item. Next: continue in manifest order.

### thm-arithmetic-diagonal-lemma — accepted

Steps 1.1–3.1: d is the already established substitution function; e is the code of eta, d(e) is the code of theta, and numeralwise unique representation gives both biconditional directions by equality substitution. Fresh auxiliary variables prevent capture. No consistency assumption. Full comparison with Moschovakis 4B.14 p149, https://www.math.ucla.edu/~ynm/lectures/lnl.pdf; no new Avigad reading.

Validation: direct authored-content and prerequisite comparison; no mathematical repair or open obligation identified for this item. Next: continue in manifest order.

### thm-first-incompleteness-with-explicit-soundness — accepted

The positive proof check at an actual G-proof contradicts the fixed point under consistency. Every failed standard check has a Q negative numeral proof; soundness of Q in N gives truth of G without soundness of T. Refuting G instead yields the existential forbidden by omega-consistency. Checked separate assumptions and additional-symbol irrelevance.

Validation: direct authored-content and prerequisite comparison; no mathematical repair or open obligation identified for this item. Next: continue in manifest order.

### thm-rosser-incompleteness-for-effective-theories — accepted

For a proof m of R the finite negative checks below m refute the Rosser matrix. For a proof n of not-R, split p<=n or n+1<=p; the latter admits n as counterproof witness. This needs numeralwise checking, not Q Sigma1 normal form. In interpretation case formula translation is PR from finite data and theorem translation uses its separate effective certificates; translated negation commutes literally. Both contradictions use only consistency.

Validation: direct authored-content and prerequisite comparison; no mathematical repair or open obligation identified for this item. Next: continue in manifest order.

### lem-pa-uniform-bounded-truth-proof-certificates — accepted

All six constructor steps checked: PA induction verifies term arithmetic certificates and shifted indices; uniform finite-case proof generator precedes negative order and bounded quantifier certificates. Boolean negative branches are correctly selected; bounded universal truth uses all finitely many matrix certificates. Empty strict bounds and wrong-sign defaults are explicit. F2 supplies totality only; the separate line invariants supply verification. Read Moschovakis 4C.12–13 pp154–156 at https://www.math.ucla.edu/~ynm/lectures/lnl.pdf, which outlines rather than completes these cases. Local argument supplies the missing details.

Validation: direct authored-content and prerequisite comparison; no mathematical repair or open obligation identified for this item. Next: continue in manifest order.

### thm-hilbert-bernays-lob-derivability-conditions — accepted

D1 uses actual numeral certificates. D2 verifies concatenation/MP against the fixed constructive graph in PA. D3 uses the preceding bounded-certificate lemma on the syntactic Sigma1 equivalent, embeds finite Q axiom proofs in T, then appends the fixed equivalence implication. PA equivalence is never promoted to Q equivalence. Interpreted case expressly assumes verified constructors/translations. Full contract boundaries checked; Moschovakis 4C.13 pp155–156 compared.

Validation: direct authored-content and prerequisite comparison; no mathematical repair or open obligation identified for this item. Next: continue in manifest order.

### thm-lob-from-derivability-conditions — accepted

Checked each modal implication in steps 1.1–3.1: D1/D2 on the forward fixed point, D3 plus D2 give Box(theta)->Box(phi), the assumed reflection gives Box(theta)->phi, and reverse fixed point yields theta followed by D1 and MP. No G2 used, and inconsistent theories cause no exception. Interpreted statement assumes the copy needed for diagonalization (target sentences can be incorporated as fixed nullary predicates in the finite interpretation data).

Validation: direct authored-content and prerequisite comparison; no mathematical repair or open obligation identified for this item. Next: continue in manifest order.

### thm-second-incompleteness-for-standard-provability — accepted

Con(T)=not Box(bottom) gives Box(bottom)->bottom by classical logic and the fixed contradiction. Direct Lob forces bottom, contrary to the stated consistency assumption. Uses exactly D1–D3 for the chosen predicate, not mere standard-numeral correctness.

Validation: direct authored-content and prerequisite comparison; no mathematical repair or open obligation identified for this item. Next: continue in manifest order.

### thm-tarski-arithmetic-truth-undefinability — accepted

Liar fixed point for not Tr and proposed truth biconditional give opposing truth values. In N the soundness supplier applies to a nonempty set structure satisfying Q; in the syntactic version both biconditionals are T theorems, yielding contradiction. No truth predicate for the universe or hierarchy import. All contract boundary cases checked.

Validation: direct authored-content and prerequisite comparison; no mathematical repair or open obligation identified for this item. Next: continue in manifest order.

### thm-explicit-definitions-give-conservative-extensions — accepted

Full-domain equality interpretation satisfies relation invariance and function obligations exactly under unique totality. Old term graphs eliminate to z=t, so old formulas are provably equivalent to their translations; syntactic identity is not assumed. Finite proof support handles a set of new symbols and finite proof selection is ZF. Both consistency directions follow, including empty additions and nullary functions.

Validation: direct authored-content and prerequisite comparison; no mathematical repair or open obligation identified for this item. Next: continue in manifest order.

### lem-zf-arithmetic-interpretation-and-effective-axioms — accepted

Schema certificates use the exact published six sentences/two schemas and PR syntactic transformations. Omega recursion gives arithmetic operations and Separation plus omega induction gives each translated PA induction instance. Fixed Q blocks and the formula-to-Separation template yield PA-verifiable code maps by line induction; this meets the explicitly conditional interpreted HBL theorem. Choice is only an encoded added ZFC axiom, not used in the PA interpretation.

Validation: direct authored-content and prerequisite comparison; no mathematical repair or open obligation identified for this item. Next: continue in manifest order.

### thm-model-existence-versus-syntactic-consistency — accepted

Used-symbol occurrence indices give an explicit countable sublanguage, so the published countable completeness statement applies. One carrier point provides all unused-symbol defaults without choice; soundness supplies the reverse implication. Certified finite axiom witnesses give equivalence with standard Con. Neither countability nor completeness supplies actual membership or well-foundedness.

Validation: direct authored-content and prerequisite comparison; no mathematical repair or open obligation identified for this item. Next: continue in manifest order.

### def-countable-transitive-model-and-fragment-transfer — accepted

TM uses a nonempty transitive set with actual membership; CTM adds an external injection into omega. Finite-fragment data explicitly quantifies external fragments and includes auxiliary axioms/parameters. It assumes neither a full-theory CTM nor universe truth; referenced model and code conventions match.

Validation: direct authored-content and prerequisite comparison; no mathematical repair or open obligation identified for this item. Next: continue in manifest order.

### lem-transitive-zf-models-have-correct-proof-codes — accepted

Internal omega contains every external finite ordinal by transitivity and finite successor closure. Its bounded ordinal/zero-or-successor properties transfer by direct bounded-range induction; any proper ordinal extension of omega contains the forbidden limit element omega. Thus arithmetic recursion and every fixed arithmetic quantifier range agree. Soundness in the transitive ZFC model rules out actual refutations and transfers standard Con. No later general absoluteness theorem is used circularly.

Validation: direct authored-content and prerequisite comparison; no mathematical repair or open obligation identified for this item. Next: continue in manifest order.

### thm-consistency-does-not-supply-a-transitive-zfc-model — accepted

TM(ZFC) yields a model of S=ZFC+Con(ZFC) by the preceding arithmetic correctness lemma, hence Con(S). Effective finite-extension HBL/G2 applies to S under the explicitly stronger external Con(S). Deduction makes S+not TM consistent, and countable completeness gives an arbitrary set countermodel. No transitive countermodel or Con(ZFC)-alone premise is claimed.

Validation: direct authored-content and prerequisite comparison; no mathematical repair or open obligation identified for this item. Next: continue in manifest order.

### thm-finite-fragment-relative-consistency-transfer — accepted

An actual U refutation selects one finite Delta. The stipulated two T proofs yield its set model; internal soundness for that fixed proof yields a T contradiction. The formalization strength is explicitly assumed, and no uniform all-fragment assertion is inferred. Empty or repeated supports do not change the argument.

Validation: direct authored-content and prerequisite comparison; no mathematical repair or open obligation identified for this item. Next: continue in manifest order.

### thm-formal-relative-consistency-from-verified-proof-reduction — accepted

Inside B, totality supplies q=r(p), verified preservation converts any U refutation to a forbidden T refutation under Con(T), and generalization/discharge give the conditional. Both map existence and verification are hypotheses; mere external fragment assembly is explicitly insufficient.

Validation: direct authored-content and prerequisite comparison; no mathematical repair or open obligation identified for this item. Next: continue in manifest order.

### rem-semantic-ctm-versus-formal-relative-consistency — accepted

The remark accurately separates actual CTM constructions, external finite-fragment transfer and formal consistency implications. It invokes only the reviewed interfaces and retains their strength-gap qualification; no new mathematical supplier or unproved claim is inserted.

Validation: direct authored-content and prerequisite comparison; no mathematical repair or open obligation identified for this item. Next: continue in manifest order.

### ex-godel-diagonal-substitution-calculation — accepted

The example specializes psi to y=y and keeps formula eta, number e and numeral e distinct. The unique output d(e)=code(theta) gives the displayed biconditional and a Q proof of theta. Both directions and numbering independence checked against the actual diagonal proof.

Validation: direct authored-content and prerequisite comparison; no mathematical repair or open obligation identified for this item. Next: continue in manifest order.

### ex-consistent-theory-with-an-internal-false-proof — accepted

Sentence deduction turns an inconsistency of PA+not Con(PA) into a forbidden PA proof of Con(PA). The reviewed standard-predicate G2 applies to PA; countable completeness supplies a set model. Negative numeral proof checks exclude every standard numeral from its alleged refutation witnesses, establishing precisely nonstandardness.

Validation: direct authored-content and prerequisite comparison; no mathematical repair or open obligation identified for this item. Next: continue in manifest order.

### ex-explicit-function-definition-is-conservative — accepted

Graph y=x+x is provably uniquely total. Elimination yields the old arithmetic equation, and the 2+2, 0+0 and 1+1 calculations follow Q recursion. The unrelated infinite c-bound family is correctly not asserted nonconservative.

Validation: direct authored-content and prerequisite comparison; no mathematical repair or open obligation identified for this item. Next: continue in manifest order.

### fs-con-zfc-implies-a-transitive-model-of-zfc — accepted

The exact stronger premise Con(ZFC+Con(ZFC)) invokes the reviewed strength-gap theorem. Its set countermodel satisfies the antecedent and negates TM, so refutes the proposed implication over ZFC. No claim of an actual transitive countermodel is made.

Validation: direct authored-content and prerequisite comparison; no mathematical repair or open obligation identified for this item. Next: continue in manifest order.

### ex-finite-proof-support-in-relative-consistency — accepted

The five listed proof lines and MP references are valid; only lines 0 and 1 are nonlogical support, giving two distinct axioms. Transfer plus soundness yields a contradiction only under the stated T-proof hypotheses. Uniform B verification is separately required for each extractor/constructor; the concrete example does not pretend to provide it.

Validation: direct authored-content and prerequisite comparison; no mathematical repair or open obligation identified for this item. Next: continue in manifest order.

### def-set-theoretic-levy-hierarchy-and-absoluteness — accepted

Explicit bounded-closure syntax, dual negation classes and ZF-equivalence convention are consistent. Nonempty nested membership domains and formula-by-formula class relativization are explicit. Compared Marks Definition 18.8/Exercise 18.9 pp76–77 at https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf; local bounded closure is distinguished from literal prenex form.

Validation: direct authored-content and prerequisite comparison; no mathematical repair or open obligation identified for this item. Next: continue in manifest order.

### thm-delta-zero-absoluteness-for-transitive-sets — accepted

Constructor induction handles actual atoms and Boolean operations; both bounded existential witnesses lie in the smaller domain because the bound is a parameter there and it is transitive. Empty bounds and class schemes checked. Freiburg Proposition 3.5.5 p51, https://home.mathematik.uni-freiburg.de/maxwell/coursenotes-settheoryandindependenceproofs.pdf, supplies the same complete argument.

Validation: direct authored-content and prerequisite comparison; no mathematical repair or open obligation identified for this item. Next: continue in manifest order.

### lem-bounded-definitions-of-basic-set-operations — accepted

Each displayed graph has both inclusions. Empty intersection is explicitly exceptional; Kuratowski pair coordinates are bounded through members of members, including coincident coordinates. Product, domain/range, function and injection clauses retain relation/function guards. Expansion introduces no unbounded quantifier and graph agreement requires candidate outputs present. Compared Freiburg 3.5.6–3.5.8 pp51–52; no closure of arbitrary transitive domains is inferred.

Validation: direct authored-content and prerequisite comparison; no mathematical repair or open obligation identified for this item. Next: continue in manifest order.

### thm-ordinals-and-omega-are-absolute-in-transitive-models — accepted

Transitivity plus bounded strict linear-order clauses characterize ordinalhood in ambient ZF by Foundation. Internal zero/successors agree in transitive ZF models. The nonzero nonsuccessor ordinal whose members are zero or successors is exactly omega; a larger ordinal contains omega and fails that description. Initial-segment conclusion follows from transitivity. No choice; checked the zero exclusion and supplied ordinal definition.

Validation: direct authored-content and prerequisite comparison; no mathematical repair or open obligation identified for this item. Next: continue in manifest order.

### thm-rank-and-hierarchy-membership-absoluteness — accepted

External membership induction identifies all predecessor ranks; ordinal successors and unions agree, so their suprema agree including the empty case. Applying the published strict rank/stage equivalence inside both ZF models gives precisely (V_alpha)^M=M intersect (V_alpha)^N. No equality of power sets is claimed. Compared Geschke section 3 pp9–10, https://www.math.uni-hamburg.de/home/geschke/teaching/ModelsSetTheory.pdf.

Validation: direct authored-content and prerequisite comparison; no mathematical repair or open obligation identified for this item. Next: continue in manifest order.

### lem-levy-sigma-one-existential-normal-form — accepted

Positive Boolean prenexing fills unused witnesses with empty sets; bounded existential joins the prefix. Bounded universal uses published Collection, whose full rank proof was read, and fixed tuple decoding from the reviewed bounded pair graphs. No choice function is selected. The equivalence needs ZF and is not applied in arbitrary transitive domains. Marks Exercise 18.9 explicitly retains ZF.

Validation: direct authored-content and prerequisite comparison; no mathematical repair or open obligation identified for this item. Next: continue in manifest order.

### thm-sigma-one-upward-and-pi-one-downward-absoluteness — accepted

An existing finite existential tuple remains in the larger domain and its bounded matrix transfers; contraposition gives universal downward transfer. Empty prefix reduces to bounded absoluteness. ZF-equivalence classifications additionally require both structures to satisfy the equivalence axioms. Compared the complete Marks Proposition 18.13 p79 (PDF index 78) argument.

Validation: direct authored-content and prerequisite comparison; no mathematical repair or open obligation identified for this item. Next: continue in manifest order.

### lem-finite-formula-witness-criterion — accepted

Both directions checked. Agreement transfers a matrix witness back to D; conversely atomic restriction, Boolean induction and the supplied witness condition yield all subformula agreements. Transitivity is unnecessary, nonemptiness is required, and empty family/tuple cases are covered. Compared Geschke Lemma 4.1 p10 and Freiburg 3.5.9 pp52–53.

Validation: direct authored-content and prerequisite comparison; no mathematical repair or open obligation identified for this item. Next: continue in manifest order.

### lem-finite-formula-witness-rank-bounds — accepted

For each fixed external matrix least witness ranks are uniquely definable. Replacement over a set of finite parameter tuples collects ordinal bounds; successor of the supremum enforces strict inequalities. For general W the least stage replaces rank and exhaustion/monotonicity suffice. False cases use zero; empty tuples still occur. Read full Geschke Theorem 4.3 proof pp10–11 and published minimum-rank/Collection proof; no witness-choice map.

Validation: direct authored-content and prerequisite comparison; no mathematical repair or open obligation identified for this item. Next: continue in manifest order.

### thm-montague-levy-finite-reflection — accepted

Subformula closure is finite. Unique finite recursion attempts and Replacement yield the omega-sequence even though b is a class function. Its strictly increasing supremum is a limit above alpha. Continuity ensures each finite parameter tuple lies in one earlier stage, where its witness is bounded into the next. The reviewed criterion gives full agreement. Nonempty W starts at a nonempty stage; empty W uses only the stated relativization convention. All ZF uses and absence of AC checked against full Geschke 4.3 pp10–11.

Validation: direct authored-content and prerequisite comparison; no mathematical repair or open obligation identified for this item. Next: continue in manifest order.

### cor-transitive-models-of-each-finite-zf-fragment — accepted

Each fixed finite conjunction is a theorem of its ambient theory. Reflection transfers its sentences to a transitive stage above the prescribed bound. Empty fragment and infinite-carrier bound handled. AC is used exactly when the reflected ambient ZFC axiom list includes Choice; no uniform internal all-coded-fragment assertion is inferred.

Validation: direct authored-content and prerequisite comparison; no mathematical repair or open obligation identified for this item. Next: continue in manifest order.

### thm-collapse-of-elementary-membership-submodels — accepted

External Foundation applies to actual restricted membership. Elementarity and internal Extensionality provide a distinguishing predecessor in X. The published Mostowski theorem supplies set collapse and uniqueness; inverse isomorphism followed by elementary inclusion gives the claimed embedding and preserves countability. Compared full Geschke 4.5–4.6 pp11–12; no AC.

Validation: direct authored-content and prerequisite comparison; no mathematical repair or open obligation identified for this item. Next: continue in manifest order.

### lem-collapse-fixes-transitive-parts-and-orders-ordinals — accepted

Membership induction on transitive A fixes all predecessors. The collapse equation identifies the ordinal trace image, whose transitivity and inherited well-order are proved explicitly. A transitive trace is its own order type; this does not require the original ordinal to be fixed. Geschke Exercise 4.7 p12 is supplemented by the complete local proof.

Validation: direct authored-content and prerequisite comparison; no mathematical repair or open obligation identified for this item. Next: continue in manifest order.

### thm-countable-elementary-submodels-and-transitive-collapses — accepted

All published downward LS hypotheses checked: infinite set carrier, one binary symbol, kappa=aleph_0, and countable parameter set. AC is declared for witness selection and cardinal bounds. The collapse itself uses ZF. Singleton parameter containment is correctly distinguished from containing all its members. Geschke 4.4 and 4.6 pp11–12.

Validation: direct authored-content and prerequisite comparison; no mathematical repair or open obligation identified for this item. Next: continue in manifest order.

### cor-countable-transitive-models-of-fixed-zfc-fragments — accepted

Adding Extensionality keeps the external fragment finite; reflection above omega supplies an infinite stage. Countable LS with empty parameters and collapse preserve each sentence. AC remains necessary in the stated construction for ZF fragments too. No uniform internal all-fragment or full-theory model existence is inferred. Geschke 4.6 pp11–12.

Validation: direct authored-content and prerequisite comparison; no mathematical repair or open obligation identified for this item. Next: continue in manifest order.

### cor-elementary-membership-chains-and-collapse-compatibility — accepted

Published chain-union proof and statement read: nonempty set ordinal index and no continuity requirement. Extensionality transfers from a stage. Applying collapse to each structure itself is legitimate; uniqueness and Replacement collect the maps without Choice. Conjugation is elementary, cancellation proves both coherence equations, and inclusion is not asserted.

Validation: direct authored-content and prerequisite comparison; no mathematical repair or open obligation identified for this item. Next: continue in manifest order.

### rem-condensation-requires-additional-constructible-structure — accepted

The two accepted collapse suppliers provide only transitive images and ordinal order types. The remark accurately reserves identification with a constructible level for an additional definability/condensation proof, and consumes no Recorded theorem. Compared Geschke section4 and section5 boundary pp12–13.

Validation: direct authored-content and prerequisite comparison; no mathematical repair or open obligation identified for this item. Next: continue in manifest order.

### rem-shoenfield-absoluteness-scope-orientation — accepted

Read Kamensky section5.2 pp45–47, Definition5.2.3, Remark5.2.4, and entire Theorem5.2.8 sketch. The sketch explicitly omits its coding argument. This orientation correctly distinguishes real projective quantifiers from set Levy quantifiers, supplies no Shoenfield theorem, and relies on no omitted proof. URL https://mkamensky.github.io/teaching/2012f/set-theory/notes.pdf.

Validation: direct authored-content and prerequisite comparison; no mathematical repair or open obligation identified for this item. Next: continue in manifest order.

### ex-bounded-set-formulas-and-witness-direction — accepted

Explicit bounded subset, pair and injection tests hold for the sole graph pair (0,1), including totality and uniqueness. Transitive graph agreement requires the graph as a parameter; existential upward transfer retains that witness and does not imply downward existence. Compared Freiburg 3.5.6/3.5.8 pp51–52 and reviewed local bounded graphs.

Validation: direct authored-content and prerequisite comparison; no mathematical repair or open obligation identified for this item. Next: continue in manifest order.

### ex-internal-power-set-can-miss-an-external-subset — accepted

Given the conditional countable transitive ZF model, omega absoluteness and an injection give a surjection by unique inverse with empty default, without Choice. The diagonal differs from every listed subset, hence lies outside M. Internal Power Set plus bounded subset agreement identifies exactly the subsets in M; restricting the injection proves its countability. No existence of such a model is claimed.

Validation: direct authored-content and prerequisite comparison; no mathematical repair or open obligation identified for this item. Next: continue in manifest order.

### ex-reflection-of-two-formulas-with-parameters — accepted

Ranks 1 and 2 give the stated V2/V3 parameter/witness distinction. Subformula closure and reflection above rank(a)+1 yield all-tuple agreement for the arbitrary fixed pair, whereas witnesses at one tuple would not suffice. The reviewed reflection theorem, compared with Geschke 4.3 pp10–11, supplies exactly this stronger conclusion.

Validation: direct authored-content and prerequisite comparison; no mathematical repair or open obligation identified for this item. Next: continue in manifest order.

### fs-a-countable-elementary-submodel-is-a-transitive-subset — accepted

Hartogs(omega)=omega_1 in ambient ZFC. V_(kappa+omega) is infinite, transitive, contains kappa and satisfies Extensionality, so countable LS with singleton parameter applies. Transitivity of X would inject kappa into omega, contradicting Hartogs. Its ordinal collapse value is countable and therefore differs from kappa. All AC uses are declared.

Validation: direct authored-content and prerequisite comparison; no mathematical repair or open obligation identified for this item. Next: continue in manifest order.

### ex-collapse-chain-maps-need-not-be-inclusions — accepted

Conjugation computes each ordinal value and predecessor order position correctly; domain inclusions justify cancellation for three stages. The concrete two-stage chain uses declared AC and LS with parameter kappa=Hartogs(omega). The upper transitive stage has identity collapse; the countable lower trace collapses to tau != kappa and j(tau)=kappa, explicitly disproving inclusion.

Validation: direct authored-content and prerequisite comparison; no mathematical repair or open obligation identified for this item. Next: continue in manifest order.

### arithmetization-incompleteness-and-relative-consistency — accepted

Read full page introduction and all 28 referenced authored items. Ordering supplies syntax, Q representation, diagonalization and PA certificates before their consumers. The introduction accurately distinguishes Q numeralwise graphs from PA Sigma1 equivalence and separates ordinary/transitive models and internal/external consistency interfaces.

Validation: direct authored-content and prerequisite comparison; no mathematical repair or open obligation identified for this item. Next: continue in manifest order.

### arithmetization-incompleteness-and-relative-consistency-examples — accepted

Read full introduction and all five examples/refutations. Conditional consistency/model hypotheses are retained, with external truth distinguished from nonstandard proof belief. Every listed example has a reviewed A-page supplier; no additional claim in page prose.

Validation: direct authored-content and prerequisite comparison; no mathematical repair or open obligation identified for this item. Next: continue in manifest order.

### reflection-absoluteness-and-elementary-submodels — accepted

Read full introduction and all 18 items. Local suppliers precede consumers; graph agreement, rank hypotheses, directional absoluteness, choice-free reflection and AC-dependent countable LS match the authored results. Collapse uses actual membership; orientation remarks supply no unproved theorem.

Validation: direct authored-content and prerequisite comparison; no mathematical repair or open obligation identified for this item. Next: continue in manifest order.

### reflection-absoluteness-and-elementary-submodels-examples — accepted

Read full introduction and all five examples/refutations. Conditional internal-power-set failure is preserved; the nontransitive submodel and non-inclusion map have explicit Hartogs witnesses. Page prose and inventory agree with the reviewed claims.

Validation: direct authored-content and prerequisite comparison; no mathematical repair or open obligation identified for this item. Next: continue in manifest order.

## Batch 14 — completed handoff and checks

Outcome: 55 accepted items, one repaired item, and four accepted pages; 60 exact authored obligations, no omissions or duplicates, no escalations or unresolved mathematical/source obligations. The only repair is the Euclidean termination induction in `lem-godel-beta-coding-and-q-remainder`, proof step 2.1: use strong induction on the second coordinate uniformly in the first, since the sum need not decrease for u<v. The exact contract derivation was updated. Defect `p2c24-g14-beta-descent` is uniquely owned, fixed in the append-only defect ledger, and has repair_confidence 1.

No new local suppliers, dependency changes, stable-ID changes, withdrawals, page-order changes, or statement changes were needed. The existing manifest, provenance (ai-altered), and dependency records remain accurate. Required shared-plan amendments: none. Required Phase-2 amendments: none. All HIGH/CRITICAL contract entries have specific completed risk reviews recorded during their item reads.

Sources were independently read, including Moschovakis *Logic Notes* 1E.4–1E.6 pp19–20, 4B.5–4B.14 pp147–149, and 4C.12–4C.13 pp154–156 (https://www.math.ucla.edu/~ynm/lectures/lnl.pdf); Geschke section4 pp9–12 and section5.1 (https://www.math.uni-hamburg.de/home/geschke/teaching/ModelsSetTheory.pdf); Marks section18, especially Proposition18.13 p79 in the currently retrieved PDF (https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf); Freiburg 3.5.5–3.5.9 pp51–53 (https://home.mathematik.uni-freiburg.de/maxwell/coursenotes-settheoryandindependenceproofs.pdf); and Kamensky section5.2 pp45–47 (https://mkamensky.github.io/teaching/2012f/set-theory/notes.pdf). Exact uses and checked hypotheses are recorded per item. The existing source reconciliation permits Moschovakis; this review makes no claim to have retrieved Avigad. Kamensky's omitted coding argument is not consumed: the assigned remark is orientation only.

No defective published item was found in the suppliers actually inspected; no published-ledger entry or content edit was warranted. This is not an exhaustive published-content audit. The canonical frontier refresh succeeded; batch 14 is reviewed and has zero outgoing cross-batch edges, agreeing with its empty owned input. No changing frontier supplier is used by these consumers.

Completed local checks:

- Reflow and precheck of the repaired beta lemma: pass, 1 checked, 0 failing.
- Strict proof-contract check: 56/56 items, 0 errors and 0 warnings.
- Owned risk report with --require-reviewed: 56 items routed, 0 errors.
- Batch content-policy check: 56 scoped items, 0 errors and 0 warnings.
- Rendercheck: 17,479 files passed. An attempted --help invocation runs the tool's default read-only full scan; it completed successfully. No extra content was edited.
- Defect-ledger validation for this run: 3 rows checked, 0 errors; the repair row exists exactly once.
- Decision coverage: exactly the scope's 56 item IDs and four page IDs, with required routes and nonempty evidence.

Blockers: none. Next action belongs to the engine and serial lead: retain these batch decisions for the full group join and subsequent independent 6C/6D protocols. This report records local review and checks only.

## Batch 16 — completed authored-content review

Dispatch 6b-g-16; only scope-16 is assigned. Reviewed all 65 items and both pages: 64 accepted, 3 repaired, 0 escalated. Other batches and supplemental decisions are preserved. This is the local 6B review; the engine retains scheduling and later audit transitions.

### def-cantor-sequence-space-for-descriptive-set-theory — accepted

The inherited Baire cylinders give exactly the binary-cylinder topology; explicit constant zero supplies nonemptiness in ZF. Read published def-baire-sequence-space and contract boundaries. Local check: direct argument review; no content change or defect. Source: current item and cited published definition paths in `items/`; external comparison not required for these elementary definitions/argument.

### def-trees-and-bodies-on-discrete-alphabets — accepted

Finite function sets, prefix closure and body are coherent in ZF. Restricting a proper extension proves the immediate-child equivalence without branch choice. Empty alphabet, empty tree and root-only tree claims checked against def-the-set-of-functions-from-one-set-to-another and contract. Local check: direct argument review; no content change or defect. Source: current item and cited published definition paths in `items/`; external comparison not required for these elementary definitions/argument.

### lem-closed-subsets-of-baire-space-are-tree-bodies — accepted

Steps 1.1–3.1 prove both inclusions using cylinder separation. Pruning uses an individual existing branch witness, with no simultaneous choice. Empty prefix, empty F and root-only tree boundaries checked; both cited definitions and contract read. Local check: direct argument review; no content change or defect. Source: current item and cited published definition paths in `items/`; external comparison not required for these elementary definitions/argument.

### def-analytic-and-coanalytic-by-closed-projection — accepted

Closed-projection convention is explicit, complements are relative to X, and empty/full witnesses work also for empty X. Published Polish and product definitions read; no alternative analytic characterization is assumed. Read current item, its contract and relevant dependency statements. Local check: direct argument review, no repair. Source evidence: `items/def-analytic-and-coanalytic-by-closed-projection.md` and declared supplier paths.

### def-synchronous-trees-and-projection-bodies — accepted

Equal-length restriction proves section prefix closure and the branch equivalence by substitution, including length zero and empty/root-only bodies; no branch selection is asserted. Read current item, its contract and relevant dependency statements. Local check: direct argument review, no repair. Source evidence: `items/def-synchronous-trees-and-projection-bodies.md` and declared supplier paths.

### lem-analytic-subsets-of-baire-space-have-tree-projections — accepted

Steps 1.1–4.1 synchronize product cylinder lengths with max(k,l), construct exactly the closed witness body and prove both projection directions and the section equivalence. Previously read suppliers suffice in ZF; empty witnesses checked. Read current item, its contract and relevant dependency statements. Local check: direct argument review, no repair. Source evidence: `items/lem-analytic-subsets-of-baire-space-have-tree-projections.md` and declared supplier paths.

### def-gale-stewart-games-on-pruned-trees — accepted

Total legal strategies, parity and vacuous branch quantification are specified without claiming arbitrary-alphabet branch existence. Cylinder intersection and complement formulas are valid including empty cylinders. Read current item, its contract and relevant dependency statements. Local check: direct argument review, no repair. Source evidence: `items/def-gale-stewart-games-on-pruned-trees.md` and declared supplier paths.

### def-axiom-of-determinacy-for-natural-number-games — accepted

AD quantifies all payoffs on the full natural-number tree only. Constant-zero strategies settle empty/full payoffs; neither DC nor arbitrary-alphabet determinacy is inferred. Read current item, its contract and relevant dependency statements. Local check: direct argument review, no repair. Source evidence: `items/def-axiom-of-determinacy-for-natural-number-games.md` and declared supplier paths.

### def-game-trees-with-terminal-taboos — accepted

Terminal labels partition terminal nodes independently of parity; terminal cylinders are singletons and infinite plays form a closed subspace. Fixed-history subtrees preserve parity and create no new terminal nodes. Terminal root handled. Read current item, its contract and relevant dependency statements. Local check: direct argument review, no repair. Source evidence: `items/def-game-trees-with-terminal-taboos.md` and declared supplier paths.

### def-countable-borel-hierarchy — accepted

Positive-rank varying-lower-rank union convention is coherent. Published transfinite recursion applies to the explicitly total pair-valued rule; intersection construction gives the least Borel sigma-algebra. No ZF exhaustion or arbitrary-space monotonicity is asserted. Read current item, its contract and relevant dependency statements. Local check: direct argument review, no repair. Source evidence: `items/def-countable-borel-hierarchy.md` and declared supplier paths.

### lem-metric-borel-hierarchy-monotonicity-and-operations — accepted

Closed approximants handle U=X without distance-to-empty-set conventions. Direct inclusions precede their use in the simultaneous operations induction; lower-rank maximum justifies intersections. AC selects countable representations at 1.2. Empty finite operations checked. Read the complete authored argument and contract derivations/boundaries with the used supplier statements. No repair or new supplier.

### def-well-founded-borel-evaluation-codes — accepted

Labels constrain every node; immediate-child minimality is the required well-founded relation, not a silently equivalent branch criterion. Empty union is valid and the empty tree invalid; all codes form a set. Read the complete authored argument and contract derivations/boundaries with the used supplier statements. No repair or new supplier.

### lem-well-founded-borel-code-evaluation — accepted

Total sanitized recursion satisfies the published well-founded recursion hypotheses. Progressive uniqueness and Borelness are valid. Shallow open codes and tagged graftings prove converse under exactly the specified code-selection AC; minimality in a single constituent proves graft well-foundedness. Read the complete authored argument and contract derivations/boundaries with the used supplier statements. No repair or new supplier.

### lem-cantor-and-baire-sequence-coding — accepted

Checked the strict ball radius 2^-n, unique eventual coordinates, finite-word dense family and least-bit compactness argument in ZF. Pairing diagonal intervals and both block-code inverses are valid; finite-support integer injection handles zero. No arbitrary product theorem is consumed. Read the complete authored argument and contract derivations/boundaries with the used supplier statements. No repair or new supplier.

### lem-countable-borel-hierarchy-exhaustion-and-pullbacks — accepted

Constant representations move Sigma alpha into Pi alpha+1 without metric monotonicity; delta=sup(alpha_n+2) strictly exceeds each alpha_n+1. Published boundedness hypotheses are met by AC. Preimage induction and both trace directions hold; lift selection is explicitly AC. Read the complete authored argument and contract derivations/boundaries with the used supplier statements. No repair or new supplier.

### thm-universal-borel-sets-and-strict-hierarchy — accepted

Basis-ball construction, set-indexed cofinal sequences and total recursion checked. Increasing n_j place each lower-rank summand at a sufficient cofinal rank, including successors; unused sections are empty. Diagonal contradiction and ambient trace lifting prove both strict differences. AC uses are precisely stated. Read the complete authored argument and contract derivations/boundaries with the used supplier statements. No repair or new supplier.

Source comparison for these six items: https://homepages.math.uic.edu/~marker/math512/dst.pdf, Definition 1.7/Exercise 1.11 p4; Lemmas 2.5–2.6 and Exercise 2.8 pp15–16; Definition 2.36, Lemma 2.37 and Corollary 2.38 pp23–24; Definitions 7.1–7.2/Exercise 7.3 pp62–63. Relevant passages read through the web PDF text. Local proofs justify the general topological exhaustion and enumerated-basis coding extensions; Marker supplies comparison, not missing hypotheses. Local PDF extraction unavailable (`pdftotext` absent); web full-text reading succeeded. No source blocker.

### lem-terminal-reachability-and-residual-game-positions — accepted

Restriction and fixed child-strategy pasting establish exactly the parity-dependent child equivalences. Opposite reachability strategies produce a maximal play contradicting disjoint terminal labels. AC selectors are set-sized; no uniform termination bound is needed. Full item and contract reviewed against used supplier statements. No repair.

### lem-taboo-games-reduce-to-pruned-residual-games — accepted

All-prefix avoidance makes S a tree. At each residual node one child avoids both reachability sets by the distinct own/opponent clauses. First opponent exit enters the reviewing player’s winning reachability set. Total defaults and no-exit cases prove transfer; trace identities preserve ranks. Full item and contract reviewed against used supplier statements. No repair.

### thm-gale-stewart-open-determinacy — accepted

Finite visits to cylinders contained in the open payoff are the precise reachability objective. Restriction/pasting yields an avoiding opponent strategy outside W. Complement swaps payoff owner while preserving turns; residual reduction supplies taboo cases. AC for arbitrary-alphabet defaults is declared. Full item and contract reviewed against used supplier statements. No repair.

### def-game-covering-and-k-covering — accepted

Read all covering requirements against BLM definition before Lemma 2. Tagged players, total finite-depth locality, target taboo reflection and losing short lifts are explicit. Identity through k includes labels and all prescribed strategy values below k. Full item and contract reviewed against used supplier statements. No repair.

### lem-game-covering-transfers-winning-strategies — accepted

Winning excludes the losing-short-lift alternative. Infinite lifts transfer payoff membership for either player; exact finite target lifts are terminal, so target taboo reflection excludes the losing label. No converse taboo implication is assumed. Full item and contract reviewed against used supplier statements. No repair.

### lem-game-covering-composition-and-continuity — accepted

Successive two-step lifting covers both proper-lift cases, using reflection when only the first lift is proper. Locality and finite-depth identities compose; cylinder preimages prove continuity even with empty branch spaces. No infinite choice required. Full item and contract reviewed against used supplier statements. No repair.

### cor-unraveling-covers-give-determinacy — accepted

The source clopen payoff satisfies the open taboo theorem with its declared AC hypothesis, and the same-player transfer applies to maximal plays including terminal roots. Both supplier contracts and boundary cases checked. Full item and contract reviewed against used supplier statements. No repair.

Source comparison: Buffard–Levrel–Mayo https://arxiv.org/html/2401.09659v1, opening definitions through composition and Corollary 3 (web lines 28–153), read in full. The authored all-prefix residual construction avoids the source’s invalid downward-closure claim; the finite-lift proof uses target terminality correctly. These are already authored fixes, not new repairs in this review.

### lem-stabilizing-game-coverings-have-inverse-limits — accepted

Stabilized next depth verifies terminal labels; finite-depth locality makes total strategy extensions independent of choices. Coherence is checked on common later stages. Successive maximal lifts are chosen from sets, not independent depth-wise witnesses. All-infinite prefixes yield equality; finite lengths decrease then stabilize, and proper-lift losing labels propagate by reflection. Complete argument and contract read.

### lem-closed-payoffs-admit-unraveling-covers — repaired

Minimal nonterminal disjoint cylinders form an antichain; acceptance/challenge preserves target terminals and makes infinite payoff clopen. I switches to a forced-history challenge at X, while II’s nonchallenge set Y forces acceptance and supplies witnesses outside Y. Fixed selectors give locality. Repaired step 5.1 to preserve all source values below K even on inconsistent histories; defaults now apply only at depth at least K. This meets the full k-covering identity while leaving lifting unchanged. Reflow unchanged; item precheck passed. Complete argument and contract read.

### thm-borel-payoffs-admit-unraveling-covers — accepted

Full lower-rank induction ranges over all set trees. Minimum-rank successor sets and their omega closure form a set on which AC chooses a tower, meeting published Collection and recursion interfaces. k+n stabilization meets inverse-limit hypotheses; each pulled-back constituent is clopen, their union open, and the repaired open-cover supplier finishes the composition. Complete argument and contract read.

### thm-borel-games-are-determined — accepted

Depth-zero unraveling and the determinacy transfer have matching set-tree, taboo and ZFC hypotheses. Full natural-number tree is the no-taboo special case. No choice-free claim is inferred. Complete argument and contract read.

Covering source evidence: Martin, https://www.math.ucla.edu/~dam/booketc/D.A._Martin,_Determinacy_of_Infinitely_Long_Games.pdf, complete Lemmas 2.1.6–2.1.7 and Theorems 2.1.8–2.1.9, pp68–77 (web lines 3832–4284). His specified-lift formulation is distinguished from the local existential formulation: local successive lifting supplies coherence. Page 74 explicitly constrains inconsistent-history extension by finite-depth identity, supporting the local repair. Defect `p2c24-g16-cover-identity-defaults` appended as fixed using the defect-ledger interface. No new item, page, dependency, AC assumption or shared-plan/Phase-2 amendment. Published content unchanged; the defective item is draft.

### lem-natural-number-game-strategies-have-continuum-many-plays — accepted

Finite strata give a bijective enumeration of parity positions; unrestricted strategy tables are exactly Baire sequences. Opponent-coordinate extraction and deterministic play recursion are inverse maps for both players, including initial I move. ZF suffices. Full item and contract reviewed with cited mathematical inputs. No edits needed.

### thm-choice-produces-an-undetermined-natural-number-game — accepted

Initial-cardinal indexing and published infinite absorption bound used plays by fewer than kappa at every stage, including singular kappa and finite stages. Least eligible pair recursion is total and its defaults unused. Pairwise distinct x/y choices defeat every strategy with the correct payoff sign. Full item and contract reviewed with cited mathematical inputs. No edits needed.

### thm-ad-implies-countable-choice-for-baire-space — accepted

A fixed I strategy selects just one nonempty A_n and can be defeated without simultaneous choice. AD then supplies one II strategy; uniquely determined zero-opponent simulations and Replacement give all a_n. No DC inferred. Full item and contract reviewed with cited mathematical inputs. No edits needed.

### lem-perfect-set-game-strategy-dichotomy — accepted

Full-history block game has an output bit every round. I outcomes inject continuously and compactness proves closed perfect image. For II, no barrier gives a least-block play in A; a fixed full barrier history reconstructs a unique x by querying alternative blocks at that same history. Least barrier codes inject A into N. All empty-block cases checked. Full item and contract reviewed with cited mathematical inputs. No edits needed.

### lem-polish-closed-products-and-baire-parametrization — accepted

Sum metric gives complete finite products with explicit empty/no-factor cases. Closed-subspace separability uses declared AC on nonempty basis traces. Nested small-ball closures give unique branch limits; least-child paths prove surjectivity and shrinking diameter proves continuity. Nonempty parametrization hypothesis retained. Full item and contract reviewed with cited mathematical inputs. No edits needed.

Source: Lietz https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf, Claims 10.11–10.12 and Proposition 10.14 pp100–101. Full claim proofs read; local full-history reconstruction makes the required dependence precise. The published cardinal inputs were checked at their statements and hypotheses.

### lem-analytic-countable-operations-and-borel-inclusion — accepted

Tagged first coordinate makes the union witness closed despite countably many F_n; coordinate pairing makes the intersection witness closed, with AC needed for its reverse projection inclusion. Product pullback preserves closedness. Analytic/coanalytic sets form an open-containing sigma-algebra via these operations. Direct review of complete local argument, contract and already reviewed suppliers. No repair or unresolved prerequisite.

### thm-analytic-closed-projection-and-continuous-image-equivalence — accepted

Nonempty closed witnesses are Polish and parametrizable; reversed continuous graphs are closed. Shrinking-basis rectangle formula characterizes Borel graphs in both directions. Parametrizations into subspaces justify maps defined only on Borel subsets; graph intersections and projection prove Borel image/preimage closure, including empty spaces. Direct review of complete local argument, contract and already reviewed suppliers. No repair or unresolved prerequisite.

### thm-disjoint-analytic-sets-have-borel-separators — accepted

Union over n of intersections over m correctly separates parent image pairs. Least inseparable-child recursion builds two independently indexed branches; continuity and disjoint images yield disjoint neighbourhoods and a forbidden separator. Empty sets and countable separator AC are explicit. Direct review of complete local argument, contract and already reviewed suppliers. No repair or unresolved prerequisite.

### cor-borel-iff-analytic-and-coanalytic — accepted

Both directions follow from the reviewed Borel inclusion and separation statements under ZFC. A separator between A and its complement must equal A, including empty/full cases. Direct review of complete local argument, contract and already reviewed suppliers. No repair or unresolved prerequisite.

### def-souslin-operation-on-set-schemes — accepted

Root-inclusive branch intersections are well-defined set operations in ZF. Finite-prefix normalization is decreasing and preserves each branch intersection in both directions; empty root forces empty result. Direct review of complete local argument, contract and already reviewed suppliers. No repair or unresolved prerequisite.

### thm-analytic-sets-are-souslin-operations-on-closed-sets — accepted

One failing prefix gives an open neighbourhood outside the closed witness set, including n=0. Conversely closures of continuous images of cylinders have exactly the singleton branch intersections by metric separation; raw image closedness is never assumed. All-empty scheme handles empty A. Direct review of complete local argument, contract and already reviewed suppliers. No repair or unresolved prerequisite.

### Batch 16 — lem-uncountable-analytic-splitting

Accepted. AC selects enumerations of the countably many nonempty countable basis intersections. Their union is countable; two distinct points outside it have the required disjoint arbitrarily small basis neighbourhoods. No analyticity assumption is used. Source: current item and declared dependencies; Marker, *Descriptive Set Theory*, corresponding locators in item references. No repair or shared-plan amendment.

### Batch 16 — thm-uncountable-analytic-sets-contain-cantor-copies

Accepted. Each uncountable cylinder image splits into disjoint open pieces; countable-union countability under AC supplies strict child cylinders with uncountable images. Nested words define a continuous injection; compactness and metric separation prove a closed perfect Cantor image. Empty and singleton inputs are excluded by uncountability. Source: current item and declared dependencies; Marker, *Descriptive Set Theory*, corresponding locators in item references. No repair or shared-plan amendment.

### Batch 16 — cor-uncountable-polish-borel-hierarchy-is-strict

Accepted. The reviewed Cantor-copy and universal-set suppliers give a Pi_alpha witness outside Sigma_alpha. Metric opens are F_sigma including empty and full opens, and constant witness sequences prove strict inclusion for every positive alpha<beta; complements give the dual. Source: current item and declared dependencies; Marker, *Descriptive Set Theory*, corresponding locators in item references. No repair or shared-plan amendment.

### Batch 16 — def-descriptive-tree-rank

Accepted. The finite length-plus-sum enumeration is bijective, prefix-closure failure has a finite coordinate witness, and the closed-subspace Polish supplier is licensed by AC. The published rank definition supplies a total ordinal recursion; empty and root-only trees explicitly share rank zero. Source: current item and declared dependencies; Marker, *Descriptive Set Theory*, corresponding locators in item references. No repair or shared-plan amendment.

### Batch 16 — lem-countable-tree-ranks-and-rank-monotonicity

Accepted. Least-coded children construct a branch from failure of child-minimality. Well-founded induction plus countable ordinal boundedness gives countable ranks; proper extension maps decrease target ranks sufficiently for monotonicity. Decreasing sequences below alpha realize alpha, including root-only alpha=0. Source: current item and declared dependencies; Marker, *Descriptive Set Theory*, corresponding locators in item references. No repair or shared-plan amendment.

### Batch 16 — thm-analytic-families-of-well-founded-trees-have-bounded-rank

Accepted. The combined synchronous witness tree is prefix closed and countable. Any branch forces each coordinate into f(a) by continuity, contradicting well-foundedness. Root-preserving extension embeddings bound all nonempty member ranks; empty members and empty combined tree have rank zero. Successor of the combined rank gives the strict countable bound. Source: current item and declared dependencies; Marker, *Descriptive Set Theory*, corresponding locators in item references. No repair or shared-plan amendment.

### Batch 16 — thm-ill-founded-trees-are-analytic-non-borel

Accepted. The branch relation is closed by a finite missing-prefix witness, including the empty tree root. Its projection is IF by the reviewed branch equivalence. Analytic boundedness of WF would contradict realization of the very countable bound, so WF is nonanalytic and IF non-Borel under the explicitly licensed ZFC suppliers. Source: current item and declared dependencies; Marker, *Descriptive Set Theory*, corresponding locators in item references. No repair or shared-plan amendment.

### Batch 16 — def-property-of-baire-for-subsets

Accepted. The ambient-space convention agrees with the published meagre definition and uses an actual sequence of nowhere-dense witnesses. Complement contains the intersection of dense opens, without asserting a single dense open. Empty and full sets satisfy the definition without choice. Dependencies: the current item Facts & Assumptions, checked against their named suppliers. No repair or shared-plan amendment.

### Batch 16 — lem-baire-property-sigma-algebra-and-borel-regularity

Accepted. Nowhere-dense refinement and AC selection of witness sequences give the countable meagre ideal. Closed interiors and open boundaries have nowhere-dense errors without separation axioms. Complement and union errors establish the sigma-algebra; explicit U minus closed-witness union and closure(U) plus that union supply the two regular approximants. Dependencies: the current item Facts & Assumptions, checked against their named suppliers. No repair or shared-plan amendment.

### Batch 16 — lem-sequence-spaces-continuously-inject-into-the-real-line

Accepted. The published ternary theorem supplies convergent zero-based series and strict first-difference injectivity in ZF. The geometric tail 3^-n gives continuity on cylinders; composing with the reviewed block map preserves continuity and injectivity. Constant sequences give endpoints 0 and 1. Dependencies: the current item Facts & Assumptions, checked against their named suppliers. No repair or shared-plan amendment.

### Batch 16 — thm-souslin-operation-preserves-the-baire-property

Accepted. The locally meagre basis union gives an envelope even in a non-Baire ambient space: a nonmeagre excess would force its witnessing open into that union and make it meagre. Finite prefix intersections retain envelope minimality, and removing countably many child defects allows least-child recursion including the root. Closed-scheme representation yields the analytic consequence. Marker Lemma 4.21 and Theorem 4.22, printed pp39–40, full argument read at web lines2649–2717; countable basis and AC hypotheses checked. Dependencies: the current item Facts & Assumptions, checked against their named suppliers. No repair or shared-plan amendment.

### Batch 16 — thm-souslin-operation-preserves-lebesgue-measurability — repaired

Finite boxes make equal-outer-measure hulls finite before Caratheodory splitting, so no infinity subtraction occurs. The published hull, complete-measure and Borel-inclusion suppliers explicitly require countable choice, supplied by A1. Normalized envelopes leave null child defects; least-child recursion and completeness prove preservation including an empty root. Marker Exercise4.24/Theorem4.25 pp40–41 lines2718–2734 read; the source leaves this as an exercise and its containment typo is not consumed. Corrected Q_j to (-j,j]^d, the exact half-open box convention in def-half-open-box consumed by F4. These boxes have finite measure (2j)^d and cover R^d, so every hull and envelope inference remains unchanged. Full measure and branch argument reviewed; no additional supplier or hypothesis needed. Defect `p2c24-g16-finite-box-convention` is closed with repair_confidence 1. Item and contract are synchronized; the owned manifest strategy uses the corrected box convention. Reflow unchanged; item precheck passed. The exact shared-plan metadata amendment is recorded below.

### Batch 16 — def-banach-mazur-category-game

Accepted. Strict word growth and nested interval closures yield unique outcomes in ZF; next-closure containment puts real outcomes inside every move. Rational density and enumeration give least legal continuations. First-illegal-loss coding and legal defaults correctly restrict a winning natural-number strategy. Dependencies checked in current named items and contract. No repair or shared-plan amendment.

### Batch 16 — lem-banach-mazur-game-category-characterization

Accepted. The response unions D_p are dense open, including boundary points of real intervals. A point avoiding all closed complements recursively follows least responses and produces exactly that point. Open-subspace transfer, reversal after the first move with shifted bounds, and least refinements prove both characterizations and nonmeagreness without DC. Hachtman–Palumbo Definition7.7 and complete following claims pp23–24 read, web lines1457–1525; the local interval extension checks every closure and length hypothesis. Dependencies checked in current named items and contract. No repair or shared-plan amendment.

### Batch 16 — thm-ad-implies-baire-property

Accepted. AD determines the first-illegal-loss coded games. Countable choice for Baire-real codes, already proved from AD, selects actual nowhere-dense witness sequences on contributing basic opens. I winning for A minus their union would make the empty set comeagre in a nonmeagre basic open. II therefore supplies the remaining witnesses and interleaving gives the symmetric difference. Neither full AC nor DC is consumed. Dependencies checked in current named items and contract. No repair or shared-plan amendment.

### Batch 16 — thm-choice-bernstein-set-pathology

Accepted. The published well-order Bernstein construction supplies existence, and symmetry excludes perfect subsets on both sides. Least rational binary interval refinement avoids any specified meagre cover and gives a closed nonempty set without isolated points by late sibling changes. This refutes meagreness and Baire property and hence countability and Borelness. AC explicitly supplies the published measure results countable-choice hypotheses; endpoint conventions are covered by their statements. Dependencies checked in current named items and contract. No repair or shared-plan amendment.

### Batch 16 — thm-choice-hamel-basis-pathology

Accepted. The published Hamel supplier proves the unique rational coefficient and a nonzero kernel vector. Rational multiples give dense fibers, yielding graph density and epsilon-one discontinuity everywhere. Infinitely many distinct small rational cosets of a finite-measure kernel slice force its measure to zero; countably many whole cosets would then make R null. The Borel zero-fiber refutes measurability of f. Nonzero divisions and finite bounding interval measures are justified. Dependencies checked in current named items and contract. No repair or shared-plan amendment.

### Batch 16 — lem-dyadic-coding-coin-measure-and-lebesgue-transfer

Accepted. Unique half-open dyadic membership gives the injection and Borel cylinder preimages in ZF. Nested closed intervals give continuous pi with pi(b(x))=x, enough for compact-copy transfer without endpoint ambiguity. Prescribed-start DC on finite selections gives countable choice, licensing the actual Lebesgue and interval suppliers. Borel pushforward has cylinder masses and finite total measure, so both continuity theorems apply. Selected closed/open approximants sandwich the preimage with a null Borel difference, including envelope values zero and one. Dependencies checked in current named items and contract. Martin source: https://seminariomatematico.polito.it/rendiconti/61-4/393.pdf. No repair or shared-plan amendment.

### Batch 16 — thm-ad-implies-perfect-set-property-for-sequence-spaces

Accepted. AD and the reviewed block-game dichotomy give the Cantor alternative; the block homeomorphism transfers it to Baire space. Real unit pieces use only the ZF injection and compact-transfer clauses. If every coded piece is countable, its enumeration is a Baire-real code and AD countable-real-choice selects the enumerations. Interleaving with explicit empty-piece defaults and least occurrence yields an injection into N, with no DC or unrestricted countable choice. Dependencies checked in current named items and contract. Martin source: https://seminariomatematico.polito.it/rendiconti/61-4/393.pdf. No repair or shared-plan amendment.

### Batch 16 — def-rational-determinacy-measure-game

Accepted. Full histories retain rational pairs as well as replies. The positive bound and pair-average constraint ensure a legal positive bit; (1,1) always supplies a legal I move, including v=1. First-illegal-loss coding and least legal defaults transfer coded winning strategies. No measure or determinacy assumption is hidden in the definition. Dependencies checked in current named items and contract. Martin source: https://seminariomatematico.polito.it/rendiconti/61-4/393.pdf. No repair or shared-plan amendment.

### Batch 16 — lem-determinacy-measure-game-inner-outer-comparison

Accepted. For I, zero-extended acceptable-node weights have nondecreasing level averages; decreasing finite cylinder unions give a closed subset of E of measure at least v. For II, infimum-empty=1 and nonnegative rational approximations (zero kept zero) prove the reverse average inequality. Least rational witnesses within delta*2^(-n-1) reconstruct consistent histories. Excluded-cylinder unions cover E and have measure at most v+delta; rational density removes delta. DC is used only through the probability supplier. Martin 2003, pp394–396, full Lemmas1–2 and rational-move paragraph read at web lines83–295; all approximation and continuity hypotheses checked. Dependencies checked in current named items and contract. Martin source: https://seminariomatematico.polito.it/rendiconti/61-4/393.pdf. No repair or shared-plan amendment.

### Batch 16 — thm-ad-and-dc-imply-lebesgue-measurability

Accepted. A hypothetical strict inner/outer gap contains a legal positive rational v. AD gives one of the two strategies, each contradicting its reviewed bound under separately assumed DC. Equal envelopes yield completed dyadic preimage measurability. Injection recovers each unit-interval subset and defined translated integer pieces give every real subset by sigma-algebra closure, licensed by DC-derived countable choice. No AC determinacy theorem is consumed. Dependencies checked in current named items and contract. Martin source: https://seminariomatematico.polito.it/rendiconti/61-4/393.pdf. No repair or shared-plan amendment.

### Batch 16 — ex-empty-and-single-branch-tree-bodies

Accepted. The empty-prefix test excludes any branch of the empty tree; unique prefix at length k+1 determines each coordinate in the singleton tree. A differing coordinate supplies an open complementary cylinder, proving closedness without choice. Dependencies: reviewed named local suppliers and current contract. No repair or shared-plan amendment.

### Batch 16 — ex-first-move-clopen-game

Accepted. Constant zero is legal at every I position including the root; the payoff cylinder and its complementary positive-first-digit cylinders are open. Every consistent play has first coordinate zero regardless of II, with the alternating example calculated correctly. Dependencies: reviewed named local suppliers and current contract. No repair or shared-plan amendment.

### Batch 16 — cex-taboo-winning-positions-need-not-contain-their-children

Accepted. The explicit tree is prefix closed, with terminal (0) taboo for II and the other ray infinite and forced. I reaches the taboo from the root but neither player reaches any terminal below (1). Deleting reachability-winning positions therefore removes a required prefix and retains its child. The claim concerns terminal reachability, not arbitrary infinite winningness; the source assertion and corrected residual interface are distinguished. Dependencies: reviewed named local suppliers and current contract. No repair or shared-plan amendment.

### Batch 16 — fs-every-set-of-reals-is-borel

Accepted. The reviewed AC supplier gives an undetermined payoff. Injectivity makes the continuous preimage of its real image exactly that payoff; Borel preimage closure and Borel determinacy would contradict undeterminedness. The counterexample is explicitly in ZFC and uses no unsupported continuous-image preservation claim. Dependencies: reviewed named local suppliers and current contract. No repair or shared-plan amendment.

### Batch 16 — ex-well-founded-borel-code-for-a-closed-basic-complement

Accepted. All four explicitly labelled rooted codes satisfy the local child constraints and well-foundedness. Evaluation yields the basic open, its closed complement, empty union, and whole space. Empty ambient space and empty/full basic opens remain valid; the empty underlying tree is correctly excluded. Dependencies: reviewed named local suppliers and current contract. No repair or shared-plan amendment.

### Batch 16 — page borel-analytic-sets-perfect-sets-and-determinacy

Accepted. The introduction accurately summarizes reviewed covering, analytic and regularity arguments and distinguishes ZFC pathologies, ZF+AD perfect-set/category results and separately assumed DC for measure. Vitali links state the earlier AC existence and nonmeasurability results. The 60 A items occur in supplier-before-consumer order; no Recorded result is consumed.

### Batch 16 — page borel-analytic-sets-perfect-sets-and-determinacy-examples

Repaired (repair_confidence 1). Corrected the introduction to describe the actual continuous injection of an AC undetermined payoff and its Borel-determinacy contradiction, instead of claiming transfer of the analytic tree example. The five examples are proved and use earlier A suppliers; empty trees, terminal reachability and rooted code conventions agree with the A page.

### Batch 16 — serial-lead amendments

No new items, dependencies, pages, pairs, statement changes or withdrawals. Two existing manifest proof strategies are synchronized with repairs. In `research/plan-spec.json` and any serially maintained Phase-2 strategy copies for `lem-closed-payoffs-admit-unraveling-covers`, replace the unrestricted default-move sentence with: “At every position of length m<k preserve the input strategy value, including inconsistent histories. Fix legal default moves independent of strategies, and at lengths m>=k assign them after the first inconsistent own move or losing short lift.” For `thm-souslin-operation-preserves-lebesgue-measurability`, replace `Q_j=[-j,j)^n` with `Q_j=(-j,j]^n`. Exact revised strategies are in the owned batch-16 manifest. The examples-page introduction is corrected in place; its manifest claim already matched the authored refutation. Historical scaffold review_status fields are preserved, not treated as current 6B decisions.

### Batch 16 — completed local checks and handoff

All 67 exact `authored:16:ID` obligations are present once in the merged group decisions: 63 accepted items, 2 repaired items, 1 accepted page and 1 repaired page. Three closed, uniquely owned defect rows are recorded: `p2c24-g16-cover-identity-defaults`, `p2c24-g16-finite-box-convention`, and `p2c24-g16-examples-refutation-description`. Each repaired decision has repair_confidence 1. No new local suppliers were needed; no statement, axiom base, stable ID, item order, dependency edge or selected pair was changed.

Checks actually run on the current owned artifacts:

- All 65 item paths supplied to precheck: 50 proof-bearing items checked, 0 failing; 15 definitions have no proof body.
- Strict proof-contract check: 65/65 items, 0 errors, 0 warnings.
- Content-policy: 65 scoped items, 0 errors, 0 warnings.
- Risk report with `--require-reviewed`: passed, all 39 required HIGH/CRITICAL reviews complete with item-specific evidence.
- Reflow for both changed items and the changed examples page: unchanged by formatter; both repaired items also passed individual precheck.
- Current item declarations match manifest dependencies; all intra-page suppliers precede consumers. Page inventories match the 60 A / 5 B manifest. Decision obligations and closed defect references were checked for exact scope and uniqueness.

Owned frontier input `research/phase-2-catchup-24-batch-16.cross-batch-dependencies.json` remains `[]`. Compared current explicit dependencies, item/page wiki links and page prerequisites with this run's batch manifests: no other-batch supplier edge exists. The authored arguments introduce no implicit changing-frontier supplier. No dependency edit occurred, so no ledger refresh was needed. No defective published item was identified in this review; no published-consumer entry or published-content edit is required. The external BLM downward-closure error is already handled by the authored residual construction and explicit counterexample, not a new published-library defect.

No unresolved mathematical, source or local prerequisite blocker remains for batch 16. The serial lead has the two exact strategy-metadata amendments above; the existing engine-owned 6C/6D audits and content-hash joins remain to run. No judge, stamp, self-certification, dispatch or transition was performed.

## Batch 15 — authored review in progress

Assigned scope: 94 items and four pages; review only batch 15. Existing batch 14/16 records are preserved. Decisions below are local mathematical reviews, not independent judgments or stamps.

### Batch 15 — def-boolean-algebra-for-stone-duality

Accepted. The explicit bounded distributive lattice and complement laws define Boolean algebras in ZF. Absorption gives equivalent meet/join order conventions. Bounds force a nonempty carrier; 0=1 forces the singleton algebra. Empty joins/meets are correctly 0/1. Source: current item and owning manifest/contract; Tressl, Stone Duality, §§2.1–2.3 (bibliographic locator only at this point). No repair, new supplier, shared-plan amendment or published defect. Local validation pending.

### Batch 15 — def-boolean-ideals-filters-and-primality

Accepted. Read the preceding Boolean definition. Downward ideals and upward filters have the correct bound and binary closure axioms. Prime and maximal always include properness; the trivial algebra has none. No existence principle or forcing-filter identification is asserted. Source: current item and owning manifest/contract; Tressl, Stone Duality, §§2.1–2.3 (bibliographic locator only at this point). No repair, new supplier, shared-plan amendment or published defect. Local validation pending.

### Batch 15 — def-boolean-homomorphism-and-quotient

Accepted. Read published def-equivalence-relation and the following congruence proof. The symmetric-difference relation, class operations and zero-fibre kernel are consistent; justified_by correctly assigns representative independence to lem-boolean-quotient-congruence. I=B is permitted without selecting representatives. Source: current item and owning manifest/contract; Tressl, Stone Duality, §§2.1–2.3 (bibliographic locator only at this point). No repair, new supplier, shared-plan amendment or published defect. Local validation pending.

### Batch 15 — lem-boolean-quotient-congruence

Accepted. Checked steps 1.1–3.1: splitting by a complementary pair gives the triangle inequality; the meet inequality and complement identity give congruence; equations descend to classes. Kernel is exactly I, including I=B. h kills differences, giving a representative-independent factor and surjectivity proves uniqueness. Only elementary Boolean identities and the reviewed definition are used; ZF suffices. Source: current item and owning manifest/contract; Tressl, Stone Duality, §§2.1–2.3 (bibliographic locator only at this point). No repair, new supplier, shared-plan amendment or published defect. Local validation pending.

Checkpoint: first four obligations complete. Next: generated-filter tests, finite atoms, BPI extension chain. All later item/page obligations remain unreviewed; no batch completion is claimed.

### Batch 15 — lem-generated-boolean-filter-and-ultrafilter-tests

Accepted. Steps 1.1–5.1 checked: concatenation gives filter generation including empty meet; adjoining a rejected b yields u meet b=0 and forces its complement. Pair decision is equivalent to primality and the two-valued homomorphism laws. Elementwise complementation preserves inclusion while reversing internal order and gives the correct ideal correspondence, including all converses. No AC or nontriviality omission. Read current item, manifest, contract and named suppliers. No repair or amendments; validation pending.

### Batch 15 — lem-finite-boolean-algebras-are-powersets-of-atoms

Accepted. Finite descent supplies an atom below each nonzero b. The nonzero-remainder argument proves reconstruction, atom dichotomy proves Boolean preservation and disjointness proves surjectivity. The finite meet of a proper ultrafilter is its unique generating atom. Empty atom set corresponds to the trivial algebra; all selection is finite in ZF. Read current item, manifest, contract and named suppliers. No repair or amendments; validation pending.

### Batch 15 — def-boolean-prime-ideal-principle

Accepted. BPI properly restricts existence to nontrivial Boolean algebras; UFL quantifies over proper set filters. Neither is asserted in ZF. Empty-set UFL is vacuous and properness is inherited from the reviewed ideals/filters definition. Read current item, manifest, contract and named suppliers. No repair or amendments; validation pending.

### Batch 15 — thm-bpi-equivalent-to-boolean-filter-extension

Accepted. Step 1.1 applies BPI only to the nontrivial quotient by a proper ideal and checks inverse-image primality. Step 2.1 complements a prime extension of the elementwise dual ideal, which indeed contains the original filter. Step 3.1 applies the converses to {0}/{1}. The quotient and pair-test suppliers match all hypotheses; no Zorn or arbitrary choice is used. Read current item, manifest, contract and named suppliers. No repair or amendments; validation pending.

Checkpoint: eight obligations complete; next is thm-bpi-equivalent-to-set-ultrafilter-lemma. Tressl full PDF retrieved successfully at https://personalpages.manchester.ac.uk/staff/Marcus.Tressl/papers/StoneDualityBooleanAlgebras.pdf (20 pages); read §§2.1–2.2 opening definitions, printed pp.3–5. The local quotient and finite-atom arguments were checked directly, not inferred from source attribution. Remaining obligations and local checks pending.

### Batch 15 — thm-bpi-equivalent-to-set-ultrafilter-lemma

Accepted. Checked finite Boolean-cell subalgebras and all-character set E, avoiding any simultaneous atom choice. Each finite requirement list has a nonzero filter meet and atom witness; empty list is included. Published FIP generator matches this convention. Unique large truth fibres define v; finite intersections prove every Boolean operation, bounds and extension. The local subset-decision proof uses only maximality, not the published AC existence theorem. Both implications hold over ZF. Current manifest/contract and dependency interfaces checked. No edits, amendments or published defect; validation pending.

### Batch 15 — thm-choice-implies-boolean-prime-ideal-principle

Accepted. Read published thm-zorn and def-axiom-of-choice. The set of proper extensions contains F, bounds the empty chain by F, and bounds nonempty chains by their union; comparability supplies binary meet closure and no union member contains zero. Zorn is the explicitly identified AC use. Maximality in the extension poset is global proper maximality; complement gives BPI for nontrivial B. Current manifest/contract and dependency interfaces checked. No edits, amendments or published defect; validation pending.

### Batch 15 — def-stone-ultrafilter-space-and-clopens

Accepted. All five basic-set identities follow from the reviewed filter tests. Unions of the meet-closed covering basis form a topology; complement identity makes the basis clopen. Clop(X) closes under Boolean operations. Compact Hausdorff and empty-space conventions match the published definitions. No existence or compactness is smuggled into the definition. Current manifest/contract and dependency interfaces checked. No edits, amendments or published defect; validation pending.

### Batch 15 — thm-stone-clopen-representation-under-bpi

Accepted. Each nonzero difference generates a proper filter, so BPI gives order reflection and injection. Distinct ultrafilters are separated by a complementary pair. The complements of a basic cover lacking finite subcover have nonzero finite meets; extending their filter contradicts the cover. All subordinate basic opens reduce arbitrary covers with finite selection only. Adjoining the complement of a clopen supplies its finite basic representation directly. Empty clopens and trivial B are covered. Current manifest/contract and dependency interfaces checked. No edits, amendments or published defect; validation pending.

Source continuation: Tressl §§2.2.9–2.3.3 and 3.1.1–3.1.6, printed pp.7–12, retrieved/read via the same PDF. Its extension argument invokes Zorn; the authored equivalence uses the separately checked choice-free quotient/finite-character route. The local compactness proof generates the complement filter explicitly. Twelve obligations complete; next: Stone-space recovery and naturality. All later obligations remain pending.

### Batch 15 — thm-stone-space-recovered-from-its-clopens

Accepted. Read published thm-compact-iff-fip including its choice-free complement proof and empty-intersection convention. Point filters decide clopens; clopen separation gives injection. Closed FIP gives a point of each supplied ultrafilter, complement decision recovers exactly its point filter and makes the point unique. Basic-clopen images and preimages prove both continuities without BPI. Empty space checked. Manifest/contract checked; no repair, new dependencies or amendments. Source locator: Tressl §§3.1.6, 3.3, 4.1–4.4; §3.1.6 read, naturality and truth-set arguments checked directly. Validation pending.

### Batch 15 — thm-stone-duality-by-inverse-image

Accepted. Steps 1.1–3.1 correctly compose the ultrafilter character as chi_V after h. Bound preservation makes pullbacks proper; complement decision ensures maximality. Continuous preimages preserve clopens and Boolean operations. Both composition reversals and the two typed naturality equations are correct. Reviewed representation suppliers supply isomorphic components under BPI; maps involving the trivial algebra/empty space are asserted only when they exist. Manifest/contract checked; no repair, new dependencies or amendments. Source locator: Tressl §§3.1.6, 3.3, 4.1–4.4; §3.1.6 read, naturality and truth-set arguments checked directly. Validation pending.

### Batch 15 — thm-bpi-equivalent-to-propositional-compactness

Accepted. The constant-zero valuation inhabits 2^P in ZF. Finite-coordinate subsets are closed under Boolean operations; finite satisfiability gives a proper truth-set filter and its ultrafilter indicator satisfies the formula recursion. Conversely every finite operation-table fragment lies in a finite nontrivial subalgebra with an atom character, extended by zero. A global valuation has a prime zero fibre. Empty P/T and truth constants checked; no arbitrary choice. Manifest/contract checked; no repair, new dependencies or amendments. Source locator: Tressl §§3.1.6, 3.3, 4.1–4.4; §3.1.6 read, naturality and truth-set arguments checked directly. Validation pending.

Checkpoint: 15 obligations complete. Next: parallel Henkinization; reread its three published finite-derivation/fresh-constant suppliers before deciding. Later obligations and final local checks pending.

### Batch 15 — lem-set-sized-parallel-henkinization-preserves-consistency

Accepted. Read all three published supplier statements and proofs. Tagged symbols and set recursion define the stages uniquely. For finite K the pure expansion excludes its designated witness constants; nondecreasing stage order restores all earlier designated constants before they can occur in later matrices, and same-stage matrices omit every same-stage new constant. Thus the single-fresh-witness hypothesis holds at each addition. Finite proof support gives union consistency; finite symbol support ensures every union-language existential receives a witness. Seed and empty K cases are valid in ZF. Current manifest and contract checked. Source evidence is the complete named published local proofs; Moschovakis §§1H–1I is their bibliographic source, not an assumed countable-language shortcut. No repair or shared-plan amendment.

### Batch 15 — thm-bpi-equivalent-to-arbitrary-language-compactness

Accepted. Read the soundness, finite-support, decision, Boolean-rule and closed-term truth-lemma suppliers and their proofs. Finite satisfiability implies consistency. Delta is a set of finite deduction and coherence constraints, including bottom exclusion and zero-premise theorems. Finite consistent sentence decisions satisfy each constraint; conjunction/negation contradictions and transferred deduction premises are justified by the published rules. Propositional compactness gives a complete closed consistent Henkin theory with seed, meeting the unrestricted term-model hypotheses without representative choice. The singleton unary-predicate coding proves the converse, including empty language/theory cases. Current manifest and contract checked. Source evidence is the complete named published local proofs; Moschovakis §§1H–1I is their bibliographic source, not an assumed countable-language shortcut. No repair or shared-plan amendment.

Checkpoint: 17 obligations complete; next is compact Hausdorff Tychonoff equivalence. No unresolved mathematics in decided items. Later review and all final checks remain pending.

### Batch 15 — thm-bpi-equivalent-to-compact-hausdorff-tychonoff

Accepted. Read every step and published product/FIP interfaces. Compactness gives a cluster point of each supplied ultrafilter via closures; complement decision gives convergence and Hausdorff separation gives uniqueness. Finite partial selections form an inhabited set with FIP domain tails. The induced coordinate ultrafilters have uniquely specified limits, so Replacement supplies a product point before product nonemptiness is used. Closed FIP families on that product converge coordinatewise using finite-coordinate neighborhoods. The converse uses the explicitly inhabited two-point cube and clopen truth constraints. Empty factors, empty index and empty constraints checked; ZF+BPI suffices. Manifest and contract agree. Local proof checked directly; Caicedo Fact 2/Remark 3 is its bibliographic locator. No repair or amendment. Checkpoint: 18 decisions complete; next regular-open definition and algebra theorem. Later obligations and checks pending.

### Batch 15 — def-complete-boolean-algebra-and-regular-open-sets

Accepted. Completeness quantifies over all subsets, complements supply infima, and order continuity preserves every existing bound including empty ones. Closure/interior definitions and regular-open operations require no separation assumption. Order density is the standard nonzero-lower-element condition. The named justified_by theorem below proves the proposed operations; no existence of completions is asserted here. Current contract and dependency interfaces read; manifest claim/conventions agree. No repair, supplier addition or shared-plan amendment.

### Batch 15 — thm-regular-open-sets-form-a-complete-boolean-algebra

Accepted. Checked 1.1–5.1 directly: r(E) is idempotent by openness and inclusion in closure E. Sequential avoidance proves the nowhere-dense ideal; boundary complement/union identities form the boundary algebra, containing opens and the ideal. Symmetric difference from r(E) is boundary-small, and an open difference outside closure forces uniqueness of regular representatives. The reviewed quotient theorem transports Boolean laws; binary meet and complement representatives are explicitly verified. Monotonicity proves arbitrary join/meet regularity and both universal properties, including empty X/families. Only finite nowhere-dense unions occur; no Baire or AC premise. Current contract and dependency interfaces read; manifest claim/conventions agree. No repair, supplier addition or shared-plan amendment.

### Batch 15 — thm-stone-regular-open-boolean-completion

Accepted. Clopens embed with correct finite operations and basis neighborhoods supply order density. Step 1.2 proves the dense-supremum identity and preservation of every existing bound by subtracting a nonzero dense element from a putative gap. The exact cut identity in 2.1 follows by choosing one dense element in j(b) minus c and bounding all defining images by its complement. Symmetric cuts yield inverse monotone maps, hence Boolean isomorphisms; order isomorphisms preserve all suprema, forcing uniqueness. Trivial-domain targets are necessarily trivial. Only BPI for the reviewed Stone supplier is assumed. Current contract and dependency interfaces read; manifest claim/conventions agree. No repair, supplier addition or shared-plan amendment.

### Batch 15 — thm-stone-completeness-iff-extremal-disconnectedness

Accepted. For an open G, the join of all subordinate basic clopens has image exactly closure G: any nonempty gap contains a nonzero basic clopen whose subtraction contradicts leastness. Extremal disconnectedness makes regular opens closed. Equality Clop=RO transfers the already proved complete Boolean algebra through order reflection, closing the three implications. The proof distinguishes arbitrary regularized joins from ordinary unions and includes empty G/X and trivial B. No unproved extension principle is used. Current contract and dependency interfaces read; manifest claim/conventions agree. No repair, supplier addition or shared-plan amendment.

### Batch 15 — thm-order-continuous-homomorphisms-extend-to-boolean-completions

Accepted. All nine steps checked. Partial Boolean-map graphs form a set poset with union upper bounds and initial h0 for the empty chain; Zorn is licensed by explicit AC. One-element normal forms close under complement/join, and the two symmetric-difference inequalities prove image independence without injectivity. Component formulas strictly extend any non-total map. For a unit-supremum family, its dense lower family has supremum 1 already in D; original order continuity forces image supremum 1. Adding complement of an arbitrary supremum reduces the general case to this unit case. Dense-supremum preservation then forces the stated formula and uniqueness. Trivial domain/codomain, empty chains and empty bounds checked. AC uses are exactly BPI and Zorn. Current contract and dependency interfaces read; manifest claim/conventions agree. No repair, supplier addition or shared-plan amendment.

Fremlin source-access record: current web PDF opener timed out twice, author TeX opener returned unsupported application/x-tex, and the CiteSeer full-chapter mirror redirected to an inaccessible archive. Earlier author notes record two PDF timeouts and successful local reading at /tmp/boolean-extension-audit.5hVEtm/chap31.pdf; that path is absent in this environment. Counting earlier failures, the six retrieval attempts are exhausted; do not repeat them. No fresh full-source reading is claimed. Author locators: 313H–L pp25–27, 314O–P pp37–38, 314S–U pp40–41, 312N–O pp15–16 and 314K pp35–36. The complete authored arguments above were checked directly from elementary Boolean/topological laws and reviewed local suppliers, with no mathematical uncertainty left and no reliance on an unavailable source assertion. No source is dropped or newly marked verified. Checkpoint: 23 obligations decided. Next: forcing convention, separative quotient and regular-open completion; later obligations and local checks pending.

### Batch 15 — def-forcing-preorder-compatibility-and-filter

Accepted. Nonempty preorders and nonempty filters are explicit. Smaller means stronger; upward closure and internal downward directedness are correctly distinguished from Boolean meet closure. Compatibility is existence of a common stronger condition, density quantifies below each condition, and no endpoints or genericity are presumed. Singleton case satisfies all definitions. Manifest, contract and cited local suppliers agree. No repair or amendments.

### Batch 15 — lem-separative-quotient-of-a-forcing-preorder

Accepted. Successive common extensions prove transitivity of starred order and compatibility reflection. Mutual starred inequalities form an equivalence and make class order independent of both representatives. Negating the starred universal statement supplies a separating extension, whose incompatibility passes to the quotient. Original separativity gives starred order equal to original order and antisymmetry gives singleton classes. Only one class representative at a time is used in ZF. Manifest, contract and cited local suppliers agree. No repair or amendments.

### Batch 15 — thm-forcing-preorders-have-regular-open-completions

Accepted. The downward topology has least neighborhoods down(p); closure of down(q) is exactly compatibility with q, so membership in e(q) is starred order. Transitivity proves inclusion equivalence; successive common extensions prove nonzero-meet compatibility in both directions. Every nonempty regular open contains p and therefore its nonzero regularized downset. Separativity or quotienting gives injectivity with unchanged dense range. Singleton and zero-exclusion cases checked; no BPI/AC. Compared Karagila Theorem 2.34 pp12–13, complete proof read; the authored regularization formula explicitly handles nonseparative preorders. Manifest, contract and cited local suppliers agree. No repair or amendments.

### Batch 15 — rem-bpi-choice-boundary-and-forcing-conventions

Accepted. Each asserted implication points to its reviewed local theorem. ZF equivalences do not assert BPI in ZF; AC use remains separate. The direct downward-topology forcing completion has no ultrafilter existence premise. Empty Stone spaces/trivial algebras and nonempty forcing preorders/filters are correctly distinguished. Future relative nonimplication is orientation only, with no Recorded result used. Manifest, contract and cited local suppliers agree. No repair or amendments.

Source: https://karagila.org/files/Forcing-2023.pdf, Theorem 2.34, printed pp12–13/PDF pp15–16, including the complement and separativity footnotes, read successfully. The local Boolean laws come from the independently checked regular-open quotient proof. Checkpoint: 27 items decided. Next three Boolean examples and their A/B pages; all PCF/Dowker review still pending.

### Batch 15 — ex-finite-powerset-stone-space

Accepted. Singletons are exactly the atoms, and the reviewed finite-atom theorem therefore lists all point ultrafilters. Basic-clopen membership agrees with the original subset, making the identification discrete. The explicit two-point table, empty S and singleton S calculations are correct in ZF. Manifest, contract and previously reviewed A suppliers checked. No repair or amendments.

### Batch 15 — ex-finite-boolean-quotient-and-dual-map

Accepted. All four two-member equivalence classes are correct. Restriction preserves both bounds and Boolean operations and has precisely the stated ideal as zero fibre. The quotient factor is bijective. Pulling back the two atom filters gives U0 and U1 and omits U2; inverse images of basic clopens are exactly restriction clopens. This verifies the dual inclusion directly without invoking BPI. Manifest, contract and previously reviewed A suppliers checked. No repair or amendments.

### Batch 15 — ex-finite-forcing-filter-versus-boolean-filter

Accepted. For arbitrary nonempty S, a directedness witness lies inside A intersection B, which is therefore nonempty and belongs to G by upward closure. Conversely proper meet closure gives an internal common stronger condition. Enumeration of the two-point poset yields exactly three filters and two maximal ones. Empty G, singleton S and excluded empty P cases are explicit. No nonexisting meet on an arbitrary preorder is assumed. Manifest, contract and previously reviewed A suppliers checked. No repair or amendments.

### Batch 15 — page boolean-algebras-stone-duality-and-the-prime-ideal-theorem

Accepted. All 27 A items are reviewed and ordered with ordinary suppliers before consumers; justified_by obligations point to the proved following lemmas. The summary accurately distinguishes ZF, BPI and AC uses, arbitrary-language/empty-product issues and forcing nonemptiness. No recorded supplier or new prerequisite is introduced. No page edit or amendment.

### Batch 15 — page boolean-algebras-stone-duality-and-the-prime-ideal-theorem-examples

Accepted. All three listed examples were checked; the summary accurately describes finite points, restriction quotient with inverse-image inclusion, and directedness versus meet closure. Empty/singleton cases agree with the A definitions. Inventory matches the owned B manifest. No page edit or amendment.

Checkpoint: Boolean pair complete at 30/94 items and 2/4 pages, all accepted. No defect row needed for sound content. Next: countable paracompactness/Dowker criterion, followed by PCF in prerequisite order. Remaining 64 items and two pages are unreviewed, not accepted. Final local checks remain pending.

### Batch 15 — def-countable-paracompactness-and-dowker-space

Accepted. The refinement is explicitly a covering family, so empty refinements cannot trivialize the definition. Countable includes finite, the refinement need not be countable, and normality and T1 are separated exactly as in both published definitions. Empty and singleton spaces are correctly countably paracompact, with no choice assertion. Manifest agrees; no repair or amendments. Hart Chapter 4 §3, Theorems 3.3–3.4 and Exercises 3–8, printed pp27–28, read in full at the recovered author-hosted mirror below. The local argument supplies the exercise details.

### Batch 15 — thm-countable-paracompactness-shrinking-criterion

Accepted. Least containing indices of a locally finite refining cover give closed C_n inside increasing U_n and interior coverage. Conversely cumulative D_n and V_n=U_n minus D_(n-1) give an open cover; a neighborhood inside D_N misses every n>=N+1, and finite splitting by O_i preserves local finiteness. Complement identities prove both closed-sequence implications. Only the normal-space upgrade uses AC, to choose the published shrinking witnesses simultaneously. Empty cover, initial index and finite covers checked. Manifest agrees; no repair or amendments. Hart Chapter 4 §3, Theorems 3.3–3.4 and Exercises 3–8, printed pp27–28, read in full at the recovered author-hosted mirror below. The local argument supplies the exercise details.

### Batch 15 — thm-dowker-product-characterization

Accepted. Read all seven proof steps, contract and published topology interfaces, including the shrinking, closed-heredity and locally-finite-closure proofs. The compact projection argument uses finite rectangle subcovers. The decreasing strip union is closed by discarding a tail near each point; zero-slice shrinking gives empty-intersection expansions. Dyadic finite-union neighborhoods separate compact fibers, closed projections make O_j open, and least-index grouping preserves indexed local finiteness. Recursive W_j shrinkings keep the covering invariant; a last membership index proves they cover. Locally finite rectangle closures then avoid G. Archimedean/Heine–Borel hypotheses, interval endpoints, empty fibers/X, and AC for rectangle and shrinking witnesses checked. Manifest agrees; no repair or amendments. Hart Chapter 4 §3, Theorems 3.3–3.4 and Exercises 3–8, printed pp27–28, read in full at the recovered author-hosted mirror below. The local argument supplies the exercise details.

Hart retrieval: original URL timed out once; author-hosted alternative https://fa.ewi.tudelft.nl/~hart/37/onderwijs/old-courses/settop/settop.pdf succeeded (49 pages). Reuse it for later chapters. Checkpoint: 33/94 items, 2/4 pages decided. Current next item: def-reduced-ordinal-products-and-scales, then lem-progressive-products-and-true-cofinality-transfers; their full text has been read but contracts/dependency/source checks and decisions are still pending. No later item is accepted.

### Batch 15 — def-reduced-ordinal-products-and-scales

Accepted. The strict comparison uses the greater-or-equal exception set, and properness is retained for scales and strict directedness. Zero factors, empty support, greatest elements, and weak versus strict cofinality are distinguished. The justified_by lemma proves quotient well-definedness and unique scale length. AC is explicit; manifest and boundary contract agree. No repair, new supplier, shared-plan amendment or published defect. Structural validation remains pending; next is the following owned item in manifest order.

### Batch 15 — lem-progressive-products-and-true-cofinality-transfers

Accepted. Checked all steps 1.1–5.1: exceptional-set unions prove quotient and mixed laws; regular chain indices bound small families; singular least cofinal cardinal contradicts linear-order noncofinal bounds. The inverse cofinal-embedding transfer recursively builds a chain in the image, with AC fixed beforehand. Coordinate enumerations preserve and reflect strict comparisons; ceiling indices only establish cofinality. Fiber suprema stay below regular factors by |I|<min range(c). Support restriction and zero extension give actual quotient isomorphisms, while repetition is only an embedding. Ultrafilter extension preserves a scale. Empty/finite supports, omega coordinates and properness checked against contracts and manifest; published cofinality, recursion, filter and cardinal interfaces supply the stated hypotheses. No repair, new supplier, shared-plan amendment or published defect. Structural validation remains pending; next is the following owned item in manifest order.

### Batch 15 — lem-pcf-cofinality-ideals-and-cutoff-conventions

Accepted. Finite-union preservation and monotonicity give all ideal and restriction claims. Singleton membership is exactly a<lambda, with failure at equality. Restricting and extending ultrafilters proves the universal support criterion; complementary-pair choice proves the dual intersection identity in both directions, also for no high-cofinality ultrafilters. Empty supports and cutoffs zero/one are explicit. The text correctly postpones the converse assertion for one low-cofinality ultrafilter until directedness. Contract and manifest agree; AC is inherited from the proved transfer lemma. No repair, new supplier, shared-plan amendment or published defect. Structural validation remains pending; next is the following owned item in manifest order.

Source continuity: Abraham–Magidor, https://www.winterschool.eu/files/3-Cardinal_Arithmetic.pdf, retrieved successfully after one timeout at the non-www URL. Read §2 pp9–13 (Definition 2.2, Lemma 2.3 and complete proof), and §3.1 p32 definitions/dual identity. Checked nonzero limit factors, regular scale length, proper ideals and the fiber-size restriction. Source Lemma 2.3 uses an isomorphism onto its image; the authored text states that scope explicitly. Checkpoint: 36/94 items, 2/4 pages accepted. Next: def-strong-increase-and-bounding-projections-for-countable-products; later PCF arguments remain undecided.

### Batch 15 — def-strong-increase-and-bounding-projections-for-countable-products

Accepted. The definition distinguishes individual strong-increase exceptions from a common exception, specifies the least ceiling and nonempty fallback, and quantifies the projection property without asserting existence. Exactness is an upper-bound and strict lower-cone property, with leastness deferred to its proved supplier. The general proper-ideal clause and countable finite-ideal specialization agree with the manifest and contract; no countable completeness is used. No edits, suppliers, amendments or published defects. Source: Abraham–Magidor at the recovered www URL, Definitions 2.4/2.8/2.10, complete Lemma 2.12, Theorem 2.13, Lemma 2.14 and Theorem 2.15 implication 2 to 3, pp13–19, read with stated cardinal/ideal hypotheses. Local validation pending.

### Batch 15 — lem-strong-increase-gives-bounding-projections

Accepted. Steps 1.1–4.1 are sound: failed projection bounds yield positive strict comparisons at later indices; regular recursion forms an unbounded index set. Removing four small sets preserves positivity. AC selects a coordinate and regular kappa>tau forces one fiber to have size kappa. At that coordinate, strong increase and genuine ceilings produce an injection into S(a), contradicting |S(a)|<kappa. Adjacent indices use equality correctly, and only finite unions of ideal sets occur. Contract, manifest and cofinality/recursion interfaces checked. No edits, suppliers, amendments or published defects. Source: Abraham–Magidor at the recovered www URL, Definitions 2.4/2.8/2.10, complete Lemma 2.12, Theorem 2.13, Lemma 2.14 and Theorem 2.15 implication 2 to 3, pp13–19, read with stated cardinal/ideal hypotheses. Local validation pending.

### Batch 15 — lem-bounding-projections-give-exact-upper-bounds

Accepted. Checked the full minimal-bound construction. H bounds all recursive functions as a set; at each stage S_eta has size at most tau and includes H. All sufficiently late projections equal its bounding ceiling modulo I. A common beta exists because lambda is regular above tau^+. Enlarging projection sets decreases ceilings pointwise, while each successor decreases positively; coordinate selection yields an impossible descending ordinal sequence. Minima make the minimal bound globally least; predecessor reduction makes nonlimit coordinates small. Two-point projections prove exactness, and cofinal projection sets prove the additional coordinate-cofinality lower bound. Zero-reset arguments prove leastness, uniqueness, restriction and larger-ideal transfer. Exact AC uses and contract boundaries checked; no ideal completeness assumed. No edits, suppliers, amendments or published defects. Source: Abraham–Magidor at the recovered www URL, Definitions 2.4/2.8/2.10, complete Lemma 2.12, Theorem 2.13, Lemma 2.14 and Theorem 2.15 implication 2 to 3, pp13–19, read with stated cardinal/ideal hypotheses. Local validation pending.

Checkpoint: 39/94 items and 2/4 pages accepted. Next: lem-uncountable-club-guessing-at-a-double-successor. Later items remain undecided.

### Batch 15 — lem-uncountable-club-guessing-at-a-double-successor

Accepted. Continuous cofinal recursions give clubs of exact order type kappa. The accumulation-point operation preserves clubs since theta has uncountable cofinality; intersections inside delta use cf(delta)=kappa>omega. Failure of guessing gives a set-indexed AC choice of missed clubs. The kappa^+-stage decreasing recursion and its total intersection stay club because kappa^+<cf(theta). On a stationary witness delta, at most kappa removal stages stabilize C0_delta below kappa^+, contradicting the next forced removal. Extending the successful restriction covers all of S. All five proof steps, dependency statements, manifest and contract checked, including the empty removal set and nonzero-limit closure convention. Abraham–Magidor Theorem 2.17 complete uncountable proof pp20–21 read at the recovered www URL. No repairs, new suppliers, amendments or published defects. Validation pending. Checkpoint: 40/94 items and 2/4 pages accepted. Next: lem-club-continuity-produces-strongly-increasing-subsequences.

### Batch 15 — lem-club-continuity-produces-strongly-increasing-subsequences

Accepted. The xi recursion poses at most theta<lambda set-bounded prefix questions and uses least witnesses. Its continuous range has supremum below lambda of cofinality theta, so the stipulated club-bound applies. Pullback of the intersected club permits guessing; every guessed prefix then has a genuine bound. Successor points of the guessed club produce strong witnesses from full preceding prefixes. The shifted indices lie in U and the four-set sandwich witnesses give strong increase, including adjacent equality. Full proof, manifest, contract and supplier hypotheses checked. Abraham–Magidor Lemma 2.19 complete proof pp21–23 and sandwich Lemma 2.7 pp14–15 read. Properness and uncountable kappa are retained; only finite ideal unions are used. No repairs or amendments. Validation pending. Checkpoint: 41/94 items and 2/4 pages accepted. Next: lem-directed-progressive-products-have-club-continuous-chains.

### Batch 15 — lem-directed-progressive-products-have-club-continuous-chains

Accepted. Read all four steps and contract/manifest. Directedness supplies weak bounds in the fixed product set; maxima plus one give strict bounds and pointwise prescribed domination. Club suprema at eligible limit stages remain below large regular coordinates, and only the explicitly null small coordinates are reset. Distinct double successors make the simultaneous rule unambiguous. The club-continuity lemma applies for infinite A; a finite ideal has one maximal small support and gives the finite case directly. Projection and exact-bound consumers satisfy |A|<kappa and lambda>|A|^+, with the smaller star property obtained by initial restriction. AC choices are set-sized and declared. Abraham–Magidor Theorem 2.21 complete proof pp23–24 read; local formulas also include strictification and a bound of all previous terms. No repair, amendment or published defect. Validation pending. Checkpoint: 42/94 items and 2/4 pages accepted. Next: thm-pcf-ideal-directedness-and-ultrafilter-cofinality-cutoffs.

### Batch 15 — thm-pcf-ideal-directedness-and-ultrafilter-cofinality-cutoffs

Accepted. Finite supports and small cutoffs use explicit pointwise bounds; deleting at most three coordinates above the progressive size is licensed by finite PCF and preserves quotient comparisons. Cardinal induction holds the ideal fixed: singular sizes split into smaller families, while regular sizes exceed tau+3 and satisfy every directed-chain/exact-bound hypothesis. Capping the exact bound at the identity preserves exactness and positive limit values. A positive equality support would yield a high-cofinality ultrafilter where a rho-sized noncofinal chain both has a strict bound and dominates it by transferred exactness, contradiction. Resetting the null equality support yields the product bound. Cutoff equivalences then follow from strict directedness and ultrafilter complements; zero, finite, singular and improper cases are explicitly valid. Manifest, contract and all used supplier statements checked. Abraham–Magidor Theorem 3.4 and Corollary 3.5 complete pp32–33 read. No repair or amendment. Local validation pending. Checkpoint: 43/94 items and 2/4 pages accepted. Next: thm-progressive-pcf-has-a-maximum-and-continuous-cutoff-ideals.

### Batch 15 — thm-progressive-pcf-has-a-maximum-and-continuous-cutoff-ideals

Accepted. The nonempty increasing union of proper cutoff ideals is proper; its verified dual filter extends to an ultrafilter whose cofinality attains and dominates PCF. Jump witnesses supplied by the cutoff equivalence distinguish every pair of PCF cardinals and give the size bound, with AC explicitly selecting witnesses. Every nonempty subset remains progressive, so its attained maximum proves continuity; the empty subset uses cutoff zero. The zero-cutoff union exception, finite support maximum, positive cutoff one and strict limit-cutoff successor inequality are all correct. Contract, manifest and used suppliers checked. Abraham–Magidor Theorem 3.6, Corollary 3.7 and Exercise 3.8 p34 read; the local proof supplies the exercise and boundary details. No repair, amendment or published defect. Validation pending. Checkpoint: 44/94 items and 2/4 pages accepted. Next: thm-progressive-pcf-has-universally-cofinal-sequences.

### Batch 15 — thm-progressive-pcf-has-universally-cofinal-sequences

Accepted. Finite and minimum-coordinate cases have explicit principal-ultrafilter proofs. Deleting the null tau+ coordinate ensures both tau+<min A and tau+<lambda, used separately for the common function and common row index. Initial/limit columns use directedness and regular coordinate bounds; successor columns dominate chosen cofinal representatives and strictly bound the prior column in its failing ultraproduct. Pointwise row monotonicity gives nested T_alpha, and opposite ultrafilter membership forces a new coordinate at every successor, contradicting |A|<=tau. Restoration by zero preserves comparisons and relevant ultrafilters. All six proof steps, AC witness sets, manifest and contract checked. Abraham–Magidor Definition 4.1 and Theorem 4.2 complete proof pp37–39 read. No repairs or amendments. Validation pending. Checkpoint: 45/94 items and 2/4 pages accepted. Next: lem-universal-pcf-sequences-have-strong-increase-and-exact-bounds.

### Batch 15 — lem-universal-pcf-sequences-have-strong-increase-and-exact-bounds

Accepted. A cofinality-lambda ultrafilter forces a positive initial segment by lambda+1. Minimality and singleton cutoffs give the successor case mu=lambda+1; otherwise the unbounded cardinal coordinates make mu a singular limit cardinal, with |A|+<mu<lambda. The principal case constructs both the universal chain and its exact bound directly using |A|<cf(lambda), covering finite A. In the limit case every needed double successor lies below mu, so one directed chain dominates a universal sequence and has all required uncountable star properties; restricting omega1 gives omega. The exact-bound theorem applies at |A|+, and leastness permits capping at the coordinate identity without changing its class. Full proof, manifest and contract checked. Abraham–Magidor Lemma 4.6 p40 and Theorem 4.8 p41 read; the authored principal-case proof closes the small-cardinal exception explicitly. No repairs or amendments. Validation pending. Checkpoint: 46/94 items and 2/4 pages accepted. Next: thm-pcf-cofinality-ideals-have-single-generators.

### Batch 15 — thm-pcf-cofinality-ideals-have-single-generators

Accepted. The supported-ultrafilter test proves both directions of the generator criterion, including improper K. For B={a:h(a)=a}, transferred exactness makes every avoiding ultrafilter containing B have cofinality lambda; those meeting I have smaller cofinality. A cofinality-lambda ultrafilter omitting B would represent h by a product function strictly bounding its universal sequence, contradiction. Positivity uses an existing lambda witness, uniqueness uses both ideal differences, and simultaneous selection uses a set of nonempty generator sets with explicit AC. The finite-support exactness transfer is supplied directly rather than invoking an infinite-support theorem. Full proof, contract and manifest checked; Abraham–Magidor Lemma 4.7/Theorem 4.8 complete pp40–41 read. No repairs or amendments. Validation pending. Checkpoint: 47/94 items and 2/4 pages accepted. Next: thm-pcf-generators-restrict-finitely-cover-and-carry-scales.

### Batch 15 — thm-pcf-generators-restrict-finitely-cover-and-carry-scales

Accepted. Support extension proves generator restriction by its criterion. Failure of cofinality on a generator yields positive decreasing-modulo-I sets; the finite-intersection calculation gives a proper filter and a lambda-cofinality ultrafilter contradicting universality. The everywhere-cofinality proof counts at most M finite maxima and uses the downward closure of success sets as a proper ideal, avoiding an unjustified ideal assertion. Least failing maximum proves finite covering; empty covers handle zero cutoff. The filter intersection lemma is proved by proper extension omitting an absent set, and the three implications use actual ultrafilter extensions and a generator scale. Cardinal indices outside PCF give empty generators and all conditions false. Full proof, manifest, contract and supplier interfaces checked. Abraham–Magidor Theorem 4.4/Claim 4.5 pp39–40, Lemmas 4.10–4.14 and Exercise 4.15(1) pp42–44 read in full; local arguments supply the finite-intersection and filter details. No repairs or amendments. Validation pending. Checkpoint: 48/94 items and 2/4 pages accepted. Next: thm-pcf-has-no-holes-for-progressive-intervals.

### Batch 15 — thm-pcf-has-no-holes-for-progressive-intervals

Accepted. Under the directed hypotheses, varying one coordinate proves singleton nullity, so the least positive initial segment has singular limit supremum and retains directedness. All double-successor smallness and size hypotheses of the chain and exact-bound suppliers hold there. Capping and normalizing the bound give regular coordinate cofinalities between min A0 and a; the interval hypothesis puts them back in A0. Individual resets and the cofinal-enumeration/repetition embeddings transfer the strict scale with proper range ideal and verified fiber bound. For the interval identity, the supremum is singular, lower regulars are already coordinates, and higher regulars use proper cutoff directedness through the attained maximum. The finite terminal-tail argument covers every infinite interval with a maximum; finite intervals are direct. Full proof, manifest and contract checked. Abraham–Magidor Theorem 3.1 complete p31 and Theorem 3.9 p35 read, with transfer Lemma 2.3 pp12–13 already checked. No repairs or amendments. Validation pending. Checkpoint: 49/94 items and 2/4 pages accepted. Next: lem-eventual-products-below-aleph-omega-have-a-continuous-long-chain.

### Batch 15 — lem-eventual-products-below-aleph-omega-have-a-continuous-long-chain

Accepted. Coordinate suprema bound families smaller than aleph_omega outside finitely many coordinates. A family of size aleph_omega splits into countably many smaller initial subfamilies; bounding their bounds yields the required strict eventual bound. Clubs and a set-sized bound choice function are fixed before recursion. At special limit stages, suprema fit precisely at coordinates above kappa++, and maxima plus one remain in regular infinite factors. Other stages retain a strict bound of every predecessor. Each uncountable regular below aleph_omega is a finite-index aleph, so the exceptional initial coordinates are finite and all club-continuity hypotheses hold for the same chain. Full proof, manifest and contract checked. Abraham–Magidor Theorem 2.21 pp23–24, directedness argument in Theorem 2.23 p24, and Exercise 2.25/Theorem 2.26 hint p25 read; the latter uncountable-cofinality representation theorem is not assumed for this countable case. No repairs or amendments. Validation pending. Checkpoint: 50/94 items and 2/4 pages accepted. Next: thm-pcf-aleph-omega-plus-one-scale.

### Batch 15 — thm-pcf-aleph-omega-plus-one-scale

Accepted. The proof establishes its cofinal-suborder transfer with a set-sized recursive chain and the no-smaller-cofinal-family argument. A single capped exact bound retains every finite-index cofinality estimate; after finite deletion its regular cofinalities exceed aleph1 and tend to aleph_omega. Individual resets put the chain into product h, and increasing cofinal enumerations give the first comparison-preserving cofinal embedding. Eventual growth makes every repeated-cardinal fiber finite, so preimages preserve and reflect finiteness; finite fiber suprema give the second cofinal embedding. The unbounded regular range reindexes bijectively to an infinite subset of indices at least two. True cofinality and all strict/weak comparisons survive both transfers. Manifest and contract checked. Abraham–Magidor Lemma 2.3 pp12–13 and Exercise 2.25/Theorem 2.26 with its full hint p25 read; the authored proof expands all needed countable-case steps. No repairs or amendments. Validation pending. Checkpoint: 51/94 items and 2/4 pages accepted. Next: lem-normalizing-a-scale-at-existing-least-upper-bounds.

### Batch 15 — lem-normalizing-a-scale-at-existing-least-upper-bounds

Accepted. Least dominating original-scale indices of a small predecessor family are bounded by regular lambda. The recursion selects a representative from a set of least bounds only when it exists, otherwise a least eligible original scale term. At a least-bound limit stage the intervening successor proves strictness; every successor stage uses the fallback and dominates the corresponding original scale term, proving cofinality. The normalization is explicitly conditional on existence, with f0=g1 and no assertion of universal least-bound existence. Full authored proof, contract, manifest and current scale/recursion/cofinality interfaces checked directly. No repairs or amendments. Validation pending. Bibliographic source: Kojman–Shelah 1995 manuscript Claims 3–4 pp4–5; fresh source retrieval was not achieved, as recorded below. Acceptance rests on the complete checked local argument, not an unseen source proof.

### Batch 15 — lem-scale-tail-suprema-have-prescribed-cofinality

Accepted. Strict regular-length index and coordinate sequences give exact cofinality theta by least-index pullback of any purported smaller cofinal set. The strict inequality n>k>=m keeps each supremum inside its factor. Zero extension on the finite prefix bounds the full initial segment. For any competing bound, countably many failure-coordinate indices have one common bound below uncountable regular theta; one eventual representative equality then makes the entire failure set finite. This proves actual leastness in the product, so normalization applies at delta of uncountable cofinality. Full proof, contract and manifest checked, including differing finite exceptions for each representative and m=k=1. No repairs or amendments. Validation pending. Bibliographic source: Kojman–Shelah 1995 manuscript Claims 3–4 pp4–5; fresh source retrieval was not achieved, as recorded below. Acceptance rests on the complete checked local argument, not an unseen source proof.

Source limit: current open of https://shelah.logic.at/files/180666/609.pdf timed out once. Subsequent inspection of the owned author notes (lines1340,1384,1396) recovered the already-exhausted paper retrieval record: journal web timeouts, shell DNS failure, AMS 403, and later manuscript/cached-reference timeouts. Stop retries for this paper and preserve its historical evidence without claiming a fresh read. The two elementary scale proofs above were fully verified locally. Hart remains available for the upcoming topology. Checkpoint: 53/94 items and 2/4 pages accepted. Next: def-rudin-ordinal-box-space, followed by def-rudin-ambient-ordinal-box-space. No topology beyond the initial countable-paracompactness/Dowker criterion has yet been accepted.

### Batch 15 — def-rudin-ordinal-box-space

Accepted. Inclusive ordinal factors, the unrestricted box topology and the single uniform finite-aleph cofinality bound are specified correctly. Pointwise and eventual comparisons are separate. Box intersections prove topology well-definedness and the local-base claim has its separately proved justified_by supplier. Endpoints and external bounds are allowed with the stated constraints; manifest and contract agree. Hart Chapter 6 §1 complete p35, including Exercises 1–2, read at the recovered /37/ author URL; the authored proof supplies the exercise details on the commissioned infinite subset B. No repairs, amendments or published defects. Validation pending.

### Batch 15 — def-rudin-ambient-ordinal-box-space

Accepted. The ambient space retains individual uncountable coordinate cofinalities and omits only the uniform bound. Inclusive tops and arbitrary ordinal box endpoints are explicit. Zero and successor cofinalities exclude them as point coordinates without excluding them as bounds. Inherited AC, manifest and contract agree. Hart Chapter 6 §1 complete p35, including Exercises 1–2, read at the recovered /37/ author URL; the authored proof supplies the exercise details on the commissioned infinite subset B. No repairs, amendments or published defects. Validation pending.

### Batch 15 — lem-rudin-box-space-basic-neighborhoods-and-p-space

Accepted. Coordinate half-open intervals have open complements, whose cylinders give an open box complement; thus every stated relative box is clopen even when empty or with upper bound outside the space. Least coordinate lower bounds give a local base at every nonzero limit point, including coordinate tops. AC chooses one local box for each of countably many neighborhoods, and uncountable coordinate cofinality keeps the coordinate supremum of their lower bounds strictly below the point. The resulting box proves countable-intersection openness, with finite and empty families explicit. Full proof, manifest, contract and published ordinal/product topology definitions checked. Hart Chapter 6 §1 complete p35, including Exercises 1–2, read at the recovered /37/ author URL; the authored proof supplies the exercise details on the commissioned infinite subset B. No repairs, amendments or published defects. Validation pending.

Checkpoint: 56/94 items and 2/4 pages accepted. Next: lem-rudin-disjoint-box-refinement. Hart Chapter 6 §2 p36 and §3 beginning p37 have been retrieved; full local refinement argument still needs review.

### Batch 15 — lem-rudin-disjoint-box-refinement

Accepted. Successor stripping terminates by ordinal well-foundedness and preserves boxes because point coordinates are limits. The two successor partitions cover without overlap: good tops use coordinate splits with a subordinate upper cell, while bad normalized tops have a countable-cofinality coordinate and cannot themselves occur there. Every retained nonsubordinate child decreases an upper coordinate. At countable limits, uncountable point cofinalities make the supremum of lower bounds strictly below each point; minimum upper bounds and normalization preserve represented branch boxes. Countably many ordinal upper-coordinate sequences stabilize before regular omega1, forcing a subordinate cell for every point. Such cells persist, hence the final cover is disjoint. Full eight-step proof, manifest, contract and dependencies checked. Hart Chapter 6 §2 p36 partition construction and Exercises 2–3 read; local proof includes successor-top and limit-stage details. No repairs or amendments. Validation pending. Checkpoint: 57/94 items and 2/4 pages accepted. Next: lem-rudin-bounded-cofinality-hull-transfer.

### Batch 15 — lem-rudin-bounded-cofinality-hull-transfer

Accepted. Read the complete authored proof and contract, the published downward Lowenheim-Skolem, Tarski-Vaught and rank/hierarchy interfaces, and Hart Chapter 6 section 2 Exercises 5–7, printed p.37 (working /37/ author mirror). The finite-language hull theorem applies to the set structure V_theta without requiring it to model ZFC. Regular theta>kappa bounds ranks of every size-kappa subset, so the successor seed includes M_alpha as an element. Tarski-Vaught verifies limit unions using finite parameter tuples. The high-coordinate suprema strictly increase through kappa stages and stay below x by cf(x(n))>kappa; regularity proves their final cofinality exactly kappa. Countably many indices in each of finitely many uncountable regular low strata have a common bound below kappa already in M, giving strict interpolation also when H or low strata are empty. The final domination uses evaluation and successor closure and the cofinality inequality to exclude equality with a high coordinate. AC uses are explicit and suppliers precede the consumer. No V_theta-ZFC assumption or missing closure is used.

Source: https://fa.ewi.tudelft.nl/~hart/37/onderwijs/old-courses/settop/settop.pdf, printed p.37; the local rank-level and finite-stratum details were checked directly. No mathematical edits, new suppliers, published findings or shared-plan amendments. Validation pending final owned checks. Progress: 58/94 items and 2/4 pages accepted. Next: lem-rudin-discrete-families-have-discrete-ambient-closures.

### Batch 15 — lem-rudin-discrete-families-have-discrete-ambient-closures

Accepted. Complete proof and contract checked against Hart Chapter 6 section 2 Exercises 4–8 printed p.37 and the reviewed hull/P-space suppliers. Fixed-level failure gives two distinct internal index witnesses by an absolute bounded formula with the external stratum as a parameter; no internal cofinality absoluteness is assumed. Hull domination places both witnesses in the original discrete neighborhood. Open sets meeting closures meet their sets. In the P-space, closure commutes with countable union; increasing levels make full closures disjoint. Intersecting level neighborhoods yields only countably many possible indices, injected by least level, and removing the closed members not containing the point proves indexed discreteness, not merely disjointness. Empty index/removal families and endpoint membership are handled; AC is confined to existing hull/neighborhood choices. No defect found.

Source URL: https://fa.ewi.tudelft.nl/~hart/37/onderwijs/old-courses/settop/settop.pdf. No edits, new suppliers, shared-plan amendments or published findings. Validation pending. Progress: 59/94 items and 2/4 pages accepted. Next: thm-rudin-box-space-is-collectionwise-normal.

### Batch 15 — thm-rudin-box-space-is-collectionwise-normal

Accepted. Read full proof and contract; Hart Chapter 6 section 2 Exercise 8 p.37 and all three local suppliers checked. A clopen half-open box separates distinct points including coordinate tops. The cover of ambient open sets meeting at most one indexed closure exists by the discrete-closure lemma. Its partition refinement assigns each cell to at most one index, so unions of assigned cells restrict to disjoint open neighborhoods of the original closed members. Empty members receive empty unions. Two disjoint closed sets form a discrete indexed family by their open complements, which proves normality. AC is declared through the two supplier constructions; no hereditary collectionwise-normality assumption is used.

Source: https://fa.ewi.tudelft.nl/~hart/37/onderwijs/old-courses/settop/settop.pdf. No edits, amendments or published findings. Validation pending. Progress: 60/94 items and 2/4 pages accepted. Next: lem-rudin-internal-hull-tail-domination.

### Batch 15 — lem-rudin-internal-hull-tail-domination

Accepted. Complete authored proof and contract checked, with Hart Chapter 6 section 3 Exercises 3–4 p.38 and the reviewed bounded-cofinality hull supplier. Regularity puts the top in Y and identifies low coordinates exactly as n<=k. Applying the existing hull with all finite parameters gives the displayed x, tail cofinality aleph_k, and strict interpolation. Initial cofinalities and tail cofinalities share the strict bound aleph_(k+1), including an empty initial segment. For any internal u, evaluation and successor closure give u(n)+1 in M intersect aleph_n whenever u(n)<aleph_n; hence u(n)<x(n) without an extra cofinality bound. Rank bounds and transitivity justify the operations. AC is explicit; no defect found.

Source: https://fa.ewi.tudelft.nl/~hart/37/onderwijs/old-courses/settop/settop.pdf. No edits, amendments or published findings. Validation pending. Progress: 61/94 items and 2/4 pages accepted. Next: lem-rudin-neighborhoods-of-initial-top-slices-contain-tails.

### Batch 15 — lem-rudin-neighborhoods-of-initial-top-slices-contain-tails

Accepted. Complete proof and contract verified against Hart Chapter 6 section 3 Lemma 3.1 and Exercises 3–5 pp.37–38, including the local finite-top-coordinate expansion. Every finite top modification of the hull point remains in F_k with a larger finite cofinality bound. Finite subsets are countable by the proved binary coding; taking suprema only over modifications not containing n keeps the coordinate bounds strictly below x(n). Internal interpolation produces z in M below every coordinate top. For each internal Rudin point above z, its top coordinates on the tail form a finite set by its own uniform bound; the appropriate modified hull and its local box contain it. Elementarity then transfers any hypothetical external counterexample using only named sets and bounded coordinate comparisons. Thus the conclusion covers all strata and points attaining finitely many tail tops. k=0,1, empty finite modifications and strict endpoints are checked; no defect found.

Source: https://fa.ewi.tudelft.nl/~hart/37/onderwijs/old-courses/settop/settop.pdf. No edits, amendments or published findings. Validation pending. Progress: 62/94 items and 2/4 pages accepted. Next: thm-rudin-tail-neighborhood-obstruction.

### Batch 15 — thm-rudin-tail-neighborhood-obstruction

Accepted. Complete proof and contract read with Hart Chapter 6 section 3 Exercises 1–2/Lemma 3.1 p.37 and the full ordered-sum supplier. Coordinate top equalities are closed; infinitely many unbounded finite-aleph indices make the intersection of initial-top slices empty. AC chooses existing neighborhood bounds and countable suprema stay below each regular uncountable factor. The witness b(n)+omega_1 is strictly above b(n), has cardinality below aleph_n because n>=2, and has cofinality omega_1 by the final ordered-sum block and regularity. It therefore lies in X with a uniform aleph_2 bound and proves nonemptiness of the entire included tail. Initial F_0=F_1=X, zero b values, and coordinate top endpoints are explicitly covered. No defect found.

Source: https://fa.ewi.tudelft.nl/~hart/37/onderwijs/old-courses/settop/settop.pdf. No edits, amendments or published findings. Validation pending. Progress: 63/94 items and 2/4 pages accepted. Next: lem-cofinal-aleph-product-cardinality.

### Batch 15 — lem-cofinal-aleph-product-cardinality

Accepted. Complete explicit coding proof and contract checked against the cardinal-arithmetic and aleph interfaces. Increasing enumeration gives the upper injection. The power-of-two/odd partition splits every infinite sparse B into countably many infinite blocks; b_i(j)>=j+2 guarantees enough room. For each input ordinal the least finite aleph bound exists by the aleph_omega union definition; its successor tag lies below the chosen larger factor. Each block has exactly one nonzero tag, so decoding its predecessor recovers the input even at zero. Both injections prove the cardinal equality under the declared AC assumption. Hart Chapter 6 opening p.35 is context only; the coding is fully proved locally, with no external cardinality assertion consumed. No defect found.

No edits, amendments or published findings. Validation pending. Progress: 64/94 items and 2/4 pages accepted. Next: thm-rudin-dowker-space-and-cardinality.

### Batch 15 — thm-rudin-dowker-space-and-cardinality

Accepted. Complete proof/contract and exact ordinal-product interface checked. Hart Chapter 6 pp.35–38 supports the topological construction, whose local suppliers have been verified. Hausdorffness supplies T1 and normality plus the closed-slice obstruction contradicts exactly the shrinking criterion. For size, the explicit top-to-zero/finite-shift coordinate maps inject the inclusive product into Q. Conversely omega_1*(alpha+1) is strictly increasing by proper initial segments of ordinal blocks, stays below aleph_n by cardinal absorption and n>=2, and has cofinality omega_1 by its final regular block. It injects Q into X with one uniform aleph_2 bound. The cofinal-subproduct lemma then gives both inequalities and equality for every infinite sparse B, with no CH or continuum assumption. Zero and inclusive-top endpoints are treated. No defect found.

Source: https://fa.ewi.tudelft.nl/~hart/37/onderwijs/old-courses/settop/settop.pdf. No edits, amendments or published findings. Validation pending. Progress: 65/94 items and 2/4 pages accepted. Next: def-kojman-shelah-scale-subspace.

### Batch 15 — def-kojman-shelah-scale-subspace

Accepted. Definition and contract read against Hart Chapter 7 section 2 definition of Z p.40 and the already reviewed normalization supplier. The chosen scale is eventually strictly increasing and cofinal, normalized only where an uncountable-cofinality initial segment has a least upper bound. The subspace is exactly the union of its eventual-equality classes intersected with the Rudin space. It neither asserts every scale term is Rudin nor that every class meets the space. Admissible finite modifications preserve membership by a finite union of exceptional sets, including coordinate tops when Rudin cofinality bounds remain valid. The strict eventual and pointwise comparisons are distinct and unambiguous. No defect found.

Source: https://fa.ewi.tudelft.nl/~hart/37/onderwijs/old-courses/settop/settop.pdf. No edits, amendments or published findings. Validation pending. Progress: 66/94 items and 2/4 pages accepted. Next: lem-kojman-shelah-tail-supremum-closure.

### Batch 15 — lem-kojman-shelah-tail-supremum-closure

Accepted. Complete proof/contract checked with Hart Chapter 7 section 2 Exercise 5 p.40 and the reviewed tail-supremum theorem. Eventual strictness on infinite B proves uniqueness and strict increase of the associated scale indices. The existence of a later term excludes inclusive top values from each tail representative, so the strict-product hypothesis is actually met. The supplier gives tail cofinality aleph_m and eventual equality to f_delta. Replacing the finite prefix by tops yields a Rudin point with strict uniform bound aleph_(k+1), avoiding any unjustified cofinality assumption on the original prefix supremum. m=k=1, an empty prefix, zero indices and endpoint cases are handled. No defect found.

Source: https://fa.ewi.tudelft.nl/~hart/37/onderwijs/old-courses/settop/settop.pdf. No edits, amendments or published findings. Validation pending. Progress: 67/94 items and 2/4 pages accepted. Next: lem-kojman-shelah-subspace-is-closed.

### Batch 15 — lem-kojman-shelah-subspace-is-closed

Accepted. Full proof/contract verified with Hart Chapter 7 section 2 Exercises 6–10 p.41. Eventual trichotomy and the chosen box force equality patterns for points below t to be finite or cofinite. There are only countably many patterns, so the P-space property selects one whose class accumulates at t. A cofinite pattern finishes immediately. In the finite case the least infinite cofinality stratum exists because t has finitely many possible cofinalities; choosing k>=m above lower strata and the pattern ensures every tail cofinality is at least aleph_m. At each recursion stage fewer than aleph_m previous strict values stay bounded below t, and closure supplies a strictly larger class member. AC is fixed on nonempty intersections before recursion. Tail-supremum closure applies with all its strict-product and cutoff conditions; resetting the prefix to t retains Rudin membership and gives a point below t agreeing on an infinite stratum. The pattern dichotomy then forces eventual equality and t in X. No unjustified prefix-supremum cofinality is assumed; empty histories and m=1 are covered. No defect found.

Source: https://fa.ewi.tudelft.nl/~hart/37/onderwijs/old-courses/settop/settop.pdf. No edits, amendments or published findings. Validation pending. Progress: 68/94 items and 2/4 pages accepted. Next: lem-kojman-shelah-subspace-is-cofinal-and-has-successor-size.

### Batch 15 — lem-kojman-shelah-subspace-is-cofinal-and-has-successor-size

Accepted. Complete proof/contract checked against Hart Chapter 7 section 2 Exercises 2 and 11(c) pp.40–41 and the local scale-supremum/cardinal suppliers. The omega_1 recursion has only countable histories, so coordinate successor suprema stay below each regular factor; a least larger dominating scale index exists and coordinate maxima give actual strict-product representatives. Their supremum uses m=k=1 on all B and is a Rudin point strictly above the prescribed b. Each eventual class has at most aleph_omega members by countably many finite modification products, including inclusive tops and empty classes, yielding the upper cardinal bound. If X were smaller than regular aleph_(omega+1), its unique represented indices would be bounded; the just-proved pointwise cofinality contradicts the corresponding eventual scale bound. This proves the lower bound without asserting all classes are inhabited. AC uses, empty histories, zero inputs and sparse B are checked. No defect found.

Source: https://fa.ewi.tudelft.nl/~hart/37/onderwijs/old-courses/settop/settop.pdf. No edits, amendments or published findings. Validation pending. Progress: 69/94 items and 2/4 pages accepted. Next: thm-kojman-shelah-space-weight-and-character.

### Batch 15 — thm-kojman-shelah-space-weight-and-character

Accepted. Complete local invariant proof and contract checked, including the raw-supremum definition, minima interfaces and strictly increasing cofinal-map supplier. Finite cofinality strata at each point permit simultaneous diagonal lower bounds because countably many indices are bounded in each uncountable regular aleph_i; the finite tuple family bounds local character strictly below aleph_omega. At specially constructed top-coordinate points, any smaller base has bounded coordinate lower endpoints; delta+omega_1 is an admissible finite modification in every selected box yet excluded by one neighborhood, proving character at least aleph_n. No such lower bound is asserted at arbitrary points. A set smaller than regular lambda has bounded represented scale indices, and pointwise cofinality supplies a nonempty box missing it; hence density=lambda. Unions of the proved local bases give weight<=lambda, while choosing points from a smaller global base contradicts that density. Infinite B gives the raw character supremum aleph_omega. All AC choices have witnesses and zero/empty/top cases are treated. The journal source retrieval is historically exhausted (recorded earlier); no fresh read of its p.2465 is claimed. Hart Chapter 7 pp.40–41 supplies the freshly read framework, and these complete calculations resolve the mathematical claim directly without consuming an inaccessible assertion. No defect found.

Sources: exhausted https://shelah.logic.at/files/95569/609.pdf (statement after Theorem 3, p.2465; locator not freshly verified); freshly read https://fa.ewi.tudelft.nl/~hart/37/onderwijs/old-courses/settop/settop.pdf pp.40–41. No edits, amendments or published findings. Validation pending. Progress: 70/94 items and 2/4 pages accepted. Next: thm-kojman-shelah-zfc-dowker-space.

### Batch 15 — thm-kojman-shelah-zfc-dowker-space

Accepted. Full proof and contract checked against Hart Chapter 7 section 2 pp.40–41 Exercises 11–12 and the reviewed local suppliers. Closedness lets a discrete closed family in X remain closed and discrete in R, using R minus X outside X; ambient collectionwise separation then restricts. Open lifts V_k become W_k=V_k union (R minus X), which contain the full initial-top slices and restrict exactly to U_k. The full Rudin tail obstruction plus the proved pointwise cofinality yields an actual point of X in all U_k. Thus failure of countable paracompactness is proved for this subspace, not presumed hereditary. Hausdorff/T1 and two-member normality arguments are explicit, and the correct shrinking implication applies. Size and closedness have proved suppliers; empty indexed families and initial/top slices are retained. No defect found.

Working source: https://fa.ewi.tudelft.nl/~hart/37/onderwijs/old-courses/settop/settop.pdf. No edits, amendments or published findings. Validation pending. Progress: 71/94 items and 2/4 pages accepted. Next: def-balogh-finite-restriction-data.

### Batch 15 — def-balogh-finite-restriction-data

Accepted. Full definition, model-check proof and contract read against Hart Chapter 5 section 2 Exercises 11–16 and restriction tuples pp.32–33. The displayed parameter ranks lie below kappa+omega, and regular theta bounds ranks of countable hulls so M can be included as a parameter for N. Low-rank enumerations and elementarity prove countable elements are subsets, hence M subset N; natural numbers, finite subsets and evaluations are handled without assuming V_theta models ZFC. A differing coordinate of two binary functions in N reflects into A=N intersect kappa, giving injectivity only on C intersect N. This proves exactly the trace-in-B iff membership-in-M test used later. Finite function values yield q and r with the asserted domains; root triples are countable and chosen infinite witnesses exist by eligibility, with empty I_T allowed. No defect found.

Fresh source: https://fa.ewi.tudelft.nl/~hart/37/onderwijs/old-courses/settop/settop.pdf pp.32–34, complete restriction/enumeration/map source passage retrieved. No edits, amendments or published findings. Validation pending. Progress: 72/94 items and 2/4 pages accepted. Next: lem-balogh-countable-restriction-enumeration.

### Batch 15 — lem-balogh-countable-restriction-enumeration

Accepted. Complete proof and contract read against Hart Chapter 5 section 2 restriction enumeration/Exercise 16 p.33. Binary-array coding proves continuum^omega=continuum and bounds all tuple coordinates before thinning choices. The diagonal restriction argument proves countable subsets of the continuum ordinal are bounded without assuming the continuum regular. At each label stage fewer than continuum labels are used and the tail above a bounded support still has full size, so the least unused eligible label exists even if the continuum is singular. Repeated scheduling of countably many eligible triples chooses fresh points and disjoint finite petals because each old trace excludes at most one candidate in a fixed delta-system family. Every root occurs infinitely often; empty I_T and empty petals are explicitly allowed. Choices of thinning data are made after tuple counting. AC and recursion uses are justified; no defect found.

Source: https://fa.ewi.tudelft.nl/~hart/37/onderwijs/old-courses/settop/settop.pdf. No edits, amendments or published findings. Validation pending. Progress: 73/94 items and 2/4 pages accepted. Next: lem-balogh-combinatorial-map.

### Batch 15 — lem-balogh-combinatorial-map

Accepted. Full authored proof and contract checked against Hart Chapter 5 section 2 Lemma 2.1 and Exercises 11–17 pp.31–34. The map is fixed from labeled tuples and disjoint petals before arbitrary test functions are chosen. Its second branch is unique. The tuple label beta is outside both models; finite E_0 and binary evaluation belong to M, so the definable root set containing beta cannot be countable. Greedy recursion supplies an actually maximal root family in the rank level, then elementarity supplies it in M; countability would let beta extend it, a contradiction. A petal element in M uniquely defines its index, so infinitely many reflected indices in N minus M have exactly the required root. Trace injectivity is used only on C intersect N, proving eligibility. The thinning witness alpha is below beta; finite h(alpha) lies in N and avoids beta. Splitting g(alpha) by membership in M verifies respectively the root and petal branches of d_c. Empty roots, default zero values and all quantifier domains are checked; no defect found.

Source: https://fa.ewi.tudelft.nl/~hart/37/onderwijs/old-courses/settop/settop.pdf. No edits, amendments or published findings. Validation pending. Progress: 74/94 items and 2/4 pages accepted. Next: def-balogh-continuum-topology.

### Batch 15 — def-balogh-continuum-topology

Accepted. Definition/contract checked with Hart Chapter 5 section 2 construction and Exercise 2 p.31 and the proved combinatorial-map supplier. The finite constraint family allows empty members rather than assuming properness; empty s gives the cofinite set. Openness imposes the predecessor-level witness only at positive heights. The forward justified_by lemma owns topology and neighborhood existence, while U_-1 is explicitly only the empty indexing convention. All types and zero/empty cases match the source construction; no defect found.

Source: https://fa.ewi.tudelft.nl/~hart/37/onderwijs/old-courses/settop/settop.pdf. No edits, amendments or published findings. Validation pending. Progress: 75/94 items and 2/4 pages accepted. Next: lem-balogh-neighborhood-basis.

### Batch 15 — lem-balogh-neighborhood-basis

Accepted. Complete proof/contract checked against Hart Chapter 5 section 2 open-set definition and Exercises 1–2,8 pp.31–32. Combining finite constraints proves the exact F-intersection identity and topology axioms even with improper families. Singleton complements use one finite exclusion at the relevant predecessor level, establishing T1. Finite-height induction proves all recursive sets open and refines any given neighborhood using AC only for established lower-level choices. Their singleton top traces give relative discreteness. The closure formula is proved in both directions; a failed F-intersection gives an explicit avoiding open set with all earlier levels, including the bottom-level U_-1=empty case. No defect found.

Source: https://fa.ewi.tudelft.nl/~hart/37/onderwijs/old-courses/settop/settop.pdf. No edits, amendments or published findings. Validation pending. Progress: 76/94 items and 2/4 pages accepted. Next: lem-balogh-hereditary-normality.

### Batch 15 — lem-balogh-hereditary-normality

Accepted. Complete argument/contract checked against Hart Chapter 5 section 2 Exercises 3–6 pp.31–32. The finite-height partition induction uses the characteristic function and d_c-preimage partition to provide disjoint predecessor witnesses. The open-extension calculation explicitly verifies height m+1 using L_m minus the closed set contained in O, and higher levels directly; it does not assume U_m closed. Different-level separation and a finite intersection of lower/same-level pairs produce V_n whose closure avoids all K, with the same-level choice supplying the needed extension condition. The symmetric countable unions remove only finitely many closed sets per summand; comparing indices proves disjointness and opposite-closure avoidance preserves H,K. Relatively closed disjoint subsets of any subspace are separated in X, so restriction proves hereditary normality; T1 yields Hausdorffness. Empty sides and height zero are checked. No defect found.

Source: https://fa.ewi.tudelft.nl/~hart/37/onderwijs/old-courses/settop/settop.pdf. No edits, amendments or published findings. Validation pending. Progress: 77/94 items and 2/4 pages accepted. Next: lem-balogh-failure-of-countable-shrinking.

### Batch 15 — lem-balogh-failure-of-countable-shrinking

Accepted. Complete proof/contract checked against Hart Chapter 5 section 2 Exercises 7–10 p.32. Disjointifying a hypothetical countable separated cover preserves its witnesses; finite parameter encodings give exactly the typed tests for the combinatorial map, whose alpha<beta violates separation within one piece. Failed Phi membership supplies witnesses avoiding all of A, so A minus Psi(A) is separated for Psi=A intersect Phi(A). This deliberate intersection makes iterates decreasing without assuming A subset Phi(A). Closedness lifts each iterate to its successive level; absence of level n+1 forces termination and yields n+1 separated pieces, including n=0 and empty pieces. Flattening these finite decompositions contradicts the first result. The increasing-open-cover shrinking implication applies and excludes countable paracompactness. AC choices have established witnesses; no defect found.

Source: https://fa.ewi.tudelft.nl/~hart/37/onderwijs/old-courses/settop/settop.pdf. No edits, amendments or published findings. Validation pending. Progress: 78/94 items and 2/4 pages accepted. Next: thm-balogh-continuum-sized-zfc-dowker-space.

### Batch 15 — thm-balogh-continuum-sized-zfc-dowker-space

Accepted. Full proof/contract checked with Hart Chapter 5 section 2 and all reviewed local Balogh suppliers. The proved map, topology, hereditary normality and shrinking failure give exactly a Hausdorff T1 Dowker space. Its underlying continuum-by-omega product has cardinality continuum by the bottom-level injection and infinite absorption; its countably many levels are relatively discrete by the basis lemma. The T1 hypothesis of the interval-product implication is explicitly met, so normality of that product contradicts the proved failure of countable paracompactness. No CH, extra cardinal arithmetic, or proper-filter assumption is used. Nonempty witness, zero height and closed interval endpoints are covered; no defect found.

Source: https://fa.ewi.tudelft.nl/~hart/37/onderwijs/old-courses/settop/settop.pdf, Ch.5 section 2 pp.31–34. No edits, amendments or published findings. Validation pending. Progress: 79/94 items and 2/4 pages accepted. Next: def-small-dowker-luzin-stick-and-ad-principles.

### Batch 15 — def-small-dowker-luzin-stick-and-ad-principles

Accepted. Full definition/contract and Baire, diamond, Ostaszewski-club and omega_1 interfaces read. Fresh source arXiv:2209.10504v1 Definitions 1.1,2.10,4.1 and Fact 4.2, pp.1,5,11, fixes the exact quantifiers. At omega_1 uncountable targets are cofinal; countable limit indices have cofinality omega. Clause 3 uses disjoint cofinal row members with intersections bounded in the smaller index, not necessarily finite. Clause 4 specializes the stronger cardinal-intersection condition to finite intersections and diagonal guessing for all earlier targets; padding a finite list and taking a club tail proves its implication to clause 3. Selecting row member zero gives the two-target system on a countable stationary partition. Classical Luzin and cylinder-Luzin are separately defined; the closed nowhere-dense cylinder test is proved. Ordinary diamond, Ostaszewski club, club-target guessing and parameterized diamond(b) are not conflated. No ZFC existence is asserted; empty/repeated targets and excluded zero/successor indices are correct. No defect found.

Source: https://arxiv.org/pdf/2209.10504. No edits, amendments or published findings. Validation pending. Progress: 80/94 items and 2/4 pages accepted. Next: def-small-dowker-tight-strongly-unbounded-coloring.

### Batch 15 — def-small-dowker-tight-strongly-unbounded-coloring

Accepted. Definition and contract checked against arXiv:2209.10504 Definition 2.1/Remark 2.2 pp.2–3 and the construction notation on pp.6–7. At omega_1 cofinal column targets are exactly uncountable targets. Strong unboundedness fixes a prefix of the tested coordinate length and requires arbitrarily large next values. Tightness is explicitly downward cofinality of a nonempty family of arbitrary finite-string sets, without unneeded tree closure. Equal columns are allowed; Delta is only defined for unequal functions. The finite-sum majorant is natural-valued, strictly increasing and strictly exceeds each coordinate by the displayed arithmetic. Empty prefix, empty T and zero-coordinate cases are correct; no defect found.

Source: https://arxiv.org/pdf/2209.10504. No edits, amendments or published findings. Validation pending. Progress: 81/94 items and 2/4 pages accepted. Next: lem-small-dowker-ch-gives-luzin-set.

### Batch 15 — lem-small-dowker-ch-gives-luzin-set

Accepted. Full proof/contract checked with arXiv:2209.10504 Definition 2.10/Fact 2.11 p.5 and exact Baire/irrational, countability and recursion interfaces. Countable cylinder coding plus CH enumerates closed nowhere dense sets. The strictly lengthening cylinder fusion supplies the missing Baire-category existence proof locally; old singletons are closed nowhere dense, so every countable ordinal stage has a nonempty complement and the fixed AC function supports recursion. Each forbidden set meets the result only in countably many earlier choices; countable-choice union extends this to all meager sets. Any uncountable subset of a classical Luzin set has closure with nonempty interior, yielding the cylinder property; no converse is claimed. Density of the irrationals makes ambient closures of relatively nowhere dense sets nowhere dense, so removing countably many rationals and the stated homeomorphism transfer the real-line branch. Exact cardinality, current-index exclusion, empty prefix and repeated forbidden sets are checked. No defect found.

Source: https://arxiv.org/pdf/2209.10504. No edits, amendments or published findings. Validation pending. Progress: 82/94 items and 2/4 pages accepted. Next: lem-small-dowker-luzin-gives-tight-coloring.

### Batch 15 — lem-small-dowker-luzin-gives-tight-coloring

Accepted. Complete proof/contract checked against arXiv:2209.10504 Lemma 2.12 and both Claims 2.12.1–2 p.5, whose full proof was read. Bijective columns preserve uncountability and the cylinder property realizes every next digit over a fixed prefix, proving strong unboundedness. Removing all countable prefix fibers uses exactly countable choice and leaves uncountably many columns. Applying the cylinder property there puts all comparable strings T_s inside T even when T is not prefix-closed. A surviving column extending s proves its fiber uncountable, so T_s itself belongs to T_c. The fixed family of eligible T_s is countable and downward cofinal. Empty prefixes and endpoint equality at s are handled; no converse or extra existence assumption is used. No defect found.

Source: https://arxiv.org/pdf/2209.10504. No edits, amendments or published findings. Validation pending. Progress: 83/94 items and 2/4 pages accepted. Next: lem-small-dowker-coloring-gives-ad-guessing.

### Batch 15 — lem-small-dowker-coloring-gives-ad-guessing

Repaired (confidence 1). Reviewed every inference in steps 1.1–14.1 against RST Theorem 3.3/Claims 3.3.1–8 (pp.6–10, arXiv:2209.10504v1) and Lambie-Hanson–Rinot Lemma 3.31/Claim 3.31.1 (June 17 2022, pp.18–19), with the complete local omega_1 walk construction. Corrected the false countability assertion in 3.2 to cardinality aleph_1 and proved the bound by the maximum-coordinate well-order and its countable predecessor order types (F3/F5), without new prerequisites. Checked normalization of column fibers, stationary splitting, finite walks and bounded sublevels, fresh matrix indices, minimum-candidate calculation, pressing-down stationary contradiction and nongood-row ladder replacement retaining cross-row bounds and all successful rows. AC is declared for simultaneous enumerations, ladders and splittings. No unresolved mathematical step remains.

Sources read: https://arxiv.org/pdf/2209.10504, Theorem 3.3 and Claims 3.3.1–8, pp.6–10; https://www.assafrinot.com/files/paper36.pdf, Lemma 3.31 and Claim 3.31.1, pp.18–19. Exact repair suppliers: `thm-countable-union-of-countable`, `thm-omega-one-is-the-least-uncountable-ordinal`, with already declared `def-axiom-of-choice`. No new item, manifest, page-order, dependency, frontier or shared-plan amendment required. Contract derivation 3.2 and risk review synchronized. Closed owned defect `p2c24-g15-6b-coloring-cardinality` appended through defect-ledger interface. Reflow unchanged; item precheck and strict selected contract check passed. No published finding. Checkpoint: 84/94 items, 2/4 pages complete; next `lem-small-dowker-stick-gives-ad-guessing`.

### Batch 15 — lem-small-dowker-stick-gives-ad-guessing

Accepted all seven proof steps. The fixed double-stick sequence is countably infinite and the recursive disjoint selections force infinitely many distinct infinite-intersection indices into any hypothetical finite cover, proving the strengthened guessing property. The finite-avoidance recursion produces pairwise finite whole-row intersections; the closure club D_X makes every relevant preliminary row good, and diagonal intersection guesses every target index below the row. Checked zero/successor fallback, infinite eligible Y sets after finitely many removals, countable choice from explicit AC, regularity of omega_1 and stationary intersection. Sources fully read: RST Fact 4.2 and Theorem 4.3/Claims 4.3.1–2, pp.11–12 (https://arxiv.org/pdf/2209.10504); Chen–Garti–Weinert Claim 3.2 with setup and full proof, pp.15–16 (https://arxiv.org/pdf/1801.00238). Contract derivations and boundaries match the authored argument.

Dependencies: `def-small-dowker-luzin-stick-and-ad-principles`, `def-axiom-of-choice`, `thm-countable-union-of-countable`, `thm-countable-subsets-of-omega-one-are-bounded`, `thm-omega-one-is-the-least-uncountable-ordinal`, `thm-transfinite-recursion`, `thm-diagonal-intersection-of-clubs`. No edits, new suppliers, shared-plan/Phase-2 amendments, published findings, frontier edges or blockers. Checkpoint: 85/94 items, 2/4 pages complete; next `def-small-dowker-ladder-topology`. The preceding repaired item strict contract check had zero errors and one shotgun-bracket advisory at step 1.1; all listed facts there have actual uses, so no mathematical repair is indicated.

### Batch 15 — def-small-dowker-ladder-topology

Accepted definition and all verification steps. The lower-level restriction is cofinal or empty, avoids undefined indices on S_0, and inherits bounded cross-ladder intersections at both indices. Arbitrary unions and finite intersections satisfy the bounded-omission topology test; complementation gives the exact closedness iff. The N_alpha^epsilon sets are correctly only weak tests, not asserted open. Countable level pigeonhole plus two-target AD gives stationary simultaneous accumulation on every sufficiently high level and proves the active set stationary. Checked empty intersections/ladders, zero and successor inactivity, equal targets, and explicit AC for countable unions/boundedness. Source freshly read: Rinot–Shalev space definition and Lemma 3.2, p.17, https://papers.assafrinot.com/paper48.pdf (working author mirror; original files/paper48.pdf returned a safe-open error). Contract matches the proof.

Dependencies: `def-small-dowker-luzin-stick-and-ad-principles`, `thm-countable-union-of-countable`, `thm-omega-one-is-the-least-uncountable-ordinal`, `thm-countable-subsets-of-omega-one-are-bounded`, `def-topological-space`, `def-axiom-of-choice`. No edits, new suppliers, shared-plan/Phase-2 amendments, published findings, frontier edges or blockers. Checkpoint: 86/94 items, 2/4 pages complete; next `lem-small-dowker-ladder-normality`.

### Batch 15 — lem-small-dowker-ladder-normality

Accepted full proof. Two uncountable closed targets would force a common active limit point; hence one closed member is countable and bounded. Countable disjointification removes only finitely many bounded intersections at each natural stage and gives arbitrary omega-color almost-P0 extensions. A successor cut is clopen. The fixed tail extension operation expands each closed pair monotonically and disjointly; the closedness argument excludes the inactive cut, while tail inclusion explicitly removes the opposite closed set. Finite iteration gives disjoint open unions; closed singletons then give Hausdorffness. Empty and finite local families, successor/limit boundaries and exact AC uses checked. Fresh source: https://papers.assafrinot.com/paper48.pdf, Proposition 2.8 p.5 and complete Lemmas 3.4–3.8/Claims 3.8.1–2 pp.17–18, Lemma 3.10 p.19. The omega_1 local disjointification is proved directly, so no higher-cardinal nonreflection or uniformization result is consumed. Contract matches.

Dependencies: `def-small-dowker-ladder-topology`, `thm-omega-one-is-the-least-uncountable-ordinal`, `thm-countable-subsets-of-omega-one-are-bounded`, `def-normal-and-t4-spaces`, `def-hausdorff-space`, `def-axiom-of-choice`. No edits, new suppliers, shared-plan/Phase-2 amendments, published findings, frontier edges or blockers. Checkpoint: 87/94 items, 2/4 pages complete; next `lem-small-dowker-ladder-shrinking-obstruction`.

### Batch 15 — lem-small-dowker-ladder-shrinking-obstruction

Accepted all three steps. D_n are decreasing closed sets, contain the stationary level S_(n+1), and have empty intersection because each point has a finite level. Each closed complement of an open expansion is countable by the previously proved no-disjoint-uncountable-closed-pair property; AC gives a countable union, leaving a point in every expansion. Checked D_0, empty/repeated complements and no need for monotone expansions. The normality, T1 and AC hypotheses of the proved shrinking criterion and interval-product characterization hold; literal underlying omega_1 gives the cardinality. Fresh source: Rinot–Shalev Lemma 3.1 p.16 and Corollaries 3.9/3.11 p.19, https://papers.assafrinot.com/paper48.pdf. Contract derivations and boundary dispositions match.

Dependencies: `def-small-dowker-ladder-topology`, `lem-small-dowker-ladder-normality`, `thm-countable-union-of-countable`, `thm-countable-subsets-of-omega-one-are-bounded`, `thm-omega-one-is-the-least-uncountable-ordinal`, `thm-countable-paracompactness-shrinking-criterion`, `thm-dowker-product-characterization`, `def-axiom-of-choice`. No edits, new suppliers, shared-plan/Phase-2 amendments, published findings, frontier edges or blockers. Checkpoint: 88/94 items, 2/4 pages complete; next `thm-small-dowker-conditional-aleph-one-constructions`.

### Batch 15 — thm-small-dowker-conditional-aleph-one-constructions

Accepted every branch and the locally proved comparisons. The Ulam matrix supplies a countably infinite stationary partition independently of coloring assumptions; zeroth-row selection exactly supplies single-ladder two-target AD. CH, classical/cylinder Luzin and tight coloring compose through the already reviewed exact suppliers. Stick diagonal guessing gives finite guessing by padding and a club tail. Clubsuit gives a stick sequence with fixed omega fallback; ordinary diamond gives CH by the least exact-real-guess injection and Cantor, and separately clubsuit by cofinal thinning on a limit-point club. The independent Balogh route retains AC and substitutes CH only for its final continuum cardinality. All eight sufficient alternatives yield normal Hausdorff non-countably-paracompact spaces of size aleph_1; no converse or unconditional aleph_1 assertion occurs. Complete published prop-diamond-implies-ostaszewski-club and lem-limit-points-of-unbounded-sets read with exact hypotheses, no defect found. RST Theorems 3.3/4.3 and RS section 3 freshly read (URLs recorded in preceding item entries). Contract inputs/boundaries agree.

Dependencies: `lem-small-dowker-ch-gives-luzin-set`, `lem-small-dowker-luzin-gives-tight-coloring`, `lem-small-dowker-coloring-gives-ad-guessing`, `lem-small-dowker-stick-gives-ad-guessing`, `def-small-dowker-luzin-stick-and-ad-principles`, `def-small-dowker-ladder-topology`, `lem-small-dowker-ladder-normality`, `lem-small-dowker-ladder-shrinking-obstruction`, `thm-balogh-continuum-sized-zfc-dowker-space`, `thm-small-intersections-of-clubs`, `lem-limit-points-of-unbounded-sets`, `thm-omega-one-is-the-least-uncountable-ordinal`, `thm-countable-union-of-countable`, `thm-countable-subsets-of-omega-one-are-bounded`, `thm-cantor-powerset`, `prop-diamond-implies-ostaszewski-club`, `def-axiom-of-choice`. No edits, new suppliers, shared-plan/Phase-2 amendments, published findings, frontier edges or blockers. Checkpoint: 89/94 items, 2/4 pages complete; next `rem-aleph-one-dowker-status-dated-audit`.

### Batch 15 — rem-aleph-one-dowker-status-dated-audit

Accepted as bounded historical orientation. Freshly verified arXiv:2504.15398v1 header and submission timestamp 21 April 2025, and the complete opening of section 9 on printed p.26/PDF index25 reporting the size-omega_1 question open. Verified the matching 2025 On Delta-spaces passage on publisher PDF p.119/PDF index2, corresponding to p.3 of the provisional version whose primary-paper text is mirrored on ResearchGate. The d-nb PDF failed twice; publisher PDF retrieval succeeded. RST arXiv record and the already read introduction establish conditional constructions, with 2024 journal citation also in Cruz reference27. The scoped 10 September 2026 web search did not verify a resolution; this is not an exhaustive search, an independence result, or a prerequisite. Source URLs: https://arxiv.org/pdf/2504.15398; https://arxiv.org/abs/2504.15398; https://link.springer.com/content/pdf/10.1007/s11856-025-2733-2.pdf; https://www.researchgate.net/publication/389282372_On_D-spaces; https://arxiv.org/abs/2209.10504. Contract correctly treats the remark as non-proof orientation.

Dependencies: none. No edits, new suppliers, shared-plan/Phase-2 amendments, published findings, frontier edges or blockers. Checkpoint: 90/94 items, 2/4 pages complete; next `ex-countable-shrinking-on-a-discrete-space`.

### Batch 15 — ex-countable-shrinking-on-a-discrete-space

Accepted both verification steps. In a discrete space every subset is clopen, so G_n=F_n has closure F_n and preserves the empty intersection, including empty X or members. On omega the explicit tails contain every m only through stage m; the canonical singleton family refines each open cover and is locally finite at singleton neighborhoods. No family of containing cover members is selected, hence the choice-free assertion is correct. Contract matches these calculations and the definition of countable paracompactness. Hart Chapter4 section3 Theorem3.3(3), p.27, was freshly read earlier; this specialization is verified directly.

Dependencies: `def-countable-paracompactness-and-dowker-space`. No edits, new suppliers, shared-plan/Phase-2 amendments, published findings, frontier edges or blockers. Checkpoint: 91/94 items, 2/4 pages complete; next `ex-rudin-initial-top-slice`.

### Batch 15 — ex-rudin-initial-top-slice

Accepted the explicit coordinate calculation. The finite prefix has cofinalities aleph_n, the tail aleph_1, all uncountable and below aleph_(max(k,1)+1). This handles k=0,1 with empty prefix. Slice membership uses inclusive coordinate tops; failure at a later l is asserted only for l>=2, so the l coordinate exists and has omega_1<aleph_l. The displayed h_3 lies in F_3 minus F_4. AC and successor-cardinal regularity match the supplier. Hart Chapter6 section3 p.37 was freshly read; contract matches the calculation.

Dependencies: `def-rudin-ordinal-box-space`, `thm-regularity-of-the-alephs`, `lem-rudin-neighborhoods-of-initial-top-slices-contain-tails`, `def-axiom-of-choice`. No edits, new suppliers, shared-plan/Phase-2 amendments, published findings, frontier edges or blockers. Checkpoint: 92/94 items, 2/4 pages complete; next `ex-kojman-shelah-scale-used-at-a-tail-supremum`.

### Batch 15 — ex-kojman-shelah-scale-used-at-a-tail-supremum

Accepted all three steps after rereading the exact tail-supremum supplier. At each countable stage the t_xi supremum is below every factor and earlier indices are bounded in regular lambda. Cofinality followed by a later term gives a nonempty eligible index set, whose least element makes the recursion specified. The max representative is strictly pointwise above earlier representatives and eventually equals its scale term. With m=k=1, the whole B is the tail and the supplier gives product membership, constant cofinality omega_1 and eventual equality to f_delta; the uniform strict bound aleph_2 yields an actual Rudin/subspace point. Stage0/1 and arbitrary b(n)+1 remain below the factor tops. Hart Chapter7 Lemma1.2/Exercise11(c), pp.39–41, freshly read earlier; no arbitrary scale-class representative or missing nonemptiness assumption is used. Contract matches.

Dependencies: `def-kojman-shelah-scale-subspace`, `lem-scale-tail-suprema-have-prescribed-cofinality`, `thm-cofinality-basics`, `thm-regularity-of-the-alephs`, `thm-transfinite-recursion`, `def-axiom-of-choice`. No edits, new suppliers, shared-plan/Phase-2 amendments, published findings, frontier edges or blockers. Checkpoint: 93/94 items, 2/4 pages complete; next `fs-normality-is-preserved-by-product-with-the-unit-interval`.

### Batch 15 — fs-normality-is-preserved-by-product-with-the-unit-interval

Accepted the refutation. The explicit B={2,3,...} meets every coordinate hypothesis of the proved Rudin theorem under AC; the resulting witness is normal T1 and not countably paracompact. Normality of its ordinary product with the full usual interval would imply the forbidden countable paracompactness by the proved product characterization. The relative box topology defines X; it is not substituted for the two-factor topology. Both interval endpoints and AC assumptions are explicit. The direct contradiction refutes the universal statement without any empty-space obligation. Hart Chapter4 Theorem3.4 p.28 and Chapter6 pp.35–38 freshly read earlier; contract matches.

Dependencies: `thm-rudin-dowker-space-and-cardinality`, `thm-dowker-product-characterization`, `def-axiom-of-choice`. No edits, new suppliers, shared-plan/Phase-2 amendments, published findings, frontier edges or blockers. Checkpoint: 94/94 items, 2/4 pages complete; next the two PCF/Dowker pages.

### Batch 15 — page pcf-scales-and-zfc-dowker-spaces

Accepted full page prose and current 60-item order. The page accurately distinguishes the general PCF development from the direct countable-product scale proof, then the Rudin/Kojman–Shelah, Balogh and conditional small-Dowker arguments. Its AC statement, dated-status qualification and companion reference match the reviewed items. No Recorded catalogue result is consumed and the prerequisites/suppliers remain those already established; the one local coloring cardinality repair requires no page prose or order change. Sources and exact construction dependency IDs are in the completed item entries above. No page edits, new suppliers, shared-plan/Phase-2 amendments, published findings or blockers.

### Batch 15 — page pcf-scales-and-zfc-dowker-spaces-examples

Accepted full page prose and four-example order. The discrete shrinking example, explicit initial-top Rudin points, actual normalized-scale representatives and supremum, and interval-product refutation support each narrative assertion. The three ordinal examples explicitly assume AC while the discrete computation is choice-free. Opposite shrinking behavior and ordinary two-factor product conventions agree with the A-page results; no additional prerequisite or mathematical claim is introduced. Sources and exact construction dependency IDs are in the completed item entries above. No page edits, new suppliers, shared-plan/Phase-2 amendments, published findings or blockers.

### Batch 15 — required risk record correction

The first final `risk-report --require-reviewed` found two missing structured reviews, for `lem-boolean-quotient-congruence` and `def-kojman-shelah-scale-subspace`. Both items had complete first-pass mathematical evidence in their accepted decisions; current items and contracts were reread and that specific evidence was placed in complete `risk_review` entries. No mathematical text was changed. The workflow omissions are closed owned defects `p2c24-g15-6b-risk-quotient` and `p2c24-g15-6b-risk-scale-subspace`, appended through the defect-ledger interface. As required for gate findings, the existing authored decisions now record repaired status and confidence 1 for these contract-only repairs; no duplicate supplemental decisions were created. Checkpoint: all 94 items and 4 pages have decisions. Final validation and dependency reconciliation remain.

### Batch 15 — manifest reconciliation

For `thm-kojman-shelah-space-weight-and-character`, the manifest omitted two dependencies already in the authored item and exact contract: `lem-ordinal-sum-as-an-order-type` (F10, step 1.2, the final omega_1 block in delta+omega_1) and `lem-cofinality-is-well-defined` (F4, step 1.1, strictly increasing cofinal maps). Both published interfaces were reviewed and match these uses. Added them to the owned manifest only; mathematical text, statement, provenance and contract remain accurate. Closed metadata defect `p2c24-g15-6b-invariants-manifest` is attached to the existing authored decision as repaired, confidence 1. Frontier refresh passed; these are published suppliers, not changing-frontier edges. No new item, pair, page, scope change, shared-plan requirement or Phase-2 amendment beyond this exact manifest synchronization is needed.

### Batch 15 — completed local review and checks

All dispatched obligations are recorded: 94 items and 4 pages, with 94 accepted decisions and 4 repaired decisions. The repairs are one mathematical wording/bound correction (`lem-small-dowker-coloring-gives-ad-guessing`, step 3.2), two missing required risk-review records (`lem-boolean-quotient-congruence`, `def-kojman-shelah-scale-subspace`), and one manifest dependency synchronization (`thm-kojman-shelah-space-weight-and-character`). All four have closed, uniquely owned defect references and `repair_confidence: 1`. The other 127 group decisions, including other batches and any supplemental decisions, were preserved by keyed merges. No unresolved escalation, source-understanding blocker or proposed withdrawal remains in batch 15.

Local checks:

- Reflow and precheck passed for the mathematically edited item; reflow made no additional changes. Scoped precheck over all 94 items checked 76 proof-bearing bodies, with zero failures.
- Strict proof-contract check passed for the owned contract with zero errors. Its two shotgun-bracket advisories are at step 1.1 of the coloring and stick guessing lemmas: the declared facts have actual uses in those steps (club tools/regularity in the former; countable exclusions and recursion in the latter), while later steps legitimately cite earlier derivations. No citation defect was found.
- `risk-report --require-reviewed` passed after the two recorded review-record repairs; all required HIGH/CRITICAL reviews are complete and specific.
- Rendercheck on all 94 items and 4 pages returned no errors or warnings, with the actual KaTeX and YAML checks available.
- Scoped citecheck completed with six order-axiom heuristics, all examined: `def-forcing-preorder-compatibility-and-filter` states the preorder axioms itself; `lem-cofinal-aleph-product-cardinality` uses cardinal-comparison antisymmetry through its declared basic-laws supplier; `lem-rudin-bounded-cofinality-hull-transfer`, `lem-rudin-internal-hull-tail-domination`, and `lem-rudin-neighborhoods-of-initial-top-slices-contain-tails` use transitivity of a rank level for bounded absoluteness, not an omitted order axiom; `thm-choice-implies-boolean-prime-ideal-principle` checks the elementary subset order directly. No extra dependency is warranted by these warnings.
- Manifest dependency sets now equal the actual item declarations. A final diagnostic initially compared list order as well as membership and stopped at `lem-pcf-cofinality-ideals-and-cutoff-conventions`; dependency ordering has no significance here. The corrected set comparison passed without altering that sound item or its manifest.
- The declared dependency closure has 481 distinct items, no missing supplier, and no `proved_here: false` supplier. Mathematical prerequisite interfaces and relevant proof uses were reviewed item by item; this structural count is not an independent audit of all 481 proofs.
- There are no declared cross-batch dependencies for owned consumers; the owned frontier input remains `[]`, consistent with the actual manifest. Frontier refresh passed after manifest synchronization. No changing-frontier supplier was silently presumed.
- Defect-ledger validation for this run passed (14 run rows, zero errors). The final obligation check confirms exactly one correctly routed decision per owned ID and fixed, correctly owned defect references for every repair.

No new published defect was identified in the prerequisite interfaces reviewed, so no canonical published-consumer ledger edit or lock was needed. Published content was not edited. Search results mentioning this repository's Recorded pages were not used as mathematical suppliers or evidence of current literature status. Source retrieval limitations, exact alternative proof evidence and working mirrors remain recorded in the individual checkpoints; no unavailable full text was represented as freshly read.

Serial-lead amendments: only the exact two published dependency additions to batch 15's manifest recorded above; no new suppliers, shared-plan page prerequisites, pairs, Phase-2 scope items or page-order changes. The engine owns all scheduling, hash joins and subsequent 6C/6D work. No judging, stamping, self-certification, dispatch or transition was performed. Local review is complete; next action belongs to the engine's join and serial audit.
