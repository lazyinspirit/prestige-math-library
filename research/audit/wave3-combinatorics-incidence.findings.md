# Wave 3 `combinatorics-incidence` Audit-Beta findings

Scope: A1 provenance determination and A2 citation-precision, mathematical-accuracy, and proof-contract audit only. No repair has been applied.

## Continuity checkpoint — 2026-08-04

- Substage: A1/A2 evidence frozen after the complete reading, source, and proof-contract passes.
- Owned artifacts: `research/audit/wave3-combinatorics-incidence.provenance.jsonl`, `research/audit/wave3-combinatorics-incidence.findings.md`, and `research/audit/wave3-combinatorics-incidence.proof-contracts.json`.
- Completed checks: all binding inputs and the active-run resume were read in full; all 34 manifest items, both page bodies, all Remarks, all 22 current on-disk Proof/Refutation/Counterexample sections, all 101 numbered steps, all 93 fact-to-source citation edges, and all 65 declared dependency edges were read. The five cross-wave real-analysis targets were read from their current on-disk text. Every current source citation was opened and read through the model-side web route.
- Evidence state: a 34-row provisional ledger and a 22-entry proof-contract document have been constructed in `/tmp`; the strict proof-contract gate reports 0 errors and 0 warnings. Seven distinct ledger URLs were retrieved successfully through the model-side web route. The non-escalated shell check returned DNS error 6/HTTP 000 for every external host, exactly as warned in the brief; no source conclusion or established-knowledge fallback was drawn from that sandbox failure.
- Provisional findings: no mathematical falsehood or proof gap exceeding the triage allowance; six citation/source-precision proposals, one provenance-retag proposal, and one A0/current-disk proof-count reconciliation. No class-(d) proposal.
- Exact next action: install the frozen ledger and contract into the three authorised artifact paths with `apply_patch`, run the manifest/JSONL/strict-contract/precheck checks against those final files, rehash the concurrently audited real-analysis targets, and finalize the coverage record below.

## Final A1–A2 result

The manifest contains 34 mathematical-content items. The provenance ledger is exhaustive: 11 statements are literature-derived, 21 are AI-altered semantic restatements, and two are positively identified locally selected finite counterexample constructions. Proof provenance is 14 AI-altered, eight AI-generated, seven not-applicable, and five not-supplied. Evidence is 11 exact-source, 21 semantic-source, and two trivial direct verifications. No row uses absence of a source as evidence, no row uses `established-knowledge`, and no undecidable provenance case remains for Alpha.

The mathematical audit found no false theorem, invalid example/counterexample, or proof gap outside the binding 30-second allowance. There are no class **(a) falsehood** proposals and no class **(d) debatable-restatement** proposals. All proposed changes below are class **(b) citation-precision** or class **(c) provenance retag**, and none has been applied.

## W3-CI-PROV-001 — provenance determination for all 34 legacy items

Class: **(c) provenance retag**. Recommended A3 disposition: approve the exact 34 ledger rows for later A4 application.

The ledger is the proposal of record. Its only `ai-generated` statements are `cex-an-incidence-function-with-nonunit-diagonal` and `cex-equal-size-intervals-with-different-mobius-values`. These are positive determinations about the particular locally chosen witnesses, each directly and completely verified; the label is not inferred from a failed search and does not claim novelty for the governing incidence-algebra or Möbius theorems. The remaining locally repackaged definitions, false statements, examples, and counterexample are recoverable restatements or instantiations of sourced established mathematics and are therefore `ai-altered`.

The convention audit is explicit in the row rationales:

- Incidence convolution uses finite closed intervals in a locally finite poset and an arbitrary commutative unital coefficient ring. A minimum element is not assumed.
- The recursive inverse is checked in both convolution orders. Over a field the sourced “nonzero diagonal” condition is the local “diagonal unit” condition; over a general commutative ring the unit formulation is essential.
- The Möbius function is taken in `I(P,Z)` as a two-sided zeta inverse. Stanley begins over a field but the local recurrence is integer-valued.
- Global lower-finite and upper-finite inversion are separate statements with opposite recurrence orientations. Neither requires a minimum; local finiteness alone is insufficient for the global principal-ideal/filter sums.
- Product, Boolean, chain, and divisibility specializations use the same closed-interval convention. The divisibility poset happens to have minimum 1, but no general theorem silently assumes one.

