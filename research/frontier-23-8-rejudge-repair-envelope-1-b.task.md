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
  "group": "b",
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
      "id": "ex-normal-equations-versus-qr-conditioning",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-complexification-doubles-finite-dimension",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-countable-disjoint-unions-of-fixed-dimensional-smooth-manifolds-are-smooth-manifolds",
      "scope": "run",
      "owner": "b"
    }
  ],
  "live_tuples": [
    {
      "id": "def-c-r-and-smooth-maps-between-smooth-manifolds",
      "model": "gpt-5.6-terra",
      "context_sha256": "2c65ec6e0e9484742066798b4446a4ffd963b4291381d9974e54bcd7ae3964c3",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "def-forward-and-backward-stability-for-a-problem-family",
      "model": "gpt-5.6-terra",
      "context_sha256": "ac31ab1e249101f6eef6b280e62bfae98579e034fa7a641b2364b8ff96bced60",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "def-manifold-chart-coordinate-domain-and-coordinate-functions",
      "model": "gpt-5.6-terra",
      "context_sha256": "f872d34c974bd87f6e0bb01e53bcfba43095765d91702cfb9c207aabd759d7fb",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "def-numerical-rank-relative-to-a-norm-scale-and-tolerance",
      "model": "gpt-5.6-terra",
      "context_sha256": "01ba8f3aff8edc0da44d990a76e5418e5a295b9d80afef0747606eb60c68e173",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "def-smoothly-compatible-charts",
      "model": "gpt-5.6-terra",
      "context_sha256": "3bc9767458b54c3394a2882bd7a2e22575168b4fcc810588ed2b3c304cb1b091",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "def-standard-relative-floating-point-model-and-unit-roundoff",
      "model": "gpt-5.6-terra",
      "context_sha256": "491cc7fe4bfcdffa35325b81770768e61cbdf3a299ca2969c877e2544005282e",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "ex-a-backward-stable-solution-of-an-ill-conditioned-system",
      "model": "gpt-5.6-terra",
      "context_sha256": "afb7b0bea7abdef0dbd8869543ae3ec47dcd622d9a10e5aea320fa9bcb0230ec",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "ex-catastrophic-cancellation-and-a-stable-reformulation",
      "model": "gpt-5.6-terra",
      "context_sha256": "5d77c38bb63cf89d16c8024578a2ce548f0c45e551c31372e430f8ed00b95ab2",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "ex-normal-equations-versus-qr-conditioning",
      "model": "gpt-5.6-terra",
      "context_sha256": "afe73a15349f268e072fe12ebb1d670ae26c7c19eb31bf19ca17314288f3e0a7",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "fs-complexification-doubles-finite-dimension",
      "model": "gpt-5.6-terra",
      "context_sha256": "211f57c398f5e76ee9d5b9b85f1b2082d901c4f92ee09fa9b56b839ee88965e6",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "prop-countable-disjoint-unions-of-fixed-dimensional-smooth-manifolds-are-smooth-manifolds",
      "model": "gpt-5.6-terra",
      "context_sha256": "b4baba6c3bce68565a955810dab66e287174d8b0339a4e962f294a9a8914bb23",
      "scope": "run",
      "status": "unadjudicated"
    }
  ]
}
```

---

# Step 8 — group **b**, run `frontier-23`

You are the group Alpha for batches **2**, **5**, **9**: 5 A/B pair(s), 10 page(s), 177 item(s), 11 open rejection(s) over 11 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-23-alpha-b-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
| 2 | `complexification-realification-and-real-structures` | A | linear-algebra | 107.001 | `tensor-products-of-modules`, `diagonalisation-and-the-minimal-polynomial` |
| 2 | `complexification-realification-and-real-structures-examples` | B | linear-algebra | 107.002 | `complexification-realification-and-real-structures` |
| 2 | `exterior-powers-orientation-and-hodge-duality` | A | linear-algebra | 107.003 | `tensor-products-of-modules`, `inner-product-spaces-and-orthogonality` |
| 2 | `exterior-powers-orientation-and-hodge-duality-examples` | B | linear-algebra | 107.004 | `exterior-powers-orientation-and-hodge-duality` |
| 5 | `matrix-norms-condition-numbers-and-numerical-stability` | A | linear-algebra | 168.001 | `rn-as-a-normed-space`, `the-spectral-theorem-and-singular-value-decomposition` |
| 5 | `matrix-norms-condition-numbers-and-numerical-stability-examples` | B | linear-algebra | 168.002 | `matrix-norms-condition-numbers-and-numerical-stability` |
| 9 | `smooth-manifolds-and-smooth-maps` | A | differential-geometry | 443 | `topological-spaces-and-continuity`, `subspaces-products-and-quotients`, `connectedness`, `compactness`, `the-topology-of-euclidean-space`, `separation-axioms`, `urysohn-lemma-and-tietze`, `partitions-of-unity-and-paracompactness`, `countability-axioms-and-cardinal-functions`, `metrization-theorems`, `the-total-derivative`, `mixed-partials-taylor-and-extrema` |
| 9 | `smooth-manifolds-and-smooth-maps-examples` | B | differential-geometry | 444 | `smooth-manifolds-and-smooth-maps` |
| 9 | `euclidean-ordinary-differential-equations-with-smooth-dependence` | A | differential-geometry | 457 | `completeness-and-uniform-continuity`, `uniform-convergence-of-functions`, `properties-of-the-integral-and-the-working-ftc`, `the-total-derivative`, `mixed-partials-taylor-and-extrema`, `picard-lindelof-and-first-order-odes` |
| 9 | `euclidean-ordinary-differential-equations-with-smooth-dependence-examples` | B | differential-geometry | 458 | `euclidean-ordinary-differential-equations-with-smooth-dependence` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `complexification-realification-and-real-structures` — Complexification, Realification and Real Structures (18 item(s))

- `def-realification-of-a-complex-vector-space` · definition — Realification of a complex vector space by restriction of scalars
- `def-complexification-of-a-real-vector-space` · definition — Complexification as $\mathbb C\otimes_{\mathbb R}V$ with its canonical real-linear embedding
- `def-direct-sum-model-of-complexification` · definition — The direct-sum model $V\oplus iV$ of a complexification
- `def-complexification-of-a-real-linear-map` · definition — Complexification of a real-linear map
- `def-conjugation-and-real-structure-on-a-complex-vector-space` · definition — Conjugations and real structures on a complex vector space
- `def-fixed-real-form-of-a-conjugation` · definition — The fixed real form of a conjugation
- `thm-tensor-and-direct-sum-models-of-complexification-agree` · theorem — The tensor and direct-sum models of complexification are canonically complex-linearly isomorphic
- `thm-universal-property-and-uniqueness-of-complexification` · theorem — Complexification is initial for real-linear maps into complex vector spaces, and is unique up to unique isomorphism
- `prop-complexification-is-functorial` · proposition — Complexification is a functor on real vector spaces and real-linear maps
- `thm-complexification-preserves-kernels-images-rank-nullity-and-short-exact-sequences` · theorem — Complexification preserves kernels, images, finite rank, nullity, and short exact sequences
- `thm-a-real-basis-complexifies-to-a-complex-basis` · theorem — A real basis becomes a complex basis after complexification, so $\dim_{\mathbb C}(\mathbb C\otimes_{\mathbb R}V)=\dim_{\mathbb R}V$
- `cor-realification-doubles-finite-dimension` · corollary — Realification doubles finite dimension
- `thm-fixed-points-of-a-conjugation-form-a-real-space-and-its-complexification-recovers-the-ambient-space` · theorem — The fixed points of a conjugation form a real vector space whose complexification recovers the ambient complex space
- `cor-real-forms-correspond-to-conjugations` · corollary — Real forms of a complex vector space correspond exactly to conjugations
- `thm-a-complex-linear-operator-comes-from-a-real-operator-exactly-when-it-commutes-with-the-chosen-conjugation` · theorem — A complex-linear operator comes from a real operator exactly when it commutes with the chosen conjugation
- `thm-characteristic-and-minimal-polynomials-survive-complexification` · theorem — Complexification preserves the characteristic and minimal polynomials of a finite-dimensional real operator
- `thm-nonreal-generalised-eigenspaces-occur-in-conjugate-pairs` · theorem — For a real operator, nonreal generalised eigenspaces of the complexification occur in conjugate pairs
- `cor-a-nonreal-eigenvector-produces-an-invariant-real-two-plane` · corollary — A nonreal eigenvector yields an invariant real two-plane and the standard rotation-scaling block

### `complexification-realification-and-real-structures-examples` — Complexification, Realification and Real Structures: Examples and Counterexamples (11 item(s))

- `ex-canonical-embedding-of-r-n-into-c-n` · example — The standard embedding $\mathbb R^n\hookrightarrow\mathbb C^n$ is the canonical complexification map
- `ex-complexification-of-a-real-polynomial-space` · example — Complexifying a real polynomial space gives the same degree bound with complex coefficients
- `ex-realification-of-c-n-has-doubled-dimension` · example — Realifying $\mathbb C^n$ gives $\mathbb R^{2n}$ with basis $e_1,ie_1,\dots,e_n,ie_n$
- `ex-quarter-turn-diagonalises-after-complexification` · example — The real quarter-turn diagonalises after complexification but has no real eigenvector
- `ex-a-nonreal-eigenvector-recovers-a-real-invariant-plane` · example — One nonreal eigenvector reconstructs the invariant real plane of a rotation-scaling block
- `ex-distinct-conjugations-on-c-two-give-distinct-fixed-real-forms` · example — Different conjugations on $\mathbb C^2$ can have different fixed real forms
- `cex-a-complex-linear-map-can-fail-to-preserve-a-chosen-real-form` · counterexample — A complex-linear map need not preserve a chosen real form
- `fs-complexification-doubles-finite-dimension` · false-statement — FALSE: complexification doubles finite dimension
- `fs-every-complex-vector-space-has-a-preferred-real-form` · false-statement — FALSE: every complex vector space has a preferred real form
- `fs-every-complex-linear-operator-descends-to-every-chosen-real-form` · false-statement — FALSE: every complex-linear operator descends to every chosen real form
- `fs-complexification-creates-a-real-eigenvector-whenever-it-creates-a-complex-one` · false-statement — FALSE: complexification creates a real eigenvector whenever it creates a complex one

### `exterior-powers-orientation-and-hodge-duality` — Exterior Powers, Orientation and Hodge Duality (28 item(s))

- `def-alternating-k-linear-map` · definition — Alternating $k$-linear maps
- `def-kth-exterior-power-by-quotient` · definition — The $k$th exterior power as the tensor-power quotient by repeated-vector relations
- `def-decomposable-k-vector-and-basic-wedge-product` · definition — Decomposable $k$-vectors and the basic wedge product
- `def-exterior-algebra-of-a-vector-space` · definition — The graded exterior algebra $\Lambda V$
- `def-kth-exterior-power-of-a-linear-map` · definition — The induced map $\Lambda^kT$ on exterior powers
- `def-orientation-of-a-finite-dimensional-real-vector-space` · definition — Orientation of a finite-dimensional real vector space
- `thm-universal-property-and-uniqueness-of-exterior-powers` · theorem — Exterior powers represent alternating multilinear maps and are unique up to unique isomorphism
- `prop-basic-wedge-is-multilinear-and-alternating` · proposition — The basic wedge map $(v_1,\dots,v_k)\mapsto v_1\wedge\cdots\wedge v_k$ is multilinear and alternating
- `thm-increasing-basis-wedges-form-a-basis` · theorem — Increasing-index wedges of a basis form a basis of $\Lambda^kV$
- `cor-dimension-of-the-kth-exterior-power` · corollary — If $\dim V=n$, then $\dim\Lambda^kV=\binom{n}{k}$
- `cor-the-kth-exterior-power-vanishes-above-dimension` · corollary — If $k>\dim V$, then $\Lambda^kV=0$
- `thm-a-decomposable-wedge-is-nonzero-exactly-for-independent-vectors` · theorem — In a finite-dimensional vector space, a decomposable wedge is nonzero exactly when its vectors are linearly independent
- `thm-exterior-algebra-laws` · theorem — Exterior multiplication is well defined, graded, associative, unital, and graded-commutative
- `thm-exterior-powers-are-functorial` · theorem — Exterior powers are functorial
- `thm-the-matrix-of-an-exterior-power-is-the-signed-minor-matrix` · theorem — In basis-wedge coordinates, the matrix of $\Lambda^kT$ is the signed matrix of $k$-minors
- `cor-the-top-exterior-power-acts-by-the-determinant` · corollary — On $\Lambda^{n}V$, the induced map $\Lambda^{n}T$ is multiplication by $\det T$
- `cor-determinant-multiplicativity-from-the-top-exterior-power` · corollary — Determinant multiplicativity follows from the top exterior power
- `thm-determinant-sign-detects-orientation-change` · theorem — A real linear isomorphism preserves or reverses orientation according to the sign of its determinant
- `def-gram-inner-product-on-kth-exterior-power` · definition — The Gram inner product on $\Lambda^kV$
- `thm-gram-inner-product-on-exterior-powers-is-positive-definite` · theorem — The Gram formula gives a well-defined positive-definite inner product on exterior powers, and $\|v_1\wedge\cdots\wedge v_k\|^2$ is the Gram determinant
- `def-oriented-unit-volume-form` · definition — The oriented unit volume form
- `def-hodge-star-on-an-oriented-inner-product-space` · definition — The Hodge star on an oriented finite-dimensional real inner-product space
- `thm-hodge-star-exists-uniquely-and-has-the-orthonormal-basis-formula` · theorem — The Hodge star exists uniquely and is given by the complementary-basis formula in an oriented orthonormal basis
- `cor-hodge-star-is-an-isometry-and-squares-to-a-sign` · corollary — The Hodge star is an isometry and satisfies $\star^2=(-1)^{k(n-k)}$ on $\Lambda^kV$
- `def-interior-product-on-the-exterior-algebra` · definition — Interior product on the exterior algebra
- `thm-interior-product-is-adjoint-to-exterior-multiplication` · theorem — Interior product is the adjoint of exterior multiplication by a vector
- `prop-wedge-and-interior-product-satisfy-the-graded-anticommutation-identity` · proposition — Exterior multiplication and interior product satisfy the graded anticommutation identity
- `cor-cross-product-is-hodge-star-of-the-wedge` · corollary — In oriented Euclidean three-space, the cross product is $\star(u\wedge v)$

### `exterior-powers-orientation-and-hodge-duality-examples` — Exterior Powers, Orientation and Hodge Duality: Examples and Counterexamples (13 item(s))

- `ex-bases-and-dimensions-of-exterior-powers-of-r-two-r-three-and-r-four` · example — Bases and dimensions of exterior powers of $\mathbb R^2$, $\mathbb R^3$, and $\mathbb R^4$
- `ex-a-wedge-product-detects-linear-dependence` · example — A wedge product detects linear dependence in concrete coordinates
- `ex-exterior-powers-of-a-diagonal-operator` · example — All exterior powers of a diagonal operator are diagonal
- `ex-the-second-exterior-power-matrix-equals-the-signed-minor-matrix` · example — A concrete second exterior-power matrix matches the signed $2\times2$ minors
- `ex-oriented-area-and-volume-from-gram-determinants` · example — Oriented area and volume are recovered from wedges and Gram determinants
- `ex-hodge-star-in-dimensions-two-three-and-four` · example — The Hodge star in dimensions two, three, and four
- `ex-the-cross-product-from-hodge-star-and-wedge` · example — The cross product is recovered from $\star(u\wedge v)$ in $\mathbb R^3$
- `ex-orientation-reversal-negates-the-hodge-star` · example — Reversing orientation negates the Hodge star while keeping the metric fixed
- `cex-a-bivector-in-r-four-need-not-be-decomposable` · counterexample — A bivector in $\mathbb R^4$ need not be decomposable
- `fs-the-exterior-power-is-a-canonical-subspace-of-the-tensor-power-over-every-field` · false-statement — FALSE: $\Lambda^kV$ is canonically a subspace of $V^{\otimes k}$ over every field
- `fs-an-inner-product-determines-an-orientation` · false-statement — FALSE: an inner product determines an orientation
- `fs-an-orientation-determines-an-inner-product` · false-statement — FALSE: an orientation determines an inner product
- `fs-hodge-star-needs-only-the-vector-space-structure` · false-statement — FALSE: Hodge star needs only the vector-space structure

### `matrix-norms-condition-numbers-and-numerical-stability` — Matrix Norms, Condition Numbers and Numerical Stability (23 item(s))

- `def-absolute-and-relative-forward-error-for-a-problem-map` · definition — Absolute and relative forward error for an approximate value of a problem map
- `def-absolute-and-relative-local-condition-numbers-of-a-problem-map` · definition — Absolute and relative local condition numbers of a problem map
- `def-induced-matrix-p-norm` · definition — The matrix norm induced by a published vector p-norm
- `thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized` · theorem — Induced matrix norms are compatible with multiplication, submultiplicative, and satisfy ||I|| = 1
- `thm-induced-one-and-infinity-matrix-norms-are-max-column-and-row-sums` · theorem — The induced 1-norm is the maximum column sum and the induced infinity-norm is the maximum row sum
- `def-frobenius-matrix-norm` · definition — The Frobenius norm $||A||_F=(\sum_{i,j}|a_{ij}|^2)^{1/2}$ on real or complex matrices
- `thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison` · theorem — Spectral and Frobenius norms are unitarily invariant, are given by singular values, and satisfy the sharp rank comparison
- `def-condition-number-of-a-nonsingular-linear-system` · definition — The condition number kappa_p(A) = ||A||_p ||A^{-1}||_p of a nonsingular linear system
- `thm-right-hand-side-perturbation-bound-for-ax-equals-b` · theorem — Right-hand-side perturbations in Ax = b are amplified by the condition number
- `thm-matrix-perturbation-bound-for-ax-equals-b` · theorem — Matrix perturbations in Ax = b obey a first-order condition-number bound
- `thm-reciprocal-spectral-condition-number-is-the-relative-distance-to-singularity` · theorem — The reciprocal spectral condition number is the relative distance to singularity
- `thm-residual-to-forward-error-bounds-for-linear-systems` · theorem — Residual bounds on forward error for a nonsingular linear system
- `def-normwise-and-componentwise-backward-error-for-linear-systems` · definition — Normwise and componentwise backward error for an approximate linear-system solution
- `prop-explicit-formulas-for-normwise-and-componentwise-backward-error` · proposition — Residual formulas for normwise and componentwise backward error
- `def-standard-relative-floating-point-model-and-unit-roundoff` · definition — The standard relative floating-point model and unit roundoff
- `def-forward-and-backward-stability-for-a-problem-family` · definition — Forward and backward stability for a problem family under an arithmetic model
- `lem-product-of-one-plus-deltas-gives-theta-n` · lemma — If |delta_i| <= u and nu < 1, then (1 + delta_1) ... (1 + delta_n) = 1 + theta_n with |theta_n| <= gamma_n
- `thm-floating-point-dot-product-componentwise-and-normwise-error-bounds` · theorem — The computed floating-point dot product obeys componentwise and normwise error bounds
- `thm-local-conditioning-times-backward-error-controls-forward-error-to-first-order` · theorem — Local conditioning times backward error controls forward error to first order
- `thm-normal-equations-square-the-spectral-condition-number` · theorem — For full-column-rank A, the normal equations square the spectral condition number
- `thm-exact-rank-is-locally-constant-at-full-rank-and-discontinuous-at-nonmaximal-rank-matrices` · theorem — Exact rank is locally constant at full-rank matrices and discontinuous at nonmaximal-rank matrices
- `def-numerical-rank-relative-to-a-norm-scale-and-tolerance` · definition — Numerical rank relative to a declared norm, scale, and tolerance
- `prop-spectral-numerical-rank-counts-singular-values-above-the-declared-threshold` · proposition — In the spectral norm, numerical rank counts the singular values above the declared threshold

### `matrix-norms-condition-numbers-and-numerical-stability-examples` — Matrix Norms, Condition Numbers and Numerical Stability: Examples and Counterexamples (11 item(s))

- `ex-two-by-two-systems-with-contrasting-condition-numbers` · example — Two 2x2 systems can have dramatically different condition numbers
- `ex-low-order-hilbert-matrices-have-large-condition-numbers` · example — Low-order Hilbert matrices already have large condition numbers
- `ex-vandermonde-conditioning-improves-after-centering-and-scaling` · example — Vandermonde conditioning improves after centering and scaling the nodes
- `cex-a-tiny-residual-does-not-force-a-small-forward-error` · counterexample — A tiny residual does not force a small forward error
- `ex-a-backward-stable-solution-of-an-ill-conditioned-system` · example — A backward-stable computed solution of an ill-conditioned system can still have large forward error
- `ex-catastrophic-cancellation-and-a-stable-reformulation` · example — A cancellation-prone formula can be replaced by a stable reformulation
- `ex-a-floating-point-dot-product-error-bound` · example — A short floating-point dot product obeys the gamma_n error bound
- `ex-normal-equations-versus-qr-conditioning` · example — Normal equations square the conditioning compared with QR on a nearly dependent least-squares problem
- `cex-condition-number-depends-on-the-chosen-norm-and-scaling` · counterexample — Condition number depends on the chosen norm and on diagonal rescaling
- `cex-numerical-rank-depends-on-the-declared-tolerance` · counterexample — The same matrix can have two different numerical ranks under two declared tolerances
- `cex-the-relative-floating-point-model-excludes-overflow-underflow-and-invalid-operations` · counterexample — The relative floating-point model excludes overflow, underflow, and invalid operations

### `smooth-manifolds-and-smooth-maps` — Smooth Manifolds and Smooth Maps (40 item(s))

- `def-topological-manifold-without-boundary` · definition — Topological manifolds without boundary
- `def-manifold-chart-coordinate-domain-and-coordinate-functions` · definition — Manifold charts, coordinate domains, and coordinate functions
- `def-coordinate-representation-of-a-map` · definition — The coordinate representation of a map
- `def-smoothly-compatible-charts` · definition — Smoothly compatible charts
- `lem-smooth-chart-compatibility-is-symmetric-and-reflexive` · lemma — Smooth chart compatibility is symmetric and reflexive
- `def-smooth-atlas` · definition — Smooth atlases
- `lem-the-union-of-two-compatible-smooth-atlases-is-a-smooth-atlas` · lemma — The union of two compatible smooth atlases is a smooth atlas
- `prop-compatibility-of-smooth-atlases-is-an-equivalence-relation` · proposition — Compatibility of smooth atlases is an equivalence relation
- `lem-all-charts-compatible-with-a-smooth-atlas-form-a-smooth-atlas` · lemma — All charts compatible with a smooth atlas form a smooth atlas
- `def-smooth-structure-generated-by-an-atlas` · definition — The smooth structure generated by an atlas
- `thm-each-smooth-atlas-is-contained-in-a-unique-maximal-smooth-atlas` · theorem — Each smooth atlas is contained in a unique maximal smooth atlas
- `def-smooth-manifold` · definition — Smooth manifolds
- `prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure` · proposition — An open subset of a smooth manifold has a canonical restricted smooth structure
- `prop-open-subsets-of-euclidean-space-have-the-standard-smooth-structure` · proposition — Open subsets of Euclidean space have the standard smooth structure
- `prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure` · proposition — Products of smooth manifolds have a canonical product smooth structure
- `prop-countable-disjoint-unions-of-fixed-dimensional-smooth-manifolds-are-smooth-manifolds` · proposition — Countable disjoint unions of fixed-dimensional smooth manifolds are smooth manifolds
- `def-c-r-and-smooth-maps-between-smooth-manifolds` · definition — $C^r$ and smooth maps between smooth manifolds
- `lem-chart-independence-of-c-r-smoothness` · lemma — Chart independence of $C^r$ smoothness
- `prop-smooth-maps-are-continuous` · proposition — Smooth maps are continuous
- `prop-identity-maps-and-composites-of-smooth-maps-are-smooth` · proposition — Identity maps and composites of smooth maps are smooth
- `def-diffeomorphism-and-local-diffeomorphism-of-manifolds` · definition — Diffeomorphisms and local diffeomorphisms of manifolds
- `prop-chart-maps-are-diffeomorphisms-onto-euclidean-open-sets` · proposition — Chart maps are diffeomorphisms onto Euclidean open sets
- `prop-smoothness-is-local-on-the-source` · proposition — Smoothness is local on the source
- `lem-smooth-maps-paste-over-an-open-cover` · lemma — Smooth maps paste over an open cover
- `prop-a-map-into-a-product-is-smooth-iff-its-components-are-smooth` · proposition — A map into a product is smooth iff its components are smooth
- `prop-a-map-from-a-disjoint-union-is-smooth-iff-each-restriction-is-smooth` · proposition — A map from a disjoint union is smooth iff each restriction is smooth
- `prop-restrictions-corestrictions-and-products-of-smooth-maps-are-smooth` · proposition — Restrictions, corestrictions, and products of smooth maps are smooth
- `prop-a-smooth-map-with-everywhere-smooth-local-inverses-is-a-local-diffeomorphism` · proposition — A smooth map with everywhere smooth local inverses is a local diffeomorphism
- `lem-coordinate-balls-form-a-basis-of-a-topological-manifold` · lemma — Coordinate balls form a basis of a topological manifold
- `prop-topological-manifolds-are-locally-compact-and-locally-path-connected` · proposition — Topological manifolds are locally compact and locally path connected
- `prop-components-of-a-topological-manifold-are-open-and-at-most-countable` · proposition — Components of a topological manifold are open and at most countable
- `thm-topological-manifolds-are-sigma-compact` · theorem — Topological manifolds are sigma-compact
- `thm-topological-manifolds-are-metrizable-and-paracompact` · theorem — Topological manifolds are metrizable and paracompact
- `rem-manifold-conventions-and-the-role-of-second-countability` · remark — Manifold conventions and the role of second countability
- `fs-every-hausdorff-locally-euclidean-space-is-a-manifold` · false-statement — Hausdorff and locally Euclidean do not by themselves make a manifold
- `fs-a-chart-domain-is-an-open-subset-of-euclidean-space` · false-statement — A chart domain need not be a Euclidean open set
- `fs-any-two-atlases-on-the-same-topological-manifold-have-a-union-atlas` · false-statement — Two atlases on the same topological manifold need not have a union atlas
- `fs-a-bijective-smooth-map-is-a-diffeomorphism` · false-statement — A bijective smooth map need not be a diffeomorphism
- `fs-chart-compatibility-needs-only-one-smooth-transition-direction` · false-statement — One smooth transition direction does not guarantee chart compatibility
- `fs-an-arbitrary-disjoint-union-of-second-countable-manifolds-is-second-countable` · false-statement — An arbitrary disjoint union of second-countable manifolds need not be second-countable

### `smooth-manifolds-and-smooth-maps-examples` — Smooth Manifolds and Smooth Maps - Examples (10 item(s))

- `ex-euclidean-spaces-and-open-subsets-as-smooth-manifolds` · example — Euclidean spaces and Euclidean open subsets as smooth manifolds
- `ex-the-circle-from-two-stereographic-charts` · example — The circle from two stereographic charts
- `ex-the-n-sphere-with-its-standard-smooth-atlas` · example — The $n$-sphere with its standard smooth atlas
- `ex-real-projective-space-from-affine-charts` · example — Real projective space from affine charts
- `ex-the-torus-as-a-product-smooth-manifold` · example — The torus as a product smooth manifold
- `ex-a-countable-disjoint-union-of-lines-is-a-smooth-manifold` · example — A countable disjoint union of lines is a smooth manifold
- `cex-the-long-line-is-locally-euclidean-and-hausdorff-but-not-a-manifold-under-the-library-convention` · counterexample — The long line is locally Euclidean and Hausdorff but not a manifold under the library convention
- `cex-two-noncompatible-atlases-on-the-real-line` · counterexample — Two noncompatible atlases on the real line
- `cex-a-bijective-smooth-map-with-nonsmooth-inverse` · counterexample — A bijective smooth map with nonsmooth inverse
- `cex-an-uncountable-disjoint-union-of-points-is-not-second-countable` · counterexample — An uncountable disjoint union of points is not second-countable

### `euclidean-ordinary-differential-equations-with-smooth-dependence` — Euclidean Ordinary Differential Equations with Smooth Dependence (17 item(s))

- `def-autonomous-ordinary-differential-equation` · definition — Autonomous ordinary differential equations
- `def-variational-equation-along-an-ode-solution` · definition — The variational equation along an ODE solution
- `lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval` · lemma — Linear matrix ODEs have unique global solutions on a fixed interval
- `prop-a-fundamental-matrix-is-invertible` · proposition — A fundamental matrix is invertible
- `thm-c1-dependence-of-solutions-on-initial-data` · theorem — $C^1$ dependence of solutions on initial data
- `thm-smooth-dependence-of-solutions-on-initial-data` · theorem — Smooth dependence of solutions on initial data
- `thm-smooth-dependence-of-ode-solutions-on-parameters` · theorem — Smooth dependence of ODE solutions on parameters
- `cor-a-bounded-vector-field-on-all-of-euclidean-space-is-complete` · corollary — A bounded vector field on all of Euclidean space is complete
- `cor-a-compactly-supported-smooth-euclidean-vector-field-is-complete` · corollary — A compactly supported smooth Euclidean vector field is complete
- `thm-fundamental-theorem-for-autonomous-smooth-odes` · theorem — The fundamental theorem for autonomous smooth ODEs
- `thm-fundamental-theorem-for-nonautonomous-smooth-odes` · theorem — The fundamental theorem for nonautonomous smooth ODEs
- `prop-the-maximal-solution-domain-is-open` · proposition — The maximal solution domain is open
- `prop-solutions-compose-under-a-change-of-initial-time` · proposition — Solutions compose under a change of initial time
- `fs-every-smooth-vector-field-on-euclidean-space-is-complete` · false-statement — A smooth Euclidean vector field need not be complete
- `fs-local-existence-at-each-initial-point-gives-one-uniform-time-interval-for-all-initial-points` · false-statement — Pointwise local existence does not force one global uniform time interval
- `fs-a-maximal-ode-solution-has-a-closed-interval-domain` · false-statement — A maximal ODE solution need not have a closed interval domain
- `fs-continuous-dependence-alone-implies-differentiable-dependence` · false-statement — Continuous dependence does not by itself imply differentiable dependence

### `euclidean-ordinary-differential-equations-with-smooth-dependence-examples` — Euclidean Ordinary Differential Equations with Smooth Dependence - Examples (6 item(s))

- `ex-a-constant-vector-field-and-translation-solutions` · example — A constant vector field has translation solutions
- `ex-a-linear-system-and-its-fundamental-matrix` · example — A linear system and its fundamental matrix
- `ex-the-harmonic-oscillator-as-a-first-order-system` · example — The harmonic oscillator as a first-order system
- `ex-a-compactly-supported-vector-field-with-global-solutions` · example — A compactly supported vector field with global solutions
- `ex-smooth-dependence-in-an-ode-with-a-parameter` · example — Smooth dependence in an ODE with a parameter
- `ex-a-nonautonomous-equation-made-autonomous-by-adjoining-time` · example — A nonautonomous equation made autonomous by adjoining time

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
| `def-c-r-and-smooth-maps-between-smooth-manifolds` | `smooth-manifolds-and-smooth-maps` | gpt-5.6-terra | `2c65ec6e0e9484742066798b4446a4ffd963b4291381d9974e54bcd7ae3964c3` |
| `def-forward-and-backward-stability-for-a-problem-family` | `matrix-norms-condition-numbers-and-numerical-stability` | gpt-5.6-terra | `ac31ab1e249101f6eef6b280e62bfae98579e034fa7a641b2364b8ff96bced60` |
| `def-manifold-chart-coordinate-domain-and-coordinate-functions` | `smooth-manifolds-and-smooth-maps` | gpt-5.6-terra | `f872d34c974bd87f6e0bb01e53bcfba43095765d91702cfb9c207aabd759d7fb` |
| `def-numerical-rank-relative-to-a-norm-scale-and-tolerance` | `matrix-norms-condition-numbers-and-numerical-stability` | gpt-5.6-terra | `01ba8f3aff8edc0da44d990a76e5418e5a295b9d80afef0747606eb60c68e173` |
| `def-smoothly-compatible-charts` | `smooth-manifolds-and-smooth-maps` | gpt-5.6-terra | `3bc9767458b54c3394a2882bd7a2e22575168b4fcc810588ed2b3c304cb1b091` |
| `def-standard-relative-floating-point-model-and-unit-roundoff` | `matrix-norms-condition-numbers-and-numerical-stability` | gpt-5.6-terra | `491cc7fe4bfcdffa35325b81770768e61cbdf3a299ca2969c877e2544005282e` |
| `ex-a-backward-stable-solution-of-an-ill-conditioned-system` | `matrix-norms-condition-numbers-and-numerical-stability-examples` | gpt-5.6-terra | `afb7b0bea7abdef0dbd8869543ae3ec47dcd622d9a10e5aea320fa9bcb0230ec` |
| `ex-catastrophic-cancellation-and-a-stable-reformulation` | `matrix-norms-condition-numbers-and-numerical-stability-examples` | gpt-5.6-terra | `5d77c38bb63cf89d16c8024578a2ce548f0c45e551c31372e430f8ed00b95ab2` |
| `ex-normal-equations-versus-qr-conditioning` | `matrix-norms-condition-numbers-and-numerical-stability-examples` | gpt-5.6-terra | `afe73a15349f268e072fe12ebb1d670ae26c7c19eb31bf19ca17314288f3e0a7` |
| `fs-complexification-doubles-finite-dimension` | `complexification-realification-and-real-structures-examples` | gpt-5.6-terra | `211f57c398f5e76ee9d5b9b85f1b2082d901c4f92ee09fa9b56b839ee88965e6` |
| `prop-countable-disjoint-unions-of-fixed-dimensional-smooth-manifolds-are-smooth-manifolds` | `smooth-manifolds-and-smooth-maps` | gpt-5.6-terra | `b4baba6c3bce68565a955810dab66e287174d8b0339a4e962f294a9a8914bb23` |

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
