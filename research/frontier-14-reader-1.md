# Frontier 14 — Step 6a independent reader 1

Scope: every item on the four pages in `research/frontier-14-batch-1.pages.json`.

Coverage: I read all 73 scoped item files in full and checked all 202 `[F#]` / `[A#]` / `[L#]` citations against their cited items. I opened 65 additional dependency items for those checks, for 138 unique item files opened in total. All 73 scoped items contain both `provenance.statement` and `provenance.proof`. I separately checked the eight `ai-generated` Statements; none is load-bearing elsewhere, and I found no counterexample to any of those Statements. One of those items nevertheless has the citation defect in R1-1.

## Findings

### R1-1 — `ex-lacunary-factorial-exponent-power-series`

- **Location:** `items/ex-lacunary-factorial-exponent-power-series.md:36`, `[L3]`, used in proof step 1.1 at line 42.
- **Defect:** `[L3]` says that the cited factorial item gives “a strictly increasing sequence $n!$ for $n\ge2$.” The cited `def-factorial-and-falling-factorial` does not state monotonicity. Its relevant clause is only the recursion
  $$F(0)=1,\qquad F(\sigma(n))=F(n)\cdot\sigma(n),$$
  followed by the definition $n!:=F(n)$ (`items/def-factorial-and-falling-factorial.md:41-50`). Its four proved facts are product representation, nonvanishing/embedding, the falling-factorial identity, and boundary values; none is strict increase.
- **Why it matters:** Step 1.1 needs factorial indices to occur arbitrarily far out. That is derivable by an induction using the recursion and order facts, but the current `[L3]` attributes a stronger conclusion to an item that does not state it. This is an inaccurate `[L#]` restatement, not merely an omitted algebra line.
- **Severity:** **fatal**.

### R1-2 — `thm-riemann-stieltjes-and-parametric-contour-integrals-agree`

- **Location:** `items/thm-riemann-stieltjes-and-parametric-contour-integrals-agree.md:36`, `[L1]`, used in steps 1.1 and 1.2.
- **Defect:** `[L1]` restates the cited reduction theorem as applying whenever the integrator is continuous and its derivative extends continuously, but drops the theorem's integrand hypothesis. The cited Statement says exactly: “Let $f:[a,b]\to\mathbb R$ be Riemann integrable. Suppose $\alpha$ is continuous on $[a,b]$, differentiable on $(a,b)$, and $\alpha'$ extends continuously to $[a,b]$” (`items/thm-riemann-stieltjes-c1-integrator-reduction.md:34-36`).
- **Why it matters:** Riemann integrability of the integrand is a hypothesis of the cited theorem and is absent from the fact line. The concrete component integrands used later are continuous, so the theorem can be applied after stating that fact, but the present universal restatement is wider than its source.
- **Severity:** **fatal**.

### R1-3 — `thm-riemann-stieltjes-and-parametric-contour-integrals-agree`

- **Location:** proof step 1.2, `items/thm-riemann-stieltjes-and-parametric-contour-integrals-agree.md:50`.
- **Defect:** The step applies `[L1]` to the arc-length integrator, but none of `[L1]`, `[L2]`, or `[L3]` as cited establishes that this integrator has derivative $|\gamma'_j|$ on a smooth piece. `[L3]` only states the total-length formula
  $$L_{[a,b]}(\gamma)=\sum_i\int_{t_i}^{t_{i+1}}\lVert v_i(t)\rVert_2\,dt$$
  (`items/cor-piecewise-c1-paths-have-additive-speed-integral-length.md:28-32`). The directly matching published result is `cor-arc-length-accumulation-derivative-is-speed`, whose Statement says $s_\gamma'(t)=\lVert\gamma'(t)\rVert_2$ (`items/cor-arc-length-accumulation-derivative-is-speed.md:28-36`), but it is not an input.
- **Why it matters:** Without the derivative-of-arc-length fact, `[L1]` does not yield the displayed absolute-integral formula. A competent reader can derive it quickly from the length formula on restrictions and the real FTC, so this is a short proof gap rather than a false conclusion.
- **Severity:** **nonfatal**.

### R1-4 — `prop-reversal-and-concatenation-of-complex-line-integrals`

