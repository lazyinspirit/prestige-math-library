
---

# This dispatch — step-8 evidence pass `r3-covering`

You are gathering **evidence for the lead Alpha's step-8 adjudication** of the
paired-judge verdicts. 27 items below were REJECTED at step 7 by
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


### cor-connected-cover-of-a-simply-connected-space-is-trivial

page: covering-spaces-and-lifting

- **gpt-5.6-terra**: Step 1.1 uses the theorem that a connected locally path-connected space is path-connected, but none of its cited facts states or establishes that implication. F1 only transfers local path-connectedness, so the path used in step 2.1 is not licensed.
- **deepseek-v4-pro**: Step 1.1 asserts E is path-connected because E is connected and locally path-connected, but none of the cited facts F1, F2, F3 states that implication; F1 only gives local path-connectedness of E, F3 only gives path-connectedness of B, so the step is unlicensed.

### cor-lifted-path-endpoints-depend-only-on-path-homotopy

page: covering-spaces-and-lifting

- **gpt-5.6-terra**: Step 2.1 invokes connectedness of the interval, but F3 only defines connectedness and no cited fact establishes that I is connected. It also uses without support that a continuous map from a connected space to a discrete fibre is constant.
- **deepseek-v4-pro**: Proof only shows the lifted homotopy's terminal edge ends where the chosen lift ends; it never shows an arbitrary second lift with the same initial point agrees, omitting path-lift uniqueness. Unit interval connectedness is also uncited.

### def-covering-map-and-evenly-covered-neighbourhoods

page: covering-spaces-and-lifting

- **gpt-5.6-terra**: The trivial-covering clause uses “isomorphic over B” without defining it or citing the later covering-space isomorphism definition, and it also invokes the product projection and discrete topology without dependencies establishing those notions.
- **deepseek-v4-pro**: The trivial-covering clause uses 'isomorphic over B' and 'product projection BxF to B with F discrete' but cites no definition of over-B isomorphism, product topology, or discreteness; deps lack def-map-and-isomorphism-of-covering-spaces, def-product-topology, def-standard-topologies.

### def-covering-space-action

page: covering-spaces-and-lifting

- **gpt-5.6-terra**: The definition never requires the maps e to g dot e to be homeomorphisms or even continuous. Citing the homeomorphism definition imposes no such condition, so arbitrary set actions qualify and later homeomorphic-sheet claims are unsupported.
- **deepseek-v4-pro**: The definition omits the standard hypothesis that each group element acts by a homeomorphism of E; def-group-action supplies only a set action. Then gU need not be open, so the later orbit-map covering theorem's openness and homeomorphism steps are unsupported.

### def-monodromy-action-on-a-covering-fibre

page: covering-spaces-and-lifting

- **gpt-5.6-terra**: The claim that endpoint lifting is a right action is unsupported: the cited loop definition only proposes multiplication and def-group-action defines left actions. No cited result establishes that pi1 is a group or the concatenation law for lifted endpoints.
- **deepseek-v4-pro**: Uses inverse of loop classes and asserts left action, but the only cited fundamental-group item defers group axioms and inverses to a later theorem not cited, so that symbol and the action claim are out of scope.

### def-path-class-model-for-a-universal-cover

page: covering-spaces-and-lifting

- **gpt-5.6-terra**: The formula for B([alpha],U) is not shown independent of the representative alpha. Replacing alpha by an endpoint-fixed homotopic path requires that concatenation with gamma preserves endpoint-fixed homotopy; no inline justification or cited fact supplies this.
- **deepseek-v4-pro**: Defines B of a path-homotopy class by choosing a representative alpha, but neither the item nor any cited fact shows the appended class alpha*gamma is independent of that representative, so B is not shown well-defined.

### lem-path-class-projection-is-a-covering-map

page: covering-spaces-and-lifting

- **deepseek-v4-pro**: Step 3.1 is false: [alpha] and [alpha eta] with eta a non-loop path in U are distinct but give equal basic sets B(alpha,U) and B(alpha eta,U). Step 4.1 only says verify topology and homeomorphisms, so the covering conclusion is not established.

### prop-composition-of-coverings-with-finite-sheeted-outer-map-is-a-covering

page: covering-spaces-and-lifting

- **gpt-5.6-terra**: Steps 1-4 construct local sheets but never establish that q composed with p is continuous and surjective, both required by F1. F1 gives these properties for p and q separately, and no cited fact licenses preservation under composition.

### prop-covering-maps-are-local-homeomorphisms-with-discrete-fibres

page: covering-spaces-and-lifting

- **gpt-5.6-terra**: Step 1.1 asserts the local-homeomorphism property but neither states nor cites a definition of local homeomorphism. F1 and F2 only give sheetwise homeomorphisms, so the named conclusion is not licensed as written.
- **deepseek-v4-pro**: Step 2.1 shows each sheet-fibre intersection is a singleton but cites no fact supplying the subspace topology on fibres; F3 only defines discrete topology on a set. The discrete-fibre conclusion is unlicensed.

