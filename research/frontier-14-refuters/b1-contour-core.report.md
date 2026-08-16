<!-- Recovered by Alpha-a from research/frontier-14-dispatch/refuter-refuter-b1-contour-core.log.
     Refuters are read-only and could not write this file; the brief was wrong.
     Text below is the agent's own report. -->

### B1-CONTOUR-CORE-1

- **Item:** `thm-riemann-stieltjes-and-parametric-contour-integrals-agree`
- **Location:** `items/thm-riemann-stieltjes-and-parametric-contour-integrals-agree.md:26-30`; Given at `:34`; contract at `research/frontier-14-batch-1.proof-contracts.json:3694`
- **Defect:** The Statement’s sums contain unbound data: no admissible partition `(t_j)` or derivative extensions `gamma'_j` are quantified, and `u,v` are not introduced by writing `f=u+iv`. The Given silently supplies an admissible partition.
- **Evidence:** The cited real definition explicitly says to “choose an admissible partition” and derivative extension on each piece (`items/def-scalar-and-vector-line-integrals-along-piecewise-c1-paths.md:27-31`). The contract’s choice row cites unrelated evidence.
- **Severity:** **fatal**.

### B1-CONTOUR-CORE-2

- **Item:** `prop-reversal-and-concatenation-of-complex-line-integrals`
- **Location:** Statement at `items/prop-reversal-and-concatenation-of-complex-line-integrals.md:26-30`; Given at `:34`
- **Defect:** The Statement neither quantifies `f` nor requires continuity on the relevant trace or union of traces. The Given silently adds continuous integrands.
- **Evidence:** Both integral definitions require continuity (`items/def-complex-line-integral-over-a-rectifiable-path.md:26-28`; `items/def-absolute-line-integral-over-a-rectifiable-path.md:26-28`).
- **Severity:** **fatal**.

### B1-CONTOUR-CORE-3

- **Item:** `prop-reversal-and-concatenation-of-complex-line-integrals`
- **Location:** `[L2]` at `items/prop-reversal-and-concatenation-of-complex-line-integrals.md:38`, used at `:52`
- **Defect:** `[L2]` drops the cited theorem’s existence, bounded-variation, and continuity-at-the-join hypotheses.
- **Evidence:** The source says “Whenever the integrals on the right exist” for linearity and, for additivity, assumes the integrator has bounded variation and the integrand is continuous at the split (`items/thm-riemann-stieltjes-linearity-and-additivity.md:36-44`). `[L2]` states these results without those conditions.
- **Severity:** **fatal**.

### B1-CONTOUR-CORE-4

- **Item:** `thm-invariance-of-complex-line-integrals-under-increasing-reparametrization`
- **Location:** Statement at `items/thm-invariance-of-complex-line-integrals-under-increasing-reparametrization.md:26-28`; Given at `:32`
- **Defect:** The Statement uses `f` without quantifying it or assuming continuity. The Given silently adds a continuous integrand.
- **Evidence:** The complex and absolute integral definitions require continuity on the trace at their lines 26-28.
- **Severity:** **fatal**.

### B1-CONTOUR-CORE-5

- **Item:** `thm-invariance-of-complex-line-integrals-under-increasing-reparametrization`
- **Location:** `[L1]` at `items/thm-invariance-of-complex-line-integrals-under-increasing-reparametrization.md:34`, used at `:46` and `:50`
- **Defect:** `[L1]` states the change-of-variable equality without the cited theorem’s integrability qualification and omits its existence equivalence.
- **Evidence:** The cited Statement says one Stieltjes integral exists iff the other does, “and in that case” the equality holds (`items/thm-riemann-stieltjes-change-of-variable.md:30-34`).
- **Severity:** **fatal**.

### B1-CONTOUR-CORE-6

- **Item:** `cor-ml-estimate-for-complex-line-integrals`
- **Location:** Statement at `items/cor-ml-estimate-for-complex-line-integrals.md:26-27`; Given at `:31`
- **Defect:** The Statement assumes only `|f(z)|≤M`, omitting continuity.
- **Evidence:** For `gamma(t)=t` on `[0,1]`, `f=1_Q`, and `M=1`, the bound holds but the Stieltjes integral against `t` does not exist. The library definition also restricts the notation to continuous integrands (`items/def-complex-line-integral-over-a-rectifiable-path.md:26-28`).
- **Severity:** **fatal**.

### B1-CONTOUR-CORE-7

- **Item:** `cor-ml-estimate-for-complex-line-integrals`
- **Location:** `[L3]` at `items/cor-ml-estimate-for-complex-line-integrals.md:37`, used at `:45`
- **Defect:** `[L3]` drops existence of the Stieltjes integral and bounded variation of the integrator.
- **Evidence:** The source assumes both before concluding the total-variation bound (`items/cor-riemann-stieltjes-integral-bound.md:32-35`). `[L3]` presents `|f|≤M` as the only condition.
- **Severity:** **fatal**.

## Nonfatal findings

### B1-CONTOUR-CORE-8

- **Item:** `thm-riemann-stieltjes-and-parametric-contour-integrals-agree`
- **Location:** steps 1.2 and 3.1 at `:54` and `:58`
- **Defect:** Passage from piecewise identities to the global weighted Stieltjes integrals lacks interval additivity and the relation between global and piecewise arc-length functions.
- **Evidence:** `[L3]` only supplies the unweighted total-length formula (`items/cor-piecewise-c1-paths-have-additive-speed-integral-length.md:28-32`). The needed additivity appears at `items/thm-riemann-stieltjes-linearity-and-additivity.md:41-44`.
- **Severity:** **nonfatal** under the 30-second rule.

