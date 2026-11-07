---
id: thm-mobius-character-sum-zero-free-log-saving
kind: theorem
title: Logarithmic cancellation in Möbius sums twisted by characters
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-number-theoretic-mobius-function
  - def-dirichlet-character-modulo-q
  - lem-dirichlet-character-values
  - def-dirichlet-l-function
  - thm-dirichlet-l-euler-product
  - thm-fundamental-theorem-of-arithmetic
  - lem-choice-free-dirichlet-classical-strip-and-reciprocal-bound
  - thm-siegel-ineffective-lower-bound-dirichlet-zero
  - thm-dirichlet-character-primitive-induction
  - def-primitive-dirichlet-character-and-conductor
  - lem-real-dirichlet-character-has-real-primitive-ancestor
  - thm-induced-dirichlet-l-finite-euler-factors
  - thm-truncated-perron-formula
  - def-starred-summatory-function
  - cor-contour-integrals-homologous-cycles
  - prop-star-shaped-plane-domains-are-homologically-simply-connected
  - thm-natural-logarithm-laws
  - thm-logarithm-derivative-and-integral
  - def-real-power
  - thm-real-power-laws
  - thm-exponential-beats-every-polynomial
  - thm-complex-exponential-is-entire-with-derivative-itself
  - thm-algebra-of-complex-derivatives
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Ben Green and Terence Tao, The Möbius function is strongly orthogonal to nilsequences
      url: https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n2-p03-p.pdf
      locator: Proposition A.1, printed p. 565
    - title: Henryk Iwaniec and Emmanuel Kowalski, Analytic Number Theory
      url: https://www.scribd.com/document/807332382/Colloquium-Publications-53-Henryk-Iwaniec-Emmanuel-Kowalski-Analytic-Number-Theory-American-Mathematical-Society-2004
      locator: Corollary 5.29, printed pp. 124–125; source-fetch verification failed
---

## Statement

For every $A>0$ there is an ineffective constant $C_A$ such that for every
real $x\geq2$, every integer $q\geq1$, and every Dirichlet character
$\chi$ modulo $q$,
$$\left|\sum_{1\leq n\leq x}\mu(n)\chi(n)\right|\leq C_A\sqrt q\,x(\log x)^{-A}.$$

## Statement references

[Green and Tao, Proposition A.1](https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n2-p03-p.pdf)

