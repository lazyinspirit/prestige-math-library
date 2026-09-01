# Exact Step-8 repair envelope — 8-preflight, round 1

The JSON envelope below is the authority for this dispatch. It contains every failing gate from the battery,
the full untruncated output, exact current rejection tuples, and explicit run/published ownership.
Act only on `assigned_items` and `live_tuples`; do not substitute the latest event-log row.

```json
{
  "version": 1,
  "run": "frontier-28",
  "stage": "8-preflight",
  "round": 1,
  "mode": "preflight",
  "group": "c",
  "failures": [
    {
      "id": "proof-contract",
      "stage": "8-preflight",
      "why": "ERROR citation-use-not-supported [lem-boundary-label-of-a-van-kampen-diagram-is-null-in-the-presented-group]: F1 is not cited by declared use 1.2",
      "output": "proof-contract: 209 error(s), 0 warning(s), 339/339 item(s) checked\nERROR citation-use-not-supported [lem-boundary-label-of-a-van-kampen-diagram-is-null-in-the-presented-group]: F1 is not cited by declared use 1.2\nERROR citation-use-not-supported [lem-boundary-label-of-a-van-kampen-diagram-is-null-in-the-presented-group]: F1 is not cited by declared use 1.2\nERROR citation-quote-mismatch [lem-boundary-label-of-a-van-kampen-diagram-is-null-in-the-presented-group]: L1 quote does not occur in def-van-kampen-diagram-boundary-label-and-area's Definition\nERROR step-entry-input-omitted [lem-boundary-label-of-a-van-kampen-diagram-is-null-in-the-presented-group]: step-2-1 omits 1.1, cited by 2.1\nERROR step-entry-step-missing [lem-boundary-label-of-a-van-kampen-diagram-is-null-in-the-presented-group]: derivations step-3-1 names missing 3.1\nERROR citation-quote-mismatch [lem-minimal-area-diagrams-are-reduced]: F1 quote does not occur in def-van-kampen-diagram-boundary-label-and-area's Definition\nERROR citation-use-not-supported [lem-curvature-count-for-reduced-c-prime-one-sixth-diagrams]: F1 is not cited by declared use 3.1\nERROR citation-use-unmapped [lem-curvature-count-for-reduced-c-prime-one-sixth-diagrams]: F1 is cited by 2.1 but the contract omits it\nERROR citation-use-unmapped [lem-curvature-count-for-reduced-c-prime-one-sixth-diagrams]: L1 is cited by 1.1 but the contract omits it\nERROR step-entry-input-omitted [lem-curvature-count-for-reduced-c-prime-one-sixth-diagrams]: step-1-1 omits L1, cited by 1.1\nERROR step-entry-input-omitted [lem-curvature-count-for-reduced-c-prime-one-sixth-diagrams]: step-2-1 omits F2, cited by 2.1\nERROR step-entry-input-omitted [lem-curvature-count-for-reduced-c-prime-one-sixth-diagrams]: step-2-1 omits F1, cited by 2.1\nERROR step-entry-input-omitted [lem-curvature-count-for-reduced-c-prime-one-sixth-diagrams]: step-3-1 omits F2, cited by 3.1\nERROR step-entry-step-missing [lem-curvature-count-for-reduced-c-prime-one-sixth-diagrams]: derivations step-3-2 names missing 3.2\nERROR step-entry-step-missing [lem-curvature-count-for-reduced-c-prime-one-sixth-diagrams]: derivations step-3-3 names missing 3.3\nERROR step-entry-step-missing [lem-curvature-count-for-reduced-c-prime-one-sixth-diagrams]: derivations step-4-1 names missing 4.1\nERROR step-entry-input-step-missing [lem-curvature-count-for-reduced-c-prime-one-sixth-diagrams]: step-4-1 names missing step 3.2\nERROR step-entry-input-step-missing [lem-curvature-count-for-reduced-c-prime-one-sixth-diagrams]: step-4-1 names missing step 3.3\nERROR citation-quote-mismatch [lem-kernels-of-finite-projections-form-an-open-normal-neighbourhood-basis]: F1 quote does not occur in def-inverse-limit-topology-for-finite-discrete-groups's Definition\nERROR citation-quote-mismatch [thm-continuity-into-an-inverse-limit-is-coordinatewise]: F1 quote does not occur in def-inverse-limit-topology-for-finite-discrete-groups's Definition\nERROR citation-quote-mismatch [thm-topological-characterisation-of-profinite-groups]: L1 quote does not occur in thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected's Statement\nERROR citation-fact-uncontracted [thm-kernel-and-density-of-the-canonical-map-to-the-profinite-completion]: L2 -> def-profinite-completion-of-an-abstract-group needs an exact citation contract\nERROR step-entry-input-omitted [thm-kernel-and-density-of-the-canonical-map-to-the-profinite-completion]: step-1-2 omits L2, cited by 1.2\nERROR citation-quote-mismatch [thm-universal-property-of-profinite-completion]: L1 quote does not occur in thm-topological-characterisation-of-profinite-groups's Statement\nERROR citation-quote-mismatch [fs-a-compact-hausdorff-group-is-profinite-without-total-disconnectedness]: L1 quote does not occur in thm-topological-characterisation-of-profinite-groups's Statement\nERROR citation-quote-mismatch [thm-hilbert-serre-theorem]: L1 quote does not occur in def-graded-ring-and-graded-module's Definition\nERROR citation-quote-mismatch [thm-hilbert-serre-theorem]: L1 quote does not occur in def-hilbert-function-and-hilbert-series's Definition\nERROR citation-quote-mismatch [lem-rees-module-finiteness-and-stable-filtrations]: L1 quote does not occur in def-rees-algebra-and-rees-module's Definition\nERROR citation-quote-mismatch [lem-rees-module-finiteness-and-stable-filtrations]: L1 quote does not occur in def-graded-ring-and-graded-module's Definition\nERROR citation-fact-uncontracted [lem-rees-module-finiteness-and-stable-filtrations]: L4 -> cor-finite-variable-polynomial-ring-noetherian needs an exact citation contract\nERROR step-entry-input-omitted [lem-rees-module-finiteness-and-stable-filtrations]: step-1-3 omits L4, cited by 1.3\nERROR citation-use-step-missing [thm-artin-rees-lemma]: L1 names missing step 1.2\nERROR citation-use-step-missing [thm-artin-rees-lemma]: L1 names missing step 1.3\nERROR citation-use-unmapped [thm-artin-rees-lemma]: L1 is cited by 2.1 but the contract omits it\nERROR citation-use-unmapped [thm-artin-rees-lemma]: L1 is cited by 3.1 but the contract omits it\nERROR citation-fact-uncontracted [thm-artin-rees-lemma]: L2 -> thm-finite-generation-and-finite-presentation-over-a-noetherian-ring needs an exact citation contract\nERROR step-entry-step-missing [thm-artin-rees-lemma]: derivations step-1-2 names missing 1.2\nERROR step-entry-step-missing [thm-artin-rees-lemma]: derivations step-1-3 names missing 1.3\nERROR step-entry-input-omitted [thm-artin-rees-lemma]: step-2-1 omits 1.1, cited by 2.1\nERROR step-entry-input-omitted [thm-artin-rees-lemma]: step-2-1 omits L1, cited by 2.1\nERROR step-entry-input-omitted [thm-artin-rees-lemma]: step-2-1 omits L2, cited by 2.1\nERROR step-unmapped [thm-artin-rees-lemma]: 3.1 has no derivation or routine-step contract\nERROR step-unmapped [thm-artin-rees-lemma]: 4.1 has no derivation or routine-step contract\nERROR citation-fact-uncontracted [thm-krull-intersection-theorem]: L4 -> thm-finite-generation-and-finite-presentation-over-a-noetherian-ring needs an exact citation contract\nERROR step-entry-input-omitted [thm-krull-intersection-theorem]: step-2-1 omits L4, cited by 2.1\nERROR citation-quote-mismatch [thm-existence-of-hilbert-samuel-polynomial]: L1 quote does not occur in def-hilbert-samuel-function-and-polynomial's Definition\nERROR citation-fact-uncontracted [thm-existence-of-hilbert-samuel-polynomial]: L3 -> thm-noetherian-ring-ideal-characterisations needs an exact citation contract\nERROR step-entry-input-omitted [thm-existence-of-hilbert-samuel-polynomial]: step-1-2 omits L3, cited by 1.2\nERROR citation-use-not-supported [thm-hilbert-samuel-dimension-theorem]: L1 is not cited by declared use 1.1\nERROR citation-use-not-supported [thm-hilbert-samuel-dimension-theorem]: L1 is not cited by declared use 1.3\nERROR citation-source-not-in-fact [thm-hilbert-samuel-dimension-theorem]: L2 does not link [[thm-multiplicity-under-reduction-by-a-parameter]]\nERROR citation-undeclared-dependency [thm-hilbert-samuel-dimension-theorem]: L2 cites thm-multiplicity-under-reduction-by-a-parameter, which is absent from deps/justified_by/forward_refs\nERROR citation-quote-mismatch [thm-hilbert-samuel-dimension-theorem]: L2 quote does not occur in thm-multiplicity-under-reduction-by-a-parameter's Statement\nERROR citation-use-not-supported [thm-hilbert-samuel-dimension-theorem]: L2 is not cited by declared use 1.3\nERROR citation-use-not-supported [thm-hilbert-samuel-dimension-theorem]: L2 is not cited by declared use 2.1\nERROR citation-use-unmapped [thm-hilbert-samuel-dimension-theorem]: L2 is cited by 1.4 but the contract omits it\nERROR citation-source-not-in-fact [thm-hilbert-samuel-dimension-theorem]: L3 does not link [[cor-parameter-ideal-multiplicity-positive]]\nERROR citation-undeclared-dependency [thm-hilbert-samuel-dimension-theorem]: L3 cites cor-parameter-ideal-multiplicity-positive, which is absent from deps/justified_by/forward_refs\nERROR citation-use-not-supported [thm-hilbert-samuel-dimension-theorem]: L3 is not cited by declared use 2.1\nERROR citation-use-unmapped [thm-hilbert-samuel-dimension-theorem]: L3 is cited by 1.1 but the contract omits it\nERROR citation-use-unmapped [thm-hilbert-samuel-dimension-theorem]: L4 is cited by 1.3 but the contract omits it\nERROR citation-fact-uncontracted [thm-hilbert-samuel-dimension-theorem]: L2 -> thm-additivity-of-hilbert-samuel-multiplicity needs an exact citation contract\nERROR citation-fact-uncontracted [thm-hilbert-samuel-dimension-theorem]: L3 -> thm-artin-rees-lemma needs an exact citation contract\nERROR citation-fact-uncontracted [thm-hilbert-samuel-dimension-theorem]: L5 -> lem-determinant-trick-for-nakayama needs an exact citation contract\nERROR step-entry-input-omitted [thm-hilbert-samuel-dimension-theorem]: step-1-1 omits L3, cited by 1.1\nERROR step-entry-input-omitted [thm-hilbert-samuel-dimension-theorem]: step-1-3 omits L5, cited by 1.3\nERROR step-entry-input-omitted [thm-hilbert-samuel-dimension-theorem]: step-1-3 omits L4, cited by 1.3\nERROR step-entry-input-omitted [thm-hilbert-samuel-dimension-theorem]: step-2-1 omits 1.2, cited by 2.1\nERROR step-entry-input-omitted [thm-hilbert-samuel-dimension-theorem]: step-2-1 omits 1.4, cited by 2.1\nERROR step-entry-input-omitted [thm-hilbert-samuel-dimension-theorem]: step-2-1 omits 1.1, cited by 2.1\nERROR step-entry-step-missing [thm-hilbert-samuel-dimension-theorem]: derivations step-3-1 names missing 3.1\nERROR step-unmapped [thm-hilbert-samuel-dimension-theorem]: 1.4 has no derivation or routine-step contract\nERROR citation-use-unmapped [thm-dimension-and-parameters-for-modules]: L1 is cited by 1.1 but the contract omits it\nERROR citation-fact-uncontracted [thm-dimension-and-parameters-for-modules]: L3 -> thm-noetherian-ring-ideal-characterisations needs an exact citation contract\nERROR citation-fact-uncontracted [thm-dimension-and-parameters-for-modules]: L4 -> thm-krull-height-theorem needs an exact citation contract\nERROR step-entry-input-omitted [thm-dimension-and-parameters-for-modules]: step-1-1 omits L3, cited by 1.1\nERROR step-entry-input-omitted [thm-dimension-and-parameters-for-modules]: step-1-1 omits L4, cited by 1.1\nERROR step-entry-input-omitted [thm-dimension-and-parameters-for-modules]: step-1-1 omits L1, cited by 1.1\nERROR citation-use-step-missing [thm-additivity-of-hilbert-samuel-multiplicity]: L1 names missing step 1.2\nERROR citation-use-unmapped [thm-additivity-of-hilbert-samuel-multiplicity]: L1 is cited by 1.1 but the contract omits it\nERROR citation-use-step-missing [thm-additivity-of-hilbert-samuel-multiplicity]: L2 names missing step 1.2\nERROR citation-use-unmapped [thm-additivity-of-hilbert-samuel-multiplicity]: L2 is cited by 1.1 but the contract omits it\nERROR citation-use-unmapped [thm-additivity-of-hilbert-samuel-multiplicity]: L2 is cited by 2.1 but the contract omits it\nERROR step-entry-input-omitted [thm-additivity-of-hilbert-samuel-multiplicity]: step-1-1 omits L1, cited by 1.1\nERROR step-entry-input-omitted [thm-additivity-of-hilbert-samuel-multiplicity]: step-1-1 omits L2, cited by 1.1\nERROR step-entry-step-missing [thm-additivity-of-hilbert-samuel-multiplicity]: derivations step-1-2 names missing 1.2\nERROR step-entry-step-missing [thm-additivity-of-hilbert-samuel-multiplicity]: derivations step-1-3 names missing 1.3\nERROR step-entry-input-omitted [thm-additivity-of-hilbert-samuel-multiplicity]: step-2-1 omits L2, cited by 2.1\nERROR step-entry-input-omitted [thm-additivity-of-hilbert-samuel-multiplicity]: step-2-1 omits 1.1, cited by 2.1\nERROR step-unmapped [thm-additivity-of-hilbert-samuel-multiplicity]: 3.1 has no derivation or routine-step contract\nERROR step-unmapped [thm-additivity-of-hilbert-samuel-multiplicity]: 4.1 has no derivation or routine-step contract\nERROR citation-quote-mismatch [thm-multiplicity-under-reduction-by-a-parameter]: L2 quote does not occur in thm-additivity-of-hilbert-samuel-multiplicity's Statement\nERROR citation-use-step-missing [thm-multiplicity-under-reduction-by-a-parameter]: L2 names missing step 1.2\nERROR citation-use-unmapped [thm-multiplicity-under-reduction-by-a-parameter]: L2 is cited by 2.1 but the contract omits it\nERROR step-entry-step-missing [thm-multiplicity-under-reduction-by-a-parameter]: derivations step-1-2 names missing 1.2\nERROR step-entry-step-missing [thm-multiplicity-under-reduction-by-a-parameter]: derivations step-1-3 names missing 1.3\nERROR step-entry-input-omitted [thm-multiplicity-under-reduction-by-a-parameter]: step-2-1 omits L2, cited by 2.1\nERROR step-entry-input-omitted [thm-multiplicity-under-reduction-by-a-parameter]: step-2-1 omits 1.1, cited by 2.1\nERROR step-unmapped [thm-multiplicity-under-reduction-by-a-parameter]: 3.1 has no derivation or routine-step contract\nERROR step-unmapped [thm-multiplicity-under-reduction-by-a-parameter]: 4.1 has no derivation or routine-step contract\nERROR citation-quote-mismatch [cor-parameter-ideal-multiplicity-positive]: L3 quote does not occur in def-hilbert-samuel-multiplicity's Definition\nERROR citation-quote-mismatch [ex-hilbert-samuel-polynomial-of-a-dvr]: L2 quote does not occur in def-hilbert-samuel-multiplicity's Definition\nERROR citation-quote-mismatch [ex-hilbert-samuel-multiplicity-of-a-plane-curve]: L2 quote does not occur in def-hilbert-samuel-multiplicity's Definition\nERROR citation-source-not-in-fact [cor-finite-flat-noetherian-modules-are-projective]: L3 does not link [[thm-projective-module-characterizations]]\nERROR citation-fact-uncontracted [cor-finite-flat-noetherian-modules-are-projective]: L3 -> thm-equational-criterion-for-flatness needs an exact citation contract\nERROR citation-fact-uncontracted [cor-finite-flat-noetherian-modules-are-projective]: L4 -> thm-projective-module-characterizations needs an exact citation contract\nERROR step-entry-input-omitted [cor-finite-flat-noetherian-modules-are-projective]: step-1-2 omits L4, cited by 1.2\nERROR citation-use-not-supported [ex-fraction-field-flat-not-projective]: L2 is not cited by declared use 1.2\nERROR citation-fact-uncontracted [ex-fraction-field-flat-not-projective]: L3 -> thm-projective-module-characterizations needs an exact citation contract\nERROR step-entry-input-omitted [ex-fraction-field-flat-not-projective]: step-1-2 omits L3, cited by 1.2\nERROR citation-quote-mismatch [thm-universal-property-of-an-inverse-limit-of-modules]: L1 quote does not occur in def-inverse-system-and-inverse-limit-of-modules's Definition\nERROR citation-quote-mismatch [thm-inverse-limits-are-left-exact]: L1 quote does not occur in def-inverse-system-and-inverse-limit-of-modules's Definition\nERROR citation-quote-mismatch [thm-kernel-and-universal-property-of-adic-completion]: L1 quote does not occur in def-adic-completion-of-a-module's Definition\nERROR citation-quote-mismatch [thm-kernel-and-universal-property-of-adic-completion]: L2 quote does not occur in def-separated-and-complete-filtered-module's Definition\nERROR citation-use-not-supported [thm-kernel-and-universal-property-of-adic-completion]: L3 is not cited by declared use 1.2\nERROR citation-quote-mismatch [prop-units-in-an-adically-complete-ring]: L1 quote does not occur in def-separated-and-complete-filtered-module's Definition\nERROR citation-quote-mismatch [prop-units-in-an-adically-complete-ring]: L1 quote does not occur in def-adic-completion-of-a-module's Definition\nERROR citation-fact-missing [prop-units-in-an-adically-complete-ring]: L2 is not a fact in prop-units-in-an-adically-complete-ring\nERROR step-entry-input-fact-missing [prop-units-in-an-adically-complete-ring]: step-4-1 names missing fact L2\nERROR citation-quote-mismatch [thm-completion-is-exact-on-finite-modules]: L2 quote does not occur in def-adic-completion-of-a-module's Definition\nERROR citation-quote-mismatch [thm-completion-as-extension-of-scalars]: L1 quote does not occur in thm-completion-is-exact-on-finite-modules's Statement\nERROR citation-quote-mismatch [cor-completion-commutes-with-finite-quotients-and-submodules]: L1 quote does not occur in thm-completion-is-exact-on-finite-modules's Statement\nERROR citation-quote-mismatch [cor-completion-commutes-with-finite-quotients-and-submodules]: L2 quote does not occur in thm-completion-as-extension-of-scalars's Statement\nERROR citation-quote-mismatch [thm-flatness-of-noetherian-completion]: L1 quote does not occur in thm-completion-as-extension-of-scalars's Statement\nERROR citation-quote-mismatch [thm-flatness-of-noetherian-completion]: L1 quote does not occur in cor-completion-commutes-with-finite-quotients-and-submodules's Statement\nERROR citation-quote-mismatch [thm-faithful-flatness-of-jacobson-adic-completion]: L1 quote does not occur in thm-flatness-of-noetherian-completion's Statement\nERROR citation-quote-mismatch [thm-faithful-flatness-of-jacobson-adic-completion]: L2 quote does not occur in cor-completion-commutes-with-finite-quotients-and-submodules's Statement\nERROR citation-quote-mismatch [thm-noetherianity-of-adic-completion]: L4 quote does not occur in cor-completion-commutes-with-finite-quotients-and-submodules's Statement\nERROR citation-quote-mismatch [thm-completion-of-a-noetherian-local-ring]: L1 quote does not occur in thm-noetherianity-of-adic-completion's Statement\nERROR citation-quote-mismatch [thm-completion-of-a-noetherian-local-ring]: L2 quote does not occur in thm-faithful-flatness-of-jacobson-adic-completion's Statement\nERROR citation-quote-mismatch [thm-completion-of-a-noetherian-local-ring]: L3 quote does not occur in cor-completion-commutes-with-finite-quotients-and-submodules's Statement\nERROR citation-quote-mismatch [thm-finite-modules-over-complete-noetherian-rings-are-complete]: L1 quote does not occur in thm-completion-as-extension-of-scalars's Statement\nERROR citation-quote-mismatch [thm-finite-modules-over-complete-noetherian-rings-are-complete]: L2 quote does not occur in def-separated-and-complete-filtered-module's Definition\nERROR citation-quote-mismatch [thm-finite-modules-over-complete-noetherian-rings-are-complete]: L2 quote does not occur in def-adic-completion-of-a-module's Definition\nERROR citation-quote-mismatch [thm-complete-nakayama-lemma]: L1 quote does not occur in def-separated-and-complete-filtered-module's Definition\nERROR citation-quote-mismatch [thm-completion-preserves-dimension-and-hilbert-samuel-data]: L2 quote does not occur in cor-completion-commutes-with-finite-quotients-and-submodules's Statement\nERROR citation-quote-mismatch [thm-completion-preserves-dimension-and-hilbert-samuel-data]: L3 quote does not occur in def-hilbert-samuel-multiplicity's Definition\nERROR citation-quote-mismatch [ex-p-adic-integers-as-an-inverse-limit]: L2 quote does not occur in def-adic-completion-of-a-module's Definition\nERROR citation-quote-mismatch [ex-p-adic-integers-as-an-inverse-limit]: L3 quote does not occur in thm-kernel-and-universal-property-of-adic-completion's Statement\nERROR citation-quote-mismatch [ex-adic-completion-of-the-integers]: L1 quote does not occur in def-adic-completion-of-a-module's Definition\nERROR citation-quote-mismatch [ex-adic-completion-of-the-integers]: L2 quote does not occur in thm-kernel-and-universal-property-of-adic-completion's Statement\nERROR citation-quote-mismatch [ex-equivalent-adic-filtrations]: L1 quote does not occur in def-adic-completion-of-a-module's Definition\nERROR citation-fact-uncontracted [ex-equivalent-adic-filtrations]: L2 -> thm-universal-property-of-an-inverse-limit-of-modules needs an exact citation contract\nERROR step-entry-input-omitted [ex-equivalent-adic-filtrations]: step-1-1 omits L2, cited by 1.1\nERROR step-entry-input-omitted [ex-equivalent-adic-filtrations]: step-1-2 omits L2, cited by 1.2\nERROR citation-quote-mismatch [ex-completion-not-exact-without-finiteness]: L1 quote does not occur in def-adic-completion-of-a-module's Definition\nERROR citation-quote-mismatch [ex-completion-not-exact-without-finiteness]: L2 quote does not occur in thm-completion-is-exact-on-finite-modules's Statement\nERROR citation-quote-mismatch [ex-completion-of-a-domain-not-a-domain]: L2 quote does not occur in thm-noetherianity-of-adic-completion's Statement\nERROR citation-quote-mismatch [ex-semilocal-adic-completion]: L1 quote does not occur in def-adic-completion-of-a-module's Definition\nERROR citation-use-not-supported [thm-every-braided-monoidal-category-is-monoidally-equivalent-to-a-strict-braided-one]: L1 is not cited by declared use 2.1\nERROR citation-use-step-missing [thm-every-braided-monoidal-category-is-monoidally-equivalent-to-a-strict-braided-one]: L2 names missing step 1.2\nERROR citation-use-not-supported [thm-every-braided-monoidal-category-is-monoidally-equivalent-to-a-strict-braided-one]: L2 is not cited by declared use 2.1\nERROR citation-use-step-missing [thm-every-braided-monoidal-category-is-monoidally-equivalent-to-a-strict-braided-one]: L3 names missing step 3.1\nERROR citation-use-unmapped [thm-every-braided-monoidal-category-is-monoidally-equivalent-to-a-strict-braided-one]: L3 is cited by 2.1 but the contract omits it\nERROR step-entry-input-omitted [thm-every-braided-monoidal-category-is-monoidally-equivalent-to-a-strict-braided-one]: step-1-1 omits F1, cited by 1.1\nERROR step-entry-step-missing [thm-every-braided-monoidal-category-is-monoidally-equivalent-to-a-strict-braided-one]: derivations step-1-2 names missing 1.2\nERROR step-entry-input-omitted [thm-every-braided-monoidal-category-is-monoidally-equivalent-to-a-strict-braided-one]: step-2-1 omits L3, cited by 2.1\nERROR step-entry-input-omitted [thm-every-braided-monoidal-category-is-monoidally-equivalent-to-a-strict-braided-one]: step-2-1 omits F1, cited by 2.1\nERROR step-entry-input-omitted [thm-every-braided-monoidal-category-is-monoidally-equivalent-to-a-strict-braided-one]: step-2-1 omits 1.1, cited by 2.1\nERROR step-entry-input-step-missing [thm-every-braided-monoidal-category-is-monoidally-equivalent-to-a-strict-braided-one]: step-2-1 names missing step 1.2\nERROR step-entry-step-missing [thm-every-braided-monoidal-category-is-monoidally-equivalent-to-a-strict-braided-one]: derivations step-3-1 names missing 3.1\nERROR step-entry-input-step-missing [thm-every-braided-monoidal-category-is-monoidally-equivalent-to-a-strict-braided-one]: step-3-1 names missing step 1.2\nERROR citation-quote-mismatch [thm-the-two-strand-braid-group-is-infinite-cyclic]: L1 quote does not occur in def-braid-group-by-the-artin-presentation's Definition\nERROR citation-quote-mismatch [thm-the-braid-group-surjects-onto-the-symmetric-group]: L1 quote does not occur in def-braid-group-by-the-artin-presentation's Definition\nERROR citation-quote-mismatch [thm-the-braid-group-surjects-onto-the-symmetric-group]: L3 quote does not occur in thm-the-symmetric-group-has-the-coxeter-presentation's Statement\nERROR citation-quote-mismatch [cex-the-braid-category-is-braided-but-not-symmetric]: L1 quote does not occur in def-the-braid-category's Definition\nERROR citation-quote-mismatch [thm-symmetric-coherence]: L4 quote does not occur in thm-the-symmetric-group-has-the-coxeter-presentation's Statement\nERROR citation-quote-mismatch [thm-braided-coherence-fails-in-the-symmetric-form]: L1 quote does not occur in def-the-braid-category's Definition\nERROR citation-quote-mismatch [thm-the-braid-category-is-the-free-strict-braided-monoidal-category-on-one-generator]: L2 quote does not occur in def-the-braid-category's Definition\nERROR citation-quote-mismatch [cor-two-canonical-braided-composites-agree-exactly-when-their-underlying-braids-agree]: L1 quote does not occur in thm-braided-coherence-via-underlying-braids's Statement\nERROR citation-quote-mismatch [cor-two-canonical-braided-composites-agree-exactly-when-their-underlying-braids-agree]: L2 quote does not occur in def-the-braid-category's Definition\nERROR citation-quote-mismatch [ex-the-braid-group-on-three-strands]: L1 quote does not occur in def-braid-group-by-the-artin-presentation's Definition\nERROR citation-quote-mismatch [ex-the-two-strand-braiding-in-the-braid-category-has-infinite-order]: L1 quote does not occur in def-the-braid-category's Definition\nERROR citation-quote-mismatch [ex-two-canonical-maps-with-different-underlying-braids]: L2 quote does not occur in def-the-braid-category's Definition\nERROR citation-quote-mismatch [lem-the-one-step-generator-map-is-a-functorial-monomorphism]: L1 quote does not occur in def-functorial-one-step-generator-extension's Definition\nERROR citation-fact-uncontracted [lem-the-one-step-generator-map-is-a-functorial-monomorphism]: L3 -> thm-ab5-implies-ab4 needs an exact citation contract\nERROR step-entry-input-omitted [lem-the-one-step-generator-map-is-a-functorial-monomorphism]: step-1-1 omits L3, cited by 1.1\nERROR citation-fact-uncontracted [lem-transfinite-iteration-of-the-generator-extension-preserves-monomorphisms-and-factorizes-small-source-maps]: L3 -> thm-a-locally-small-abelian-category-with-a-generator-is-well-powered needs an exact citation contract\nERROR step-entry-input-omitted [lem-transfinite-iteration-of-the-generator-extension-preserves-monomorphisms-and-factorizes-small-source-maps]: step-3-1 omits L3, cited by 3.1\nERROR citation-quote-mismatch [lem-a-sufficiently-long-generator-extension-iteration-is-injective]: L2 quote does not occur in lem-transfinite-iteration-of-the-generator-extension-preserves-monomorphisms-and-factorizes-small-source-maps's Statement\nERROR citation-quote-mismatch [thm-a-grothendieck-abelian-category-has-functorial-injective-embeddings]: L3 quote does not occur in def-functorial-one-step-generator-extension's Definition\nERROR citation-quote-mismatch [thm-a-grothendieck-abelian-category-has-functorial-injective-embeddings]: L5 quote does not occur in lem-transfinite-iteration-of-the-generator-extension-preserves-monomorphisms-and-factorizes-small-source-maps's Statement\nERROR citation-use-not-supported [fs-enough-projectives-selects-a-projective-resolution-functor-on-all-objects]: L1 is not cited by declared use 2.1\nERROR citation-source-not-in-fact [fs-enough-projectives-selects-a-projective-resolution-functor-on-all-objects]: L2 does not link [[prop-the-iterated-free-module-resolution-is-canonical-in-zf]]\nERROR citation-undeclared-dependency [fs-enough-projectives-selects-a-projective-resolution-functor-on-all-objects]: L2 cites prop-the-iterated-free-module-resolution-is-canonical-in-zf, which is absent from deps/justified_by/forward_refs\nERROR citation-fact-uncontracted [fs-enough-projectives-selects-a-projective-resolution-functor-on-all-objects]: L2 -> thm-free-modules-are-projective-with-choice-boundary needs an exact citation contract\nERROR citation-quote-mismatch [lem-a-generic-linear-projection-preserves-injectivity-and-immersion]: F1 quote does not occur in def-secant-and-tangent-direction-maps-of-an-euclidean-embedding's Definition\nERROR citation-quote-mismatch [lem-a-generic-projection-can-preserve-properness]: F1 quote does not occur in def-secant-and-tangent-direction-maps-of-an-euclidean-embedding's Definition\nERROR citation-use-not-supported [thm-weak-whitney-proper-embedding-theorem]: L3 is not cited by declared use 4.1\nERROR citation-use-unmapped [thm-weak-whitney-proper-embedding-theorem]: L3 is cited by 2.1 but the contract omits it\nERROR citation-use-unmapped [thm-weak-whitney-proper-embedding-theorem]: L3 is cited by 3.1 but the contract omits it\nERROR step-entry-input-omitted [thm-weak-whitney-proper-embedding-theorem]: step-2-1 omits L3, cited by 2.1\nERROR step-entry-input-omitted [thm-weak-whitney-proper-embedding-theorem]: step-3-1 omits L3, cited by 3.1\nERROR citation-quote-mismatch [lem-normal-addition-is-a-local-diffeomorphism-along-the-zero-section]: F1 quote does not occur in def-normal-addition-map-for-a-euclidean-submanifold's Definition\nERROR citation-quote-mismatch [thm-euclidean-tubular-neighbourhood-theorem]: L1 quote does not occur in def-normal-addition-map-for-a-euclidean-submanifold's Definition\nERROR citation-fact-uncontracted [thm-euclidean-tubular-neighbourhood-theorem]: L2 -> lem-normal-addition-is-a-local-diffeomorphism-along-the-zero-section needs an exact citation contract\nERROR citation-fact-uncontracted [thm-euclidean-tubular-neighbourhood-theorem]: L2 -> lem-variable-radius-injectivity-for-normal-addition needs an exact citation contract\nERROR step-entry-input-omitted [thm-euclidean-tubular-neighbourhood-theorem]: step-1-1 omits L2, cited by 1.1\nERROR step-entry-input-fact-missing [thm-euclidean-tubular-neighbourhood-theorem]: step-1-1 names missing fact F1\nERROR citation-quote-mismatch [thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold]: L1 quote does not occur in def-tubular-neighbourhood-of-an-embedded-submanifold's Definition\nERROR citation-quote-mismatch [prop-two-tubular-neighbourhood-germs-are-isomorphic-near-the-zero-section]: F1 quote does not occur in def-tubular-neighbourhood-of-an-embedded-submanifold's Definition\nERROR citation-use-not-supported [prop-relative-transversality-preserves-a-map-on-a-closed-good-region]: L1 is not cited by declared use 1.1\nERROR citation-fact-uncontracted [prop-relative-transversality-preserves-a-map-on-a-closed-good-region]: L4 -> cor-every-closed-subset-of-a-manifold-is-the-zero-set-of-a-smooth-nonnegative-function needs an exact citation contract\nERROR step-entry-input-omitted [prop-relative-transversality-preserves-a-map-on-a-closed-good-region]: step-1-1 omits L4, cited by 1.1\nERROR step-entry-input-omitted [prop-relative-transversality-preserves-a-map-on-a-closed-good-region]: step-2-1 omits L4, cited by 2.1\nERROR citation-quote-mismatch [prop-an-np-complete-language-in-p-implies-p-equals-np]: L2 quote does not occur in thm-polynomial-reductions-transfer-p-np-and-conp-membership's Statement\nERROR citation-use-unmapped [fs-np-complete-means-known-not-in-p]: L1 is cited by 2.1 but the contract omits it\nERROR step-entry-input-omitted [fs-np-complete-means-known-not-in-p]: step-2-1 omits L1, cited by 2.1\nERROR step-entry-input-omitted [fs-np-complete-means-known-not-in-p]: step-2-1 omits F1, cited by 2.1\n",
      "named_ids": [
        "lem-boundary-label-of-a-van-kampen-diagram-is-null-in-the-presented-group",
        "lem-minimal-area-diagrams-are-reduced",
        "lem-curvature-count-for-reduced-c-prime-one-sixth-diagrams",
        "lem-kernels-of-finite-projections-form-an-open-normal-neighbourhood-basis",
        "thm-continuity-into-an-inverse-limit-is-coordinatewise",
        "thm-topological-characterisation-of-profinite-groups",
        "thm-kernel-and-density-of-the-canonical-map-to-the-profinite-completion",
        "thm-universal-property-of-profinite-completion",
        "fs-a-compact-hausdorff-group-is-profinite-without-total-disconnectedness",
        "thm-hilbert-serre-theorem",
        "lem-rees-module-finiteness-and-stable-filtrations",
        "thm-artin-rees-lemma",
        "thm-krull-intersection-theorem",
        "thm-existence-of-hilbert-samuel-polynomial",
        "thm-hilbert-samuel-dimension-theorem",
        "thm-multiplicity-under-reduction-by-a-parameter",
        "cor-parameter-ideal-multiplicity-positive",
        "thm-dimension-and-parameters-for-modules",
        "thm-additivity-of-hilbert-samuel-multiplicity",
        "ex-hilbert-samuel-polynomial-of-a-dvr",
        "ex-hilbert-samuel-multiplicity-of-a-plane-curve",
        "cor-finite-flat-noetherian-modules-are-projective",
        "thm-projective-module-characterizations",
        "ex-fraction-field-flat-not-projective",
        "thm-universal-property-of-an-inverse-limit-of-modules",
        "thm-inverse-limits-are-left-exact",
        "thm-kernel-and-universal-property-of-adic-completion",
        "prop-units-in-an-adically-complete-ring",
        "thm-completion-is-exact-on-finite-modules",
        "thm-completion-as-extension-of-scalars",
        "cor-completion-commutes-with-finite-quotients-and-submodules",
        "thm-flatness-of-noetherian-completion",
        "thm-faithful-flatness-of-jacobson-adic-completion",
        "thm-noetherianity-of-adic-completion",
        "thm-completion-of-a-noetherian-local-ring",
        "thm-finite-modules-over-complete-noetherian-rings-are-complete",
        "thm-complete-nakayama-lemma",
        "thm-completion-preserves-dimension-and-hilbert-samuel-data",
        "ex-p-adic-integers-as-an-inverse-limit",
        "ex-adic-completion-of-the-integers",
        "ex-equivalent-adic-filtrations",
        "ex-completion-not-exact-without-finiteness",
        "ex-completion-of-a-domain-not-a-domain",
        "ex-semilocal-adic-completion",
        "thm-every-braided-monoidal-category-is-monoidally-equivalent-to-a-strict-braided-one",
        "thm-the-two-strand-braid-group-is-infinite-cyclic",
        "thm-the-braid-group-surjects-onto-the-symmetric-group",
        "cex-the-braid-category-is-braided-but-not-symmetric",
        "thm-symmetric-coherence",
        "thm-braided-coherence-fails-in-the-symmetric-form",
        "thm-the-braid-category-is-the-free-strict-braided-monoidal-category-on-one-generator",
        "cor-two-canonical-braided-composites-agree-exactly-when-their-underlying-braids-agree",
        "ex-the-braid-group-on-three-strands",
        "ex-the-two-strand-braiding-in-the-braid-category-has-infinite-order",
        "ex-two-canonical-maps-with-different-underlying-braids",
        "lem-the-one-step-generator-map-is-a-functorial-monomorphism",
        "lem-transfinite-iteration-of-the-generator-extension-preserves-monomorphisms-and-factorizes-small-source-maps",
        "lem-a-sufficiently-long-generator-extension-iteration-is-injective",
        "thm-a-grothendieck-abelian-category-has-functorial-injective-embeddings",
        "fs-enough-projectives-selects-a-projective-resolution-functor-on-all-objects",
        "prop-the-iterated-free-module-resolution-is-canonical-in-zf",
        "lem-a-generic-linear-projection-preserves-injectivity-and-immersion",
        "lem-a-generic-projection-can-preserve-properness",
        "thm-weak-whitney-proper-embedding-theorem",
        "lem-normal-addition-is-a-local-diffeomorphism-along-the-zero-section",
        "thm-euclidean-tubular-neighbourhood-theorem",
        "thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold",
        "prop-two-tubular-neighbourhood-germs-are-isomorphic-near-the-zero-section",
        "prop-relative-transversality-preserves-a-map-on-a-closed-good-region",
        "prop-an-np-complete-language-in-p-implies-p-equals-np",
        "fs-np-complete-means-known-not-in-p"
      ]
    },
    {
      "id": "risk-report",
      "stage": "8-preflight",
      "why": "ERROR risk-review-missing [thm-krull-intersection-theorem]: thm-krull-intersection-theorem is high risk and lacks a complete Alpha risk_review",
      "output": "MODERATE 3 [lem-symmetrisation-has-the-same-normal-closure] 1:2 cited facts; 2:induction, recursion, or minimality\nORDINARY 0 [lem-c-prime-lambda-implies-c-lambda] no signals\nHIGH 5 [lem-boundary-label-of-a-van-kampen-diagram-is-null-in-the-presented-group] 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 6 [thm-van-kampen-lemma] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nHIGH 5 [thm-diagram-area-agrees-with-algebraic-relator-area] 1:3 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nHIGH 5 [lem-minimal-area-diagrams-are-reduced] 1:2 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nMODERATE 3 [lem-curvature-count-for-reduced-c-prime-one-sixth-diagrams] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 2 [thm-greendlinger-lemma-for-c-prime-one-sixth-presentations] 2:boundary-sensitive language\nORDINARY 2 [lem-dehn-replacement-strictly-shortens-a-word] 2:boundary-sensitive language\nORDINARY 2 [thm-dehn-algorithm-solves-the-word-problem] 2:boundary-sensitive language\nMODERATE 3 [cor-finite-c-prime-one-sixth-presentations-have-solvable-word-problem] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 5 [cor-linear-isoperimetric-bound-for-finite-c-prime-one-sixth-presentations] 1:3 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nORDINARY 0 [thm-torsion-theorem-for-c-prime-one-sixth-groups] no signals\nMODERATE 3 [cor-c-prime-one-sixth-with-no-proper-power-relators-is-torsion-free] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 2 [fs-every-repeated-subword-is-a-piece] 2:boundary-sensitive language\nORDINARY 2 [fs-c-prime-one-sixth-means-every-relator-has-length-at-most-six] 2:boundary-sensitive language\nHIGH 5 [fs-greendlinger-lemma-applies-to-every-finitely-presented-group] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 2 [fs-dehn-reduction-is-the-same-as-free-reduction] 2:boundary-sensitive language\nMODERATE 3 [fs-no-proper-power-relators-alone-implies-torsion-free] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 2 [ex-symmetrising-a-one-relator-presentation] 2:boundary-sensitive language\nMODERATE 3 [ex-finding-pieces-and-checking-c-prime-one-sixth] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [ex-a-dehn-reduction-sequence] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 6 [ex-a-greendlinger-cell-in-a-van-kampen-diagram] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nORDINARY 2 [ex-a-torsion-free-small-cancellation-group] 2:boundary-sensitive language\nORDINARY 2 [cex-an-overlap-at-exactly-one-sixth-under-the-strict-convention] 2:boundary-sensitive language\nORDINARY 2 [cex-a-no-proper-power-presentation-with-torsion-outside-small-cancellation] 2:boundary-sensitive language\nHIGH 5 [lem-compatible-tuples-form-a-subgroup] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [thm-concrete-inverse-limit-universal-property-in-groups] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [lem-inverse-limit-of-finite-discrete-groups-is-a-closed-topological-subgroup] 1:2 cited facts; 2:analytic limiting/completeness language\nCRITICAL 8 [thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected] 2:4 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:analytic limiting/completeness language\nCRITICAL 8 [lem-kernels-of-finite-projections-form-an-open-normal-neighbourhood-basis] 2:5 declared dependencies; 2:5 cited facts; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nMODERATE 3 [thm-continuity-into-an-inverse-limit-is-coordinatewise] 1:3 cited facts; 2:analytic limiting/completeness language\nHIGH 5 [thm-cofinal-subsystems-have-isomorphic-inverse-limits] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 4 [thm-compact-hausdorff-total-disconnectedness-and-total-separatedness-agree] 2:4 declared dependencies; 2:4 cited facts\nCRITICAL 13 [thm-topological-characterisation-of-profinite-groups] 2:6 declared dependencies; 2:5 cited facts; 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nCRITICAL 8 [thm-kernel-and-density-of-the-canonical-map-to-the-profinite-completion] 2:4 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nMODERATE 4 [cor-the-canonical-map-is-injective-iff-the-group-is-residually-finite] 1:2 cited facts; 3:biconditional / both-direction claim\nHIGH 7 [thm-universal-property-of-profinite-completion] 2:6 declared dependencies; 1:3 cited facts; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nMODERATE 3 [thm-profinite-completion-is-functorial] 1:3 cited facts; 2:quotient or equivalence-class construction\nHIGH 6 [thm-free-groups-are-residually-finite] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language\nORDINARY 0 [thm-finitely-generated-free-groups-are-subgroup-separable] no signals\nHIGH 5 [fs-an-inverse-limit-of-groups-may-be-empty] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [fs-projections-from-every-surjective-inverse-system-are-surjective-in-zf] 1:2 cited facts; 2:analytic limiting/completeness language\nORDINARY 1 [fs-the-canonical-map-to-profinite-completion-is-always-injective] 1:2 cited facts\nORDINARY 0 [fs-a-compact-hausdorff-group-is-profinite-without-total-disconnectedness] no signals\nHIGH 7 [fs-two-groups-with-isomorphic-profinite-completions-are-isomorphic] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nORDINARY 2 [ex-an-eventually-constant-inverse-system] 2:analytic limiting/completeness language\nHIGH 6 [ex-the-profinite-completion-of-a-finite-group] 2:4 declared dependencies; 1:3 cited facts; 3:biconditional / both-direction claim\nMODERATE 4 [ex-the-profinite-completion-of-the-integers] 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nMODERATE 4 [ex-a-residually-finite-free-group] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 3 [ex-a-dense-nonclosed-copy-of-a-group-in-its-completion] 1:2 cited facts; 2:analytic limiting/completeness language\nMODERATE 3 [ex-a-non-residually-finite-baumslag-solitar-group] 3:biconditional / both-direction claim\nMODERATE 3 [cex-same-finite-quotients-do-not-trivially-identify-abstract-groups] 1:2 cited facts; 2:quotient or equivalence-class construction\nHIGH 6 [thm-hilbert-serre-theorem] 1:3 cited facts; 1:6 numbered proof steps; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 11 [lem-rees-module-finiteness-and-stable-filtrations] 2:5 declared dependencies; 2:5 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 3 [thm-artin-rees-lemma] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness\nMODERATE 4 [cor-induced-and-intrinsic-adic-filtrations-are-equivalent] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nHIGH 7 [thm-krull-intersection-theorem] 2:4 declared dependencies; 2:4 cited facts; 1:6 numbered proof steps; 2:boundary-sensitive language\nCRITICAL 8 [thm-existence-of-hilbert-samuel-polynomial] 2:4 declared dependencies; 2:4 cited facts; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nCRITICAL 8 [thm-hilbert-samuel-dimension-theorem] 2:5 declared dependencies; 2:5 cited facts; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nCRITICAL 13 [thm-dimension-and-parameters-for-modules] 2:4 declared dependencies; 2:4 cited facts; 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nHIGH 5 [thm-additivity-of-hilbert-samuel-multiplicity] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 5 [thm-multiplicity-under-reduction-by-a-parameter] 1:2 cited facts; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nHIGH 7 [cor-parameter-ideal-multiplicity-positive] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 4 [ex-hilbert-series-of-a-polynomial-ring] 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nORDINARY 0 [ex-associated-graded-of-a-local-ring] no signals\nORDINARY 2 [ex-artin-rees-intersection] 2:boundary-sensitive language\nMODERATE 4 [ex-krull-intersection-in-a-local-domain] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nHIGH 5 [ex-hilbert-samuel-polynomial-of-a-dvr] 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 3 [ex-hilbert-samuel-multiplicity-of-a-plane-curve] 1:3 cited facts; 2:quotient or equivalence-class construction\nHIGH 5 [ex-hilbert-samuel-finite-length-case] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [thm-direct-sums-and-direct-summands-preserve-flatness] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 7 [thm-localisations-are-flat] 2:4 declared dependencies; 2:4 cited facts; 3:biconditional / both-direction claim\nHIGH 6 [thm-flatness-is-local] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nCRITICAL 9 [thm-equational-criterion-for-flatness] 2:4 declared dependencies; 2:4 cited facts; 1:6 numbered proof steps; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nCRITICAL 10 [cor-flat-quotients-and-idempotent-ideals] 1:2 cited facts; 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 7 [thm-faithful-flatness-detected-by-nonzero-modules-and-fibres] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nCRITICAL 8 [thm-faithfully-flat-ring-map-characterisations] 1:2 cited facts; 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness; 2:quotient or equivalence-class construction\nHIGH 5 [cor-faithfully-flat-ring-maps-are-injective] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nHIGH 7 [thm-faithfully-flat-descent-of-flatness] 2:4 declared dependencies; 2:4 cited facts; 3:biconditional / both-direction claim\nHIGH 5 [cor-faithfully-flat-descent-of-finite-generation] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:quotient or equivalence-class construction\nCRITICAL 10 [thm-local-criterion-for-flatness-ideal-form] 2:6 declared dependencies; 2:6 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 2 [thm-local-criterion-for-flatness-closed-fibre-form] 2:boundary-sensitive language\nMODERATE 3 [thm-finite-flat-modules-over-local-rings-are-free] 1:3 cited facts; 2:quotient or equivalence-class construction\nMODERATE 4 [cor-finite-flat-noetherian-modules-are-projective] 2:5 declared dependencies; 2:4 cited facts\nMODERATE 3 [thm-flat-going-down] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness\nMODERATE 3 [ex-polynomial-algebras-are-faithfully-flat] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness\nMODERATE 3 [ex-localisations-not-faithfully-flat] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness\nMODERATE 3 [ex-fraction-field-flat-not-projective] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness\nORDINARY 2 [ex-flat-idempotent-quotient] 2:quotient or equivalence-class construction\nMODERATE 3 [ex-nonflat-quotient-module] 1:2 cited facts; 2:quotient or equivalence-class construction\nMODERATE 3 [ex-faithfully-flat-principal-open-cover] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness\nORDINARY 0 [ex-finite-flat-module-over-a-local-ring] no signals\nORDINARY 2 [thm-universal-property-of-an-inverse-limit-of-modules] 2:analytic limiting/completeness language\nMODERATE 3 [thm-inverse-limits-are-left-exact] 1:3 cited facts; 2:analytic limiting/completeness language\nCRITICAL 8 [thm-exactness-of-inverse-limits-under-mittag-leffler] 1:2 cited facts; 1:6 numbered proof steps; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 13 [thm-kernel-and-universal-property-of-adic-completion] 2:4 declared dependencies; 2:4 cited facts; 1:7 numbered proof steps; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nHIGH 5 [prop-units-in-an-adically-complete-ring] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nCRITICAL 9 [thm-completion-is-exact-on-finite-modules] 2:5 declared dependencies; 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nHIGH 5 [thm-completion-as-extension-of-scalars] 2:4 declared dependencies; 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness\nHIGH 7 [cor-completion-commutes-with-finite-quotients-and-submodules] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 5 [thm-flatness-of-noetherian-completion] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:quotient or equivalence-class construction\nHIGH 7 [thm-faithful-flatness-of-jacobson-adic-completion] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nCRITICAL 9 [thm-noetherianity-of-adic-completion] 2:5 declared dependencies; 2:4 cited facts; 1:7 numbered proof steps; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nCRITICAL 8 [thm-completion-of-a-noetherian-local-ring] 2:5 declared dependencies; 2:5 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:quotient or equivalence-class construction\nMODERATE 3 [thm-finite-modules-over-complete-noetherian-rings-are-complete] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness\nHIGH 6 [thm-complete-nakayama-lemma] 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nCRITICAL 8 [thm-completion-preserves-dimension-and-hilbert-samuel-data] 2:6 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:quotient or equivalence-class construction\nMODERATE 3 [ex-p-adic-integers-as-an-inverse-limit] 1:2 cited facts; 2:analytic limiting/completeness language\nHIGH 5 [ex-adic-completion-of-the-integers] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 7 [ex-equivalent-adic-filtrations] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nHIGH 5 [ex-completion-not-exact-without-finiteness] 1:2 cited facts; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nHIGH 7 [ex-completion-of-a-domain-not-a-domain] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nORDINARY 2 [ex-iterated-adic-completions] 2:boundary-sensitive language\nMODERATE 4 [ex-semilocal-adic-completion] 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nCRITICAL 10 [thm-an-l-q-function-defines-a-bounded-linear-functional-on-l-p] 2:6 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nCRITICAL 8 [prop-lambda-g-has-operator-norm-equal-to-the-l-q-norm] 2:5 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 7 [prop-semifinite-measures-make-l-q-representatives-unique] 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nCRITICAL 9 [lem-l-p-functions-have-sigma-finite-essential-support-for-finite-p] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nMODERATE 3 [lem-bounded-functionals-on-finite-l-p-define-finite-signed-or-complex-measures] 1:3 cited facts; 2:analytic limiting/completeness language\nHIGH 5 [lem-functional-induced-measures-are-absolutely-continuous-with-respect-to-mu] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nCRITICAL 10 [lem-finite-measure-bounded-l-p-functionals-are-integration-against-rn-densities] 2:6 declared dependencies; 2:6 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 8 [lem-rn-densities-of-bounded-l-p-functionals-belong-to-l-q] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 11 [thm-sigma-finite-duality-for-bounded-functionals-on-l-p] 3:9 declared dependencies; 2:6 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 10 [thm-arbitrary-measure-duality-for-l-p-when-one-less-p-less-infinity] 2:6 declared dependencies; 2:5 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 2 [cor-l-p-norm-recovery-by-unit-l-q-pairings] 2:analytic limiting/completeness language\nHIGH 5 [cor-ell-p-duality-by-counting-measure] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:analytic limiting/completeness language\nHIGH 6 [ex-a-power-function-realises-the-duality-norm-on-unit-interval] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [ex-the-half-interval-integral-functional-has-norm-two-to-the-minus-one-over-q] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 5 [ex-the-dual-of-ell-two-is-ell-two-by-the-counting-measure-pairing] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:analytic limiting/completeness language\nHIGH 7 [cex-point-evaluation-at-zero-is-not-well-defined-on-l-p-of-unit-interval] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nCRITICAL 14 [cex-the-zero-countable-infinity-cocountable-measure-space-breaks-p-equals-one-duality] 3:9 declared dependencies; 2:9 cited facts; 1:6 numbered proof steps; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nHIGH 7 [thm-bounded-linear-operator-equivalences] 2:4 declared dependencies; 2:4 cited facts; 1:6 numbered proof steps; 2:boundary-sensitive language\nMODERATE 3 [lem-operator-norm-is-a-norm] 1:2 cited facts; 2:analytic limiting/completeness language\nMODERATE 3 [lem-composition-operator-norm-inequality] 1:2 cited facts; 2:analytic limiting/completeness language\nMODERATE 3 [thm-bounded-operator-space-is-banach] 1:3 cited facts; 2:analytic limiting/completeness language\nCRITICAL 12 [thm-extension-of-a-bounded-map-from-a-dense-subspace] 3:8 declared dependencies; 2:8 cited facts; 1:8 numbered proof steps; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [thm-bounded-bilinear-map-equivalences] 2:4 declared dependencies; 2:4 cited facts; 1:6 numbered proof steps\nHIGH 5 [lem-quotient-seminorm-is-representative-independent] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:quotient or equivalence-class construction\nMODERATE 3 [lem-quotient-seminorm-triangle-inequality] 1:2 cited facts; 2:quotient or equivalence-class construction\nCRITICAL 10 [thm-quotient-seminorm-is-a-norm-iff-subspace-is-closed] 2:5 declared dependencies; 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 6 [thm-quotient-map-is-open] 1:3 cited facts; 3:biconditional / both-direction claim; 2:quotient or equivalence-class construction\nCRITICAL 12 [thm-quotient-of-banach-by-closed-subspace-is-banach] 2:5 declared dependencies; 2:5 cited facts; 1:6 numbered proof steps; 3:biconditional / both-direction claim; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nCRITICAL 10 [thm-universal-property-of-the-normed-quotient] 2:5 declared dependencies; 2:5 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nORDINARY 2 [thm-complemented-subspace-iff-range-of-a-bounded-projection] 1:2 cited facts; 1:6 numbered proof steps\nCRITICAL 9 [thm-bounded-below-iff-injective-with-closed-range] 2:6 declared dependencies; 2:6 cited facts; 1:8 numbered proof steps; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 8 [thm-bounded-right-inverse-iff-kernel-is-complemented] 3:7 declared dependencies; 2:5 cited facts; 3:biconditional / both-direction claim\nCRITICAL 9 [thm-bounded-left-inverse-iff-range-is-complemented] 2:5 declared dependencies; 2:4 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nCRITICAL 8 [ex-coordinate-projections-and-inclusions-on-product-banach-spaces] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [ex-shift-operators-on-classical-sequence-spaces] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [ex-evaluation-functional-on-c-of-k] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 4 [ex-differentiation-on-polynomials-is-unbounded-in-the-supremum-norm] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 10 [ex-quotient-by-the-kernel-is-isometric-to-the-range-with-the-induced-quotient-norm] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nCRITICAL 10 [ex-c-mod-constants-and-oscillation-norm] 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nHIGH 5 [cex-a-closed-subspace-need-not-have-a-best-approximation] 1:7 numbered proof steps; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 6 [cex-an-algebraic-complement-need-not-be-topological] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 1 [lem-chebyshev-psi-prime-power-expansion] 1:3 cited facts\nCRITICAL 8 [lem-prime-counting-chebyshev-partial-summation] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [lem-central-binomial-coefficient-bounds] 1:3 cited facts; 2:boundary-sensitive language\nHIGH 5 [lem-central-binomial-coefficient-prime-valuation] 3:7 declared dependencies; 2:6 cited facts\nCRITICAL 9 [thm-chebyshev-theta-linear-bounds] 3:7 declared dependencies; 2:6 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:induction, recursion, or minimality\nHIGH 6 [lem-chebyshev-functions-prime-power-comparison] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nCRITICAL 10 [thm-chebyshev-prime-counting-bounds] 2:4 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 9 [thm-bertrands-postulate] 3:7 declared dependencies; 2:6 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nHIGH 5 [lem-weighted-von-mangoldt-harmonic-estimate] 3:8 declared dependencies; 2:7 cited facts\nHIGH 7 [thm-first-mertens-theorem-for-primes] 3:7 declared dependencies; 2:7 cited facts; 2:analytic limiting/completeness language\nHIGH 6 [thm-second-mertens-theorem-for-primes] 2:6 declared dependencies; 2:4 cited facts; 2:analytic limiting/completeness language\nCRITICAL 9 [thm-third-mertens-theorem-for-primes] 3:7 declared dependencies; 2:6 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 2 [cor-sum-of-reciprocals-of-primes-diverges] 2:analytic limiting/completeness language\nORDINARY 2 [cor-euler-prime-product-tends-to-zero] 2:boundary-sensitive language\nHIGH 6 [ex-prime-counting-theta-and-psi-table] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language\nORDINARY 1 [ex-chebyshev-binomial-coefficient-estimate] 1:2 cited facts\nORDINARY 1 [ex-bertrand-finite-range-verification] 1:2 cited facts\nORDINARY 1 [ex-first-and-second-mertens-numerics] 1:2 cited facts\nORDINARY 1 [ex-third-mertens-product-numerics] 1:2 cited facts\nMODERATE 4 [cex-chebyshev-bounds-do-not-give-the-prime-number-theorem] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 3 [cex-shoups-product-bound-does-not-determine-mertens-constant] 1:3 cited facts; 2:boundary-sensitive language\nORDINARY 0 [thm-the-inverse-braiding-is-a-braiding] no signals\nORDINARY 2 [thm-the-braiding-is-compatible-with-the-unit-constraints] 2:4 declared dependencies\nORDINARY 1 [thm-in-a-strict-braided-monoidal-category-the-braiding-satisfies-the-yang-baxter-equation] 1:2 cited facts\nORDINARY 2 [thm-in-the-presence-of-the-symmetry-axiom-one-hexagon-implies-the-other] 2:boundary-sensitive language\nORDINARY 1 [thm-the-cartesian-swap-braiding-is-a-symmetry] 1:3 cited facts\nORDINARY 1 [thm-the-double-braiding-center-is-symmetric] 1:3 cited facts\nHIGH 5 [thm-every-braided-monoidal-category-is-monoidally-equivalent-to-a-strict-braided-one] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nMODERATE 3 [thm-the-two-strand-braid-group-is-infinite-cyclic] 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 4 [thm-the-symmetric-group-has-the-coxeter-presentation] 2:4 declared dependencies; 2:boundary-sensitive language\nMODERATE 4 [thm-the-braid-group-surjects-onto-the-symmetric-group] 2:4 declared dependencies; 2:4 cited facts\nORDINARY 1 [cex-the-braid-category-is-braided-but-not-symmetric] 1:2 cited facts\nCRITICAL 8 [thm-symmetric-coherence] 2:5 declared dependencies; 2:5 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 0 [cor-unbracketed-and-unordered-tensor-strings-are-well-defined-in-a-symmetric-monoidal-category] no signals\nMODERATE 3 [thm-braided-coherence-fails-in-the-symmetric-form] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness\nORDINARY 2 [fs-every-diagram-built-from-the-associator-and-the-braiding-commutes] 2:boundary-sensitive language\nCRITICAL 8 [thm-the-braid-category-is-the-free-strict-braided-monoidal-category-on-one-generator] 2:4 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nMODERATE 3 [thm-braided-coherence-via-underlying-braids] 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 4 [cor-two-canonical-braided-composites-agree-exactly-when-their-underlying-braids-agree] 1:2 cited facts; 3:biconditional / both-direction claim\nMODERATE 3 [fs-every-braided-monoidal-category-is-equivalent-to-a-strict-commutative-one] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [thm-monoid-objects-in-a-braided-monoidal-category-form-a-monoidal-category] 1:3 cited facts; 2:boundary-sensitive language\nORDINARY 1 [cor-monoid-objects-in-a-symmetric-monoidal-category-form-a-symmetric-monoidal-category] 1:2 cited facts\nORDINARY 0 [ex-the-swap-braiding-on-sets] no signals\nHIGH 5 [ex-the-braid-group-on-three-strands] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 0 [ex-the-hexagon-checked-for-cartesian-products] no signals\nORDINARY 0 [ex-the-sign-braiding-on-supervector-spaces] no signals\nORDINARY 1 [ex-the-two-strand-braiding-in-the-braid-category-has-infinite-order] 1:2 cited facts\nORDINARY 1 [ex-two-canonical-maps-with-different-underlying-braids] 1:2 cited facts\nORDINARY 1 [ex-commutative-monoid-objects-in-sets-are-ordinary-commutative-monoids] 1:2 cited facts\nMODERATE 3 [lem-one-step-extension-of-a-partial-projective-resolution] 1:3 cited facts; 2:boundary-sensitive language\nHIGH 5 [lem-one-step-extension-of-a-partial-injective-resolution] 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 3 [thm-enough-projectives-gives-projective-resolutions] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 5 [thm-enough-injectives-gives-injective-resolutions] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 5 [cor-every-module-admits-a-projective-resolution] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nCRITICAL 10 [cor-every-module-admits-an-injective-resolution] 2:4 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nHIGH 5 [prop-the-iterated-free-module-resolution-is-canonical-in-zf] 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 5 [lem-lift-a-map-through-degree-zero-of-a-projective-resolution] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nHIGH 7 [lem-extend-a-partial-comparison-map-by-one-degree] 2:5 declared dependencies; 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nCRITICAL 8 [thm-projective-comparison-map-exists] 2:5 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nHIGH 7 [lem-extend-a-partial-comparison-homotopy-by-one-degree] 2:4 declared dependencies; 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nHIGH 5 [thm-projective-comparison-maps-are-unique-up-to-chain-homotopy] 2:5 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language\nORDINARY 1 [thm-projective-resolutions-of-the-same-object-are-homotopy-equivalent-over-that-object] 1:2 cited facts\nMODERATE 3 [thm-injective-comparison-map-exists] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness\nORDINARY 1 [thm-injective-comparison-maps-are-unique-up-to-cochain-homotopy] 1:2 cited facts\nORDINARY 1 [thm-injective-resolutions-of-the-same-object-are-homotopy-equivalent-under-that-object] 1:2 cited facts\nHIGH 5 [cor-a-projective-or-injective-resolution-is-unique-up-to-nonunique-homotopy-equivalence] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 1 [prop-comparison-maps-respect-composition-up-to-homotopy] 1:2 cited facts\nMODERATE 3 [prop-comparison-of-the-identity-is-homotopic-to-the-identity] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 5 [lem-degree-zero-horseshoe-lift] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nHIGH 6 [lem-the-horseshoe-kernel-fits-a-short-exact-sequence] 2:4 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language\nMODERATE 3 [lem-inductive-horseshoe-step] 1:2 cited facts; 2:boundary-sensitive language\nCRITICAL 8 [thm-horseshoe-lemma-for-projective-resolutions] 2:4 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nHIGH 5 [thm-horseshoe-lemma-for-injective-resolutions] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 1 [prop-horseshoe-resolutions-are-compatible-with-morphisms-of-short-exact-sequences-up-to-homotopy] 1:2 cited facts\nORDINARY 1 [cor-a-split-short-exact-sequence-admits-the-direct-sum-resolution] 1:2 cited facts\nMODERATE 3 [thm-schanuel-lemma-in-an-abelian-category] 2:4 declared dependencies; 1:3 cited facts\nMODERATE 3 [cor-syzygies-from-two-projective-resolutions-are-stably-isomorphic] 1:2 cited facts; 2:induction, recursion, or minimality\nORDINARY 1 [thm-dual-schanuel-lemma-for-injective-copresentations] 1:2 cited facts\nMODERATE 3 [prop-a-projective-object-has-a-length-zero-projective-resolution] 1:3 cited facts; 2:boundary-sensitive language\nCRITICAL 9 [lem-extension-from-subobjects-of-a-generator-detects-injectivity] 2:5 declared dependencies; 2:5 cited facts; 1:6 numbered proof steps; 2:existence, choice, uniqueness, or well-definedness; 2:analytic limiting/completeness language\nMODERATE 3 [lem-the-one-step-generator-map-is-a-functorial-monomorphism] 1:3 cited facts; 2:boundary-sensitive language\nCRITICAL 9 [lem-transfinite-iteration-of-the-generator-extension-preserves-monomorphisms-and-factorizes-small-source-maps] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:analytic limiting/completeness language\nHIGH 7 [lem-a-sufficiently-long-generator-extension-iteration-is-injective] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 10 [thm-a-grothendieck-abelian-category-has-functorial-injective-embeddings] 2:6 declared dependencies; 2:6 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 8 [cor-every-grothendieck-category-has-enough-injectives-and-every-object-admits-an-injective-resolution] 2:4 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nMODERATE 3 [fs-enough-projectives-selects-a-projective-resolution-functor-on-all-objects] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 2 [fs-a-comparison-map-between-resolutions-is-unique-as-a-chain-map] 2:existence, choice, uniqueness, or well-definedness\nORDINARY 1 [fs-two-syzygies-of-an-object-are-canonically-isomorphic] 1:2 cited facts\nHIGH 5 [fs-the-horseshoe-middle-resolution-is-canonical] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 3 [fs-every-abelian-category-has-enough-projectives-and-enough-injectives] 1:3 cited facts; 2:quotient or equivalence-class construction\nMODERATE 3 [fs-every-acyclic-complex-of-projective-objects-is-contractible] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 4 [ex-a-projective-resolution-of-a-cyclic-abelian-group] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 2 [ex-the-canonical-iterated-free-resolution-of-a-module] 2:boundary-sensitive language\nMODERATE 3 [ex-an-injective-resolution-of-an-abelian-group-beginning-with-a-divisible-envelope] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness\nMODERATE 3 [ex-comparison-maps-between-two-resolutions-of-a-cyclic-group] 1:2 cited facts; 2:quotient or equivalence-class construction\nORDINARY 0 [ex-an-explicit-comparison-homotopy] no signals\nMODERATE 3 [ex-the-horseshoe-resolution-of-an-extension-of-cyclic-groups] 1:2 cited facts; 2:quotient or equivalence-class construction\nORDINARY 1 [ex-schanuel-lemma-for-two-presentations-of-a-module] 1:2 cited facts\nORDINARY 1 [cex-two-projective-resolutions-with-nonisomorphic-first-syzygies] 1:2 cited facts\nHIGH 5 [cex-a-category-with-enough-injectives-but-not-enough-projectives] 2:4 declared dependencies; 1:3 cited facts; 2:quotient or equivalence-class construction\nHIGH 5 [lem-a-vertex-mixed-on-an-anticonnected-set-yields-opposite-adjacency-on-a-nonedge] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nCRITICAL 12 [lem-mixed-anticonnected-blocks-lift-pattern-obstructions-to-the-ambient-graph] 2:5 declared dependencies; 2:4 cited facts; 1:7 numbered proof steps; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nCRITICAL 10 [lem-the-auxiliary-pattern-has-a-polynomial-homogeneous-set-under-the-source-hypotheses] 2:4 declared dependencies; 2:4 cited facts; 1:6 numbered proof steps; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 1:finite countermodel smoke test selected\nMODERATE 4 [lem-a-polynomial-homogeneous-set-in-the-auxiliary-pattern-yields-a-y-four-restricted-union] 1:3 cited facts; 3:biconditional / both-direction claim\nCRITICAL 8 [lem-star-or-special-vertex-obstructions-force-wonderfulness] 1:3 cited facts; 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nHIGH 6 [lem-the-e-graph-and-the-bird-graph-are-wonderful] 2:6 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language\nMODERATE 3 [ex-the-e-graph-sits-inside-a-one-subdivided-star-and-deletes-to-the-five-vertex-path] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 4 [ex-a-six-vertex-witness-graph-makes-the-bird-criterion-explicit] 2:4 declared dependencies; 2:4 cited facts\nMODERATE 3 [lem-a-finite-coordinate-bump-map-embeds-a-compact-manifold-in-some-euclidean-space] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [lem-a-countable-coordinate-bump-map-embeds-a-manifold-in-countable-euclidean-data] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 7 [lem-a-smooth-exhaustion-separates-the-locally-finite-chart-bands] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 4 [thm-every-smooth-manifold-embeds-in-some-finite-dimensional-euclidean-space] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nMODERATE 4 [prop-a-proper-injective-immersion-is-a-smooth-embedding] 2:4 declared dependencies; 2:4 cited facts\nMODERATE 3 [lem-a-generic-linear-projection-preserves-injectivity-and-immersion] 1:3 cited facts; 2:boundary-sensitive language\nORDINARY 1 [lem-a-generic-projection-can-preserve-properness] 1:2 cited facts\nCRITICAL 8 [thm-weak-whitney-proper-embedding-theorem] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nORDINARY 0 [thm-weak-whitney-immersion-theorem] no signals\nMODERATE 3 [lem-normal-addition-is-a-local-diffeomorphism-along-the-zero-section] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 5 [lem-variable-radius-injectivity-for-normal-addition] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nMODERATE 3 [thm-euclidean-tubular-neighbourhood-theorem] 1:3 cited facts; 2:boundary-sensitive language\nORDINARY 2 [cor-a-closed-euclidean-submanifold-has-a-smooth-neighbourhood-retraction] 2:boundary-sensitive language\nHIGH 5 [prop-nearest-point-projection-is-the-tubular-retraction-after-shrinking] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 2 [thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold] 2:boundary-sensitive language\nORDINARY 2 [cor-every-closed-embedded-submanifold-has-a-smooth-neighbourhood-retraction] 2:boundary-sensitive language\nMODERATE 3 [prop-two-tubular-neighbourhood-germs-are-isomorphic-near-the-zero-section] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [thm-whitney-approximation-for-euclidean-valued-maps] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness\nHIGH 5 [thm-relative-whitney-approximation-for-euclidean-valued-maps] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nMODERATE 3 [lem-a-fine-euclidean-approximation-lands-in-a-prescribed-tubular-neighbourhood] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness\nHIGH 6 [thm-whitney-approximation-for-manifold-valued-maps] 2:5 declared dependencies; 2:5 cited facts; 2:existence, choice, uniqueness, or well-definedness\nHIGH 5 [thm-relative-whitney-approximation-for-manifold-valued-maps] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 0 [cor-every-continuous-map-between-smooth-manifolds-is-homotopic-to-a-smooth-map] no signals\nMODERATE 3 [thm-continuously-homotopic-smooth-maps-are-smoothly-homotopic] 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 3 [cor-the-smooth-and-continuous-homotopy-categories-of-smooth-manifolds-have-the-same-morphism-sets] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [cor-a-continuous-map-from-a-closed-subset-extends-smoothly-exactly-when-it-has-a-continuous-extension-and-is-smooth-near-the-subset] 3:biconditional / both-direction claim\nMODERATE 3 [lem-a-tubular-target-produces-a-submersive-finite-dimensional-perturbation-family] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness\nORDINARY 1 [thm-transversality-homotopy-theorem] 1:3 cited facts\nORDINARY 0 [thm-strong-whitney-approximation-by-transverse-maps] no signals\nORDINARY 0 [cor-transverse-maps-are-dense-in-the-strong-smooth-topology] no signals\nHIGH 5 [cor-a-smooth-section-can-be-perturbed-transverse-to-the-zero-section] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nCRITICAL 8 [prop-relative-transversality-preserves-a-map-on-a-closed-good-region] 2:4 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 0 [fs-every-injective-immersion-is-a-proper-embedding] no signals\nORDINARY 2 [fs-an-arbitrary-linear-projection-of-an-embedding-is-an-embedding] 2:boundary-sensitive language\nORDINARY 2 [fs-every-proper-embedding-of-an-n-manifold-lands-in-r-n] 2:boundary-sensitive language\nORDINARY 2 [fs-every-noncompact-submanifold-has-a-uniform-radius-tubular-neighbourhood] 2:boundary-sensitive language\nORDINARY 2 [fs-the-tubular-neighbourhood-retraction-is-canonical] 2:boundary-sensitive language\nMODERATE 3 [fs-uniform-approximation-is-the-right-global-notion-on-every-noncompact-manifold] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 0 [ex-the-standard-circle-and-its-annular-tubular-neighbourhood] no signals\nORDINARY 2 [ex-the-sphere-and-its-two-sided-normal-tube] 2:boundary-sensitive language\nORDINARY 2 [ex-a-noncompact-embedded-curve-with-no-uniform-tubular-radius] 2:boundary-sensitive language\nMODERATE 4 [ex-a-coordinate-bump-embedding-of-the-circle-in-euclidean-space] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 2 [ex-projecting-a-space-curve-can-create-a-double-point] 2:boundary-sensitive language\nORDINARY 0 [ex-smoothing-a-piecewise-linear-real-valued-function-relative-to-a-closed-set] no signals\nORDINARY 2 [ex-smoothing-a-continuous-circle-valued-map-through-an-annular-retraction] 2:boundary-sensitive language\nORDINARY 2 [ex-a-generic-section-of-a-line-bundle-has-a-hypersurface-zero-set] 2:boundary-sensitive language\nORDINARY 2 [cex-a-nearest-point-projection-is-not-unique-outside-the-tubular-radius] 2:boundary-sensitive language\nORDINARY 2 [cex-a-smooth-approximation-without-relative-control-destroys-prescribed-values] 2:boundary-sensitive language\nHIGH 6 [thm-machine-acceptance-is-recognizable] 2:6 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language\nCRITICAL 8 [lem-diagonal-self-application-machine] 1:3 cited facts; 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nCRITICAL 8 [thm-machine-acceptance-is-undecidable] 2:4 declared dependencies; 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nCRITICAL 10 [thm-halting-is-recognizable-and-undecidable] 3:7 declared dependencies; 2:7 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nMODERATE 4 [cor-nonhalting-is-not-recognizable] 1:2 cited facts; 3:biconditional / both-direction claim\nMODERATE 3 [thm-an-unrecognizable-language-exists] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness\nCRITICAL 10 [thm-busy-beaver-dominates-every-total-computable-function] 2:4 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [cor-busy-beaver-is-not-computable] 1:3 cited facts; 2:boundary-sensitive language\nCRITICAL 9 [thm-totality-is-not-recognizable] 2:4 declared dependencies; 2:4 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nCRITICAL 9 [thm-machine-equivalence-is-undecidable] 2:4 declared dependencies; 2:4 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nMODERATE 3 [fs-undecidable-means-no-instance-can-be-answered] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [fs-diagonalization-needs-literal-source-self-reading] 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 4 [ex-diagonal-self-application-machine] 1:2 cited facts; 3:biconditional / both-direction claim\nORDINARY 1 [ex-machine-equivalence-is-undecidable] 1:2 cited facts\nMODERATE 3 [cex-undecidable-means-no-instance-can-be-answered] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 5 [thm-verifier-and-nondeterministic-definitions-of-np-agree] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nHIGH 6 [prop-p-is-contained-in-np-intersection-conp] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nHIGH 6 [lem-polynomial-reductions-compose] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nCRITICAL 9 [thm-polynomial-reductions-transfer-p-np-and-conp-membership] 2:6 declared dependencies; 2:6 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nMODERATE 3 [prop-an-np-complete-language-in-p-implies-p-equals-np] 1:3 cited facts; 2:boundary-sensitive language\nHIGH 5 [thm-sat-search-reduces-to-sat-decision] 1:2 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nHIGH 6 [prop-np-is-contained-in-pspace-and-pspace-in-exp] 2:6 declared dependencies; 2:6 cited facts; 2:boundary-sensitive language\nORDINARY 1 [fs-np-means-not-polynomial] 1:2 cited facts\nORDINARY 1 [fs-np-complete-means-known-not-in-p] 1:2 cited facts\nORDINARY 2 [ex-p-is-contained-in-np-intersection-conp] 2:boundary-sensitive language\nMODERATE 3 [ex-np-is-contained-in-pspace-and-pspace-in-exp] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [cex-np-means-not-polynomial] 1:2 cited facts; 2:boundary-sensitive language\nrisk-report: 4 error(s), 339 item(s) routed\nERROR risk-review-missing [thm-krull-intersection-theorem]: thm-krull-intersection-theorem is high risk and lacks a complete Alpha risk_review\nERROR risk-review-missing [thm-additivity-of-hilbert-samuel-multiplicity]: thm-additivity-of-hilbert-samuel-multiplicity is high risk and lacks a complete Alpha risk_review\nERROR risk-review-missing [cor-faithfully-flat-ring-maps-are-injective]: cor-faithfully-flat-ring-maps-are-injective is high risk and lacks a complete Alpha risk_review\nERROR risk-review-missing [cor-faithfully-flat-descent-of-finite-generation]: cor-faithfully-flat-descent-of-finite-generation is high risk and lacks a complete Alpha risk_review\n",
      "named_ids": [
        "lem-symmetrisation-has-the-same-normal-closure",
        "lem-c-prime-lambda-implies-c-lambda",
        "lem-boundary-label-of-a-van-kampen-diagram-is-null-in-the-presented-group",
        "thm-van-kampen-lemma",
        "thm-diagram-area-agrees-with-algebraic-relator-area",
        "lem-minimal-area-diagrams-are-reduced",
        "lem-curvature-count-for-reduced-c-prime-one-sixth-diagrams",
        "thm-greendlinger-lemma-for-c-prime-one-sixth-presentations",
        "lem-dehn-replacement-strictly-shortens-a-word",
        "thm-dehn-algorithm-solves-the-word-problem",
        "cor-finite-c-prime-one-sixth-presentations-have-solvable-word-problem",
        "cor-linear-isoperimetric-bound-for-finite-c-prime-one-sixth-presentations",
        "thm-torsion-theorem-for-c-prime-one-sixth-groups",
        "cor-c-prime-one-sixth-with-no-proper-power-relators-is-torsion-free",
        "fs-every-repeated-subword-is-a-piece",
        "fs-c-prime-one-sixth-means-every-relator-has-length-at-most-six",
        "fs-greendlinger-lemma-applies-to-every-finitely-presented-group",
        "fs-dehn-reduction-is-the-same-as-free-reduction",
        "fs-no-proper-power-relators-alone-implies-torsion-free",
        "ex-symmetrising-a-one-relator-presentation",
        "ex-finding-pieces-and-checking-c-prime-one-sixth",
        "ex-a-dehn-reduction-sequence",
        "ex-a-greendlinger-cell-in-a-van-kampen-diagram",
        "ex-a-torsion-free-small-cancellation-group",
        "cex-an-overlap-at-exactly-one-sixth-under-the-strict-convention",
        "cex-a-no-proper-power-presentation-with-torsion-outside-small-cancellation",
        "lem-compatible-tuples-form-a-subgroup",
        "thm-concrete-inverse-limit-universal-property-in-groups",
        "lem-inverse-limit-of-finite-discrete-groups-is-a-closed-topological-subgroup",
        "thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected",
        "lem-kernels-of-finite-projections-form-an-open-normal-neighbourhood-basis",
        "thm-continuity-into-an-inverse-limit-is-coordinatewise",
        "thm-cofinal-subsystems-have-isomorphic-inverse-limits",
        "thm-compact-hausdorff-total-disconnectedness-and-total-separatedness-agree",
        "thm-topological-characterisation-of-profinite-groups",
        "thm-kernel-and-density-of-the-canonical-map-to-the-profinite-completion",
        "cor-the-canonical-map-is-injective-iff-the-group-is-residually-finite",
        "thm-universal-property-of-profinite-completion",
        "thm-profinite-completion-is-functorial",
        "thm-free-groups-are-residually-finite",
        "thm-finitely-generated-free-groups-are-subgroup-separable",
        "fs-an-inverse-limit-of-groups-may-be-empty",
        "fs-projections-from-every-surjective-inverse-system-are-surjective-in-zf",
        "fs-the-canonical-map-to-profinite-completion-is-always-injective",
        "fs-a-compact-hausdorff-group-is-profinite-without-total-disconnectedness",
        "fs-two-groups-with-isomorphic-profinite-completions-are-isomorphic",
        "ex-an-eventually-constant-inverse-system",
        "ex-the-profinite-completion-of-a-finite-group",
        "ex-the-profinite-completion-of-the-integers",
        "ex-a-residually-finite-free-group",
        "ex-a-dense-nonclosed-copy-of-a-group-in-its-completion",
        "ex-a-non-residually-finite-baumslag-solitar-group",
        "cex-same-finite-quotients-do-not-trivially-identify-abstract-groups",
        "thm-hilbert-serre-theorem",
        "lem-rees-module-finiteness-and-stable-filtrations",
        "thm-artin-rees-lemma",
        "cor-induced-and-intrinsic-adic-filtrations-are-equivalent",
        "thm-krull-intersection-theorem",
        "thm-existence-of-hilbert-samuel-polynomial",
        "thm-hilbert-samuel-dimension-theorem",
        "thm-dimension-and-parameters-for-modules",
        "thm-additivity-of-hilbert-samuel-multiplicity",
        "thm-multiplicity-under-reduction-by-a-parameter",
        "cor-parameter-ideal-multiplicity-positive",
        "ex-hilbert-series-of-a-polynomial-ring",
        "ex-associated-graded-of-a-local-ring",
        "ex-artin-rees-intersection",
        "ex-krull-intersection-in-a-local-domain",
        "ex-hilbert-samuel-polynomial-of-a-dvr",
        "ex-hilbert-samuel-multiplicity-of-a-plane-curve",
        "ex-hilbert-samuel-finite-length-case",
        "thm-direct-sums-and-direct-summands-preserve-flatness",
        "thm-localisations-are-flat",
        "thm-flatness-is-local",
        "thm-equational-criterion-for-flatness",
        "cor-flat-quotients-and-idempotent-ideals",
        "thm-faithful-flatness-detected-by-nonzero-modules-and-fibres",
        "thm-faithfully-flat-ring-map-characterisations",
        "cor-faithfully-flat-ring-maps-are-injective",
        "thm-faithfully-flat-descent-of-flatness",
        "cor-faithfully-flat-descent-of-finite-generation",
        "thm-local-criterion-for-flatness-ideal-form",
        "thm-local-criterion-for-flatness-closed-fibre-form",
        "thm-finite-flat-modules-over-local-rings-are-free",
        "cor-finite-flat-noetherian-modules-are-projective",
        "thm-flat-going-down",
        "ex-polynomial-algebras-are-faithfully-flat",
        "ex-localisations-not-faithfully-flat",
        "ex-fraction-field-flat-not-projective",
        "ex-flat-idempotent-quotient",
        "ex-nonflat-quotient-module",
        "ex-faithfully-flat-principal-open-cover",
        "ex-finite-flat-module-over-a-local-ring",
        "thm-universal-property-of-an-inverse-limit-of-modules",
        "thm-inverse-limits-are-left-exact",
        "thm-exactness-of-inverse-limits-under-mittag-leffler",
        "thm-kernel-and-universal-property-of-adic-completion",
        "prop-units-in-an-adically-complete-ring",
        "thm-completion-is-exact-on-finite-modules",
        "thm-completion-as-extension-of-scalars",
        "cor-completion-commutes-with-finite-quotients-and-submodules",
        "thm-flatness-of-noetherian-completion",
        "thm-faithful-flatness-of-jacobson-adic-completion",
        "thm-noetherianity-of-adic-completion",
        "thm-completion-of-a-noetherian-local-ring",
        "thm-finite-modules-over-complete-noetherian-rings-are-complete",
        "thm-complete-nakayama-lemma",
        "thm-completion-preserves-dimension-and-hilbert-samuel-data",
        "ex-p-adic-integers-as-an-inverse-limit",
        "ex-adic-completion-of-the-integers",
        "ex-equivalent-adic-filtrations",
        "ex-completion-not-exact-without-finiteness",
        "ex-completion-of-a-domain-not-a-domain",
        "ex-iterated-adic-completions",
        "ex-semilocal-adic-completion",
        "thm-an-l-q-function-defines-a-bounded-linear-functional-on-l-p",
        "prop-lambda-g-has-operator-norm-equal-to-the-l-q-norm",
        "prop-semifinite-measures-make-l-q-representatives-unique",
        "lem-l-p-functions-have-sigma-finite-essential-support-for-finite-p",
        "lem-bounded-functionals-on-finite-l-p-define-finite-signed-or-complex-measures",
        "lem-functional-induced-measures-are-absolutely-continuous-with-respect-to-mu",
        "lem-finite-measure-bounded-l-p-functionals-are-integration-against-rn-densities",
        "lem-rn-densities-of-bounded-l-p-functionals-belong-to-l-q",
        "thm-sigma-finite-duality-for-bounded-functionals-on-l-p",
        "thm-arbitrary-measure-duality-for-l-p-when-one-less-p-less-infinity",
        "cor-l-p-norm-recovery-by-unit-l-q-pairings",
        "cor-ell-p-duality-by-counting-measure",
        "ex-a-power-function-realises-the-duality-norm-on-unit-interval",
        "ex-the-half-interval-integral-functional-has-norm-two-to-the-minus-one-over-q",
        "ex-the-dual-of-ell-two-is-ell-two-by-the-counting-measure-pairing",
        "cex-point-evaluation-at-zero-is-not-well-defined-on-l-p-of-unit-interval",
        "cex-the-zero-countable-infinity-cocountable-measure-space-breaks-p-equals-one-duality",
        "thm-bounded-linear-operator-equivalences",
        "lem-operator-norm-is-a-norm",
        "lem-composition-operator-norm-inequality",
        "thm-bounded-operator-space-is-banach",
        "thm-extension-of-a-bounded-map-from-a-dense-subspace",
        "thm-bounded-bilinear-map-equivalences",
        "lem-quotient-seminorm-is-representative-independent",
        "lem-quotient-seminorm-triangle-inequality",
        "thm-quotient-seminorm-is-a-norm-iff-subspace-is-closed",
        "thm-quotient-map-is-open",
        "thm-quotient-of-banach-by-closed-subspace-is-banach",
        "thm-universal-property-of-the-normed-quotient",
        "thm-complemented-subspace-iff-range-of-a-bounded-projection",
        "thm-bounded-below-iff-injective-with-closed-range",
        "thm-bounded-right-inverse-iff-kernel-is-complemented",
        "thm-bounded-left-inverse-iff-range-is-complemented",
        "ex-coordinate-projections-and-inclusions-on-product-banach-spaces",
        "ex-shift-operators-on-classical-sequence-spaces",
        "ex-evaluation-functional-on-c-of-k",
        "ex-differentiation-on-polynomials-is-unbounded-in-the-supremum-norm",
        "ex-quotient-by-the-kernel-is-isometric-to-the-range-with-the-induced-quotient-norm",
        "ex-c-mod-constants-and-oscillation-norm",
        "cex-a-closed-subspace-need-not-have-a-best-approximation",
        "cex-an-algebraic-complement-need-not-be-topological",
        "lem-chebyshev-psi-prime-power-expansion",
        "lem-prime-counting-chebyshev-partial-summation",
        "lem-central-binomial-coefficient-bounds",
        "lem-central-binomial-coefficient-prime-valuation",
        "thm-chebyshev-theta-linear-bounds",
        "lem-chebyshev-functions-prime-power-comparison",
        "thm-chebyshev-prime-counting-bounds",
        "thm-bertrands-postulate",
        "lem-weighted-von-mangoldt-harmonic-estimate",
        "thm-first-mertens-theorem-for-primes",
        "thm-second-mertens-theorem-for-primes",
        "thm-third-mertens-theorem-for-primes",
        "cor-sum-of-reciprocals-of-primes-diverges",
        "cor-euler-prime-product-tends-to-zero",
        "ex-prime-counting-theta-and-psi-table",
        "ex-chebyshev-binomial-coefficient-estimate",
        "ex-bertrand-finite-range-verification",
        "ex-first-and-second-mertens-numerics",
        "ex-third-mertens-product-numerics",
        "cex-chebyshev-bounds-do-not-give-the-prime-number-theorem",
        "cex-shoups-product-bound-does-not-determine-mertens-constant",
        "thm-the-inverse-braiding-is-a-braiding",
        "thm-the-braiding-is-compatible-with-the-unit-constraints",
        "thm-in-a-strict-braided-monoidal-category-the-braiding-satisfies-the-yang-baxter-equation",
        "thm-in-the-presence-of-the-symmetry-axiom-one-hexagon-implies-the-other",
        "thm-the-cartesian-swap-braiding-is-a-symmetry",
        "thm-the-double-braiding-center-is-symmetric",
        "thm-every-braided-monoidal-category-is-monoidally-equivalent-to-a-strict-braided-one",
        "thm-the-two-strand-braid-group-is-infinite-cyclic",
        "thm-the-symmetric-group-has-the-coxeter-presentation",
        "thm-the-braid-group-surjects-onto-the-symmetric-group",
        "cex-the-braid-category-is-braided-but-not-symmetric",
        "thm-symmetric-coherence",
        "cor-unbracketed-and-unordered-tensor-strings-are-well-defined-in-a-symmetric-monoidal-category",
        "thm-braided-coherence-fails-in-the-symmetric-form",
        "fs-every-diagram-built-from-the-associator-and-the-braiding-commutes",
        "thm-the-braid-category-is-the-free-strict-braided-monoidal-category-on-one-generator",
        "thm-braided-coherence-via-underlying-braids",
        "cor-two-canonical-braided-composites-agree-exactly-when-their-underlying-braids-agree",
        "fs-every-braided-monoidal-category-is-equivalent-to-a-strict-commutative-one",
        "thm-monoid-objects-in-a-braided-monoidal-category-form-a-monoidal-category",
        "cor-monoid-objects-in-a-symmetric-monoidal-category-form-a-symmetric-monoidal-category",
        "ex-the-swap-braiding-on-sets",
        "ex-the-braid-group-on-three-strands",
        "ex-the-hexagon-checked-for-cartesian-products",
        "ex-the-sign-braiding-on-supervector-spaces",
        "ex-the-two-strand-braiding-in-the-braid-category-has-infinite-order",
        "ex-two-canonical-maps-with-different-underlying-braids",
        "ex-commutative-monoid-objects-in-sets-are-ordinary-commutative-monoids",
        "lem-one-step-extension-of-a-partial-projective-resolution",
        "lem-one-step-extension-of-a-partial-injective-resolution",
        "thm-enough-projectives-gives-projective-resolutions",
        "thm-enough-injectives-gives-injective-resolutions",
        "cor-every-module-admits-a-projective-resolution",
        "cor-every-module-admits-an-injective-resolution",
        "prop-the-iterated-free-module-resolution-is-canonical-in-zf",
        "lem-lift-a-map-through-degree-zero-of-a-projective-resolution",
        "lem-extend-a-partial-comparison-map-by-one-degree",
        "thm-projective-comparison-map-exists",
        "lem-extend-a-partial-comparison-homotopy-by-one-degree",
        "thm-projective-comparison-maps-are-unique-up-to-chain-homotopy",
        "thm-projective-resolutions-of-the-same-object-are-homotopy-equivalent-over-that-object",
        "thm-injective-comparison-map-exists",
        "thm-injective-comparison-maps-are-unique-up-to-cochain-homotopy",
        "thm-injective-resolutions-of-the-same-object-are-homotopy-equivalent-under-that-object",
        "cor-a-projective-or-injective-resolution-is-unique-up-to-nonunique-homotopy-equivalence",
        "prop-comparison-maps-respect-composition-up-to-homotopy",
        "prop-comparison-of-the-identity-is-homotopic-to-the-identity",
        "lem-degree-zero-horseshoe-lift",
        "lem-the-horseshoe-kernel-fits-a-short-exact-sequence",
        "lem-inductive-horseshoe-step",
        "thm-horseshoe-lemma-for-projective-resolutions",
        "thm-horseshoe-lemma-for-injective-resolutions",
        "prop-horseshoe-resolutions-are-compatible-with-morphisms-of-short-exact-sequences-up-to-homotopy",
        "cor-a-split-short-exact-sequence-admits-the-direct-sum-resolution",
        "thm-schanuel-lemma-in-an-abelian-category",
        "cor-syzygies-from-two-projective-resolutions-are-stably-isomorphic",
        "thm-dual-schanuel-lemma-for-injective-copresentations",
        "prop-a-projective-object-has-a-length-zero-projective-resolution",
        "lem-extension-from-subobjects-of-a-generator-detects-injectivity",
        "lem-the-one-step-generator-map-is-a-functorial-monomorphism",
        "lem-transfinite-iteration-of-the-generator-extension-preserves-monomorphisms-and-factorizes-small-source-maps",
        "lem-a-sufficiently-long-generator-extension-iteration-is-injective",
        "thm-a-grothendieck-abelian-category-has-functorial-injective-embeddings",
        "cor-every-grothendieck-category-has-enough-injectives-and-every-object-admits-an-injective-resolution",
        "fs-enough-projectives-selects-a-projective-resolution-functor-on-all-objects",
        "fs-a-comparison-map-between-resolutions-is-unique-as-a-chain-map",
        "fs-two-syzygies-of-an-object-are-canonically-isomorphic",
        "fs-the-horseshoe-middle-resolution-is-canonical",
        "fs-every-abelian-category-has-enough-projectives-and-enough-injectives",
        "fs-every-acyclic-complex-of-projective-objects-is-contractible",
        "ex-a-projective-resolution-of-a-cyclic-abelian-group",
        "ex-the-canonical-iterated-free-resolution-of-a-module",
        "ex-an-injective-resolution-of-an-abelian-group-beginning-with-a-divisible-envelope",
        "ex-comparison-maps-between-two-resolutions-of-a-cyclic-group",
        "ex-an-explicit-comparison-homotopy",
        "ex-the-horseshoe-resolution-of-an-extension-of-cyclic-groups",
        "ex-schanuel-lemma-for-two-presentations-of-a-module",
        "cex-two-projective-resolutions-with-nonisomorphic-first-syzygies",
        "cex-a-category-with-enough-injectives-but-not-enough-projectives",
        "lem-a-vertex-mixed-on-an-anticonnected-set-yields-opposite-adjacency-on-a-nonedge",
        "lem-mixed-anticonnected-blocks-lift-pattern-obstructions-to-the-ambient-graph",
        "lem-the-auxiliary-pattern-has-a-polynomial-homogeneous-set-under-the-source-hypotheses",
        "lem-a-polynomial-homogeneous-set-in-the-auxiliary-pattern-yields-a-y-four-restricted-union",
        "lem-star-or-special-vertex-obstructions-force-wonderfulness",
        "lem-the-e-graph-and-the-bird-graph-are-wonderful",
        "ex-the-e-graph-sits-inside-a-one-subdivided-star-and-deletes-to-the-five-vertex-path",
        "ex-a-six-vertex-witness-graph-makes-the-bird-criterion-explicit",
        "lem-a-finite-coordinate-bump-map-embeds-a-compact-manifold-in-some-euclidean-space",
        "lem-a-countable-coordinate-bump-map-embeds-a-manifold-in-countable-euclidean-data",
        "lem-a-smooth-exhaustion-separates-the-locally-finite-chart-bands",
        "thm-every-smooth-manifold-embeds-in-some-finite-dimensional-euclidean-space",
        "prop-a-proper-injective-immersion-is-a-smooth-embedding",
        "lem-a-generic-linear-projection-preserves-injectivity-and-immersion",
        "lem-a-generic-projection-can-preserve-properness",
        "thm-weak-whitney-proper-embedding-theorem",
        "thm-weak-whitney-immersion-theorem",
        "lem-normal-addition-is-a-local-diffeomorphism-along-the-zero-section",
        "lem-variable-radius-injectivity-for-normal-addition",
        "thm-euclidean-tubular-neighbourhood-theorem",
        "cor-a-closed-euclidean-submanifold-has-a-smooth-neighbourhood-retraction",
        "prop-nearest-point-projection-is-the-tubular-retraction-after-shrinking",
        "thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold",
        "cor-every-closed-embedded-submanifold-has-a-smooth-neighbourhood-retraction",
        "prop-two-tubular-neighbourhood-germs-are-isomorphic-near-the-zero-section",
        "thm-whitney-approximation-for-euclidean-valued-maps",
        "thm-relative-whitney-approximation-for-euclidean-valued-maps",
        "lem-a-fine-euclidean-approximation-lands-in-a-prescribed-tubular-neighbourhood",
        "thm-whitney-approximation-for-manifold-valued-maps",
        "thm-relative-whitney-approximation-for-manifold-valued-maps",
        "cor-every-continuous-map-between-smooth-manifolds-is-homotopic-to-a-smooth-map",
        "thm-continuously-homotopic-smooth-maps-are-smoothly-homotopic",
        "cor-the-smooth-and-continuous-homotopy-categories-of-smooth-manifolds-have-the-same-morphism-sets",
        "cor-a-continuous-map-from-a-closed-subset-extends-smoothly-exactly-when-it-has-a-continuous-extension-and-is-smooth-near-the-subset",
        "lem-a-tubular-target-produces-a-submersive-finite-dimensional-perturbation-family",
        "thm-transversality-homotopy-theorem",
        "thm-strong-whitney-approximation-by-transverse-maps",
        "cor-transverse-maps-are-dense-in-the-strong-smooth-topology",
        "cor-a-smooth-section-can-be-perturbed-transverse-to-the-zero-section",
        "prop-relative-transversality-preserves-a-map-on-a-closed-good-region",
        "fs-every-injective-immersion-is-a-proper-embedding",
        "fs-an-arbitrary-linear-projection-of-an-embedding-is-an-embedding",
        "fs-every-proper-embedding-of-an-n-manifold-lands-in-r-n",
        "fs-every-noncompact-submanifold-has-a-uniform-radius-tubular-neighbourhood",
        "fs-the-tubular-neighbourhood-retraction-is-canonical",
        "fs-uniform-approximation-is-the-right-global-notion-on-every-noncompact-manifold",
        "ex-the-standard-circle-and-its-annular-tubular-neighbourhood",
        "ex-the-sphere-and-its-two-sided-normal-tube",
        "ex-a-noncompact-embedded-curve-with-no-uniform-tubular-radius",
        "ex-a-coordinate-bump-embedding-of-the-circle-in-euclidean-space",
        "ex-projecting-a-space-curve-can-create-a-double-point",
        "ex-smoothing-a-piecewise-linear-real-valued-function-relative-to-a-closed-set",
        "ex-smoothing-a-continuous-circle-valued-map-through-an-annular-retraction",
        "ex-a-generic-section-of-a-line-bundle-has-a-hypersurface-zero-set",
        "cex-a-nearest-point-projection-is-not-unique-outside-the-tubular-radius",
        "cex-a-smooth-approximation-without-relative-control-destroys-prescribed-values",
        "thm-machine-acceptance-is-recognizable",
        "lem-diagonal-self-application-machine",
        "thm-machine-acceptance-is-undecidable",
        "thm-halting-is-recognizable-and-undecidable",
        "cor-nonhalting-is-not-recognizable",
        "thm-an-unrecognizable-language-exists",
        "thm-busy-beaver-dominates-every-total-computable-function",
        "cor-busy-beaver-is-not-computable",
        "thm-totality-is-not-recognizable",
        "thm-machine-equivalence-is-undecidable",
        "fs-undecidable-means-no-instance-can-be-answered",
        "fs-diagonalization-needs-literal-source-self-reading",
        "ex-diagonal-self-application-machine",
        "ex-machine-equivalence-is-undecidable",
        "cex-undecidable-means-no-instance-can-be-answered",
        "thm-verifier-and-nondeterministic-definitions-of-np-agree",
        "prop-p-is-contained-in-np-intersection-conp",
        "lem-polynomial-reductions-compose",
        "thm-polynomial-reductions-transfer-p-np-and-conp-membership",
        "prop-an-np-complete-language-in-p-implies-p-equals-np",
        "thm-sat-search-reduces-to-sat-decision",
        "prop-np-is-contained-in-pspace-and-pspace-in-exp",
        "fs-np-means-not-polynomial",
        "fs-np-complete-means-known-not-in-p",
        "ex-p-is-contained-in-np-intersection-conp",
        "ex-np-is-contained-in-pspace-and-pspace-in-exp",
        "cex-np-means-not-polynomial"
      ]
    },
    {
      "id": "citation-fidelity",
      "stage": "8-preflight",
      "why": "Every line above is a candidate for a human read, not a verdict.",
      "output": "citation-fidelity: 847 citation(s) over 339 authored item(s)\n\nQUOTE NOT FOUND IN THE CITED ITEM — 18.\nThe contract asserts a verbatim quote. These do not appear in the source.\n\n  thm-topological-characterisation-of-profinite-groups  [L1] -> thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected (searched: Statement)\n    quote: \"An inverse limit of finite discrete groups is Hausdorff, compact, and totally disconnected.\"\n\n  thm-universal-property-of-profinite-completion  [L1] -> thm-topological-characterisation-of-profinite-groups (searched: Statement)\n    quote: \"A topological group is profinite if and only if it is compact, Hausdorff, and totally disconnected. Equivalently, a compact Hausdorff topological group is profinite if and only if …\"\n\n  fs-a-compact-hausdorff-group-is-profinite-without-total-disconnectedness  [L1] -> thm-topological-characterisation-of-profinite-groups (searched: Statement)\n    quote: \"A topological group is profinite if and only if it is compact, Hausdorff, and totally disconnected. Equivalently, a compact Hausdorff topological group is profinite if and only if …\"\n\n  thm-existence-of-hilbert-samuel-polynomial  [L1] -> def-hilbert-samuel-function-and-polynomial (searched: Definition)\n    quote: \"Let $(R,\\mathfrak m)$ be a Noetherian local ring, let $M$ be a finite $R$-module, and let $I\\subset R$ be an ideal of definition for $M$, meaning that $M/I M$ has finite length. Th…\"\n\n  thm-multiplicity-under-reduction-by-a-parameter  [L2] -> thm-additivity-of-hilbert-samuel-multiplicity (searched: Statement)\n    quote: \"Let $(R,\\mathfrak m)$ be a Noetherian local ring, let $I$ be an ideal of definition, and let $$ 0\\to M'\\to M\\to M''\\to0 $$ be a short exact sequence of finite $R$-modules. Let $$ d…\"\n\n  thm-completion-of-a-noetherian-local-ring  [L1] -> thm-noetherianity-of-adic-completion (searched: Statement)\n    quote: \"Let $R$ be a Noetherian ring and let $I \\subseteq R$ be an ideal. Then the $I$-adic completion $\\widehat R$ is a Noetherian ring.\"\n\n  ex-completion-of-a-domain-not-a-domain  [L2] -> thm-noetherianity-of-adic-completion (searched: Statement)\n    quote: \"Let $R$ be a Noetherian ring and let $I \\subseteq R$ be an ideal. Then the $I$-adic completion $\\widehat R$ is a Noetherian ring.\"\n\n  thm-the-two-strand-braid-group-is-infinite-cyclic  [L1] -> def-braid-group-by-the-artin-presentation (searched: Definition)\n    quote: \"For $n\\ge2$, the braid group $B_n$ is the group with generators $\\sigma_1,\\dots,\\sigma_{n-1}$ and relations $$\\sigma_i\\sigma_{i+1}\\sigma_i=\\sigma_{i+1}\\sigma_i\\sigma_{i+1}\\qquad(1\\…\"\n\n  thm-the-braid-group-surjects-onto-the-symmetric-group  [L1] -> def-braid-group-by-the-artin-presentation (searched: Definition)\n    quote: \"For $n\\ge2$, the braid group $B_n$ is the group with generators $\\sigma_1,\\dots,\\sigma_{n-1}$ and relations $$\\sigma_i\\sigma_{i+1}\\sigma_i=\\sigma_{i+1}\\sigma_i\\sigma_{i+1}\\qquad(1\\…\"\n\n  thm-the-braid-group-surjects-onto-the-symmetric-group  [L3] -> thm-the-symmetric-group-has-the-coxeter-presentation (searched: Statement)\n    quote: \"For $n\\ge2$, the symmetric group $S_n$ has the presentation $$S_n=\\langle s_1,\\dots,s_{n-1}\\mid s_i^2=1,\\ s_is_{i+1}s_i=s_{i+1}s_is_{i+1},\\ s_is_j=s_js_i\\ (|i-j|>1)\\rangle,$$ where…\"\n\n  thm-symmetric-coherence  [L4] -> thm-the-symmetric-group-has-the-coxeter-presentation (searched: Statement)\n    quote: \"For $n\\ge2$, the symmetric group $S_n$ has the presentation $$S_n=\\langle s_1,\\dots,s_{n-1}\\mid s_i^2=1,\\ s_is_{i+1}s_i=s_{i+1}s_is_{i+1},\\ s_is_j=s_js_i\\ (|i-j|>1)\\rangle,$$ where…\"\n\n  cor-two-canonical-braided-composites-agree-exactly-when-their-underlying-braids-agree  [L1] -> thm-braided-coherence-via-underlying-braids (searched: Statement)\n    quote: \"Let $\\mathcal C$ be a braided monoidal category, let $X$ be an object of $\\mathcal C$, and let $f,g:X^{\\otimes n}\\to X^{\\otimes n}$ be canonical composites built from associators, …\"\n\n  ex-the-braid-group-on-three-strands  [L1] -> def-braid-group-by-the-artin-presentation (searched: Definition)\n    quote: \"For $n\\ge2$, the braid group $B_n$ is the group with generators $\\sigma_1,\\dots,\\sigma_{n-1}$ and relations $$\\sigma_i\\sigma_{i+1}\\sigma_i=\\sigma_{i+1}\\sigma_i\\sigma_{i+1}\\qquad(1\\…\"\n\n  lem-the-one-step-generator-map-is-a-functorial-monomorphism  [L1] -> def-functorial-one-step-generator-extension (searched: Definition)\n    quote: \"Let $\\mathcal A$ be a Grothendieck category with fixed generator $U$, and let $M$ be an object. Because subobjects of $U$ form a set up to equivalence, one may form the set $$S_M=\\…\"\n\n  thm-a-grothendieck-abelian-category-has-functorial-injective-embeddings  [L3] -> def-functorial-one-step-generator-extension (searched: Definition)\n    quote: \"Let $\\mathcal A$ be a Grothendieck category with fixed generator $U$, and let $M$ be an object. Because subobjects of $U$ form a set up to equivalence, one may form the set $$S_M=\\…\"\n\n  thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold  [L1] -> def-tubular-neighbourhood-of-an-embedded-submanifold (searched: Definition)\n    quote: \"Let $i:S\\hookrightarrow M$ be a smooth embedding, and let $\\nu(S)$ be its normal bundle ([[def-normal-and-conormal-bundles-of-an-embedded-submanifold]], [[prop-normal-and-conormal-…\"\n\n  prop-two-tubular-neighbourhood-germs-are-isomorphic-near-the-zero-section  [F1] -> def-tubular-neighbourhood-of-an-embedded-submanifold (searched: Definition)\n    quote: \"Let $i:S\\hookrightarrow M$ be a smooth embedding, and let $\\nu(S)$ be its normal bundle ([[def-normal-and-conormal-bundles-of-an-embedded-submanifold]], [[prop-normal-and-conormal-…\"\n\n  prop-an-np-complete-language-in-p-implies-p-equals-np  [L2] -> thm-polynomial-reductions-transfer-p-np-and-conp-membership (searched: Statement)\n    quote: \"Let $A\\le_p B$. 1. If $B\\in P$, then $A\\in P$. 2. If $B\\in NP$, then $A\\in NP$. 3. If $B\\in coNP$, then $A\\in coNP$.\"\n\nWIDENING CANDIDATES — none found by the three detectors.\n\nEvery line above is a candidate for a human read, not a verdict.\n",
      "named_ids": [
        "def-normal-and-conormal-bundles-of-an-embedded-submanifold"
      ]
    }
  ],
  "mechanical_residue": "",
  "live_items": [
    {
      "id": "lem-boundary-label-of-a-van-kampen-diagram-is-null-in-the-presented-group",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-minimal-area-diagrams-are-reduced",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-curvature-count-for-reduced-c-prime-one-sixth-diagrams",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-kernels-of-finite-projections-form-an-open-normal-neighbourhood-basis",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-continuity-into-an-inverse-limit-is-coordinatewise",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-topological-characterisation-of-profinite-groups",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-kernel-and-density-of-the-canonical-map-to-the-profinite-completion",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-universal-property-of-profinite-completion",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-a-compact-hausdorff-group-is-profinite-without-total-disconnectedness",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-hilbert-serre-theorem",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-rees-module-finiteness-and-stable-filtrations",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-artin-rees-lemma",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-krull-intersection-theorem",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-existence-of-hilbert-samuel-polynomial",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-hilbert-samuel-dimension-theorem",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-multiplicity-under-reduction-by-a-parameter",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-parameter-ideal-multiplicity-positive",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-dimension-and-parameters-for-modules",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-additivity-of-hilbert-samuel-multiplicity",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-hilbert-samuel-polynomial-of-a-dvr",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-hilbert-samuel-multiplicity-of-a-plane-curve",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-finite-flat-noetherian-modules-are-projective",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-projective-module-characterizations",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "ex-fraction-field-flat-not-projective",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-universal-property-of-an-inverse-limit-of-modules",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-inverse-limits-are-left-exact",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-kernel-and-universal-property-of-adic-completion",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-units-in-an-adically-complete-ring",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-completion-is-exact-on-finite-modules",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-completion-as-extension-of-scalars",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-completion-commutes-with-finite-quotients-and-submodules",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-flatness-of-noetherian-completion",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-faithful-flatness-of-jacobson-adic-completion",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-noetherianity-of-adic-completion",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-completion-of-a-noetherian-local-ring",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-finite-modules-over-complete-noetherian-rings-are-complete",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-complete-nakayama-lemma",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-completion-preserves-dimension-and-hilbert-samuel-data",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-p-adic-integers-as-an-inverse-limit",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-adic-completion-of-the-integers",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-equivalent-adic-filtrations",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-completion-not-exact-without-finiteness",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-completion-of-a-domain-not-a-domain",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-semilocal-adic-completion",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-every-braided-monoidal-category-is-monoidally-equivalent-to-a-strict-braided-one",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-the-two-strand-braid-group-is-infinite-cyclic",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-the-braid-group-surjects-onto-the-symmetric-group",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-the-braid-category-is-braided-but-not-symmetric",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-symmetric-coherence",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-braided-coherence-fails-in-the-symmetric-form",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-the-braid-category-is-the-free-strict-braided-monoidal-category-on-one-generator",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-two-canonical-braided-composites-agree-exactly-when-their-underlying-braids-agree",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-braid-group-on-three-strands",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-two-strand-braiding-in-the-braid-category-has-infinite-order",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-two-canonical-maps-with-different-underlying-braids",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-the-one-step-generator-map-is-a-functorial-monomorphism",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-transfinite-iteration-of-the-generator-extension-preserves-monomorphisms-and-factorizes-small-source-maps",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-a-sufficiently-long-generator-extension-iteration-is-injective",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-a-grothendieck-abelian-category-has-functorial-injective-embeddings",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-enough-projectives-selects-a-projective-resolution-functor-on-all-objects",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-the-iterated-free-module-resolution-is-canonical-in-zf",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-a-generic-linear-projection-preserves-injectivity-and-immersion",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-a-generic-projection-can-preserve-properness",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-weak-whitney-proper-embedding-theorem",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-normal-addition-is-a-local-diffeomorphism-along-the-zero-section",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-euclidean-tubular-neighbourhood-theorem",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-two-tubular-neighbourhood-germs-are-isomorphic-near-the-zero-section",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-relative-transversality-preserves-a-map-on-a-closed-good-region",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-an-np-complete-language-in-p-implies-p-equals-np",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-np-complete-means-known-not-in-p",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-symmetrisation-has-the-same-normal-closure",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-c-prime-lambda-implies-c-lambda",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-van-kampen-lemma",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-diagram-area-agrees-with-algebraic-relator-area",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-greendlinger-lemma-for-c-prime-one-sixth-presentations",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-dehn-replacement-strictly-shortens-a-word",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-dehn-algorithm-solves-the-word-problem",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-finite-c-prime-one-sixth-presentations-have-solvable-word-problem",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-linear-isoperimetric-bound-for-finite-c-prime-one-sixth-presentations",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-torsion-theorem-for-c-prime-one-sixth-groups",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-c-prime-one-sixth-with-no-proper-power-relators-is-torsion-free",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-every-repeated-subword-is-a-piece",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-c-prime-one-sixth-means-every-relator-has-length-at-most-six",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-greendlinger-lemma-applies-to-every-finitely-presented-group",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-dehn-reduction-is-the-same-as-free-reduction",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-no-proper-power-relators-alone-implies-torsion-free",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-symmetrising-a-one-relator-presentation",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-finding-pieces-and-checking-c-prime-one-sixth",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-a-dehn-reduction-sequence",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-a-greendlinger-cell-in-a-van-kampen-diagram",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-a-torsion-free-small-cancellation-group",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-an-overlap-at-exactly-one-sixth-under-the-strict-convention",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-a-no-proper-power-presentation-with-torsion-outside-small-cancellation",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-compatible-tuples-form-a-subgroup",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-concrete-inverse-limit-universal-property-in-groups",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-inverse-limit-of-finite-discrete-groups-is-a-closed-topological-subgroup",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-cofinal-subsystems-have-isomorphic-inverse-limits",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-compact-hausdorff-total-disconnectedness-and-total-separatedness-agree",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-the-canonical-map-is-injective-iff-the-group-is-residually-finite",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-profinite-completion-is-functorial",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-free-groups-are-residually-finite",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-finitely-generated-free-groups-are-subgroup-separable",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-an-inverse-limit-of-groups-may-be-empty",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-projections-from-every-surjective-inverse-system-are-surjective-in-zf",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-the-canonical-map-to-profinite-completion-is-always-injective",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-two-groups-with-isomorphic-profinite-completions-are-isomorphic",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-an-eventually-constant-inverse-system",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-profinite-completion-of-a-finite-group",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-profinite-completion-of-the-integers",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-a-residually-finite-free-group",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-a-dense-nonclosed-copy-of-a-group-in-its-completion",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-a-non-residually-finite-baumslag-solitar-group",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-same-finite-quotients-do-not-trivially-identify-abstract-groups",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-induced-and-intrinsic-adic-filtrations-are-equivalent",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-hilbert-series-of-a-polynomial-ring",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-associated-graded-of-a-local-ring",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-artin-rees-intersection",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-krull-intersection-in-a-local-domain",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-hilbert-samuel-finite-length-case",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-direct-sums-and-direct-summands-preserve-flatness",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-localisations-are-flat",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-flatness-is-local",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-equational-criterion-for-flatness",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-flat-quotients-and-idempotent-ideals",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-faithful-flatness-detected-by-nonzero-modules-and-fibres",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-faithfully-flat-ring-map-characterisations",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-faithfully-flat-ring-maps-are-injective",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-faithfully-flat-descent-of-flatness",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-faithfully-flat-descent-of-finite-generation",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-local-criterion-for-flatness-ideal-form",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-local-criterion-for-flatness-closed-fibre-form",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-finite-flat-modules-over-local-rings-are-free",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-flat-going-down",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-polynomial-algebras-are-faithfully-flat",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-localisations-not-faithfully-flat",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-flat-idempotent-quotient",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-nonflat-quotient-module",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-faithfully-flat-principal-open-cover",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-finite-flat-module-over-a-local-ring",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-exactness-of-inverse-limits-under-mittag-leffler",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-iterated-adic-completions",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-an-l-q-function-defines-a-bounded-linear-functional-on-l-p",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-lambda-g-has-operator-norm-equal-to-the-l-q-norm",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-semifinite-measures-make-l-q-representatives-unique",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-l-p-functions-have-sigma-finite-essential-support-for-finite-p",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-bounded-functionals-on-finite-l-p-define-finite-signed-or-complex-measures",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-functional-induced-measures-are-absolutely-continuous-with-respect-to-mu",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-finite-measure-bounded-l-p-functionals-are-integration-against-rn-densities",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-rn-densities-of-bounded-l-p-functionals-belong-to-l-q",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-sigma-finite-duality-for-bounded-functionals-on-l-p",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-arbitrary-measure-duality-for-l-p-when-one-less-p-less-infinity",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-l-p-norm-recovery-by-unit-l-q-pairings",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-ell-p-duality-by-counting-measure",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-a-power-function-realises-the-duality-norm-on-unit-interval",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-the-half-interval-integral-functional-has-norm-two-to-the-minus-one-over-q",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-the-dual-of-ell-two-is-ell-two-by-the-counting-measure-pairing",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-point-evaluation-at-zero-is-not-well-defined-on-l-p-of-unit-interval",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-the-zero-countable-infinity-cocountable-measure-space-breaks-p-equals-one-duality",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-bounded-linear-operator-equivalences",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-operator-norm-is-a-norm",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-composition-operator-norm-inequality",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-bounded-operator-space-is-banach",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-extension-of-a-bounded-map-from-a-dense-subspace",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-bounded-bilinear-map-equivalences",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-quotient-seminorm-is-representative-independent",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-quotient-seminorm-triangle-inequality",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-quotient-seminorm-is-a-norm-iff-subspace-is-closed",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-quotient-map-is-open",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-quotient-of-banach-by-closed-subspace-is-banach",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-universal-property-of-the-normed-quotient",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-complemented-subspace-iff-range-of-a-bounded-projection",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-bounded-below-iff-injective-with-closed-range",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-bounded-right-inverse-iff-kernel-is-complemented",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-bounded-left-inverse-iff-range-is-complemented",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-coordinate-projections-and-inclusions-on-product-banach-spaces",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-shift-operators-on-classical-sequence-spaces",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-evaluation-functional-on-c-of-k",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-differentiation-on-polynomials-is-unbounded-in-the-supremum-norm",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-quotient-by-the-kernel-is-isometric-to-the-range-with-the-induced-quotient-norm",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-c-mod-constants-and-oscillation-norm",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-a-closed-subspace-need-not-have-a-best-approximation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-an-algebraic-complement-need-not-be-topological",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-chebyshev-psi-prime-power-expansion",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-prime-counting-chebyshev-partial-summation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-central-binomial-coefficient-bounds",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-central-binomial-coefficient-prime-valuation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-chebyshev-theta-linear-bounds",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-chebyshev-functions-prime-power-comparison",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-chebyshev-prime-counting-bounds",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-bertrands-postulate",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-weighted-von-mangoldt-harmonic-estimate",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-first-mertens-theorem-for-primes",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-second-mertens-theorem-for-primes",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-third-mertens-theorem-for-primes",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-sum-of-reciprocals-of-primes-diverges",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-euler-prime-product-tends-to-zero",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-prime-counting-theta-and-psi-table",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-chebyshev-binomial-coefficient-estimate",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-bertrand-finite-range-verification",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-first-and-second-mertens-numerics",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-third-mertens-product-numerics",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-chebyshev-bounds-do-not-give-the-prime-number-theorem",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-shoups-product-bound-does-not-determine-mertens-constant",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-the-inverse-braiding-is-a-braiding",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-the-braiding-is-compatible-with-the-unit-constraints",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-in-a-strict-braided-monoidal-category-the-braiding-satisfies-the-yang-baxter-equation",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-in-the-presence-of-the-symmetry-axiom-one-hexagon-implies-the-other",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-the-cartesian-swap-braiding-is-a-symmetry",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-the-double-braiding-center-is-symmetric",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-the-symmetric-group-has-the-coxeter-presentation",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-unbracketed-and-unordered-tensor-strings-are-well-defined-in-a-symmetric-monoidal-category",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-every-diagram-built-from-the-associator-and-the-braiding-commutes",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-braided-coherence-via-underlying-braids",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-every-braided-monoidal-category-is-equivalent-to-a-strict-commutative-one",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-monoid-objects-in-a-braided-monoidal-category-form-a-monoidal-category",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-monoid-objects-in-a-symmetric-monoidal-category-form-a-symmetric-monoidal-category",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-swap-braiding-on-sets",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-hexagon-checked-for-cartesian-products",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-sign-braiding-on-supervector-spaces",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-commutative-monoid-objects-in-sets-are-ordinary-commutative-monoids",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-one-step-extension-of-a-partial-projective-resolution",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-one-step-extension-of-a-partial-injective-resolution",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-enough-projectives-gives-projective-resolutions",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-enough-injectives-gives-injective-resolutions",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-every-module-admits-a-projective-resolution",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-every-module-admits-an-injective-resolution",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-lift-a-map-through-degree-zero-of-a-projective-resolution",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-extend-a-partial-comparison-map-by-one-degree",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-projective-comparison-map-exists",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-extend-a-partial-comparison-homotopy-by-one-degree",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-projective-comparison-maps-are-unique-up-to-chain-homotopy",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-projective-resolutions-of-the-same-object-are-homotopy-equivalent-over-that-object",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-injective-comparison-map-exists",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-injective-comparison-maps-are-unique-up-to-cochain-homotopy",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-injective-resolutions-of-the-same-object-are-homotopy-equivalent-under-that-object",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-a-projective-or-injective-resolution-is-unique-up-to-nonunique-homotopy-equivalence",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-comparison-maps-respect-composition-up-to-homotopy",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-comparison-of-the-identity-is-homotopic-to-the-identity",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-degree-zero-horseshoe-lift",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-the-horseshoe-kernel-fits-a-short-exact-sequence",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-inductive-horseshoe-step",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-horseshoe-lemma-for-projective-resolutions",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-horseshoe-lemma-for-injective-resolutions",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-horseshoe-resolutions-are-compatible-with-morphisms-of-short-exact-sequences-up-to-homotopy",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-a-split-short-exact-sequence-admits-the-direct-sum-resolution",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-schanuel-lemma-in-an-abelian-category",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-syzygies-from-two-projective-resolutions-are-stably-isomorphic",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-dual-schanuel-lemma-for-injective-copresentations",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-a-projective-object-has-a-length-zero-projective-resolution",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-extension-from-subobjects-of-a-generator-detects-injectivity",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-every-grothendieck-category-has-enough-injectives-and-every-object-admits-an-injective-resolution",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-a-comparison-map-between-resolutions-is-unique-as-a-chain-map",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-two-syzygies-of-an-object-are-canonically-isomorphic",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-the-horseshoe-middle-resolution-is-canonical",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-every-abelian-category-has-enough-projectives-and-enough-injectives",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-every-acyclic-complex-of-projective-objects-is-contractible",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-a-projective-resolution-of-a-cyclic-abelian-group",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-canonical-iterated-free-resolution-of-a-module",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-an-injective-resolution-of-an-abelian-group-beginning-with-a-divisible-envelope",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-comparison-maps-between-two-resolutions-of-a-cyclic-group",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-an-explicit-comparison-homotopy",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-horseshoe-resolution-of-an-extension-of-cyclic-groups",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-schanuel-lemma-for-two-presentations-of-a-module",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-two-projective-resolutions-with-nonisomorphic-first-syzygies",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-a-category-with-enough-injectives-but-not-enough-projectives",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-a-vertex-mixed-on-an-anticonnected-set-yields-opposite-adjacency-on-a-nonedge",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-mixed-anticonnected-blocks-lift-pattern-obstructions-to-the-ambient-graph",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-the-auxiliary-pattern-has-a-polynomial-homogeneous-set-under-the-source-hypotheses",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-a-polynomial-homogeneous-set-in-the-auxiliary-pattern-yields-a-y-four-restricted-union",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-star-or-special-vertex-obstructions-force-wonderfulness",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-the-e-graph-and-the-bird-graph-are-wonderful",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-the-e-graph-sits-inside-a-one-subdivided-star-and-deletes-to-the-five-vertex-path",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-a-six-vertex-witness-graph-makes-the-bird-criterion-explicit",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-a-finite-coordinate-bump-map-embeds-a-compact-manifold-in-some-euclidean-space",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-a-countable-coordinate-bump-map-embeds-a-manifold-in-countable-euclidean-data",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-a-smooth-exhaustion-separates-the-locally-finite-chart-bands",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-every-smooth-manifold-embeds-in-some-finite-dimensional-euclidean-space",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-a-proper-injective-immersion-is-a-smooth-embedding",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-weak-whitney-immersion-theorem",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-variable-radius-injectivity-for-normal-addition",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-a-closed-euclidean-submanifold-has-a-smooth-neighbourhood-retraction",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-nearest-point-projection-is-the-tubular-retraction-after-shrinking",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-every-closed-embedded-submanifold-has-a-smooth-neighbourhood-retraction",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-whitney-approximation-for-euclidean-valued-maps",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-relative-whitney-approximation-for-euclidean-valued-maps",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-a-fine-euclidean-approximation-lands-in-a-prescribed-tubular-neighbourhood",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-whitney-approximation-for-manifold-valued-maps",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-relative-whitney-approximation-for-manifold-valued-maps",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-every-continuous-map-between-smooth-manifolds-is-homotopic-to-a-smooth-map",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-continuously-homotopic-smooth-maps-are-smoothly-homotopic",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-the-smooth-and-continuous-homotopy-categories-of-smooth-manifolds-have-the-same-morphism-sets",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-a-continuous-map-from-a-closed-subset-extends-smoothly-exactly-when-it-has-a-continuous-extension-and-is-smooth-near-the-subset",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-a-tubular-target-produces-a-submersive-finite-dimensional-perturbation-family",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-transversality-homotopy-theorem",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-strong-whitney-approximation-by-transverse-maps",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-transverse-maps-are-dense-in-the-strong-smooth-topology",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-a-smooth-section-can-be-perturbed-transverse-to-the-zero-section",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-every-injective-immersion-is-a-proper-embedding",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-an-arbitrary-linear-projection-of-an-embedding-is-an-embedding",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-every-proper-embedding-of-an-n-manifold-lands-in-r-n",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-every-noncompact-submanifold-has-a-uniform-radius-tubular-neighbourhood",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-the-tubular-neighbourhood-retraction-is-canonical",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-uniform-approximation-is-the-right-global-notion-on-every-noncompact-manifold",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-standard-circle-and-its-annular-tubular-neighbourhood",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-sphere-and-its-two-sided-normal-tube",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-a-noncompact-embedded-curve-with-no-uniform-tubular-radius",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-a-coordinate-bump-embedding-of-the-circle-in-euclidean-space",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-projecting-a-space-curve-can-create-a-double-point",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-smoothing-a-piecewise-linear-real-valued-function-relative-to-a-closed-set",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-smoothing-a-continuous-circle-valued-map-through-an-annular-retraction",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-a-generic-section-of-a-line-bundle-has-a-hypersurface-zero-set",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-a-nearest-point-projection-is-not-unique-outside-the-tubular-radius",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-a-smooth-approximation-without-relative-control-destroys-prescribed-values",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-machine-acceptance-is-recognizable",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-diagonal-self-application-machine",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-machine-acceptance-is-undecidable",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-halting-is-recognizable-and-undecidable",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-nonhalting-is-not-recognizable",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-an-unrecognizable-language-exists",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-busy-beaver-dominates-every-total-computable-function",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-busy-beaver-is-not-computable",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-totality-is-not-recognizable",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-machine-equivalence-is-undecidable",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-undecidable-means-no-instance-can-be-answered",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-diagonalization-needs-literal-source-self-reading",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-diagonal-self-application-machine",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-machine-equivalence-is-undecidable",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-undecidable-means-no-instance-can-be-answered",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-verifier-and-nondeterministic-definitions-of-np-agree",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-p-is-contained-in-np-intersection-conp",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-polynomial-reductions-compose",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-polynomial-reductions-transfer-p-np-and-conp-membership",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-sat-search-reduces-to-sat-decision",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-np-is-contained-in-pspace-and-pspace-in-exp",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-np-means-not-polynomial",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-p-is-contained-in-np-intersection-conp",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-np-is-contained-in-pspace-and-pspace-in-exp",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-np-means-not-polynomial",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "def-normal-and-conormal-bundles-of-an-embedded-submanifold",
      "scope": "unknown",
      "owner": null
    }
  ],
  "assigned_items": [
    {
      "id": "thm-projective-module-characterizations",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-an-l-q-function-defines-a-bounded-linear-functional-on-l-p",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-lambda-g-has-operator-norm-equal-to-the-l-q-norm",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-semifinite-measures-make-l-q-representatives-unique",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-l-p-functions-have-sigma-finite-essential-support-for-finite-p",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-bounded-functionals-on-finite-l-p-define-finite-signed-or-complex-measures",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-functional-induced-measures-are-absolutely-continuous-with-respect-to-mu",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-finite-measure-bounded-l-p-functionals-are-integration-against-rn-densities",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-rn-densities-of-bounded-l-p-functionals-belong-to-l-q",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-sigma-finite-duality-for-bounded-functionals-on-l-p",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-arbitrary-measure-duality-for-l-p-when-one-less-p-less-infinity",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-l-p-norm-recovery-by-unit-l-q-pairings",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-ell-p-duality-by-counting-measure",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-a-power-function-realises-the-duality-norm-on-unit-interval",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-the-half-interval-integral-functional-has-norm-two-to-the-minus-one-over-q",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-the-dual-of-ell-two-is-ell-two-by-the-counting-measure-pairing",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-point-evaluation-at-zero-is-not-well-defined-on-l-p-of-unit-interval",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-the-zero-countable-infinity-cocountable-measure-space-breaks-p-equals-one-duality",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-bounded-linear-operator-equivalences",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-operator-norm-is-a-norm",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-composition-operator-norm-inequality",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-bounded-operator-space-is-banach",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-extension-of-a-bounded-map-from-a-dense-subspace",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-bounded-bilinear-map-equivalences",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-quotient-seminorm-is-representative-independent",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-quotient-seminorm-triangle-inequality",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-quotient-seminorm-is-a-norm-iff-subspace-is-closed",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-quotient-map-is-open",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-quotient-of-banach-by-closed-subspace-is-banach",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-universal-property-of-the-normed-quotient",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-complemented-subspace-iff-range-of-a-bounded-projection",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-bounded-below-iff-injective-with-closed-range",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-bounded-right-inverse-iff-kernel-is-complemented",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-bounded-left-inverse-iff-range-is-complemented",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-coordinate-projections-and-inclusions-on-product-banach-spaces",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-shift-operators-on-classical-sequence-spaces",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-evaluation-functional-on-c-of-k",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-differentiation-on-polynomials-is-unbounded-in-the-supremum-norm",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-quotient-by-the-kernel-is-isometric-to-the-range-with-the-induced-quotient-norm",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-c-mod-constants-and-oscillation-norm",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-a-closed-subspace-need-not-have-a-best-approximation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-an-algebraic-complement-need-not-be-topological",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-chebyshev-psi-prime-power-expansion",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-prime-counting-chebyshev-partial-summation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-central-binomial-coefficient-bounds",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-central-binomial-coefficient-prime-valuation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-chebyshev-theta-linear-bounds",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-chebyshev-functions-prime-power-comparison",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-chebyshev-prime-counting-bounds",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-bertrands-postulate",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-weighted-von-mangoldt-harmonic-estimate",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-first-mertens-theorem-for-primes",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-second-mertens-theorem-for-primes",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-third-mertens-theorem-for-primes",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-sum-of-reciprocals-of-primes-diverges",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-euler-prime-product-tends-to-zero",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-prime-counting-theta-and-psi-table",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-chebyshev-binomial-coefficient-estimate",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-bertrand-finite-range-verification",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-first-and-second-mertens-numerics",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-third-mertens-product-numerics",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-chebyshev-bounds-do-not-give-the-prime-number-theorem",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-shoups-product-bound-does-not-determine-mertens-constant",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "def-normal-and-conormal-bundles-of-an-embedded-submanifold",
      "scope": "unknown",
      "owner": null
    }
  ],
  "live_tuples": []
}
```

