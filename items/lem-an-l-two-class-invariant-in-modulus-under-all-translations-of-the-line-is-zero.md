---
id: lem-an-l-two-class-invariant-in-modulus-under-all-translations-of-the-line-is-zero
kind: lemma
title: A translation-invariant L1 function on the line is zero
deps:
- thm-l1-group-algebras-have-a-contractively-bounded-approximate-identity
- def-lebesgue-measure-and-the-lebesgue-sigma-algebra
- thm-lebesgue-measure-is-a-complete-measure
- def-half-open-box
- thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
- thm-lebesgue-measure-under-dilations-and-reflections
- thm-lebesgue-measure-is-a-radon-measure-on-rn
- prop-compact-discrete-and-abelian-groups-are-unimodular
- def-convolution-on-cc-and-l1-of-a-group
- lem-l1-convolution-norm-inequality
- thm-integrals-are-invariant-under-measure-preserving-maps
- def-complex-haar-lp-spaces-and-compactly-supported-functions
- def-left-haar-integral-and-left-haar-measure
- def-axiom-of-choice
- def-compactly-supported-convolution-on-a-group
- thm-tonelli-theorem-for-sigma-finite-product-spaces
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Emmanuel Kowalski, An Introduction to the Representation Theory of Groups (author-hosted draft, 338 pp.)
    url: https://people.math.ethz.ch/~kowalski/representation-theory.pdf
    locator: Ch. 3 §3.4.3, Example 3.4.15, printed p. 119 (the step $|f(t)|=|f(0)|$ constant a.e.)
status: draft
origin: pipeline
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $g\in L^1(\mathbb R,\lambda_1)$ and suppose that for every $t\in\mathbb R$ one has $g(x-t)=g(x)$ for almost every $x\in\mathbb R$ ([[def-complex-haar-lp-spaces-and-compactly-supported-functions]]). Then $g=0$ almost everywhere. Consequently, if $v\in L^2(\mathbb R,\lambda_1)$ satisfies $|v(x-t)|=|v(x)|$ for every $t\in\mathbb R$ and almost every $x$, then $v=0$ almost everywhere (apply the first statement to $g=|v|^2\in L^1$).

## Facts & Assumptions

[F1] Lebesgue measure $\lambda_1$ on $\mathbb R$ is a measure with $\lambda_1((0,1])=1$ and $\lambda_1(\mathbb R)=+\infty$, the half-open box $(0,1]$ being the unit cube of volume $1$; it is a Radon measure, it is invariant under all translations and under the reflection $x\mapsto-x$, and on the additive group $\mathbb R$ one has $y^{-1}x=x-y$; it is therefore a left Haar measure on the abelian (hence unimodular) group $\mathbb R$, and for real or complex $L^1$ functions integrals are unchanged by translations and reflections. ([[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]], [[thm-lebesgue-measure-is-a-complete-measure]], [[def-half-open-box]], [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]], [[thm-lebesgue-measure-under-dilations-and-reflections]], [[thm-lebesgue-measure-is-a-radon-measure-on-rn]], [[def-left-haar-integral-and-left-haar-measure]], [[thm-integrals-are-invariant-under-measure-preserving-maps]])

[F2] There is a net $(e_U)$ of nonnegative continuous compactly supported functions on $\mathbb R$, indexed by the identity neighbourhoods $U$ ordered by reverse inclusion, with $\operatorname{supp}e_U\subseteq U$ and $\|e_U\|_1=1$, such that $\|e_U*h-h\|_1\to0$ and $\|h*e_U-h\|_1\to0$ for every $h\in L^1(\mathbb R)$. ([[thm-l1-group-algebras-have-a-contractively-bounded-approximate-identity]])

[F3] For $f,h\in C_c(\mathbb R)$ the convolution is $(f*h)(x)=\int_{\mathbb R}f(y)h(x-y)\,d\lambda_1(y)$, the $L^1$ convolution agrees with it on $C_c$ and satisfies $\|f*h\|_1\le\|f\|_1\|h\|_1$, and for $f\in L^1(\mathbb R)$ and $h\in C_c(\mathbb R)$ the class $f*h$ is the $L^1$ limit of $u_n*h$ for every sequence $u_n\in C_c(\mathbb R)$ with $\|u_n-f\|_1\to0$. ([[def-compactly-supported-convolution-on-a-group]], [[def-convolution-on-cc-and-l1-of-a-group]], [[lem-l1-convolution-norm-inequality]])

