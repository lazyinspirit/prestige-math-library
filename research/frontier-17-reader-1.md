# Frontier 17 — independent reader 1 report

Batch: `frontier-17-batch-1`

Scope: every item on `sums-of-two-squares`, `sums-of-two-squares-examples`, `frattini-subgroups-and-the-burnside-basis-theorem`, and `frattini-subgroups-and-the-burnside-basis-theorem-examples`.

## Fatal findings

### R1-1 — `prop-every-nonzero-residue-mod-prime-is-a-sum-of-two-squares`

- Location: Facts & Assumptions `[L5]` and proof step 2.1.
- Defect: step 2.1 says that translation and negation are bijections of the additive group of `Z/p`, but `[L5]` states only that multiplication distributes over addition. The fact as written therefore does not expose the additive-group structure used by the step.
- Evidence: the cited item `thm-integers-modulo-n-basic-algebra` does state, in clause 1, that `(Z/n,+,[0]_n)` is an abelian group, and separately states the distributive laws in clause 3. The dependency is strong enough; the batch item's restatement omits the load-bearing clause.
- Severity: fatal — an inaccurate/incomplete fact restatement leaves step 2.1 unlicensed by its explicit inputs.
- Disposition: repaired — `[L5]` now states the additive-group and distributive clauses, and the contract quote and step-2.1 claim are synchronized.

### R1-2 — `cor-primitive-sums-of-two-squares-closed-under-products`

- Location: proof steps 1.1 and 1.2.
- Defect: the proof uses `q | t` iff `v_q(t) >= 1` (and hence `q` not dividing `t` iff `v_q(t)=0`) to pass between divisibility/parity and valuation arithmetic. Neither `[L1]` nor `[L2]` states that equivalence: `[L1]` gives the primitive-representation criterion and `[L2]` gives only additivity of valuations.
- Evidence: the published item `lem-p-adic-valuation-basic` states exactly that `v_p(a) >= 1` iff `p | a` for a nonzero integer `a`. That required dependency/fact is absent from the item and its manifest row.
- Severity: fatal — both steps use an unstated non-elementary valuation fact.
- Disposition: repaired — added `lem-p-adic-valuation-basic` to the item and manifest, added exact fact `[L3]`, rewrote steps 1.1–1.2 to spend it, and updated the contract.

### R1-3 — `cor-divisors-of-primitively-two-square-representable-integers`

- Location: title versus Statement/Given.
- Defect: the title asserts that all positive divisors are primitively represented, including `d=1`, while the Statement and proof context assume `d>1`.
- Evidence: `1` is a positive divisor and has the primitive representation `(1,0)`, but it is outside the written Statement/Given. The proof never treats it because it starts under the stronger hypothesis.
- Severity: fatal — the title asserts strictly more than the Statement/proof establishes.
- Disposition: repaired — Hackman E.II.8(b) states the sourced result for divisors greater than one, so the item and manifest titles were narrowed to that exact domain. The Statement, proof, provenance, and specific `d=1` boundary disposition remain source-faithful.

### R1-4 — `lem-elementary-abelian-p-groups-are-canonical-fp-vector-spaces`

- Location: proof steps 1.1 and 2.1.
- Defect: both steps repeatedly use the integer exponent laws in a group, including `x^(a-b)=x^a(x^b)^(-1)`, `x^(a+b)=x^a x^b`, `(x^b)^a=x^(ab)`, and `(xy)^a=x^a y^a` for commuting elements. The item depends only on the definition of group powers; that definition introduces the powers but does not state these laws. Neither `[F1]`, `[L1]`, nor `[L2]` supplies them.
- Evidence: the published item `lem-group-power-laws` states exactly the needed exponent laws, including the commuting hypothesis for the product law. It is absent from the item's dependencies and facts.
- Severity: fatal — the vector-space axioms and well-definedness are derived through an unstated theorem rather than the explicit inputs.
- Disposition: repaired — added published `lem-group-power-laws` to the item and manifest, stated the needed laws as `[L3]`, cited it in steps 1.1–2.1, and added the exact contract citation and inputs.

