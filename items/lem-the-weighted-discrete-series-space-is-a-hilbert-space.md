---
id: lem-the-weighted-discrete-series-space-is-a-hilbert-space
kind: lemma
title: The weighted discrete-series space is a Hilbert space with K-type basis
status: draft
origin: pipeline
deps:
  - def-holomorphic-and-antiholomorphic-discrete-series-models
  - thm-cauchy-integral-formula-circle
  - thm-taylor-expansion-holomorphic-function
  - cor-cauchy-estimates-taylor-coefficients
  - thm-locally-uniform-limit-of-holomorphic-functions-in-several-variables
  - thm-monotone-convergence-for-the-integral
  - def-complex-l-two-inner-product
  - lem-complex-lp-completeness-density-and-inner-product
  - def-hilbert-space
  - def-measure-with-density
  - thm-indefinite-integral-of-a-nonnegative-function-is-a-measure
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - thm-lebesgue-measure-is-a-complete-measure
  - def-countable-choice
  - lem-ac-supplies-countable-and-dependent-choice-for-banach-integration
  - def-axiom-of-choice
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - def-k-finite-and-smooth-vectors-for-sl2-r
  - def-compact-group-isotypic-projection
  - thm-arbitrary-unitary-representations-of-compact-groups-decompose-discretely
  - thm-bounded-linear-maps-commute-with-bochner-integration
dependency_level: 6
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "AC supplies Countable Choice for Cauchy estimates, weighted L2 completeness, and nonnegative change of variables; it also supplies the compact-group Haar and Bochner-integral setup for the K-isotypic projections. The Cayley, Taylor, and coefficient calculations use no additional choice."
verification:
  precheck: pass
sources:
  references:
    - title: "Emmanuel Kowalski, An Introduction to the Representation Theory of Groups (AMS GSM 155; author's PDF)"
      url: "https://people.math.ethz.ch/~kowalski/representation-theory.pdf"
      locator: "§7.4, Proposition 7.4.16(1) and Exercise 7.4.17, printed pp. 305–308 (Hilbert model and K-type basis; the local proof supplies completeness and orthogonality)"
    - title: "Matt Kerr, Notes on the Representation Theory of SL2(R) (CBMS workshop writeup)"
      url: "https://www.math.wustl.edu/~matkerr/sl2notes.pdf"
      locator: "Appendix I §7, Proposition 7.2 and its K-type argument, printed pp. 27–29 (one-dimensional holomorphic weight spaces; the local proof supplies the complete weighted basis)"
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). In the notation of [[def-holomorphic-and-antiholomorphic-discrete-series-models]], for every integer $n\ge2$:

**(1)** $\mathcal H_n^+$ is a complex Hilbert space with inner product $\langle f,h\rangle_n=\int_{\mathfrak H}f\bar h\,y^{n-2}dx\,dy$, and point evaluations $f\mapsto f(z)$ are bounded, uniformly on compact subsets of $\mathfrak H$.

**(2)** The vectors $f_{n,j}$, $j\ge0$, are nonzero, mutually orthogonal, and have finite norm; their closed linear span is $\mathcal H_n^+$. The action of $K$ on this Hilbert space is strongly continuous and its irreducible K-types are exactly the one-dimensional lines $\mathbb C f_{n,j}$ with characters $\chi_j(k_\theta)=e^{-i(n+2j)\theta}$, each with multiplicity one. The analogous statements hold for $\mathcal H_n^-$ with $\widetilde f_{n,j}$ and characters $e^{i(n+2j)\theta}$.

**(3)** For $j\ge0$, the corresponding isotypic projection is the Bochner integral
$$P_jf=\int_K\chi_j(k)^{-1}\pi_n(k)f\,dk,$$
where $dk$ is normalized Haar probability; every $f\in\mathcal H_n^+$ is the orthogonal sum $f=\sum_{j\ge0}P_jf$ in Hilbert norm.

## Facts & Assumptions

**Given:** AC; $n\in\mathbb Z$, $n\ge2$; the weighted holomorphic and antiholomorphic spaces, action, and vectors of [[def-holomorphic-and-antiholomorphic-discrete-series-models]].

[F1] The model action is a group action of norm-preserving maps; $f_{n,j}$ has K-character $e^{-i(n+2j)\theta}$; $K=\mathrm{SO}(2)$ with the fixed $k_\theta$ ([[def-holomorphic-and-antiholomorphic-discrete-series-models]], [[def-k-finite-and-smooth-vectors-for-sl2-r]]).

[F2] Write $\mathbb D=\{w\in\mathbb C:|w|<1\}$ for the unit disc and $\mathfrak H=\{z\in\mathbb C:\operatorname{Im}z>0\}$ for the upper half-plane; nonnegative Lebesgue integrals obey change of variables under $C^1$ diffeomorphisms ([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]).

