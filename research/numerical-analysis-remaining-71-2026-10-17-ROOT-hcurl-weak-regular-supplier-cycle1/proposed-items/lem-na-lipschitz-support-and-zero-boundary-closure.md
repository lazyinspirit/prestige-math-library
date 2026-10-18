---
id: lem-na-lipschitz-support-and-zero-boundary-closure
kind: lemma
title: Whole-space support and the zero-boundary Sobolev closure
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps: [def-wkp-zero-as-a-sobolev-closure, def-na-zero-tangential-hcurl, thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity, thm-l-one-approximate-identities-converge-in-l-p, thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign, thm-acl-characterisation-of-w-one-p, def-axiom-of-choice, lem-test-function-cutoffs-and-euclidean-localization, lem-schwartz-cutoffs-from-the-standard-smooth-step, def-mollifier-family-generated-by-a-unit-mass-smooth-bump, prop-mollifier-families-are-l-one-approximate-identities, lem-mollification-commutes-with-weak-derivatives-in-the-interior, lem-euclidean-balls-have-positive-finite-lebesgue-measure, lem-affine-pullback-weak-derivatives-and-scaling, lem-weak-leibniz-rule-with-a-smooth-factor, thm-sobolev-spaces-are-banach-spaces, thm-riesz-fischer-completeness-of-l-p, thm-w-one-infinity-functions-have-lipschitz-representatives, thm-sobolev-chain-rule-for-globally-lipschitz-scalar-functions, lem-weak-product-rule-for-bounded-sobolev-functions, thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions, thm-tonelli-and-fubini-for-completed-product-measures, thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions, thm-extreme-value-metric, thm-heine-borel-rn, thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Ralf Hiptmair and Clemens Pechstein, Regular Decompositions of Vector Fields—Continuous, Discrete, and Structure-Preserving
      url: https://www.sam.math.ethz.ch/sam_reports/reports_final/reports2019/2019-18.pdf
      locator: Theorem 2, Step 4, and Remark 3; closure details are proved below.
---

## Statement

Assume AC. Let $\Omega\subset\mathbb R^3$ be bounded with Lipschitz boundary.

1. An $H^1(\mathbb R^3)$ class $F$ that vanishes almost everywhere outside $\overline\Omega$ restricts to $H_0^1(\Omega)$, and every $H_0^1(\Omega)$ class has an $H^1$ zero extension.
2. If $f\in H^1(\Omega)\cap C(\overline\Omega)$ and $f=0$ on $\partial\Omega$, then $f\in H_0^1(\Omega)$.
3. The zero extension $U$ of $u\in H_0(\operatorname{curl};\Omega)$ belongs to $H(\operatorname{curl};\mathbb R^3)$, with $\operatorname{curl}U$ equal to the zero extension of $\operatorname{curl}u$; both component norms are preserved. Also $\nabla H_0^1(\Omega)\subset H_0(\operatorname{curl};\Omega)$ and its elements have zero curl.

All statements apply componentwise to vector fields where appropriate.

## Facts & Assumptions

**Given:** AC, the closure definitions [[def-wkp-zero-as-a-sobolev-closure]] and [[def-na-zero-tangential-hcurl]], and weak derivatives.

[F1] Translation and mollification converge in $L^2$, and mollification commutes with distributional differentiation, by [[thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity]], [[thm-l-one-approximate-identities-converge-in-l-p]], and [[thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]]. Apply this to each derivative for $H^1$ convergence.

[F2] An $H^1$ function is absolutely continuous on almost every interior coordinate line, with its weak derivative as the line derivative, by [[thm-acl-characterisation-of-w-one-p]].

[F3] [[lem-test-function-cutoffs-and-euclidean-localization]] supplies the real Euclidean cutoffs and partitions used in step 1.1. On the compact boundary only finitely many partition supports occur. [[lem-schwartz-cutoffs-from-the-standard-smooth-step]] supplies fixed smooth one-dimensional cutoffs and their scaled derivative bounds. Normalize a nonnegative compact cutoff supported in $B_1(0)$, equal to one on a smaller ball, to unit mass; positivity and finiteness of that mass follow from [[lem-euclidean-balls-have-positive-finite-lebesgue-measure]]. The resulting family is [[def-mollifier-family-generated-by-a-unit-mass-smooth-bump]] and is an approximate identity by [[prop-mollifier-families-are-l-one-approximate-identities]]. Derivative commutation is [[lem-mollification-commutes-with-weak-derivatives-in-the-interior]]. Smooth localization uses [[lem-weak-leibniz-rule-with-a-smooth-factor]]. Bounded chart rotations use [[lem-affine-pullback-weak-derivatives-and-scaling]] at $d=3,r=1,p=2$.

[F4] For the Lipschitz height cutoff in step 1.2, first consider $h(x)=x_3-\phi(x')$ on a bounded convex ambient chart box. It is a real Lipschitz function, so the converse part of [[thm-w-one-infinity-functions-have-lipschitz-representatives]] gives $h\in W^{1,\infty}$ there with $\|Dh\|_\infty\le1+L$. Applying [[thm-sobolev-chain-rule-for-globally-lipschitz-scalar-functions]] to the bounded smooth scalar map $s\mapsto\eta(s/t)$ gives $\eta(h/t)\in W^{1,\infty}$, $0\le\eta(h/t)\le1$, and gradient bound $C(1+L)/t$. Restrict to the open chart part of $\Omega$; it has finite measure, so this bounded function and its bounded derivatives are in $L^2$. The localized $f$ of clause 2 is bounded, since its continuous representative is defined on the compact $\overline\Omega$. Thus [[lem-weak-product-rule-for-bounded-sobolev-functions]] applies at $p=2$ to $f$ and this height cutoff and gives exactly the product derivative used in step 1.2. No smooth-factor Leibniz rule is applied to a nonsmooth graph-height factor. All three suppliers assume AC, already stated here.

[F5] Endpoint integration on vertical lines in step 1.2 uses [[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]] after [F2]. Integrating its inequality in vertical height and base variables uses [[thm-tonelli-and-fubini-for-completed-product-measures]] and the one-dimensional $C^1$ translation case $s\mapsto\phi(x\prime)+s$ of [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]] for each fixed base point; no differentiable graph-flattening theorem is assumed. Completed-product integration is applied to Euclidean Lebesgue measure using [[thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures]], whose CC hypothesis follows from AC. The $H^1$ limits in step 1.1 use [[thm-sobolev-spaces-are-banach-spaces]] with $k=1,p=2$ on the whole space. The componentwise $L^2$ limits in step 2.1 use [[thm-riesz-fischer-completeness-of-l-p]] with $p=2$. The latter theorem assumes CC; AC implies that assumption and the CC/DC assumptions of the ACL and one-dimensional FTC suppliers.

## Proof

1.1 Localize $F$ by a finite smooth partition subordinate to an interior set and boundary graph charts. Rotate a chart so that $\Omega$ is $x_3>\phi(x')$. Its localized whole-space $H^1$ function is zero below this graph and has support away from the chart sides. Translate that localized function upward by $t e_3$. Its support now lies at least $t/\sqrt{1+L^2}$ from the graph, because $\phi$ is $L$-Lipschitz. Mollification with radius less than $t/(2(1+L))$ produces a smooth function compactly supported in $\Omega$. Translation and then sufficiently fine mollification converge in whole-space $H^1$ by [F1]. The localized interior term is mollified directly. Summing the finite approximations proves $F|_\Omega\in H_0^1$. Conversely a sequence of compactly supported smooth approximants in the closure definition has zero extensions Cauchy in $H^1(\mathbb R^3)$, with exactly the original norm differences. The limit is the zero extension of its $L^2$ limit and proves the converse. Lipschitz boundaries have three-dimensional measure zero, since every graph has zero vertical section measure, so support in $\overline\Omega$ causes no additional $L^2$ term. [F1, given, construct]

1.2 For clause 2 localize $f$ in a graph chart and write its vertical height as $s=x_3-\phi(x')>0$. The continuous boundary value is zero. For almost every $x'$, [F2] and continuity at the boundary give
$$|f(x',\phi(x')+s)|^2\le s\int_0^s|\partial_3f(x',\phi(x')+r)|^2\,dr.$$
To justify the endpoint, first integrate the ACL identity between $\varepsilon$ and $s$, then let $\varepsilon\downarrow0$; the $L^2$ derivative is integrable along almost every finite vertical segment, and continuity gives the endpoint limit. Choose a fixed smooth scalar $\eta$ that is zero on $(-\infty,1]$ and one on $[2,\infty)$, and multiply by $\eta(s/t)$. The construction, Sobolev chain rule and bounded-Sobolev product rule in [F3]–[F4] justify this nonsmooth-in-space factor and bound its weak gradient by $C(1+L)/t$. The norm of its extra gradient term is bounded by $C\|\nabla f\|_{L^2(0<s<2t)}$, using the displayed inequality and integration in $s,x'$, and hence tends to zero. The removed function and gradient terms also tend to zero by absolute continuity of their integrals. These cutoffs lie away from the boundary and can be mollified inside $\Omega$; compact chart supports handle their other sides. Sum the finite local approximations and the interior term. Thus $f$ is in the asserted closure. [F1, F2, step 1.1, construct, algebra]

2.1 Choose $u_j\in C_c^\infty(\Omega;\mathbb R^3)$ converging to $u$ in the H(curl) graph norm. Their zero extensions are Cauchy in the whole-space graph norm. The weak test identity passes to the $L^2$ limits of the fields and their curls by Cauchy–Schwarz. Those limits are respectively $U$ and the zero extension of $\operatorname{curl}u$, proving the asserted distributional identity and both norm equalities. For $q\in H_0^1$, take $q_j\in C_c^\infty(\Omega)$ converging in $H^1$; then $\nabla q_j\to\nabla q$ in $L^2$, their curls are zero by equality of smooth mixed derivatives, and $\nabla q_j\in C_c^\infty(\Omega;\mathbb R^3)$. The same weak-limit argument proves the last claim. AC licenses these closure approximation sequences and the cited analytic interfaces. [given, construct, algebra] ∎
