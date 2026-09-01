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
group work, `research/frontier-28-alpha-groups.json` is the assignment: it permits at
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

run: frontier-28
role: alpha-adjudicate
label: adjudicate-rejudge-b-round-1

# Exact Step-8 repair envelope — 8-rejudge, round 1

The JSON envelope below is the authority for this dispatch. It contains every failing gate from the battery,
the full untruncated output, exact current rejection tuples, and explicit run/published ownership.
Act only on `assigned_items` and `live_tuples`; do not substitute the latest event-log row.

```json
{
  "version": 1,
  "run": "frontier-28",
  "stage": "8-rejudge",
  "round": 1,
  "mode": "rejudge-adjudication",
  "group": "b",
  "failures": [
    {
      "id": "judge-closure",
      "stage": "8-rejudge",
      "why": "ERROR judge-adjudication-missing [cex-a-category-with-enough-injectives-but-not-enough-projectives]: cex-a-category-with-enough-injectives-but-not-enough-projectives: current gpt-5.6-terra rejection has no exact Alpha outcome for context 55",
      "output": "level-coverage --judge-only: 424/424 current configured-judge verdict set(s); 0 terminal manual resolution(s), 0 need rejudge, 64 unadjudicated, 0 open fatal, 139 adjudicated rejection(s) closed nonfatally; legacy gate counter 424/424 current pairs (one per-item configured verdict set, including singleton lineups)\nERROR judge-adjudication-missing [cex-a-category-with-enough-injectives-but-not-enough-projectives]: cex-a-category-with-enough-injectives-but-not-enough-projectives: current gpt-5.6-terra rejection has no exact Alpha outcome for context 55295a1264656f497ed332247d1600dd357ffdd71a649a32b1396a775e0678f5\nERROR judge-adjudication-missing [cex-a-closed-subspace-need-not-have-a-best-approximation]: cex-a-closed-subspace-need-not-have-a-best-approximation: current gpt-5.6-terra rejection has no exact Alpha outcome for context 64b43e2f5beaf62c7e2b990e85f03ea4fbc7dec9e6687115a3ee5aa5afc49e75\nERROR judge-adjudication-missing [cor-completion-commutes-with-finite-quotients-and-submodules]: cor-completion-commutes-with-finite-quotients-and-submodules: current gpt-5.6-terra rejection has no exact Alpha outcome for context 348e7b5221dd237b7b31c0fd7fcead9bf25dc9fe2979c77346a5b747972e4ffa\nERROR judge-adjudication-missing [cor-finite-flat-noetherian-modules-are-projective]: cor-finite-flat-noetherian-modules-are-projective: current gpt-5.6-terra rejection has no exact Alpha outcome for context de2f4b9dc06cf221cf47337c9ab78fec3fb5ac7748b31ade7bcc97de95c0d49a\nERROR judge-adjudication-missing [cor-flat-quotients-and-idempotent-ideals]: cor-flat-quotients-and-idempotent-ideals: current gpt-5.6-terra rejection has no exact Alpha outcome for context aea53c64591c59b3ab22475700f9be1cd83f4c6fd4b57ffddcac5a043178ee48\nERROR judge-adjudication-missing [cor-linear-isoperimetric-bound-for-finite-c-prime-one-sixth-presentations]: cor-linear-isoperimetric-bound-for-finite-c-prime-one-sixth-presentations: current gpt-5.6-terra rejection has no exact Alpha outcome for context 0998be64860a86691344604688f272458beaffa1dd0d3089ebd4c5b7ae692c10\nERROR judge-adjudication-missing [cor-parameter-ideal-multiplicity-positive]: cor-parameter-ideal-multiplicity-positive: current gpt-5.6-terra rejection has no exact Alpha outcome for context 89261a069435a68dde0bc7668060d6175054b20aa9be1e03d1015713398184d7\nERROR judge-adjudication-missing [def-hilbert-samuel-multiplicity]: def-hilbert-samuel-multiplicity: current gpt-5.6-terra rejection has no exact Alpha outcome for context d998bfc366560867614670001008b2e9b839d246c1126496918a95d5d46542f4\nERROR judge-adjudication-missing [def-profinite-completion-of-an-abstract-group]: def-profinite-completion-of-an-abstract-group: current gpt-5.6-terra rejection has no exact Alpha outcome for context 4e2c8fd94b3a57a9584dfe32f1b6a2de7a79e16ee74944080d89d020a22ce56b\nERROR judge-adjudication-missing [def-secant-and-tangent-direction-maps-of-an-euclidean-embedding]: def-secant-and-tangent-direction-maps-of-an-euclidean-embedding: current gpt-5.6-terra rejection has no exact Alpha outcome for context f352d1a03f8e0dbb392ca475a603270b083fcdc64a9a6c147e756726ac59be84\nERROR judge-adjudication-missing [def-tubular-neighbourhood-of-an-embedded-submanifold]: def-tubular-neighbourhood-of-an-embedded-submanifold: current gpt-5.6-terra rejection has no exact Alpha outcome for context ad505013e15547729d2ee57e006b8a1a817fd081ec5aaeb0679151e9c21e5388\nERROR judge-adjudication-missing [ex-bertrand-finite-range-verification]: ex-bertrand-finite-range-verification: current gpt-5.6-terra rejection has no exact Alpha outcome for context 43d1ec9eb8464dab31d1a10be1d1f19b69f0e6d90ade40e79372556903ba2d0d\nERROR judge-adjudication-missing [ex-completion-not-exact-without-finiteness]: ex-completion-not-exact-without-finiteness: current gpt-5.6-terra rejection has no exact Alpha outcome for context 4dee727447a05f659cb5701157220396e2c83e2251c898f09201806674c88040\nERROR judge-adjudication-missing [ex-completion-of-a-domain-not-a-domain]: ex-completion-of-a-domain-not-a-domain: current gpt-5.6-terra rejection has no exact Alpha outcome for context 626ef488910e5c3025366cd307eebd8330bed9106a3e5a80670a9ddcb01ad013\nERROR judge-adjudication-missing [ex-coordinate-projections-and-inclusions-on-product-banach-spaces]: ex-coordinate-projections-and-inclusions-on-product-banach-spaces: current gpt-5.6-terra rejection has no exact Alpha outcome for context 81ae81ad3e0e0fc315470564239d80e9f6570932731a3f70e33b6136e628ade1\nERROR judge-adjudication-missing [ex-equivalent-adic-filtrations]: ex-equivalent-adic-filtrations: current gpt-5.6-terra rejection has no exact Alpha outcome for context 1da4c7513da246a1e87f3ed0e6ceab77d1bea9d7c0a1c32533b8b497e6863967\nERROR judge-adjudication-missing [ex-evaluation-functional-on-c-of-k]: ex-evaluation-functional-on-c-of-k: current gpt-5.6-terra rejection has no exact Alpha outcome for context 89ba0cae799fa8a73abbb07fdc3d7b97600043d025737fdc7c7675414058b7c4\nERROR judge-adjudication-missing [ex-faithfully-flat-principal-open-cover]: ex-faithfully-flat-principal-open-cover: current gpt-5.6-terra rejection has no exact Alpha outcome for context 0815361cfff3b17b1c4d4ad556199d43a8b199b6b6f62dc6322c3b20f08d1037\nERROR judge-adjudication-missing [ex-first-and-second-mertens-numerics]: ex-first-and-second-mertens-numerics: current gpt-5.6-terra rejection has no exact Alpha outcome for context a9d14cb36453d20082851c09104b80d1ebe73faa87bfbff3cd625daab7c0514f\nERROR judge-adjudication-missing [ex-fraction-field-flat-not-projective]: ex-fraction-field-flat-not-projective: current gpt-5.6-terra rejection has no exact Alpha outcome for context f94ede48c2035cd7dc885bdc1046608316b51cebda49a2bcd8238c6d4363affa\nERROR judge-adjudication-missing [ex-projecting-a-space-curve-can-create-a-double-point]: ex-projecting-a-space-curve-can-create-a-double-point: current gpt-5.6-terra rejection has no exact Alpha outcome for context df4c99548dcde4aeb82196108dc99d2b8dc15b6561f71ca7893dc3851deb262b\nERROR judge-adjudication-missing [ex-semilocal-adic-completion]: ex-semilocal-adic-completion: current gpt-5.6-terra rejection has no exact Alpha outcome for context e5295da44ff7691d8ac2552f50857ec9d0313fbc7173e82d96288a3b6aff0a87\nERROR judge-adjudication-missing [fs-an-arbitrary-linear-projection-of-an-embedding-is-an-embedding]: fs-an-arbitrary-linear-projection-of-an-embedding-is-an-embedding: current gpt-5.6-terra rejection has no exact Alpha outcome for context 7673e0e0fe18ee835054a37c49df2d90631f2685fc54009c590cd94b2990ca6d\nERROR judge-adjudication-missing [fs-enough-projectives-selects-a-projective-resolution-functor-on-all-objects]: fs-enough-projectives-selects-a-projective-resolution-functor-on-all-objects: current gpt-5.6-terra rejection has no exact Alpha outcome for context b373c54a2a072427b1fe89a5d4b8a0f7efe7c264c558994e51df87489f4822b7\nERROR judge-adjudication-missing [fs-the-horseshoe-middle-resolution-is-canonical]: fs-the-horseshoe-middle-resolution-is-canonical: current gpt-5.6-terra rejection has no exact Alpha outcome for context 44a4f955c66b5b9f942c9a25e88d42c1fe8e89d0517112f6b4b85b08c4540ebe\nERROR judge-adjudication-missing [lem-a-smooth-exhaustion-separates-the-locally-finite-chart-bands]: lem-a-smooth-exhaustion-separates-the-locally-finite-chart-bands: current gpt-5.6-terra rejection has no exact Alpha outcome for context 0817876b17cc91e0abe5739713a0d668425ed2de5c95c96a92c3dce55f359cce\nERROR judge-adjudication-missing [lem-a-sufficiently-long-generator-extension-iteration-is-injective]: lem-a-sufficiently-long-generator-extension-iteration-is-injective: current gpt-5.6-terra rejection has no exact Alpha outcome for context bcb779f0db80b2864086a9bc211d4a4bd690253a9d37b10fc5bf1f0f3e3b8cd7\nERROR judge-adjudication-missing [lem-chebyshev-functions-prime-power-comparison]: lem-chebyshev-functions-prime-power-comparison: current gpt-5.6-terra rejection has no exact Alpha outcome for context 5d876f95b5d75b6f0a88c4efcd92f862d3ca63b193a909de6462890b36a9075f\nERROR judge-adjudication-missing [lem-curvature-count-for-reduced-c-prime-one-sixth-diagrams]: lem-curvature-count-for-reduced-c-prime-one-sixth-diagrams: current gpt-5.6-terra rejection has no exact Alpha outcome for context 89a271981fc4282cb7398858d1e5e0b19e2c7409c1651645b1dcdcce75f1b6cd\nERROR judge-adjudication-missing [lem-one-step-extension-of-a-partial-injective-resolution]: lem-one-step-extension-of-a-partial-injective-resolution: current gpt-5.6-terra rejection has no exact Alpha outcome for context 8aea39127c30585e4a54312bb12f7418e5c6f5ebd42cd2e1a1f298fdc64ba680\nERROR judge-adjudication-missing [lem-rees-module-finiteness-and-stable-filtrations]: lem-rees-module-finiteness-and-stable-filtrations: current gpt-5.6-terra rejection has no exact Alpha outcome for context 153dd147e3212cff40290568ac5f2f357b21e1a808f0d2ef7b57406af32cd804\nERROR judge-adjudication-missing [lem-the-auxiliary-pattern-has-a-polynomial-homogeneous-set-under-the-source-hypotheses]: lem-the-auxiliary-pattern-has-a-polynomial-homogeneous-set-under-the-source-hypotheses: current gpt-5.6-terra rejection has no exact Alpha outcome for context 4a355002beb9f6a211758b8525ce901ce4a6b43225b0841c21b91ebe819a150d\nERROR judge-adjudication-missing [lem-the-one-step-generator-map-is-a-functorial-monomorphism]: lem-the-one-step-generator-map-is-a-functorial-monomorphism: current gpt-5.6-terra rejection has no exact Alpha outcome for context ff7e3ef919cd47236a7114d9f14c0338d85aa35c05de23456280b91a739bc401\nERROR judge-adjudication-missing [lem-transfinite-iteration-of-the-generator-extension-preserves-monomorphisms-and-factorizes-small-source-maps]: lem-transfinite-iteration-of-the-generator-extension-preserves-monomorphisms-and-factorizes-small-source-maps: current gpt-5.6-terra rejection has no exact Alpha outcome for context ecd61452c7eaf5f9f35b1ebb5bbbe4f993c83c65152c03bab7af20e3f393827b\nERROR judge-adjudication-missing [lem-weighted-von-mangoldt-harmonic-estimate]: lem-weighted-von-mangoldt-harmonic-estimate: current gpt-5.6-terra rejection has no exact Alpha outcome for context 9e70072ce19cccb7c2e35176265850921ff5699420346ef8df7f287d37fcc1eb\nERROR judge-adjudication-missing [prop-horseshoe-resolutions-are-compatible-with-morphisms-of-short-exact-sequences-up-to-homotopy]: prop-horseshoe-resolutions-are-compatible-with-morphisms-of-short-exact-sequences-up-to-homotopy: current gpt-5.6-terra rejection has no exact Alpha outcome for context 426eefaa4a9e9a6f79660fcae7b171f43a87a568619f75c1b1e717509286b03b\nERROR judge-adjudication-missing [prop-lambda-g-has-operator-norm-equal-to-the-l-q-norm]: prop-lambda-g-has-operator-norm-equal-to-the-l-q-norm: current gpt-5.6-terra rejection has no exact Alpha outcome for context b6ce31362ee948b3faecd416a3845e17beb2c65eb42bf2a87ea681fece8c16f5\nERROR judge-adjudication-missing [prop-relative-transversality-preserves-a-map-on-a-closed-good-region]: prop-relative-transversality-preserves-a-map-on-a-closed-good-region: current gpt-5.6-terra rejection has no exact Alpha outcome for context b11fa6a62051a7a3993f6860befab66d358b01d3856f50bfdbd65e173451ed80\nERROR judge-adjudication-missing [thm-additivity-of-hilbert-samuel-multiplicity]: thm-additivity-of-hilbert-samuel-multiplicity: current gpt-5.6-terra rejection has no exact Alpha outcome for context 285d392a1189ff289ff13fed93a79279122ccdeb4152fe76085f466e10084d91\nERROR judge-adjudication-missing [thm-an-l-q-function-defines-a-bounded-linear-functional-on-l-p]: thm-an-l-q-function-defines-a-bounded-linear-functional-on-l-p: current gpt-5.6-terra rejection has no exact Alpha outcome for context 4851ff35769ae232cb1ab673c45eaf9719cc48e1961568f2877046b9b53c4e4f\nERROR judge-adjudication-missing [thm-arbitrary-measure-duality-for-l-p-when-one-less-p-less-infinity]: thm-arbitrary-measure-duality-for-l-p-when-one-less-p-less-infinity: current gpt-5.6-terra rejection has no exact Alpha outcome for context cebdf5468d780fef7649a4c8fba5fd7f0abaac5237828a76d586bc07751296b4\nERROR judge-adjudication-missing [thm-complete-nakayama-lemma]: thm-complete-nakayama-lemma: current gpt-5.6-terra rejection has no exact Alpha outcome for context 15f2dc518d951f9613b7efd136d90c37f92072fa6341e407296d96720ffb275a\nERROR judge-adjudication-missing [thm-completion-as-extension-of-scalars]: thm-completion-as-extension-of-scalars: current gpt-5.6-terra rejection has no exact Alpha outcome for context d0c2c2515a2c88e9fb844708dc3a1706384c07709eaa6db228a14d94f59d8815\nERROR judge-adjudication-missing [thm-completion-is-exact-on-finite-modules]: thm-completion-is-exact-on-finite-modules: current gpt-5.6-terra rejection has no exact Alpha outcome for context f2783e13c2557a63cb5b9361433ba0277e8ded83cbf3557a19f70f2c4713ad0c\nERROR judge-adjudication-missing [thm-dimension-and-parameters-for-modules]: thm-dimension-and-parameters-for-modules: current gpt-5.6-terra rejection has no exact Alpha outcome for context 648e68d595f31c954057c53b26703a9b9754da5362eb39b0ff91799ed3ac8284\nERROR judge-adjudication-missing [thm-euclidean-tubular-neighbourhood-theorem]: thm-euclidean-tubular-neighbourhood-theorem: current gpt-5.6-terra rejection has no exact Alpha outcome for context 288c5f4abe0fb6d39e5bfa2c7ee13ef31da4535f1250f813af492cae866f549a\nERROR judge-adjudication-missing [thm-existence-of-hilbert-samuel-polynomial]: thm-existence-of-hilbert-samuel-polynomial: current gpt-5.6-terra rejection has no exact Alpha outcome for context c49a230fb41ccdf443918263c362d1b9817f3b94f019ae6f3c36b70584da8d17\nERROR judge-adjudication-missing [thm-faithful-flatness-of-jacobson-adic-completion]: thm-faithful-flatness-of-jacobson-adic-completion: current gpt-5.6-terra rejection has no exact Alpha outcome for context 46f87a7de1dd3643257552726ccf6dba9c9bc2f0c0c4b9d96bc1ea3acb1048e2\nERROR judge-adjudication-missing [thm-flatness-of-noetherian-completion]: thm-flatness-of-noetherian-completion: current gpt-5.6-terra rejection has no exact Alpha outcome for context 8c1ef80c4742961cc007e0a5cc00c2a061cb10db574c9a474d59a0fc2915f06f\nERROR judge-adjudication-missing [thm-hilbert-samuel-dimension-theorem]: thm-hilbert-samuel-dimension-theorem: current gpt-5.6-terra rejection has no exact Alpha outcome for context 2b94eda76d5efe376287d3eb82495a2f946b22a8ff2c5a6c01b8fbc928e00ac1\nERROR judge-adjudication-missing [thm-injective-comparison-map-exists]: thm-injective-comparison-map-exists: current gpt-5.6-terra rejection has no exact Alpha outcome for context 7725b65266c4004b2cdc239a925617d1160dd5ee716bb0bc2cfd065d636ccbae\nERROR judge-adjudication-missing [thm-injective-comparison-maps-are-unique-up-to-cochain-homotopy]: thm-injective-comparison-maps-are-unique-up-to-cochain-homotopy: current gpt-5.6-terra rejection has no exact Alpha outcome for context b46a8d848ac7b05c3d9439c827aa7c5c00c4fb322db4289caf25cdc05c712609\nERROR judge-adjudication-missing [thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected]: thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected: current gpt-5.6-terra rejection has no exact Alpha outcome for context 8f7e3b5b05096245e815b46e31454b673263b65dba2e2dff2481eba9dfb2137a\nERROR judge-adjudication-missing [thm-kernel-and-universal-property-of-adic-completion]: thm-kernel-and-universal-property-of-adic-completion: current gpt-5.6-terra rejection has no exact Alpha outcome for context e5882c562eed4430b4f3ecaaeb3072b58a6c3e7d082b644c4169a8c826e9b59d\nERROR judge-adjudication-missing [thm-local-criterion-for-flatness-ideal-form]: thm-local-criterion-for-flatness-ideal-form: current gpt-5.6-terra rejection has no exact Alpha outcome for context 3188cfc3b0fd0699f909f62577010bef5145a3032106a6357447f019446f796d\nERROR judge-adjudication-missing [thm-multiplicity-under-reduction-by-a-parameter]: thm-multiplicity-under-reduction-by-a-parameter: current gpt-5.6-terra rejection has no exact Alpha outcome for context 61355c19ee1b0a4da49145c9b2d9a047759b04f83035c7744328af839f7b3eaf\nERROR judge-adjudication-missing [thm-noetherianity-of-adic-completion]: thm-noetherianity-of-adic-completion: current gpt-5.6-terra rejection has no exact Alpha outcome for context acf241131353d915dc2219a63f4dfb4cf931bba2997a4c243ec9058aa48f1720\nERROR judge-adjudication-missing [thm-polynomial-reductions-transfer-p-np-and-conp-membership]: thm-polynomial-reductions-transfer-p-np-and-conp-membership: current gpt-5.6-terra rejection has no exact Alpha outcome for context e57d4fefd712afdcfe178d7c0674f342c379181fc305d16c31c96ae8647dc9a1\nERROR judge-adjudication-missing [thm-profinite-completion-is-functorial]: thm-profinite-completion-is-functorial: current gpt-5.6-terra rejection has no exact Alpha outcome for context 7821ad73f851d777ce486b89a6bbcd1c2b5b7702d10a09003160ffcced77f864\nERROR judge-adjudication-missing [thm-the-double-braiding-center-is-symmetric]: thm-the-double-braiding-center-is-symmetric: current gpt-5.6-terra rejection has no exact Alpha outcome for context 6153ea0ad61d6607e745c91440b582956fca8974c5d1223164806f3efcf8e817\nERROR judge-adjudication-missing [thm-third-mertens-theorem-for-primes]: thm-third-mertens-theorem-for-primes: current gpt-5.6-terra rejection has no exact Alpha outcome for context b2f0c75472179dc4ad10d3a8b48875126a27e32ce1cc82ad94d4ac9b40fb7b23\nERROR judge-adjudication-missing [thm-topological-characterisation-of-profinite-groups]: thm-topological-characterisation-of-profinite-groups: current gpt-5.6-terra rejection has no exact Alpha outcome for context 50d55f9a94a7ff1f82253d14f6ba846de01313dcc94a55e77aa941cf6b2a6d17\nERROR judge-adjudication-missing [thm-universal-property-of-profinite-completion]: thm-universal-property-of-profinite-completion: current gpt-5.6-terra rejection has no exact Alpha outcome for context fe384081b4492bedba48cbd551b915cb19ba36b51eff4dbca97dbf1fe7d09ddb\nERROR judge-adjudication-missing [thm-weak-whitney-proper-embedding-theorem]: thm-weak-whitney-proper-embedding-theorem: current gpt-5.6-terra rejection has no exact Alpha outcome for context 9931ee06d3140fed9732f64e8c74cb3cba695e05d4fb6555edda56ed37456fde\n",
      "named_ids": [
        "cex-a-category-with-enough-injectives-but-not-enough-projectives",
        "cex-a-closed-subspace-need-not-have-a-best-approximation",
        "cor-completion-commutes-with-finite-quotients-and-submodules",
        "cor-finite-flat-noetherian-modules-are-projective",
        "cor-flat-quotients-and-idempotent-ideals",
        "cor-linear-isoperimetric-bound-for-finite-c-prime-one-sixth-presentations",
        "cor-parameter-ideal-multiplicity-positive",
        "def-hilbert-samuel-multiplicity",
        "def-profinite-completion-of-an-abstract-group",
        "def-secant-and-tangent-direction-maps-of-an-euclidean-embedding",
        "def-tubular-neighbourhood-of-an-embedded-submanifold",
        "ex-bertrand-finite-range-verification",
        "ex-completion-not-exact-without-finiteness",
        "ex-completion-of-a-domain-not-a-domain",
        "ex-coordinate-projections-and-inclusions-on-product-banach-spaces",
        "ex-equivalent-adic-filtrations",
        "ex-evaluation-functional-on-c-of-k",
        "ex-faithfully-flat-principal-open-cover",
        "ex-first-and-second-mertens-numerics",
        "ex-fraction-field-flat-not-projective",
        "ex-projecting-a-space-curve-can-create-a-double-point",
        "ex-semilocal-adic-completion",
        "fs-an-arbitrary-linear-projection-of-an-embedding-is-an-embedding",
        "fs-enough-projectives-selects-a-projective-resolution-functor-on-all-objects",
        "fs-the-horseshoe-middle-resolution-is-canonical",
        "lem-a-smooth-exhaustion-separates-the-locally-finite-chart-bands",
        "lem-a-sufficiently-long-generator-extension-iteration-is-injective",
        "lem-chebyshev-functions-prime-power-comparison",
        "lem-curvature-count-for-reduced-c-prime-one-sixth-diagrams",
        "lem-one-step-extension-of-a-partial-injective-resolution",
        "lem-rees-module-finiteness-and-stable-filtrations",
        "lem-the-auxiliary-pattern-has-a-polynomial-homogeneous-set-under-the-source-hypotheses",
        "lem-the-one-step-generator-map-is-a-functorial-monomorphism",
        "lem-transfinite-iteration-of-the-generator-extension-preserves-monomorphisms-and-factorizes-small-source-maps",
        "lem-weighted-von-mangoldt-harmonic-estimate",
        "prop-horseshoe-resolutions-are-compatible-with-morphisms-of-short-exact-sequences-up-to-homotopy",
        "prop-lambda-g-has-operator-norm-equal-to-the-l-q-norm",
        "prop-relative-transversality-preserves-a-map-on-a-closed-good-region",
        "thm-additivity-of-hilbert-samuel-multiplicity",
        "thm-an-l-q-function-defines-a-bounded-linear-functional-on-l-p",
        "thm-arbitrary-measure-duality-for-l-p-when-one-less-p-less-infinity",
        "thm-complete-nakayama-lemma",
        "thm-completion-as-extension-of-scalars",
        "thm-completion-is-exact-on-finite-modules",
        "thm-dimension-and-parameters-for-modules",
        "thm-euclidean-tubular-neighbourhood-theorem",
        "thm-existence-of-hilbert-samuel-polynomial",
        "thm-faithful-flatness-of-jacobson-adic-completion",
        "thm-flatness-of-noetherian-completion",
        "thm-hilbert-samuel-dimension-theorem",
        "thm-injective-comparison-map-exists",
        "thm-injective-comparison-maps-are-unique-up-to-cochain-homotopy",
        "thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected",
        "thm-kernel-and-universal-property-of-adic-completion",
        "thm-local-criterion-for-flatness-ideal-form",
        "thm-multiplicity-under-reduction-by-a-parameter",
        "thm-noetherianity-of-adic-completion",
        "thm-polynomial-reductions-transfer-p-np-and-conp-membership",
        "thm-profinite-completion-is-functorial",
        "thm-the-double-braiding-center-is-symmetric",
        "thm-third-mertens-theorem-for-primes",
        "thm-topological-characterisation-of-profinite-groups",
        "thm-universal-property-of-profinite-completion",
        "thm-weak-whitney-proper-embedding-theorem"
      ]
    }
  ],
  "mechanical_residue": "",
  "live_items": [
    {
      "id": "cex-a-category-with-enough-injectives-but-not-enough-projectives",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-a-closed-subspace-need-not-have-a-best-approximation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-completion-commutes-with-finite-quotients-and-submodules",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-finite-flat-noetherian-modules-are-projective",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-flat-quotients-and-idempotent-ideals",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-linear-isoperimetric-bound-for-finite-c-prime-one-sixth-presentations",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-parameter-ideal-multiplicity-positive",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "def-hilbert-samuel-multiplicity",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "def-profinite-completion-of-an-abstract-group",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "def-secant-and-tangent-direction-maps-of-an-euclidean-embedding",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "def-tubular-neighbourhood-of-an-embedded-submanifold",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-bertrand-finite-range-verification",
      "scope": "run",
      "owner": "c"
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
      "id": "ex-coordinate-projections-and-inclusions-on-product-banach-spaces",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-equivalent-adic-filtrations",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-evaluation-functional-on-c-of-k",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-faithfully-flat-principal-open-cover",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-first-and-second-mertens-numerics",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-fraction-field-flat-not-projective",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-projecting-a-space-curve-can-create-a-double-point",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-semilocal-adic-completion",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-an-arbitrary-linear-projection-of-an-embedding-is-an-embedding",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-enough-projectives-selects-a-projective-resolution-functor-on-all-objects",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-the-horseshoe-middle-resolution-is-canonical",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-a-smooth-exhaustion-separates-the-locally-finite-chart-bands",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-a-sufficiently-long-generator-extension-iteration-is-injective",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-chebyshev-functions-prime-power-comparison",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-curvature-count-for-reduced-c-prime-one-sixth-diagrams",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-one-step-extension-of-a-partial-injective-resolution",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-rees-module-finiteness-and-stable-filtrations",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-the-auxiliary-pattern-has-a-polynomial-homogeneous-set-under-the-source-hypotheses",
      "scope": "run",
      "owner": "d"
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
      "id": "lem-weighted-von-mangoldt-harmonic-estimate",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-horseshoe-resolutions-are-compatible-with-morphisms-of-short-exact-sequences-up-to-homotopy",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-lambda-g-has-operator-norm-equal-to-the-l-q-norm",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-relative-transversality-preserves-a-map-on-a-closed-good-region",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-additivity-of-hilbert-samuel-multiplicity",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-an-l-q-function-defines-a-bounded-linear-functional-on-l-p",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-arbitrary-measure-duality-for-l-p-when-one-less-p-less-infinity",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-complete-nakayama-lemma",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-completion-as-extension-of-scalars",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-completion-is-exact-on-finite-modules",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-dimension-and-parameters-for-modules",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-euclidean-tubular-neighbourhood-theorem",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-existence-of-hilbert-samuel-polynomial",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-faithful-flatness-of-jacobson-adic-completion",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-flatness-of-noetherian-completion",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-hilbert-samuel-dimension-theorem",
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
      "id": "thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-kernel-and-universal-property-of-adic-completion",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-local-criterion-for-flatness-ideal-form",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-multiplicity-under-reduction-by-a-parameter",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-noetherianity-of-adic-completion",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-polynomial-reductions-transfer-p-np-and-conp-membership",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-profinite-completion-is-functorial",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-the-double-braiding-center-is-symmetric",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-third-mertens-theorem-for-primes",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-topological-characterisation-of-profinite-groups",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-universal-property-of-profinite-completion",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-weak-whitney-proper-embedding-theorem",
      "scope": "run",
      "owner": "b"
    }
  ],
  "assigned_items": [
    {
      "id": "cor-linear-isoperimetric-bound-for-finite-c-prime-one-sixth-presentations",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "def-profinite-completion-of-an-abstract-group",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "def-secant-and-tangent-direction-maps-of-an-euclidean-embedding",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "def-tubular-neighbourhood-of-an-embedded-submanifold",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-projecting-a-space-curve-can-create-a-double-point",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-an-arbitrary-linear-projection-of-an-embedding-is-an-embedding",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-a-smooth-exhaustion-separates-the-locally-finite-chart-bands",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-curvature-count-for-reduced-c-prime-one-sixth-diagrams",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-relative-transversality-preserves-a-map-on-a-closed-good-region",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-euclidean-tubular-neighbourhood-theorem",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-profinite-completion-is-functorial",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-the-double-braiding-center-is-symmetric",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-topological-characterisation-of-profinite-groups",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-universal-property-of-profinite-completion",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-weak-whitney-proper-embedding-theorem",
      "scope": "run",
      "owner": "b"
    }
  ],
  "live_tuples": [
    {
      "id": "cor-linear-isoperimetric-bound-for-finite-c-prime-one-sixth-presentations",
      "model": "gpt-5.6-terra",
      "context_sha256": "0998be64860a86691344604688f272458beaffa1dd0d3089ebd4c5b7ae692c10",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "def-profinite-completion-of-an-abstract-group",
      "model": "gpt-5.6-terra",
      "context_sha256": "4e2c8fd94b3a57a9584dfe32f1b6a2de7a79e16ee74944080d89d020a22ce56b",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "def-secant-and-tangent-direction-maps-of-an-euclidean-embedding",
      "model": "gpt-5.6-terra",
      "context_sha256": "f352d1a03f8e0dbb392ca475a603270b083fcdc64a9a6c147e756726ac59be84",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "def-tubular-neighbourhood-of-an-embedded-submanifold",
      "model": "gpt-5.6-terra",
      "context_sha256": "ad505013e15547729d2ee57e006b8a1a817fd081ec5aaeb0679151e9c21e5388",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "ex-projecting-a-space-curve-can-create-a-double-point",
      "model": "gpt-5.6-terra",
      "context_sha256": "df4c99548dcde4aeb82196108dc99d2b8dc15b6561f71ca7893dc3851deb262b",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "fs-an-arbitrary-linear-projection-of-an-embedding-is-an-embedding",
      "model": "gpt-5.6-terra",
      "context_sha256": "7673e0e0fe18ee835054a37c49df2d90631f2685fc54009c590cd94b2990ca6d",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "lem-a-smooth-exhaustion-separates-the-locally-finite-chart-bands",
      "model": "gpt-5.6-terra",
      "context_sha256": "0817876b17cc91e0abe5739713a0d668425ed2de5c95c96a92c3dce55f359cce",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "lem-curvature-count-for-reduced-c-prime-one-sixth-diagrams",
      "model": "gpt-5.6-terra",
      "context_sha256": "89a271981fc4282cb7398858d1e5e0b19e2c7409c1651645b1dcdcce75f1b6cd",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "prop-relative-transversality-preserves-a-map-on-a-closed-good-region",
      "model": "gpt-5.6-terra",
      "context_sha256": "b11fa6a62051a7a3993f6860befab66d358b01d3856f50bfdbd65e173451ed80",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-euclidean-tubular-neighbourhood-theorem",
      "model": "gpt-5.6-terra",
      "context_sha256": "288c5f4abe0fb6d39e5bfa2c7ee13ef31da4535f1250f813af492cae866f549a",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected",
      "model": "gpt-5.6-terra",
      "context_sha256": "8f7e3b5b05096245e815b46e31454b673263b65dba2e2dff2481eba9dfb2137a",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-profinite-completion-is-functorial",
      "model": "gpt-5.6-terra",
      "context_sha256": "7821ad73f851d777ce486b89a6bbcd1c2b5b7702d10a09003160ffcced77f864",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-the-double-braiding-center-is-symmetric",
      "model": "gpt-5.6-terra",
      "context_sha256": "6153ea0ad61d6607e745c91440b582956fca8974c5d1223164806f3efcf8e817",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-topological-characterisation-of-profinite-groups",
      "model": "gpt-5.6-terra",
      "context_sha256": "50d55f9a94a7ff1f82253d14f6ba846de01313dcc94a55e77aa941cf6b2a6d17",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-universal-property-of-profinite-completion",
      "model": "gpt-5.6-terra",
      "context_sha256": "fe384081b4492bedba48cbd551b915cb19ba36b51eff4dbca97dbf1fe7d09ddb",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-weak-whitney-proper-embedding-theorem",
      "model": "gpt-5.6-terra",
      "context_sha256": "9931ee06d3140fed9732f64e8c74cb3cba695e05d4fb6555edda56ed37456fde",
      "scope": "run",
      "status": "unadjudicated"
    }
  ]
}
```

