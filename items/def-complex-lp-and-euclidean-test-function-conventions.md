---
id: def-complex-lp-and-euclidean-test-function-conventions
kind: definition
title: "Complex Lp classes and Euclidean test-function conventions"
status: draft
origin: pipeline
landmark: false
deps: [def-l-p-space-as-a-quotient-by-null-functions, def-essential-supremum-with-respect-to-a-measure, def-l-one-of-a-measure, def-complex-conjugate-real-imaginary-part-and-modulus, def-c-c-and-c-c-infinity-on-rn, def-c-zero-on-rn, def-ck-and-multi-index-notation-in-several-variables, thm-arithmetic-and-lattice-operations-preserve-measurability, thm-threshold-characterisations-of-real-and-extended-real-measurability, def-dirac-measure, prop-dirac-measure-is-a-probability-measure, prop-countable-subsets-of-rn-are-lebesgue-null, lem-q-and-irrationals-dense-r, thm-heine-borel-rn, def-countable-choice, def-integrable-real-and-complex-functions-and-their-integrals]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
      locator: "\u00a710.1, pp.281\u2013283, formulas (10.1)\u2013(10.7); \u00a710.4, pp.294\u2013298. Pairing convention cross-checked against Laugesen Ch.1, pp.9\u201310. Teschl (10.5), p.282, conjugates the first variable; this scaffold reverses that convention as required by MT-16c."
---

## Definition

Let $(X,\mathcal A,\mu)$ be a measure space. A finite-valued function $f=u+iv:X\to\mathbb C$ is **measurable** when $u,v$ are real measurable functions. Write
$$N_p(f)=\left(\int_X|f|^p\,d\mu\right)^{1/p}\quad(1\le p<\infty),\qquad N_\infty(f)=\inf\{M\in[0,\infty]:|f|\le M\text{ a.e.}\}.$$
The infimum of the empty set of finite bounds is $\infty$; equivalently allow $M=\infty$. Define $\mathcal L^p(\mu;\mathbb C)=\{f:f\text{ measurable},N_p(f)<\infty\}$ and its **set quotient** $L^p(\mu;\mathbb C)=\mathcal L^p/\!\sim$, where $f\sim g$ means $f=g$ a.e. This extends [[def-l-p-space-as-a-quotient-by-null-functions]] and [[def-essential-supremum-with-respect-to-a-measure]]. Norm and vector-space assertions are established separately.

Here $|u+iv|=\sqrt{u^2+v^2}$ and $\overline{u+iv}=u-iv$ as in [[def-complex-conjugate-real-imaginary-part-and-modulus]]. These operations preserve measurability: $u^2+v^2$ is measurable by [[thm-arithmetic-and-lattice-operations-preserve-measurability]], and
$$\{|f|>a\}=\begin{cases}\{u^2+v^2>a^2\},&a\ge0,\\X,&a<0.\end{cases}$$
Thus [[thm-threshold-characterisations-of-real-and-extended-real-measurability]] applies. For $g=a+ib$, the formulas $fg=(ua-vb)+i(ub+va)$ and $\overline f=u-iv$ prove the remaining claims by real arithmetic closure. Nonnegative powers are measurable because $\{r^t>b\}=\{r>b^{1/t}\}$ for $r\ge0,t>0,b\ge0$, with the negative thresholds automatic.

A **finite simple** complex function has finite range and measurable fibers. Its **finite-measure support** condition is $\mu(\{s\ne0\})<\infty$. This concerns the nonzero set, not compactness of its closure. The zero function is an admissible finite simple function, including when $X=\varnothing$ or $\mu(X)=0$.

Integration is componentwise: for integrable $f=u+iv$,
$$\int f\,d\mu=\int u\,d\mu+i\int v\,d\mu.$$
This is the earlier convention of [[def-integrable-real-and-complex-functions-and-their-integrals]] and [[def-l-one-of-a-measure]]. The inequalities $|u|,|v|\le|f|\le|u|+|v|$ show that integrability of the modulus and integrability of both components are equivalent.

For $n\ge1$, define complex $C_c(\mathbb R^n)$, $C_0(\mathbb R^n)$ and $C_c^\infty(\mathbb R^n)$ by requiring both components to lie in the corresponding real spaces ([[def-c-c-and-c-c-infinity-on-rn]], [[def-c-zero-on-rn]]). Derivatives are componentwise, with the multi-index and all-ordered-partials conventions of [[def-ck-and-multi-index-notation-in-several-variables]]. The union of the two compact component supports is compact. A measurable complex $f$ is **locally integrable** for Lebesgue measure if $\int_K|f|<\infty$ on every compact $K$. The component inequalities give the equivalent componentwise condition. By [[thm-heine-borel-rn]], closed bounded balls are compact and each compact set is bounded. Hence compact integrability implies integrability on every bounded open ball by restriction from its closure; conversely each compact set is contained in a bounded open ball. These prove both directions of the ball formulation.

For a topological $X$ with Borel sets contained in $\mathcal A$, define
$$\operatorname{ess\,supp}_\mu f=X\setminus\bigcup\{U:U\text{ open and }f=0\text{ a.e. on }U\}.$$
Changing $f$ on one measurable null set preserves the zero-a.e. property on every $U$, since the union of that set and the old exceptional set is null. Thus essential support depends only on the a.e. class. Ordinary support means $\overline{\{f\ne0\}}$ and can change with the representative.

For the following illustration assume [[def-countable-choice]]. For $f=\mathbf1_{\mathbb Q}$ on $\mathbb R$, [[prop-countable-subsets-of-rn-are-lebesgue-null]] gives $f=0$ Lebesgue-a.e.; therefore $N_\infty(f)=0$ and $\operatorname{ess\,supp}f=\varnothing$, since $U=\mathbb R$ occurs in the union. But [[lem-q-and-irrationals-dense-r]] gives $\overline{\{f\ne0\}}=\mathbb R$. For the Dirac probability measure at zero ([[def-dirac-measure]], [[prop-dirac-measure-is-a-probability-measure]]), the bound $1$ holds everywhere and every $0\le M<1$ fails on $\{0\}$, of measure one. Thus $N_{\infty,\delta_0}(f)=1$.

The raw $L^2$ pairing convention is $\langle f,g\rangle=\int f\overline g$, linear in the first variable. Its integrability and class invariance are obligations of the later pairing items. **Bilinear tests** instead use $\int fs$, with no conjugation of $s$.