[F3] A function holomorphic on a disc satisfies the Cauchy integral formula on every circle compactly contained in it ([[thm-cauchy-integral-formula-circle]]), equals its Taylor series throughout the largest centred disc in its domain ([[thm-taylor-expansion-holomorphic-function]]), and its Taylor coefficients obey the Cauchy estimates $|c_n|\le M/r^n$ ([[cor-cauchy-estimates-taylor-coefficients]]); the coefficient bounds make the series converge absolutely and uniformly on every closed subdisc.

[F4] A locally uniform limit of holomorphic functions on an open subset of $\mathbb C$ is holomorphic ([[thm-locally-uniform-limit-of-holomorphic-functions-in-several-variables]]).

[F5] The weighted Lebesgue density $y^{n-2}$ on $\mathfrak H$ defines a measure; complex L2 for any measure space, with pairing $\int f\bar h$, is complete and is a Hilbert space under Countable Choice ([[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]], [[thm-lebesgue-measure-is-a-complete-measure]], [[def-measure-with-density]], [[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]], [[def-complex-l-two-inner-product]], [[lem-complex-lp-completeness-density-and-inner-product]], [[def-hilbert-space]]).

[F6] Increasing limits of nonnegative measurable functions pass through the integral ([[thm-monotone-convergence-for-the-integral]]).

[F7] A strongly continuous unitary representation of a compact group decomposes as a Hilbert direct sum of finite-dimensional irreducibles, and its type projections are the normalized character integrals ([[thm-arbitrary-unitary-representations-of-compact-groups-decompose-discretely]], [[def-compact-group-isotypic-projection]]).

[F8] Bounded linear maps commute with Bochner integration ([[thm-bounded-linear-maps-commute-with-bochner-integration]]).

[A1] AC implies Countable Choice, as required by [F2]–[F5] ([[def-axiom-of-choice]], [[def-countable-choice]], [[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]]).

## Proof

**Proof technique:** direct.

**Given:** The assumptions and notation of the Statement.

1.1 Fix $z_0\in\mathfrak H$ and choose $r>0$ with $\overline{D(z_0,r)}\subset\mathfrak H$. The Cauchy formula and Cauchy–Schwarz on each circle centered at $z_0$ give $|f(z_0)|^2\le(2\pi)^{-1}\int_0^{2\pi}|f(z_0+se^{it})|^2dt$ for $0<s<r$; integrating with $2s/r^2$ yields $|f(z_0)|^2\le(\pi r^2)^{-1}\int_{D(z_0,r)}|f|^2dA$. Since $y^{n-2}$ has a positive lower bound on this disk, $|f(z_0)|\le C_{z_0,r}\|f\|_n$. If $z\in D(z_i,r_i/2)$, then $D(z,r_i/2)\subset D(z_i,r_i)$; applying the same estimate there and using a lower bound for the weight on $D(z_i,r_i)$ gives a uniform evaluation bound on $D(z_i,r_i/2)$. A finite subcover of any compact $C\subset\mathfrak H$ therefore gives one constant $C_C$ for all $z\in C$. [F3, A1, algebra]

1.2 Set $w=(z-i)/(z+i)$ for $z\in\mathfrak H$. Then $|w|^2-1=-4y/|z+i|^2<0$, so $w\in\mathbb D$, and solving $w=(z-i)/(z+i)$ gives the inverse $z=i(1+w)/(1-w)$ with $\operatorname{Im}z=(1-|w|^2)/|1-w|^2>0$ for $w\in\mathbb D$; hence $z\mapsto w$ is a bijection $\mathfrak H\to\mathbb D$. Since $z+i=2i/(1-w)$ and $dz/dw=2i/(1-w)^2$, the real Jacobian of $w\mapsto z$ is $|dz/dw|^2=4/|1-w|^4$, and [F2] gives $\|f\|_n^2=2^{2-2n}\int_{\mathbb D}|F(w)|^2(1-|w|^2)^{n-2}dA(w)$ for $F(w):=(z+i)^nf(z)$. For $f_{n,j}$ one has $F(w)=(z-i)^j(z+i)^{-j}=w^j$, and consequently $\|f_{n,j}\|_n^2=2^{2-2n}2\pi\int_0^1\rho^{2j+1}(1-\rho^2)^{n-2}d\rho$, which is finite since $(1-\rho^2)^{n-2}\le1$ and $\int_0^1\rho^{2j+1}d\rho=(2j+2)^{-1}$, and is positive since the integrand is positive on $(0,1)$. Distinct monomials are orthogonal because $\int_0^{2\pi}e^{i(j-k)\theta}d\theta=0$ for $j\ne k$. [F2, F5, algebra]

