---
id: lem-cutoff-difference-quotient-commutator-estimate
kind: lemma
title: "The cutoff difference-quotient commutator estimate"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
deps: [def-first-difference-quotient, lem-difference-quotient-integration-by-parts, thm-mean-value-inequality, thm-chain-rule-for-total-derivatives, def-translation-of-a-function-on-rn, cor-c-one-change-of-variables-for-l-one-functions, def-l-p-space-as-a-quotient-by-null-functions, def-sobolev-space-wkp-and-its-norm, def-countable-choice, lem-sobolev-integration-by-parts-for-dual-exponents, lem-weak-leibniz-rule-with-a-smooth-factor, lem-compact-support-zero-extension-in-wkp, cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn, lem-euclidean-bump-for-a-compact-set-inside-an-open-set]
landmark: false
dependency_level: 2
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
      locator: "Section 4.11, proof of Theorem 4.27 (commutator terms F), printed pp. 112-113 (read in full)"
    - title: "Leon Simon, Lectures on Partial Differential Equations (Stanford, complete 223-page author scan)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lecture 6, difference-quotient product rule and properties (a)-(f), printed pp. 60-62 (read in full)"
---

## Statement

Assume Countable Choice. Let $\Omega\subseteq\mathbb R^n$ be open, $1\le p\le\infty$,
$\mathbb K\in\{\mathbb R,\mathbb C\}$, $u\in W^{1,p}(\Omega;\mathbb K)$ and
$\eta\in C_c^\infty(\mathbb R^n;\mathbb R)$ with
$M_\eta:=\|D\eta\|_{L^\infty(\mathbb R^n)}$ and compact support; the case
$\eta\in C_c^\infty(\Omega;\mathbb R)$ is read by extending $\eta$ by zero.
Then for every $i\in\{1,\dots,n\}$ and every $h\ne0$, on the shrunken set
$\Omega_{i,h}=\{x\in\Omega:x+he_i\in\Omega\}$ of
[[def-first-difference-quotient]] one has the exact identity
$$\delta_h^i(\eta u)-\eta\,\delta_h^iu=(\delta_h^i\eta)\,(\tau_{-he_i}u)\qquad\text{a.e. on }\Omega_{i,h},$$
where $\tau$ is the published translation $\tau_hu(x)=u(x-h)$ of
[[def-translation-of-a-function-on-rn]], so that
$(\tau_{-he_i}u)(x)=u(x+he_i)$. Consequently
$$\|\delta_h^i(\eta u)-\eta\,\delta_h^iu\|_{L^p(\Omega_{i,h})}\le M_\eta\,\|\tau_{-he_i}u\|_{L^p(\Omega_{i,h})}\le M_\eta\,\|u\|_{L^p(\Omega)},$$
and more generally, on the domain where both sides are defined,
$$\delta_h^i\big(\eta^2\delta_h^iu\big)=\eta^2\delta_h^i\delta_h^iu+(\delta_h^i\eta^2)\,(\tau_{-he_i}\delta_h^iu).$$
The statement is quantitative in $\|D\eta\|_{L^\infty}$ and does not assume
any regularity of $u$ beyond $W^{1,p}$.

**Sobolev multiplier and support facts used below.** For every integer
$m\ge0$, $q\in W^{m,\infty}(U)$ and $z\in H^m(U)$ on an open set $U$,
$qz\in H^m(U)$ and
$$D^\alpha(qz)=\sum_{\beta\le\alpha}{\alpha\choose\beta}(D^\beta q)D^{\alpha-\beta}z,\qquad |\alpha|\le m,$$
with $\|qz\|_{H^m(U)}\le C(n,m)\|q\|_{W^{m,\infty}(U)}\|z\|_{H^m(U)}$.
Also, every compactly supported $z\in H^m(U)$ lies in $H^m_0(U)$.

## Facts & Assumptions

**Given:** Countable Choice; an open set $\Omega\subseteq\mathbb R^n$ with $n\ge1$; an exponent $1\le p\le\infty$; a scalar field $\mathbb K\in\{\mathbb R,\mathbb C\}$; a class $u\in W^{1,p}(\Omega;\mathbb K)$; a test function $\eta\in C_c^\infty(\mathbb R^n;\mathbb R)$ with $M_\eta=\|D\eta\|_{L^\infty(\mathbb R^n)}$; a coordinate $i$; and $h\ne0$; the shrunken sets and quotient operators are those of [[def-first-difference-quotient]], with the translation convention $\tau_hu(x)=u(x-h)$.

