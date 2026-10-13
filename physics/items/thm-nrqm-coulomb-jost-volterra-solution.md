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
$V_l$. Let $\mathcal D:=\{k\in\mathbb C:\operatorname{Re}k>0,\ \operatorname{Im}k\ge0\}$ be the parameter domain for the Jost solution. For each $k_{\min}>0$ also write $K:=\{k\in\mathcal D:\operatorname{Re}k\ge k_{\min}\}$ for its restriction.
Then:

(a) *regular solution.* With $c_0:=1$, $c_{-1}:=0$ and
$$c_n:=-\frac{\gamma c_{n-1}+k^2c_{n-2}}{n(n+2l+1)}\qquad(n\ge1),$$
the series $\varphi_l(k,r):=r^{l+1}\sum_{n\ge0}c_nr^n$ converges for every $r>0$ and every $k\in\mathbb C$, the function $(k,r)\mapsto\varphi_l(k,r)$ is holomorphic in $k$ and $C^\infty$ in $r>0$, and $\varphi_l$ solves $-u''+\bigl(l(l+1)/r^2-\gamma/r\bigr)u=k^2u$ with $\varphi_l(k,r)/r^{l+1}\to1$ as $r\downarrow0$;

(b) *Jost-type solution.* Put $a:=\gamma/(2k)$, $\theta(r):=kr+a\log r$, $w(r):=e^{i\theta(r)}$, $b:=a^2+l(l+1)+ia$ and consider the integral equation
$$v(r)=1+\int_r^\infty\frac{b}{s^2}\,w(s)^2\Bigl(\int_r^sw(y)^{-2}dy\Bigr)v(s)\,ds .$$
For every $k\in\mathcal D$ the equation has exactly one bounded solution $v(\cdot;k)$ on $[r_0,\infty)$ for some $r_0>0$ depending on $k$; extend $f_l$ uniquely by its regular initial data to every $r>0$ and put $v=f_l/w$ there. Constructions with different admissible tails agree by bounded-solution and initial-value uniqueness, so these functions are independent of the tail and of $k_{\min}$. One has $v(r)=1+O(1/r)$, $v'(r)=O(1/r)$; the functions $f_l(k,r):=w(r)v(r)$ and $v$ are jointly continuous on $\mathcal D\times(0,\infty)$, holomorphic in $k$ on $\{\operatorname{Re}k>0,\operatorname{Im}k>0\}$, satisfy the radial equation $-\partial_r^2f_l+\bigl(l(l+1)/r^2-\gamma/r\bigr)f_l=k^2f_l$ exactly, and obey the asymptotics
$$f_l=e^{i(kr+a\log r)}(1+O(1/r)),\qquad f_l'=e^{i(kr+a\log r)}[ik+O(1/r)]\qquad(r\to\infty);$$

(c) *Wronskians.* For real $k>0$ one has $W(\overline{f_l},f_l)=2ik$ and $W_l(k):=W(\varphi_l,f_l)\ne0$; consequently every solution of the radial equation on $(0,\infty)$ is $Af_l+B\overline{f_l}$ with $A,B\in\mathbb C$, and $\varphi_l$ is a nonzero complex multiple combination of $f_l,\overline{f_l}$;

(d) *no positive eigenvalue.* For real $k>0$ and $A,B\in\mathbb C$, if $g=Af_l+B\overline{f_l}$ then $\int_R^L|g(r)|^2dr=(|A|^2+|B|^2)[L-R-\gamma\log(L/R)/(2k^2)]+O(1)$ as $L\to\infty$ with $R>r_0$ fixed; hence $g\in L^2(r_0,\infty)$ if and only if $A=B=0$, and $k^2>0$ is not an eigenvalue of $A_l$.

All assertions concern the ordinary differential equation and the operator
$A_l$; no scattering amplitude, cross-section or physical interpretation is
asserted or computed.

## Facts & Assumptions

