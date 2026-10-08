---
id: lem-monomial-bases-of-bergman-spaces-of-disc-ball-and-polydisc
kind: lemma
title: Monomials form complete orthogonal systems of the Bergman spaces of the disc, the ball and the polydisc
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 4
proof_strategy: direct
deps:
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - cor-continuous-functions-are-borel-measurable
  - cor-uniqueness-of-multivariable-power-series-coefficients
  - def-balls-and-polydiscs-in-complex-euclidean-space
  - def-bergman-space-and-kernel
  - def-borel-sigma-algebra
  - def-ck-and-multi-index-notation-in-several-variables
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - def-complex-integer-powers
  - def-countable-choice
  - def-holomorphic-function-in-several-complex-variables
  - def-measure-preserving-transformation-and-system
  - def-metric-compactness
  - def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis
  - lem-compactness-is-intrinsic
  - lem-complex-conjugation-and-modulus-laws
  - lem-monomial-integrals-over-disc-ball-and-polydisc
  - prop-algebra-of-holomorphic-functions-in-several-variables
  - prop-holomorphic-functions-are-continuous-and-separately-holomorphic
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - rem-complex-euclidean-space-dictionary
  - thm-bergman-basis-expansion-and-closedness
  - thm-borel-sets-are-lebesgue-measurable
  - thm-cauchy-schwarz-in-an-inner-product-space
  - thm-complex-exponential-addition-and-real-extension
  - thm-complex-numbers-form-a-field
  - thm-dominated-convergence
  - thm-heine-borel-rn
  - thm-integrals-are-invariant-under-measure-preserving-maps
  - thm-linear-change-of-variables-for-lebesgue-measure
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - thm-parseval-equivalences-for-a-complete-orthonormal-family
  - thm-power-series-expansion-in-several-complex-variables
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: Jiří Lebl, Tasty Bits of Several Complex Variables (book)
      url: https://www.jirka.org/scv/scv.pdf
      locator: >-
        §5.2, Exercise 5.2.9 (printed p. 164): asks for the complete orthonormal
        monomial system of the ball Bergman space, gives the coordinatewise
        polar-integral hint, and notes that the exact norm constants require
        the Beta function. No proof is supplied; the proof below derives the
        three domain bases locally from the norm formulas, coordinate rotations,
        and power-series coefficients.
---

## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]) and let $m\ge1$. For
$k\ge0$ and $\alpha\in\mathbb N^m$, the monomials in each of
$A^2(\mathbb D)$, $A^2(\mathbb B^m)$ and $A^2(\mathbb D^m)$ are pairwise
orthogonal. Their squared norms are, respectively,
$$\|z^k\|_{A^2(\mathbb D)}^2=\frac{\pi}{k+1},\qquad \|z^\alpha\|_{A^2(\mathbb B^m)}^2=\frac{\pi^m\alpha!}{(m+|\alpha|)!},\qquad \|z^\alpha\|_{A^2(\mathbb D^m)}^2=\frac{\pi^m}{\prod_{j<m}(\alpha_j+1)}.$$
Thus the normalized monomials form complete orthonormal systems in all three
Bergman spaces. Equivalently, for each of these domains $\Omega$, a function
$f\in A^2(\Omega)$ orthogonal to every monomial is identically zero.

## Facts & Assumptions

[A1] The only choice principle is $\mathrm{AC}_\omega$: it enters through the Bergman Hilbert structure, monomial norms, real-linear change of variables for rotations, Borel-to-Lebesgue measurability, and the Hilbert-space completeness criterion; no full Axiom of Choice is used ([[def-countable-choice]]).

[F1] The Bergman definition identifies $A^2$ with holomorphic $L^2$ classes, gives the first-variable-linear integral pairing, and provides their unique holomorphic representatives ([[def-bergman-space-and-kernel]]).

[F2] The monomial square norms on the disc, ball and polydisc are the formulas in the statement; they are positive and finite ([[lem-monomial-integrals-over-disc-ball-and-polydisc]]).

[F3] Each coordinate projection is holomorphic since its increment at $a$ in direction $h$ is $h_j$; finite products of holomorphic functions are holomorphic and holomorphic functions are continuous ([[def-holomorphic-function-in-several-complex-variables]], [[prop-algebra-of-holomorphic-functions-in-several-variables]], [[prop-holomorphic-functions-are-continuous-and-separately-holomorphic]]).

[F4] On every polydisc centered at $0$ whose closure lies in the domain, the Taylor series of a holomorphic function converges absolutely and uniformly on each smaller closed polydisc ([[thm-power-series-expansion-in-several-complex-variables]]).

[F5] The Taylor coefficients at $0$ are independent of which such centered polydisc is used ([[cor-uniqueness-of-multivariable-power-series-coefficients]]).

[F6] For $\eta=e^{i\theta}$ with $\theta\in\mathbb R$, $|\eta|=1$; if $d\ge1$, then $e^{i\pi/d}$ raised to the $d$th power is $-1$. Complex multiplication is associative and commutative, and conjugation preserves products and modulus; in particular $|\eta|=1$ implies $\overline\eta=\eta^{-1}$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[thm-complex-exponential-addition-and-real-extension]], [[def-complex-integer-powers]], [[thm-complex-numbers-form-a-field]], [[lem-complex-conjugation-and-modulus-laws]]).

