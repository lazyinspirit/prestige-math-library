# Step 8 adjudication — group d

## Scope and outcome

Batches 8 and 10 contain 45 exact rejection tuples. All 45 were adjudicated
against their current item bytes and cited dependencies: 9 are
`confirmed_fatal`, 36 are `confirmed_nonfatal`, and none are `false_positive`.
The nine fatal rows license the nine repairs listed below; no nonfatal item was
edited.

## Adjudications

| item | context_sha256 | outcome | basis |
|---|---|---|---|
| `cex-a-general-member-of-an-abelian-group-need-not-come-from-an-element` | `56fc65e9a4059212aa0930bb4f6f4c0d36cccaa2c654b2a60ad6fb273c5947c6` | `confirmed_nonfatal` | The subgroup/subobject identification is standard and immediately supplied; the witness and conclusion remain correct. |
| `cex-a-language-is-a-set-of-symbols` | `bb131a717bb7fdea228cf267ed75205f8d7daa8e10370ea810dff42771c0c9aa` | `confirmed_nonfatal` | The omitted fact that `01` is a length-two binary word is elementary. |
| `cex-an-effective-encoding-need-not-be-prefix-free` | `3bf3990527da03f7064b494528aec0d85729717eccf3dcb6c4466e5f7c3ef1e7` | `confirmed_nonfatal` | The displayed decoder is a left inverse, so injectivity follows immediately. |
| `cex-the-members-of-an-object-do-not-form-a-group` | `189e86abb754a72ca7a4844914b0e09e39cfd5293c757c85b5763dcfc12701ef` | `confirmed_nonfatal` | The missing equivalence-definition citation is local; the epic automorphism is the required witness. |
| `cex-two-morphisms-agreeing-on-every-member-need-not-be-equal` | `64b4b242c46802f1f7da7ea9a5f444f31226638f7240dcea543f7049a6a4c4b3` | `confirmed_nonfatal` | The missing equivalence-definition citation is local and the common-cover calculation is correct. |
| `def-alphabet-homomorphism-and-induced-word-map` | `eef3e33c8ca2a18cad483af8f3f3e58539b152a3b809b6ad60af592341900f29` | `confirmed_nonfatal` | Finite iterated word concatenation has the evident offset construction; the parenthesization gap is immediate. |
| `def-effective-binary-encoding-and-decoder` | `cfcd925d896493a6af7568a6e74b2eced550718d68ab73083b149dbaefa226f7` | `confirmed_fatal` | The formal decoder condition did not enforce its stated malformed-code output. Repaired. |
| `def-exactness-at-a-node` | `810ed912727cb5820887565c11265a2c4d3cfc7f290df62bfaa924c5448a1314` | `confirmed_nonfatal` | The closing attribution is imprecise, but the image and kernel definitions already make the comparison well typed. |
| `def-language-concatenation-powers-and-kleene-star` | `ef33d695381b62404dc454956d6bc3a2525b437f6ec71078de2b2ab1ab87aaf8` | `confirmed_nonfatal` | Associativity of the explicit offset concatenation closes the parenthesization convention immediately. |
| `def-word-and-language-reversal` | `7413f563e309ae876c4c3b82b20c57d91bebd08607fd8c1942e7c513d7e8bb80` | `confirmed_nonfatal` | For `i<n`, the index `n-1-i` lies in `n` by elementary natural-number arithmetic. |
| `ex-a-member-chase-verifying-monicity` | `9b4d38259d2f6d8276807bdc491c29450c0e29b0c4184aeb0b7617f2fd248d22` | `confirmed_nonfatal` | The common-cover step is exactly the nearby member-equivalence definition. |
| `ex-an-ordinary-element-as-the-member-from-the-integers` | `a1b6bf53fa552a9257075d5054f1b24e4f7498e6ac78ac8ca2e403e0a6380e89` | `confirmed_nonfatal` | Identifying subobjects in `Ab` with subgroup inclusions is an immediate standard specialization. |
| `ex-members-of-an-abelian-group-correspond-to-its-subgroups` | `1a95d52acf82af20ba5b2ccc0040ead633a5bb04bef440e1c39a7e7a7fe9158f` | `confirmed_nonfatal` | The abstract subobject-to-subgroup specialization is correct and locally derivable. |
| `ex-polynomially-related-encodings-preserve-polynomial-size` | `15121b084983b8df9c333d188a94d09a4303f5ab25a6947e482da3ab769bba2a` | `confirmed_fatal` | The claimed effective encodings lacked the total decoders required by the local definition. Repaired. |
| `ex-the-kernel-cokernel-sequence-of-a-composite-of-module-maps` | `4403dfe3a9f08a7e53367ac7535d763b6d32ced5e66042e794e96589ff226efa` | `confirmed_nonfatal` | The given module category supplies the omitted abelian-category domain restriction. |
| `ex-the-splitting-lemma-instantiated-at-the-published-module-theorem` | `054d6739a7592dc4bc3e2d21e3fd7a81aa8806a15baf7973686077b001189996` | `confirmed_fatal` | The proof applied the splitting lemma without a section or retraction. Repaired. |
| `fs-every-effective-encoding-is-prefix-free` | `8252be86e9cf5eea3c3ec8e9da598a7a2f1a2364315dd8835cf9304f37f07cdb` | `confirmed_nonfatal` | Left cancellation of the initial bit is elementary from equality of finite words. |
| `fs-exactness-can-be-defined-without-first-producing-a-canonical-monomorphism` | `1ef68dbcceb962d3ddc04f4dd57dbf85829333ed4e99223bb15d411e19cd643a` | `confirmed_fatal` | The original false claim was already a typed equality of subobject classes, so its refutation was false. Repaired. |
| `fs-member-equivalence-is-transitive-in-any-pointed-category-with-pullbacks` | `4af452d945a5193b581108c0a40f4e4d54fb1826b7ab44e186a7b073ef47e3ca` | `confirmed_fatal` | The stated unital-ring category was not pointed, invalidating the witness. Repaired. |
| `fs-the-members-of-an-object-form-an-abelian-group` | `104573a2037951bf19a2a7d0917fb1d0dcdef3760fa1bce1cc4039ebf1f4fff8` | `confirmed_fatal` | The counterexample only disproved addition induced from representatives, not an unqualified abstract group structure. Repaired. |
| `fs-the-subtraction-rule-produces-a-unique-member` | `5354d188add91eacf2b6f15d97231578128a30e10353ae96abbeea5e1d550483` | `confirmed_nonfatal` | The terse fact label points to the exact existence theorem used by the refutation. |
| `fs-two-morphisms-that-agree-on-every-member-are-equal` | `82abd3a6d599bb5c19eec9bca1b7d2eb26ade6407df121ca8ec23399d6510a46` | `confirmed_nonfatal` | The citation description is overbroad, but the stated counterexample remains correct. |
| `lem-computation-words-agree-with-published-finite-words` | `64f629a758c4bcada4acb2370ca02d6eb7f1e2943f4b6e1ddba9429eb10beb15` | `confirmed_nonfatal` | The published juxtaposition notation has the immediately intended append-letters meaning. |
| `lem-induced-word-map-has-the-free-extension-property` | `9889b0ac00452a0ec91f965fd1c3ae26b0fe789ae35d24c0622ac131a0d979f1` | `confirmed_fatal` | The statement applied a word-domain map directly to an alphabet symbol. Repaired. |
| `lem-kleene-star-has-the-expected-least-closure-property` | `1962c683bb728655fd17de524f1ad87c0898df7d7c694bd2460e722e7b76d0ad` | `confirmed_nonfatal` | The omitted zero case is the elementary identity `u epsilon = u`. |
| `rem-two-routes-to-every-dual-statement` | `5e0aa27f4731375f03b5c3c3e58f9e451e3f1eebee761328318dbab281086c25` | `confirmed_nonfatal` | Formal dualization is valid; the objection is to the breadth of one citation description. |
| `thm-a-cartesian-square-over-an-epimorphism-is-also-cocartesian` | `fe4a1420f7062cf2a223413b5a6f751e35347ea936e45d020a909749e85ddad1` | `confirmed_nonfatal` | Epicity gives the omitted right-end exactness criterion immediately. |
| `thm-a-short-exact-sequence-is-a-kernel-cokernel-pair` | `61a6ff1a238dd735a6ed094660225bc9552e0bf99e7d9f96e636f9e283287b32` | `confirmed_nonfatal` | Exactness supplies the missing reverse subobject inequality and hence the factorization. |
| `thm-ab5-is-equivalent-to-exactness-of-filtered-colimits` | `9f3f31fd760cd148cff2be08ffe58ecb0f4138d0e724a77f31900efb363fee60` | `confirmed_fatal` | The forward implication made a nontrivial unsupported leap from fixed-object subobjects to varying kernels. Repaired from the exact cited source statement. |
| `thm-an-object-is-projective-exactly-when-hom-out-of-it-is-exact` | `4ff51036ec5f42a77e5253fc0a00b1aa1a3f148b9882e02482e2b3348f5dfaf9` | `confirmed_nonfatal` | Additivity of Hom is standard and immediate in an abelian category. |
| `thm-chasing-rule-epimorphy-detected-by-members` | `d0b4d39dc00140785f2a73f0ca9910136c803b34261784fef489dfbfeeb899cb` | `confirmed_nonfatal` | Existence and image identification of the epi-mono factorization are nearby standard facts. |
| `thm-chasing-rule-exactness-detected-by-members` | `d1444c3dcc55f9e05bbee96084d9e3852c21dd06ad6474f00144e1a5d57c2b32` | `confirmed_nonfatal` | Image minimality supplies the omitted one-line factorization inference. |
| `thm-chasing-rule-monicity-by-member-cancellation` | `ad0cf85f98661f1f2fc7316c11d804520b8ba442f56b5edf4154b283c07687de` | `confirmed_nonfatal` | Hom-set subtraction and distributivity are immediate from the abelian-category hypothesis. |
| `thm-chasing-rule-monicity-detected-by-members` | `f42588f000b1dde243734e1f2dccb4acb1eb8fa049da952a6144af281d683752` | `confirmed_nonfatal` | Hom-set subtraction and distributivity are immediate from the abelian-category hypothesis. |
| `thm-chasing-rule-the-subtraction-surrogate` | `1117c975143ee1a0126f74647dad0cbb27e3277344a7f8fbc344cd9fe357cf45` | `confirmed_nonfatal` | Finite pullbacks and pullback-stability of epimorphisms give the stated common epic refinement. |
| `thm-degenerate-exactness-criteria` | `2494f662283aa3a1b2acf8323c9ed90f736fac4cc9da7dcb502725ed599f4455` | `confirmed_nonfatal` | A monomorphism represents its own image by the cited kernel-cokernel facts. |
| `thm-exactness-of-kernel-and-cokernel-sequences-under-endpoint-hypotheses` | `b1354a0014f6cb6eea71190638ecd3dc85e68c58ff121d3848fa8f2635309e4c` | `confirmed_nonfatal` | The fact label abbreviates the cited covering theorem too aggressively, but the proof applies its actual two clauses. |
| `thm-hom-is-left-exact-in-each-variable` | `23d6716e6c46a361632893a047d5cd4c1c4debf86048c3c8eb6e5cf35c918acb` | `confirmed_nonfatal` | Exactness self-duality closes the opposite-category step immediately. |
| `thm-member-equivalence-is-transitive` | `c45203a4865d2b3377abb2a606809a122c06fd987b4ecf3a23d90b5264076efb` | `confirmed_fatal` | The statement omitted the abelian-category hypothesis used by the proof and required by the page's counterexample. Repaired. |
| `thm-members-modulo-equivalence-correspond-to-subobjects` | `9adbedc67380ab2b179b73209f037b2ceb1199c00eef5c4c6d85f7773b8e637c` | `confirmed_nonfatal` | Symmetry is established immediately before transitivity on the same page. |
| `thm-splitting-lemma-in-an-abelian-category` | `e0156c7cde52f5b147745ceb50f4ce914eba07cb7853ab4e3b9acfe9643c2705` | `confirmed_nonfatal` | Kernels are monic and cokernels epic by an elementary universal-property argument. |
| `thm-the-arrow-theoretic-criterion-for-exactness` | `852486bcbc3af461cdc22e2322e54ba81d2cb2e65be188ef8d8b65bbad93b63a` | `confirmed_nonfatal` | The image monomorphism is the kernel of the chosen cokernel by the cited image definition. |
| `thm-the-covering-criterion-for-exactness` | `913c64700a5979e651e5638b62de45bf8acbce328de8bb89e8d7f750e542feba` | `confirmed_nonfatal` | The theorem statement includes `gf=0`; its omission from one fact label is a local citation-restatement gap. |
| `thm-the-kernel-cokernel-sequence-of-a-composite` | `51383e7f7b58cf7d4fa2c5af31d8c082e1be8818b5604e2347604b18c38abfba` | `confirmed_nonfatal` | The zero arrow into an object is monic by the zero-object universal property. |
| `thm-the-kernel-row-and-cokernel-row-of-a-morphism-of-short-exact-sequences-are-exact-at-two-nodes-each` | `78edd68fe984c56633a5d7a70e2376952a5e7bf243b12deb53f52278e636a8b2` | `confirmed_nonfatal` | Monicity of a kernel is an immediate universal-property fact already cited elsewhere in the item. |

