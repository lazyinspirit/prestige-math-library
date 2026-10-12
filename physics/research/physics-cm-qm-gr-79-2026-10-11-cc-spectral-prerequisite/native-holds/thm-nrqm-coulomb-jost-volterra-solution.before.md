---
id: thm-nrqm-coulomb-jost-volterra-solution
aliases: [nrqm-coulomb-coulomb-jost-volterra-solution]
kind: theorem
domain: mathematics
title: "Coulomb Jost Volterra solution"
status: draft
origin: pipeline
dependency_level: 8
deps: [thm-nrqm-coulomb-transported-radial-endpoint-realization, thm-nrqm-coulomb-kummer-recurrence-and-termination, thm-nrqm-coulomb-infinitesimal-kinetic-bound, lem-nrqm-coulomb-three-dimensional-hardy-bound, thm-nrqm-intervals-regular-ivp-parameter-series, thm-gronwall-integral-inequality, thm-banach-fixed-point, thm-tonelli-and-fubini-for-completed-product-measures, def-complex-exponential, thm-derivative-of-exponential, cor-complex-trigonometric-and-hyperbolic-derivatives, thm-algebra-of-derivatives, def-derivative, def-continuity-real, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces, cor-cauchy-schwarz-inequality-for-l-two, def-l-p-space-as-a-quotient-by-null-functions, def-complex-lp-and-euclidean-test-function-conventions, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  thm-nrqm-coulomb-transported-radial-endpoint-realization: mathematical-premise
  thm-nrqm-coulomb-kummer-recurrence-and-termination: mathematical-premise
  thm-nrqm-coulomb-infinitesimal-kinetic-bound: mathematical-premise
  lem-nrqm-coulomb-three-dimensional-hardy-bound: mathematical-premise
  thm-nrqm-intervals-regular-ivp-parameter-series: mathematical-premise
  thm-gronwall-integral-inequality: mathematical-premise
  thm-banach-fixed-point: mathematical-premise
  thm-tonelli-and-fubini-for-completed-product-measures: mathematical-premise
  def-complex-exponential: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  cor-complex-trigonometric-and-hyperbolic-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-derivative: mathematical-premise
  def-continuity-real: mathematical-premise
  thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-complex-lp-and-euclidean-test-function-conventions: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "NIST Digital Library of Mathematical Functions, §13.2 'Definitions and Basic Properties' (Kummer's equation and its standard solutions), used for the regular power-series solution of the radial equation"
      url: "https://dlmf.nist.gov/13.2"
    - title: "NIST Digital Library of Mathematical Functions, §33.2 'Definitions and Basic Properties' (Coulomb wave equation; regular solution F_l, irregular solutions G_l, H_l^+/-; §33.2(iv) Wronskians and cross-products) and §33.10(i) (limiting forms for large ρ, the Coulomb Jost asymptotics)"
      url: "https://dlmf.nist.gov/33.2"
---

## Statement

Assume the Axiom of Countable Choice and the Axiom of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]). Let $\gamma\ge0$, $l\ge0$,
and let $A_l$ be the radial operator of
[[thm-nrqm-coulomb-transported-radial-endpoint-realization]] with form domain
$V_l$. Fix $k_{\min}>0$ and let $K:=\{k\in\mathbb C:\operatorname{Re}k\ge k_{\min},\ \operatorname{Im}k\ge0\}$.
Then:

(a) *regular solution.* With $c_0:=1$, $c_{-1}:=0$ and
$$c_n:=-\frac{\gamma c_{n-1}+k^2c_{n-2}}{n(n+2l+1)}\qquad(n\ge1),$$
the series $\varphi_l(k,r):=r^{l+1}\sum_{n\ge0}c_nr^n$ converges for every $r>0$ and every $k\in\mathbb C$, the function $(k,r)\mapsto\varphi_l(k,r)$ is holomorphic in $k$ and $C^\infty$ in $r>0$, and $\varphi_l$ solves $-u''+\bigl(l(l+1)/r^2-\gamma/r\bigr)u=k^2u$ with $\varphi_l(k,r)/r^{l+1}\to1$ as $r\downarrow0$;

