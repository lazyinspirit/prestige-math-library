---
id: lem-difference-quotient-integration-by-parts
kind: lemma
title: "Difference-quotient calculus: integration by parts, product rule, commutation"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
deps: [def-first-difference-quotient, def-translation-of-a-function-on-rn, def-weak-derivative-of-a-locally-integrable-function, def-conjugate-exponents, def-l-p-space-as-a-quotient-by-null-functions, cor-c-one-change-of-variables-for-l-one-functions, thm-holder-inequality-for-integrals, def-countable-choice]
landmark: false
dependency_level: 1
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
      locator: "Appendix 4.C, Proposition 4.52 and its proof, printed pp. 124-125 (read in full)"
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, 2020, complete 158-page graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "Chapter 5, Section 5.2, the difference operators and the integration-by-parts identity (5.6), printed pp. 108-110 (read in full)"
---

## Statement

Assume Countable Choice. Let $\Omega\subseteq\mathbb R^n$ be open with $n\ge1$,
let $\mathbb K\in\{\mathbb R,\mathbb C\}$, let
$u,v\in L^1_{\mathrm{loc}}(\Omega;\mathbb K)$, and fix $h\ne0$ and
$i\in\{1,\dots,n\}$. Write
$\Omega_{i,h}=\{x\in\Omega:x+he_i\in\Omega\}$ and
$\Omega_{i,-h}=\{x\in\Omega:x-he_i\in\Omega\}$
([[def-first-difference-quotient]]), so that
$\Omega_{i,-h}=\Omega_{i,h}+he_i$. Then:

