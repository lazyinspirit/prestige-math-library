---
id: lem-em-surface-density-localization
kind: lemma
title: "Surface densities with vanishing test pairings vanish"
domain: mathematics
status: published
origin: pipeline
dependency_level: 0
deps: [def-surface-integral-on-a-compact-c-one-hypersurface,
       lem-surface-integral-is-independent-of-c-one-boundary-charts,
       def-metric-continuity,
       def-metric-ball,
       def-metric-topology,
       def-ck-euclidean-maps-and-diffeomorphisms,
       lem-scaled-euclidean-bumps-with-compact-support-and-gradient-bound,
       def-test-function-space-d-of-an-open-set,
       def-nonnegative-lebesgue-integral,
       prop-order-and-scalar-rules-for-the-nonnegative-integral,
       def-integral-of-a-nonnegative-simple-function,
       prop-the-nonnegative-integral-agrees-with-the-simple-integral,
       thm-lebesgue-measure-of-a-box-of-every-kind,
       def-integrable-real-and-complex-functions-and-their-integrals,
       thm-linearity-of-the-lebesgue-integral-on-l-one,
       def-countable-choice,
       thm-extreme-value-metric,
       thm-continuous-preimages-of-borel-sets-are-borel]
dependency_roles:
  def-surface-integral-on-a-compact-c-one-hypersurface: mathematical-premise
  lem-surface-integral-is-independent-of-c-one-boundary-charts: mathematical-premise
  def-metric-continuity: mathematical-premise
  def-metric-ball: mathematical-premise
  def-metric-topology: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  lem-scaled-euclidean-bumps-with-compact-support-and-gradient-bound: mathematical-premise
  def-test-function-space-d-of-an-open-set: mathematical-premise
  def-nonnegative-lebesgue-integral: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  def-integral-of-a-nonnegative-simple-function: mathematical-premise
  prop-the-nonnegative-integral-agrees-with-the-simple-integral: mathematical-premise
  thm-lebesgue-measure-of-a-box-of-every-kind: mathematical-premise
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  thm-continuous-preimages-of-borel-sets-are-borel: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
sources:
  references:
    - title: "J. K. Hunter, Notes on Partial Differential Equations (UC Davis), ch. 1"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "$1.10.2 and $1.12, printed pp. 15-18: chart density, graph formula and surface integration; the localization step is the standard reduction to the fundamental lemma."
    - title: "R. Cristoferi, Calculus of Variations lecture notes (Carnegie Mellon University 2016)"
      url: "https://www.math.cmu.edu/~rcristof/pdf/Teaching/Spring2016/Cristoferi-Calculus_of_Variations-Lecture%20notes.pdf"
      locator: "Chapter 4, Section 4.1, Lemma 4.1 and its proof, printed pp. 47-48: the fundamental lemma of the calculus of variations used to conclude pointwise vanishing from vanishing against every test function."
    - title: "M. E. Taylor, Introduction to Analysis in Several Variables"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf"
      locator: "Section 3.2, formulas 3.2.12 and 3.2.21-3.2.23: regular patches, density and the graph formula used to transfer the surface pairing to the parameter region."
proof_strategy: direct
---


## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$, the convention of
the surface-measure interface cited below ([[def-countable-choice]]). Let
$\Omega\subseteq\mathbb R^3$ be open, let $S\subset\Omega$ be a compact
embedded $C^2$ hypersurface whose surface measure is that of the compact
embedded $C^1$ class of
[[def-surface-integral-on-a-compact-c-one-hypersurface]] (the $C^2$ data are
special cases of the $C^1$ data), and let $a:S\to\mathbb R$ be continuous.
Suppose that

$$\int_Sa\psi\,dS=0$$

for every $\psi\in C_c^\infty(\Omega)$ ([[def-test-function-space-d-of-an-open-set]]),
the pairing being the signed surface integral of
[[def-surface-integral-on-a-compact-c-one-hypersurface]] of the continuous
function $a\,(\psi|_S)$. For complex tests the integral is defined componentwise in real and imaginary parts; the proof below uses real tests. Then $a=0$ on $S$. Equivalently, if two continuous
densities on $S$ pair equally against every test function, then they are equal
pointwise on $S$. The conclusion is pointwise and uses the continuity of $a$;
a merely locally integrable density would satisfy only an almost-everywhere
conclusion, which this statement does not claim.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$. An open set $\Omega\subseteq\mathbb R^3$, a compact embedded hypersurface $S\subset\Omega$ of the stated class with its surface measure $dS$, a continuous $a:S\to\mathbb R$, and the hypothesis that $\int_Sa\psi\,dS=0$ for every $\psi\in C_c^\infty(\Omega)$. Subsets of $\mathbb R^3$ carry the subspace metric and the Euclidean distance $d_2$ ([[def-metric-continuity]], [[def-metric-ball]]).