### B1-CONTOUR-CORE-9

- **Item:** `thm-fundamental-theorem-for-complex-line-integrals`
- **Location:** step 2.1 at `items/thm-fundamental-theorem-for-complex-line-integrals.md:59`
- **Defect:** Componentwise use of the gradient theorem needs the Cauchy–Riemann identities identifying the gradients with `F'=f`; no fact states them.
- **Evidence:** `[L3]` states only that the components are `C1` (`items/cor-continuous-complex-derivative-gives-c1-components.md:30-32`). The needed identities are at `items/thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann.md:35-46`.
- **Severity:** **nonfatal**.

### B1-CONTOUR-CORE-10

- **Item:** `thm-uniform-limit-interchanges-complex-line-integrals`
- **Location:** step 2.1 at `items/thm-uniform-limit-interchanges-complex-line-integrals.md:45`
- **Defect:** The step replaces `int_gamma(f_n-f)` by `int_gamma f_n-int_gamma f` without citing linearity.
- **Evidence:** `[L1]` supplies existence and `[L2]` the ML bound; the missing equality is `items/prop-linearity-of-complex-line-integrals.md:26-27`.
- **Severity:** **nonfatal**.

### B1-CONTOUR-CORE-11

- **Item:** `thm-circle-integrals-of-integer-monomials`
- **Location:** steps 1.1 and 2.2 at `:49` and `:53`
- **Defect:** No input establishes continuity of negative integer powers on the circle, as required by `[L1]`. The steps also use real chain-rule and integer-power laws not stated by `[L2]` or `[L3]`.
- **Evidence:** The parametric theorem explicitly requires continuity (`items/thm-riemann-stieltjes-and-parametric-contour-integrals-agree.md:26-29`), while `items/def-complex-integer-powers.md:27-44` supplies definitions but no continuity theorem.
- **Severity:** **nonfatal**.

### B1-CONTOUR-CORE-12

- **Item:** `fs-every-continuous-complex-function-on-a-domain-has-a-primitive`
- **Location:** step 2.1 at `items/fs-every-continuous-complex-function-on-a-domain-has-a-primitive.md:54`
- **Defect:** The contradiction requires `2 pi i != 0`, but no fact supplies positivity of `pi` or nonvanishing of `i`.
- **Evidence:** `[L3]` gives the value `2 pi i` but not its nonvanishing (`items/thm-circle-integrals-of-integer-monomials.md:26-27`). Supporting statements are at `items/def-pi-via-first-positive-cosine-zero.md:30-33` and `items/thm-complex-numbers-form-a-field.md:28-40`.
- **Severity:** **nonfatal**.

### B1-CONTOUR-CORE-13

- **Item:** `thm-fundamental-theorem-for-complex-line-integrals`
- **Location:** contract lines `4480-4490` and `4555-4558`; current item line `57`
- **Defect:** The contract still records the pre-repair selection of a radius for every trace point and marks that family choice checked. The current proof defines `r_p=(1/2)sup S_p` and explicitly avoids Choice.
- **Severity:** **nonfatal** contract mismatch.

### B1-CONTOUR-CORE-14

- **Item:** `thm-path-independence-and-complex-primitive-criterion`
- **Location:** contract lines `4895-4898`; current item lines `54-56`
- **Defect:** The contract still says to choose one polygonal path for every `z`. The current proof defines `F(z)` through the unique common integral value and selects no paths.
- **Severity:** **nonfatal** contract mismatch.

### B1-CONTOUR-CORE-15

- **Item:** `cor-absolute-integral-of-one-is-path-length`
- **Location:** contract lines `4340-4343`; item lines `4` and `26-27`
- **Defect:** The `one` boundary is marked `not_applicable` even though the entire result computes the absolute integral of the constant `1`.
- **Severity:** **nonfatal** false boundary disposition.

### B1-CONTOUR-CORE-16

- **Item:** `fs-every-continuous-complex-function-on-a-domain-has-a-primitive`
- **Location:** contract lines `5407-5415`; item lines `24-26`
- **Defect:** The contract correctly says the Statement is not a biconditional under `iff-forward`, then inconsistently marks `iff-reverse` checked. Citing a separate corrected criterion does not create an iff direction in this item.
- **Severity:** **nonfatal** false boundary disposition.

Coverage: all 21 assigned items were opened and read fully, as were the on-disk Definitions or Statements of every dependency cited by their facts. Every applicable batch-1 boundary row was inspected. No dependency target had `provenance.statement: ai-generated`.

Clean items:

- `rem-complex-contours-as-planar-rectifiable-paths`
- `def-complex-contours-reversal-concatenation-and-closedness`
- `def-complex-line-integral-over-a-rectifiable-path`
- `def-absolute-line-integral-over-a-rectifiable-path`
- `thm-existence-of-complex-line-integrals-on-rectifiable-paths`
- `prop-linearity-of-complex-line-integrals`
- `thm-fundamental-inequality-for-complex-line-integrals`
- `def-complex-primitive`
- `cor-closed-contour-integral-of-a-derivative-is-zero`
- `cor-contour-integral-of-a-constant-is-an-endpoint-increment`
- `cor-normalized-circle-integral-about-its-centre-is-one`

No mathematical or dependency inspection was blocked; only the required report-file write was blocked.
tokens used
270,885