All seven distinct URLs recorded in the ledger returned successful HTTP-200 content through the permitted model-side web-retrieval path on 2026-08-04. The shell sandbox could not resolve any external hostname, so its HTTP 000 results were recorded only as an environment limitation and were not used as source evidence.

## W3-CI-001 — the finite-sum items cite incidence notes rather than the construction they assert

Class: **(b) citation-precision repair**. Recommended A3 disposition: replace the Gotti-only reference in the two named items with the exact finite-commutative-monoid source recorded in the ledger; retaining Gotti as optional incidence-algebra background is harmless.

Affected items:

- `def-finite-sum-in-a-commutative-monoid`
- `lem-finite-sum-reindexing-and-fubini`

The current Gotti PDF uses already-available finite interval sums but does not construct a sum indexed by an arbitrary finite set, prove enumeration independence in a commutative monoid, or state the additive empty-sum convention. Andrade–da Cruz, arXiv:2605.08089, constructs the finite-set product by enumeration, proves enumeration independence and recursion, and records the additive analogue. The local Fubini clauses then follow from that construction and the item’s fully written proof.

Smallest proposed repair: replace or supplement the current reference with `https://arxiv.org/abs/2605.08089` and use the ledger’s semantic-source wording. No mathematical body change is proposed.

## W3-CI-002 — the real/field-valued incidence reference does not by itself support the ring convention

Class: **(b) citation-precision repair**. Recommended A3 disposition: add the exact locally-finite commutative-ring reference and, for the unit criterion, the ring-unit reference recorded in the ledger.

Affected core items:

- `def-incidence-algebra-and-convolution`
- `def-delta-and-zeta-incidence-functions`
- `lem-incidence-convolution-associative-and-distributive`
- `thm-incidence-functions-form-a-ring`
- `lem-incidence-convolution-inverses-by-recursion`
- `thm-incidence-algebra-invertibility-criterion`

The current Gotti notes formulate incidence functions over the reals. Their condition `f(x,x) != 0` is correct there because every nonzero scalar is a unit, but it is not the item’s arbitrary-commutative-ring criterion. Guan–Zhang §2.1 gives the locally finite poset and commutative-unital-ring convolution convention; Hameister–Rao–Simpson Proposition 2.8 gives the exact diagonal-unit criterion over a commutative ring for finite posets. Together with Gotti’s locally finite recursion and the item’s interval-cardinality proof, these sources support the precise local generalisation without pretending that “nonzero” and “unit” coincide in a ring.

Smallest proposed repair: add `https://arxiv.org/abs/2412.18049` to the six rows, and add `https://www-users.cse.umn.edu/~reiner/REU/HameisterRaoSimpson2017.pdf` to the two inverse/criterion rows. Retain Gotti for the locally finite two-recursion proof. No body change is proposed.

## W3-CI-003 — the Stanley URL is only a table of contents

Class: **(b) citation-precision repair**. Recommended A3 disposition: replace the table-of-contents URL by Stanley’s full author PDF in all nine rows.

Affected items:

- `thm-mobius-function-of-a-boolean-lattice`
- `cor-inclusion-exclusion-is-boolean-mobius-inversion`
- `thm-mobius-function-of-a-finite-chain`
- `fs-mobius-depends-only-on-interval-cardinality`
- `fs-classical-mobius-inversion-is-unrelated-to-inclusion-exclusion`
- `ex-mobius-on-the-boolean-lattice-b3`
- `ex-mobius-on-a-four-element-chain`
- `ex-mobius-on-the-diamond-poset`
- `cex-equal-size-intervals-with-different-mobius-values`

`https://math.mit.edu/~rstan/ec/ec1toc.html` returned HTTP 200 but contains only chapter and section titles. It does not contain any theorem, formula, or proof cited by these rows. The full author PDF `https://math.mit.edu/~rstan/ec/ec1.pdf` returned HTTP 200 and was read at §§3.6–3.8: it contains the incidence algebra and two inversion orientations, product formula, Boolean formula, inclusion–exclusion identification, finite-chain formula, divisor-poset specialization, and Hall chain-count formula.

Smallest proposed repair: change only the URL (and, if desired, title it “R. Stanley, Enumerative Combinatorics, Volume 1, §§3.6–3.8”). No mathematical body change is proposed.

