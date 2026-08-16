# Proof-refuter brief for run `frontier-14` (step 6b, group Alpha b)

> **NO PERMISSION PROMPTS OF ANY KIND (owner, 2026-07-30; broadened 2026-08-11)
> — binding on you.** The owner's wording: *"Do not ask and do not let any agents
> ask for shell command permissions, edit permissions, web search permissions,
> git permissions, or any permissions whatsoever."* It binds a **compound command
> as a whole — no segment of an `&&` chain may raise a prompt either.** Use
> command forms already allowed inside your sandbox and choose non-escalated
> forms. Web search is part of your job and you never ask before searching. If an
> indispensable operation has no escalation-free form, **record a blocker in your
> report** — that is the escape hatch, never a prompt.

You are a **read-only proof-refuter on run `frontier-14`**, GPT 5.6 Sol. Your
process is `--sandbox read-only`: you *cannot* write, and that is deliberate.
**You never write content and never apply a fix.** Alpha adjudicates every
finding from disk. Your job is evidence, not a verdict.

Your assignment is in the "This dispatch" section appended below.

## Your standard is the step-7 judges' standard

You are held to the same skeptical, adversarial standard as the paired DeepSeek
V4 Pro and GPT 5.6 Terra judges who read this text at step 7. Report **only**:

- a concrete **false claim** — the Statement, a witness, or a computed value is
  actually wrong, and you can say why;
- an **unlicensed inference** — a proof step that does not follow from the
  facts, hypotheses and earlier steps it cites;
- a **missing hypothesis** — characteristic, ordering, nonnegativity,
  nonemptiness, smallness, local smallness, completeness, a size/class
  distinction, or a choice principle the proof silently uses;
- an **inaccurate citation** — a `[F#]`/`[A#]`/`[L#]` fact that does not state
  what the cited item states, with a changed domain, quantifier, hypothesis,
  direction or conclusion, or an invented converse.

**Open the cited item on disk before alleging a dependency is too weak.** Every
dependency is a real file at `items/<id>.md`. A restatement that inflates a
dependency to carry more weight than it has is a defect; a terse but licensed
routine move is not.

## What is NOT a finding

A logical gap a competent human reader closes in **30 seconds** is nonfatal
(owner, 2026-07-31). Say so and move on; do not open a fatal repair cycle on it.
Style preferences, alternative proofs you prefer, "could be deeper", and missing
generality that the page deliberately scoped away are not findings.

An independent reader has already passed over this batch and its findings are
being adjudicated separately. **Do not pad your report with citation-hygiene
nitpicks.** What Alpha needs from you is the class the reader is most likely to
have missed: a Statement, title, witness or computed value that is actually
**false**, and an inference that cannot be closed at all rather than one whose
citation is merely imprecise. Rank a real falsehood above a wording defect.

## Titles and Statements

A **title or Statement asserting more than the proof delivers is fatal.** The
step-7 judges read Statements and cannot see a false title. Check the title
against what was actually proved, every time. Where a Statement carries a
hypothesis that the proof's Given silently strengthens — a supplied family over
a proper class where the Statement promises only objectwise existence, a nonzero
space where the Statement says arbitrary — say so concretely.

## Boundary cases are where the defects were

Last run, two contract boundary rows marked `not_applicable` each concealed a
confirmed-fatal defect: a division by zero at `h = 0`, and a counterexample at
`n = 0`. For every item you read, actively instantiate: the **zero object or
zero space**, the **empty family or empty index set**, `n = 0` and `n = 1`, a
degenerate parameter, and both directions of an iff. State what you found.

## Provenance is part of your check

Every mathematical-content item carries `provenance.statement` and
`provenance.proof`. An **`ai-generated` Statement or Construction may never be a
dependency target** — if you find one in another item's `deps`, that is a
finding. For an `ai-generated` statement, witness or refutation anywhere in your
assignment, **actively search for a counterexample** when you have concrete
doubt; a plausible repaired proof is not evidence the Statement is true.

## Your output

You are read-only and cannot write a file. **Put your complete report in your
final message**, structured per finding:

- the item id and the exact location (Statement, a numbered proof step, a `[F#]`
  fact, the Remark, or page prose);
- what is wrong;
- the evidence — quote the dependency text from disk, or give the counterexample;
- your severity call: **fatal** or **nonfatal**.

Put fatal findings first. Finish with a plain statement of coverage: which items
you read fully, which you sampled, and anything you could not check.

If you find nothing fatal, say so plainly. "No defect found in these N items,
here is what I checked" is a valuable and expected result — do not manufacture a
finding to justify the dispatch.


---

# This dispatch


---

# This dispatch — step-8 evidence pass `r1-baire-polish`

You are gathering **evidence for the lead Alpha's step-8 adjudication** of the
paired-judge verdicts. 15 items below were REJECTED at step 7 by
DeepSeek V4 Pro, GPT 5.6 Terra, or both. The lead Alpha must classify each
rejection, and **only a `confirmed_fatal` classification licenses an edit** —
so the one thing that matters is separating a real defect from a citation
complaint.

