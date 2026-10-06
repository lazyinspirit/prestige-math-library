---
id: thm-difference-quotient-characterisation-of-w-one-p-for-p-greater-than-one
kind: theorem
title: "The difference-quotient characterisation of $W^{1,p}$ for $1<p<\\infty$"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
deps: [def-first-difference-quotient, lem-difference-quotient-integration-by-parts, lem-weak-limit-of-uniformly-bounded-difference-quotients-is-the-weak-derivative, def-sobolev-space-wkp-and-its-norm, def-conjugate-exponents, thm-dominated-convergence, def-countable-choice, thm-meyers-serrin-density-on-an-arbitrary-open-set, thm-jensens-integral-inequality, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant, cor-c-one-change-of-variables-for-l-one-functions, thm-ftc-second-part, thm-chain-rule-for-total-derivatives, def-weak-derivative-of-a-locally-integrable-function, def-hk-and-hk-zero-notation, def-l-p-space-as-a-quotient-by-null-functions, thm-holder-inequality-for-integrals, thm-minkowski-inequality-for-integrals, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity]
landmark: false
dependency_level: 3
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter graduate notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Appendix 4.C, Theorem 4.53, printed pp. 125-126 (read in full)"
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, 2020, complete 158-page graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "Chapter 5, Section 5.2, Proposition 5.7, printed pp. 110-111 (read in full)"
    - title: "Leon Simon, Lectures on Partial Differential Equations (Stanford, complete 223-page author scan)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lecture 5, Lemma 7, and Lecture 6 use of it (read in full)"
---

## Statement

