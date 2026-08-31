# Frontier 26 — Step 8 group a adjudication

## Scope and outcome

Group `a` owns batches `1` and `5`, four pages, and 61 items. I adjudicated all
35 exact rejection tuples rendered for this group against the current item text
and the cited dependencies opened during the Step-7 read.

- `confirmed_fatal`: 6
- `confirmed_nonfatal`: 21
- `false_positive`: 8
- incoming alerts: 0
- cross-group findings: 0
- repaired and targeted for rejudge: 6 items

No web search was needed. The mathematical statements at issue are standard and
the decisions below were resolved from the current library text, its opened
published dependencies, and elementary derivations. No published item was
changed.

## Exact decisions

The full `(id, model, context_sha256)` keys and pre-edit guard hashes are in
`research/frontier-26-judge-adjudications.jsonl`. The latest row for each key is
the operative append-only decision.

| item | outcome | disposition |
|---|---|---|
| `cor-ideal-divisibility-reverses-inclusion-dedekind` | `confirmed_fatal` | The Statement dropped the Choice hypothesis required by the cited unique-factorization theorem. Choice was restored in the Statement and Given block. |
| `cor-ideals-in-a-dedekind-domain-are-two-generated` | `confirmed_fatal` | The Statement dropped the Choice hypothesis required throughout its factorization proof. Choice was restored in the Statement and Given block. |
| `cor-integral-closure-of-a-dedekind-domain-in-a-finite-separable-extension` | `confirmed_nonfatal` | Transitivity of integrality is a standard short bridge; the claim and proof route are correct, and no false or overstrong conclusion results. |
| `def-ideal-class-group-of-a-domain` | `false_positive` | The ambient fractional-ideal group is already established by the earlier invertibility/factorization results; the following lemma only has to check the principal subgroup and quotient product. |
| `def-invertible-fractional-ideal` | `confirmed_nonfatal` | The immediately preceding colon definition is justified by the well-definedness lemma. The missing direct citation is presentation-level and does not make the definition ill-typed in page order. |
| `def-prime-ideal-valuations-on-fractional-ideals` | `confirmed_nonfatal` | Clearing a denominator reduces a fractional ideal to an integral DVR ideal, and subtracting the denominator's valuation yields the unique integer exponent. The omitted two-line reduction is nonfatal. |
| `def-two-square-representation-function` | `confirmed_nonfatal` | Finiteness follows immediately from `|x|,|y|≤sqrt(n)`. The definition is correct; the omitted bound is a short well-definedness note. |
| `ex-divisor-of-a-fractional-ideal` | `confirmed_fatal` | `div` was applied to the fractional ideal `I`, outside the cited map's domain `K^times`. The display now reads `div(40/9)`, the fact block states the map accurately, and Choice is retained from the cited exact-sequence theorem. |
| `ex-fractional-ideal-in-the-integers` | `confirmed_nonfatal` | The displayed factorization follows directly from ordinary integer prime factorization. The unnecessary appeal to the Choice-scoped general theorem is a citation-scope blemish, not a false computation. |
| `ex-ideal-inverse-computation` | `false_positive` | Step 1.1 computes the colon directly and step 2.1 multiplies the generators directly. The final comparison with general factorization is optional and carries no load. |
| `ex-nondedekind-ideal-not-invertible` | `confirmed_nonfatal` | The one-dimensionality of `k[t]` is standard and the cusp computation is correct. The missing dimension citation is a short dependency gap. |
| `ex-semilocal-dedekind-domain-is-a-pid` | `confirmed_fatal` | The factorization and class-group theorems used in the proof are Choice-scoped. Choice was restored in the Example and Given block. |
| `ex-steinitz-class-rank-two-module` | `confirmed_nonfatal` | An invertible fractional ideal is finite projective of rank one by an earlier theorem, so `R⊕I` is finite torsion-free of rank two. The cited decomposition theorem was used in the wrong direction, but the bridge is immediate. |
| `lem-finite-support-of-ideal-valuations` | `false_positive` | In a commutative ring maximal ideals are prime; a nonzero prime in a dimension-one domain cannot lie strictly below another prime. This elementary derivation licenses the step. |
| `lem-finite-torsionfree-modules-over-dedekind-domains-are-projective` | `confirmed_nonfatal` | A finite module over the Noetherian ring is finitely presented, so its local section clears finitely many denominators. The omitted finite-presentation bridge is real but short and does not alter the claim. |
| `lem-harmonic-sum-asymptotic` | `confirmed_nonfatal` | Decrease of `1/t` is elementary order arithmetic, while the sharper error follows by the usual telescoping integral comparison. The cited item does not state monotonicity verbatim, but the theorem remains correct. |
| `lem-ideal-class-group-well-defined` | `false_positive` | The ambient fractional-ideal group is already part of the preceding definition and its factorization dependency. This lemma correctly proves that principal fractional ideals form a subgroup and that multiplication descends. |
| `lem-local-dvr-condition-implies-dimension-one` | `confirmed_nonfatal` | The proof omits the standard fact that maximal ideals of commutative rings are prime. That is an immediate local bridge, not a false claim. |
| `lem-normalized-two-square-count-is-multiplicative` | `confirmed_nonfatal` | The source-backed prime-exponent formula is correct. Canonical factorization and disjoint prime support for coprime factors should have been cited explicitly, but the omission is nonfatal. |
| `lem-rank-one-summand-of-a-finite-projective-dedekind-module` | `confirmed_nonfatal` | A surjection onto a projective module splits by the standard characterization of projectivity. The omitted citation is a one-step dependency gap. |
| `lem-summatory-logarithm-asymptotic` | `confirmed_nonfatal` | The integral formula for `log`, positivity of `1/t`, and integral monotonicity give the required monotonicity. The current citation route is terse but the inference is immediate. |
| `thm-coprime-pair-counting-asymptotic` | `confirmed_nonfatal` | The boundary families are counted by the defining property of Euler's totient. The missing direct totient-definition citation is nonfatal. |
| `thm-dedekind-pid-class-group-characterisation` | `confirmed_fatal` | Step 1.2 invokes the Choice-scoped factorization theorem. Choice was restored in the Statement and Given block. |
| `thm-divisor-sum-summatory-estimate` | `confirmed_nonfatal` | The needed tail estimate is the elementary comparison `sum_{m>M}m^{-2}≤1/M`. Its omission is a short proof gap, and the stated asymptotic is correct. |
| `thm-finite-torsionfree-modules-over-dedekind-domains` | `false_positive` | In the rank-one case, [L1] first makes `M` finite projective and [L3] explicitly applies to a finite projective with `M⊗K≅K`. The rejection overlooks the first formulation of [L3]. |
| `thm-ideal-class-group-is-the-picard-group` | `confirmed_nonfatal` | The earlier theorem that all nonzero fractional ideals in a Dedekind domain are invertible supplies the map's full domain. The missing direct dependency is nonfatal. |
| `thm-invertible-ideal-characterisations` | `confirmed_nonfatal` | [L1] inaccurately attributes localisation to the operations lemma. Localising a fractional ideal is nevertheless standard and the argument is correct; this is citation polish only. |
| `thm-invertible-ideals-and-rank-one-projective-modules` | `confirmed_nonfatal` | A finite projective localises to a finite free module over each local ring, and its generic rank forces that local rank to be one. The omitted standard bridge is nonfatal. |
| `thm-local-characterisation-of-dedekind-domains` | `confirmed_nonfatal` | The extension-contraction claim for `pR_m` is the standard prime correspondence for localisation. It should be cited, but it is a short proof-step gap. |
| `thm-localisation-of-a-dedekind-domain` | `confirmed_nonfatal` | Nonzero primes are maximal in a dimension-one domain by the elementary prime-chain argument. The proof is terse but the statement is correct. |
| `thm-nonzero-ideals-in-dedekind-domains-are-invertible` | `false_positive` | A maximal ideal in a commutative ring is prime, so the cited nonzero-prime localisation lemma applies directly. |
| `thm-principal-divisor-exact-sequence` | `confirmed_fatal` | Every substantive step invokes the Choice-scoped factorization theorem. Choice was restored in the Statement and Given block. |
| `thm-submodules-of-projectives-over-dedekind-domains` | `false_positive` | For nonzero `r`, flatness preserves the injection `R --r--> R`, so multiplication by `r` on `P` is injective. Thus flat modules over domains are torsion-free by an elementary derivation. |
| `thm-two-square-representation-count` | `confirmed_nonfatal` | The divisor decomposition for coprime products follows from canonical prime factorization. The missing direct citation is nonfatal and the multiplicativity proof is correct. |
| `thm-unique-factorisation-of-ideals-in-dedekind-domains` | `false_positive` | Negative prime powers use inverse fractional ideals, already available because every nonzero fractional ideal is invertible. The notation is licensed by the preceding development. |

