---
id: ex-cm-parallel-axis-two-point-masses
kind: example
title: "Parallel-axis theorem checked on two equal point masses on the third axis"
status: published
origin: pipeline
domain: mathematics
dependency_level: 4
deps: [thm-cm-parallel-axis-theorem, def-cm-inertia-tensor-about-a-point, def-cm-mass-distribution-and-inertia-matrix, lem-cm-inertia-tensor-about-a-point-is-finite, lem-cm-mass-moments-are-finite, def-countable-choice, def-dirac-measure, prop-dirac-measure-is-a-probability-measure, thm-nonnegative-weighted-sums-of-measures, def-nonnegative-weighted-sum-of-measures, def-nonnegative-lebesgue-integral, def-integral-of-a-nonnegative-simple-function, def-integral-over-a-measurable-set, def-integrable-real-and-complex-functions-and-their-integrals, prop-order-and-scalar-rules-for-the-nonnegative-integral, thm-linearity-of-the-lebesgue-integral-on-l-one, def-euclidean-inner-product, def-matrix-space, def-matrix-product-and-identity-matrix, lem-finite-sum-laws, def-metric-ball]
dependency_roles:
  thm-cm-parallel-axis-theorem: mathematical-premise
  def-cm-inertia-tensor-about-a-point: mathematical-premise
  def-cm-mass-distribution-and-inertia-matrix: mathematical-premise
  lem-cm-inertia-tensor-about-a-point-is-finite: mathematical-premise
  lem-cm-mass-moments-are-finite: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dirac-measure: mathematical-premise
  prop-dirac-measure-is-a-probability-measure: mathematical-premise
  thm-nonnegative-weighted-sums-of-measures: mathematical-premise
  def-nonnegative-weighted-sum-of-measures: mathematical-premise
  def-nonnegative-lebesgue-integral: mathematical-premise
  def-integral-of-a-nonnegative-simple-function: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-matrix-space: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  lem-finite-sum-laws: mathematical-premise
  def-metric-ball: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, 2015), §3.2.1, Eqs. (3.25)-(3.26), printed pp. 52-53: the parallel-axis formula verified here on a two-point distribution"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. Likharev, Essential Graduate Physics: Classical Mechanics, Chapter 4 Section 4.2, Eq. (4.28), printed page 6 of Chapter 4 (PDF page 60): the axis-shift theorem I'_{jj'}=I_{jj'}+M(delta_{jj'}d^2-d_jd_{j'})"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
verification:
  precheck: pass
---

## Example

Let $m>0$, $r>0$, and let

$$\nu:=m\,\delta_{r e_3}+m\,\delta_{-r e_3}$$

be the weighted sum of the two Dirac measures at $\pm re_3$ ([[def-dirac-measure]],
[[thm-nonnegative-weighted-sums-of-measures]]), a bounded finite Borel measure and hence a mass
distribution of total mass $2m$ ([[def-cm-mass-distribution-and-inertia-matrix]]). Assume the
Axiom of Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]), used only to make the
displayed integrals finite ([[lem-cm-inertia-tensor-about-a-point-is-finite]],
[[lem-cm-mass-moments-are-finite]]). Then:

- $\nu$ is centred, $\mu(\nu)=m\,re_3+m(-re_3)=0$, and its inertia matrix about the origin is
  $I(\nu)=\mathrm{diag}(2mr^2,2mr^2,0)$;
- the inertia tensor about $a=ce_3$, computed directly from the definition, is
  $I_\nu(ce_3)=\mathrm{diag}(2m(r^2+c^2),2m(r^2+c^2),0)$, and the parallel-axis identity of
  [[thm-cm-parallel-axis-theorem]], $I_\nu(a)=I(\nu)+2m(\lVert a\rVert_2^2I_3-aa^{\mathsf T})$,
  reproduces exactly this value.

All entries are exact polynomial expressions in $m,r,c$; no measurement is involved.

## Facts & Assumptions

**Given:** The parameters $m>0$, $r>0$, a real $c$, the measure
$\nu=m\delta_{re_3}+m\delta_{-re_3}$, and the notation of
[[def-cm-mass-distribution-and-inertia-matrix]] and
[[def-cm-inertia-tensor-about-a-point]].

