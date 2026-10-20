---
id: def-bayes-predictor-and-excess-risk
kind: definition
title: "Bayes predictors and excess risk"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-supervised-learning-problem
  - def-population-and-empirical-risk
  - def-standard-borel-space
  - def-regular-conditional-distribution
  - def-axiom-of-choice
  - thm-existence-of-regular-conditional-distributions-for-standard-borel-targets
  - thm-measurability-of-integration-against-a-kernel
  - thm-conditional-bayes-rule-minimizes-population-risk
  - def-measurable-function-between-measurable-spaces
  - def-extended-real-valued-measurable-function
  - prop-closure-properties-of-measurable-functions-used-by-the-integral
  - thm-dynkin-pi-lambda
  - thm-probability-law-and-distribution-function-correspondence
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Mehryar Mohri, Afshin Rostamizadeh, and Ameet Talwalkar, Foundations of Machine Learning, 2nd ed., Chapter 2 §2.4.2"
      url: "https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1"
    - title: "Shai Shalev-Shwartz and Shai Ben-David, Understanding Machine Learning: From Theory to Algorithms, Chapter 3 §3.2"
      url: "https://www.inf.u-szeged.hu/~turan/ML-Konyv.pdf"
    - title: "Olav Kallenberg, Foundations of Modern Probability, 2nd ed., Theorem 6.3 (conditional distribution)"
      url: "https://djvu.online/file/t4FlvxuKFFZGW"
---

## Definition

Let $\mathcal M$ be the class of all measurable predictors from $\mathsf X$ to $\mathsf A$. The **class Bayes risk** is $R_P^*(\mathcal F):=\inf_{f\in\mathcal F}R_P(f)$, and the **unrestricted Bayes risk** is $R_P^*:=\inf_{g\in\mathcal M}R_P(g)$. A class Bayes predictor is a member of $\mathcal F$ attaining the first infimum; an unrestricted Bayes predictor, also called a Bayes predictor, is a member of $\mathcal M$ attaining the second. No attainment is asserted. If an infimum is $+\infty$, every member of its nonempty class has infinite risk and attains that extended infimum, but no finite excess risk results.

For $f\in\mathcal F$ with both terms finite, its **class excess risk** is $R_P(f)-R_P^*(\mathcal F)$. For a measurable predictor $g\in\mathcal M$ with both terms finite, its **unrestricted excess risk** is $R_P(g)-R_P^*$. These differences are left undefined if either risk is infinite.

Write $P_X(C):=P(C\times\mathsf Y)$ for the instance marginal. If a regular conditional label law $K(x,dy)$ given $x$ is supplied, its **conditional risk** is $q(x,a):=\int_{\mathsf Y}\ell(a,y)K(x,dy)$. This function is measurable when the loss is product-measurable. A **conditional Bayes rule** is a measurable predictor that attains $\inf_{a\in\mathsf A}q(x,a)$ on one measurable set of full $P_X$-measure. Such a kernel exists under AC whenever the label space is standard Borel, even if the instance space is an arbitrary measurable space; if the label space is an arbitrary measurable space, no conditional law or measurable minimizer is asserted. When both instance and label spaces are standard Borel and AC holds, the conditional Bayes theorem shows that any such rule is an unrestricted Bayes predictor.

## Definition references

[[def-supervised-learning-problem]]: fixes the measurable instance, label and action spaces, joint law, predictor class and loss.

[[def-population-and-empirical-risk]]: defines $R_P(f)$ as the extended nonnegative population risk.

[[def-standard-borel-space]]: a standard Borel space is measurably isomorphic to a Polish space.

[[def-regular-conditional-distribution]]: a regular conditional distribution is an everywhere probability kernel satisfying the conditional-event integral identities.

[[def-axiom-of-choice]]: AC asserts that every family of nonempty sets has a choice function.

[[thm-existence-of-regular-conditional-distributions-for-standard-borel-targets]]: under AC, a standard-Borel target has a regular conditional distribution given any sub-sigma-algebra.

[[thm-measurability-of-integration-against-a-kernel]]: integration of a nonnegative product-measurable function against a probability kernel is measurable.

[[thm-conditional-bayes-rule-minimizes-population-risk]]: under standard-Borel and AC hypotheses, a measurable conditional minimizer is globally risk-minimizing.

[[def-measurable-function-between-measurable-spaces]]: measurability is defined by measurable preimages.

[[def-extended-real-valued-measurable-function]]: strict-superlevel preimages characterize extended-real measurability.

