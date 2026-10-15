---
id: ex-calibration-curve-reference-uncertainty-and-batch-drift
kind: example
title: "Calibration curve with uncertain reference standards and batch drift"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - def-measurand-calibration-and-measurement-uncertainty
  - thm-first-order-measurement-uncertainty-propagation
  - def-moments-variance-and-covariance
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "JCGM 100:2008, Evaluation of Measurement Data — Guide to the Expression of Uncertainty in Measurement, clauses 4.1 and 5.1–5.2"
      url: "https://www.bipm.org/documents/20126/2071204/JCGM_100_2008_E.pdf/cb0ef43f-baa5-11cf-3f85-4dcd86f77bd6"
    - title: "NIST/SEMATECH Engineering Statistics Handbook, Chapter 2: Measurement Process Characterization, calibration and process studies"
      url: "https://www.itl.nist.gov/div898/handbook/toolaids/pff/mpc.pdf"
    - title: "Sai Ravela, MIT OpenCourseWare, Quantifying Uncertainty: Summary lecture notes, Fall 2012"
      url: "https://www.ocw.mit.edu/courses/12-s990-quantifying-uncertainty-fall-2012/a1cf07c268b15238d4351c512d31b28b_MIT12_S990F12_Summary.pdf"

---

## Example

Consider a two-point calibration curve. At the estimated reference values
$\hat r_1=10$ and $\hat r_2=20$, suppose the corresponding instrument
responses are treated as exact values $1$ and $21$. Here the inverse model has
domain $U=\mathbb R^3$. For a later response $Y$,
the inverse curve estimates the measurand by
$$q=f(R_1,R_2,Y)=R_1+\frac{Y-1}{20}(R_2-R_1).$$
Use a finite input uncertainty model on
$(\Omega,\mathcal F,P)$, where $\Omega=\{-1,1\}^3$, $\mathcal F=2^\Omega$,
and each of the eight points has probability $1/8$. For
$Z_i(\epsilon)=\epsilon_i$,
set
$$R_1=10+0.1Z_1,\qquad R_2=20+0.1Z_1+\sqrt{0.03}\,Z_2,\qquad Y=13+0.2Z_3.$$
The shared $Z_1$ component represents covariance in the reference-standard
values; the separate $Y$ term represents repeatability uncertainty in the
later reading. These are stipulated input uncertainty summaries for this
example, not an empirical calibration study.

For a second calibration batch, suppose the response curve instead passes
through $(10,1)$ and $(20,23)$. The change in slope is a stipulated batch
drift: it shows what applying a different batch's curve can do, but it is not
a universal model of measurement-process drift. For the pooled comparison,
define the pooled response curve as the equal-weight least-squares line with
an intercept fitted to the four nominal calibration points
$(10,1),(20,21),(10,1),(20,23)$, one point for each batch-standard pair.

## Facts & Assumptions

**Given:** The finite input model and the two stipulated calibration response
curves in the Example.

[F1] [[def-measurand-calibration-and-measurement-uncertainty]]: the input
covariance matrix records covariance between reference-standard values and a
later reading; the combined standard uncertainty is attached to the
first-order linearized output.

[F2] [[thm-first-order-measurement-uncertainty-propagation]]: the variance of
that output is $\nabla f(\hat x)^T\Sigma\nabla f(\hat x)$, with all off-diagonal
covariance terms retained.

[F3] [[def-moments-variance-and-covariance]]: for square-integrable real
random variables, covariance is the expectation of the centered product.

[A1] $(\Omega,\mathcal F,P)$ is the finite probability space specified in
the Example, and the input variables $R_1,R_2,Y$ are the functions specified
there.

[A2] The first calibration batch's stipulated response values are $1$ at
$\hat r_1=10$ and $21$ at $\hat r_2=20$; the inverse relation in the Example
uses response gap $20$.

[A3] The second batch's stipulated response values are $1$ at $10$ and $23$
at $20$, corresponding to slope $2.2$ through those two points.