### prop-local-path-connectedness-lifts-and-descends-along-coverings

page: covering-spaces-and-lifting

- **deepseek-v4-pro**: Step 2.1 asserts local path-connectedness passes to open subspaces and across homeomorphisms. F2 and F3 are only definitions and do not establish either invariance or heredity for open subspaces, so both directions rest on an unproved lemma.

### prop-monodromy-acts-by-bijections-and-detects-components

page: covering-spaces-and-lifting

- **gpt-5.6-terra**: Step 3.1 projects an upstairs path to a loop but cites no fact establishing that the covering map p is continuous. F1 only defines the monodromy action for a covering and does not state the continuity needed for p composed with the path to be a path.
- **deepseek-v4-pro**: [F3] omits the path-component equivalence-class definition from def-path-connected, yet the statement and step 4.1 rely on it; the orbit equality is not licensed by the stated facts.

### prop-number-of-sheets-is-locally-constant

page: covering-spaces-and-lifting

- **gpt-5.6-terra**: Step 2.1 invokes connectedness to conclude that only one nonempty fibre-cardinality class can occur, but its tag cites only step 1.1 and F1. Neither states or licenses this connectedness argument; F2 is required.

### thm-covering-maps-inject-fundamental-groups

page: covering-spaces-and-lifting

- **gpt-5.6-terra**: The title asserts an injective homomorphism, but F2 explicitly gives only a proposed induced map and says another theorem proves well-definedness and the homomorphism property. This proof neither proves nor cites those facts.
- **deepseek-v4-pro**: F2 only defines the induced map and promises a later theorem; it does not state that p* is a group homomorphism, and that theorem is not cited. The proof uses trivial kernel to infer injectivity, which is unlicensed. Step 2.1 also cites F2 for uniqueness though F2 has no uniqueness.

### thm-covering-space-lifting-criterion

page: covering-spaces-and-lifting

- **gpt-5.6-terra**: Step 2.1 is not licensed by its citations: F1 gives path lifts and F2 only compares endpoint-fixed homotopic base paths. Neither fact, nor F5, connects the subgroup inclusion to endpoints of lifts along two arbitrary paths from y0 to y.
- **deepseek-v4-pro**: Step 4.1 invokes [F3], which requires Y connected, but the statement only assumes Y path-connected; no cited fact establishes that path-connectedness implies connectedness, so the uniqueness step is not licensed.

### thm-deck-group-of-a-universal-cover-is-the-fundamental-group

page: covering-spaces-and-lifting

- **gpt-5.6-terra**: Step 3.1 has the direction wrong. If h_a sends e to e dot a, then h_a composed with h_b sends e to e dot ab, so a maps to h_a is a homomorphism. Assigning inverse classes reverses products and is an antihomomorphism in general.
- **deepseek-v4-pro**: Step 3.1 reverses wrongly: with traversal-order product the unreversed map is already a homomorphism; using inverse classes gives an anti-homomorphism. For noncommuting loops a,b in a two-circle wedge, F(ab)=F(b)F(a), so it is not an isomorphism.

### thm-homotopy-lifting-for-covering-maps

page: covering-spaces-and-lifting

- **gpt-5.6-terra**: Step 1.1 invokes compactness of the interval, but F5 only defines compactness and no cited fact establishes that I is compact. Thus its successive-strip extension is unsupported by its listed dependencies.
- **deepseek-v4-pro**: Step 1.1 invokes compactness of the interval, but [F5] only defines compact spaces and no cited fact proves [0,1] is compact, so the local extension is unlicensed; it also writes X where the statement uses B.

### thm-orbit-map-of-a-covering-space-action-is-a-covering

page: covering-spaces-and-lifting

- **gpt-5.6-terra**: Step 1.1 concludes that the orbit image is open from F6, but F6 only says an already open continuous surjection is quotient. Openness here requires the quotient-topology criterion in F3, which the step does not cite.
- **deepseek-v4-pro**: Step 4.1 applies F5, which requires the total space to be connected, but the statement gives only path-connected E and no cited fact establishes path-connected implies connected, so the one-point determination step is not licensed.

### thm-path-lifting-for-covering-maps

page: covering-spaces-and-lifting

- **gpt-5.6-terra**: Step 1.1 invokes evenly covered neighbourhoods and sheets, but no fact states the defining local-sheet property of a covering map. It also applies the Lebesgue lemma without establishing that the unit interval is a compact metric space.
- **deepseek-v4-pro**: Step 1.1 uses evenly covered neighbourhoods and sheets but the deps omit def-covering-map, and it applies the Lebesgue number lemma to the unit interval without citing that I is a compact metric space; the existence step is unlicensed as written.