## Repairs and rejudge targets

The six rejudge targets are:

1. `cor-ideal-divisibility-reverses-inclusion-dedekind`
2. `cor-ideals-in-a-dedekind-domain-are-two-generated`
3. `thm-principal-divisor-exact-sequence`
4. `thm-dedekind-pid-class-group-characterisation`
5. `ex-semilocal-dedekind-domain-is-a-pid`
6. `ex-divisor-of-a-fractional-ideal`

No nonfatal or false-positive item was edited. No alert or published-repair row
was needed.

## Validation and blockers

- Focused `precheck` passed on all six repaired items: 6 checked, 0 failing.
- `depcheck --quiet` exited 0 with no errors; it reported 303 standing warnings.
- `defect-ledger validate --run frontier-26` passed: 179 then 185 run rows,
  0 validation errors after the two append transactions.
- The exact group-a join reports 35 scoped rejections, 0 unadjudicated, with
  counts 6 fatal / 21 nonfatal / 8 false positive.
- `step8-scope check --run frontier-26` was run and reported four groups, 441
  partitioned items, and 171 open routed rejections level-wide at that moment.
  Group `a` itself had none remaining by the exact join.
- The corrected `step8-guard` recognizes all 6 group-a edits as licensed. Its
  latest run reported 60 changed items and 54 errors, all on items owned by
  other concurrently active groups.

One durable-record caveat remains. The first append used the judge-form hashes
instead of the required guard-form pre-edit hashes. Because both ledgers are
append-only, I corrected the decisions by appending later exact-tuple rows with
an `at` timestamp and the reconstructed full guard hashes; all six prefixes
match the `pre-step8` touch snapshot. I likewise appended six guard-hash defect
rows so the exact fatal-to-defect join succeeds. The earlier six defect rows
remain as superseded audit evidence, so the generated aggregate currently
counts those six defects twice. There is no task-authorised rewrite or
supersession field that can remove that duplicate accounting in this dispatch.
This is the only group-a blocker; the mathematics, exact adjudication join,
repair licences, and rejudge targets are otherwise closed.