### R1-5 — `prop-frattini-subgroup-of-a-quotient-finite-p-group`

- Location: Facts & Assumptions `[L3]` and proof step 2.1.
- Defect: `[L3]` attributes the claim `the image of a subgroup K is KN/N` to `thm-quotient-group-laws` and `thm-correspondence-theorem-groups`. The first cited Statement gives the quotient multiplication, while the second gives the correspondence only for subgroups already containing `N`; neither states the quoted arbitrary-subgroup image formula.
- Evidence: the correspondence theorem on disk says that `H -> H/N` and inverse image are inverse bijections for subgroups `H` satisfying `N <= H <= G`. The formula used in step 2.1 is a short consequence after proving that the inverse image of `pi(K)` is `KN`, but that derivation is absent and the fact presents it as cited text.
- Severity: fatal — the `[L3]` restatement has a conclusion wider than either cited item.
- Disposition: repaired — `[L3]` now states only quotient multiplication and the exact correspondence theorem; step 2.1 derives the inverse-image formula directly before applying correspondence, and the contract claim is synchronized.

### R1-6 — `cor-frattini-subgroup-of-a-finite-two-group-is-the-square-subgroup`

- Location: Facts & Assumptions `[L1]` and proof step 1.1.
- Defect: step 1.1 forms the quotient `P/P^2`, which requires `P^2` to be normal. `[F1]` only defines the square subgroup and `[L1]` restates only the formula `Phi(P)=P'P^p`; neither written fact states normality or characteristicity of `P^2`.
- Evidence: the cited source item `thm-frattini-subgroup-formula-for-a-finite-p-group` explicitly states both that `P^p` is characteristic and that `Phi(P)=P'P^p`. The batch fact omitted the first, load-bearing clause.
- Severity: fatal — the proof invokes a quotient before any explicit input licenses its denominator as normal.
- Disposition: repaired — `[L1]` now includes characteristicity of `P^p`, step 1.1 explicitly obtains normality before forming the quotient, and the contract use/input/claim were updated.

### R1-7 — `lem-two-essentially-different-two-square-representations-factor-an-odd-integer`

- Location: proof-contract derivation rows for steps 2.1 and 3.1.
- Defect: the step-2.1 row says the gcd split produces coprime `g,h`, although the proof defines `g=gcd(A,C)` and proves `gcd(e,f)=1`. The step-3.1 row says coprime divisibility produces a common factor `f`, although the proof produces the common positive factor `h` in `D=eh` and `B=fh`.
- Evidence: the numbered proof text gives the variable assignments above verbatim; the contract descriptions name different variables and therefore do not state what those steps establish.
- Severity: fatal — the durable proof-obligation map contains false claims about two numbered steps.
- Disposition: repaired — the step-2.1 and step-3.1 contract claims now name `gcd(e,f)=1` and the common factor `h` correctly; proof text was unchanged.

### R1-8 — `lem-two-square-representations-of-prime-powers`

- Location: proof-contract derivation rows for steps 1.2 and 1.3, plus the `one` and `degenerate` boundary evidence.
- Defect: the row for step 1.2 describes the induction for powers of `2` and one-mod-four primes, which is actually step 2.1; the row for step 1.3 describes the explicit even-power representation, which is actually step 1.2. The boundary evidence repeats those wrong anchors.
- Evidence: proof step 1.2 is `q^(2j)=(q^j)^2+0^2`; proof step 1.3 is the odd-exponent obstruction; proof step 2.1 is the product-closure induction for `2` and one-mod-four primes.
- Severity: fatal — the contract's step claims and boundary anchors are false of the numbered proof text.
- Disposition: repaired — the three derivation claims/ids and every affected boundary anchor now match proof steps 1.2, 1.3, and 2.1; proof text was unchanged.

### R1-9 — `thm-sum-of-two-squares-characterisation`

