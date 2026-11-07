---
id: thm-platt-finite-certificate-soundness
kind: theorem
title: "Soundness of a complete interval certificate for Platt's finite Dirichlet L-function ranges"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - alg-platt-finite-dirichlet-l-zero-verification
  - def-completed-dirichlet-l-function
  - alg-interval-arithmetic-for-l-function-zero-counts
  - alg-turing-method-for-rigorous-zero-counts
  - thm-turing-zero-count-certificate-is-sound
  - cor-turing-zeta-critical-line-certificate-is-complete
  - lem-primitive-dirichlet-l-completion-is-real-on-critical-line
  - def-countable-choice
  - def-riemann-xi-function
  - def-dirichlet-character-modulo-q
  - def-parity-dirichlet-character
  - def-induced-dirichlet-character
  - def-primitive-dirichlet-character-and-conductor
  - def-unit-group-modulo-n-and-euler-totient
  - cor-order-of-element-divides-group-order
  - thm-complex-nth-roots-and-roots-of-unity
  - def-dirichlet-l-function
  - thm-primitive-dirichlet-l-analytic-continuation
  - thm-riemann-zeta-meromorphic-continuation
  - thm-riemann-zeta-continuation-to-the-right-half-plane
  - thm-identity-theorem-holomorphic-functions
  - thm-taylor-expansion-holomorphic-function
  - thm-euler-gamma-function-is-holomorphic
  - cor-gamma-function-has-no-zeros
  - def-complex-logarithms-principal-logarithm-and-complex-powers
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-complex-exponential-is-entire-with-derivative-itself
  - def-order-of-zero-holomorphic-function
  - def-pi-via-first-positive-cosine-zero
  - prop-algebra-of-holomorphic-functions-in-several-variables
  - prop-cauchy-products-of-complex-power-series
  - thm-intermediate-value
proof_strategy: direct
sources:
  references:
    - title: "David J. Platt, Numerical Computations Concerning the GRH, arXiv:1305.3087v1"
      url: "https://arxiv.org/pdf/1305.3087v1"
      locator: "§§3, 5–7; conditional Turing/sign-count route and exact finite ranges"
    - title: "Nickolas Andersen, Analytic Number Theory, Course Notes for UCLA Math 205A"
      url: "https://mathdept.byu.edu/~nick/ucla/205a/205a-notes.pdf"
      locator: "§§11.2 and 17.3, printed pp. 42–43 and 73"
---

## Statement

Assume the Axiom of Countable Choice. Suppose a mathematically valid, complete input to both branches of the finite certificate checker is accepted, where validity means that every character list is the full list of primitive characters in the stated range and every supplied Taylor coefficient, boundary bound, value enclosure and sign enclosure is correct. Then every zero $\rho$ of $L(s,\chi)$ with $0<\operatorname{Re}\rho<1$ and $|\operatorname{Im}\rho|\le T_q$ lies on $\operatorname{Re}s=\tfrac12$ for each primitive character of modulus $q\le400{,}000$, and each such zero is simple; also $L(\tfrac12,\chi)\ne0$ for every primitive character of modulus $q\le2{,}000{,}000$. Countable Choice is used only by the modulus-one zero-location branch; the nonprincipal-character zero-location argument and the central-value branch are choice-free.

## Statement references

