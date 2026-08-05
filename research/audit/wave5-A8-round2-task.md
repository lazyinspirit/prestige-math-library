# Wave 5, A8 round 2 — 25 rejections to adjudicate

Paired coverage is now **209/209**: every item has a real verdict from both
lanes at its current frozen context. Getting there took two extra sweeps and
both are worth knowing about, because they change how you should read these.

**The Sonnet lane had refused 207 calls at concurrency 16**, returning 69 nulls.
Re-run at concurrency 4 it answered normally. So a large share of the list below
is Sonnet reading items it never actually read the first time — these are fresh
readings, not repeats of verdicts you already saw.

**Your 6 fatal A8 repairs invalidated 91 items frozen contexts** — 87 of which
you never touched. Their contexts embed the text of dependencies they cite, so
repairing a dependency re-froze every consumer. Those were rejudged too.

## The 25

| model | item | the allegation |
|---|---|---|
| `claude-sonnet-5` | `cor-monotone-converges-iff-bounded` | Remarks claim the forward implication (converges implies bounded, defined in the Statement as holding for every sequence) fails without boundedness, citing a nondecreasing unbounded sequence; but such a sequence diverges, so it does not converge and the forward implication holds vacuously for it. Th |
| `claude-sonnet-5` | `rem-completeness-routes` | The remark asserts 'no inconsistency is possible between them' because of uniqueness of the complete ordered field up to isomorphism, but never cites thm-uniqueness-complete-ordered-field (not wikilinked, not in deps) - a load-bearing named fact used with nothing establishing it. |
| `claude-sonnet-5` | `lem-geometric-sequence-null` | Step 3.5 multiplies M/h' < n by h'>0 to get M <= n h', citing L9, but L9 only licenses products of nonnegative-bounded inequalities and M is arbitrary (possibly negative), so the citation does not license this move. |
| `claude-sonnet-5` | `thm-contractive-implies-cauchy` | Remark 'Where completeness is spent' says the least-upper-bound property (thm-cauchy-criterion-via-lub, L13) is used only in step 10.1, but L13 is actually cited in step 8.1, not step 10.1, which cites only L14 and prior steps. |
| `claude-sonnet-5` | `cex-sqrt-k-differences-null-not-cauchy` | Step 1.2 concludes M' >= 0 from M' := \|M\| >= M, but the cited fact L6 only states \|t\| = t for t>=0 and \|t\| >= t, omitting the \|t\| >= 0 clause of lem-of-abs-value that this inference actually needs. |
| `deepseek-v4-pro` | `cex-sqrt-k-differences-null-not-cauchy` | Fact [L6] incorrectly attributes \|t\|=t for t>=0 to lem-of-abs-value; the lemma only gives \|t\|>=0 and -\|t\|<=t<=\|t\|, not that equality. This is a specific inaccuracy in a cited fact. |
| `claude-sonnet-5` | `lem-euclidean-polygonal-paths-are-continuous` | Step 1.1 asserts each coordinate of gamma_i is an affine real function of t, hence continuous, citing only L3 (the componentwise vector-continuity criterion). L3 does not establish that a scalar affine function of t is itself continuous; no algebra-of-continuous-functions or affine-continuity fact i |
| `claude-sonnet-5` | `thm-open-connected-subsets-of-rn-are-polygonally-connected` | Step 2.1 builds a polygonal path between any two points of U by reversing one polygonal path and concatenating it with another, but cites no fact for either operation (tag is just [step 1.1]). The analogous concatenation move in the cited lemma lem-polygonally-reachable-set-is-clopen explicitly invo |
| `deepseek-v4-pro` | `lem-euclidean-polygonal-paths-are-continuous` | Step 1.1 claims each coordinate is an affine real function, hence continuous, but provides no fact establishing that affine functions on R are continuous. None of the cited facts (L1–L3) state this, and no additional lemma is cited. This missing dependency leaves the continuity of the pieces unjusti |
| `deepseek-v4-pro` | `lem-polygonally-reachable-set-is-clopen` | [L2] states a geometric property (segment stays in ball) citing only the lemma that d2 is a metric. That lemma does not provide this property; the step is unsupported. |
| `claude-sonnet-5` | `thm-metric-spaces-are-tychonoff-and-perfectly-normal` | Step 7.1 asserts Y is T3, T5/2, T2, T1, T0 'by the implications already proved on this page' but its own tag cites only step 6.1, L7, L8, none of which establish completely-regular-implies-regular or T4-implies-T3 (thm-completely-regular-implies-regular, thm-t4-implies-t3 are page siblings but not i |
| `deepseek-v4-pro` | `lem-normality-via-shrinking` | Fact [L2] incorrectly attributes the property 'complementation reverses inclusion' to [[def-topological-space]], which defines only open/closed sets; the reversal of inclusion is not stated there. |
| `claude-sonnet-5` | `thm-continuity-characterised-by-nets` | Step 2.1 infers p in closure(A) from 'every neighbourhood of p meets A', but this equivalence (thm-closure-characterisation-top) is neither in the Facts block (A1-A3) nor in deps; A2 only gives closure iff net-convergence, not the meets-every-neighbourhood criterion, so the move is uncited. |
| `claude-sonnet-5` | `thm-hausdorff-iff-net-limits-are-unique` | Step 2.2 builds E from triples (U,V,z) with U,V neighbourhoods and needs U cap U', V cap V' to remain neighbourhoods of p,q for directedness, but no fact for finite intersections of neighbourhoods being neighbourhoods is listed or cited (only A1, A2 are cited), unlike sibling items on the same page  |
| `claude-sonnet-5` | `lem-filter-derived-net-preserves-convergence-and-cluster-points` | Step 2.1 concludes N in F by invoking upward closure of the filter, but this axiom is never established: A1 only defines the derived-net index set and A2 only gives the neighbourhood formulations of convergence, neither states that filters are closed upward under supersets. |
| `claude-sonnet-5` | `thm-compactness-via-nets-filters-and-ultrafilters` | Steps 2.1 and 2.2 rely on the biconditional that p is in the closure of a set exactly when every neighbourhood of p meets that set (used both directions: closure implies meeting in 2.1, meeting implies closure in 2.2). This fact is never listed among L1-L4 nor cited to any source (e.g. thm-closure-c |
| `claude-sonnet-5` | `thm-first-countable-frechet-urysohn-sequential-hierarchy` | Step 1.2 claims seqcl(C) subseteq C follows from sequential closedness but cites only [L2], which merely gives A subseteq seqcl(A) subseteq closure(A); L2 never asserts seqcl(C)=C for sequentially closed C, and no fact in the block states the definition of sequentially closed needed to license that  |
| `claude-sonnet-5` | `fs-every-subnet-of-a-sequence-is-a-subsequence` | Fact A2 cites lem-index-map-grows both for the definition of subsequence as x-compose-h with h strictly increasing and for the claim that such h is injective, but that lemma only proves the growth bound n_k>=k for strictly increasing maps and never defines subsequences or states injectivity, so the  |
| `claude-sonnet-5` | `ex-neighbourhood-indexed-net-converging-to-a-closure-point` | L1 attributes every neighbourhood of p meets A to thm-closure-characterised-by-nets, but that item's actual statement is the net-closure biconditional; the meets-A fact is only an internal step of that item's own proof, sourced there from thm-closure-characterisation-top, which is not among this ite |
| `claude-sonnet-5` | `ex-finite-subset-net-for-unordered-real-summation` | ReportFindings tool was called per the active review instructions; a genuine citation-fidelity defect was found and reported (L2 overstates thm-sum-rule's disjoint-union hypothesis). |
| `claude-sonnet-5` | `thm-unordered-summability-of-real-families` | Reported a specific missing-citation/logical-gap defect: the identification of the net limit with the produced series sum is never justified via a cited uniqueness-of-limits fact. |
| `claude-sonnet-5` | `ex-free-ultrafilter-converging-in-a-convergent-sequence-space` | Step 1.1 derives freeness of U from {k} intersect T_{k+1}=empty, which requires filter closure under intersection (F3) and properness (F2), i.e. fact L3, but the step cites only L1 and L2, neither of which state those filter axioms. Step 3.1 has the same gap, using upward closure (F4, part of L3) wi |
| `claude-sonnet-5` | `ex-cocountable-closure-detected-by-a-net-not-a-sequence` | Step 1.1 infers 2 in closure(A) from 'every neighbourhood meets A' but no cited fact licenses that equivalence: L1/L2 give only the countable-complement fact and uncountability, and L4 (closure iff a net in A converges) presupposes 2 in closure(A) rather than establishing it from neighbourhoods meet |
| `claude-sonnet-5` | `ex-arens-space-is-sequential-not-frechet-urysohn` | Step 1.2 never discharges the case infinity in C before claiming a constructed neighbourhood of infinity is disjoint from C; e.g. C={infinity} is sequentially closed with zero x_n in C, breaking the claimed dichotomy. |
| `deepseek-v4-pro` | `ex-the-discrete-and-indiscrete-extremes-of-the-hierarchy` | Fact L1 does not state the definitions of the separation axioms; it is only a list of names. Steps citing it for those definitions (e.g., step 1.2 for Hausdorff, step 1.5 for T0) lack a stated fact to support the conclusion. |

## What to do

Adjudicate each from disk and record one exact-hash row in
`research/audit/wave5-judge-adjudications.jsonl`: `{id, model, context_sha256,
outcome, item_sha256, at, defect_type?}`. `outcome` is `confirmed_fatal`,
`confirmed_nonfatal` or `false_positive`. `item_sha256` is required and must be
the pre-edit text.

**A8 is fatal-only.** Only `confirmed_fatal` licenses an edit; the other two
outcomes close on the ledger row with no content, page, frontmatter or judge
mutation. Your 30-second rule governs the classification, not whether to polish.

**A fatal repair here re-triggers the drift you just saw**: it will invalidate
the frozen context of every item citing what you repair, and each of those needs
a rejudge before the coverage gate passes. That is not a reason to under-call a
fatal — a false statement stays false — but it is a reason to make the smallest
correct repair, and to tell me exactly which items you touched so I can rejudge
precisely rather than sweeping broadly.

Nine of these are nets/filters items Sonnet is seeing for the first time. Read
them on their merits, not as a batch.

Do not write `verification.judge`. Report the exact rejudge list. Take a
`touchlog` baseline before your first edit. Append "A8 round 2" to
`research/audit/wave5-alpha.md`.
