# Frontier-15 batch 3 — Step 6a independent-reader report

Status: complete. The independent read, licensed repairs, contract/manifest
synchronization, and final gate pass are complete.

Scope: both pages in `research/frontier-15-batch-3.pages.json`, comprising 72
scoped items (60 A-page items and 12 B-page items), of which 59 are
proof-bearing. I opened all 72 scoped item files, the two page files, the batch
notes, the full proof-contract file, and the 108 final distinct direct
dependencies.

The original contract had 222 citation rows; after the licensed repairs it has
235. Every final quote was reconciled against the cited source section on disk.
The findings below are semantic failures that the original substring checks did
not catch.

## Fatal findings

### R3-1 — `algebraic-closure-embeddings-and-separability` — fatal

**Exact location:** A-page summary, second paragraph, sentence beginning “A
simultaneous-root construction yields algebraic closures”.

**What is wrong:** The summary asserts existence of algebraic closures without
the Axiom of Choice, although the page's construction uses the maximal-ideal
theorem/Zorn and the proved existence theorem explicitly assumes Choice.

**Evidence:** `thm-one-step-simultaneous-root-extension` and
`thm-existence-of-algebraic-closures` both begin by assuming the Axiom of
Choice. The summary drops that load-bearing hypothesis.

### R3-2 — `thm-one-step-simultaneous-root-extension` — fatal

**Exact location:** frontmatter title.

**What is wrong:** The title says every field has the simultaneous algebraic
root extension unconditionally, while the Statement and proof assume Choice.

**Evidence:** Proof step 1.1 invokes the maximal-ideal theorem and Zorn; the
Statement begins “Assume the Axiom of Choice.” The title omits that hypothesis.

### R3-3 — `thm-existence-of-algebraic-closures` — fatal

**Exact location:** frontmatter title and Fact `[L1]`.

**What is wrong:** The title omits Choice, and `[L1]` restates the cited
simultaneous-root theorem as unconditional.

**Evidence:** The cited Statement says “Assume the Axiom of Choice.” The proof's
Given supplies Choice, but the citation restatement itself drops the source
hypothesis and the title asserts more than the Statement.

### R3-4 — `thm-algebraic-embedding-extension` — fatal

**Exact location:** frontmatter title and the `Given` line.

**What is wrong:** The title omits the Axiom of Choice required by the Statement
and Zorn proof; the proof context likewise lists the fields and embedding but
not Choice.

**Evidence:** The Statement begins “Assume the Axiom of Choice,” and step 3.1
uses Zorn's lemma.

### R3-5 — `cor-algebraic-closures-are-isomorphic-over-the-base` — fatal

**Exact location:** frontmatter title, `Given`, Fact `[L1]`, and step 1.1.

**What is wrong:** The title and `[L1]` suppress the Choice hypothesis of the
cited embedding-extension theorem.

**Evidence:** `thm-algebraic-embedding-extension` explicitly assumes Choice;
postulated algebraic closures do not by themselves supply the Zorn principle
used to extend the base embedding.

### R3-6 — `cor-conjugate-elements-are-related-by-an-automorphism-of-an-algebraic-closure` — fatal

**Exact location:** title, Statement, `Given`, Fact `[L4]`, and proof step 2.1.

**What is wrong:** The reverse implication extends an embedding across an
arbitrary algebraic closure using a theorem that assumes Choice, but the item is
entirely unconditional and `[L4]` drops that hypothesis.

**Evidence:** The exact cited Statement begins “Assume the Axiom of Choice.”
The extension in step 2.1 is the load-bearing use.

### R3-7 — `def-separable-degree` — fatal

**Exact location:** Definition paragraph beginning “Let $K/F$ be a finite field
extension and choose an algebraic closure”.

**What is wrong:** The definition asserts that the chosen closure exists by a
Choice-dependent theorem without assuming Choice. The numerical definition
itself only needs a supplied algebraic closure and should be conditional on that
datum.

**Evidence:** `thm-existence-of-algebraic-closures` explicitly assumes the
Axiom of Choice.

### R3-8 — `thm-separable-degree-is-independent-of-the-algebraic-closure` — fatal

**Exact location:** Fact `[L2]` and proof step 1.1.

**What is wrong:** The unconditional Statement is proved by choosing an
isomorphism of two arbitrary algebraic closures via a theorem whose exact
hypothesis is Choice; `[L2]` omits it.

**Evidence:** `cor-algebraic-closures-are-isomorphic-over-the-base` begins
“Assuming the Axiom of Choice.” For finite $K/F$, independence can instead be
proved choice-free by comparing the finite splitting fields of the product of
minimal polynomials of a finite generating basis.