[David J. Platt, *Numerical Computations Concerning the GRH*, arXiv:1305.3087v1, §§3 and 7](https://arxiv.org/pdf/1305.3087v1)

[Nickolas Andersen, *Analytic Number Theory*, §§11.2 and 17.3](https://mathdept.byu.edu/~nick/ucla/205a/205a-notes.pdf)

## Facts & Assumptions

**Given:** Countable Choice; complete primitive-character tables in both finite ranges; mathematically valid Taylor, value, boundary and sign enclosures; and accepted zero-location and central-value outputs from the finite checker.

[A1] Countable Choice means every sequence of nonempty sets has a choice function ([[def-countable-choice]]).

[F1] [[alg-platt-finite-dirichlet-l-zero-verification]]: the exact finite character enumeration and two acceptance branches are the ones stated in its Definition; the zero-location branch counts the completed function for $q>1$ and uses the zeta critical-line mode for $q=1$.

[F2] [[alg-interval-arithmetic-for-l-function-zero-counts]]: a mathematically valid Taylor certificate returns rational rectangles containing the named holomorphic function and its derivative on each target rectangle.

[F3] [[alg-turing-method-for-rigorous-zero-counts]]: acceptance requires nonzero boundary enclosures and a unique integer in the normalized contour-count enclosure; the generic contour mode is choice-free.

[F4] [[thm-turing-zero-count-certificate-is-sound]]: an accepted valid generic contour certificate returns the weighted zero count, including multiplicities.

[F5] [[lem-primitive-dirichlet-l-completion-is-real-on-critical-line]]: a unit phase of the primitive completion is real-valued on the critical line and has exactly the critical-line zeros of $L(s,\chi)$.

[F6] [[cor-turing-zeta-critical-line-certificate-is-complete]]: under Countable Choice, an accepted $\xi$-count matched to disjoint critical-line sign intervals puts every positive-height zeta zero in the certified strip on the line and makes it simple.

[F7] [[thm-intermediate-value]]: a continuous real-valued function with opposite endpoint signs has a zero in the interval.

[F8] [[def-unit-group-modulo-n-and-euler-totient]]: $U_q=(\mathbb Z/q\mathbb Z)^\times$ is finite of order $N_q$.

[F9] [[cor-order-of-element-divides-group-order]]: every element of $U_q$ has order dividing $N_q$.

[F10] [[thm-complex-nth-roots-and-roots-of-unity]]: $\mu_{N_q}$ is exactly the finite list of $N_q$th roots of unity.

[F11] [[def-dirichlet-character-modulo-q]]: a Dirichlet character modulo $q$ is a homomorphism on $U_q$, extended by zero on nonunits.

[F12] [[def-induced-dirichlet-character]]: induction from a divisor is pullback on units and zero extension off units.

[F13] [[def-primitive-dirichlet-character-and-conductor]]: primitive means not induced from a proper divisor.

[F14] [[alg-turing-method-for-rigorous-zero-counts]]: each accepted cell enclosure on a Turing contour excludes $0$; in the modulus-one mode the accepted contour is the boundary of the $\xi$ rectangle.

[F15] [[def-riemann-xi-function]]: under Countable Choice, $\xi(s)=\tfrac12s(s-1)\pi^{-s/2}\Gamma(s/2)\zeta(s)$ is entire.

[F16] [[thm-riemann-zeta-meromorphic-continuation]]: under Countable Choice, $\zeta$ is holomorphic away from its pole at $1$ and agrees with its real-coefficient Dirichlet series on $\operatorname{Re}s>1$.

[F17] [[thm-identity-theorem-holomorphic-functions]]: agreement on an open subset extends throughout a connected holomorphic domain.

[F18] [[thm-euler-gamma-function-is-holomorphic]] and [[cor-gamma-function-has-no-zeros]]: $\Gamma(z)$ is holomorphic on $\operatorname{Re}z>0$ and has no zeros.

[F19] [[thm-taylor-expansion-holomorphic-function]]: a holomorphic function agrees locally with its convergent Taylor series.

[F20] [[thm-primitive-dirichlet-l-analytic-continuation]]: every nonprincipal primitive Dirichlet $L$-function is entire; a principal character modulo $q>1$ is induced from modulus $1$ and is not primitive by [F12]–[F13].

[F21] [[thm-riemann-zeta-continuation-to-the-right-half-plane]]: zeta is holomorphic on $\operatorname{Re}s>0$ away from $s=1$, by a choice-free continuation.

[F22] [[def-completed-dirichlet-l-function]]: for a primitive character of parity $a$, $\Lambda(s,\chi)=A_\chi(s)L(s,\chi)$ with $A_\chi(s)=(q/\pi)^{(s+a)/2}\Gamma((s+a)/2)$.

[F23] [[def-complex-logarithms-principal-logarithm-and-complex-powers]]: for a positive real base $b$, its principal complex power is $b^w=\exp(w\log b)$ using the real logarithm.

[F24] [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]: the complex exponential is nowhere zero.

[F25] [[def-order-of-zero-holomorphic-function]]: the order of a zero is the least Taylor-coefficient index with nonzero coefficient; order one means a simple zero.

[F26] [[def-pi-via-first-positive-cosine-zero]]: $\pi>0$.

[F27] [[thm-complex-exponential-is-entire-with-derivative-itself]]: the complex exponential is entire.

[F28] [[prop-algebra-of-holomorphic-functions-in-several-variables]]: finite products of holomorphic functions are holomorphic.

[F29] [[prop-cauchy-products-of-complex-power-series]]: the Taylor coefficient of a product at index $n$ is the finite convolution of the two coefficient sequences through index $n$.

## Proof

1.1 Fix $q$ and let $N_q=|U_q|$ as in [F8]. By [F9], every $u\in U_q$ has order dividing $N_q$, so every homomorphism value $\chi(u)$ is an $N_q$th root of unity by [F11]. By [F10], the exhaustive finite search over maps $U_q\to\mu_{N_q}$ therefore includes every character. The homomorphism test retains exactly the characters by [F11], and the proper-divisor induction test retains exactly the primitive ones by [F12]–[F13]. Thus the accepted tables contain every primitive character in each range. [given, F1, F8, F9, F10, F11, F12, F13, algebra]

1.2 Fix a primitive character $\chi$ of modulus $1<q\le400{,}000$. By [F12]–[F13] it is nonprincipal, so its completion $\Lambda(s,\chi)$ is entire by [F20]. The accepted Turing call counts the zeros of this completion in the rectangle $D_q=\{s:0\le\operatorname{Re}s\le1,\ |\operatorname{Im}s|\le T_q\}$ with multiplicity by [F3]–[F4]; its boundary enclosures exclude zeros, and [F1] makes its output equal to $r_\chi$, the number of proposed sign intervals. Each interval has strictly opposite endpoint signs for the real-valued function $t\mapsto u_\chi\Lambda(\tfrac12+it,\chi)$ by [F1] and [F5]. This function is continuous, so [F7] gives a zero in the interior of each interval; pairwise disjointness makes these $r_\chi$ distinct zeros of $\Lambda$ on the critical line. Since the total multiplicity count is also $r_\chi$, these are all the zeros of $\Lambda$ in $D_q$, and each has order one. [given, F1, F3, F4, F5, F7, F20]

1.3 On the open critical strip put $A_\chi(s)=(q/\pi)^{(s+a)/2}\Gamma((s+a)/2)$. The base $q/\pi$ is positive by [F26], so [F23] and [F27] make its complex-power factor holomorphic, and [F24] makes it nonzero. Also $\operatorname{Re}((s+a)/2)>0$, so [F18] makes the Gamma factor holomorphic and nonzero there. Thus [F28] makes $A_\chi$ holomorphic and nowhere zero on the open strip, and [F22] gives $\Lambda=A_\chi L$. If $L(s_0,\chi)=0$ there, its order $m$ is finite: otherwise [F19] would make $L$ vanish on a neighbourhood and [F17] would force the entire function $\Lambda$ to vanish identically, contrary to the accepted nonzero boundary enclosures. Write $L(s_0+w,\chi)=c_mw^m+c_{m+1}w^{m+1}+\cdots$ with $c_m\ne0$. The Taylor series of $A_\chi$ has constant coefficient $A_\chi(s_0)\ne0$; by [F29], the product $\Lambda=A_\chi L$ has all coefficients below $m$ zero and coefficient $A_\chi(s_0)c_m\ne0$ at index $m$. Hence $\operatorname{ord}_{s_0}\Lambda=\operatorname{ord}_{s_0}L$ by [F19] and [F25]. Every zero of $L$ in the stated open strip and closed height range therefore corresponds to one of the counted line zeros and has order one. [F17, F18, F19, F22, F23, F24, F25, F26, F27, F28, F29, step 1.2, algebra]

1.4 For every primitive character modulo $q\le2{,}000{,}000$, the accepted central-value branch gives a rational complex rectangle containing the analytically continued $L(\tfrac12,\chi)$ by [F1]–[F2], [F20], and [F21]. For $q>1$, [F20] gives the entire continuation; for $q=1$, [F21] gives the choice-free continuation of zeta to a neighbourhood of $\tfrac12$. Since the rectangle excludes $0$, the enclosed value is nonzero. [given, F1, F2, F20, F21]

2.1 For $q=1$, [A1] supplies the Countable Choice branch and the accepted $\xi$-certificate satisfies [F6] with lower endpoint $T_0=0$ and upper endpoint equal to the algorithm's $T_q$ at $q=1$. Hence every nontrivial zeta zero with positive ordinate strictly below that height lies on the critical line and is simple. By [F14], the accepted contour has nonzero enclosures on all its boundary cells. The identity in [F15] shows that any zeta zero in $0<\operatorname{Re}s<1$ at ordinate $0$ or $T_q$ would give a $\xi$ zero on the bottom or top boundary; hence neither ordinate occurs. In particular, there is no real zero in the open critical strip. For any $s_0\ne1$, the Taylor expansion of $\zeta$ about $\overline{s_0}$ from [F19], conjugated term by term, gives a convergent power series for $s\mapsto\overline{\zeta(\overline{s})}$ about $s_0$; hence this reflected function is holomorphic on $\mathbb C\setminus\{1\}$. On $\operatorname{Re}s>1$, the real coefficients of the Dirichlet series in [F16] give $\zeta(s)=\overline{\zeta(\overline{s})}$. Since $\mathbb C\setminus\{1\}$ is connected, [F17] extends this identity throughout it. If $s_+$ is a positive-height zero and $s_- =\overline{s_+}$, write $\zeta(s_++w)=c_mw^m+c_{m+1}w^{m+1}+\cdots$ with $c_m\ne0$ and $m=1$ by [F6]. The reflected Taylor series at $s_-$ has coefficients $\overline{c_k}$, so the identity makes the first nonzero Taylor coefficient of $\zeta$ there have the same index $m$; by [F25], the negative-height zero is also simple. This conjugation also excludes a zero at ordinate $-T_q$, since it would produce a zero at $T_q$. [A1, F6, F14, F15, F16, F17, F19, F25, step 1.1]

3.1 Step 1.1 covers every primitive character in the finite zero-location range. Steps 1.2–1.3 and 2.1 prove the full positive, zero and negative height claim, with the choice-free proof for nonprincipal characters and the Countable Choice use isolated in step 2.1; step 1.4 proves the separate central nonvanishing range. [given, step 1.1, step 1.2, step 1.3, step 1.4, step 2.1] ∎