- Location: proof-contract derivation rows for steps 1.3 and 2.1.
- Defect: the step-1.3 row describes finite product closure, while proof step 1.3 begins the forward direction by dividing represented coordinates by a three-mod-four prime. The step-2.1 row describes that local divisibility move, while proof step 2.1 is the finite product construction for the reverse direction.
- Evidence: the two contract claims are interchanged relative to the numbered proof text, even though their input arrays happen to match the actual steps.
- Severity: fatal — the proof-obligation map falsely identifies what two numbered steps establish.
- Disposition: repaired — the step-1.3 and step-2.1 contract claims now describe the local square-factor removal and finite-product construction respectively; proof text was unchanged.

### R1-10 — `cor-squarefree-sum-of-two-squares-characterisation`

- Location: proof-contract derivation rows for steps 1.2 and 2.1.
- Defect: the step-1.2 row describes satisfying the primitive-characterisation criterion, which is proof step 2.1. The step-2.1 row describes the common-prime-square contradiction, which is proof step 1.2.
- Evidence: the claims are interchanged relative to the numbered proof text; their input arrays reflect the actual steps and expose the mismatch.
- Severity: fatal — the proof-obligation map contains false descriptions of two numbered steps.
- Disposition: repaired — the step-1.2 and step-2.1 contract claim ids/text now match the common-prime contradiction and primitive-existence criterion; proof text was unchanged for this finding.

### R1-11 — `lem-three-mod-four-prime-dividing-two-square-sum`

- Location: proof-contract citation row `[F2] -> def-legendre-symbol`.
- Defect: the recorded quote is only `Let p be an odd prime ... The Legendre symbol is`; it omits every branch of the definition that steps 2.2 and 3.1 use.
- Evidence: the cited Definition on disk immediately continues with the `0`, `1`, and `-1` cases; the item fact faithfully summarizes those cases, but the contract does not quote them.
- Severity: fatal — a clause's opening words are not the exact source clause required by the citation contract.
- Disposition: repaired — the contract now quotes the Legendre symbol's full three-branch definition.

### R1-12 — `prop-frattini-subgroup-of-a-direct-product-of-finite-p-groups`

- Location: proof-contract citation row `[F1] -> def-external-direct-product-of-groups`.
- Defect: the recorded quote stops at `Their external direct product has underlying set` and omits the componentwise multiplication formula used in step 1.1.
- Evidence: the cited Definition on disk continues with `(g,h)(g',h')=(gg',hh')`; that is the load-bearing clause for the commutator and power calculation.
- Severity: fatal — the contract records only an opening fragment, not the cited proposition used by the step.
- Disposition: repaired — the contract now quotes the external direct product's underlying set and componentwise multiplication formula.

### R1-13 — `ex-frattini-subgroup-of-a-cyclic-p-group`

- Location: proof-contract citation row `[L2] -> lem-order-of-a-power-in-a-finite-cyclic-group`.
- Defect: the quote ends after `For every integer a,` and omits the conclusion `ord(g^a)=m/gcd(a,m)` used to compute the order of `g^p` in step 1.1.
- Evidence: the displayed formula is present immediately after that fragment in the cited Statement.
- Severity: fatal — the contract citation supplies hypotheses only and no conclusion.
- Disposition: repaired — the contract now quotes the complete order formula `ord(g^a)=m/gcd(a,m)` with its hypotheses.

### R1-14 — `ex-frattini-subgroups-of-dihedral-and-quaternion-groups`

- Location: proof-contract citation row `[L2] -> prop-the-quaternion-group-has-order-eight-and-a-unique-element-of-order-two`.
- Defect: the quote stops at `Let Q_8=... be as in` and omits the element-order clauses used to compute the squares in step 1.1 and the quotient in step 2.1.
- Evidence: the cited Statement's clauses 1–3 give order eight, the unique involution, and order four for the six quaternion units.
- Severity: fatal — the contract records only the opening words of the cited Statement.
- Disposition: repaired — the contract now quotes all three relevant quaternion clauses, including order eight and the element orders.

### R1-15 — `cex-frattini-image-under-a-nonsurjective-homomorphism`

