# Step 8 — group **d**, run `frontier-23`

You are the group Alpha for batches **8**, **10**: 2 A/B pair(s), 4 page(s), 80 item(s), 0 open rejection(s) over 0 item(s).

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

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/frontier-23-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — frozen integrity close, `frontier-23`

The final judge boundary is closed. The generated repair envelope above is
authoritative: review only its exact `assigned_items` and `live_tuples`, with
their explicit run or published scope; use a focused check when supported.

Do not alter mathematical items, start a judge cycle, or change another group's
records. You may correct a contract or receipt only when it exactly describes
the current item and cannot conceal a defect. A mathematical correction is a
blocker for the supervising session.

Return the gate, ids, non-item records changed, focused checks, and blockers.
