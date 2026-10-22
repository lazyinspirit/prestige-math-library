---
id: thm-ip-hellinger-data-stability
kind: theorem
title: Hellinger stability of function-space posteriors under data perturbations
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - lem-ip-prior-support-has-full-measure
  - thm-ip-function-space-posterior-propriety
  - def-ip-misfit-evidence-and-posterior-law
  - thm-sections-of-product-measurable-functions-are-measurable
  - def-ip-prior-on-a-forward-domain
  - def-probability-measure
  - def-measure
  - prop-measure-monotonicity
  - def-banach-space
  - def-norm-and-normed-space
  - lem-metric-reverse-triangle
  - def-separable-space
  - def-borel-sigma-algebra
  - thm-composition-with-borel-functions-preserves-measurability
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - def-measurable-function-between-measurable-spaces
  - def-continuous-map-top
  - def-extended-reals
  - def-borel-sigma-algebra-on-the-extended-real-line
  - def-hellinger-distance-for-dominated-laws
  - thm-hellinger-tv-comparison-under-library-convention
  - def-total-variation-distance-for-probability-laws
  - def-axiom-of-choice
  - lem-mean-value-theorem-on-closed-interval
  - thm-derivative-of-exponential
  - thm-chain-rule
  - thm-exponential-is-strictly-increasing
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - cor-additivity-of-the-nonnegative-lebesgue-integral
  - def-calligraphic-l-p-on-a-measure-space
  - thm-minkowski-inequality-for-integrals
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
axiom_use: "The Hellinger estimate and pointwise posterior construction are choice-free because the densities relative to the prior are explicit. A separate optional total-variation consequence assumes AC only through the library's generic density/TV comparison convention; that axiom is used only in the final comparison step."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "M. Dashti and A. M. Stuart, The Bayesian Approach to Inverse Problems (full lecture notes, arXiv:1302.6989)"
      url: "https://arxiv.org/pdf/1302.6989"
      locator: "§4.1, Theorems 4.3 and 4.5 and their proofs (PDF pp. 36–39). The local uniform lower evidence bound is proved by a support-point neighborhood; the printed bounded-noncompact-set supremum shortcut is not used. This source uses a 1/sqrt(2) Hellinger normalization; the item uses root-L2 and recomputes constants."
    - title: "J. Latz, On the Well-posedness of Bayesian Inverse Problems, SIAM/ASA Journal on Uncertainty Quantification 8 (2020)"
      url: "https://arxiv.org/pdf/1902.10257"
      locator: "§3.1, Example 3.1; §3.4, Assumptions 3.5, Theorem 3.6 and Lemma 3.7 with full proof (PDF pp. 7–12 and 24–25). The source proves Hellinger continuity under dominated-likelihood hypotheses, not the stronger IP-17 Lipschitz modulus; it also uses a 1/sqrt(2) Hellinger normalization, so constants are recomputed locally."
---

## Statement