---

# Step 8 — group **b**, run `frontier-28`

You are the group Alpha for batches **1**, **7**, **10**: 4 A/B pair(s), 8 page(s), 163 item(s), 16 open rejection(s) over 16 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-28-alpha-b-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
| 1 | `small-cancellation-and-dehn-algorithms` | A | group-theory | 71.015 | `decision-problems-for-finitely-presented-groups-examples` |
| 1 | `small-cancellation-and-dehn-algorithms-examples` | B | group-theory | 71.016 | `small-cancellation-and-dehn-algorithms` |
| 1 | `inverse-systems-profinite-groups-and-completion` | A | group-theory | 302.013 | `graphs-of-groups-and-bass-serre-theory-examples` |
| 1 | `inverse-systems-profinite-groups-and-completion-examples` | B | group-theory | 302.014 | `inverse-systems-profinite-groups-and-completion` |
| 7 | `braided-and-symmetric-monoidal-categories` | A | category-theory | 365.029 | `closed-monoidal-categories-and-the-internal-hom-examples` |
| 7 | `braided-and-symmetric-monoidal-categories-examples` | B | category-theory | 365.03 | `braided-and-symmetric-monoidal-categories` |
| 10 | `whitney-embedding-tubular-neighbourhoods-and-approximation` | A | differential-geometry | 455 | `smooth-partitions-of-unity-and-exhaustions`, `smooth-vector-bundles-and-sections`, `sard-theorem-and-transversality`, `homotopy-and-homotopy-equivalence` |
| 10 | `whitney-embedding-tubular-neighbourhoods-and-approximation-examples` | B | differential-geometry | 456 | `whitney-embedding-tubular-neighbourhoods-and-approximation` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `small-cancellation-and-dehn-algorithms` — Small Cancellation and Dehn Algorithms (26 item(s))