[Iwaniec and Kowalski, Corollary 5.29](https://www.scribd.com/document/807332382/Colloquium-Publications-53-Henryk-Iwaniec-Emmanuel-Kowalski-Analytic-Number-Theory-American-Mathematical-Society-2004)

## Facts & Assumptions

**Given:** A real $A>0$, a real $x\ge2$, a positive integer $q$, and any Dirichlet character $\chi$ modulo $q$. No choice axiom is assumed.

[F1] The Möbius function vanishes on nonsquarefree integers and is $(-1)^r$ on a product of $r$ distinct primes; unique prime factorization holds. Characters are multiplicative, vanish on nonunits and have modulus one on units. For $\operatorname{Re}s>1$, the Dirichlet series defines $L(s,\chi)$ and its absolutely convergent Euler product is nonzero ([[def-number-theoretic-mobius-function]], [[thm-fundamental-theorem-of-arithmetic]], [[def-dirichlet-character-modulo-q]], [[lem-dirichlet-character-values]], [[def-dirichlet-l-function]], [[thm-dirichlet-l-euler-product]]).

[F2] There are absolute $c,C>0$ and an integer $K\ge1$ such that, with $\lambda_q(t)=\log(q(|t|+3))$, the closed strip $\sigma\ge1-c/\lambda_q(t)$ is zero-free except possibly for one real simple zero $\beta_\chi\in(0,1)$ of a real nonprincipal character. Without that exception $|1/L(s,\chi)|\le C\lambda_q(t)^K$; with it, away from the zero, $|1/L(s,\chi)|\le C\lambda_q(t)^K(1+1/(\lambda_q(t)|s-\beta_\chi|))$. Principal reciprocals extend holomorphically with value zero at $1$. These bounds hold for the actual modulus, all heights, $q=1$ and imprimitive characters without choice hypotheses ([[lem-choice-free-dirichlet-classical-strip-and-reciprocal-bound]]).

[F3] Every character has a unique primitive ancestor of conductor $d\mid q$; a real character has a real ancestor. The finite Euler identity is $L(s,\chi)=L(s,\chi^*)\prod_{p\mid q,\,p\nmid d}(1-\chi^*(p)p^{-s})$ for $\operatorname{Re}s>1$. The proved actual-modulus transfer in [F2], Proof, step 11.1, extends this identity to $\operatorname{Re}s>0$, with principal poles removed, and shows that every possible exception is a zero of the real nonprincipal primitive ancestor; the extra factors have no zeros there ([[thm-dirichlet-character-primitive-induction]], [[def-primitive-dirichlet-character-and-conductor]], [[lem-real-dirichlet-character-has-real-primitive-ancestor]], [[thm-induced-dirichlet-l-finite-euler-factors]]).

[F4] For every $\varepsilon>0$ there is an ineffective $c_\varepsilon>0$ such that every real zero $\beta\in(0,1)$ of a primitive real nonprincipal character of conductor $d\ge3$ satisfies $1-\beta\ge c_\varepsilon d^{-\varepsilon}$, without a choice assumption ([[thm-siegel-ineffective-lower-bound-dirichlet-zero]]).

[F5] If $F(s)=\sum a_nn^{-s}$ is absolutely convergent on $\operatorname{Re}s=\alpha>0$, its finite Perron integral approximates $A^*(X)=\sum_{n<X}a_n+\tfrac12a_X$ with error at most $\sum_{n\ne X}|a_n|(X/n)^\alpha\min\{1,(T|\log(X/n)|)^{-1}\}+\alpha|a_X|/T$, where the last term occurs only for an integer $X$ ([[thm-truncated-perron-formula]], [[def-starred-summatory-function]]).

[F6] Integrals of a holomorphic function around homologous cycles agree, and convex open plane domains are homologically simply connected; thus its integral around a rectangle lying in such a domain is zero ([[cor-contour-integrals-homologous-cycles]], [[prop-star-shaped-plane-domains-are-homologically-simply-connected]]).

[F7] Logarithms obey their product, monotonicity, derivative and integral laws; positive real powers have their usual algebra, and an exponential dominates every fixed polynomial. The complex exponential is entire with derivative itself; its Cartesian formula, recorded in that supplier's proof, gives $|\exp z|=e^{\operatorname{Re}z}$. Products and nonvanishing quotients of holomorphic functions are holomorphic ([[thm-natural-logarithm-laws]], [[thm-logarithm-derivative-and-integral]], [[def-real-power]], [[thm-real-power-laws]], [[thm-exponential-beats-every-polynomial]], [[thm-complex-exponential-is-entire-with-derivative-itself]], [[thm-algebra-of-complex-derivatives]]).

## Proof

**Proof technique:** an absolutely convergent reciprocal Dirichlet series, finite Perron truncation and a zero-free finite rectangle.

1.1 Write $a_n=\mu(n)\chi(n)$ and $S_\chi(x)=\sum_{n\le x}a_n$. By [F1], $|a_n|\le1$. For $\sigma>1$, $\sum|a_n|n^{-\sigma}\le\sum n^{-\sigma}<\infty$. Expanding $\prod_{p\le P}(1-\chi(p)p^{-s})$ gives exactly the squarefree terms whose prime factors are at most $P$. Any omitted nonzero term has $n>P$, so its absolute tail is at most $\sum_{n>P}n^{-\sigma}\to0$. The nonzero Euler product in [F1] consequently gives $$F_\chi(s):=\sum_{n\ge1}a_nn^{-s}=1/L(s,\chi)\qquad(\operatorname{Re}s>1).$$ [F1, given, algebra]

2.1 The trivial bound is $|S_\chi(x)|\le x$. If $q>(\log x)^{2A}$, then $\sqrt q(\log x)^{-A}>1$, proving the claim. Suppose instead $q\le(\log x)^{2A}$, with $x$ sufficiently large in terms of $A$, and set $$X=\lfloor x\rfloor+\tfrac12,\quad L=\log X,\quad D=\max(2A,1),\quad\varepsilon=1/(2D),\quad\alpha=1+1/L,\quad T=\exp(\sqrt L).$$ Then $L\ge1$, $\alpha\le2$, and $\log x\le2L$ for large $x$, so $$q\le(2L)^{2A}\le2^D L^D.$$ The bound retains this constant because $X$ can be less than $x$. [F1, F7, step 1.1, given, construct, algebra]

3.1 The integers $n\le x$ are precisely those $n<X$, and $X$ is not an integer. Thus $S_\chi(x)=A^*(X)$ for the coefficients in step 1.1. By [F5], $$S_\chi(x)=\frac1{2\pi i}\int_{\alpha-iT}^{\alpha+iT}F_\chi(s)\frac{X^s}{s}\,ds+O(E),\qquad E=\sum_n(X/n)^\alpha\min\{1,(T|\log(X/n)|)^{-1}\}.$$ There is no integer-endpoint error, even if the original $x$ is an integer. [F5, step 1.1, step 2.1, algebra]

3.2 If [F2] designates $\beta_\chi$, [F3] identifies it with a zero of the real nonprincipal primitive ancestor of conductor $d\mid q$. Such an ancestor has $d\ge3$, since at conductors $1$ and $2$ the unit group has only the principal character, and a principal ancestor induces a principal character. Fix the positive constant $c_\varepsilon$ in [F4] for the single $\varepsilon$ in step 2.1. As $D\varepsilon=1/2$, $$1-\beta_\chi\ge c_\varepsilon d^{-\varepsilon}\ge c_\varepsilon q^{-\varepsilon}\ge(c_\varepsilon/\sqrt2)L^{-1/2}.$$ Put $$d_A=\min(c/24,c_\varepsilon/(8\sqrt2),1/8),\qquad\delta=d_A/\sqrt L,\qquad a=1-\delta.$$ Thus every possible exception satisfies $\beta_\chi\le1-8\delta$, strictly to the left of $\operatorname{Re}s\ge a$. This is a per-character application of the same Siegel constant, with no Page or common-family premise. [F1, F2, F3, F4, F7, step 2.1, construct, algebra]

4.1 For $n\le X/2$ or $n\ge2X$, $|\log(X/n)|\ge\log2$. The decreasing real integral comparison gives $\sum_n n^{-\alpha}\le1+\int_1^\infty u^{-\alpha}du=1+L$, while $X^\alpha=eX$. Both far ranges, including the whole infinite high-$n$ tail, therefore contribute at most $CX(1+L)/T$ to $E$. [F7, step 2.1, step 3.1, algebra]

4.2 For $|t|\le T+1$, step 2.1 gives $$\log3\le\lambda_q(t)\le D\log L+D\log2+\log(T+4)\le3\sqrt L$$ for sufficiently large $L$ in terms of $A$. The convex open rectangle $$\Omega=\{s:1-2\delta<\operatorname{Re}s<\alpha+\delta,\ |\operatorname{Im}s|<T+1\}$$ lies strictly inside the strip of [F2], since $c/\lambda_q(t)\ge c/(3\sqrt L)\ge8\delta>2\delta$. Its possible exceptional zero lies strictly to its left, at distance at least $6\delta$. Hence $F_\chi=1/L(s,\chi)$ is holomorphic on $\Omega$, extending through1 with value zero in the principal case. Also $\operatorname{Re}s>1/2$ there for large $x$, so $0\notin\Omega$. Define $X^s=\exp(s\log X)$ for this fixed $X>1$. Writing $\ell=\log X>0$, its difference quotient is $\ell[\exp(s\ell+h\ell)-\exp(s\ell)]/(h\ell)$ and tends to $\ell\exp(s\ell)$ by [F7]. Thus $F_\chi(s)X^s/s$ is holomorphic on $\Omega$. No principal prime main term or residue is introduced. [F2, F7, step 2.1, step 3.2, construct, algebra]

5.1 For $X/2<n<2X$, $(X/n)^\alpha\le4$ and $|\log(X/n)|\ge|X-n|/\max(X,n)\ge|X-n|/(2X)$ by integrating $1/u$ between $n$ and $X$. Since $X$ is a half-integer, the distances $|X-n|$ are positive half-integers, each occurring at most twice. Their reciprocal sum is at most $C\log(2X)$ by finite harmonic-sum comparison. Using $\min(1,u)\le u$, the near range is at most $CX\log(2X)/T$. Together with step 4.1 this proves $$E\le CX(1+L)/T.$$ [F7, step 2.1, step 3.1, step 4.1, algebra]

5.2 On the closed rectangle $[a,\alpha]+i[-T,T]$, $|s-\beta_\chi|\ge7\delta$ if an exception exists. With $B=(K+1)/2$, [F2] therefore gives in all cases $$|F_\chi(s)|\le C\lambda_q(t)^K\left(1+\frac1{7\lambda_q(t)\delta}\right)\le C_A L^B,$$ omitting the extra term without an exception. Here $\lambda_q(t)\ge\log3$ is essential: at low height the extra factor may be of order $\sqrt L$, and is absorbed in the displayed fixed power rather than asserted $O(1)$. [F2, F7, step 3.2, step 4.2, algebra]

5.3 By [F6] and step 4.2, the integral around the finite rectangle with sides at $a,\alpha,\pm T$ vanishes. Thus the upward $\alpha$-line integral in step 3.1 equals the upward $a$-line integral plus the two oriented horizontal integrals, with no residues. All integrands are continuous on compact segments; the triangle inequality for finite parametric Riemann sums, passed to the integral limit, bounds each integral by the corresponding integral of its absolute majorant. [F6, F7, step 3.1, step 4.2, algebra]

6.1 For large $x$, $a\ge3/4$. Splitting the real integral at $|t|=1$ gives $\int_{-T}^T|a+it|^{-1}dt\le C(1+\log T)\le C\sqrt L$. As $X^a=X\exp(-d_A\sqrt L)$, step 5.2 yields $$\left|\frac1{2\pi i}\int_{a-iT}^{a+iT}F_\chi(s)\frac{X^s}{s}\,ds\right|\le C_A X\exp(-d_A\sqrt L)L^{B+1/2}.$$ [F7, step 2.1, step 3.2, step 5.2, step 5.3, algebra]

6.2 On each of the upper and lower edges $s=\sigma\pm iT$, $a\le\sigma\le\alpha$, one has $|s|\ge T$. The finite exponential integral is $\int_a^\alpha X^\sigma d\sigma=(X^\alpha-X^a)/L\le eX/L$. Thus EACH horizontal edge contributes at most $$C_A X L^{B-1}/T.$$ This bounds both signs of $T$ and their full finite lengths. [F7, step 2.1, step 5.2, step 5.3, algebra]

7.1 Combining the original Perron error with the three new edges gives $$|S_\chi(x)|\le C_A X\left(e^{-d_A\sqrt L}L^{B+1/2}+e^{-\sqrt L}L^{B-1}+e^{-\sqrt L}(1+L)\right).$$ For any fixed $d>0$ and real $H$, $e^{-d\sqrt L}L^H=O_A(L^{-A})$: put $u=\sqrt L$ and apply exponential domination to $u^{2(H+A)}$, increasing the exponent to a nonnegative integer if needed. Since $X\asymp x$ and $L\asymp\log x$, the last display is at most $C'_A x(\log x)^{-A}$, which is stronger than the target here because $\sqrt q\ge1$. [F7, step 2.1, step 5.1, step 5.3, step 6.1, step 6.2, algebra]

8.1 Choose one finite $x_A\ge e$ covering all large-$x$ conditions above. For $2\le x\le x_A$, the trivial bound is at most $(\log x_A)^A\sqrt q\,x(\log x)^{-A}$ uniformly in $q,\chi$. Combine this with the large-$q$ case of step 2.1 and the small-$q$ bound of step 7.1, increasing a constant depending only on $A$. Its ineffectivity comes from the one Siegel constant in step 3.2. This proves the entire unqualified claim, including principal, $q=1$, imprimitive and integer-$x$ cases, without choosing an infinite family of witnesses. [F1, F4, F7, step 2.1, step 3.2, step 7.1, algebra] ∎

## Source notes

Green–Tao Appendix A.1 states this bound and refers to Iwaniec–Kowalski Proposition 5.29. The native browser extraction labeled Corollary 5.29 was inspected at its largest-prime-factor passage, but the cited book failed the full-text fetch check. All six recorded recovery attempts, the uncertainty and the lack of a fetch stamp remain preserved in batch 37 coverage. No new fetch, source import or retry reset is claimed.

The proof above is a different complete local route from the reciprocal Dirichlet series and finite Perron formula. It does not use the old prime-character estimate, a von-Mangoldt explicit formula, Page uniqueness, the IK argument as a supplied proof, or the separate AC/CC/DC classical119 theorem. The accepted choice-free actual-modulus strip and unqualified Siegel theorem supply the zero-free rectangle; the principal reciprocal has a zero at $1$. The old prime-character route and its source limitation remain historical observations, not logical obligations of this direct proof. No AP, nilsequence, prime-majorant or prime-pattern theorem is independently completed merely by this carrier.
