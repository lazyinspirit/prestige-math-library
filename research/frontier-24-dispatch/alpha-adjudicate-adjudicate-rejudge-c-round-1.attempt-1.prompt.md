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
label: adjudicate-rejudge-c-round-1

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
  "group": "c",
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
      "id": "def-principal-part-at-an-isolated-point",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-two-omitted-values-rule-out-an-essential-singularity",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-gamma-weierstrass-product",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-stirling-formula-gamma",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-total-variation-is-the-supremum-of-unit-bounded-simple-integrals",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-zero-divisor-theorem-on-plane-domains",
      "scope": "run",
      "owner": "c"
    }
  ],
  "live_tuples": [
    {
      "id": "def-principal-part-at-an-isolated-point",
      "model": "gpt-5.6-terra",
      "context_sha256": "98834c69339edef3278083b90deec31f0200f0079408bbdcb7643e8434b21d9b",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "lem-two-omitted-values-rule-out-an-essential-singularity",
      "model": "gpt-5.6-terra",
      "context_sha256": "fe0ea56ec9dee96f852d27aee33a10f9d9918a1ed3ee7ff6b87c0886cb2dcb19",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-gamma-weierstrass-product",
      "model": "gpt-5.6-terra",
      "context_sha256": "0c760634b13d2f9c4a6886105b7de1ee3ca68a9bafcc8aa989b059bcde3acad3",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-stirling-formula-gamma",
      "model": "gpt-5.6-terra",
      "context_sha256": "6100dd5c84df3e21d683892bfe318c3a2ae0ac5df5f6bcd45d4918ccaa40ebf1",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-total-variation-is-the-supremum-of-unit-bounded-simple-integrals",
      "model": "gpt-5.6-terra",
      "context_sha256": "a0e0dc9a7679714a053561abf368460142d1882039966f33c7bbad00d6ee8610",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-zero-divisor-theorem-on-plane-domains",
      "model": "gpt-5.6-terra",
      "context_sha256": "352a219a206d15940a1356ac9903f853293fe0866bc9c90a44a1237d153c38cb",
      "scope": "run",
      "status": "unadjudicated"
    }
  ]
}
```

---

# Step 8 — group **c**, run `frontier-24`

You are the group Alpha for batches **4**, **5**, **6**: 5 A/B pair(s), 10 page(s), 145 item(s), 6 open rejection(s) over 6 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-24-alpha-c-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
| 4 | `signed-and-complex-measures-hahn-and-jordan` | A | measure-theory | 288.023 | `product-measures-and-the-fubini-tonelli-theorems-examples` |
| 4 | `signed-and-complex-measures-hahn-and-jordan-examples` | B | measure-theory | 288.024 | `signed-and-complex-measures-hahn-and-jordan` |
| 5 | `the-riemann-mapping-theorem` | A | complex-analysis | 333 | `normal-families-and-montels-theorem`, `conformal-mapping-branches-and-the-schwarz-lemma`, `the-winding-number-and-the-global-cauchy-theorem` |
| 5 | `the-riemann-mapping-theorem-examples` | B | complex-analysis | 334 | `the-riemann-mapping-theorem` |
| 5 | `bloch-schottky-and-picard` | A | complex-analysis | 347 | `normal-families-and-montels-theorem`, `conformal-mapping-branches-and-the-schwarz-lemma`, `isolated-singularities-and-laurent-series`, `the-riemann-mapping-theorem` |
| 5 | `bloch-schottky-and-picard-examples` | B | complex-analysis | 348 | `bloch-schottky-and-picard` |
| 6 | `mittag-leffler-and-runges-theorem` | A | complex-analysis | 339 | `infinite-products-and-weierstrass-factorisation`, `the-riemann-sphere-and-mobius-transformations`, `the-residue-theorem` |
| 6 | `mittag-leffler-and-runges-theorem-examples` | B | complex-analysis | 340 | `mittag-leffler-and-runges-theorem` |
| 6 | `the-gamma-function` | A | complex-analysis | 343 | `infinite-products-and-weierstrass-factorisation`, `the-residue-theorem`, `improper-integrals`, `analyticity-liouville-and-morera`, `product-measures-and-the-fubini-tonelli-theorems` |
| 6 | `the-gamma-function-examples` | B | complex-analysis | 344 | `the-gamma-function` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `signed-and-complex-measures-hahn-and-jordan` — Signed and Complex Measures Hahn and Jordan (28 item(s))

- `def-signed-measure` · definition — A signed measure is countably additive and takes at most one infinite value
- `def-positive-negative-and-null-sets-for-a-signed-measure` · definition — Positive, negative, and null sets for a signed measure
- `def-complex-measure` · definition — A complex measure is a finite-valued countably additive set function
- `prop-real-and-imaginary-parts-of-a-complex-measure-are-finite-signed-measures` · proposition — The real and imaginary parts of a complex measure are finite signed measures, and nu = Re nu + i Im nu
- `def-total-variation-of-a-signed-or-complex-measure` · definition — The total variation |nu|(E) from countable measurable partitions
- `prop-signed-null-sets-are-exactly-the-sets-of-zero-total-variation` · proposition — A set is null for a signed measure exactly when its total variation is zero there
- `def-mutually-singular-measures` · definition — Mutual singularity for signed or complex measures
- `lem-finite-signed-measure-sets-have-only-finite-subset-values` · lemma — A subset of a set of finite signed measure also has finite signed measure
- `prop-finite-union-values-force-absolute-convergence-for-signed-measure-additivity` · proposition — If a disjoint union has finite signed measure, then the signed-measure series converges absolutely
- `lem-positive-finite-signed-measure-set-contains-a-positive-subset-of-at-least-the-same-mass` · lemma — A set of positive finite signed measure contains a positive subset of at least the same mass
- `thm-hahn-decomposition-for-signed-measures` · theorem — Hahn decomposition for signed measures, unique up to total-variation-null sets
- `thm-jordan-decomposition-for-signed-measures` · theorem — Jordan decomposition of a signed measure into unique mutually singular positive parts
- `thm-continuity-from-below-and-above-for-signed-measures` · theorem — Continuity from below, and from above when one set has finite signed measure
- `prop-jordan-parts-and-total-variation-formulas-for-signed-measures` · proposition — For a signed measure, total variation is nu-plus plus nu-minus, finite partitions suffice, and nu-plus and nu-minus are extremal
- `thm-total-variation-of-a-complex-measure-is-finite` · theorem — Every complex measure has finite total variation
- `thm-total-variation-is-a-measure` · theorem — The total variation of a signed or complex measure is a positive measure
- `def-complex-simple-function` · definition — Complex simple functions as finite sums of measurable indicators
- `def-simple-integral-against-a-signed-or-complex-measure` · definition — The simple integral against a signed or complex measure
- `prop-simple-integrals-are-bounded-by-total-variation` · proposition — Simple integrals are bounded by total variation
- `thm-total-variation-is-the-supremum-of-unit-bounded-simple-integrals` · theorem — Total variation is the supremum of simple integrals over unit-bounded test functions
- `thm-l-one-functions-admit-dominated-complex-simple-approximations` · theorem — Every L^1 function admits dominated complex simple approximations
- `def-integration-against-a-signed-or-complex-measure` · definition — Integration against a signed or complex measure, and the class L^1(nu) = L^1(|nu|)
- `thm-integrals-against-signed-or-complex-measures-are-bounded-by-total-variation` · theorem — Integrals against signed or complex measures are bounded by total variation
- `thm-complex-l-one-densities-define-complex-measures-with-prescribed-total-variation` · theorem — A complex L^1 density defines a complex measure whose total variation is |h| dmu
- `def-the-space-of-finite-total-variation-signed-measures` · definition — The class M(X, A) of signed measures with finite total variation and the quantity ||nu|| = |nu|(X)
- `thm-finite-total-variation-signed-measures-form-a-real-normed-space` · theorem — Finite-total-variation signed measures form a real normed space
- `thm-finite-total-variation-signed-measures-are-complete` · theorem — Finite-total-variation signed measures are complete in the total-variation norm
- `thm-a-real-l-one-density-defines-a-finite-signed-measure-with-its-canonical-hahn-and-jordan-data` · theorem — A real L^1 density defines a finite signed measure with Hahn sets {f > 0} and {f <= 0}, Jordan parts f-plus dmu and f-minus dmu, and total variation |f| dmu

### `signed-and-complex-measures-hahn-and-jordan-examples` — Signed and Complex Measures Hahn and Jordan — Examples (15 item(s))

- `ex-delta-one-minus-delta-minus-one-has-the-obvious-hahn-and-jordan-decomposition` · example — For nu = delta_1 - delta_{-1}, the Hahn sets are {1} and {-1}, the Jordan parts are delta_1 and delta_{-1}, and ||nu|| = 2
- `ex-sine-density-on-zero-to-two-pi-exhibits-the-nonuniqueness-of-hahn-decompositions` · example — For nu(E) = int_E sin x d lambda on [0,2 pi], one Hahn decomposition is [0,pi] and (pi,2 pi], while the canonical density sets are {sin x > 0} and {sin x <= 0}
- `ex-an-atomic-signed-measure-on-z-has-total-variation-three` · example — The signed counting-measure density nu({k}) = (-1)^k 2^{-|k|} on Z has total variation 3
- `ex-cantor-measure-minus-lebesgue-on-zero-one-is-already-in-jordan-form` · example — On [0,1], mu_c - lambda is already the difference of mutually singular positive measures
- `ex-the-complex-density-e-to-ix-dlambda-has-total-variation-two-pi` · example — The complex measure dnu = e^{ix} d lambda on [0,2 pi] has total variation 2 pi
- `cex-countable-partitions-can-be-strictly-better-than-finite-ones-for-a-complex-measure` · counterexample — Finite partitions need not attain complex total variation
- `cex-moving-a-total-variation-null-set-changes-a-hahn-decomposition` · counterexample — Moving the singleton {pi} changes a Hahn decomposition of sin x d lambda without changing its total-variation class
- `cex-total-variation-can-exceed-the-absolute-value-of-the-set-value` · counterexample — For nu = delta_1 - delta_{-1}, total variation of the whole set exceeds the absolute value of nu(X)
- `cex-a-finitely-additive-finite-valued-set-function-can-have-infinite-total-variation` · counterexample — On the finite-cofinite sigma-algebra of N, a finite-valued finitely additive set function can have infinite total variation
- `fs-a-signed-measure-can-take-both-plus-infinity-and-minus-infinity` · false-statement — FALSE: a signed measure may take both +infty and -infty
- `fs-a-hahn-decomposition-is-unique` · false-statement — FALSE: a Hahn decomposition is unique
- `fs-total-variation-always-equals-the-absolute-value-of-the-set-value` · false-statement — FALSE: for every signed measure and measurable E, |nu|(E) = |nu(E)|
- `fs-agreement-on-a-generating-pi-system-always-determines-a-signed-measure` · false-statement — FALSE: signed measures agreeing on a generating pi-system are always equal
- `fs-finite-values-and-finite-additivity-force-finite-total-variation` · false-statement — FALSE: a finite-valued finitely additive set function must have finite total variation
- `fs-finite-partitions-always-suffice-for-complex-total-variation` · false-statement — FALSE: finite partitions always suffice to compute the total variation of a complex measure

### `the-riemann-mapping-theorem` — The Riemann Mapping Theorem (18 item(s))

- `def-univalent-holomorphic-function` · definition — Univalent holomorphic functions
- `def-normalized-univalent-class` · definition — The normalized univalent class on the unit disc
- `def-riemann-map-extremal-family` · definition — The extremal family of disc-valued univalent maps fixing a basepoint
- `lem-riemann-map-extremal-family-is-nonempty` · lemma — A proper homologically simply connected plane domain has a bounded univalent competitor
- `lem-riemann-map-extremal-derivatives-are-positive-and-bounded` · lemma — The extremal derivatives are positive and have a finite supremum
- `lem-riemann-map-extremal-derivative-is-attained` · lemma — A maximizing sequence has a locally uniform limit with extremal derivative
- `lem-nonconstant-local-uniform-limits-of-univalent-functions-are-univalent` · lemma — A nonconstant locally uniform limit of univalent functions is univalent
- `lem-riemann-map-extremizer-is-univalent` · lemma — The extremal limit is univalent
- `lem-riemann-map-extremizer-is-surjective` · lemma — An extremizer onto a proper subdomain of the disc can be enlarged
- `thm-riemann-mapping-theorem` · theorem — Every proper homologically simply connected plane domain is conformally equivalent to the unit disc
- `cor-uniqueness-of-the-normalized-riemann-map` · corollary — The normalized Riemann map is unique
- `thm-area-theorem-for-exterior-univalent-functions` · theorem — The area theorem for exterior univalent functions
- `cor-bieberbach-second-coefficient-bound` · corollary — The second coefficient of a normalized univalent function has modulus at most two
- `thm-koebe-one-quarter-theorem` · theorem — Every normalized univalent disc map contains the quarter disc
- `thm-koebe-distortion-theorem` · theorem — Koebe's distortion theorem
- `thm-koebe-growth-theorem` · theorem — Koebe's growth theorem
- `cor-quarter-disc-inclusion-for-univalent-functions` · corollary — A quarter-disc inclusion at every point of a univalent disc map
- `rem-choice-strength-of-the-riemann-mapping-proof` · remark — Choice strength used in the extremal proof of the Riemann mapping theorem

### `the-riemann-mapping-theorem-examples` — The Riemann Mapping Theorem — Examples (9 item(s))

- `ex-normalized-riemann-map-for-the-upper-half-plane-at-i` · example — The normalized Riemann map from the upper half-plane sending i to 0
- `ex-normalized-riemann-map-for-a-horizontal-strip` · example — A normalized Riemann map for a horizontal strip
- `ex-normalized-riemann-map-for-a-sector-with-branch-choice` · example — A normalized Riemann map for a sector with an explicit branch choice
- `ex-normalized-riemann-map-for-the-slit-plane` · example — A normalized Riemann map for the slit plane
- `ex-the-unit-disc-extremal-problem-is-solved-by-the-identity` · example — The extremal problem on the unit disc is solved by the identity map
- `ex-koebe-function-realizes-the-quarter-disc-bound` · example — The Koebe function shows the quarter-disc constant is sharp
- `cex-a-biholomorphism-between-the-disc-and-the-punctured-disc-cannot-exist` · counterexample — The punctured disc is not biholomorphic to the unit disc
- `fs-riemann-map-is-unique-without-normalization` · false-statement — FALSE: the Riemann map is unique without normalization
- `fs-conformal-equivalence-preserves-euclidean-area` · false-statement — FALSE: a conformal equivalence preserves Euclidean area

### `bloch-schottky-and-picard` — Bloch, Schottky, and the Picard Theorems (16 item(s))

- `def-bloch-radius-and-bloch-constant` · definition — Bloch radii and the Bloch constant
- `def-landau-radius-and-landau-constant` · definition — Landau radii and the Landau constant
- `def-two-value-omitting-holomorphic-family` · definition — Families of holomorphic functions omitting two common finite values
- `lem-bloch-rescaling-at-an-almost-maximal-derivative` · lemma — Maximizing-point rescaling produces a normalized map with uniformly bounded derivative
- `lem-quantitative-univalence-from-controlled-derivative` · lemma — Controlled derivative oscillation forces injectivity on a fixed subdisc
- `thm-bloch-theorem` · theorem — Bloch's theorem
- `thm-landau-theorem` · theorem — Landau's theorem
- `lem-holomorphic-logarithms-for-two-omitted-values` · lemma — Disc functions omitting 0 and 1 admit holomorphic logarithms for f and 1-f
- `thm-schottky-theorem` · theorem — Schottky's theorem
- `thm-montel-caratheodory-theorem` · theorem — Families omitting two values are chordally normal
- `thm-little-picard-theorem` · theorem — Little Picard theorem
- `lem-two-omitted-values-rule-out-an-essential-singularity` · lemma — Two omitted finite values rule out an essential singularity
- `thm-great-picard-theorem` · theorem — Great Picard theorem
- `cor-meromorphic-little-picard-theorem` · corollary — A nonconstant meromorphic function on the plane omits at most two sphere values
- `cor-meromorphic-great-picard-theorem` · corollary — A meromorphic essential singularity omits at most two sphere values
- `rem-agreement-between-classical-and-nevanlinna-picard-theorems` · remark — Agreement between the classical and Nevanlinna proofs of Picard's theorems

### `bloch-schottky-and-picard-examples` — Bloch, Schottky, and the Picard Theorems — Examples (7 item(s))

- `ex-ahlfors-proof-yields-the-explicit-bloch-bound-sqrt-three-over-four` · example — The elementary Bloch proof on this page yields the explicit lower bound 1/48
- `ex-schottky-bound-for-a-map-with-center-value-one-half` · example — Schottky's theorem applied to a disc map with center value 1/2
- `ex-the-exponential-function-omits-exactly-zero-and-shows-little-picard-is-sharp` · example — The exponential function omits exactly zero and shows little Picard is sharp
- `ex-exp-one-over-z-shows-great-picard-is-sharp` · example — The function e^(1/z) omits zero and takes every nonzero value infinitely often near the origin
- `cex-a-meromorphic-function-on-the-plane-can-omit-two-sphere-values` · counterexample — The exponential function omits 0 and infinity as a meromorphic map on the plane
- `fs-little-picard-needs-a-boundedness-hypothesis` · false-statement — FALSE: little Picard needs a boundedness hypothesis
- `fs-a-nonconstant-meromorphic-function-on-the-plane-omits-at-most-one-sphere-value` · false-statement — FALSE: a nonconstant meromorphic function on the plane omits at most one sphere value

### `mittag-leffler-and-runges-theorem` — Mittag-Leffler and Runge's Theorem (18 item(s))

- `def-principal-part-at-an-isolated-point` · definition — The principal part at an isolated singularity
- `def-rational-approximation-with-a-runge-pole-set` · definition — Runge pole sets for rational approximation on a compact set
- `def-pole-pushing-along-a-chain-of-discs` · definition — Pole pushing along a chain of discs
- `lem-grid-cycle-for-runge-approximation` · lemma — A square-grid cycle enclosing a compact set
- `lem-cauchy-riemann-sums-give-rational-approximation` · lemma — Riemann sums of the Cauchy integral give rational approximation
- `lem-runge-pole-pushing-lemma` · lemma — Runge's pole-pushing lemma
- `thm-runge-approximation-with-prescribed-poles` · theorem — Runge approximation with a prescribed pole set
- `cor-runge-polynomial-approximation` · corollary — Runge polynomial approximation when the complement is connected
- `def-runge-approximation-on-a-plane-domain` · definition — Runge approximation on a plane domain
- `thm-runge-approximation-on-plane-domains` · theorem — Runge approximation on plane domains
- `thm-mittag-leffler-theorem-on-the-plane` · theorem — Mittag-Leffler on the complex plane
- `thm-mittag-leffler-theorem-on-plane-domains` · theorem — Mittag-Leffler on plane domains
- `thm-mittag-leffler-expansion-of-pi-cotangent` · theorem — The Mittag-Leffler expansion of pi cotangent
- `cor-partial-fraction-expansion-of-pi-squared-cosecant-squared` · corollary — The partial-fraction expansion of pi-squared cosecant-squared
- `thm-zero-divisor-theorem-on-plane-domains` · theorem — Every discrete effective divisor on a plane domain is the zero divisor of a holomorphic function
- `cor-meromorphic-functions-on-a-plane-domain-are-holomorphic-quotients` · corollary — Every meromorphic function on a plane domain is a quotient of holomorphic functions
- `cor-meromorphic-functions-on-a-domain-form-a-field` · corollary — Meromorphic functions on a connected plane domain form a field
- `rem-choice-strength-of-runge-and-mittag-leffler` · remark — Choice bookkeeping for Runge and Mittag-Leffler

### `mittag-leffler-and-runges-theorem-examples` — Mittag-Leffler and Runge's Theorem — Examples (7 item(s))

- `ex-one-over-z-not-polynomially-approximable-on-unit-circle` · example — $1/z$ is not uniformly approximable by polynomials on the unit circle
- `ex-pole-pushing-along-three-discs` · example — Pole pushing along an explicit chain of three discs
- `ex-cotangent-expansion-computes-sum-of-one-over-n-squared-plus-a-squared` · example — The cotangent expansion computes $\sum_{n\in\mathbb Z} 1/(n^2+a^2)$
- `ex-mittag-leffler-function-with-double-poles-at-the-integers` · example — A Mittag-Leffler function with double poles at the integers
- `fs-runge-gives-polynomial-approximation-on-any-compact-set` · false-statement — FALSE: Runge's theorem gives polynomial approximation on every compact set
- `cex-annulus-needs-a-pole-in-each-bounded-complementary-component` · counterexample — The annulus shows Runge approximation needs a pole in each bounded complementary component
- `fs-meromorphic-function-equals-the-naive-sum-of-its-principal-parts` · false-statement — FALSE: a meromorphic function always equals the naive sum of its principal parts

### `the-gamma-function` — The Gamma Function (20 item(s))

- `def-euler-gamma-function` · definition — Euler's Gamma function on the right half-plane
- `lem-gamma-integral-converges-locally-uniformly` · lemma — Euler's Gamma integral converges locally uniformly on the right half-plane
- `thm-euler-gamma-function-is-holomorphic` · theorem — Euler's Gamma function is holomorphic on the right half-plane
- `thm-complex-gamma-restricts-to-the-real-gamma-function` · theorem — The complex Gamma function restricts to the real Gamma function
- `thm-gamma-functional-equation` · theorem — The Gamma functional equation
- `cor-gamma-factorial-values` · corollary — Gamma at the positive integers
- `thm-gamma-meromorphic-continuation` · theorem — Meromorphic continuation of Gamma
- `thm-euler-limit-formula-for-gamma` · theorem — Euler's limit formula for Gamma
- `thm-gamma-weierstrass-product` · theorem — The Weierstrass product for reciprocal Gamma
- `cor-gamma-function-has-no-zeros` · corollary — Gamma has no zeros
- `thm-euler-reflection-formula` · theorem — Euler's reflection formula
- `cor-gamma-one-half-value` · corollary — The value of Gamma at one half
- `def-euler-beta-function` · definition — Euler's Beta function on the right half-planes
- `thm-beta-gamma-identity` · theorem — The Beta-Gamma identity
- `thm-gauss-multiplication-formula` · theorem — Gauss's multiplication formula
- `thm-legendre-duplication-formula` · theorem — Legendre's duplication formula
- `thm-stirling-formula-gamma` · theorem — Stirling's formula for Gamma
- `def-hankel-contour-and-power-branch` · definition — The Hankel contour and the principal power branch
- `thm-hankel-representation-for-reciprocal-gamma` · theorem — Hankel's representation for reciprocal Gamma
- `fs-gamma-recurrence-and-factorial-values-do-not-characterize-gamma` · false-statement — FALSE: the Gamma recurrence and factorial values characterize Gamma

### `the-gamma-function-examples` — The Gamma Function — Examples (7 item(s))

- `ex-gamma-values-at-half-integers-and-negative-half-integers` · example — Half-integer and negative-half-integer values of Gamma
- `ex-residue-of-gamma-at-minus-two` · example — The residue of Gamma at z=-2
- `ex-beta-one-half-one-half-equals-pi` · example — $B(1/2,1/2)=\pi$
- `ex-reflection-formula-at-one-half` · example — Checking the reflection formula at z=1/2
- `ex-stirling-approximation-to-ten-factorial` · example — Stirling's approximation for 10!
- `cex-periodic-perturbation-preserves-the-gamma-recurrence-and-factorial-values` · counterexample — A periodic perturbation preserves the Gamma recurrence and factorial values
- `fs-gamma-is-entire` · false-statement — FALSE: the Gamma function is entire

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
| `def-principal-part-at-an-isolated-point` | `mittag-leffler-and-runges-theorem` | gpt-5.6-terra | `98834c69339edef3278083b90deec31f0200f0079408bbdcb7643e8434b21d9b` |
| `lem-two-omitted-values-rule-out-an-essential-singularity` | `bloch-schottky-and-picard` | gpt-5.6-terra | `fe0ea56ec9dee96f852d27aee33a10f9d9918a1ed3ee7ff6b87c0886cb2dcb19` |
| `thm-gamma-weierstrass-product` | `the-gamma-function` | gpt-5.6-terra | `0c760634b13d2f9c4a6886105b7de1ee3ca68a9bafcc8aa989b059bcde3acad3` |
| `thm-stirling-formula-gamma` | `the-gamma-function` | gpt-5.6-terra | `6100dd5c84df3e21d683892bfe318c3a2ae0ac5df5f6bcd45d4918ccaa40ebf1` |
| `thm-total-variation-is-the-supremum-of-unit-bounded-simple-integrals` | `signed-and-complex-measures-hahn-and-jordan` | gpt-5.6-terra | `a0e0dc9a7679714a053561abf368460142d1882039966f33c7bbad00d6ee8610` |
| `thm-zero-divisor-theorem-on-plane-domains` | `mittag-leffler-and-runges-theorem` | gpt-5.6-terra | `352a219a206d15940a1356ac9903f853293fe0866bc9c90a44a1237d153c38cb` |

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
