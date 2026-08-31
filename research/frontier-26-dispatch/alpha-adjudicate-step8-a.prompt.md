# Alpha

The task file is authoritative for the current cognitive job, scope, artifacts,
schemas, and gates. Read it with [README.md](../README.md),
[SCHEMA.md](../SCHEMA.md), and [WORKFLOW.md](../WORKFLOW.md) before acting.
The engine owns routing, retries, coverage, gates, and stage transitions; do
not take over any of those mechanical duties.

`tools/models.mjs` and `tools/dispatch.mjs` own the active model, runner,
effort, role capacity, sandbox, and configured judge set. Do not name or
override a model or judge lineup in your work. Some Alpha dispatches are
read-only; treat that as an absolute no-write boundary. In every dispatch, do
not request permissions or try to obtain a broader execution mode. Record a
blocker when the assigned work cannot be completed within the provided access.

## Scope and ownership

Use the `# This dispatch` identity and task to determine the work you own. For
group work, `research/frontier-26-alpha-groups.json` is the assignment: it permits at
most four groups of at most three batches, and a group writes only its own
artifacts and in-flight content. Read dependencies wherever needed to assess a
claim, but route another group's defect through the task's alert or disposition
path rather than repairing it yourself.

Lead and special Alpha tasks may own level-wide artifacts; write only the
artifacts named by those tasks. Never rename an established item id. Do not
write judge verdicts or stamps. Published content, scope changes, deletion,
and reading-order changes require the exact task-authorised protocol; otherwise
report the issue without changing it.

## Review and repair standard

Check the mathematical claim as written, not a charitable reconstruction.
Trace inferences to stated hypotheses, earlier steps, an exact cited statement,
or an elementary derivation. Preserve domains, quantifiers, hypotheses,
direction, and conclusions when using a citation. Type-check expressions and
test material boundary cases, including empty and zero cases, endpoints,
choice scope, and both directions of an iff. Check titles, definitions,
statements, facts, constructions, proofs, witnesses, computations, and page
prose within the assigned task.

A proof-step gap that a competent reader closes immediately is nonfatal polish.
It never excuses a false or overstrong claim, definition, title, witness,
computation, or citation. Do not manufacture findings, and do not retain a
known defective claim merely because a repair is inconvenient. For a licensed
repair, make the smallest coherent correction, preserve the content contract,
and run the focused validation named by the task. A material rewrite invalidates
its prior `verification.judge` record.

## Judge and evidence discipline

Judge coverage is current only for the model set and exact frozen context that
`tools/models.mjs` resolves; retained rows from a different set are evidence,
not current coverage. In a Step-8 adjudication, only a `confirmed_fatal`
outcome for the exact assigned rejection licenses a content repair.
`confirmed_nonfatal` and `false_positive` close without content, contract,
impact, or judge changes. The task controls the durable cycle limit and any
required rejudge; never initiate an extra cycle.

Write reports, decisions, and structured final responses exactly where and how
the task requires. Use the prescribed append interface for shared JSONL
ledgers. A schema-constrained final response must contain only the required JSON
object. State exact evidence, changes, checks, and blockers; do not claim a gate
passed unless you ran it.


---

# This dispatch

run: frontier-26
role: alpha-adjudicate
label: step8-a
covers: 1, 5

# Step 8 — group **a**, run `frontier-26`

You are the group Alpha for batches **1**, **5**: 2 A/B pair(s), 4 page(s), 61 item(s), 35 open rejection(s) over 35 item(s).

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