- `def-symmetrisation-of-a-relator-set` · definition — The symmetrisation of a relator set closes under inverses and cyclic conjugates
- `lem-symmetrisation-has-the-same-normal-closure` · lemma — A relator set and its symmetrisation have the same normal closure
- `def-piece-in-a-symmetrised-presentation` · definition — A piece is a common initial segment occurring in two distinct places of a symmetrised relator set
- `def-small-cancellation-conditions-c-lambda-and-c-prime-lambda` · definition — The small-cancellation conditions C(lambda) and C prime(lambda)
- `def-small-cancellation-condition-t-q` · definition — The condition T(q) forbids short cycles of pieces in the relator graph
- `lem-c-prime-lambda-implies-c-lambda` · lemma — C prime(lambda) implies C(lambda)
- `def-van-kampen-diagram-boundary-label-and-area` · definition — Van Kampen diagrams, boundary labels, and diagram area for a presentation
- `lem-boundary-label-of-a-van-kampen-diagram-is-null-in-the-presented-group` · lemma — The boundary label of a van Kampen diagram is trivial in the presented group
- `thm-van-kampen-lemma` · theorem — A word is trivial in a presented group exactly when it bounds a finite van Kampen diagram
- `thm-diagram-area-agrees-with-algebraic-relator-area` · theorem — Minimal van Kampen area agrees with minimal algebraic relator area
- `def-reduced-van-kampen-diagram` · definition — A reduced van Kampen diagram has no cancellable adjacent faces
- `lem-minimal-area-diagrams-are-reduced` · lemma — A minimal-area van Kampen diagram is reduced
- `lem-curvature-count-for-reduced-c-prime-one-sixth-diagrams` · lemma — Reduced C prime(1/6) diagrams satisfy the standard combinatorial curvature count
- `thm-greendlinger-lemma-for-c-prime-one-sixth-presentations` · theorem — In a reduced C prime(1/6) null diagram, some face contributes more than half of its boundary to the outer boundary
- `def-dehn-reduced-word-and-dehn-presentation` · definition — Dehn-reduced words and Dehn presentations
- `lem-dehn-replacement-strictly-shortens-a-word` · lemma — A Dehn replacement shortens the word strictly
- `thm-dehn-algorithm-solves-the-word-problem` · theorem — Dehn's algorithm terminates and decides the word problem for a Dehn presentation
- `cor-finite-c-prime-one-sixth-presentations-have-solvable-word-problem` · corollary — Finite C prime(1/6) presentations have solvable word problem
- `cor-linear-isoperimetric-bound-for-finite-c-prime-one-sixth-presentations` · corollary — Finite C prime(1/6) presentations satisfy a linear isoperimetric inequality
- `thm-torsion-theorem-for-c-prime-one-sixth-groups` · theorem — In a C prime(1/6) group, every nontrivial torsion element is conjugate to a power of a relator root
- `cor-c-prime-one-sixth-with-no-proper-power-relators-is-torsion-free` · corollary — A C prime(1/6) presentation with no proper-power relators defines a torsion-free group
- `fs-every-repeated-subword-is-a-piece` · false-statement — FALSE: every repeated subword of a relator is a piece
- `fs-c-prime-one-sixth-means-every-relator-has-length-at-most-six` · false-statement — FALSE: C prime(1/6) means every relator has length at most six
- `fs-greendlinger-lemma-applies-to-every-finitely-presented-group` · false-statement — FALSE: Greendlinger's lemma holds for every finite presentation
- `fs-dehn-reduction-is-the-same-as-free-reduction` · false-statement — FALSE: Dehn reduction is just free reduction under another name
- `fs-no-proper-power-relators-alone-implies-torsion-free` · false-statement — FALSE: a presentation with no proper-power relators is automatically torsion-free

