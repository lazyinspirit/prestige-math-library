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
label: adjudicate-rejudge-c-round-1

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
  "group": "c",
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
      "id": "cex-a-closed-subspace-need-not-have-a-best-approximation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-bertrand-finite-range-verification",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-coordinate-projections-and-inclusions-on-product-banach-spaces",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-evaluation-functional-on-c-of-k",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-first-and-second-mertens-numerics",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-chebyshev-functions-prime-power-comparison",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-weighted-von-mangoldt-harmonic-estimate",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-lambda-g-has-operator-norm-equal-to-the-l-q-norm",
      "scope": "run",
      "owner": "c"
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
      "id": "thm-third-mertens-theorem-for-primes",
      "scope": "run",
      "owner": "c"
    }
  ],
  "live_tuples": [
    {
      "id": "cex-a-closed-subspace-need-not-have-a-best-approximation",
      "model": "gpt-5.6-terra",
      "context_sha256": "64b43e2f5beaf62c7e2b990e85f03ea4fbc7dec9e6687115a3ee5aa5afc49e75",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "ex-bertrand-finite-range-verification",
      "model": "gpt-5.6-terra",
      "context_sha256": "43d1ec9eb8464dab31d1a10be1d1f19b69f0e6d90ade40e79372556903ba2d0d",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "ex-coordinate-projections-and-inclusions-on-product-banach-spaces",
      "model": "gpt-5.6-terra",
      "context_sha256": "81ae81ad3e0e0fc315470564239d80e9f6570932731a3f70e33b6136e628ade1",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "ex-evaluation-functional-on-c-of-k",
      "model": "gpt-5.6-terra",
      "context_sha256": "89ba0cae799fa8a73abbb07fdc3d7b97600043d025737fdc7c7675414058b7c4",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "ex-first-and-second-mertens-numerics",
      "model": "gpt-5.6-terra",
      "context_sha256": "a9d14cb36453d20082851c09104b80d1ebe73faa87bfbff3cd625daab7c0514f",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "lem-chebyshev-functions-prime-power-comparison",
      "model": "gpt-5.6-terra",
      "context_sha256": "5d876f95b5d75b6f0a88c4efcd92f862d3ca63b193a909de6462890b36a9075f",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "lem-weighted-von-mangoldt-harmonic-estimate",
      "model": "gpt-5.6-terra",
      "context_sha256": "9e70072ce19cccb7c2e35176265850921ff5699420346ef8df7f287d37fcc1eb",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "prop-lambda-g-has-operator-norm-equal-to-the-l-q-norm",
      "model": "gpt-5.6-terra",
      "context_sha256": "b6ce31362ee948b3faecd416a3845e17beb2c65eb42bf2a87ea681fece8c16f5",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-an-l-q-function-defines-a-bounded-linear-functional-on-l-p",
      "model": "gpt-5.6-terra",
      "context_sha256": "4851ff35769ae232cb1ab673c45eaf9719cc48e1961568f2877046b9b53c4e4f",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-arbitrary-measure-duality-for-l-p-when-one-less-p-less-infinity",
      "model": "gpt-5.6-terra",
      "context_sha256": "cebdf5468d780fef7649a4c8fba5fd7f0abaac5237828a76d586bc07751296b4",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-third-mertens-theorem-for-primes",
      "model": "gpt-5.6-terra",
      "context_sha256": "b2f0c75472179dc4ad10d3a8b48875126a27e32ce1cc82ad94d4ac9b40fb7b23",
      "scope": "run",
      "status": "unadjudicated"
    }
  ]
}
```

---

# Step 8 — group **c**, run `frontier-28`

You are the group Alpha for batches **4**, **5**, **6**: 3 A/B pair(s), 6 page(s), 80 item(s), 11 open rejection(s) over 11 item(s).

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

| item | page | model | context_sha256 |
|---|---|---|---|
| `cex-a-closed-subspace-need-not-have-a-best-approximation` | `bounded-linear-operators-and-quotient-spaces-examples` | gpt-5.6-terra | `64b43e2f5beaf62c7e2b990e85f03ea4fbc7dec9e6687115a3ee5aa5afc49e75` |
| `ex-bertrand-finite-range-verification` | `chebyshev-bounds-and-mertens-theorems-examples` | gpt-5.6-terra | `43d1ec9eb8464dab31d1a10be1d1f19b69f0e6d90ade40e79372556903ba2d0d` |
| `ex-coordinate-projections-and-inclusions-on-product-banach-spaces` | `bounded-linear-operators-and-quotient-spaces-examples` | gpt-5.6-terra | `81ae81ad3e0e0fc315470564239d80e9f6570932731a3f70e33b6136e628ade1` |
| `ex-evaluation-functional-on-c-of-k` | `bounded-linear-operators-and-quotient-spaces-examples` | gpt-5.6-terra | `89ba0cae799fa8a73abbb07fdc3d7b97600043d025737fdc7c7675414058b7c4` |
| `ex-first-and-second-mertens-numerics` | `chebyshev-bounds-and-mertens-theorems-examples` | gpt-5.6-terra | `a9d14cb36453d20082851c09104b80d1ebe73faa87bfbff3cd625daab7c0514f` |
| `lem-chebyshev-functions-prime-power-comparison` | `chebyshev-bounds-and-mertens-theorems` | gpt-5.6-terra | `5d876f95b5d75b6f0a88c4efcd92f862d3ca63b193a909de6462890b36a9075f` |
| `lem-weighted-von-mangoldt-harmonic-estimate` | `chebyshev-bounds-and-mertens-theorems` | gpt-5.6-terra | `9e70072ce19cccb7c2e35176265850921ff5699420346ef8df7f287d37fcc1eb` |
| `prop-lambda-g-has-operator-norm-equal-to-the-l-q-norm` | `the-duality-of-lp-and-lq` | gpt-5.6-terra | `b6ce31362ee948b3faecd416a3845e17beb2c65eb42bf2a87ea681fece8c16f5` |
| `thm-an-l-q-function-defines-a-bounded-linear-functional-on-l-p` | `the-duality-of-lp-and-lq` | gpt-5.6-terra | `4851ff35769ae232cb1ab673c45eaf9719cc48e1961568f2877046b9b53c4e4f` |
| `thm-arbitrary-measure-duality-for-l-p-when-one-less-p-less-infinity` | `the-duality-of-lp-and-lq` | gpt-5.6-terra | `cebdf5468d780fef7649a4c8fba5fd7f0abaac5237828a76d586bc07751296b4` |
| `thm-third-mertens-theorem-for-primes` | `chebyshev-bounds-and-mertens-theorems` | gpt-5.6-terra | `b2f0c75472179dc4ad10d3a8b48875126a27e32ce1cc82ad94d4ac9b40fb7b23` |

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
