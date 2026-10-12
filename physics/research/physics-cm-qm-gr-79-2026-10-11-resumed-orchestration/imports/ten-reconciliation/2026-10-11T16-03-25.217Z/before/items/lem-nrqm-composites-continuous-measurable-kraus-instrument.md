---
id: lem-nrqm-composites-continuous-measurable-kraus-instrument
aliases: [nrqm-composites-continuous-measurable-kraus-instrument]
kind: lemma
domain: mathematics
title: "Continuous measurable Kraus instruments: isometry, POVM and trace-norm integration"
status: draft
origin: pipeline
dependency_level: 4
deps: [def-measure-null-set-and-almost-everywhere, cor-cauchy-schwarz-inequality-for-l-two, thm-minkowski-inequality-for-integrals, thm-monotone-convergence-for-the-integral, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-cauchy-schwarz-in-an-inner-product-space, thm-trace-is-absolutely-convergent-and-basis-independent, lem-nuclear-series-characterizes-trace-norm, lem-nrqm-composites-general-trace-class-instrument-and-effect-duality, lem-nrqm-composites-separable-partial-trace, lem-nrqm-composites-density-and-scalar-spectral-probability, lem-nrqm-composites-nuclear-bounded-cyclicity, def-bochner-integrable-function, lem-bochner-integral-norm-inequality, thm-bochner-integrability-criterion, thm-bochner-dominated-convergence, def-strongly-measurable-banach-valued-function, def-trace-class-operator, def-l-p-space-as-a-quotient-by-null-functions, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, lem-nrqm-composites-rank-one-operator-calculus, thm-trace-class-is-a-two-sided-banach-operator-ideal, def-countable-choice, lem-nrqm-composites-hilbert-tensor-construction]
dependency_roles:
  def-measure-null-set-and-almost-everywhere: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  thm-minkowski-inequality-for-integrals: mathematical-premise
  thm-monotone-convergence-for-the-integral: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  thm-cauchy-schwarz-in-an-inner-product-space: mathematical-premise
  thm-trace-is-absolutely-convergent-and-basis-independent: mathematical-premise
  lem-nuclear-series-characterizes-trace-norm: mathematical-premise
  lem-nrqm-composites-general-trace-class-instrument-and-effect-duality: mathematical-premise
  lem-nrqm-composites-separable-partial-trace: mathematical-premise
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  lem-nrqm-composites-nuclear-bounded-cyclicity: mathematical-premise
  def-bochner-integrable-function: mathematical-premise
  lem-bochner-integral-norm-inequality: mathematical-premise
  thm-bochner-integrability-criterion: mathematical-premise
  thm-bochner-dominated-convergence: mathematical-premise
  def-strongly-measurable-banach-valued-function: mathematical-premise
  def-trace-class-operator: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  lem-nrqm-composites-rank-one-operator-calculus: mathematical-premise
  thm-trace-class-is-a-two-sided-banach-operator-ideal: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Topics in Real and Functional Analysis (2017), Ch. 1-3 (Bochner integration, trace-class Banach space and duality)"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "MIT 8.05 Quantum Physics II (Fall 2013), Chapter 4 'Dirac's Bra and Ket Notation' (POVM formulation)"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/4de6d044fa9d7e5b8998c5f8ca984a42_MIT8_05F13_Chap_04.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $(X,\Sigma,\mu)$ be a $\sigma$-finite measure space, $H$ a nonzero separable complex Hilbert space, and $(M_r)_{r\ge1}$ bounded operator-valued maps on $X$ such that:

(i) for every $\psi\in H$ the map $x\mapsto M_r(x)\psi$ is strongly measurable for each $r$ ([[def-strongly-measurable-banach-valued-function]]) and

$$\int_X\sum_{r\ge1}\|M_r(x)\psi\|^2\,d\mu(x)=\|\psi\|^2\qquad(\psi\in H).$$

Here $E:=\ell^2(H)$ is the space of sequences $z=(z_r)_{r\ge1}$ with $\sum_r\|z_r\|^2<\infty$, with inner product $\langle z,w\rangle_E:=\sum_r\langle z_r,w_r\rangle_H$. Define $L^2(X,\mu;E)$ as the vector space of strongly measurable fields $f:X\to E$ with $\int_X\|f(x)\|_E^2d\mu<\infty$, modulo equality almost everywhere; its inner product is $\langle[f],[g]\rangle:=\int_X\langle f(x),g(x)\rangle_Ed\mu$. The proof establishes that both spaces are Hilbert spaces before using adjoints or PVMs on this target.

