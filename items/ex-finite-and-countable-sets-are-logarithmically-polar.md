---
id: ex-finite-and-countable-sets-are-logarithmically-polar
kind: example
title: "Finite and countable planar sets have zero logarithmic capacity"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-countable-choice
  - def-countable
  - def-polar-set-and-quasi-everywhere
  - def-logarithmic-potential-and-energy
  - def-logarithmic-capacity-compact-set
  - def-probability-measure
  - def-dirac-measure
  - def-complex-domain
  - def-plane-subharmonic-function
  - def-plane-harmonic-function
  - def-nonnegative-weighted-sum-of-measures
  - thm-nonnegative-weighted-sums-of-measures
  - thm-monotone-convergence-for-the-integral
  - lem-logarithmic-potential-distributional-laplacian
  - thm-log-modulus-of-a-holomorphic-function-is-subharmonic
  - lem-log-modulus-is-harmonic-off-its-centre
  - thm-c-two-characterization-of-plane-subharmonicity
  - lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity
  - thm-differentiation-under-the-integral-sign
  - thm-dominated-convergence
  - thm-plane-subharmonic-functions-are-locally-integrable
  - cor-finite-nonnegative-integral-implies-finite-almost-everywhere
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "E. B. Saff, Logarithmic Potential Theory with Applications to Approximation Theory, §§1–3"
      url: "https://arxiv.org/pdf/1010.3760"
      locator: "§1, polar sets and sets of capacity zero, printed pp. 168–172; §3, polar sets and the Evans function"
    - title: "B. Khoruzhenko, LTCC Potential Theory notes, §§3 and 5"
      url: "https://maths.qmul.ac.uk/~boris/potential_th_notes.pdf"
      locator: "§3, polar sets; §5, countable sets and the logarithmic capacity"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice. Every finite or countable set
$E\subseteq\mathbb C$ is capacity-polar in the compact/local sense of
[[def-polar-set-and-quasi-everywhere]]: every compact $F\subseteq E$ satisfies
$\operatorname{cap}(F)=0$ for the logarithmic capacity of
[[def-logarithmic-capacity-compact-set]]. Moreover $E$ is contained in the
$-\infty$ locus of an explicitly constructed subharmonic function on
$\mathbb C$ that is not identically $-\infty$, so $E$ is also
subharmonically polar.

The Axiom of Countable Choice is used through the local integrability and
subharmonicity of compactly supported logarithmic potentials
([[lem-logarithmic-potential-distributional-laplacian]]), which enters the
construction of the witness; the diagonal $+\infty$ of the logarithmic kernel
and the countable atom computation of the energy are choice-free.

## Facts & Assumptions

**Given:** an at most countable set $E\subseteq\mathbb C$, the logarithmic kernel $k(z,w)=\log(1/|z-w|)$ with diagonal value $+\infty$, the potentials $U^\mu$, $p_\mu=-U^\mu$ and the energy $I(\mu)$ of [[def-logarithmic-potential-and-energy]], the Robin constant $V_F$ and capacity $\operatorname{cap}(F)$ of [[def-logarithmic-capacity-compact-set]], and the Axiom of Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]).

[F1] $k(z,w)=\log\frac1{|z-w|}\in(-\infty,+\infty]$ is Borel, equals $+\infty$ exactly when $z=w$, and $p_\mu(z)=\int\log|z-w|\,d\mu(w)\in[-\infty,+\infty)$ for every finite positive Borel measure $\mu$ of compact support; for $R>\operatorname{diam}(\operatorname{supp}\mu)$ one has $k_R=k+\log R\ge0$ on the product of the support with itself and $I(\mu)=\iint k_R\,d\mu\,d\mu-\mu(\mathbb C)^2\log R$, independently of $R$ ([[def-logarithmic-potential-and-energy]]).

[F2] For nonempty compact $F$, $V_F=\inf_{\nu\in P(F)}I(\nu)$ and $\operatorname{cap}(F)=e^{-V_F}$ when $V_F<+\infty$, $\operatorname{cap}(F)=0$ when $V_F=+\infty$; $\operatorname{cap}(\varnothing)=0$; and $\operatorname{cap}(F)=0$ holds exactly when $I(\nu)=+\infty$ for every Borel probability $\nu$ on $F$ ([[def-logarithmic-capacity-compact-set]]).

[F3] Capacity-polar means that every compact subset has capacity zero, and subharmonically polar means that every point of the set lies in a complex domain carrying a subharmonic function that is $-\infty$ on the part of the set lying in that domain ([[def-polar-set-and-quasi-everywhere]]).

