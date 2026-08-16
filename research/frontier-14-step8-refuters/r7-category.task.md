
---

# This dispatch — step-8 evidence pass `r7-category`

You are gathering **evidence for the lead Alpha's step-8 adjudication** of the
paired-judge verdicts. 16 items below were REJECTED at step 7 by
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


### cor-a-complete-locally-small-category-with-a-small-coseparating-set-and-saft-intersections-is-cocomplete

page: reflective-subcategories-and-the-adjoint-functor-theorems

- **deepseek-v4-pro**: L4 misstates the objectwise SAFT: it omits the fixed-object quantifier and branch data for that object. The proof applies it to every D in C^J, but the statement assumes the direct branch only for each diagonal functor, not for each D, so step 1.1 is unlicensed.

### cor-gaft-recovers-the-free-group-and-abelianisation-adjoints

page: reflective-subcategories-and-the-adjoint-functor-theorems

- **gpt-5.6-terra**: The title says GAFT recovers the abelianisation adjunction, but step 3.1 expressly does not invoke GAFT and instead uses only the comma-category initial-object criterion; GAFT hypotheses for the inclusion are not established.
- **deepseek-v4-pro**: Title claims GAFT recovers the abelianisation adjunction, but the proof uses only the comma-initial assembly theorem for that branch and explicitly does not invoke GAFT; the title asserts more than the proof establishes. Fact L2 also omits GAFT hypotheses.

### def-subobject-and-quotient-object

page: reflective-subcategories-and-the-adjoint-functor-theorems

- **deepseek-v4-pro**: Cited theorem only proves equivalence relation and unique inverse factor maps, not that the order relation on subobject classes is independent of representatives, yet the definition cites it for both obligations.

### lem-wide-pullbacks-compute-intersections-independently-of-representatives

page: reflective-subcategories-and-the-adjoint-functor-theorems

- **gpt-5.6-terra**: Step 2.1 assumes a second wide-pullback apex for the replacement family, although only the original pullback is assumed to exist. Composing with isomorphisms merely gives a cone; L1 does not show it is limiting or construct the claimed second apex.

### prop-compact-hausdorff-spaces-satisfy-the-special-adjoint-functor-hypotheses

page: reflective-subcategories-and-the-adjoint-functor-theorems

- **gpt-5.6-terra**: Step 1.1 never establishes that the products P and Q are Hausdorff. L1 gives only compactness, so the claims that Q has closed diagonal and that the equalizer is Hausdorff are unsupported.
- **deepseek-v4-pro**: Step 1.1 uses that products of compact Hausdorff spaces are Hausdorff, that a Hausdorff space has closed diagonal, and that subspaces of Hausdorff spaces are Hausdorff, but none are cited; L1 gives only compactness, so the equalizer is not shown compact Hausdorff.

### rem-why-completeness-alone-is-not-enough-for-an-adjoint

page: reflective-subcategories-and-the-adjoint-functor-theorems

- **gpt-5.6-terra**: The final paragraph omits the Axiom of Choice required by both cited results: each concludes preorder behaviour only assuming Choice, but the remark states the conclusions without that hypothesis.

### thm-a-complete-locally-small-category-with-a-small-coseparating-set-and-all-subobject-intersections-has-an-initial-object

page: reflective-subcategories-and-the-adjoint-functor-theorems

- **deepseek-v4-pro**: Step 1.1 invokes the collection of all subobjects of P, but the page's def-subobject-and-quotient-object states subobjects are classes and are never gathered into a collection, so the theorem's hypothesis is ill-formed under the library convention.

### thm-a-full-subcategory-is-reflective-exactly-when-each-object-has-a-universal-arrow

page: reflective-subcategories-and-the-adjoint-functor-theorems

- **gpt-5.6-terra**: [L3] overstates its citation: the cited theorem says chosen initial comma objects supply a left adjoint, but does not state their equivalence with universal arrows. That added equivalence is used in both proof directions without a faithful cited fact.

### thm-special-adjoint-functor-theorem-objectwise-form

page: reflective-subcategories-and-the-adjoint-functor-theorems

- **deepseek-v4-pro**: Step 1.2 asserts the comma projection preserves monomorphisms. The cited facts only give strict creation of limits preserved by U and continuity; no cited fact says strict creation implies preservation or that a pullback-preserving functor preserves monomorphisms, so the step is unlicensed.

### thm-the-unit-interval-is-a-coseparating-object-in-compact-hausdorff-spaces

page: reflective-subcategories-and-the-adjoint-functor-theorems

- **gpt-5.6-terra**: The proof never establishes that [0,1] is itself a compact Hausdorff space. L2 supplies a continuous map into the interval, but no cited fact makes that interval an object of the category, so the coseparating-object conclusion is not fully proved.
- **deepseek-v4-pro**: Step 2.1 applies the coseparating-object definition to h from Y to [0,1], but that requires [0,1] to be an object of CompHaus. No cited fact establishes the unit interval is compact Hausdorff, so the conclusion is unlicensed.

### cex-a-category-that-is-not-well-powered

page: reflective-subcategories-and-the-adjoint-functor-theorems-examples

- **gpt-5.6-terra**: Step 2.2 infers alpha equals beta from alpha less than or equal to beta and beta less than or equal to alpha, but L2 states only comparability and successor existence. No cited fact establishes antisymmetry of the ordinal order.

### cex-a-complete-category-whose-coseparating-sets-are-never-small

page: reflective-subcategories-and-the-adjoint-functor-theorems-examples

- **gpt-5.6-terra**: Step 1.2 assumes, without a cited fact or construction, that every small Set-valued coordinate diagram has a limit. L2 only defines completeness, so it cannot license the coordinatewise limit construction used to prove S complete.
- **deepseek-v4-pro**: Step 1.2 invokes arbitrary small limits in Set to form coordinatewise limits, but no cited fact states that Set is complete; the listed dependencies only define completeness.

### cex-a-reflective-inclusion-need-not-preserve-colimits

page: reflective-subcategories-and-the-adjoint-functor-theorems-examples

- **gpt-5.6-terra**: Step 1.1 applies L3 only for locally small categories, but neither the given data nor the step establishes that Set and A are locally small; showing the displayed hom-sets are singletons does not establish Set local smallness.

### ex-subobjects-in-set-are-subsets

page: reflective-subcategories-and-the-adjoint-functor-theorems-examples

- **gpt-5.6-terra**: Step 1.1 invokes the defining left-cancellation property of a monomorphism, but L1 and L2 state only subobject equivalence and mutual-factorisation isomorphisms. No cited fact licenses that move, so the proof is uncited as written.

### ex-the-solution-set-for-groups-computed-on-a-two-element-set

page: reflective-subcategories-and-the-adjoint-functor-theorems-examples

- **gpt-5.6-terra**: Step 2.1 invokes freeness to extend the map from S to F(S), but none of L1-L3 states the free-group universal property. L1 only supplies the solution set, so it does not license that extension or kernel construction.
- **deepseek-v4-pro**: Step 2.1 invokes the universal property of the free group to extend the two generators to a homomorphism, but none of the cited facts L1-L3 states that property; L1 gives only a solution set. The subsequent factorisation depends on this unlicensed extension.

### ex-the-subobject-poset-of-the-integers-in-abelian-groups

page: reflective-subcategories-and-the-adjoint-functor-theorems-examples

- **gpt-5.6-terra**: [L3] inaccurately restates its citation: the cited theorem explicitly avoids claiming a partial order on the proper collection of subobject classes, proving only the relation properties and an ordinary partial order after restricting to a set of representatives.

