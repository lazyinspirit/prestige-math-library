---
id: ex-pocock-spending-two-look
kind: example
title: Two-look Pocock-type symmetric spending
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - def-group-sequential-alpha-spending-design
  - alg-group-sequential-alpha-spending-boundary-calibration
  - thm-group-sequential-alpha-spending-calibration
  - def-standard-normal-and-normal-laws
  - lem-normal-density-has-total-mass-one
  - def-real-exponential-function-and-e
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - thm-exponential-is-strictly-increasing
  - thm-continuity-from-below-for-measures
  - thm-intermediate-value
  - def-axiom-of-choice
justified_by: []
strategy: "Check the named spending curve, construct its standard-normal quantile, and use the calibration theorem for the exact correlated second-look boundary."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "David L. DeMets and K. K. Gordon Lan, Interim Analysis: The Alpha Spending Function Approach, Statistics in Medicine 13 (1994), PDF pp. 6–7"
      url: "https://eclass.uoa.gr/modules/document/file.php/MATH301/PracticalSession3/LanDeMets.pdf"
    - title: "Michael J. Grayling, James M. S. Wason, and Adrian P. Mander, Group Sequential Clinical Trial Designs for Normally Distributed Outcome Variables, The Stata Journal 18(2) (2018), PDF pp. 2–4"
      url: "https://arxiv.org/pdf/1710.03127"
    - title: "Giorgos Minas, Multivariate Global Testing and Adaptive Designs, PhD thesis, Chapter 5 §§5.3–5.3.1, printed pp. 72–73"
      url: "https://wrap.warwick.ac.uk/id/eprint/58321/7/WRAP_THESIS_Minas_2013.pdf"
---

## Example

Assume AC, take $K=2$, $t_1=1/2$, $t_2=1$, and $\alpha=1/20$. Use the
symmetric two-sided Pocock-type spending curve
$$A_P(0)=0,\qquad A_P(t)=\alpha\log(1+(e-1)t)\quad(0<t\le1),$$
where $e=\exp(1)$ and $\log$ is the natural logarithm. Its first spend is
$a_1=\alpha\log((1+e)/2)$. Let
$\Phi(x)=P_0(Z_1\le x)$ be the standard normal CDF and let $q(u)$ be the
unique real number with $\Phi(q(u))=u$. The first symmetric boundary is
$c_1=q(1-a_1/2)$. The second boundary is the unique finite $c_2$ satisfying
$$P_0(|Z_1|\ge c_1\ \text{or}\ |Z_2|\ge c_2)=\alpha,$$
where the canonical covariance gives
$\operatorname{Corr}_0(Z_1,Z_2)=1/\sqrt2$. The joint probability of continuing
past look 1 and crossing at look 2 is therefore $\alpha-a_1$. Conditional on
continuing, the second-look crossing probability is
$(\alpha-a_1)/(1-a_1)$. The
Pocock-type spending curve does not assert constant standardized boundaries;
each boundary is calibrated under the joint law.

## Facts & Assumptions

**Given:** AC, the two planned information fractions $t_1=1/2,t_2=1$,
$\alpha=1/20$, the canonical Gaussian null law, and the stated Pocock-type
spending curve. Verify the curve is admissible and identify the two
two-sided boundaries exactly.

[F1] [[def-group-sequential-alpha-spending-design]]: A design has nondecreasing $A:[0,1]\to[0,\alpha]$ with $A(0)=0$, $A(1)=\alpha$, and canonical covariance $\Sigma_{jk}=\sqrt{t_j/t_k}$ for $j\le k$.

[F2] [[alg-group-sequential-alpha-spending-boundary-calibration]]: At a positive increment the symmetric two-sided boundary solves $P_0(R_{k-1}\cup\{|Z_k|\ge c_k\})=A(t_k)$.

[F3] [[thm-group-sequential-alpha-spending-calibration]]: Every positive increment has a unique finite boundary and $P_0(R_k)=A(t_k)$ at each look.

[F4] [[def-standard-normal-and-normal-laws]]: The standard normal law has density $\phi(x)=e^{-x^2/2}/\sqrt{2\pi}$.

[F5] [[lem-normal-density-has-total-mass-one]]: The density $\phi$ is positive and has integral one.

[F6] [[def-real-exponential-function-and-e]]: The real exponential is defined by its power series and $e:=\exp(1)$.

[F7] [[def-natural-logarithm]]: For $x>0$, $\log x$ is the unique real $y$ with $\exp(y)=x$.

[F8] [[thm-natural-logarithm-laws]]: $\log$ is continuous and strictly increasing on $(0,\infty)$, and $\log1=0$.

[F9] [[thm-exponential-is-strictly-increasing]]: The real exponential is strictly increasing on $\mathbb R$.

[F10] [[thm-continuity-from-below-for-measures]]: The measure of the union of an increasing sequence of measurable sets is the supremum of their measures.

[F11] [[thm-intermediate-value]]: A continuous real function on a closed bounded interval attains every value between its endpoint values.

[A1] [[def-axiom-of-choice]]: Assume the Axiom of Choice.

## Verification

1.1 Since $\exp(0)=1$ by its power series and $\exp$ is strictly increasing by [F9], $e=\exp(1)>1$. Thus $1+(e-1)t$ increases from $1$ to $e$ as $t$ goes from $0$ to $1$. By [F7]–[F8], $A_P(0)=0$, $A_P(1)=\alpha\log e=\alpha$, and $A_P$ is nondecreasing with values in $[0,\alpha]$. At $t_1=1/2$ this gives $a_1=\alpha\log((1+e)/2)$ and $0<a_1<\alpha$. [given, F1, F6, F7, F8, F9, algebra]

1.2 The standard normal CDF satisfies $\Phi(y)-\Phi(x)=\int_x^y\phi(s)\,ds$ for $x<y$. By [F4]–[F5], this difference is positive and at most $(y-x)/\sqrt{2\pi}$, so $\Phi$ is strictly increasing and continuous. Its limits at $-\infty$ and $+\infty$ are $0$ and $1$: [F10] applied to $(-n,\infty)$ gives the lower-tail limit, and [F10] applied to $(-\infty,n]$ gives the upper-tail limit; the density has no point masses. Therefore [F11] gives a unique $q(u)$ for every $u\in(0,1)$. In particular $c_1=q(1-a_1/2)$ is finite, positive, and symmetry and atomlessness give $P_0(|Z_1|\ge c_1)=a_1$. [F4, F5, F10, F11, A1, algebra]

2.1 The canonical covariance matrix is $\Sigma=\begin{pmatrix}1&1/\sqrt2\\1/\sqrt2&1\end{pmatrix}$, so its determinant is $1/2>0$ and the correlation is $1/\sqrt2$. Applying [F2]–[F3] at the second look gives the unique finite $c_2$ satisfying the displayed cumulative two-sided crossing equation. The event $\{|Z_1|\ge c_1\}$ and the continued-path event $\{|Z_1|<c_1,\ |Z_2|\ge c_2\}$ are disjoint and their union is the final rejection event. Hence the continued-path event has joint probability $\alpha-a_1$, and since $P_0(|Z_1|<c_1)=1-a_1>0$, its conditional probability given continuation is $(\alpha-a_1)/(1-a_1)$. The total rejection probability is $A_P(1)=\alpha$. [given, F1, F2, F3, step 1.1, step 1.2, algebra] ∎