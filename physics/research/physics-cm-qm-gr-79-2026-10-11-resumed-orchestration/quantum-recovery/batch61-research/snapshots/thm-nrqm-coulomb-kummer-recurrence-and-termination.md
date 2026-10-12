---
id: thm-nrqm-coulomb-kummer-recurrence-and-termination
aliases: [nrqm-coulomb-kummer-recurrence-and-termination]
kind: theorem
domain: mathematics
title: "Kummer recurrence and termination"
status: draft
origin: pipeline
dependency_level: 7
deps: [lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves, thm-nrqm-coulomb-transported-radial-endpoint-realization, thm-nrqm-coulomb-angular-radial-unitary-reduction, thm-nrqm-coulomb-infinitesimal-kinetic-bound, thm-nrqm-intervals-regular-ivp-parameter-series, def-derivative, def-continuity-real, thm-derivative-of-exponential, def-complex-exponential, def-binomial-coefficient, def-factorial-and-falling-factorial, def-finite-sum-in-a-commutative-monoid, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces, cor-cauchy-schwarz-inequality-for-l-two, def-l-p-space-as-a-quotient-by-null-functions, cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn, def-sobolev-space-wkp-and-its-norm, thm-plancherel, lem-weak-derivatives-are-polynomial-fourier-multipliers, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves: mathematical-premise
  thm-nrqm-coulomb-transported-radial-endpoint-realization: mathematical-premise
  thm-nrqm-coulomb-angular-radial-unitary-reduction: mathematical-premise
  thm-nrqm-coulomb-infinitesimal-kinetic-bound: mathematical-premise
  thm-nrqm-intervals-regular-ivp-parameter-series: mathematical-premise
  def-derivative: mathematical-premise
  def-continuity-real: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  def-complex-exponential: mathematical-premise
  def-binomial-coefficient: mathematical-premise
  def-factorial-and-falling-factorial: mathematical-premise
  def-finite-sum-in-a-commutative-monoid: mathematical-premise
  thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  thm-plancherel: mathematical-premise
  lem-weak-derivatives-are-polynomial-fourier-multipliers: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 10.4 pp. 229-235 (the substitution x = 2sqrt(-lambda) r, the coefficient recursion and the terminating polynomial solutions; pp. 231-233)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "NIST Digital Library of Mathematical Functions, §13.2 'Definitions and Basic Properties' (Kummer's equation and its standard solutions; §13.2(iii) limiting forms as z -> 0)"
      url: "https://dlmf.nist.gov/13.2"
---

## Statement

Assume the Axiom of Countable Choice and the Axiom of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]). Let $\gamma>0$, $l\ge0$,
$k>0$, let $A_l$ be the radial operator of
[[thm-nrqm-coulomb-transported-radial-endpoint-realization]], write
$$j:=\frac{\gamma}{2k}-l-1,$$
and for $a=2l+1$ and $n\in\mathbb N_0$ let
$$L_n^{(a)}(x):=\sum_{i=0}^{n}(-1)^i\binom{n+a}{n-i}\frac{x^i}{i!}$$
be the $n$-th Laguerre polynomial of order $a$. Then:

(a) *substitution.* A $C^2$ function $u$ on $(0,\infty)$ satisfies $-u''+(l(l+1)/r^2-\gamma/r)u=-k^2u$ if and only if $v(x):=e^{x/2}x^{-(l+1)}u(x/2k)$ is $C^2$ and satisfies $xv''+(2l+2-x)v'+jv=0$ on $(0,\infty)$;

(b) *regular series.* With $v_0:=1$ and
$$v_{i+1}:=\frac{(i-j)v_i}{(i+1)(i+2l+2)}\qquad(i\ge0),$$
the power series $v(x):=\sum_{i\ge0}v_ix^i$ converges for every $x\in\mathbb R$ and defines a solution of $xv''+(2l+2-x)v'+jv=0$ on $\mathbb R$;

