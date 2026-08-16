
---

# This dispatch — step-8 evidence pass `r4-contour`

You are gathering **evidence for the lead Alpha's step-8 adjudication** of the
paired-judge verdicts. 19 items below were REJECTED at step 7 by
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


### cor-ml-estimate-for-complex-line-integrals

page: contour-integration

- **gpt-5.6-terra**: L3 omits the cited bound's required hypotheses that the Stieltjes integral exists and the integrator has bounded variation. Step 1.1 never establishes either for the arc-length function, so its application of L3 is not licensed.
- **deepseek-v4-pro**: Fact L3 restates the Stieltjes bound under only |f|<=M, but its cited corollary also requires the integral to exist and alpha to have bounded variation. Step 1.1 applies it to the absolute integrand and s_gamma without establishing either hypothesis, so the step is unlicensed.

### fs-every-continuous-complex-function-on-a-domain-has-a-primitive

page: contour-integration

- **gpt-5.6-terra**: Step 2.1 asserts that 2 pi i is nonzero, but L3 only evaluates the integral as 2 pi i. No cited fact establishes pi>0 or that this complex number is nonzero, so the claimed contradiction is not licensed.

### prop-linearity-of-complex-line-integrals

page: contour-integration

- **gpt-5.6-terra**: Step 1.1 applies L2 without establishing that the component integrals for f and g exist. L2 is conditional on the right-hand integrals existing, while L1 only gives the definition and points to a separate existence theorem that is not cited.
- **deepseek-v4-pro**: Step 1.1 applies [L2], which requires the displayed RS integrals to exist; [L1] only defines the complex integral and never establishes their existence. The item omits the existence theorem for continuous integrands on rectifiable contours.

### prop-reversal-and-concatenation-of-complex-line-integrals

page: contour-integration

- **gpt-5.6-terra**: [L2] is not faithful to its cited theorem: interval additivity requires a bounded-variation integrator and continuity at the join, and linearity is asserted only when the right-hand integrals exist; L2 states these claims unconditionally.

### thm-circle-integrals-of-integer-monomials

page: contour-integration

- **gpt-5.6-terra**: Fact L1 omits the cited theorem's required hypothesis that the integrand be continuous on the contour trace, so it is stronger than its source. Step 1.1 also never establishes that continuity before applying L1.
- **deepseek-v4-pro**: L3 misstates the cited exponential addition theorem: it says the complex exponential is additive under sums, but the source says exp(z+w)=exp z exp w. This false fact is used in step 2.2 to establish exp(2 pi i k)=1.

### thm-fundamental-inequality-for-complex-line-integrals

page: contour-integration

- **gpt-5.6-terra**: Step 3.1 claims the inequality has sharp constant 1, but the proof only proves validity with constant 1. Moreover, for a fixed contour that traverses a segment out and back, every such integral is zero while the absolute integral can be positive, so 1 is not sharp for that contour.
- **deepseek-v4-pro**: Step 2.1 cites [L3] to replace each chord by s_γ(t_{j+1})−s_γ(t_j), but [L3] only says the chord is at most the subpath length L_{[t_j,t_{j+1}]}; identifying that with the arc-length increment requires additivity of arc length over subintervals, which is not cited.

### thm-fundamental-theorem-for-complex-line-integrals

page: contour-integration

- **gpt-5.6-terra**: Step 2.1 is not licensed: L3 only makes the real and imaginary parts C1, and L4 gives their gradient increments. The proof never cites or establishes the Cauchy-Riemann identities needed to identify that complex gradient integral with the integral of f dz.
- **deepseek-v4-pro**: Step 2.1 derives F(w)-F(z)=f(z)(w-z)+r from L3,L4,L8, but L4 is the scalar gradient theorem and L3 gives only C1 components; the Cauchy-Riemann identification of the gradient integrals with the complex line integral of f is not cited.

### thm-invariance-of-complex-line-integrals-under-increasing-reparametrization

page: contour-integration

- **gpt-5.6-terra**: The Statement never quantifies f or assumes it is continuous on the trace. Thus its displayed integrals are not specified for the stated data, while the proof silently adds a continuous integrand in Facts.
- **deepseek-v4-pro**: L3 restates the cited theorem without its hypothesis that the reparametrization h is piecewise-C1; that makes it stronger than the source, and step 3.1 uses it to claim the theorem equals the increasing half of L3 on piecewise-C1 contours.

### thm-path-independence-and-complex-primitive-criterion

page: contour-integration

- **gpt-5.6-terra**: Fact L6 omits the cited theorem's required piecewise-C1 path-connected hypothesis, restating it as merely open and path-connected. Thus L6 is not a faithful statement of its dependency.
- **deepseek-v4-pro**: L6 restates the cited real vector-field theorem incorrectly: it requires U nonempty, open, and piecewise-C1 path-connected, and F continuous; L6 says only open and path-connected.