---

# Step 8 — group **c**, run `frontier-28`

You are the group Alpha for batches **4**, **5**, **6**: 3 A/B pair(s), 6 page(s), 80 item(s), 0 open rejection(s) over 0 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-28-alpha-c-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
in `research/frontier-28-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 4 | `the-duality-of-lp-and-lq` | A | measure-theory | 288.031 | `density-separability-and-convolution-in-lp-examples` |
| 4 | `the-duality-of-lp-and-lq-examples` | B | measure-theory | 288.032 | `the-duality-of-lp-and-lq` |
| 5 | `bounded-linear-operators-and-quotient-spaces` | A | functional-analysis | 288.049 | `normed-and-banach-spaces-examples` |
| 5 | `bounded-linear-operators-and-quotient-spaces-examples` | B | functional-analysis | 288.05 | `bounded-linear-operators-and-quotient-spaces` |
| 6 | `chebyshev-bounds-and-mertens-theorems` | A | number-theory | 348.005 | `average-orders-divisor-sums-and-representation-counts-examples`, `the-gamma-function` |
| 6 | `chebyshev-bounds-and-mertens-theorems-examples` | B | number-theory | 348.006 | `chebyshev-bounds-and-mertens-theorems` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `the-duality-of-lp-and-lq` — The Duality of $L^p$ and Lq (15 item(s))

- `def-bounded-linear-functional-on-l-p-and-its-operator-norm` · definition — A bounded linear functional on $L^p(\mu)$ and its operator norm
- `thm-an-l-q-function-defines-a-bounded-linear-functional-on-l-p` · theorem — Every $g\in L^q(\mu)$ defines a bounded linear functional on $L^p(\mu)$
- `prop-lambda-g-has-operator-norm-equal-to-the-l-q-norm` · proposition — The functional $\Lambda_g$ has norm $\|g\|_q$; for $q=\infty$ assume $\mu$ is semifinite
- `prop-semifinite-measures-make-l-q-representatives-unique` · proposition — On a semifinite measure space, a representing $L^q$ function is unique
- `lem-l-p-functions-have-sigma-finite-essential-support-for-finite-p` · lemma — For $1 \le p < \infty$, every $L^p(\mu)$ class has a sigma-finite essential support
- `lem-bounded-functionals-on-finite-l-p-define-finite-signed-or-complex-measures` · lemma — On a finite-measure space, a bounded functional on $L^p$ defines a finite signed or complex measure
- `lem-functional-induced-measures-are-absolutely-continuous-with-respect-to-mu` · lemma — The measure defined by a bounded $L^p$ functional is absolutely continuous with respect to $\mu$
- `lem-finite-measure-bounded-l-p-functionals-are-integration-against-rn-densities` · lemma — On a finite-measure space, a bounded $L^p$ functional is integration against its Radon-Nikodym density
- `lem-rn-densities-of-bounded-l-p-functionals-belong-to-l-q` · lemma — The Radon-Nikodym density of a bounded $L^p$ functional belongs to $L^q$
- `thm-sigma-finite-duality-for-bounded-functionals-on-l-p` · theorem — On a sigma-finite measure space, every bounded linear functional on $L^p$ is integration against a unique $L^q$ function
- `thm-arbitrary-measure-duality-for-l-p-when-one-less-p-less-infinity` · theorem — For $1 < p < \infty$, the same representation theorem holds on arbitrary measure spaces
- `cor-l-p-norm-recovery-by-unit-l-q-pairings` · corollary — The $L^p$ norm is the supremum of pairings against unit $L^q$ functions
- `cor-ell-p-duality-by-counting-measure` · corollary — Counting measure specializes the representation theorem to $\ell^p$ and $\ell^q$
- `rem-the-p-equals-infinity-case-is-recorded-not-proved-here` · remark — The $p=\infty$ case is recorded but not proved here
- `rem-duality-as-a-dual-space-statement` · remark — Orientation only: the dual-space phrasing of the concrete $L^p$ theorem

### `the-duality-of-lp-and-lq-examples` — The Duality of $L^p$ and Lq — Examples (6 item(s))

- `ex-a-power-function-realises-the-duality-norm-on-unit-interval` · example — A power function on $(0,1]$ realizes the duality norm on the unit interval
- `ex-the-half-interval-integral-functional-has-norm-two-to-the-minus-one-over-q` · example — The functional $f\mapsto\int_0^{1/2} f$ on $L^p[0,1]$ has norm $2^{-1/q}$
- `ex-the-dual-of-ell-two-is-ell-two-by-the-counting-measure-pairing` · example — Every bounded linear functional on $\ell^2$ is summation against a unique $\ell^2$ sequence
- `cex-point-evaluation-at-zero-is-not-well-defined-on-l-p-of-unit-interval` · counterexample — Point evaluation at $0$ is not well defined on $L^p[0,1]$
- `cex-the-zero-countable-infinity-cocountable-measure-space-breaks-p-equals-one-duality` · counterexample — The zero-countable / infinity-cocountable measure space breaks the $p=1$ endpoint of duality
- `rem-a-bounded-functional-on-l-infinity-of-unit-interval-need-not-come-from-l-one` · remark — A bounded functional on $L^\infty[0,1]$ need not come from $L^1[0,1]$

### `bounded-linear-operators-and-quotient-spaces` — Bounded Linear Operators and Quotient Spaces (26 item(s))

- `def-bounded-linear-operator` · definition — A bounded linear operator between normed spaces
- `thm-bounded-linear-operator-equivalences` · theorem — For a linear operator, boundedness, continuity at 0, continuity, and Lipschitz continuity are equivalent
- `def-operator-norm` · definition — The operator norm as the least bound and as the unit-sphere or unit-ball supremum
- `lem-operator-norm-is-a-norm` · lemma — The operator norm is a norm on the space of bounded linear operators
- `lem-composition-operator-norm-inequality` · lemma — Composition satisfies \|ST\|\le\|S\|\,\|T\|
- `def-space-of-bounded-linear-operators` · definition — The spaces \(\mathcal B(X,Y)\) and \(\mathcal B(X)\) of bounded linear operators
- `thm-bounded-operator-space-is-banach` · theorem — If \(Y\) is Banach then \(\mathcal B(X,Y)\) is Banach
- `thm-extension-of-a-bounded-map-from-a-dense-subspace` · theorem — A bounded linear map from a dense normed subspace into a Banach space extends uniquely with the same norm
- `def-topological-isomorphism-of-normed-spaces` · definition — A topological isomorphism of normed spaces
- `def-bounded-bilinear-map` · definition — A bounded bilinear map between normed spaces
- `thm-bounded-bilinear-map-equivalences` · theorem — For a bilinear map, boundedness is equivalent to joint continuity
- `def-quotient-vector-space-coset-notation` · definition — The quotient vector space \(X/M\), its cosets, and the quotient map \(q:X\to X/M\)
- `def-quotient-seminorm` · definition — The quotient seminorm \(\|x+M\|_{X/M}=\inf_{m\in M}\|x+m\|=\operatorname{dist}(x,M)\)
- `lem-quotient-seminorm-is-representative-independent` · lemma — The quotient seminorm is independent of the chosen coset representative
- `lem-quotient-seminorm-triangle-inequality` · lemma — The quotient seminorm satisfies the triangle inequality
- `thm-quotient-seminorm-is-a-norm-iff-subspace-is-closed` · theorem — The quotient seminorm is a norm exactly when the subspace is closed
- `thm-quotient-map-is-open` · theorem — The quotient map sends every open ball onto a set containing the corresponding quotient ball
- `thm-quotient-of-banach-by-closed-subspace-is-banach` · theorem — A quotient of a Banach space by a closed subspace is Banach
- `thm-universal-property-of-the-normed-quotient` · theorem — A bounded operator that vanishes on a subspace factors uniquely through the normed quotient
- `def-complemented-subspace` · definition — A complemented closed subspace of a normed space
- `thm-complemented-subspace-iff-range-of-a-bounded-projection` · theorem — A closed subspace is complemented exactly when it is the range of a bounded projection
- `def-bounded-below-operator` · definition — A bounded operator that is bounded below
- `thm-bounded-below-iff-injective-with-closed-range` · theorem — For a bounded operator between Banach spaces, being bounded below is equivalent to being injective with closed range
- `def-bounded-left-and-right-inverses` · definition — Bounded left inverses and bounded right inverses
- `thm-bounded-right-inverse-iff-kernel-is-complemented` · theorem — A surjective bounded operator between Banach spaces has a bounded right inverse exactly when its kernel is complemented
- `thm-bounded-left-inverse-iff-range-is-complemented` · theorem — An injective bounded operator between Banach spaces has a bounded left inverse exactly when its range is closed and complemented

### `bounded-linear-operators-and-quotient-spaces-examples` — Bounded Linear Operators and Quotient Spaces — Examples (8 item(s))

- `ex-coordinate-projections-and-inclusions-on-product-banach-spaces` · example — Coordinate projections and inclusions on a finite product Banach space
- `ex-shift-operators-on-classical-sequence-spaces` · example — Forward and backward shifts on classical sequence spaces and their exact operator norms
- `ex-evaluation-functional-on-c-of-k` · example — The evaluation functional on \(C(K)\) has norm one
- `ex-differentiation-on-polynomials-is-unbounded-in-the-supremum-norm` · example — Differentiation on polynomials is unbounded for the supremum norm
- `ex-quotient-by-the-kernel-is-isometric-to-the-range-with-the-induced-quotient-norm` · example — The quotient by the kernel is isometric to the range with its induced quotient norm
- `ex-c-mod-constants-and-oscillation-norm` · example — For real continuous functions modulo constants, the quotient norm is half the oscillation
- `cex-a-closed-subspace-need-not-have-a-best-approximation` · counterexample — A closed subspace of a Banach space need not contain a nearest point to every ambient vector
- `cex-an-algebraic-complement-need-not-be-topological` · counterexample — An algebraic complement need not be a topological complement

### `chebyshev-bounds-and-mertens-theorems` — Chebyshev Bounds and Mertens Theorems (18 item(s))

- `def-prime-counting-function` · definition — The prime-counting function
- `def-chebyshev-theta-function` · definition — Chebyshev's theta function
- `def-chebyshev-psi-function` · definition — Chebyshev's psi function
- `lem-chebyshev-psi-prime-power-expansion` · lemma — Prime-power expansion of Chebyshev's psi function
- `lem-prime-counting-chebyshev-partial-summation` · lemma — Abel summation recovers the prime-counting function from theta
- `lem-central-binomial-coefficient-bounds` · lemma — Central binomial coefficient bounds
- `lem-central-binomial-coefficient-prime-valuation` · lemma — Prime valuations in the central binomial coefficient
- `thm-chebyshev-theta-linear-bounds` · theorem — Chebyshev's theta function has linear lower and upper bounds
- `lem-chebyshev-functions-prime-power-comparison` · lemma — Psi and theta differ by at most a square-root term
- `thm-chebyshev-prime-counting-bounds` · theorem — Chebyshev bounds for the prime-counting function
- `thm-bertrands-postulate` · theorem — Bertrand's postulate
- `lem-weighted-von-mangoldt-harmonic-estimate` · lemma — The von Mangoldt harmonic sum is log x plus O(1)
- `thm-first-mertens-theorem-for-primes` · theorem — Mertens' first theorem for primes
- `def-meissel-mertens-constant` · definition — The Meissel-Mertens constant
- `thm-second-mertens-theorem-for-primes` · theorem — Mertens' second theorem for primes
- `thm-third-mertens-theorem-for-primes` · theorem — Mertens' third theorem for primes
- `cor-sum-of-reciprocals-of-primes-diverges` · corollary — The sum of the reciprocals of the primes diverges
- `cor-euler-prime-product-tends-to-zero` · corollary — Euler's prime product tends to zero

### `chebyshev-bounds-and-mertens-theorems-examples` — Chebyshev Bounds and Mertens Theorems — Examples (7 item(s))

- `ex-prime-counting-theta-and-psi-table` · example — A table of pi(x), theta(x), and psi(x)
- `ex-chebyshev-binomial-coefficient-estimate` · example — Factoring a central binomial coefficient to detect interval primes
- `ex-bertrand-finite-range-verification` · example — The residual finite-range check for Bertrand's postulate
- `ex-first-and-second-mertens-numerics` · example — Numerics for the first and second Mertens theorems
- `ex-third-mertens-product-numerics` · example — Numerics for the third Mertens theorem
- `cex-chebyshev-bounds-do-not-give-the-prime-number-theorem` · counterexample — Two-sided Chebyshev bounds do not imply the prime number theorem
- `cex-shoups-product-bound-does-not-determine-mertens-constant` · counterexample — A Theta(1/log x) product bound does not determine the Mertens constant

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
`research/frontier-28-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — targeted repair-integrity review, `frontier-28`

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
