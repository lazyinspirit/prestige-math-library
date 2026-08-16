
---

# This dispatch — step-8 evidence pass `r8-ascoli-sw-qr`

You are gathering **evidence for the lead Alpha's step-8 adjudication** of the
paired-judge verdicts. 25 items below were REJECTED at step 7 by
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


### cor-arzela-ascoli-subsequence-theorem-for-proper-metric-targets

page: ascoli-arzela

- **deepseek-v4-pro**: Step 3.1 applies [L2], whose hypotheses are Countable Choice and Dependent Choice, but only full Choice is given; the proof asserts Choice implies these without citing any fact, leaving [L2] unsupported.

### cor-compact-subsets-of-cx-for-a-proper-metric-target

page: ascoli-arzela

- **gpt-5.6-terra**: Step 1.1 uses that the uniform topology on C(X,Y) is metrizable in order to apply L2, but neither L2 nor any given fact establishes this property. The cited Ascoli result only concerns compactness of the uniform closure and does not license that move.

### lem-pointwise-closure-preserves-equicontinuity

page: ascoli-arzela

- **gpt-5.6-terra**: Step 1.2 uses the defining closure property that every neighbourhood of h meets F, but neither L2 nor L3 states or cites that property. Those facts only establish the finite-coordinate set as a pointwise neighbourhood.

### prop-compact-function-families-are-pointwise-relatively-compact

page: ascoli-arzela

- **gpt-5.6-terra**: Step 1.1 invokes L1 with the singleton {x} but never establishes that this singleton is compact. L1 only gives subbasic openness for compact K, and L2 is unrelated, so continuity of evaluation is not licensed as written.

### prop-topological-domain-equicontinuity-agrees-with-metric-equicontinuity

page: ascoli-arzela

- **gpt-5.6-terra**: L2 reverses the target-metric arguments from its cited definition: with base point x, the source gives dY(f(y),f(x)), not dY(f(x),f(y)). The proof uses this reversal in both directions without citing metric symmetry.

### thm-ascoli-arzela-sufficiency

page: ascoli-arzela

- **deepseek-v4-pro**: Step 3.1 equates a pointwise subbasic set in Y^X with the compact-open set S({x},V) in C(X,Y) without taking the trace on C, and facts L4 and L5 are interpretive shorthand that do not state the cited definitions, so the step is not licensed by its tags.

### thm-compact-function-families-are-equicontinuous-on-a-locally-compact-hausdorff-domain

page: ascoli-arzela

- **deepseek-v4-pro**: Fact L2 is not a faithful restatement of the compactness lemma: it omits the finite-subcover conclusion, so step 2.1's finite subcover is not licensed by the fact as written.

### thm-evaluation-is-continuous-for-a-locally-compact-hausdorff-domain

page: ascoli-arzela

- **gpt-5.6-terra**: Step 3.1 concludes continuity from local product neighbourhoods mapping into W, but cites only step 2.1. L4 states only that continuity implies open preimages and does not license this converse local criterion.

### thm-pointwise-compactness-criterion-for-function-families

page: ascoli-arzela

- **gpt-5.6-terra**: Step 2.1 invokes continuity of the coordinate map to infer that its image of H lies in the closure of F(x), but its citations name only step 1.1 and L6; neither states that continuity or the needed closure-image fact.

### cex-boundedness-does-not-replace-pointwise-relative-compactness

page: ascoli-arzela-examples

- **deepseek-v4-pro**: [L1] misstates thm-ascoli-arzela-general: the theorem only makes pointwise relative compactness a hypothesis; it does not assert that pointwise boundedness is insufficient. The fact is stronger than its cited source.

### ex-compact-affine-interpolation-family

page: ascoli-arzela-examples

- **deepseek-v4-pro**: Step 3.1 concludes each coordinate set equals its compact closure citing only [L1, step 1.1]; compactness alone does not imply closedness, and no metric-space or Hausdorff closedness fact is cited.

### prop-legendre-symbol-on-units-is-homomorphism

page: quadratic-residues-and-the-legendre-symbol

- **gpt-5.6-terra**: Step 2.1 uses that the cyclic group G is abelian to commute h and q, but no cited fact states or proves that cyclic groups are abelian. L5 only states that G is cyclic of order p-1, so this required move is uncited.
- **deepseek-v4-pro**: Step 2.1 invokes that the cyclic group G is abelian, but L5 only states G is cyclic of order p-1. Cyclicity implying commutativity is not cited or established, so the coset product computations are unsupported.

### prop-legendre-symbol-well-defined

page: quadratic-residues-and-the-legendre-symbol

- **gpt-5.6-terra**: Step 2.1 applies L3 from p not dividing a, but L3 requires a and b to represent unit classes, meaning gcd(a,p)=gcd(b,p)=1. The proof never establishes this from primality and nondivisibility or cites a fact licensing it.