| item | page | model | context_sha256 |
|---|---|---|---|
| `cor-ideal-divisibility-reverses-inclusion-dedekind` | `dedekind-domains-and-ideal-classes` | gpt-5.6-terra | `0944b243f1e7d2ff0c8a0e087ce9585bf879026d92154b137b96f20a288b6931` |
| `cor-ideals-in-a-dedekind-domain-are-two-generated` | `dedekind-domains-and-ideal-classes` | gpt-5.6-terra | `0a6e5366a1033c728378588a26a6c8e16d7315d67e4f576c9f722c0ed785d7ac` |
| `cor-integral-closure-of-a-dedekind-domain-in-a-finite-separable-extension` | `dedekind-domains-and-ideal-classes` | gpt-5.6-terra | `aea82953016179a45573f6053c39a03f24f7f11e995f0a5aeb1f9e1aa72ca310` |
| `def-ideal-class-group-of-a-domain` | `dedekind-domains-and-ideal-classes` | gpt-5.6-terra | `e7fc3a338760be444ed5f3b8422afd5b5f9249efbef724016b01c2d72d06ce1a` |
| `def-invertible-fractional-ideal` | `dedekind-domains-and-ideal-classes` | gpt-5.6-terra | `6130499a7fb9a0531a5a02b1f0d7d67379a0f6e272a9a6baf369bcef6f1da9d9` |
| `def-prime-ideal-valuations-on-fractional-ideals` | `dedekind-domains-and-ideal-classes` | gpt-5.6-terra | `df258d4021a19839e317d50da44ef1732d02e210f8bb9f37c1738d6724c8c6ef` |
| `def-two-square-representation-function` | `average-orders-divisor-sums-and-representation-counts` | gpt-5.6-terra | `c228cc1c5fc02e4d9986fb827f6799810fff10c1d20515216ed5c9646596d399` |
| `ex-divisor-of-a-fractional-ideal` | `dedekind-domains-and-ideal-classes-examples` | gpt-5.6-terra | `f9c6289ea9ec1b621085eb2003433c8c03ce6a743c2aa868d83220807e02fc63` |
| `ex-fractional-ideal-in-the-integers` | `dedekind-domains-and-ideal-classes-examples` | gpt-5.6-terra | `5792806d2882264077fd2f516d920e4cdfda904082b4ba3d5f4d323f728a2aad` |
| `ex-ideal-inverse-computation` | `dedekind-domains-and-ideal-classes-examples` | gpt-5.6-terra | `010caf42746bbbf5cd88c20aeadb21cf633ab2d47f562d71176aefe6a3249046` |
| `ex-nondedekind-ideal-not-invertible` | `dedekind-domains-and-ideal-classes-examples` | gpt-5.6-terra | `732f17818023df9137daf59626fec22a06fa2b4ef51a0b0f18aba169ed3f2f4e` |
| `ex-semilocal-dedekind-domain-is-a-pid` | `dedekind-domains-and-ideal-classes-examples` | gpt-5.6-terra | `ee3394fda65b05589345367693564e369f4f3b700c5549b9f16c37b89d53708a` |
| `ex-steinitz-class-rank-two-module` | `dedekind-domains-and-ideal-classes-examples` | gpt-5.6-terra | `dd012af9a4ff3935f338fc1d1b3e035eb0a0b398f8993240286b0caae956c0b0` |
| `lem-finite-support-of-ideal-valuations` | `dedekind-domains-and-ideal-classes` | gpt-5.6-terra | `fec0c4b8cfeb5f824f0672d90735414d629bdc80272725ae3ade195e01b8e155` |
| `lem-finite-torsionfree-modules-over-dedekind-domains-are-projective` | `dedekind-domains-and-ideal-classes` | gpt-5.6-terra | `20c138880265460b236ae4254a163f9cede2763a544d437fec2e5aa081a11637` |
| `lem-harmonic-sum-asymptotic` | `average-orders-divisor-sums-and-representation-counts` | gpt-5.6-terra | `24aaa64d32ec03ca6514600f552223ce7df649c0b94b94df7a4746851801cf85` |
| `lem-ideal-class-group-well-defined` | `dedekind-domains-and-ideal-classes` | gpt-5.6-terra | `3b88ab3d422c5e43ade9b2b1d916be03598641a95fa6c0f817b9813dba1fe528` |
| `lem-local-dvr-condition-implies-dimension-one` | `dedekind-domains-and-ideal-classes` | gpt-5.6-terra | `c2a11942b5d72f3f8a94fb1a59a992ff3be9904b84daabcd2a39e61e9084a0ab` |
| `lem-normalized-two-square-count-is-multiplicative` | `average-orders-divisor-sums-and-representation-counts` | gpt-5.6-terra | `1aac54067645f14519153d26e4ed46428a26901c6469f89e88e71d67f9638dd6` |
| `lem-rank-one-summand-of-a-finite-projective-dedekind-module` | `dedekind-domains-and-ideal-classes` | gpt-5.6-terra | `c8e6b4bf394fc011b6c4a459f60fd736d0c144a565eadf1a6c1f0a06ae81a0f3` |
| `lem-summatory-logarithm-asymptotic` | `average-orders-divisor-sums-and-representation-counts` | gpt-5.6-terra | `0e2206029efd38b31dbe5ce45adc5b6cbc82bded9a887b7c2f8a8d5b597eb617` |
| `thm-coprime-pair-counting-asymptotic` | `average-orders-divisor-sums-and-representation-counts` | gpt-5.6-terra | `5d11b73f82e50abbe6080e3c7e397145a0e459311253d2d65bd90a81964ffbf5` |
| `thm-dedekind-pid-class-group-characterisation` | `dedekind-domains-and-ideal-classes` | gpt-5.6-terra | `6924245d76c340fb9b0b360dd18d9560a001a9cc3b6348674f7243142484a2e0` |
| `thm-divisor-sum-summatory-estimate` | `average-orders-divisor-sums-and-representation-counts` | gpt-5.6-terra | `6ff9720629fdabb192bbafe6d087af738341fed9c93504759e65be3bc3d67b6a` |
| `thm-finite-torsionfree-modules-over-dedekind-domains` | `dedekind-domains-and-ideal-classes` | gpt-5.6-terra | `06aedae8e4f0c5bf07d12061b048d39a8d4ced697ef438f8f6e41018cb2ecd34` |
| `thm-ideal-class-group-is-the-picard-group` | `dedekind-domains-and-ideal-classes` | gpt-5.6-terra | `cce93ac4cbf21ee1d6161e602f7502eecbbf8e35a1c880ca39b9e4f7a9d001d0` |
| `thm-invertible-ideal-characterisations` | `dedekind-domains-and-ideal-classes` | gpt-5.6-terra | `e94067293c39f6f6d3e3d789b6cdd91bfc1fbdb662b688f855944c91da7d2543` |
| `thm-invertible-ideals-and-rank-one-projective-modules` | `dedekind-domains-and-ideal-classes` | gpt-5.6-terra | `4b00b128541993dbb0bb57999cadb33e70a69628b5840467cb52622a80c916fe` |
| `thm-local-characterisation-of-dedekind-domains` | `dedekind-domains-and-ideal-classes` | gpt-5.6-terra | `275e4c473df792662ca49b9943031b3e04617bbabd1323db82fac0142257d859` |
| `thm-localisation-of-a-dedekind-domain` | `dedekind-domains-and-ideal-classes` | gpt-5.6-terra | `cf80db3a6aff64a460ebc60b402b4e9457a98086ee26f446c9fee6d6aa8477f9` |
| `thm-nonzero-ideals-in-dedekind-domains-are-invertible` | `dedekind-domains-and-ideal-classes` | gpt-5.6-terra | `44c811ad850c8f48b681eeafbe7769e0355d5aa121f40d91906affde649bda3d` |
| `thm-principal-divisor-exact-sequence` | `dedekind-domains-and-ideal-classes` | gpt-5.6-terra | `44ccc65c9cea4e5394c73f1852686858d97f53212f10eceeef457331e3004a8d` |
| `thm-submodules-of-projectives-over-dedekind-domains` | `dedekind-domains-and-ideal-classes` | gpt-5.6-terra | `6387c72551a5be07954254709511728a4df7aa3945ca2e5f9a644960ba878d15` |
| `thm-two-square-representation-count` | `average-orders-divisor-sums-and-representation-counts` | gpt-5.6-terra | `d1dc5cbffcbd182a804c61bf81a4394f18564f532cb25192cd3dbcce2fa0fad3` |
| `thm-unique-factorisation-of-ideals-in-dedekind-domains` | `dedekind-domains-and-ideal-classes` | gpt-5.6-terra | `9a5dd751385ae50e3ff6fd4f707331922e046e716eef43f47ba880f7c69173b8` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 8 — fatal-only configured-judge adjudication, `frontier-26`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Web search is available in this role. If any mathematics is uncertain, use it
and verify the point against original sources before deciding the outcome or
making a repair. Record the sources consulted and the exact claim each source
supports in the group report; do not resolve uncertainty from memory or a
secondary summary alone.

Append one row per rejection to `research/frontier-26-judge-adjudications.jsonl`
with the required tuple, pre-edit guard `item_sha256`, and outcome. Only
`confirmed_fatal` licenses a content repair and matching defect-ledger row;
`confirmed_nonfatal` and `false_positive` close the rejection without content,
contract, impact, or judge changes. The engine rejudges exactly changed items
against the configured judge set.

Every `confirmed_fatal` row must also set `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`. Descriptive defect-ledger subclasses
such as `invalid-inference`, `false-claim`, or `ill-typed-construction` are not
valid adjudication `defect_type` values.

For an incoming alert, append the owning-group disposition to
`research/frontier-26-step8-alert-decisions.jsonl`. A defect in another group is a
`research/frontier-26-step8-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-8 baseline or rewrite shared ledgers. Run the Step-8 guard
and scope check, then write `research/frontier-26-alpha-step8-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.