(c) *regular solution and general solution.* The function
$$u_{\mathrm{reg}}(r):=r^{l+1}e^{-kr}v(2kr)$$
is a $C^\infty$ solution of the radial equation on $(0,\infty)$ with $u_{\mathrm{reg}}(r)/r^{l+1}\to1$ as $r\downarrow0$; it is, up to a nonzero scalar multiple, the only solution with $u(r)/r^{l+1}$ bounded as $r\downarrow0$; every solution of the radial equation on $(0,\infty)$ is $c_1u_{\mathrm{reg}}+c_2u_2$ with $u_2$ defined near zero by $u_2(r):=u_{\mathrm{reg}}(r)\int_{r_*}^r u_{\mathrm{reg}}(s)^{-2}ds$, where $0<r_*<\delta$ and $u_{\mathrm{reg}}$ has no zero in $(0,\delta)$, and extended uniquely to $(0,\infty)$ by the regular initial-value equation, and every solution that is not a multiple of $u_{\mathrm{reg}}$ has $|u(r)|/r$ unbounded as $r\downarrow0$;

(d) *termination.* $v$ is a polynomial if and only if $j\in\mathbb N_0$; in that case $v$ is a nonzero constant multiple of $L_j^{(2l+1)}$, and
$$u_{\mathrm{reg}}(r)=c\,r^{l+1}e^{-kr}L_j^{(2l+1)}(2kr)\quad(c\ne0)$$
lies in $L^2(0,\infty;dr)$;

(e) *eigenfunction.* If $j\in\mathbb N_0$ then $u_{\mathrm{reg}}\in D(A_l)$ and $A_lu_{\mathrm{reg}}=-k^2u_{\mathrm{reg}}$; equivalently, for every $m$ the transported function $\psi(r\Omega):=u_{\mathrm{reg}}(r)Y_{lm}(\Omega)/r$ lies in $H^2(\mathbb R^3)\cap D(C)$ and satisfies $C\psi=-k^2\psi$.

The assertions are statements about the ordinary differential equation and
the operators $A_l,C$; no physical interpretation of $\gamma,k$ or of any
spectral level is made.

## Facts & Assumptions

**Given:** The constants, radial operator, angular labels and choice hypotheses of the Statement. Inner products are linear in the first argument. All ordinary solutions considered below are complex-valued $C^2$ functions on $(0,\infty)$.

