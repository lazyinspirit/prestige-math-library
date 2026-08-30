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
group work, `research/frontier-24-alpha-groups.json` is the assignment: it permits at
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

run: frontier-24
role: alpha-adjudicate
label: adjudicate-rejudge-d-round-1

# Exact Step-8 repair envelope — 8-rejudge, round 1

The JSON envelope below is the authority for this dispatch. It contains every failing gate from the battery,
the full untruncated output, exact current rejection tuples, and explicit run/published ownership.
Act only on `assigned_items` and `live_tuples`; do not substitute the latest event-log row.

```json
{
  "version": 1,
  "run": "frontier-24",
  "stage": "8-rejudge",
  "round": 1,
  "mode": "rejudge-adjudication",
  "group": "d",
  "failures": [
    {
      "id": "judge-closure",
      "stage": "8-rejudge",
      "why": "ERROR judge-adjudication-missing [cex-an-ambiguous-cfg-need-not-generate-an-inherently-ambiguous-language]: cex-an-ambiguous-cfg-need-not-generate-an-inherently-ambiguous-language: current gpt-5.6-terra rejection has no exact Alpha outcome ",
      "output": "level-coverage --judge-only: 493/493 current configured-judge verdict set(s); 0 terminal manual resolution(s), 0 need rejudge, 33 unadjudicated, 0 open fatal, 217 adjudicated rejection(s) closed nonfatally; legacy gate counter 493/493 current pairs (one per-item configured verdict set, including singleton lineups)\nERROR judge-adjudication-missing [cex-an-ambiguous-cfg-need-not-generate-an-inherently-ambiguous-language]: cex-an-ambiguous-cfg-need-not-generate-an-inherently-ambiguous-language: current gpt-5.6-terra rejection has no exact Alpha outcome for context f46f8c618a181aec0eda876af7de1cefb950246ffe3119d4f073619fe1ec39b6\nERROR judge-adjudication-missing [cor-the-kernel-cokernel-sequence-of-a-composite-is-a-snake]: cor-the-kernel-cokernel-sequence-of-a-composite-is-a-snake: current gpt-5.6-terra rejection has no exact Alpha outcome for context c26b4beedf9507d241ac26d269465fc4f09bb4da4e0be7c3a4a7f9318b45a804\nERROR judge-adjudication-missing [def-permutation-matrix-partial-pivoting-and-pivot-growth]: def-permutation-matrix-partial-pivoting-and-pivot-growth: current gpt-5.6-terra rejection has no exact Alpha outcome for context bc999189133c1cc42a1a25d7496c5f93deebb414a160bba360ed84805fdd334e\nERROR judge-adjudication-missing [def-principal-part-at-an-isolated-point]: def-principal-part-at-an-isolated-point: current gpt-5.6-terra rejection has no exact Alpha outcome for context 98834c69339edef3278083b90deec31f0200f0079408bbdcb7643e8434b21d9b\nERROR judge-adjudication-missing [def-real-and-complex-givens-transformations]: def-real-and-complex-givens-transformations: current gpt-5.6-terra rejection has no exact Alpha outcome for context 6eb134ebc34c8cfae8170f43af357e7a4f1a0869ccb6af4772cd56209bf5b63b\nERROR judge-adjudication-missing [def-velocity-derivation-of-a-smooth-curve]: def-velocity-derivation-of-a-smooth-curve: current gpt-5.6-terra rejection has no exact Alpha outcome for context 0054c2aee57573dd6e8e5b70fcd30be8d1b6ff01645438e70fa43c690e7742df\nERROR judge-adjudication-missing [ex-a-smooth-partition-on-real-space-subordinate-to-two-half-spaces]: ex-a-smooth-partition-on-real-space-subordinate-to-two-half-spaces: current gpt-5.6-terra rejection has no exact Alpha outcome for context 89875f32ab26019740588f9aca80113e71fb51e6d1ef7737edeffe332bf2d99f\nERROR judge-adjudication-missing [ex-noether-normalisation-triangular-change]: ex-noether-normalisation-triangular-change: current gpt-5.6-terra rejection has no exact Alpha outcome for context a973ac0d973dd9f596778418d0e67a98b6ad68db08146effb177763ebb1cc754\nERROR judge-adjudication-missing [ex-the-published-module-five-lemma-as-an-instance]: ex-the-published-module-five-lemma-as-an-instance: current gpt-5.6-terra rejection has no exact Alpha outcome for context 6e0cb442af5fd6ad9da58e13b7e5ec36722d9962e87953c0fa7b072b0e4b6fa5\nERROR judge-adjudication-missing [ex-the-tangent-bundle-of-the-circle-is-a-cylinder]: ex-the-tangent-bundle-of-the-circle-is-a-cylinder: current gpt-5.6-terra rejection has no exact Alpha outcome for context 3d9bba2997cc3cee445f58e0272cbf4057f1e4255c8c4a277c5b59a96ba12187\nERROR judge-adjudication-missing [ex-the-tangent-space-of-the-sphere-from-curve-velocities]: ex-the-tangent-space-of-the-sphere-from-curve-velocities: current gpt-5.6-terra rejection has no exact Alpha outcome for context 1a1dffeecba77b5764df791de06e9912a469c87cbd07f0b56e056e21e2c10758\nERROR judge-adjudication-missing [fs-an-ambiguous-cfg-need-not-generate-an-inherently-ambiguous-language]: fs-an-ambiguous-cfg-need-not-generate-an-inherently-ambiguous-language: current gpt-5.6-terra rejection has no exact Alpha outcome for context 2065515cab5d1e290ec1def7337c94696e5a0b2f4f6d28257a1024e90fa41205\nERROR judge-adjudication-missing [lem-chart-bump-at-a-point-with-prescribed-support]: lem-chart-bump-at-a-point-with-prescribed-support: current gpt-5.6-terra rejection has no exact Alpha outcome for context 7214c17470733fd47910bb8b492c36c387a78820def1e3d38d8be66b84a07988\nERROR judge-adjudication-missing [lem-two-omitted-values-rule-out-an-essential-singularity]: lem-two-omitted-values-rule-out-an-essential-singularity: current gpt-5.6-terra rejection has no exact Alpha outcome for context fe0ea56ec9dee96f852d27aee33a10f9d9918a1ed3ee7ff6b87c0886cb2dcb19\nERROR judge-adjudication-missing [prop-finite-biproducts-of-complexes-are-computed-degreewise]: prop-finite-biproducts-of-complexes-are-computed-degreewise: current gpt-5.6-terra rejection has no exact Alpha outcome for context 2d8ba31f39d14f45c2d31a0ee44a4621017a650281467b1133ad28cd4090049b\nERROR judge-adjudication-missing [thm-chomsky-normal-form]: thm-chomsky-normal-form: current gpt-5.6-terra rejection has no exact Alpha outcome for context 79967e960e4323df702e479243ab63d897861e1fbd006ead703da7274de3eb65\nERROR judge-adjudication-missing [thm-elimination-of-unit-productions]: thm-elimination-of-unit-productions: current gpt-5.6-terra rejection has no exact Alpha outcome for context 1fbbe304f6e553e813169da0ed7d9b8b3d627ff573f3489d98784bf0289877fb\nERROR judge-adjudication-missing [thm-elimination-of-useless-symbols]: thm-elimination-of-useless-symbols: current gpt-5.6-terra rejection has no exact Alpha outcome for context 0fade47f84ff925cfd141cc8fbe9948c4a87fa92f1fb30ea3b07a0cf545eca16\nERROR judge-adjudication-missing [thm-four-lemma-in-an-abelian-category]: thm-four-lemma-in-an-abelian-category: current gpt-5.6-terra rejection has no exact Alpha outcome for context 0dd77a2a4c5f389d6b3e4a79ed8298f5c321886cce2b925299c8ae0e394d06af\nERROR judge-adjudication-missing [thm-gamma-weierstrass-product]: thm-gamma-weierstrass-product: current gpt-5.6-terra rejection has no exact Alpha outcome for context 0c760634b13d2f9c4a6886105b7de1ee3ca68a9bafcc8aa989b059bcde3acad3\nERROR judge-adjudication-missing [thm-gaussian-elimination-multipliers-produce-the-normalised-lu-factors]: thm-gaussian-elimination-multipliers-produce-the-normalised-lu-factors: current gpt-5.6-terra rejection has no exact Alpha outcome for context ac65cb9cd2070e169f6af198a7ee1f6bd463b0270dc60d212e148032c16d9c38\nERROR judge-adjudication-missing [thm-householder-qr-is-backward-stable-in-the-standard-floating-point-model]: thm-householder-qr-is-backward-stable-in-the-standard-floating-point-model: current gpt-5.6-terra rejection has no exact Alpha outcome for context 0802d80ce29b1dcf950dd40a32450b910364cc2e1fdb2adf2ae2b38aac3b304e\nERROR judge-adjudication-missing [thm-nine-lemma-in-an-abelian-category]: thm-nine-lemma-in-an-abelian-category: current gpt-5.6-terra rejection has no exact Alpha outcome for context f76d1a8cce9bffe25d34c976675e0bd91bdf61c1bf5de63460a197f40405795d\nERROR judge-adjudication-missing [thm-nine-lemma-variants-by-which-rows-are-assumed-exact]: thm-nine-lemma-variants-by-which-rows-are-assumed-exact: current gpt-5.6-terra rejection has no exact Alpha outcome for context 1ec9fc27d6de2452b9e59a52e67a0f2c75f37e528a0c45d5d7ab31f667df8aa9\nERROR judge-adjudication-missing [thm-sharp-nine-lemma]: thm-sharp-nine-lemma: current gpt-5.6-terra rejection has no exact Alpha outcome for context 040a204068c7e49d2af6a741fb46d471d6a8df81491e3de157e3cc046e30e777\nERROR judge-adjudication-missing [thm-short-five-lemma-in-an-abelian-category]: thm-short-five-lemma-in-an-abelian-category: current gpt-5.6-terra rejection has no exact Alpha outcome for context e6e3dc68088a23118c12e7e17f99d3bfeef32e1795b8bc30e16fcb2b0ea1fe5b\nERROR judge-adjudication-missing [thm-stirling-formula-gamma]: thm-stirling-formula-gamma: current gpt-5.6-terra rejection has no exact Alpha outcome for context 6100dd5c84df3e21d683892bfe318c3a2ae0ac5df5f6bcd45d4918ccaa40ebf1\nERROR judge-adjudication-missing [thm-symmetric-nine-lemma]: thm-symmetric-nine-lemma: current gpt-5.6-terra rejection has no exact Alpha outcome for context 39f68cc98e21cecba8a4368a5d36c7417fcfb89b9ac39e63e1dcca46b5049d35\nERROR judge-adjudication-missing [thm-the-cotangent-bundle-has-a-canonical-smooth-2n-manifold-structure]: thm-the-cotangent-bundle-has-a-canonical-smooth-2n-manifold-structure: current gpt-5.6-terra rejection has no exact Alpha outcome for context 9b2b95a4496bc0e9daef9cbde60cc28d6b081fc7fb8f6571184ffdfcc6603ed2\nERROR judge-adjudication-missing [thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure]: thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure: current gpt-5.6-terra rejection has no exact Alpha outcome for context a20dcffd74bc6991a12b712dc1d9a6ab5e089ae096b99e048d61dd79a0112573\nERROR judge-adjudication-missing [thm-total-variation-is-the-supremum-of-unit-bounded-simple-integrals]: thm-total-variation-is-the-supremum-of-unit-bounded-simple-integrals: current gpt-5.6-terra rejection has no exact Alpha outcome for context a0e0dc9a7679714a053561abf368460142d1882039966f33c7bbad00d6ee8610\nERROR judge-adjudication-missing [thm-weak-four-lemma-with-the-exactness-hypotheses-named]: thm-weak-four-lemma-with-the-exactness-hypotheses-named: current gpt-5.6-terra rejection has no exact Alpha outcome for context 0e1025fc33377b29ff0e1f1769d02b5b7bf62efedd2a520c0157099a9bec344d\nERROR judge-adjudication-missing [thm-zero-divisor-theorem-on-plane-domains]: thm-zero-divisor-theorem-on-plane-domains: current gpt-5.6-terra rejection has no exact Alpha outcome for context 352a219a206d15940a1356ac9903f853293fe0866bc9c90a44a1237d153c38cb\n",
      "named_ids": [
        "cex-an-ambiguous-cfg-need-not-generate-an-inherently-ambiguous-language",
        "cor-the-kernel-cokernel-sequence-of-a-composite-is-a-snake",
        "def-permutation-matrix-partial-pivoting-and-pivot-growth",
        "def-principal-part-at-an-isolated-point",
        "def-real-and-complex-givens-transformations",
        "def-velocity-derivation-of-a-smooth-curve",
        "ex-a-smooth-partition-on-real-space-subordinate-to-two-half-spaces",
        "ex-noether-normalisation-triangular-change",
        "ex-the-published-module-five-lemma-as-an-instance",
        "ex-the-tangent-bundle-of-the-circle-is-a-cylinder",
        "ex-the-tangent-space-of-the-sphere-from-curve-velocities",
        "fs-an-ambiguous-cfg-need-not-generate-an-inherently-ambiguous-language",
        "lem-chart-bump-at-a-point-with-prescribed-support",
        "lem-two-omitted-values-rule-out-an-essential-singularity",
        "prop-finite-biproducts-of-complexes-are-computed-degreewise",
        "thm-chomsky-normal-form",
        "thm-elimination-of-unit-productions",
        "thm-elimination-of-useless-symbols",
        "thm-four-lemma-in-an-abelian-category",
        "thm-gamma-weierstrass-product",
        "thm-gaussian-elimination-multipliers-produce-the-normalised-lu-factors",
        "thm-householder-qr-is-backward-stable-in-the-standard-floating-point-model",
        "thm-nine-lemma-in-an-abelian-category",
        "thm-nine-lemma-variants-by-which-rows-are-assumed-exact",
        "thm-sharp-nine-lemma",
        "thm-short-five-lemma-in-an-abelian-category",
        "thm-stirling-formula-gamma",
        "thm-symmetric-nine-lemma",
        "thm-the-cotangent-bundle-has-a-canonical-smooth-2n-manifold-structure",
        "thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure",
        "thm-total-variation-is-the-supremum-of-unit-bounded-simple-integrals",
        "thm-weak-four-lemma-with-the-exactness-hypotheses-named",
        "thm-zero-divisor-theorem-on-plane-domains"
      ]
    }
  ],
  "mechanical_residue": "",
  "live_items": [
    {
      "id": "cex-an-ambiguous-cfg-need-not-generate-an-inherently-ambiguous-language",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-the-kernel-cokernel-sequence-of-a-composite-is-a-snake",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "def-permutation-matrix-partial-pivoting-and-pivot-growth",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "def-principal-part-at-an-isolated-point",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "def-real-and-complex-givens-transformations",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "def-velocity-derivation-of-a-smooth-curve",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-a-smooth-partition-on-real-space-subordinate-to-two-half-spaces",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-noether-normalisation-triangular-change",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-published-module-five-lemma-as-an-instance",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-tangent-bundle-of-the-circle-is-a-cylinder",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-tangent-space-of-the-sphere-from-curve-velocities",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-an-ambiguous-cfg-need-not-generate-an-inherently-ambiguous-language",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-chart-bump-at-a-point-with-prescribed-support",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-two-omitted-values-rule-out-an-essential-singularity",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-finite-biproducts-of-complexes-are-computed-degreewise",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-chomsky-normal-form",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-elimination-of-unit-productions",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-elimination-of-useless-symbols",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-four-lemma-in-an-abelian-category",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-gamma-weierstrass-product",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-gaussian-elimination-multipliers-produce-the-normalised-lu-factors",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-householder-qr-is-backward-stable-in-the-standard-floating-point-model",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-nine-lemma-in-an-abelian-category",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-nine-lemma-variants-by-which-rows-are-assumed-exact",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-sharp-nine-lemma",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-short-five-lemma-in-an-abelian-category",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-stirling-formula-gamma",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-symmetric-nine-lemma",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-the-cotangent-bundle-has-a-canonical-smooth-2n-manifold-structure",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-total-variation-is-the-supremum-of-unit-bounded-simple-integrals",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-weak-four-lemma-with-the-exactness-hypotheses-named",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-zero-divisor-theorem-on-plane-domains",
      "scope": "run",
      "owner": "c"
    }
  ],
  "assigned_items": [
    {
      "id": "cex-an-ambiguous-cfg-need-not-generate-an-inherently-ambiguous-language",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-an-ambiguous-cfg-need-not-generate-an-inherently-ambiguous-language",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-chomsky-normal-form",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-elimination-of-unit-productions",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-elimination-of-useless-symbols",
      "scope": "run",
      "owner": "d"
    }
  ],
  "live_tuples": [
    {
      "id": "cex-an-ambiguous-cfg-need-not-generate-an-inherently-ambiguous-language",
      "model": "gpt-5.6-terra",
      "context_sha256": "f46f8c618a181aec0eda876af7de1cefb950246ffe3119d4f073619fe1ec39b6",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "fs-an-ambiguous-cfg-need-not-generate-an-inherently-ambiguous-language",
      "model": "gpt-5.6-terra",
      "context_sha256": "2065515cab5d1e290ec1def7337c94696e5a0b2f4f6d28257a1024e90fa41205",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-chomsky-normal-form",
      "model": "gpt-5.6-terra",
      "context_sha256": "79967e960e4323df702e479243ab63d897861e1fbd006ead703da7274de3eb65",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-elimination-of-unit-productions",
      "model": "gpt-5.6-terra",
      "context_sha256": "1fbbe304f6e553e813169da0ed7d9b8b3d627ff573f3489d98784bf0289877fb",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-elimination-of-useless-symbols",
      "model": "gpt-5.6-terra",
      "context_sha256": "0fade47f84ff925cfd141cc8fbe9948c4a87fa92f1fb30ea3b07a0cf545eca16",
      "scope": "run",
      "status": "unadjudicated"
    }
  ]
}
```

