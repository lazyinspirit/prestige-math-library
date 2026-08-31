# Step 8 — group **a**, run `frontier-26`

You are the group Alpha for batches **1**, **5**: 2 A/B pair(s), 4 page(s), 61 item(s), 0 open rejection(s) over 0 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-26-alpha-a-step8-context.json` is what a group Alpha for this group wrote during step 7,
while the judges were still sweeping and no verdict existed. It records the
conventions your pages fix, which items the rest lean on, which published
dependencies were actually opened, and what already looked thin.

**Its `concerns` list is evidence, not decoration.** Each entry was found with
nobody suggesting where to look. A judge rejection landing at the same place is
two independent readings agreeing and should be very hard to call a
`false_positive`; a rejection landing nowhere near any of them is not thereby
wrong, but it is the case to read most carefully against the text.

It is notes, not authority. Where it and the item files disagree, the files win.

## Read scope, write scope

**You may read the entire library.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-26-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 1 | `dedekind-domains-and-ideal-classes` | A | commutative-algebra | 111.017 | `valuation-rings-and-discrete-valuation-rings-examples`, `solvability-by-radicals-and-kummer-theory` |
| 1 | `dedekind-domains-and-ideal-classes-examples` | B | commutative-algebra | 111.018 | `dedekind-domains-and-ideal-classes` |
| 5 | `average-orders-divisor-sums-and-representation-counts` | A | number-theory | 348.003 | `sums-of-two-squares`, `arithmetic-functions-and-dirichlet-convolution-examples` |
| 5 | `average-orders-divisor-sums-and-representation-counts-examples` | B | number-theory | 348.004 | `average-orders-divisor-sums-and-representation-counts` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `dedekind-domains-and-ideal-classes` — Dedekind Domains and Ideal Classes (33 item(s))

- `def-dedekind-domain` · definition — Dedekind domains
- `lem-dedekind-localisation-at-nonzero-prime-is-dvr` · lemma — Localizing a Dedekind domain at a nonzero prime gives a DVR
- `lem-local-dvr-condition-implies-global-normality` · lemma — Local DVRs at the nonzero primes force global normality
- `lem-local-dvr-condition-implies-dimension-one` · lemma — Local DVRs at the nonzero primes force dimension one
- `thm-local-characterisation-of-dedekind-domains` · theorem — Equivalent local characterizations of Dedekind domains
- `thm-localisation-of-a-dedekind-domain` · theorem — A localization of a Dedekind domain is Dedekind or a field
- `lem-trace-pairing-for-a-finite-separable-extension` · lemma — The trace pairing in a finite separable extension is nondegenerate
- `thm-finite-integral-closure-in-a-finite-separable-extension` · theorem — Finite separable integral closures over normal Noetherian domains are module-finite
- `cor-integral-closure-of-a-dedekind-domain-in-a-finite-separable-extension` · corollary — The integral closure of a Dedekind domain in a finite separable extension is Dedekind
- `rem-separability-is-essential-for-finite-integral-closure` · remark — Why the finite-separable hypothesis is retained in the integral-closure theorem
- `def-fractional-ideal` · definition — Fractional ideals
- `def-product-and-colon-of-fractional-ideals` · definition — Products, colons, and inverse candidates for fractional ideals
- `lem-fractional-ideal-operations-well-defined` · lemma — The basic operations on fractional ideals are well defined
- `def-invertible-fractional-ideal` · definition — Invertible fractional ideals
- `thm-invertible-ideal-characterisations` · theorem — Equivalent characterizations of invertible fractional ideals
- `thm-nonzero-ideals-in-dedekind-domains-are-invertible` · theorem — Every nonzero fractional ideal of a Dedekind domain is invertible
- `def-prime-ideal-valuations-on-fractional-ideals` · definition — Prime-ideal valuations on fractional ideals
- `lem-finite-support-of-ideal-valuations` · lemma — Prime-ideal valuations of a fractional ideal have finite support and add under products
- `thm-unique-factorisation-of-ideals-in-dedekind-domains` · theorem — Unique factorization of nonzero fractional ideals into prime powers
- `cor-ideal-divisibility-reverses-inclusion-dedekind` · corollary — For Dedekind ideals, divisibility reverses inclusion
- `cor-ideals-in-a-dedekind-domain-are-two-generated` · corollary — Every nonzero ideal in a Dedekind domain is generated by two elements
- `def-ideal-class-group-of-a-domain` · definition — The ideal class group
- `lem-ideal-class-group-well-defined` · lemma — The ideal class group quotient is well defined
- `def-divisor-group-of-a-dedekind-domain` · definition — The divisor group of a Dedekind domain
- `thm-principal-divisor-exact-sequence` · theorem — The principal-divisor exact sequence for a Dedekind domain
- `thm-dedekind-pid-class-group-characterisation` · theorem — A Dedekind domain is a PID exactly when its class group is trivial
- `lem-rank-one-projective-embedded-as-a-fractional-ideal` · lemma — A finite rank-one projective module embeds as a fractional ideal
- `thm-invertible-ideals-and-rank-one-projective-modules` · theorem — Invertible fractional ideals are exactly the rank-one projective modules
- `thm-ideal-class-group-is-the-picard-group` · theorem — The ideal class group is the Picard group of rank-one projectives
- `lem-finite-torsionfree-modules-over-dedekind-domains-are-projective` · lemma — Finite torsion-free modules over Dedekind domains are projective
- `lem-rank-one-summand-of-a-finite-projective-dedekind-module` · lemma — A nonzero finite projective module over a Dedekind domain splits off a rank-one summand
- `thm-finite-torsionfree-modules-over-dedekind-domains` · theorem — Finite torsion-free modules over Dedekind domains have Steinitz form
- `thm-submodules-of-projectives-over-dedekind-domains` · theorem — Submodules of projective modules over Dedekind domains are projective

### `dedekind-domains-and-ideal-classes-examples` — Dedekind Domains and Ideal Classes — Examples (9 item(s))

- `ex-pid-as-dedekind-domain` · example — Every nonfield PID is a Dedekind domain with trivial class group
- `ex-semilocal-dedekind-domain-is-a-pid` · example — A semilocal Dedekind domain is a PID
- `ex-fractional-ideal-in-the-integers` · example — A fractional ideal of the integers with positive and negative prime exponents
- `ex-ideal-inverse-computation` · example — Computing an inverse fractional ideal explicitly
- `ex-steinitz-class-rank-two-module` · example — A rank-two module and its Steinitz class
- `ex-dedekind-localisation-is-dvr` · example — Localizing a Dedekind domain at a nonzero prime
- `ex-two-generators-for-a-dedekind-ideal` · example — Constructing two generators for a Dedekind ideal
- `ex-divisor-of-a-fractional-ideal` · example — The divisor and class of a fractional ideal
- `ex-nondedekind-ideal-not-invertible` · example — A noninvertible ideal in a singular one-dimensional domain

### `average-orders-divisor-sums-and-representation-counts` — Average Orders Divisor Sums and Representation Counts (17 item(s))

- `def-summatory-function-and-average-order` · definition — Summatory functions and average orders
- `def-euler-mascheroni-constant` · definition — The Euler-Mascheroni constant
- `lem-harmonic-sum-asymptotic` · lemma — The harmonic sum is log x plus gamma plus O(1/x)
- `thm-dirichlet-hyperbola-method` · theorem — Dirichlet's hyperbola method for summatory convolutions
- `thm-divisor-counting-summatory-estimate` · theorem — The summatory divisor-counting function is x log x plus (2 gamma - 1)x plus O(sqrt x)
- `lem-summatory-logarithm-asymptotic` · lemma — The summatory logarithm is x log x minus x plus O(log x)
- `cor-average-order-of-divisor-counting-function` · corollary — The average order of tau is log n
- `thm-divisor-sum-summatory-estimate` · theorem — The summatory divisor-sum function is pi squared over 12 times x squared plus O(x log x)
- `cor-average-order-of-divisor-sum-function` · corollary — The average order of sigma is (pi squared over 6)n
- `thm-euler-totient-summatory-estimate` · theorem — The summatory totient function is 3 over pi squared times x squared plus O(x log x)
- `cor-average-order-of-euler-totient` · corollary — The average order of Euler's totient is 6n over pi squared
- `thm-coprime-pair-counting-asymptotic` · theorem — Ordered coprime pairs in a box have asymptotic density 6 over pi squared
- `cor-asymptotic-density-of-coprime-pairs` · corollary — The proportion of pairs in {1,...,n}^2 that are coprime tends to 6 over pi squared
- `def-two-square-representation-function` · definition — The two-square representation function r_2
- `lem-normalized-two-square-count-is-multiplicative` · lemma — The normalized two-square count is multiplicative with the expected prime-power values
- `thm-two-square-representation-count` · theorem — The divisor formula for the two-square representation count
- `cor-average-order-of-two-square-representations` · corollary — The average order of the two-square representation count is pi

### `average-orders-divisor-sums-and-representation-counts-examples` — Average Orders Divisor Sums and Representation Counts — Examples (2 item(s))

- `ex-dirichlet-hyperbola-lattice-decomposition` · example — A small lattice decomposition for Dirichlet's hyperbola method
- `ex-divisor-summatory-error-table` · example — The divisor summatory estimate through several small values

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Alerts from other groups

None. No other group flagged an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/frontier-26-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — targeted repair-integrity review, `frontier-26`

The generated repair envelope above is authoritative. It supplies every failed
gate with full output, the exact live ids and rejection tuples, and each id's
run or published scope. Take only its `assigned_items` and `live_tuples`; rerun
the focused gate where it supports item scope.

Complete a repair already licensed by an exact `confirmed_fatal` adjudication,
or correct a documentary contract/manifest/impact/verification record that must
match the current proof. Do not edit a nonfatal or false-positive item, broaden
the scope, run a judge sweep, or run a workflow transition.

Preserve append-only ledgers and return the gate, ids, licensing rows, changed
files, targeted checks, and blocker. This task applies before `8-rejudge`; a
frozen-cutover dispatch uses the Step-8 close task instead.