### `small-cancellation-and-dehn-algorithms-examples` — Small Cancellation and Dehn Algorithms — Examples (7 item(s))

- `ex-symmetrising-a-one-relator-presentation` · example — Symmetrising a one-relator presentation adds the cyclic conjugates and inverse cyclic conjugates
- `ex-finding-pieces-and-checking-c-prime-one-sixth` · example — A concrete relator set with its pieces and a direct C prime(1/6) check
- `ex-a-dehn-reduction-sequence` · example — A trivial word is reduced to the empty word by successive Dehn moves
- `ex-a-greendlinger-cell-in-a-van-kampen-diagram` · example — A minimal diagram exhibits the Greendlinger face covering more than half its boundary
- `ex-a-torsion-free-small-cancellation-group` · example — A strict C prime(1/6) presentation with no proper-power relators defines a torsion-free group
- `cex-an-overlap-at-exactly-one-sixth-under-the-strict-convention` · counterexample — An overlap of exactly one sixth shows that the strict C prime(1/6) inequality is not cosmetic
- `cex-a-no-proper-power-presentation-with-torsion-outside-small-cancellation` · counterexample — No proper-power relators alone do not prevent torsion outside small cancellation

### `inverse-systems-profinite-groups-and-completion` — Inverse Systems Profinite Groups and Completion (33 item(s))