Then:

(a) the formula $W\psi(x):=(M_r(x)\psi)_r$ defines a linear isometry $W:H\to L^2(X,\mu;\ell^2(H))$;

(b) for $B\in\Sigma$ the multiplication operator $P(B)$ by $\mathbf 1_B$ is a projection-valued measure on $(X,\Sigma)$, and $F(B):=W^*P(B)W$ is a normalized POVM with $F(X)=I$;

(c) for every positive trace-class $\rho=\sum_nw_nT_{u_n,u_n}$ ([[def-trace-class-operator]], [[lem-nrqm-composites-density-and-scalar-spectral-probability]]) the Bochner integral

$$I_B(\rho):=\sum_{n\ge1}w_n\int_B\sum_{r\ge1}T_{M_r(x)u_n,M_r(x)u_n}\,d\mu(x)$$

converges in trace norm and defines a positive trace-class operator with $\operatorname{tr}I_B(\rho)=\operatorname{tr}(\rho F(B))$; the map $B\mapsto I_B(\rho)$ is countably additive in trace norm and $I_X$ is trace preserving, so $I$ is an abstract instrument in the sense of [[lem-nrqm-composites-general-trace-class-instrument-and-effect-duality]]; moreover $\operatorname{tr}(I_B(\rho)A)=\sum_r\int_B\operatorname{tr}(M_r(x)\rho M_r(x)^*A)\,d\mu(x)$ for bounded $A$, and finite-dimensional ancilla amplifications preserve positivity;

(d) the conditional update at an event $B$ with $p(B)=\operatorname{tr}(\rho F(B))>0$ is $I_B(\rho)/p(B)$; singleton densities need not define a normalized state. Universal normal-instrument representation is not claimed.

## Facts & Assumptions

**Given:** $(X,\Sigma,\mu)$, $H$, $(M_r)$ with the normalization identity; a positive trace-class $\rho=\sum_nw_nT_{u_n,u_n}$.

[F1] $\|(M_r(x)\psi)_r\|_{\ell^2(H)}^2=\sum_r\|M_r(x)\psi\|^2$; the normalization hypothesis says the Bochner square norm is $\|\psi\|^2$, so the resulting equivalence class belongs to $L^2$ and has norm $\|\psi\|$ ([[def-bochner-integrable-function]], [[def-l-p-space-as-a-quotient-by-null-functions]], [[lem-nrqm-composites-hilbert-tensor-construction]]).

[F2] For $T\in\mathcal S_1(H)$ the rank-one map $v\mapsto T_{v,v}$ is trace-norm continuous with $\|T_{v,v}\|_1=\|v\|^2$; $T_{x,z}B=T_{x,B^*z}$ and $\|ATB\|_1\le\|A\|\,\|T\|_1\|B\|$ ([[lem-nrqm-composites-rank-one-operator-calculus]], [[thm-trace-class-is-a-two-sided-banach-operator-ideal]], [[lem-nrqm-composites-nuclear-bounded-cyclicity]]).

[F3] A strongly measurable Banach-valued function is Bochner integrable exactly when the integral of its norm is finite; the Bochner integral is norm-continuous and dominated convergence holds under an integrable majorant ([[thm-bochner-integrability-criterion]], [[lem-bochner-integral-norm-inequality]], [[thm-bochner-dominated-convergence]]).

[F4] Tonelli's theorem permits interchanging the nonnegative sum over $r$ and the integral over $X$; the trace pairing satisfies $\operatorname{tr}(T_{x,z})=\langle x,z\rangle$ and the polarisation/positivity properties of the previous items ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[lem-nrqm-composites-rank-one-operator-calculus]], [[lem-nrqm-composites-separable-partial-trace]]).

[F5] Nuclear representations converge in trace norm as well as operator norm; finite rank-one sums are trace-norm dense, and $\operatorname{tr}(T_{u,v}A)=\langle Au,v\rangle$ for bounded $A$. Cauchy–Schwarz applies both to the countable coordinate sum and to the scalar integral ([[lem-nuclear-series-characterizes-trace-norm]], [[thm-trace-is-absolutely-convergent-and-basis-independent]], [[lem-nrqm-composites-rank-one-operator-calculus]], [[thm-cauchy-schwarz-in-an-inner-product-space]]).