### thm-riemann-stieltjes-and-parametric-contour-integrals-agree

page: contour-integration

- **gpt-5.6-terra**: Steps 1.2 and 3.1 assume Riemann-Stieltjes integrals are additive across the piece partition and that the global arc-length integrator matches the shifted piece integrators. L3 gives only total length, not either Stieltjes additivity claim.
- **deepseek-v4-pro**: Proof applies L1 only on each smooth piece but then sums the piecewise identities to claim equality with the whole-interval Riemann-Stieltjes integral; no cited fact gives RS additivity across the partition, so the displayed equality is not established.

### thm-uniform-limit-interchanges-complex-line-integrals

page: contour-integration

- **gpt-5.6-terra**: Step 2.1 identifies the integral of f_n minus f with the difference of the two integrals, but cites only existence and the ML estimate. This requires linearity of contour integrals, which neither L1 nor L2 states or licenses.
- **deepseek-v4-pro**: Step 2.1 uses linearity of the integral to replace the integral of f_n - f by the difference of integrals, but cites only existence and the ML estimate; no linearity fact is cited, so the step is unlicensed.

### ex-circle-integral-of-one-over-z-minus-a

page: contour-integration-examples

- **gpt-5.6-terra**: Step 1.1 replaces the contour integral by an ordinary parameter integral using dz=ire^{it}dt, but it cites only algebra. It needs the piecewise-C1 parametrization theorem; neither L1 nor L2 licenses the semicircle computation.
- **deepseek-v4-pro**: Step 1.1 computes via dz = i r exp(it) dt and integrates over t, but the complex line integral is defined as Riemann-Stieltjes; equality with the parametric integral requires thm-riemann-stieltjes-and-parametric-contour-integrals-agree, which is never cited. The derivative of exp(it) is also uncited.

### ex-contour-integral-of-conjugation-depends-on-the-path

page: contour-integration-examples

- **gpt-5.6-terra**: [L1] omits the cited theorem's hypothesis that the integrand is continuous on the contour trace, so it states an unqualified and stronger parametrization rule than its source.

### ex-exponential-contour-integral-by-riemann-sum-and-parametrization

page: contour-integration-examples

- **gpt-5.6-terra**: Step 1.1 says [L1] makes the midpoint sums converge, but [L1] only defines the integral via component Riemann-Stieltjes integrals. It does not supply existence or convergence of these tagged sums; continuity and the piecewise-C1 reduction are not cited there.

### ex-exponential-over-z-unit-circle-integral-by-series

page: contour-integration-examples

- **gpt-5.6-terra**: Step 2.1 invokes L3, which requires the partial sums and their limit to be continuous on the contour. The proof establishes only uniform convergence; neither L1 nor any step establishes continuity of exp(z)/z or of the partial sums, so L3 is not licensed.

### ex-keyhole-contour-assembly-without-cauchys-theorem

page: contour-integration-examples

- **gpt-5.6-terra**: Step 3.1 is not licensed by L3: it only equates the absolute integral of 1 with the length of an already rectifiable contour; it neither establishes these parametrized pieces are rectifiable nor yields their stated segment and circle lengths.
- **deepseek-v4-pro**: Step 3.1 cites cor-absolute-integral-of-one-is-path-length to verify rectifiability, but that corollary applies only to rectifiable contours and cannot establish rectifiability; the pieces are smooth, so rectifiability needs a separate theorem.

### ex-polynomial-contour-integral-along-a-line-segment

page: contour-integration-examples

- **deepseek-v4-pro**: Step 1.1 uses [L2] to evaluate the parametric integral from 0 to 1, but [L2] only gives the contour integral; identifying the two requires the parametric agreement theorem [L3], which is not cited.

### ex-riemann-stieltjes-integral-on-a-polygonal-contour

page: contour-integration-examples

- **gpt-5.6-terra**: Step 1.1 asserts the Riemann-Stieltjes-to-ordinary-integral reduction but cites only L1, which merely defines the four Stieltjes integrals. It needs L2 or a Riemann-Stieltjes reduction fact, neither of which is cited there.
- **deepseek-v4-pro**: Step 1.1 converts the four Riemann-Stieltjes integrals to ordinary integrals using only L1, the definition; no cited fact licenses that reduction for an affine integrator, and L2 states only the final parametric agreement.

### fs-absolute-value-passes-through-a-contour-integral

page: contour-integration-examples

- **gpt-5.6-terra**: Step 1.2 is unsupported: L2 identifies the absolute integral with L(gamma), but no cited fact establishes that this circle has length 2 pi r. The algebra tag cannot supply the needed arc-length computation.