- `def-directed-set-and-inverse-system-of-groups` · definition — A directed set and an inverse system of groups indexed by it
- `def-compatible-tuple-inverse-limit-of-groups` · definition — The inverse limit is the set of compatible tuples in the Cartesian product
- `lem-compatible-tuples-form-a-subgroup` · lemma — Compatible tuples form a subgroup of the product group
- `def-coordinate-projections-from-an-inverse-limit` · definition — The inverse limit has its canonical coordinate projection maps
- `thm-concrete-inverse-limit-universal-property-in-groups` · theorem — The compatible-tuple construction satisfies the inverse-limit universal property in groups
- `def-inverse-limit-topology-for-finite-discrete-groups` · definition — The inverse limit of finite groups carries the subspace topology from the product of discrete factors
- `lem-inverse-limit-of-finite-discrete-groups-is-a-closed-topological-subgroup` · lemma — The inverse limit of finite discrete groups is a closed topological subgroup of the full product
- `thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected` · theorem — An inverse limit of finite discrete groups is Hausdorff, compact, and totally disconnected
- `def-profinite-group-by-inverse-limit` · definition — A profinite group is a topological group isomorphic to an inverse limit of finite discrete groups
- `lem-kernels-of-finite-projections-form-an-open-normal-neighbourhood-basis` · lemma — The kernels of the finite coordinate projections form an open normal neighbourhood basis at the identity
- `thm-continuity-into-an-inverse-limit-is-coordinatewise` · theorem — A map into an inverse limit is continuous exactly when all coordinate composites are continuous
- `def-cofinal-subsystem` · definition — A cofinal subsystem meets every index eventually
- `thm-cofinal-subsystems-have-isomorphic-inverse-limits` · theorem — A cofinal subsystem has the same inverse limit up to canonical isomorphism
- `def-totally-disconnected-and-totally-separated-spaces` · definition — Totally disconnected spaces and totally separated spaces
- `thm-compact-hausdorff-total-disconnectedness-and-total-separatedness-agree` · theorem — For compact Hausdorff spaces, total disconnectedness and total separatedness are equivalent
- `thm-topological-characterisation-of-profinite-groups` · theorem — A topological group is profinite exactly when it is compact, Hausdorff, and totally disconnected, equivalently when a compact Hausdorff group has a basis of open normal subgroups with finite quotients
- `def-profinite-topology-on-an-abstract-group` · definition — The profinite topology on a group uses finite-index normal subgroups as an identity-neighbourhood basis
- `def-finite-residual-and-residually-finite-group` · definition — The finite residual is the intersection of the finite-index normal subgroups, and a group is residually finite when that intersection is trivial
- `def-profinite-completion-of-an-abstract-group` · definition — The profinite completion is the inverse limit of the finite quotients G over N
- `def-canonical-map-to-the-profinite-completion` · definition — The canonical map sends g to its coherent system of residue classes
- `thm-kernel-and-density-of-the-canonical-map-to-the-profinite-completion` · theorem — The canonical map to the profinite completion has kernel equal to the finite residual and has dense image
- `cor-the-canonical-map-is-injective-iff-the-group-is-residually-finite` · corollary — The canonical map is injective exactly when the group is residually finite
- `thm-universal-property-of-profinite-completion` · theorem — The profinite completion is initial among continuous homomorphisms from G to profinite groups
- `thm-profinite-completion-is-functorial` · theorem — A homomorphism induces a continuous homomorphism of profinite completions
- `rem-malcev-finitely-generated-linear-groups-are-residually-finite` · remark — Malcev's theorem gives a canonical non-load-bearing source of residually finite groups
- `thm-free-groups-are-residually-finite` · theorem — Free groups are residually finite
- `def-subgroup-separable-and-lerf` · definition — A subgroup is separable when it is closed in the profinite topology, and a group is LERF when every finitely generated subgroup is separable
- `thm-finitely-generated-free-groups-are-subgroup-separable` · theorem — Every finitely generated free group is subgroup separable
- `fs-an-inverse-limit-of-groups-may-be-empty` · false-statement — FALSE: an inverse limit of groups can be empty
- `fs-projections-from-every-surjective-inverse-system-are-surjective-in-zf` · false-statement — FALSE: every inverse limit of surjective finite-group systems has surjective coordinate projections in ZF
- `fs-the-canonical-map-to-profinite-completion-is-always-injective` · false-statement — FALSE: the canonical map to the profinite completion is always injective
- `fs-a-compact-hausdorff-group-is-profinite-without-total-disconnectedness` · false-statement — FALSE: every compact Hausdorff topological group is profinite
- `fs-two-groups-with-isomorphic-profinite-completions-are-isomorphic` · false-statement — FALSE: isomorphic profinite completions force the original groups to be isomorphic

