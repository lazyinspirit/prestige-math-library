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
label: adjudicate-rejudge-a-round-1

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
  "group": "a",
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
      "id": "cor-the-kernel-cokernel-sequence-of-a-composite-is-a-snake",
      "scope": "run",
      "owner": "a"
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
      "id": "thm-four-lemma-in-an-abelian-category",
      "scope": "run",
      "owner": "a"
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
      "id": "thm-symmetric-nine-lemma",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-weak-four-lemma-with-the-exactness-hypotheses-named",
      "scope": "run",
      "owner": "a"
    }
  ],
  "live_tuples": [
    {
      "id": "cor-the-kernel-cokernel-sequence-of-a-composite-is-a-snake",
      "model": "gpt-5.6-terra",
      "context_sha256": "c26b4beedf9507d241ac26d269465fc4f09bb4da4e0be7c3a4a7f9318b45a804",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "ex-noether-normalisation-triangular-change",
      "model": "gpt-5.6-terra",
      "context_sha256": "a973ac0d973dd9f596778418d0e67a98b6ad68db08146effb177763ebb1cc754",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "ex-the-published-module-five-lemma-as-an-instance",
      "model": "gpt-5.6-terra",
      "context_sha256": "6e0cb442af5fd6ad9da58e13b7e5ec36722d9962e87953c0fa7b072b0e4b6fa5",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-four-lemma-in-an-abelian-category",
      "model": "gpt-5.6-terra",
      "context_sha256": "0dd77a2a4c5f389d6b3e4a79ed8298f5c321886cce2b925299c8ae0e394d06af",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-nine-lemma-in-an-abelian-category",
      "model": "gpt-5.6-terra",
      "context_sha256": "f76d1a8cce9bffe25d34c976675e0bd91bdf61c1bf5de63460a197f40405795d",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-nine-lemma-variants-by-which-rows-are-assumed-exact",
      "model": "gpt-5.6-terra",
      "context_sha256": "1ec9fc27d6de2452b9e59a52e67a0f2c75f37e528a0c45d5d7ab31f667df8aa9",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-sharp-nine-lemma",
      "model": "gpt-5.6-terra",
      "context_sha256": "040a204068c7e49d2af6a741fb46d471d6a8df81491e3de157e3cc046e30e777",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-short-five-lemma-in-an-abelian-category",
      "model": "gpt-5.6-terra",
      "context_sha256": "e6e3dc68088a23118c12e7e17f99d3bfeef32e1795b8bc30e16fcb2b0ea1fe5b",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-symmetric-nine-lemma",
      "model": "gpt-5.6-terra",
      "context_sha256": "39f68cc98e21cecba8a4368a5d36c7417fcfb89b9ac39e63e1dcca46b5049d35",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-weak-four-lemma-with-the-exactness-hypotheses-named",
      "model": "gpt-5.6-terra",
      "context_sha256": "0e1025fc33377b29ff0e1f1769d02b5b7bf62efedd2a520c0157099a9bec344d",
      "scope": "run",
      "status": "unadjudicated"
    }
  ]
}
```

---

# Step 8 — group **a**, run `frontier-24`

You are the group Alpha for batches **1**, **2**, **7**: 3 A/B pair(s), 6 page(s), 114 item(s), 10 open rejection(s) over 10 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-24-alpha-a-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
| 1 | `noether-normalisation-and-nullstellensatz` | A | commutative-algebra | 111.013 | `integral-extensions-and-going-up-examples`, `algebraic-closure-embeddings-and-separability`, `finite-fields-and-cyclotomic-extensions` |
| 1 | `noether-normalisation-and-nullstellensatz-examples` | B | commutative-algebra | 111.014 | `noether-normalisation-and-nullstellensatz` |
| 2 | `induced-representations-and-frobenius-reciprocity` | A | abstract-algebra | 149 | `characters-and-the-orthogonality-relations`, `free-modules-and-exact-sequences` |
| 2 | `induced-representations-and-frobenius-reciprocity-examples` | B | abstract-algebra | 150 | `induced-representations-and-frobenius-reciprocity` |
| 7 | `the-diagram-lemmas-in-an-abelian-category` | A | category-theory | 365.021 | `exactness-and-the-member-calculus-examples` |
| 7 | `the-diagram-lemmas-in-an-abelian-category-examples` | B | category-theory | 365.022 | `the-diagram-lemmas-in-an-abelian-category` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `noether-normalisation-and-nullstellensatz` — Noether Normalisation and Nullstellensatz (28 item(s))

- `lem-maximal-algebraically-independent-subset-is-a-transcendence-basis` · lemma — A maximal algebraically independent set is a transcendence basis
- `lem-transcendence-basis-exchange` · lemma — One element of a transcendence basis can be exchanged for a suitable rival
- `cor-transcendence-degree-tower-additivity` · corollary — Transcendence degree is additive in finite towers
- `lem-noether-normalisation-nonzero-polynomial-made-monic` · lemma — Over an infinite field, a triangular change makes a nonzero polynomial monic
- `lem-noether-normalisation-finite-field-exponent-substitution` · lemma — Rapidly increasing power substitutions isolate one highest x_n-term
- `lem-noether-normalisation-one-relation-reduction` · lemma — A monic relation makes the last generator integral over the earlier ones
- `lem-noether-normalisation-inductive-integrality` · lemma — Induction produces a polynomial subalgebra over which the affine algebra is integral
- `cor-noether-normalisation-module-finiteness` · corollary — Noether normalisation yields module finiteness over a polynomial subring
- `cor-noether-normalisation-dimension-lower-bound` · corollary — A domain finite over a polynomial ring has dimension at least the number of variables
- `lem-zariski-lemma-one-variable-localisation-not-finite` · lemma — The rational function field k(t) is not finite over k[t]
- `lem-zariski-lemma-localised-polynomial-ring-not-field` · lemma — A finitely localized polynomial ring in positive dimension is not a field
- `lem-zariski-lemma-transcendence-basis-reduction` · lemma — A finite-type field reduces to a localization over a transcendence basis
- `cor-field-finite-type-over-a-field-is-a-finite-extension` · corollary — A field finitely generated as a k-algebra is a finite extension of k
- `lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite` · lemma — A maximal ideal of an affine algebra has finite residue field over the base field
- `lem-evaluation-ideal-is-maximal` · lemma — Evaluation at a point has kernel (x_1-a_1, ..., x_n-a_n)
- `cor-weak-nullstellensatz-algebraically-closed-coordinate-form` · corollary — Over an algebraically closed field, every maximal ideal is an evaluation ideal
- `lem-rabinowitsch-auxiliary-ideal-has-empty-zero-locus` · lemma — The Rabinowitsch auxiliary ideal has no common zero
- `lem-rabinowitsch-unit-ideal-consequence` · lemma — The auxiliary ideal is the unit ideal
- `lem-rabinowitsch-substitution-clears-denominators` · lemma — Substituting y = 1/f and clearing denominators yields a power of f in I
- `cor-strong-nullstellensatz-two-inclusions` · corollary — Strong Nullstellensatz: I(V(I)) equals the radical of I
- `lem-affine-algebra-points-as-k-algebra-maps` · lemma — k-points of k[x_1, ..., x_n]/I are exactly k-algebra maps to k
- `cor-affine-algebra-maximal-ideals-as-points-over-algebraically-closed-field` · corollary — Over an algebraically closed field, maximal ideals of an affine algebra are kernels of points
- `lem-vanishing-ideal-is-radical` · lemma — A vanishing ideal is always radical
- `lem-zero-locus-of-an-ideal-equals-zero-locus-of-its-radical` · lemma — An ideal and its radical have the same zero locus
- `cor-affine-radical-ideal-point-separation` · corollary — A radical ideal can be separated from an outside element by a point
- `lem-jacobson-ring-prime-as-intersection-of-maximals` · lemma — A ring is Jacobson exactly when every prime is an intersection of maximal ideals above it
- `lem-finite-type-jacobson-residue-extension` · lemma — Finite-type maps from Jacobson rings induce finite residue-field extensions at maximal ideals
- `cor-affine-closed-points-detect-radicals` · corollary — In a finite-type algebra over a field, radical ideals are intersections of maximal ideals

### `noether-normalisation-and-nullstellensatz-examples` — Noether Normalisation and Nullstellensatz — Examples (7 item(s))

- `ex-transcendence-basis-and-algebraic-remainder` · example — A transcendence basis of k(s, t, sqrt(s+t)) over k
- `ex-noether-normalisation-triangular-change` · example — A triangular change makes a bivariate relation monic
- `ex-noether-normalisation-finite-field-weight-choice` · example — Finite-field normalization needs the weight trick
- `ex-zariski-lemma-denominator-obstruction` · example — A new irreducible denominator stays outside a finitely generated subalgebra of k(t)
- `ex-weak-nullstellensatz-over-real-numbers` · example — Over R, not every maximal ideal is an evaluation ideal
- `ex-strong-nullstellensatz-nonradical-ideal` · example — I(V(x^2, xy)) keeps only the radical information
- `ex-rabinowitsch-identity-explicit` · example — A small Rabinowitsch identity written out completely

### `induced-representations-and-frobenius-reciprocity` — Induced Representations, Frobenius Reciprocity and Applications (27 item(s))

- `def-induced-r-linear-g-module-by-h-covariant-functions` · definition — The induced $R$-linear $G$-module $\operatorname{Ind}_H^G W$ as $H$-covariant functions on $G$
- `prop-induced-module-decomposes-over-a-left-transversal` · proposition — A left transversal identifies $\operatorname{Ind}_H^G W$ with a direct sum of $[G:H]$ copies of $W$
- `cor-dimension-of-an-induced-finite-dimensional-representation` · corollary — The dimension of an induced finite-dimensional representation is $[G:H]\dim W$
- `rem-induced-representation-agrees-with-the-tensor-product-model` · remark — The function model of induction agrees with the tensor-product model $k[G]\otimes_{k[H]}W$
- `def-induced-character-of-a-complex-representation` · definition — The induced character $\operatorname{Ind}_H^G\chi$ of a complex character
- `thm-frobenius-formula-for-induced-characters` · theorem — Frobenius' formula for the character of an induced representation
- `thm-induction-of-the-trivial-representation-is-the-permutation-representation-on-left-cosets` · theorem — Inducing the trivial representation gives the permutation representation on $G/H$
- `thm-induction-is-left-adjoint-to-restriction-for-finite-group-modules` · theorem — Induction is left adjoint to restriction for finite-group modules over a commutative ring
- `cor-frobenius-reciprocity-for-complex-characters` · corollary — Frobenius reciprocity for complex characters
- `def-virtual-character-and-character-ring-of-a-finite-group` · definition — Virtual characters and the character ring $R(G)$ of a finite group
- `thm-transitivity-of-induction-for-finite-groups` · theorem — Induction is transitive along subgroup chains
- `prop-induction-and-restriction-satisfy-the-projection-formula-on-character-rings` · proposition — Induction and restriction satisfy the projection formula on character rings
- `cor-every-irreducible-complex-character-occurs-in-the-induction-of-an-irreducible-constituent-of-its-restriction` · corollary — Every irreducible complex character occurs in the induction of an irreducible constituent of its restriction
- `def-double-cosets-of-two-subgroups` · definition — Double cosets $K\backslash G/H$ of two subgroups
- `def-conjugate-representation-and-conjugate-character` · definition — Conjugate representations and conjugate characters on conjugate subgroups
- `thm-mackey-double-coset-formula-for-restricting-an-induced-character` · theorem — Mackey's double-coset formula for restricting an induced character
- `thm-mackeys-irreducibility-criterion-for-finite-groups` · theorem — Mackey's irreducibility criterion for finite groups
- `def-central-character-of-an-irreducible-complex-character` · definition — The central character of an irreducible complex character
- `prop-class-sums-act-by-central-character-scalars` · proposition — Class sums act on an irreducible representation by central-character scalars
- `thm-central-characters-are-algebraic-integers` · theorem — The values of a central character are algebraic integers
- `thm-the-degree-of-an-irreducible-complex-character-divides-the-group-order` · theorem — The degree of an irreducible complex character divides $|G|$
- `thm-the-degree-of-an-irreducible-complex-character-divides-the-index-of-the-center` · theorem — The degree of an irreducible complex character divides $[G:Z(G)]$
- `cor-a-finite-group-with-an-irreducible-complex-character-of-degree-greater-than-one-is-nonabelian` · corollary — A finite group with an irreducible complex character of degree greater than $1$ is nonabelian
- `lem-an-algebraic-integer-average-of-roots-of-unity-is-zero-or-constant` · lemma — An algebraic-integer average of roots of unity is either $0$ or a common root of unity
- `thm-coprime-conjugacy-class-size-forces-zero-character-or-scalar-action` · theorem — A conjugacy class of size coprime to $\chi(1)$ forces either $\chi(g)=0$ or scalar action
- `thm-a-prime-power-conjugacy-class-forces-a-proper-nontrivial-normal-subgroup` · theorem — A conjugacy class of prime-power size forces a proper nontrivial normal subgroup
- `thm-burnsides-p-a-q-b-theorem` · theorem — Burnside's $p^aq^b$ theorem

### `induced-representations-and-frobenius-reciprocity-examples` — Induced Representations, Frobenius Reciprocity and Applications — Examples (9 item(s))

- `ex-inducing-a-nontrivial-character-of-a-three-cycle-subgroup-of-s-three-gives-an-irreducible-degree-two-character` · example — Inducing a nontrivial character of a three-cycle subgroup of $S_3$ gives an irreducible degree-two character
- `ex-restricting-that-degree-two-s-three-character-to-the-three-cycle-subgroup-gives-the-two-nontrivial-linear-characters` · example — Restricting that degree-two $S_3$ character to the three-cycle subgroup gives the two nontrivial linear characters
- `ex-inducing-the-trivial-character-of-a-subgroup-of-order-two-in-s-three-gives-one-plus-an-irreducible-degree-two-character` · example — Inducing the trivial character of a subgroup of order two in $S_3$ gives $1$ plus an irreducible degree-two character
- `ex-frobenius-reciprocity-for-the-two-preceding-s-three-inductions` · example — Frobenius reciprocity matches multiplicities in the two preceding $S_3$ inductions
- `ex-c-four-shows-divisibility-of-irreducible-degrees-by-the-group-order-is-not-an-equivalence` · example — $C_4$ shows that divisibility of irreducible degrees by $|G|$ is not an equivalence
- `fs-an-induced-irreducible-complex-character-is-always-irreducible` · false-statement — An induced irreducible complex character is always irreducible
- `fs-induction-followed-by-restriction-is-the-identity-on-complex-representations` · false-statement — Induction followed by restriction is the identity on complex representations
- `fs-restriction-of-an-irreducible-complex-representation-is-always-irreducible` · false-statement — Restriction of an irreducible complex representation is always irreducible
- `fs-every-divisor-of-the-group-order-is-an-irreducible-character-degree` · false-statement — Every divisor of $|G|$ is an irreducible character degree

### `the-diagram-lemmas-in-an-abelian-category` — The Diagram Lemmas in an Abelian Category (35 item(s))

- `thm-short-five-lemma-in-an-abelian-category` · theorem — Short five lemma in an abelian category
- `cor-a-morphism-of-short-exact-sequences-with-invertible-outer-maps-is-invertible` · corollary — A morphism of short exact sequences with invertible outer maps is invertible
- `thm-short-five-lemma-by-pullback-without-members` · theorem — Short five lemma by pullback without members
- `def-snake-data` · definition — Snake data
- `thm-the-connecting-morphism-exists-and-is-unique` · theorem — The connecting morphism exists and is unique
- `rem-the-connecting-morphism-depends-on-no-choices` · remark — The connecting morphism depends on no choices
- `thm-snake-lemma-in-an-abelian-category` · theorem — Snake lemma in an abelian category
- `thm-snake-lemma-under-the-weaker-stacks-hypotheses` · theorem — Snake lemma under the weaker Stacks hypotheses
- `def-the-arrow-category-of-an-abelian-category` · definition — The arrow category of an abelian category
- `thm-naturality-of-the-connecting-morphism` · theorem — Naturality of the connecting morphism
- `cor-the-kernel-cokernel-sequence-of-a-composite-is-a-snake` · corollary — The kernel-cokernel sequence of a composite is a snake
- `thm-four-lemma-in-an-abelian-category` · theorem — Four lemma in an abelian category
- `thm-weak-four-lemma-with-the-exactness-hypotheses-named` · theorem — Weak four lemma with the exactness hypotheses named
- `rem-the-two-halves-of-the-four-lemma-are-mutually-dual` · remark — The two halves of the four lemma are mutually dual
- `thm-sharp-five-lemma-in-an-abelian-category` · theorem — Sharp five lemma in an abelian category
- `thm-five-lemma-in-an-abelian-category` · theorem — Five lemma in an abelian category
- `rem-why-the-five-lemma-asks-for-isomorphisms-in-the-middle` · remark — Why the five lemma asks for isomorphisms in the middle
- `lem-half-nine-lemma` · lemma — Half nine lemma
- `thm-nine-lemma-in-an-abelian-category` · theorem — Nine lemma in an abelian category
- `thm-nine-lemma-variants-by-which-rows-are-assumed-exact` · theorem — Nine lemma variants by which rows are assumed exact
- `rem-why-the-middle-nine-lemma-needs-a-zero-composite` · remark — Why the middle nine lemma needs a zero composite
- `thm-sharp-nine-lemma` · theorem — Sharp nine lemma
- `thm-symmetric-nine-lemma` · theorem — Symmetric nine lemma
- `thm-the-nine-lemma-follows-from-the-snake-lemma` · theorem — The nine lemma follows from the snake lemma
- `thm-the-splitting-lemma-follows-from-the-nine-lemma` · theorem — The splitting lemma follows from the nine lemma
- `thm-noether-isomorphism-theorems-recovered-from-the-nine-lemma` · theorem — Noether isomorphism theorems recovered from the nine lemma
- `thm-the-pullback-and-pushout-theorems` · theorem — The pullback and pushout theorems
- `thm-the-diagram-lemmas-hold-in-the-opposite-category` · theorem — The diagram lemmas hold in the opposite category
- `thm-an-exact-functor-transports-every-diagram-lemma` · theorem — An exact functor transports every diagram lemma
- `thm-five-lemma-for-a-morphism-of-long-exact-sequences` · theorem — Five lemma for a morphism of long exact sequences
- `fs-the-connecting-morphism-depends-on-the-choices-made-in-its-construction` · false-statement — FALSE: the connecting morphism depends on the choices made in its construction
- `fs-the-five-lemma-needs-only-that-the-two-middle-maps-are-monic` · false-statement — FALSE: the five lemma needs only that the two middle maps are monic
- `fs-the-middle-nine-lemma-holds-without-assuming-the-composite-is-zero` · false-statement — FALSE: the middle nine lemma holds without assuming the composite is zero
- `fs-the-snake-lemma-is-just-a-pair-of-short-exact-kernel-and-cokernel-rows` · false-statement — FALSE: the snake lemma is just a pair of short exact kernel and cokernel rows
- `fs-the-diagram-lemmas-in-an-abelian-category-follow-from-the-module-case-by-the-embedding-theorem` · false-statement — FALSE: the diagram lemmas in an abelian category follow from the module case by the embedding theorem

### `the-diagram-lemmas-in-an-abelian-category-examples` — The Diagram Lemmas in an Abelian Category — Examples (8 item(s))

- `ex-the-published-module-five-lemma-as-an-instance` · example — The published module five lemma as an instance
- `ex-the-published-module-snake-lemma-as-an-instance` · example — The published module snake lemma as an instance
- `ex-the-published-module-four-lemma-as-an-instance` · example — The published module four lemma as an instance
- `ex-the-connecting-morphism-computed-for-a-short-exact-sequence-of-abelian-groups` · example — The connecting morphism computed for a short exact sequence of abelian groups
- `ex-the-snake-lemma-applied-to-multiplication-by-an-integer` · example — The snake lemma applied to multiplication by an integer
- `ex-the-nine-lemma-verified-on-a-diagram-of-cyclic-groups` · example — The nine lemma verified on a diagram of cyclic groups
- `cex-a-snake-configuration-whose-kernel-row-is-not-short-exact` · counterexample — A snake configuration whose kernel row is not short exact
- `ex-the-short-five-lemma-chased-with-members` · example — The short five lemma chased with members

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
| `cor-the-kernel-cokernel-sequence-of-a-composite-is-a-snake` | `the-diagram-lemmas-in-an-abelian-category` | gpt-5.6-terra | `c26b4beedf9507d241ac26d269465fc4f09bb4da4e0be7c3a4a7f9318b45a804` |
| `ex-noether-normalisation-triangular-change` | `noether-normalisation-and-nullstellensatz-examples` | gpt-5.6-terra | `a973ac0d973dd9f596778418d0e67a98b6ad68db08146effb177763ebb1cc754` |
| `ex-the-published-module-five-lemma-as-an-instance` | `the-diagram-lemmas-in-an-abelian-category-examples` | gpt-5.6-terra | `6e0cb442af5fd6ad9da58e13b7e5ec36722d9962e87953c0fa7b072b0e4b6fa5` |
| `thm-four-lemma-in-an-abelian-category` | `the-diagram-lemmas-in-an-abelian-category` | gpt-5.6-terra | `0dd77a2a4c5f389d6b3e4a79ed8298f5c321886cce2b925299c8ae0e394d06af` |
| `thm-nine-lemma-in-an-abelian-category` | `the-diagram-lemmas-in-an-abelian-category` | gpt-5.6-terra | `f76d1a8cce9bffe25d34c976675e0bd91bdf61c1bf5de63460a197f40405795d` |
| `thm-nine-lemma-variants-by-which-rows-are-assumed-exact` | `the-diagram-lemmas-in-an-abelian-category` | gpt-5.6-terra | `1ec9fc27d6de2452b9e59a52e67a0f2c75f37e528a0c45d5d7ab31f667df8aa9` |
| `thm-sharp-nine-lemma` | `the-diagram-lemmas-in-an-abelian-category` | gpt-5.6-terra | `040a204068c7e49d2af6a741fb46d471d6a8df81491e3de157e3cc046e30e777` |
| `thm-short-five-lemma-in-an-abelian-category` | `the-diagram-lemmas-in-an-abelian-category` | gpt-5.6-terra | `e6e3dc68088a23118c12e7e17f99d3bfeef32e1795b8bc30e16fcb2b0ea1fe5b` |
| `thm-symmetric-nine-lemma` | `the-diagram-lemmas-in-an-abelian-category` | gpt-5.6-terra | `39f68cc98e21cecba8a4368a5d36c7417fcfb89b9ac39e63e1dcca46b5049d35` |
| `thm-weak-four-lemma-with-the-exactness-hypotheses-named` | `the-diagram-lemmas-in-an-abelian-category` | gpt-5.6-terra | `0e1025fc33377b29ff0e1f1769d02b5b7bf62efedd2a520c0157099a9bec344d` |

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