### prop-quadratic-residue-is-representative-independent

page: quadratic-residues-and-the-legendre-symbol

- **gpt-5.6-terra**: Step 2.1 concludes that every quadratic-residue class is a square of a unit, but its cited facts do not supply a root x for a quadratic residue. That inference needs L1, which is not cited; step 1.1 only preserves an already given root under congruence.

### thm-legendre-symbol-multiplicativity

page: quadratic-residues-and-the-legendre-symbol

- **gpt-5.6-terra**: Step 3.1 applies step 2.1 to a and c squared even when p divides a, but step 2.1 only proved multiplicativity when neither numerator is divisible by p. The needed divisible-a case is step 1.1, which is neither cited nor applied.

### thm-quadratic-residues-subgroup-modulo-prime

page: quadratic-residues-and-the-legendre-symbol

- **gpt-5.6-terra**: Step 3.1 is not licensed by its cited facts: it asserts that the chosen generator g has order p-1 and uses the order-divisibility criterion to rule out g=g^(2q), but neither fact is supplied or cited. The listed facts establish only that G has size p-1 and g generates G.
- **deepseek-v4-pro**: Step 3.1 uses that order(g)=p-1 divides 2q-1 from g equalling g to the 2q, but no cited fact or dependency states the order-divisibility property or that a chosen generator has order p-1; the required order characterization is not cited.

### thm-second-supplement-to-quadratic-reciprocity

page: quadratic-residues-and-the-legendre-symbol

- **gpt-5.6-terra**: [L1] omits Gauss lemma's required hypothesis that p does not divide a, so it states a stronger claim than its cited theorem.
- **deepseek-v4-pro**: [L1] omits the Gauss lemma hypothesis p not dividing a; without it the stated implication is false for a divisible by p, so [L1] is stronger than its cited theorem.

### ex-euler-criterion-with-a-large-prime

page: quadratic-residues-and-the-legendre-symbol-examples

- **gpt-5.6-terra**: Step 3.1 turns a congruence into equality without establishing that the Legendre symbol is 1 or -1; L1 only gives a congruence.
- **deepseek-v4-pro**: Step 3.1 concludes (3/p)=-1 from a congruence alone; [L1] only states a congruence modulo p. It does not cite the definition that the Legendre symbol lies in -1,0,1 nor that p does not divide 3, so the equality is unlicensed.

### ex-power-residues-modulo-seventeen

page: quadratic-residues-and-the-legendre-symbol-examples

- **gpt-5.6-terra**: L5 omits the cited lemma's essential hypothesis that p is prime, so it asserts the false general implication that p not dividing a makes p and a coprime; for example p=4 and a=6.

### ex-quadratic-congruence-from-its-discriminant

page: quadratic-residues-and-the-legendre-symbol-examples

- **deepseek-v4-pro**: Step 3.1 invokes no zero divisors in Z/11 citing only L3, which states the quotient is a field; the needed field-to-integral-domain fact (lem-field-is-a-commutative-ring) is never cited.

### ex-unique-cube-root-of-two-modulo-twenty-nine

page: quadratic-residues-and-the-legendre-symbol-examples

- **deepseek-v4-pro**: Fact L1 omits the cited corollary's hypothesis that the inverse representative ell is nonnegative. As stated it applies to negative ell and is stronger than its source, so the fact block misstates the dependency even though the proof's ell=19 is valid.

### lem-uniform-closure-of-a-general-real-function-algebra-is-a-lattice

page: stone-weierstrass-general

- **gpt-5.6-terra**: Step 3.1 invokes that the uniform closure is a closed set, but no cited fact or earlier step establishes this. The given definition only says which continuous functions are approximable by A; transitivity of approximation is needed to conclude abs(f) is approximable by A.

### prop-general-real-function-algebra-agrees-with-the-metric-definition

page: stone-weierstrass-general

- **deepseek-v4-pro**: Step 1.2 equates the two ambient C(K,R) sets, but the cited metric theorem only connects metric continuity to preimages of metric-open subsets of R; the general definition's C(K,R) uses the usual topology on R, and no cited fact identifies it with the metric topology, so the step is unlicensed.

### thm-complex-stone-weierstrass-self-adjoint

page: stone-weierstrass-general

- **gpt-5.6-terra**: Step 2.1 asserts that Re F and Im F are continuous, but L5 and L6 only define the complex metric and the coordinate functions; they do not establish continuity of the coordinate maps or their compositions with F. This is needed to apply real density.

### ex-distance-function-lattice-is-dense-on-a-compact-metric-space

page: stone-weierstrass-general-examples

- **deepseek-v4-pro**: Title claims the lattice generated by distance functions alone is dense, but the proof uses constants. On a one-point metric space the generated lattice is {0}, not dense; the cited Stone-Weierstrass theorem needs unitality.