Let $X,Y$ be separable real Banach spaces, let $D\subseteq X$ be Borel, and let $\mu_0$ be a Borel probability measure on $X$ with $\mu_0(D)=1$. Assume there is a bounded Borel subset $E\subseteq D$ with $\mu_0(E)>0$. Give $D$ the relative norm topology and trace Borel sigma-algebra $\mathcal B(D)=\{D\cap A:A\in\mathcal B(X)\}$. Let $R>0$ and let $\Phi:D\times Y\to\mathbb R$ be jointly continuous and measurable from $(D\times Y,\mathcal B(D)\otimes\mathcal B(Y))$ to the Borel sigma-algebra of the extended real line after including its finite real values there. Suppose $M_1,M_2:[0,\infty)^2\to[0,\infty)$ are Borel and nondecreasing in each argument, and for all $u\in D$ and $y,y'\in B_Y(0,R):=\{v\in Y:\|v\|_Y\le R\}$,
$$\Phi(u;y)\ge -M_1(R,\|u\|_X),\qquad |\Phi(u;y)-\Phi(u;y')|\le M_2(R,\|u\|_X)\|y-y'\|_Y.$$
Assume
$$J_R:=\int_D e^{M_1(R,\|u\|_X)}\bigl(1+M_2(R,\|u\|_X)^2\bigr)\,\mu_0(du)<\infty.$$
For each fixed datum $y\in B_Y(0,R)$, define the evidence and posterior by
$$Z(y):=\int_D e^{-\Phi(u;y)}\,\mu_0(du),\qquad \Pi^y(du):=Z(y)^{-1}e^{-\Phi(u;y)}\,\mu_0(du).$$
Then there is $z_R>0$ such that $z_R\le Z(y)\le J_R$ for every $y\in B_Y(0,R)$, and, with the library root-L2 Hellinger distance $h$,
$$h(\Pi^y,\Pi^{y'})\le C_R\|y-y'\|_Y,\qquad C_R:=\frac{\sqrt{J_R}}{2\sqrt{z_R}}+\frac{J_R}{2z_R},$$
for all $y,y'\in B_Y(0,R)$. This is a pointwise fixed-data statement; no observation law or conditional-law version is asserted. In a separate branch, if AC is assumed for the library density/total-variation comparison convention, then
$$\|\Pi^y-\Pi^{y'}\|_{\mathrm{TV}}\le h(\Pi^y,\Pi^{y'})\le C_R\|y-y'\|_Y,$$
where $\|P-Q\|_{\mathrm{TV}}:=\sup_{A\in\mathcal B(D)}|P(A)-Q(A)|$.

## Statement references

[[def-ip-prior-on-a-forward-domain|A prior is a Borel probability with full mass on its declared forward domain.]]

[[def-banach-space|A Banach space is complete for its norm metric.]]

[[def-separable-space|A separable space has an at most countable dense subset.]]

[[def-norm-and-normed-space|A norm induces the metric used on the parameter and data spaces.]]

[[def-borel-sigma-algebra|The Borel sigma-algebra is generated by the open sets.]]

[[def-probability-measure|A probability measure has total mass one.]]

[[def-continuous-map-top|Continuity means inverse images of open sets are open.]]

[[def-product-sigma-algebra-and-finite-product-sigma-algebras|Joint measurability is with respect to the product sigma-algebra.]]

[[def-measurable-function-between-measurable-spaces|A map is measurable when inverse images of measurable sets are measurable.]]

[[def-extended-reals|The extended real line adds two infinite endpoints to the real line.]]

[[def-borel-sigma-algebra-on-the-extended-real-line|The extended-real Borel sigma-algebra uses the order topology and restricts to the real Borel sets.]]

[[thm-sections-of-product-measurable-functions-are-measurable|A product-measurable function has measurable fixed-coordinate sections.]]

[[def-ip-misfit-evidence-and-posterior-law|Fixed-data evidence and the normalized potential update are defined fiberwise when evidence is positive and finite.]]

[[thm-ip-function-space-posterior-propriety|A common integrable lower envelope and continuity at support points imply positive finite evidence.]]

[[lem-ip-prior-support-has-full-measure|The support of a Borel probability on a separable Banach space is Borel and has full measure.]]

[[def-hellinger-distance-for-dominated-laws|The library Hellinger distance is the root-L2 norm of the difference of square-root densities.]]

[[thm-hellinger-tv-comparison-under-library-convention|Under AC, library total variation is at most the library root-L2 Hellinger distance.]]

[[thm-arithmetic-and-lattice-operations-preserve-measurability|Arithmetic and absolute-value operations preserve measurability of real-valued functions.]]

[[cor-additivity-of-the-nonnegative-lebesgue-integral|The nonnegative integral is additive on sums of nonnegative measurable functions.]]

[[def-calligraphic-l-p-on-a-measure-space|The root integral of a square defines the norm for square-integrable functions.]]

[[thm-minkowski-inequality-for-integrals|Minkowski’s inequality gives the triangle inequality for square-integrable functions.]]

[Dashti and Stuart, full lecture notes, §4.1](https://arxiv.org/pdf/1302.6989)

[Latz, full paper, §§3.1 and 3.4](https://arxiv.org/pdf/1902.10257)

## Facts & Assumptions

**Given:** The separable Banach spaces, Borel full-measure prior domain, positive prior mass on a bounded subset, product-Borel measurability and joint continuity, common lower envelope, data-Lipschitz bound, and weighted integrability in the Statement.

[F1] A prior on a forward domain is a Borel probability $\mu_0$ on $X$ with $\mu_0(D)=1$. Product measurability as an extended-real-valued function makes each fixed-data potential section measurable; the evidence and posterior are $Z(y)=\int_D e^{-\Phi(u;y)}\,d\mu_0$ and $d\Pi^y/d\mu_0=e^{-\Phi(u;y)}/Z(y)$ when $0<Z(y)<\infty$. [[def-ip-prior-on-a-forward-domain]], [[def-probability-measure]], [[def-borel-sigma-algebra]], [[def-ip-misfit-evidence-and-posterior-law]], [[def-product-sigma-algebra-and-finite-product-sigma-algebras]], [[def-measurable-function-between-measurable-spaces]], [[def-extended-reals]], [[def-borel-sigma-algebra-on-the-extended-real-line]], [[thm-sections-of-product-measurable-functions-are-measurable]]

[F2] A continuous section on $D$ is continuous in the relative topology; for a finite continuous potential with a common integrable lower envelope, the evidence is finite and strictly positive on every asserted data fiber. [[def-continuous-map-top]], [[thm-ip-function-space-posterior-propriety]]

[F3] The support of a Borel probability on a separable Banach space is Borel and has full measure; here Banach means complete for the norm metric and separability supplies a countable dense set. [[lem-ip-prior-support-has-full-measure]], [[def-banach-space]], [[def-separable-space]], [[def-borel-sigma-algebra]]

[F4] With the explicit posterior densities $p_y=e^{-\Phi(\cdot;y)}/Z(y)$ relative to $\mu_0$, $h(\Pi^y,\Pi^{y'})=\|\sqrt{p_y}-\sqrt{p_{y'}}\|_{L^2(\mu_0)}$. The displayed definition requires no further density choice when these representatives are supplied. [[def-hellinger-distance-for-dominated-laws]]

[A1] Assume the Axiom of Choice only for the optional generic density/TV comparison branch. [[def-axiom-of-choice]]

[F5] Under [A1], for two probability laws with a common sigma-finite dominator, $\|P-Q\|_{\mathrm{TV}}=\sup_A|P(A)-Q(A)|\le h(P,Q)$ in the library conventions. [[thm-hellinger-tv-comparison-under-library-convention]], [[def-total-variation-distance-for-probability-laws]]

[F6] The derivative of $t\mapsto e^{-t/2}$ is $-\tfrac12e^{-t/2}$ and that of $t\mapsto e^{-t}$ is $-e^{-t}$; the real mean value theorem bounds an increment by the supremum of the derivative magnitude times the interval length. [[thm-derivative-of-exponential]], [[thm-chain-rule]], [[lem-mean-value-theorem-on-closed-interval]]

[F7] The nonnegative integral is monotone and positively homogeneous. [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]

[F8] For fixed $R$, the map $s\mapsto M_i(R,s)$ is Borel: the slice map $s\mapsto(R,s)$ is continuous in the usual product topology, and preimages under a continuous map preserve the sigma-algebra generated by open sets. The norm map and the real exponential are continuous, so composing these maps gives measurable radius integrands. [[def-norm-and-normed-space]], [[lem-metric-reverse-triangle]], [[thm-exponential-is-strictly-increasing]], [[thm-composition-with-borel-functions-preserves-measurability]]

[F9] Sums, differences, and absolute values of measurable real-valued functions are measurable. [[thm-arithmetic-and-lattice-operations-preserve-measurability]]

[F10] The nonnegative integral is additive, monotone, and positively homogeneous. [[cor-additivity-of-the-nonnegative-lebesgue-integral]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]

[F11] For square-integrable real functions, the root integral of the square is the $L^2$ norm and satisfies the triangle inequality. [[def-calligraphic-l-p-on-a-measure-space]], [[thm-minkowski-inequality-for-integrals]]

[F12] If a Borel set $A$ has $\mu_0(A)=1$, then every Borel $B$ satisfies $\mu_0(B\cap A)=\mu_0(B)$: the complement of $A$ is null by countable additivity and $\mu_0(B\setminus A)\le\mu_0(X\setminus A)$ by monotonicity. [[def-probability-measure]], [[def-measure]], [[prop-measure-monotonicity]]

## Proof

**Given:** The hypotheses and fixed-data convention in the Statement.

1.1 The fixed-radius sections $s\mapsto M_i(R,s)$ are Borel and nondecreasing by [F8] and the hypotheses. Since $M_2\ge0$, $e^{M_1(R,\|u\|_X)}\le e^{M_1(R,\|u\|_X)}(1+M_2(R,\|u\|_X)^2)$, so [F7] gives $\int_D e^{M_1(R,\|u\|_X)}\,d\mu_0\le J_R<\infty$. Thus the hypotheses of [F2] hold for every $y\in B_Y(0,R)$, and all stated pointwise updates are probability measures with $0<Z(y)<\infty$. [F1, F2, F7, F8, F9, given, algebra]

1.2 By the Statement choose a bounded Borel set $E\subseteq D$ with $\mu_0(E)>0$, and choose $K<\infty$ with $\|u\|_X\le K$ for all $u\in E$. By [F3], the support has full measure; applying [F12] to $E$ gives $\mu_0(E\cap\operatorname{supp}\mu_0)=\mu_0(E)>0$, so choose $u_*\in E\cap\operatorname{supp}\mu_0$. [F1, F3, F12, given, choose]

1.3 Fix $u\in D$ and $y,y'\in B_Y(0,R)$, and write $a=\Phi(u;y)$, $b=\Phi(u;y')$, and $\delta=\|y-y'\|_Y$. Both $a,b\ge-M_1(R,\|u\|_X)$, so every real between them has the same lower bound. By [F6] and the data-Lipschitz hypothesis, $|e^{-a/2}-e^{-b/2}|\le\tfrac12 e^{M_1(R,\|u\|_X)/2}|a-b|\le\tfrac12 e^{M_1(R,\|u\|_X)/2}M_2(R,\|u\|_X)\delta.$ Squaring and integrating, using [F7], gives $\|e^{-\Phi(\cdot;y)/2}-e^{-\Phi(\cdot;y')/2}\|_{L^2(\mu_0)}\le\tfrac12\sqrt{J_R}\,\delta$ by the definition of the $L^2$ norm [F11]. [F6, F7, F8, F9, F10, F11, given, algebra]

1.4 By [F6], the same lower envelope bounds the derivative of $t\mapsto e^{-t}$ between $a$ and $b$ by $e^{M_1(R,\|u\|_X)}$. Hence $|Z(y)-Z(y')|\le\delta\int_D e^{M_1(R,\|u\|_X)}M_2(R,\|u\|_X)\,d\mu_0\le J_R\delta,$ where $M_2\le1+M_2^2$ and [F7] was used in the last inequality. For the first inequality, monotonicity and additivity apply to the pointwise bounds $e^{-\Phi(u;y)}\le e^{-\Phi(u;y')}+|e^{-\Phi(u;y)}-e^{-\Phi(u;y')}|$ and its reverse. [F6, F7, F8, F9, F10, given, algebra]

2.1 Continuity of $u\mapsto\Phi(u;0)$ at $u_*$ gives $\rho>0$ such that $\Phi(u;0)\le\Phi(u_*;0)+1$ for $u\in D\cap B_X(u_*,\rho)$. The support property gives $\mu_0(B_X(u_*,\rho))>0$, and [F12] with $\mu_0(D)=1$ gives $m_*:=\mu_0(D\cap B_X(u_*,\rho))=\mu_0(B_X(u_*,\rho))>0$. Every such $u$ satisfies $\|u\|_X<K+\rho$. For any $y\in B_Y(0,R)$, the data-Lipschitz bound between $y$ and $0$, followed by monotonicity of $M_2$ in its norm argument, gives $\Phi(u;y)\le\Phi(u_*;0)+1+M_2(R,K+\rho)R.$ By monotonicity and positive homogeneity of the nonnegative integral [F7], this yields $Z(y)\ge m_*\exp[-\Phi(u_*;0)-1-M_2(R,K+\rho)R]=:z_R>0$, uniformly on the data ball. [F1, F3, F7, F12, given, step 1.2, choose, construct, algebra]

3.1 The lower envelope gives $e^{-\Phi(u;y)}\le e^{M_1(R,\|u\|_X)}$, and [F7] therefore yields $Z(y)\le\int_D e^{M_1(R,\|u\|_X)}d\mu_0\le J_R$. Together with step 2.1 this proves the asserted uniform normalizer bounds. [F7, step 1.1, step 2.1, given, algebra]

3.2 Put $a_y=e^{-\Phi(\cdot;y)/2}$ and $q_y=a_y/\sqrt{Z(y)}$, so [F4] gives $h(\Pi^y,\Pi^{y'})=\|q_y-q_{y'}\|_2$. Add and subtract $a_{y'}/\sqrt{Z(y)}$ and use the triangle inequality in $L^2$ to obtain $\|q_y-q_{y'}\|_2\le\frac{\|a_y-a_{y'}\|_2}{\sqrt{Z(y)}}+\frac{|\sqrt{Z(y')}-\sqrt{Z(y)}|}{\sqrt{Z(y)}}.$ The first term is at most $\sqrt{J_R}\delta/(2\sqrt{z_R})$ by steps 2.1 and 1.3. Since $\|a_{y'}\|_2^2=\int_D e^{-\Phi(u;y')}\,d\mu_0=Z(y')$, the second term equals $|Z(y')-Z(y)|/[\sqrt{Z(y)}(\sqrt{Z(y')}+\sqrt{Z(y)})]$, hence is at most $J_R\delta/(2z_R)$ by steps 2.1 and 1.4. This proves the stated $C_R$ bound. [F4, F11, step 2.1, step 1.3, step 1.4, given, algebra]

4.1 Under the separate assumption [A1], apply [F5] to the two explicit posterior densities relative to the common probability measure $\mu_0$. Thus $\|\Pi^y-\Pi^{y'}\|_{\mathrm{TV}}\le h(\Pi^y,\Pi^{y'})$, and step 3.2 gives the optional TV estimate without adding an axiom to the Hellinger estimate. [A1, F5, step 3.2, given] ∎