## W3-CI-004 — the MIT problem set is too narrow for five divisor-poset claims

Class: **(b) citation-precision repair**. Recommended A3 disposition: retain the problem set where it actually states the number-theoretic definition/inversion, and replace it elsewhere with the precise sources in the ledger.

Affected items:

- `def-divisibility-poset-on-positive-integers`
- `lem-divisibility-poset-is-lower-finite-and-factorises`
- `thm-number-theoretic-and-poset-mobius-agree`
- `cor-number-theoretic-mobius-is-multiplicative`
- `ex-mobius-on-the-divisor-lattice-of-twelve`

MIT 18.785 Problem Set 8, Problem 0(b), states the classical complex-valued divisor inversion formula and defines the number-theoretic Möbius function. It does not state that divisibility is a locally/lower-finite poset, factor divisor intervals into prime-exponent chains, identify the poset and number-theoretic Möbius functions, prove multiplicativity, or compute the divisor lattice of 12. Stanley’s full §§3.8.4–3.8.5 covers the poset, product-of-chains, agreement, and divisor inversion; the Stanford notes explicitly state multiplicativity.

Smallest proposed repair: use Stanley’s full PDF for the first, second, third, and fifth rows, and the Stanford Möbius notes for multiplicativity. The existing problem set remains a precise source for `def-number-theoretic-mobius-function`.

## W3-CI-005 — two current web references support only an ingredient, not the asserted result

Class: **(b) citation-precision repair**. Recommended A3 disposition: replace the imprecise duplicate references with the exact number-theory sources recorded in the ledger.

Two rows are affected:

- In `def-number-theoretic-mobius-function`, the current Encyclopedia of Mathematics “Möbius series” page uses and links the Möbius function but does not define its squarefree prime-factor values. MIT Problem Set 8 does define them, so the EOM duplicate should be removed or replaced with Cameron §7.5.
- In `ex-euler-totient-recovered-by-mobius-inversion`, the current LibreTexts page defines Euler’s phi function and proves multiplicativity, but it does not state `sum_{d|n} phi(d)=n` or derive the Möbius formula used by the item. Cameron Theorem 7.11 and the Stanford Möbius notes state the exact identities.

Smallest proposed repair: use `https://maths.qmul.ac.uk/~pjc/notes/nt.pdf` for both rows and `https://crypto.stanford.edu/pbc/notes/numbertheory/mobius.html` for the complementary-divisor form in the totient example. No item-body change is proposed.

## W3-CI-006 — the non-locally-finite counterexample omits the target that proves N is infinite

Class: **(b) citation-precision repair**. Recommended A3 disposition: add the exact already-proved target.

In `cex-a-non-locally-finite-poset`, fact F1 says that `N` is infinite and cites `def-natural-numbers` and `def-countable`. Their primary Definition sections define `N` and the size classes but do not prove `N` is not finite. The exact result is claim 4 of `lem-pigeonhole`, whose Statement says `N` is not equinumerous with any natural number and explicitly identifies that as infinitude. Step 1.2 uses F1 to prove the endpoint interval is infinite.

Smallest proposed repair: add `lem-pigeonhole` to `deps` and to F1’s links. Retain the two definitions for notation. The counterexample and its proof are mathematically correct.

## Explicit triage dispositions

- In `lem-divisibility-poset-is-lower-finite-and-factorises`, step 1.1 compresses the fact that the natural initial segment through a fixed positive integer is finite. The current `def-countable` text makes finite naturals explicit and `lem-nat-embeds-int` supplies the integer/natural correspondence. A competent reader closes this immediately; it is within the binding 30-second allowance and is not a repair proposal.
- In `thm-mobius-function-of-a-finite-chain`, step 1.4 constructs the least element of a nonempty finite chain by traversing an enumeration. Nonemptiness is explicit because `(x,y]` contains `y`, and the construction is written out. No choice or citation repair is needed.
- In `cor-inclusion-exclusion-is-boolean-mobius-inversion`, F1 states `x in A_J` iff `J subseteq T(x)` also for `J=empty`. The cited sieve definition states the equivalence for nonempty `J` and separately sets `A_empty=X`; the Given has `x in X`. The combined citation licenses the empty case exactly, so this is not a defect.
- The commutative-ring Möbius inversion extension is proved locally by finite Fubini and integer multiplication. It is not a false generalisation of the field-valued source. The defect is only that current source metadata does not expose the coefficient/convention delta precisely enough.