### thm-sheets-equal-fundamental-group-index

page: covering-spaces-and-lifting

- **gpt-5.6-terra**: Step 3.1 asserts that the stabilizer of the lifted-endpoint action is exactly H, hence the endpoint equality criterion, but F1 only defines the action and F2 only gives injectivity. No cited fact licenses the required lifting concatenation and reversal argument.

### thm-uniqueness-of-lifts-from-a-connected-space

page: covering-spaces-and-lifting

- **gpt-5.6-terra**: Step 3.1 cites only step 2.1 and F3, which give openness of the complement and covering sheets. It never cites step 1.1 or F2, needed to know the equaliser is open and that a nonempty clopen proper subset contradicts connectedness.
- **deepseek-v4-pro**: Step 3.1 uses connectedness to conclude a nonempty clopen set is the whole space but cites only step 2.1 and F3, the covering definition; F2, which defines connectedness and the clopen criterion, is never cited, so the step is unlicensed.

### thm-universal-cover-existence

page: covering-spaces-and-lifting

- **gpt-5.6-terra**: Step 3.1 invokes injectivity of the induced fundamental-group map, but its tag cites only step 2.1 and F1-F3; the required F4 is omitted. None of those cited facts states injectivity.
- **deepseek-v4-pro**: Step 2.1 asserts the path-class space is path-connected but cites only the covering lemma and connectivity definitions; none establishes that claim, and the truncation argument is undeveloped. Step 3.1 uses an unstated path-class property to infer projected loops are trivial.

### thm-universal-covering-spaces-force-semilocal-simple-connectedness

page: covering-spaces-and-lifting

- **gpt-5.6-terra**: Step 2.1 is not licensed by its citations: neither step 1.1 nor F2 supplies path lifting or the evenly-covered-sheet homeomorphism needed to show a loop in U lifts to a loop in its chosen sheet. The cited facts do not establish this essential move.
- **deepseek-v4-pro**: Step 2.1 cites F2, the definition of semilocal simple connectedness, to conclude that a loop in an evenly covered neighbourhood lifts to a loop in its sheet. F2 says nothing about lifts or sheets, so that step is not licensed by its cited facts.

### cex-a-disconnected-base-allows-variable-sheet-number

page: covering-spaces-and-lifting-examples

- **deepseek-v4-pro**: Step 2.1 asserts each singleton base neighborhood is evenly covered but cites only F1,F2; neither defines covering maps or evenly covered neighborhoods, and def-covering-map-and-evenly-covered-neighbourhoods is not cited, so the covering condition is unjustified.

### cex-a-surjective-local-homeomorphism-need-not-be-a-covering-map

page: covering-spaces-and-lifting-examples

- **gpt-5.6-terra**: Step 2.1 claims each summand inclusion is a local homeomorphism, but neither F1 nor F3 establishes this; F1 only gives the implication from covering map to local homeomorphism. The needed open-subspace or local-homeomorphism fact is uncited.
- **deepseek-v4-pro**: Step 2.1 cites F1 and F3 to claim each inclusion is a local homeomorphism, but F1 only says covering maps are local homeomorphisms and F3 gives only the disjoint-union set, so the step is not licensed by its cited facts.

### ex-real-line-mod-integer-translations-is-a-covering

page: covering-spaces-and-lifting-examples

- **gpt-5.6-terra**: Step 2.1 falsely treats every interval of length below one as evenly covered. A closed interval such as [0,1/2] has a quotient image that is not open, so it cannot be an evenly covered neighbourhood.
- **deepseek-v4-pro**: Step 3.1 uses F1 to conclude deck transformations are exactly integer translations, but F1 requires the total space path-connected; R's path-connectedness is neither established nor cited. The direct verification is only asserted, not proved.

### ex-the-hawaiian-earring-has-no-universal-cover

page: covering-spaces-and-lifting-examples

- **gpt-5.6-terra**: Step 4.1 relies on a retraction of the Hawaiian earring onto an individual circle, but no such retraction is constructed, its continuity is shown, or any cited fact supplies it. F1 only gives essentiality in R/Z, so it does not license nontriviality in the earring.
- **deepseek-v4-pro**: Step 4.1 invokes a retraction of the earring onto a small circle and its induced injection, but no such retraction or retract-injectivity fact is cited or proved; F1 only gives a nontrivial loop in R/Z, so failure of semilocal simple connectedness is not established.

### ex-trivial-coverings-and-discrete-fibre-products

page: covering-spaces-and-lifting-examples

- **gpt-5.6-terra**: Step 1.1 merely instructs the reader to verify the covering property; it never gives the sheets U times singleton, proves their openness and homeomorphism property, or proves continuity and surjectivity. F1-F3 are definitions, not this result.

