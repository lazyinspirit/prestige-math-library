# Wave 1b published-repair ledger

Audit stage: A6. Reviewer: Audit-Alpha, GPT 5.6 Sol through the Codex
subscription at `xhigh`. Date: 2026-08-03. All hashes below are raw SHA-256
values of the independently read, pre-stamp file bytes. Adding the delegated
`verification.verified` block afterward changes the raw file hash but not the
mathematical text. The impact receipt for every row is
`research/audit/wave1b-impact-audit.json`; the classification of all 181
changed interfaces is `research/audit/wave1b-impact-classification.json`.

## A4 material repairs certified at A6

The source class and URLs for each row are the matching records in the four
`wave1-*.provenance.jsonl` ledgers. “Deleted” means the entire Fact and every
now-unused dependency/contract use were removed; the cited proposition was not
used by the proof.

| item | exact old text / defect | new text | class and derivation | provenance transition | independent certifier and pre-stamp hash |
|---|---|---|---|---|---|
| `cex-proper-subspace-with-an-equinumerous-basis` | `[L8] If dim_F V=n and U is a linear subspace of V with dim_F U=n, then U=V.` | `[L8]` deleted. | Citation precision: unused finite-dimensional theorem in an infinite-dimensional witness. | untagged → `ai-altered` / `ai-generated` | LA/NT Sol lane; `482acf957fde21664d1140e680af23d8f8ba275f6db86466cbc8ea57529eca4a` |
| `lem-every-integer-above-one-has-a-prime-divisor` | `[L1]` restated divisibility and `[L7]` restated the integer-ring laws, but neither licensed a numbered step. | `[L1]`, `[L7]`, and their unused edges deleted. | Citation precision; the least-divisor proof is elementary. The ledger now accurately says LibreTexts states the existence theorem rather than attributing this proof to it. | untagged → `ai-altered` / `ai-generated` | LA/NT Sol lane; `062c61783d4bd833ffb1ce7017db6133fdaba6eb15aac37109c5bc83300eee78` |
| `cor-factorisation-of-a-nonzero-integer` | `[L9] 1 != -1.` | `[L9]` and unused edges deleted. | Citation precision: the proof does not use the inequality. | untagged → `literature-derived` / `ai-generated` | LA/NT Sol lane; `45c79305a752858d459aa9c95581bc18932e899963976290e38225bebf5ef0df` |
| `lem-p-adic-valuation-additive` | `[L8] Addition on N is associative and commutative.` | `[L8]` and unused edges deleted. | Citation precision: no numbered step invokes those laws through that Fact. | untagged → `ai-altered` / `ai-generated` | LA/NT Sol lane; `dd8e29fe700e8c00fb3629717d976d439b021d40ad97b8eab0706e97f7fff358` |
| `thm-canonical-prime-factorisation` | `[L10]` integer cancellation, `[L11]` factorisation existence/uniqueness, and `[L12]` Euclid’s lemma were declared but unused. | `[L10]`–`[L12]` and newly unused edges deleted. | Citation precision; the current induction uses its remaining labelled inputs. | untagged → `ai-altered` / `ai-generated` | LA/NT Sol lane; `e5fb11862f40678650fe00ad78e3ecbde81a754fe0e7704a7cbc4d27f80ae391` |
| `thm-gcd-and-lcm-from-valuations` | `[L8]` restated reflexivity/transitivity and the definition of divisibility but licensed no step. | `[L8]` and unused edges deleted. | Citation precision. | untagged → `ai-altered` / `ai-generated` | real Sol lane; `81719225053aa75118d2c040c1b3a800d0c28418c5525434ee2e7b106caec0c1` |
| `ex-no-rational-square-root-of-three` | `[L7]` bundled primality, unique factorisation, gcd, divisibility, and unit results without a numbered use. | `[L7]` and unused edges deleted. | Citation precision; the active argument is licensed through the retained corollary. | untagged → `ai-altered` / `ai-generated` | real Sol lane; `9e541f1a2fe03fd7ca0bd1cd6a4532b029317f92d037cd6ea3309996a340abf3` |
| `ex-arbitrarily-long-runs-of-composites` | `[L5] If d|a and a!=0 then |d|<=|a|.` | `[L5]` and unused edge deleted. | Citation precision; the explicit factors already prove compositeness. | untagged → `ai-altered` / `ai-altered` | real Sol lane; `84f30239bcabd9617f7037fac95b6e1b8e64418fafe8f7106fff39e9888f98aa` |
| `cex-hilbert-monoid-factorisation-not-unique` | `[L11]` asserted integer prime factorisation and cited a symmetric-group definition, but no step used it. | `[L11]` deleted; still-used dependencies retained. | Citation precision. | untagged → `ai-altered` / `ai-generated` | real Sol lane; `ff56a7166fcfcb56b975deae53d0f052f70c0efda3206894509e36cbeeb5a866` |
| `fs-euclids-product-of-primes-plus-one-is-prime` | `[L5]` bundled a divisor bound and integer absolute-value facts without a numbered use. | `[L5]` and unused edges deleted. | Citation precision; the explicit composite witness remains complete. | untagged → `literature-derived` / `ai-altered` | real Sol lane; `ec061afe4790573c9e894f301c9d98a57230b54b547777fbca7dc5b0f630f93f` |
| `fs-n-squared-plus-n-plus-forty-one-is-always-prime` | `[L4] If d|a and a!=0 then |d|<=|a|.` | `[L4]` and unused edge deleted. | Citation precision; evaluation at 40 gives `41*41` directly. | untagged → `ai-altered` / `ai-altered` | topology Sol lane; `5b8a98eafd3a9ef6a5312d8f94b9c996023e991f9bf774d01c5a0f3d80a278ed` |
| `fs-every-fermat-number-is-prime` | `[L5] If d|a and a!=0 then |d|<=|a|.` | `[L5]` and unused edge deleted. | Citation precision; the explicit Fermat-number factorisation remains complete. | untagged → `ai-altered` / `ai-altered` | topology Sol lane; `93544f5708f073289973c317dd0682abd3356d9a0a3edd53b5e306b09089bfd5` |
| `cor-cauchy-reals-lub-complete` | `[L3]` additionally claimed “limits preserve <=”; steps 6.1, 7.1, and 7.2 invoked that compressed claim. | `[L3]` now states only the epsilon definitions; steps 6.1/7.1/7.2 write out the rational-epsilon contradictions proving equality and order preservation. | Citation precision and missing local derivation; uses rational density plus triangle/order algebra. | untagged → `literature-derived` / `ai-altered` | topology Sol lane; `15c2c717db2bc807c1d6e032938b8dae84ef7b5803b970acd1e38c412e665fdf` |
| `cex-ordered-field-not-archimedean` | `[L4]` attributed polynomial root finiteness and eventual sign to a source that only establishes that R is an ordered field; step 1.1 relied on the overquote. | `[L4]` now says only that R is totally ordered; step 1.1 proves eventual leading-term sign by bounding the lower-coefficient ratios. | Inaccurate citation repaired by an elementary finite-sum estimate. | untagged → `literature-derived` / `ai-altered` | topology Sol lane; `16a39cf107ebf3e11a7ce814679e338badf39966f71a1d429f4bfe935681b8ee` |
| `lem-metric-cauchy-with-convergent-subsequence` | `[A2]` was phrased only as an assumption about the chosen subsequence while citing the general convergence definition. | `[A2]` states the general metric criterion and then instantiates it to `x_(n_j)`. | Citation precision; no theorem claim changed. | untagged → `ai-altered` / `ai-generated` | topology Sol lane; `146be33e62e8aa0cafe93de06cffef3cde269d7bf48b6490b6da1ab8659c045c` |