**Given:** $\gamma\ge0$, $l\ge0$, $k_{\min}>0$, $K$ as above, and for $k\in\mathcal D$ the quantities $a,\theta,w,b$; the radial equation $L_lu=k^2u$ with $L_lu:=-u''+(l(l+1)/r^2-\gamma/r)u$.

[F1] On any compact interval $[a,b]\subset(0,\infty)$ the radial equation has a two-dimensional space of $C^2$ solutions, and for real $k$ complex conjugation preserves the solution space because both the potential and $k^2$ are real ([[thm-nrqm-intervals-regular-ivp-parameter-series]], [[def-continuity-real]]).

[F2] The Wronskian $W(u,v)=uv'-u'v$ of two solutions of $-(u'')+qu=0$ with $q$ continuous is constant ([[thm-nrqm-intervals-regular-ivp-parameter-series]]).

[F3] Derivatives of exponential and logarithmic-type phases: $w'=i(k+a/r)w$, $w''=-[(k+a/r)^2+ia/r^2]w$ ([[def-complex-exponential]], [[thm-derivative-of-exponential]], [[cor-complex-trigonometric-and-hyperbolic-derivatives]], [[thm-algebra-of-derivatives]]).

[F4] Banach fixed point and Gronwall: the standard existence-uniqueness and a priori bound arguments for Volterra integral equations; integrals of continuous functions against continuous kernels may be interchanged ([[thm-banach-fixed-point]], [[thm-gronwall-integral-inequality]], [[thm-tonelli-and-fubini-for-completed-product-measures]]).



[F6] Every eigenfunction $u\in D(A_l)$ of $A_l$ with $A_lu=Eu$, $E$ constant, is a $C^2$ solution of the radial equation on $(0,\infty)$ ([[thm-nrqm-coulomb-transported-radial-endpoint-realization]] (c)).


[F7] A continuous function with zero contour integral on every triangle is holomorphic, and a locally uniformly convergent series of holomorphic functions is holomorphic with termwise derivatives ([[thm-morera-triangle-theorem]], [[cor-locally-uniformly-convergent-holomorphic-series]]).
## Proof

1.1 [Regular solution] On a compact $k$-set choose $C\ge\max(1,\gamma,\sup|k|)$. Induction gives $|c_n|\le C^n/n!$, since the recurrence majorant divided by $C^n/n!$ is $[\gamma/C+|k|^2(n-1)/C^2]/(n+2l+1)\le1$; at $n=1$ the second term is absent. Each $c_n$ is a polynomial in $k^2$. The exponential majorant also bounds every fixed $r$-derivative on compact subintervals of $(0,\infty)$, so the series is entire in $k$, smooth in $r>0$, and termwise substitution gives the stated radial equation. Its leading coefficient is one, and the remaining series tends to zero as $r\downarrow0$, uniformly on compact $k$-sets. For real $k$ all coefficients and $\varphi_l$ are real. [F7, given, algebra]

1.2 [A common tail and the correct complex-power modulus] Perform the construction on $\mathcal D:=\{\operatorname{Re}k>0,\operatorname{Im}k\ge0\}$, then restrict to $K$. Fix a compact $Q\subset\mathcal D$, and put $m:=\min_Q|k|>0$, $A:=\max_Q|a|$, $B:=\max_Q|b|$, $H:=2/m+2A/m^2$, and $D:=BH$. Choose $r_0\ge\max(1,\gamma/(2m^2),2A/m,2D)$. For $s\ge y\ge r_0$, the exact modulus is $|w(s)^2w(y)^{-2}|=\exp[-2\operatorname{Im}k(s-y)](s/y)^{-2\operatorname{Im}a}$. Here $-2\operatorname{Im}a=\gamma\operatorname{Im}k/|k|^2$, and $\log(s/y)\le(s-y)/y$ makes this modulus at most one. Write $p(y)=k+a/y$ and $d(y)=1/(-2ip(y))$. Then $|p|\ge m/2$, $|d|\le1/m$ and $|d'|\le2A/(m^2y^2)$. Integration by parts on the finite interval gives $w(s)^2\int_r^s w(y)^{-2}dy=d(s)-d(r)w(s)^2w(r)^{-2}-\int_r^s d'(y)w(s)^2w(y)^{-2}dy$, whose modulus is at most $H$. Thus the actual kernel $R(k;r,s):=b s^{-2}w(s)^2\int_r^s w(y)^{-2}dy$ satisfies $|R|\le D/s^2$, uniformly for $k\in Q$ and $s\ge r\ge r_0$. [F3, given, algebra]