- **Location:** proof steps 1.1-1.2, `items/prop-reversal-and-concatenation-of-complex-line-integrals.md:48-50`.
- **Defect:** The steps use decreasing affine change of parameter for reversal and affine changes of parameter on both halves of a concatenation. `[L1]` only defines those path operations, while the cited `[L2]` theorem states linearity in the integrand/integrator and additivity across an interval cut (`items/thm-riemann-stieltjes-linearity-and-additivity.md:34-44`). It states no change-of-variable rule. `[L3]` covers only piecewise-$C^1$ paths and is used after the general rectifiable claim has already been asserted.
- **Why it matters:** The cited inputs do not license the parameter substitutions for arbitrary rectifiable paths. Reversing or affinely transporting tagged partitions supplies a short direct repair, so this is a gap a competent reader can close quickly.
- **Severity:** **nonfatal**.

### R1-5 — `thm-invariance-of-complex-line-integrals-under-increasing-reparametrization`

- **Location:** Statement display, `items/thm-invariance-of-complex-line-integrals-under-increasing-reparametrization.md:27`.
- **Defect:** The display contains literal `,qquad` rather than `,\qquad` between the two identities.
- **Why it matters:** `qquad` is rendered as mathematical letters rather than spacing, corrupting the published Statement display, although the two intended equations and proof remain unambiguous.
- **Severity:** **polish**.

### R1-6 — `thm-fundamental-theorem-for-complex-line-integrals`

- **Location:** item title at `items/thm-fundamental-theorem-for-complex-line-integrals.md:4`; repeated in the page summary at `library/complex-analysis/contour-integration.md:11`. Compare the formal Statement at item lines 26-27.
- **Defect:** The title asserts the endpoint formula for “a function with a continuous primitive,” and the page summary likewise says “A continuous primitive evaluates every rectifiable contour integral.” The proved Statement instead assumes that $f$ is continuous and that $F'=f$ is continuous. Calling $F$ a continuous primitive does not preserve that hypothesis: every complex-differentiable primitive is continuous, while its derivative need not be continuous.
- **Why it matters:** The title and page prose therefore assert the result beyond the hypotheses under which the line integral is defined and the proof works. This is exactly a title/summary overclaim relative to the Statement and proof.
- **Severity:** **fatal**.

### R1-7 — `thm-fundamental-theorem-for-complex-line-integrals`

- **Location:** proof step 1.1, `items/thm-fundamental-theorem-for-complex-line-integrals.md:57`.
- **Defect:** From pointwise continuity witnesses, the proof says “for each point $p$ of the trace choose a ball $B(p,\rho_p)$” and then uses the resulting family as an open cover. This is a simultaneous choice over an arbitrary compact trace, but neither the item nor a cited input supplies the choice principle or scopes the chosen family.
- **Why it matters:** The stated facts give $\forall p\,\exists\rho$, not a function $p\mapsto\rho_p$. The argument can avoid the choice by taking the cover of all admissible half-radius balls, but that is not the argument written. The dispatch specifically requires an unstated choice scope to be treated as fatal.
- **Severity:** **fatal**.

### R1-8 — `cor-contour-integral-of-a-constant-is-an-endpoint-increment`

- **Location:** `[L2]`, `items/cor-contour-integral-of-a-constant-is-an-endpoint-increment.md:35`.
- **Defect:** `[L2]` says “A continuous primitive evaluates a rectifiable contour integral by its endpoint increment.” The cited theorem's actual Statement requires a primitive of a **continuous function** and explicitly assumes $F'=f$ is continuous (`items/thm-fundamental-theorem-for-complex-line-integrals.md:26-27`). Continuity of the primitive itself is not that hypothesis.
- **Why it matters:** The constant integrand in this example satisfies the omitted hypothesis, but the `[L2]` restatement is still wider than the cited item and uses the same materially wrong “continuous primitive” formulation as the false title in R1-6.
- **Severity:** **fatal**.

### R1-9 — `thm-path-independence-and-complex-primitive-criterion`

- **Location:** `[L5]`, `items/thm-path-independence-and-complex-primitive-criterion.md:44`.
- **Defect:** `[L5]` says without qualification that “A primitive gives the endpoint formula on every rectifiable contour.” The cited theorem requires that the primitive's derivative/integrand be continuous (`items/thm-fundamental-theorem-for-complex-line-integrals.md:26-27`).
- **Why it matters:** The Given in this item separately assumes $f$ continuous, so step 1.1 can apply the cited theorem, but `[L5]` itself is an inflated universal restatement that omits a source hypothesis.
- **Severity:** **fatal**.

### R1-10 — `thm-path-independence-and-complex-primitive-criterion`