All fifteen received `verification.verified` with model
`gpt-5.6-sol-codex-subscription`, verdict `certify`, date `2026-08-03`, scope
`published-audit`, and `delegated_by: owner`. No `verification.audited` or stale
judge block was written.

## A6 generated-containment and convention repairs

`rem-topology-conventions` was retagged from untagged to statement
`ai-generated` / proof `not-applicable`. The ladder disposition is **unfold**:
no source can establish an exact library-local convention ledger, and all five
logical uses were elementary. The exact consumer changes were:

| consumer | old | new | certifier and pre-stamp hash |
|---|---|---|---|
| `def-t0-and-t1-spaces` | depended on the seed and said it “records that decision” | dependency and pointer removed; the definition still explicitly assumes no separation | topology Sol lane; `1f37a8e60fc1fd5e22b12cb0a8c9742736ba688a5940e311b8dccf682d22893d` |
| `rem-compactness-conventions-and-choice-ledger` | delegated neighbourhood and empty-intersection conventions to the seed | states locally that neighbourhoods need not be open and the empty intersection is the whole space | topology Sol lane; `a4cf622c45c2c7abb6e774876e9339129b3cd24ffd7fb26c55181a38e543c767` |
| `rem-connectedness-conventions` | said both inherited conventions were fixed by the seed | states both conventions locally and drops the dependency | topology Sol lane; `3a70c4dcb76363967f534244c4ee9bb7dbef56bcc98f8680c1e497f36b41a82b` |
| `rem-function-space-conventions` | delegated topology-comparison and neighbourhood vocabulary to the seed | states `coarser`/`finer` and non-open neighbourhoods locally; also replaces the false “not developed anywhere” claim with “developed only later in reading order” | topology Sol lane; `af5241dc6e683daeef1eb72a5cb674aa356e5c2479e371da6037e538692e9023` |
| `rem-separation-axiom-conventions` | extended the seed without repeating its four forks | states all four house conventions locally and drops the dependency | topology Sol lane; `df8b0dcd8b9807fe9347ca49bfb23466244383ee5c50dd2db18fc5f5fc79d299` |

