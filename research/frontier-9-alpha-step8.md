# Frontier 9 Alpha Step-8 audit

**Auditor:** Alpha-9, GPT-5.6 Sol at xhigh reasoning effort  
**Scope:** 83 current Frontier 9 items, 53 proof-bearing items, 20 pages, 391
current declared relationships, and the current proof-bearing portion of the
100-largest transitive dependency cones.

**Targeted post-sweep status (2026-08-03):** Alpha adjudicated the nine
owner-specified current-hash rejections produced by the completed 65-item
post-Alpha paired rejudge, then the one fresh rejection from the repaired
integer theorem's exact targeted pair. This addendum is an exact targeted
adjudication and does not claim a new complete coverage pass. It found no
confirmed-fatal rejection, applied one owner-delegated citation-only repair to
`thm-int-ordered-ring`, and made no content change after its fresh pair.

## Prior full-audit coverage record

Alpha read all 83 current items, every numbered step of all 53 in-flight proofs,
and every current `deps`, `justified_by`, `forward_refs`, and `external_refs`
edge against the target Statement or Definition. Alpha also read all page
summaries and B-page bodies, checked provenance, reconciled all 33 planned versus
actual dependency drifts, adjudicated the exact 18 current judge rejections, and
reconciled the two independent spine-refuter reports to current disk hashes.

The formal receipts are:

- `research/frontier-9-audit-coverage.json`: 83 items, 53 proofs, 391
  relationships, all reconciliation reasons complete.
- `research/frontier-9-spine-audit.json`: current 68-proof spine scope, 66
  `read` and 2 `repaired` attestations.
- `research/frontier-9-impact-audit.json`: 15 changed public interfaces and
  1,989 affected consumers, all `still-licensed` because no changed source
  Statement or Definition formula was weakened.

## Findings and repairs

### In-flight Frontier 9 items

- `cex-invertible-derivative-without-c-one-local-inverse`: added the exact
  positive/negative power-rule dependency and Fact clause for the derivative
  calculation.
- `ex-forward-shift-injective-not-surjective`: added Peano P1/P2 so the
  zero/successor clauses are disjoint and predecessors are unique.
- `ex-machin-formula`: added the tangent definition and the exact
  `sin(0)=0`, `cos(0)=1` source for `tan(0)=0`.
- `lem-linear-map-elementary-properties`: rewrote the zero calculation to use
  the scalar-zero identity already stated in L2.
- `lem-prime-implies-irreducible-in-a-domain`: made the prime element's
  nonzero/nonunit clauses explicit before cancellation.
- `lem-submodule-criterion-sums-and-intersections`: restated the cited
  `(-r)m=-(rm)` result exactly and derived the `r=1` case from the unit law.
- `thm-euclidean-inverse-function-theorem`: stated the nearby uniform inverse
  bound used in the inverse differentiability and continuity steps.
- `thm-euclidean-implicit-function-theorem`: added the total-derivative
  definition, expanded the block derivative from its remainder, and stated the
  inverse derivative formula used for nearby invertibility.
- `thm-principal-inverse-tangent-calculus`: added the oriented additivity
  theorem needed for the integral-function derivative on the negative half-line.
- `thm-quotient-module-universal-property`: stated `ker(pi)=N` explicitly.
- `def-induced-homomorphism-on-fundamental-groups`: added its direct dependency
  on the definition of loop classes and the fundamental group.
- `def-principal-inverse-sine-and-cosine`: corrected one unresolved wikilink to
  the existing sine/cosine monotonicity theorem.
- `thm-order-of-element-in-direct-product`: corrected YAML escaping in the
  mathematical title so the intended `iota`, `operatorname`, and `times`
  commands survive parsing.

All ten materially changed in-flight proofs were reflowed; all 53 in-flight
proofs pass precheck. The five batch contracts were updated, all 53 risk reviews
were completed, and the merged contract was regenerated.

### Published dependency spine

