# Step 3b — group g, phase-2-catchup-24

Current dispatch: `step3b-g-357ebc7f65e1a181`; batches 14, 15, 16. Item adjudication is complete: **200 accept, 13 repaired, 2 escalate** across 215 items. All item receipts match current inputs, and all five Step-3a sufficient decisions remain current. The final gate is **open**, not certified: the two owner escalations below remain unresolved. Final mechanical results and shared-plan reconciliation obligations are recorded at the end.

The item entries and continuation checkpoints below preserve the audit history (initial dispatch `step3b-g-8945190e06d87011`). Their “next” and “pending” statements describe the checkpoint date, not the current completion state. No accepted item was changed to obtain acceptance, no owner ruling was invented, and no escalation was retried.

## Recorded items

### `def-robinson-q-and-peano-arithmetic` — accept

Checked the exact current batch-14 contract: seven universally closed Q axioms, PA induction with parameters, successor numerals, and `x≤y := ∃z(z+x=y)`, with strict order defined by inequality. The left-addend convention avoids assuming Q proves commutativity. These are coherent syntactic definitions in ZF, with no AC use.

Examined published dependencies: `def-set-coded-formal-derivation` (all six logical schemes and three rules, sentence theories); `def-set-coded-terms-and-formulas` (primitive negation/conjunction/existential syntax and abbreviation expansion); `def-free-variables-and-syntactic-substitution` (free occurrences and free-for restriction); `def-theories-models-and-semantic-consequence` (universal closure convention). Source locator retained from contract: Moschovakis, `https://www.math.ucla.edu/~ynm/lectures/lnl.pdf`, §4B.5 / pp145–149. No fresh external source reading was needed for this definitional item; the decision rests on the displayed definition and examined syntax, not a historical confidence stamp.

Receipt recorded with confidence 1 and all four examined IDs. Contract unchanged. No same-frontier edge or published defect discovered for this item. Final mechanical checks remain pending.

## Continuation checkpoint

Next: the mutually explanatory certified-code definition and its well-definedness lemma; examine the lemma as the justification before accepting the definition's operation claims. Read the current contracts again on continuation. Published `def-bounded-arithmetic-formula` and `lem-bounded-quantifiers-preserve-primitive-recursiveness` have been read: the former supplies all-arity initial functions and parameter recursion, and the latter proves bounded sums/products with correct empty-bound values. Their natural-number recursion suppliers still need their relevant clauses checked. No other group item has been adjudicated. Scope refresh, remaining manifests/prose/coverage/dependency readings, consumer-edge reconciliation and dependency/scope/policy/coverage/source/plan/final checks remain open.

### `def-effective-theory-and-certified-godel-numbering` — accept

Exact convention: numerical words `1 1^k 0 c(bin(a0))...c(bin(a{k-1}))`, `c(w)=1^{|w|}0w`, canonical binary zero `0`, empty sequence code 2, invalid/out-of-range outputs zero. Effective axioms carry primitive-recursive enumeration witnesses in the proof annotations. Checked the complete following local lemma as this definition's well-definedness justification: its proof starts with independent arithmetic and pair-register recursion, rather than assuming sequence operations. The explanatory definition/lemma backedge is not a mathematical circle. Neither general Turing/PR equivalence nor a universal PR evaluator is imported.

Examined IDs recorded in receipt: `def-bounded-arithmetic-formula`, `def-set-coded-formal-derivation`, `lem-certified-syntax-coding-operations-are-primitive-recursive`, `lem-bounded-quantifiers-preserve-primitive-recursiveness`, `def-natural-numbers`, `thm-recursion`. Read the complete recursion proof (minimal closed relation, totality and single-valuedness by induction); its set-valued target supports parameter recursion through the state `(m,y)`. All used clauses are choice-free. Contract source: Moschovakis §4A.2–4A.9, pp140–144, URL above; certified-code variant is local. Acceptance is based on the local construction, with no new source-read stamp. Contract unchanged; no cross-batch input found. Next item: record the independently checked operation lemma before its arithmetic consumers.

### `lem-certified-syntax-coding-operations-are-primitive-recursive` — accept

Claim: injectivity and primitive-recursive validity, total decoding, fixed-arity encoding, append/concatenation and specified fixed-register/history recursion for the exact sentinel code. Checked every displayed construction. The bounded-minimum sum counts precisely the unsuccessful initial segment (N if all fail); quotient counts positive multiples; binary width counts powers of two. Pairing `(u+v)^2+u` has disjoint sum intervals and coordinate bounds, supplying register recursion before list operations. Parser scan bounds depend on input width, with persistent failure and final exact-end check. Header value `2^{k+2}-2` and block value `(2^m-1)2^{m+1}+a` encode the specified words; copying blocks proves append/concatenation by induction. Histories use ordinary recursion on a single list-code state. No growth bound on intermediate register values is needed.

Examined IDs: `def-effective-theory-and-certified-godel-numbering`, `def-bounded-arithmetic-formula`, `lem-bounded-quantifiers-preserve-primitive-recursiveness`, `def-natural-numbers`, `thm-recursion`. Source locators retained: Sutner, `https://www.cs.cmu.edu/~cdm/resources/00-primrec.pdf`, slides 13–38, 42–59; `https://www.cs.cmu.edu/~cdm/resources/02-coding.pdf`, slides 9–35. The complete local argument was checked directly; no external reading or finite test is represented as proof. Confidence 1; unchanged; no AC or cross-batch supplier. Next: Q numeral calculation/bounded cases.

### `lem-q-numeral-calculation-and-bounded-cases` — accept

Claim: closed atomic and bounded-formula decision, `x≤n → x=0∨...∨x=n`, and `x≤n∨n+1≤x`, each for external n. Checked finite predecessor splitting: after n+1 splits either x is a numeral at most n or `x=S^{n+1}y=y+(n+1)`. In the latter case `z+x=n` contradicts successor injectivity and nonzero successor, proving the bounded-case implication without cancellation/commutativity of general addition. Closed term reduction and Boolean induction then decide closed bounded formulas by finite numeral cases, with the empty-bound cases explicit. All constructions yield finite derivations in `def-set-coded-formal-derivation`; no internal Q induction is asserted. Dependencies examined/recorded: that calculus and `def-robinson-q-and-peano-arithmetic`. Retained source locator: Moschovakis 4B.6–4B.10 p147, URL above. Local metaproof checked directly; unchanged, confidence 1, ZF, no frontier edge. Next: beta coding/Q remainder.

### `lem-godel-beta-coding-and-q-remainder` — accept

Claim: finite beta codes for modulus `1+(i+1)c`, numeralwise unique Q representations, and PA finite-code/append existence. Checked factorial moduli are pairwise coprime; Euclidean descent gives Bezout coefficients and combining two congruences iterates to finite CRT. A new factorial bound on the old code's residues and appended value allows recoding without preserving c. PA induction supports division, Euclid and this finite iteration. For numeral inputs, explicitly bounded quotient/remainder graphs reduce to the preceding finite cases; no uniform Q division theorem is required.

Read Avigad's complete beta argument, printed pp93–96, in [the author-hosted notes](https://www.andrew.cmu.edu/user/avigad/Teaching/candi_notes.pdf). It omits the CRT proof, so that omission is not proof backing: the local contract explicitly includes the Euclidean/Bezout/finite-CRT route, whose construction was checked directly. PDF screenshots failed with cache-miss errors; browser text recovered the complete relevant argument. Examined dependencies: `def-robinson-q-and-peano-arithmetic`, `lem-q-numeral-calculation-and-bounded-cases`, `def-set-coded-formal-derivation`. Confidence 1; unchanged; ZF, no AC or frontier edge. Next: representation conventions.

Scope refresh executed: `node tools/scope-decisions.mjs refresh --run phase-2-catchup-24 --group g` exited 0, 57 current declines, 0 pending. Existing current stands/evidence preserved; this alone is not fresh mathematical verification of every decline.

### `def-numeralwise-representability-and-arithmetic-sigma-one` — accept

Checked the external-tuple quantification in Q unique-value representation, two-sided relation expression, and existential bounded-matrix arithmetic Sigma1 convention. Strong PA uniform existence is explicitly separate; no identification with set-theoretic Delta0 or arbitrary PR bounded graphs. Dependencies examined: `def-robinson-q-and-peano-arithmetic`, `def-set-coded-formal-derivation`. Avigad Definition 4.3.1 was read in the source passage above and agrees on numeralwise uniqueness. Retained Moschovakis locators: 4B.1 pp145–146, 4C.11 p154. Unchanged, confidence 1, ZF, no frontier edge. Next: primitive-recursive representability.

### `thm-primitive-recursive-numeralwise-representability` — accept

Checked initial graphs and existential composition, then the displayed recursion graph with existential adjacent-coordinate witnesses. Least-output strengthening has numeral-anchored functionality even on nonnumeral inputs: split another output below/equal/above the numeral, using the earlier finite-order lemma, and apply the corresponding leastness clause. This makes repeated beta-coordinate occurrences agree with the already fixed numeral. External induction proves the finite history's output unique, without total beta decoding in Q for arbitrary codes. PA uses induction, beta extension, uniform uniqueness, and finite witness collection to obtain equivalent Sigma1 graphs; equivalence is asserted over PA only. Positive/negative relation instances follow from characteristic-function uniqueness.

