# Frontier-17 Alpha-c read-only refutation — pair `outer-measure-and-the-caratheodory-extension-theorem`

Scope: the A page `outer-measure-and-the-caratheodory-extension-theorem` and its
B companion `…-examples` (batch 6). Read every item in full at `items/<id>.md`,
plus the contract entries in `research/frontier-17-batch-6.proof-contracts.json`,
plus every item named in each page's `requires` that a proof actually cites.

## Items — every one is mandatory

A page:
def-outer-measure,
def-caratheodory-measurable-set,
rem-caratheodory-measurability-versus-differentiability,
lem-caratheodory-subadditive-inequality-is-automatic,
prop-caratheodory-measurable-sets-form-an-algebra,
lem-finite-caratheodory-splitting **[high]**,
thm-countable-disjoint-caratheodory-splitting **[high]**,
prop-outer-null-sets-are-caratheodory-measurable,
thm-caratheodory-outer-measure-theorem **[high]**,
fs-every-subset-is-caratheodory-measurable,
fs-outer-measures-are-countably-additive-on-power-sets,
def-regular-outer-measure-and-measurable-hull,
thm-regular-outer-measures-are-continuous-from-below **[high]**,
thm-covering-cost-construction-produces-an-outer-measure **[high]**,
def-premeasure-on-an-algebra,
def-outer-measure-induced-by-a-premeasure,
cor-premeasure-induced-set-function-is-an-outer-measure **[high]**,
lem-disjointification-of-an-algebra-cover,
lem-induced-outer-measure-agrees-with-premeasure **[high]**,
lem-source-algebra-is-caratheodory-measurable **[high]**,
thm-caratheodory-extension-theorem **[high]**,
thm-premeasure-induced-outer-measure-is-regular **[high]**,
thm-finite-caratheodory-sets-characterized-by-source-algebra-approximation **[critical]**,
prop-caratheodory-extension-compares-with-other-extensions **[high]**,
thm-sigma-finite-premeasure-extension-is-unique **[high]**,
cor-finite-premeasure-extension-is-unique,
lem-sigma-finite-caratheodory-sets-have-generated-measurable-hulls **[high]**,
thm-caratheodory-domain-is-the-completion-under-sigma-finiteness **[high]**,
fs-finitely-additive-functions-on-algebras-always-extend **[high]**,
fs-premeasure-extensions-are-always-unique **[high]**,
fs-induced-outer-measures-always-agree-with-finitely-additive-data **[high]**,
def-metric-outer-measure,
lem-metric-outer-measure-boundary-layer-continuity **[high]**,
prop-closed-sets-are-caratheodory-measurable-for-metric-outer-measures **[high]**,
thm-borel-sets-are-caratheodory-measurable-for-metric-outer-measures **[critical]**.

B page:
ex-zero-one-outer-measure-on-a-two-point-set **[AI-generated construction]**,
ex-counting-outer-measure **[high]**,
ex-counting-premeasure-on-the-finite-cofinite-algebra **[critical]**,
ex-counting-outer-measure-is-metric-on-the-real-line **[high]**,
cex-three-point-outer-measure-has-only-trivial-caratheodory-sets **[AI-generated construction]**,
cex-finite-cofinite-set-function-is-not-a-premeasure,
cex-nonsigma-finite-premeasure-has-distinct-extensions **[high]**,
cex-two-point-outer-measure-need-not-be-regular **[AI-generated construction]**.

## What Alpha needs from you

Measure theory's fatal defects live in **σ-finiteness hypotheses, ∞ − ∞
cancellations, and countable-choice uses**. Concretely test:

- **Every arithmetic with ∞.** Find each place a proof subtracts, and check the
  quantity subtracted is finite *by a stated hypothesis*, not merely finite in the
  motivating case. The Carathéodory splitting and the uniqueness arguments are
  where this bites. A subtraction licensed only when μ*(E) < ∞ used without that
  hypothesis is fatal.
- **σ-finiteness.** `thm-sigma-finite-premeasure-extension-is-unique`,
  `lem-sigma-finite-caratheodory-sets-have-generated-measurable-hulls` and
  `thm-caratheodory-domain-is-the-completion-under-sigma-finiteness` each need
  σ-finiteness *of a specific object* — the premeasure on the algebra, or the set
  in question. Check which, and check the consumer supplies exactly that.
  `cor-finite-premeasure-extension-is-unique` must not be a special case that
  quietly needs more than finiteness.
- **Choice.** Every "for each n choose a cover within ε/2^n" is a countable
  choice. Check whether the item states it, cites a choice principle in `deps`,
  or genuinely avoids it. Note where the covers are chosen from a countable
  family (no choice needed) versus an arbitrary one.
- **Monotone/continuity hypotheses.** `thm-regular-outer-measures-are-continuous-from-below`
  is false for a general outer measure; verify the regularity hypothesis is
  actually used and that the measurable-hull definition supplies what the proof
  takes.
- **The three deliberately-false `fs-` statements** on the A page and the
  `cex-`/`fs-` items on the B page: each must actually be false, and its
  refutation must prove it. Check both inclusions wherever a σ-algebra identity is
  claimed, and check the counting-measure and finite-cofinite witnesses by direct
  computation.
- **`def-metric-outer-measure` through the Borel theorem.** The boundary-layer
  argument needs the layer sets to have summable outer measures; check the case
  where the sum diverges is handled, and that `d(A,B) > 0` (not merely disjoint,
  not merely `d ≥ 0`) is what is used.
- **Three `ai-generated` constructions** on the B page. Verify each by direct
  enumeration of its finite space; if you have concrete doubt, search for a
  counterexample rather than repairing the proof.

Also check every `[F#]`/`[A#]`/`[L#]` against the cited item's actual text on
disk before alleging it is too weak, and check each title against what its proof
delivers.

## Output

Finding ids `C-CA-1`, `C-CA-2`, … Each: item id, exact location, what is wrong,
the quoted dependency text or the explicit counterexample, and `fatal` or
`nonfatal`. Fatal first. Accept items explicitly where no specific defect exists
— "no defect in these N items, here is what I checked" is the expected result and
a valuable one. Do not manufacture findings.

Finish with a coverage statement: read in full / sampled / could not check.

Read-only is absolute: do not edit, patch, create or delete any repository file,
and never apply a fix. Alpha is the sole adjudicator.

**NO PERMISSION PROMPTS OF ANY KIND**, including for any segment of a compound
command. If an indispensable read has no escalation-free form, report that exact
blocker instead of prompting.