The first read-only refuter found two fatal dependency/citation defects, both
confirmed from disk and repaired by Alpha:

- `thm-int-comm-ring`: the proof used bare A1-A4 natural arithmetic laws while
  declaring none of the needed addition, multiplication, distributivity, zero,
  or identity results. The Facts, direct dependencies, and all step tags now
  cite the exact published natural-arithmetic lemmas.
- `thm-int-ordered-ring`: the proof used bare A1-A5 for natural linear order,
  translation invariance, gap representation, arithmetic, and positive
  multiplication. Those facts and direct dependencies are now explicit, and
  representative independence is proved in both directions.

Both stale `verification.judge`/`audited` stamps were removed, both proofs were
reflowed, and both pass precheck. They remain intentionally unstamped pending
the orchestrator's required personal audit and fresh paired rejudge.

Exactly two read-only GPT-5.6 Sol refuters were used. Refuter A read the first 33
of the original 66-proof scope and Refuter B read the complementary 33. Refuter
B found no fatal issue. The integer repairs changed the current top-100 ranking
from 66 to 68 proof-bearing items: `lem-nat-mult-associative`,
`lem-nat-no-zero-divisors`, and `lem-nat-order-mult-compatible` entered, while
`lem-countable-iff-surjection-from-n` fell out. Alpha personally read all three
new entrants and their used dependencies before signing the current receipt.

The refuters also recorded the following nonfatal, sub-30-second bridges without
changing them: `thm-recursion`, `lem-nat-discrete`,
`lem-int-add-well-defined`, `lem-int-mul-well-defined`,
`lem-rat-ops-well-defined`, `thm-rat-field`, `thm-rat-ordered-field`,
`lem-of-naturals-positive`, `lem-cauchy-bounded`, `lem-rat-embeds-dense`, and
`lem-of-q-embeds`. Concrete dispositions are in the spine receipt.

## Exact judge adjudications

The ledger `research/frontier-9-judge-adjudications.jsonl` contains exactly one
row for each adjudicated rejection key and hash: 28 rows in total, comprising
24 confirmed-nonfatal findings and 4 false positives. No adjudicated judge
rejection was fatal under the formal 30-second rule; the two earlier fatal
defects above came from the independent spine read. The first 18 decisions were:

| Item | Model | Outcome | Disposition |
|---|---|---|---|
| `cex-invertible-derivative-without-c-one-local-inverse` | Terra | confirmed nonfatal | Power-rule citation added. |
| `def-alphabet-words-and-reduction` | DeepSeek | false positive | Finite string/length are defining terminology; the operations are fully specified. |
| `def-based-loops-and-fundamental-group` | DeepSeek | false positive | The next current page item is exactly the group-laws theorem. |
| `ex-forward-shift-injective-not-surjective` | DeepSeek | confirmed nonfatal | Peano P1/P2 added. |
| `ex-forward-shift-injective-not-surjective` | Terra | confirmed nonfatal | Peano P1/P2 added. |
| `ex-machin-formula` | Terra | confirmed nonfatal | `tan(0)=0` support added. |
| `lem-greedy-colouring-bound` | Terra | confirmed nonfatal | Immediate successor-order bridge; no edit needed. |
| `lem-linear-map-elementary-properties` | Terra | confirmed nonfatal | Zero calculation polished. |
| `lem-prime-implies-irreducible-in-a-domain` | Terra | confirmed nonfatal | Nonzero/nonunit clauses restated. |
| `lem-submodule-criterion-sums-and-intersections` | Terra | confirmed nonfatal | Exact scalar-negative derivation added. |
| `thm-euclidean-implicit-function-theorem` | DeepSeek | confirmed nonfatal | Block and inverse derivative support expanded. |
| `thm-euclidean-implicit-function-theorem` | Terra | confirmed nonfatal | Inverse derivative formula restated. |
| `thm-euclidean-inverse-function-theorem` | Terra | confirmed nonfatal | Uniform inverse bound restated. |
| `thm-fundamental-group-laws` | DeepSeek | confirmed nonfatal | Straight-line continuity closes immediately from L5. |
| `thm-principal-inverse-tangent-calculus` | Terra | confirmed nonfatal | Oriented additivity cited. |
| `thm-quotient-module-universal-property` | DeepSeek | confirmed nonfatal | Kernel clause restated. |
| `thm-quotient-module-universal-property` | Terra | confirmed nonfatal | Kernel clause restated. |
| `thm-reduced-words-form-the-free-group` | DeepSeek | confirmed nonfatal | Natural induction specializes immediately to word length. |

