---
id: ex-nrqm-controlled-dynamics-continuum-contribution-in-perturbation
aliases:
- nrqm-controlled-dynamics-example-continuum-contribution-in-perturbation
kind: example
domain: mathematics
title: Continuum contribution in perturbation
status: draft
origin: pipeline
dependency_level: 4
deps:
- thm-logarithm-derivative-and-integral
- thm-dominated-convergence
- cor-cauchy-schwarz-inequality-for-l-two
- def-countable-choice
- thm-nrqm-controlled-dynamics-simple-level-reduced-resolvent-coefficients
- thm-nrqm-controlled-dynamics-contour-perturbation-projection
- def-projection-valued-measure
- def-bounded-linear-operator
- def-operator-norm
- def-hilbert-space
- def-l-p-space-as-a-quotient-by-null-functions
- lem-complex-lp-completeness-density-and-inner-product
dependency_roles:
  thm-logarithm-derivative-and-integral: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-nrqm-controlled-dynamics-simple-level-reduced-resolvent-coefficients: mathematical-premise
  thm-nrqm-controlled-dynamics-contour-perturbation-projection: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  lem-complex-lp-completeness-density-and-inner-product: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin, author-hosted
      course text), Non-Degenerate Perturbation Theory pp. 155-156 (second-order shift
      as a sum over unperturbed states)
    url: https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf
  - title: G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009,
      Section 6.6 pp. 153-159 (reduced resolvent and the second-order coefficient)
    url: https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf
---

## Example

Assume Countable Choice ([[def-countable-choice]]), as required by the analytic coefficient supplier. Let $H:=\mathbb C\oplus L^2((1,2),dx;\mathbb C)$ with norm $\|c\oplus f\|^2=|c|^2+\int_1^2|f|^2dx$ and inner product linear in the first variable ([[def-hilbert-space]], [[def-l-p-space-as-a-quotient-by-null-functions]]). Let $H_0:=0\oplus M_x$ on all of $H$, with $M_xf(x)=xf(x)$. The operator is bounded and self-adjoint, with spectrum $\{0\}\cup[1,2]$; $E=0$ is an isolated simple eigenvalue with gap $g=1$. These assertions and its concrete PVM are verified directly below, without a general AC spectral theorem. Define
$$V(c\oplus f):=\Bigl(\int_1^2f(x)dx\Bigr)\oplus c\mathbf1_{(1,2)}.$$
This example verifies that:

(a) $V$ is bounded and self-adjoint, with $\|V\|=1$. $P_0(c\oplus f)=c\oplus0$ is the projection onto $\mathbb C\oplus\{0\}$, and $\psi_0:=1\oplus0$ is a unit vector with $\langle V\psi_0,\psi_0\rangle=0$.

(b) With $Q=I-P_0$, $H_Q=H_0|_{QH}=M_x$ and the actual reduced inverse $S=\iota_Q(H_Q-E)^{-1}Q=0\oplus M_{1/x}$, the second-order coefficient of [[thm-nrqm-controlled-dynamics-simple-level-reduced-resolvent-coefficients]] is exactly
$$\frac{E''(0)}2=-\langle VSV\psi_0,\psi_0\rangle=-\int_1^2\frac{dx}{x}=-\log2<0.$$
The coefficient theorem applies for all complex $|\lambda|<1/4$, where $q=2|\lambda|<1/2$; the first-order coefficient is zero. The contour supplier applies on the larger disk $|\lambda|<1/2$.

(c) The entire second-order coefficient comes from the continuous, indeed absolutely continuous, complementary spectrum of $H_0$ on $[1,2]$. A bound-state-only sum returns $0$, so it misses this nonzero complementary contribution.

## Verification

**Given:** CC, the concrete $H,H_0,V,P_0,Q,S,\psi_0$ above and the first-variable-linear pairing.

[F1] [[def-projection-valued-measure]], [[def-bounded-linear-operator]], [[def-operator-norm]], [[def-hilbert-space]] and [[def-l-p-space-as-a-quotient-by-null-functions]] specify the operators, quotient classes and Hilbert norm. Under the assumed Countable Choice, [[lem-complex-lp-completeness-density-and-inner-product]] gives completeness and the first-variable-linear pairing for complex $L^2$ on every measure space; apply it to Lebesgue measure on $(1,2)$. Multiplication by bounded measurable functions preserves these quotient classes; [[cor-cauchy-schwarz-inequality-for-l-two]] bounds the scalar integral in $V$, and [[thm-dominated-convergence]] gives the strong convergence of indicator-multiplier tails.

[F2] [[thm-nrqm-controlled-dynamics-simple-level-reduced-resolvent-coefficients]], with the actual restricted inverse on $QH$, gives $E'(0)=\langle V\psi_0,\psi_0\rangle$ and $E''(0)/2=-\langle VSV\psi_0,\psi_0\rangle$ under CC and $q<1/2$. [[thm-nrqm-controlled-dynamics-contour-perturbation-projection]] gives the holomorphic simple eigenvalue on $q<1$. The example verifies all operator, spectral, normalization, gap and perturbation hypotheses locally before using them.

[F3] [[thm-logarithm-derivative-and-integral]] identifies $\int_1^2dx/x=\log2$. Positivity is also immediate from $1/x>0$ on a positive-length interval.