2.1 [Contraction and bounded-solution uniqueness] On the complete space $C_b([r_0,\infty);\mathbb C)$ define $(\mathcal V_k h)(r)=\int_r^\infty R(k;r,s)h(s)ds$. The kernel estimate gives $\|\mathcal V_k\|\le D/r_0\le1/2$; continuity follows by splitting the integral at a finite upper limit and using the uniformly small $s^{-2}$ tail. Therefore $v=\sum_{n\ge0}\mathcal V_k^n1$ is the unique fixed point of $h\mapsto1+\mathcal V_kh$, and $\|v\|_\infty\le2$, $|v(r)-1|\le2D/r$. Any bounded function for which the integral equation holds is continuous by the same kernel estimate and hence equals this fixed point. Constructions on different common tails agree on their overlap by uniqueness. This proves bounded-solution uniqueness on the chosen tail and the uniform $O(r^{-1})$ estimate. [step 1.2, F4, algebra]

3.1 [Differentiate the genuine double integral] In the integral equation the lower-limit term vanishes because $R(k;r,r)=0$, whereas $\partial_rR=-b s^{-2}w(s)^2w(r)^{-2}$. The ratio bound in step 1.2 dominates this derivative times $v(s)$ by $2B/s^2$ on each compact $r$-interval in the tail. Truncated-integral differentiation followed by uniform convergence therefore gives $v'(r)=-b w(r)^{-2}I(r)$, where $I(r):=\int_r^\infty w(s)^2v(s)s^{-2}ds$; this is a derivative identity, not a replacement of the original fixed-point equation by $v=1+bI$. The integral for $I$ is absolutely convergent: for real $k$, $|w|=1$, and for $\operatorname{Im}k>0$, $|w(s)|=e^{-\operatorname{Im}k s}s^{-\operatorname{Im}a}$ decays exponentially times a power. Hence $I'=-w(r)^2v(r)/r^2$ and $v''=-2i(k+a/r)v'+bv/r^2$. The ratio estimate gives $|v'|\le2B/r$, uniformly on $Q$. Using $w''=-[(k+a/r)^2+ia/r^2]w$ and $2ka=\gamma$, the product rule for $f=wv$ gives $f''=[-k^2-\gamma/r+l(l+1)/r^2]f$. Consequently $f=w[1+O(r^{-1})]$ and $f'=w[ik+O(r^{-1})]$, with the factor $w$ retained and all errors uniform on $Q$. [step 1.2, step 2.1, F3, algebra]