## Repairs and rejudge targets

1. `def-effective-binary-encoding-and-decoder` now requires the decoder to
   return `mal` on every word outside the encoding image.
2. `ex-polynomially-related-encodings-preserve-polynomial-size` fixes the
   canonical binary convention and specifies total decoders for both encodings.
3. `ex-the-splitting-lemma-instantiated-at-the-published-module-theorem`
   requires a section or retraction before invoking the splitting lemma.
4. `fs-exactness-can-be-defined-without-first-producing-a-canonical-monomorphism`
   now refutes treating the image as a bare object rather than refuting a
   well-typed equality of established subobject classes.
5. `fs-member-equivalence-is-transitive-in-any-pointed-category-with-pullbacks`
   uses commutative rings without required identities and arbitrary ring maps,
   a pointed category with fibre-product pullbacks.
6. `fs-the-members-of-an-object-form-an-abelian-group` now states the precise
   representative-addition operation disproved by its counterexample.
7. `lem-induced-word-map-has-the-free-extension-property` defines the
   one-letter embedding before comparing `g` on words with `h` on symbols.
8. `thm-ab5-is-equivalent-to-exactness-of-filtered-colimits` invokes the exact
   lattice-equivalence statement in its existing Weibel A.4.6 source.
9. `thm-member-equivalence-is-transitive` now states the required
   abelian-category hypothesis.