[F4] A product-measurable nonnegative function on a sigma-finite product space has iterated integrals equal to its product integral. ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]])

[F6] A class in $L^2(\mathbb R,\lambda_1)$ has finite squared norm $\int_{\mathbb R}|v|^2\,d\lambda_1<\infty$, so $|v|^2$ lies in $L^1(\mathbb R,\lambda_1)$. ([[def-complex-haar-lp-spaces-and-compactly-supported-functions]])

## Proof

**Given:** AC and a class $g\in L^1(\mathbb R,\lambda_1)$ with $g(x-t)=g(x)$ for almost every $x$, for every $t\in\mathbb R$.

1.1 First record the representative formula for $f\in L^1(\mathbb R)$ and $h_0\in C_c(\mathbb R)$: the function $x\mapsto F(x):=\int_{\mathbb R}f(y)h_0(x-y)\,d\lambda_1(y)$ represents the class $f*h_0$, because for $u_n\in C_c$ with $\|u_n-f\|_1\to0$ one has $u_n*h_0\to f*h_0$ by [F3], while $|F(x)-(u_n*h_0)(x)|\le\int_{\mathbb R}|f-u_n|(y)\,|h_0(x-y)|\,d\lambda_1(y)$ and hence $\|F-u_n*h_0\|_1\le\|f-u_n\|_1\|h_0\|_1\to0$ by [F4] applied to the nonnegative product-measurable function $|f-u_n|(y)|h_0(x-y)|$ and translation invariance [F1], so $F$ and $f*h_0$ differ only on a null set. [F1, F3, F4]

2.1 Let $U_n:=(-1/(n+1),1/(n+1))$ and choose $e_n:=e_{U_n}$ from the net of [F2]; for every $n$ and every $x$ the representative of $g*e_n$ from step 1.1 gives $(g*e_n)(x)=\int_{\mathbb R}g(y)e_n(x-y)\,d\lambda_1(y)=\int_{\mathbb R}g(x-z)e_n(z)\,d\lambda_1(z)$ by the substitution $z=x-y$ and translation invariance, while the hypothesis with shift $t=x$ gives $g(x-z)=g(-z)$ for almost every $z$, so $(g*e_n)(x)=\int_{\mathbb R}g(-z)e_n(z)\,d\lambda_1(z)=:c_n$ is a constant independent of $x$; thus $g*e_n$ equals the constant $c_n$ almost everywhere. [F1, F2, step 1.1]

3.1 By [F3] each $g*e_n$ is an $L^1$ class. Step 2.1 identifies it with the constant $c_n$; since $\lambda_1(\mathbb R)=\infty$, integrability forces $c_n=0$. The neighbourhoods $U_n=(-1/(n+1),1/(n+1))$ are cofinal in the identity neighbourhoods: every such neighbourhood contains some $U_m$, and $U_n\subseteq U_m$ for $n\ge m$. The right approximate-identity convergence in [F2] therefore gives $\|g*e_n-g\|_1\to0$. Since $g*e_n=0$ for every $n$, $\|g\|_1=0$ and $g=0$ almost everywhere. [F1, F2, F3, step 2.1]

4.1 Finally let $v\in L^2(\mathbb R,\lambda_1)$ satisfy $|v(x-t)|=|v(x)|$ for every $t$ and almost every $x$; then $g:=|v|^2$ lies in $L^1(\mathbb R,\lambda_1)$ by [F6] and satisfies $g(x-t)=g(x)$ for every $t$ and almost every $x$, so step 3.1 applied to this $g$ gives $g=0$ almost everywhere, that is, $v=0$ almost everywhere, which is the stated consequence; this proves the lemma. The Axiom of Choice is consumed through the approximate identity net of [F2] and through those measure-theoretic suppliers of [F1] that need it, the complete-measure, dilation-reflection and Radon-measure theorems being proved under the Axiom of Countable Choice; the translation, convolution and subsequence arguments are choice-free apart from those inputs. [F1, F2, F6, step 3.1] ∎