- Location: proof-contract citation row `[L3] -> cor-only-proper-nontrivial-normal-subgroup-of-s-n`.
- Defect: the quote ends at `the normal subgroups of S_n are` and omits the list `{1}, A_n, S_n` used in proof step 1.2.
- Evidence: that list is the next clause of the cited Statement and is exactly what permits the three-case exhaustion.
- Severity: fatal — the contract citation contains no conclusion.
- Disposition: repaired — the contract now quotes the complete normal-subgroup list `{1}, A_n, S_n` and its domain `n>=5`.

### R1-16 — `fs-every-minimal-generating-set-of-an-arbitrary-finite-group-has-the-same-size`

- Location: proof-contract citation row `[L1] -> prop-integers-modulo-n-as-a-quotient-group`.
- Defect: the quote stops after the introductory instruction to view `n` as its canonical integer; it omits the conclusion identifying `(Z,+)/nZ` with `(Z/n,+)` that steps 1.1 and 1.2 use.
- Evidence: the displayed group equality occurs later in the cited Statement.
- Severity: fatal — the recorded text is an opening fragment rather than a source clause supporting the proof.
- Disposition: repaired — the contract now quotes the complete quotient-group identification, including `(Z,+)/nZ=(Z/n,+)`.

### R1-17 — `lem-prime-one-mod-four-powers-have-primitive-two-square-representations`

- Location: Facts & Assumptions `[L6]` and its proof-contract citation row.
- Defect: both reduce the canonical-factorisation theorem to the label `the exponents are determined by n`; step 3.1 needs the quantified uniqueness conclusion to infer that a common prime divisor of a representation of `p^(e+1)` must equal `p`.
- Evidence: clause 3 of the cited Statement gives the actual condition: for an injective prime list and a product representation, every exponent equals the corresponding canonical valuation.
- Severity: fatal — a clause label/opening is substituted for the load-bearing quantified proposition.
- Disposition: repaired — `[L6]` now states the quantified distinct-prime exponent uniqueness used by step 3.1, and the contract quotes that full clause.

### R1-18 — `lem-finite-elementary-abelian-p-groups-have-bases-and-basis-extension`

- Location: Facts & Assumptions `[L2]` and its proof-contract citation row.
- Defect: `the exponents in a canonical prime factorisation are determined by the positive integer` is only the source clause's label; step 3.1 needs the actual uniqueness implication from `p^|B|=p^|C|` to `|B|=|C|`.
- Evidence: the cited theorem's clause 3 states the quantified uniqueness of exponents for an injective prime list.
- Severity: fatal — the load-bearing conclusion is not stated in the fact or contract quote.
- Disposition: repaired — `[L2]` now states the quantified exponent-uniqueness proposition, and the contract quotes the full clause.

### R1-19 — `cor-divisors-of-primitively-two-square-representable-integers`

- Location: Facts & Assumptions `[L2]` and its proof-contract citation row.
- Defect: the same opening-label fragment `the exponents are determined by n` is cited in step 1.1 without its quantified conclusion. In this proof it is also unnecessary: `[L3]` and transitivity of divisibility already give `v_p(d)<=v_p(n)` from `d|n`.
- Evidence: the cited canonical-factorisation Statement gives a longer quantified clause; the written fragment does not. The proof can be made both shorter and fully licensed by removing this citation.
- Severity: fatal — the contract and fact substitute a label for the cited proposition.
- Disposition: repaired — removed the unnecessary canonical-factorisation fact/dependency from the item, manifest, and contract; the valuation-divisibility fact alone now licenses step 1.1 and was renumbered `[L2]` consistently.

### R1-20 — `cor-kernel-of-the-action-on-the-frattini-quotient-is-a-p-group`