[F4] Assume $\mathrm{AC}_\omega$: for a finite positive Borel measure $\mu$ with nonempty compact support, $p_\mu$ is locally integrable on $\mathbb C$ and subharmonic on the domain $\mathbb C$, and harmonic on $\mathbb C\setminus\operatorname{supp}\mu$ ([[lem-logarithmic-potential-distributional-laplacian]], [[def-complex-domain]]).

[F5] For every $a\in\mathbb C$ the function $z\mapsto\log|z-a|$ is subharmonic on $\mathbb C$ ([[thm-log-modulus-of-a-holomorphic-function-is-subharmonic]]) and is $C^\infty$ and harmonic on $\mathbb C\setminus\{a\}$ ([[lem-log-modulus-is-harmonic-off-its-centre]]); a real function is harmonic when it is $C^2$ and $u_{xx}+u_{yy}=0$ ([[def-plane-harmonic-function]]), and a $C^2$ function with $u_{xx}+u_{yy}\ge0$ is subharmonic ([[thm-c-two-characterization-of-plane-subharmonicity]]).

[F6] Nonnegative linear combinations of finitely many subharmonic functions are subharmonic ([[lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity]]); in particular, by [F5] a sum of a subharmonic function and a harmonic function is subharmonic.

[F8] Differentiation under the integral sign: if $f:X\times I\to\mathbb C$ has $x\mapsto f(x,t)$ integrable for every $t$ in an open interval $I$, is differentiable in $t$ for almost every $x$, has measurable $t$-derivative, and the $t$-derivative is dominated in modulus by an integrable $g$ independent of $t$, then $t\mapsto\int f(x,t)\,d\mu(x)$ is differentiable on $I$ with derivative $\int\partial_tf\,d\mu$ ([[thm-differentiation-under-the-integral-sign]]).

[F9] Dirac measures are probability measures, and finite or countable nonnegative weighted sums of measures are measures, with the integral identity $\int g\,d\bigl(\sum_jc_j\mu_j\bigr)=\sum_jc_j\int g\,d\mu_j$ for nonnegative Borel $g$, by the pointwise definition and monotone convergence ([[def-dirac-measure]], [[def-probability-measure]], [[def-nonnegative-weighted-sum-of-measures]], [[thm-nonnegative-weighted-sums-of-measures]], [[thm-monotone-convergence-for-the-integral]]).


[F11] Subharmonicity on a complex domain means: upper semicontinuity, no connected component carrying the value $-\infty$ identically, and the circle mean inequality at every closed disc contained in the domain ([[def-plane-subharmonic-function]]); every subharmonic function on a plane domain is locally integrable ([[thm-plane-subharmonic-functions-are-locally-integrable]]).

[F12] A subset of an at most countable set is at most countable, a set is countably infinite when it is in bijection with $\mathbb N$, and a finite or countably infinite set can be listed without repetitions ([[def-countable]]).




## Verification

**Proof technique:** direct.

1.1 The statements to prove are the capacity-polarity of $E$ and the existence of a subharmonic witness with $E$ in its $-\infty$ locus; two elementary cases come first, and the countably infinite case occupies the rest of the proof. [given, F3]

1.2 **The empty case.** If $E=\varnothing$ there is no compact subset to test, so $E$ is capacity-polar by [F3] and [F2], and the zero function $u\equiv0$ is of class $C^2$ with vanishing Laplacian, hence harmonic and therefore subharmonic on the domain $\mathbb C$ by [F5], while its $-\infty$ locus is empty; so the statement holds for $E=\varnothing$. [F2, F3, F5, given]

1.3 **A compact at most countable set has capacity zero.** Let $F\subseteq E$ be compact and nonempty; by [F12] the set $F$ is at most countable, so it can be listed without repetitions as $F=\{b_1,b_2,\dots\}$ (the list is finite when $F$ is finite and otherwise is a bijection with $\mathbb N$; for $F\subseteq E$ with $E$ in bijection with $\mathbb N$ the listing comes from ordering the corresponding subset of $\mathbb N$, which uses no choice). Let $\nu$ be a Borel probability measure on $F$; by countable additivity over the disjoint singletons $1=\nu(F)=\sum_i\nu(\{b_i\})$, so some index $i_0$ has $m:=\nu(\{b_{i_0}\})>0$, since otherwise the sum would be $0$. [F12, given]