(b) *Jost-type solution.* Put $a:=\gamma/(2k)$, $\theta(r):=kr+a\log r$, $w(r):=e^{i\theta(r)}$, $b:=a^2+l(l+1)+ia$ and consider the integral equation
$$v(r)=1+\int_r^\infty\frac{b}{s^2}\,w(s)^2\Bigl(\int_r^sw(y)^{-2}dy\Bigr)v(s)\,ds .$$
For every $k\in K$ with $k\ne0$ the equation has exactly one bounded solution $v(\cdot;k)$ on $[r_0,\infty)$ for some $r_0>0$ depending on $k$, and $v(r)=1+O(1/r)$, $v'(r)=O(1/r)$; the functions $f_l(k,r):=w(r)v(r)$ and $v$ are continuous on $K$, holomorphic in $k$ for $\operatorname{Im}k>0$, satisfy the radial equation $-\partial_r^2f_l+\bigl(l(l+1)/r^2-\gamma/r\bigr)f_l=k^2f_l$ exactly, and obey the asymptotics
$$f_l=e^{i(kr+a\log r)}(1+O(1/r)),\qquad f_l'=ik\,e^{i(kr+a\log r)}+O(1/r)\qquad(r\to\infty);$$

(c) *Wronskians.* For real $k>0$ one has $W(\overline{f_l},f_l)=2ik$ and $W_l(k):=W(\varphi_l,f_l)\ne0$; consequently every solution of the radial equation on $(0,\infty)$ is $Af_l+B\overline{f_l}$ with $A,B\in\mathbb C$, and $\varphi_l$ is a nonzero complex multiple combination of $f_l,\overline{f_l}$;

(d) *no positive eigenvalue.* For real $k>0$ and $A,B\in\mathbb C$, if $g=Af_l+B\overline{f_l}$ then $\int_R^L|g(r)|^2dr=(|A|^2+|B|^2)(L-R)+O(1)$ as $L\to\infty$ with $R>r_0$ fixed; hence $g\in L^2(r_0,\infty)$ if and only if $A=B=0$, and $k^2>0$ is not an eigenvalue of $A_l$.

All assertions concern the ordinary differential equation and the operator
$A_l$; no scattering amplitude, cross-section or physical interpretation is
asserted or computed.

## Facts & Assumptions

**Given:** $\gamma\ge0$, $l\ge0$, $k_{\min}>0$, $K$ as above, and for $k\in K$ the quantities $a,\theta,w,b$; the radial equation $L_lu=k^2u$ with $L_lu:=-u''+(l(l+1)/r^2-\gamma/r)u$.

[F1] On any compact interval $[a,b]\subset(0,\infty)$ the radial equation has a two-dimensional space of $C^2$ solutions, and complex conjugation preserves the solution space because the coefficients are real ([[thm-nrqm-intervals-regular-ivp-parameter-series]], [[def-continuity-real]]).

[F2] The Wronskian $W(u,v)=uv'-u'v$ of two solutions of $-(u'')+qu=0$ with $q$ continuous is constant ([[thm-nrqm-intervals-regular-ivp-parameter-series]]).

[F3] Derivatives of exponential and logarithmic-type phases: $w'=i(k+a/r)w$, $w''=-[(k+a/r)^2+ia/r^2]w$ ([[def-complex-exponential]], [[thm-derivative-of-exponential]], [[cor-complex-trigonometric-and-hyperbolic-derivatives]], [[thm-algebra-of-derivatives]]).

[F4] Banach fixed point and Gronwall: the standard existence-uniqueness and a priori bound arguments for Volterra integral equations; integrals of continuous functions against continuous kernels may be interchanged ([[thm-banach-fixed-point]], [[thm-gronwall-integral-inequality]], [[thm-tonelli-and-fubini-for-completed-product-measures]]).