4.1 [Continuity and holomorphy on the common tail] Each Picard iterate is jointly continuous in $(k,r)$ on $Q\times[r_0,\infty)$: on compact $r$-intervals the finite-integral kernel is continuous, and the $D/s^2$ majorant makes the improper tail uniformly small. Induction on iterates followed by the uniform geometric bound $\|\mathcal V_k^n1\|_\infty\le2^{-n}$ proves joint continuity of $v$; the derivative formula, dominated by $2B/s^2$, also proves joint continuity of $v'$. On each triangle in $\{\operatorname{Re}k>0,\operatorname{Im}k>0\}$ with a compact neighborhood, the finite-integral kernel is holomorphic because $1/k$ and the complex exponential are holomorphic. If an iterate is holomorphic, interchange its $s$-integral with the triangle contour integral using the uniform $s^{-2}$ bound; the contour integral vanishes, so Morera proves that the next iterate is holomorphic. Uniform convergence and [F7] prove holomorphy of $v$. Apply the same contour argument to $v'=-\int_r^\infty b s^{-2}w(s)^2w(r)^{-2}v(s)ds$ to prove holomorphy of its initial data. Thus $f,f'$ are continuous to real $k$ and holomorphic in the open first quadrant. The construction on $\mathcal D$ also supplies an open complex neighborhood for points with $\operatorname{Re}k=k_{\min}$ and $\operatorname{Im}k>0$, which makes the asserted holomorphy at that boundary precise. [step 1.2, step 2.1, step 3.1, F3, F4, F7, algebra]

4.2 [First integration by parts improves the derivative] Fix real $k>0$ and write $Q(r)=2i\theta'(r)=2i(k+a/r)$ and $h(r)=v(r)/r^2$. Since $\theta'\ge k$, $Q^{-1}$ is bounded and its first two derivatives are $O(r^{-2})$ and $O(r^{-3})$. Initially $v=O(1)$ and $v'=O(r^{-1})$, so $h=O(r^{-2})$, $h'=O(r^{-3})$ and $(h/Q)'=O(r^{-3})$. Integration by parts, whose boundary term vanishes at infinity, gives $I(r)=-e^{2i\theta(r)}h(r)/Q(r)-\int_r^\infty e^{2i\theta(s)}(h/Q)'(s)ds=O(r^{-2})$. The exact derivative identity then gives $v'=O(r^{-2})$; the ODE from step 3.1 gives $v''=O(r^{-2})$. [step 2.1, step 3.1, F3, algebra]

5.1 [Extend to every positive radius] Fix $\varepsilon>0$ smaller than the common $r_0$. The regular-IVP result gives a unique extension of $f$ from $(f(r_0),f'(r_0))$ across $[\varepsilon,r_0]$. To establish complex parameter dependence rather than invoking that supplier's real-parameter differentiability clause, write $Y=(f,f')^{\mathsf T}$ and $Y'=M(k,r)Y$, with $M=\left(\begin{smallmatrix}0&1\\ l(l+1)/r^2-\gamma/r-k^2&0\end{smallmatrix}\right)$. Its initial-value integral series on $[\varepsilon,r_0]$ has $n$th term bounded by $C_0[C_M(r_0-\varepsilon)]^n/n!$, uniformly on compact $k$-sets, since the $n$fold ordered integration simplex has volume at most $(r_0-\varepsilon)^n/n!$. Each term is continuous to real $k$ and holomorphic in the open first quadrant by finite contour integration. Thus the sum has both properties by [F7], agrees with the unique IVP solution, and supplies the asserted parameter properties for every $r>0$. Set $v=f/w$ on the extension; $w$ never vanishes, so the same properties hold for $v$. Patching overlapping tails and intervals is unambiguous by IVP uniqueness. For fixed nonreal $k\in\mathcal D$, $f,f'$ have the stated exponential-times-power decay. [step 3.1, step 4.1, F1, F3, F7, algebra]

5.2 [Second integration gives the amplitude coefficient] Now $h''=v''/r^2-4v'/r^3+6v/r^4=O(r^{-4})$. Put $j=(h/Q)'$. Then $j=O(r^{-3})$, $j'=O(r^{-4})$ and $(j/Q)'=O(r^{-4})$. A second integration by parts gives $\int_r^\infty e^{2i\theta}j=-e^{2i\theta(r)}j(r)/Q(r)-\int_r^\infty e^{2i\theta}(j/Q)'=O(r^{-3})$. Therefore $I(r)=-e^{2i\theta(r)}v(r)/(2i\theta'(r)r^2)+O(r^{-3})$, $v'=bv/(2i\theta'r^2)+O(r^{-3})=b/(2ik r^2)+O(r^{-3})$, and integration to the known limit $v(\infty)=1$ gives $v=1-b/(2ik r)+O(r^{-2})$. Since $-b/(2ik)=-a/(2k)+i[a^2+l(l+1)]/(2k)$ and $|w|=1$, the coefficient is $|f|^2=|v|^2=1-a/(kr)+O(r^{-2})$. These estimates are uniform when real $k$ is restricted to a compact subset of $(0,\infty)$, because all preceding constants and the lower bound for $\theta'$ can be chosen uniformly. [step 4.2, step 2.1, step 3.1, F3, algebra]