[A4] The pooled calibration rule is equal-weight ordinary least squares in
response-on-quantity form with a free intercept over the four nominal
calibration points listed in the Example.

## Verification

1.1 Averaging over the eight sign triples gives $\mathbb E[Z_i]=0$, $\mathbb E[Z_i^2]=1$, and $\mathbb E[Z_iZ_j]=0$ for $i\ne j$: each sign appears equally often, its square is always one, and reversing one coordinate cancels each cross-product pair. Also $R_2-R_1=10+\sqrt{0.03}Z_2>9.8$, while $Y\in[12.8,13.2]\subset(1,21)$, so the ordered reference values and inverse curve are valid throughout the finite input support. [given, A1, A2, algebra]

1.2 At the input means, the first batch's inverse curve gives $\hat q=10+(13-1)(20-10)/20=16$. Its gradient in the order $(R_1,R_2,Y)$ is $\left(1-\frac{Y-1}{20},\frac{Y-1}{20},\frac{R_2-R_1}{20}\right)=(0.4,0.6,0.5)$. [given, A2, algebra]

1.3 In the second batch, a measurand value $q=16$ produces response $1+2.2(16-10)=14.2$. The first batch's inverse curve maps this response to $10+(14.2-1)/2=16.6$, while the second batch's curve maps it to $10+(14.2-1)/2.2=16$, so the first-curve mismatch is $0.6$. For the pooled fit, the four nominal quantities and responses have means $\bar q=15$ and $\bar r=11.5$. Their centered sums are $S_{qq}=\sum(q-\bar q)^2=4(5^2)=100$ and $S_{qr}=\sum(q-\bar q)(r-\bar r)=2(-5)(-10.5)+5(9.5)+5(11.5)=210$. [A2, A3, A4, algebra]

2.1 The input means are $(10,20,13)$. By [F3] and step 1.1, $\operatorname{Var}(R_1)=0.01$, $\operatorname{Var}(R_2)=0.01+0.03=0.04$, $\operatorname{Var}(Y)=0.04$, and $\operatorname{Cov}(R_1,R_2)=0.01$; the covariances with $Y$ are zero. Therefore $\Sigma=\begin{pmatrix}0.01&0.01&0\\0.01&0.04&0\\0&0&0.04\end{pmatrix}$. [F3, A1, step 1.1, algebra]

3.1 Apply [F2] to step 2.1 and the gradient in step 1.2: $u_c^2=0.4^2(0.01)+0.6^2(0.04)+0.5^2(0.04)+2(0.4)(0.6)(0.01)=0.0308$, so $u_c=\sqrt{0.0308}\approx0.1755$ in measurand units. The covariance contribution is positive and would be lost by treating the two reference values as independent. [F1, F2, step 2.1, step 1.2, algebra]

4.1 For an equal-weight line $r=a+bq$, write each residual as $(r-\bar r)-b(q-\bar q)+(\bar r-a-b\bar q)$. The centered terms sum to zero, so the sum of squared residuals is $S_{rr}-2bS_{qr}+b^2S_{qq}+4(\bar r-a-b\bar q)^2$, where $S_{rr}=\sum(r-\bar r)^2$. For each $b$ this is minimized in $a$ at $a=\bar r-b\bar q$. Since $S_{qq}=100>0$, the remaining quadratic in $b$ is uniquely minimized because it equals $S_{rr}-S_{qr}^2/S_{qq}+S_{qq}(b-S_{qr}/S_{qq})^2$. Thus $b=S_{qr}/S_{qq}=2.1$, giving $a=\bar r-b\bar q=-20$ and the pooled curve $r=1+2.1(q-10)$. Its inverse maps response $14.2$ to $10+(14.2-1)/2.1=114/7\approx16.286$, which is $2/7$ above the second-batch estimate $16$. These discrepancies are specific to the stipulated curves. [A4, step 1.3, algebra] ∎

## Remarks

The value $u_c$ is a first-order standard uncertainty, not a 95% interval or a
coverage claim. The batch comparison is illustrative; process stability and
the adequacy of either curve require empirical assessment.
