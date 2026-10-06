---
id: "lem-one-dimensional-trace-truncation-compatibility"
kind: "lemma"
title: "Endpoint trace commutes with Sobolev truncation on an interval"
status: draft
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 0
deps:
  - "cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn"
  - "cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives"
  - "cor-positive-negative-part-and-truncation-calculus-in-w-one-p"
  - "def-axiom-of-choice"
  - "def-sobolev-space-wkp-and-its-norm"
  - "def-wkp-zero-as-a-sobolev-closure"
  - "lem-bounded-restriction-and-cutoff-localisation-in-sobolev-spaces"
  - "lem-classical-derivatives-are-weak-derivatives"
  - "lem-compact-support-zero-extension-in-wkp"
  - "lem-one-dimensional-sobolev-endpoint-estimate"
  - "lem-scaled-euclidean-bumps-with-compact-support-and-gradient-bound"
  - "lem-test-function-cutoffs-and-euclidean-localization"
  - "lem-weak-derivative-linearity-locality-and-commutation"
  - "lem-weak-leibniz-rule-with-a-smooth-factor"
  - "thm-algebra-of-derivatives"
  - "thm-chain-rule"
  - "thm-dominated-convergence"
  - "thm-holder-inequality-for-integrals"
  - "thm-lebesgue-measure-of-a-box-of-every-kind"
  - "thm-tonelli-theorem-for-sigma-finite-product-spaces"
proof_strategy: "direct"
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (2011)"
      url: "https://www.math.utoronto.ca/almut/Brezis.pdf"
      locator: "Chapter 8, sections 8.2-8.3: one-dimensional absolutely continuous representatives, absolute value and truncation, and the identification ker T = W_0^{1,p}(I). Existing library supplier references; no new full-text fetch claimed."
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $I=(a,b)$ with $-\infty<a<b<\infty$, let $1\le p<\infty$, and let $u\in W^{1,p}(I;\mathbb R)$ ([[def-sobolev-space-wkp-and-its-norm]]). Let $u^*$ be its unique absolutely continuous representative on $[a,b]$ ([[cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives]]) and put $Tu:=(u^*(a),u^*(b))\in\mathbb R^2$, ordered componentwise. Then:

1. $T$ is well defined, linear and bounded, and $\ker T=W_0^{1,p}(I)$ ([[def-wkp-zero-as-a-sobolev-closure]]).
2. For every $k\in\mathbb R$ the function $(u-k)^+$ belongs to $W^{1,p}(I)$, and $T\bigl((u-k)^+\bigr)=(Tu-k)^+$ componentwise; moreover $(u-k)^+\in W_0^{1,p}(I)$ if and only if $Tu\le(k,k)$ componentwise. In particular $T(u^+)=(Tu)^+$, $T(u^-)=(Tu)^-$ and $T|u|=|Tu|$.

## Facts & Assumptions

**Given:** An interval $I=(a,b)$ with finite endpoints, an exponent $1\le p<\infty$, a class $u\in W^{1,p}(I;\mathbb R)$ with weak derivative $u'$, its unique absolutely continuous representative $u^*$ on $[a,b]$, the trace pair $Tu=(u^*(a),u^*(b))$, and a real number $k$.

[A1] [[def-axiom-of-choice]]: the Axiom of Choice, consumed only through the cited suppliers that assume it or Countable Choice.

[F1] [[cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives]]: for $u\in W^{1,p}(I)$ there is exactly one continuous locally absolutely continuous representative $u^*$ of the class, and on a bounded interval it extends uniquely to an absolutely continuous function on $[a,b]$ with $u^*(x)=u^*(a)+\int_a^x u'$ for $x\in[a,b]$; in particular $u^*(x)-u^*(y)=\int_y^x u'$ for all $x,y\in[a,b]$.

