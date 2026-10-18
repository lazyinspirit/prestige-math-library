# Batch 9 authoring notes — IID Lossless Source Coding and the AEP

## Scope and plan reconciliation

The current plan entry in research/plan-spec.json controls this pair: prove
the finite-alphabet IID information AEP and fixed-length lossless coding
achievability/converse with explicit error and rate limits. The B-page
summary also requires Bernoulli typical-set sizes and examples that isolate
the hypotheses behind information-spectrum convergence.

The generated batch task and planning notes label the separate design section
“none found.” The linked prose scaffold research/plan-information-theory-track.md
does contain an IT04 paragraph specifying AEP, typical-set counting, and
fixed-length achievability/converse. It agrees with the current plan; the
plan-spec adds the precise block-error and rate obligation. I retained both
scopes and made the current plan's exact fixed-binary-block convention
explicit. The track-wide convention is natural logarithms and nats, with
base-2 quantities converted by division by ln 2.

Cover and Thomas and the MIT notes use base-2 logarithms. Their source coding
discussion includes expected-length descriptions. Those passages support the
AEP and typical-set context; the local proof independently derives the
assigned fixed-length binary block-error theorem, including integer bit
rounding, the converse, and the strong converse.

## Inventory and item dependency levels

The assigned manifest now contains ten items: seven on A and three examples
on B. All dependencies below are explicit in item frontmatter and the
scaffold manifest. Levels are the computed in-run item levels; out-of-run
suppliers do not raise them.

| Level | Item | Direct dependencies |
|---:|---|---|
| 1 | def-finite-law-self-information-and-entropy | def-it-information-units-and-logarithm-base; def-qa-35-finite-probability-entropy-and-stochastic-matrices |
| 2 | def-finite-alphabet-iid-source | def-finite-law-self-information-and-entropy; def-identically-distributed-and-iid-random-variables; def-qa-35-finite-probability-entropy-and-stochastic-matrices |
| 3 | def-finite-source-information-density-and-typical-set | def-finite-alphabet-iid-source; def-finite-law-self-information-and-entropy; def-it-information-units-and-logarithm-base; def-qa-35-finite-probability-entropy-and-stochastic-matrices |
| 3 | def-fixed-length-lossless-block-code | def-finite-alphabet-iid-source; def-finite-law-self-information-and-entropy; def-it-information-units-and-logarithm-base; def-qa-35-finite-probability-entropy-and-stochastic-matrices |
| 4 | lem-finite-alphabet-iid-information-aep | def-finite-alphabet-iid-source; def-finite-law-self-information-and-entropy; def-finite-source-information-density-and-typical-set; def-it-information-units-and-logarithm-base; def-qa-35-finite-probability-entropy-and-stochastic-matrices; def-identically-distributed-and-iid-random-variables; cor-iid-finite-variance-weak-law; def-convergence-in-probability |
| 5 | cor-aep-typical-set-probability-and-size-bounds | def-finite-source-information-density-and-typical-set; lem-finite-alphabet-iid-information-aep |
| 5 | ex-correlated-bernoulli-source-fails-the-iid-aep | def-finite-law-self-information-and-entropy; def-qa-35-finite-probability-entropy-and-stochastic-matrices; lem-finite-alphabet-iid-information-aep |
| 5 | ex-independent-nonidentical-source-has-no-information-rate-limit | def-finite-law-self-information-and-entropy; lem-finite-alphabet-iid-information-aep |
| 6 | thm-fixed-length-lossless-source-coding | def-fixed-length-lossless-block-code; def-finite-alphabet-iid-source; def-finite-law-self-information-and-entropy; def-finite-source-information-density-and-typical-set; def-it-information-units-and-logarithm-base; def-qa-35-finite-probability-entropy-and-stochastic-matrices; cor-aep-typical-set-probability-and-size-bounds |
| 6 | ex-bernoulli-aep-and-typical-set-count | def-finite-alphabet-iid-source; def-finite-law-self-information-and-entropy; def-finite-source-information-density-and-typical-set; def-qa-35-finite-probability-entropy-and-stochastic-matrices; cor-aep-typical-set-probability-and-size-bounds |