1.1 [Explicit operator and spectral measure] The $L^2((1,2))$ completeness and pairing in [F1] make it a complex Hilbert space. If $c_n\oplus f_n$ is Cauchy in the stated direct-sum norm, each component is Cauchy; completeness of $\mathbb C$ and this $L^2$ space gives limits $c,f$, and the norm identity gives convergence to $c\oplus f$. Thus $H$ is complete before any Hilbert-space theorem or PVM definition is used. Since $1<x<2$, $M_x$ is bounded on all $L^2(1,2)$ with norm $2$, and real multiplication gives $\langle M_xf,h\rangle=\langle f,M_xh\rangle$. A bounded symmetric operator on the whole Hilbert space equals its adjoint directly by the defining pairing, so $H_0$ is self-adjoint with domain $H$. For every real Borel $B$ define $\mathcal E(B)(c\oplus f)=\mathbf1_B(0)c\oplus\mathbf1_B(x)f(x)$. These are orthogonal projections, $\mathcal E(\mathbb R)=I$, and their products are $\mathcal E(B\cap C)$. On a fixed vector, disjoint countable additivity follows from pointwise indicator sums and the integrable squared-norm majorant $|f|^2$ (with the scalar component evaluated at $0$), so this is a PVM. Its scalar measures are $|c|^2\delta_0(B)+\int_{B\cap(1,2)}|f(x)|^2dx$. Integrating bounded simple approximations to the coordinate function on $\{0\}\cup[1,2]$ yields $H_0=\int t\,d\mathcal E(t)$ on all $H$. Thus the representing PVM and its bounded multiplier realization are explicit. [F1, given, algebra]

2.1 [Spectrum, gap and absence of complementary eigenvectors] For $z\notin\{0\}\cup[1,2]$, $(z-H_0)^{-1}(c\oplus f)=c/z\oplus f/(z-x)$ is a bounded two-sided inverse on $H$. For any $t\in[1,2]$ and $\varepsilon>0$, the interval $J=(1,2)\cap(t-\varepsilon,t+\varepsilon)$ has positive length. The vector $0\oplus\mathbf1_J/|J|^{1/2}$ is unit and has $\|(H_0-t)u\|\le\varepsilon$, excluding a bounded inverse at $t$. Finally $\ker H_0=\mathbb C\oplus\{0\}$, so $0$ is an isolated simple eigenvalue and its distance to the remaining spectrum is $g=1$. The equation $(x-t)f=0$ forces $f=0$ in $L^2(1,2)$ because a singleton has Lebesgue measure zero. Consequently the complementary block has no eigenvectors and all its spectral measures are absolutely continuous with densities $|f|^2$ on $(1,2)$, including zero atom at the endpoints. In particular $P_0=\mathcal E(\{0\})$ and $\psi_0=1\oplus0$ has norm one. [step 1.1, F1, algebra]

3.1 [Perturbation hypotheses and the restricted inverse] Let $I(f)=\int_1^2f(x)dx=\langle f,\mathbf1\rangle$. Cauchy-Schwarz and the interval's length one give $|I(f)|\le\|f\|_2$. Therefore $\|V(c\oplus f)\|^2=|I(f)|^2+|c|^2\le\|c\oplus f\|^2$; equality at $\psi_0$ gives $v=\|V\|=1>0$. For $c\oplus f,d\oplus h$, the first-variable-linear pairing gives $\langle V(c\oplus f),d\oplus h\rangle=I(f)\overline d+c\overline{I(h)}=\langle c\oplus f,V(d\oplus h)\rangle$, so $V=V^*$. Moreover $V\psi_0=0\oplus\mathbf1$ and the first-order pairing is zero. On $QH=0\oplus L^2(1,2)$, $H_Q-E=M_x$ has inverse $M_{1/x}$, bounded on that exact whole complementary domain with norm one. Hence $S(c\oplus f)=0\oplus(f/x)$, $SP_0=P_0S=0$ and $(H_0-E)S=S(H_0-E)=Q$ on $H$. No global inverse of $H_0-E$ is used. The preceding operator, spectral and perturbation computations verify every concrete hypothesis of [F2], with inherited CC and $q=2|\lambda|$. [step 1.1, step 2.1, F1, F2, algebra]

4.1 [Exact coefficient and its continuous origin] The explicit reduced inverse gives $SV\psi_0=0\oplus(1/x)$ and $VSV\psi_0=(\int_1^2dx/x)\oplus0$. Pairing with the unit $\psi_0$ and applying [F2], [F3] yields $E''(0)/2=-\int_1^2dx/x=-\log2<0$. The scalar spectral measure of $V\psi_0=0\oplus\mathbf1$ is exactly $\mathbf1_{(1,2)}(x)dx$ by step 1.1, so the entire coefficient integrates $1/x$ over the continuous complementary spectrum. Step 2.1 shows that the only bound eigenvector belongs to $P_0H$, with zero coupling matrix element; there are no complementary bound eigenvectors. A sum restricted to bound states therefore gives zero and omits the exact negative coefficient. This proves all original example claims, its normalization and class, with the correct restricted inverse and explicit inherited CC. [step 1.1, step 2.1, step 3.1, F2, F3, algebra] ∎
