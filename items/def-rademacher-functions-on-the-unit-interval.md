---
id: def-rademacher-functions-on-the-unit-interval
kind: definition
title: "Rademacher functions on the unit interval"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [lem-integer-part, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, def-integrable-real-and-complex-functions-and-their-integrals, def-integral-of-a-nonnegative-simple-function, prop-the-nonnegative-integral-agrees-with-the-simple-integral, def-integer-power, def-borel-and-lebesgue-measurable-function-on-rn, thm-arithmetic-and-lattice-operations-preserve-measurability, thm-lebesgue-measure-of-a-box-of-every-kind, def-countable-choice]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed. (Springer GTM 249)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "Appendix C.1, definition of the Rademacher functions $r_j(t)=\\operatorname{sgn}(\\sin 2^j\\pi t)$ and the interval correspondence, printed p. 585"
    - title: "Terence Tao, Math 247A Lecture Notes 4 (UCLA, Fall 2006)"
      url: "https://www.math.ucla.edu/~tao/247a.1.06f/notes4.pdf"
      locator: "§5.5, the random-signed setup preceding Lemma 5.6, printed p. 24"
---

## Definition

Assume Countable Choice ([[def-countable-choice]]) for the Lebesgue-measure
facts below. Let $I:=[0,1)$ and let $\lambda$ be Lebesgue measure restricted to the Borel
subsets of $I$ ([[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]). For
integers $k\ge1$ let
$$b_k(t):=\lfloor 2^kt\rfloor-2\lfloor 2^{k-1}t\rfloor\in\{0,1\}$$
be the $k$-th binary digit, with $\lfloor\cdot\rfloor$ the integer part
([[lem-integer-part]]); the inclusion $b_k(t)\in\{0,1\}$ follows from
$\lfloor2u\rfloor\in\{2\lfloor u\rfloor,2\lfloor u\rfloor+1\}$ for
$u=2^{k-1}t$. For integers $j\ge0$ define the $j$-th **Rademacher function**
$\varepsilon_j:I\to\{\pm1\}$ by
$$\varepsilon_j(t):=1-2b_{j+1}(t).$$

Then:

1. Each $\varepsilon_j$ is Borel measurable
   ([[def-borel-and-lebesgue-measurable-function-on-rn]]) and
   $|\varepsilon_j|\equiv1$; indeed $b_k$ is the parity of $\lfloor 2^kt\rfloor$, so $\varepsilon_j$ is constant on the $2^{j+1}$
   half-open dyadic intervals of generation $j+1$, which are measurable
   ([[thm-lebesgue-measure-of-a-box-of-every-kind]]), and the arithmetic of
   [[thm-arithmetic-and-lattice-operations-preserve-measurability]] preserves
   measurability.
2. $\varepsilon_0=1$ on $[0,1/2)$ and $-1$ on $[1/2,1)$; more generally, for
   every $j\ge0$ the function $\varepsilon_j$ is constant, with alternating
   signs, on each half-open dyadic interval
   $[k2^{-(j+1)},(k+1)2^{-(j+1)})$, $k=0,\dots,2^{j+1}-1$, where it equals
   $(-1)^k$: on such an interval $2^{j+1}t\in[k,k+1)$, so
   $\lfloor2^{j+1}t\rfloor=k$ and $2^jt\in[k/2,(k+1)/2)$ gives
   $\lfloor2^jt\rfloor=\lfloor k/2\rfloor$, hence
   $\varepsilon_j(t)=1-2(k-2\lfloor k/2\rfloor)=(-1)^k$.
3. Consequently, since each half-open dyadic interval of generation $j+1$ has
   Lebesgue measure $2^{-(j+1)}$
   ([[thm-lebesgue-measure-of-a-box-of-every-kind]]) and the intervals
   partition $I$,
   $$\int_0^1\varepsilon_j(t)\,dt=\sum_{k=0}^{2^{j+1}-1}(-1)^k2^{-(j+1)}=0 \qquad(j\ge0),$$
   with the finite sum evaluated by pairing consecutive terms. Indeed,
   $\varepsilon_j^+$ and $\varepsilon_j^-$ are the indicators of the unions
   of the even and odd indexed intervals respectively, each of measure
   $1/2$. Their nonnegative integrals equal $1/2$
   ([[def-integral-of-a-nonnegative-simple-function]],
   [[prop-the-nonnegative-integral-agrees-with-the-simple-integral]]), so
   $\varepsilon_j$ is integrable and its signed integral is their difference
   ([[def-integrable-real-and-complex-functions-and-their-integrals]]).
   The displayed identity is the $m=1$ case of the equidistribution proved
   by the finite-block lemma below.

All integrals of functions of finitely many Rademacher functions on this page
are integrals over $(I,\lambda)$ and are written $\int_0^1$. The exponent
$2^{j+1}$ is an integer power in the sense of [[def-integer-power]]. No choice
principle is used to construct the binary digits or sign functions; the
measure and integral assertions inherit Countable Choice from the cited
Lebesgue-measure suppliers.