[[prop-closure-properties-of-measurable-functions-used-by-the-integral]]: countable infima and increasing limits preserve measurability.

[[thm-dynkin-pi-lambda]]: kernel measurability on half-lines extends to all Borel sets.

[[thm-probability-law-and-distribution-function-correspondence]]: a CDF determines a unique Borel probability measure.

[[def-product-sigma-algebra-and-finite-product-sigma-algebras]]: makes the coordinate maps on the joint measurable space measurable.

[Kallenberg, *Foundations of Modern Probability*, 2nd ed., Theorem 6.3](https://djvu.online/file/t4FlvxuKFFZGW): a Borel target admits a conditional-distribution kernel from any measurable conditioning space.

## Well-definedness

To justify the conditional-kernel existence claim without assuming that the instance space is standard Borel, work on $\Omega=\mathsf X\times\mathsf Y$ with law $P$, write $X(x,y)=x$ and $Y(x,y)=y$, and put $\mathcal G=\sigma(X)$. By [[thm-existence-of-regular-conditional-distributions-for-standard-borel-targets]], there is an everywhere probability kernel $L(\omega,dy)$ satisfying the conditional-event identities for the label coordinate given $\mathcal G$; the same theorem supplies a bimeasurable coding $c:\mathsf Y\to B$ onto a Borel set $B\subseteq[0,1]$. For each rational $q$, let $h_q(\omega)=L(\omega,c^{-1}(B\cap(-\infty,q]))$. Each $h_q$ is $\mathcal G$-measurable. Since $\mathcal G=\{X^{-1}(D):D\in\Sigma_X\}$ for an arbitrary measurable map $X$, choose $D_{q,r}\in\Sigma_X$ with $X^{-1}(D_{q,r})=\{h_q\le r\}$ for each rational $r\in[0,1]$, setting $D_{q,1}=\mathsf X$. These are countably many choices, available under AC. The functions $u_q(x)=\inf\{r\in\mathbb Q\cap[0,1]:x\in D_{q,r}\}$ are measurable because $\{u_q<a\}=\bigcup_{r\in\mathbb Q\cap[0,1],\ r<a}D_{q,r}$ for each real $a$, and they satisfy $u_q(X(\omega))=h_q(\omega)$ for every $\omega$.

On the range of $X$, the values $u_q$ are the rational CDF values of the pushforward of $L(\omega,\cdot)$ by $c$. Let $E_0$ consist of those $x$ for which $u_p(x)\le u_q(x)$ whenever rational $p<q$, $\lim_{n\to\infty}u_{-n}(x)=0$, $\lim_{n\to\infty}u_n(x)=1$, and $u_q(x)=\inf_{r\in\mathbb Q,\ r>q}u_r(x)$ for every rational $q$. These are countably many measurable conditions by [[prop-closure-properties-of-measurable-functions-used-by-the-integral]], so $E_0$ is measurable and contains $X(\Omega)$. For $x\in E_0$, the function $F_x(t)=\inf_{q\in\mathbb Q,\ q>t}u_q(x)$ is a CDF and satisfies $F_x(q)=u_q(x)$ at rational $q$ by the right-limit condition; [[thm-probability-law-and-distribution-function-correspondence]] gives its unique Borel probability $\nu_x$. For $x\notin E_0$, take $\nu_x=\delta_0$. The evaluations $x\mapsto\nu_x(( -\infty,t])$ are measurable by [[prop-closure-properties-of-measurable-functions-used-by-the-integral]], and a Dynkin-system argument using [[thm-dynkin-pi-lambda]] extends measurability to every Borel set, so $x\mapsto\nu_x$ is a probability kernel. For each $\omega$, uniqueness of the measure with the given rational CDF values gives $\nu_{X(\omega)}=c_\#L(\omega,\cdot)$, hence $\nu_{X(\omega)}(B)=1$. Thus $E=\{x:\nu_x(B)=1\}$ is measurable and contains $X(\Omega)$. For $x\in E$ define $K(x,A)=\nu_x(c[A])$, the pullback to $\mathsf Y$ of $\nu_x$ restricted to $B$ through $c$, and for $x\notin E$ use the Dirac probability at a fixed $y_0\in\mathsf Y$; bimeasurability of $c$ makes every evaluation measurable and every section a probability measure. For all $\omega$ and $A\in\Sigma_Y$, $K(X(\omega),A)=L(\omega,A)$, so $K$ inherits the conditional-event identities from $L$. This is the arbitrary-conditioning-space case of Kallenberg's Theorem 6.3; the construction above also gives the factorization explicitly.