- Location: proof-contract citation row `[L4] -> thm-canonical-prime-factorisation`.
- Defect: the quote is only `the exponents are determined by n`, while steps 2.1 and 3.1 use the full existence-and-uniqueness conclusion that a positive integer with no prime divisor other than `p` is a power of `p`.
- Evidence: the cited Statement supplies the finite prime-power product and the quantified exponent clauses; neither appears in the recorded quote.
- Severity: fatal — an opening label is used in place of the load-bearing source clause.
- Disposition: repaired — the contract now quotes the canonical factorisation hypotheses and all three product/exponent clauses used in steps 2.1–3.1.

### R1-21 — `lem-elementary-abelian-p-groups-are-canonical-fp-vector-spaces`

- Location: proof-contract boundary rows `iff-forward` and `iff-reverse`.
- Defect: both rows are marked `checked`, describing forward and converse directions, but the Statement is not a biconditional; it only constructs a canonical vector-space structure on an elementary abelian group.
- Evidence: no `if and only if` appears in the title or Statement, and proof step 3.1 merely notes that the underlying additive group remains elementary abelian.
- Severity: fatal — two boundary dispositions falsely claim that nonexistent iff directions were checked.
- Disposition: repaired — both iff rows are now `not_applicable` with distinct Statement-specific rationales.

### R1-22 — `cor-squarefree-sum-of-two-squares-characterisation`

- Location: Facts & Assumptions `[F1]`, proof steps 1.1 and 2.1, and the corresponding contract citation.
- Defect: `[F1]` states only that squarefree means no prime square divides `n`, but steps 1.1 and 2.1 immediately use the omitted equivalent clause that every canonical prime exponent is `0` or `1`, including `v_2(n)<=1`.
- Evidence: the cited item `def-squarefree-positive-integer` contains that exponent clause explicitly after the first sentence. The current fact and contract quote stop before it.
- Severity: fatal — the proof uses a load-bearing part of the cited Definition that its fact restatement does not state.
- Disposition: repaired — `[F1]` and its contract quote now include the exact equivalent `0`-or-`1` canonical-exponent clause.

### R1-24 — `cor-maximal-subgroups-of-a-finite-p-group-are-frattini-hyperplanes`

- Location: Statement, final `equivalently` clause.
- Defect: the Statement calls maximal subgroups of `P` kernels of nonzero linear homomorphisms to `Z/p`, but `P` is not generally a vector space and the domain of such a linear map is omitted. The proof only defines a linear map on `E=P/Phi(P)` and then takes its inverse image in `P`.
- Evidence: proof step 2.1 constructs `lambda:E->Z/p` with kernel `M/Phi(P)` and uses correspondence to recover `M`. Thus the correct subgroup of `P` is `pi^(-1)(ker lambda)=ker(lambda composed with pi)`.
- Severity: fatal — as written, the Statement's equivalent characterization is ill-typed/overstrong relative to the proof.
- Disposition: repaired — the Statement now specifies `lambda:E->Z/p` and `pi^(-1)(ker lambda)=ker(lambda composed with pi)`; the downstream example fact and contract quote were synchronized.

### R1-25 — `thm-frattini-quotient-is-the-largest-elementary-abelian-quotient`

- Location: batch manifest dependency row versus item frontmatter/Facts `[L4]`.
- Defect: the proof directly cites `lem-frattini-subgroup-is-characteristic` to make `Phi(P)` normal, and the item frontmatter declares it, but the batch manifest omits that dependency.
- Evidence: proof step 1.1 cites `[L4]`; the manifest row lacks the target while the authored `deps` list contains it.
- Severity: fatal — the manifest's load-bearing dependency list is false of the authored proof.
- Disposition: repaired — added `lem-frattini-subgroup-is-characteristic` to the batch manifest only; `plan-spec.json` was not touched.

### R1-26 — `cor-maximal-subgroups-of-a-finite-p-group-are-frattini-hyperplanes`

- Location: batch manifest dependency row versus item frontmatter/Facts `[F1]`.
- Defect: the proof directly cites `def-frattini-subgroup-of-a-finite-group`, and the item frontmatter declares it, but the batch manifest omits that dependency.
- Evidence: proof step 1.1 uses `[F1]` to place `Phi(P)` in every maximal subgroup; the manifest row lacks the cited target.
- Severity: fatal — the manifest omits a load-bearing dependency.
- Disposition: repaired — added `def-frattini-subgroup-of-a-finite-group` to the batch manifest only; `plan-spec.json` was not touched.

