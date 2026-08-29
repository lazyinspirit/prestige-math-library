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
  "group": "a",
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
      "id": "cex-enumerating-relator-consequences-does-not-decide-nontriviality",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "def-bass-serre-tree-of-a-graph-of-groups",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "def-reduced-graph-of-groups-word",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-decomposing-the-square-of-the-two-dimensional-s-three-character",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-s-four-has-five-conjugacy-classes-of-sizes-one-six-three-eight-and-six",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-todd-coxeter-as-a-partial-coset-enumeration-procedure",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-trivial-words-in-a-recursively-presented-group-are-recursively-enumerable",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-bass-serre-structure-theorem",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-grushko-decomposition-and-rank-additivity",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-normal-form-for-fundamental-groups-of-graphs-of-groups",
      "scope": "run",
      "owner": "a"
    }
  ],
  "live_tuples": [
    {
      "id": "cex-enumerating-relator-consequences-does-not-decide-nontriviality",
      "model": "gpt-5.6-terra",
      "context_sha256": "ba8c9b9faa653986c1925e1de8ba27d07512aa8cceb3cd085c3e488069b2a323",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "def-bass-serre-tree-of-a-graph-of-groups",
      "model": "gpt-5.6-terra",
      "context_sha256": "47766ea9faadd414e4b8226273e3358205c4bee5ba207d65b0313a53957cf522",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "def-reduced-graph-of-groups-word",
      "model": "gpt-5.6-terra",
      "context_sha256": "5c75442541b255bea247f40171a7253340dabd6d6bd9a7047672502fd5a6175f",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "ex-decomposing-the-square-of-the-two-dimensional-s-three-character",
      "model": "gpt-5.6-terra",
      "context_sha256": "1f1856b2baace8c2134af62a5c36ad8752f0f086510c5a92d3cd28a0ae1af24c",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "ex-s-four-has-five-conjugacy-classes-of-sizes-one-six-three-eight-and-six",
      "model": "gpt-5.6-terra",
      "context_sha256": "40fc46f2e593d4b949501f32abf8f9ec9e6c7ca57c2fe8e848ff596a4bcd9bd3",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "ex-todd-coxeter-as-a-partial-coset-enumeration-procedure",
      "model": "gpt-5.6-terra",
      "context_sha256": "8d47f51e9983b110376bb0632484aa37da9a8b6ceed52777f87b5480d43f41bd",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "lem-trivial-words-in-a-recursively-presented-group-are-recursively-enumerable",
      "model": "gpt-5.6-terra",
      "context_sha256": "3f58d55eab0795b187bcb9ba2148ced6db440112a99437d7acf6bcdb1db3b06a",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-bass-serre-structure-theorem",
      "model": "gpt-5.6-terra",
      "context_sha256": "fe318abe3b8437f18e6b6de09020b6720068c81fd3efdaa9e33692becbb47654",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-grushko-decomposition-and-rank-additivity",
      "model": "gpt-5.6-terra",
      "context_sha256": "848be1c2d35a95dfbcebfe49858f21bcb704f28fb7dcac3e6ee12d2ee292ae5a",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-normal-form-for-fundamental-groups-of-graphs-of-groups",
      "model": "gpt-5.6-terra",
      "context_sha256": "8377a34575bb7a474d2f710248105a1dd2681e35e407a28e3bdf6753195133dc",
      "scope": "run",
      "status": "unadjudicated"
    }
  ]
}
```

---

# Step 8 — group **a**, run `frontier-23`

You are the group Alpha for batches **1**, **3**, **4**: 4 A/B pair(s), 8 page(s), 136 item(s), 10 open rejection(s) over 10 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-23-alpha-a-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
| 1 | `decision-problems-for-finitely-presented-groups` | A | group-theory | 71.013 | `hnn-extensions-and-brittons-lemma-examples` |
| 1 | `decision-problems-for-finitely-presented-groups-examples` | B | group-theory | 71.014 | `decision-problems-for-finitely-presented-groups` |
| 1 | `graphs-of-groups-and-bass-serre-theory` | A | group-theory | 302.011 | `hnn-extensions-and-brittons-lemma`, `simplicial-trees-and-group-actions-examples` |
| 1 | `graphs-of-groups-and-bass-serre-theory-examples` | B | group-theory | 302.012 | `graphs-of-groups-and-bass-serre-theory` |
| 3 | `integral-extensions-and-going-up` | A | commutative-algebra | 111.011 | `associated-primes-and-primary-decomposition-examples` |
| 3 | `integral-extensions-and-going-up-examples` | B | commutative-algebra | 111.012 | `integral-extensions-and-going-up` |
| 4 | `characters-and-the-orthogonality-relations` | A | abstract-algebra | 147 | `maschkes-theorem-and-complete-reducibility`, `inner-product-spaces-and-orthogonality`, `tensor-products-of-modules` |
| 4 | `characters-and-the-orthogonality-relations-examples` | B | abstract-algebra | 148 | `finite-fields-and-cyclotomic-extensions`, `the-fundamental-theorem-of-algebra`, `characters-and-the-orthogonality-relations` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `decision-problems-for-finitely-presented-groups` — Decision Problems for Finitely Presented Groups (27 item(s))

- `def-finite-alphabet-encoding-and-algorithm` · definition — Finite alphabets, encoded inputs, and algorithms
- `def-recursive-and-recursively-enumerable-languages` · definition — Recursive and recursively enumerable languages
- `def-recursive-and-finite-group-presentations` · definition — Recursive presentations and finite presentations of groups
- `lem-trivial-words-in-a-recursively-presented-group-are-recursively-enumerable` · lemma — The trivial words of a recursively presented group form a recursively enumerable language
- `def-word-problem-for-a-fixed-finite-presentation` · definition — The word problem for a fixed finite presentation
- `def-uniform-word-problem-for-finite-presentations` · definition — The uniform word problem for finite presentations
- `prop-solvability-of-the-word-problem-is-independent-of-a-finite-generating-set` · proposition — Solvability of the word problem does not depend on the chosen finite generating set
- `thm-word-problem-for-free-groups` · theorem — The word problem for a finitely generated free group is solvable by free reduction
- `rem-finitely-generated-abelian-groups-admit-invariant-factor-normal-form` · remark — Finitely generated abelian groups admit invariant-factor normal form
- `thm-word-problem-for-finitely-generated-abelian-groups` · theorem — The word problem for finitely generated abelian groups is solvable
- `thm-word-problem-for-free-products-and-amalgams-with-decidable-membership` · theorem — Free products and suitable amalgamated free products have solvable word problem
- `def-conjugacy-problem-for-a-finitely-generated-group` · definition — The conjugacy problem for a finitely generated group
- `def-isomorphism-problem-for-a-class-of-finite-presentations` · definition — The isomorphism problem for a class of finite presentations
- `def-markov-property-of-finitely-presented-groups` · definition — A Markov property of finitely presented groups
- `rem-novikov-boone-undecidability-of-the-word-problem` · remark — Novikov-Boone: some finitely presented group has unsolvable word problem
- `rem-adian-rabin-undecidability-for-markov-properties` · remark — Adian-Rabin: every Markov property is undecidable on finite presentations
- `rem-triviality-and-finiteness-are-undecidable-for-finite-presentations` · remark — Triviality and finiteness are undecidable for finite presentations
- `rem-undecidability-of-the-isomorphism-problem-for-finitely-presented-groups` · remark — The isomorphism problem for finitely presented groups is undecidable
- `rem-groups-with-unsolvable-conjugacy-problem` · remark — There exist finitely presented groups with unsolvable conjugacy problem
- `def-algebraic-relator-area-and-dehn-function-of-a-finite-presentation` · definition — Algebraic relator area and the Dehn function of a finite presentation
- `lem-minimal-algebraic-relator-area-exists` · lemma — Every null word has a minimal algebraic relator area
- `prop-recursive-dehn-function-implies-solvable-word-problem` · proposition — A recursive Dehn function yields a solution to the word problem
- `fs-every-finitely-presented-group-has-solvable-word-problem` · false-statement — FALSE: every finitely presented group has solvable word problem
- `fs-recursively-enumerable-trivial-words-form-a-decision-algorithm` · false-statement — FALSE: recursively enumerable trivial words already give a decision algorithm
- `fs-unsolvable-word-problem-means-no-word-can-be-decided` · false-statement — FALSE: an unsolvable word problem means no individual word can be decided
- `fs-the-novikov-boone-theorem-proves-the-uniform-problem-only` · false-statement — FALSE: the Novikov-Boone theorem proves only the uniform problem is unsolvable
- `fs-a-tietze-equivalent-presentation-can-change-solvability-of-the-word-problem` · false-statement — FALSE: Tietze-equivalent finite presentations can differ on whether their word problem is solvable

### `decision-problems-for-finitely-presented-groups-examples` — Decision Problems for Finitely Presented Groups — Examples (6 item(s))

- `ex-word-problem-by-free-reduction` · example — Free reduction decides a word in a free group
- `ex-word-problem-in-a-finite-cyclic-presentation` · example — The word problem in a finite cyclic presentation
- `ex-conjugacy-in-a-free-group-by-cyclic-reduction` · example — Conjugacy in a free group by cyclic reduction
- `ex-todd-coxeter-as-a-partial-coset-enumeration-procedure` · example — Todd-Coxeter as a partial coset-enumeration procedure
- `ex-an-algebraic-relator-area-computation` · example — Computing an algebraic relator area
- `cex-enumerating-relator-consequences-does-not-decide-nontriviality` · counterexample — Enumerating relator consequences does not decide nontriviality

### `graphs-of-groups-and-bass-serre-theory` — Graphs of Groups and Bass Serre Theory (26 item(s))

- `def-graph-of-groups` · definition — A graph of groups
- `def-maximal-subtree-of-a-connected-graph` · definition — A maximal subtree of a connected graph
- `def-path-group-of-a-graph-of-groups` · definition — The path group of a graph of groups
- `def-fundamental-group-of-a-graph-of-groups-relative-to-a-maximal-tree` · definition — The fundamental group of a graph of groups relative to a maximal tree
- `thm-fundamental-groups-from-different-maximal-trees-are-isomorphic` · theorem — Different maximal trees give isomorphic graph-of-groups fundamental groups
- `def-reduced-graph-of-groups-word` · definition — Reduced words in a graph of groups
- `thm-normal-form-for-fundamental-groups-of-graphs-of-groups` · theorem — Normal form for the fundamental group of a graph of groups
- `cor-vertex-groups-embed-in-the-graph-of-groups-fundamental-group` · corollary — Vertex groups embed in the fundamental group of a graph of groups
- `def-bass-serre-tree-of-a-graph-of-groups` · definition — The Bass-Serre tree of a graph of groups
- `lem-the-bass-serre-coset-graph-is-a-tree` · lemma — The Bass-Serre coset graph is a tree
- `thm-fundamental-group-acts-on-its-bass-serre-tree` · theorem — The fundamental group acts without inversions on its Bass-Serre tree
- `def-quotient-graph-of-groups-from-a-tree-action` · definition — The quotient graph of groups attached to a tree action
- `lem-boundary-monomorphisms-from-stabilizers-are-well-defined` · lemma — The boundary monomorphisms from stabilizers are well-defined
- `thm-bass-serre-structure-theorem` · theorem — Bass-Serre structure theorem
- `thm-one-segment-graph-of-groups-is-an-amalgamated-free-product` · theorem — A one-segment graph of groups gives an amalgamated free product
- `thm-one-loop-graph-of-groups-is-an-hnn-extension` · theorem — A one-loop graph of groups gives an HNN extension
- `cor-a-group-acting-freely-without-inversions-on-a-tree-is-free` · corollary — A group acting freely without inversions on a tree is free
- `cor-fundamental-group-of-a-graph-with-trivial-groups-is-free` · corollary — The fundamental group of a graph with trivial groups is free
- `thm-kurosh-subgroup-theorem` · theorem — Kurosh subgroup theorem
- `thm-grushko-decomposition-and-rank-additivity` · theorem — Grushko decomposition and rank additivity
- `rem-stallings-theorem-on-ends-and-splittings` · remark — Stallings's theorem on ends and splittings
- `fs-the-fundamental-group-of-a-graph-of-groups-is-a-topological-fundamental-group-by-definition` · false-statement — FALSE: the fundamental group of a graph of groups is a topological fundamental group by definition
- `fs-vertex-stabilizers-are-literally-the-chosen-vertex-groups-without-conjugacy` · false-statement — FALSE: vertex stabilizers are literally the chosen vertex groups without conjugacy ambiguity
- `fs-every-tree-action-is-a-free-action` · false-statement — FALSE: every tree action is free
- `fs-the-quotient-graph-determines-the-acting-group-without-stabilizer-data` · false-statement — FALSE: the quotient graph determines the acting group without stabilizer data
- `fs-kurosh-says-every-subgroup-of-a-free-product-is-free` · false-statement — FALSE: Kurosh says every subgroup of a free product is free

### `graphs-of-groups-and-bass-serre-theory-examples` — Graphs of Groups and Bass Serre Theory — Examples (7 item(s))

- `ex-bass-serre-tree-of-a-free-product` · example — The Bass-Serre tree of a free product
- `ex-bass-serre-tree-of-an-amalgamated-free-product` · example — The Bass-Serre tree of an amalgamated free product
- `ex-bass-serre-tree-of-a-baumslag-solitar-group` · example — The Bass-Serre tree of a Baumslag-Solitar group
- `ex-a-free-action-and-the-quotient-graph-basis` · example — A free action and the quotient-graph basis
- `ex-kurosh-decomposition-of-a-subgroup` · example — A Kurosh decomposition of a subgroup of a free product
- `ex-graph-of-finite-groups-giving-a-virtually-free-group` · example — A graph of finite groups giving a virtually free group
- `cex-the-underlying-quotient-graph-does-not-determine-the-group` · counterexample — The underlying quotient graph does not determine the acting group

### `integral-extensions-and-going-up` — Integral Extensions and Going Up (17 item(s))

- `def-integral-ring-extension` · definition — Integral ring maps and integral extensions
- `def-integral-closure-and-integrally-closed-domain` · definition — Integral closure in an extension ring and integrally closed domains
- `thm-transitivity-of-integrality` · theorem — Integral extensions are transitive
- `thm-integral-closure-is-integrally-closed` · theorem — The integral closure of a domain in a field extension is integrally closed
- `thm-integrality-commutes-with-localisation` · theorem — Integrality and integral closure commute with localisation
- `lem-field-integrality-criterion` · lemma — For an integral extension of domains, the upper ring is a field if and only if the lower ring is
- `cor-contraction-of-maximal-ideals-integral-extension` · corollary — Under an integral extension, a prime is maximal if and only if its contraction is maximal
- `thm-lying-over` · theorem — Lying over for integral ring maps
- `thm-incomparability-for-integral-extensions` · theorem — Comparable primes with the same contraction are equal under an integral map
- `thm-going-up` · theorem — Going up for integral ring maps
- `cor-integral-extension-lifts-finite-prime-chains` · corollary — Integral extensions lift finite prime chains from the base
- `lem-integral-extension-chain-contraction-is-strict` · lemma — Strict prime chains contract strictly under integral extensions
- `cor-dimension-preserved-by-integral-extensions` · corollary — Injective integral extensions preserve Krull dimension
- `lem-integrally-closed-minimal-polynomial-coefficients` · lemma — Minimal polynomials of integral elements over an integrally closed domain have coefficients in the domain
- `thm-normality-is-local-for-domains` · theorem — A domain is integrally closed if and only if its prime localisations are, equivalently if and only if its maximal localisations are
- `thm-going-down-over-normal-domains` · theorem — Going down holds for integral extensions over integrally closed domains
- `cor-height-preserved-under-going-down-integral-extensions` · corollary — Under going down and incomparability, lying-over primes have the same finite height

### `integral-extensions-and-going-up-examples` — Integral Extensions and Going Up — Examples (6 item(s))

- `ex-integrality-equation-and-power-basis` · example — Every element of k[X] is integral over k[X^2], and k[X] has basis 1, X over k[X^2]
- `ex-integral-elements-subring-computation` · example — Z[square-root of 2, square-root of 3] is finite over Z and contains the sum and product of its generators
- `ex-integrality-localisation-clearing-denominators` · example — The element 1/p is integral over Z[1/p] but not over Z
- `ex-lying-over-by-quotient-and-localisation` · example — Lying over in k[t^2, t^3] subset k[t]
- `ex-incomparability-in-a-quadratic-integral-extension` · example — In k[Y] subset k[X] with Y = X^2, comparable primes do not share a contraction
- `ex-going-down-needs-normality` · example — An integral domain extension can fail going down when the base is not normal

### `characters-and-the-orthogonality-relations` — Characters and the Orthogonality Relations (30 item(s))

- `rem-standing-hypotheses-for-ordinary-character-theory` · remark — Standing hypotheses for ordinary character theory: $G$ finite, $k=\mathbb C$, and every representation finite-dimensional
- `def-character-of-a-complex-representation` · definition — The character $\chi_V(g)=\operatorname{tr}(\rho_V(g))$ of a finite-dimensional complex representation
- `def-class-function-and-the-space-of-complex-class-functions` · definition — Class functions and the complex vector space $\mathrm{cf}(G)$
- `def-standard-inner-product-on-complex-class-functions` · definition — The standard inner product on $\mathrm{cf}(G)$
- `def-irreducible-complex-character` · definition — An irreducible complex character
- `def-character-table-of-a-finite-group` · definition — The character table of a finite group
- `def-tensor-product-of-complex-representations` · definition — The tensor product of two complex representations
- `def-dual-complex-representation` · definition — The dual or contragredient complex representation
- `def-kernel-of-a-complex-character` · definition — The kernel of a complex character
- `prop-basic-value-properties-of-a-complex-character` · proposition — For a complex character, $\chi(1)=\dim V$, $\chi$ is a class function, and $|\chi(g)|\le\chi(1)$ with equality exactly at scalars
- `thm-kernel-of-a-complex-character-agrees-with-the-representation-kernel` · theorem — The kernel of a complex character agrees with the kernel of any representation affording it
- `thm-characters-of-direct-sums-tensor-products-and-duals` · theorem — Characters add on direct sums, multiply on tensor products, and conjugate on duals
- `thm-character-of-a-permutation-representation-counts-fixed-points` · theorem — The character of a permutation representation counts fixed points
- `def-g-fixed-subspace-of-a-representation` · definition — The fixed subspace $V^G$ of a representation
- `lem-averaging-operator-projects-onto-the-fixed-subspace` · lemma — The averaging operator projects onto the fixed subspace
- `lem-g-equivariant-maps-are-the-fixed-points-of-the-dual-tensor-representation` · lemma — For finite-dimensional complex $V$, the intertwiners $V\to W$ are exactly the fixed points of $V^*\otimes W$
- `thm-character-inner-product-computes-intertwiner-dimension` · theorem — The class-function inner product $\langle\chi_V,\chi_W\rangle$ equals $\dim\operatorname{Hom}_G(V,W)$
- `thm-first-orthogonality-relation-for-irreducible-complex-characters` · theorem — The first orthogonality relation for irreducible complex characters
- `thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions` · theorem — The irreducible complex characters form an orthonormal basis of $\mathrm{cf}(G)$
- `cor-multiplicity-of-an-irreducible-summand-is-a-character-inner-product` · corollary — The multiplicity of an irreducible summand is a character inner product
- `thm-complex-representations-are-determined-by-their-characters` · theorem — Finite-dimensional complex representations of a finite group are determined up to isomorphism by their characters
- `cor-a-complex-character-is-irreducible-iff-its-self-inner-product-is-one` · corollary — A complex character is irreducible if and only if its self-inner-product is $1$
- `thm-character-of-the-regular-representation` · theorem — The regular character is $|G|$ at $1$ and $0$ away from $1$
- `cor-the-regular-character-gives-the-sum-of-squares-formula` · corollary — The regular character gives a second proof of the sum-of-squares formula
- `thm-second-column-orthogonality-relation-for-irreducible-complex-characters` · theorem — The second orthogonality relation for irreducible complex characters
- `cor-the-sum-of-squared-irreducible-character-values-at-g-is-the-centralizer-size` · corollary — For $g\in G$, the sum of $|\chi_i(g)|^2$ over the irreducible complex characters is $|C_G(g)|$
- `cor-the-character-table-is-square-and-invertible` · corollary — The character table is square and invertible
- `prop-representations-with-kernel-containing-a-normal-subgroup-factor-through-the-quotient` · proposition — A representation with kernel containing a normal subgroup factors through the quotient, and irreducibility is unchanged by inflation
- `thm-normal-subgroups-are-exactly-intersections-of-kernels-of-irreducible-complex-characters` · theorem — The normal subgroups of a finite group are exactly the intersections of kernels of irreducible complex characters
- `thm-a-finite-group-is-abelian-iff-all-its-irreducible-complex-characters-have-degree-one` · theorem — A finite group is abelian if and only if all its irreducible complex characters have degree $1$

### `characters-and-the-orthogonality-relations-examples` — Characters and the Orthogonality Relations - Examples (17 item(s))

- `ex-the-irreducible-complex-characters-of-a-finite-cyclic-group-are-the-n-powers-of-a-primitive-nth-root` · example — The irreducible complex characters of a finite cyclic group are the $n$ powers of a primitive $n$th root
- `ex-the-character-table-of-a-finite-cyclic-group-over-c` · example — The character table of a finite cyclic group over $\mathbb C$
- `ex-the-standard-representation-of-s-n-has-character-fixed-points-minus-one` · example — The standard representation of $S_n$ has character equal to the number of fixed points minus $1$
- `ex-s-three-has-three-irreducible-complex-characters-of-degrees-one-one-and-two` · example — $S_3$ has three irreducible complex characters of degrees $1$, $1$, and $2$
- `ex-the-character-table-of-s-three` · example — The character table of $S_3$
- `ex-decomposing-the-square-of-the-two-dimensional-s-three-character` · example — The square of the two-dimensional $S_3$ character decomposes as $1+\operatorname{sgn}+\chi_2$
- `ex-a-four-has-a-normal-klein-four-subgroup-and-four-conjugacy-classes` · example — $A_4$ has a normal Klein four subgroup and four conjugacy classes
- `ex-the-character-table-of-a-four` · example — The character table of $A_4$
- `ex-s-four-has-five-conjugacy-classes-of-sizes-one-six-three-eight-and-six` · example — $S_4$ has five conjugacy classes of sizes $1$, $6$, $3$, $8$, and $6$
- `ex-the-character-table-of-s-four-and-its-normal-subgroups` · example — The character table of $S_4$ and the normal subgroups it reveals
- `ex-the-character-table-of-q-eight` · example — The character table of $Q_8$
- `ex-the-character-table-of-dih-c-four` · example — The character table of $\operatorname{Dih}(C_4)$
- `fs-nonisomorphic-finite-groups-can-have-the-same-character-table` · false-statement — FALSE: nonisomorphic finite groups always have different character tables
- `fs-a-complex-character-of-a-finite-group-is-always-a-homomorphism` · false-statement — FALSE: a complex character of a finite group is always a group homomorphism
- `fs-every-value-of-an-irreducible-complex-character-is-real` · false-statement — FALSE: every value of an irreducible complex character is real
- `fs-distinct-irreducible-complex-characters-of-a-finite-group-have-distinct-degrees` · false-statement — FALSE: distinct irreducible complex characters of a finite group have distinct degrees
- `fs-every-complex-class-function-with-self-inner-product-one-is-a-character` · false-statement — FALSE: every complex class function with self-inner-product $1$ is a character

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
| `cex-enumerating-relator-consequences-does-not-decide-nontriviality` | `decision-problems-for-finitely-presented-groups-examples` | gpt-5.6-terra | `ba8c9b9faa653986c1925e1de8ba27d07512aa8cceb3cd085c3e488069b2a323` |
| `def-bass-serre-tree-of-a-graph-of-groups` | `graphs-of-groups-and-bass-serre-theory` | gpt-5.6-terra | `47766ea9faadd414e4b8226273e3358205c4bee5ba207d65b0313a53957cf522` |
| `def-reduced-graph-of-groups-word` | `graphs-of-groups-and-bass-serre-theory` | gpt-5.6-terra | `5c75442541b255bea247f40171a7253340dabd6d6bd9a7047672502fd5a6175f` |
| `ex-decomposing-the-square-of-the-two-dimensional-s-three-character` | `characters-and-the-orthogonality-relations-examples` | gpt-5.6-terra | `1f1856b2baace8c2134af62a5c36ad8752f0f086510c5a92d3cd28a0ae1af24c` |
| `ex-s-four-has-five-conjugacy-classes-of-sizes-one-six-three-eight-and-six` | `characters-and-the-orthogonality-relations-examples` | gpt-5.6-terra | `40fc46f2e593d4b949501f32abf8f9ec9e6c7ca57c2fe8e848ff596a4bcd9bd3` |
| `ex-todd-coxeter-as-a-partial-coset-enumeration-procedure` | `decision-problems-for-finitely-presented-groups-examples` | gpt-5.6-terra | `8d47f51e9983b110376bb0632484aa37da9a8b6ceed52777f87b5480d43f41bd` |
| `lem-trivial-words-in-a-recursively-presented-group-are-recursively-enumerable` | `decision-problems-for-finitely-presented-groups` | gpt-5.6-terra | `3f58d55eab0795b187bcb9ba2148ced6db440112a99437d7acf6bcdb1db3b06a` |
| `thm-bass-serre-structure-theorem` | `graphs-of-groups-and-bass-serre-theory` | gpt-5.6-terra | `fe318abe3b8437f18e6b6de09020b6720068c81fd3efdaa9e33692becbb47654` |
| `thm-grushko-decomposition-and-rank-additivity` | `graphs-of-groups-and-bass-serre-theory` | gpt-5.6-terra | `848be1c2d35a95dfbcebfe49858f21bcb704f28fb7dcac3e6ee12d2ee292ae5a` |
| `thm-normal-form-for-fundamental-groups-of-graphs-of-groups` | `graphs-of-groups-and-bass-serre-theory` | gpt-5.6-terra | `8377a34575bb7a474d2f710248105a1dd2681e35e407a28e3bdf6753195133dc` |

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
