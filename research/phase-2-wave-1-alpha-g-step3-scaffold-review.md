# phase-2-wave-1 — Alpha `g`, Step 3 scaffold review

This review covers batch `9` and batch `13`, including all three A/B pairs. I
read the current manifests, coverage, notes, assigned design sections, and
`research/plan-spec.json`; recomputed page and item closures from the current
plan, every run manifest, and published item frontmatter; checked the B pages;
and read the complete cited source ranges. I did not edit either batch
scaffold.

## Verdicts

| Batch | A page | B page | Verdict |
| ---: | --- | --- | --- |
| 9 | `quantitative-induced-density-and-the-loglog-step` | `quantitative-induced-density-and-the-loglog-step-examples` | `insufficient` |
| 13 | `finite-automata-transition-and-determinisation-interfaces` | `finite-automata-transition-and-determinisation-interfaces-examples` | `sufficient` |
| 13 | `turing-machine-configuration-boundary-interface` | `turing-machine-configuration-boundary-interface-examples` | `sufficient` |

No A page exceeds the 60-item limit. None of the three page closures contains a
B-page supplier or reaches `deferred-set-theory-beyond-choice`. There is no
same-frontier supplier for either owned batch; the required batch-9 and
batch-13 cross-batch input files therefore contain `[]`, and the unified ledger
now records both batches as reviewed.

## Batch 9 — quantitative induced density

The local mathematical spine is the right one. The 18 A items proceed from
labelled induced-copy density and QID block sequences through good-copy
extension, the special-copy and maximal-blowup trichotomies, logarithmic
divisibility, the finite density profile, the two-parameter recurrence, and the
quadratic-over-log-log theorem. The four B computations are correct: the
three-block `P3` example has 27 good copies and 9 extensions of a fixed middle
choice, `K_{3,6}` has 126 labelled `P3` embeddings, and the displayed constant
and logarithmic exponent substitutions give `16C` and `8C` at `x=1/16`.

