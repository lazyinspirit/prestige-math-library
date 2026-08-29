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
  "group": "d",
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
      "id": "ex-the-splitting-lemma-instantiated-at-the-published-module-theorem",
      "scope": "run",
      "owner": "d"
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
      "id": "lem-induced-word-map-has-the-free-extension-property",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-ab5-is-equivalent-to-exactness-of-filtered-colimits",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-member-equivalence-is-transitive",
      "scope": "run",
      "owner": "d"
    }
  ],
  "live_tuples": [
    {
      "id": "ex-the-splitting-lemma-instantiated-at-the-published-module-theorem",
      "model": "gpt-5.6-terra",
      "context_sha256": "3334460765fc1a83a19d451cdd905afc883c63d13f36d30d84fbf033a8d6dd54",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "fs-member-equivalence-is-transitive-in-any-pointed-category-with-pullbacks",
      "model": "gpt-5.6-terra",
      "context_sha256": "7aefa7a44cf94cbd42c2c24bb48a6efc48601a725c331c42c984962bbf9a7bc5",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "fs-the-members-of-an-object-form-an-abelian-group",
      "model": "gpt-5.6-terra",
      "context_sha256": "0f555a6524e72e5e6e5e879fd95d75848141d506c421e54edb67470ef3d4613d",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "lem-induced-word-map-has-the-free-extension-property",
      "model": "gpt-5.6-terra",
      "context_sha256": "7ba84f951a9d38783dd18cd2106bacbc521452ac390fefe1ca7e77abd760c76e",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-ab5-is-equivalent-to-exactness-of-filtered-colimits",
      "model": "gpt-5.6-terra",
      "context_sha256": "5bfe1282c347ebb971c9ac41279466d3a2efd11028723d8002f8d9d4f07a5d08",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-member-equivalence-is-transitive",
      "model": "gpt-5.6-terra",
      "context_sha256": "6d91bb02b1b73496e84789f77e4c3a7550673b5a7dc724f6062915182b1e57c6",
      "scope": "run",
      "status": "unadjudicated"
    }
  ]
}
```

---

# Step 8 — group **d**, run `frontier-23`

You are the group Alpha for batches **8**, **10**: 2 A/B pair(s), 4 page(s), 80 item(s), 6 open rejection(s) over 6 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-23-alpha-d-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
| 8 | `exactness-and-the-member-calculus` | A | category-theory | 365.019 | `abelian-categories`, `subobject-lattices-generators-and-the-grothendieck-axioms`, `free-modules-and-exact-sequences` |
| 8 | `exactness-and-the-member-calculus-examples` | B | category-theory | 365.02 | `exactness-and-the-member-calculus` |
| 10 | `formal-languages-encodings-and-decision-problems` | A | computability-theory | 581 | `linear-recurrences-and-rational-generating-functions`, `relations-functions-and-quotients`, `countability-and-uncountability` |
| 10 | `formal-languages-encodings-and-decision-problems-examples` | B | computability-theory | 582 | `formal-languages-encodings-and-decision-problems` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `exactness-and-the-member-calculus` — Exactness and the Member Calculus (49 item(s))

- `thm-the-subobject-inequalities-underlying-exactness` · theorem — The subobject inequalities underlying exactness
- `def-exactness-at-a-node` · definition — Exactness at a node
- `thm-the-arrow-theoretic-criterion-for-exactness` · theorem — The arrow-theoretic criterion for exactness
- `def-exact-sequence-and-short-exact-sequence-in-an-abelian-category` · definition — Exact sequence and short exact sequence in an abelian category
- `thm-a-short-exact-sequence-is-a-kernel-cokernel-pair` · theorem — A short exact sequence is a kernel-cokernel pair
- `thm-degenerate-exactness-criteria` · theorem — Degenerate exactness criteria
- `thm-exactness-is-self-dual` · theorem — Exactness is self-dual
- `def-split-short-exact-sequence-in-an-abelian-category` · definition — Split short exact sequence in an abelian category
- `thm-splitting-lemma-in-an-abelian-category` · theorem — Splitting lemma in an abelian category
- `fs-a-short-exact-sequence-splits-whenever-its-middle-object-is-isomorphic-to-the-biproduct-of-the-outer-two` · false-statement — FALSE: a short exact sequence splits whenever its middle object is isomorphic to the biproduct of the outer two
- `def-member-of-an-object` · definition — Member of an object
- `def-equivalence-of-members` · definition — Equivalence of members
- `prop-member-equivalence-is-reflexive-and-symmetric` · proposition — Member equivalence is reflexive and symmetric
- `thm-member-equivalence-is-transitive` · theorem — Member equivalence is transitive
- `thm-members-modulo-equivalence-correspond-to-subobjects` · theorem — Members modulo equivalence correspond to subobjects
- `prop-each-object-has-a-zero-member-and-each-member-has-a-negative` · proposition — Each object has a zero member and each member has a negative
- `prop-a-morphism-carries-members-to-members-and-preserves-equivalence` · proposition — A morphism carries members to members and preserves equivalence
- `thm-chasing-rule-monicity-detected-by-members` · theorem — Monicity is detected by members
- `thm-chasing-rule-monicity-by-member-cancellation` · theorem — Monicity by member cancellation
- `thm-chasing-rule-epimorphy-detected-by-members` · theorem — Epimorphy is detected by members
- `thm-chasing-rule-a-zero-arrow-is-detected-by-members` · theorem — A zero arrow is detected by members
- `thm-chasing-rule-exactness-detected-by-members` · theorem — Exactness is detected by members
- `thm-chasing-rule-the-subtraction-surrogate` · theorem — The subtraction surrogate
- `rem-what-the-subtraction-rule-does-not-say` · remark — What the subtraction rule does not say
- `cex-the-members-of-an-object-do-not-form-a-group` · counterexample — The members of an object do not form a group
- `cex-two-morphisms-agreeing-on-every-member-need-not-be-equal` · counterexample — Two morphisms agreeing on every member need not be equal
- `rem-the-cost-of-the-member-calculus` · remark — The cost of the member calculus
- `thm-a-square-is-cartesian-exactly-when-a-short-sequence-is-exact` · theorem — A square is cartesian exactly when a short sequence is exact
- `thm-a-cartesian-square-induces-an-isomorphism-on-the-kernels-of-its-parallel-legs` · theorem — A cartesian square induces an isomorphism on the kernels of its parallel legs
- `thm-a-cartesian-square-over-an-epimorphism-is-also-cocartesian` · theorem — A cartesian square over an epimorphism is also cocartesian
- `thm-epimorphisms-in-an-abelian-category-are-universal` · theorem — Epimorphisms in an abelian category are universal
- `thm-the-covering-criterion-for-exactness` · theorem — The covering criterion for exactness
- `rem-the-covering-criterion-and-the-member-calculus-are-the-same-tool` · remark — The covering criterion and the member calculus are the same tool
- `thm-the-kernel-row-and-cokernel-row-of-a-morphism-of-short-exact-sequences-are-exact-at-two-nodes-each` · theorem — The kernel row and cokernel row of a morphism of short exact sequences are exact at two nodes each
- `cex-the-kernel-row-of-a-morphism-of-short-exact-sequences-need-not-be-short-exact` · counterexample — The kernel row of a morphism of short exact sequences need not be short exact
- `thm-exactness-of-kernel-and-cokernel-sequences-under-endpoint-hypotheses` · theorem — Exactness of kernel and cokernel sequences under endpoint hypotheses
- `thm-the-kernel-cokernel-sequence-of-a-composite` · theorem — The kernel-cokernel sequence of a composite
- `def-comember-and-the-dual-calculus` · definition — Comember and the dual calculus
- `rem-two-routes-to-every-dual-statement` · remark — Two routes to every dual statement
- `thm-hom-is-left-exact-in-each-variable` · theorem — Hom is left exact in each variable
- `cex-hom-is-not-exact` · counterexample — Hom is not exact
- `thm-an-object-is-projective-exactly-when-hom-out-of-it-is-exact` · theorem — An object is projective exactly when Hom out of it is exact
- `thm-ab5-is-equivalent-to-exactness-of-filtered-colimits` · theorem — AB5 is equivalent to exactness of filtered colimits
- `fs-two-morphisms-that-agree-on-every-member-are-equal` · false-statement — FALSE: two morphisms that agree on every member are equal
- `fs-the-members-of-an-object-form-an-abelian-group` · false-statement — FALSE: the members of an object form an abelian group
- `fs-member-equivalence-is-transitive-in-any-pointed-category-with-pullbacks` · false-statement — FALSE: member equivalence is transitive in any pointed category with pullbacks
- `fs-the-kernel-row-of-a-morphism-of-short-exact-sequences-is-short-exact` · false-statement — FALSE: the kernel row of a morphism of short exact sequences is short exact
- `fs-the-subtraction-rule-produces-a-unique-member` · false-statement — FALSE: the subtraction rule produces a unique member
- `fs-exactness-can-be-defined-without-first-producing-a-canonical-monomorphism` · false-statement — FALSE: the subobject-side definition of exactness needs no canonical image monomorphism

### `exactness-and-the-member-calculus-examples` — Exactness and the Member Calculus — Examples (9 item(s))

- `ex-members-of-an-abelian-group-correspond-to-its-subgroups` · example — Members of an abelian group correspond to its subgroups
- `ex-an-ordinary-element-as-the-member-from-the-integers` · example — An ordinary element as the member from the integers
- `cex-a-general-member-of-an-abelian-group-need-not-come-from-an-element` · counterexample — A general member of an abelian group need not come from an element
- `ex-a-member-chase-verifying-monicity` · example — A member chase verifying monicity
- `ex-the-covering-criterion-checked-in-abelian-groups` · example — The covering criterion checked in abelian groups
- `ex-the-kernel-cokernel-sequence-of-a-composite-of-module-maps` · example — The kernel-cokernel sequence of a composite of module maps
- `cex-a-non-split-short-exact-sequence-of-abelian-groups` · counterexample — A non-split short exact sequence of abelian groups
- `ex-the-splitting-lemma-instantiated-at-the-published-module-theorem` · example — The splitting lemma instantiated at the published module theorem
- `ex-the-kernel-row-failure-for-multiplication-by-two-computed` · example — The kernel row failure for multiplication by two computed

### `formal-languages-encodings-and-decision-problems` — Formal Languages, Encodings, and Decision Problems (18 item(s))

- `def-computation-alphabet-and-word-convention` · definition — Computation alphabets, words, the empty word, and $\Sigma^*$
- `lem-computation-words-agree-with-published-finite-words` · lemma — The computation-word convention agrees with the published finite-word definition
- `def-language-over-an-alphabet` · definition — Languages over an alphabet
- `def-language-boolean-operations` · definition — Boolean operations on languages over a fixed alphabet
- `def-language-concatenation-powers-and-kleene-star` · definition — Language concatenation, powers, and Kleene star
- `lem-language-concatenation-is-associative` · lemma — Language concatenation is associative
- `lem-kleene-star-has-the-expected-least-closure-property` · lemma — Kleene star is the least concatenation-closed language containing $L$ and $\varepsilon$
- `def-word-and-language-reversal` · definition — Word reversal and language reversal
- `lem-reversal-is-an-involution-and-reverses-concatenation` · lemma — Reversal is an involution and reverses concatenation
- `def-alphabet-homomorphism-and-induced-word-map` · definition — Alphabet maps into $\Delta^*$ and their induced maps on words
- `lem-induced-word-map-has-the-free-extension-property` · lemma — The induced word map is the unique concatenation-preserving extension
- `def-effective-binary-encoding-and-decoder` · definition — Effective binary encodings and total decoders
- `lem-finite-tuples-admit-effective-prefix-free-encodings` · lemma — Finite tuples admit effective prefix-free binary encodings
- `def-decision-search-and-function-problem` · definition — Decision problems, search problems, and function problems
- `def-instance-size-under-an-encoding` · definition — Instance size and polynomially related encodings
- `prop-polynomially-related-encodings-preserve-polynomial-size` · proposition — Polynomially related encodings preserve polynomial size bounds
- `fs-a-language-is-a-set-of-symbols` · false-statement — FALSE: a language is a set of symbols
- `fs-every-effective-encoding-is-prefix-free` · false-statement — FALSE: every effective encoding is prefix-free

### `formal-languages-encodings-and-decision-problems-examples` — Formal Languages, Encodings, and Decision Problems: Examples and Counterexamples (4 item(s))

- `ex-language-concatenation-is-associative` · example — A concrete calculation of $(L_1L_2)L_3=L_1(L_2L_3)$
- `ex-polynomially-related-encodings-preserve-polynomial-size` · example — Ordinary binary numerals and doubled-bit numerals are polynomially related
- `cex-a-language-is-a-set-of-symbols` · counterexample — The language $\{01\}$ is not a set of alphabet symbols
- `cex-an-effective-encoding-need-not-be-prefix-free` · counterexample — The encoding $w\mapsto 1w$ is effective but not prefix-free

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
| `ex-the-splitting-lemma-instantiated-at-the-published-module-theorem` | `exactness-and-the-member-calculus-examples` | gpt-5.6-terra | `3334460765fc1a83a19d451cdd905afc883c63d13f36d30d84fbf033a8d6dd54` |
| `fs-member-equivalence-is-transitive-in-any-pointed-category-with-pullbacks` | `exactness-and-the-member-calculus` | gpt-5.6-terra | `7aefa7a44cf94cbd42c2c24bb48a6efc48601a725c331c42c984962bbf9a7bc5` |
| `fs-the-members-of-an-object-form-an-abelian-group` | `exactness-and-the-member-calculus` | gpt-5.6-terra | `0f555a6524e72e5e6e5e879fd95d75848141d506c421e54edb67470ef3d4613d` |
| `lem-induced-word-map-has-the-free-extension-property` | `formal-languages-encodings-and-decision-problems` | gpt-5.6-terra | `7ba84f951a9d38783dd18cd2106bacbc521452ac390fefe1ca7e77abd760c76e` |
| `thm-ab5-is-equivalent-to-exactness-of-filtered-colimits` | `exactness-and-the-member-calculus` | gpt-5.6-terra | `5bfe1282c347ebb971c9ac41279466d3a2efd11028723d8002f8d9d4f07a5d08` |
| `thm-member-equivalence-is-transitive` | `exactness-and-the-member-calculus` | gpt-5.6-terra | `6d91bb02b1b73496e84789f77e4c3a7550673b5a7dc724f6062915182b1e57c6` |

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
