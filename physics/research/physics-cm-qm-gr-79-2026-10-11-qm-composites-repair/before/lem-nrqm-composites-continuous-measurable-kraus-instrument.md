---
id: lem-nrqm-composites-continuous-measurable-kraus-instrument
kind: lemma
domain: mathematics
title: "Continuous measurable Kraus instruments: isometry, POVM and trace-norm integration"
status: draft
origin: pipeline
dependency_level: 4
deps: [lem-nrqm-composites-general-trace-class-instrument-and-effect-duality, lem-nrqm-composites-separable-partial-trace, lem-nrqm-composites-density-and-scalar-spectral-probability, lem-nrqm-composites-nuclear-bounded-cyclicity, def-bochner-integrable-function, lem-bochner-integral-norm-inequality, thm-bochner-integrability-criterion, thm-bochner-dominated-convergence, def-strongly-measurable-banach-valued-function, def-trace-class-operator, def-l-p-space-as-a-quotient-by-null-functions, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, lem-nrqm-composites-rank-one-operator-calculus, thm-trace-class-is-a-two-sided-banach-operator-ideal, def-countable-choice, lem-nrqm-composites-hilbert-tensor-construction]
dependency_roles:
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

Then:

(a) the formula $W\psi(x):=(M_r(x)\psi)_r$ defines a linear isometry $W:H\to L^2(X,\mu;\ell^2(H))$;

(b) for $B\in\Sigma$ the multiplication operator $P(B)$ by $\mathbf 1_B$ is a projection-valued measure on $(X,\Sigma)$, and $F(B):=W^*P(B)W$ is a normalized POVM with $F(X)=I$;

(c) for every positive trace-class $\rho=\sum_nw_nT_{u_n,u_n}$ ([[def-trace-class-operator]], [[lem-nrqm-composites-density-and-scalar-spectral-probability]]) the Bochner integral

$$I_B(\rho):=\sum_{n\ge1}w_n\int_B\sum_{r\ge1}T_{M_r(x)u_n,M_r(x)u_n}\,d\mu(x)$$

converges in trace norm and defines a positive trace-class operator with $\operatorname{tr}I_B(\rho)=\operatorname{tr}(\rho F(B))$; the map $B\mapsto I_B(\rho)$ is countably additive in trace norm and $I_X$ is trace preserving, so $I$ is an abstract instrument in the sense of [[lem-nrqm-composites-general-trace-class-instrument-and-effect-duality]]; moreover $\operatorname{tr}(I_B(\rho)A)=\sum_r\int_B\operatorname{tr}(M_r(x)\rho M_r(x)^*A)\,d\mu(x)$ for bounded $A$, and finite-dimensional ancilla amplifications preserve positivity;

(d) the conditional update at an event $B$ with $p(B)=\operatorname{tr}(\rho F(B))>0$ is $I_B(\rho)/p(B)$; singleton densities need not define a normalized state. Universal normal-instrument representation is not claimed.

## Facts & Assumptions

**Given:** $(X,\Sigma,\mu)$, $H$, $(M_r)$ with the normalization identity; a positive trace-class $\rho=\sum_nw_nT_{u_n,u_n}$.

[F1] $\|(M_r(x)\psi)_r\|_{\ell^2(H)}^2=\sum_r\|M_r(x)\psi\|^2$; the normalization hypothesis says the Bochner square norm is $\|\psi\|^2$, so on simple/finite $\psi$-combinations $W$ preserves the inner product and extends to an isometry on $H$ ([[def-bochner-integrable-function]], [[def-l-p-space-as-a-quotient-by-null-functions]], [[lem-nrqm-composites-hilbert-tensor-construction]]).

[F2] For $T\in\mathcal S_1(H)$ the rank-one map $v\mapsto T_{v,v}$ is trace-norm continuous with $\|T_{v,v}\|_1=\|v\|^2$; $T_{x,z}B=T_{x,B^*z}$ and $\|ATB\|_1\le\|A\|\,\|T\|_1\|B\|$ ([[lem-nrqm-composites-rank-one-operator-calculus]], [[thm-trace-class-is-a-two-sided-banach-operator-ideal]], [[lem-nrqm-composites-nuclear-bounded-cyclicity]]).