Each consumer’s obsolete judge/audited block was removed and replaced only
after the independent current reading by the delegated verified stamp. The
seed now has zero logical consumers; `ex-sorgenfrey-line` is a surviving Remark
wikilink only. Its exact disposition is in `genrisk.json`.

## A6 citation-contract repairs

| item | old | new | class / support | certifier and pre-stamp hash |
|---|---|---|---|---|
| `cex-strict-contraction-without-a-fixed-point` | step 3.1 used the Archimedean reciprocal consequence `[L5]` but omitted the label; contract use was therefore incomplete | `[L5]` added to step 3.1 and to the matching derivation/citation use | Citation-use precision, checked against the supplied Archimedean dependency | topology Sol lane; `6030657e7a8cbd2efb195aee90ce843bf15b03400919269fec94e3daeb14d68d` |
| `cex-sequential-closure-strictly-inside-closure` | unused `[L5] Every subset of an at most countable set is at most countable` and its dependency/contract citation | Fact, edge, and contract citation deleted | Unused support deletion | topology Sol lane; `b5dfa39ad60f999e149680adae394e2235e02a2f0fd1b453b060a225e487be77` |
| `cex-non-metrizable-topology` | unused `[L2]` plus three empty-use contract citations | `[L2]` and contract rows deleted; the optional limits Remark directly cites the two actual targets | Unused support deletion and citation precision | topology Sol lane after reflow; `e9bc16813ae3428c9a7e1b4e6c2611db80d78ee0ae9827a0b40631155227bcc3` |

These three item repairs account for all five inherited topology
`citation-uses` errors. The topology strict contract is now 57/57 with zero
errors and warnings.

## A6 refuter-triggered repairs