(i) **Integration by parts, two-domain form.** Whenever the displayed
integrals converge absolutely,
$$\int_{\Omega_{i,h}}\delta_h^iu\,v\,dx=-\int_{\Omega_{i,-h}}u\,\delta_{-h}^iv\,dx+\frac1h\Big(\int_{\Omega_{i,-h}}uv\,dx-\int_{\Omega_{i,h}}uv\,dx\Big).$$
Consequently, if
$$\int_{\Omega_{i,h}}uv\,dx=\int_{\Omega_{i,-h}}uv\,dx,$$
in particular if $uv$ vanishes almost everywhere outside
$\Omega_{i,h}\cap\Omega_{i,-h}$ — for instance when $uv$ has compact support in
$\Omega$ and $|h|<\operatorname{dist}(\operatorname{supp}(uv),\partial\Omega)$
— or if $\Omega_{i,h}=\Omega_{i,-h}$, then
$\int_{\Omega_{i,h}}\delta_h^iu\,v\,dx=-\int_{\Omega_{i,-h}}u\,\delta_{-h}^iv\,dx$,
with the integrals taken over their respective shrunken sets. For $\Omega=\mathbb R^n$
and $u\in L^p(\Omega)$, $v\in L^{p'}(\Omega)$ with $1\le p\le\infty$ and
$p'$ the Hölder conjugate exponent of [[def-conjugate-exponents]]
($1/p+1/p'=1$), both sides are absolutely convergent and
$$\int_{\mathbb R^n}\delta_h^iu\,v\,dx=-\int_{\mathbb R^n}u\,\delta_{-h}^iv\,dx.$$

(ii) **Product rule.** If $uv\in L^1_{\mathrm{loc}}(\Omega)$, then a.e. on
$\Omega_{i,h}$,
$$\delta_h^i(uv)=\big(\tau_{-he_i}u\big)\,\delta_h^iv+\big(\delta_h^iu\big)\,v=u\,\delta_h^iv+\big(\delta_h^iu\big)\big(\tau_{-he_i}v\big),$$
with the translation $\tau_{-he_i}$ of [[def-translation-of-a-function-on-rn]].
The identity is a pointwise a.e. algebraic identity; no local integrability of
its shifted cross-products is asserted beyond the hypothesis $uv\in L^1_{\rm loc}$,
which makes the left side well defined.

(iii) **Commutation with weak derivatives.** If $u$ and all its weak
derivatives $D^\gamma u$ with $|\gamma|\le|\alpha|$ have locally integrable
representatives on $\Omega$
([[def-weak-derivative-of-a-locally-integrable-function]]), then
$$D^\alpha(\delta_h^iu)=\delta_h^i(D^\alpha u)\qquad\text{weakly on }\Omega_{i,h}.$$

All identities are identities of almost-everywhere classes
([[def-l-p-space-as-a-quotient-by-null-functions]]), and the proof uses no
choice beyond the Sobolev interfaces.

## Facts & Assumptions

**Given:** Countable Choice; an open set $\Omega\subseteq\mathbb R^n$, $n\ge1$; $u,v\in L^1_{\mathrm{loc}}(\Omega;\mathbb K)$; $h\ne0$ and $i\in\{1,\dots,n\}$; the shrunken sets $\Omega_{i,h}$ and $\Omega_{i,-h}=\Omega_{i,h}+he_i$; and the assumption that the integrals displayed in (i) converge absolutely whenever that form is applied.

[F1] $\delta_h^iu=(u(\cdot+he_i)-u)/h$ on $\Omega_{i,h}$, and the published translation satisfies $\tau_hu(x)=u(x-h)$, so $u(x+he_i)=(\tau_{-he_i}u)(x)$ and the forward-value notation used below is $w_+(x):=w(x+he_i)=(\tau_{-he_i}w)(x)$. ([[def-first-difference-quotient]], [[def-translation-of-a-function-on-rn]])

[F2] $T(x):=x+he_i$ is a $C^1$ diffeomorphism of $\mathbb R^n$ onto itself with $\det DT(x)=1$ for every $x$, and under Countable Choice the change-of-variables formula $\int_{\Omega_{i,h}}f(T(x))\,dx=\int_{\Omega_{i,-h}}f(y)\,dy$ holds for every $f\in L^1(\Omega_{i,-h})$, because $T(\Omega_{i,h})=\Omega_{i,-h}$. ([[cor-c-one-change-of-variables-for-l-one-functions]])

[F3] Hölder's inequality: for $1\le p\le\infty$ with $1/p+1/p'=1$ and $f\in L^p(\Omega)$, $g\in L^{p'}(\Omega)$, the product $fg$ is in $L^1(\Omega)$ and $\int_\Omega|fg|\,dx\le\|f\|_{L^p(\Omega)}\|g\|_{L^{p'}(\Omega)}$. ([[def-conjugate-exponents]], [[thm-holder-inequality-for-integrals]])

[F4] If $w\in L^1_{\mathrm{loc}}(\Omega)$ has weak derivative $D^\alpha w\in L^1_{\mathrm{loc}}(\Omega)$, then for every $\varphi\in C_c^\infty(\Omega)$, $\int_\Omega w\,D^\alpha\varphi\,dx=(-1)^{|\alpha|}\int_\Omega D^\alpha w\,\varphi\,dx$; weak differentiation is linear in $w$. ([[def-weak-derivative-of-a-locally-integrable-function]])

## Proof

**Proof technique:** direct.

1.1 The map $T(x)=x+he_i$ is a bijection from $\Omega_{i,h}$ onto $\Omega_{i,-h}$: if $x\in\Omega_{i,h}$ then $y:=x+he_i$ satisfies $y\in\Omega$ and $y-he_i=x\in\Omega$, so $y\in\Omega_{i,-h}$; conversely, if $y\in\Omega_{i,-h}$ then $x:=y-he_i$ satisfies $x\in\Omega$ and $x+he_i=y\in\Omega$, so $x\in\Omega_{i,h}$, and the two passages are inverse to each other. Hence by [F2], for every $f\in L^1(\Omega_{i,-h})$, $$\int_{\Omega_{i,h}}f(x+he_i)\,dx=\int_{\Omega_{i,-h}}f(y)\,dy.$$ [F2, algebra]

1.2 For $x\in\Omega_{i,h}$ write $u_+=u(x+he_i)$ and $v_+=v(x+he_i)$. The algebraic identity $$u_+v_+-uv=(u_+-u)v+u_+(v_+-v)=(u_+-u)v_++u(v_+-v)$$ holds pointwise at every $x$ where the four values are finite, hence almost everywhere on $\Omega_{i,h}$; dividing by $h$ and reading $u_+=(\tau_{-he_i}u)(x)$ and $v_+=(\tau_{-he_i}v)(x)$ gives both displayed forms of the product rule (ii). [F1, algebra]

2.1 Applying step 1.1 to $f:=u\,\tau_{he_i}v$, whose class lies in $L^1(\Omega_{i,-h})$ under the absolute-convergence hypothesis, gives $$\int_{\Omega_{i,h}}u(x+he_i)\,v(x)\,dx=\int_{\Omega_{i,-h}}u(y)\,v(y-he_i)\,dy=\int_{\Omega_{i,-h}}u\,(\tau_{he_i}v)\,dy,$$ because $f(x+he_i)=u(x+he_i)v(x)$ and $f(y)=u(y)v(y-he_i)$. Since $\delta_h^iu=(u_+-u)/h$ and $\delta_{-h}^iv=(v-\tau_{he_i}v)/h$, and $\delta_h^iu\,v=(u_+v-uv)/h$, splitting the first integral and using the displayed identity for its translated part yields the two-domain formula $$\int_{\Omega_{i,h}}\delta_h^iu\,v\,dx=\frac1h\Big(\int_{\Omega_{i,-h}}u\,\tau_{he_i}v\,dy-\int_{\Omega_{i,h}}uv\,dx\Big)=-\int_{\Omega_{i,-h}}u\,\delta_{-h}^iv\,dx+\frac1h\Big(\int_{\Omega_{i,-h}}uv\,dx-\int_{\Omega_{i,h}}uv\,dx\Big).$$ [F1, step 1.1, algebra, given]

2.2 Translation commutes with weak differentiation. Let $w\in L^1_{\mathrm{loc}}(\Omega)$ have $D^\alpha w\in L^1_{\mathrm{loc}}(\Omega)$. For $\varphi\in C_c^\infty(\Omega_{i,h})$ the function $\varphi(\cdot-he_i)$ lies in $C_c^\infty(\Omega_{i,-h})$, since $\operatorname{supp}\varphi+he_i\subseteq\Omega_{i,-h}$; step 1.1 applied to the integrable functions $w\,\tau_{he_i}\varphi$ and $D^\alpha w\,\tau_{he_i}\varphi$ gives $$\int_{\Omega_{i,h}}w(x+he_i)\,D^\alpha\varphi(x)\,dx=\int_{\Omega_{i,-h}}w(y)\,D^\alpha\big(\varphi(\cdot-he_i)\big)(y)\,dy=(-1)^{|\alpha|}\int_{\Omega_{i,-h}}D^\alpha w(y)\,\varphi(y-he_i)\,dy=(-1)^{|\alpha|}\int_{\Omega_{i,h}}\big(D^\alpha w\big)(x+he_i)\,\varphi(x)\,dx,$$ by [F4] applied on the open set $\Omega_{i,-h}$, whose test function $\varphi(\cdot-he_i)$ is compactly supported there. Hence $D^\alpha(\tau_{-he_i}w)=\tau_{-he_i}(D^\alpha w)$ weakly on $\Omega_{i,h}$. [F2, F4, step 1.1, algebra]

3.1 The correction term in step 2.1 vanishes whenever $\int_{\Omega_{i,h}}uv=\int_{\Omega_{i,-h}}uv$. If $uv=0$ a.e. outside $\Omega_{i,h}\cap\Omega_{i,-h}$, then both integrals equal $\int_{\Omega_{i,h}\cap\Omega_{i,-h}}uv$, so this holds; and if $uv$ has compact support in $\Omega$ with $|h|<\operatorname{dist}(\operatorname{supp}(uv),\partial\Omega)$, then every $x\in\operatorname{supp}(uv)$ satisfies $\operatorname{dist}(x,\partial\Omega)>|h|$, hence $x+he_i\in\Omega$ and $x-he_i\in\Omega$, so $\operatorname{supp}(uv)\subseteq\Omega_{i,h}\cap\Omega_{i,-h}$ and again both integrals equal $\int_\Omega uv$. If $\Omega_{i,h}=\Omega_{i,-h}$ the two integrals are literally the same. For $\Omega=\mathbb R^n$ one has $\Omega_{i,h}=\Omega_{i,-h}=\mathbb R^n$. If $1\le p<\infty$, translation invariance from step 1.1 applied to $|u|^p$ gives $\|u(\cdot+he_i)\|_{L^p}=\|u\|_{L^p}$ and hence $\|\delta_h^iu\|_{L^p}\le 2\|u\|_{L^p}/|h|$. If $p=\infty$, the measure-preserving translation in [F2] preserves null sets: applying its change-of-variables identity to indicators of null superlevel sets shows $\|u(\cdot+he_i)\|_{L^\infty}=\|u\|_{L^\infty}$, and the triangle inequality gives the same difference-quotient bound in $L^\infty$. In either case, Hölder's inequality [F3] makes both sides of the identity in step 2.1 absolutely convergent for $u\in L^p$ and $v\in L^{p'}$. [F1, F2, F3, step 2.1, algebra]