[F7] Multiplication of one coordinate by $\eta=a+ib$ acts on its real coordinate pair by $\begin{pmatrix}a&-b\\ b&a\end{pmatrix}$, whose determinant is $|\eta|^2$; all other real coordinates are fixed, so the full determinant is also $|\eta|^2$. If $|\eta|=1$, the rotation preserves each of the three domains and its dilates. Applying the linear change-of-variables theorem to the inverse rotation shows that every restricted map is measurable and measure preserving ([[rem-complex-euclidean-space-dictionary]], [[def-complex-conjugate-real-imaginary-part-and-modulus]], [[def-measure-preserving-transformation-and-system]], [[thm-linear-change-of-variables-for-lebesgue-measure]]).

[F8] Integrals of integrable complex functions are invariant under a measure-preserving map ([[thm-integrals-are-invariant-under-measure-preserving-maps]]).

[F9] The unit ball and polydisc dilates are bounded open sets; their closures are compact subsets of the corresponding unit domains when $0<t<1$ ([[def-balls-and-polydiscs-in-complex-euclidean-space]], [[rem-complex-euclidean-space-dictionary]], [[thm-heine-borel-rn]], [[def-metric-compactness]]). Every ambient open cover of such a compact subset has a finite subcover ([[lem-compactness-is-intrinsic]]).

[F10] A pointwise almost-everywhere limit dominated by one integrable nonnegative function has convergent complex integrals ([[thm-dominated-convergence]]).

[F11] For $u,v\in L^2(\Omega)$, the product $u\overline v$ is integrable and $\int|u\overline v|\le\|u\|_2\|v\|_2$ ([[thm-cauchy-schwarz-in-an-inner-product-space]]).

[F12] Borel sets are Lebesgue measurable, continuous functions are Borel measurable, and open dilates are Borel sets ([[def-borel-sigma-algebra]], [[cor-continuous-functions-are-borel-measurable]], [[rem-complex-euclidean-space-dictionary]], [[thm-borel-sets-are-lebesgue-measurable]]).

[F13] The nonnegative integral is monotone; in particular $\lambda(t\Omega)\le\lambda(\Omega)<\infty$ ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[lem-monomial-integrals-over-disc-ball-and-polydisc]]).

[F14] An orthonormal family in a Hilbert space is complete exactly when its orthogonal complement is $\{0\}$ ([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]], [[thm-parseval-equivalences-for-a-complete-orthonormal-family]]).