| item | exact old defect | new text / strongest licensed claim | class and support | independent certifier and pre-stamp hash |
|---|---|---|---|---|
| `lem-p-adic-valuation-on-q` | Remark: “This is the well-definedness that ex-p-adic-ultrametric said it did not have,” followed by an obsolete quote that general machinery was unavailable | Remark now says the example records that general machinery is available but deliberately proves `p=2` from parity; this lemma supplies the general algebraic extension | Fatal inaccurate citation; checked directly against current `ex-p-adic-ultrametric` | LA/NT Sol lane after reflow; `2de4443e7eb3e6e1a6631b8d9f01a031e6c9f25a56803a9a961aaa5c402e3b41` |
| `cex-same-cardinality-without-a-canonical-bijection` | inferred “no bijection is distinguished” from nonuniqueness, although `x -> {x}` is structurally distinguished in the witness | title, refuted claim, conclusion, and Remarks narrowed to exactly two rather than one bijection | Fatal false overclaim; two maps are written out and the `2!` count proves exactness | topology Sol lane after reflow; `a6cd8a951dceefbdafd50d2ecb4e9fecc2a9f2dc8812ec91ea413e89837129bb` |
| `ex-finite-choice-by-induction` | Remark: “ZF cannot make infinitely many such instantiations at once, and that is the whole ... gap [AC] fills.” | ZF does not supply selectors for every arbitrary family; an infinite family may have a definable selector, such as minimum on nonempty subsets of naturals | Fatal false choice-theory generalisation; checked against the displayed selector and socks example | real Sol lane after reflow; `9b64601feaabce696fa183434dc4fca8f0d21271d2edbebf91665d69e6fd1baf` |

The first finite-choice repair pass was **not certified**: it appended the
correct paragraph but accidentally left the false paragraph in place (the
rejected state is snapshot `pre-A6-finite-choice-remark-repair-r2`, touchlog
mathematical hash `240311c9e7c93fa1`). A dedicated second snapshot preceded
deletion of the obsolete duplicate, and only the second-pass text above received a stamp. Its
foundations proof contract also contained an obsolete quotation from an older
`lem-finite-choice` Statement; the contract quotation was refreshed without
changing the certified item and strict validation then passed 23/23.

## Nonmaterial metadata, provenance, and page repairs

- `thm-uniqueness-complete-ordered-field`: A4 had indented the Keisler source
  under `verification.audited`, producing invalid YAML. The same title/URL now
  sits under `sources.references`. The mathematical text and prior valid
  verification were not rewritten. An independent Sol reader parsed the YAML
  and certified the full current theorem/source relation at pre-fix-independent
  hash `a8d51592d0f3334e72c29d4427a10ca1a64cb30ae9edd927a85dbcb87d5af856`.
- The three established-knowledge rows `lem-of-square-monotone`,
  `prop-of-ab-less-b`, and `lem-of-hom-order-preserving` were independently
  concurred and retagged exactly as their provenance ledgers specify; only
  those three ledger rows received `alpha_concurred: true`.
- The complete 170 A4 provenance transitions and 104 URLs are the canonical
  per-item rows in the four provenance JSONL ledgers and the enumerated
  application record in `wave1b-A4.md`; they are incorporated here rather than
  duplicated. The three A-page summary replacements are likewise quoted and
  adjudicated in `wave1b-A3.md` and recorded as applied in `wave1b-A4.md`.

No id was renamed or deleted, no reading-order or presentation change was made,
no judge was run, and no owner `verification.audited` field was written.

## A8 paired-judge repairs

Audit stage: A8. Reviewer: Audit-Alpha, GPT 5.6 Sol through the Codex
subscription at `xhigh`. Date: 2026-08-03. These are the 18 distinct
confirmed-fatal A7 targets and the six materially repaired consumers or exact
dependencies found while closing their public-interface cones. Hashes are the
independent readers' raw SHA-256 values after final reflow and before the
delegated `verification.verified` stamp.