[F1] $\Omega$ is open: every $x_0\in\Omega$ has a ball $B(x_0,\rho)\subseteq \Omega$ ([[def-metric-topology]]). A map is continuous at a point when the usual $\varepsilon$-$\delta$ condition holds for the subspace metric ([[def-metric-continuity]], [[def-metric-ball]]).

[F2] The class of [[def-surface-integral-on-a-compact-c-one-hypersurface]] consists of finitely many regular injective $C^1$ parametrizations $X_j:V_j\to S\cap O_j$, $O_j$ open in $\mathbb R^3$ and $V_j$ open in $\mathbb R^2$, whose images cover $S$ and whose coordinate transitions are $C^1$; a $C^1$ map is continuous ([[def-ck-euclidean-maps-and-diffeomorphisms]]). For a nonnegative Borel $f$ the integral is the finite chart sum $\int_Sf\,dS=\sum_j\int_{V_j}(\chi_jf)(X_j(y))J_{X_j}(y)\,dy$ against a subordinate ambient partition, the chart formula restricts to a compact Borel face contained in a regular patch, and a signed $f$ with $\int_S|f|\,dS<\infty$ is integrated through the difference of its positive and negative parts.

[F3] The chart integral defines a finite Borel measure on $S$, independent of the finite charts and the subordinate partitions, and every regular chart density $J_{X_j}$ is continuous and strictly positive ([[lem-surface-integral-is-independent-of-c-one-boundary-charts]]).

[F4] For every $0<r<R$ and centre $x_0$ there is a smooth $\psi:\mathbb R^3\to[0,1]$ equal to one on $\overline B_r(x_0)$ with support strictly inside $B_R(x_0)$ ([[lem-scaled-euclidean-bumps-with-compact-support-and-gradient-bound]]); a smooth function whose support is a compact subset of $\Omega$ belongs to $\mathcal D(\Omega)=C_c^\infty(\Omega)$ ([[def-test-function-space-d-of-an-open-set]]).

[F5] The nonnegative Lebesgue integral of a measurable function is monotone and homogeneous for nonnegative scalars, and the integral of the constant multiple $\beta\mathbf 1_C$ of the indicator of a measurable set $C$ of finite measure is $\beta\,\lambda_2(C)$ ([[def-nonnegative-lebesgue-integral]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[def-integral-of-a-nonnegative-simple-function]], [[prop-the-nonnegative-integral-agrees-with-the-simple-integral]]).

