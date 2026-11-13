---
id: lem-author-8960795edce1-spatial-lq-mixed-norms
kind: lemma
domain: mathematics
title: Spatial Lq classes satisfy the scalar mixed-norm hypotheses
status: draft
deps:
  - lem-author-8960795edce1-scalar-fatou-retarded-transfer
  - math:thm-riesz-fischer-completeness-of-l-p
  - math:thm-holder-inequality-for-integrals
  - math:thm-minkowski-integral-inequality
  - math:thm-fatou-lemma
  - math:thm-tonelli-theorem-for-sigma-finite-product-spaces
  - math:prop-essential-supremum-is-attained-as-the-least-essential-bound
  - math:def-countable-choice
  - math:def-finite-sigma-finite-and-semifinite-measures
  - math:def-l-p-space-as-a-quotient-by-null-functions
  - math:def-banach-space
  - math:def-essential-supremum-with-respect-to-a-measure
dependency_roles:
  lem-author-8960795edce1-scalar-fatou-retarded-transfer: mathematical-premise
  math:thm-riesz-fischer-completeness-of-l-p: mathematical-premise
  math:thm-holder-inequality-for-integrals: mathematical-premise
  math:thm-minkowski-integral-inequality: mathematical-premise
  math:thm-fatou-lemma: mathematical-premise
  math:thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  math:prop-essential-supremum-is-attained-as-the-least-essential-bound: mathematical-premise
  math:def-countable-choice: mathematical-premise
  math:def-finite-sigma-finite-and-semifinite-measures: mathematical-premise
  math:def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  math:def-banach-space: mathematical-premise
  math:def-essential-supremum-with-respect-to-a-measure: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 1
---

## Statement

Assume Countable Choice. Let $(X,\mathcal A,\mu)$ be a sigma-finite measure space and let $1\le q\le\infty$. The scalar field may be $\mathbb R$ or $\mathbb C$. Here $L^q(X)$ consists of measurable scalar functions with finite displayed norm, modulo equality almost everywhere, with norm $\|[f]\|_q=(\int_X|f|^q\,d\mu)^{1/q}$ for finite $q$ and $\|[f]\|_\infty=\operatorname*{ess\,sup}_X|f|$ for $q=\infty$. These norms are understood as infinity for measurable scalar classes outside $L^q$. The real quotient convention extends to complex functions using their real and imaginary parts.

Then $Y=L^q(X)$ is Banach and satisfies all the scalar Banach-function hypotheses of the scalar Fatou retarded-transfer lemma: the lattice property, local integrability on a finite-measure exhaustion, sequential lower-limit inequality, measurable section norms, and the spatial integral-triangle inequality. Local integrability follows from scalar Holder, the integral-triangle inequality from finite-exponent Minkowski or the essential-bound property, and sequential lower limits and measurable section norms from scalar Fatou and Tonelli. The section parameters are time or time pairs with their sigma-finite Lebesgue measures, as in that transfer lemma.

In particular the mixed class $L^p_tL^\infty_x$ here, for $1\le p<\infty$, requires only a jointly measurable scalar representative and its measurable scalar essential-supremum norm; it does not require strong measurability with values in $L^\infty(X)$. Its norm is $(\int\|G(t,\cdot)\|_\infty^p\,dt)^{1/p}$, with representatives identified almost everywhere on the time-space product.

## Statement references

[[lem-author-8960795edce1-scalar-fatou-retarded-transfer]]

[[math:thm-riesz-fischer-completeness-of-l-p]]

[[math:thm-holder-inequality-for-integrals]]

[[math:thm-minkowski-integral-inequality]]

[[math:thm-fatou-lemma]]