### R1-27 — `fs-the-frattini-subgroup-is-functorial-for-all-homomorphisms`

- Location: batch manifest dependency row versus item frontmatter and proof.
- Defect: the manifest declares `thm-correspondence-theorem-groups`, but the item does not declare or cite it; the surjective replacement is proved directly in step 1.2.
- Evidence: the authored `deps` list has only the counterexample and Frattini definition, and no Fact or proof tag cites the correspondence theorem.
- Severity: fatal — the manifest records a false load-bearing edge.
- Disposition: repaired — removed the unused correspondence-theorem edge from the batch manifest only; `plan-spec.json` was not touched.

## Nonfatal findings

None.

## Polish

### R1-23 — `thm-hall-burnside-automorphism-theorem`

- Location: proof step 3.1.
- Defect: the proof says `Choose a basis of P/Phi(P)` without explicitly deriving basis existence from its listed facts. `[L1]` characterizes minimal generating sets via quotient bases but does not itself assert that a basis exists.
- Evidence: because `P` is finite, one can delete redundancies from the finite generating set `P` to obtain a minimal generating set and then apply `[L1]`; this closes the gap immediately.
- Severity: polish — a competent reader can supply the finite deletion argument well within 30 seconds, so it does not license a repair cycle.
- Disposition: recorded only; no content or contract edit.

## Coverage and verdicts

Every numbered proof step, every direct `[F#]`/`[A#]`/`[L#]` citation, every title and Statement, all eight boundary rows for every proof-bearing item, all component-provenance tags, both page summaries, and both examples-page bodies were read. I opened all 62 scoped items: 56 proof-bearing items and 6 definitions. I also opened the cited Definition/Statement on disk for every dependency used by the batch; the final dependency set contains 72 unique published targets and 35 unique same-batch targets.

The two AI-generated Statements are `ex-squarefree-sums-of-two-squares` and `ex-hall-burnside-detects-a-nontrivial-coprime-automorphism`. Neither is a dependency target. An independent bounded enumeration reproduced exactly `1,2,5,10,13,17,26,29` as the squarefree sums of two squares through 30. Direct computation in `C_3` verified that inversion is nonidentity and has square equal to the identity. No counterexample was found to either generated Example.

The recorded source/provenance rationales agree with the item tags. I opened the live Hackman, Conrad, Craven, and van Beek texts at the cited developments; in particular, Hackman E.II.8(b) is explicitly restricted to divisors greater than one, which determined the source-faithful repair in R1-3.

### Items changed

- `prop-every-nonzero-residue-mod-prime-is-a-sum-of-two-squares`: faithful additive-group fact restatement.
- `cor-primitive-sums-of-two-squares-closed-under-products`: added the valuation/divisibility dependency and repaired steps 1.1–1.2.
- `cor-divisors-of-primitively-two-square-representable-integers`: narrowed the title to `d>1` and removed the unnecessary canonical-factorisation dependency/fact.
- `lem-elementary-abelian-p-groups-are-canonical-fp-vector-spaces`: added the group-power-laws dependency/fact and repaired steps 1.1–2.1.
- `prop-frattini-subgroup-of-a-quotient-finite-p-group`: replaced the inflated subgroup-image citation and derived the formula in step 2.1.
- `cor-frattini-subgroup-of-a-finite-two-group-is-the-square-subgroup`: restored characteristicity/normality before forming `P/P^2`.
- `lem-prime-one-mod-four-powers-have-primitive-two-square-representations`: replaced the clause label with the quantified exponent-uniqueness fact.
- `lem-finite-elementary-abelian-p-groups-have-bases-and-basis-extension`: replaced the clause label with the quantified exponent-uniqueness fact.
- `cor-squarefree-sum-of-two-squares-characterisation`: restored the omitted canonical-exponent clause of squarefreeness.
- `cor-maximal-subgroups-of-a-finite-p-group-are-frattini-hyperplanes`: made the domain and composite-kernel characterization explicit.
- `ex-maximal-subgroups-as-frattini-hyperplanes`: synchronized `[L2]` with that repaired Statement.

