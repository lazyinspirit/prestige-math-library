# `ra-enrich-01` — independent audit findings

Scope: exactly the seven commissioned draft items and every published dependency
they cite. I opened each cited dependency from disk before judging whether it
licensed the use made of it. I found **no fatal defect** and four nonfatal
dependency/citation gaps. Each is a 30-second repair; none changes a Statement.

## Findings

### 1. `thm-taylor-series-representation-by-remainder` · nonfatal · Proof step 1.3

**What is wrong.** Step 1.3 applies `thm-extreme-value-r` to
$|f^{(n+1)}|$. Smoothness gives continuity of $f^{(n+1)}$, and the cited
extreme-value theorem gives attainment for a continuous function on a nonempty
compact set, but neither [L2] nor another declared dependency licenses the
intermediate assertion that the absolute-value composite
$|f^{(n+1)}|$ is continuous. The maximum exists, but the citation chain as
written omits one premise.

**What would fix it.** Add `thm-algebra-of-continuous-functions` as a dependency
and cite its absolute-value closure clause in step 1.3, or give the one-line
continuity proof from $\bigl||u|-|v|\bigr|\le |u-v|$ before applying the
extreme-value theorem. This is nonfatal under the 30-second rule.

### 2. `def-radian-angle-by-unit-circle-arc-length` · nonfatal · Definition, the speed-integral “Therefore” sentence

**What is wrong.** The exact statement of
`thm-c1-paths-have-length-equal-to-the-integral-of-speed` requires the path to
be continuous, differentiable on the open interval, and to have a derivative
extending continuously to the closed interval. The draft establishes the
derivative formula and unit speed, but it never discharges continuity of
$\gamma$ or of $\gamma'=(-\sin,\cos)$ before invoking the theorem.
`thm-sine-and-cosine-derivatives` states differentiability and the derivative
formulas; it does not itself state the differentiable-implies-continuous
inference. The published Pythagorean dependency is otherwise the correct
all-real identity, and the speed theorem does cover singleton intervals.

**What would fix it.** Add `cor-differentiable-implies-continuous` as a direct
dependency and state that sine and cosine are continuous, hence both $\gamma$
and its displayed derivative are continuous on the relevant closed interval,
before applying the speed-integral theorem. This is nonfatal under the
30-second rule.

### 3. `def-radian-angle-by-unit-circle-arc-length` · nonfatal · Definition, the case $t=0$

**What is wrong.** The draft calls
$\gamma\!\upharpoonright_{[0,0]}$ “that unit-circle arc” and cites
`def-circular-arcs-circumference-and-diameter`, but the cited definition admits
only restrictions to $[\alpha,\beta]$ with $\alpha<\beta$. Thus the cited
definition does not call the singleton restriction an arc. The length itself is
not in doubt: the published speed-integral theorem explicitly assigns zero to
a singleton interval.

**What would fix it.** State the arc definition for $0<t\le2\pi$ and handle
$t=0$ separately as the degenerate restricted path of length zero, or explicitly
extend the terminology in this new definition to include the degenerate arc.
This is nonfatal under the 30-second rule.

### 4. `thm-standard-maclaurin-expansions` · nonfatal · Proof step 1.6

**What is wrong.** [L6] gives the derivative of the unshifted positive-base
power $u\mapsto u^{-\alpha}$, while step 1.6 asserts the derivative of the
composition $x\mapsto(1+x)^{-\alpha}$. The cited [L10] supplies sum and product
rules, not the chain rule, and `thm-chain-rule` is absent from the dependency
list. The asserted derivative is correct, but this step is not licensed by the
cited interfaces as written. All later termwise differentiations are, by
contrast, confined to $|x|<1$ and correctly use
`thm-termwise-differentiation-of-a-real-power-series` inside the established
radius.

**What would fix it.** Add `thm-chain-rule` as a dependency and cite it with
[L6] in step 1.6, or prove the affine-shift derivative directly. This is
nonfatal under the 30-second rule.