Batch 9 remains at dependency level 1 with prerequisite batch 4, matching the
current dependency-level input
8ef5197111cd7fe6e5f51723d594c7e3b569b7e17c45722c4d6fc6142a7e9d07. The
scoped item-level computation checked all ten manifest entries without a cycle
and returned levels 1 through 6 as listed above. The helper's in-run supplier
is batch-4 item def-it-information-units-and-logarithm-base at level 0.

## Supplier review and unresolved interface

The required weak-laws page is published. I read its page conventions and the
current Statements/Proofs for:

- def-identically-distributed-and-iid-random-variables;
- cor-iid-finite-variance-weak-law;
- thm-chebyshev-weak-law-for-uncorrelated-arrays; and
- thm-factorization-of-expectations-for-independent-variables.

I also inspected the directly used convergence and variance definitions and
inequalities. The weak-law corollary requires IID square-integrable variables.
The finite-alphabet surprisal has finite range, hence is square-integrable;
its mean and variance are the finite sums H(p) and V(p). The supplier's
quantitative bound is exactly V(p)/(n epsilon^2). The transformed variables
remain IID because inverse images under the same measurable finite-valued
map preserve mutual independence and identical laws.

The current batch-4 manifest and page are no longer empty. I inspected the
published body of def-qa-35-finite-probability-entropy-and-stochastic-matrices:
it defines probability vectors, $H(p)=-\sum_{p_i>0}p_i\ln p_i$, and the
zero-term convention in natural units. Its cited finite-probability-space
supplier was also read. I also inspected the current batch-4 draft body of
def-it-information-units-and-logarithm-base, which sets unmarked logarithms to
$\ln$, defines base conversion, and gives the nats/bits convention; its
natural-logarithm definition and order-laws supplier were read. Both exact
item bodies are now direct dependencies of the local finite-law helper, and
the AEP/coding proofs cite the relevant entropy and units facts explicitly.
The helper defines only support, self-information, surprisal variance, and
product/block information; it uses the published entropy definition rather
than replacing it. The page is still draft and these checks are not an
acceptance claim. No mathematical supplier needed by these claims is currently
missing; the item-level cross-batch evidence records the exact verified scope.

No arbitrary Axiom of Choice is used. The proofs use finite supports, finite
enumerations, and a single fixed default symbol. The non-identically
distributed example defines a consistent family of finite product laws and
does not assume an infinite-product extension.

## Source reading and retrieval history

1. Thomas M. Cover and Joy A. Thomas, Elements of Information Theory, 2nd ed.,
   Chapter 3, especially §§3.1–3.2, printed pages 57–62. I read the AEP proof,
   the typical-set probability and cardinality proof, and the typical-set
   compression construction. The complete book PDF was downloaded to /tmp
   and the relevant pages were extracted with mutool for inspection.
2. MIT OpenCourseWare 6.441 Information Theory, Spring 2010, Lecture 3,
   complete 17-page PDF. I inspected the full lecture; slides 7–11 contain
   the weak law, AEP proof, typical set and size bounds, and slides 12–13
   discuss typical-set compression.
3. MIT OpenCourseWare 6.441 Information Theory, Spring 2010, Lecture 5,
   complete 13-page PDF. I inspected the full lecture; pages 1–2 define
   variable-length source-code maps, and pages 7–11 treat expected optimal
   code length.

Searches included:

- site:ocw.mit.edu AEP lossless source coding lecture notes information theory pdf
- Gallager Information Theory and Reliable Communication Chapter 3 source coding MIT pdf
- Cover Thomas Elements of Information Theory Chapter 3 AEP full text pdf
- site:rle.mit.edu/rgallager/documents source coding AEP entropy pdf
- site:people.eecs.berkeley.edu information theory source coding theorem lecture notes AEP pdf
- David MacKay Information Theory Inference Learning Algorithms chapter source coding pdf official

