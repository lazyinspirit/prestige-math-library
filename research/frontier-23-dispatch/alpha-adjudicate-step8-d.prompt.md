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
group work, `research/frontier-23-alpha-groups.json` is the assignment: it permits at
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

run: frontier-23
role: alpha-adjudicate
label: step8-d
covers: 8, 10

# Step 8 — group **d**, run `frontier-23`

You are the group Alpha for batches **8**, **10**: 2 A/B pair(s), 4 page(s), 80 item(s), 45 open rejection(s) over 45 item(s).

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
| `cex-a-general-member-of-an-abelian-group-need-not-come-from-an-element` | `exactness-and-the-member-calculus-examples` | gpt-5.6-terra | `56fc65e9a4059212aa0930bb4f6f4c0d36cccaa2c654b2a60ad6fb273c5947c6` |
| `cex-a-language-is-a-set-of-symbols` | `formal-languages-encodings-and-decision-problems-examples` | gpt-5.6-terra | `bb131a717bb7fdea228cf267ed75205f8d7daa8e10370ea810dff42771c0c9aa` |
| `cex-an-effective-encoding-need-not-be-prefix-free` | `formal-languages-encodings-and-decision-problems-examples` | gpt-5.6-terra | `3bf3990527da03f7064b494528aec0d85729717eccf3dcb6c4466e5f7c3ef1e7` |
| `cex-the-members-of-an-object-do-not-form-a-group` | `exactness-and-the-member-calculus` | gpt-5.6-terra | `189e86abb754a72ca7a4844914b0e09e39cfd5293c757c85b5763dcfc12701ef` |
| `cex-two-morphisms-agreeing-on-every-member-need-not-be-equal` | `exactness-and-the-member-calculus` | gpt-5.6-terra | `64b4b242c46802f1f7da7ea9a5f444f31226638f7240dcea543f7049a6a4c4b3` |
| `def-alphabet-homomorphism-and-induced-word-map` | `formal-languages-encodings-and-decision-problems` | gpt-5.6-terra | `eef3e33c8ca2a18cad483af8f3f3e58539b152a3b809b6ad60af592341900f29` |
| `def-effective-binary-encoding-and-decoder` | `formal-languages-encodings-and-decision-problems` | gpt-5.6-terra | `cfcd925d896493a6af7568a6e74b2eced550718d68ab73083b149dbaefa226f7` |
| `def-exactness-at-a-node` | `exactness-and-the-member-calculus` | gpt-5.6-terra | `810ed912727cb5820887565c11265a2c4d3cfc7f290df62bfaa924c5448a1314` |
| `def-language-concatenation-powers-and-kleene-star` | `formal-languages-encodings-and-decision-problems` | gpt-5.6-terra | `ef33d695381b62404dc454956d6bc3a2525b437f6ec71078de2b2ab1ab87aaf8` |
| `def-word-and-language-reversal` | `formal-languages-encodings-and-decision-problems` | gpt-5.6-terra | `7413f563e309ae876c4c3b82b20c57d91bebd08607fd8c1942e7c513d7e8bb80` |
| `ex-a-member-chase-verifying-monicity` | `exactness-and-the-member-calculus-examples` | gpt-5.6-terra | `9b4d38259d2f6d8276807bdc491c29450c0e29b0c4184aeb0b7617f2fd248d22` |
| `ex-an-ordinary-element-as-the-member-from-the-integers` | `exactness-and-the-member-calculus-examples` | gpt-5.6-terra | `a1b6bf53fa552a9257075d5054f1b24e4f7498e6ac78ac8ca2e403e0a6380e89` |
| `ex-members-of-an-abelian-group-correspond-to-its-subgroups` | `exactness-and-the-member-calculus-examples` | gpt-5.6-terra | `1a95d52acf82af20ba5b2ccc0040ead633a5bb04bef440e1c39a7e7a7fe9158f` |
| `ex-polynomially-related-encodings-preserve-polynomial-size` | `formal-languages-encodings-and-decision-problems-examples` | gpt-5.6-terra | `15121b084983b8df9c333d188a94d09a4303f5ab25a6947e482da3ab769bba2a` |
| `ex-the-kernel-cokernel-sequence-of-a-composite-of-module-maps` | `exactness-and-the-member-calculus-examples` | gpt-5.6-terra | `4403dfe3a9f08a7e53367ac7535d763b6d32ced5e66042e794e96589ff226efa` |
| `ex-the-splitting-lemma-instantiated-at-the-published-module-theorem` | `exactness-and-the-member-calculus-examples` | gpt-5.6-terra | `054d6739a7592dc4bc3e2d21e3fd7a81aa8806a15baf7973686077b001189996` |
| `fs-every-effective-encoding-is-prefix-free` | `formal-languages-encodings-and-decision-problems` | gpt-5.6-terra | `8252be86e9cf5eea3c3ec8e9da598a7a2f1a2364315dd8835cf9304f37f07cdb` |
| `fs-exactness-can-be-defined-without-first-producing-a-canonical-monomorphism` | `exactness-and-the-member-calculus` | gpt-5.6-terra | `1ef68dbcceb962d3ddc04f4dd57dbf85829333ed4e99223bb15d411e19cd643a` |
| `fs-member-equivalence-is-transitive-in-any-pointed-category-with-pullbacks` | `exactness-and-the-member-calculus` | gpt-5.6-terra | `4af452d945a5193b581108c0a40f4e4d54fb1826b7ab44e186a7b073ef47e3ca` |
| `fs-the-members-of-an-object-form-an-abelian-group` | `exactness-and-the-member-calculus` | gpt-5.6-terra | `104573a2037951bf19a2a7d0917fb1d0dcdef3760fa1bce1cc4039ebf1f4fff8` |
| `fs-the-subtraction-rule-produces-a-unique-member` | `exactness-and-the-member-calculus` | gpt-5.6-terra | `5354d188add91eacf2b6f15d97231578128a30e10353ae96abbeea5e1d550483` |
| `fs-two-morphisms-that-agree-on-every-member-are-equal` | `exactness-and-the-member-calculus` | gpt-5.6-terra | `82abd3a6d599bb5c19eec9bca1b7d2eb26ade6407df121ca8ec23399d6510a46` |
| `lem-computation-words-agree-with-published-finite-words` | `formal-languages-encodings-and-decision-problems` | gpt-5.6-terra | `64f629a758c4bcada4acb2370ca02d6eb7f1e2943f4b6e1ddba9429eb10beb15` |
| `lem-induced-word-map-has-the-free-extension-property` | `formal-languages-encodings-and-decision-problems` | gpt-5.6-terra | `9889b0ac00452a0ec91f965fd1c3ae26b0fe789ae35d24c0622ac131a0d979f1` |
| `lem-kleene-star-has-the-expected-least-closure-property` | `formal-languages-encodings-and-decision-problems` | gpt-5.6-terra | `1962c683bb728655fd17de524f1ad87c0898df7d7c694bd2460e722e7b76d0ad` |
| `rem-two-routes-to-every-dual-statement` | `exactness-and-the-member-calculus` | gpt-5.6-terra | `5e0aa27f4731375f03b5c3c3e58f9e451e3f1eebee761328318dbab281086c25` |
| `thm-a-cartesian-square-over-an-epimorphism-is-also-cocartesian` | `exactness-and-the-member-calculus` | gpt-5.6-terra | `fe4a1420f7062cf2a223413b5a6f751e35347ea936e45d020a909749e85ddad1` |
| `thm-a-short-exact-sequence-is-a-kernel-cokernel-pair` | `exactness-and-the-member-calculus` | gpt-5.6-terra | `61a6ff1a238dd735a6ed094660225bc9552e0bf99e7d9f96e636f9e283287b32` |
| `thm-ab5-is-equivalent-to-exactness-of-filtered-colimits` | `exactness-and-the-member-calculus` | gpt-5.6-terra | `9f3f31fd760cd148cff2be08ffe58ecb0f4138d0e724a77f31900efb363fee60` |
| `thm-an-object-is-projective-exactly-when-hom-out-of-it-is-exact` | `exactness-and-the-member-calculus` | gpt-5.6-terra | `4ff51036ec5f42a77e5253fc0a00b1aa1a3f148b9882e02482e2b3348f5dfaf9` |
| `thm-chasing-rule-epimorphy-detected-by-members` | `exactness-and-the-member-calculus` | gpt-5.6-terra | `d0b4d39dc00140785f2a73f0ca9910136c803b34261784fef489dfbfeeb899cb` |
| `thm-chasing-rule-exactness-detected-by-members` | `exactness-and-the-member-calculus` | gpt-5.6-terra | `d1444c3dcc55f9e05bbee96084d9e3852c21dd06ad6474f00144e1a5d57c2b32` |
| `thm-chasing-rule-monicity-by-member-cancellation` | `exactness-and-the-member-calculus` | gpt-5.6-terra | `ad0cf85f98661f1f2fc7316c11d804520b8ba442f56b5edf4154b283c07687de` |
| `thm-chasing-rule-monicity-detected-by-members` | `exactness-and-the-member-calculus` | gpt-5.6-terra | `f42588f000b1dde243734e1f2dccb4acb1eb8fa049da952a6144af281d683752` |
| `thm-chasing-rule-the-subtraction-surrogate` | `exactness-and-the-member-calculus` | gpt-5.6-terra | `1117c975143ee1a0126f74647dad0cbb27e3277344a7f8fbc344cd9fe357cf45` |
| `thm-degenerate-exactness-criteria` | `exactness-and-the-member-calculus` | gpt-5.6-terra | `2494f662283aa3a1b2acf8323c9ed90f736fac4cc9da7dcb502725ed599f4455` |
| `thm-exactness-of-kernel-and-cokernel-sequences-under-endpoint-hypotheses` | `exactness-and-the-member-calculus` | gpt-5.6-terra | `b1354a0014f6cb6eea71190638ecd3dc85e68c58ff121d3848fa8f2635309e4c` |
| `thm-hom-is-left-exact-in-each-variable` | `exactness-and-the-member-calculus` | gpt-5.6-terra | `23d6716e6c46a361632893a047d5cd4c1c4debf86048c3c8eb6e5cf35c918acb` |
| `thm-member-equivalence-is-transitive` | `exactness-and-the-member-calculus` | gpt-5.6-terra | `c45203a4865d2b3377abb2a606809a122c06fd987b4ecf3a23d90b5264076efb` |
| `thm-members-modulo-equivalence-correspond-to-subobjects` | `exactness-and-the-member-calculus` | gpt-5.6-terra | `9adbedc67380ab2b179b73209f037b2ceb1199c00eef5c4c6d85f7773b8e637c` |
| `thm-splitting-lemma-in-an-abelian-category` | `exactness-and-the-member-calculus` | gpt-5.6-terra | `e0156c7cde52f5b147745ceb50f4ce914eba07cb7853ab4e3b9acfe9643c2705` |
| `thm-the-arrow-theoretic-criterion-for-exactness` | `exactness-and-the-member-calculus` | gpt-5.6-terra | `852486bcbc3af461cdc22e2322e54ba81d2cb2e65be188ef8d8b65bbad93b63a` |
| `thm-the-covering-criterion-for-exactness` | `exactness-and-the-member-calculus` | gpt-5.6-terra | `913c64700a5979e651e5638b62de45bf8acbce328de8bb89e8d7f750e542feba` |
| `thm-the-kernel-cokernel-sequence-of-a-composite` | `exactness-and-the-member-calculus` | gpt-5.6-terra | `51383e7f7b58cf7d4fa2c5af31d8c082e1be8818b5604e2347604b18c38abfba` |
| `thm-the-kernel-row-and-cokernel-row-of-a-morphism-of-short-exact-sequences-are-exact-at-two-nodes-each` | `exactness-and-the-member-calculus` | gpt-5.6-terra | `78edd68fe984c56633a5d7a70e2376952a5e7bf243b12deb53f52278e636a8b2` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 8 — fatal-only configured-judge adjudication, `frontier-23`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Append one row per rejection to `research/frontier-23-judge-adjudications.jsonl`
with the required tuple, pre-edit guard `item_sha256`, and outcome. Only
`confirmed_fatal` licenses a content repair and matching defect-ledger row;
`confirmed_nonfatal` and `false_positive` close the rejection without content,
contract, impact, or judge changes. The engine rejudges exactly changed items
against the configured judge set.

For an incoming alert, append the owning-group disposition to
`research/frontier-23-step8-alert-decisions.jsonl`. A defect in another group is a
`research/frontier-23-step8-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-8 baseline or rewrite shared ledgers. Run the Step-8 guard
and scope check, then write `research/frontier-23-alpha-step8-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.