1.4 **The finite nonempty case and its witness.** Let $E=\{a_1,\dots,a_m\}$ be finite and nonempty, listed without repetitions by [F12], and put $c_j:=2^{-j}\in(0,\infty)$ and $\sigma:=\sum_{j=1}^mc_j\delta_{a_j}$; by [F9] the set function $\sigma$ is a finite positive Borel measure carried by $E$, and for every nonnegative Borel $g$ one has $\int g\,d\sigma=\sum_{j=1}^mc_jg(a_j)$. Put $u(z):=p_\sigma(z)=\sum_{j=1}^mc_j\log|z-a_j|$; since the sum is finite and each $z\mapsto\log|z-a_j|$ is subharmonic by [F5], [F6] makes $u$ subharmonic on $\mathbb C$. At $z=a_j$ every summand with index $k\ne j$ is the finite number $\log|a_j-a_k|$ because the points are distinct, while the $j$-th summand is $-\infty$, so $u(a_j)=-\infty$; thus $E$ lies in the $-\infty$ locus of the subharmonic function $u$, which is not identically $-\infty$ because it is finite at every point outside the finite set $E$. [F5, F6, F9, F12, algebra]

1.5 **The countably infinite case: the measure and the potential.** Let $E=\{a_1,a_2,\dots\}$ be a listing without repetitions of a countably infinite set, and put $c_j:=2^{-j}/(1+\log(1+|a_j|))>0$ and $\sigma:=\sum_{j=1}^{\infty}c_j\delta_{a_j}$. Since $c_j(1+\log(1+|a_j|))=2^{-j}$, one has $\sum_jc_j(1+\log(1+|a_j|))=1<+\infty$ and in particular $\sigma(\mathbb C)=\sum_jc_j\le1$; by [F9] the weighted sum $\sigma$ is a finite positive Borel measure with $\int g\,d\sigma=\sum_jc_jg(a_j)$ for every nonnegative Borel $g$, so applying this to $g(w)=\log(1+|w|)$ gives the finite logarithmic moment $\int\log(1+|w|)\,d\sigma(w)=\sum_jc_j\log(1+|a_j|)\le1<+\infty$. [F9, given, algebra]

2.1 With $\nu$, $F$ and $b_{i_0}$ as in step 1.3, choose $R>\operatorname{diam}(F)$ and put $k_R(z,w)=k(z,w)+\log R\ge0$ on $F\times F$; at the diagonal point $(b_{i_0},b_{i_0})$ one has $k_R=+\infty$, and the atom $\{b_{i_0}\}$ carries $\nu$-mass $m>0$. The inner integral at $z=b_{i_0}$ is $+\infty$: for every real $M$ the nonnegative function $w\mapsto k_R(b_{i_0},w)$ satisfies $k_R(b_{i_0},w)\ge M\mathbf 1_{\{b_{i_0}\}}(w)$, so by monotonicity of the integral this inner integral is at least $M\,m$ for every real $M$ and hence equals $+\infty$. Therefore the iterated double integral of the nonnegative function $k_R$ against $\nu\otimes\nu$ is infinite, and [F1] gives $I(\nu)=+\infty$. [F1, F9, given, algebra]

2.2 Put $u(z):=p_\sigma(z)=\int\log|z-w|\,d\sigma(w)\in[-\infty,+\infty)$. At $z=a_{j_0}$ the positive part is finite because $\log^+|a_{j_0}-w|\le\log(1+|a_{j_0}|)+\log(1+|w|)$ has finite $\sigma$-integral by step 1.5, while the negative part satisfies $\log^-|a_{j_0}-w|\ge M\mathbf 1_{\{a_{j_0}\}}(w)$ for every real $M$ and $\sigma(\{a_{j_0}\})=c_{j_0}>0$, so $\int\log^-|a_{j_0}-w|\,d\sigma(w)=+\infty$ by monotonicity of the integral; therefore $u(a_{j_0})=\int\log^+-\int\log^-=-\infty$, that is, $u=-\infty$ on $E$. [step 1.5, F9, given]

2.3 **Local decomposition of the potential.** Fix $N\ge1$ with $N\ge|a_1|$, so that the disc below meets $E$, and split $\sigma$ into the finite positive Borel measures $\sigma_N:=\sigma\!\restriction_{\{|w|\le2N+1\}}$ and $\sigma^N:=\sigma\!\restriction_{\{|w|>2N+1\}}$, whose pointwise sum is $\sigma$. For $z\in D(0,N)$ and $w$ with $|w|>2N+1$ one has $|z-w|\ge|w|-N>N+1>1$, so the two extended integrals $\int_{\{|w|\le2N+1\}}\log|z-w|\,d\sigma(w)$ and $\int_{\{|w|>2N+1\}}\log|z-w|\,d\sigma(w)$ have finite positive parts by the logarithmic moment in step 1.5; the compact part may have infinite negative part, while the tail has zero negative part and finite integral. Thus their sum is a well-defined extended integral and $u(z)=p_{\sigma_N}(z)+p_{\sigma^N}(z)$ for $p_{\sigma^N}(z):=\int_{\{|w|>2N+1\}}\log|z-w|\,d\sigma(w)\in\mathbb R$. [step 1.5, given, algebra]