All nine repaired items are rejudge targets. Their previous judge contexts are
stale by construction; the engine owns the required rejudge cycle.

## Alerts

There were no incoming alerts, no cross-group seam, and no outgoing
cross-group finding. No published dependency was changed.

## Evidence and checks

- Exact join: 45 expected group-d rejections, 45 unique exact adjudications, 9
  confirmed fatal, 36 confirmed nonfatal, 0 false positives.
- Defect join: all 9 confirmed-fatal tuples have one matching group-d defect
  row with the same pre-edit guard hash.
- Focused precheck: all 8 repaired proof-bearing items passed; the repaired
  definition requires no proof check.
- Focused render check: all 9 repaired items passed YAML, delimiter, wikilink,
  and KaTeX checks.
- Dependency, forward-reference, and external-reference checks exited 0; their
  repository-wide warning inventories predate this group repair.
- Step-8 scope check exited 0: 4 groups, 504 partitioned items, 195 currently
  open rejection rows routed to other groups, and 0 cross-group alerts.
- Step-8 guard was run against `pre-step8`. It recognized all 9 group-d edits
  as licensed, but the whole-run command exited 1 because 28 contemporaneous
  edits owned by other groups did not yet have adjudication rows. No guard pass
  is claimed.
- The group-d defect rows validated and appended. The whole-run defect check
  was also still waiting on 22 confirmed-fatal rows owned by other groups, so
  no whole-run defect-check pass is claimed.

## Changed artifacts

- Appended 45 exact-hash rows to
  `research/frontier-23-judge-adjudications.jsonl`.
- Repaired the 9 rejudge-target item files listed above.
- Added `research/frontier-23-alpha-d-step8-defect-rows.json`, appended its 9
  rows through `tools/defect-ledger.mjs`, and regenerated
  `research/DEFECT-LEDGER.md`.
- Added this report.

## Blockers

Group d has no mathematical, ownership, or access blocker. Whole-run guard and
defect-ledger closure remain pending on other groups' in-flight Step-8 records;
the engine owns their routing, retries, rejudge cycle, and stage transition.