[F2] [[lem-one-dimensional-sobolev-endpoint-estimate]]: with $\varepsilon=(b-a)/2$ one has $|u^*(a)|\le C_p(a,b)\|u\|_{W^{1,p}}$ and $|u^*(b)|\le C_p(a,b)\|u\|_{W^{1,p}}$, where $C_p(a,b)<\infty$ is the explicit constant of that estimate (for $1<p<\infty$ the $p$-th powers obey the displayed bound with $2^{p-1}\bigl(\varepsilon^{-1}\int_a^{a+\varepsilon}|u^*|^p+\varepsilon^{p-1}\int_a^{a+\varepsilon}|u'|^p\bigr)$, for $p=1$ the unsquared bound).

[F3] [[def-sobolev-space-wkp-and-its-norm]], [[def-wkp-zero-as-a-sobolev-closure]]: $W^{1,p}(I)$ consists of $L^p$ classes with $L^p$ weak derivatives, and $W_0^{1,p}(I)$ is the closure of $C_c^\infty(I)$ in the $W^{1,p}$ norm; in particular $W_0^{1,p}(I)$ is closed in $W^{1,p}(I)$.

[F4] [[lem-weak-derivative-linearity-locality-and-commutation]]: weak differentiation is linear.

[F5] [[lem-classical-derivatives-are-weak-derivatives]], [[thm-lebesgue-measure-of-a-box-of-every-kind]]: a $C^1$ function on $I$ has its classical derivative as weak derivative; the interval $I=(a,b)$ is a box with finite Lebesgue measure, so the constant function $1$ lies in $L^p(I)$ and hence in $W^{1,p}(I)$ with weak derivative $0$, the classical derivative of the constant.

[F6] [[cor-positive-negative-part-and-truncation-calculus-in-w-one-p]]: for a real class $w\in W^{1,p}(I)$ the classes $w^+=\max\{w,0\}$ and $w^-=\max\{-w,0\}$ lie in $W^{1,p}(I)$ with $Dw^+=1_{\{w>0\}}Dw$ and $Dw^-=-1_{\{w<0\}}Dw$ a.e.

[F7] [[lem-scaled-euclidean-bumps-with-compact-support-and-gradient-bound]], [[thm-chain-rule]], [[thm-algebra-of-derivatives]]: in dimension one there is a fixed smooth bump $b_0$ with $0\le b_0\le1$, $b_0=1$ on $[-1,1]$ and $\operatorname{supp}b_0\subseteq(-2,2)$; by the chain rule the rescalings $x\mapsto b_0((x-c)/r)$ and $x\mapsto b_0((c-x)/r)$ are smooth with derivatives $\pm r^{-1}b_0'((x-c)/r)$ and $\mp r^{-1}b_0'((c-x)/r)$, so these derivatives are bounded in absolute value by $\|b_0'\|_\infty/r$, and products of such rescalings obey the product rule.

[F8] [[thm-holder-inequality-for-integrals]]: for $1<p<\infty$, $\int_a^x|u'|\le(x-a)^{1-1/p}\bigl(\int_a^x|u'|^p\bigr)^{1/p}$ for $x\in(a,b)$, and for $p=1$ the left-hand side is itself $\int_a^x|u'|^1$; the reflected estimate holds on $(x,b)$.

[F9] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-dominated-convergence]]: iterated integrals of nonnegative measurable functions on the finite-measure product $(a,b)\times(a,b)$ may be interchanged, and pointwise convergent dominated families have convergent integrals.

[F10] [[lem-weak-leibniz-rule-with-a-smooth-factor]]: for $u\in W^{1,p}(I)$ and $\eta\in C_c^\infty(I)$ one has $\eta u\in W^{1,p}(I)$ with $D(\eta u)=\eta' u+\eta u'$; also $|b_0'|$ is bounded on the compact support of $b_0$.

[F11] [[lem-compact-support-zero-extension-in-wkp]], [[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]]: a class in $W^{1,p}(I)$ vanishing a.e. outside a compact subset of $I$ extends by zero to a class in $W^{1,p}(\mathbb R)$ with the same norm, and $C_c^\infty(\mathbb R)$ is dense in $W^{1,p}(\mathbb R)$ for $p<\infty$.

[F12] [[lem-bounded-restriction-and-cutoff-localisation-in-sobolev-spaces]]: restriction to an open subset is a contraction on $W^{1,p}$, and multiplication by a fixed $\psi\in C_c^\infty(I)$ is bounded on $W^{1,p}(I)$ with a constant depending only on finitely many sup norms of derivatives of $\psi$.

[F13] [[lem-test-function-cutoffs-and-euclidean-localization]]: for compact $K\subseteq I$ there is $\psi\in C_c^\infty(I)$ with $0\le\psi\le1$ and $\psi=1$ on a neighbourhood of $K$; the construction is choice-free.

## Proof

**Proof technique:** direct.

**Given:** An interval $I=(a,b)$ with finite endpoints, $1\le p<\infty$, a class $u\in W^{1,p}(I;\mathbb R)$ with weak derivative $u'$, its absolutely continuous representative $u^*$ on $[a,b]$, the pair $Tu=(u^*(a),u^*(b))$, and $k\in\mathbb R$.

1.1 (Well-definedness of $T$) By [F1] the class $u$ has exactly one continuous locally absolutely continuous representative, it extends uniquely to an absolutely continuous function $u^*$ on $[a,b]$, and its endpoint values are determined by the class; hence $T$ is well defined, and [F1] also gives $u^*(x)=u^*(a)+\int_a^x u'$ for every $x\in[a,b]$. [given, F1, A1]

1.2 (Norm estimate) With $\varepsilon=(b-a)/2$, [F2] bounds $|u^*(a)|$ and $|u^*(b)|$ by $C_p(a,b)\|u\|_{W^{1,p}}$, hence $\|Tu\|_{\mathbb R^2}\le\sqrt2 C_p(a,b)\|u\|_{W^{1,p}}$ for every $u$. [given, F2]