## Proof-contract and count reconciliation

`research/audit/wave3-A0.md` reports 19 proof-bearing items, but the current scoped files contain 22 phase-format sections: 16 Proofs, three Refutations, and three Counterexamples. The repository’s normative `tools/proof-contract.mjs` scans all four phase headings, including Refutation and Counterexample. The contract therefore follows current disk state and contains all 22, not the stale A0 count. This findings record is the only authorised place for Beta to flag the discrepancy; no A0 file was modified.

Contract census: 22 entries, 93 exact fact/source citation records, 101 numbered derivation records, zero routine-step shortcuts, and 176 boundary dispositions (eight per item). The strict gate reports 0 errors and 0 warnings. Every quote is an exact excerpt from an allowed primary section of the current target. W3-CI-006 is still reported because the existing F1’s quoted Definition text does not establish the claimed infinitude even though the mechanical substring gate can only confirm that the quote is real.

Scoped mechanical checks also pass: precheck reports 22 checked and zero failing, and citecheck reports all 34 scoped items clean with zero heuristic warnings. Risk routing is seven critical, seven high, seven moderate, and one ordinary; all independent risk-review records correctly remain pending for Alpha. Finite smoke has zero selected checks because none of the available enumerators targets these incidence/poset claims.

The cross-wave target hashes were rechecked after contract construction. The four recorded-at-read hashes (`def-countable`, `def-group-power`, `def-integer-power`, and `lem-nat-embeds-int`) are unchanged; `def-natural-numbers` and `def-finite-cardinality` were reread from their current text at finalization. No concurrent target edit invalidated a citation judgment.

The page summary for `incidence-algebras-and-mobius-inversion` has exactly two nonempty mathematical paragraphs and does not describe page mechanics. The examples page has no authored body. No page-prose repair is proposed.

## Coverage statement

**Every one of the 34 scoped mathematical-content items was read. Every numbered step in all 22 current Proof, Refutation, and Counterexample sections was read. Every Facts & Assumptions citation, every declared dependency edge, every cited external source, both page bodies, and all Remarks in the pair were read. The five cross-wave real-analysis targets were checked against their current on-disk text. There are no coverage exceptions.**

## A4 application record — 2026-08-04

A3 approved W3-CI-001 through W3-CI-006 and all 34 provenance rows. They are now applied. No `touchlog` snapshot was taken, as explicitly directed by the orchestrator; the existing stage-level `pre-A4` snapshot is the governing baseline. No id, reading-order entry, page body, Statement, proof claim, numbered derivation, or Remark was changed. The only judge-visible edit is W3-CI-006's added dependency citation in F1; its obsolete owner-audit stamp was removed and no replacement certification was written.

### Class (c): 34 provenance retags

For every row below, the old text was **no `provenance` block** and the new text is the displayed `statement / proof` pair. Each row's source URL, source-section detail, convention delta, and full rationale remain recorded under the same id in `wave3-combinatorics-incidence.provenance.jsonl`; the final column identifies the source clause or elementary verification. These were pure frontmatter/source-metadata retags, so the 33 unaffected historical `audited` stamps were retained. There was no legacy `authorship` line in any of the 34 items.