[F6] Monotone convergence applies to nonnegative scalar functions; scalar $L^2$ Cauchy–Schwarz and Minkowski give the integral product and sum bounds. Equality almost everywhere means equality outside a measurable null set ([[thm-monotone-convergence-for-the-integral]], [[cor-cauchy-schwarz-inequality-for-l-two]], [[thm-minkowski-inequality-for-integrals]], [[def-measure-null-set-and-almost-everywhere]]).

## Proof

1.1 [Construction and completeness of the Hilbert target] Coordinate Cauchy–Schwarz makes the inner product of $E=\ell^2(H)$ absolutely convergent and gives its squared norm $\sum_r\|z_r\|^2$. If $(z^{(n)})$ is Cauchy in this norm, each coordinate converges in the complete space $H$ to $z_r$; taking limits of finite squared sums shows $\sum_r\|z_r\|^2<\infty$ and $\|z^{(n)}-z\|_E\to0$. Thus $E$ is Hilbert. Strongly measurable $E$-valued fields have measurable norm and inner-product functions by their simple approximants; scalar Cauchy–Schwarz [F6] gives absolute integrability of the target inner product. This integral descends to the almost-everywhere quotient, is positive definite there, and has the stated norm; scalar Minkowski gives its triangle inequality. For completeness, take a Cauchy sequence of classes and a subsequence with representatives $f_k$ satisfying $\|f_{k+1}-f_k\|_2\le2^{-k}$; Countable Choice permits the countable representative selection. Set $d_k=f_{k+1}-f_k$. For $g_N:=\sum_{k\le N}\|d_k(\cdot)\|_E$, scalar Minkowski gives $\|g_N\|_2\le\sum_{k\le N}2^{-k}\le1$. Monotone convergence [F6] applied to $g_N^2$ gives $g:=\sum_k\|d_k\|_E\in L^2$ and $g<\infty$ almost everywhere. Hence $f_1+\sum_kd_k$ converges pointwise off a measurable null set in complete $E$; define its limit as zero on that set. The limit is strongly measurable: the countably many simple approximant ranges for all $f_k$ have a separable closed span, norm distances to a countable dense subset are measurable, and choosing the nearest of the first $N$ dense points gives finite-valued simple approximants converging pointwise. Scalar Minkowski and monotone convergence also give $\|f-f_k\|_2\le\sum_{j\ge k}2^{-j}\to0$, and $f\in L^2$ since $\|f\|_E\le\|f_1\|_E+g$. The original Cauchy sequence converges to the same class by the triangle inequality. Therefore the defined target is a Hilbert space; the construction uses no assumption that $\mu(X)$ is finite. [given, F1, F3, F6, choose, construct, algebra]

2.1 [The $L^2$ isometry] Fix $\psi\in H$. The measurable nonnegative function $g_\psi(x):=\sum_r\|M_r(x)\psi\|^2$ has finite integral $\|\psi\|^2$, so it is finite outside a null set. On that set the finite coordinate truncations converge in $\ell^2(H)$; define the vector field to be zero on the exceptional null set. The truncations are strongly measurable and their pointwise limit is strongly measurable, as follows directly by approximation with simple functions (or by separability of $\ell^2(H)$ and measurable coordinates). The field belongs to $L^2(X;\ell^2(H))$ because its squared norm is $g_\psi$ almost everywhere. Its equivalence class defines $W\psi$, independently of the null-set representative. For any finite collection of vectors, the coordinate linear identities hold outside the union of their exceptional sets, so $W$ is linear as a map of equivalence classes; normalization gives $\|W\psi\|=\|\psi\|$, hence $W$ is a linear isometry. No $L^1$ integrability of this raw vector field is needed. [step 1.1, given, F1, F3, F6, construct, algebra]

3.1 [The PVM and the effects] Multiplication by $\mathbf1_B$ on $L^2$ is a bounded self-adjoint projection, with $P(X)=I$ and $P(B\cap C)=P(B)P(C)$. For disjoint $B_j$ with union $B$, the squared $L^2$ norm of $(P(B)-\sum_{j\le N}P(B_j))f$ is the integral of $\|f(x)\|^2$ over the tail of that disjoint union, and tends to zero by scalar dominated convergence. Thus $P$ is a PVM. Compression gives positive contractions $F(B)=W^*P(B)W$, normalization $F(X)=I$, and weak countable additivity. Equivalently, for every $u,v$, $\langle F(B)u,v\rangle=\int_B\sum_r\langle M_r(x)u,M_r(x)v\rangle\,d\mu$, with absolute convergence by Cauchy–Schwarz and normalization. This is the normalized POVM asserted in (b). [step 2.1, F2, F3, F4, F5, algebra]