### `inverse-systems-profinite-groups-and-completion-examples` — Inverse Systems Profinite Groups and Completion — Examples (7 item(s))

- `ex-an-eventually-constant-inverse-system` · example — An eventually constant inverse system has inverse limit equal to its stable value
- `ex-the-profinite-completion-of-a-finite-group` · example — A finite group is canonically isomorphic to its profinite completion
- `ex-the-profinite-completion-of-the-integers` · example — The profinite completion of the integers is the inverse limit of the rings Z mod n
- `ex-a-residually-finite-free-group` · example — A free group separates one nontrivial reduced word by a finite quotient
- `ex-a-dense-nonclosed-copy-of-a-group-in-its-completion` · example — The integers sit densely but not closedly inside their profinite completion
- `ex-a-non-residually-finite-baumslag-solitar-group` · example — A Baumslag-Solitar group gives a noninjective completion map
- `cex-same-finite-quotients-do-not-trivially-identify-abstract-groups` · counterexample — Nonisomorphic groups can share the same profinite completion

### `braided-and-symmetric-monoidal-categories` — Braided and Symmetric Monoidal Categories (29 item(s))

- `def-braiding` · definition — Braiding
- `def-braided-monoidal-category` · definition — Braided monoidal category
- `thm-the-inverse-braiding-is-a-braiding` · theorem — The inverse braiding is again a braiding
- `thm-the-braiding-is-compatible-with-the-unit-constraints` · theorem — The braiding is compatible with the unit constraints
- `thm-in-a-strict-braided-monoidal-category-the-braiding-satisfies-the-yang-baxter-equation` · theorem — In a strict braided monoidal category the braiding satisfies the Yang-Baxter equation
- `def-symmetric-monoidal-category` · definition — Symmetric monoidal category
- `thm-in-the-presence-of-the-symmetry-axiom-one-hexagon-implies-the-other` · theorem — In the presence of symmetry, one hexagon implies the other
- `def-braided-monoidal-functor` · definition — Braided monoidal functor
- `rem-being-braided-is-a-property-of-a-monoidal-functor` · remark — Being braided is a property of a strong monoidal functor
- `thm-the-cartesian-swap-braiding-is-a-symmetry` · theorem — The cartesian swap braiding is a symmetry
- `thm-the-double-braiding-center-is-symmetric` · theorem — The double-braiding center is a symmetric monoidal subcategory
- `thm-every-braided-monoidal-category-is-monoidally-equivalent-to-a-strict-braided-one` · theorem — Every braided monoidal category is monoidally equivalent to a strict braided one
- `def-braid-group-by-the-artin-presentation` · definition — The braid group by Artin presentation
- `thm-the-two-strand-braid-group-is-infinite-cyclic` · theorem — The two-strand braid group is infinite cyclic
- `thm-the-symmetric-group-has-the-coxeter-presentation` · theorem — The symmetric group has the Coxeter presentation
- `thm-the-braid-group-surjects-onto-the-symmetric-group` · theorem — The braid group surjects onto the symmetric group
- `def-the-braid-category` · definition — The braid category
- `cex-the-braid-category-is-braided-but-not-symmetric` · counterexample — The braid category is braided but not symmetric
- `thm-symmetric-coherence` · theorem — Symmetric coherence
- `cor-unbracketed-and-unordered-tensor-strings-are-well-defined-in-a-symmetric-monoidal-category` · corollary — Labelled unbracketed and unordered tensor strings are well defined in a symmetric monoidal category
- `thm-braided-coherence-fails-in-the-symmetric-form` · theorem — Braided coherence fails in the symmetric form
- `fs-every-diagram-built-from-the-associator-and-the-braiding-commutes` · false-statement — FALSE: every diagram built from the associator and the braiding commutes
- `thm-the-braid-category-is-the-free-strict-braided-monoidal-category-on-one-generator` · theorem — The braid category is the free strict braided monoidal category on one generator
- `thm-braided-coherence-via-underlying-braids` · theorem — Braided coherence is controlled by underlying braids
- `cor-two-canonical-braided-composites-agree-exactly-when-their-underlying-braids-agree` · corollary — Two canonical braided composites agree exactly when their underlying braids agree
- `rem-the-symmetric-and-braided-coherence-theorems-compare-s-n-with-b-n` · remark — The symmetric and braided coherence theorems compare S_n with B_n
- `fs-every-braided-monoidal-category-is-equivalent-to-a-strict-commutative-one` · false-statement — FALSE: every braided monoidal category is equivalent to a strict commutative one
- `thm-monoid-objects-in-a-braided-monoidal-category-form-a-monoidal-category` · theorem — Monoid objects in a braided monoidal category form a monoidal category
- `cor-monoid-objects-in-a-symmetric-monoidal-category-form-a-symmetric-monoidal-category` · corollary — Monoid objects in a symmetric monoidal category form a symmetric monoidal category