| id | new `statement / proof` | class | source or derivation |
|---|---|---|---|
| `def-poset-interval-and-finiteness-conditions` | `ai-altered / not-applicable` | (c) | Stanley §§3.6–3.7; local synthesis of interval/local/lower/upper finiteness conventions |
| `def-finite-sum-in-a-commutative-monoid` | `ai-altered / not-applicable` | (c) | Andrade–da Cruz, finite-set construction, enumeration independence, empty-product/additive analogue |
| `lem-finite-sum-reindexing-and-fubini` | `ai-altered / ai-altered` | (c) | Andrade–da Cruz enumeration invariance and finite-set recursion; local additive Fubini packaging |
| `def-incidence-algebra-and-convolution` | `literature-derived / not-applicable` | (c) | Guan–Zhang §2.1, locally finite poset over a commutative unital ring |
| `def-delta-and-zeta-incidence-functions` | `ai-altered / not-applicable` | (c) | Gotti delta/zeta values plus Guan–Zhang coefficient-ring convention |
| `lem-incidence-convolution-associative-and-distributive` | `literature-derived / ai-altered` | (c) | Guan–Zhang §2.1 and Gotti's finite double-sum proof |
| `thm-incidence-functions-form-a-ring` | `ai-altered / ai-altered` | (c) | Guan–Zhang/Gotti incidence-algebra ring structure, locally expanded |
| `lem-incidence-convolution-inverses-by-recursion` | `ai-altered / ai-altered` | (c) | Gotti's two recursions plus Hameister–Rao–Simpson Proposition 2.8 unit criterion |
| `thm-incidence-algebra-invertibility-criterion` | `ai-altered / ai-altered` | (c) | Gotti field criterion plus Hameister–Rao–Simpson Proposition 2.8 over a commutative ring |
| `def-poset-mobius-function` | `ai-altered / not-applicable` | (c) | Stanley §3.7 plus Guan–Zhang's arbitrary-ring convolution convention |
| `lem-poset-mobius-recurrence` | `literature-derived / ai-altered` | (c) | Stanley §3.7, both recurrence orientations |
| `thm-mobius-inversion-for-lower-finite-posets` | `ai-altered / ai-altered` | (c) | Stanley Proposition 3.7.1, extended locally from a field to a commutative ring |
| `cor-mobius-inversion-for-finite-posets` | `ai-altered / ai-generated` | (c) | Stanley's finite specialization; direct local ideal/filter finiteness derivation |
| `thm-mobius-function-of-a-product-poset` | `literature-derived / ai-altered` | (c) | Stanley Proposition 3.8.2 and its recurrence-sum factorisation |
| `thm-mobius-function-of-a-boolean-lattice` | `literature-derived / ai-altered` | (c) | Stanley §3.8 Boolean formula; local sign-reversing proof expansion |
| `cor-inclusion-exclusion-is-boolean-mobius-inversion` | `literature-derived / ai-altered` | (c) | Stanley §3.8 inclusion–exclusion identification |
| `thm-mobius-function-of-a-finite-chain` | `literature-derived / ai-altered` | (c) | Stanley §3.7 three-case chain formula; local recurrence induction |
| `def-divisibility-poset-on-positive-integers` | `literature-derived / not-applicable` | (c) | Stanley §3.8.4 divisibility poset and divisor intervals |
| `lem-divisibility-poset-is-lower-finite-and-factorises` | `ai-altered / ai-altered` | (c) | Stanley §3.8.4 product-of-prime-exponent chains; local scaling/lower-finiteness additions |
| `def-number-theoretic-mobius-function` | `literature-derived / not-applicable` | (c) | Cameron §7.5, squarefree prime-factor definition including `mu(1)=1` |
| `thm-number-theoretic-and-poset-mobius-agree` | `literature-derived / ai-altered` | (c) | Stanley §3.8.4, `mu_P(r,s)=mu(s/r)` |
| `cor-classical-mobius-inversion` | `ai-altered / ai-altered` | (c) | Cameron Theorem 7.9 and Stanford complementary-divisor form; commutative-ring extension |
| `cor-number-theoretic-mobius-is-multiplicative` | `literature-derived / ai-generated` | (c) | Stanford multiplicativity statement; direct local product-poset proof |
| `fs-every-poset-has-an-incidence-algebra` | `ai-altered / ai-generated` | (c) | Gotti/Guan–Zhang local-finiteness hypothesis; direct bottom/top/infinite-antichain refutation |
| `fs-mobius-depends-only-on-interval-cardinality` | `ai-altered / ai-generated` | (c) | Stanley chain/Boolean/Hall formulas; direct chain-versus-diamond calculation |
| `fs-classical-mobius-inversion-is-unrelated-to-inclusion-exclusion` | `ai-altered / ai-generated` | (c) | Stanley §3.8 identifies both as poset Möbius inversion |
| `ex-mobius-on-the-boolean-lattice-b3` | `ai-altered / not-supplied` | (c) | direct finite specialization of Stanley's Boolean formula |
| `ex-mobius-on-a-four-element-chain` | `ai-altered / not-supplied` | (c) | direct finite specialization of Stanley's chain formula |
| `ex-mobius-on-the-divisor-lattice-of-twelve` | `ai-altered / not-supplied` | (c) | direct specialization of Stanley §3.8.4 to the divisors of 12 |
| `ex-mobius-on-the-diamond-poset` | `ai-altered / not-supplied` | (c) | direct `B_2` specialization of Stanley's Boolean formula |
| `ex-euler-totient-recovered-by-mobius-inversion` | `ai-altered / not-supplied` | (c) | Cameron Theorem 7.11 and Stanford complementary-divisor identity, specialized to 12 |
| `cex-a-non-locally-finite-poset` | `ai-altered / ai-generated` | (c) | Gotti/Guan–Zhang local-finiteness requirement; direct verification of the selected obstruction |
| `cex-an-incidence-function-with-nonunit-diagonal` | `ai-generated / ai-generated` | (c) | direct two-element-chain calculation: `(f*g)(0,0)=0_R`, not `1_R` |
| `cex-equal-size-intervals-with-different-mobius-values` | `ai-generated / ai-generated` | (c) | direct chain/diamond endpoint calculation, values 0 and 1 |

