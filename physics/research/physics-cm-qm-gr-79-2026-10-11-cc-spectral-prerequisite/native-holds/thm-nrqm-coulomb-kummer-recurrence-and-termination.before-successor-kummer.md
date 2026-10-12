---
id: thm-nrqm-coulomb-kummer-recurrence-and-termination
aliases: [nrqm-coulomb-kummer-recurrence-and-termination]
kind: theorem
domain: mathematics
title: "Kummer recurrence and termination"
status: draft
origin: pipeline
dependency_level: 7
deps: [thm-nrqm-coulomb-transported-radial-endpoint-realization, thm-nrqm-coulomb-angular-radial-unitary-reduction, thm-nrqm-coulomb-infinitesimal-kinetic-bound, thm-nrqm-intervals-regular-ivp-parameter-series, def-derivative, def-continuity-real, thm-derivative-of-exponential, def-complex-exponential, def-binomial-coefficient, def-factorial-and-falling-factorial, def-finite-sum-in-a-commutative-monoid, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces, cor-cauchy-schwarz-inequality-for-l-two, def-l-p-space-as-a-quotient-by-null-functions, cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn, def-sobolev-space-wkp-and-its-norm, thm-plancherel, lem-weak-derivatives-are-polynomial-fourier-multipliers, def-countable-choice, def-axiom-of-choice]
dependency_roles:
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

**Given:** $\gamma>0$, $l\ge0$, $k>0$, $j=\gamma/(2k)-l-1$, $a=2l+1$; the operators $A_l,C$; a $C^2$ function on $(0,\infty)$ as in (a)–(e).

[F1] $A_l$ is self-adjoint, $C_c^\infty((0,\infty))$ is contained in $D(A_l)$, and for $u\in D(A_l)$ the distributional identity $-u''+(l(l+1)/r^2-\gamma/r)u=A_lu$ holds on $(0,\infty)$ with $u\in H^2_{\mathrm{loc}}(0,\infty)$; if $A_lu=Eu$ with $E$ constant, then $u$ is a $C^2$ solution of the radial equation on $(0,\infty)$; moreover $\psi(x)=u(r)Y_{lm}(\Omega)/r$ lies in $H^2(\mathbb R^3)$ with $C\psi=(A_lu)(r)Y_{lm}(\Omega)/r$ ([[thm-nrqm-coulomb-transported-radial-endpoint-realization]] (c), (d), (e)).

[F2] On any compact interval $[a,b]\subset(0,\infty)$ the equation $-u''+q u=0$ with $q\in C([a,b])$ has a two-dimensional space of $C^2$ solutions, and initial data at one point determine a unique solution ([[thm-nrqm-intervals-regular-ivp-parameter-series]]).

[F3] Derivatives of the exponential and of powers: $(e^{\pm kr})'=\pm ke^{\pm kr}$ and $(r^m)'=mr^{m-1}$ ([[thm-derivative-of-exponential]], [[def-complex-exponential]], [[def-derivative]], [[def-continuity-real]]).

[F4] Binomial and factorial identities: $\binom{n+a}{n-i}=\frac{(n+a)!}{(n-i)!(a+i)!}$ and $\frac{(n-i)!}{(n-i-1)!}=n-i$, $\frac{i!}{(i+1)!}=\frac{1}{i+1}$ ([[def-binomial-coefficient]], [[def-factorial-and-falling-factorial]], [[def-finite-sum-in-a-commutative-monoid]]).

