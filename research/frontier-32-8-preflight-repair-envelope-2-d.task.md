# Exact Step-8 repair envelope — 8-preflight, round 2

The JSON envelope below is the authority for this dispatch. It contains every failing gate from the battery,
complete relevant diagnostic records, exact current rejection tuples, and explicit run/published ownership.
The full_evidence file retains the original untruncated battery output and all ownership assignments.
Read its relevant sections if a diagnostic is ambiguous; do not infer absence from this scoped view.
Act only on `assigned_items` and `live_tuples`; do not substitute the latest event-log row.

```json
{
  "version": 1,
  "run": "frontier-32",
  "stage": "8-preflight",
  "round": 2,
  "mode": "preflight",
  "group": "d",
  "full_evidence": "research/frontier-32-8-preflight-repair-evidence-2-34c2b4ba6dac38cba29d34c51eca53aeb9f463712a89a52f94d70b84769af250.json",
  "full_evidence_sha256": "34c2b4ba6dac38cba29d34c51eca53aeb9f463712a89a52f94d70b84769af250",
  "failures": [
    {
      "id": "rendercheck",
      "stage": "8-preflight",
      "why": "FAIL",
      "output": "  [multiline-display] items/def-triangulated-category-axiom-tr-four-octahedral.md: display math must be one source line between `$$`; a hard line break mis-renders\n      $$ X\\xrightarrow fY\\xrightarrow{p_f}Q_f\\xrightarrow{d_f}X[1],\\qquad X\\xrightarrow{gf}Z\\xrightarr…\n  [multiline-display] items/def-triangulated-category-axiom-tr-four-octahedral.md: display math must be one source line between `$$`; a hard line break mis-renders\n      $$Q_f\\xrightarrow aQ_{gf}\\xrightarrow bQ_g \\xrightarrow{p_f[1]\\circ d_g}Q_f[1]$$\n\n2 ERROR(s) across 15363 file(s)\n\nFAIL\n",
      "named_ids": []
    },
    {
      "id": "proof-contract",
      "stage": "8-preflight",
      "why": "ERROR citation-uses [thm-karp-lipton-collapse]: L2 -> thm-circuit-sat-is-np-complete needs every proof step that cites L2",
      "output": "proof-contract: 15 error(s), 0 warning(s), 478/478 item(s) checked\nERROR step-entry-input-fact-missing [thm-riemann-von-mangoldt-zero-counting]: step-1-1 names missing fact L1\nERROR step-entry-input-fact-missing [lem-local-logarithmic-derivative-zeta]: step-2-1 names missing fact L1\nERROR step-entry-input-fact-missing [lem-von-mangoldt-explicit-formula-residues]: step-2-1 names missing fact L1\nERROR step-entry-input-fact-missing [thm-von-mangoldt-explicit-formula-smoothed]: step-2-1 names missing fact L1\nERROR step-entry-input-fact-missing [thm-different-exponent-in-tame-and-wild-ramification]: step-1-1 names missing fact L1\nERROR step-entry-input-fact-missing [thm-different-exponent-in-tame-and-wild-ramification]: step-2-1 names missing fact L1",
      "named_ids": [
        "thm-riemann-von-mangoldt-zero-counting",
        "lem-local-logarithmic-derivative-zeta",
        "lem-von-mangoldt-explicit-formula-residues",
        "thm-von-mangoldt-explicit-formula-smoothed",
        "thm-different-exponent-in-tame-and-wild-ramification"
      ]
    }
  ],
  "mechanical_residue": "",
  "live_items": [
    {
      "id": "thm-riemann-von-mangoldt-zero-counting",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-local-logarithmic-derivative-zeta",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-von-mangoldt-explicit-formula-residues",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-von-mangoldt-explicit-formula-smoothed",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-different-exponent-in-tame-and-wild-ramification",
      "scope": "run",
      "owner": "d"
    }
  ],
  "assigned_items": [
    {
      "id": "thm-riemann-von-mangoldt-zero-counting",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-local-logarithmic-derivative-zeta",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-von-mangoldt-explicit-formula-residues",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-von-mangoldt-explicit-formula-smoothed",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-different-exponent-in-tame-and-wild-ramification",
      "scope": "run",
      "owner": "d"
    }
  ],
  "live_tuples": []
}
```