### Classes (b)/(c): reader-visible reference corrections

Full source URLs used below: Andrade–da Cruz = `https://arxiv.org/abs/2605.08089`; Guan–Zhang = `https://arxiv.org/abs/2412.18049`; Hameister–Rao–Simpson = `https://www-users.cse.umn.edu/~reiner/REU/HameisterRaoSimpson2017.pdf`; Stanley PDF = `https://math.mit.edu/~rstan/ec/ec1.pdf`; Cameron = `https://maths.qmul.ac.uk/~pjc/notes/nt.pdf`; Stanford = `https://crypto.stanford.edu/pbc/notes/numbertheory/mobius.html`.

| affected item(s) | old text | new text | class | source/validation |
|---|---|---|---|---|
| `def-finite-sum-in-a-commutative-monoid`, `lem-finite-sum-reindexing-and-fubini` | sole Gotti incidence-notes reference | sole Andrade–da Cruz reference | (b), W3-CI-001 | enumeration-independent finite construction and additive analogue |
| six core items `def-incidence-algebra-and-convolution` through `thm-incidence-algebra-invertibility-criterion` | Gotti only | retain Gotti and add Guan–Zhang | (b), W3-CI-002 | Guan–Zhang §2.1 has the locally finite poset/commutative-unital-ring convention |
| `lem-incidence-convolution-inverses-by-recursion`, `thm-incidence-algebra-invertibility-criterion` | no ring-unit reference | add Hameister–Rao–Simpson Proposition 2.8 | (b), W3-CI-002 | exact diagonal-unit criterion over a commutative ring |
| `thm-mobius-function-of-a-boolean-lattice`, `cor-inclusion-exclusion-is-boolean-mobius-inversion`, `thm-mobius-function-of-a-finite-chain`, `fs-mobius-depends-only-on-interval-cardinality`, `fs-classical-mobius-inversion-is-unrelated-to-inclusion-exclusion`, `ex-mobius-on-the-boolean-lattice-b3`, `ex-mobius-on-a-four-element-chain`, `ex-mobius-on-the-diamond-poset`, `cex-equal-size-intervals-with-different-mobius-values` | Stanley `ec1toc.html` table-of-contents URL | Stanley full `ec1.pdf` | (b), W3-CI-003 | full §§3.6–3.8 content instead of a landing page |
| `def-divisibility-poset-on-positive-integers`, `lem-divisibility-poset-is-lower-finite-and-factorises`, `thm-number-theoretic-and-poset-mobius-agree`, `ex-mobius-on-the-divisor-lattice-of-twelve` | MIT 18.785 Problem Set 8 | Stanley PDF §§3.8.4–3.8.5 | (b), W3-CI-004 | exact divisor-poset/product-of-chains/agreement content |
| `cor-number-theoretic-mobius-is-multiplicative` | MIT 18.785 Problem Set 8 | Stanford Möbius notes | (b), W3-CI-004 | exact multiplicativity statement |
| `def-number-theoretic-mobius-function` | retain MIT problem set plus imprecise Encyclopedia of Mathematics duplicate | retain MIT problem set and replace duplicate with Cameron §7.5 | (b), W3-CI-005 | exact squarefree prime-factor definition |
| `ex-euler-totient-recovered-by-mobius-inversion` | LibreTexts phi-definition/multiplicativity page | Cameron Theorem 7.11 plus Stanford complementary-divisor form | (b), W3-CI-005 | exact `sum phi(d)=n` and inverted formula |
| `def-poset-interval-and-finiteness-conditions` | Gotti incidence notes | Stanley PDF §§3.6–3.7 | (c) source support | approved row's exact interval/finiteness source |
| `def-poset-mobius-function` | Gotti only | retain Gotti; add Stanley PDF and Guan–Zhang | (c) source support | approved row's Möbius-inverse and coefficient-domain sources |
| `lem-poset-mobius-recurrence`, `thm-mobius-inversion-for-lower-finite-posets`, `cor-mobius-inversion-for-finite-posets`, `thm-mobius-function-of-a-product-poset` | Gotti only | retain Gotti and add Stanley PDF | (c) source support | approved rows' exact recurrence/inversion/product clauses |
| `cor-classical-mobius-inversion` | Encyclopedia of Mathematics Möbius-series page | Cameron Theorem 7.9 plus Stanford complementary-divisor form | (c) source support | approved row's exact scalar formulas and codomain delta |
| `fs-every-poset-has-an-incidence-algebra`, `cex-a-non-locally-finite-poset` | Gotti only | retain Gotti and add Guan–Zhang | (c) source support | approved rows' locally finite arbitrary-ring convention |