## Per-item verdicts

- **`def-taylor-and-maclaurin-series` — clean.** The definition separates the
  formal series, convergence, and representation, and changes no planned
  domain or convention.
- **`thm-taylor-series-representation-by-remainder` — no fatal defect; one
  nonfatal citation gap (Finding 1).** Both directions of the pointwise iff are
  proved, and the uniform conclusion follows on the stated compact interval
  once the continuity premise used to define $M_{n+1}$ is cited.
- **`cex-smooth-function-not-equal-to-its-maclaurin-series` — clean.** The
  base $\psi=\phi\circ q$ and the derivative-form closure in steps 1.1–1.2
  give the required induction. The chain rule applies at $0$ because the
  published `ex-flat-exponential-function` establishes every derivative of
  $\phi$ there by the required limit argument; step 3.2 therefore evaluates a
  globally established derivative formula rather than substituting into a
  formula valid only off $0$.
- **`thm-euler-mascheroni-constant-and-harmonic-asymptotic` — clean.** Step
  1.2 proves strict decrease, steps 1.3–1.4 prove the stated lower bound for
  every $n\ge1$, and the cited integral monotonicity/additivity results license
  the comparisons. The $o(1)$ and quotient conclusions follow from the proved
  convergence and dyadic growth of $\log n$.
- **`def-radian-angle-by-unit-circle-arc-length` — no fatal defect; two
  nonfatal dependency/terminology gaps (Findings 2–3).** The unit-speed
  computation and full-turn conclusion are mathematically correct after those
  short repairs.
- **`thm-analytic-sine-cosine-agree-with-right-triangle-ratios` — clean.** The
  proof establishes existence by IVT, uniqueness by strict decrease, selects
  the positive sine root, and only then identifies the geometric ratios. It
  does not assume the ratio convention it proves.
- **`thm-standard-maclaurin-expansions` — no fatal defect; one nonfatal
  citation gap (Finding 4).** The generalized binomial proof and every
  termwise operation otherwise stay within $|x|<1$.

## Five committed controls

1. **Provenance — PASS.** All seven carry
   `provenance.statement: literature-derived`. The two definitions carry the
   permitted proof label `not-applicable`; the five proof-bearing items carry
   `provenance.proof: ai-altered`. `research/ra-enrich-01-author-report.md`
   records a statement and proof/adaptation rationale item by item, including
   the appended rationale for the amended item 6. Direct checks of the cited
   Trench, Hunter, MIT, Lebl, and OpenStax treatments support the stated
   definitions/results; no source hypothesis, domain, endpoint, or direction
   was changed, and no statement is labelled AI-generated.
2. **Generalized-binomial domain — PASS.** The Statement claims
   $(1+x)^\alpha=\sum_{n\ge0}\binom{\alpha}{n}x^n$ only for $|x|<1$;
   proof step 7.1 expressly disclaims both endpoints.
3. **Taylor remainder criterion — PASS.** The Statement defines the compact
   interval $[a-r,a+r]\subset I$ and
   $M_{n+1}=\max_{|t-a|\le r}|f^{(n+1)}(t)|$ explicitly, uses no global
   derivative bound, and proves the two iff directions separately in steps
   1.1 and 1.2. Finding 1 is only the omitted continuity citation needed for
   existence of the displayed maximum.
4. **Acute-angle bridge — PASS.** The hypotheses are strictly $A,O>0$ and the
   constructed angle lies in $(0,\pi/2)$. The final Remark treats zero-leg
   axis/quadrantal configurations as degenerate unit-circle cases and does not
   force them into an acute-triangle side-ratio convention.
5. **B-page leaf — PASS.** The placement manifest assigns
   `cex-smooth-function-not-equal-to-its-maclaurin-series` to the B page
   `the-exponential-function-examples`; it has empty `justified_by`, and a
   repository search finds no other item or page citing it or declaring it as
   a dependency. In particular, no A-page item targets it.
