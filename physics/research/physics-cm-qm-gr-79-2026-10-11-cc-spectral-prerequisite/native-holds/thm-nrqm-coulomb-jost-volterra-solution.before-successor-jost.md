---
id: thm-nrqm-coulomb-jost-volterra-solution
aliases: [nrqm-coulomb-coulomb-jost-volterra-solution]
kind: theorem
domain: mathematics
title: "Coulomb Jost Volterra solution"
status: draft
origin: pipeline
dependency_level: 8
deps: [thm-morera-triangle-theorem, cor-locally-uniformly-convergent-holomorphic-series, thm-nrqm-coulomb-transported-radial-endpoint-realization, thm-nrqm-coulomb-kummer-recurrence-and-termination, thm-nrqm-coulomb-infinitesimal-kinetic-bound, lem-nrqm-coulomb-three-dimensional-hardy-bound, thm-nrqm-intervals-regular-ivp-parameter-series, thm-gronwall-integral-inequality, thm-banach-fixed-point, thm-tonelli-and-fubini-for-completed-product-measures, def-complex-exponential, thm-derivative-of-exponential, cor-complex-trigonometric-and-hyperbolic-derivatives, thm-algebra-of-derivatives, def-derivative, def-continuity-real, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces, cor-cauchy-schwarz-inequality-for-l-two, def-l-p-space-as-a-quotient-by-null-functions, def-complex-lp-and-euclidean-test-function-conventions, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  thm-morera-triangle-theorem: mathematical-premise
  cor-locally-uniformly-convergent-holomorphic-series: mathematical-premise
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
$$f_l=e^{i(kr+a\log r)}(1+O(1/r)),\qquad f_l'=e^{i(kr+a\log r)}[ik+O(1/r)]\qquad(r\to\infty);$$

(c) *Wronskians.* For real $k>0$ one has $W(\overline{f_l},f_l)=2ik$ and $W_l(k):=W(\varphi_l,f_l)\ne0$; consequently every solution of the radial equation on $(0,\infty)$ is $Af_l+B\overline{f_l}$ with $A,B\in\mathbb C$, and $\varphi_l$ is a nonzero complex multiple combination of $f_l,\overline{f_l}$;

(d) *no positive eigenvalue.* For real $k>0$ and $A,B\in\mathbb C$, if $g=Af_l+B\overline{f_l}$ then $\int_R^L|g(r)|^2dr=(|A|^2+|B|^2)[L-R-\gamma\log(L/R)/(2k^2)]+O(1)$ as $L\to\infty$ with $R>r_0$ fixed; hence $g\in L^2(r_0,\infty)$ if and only if $A=B=0$, and $k^2>0$ is not an eigenvalue of $A_l$.

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


[F7] A continuous function with zero contour integral on every triangle is holomorphic, and a locally uniformly convergent series of holomorphic functions is holomorphic with termwise derivatives ([[thm-morera-triangle-theorem]], [[cor-locally-uniformly-convergent-holomorphic-series]]).
## Proof

1.1 [The regular solution] On any compact set of $k$ choose $C\ge1$ with $C\ge\gamma$ and $C^2\ge|k|^2$. Induction on the recurrence gives $|c_n|\le C^n/n!$: the ratio of its bound to $C^n/n!$ is $[\gamma/C+|k|^2(n-1)/C^2]/(n+2l+1)\le n/(n+2l+1)\le1$, including $n=1$ with the absent second term. Thus the series and every fixed derivative converge uniformly on compact $(k,r)$-sets; polynomial coefficients and the uniform majorant give holomorphy in $k$. Direct coefficient substitution verifies the equation and $\varphi_l/r^{l+1}\to1$, uniformly on compact $k$-sets near $r=0$. [F1, F3, given, algebra]

1.2 [The Volterra kernel on a common tail] The exact modulus for $s\ge y$ is $|w(s)^2w(y)^{-2}|=\exp[-2\operatorname{Im}k(s-y)](s/y)^{-2\operatorname{Im}a}$, with $-2\operatorname{Im}a=\gamma\operatorname{Im}k/|k|^2$. Since $\log(s/y)\le(s-y)/y$, this modulus is at most one when $y\ge\gamma/(2|k|^2)$. On a compact subset of $K$ choose a common $r_0$ also satisfying $|a|/r_0\le|k|/2$. Then $|k+a/y|\ge|k|/2$ on the tail and the derivative of its inverse is $O(y^{-2})$, uniformly. Integration by parts using $(w^{-2})'=-2i(k+a/y)w^{-2}$ gives $|w(s)^2\int_r^s w(y)^{-2}dy|\le C$ and hence $|R(r,s)|\le C/s^2$. These estimates hold uniformly on compact $k$-sets, not by an incorrect sign in the power of $s/y$. [F3, given, algebra]

2.1 [Existence and uniqueness of the bounded solution] On the Banach space $B_{r_0}$ of bounded continuous complex functions on $[r_0,\infty)$ with the supremum norm, the operator $(Tv)(r):=1+\int_r^\infty R(r,s)v(s)ds$ is well defined by step 1.2 ($\int_r^\infty C s^{-2}ds\le C/r$) and is a contraction on a small interval $[r_0',\infty)$ after one iteration in the standard Volterra manner: $|Tv-Tu|(r)\le\int_r^\infty C s^{-2}|v-u|(s)ds$, so $\|Tv-Tu\|_\infty\le(C/r_0')\|v-u\|_\infty$, and for $r_0'\ge2C$ the map is a contraction; by [F4] there is a unique fixed point $v$, and the same estimate gives $v(r)=1+O(1/r)$ and, differentiating the equation and using $|R|\le C/s^2$ again, $v'(r)=O(1/r)$. [step 1.2, F4, given, algebra]

3.1 [Exact derivatives and parameter dependence] Retain the full double-integral fixed-point equation and put $I(r)=\int_r^\infty w(s)^2v(s)s^{-2}ds$. Its lower-limit boundary term is zero, so differentiating gives $v'=-b w(r)^{-2}I(r)$ and $v''=-2i(k+a/r)v'+bv/r^2$; the ratio estimate in step 1.2 gives $v'=O(r^{-1})$. With $f=wv$ the product rule yields $f''=[-k^2-\gamma/r+l(l+1)/r^2]f$, because $b=a^2+l(l+1)+ia$. Thus $f=w[1+O(r^{-1})]$ and $f'=w[ik+O(r^{-1})]$. On each compact parameter set, choose a common tail where the contraction constant is less than one; its uniformly convergent Picard iterates give continuity up to real $k$ by dominated convergence. On compact sets in the open upper half-plane the same kernel integrals are holomorphic by dominated contour integration; uniform Picard convergence gives holomorphy of $v$. Initial values at the common tail extend continuity by [F1]; holomorphy on each compact $r$-interval follows from the initial-value Volterra Picard series: its iterates are holomorphic by contour integration, and its iterated-integral bound has factorial decay on each compact parameter set, giving locally uniform convergence under [F7]. For nonreal $k\in K$, $f,f'$ decay exponentially times a fixed power, since $|w|=e^{-\operatorname{Im}k r}r^{-\operatorname{Im}a}$. [step 1.2, step 2.1, F1, F3, F4, F7, algebra]

4.1 [Wronskians] For real $k$, with $f_l=wv$, $f_l'=i(k+a/r)wv+wv'$ and $\overline{w}w=1$ one computes $W(\overline{f_l},f_l)=\overline{f_l}f_l'-\overline{f_l'}f_l=2i(k+a/r)|v|^2+2i\operatorname{Im}(\overline vv')=2ik+O(1/r)$ as $r\to\infty$ by the asymptotics of step 3.1; the left side is constant by [F2], so $W(\overline{f_l},f_l)=2ik\ne0$. If $W(\varphi_l,f_l)=0$, then $\varphi_l$ and $f_l$ are linearly dependent (two solutions with zero Wronskian), so $f_l=c\varphi_l$ with $\varphi_l$ real (its coefficients are real); then $\overline{f_l}f_l'-\overline{f_l'}f_l=|c|^2(\varphi_l\varphi_l'-\varphi_l'\varphi_l)=0$, contradicting $2ik\ne0$. Hence $W_l(k)=W(\varphi_l,f_l)\ne0$, and since $f_l,\overline{f_l}$ are independent solutions ($W=2ik\ne0$) and the solution space is two-dimensional [F1], every solution is $Af_l+B\overline{f_l}$; in particular $\varphi_l=Af_l+B\overline{f_l}$ with $A,B$ not both zero. This is (c). [step 3.1, F1, F2, given, algebra]

5.1 [The real-energy correction and absence of positive eigenvalues] For real $k>0$, write $J(r)=\int_r^\infty e^{2i\theta(s)}v(s)s^{-2}ds$, $h=v/r^2$ and $Q=2i\theta'$. The derivative identity gives initially $v'=O(r^{-1})$. Integration by parts gives $J=-e^{2i\theta(r)}h(r)/Q(r)-\int_r^\infty e^{2i\theta}(h/Q)'$, and $(h/Q)'=O(r^{-3})$, hence $J=O(r^{-2})$ and $v'=O(r^{-2})$. The ODE now gives $v''=O(r^{-2})$. A second integration by parts has $((h/Q)'/Q)'=O(r^{-4})$, so $J=-e^{2i\theta(r)}v(r)/(2i\theta'(r)r^2)+O(r^{-3})$. Therefore $v'=b/(2ik r^2)+O(r^{-3})$ and, integrating to $v(\infty)=1$, $v=1-b/(2ik r)+O(r^{-2})$. Since $-b/(2ik)=-a/(2k)+i(a^2+l(l+1))/(2k)$, $|f|^2=1-a/(kr)+O(r^{-2})$. Moreover $\int_R^L f^2$ is bounded uniformly in $L$: integration by parts in $e^{2i\theta}v^2$ uses $\theta'\ge k$, $\theta''=O(r^{-2})$, bounded $v$ and $v'=O(r^{-2})$, with an integrable differentiated amplitude. Expansion of $|Af+B\overline f|^2$ thus gives $(|A|^2+|B|^2)[L-R-(a/k)\log(L/R)]+O(1)$ after integration, where $a/k=\gamma/(2k^2)$. If it is square integrable then $A=B=0$, since the linear term dominates the logarithm. By [F6] and step 4.1 this excludes every positive eigenvalue of $A_l$. [step 3.1, step 4.1, F3, F6, algebra]

6.1 [Conclusion] Clauses (a), (b), (c), (d) follow respectively from steps 1.1; 1.2, 2.1 and 3.1; 4.1; and 5.1. [step 1.1, step 1.2, step 2.1, step 3.1, step 4.1, step 5.1] ∎