---

# Step 8 adjudication — group **d**, run `frontier-32`

You are the group Alpha for batches **7**, **16**, **17**: 4 A/B pair(s), 8 page(s), 97 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-32-alpha-d-step8-context.json` is what a group Alpha for this group wrote during step 7,
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

**Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-32-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 7 | `perron-inversion-and-the-explicit-formula` | A | number-theory | 348.013 | `primitive-dirichlet-l-functions-and-functional-equations-examples` |
| 7 | `perron-inversion-and-the-explicit-formula-examples` | B | number-theory | 348.014 | `perron-inversion-and-the-explicit-formula` |
| 7 | `prime-ideal-decomposition-ramification-and-the-different` | A | number-theory | 365.913 | `number-fields-rings-of-integers-and-discriminants-examples` |
| 7 | `prime-ideal-decomposition-ramification-and-the-different-examples` | B | number-theory | 365.914 | `prime-ideal-decomposition-ramification-and-the-different` |
| 16 | `homomorphisms-between-verma-modules-and-linkage` | A | lie-theory | 510.005 | `verma-modules-and-shapovalov-forms-examples` |
| 16 | `homomorphisms-between-verma-modules-and-linkage-examples` | B | lie-theory | 510.006 | `homomorphisms-between-verma-modules-and-linkage` |
| 17 | `schur-indices-and-fields-of-definition` | A | representation-theory | 510.035 | `brauer-induction-and-elementary-subgroups-examples` |
| 17 | `schur-indices-and-fields-of-definition-examples` | B | representation-theory | 510.036 | `schur-indices-and-fields-of-definition` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `perron-inversion-and-the-explicit-formula` — Perron Inversion and the Explicit Formula (14 item(s))

- `def-starred-summatory-function` · definition
- `lem-perron-kernel` · lemma
- `lem-truncated-perron-kernel` · lemma
- `thm-perron-formula` · theorem
- `thm-truncated-perron-formula` · theorem
- `def-half-weighted-chebyshev-psi` · definition
- `def-riemann-zeta-zero-counting` · definition
- `thm-riemann-von-mangoldt-zero-counting` · theorem
- `cor-zeta-zero-count-unit-interval` · corollary
- `lem-local-logarithmic-derivative-zeta` · lemma
- `lem-logarithmic-derivative-zeta-left-half-plane` · lemma
- `lem-von-mangoldt-explicit-formula-residues` · lemma
- `thm-von-mangoldt-explicit-formula-smoothed` · theorem
- `thm-von-mangoldt-explicit-formula-truncated` · theorem

### `perron-inversion-and-the-explicit-formula-examples` — Perron Inversion and the Explicit Formula — Examples (7 item(s))

- `ex-perron-kernel-at-and-away-from-the-jump` · example
- `ex-perron-formula-for-a-finite-dirichlet-polynomial` · example
- `ex-von-mangoldt-residue-table` · example
- `ex-smoothed-versus-sharp-explicit-formula` · example
- `ex-selecting-an-admissible-contour-height` · example
- `cex-an-unordered-infinite-zero-sum-is-not-a-formula` · counterexample
- `cex-right-continuous-psi-has-the-wrong-perron-endpoint` · counterexample

### `prime-ideal-decomposition-ramification-and-the-different` — Prime Ideal Decomposition Ramification and the Different (24 item(s))

- `def-absolute-norm-of-an-ideal` · definition
- `lem-nonzero-number-field-ideal-has-finite-quotient` · lemma
- `thm-number-field-integral-ideal-factorisation-in-zf` · theorem
- `thm-principal-ideal-norm-is-absolute-field-norm` · theorem
- `thm-ideal-norm-is-multiplicative` · theorem
- `cor-norm-of-a-prime-ideal` · corollary
- `def-prime-above-and-residue-degree` · definition
- `def-ramification-index` · definition
- `thm-fundamental-identity-for-primes-in-number-fields` · theorem
- `def-split-inert-ramified-and-unramified-prime` · definition
- `thm-ramification-and-residue-degrees-in-towers` · theorem
- `thm-dedekind-kummer-prime-factorisation` · theorem
- `cor-eisenstein-prime-is-totally-ramified` · corollary
- `thm-ramified-primes-and-the-number-field-discriminant` · theorem
- `cor-only-finitely-many-primes-ramify` · corollary
- `def-trace-dual-and-codifferent-of-a-number-field` · definition
- `lem-codifferent-is-a-fractional-ideal` · lemma
- `def-different-of-a-number-field` · definition
- `thm-different-of-a-monogenic-number-field` · theorem
- `thm-discriminant-is-the-norm-of-the-different` · theorem
- `thm-prime-support-of-the-different-is-ramification` · theorem
- `def-tame-and-wild-ramification` · definition
- `thm-different-exponent-in-tame-and-wild-ramification` · theorem
- `cor-discriminant-valuation-from-different-exponents` · corollary

### `prime-ideal-decomposition-ramification-and-the-different-examples` — Prime Ideal Decomposition Ramification and the Different — Examples (8 item(s))

- `ex-prime-factorization-in-quadratic-fields` · example
- `ex-dedekind-kummer-in-a-cubic-field` · example
- `cex-dedekind-kummer-without-the-index-hypothesis` · counterexample
- `ex-eisenstein-total-ramification` · example
- `ex-quadratic-field-codifferent` · example
- `ex-cyclotomic-different-preview` · example
- `ex-tame-different-exponent` · example
- `ex-wild-different-exponent` · example

### `homomorphisms-between-verma-modules-and-linkage` — Homomorphisms Between Verma Modules and Linkage (20 item(s))

- `prop-verma-homomorphisms-are-singular-vectors` · proposition — Verma homomorphisms and singular vectors
- `lem-enveloping-algebra-of-the-negative-nilpotent-lie-algebra-is-a-domain` · lemma — The enveloping algebra of the negative nilpotent Lie algebra is a domain
- `lem-a-nonzero-verma-homomorphism-is-injective` · lemma — A nonzero homomorphism between Verma modules is injective
- `lem-every-verma-module-contains-a-simple-verma-submodule` · lemma — Every Verma module contains a simple Verma submodule
- `lem-homomorphisms-from-a-simple-verma-module-have-dimension-at-most-one` · lemma — Homomorphisms from a simple Verma module have dimension at most one
- `thm-verma-homomorphism-spaces-have-dimension-at-most-one` · theorem — Homomorphism spaces between Verma modules have dimension at most one
- `lem-simple-root-singular-vector-in-a-verma-module` · lemma — The simple-root singular vector in a Verma module
- `prop-simple-reflection-embedding-of-verma-modules` · proposition — Simple-reflection embeddings of Verma modules
- `thm-verma-embedding-for-an-arbitrary-positive-root` · theorem — Verma embedding for an arbitrary positive root
- `def-strong-linkage-order-on-weights` · definition — The strong linkage order on weights
- `lem-a-verma-composition-factor-has-the-same-central-character` · lemma — A Verma composition factor has the same central character
- `prop-verma-composition-multiplicities-are-finite` · proposition — Verma composition multiplicities are finite
- `def-jantzen-deformation-and-filtration-of-a-verma-module` · definition — The Jantzen deformation and filtration of a Verma module
- `lem-first-jantzen-filtration-term-is-the-verma-maximal-submodule` · lemma — The first Jantzen filtration term is the maximal Verma submodule
- `thm-jantzen-sum-formula-for-a-verma-module` · theorem — The Jantzen sum formula for a Verma module
- `thm-strong-linkage-principle-for-verma-modules` · theorem — The strong linkage principle for Verma modules
- `lem-verma-embedding-implies-strong-linkage` · lemma — A Verma embedding implies strong linkage
- `thm-bgg-verma-homomorphism-criterion` · theorem — The BGG criterion for homomorphisms between Verma modules
- `cor-generic-verma-modules-are-simple` · corollary — Generic Verma modules are simple
- `cor-antidominant-verma-modules-are-simple` · corollary — Antidominant regular Verma modules are simple

### `homomorphisms-between-verma-modules-and-linkage-examples` — Homomorphisms Between Verma Modules and Linkage — Examples (5 item(s))

- `ex-sl2-verma-embedding-chain` · example — The sl2 Verma embedding chain
- `ex-a2-regular-dominant-verma-embedding-poset` · example — The A2 regular integral-dominant Verma embedding poset
- `ex-a2-singular-dot-orbit-collapses` · example — A singular A2 dot orbit collapses
- `cex-equal-central-character-does-not-give-every-verma-embedding-direction` · counterexample — Equal central character does not give every Verma embedding direction
- `cex-nonintegral-reflection-does-not-produce-a-singular-power` · counterexample — A nonintegral reflection does not produce a singular power

### `schur-indices-and-fields-of-definition` — Schur Indices and Fields of Definition (15 item(s))

- `def-character-field-and-field-of-definition` · definition
- `def-galois-conjugate-representation` · definition
- `lem-base-change-of-intertwiner-spaces` · lemma
- `lem-galois-conjugates-have-equal-scalar-extension-multiplicity` · lemma
- `thm-scalar-extension-of-an-irreducible-finite-group-representation` · theorem
- `lem-character-field-is-the-stabilizer-fixed-field` · lemma
- `def-endomorphism-division-algebra-of-an-irreducible` · definition
- `thm-absolute-irreducibility-via-the-endomorphism-division-algebra` · theorem
- `def-schur-index-of-an-irreducible-character` · definition
- `lem-schur-index-is-independent-of-the-chosen-splitting-field` · lemma
- `thm-character-of-an-irreducible-over-a-nonsplitting-field` · theorem
- `cor-schur-index-divides-the-representation-degree` · corollary
- `def-index-of-a-central-division-algebra` · definition
- `thm-schur-index-equals-division-algebra-index` · theorem
- `thm-schur-index-as-minimal-realization-multiplicity` · theorem

### `schur-indices-and-fields-of-definition-examples` — Schur Indices and Fields of Definition — Examples (4 item(s))

- `ex-galois-conjugate-characters-of-c3` · example
- `ex-s3-is-split-over-the-rationals` · example
- `ex-quaternion-character-has-schur-index-two` · example
- `ex-trivial-character-has-schur-index-one` · example

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-7 reader warnings

1 warning(s) a Step-7 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-3719497e29b7e7a6567f56d2 · `thm-prime-support-of-the-different-is-ramification`** (from group d, would-be-fatal) — The stated iff is false under the page's own convention that a rational prime is ramified if some prime above it has e>1. From p|N(D_K) one obtains that some P over p divides D_K, not that every P over p does. Mixed factorisation occurs: for K=Q(θ), θ a root of x^3-x^2-3x+1 (discriminant 148), modulo 37 the polynomial is (x-4)^2(x-30). Thus 37 ramifies, but the prime attached to x-30 has e=1 and does not divide the different. The correct local condition is that P divides D_K iff P itself ramifies.

Append one owning-group disposition per warning to `research/frontier-32-step8-alert-decisions.jsonl`.
A Step-7 reader warning may be adjudicated `confirmed_fatal` and repaired with exact
pre/post guard hashes. A later Step-8 cross-group alert still requires a real targeted
judge rejection; never reuse its source rejection as target evidence.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/frontier-32-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — targeted repair-integrity review, `frontier-32`

The generated repair envelope above is authoritative. It supplies every failed
gate with full output, the exact live ids and rejection tuples, and each id's
run or published scope. Take only its `assigned_items` and `live_tuples`; rerun
the focused gate where it supports item scope.

Resolve every assigned finding in this pass, keeping the existing mathematics
and detail except where an exact fatal licence requires correction. A serial
reviewer must establish ownership before editing an ambiguous record. If the
detector or repair authority is wrong, report the cause; unchanged retries stop.

Complete a repair already licensed by an exact `confirmed_fatal` adjudication,
or correct a documentary contract/manifest/impact/verification record that must
match the current proof. Do not edit a nonfatal or false-positive item, broaden
the scope, run a judge sweep, or run a workflow transition.

Preserve append-only ledgers and return the gate, ids, licensing rows, changed
files, targeted checks, and blocker. This task applies before `8-rejudge`; a
frozen-cutover dispatch uses the Step-8 close task instead.