2.1 On $\mathbb R^2$ give the measure $\mu_n$ the density $\mathbf1_{\mathfrak H}(x,y)y^{n-2}$ relative to Lebesgue measure, and extend functions on $\mathfrak H$ by zero below the real axis. The map $\mathcal H_n^+\to$ the weighted square-integrable function space for $\mu_n$ is injective: a zero class has norm zero, and the estimate of step 1.1 then makes every point value zero. The integral pairing thus restricts to a positive-definite inner product. If $(f_m)$ is Cauchy in this norm, [F5] gives a limit class $h$; step 1.1 makes $(f_m)$ uniformly Cauchy on every compact subset of $\mathfrak H$, so it converges locally uniformly to a holomorphic $f$ by [F4]. On each compact $Q\Subset\mathfrak H$, the density is bounded and $Q$ has finite area, so local uniform convergence gives convergence in the restricted weighted integral norm on $Q$. Restriction of $f_m\to h$ to $Q$ and uniqueness of limits imply $f=h$ a.e. on $Q$. The compact exhaustion $Q_m=\{z:|z|\le m,\ \operatorname{Im}z\ge1/m\}$ covers $\mathfrak H$, so $f=h$ a.e. globally; hence $f\in\mathcal H_n^+$ and $\|f_m-f\|_n\to0$. Thus $\mathcal H_n^+$ is a complex Hilbert space. [F4, F5, step 1.1, algebra, A1]

2.2 Expand $F(w)=\sum_{j\ge0}a_jw^j$ by [F3]. For each $0<\rho<1$ this series converges uniformly on $|w|=\rho$; integrating finite partial sums and using orthogonality of exponentials, then taking the uniform limit, gives $(2\pi)^{-1}\int_0^{2\pi}|F(\rho e^{i\theta})|^2d\theta=\sum_{j\ge0}|a_j|^2\rho^{2j}$. Integrating radially and applying [F6] to the increasing finite partial sums yields $\int_{\mathbb D}|F(w)|^2(1-|w|^2)^{n-2}dA(w)=\sum_{j\ge0}|a_j|^2\,2\pi\int_0^1\rho^{2j+1}(1-\rho^2)^{n-2}d\rho$. This sum is finite by step 1.2; applying the same identity to $F-\sum_{j=0}^Na_jw^j$ shows that the squared norm of the remainder is its series tail, which tends to zero. Thus the $f_{n,j}$ have dense algebraic span in $\mathcal H_n^+$, and step 1.2 makes them a complete orthogonal family. [F3, F6, step 1.2, algebra, A1]

3.1 In the disk coordinate the K-action is $F_{\pi_n(k_\theta)f}(w)=e^{-in\theta}F_f(e^{-2i\theta}w)$. The orbit map of each polynomial in $w$ is therefore norm-continuous. The maps $\pi_n(k)$ are isometries by [F1], and polynomials are dense by step 2.2; approximating $f$ by a polynomial $p$ and using $\|\pi_n(k)f-\pi_n(k_0)f\|_n\le2\|f-p\|_n+\|\pi_n(k)p-\pi_n(k_0)p\|_n$ proves strong continuity on all of $\mathcal H_n^+$. Since each $\pi_n(k)$ has inverse $\pi_n(k^{-1})$, this is a strongly continuous unitary representation of compact $K$. [F1, step 2.2, algebra]

4.1 The compact-group decomposition [F7] applies by steps 2.1 and 3.1. Its irreducible K-types are finite-dimensional; because $K=\mathrm{SO}(2)$ is abelian, the commuting unitary operators on any such finite-dimensional space have a common eigenline, and irreducibility forces that line to be the whole space. Thus every K-type is a character line. The complete orthogonal family from step 2.2 consists of eigenvectors with distinct characters $\chi_j(k_\theta)=e^{-i(n+2j)\theta}$ by [F1]. An eigenvector for a different character is orthogonal to every $f_{n,j}$ by unitarity and therefore vanishes by density. Each listed isotypic subspace is exactly $\mathbb C f_{n,j}$, since it is orthogonal to all other character lines and the family is complete. [F1, F7, step 2.2, step 3.1, algebra]

5.1 For each $j$, [F7] gives the type projection $P_jf=\int_K\overline{\chi_j(k)}\pi_n(k)f\,dk$, where $\overline{\chi_j}=\chi_j^{-1}$. The point-evaluation map $E_z:f\mapsto f(z)$ is bounded by step 1.1, so [F8] lets it pass through the Bochner integral. In disk coordinates, the scalar integrand is $\sum_{\ell\ge0}a_\ell w^\ell\overline{\chi_j(k)}\chi_\ell(k)$ by step 3.1; for fixed $|w|<1$ this series converges uniformly in $k$. Haar invariance makes the integral of every nontrivial character zero (translate by an element where its value is not $1$), while the trivial character has integral $1$. Thus $E_z(P_jf)$ corresponds to $a_jw^j$, so $P_jf=a_jf_{n,j}$. The Hilbert expansion of step 2.2 is therefore $f=\sum_{j\ge0}P_jf$. Complex conjugation gives the same Hilbert and K-type conclusions for $\mathcal H_n^-$. [F7, F8, step 1.1, step 2.2, step 3.1, A1] ∎
