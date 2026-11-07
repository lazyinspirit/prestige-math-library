---
id: alg-platt-finite-dirichlet-l-zero-verification
kind: algorithm
title: "Platt's interval-arithmetic verification for bounded-conductor Dirichlet L-functions"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-dirichlet-character-modulo-q
  - def-induced-dirichlet-character
  - def-primitive-dirichlet-character-and-conductor
  - def-parity-dirichlet-character
  - def-unit-group-modulo-n-and-euler-totient
  - cor-order-of-element-divides-group-order
  - thm-complex-nth-roots-and-roots-of-unity
  - def-dirichlet-l-function
  - def-completed-dirichlet-l-function
  - thm-primitive-dirichlet-l-analytic-continuation
  - thm-riemann-zeta-continuation-to-the-right-half-plane
  - thm-primitive-dirichlet-l-functional-equation
  - def-countable-choice
  - def-riemann-xi-function
  - alg-interval-arithmetic-for-l-function-zero-counts
  - alg-turing-method-for-rigorous-zero-counts
  - thm-turing-zero-count-certificate-is-sound
  - lem-primitive-dirichlet-l-completion-is-real-on-critical-line
sources:
  references:
    - title: "David J. Platt, Numerical Computations Concerning the GRH, arXiv:1305.3087v1"
      url: "https://arxiv.org/pdf/1305.3087v1"
      locator: "§§1, 2.2–3, 5–7; complete arXiv v1 article"
    - title: "Nickolas Andersen, Analytic Number Theory, Course Notes for UCLA Math 205A"
      url: "https://mathdept.byu.edu/~nick/ucla/205a/205a-notes.pdf"
      locator: "§§11.2 and 17.3, printed pp. 42–43 and 73; full 96-page lecture-note PDF"
verification:
  precheck: n/a
---

## Definition

This is a finite certificate checker for the two stated Platt ranges. It does not reproduce Platt’s production DFT/Booker computation and its acceptance output is not evidence that either published computation was replayed.

For each positive integer $q$, form the finite unit group $U_q=(\mathbb Z/q\mathbb Z)^\times$ and let $N_q=|U_q|$. Enumerate all functions $f:U_q\to\mu_{N_q}$, where $\mu_{N_q}=\{z\in\mathbb C:z^{N_q}=1\}$ is the finite set of $N_q$th roots of unity. Retain in a table $H_q$ exactly the functions satisfying $f(uv)=f(u)f(v)$ for every $u,v\in U_q$, and extend each by zero on nonunits. Process moduli in increasing order. For each proper divisor $d\mid q$, compare every candidate in $H_q$ with the induction to $q$ of every character table in $H_d$; output as primitive exactly those candidates that agree with no such induction, while retaining the full $H_q$ table for later divisor comparisons. This output is the complete list of primitive characters modulo $q$: every character value has order dividing $N_q$ by the finite-group order theorem, and the homomorphism and proper-divisor induction checks implement the definitions exactly.

The input has two independent branches. The zero-location branch is for all integers $1\le q\le400{,}000$. For each enumerated primitive character $\chi$ with $q>1$, compute its parity $a_\chi\in\{0,1\}$ from $\chi(-1)=(-1)^{a_\chi}$, the root number $\varepsilon_\chi=(-i)^{a_\chi}\tau(\chi)/\sqrt q$, and supply $u_\chi$ as an exact complex algebraic value with an interval enclosure. Verify by exact algebraic arithmetic that $|u_\chi|=1$ and $u_\chi^2\varepsilon_\chi=1$; reject if either identity fails. It sets
$$T_q=\begin{cases}\max(10^8/q,\;7.5\cdot10^7/q+200),&q\text{ even},\\\max(10^8/q,\;3.75\cdot10^7/q+200),&q\text{ odd}.\end{cases}$$
For $q>1$, start with the signed rational lattice $G_0(q)=\{\pm5k/64:k\in\mathbb Z,\ 0\le5k/64\le T_q\}\cup\{-T_q,T_q\}$; for $q=1$ use its nonnegative half and $T_1$. If an endpoint evaluation interval contains $0$, subdivide its adjoining grid interval into $8$, then $32$, then $128$, then $512$ equal rational subintervals, retaining every added point and its certificate. At any retained point still having an indeterminate sign, provide a higher-precision Taylor certificate; reject if any sample used in the signed zero-count comparison remains indeterminate. The input includes the completed finite list of refinement points, so the checker performs no unrecorded adaptive step.