### Targeted post-Alpha adjudications

| Item | Model | Context SHA-256 | Outcome | Exact disposition |
|---|---|---|---|---|
| `lem-kernel-basis-extension-gives-image-basis` | Terra | `dcc8ea09b979aded234969982010149a6d4ce8c13f4cbd7af8ab10be61cc3cfa` | confirmed nonfatal | Vector-space addition is an abelian-group operation, so the omitted cancellation bridge is immediate from the exact cited vector-space source. No edit. |
| `lem-newton-contraction-near-an-invertible-derivative` | Terra | `edfd8aea903f7f58b101d1cd0e1ced93cab172fea2ec37517a88822e35a7690c` | confirmed nonfatal | L6's exact source states that the Euclidean norm is a norm and therefore supplies the triangle inequality; step 4.1 merely omits the local L6 tag. No edit. |
| `lem-prime-implies-irreducible-in-a-domain` | Terra | `9f4d94a599e2249dfc2d2f084b843b07a5477d91cdb43eec0c41ac21afef547d` | confirmed nonfatal | Expanding `p divides a` to `a=pc` is the defining divisibility clause and closes in well under 30 seconds. No edit. |
| `lem-submodule-criterion-sums-and-intersections` | Terra | `e15d304bcf7427f68f79827593231e96d8757694e7c2238f718a19eb1d6d48d6` | confirmed nonfatal | The exact module definition makes the additive group abelian, licensing the displayed commutation immediately. No edit. |
| `thm-principal-inverse-tangent-calculus` | Terra | `ca554ab6cc5da2efea4dd0ed4fe296016f200a4126380660378550c65c15e3e3` | false positive | `def-principal-inverse-tangent` explicitly says tangent is a continuous strictly increasing bijection on `(-pi/2,pi/2)` and that arctangent is its inverse; L1 therefore supplies the allegedly absent inverse-theorem hypotheses. No edit. |
| `thm-quotient-module-laws` | Terra | `7f03ea39bc07eab6f0144c992595c66c4db2300d379e3c6588d0c553d2833c81` | confirmed nonfatal | The quotient-addition formula is stated in L3 and already derived in step 1.2; step 1.3 only omits that local tag. No edit. |
| `thm-subgroups-of-cyclic-groups-are-cyclic` | Terra | `1397cc51867bbfa965d174512331dff5a95d405a047005d21096db1d310ffa8a` | confirmed nonfatal | The exact L6 source states that integer order is total, so `0 <= r` and not `0 < r` give `r=0` immediately. No edit. |
| `thm-fundamental-group-laws` | DeepSeek | `0bee941aecd7f5d271801a5d21cfe46c9c69477e71e433b9fcf4a0cd15ab94b7` | confirmed nonfatal | L5's exact straight-line-homotopy theorem makes each displayed bilinear-looking clause continuous by taking an affine `f(s)` and the zero map, after which L6 pastes the halves. Step 1.3 only omits the local L5 tag. No edit. |
| `thm-int-ordered-ring` | Terra | `72931678c6ee7f26c5fb2ae109fc2da831120f36ccb293996cf5c3dc6e7add8c` | confirmed nonfatal | The final ring conclusion lacked its direct proof citation. Under the 30-second rule this is nonfatal; under the owner's explicit citation-repair delegation, Alpha added exact Fact L6 from `thm-int-comm-ring` and cited it in step 5.1. |