| item | exact old defect | final repair / strongest licensed claim | class | independent certifier and pre-stamp hash |
|---|---|---|---|---|
| `cex-embedding-not-order-preserving` | Step 6.1 inferred that completeness of the codomain would force the embedding to preserve order, which the cited lemma did not say. | Step 6.1 now contraposes the cited lemma: completeness of both ordered fields plus order preservation would force surjectivity, contradicting the proved proper image. | logic | algebra Sol lane; `e294fd11318b2e47afca383741b2f1377dd744339d3079a17b9cd3f995dfe737` |
| `cex-sequential-closure-strictly-inside-closure` | The Remark inferred non-first-countability through a theorem whose reverse sequence direction assumes `AC_omega`. | The witness remains choice-free; only the first-countability inference is now explicitly conditional on Countable Choice. | dependency citation | topology Sol lane; `ecd7c597b4ca68434ff43fc8b37eff488caca732f6e6ef0bf14dd35fd4e30a54` |
| `cor-dimension-of-a-direct-sum` | The induction silently used the identity, associativity, and commutativity laws for natural addition without a licensed dependency. | Added the three natural-addition dependencies, exact Facts, and step citations. | dependency citation | algebra Sol lane; `f5eb03725e75ded269da5e095b1265af8768df4f0b231d35ac8e9930267bf9a7` |
| `def-dense-top` | The indiscrete-space Remark excluded the empty subset even when the space itself is empty. | It now states the exhaustive split: nonempty subsets are dense when `X` is nonempty, while the empty subset is dense when `X` is empty. | other | topology Sol lane; `4dc7b45bdd29cf3162cbec70cea3b70ad0e6e911bb181404357082230aceab53` |
| `def-dimension` | The Remark said every proper subfield gives a different dimension. | It now says a proper subfield can give a different dimension, which is exactly what the cited examples establish. | other | algebra Sol lane; `d58bd492c170dcc907c9660170c30bfaf7079d77bf8ad43914454cc74562ec96` |
| `def-first-countable-top` | Sequence-detection consequences omitted Countable Choice, and the Cantor-cube consequence omitted both the ultrafilter lemma and Countable Choice. | Each consequence now carries the exact hypotheses of its cited theorem/example. | dependency citation | topology Sol lane; `6fd856c19c9d0f4aa9609c3dd9b8efc962dfbb555b48777ed6d19a8adae05b79` |
| `def-lipschitz-holder-contraction` | The Remark falsely used the equal-point case to explain the restriction `alpha>0`. | It distinguishes the harmless equal-point case from the global `alpha=0` bounded-image-diameter condition, which lies outside the adopted Hölder range. | other | metric Sol lane; `1b839dd9ef6e79b8e67cc982abcc8667151d40f9f1233b5f085e908916e90b75` |
| `def-metrizable-space` | It identified the metric page's open neighbourhoods literally with the broader topological-neighbourhood convention and denied an order-native use that exists. | It now states the exact cofinal local-base relation and identifies the companion order-topology use. | other | topology Sol lane; `975624d8b334a7d3870c249042a57d3a56b987beecab17e967b6ddb860889b27` |
| `def-neighbourhood-top` | It claimed that an arbitrary universal neighbourhood predicate can be checked only on open neighbourhoods. | The equivalence is now restricted to predicates preserved under enlargement, the exact condition used by standard eventual/local tests. | other | topology Sol lane; `cd255c5d3a6bd9070f562b3a61117922daa1a6ed8366f55a6f51f731524b3c1a` |
| `ex-cocountable-topology-on-r` | Its non-first-countability conclusion used a cited theorem without the theorem's `AC_omega` hypothesis. | The conclusion is explicitly conditional on Countable Choice; claims 1–3 remain choice-free. | dependency citation | topology Sol lane; `100ca02b412620cbb55d066db8f6dce9544c475b38c93d72cfebd174ed0ec746` |
| `ex-hamel-basis-of-r-over-q` | The Hamel-basis existence claim used a basis-existence theorem requiring Choice but stated no such assumption. | Choice is now an explicit hypothesis, dependency, Given, and licensed Fact. | dependency citation | algebra Sol lane; `5e9c934ca370952f028096f6671326632633794b6098b0d1603609c9c72e3693` |
| `ex-sierpinski-and-particular-point-spaces` | The separation Remark overclaimed for the singleton case; its first repair then overclaimed the cofinite intersection property on finite sets. | The final text separates the singleton/discrete and at-least-two-point cases and restricts the cofinite intersection comparison to infinite `X`. | other | algebra Sol lane; `5d2a242a2e76d0e28625cf4e7d6dbb4e53424a89253a442cfcd18b4127807894` |
| `fs-equivalent-metrics-share-cauchy-sequences` | The Remark claimed the displayed metrics give different completeness verdicts. | It now proves both displayed metric spaces are incomplete and says a different witness is needed for completeness divergence. | other | metric Sol lane; `144a62486e7683796219da4f683be54190ca2b739612b0843fca010f52a5bd62` |
| `fs-every-topology-is-metrizable` | A first-countability Remark invoked a theorem without Countable Choice. | The single surviving paragraph is explicitly choice-qualified; an intermediate duplicate retaining the old text was rejected and removed. | dependency citation | metric and topology Sol lanes; `e51f249728ed3ed36f9619030167a3932301c8ecc9457e6156801c4f23726182` |
| `fs-sequentially-continuous-implies-continuous` | Its introductory converse and first Remark omitted the Countable Choice hypothesis required by the cited first-countable theorem. | Both are conditional on Countable Choice; the choice-free cocountable counterexample is unchanged. | dependency citation | metric Sol lane; `b4ce9389bd67c731f0c6170be9f4baa93459ec57c7181bfc1312fa5c59d2be86` |
| `lem-metric-convergent-implies-cauchy` | The Remark said the proof used only the triangle inequality although step 2.1 also uses symmetry. | It now says triangle inequality and symmetry are used, while separation is not; the pseudometric generalisation remains valid. | other | metric Sol lane; `0f8995f46a848c9f5f66008a3eaf706ce5c7f93c5fd891376c47c978e769e3a3` |
| `thm-fundamental-theorem-of-arithmetic` | The Remark conflated the primality use in existence with the distinct primality use in uniqueness. | It now attributes existence to finding a prime divisor and uniqueness to Euclid's lemma. | other | algebra Sol lane; `1953baa7f2403062041378a14032dac2681997adfef0007caae679ddbb24b9c0` |
| `thm-kuratowski-closure-axioms` | A heading credited K3 with making the fixed points a topology, contradicting its own proof. | The heading now states the exact role: K1, K2, and K4 give the topology; K3 makes `c` recoverable as that topology's closure operator. | other | topology Sol lane; `59f8e70aa537c118ba54c9272f3d8507e8fe4f9e92388e97904f3f42f8e33ce6` |
| `rem-topology-conventions` | It repeated the arbitrary-predicate neighbourhood-quantifier overclaim. | It now repeats only the enlargement-preserving predicate equivalence licensed by `def-neighbourhood-top`. | impact consumer | topology Sol lane; `be4864c69b9735148b67b4f5451175e0355b46993dbb3f2c1540c867f21f94a2` |
| `cex-non-metrizable-topology` | Its optional cocountable-space Remark inferred non-first-countability without Countable Choice. | The inference is explicitly conditional; the primary two-point separation counterexample remains unconditional. | impact consumer | topology Sol lane; `bafb1a7bab461059bf83bbdf069d094bb94f944dcbe44df348f0d11f0bdc4709` |
| `thm-first-countable-sequences-suffice` | Its public title/short label and cocountable-space Remark stated the theorem's consequences without its explicit Countable Choice hypothesis. | Title, short label, and Remark now carry the theorem's exact choice scope. | impact consumer | topology Sol lane; `488f48b0b30fc8020a52beec5a86e81a8d311c84eda1031c343d230616c14b1b` |
| `lem-sequential-closure-inside-closure` | Its first-countable reversal Remark omitted Countable Choice. | The choice-free inclusions remain unconditional; only the cited reversal is explicitly choice-qualified. | impact consumer | topology Sol lane; `4430d4c73e5c9de4df3c38408b3fa7807dd06e2d539a58737db920eb0322d100` |
| `cex-sequentially-continuous-not-continuous` | The Remark called the sequence blindness “precisely” failure of first countability without its choice qualification. | It now states the exact countable-range mechanism and makes the first-countability inference conditional on Countable Choice. | impact consumer | topology Sol lane; `62c43ac8e62aa035c48fecba2c7d1c566179d4116134ea06b5dbbd4e713347c9` |
| `ex-uncountable-cantor-cube-uniformizable-not-first-countable` | Its public title omitted the ultrafilter lemma and Countable Choice; after that repair, step 1.1 was found to cite a compactness theorem for Hausdorffness needed by the uniformity theorem. | The title states both hypotheses, and a new exact product-Hausdorff Fact/dependency separately licenses Hausdorffness before uniformizability. | impact dependency | topology Sol lane; `ddea775dfc02bb3fc9e006cc2487f4c35bb7244fa2184ba4e8dc3edacb186c47` |

