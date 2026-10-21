# Bounded Facts-only applicability proposal

Research-only author: `/root/floer_duality_repair`. Root authorized this precise applicability correction and isolated regressions. No canonical tool/test/source writes, hashes, native gates or state/history changes were made.

The actual `tools/precheck.mts` wrapper consumes everything after Facts as a phase body even when a Definition has no proof. The proposed branch first retains that text and then distinguishes a permitted proof-free kind (definition, algorithm, remark, example) from a supplied argument. It reuses `isProofBearing` for the shared explicit-phase predicate and `maskNonProse` for the existing source inventory's math/code/comment masking. It returns not-applicable only if the kind permits no proof, there is no explicit Proof/Refutation/Counterexample/Verification, and there is no real prose numbered phase after Facts. The Facts text remains intact for actual phases, including the real numbered well-definedness section in the knot-Floer map Definition.

Theorem/lemma/proposition/corollary Facts-only inputs retain the old failure behavior. An explicit empty Proof or Verification is not skipped. A nominal definition or algorithm containing actual numbered arguments still checks Given, strategy, blue tags and QED. The separate open-problem rejection is unchanged. The change does not decide mathematical validity or treat an expected proof as supplied.

Exact preimage/proposed source and unified patch are alongside this report. The isolated test copies the proposed wrapper and its unchanged shared modules to a fresh temporary directory; the normative application checker is invoked on temporary fixtures and archived actual source candidates. It never writes the repository tool, live item, gate receipt or state. Command:

`node --test <this-directory>/precheck-applicability.test.mjs`

Actual result in `isolated-tests.stdout.txt`: **29 tests,29 passed,0 failed**, exit0. These tests cover all five actual proof-free declarations, false numbered text inside math/code/comments, actual Proof and well-definedness handling, missing Given/QED/tags/strategy, four proof-bearing kinds that cannot take the new skip, three other permitted proof-free kinds, and the open-problem guard.

The six seed-source tests intentionally preserve their actual outcomes rather than pretending source-format success: the fiber lemma passes; four seeds still request the checker's phase-order rewrite; the map Definition still fails its existing invalid `specialize` chip. Character owns the combined formatter candidates and reported the same invalid chip; our source-owner confirmation permits only `specialize`→`construct` in its two actual context-instantiation rows and removal of `conclude` in the final row, with all arguments and source qualifications unchanged. The applicability patch does not hide any of those real-phase outcomes. The preceding test-expectation diagnostic is preserved separately; no fake earlier pass is claimed.

Read extent: complete eight assigned source carriers; relevant SCHEMA formatting provisions; complete current precheck wrapper; normative Given/tag/strategy checks; declared shared phase predicate and source masker. No mathematical supplier proof or primary paper was re-audited.