### `braided-and-symmetric-monoidal-categories-examples` — Braided and Symmetric Monoidal Categories - Examples (7 item(s))

- `ex-the-swap-braiding-on-sets` · example — The swap map on sets is the cartesian braiding
- `ex-the-braid-group-on-three-strands` · example — The braid group on three strands and its quotient to S_3
- `ex-the-hexagon-checked-for-cartesian-products` · example — The hexagon checked for cartesian products
- `ex-the-sign-braiding-on-supervector-spaces` · example — Supervector spaces with the sign braiding
- `ex-the-two-strand-braiding-in-the-braid-category-has-infinite-order` · example — The two-strand braiding in the braid category has infinite order
- `ex-two-canonical-maps-with-different-underlying-braids` · example — Two canonical maps with different underlying braids do not agree
- `ex-commutative-monoid-objects-in-sets-are-ordinary-commutative-monoids` · example — Commutative monoid objects in sets are ordinary commutative monoids

### `whitney-embedding-tubular-neighbourhoods-and-approximation` — Whitney Embedding Tubular Neighbourhoods and Approximation (44 item(s))

- `lem-a-finite-coordinate-bump-map-embeds-a-compact-manifold-in-some-euclidean-space` · lemma — A finite coordinate-bump map embeds a compact manifold in some Euclidean space
- `lem-a-countable-coordinate-bump-map-embeds-a-manifold-in-countable-euclidean-data` · lemma — A countable coordinate-bump map embeds a manifold in countable Euclidean data
- `lem-a-smooth-exhaustion-separates-the-locally-finite-chart-bands` · lemma — A smooth exhaustion separates the locally finite chart bands
- `thm-every-smooth-manifold-embeds-in-some-finite-dimensional-euclidean-space` · theorem — Every smooth manifold embeds in some finite-dimensional Euclidean space
- `prop-a-proper-injective-immersion-is-a-smooth-embedding` · proposition — A proper injective immersion is a smooth embedding
- `def-secant-and-tangent-direction-maps-of-an-euclidean-embedding` · definition — Secant and tangent direction maps of a Euclidean embedding
- `lem-a-generic-linear-projection-preserves-injectivity-and-immersion` · lemma — A generic linear projection preserves injectivity and immersion
- `lem-a-generic-projection-can-preserve-properness` · lemma — A generic projection can preserve properness
- `thm-weak-whitney-proper-embedding-theorem` · theorem — The weak Whitney proper embedding theorem
- `thm-weak-whitney-immersion-theorem` · theorem — The weak Whitney immersion theorem
- `rem-strong-whitney-embedding-theorem` · remark — The strong Whitney embedding theorem
- `rem-strong-whitney-immersion-theorem` · remark — The strong Whitney immersion theorem
- `def-tubular-neighbourhood-of-an-embedded-submanifold` · definition — Tubular neighbourhoods of embedded submanifolds
- `def-normal-addition-map-for-a-euclidean-submanifold` · definition — The normal addition map for a Euclidean submanifold
- `lem-normal-addition-is-a-local-diffeomorphism-along-the-zero-section` · lemma — Normal addition is a local diffeomorphism along the zero section
- `lem-variable-radius-injectivity-for-normal-addition` · lemma — Variable-radius injectivity for normal addition
- `thm-euclidean-tubular-neighbourhood-theorem` · theorem — The Euclidean tubular neighbourhood theorem
- `cor-a-closed-euclidean-submanifold-has-a-smooth-neighbourhood-retraction` · corollary — A closed Euclidean submanifold has a smooth neighborhood retraction
- `prop-nearest-point-projection-is-the-tubular-retraction-after-shrinking` · proposition — Nearest-point projection is the tubular retraction after shrinking
- `thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold` · theorem — The tubular neighbourhood theorem in a smooth ambient manifold
- `cor-every-closed-embedded-submanifold-has-a-smooth-neighbourhood-retraction` · corollary — Every closed embedded submanifold has a smooth neighborhood retraction
- `prop-two-tubular-neighbourhood-germs-are-isomorphic-near-the-zero-section` · proposition — Two tubular neighbourhood germs are isomorphic near the zero section
- `def-positive-continuous-error-function-for-strong-approximation` · definition — Positive continuous error functions for strong approximation
- `thm-whitney-approximation-for-euclidean-valued-maps` · theorem — Whitney approximation for Euclidean-valued maps
- `thm-relative-whitney-approximation-for-euclidean-valued-maps` · theorem — Relative Whitney approximation for Euclidean-valued maps
- `lem-a-fine-euclidean-approximation-lands-in-a-prescribed-tubular-neighbourhood` · lemma — A fine Euclidean approximation lands in a prescribed tubular neighbourhood
- `thm-whitney-approximation-for-manifold-valued-maps` · theorem — Whitney approximation for manifold-valued maps
- `thm-relative-whitney-approximation-for-manifold-valued-maps` · theorem — Relative Whitney approximation for manifold-valued maps
- `cor-every-continuous-map-between-smooth-manifolds-is-homotopic-to-a-smooth-map` · corollary — Every continuous map between smooth manifolds is homotopic to a smooth map
- `thm-continuously-homotopic-smooth-maps-are-smoothly-homotopic` · theorem — Continuously homotopic smooth maps are smoothly homotopic
- `cor-the-smooth-and-continuous-homotopy-categories-of-smooth-manifolds-have-the-same-morphism-sets` · corollary — The smooth and continuous homotopy categories of smooth manifolds have the same morphism sets
- `cor-a-continuous-map-from-a-closed-subset-extends-smoothly-exactly-when-it-has-a-continuous-extension-and-is-smooth-near-the-subset` · corollary — A continuous map from a closed subset extends smoothly exactly when it has a continuous extension and is smooth near the subset
- `lem-a-tubular-target-produces-a-submersive-finite-dimensional-perturbation-family` · lemma — A tubular target produces a submersive finite-dimensional perturbation family
- `thm-transversality-homotopy-theorem` · theorem — The transversality homotopy theorem
- `thm-strong-whitney-approximation-by-transverse-maps` · theorem — Strong Whitney approximation by transverse maps
- `cor-transverse-maps-are-dense-in-the-strong-smooth-topology` · corollary — Transverse maps are dense in the strong smooth topology
- `cor-a-smooth-section-can-be-perturbed-transverse-to-the-zero-section` · corollary — A smooth section transverse to the zero section has a submanifold zero set
- `prop-relative-transversality-preserves-a-map-on-a-closed-good-region` · proposition — Relative transversality preserves a map on a closed good region
- `fs-every-injective-immersion-is-a-proper-embedding` · false-statement — FALSE: every injective immersion is a proper embedding
- `fs-an-arbitrary-linear-projection-of-an-embedding-is-an-embedding` · false-statement — FALSE: an arbitrary linear projection of an embedding is an embedding
- `fs-every-proper-embedding-of-an-n-manifold-lands-in-r-n` · false-statement — FALSE: every proper embedding of an n-manifold lands in R^n
- `fs-every-noncompact-submanifold-has-a-uniform-radius-tubular-neighbourhood` · false-statement — FALSE: every noncompact submanifold has a uniform-radius tubular neighbourhood
- `fs-the-tubular-neighbourhood-retraction-is-canonical` · false-statement — FALSE: the tubular-neighbourhood retraction is canonical
- `fs-uniform-approximation-is-the-right-global-notion-on-every-noncompact-manifold` · false-statement — FALSE: uniform approximation is the right global notion on every noncompact manifold