[F1] The endpoint supplier [[thm-nrqm-coulomb-transported-radial-endpoint-realization]] defines $V_l$ as the completion of $C_c^\infty(0,\infty)$ for the norm $\|u\|_2^2+\|u'-u/r\|_2^2+l(l+1)\|u/r\|_2^2$, and defines $a_l(u,w)=\int[(u'-u/r)\overline{(w'-w/r)}+l(l+1)u\overline w/r^2-\gamma u\overline w/r]$. This is a bounded form on $V_l$. Its actual domain is $D(A_l)=\{u\in V_l:\exists f\in L^2,\ a_l(u,w)=\langle f,w\rangle\ \forall w\in V_l\}$, with $A_lu=f$. Its exact block identity transports a single $(l,m)$ entry in $D(A_l)$ into $D(C)=H^2(\mathbb R^3)$, for every allowed $m$. These claims currently carry both CC and AC; neither hypothesis is removed here.

[F2] For continuous coefficients on a compact real interval, the regular IVP supplier [[thm-nrqm-intervals-regular-ivp-parameter-series]] gives a unique $C^2$ solution with each specified pair of initial data. Translating $[a,b]$ to $[0,b-a]$ applies its Statement to every $[a,b]\subset(0,\infty)$. The supplier assumes Countable Choice.

[F3] The derivative rules for exponentials and integer powers are [[thm-derivative-of-exponential]], [[def-complex-exponential]], [[def-derivative]], [[def-continuity-real]]. The angular labels $l,m$ are those of the polar decomposition in [[thm-nrqm-coulomb-angular-radial-unitary-reduction]]; thus $l$ is a nonnegative integer whenever $Y_{lm}$ is used.

[F4] The factorial and binomial identities used for the stated finite Laguerre sum are [[def-binomial-coefficient]], [[def-factorial-and-falling-factorial]], [[def-finite-sum-in-a-commutative-monoid]]. Cauchy–Schwarz is [[cor-cauchy-schwarz-inequality-for-l-two]].

[F5] For a continuous scalar integrand on a compact interval, its primitive is continuously differentiable with derivative the integrand, and integration of a continuous derivative gives its endpoint difference ([[lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves]], applied to the Banach space $\mathbb C$). This supplier assumes CC. Uniform convergence permits passage through the integral because the integral of the absolute error is bounded by interval length times the supremum error.

## Proof

1.1 [Substitution without dividing by a solution] Put $h(r)=r^{l+1}e^{-kr}$ and $u=h\varphi$. The multiplier $h$ is smooth and nonzero for every $r>0$, so $u\leftrightarrow\varphi$ preserves $C^2$. Its derivatives satisfy $h'/h=(l+1)/r-k$ and $h''/h=l(l+1)/r^2-2k(l+1)/r+k^2$. The product rule gives the identity $-u''+[l(l+1)/r^2-\gamma/r+k^2]u=-h[\varphi''+(2(l+1)/r-2k)\varphi'+(\gamma-2k(l+1))\varphi/r]$. Therefore the radial equation is equivalent to $r\varphi''+(2l+2-2kr)\varphi'+(\gamma-2k(l+1))\varphi=0$. Write $\varphi(r)=\widetilde v(2kr)$: then $\varphi'=2k\widetilde v'$ and $\varphi''=(2k)^2\widetilde v''$, and division by the nonzero scalar $2k$ gives $x\widetilde v''+(2l+2-x)\widetilde v'+j\widetilde v=0$. The Statement's $v(x)=e^{x/2}x^{-(l+1)}u(x/(2k))$ equals $(2k)^{-(l+1)}\widetilde v(x)$; multiplication by this constant preserves the homogeneous equation. All transformations are reversible, including at zeros of $u$, and establish (a). [F3, given, algebra]

1.2 [Convergence with every differentiated series] Let $b=2l+2$ and $B=\max\{1,|j|/b\}$. The recurrence gives $|v_{i+1}|\le B|v_i|/(i+1)$ because $i+|j|\le B(i+b)$. Induction from $v_0=1$ yields $|v_i|\le B^i/i!$. For any derivative order $q\ge0$ and $R>0$, the $q$-th formal derivative on $|x|\le R$ has absolute sum bounded by $\sum_{i\ge q}B^iR^{i-q}/(i-q)!=B^qe^{BR}$. Every differentiated series therefore converges uniformly on that compact interval. To justify differentiation explicitly, integrate the uniformly convergent first derivative series from $0$ to $x$; the integral of its finite partial sums is the corresponding original partial sum minus its value at zero, and uniform convergence allows passage to the limit. The fundamental theorem for a continuous integrand proves the derivative identity. Repeating this for successive derivative series proves $v\in C^\infty(\mathbb R)$ with all asserted derivatives. [F3, F4, F5, given, algebra]

2.1 [Coefficient equation] By step 1.2, substitution and collection of coefficients are legitimate. The coefficient of $x^i$ in $xv''+bv'-xv'+jv$ is $(i+1)(i+b)v_{i+1}+(j-i)v_i$ for each $i\ge0$, including $i=0$ because the $xv''$ contribution then vanishes. The recurrence makes every coefficient zero; the equation thus holds for all real $x$. Conversely this same coefficient comparison shows that an analytic solution with constant coefficient $1$ must have exactly this recurrence. This proves (b). [step 1.2, F4, given, algebra]

3.1 [Exact termination and polynomial normalization] If $j\notin\mathbb N_0$, every factor $i-j$ is nonzero, so all $v_i$ are nonzero. Such a series cannot be a polynomial: its $i$-th derivative at zero is $i!v_i$ by step 1.2. If $j=n\in\mathbb N_0$, the coefficients through $v_n$ are nonzero, $v_{n+1}=0$, and the recurrence forces all later coefficients to vanish. For the stated Laguerre polynomial, $c_i=(-1)^i\binom{n+a}{n-i}/i!$ has $c_0\ne0$ and $c_{i+1}/c_i=(i-n)/[(i+1)(a+i+1)]$ for $0\le i<n$, by the factorial identities in [F4]. Since $a+i+1=i+2l+2$, it has precisely the same recurrence and $v=L_n^{(2l+1)}/\binom{n+2l+1}{n}$. Its leading coefficient is nonzero. Thus the polynomial and nonzero normalization claims in (d) follow. [step 1.2, step 2.1, F4, given, algebra]

3.2 [The regular branch and a zero-free initial interval] The function $u_1=u_{\mathrm{reg}}=r^{l+1}e^{-kr}v(2kr)$ is smooth on $(0,\infty)$ and solves the radial equation by steps 1.1 and 2.1. Since $v(0)=1$ and $v$ is smooth, $u_1=r^{l+1}(1+O(r))$ as $r\downarrow0$. It is real valued because the recurrence has real coefficients. Choose $\delta>0$ so that $u_1(r)/r^{l+1}>1/2$ throughout $(0,\delta)$. Hence $u_1$ has no zero there and has the required normalized endpoint limit. [step 1.1, step 1.2, step 2.1, F3, given, algebra]

4.1 [Local second solution and its exact leading asymptotic] Fix $r_*\in(0,\delta)$, put $I(r)=\int_{r_*}^ru_1(s)^{-2}ds$, and define $u_2=u_1I$ only on $(0,\delta)$. Here $I'=u_1^{-2}$, so $u_2'=u_1'I+u_1^{-1}$, $u_2''=u_1''I$, and $W(u_1,u_2):=u_1u_2'-u_1'u_2=1$. Thus $u_2$ solves the same equation and is independent of $u_1$. Set $p=2l+1>0$. Since $u_1(s)^{-2}/s^{-p-1}\to1$, comparison between $(1-\eta)s^{-p-1}$ and $(1+\eta)s^{-p-1}$ below any sufficiently small fixed endpoint shows $r^p\int_r^{r_*}u_1(s)^{-2}ds\to1/p$: the integral above that endpoint is finite and disappears after multiplication by $r^p$, while $r^p\int_r^ts^{-p-1}ds=(1-(r/t)^p)/p$. Letting $\eta\downarrow0$ gives $I(r)\sim-r^{-p}/p$, hence $u_2(r)\sim-r^{-l}/(2l+1)$. In particular $|u_2|/r\to\infty$ and $|u_2|/r^{l+1}\to\infty$, also when $l=0$. [step 3.2, F3, F5, given, construct, algebra]

4.2 [Integrability and actual form-domain approximation] Suppose $j\in\mathbb N_0$. By step 3.1, $u=u_1$ is a polynomial times $r^{l+1}e^{-kr}$. Near zero $u=O(r^{l+1})$, $u'=O(r^l)$, $u/r=O(r^l)$; at infinity each is bounded by an exponential times a polynomial. Their squared integrals are finite: on $(0,1)$ compare with $r^{2l}$, while at infinity a polynomial times $e^{-2kr}$ is integrable, as follows by bounding each power using the exponential series or repeated integration by parts. Thus $u,u',u/r\in L^2$, and $u$ has zero trace at zero. To show membership in the actual completion $V_l$, take smooth cutoffs $\eta_\varepsilon$ vanishing below $\varepsilon$, equal to one above $2\varepsilon$, with $|\eta_\varepsilon'|\le K/\varepsilon$, and $\chi_R$ equal to one below $R$, vanishing above $2R$, with $|\chi_R'|\le K/R$. The products $u_{\varepsilon,R}=\eta_\varepsilon\chi_Ru$ lie in $C_c^\infty(0,\infty)$. The omitted $L^2$, derivative and $u/r$ tails tend to zero; the added derivative at zero obeys $\|\eta_\varepsilon'u\|_2^2\le4K^2\int_0^{2\varepsilon}|u/r|^2dr\to0$, and the added derivative at infinity obeys $\|\chi_R'u\|_2^2\le K^2R^{-2}\int_R^{2R}|u|^2dr\to0$. Hence $u_{\varepsilon,R}\to u$ in $V_l$, for instance along $\varepsilon=1/n$, $R=n$. This proves (d)'s $L^2$ claim and establishes $u\in V_l$. [step 3.1, step 3.2, F1, F3, given, construct, algebra]

5.1 [Global continuation across every node] Put $q(r)=l(l+1)/r^2-\gamma/r+k^2$, continuous on $(0,\infty)$. For $n\ge1$ let $J_n=[r_*/(n+1),(n+1)r_*]$. Apply [F2] on each $J_n$ to $u''=qu$ with initial data $u_2(r_*)=0$, $u_2'(r_*)=u_1(r_*)^{-1}$. The unique solutions agree on nested overlaps and with step 4.1 wherever the latter is defined, so their union is a $C^2$ solution on $\bigcup_nJ_n=(0,\infty)$. No blowup at a finite positive node is possible because every such node lies inside one regular compact IVP interval. Differentiating the Wronskian gives $W'=u_1u_2''-u_1''u_2=0$, and its value at $r_*$ is $1$, so $W=1$ globally. If $u_1(t)=0$, then $-u_1'(t)u_2(t)=1$; this also shows that every such node is simple and the continued $u_2$ is finite and nonzero there. The reciprocal integral of step 4.1 is never used across a node. [step 4.1, F2, given, construct, algebra]

5.2 [Form eigenidentity and the full operator domain] For $w\in C_c^\infty(0,\infty)$ expand the kinetic integrand: $(u'-u/r)\overline{(w'-w/r)}=u'\overline{w'}-u'\overline w/r-u\overline{w'}/r+u\overline w/r^2$. The last three terms are $-(u\overline w/r)'$ and have zero integral because $w$ is compactly supported away from the endpoints. Therefore $a_l(u,w)=\int[u'\overline{w'}+l(l+1)u\overline w/r^2-\gamma u\overline w/r]=\int[-u''+(l(l+1)/r^2-\gamma/r)u]\overline w=-k^2\langle u,w\rangle$. Compact tests are dense in $V_l$ by its definition, $a_l$ is bounded by [F1], and $w\mapsto\langle u,w\rangle$ is continuous in its norm. The identity extends to every $w\in V_l$. The defining condition in [F1] gives $u\in D(A_l)$ and $A_lu=-k^2u$. For every allowed $m$, the family with sole nonzero $(l,m)$ entry $u$ has finite graph norm; the exact block identity gives $\psi=uY_{lm}/r\in D(C)=H^2(\mathbb R^3)$ and $C\psi=-k^2\psi$. Conversely that single-block domain identity gives the stated equivalence. This establishes (e). [step 3.2, step 4.2, F1, F4, given, algebra]

6.1 [Arbitrary solutions and endpoint uniqueness] At $r_*$ the initial-data matrix with columns $(u_1,u_1')$ and $(u_2,u_2')$ has determinant $1$ by step 5.1. For any solution $u$, solve the invertible two-by-two linear system for $c_1,c_2\in\mathbb C$ matching $(u(r_*),u'(r_*))$. The IVP uniqueness of [F2] on the nested $J_n$ gives $u=c_1u_1+c_2u_2$ everywhere. If $c_2\ne0$, the asymptotics in steps 3.2 and 4.1 give $u(r)\sim-c_2r^{-l}/(2l+1)$, since $u_1/u_2\to0$. Hence $|u|/r\to\infty$ and $|u|/r^{l+1}\to\infty$. If $c_2=0$, the latter ratio is bounded, and every nonzero such solution is a nonzero scalar multiple of $u_1$. This proves all of (c); the zero solution is included in the general linear representation. [step 3.2, step 4.1, step 5.1, F2, given, algebra]

7.1 [Conclusion and foundational use] Step 1.1 proves (a); steps 1.2 and 2.1 prove (b); steps 3.2, 4.1, 5.1 and 6.1 prove (c); steps 3.1 and 4.2 prove (d); and step 5.2 proves (e). CC is used through the regular IVP supplier in [F2]; the compact-interval extensions in step 5.1 themselves are uniquely determined, and the cutoff approximants in step 4.2 are explicit. The actual Coulomb operator premise in [F1] carries AC in its contract; that inherited assumption is retained, without relabeling it as CC-only. [step 1.1, step 1.2, step 2.1, step 3.1, step 3.2, step 4.1, step 5.1, step 6.1, step 4.2, step 5.2, F1, F2] ∎