4.1 By step 2.2 applied to $w:=u$, and by linearity of weak differentiation [F4], $$D^\alpha(\delta_h^iu)=\frac1h\Big(D^\alpha(\tau_{-he_i}u)-D^\alpha u\Big)=\frac1h\Big(\tau_{-he_i}(D^\alpha u)-D^\alpha u\Big)=\delta_h^i(D^\alpha u)\qquad\text{weakly on }\Omega_{i,h}.$$ Together with steps 2.1 and 3.1 and the product rule of step 1.2 this proves (i)-(iii). [F1, F4, step 2.2, algebra] ∎

## Source notes

Hunter's Proposition 4.52 (printed pp. 124-125) states the three properties on $\mathbb R^n$ (his parts (1)-(3)) with the forward-value notation $u^h_i(x)=u(x+he_i)$; the two-domain correction term in (i) is the additional bookkeeping needed to read the identity on an arbitrary open set, and the published change-of-variables corollary supplies the substitution. Laugesen's identity (5.6) and the surrounding remarks (printed pp. 108-110) record the same calculus in the localized form used in the interior estimate. The scaffold's second product rule equality "$\delta_h^i(uv)=(\delta_h^iu)v+u(\delta_h^iv)$" was repaired to the two correct shifted forms above; the counterpart repair for the cutoff commutator is carried out in [[lem-cutoff-difference-quotient-commutator-estimate]].