[F15] The integral of a finite sum of integrable complex functions is the corresponding finite sum of their integrals ([[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

[F16] If $u,v$ are continuous complex functions, then $u\overline v$ is continuous: near any point $a$, $|u(x)\overline{v(x)}-u(a)\overline{v(a)}|\le |u(x)|\,|v(x)-v(a)|+|v(a)|\,|u(x)-u(a)|$, and continuity of $u$ bounds it locally; conjugation preserves modulus ([[lem-complex-conjugation-and-modulus-laws]]).

[F17] Under $\mathrm{AC}_\omega$, $L^2(\Omega)$ is Hilbert and the preceding theorem makes $A^2(\Omega)$ a closed subspace, hence a Hilbert space ([[def-bergman-space-and-kernel]], [[thm-bergman-basis-expansion-and-closedness]]).

## Proof

**Proof technique:** direct, using monomial moments, coordinate rotations, and Taylor coefficients.

**Given:** $\mathrm{AC}_\omega$, one of $\Omega=\mathbb D$, $\mathbb B^m$ or $\mathbb D^m$ (with $m=1$ in the disc case), and $f\in A^2(\Omega)$ when testing completeness.

1.1 The preceding monomial-integral lemma gives the three squared-norm formulas in the statement. Every value is positive and finite, so each monomial belongs to the corresponding Bergman space and can be normalized. [A1, F1, F2, F3, given]

1.2 Let $\alpha\ne\beta$ and choose $j<m$ with $d_0:=\beta_j-\alpha_j\ne0$. Set $d=|d_0|$ and $\eta=e^{i\pi/d}$. The coordinate rotation $T(z)_j=\eta z_j$, fixing the other coordinates, maps $\Omega$ and every $t\Omega$ onto themselves and preserves Lebesgue measure by [F7]. For $g(z)=z^\beta\overline{z^\alpha}$, one has $g(Tz)=\eta^{\beta_j}\overline\eta^{\alpha_j}g(z)=\eta^{d_0}g(z)=-g(z)$: if $d_0>0$ the factor is $\eta^d=-1$, and if $d_0<0$ it is $\eta^{-d}=\overline{\eta^d}=-1$. Invariance [F8] gives $I:=\int_\Omega g=\int_\Omega g\circ T=-I$, so $I=0$ in $\mathbb C$. Integrability follows from [F2] and [F11]; therefore $\langle z^\beta,z^\alpha\rangle=0$. Hence distinct monomials are orthogonal, and the normalized family is orthonormal. [A1, F1, F2, F6, F7, F8, F11, given]

1.3 Fix $0<t<1$ and set $K_t=\overline{t\Omega}$. By [F9], $K_t$ is compact and contained in $\Omega$. For each $a\in K_t$, choose a positive polyradius $\rho$ with $\overline\Delta_\rho(0)\subset\Omega$ and $|a_j|<\rho_j$ for all $j<m$: if $\Omega=\mathbb D$, take $|a|<\rho<1$; if $\Omega=\mathbb B^m$, take $\rho_j>|a_j|$ with $\sum_{j<m}\rho_j^2<1$; and if $\Omega=\mathbb D^m$, take $|a_j|<\rho_j<1$. These choices exist since $a\in\overline{t\Omega}$ and $t<1$. Choose $s<\rho$ and $0<\theta<1$ with $|a_j|<\theta s_j$ for every $j<m$, possible because there are finitely many strict coordinate inequalities. Holomorphy gives the continuity and separate holomorphy required by [F4]. Define the box partial sums $S_N(z)=\sum_{\alpha\in\{0,\ldots,N\}^m}c_\alpha z^\alpha$. By [F4], these sums converge uniformly on each closed polydisc strictly inside $\Delta_\rho(0)$, including $\overline\Delta_{\theta s}(0)$. If two admissible radii are used, restrict both expansions to a smaller common centered polydisc and apply [F5]; hence their coefficient families agree. The family of all such open polydiscs $\Delta_{\theta s}(0)$ covers $K_t$, without selecting one for each point. By [[lem-compactness-is-intrinsic]], this ambient open cover has a finite subcover; a common cutoff for its finitely many uniform convergences shows that these same box partial sums converge uniformly to $f$ on $K_t$. [F3, F4, F5, F9, given]

2.1 Fix $0<t<1$ and a multi-index $\gamma$. The box partial sums $S_N$ from step 1.3 converge uniformly on $K_t$, so they are uniformly bounded there by a finite $M_t$. Since $|z^\gamma|\le1$ on $\Omega$ and $\lambda(t\Omega)<\infty$ by [F13], the measurable functions $\mathbf1_{t\Omega}S_N\overline{z^\gamma}$ are dominated by the integrable function $M_t\mathbf1_{t\Omega}$; measurability follows from [F3], [F12] and [F16], and dominated convergence [F10] permits passing their integrals to the limit. For every $N\ge\max_j\gamma_j$, finite-sum linearity [F15] and the rotation argument of step 1.2 give $\int_{t\Omega}S_N(z)\overline{z^\gamma}\,d\lambda_{2m}(z)=c_\gamma\int_{t\Omega}|z^\gamma|^2\,d\lambda_{2m}(z)$, since every off-diagonal monomial moment vanishes on $t\Omega$ by that same rotation argument. Taking the limit yields $\int_{t\Omega}f(z)\overline{z^\gamma}\,d\lambda_{2m}(z)=c_\gamma\int_{t\Omega}|z^\gamma|^2\,d\lambda_{2m}(z)$. [A1, F1, F2, F3, F8, F9, F10, F11, F12, F13, F15, F16, step 1.2, step 1.3]

3.1 Suppose $f$ is orthogonal to every monomial. Let $t_n=1-1/(n+2)$, so $t_n\uparrow1$ and $t_n\Omega$ increases to $\Omega$. For each $\gamma$, the functions $\mathbf1_{t_n\Omega}f\overline{z^\gamma}$ converge pointwise to $f\overline{z^\gamma}$ and are dominated by $|f\overline{z^\gamma}|$, which is integrable by [F11]; measurability follows from [F3], [F12] and [F16]. Also $\mathbf1_{t_n\Omega}|z^\gamma|^2$ converges to $|z^\gamma|^2$ and is dominated by it, which is integrable by [F2]; its measurability follows by the same facts. Applying [F10] to both sequences and using step 2.1 gives $0=\langle f,z^\gamma\rangle=c_\gamma\|z^\gamma\|_2^2$. The norm in [F2] is positive, so $c_\gamma=0$ for every $\gamma$. [A1, F1, F2, F3, F10, F11, F12, F16, step 2.1, given]

4.1 Step 1.3 supplies the Taylor expansion on each $K_t$, and the dilates $t_n\Omega$ exhaust $\Omega$. Since all coefficients vanish by step 3.1, this expansion gives $f=0$ at every point of $\Omega$. Thus the only element of $A^2(\Omega)$ orthogonal to every monomial is $0$. [F1, step 1.3, step 3.1, given]

5.1 Step 1.2 makes the normalized monomials an orthonormal family, and step 4.1 makes its orthogonal complement zero. By [F17] the Bergman space is Hilbert, so the zero-complement-to-completeness direction of [F14] shows that this family is complete. Conversely, if the family is complete, every vector orthogonal to its members is orthogonal to their dense linear span and hence, by Cauchy–Schwarz [F11], to itself; it must then be zero. Thus both directions of the stated equivalence hold, and the norm formulas and completeness establish all three asserted complete orthonormal systems. [A1, F1, F11, F14, F17, step 1.2, step 4.1] ∎