- **Location:** proof step 1.2, `items/thm-path-independence-and-complex-primitive-criterion.md:54`.
- **Defect:** `[L1]` and `[L2]` give a basepoint and, for every $z\in U$, existence of a polygonal path from that basepoint to $z$. The step then simultaneously chooses one such path for every $z\in U$ and uses that choice family to define $F$, without a stated choice principle or scoped choice function.
- **Why it matters:** The inputs establish $\forall z\,\exists\gamma_z$, not the asserted global selection $z\mapsto\gamma_z$. The proof can instead show that all such path integrals have a unique common value for each endpoint and define $F$ by unique specification, but it does not do so. The dispatch specifically classifies an unstated choice scope as fatal.
- **Severity:** **fatal**.

### R1-11 — `thm-circle-integrals-of-integer-monomials`

- **Location:** `[L4]`, `items/thm-circle-integrals-of-integer-monomials.md:39`, used in proof step 2.2 at line 53.
- **Defect:** `[L4]` attributes $\exp(2\pi i k)=1$ for every integer $k$ to `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`. The cited item's Statement says
  “For real $x,y$, $\exp(x+iy)=e^x(\cos y+i\sin y)$ and $|\exp(x+iy)|=e^x$. In particular $e^{i\pi}+1=0$”
  (`items/cor-complex-exponential-cartesian-form-modulus-and-eulers-identity.md:26-28`). It does not state the universal integer-period identity.
- **Why it matters:** The needed identity can be derived from $e^{i\pi}=-1$ and the separately cited exponential addition law, but the current fact line changes both the quantifier and conclusion of its cited item and step 2.2 treats that enlarged fact as an input.
- **Severity:** **fatal**.

### R1-12 — `ex-exponential-contour-integral-by-riemann-sum-and-parametrization`

- **Location:** `[L4]`, `items/ex-exponential-contour-integral-by-riemann-sum-and-parametrization.md:40`.
- **Defect:** `[L4]` says “A continuous primitive evaluates a rectifiable contour integral by the endpoint increment.” The cited theorem instead assumes that the integrand, equivalently the primitive's derivative, is continuous (`items/thm-fundamental-theorem-for-complex-line-integrals.md:26-27`).
- **Why it matters:** The exponential meets the missing hypothesis, but the fact line still widens its source and repeats the false “continuous primitive” formulation.
- **Severity:** **fatal**.

### R1-13 — `ex-polynomial-contour-integral-along-a-line-segment`

- **Location:** `[L2]`, `items/ex-polynomial-contour-integral-along-a-line-segment.md:35`.
- **Defect:** `[L2]` states without a continuity hypothesis that “A primitive evaluates every rectifiable contour integral by its endpoint increment.” The cited theorem requires a continuous integrand and explicitly assumes $F'=f$ is continuous (`items/thm-fundamental-theorem-for-complex-line-integrals.md:26-27`).
- **Why it matters:** The polynomial integrands meet the missing hypothesis, so the calculations can be retained, but the `[L2]` restatement itself is strictly wider than its source.
- **Severity:** **fatal**.

### R1-14 — `ex-contour-integral-of-conjugation-depends-on-the-path`

- **Location:** proof step 1.2, `items/ex-contour-integral-of-conjugation-depends-on-the-path.md:43`.
- **Defect:** The step correctly derives the segment formula
  $$\int\overline z\,dz=\overline{z_0}d+\frac{|d|^2}{2},$$
  but falsely says it gives $-2i$ on each of the segments $-1\to2i$ and $2i\to1$.
- **Evidence:** For the first segment, $z_0=-1$ and $d=1+2i$, so the value is
  $$(-1)(1+2i)+\frac52=\frac32-2i.$$
  For the second, $z_0=2i$ and $d=1-2i$, so the value is
  $$(-2i)(1-2i)+\frac52=-\frac32-2i.$$
  The two values sum to the claimed $-4i$, but neither segment value equals $-2i$.
- **Why it matters:** A numbered proof step contains a concrete false claim. Cancellation happens to preserve the final example value, but it does not make the asserted intermediate values true.
- **Severity:** **fatal**.

## Per-page verdicts

- `complex-power-series-and-analytic-functions` — **clean read**. I opened all 29/29 items and found no reportable defect.
- `complex-power-series-and-analytic-functions-examples` — **fails independent read** because of fatal R1-1. I opened all 11/11 items; the other ten were clean.
- `contour-integration` — **fails independent read** because of fatal R1-2 and R1-6 through R1-11. It also has nonfatal R1-3 and R1-4 and polish R1-5. I opened all 21/21 items.
- `contour-integration-examples` — **fails independent read** because of fatal R1-12 through R1-14. I opened all 12/12 items; the other nine were clean.

Total: **14 findings — 11 fatal, 2 nonfatal, 1 polish**. Scoped items opened: **73/73**. Unique item files opened including cited dependencies: **138**.