[F5] Cauchy-Schwarz and exponential decay estimates: for a polynomial $P$ and $c>0$ the integral $\int_0^\infty r^{2m}e^{-2kr}|P(r)|^2dr$ is finite; and $H^2(\mathbb R^3)\subseteq C_b(\mathbb R^3)$ ([[cor-cauchy-schwarz-inequality-for-l-two]], [[thm-plancherel]], [[lem-weak-derivatives-are-polynomial-fourier-multipliers]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

## Proof

1.1 [The substitution] Let $u$ be $C^2$ on $(0,\infty)$ and put $u(r)=r^{l+1}e^{-kr}\varphi(r)$ with $\varphi\in C^2$. Differentiating twice with [F3] gives $u''/u=\bigl(l(l+1)/r^2+k^2-2k(l+1)/r\bigr)+\bigl(2(l+1)/r-2k\bigr)\varphi'/\varphi+\varphi''/\varphi$; substituting into $-u''+(l(l+1)/r^2-\gamma/r)u=-k^2u$ and cancelling $r^{l+1}e^{-kr}$ yields $r\varphi''+(2l+2-2kr)\varphi'+\bigl(\gamma-2k(l+1)\bigr)\varphi=0$. Setting $x=2kr$ and $v(x):=\varphi(x/2k)$, so that $v$ is $C^2$ and $2kr\,v''+(2l+2-2kr)v'+\bigl(\gamma-2k(l+1)\bigr)v=0$, and dividing by $2k$ gives $xv''+(2l+2-x)v'+\bigl(\gamma/(2k)-l-1\bigr)v=0$, which is the Kummer equation with $j=\gamma/(2k)-l-1$; all steps are reversible, so (a) holds. [F3, given, algebra]

1.2 [Convergence of the series] Let $C_0:=\max\{1,|j|/(2l+2)\}$; we claim $|v_i|\le C_0^i/i!$ for all $i\ge0$. This holds for $i=0$, and if it holds for $i$ then $|v_{i+1}|=\frac{|i-j|}{(i+1)(i+2l+2)}|v_i|\le\frac{i+|j|}{(i+1)(i+2l+2)}\cdot\frac{C_0^i}{i!}\le\frac{C_0^{i+1}}{(i+1)!}$, because $i+|j|\le C_0(i+2l+2)$ and $C_0\ge1$; hence $\sum_i|v_ix^i|\le e^{C_0|x|}$ for every $x\in\mathbb R$ and $v(x):=\sum_{i\ge0}v_ix^i$ defines an entire function. [F4, given, algebra]

2.1 [The series solves Kummer's equation] Inserting $v=\sum v_ix^i$ into the left-hand side of $xv''+(2l+2-x)v'+jv=0$, the coefficient of $x^i$ is $(i+1)(i+2l+2)v_{i+1}-(i-j)v_i$ for every $i\ge0$: indeed $xv''$ contributes $i(i+1)v_{i+1}$ to the coefficient of $x^i$ (this vanishes for $i=0$), $(2l+2)v'$ contributes $(2l+2)(i+1)v_{i+1}$, $-xv'$ contributes $-iv_i$, and $jv$ contributes $jv_i$, so the total is $(i+1)(i+2l+2)v_{i+1}+(j-i)v_i$, which vanishes by the recurrence of (b); hence $v$ solves the equation on $\mathbb R$, and the computation also shows that the recurrence is exactly equivalent to the equation for a power series. [step 1.2, F4, given, algebra]

2.2 [Termination and Laguerre polynomials] By the recurrence, $v_{i+1}=0$ exactly when $i=j$ or $v_i=0$; since $v_0=1\ne0$ and $v_i=0$ can occur only at $i=j$, the series has finitely many nonzero coefficients (i.e. $v$ is a polynomial) if and only if $j\in\mathbb N_0$, and then $v$ has degree $j$. For $j=n\in\mathbb N_0$ and $a=2l+1$, the polynomial $L_n^{(a)}$ defined in the statement is nonzero and satisfies the same recurrence: its coefficients $c_i=(-1)^i\binom{n+a}{n-i}/i!$ obey $c_{i+1}/c_i=-\frac{n-i}{(i+1)(a+i+1)}=\frac{i-n}{(i+1)(i+a+1)}=\frac{i-j}{(i+1)(i+2l+2)}$ by [F4]; the two-term recurrence with $c_0\ne0$ determines the coefficient sequence uniquely, so $v=c_0^{-1}c$ is the coefficient sequence of $L_n^{(a)}$ and $v$ is a nonzero multiple of $L_j^{(2l+1)}$. Since $j\in\mathbb N_0$ and $v$ is a polynomial, $\int_0^\infty r^{2l+2}e^{-2kr}|v(2kr)|^2dr<\infty$ by [F5], so $u_{\mathrm{reg}}\in L^2(0,\infty)$; this is (d). [step 1.2, F4, F5, given, algebra]

3.1 [The regular solution] Set $u_{\mathrm{reg}}=r^{l+1}e^{-kr}v(2kr)$. The convergent series and substitution show that it is smooth on $(0,\infty)$, solves the radial equation and satisfies $u_{\mathrm{reg}}=r^{l+1}[1+O(r)]$ near zero. Hence it has no zero on some $(0,\delta)$. The uniqueness and global second-solution construction are established in the following step. [step 2.1, step 1.1, F2, given, algebra]

4.1 [A globally extended second solution] Choose $r_*\in(0,\delta)$ from step 3.1 and define $u_2=u_{\mathrm{reg}}\int_{r_*}^r u_{\mathrm{reg}}^{-2}$ only on the zero-free interval $(0,\delta)$. Differentiation gives $W(u_{\mathrm{reg}},u_2)=1$ and the same differential equation there. Near zero, $u_{\mathrm{reg}}/r^{l+1}\to1$, so direct comparison of the integral with $\int_{r_*}^r s^{-2l-2}ds$ gives $u_2(r)\sim-r^{-l}/(2l+1)$; consequently $|u_2|/r\to\infty$ and $|u_2|/r^{l+1}\to\infty$. Take its value and derivative at $r_*$ as initial data. On each compact interval in $(0,\infty)$, [F2] gives a unique solution; uniqueness identifies overlapping extensions, yielding one global $C^2$ solution, including across zeros of $u_{\mathrm{reg}}$. Its Wronskian with $u_{\mathrm{reg}}$ remains one. Thus every global solution is $c_1u_{\mathrm{reg}}+c_2u_2$ by initial-value uniqueness, and $c_2\ne0$ makes $|u|/r$ unbounded at zero. Since $u_2/r^{l+1}$ is also unbounded whereas $u_{\mathrm{reg}}/r^{l+1}$ is bounded, the same local representation proves that the regular solution is unique up to scalar. No integral through a node is asserted. [step 3.1, F2, algebra]

4.2 [Actual operator-domain membership] If $j\in\mathbb N_0$, the regular solution is a polynomial times $r^{l+1}e^{-kr}$. Near zero it has $u=O(r^{l+1})$, $u'=O(r^l)$ and $u/r=O(r^l)$, and at infinity these functions decay exponentially times a polynomial. Hence $u,u',u/r\in L^2$, its trace at zero is zero, and the endpoint realization gives $u\in V_l$. Integration by parts against compact tests gives $a_l(u,w)=-k^2\langle u,w\rangle$; boundedness of the form and density of those tests in $V_l$ extend this identity to every $w\in V_l$. By the definition of $A_l$, $u\in D(A_l)$ and $A_lu=-k^2u$. The exact block/domain identity [F1] transports this to $\psi=uY_{lm}/r\in D(C)=H^2(\mathbb R^3)$ with $C\psi=-k^2\psi$ for every $m$. This proves the complete H² and eigenfunction conclusion without claiming smoothness of $e^{-kr}$ at the spatial origin. [step 3.1, step 2.2, F1, F5, given, algebra]

5.1 [Conclusion] Clauses (a), (b), (c), (d), (e) are steps 1.1; 1.2 and 2.1; 3.1 and 4.1; 2.2; and 4.2. [step 1.1, step 1.2, step 2.1, step 2.2, step 3.1, step 4.1, step 4.2] ∎