3.1 Since every Borel probability $\nu$ on $F$ has $I(\nu)=+\infty$ by step 2.1, the characterization [F2] gives $V_F=+\infty$ and $\operatorname{cap}(F)=0$, and the empty compact set also has $\operatorname{cap}(\varnothing)=0$ by [F2]; as $F\subseteq E$ was an arbitrary compact subset, $E$ is capacity-polar. This proves the first assertion for every at most countable $E$, including the finite case. [step 1.3, step 2.1, F2, F3]

3.2 The first summand in step 2.3 is subharmonic on $\mathbb C$: $\sigma_N$ is a finite positive Borel measure with nonempty compact support $\operatorname{supp}\sigma_N\subseteq\{|w|\le2N+1\}$, so [F4], whose hypothesis $\mathrm{AC}_\omega$ is the standing assumption, gives that $p_{\sigma_N}$ is locally integrable and subharmonic on the domain $\mathbb C$. [step 2.3, F4, given]

3.3 The second summand of step 2.3 is harmonic on $D(0,N)$. Fix $w$ with $|w|>2N+1$ and write $z=x+iy$; on $D(0,N)$ the function $z\mapsto\log|z-w|$ is smooth with $|z-w|>N+1$, and it is harmonic off $w$ by [F5]. The differentiation theorem [F8] applies to the two real parameters: the integrand is $\sigma^N$-integrable for every $z\in D(0,N)$ since $0<\log|z-w|\le\log2+\log(1+|w|)$ and $\int\log(1+|w|)\,d\sigma^N(w)<+\infty$ by step 1.5, and the partial derivatives of order one and two in $x$ and $y$ are bounded on $D(0,N)\times\{|w|>2N+1\}$ by constants $(N+1)^{-1}$ and $(N+1)^{-2}$, which are $\sigma^N$-integrable because $\sigma^N(\mathbb C)\le1$. Applying [F8] to the $x$-parameter and to the $y$-parameter, and then to the resulting first partial derivatives, shows that $p_{\sigma^N}$ is twice continuously differentiable on $D(0,N)$ with second partial derivatives obtained by differentiating under the integral (continuity of these derivatives follows from their pointwise continuity and the same integrable bounds by [[thm-dominated-convergence]]); since $\partial_x^2\log|z-w|+\partial_y^2\log|z-w|=0$ for $z\ne w$ by [F5], summing gives $(\partial_x^2+\partial_y^2)p_{\sigma^N}(z)=\int(\partial_x^2+\partial_y^2)\log|z-w|\,d\sigma^N(w)=0$ on $D(0,N)$, so $p_{\sigma^N}$ is harmonic there by [F5]. [step 1.5, step 2.3, F5, F8, algebra]

4.1 On $D(0,N)$ the function $u=p_{\sigma_N}+p_{\sigma^N}$ is subharmonic: the first summand is subharmonic on $\mathbb C$, hence on $D(0,N)$, by step 3.2, the second is harmonic, hence subharmonic by the $C^2$ criterion of [F5], and a sum of two subharmonic functions is subharmonic by [F6]. Since every $z_0\in\mathbb C$ lies in some such disc $D(0,N)$ with $N\ge|a_1|$ and $N>|z_0|$, the function $u$ meets the defining conditions of [F11] on the domain $\mathbb C$: it is upper semicontinuous because upper semicontinuity is local and holds on each $D(0,N)$ by subharmonicity there, it is not identically $-\infty$ on any $D(0,N)$ because it is subharmonic there, and the circle mean inequality holds at every closed disc of $\mathbb C$ because each such disc is contained in some $D(0,N)$ on which $u$ is subharmonic. Therefore $u$ is subharmonic on $\mathbb C$ and not identically $-\infty$; by step 2.2 it is $-\infty$ on $E$, so $E$ lies in the $-\infty$ locus of the explicitly constructed subharmonic function $u$, and for every $x\in E$ the single neighbourhood $U_x:=\mathbb C$ with witness $u$ exhibits the local condition of [F3], so $E$ is subharmonically polar. [step 2.2, step 3.2, step 3.3, F3, F5, F6, F11]

5.1 The first assertion of the statement was proved in step 3.1 for every at most countable $E$ without further choice, the listings being supplied by countability itself ([F12]) and the atom computation being choice-free; steps 1.4 and 4.1 construct the witness in the finite and countably infinite cases, and step 1.2 covers the empty set. The only choice principle spent anywhere is the Countable Choice of [F4] used in step 3.2, which is the standing hypothesis $\mathrm{AC}_\omega$. This proves both assertions. [step 1.2, step 3.1, step 1.4, step 4.1, F4, F12, given] ∎

## Remarks