For each $q>1$ and each primitive $\chi$ modulo $q$, let $F_\chi(s)=\Lambda(s,\chi)$ be the entire analytic continuation of the completed function. The signed function is $g_\chi(t):=\operatorname{Re}\bigl(u_\chi F_\chi(\tfrac12+it)\bigr)$. The local phase lemma makes the completed value real and identifies its zeros with the critical-line zeros of $L(s,\chi)$. Each proposed interval $[a,b]$ for $\chi$ has rational endpoints in $[-T_q,T_q]$ and endpoint enclosures certifying strictly opposite signs of $g_\chi$; the checker obtains those enclosures by interval-evaluating $F_\chi$ and taking the real-coordinate enclosure. For each such $q,\chi$, the input also supplies Taylor certificates for a Turing zero-count call with $F=F_\chi$ on the positively oriented rational rectangle $0\le\operatorname{Re}s\le1$, $-T_q\le\operatorname{Im}s\le T_q$. Call the declared Turing zero-count algorithm `alg-turing-method-for-rigorous-zero-counts` in its generic contour-count mode on this function and certificate; reject if the call rejects or if its returned zero count differs from the number of proposed intervals for that character. These Taylor certificates enclose the entire continuation of $F_\chi$; they do not evaluate the displayed Gamma-factor product across a pole of that factor. For $q=1$, use instead the entire function $\xi(s)=\tfrac12s(s-1)\pi^{-s/2}\Gamma(s/2)\zeta(s)$ and call the same Turing algorithm in its zeta critical-line mode on a certificate for the positively oriented rational rectangle $0\le\operatorname{Re}s\le1$, $0\le\operatorname{Im}s\le T_1$; reject if the call rejects or its returned zero count differs from the number of sign intervals. Those sign intervals have rational endpoints in $(0,T_1)$ whose enclosures certify strictly opposite signs for $t\mapsto\xi(\tfrac12+it)$: this function is real because the phase lemma gives a real completed zeta value (take the phase $u=1$) and $s(s-1)=-\tfrac14-t^2$ is real on the critical line. For each fixed character in either branch, its proposed zero intervals are pairwise disjoint. This zero-location branch for $q=1$ requires Countable Choice.

The central-value branch is for all integers $1\le q\le2{,}000{,}000$. For every enumerated primitive character $\chi$ modulo $q$, it supplies an interval-arithmetic Taylor certificate for $L(\tfrac12,\chi)$ whose returned rational complex rectangle excludes $0$. For $q=1$, use the choice-free continuation of zeta to $\operatorname{Re}s>0$ away from its pole at $1$, so the value at $\tfrac12$ is holomorphic without Countable Choice.

Run the interval-arithmetic procedure on every supplied Taylor certificate and reject if any certificate is malformed, any holomorphy domain or Taylor bound is not justified, any interval operation is undefined, any boundary enclosure contains $0$, any proposed sign is not strict, any proposed intervals overlap, any Turing count differs from the number of proposed intervals, any character is missing or duplicated, or any central-value rectangle contains $0$. Return separate statuses zero-location accepted/not-accepted and central-value accepted/not-accepted. An accepted status is conditional on the mathematical validity of the supplied Taylor and character-enumeration data; this procedure asserts neither that such data exist nor that the historical Platt computation was executed.

## Definition references

[[def-dirichlet-character-modulo-q]]

[[def-induced-dirichlet-character]]

[[def-primitive-dirichlet-character-and-conductor]]

[[def-parity-dirichlet-character]]

[[def-unit-group-modulo-n-and-euler-totient]]

[[cor-order-of-element-divides-group-order]]

[[thm-complex-nth-roots-and-roots-of-unity]]

[[def-dirichlet-l-function]]

[[def-completed-dirichlet-l-function]]

[[thm-primitive-dirichlet-l-analytic-continuation]]

[[thm-riemann-zeta-continuation-to-the-right-half-plane]]

[[thm-primitive-dirichlet-l-functional-equation]]

[[def-countable-choice]]

[[def-riemann-xi-function]]

[[alg-interval-arithmetic-for-l-function-zero-counts]]

[[alg-turing-method-for-rigorous-zero-counts]]

[[thm-turing-zero-count-certificate-is-sound]]

[[lem-primitive-dirichlet-l-completion-is-real-on-critical-line]]

[David J. Platt, *Numerical Computations Concerning the GRH*, §§1, 2.2–3, 5–7](https://arxiv.org/pdf/1305.3087v1)

[Nickolas Andersen, *Analytic Number Theory*, §§11.2 and 17.3](https://mathdept.byu.edu/~nick/ucla/205a/205a-notes.pdf)