Read the complete Moschovakis 4B.11–13 passage, printed p148, [author PDF](https://www.math.ucla.edu/~ynm/lectures/lnl.pdf). The local existential history formula avoids the source's displayed variable/vacuity problems. Examined dependencies: the four declared IDs `def-effective-theory-and-certified-godel-numbering`, `lem-q-numeral-calculation-and-bounded-cases`, `lem-godel-beta-coding-and-q-remainder`, `def-numeralwise-representability-and-arithmetic-sigma-one`, plus actual PR-class supplier `def-bounded-arithmetic-formula` and calculus `def-set-coded-formal-derivation`. Unchanged, confidence 1, ZF, no frontier edge. Next: syntax/proof checker.

### `lem-primitive-recursive-syntax-and-proof-checking` — accept

Checked recognition/data calculation by increasing subexpression size, bounded finite stacks encoded by the earlier list functions, truth tables of size at most an exponential in the finite propositional skeleton, and numeral construction by iteration on the input numeral value. Fresh distinct binder indices can be chosen above the input maximum by a finite counter; capture-free substitution is distinct from the raw free-for substitution checked in logical axiom instances. Actual checker obligations include primitive-syntax abbreviation expansion, all six schemes, earlier premise indices, universal generalization and restricted existential-elimination side conditions. Checking E-witnesses requires no c.e.-membership decision.

Examined dependencies: `def-effective-theory-and-certified-godel-numbering`, `lem-certified-syntax-coding-operations-are-primitive-recursive`, and implicit suppliers `def-set-coded-formal-derivation`, `def-set-coded-terms-and-formulas`, `def-free-variables-and-syntactic-substitution`. Retained source locators: Moschovakis 4A.3 pp140–141, 4A.9 p144; decision based on the explicit bounded implementation route and local coding proof. No edit, confidence 1, ZF, no frontier edge. Next: effective interpretation definition and its proof-translation justification.

### `def-effective-interpretation-and-proof-translation` — accept

Checked S-into-T direction, nonempty interpreted domain, equality/congruence and functional-graph obligations, fresh-variable relativization, and target proofs of translated source axioms. Effective certificates and PA-verifiable primitive-recursive proof translation are explicitly different strengths. No soundness or consistency consequence is assumed as definitional proof backing. Dependencies examined: `def-set-coded-formal-derivation`, `lem-primitive-recursive-syntax-and-proof-checking`. Moschovakis 4C.1 pp150–151 was present in the complete source passage read above; this local domain/quotient interface is stronger and explicitly supplies its additional obligations. Unchanged, confidence 1, ZF; no frontier edge. Next: interpretation translates finite derivations.

### `lem-interpretation-translates-finite-derivations` — escalate

Exact claim examined: **every S-proof** gives a T-proof of its translation; external and base-formalized consistency implications follow. The published proof definition allows open final formulas. The interpretation contract states relativization of quantifiers, but not a domain-guard convention for free variables. Its proof sketch mentions a guard for rule transformations without specifying the guarded invariant or qualifying the asserted final formula. This is a material uncertainty, not a refutation of the sentence-level consistency conclusion.

Concrete diagnostic: interpret the empty equality theory on the definable singleton domain `D(x) := x=0` inside PA, with interpreted equality `E(x,y) := x=0 ∧ y=0`. This is an equivalence/congruence on the interpreted domain. The source proves the open logical axiom `x=x`, but PA cannot prove its unguarded translation `E(x,x)`. It can prove `D(x)→E(x,x)` and the relativized translation of the universal closure. The current wording must say which of these is intended. An interpretation convention requiring an ambient total extension of equality would also need to be explicit; it is not inferred from equivalence on the domain.

Examined IDs: `def-effective-interpretation-and-proof-translation`, `thm-first-order-sentence-deduction` (complete three-rule proof, with explicit restrictions for open discharge), `def-set-coded-formal-derivation` (open final formulas permitted). Read the full short proof of Freiburg Lemma 3.5.12 p54, [course notes](https://home.mathematik.uni-freiburg.de/maxwell/coursenotes-settheoryandindependenceproofs.pdf), and Moschovakis 4C.1 pp150–151. Both source interfaces concern sentence theories/consistency; they do not provide the missing unguarded open-formula assertion.

Owner action: specify a domain-guarded invariant for open proof lines and corresponding conclusion, preserving every sentence and consistency claim, and reconcile any affected contract/plan/scope hashes. No claim dropped, no contract edited, no owner ruling invented. Receipt is escalation, without confidence 1. Do not retry or reassign this item. Consumers must be checked for the precise clause used; this does not automatically invalidate independent numeral-coding results. Next: arithmetic provability/consistency definition.

### `def-arithmetic-provability-and-consistency` — accept

Checked `Prf_T(p,a)`, existential provability, fixed-bottom consistency, and separation from external no-refutation. Keeps Q numeralwise representation while fixing PA-equivalent Sigma1 coding; does not silently change Q proofs or assume arbitrary correct predicates satisfy derivability conditions. Dependencies examined: `thm-primitive-recursive-numeralwise-representability`, `lem-primitive-recursive-syntax-and-proof-checking`, `def-numeralwise-representability-and-arithmetic-sigma-one`. Source locators retained: Moschovakis 4A.8 p144, 4C.6 p152, 4C.13 p155. Direct definitional check, unchanged, confidence 1, ZF; no frontier edge. Next: diagonal lemma.

### `thm-arithmetic-diagonal-lemma` — accept

Verified the displayed substitution construction with fresh binders. At the fixed numeral input, D's existence and unique output identify the exact code of theta; equality replacement and existential rules give both directions. No function-symbol extension, consistency, soundness or uniform PA totality is needed. Dependencies examined: `thm-primitive-recursive-numeralwise-representability`, `lem-primitive-recursive-syntax-and-proof-checking`, `def-set-coded-formal-derivation`, `def-free-variables-and-syntactic-substitution`. Complete corresponding Moschovakis 4B.14 proof p149 was read in the earlier source passage; retained contract locator is Avigad 4.5.1 pp108–109. Unchanged, confidence 1, ZF; no frontier edge. Next: first incompleteness.

### `thm-first-incompleteness-with-explicit-soundness` — accept

Checked positive proof-code certification contradicts a proof of G under consistency; all standard negative instances then yield the omega-consistency contradiction if not-G is proved. Standard truth uses soundness for Q, not soundness of T. Read the complete published soundness proof, including all schemes and three rules; only its nonempty standard arithmetic model clause is used. The numeralwise graph is retained, so PA-only equivalence is not imported into Q. Retained source: Avigad 4.6.1 pp110–111. Unchanged; ZF; no frontier edge. Next: Rosser incompleteness.

Examined dependency IDs: `thm-arithmetic-diagonal-lemma`, `def-arithmetic-provability-and-consistency`, `lem-q-numeral-calculation-and-bounded-cases`, `thm-primitive-recursive-numeralwise-representability`, `thm-set-language-first-order-soundness`.

### `thm-rosser-incompleteness-for-effective-theories` — accept

Checked both finite Rosser cases: a proof of R has no shorter refutation; a refutation code n gives a witness for every p above n, and finite negative cases handle p≤n. Interpreted construction uses only sentence translation and Boolean compatibility, not the escalated unguarded open-formula clause. Read complete Moschovakis 4C.4 pp151–152. Effective translation uses certified numerical computations in the Proof/Refute relations; fixed syntactic interpretation is recursive by the earlier coding construction. The sentence R remains arithmetic until translated. No omega-consistency or AC. Unchanged; no frontier edge. Next: bounded-truth proof certificates.

Examined dependency IDs: `thm-arithmetic-diagonal-lemma`, `def-arithmetic-provability-and-consistency`, `lem-q-numeral-calculation-and-bounded-cases`, `lem-interpretation-translates-finite-derivations`, `thm-primitive-recursive-numeralwise-representability`, `def-effective-interpretation-and-proof-translation`.

### `lem-pa-uniform-bounded-truth-proof-certificates` — accept

Checked simultaneous true/false constructors at fixed formula complexity, numeral arithmetic derivations, Boolean splicing, bounded witness search and finite universal expansion. PA induction verifies the variable-length lists and premise indices; the preceding PR closure gives actual bounded evaluators. Syntactic Sigma1 witnesses receive Q certificates, whereas merely PA-equivalent formulas need a fixed PA equivalence proof in the target. Read Moschovakis 4C.13 pp155–156: its compressed induction is expanded by this local constructor route; no arbitrary formula truth predicate or unproved D3 is assumed. Unchanged, confidence 1, ZF; no frontier edge. Next: derivability conditions.

Examined dependency IDs: `lem-q-numeral-calculation-and-bounded-cases`, `lem-godel-beta-coding-and-q-remainder`, `thm-primitive-recursive-numeralwise-representability`, `lem-primitive-recursive-syntax-and-proof-checking`, `def-arithmetic-provability-and-consistency`, `lem-bounded-quantifiers-preserve-primitive-recursiveness`, `def-set-coded-formal-derivation`.

### `thm-hilbert-bernays-lob-derivability-conditions` — accept

Checked D1 actual finite certificate, D2 concatenation with shifted indices and MP, and D3 through a fixed PA equivalence chi↔sigma, Q certificates for syntactic sigma, then target embedding and the fixed implication proof. This avoids claiming Q proves the PA equivalence. Interpreted branch is read with the explicit strategy hypothesis requiring the interpretation/axiom-proof map to be verifiable in the interpreted PA copy; mere standard-numeral correctness is excluded. Uses only sentence/proof-constructor transport, not the supplier escalation about unguarded open conclusions. Source: Avigad §4.7 pp113–115 omits verification; actual support is the locally checked certificate lemma and Moschovakis 4C.13. Unchanged, confidence 1, ZF; no frontier edge. Next: Lob.

Examined dependency IDs: `lem-pa-uniform-bounded-truth-proof-certificates`, `def-arithmetic-provability-and-consistency`, `lem-primitive-recursive-syntax-and-proof-checking`, `lem-interpretation-translates-finite-derivations`, `thm-primitive-recursive-numeralwise-representability`.

### `thm-lob-from-derivability-conditions` — accept

Checked each modal step for theta↔(Prov theta→phi): D1/D2 internalize its forward implication, D3 supplies Prov Prov theta, D2 yields Prov phi, and the assumed reflection instance gives Prov theta→phi. The reverse fixed-point direction yields theta, then D1 and MP yield phi. No consistency or G2 used. Interpreted branch explicitly assumes diagonal support and D1–D3; only sentence translation is used, not the escalated open-formula clause. Retained source Avigad 4.8.1 pp115–116; direct derivation fully checked. Unchanged, confidence 1, ZF; no frontier edge. Next: second incompleteness.

Examined dependency IDs: `thm-arithmetic-diagonal-lemma`, `thm-hilbert-bernays-lob-derivability-conditions`, `lem-interpretation-translates-finite-derivations`.

### `thm-second-incompleteness-for-standard-provability` — accept

Checked fixed-bottom Con(T) is the reflection implication for bottom, since bottom is a logical contradiction in the actual calculus. Lob would yield a contradiction if Con(T) were proved. Explicit consistency, verified interpretation and chosen-predicate hypotheses are preserved. Retained Avigad 4.7.1–2 and 4.8.1 pp114–116; direct one-step corollary verified from accepted Lob. Unchanged, confidence 1, ZF; no frontier edge. Next: Tarski undefinability.

Examined dependency IDs: `thm-lob-from-derivability-conditions`, `def-arithmetic-provability-and-consistency`, `thm-hilbert-bernays-lob-derivability-conditions`, `def-set-coded-formal-derivation`.

### `thm-tarski-arithmetic-truth-undefinability` — accept

Diagonalizing not-Tr gives incompatible biconditionals. For standard truth the seven Q axioms hold under natural successor/recursively defined arithmetic and the published soundness theorem applies. For the syntactic branch the two T-proved biconditionals contradict consistency directly. No truth predicate for the ambient universe or soundness of arbitrary T is assumed. Retained source Avigad 4.9.5 p118; complete local diagonal argument checked. Unchanged, confidence 1, ZF; no frontier edge. Next: conservative explicit definitions.

Examined dependency IDs: `thm-arithmetic-diagonal-lemma`, `def-robinson-q-and-peano-arithmetic`, `thm-set-language-first-order-soundness`.

### `thm-explicit-definitions-give-conservative-extensions` — accept

Checked graph elimination with fresh variables and uniquely total old-language function definitions, identity on old formulas, and finite proof translation. Here interpreted domain is the full target domain and equality is actual equality, so the escalated proper-domain open-formula issue is absent. Conservativity uses only old-language sentences per the complete published definition just read; fixed bottom then gives equiconsistency, and inclusion gives the other direction. Finite proof support needs no arbitrary family choice. Retained source Moschovakis 4C.1; direct elimination argument checked. Unchanged, confidence 1, ZF; no frontier edge. Next: ZF arithmetic interpretation.

Examined dependency IDs: `def-first-order-syntactic-consistency`, `def-effective-interpretation-and-proof-translation`, `lem-interpretation-translates-finite-derivations`, `def-set-coded-formal-derivation`.

### `lem-zf-arithmetic-interpretation-and-effective-axioms` — accept

Read exact coded ZF axiom/schema definition, complete induction and omega-Peano proofs, and previously read recursion. The six fixed sentences and two schemas admit finite syntactic certificates; the implication-only Power Set and von Neumann Infinity conventions are preserved. Recursion supplies arithmetic, Peano gives the Q clauses, and Separation plus induction supplies each translated PA induction instance. Formula-to-schema substitution and fixed proof templates are PR by the checked syntax lemma. Standard proof constructors can thus be verified in interpreted PA. AC is encoded as an additional ZFC sentence, not assumed in the metaproof. Source Moschovakis 4C.3 p150 is statement-only; local route supplies its proof. Unchanged, confidence 1, ZF; no frontier edge. Next: model existence versus consistency.

Examined dependency IDs: `def-robinson-q-and-peano-arithmetic`, `def-effective-interpretation-and-proof-translation`, `lem-primitive-recursive-syntax-and-proof-checking`, `def-coded-first-order-zf-theory`, `thm-recursion`, `thm-induction-principle`, `thm-hilbert-bernays-lob-derivability-conditions`, `thm-omega-is-peano-system`, `def-natural-numbers`.

### `thm-model-existence-versus-syntactic-consistency` — repaired

Repaired strategy only: countable THEORY does not assert countable ambient LANGUAGE, required by the published completeness supplier. Explicit least-occurrence coding gives a countable support language; restrict, apply completeness, then expand unused symbols with one fixed domain element and empty relations. No AC or claim weakening. Read full completeness and reduct-invariance proofs; all necessary clauses met. Standard certified Con equivalence follows from numerical proof checking. Source: published completeness/coding/soundness clauses; retained Geschke §§3,5.1 is orientation, not needed for this local reduction. Local repair checked directly, confidence 1. Canonical plan strategy sync belongs to owner; mathematical claims/scope hashes unchanged. No frontier edge. Next: CTM and fragment convention.

Examined dependency IDs: `thm-countable-first-order-completeness`, `thm-set-language-first-order-soundness`, `def-arithmetic-provability-and-consistency`, `lem-satisfaction-coincidence`.

### `def-countable-transitive-model-and-fragment-transfer` — accept

Checked nonempty transitive set with actual restricted membership, external injection into omega, and separately quantified finite target/source fragments with explicit auxiliary axioms and parameters. Read complete relativization definition: fresh binders and formula-by-formula class notation, not universe satisfaction. Does not infer CTM from consistency. Retained source Geschke §4 pp10–12, https://www.math.uni-hamburg.de/home/geschke/teaching/ModelsSetTheory.pdf. Direct definitional check, unchanged, confidence 1, ZF; no frontier edge. Next: transitive-model proof codes.

Examined dependency IDs: `def-theories-models-and-semantic-consequence`, `def-relativization-to-a-definable-class`, `def-coded-first-order-zf-theory`.

### `lem-transitive-zf-models-have-correct-proof-codes` — accept

Checked external finite-ordinal induction and transitivity: internal omega contains every real numeral, while an extra ordinal would place real omega among its elements, contradicting its zero/successor-only property. Bounded membership tests for transitive ordinals and successor are preserved directly by transitivity; no later reflection theorem is imported. Arithmetic agrees by recursion uniqueness; all arithmetic quantifiers then have the same domain. For a ZFC model, ambient soundness supplies no actual refutation and arithmetic absoluteness transfers standard Con(ZFC) inside. AC is an object-theory axiom, not used by this ZF metaproof. Retained Geschke §5.1 pp12–13. Unchanged, confidence 1; no frontier edge. Next: consistency versus transitive models.

Examined dependency IDs: `def-countable-transitive-model-and-fragment-transfer`, `lem-zf-arithmetic-interpretation-and-effective-axioms`, `lem-primitive-recursive-syntax-and-proof-checking`, `thm-set-language-first-order-soundness`, `thm-recursion`.

### `thm-consistency-does-not-supply-a-transitive-zfc-model` — accept

Checked S=ZFC+Con(ZFC) is a finite effective extension supporting standard G2. In ZF a transitive ZFC model satisfies Con(ZFC), hence models S; the set-model soundness argument formalizes to TM(ZFC)→Con(S). External Con(S) therefore excludes S proving TM; sentence deduction gives consistency of S+not-TM and countable completeness gives a model. A ZFC proof of Con(ZFC)→TM would give the excluded S proof. Strong external Con(S) retained, with no promotion of Con(ZFC) alone. Sources: local application of accepted G2/proof-code/soundness clauses; Marks Exercise 18.15 is not treated as a supplied proof. Unchanged, confidence 1, ZF; no frontier edge. Next: finite-fragment transfer.

Examined dependency IDs: `lem-transitive-zf-models-have-correct-proof-codes`, `thm-second-incompleteness-for-standard-provability`, `thm-model-existence-versus-syntactic-consistency`, `lem-zf-arithmetic-interpretation-and-effective-axioms`, `thm-first-order-sentence-deduction`, `thm-set-language-first-order-soundness`.

### `thm-finite-fragment-relative-consistency-transfer` — accept

Read complete finite-support proof, using only support extraction and proof composition. An actual U-refutation has finite support Delta; the two stipulated T-proofs produce a set model of Delta, while T formalizes soundness for that fixed finite proof. Hence T proves contradiction. No reflection, uniform witness selection or internal all-fragments assertion is inferred. T adequate for this soundness formalization is an explicit hypothesis. Retained Geschke §4 pp10–11; direct finite proof argument verified. Unchanged, confidence 1, ZF; no frontier edge. Next: verified proof reduction.

Examined dependency IDs: `def-countable-transitive-model-and-fragment-transfer`, `thm-model-existence-versus-syntactic-consistency`, `lem-derivation-finite-support-and-concatenation`, `thm-set-language-first-order-soundness`.

### `thm-formal-relative-consistency-from-verified-proof-reduction` — accept

Checked internal contraposition using explicitly B-verified total r and its refutation-certificate preservation. Under Con(T), every U refutation is excluded. Compilation of finite-fragment/reflection maps is an explicit extra obligation, not a conclusion from a semantic CTM theorem. This uses only the verified-refutation clause of the interpretation supplier, independent of its escalated open-formula assertion. Read complete Freiburg 3.5.12 previously; the stronger internal conclusion is justified directly by the stated verified map. Unchanged, confidence 1, ZF; no frontier edge. Next: transfer orientation remark.

Examined dependency IDs: `thm-finite-fragment-relative-consistency-transfer`, `lem-interpretation-translates-finite-derivations`, `def-arithmetic-provability-and-consistency`.

### `rem-semantic-ctm-versus-formal-relative-consistency` — accept

Checked methodological distinction between external CTM conversion and B-provable consistency implication against all four preceding supplier clauses. Requires actual finite-fragment and proof-generator instantiations, with external/internal countability separated; asserts no additional construction. Retained Geschke §4 pp10–12. Unchanged, confidence 1, ZF; no frontier edge. Next: arithmetization B examples.

Examined dependency IDs: `def-countable-transitive-model-and-fragment-transfer`, `thm-finite-fragment-relative-consistency-transfer`, `thm-formal-relative-consistency-from-verified-proof-reduction`, `thm-consistency-does-not-supply-a-transitive-zfc-model`.

### `ex-godel-diagonal-substitution-calculation` — accept

Checked e is a natural code, eta(e) denotes numeral substitution, and d(e) is exactly its resulting formula code. The displayed example reproduces both existential/unique-output directions of the accepted diagonal lemma without identifying formulas with numerals. Source Avigad 4.5.1 p109; unchanged, confidence 1, ZF, no frontier edge. Next: false internal proof example.

Examined dependency IDs: `thm-arithmetic-diagonal-lemma`.

### `ex-consistent-theory-with-an-internal-false-proof` — accept

Under external Con(PA), deduction plus G2 makes PA+not-Con(PA) consistent, then the repaired model-existence theorem supplies a model. Every standard code has a Q-proof of failed checking; satisfaction of PA excludes those codes, so the existential witness is nonstandard. No external model soundness claimed. Source Avigad §4.7 pp114–115, local corollary verified. Unchanged, confidence 1, ZF; no frontier edge. Next: explicit function example.

Examined dependency IDs: `thm-second-incompleteness-for-standard-provability`, `thm-model-existence-versus-syntactic-consistency`, `thm-first-order-sentence-deduction`, `def-robinson-q-and-peano-arithmetic`, `thm-primitive-recursive-numeralwise-representability`, `def-arithmetic-provability-and-consistency`.

### `ex-explicit-function-definition-is-conservative` — accept

Graph y=x+x is uniquely total by term equality, so the conservative-extension theorem applies directly. The externally indexed c>numeral-n scheme is not a single explicit definition; the strategy correctly makes no nonconservativity claim for that scheme. Source Moschovakis 4C.1 framework, local calculation checked. Unchanged, confidence 1, ZF; no frontier edge. Next: false CTM implication.

Examined dependency IDs: `thm-explicit-definitions-give-conservative-extensions`, `def-robinson-q-and-peano-arithmetic`.

### `fs-con-zfc-implies-a-transitive-model-of-zfc` — accept

Exact relative countermodel is supplied by the accepted strength-gap theorem under external Con(ZFC+Con(ZFC)); this premise is retained, not replaced by Con(ZFC). The ordinary-model comparison uses only completeness, not transitivity. Source is the owned theorem application of G2. Unchanged, confidence 1, ZF; no frontier edge. Next: finite proof-support example.

Examined dependency IDs: `thm-consistency-does-not-supply-a-transitive-zfc-model`, `thm-model-existence-versus-syntactic-consistency`.

### `ex-finite-proof-support-in-relative-consistency` — accept

Checked finite support is the set of actual assumption lines, with repetitions removed. The displayed p→Delta→Gamma→model proofs→refutation chain correctly distinguishes external finite proof construction from uniform B-verified maps. No universal CTM or choice introduced. Retained Geschke §4 pp10–11. Unchanged, confidence 1, ZF; no frontier edge. Arithmetization pair complete: 31 accept, 1 repaired, 1 escalate. Next: reflection pair current prose/coverage and first definition.

Examined dependency IDs: `thm-finite-fragment-relative-consistency-transfer`, `thm-formal-relative-consistency-from-verified-proof-reduction`, `lem-derivation-finite-support-and-concatenation`.

### `def-set-theoretic-levy-hierarchy-and-absoluteness` — accept

Checked bounded membership quantifiers, simultaneous Sigma/Pi positive Boolean and bounded closure, duality, and theory-relative equivalence convention. Absoluteness compares parameter tuples in the smaller domain. Distinguishes arithmetic hierarchy and forbids uniform proper-class truth. Both published syntax/relativization definitions read. Retained Marks Definition 18.8 p76. Direct definition check; unchanged, confidence 1, ZF; no frontier edge. Next: Delta0 absoluteness.

Examined dependency IDs: `def-set-coded-terms-and-formulas`, `def-relativization-to-a-definable-class`.

### `thm-delta-zero-absoluteness-for-transitive-sets` — accept

Read complete syntax-induction supplier and full Freiburg 3.5.5 argument. Atomic relations agree; Boolean steps preserve agreement; every bounded witness lies in the smaller domain by transitivity, giving both quantifier directions. No internal ZF axioms needed. Proper classes are only formula-by-formula relativizations. Unchanged, confidence 1, ZF; no frontier edge. Next: bounded basic-operation graphs.

Examined dependency IDs: `def-set-theoretic-levy-hierarchy-and-absoluteness`, `thm-structural-recursion-on-set-coded-syntax`, `def-relativization-to-a-definable-class`.

### `lem-bounded-definitions-of-basic-set-operations` — accept

Checked bounded graph expansions: all elements of an output set are bounded by that set, pair coordinates are obtained by finite nested membership bounds, products require each input pair to occur in output, and relation/function tests quantify over existing pairs. The local empty-intersection=empty convention explicitly totalizes the published nonempty-only operation; no universal-set intersection claimed. Graph agreement is distinguished from existence in a transitive structure. Read all six published convention definitions; only the binary product clause is used, not its AC orientation. Freiburg 3.5.6–8 provides comparison; local expansions checked. Unchanged, confidence 1, ZF; no frontier edge. Next: ordinal/omega absoluteness.

Examined dependency IDs: `thm-delta-zero-absoluteness-for-transitive-sets`, `def-ordered-pair`, `def-cartesian-product`, `def-function`, `def-relation-domain-range-and-field`, `def-intersection-of-a-set-and-binary-intersection`, `def-set-difference-and-symmetric-difference`.

### `thm-ordinals-and-omega-are-absolute-in-transitive-models` — accept

Read exact published ordinal definition including strict well-order. In ambient ZF, transitivity and membership-linearity plus Foundation give well-order; bounded clauses transfer both ways, and genuine ordinal well-order handles every internal subset. The nonzero least-limit/zero-or-successor characterization excludes extra omega elements; transitivity gives initial-segment ordinal agreement. Does not invoke the published broad orientation about arbitrary models. Retained Freiburg final §3.5 p55. Direct proof checked, unchanged, confidence 1, ZF; no frontier edge. Next: rank absoluteness.

Examined dependency IDs: `thm-delta-zero-absoluteness-for-transitive-sets`, `lem-bounded-definitions-of-basic-set-operations`, `def-ordinal`, `def-natural-numbers`.

### `thm-rank-and-hierarchy-membership-absoluteness` — accept

Read full rank definition and hierarchy-characterization proof. External membership induction compares identical actual predecessor sets; rank values agree by induction and ordinal union/successor absoluteness. Both models satisfy ZF, so each internal rank exists. The characterization then gives exactly (V_alpha)^M=M intersect (V_alpha)^N, not equality of powersets. Retained Geschke §3 pp9–10. Direct argument checked; unchanged, confidence 1, ZF; no frontier edge. Next: Sigma1 normal form.

Examined dependency IDs: `thm-ordinals-and-omega-are-absolute-in-transitive-models`, `lem-bounded-definitions-of-basic-set-operations`, `def-membership-rank-of-a-set`, `thm-membership-rank-and-hierarchy-levels`.

### `lem-levy-sigma-one-existential-normal-form` — accept

Read complete Collection proof: uniquely defined least witness ranks are collected, then a V-stage contains witnesses without selecting them. In the normal-form induction finite witnesses can be paired/tagged; bounded universal existential witnesses are collected into b and quantified boundedly there. Empty bounds and disjunction dummy values are available in ZF. No assertion over weak theories lacking Collection. Marks Exercise 18.9 p76 is a route, not proof backing; full local argument checked. Unchanged, confidence 1, ZF; no frontier edge. Next: one-way absoluteness.

Examined dependency IDs: `def-set-theoretic-levy-hierarchy-and-absoluteness`, `prop-minimum-rank-selection-and-collection`, `lem-bounded-definitions-of-basic-set-operations`.

### `thm-sigma-one-upward-and-pi-one-downward-absoluteness` — accept

Fixed existential witness tuple remains in N and the Delta0 matrix agrees; negation gives the Pi1 direction. Both models must satisfy the stated equivalence axioms when using theory-relative rather than literal normal forms. No unjustified transfer in the opposite direction. Retained Marks 18.13 p78; direct proof checked. Unchanged, confidence 1, ZF; no frontier edge. Next: finite witness criterion.

Examined dependency IDs: `thm-delta-zero-absoluteness-for-transitive-sets`, `lem-levy-sigma-one-existential-normal-form`.

### `lem-finite-formula-witness-criterion` — accept

Checked both directions by subformula induction. Necessity transfers the existential to C, takes one witness, then transfers its matrix back to D. Sufficiency uses the D-matrix witness in C and the matrix induction hypothesis; atoms restrict with actual membership and Boolean clauses agree. No transitivity or full V-elementarity assumption is smuggled in. Complete Freiburg 3.5.9 pp52–53 proof read earlier. Unchanged, confidence 1, ZF; no frontier edge. Next: witness-rank bounds.

Examined dependency IDs: `def-set-theoretic-levy-hierarchy-and-absoluteness`, `thm-structural-recursion-on-set-coded-syntax`.

### `lem-finite-formula-witness-rank-bounds` — accept

Checked per-instance least witness ranks, default zero for false instances, Replacement over each finite tuple domain and finitely many formulas, then a successor bound exceeding alpha. The bound supplies some witness for each true instance; it does not bound all possible witnesses. The hierarchy variant minimizes a witness level in the exhaustive hierarchy. No choice or uniform universe truth predicate. Complete corresponding Freiburg 3.5.10 rank-bound argument was read; retained Geschke 4.3 pp10–11. Unchanged, confidence 1, ZF; no frontier edge. Next: finite reflection.

Examined dependency IDs: `lem-finite-formula-witness-criterion`, `prop-minimum-rank-selection-and-collection`, `thm-membership-rank-and-hierarchy-levels`.

### `thm-montague-levy-finite-reflection` — accept

Checked finite subformula closure, strictly increasing omega iteration of definable witness bounds, supremum beta>alpha, and finite tuples lying in a common stage. Continuity places each required witness below beta. Read full hierarchy definition/growth proofs and full transfinite-recursion proof: the latter, already in hierarchy dependency closure, is the actual supplier for a class-defined ordinal bound iterated on omega; the narrower set-target thm-recursion alone would not suffice. Empty/finite-stage issues handled by starting above alpha and forcing strict growth. Complete Freiburg 3.5.10 pp53–54 read. No AC or universe truth set. Unchanged, confidence 1, ZF; no frontier edge. Next: finite-fragment transitive models.

Examined dependency IDs: `lem-finite-formula-witness-rank-bounds`, `lem-finite-formula-witness-criterion`, `def-cumulative-hierarchy-stages`, `prop-cumulative-hierarchy-transitivity-and-growth`, `thm-recursion`, `thm-transfinite-recursion`.

### `cor-transitive-models-of-each-finite-zf-fragment` — repaired

Checked finite external conjunction and reflection above the requested bound. Added the missing AC dependency and exact branch-use explanation: the ZFC branch invokes ambient AC when reflecting Choice, while the ZF branch and reflection construction remain choice-free. No statement or scope change. Read AC definition and exact ZF schema coding. The external theorem scheme is not internal uniform all-fragments model existence. Retained Geschke 4.3 p11. Local dependency/strategy repair verified, confidence 1; owner must sync plan metadata. No frontier edge. Next: collapse of elementary submodels.

Examined dependency IDs: `thm-montague-levy-finite-reflection`, `def-coded-first-order-zf-theory`, `def-axiom-of-choice`.

### `thm-collapse-of-elementary-membership-submodels` — accept

Ambient Foundation gives well-foundedness of actual membership; elementarity transfers an Extensionality distinguishing witness into X. Read full Mostowski set-image and isomorphism-satisfaction arguments, including injectivity and recursion suppliers. The inverse followed by inclusion is elementary. Countability is transported by the collapse bijection. ZF, no AC. Direct complete argument; retained Geschke 4.5/4.6 pp11–12 locator. Unchanged; next collapse fixed points.

Examined dependency IDs: def-elementary-set-structure-embedding, thm-mostowski-collapse-for-extensional-relations, prop-isomorphism-invariance-of-satisfaction, lem-extensional-collapse-is-injective, def-extensional-relation-and-collapse-map.

### `lem-collapse-fixes-transitive-parts-and-orders-ordinals` — accept

The collapse equation and membership induction fix each point of a transitive subset A of X. For ordinal alpha in X, restriction to X intersect alpha is a well-order isomorphism onto pi(alpha): predecessor initial segments correspond under collapse. Its transitive range is an ordinal. No equality with alpha is asserted without alpha subset X. Direct complete local proof of Geschke Exercise 4.7 p12; unchanged, ZF; next countable submodels.

Examined dependency IDs: thm-collapse-of-elementary-membership-submodels, def-ordinal.

### `thm-countable-elementary-submodels-and-transitive-collapses` — accept

Read full downward LS and witness-hull proof. Countable membership language and infinite M meet kappa=aleph0 hypotheses; AC supplies a well-order/witness family and simultaneous stage injections. Collapse preserves the resulting bijective countability. Parameter subset versus singleton distinction is explicit. ZFC dependency and exact AC use already declared. Unchanged, direct supplier application; next fixed finite ZFC fragments.

Examined dependency IDs: thm-collapse-of-elementary-membership-submodels, thm-downward-lowenheim-skolem-with-parameters, def-axiom-of-choice, lem-skolem-hull-size-and-elementarity.

### `cor-countable-transitive-models-of-fixed-zfc-fragments` — accept

For each externally fixed finite Gamma add Extensionality, reflect above omega, and apply the already examined infinite membership LS/collapse clause. Isomorphism preserves each fixed sentence. ZFC and def-axiom-of-choice explicitly propagate both the repaired reflection branch and hull choice use. No uniform all-fragment truth assertion. Direct complete corollary; unchanged; next elementary chains.

Examined dependency IDs: cor-transitive-models-of-each-finite-zf-fragment, thm-countable-elementary-submodels-and-transitive-collapses, def-axiom-of-choice.

### `cor-elementary-membership-chains-and-collapse-compatibility` — accept

Read complete nonempty ordinal-chain union proof, including common-stage witnesses. Extensionality transfers from a stage to union; ambient Foundation supplies external well-foundedness. Unique stage collapses form a set family by Replacement; conjugating inclusions gives elementary maps and cancellation proves coherence. No extra AC needed or literal-union assertion. Direct full proof; unchanged; next condensation orientation.

Examined dependency IDs: thm-elementary-ordinal-chain-union, thm-collapse-of-elementary-membership-submodels, prop-isomorphism-invariance-of-satisfaction.

### `rem-condensation-requires-additional-constructible-structure` — accept

Orientation exports only proved collapse/ordinal information; it makes no L-condensation claim and has no load-bearing planned supplier. A transitive collapse alone need not be a constructible level. Destination remains the-constructible-hierarchy-and-inner-models, no cross-batch proof edge. Retained Geschke §4–5 locator; direct logical scope check, unchanged, ZF; next Shoenfield orientation.

Examined dependency IDs: lem-collapse-fixes-transitive-parts-and-orders-ordinals, thm-collapse-of-elementary-membership-submodels.

### `rem-shoenfield-absoluteness-scope-orientation` — accept

The remark distinguishes real quantification from unrestricted set quantification and asserts no Shoenfield theorem. The Sigma1 transfer supplier cannot by itself establish projective Sigma1_2 absoluteness. No hidden proof use, catalogue import, or frontier edge. Retained Kamensky §5.2 orientation locator, not relied on as theorem proof. Unchanged, ZF; next reflection examples.

Examined dependency IDs: def-set-theoretic-levy-hierarchy-and-absoluteness, thm-sigma-one-upward-and-pi-one-downward-absoluteness.

### `ex-bounded-set-formulas-and-witness-direction` — accept

Subset uses forall u in x u in y; pairing uses x,y in z and every z-member equal to one of them. Function graph bounded pair-coordinate tests and bounded totality/injectivity were checked in the basic-operation lemma. Adding an unbounded existential function quantifier gives only upward witness transfer. Freiburg 3.5.6/8 relevant argument already read; unchanged, ZF; next power-set diagonal.

Examined dependency IDs: thm-delta-zero-absoluteness-for-transitive-sets, thm-sigma-one-upward-and-pi-one-downward-absoluteness, lem-bounded-definitions-of-basic-set-operations.

### `ex-internal-power-set-can-miss-an-external-subset` — accept

A supplied countability injection yields an enumeration of nonempty M by least inverse indices/default empty set, without AC. Replace entries not subsets of omega by empty; d={n:n notin a_n} differs from every internal real. Internal omega is actual omega and each internal subset is external subset by transitivity. Conditional CTM hypothesis retained. Complete local diagonal argument; unchanged, ZF; next finite reflection example.

Examined dependency IDs: thm-rank-and-hierarchy-membership-absoluteness, lem-bounded-definitions-of-basic-set-operations, thm-ordinals-and-omega-are-absolute-in-transitive-models.

### `ex-reflection-of-two-formulas-with-parameters` — accept

Take initial ordinal above rank(a)+1 and finite subformula closure of the two formulas. Witness-rank iteration gives beta and both full truth equivalences on all tuples in V_beta. Only the choice-free reflection clause is used; no ZFC-fragment or hull clause is consumed, so no AC propagation needed. Direct full supplier application; unchanged, ZF; next nontransitive submodel counterexample.

Examined dependency IDs: thm-montague-levy-finite-reflection, cor-transitive-models-of-each-finite-zf-fragment, thm-membership-rank-and-hierarchy-levels.

### `fs-a-countable-elementary-submodel-is-a-transitive-subset` — accept

Read full Hartogs proof; h(omega) cannot inject into omega. Transitive V_theta satisfies Extensionality and can contain that ordinal. ZFC LS with parameter singleton {omega1} gives countable X; transitivity would embed omega1 into X, contradiction. Collapse ordinal is the countable order type of the intersection. AC already explicit for LS, not Hartogs. Complete counterexample verified; unchanged; next chain-map example.

Examined dependency IDs: thm-countable-elementary-submodels-and-transitive-collapses, lem-collapse-fixes-transitive-parts-and-orders-ordinals, def-axiom-of-choice, thm-hartogs.

### `ex-collapse-chain-maps-need-not-be-inclusions` — accept

Conjugated inclusion has correct source and target because each collapse is a bijection. Cancellation gives coherence; for ordinal eta in a stage it sends ot(X_alpha intersect eta) to ot(X_beta intersect eta). This statement is a calculation and an additional-property qualification, not an unsupported universal inclusion or existence assertion. Direct supplier application; unchanged, ZF. Batch14 complete; next batch15 current artifacts.

Examined dependency IDs: cor-elementary-membership-chains-and-collapse-compatibility, lem-collapse-fixes-transitive-parts-and-orders-ordinals.

### `def-boolean-algebra-for-stone-duality` — accept

Bounded distributive complemented lattice definition fixes order by meet and permits the singleton algebra. Constants preserved by all homomorphisms, so empty Stone space convention can follow consistently. No existence theorem or choice assumed. Current SET-7 prose and scope decision read; unchanged, ZF; next ideals and filters.

Examined dependency IDs: .

### `def-boolean-ideals-filters-and-primality` — repaired

Added an explicit prime-ideal properness convention in the scaffold strategy; the statement listed the meet test but omitted this necessary qualification. Without it the whole algebra passes that test. Read Tressl 2.2.5–6 and 2.3.3 complete arguments at the coverage URL, noting the source ideal-order typo does not replace the correct local downward closure. No claim dropped, axiom unchanged, no statement/scope change; owner sync plan strategy. Next generated-filter tests.

Examined dependency IDs: def-boolean-algebra-for-stone-duality.

### `def-boolean-homomorphism-and-quotient` — accept

Read published equivalence/class well-definedness convention and the named local congruence obligation. Symmetric difference is (a meet not-b) join (b meet not-a); equivalence and operations are justified by the following explicit Boolean inequalities, not assumed in defining the relation. Homomorphisms preserve both constants including trivial cases. Unchanged, ZF; next record congruence proof.

Examined dependency IDs: def-boolean-algebra-for-stone-duality, def-boolean-ideals-filters-and-primality, def-equivalence-relation, lem-boolean-quotient-congruence.

### `lem-boolean-quotient-congruence` — accept

Boolean distributivity verifies difference triangle inequality and the displayed meet inequality; downward/finite-join ideal closure proves transitivity and congruence, complement and De Morgan give joins. Every Boolean identity descends. Difference with zero is a, giving kernel I; h kills I implies equal values on each class, defining unique factor through the surjection without representative choice. Includes improper I/trivial quotient. Complete local proof checked; unchanged, ZF.

Examined dependency IDs: def-boolean-homomorphism-and-quotient.

### `lem-generated-boolean-filter-and-ultrafilter-tests` — accept

Checked empty generator gives {1}, finite meets close the generated filter, and improper extension by b supplies old u<=not-b. Properness excludes both complementary members; decisions force maximality and prime joins, indicator operations follow. Elementwise complement sends U to its set complement prime ideal; dual argument gives maximal ideals. Read complete Tressl 2.2.9, 2.3.3 arguments; repaired properness supplier used. Unchanged, ZF.

Examined dependency IDs: def-boolean-ideals-filters-and-primality, def-boolean-homomorphism-and-quotient.

### `lem-finite-boolean-algebras-are-powersets-of-atoms` — accept

Finite nonzero lower interval has a minimal element; distinct atoms meet zero, and a nonzero remainder disproves failure of the atom join. Subsets of atoms correspond uniquely to their joins. A finite ultrafilter contains its finite meet, which maximality forces to be an atom. Trivial algebra has no atoms and matches P(empty). Complete local finite proof, no AC; unchanged.

Examined dependency IDs: def-boolean-algebra-for-stone-duality, lem-generated-boolean-filter-and-ultrafilter-tests.

### `def-boolean-prime-ideal-principle` — accept

BPI quantifies nontrivial Boolean algebras with proper prime convention; UFL applies to powerset filters of sets, distinct from arbitrary Boolean filter extension until proved equivalent. Both are named ZF principles, no proof or AC assertion. Current coverage postpones nonimplication to symmetric models without a load-bearing edge. Unchanged.

Examined dependency IDs: def-boolean-ideals-filters-and-primality.

### `thm-bpi-equivalent-to-boolean-filter-extension` — accept

Dual ideal of proper F is proper; quotient is nontrivial. BPI ideal pulled back contains dual ideal; its complementary ultrafilter contains F. Same quotient gives ideal extension. Conversely {1} extension and complement give BPI on nontrivial algebra. No simultaneous selection or Zorn needed; full quotient and properness clauses adequate. Unchanged, ZF.

Examined dependency IDs: def-boolean-prime-ideal-principle, lem-boolean-quotient-congruence, lem-generated-boolean-filter-and-ultrafilter-tests.

### `thm-bpi-equivalent-to-set-ultrafilter-lemma` — accept

Read exact set-filter properness and full FIP generation proof. A finite set of Boolean elements generates a finite subalgebra using the finitely many conjunction atoms; a nonzero finite filter meet has an atom below it. Hence all finite requirements have a common (C,h). UFL gives one ultrafilter on the full witness set; the two truth fibres partition each large domain requirement, determining a unique value. Intersect finitely many large fibres to verify each homomorphism law and extension. Reverse direction applies Boolean extension to P(S). Complete local argument, no AC/Zorn or Recorded supplier; unchanged, ZF.

Examined dependency IDs: thm-bpi-equivalent-to-boolean-filter-extension, lem-finite-boolean-algebras-are-powersets-of-atoms, def-filter, def-ultrafilter, lem-fip-generates-filter.

### `thm-choice-implies-boolean-prime-ideal-principle` — accept

Read full Zorn proof and Tressl 2.2.10–11. Proper extensions form a nonempty subset of P(B); chain unions retain 1, omit 0, and any pair lies in one member. Original filter bounds empty chain. AC is spent exactly applying Zorn, and maximality gives the Boolean test already proved. ZFC and AC dependency explicit. Unchanged.

Examined dependency IDs: def-boolean-prime-ideal-principle, lem-generated-boolean-filter-and-ultrafilter-tests, def-axiom-of-choice, thm-zorn.

### `def-stone-ultrafilter-space-and-clopens` — accept

Read topology/Hausdorff/compactness conventions. [1] covers Ult(B), finite intersections are [a meet b], and complement is [not-b] by ultrafilter decisions, so these really define a clopen basis without assuming BPI. Clopens form a Boolean algebra under ordinary finite operations. Trivial algebra has no proper filter, empty space is compact Hausdorff. No converse empty-spectrum claim in bare ZF. Unchanged.

Examined dependency IDs: lem-generated-boolean-filter-and-ultrafilter-tests, def-topological-space, def-hausdorff-space, def-compact-space.

### `thm-stone-clopen-representation-under-bpi` — accept

Nonzero b meet not-c generates a proper filter, giving separation/injectivity under BPI. Complementary basic sets separate ultrafilters. A basic cover without finite subcover yields nonzero finite complement meets and an extending ultrafilter outside the cover. All subordinate basics reduce an arbitrary cover using only finite choice. For a clopen subset add its complement to the subordinate-basic cover, then remove it; finite union equals [finite join]. This directly proves intrinsic compactness use, without hidden compact-subspace assumption. Complete local argument; unchanged, ZF+BPI.

Examined dependency IDs: def-stone-ultrafilter-space-and-clopens, thm-bpi-equivalent-to-boolean-filter-extension.

### `thm-stone-space-recovered-from-its-clopens` — accept

Read complete choice-free compact/FIP theorem. A clopen ultrafilter has FIP, so intersection nonempty; Hausdorff plus clopen basis gives at most one point. A clopen containing the point must belong to the filter since its complement cannot. Evaluation and inverse carry corresponding basics exactly, proving homeomorphism without constructing any arbitrary ultrafilter. Empty case handled. Unchanged, ZF.

Examined dependency IDs: def-stone-ultrafilter-space-and-clopens, lem-generated-boolean-filter-and-ultrafilter-tests, thm-compact-iff-fip.

### `thm-stone-duality-by-inverse-image` — accept

chi_V composed with h is a bounds-preserving Boolean character, hence its inverse-image filter is proper ultrafilter. Basic preimage formula proves continuity. Continuous maps pull clopens back preserving every finite Boolean operation. Ordinary inverse-image identities give reversed composition and naturality; evaluations from preceding two results identify both double constructions. BPI needed only algebra representation and is propagated. Unchanged.

Examined dependency IDs: thm-stone-clopen-representation-under-bpi, thm-stone-space-recovered-from-its-clopens, def-boolean-homomorphism-and-quotient.

### `thm-bpi-equivalent-to-propositional-compactness` — accept

2^P contains constant-zero valuation in ZF; finite formula truth sets form a Boolean subalgebra. Finite satisfiability gives a proper generated filter, whose extension decides each letter and hence every formula by finite induction. Conversely finitely many table equations live in a finite generated subalgebra, where an atom gives a character; extend its finitely many letter values by zero. Compactness yields a global character on a nontrivial B and hence a proper prime ideal. Complete local two-way proof, no AC. Unchanged.

Examined dependency IDs: thm-bpi-equivalent-to-boolean-filter-extension, lem-finite-boolean-algebras-are-powersets-of-atoms.

### `lem-set-sized-parallel-henkinization-preserves-consistency` — accept

Read both fresh-constant and single-witness proofs fully, including substitution side conditions. Tagged constants per existential sentence yield set languages by omega recursion. In a finite alleged refutation strip highest-stage witness axioms first: their constants occur in neither lower-stage matrices nor other same-stage axioms. Any remaining unused constants are removed by pure expansion conservativity. Finite support and finite descending order suffice, no well-order of language or AC. Unchanged, ZF.

Examined dependency IDs: lem-proof-fresh-constant-elimination, lem-fresh-henkin-axiom-preserves-consistency, lem-derivation-finite-support-and-concatenation.

### `thm-bpi-equivalent-to-arbitrary-language-compactness` — accept

Soundness plus finite support yields consistency. For finitely many membership constraints, a Boolean inconsistency would by finite truth-table calculus combine the finite deduction implications and positive axioms into a refutation of the Henkin theory; equivalently its finite sentence Boolean algebra has a nonzero atom compatible with those axioms. Propositional compactness supplies complete coherent deductively closed H containing all witness axioms. Read full arbitrary-set Henkin truth lemma: seed makes domain nonempty and only finite representative choices occur. Unary predicates at a fixed constant code the reverse direction, with singleton finite models. No countable completeness or AC imported. Unchanged, ZF.

Examined dependency IDs: lem-set-sized-parallel-henkinization-preserves-consistency, thm-bpi-equivalent-to-propositional-compactness, thm-set-language-first-order-soundness, thm-henkin-closed-term-truth-lemma, lem-hilbert-propositional-and-equality-rules, lem-derivation-finite-support-and-concatenation.

### `thm-bpi-equivalent-to-compact-hausdorff-tychonoff` — accept

Read finite-coordinate product definition; do not use its separate arbitrary-product AC clause. All finite partial selections form a set and domain requirements have FIP by finite choice. Restrict one UFL ultrafilter to each domain fibre, then evaluation gives coordinate ultrafilter. Closures of its members have FIP; compactness yields a cluster point, ultrafilter decisions force convergence, Hausdorff gives uniqueness. Unique points assemble by Replacement, proving product nonempty. Repeat projections for an ultrafilter extending a closed FIP family; finite-coordinate neighborhoods prove convergence into each closed member. Reverse uses inhabited constant-zero 2^P and closed formula cylinders. Full local argument verified, only BPI where stated; unchanged.

Examined dependency IDs: thm-bpi-equivalent-to-set-ultrafilter-lemma, thm-bpi-equivalent-to-propositional-compactness, def-stone-ultrafilter-space-and-clopens, def-product-topology, thm-compact-iff-fip, lem-fip-generates-filter, lem-generated-boolean-filter-and-ultrafilter-tests.

### `def-complete-boolean-algebra-and-regular-open-sets` — accept

Read named regular-open well-definedness strategy. Joins and meets proposed as regularizations with empty join empty and empty meet X; complements int(X minus U) agree with X minus cl(U). Order continuity explicitly preserves all existing extrema, not merely sequential monotonicity. Complete Boolean algebras are bounded, so arbitrary joins equivalently Dedekind completeness here. Next proof discharges the naming obligation; unchanged, ZF.

Examined dependency IDs: def-boolean-algebra-for-stone-duality, def-boolean-homomorphism-and-quotient, def-topological-space, thm-regular-open-sets-form-a-complete-boolean-algebra.

### `thm-regular-open-sets-form-a-complete-boolean-algebra` — accept

For finite Boolean combinations, boundaries lie in finite unions of input boundaries; finite unions of closed nowhere-dense sets remain nowhere dense by successive open refinement. Thus boundary-nowhere-dense sets form a Boolean algebra and nowhere-dense sets an ideal in it. E differs from int(cl E) only within its boundary. Two regular opens differing nowhere densely must be equal: a failure of inclusion leaves a nonempty open difference outside the other closure. Quotient congruence transports finite laws. Regularizing a union is its least regular-open upper bound; interior of the intersection is regular since its regularization lies inside every input. Empty cases hold. Complete local proof, no Baire/AC; unchanged.

Examined dependency IDs: def-complete-boolean-algebra-and-regular-open-sets, lem-boolean-quotient-congruence.

### `thm-stone-regular-open-boolean-completion` — accept

Every nonempty regular open contains a nonzero basic clopen, proving density. For existing b=sup S, failure of union [s] to be dense in [b] gives a nonzero basic d<=b disjoint from all s; then b meet not-d contradicts least upper bound. In any dense complete extension c is the supremum of original b<=c. The map using that lower cut has the same original lower bounds: if an original b not<=c, density supplies original nonzero d<=b meet not-c, preventing b below the new join. Thus maps in both directions are inverse order isomorphisms, hence Boolean and unique. No AC beyond BPI, unchanged.

Examined dependency IDs: thm-regular-open-sets-form-a-complete-boolean-algebra, thm-stone-clopen-representation-under-bpi.

### `thm-stone-completeness-iff-extremal-disconnectedness` — accept

With B complete, join of all basic clopens contained in G has clopen image equal to cl(G): any nonempty basic gap would contradict the join. Extremal disconnectedness makes regular open G equal its closure; conversely equality with RO transfers all suprema. Operations agree as Boolean operations (finite union/intersection and complement); arbitrary joins are order suprema, not an assertion that arbitrary unions of clopens stay closed. BPI correctly restricted and propagated. Full local three-way proof, unchanged.

Examined dependency IDs: def-complete-boolean-algebra-and-regular-open-sets, thm-regular-open-sets-form-a-complete-boolean-algebra, thm-stone-clopen-representation-under-bpi.

### `thm-order-continuous-homomorphisms-extend-to-boolean-completions` — accept

Checked every step of the full local extension strategy against the complete Zorn supplier. v lies below h(b) for every old b above x. Equal x-components have symmetric difference disjoint from x, forcing equal v-components; equal not-x components have difference below x, forcing equal not-v-components. Finite component formulas preserve operations, so maximal partial map is total. Density transfers sup H=1 to the original lower-elements family J; original order continuity forces sup h(H)=1. Applying this to T union {not-sup T} proves all joins, complements all meets, and density forces uniqueness. Trivial/empty cases included; AC explicitly supplies Stone/BPI and Zorn. Direct full proof of retained Fremlin 314K/T route, not citation certification. Unchanged, ZFC.

Examined dependency IDs: def-complete-boolean-algebra-and-regular-open-sets, thm-stone-regular-open-boolean-completion, thm-regular-open-sets-form-a-complete-boolean-algebra, thm-stone-clopen-representation-under-bpi, def-axiom-of-choice, thm-choice-implies-boolean-prime-ideal-principle, thm-zorn.

### `def-forcing-preorder-compatibility-and-filter` — repaired

Added explicit nonemptiness convention for forcing filters: the listed upward-closure and pairwise directedness tests alone are vacuous for empty set. Fixed stronger-order orientation and internal common lower-bound condition in strategy, preserving statement/scope and every claim. This is a local definitional completion with confidence1, no AC or extra supplier; owner sync plan strategy. Next separative quotient.

Examined dependency IDs: .

### `lem-separative-quotient-of-a-forcing-preorder` — accept

For p<=*q<=*s and r<=p, extend r compatibly with q to t<=r,q, then t compatibly with s; hence r compatible s. Mutual preorder gives well-defined antisymmetric quotient. A quotient common lower bound t<=*p,q yields actual common extension by successively extending t with p and q; converse immediate. Failure p<=*q witnesses r<=p incompatible q, proving separativity. No choices beyond two fixed witnesses. Full local proof, unchanged, ZF.

Examined dependency IDs: def-forcing-preorder-compatibility-and-filter, def-equivalence-relation.

### `thm-forcing-preorders-have-regular-open-completions` — accept

In downward-open topology r belongs to cl(down p) iff r compatible p; interior consists exactly of r<=*p. Thus e(p) contains p and is nonzero. Inclusion e(p) subset e(q) iff p<=*q; intersection nonempty iff common compatibility extension, by the previous proof. A nonempty regular open U contains p and down p, hence its regularization e(p) stays in U. Separativity identifies <=* with <= on a poset. Regular-open completeness already proved in ZF; no BPI/AC. Unchanged.

Examined dependency IDs: lem-separative-quotient-of-a-forcing-preorder, thm-regular-open-sets-form-a-complete-boolean-algebra.

### `rem-bpi-choice-boundary-and-forcing-conventions` — accept

Matches examined metatheorem versus assumption distinctions. AC=>BPI is a conditional theorem, not ambient AC used here; forcing completion uses only downward topology and RO. SET-21 nonimplication is destination/orientation with no imported proof or catalogue dependency. Coverage explicit defer preserves later relative consistency obligation. Unchanged, ZF; next Boolean examples.

Examined dependency IDs: def-boolean-prime-ideal-principle, thm-choice-implies-boolean-prime-ideal-principle, thm-bpi-equivalent-to-arbitrary-language-compactness, thm-bpi-equivalent-to-compact-hausdorff-tychonoff, thm-forcing-preorders-have-regular-open-completions.

### `ex-finite-powerset-stone-space` — accept

Atoms of finite P(S) are singleton sets, and the atom lemma makes every ultrafilter a unique point filter. Basic [A] is exactly those point filters indexed by A, so every singleton is open and the topology discrete. Empty S yields trivial algebra and empty spectrum. Complete finite computation, unchanged, ZF.

Examined dependency IDs: lem-finite-boolean-algebras-are-powersets-of-atoms, def-stone-ultrafilter-space-and-clopens.

### `ex-finite-boolean-quotient-and-dual-map` — accept

Each quotient class consists of A and A union {2} for A subset {0,1}; restriction preserves bounds, complement relative to targets, and finite operations. Pullback of the point character at i=0,1 is that same point character in the three-point algebra, giving the two-point inclusion. Finite atom computation suffices without global BPI duality. Unchanged, ZF.

Examined dependency IDs: lem-boolean-quotient-congruence, def-boolean-homomorphism-and-quotient, def-stone-ultrafilter-space-and-clopens, lem-finite-boolean-algebras-are-powersets-of-atoms.

### `ex-finite-forcing-filter-versus-boolean-filter` — accept

Using repaired nonempty forcing-filter convention, upward closure contains S and excludes empty; a common nonzero lower member below A,B forces A intersect B into the filter. Conversely proper Boolean meet closure supplies the directed lower bound. For S={0,1}, proper filters are {S}, {{0},S}, {{1},S}; latter two maximal, singleton conditions incompatible. Empty S has neither proper Boolean filters nor a forcing preorder under nonempty convention. Unchanged, ZF. Boolean pair complete, 28 accept and 2 repaired.

Examined dependency IDs: def-forcing-preorder-compatibility-and-filter, lem-generated-boolean-filter-and-ultrafilter-tests.

### `def-countable-paracompactness-and-dowker-space` — repaired

Read both published definitions. Refinement explicitly need not cover in this library, so added the required refining-cover convention; otherwise every space would vacuously be countably paracompact using empty family. Preserved statement and full intended scope, explicitly separated normal from T1. Confidence1 local definition completion, ZF; owner sync plan strategy. Next shrinking criterion.

Examined dependency IDs: def-cover-refinement-and-local-finiteness, def-normal-and-t4-spaces.

### `thm-countable-paracompactness-shrinking-criterion` — accept

Read complete local strategy and both published shrinking/local-finiteness suppliers. Least containing-cover index makes each C_n closed inside U_n; local finiteness puts a neighborhood inside some C_n. Cumulative closed shrinkings give V_n=U_n minus C_(n-1), covering by least membership and locally finite by an interior neighborhood. Splitting V_n against finitely many original cover members preserves local finiteness. Complements give closure-empty expansions exactly; normality plus countably chosen shrinkings gives the weaker-expansion equivalence. AC explicitly declared (least-index assignment itself needs none). Full proof checked; Hart original browser timed out, direct local argument sufficient. Unchanged, ZFC.

Examined dependency IDs: def-countable-paracompactness-and-dowker-space, lem-locally-finite-unions-and-closures, lem-normality-via-shrinking, def-axiom-of-choice.

### `thm-dowker-product-characterization` — accept

Read full Hart §4.3 pp26–28 from /tmp/g-source-hart.txt after original URL timeout; exercises give this route, with complete local proof supplied. Closed projection follows finite compact fibre cover; bisection compactness uses examined nested-interval theorem. Necessity closed strips are locally finitely many near each x since F_n decreases to empty; normal shrinking separates the zero slice. Sufficiency rational finite-union fibre neighborhoods yield an open countable cover by closed projection. Grouping a locally finite refining cover by indices remains locally finite. Recursive shrinking maintains cover and its finite-at-point last-index argument proves the final cover. Locally finite rectangles have closure in union of product closures, disjoint from G. All compact/fibre/shrinking bridges checked, AC explicit. Unchanged, ZFC.

Examined dependency IDs: thm-countable-paracompactness-shrinking-criterion, def-product-topology, lem-normality-is-closed-hereditary, def-axiom-of-choice, lem-normality-via-shrinking, lem-locally-finite-unions-and-closures, thm-nested-interval-property.

### `def-reduced-ordinal-products-and-scales` — accept

Read ordinal cofinality definition and complete Abraham–Magidor elementary order/cofinality conventions pp8–10 from /tmp/g-source-pcf.txt after URL timeout. The displayed strict relation is stronger than <= plus inequality, crucial for later ideal products. True cofinality is conditional on a strict regular-length cofinal sequence; the definition asserts neither existence for every product nor any result for an improper ideal. Later proper-support conventions must be checked. AC declared as the ambient development assumption, not needed just to form ordinal-function relations. Unchanged, ZFC.

Examined dependency IDs: def-cofinality, def-axiom-of-choice.

### `lem-progressive-products-and-true-cofinality-transfers` — accept

Dispatch continuation: step3b-g-357ebc7f65e1a181. Current Step-3a receipts all clear and previous item receipts remain current; retained the existing interpretation escalation. Checked proper-ideal strictness, regular linear cofinality, cofinal embeddings (not surjective repetition maps), support restriction and ultrafilter transfer; AC explicit. Abraham–Magidor pp8–13 and p30 read completely for these clauses from /tmp/g-source-pcf.txt; fresh URL fetch timed out. Examined published filter/ultrafilter proofs, cofinality proof, recursion and cardinal clauses. research/phase-2-catchup-24-step3b-g.md

Every family of size below min A has a pointwise strict bound by coordinate regularity, establishing the lower cofinality bound omitted from the short linear-order argument. A cofinal embedded subposet inherits strict directedness by taking a further chain term before choosing an image bound. Recursion on a wellordered witness set gives the cofinal chain. Repetition uses sup(t(a)+1) on each fibre, strictly below its regular cardinal. Finite supports and the empty pcf convention are separate. Contract unchanged. No cross-batch supplier. Examined IDs: def-reduced-ordinal-products-and-scales, def-filter, def-ultrafilter, thm-ultrafilter-lemma, thm-ultrafilter-characterisation, def-axiom-of-choice, thm-cofinality-basics, thm-regularity-of-the-alephs, thm-transfinite-recursion, lem-cardinal-arithmetic-basic-laws, cor-cardinal-absorption, thm-well-ordering-theorem. Next: cofinality ideals/cutoffs. Final mechanical checks pending.

### `lem-pcf-cofinality-ideals-and-cutoff-conventions` — accept

Finite-union/support rules prove the ideal and restriction assertions. Complement decision proves the intersection formula, including empty intersection P(A) for improper ideal (dual family then improper). No fixed-ultrafilter cutoff converse imported. Abraham–Magidor p32 full notation argument read from /tmp/g-source-pcf.txt. research/phase-2-catchup-24-step3b-g.md Under the preceding explicit improper-ideal convention, “dual filter” denotes the improper dual family when necessary; no ultrafilter extension is made in that case. Properness at lambda in pcf(A) follows from lambda not belonging to itself. ZFC, unchanged. Examined IDs: lem-progressive-products-and-true-cofinality-transfers, def-axiom-of-choice, thm-cofinality-basics, thm-regularity-of-the-alephs, thm-transfinite-recursion, lem-cardinal-arithmetic-basic-laws, cor-cardinal-absorption, thm-ultrafilter-characterisation, def-filter. Next: strong-increase/projection definition.

### `def-strong-increase-and-bounding-projections-for-countable-products` — accept

Checked definitions against Abraham–Magidor pp11–16, Definitions 2.4/2.8/2.10, including nonempty projection sets, fallback equivalence modulo proper ideal, and strict bound meaning. No existence theorem is asserted here. research/phase-2-catchup-24-step3b-g.md Source text /tmp/g-source-pcf.txt read completely for these definitions. Minimum exists by ordinal wellordering whenever the eligible subset is nonempty; f<sup S guarantees that condition. Exceptional fallbacks do not change ideal assertions. ZFC explicit; unchanged. Examined IDs: def-reduced-ordinal-products-and-scales, thm-cofinality-basics, def-axiom-of-choice, lem-progressive-products-and-true-cofinality-transfers. Next: bounding-projection lemma. Scope refresh exited 0: 57 declines, 0 pending; current dispositions retained.

### `lem-strong-increase-gives-bounding-projections` — accept

Full local argument and Abraham–Magidor Lemma 2.12 p16 checked: recursive thinning uses regular lambda; positive witness sets survive removal of two ideal sets; regular kappa>|A| makes one coordinate recur kappa times, contradicting |S(a)|<kappa. research/phase-2-catchup-24-step3b-g.md Read entire source proof in /tmp/g-source-pcf.txt. For repeated coordinate at i<j, it lies outside Z_(i+1) and Z_j, so strong increase gives the middle inequality (equality if j=i+1). Failure-set normalization only enlarges each individual witness; no infinite ideal union is taken. Empty eligible sets lie on an I-small set and fixed fallbacks preserve all comparisons. AC declared for the recursive choices. Unchanged. Examined IDs: def-strong-increase-and-bounding-projections-for-countable-products, thm-cofinality-basics, thm-transfinite-recursion, def-axiom-of-choice, cor-cardinal-absorption, lem-cardinal-arithmetic-basic-laws. Next: exact upper bounds.

### `lem-bounding-projections-give-exact-upper-bounds` — accept

Read and checked full Abraham–Magidor Theorem 2.13, Lemma 2.14 and Theorem 2.15 (2=>3), pp17–19, against local bounded descending-projection proof and exactness transfers. Source /tmp/g-source-pcf.txt. research/phase-2-catchup-24-step3b-g.md At eta<tau+ each S_eta has size at most tau by cardinal absorption; H is a fixed pointwise bound, so choices range over a set. A beta above all alpha_eta exists since lambda is regular >tau+. The fixed-beta projections decrease pointwise, with a positive strict drop at each successor; tau coordinates cannot each drop only finitely often through tau+ stages. Minimality yields leastness by pointwise minimum. Successor-valued coordinates can be lowered to predecessors while retaining weak upper-boundedness, so their positive support contradicts minimality. Two-point projection proves exactness; small cofinal coordinate sets contradict minimality and prove the cofinality clause. Restriction extends by zero; passage to larger ideals resets the exceptional test coordinates to zero below positive h. These are valid without ideal completeness. ZFC explicit, unchanged. Examined IDs: def-strong-increase-and-bounding-projections-for-countable-products, thm-cofinality-basics, thm-regularity-of-the-alephs, thm-transfinite-recursion, def-axiom-of-choice, cor-cardinal-absorption, lem-cardinal-arithmetic-basic-laws. Next: read the next PCF contract and its source section.

### `lem-uncountable-club-guessing-at-a-double-successor` — accept

Checked complete uncountable proof of Abraham–Magidor Theorem 2.17 pp20–21 and published club-intersection/stationary-stratum proofs. Decreasing restrictions stabilize because kappa points have fewer than kappa+ removal stages; all ambient club intersections are shorter than theta. research/phase-2-catchup-24-step3b-g.md Source /tmp/g-source-pcf.txt. Restriction at accumulation points ensures the club intersection is unbounded in delta of uncountable cofinality and still has order type kappa. Accumulation points form a club by the explicit omega-recursion; theta regular >kappa+ handles the final intersection. Initial club choices and missed-club choices use declared AC on sets. This proof deliberately covers only uncountable kappa. Unchanged. Examined IDs: thm-small-intersections-of-clubs, thm-regular-cofinality-strata-are-stationary, thm-cofinality-basics, thm-regularity-of-the-alephs, thm-transfinite-recursion, def-axiom-of-choice. Next: club-continuity implication.

### `lem-club-continuity-produces-strongly-increasing-subsequences` — accept

Complete Abraham–Magidor Lemma 2.19 pp21–23 and sandwich Lemma 2.7 pp14–15 read and checked against local arbitrary-ideal construction. Prefix questions are bounded by the guessed E_delta supremum, and nonaccumulation points give individual ideal exceptional sets. research/phase-2-catchup-24-step3b-g.md Source /tmp/g-source-pcf.txt. The continuous theta-sequence has supremum below regular lambda and cofinality theta, by pulling back any shorter alleged cofinal set. Its range intersects E_delta in a club; inverse image is club by continuity. Removing the first club point leaves kappa many successor-enumeration points, each with a last predecessor. Their prefix bounds give strong increase; sandwiching successor xi-indices puts the resulting sequence inside U. Only finite exceptional unions are used, even when |A|>=kappa. No cardinal-size condition needed until the separate projection lemma. ZFC explicit; unchanged. Examined IDs: def-strong-increase-and-bounding-projections-for-countable-products, lem-uncountable-club-guessing-at-a-double-successor, thm-small-intersections-of-clubs, thm-cofinality-basics, thm-transfinite-recursion, def-axiom-of-choice. Next: directed-products construction.

### `lem-directed-progressive-products-have-club-continuous-chains` — accept

Checked source Theorem 2.21 pp23–24 and stronger local construction: independent directed bound u_delta is retained at every stage; max with the coordinate supremum plus one ensures both chain strictness and club continuity. research/phase-2-catchup-24-step3b-g.md Source /tmp/g-source-pcf.txt read through the end of the proof. At stages delta<lambda, directedness bounds fewer than lambda previous terms; coordinate successors stay in infinite cardinals. At cf(delta)=kappa++, regular coordinates above kappa++ contain the club supremum. The remaining coordinates form the stated I-set and are reset to zero. Distinct double successors specify a unique rule, and earlier lemmas supply star/projection/exactness only under their hypotheses. Declared AC selects witnesses; recursion alone is not used as a choice principle. Unchanged. Examined IDs: lem-progressive-products-and-true-cofinality-transfers, lem-club-continuity-produces-strongly-increasing-subsequences, lem-strong-increase-gives-bounding-projections, lem-bounding-projections-give-exact-upper-bounds, def-axiom-of-choice, thm-cofinality-basics, thm-regularity-of-the-alephs, thm-transfinite-recursion, lem-cardinal-arithmetic-basic-laws, cor-cardinal-absorption. Next: PCF ideal directedness/cutoff.

### `thm-pcf-ideal-directedness-and-ultrafilter-cofinality-cutoffs` — accept

Complete Theorem 3.4 and Corollary 3.5 pp32–33 of Abraham–Magidor read, including cardinal induction and the positive identity-coordinate contradiction; matched each hypothesis to the preceding locally checked lemmas. research/phase-2-catchup-24-step3b-g.md Source /tmp/g-source-pcf.txt. Progressivity leaves at most the three successor cardinals <=tau+3; their removal is finite and null in the large-lambda case. Singular rho is handled by smaller blocks and then their fewer bounds. Regular rho>=min A exceeds tau+3, so the exact-bound hypotheses hold. Capping at identity preserves the least/exact bound modulo I. On B={h(a)=a}, any product function t is pointwise below h; restricted exactness therefore applies without assuming t<_I h globally. A D-bound contradicts that exactness because D contains B and avoids I. Cutoffs follow, including singular lambda and improper I (where only weak directedness is asserted). ZFC explicit; unchanged. Examined IDs: lem-progressive-products-and-true-cofinality-transfers, lem-pcf-cofinality-ideals-and-cutoff-conventions, lem-directed-progressive-products-have-club-continuous-chains, lem-strong-increase-gives-bounding-projections, lem-bounding-projections-give-exact-upper-bounds, def-axiom-of-choice, thm-cofinality-basics, thm-regularity-of-the-alephs, thm-transfinite-recursion, lem-cardinal-arithmetic-basic-laws, cor-cardinal-absorption. Next: maximum and continuity.

### `thm-progressive-pcf-has-a-maximum-and-continuous-cutoff-ideals` — accept

Checked Theorem 3.6, Corollary 3.7 and Exercise 3.8 p34 with complete local exercise solution. Union of the increasing proper ideals is proper; an extending ultrafilter gives the maximum by cutoff. Distinct cutoff witnesses inject pcf(A) into P(A). research/phase-2-catchup-24-step3b-g.md Source /tmp/g-source-pcf.txt. For nonempty X in J_<lambda, progressivity passes to X and max pcf(X)<lambda supplies the desired theta. For empty X and any nonzero cardinal lambda, theta=0 is available and J_<=0 contains empty; this also checks the finite positive-lambda cases beyond the strategy's explicit infinite case. At lambda=0 the union is empty and the assertion is correctly excluded. AC declared for witness choices and extension. Unchanged. Examined IDs: lem-progressive-products-and-true-cofinality-transfers, lem-pcf-cofinality-ideals-and-cutoff-conventions, thm-pcf-ideal-directedness-and-ultrafilter-cofinality-cutoffs, def-axiom-of-choice, thm-cofinality-basics, thm-regularity-of-the-alephs, thm-transfinite-recursion, lem-cardinal-arithmetic-basic-laws, cor-cardinal-absorption, thm-ultrafilter-lemma. Next: single generators.

### `thm-progressive-pcf-has-universally-cofinal-sequences` — accept

Read full Abraham–Magidor Theorem 4.2 pp37–39 and checked the matrix construction, pointwise monotonicity, common index bound and strict subset-growth contradiction, including principal/small cases. research/phase-2-catchup-24-step3b-g.md Source /tmp/g-source-pcf.txt. Null removal of tau+ is justified only when lambda>tau+; in the other case any cofinality-lambda ultrafilter must contain {lambda}, since a lambda-family is pointwise bounded on coordinates >lambda. For the matrix, max with a chosen representative supplies row domination while lambda-directedness supplies column strictness. The pointwise supremum of tau+ zeroth entries remains in every coordinate after removal. T_alpha grows literally, and the differing D_alpha memberships force a fresh point at every successor, impossible on tau coordinates. ZFC explicit; unchanged. Examined IDs: lem-progressive-products-and-true-cofinality-transfers, lem-pcf-cofinality-ideals-and-cutoff-conventions, thm-pcf-ideal-directedness-and-ultrafilter-cofinality-cutoffs, def-axiom-of-choice, thm-cofinality-basics, thm-regularity-of-the-alephs, thm-transfinite-recursion, lem-cardinal-arithmetic-basic-laws, cor-cardinal-absorption, thm-ultrafilter-characterisation. Next: universal sequence strong increase and exact bounds (before single generators).

### `lem-universal-pcf-sequences-have-strong-increase-and-exact-bounds` — accept

Complete source Lemma 4.6 p40 checked with local principal and singular-mu case completions, exact-bound hypotheses and identity capping. No countable club-guessing theorem is assumed. research/phase-2-catchup-24-step3b-g.md Source /tmp/g-source-pcf.txt. A positive successor initial segment forces its last coordinate to be lambda; otherwise mu is a limit cardinal with cofinality at most |A|, hence singular and below regular lambda. Every regular kappa<mu has kappa++<mu and a null initial coordinate segment, so the already checked construction applies. Dominating a universal sequence preserves universality by the cutoff. In the principal case, constants xi off the null segment form the required chain and every test function below lambda is bounded by one xi because |A|<lambda. Finite A has the same direct proof. Leastness of the exact bound justifies capping at identity without changing it modulo I. ZFC explicit; unchanged. Examined IDs: lem-progressive-products-and-true-cofinality-transfers, lem-pcf-cofinality-ideals-and-cutoff-conventions, lem-directed-progressive-products-have-club-continuous-chains, thm-pcf-ideal-directedness-and-ultrafilter-cofinality-cutoffs, thm-progressive-pcf-has-universally-cofinal-sequences, lem-strong-increase-gives-bounding-projections, lem-bounding-projections-give-exact-upper-bounds, def-axiom-of-choice, thm-cofinality-basics, thm-regularity-of-the-alephs, thm-transfinite-recursion, lem-cardinal-arithmetic-basic-laws, cor-cardinal-absorption. Next: single generators.

### `thm-pcf-cofinality-ideals-have-single-generators` — accept

Read complete source Lemma 4.7 and Theorem 4.8 pp40–42; checked generator criterion, B={h=identity}, exactness under ultrafilter extension, universality contradiction and uniqueness modulo the smaller ideal. research/phase-2-catchup-24-step3b-g.md Source /tmp/g-source-pcf.txt. In the generator criterion, an ultrafilter containing X minus B has cofinality <=lambda, and the assumed B-membership for equality rules equality out. Exactness on the identity support gives cofinality lambda when D avoids I. Conversely avoidance of B makes h represent an internal strict upper bound, contradicting universal cofinality. Both differences of two generators are small. Simultaneous AC choices asserted without extra smoothness/transitivity. Unchanged. Examined IDs: lem-progressive-products-and-true-cofinality-transfers, lem-pcf-cofinality-ideals-and-cutoff-conventions, thm-pcf-ideal-directedness-and-ultrafilter-cofinality-cutoffs, lem-universal-pcf-sequences-have-strong-increase-and-exact-bounds, lem-bounding-projections-give-exact-upper-bounds, def-axiom-of-choice, thm-cofinality-basics, thm-regularity-of-the-alephs, thm-transfinite-recursion, lem-cardinal-arithmetic-basic-laws, cor-cardinal-absorption, thm-ultrafilter-characterisation. Next: generator consequences.

### `thm-pcf-generators-restrict-finitely-cover-and-carry-scales` — accept

Checked all five local proofs against complete source 4.4–4.5 pp39–40 and 4.10–4.14 pp42–44; read published FIP/filter proof. Finite generator coverage is ordinal induction, scale cofinality uses FIP, and ordinary product cofinality uses finite maxima and the downward closure of the T_h family. research/phase-2-catchup-24-step3b-g.md Source /tmp/g-source-pcf.txt. Restriction proves the smaller-ideal statement before finite-cover induction. Positive decreasing-modulo-I T_xi have FIP with the dual filter; an extending ultrafilter contradicts universality. A set in every ultrafilter extension of F belongs to F by adjoining its complement and using FIP, so the arbitrary-filter equivalence is justified. The family H has size <=M because there are at most M cardinal indices <=M and each sequence has length <=M; finite maxima preserve that bound. Downward closure is explicitly taken before ideal extension, correcting the source shorthand. All claims retain declared AC, no smooth generators used. Unchanged. Examined IDs: lem-progressive-products-and-true-cofinality-transfers, lem-pcf-cofinality-ideals-and-cutoff-conventions, thm-pcf-ideal-directedness-and-ultrafilter-cofinality-cutoffs, thm-progressive-pcf-has-a-maximum-and-continuous-cutoff-ideals, thm-progressive-pcf-has-universally-cofinal-sequences, lem-universal-pcf-sequences-have-strong-increase-and-exact-bounds, thm-pcf-cofinality-ideals-have-single-generators, def-axiom-of-choice, thm-cofinality-basics, thm-regularity-of-the-alephs, thm-transfinite-recursion, lem-cardinal-arithmetic-basic-laws, cor-cardinal-absorption, lem-fip-generates-filter, thm-ultrafilter-lemma, thm-ultrafilter-characterisation. Next: interval no-holes.

### `thm-pcf-has-no-holes-for-progressive-intervals` — accept

Complete source Theorem 3.1 pp31–32 and local interval/finite-tail completion checked. Positive singleton would violate lambda-directedness; the least positive initial segment is unbounded with singular supremum; the interval hypothesis puts coordinate cofinalities back inside it. research/phase-2-catchup-24-step3b-g.md Source /tmp/g-source-pcf.txt. General transfer needs |A0|<min range(c), supplied by cf(h(a))>=min A0 after null normalization. Exactness and individual resetting produce the cofinal chain in product h. For a maximum-free interval, all regulars below singular sup A already lie in A, and directedness fills those above it through max pcf(A). Every infinite ordinal order type is a limit ordinal plus a finite tail; finite-union pcf handles a terminal tail without asserting unrestricted no-holes. ZFC explicit; unchanged. Examined IDs: lem-progressive-products-and-true-cofinality-transfers, lem-pcf-cofinality-ideals-and-cutoff-conventions, lem-directed-progressive-products-have-club-continuous-chains, thm-pcf-ideal-directedness-and-ultrafilter-cofinality-cutoffs, thm-progressive-pcf-has-a-maximum-and-continuous-cutoff-ideals, lem-strong-increase-gives-bounding-projections, lem-bounding-projections-give-exact-upper-bounds, def-axiom-of-choice, thm-cofinality-basics, thm-regularity-of-the-alephs, thm-transfinite-recursion, lem-cardinal-arithmetic-basic-laws, cor-cardinal-absorption, thm-ultrafilter-lemma. Next: countable-coordinate long chain.

### `lem-eventual-products-below-aleph-omega-have-a-continuous-long-chain` — accept

Checked direct eventual directedness for <mu and mu sized families, and every stage of the local club-continuous chain. Read source Theorems 2.21/2.23 and complete Exercise 2.25/Theorem 2.26 hint pp23–25. research/phase-2-catchup-24-step3b-g.md Source /tmp/g-source-pcf.txt. For size mu, partition into countably many <mu blocks, bound each then the countable family, using transitivity of eventual strict order for each fixed original function. Coordinate regularity handles all but finitely many coordinates. Max(u_delta,v_delta)+1 preserves strictness and puts the club supremum below f_delta. Every uncountable regular below aleph_omega is a finite successor aleph, as the published regularity theorem explicitly supplies. Declared AC selects bounds/clubs. Unchanged. Examined IDs: lem-club-continuity-produces-strongly-increasing-subsequences, thm-cofinality-basics, thm-regularity-of-the-alephs, thm-transfinite-recursion, def-axiom-of-choice. Next: aleph_(omega+1) scale.

### `thm-pcf-aleph-omega-plus-one-scale` — accept

Checked full local proof expanding source Exercise 2.25/Theorem 2.26 p25 and Lemma 2.3 pp12–13. Exact-bound cofinalities tend to aleph_omega; cofinal embeddings transfer true cofinality; finite fibres preserve the finite ideal. research/phase-2-catchup-24-step3b-g.md Source /tmp/g-source-pcf.txt. The same exact bound receives each cofinality inequality because exact bounds are unique modulo finite equality. Capping at aleph_n and deleting finitely many exceptional coordinates preserves exactness; each chain function is reset separately below h. For every k use kappa=aleph_(k+1), proving finite fibres of c(n). Repetition's inverse image sends finite sets to finite sets and infinite subsets of its range to infinite sets, preserving/reflection strictness. Cofinality follows from regular-coordinate fibre suprema, not from an unjustified surjectivity or strict ceiling map. Reindexing yields an infinite subset B, without claiming all n are retained. Declared AC throughout; unchanged. Examined IDs: lem-eventual-products-below-aleph-omega-have-a-continuous-long-chain, lem-strong-increase-gives-bounding-projections, lem-bounding-projections-give-exact-upper-bounds, def-reduced-ordinal-products-and-scales, thm-cofinality-basics, thm-regularity-of-the-alephs, thm-transfinite-recursion, def-axiom-of-choice, lem-progressive-products-and-true-cofinality-transfers. Next: scale normalization and Rudin space.

### `lem-normalizing-a-scale-at-existing-least-upper-bounds` — accept

Read complete Kojman–Shelah Claim 3, arxiv.org/pdf/math/9512202 pp4–5; verified local recursion supplies strictness at a least-bound limit by inserting gamma+1, and successors preserve cofinality. research/phase-2-catchup-24-step3b-g.md Checked current supplier contracts and regularity/recursion clauses already read. A least eligible original-scale index above alpha exists by regularity of its length; AC chooses least-bound representatives from product subsets. At an uncountable-cofinality alpha, gamma+1<alpha supplies f_gamma<*f_(gamma+1)<=*h, so normalization retains strictness. Successor stages exceed the original g_alpha. No bound is asserted at every limit, and the actual infinite B is retained. ZFC explicit; unchanged. Examined IDs: def-reduced-ordinal-products-and-scales, thm-pcf-aleph-omega-plus-one-scale, thm-transfinite-recursion, def-axiom-of-choice, thm-regularity-of-the-alephs, thm-cofinality-basics. Next: tail suprema.

### `lem-scale-tail-suprema-have-prescribed-cofinality` — accept

Read complete Kojman–Shelah Claim 4 p5; checked coordinate cofinality and least-upper-bound argument in the displayed local strategy, including bounded delta and the countable common witness-index bound. research/phase-2-catchup-24-step3b-g.md URL https://arxiv.org/pdf/math/9512202. Regularity of aleph_n and n>k>=m put the coordinate suprema below aleph_n; strict increasing aleph_m sequences have cofinality aleph_m. Regularity of aleph_(omega+1) bounds delta and cf(delta)=aleph_m by the same increasing-sequence argument. For a competing bound, countably many crossing indices have a common bound <aleph_m. That one g_zeta is eventually a scale term, forcing the set of offending coordinates finite. Extend tail functions arbitrarily on finitely many coordinates to invoke normalization. ZFC explicit; unchanged. Examined IDs: lem-normalizing-a-scale-at-existing-least-upper-bounds, thm-cofinality-basics, def-axiom-of-choice, thm-regularity-of-the-alephs. Next: Rudin box definition.

### `def-rudin-ordinal-box-space` — accept

Checked published ordinal interval basis and explicit box-topology definition, plus Kojman–Shelah Definition 5 pp5–6. At every Rudin point all coordinates are nonzero limits, so coordinate (f(n),h(n)] neighborhoods supply the displayed relative basis. research/phase-2-catchup-24-step3b-g.md URL https://arxiv.org/pdf/math/9512202. The finite uniform cofinality bound is part of membership; coordinates may attain aleph_n for finitely many n. The basis uses all coordinates, so product-topology substitution is excluded explicitly. Ambient AC is stated and supplied through the reduced-product dependency; no extra choice theorem is needed for this definition. Unchanged. Examined IDs: def-reduced-ordinal-products-and-scales, def-order-topology-on-an-ordinal, def-product-topology, def-axiom-of-choice. Next: Rudin normality dependencies.

### `def-rudin-ambient-ordinal-box-space` — accept

Checked Hart Chapter 6 section 1 printed p35 and preceding local/published box definitions. Ambient Y_B drops only the uniform finite cofinality bound; arbitrary ordinal upper bounds define valid relative boxes. research/phase-2-catchup-24-step3b-g.md Full source passage /tmp/g-source-hart.txt (PDF page38, printed35). The top t belongs to Y_B by successor-aleph regularity but is not in X_R(B). Bounds b need not be points; later refinement explicitly uses that freedom. ZFC ambient; unchanged. Examined IDs: def-rudin-ordinal-box-space. Next: P-space lemma.

### `lem-rudin-box-space-basic-neighborhoods-and-p-space` — accept

Checked full local proofs of Hart Chapter 6 section 1 Exercises 1–2 printed p35: coordinate countable suprema stay below points of uncountable cofinality, and a violating coordinate gives an open complement of any box. research/phase-2-catchup-24-step3b-g.md Source /tmp/g-source-hart.txt. Closedness follows since [0,f(n)] and (h(n),aleph_n] are open ordinal intervals for a violating coordinate; corresponding cylinders are box-open. The lower supremum argument applies to all of Y_B, with no uniform bound. AC explicitly selects the countably many neighborhoods. Unchanged. Examined IDs: def-rudin-ordinal-box-space, thm-cofinality-basics, def-axiom-of-choice, def-rudin-ambient-ordinal-box-space, def-order-topology-on-an-ordinal, def-product-topology. Next: disjoint box refinement.

### `lem-rudin-disjoint-box-refinement` — accept

Read Hart complete Chapter 6 section 2 partition construction and Exercises 2–3 printed p36; checked all supplied local completions: successor-bound normalization, countable-cofinality splitting, limit branches, and coordinate stabilization below omega1. research/phase-2-catchup-24-step3b-g.md Source /tmp/g-source-hart.txt (PDF39/printed36). Removing a successor endpoint changes no allowed limit coordinate; finite descent reaches a limit or zero. A nonempty normalized box with upper point outside Y_B has a coordinate of cofinality omega, where disjoint intervals cover all permitted coordinates below the endpoint. At countable limit stages any surviving point is strictly above the supremum of lower bounds; coordinatewise infima of upper bounds give exactly the intersection. Each unsubordinate refinement branch must decrease some ordinal upper bound; each coordinate can strictly decrease only finitely often, and countably many stabilization stages are bounded in omega1. Subordinate cells are preserved, so the eventual cells are a disjoint refining cover. Declared AC and published recursion suffice. Unchanged. Examined IDs: def-rudin-ambient-ordinal-box-space, lem-rudin-box-space-basic-neighborhoods-and-p-space, thm-transfinite-recursion, thm-regularity-of-the-alephs, lem-ordinal-basics, def-axiom-of-choice. Next: Rudin closure-separation machinery.

### `lem-rudin-bounded-cofinality-hull-transfer` — accept

Read Hart Chapter 6 section 2 Exercises 5–7 printed p37 and checked the complete local V_theta proof, finite cofinality partition, simultaneous domination and internal witness transfer. Published LS/hull, Tarski–Vaught and rank proofs read. research/phase-2-catchup-24-step3b-g.md Source /tmp/g-source-hart.txt PDF40/printed37. Regular theta>kappa bounds the rank supremum of each size-kappa hull, so the hull itself is an available next-stage parameter. Tarski–Vaught proves unions elementary with finite tuples in a common stage. On H, h_alpha is definable from M_alpha,x,H in the next hull and its coordinate successors force strict growth; regular kappa fixes the cofinality of the final sup. On each of finitely many low cofinality levels, one gamma_r bounds the countably many cofinal-map requests; those ordinals lie in M because kappa is a subset of M. A single high-stage alpha handles H. Finite combination yields the required internal z. Function evaluation, comparison and union are absolute in transitive V_theta by their bounded formulas; no assertion V_theta models ZFC or reflection is used. The historical batch-14 reflection-page edge in old notes is not used by this current proof. ZFC explicit; unchanged. Examined IDs: def-rudin-ambient-ordinal-box-space, thm-downward-lowenheim-skolem-with-parameters, thm-tarski-vaught-set-structure-test, thm-transfinite-recursion, thm-membership-rank-and-hierarchy-levels, prop-cumulative-hierarchy-transitivity-and-growth, thm-regularity-of-the-alephs, thm-cofinality-basics, cor-cardinal-absorption, def-axiom-of-choice, lem-skolem-hull-size-and-elementarity. Next: indexed discrete closures.

### `lem-rudin-discrete-families-have-discrete-ambient-closures` — accept

Checked full local indexed-family proof expanding Hart Chapter 6 section 2 Exercises 4–8 p37: internal two-point witnesses transfer to xhat, P-space closure commutes with countable unions, and countably many possible indices are removed by closed complements. research/phase-2-catchup-24-step3b-g.md Source /tmp/g-source-hart.txt. Include named X_m and the indexed family as parameters to avoid internal cofinality computation. An open neighborhood meeting a closure meets the underlying set, so stratum discreteness transfers to stratum closures. If two full closures contain x, their witnesses at m,n both occur at max(m,n), contradiction. Intersecting one neighborhood per m leaves only countably many possible indices; all except the at-most-one containing x can be removed by another countable open intersection. This proves indexed discreteness rather than merely pairwise disjointness. AC explicit, unchanged; no cross-batch input. Examined IDs: lem-rudin-bounded-cofinality-hull-transfer, lem-rudin-box-space-basic-neighborhoods-and-p-space, def-axiom-of-choice. Next: collectionwise normality.

### `thm-rudin-box-space-is-collectionwise-normal` — accept

Checked local conclusion of Hart Chapter 6 section 2 p37: discrete ambient closures supply an open cover meeting at most one indexed member, whose disjoint refinement groups into the required disjoint neighborhoods. research/phase-2-catchup-24-step3b-g.md Source /tmp/g-source-hart.txt. Every point of each F_j lies in a partition cell meeting that member; a cell cannot be assigned to two distinct members. Restriction gives pairwise disjoint open neighborhoods in X_R(B). Distinct points differ at a coordinate, where the disjoint open rays [0,a] and (a,aleph_n] separate them. The discrete-closure lemma, not hereditary ultraparacompactness, supplies the subspace step. ZFC explicit, unchanged. Examined IDs: lem-rudin-box-space-basic-neighborhoods-and-p-space, lem-rudin-disjoint-box-refinement, lem-rudin-discrete-families-have-discrete-ambient-closures, def-axiom-of-choice, def-order-topology-on-an-ordinal. Next: Rudin non-paracompactness machinery.

### `lem-rudin-internal-hull-tail-domination` — accept

Read Hart Chapter 6 section 3 Exercise 3 printed p38 and checked full local size-kappa internally increasing V_theta-hull argument against published LS/TV/rank/cofinality clauses. research/phase-2-catchup-24-step3b-g.md Source /tmp/g-source-hart.txt PDF41/printed38. Each next hull contains the previous hull as an element, making its tail-supremum function internally definable; coordinate successors force strict growth of length regular kappa. Countably many external crossing requests are bounded at one stage. Initial values b(n)+1 are below kappa and finitely modifying that internal tail function yields z. Internal u(n)<aleph_n is below x(n) because its successor belongs to M; this does not claim all internal product points are below x. The explicit bounded formulas replace any reflection need, so the old batch-14 candidate edge is unnecessary here too. ZFC explicit; unchanged. Examined IDs: def-rudin-ordinal-box-space, thm-downward-lowenheim-skolem-with-parameters, thm-tarski-vaught-set-structure-test, thm-transfinite-recursion, thm-membership-rank-and-hierarchy-levels, prop-cumulative-hierarchy-transitivity-and-growth, thm-regularity-of-the-alephs, thm-cofinality-basics, cor-cardinal-absorption, def-axiom-of-choice. Next: initial-top slice neighborhoods.

### `lem-rudin-neighborhoods-of-initial-top-slices-contain-tails` — accept

Read entire Hart Lemma 3.1/Exercises 3–5 printed pp37–38 and checked complete local finite-top repair. Countably many x^S neighborhoods give one internal z; every internal point above z belongs to its correct finite-top box; elementarity excludes external counterexamples. research/phase-2-catchup-24-step3b-g.md Source /tmp/g-source-hart.txt. The greatest differing binary exponent proves finite subsets countable. Only terms with n outside S enter b(n), so each is below x(n); uncountable cofinality bounds the countable supremum. Internal u may have top coordinates; its finite tail-top set S is handled by x^S, not falsely by u<=x. On S the coordinate top beats y^S; off S, z does. All witnesses are elements of the transitive V_theta containing named XR and U; the counterexample formula uses only absolute bounded comparisons. ZFC explicit, unchanged. Examined IDs: lem-rudin-internal-hull-tail-domination, lem-rudin-box-space-basic-neighborhoods-and-p-space, thm-regularity-of-the-alephs, thm-cofinality-basics, def-axiom-of-choice. Next: shrinking obstruction.

### `thm-rudin-tail-neighborhood-obstruction` — accept

Checked the complete local shrinking obstruction following Hart Chapter 6 section 3 pp37–38. Countable suprema of the chosen tail bounds remain below aleph_n; h(n)=b(n)+omega1 is an explicit point in the common tail. research/phase-2-catchup-24-step3b-g.md F_k is a finite intersection of coordinate-top closed sets; the sequence decreases and any member of its intersection would be the top function with unbounded finite aleph cofinalities, excluded by XR. The ordinal-addition recursion makes b+omega1 the supremum of a strictly increasing continuous omega1 sequence, giving cofinality omega1. It stays below regular aleph_n (n>=2) by successor/limit induction of length omega1. Thus the tail is nonempty in the uniform cofinality-omega1 stratum. Published addition conventions read. ZFC explicit, unchanged. Examined IDs: def-rudin-ordinal-box-space, lem-rudin-neighborhoods-of-initial-top-slices-contain-tails, thm-cofinality-basics, thm-regularity-of-the-alephs, def-axiom-of-choice, def-ordinal-addition, cor-ordinal-addition-well-defined. Next: cofinal product cardinality.

### `lem-cofinal-aleph-product-cardinality` — accept

Checked the two explicit injections and published cardinal/cofinality/Schroder–Bernstein clauses. Split the increasing enumeration of B into countably many infinite fibres using binary valuation on positive integers; the unique nonzero tagged coordinate recovers each f(i). research/phase-2-catchup-24-step3b-g.md The (m_i+1)-st entry of an increasing natural-number sequence exceeds m_i, so f(i)+1 is below the permitted strictly larger aleph and nonzero. Distinct functions are separated in a fibre. The forward map enumerates B into a sequence below aleph_omega; Schroder–Bernstein gives equality. This is a full local injection proof, not an inference from factor cardinalities or a source assertion. ZFC explicit; unchanged. Examined IDs: lem-cardinal-arithmetic-basic-laws, thm-cofinality-basics, thm-regularity-of-the-alephs, def-axiom-of-choice, thm-schroder-bernstein. Next: Rudin size/Dowker conclusion.

### `thm-rudin-dowker-space-and-cardinality` — accept

Checked current shrinking criterion, normality and obstruction suppliers, plus explicit size injections. The ordinal-product convention makes omega1*(alpha+1) injective with final block cofinality omega1 and cardinality below aleph_n for n>=2. research/phase-2-catchup-24-step3b-g.md The upper injection from each aleph_n+1 into aleph_omega and increasing enumeration of B gives the sequence-space upper bound. The lower map lands in the uniform cofinality-omega1 part of XR; the coordinate order type has size max(aleph1,|alpha+1|)<aleph_n by cardinal absorption, so its ordinal value is below the initial ordinal aleph_n. The two bounds match the preceding product lemma. Hart Chapter6 and Kojman–Shelah Theorem2 supply context; the actual proofs are the examined local suppliers. ZFC explicit, unchanged. Examined IDs: thm-rudin-box-space-is-collectionwise-normal, thm-rudin-tail-neighborhood-obstruction, thm-countable-paracompactness-shrinking-criterion, lem-cardinal-arithmetic-basic-laws, lem-cofinal-aleph-product-cardinality, thm-regularity-of-the-alephs, def-axiom-of-choice, def-ordinal-multiplication, lem-ordinal-product-as-an-order-type, cor-cardinal-absorption, thm-schroder-bernstein. Next: scale subspace definition.

### `def-kojman-shelah-scale-subspace` — accept

Checked exact subspace definition against Kojman–Shelah Definition 7 p6 and current normalized-scale/Rudin contracts. The nonempty-class issue is explicitly preserved rather than assuming all scale terms have bounded coordinate cofinality. research/phase-2-catchup-24-step3b-g.md URL https://arxiv.org/pdf/math/9512202. The set is defined by Separation inside XR and uses its subspace topology. Eventual equality with two different scale indices is impossible by strictness, but no existence for every class is included. ZFC explicit, unchanged. Examined IDs: def-rudin-ordinal-box-space, lem-normalizing-a-scale-at-existing-least-upper-bounds. Next: subspace tail-supremum lemma.

### `lem-kojman-shelah-tail-supremum-closure` — escalate

The statement omits 1<=m and strictness, while the proof requires uncountable aleph_m and strictly increasing associated indices. Complete Kojman–Shelah Claim 8 (arxiv.org/pdf/math/9512202 p6) explicitly assumes 0<m<=k and strict pointwise increase. With m=0 a strictly increasing omega tail has coordinate supremum of countable cofinality, so cannot be eventually equal to an XR point. Owner must resolve the exact intended quantified scope and preserve required uncountable clause; no narrowing edit made. research/phase-2-catchup-24-step3b-g.md Read current item and both supplier contracts plus complete source Claim8. The source-backed clause 1<=m<=k with strict pointwise increase follows by unique increasing scale indices, the examined tail-supremum lemma and finitely many top-coordinate fills; that clause is mathematically understood. The displayed contract has neither qualifier. The zero case cannot be inferred away from the notation aleph_m. No retry, reassignment or claim deletion; owner decides wording and scope synchronization. Consumers will be assessed for their actual uncountable/strict use, without treating the broader statement as proved. Examined IDs: def-kojman-shelah-scale-subspace, lem-scale-tail-suprema-have-prescribed-cofinality. Next: closedness with its exact m>=1 use.

### `lem-kojman-shelah-subspace-is-closed` — accept

Read complete Kojman–Shelah Claims 9–14 pp7–8 and checked the local proof including removal of all lower cofinality strata and finite pattern before recursion. Only the strict 1<=m<=k clause of tail closure is used; this follows directly from the accepted scale-tail lemma, not the escalated m=0 assertion. research/phase-2-catchup-24-step3b-g.md URL https://arxiv.org/pdf/math/9512202. Mixed infinite equality/complement gives a separating box using eventual trichotomy. Countably many finite/cofinite pattern-avoiding bounds have supremum below t, forcing a recurring pattern. For a finite pattern, least infinitely occurring cofinality level m is >=1. Beyond the finitely many lower levels and the pattern, fewer than aleph_m earlier values have supremum below each t(n), so the strict recursion is valid. Its supremum agrees with t on infinitely many level-m coordinates and is eventually a scale term by the accepted scale-tail lemma; finite resetting to t preserves XR and eventual class, making it <=t. Equality-set trichotomy now forces cofinite equality. Supplier escalation concerns only omitted general qualifiers; the precise used clause has the complete checked derivation above. Owner changes to that dependency will invalidate this receipt automatically. Unchanged, ZFC. Examined IDs: def-kojman-shelah-scale-subspace, lem-kojman-shelah-tail-supremum-closure, lem-rudin-box-space-basic-neighborhoods-and-p-space, def-axiom-of-choice, lem-scale-tail-suprema-have-prescribed-cofinality, thm-cofinality-basics, thm-regularity-of-the-alephs. Next: cofinality/size.

### `lem-kojman-shelah-subspace-is-cofinal-and-has-successor-size` — accept

Checked complete local omega1 construction and two size bounds. Its actual tail-supremum supplier is the accepted scale-tail lemma at m=k=1, since the intermediate g_xi need not lie in X. No use of the escalated unrestricted closure claim or source assertion that every equivalence class is nonempty. research/phase-2-catchup-24-step3b-g.md Read source Claims3–4 and Definition7 at https://arxiv.org/pdf/math/9512202; the cardinality assertion there is supplemented by this local proof. Each xi<omega1 has countably many earlier representatives, so t_xi lies below every aleph_n. Finite max modification keeps eventual class; the strict coordinate omega1 supremum has cofinality omega1 and lies below aleph_n for n>=2, hence belongs to XR and equals f_delta eventually. This gives a point of X above each b. A <lambda-sized X would have bounded scale indices and contradict that cofinality. Each finite-modification class has <=mu elements, giving the matching upper bound. All implicit suppliers recorded; unchanged, ZFC. Examined IDs: def-kojman-shelah-scale-subspace, lem-kojman-shelah-tail-supremum-closure, thm-cofinality-basics, def-axiom-of-choice, thm-regularity-of-the-alephs, lem-cardinal-arithmetic-basic-laws, cor-cardinal-absorption, lem-scale-tail-suprema-have-prescribed-cofinality, lem-normalizing-a-scale-at-existing-least-upper-bounds. Next: weight/character.

### `thm-kojman-shelah-space-weight-and-character` — accept

Checked all four full local invariant proofs and published raw cardinal invariant definitions/minima. Source final paragraph p10 only states the invariants; acceptance rests on explicit diagonal local bases, top-coordinate lower bounds, and scale-index density argument. research/phase-2-catchup-24-step3b-g.md URL https://arxiv.org/pdf/math/9512202. Finite cofinality strata allow one common ordinal index per stratum, bounding each local base by a finite product <mu. Top-coordinate finite modifications remain in X; for <aleph_n many neighborhoods, delta+omega1 stays below aleph_n and belongs to all of them, contradicting the base property. The raw supremum over unbounded n in B is mu. Union of local bases gives weight <=lambda. Any smaller dense family has bounded scale indices and misses the nonempty box above a later scale function; one chosen point per nonempty basis member proves weight >=lambda. This does not infer weight from size. ZFC explicit, unchanged. Examined IDs: def-kojman-shelah-scale-subspace, lem-kojman-shelah-subspace-is-cofinal-and-has-successor-size, lem-rudin-box-space-basic-neighborhoods-and-p-space, def-weight-density-and-character, lem-weight-is-well-defined, lem-character-is-well-defined, def-axiom-of-choice, thm-cofinality-basics, thm-regularity-of-the-alephs, lem-cardinal-arithmetic-basic-laws, cor-cardinal-absorption, def-ordinal-addition. Next: Kojman–Shelah Dowker conclusion and Balogh machinery.

### `thm-kojman-shelah-zfc-dowker-space` — repaired

Completed the strategy’s explicit unresolved closed-heredity obligation with its indexed discrete-family proof, and expanded the ambient open-extension/tail argument. All claims unchanged; direct topological verification from accepted local suppliers. Plan strategy synchronization remains owner scope. research/phase-2-catchup-24-step3b-g.md A closed subspace’s indexed discrete closed family is ambient discrete: lift relative neighborhoods on X and use its open complement elsewhere. Restrict disjoint ambient neighborhoods. For shrinking, W_k=V_k union (XR minus X) contains the ambient slice, and its tail meets X by pointwise cofinality. No false heredity of non-paracompactness is assumed. Source Kojman–Shelah Claims9/15 and Theorem3 is consistent with this alternative use of the independently proved Rudin initial-slice obstruction. Examined IDs: lem-kojman-shelah-subspace-is-closed, lem-kojman-shelah-subspace-is-cofinal-and-has-successor-size, thm-rudin-box-space-is-collectionwise-normal, thm-rudin-tail-neighborhood-obstruction, thm-countable-paracompactness-shrinking-criterion, def-axiom-of-choice. Local repair complete, no further mathematical recheck required; mechanical checks pending, shared plan strategy sync escalated to owner. Next: Balogh restriction data.

### `def-balogh-finite-restriction-data` — accept

Read full Hart Chapter 5 section 2 pp31–34 and checked the typed local restriction construction, model containment and trace-injectivity obligations, plus published countable union proof. research/phase-2-catchup-24-step3b-g.md Source /tmp/g-source-hart.txt PDF34–37/printed31–34; this review uses the recorded Hart alternative and does not certify a new retrieval-attempt count for the Balogh original. Rank closure and regular theta put enumerations and finite-set witnesses in V_theta without asserting ZFC there. Countable M in N implies M subset N via an internal enumeration. Distinct c,c' in N have a differing coordinate in N, proving trace injectivity exactly on C intersect N. Thus q,r have the stated finite types and trace membership detects C intersect M. Root triples range over finite subsets of trace-family B, correcting the source type typo. I_T may be empty and K choices are auxiliary, not extra tuple coordinates. ZFC explicit; unchanged. Examined IDs: thm-downward-lowenheim-skolem-with-parameters, thm-membership-rank-and-hierarchy-levels, prop-cumulative-hierarchy-transitivity-and-growth, def-axiom-of-choice, thm-cofinality-basics, thm-regularity-of-the-alephs, thm-transfinite-recursion, lem-cardinal-arithmetic-basic-laws, cor-cardinal-absorption, thm-countable-union-of-countable. Next: restriction enumeration.

### `lem-balogh-countable-restriction-enumeration` — accept

Checked complete local counting, support-label assignment and disjoint-petal scheduling proof expanding Hart Exercise16 printed p33. The binary block diagonal proves cf(continuum)>omega without assuming regular continuum or CH. research/phase-2-catchup-24-step3b-g.md Source /tmp/g-source-hart.txt, with full local solutions to its counting/selection steps. Countable powers of continuum code as binary arrays, using the examined natural-pair bijection. All tuple coordinates have <=continuum possibilities. The diagonal real avoids the nth small family on its nth infinite block, so countable supports are bounded. At stage xi<kappa fewer than kappa labels are occupied; the tail above the support still has kappa members even if kappa is singular, giving a fresh label. Finite-stage scheduling meets each root triple infinitely often; a previously used trace excludes at most one petal in that root's disjoint family. Empty petals and I_T=empty handled. ZFC explicit; unchanged. Examined IDs: def-balogh-finite-restriction-data, def-axiom-of-choice, thm-cofinality-basics, thm-regularity-of-the-alephs, thm-transfinite-recursion, lem-cardinal-arithmetic-basic-laws, cor-cardinal-absorption, thm-countable-union-of-countable, thm-n-cross-n-countable. Next: universal coloring map.

### `lem-balogh-combinatorial-map` — accept

Checked every clause of the complete local proof against Hart Lemma2.1 and Exercises11–17 printed pp32–34, including the otherwise implicit passage from an uncountable maximal root family to infinitely many witnesses in N minus M. research/phase-2-catchup-24-step3b-g.md Source /tmp/g-source-hart.txt. D is fixed from the tuple enumeration before f,g,h are tested; disjoint petals make the second clause unique. E0 and e0 are finite M-sets despite beta outside M. A countable maximal K would be contained in M and permit adjoining beta, contradiction. If a petal meets M, its element uniquely defines its K-index, placing that index in M; hence K minus M has exactly the desired M-root. Elementarity in N produces infinitely many such indices, and trace injectivity transfers their root condition to I_beta. The chosen preassigned K_beta need not be that family. Final alpha lies below beta and h(alpha) subset N excludes beta. Both c-in-M and c-outside-M cases give the equation. No external reflection theorem used. ZFC explicit, unchanged. Examined IDs: def-balogh-finite-restriction-data, lem-balogh-countable-restriction-enumeration, thm-downward-lowenheim-skolem-with-parameters, thm-membership-rank-and-hierarchy-levels, prop-cumulative-hierarchy-transitivity-and-growth, def-axiom-of-choice, thm-cofinality-basics, thm-regularity-of-the-alephs, thm-transfinite-recursion, lem-cardinal-arithmetic-basic-laws, cor-cardinal-absorption, thm-countable-union-of-countable. Next: topology definition.

### `def-balogh-continuum-topology` — accept

Checked Hart construction printed p31 and all local definitions/identities, allowing empty finite-intersection family members. Empty/full sets, arbitrary unions and finite intersections satisfy the displayed openness rule, so it defines a topology. research/phase-2-catchup-24-step3b-g.md Source /tmp/g-source-hart.txt. At a point of a union use a witnessing member; at a point of two open sets use the intersection identity for their finite s,a data. At level0 no condition is imposed. All U_n are open since they contain every lower level. The characteristic-function equality forces opposite-side disjointness independently of the map's combinatorial property. Explicitly not a proper filter assertion, so isolated points from empty F cause no contradiction. ZFC ambient, unchanged. Examined IDs: lem-balogh-combinatorial-map, def-axiom-of-choice, thm-cofinality-basics, thm-regularity-of-the-alephs, thm-transfinite-recursion, lem-cardinal-arithmetic-basic-laws, cor-cardinal-absorption, thm-countable-union-of-countable. Next: normality and non-paracompactness.

### `lem-balogh-neighborhood-basis` — accept

Checked complete finite-height induction, T1 complements and both closure-trace directions; Hart Chapter5 section2 Exercises1–2,8 printed31–32, /tmp/g-source-hart.txt. U_-1=empty is supplied by the definition. research/phase-2-catchup-24-step3b-g.md Recursive unions are open, remain below the top level and refine each open neighborhood by AC. Empty F is harmless. Removing one point uses the finite-exclusion identity only at its successor level. The explicit avoiding neighborhood proves the reverse Phi implication even at n=0. Unchanged, AC explicit. Examined IDs: def-balogh-continuum-topology, def-axiom-of-choice, thm-cofinality-basics, thm-regularity-of-the-alephs, thm-transfinite-recursion, lem-cardinal-arithmetic-basic-laws, cor-cardinal-absorption, thm-countable-union-of-countable. Next: hereditary normality.

### `lem-balogh-hereditary-normality` — accept

Checked all five steps expanding Hart Chapter5 section2 Exercises3–6 printed31–32, /tmp/g-source-hart.txt; same-level partition, corrected lower-level extension and finite closure removal prove separated-set separation. research/phase-2-catchup-24-step3b-g.md The extension needs O to contain the entire level-m complement of C, which Step4 explicitly ensures for C=closure H. This is stronger than merely covering K on that level. It yields an open neighborhood of all K disjoint from V_n, hence closure V_n misses K. Comparing the two summand indices proves final disjointness. Closed subsets of an arbitrary subspace are ambient separated, so hereditary normality follows. Source typos are corrected in the current contract. Unchanged, AC explicit. Examined IDs: def-balogh-continuum-topology, lem-balogh-neighborhood-basis, def-axiom-of-choice, thm-cofinality-basics, thm-regularity-of-the-alephs, thm-transfinite-recursion, lem-cardinal-arithmetic-basic-laws, cor-cardinal-absorption, thm-countable-union-of-countable. Next: countable shrinking obstruction.

### `lem-balogh-failure-of-countable-shrinking` — accept

Checked full finite peeling and locally finite refinement argument expanding Hart Chapter5 section2 Exercises7–10 printed32, /tmp/g-source-hart.txt. Psi=A intersect Phi(A) avoids the source unstated extensivity assumption. research/phase-2-catchup-24-step3b-g.md The map forces directed beta-in-F_alpha inside one separated piece, already a contradiction. Descending Psi iterates remain in the closed C at successive heights and become empty at n+1; their differences are separated with simultaneous AC witnesses. Flattening finite pieces would sigma-separate kappa. For a locally finite refinement, complement of the union of members indexed above n is closed, contained in U_n, and eventually contains each point; this proves the necessary implication without a normality premise or forward reference. Unchanged, AC explicit. Examined IDs: lem-balogh-combinatorial-map, def-balogh-continuum-topology, lem-balogh-neighborhood-basis, thm-countable-paracompactness-shrinking-criterion, def-axiom-of-choice, thm-cofinality-basics, thm-regularity-of-the-alephs, thm-transfinite-recursion, lem-cardinal-arithmetic-basic-laws, cor-cardinal-absorption, thm-countable-union-of-countable. Next: remaining Dowker contracts.

### `thm-balogh-continuum-sized-zfc-dowker-space` — accept

The accepted basis, hereditary normality and shrinking obstruction give the asserted space; cardinal absorption gives exactly continuum and the earlier Dowker equivalence gives product nonnormality with its normal Hausdorff hypotheses met. research/phase-2-catchup-24-step3b-g.md Hart Chapter5 section2 printed31–34, /tmp/g-source-hart.txt, supplies the complete construction already examined. Countably many relatively discrete layers cover X, and alpha maps to (alpha,0) for the lower size bound. No CH or regular continuum is used. Unchanged, AC explicit. Examined IDs: lem-balogh-hereditary-normality, lem-balogh-failure-of-countable-shrinking, thm-dowker-product-characterization, def-axiom-of-choice, thm-cofinality-basics, thm-regularity-of-the-alephs, thm-transfinite-recursion, lem-cardinal-arithmetic-basic-laws, cor-cardinal-absorption, thm-countable-union-of-countable, lem-balogh-neighborhood-basis. Next: conditional small Dowker vocabulary.

### `def-small-dowker-luzin-stick-and-ad-principles` — repaired

Made the intended omega_1 and E conventions explicit, replacing inherited continuum notation. Checked exact RST Definitions1.1,2.10,4.1 and Fact4.2, plus published Baire/diamond/clubsuit definitions. research/phase-2-catchup-24-step3b-g.md Source https://www.assafrinot.com/files/paper54.pdf, /tmp/g-source-rst.txt pp1,5,11; the short p.assafrinot.com redirect failed, author PDF located by web search. No existence claim. Cross-row boundedness is distinct from finite intersection; strong diagonal implies finite guessing by padding a list and removing an initial segment. Classical Luzin is kept distinct from the cylinder property. Only a local naming repair, no claim deletion; owner must synchronize shared strategy prose/plan. Examined IDs: def-baire-sequence-space, def-diamond-on-omega-one, def-ostaszewski-club-principle, def-axiom-of-choice, thm-cofinality-basics, thm-regularity-of-the-alephs, thm-transfinite-recursion, lem-cardinal-arithmetic-basic-laws, cor-cardinal-absorption, thm-countable-union-of-countable, thm-countable-subsets-of-omega-one-are-bounded, thm-omega-one-is-the-least-uncountable-ordinal. Next: coloring definition.

### `def-small-dowker-tight-strongly-unbounded-coloring` — accept

Checked RST Definition2.1 pp2–3, /tmp/g-source-rst.txt, including the reverse-inclusion order and uncountable=cofinal on omega_1. Delta is defined only for distinct sequences and the majorant strictly increases. research/phase-2-catchup-24-step3b-g.md T may be any set of finite strings; no tree closure is used or needed. The full finite-string set ensures T_c is nonempty. These are properties of a given map, not existence assertions. Source https://www.assafrinot.com/files/paper54.pdf. Unchanged, ZFC. Examined IDs: def-small-dowker-luzin-stick-and-ad-principles, def-axiom-of-choice, thm-cofinality-basics, thm-regularity-of-the-alephs, thm-transfinite-recursion, lem-cardinal-arithmetic-basic-laws, cor-cardinal-absorption, thm-countable-union-of-countable, thm-countable-subsets-of-omega-one-are-bounded, thm-omega-one-is-the-least-uncountable-ordinal. Next: CH/Luzin implication.

### `lem-small-dowker-ch-gives-luzin-set` — accept

Checked complete cylinder fusion and CH recursion, not just RST Fact2.11 p5. Read the published Baire/irrational homeomorphism and its continued-fraction proof; nowhere density transfers from the dense irrational subspace by relative closure. research/phase-2-catchup-24-step3b-g.md Every countable stage avoids all preceding singleton/nowhere-dense sets by an infinite increasing string fusion; a fixed well-order supplies recursion choices. Countably many cylinders code closed sets; CH permits the omega_1 enumeration. A fixed meager set meets only countably many selected points by flattening its closed nowhere-dense covering. An uncountable subset therefore has closure with interior, exactly the cylinder property. Removing rationals and pulling back the homeomorphism proves the real-line branch. Source https://www.assafrinot.com/files/paper54.pdf, p5, with full local proof. Unchanged, AC explicit. Examined IDs: def-small-dowker-luzin-stick-and-ad-principles, cor-baire-sequence-space-is-homeomorphic-to-the-irrationals, def-axiom-of-choice, thm-cofinality-basics, thm-regularity-of-the-alephs, thm-transfinite-recursion, lem-cardinal-arithmetic-basic-laws, cor-cardinal-absorption, thm-countable-union-of-countable, thm-countable-subsets-of-omega-one-are-bounded, thm-omega-one-is-the-least-uncountable-ordinal, thm-simple-continued-fractions-parametrise-the-irrationals. Next: Luzin coloring.

### `lem-small-dowker-luzin-gives-tight-coloring` — accept

Read full RST Lemma2.12 and Claims2.12.1–2 p5; checked the countable bad-cylinder removal and comparable-string family proof. research/phase-2-catchup-24-step3b-g.md Injective enumeration preserves uncountability of column sets. Every next digit occurs above the chosen prefix. Removing all countable B_t leaves uncountably many indices; a surviving extension of s ensures B_s uncountable, while every string comparable with s lies in T. Thus the fixed countable subfamily of T_s in T_c is downward cofinal. Source https://www.assafrinot.com/files/paper54.pdf, /tmp/g-source-rst.txt p5. Unchanged, AC explicit. Examined IDs: def-small-dowker-luzin-stick-and-ad-principles, def-small-dowker-tight-strongly-unbounded-coloring, def-axiom-of-choice, thm-cofinality-basics, thm-regularity-of-the-alephs, thm-transfinite-recursion, lem-cardinal-arithmetic-basic-laws, cor-cardinal-absorption, thm-countable-union-of-countable, thm-countable-subsets-of-omega-one-are-bounded, thm-omega-one-is-the-least-uncountable-ordinal. Next: coloring to AD guessing.

### `lem-small-dowker-coloring-gives-ad-guessing` — accept

Read full RST Theorem3.3 pp6–10 and checked all local expansions: distinct columns, stationary splitting, finite ordinal walks, pressing down via diagonal clubs, explicit limit-point clubs and replacement of every nongood row. research/phase-2-catchup-24-step3b-g.md Source https://www.assafrinot.com/files/paper54.pdf, /tmp/g-source-rst.txt. The walk concatenation above a finite threshold makes both coherence and bounded sublevels explicit; no LHR nonreflection theorem is imported. In the guessing contradiction, gamma is a limit point of every relevant uncountable target-cylinder, replacing the source elementary-model use. Fixing a prefix of length nu forces the unbounded coordinate n>=nu; choosing xi above the bounded sublevel set makes gamma the first candidate of h. Strict column distinctness justifies every Delta. Nongood-row replacements use successor schedules and diverging Delta; any cofinal intersection with a good upper row contradicts its bounded sublevels. Successful guesses have all rows cofinal, so replacement loses none. Published diagonal-club proof and descending-sequence forward clause read; AC explicit throughout, unchanged. Examined IDs: def-small-dowker-luzin-stick-and-ad-principles, def-small-dowker-tight-strongly-unbounded-coloring, thm-small-intersections-of-clubs, thm-diagonal-intersection-of-clubs, def-axiom-of-choice, thm-cofinality-basics, thm-regularity-of-the-alephs, thm-transfinite-recursion, lem-cardinal-arithmetic-basic-laws, cor-cardinal-absorption, thm-countable-union-of-countable, thm-countable-subsets-of-omega-one-are-bounded, thm-omega-one-is-the-least-uncountable-ordinal, prop-well-foundedness-and-descending-sequences. Next: stick implication.

### `lem-small-dowker-stick-gives-ad-guessing` — accept

Read full RST Fact4.2/Theorem4.3 pp11–12 and CGW section3 Claim3.2 pp15–16; verified the complete local double-stick sublemma, recursive finite intersections, closure club and diagonal target step. research/phase-2-catchup-24-step3b-g.md /tmp/g-source-rst.txt and /tmp/g-source-cgw.txt; RST URL https://www.assafrinot.com/files/paper54.pdf. The double-stick sequence is fixed before targets; hypothetical finite almost-coverage forces infinitely many distinct selected zeta indices into one finite set, because pairwise finite intersections exclude any outsider. At a good upper row all but finitely many selections avoid any fixed earlier A_beta. Closure points include entire countable selected x sets and their indices, so every target is met cofinally in every row on a club. Diagonal club then gives all nu<alpha simultaneously. AC explicit, unchanged. Examined IDs: def-small-dowker-luzin-stick-and-ad-principles, thm-small-intersections-of-clubs, thm-diagonal-intersection-of-clubs, def-axiom-of-choice, thm-cofinality-basics, thm-regularity-of-the-alephs, thm-transfinite-recursion, lem-cardinal-arithmetic-basic-laws, cor-cardinal-absorption, thm-countable-union-of-countable, thm-countable-subsets-of-omega-one-are-bounded, thm-omega-one-is-the-least-uncountable-ordinal. Next: ladder topology.

### `def-small-dowker-ladder-topology` — accept

Checked RST Appendix construction and ClaimA.1.1(1),(3),(4), p13; openness/closedness are direct bounded-tail tests and two-target guessing survives lower-level restriction. research/phase-2-catchup-24-step3b-g.md /tmp/g-source-rst.txt, https://www.assafrinot.com/files/paper54.pdf. Empty ladders impose no condition. At active limit indices finite unions of bounded omitted portions remain bounded, proving the topology. A finite-level pigeonhole selects uncountable target traces; each higher stationary level guesses both and hence is active. Weak tests are correctly not declared open. Unchanged, AC explicit. Examined IDs: def-small-dowker-luzin-stick-and-ad-principles, def-axiom-of-choice, thm-cofinality-basics, thm-regularity-of-the-alephs, thm-transfinite-recursion, lem-cardinal-arithmetic-basic-laws, cor-cardinal-absorption, thm-countable-union-of-countable, thm-countable-subsets-of-omega-one-are-bounded, thm-omega-one-is-the-least-uncountable-ordinal. Next: ladder normality.

### `lem-small-dowker-ladder-normality` — repaired

Made the already proved disjoint-tail coloring cover omega colors, matching the named almost-P0 property. Read RS Proposition2.8 and complete Lemmas3.4–3.8 pp5,17–18; checked every closed-expansion obligation. research/phase-2-catchup-24-step3b-g.md /tmp/g-source-rs.txt, https://arxiv.org/abs/2104.09150. Finite predecessor removal gives disjoint cofinal tails irrespective of the color set; assigning prescribed natural values and zero elsewhere proves full almost-P0 and preserves binary values for separation. An inactive successor bounds the countable closed side and is clopen. A new cofinal closedness violation must lie below that successor, where the zero tail-color contradicts new points. The iterated closed expansions contain tails at all their active points; their nested union pair is disjoint and open. The tiny local generality repair changes no claim, and needs owner synchronization with shared strategy text; no additional mathematical recheck required. Examined IDs: def-small-dowker-ladder-topology, def-axiom-of-choice, thm-cofinality-basics, thm-regularity-of-the-alephs, thm-transfinite-recursion, lem-cardinal-arithmetic-basic-laws, cor-cardinal-absorption, thm-countable-union-of-countable, thm-countable-subsets-of-omega-one-are-bounded, thm-omega-one-is-the-least-uncountable-ordinal. Next: shrinking obstruction.

### `lem-small-dowker-ladder-shrinking-obstruction` — accept

Checked complete RS Lemma3.1 p16 and Corollary3.9 p19 against local normality, no-two-large-disjoint-closed-sets clause and the earlier shrinking/product criteria. research/phase-2-catchup-24-step3b-g.md Each D_n includes a stationary next level and is closed. Complements of arbitrary open expansions are countable closed sets; their countable union misses a point of omega_1. Normal Hausdorffness meets the exact hypotheses of the product characterization. Underlying set literally omega_1. /tmp/g-source-rs.txt, https://arxiv.org/abs/2104.09150. Unchanged, AC explicit. Examined IDs: def-small-dowker-ladder-topology, lem-small-dowker-ladder-normality, thm-countable-paracompactness-shrinking-criterion, thm-dowker-product-characterization, def-axiom-of-choice, thm-cofinality-basics, thm-regularity-of-the-alephs, thm-transfinite-recursion, lem-cardinal-arithmetic-basic-laws, cor-cardinal-absorption, thm-countable-union-of-countable, thm-countable-subsets-of-omega-one-are-bounded, thm-omega-one-is-the-least-uncountable-ordinal. Next: conditional summary theorem and dated status.

### `thm-small-dowker-conditional-aleph-one-constructions` — accept

Checked each separate branch and actual intermediate suppliers; read published diamond-to-clubsuit, limit-point club and Cantor proofs. The local stationary partition does not assume a coloring exists. research/phase-2-catchup-24-step3b-g.md CH and classical/cylinder Luzin follow the accepted coloring/AD/ladder chain; a given tight coloring starts at the accepted coloring-to-AD lemma. Stick supplies strong diagonal AD. Clubsuit supplies a stick sequence by containment guessing. Diamond supplies clubsuit, and independently injects all subsets of omega into omega_1 by their least exact guesses above omega, so Cantor yields CH. Balogh plus CH is an additional valid route. All assumptions stay separate, and no converse or bare club-guessing assertion is imported. RST pp1–2,6–13 and RS section3 (complete relevant arguments read), URLs in preceding entries. Unchanged, AC explicit. Examined IDs: def-small-dowker-luzin-stick-and-ad-principles, lem-small-dowker-ch-gives-luzin-set, lem-small-dowker-luzin-gives-tight-coloring, lem-small-dowker-coloring-gives-ad-guessing, lem-small-dowker-stick-gives-ad-guessing, def-small-dowker-ladder-topology, lem-small-dowker-ladder-normality, lem-small-dowker-ladder-shrinking-obstruction, thm-balogh-continuum-sized-zfc-dowker-space, thm-small-intersections-of-clubs, def-axiom-of-choice, thm-cofinality-basics, thm-regularity-of-the-alephs, thm-transfinite-recursion, lem-cardinal-arithmetic-basic-laws, cor-cardinal-absorption, thm-countable-union-of-countable, thm-countable-subsets-of-omega-one-are-bounded, thm-omega-one-is-the-least-uncountable-ordinal, prop-diamond-implies-ostaszewski-club, thm-cantor-powerset, lem-limit-points-of-unbounded-sets. Next: dated status.

### `rem-aleph-one-dowker-status-dated-audit` — accept

Read arXiv:2504.15398v1 complete relevant Section9 opening and dated header; it explicitly reports the omega_1 Dowker problem open on 2025-04-21. This is historical evidence, not a mathematical nonexistence claim. research/phase-2-catchup-24-step3b-g.md PDF fetch returned cache miss; recovered exact version HTML https://arxiv.org/html/2504.15398v1, section9, and confirmed the original date. Current searches located the 2024 conditional RST paper and no verified resolution; no exhaustive absence certification is inferred. Retain the historical 2025-04-21 boundary and recorded 2026-09-09 search date. Examined dependency IDs: none (literature report, no proof supplier). Unchanged. Next: PCF companion examples.

### `ex-countable-shrinking-on-a-discrete-space` — accept

Every subset of a discrete space is clopen; U_n=F_n has required inclusions, closures and empty intersection without selections. research/phase-2-catchup-24-step3b-g.md Elementary verification from the current definition, no unfamiliar theorem. ZF preserved, unchanged. The first recording attempt was rejected by an unrelated temporary Tor Step3a gate; the global gate cleared before this receipt. No prior item decision was overwritten. Examined IDs: def-countable-paracompactness-and-dowker-space. Next: Rudin slice.

### `ex-rudin-initial-top-slice` — repaired

Explicit AC and finite k conventions in the proof contract; declared successor regularity and the F_k definition supplier. Coordinate cofinalities have common bound aleph_(max(k,1)+1). research/phase-2-catchup-24-step3b-g.md h is top on the required finite coordinates and omega_1 elsewhere, so belongs to XR and F_k, and fails F_l for l>k in B; k<2 works too. Source context Hart Chapter6 printed35–38, /tmp/g-source-hart.txt; direct coordinate proof. An initial edit put the already ambient AC convention in the statement and invalidated Step3a; restored the exact commissioned statement and placed conventions in strategy instead. No mathematical claim changed or scope receipt overwritten. Shared plan dependency/strategy synchronization remains owner scope. Examined IDs: def-rudin-ordinal-box-space, def-axiom-of-choice, thm-regularity-of-the-alephs, lem-rudin-neighborhoods-of-initial-top-slices-contain-tails. Next: scale example.

### `ex-kojman-shelah-scale-used-at-a-tail-supremum` — repaired

Explicitly propagated AC and the actual strict omega_1 tail-supremum supplier. The cofinality lemma gives the construction and membership; no m=0 clause of the escalated closure item is used. research/phase-2-catchup-24-step3b-g.md Source Kojman–Shelah Claim4 p5, https://arxiv.org/pdf/math/9512202, and the complete accepted local cofinality construction. Every coordinate supremum stays below aleph_n and has cofinality omega_1; finite initial fills preserve membership. All prescribed product bounds are handled, claims retained. Owner changes to the escalated dependency invalidate this receipt; no retry of that item. Shared plan sync required. Examined IDs: lem-kojman-shelah-tail-supremum-closure, lem-kojman-shelah-subspace-is-cofinal-and-has-successor-size, def-axiom-of-choice, lem-scale-tail-suprema-have-prescribed-cofinality. Next: product false statement.

### `fs-normality-is-preserved-by-product-with-the-unit-interval` — repaired

Propagated AC in the counterexample contract and dependency. Accepted Rudin normality/non-paracompactness meets every hypothesis of the accepted product characterization. research/phase-2-catchup-24-step3b-g.md Counterexample is the actual constructed Rudin space, not a recorded existence assertion. Source context Hart Chapter6 printed35–38, /tmp/g-source-hart.txt. No claim narrowed. Shared strategy/dependency plan sync remains owner scope. Examined IDs: thm-rudin-dowker-space-and-cardinality, thm-dowker-product-characterization, def-axiom-of-choice. Next: batch16, after rereading its current Step3a and owned scope/prose/coverage.

### `def-cantor-sequence-space-for-descriptive-set-theory` — accept

Read Marker Definition1.7 p4 and current published Baire definition; binary cylinder traces give exactly the subspace topology and the zero sequence proves nonemptiness in ZF. research/phase-2-catchup-24-step3b-g.md Source https://homepages.math.uic.edu/~marker/math512/dst.pdf (browser retrieval succeeded; local network download failed DNS). No product-choice or compactness assertion. Unchanged, ZF. Examined IDs: def-baire-sequence-space. Next: general trees.

### `def-trees-and-bodies-on-discrete-alphabets` — accept

Checked set formation via finite function sets and Replacement/Union, and Marker Lemma1.14/Definition1.15 p5. Proper extension is equivalent to immediate extension by prefix closure; arbitrary-alphabet branch existence is not asserted. research/phase-2-catchup-24-step3b-g.md Empty tree and empty alphabet are allowed with empty bodies; no finite-branching assumption. Published function-set definition read. Source https://homepages.math.uic.edu/~marker/math512/dst.pdf. Unchanged, ZF. Examined IDs: def-the-set-of-functions-from-one-set-to-another. Next: closed tree bodies.

### `lem-closed-subsets-of-baire-space-are-tree-bodies` — accept

Read complete Marker Lemma1.14 argument and pruning paragraph p5; checked both cylinder-complement implications and pointwise witness pruning with no countable choices. research/phase-2-catchup-24-step3b-g.md The tree of prefixes of F has body equal to closure F; closedness gives equality. A prefix witness in F supplies its next coordinate, independently at each node. Empty F yields empty tree. Source https://homepages.math.uic.edu/~marker/math512/dst.pdf. Unchanged, ZF. Examined IDs: def-baire-sequence-space, def-trees-and-bodies-on-discrete-alphabets. Next: analytic convention.

### `def-analytic-and-coanalytic-by-closed-projection` — accept

Checked Polish and product definitions and Marker Definition4.1/Lemma4.2(iii)/Definition4.4 p34. Closed projection is explicitly adopted as convention, without assuming image equivalences or selecting metrics/dense sets. research/phase-2-catchup-24-step3b-g.md Empty projection is allowed, avoiding the nonempty-image qualification. Coanalytic means relative complement in X. Source https://homepages.math.uic.edu/~marker/math512/dst.pdf. Unchanged, ZF convention. Examined IDs: def-polish-space, def-baire-sequence-space, def-product-topology. Next: synchronous trees.

### `def-synchronous-trees-and-projection-bodies` — accept

Checked Marker Definition5.1 p43: equal-length pairs and simultaneous restrictions identify a tree on the pair alphabet; body and existential first projection are well-defined sets. research/phase-2-catchup-24-step3b-g.md Source https://homepages.math.uic.edu/~marker/math512/dst.pdf. Empty trees permitted; no witness selection, rank or branch existence theorem. Unchanged, ZF. Examined IDs: def-trees-and-bodies-on-discrete-alphabets, def-baire-sequence-space. Next: analytic tree projections.

### `lem-analytic-subsets-of-baire-space-have-tree-projections` — accept

Checked complete equal-length cylinder argument for Marker Exercise5.2 p43 and section-tree identity. Refining two finite lengths to their maximum proves the pair version of the accepted closed-body lemma in ZF. research/phase-2-catchup-24-step3b-g.md A closed pair set yields its synchronous prefix tree; failure of a finite prefix gives an open complementary rectangle. Projection agrees with the adopted convention. T_x is prefix closed and a branch through it is exactly a second-coordinate witness. Source https://homepages.math.uic.edu/~marker/math512/dst.pdf. Unchanged, no choice. Initial recording was blocked by temporary unrelated Tor Step3a invalidation, now cleared. Examined IDs: def-synchronous-trees-and-projection-bodies, def-analytic-and-coanalytic-by-closed-projection, lem-closed-subsets-of-baire-space-are-tree-bodies. Next: game definitions.

### Mechanical checkpoint, 2026-09-09 15:41 UTC

After the PCF repairs: group dependency/policy checks passed at 215 items; coverage passed at 363 harvested rows across 5 pages. Run manifest integrity passed (48/48 pages); canonical plan validation exit0 with 644 future inventories still empty, which is not an item-level certification for those pages. Group source-fetch-check resolved 31/31 sources (30 actual stamps, one documented alternative), source-backing passed for 188 authored results using the existing run liveness artifact. Extcheck exit0 retains published unproved-dependency warnings (log /tmp/phase-2-catchup-24-step3b-g-extcheck.log). Scope refresh/check:57 declines,0 pending/errors. Cross-batch refresh --require-reviewed passed; the attempted unsupported check subcommand only printed usage before the successful supported refresh. No fresh URL sweep yet. Item/final gates still incomplete; batch16 audit currently through analytic tree projections, index5. Shared strategy/dependency synchronization and the preserved two escalations remain owner obligations.

### `def-gale-stewart-games-on-pruned-trees` — accept

Checked full-position legality, parity and cylinder basis in ZF against BLM opening definitions, lines28–53, https://arxiv.org/html/2401.09659v1. No branch or strategy existence for arbitrary alphabets is inferred. research/phase-2-catchup-24-step3b-g.md The empty-prefix cylinder covers even an empty body; compatible cylinders intersect in the longer cylinder, and fixed-depth complements prove clopenness. Unchanged. Examined IDs: def-trees-and-bodies-on-discrete-alphabets, def-topological-space. Next: AD definition.

### `def-axiom-of-determinacy-for-natural-number-games` — accept

AD is exactly the universal closure of the accepted natural-number game convention over P(N^N); no choice consequence or consistency assertion enters its definition. BLM opening definitions, https://arxiv.org/html/2401.09659v1. research/phase-2-catchup-24-step3b-g.md Unchanged; ZF conditional-axiom branch retained. Examined IDs: def-gale-stewart-games-on-pruned-trees, def-baire-sequence-space. Next: terminal taboos.

### `def-game-trees-with-terminal-taboos` — accept

Read complete BLM taboo definitions lines55–73 and fixed-history definition lines48–53, https://arxiv.org/html/2401.09659v1. Terminal labels partition only maximal finite nodes; strategies are legal at nonterminal own-parity positions; complexity is relative to the closed infinite-play subspace. research/phase-2-catchup-24-step3b-g.md Cylinder intersections and singleton terminal cylinders prove the claimed topology and closedness directly in ZF, including a terminal root. Fixed histories retain forced earlier moves and original parity. Unchanged. Examined IDs: def-trees-and-bodies-on-discrete-alphabets, def-gale-stewart-games-on-pruned-trees. Next: Borel hierarchy.

### `def-countable-borel-hierarchy` — accept

Read Marker Definition2.4 printed15/PDF14 and current first-uncountable-ordinal and full recursion suppliers. Positive-rank complement/countable-union recursion is a total set-valued ZF rule; intersecting containing sigma-algebras defines B(X). No metric-dependent monotonicity or countable-choice exhaustion is asserted. research/phase-2-catchup-24-step3b-g.md Source https://homepages.math.uic.edu/~marker/math512/dst.pdf, Definition2.4; exact page is PDF index14 (printed15), unlike the contract locator. Definition itself unchanged and choice-free. Examined IDs: def-topological-space, def-first-uncountable-ordinal, thm-transfinite-recursion. Next: hierarchy operations.

### `lem-metric-borel-hierarchy-monotonicity-and-operations` — accept

Read full Marker Lemmas2.5(i),2.6 proofs PDF14–15, https://homepages.math.uic.edu/~marker/math512/dst.pdf. Verified closed metric exhaustions (including empty complement), simultaneous rank inclusions and operation induction. AC is explicitly used to select countably many representations; fixed diagonal flattening needs no additional choice. research/phase-2-catchup-24-step3b-g.md Lower-Pi pair intersections are raised to their finite maximum below the consumer rank; complement duality establishes the other operations. No separability assumption used. Unchanged. Examined IDs: def-countable-borel-hierarchy, def-metric-space, thm-transfinite-induction, def-axiom-of-choice, thm-n-cross-n-countable. Next: evaluation codes.

### `def-well-founded-borel-evaluation-codes` — repaired

Declared the implicit well-founded-relation definition after reading its minimal-member clause. Read Marker Definitions7.1–7.2 PDF61–62; local nodewise labels, nonempty root and empty union remove source notational ambiguities. No no-branch equivalence or code evaluation is assumed. research/phase-2-catchup-24-step3b-g.md Source https://homepages.math.uic.edu/~marker/math512/dst.pdf; the relation is immediate child before parent and is setlike because T is a set. All labels belong to a fixed set, so codes form a set in ZF. Only dependency declaration changed; owner shared-plan sync required, no additional mathematical recheck. Examined IDs: def-trees-and-bodies-on-discrete-alphabets, def-countable-borel-hierarchy, def-well-founded-setlike-relations. Next: code evaluation.

### `lem-well-founded-borel-code-evaluation` — accept

Checked complete local solution of Marker Exercise7.3, PDF62, against full published recursion/induction proofs and their cone/attempt suppliers. Totalizing arbitrary predecessor values makes recursion applicable. Root Borelness and unique evaluation are ZF; choosing a sequence of codes is explicitly AC. research/phase-2-catchup-24-step3b-g.md Open U uses exactly indices n with U_n contained in U, without choice. Tagged grafting preserves well-foundedness by a minimal node in any nonempty constituent intersection; otherwise the new root is minimal. Thus root values form a containing sigma-algebra. Source https://homepages.math.uic.edu/~marker/math512/dst.pdf. Unchanged. Examined IDs: def-well-founded-borel-evaluation-codes, thm-recursion-on-well-founded-setlike-relations, thm-induction-on-well-founded-relations, def-axiom-of-choice, lem-compatible-well-founded-recursion-attempts, lem-finite-predecessor-closure-is-a-set, def-well-founded-setlike-relations. Next: sequence-space coding.

### `lem-cantor-and-baire-sequence-coding` — accept

Checked metric completeness by unique eventual coordinates, explicit dense enumeration, binary no-finite-subcover recursion, pairing homeomorphisms and zero-block coding. Read Marker Definition1.7,Exercise1.11,Lemma1.16 PDF3–5; local coding differs explicitly from his alternating-run exercise. research/phase-2-catchup-24-step3b-g.md Source https://homepages.math.uic.edu/~marker/math512/dst.pdf. Compactness chooses the least bad binary child, so no AC/Tychonoff is used. Any finite set of coordinates is controlled by one sufficiently long prefix in both pairing directions. Gap decoding at each finite list of ones proves inverse continuity, and eventually-zero exceptional points have a unique finite last-one prefix code. Unchanged, ZF. Examined IDs: def-cantor-sequence-space-for-descriptive-set-theory, def-polish-space, def-metric-space, def-compact-space, def-continuous-map-top, thm-transfinite-recursion, thm-n-cross-n-countable, def-product-topology. Next: read item14.

### `lem-countable-borel-hierarchy-exhaustion-and-pullbacks` — accept

Checked full Marker Lemma2.6(iv) and Exercise2.8(a), PDF15, plus local sigma-algebra exhaustion filling Lemma2.5(ii). Read exact published countable ordinal boundedness and subspace trace clauses. Sigma_alpha to Pi_{alpha+1} and the converse-type constant unions work on arbitrary spaces, without metric monotonicity. research/phase-2-catchup-24-step3b-g.md Countably many least ranks have a countable strict upper bound after adding two; union constituents can therefore be promoted to lower Pi ranks. Pullback commutes with unions and relative complements in ZF. Trace lifting selects lower-rank ambient representatives under explicit AC. Source https://homepages.math.uic.edu/~marker/math512/dst.pdf. Unchanged. Examined IDs: def-countable-borel-hierarchy, thm-countable-subsets-of-omega-one-are-bounded, def-axiom-of-choice, thm-transfinite-induction, def-continuous-map-top, def-subspace-topology-top. Next: universal hierarchy.

### `thm-universal-borel-sets-and-strict-hierarchy` — accept

Read complete Marker Lemma2.37 and Corollary2.38 PDF22–23, https://homepages.math.uic.edu/~marker/math512/dst.pdf. Checked universal parameter recursion, arbitrary-late cofinal rank slots, diagonal contradiction and trace transfer. The local injection of constituents into suitable slots repairs the source abbreviation without changing this sound contract. research/phase-2-catchup-24-step3b-g.md AC selects countable cofinal sequences and universal parameters from set-sized candidate families; empty slots have parameters by prior universality. Empty X has the repeated empty basis. Cantor diagonal is continuous by cylinders, and both strictness directions follow by complement. Transfer uses same-rank trace lifting and pullback, without invoking a future perfect-set result. Unchanged. Examined IDs: lem-metric-borel-hierarchy-monotonicity-and-operations, lem-countable-borel-hierarchy-exhaustion-and-pullbacks, lem-cantor-and-baire-sequence-coding, def-product-topology, thm-transfinite-recursion, def-axiom-of-choice. Next: terminal reachability.

### `lem-terminal-reachability-and-residual-game-positions` — accept

Checked full local restriction/pasting proof of the reachability child clauses and simultaneous strategy choices, with BLM Lemma1 and Martin draft p64 residual comparison read completely. Compatible opposing strategies produce one maximal play by omega recursion, proving disjointness. research/phase-2-catchup-24-step3b-g.md Sources https://arxiv.org/html/2401.09659v1, Lemma1; https://www.math.ucla.edu/~dam/booketc/D.A._Martin,_Determinacy_of_Infinitely_Long_Games.pdf, p64. Source downward-closure error is not used. All strategy families lie in fixed function sets, so AC applies; arbitrary inconsistent positions are totalized. Fixed histories retain parity. Unchanged. Examined IDs: def-game-trees-with-terminal-taboos, def-axiom-of-choice, thm-transfinite-recursion. Next: residual reduction.

### `lem-taboo-games-reduce-to-pruned-residual-games` — accept

Verified prefix-closed residual S, both child tests, first-opponent-exit switching and legal totalization. Complete BLM Lemma1 and Martin p64 comparison read; the local prefix-avoidance definition avoids BLM false deletion claim. research/phase-2-catchup-24-step3b-g.md At a residual P-node no child is P-reachability winning and some child avoids the other winning region; hence an immediate residual child exists. An opponent exit cannot favor that opponent by the some-child clause, so the fixed P strategy wins after switching. Staying in S yields an infinite original play. Inclusion pulls cylinders back to cylinders, preserving ranks by the already examined direct induction. AC propagated. Sources https://arxiv.org/html/2401.09659v1 and Martin draft URL above. Unchanged. Examined IDs: lem-terminal-reachability-and-residual-game-positions, def-game-trees-with-terminal-taboos, def-axiom-of-choice, lem-countable-borel-hierarchy-exhaustion-and-pullbacks. Next: item18.

### `thm-gale-stewart-open-determinacy` — accept

Read full Martin Theorem1.2.4 and Lemma1.2.5 pp15–16; checked local reach-U pasting and avoidance proof, both starting parities, complement case and residual taboo reduction. No uniform finite bound on reaching U is required. research/phase-2-catchup-24-step3b-g.md At positions already in U the visit is immediate; outside W the child clauses follow by selecting and pasting complete winning strategies. A branch in the open payoff has a prefix in U, so avoidance wins the complement. AC and general-alphabet legal defaults are explicit. Source https://www.math.ucla.edu/~dam/booketc/D.A._Martin,_Determinacy_of_Infinitely_Long_Games.pdf. Unchanged. Examined IDs: def-gale-stewart-games-on-pruned-trees, lem-taboo-games-reduce-to-pruned-residual-games, def-axiom-of-choice, lem-terminal-reachability-and-residual-game-positions. Next: coverings.

### `def-game-covering-and-k-covering` — accept

Read full BLM covering definition and Martin pp65–66 including existential triple variant. Length/prefix preservation gives a branch map, same-depth cylinder preimages give continuity, and finite projections are explicitly allowed nonterminal targets. research/phase-2-catchup-24-step3b-g.md Source https://arxiv.org/html/2401.09659v1, before Lemmas2,4; Martin draft URL above. Strategy locality uses input/output positions strictly below n, while node agreement includes depth k; these conventions match finite restrictions. Existential lifts are not supplied coherent choices. Unchanged, ZF. Examined IDs: def-game-trees-with-terminal-taboos. Next: transfer.

### `lem-game-covering-transfers-winning-strategies` — accept

Checked complete BLM Lemma2 argument with the missing terminal-label inference supplied locally: a winning lift cannot be a losing short lift, so it projects exactly to the given maximal play. Terminal target reflection and the partition force identical labels. research/phase-2-catchup-24-step3b-g.md Infinite lifts transfer membership or nonmembership by preimage definition; finite x is terminal by maximality. This does not reverse reflection at a nonterminal target. One existential witness for an arbitrary x needs no AC. Source https://arxiv.org/html/2401.09659v1, Lemma2. Unchanged, ZF. Examined IDs: def-game-covering-and-k-covering. Next: composition.

### `lem-game-covering-composition-and-continuity` — accept

Verified all three two-stage lift cases, taboo reflection, locality and minimum-depth identity; read Martin composition definition/Lemma2.1.5 p68 and BLM composition paragraph. The local proof supplies the omitted argument. research/phase-2-catchup-24-step3b-g.md If only the first lift shortens, its finite terminal label reflects to the exact second lift; if the second shortens its own exception suffices. Cylinder continuity and complement preimages preserve clopenness. Finite successive existential choices are ZF. Sources https://arxiv.org/html/2401.09659v1 and Martin draft URL above. Unchanged. Examined IDs: def-game-covering-and-k-covering. Next: inverse limits.

### `cor-unraveling-covers-give-determinacy` — accept

Clopen lifted payoff satisfies the accepted open determinacy theorem with taboos; its winner descends by the accepted covering-transfer lemma. Read BLM Corollary3, https://arxiv.org/html/2401.09659v1. All hypotheses met and AC propagated. research/phase-2-catchup-24-step3b-g.md No recorded theorem is a supplier. Unchanged. Examined IDs: lem-game-covering-transfers-winning-strategies, thm-gale-stewart-open-determinacy, def-axiom-of-choice. Next: stabilizing inverse limit.

### `lem-stabilizing-game-coverings-have-inverse-limits` — accept

Read complete BLM Lemma4 and Martin Lemma2.1.6 pp68–70. Checked the local successive-lift construction, which supplies coherence absent from independently chosen existential lifts. Finite-depth stabilization covers nodes, labels, legal strategy restrictions and maximality. research/phase-2-catchup-24-step3b-g.md A short lift below a common depth would be terminal there, so its image could not properly prefix the prior maximal play. Successive lifts therefore stabilize every finite prefix. Once any lift is finite, lengths decrease only finitely often; exact lifts reflect its label and any further shortening gives the strategy-player taboo. An eventually finite limit is terminal by stabilized labels. If no shortening occurs, finite or infinite limit projects exactly to the original play. All choices use the fixed union of stage play spaces under AC. Sources https://arxiv.org/html/2401.09659v1 and Martin draft URL above. Unchanged. Examined IDs: def-game-covering-and-k-covering, lem-game-covering-composition-and-continuity, def-axiom-of-choice, thm-transfinite-recursion. Next: closed payoff cover.

### `lem-closed-payoffs-admit-unraveling-covers` — accept

Read complete BLM Lemma7 lines190–246, https://arxiv.org/html/2401.09659v1. Checked every original-terminal case, first Z stopping rule, accept/challenge payoff test, retrospective lift and total strategy locality. Fixed selectors independent of the input strategy supply the required locality. research/phase-2-catchup-24-step3b-g.md Along an infinite accept play, failure of A would have a least strict prefix beyond p^a disjoint from A; it is nonterminal and lies in Z, contradiction. A challenge fixes a prefix r disjoint from A. For I the earlier forced history makes retrospective challenges consistent; for II the Y-response cannot challenge an element of Y, and every r outside Y has a selector witness. At r in the losing region, the stopped accept lift is the required losing short lift, regardless of later defaults. All original finite plays reflect labels, including those before k and at p^a. Simulations query at most the current depth; detecting the first inconsistent own move uses earlier depths. The set of selectors over all p,a is set-sized under AC. Unchanged. Examined IDs: def-game-covering-and-k-covering, def-axiom-of-choice. Next: Borel induction and witness bounding.

### `thm-borel-payoffs-admit-unraveling-covers` — accept

Read complete BLM Theorem5 and published minimum-rank Collection proof. Verified induction quantified over every set alphabet, dependent witness bounding, increasing agreement depths, preserved earlier clopenness and the final open-payoff cover. research/phase-2-catchup-24-step3b-g.md Source https://arxiv.org/html/2401.09659v1, Theorem5. Minimum-rank witness sets are collected over the current set of finite construction states; iterating their union yields a fixed set on which AC and omega recursion select a coherent chain. No global choice is inferred. At the limit each B_n pullback factors through its clopen stage, so the union is open, then a second cover makes it clopen. Exhaustion covers all Borel payoffs even for arbitrary-alphabet bodies. Unchanged, AC propagated. Examined IDs: lem-countable-borel-hierarchy-exhaustion-and-pullbacks, lem-closed-payoffs-admit-unraveling-covers, lem-stabilizing-game-coverings-have-inverse-limits, lem-game-covering-composition-and-continuity, thm-transfinite-induction, def-axiom-of-choice, prop-minimum-rank-selection-and-collection, thm-transfinite-recursion, thm-membership-rank-and-hierarchy-levels. Next: determinacy conclusion.

### `thm-borel-games-are-determined` — accept

Borel unraveling at depth zero and the accepted determinacy corollary meet exactly the taboo-tree hypotheses. BLM Corollary6, https://arxiv.org/html/2401.09659v1, follows from the now-examined complete construction. research/phase-2-catchup-24-step3b-g.md AC is explicitly propagated through the potentially uncountable covering alphabets; no AD consumer may borrow it. Unchanged. Examined IDs: thm-borel-payoffs-admit-unraveling-covers, cor-unraveling-covers-give-determinacy, def-axiom-of-choice. Next: natural-number strategy cardinality.

### `lem-natural-number-game-strategies-have-continuum-many-plays` — accept

Checked the explicit finite-stratum enumeration of each parity domain and the mutual inverse opponent-sequence/consistent-play recursion. These give actual bijections in ZF, supplying the cardinal premise for Marker Exercise6.8, PDF54. research/phase-2-catchup-24-step3b-g.md Every bounded length-plus-sum stratum is finite, and each parity domain is infinite; its ordered enumeration is onto. Every table is legal on the full natural tree. Recursion fills alternating moves, and extracting opponent moves is its inverse. Source https://homepages.math.uic.edu/~marker/math512/dst.pdf. Unchanged, no choice. Examined IDs: def-gale-stewart-games-on-pruned-trees, lem-cantor-and-baire-sequence-coding, thm-schroder-bernstein, thm-transfinite-recursion. Next: undetermined game.

### `thm-choice-produces-an-undetermined-natural-number-game` — accept

Checked complete local diagonalization solving Marker Exercise6.8 and exact published initial-cardinal/well-ordering proofs. At each alpha below kappa the two-per-stage forbidden family has cardinal below kappa by finite absorption, even if kappa is singular. research/phase-2-catchup-24-step3b-g.md The second choice also excludes x_alpha; subsequent stages exclude both, so every x remains outside the final y-payoff. Each strategy has its prescribed losing compatible play. Least eligible points make the fixed well-order recursion functional, with malformed-history defaults. AC is explicit; the AD contradiction uses its actual universal definition. Source https://homepages.math.uic.edu/~marker/math512/dst.pdf, PDF54. Unchanged. Examined IDs: lem-natural-number-game-strategies-have-continuum-many-plays, thm-well-ordering-theorem, lem-cardinality-of-a-well-orderable-set, cor-cardinal-absorption, thm-transfinite-recursion, def-axiom-of-choice, def-axiom-of-determinacy-for-natural-number-games. Next: AD choice for reals.

### `thm-ad-implies-countable-choice-for-baire-space` — accept

Read full Lietz Proposition10.14 printed101/PDF100. The ignored-move simulation puts the game literally on the full natural-number tree; refuting any one I strategy instantiates just one A_n witness. A fixed winning II strategy then computes all a_n by recursion and Replacement. research/phase-2-catchup-24-step3b-g.md Source https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf. This proves only the stated real-set countable choice; no AC or unrestricted DC enters. Unchanged. Examined IDs: def-axiom-of-determinacy-for-natural-number-games, thm-transfinite-recursion. Next: item30.

### `lem-perfect-set-game-strategy-dichotomy` — accept

Read full Lietz Claims10.11–10.12 pp100–101 and Marker Propositions6.12–6.13. Checked fixed-history barriers, least-block recursion, injective outcome continuity and compact image argument in ZF. Empty blocks are necessary for barrier reconstruction and are explicitly legal. research/phase-2-catchup-24-step3b-g.md Each round adds a bit, so finite output prefixes depend on finitely many input bits. Compact images of domain cylinders are closed by finite metric separation; their complements give inverse continuity, preserving no isolated points. A fixed legal full history rejects at most one x, recursively reconstructed using queries from that same history; least history codes inject A into N. The all-natural simulation gives immediate loss to illegal II bits. Sources https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf and Marker PDF above. Unchanged. Examined IDs: lem-cantor-and-baire-sequence-coding, def-gale-stewart-games-on-pruned-trees, thm-transfinite-recursion. Next: Polish parametrization.

### `lem-polish-closed-products-and-baire-parametrization` — accept

Read complete Marker Lemmas1.5–1.6 and Theorem1.17 PDF2–5; checked the full local metric product, closed-subspace and shrinking-ball parametrization arguments. Nonempty qualifications and AC point selection are explicit. research/phase-2-catchup-24-step3b-g.md Dense-center rational balls with closure contained in the parent cover it by the triangle inequality. Child diameters tend to zero; a limit belongs to each parent via the next closed child, so all branches define points. Least containing child codes each x. Empty closed subspaces/products are Polish separately; no empty-target surjection is claimed. Source https://homepages.math.uic.edu/~marker/math512/dst.pdf. Unchanged. Examined IDs: def-polish-space, lem-cantor-and-baire-sequence-coding, def-product-topology, def-axiom-of-choice, thm-transfinite-recursion. Next: analytic operations.

### `lem-analytic-countable-operations-and-borel-inclusion` — accept

Read full Marker Lemma4.5(i), PDF34, and checked the local closed-witness union/intersection construction independently of the later image equivalence. Discrete first-coordinate tagging makes the union witness closed; coordinate coding makes the intersection witness closed. research/phase-2-catchup-24-step3b-g.md AC chooses closed representations and simultaneous intersection witnesses. Pullbacks are closed under the continuous product map. Closed sets have constant Baire witnesses, opens use metric closed exhaustions, and sets analytic on both sides form a sigma-algebra. Source https://homepages.math.uic.edu/~marker/math512/dst.pdf. Unchanged, AC explicit. Examined IDs: def-analytic-and-coanalytic-by-closed-projection, lem-cantor-and-baire-sequence-coding, lem-polish-closed-products-and-baire-parametrization, lem-metric-borel-hierarchy-monotonicity-and-operations, def-continuous-map-top, def-axiom-of-choice. Next: normal-form equivalences.

### `thm-analytic-closed-projection-and-continuous-image-equivalence` — accept

Read complete Marker Lemmas4.2 and4.5(ii–iii), PDF33–34. Checked all local normal-form implications, the closed continuous graph argument and the small-diameter Borel graph construction, avoiding source graph typos and a circular topology-refinement theorem. research/phase-2-catchup-24-step3b-g.md A nonempty closed witness is Polish and parametrized by Baire; conversely the continuous graph is closed. This gives continuous-image closure before using it for Borel subsets and projections. The Borel graph rectangles force distance between f(y) and x below every 2^{-n}, hence equality; their Borelness follows from projection pullbacks. Intersect graph with analytic cylinders, then project, for both image and inverse-image claims. Complement gives coanalytic inverse images. Empty cases are preserved. Source https://homepages.math.uic.edu/~marker/math512/dst.pdf. Unchanged, AC explicit. Examined IDs: lem-polish-closed-products-and-baire-parametrization, lem-analytic-countable-operations-and-borel-inclusion, def-analytic-and-coanalytic-by-closed-projection, def-countable-borel-hierarchy, def-axiom-of-choice, lem-countable-borel-hierarchy-exhaustion-and-pullbacks. Next: item34.

### `thm-disjoint-analytic-sets-have-borel-separators` — accept

Read complete Marker Theorem4.13 PDF36. Checked countable separator assembly union_n intersection_m, least inseparable child-pair recursion and separation by continuity at the two independent limit branches. research/phase-2-catchup-24-step3b-g.md Each A-child lies in its entire separator intersection, while each B-child misses every such intersection. The resulting Borel union separates the parents, justifying the contrapositive step. Disjoint f(a),g(b) have disjoint metric neighborhoods; common-depth cylinders contradict inseparability. Empty sets handled separately. Source https://homepages.math.uic.edu/~marker/math512/dst.pdf. Unchanged, AC explicit. Examined IDs: thm-analytic-closed-projection-and-continuous-image-equivalence, def-countable-borel-hierarchy, def-axiom-of-choice, thm-transfinite-recursion. Next: analytic/coanalytic criterion.

### `cor-borel-iff-analytic-and-coanalytic` — accept

Read Marker Corollary4.14 PDF36. Analytic A and its analytic relative complement meet separation hypotheses; any separating set equals A. The forward direction is exactly the accepted Borel-inclusion lemma. research/phase-2-catchup-24-step3b-g.md Source https://homepages.math.uic.edu/~marker/math512/dst.pdf. Unchanged, AC propagated. Examined IDs: thm-disjoint-analytic-sets-have-borel-separators, lem-analytic-countable-operations-and-borel-inclusion, def-axiom-of-choice. Next: Souslin operation.

### `def-souslin-operation-on-set-schemes` — accept

Checked set formation and finite-prefix normalization against Marker Definition4.19 and Theorem4.22 opening, PDF38–39. For each fixed branch, taking all prefixes of its prefixes repeats exactly the same family of sets. research/phase-2-catchup-24-step3b-g.md Empty-prefix inclusion is explicit, and normalization does not remove it. Source https://homepages.math.uic.edu/~marker/math512/dst.pdf. Unchanged, ZF. Examined IDs: def-baire-sequence-space, def-trees-and-bodies-on-discrete-alphabets. Next: closed schemes.

### `thm-analytic-sets-are-souslin-operations-on-closed-sets` — accept

Checked complete local proof of Marker Exercise4.20 PDF38. The closed witness complement is open at a failed prefix; conversely closures of continuous cylinder images shrink around the fixed image point by continuity. research/phase-2-catchup-24-step3b-g.md The root is closure(A); it imposes no unwanted constraint on any branch image. Each branch intersection is the singleton image, so the Souslin union is exactly A. Empty A uses all-empty sets. Closures ensure actual closedness and preserve nesting. Source https://homepages.math.uic.edu/~marker/math512/dst.pdf. Unchanged, AC inherited only through parametrization. Examined IDs: def-souslin-operation-on-set-schemes, thm-analytic-closed-projection-and-continuous-image-equivalence, def-axiom-of-choice. Next: regularity infrastructure.

### `lem-uncountable-analytic-splitting` — accept

Read complete Marker Lemma4.16 PDF37; verified the local condensation-point proof instead of its countable/uncountable misprint. The union of countable basis traces is countable under explicit AC, leaving two points every neighborhood of which has uncountable trace. research/phase-2-catchup-24-step3b-g.md Choose radii below a third of the two-point distance and below the requested diameter bound, then refine to basis neighborhoods. No analyticity is required here. Source https://homepages.math.uic.edu/~marker/math512/dst.pdf. Unchanged. Examined IDs: def-polish-space, def-axiom-of-choice, thm-countable-union-of-countable, thm-n-cross-n-countable. Next: analytic Cantor copies.

### `thm-uncountable-analytic-sets-contain-cantor-copies` — accept

Read complete Marker Theorem4.17 PDF37–38. Checked uncountable-image cylinder selection, strict length growth, sibling target separation and the full compact-embedding argument completing the source final remark. research/phase-2-catchup-24-step3b-g.md Each open preimage piece is a countable union of longer cylinders; countable image on each would contradict its uncountable image. Sibling images are separated, yielding injectivity of the composed Cantor map. Closed subsets of compact C remain compact directly by adjoining their open complement to covers; compact images are closed in metric X, giving inverse continuity and no isolated points. Borel inclusion and X itself supply the two stated special cases. Source https://homepages.math.uic.edu/~marker/math512/dst.pdf. Unchanged, AC explicit. Examined IDs: thm-analytic-closed-projection-and-continuous-image-equivalence, lem-uncountable-analytic-splitting, lem-cantor-and-baire-sequence-coding, def-axiom-of-choice, thm-countable-union-of-countable, thm-transfinite-recursion, lem-analytic-countable-operations-and-borel-inclusion. Next: strict hierarchy corollary.

### `cor-uncountable-polish-borel-hierarchy-is-strict` — accept

Checked Marker Corollary2.38 with the now-accepted Cantor-copy supplier. Same-rank trace strictness supplies Pi_alpha outside Sigma_alpha, and metric inclusion puts that witness into every higher Sigma_beta; complements give the Pi case. research/phase-2-catchup-24-step3b-g.md X is analytic via its trivial closed witness and is assumed uncountable Polish. Source https://homepages.math.uic.edu/~marker/math512/dst.pdf, PDF23. Unchanged, AC propagated. Examined IDs: thm-universal-borel-sets-and-strict-hierarchy, thm-uncountable-analytic-sets-contain-cantor-copies, def-axiom-of-choice, lem-metric-borel-hierarchy-monotonicity-and-operations. Next: tree-rank convention.

### `def-descriptive-tree-rank` — repaired

Declared and explicitly propagated AC for the existing Polish closed-subspace supplier; rank recursion itself is choice-free. Read Marker Definitions5.5,5.7 and the full published ordinal-rank definition. Local empty-tree rank zero is explicit and no minus-one formula is imported. research/phase-2-catchup-24-step3b-g.md Finite prefix-closure violations form basic open complements, proving Tr closed; immediate-child predecessors form a set. Source https://homepages.math.uic.edu/~marker/math512/dst.pdf, PDF43. Claim unchanged; assumption/dependency strategy sync in shared plan remains owner scope. No additional mathematical recheck. Examined IDs: def-trees-and-bodies-on-discrete-alphabets, lem-cantor-and-baire-sequence-coding, lem-polish-closed-products-and-baire-parametrization, def-rank-of-a-well-founded-relation, def-axiom-of-choice. Next: rank stages.

### `lem-countable-tree-ranks-and-rank-monotonicity` — accept

Read full Marker Lemma5.8, Exercise5.9(b), and forward Lemma5.11 proof PDF43–44. Checked minimal-child branch recursion, countable rank induction, proper-extension rank comparison and the decreasing-ordinal construction realizing every countable rank. research/phase-2-catchup-24-step3b-g.md A countable alphabet is coded into N; a nonminimal subset then supplies least encoded children. Padded missing-child ranks and actual successor ranks have countable supremum under AC. A decreasing-sequence node ending beta has rank beta; the root rank is alpha, including root-only alpha=0. Source https://homepages.math.uic.edu/~marker/math512/dst.pdf. Unchanged. Examined IDs: def-descriptive-tree-rank, thm-countable-subsets-of-omega-one-are-bounded, thm-induction-on-well-founded-relations, thm-transfinite-induction, def-axiom-of-choice, thm-transfinite-recursion. Next: analytic boundedness.

### `thm-analytic-families-of-well-founded-trees-have-bounded-rank` — accept

Read Marker Corollary5.16 PDF45 and its complete source proof; checked the alternative local synchronous-tree proof without assuming WF non-analyticity. Continuity of each membership coordinate forbids a branch through the combined tree. research/phase-2-catchup-24-step3b-g.md For each fixed m choose n large enough to enter the membership neighborhood, then one witness extending a|n; prefix closure forces b|m into f(a). Each nonempty f(a) embeds by t -> (a|length(t),t), preserving strict extensions and root. The bound is r(S)+1; empty trees have rank0, and an all-empty image yields empty S with the same valid bound. Pair-alphabet coding is explicit and countable. Source https://homepages.math.uic.edu/~marker/math512/dst.pdf. Unchanged, AC propagated. Examined IDs: def-descriptive-tree-rank, lem-countable-tree-ranks-and-rank-monotonicity, thm-analytic-closed-projection-and-continuous-image-equivalence, def-axiom-of-choice. Next: non-Borel trees.

### `thm-ill-founded-trees-are-analytic-non-borel` — accept

Closed branch relation has a finite-coordinate open complement; countable rank realization contradicts analytic boundedness for WF, then Borel complementation and inclusion finish. No circular completeness claim. Marker Example 4.7 and local boundedness proof; research/phase-2-catchup-24-step3b-g.md Unchanged, ZFC. IF means actual ill-foundedness, equivalent to a branch by the preceding least-child argument. Tree rank gamma contradicts the strict bound gamma, including the root conventions. Examined IDs: def-descriptive-tree-rank, lem-countable-tree-ranks-and-rank-monotonicity, thm-analytic-families-of-well-founded-trees-have-bounded-rank, lem-analytic-countable-operations-and-borel-inclusion, def-axiom-of-choice. Next: Baire property definition.

### `def-property-of-baire-for-subsets` — accept

Read the full published meagre/comeagre definition and Marker Definition 2.55, PDF25. Symmetric difference with an ambient open set is the correct ZF convention; closing each nowhere-dense witness gives dense-open complements without asserting their intersection is dense in arbitrary X. research/phase-2-catchup-24-step3b-g.md Source https://homepages.math.uic.edu/~marker/math512/dst.pdf. Unchanged. Examined IDs: def-nowhere-dense-meagre-and-residual-subsets. Next: BP sigma-algebra.

### `lem-baire-property-sigma-algebra-and-borel-regularity` — accept

Read complete Marker Lemmas 2.51/2.56 and Corollary 2.57 plus Exercises 2.48–2.58, PDF25–26. Checked the supplied local proofs in arbitrary topological spaces: closure(U) minus U is nowhere dense, lower envelope U minus M is G_delta and upper envelope closure(U) union M is F_sigma. AC selects countable error witnesses, flattened by pairing. research/phase-2-catchup-24-step3b-g.md Source https://homepages.math.uic.edu/~marker/math512/dst.pdf. Both envelopes differ from A only inside M plus the boundary; no metric assumption is hidden. Unchanged. Examined IDs: def-property-of-baire-for-subsets, def-countable-borel-hierarchy, def-axiom-of-choice, thm-n-cross-n-countable, def-nowhere-dense-meagre-and-residual-subsets. Next: sequence injections.

### `lem-sequence-spaces-continuously-inject-into-the-real-line` — accept

Read the full published zero-based ternary-series proof, especially convergence 1.1 and first-difference injectivity 2.3. Geometric tail bound 3^(-n) proves continuity; composing the already checked zero-block injection proves the Baire-space conclusion in ZF. research/phase-2-catchup-24-step3b-g.md Local source items/thm-cantor-set-ternary-description.md; Marker coding context is not used as a substitute for this calculation. Unchanged. Examined IDs: lem-cantor-and-baire-sequence-coding, thm-cantor-set-ternary-description, def-continuous-map-top. Next: Souslin BP preservation.

### `thm-souslin-operation-preserves-the-baire-property` — accept

Read full Marker Lemma 4.21/Theorem 4.22/Corollary 4.23 PDF38–39. Checked non-Baire ambient spaces: a nonmeagre BP remainder would have nonmeagre open representative O, forcing A intersect O meagre, hence O subset U and disjoint from the remainder, a contradiction. Nested envelopes retain E_s and minimality; least-child recursion avoids all meagre defects. research/phase-2-catchup-24-step3b-g.md Source https://homepages.math.uic.edu/~marker/math512/dst.pdf. Empty-prefix constraints survive normalization. The countable family of defect sets is meagre by the preceding AC sigma-ideal proof. Unchanged, AC explicit. Examined IDs: lem-baire-property-sigma-algebra-and-borel-regularity, def-souslin-operation-on-set-schemes, thm-analytic-sets-are-souslin-operations-on-closed-sets, def-axiom-of-choice, thm-transfinite-recursion. Next: measure envelopes.

### `thm-souslin-operation-preserves-lebesgue-measurability` — accept

Read Marker Exercise 4.24/Theorem 4.25 PDF39–40 and complete published hull, outer-regularity, complete-measure, outer-measure and Borel-measurability arguments. Checked finite boxes H_j: both H_j and H_j intersect D have the same finite outer measure as E_j, so splitting gives null difference without infinity subtraction. Countable union envelopes and least-child scheme recursion finish by completeness. research/phase-2-catchup-24-step3b-g.md Source https://homepages.math.uic.edu/~marker/math512/dst.pdf; published dependency paths items/ID.md. The scheme union lies between its measurable root envelope and that envelope minus a null set. AC supplies all countable hull choices and inherited countable-choice assumptions. Unchanged. Examined IDs: def-souslin-operation-on-set-schemes, thm-analytic-sets-are-souslin-operations-on-closed-sets, cor-lebesgue-outer-measure-is-regular-with-borel-measurable-hulls, thm-lebesgue-measure-is-a-complete-measure, thm-borel-sets-are-lebesgue-measurable, def-caratheodory-measurable-set, def-axiom-of-choice, thm-lebesgue-outer-regularity-for-arbitrary-subsets, thm-caratheodory-outer-measure-theorem, thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume, thm-transfinite-recursion. Next: category-game coding.

### `def-banach-mazur-category-game` — accept

Read Hachtman–Palumbo Definition 7.7 and natural-number game coding, PDF22–23, and full published rational enumeration/density/nested-interval proofs. Strict prefix growth and nested closures give unique outcomes in every retained open. First-illegal-move loss and least legal extensions make restriction of winning coded strategies legal in ZF. research/phase-2-catchup-24-step3b-g.md Source https://homepages.math.uic.edu/~shac/determinacy/determinacy2015.pdf. Rational density supplies arbitrarily small rational intervals with closure in the preceding open; length bound tends to zero. Unchanged. Examined IDs: def-baire-sequence-space, def-cantor-sequence-space-for-descriptive-set-theory, def-gale-stewart-games-on-pruned-trees, thm-rationals-countable, lem-rat-embeds-dense, thm-nested-interval-property, thm-n-cross-n-countable, thm-recursion. Next: strategy/category equivalence.

### `lem-banach-mazur-game-category-characterization` — accept

Read all three category-game claims and open-subspace Proposition 7.1 in Hachtman–Palumbo PDF20,22–23. Response-open sets are dense even for real intervals by refinement inside each test intersection; their complements give an explicitly coded witness sequence. Least responding moves reconstruct any point outside those witnesses. Swapping players after I first moves shifts only the shrinking bound. research/phase-2-catchup-24-step3b-g.md Source https://homepages.math.uic.edu/~shac/determinacy/determinacy2015.pdf. Boundary of an open set has empty interior, so relative nowhere density transfers to the ambient space. Least nested refinements independently prove each nonempty basic open nonmeagre; no Baire theorem with hidden DC is used. Unchanged, ZF. Examined IDs: def-banach-mazur-category-game, def-nowhere-dense-meagre-and-residual-subsets, thm-recursion. Next: AD BP.

### `thm-ad-implies-baire-property` — accept

Read complete Hachtman–Palumbo local-to-global claim and Theorem 7.8 PDF22–23. Closed witness sequences have real codes via the fixed basis and pairing, so AD-derived countable choice for Baire reals supplies precisely the required countable witnesses. The residual game cannot be won by I because it would make a nonempty basic open meagre in itself; II supplies the remaining explicit witnesses. research/phase-2-catchup-24-step3b-g.md Source https://homepages.math.uic.edu/~shac/determinacy/determinacy2015.pdf. Includes rational-interval R case directly and Cantor/Baire cylinders. No AC-based BP sigma-algebra lemma enters this AD branch. Unchanged. Examined IDs: lem-banach-mazur-game-category-characterization, thm-ad-implies-countable-choice-for-baire-space, def-property-of-baire-for-subsets. Next: Bernstein pathology.

### `thm-choice-bernstein-set-pathology` — accept

Read full Ciesielski Theorems 6.3.6–6.3.8 pp102–103 and full published Bernstein existence, perfect-set cardinality, compact-subset countability and measure consequence proofs. The local rational binary interval construction gives unique branch limits and no isolated points, avoiding the source extra selection and Cantor–Bendixson appeal. AC covers the explicit published countable-choice hypotheses. research/phase-2-catchup-24-step3b-g.md Source https://community.wvu.edu/~kciesiel/ProfessionalStuff/Other/ElectronicReprints/B2IntSetThe.pdf, PDF108–109. Every stage excludes fewer than the continuum without assuming continuum regularity. Both sides are Bernstein; singleton coverings exclude countability, and BP failure excludes Borelness. Unchanged. Examined IDs: def-axiom-of-choice, thm-well-ordering-theorem, thm-bernstein-sets-exist-under-a-well-ordering-of-r, def-bernstein-set-on-r, cor-a-bernstein-set-is-not-lebesgue-measurable, thm-a-bernstein-set-has-inner-measure-zero-and-full-outer-measure-in-every-interval, lem-baire-property-sigma-algebra-and-borel-regularity, thm-nested-interval-property, lem-rat-embeds-dense, thm-rationals-countable, def-perfect-set-r, cor-archimedean-reciprocal, thm-recursion, lem-compact-subsets-of-a-bernstein-set-are-countable, thm-every-nonempty-perfect-subset-of-r-has-cardinality-continuum. Reconciliation note: items/def-perfect-set-r.md has an unrelated stale orientation sentence saying the Cantor set is not constructed anywhere; current thm-cantor-set-ternary-description disproves that editorial claim. Definition itself is sound; owner may reconcile this published prose debt. Next: Turing degrees.

### `thm-choice-hamel-basis-pathology` — accept

Read complete Ciesielski Proposition 7.3.1/Theorem 7.3.2/Corollary 7.3.3 p112 and full published coefficient-map, translation-invariance and box-measure proofs. Nonzero kernel vector gives dense rational multiples even with negative sign; rational fibers then meet every rectangle. Disjoint small rational translates of each bounded kernel slice force its measure zero, contradicting the countable coset cover of R. research/phase-2-catchup-24-step3b-g.md Source https://community.wvu.edu/~kciesiel/ProfessionalStuff/Other/ElectronicReprints/B2IntSetThe.pdf, PDF118. Finite bounded-slice measure justifies the Archimedean finite-translate contradiction; no Steinhaus theorem is imported. Closed singleton inverse image proves function nonmeasurability. Unchanged, AC explicit. Examined IDs: lem-hamel-basis-exists, def-axiom-of-choice, lem-rat-embeds-dense, thm-rationals-countable, thm-of-archimedean, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant, thm-lebesgue-measure-is-a-complete-measure, thm-lebesgue-measure-of-a-box-of-every-kind, def-measure, def-borel-and-lebesgue-measurable-function-on-rn, def-borel-sigma-algebra, def-linear-subspace, def-continuity-real. Next: dyadic measure interface (the remaining A items concern measure games, not Turing degrees).

### `lem-dyadic-coding-coin-measure-and-lebesgue-transfer` — accept

Checked full DC/countable-choice definitions and published continuity-of-measure proofs. DC on finite selections proves the exact countable choice required. Half-open dyadic partitions define injective b with Borel cylinder inverse images, giving an actual probability measure by pullback. Equal envelope bounds give Borel sandwiches with null difference; completeness transfers measurability. Continuous dyadic evaluation is inverse to b on its image, and compact restriction transfers Cantor copies in ZF. research/phase-2-catchup-24-step3b-g.md Source https://seminariomatematico.polito.it/rendiconti/61-4/393.pdf p393 supplies only the coin-measure convention; full construction is local. Endpoint t=0/1 sandwiches and binary-expansion ambiguity are handled explicitly. No AC or unrestricted product-measure supplier enters. Unchanged. Examined IDs: def-dependent-choice, def-countable-choice, lem-cantor-and-baire-sequence-coding, thm-lebesgue-measure-is-a-complete-measure, thm-borel-sets-are-lebesgue-measurable, thm-lebesgue-measure-of-a-box-of-every-kind, thm-continuity-from-above-for-measures, thm-continuity-from-below-for-measures, def-borel-sigma-algebra, def-measure, thm-recursion, cor-archimedean-reciprocal, thm-nested-interval-property, def-continuous-map-top, def-compact-space. Next: AD perfect-set transfer.

### `thm-ad-implies-perfect-set-property-for-sequence-spaces` — accept

Checked the accepted perfect-set game dichotomy and both transfer constructions. On Baire space the block-code inverse restricted to a compact Cantor copy is continuous. On R the dyadic evaluation uses only its ZF clause. If all unit-interval pieces are countable, their enumeration witnesses are real codes selected by AD-derived countable real choice, then paired into one actual enumeration. research/phase-2-catchup-24-step3b-g.md Lietz Theorem10.10(i)/Claims10.11–12, https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf, full arguments read for the dichotomy. Empty pieces have specified dummy codes; a nonempty A supplies one filler without simultaneous choice. Compact images are closed in the metric targets. Unchanged, ZF+AD, no DC measure clause imported. Examined IDs: def-axiom-of-determinacy-for-natural-number-games, lem-perfect-set-game-strategy-dichotomy, lem-cantor-and-baire-sequence-coding, lem-dyadic-coding-coin-measure-and-lebesgue-transfer, thm-ad-implies-countable-choice-for-baire-space, thm-of-archimedean. Next: rational game definition.

### `def-rational-determinacy-measure-game` — accept

Read Martin game definition pp393–394 and rational-move paragraph p396. Rational bounds stay positive after legal responses; (1,1) is always legal for I and a positive coordinate always exists for II. Countable rational-pair codes and first-illegal loss give a total natural-number payoff with legal winning-strategy restrictions in ZF. research/phase-2-catchup-24-step3b-g.md Source https://seminariomatematico.polito.it/rendiconti/61-4/393.pdf. Includes v=1 without special-case failure. Unchanged. Examined IDs: def-cantor-sequence-space-for-descriptive-set-theory, def-gale-stewart-games-on-pruned-trees, thm-rationals-countable. Next: strategy measure inequalities.

### `lem-determinacy-measure-game-inner-outer-comparison` — accept

Read complete Martin Lemmas 1–2 pp394–396. Checked both finite-level weighted inequalities and their limit passages. For II, nonnegative rational approximants with zero coordinates fixed at zero establish the infimum inequality; least legal codes produce coherent histories. Excluded u_e=1 children have f=1, and the geometric error sums to at most delta. Open unacceptable cylinders cover E. research/phase-2-catchup-24-step3b-g.md Source https://seminariomatematico.polito.it/rendiconti/61-4/393.pdf. The I acceptable closed tree has measure at least v by finite initial mass; II open unions use continuity from below. v=1 and empty response-infimum sets satisfy the same bounds. Rational least-code recursion needs no additional choice; DC is inherited through the actual measure interface. Unchanged. Examined IDs: def-rational-determinacy-measure-game, lem-dyadic-coding-coin-measure-and-lebesgue-transfer, thm-rationals-countable, lem-rat-embeds-dense, thm-recursion. Next: AD+DC measurability.

### `thm-ad-and-dc-imply-lebesgue-measurability` — accept

Read Martin rational-game conclusion p396 and checked the complete local real-line transfer. Any strict inner/outer gap contains a positive rational v, incompatible with either winning strategy. Dyadic injectivity transfers equality to every subset of [0,1); a defined integer sequence of translated pieces covers R and the DC-supported sigma-algebra closes their union. research/phase-2-catchup-24-step3b-g.md Source https://seminariomatematico.polito.it/rendiconti/61-4/393.pdf. AD and DC are independent stated hypotheses here, and no AC or Recorded supplier is used. Unchanged. Examined IDs: def-axiom-of-determinacy-for-natural-number-games, def-dependent-choice, lem-determinacy-measure-game-inner-outer-comparison, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant, thm-of-archimedean, lem-dyadic-coding-coin-measure-and-lebesgue-transfer, lem-rat-embeds-dense, thm-lebesgue-measure-is-a-complete-measure. A-page 60 items now recorded; next: five B-page items, then final checks and scope reconciliation.

### `ex-empty-and-single-branch-tree-bodies` — accept

Checked the exact tree/body convention: a branch must have its empty prefix in the tree, and each coordinate of a singleton-prefix branch is forced. Marker Lemma 1.14(ii), PDF4, and the accepted local definition. research/phase-2-catchup-24-step3b-g.md Unchanged, ZF. Examined IDs: def-trees-and-bodies-on-discrete-alphabets. Next: first-move game.

### `ex-first-move-clopen-game` — accept

The full strategy assigns 0 at every I history. All compatible outcomes belong to the cylinder x(0)=0; its complement is the union of the other first-coordinate cylinders. Checked game and Baire topology definitions; no determinacy theorem or choice used. research/phase-2-catchup-24-step3b-g.md Source context https://arxiv.org/html/2401.09659v1 opening definitions. Unchanged, ZF. Examined IDs: def-gale-stewart-games-on-pruned-trees, def-baire-sequence-space. Next: taboo deletion counterexample.

### `cex-taboo-winning-positions-need-not-contain-their-children` — accept

Checked the displayed terminal-labelled tree against the already read erroneous BLM Lemma 1 downward-closure assertion. I chooses terminal (0) at the root; the other child has exactly one infinite continuation and no terminals, so neither player can force terminal reachability. Removing winning positions deletes the root while retaining that child. research/phase-2-catchup-24-step3b-g.md Source https://arxiv.org/html/2401.09659v1 Lemma1. Corrected A-page reduction keeps positions all of whose prefixes avoid winning regions, so it is not contradicted. Unchanged, ZF. Examined IDs: def-game-trees-with-terminal-taboos, lem-terminal-reachability-winning-region-closure. Next: non-Borel real subset.

### `fs-every-set-of-reals-is-borel` — accept

The accepted ZFC strategy diagonalization supplies an undetermined A. For the accepted continuous injection e, the inverse image of e[A] is exactly A; Borel pullback followed by Borel determinacy contradicts undeterminedness. No image-preservation assertion or AD premise is used. research/phase-2-catchup-24-step3b-g.md Marker Exercise6.8/Theorem6.9 source context https://homepages.math.uic.edu/~marker/math512/dst.pdf; this is the stated local consequence. Unchanged, AC explicit. Examined IDs: thm-choice-produces-an-undetermined-natural-number-game, thm-borel-games-are-determined, lem-sequence-spaces-continuously-inject-into-the-real-line, lem-countable-borel-hierarchy-exhaustion-and-pullbacks, def-axiom-of-choice. Next: elementary Borel evaluations.

### `ex-well-founded-borel-code-for-a-closed-basic-complement` — accept

All four finite nonempty trees satisfy the accepted code syntax: a complement has exactly child 0 and the empty union has no children. Evaluation gives U_n, X minus U_n, empty, and X in turn. Only the ZF finite-evaluation clause is used; the empty tree is correctly excluded as a code. research/phase-2-catchup-24-step3b-g.md Marker Definitions7.1–7.2 source context https://homepages.math.uic.edu/~marker/math512/dst.pdf, local syntax governs. Unchanged. Examined IDs: def-well-founded-borel-evaluation-codes, lem-well-founded-borel-code-evaluation. All 215 group items have now received decisions; current hashes and final mechanical gates remain to check.


## Final group report — 2026-09-10

All 215 items were adjudicated individually, with examined dependency IDs in their receipts and the claim, conventions, relevant source arguments and reasoning in the entries above. Outcome: 200 accept, 13 repaired, 2 escalate. Repairs were recorded after local correction; they need no further mathematical adjudication. Current content/dependency hashes were checked after the final repair. No owner-repaired item was re-adjudicated.

### Owner-held obligations

- `lem-interpretation-translates-finite-derivations`: the contract quantifies over every S-proof, including open final formulas. Interpreted domain/equality translation needs free-variable guards: a proof of x=x does not establish E(x,x) outside the interpreted domain. The complete relevant Freiburg §3.5.12 and Moschovakis §4C.1 arguments supply sentence interfaces, not this unguarded assertion. Owner must resolve the guarded/open-formula interface while retaining the consistency and sentence conclusions and reconcile any scope/plan change. Existing escalation remains current.
- `lem-kojman-shelah-tail-supremum-closure`: the displayed increasing aleph_m sequence hypothesis omits strictness and 1≤m. Kojman–Shelah Claim 8 requires strict increase and 0<m≤k. The m=0 case can have tail supremum of cofinality omega and cannot be equal modulo finitely many coordinates to an element of X^R. Owner must resolve the quantified scope; no claim was dropped. The affected consumers use the separately checked strict uncountable clause of `lem-scale-tail-suprema-have-prescribed-cofinality`, and retain the original dependency in their receipts so its change invalidates them.

The shared plan is outside this dispatch's edit scope. A current exact comparison of owned manifest statements, strategies and dependency lists with `research/plan-spec.json` finds six synchronization obligations: dependencies for `cor-transitive-models-of-each-finite-zf-fragment`, `ex-rudin-initial-top-slice`, `ex-kojman-shelah-scale-used-at-a-tail-supremum`, `fs-normality-is-preserved-by-product-with-the-unit-interval`, and `def-well-founded-borel-evaluation-codes`; strategy and dependencies for `def-descriptive-tree-rank`. Owner reconciliation is required; passing the plan validator below does not certify equality with these repaired contracts. No shared plan/prose or published proof was edited for this audit.

### Scope, consumers and debt

Refreshed group scope declines: all 57 current rows have `stands` with preserved prior evidence and a current Step-3b consumer-audit justification. No unresolved decline or invented owner decision. The higher-cardinal and multiplicity exclusions do not exclude the specialized clauses actually used. All five Step-3a scope receipts remain sufficient/current.

Read `briefs/tasks/frontier-dependency-ledger.md` and reconciled consumer inputs for batches 14, 15 and 16 against actual declarations and extra receipt dependencies, including same-group cross-batch uses. No such edge is used by the current group contracts: the three consumer input arrays remain empty. The reviewed ledger refresh passed. In particular the PCF arguments use the direct published elementary-submodel suppliers, not the batch-14 reflection pair.

Published editorial debt for reconciliation is recorded in the Bernstein entry: `def-perfect-set-r` still says the Cantor set is not constructed anywhere in the library, despite `thm-cantor-set-ternary-description`. This does not affect its mathematical definition or block the new supplier. No published proof was changed.

### Actual mechanical results

All checks below were run after the final local repairs; group file arguments mean the batch-14, batch-15 and batch-16 manifests or coverage files.

| Check | Actual result |
| --- | --- |
| `manifest-deps.mjs` (three manifests) | Exit 0; 215 items, 0 errors, 0 normalizations. |
| `content-policy.mjs --manifest-only` (three manifests) | Exit 0; 215 items, 0 errors/warnings. |
| `coverage-checklist.mjs --require-destination` (three coverage files) | Exit 0; 5 pages, 363 harvested rows, 0 errors/warnings. |
| `manifest-integrity.mjs --run phase-2-catchup-24` | Exit 0; 48 owed/manifest pages, no scope drift. |
| `validate-plan.mjs research/plan-spec.json` | Exit 0; includes 644 future pages without item lists. Does not close the six manifest/plan differences above. |
| `scope-decisions.mjs refresh/check --run phase-2-catchup-24 --group g` | Exit 0; 57 current declines, 0 pending/errors. |
| `frontier-dependency-ledger.mjs refresh --run phase-2-catchup-24 --require-reviewed` | Exit 0; reviewed ledger refreshed and deduplicated. |
| `source-fetch-check.mjs` (three coverage files) | Exit 0; 30/31 fetch-verified, 31/31 resolved, one documented source drop. Receipt validation, not a fresh network fetch. |
| `source-backing.mjs` (three coverage files, existing run liveness) | Exit 0; 188 result rows backed by openable sources or documented alternatives. Its “authored” label is tool terminology; these remain scaffold contracts. |
| `extcheck.mjs` | Exit 0; global recorded-result warnings retained. No Recorded result was used to prove its replacement in the owned audit. |
| `depcheck.mjs --quiet` (whole published repository) | Exit 1; 473 warnings, 2 errors outside this group: published but unaudited `lem-boundary-label-of-a-van-kampen-diagram-is-null-in-the-presented-group` and `lem-curvature-count-for-reduced-c-prime-one-sixth-diagrams`. No out-of-scope repair attempted. |
| Fresh `url-sweep.mjs --recover --fail-on-dead` (three coverage files) | Exit 1; 0/27 URLs fetched by shell, all 27 fail with curl error 6 (DNS resolution). No archive recovery succeeded. This environment failure does not establish dead sources or justify new source drops. Complete browser/source readings used in the mathematical audit are documented item by item. |
| `step3-decisions.mjs check --run phase-2-catchup-24 --phase final` | Exit 1; `closed: false`; whole run 735 items, 732 closed, 3 unresolved. Two are this group's escalations above; the third is outside group g (`fs-e-zero-and-e-one-page-conventions-are-universal-across-sources`). Group: 213 closed and 2 current escalations, no missing/stale item decision. |

Next action belongs to the owner: resolve the two escalations and shared-plan reconciliation, then run the final mechanical gate on the resulting current content. The global unaudited-publication errors and fresh shell source-liveness failure are separately reported gate limitations, not silently waived. This report completes the assigned adjudication; it does not authorize publication or declare the final gate passed.