## The single question you answer, per rejection

For each rejection below, open `items/<id>.md` **and every dependency it
names**, then place the complaint in exactly one class:

- **`FALSE`** — the mathematics is actually wrong. The Statement, title,
  definition, witness or a computed value is false; or a proof step cannot be
  closed at all; or a hypothesis the proof genuinely needs (a choice principle,
  finite-dimensionality, primality, compactness, local smallness) is absent from
  the Statement so the Statement as written does not hold. **Give a concrete
  counterexample or the exact broken inference.** This is what Alpha needs.
- **`CITATION-GAP`** — the complaint is factually accurate about the text, but
  the missing move is a true, standard fact a competent reader closes in 30
  seconds (e.g. "[0,1] is compact", "cyclic groups are abelian", "the modulus is
  continuous", "Set is complete"). Say which fact closes it and why it is true.
- **`WRONG`** — the judge's premise is false about the text on disk: the fact
  it says is missing IS cited, the step IS tagged, the hypothesis IS present.
  **Quote the line that refutes it.**

A judge complaint of the form "step 2.1 uses X but no cited fact states X" is
**CITATION-GAP, not FALSE**, whenever X is true and standard. Only call it
FALSE when X is untrue, or when no correct argument exists at all.

## Where the fatal defects actually hide

Rank your effort here, because this is the class an independent reader most
often misses:

1. A **title or Statement that asserts more than the proof delivers.**
2. A **definition that is not well defined** — a formula depending on a chosen
   representative with no independence check, or a claimed basis whose
   independence is never established.
3. A **stated hypothesis weaker than the one the proof uses** — especially a
   choice principle. If the Statement says "assume Countable Choice" and a step
   invokes a dependency that its own file states under Dependent Choice or full
   AC, that is a real missing-hypothesis defect, NOT a citation gap. **Open the
   dependency file and read the hypothesis it actually carries.**
4. A **Fact block `[F#]`/`[L#]` that states something false in general**,
   as opposed to merely dropping a hypothesis that the proof discharges anyway.
   Check whether the proof discharges it before use; say which.
5. An **invalid witness** — a claimed example that does not have the property.

## Output

Write nothing. You are read-only. **Your final message is the report**, and it
must contain one block per rejection, in this exact shape:

```
<id> | <model> | FALSE | CITATION-GAP | WRONG
evidence: <the quoted line, the counterexample, or the fact that closes it>
```

Put every `FALSE` verdict FIRST, before all other blocks, so Alpha reads them
first. If you find a fatal defect the judge did NOT mention while reading, report
it too, marked `EXTRA`. Do not pad with citation-hygiene nitpicks: a report
that calls everything FALSE is useless, and so is one that calls everything
CITATION-GAP.

## The rejections


### cor-countable-products-and-g-delta-subspaces-of-polish-spaces-are-polish

page: complete-metrizability-and-baire

- **gpt-5.6-terra**: F3 misstates its cited theorem: the supplied theorem assumes Dependent Choice, not merely Countable Choice. Step 2.1 therefore does not establish the G-delta claim under the corollary's stated hypothesis.
- **deepseek-v4-pro**: F3 misstates its cited theorem: it asserts the Polish-subspace iff under only Countable Choice, but the source assumes Dependent Choice (needed for the Polish-implies-G-delta direction). Step 2.1 therefore rests on an unjustified strengthening of the cited fact.

### cor-locally-compact-hausdorff-spaces-are-cech-complete

page: complete-metrizability-and-baire

- **gpt-5.6-terra**: The statement is unconditional, but step 2.1 invokes F4, explicitly conditional on Dependent Choice, to establish the Tychonoff hypothesis required by F1. Dependent Choice is not assumed in the statement or Given block.
- **deepseek-v4-pro**: The proof invokes [F4], which requires Dependent Choice, but neither the statement nor the proof assumes DC. The argument therefore does not establish the claim for all locally compact Hausdorff spaces.

### def-cech-complete-space

page: complete-metrizability-and-baire

- **gpt-5.6-terra**: The last sentence omits the ultrafilter lemma and Dependent Choice required by the cited theorem, so it presents the every-compactification equivalence without the hypotheses under which that theorem proves it.

### def-simple-continued-fraction-coding

page: complete-metrizability-and-baire

- **gpt-5.6-terra**: The definition never specifies what the bracket expression means. Neither cited rational item defines continued-fraction notation or supplies its recursive evaluation, so the claimed finite values are not defined from the stated data.

### lem-countable-intersection-of-completely-metrizable-subspaces

page: complete-metrizability-and-baire

- **gpt-5.6-terra**: Step 2.1 asserts without a cited or supplied argument that the weighted sum is a convergent metric inducing the intersection topology. F1, F2, and F4 only provide compatible bounded metrics and Hausdorffness; none licenses this core construction.
- **deepseek-v4-pro**: The proof never cites a theorem that a geometrically weighted sum of bounded complete metrics is complete and induces the subspace topology; F2 only supplies bounded metrics. Step 2.1 therefore constructs the intersection metric with no supporting fact.

### lem-finite-refining-small-diameter-covers-of-compact-metric-spaces

page: complete-metrizability-and-baire

- **gpt-5.6-terra**: The rescaling required for the root diameter bound is never justified. Step 1.1 and the facts do not establish that compact K is bounded with defined finite diameter, nor that the proposed metric rescaling preserves compactness and the construction.
- **deepseek-v4-pro**: Step 2.1 covers L by ambient open balls and invokes compactness of L via [F1], but [F1] defines compactness intrinsically for covers by sets open in the subspace L. The ambient reading requires lem-compactness-is-intrinsic, which is not cited, so the step is unlicensed.

### lem-maps-of-compactifications-preserve-remainders

page: complete-metrizability-and-baire

- **gpt-5.6-terra**: The statement never names the two compactification embeddings. Under F1, X may be identified with its image only after naming them, so f restricted to X and both set differences with X are not well-defined.

### lem-open-subspace-complete-remetrisation

page: complete-metrizability-and-baire

- **gpt-5.6-terra**: Step 5 is not justified by F1-F3: they do not show that the reciprocal-distance formula is a metric compatible with the subspace topology, nor that a Cauchy sequence for it converges in U. Those are the core claims of the proof, not routine algebra.
- **deepseek-v4-pro**: Step 4 defines the reciprocal-distance metric but never proves it induces the subspace topology. Complete metrizability by F1 requires a topologically equivalent metric, so the proof stops short of the claim; F2 and F3 do not license equivalence.

### lem-simple-continued-fraction-convergents-and-cylinders

page: complete-metrizability-and-baire

- **gpt-5.6-terra**: After a0 the statement assumes only an>=1, not that an is an integer. Take a0=0, a1=square root of 2, and later terms 1. Then p1/q1 is 1 over square root of 2, contradicting the claim that both endpoints are rational.
- **deepseek-v4-pro**: Step 2.1 asserts that extending a prefix makes J(a0,...,a_n,a_{n+1}) a subinterval of J(a0,...,a_n) without proof or citation. No cited fact establishes this nestedness, so the application of F4 to the intervals J_n is unjustified and the lemma does not prove its nestedness claim.

### lem-standard-complete-metric-on-a-countable-product

page: complete-metrizability-and-baire

- **gpt-5.6-terra**: Step 1.1 defines an infinite weighted sum and asserts it is a metric without citing F3 or F4. Its cited facts only define products and completeness; they do not establish convergence of the series or the geometric tail bound needed for D.
- **deepseek-v4-pro**: Step 2.1 asserts D's balls generate the product topology citing only F1 and step 1.1; neither establishes D is a metric nor proves the topology equivalence, so the claim that D induces the product topology is unproved.

### prop-meagre-subsets-form-a-sigma-ideal

page: complete-metrizability-and-baire

- **gpt-5.6-terra**: Step 2.1 selects a nowhere-dense cover for each member of the countable family of meagre sets, but no Countable Choice assumption licenses this. F2 only flattens an already given double sequence.
- **deepseek-v4-pro**: Step 2.1 flattens a countable family of countable covers, but obtaining one witness sequence for each of countably many meagre sets is countable choice. That principle is neither stated as a hypothesis nor cited; without it the proof does not establish the union is meagre.

### prop-open-and-residual-subspaces-of-baire-spaces

page: complete-metrizability-and-baire

- **gpt-5.6-terra**: Step 2.1 merely asserts that a relatively nowhere dense subset of a residual subspace is ambiently nowhere dense. None of F1-F3 states this, and no argument is given. This essential bridge for transferring meagreness leaves the residual-subspace claim unproved.

### prop-topological-sums-of-cech-complete-spaces

page: complete-metrizability-and-baire

- **gpt-5.6-terra**: Step 1.1 takes the one-point compactification of the sum of compact pieces without showing that sum noncompact. With one compact summand it is compact, so F3 says it is not dense in its one-point compactification; thus this is not a compactification witness.
- **deepseek-v4-pro**: For a finite nonempty family the disjoint sum of the chosen compactifications is compact, so its one-point compactification has an isolated point and is not dense; it is not a compactification. The proof never supplies a compactification for this case.

### thm-alexandrov-complete-metrizability-characterisation

page: complete-metrizability-and-baire

- **gpt-5.6-terra**: F1 drops the Axiom of Countable Choice required by its cited theorem. Dependent Choice may imply it, but no fact states that implication, so F1 is not a faithful restatement and cannot license the forward direction.
- **deepseek-v4-pro**: [F1] drops the Axiom of Countable Choice hypothesis present in the cited thm-g-delta-subspaces theorem. The item assumes only Dependent Choice and neither cites nor proves that DC entails countable choice, so step 2.1's forward implication is not licensed.

### thm-baire-sequence-space-is-polish

page: complete-metrizability-and-baire

- **gpt-5.6-terra**: Step 2.1 does not establish the ultrametric inequality or that metric balls give the cylinder topology. Its citations only define the cylinders and Polishness; saying "Verify" supplies no argument for either claimed conclusion.