[F3] A strongly measurable Banach-valued function is Bochner integrable exactly when the integral of its norm is finite; the Bochner integral is norm-continuous and dominated convergence holds under an integrable majorant ([[thm-bochner-integrability-criterion]], [[lem-bochner-integral-norm-inequality]], [[thm-bochner-dominated-convergence]]).

[F4] Tonelli's theorem permits interchanging the nonnegative sum over $r$ and the integral over $X$; the trace pairing satisfies $\operatorname{tr}(T_{x,z})=\langle x,z\rangle$ and the polarisation/positivity properties of the previous items ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[lem-nrqm-composites-rank-one-operator-calculus]], [[lem-nrqm-composites-separable-partial-trace]]).

## Proof

1.1 [The isometry] For $\psi\in H$ the map $x\mapsto(M_r(x)\psi)_r$ into $\ell^2(H)$ is strongly measurable (each coordinate is, and the values lie in $\ell^2$ by the normalization) and its squared Bochner norm integrates to $\|\psi\|^2$; by [F3] it is Bochner integrable and $W$ preserves norms. Polarization and linearity on the span of finite vector combinations extend the identity to all inner products; hence $W$ is a linear isometry. [given, F1, F3, algebra]

2.1 [The PVM and the POVM] Multiplication by $\mathbf 1_B$ on $L^2(X,\mu;\ell^2(H))$ is an orthogonal projection, the map $B\mapsto P(B)$ is strongly countably additive by dominated convergence, and $P(X)=I$, so $P$ is a PVM; then $F(B)=W^*P(B)W$ is a positive contraction for each $B$, $F(X)=W^*W=I$, and countable additivity follows from strong convergence of $P(\cdot)$ and boundedness of $W^*,W$. [step 1.1, F3, algebra]

2.2 [Trace-norm convergence of the integral] For fixed $r$ and $n$, the map $x\mapsto T_{M_r(x)u_n,M_r(x)u_n}$ is strongly measurable as an $\mathcal S_1(H)$-valued map (composition of the strongly measurable vector map with the continuous rank-one map [F2]), and its trace norm is $\|M_r(x)u_n\|^2$, whose integral over $X$ is finite by the normalization hypothesis; by Tonelli the double sum satisfies $\sum_r\int_X\|M_r(x)u_n\|^2d\mu=\|u_n\|^2$. Hence the Bochner integral of the $\mathcal S_1$-valued map $x\mapsto\sum_rT_{M_r(x)u_n,M_r(x)u_n}$ converges in trace norm with norm $\le\|u_n\|^2$ [F3]; weighting by $w_n$ and summing over $n$ (a trace-norm convergent series because $\sum_nw_n\|u_n\|^2=\operatorname{tr}\rho$) defines $I_B(\rho)$ as a trace-norm convergent series of Bochner integrals. Positivity: each summand is positive and Bochner integrals of positive-valued maps are positive (test against $v$). [step 1.1, F2, F3, F4, algebra]

3.1 [Trace pairing and additivity] For bounded $A$ and each $n,r$, $\operatorname{tr}(T_{M_r(x)u_n,M_r(x)u_n}A)=\langle M_r(x)u_n,A^*M_r(x)u_n\rangle$; the Bochner integral identity $\operatorname{tr}(I_B(\rho)A)=\sum_r\int_B\operatorname{tr}(M_r(x)\rho M_r(x)^*A)d\mu(x)$ follows by the trace-norm continuity of the pairing [F2] and dominated convergence [F3, F4]. Taking $A=I$ gives $\operatorname{tr}I_B(\rho)=\sum_r\int_B\sum_nw_n\|M_r(x)u_n\|^2d\mu=\int_B\|\dots\|$, which by the normalization and Tonelli equals $\operatorname{tr}(\rho F(B))$; countably additive in $B$ by Tonelli; $I_X$ is trace preserving because $F(X)=I$. Complete positivity under finite-dimensional amplification is inherited from the pointwise Kraus summands. [step 2.2, F2, F3, F4, algebra]

4.1 [Conditional updates] If $p(B)=\operatorname{tr}(\rho F(B))>0$ then $I_B(\rho)/p(B)$ is positive of trace one, hence a density operator; if $p(B)=0$ the update is undefined, and there is no claim that $x\mapsto$ a singleton density is normalizable. [step 3.1, F2, algebra] ∎