### R3-9 — `lem-restriction-fibres-for-embeddings-in-a-finite-tower` — fatal

**Exact location:** Fact `[L1]` and proof step 1.1.

**What is wrong:** The unconditional finite-tower lemma cites the
Choice-dependent arbitrary algebraic embedding-extension theorem, and `[L1]`
drops its hypothesis.

**Evidence:** The source Statement explicitly assumes Choice. Because $L/K$ is
finite, a finite sequence of simple root adjunctions gives the extension without
Choice and is the licensed repair.

### R3-10 — `thm-purely-inseparable-extension-characterizations` — fatal

**Exact location:** Statement condition 3, Fact `[L3]`, and proof step 1.2.

**What is wrong:** The Statement speaks of “the inclusion $K\hookrightarrow
\Omega$” without assuming $K\subseteq\Omega$, and for arbitrary algebraic
$K/F$ the converse from a second conjugate to a second embedding of all of $K$
uses the Choice-dependent embedding-extension theorem. `[L3]` drops Choice.

**Evidence:** The cited theorem explicitly assumes Choice. The conjugate and
$p$-power equivalence is choice-free; uniqueness of the whole-extension
embedding is choice-free for finite $K/F$ and otherwise requires Choice.

### R3-11 — `thm-separable-closures-exist-and-are-isomorphic-over-the-base` — fatal

**Exact location:** frontmatter title, Facts `[L1]` and `[L5]`, and proof steps
1.1–1.2.

**What is wrong:** The title omits the Choice hypothesis in the Statement, and
both fact restatements suppress it. The proof also leaves implicit the finite
generation of the coefficient field in step 2.1 and the base-extension
preservation of separability in steps 1.2/2.2.

**Evidence:** The exact Statements of both cited existence and arbitrary
embedding-extension theorems assume Choice. The two omitted finite/separability
bridges are short but must be made explicit in the repair.

### R3-12 — `ex-algebraic-closure-of-the-rationals-and-real-algebraic-subfield` — fatal

**Exact location:** title/Example, `Given`, Facts `[L1]` and `[L3]`, and proof
steps 1.1/2.1.

**What is wrong:** The construction chooses an algebraic closure and extends
the embedding of the infinite algebraic field of real algebraic numbers using
two Choice-dependent results, but no Choice hypothesis is stated and both Facts
drop it.

**Evidence:** Both cited Statements explicitly assume Choice.

### R3-13 — `ex-algebraic-closure-of-a-finite-field` — fatal

**Exact location:** Facts `[L6]`/`[L7]` and proof steps 1.1–1.2.

**What is wrong:** The proof unnecessarily chooses a closure and invokes the
Choice-dependent arbitrary embedding theorem without a Choice hypothesis; both
Facts restate those results unconditionally.

**Evidence:** The Example already supplies an algebraic closure as its ambient
object. Inside that supplied closure, the roots of $x^{p^n}-x$ give the unique
subfield of order $p^n$ by a finite, choice-free argument.

### R3-14 — `ex-perfect-closure-of-fp-t-is-an-infinite-perfect-field` — fatal

**Exact location:** Fact `[L1]` and proof step 1.1.

**What is wrong:** `[L1]` says every field has an algebraic closure without the
Choice hypothesis of its source, even though the Example's Given already
supplies the needed algebraic closure.

**Evidence:** The cited existence theorem explicitly assumes Choice. The
citation and dependency are unnecessary.

### R3-15 — `fs-algebraic-closure-is-unique-up-to-unique-isomorphism` — fatal

**Exact location:** `Given`, Facts `[L1]`, `[L3]`, `[L4]`, and proof steps
1.1–3.1.

**What is wrong:** The refutation chooses a closure, extends an embedding across
it, and cites closure isomorphism, all through results whose exact Statements
assume Choice; the proof context supplies no Choice and each Fact drops the
hypothesis.

**Evidence:** The three cited source Statements explicitly assume the Axiom of
Choice.

## Nonfatal findings and polish

### R3-16 — `prop-base-field-embeddings-carry-elements-to-conjugates` — nonfatal

**Exact location:** Fact `[L1]` and proof step 1.1.

**What is wrong:** `[L1]` is stated for a field isomorphism, while step 1.1
applies it directly to an embedding $K\to L$ that need not be surjective.

**Why nonfatal:** Restricting the codomain to the image makes the embedding an
isomorphism and closes the gap immediately; this is within the 30-second rule.

### R3-17 — `thm-perfect-field-characterizations` — nonfatal

**Exact location:** proof step 1.1.