1.3 (Linearity) For $u,v\in W^{1,p}(I)$ the class $u+v$ has weak derivative $u'+v'$ by [F4], and $u^*+v^*$ is continuous and absolutely continuous; by the uniqueness clause of [F1] it is the representative of $u+v$, so $(u+v)^*=u^*+v^*$ and $T(u+v)=Tu+Tv$; for $c\in\mathbb R$ the class $cu$ has weak derivative $cu'$ and representative $cu^*$ by [F1] and [F4], so $T(cu)=cTu$; hence $T$ is linear. [given, F1, F4]

1.4 (Truncation membership) The constant function $k$ lies in $W^{1,p}(I)$ with weak derivative $0$ by [F5], so $w:=u-k$ lies in $W^{1,p}(I)$ with weak derivative $u'$ by [F4]; by [F6] the classes $w^+=\max\{w,0\}$ and $w^-=\max\{-w,0\}$ lie in $W^{1,p}(I)$ with $Dw^+=1_{\{w>0\}}u'$ and $Dw^-=-1_{\{w<0\}}u'$ a.e.; in particular $(u-k)^+\in W^{1,p}(I)$. [given, F4, F5, F6]

2.1 (Endpoint values of the truncated class) Apply [F1] to the class $w^+$ of step 1.4: it has a unique continuous representative $w^*$ on $[a,b]$, absolutely continuous, with $w^*(x)=w^*(a)+\int_a^x Dw^+$. The continuous function $x\mapsto(u^*(x)-k)^+$ on $[a,b]$ is a representative of $w^+$ because $u^*-k$ represents $u-k$ and the positive part is well defined on a.e. classes [F6]; two continuous representatives of one class agree on the dense interval $(a,b)$, hence by continuity on all of $[a,b]$. Therefore $T(w^+)=\bigl((u^*(a)-k)^+,(u^*(b)-k)^+\bigr)=\bigl((Tu-k)^+\bigr)$ componentwise. [step 1.4, F1, F6]

2.2 ($W_0^{1,p}\subseteq\ker T$) Each $\varphi\in C_c^\infty(I)$, extended by zero, is its own absolutely continuous representative with $\varphi(a)=\varphi(b)=0$, so $T\varphi=0$ by [F1]; by step 1.2 the map $T$ is bounded, hence continuous, and by [F3] the space $W_0^{1,p}(I)$ is the closure of $C_c^\infty(I)$, so $T$ vanishes on all of $W_0^{1,p}(I)$. [step 1.2, F1, F3]

2.3 (Endpoint decay when $Tu=0$) Assume $Tu=0$, so $u^*(a)=u^*(b)=0$. For $x\in(a,b)$, [F1] gives $u^*(x)=u^*(a)+\int_a^x u'=\int_a^x u'$ and, symmetrically, $u^*(x)=u^*(b)-\int_x^b u'=-\int_x^b u'$; hence $|u^*(x)|\le\int_a^x|u'|$ and $|u^*(x)|\le\int_x^b|u'|$. For $p>1$ [F8] turns this into $|u^*(x)|^p\le(x-a)^{p-1}\int_a^x|u'|^p$ and $|u^*(x)|^p\le(b-x)^{p-1}\int_x^b|u'|^p$, with the same inequalities for $p=1$ since $(x-a)^0=(b-x)^0=1$. [step 1.1, F1, F8, algebra]

3.1 (Cutoffs and convergence to $u$) Assume $Tu=0$ and fix $0<\delta<(b-a)/4$. Let $b_0$ be the bump of [F7] and put $\eta_\delta(x):=1-b_0((x-a)/\delta)$, $\rho_\delta(x):=1-b_0((b-x)/\delta)$, $\chi_\delta:=\eta_\delta\rho_\delta$. Then $0\le\chi_\delta\le1$, $\chi_\delta=1$ on $[a+2\delta,b-2\delta]$, $\chi_\delta=0$ on $[a,a+\delta]\cup[b-\delta,b]$, so $\operatorname{supp}\chi_\delta\subseteq[a+\delta,b-\delta]\subset I$, and the chain and product rules give $|\chi_\delta'|\le2M/\delta$ with $M:=\|b_0'\|_\infty<\infty$ [F7]. By [F10] $\chi_\delta u\in W^{1,p}(I)$ with $D(\chi_\delta u)=\chi_\delta'u+\chi_\delta u'$; moreover $\chi_\delta\to1$ pointwise on $I$, so dominated convergence [F9] gives $\|(1-\chi_\delta)u\|_p\to0$ and $\|(1-\chi_\delta)u'\|_p\to0$. For the remaining term, [F8] and step 2.3 give pointwise a.e. $|u^*|^p\le(x-a)^{p-1}\int_a^x|u'|^p$ on $(a,a+2\delta)$, so Tonelli [F9] yields $\int_a^{a+2\delta}|u^*|^p\le\frac{(2\delta)^p}{p}\int_a^{a+2\delta}|u'|^p$, and reflecting at $b$ the same bound holds on $(b-2\delta,b)$; consequently $\int_I|\chi_\delta'u|^p\le(2M/\delta)^p\int_{(a,a+2\delta)\cup(b-2\delta,b)}|u^*|^p\le\frac{(4M)^p}{p}\int_{(a,a+2\delta)\cup(b-2\delta,b)}|u'|^p\to0$ because the endpoint regions shrink to null sets and $|u'|^p$ is integrable [F9]. Hence $D(\chi_\delta u)\to u'$ in $L^p$ and $\chi_\delta u\to u$ in $L^p$, that is, $\chi_\delta u\to u$ in $W^{1,p}(I)$. [step 2.3, F7, F8, F9, F10, algebra]

