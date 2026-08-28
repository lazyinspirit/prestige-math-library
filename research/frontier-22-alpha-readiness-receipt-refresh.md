**Spine**

- Refreshed `research/frontier-22-spine-audit.json` from `spine-audit --template` and carried all 58 prior `read` attestations unchanged because every selected proof kept the same `id` and `content_sha256`.
- The spine scope hash changed from `f1f6fed763145181abb0cb8660092bd91f38d6672b571afd3e78bf5898301a36` to `8856d22f12e7ff52c068bbdf68b49291b354fd6556b53b555767b5fd4aa343a6`.
- The change was in template-owned scope metadata, not proof text: 36 of the 58 scope rows changed dependency-cone counts while all 58 proof content hashes stayed fixed.

**Whole-Level**

- Refreshed `research/frontier-22-audit-coverage.json` from `level-coverage --template`, preserved 95 existing reconciliation reasons where the planned and actual dependency arrays were byte-for-byte unchanged, and rewrote the 14 changed rows below as the post-readiness-repair refresh.
- `cor-radical-ideals-as-intersections-of-minimal-primes-noetherian`: the final corollary now explicitly carries Dependent Choice and derives the intersection formula by choosing a minimal primary decomposition, using primality of radicals of primary ideals and radical-of-intersection, then pruning to the minimal primes; the radical definition and first uniqueness theorem are no longer the direct load-bearing citations.
- `def-primary-decomposition-minimal-and-isolated-components`: the definition now quantifies over primary submodules and uses the primary-submodule definition to justify that each annihilator `Ann_R(M/Q_i)` is an ideal whose radical is well-defined.
- `ex-embedded-component-varies-but-radical-does-not`: the example now explicitly assumes the Axiom of Choice and proves the two displayed decompositions are minimal inside the Noetherian ring `k[x,y]` before invoking first uniqueness and isolated-component recovery to show that the radical set is fixed while the embedded `(x,y)`-primary piece changes.
- `ex-primary-localisation-kills-a-component`: the worked example now proves `k[x,y]` is Noetherian, identifies `(x)` and `(x,y)` as prime via quotient/domain arguments, checks `(x)` and `(x,y)^2` are primary from the primary-submodule definition, and uses the minimal/isolated-component definition before applying the localisation and uniqueness results.
- `ex-primary-maximal-radical-test`: the final verification computes `m^2=0` directly in `k[x,y]/(x^2,xy,y^2)` and then applies only the primary-submodule criterion, so the general Artinian-local nilpotence theorem is no longer a direct dependency.
- `lem-associated-primes-contained-in-support`: the proof now shows `m/1 != 0` in `M_p` by the concrete localisation criterion that `m/1` vanishes exactly when some denominator kills `m`, so the localisation-of-a-module definition and the zero-in-localisation lemma are both direct dependencies.
- `lem-intersection-of-primary-submodules-with-same-radical`: the proof is now direct from the zero-divisor characterisation of primaryity together with the defining radical condition for a `p`-primary submodule, rather than routing through the global primary-submodule characterisation theorem.
- `lem-localisation-of-a-primary-submodule`: the lemma now explicitly assumes the Axiom of Choice because both localisation branches are proved by applying the choice-dependent primary-submodule characterisation theorem to `M/Q` and again after localisation.
- `lem-noetherian-ring-maximal-element-annihilator-exists`: the statement now explicitly assumes Dependent Choice and the proof forms the set of annihilator ideals `Sigma` and applies the Noetherian-ring maximal-member characterisation to choose a maximal annihilator.
- `lem-zero-divisor-annihilator-contained-in-associated-prime`: the final proof takes the submodule `N={m in M : xm=0}`, uses existence of an associated prime for `N`, and then applies the associated-prime definition to the chosen element; it no longer needs the annihilator definition or the short-exact-sequence theorem.
- `thm-isolated-primary-components-are-unique`: the theorem now explicitly assumes the Axiom of Choice, localises the full decomposition by commuting localisation with finite intersections, and then uses first uniqueness to show the prime radical `p_i` is intrinsic across minimal decompositions before contracting back.
- `thm-lasker-noether-primary-decomposition`: the existence proof now explicitly assumes Dependent Choice because step 2.1 chooses a maximal counterexample submodule through the Noetherian-module maximal-condition theorem; the decomposition-cleanup lemmas remain the same.
- `thm-primary-submodule-characterisations`: the theorem now explicitly assumes the Axiom of Choice and proves the equivalence through support as `V(Ann N)`, support as the union of closures of associated primes, minimal support primes being associated, the Noetherian quotient/nilradical argument, and radical-as-intersection of primes, rather than citing the bare annihilator definition directly.
- `thm-second-uniqueness-theorem-primary-decomposition`: the proof now explicitly assumes the Axiom of Choice, builds `S=R\setminus\bigcup_{p in Sigma} p`, uses finite prime avoidance to detect exactly which radicals survive localisation, localises the intersection termwise, contracts along the canonical localisation map, and uses first uniqueness to identify the associated-prime set; it no longer depends on the minimal/isolated-components definition or the isolated-component uniqueness theorem.

**Validation**

- `node tools/spine-audit.mjs --receipt research/frontier-22-spine-audit.json` exited `0`.
- `node tools/level-coverage.mjs --contracts research/frontier-22-proof-contracts.json --judge-ledger research/frontier-22-judge.jsonl --context-hash-cache research/frontier-22-judge-context-hashes.json --judge-adjudications research/frontier-22-judge-adjudications.jsonl --terminal-resolutions research/frontier-22-step8-terminal-resolutions.jsonl --spine-receipt research/frontier-22-spine-audit.json --audit-receipt research/frontier-22-audit-coverage.json --verify-current-context research/frontier-22-batch-{1..9}.pages.json` exited `0`.
- The whole-level gate reported `425` scoped items, `332` proof-bearing items, `1293` declared relationships, and `109` dependency drifts; `417` current configured-judge verdict sets plus `8` current terminal resolutions covered the `425`-item judge scope.
- The whole-level gate closed with `0` errors, `0` needs rejudge, `0` unadjudicated rejections, and `0` open fatal defects. Its `166` warnings were all adjudicated nonfatal or false-positive judge outcomes.

**Blockers**

- None.