**What is wrong:** The characteristic-zero branch concludes from
$\gcd(f,f')=1$ that $f$ is separable without citing the library theorem that
states exactly that equivalence.

**Why nonfatal:** Adding the exact published gcd/separability fact closes the
gap immediately.

### R3-18 — `thm-primitive-element-theorem-for-finite-separable-extensions` — nonfatal

**Exact location:** proof step 1.1 and the `empty`/`one` boundary rows.

**What is wrong:** The reduction starts with combining two generators and does
not explicitly dispose of $r=0$ or $r=1$, although both are admitted by the
Statement. The theorem is true in both cases.

**Why nonfatal:** $E=F$ is generated by $0$, and a one-generator extension is
already simple; both are immediate 30-second boundary cases.

### R3-19 — `thm-algebraic-extension-is-purely-inseparable-over-its-separable-closure` — nonfatal

**Exact location:** proof step 3.1.

**What is wrong:** The characteristic-zero branch invokes the fact that every
irreducible polynomial is separable without any stated input licensing it.

**Why nonfatal:** The earlier proved perfect-field corollary states exactly that
characteristic-zero fields are perfect, so one added exact citation closes the
step.

### R3-20 — both batch-3 page files — polish

**Exact location:** both page frontmatter titles.

**What is wrong:** The page files omitted the comma after “Closure” (and, on the
main page, the comma after “Embeddings”), while the batch manifest's approved
titles use “Algebraic Closure, Embeddings, and Separability.”

**Why polish:** This is a punctuation/title-consistency mismatch, not a
mathematical overclaim.

### R3-21 — `ex-algebraic-closure-of-a-finite-field` — nonfatal

**Exact location:** original Fact `[L5]` and proof step 2.1.

**What is wrong:** Step 2.1 said the finite-field subfield-lattice theorem
“places” an arbitrary finite subfield of $\Omega$ inside $E_{n!}$. That theorem
classifies subfields of a *fixed* finite ambient field; it cannot be applied
until the arbitrary subfield is already known to lie in $E_{n!}$.

**Evidence:** If the arbitrary subfield has order $p^d$, its elements satisfy
$b^{p^d}=b$. Since $d\mid n!$, iterating Frobenius gives
$b^{p^{n!}}=b$, which directly proves membership in $E_{n!}$.

**Why nonfatal:** This is a local between-step repair well within the 30-second
rule; it does not change the Example.

### R3-22 — batch manifest dependency arrays for 11 items — polish

**Exact location:** the `deps` arrays in
`research/frontier-15-batch-3.pages.json` for
`thm-polynomial-ring-on-a-family-is-a-commutative-ring`,
`lem-p-power-polynomial-is-irreducible-when-its-constant-is-not-a-pth-power`,
`lem-one-step-root-extension-over-a-perfect-field-is-algebraically-closed`,
`cor-conjugate-elements-are-related-by-an-automorphism-of-an-algebraic-closure`,
`thm-finite-normal-closures-exist-and-are-finite`, `def-separable-degree`,
`cor-separable-degree-is-at-most-extension-degree`,
`thm-separability-is-transitive`,
`thm-separable-elements-form-an-intermediate-field`,
`ex-fp-t-over-fp-tp-is-purely-inseparable-of-degree-p`, and
`cex-degree-p-squared-purely-inseparable-extension-is-not-simple`.

**What is wrong:** Those approved manifest rows either omitted dependencies
declared by their item frontmatter or retained dependencies the final item no
longer declares. The manifest therefore did not exactly describe the authored
batch.

**Evidence:** A direct 72-item comparison of manifest title/dependency fields
against the corresponding item frontmatter reported exactly these 11
mismatches. After repair, all 72 titles and dependency arrays match.

**Why polish:** This is run metadata drift rather than a false mathematical
claim; all targets resolved and the proofs themselves cited their actual
dependencies.

## Provenance checkpoint

All 72 scoped mathematical-content items carry both component provenance
fields. No scoped item has `provenance.statement: ai-generated`, and no scoped
dependency targets an AI-generated Statement/Construction. The three source
treatments opened during this read support the declared subject matter: Thiel
§1.4 gives arbitrary-family polynomial rings and their universal property;
Milne Chapters 2–6 gives perfectness, the generalized primitive-element theorem,
the one-step closure criterion, algebraic/separable closures, embeddings, and
separable/purely inseparable structure. The Stacks normal-extension section
matches the normality convention and intersection clause. No provenance defect
has been found.

## Repair disposition

All 22 findings are repaired in the licensed batch; no finding id was
renumbered.

- **R3-1–R3-6:** added the Axiom of Choice to the page summary and every
  load-bearing title, Given block, fact restatement, and Statement that uses the
  simultaneous-root, arbitrary algebraic-embedding, algebraic-closure
  isomorphism, or conjugate-automorphism construction.
- **R3-7:** made separable degree conditional on a supplied algebraic closure
  and recorded only its existence—not the numerical definition itself—as
  Choice-dependent.
- **R3-8:** replaced the algebraic-closure-isomorphism proof with a choice-free
  finite proof using a basis, the product of its minimal polynomials, the two
  finite splitting fields inside the supplied closures, and splitting-field
  uniqueness.
- **R3-9:** replaced arbitrary algebraic embedding extension by finitely many
  simple adjunctions and root choices; the fibre comparison now uses the
  choice-free independence theorem.
- **R3-10:** required $F\subseteq K\subseteq\Omega$, separated the choice-free
  conjugate criterion from the finite unique-embedding/separable-degree
  criterion, and stated Choice only for the arbitrary-extension embedding
  criterion. The characteristic-zero branch now cites exact perfect-field
  inputs.
- **R3-11:** made Choice explicit, cited finite generation of the coefficient
  field, and wrote out the scalar-extension separability arguments used in
  existence and surjectivity.
- **R3-12:** made Choice explicit throughout the rational/real-algebraic
  example.
- **R3-13 and R3-21:** rebuilt the finite-field-closure verification inside the
  supplied closure from the root sets of $x^{p^n}-x$. This removes both
  Choice-dependent dependencies and proves the factorial-chain containment by
  Frobenius iteration.
- **R3-14:** removed the unnecessary algebraic-closure existence dependency
  from the perfect-closure example and renumbered its facts.
- **R3-15:** added Choice to the false-statement refutation's Given block and
  exact dependency restatements.
- **R3-16:** explicitly restricted an embedding's codomain to its image before
  invoking the isomorphism transport lemma.
- **R3-17:** added the exact polynomial gcd/separability theorem and cited it in
  the characteristic-zero branch.
- **R3-18:** handled $r=0$ and $r=1$ explicitly before the two-generator
  primitive-element reduction.
- **R3-19:** added exact perfect-field characterization and definition inputs
  to the characteristic-zero branch.
- **R3-20:** synchronized both page titles with the batch manifest.
- **R3-22:** synchronized all 11 stale manifest dependency arrays with the
  authored item frontmatter.

The frontmatter dependency lists and approved titles in
`research/frontier-15-batch-3.pages.json` were synchronized for every altered
item. `research/frontier-15-batch-3.proof-contracts.json` was updated for all
changed citations, fact labels, proof steps, downstream source quotes, and
boundary dispositions. It now contains 235 exact citations and the same 472
boundary rows. No changed item contained `verification.judge`, so there was no
stale judge result to delete. `research/plan-spec.json` was not touched.

## Verification

- `tools/reflow.mts`: run on all 18 changed item files; all were already in
  canonical physical-line form.
- `tools/precheck.mts`: 17 proof-bearing changed items checked, 0 failing. The
  changed definition is intentionally not a proof-bearing precheck target.
- `proof-contract.mjs --strict`: 0 errors, 0 warnings, 59/59 proof-bearing
  items.
- `citation-fidelity.mjs`: 235 citations; no missing quote and no widening
  candidate.
- `boundary-audit.mjs`: 472 rows; no template reuse and no contradicted
  disposition.
- `content-policy.mjs`: 72 scoped items; 0 errors, 0 warnings.
- `audit-manifest.mjs`: 1,397 relationships over all seven in-flight batches;
  0 defects.
- Direct manifest/item comparison: all 72 titles and dependency arrays match.
- `manifest-integrity.mjs`: all 16 owed pages present; no scope drift.
- `coverage-checklist.mjs`: 108 harvested results on the batch-3 coverage page;
  0 errors, 0 warnings.
- `finite-smoke.mjs`: 0 errors; this batch has no finite-smoke obligations.
- `risk-report.mjs`: 0 errors, 59 items routed.
- `citecheck.mjs`: 18 changed items scanned; no recognized elementary move
  lacks a source that states it.

## Per-page verdict

- `algebraic-closure-embeddings-and-separability` — **clean after repair**.
  Opened all 60 scoped items. Eleven fatal findings, four nonfatal findings,
  and two metadata polish findings were found and repaired; no unresolved
  finding remains.
- `algebraic-closure-embeddings-and-separability-examples` — **clean after
  repair**. Opened all 12 scoped items. Four fatal findings, one nonfatal
  finding, and two metadata polish findings were found and repaired; no
  unresolved finding remains.

Total scoped items actually opened: **72/72**. Distinct direct dependencies
opened and reconciled: **108**.
