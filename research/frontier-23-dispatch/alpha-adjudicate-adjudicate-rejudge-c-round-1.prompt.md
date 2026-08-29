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
group work, `research/frontier-23-alpha-groups.json` is the assignment: it permits at
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

run: frontier-23
role: alpha-adjudicate
label: adjudicate-rejudge-c-round-1

# Exact Step-8 repair envelope — 8-rejudge, round 1

The JSON envelope below is the authority for this dispatch. It contains every failing gate from the battery,
the full untruncated output, exact current rejection tuples, and explicit run/published ownership.
Act only on `assigned_items` and `live_tuples`; do not substitute the latest event-log row.

```json
{
  "version": 1,
  "run": "frontier-23",
  "stage": "8-rejudge",
  "round": 1,
  "mode": "rejudge-adjudication",
  "group": "c",
  "failures": [
    {
      "id": "judge-closure",
      "stage": "8-rejudge",
      "why": "ERROR judge-adjudication-missing [cex-enumerating-relator-consequences-does-not-decide-nontriviality]: cex-enumerating-relator-consequences-does-not-decide-nontriviality: current gpt-5.6-terra rejection has no exact Alpha outcome for contex",
      "output": "level-coverage --judge-only: 504/504 current configured-judge verdict set(s); 0 terminal manual resolution(s), 0 need rejudge, 42 unadjudicated, 0 open fatal, 242 adjudicated rejection(s) closed nonfatally; legacy gate counter 504/504 current pairs (one per-item configured verdict set, including singleton lineups)\nERROR judge-adjudication-missing [cex-enumerating-relator-consequences-does-not-decide-nontriviality]: cex-enumerating-relator-consequences-does-not-decide-nontriviality: current gpt-5.6-terra rejection has no exact Alpha outcome for context ba8c9b9faa653986c1925e1de8ba27d07512aa8cceb3cd085c3e488069b2a323\nERROR judge-adjudication-missing [cex-product-of-complete-measures-need-not-be-complete]: cex-product-of-complete-measures-need-not-be-complete: current gpt-5.6-terra rejection has no exact Alpha outcome for context 3e5bbbd95af754b657bb5116860b340470eaba50f449631e57500c349708b248\nERROR judge-adjudication-missing [cor-graph-of-a-measurable-function-is-lebesgue-null]: cor-graph-of-a-measurable-function-is-lebesgue-null: current gpt-5.6-terra rejection has no exact Alpha outcome for context f99b99c4f92a21780df31b2b23899df3860c5f9018a97cacb9f31cbc8d11692b\nERROR judge-adjudication-missing [def-bass-serre-tree-of-a-graph-of-groups]: def-bass-serre-tree-of-a-graph-of-groups: current gpt-5.6-terra rejection has no exact Alpha outcome for context 47766ea9faadd414e4b8226273e3358205c4bee5ba207d65b0313a53957cf522\nERROR judge-adjudication-missing [def-c-r-and-smooth-maps-between-smooth-manifolds]: def-c-r-and-smooth-maps-between-smooth-manifolds: current gpt-5.6-terra rejection has no exact Alpha outcome for context 2c65ec6e0e9484742066798b4446a4ffd963b4291381d9974e54bcd7ae3964c3\nERROR judge-adjudication-missing [def-forward-and-backward-stability-for-a-problem-family]: def-forward-and-backward-stability-for-a-problem-family: current gpt-5.6-terra rejection has no exact Alpha outcome for context ac31ab1e249101f6eef6b280e62bfae98579e034fa7a641b2364b8ff96bced60\nERROR judge-adjudication-missing [def-manifold-chart-coordinate-domain-and-coordinate-functions]: def-manifold-chart-coordinate-domain-and-coordinate-functions: current gpt-5.6-terra rejection has no exact Alpha outcome for context f872d34c974bd87f6e0bb01e53bcfba43095765d91702cfb9c207aabd759d7fb\nERROR judge-adjudication-missing [def-numerical-rank-relative-to-a-norm-scale-and-tolerance]: def-numerical-rank-relative-to-a-norm-scale-and-tolerance: current gpt-5.6-terra rejection has no exact Alpha outcome for context 01ba8f3aff8edc0da44d990a76e5418e5a295b9d80afef0747606eb60c68e173\nERROR judge-adjudication-missing [def-polar-surface-measure-on-the-unit-sphere]: def-polar-surface-measure-on-the-unit-sphere: current gpt-5.6-terra rejection has no exact Alpha outcome for context 0a62d17458bc10ca22d091634e6e815efc8b577511f0cd0b55a03b3a32914493\nERROR judge-adjudication-missing [def-reduced-graph-of-groups-word]: def-reduced-graph-of-groups-word: current gpt-5.6-terra rejection has no exact Alpha outcome for context 5c75442541b255bea247f40171a7253340dabd6d6bd9a7047672502fd5a6175f\nERROR judge-adjudication-missing [def-smoothly-compatible-charts]: def-smoothly-compatible-charts: current gpt-5.6-terra rejection has no exact Alpha outcome for context 3bc9767458b54c3394a2882bd7a2e22575168b4fcc810588ed2b3c304cb1b091\nERROR judge-adjudication-missing [def-standard-relative-floating-point-model-and-unit-roundoff]: def-standard-relative-floating-point-model-and-unit-roundoff: current gpt-5.6-terra rejection has no exact Alpha outcome for context 491cc7fe4bfcdffa35325b81770768e61cbdf3a299ca2969c877e2544005282e\nERROR judge-adjudication-missing [ex-a-backward-stable-solution-of-an-ill-conditioned-system]: ex-a-backward-stable-solution-of-an-ill-conditioned-system: current gpt-5.6-terra rejection has no exact Alpha outcome for context afb7b0bea7abdef0dbd8869543ae3ec47dcd622d9a10e5aea320fa9bcb0230ec\nERROR judge-adjudication-missing [ex-catastrophic-cancellation-and-a-stable-reformulation]: ex-catastrophic-cancellation-and-a-stable-reformulation: current gpt-5.6-terra rejection has no exact Alpha outcome for context 5d77c38bb63cf89d16c8024578a2ce548f0c45e551c31372e430f8ed00b95ab2\nERROR judge-adjudication-missing [ex-decomposing-the-square-of-the-two-dimensional-s-three-character]: ex-decomposing-the-square-of-the-two-dimensional-s-three-character: current gpt-5.6-terra rejection has no exact Alpha outcome for context 1f1856b2baace8c2134af62a5c36ad8752f0f086510c5a92d3cd28a0ae1af24c\nERROR judge-adjudication-missing [ex-normal-equations-versus-qr-conditioning]: ex-normal-equations-versus-qr-conditioning: current gpt-5.6-terra rejection has no exact Alpha outcome for context afe73a15349f268e072fe12ebb1d670ae26c7c19eb31bf19ca17314288f3e0a7\nERROR judge-adjudication-missing [ex-s-four-has-five-conjugacy-classes-of-sizes-one-six-three-eight-and-six]: ex-s-four-has-five-conjugacy-classes-of-sizes-one-six-three-eight-and-six: current gpt-5.6-terra rejection has no exact Alpha outcome for context 40fc46f2e593d4b949501f32abf8f9ec9e6c7ca57c2fe8e848ff596a4bcd9bd3\nERROR judge-adjudication-missing [ex-the-splitting-lemma-instantiated-at-the-published-module-theorem]: ex-the-splitting-lemma-instantiated-at-the-published-module-theorem: current gpt-5.6-terra rejection has no exact Alpha outcome for context 3334460765fc1a83a19d451cdd905afc883c63d13f36d30d84fbf033a8d6dd54\nERROR judge-adjudication-missing [ex-todd-coxeter-as-a-partial-coset-enumeration-procedure]: ex-todd-coxeter-as-a-partial-coset-enumeration-procedure: current gpt-5.6-terra rejection has no exact Alpha outcome for context 8d47f51e9983b110376bb0632484aa37da9a8b6ceed52777f87b5480d43f41bd\nERROR judge-adjudication-missing [fs-complexification-doubles-finite-dimension]: fs-complexification-doubles-finite-dimension: current gpt-5.6-terra rejection has no exact Alpha outcome for context 211f57c398f5e76ee9d5b9b85f1b2082d901c4f92ee09fa9b56b839ee88965e6\nERROR judge-adjudication-missing [fs-member-equivalence-is-transitive-in-any-pointed-category-with-pullbacks]: fs-member-equivalence-is-transitive-in-any-pointed-category-with-pullbacks: current gpt-5.6-terra rejection has no exact Alpha outcome for context 7aefa7a44cf94cbd42c2c24bb48a6efc48601a725c331c42c984962bbf9a7bc5\nERROR judge-adjudication-missing [fs-the-members-of-an-object-form-an-abelian-group]: fs-the-members-of-an-object-form-an-abelian-group: current gpt-5.6-terra rejection has no exact Alpha outcome for context 0f555a6524e72e5e6e5e879fd95d75848141d506c421e54edb67470ef3d4613d\nERROR judge-adjudication-missing [fs-the-product-lebesgue-sigma-algebra-is-the-full-euclidean-lebesgue-sigma-algebra]: fs-the-product-lebesgue-sigma-algebra-is-the-full-euclidean-lebesgue-sigma-algebra: current gpt-5.6-terra rejection has no exact Alpha outcome for context 07294b80d33485ff7ee229fa50a9c5910d2ab8278a745d567347b82ef861113d\nERROR judge-adjudication-missing [lem-c-one-diffeomorphisms-map-lebesgue-measurable-sets-to-lebesgue-measurable-sets]: lem-c-one-diffeomorphisms-map-lebesgue-measurable-sets-to-lebesgue-measurable-sets: current gpt-5.6-terra rejection has no exact Alpha outcome for context af967bd39a9006b8e28f976de42a51a0cad390b6bf56d0db81c115e17e356876\nERROR judge-adjudication-missing [lem-induced-word-map-has-the-free-extension-property]: lem-induced-word-map-has-the-free-extension-property: current gpt-5.6-terra rejection has no exact Alpha outcome for context 7ba84f951a9d38783dd18cd2106bacbc521452ac390fefe1ca7e77abd760c76e\nERROR judge-adjudication-missing [lem-trivial-words-in-a-recursively-presented-group-are-recursively-enumerable]: lem-trivial-words-in-a-recursively-presented-group-are-recursively-enumerable: current gpt-5.6-terra rejection has no exact Alpha outcome for context 3f58d55eab0795b187bcb9ba2148ced6db440112a99437d7acf6bcdb1db3b06a\nERROR judge-adjudication-missing [prop-countable-disjoint-unions-of-fixed-dimensional-smooth-manifolds-are-smooth-manifolds]: prop-countable-disjoint-unions-of-fixed-dimensional-smooth-manifolds-are-smooth-manifolds: current gpt-5.6-terra rejection has no exact Alpha outcome for context b4baba6c3bce68565a955810dab66e287174d8b0339a4e962f294a9a8914bb23\nERROR judge-adjudication-missing [rem-caratheodory-also-constructs-the-product-measure]: rem-caratheodory-also-constructs-the-product-measure: current gpt-5.6-terra rejection has no exact Alpha outcome for context 1399662aa2369e9ab6950418185ad37110bc816ee32aef90614ee58b7e920e8b\nERROR judge-adjudication-missing [thm-ab5-is-equivalent-to-exactness-of-filtered-colimits]: thm-ab5-is-equivalent-to-exactness-of-filtered-colimits: current gpt-5.6-terra rejection has no exact Alpha outcome for context 5bfe1282c347ebb971c9ac41279466d3a2efd11028723d8002f8d9d4f07a5d08\nERROR judge-adjudication-missing [thm-bass-serre-structure-theorem]: thm-bass-serre-structure-theorem: current gpt-5.6-terra rejection has no exact Alpha outcome for context fe318abe3b8437f18e6b6de09020b6720068c81fd3efdaa9e33692becbb47654\nERROR judge-adjudication-missing [thm-branch-discrepancies-for-logarithm-and-complex-powers]: thm-branch-discrepancies-for-logarithm-and-complex-powers: current gpt-5.6-terra rejection has no exact Alpha outcome for context 90e2951c11bdf22cc68f845ecceb5670575c9d3ef2d9588f4e4a1a0a6de726ca\nERROR judge-adjudication-missing [thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]: thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions: current gpt-5.6-terra rejection has no exact Alpha outcome for context 75e8fa39ba7da9b4ba52be66dc69e8277f379a33c4f498fcfc849d47835c4536\nERROR judge-adjudication-missing [thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures]: thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures: current gpt-5.6-terra rejection has no exact Alpha outcome for context 6dba2792cd1a39bb40cfd4b9af6bef7de8c662a6a4082126d8a71d704739865f\nERROR judge-adjudication-missing [thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]: thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: current gpt-5.6-terra rejection has no exact Alpha outcome for context a7b3075a34d2a6e33d02e0adc6e1ba855693fb86ff4b45efaf8d0431d83d5e6f\nERROR judge-adjudication-missing [thm-grushko-decomposition-and-rank-additivity]: thm-grushko-decomposition-and-rank-additivity: current gpt-5.6-terra rejection has no exact Alpha outcome for context 848be1c2d35a95dfbcebfe49858f21bcb704f28fb7dcac3e6ee12d2ee292ae5a\nERROR judge-adjudication-missing [thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets]: thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets: current gpt-5.6-terra rejection has no exact Alpha outcome for context 8c253bc754d5d836f9dfe1b3f0debdb6adb67eecda262e93c9b614bf025c8177\nERROR judge-adjudication-missing [thm-member-equivalence-is-transitive]: thm-member-equivalence-is-transitive: current gpt-5.6-terra rejection has no exact Alpha outcome for context 6d91bb02b1b73496e84789f77e4c3a7550673b5a7dc724f6062915182b1e57c6\nERROR judge-adjudication-missing [thm-normal-form-for-fundamental-groups-of-graphs-of-groups]: thm-normal-form-for-fundamental-groups-of-graphs-of-groups: current gpt-5.6-terra rejection has no exact Alpha outcome for context 8377a34575bb7a474d2f710248105a1dd2681e35e407a28e3bdf6753195133dc\nERROR judge-adjudication-missing [thm-polar-coordinates-formula-for-lebesgue-measure]: thm-polar-coordinates-formula-for-lebesgue-measure: current gpt-5.6-terra rejection has no exact Alpha outcome for context 9a173eeccfffdaf3e5c9eb786d0d4354d05ed1b950b13fd2199cdb45270c3aaf\nERROR judge-adjudication-missing [thm-tonelli-and-fubini-for-completed-product-measures]: thm-tonelli-and-fubini-for-completed-product-measures: current gpt-5.6-terra rejection has no exact Alpha outcome for context 661f5a50de890bdbbebfadeba0733929eb5a39d87893a6f9ca67af1cf1dffacd\nERROR judge-adjudication-missing [thm-weierstrass-factorization-for-entire-functions]: thm-weierstrass-factorization-for-entire-functions: current gpt-5.6-terra rejection has no exact Alpha outcome for context 3f0d0a99632fc9d0c6543473bf1645ce1a586a5a176d4907ff59eabbdcac3938\nERROR judge-adjudication-missing [thm-zero-exponent-is-bounded-by-entire-order]: thm-zero-exponent-is-bounded-by-entire-order: current gpt-5.6-terra rejection has no exact Alpha outcome for context d1f5c7d628c9b2c220aad5f1a43a28a5f147c54a0616c5c4f7b704655374938c\n",
      "named_ids": [
        "cex-enumerating-relator-consequences-does-not-decide-nontriviality",
        "cex-product-of-complete-measures-need-not-be-complete",
        "cor-graph-of-a-measurable-function-is-lebesgue-null",
        "def-bass-serre-tree-of-a-graph-of-groups",
        "def-c-r-and-smooth-maps-between-smooth-manifolds",
        "def-forward-and-backward-stability-for-a-problem-family",
        "def-manifold-chart-coordinate-domain-and-coordinate-functions",
        "def-numerical-rank-relative-to-a-norm-scale-and-tolerance",
        "def-polar-surface-measure-on-the-unit-sphere",
        "def-reduced-graph-of-groups-word",
        "def-smoothly-compatible-charts",
        "def-standard-relative-floating-point-model-and-unit-roundoff",
        "ex-a-backward-stable-solution-of-an-ill-conditioned-system",
        "ex-catastrophic-cancellation-and-a-stable-reformulation",
        "ex-decomposing-the-square-of-the-two-dimensional-s-three-character",
        "ex-normal-equations-versus-qr-conditioning",
        "ex-s-four-has-five-conjugacy-classes-of-sizes-one-six-three-eight-and-six",
        "ex-the-splitting-lemma-instantiated-at-the-published-module-theorem",
        "ex-todd-coxeter-as-a-partial-coset-enumeration-procedure",
        "fs-complexification-doubles-finite-dimension",
        "fs-member-equivalence-is-transitive-in-any-pointed-category-with-pullbacks",
        "fs-the-members-of-an-object-form-an-abelian-group",
        "fs-the-product-lebesgue-sigma-algebra-is-the-full-euclidean-lebesgue-sigma-algebra",
        "lem-c-one-diffeomorphisms-map-lebesgue-measurable-sets-to-lebesgue-measurable-sets",
        "lem-induced-word-map-has-the-free-extension-property",
        "lem-trivial-words-in-a-recursively-presented-group-are-recursively-enumerable",
        "prop-countable-disjoint-unions-of-fixed-dimensional-smooth-manifolds-are-smooth-manifolds",
        "rem-caratheodory-also-constructs-the-product-measure",
        "thm-ab5-is-equivalent-to-exactness-of-filtered-colimits",
        "thm-bass-serre-structure-theorem",
        "thm-branch-discrepancies-for-logarithm-and-complex-powers",
        "thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions",
        "thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures",
        "thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces",
        "thm-grushko-decomposition-and-rank-additivity",
        "thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets",
        "thm-member-equivalence-is-transitive",
        "thm-normal-form-for-fundamental-groups-of-graphs-of-groups",
        "thm-polar-coordinates-formula-for-lebesgue-measure",
        "thm-tonelli-and-fubini-for-completed-product-measures",
        "thm-weierstrass-factorization-for-entire-functions",
        "thm-zero-exponent-is-bounded-by-entire-order"
      ]
    }
  ],
  "mechanical_residue": "",
  "live_items": [
    {
      "id": "cex-enumerating-relator-consequences-does-not-decide-nontriviality",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-product-of-complete-measures-need-not-be-complete",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-graph-of-a-measurable-function-is-lebesgue-null",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "def-bass-serre-tree-of-a-graph-of-groups",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "def-c-r-and-smooth-maps-between-smooth-manifolds",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "def-forward-and-backward-stability-for-a-problem-family",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "def-manifold-chart-coordinate-domain-and-coordinate-functions",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "def-numerical-rank-relative-to-a-norm-scale-and-tolerance",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "def-polar-surface-measure-on-the-unit-sphere",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "def-reduced-graph-of-groups-word",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "def-smoothly-compatible-charts",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "def-standard-relative-floating-point-model-and-unit-roundoff",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-a-backward-stable-solution-of-an-ill-conditioned-system",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-catastrophic-cancellation-and-a-stable-reformulation",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-decomposing-the-square-of-the-two-dimensional-s-three-character",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-normal-equations-versus-qr-conditioning",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-s-four-has-five-conjugacy-classes-of-sizes-one-six-three-eight-and-six",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-splitting-lemma-instantiated-at-the-published-module-theorem",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-todd-coxeter-as-a-partial-coset-enumeration-procedure",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-complexification-doubles-finite-dimension",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-member-equivalence-is-transitive-in-any-pointed-category-with-pullbacks",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-the-members-of-an-object-form-an-abelian-group",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-the-product-lebesgue-sigma-algebra-is-the-full-euclidean-lebesgue-sigma-algebra",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-c-one-diffeomorphisms-map-lebesgue-measurable-sets-to-lebesgue-measurable-sets",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-induced-word-map-has-the-free-extension-property",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-trivial-words-in-a-recursively-presented-group-are-recursively-enumerable",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-countable-disjoint-unions-of-fixed-dimensional-smooth-manifolds-are-smooth-manifolds",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "rem-caratheodory-also-constructs-the-product-measure",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-ab5-is-equivalent-to-exactness-of-filtered-colimits",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-bass-serre-structure-theorem",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-branch-discrepancies-for-logarithm-and-complex-powers",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-grushko-decomposition-and-rank-additivity",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-member-equivalence-is-transitive",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-normal-form-for-fundamental-groups-of-graphs-of-groups",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-polar-coordinates-formula-for-lebesgue-measure",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-tonelli-and-fubini-for-completed-product-measures",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-weierstrass-factorization-for-entire-functions",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-zero-exponent-is-bounded-by-entire-order",
      "scope": "run",
      "owner": "c"
    }
  ],
  "assigned_items": [
    {
      "id": "cex-product-of-complete-measures-need-not-be-complete",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-graph-of-a-measurable-function-is-lebesgue-null",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "def-polar-surface-measure-on-the-unit-sphere",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-the-product-lebesgue-sigma-algebra-is-the-full-euclidean-lebesgue-sigma-algebra",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-c-one-diffeomorphisms-map-lebesgue-measurable-sets-to-lebesgue-measurable-sets",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "rem-caratheodory-also-constructs-the-product-measure",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-branch-discrepancies-for-logarithm-and-complex-powers",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-polar-coordinates-formula-for-lebesgue-measure",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-tonelli-and-fubini-for-completed-product-measures",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-weierstrass-factorization-for-entire-functions",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-zero-exponent-is-bounded-by-entire-order",
      "scope": "run",
      "owner": "c"
    }
  ],
  "live_tuples": [
    {
      "id": "cex-product-of-complete-measures-need-not-be-complete",
      "model": "gpt-5.6-terra",
      "context_sha256": "3e5bbbd95af754b657bb5116860b340470eaba50f449631e57500c349708b248",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "cor-graph-of-a-measurable-function-is-lebesgue-null",
      "model": "gpt-5.6-terra",
      "context_sha256": "f99b99c4f92a21780df31b2b23899df3860c5f9018a97cacb9f31cbc8d11692b",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "def-polar-surface-measure-on-the-unit-sphere",
      "model": "gpt-5.6-terra",
      "context_sha256": "0a62d17458bc10ca22d091634e6e815efc8b577511f0cd0b55a03b3a32914493",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "fs-the-product-lebesgue-sigma-algebra-is-the-full-euclidean-lebesgue-sigma-algebra",
      "model": "gpt-5.6-terra",
      "context_sha256": "07294b80d33485ff7ee229fa50a9c5910d2ab8278a745d567347b82ef861113d",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "lem-c-one-diffeomorphisms-map-lebesgue-measurable-sets-to-lebesgue-measurable-sets",
      "model": "gpt-5.6-terra",
      "context_sha256": "af967bd39a9006b8e28f976de42a51a0cad390b6bf56d0db81c115e17e356876",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "rem-caratheodory-also-constructs-the-product-measure",
      "model": "gpt-5.6-terra",
      "context_sha256": "1399662aa2369e9ab6950418185ad37110bc816ee32aef90614ee58b7e920e8b",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-branch-discrepancies-for-logarithm-and-complex-powers",
      "model": "gpt-5.6-terra",
      "context_sha256": "90e2951c11bdf22cc68f845ecceb5670575c9d3ef2d9588f4e4a1a0a6de726ca",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions",
      "model": "gpt-5.6-terra",
      "context_sha256": "75e8fa39ba7da9b4ba52be66dc69e8277f379a33c4f498fcfc849d47835c4536",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures",
      "model": "gpt-5.6-terra",
      "context_sha256": "6dba2792cd1a39bb40cfd4b9af6bef7de8c662a6a4082126d8a71d704739865f",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces",
      "model": "gpt-5.6-terra",
      "context_sha256": "a7b3075a34d2a6e33d02e0adc6e1ba855693fb86ff4b45efaf8d0431d83d5e6f",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets",
      "model": "gpt-5.6-terra",
      "context_sha256": "8c253bc754d5d836f9dfe1b3f0debdb6adb67eecda262e93c9b614bf025c8177",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-polar-coordinates-formula-for-lebesgue-measure",
      "model": "gpt-5.6-terra",
      "context_sha256": "9a173eeccfffdaf3e5c9eb786d0d4354d05ed1b950b13fd2199cdb45270c3aaf",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-tonelli-and-fubini-for-completed-product-measures",
      "model": "gpt-5.6-terra",
      "context_sha256": "661f5a50de890bdbbebfadeba0733929eb5a39d87893a6f9ca67af1cf1dffacd",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-weierstrass-factorization-for-entire-functions",
      "model": "gpt-5.6-terra",
      "context_sha256": "3f0d0a99632fc9d0c6543473bf1645ce1a586a5a176d4907ff59eabbdcac3938",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-zero-exponent-is-bounded-by-entire-order",
      "model": "gpt-5.6-terra",
      "context_sha256": "d1f5c7d628c9b2c220aad5f1a43a28a5f147c54a0616c5c4f7b704655374938c",
      "scope": "run",
      "status": "unadjudicated"
    }
  ]
}
```