Assume Countable Choice. Let $\Omega\subseteq\mathbb R^n$ be open, $n\ge1$,
$\mathbb K\in\{\mathbb R,\mathbb C\}$ and $\Omega'\Subset\Omega$;
write $\delta_hu=(\delta_h^1u,\dots,\delta_h^nu)$ and
$Du=(D_1u,\dots,D_nu)$ for the difference-quotient and gradient vectors, with
$$\|\delta_hu\|_{L^p(\Omega')}:=\Big\|\Big(\sum_{i=1}^n|\delta_h^iu|^2\Big)^{1/2}\Big\|_{L^p(\Omega')},\qquad \|Du\|_{L^p(\Omega)}:=\Big\|\Big(\sum_{i=1}^n|D_iu|^2\Big)^{1/2}\Big\|_{L^p(\Omega)} .$$
(1) If $1\le p\le\infty$ and $u\in W^{1,p}(\Omega;\mathbb K)$, then for every
$0<|h|<\operatorname{dist}(\Omega',\partial\Omega)$ and every coordinate
direction $i$,
$$\|\delta_h^iu\|_{L^p(\Omega')}\le\|D_iu\|_{L^p(\Omega)},\qquad \|\delta_hu\|_{L^p(\Omega')}\le n^{|1/p-1/2|}\|Du\|_{L^p(\Omega)} .$$
At $p=2$ the vector estimate has constant one. The coordinate bound also
holds on any open $U\subseteq\Omega$ for a fixed $i,h$ for which every
segment $[x,x+he_i]$, $x\in U$, stays in $\Omega$; compact containment
is unnecessary. In particular, $\|\delta_h^iu\|_{L^p(H)}\le
\|D_iu\|_{L^p(H)}$ for tangential directions on a half-space $H$.
(2) Conversely, if $1<p<\infty$, $u\in L^p(\Omega;\mathbb K)$ and there is $C$
with $\|\delta_h^iu\|_{L^p(\Omega')}\le C$ for every coordinate $i$ and all
$0<|h|<\operatorname{dist}(\Omega',\partial\Omega)/2$, then
$u\in W^{1,p}(\Omega')$ with $D_iu\in L^p(\Omega')$,
$\|D_iu\|_{L^p(\Omega')}\le C$, and
$\delta_h^iu\rightharpoonup D_iu$ weakly in $L^p(\Omega')$ as $h\to0$.
For $1\le p<\infty$, tangential quotients on $H$ also converge strongly:
$\delta_h^iu\to D_iu$ in $L^p(H)$ as $h\to0$.
Both parts are identities of classes and hold without any regularity of
$\partial\Omega$. At $p=1$ the converse in (2) is deliberately not asserted;
the companion remark records why only a measure derivative survives there.

## Facts & Assumptions

**Given:** Countable Choice; an open set $\Omega\subseteq\mathbb R^n$ with $n\ge1$; an open $\Omega'\Subset\Omega$; a scalar field $\mathbb K\in\{\mathbb R,\mathbb C\}$; the exponent range $1\le p\le\infty$ for part (1) and $1<p<\infty$ for part (2); a class $u\in W^{1,p}(\Omega;\mathbb K)$ in part (1) or a class $u\in L^p(\Omega;\mathbb K)$ with uniform difference-quotient bound $C$ in part (2); and a coordinate direction $i$.

[F1] Difference quotients: $\delta_h^iw=(w(\cdot+he_i)-w)/h$ on $\Omega_{i,h}=\{x\in\Omega:x+he_i\in\Omega\}$; for $0<|h|<\operatorname{dist}(\Omega',\partial\Omega)$ one has $\Omega'\subseteq\Omega_{i,h}$, and for $w\in L^p(\Omega)$ the class $\delta_h^iw$ lies in $L^p(\Omega')$ with $\|\delta_h^iw\|_{L^p(\Omega')}\le 2\|w\|_{L^p(\Omega)}/|h|$; the definition depends only on the class of $w$. ([[def-first-difference-quotient]], [[def-l-p-space-as-a-quotient-by-null-functions]])

[F2] Sobolev classes: $W^{1,p}(\Omega)$ consists of the classes $u\in L^p(\Omega)$ whose first weak derivatives $D_iu$ lie in $L^p(\Omega)$, and $H^k=W^{k,2}$; convergence in $W^{1,p}$ means convergence in $L^p$ of $u$ and of every $D_iu$. ([[def-sobolev-space-wkp-and-its-norm]], [[def-hk-and-hk-zero-notation]], [[def-weak-derivative-of-a-locally-integrable-function]])

[F3] Smooth approximation: $C^\infty(\Omega)\cap W^{1,p}(\Omega)$ is dense in $W^{1,p}(\Omega)$ for $1\le p<\infty$. ([[thm-meyers-serrin-density-on-an-arbitrary-open-set]])

[F4] Fundamental theorem of calculus and chain rule: for smooth $v$ and $x\in\Omega$, the map $t\mapsto v(x+te_i)$ is differentiable with derivative $\partial_iv(x+te_i)$, so $v(x+he_i)-v(x)=h\int_0^1\partial_iv(x+the_i)\,dt$. ([[thm-ftc-second-part]], [[thm-chain-rule-for-total-derivatives]])

[F5] Jensen's inequality: on a probability space and for a convex $\varphi$, $\varphi(\int f\,d\mu)\le\int\varphi(f)\,d\mu$; the normalized restriction $\mu_h:=(1/h)\,dt$ of Lebesgue measure to $[0,h]$, $h>0$, is a probability measure, and $t\mapsto t^p$ is convex on $[0,\infty)$. ([[thm-jensens-integral-inequality]])

[F6] Fubini for nonnegative integrands and translation invariance of Lebesgue measure: for measurable $G\ge0$ one has $\int_{\Omega'}\int_0^1G(x,t)\,dt\,dx=\int_0^1\int_{\Omega'}G(x,t)\,dx\,dt$, and for $|s|<\operatorname{dist}(\Omega',\partial\Omega)$ one has $\Omega'+se_i\subseteq\Omega$ and $\int_{\Omega'}F(x+se_i)\,dx=\int_{\Omega'+se_i}F(y)\,dy$. ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]], [[cor-c-one-change-of-variables-for-l-one-functions]])

[F7] Hölder's inequality with conjugate exponents $p,p'$ on $\Omega'$, and the triangle inequality in $L^q$ for $q\ge1$. ([[def-conjugate-exponents]], [[thm-holder-inequality-for-integrals]], [[thm-minkowski-inequality-for-integrals]])

[F8] The weak-limit lemma: a uniform bound $\|\delta_h^iw\|_{L^p(\Omega')}\le C$ for $0<|h|<h_0$ and $1<p<\infty$, $w\in L^p(\Omega)$, $h_0<\operatorname{dist}(\Omega',\partial\Omega)$, gives $D_iw\in L^p(\Omega')$, $\|D_iw\|_{L^p(\Omega')}\le C$ and $\int_{\Omega'}\delta_h^iw\,\varphi\to\int_{\Omega'}D_iw\,\varphi$ for every $\varphi\in L^{p'}(\Omega')$. ([[lem-weak-limit-of-uniformly-bounded-difference-quotients-is-the-weak-derivative]])


[F9] Translations are strongly continuous on $L^p(\mathbb R^n)$ for $1\le p<\infty$ under Countable Choice. ([[thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity]])

## Proof

**Proof technique:** direct.

1.1 Let $v\in C^\infty(\Omega)\cap W^{1,p}(\Omega)$ and $0<|h|<\operatorname{dist}(\Omega',\partial\Omega)$. Take first $h>0$ and fix $x\in\Omega'$; by [F4] and the convexity of $t\mapsto t^p$, Jensen's inequality [F5] for the probability measure $\mu_h$ gives $$|\delta_h^iv(x)|^p=\Big|\frac1h\int_0^h\partial_iv(x+te_i)\,dt\Big|^p\le\frac1h\int_0^h|\partial_iv(x+te_i)|^p\,dt .$$ For $h<0$ the same computation applies with the segment from $x+he_i$ to $x$ and the average taken over $[h,0]$. [F4, F5]

1.2 For part (2), choose a finite $h_0>0$ with $h_0<\operatorname{dist}(\Omega',\partial\Omega)/2$; when $\Omega=\mathbb R^n$ and the distance is infinite, take $h_0=1$; the hypothesis is exactly the uniform bound required by the weak-limit lemma [F8], which gives $u\in W^{1,p}(\Omega')$ with $\|D_iu\|_{L^p(\Omega')}\le C$ and the convergence $\int_{\Omega'}\delta_h^iu\,\varphi\to\int_{\Omega'}D_iu\,\varphi$ for every $\varphi\in L^{p'}(\Omega')$; by [F7] the latter is precisely weak convergence $\delta_h^iu\rightharpoonup D_iu$ in $L^p(\Omega')$. [F7, F8]

2.1 Integrating the estimate of step 1.1 over $\Omega'$ and applying Fubini and the translation invariance of [F6] (every point $x+te_i$ with $x\in\Omega'$, $t$ between $0$ and $h$, satisfies $\operatorname{dist}(x+te_i,\partial\Omega)>0$ because $|h|<\operatorname{dist}(\Omega',\partial\Omega)$) gives, for either sign of $h$, $$\int_{\Omega'}|\delta_h^iv|^p\,dx\le\frac1h\int_0^h\int_{\Omega'}|\partial_iv(x+te_i)|^p\,dx\,dt\le\int_\Omega|\partial_iv|^p\,dx,$$ so $\|\delta_h^iv\|_{L^p(\Omega')}\le\|D_iv\|_{L^p(\Omega)}$. [F4, F6, step 1.1]

3.1 Let now $1\le p<\infty$ and $u\in W^{1,p}(\Omega)$ and choose $v_j\in C^\infty(\Omega)\cap W^{1,p}(\Omega)$ with $\|v_j-u\|_{W^{1,p}(\Omega)}\to0$, as [F3] permits. For fixed $h$ with $0<|h|<\operatorname{dist}(\Omega',\partial\Omega)$, [F1] applied to $w=v_j-u$ gives $\|\delta_h^iv_j-\delta_h^iu\|_{L^p(\Omega')}\le2\|v_j-u\|_{L^p(\Omega)}/|h|\to0$, and $\|D_iv_j-D_iu\|_{L^p(\Omega)}\to0$ by [F2]; step 2.1 applied to each $v_j$ and passage to the limit (norms are continuous) yield $\|\delta_h^iu\|_{L^p(\Omega')}\le\|D_iu\|_{L^p(\Omega)}$. [F1, F2, F3, step 2.1]

4.1 The coordinate argument in steps 1.1--3.1 works on any open $U$ with the segment condition: each translated set $U+the_i$ lies in $\Omega$, so Tonelli and change of variables bound its integral by the gradient norm on $\Omega$. For $p=\infty$, fix a compact $K\subset U$. The union of its segments is compact in $\Omega$, so choose a bounded open tube $T\Subset\Omega$ containing that union. For each finite $q\ge1$, the same coordinate argument applied to $u|_T$ gives $\|\delta_h^iu\|_{L^q(K)}\le\|D_iu\|_{L^\infty(\Omega)}|T|^{1/q}$. If the quotient exceeded this essential bound by $\varepsilon$ on a positive-measure subset of $K$, its $L^q$ norm would exceed $(\|D_iu\|_\infty+\varepsilon)|E|^{1/q}$, a contradiction as $q\to\infty$. Exhausting $U$ by compact sets proves the $L^\infty$ coordinate bound. [F3, F6, F7, step 3.1, algebra]

5.1 Tangential strong convergence. For a tangential direction on $H$, smooth approximation [F3] and the fixed-$h$ translation bounds pass the segment formula to $u$: $\delta_h^iu(x)=\int_0^1D_iu(x+the_i)\,dt$ as $L^p(H)$ classes. Indeed Jensen and tangential change of variables bound the $L^p$ error between the averages of two gradient approximations by their $L^p(H)$ distance. Extend $D_iu$ by zero as an $L^p$ class on $\mathbb R^n$; tangential shifts preserve $H$, so [F9] gives $\|D_iu(\cdot+te_i)-D_iu\|_{L^p(H)}\to0$ uniformly for $|t|\le|h|$ as $h\to0$. Jensen and Tonelli applied to the segment formula therefore give $\|\delta_h^iu-D_iu\|_{L^p(H)}^p\le\int_0^1\|D_iu(\cdot+the_i)-D_iu\|_{L^p(H)}^pdt\to0$. [F3, F5, F6, F9, step 4.1, algebra]

5.2 Vector estimate. Put $z_i=\delta_h^iu$ and $d_i=D_iu$. Step 3.1 gives $\|z_i\|_p\le\|d_i\|_p$ for each coordinate. If $1\le p\le2$, the finite-dimensional inequalities yield $\|z\|_{L^p(\ell^2)}\le(\sum_i\|z_i\|_p^p)^{1/p}\le(\sum_i\|d_i\|_p^p)^{1/p}\le n^{1/p-1/2}\|d\|_{L^p(\ell^2)}$. If $2\le p<\infty$, the triangle inequality in $L^{p/2}$ gives $\|z\|_{L^p(\ell^2)}\le(\sum_i\|z_i\|_p^2)^{1/2}\le(\sum_i\|d_i\|_p^2)^{1/2}\le n^{1/2-1/p}(\sum_i\|d_i\|_p^p)^{1/p}\le n^{1/2-1/p}\|d\|_{L^p(\ell^2)}$. For $p=\infty$, step 4.1 gives $|z_i|\le\|d_i\|_\infty\le\|d\|_{L^\infty(\ell^2)}$ a.e., hence $\|z\|_{L^\infty(\ell^2)}\le\sqrt n\|d\|_{L^\infty(\ell^2)}$. These finite-dimensional comparisons follow from Hölder applied to the finite sum. Thus the stated vector constant is valid, and equals one at $p=2$. Each component uses its own coordinate segment; no common translated gradient vector is asserted. [F7, step 3.1, step 4.1, algebra]

6.1 Steps 3.1--4.1 prove (1) for every $u\in W^{1,p}(\Omega)$, and step 1.2 proves (2) for $1<p<\infty$; no step used any regularity of $\partial\Omega$, only the containedness $\Omega'\Subset\Omega$ and the shrunken-domain definition of the quotients, so both assertions are identities of classes on arbitrary open sets. [step 3.1, step 5.2, step 1.2] ∎

## Source notes

Hunter's Theorem 4.53 (printed pp. 125-126) states (1) with the mean value formula and (2) by weak compactness; Laugesen's Proposition 5.7 (printed pp. 110-111) and Simon's Lemma 7 record the same two directions. The companion remark on this page records the failure of (2) at $p=1$. The scaffold dependency on `def-sobolev-conjugate-exponent` was replaced by [[def-conjugate-exponents]]: the exponents in Hölder's inequality are conjugate exponents, while the Sobolev conjugate $np/(n-p)$ is a different object.