### Class (b): W3-CI-006 material dependency-citation repair

Item: `cex-a-non-locally-finite-poset`.

- Old `deps` text: `[fs-every-poset-has-an-incidence-algebra, def-incidence-algebra-and-convolution, def-poset-interval-and-finiteness-conditions, def-countable, def-natural-numbers]`.
- New `deps` text: `[fs-every-poset-has-an-incidence-algebra, def-incidence-algebra-and-convolution, def-poset-interval-and-finiteness-conditions, def-countable, def-natural-numbers, lem-pigeonhole]`.
- Old F1 text: `[F1] $\mathbb N$ is the infinite set of natural numbers ([[def-natural-numbers]], [[def-countable]]).`
- New F1 text: `[F1] $\mathbb N$ is the infinite set of natural numbers ([[def-natural-numbers]], [[def-countable]], [[lem-pigeonhole]]).`
- Source/derivation: `lem-pigeonhole` Statement claim 4 says `N` is not equinumerous with any natural number; `def-countable` defines finite as equinumerous with a natural number. Hence `N` is infinite. Step 1.2 is the sole use. The refreshed proof contract records that exact source clause and use.
- Verification transition: old `verification.audited: 2026-07-31`; new text has no `audited` or `judge` block pending independent A6 certification. No self-certification stamp was added. Provenance remains the A3-approved `ai-altered / ai-generated`; the already `ai-generated` proof component is not relabelled.

### A4 validation

- The mandated reflow pass was run on all 22 proof-bearing items. Twenty were unchanged. It exposed a reflow edge case by collapsing the fenced TikZ Remarks in `cex-a-non-locally-finite-poset` and `cex-equal-size-intervals-with-different-mobius-values`; those two blocks were restored byte-for-byte before validation. No proof step or mathematical text was changed by reflow.
- Final precheck: 22/22 pass, no REPAIR stratification printed.
- Strict proof contract: 0 errors, 0 warnings, 22/22 checked. The merged entry for `cex-a-non-locally-finite-poset` now includes the `F1 -> lem-pigeonhole` citation and its sole use in step 1.2.
- Audit content policy: 34 scoped, 0 errors. Its two warnings are the legacy audit-mode `generation.role` warnings for the two positively determined generated counterexamples; A3 approved only the recorded provenance retags and did not authorize new generation metadata, so they remain for the orchestrator/Alpha workflow.
- Citecheck: 34/34 clean. Rendercheck: 34/34 clean, including both restored TikZ fences. Prosecheck: 34/34 clean. Fwdcheck: exit 0. Extcheck: exit 0, with no warning involving this batch.
- Depcheck has no dependency, resolution, cycle, provenance, or citation error involving this batch. Its sole batch-local error is the intentional `published-unaudited` state of `cex-a-non-locally-finite-poset`, pending independent A6 certification; 16 sibling A4 material repairs are in the same expected state concurrently.
- Scoped `git diff --check`: pass. The final item diff changes all 34 frontmatters and exactly one body line, W3-CI-006's approved F1 citation.