[[math:thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[[math:prop-essential-supremum-is-attained-as-the-least-essential-bound]]

[[math:def-countable-choice]]

[[math:def-finite-sigma-finite-and-semifinite-measures]]

[[math:def-l-p-space-as-a-quotient-by-null-functions]]

[[math:def-banach-space]]

[[math:def-essential-supremum-with-respect-to-a-measure]]

## Facts & Assumptions

[F1] Real scalar $L^q$ completeness, under Countable Choice, is [[math:thm-riesz-fischer-completeness-of-l-p]]. Scalar Holder and finite-exponent Minkowski are [[math:thm-holder-inequality-for-integrals]] and [[math:thm-minkowski-integral-inequality]]. Holder will be applied to the real nonnegative function $|y|$ and an indicator.

[F2] Scalar Fatou and Tonelli are [[math:thm-fatou-lemma]] and [[math:thm-tonelli-theorem-for-sigma-finite-product-spaces]].

[F3] The essential supremum is an almost-everywhere bound by [[math:prop-essential-supremum-is-attained-as-the-least-essential-bound]], applied to the real nonnegative modulus when the scalar is complex.

[F4] We assume [[math:def-countable-choice]]. Sigma-finiteness means the countable finite-measure covering in [[math:def-finite-sigma-finite-and-semifinite-measures]]; taking successive finite unions gives an increasing exhaustion. Almost-everywhere classes use [[math:def-l-p-space-as-a-quotient-by-null-functions]], with the complex extension and norms defined inline in the Statement. Countable Choice is used in the completeness input [F1] to select countably many measurable representatives.

[F5] A Banach space is a real or complex normed space complete for its norm metric, as in [[math:def-banach-space]]. The essential-supremum norm is the infimum of the nonnegative almost-everywhere bounds in [[math:def-essential-supremum-with-respect-to-a-measure]], applied here to the real nonnegative modulus of the scalar function. These definitions specify the Banach conclusion and every use of the spatial essential-supremum norm.

## Proof

**Given:** Countable Choice, the sigma-finite space, an increasing finite-measure exhaustion $A_n\uparrow X$, the scalar quotient convention above, and exponent $1\le q\le\infty$. We verify precisely the scalar Banach-function hypotheses specified in [[lem-author-8960795edce1-scalar-fatou-retarded-transfer]].

**Goal:** Verify the scalar Banach-function hypotheses, including the spatial essential-supremum endpoint.

1.1 The displayed functionals are unchanged by almost-everywhere changes of representatives; positivity and homogeneity follow from the corresponding modulus properties. For finite $q$, the triangle inequality follows by applying Minkowski to the two-point counting parameter space; for $q=\infty$ it follows from the essential bounds for the two summands. Real completeness is [F1], using the Countable Choice assumed in [F4]. For complex completeness, a Cauchy sequence $(f_j)$ has Cauchy real and imaginary parts because each component norm is at most the complex norm. Apply real completeness to obtain limits $u$ and $v$ in real $L^q$. The triangle inequality gives $\|f_j-(u+iv)\|_q\le\|\operatorname{Re}f_j-u\|_q+\|\operatorname{Im}f_j-v\|_q\to0$. Thus the complex quotient is Banach as well. [F1, F3, F4, F5, given]

1.2 The lattice property follows directly from monotonicity of the integral or of the essential supremum. For a finite positive-measure piece $A$, Holder applied to $|y|$ and $\mathbf1_A$ gives $\int_A|y|\,d\mu\le\mu(A)^{1-1/q}\|y\|_q$, with $1/q=0$ at infinity; zero-measure pieces are trivial. For finite $q$, Fatou applied to $|y_j|^q$ gives the sequential lower-limit property, and Tonelli gives measurability of $z\mapsto\int|G(z,x)|^q\,d\mu$ for time or time-pair parameter $z$. Minkowski applied to a jointly measurable kernel $K$ with $\int\|K(r,\cdot)\|_q\,dr<\infty$ gives $H(x)=\int|K(r,x)|\,dr\in L^q(X)$ and $\|H\|_q\le\int\|K(r,\cdot)\|_q\,dr$. Hence the scalar integral exists absolutely almost everywhere, and $|\int K(r,x)\,dr|\le H(x)$ proves its integral-triangle inequality. [F1, F2, F4, F5, given]

1.3 For $q=\infty$, write $a(z)=\operatorname*{ess\,sup}_x|G(z,x)|$. For every real $c\ge0$, the set $\{z:a(z)>c\}$ is the union over the exhaustion pieces of $\{z:\mu(\{x\in A_n:|G(z,x)|>c\})>0\}$. Indeed, a positive-measure strict superlevel set is a countable union of the sets $\{|G|\ge c+1/k\}$, so some such set has positive measure. Tonelli makes the section measures measurable, hence $a$ measurable. If $y_j\to y$ almost everywhere and $L=\liminf_j\|y_j\|_\infty<\infty$, choose a subsequence with norms at most $L+\varepsilon$ eventually. The countable union of its exceptional spatial null sets is null, so $|y|\le L+\varepsilon$ almost everywhere by taking limits. Letting $\varepsilon\downarrow0$ proves the endpoint lower-limit property; if $L=\infty$ the inequality is automatic. [F2, F3, F4, F5, given]

2.1 For a jointly measurable kernel $K(r,x)$, set $a(r)=\|K(r,\cdot)\|_\infty$, measurable by step 1.3. If $\int a(r)\,dr<\infty$, then $a$ is finite almost everywhere, and $|K(r,x)|\le a(r)$ holds for almost every $x$ for each such $r$. Tonelli applied to the measurable violation set on the finite-measure spatial pieces shows that this bound holds for almost every $(r,x)$, hence for almost every $x$ and almost every $r$. Thus its scalar integral is absolutely convergent and has absolute value at most $\int a(r)\,dr$ for almost every $x$. Taking essential suprema proves the endpoint integral-triangle inequality. Tonelli also shows that changing a joint representative on a product-null set changes its spatial section class only for a null set of parameters, so the scalar mixed norm is well defined. All five hypotheses in [[lem-author-8960795edce1-scalar-fatou-retarded-transfer]] have now been verified. No $L^\infty$-valued Bochner integral or separability assertion entered this proof. [F2, F3, F5, step 1.1, step 1.2, step 1.3] ∎