4.1 [Integrable cross fields] For $u,v\in H$, each $x\mapsto T_{M_r(x)u,M_r(x)v}$ is strongly measurable in trace norm by [F2]. By Cauchy–Schwarz twice and normalization, $$\int_X\sum_r\|M_r(x)u\|\,\|M_r(x)v\|\,d\mu\le\|u\|\,\|v\|.$$ Thus, outside a null set, the rank-one series converges absolutely in trace norm. Its sum $K_{u,v}(x)$ is strongly measurable and Bochner integrable by [F3], with integrated norm at most $\|u\|\|v\|$. Define $E_B(u,v):=\int_BK_{u,v}(x)\,d\mu$. This is sesquilinear, satisfies $\|E_B(u,v)\|_1\le\|u\|\|v\|$, and has pairing $\operatorname{tr}(E_B(u,v)A)=\sum_r\int_B\langle A M_r(x)u,M_r(x)v\rangle d\mu$ for bounded $A$, by the boundedness of trace pairings and absolute integrability. In particular $E_B(u,u)$ is positive and $\operatorname{tr}E_B(u,u)=\langle F(B)u,u\rangle$. [step 2.1, step 3.1, F2, F3, F4, F5, construct, algebra]

5.1 [The bounded linear instrument] For a nuclear representation $T=\sum_jT_{u_j,v_j}$, define $I_B(T):=\sum_jE_B(u_j,v_j)$, converging in trace norm. The bound of step 4.1 gives $\|I_B(T)\|_1\le\sum_j\|u_j\|\|v_j\|$. This is independent of representation: for a nuclear representation of zero, Tonelli and step 4.1 allow exchanging its $j$ sum, the $r$ sum and each bounded-$A$ trace pairing with the integral. For each fixed $r,x$, the two-sided ideal bound makes $\sum_jM_r(x)T_{u_j,v_j}M_r(x)^*=M_r(x)0M_r(x)^*=0$ in trace norm. Therefore all the resulting pairings vanish; rank-one test operators and [F5] show the image is zero. The difference of two representations is such a zero representation, proving independence. Hence $I_B$ is linear, bounded with norm at most one by taking the nuclear infimum, and positive by positive spectral rank-one expansion. For positive $\rho=\sum_nw_nT_{u_n,u_n}$ its definition is exactly the Bochner formula in (c), and absolute integrability gives the stated bounded-$A$ pairing. Taking $A=I$ gives $\operatorname{tr}I_B(T)=\operatorname{tr}(TF(B))$ first for rank-one inputs by step 3.1 and then for all inputs by nuclear continuity; in particular $I_X$ is trace preserving. [step 3.1, step 4.1, F2, F3, F4, F5, construct, algebra]

6.1 [Countable additivity and complete positivity] For disjoint $B_j$ with union $B$, Bochner integrability gives $E_B(u,v)=\sum_jE_{B_j}(u,v)$ in trace norm. For a nuclear input, the sum of the norms of the omitted event tails is dominated term by term by $\|u_k\|\|v_k\|$; scalar dominated convergence passes countable additivity to $I_B(T)$ in trace norm. For each finite ancilla $\mathbb C^n$, act on $\mathbb C^n\widehat\otimes H$ with the pointwise Kraus maps $I\otimes M_r(x)$. For a vector $\xi=\sum_{k=1}^ne_k\otimes\xi_k$, the integrated squared output norm is $\sum_k\int_X\sum_r\|M_r(x)\xi_k\|^2d\mu=\|\xi\|^2$. The same construction as steps 4.1–5.1 therefore maps each positive rank-one $T_{\xi,\xi}$ to an integral of positive rank-one operators and extends positively to every positive trace-class amplified input. Expanding its finite ancilla matrix entries shows this extension equals the finite amplification of $I_B$. Thus every $I_B$ is completely positive, and together with additivity and trace preservation this establishes the full abstract instrument, not merely its restriction to positive inputs. [step 4.1, step 5.1, F2, F3, F4, F5, algebra]

7.1 [Conditional updates] For a density operator $\rho$, $I_B(\rho)\ge0$ and $p(B)=\operatorname{tr}I_B(\rho)=\operatorname{tr}(\rho F(B))$ by step 5.1. If $p(B)>0$, division gives a positive operator of trace one and hence the claimed density operator; if $p(B)=0$ no normalized update is defined. Nothing here claims a normalized singleton density or a universal representation theorem. [step 5.1, step 6.1, F2, algebra] ∎