[F1] Product rule for difference quotients: if $u,v\in L^1_{\mathrm{loc}}(\Omega)$ and $uv\in L^1_{\mathrm{loc}}(\Omega)$, then almost everywhere on $\Omega_{i,h}$, $\delta_h^i(uv)=(\tau_{-he_i}u)\,\delta_h^iv+(\delta_h^iu)\,v =u\,\delta_h^iv+(\delta_h^iu)\,(\tau_{-he_i}v)$, where $(\tau_{-he_i}w)(x)=w(x+he_i)$. ([[lem-difference-quotient-integration-by-parts]], [[def-first-difference-quotient]])

[F2] Mean value inequality: for $g:[a,b]\to\mathbb R$ continuous on $[a,b]$ and differentiable on $(a,b)$ with $|g'|\le M$ there, one has $|g(b)-g(a)|\le M|b-a|$; and for a smooth $\eta$ and fixed $x$, the map $t\mapsto\eta(x+te_i)$ has derivative $D\eta(x+te_i)\cdot e_i$. ([[thm-mean-value-inequality]], [[thm-chain-rule-for-total-derivatives]])

[F3] Change of variables under translation: for every $f\in L^1(\Omega_{i,-h})$ one has $\int_{\Omega_{i,h}}f(x+he_i)\,dx=\int_{\Omega_{i,-h}}f(y)\,dy$, and in particular the $L^p$ norms of $\tau_{-he_i}u$ and $u$ agree on the corresponding shrunken sets. ([[cor-c-one-change-of-variables-for-l-one-functions]], [[def-translation-of-a-function-on-rn]])

[F4] $L^p$ classes and their norms are those of [[def-l-p-space-as-a-quotient-by-null-functions]], and $W^{1,p}(\Omega)\subseteq L^p(\Omega)$ with $\|u\|_{L^p(\Omega)}\le\|u\|_{W^{1,p}(\Omega)}$ for $p<\infty$, while for $p=\infty$ the space $L^\infty(\Omega)$ carries the essential supremum. ([[def-sobolev-space-wkp-and-its-norm]])

[F5] Every class in $W^{1,p}(\Omega)$ has a locally integrable representative, so products with the bounded compactly supported $\eta$ and with $\eta^2$ are locally integrable, and $\delta_h^iu$ is locally integrable on $\Omega_{i,h}$ whenever $u$ is. ([[def-first-difference-quotient]])



[F6] The bilinear Sobolev integration-by-parts identity holds for $q\in W^{1,\infty}(V)$ and a compactly supported $t\in W^{1,1}(V)$: $\int_V qD_it=-\int_V tD_iq$. ([[lem-sobolev-integration-by-parts-for-dual-exponents]])

[F7] Compact-support zero extension preserves every Sobolev derivative and its norm; smooth compactly supported functions are dense in $H^m(\mathbb R^n)$; and a smooth cutoff equal to one on a compact set can be chosen with compact support inside an enclosing open set. ([[lem-compact-support-zero-extension-in-wkp]], [[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]], [[lem-euclidean-bump-for-a-compact-set-inside-an-open-set]], [[lem-weak-leibniz-rule-with-a-smooth-factor]])

## Proof

**Proof technique:** direct.

1.1 The classes $\eta$ and $u$ lie in $L^1_{\mathrm{loc}}(\Omega)$ and their product $\eta u$ does too, since $\eta$ is bounded with compact support; [F1] with the identifications $u\rightsquigarrow\eta$ and $v\rightsquigarrow u$ (the second displayed form) gives, almost everywhere on $\Omega_{i,h}$, $$\delta_h^i(\eta u)=\eta\,\delta_h^iu+(\delta_h^i\eta)\,(\tau_{-he_i}u),$$ which is the first displayed identity after moving the term $\eta\delta_h^iu$ to the left. [F1, F5, algebra]