No result was added or deleted. None of the changed items carried `verification.judge`, so there was no stale judge block to remove. No published item and no other batch file was edited.

The batch proof contract was repaired for 19 items: 10 of the changed items (the proof map for the source hyperplane corollary itself did not change), plus contract-only corrections for `lem-two-essentially-different-two-square-representations-factor-an-odd-integer`, `lem-two-square-representations-of-prime-powers`, `thm-sum-of-two-squares-characterisation`, `prop-frattini-subgroup-of-a-direct-product-of-finite-p-groups`, `cor-kernel-of-the-action-on-the-frattini-quotient-is-a-p-group`, `ex-frattini-subgroup-of-a-cyclic-p-group`, `ex-frattini-subgroups-of-dihedral-and-quaternion-groups`, `cex-frattini-image-under-a-nonsurjective-homomorphism`, and `fs-every-minimal-generating-set-of-an-arbitrary-finite-group-has-the-same-size`.

The batch manifest was synchronized for six items: dependency changes on `cor-primitive-sums-of-two-squares-closed-under-products`, `cor-divisors-of-primitively-two-square-representable-integers`, `lem-elementary-abelian-p-groups-are-canonical-fp-vector-spaces`, `thm-frattini-quotient-is-the-largest-elementary-abelian-quotient`, `cor-maximal-subgroups-of-a-finite-p-group-are-frattini-hyperplanes`, and `fs-the-frattini-subgroup-is-functorial-for-all-homomorphisms`, plus the source-faithful title change on the divisor corollary. `research/plan-spec.json` was not touched and requires the licensed 6b `splice-plan --update` transcription.

### Validation

- `tools/reflow.mts`: all 11 changed items already conformed; no reflow rewrite was needed.
- Targeted and full-batch `tools/precheck.mts`: 56/56 proof-bearing items pass.
- `rendercheck.mjs`: 66 scoped item/page files, 0 errors; real KaTeX and YAML parsing passed.
- `prosecheck.mjs --strict`: 66 files, 0 errors and 0 warnings.
- `proof-contract.mjs --strict`: 56/56 contracts, 0 errors and 0 warnings.
- `citation-fidelity.mjs --fail-on-missing-quote`: 218 citations, no missing quote and no widening candidate.
- `boundary-audit.mjs --fail-on-contradicted`: 448 rows, no contradicted disposition and no template-reuse cluster.
- `finite-smoke.mjs`: 0 errors; this batch has no registered finite-smoke obligations, so the reported check count is 0.
- `risk-report.mjs`: 56 items routed, 0 errors; Alpha still owns the required high/critical `risk_review` dispositions.
- `content-policy.mjs`: 62 scoped items, 0 errors and 0 warnings.
- `coverage-checklist.mjs`: 2 A pages and 92 harvested results, 0 errors and 0 warnings.
- `audit-manifest.mjs`: 247 relationships over 62 items, 0 defects.

### Per-page verdicts

- `sums-of-two-squares` — clean after the recorded item, citation, contract, boundary, title, and manifest repairs; 18/18 items opened.
- `sums-of-two-squares-examples` — no finding; all examples and counterexamples are correct on their displayed witnesses; 8/8 items opened.
- `frattini-subgroups-and-the-burnside-basis-theorem` — clean after the recorded proof, Statement, citation, contract, and manifest repairs; R1-23 remains recorded as polish only; 24/24 items opened.
- `frattini-subgroups-and-the-burnside-basis-theorem-examples` — clean after the recorded contract-citation, downstream-fact, and manifest repairs; 12/12 items opened.

Final count: 62 scoped items opened; 26 fatal findings repaired, 0 nonfatal findings, 1 polish finding recorded without edit, and 0 unresolved concerns.
