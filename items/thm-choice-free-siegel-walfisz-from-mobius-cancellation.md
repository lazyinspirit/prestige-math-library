---
dependency_level: 5
id: thm-choice-free-siegel-walfisz-from-mobius-cancellation
kind: theorem
title: "Unqualified logarithmic-modulus prime distribution from Möbius cancellation"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - lem-choice-free-mobius-harmonic-tails-at-one
  - thm-mobius-character-sum-zero-free-log-saving
  - def-number-theoretic-mobius-function
  - thm-von-mangoldt-divisor-sum-identity
  - cor-classical-mobius-inversion
  - def-von-mangoldt-function
  - def-dirichlet-character-modulo-q
  - lem-dirichlet-character-values
  - thm-dirichlet-character-orthogonality
  - def-prime-progression-discrepancy
  - thm-logarithm-derivative-and-integral
  - thm-logarithm-slower-than-every-positive-power
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is assumed; explicit finite sums, proper Riemann integrals and proved uniform numerical tails suffice."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Green and Tao, The Möbius function is strongly orthogonal to nilsequences"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n2-p03-p.pdf"
      locator: "AppendixA PropositionA.1, printed p.565, for the Möbius cancellation interface supplied by the accepted local theorem. No external result imported."
    - title: "Terence Tao, 254A Notes3, The large sieve and the Bombieri–Vinogradov theorem"
      url: "https://terrytao.wordpress.com/2015/01/10/254a-notes-3-the-large-sieve-and-the-bombieri-vinogradov-theorem/"
      locator: "Theorems16–17 motivate the downstream distribution interface; this separate local proof obtains the SW range by finite Möbius convolution/hyperbola, not by invoking the old qualified SW theorem."
---

## Statement

For every fixed pair of real numbers $D,B>0$ there is an ineffective constant $C_{D,B}>0$ such that for every real $x\ge3$, integer $1\le q\le(\log x)^D$ and Dirichlet character $\chi$ modulo $q$,
$$\left|\psi(x,\chi)-\delta_\chi x\right|\le C_{D,B}x(\log x)^{-B},\qquad \psi(x,\chi)=\sum_{1\le n\le x}\Lambda(n)\chi(n),$$
where $\delta_\chi=1$ for the principal character and zero otherwise. Consequently, for every reduced residue class $a\pmod q$,
$$|E_\psi(x;q,a)|\le C_{D,B}x(\log x)^{-B}.$$
Both estimates use full von Mangoldt endpoints, include $q=1$ and imprimitive characters, and introduce no maximum over endpoints or choice hypothesis.

## Facts & Assumptions

**Given:** Fixed $D,B>0$, real $x\ge3$, $q\le(\log x)^D$ and a character $\chi$ modulo $q$.

[F1] [[thm-von-mangoldt-divisor-sum-identity]] gives $\sum_{d\mid n}\Lambda(d)=\log n$. [[cor-classical-mobius-inversion]] gives finite Möbius inversion, so $\sum_{d\mid n}\mu(d)=1_{n=1}$. [[def-number-theoretic-mobius-function]] gives $|\mu(n)|\le1$.

[F2] [[def-von-mangoldt-function]] gives the full weight $\Lambda(p^a)=\log p$ and zero otherwise.

[F3] [[def-dirichlet-character-modulo-q]], [[lem-dirichlet-character-values]] and [[thm-dirichlet-character-orthogonality]] give multiplicativity, periodicity modulo $q$, $|\chi(n)|\le1$, vanishing on nonunits, zero complete-period sum for a nonprincipal character, and the two finite orthogonality relations.

[F4] [[thm-logarithm-derivative-and-integral]] gives $\log'(t)=1/t$ and its real integral law. [[thm-logarithm-slower-than-every-positive-power]] implies that every fixed power of $\log x$ is smaller than every fixed positive power of $x$: for $K,\delta>0$, apply it with exponent $\delta/K$ and raise $\log x/x^{\delta/K}\to0$ to the $K$th power.

[F5] [[thm-mobius-character-sum-zero-free-log-saving]] gives $|M_\chi(t)|\le C_T\sqrt q\,t(\log t)^{-T}$ for all real $t\ge2$, all characters and every fixed $T>0$.

[F6] [[lem-choice-free-mobius-harmonic-tails-at-one]] gives $S_0(U)=\sum_{n\le U}\mu(n)/n=O_T((\log U)^{1-T})$ and $S_1(U)=\sum_{n\le U}\mu(n)\log(n)/n=-1+O_T((\log U)^{2-T})$ for $T>2$.

[F7] [[def-prime-progression-discrepancy]] gives $E_\psi(x;q,a)=\psi(x;q,a)-x/\varphi(q)$ with full positive-integer endpoints and $\varphi(1)=1$.

## Proof

1.1 Finite inversion of [F1] gives [F1, F2, F3, given, algebra]
$$\Lambda(n)=\sum_{d\mid n}\mu(d)\log(n/d).$$
Explicitly expand $\log(n/d)=\sum_{l\mid n/d}\Lambda(l)$, interchange the finite divisor sums, and use $\sum_{d\mid n/l}\mu(d)=1_{l=n}$. The formula also gives zero at $n=1$. Multiplicativity [F3] consequently writes $\psi(x,\chi)=\sum_{dm\le x}\mu(d)\chi(d)\chi(m)\log m$, with all endpoints full. [F1, F2, F3, given, algebra]