MIT OCW provided direct full-text lecture PDFs. The Cover and Thomas PDF was too large
for the browser's inline PDF reader, which returned a content-size error; a
direct download of the same full-text URL succeeded, and the relevant pages
were inspected with mutool. This was not a dead-source or partial-text case.
The required source-fetch-check --stamp command then fetched and stamped all
five coverage records on the first check: 5/5 verified, zero drops, and no
recovery retries. Exact URLs, locators, per-item dispositions, recovery
attempts, and fetch stamps are in the coverage file. No source was dropped or
escalated for retrieval.

The AEP and fixed-length claims have complete local proofs. In particular,
the local coding proof does not treat Cover and Thomas's expected-length
construction as a fixed-length block-error theorem. The Bernoulli example
also contains an exact finite check at p=1/4, n=4, epsilon=(ln 3)/4:
eleven typical words with total mass 243/256. No registered finite-smoke
check applies to AEP/source coding; no unsupported check name was added.

## Authored arguments and boundaries

The A page contains the finite-law self-information and variance definition
(using the published entropy definition), IID source definition,
information-density/typical-set definition, fixed-length code definition,
quantitative AEP lemma, typical-set counting corollary, and fixed-length
coding theorem. Every proof gives the finite-support and
zero-mass details. The code achieves rate H(p) with the explicit bounds
e_n <= V(p)/sqrt(n) and R_n <= H(p)+n^(-1/4)+2 ln(2)/n. The converse gives
liminf rate at least H(p) for vanishing block error and error tending to one
when limsup rate is strictly below H(p).

The B examples give the exact Bernoulli weight interval and binomial count,
the fair and point-mass endpoints, a perfectly dependent Bernoulli process
with block information tending to zero, and independent non-identical finite
product laws whose normalized information alternates between ln 2 and zero.
The latter uses changing finite block laws and explicitly defines convergence
in probability to a constant; it asserts no existence theorem for an
infinite-product probability space.

No diagram materially clarifies these finite-set counting arguments; the
proofs do not rely on diagrams.

## Checks and readiness

- Scoped in-run dependency calculation used the run manifests for batches 4
  and 9: 27 items, no errors/cycles, all 10 batch-9 declared levels match the
  calculated levels 1–6.
- Focused `depcheck` on the ten batch-9 items and two pages: 0 errors, 0
  warnings; dependency closure checked 601 items and 436 pages.
- Source retrieval: 5/5 coverage records are fetch-verified; verification
  mode reports 0 documented drops and no unresolved source.
- `proof-layout`: 10 items, 22 steps, 0 defects.
- `precheck`: 10 files; all 6 proof-bearing items pass, all 4 definitions are
  not applicable, 0 failures.
- Strict proof-contract check: 6/6 proof-bearing items, 0 errors, 0 warnings.
- The final proof-contract-coverage scan stops on the unrelated empty A-page
  inventory for rate-distortion-and-lossy-source-coding in
  research/non-ml-math-remaining-81-2026-10-18-batch-11.pages.json (line 13);
  its companion B inventory is also empty (line 25). This batch does not own
  or edit those pages.
- The Step-1 decision command cannot load this run because
  lem-it-quantum-relative-entropy-support-regularization is listed in both
  batch 21 and batch 22 (see those manifests at lines 118 and 192). The tool
  rejects this non-companion duplicate before recording any item. A record
  attempt for def-finite-law-self-information-and-entropy failed with that
  same error, and no Step-1 records were written. This is outside batch 9;
  owner reconciliation of the duplicate is needed before the required
  hash-bound readiness records can be recorded. No `--owner` override was used.

The item-level supplier bodies required by this pair are currently present and
were read, and all batch-9 mathematical/content checks pass. The run-wide
proof-contract-coverage and Step-1 decision tools have the unrelated blockers
above. This completion record is not independent approval or acceptance of
batch 4.