---

# Step 8 — group **d**, run `frontier-24`

You are the group Alpha for batches **10**: 2 A/B pair(s), 4 page(s), 42 item(s), 5 open rejection(s) over 5 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-24-alpha-d-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
in `research/frontier-24-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 10 | `deterministic-finite-automata-and-regular-languages` | A | computability-theory | 583 | `formal-languages-encodings-and-decision-problems`, `finite-counting-and-binomial-coefficients` |
| 10 | `deterministic-finite-automata-and-regular-languages-examples` | B | computability-theory | 584 | `deterministic-finite-automata-and-regular-languages` |
| 10 | `context-free-grammars-and-normal-forms` | A | computability-theory | 591 | `formal-languages-encodings-and-decision-problems`, `ramsey-theory` |
| 10 | `context-free-grammars-and-normal-forms-examples` | B | computability-theory | 592 | `context-free-grammars-and-normal-forms` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `deterministic-finite-automata-and-regular-languages` — Deterministic Finite Automata and Regular Languages (16 item(s))

- `def-deterministic-finite-automaton` · definition — Deterministic finite automata
- `def-extended-dfa-transition-function` · definition — The extended transition function of a DFA
- `thm-existence-and-uniqueness-of-extended-dfa-transition` · theorem — The extended transition function exists and is unique
- `lem-extended-dfa-transition-respects-concatenation` · lemma — Extended DFA transition respects concatenation
- `def-dfa-acceptance-and-recognized-language` · definition — Acceptance of a word by a DFA and the recognized language
- `def-regular-language-by-dfa-recognition` · definition — Regular languages
- `prop-every-finite-language-is-regular` · proposition — Every finite language is regular
- `thm-product-dfa-for-union-and-intersection` · theorem — The product construction gives DFA's for union and intersection
- `thm-complementing-accept-states-complements-the-language` · theorem — Complementing the accepting states complements the recognized language
- `cor-regular-languages-are-closed-under-boolean-operations` · corollary — Regular languages are closed under the Boolean operations over a fixed alphabet
- `thm-dfa-for-language-difference` · theorem — The product construction gives a DFA for language difference
- `def-reachable-dfa-state` · definition — Reachable states of a DFA
- `lem-removing-unreachable-states-preserves-language` · lemma — Removing unreachable states preserves the recognized language
- `prop-published-prefix-automata-extend-to-factor-avoidance-dfas` · proposition — The published prefix automata extend canonically to DFAs for factor-avoidance languages
- `fs-a-dfa-transition-diagram-may-omit-a-sink-without-changing-totality` · false-statement — FALSE: a DFA transition diagram may omit a sink without changing totality
- `fs-complementing-a-dfa-complements-its-transition-graph` · false-statement — FALSE: complementing a DFA complements its transition graph

### `deterministic-finite-automata-and-regular-languages-examples` — Deterministic Finite Automata and Regular Languages: Examples and Counterexamples (3 item(s))

- `ex-extended-dfa-transition-respects-concatenation` · example — Computing $\delta^*(q,uv)$ as $\delta^*(\delta^*(q,u),v)$
- `ex-extending-a-published-prefix-automaton-to-a-factor-avoidance-dfa` · example — Adding a sink turns the published prefix automaton for avoiding `11` into a DFA
- `cex-a-dfa-transition-diagram-may-omit-a-sink-without-changing-totality` · counterexample — A missing `1`-transition shows the drawn machine is not yet a DFA

### `context-free-grammars-and-normal-forms` — Context-Free Grammars and Normal Forms (20 item(s))

- `def-context-free-grammar` · definition — Context-free grammars
- `def-one-step-and-reflexive-transitive-derivation` · definition — One-step derivation and finite derivation in a context-free grammar
- `def-language-generated-by-a-cfg` · definition — The language generated by a context-free grammar
- `def-leftmost-and-rightmost-derivation` · definition — Leftmost and rightmost derivations
- `def-parse-tree-and-yield` · definition — Parse trees and their yields
- `thm-derivation-parse-tree-correspondence` · theorem — Derivations and parse trees correspond
- `def-ambiguity-and-inherent-ambiguity` · definition — Ambiguous grammars, unambiguous grammars, and inherently ambiguous languages
- `def-nullable-generating-and-reachable-variable` · definition — Nullable, generating, and reachable variables
- `thm-elimination-of-useless-symbols` · theorem — Eliminating useless symbols preserves the generated language
- `thm-elimination-of-epsilon-productions` · theorem — Epsilon-productions can be eliminated except possibly at the start symbol
- `thm-elimination-of-unit-productions` · theorem — Unit productions can be eliminated
- `def-chomsky-normal-form` · definition — Chomsky normal form
- `thm-chomsky-normal-form` · theorem — Every context-free language has an equivalent grammar in Chomsky normal form
- `def-greibach-normal-form` · definition — Greibach normal form
- `lem-gnf-substitution-step-preserves-language` · lemma — Substituting a variable's productions into a leading variable occurrence preserves the language
- `lem-gnf-left-recursion-elimination-preserves-language` · lemma — Eliminating immediate left recursion preserves the language
- `thm-greibach-normal-form` · theorem — Every context-free language has an equivalent grammar in Greibach normal form
- `thm-cfl-closure-under-union-concatenation-star-and-homomorphism` · theorem — Context-free languages are closed under union, concatenation, Kleene star, and homomorphism
- `fs-an-ambiguous-cfg-need-not-generate-an-inherently-ambiguous-language` · false-statement — FALSE: an ambiguous CFG always generates an inherently ambiguous language
- `fs-cnf-preserves-epsilon-without-an-exception` · false-statement — FALSE: converting to Chomsky normal form preserves epsilon without a special start-symbol exception

### `context-free-grammars-and-normal-forms-examples` — Context-Free Grammars and Normal Forms: Examples and Counterexamples (3 item(s))

- `ex-elimination-of-useless-symbols` · example — Deleting unreachable and nongenerating variables from a small grammar
- `ex-cfl-closure-under-union-concatenation-star-and-homomorphism` · example — Closure constructions on two small context-free languages
- `cex-an-ambiguous-cfg-need-not-generate-an-inherently-ambiguous-language` · counterexample — Arithmetic expressions admit both ambiguous and unambiguous CFGs

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
| `cex-an-ambiguous-cfg-need-not-generate-an-inherently-ambiguous-language` | `context-free-grammars-and-normal-forms-examples` | gpt-5.6-terra | `f46f8c618a181aec0eda876af7de1cefb950246ffe3119d4f073619fe1ec39b6` |
| `fs-an-ambiguous-cfg-need-not-generate-an-inherently-ambiguous-language` | `context-free-grammars-and-normal-forms` | gpt-5.6-terra | `2065515cab5d1e290ec1def7337c94696e5a0b2f4f6d28257a1024e90fa41205` |
| `thm-chomsky-normal-form` | `context-free-grammars-and-normal-forms` | gpt-5.6-terra | `79967e960e4323df702e479243ab63d897861e1fbd006ead703da7274de3eb65` |
| `thm-elimination-of-unit-productions` | `context-free-grammars-and-normal-forms` | gpt-5.6-terra | `1fbbe304f6e553e813169da0ed7d9b8b3d627ff573f3489d98784bf0289877fb` |
| `thm-elimination-of-useless-symbols` | `context-free-grammars-and-normal-forms` | gpt-5.6-terra | `0fade47f84ff925cfd141cc8fbe9948c4a87fa92f1fb30ea3b07a0cf545eca16` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 8 — exact closure recovery, `frontier-24`

Read `research/frontier-24-judge-closure.json`,
`research/frontier-24-judge.jsonl`,
`research/frontier-24-judge-adjudications.jsonl`, and the generated `by_item`
ownership map in `research/frontier-24-step8-scope.json`. Take only current
unadjudicated `(id, model, context_sha256)` rows owned by this group; leave
other groups' rows untouched. A row owned by no group is a reported blocker,
not a row to discard.

Append one exact adjudication outcome per owned row. Only
`confirmed_fatal` licenses its coherent repair and matching ledger row; update
only records made stale by that repair. Send a concrete other-group finding to
`research/frontier-24-step8-cross-group.jsonl`, never repair that item.

Write `research/frontier-24-alpha-step8-closure-recovery-<group>.md` with the rows
handled, outcomes, licensed repairs, rejudge targets, cross-group alerts, and
blockers. Preserve shared append-only ledgers.