4.1 (Each $\chi_\delta u$ lies in $W_0^{1,p}$) Fix $\delta$ as in step 3.1. Since $\chi_\delta u$ vanishes a.e. outside the compact set $[a+\delta,b-\delta]\subset I$, its zero extension $E_0(\chi_\delta u)$ lies in $W^{1,p}(\mathbb R)$ with equal norm by [F11], and by the density corollary there are $\varphi_j\in C_c^\infty(\mathbb R)$ with $\varphi_j\to E_0(\chi_\delta u)$ in $W^{1,p}(\mathbb R)$. By [F13] choose $\psi\in C_c^\infty(I)$ with $\psi=1$ on a neighbourhood of $[a+\delta,b-\delta]$; then $\psi\varphi_j\in C_c^\infty(I)$ and $\psi\varphi_j-\chi_\delta u$ is the restriction to $I$ of $\psi(\varphi_j-E_0(\chi_\delta u))$, so the multiplication and restriction bounds of [F12] give $\|\psi\varphi_j-\chi_\delta u\|_{W^{1,p}(I)}\le C_\psi\|\varphi_j-E_0(\chi_\delta u)\|_{W^{1,p}(\mathbb R)}\to0$. Thus $\chi_\delta u$ lies in the closure of $C_c^\infty(I)$, which is $W_0^{1,p}(I)$ by [F3]. [step 3.1, F3, F11, F12, F13]

5.1 ((i) concluded: $\ker T=W_0^{1,p}$) Steps 1.1-1.3 show that $T$ is well defined, linear and bounded (with the estimate of step 1.2); step 2.2 gives $W_0^{1,p}(I)\subseteq\ker T$. Conversely, if $Tu=0$, then step 3.1 exhibits $\chi_\delta u\to u$ in $W^{1,p}(I)$ with $\chi_\delta u\in W_0^{1,p}(I)$ for each $\delta$ by step 4.1; since $W_0^{1,p}(I)$ is closed in $W^{1,p}(I)$ [F3], $u\in W_0^{1,p}(I)$. Hence $\ker T=W_0^{1,p}(I)$. [step 1.2, step 2.2, step 4.1, F3]

6.1 (The truncation iff) Fix $k\in\mathbb R$. By step 2.1, $T\bigl((u-k)^+\bigr)=\bigl((Tu-k)^+\bigr)$; by step 5.1, $(u-k)^+\in W_0^{1,p}(I)$ exactly when this trace pair vanishes, that is, exactly when $(u^*(a)-k)^+=0$ and $(u^*(b)-k)^+=0$, equivalently $u^*(a)\le k$ and $u^*(b)\le k$, equivalently $Tu\le(k,k)$ componentwise; membership $(u-k)^+\in W^{1,p}(I)$ is step 1.4. [step 1.4, step 2.1, step 5.1]

7.1 (The particular identities and discharge) Taking $k=0$ in step 6.1 gives $T(u^+)=(Tu)^+$ and $u^+\in W_0^{1,p}(I)$ exactly when $Tu\le(0,0)$. Applying step 6.1 to the class $-u$, whose representative is $-u^*$ and whose trace pair is $-Tu$, gives $T\bigl((-u)^+\bigr)=(-Tu)^+=(Tu)^-$, that is $T(u^-)=(Tu)^-$; since $|u|=u^++u^-$, linearity of $T$ from step 1.3 gives $T|u|=T(u^+)+T(u^-)=(Tu)^++(Tu)^-=|Tu|$ componentwise. Steps 5.1, 6.1 and the present step prove all the assertions; the Axiom of Choice was used only through the representative interfaces [F1], the endpoint estimate [F2] and the truncation, extension, density and multiplication interfaces [F6, F11, F12], which assume it or Countable Choice [A1]. [step 1.3, step 5.1, step 6.1, A1] ∎ 