The only repaired id in this targeted pass is `thm-int-ordered-ring`. Its
Statement, dependency list, and mathematical conclusion are unchanged. The
repair adds the exact source statement “commutative ring with multiplicative
identity” as L6 and cites L6 at the final step. There was no judge stamp to
remove. Refuter B independently read both full current integer proofs and
certified the repair as faithful, statement-preserving, acyclic, and complete;
reflow, precheck, citecheck, rendercheck, and prosecheck all pass.

### Post-repair exact-hash adjudication

| Item | Model | Context SHA-256 | Outcome | Exact disposition |
|---|---|---|---|---|
| `thm-int-ordered-ring` | Terra | `327ec667805e068c0ad31d6f0b4243907c881fe30f315d9c81d36c11fafb84a1` | false positive | Step 1.5 itself introduces the two conventional premises for transitivity: `a+d <= b+c` is `x <= y`, and `c+f <= d+e` is `y <= z`. From those premises L2 licenses addition/transitivity in natural order and L3 licenses cancellation. No hypothesis is undischarged, so no edit is truthful or necessary. |

## Pages

Six A-page summaries were rewritten to exactly two accurate paragraphs, each
well under 150 words:

- `cyclic-groups-and-direct-products`
- `group-actions-and-cayleys-theorem`
- `euclidean-domains-pids-and-unique-factorisation`
- `free-groups-and-presentations`
- `linear-maps-rank-nullity-and-quotient-spaces`
- `modules-and-module-homomorphisms`

The authored bodies were removed from the two B pages
`further-trigonometric-identities-and-inverses-examples` and
`inverse-and-implicit-function-theorems-examples`.

## Gate results

- Content policy: 83 scoped items, 0 errors, 0 warnings.
- Precheck: 53/53 proof-bearing items pass.
- Strict proof contracts: 53/53 pass; merged from all five batch contracts.
- Risk report with `--require-reviewed`: 0 errors, 53 routed.
- Citecheck: 15 changed items, clean.
- Rendercheck: 23 changed items/pages, clean.
- Prosecheck: 23 changed items/pages, 0 errors/warnings.
- Finite smoke: 0 errors (no configured checks).
- Forward-reference gate: pass.
- External-reference gate: pass, with pre-existing published warnings only.
- Audit coverage/current-context gate: 83 items, 53 proofs, 391 declared
  relationships, and 83 complete current judge pairs; 11 warnings are the
  expected exact-hash nonfatal/false-positive adjudications.
- Spine receipt: pass at the current 68-proof hash.
- Impact receipt: pass through snapshot
  `post-targeted-int-ordered-citation-repair` for 15 mechanically changed
  public surfaces and 1,989 affected consumers. For `thm-int-ordered-ring`
  specifically, all 1,983 logical consumers (including 88 direct citation
  consumers) remain licensed because its Statement and dependency interface
  did not change.
- `git diff --check`: clean.
- Touch report: `thm-int-ordered-ring` now has two recorded repair transitions
  and therefore remains in the orchestrator's personal-audit escalation set.

## Required targeted paired rejudge

The completed 65-item paired rejudge closed the earlier 63-item list. The
targeted repair changes only `thm-int-ordered-ring`'s proof/Facts, not its
Statement or dependency interface, so no consumer needed rejudging. Its exact
one-item fresh pair completed at:

```text
thm-int-ordered-ring  327ec667805e068c0ad31d6f0b4243907c881fe30f315d9c81d36c11fafb84a1
```

DeepSeek passed. Terra's rejection is adjudicated above as an exact-hash false
positive because step 1.5 explicitly introduces both transitivity premises.
No repair, new context, further paired rejudge, impact refresh, touch snapshot,
or judge stamp is warranted. The 83-item Frontier page scope itself has
complete current DeepSeek/Terra pairs; this targeted addendum does not assert
overall Step-10 coverage closure.

No commit, push, publish, stash, reset, or normative-document edit was made.