The complete relevant text of [Bucić–Nguyen–Scott–Seymour, Sections
3–5](https://arxiv.org/html/2301.10147v3) supports this route. In particular,
4.3 supplies the maximal-blowup trichotomy, 4.4 supplies the restricted
blockade, and 5.2 defines `t` as the least integer with
`p^t >= epsilon^(-2)` and proves the exact `beta_s` recurrence before its
iteration. The manifest correctly repairs the source's displayed 4.4 exponent
typo by using `beta+2d`, not `beta+d`, and correctly uses
`t_(k+1)=s t_k` in 4.3. [Fox–Sudakov §2, pp. 8–10](https://arxiv.org/pdf/0706.4112)
independently confirms the two-density recursion and quadratic logarithmic
iteration. [Zhao §2.6, printed pp. 72–75](https://yufeizhao.com/gtacbook/gtacbook.pdf)
supplies the independent labelled-counting and finite-averaging treatment. All
three full texts are fetch-stamped; there is no source drop or
`source_resolution` decision.

Three defects nevertheless keep the pair blocked.

1. The owned evidence does not satisfy the required inherited semantic audit.
   The coverage records a 61-page, 1,419-item traversal but labels it
   `structural-only-not-semantic-certification`; the notes repeat that it does
   not certify every inherited proof. This cannot be waived by the current
   `resolved_objections` entry. Beta 9 must record the complete proof-by-proof
   audit of statements, hypotheses, direction, conventions, axiom strength,
   and actual uses. While refreshing that evidence it must also delete the
   stale `later_edges` and `outside_page_closure` rows for
   `def-labelled-blowup-and-good-induced-copy ->
   def-blockade-rainbow-induced-copy`: the current manifest deliberately and
   correctly removed that later dependency.

2. The current item graph does not reach the definition of floor. The six
   consumers named in the verdict use `floor` or `ceil`, but none has a path to
   `lem-integer-part`. That published item defines floor and explicitly says it
   does not define ceiling. Beta 9 must add the exact earlier dependency and
   either derive ceiling from floor or avoid it by using least-natural
   formulations. The latter matches source 5.2: define `t` as the least
   natural satisfying `p^t >= epsilon^(-2)`, and define the chosen block size
   `m` as the least natural at least `eta beta_s(pa,b)|F|`; prove the needed
   one-unit bounds before using them. The supplying item already lies in the
   declared page closure, so no new prerequisite A/B pair or central-plan edge
   is needed.

3. The recurrence item begins “Under the setup of P and F,” but neither letter
   denotes a stated setup. Its statement also uses undeclared `h` and leaves
   the complete `epsilon,delta,x,p,eta,t,G,beta_s` chain implicit. This is an
   exact-hypothesis gap, not a source gap. The repair is the full quantified
   restatement specified in the verdict. Until then the dependency path
   `thm-quantitative-density-theorem-for-ell-divisive-graphs ->
   lem-ell-divisibility-amplifies-through-a-blockade` is inadequate, and both
   final corollaries and their dependent B examples remain blocked.

No new prerequisite A/B pair is required. These are batch-9 manifest and
evidence repairs for its owning Beta; there was no live Beta endpoint during
this review, so the exact handoff is recorded here and in the verdict file for
the Step-3 repair transition.

## Batch 13 — finite automata

The 3-item A page and 3-item B page match the assigned design. The recomputed
item closure has 128 items, no unresolved ID, and no cycle. Its page closure has
46 pages, all A pages. The direct suppliers have the needed direction and
hypotheses: finite-cardinality strictness proves epsilon saturation by step
`|Q|`; natural-number recursion and induction construct the word transition;
finite power-set cardinality makes the full subset DFA finite; and the existing
DFA transition theorem supplies the extended deterministic map. The invariant
is correctly stated as
`mu*(ECl(S),w)=widehat_delta(S,w)`, avoiding the false unclosed-set base case.
The singleton-transition construction proves only DFA-to-NFA, as required.

[Gallier §§3.3–3.5, printed pp. 27–36](https://www.cis.upenn.edu/~jean/tcbook.pdf)
gives the finite epsilon-closure sequence, endpoint semantics, closed-subset
determinisation, and DFA-as-NFA direction. [Aho Lecture 3
§§1–2](https://www.cs.columbia.edu/~aho/cs3261/Lectures/L3-Regular_Expressions.html)
independently gives the full-power-set construction used by the scaffold. Both
complete texts are fetch-stamped. The three-state closure values, four-row
subset table, and both missing-closure counterexamples on the B page all check
directly.

## Batch 13 — Turing-machine boundary

The one-definition A page and two-example B page also match the design. The
recomputed item closure has 67 items, no unresolved ID, and no cycle; its
45-page closure contains only A pages. The raw tuple uses only earlier set,
function, word, finite-cardinality, and natural-number machinery. Excluding the
blank from the input alphabet proves that the initial tape has finite support
equal to the input domain, including the empty word. Pairwise-distinct
start/accept/reject states make the boundary predicates disjoint and the
initial configuration nonhalting. The B examples specify total transitions on
the exact nonhalting domain and make no reachability claim.

[Savage §5.1](https://cs.brown.edu/people/jsavage/book/pdfs/ModelsOfComputation_Chapter5.pdf),
[Watrous Lecture 12 §12.1](https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.12.pdf),
and [MIT 18.404J Lecture 5, slides
8–10](https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/18c8cd00b14d48dc5865f3bdc41abd76_MIT18_404f20_lec5.pdf)
are complete, fetch-stamped treatments of the raw tuple, blank-input tape, and
halting-state interface. Their one/two-sided tape and left-boundary variants
are correctly recorded as variants; the scaffold does not claim an unproved
equivalence. There is no source drop or source uncertainty.

## Scope decisions and checks

`scope-decisions refresh` produced 16 pending rows: seven for batch 9 and nine
for batch 13. After reading each source result and checking later destinations,
all 16 stand. The deferred automata lower-bound result goes to the later
`myhill-nerode-theory-and-dfa-minimization` page (order 589); the run-level and
nondeterministic Turing material goes to
`turing-machines-configurations-and-computation` (order 597). No
`owner-decision` remains.

Checks run:

- `node tools/source-fetch-check.mjs --coverage research/phase-2-wave-1-batch-9.coverage.json,research/phase-2-wave-1-batch-13.coverage.json --stamp`:
  8/8 sources fetch-verified, zero newly stamped, zero drops.
- `node tools/manifest-deps.mjs research/phase-2-wave-1-batch-*.pages.json`:
  434 items, zero missing dependency arrays, zero errors.
- `node tools/coverage-checklist.mjs --require-destination` on the two owned
  coverage files: 3 pages, 82 harvested results, zero errors and zero warnings.
- `node tools/content-policy.mjs --manifest-only` on the two owned manifests:
  31 items, zero errors and zero warnings.
- `node tools/scope-decisions.mjs check --run phase-2-wave-1 --group g`:
  16 current declines, zero errors.
- `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-wave-1`:
  refreshed and deduplicated; batches 9 and 13 are reviewed with no owned edge.
- `node tools/validate-plan.mjs research/plan-spec.json`: passed; declared page
  order is acyclic and consistent, with no item-level cycle, forward reference,
  B-page dependency, or unresolved ID among itemized pages.
- `node tools/extcheck.mjs --quiet`: passed; every recorded-not-proved statement
  is a cited remark with no proof and every consequence is marked. Its 63
  repository-wide published warnings are pre-existing and do not touch the
  owned manifest closures.

The only repair handoff is batch 9. Both batch-13 pairs are ready for ordinary
Step-3 closure.