---

# Step 8 — group **c**, run `frontier-23`

You are the group Alpha for batches **6**, **7**: 3 A/B pair(s), 6 page(s), 111 item(s), 15 open rejection(s) over 15 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-23-alpha-c-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
in `research/frontier-23-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 6 | `product-measures-and-the-fubini-tonelli-theorems` | A | measure-theory | 288.021 | `countability-axioms-and-cardinal-functions`, `modes-of-convergence-egorov-and-lusin-examples`, `the-real-gamma-and-beta-functions` |
| 6 | `product-measures-and-the-fubini-tonelli-theorems-examples` | B | measure-theory | 288.022 | `product-measures-and-the-fubini-tonelli-theorems`, `further-trigonometric-identities-and-inverses` |
| 7 | `conformal-mapping-branches-and-the-schwarz-lemma` | A | complex-analysis | 325 | `the-riemann-sphere-and-mobius-transformations`, `the-winding-number-and-the-global-cauchy-theorem`, `the-logarithm-and-general-powers`, `roots-and-rational-powers` |
| 7 | `conformal-mapping-branches-and-the-schwarz-lemma-examples` | B | complex-analysis | 326 | `conformal-mapping-branches-and-the-schwarz-lemma` |
| 7 | `infinite-products-and-weierstrass-factorisation` | A | complex-analysis | 337 | `normal-families-and-montels-theorem`, `the-identity-theorem-and-the-open-mapping-theorem`, `absolute-convergence-and-rearrangement` |
| 7 | `infinite-products-and-weierstrass-factorisation-examples` | B | complex-analysis | 338 | `infinite-products-and-weierstrass-factorisation` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `product-measures-and-the-fubini-tonelli-theorems` — Product Measures and the Fubini Tonelli Theorems (39 item(s))

- `def-measurable-rectangle` · definition — Measurable rectangles in a product of measurable spaces
- `def-product-sigma-algebra-and-finite-product-sigma-algebras` · definition — The product $\sigma$-algebra and its finite iterates
- `lem-finite-rectangle-unions-form-a-generating-algebra` · lemma — Finite disjoint unions of measurable rectangles form an algebra generating the product $\sigma$-algebra
- `rem-caratheodory-also-constructs-the-product-measure` · remark — The product measure can also be constructed from the rectangle algebra by Caratheodory extension
- `def-sections-of-sets-and-functions-on-products` · definition — Sections E_x, E^y, f_x, and f^y on a product
- `thm-sections-of-product-measurable-sets-are-measurable` · theorem — Every section of a product-measurable set is measurable
- `thm-sections-of-product-measurable-functions-are-measurable` · theorem — Every section of a product-measurable function is measurable
- `fs-measurable-sections-imply-product-measurability` · false-statement — FALSE: if every horizontal and vertical section is measurable, then the set is product-measurable
- `prop-sigma-finite-section-measure-functions-are-measurable` · proposition — For $\sigma$-finite measures, the section-measure functions are measurable
- `thm-iterated-section-measures-agree-on-product-measurable-sets` · theorem — For $\sigma$-finite measures, the two section-measure integrals of a measurable set agree
- `def-product-measure-on-sigma-finite-spaces` · definition — The product measure of two $\sigma$-finite measure spaces
- `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique` · theorem — For $\sigma$-finite factors, the product measure exists, has the rectangle formula, is $\sigma$-finite, and is unique
- `fs-product-measure-is-unique-without-sigma-finiteness` · false-statement — FALSE: the rectangle formula determines a unique product measure without any $\sigma$-finiteness hypothesis
- `thm-tonelli-theorem-for-sigma-finite-product-spaces` · theorem — Tonelli's theorem for nonnegative measurable functions on a $\sigma$-finite product
- `fs-tonelli-holds-without-sigma-finiteness` · false-statement — FALSE: Tonelli's theorem still holds without any $\sigma$-finiteness hypothesis
- `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces` · theorem — Fubini's theorem for $L^1$ functions on a $\sigma$-finite product
- `rem-fubini-should-be-applied-after-tonelli-on-absolute-values` · remark — To use Fubini safely, first use Tonelli on $|f|$
- `def-completed-product-measure` · definition — The completed product measure
- `thm-tonelli-and-fubini-for-completed-product-measures` · theorem — Tonelli and Fubini for the completed product, with only almost-everywhere section measurability
- `fs-completed-product-sections-are-measurable-for-every-parameter` · false-statement — FALSE: every section of a completed-product measurable function is measurable
- `thm-borel-products-of-euclidean-spaces-are-euclidean-borel` · theorem — The Borel product of $\mathbb R^m$ and $\mathbb R^n$ is the Borel $\sigma$-algebra of $\mathbb R^{m+n}$
- `rem-borel-product-equality-needs-second-countability` · remark — The equality B(X) tensor B(Y) = B(X x Y) needs second countability
- `thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets` · theorem — On Borel subsets of $\mathbb R^{m+n}$, the product $\lambda_m \times \lambda_n$ agrees with $\lambda_{m+n}$
- `thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures` · theorem — The Euclidean Lebesgue measure is the completion of the product of the factor Lebesgue measures
- `fs-product-of-complete-measure-spaces-is-complete` · false-statement — FALSE: the product of two complete measure spaces is complete
- `fs-the-product-lebesgue-sigma-algebra-is-the-full-euclidean-lebesgue-sigma-algebra` · false-statement — FALSE: $\mathcal L(\mathbb R^m) \otimes \mathcal L(\mathbb R^n)$ already equals $\mathcal L(\mathbb R^{m+n})$
- `thm-region-under-a-nonnegative-measurable-function-has-product-measure-equal-to-its-integral` · theorem — The region under a nonnegative measurable function is product-measurable and has measure equal to the integral
- `cor-graph-of-a-measurable-function-is-lebesgue-null` · corollary — The graph of a measurable function $\mathbb R^n \to \mathbb R$ is Lebesgue null
- `def-distribution-function-of-absolute-value` · definition — The distribution function of absolute value
- `thm-layer-cake-formula-for-l-p-powers` · theorem — For $0 < p < \infty$, the layer-cake formula computes $\int |f|^p$ from the distribution function
- `def-polar-surface-measure-on-the-unit-sphere` · definition — The Borel measure on $S^{n-1}$ induced by polar decomposition
- `thm-polar-coordinates-formula-for-lebesgue-measure` · theorem — Polar coordinates decompose Lebesgue measure into $r^{n-1} \, dr \, d\sigma$
- `rem-polar-coordinates-recover-the-published-ball-volume-and-gaussian-formulas` · remark — The polar formula recovers the published $n$-ball volumes and Gaussian constants
- `lem-c-one-diffeomorphisms-map-lebesgue-null-sets-to-null-sets` · lemma — A $C^1$ diffeomorphism maps Lebesgue null sets to Lebesgue null sets
- `lem-c-one-diffeomorphisms-map-lebesgue-measurable-sets-to-lebesgue-measurable-sets` · lemma — A $C^1$ diffeomorphism maps Lebesgue measurable sets to Lebesgue measurable sets
- `lem-c-one-change-of-variables-for-continuous-compactly-supported-integrands` · lemma — The published Riemann change-of-variables theorem already gives the Lebesgue formula for continuous compactly supported integrands
- `thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions` · theorem — A $C^1$ diffeomorphism satisfies the change-of-variables formula for nonnegative Lebesgue measurable functions
- `cor-c-one-change-of-variables-for-l-one-functions` · corollary — A $C^1$ diffeomorphism satisfies the change-of-variables formula for $L^1$ functions
- `rem-finite-product-measures-are-the-base-case-for-countable-product-constructions` · remark — Finite product measures are the base case for later countable-product constructions

### `product-measures-and-the-fubini-tonelli-theorems-examples` — Product Measures and the Fubini Tonelli Theorems — Examples (11 item(s))

- `ex-one-dimensional-gaussian-integral-from-tonelli-and-polar-coordinates` · example — Tonelli and the plane polar formula give $\int_{\mathbb R} e^{-x^2} \, dx = \sqrt{\pi}$
- `ex-zeta-two-from-tonelli-and-the-geometric-series` · example — Tonelli and the geometric series compute $\int_0^1 \! \int_0^1 \frac{1}{1-xy} \, dx \, dy = \pi^2/6$
- `ex-region-under-x-squared-has-measure-one-third` · example — The region under $x \mapsto x^2$ on $[0,1]$ has measure $1/3$
- `ex-cavalieri-computes-the-area-of-the-unit-disc` · example — Cavalieri computes the area of the unit disc from its sections
- `cex-measurable-sections-do-not-imply-product-measurability` · counterexample — A set can have measurable horizontal and vertical sections and still fail to be product-measurable
- `cex-tonelli-fails-without-sigma-finiteness-on-the-diagonal` · counterexample — The diagonal under Lebesgue times counting measure shows that Tonelli needs $\sigma$-finiteness
- `cex-fubini-fails-without-l-one-integrability` · counterexample — The function $(x^2-y^2)/(x^2+y^2)^2$ shows that Fubini's integrability hypothesis is not decorative
- `cex-equal-iterated-integrals-do-not-imply-l-one-integrability` · counterexample — Equal iterated integrals still do not imply product integrability
- `cex-product-measure-need-not-be-unique-without-sigma-finiteness` · counterexample — Without $\sigma$-finiteness, the rectangle formula need not determine a unique product measure
- `cex-product-of-complete-measures-need-not-be-complete` · counterexample — A nonmeasurable subset of a null line shows that the product of complete measures need not be complete
- `cex-completed-product-sections-need-not-be-pointwise-measurable` · counterexample — A completed-product measurable set can have a nonmeasurable exceptional section

### `conformal-mapping-branches-and-the-schwarz-lemma` — Conformal Mapping, Branches, and the Schwarz Lemma (23 item(s))

- `rem-holomorphic-logarithm-and-principal-power-dictionary` · remark — Dictionary for holomorphic logarithm branches, the principal logarithm, and principal powers
- `def-complex-power-from-holomorphic-logarithm-branch` · definition — Complex powers defined from a holomorphic logarithm branch
- `thm-branch-power-agrees-with-integer-powers` · theorem — Branch-defined complex powers agree with integer powers
- `thm-principal-branch-power-agrees-with-positive-real-power` · theorem — On positive reals, the principal branch power agrees with the published real power
- `thm-branch-discrepancies-for-logarithm-and-complex-powers` · theorem — Different branches shift logarithms by $2\pi i k$ and complex powers by roots of unity
- `def-conformal-equivalence-and-automorphism-group` · definition — Conformal equivalence and the automorphism group of a domain
- `def-unit-disc-upper-half-plane-and-blaschke-factor` · definition — The unit disc, the upper half-plane, and Blaschke factors
- `thm-blaschke-factor-is-a-disc-automorphism` · theorem — Blaschke factors are automorphisms of the disc
- `thm-unit-disc-schwarz-lemma-with-rigidity` · theorem — Schwarz lemma with the equality cases
- `thm-schwarz-pick-lemma-on-the-unit-disc` · theorem — Schwarz-Pick lemma on the unit disc
- `thm-disc-automorphisms-are-rotated-blaschke-factors` · theorem — Every automorphism of the disc is a rotated Blaschke factor
- `thm-upper-half-plane-automorphisms-are-real-mobius-maps` · theorem — Automorphisms of the upper half-plane are real Mobius maps
- `def-poincare-metric-and-distance-on-the-disc` · definition — The Poincare metric and distance on the unit disc
- `thm-poincare-distance-formula-and-disc-automorphism-invariance` · theorem — The Poincare distance has the formula $2\operatorname{artanh}|\varphi_z(w)|$ and is disc-automorphism invariant
- `rem-biholomorphisms-are-conformal-with-holomorphic-inverse` · remark — Biholomorphisms are conformal and have holomorphic inverse
- `thm-conformal-equivalence-is-an-equivalence-relation` · theorem — Conformal equivalence is an equivalence relation
- `thm-sector-power-map-is-biholomorphic-on-narrow-sectors` · theorem — Power maps are biholomorphisms on sectors of width less than $2\pi/n$
- `thm-slit-plane-root-branch-biholomorphism-to-a-sector` · theorem — A slit-plane root branch biholomorphically parametrizes a sector
- `thm-principal-logarithm-biholomorphism-to-the-principal-strip` · theorem — The principal logarithm is a biholomorphism from the slit plane to the principal strip
- `thm-principal-exponential-biholomorphism-from-principal-strip` · theorem — The exponential is the inverse biholomorphism from the principal strip to the slit plane
- `thm-joukowski-biholomorphism-outside-unit-disc` · theorem — The Joukowski map is a biholomorphism from the exterior disc onto $\mathbb{C}\setminus[-1,1]$
- `thm-sine-biholomorphism-from-upper-half-strip` · theorem — The sine map biholomorphically sends an upper half-strip onto the upper half-plane
- `thm-the-sphere-the-plane-and-the-disc-are-pairwise-nonbiholomorphic` · theorem — The sphere, the plane, and the disc are pairwise non-biholomorphic

### `conformal-mapping-branches-and-the-schwarz-lemma-examples` — Conformal Mapping, Branches, and the Schwarz Lemma — Examples (10 item(s))

- `ex-principal-logarithm-breaks-additivity-at-minus-one` · example — The principal logarithm fails to turn multiplication into addition at $(-1,-1)$
- `ex-principal-square-root-breaks-multiplicativity-at-minus-one` · example — The principal square root fails to respect products at $(-1,-1)$
- `ex-strip-to-disc-biholomorphism-by-exponential-and-cayley` · example — A horizontal strip is mapped biholomorphically to the disc by an exponential and a Cayley transform
- `ex-disc-automorphism-swapping-two-points` · example — A disc automorphism carrying one prescribed point to another
- `ex-power-map-sends-a-sector-to-a-half-plane` · example — A power map sends a sector to a half-plane
- `ex-joukowski-sends-circles-to-ellipses` · example — The Joukowski map sends circles centered at the origin to ellipses
- `ex-sine-sends-a-half-strip-to-the-upper-half-plane` · example — Boundary tracking for the sine biholomorphism of the upper half-strip
- `cex-complex-conjugation-preserves-unoriented-angles-but-is-not-conformal` · counterexample — Complex conjugation preserves angle magnitudes but is not conformal
- `fs-conformal-maps-preserve-euclidean-lengths` · false-statement — FALSE: conformal maps preserve Euclidean lengths
- `fs-schwarz-lemma-holds-without-a-fixed-point-at-zero` · false-statement — FALSE: Schwarz's lemma remains true without the hypothesis $f(0)=0$

### `infinite-products-and-weierstrass-factorisation` — Infinite Products and the Weierstrass Factorisation Theorem (20 item(s))

- `rem-complex-infinite-product-dictionary` · remark — Dictionary for using the published infinite-product definition over $\mathbb{C}$
- `thm-absolute-convergence-criterion-for-complex-infinite-products` · theorem — Absolute convergence criterion for complex infinite products
- `def-normal-convergence-of-holomorphic-products` · definition — Normal convergence of holomorphic products
- `thm-normal-convergence-of-holomorphic-products` · theorem — Normally convergent products define holomorphic functions with the expected zeros
- `cor-logarithmic-derivative-of-a-normally-convergent-product` · corollary — The logarithmic derivative of a normally convergent product
- `def-weierstrass-elementary-factor` · definition — Weierstrass elementary factors
- `lem-unit-disc-estimate-for-weierstrass-elementary-factors` · lemma — The unit-disc estimate for Weierstrass elementary factors
- `def-weierstrass-products-canonical-products-and-genus` · definition — Weierstrass products, canonical products, and genus
- `def-exponent-of-convergence-of-a-zero-sequence` · definition — The exponent of convergence of a zero sequence
- `thm-canonical-product-convergence-from-exponent-sum` · theorem — A canonical product converges when the $(p+1)$-power reciprocal sum converges
- `thm-weierstrass-product-theorem-on-the-complex-plane` · theorem — Weierstrass product theorem on the complex plane
- `thm-weierstrass-factorization-for-entire-functions` · theorem — Weierstrass factorization for entire functions
- `cor-meromorphic-functions-on-the-plane-are-entire-quotients` · corollary — Every meromorphic function on $\mathbb{C}$ is a quotient of entire functions
- `thm-sine-has-its-weierstrass-product` · theorem — The Weierstrass product for sine
- `thm-jensen-formula-on-a-disc` · theorem — Jensen's formula on a disc
- `cor-jensen-zero-counting-bound` · corollary — Jensen's formula bounds the number of zeros in a smaller disc
- `def-order-of-an-entire-function` · definition — The order of an entire function
- `thm-zero-exponent-is-bounded-by-entire-order` · theorem — The zero-sequence exponent is at most the entire order
- `thm-hadamard-factorization-for-finite-order-entire-functions` · theorem — Hadamard factorization for finite-order entire functions
- `cor-nonintegral-entire-order-bounds-canonical-genus` · corollary — A nonintegral order bounds the canonical genus by its floor

### `infinite-products-and-weierstrass-factorisation-examples` — Infinite Products and the Weierstrass Factorisation Theorem — Examples (8 item(s))

- `ex-product-of-one-plus-z-over-two-to-n-is-entire-and-zero-free` · example — The product $\prod_{n \ge 1}(1 + z/2^n)$ defines an entire zero-free function
- `ex-sine-product-recovers-the-basel-sum` · example — The sine product recovers the Basel sum
- `ex-jensen-formula-for-a-polynomial` · example — Jensen's formula for a polynomial
- `ex-canonical-product-for-zeros-at-the-squares` · example — A genus-zero canonical product for zeros at the squares
- `cex-conditional-linear-sum-does-not-force-product-convergence` · counterexample — A conditionally convergent linear term does not force a nonzero product limit
- `fs-weierstrass-factorization-is-unique` · false-statement — FALSE: Weierstrass factorization is unique
- `fs-every-zero-sequence-admits-a-genus-zero-canonical-product` · false-statement — FALSE: every discrete zero sequence admits a genus-zero canonical product
- `fs-entire-order-equals-canonical-genus` · false-statement — FALSE: the order of an entire function always equals the canonical genus in its factorization

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
| `cex-product-of-complete-measures-need-not-be-complete` | `product-measures-and-the-fubini-tonelli-theorems-examples` | gpt-5.6-terra | `3e5bbbd95af754b657bb5116860b340470eaba50f449631e57500c349708b248` |
| `cor-graph-of-a-measurable-function-is-lebesgue-null` | `product-measures-and-the-fubini-tonelli-theorems` | gpt-5.6-terra | `f99b99c4f92a21780df31b2b23899df3860c5f9018a97cacb9f31cbc8d11692b` |
| `def-polar-surface-measure-on-the-unit-sphere` | `product-measures-and-the-fubini-tonelli-theorems` | gpt-5.6-terra | `0a62d17458bc10ca22d091634e6e815efc8b577511f0cd0b55a03b3a32914493` |
| `fs-the-product-lebesgue-sigma-algebra-is-the-full-euclidean-lebesgue-sigma-algebra` | `product-measures-and-the-fubini-tonelli-theorems` | gpt-5.6-terra | `07294b80d33485ff7ee229fa50a9c5910d2ab8278a745d567347b82ef861113d` |
| `lem-c-one-diffeomorphisms-map-lebesgue-measurable-sets-to-lebesgue-measurable-sets` | `product-measures-and-the-fubini-tonelli-theorems` | gpt-5.6-terra | `af967bd39a9006b8e28f976de42a51a0cad390b6bf56d0db81c115e17e356876` |
| `rem-caratheodory-also-constructs-the-product-measure` | `product-measures-and-the-fubini-tonelli-theorems` | gpt-5.6-terra | `1399662aa2369e9ab6950418185ad37110bc816ee32aef90614ee58b7e920e8b` |
| `thm-branch-discrepancies-for-logarithm-and-complex-powers` | `conformal-mapping-branches-and-the-schwarz-lemma` | gpt-5.6-terra | `90e2951c11bdf22cc68f845ecceb5670575c9d3ef2d9588f4e4a1a0a6de726ca` |
| `thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions` | `product-measures-and-the-fubini-tonelli-theorems` | gpt-5.6-terra | `75e8fa39ba7da9b4ba52be66dc69e8277f379a33c4f498fcfc849d47835c4536` |
| `thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures` | `product-measures-and-the-fubini-tonelli-theorems` | gpt-5.6-terra | `6dba2792cd1a39bb40cfd4b9af6bef7de8c662a6a4082126d8a71d704739865f` |
| `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces` | `product-measures-and-the-fubini-tonelli-theorems` | gpt-5.6-terra | `a7b3075a34d2a6e33d02e0adc6e1ba855693fb86ff4b45efaf8d0431d83d5e6f` |
| `thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets` | `product-measures-and-the-fubini-tonelli-theorems` | gpt-5.6-terra | `8c253bc754d5d836f9dfe1b3f0debdb6adb67eecda262e93c9b614bf025c8177` |
| `thm-polar-coordinates-formula-for-lebesgue-measure` | `product-measures-and-the-fubini-tonelli-theorems` | gpt-5.6-terra | `9a173eeccfffdaf3e5c9eb786d0d4354d05ed1b950b13fd2199cdb45270c3aaf` |
| `thm-tonelli-and-fubini-for-completed-product-measures` | `product-measures-and-the-fubini-tonelli-theorems` | gpt-5.6-terra | `661f5a50de890bdbbebfadeba0733929eb5a39d87893a6f9ca67af1cf1dffacd` |
| `thm-weierstrass-factorization-for-entire-functions` | `infinite-products-and-weierstrass-factorisation` | gpt-5.6-terra | `3f0d0a99632fc9d0c6543473bf1645ce1a586a5a176d4907ff59eabbdcac3938` |
| `thm-zero-exponent-is-bounded-by-entire-order` | `infinite-products-and-weierstrass-factorisation` | gpt-5.6-terra | `d1f5c7d628c9b2c220aad5f1a43a28a5f147c54a0616c5c4f7b704655374938c` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 8 — exact closure recovery, `frontier-23`

Read `research/frontier-23-judge-closure.json`,
`research/frontier-23-judge.jsonl`,
`research/frontier-23-judge-adjudications.jsonl`, and the generated `by_item`
ownership map in `research/frontier-23-step8-scope.json`. Take only current
unadjudicated `(id, model, context_sha256)` rows owned by this group; leave
other groups' rows untouched. A row owned by no group is a reported blocker,
not a row to discard.

Append one exact adjudication outcome per owned row. Only
`confirmed_fatal` licenses its coherent repair and matching ledger row; update
only records made stale by that repair. Send a concrete other-group finding to
`research/frontier-23-step8-cross-group.jsonl`, never repair that item.

Write `research/frontier-23-alpha-step8-closure-recovery-<group>.md` with the rows
handled, outcomes, licensed repairs, rejudge targets, cross-group alerts, and
blockers. Preserve shared append-only ledgers.