1.2 For fixed $x\in\mathbb R^n$ put $g(t):=\eta(x+te_i)$ for $t$ between $0$ and $h$. The chain rule gives $g'(t)=D\eta(x+te_i)\cdot e_i$, so $|g'|\le M_\eta$ on that interval, and the mean value inequality [F2] applied on the interval with endpoints $0,h$ gives $$|\eta(x+he_i)-\eta(x)|=|g(h)-g(0)|\le M_\eta|h|,\qquad\text{hence}\qquad|\delta_h^i\eta(x)|\le M_\eta .$$ [F2, algebra]

1.3 For the second identity apply [F1] with the identifications $u\rightsquigarrow\eta^2$ and $v\rightsquigarrow\delta_h^iu$: both classes are locally integrable by [F5], as is their product, and the second displayed form of [F1] gives, on the domain where the twice-shifted quotient is defined, $$\delta_h^i\big(\eta^2\delta_h^iu\big)=\eta^2\,\delta_h^i\big(\delta_h^iu\big)+(\delta_h^i\eta^2)\,(\tau_{-he_i}\delta_h^iu).$$ [F1, F5]

2.1 Taking absolute values in step 1.1 and applying step 1.2 pointwise almost everywhere on $\Omega_{i,h}$ yields $$|\delta_h^i(\eta u)-\eta\,\delta_h^iu|\le M_\eta\,|(\tau_{-he_i}u)|,$$ and integrating the $p$-th powers over $\Omega_{i,h}$ (with the essential-supremum reading for $p=\infty$) gives $\|\delta_h^i(\eta u)-\eta\delta_h^iu\|_{L^p(\Omega_{i,h})}\le M_\eta\|\tau_{-he_i}u\|_{L^p(\Omega_{i,h})}$; by the change of variables of [F3] the right-hand side is $M_\eta\|u\|_{L^p(\Omega_{i,-h})}\le M_\eta\|u\|_{L^p(\Omega)}$. [F3, F4, step 1.1, step 1.2]

3.1 Steps 1.1--2.1 prove the quotient identities and bounds. To establish the multiplier fact at order one, take $q\in W^{1,\infty}(U)$, $z\in H^1(U)$ and $\varphi\in C_c^\infty(U)$. On a bounded neighbourhood $V\Subset U$ of its support, the smooth-factor rule makes $t=z\varphi$ a compactly supported $W^{1,1}(V)$ class: its $H^1$ derivatives are $L^1$ there by Cauchy--Schwarz. Applying [F6] and expanding $D_i(z\varphi)$ gives $\int_U qzD_i\varphi=-\int_U((D_iq)z+qD_iz)\varphi$. Both proposed derivative terms are $L^2(U)$, proving the first-order product rule. Iterating this rule gives the displayed multi-index formula; each term is bounded in $L^2$ by its bounded coefficient factor times its $L^2$ factor, and a finite sum proves the norm estimate. At order zero this is just multiplication by an $L^\infty$ class. [F6, F7, step 2.1, algebra]

4.1 For the support fact, let $z\in H^m(U)$ vanish outside a compact $K\subset U$. By [F7], $E_0z\in H^m(\mathbb R^n)$ and choose $\varphi_\nu\in C_c^\infty(\mathbb R^n)$ converging to $E_0z$ in $H^m$. Choose $\chi\in C_c^\infty(U)$ equal to one near $K$. Smooth-factor multiplication is bounded in $H^m$, so $\chi\varphi_\nu\to\chi E_0z=E_0z$ in $H^m$; restricting gives compactly supported smooth approximations to $z$ in $U$. Thus $z\in H^m_0(U)$, completing all assertions. [F7, step 3.1] ∎

## Source notes

Hunter's proof of Theorem 4.27 (printed pp. 112-113) isolates exactly these commutator terms in the localisation step; Simon's Lecture 6 (printed pp. 60-62) records the product rule and the elementary properties of the difference operators in the same form. The scaffold wrote the identity with the opposite sign of the shift, $(\delta_h^i\eta)(\tau_{he_i}u)$; with the published translation convention $\tau_hu(x)=u(x-h)$ the correct factor is $(\tau_{-he_i}u)(x)=u(x+he_i)$, as stated and proved above.