[F5] Cauchy-Schwarz in the forms $\bigl|\int f\overline g\bigr|\le\|f\|_2\|g\|_2$ and the finite-dimensional estimate on $\mathbb C^2$ ([[cor-cauchy-schwarz-inequality-for-l-two]], [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

[F6] Every eigenfunction $u\in D(A_l)$ of $A_l$ with $A_lu=Eu$, $E$ constant, is a $C^2$ solution of the radial equation on $(0,\infty)$ ([[thm-nrqm-coulomb-transported-radial-endpoint-realization]] (c)).

## Proof

1.1 [The regular solution] Let $C_0:=\max\{1,2\gamma,2|k|^2\}$; we claim $|c_n|\le C_0^n/n!$ for all $n\ge1$. Since $c_0=1$ and $c_1=-\gamma/(2l+2)$ with $|c_1|\le\gamma\le C_0$, and assuming the bound for $n-1,n-2$, the recurrence gives $|c_n|\le(\gamma C_0^{n-1}/(n-1)!+|k|^2C_0^{n-2}/(n-2)!)/(n(n+2l+1))\le C_0^n/n!$ because $\gamma C_0^{-1}+|k|^2C_0^{-2}\cdot(n-1)\le1/2+1/2$ by the choice of $C_0$ (using $n(n+2l+1)\ge n(n-1)$ for the second term). Hence the series converges for every $r$ and every $k$, and its coefficients are polynomial in $k$, so $(k,r)\mapsto\varphi_l$ is holomorphic in $k$ and smooth in $r$. Inserting the series into the equation as in [[thm-nrqm-coulomb-kummer-recurrence-and-termination]] (coefficient substitution) shows that it solves the radial equation and $\varphi_l/r^{l+1}\to1$ at $0$; this is (a). [F4, given, algebra]

2.1 [The Volterra equation: kernel bound] Fix $k\in K$ with $k\ne0$, so that $k_{\min}\le|k|$, and take $r_0>0$ arbitrary. For $s\ge y$ one has $2\operatorname{Im}a=-\gamma\operatorname{Im}k/|k|^2\le0$ and $\operatorname{Im}k\ge0$, so both factors on the right of $|w(s)^2w(y)^{-2}|=\exp(-2\operatorname{Im}k(s-y))(s/y)^{2\operatorname{Im}a}$ are at most $1$; hence $|w(s)^2w(y)^{-2}|\le1$. Integrating $w(y)^{-2}$ by parts with $\frac{d}{dy}w(y)^{-2}=-2i(k+a/y)w(y)^{-2}$ (from [F3]) gives $\int_r^sw(y)^{-2}dy=-\frac{w(s)^{-2}}{2i(k+a/s)}+\frac{w(r)^{-2}}{2i(k+a/r)}+\frac{1}{2i}\int_r^sw(y)^{-2}\frac{d}{dy}\bigl[(k+a/y)^{-1}\bigr]dy$, and the last integrand is $O(y^{-2})$ in absolute value uniformly; hence $\bigl|w(s)^2\int_r^sw(y)^{-2}dy\bigr|\le k_{\min}^{-1}+C\int_r^sy^{-2}dy\le C'$ for all $s\ge r\ge r_0$. Therefore the kernel $R(r,s):=\frac{b}{s^2}w(s)^2\int_r^sw(y)^{-2}dy$ satisfies $|R(r,s)|\le C''/s^2$ for all $s\ge r\ge r_0$. [step 1.1, F3, given, algebra]

3.1 [Existence and uniqueness of the bounded solution] On the Banach space $B_{r_0}$ of bounded continuous complex functions on $[r_0,\infty)$ with the supremum norm, the operator $(Tv)(r):=1+\int_r^\infty R(r,s)v(s)ds$ is well defined by step 2.1 ($\int_r^\infty C s^{-2}ds\le C/r$) and is a contraction on a small interval $[r_0',\infty)$ after one iteration in the standard Volterra manner: $|Tv-Tu|(r)\le\int_r^\infty C s^{-2}|v-u|(s)ds$, so $\|Tv-Tu\|_\infty\le(C/r_0')\|v-u\|_\infty$, and for $r_0'\ge2C$ the map is a contraction; by [F4] there is a unique fixed point $v$, and the same estimate gives $v(r)=1+O(1/r)$ and, differentiating the equation and using $|R|\le C/s^2$ again, $v'(r)=O(1/r)$. [step 2.1, F4, given, algebra]

4.1 [The solution and its asymptotics] Let $v$ be the fixed point of step 3.1 and put $I(r):=\int_r^\infty w(s)^2v(s)s^{-2}ds$, so that the equation reads $v(r)=1+bI(r)$. Differentiating under the integral (legitimate by [F4] and the bound of step 2.1) gives $v'(r)=-b\,w(r)^{-2}I(r)$ because the boundary term at $s=r$ vanishes, and differentiating again with $I'(r)=-w(r)^2v(r)r^{-2}$ gives $v''(r)=-2i(k+a/r)v'(r)+\frac{b}{r^2}v(r)$: indeed $\frac{d}{dr}w(r)^{-2}=-2i(k+a/r)w(r)^{-2}$. With $f_l=wv$ and [F3], $f_l''=w''v+2w'v'+wv''=\bigl[-(k+a/r)^2-ia/r^2\bigr]wv+2i(k+a/r)wv'+w\bigl[-2i(k+a/r)v'+b v/r^2\bigr]=\bigl[-k^2-2ka/r+(-a^2-ia+b)/r^2\bigr]f_l$, and $-2ka=-\gamma$, $-a^2-ia+b=l(l+1)$ by the definition of $b$; hence $f_l''=\bigl[l(l+1)/r^2-\gamma/r-k^2\bigr]f_l$, the radial equation. The asymptotics of $f_l$ follow from $v=1+O(1/r)$ and those of $f_l'$ from $f_l'=i(k+a/r)wv+wv'$. Continuity in $k$ on $K$ and holomorphy for $\operatorname{Im}k>0$ follow from those of the kernel $R$ by dominated Morera, and the solution extends backwards to $r>0$ by the linear initial-value theory [F1]. This is (b). [step 3.1, F1, F3, F4, algebra]

5.1 [Wronskians] For real $k$, with $f_l=wv$, $f_l'=i(k+a/r)wv+wv'$ and $\overline{w}w=1$ one computes $W(\overline{f_l},f_l)=\overline{f_l}f_l'-\overline{f_l'}f_l=2i(k+a/r)|v|^2+2i\operatorname{Im}(\overline vv')=2ik+O(1/r)$ as $r\to\infty$ by the asymptotics of step 4.1; the left side is constant by [F2], so $W(\overline{f_l},f_l)=2ik\ne0$. If $W(\varphi_l,f_l)=0$, then $\varphi_l$ and $f_l$ are linearly dependent (two solutions with zero Wronskian), so $f_l=c\varphi_l$ with $\varphi_l$ real (its coefficients are real); then $\overline{f_l}f_l'-\overline{f_l'}f_l=|c|^2(\varphi_l\varphi_l'-\varphi_l'\varphi_l)=0$, contradicting $2ik\ne0$. Hence $W_l(k)=W(\varphi_l,f_l)\ne0$, and since $f_l,\overline{f_l}$ are independent solutions ($W=2ik\ne0$) and the solution space is two-dimensional [F1], every solution is $Af_l+B\overline{f_l}$; in particular $\varphi_l=Af_l+B\overline{f_l}$ with $A,B$ not both zero. This is (c). [step 4.1, F1, F2, given, algebra]

6.1 [No positive eigenvalue] Let $g=Af_l+B\overline{f_l}$ with $A,B\in\mathbb C$ and real $k>0$. From the asymptotics of step 4.1, $|f_l(r)|^2=|v(r)|^2=1+O(1/r)$ and $f_l(r)^2=e^{2i(kr+a\log r)}v(r)^2$, so $|g|^2=|A|^2|f_l|^2+|B|^2|\overline{f_l}|^2+2\operatorname{Re}(A\overline Bf_l^2)=(|A|^2+|B|^2)(1+O(1/r))+2\operatorname{Re}(A\overline Be^{2i\theta(r)}v(r)^2)$. Since $\theta'(r)=k+a/r\ge k>0$ and $\theta''(r)=-a/r^2$ is integrable on $[R,\infty)$, integration by parts bounds $\int_R^Le^{2i\theta(r)}v(r)^2dr$ uniformly in $L$ (the derivative in the exponent is bounded below, and the derivative of $v^2$ is $O(1/r)$); hence $\int_R^L|g|^2dr=(|A|^2+|B|^2)(L-R)+O(1)$ as $L\to\infty$. If $g\in L^2(R,\infty)$, the left-hand side is bounded in $L$, so $|A|^2+|B|^2=0$; hence $g=0$. Consequently $k^2>0$ is not an eigenvalue of $A_l$: an eigenvector $u\in D(A_l)$ with $A_lu=k^2u$ would be a solution of the radial equation on $(0,\infty)$ by [F6], hence equal to $Af_l+B\overline{f_l}$ by (c) and therefore zero by the previous sentence. Finally $\varphi_l$, being a nonzero solution on $(0,\infty)$ by (a), is not of the form $g$ with $A=B=0$, so $\varphi_l\notin L^2$. This is (d). [step 5.1, F5, F6, given, algebra]

7.1 [Conclusion] Clauses (a), (b), (c), (d) are steps 1.1, 2.1 and 3.1 and 4.1, 5.1, and 6.1. [step 1.1, step 2.1, step 3.1, step 4.1, step 5.1, step 6.1] ∎