[F6] Every closed axis-parallel square $C\subseteq\mathbb R^2$ of side $\ell>0$ is Lebesgue measurable with $\lambda_2(C)=\ell^2>0$ ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[F7] The signed Lebesgue integral is defined through the positive and negative parts and is real-linear on integrable functions ([[def-integrable-real-and-complex-functions-and-their-integrals]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

[F8] Continuous real functions on a nonempty compact metric space attain finite extrema ([[thm-extreme-value-metric]]), and continuous maps have Borel preimages of Borel sets ([[thm-continuous-preimages-of-borel-sets-are-borel]]). Thus continuous densities on $S$ and compact chart cells are bounded and Borel.

## Proof

1.1 Assume that $a(x_0)\ne0$ for some $x_0\in S$ and put $m:=|a(x_0)|/2>0$; let $\sigma:=\operatorname{sgn}(a(x_0))$, so that $\sigma a(x_0)=2m>0$. [given, choose, algebra]

1.2 Continuity of $a$ at $x_0$ gives $\delta_1>0$ with $|a(x)-a(x_0)|<m$ for every $x\in S$ with $d_2(x,x_0)<\delta_1$, hence $\sigma a(x)>m$; openness of $\Omega$ gives $\delta_2>0$ with $B(x_0,\delta_2)\subseteq\Omega$. With $N:=B(x_0,\min\{\delta_1,\delta_2\})$ we have $N\subseteq\Omega$ open and $\sigma a>m$ on $S\cap N$. [F1, choose, algebra]

1.3 For any nonnegative real smooth test $\psi$, the continuous function $a\psi$ is Borel and bounded on the compact $S$ by [F8], so $\int_S|a\psi|\,dS\le C\,S(S)<\infty$ by monotonicity of the nonnegative surface integral and finiteness of the surface measure, and the signed integral $\int_Sa\psi\,dS$ is defined; it equals $\int_S(a\psi)^+\,dS-\int_S(a\psi)^-\,dS$, and on $S$ we have $(a\psi)^+=a^+\psi$ and $(a\psi)^-=a^-\psi$ because $\psi\ge0$. [F2, F3, F5, F8, given]

2.1 The chart family of the class covers $S$, so $x_0\in S\cap O$ for one of its charts $X:V\to S\cap O$ with $V\subseteq\mathbb R^2$ open and $X$ regular, injective and $C^1$; write $u_0:=X^{-1}(x_0)$. Replacing $O$ by $O\cap N$ and $V$ by $X^{-1}(S\cap(O\cap N))$, the restricted parametrization is again a regular injective $C^1$ chart of the class with $X(V)=S\cap O$ and $O\subseteq N$, so $\sigma a>m$ on $X(V)$. [F2, step 1.2, algebra]

3.1 Choose $R>0$ with $\overline B_R(x_0)\subseteq O$ and put $r:=R/2$; the scaled Euclidean bump yields $\psi\in C_c^\infty(\mathbb R^3)$ with $0\le\psi\le1$, $\psi=1$ on $\overline B_r(x_0)$ and $\operatorname{supp}\psi\subseteq B_R(x_0)\subseteq O\subseteq\Omega$, so $\psi\in\mathcal D(\Omega)$. [F4, step 2.1, choose]

4.1 By continuity of $X$ at $u_0$ there is $\delta>0$ with $X[B(u_0,\delta)]\subseteq B_r(x_0)$, so choosing $\ell>0$ with $\ell/\sqrt2<\delta$ and $\ell$ small enough that the closed axis-parallel square $C:=u_0+[-\ell/2,\ell/2]^2$ lies in $V$ gives $C\subseteq B(u_0,\delta)$ and $X(C)\subseteq B_r(x_0)$; then $X(C)\subseteq B_r(x_0)\subseteq\overline B_R(x_0)\subseteq O$ and $\lambda_2(C)=\ell^2>0$, and $X(C)$ is a compact Borel face contained in the regular patch $X$. [F1, F2, F6, step 2.1, step 3.1, choose, algebra]

5.1 The chart density $J=J_X$ is continuous and strictly positive on $V$, so [F8] on the nonempty compact square $C$ gives an attained minimum $\beta:=\min_CJ>0$ and $J\ge\beta$ on $C$; since $X$ is injective with $X(V)=S\cap O$, the restricted chart formula gives $S(X(C))=\int_V\mathbf 1_{X(C)}(X(y))J(y)\,dy=\int_V\mathbf 1_C(y)J(y)\,dy \ge\int_V\beta\mathbf 1_C(y)\,dy=\beta\lambda_2(C)=\beta\ell^2>0$. [F2, F3, F5, F8, step 4.1, algebra]

5.2 On the support of $\psi$ intersected with $S$ the sign $\sigma$ is constant and $|\sigma a|>m$; where $\psi$ vanishes the product $a\psi$ also vanishes. Consequently $\sigma a\psi\ge m\,\mathbf 1_{X(C)}$ pointwise on $S$: on $X(C)$ we have $\psi=1$ and $\sigma a>m$, and off $X(C)$ the left side is nonnegative on $S\cap\operatorname{supp}\psi$ and zero elsewhere. [step 2.1, step 3.1, step 4.1, algebra]

6.1 Monotonicity of the nonnegative surface integral, applied through the chart formula, and the evaluation of step 5.1 give $\sigma\int_Sa\psi\,dS=\int_S\sigma a\psi\,dS\ge m\,S(X(C))\ge m\beta\ell^2>0$, so $\int_Sa\psi\,dS\ne0$; this contradicts the hypothesis for the test function $\psi\in\mathcal D(\Omega)$. Hence $a(x_0)=0$ for every $x_0\in S$. [step 5.1, step 1.3, step 5.2, F2, F5, given, contradiction]

7.1 For the equal-density clause let $a,b:S\to\mathbb R$ be continuous with $\int_Sa\psi\,dS=\int_Sb\psi\,dS$ for every $\psi\in C_c^\infty(\Omega)$; both $a\psi$ and $b\psi$ are bounded on $S$, so both signed integrals are defined, and the chartwise representation of the signed integral as a finite sum of signed Lebesgue integrals, together with linearity of the Lebesgue integral, gives $\int_S(a-b)\psi\,dS=\int_Sa\psi\,dS-\int_Sb\psi\,dS=0$ for every $\psi$. The continuous density $c:=a-b$ therefore satisfies the hypothesis of the Statement, and step 6.1 gives $c=0$, that is $a=b$ on $S$. [step 6.1, F2, F3, F7, F8, given, algebra] ∎



## Source notes

The pointwise conclusion is the standard reduction of a vanishing pairing against every ambient smooth test function to a local positivity argument on the hypersurface. The proof above keeps the library's own chart-measure interface: the graph density of the published treatments appears here only through the strict positivity and continuity of the regular chart density of [[lem-surface-integral-is-independent-of-c-one-boundary-charts]], so no product-extension assertion for arbitrary planar tests is used.