6.1 [Real-energy Wronskians] Any real $k>0$ belongs to the public domain $\mathcal D$ of the single patched family $f_l$. By the asymptotic formulas, $W(\overline f,f)=2i(k+a/r)|v|^2+2i\operatorname{Im}(\overline vv')=2ik+O(r^{-1})$. It is constant by [F2], hence equals $2ik$. The pair $f,\overline f$ is therefore a basis of the two-dimensional solution space. If $W(\varphi_l,f)=0$, their initial data are proportional at any positive radius, hence IVP uniqueness implies $f=c\varphi_l$; neither solution is identically zero, by their normalizations. Since $\varphi_l$ is real, proportionality forces $W(\overline f,f)=0$, a contradiction. Thus $W_l(k)\ne0$, every solution is $Af+B\overline f$, and the nonzero $\varphi_l$ has such a representation with coefficients not both zero. [step 1.1, step 3.1, step 5.1, F1, F2, algebra]

7.1 [The mixed term has a bounded integral] For fixed $R>r_0$, integration by parts gives $\int_R^L f^2=[e^{2i\theta}v^2/Q]_R^L-\int_R^L e^{2i\theta}(v^2/Q)'$. The endpoint term is uniformly bounded and $(v^2/Q)'=2vv'/Q+v^2(Q^{-1})'=O(r^{-2})$ is integrable, hence the whole integral is bounded independently of $L$. Expanding $|Af+B\overline f|^2=(|A|^2+|B|^2)|f|^2+2\operatorname{Re}(A\overline B f^2)$ and integrating step 5.2 yields $\int_R^L|Af+B\overline f|^2=(|A|^2+|B|^2)[L-R-(a/k)\log(L/R)]+O(1)$, with $a/k=\gamma/(2k^2)$. If at least one coefficient is nonzero the integral diverges, since its linear term dominates the logarithm; if both vanish it is zero. Every positive-energy eigenfunction in $D(A_l)$ is an $L^2$ classical solution by [F6], hence step 6.1 and this divergence exclude such an eigenfunction. [step 6.1, step 5.2, F3, F6, algebra]

8.1 [Conclusion and choice accounting] Steps 1.1; 1.2, 2.1, 3.1, 4.1 and 5.1; 6.1; and 4.2, 5.2 and 7.1 prove (a), (b), (c), and (d), respectively, for precisely the stated radial operator and parameter range. The explicit regular series, prescribed Picard iteration and unique IVP patching require no new arbitrary choice of solutions. The public Countable Choice assumption is retained for the invoked IVP and Hilbert-space suppliers; the public Axiom of Choice assumption is retained for the existing transported radial-operator supplier contract. No reduction of that supplier's choice hypothesis is inferred from this local argument. [step 1.1, step 1.2, step 2.1, step 3.1, step 4.1, step 5.1, step 6.1, step 4.2, step 5.2, step 7.1, given] ∎


## Remarks

Cauchy-Schwarz in the forms $\bigl|\int f\overline g\bigr|\le\|f\|_2\|g\|_2$ and the finite-dimensional estimate on $\mathbb C^2$ ([[cor-cauchy-schwarz-inequality-for-l-two]], [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]], [[def-l-p-space-as-a-quotient-by-null-functions]]).
