---
id: lem-fd-velocity-tensor-is-bochner-integrable
kind: lemma
title: Quadratic velocity tensors are Bochner integrable
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps:
  - def-fd-random-velocity-sensor-law
  - def-countable-choice
  - thm-riesz-fischer-completeness-of-l-p
  - def-l-p-space-as-a-quotient-by-null-functions
  - def-strongly-measurable-banach-valued-function
  - thm-bochner-integrability-criterion
  - thm-holder-inequality-for-integrals
dependency_roles:
  def-fd-random-velocity-sensor-law: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-riesz-fischer-completeness-of-l-p: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-strongly-measurable-banach-valued-function: mathematical-premise
  thm-bochner-integrability-criterion: mathematical-premise
  thm-holder-inequality-for-integrals: mathematical-premise
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
axiom_use: Countable Choice is used only through Riesz-Fischer completeness of scalar L1 and L2, making the finite-component spaces H and K Banach for Bochner integration; no full AC or DC is used.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: Gerald Teschl, Topics in Real and Functional Analysis, Section 11.6
      url: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07%2110_23_44_AM.pdf
      locator: Lemmas 11.30–11.31, printed pp. 332–334.
    - title: Terence Tao, An Introduction to Measure Theory
      url: https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf
      locator: Section 1.7, Theorems 1.7.15 and 1.7.21, PDF pp. 200–206.
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Countable Choice. Let $(D,\mathcal D,\lambda)$ and $H=L^2(D,\lambda;\mathbb R^d)$ be as in the Definition, and let $K:=L^1(D,\lambda;\mathbb R^{d\times d})$ use the Frobenius norm on matrices. For $v,w\in H$, the pointwise tensor $(v\otimes w)_{ij}(x):=v_i(x)w_j(x)$ defines an element of $K$, independent of the representatives, and
$$\|v\otimes w\|_K\le \|v\|_H\|w\|_H.$$
For any probability space $(\Omega,\mathcal F,\mathbb P)$ and strongly measurable $U:\Omega\to H$ with $\mathbb E\|U\|_H^2<\infty$, both $U$ and $U\otimes U$ are strongly measurable Bochner-integrable maps into $H$ and $K$, respectively, and
$$\mathbb E\|U\otimes U\|_K=\mathbb E\|U\|_H^2<\infty.$$
## Statement references

[[def-fd-random-velocity-sensor-law]]

[[def-countable-choice]]

[[thm-riesz-fischer-completeness-of-l-p]]

[[def-l-p-space-as-a-quotient-by-null-functions]]

[[def-strongly-measurable-banach-valued-function]]

[[thm-bochner-integrability-criterion]]

[[thm-holder-inequality-for-integrals]]

## Facts & Assumptions

**Given:** The finite measure space and $H$ from the Definition; Countable Choice; a probability space $(\Omega,\mathcal F,\mathbb P)$; and a strongly measurable $H$-valued map $U$ with $\mathbb E\|U\|_H^2<\infty$.

[A1] Countable Choice, $\mathrm{AC}_\omega$, selects from a countable family of nonempty sets ([[def-countable-choice]]).

[F1] Elements of $H$ are almost-everywhere equivalence classes of measurable functions ([[def-l-p-space-as-a-quotient-by-null-functions]]).

[F2] Strong measurability supplies measurable simple maps converging in norm outside a measurable null set ([[def-strongly-measurable-banach-valued-function]]).

[F3] Holder's inequality bounds the integral of a product of two $L^2$ functions by the product of their $L^2$ norms ([[thm-holder-inequality-for-integrals]]).

[F4] Under $\mathrm{AC}_\omega$, scalar $L^p$ is complete for $p=1,2$ ([[thm-riesz-fischer-completeness-of-l-p]]).

[F5] A strongly measurable Banach-valued map is Bochner integrable when its norm has finite integral ([[thm-bochner-integrability-criterion]]).

## Proof

**Given:** The data and hypotheses in the Statement.

1.1 By [A1] and [F4], scalar $L^2(D,\lambda)$ and $L^1(D,\lambda)$ are complete. The $H$ norm is the finite $\ell^2$ product of the component $L^2$ norms. For a matrix field $A$, $\|A\|_K=\int_D|A|_F\,d\lambda$, and
$$\|A\|_K\le\sum_{i,j}\|A_{ij}\|_1\le d\|A\|_K.$$
Thus a Cauchy sequence in either $H$ or $K$ is Cauchy in each scalar component; the component limits exist by [F4], and the displayed norm formulas show convergence to their assembled vector or matrix field. Hence $H$ and $K$ are Banach spaces under [A1]. [A1, F1, F4, construct, algebra]

1.2 For representatives $v,w$, the Frobenius norm satisfies $|v(x)\otimes w(x)|_F=|v(x)|\,|w(x)|$. Holder's inequality [F3] therefore gives $\|v\otimes w\|_K=\int_D|v|\,|w|\,d\lambda\le\|v\|_H\|w\|_H<\infty$. Changing either representative on a null set changes the product only on a null set [F1], so the tensor is well-defined as a $K$-class. The same estimate applied to differences proves continuity of the bilinear tensor map. [F1, F3, given, algebra]

1.3 By [F2], choose simple $H$-valued maps $U_n$ with $U_n(\omega)\to U(\omega)$ in $H$ outside a measurable null set. Each $U_n\otimes U_n$ is a finite-valued measurable $K$-valued simple map. Step 1.2 gives
$$\|U_n\otimes U_n-U\otimes U\|_K\le \|U_n-U\|_H(\|U_n\|_H+\|U\|_H)\longrightarrow0$$
outside that null set, since norm convergence makes $(\|U_n\|_H)$ bounded there. Hence $U\otimes U$ is strongly measurable. [F2, step 1.2, construct, algebra]

2.1 Holder's inequality on the probability space gives $\mathbb E\|U\|_H\le(\mathbb E\|U\|_H^2)^{1/2}<\infty$. Together with the given strong measurability, [F5] makes $U$ Bochner integrable. The identity $|v\otimes v|_F=|v|^2$ gives $\|U(\omega)\otimes U(\omega)\|_K=\|U(\omega)\|_H^2$ for almost every $\omega$, so its norm is integrable as well; [F5] and step 1.3 make $U\otimes U$ Bochner integrable and yield the displayed norm identity. [A1, F3, F5, step 1.3, given, algebra] ∎