1.2 Put $C_\chi(y)=\sum_{m\le y}\chi(m)\log m$ for $y\ge1$. For a nonprincipal character its complete-period sum is zero by [F3], so $|\sum_{m\le t}\chi(m)|\le q$ by splitting into full periods and one residual block. Finite summation by parts gives $|C_\chi(y)|\le2q\log(2y)$. For the principal character modulo one, $C_1(y)=\sum_{m\le y}\log m=y\log y-y+O(\log(2y))$: compare the increasing function $\log t$ with its lower and upper unit-interval sums. Its integral is $y\log y-y+1$ by [F4], and changing either limit by less than one costs $O(\log(2y))$. Both estimates hold uniformly for real $y\ge1$. [F3, F4, given, algebra]

2.1 Suppose first that $x$ is sufficiently large and write $L=\log x$, $U=\lfloor\sqrt x\rfloor$. Since $(U+1)^2>x$ and $U^2\le x$, every pair $dm\le x$ has $d\le U$ or $m\le U$, and their overlap is the entire rectangle $d,m\le U$. Splitting the finite sum in step 1.1 and subtracting exactly this rectangle gives [F3, step 1.1, given, construct, algebra]
$$\psi(x,\chi)=\sum_{d\le U}\mu(d)\chi(d)C_\chi(x/d) +\sum_{m\le U}\chi(m)\log m\,[M_\chi(x/m)-M_\chi(U)]. \tag{1}$$
This uses the floor of the square root for every real $x$; it has no half-weight or missing boundary term. [F3, step 1.1, given, construct, algebra]

3.1 Fix $T=B+D/2+4>2$. For $m\le U$, $x/m\ge\sqrt x$ and thus $\log(x/m)\ge L/2$. Also $\sqrt x/2\le U\le\sqrt x$ and $\log U\asymp L$ for large $x$. Apply [F5] to bound the long term and its rectangle correction in (1) by [F4, F5, step 2.1, given, algebra]
$$\sum_{m\le U}(\log m)|M_\chi(x/m)|\ll_T\sqrt q\,xL^{-T}\sum_{m\le U}\frac{\log m}{m}\ll_T\sqrt q\,xL^{2-T},$$
$$|M_\chi(U)|\sum_{m\le U}\log m\ll_T\sqrt q\,U^2(\log U)^{1-T}\ll_T\sqrt q\,xL^{1-T}.$$
The harmonic bound follows from $\sum_{m\le U}1/m\le1+\log U$ and $\log m\le\log U$. With $q\le L^D$, these errors are $O_{D,B}(xL^{-B-2})$. No cancellation in the rectangle correction is needed. These bounds apply to every character, including the principal character modulo one. [F4, F5, step 2.1, given, algebra]

4.1 In the principal modulus-one case, use step 1.2 in the short term of (1). It equals [F4, F6, step 1.2, step 2.1, step 3.1, algebra]
$$x\left[(L-1)S_0(U)-S_1(U)\right]+O(\sqrt x\,L) =x+O_T(xL^{2-T}+\sqrt x\,L),$$
by [F6] and $\log U\asymp L$. Add the long and rectangle bounds in step 3.1 with $q=1$. Since $T=B+D/2+4>B+2$ and [F4] absorbs $\sqrt x\,L$, this proves $\psi(x)=x+O_{D,B}(xL^{-B})$. The exact value $S_1(\infty)=-1$, rather than a bare tail estimate, is what supplies the main term $x$. [F4, F6, step 1.2, step 2.1, step 3.1, algebra]

4.2 If $\chi$ is nonprincipal, step 1.2 bounds the short term in (1) by $O(q\sqrt x\,L)$. Together with step 3.1 it gives [F4, step 1.2, step 2.1, step 3.1, algebra]
$$|\psi(x,\chi)|\ll_{D,B}\sqrt x\,L^{D+1}+xL^{-B-2}\ll_{D,B}xL^{-B}$$
by [F4]. The bound is uniform over actual moduli and all imprimitive characters. When a modulus has no nonprincipal character this case is empty, not an exception. [F4, step 1.2, step 2.1, step 3.1, algebra]

5.1 For the principal character modulo $q$, the difference from $\psi(x)$ consists exactly of powers of primes dividing $q$. Each such prime contributes at most $\log x$, since there are $\lfloor\log x/\log p\rfloor$ powers. Thus [F2, F3, F4, step 4.1, algebra]
$$|\psi(x,\chi_0)-\psi(x)|\le\omega(q)\log x\le\frac{\log(2q)}{\log2}\log x.$$
For $q\le L^D$ this is absorbed in $xL^{-B}$ by [F4]. Combined with step 4.1 this gives the principal estimate for every actual modulus, including $q=1$ where the deleted sum is empty. It needs no new modulus-dependent harmonic normalization. [F2, F3, F4, step 4.1, algebra]

6.1 Orthogonality [F3] gives [F2, F3, F7, step 4.2, step 5.1, given, algebra]
$$\psi(x;q,a)=\frac1{\varphi(q)}\sum_{\chi\bmod q}\overline{\chi(a)}\psi(x,\chi).$$
There are exactly $\varphi(q)$ characters: evaluate the first orthogonality relation at unit $1$. The principal main term is $x/\varphi(q)$ and the other main terms vanish. Steps 4.2 and 5.1 therefore give the stated error after dividing the finite character sum by $\varphi(q)$, with no extra $q$ factor. This is precisely [F7]. Finally choose a single $x_0(D,B)$ covering the preceding large-$x$ conditions. For $3\le x\le x_0$, $|\psi(x,\chi)|\le x\log x$ and $|\psi(x;q,a)|\le x\log x$ by [F2]–[F3], while both relevant main terms have size at most $x$. Enlarge the constant by $(1+\log x_0)(\log x_0)^B$. This covers all bounded $x$, uniformly in $q,\chi,a$, and proves the entire Statement. All constants depend only on the two fixed exponents; their possible ineffectivity comes from [F5]. [F2, F3, F7, step 4.2, step 5.1, given, algebra] ∎