[L1] The measure and its integrals ([[def-dirac-measure]],
[[prop-dirac-measure-is-a-probability-measure]], [[thm-nonnegative-weighted-sums-of-measures]],
[[def-nonnegative-weighted-sum-of-measures]]): $\nu(E)=m\delta_{re_3}(E)+m\delta_{-re_3}(E)$ for
every Borel set $E$, so $\nu$ is a measure with $\nu(\mathbb R^3)=2m$ and
$\nu(\{re_3\})=\nu(\{-re_3\})=m$; for every real measurable $f$ bounded on the two-point support
one has $\int f\,d\nu=mf(re_3)+mf(-re_3)$
([[def-nonnegative-lebesgue-integral]], [[def-integral-of-a-nonnegative-simple-function]],
[[def-integral-over-a-measurable-set]],
[[def-integrable-real-and-complex-functions-and-their-integrals]],
[[prop-order-and-scalar-rules-for-the-nonnegative-integral]],
[[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

[L2] The two inertia objects ([[def-cm-mass-distribution-and-inertia-matrix]],
[[def-cm-inertia-tensor-about-a-point]]):
$I(\nu)_{jk}=\int(\lVert\rho\rVert_2^2\delta_{jk}-\rho_j\rho_k)\,d\nu$ and
$I_\nu(a)_{jk}=\int(\lVert\rho-a\rVert_2^2\delta_{jk}-(\rho_j-a_j)(\rho_k-a_k))\,d\nu$; all
entries are finite real numbers under $\mathrm{AC}_\omega$
([[lem-cm-inertia-tensor-about-a-point-is-finite]], [[lem-cm-mass-moments-are-finite]]).

[L3] The parallel-axis theorem ([[thm-cm-parallel-axis-theorem]]): for a centred mass distribution
of total mass $m_{\mathrm{tot}}$ one has
$I_\nu(a)=I(\nu)+m_{\mathrm{tot}}(\lVert a\rVert_2^2I_3-aa^{\mathsf T})$.

[L4] Matrix data ([[def-euclidean-inner-product]], [[def-matrix-space]],
[[def-matrix-product-and-identity-matrix]], [[lem-finite-sum-laws]]): for $\rho=\pm re_3$ one has
$\rho\rho^{\mathsf T}=r^2e_3e_3^{\mathsf T}$ and $\lVert\rho\rVert_2^2=r^2$; for $a=ce_3$ and
$\rho=re_3$ one has $\rho-a=(r-c)e_3$ while for $\rho=-re_3$ one has $\rho-a=-(r+c)e_3$; and
$I_3-e_3e_3^{\mathsf T}=\mathrm{diag}(1,1,0)$.

## Verification

**Proof technique:** direct; evaluate the two atomic integrals and compare the two sides of the
parallel-axis identity.

1.1 Centredness and total mass: by the atomic formula of [L1], $\mu(\nu)=m\cdot re_3+m\cdot(-re_3)=0$ and $\nu(\mathbb R^3)=2m$, so $\nu$ is a centred mass distribution of total mass $2m$ and [L3] applies. [given, L1, L2, algebra]

2.1 Inertia about the origin: by [L1], [L2] and [L4], $$I(\nu)=m\bigl(r^2I_3-r^2e_3e_3^{\mathsf T}\bigr)+m\bigl(r^2I_3-r^2e_3e_3^{\mathsf T}\bigr)=2mr^2\bigl(I_3-e_3e_3^{\mathsf T}\bigr)=\mathrm{diag}(2mr^2,2mr^2,0).$$ [step 1.1, L1, L2, L4, algebra]

2.2 Inertia about $ce_3$, computed directly: for $\rho=re_3$ the shifted integrand is $(r-c)^2(I_3-e_3e_3^{\mathsf T})$ and for $\rho=-re_3$ it is $(r+c)^2(I_3-e_3e_3^{\mathsf T})$, so by [L1], [L2] and [L4], $$I_\nu(ce_3)=m\bigl((r-c)^2+(r+c)^2\bigr)\bigl(I_3-e_3e_3^{\mathsf T}\bigr)=2m(r^2+c^2)\bigl(I_3-e_3e_3^{\mathsf T}\bigr)=\mathrm{diag}\bigl(2m(r^2+c^2),2m(r^2+c^2),0\bigr).$$ [step 1.1, L1, L2, L4, algebra]

3.1 The theorem side: by [L3] with $m_{\mathrm{tot}}=2m$ and $a=ce_3$, $I_\nu(ce_3)=I(\nu)+2m(c^2I_3-c^2e_3e_3^{\mathsf T})$, which by step 2.1 and [L4] equals $2m(r^2+c^2)(I_3-e_3e_3^{\mathsf T})$, in exact agreement with the direct computation of step 2.2: the parallel-axis identity holds at this data. [step 1.1, step 2.1, step 2.2, L3, L4, algebra] ∎