### `whitney-embedding-tubular-neighbourhoods-and-approximation-examples` — Whitney Embedding Tubular Neighbourhoods and Approximation — Examples (10 item(s))

- `ex-the-standard-circle-and-its-annular-tubular-neighbourhood` · example — The standard circle and its annular tubular neighbourhood
- `ex-the-sphere-and-its-two-sided-normal-tube` · example — The sphere and its two-sided normal tube
- `ex-a-noncompact-embedded-curve-with-no-uniform-tubular-radius` · example — A noncompact embedded curve with no uniform tubular radius
- `ex-a-coordinate-bump-embedding-of-the-circle-in-euclidean-space` · example — A coordinate-bump embedding of the circle in Euclidean space
- `ex-projecting-a-space-curve-can-create-a-double-point` · example — Projecting a space curve can create a double point
- `ex-smoothing-a-piecewise-linear-real-valued-function-relative-to-a-closed-set` · example — Smoothing a piecewise-linear real-valued function relative to a closed set
- `ex-smoothing-a-continuous-circle-valued-map-through-an-annular-retraction` · example — Smoothing a continuous circle-valued map through an annular retraction
- `ex-a-generic-section-of-a-line-bundle-has-a-hypersurface-zero-set` · example — A generic section of a line bundle has a hypersurface zero set
- `cex-a-nearest-point-projection-is-not-unique-outside-the-tubular-radius` · counterexample — A nearest-point projection need not be unique outside the tubular radius
- `cex-a-smooth-approximation-without-relative-control-destroys-prescribed-values` · counterexample — A smooth approximation without relative control destroys prescribed values

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
| `cor-linear-isoperimetric-bound-for-finite-c-prime-one-sixth-presentations` | `small-cancellation-and-dehn-algorithms` | gpt-5.6-terra | `0998be64860a86691344604688f272458beaffa1dd0d3089ebd4c5b7ae692c10` |
| `def-profinite-completion-of-an-abstract-group` | `inverse-systems-profinite-groups-and-completion` | gpt-5.6-terra | `4e2c8fd94b3a57a9584dfe32f1b6a2de7a79e16ee74944080d89d020a22ce56b` |
| `def-secant-and-tangent-direction-maps-of-an-euclidean-embedding` | `whitney-embedding-tubular-neighbourhoods-and-approximation` | gpt-5.6-terra | `f352d1a03f8e0dbb392ca475a603270b083fcdc64a9a6c147e756726ac59be84` |
| `def-tubular-neighbourhood-of-an-embedded-submanifold` | `whitney-embedding-tubular-neighbourhoods-and-approximation` | gpt-5.6-terra | `ad505013e15547729d2ee57e006b8a1a817fd081ec5aaeb0679151e9c21e5388` |
| `ex-projecting-a-space-curve-can-create-a-double-point` | `whitney-embedding-tubular-neighbourhoods-and-approximation-examples` | gpt-5.6-terra | `df4c99548dcde4aeb82196108dc99d2b8dc15b6561f71ca7893dc3851deb262b` |
| `fs-an-arbitrary-linear-projection-of-an-embedding-is-an-embedding` | `whitney-embedding-tubular-neighbourhoods-and-approximation` | gpt-5.6-terra | `7673e0e0fe18ee835054a37c49df2d90631f2685fc54009c590cd94b2990ca6d` |
| `lem-a-smooth-exhaustion-separates-the-locally-finite-chart-bands` | `whitney-embedding-tubular-neighbourhoods-and-approximation` | gpt-5.6-terra | `0817876b17cc91e0abe5739713a0d668425ed2de5c95c96a92c3dce55f359cce` |
| `lem-curvature-count-for-reduced-c-prime-one-sixth-diagrams` | `small-cancellation-and-dehn-algorithms` | gpt-5.6-terra | `89a271981fc4282cb7398858d1e5e0b19e2c7409c1651645b1dcdcce75f1b6cd` |
| `prop-relative-transversality-preserves-a-map-on-a-closed-good-region` | `whitney-embedding-tubular-neighbourhoods-and-approximation` | gpt-5.6-terra | `b11fa6a62051a7a3993f6860befab66d358b01d3856f50bfdbd65e173451ed80` |
| `thm-euclidean-tubular-neighbourhood-theorem` | `whitney-embedding-tubular-neighbourhoods-and-approximation` | gpt-5.6-terra | `288c5f4abe0fb6d39e5bfa2c7ee13ef31da4535f1250f813af492cae866f549a` |
| `thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected` | `inverse-systems-profinite-groups-and-completion` | gpt-5.6-terra | `8f7e3b5b05096245e815b46e31454b673263b65dba2e2dff2481eba9dfb2137a` |
| `thm-profinite-completion-is-functorial` | `inverse-systems-profinite-groups-and-completion` | gpt-5.6-terra | `7821ad73f851d777ce486b89a6bbcd1c2b5b7702d10a09003160ffcced77f864` |
| `thm-the-double-braiding-center-is-symmetric` | `braided-and-symmetric-monoidal-categories` | gpt-5.6-terra | `6153ea0ad61d6607e745c91440b582956fca8974c5d1223164806f3efcf8e817` |
| `thm-topological-characterisation-of-profinite-groups` | `inverse-systems-profinite-groups-and-completion` | gpt-5.6-terra | `50d55f9a94a7ff1f82253d14f6ba846de01313dcc94a55e77aa941cf6b2a6d17` |
| `thm-universal-property-of-profinite-completion` | `inverse-systems-profinite-groups-and-completion` | gpt-5.6-terra | `fe384081b4492bedba48cbd551b915cb19ba36b51eff4dbca97dbf1fe7d09ddb` |
| `thm-weak-whitney-proper-embedding-theorem` | `whitney-embedding-tubular-neighbourhoods-and-approximation` | gpt-5.6-terra | `9931ee06d3140fed9732f64e8c74cb3cba695e05d4fb6555edda56ed37456fde` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 8 — exact closure recovery, `frontier-28`

Read `research/frontier-28-judge-closure.json`,
`research/frontier-28-judge.jsonl`,
`research/frontier-28-judge-adjudications.jsonl`, and the generated `by_item`
ownership map in `research/frontier-28-step8-scope.json`. Take only current
unadjudicated `(id, model, context_sha256)` rows owned by this group; leave
other groups' rows untouched. A row owned by no group is a reported blocker,
not a row to discard.

Append one exact adjudication outcome per owned row. Only
`confirmed_fatal` licenses its coherent repair and matching ledger row; update
only records made stale by that repair. Send a concrete other-group finding to
`research/frontier-28-step8-cross-group.jsonl`, never repair that item.

Every `confirmed_fatal` row must also set `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`. Do not use a descriptive
defect-ledger subclass in that field.

Write `research/frontier-28-alpha-step8-closure-recovery-<group>.md` with the rows
handled, outcomes, licensed repairs, rejudge targets, cross-group alerts, and
blockers. Preserve shared append-only ledgers.