All 24 received only the delegated `verification.verified` stamp after the
independent post-reflow reading. No `verification.audited` field was written.
The paired targeted rejudge remains unstamped because the mandated scheduler is
blocked by this session's non-escalated process sandbox; its Node child launch
returns `EPERM` before any verdict is made. No substitute ledger row or receipt
was manufactured.

One additional earlier-wave latent issue was found while tracing a comparison:
`thm-metric-sequential-closure` has an unqualified title/Statement while its
proof spends Countable Choice. No repaired Wave 1b target relies on that
unqualified direction. Alpha restored the earlier-wave page after a temporary
local experiment and queued the finding for A10/owner review rather than
opening an unrelated 21-consumer repair cascade during this 83-item A8 scope.

## A8 round 2 paired-rejudge repair

Audit stage: A8 round 2. Reviewer: Audit-Alpha, GPT 5.6 Sol through the Codex
subscription at `xhigh`. Date: 2026-08-03. Dedicated pre-edit touch snapshot:
`pre-A8-round2-ex-hamel-completeness`. Impact receipt:
`research/audit/wave1b-impact-audit.json`.

| item | exact old defect | final repair / strongest licensed claim | class and support | provenance transition | independent certifier and pre-stamp hash |
|---|---|---|---|---|---|
| `ex-hamel-basis-of-r-over-q` | `[L5]` asserted “$\mathbb{R}$ is uncountable” from `thm-r-uncountable`, whose Statement begins “Let $\mathbb{R}$ be a complete ordered field,” but the item had established only that its Cauchy-sequence reals form an ordered field. | Added `cor-cauchy-reals-lub-complete` and `def-complete-ordered-field` as dependencies; the Example, Given, and `[L5]` now state the least-upper-bound/completeness hypothesis before applying `thm-r-uncountable`. The proof contract now quotes the theorem with its hypothesis and records the two new exact supporting clauses. | Fatal dependency-citation defect. `cor-cauchy-reals-lub-complete` proves that the Cauchy-sequence reals have the least-upper-bound property and, with `thm-reals-ordered-field`, form a complete ordered field; `thm-r-uncountable` then applies exactly. | `ai-altered` / `ai-generated` unchanged; an already `ai-generated` proof remains so under §9. | independent Sol/xhigh reader (`/root/hamel_certifier`); `93a89b18acfeaedbcfccd892ce182ab782aa2db971d21e223376ac47c11c3f15` |

The prior delegated `verification.verified` block was removed before the edit.
The independent reader certified the complete current item at the recorded raw
pre-stamp SHA-256; only then was the delegated `verification.verified` block
restored. No `verification.judge` or owner `verification.audited` block is
present.
