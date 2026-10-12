---
id: thm-nrqm-coulomb-laguerre-bound-energy-exhaustion
aliases: [nrqm-coulomb-laguerre-bound-energy-exhaustion]
kind: theorem
domain: mathematics
title: "Laguerre bound energy exhaustion"
status: draft
origin: pipeline
dependency_level: 8
deps: [thm-nrqm-coulomb-kummer-recurrence-and-termination, thm-nrqm-coulomb-transported-radial-endpoint-realization, thm-nrqm-coulomb-essential-spectrum, thm-nrqm-coulomb-infinitesimal-kinetic-bound, thm-nrqm-intervals-regular-ivp-parameter-series, def-continuity-real, def-l-p-space-as-a-quotient-by-null-functions, cor-cauchy-schwarz-inequality-for-l-two, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  thm-nrqm-coulomb-kummer-recurrence-and-termination: mathematical-premise
  thm-nrqm-coulomb-transported-radial-endpoint-realization: mathematical-premise
  thm-nrqm-coulomb-essential-spectrum: mathematical-premise
  thm-nrqm-coulomb-infinitesimal-kinetic-bound: mathematical-premise
  thm-nrqm-intervals-regular-ivp-parameter-series: mathematical-premise
  def-continuity-real: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 10.4 pp. 229-235 (Theorem 10.9: eigenvalues E_n = -(gamma/(2(n+1)))^2 with the Laguerre eigenfunctions; the non-terminating case is proved not square-integrable on p. 233)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "NIST Digital Library of Mathematical Functions, §18.3 'Definitions' (Laguerre polynomials L_n^{(alpha)} and their orthogonality relations)"
      url: "https://dlmf.nist.gov/18.3"
---

## Statement

Assume the Axiom of Countable Choice and the Axiom of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]). Let $\gamma>0$, and for
every $l\ge0$ let $A_l$ be the radial operator of
[[thm-nrqm-coulomb-transported-radial-endpoint-realization]]; let
$C=-\Delta-\gamma/|\cdot|$ on $D(C)=H^2(\mathbb R^3;\mathbb C)$ be the
self-adjoint operator of [[thm-nrqm-coulomb-infinitesimal-kinetic-bound]] (c),
with essential spectrum $[0,\infty)$
([[thm-nrqm-coulomb-essential-spectrum]]), and let $U$ be the polar unitary of
[[thm-nrqm-coulomb-transported-radial-endpoint-realization]] (d). Then:

(a) if $k>0$ and $j:=\gamma/(2k)-l-1\notin\mathbb N_0$, then the regular solution $u_{\mathrm{reg}}$ of [[thm-nrqm-coulomb-kummer-recurrence-and-termination]] is not square-integrable on $(0,\infty)$, and $-k^2$ is not an eigenvalue of $A_l$;

(b) the negative eigenvalues of $A_l$ are exactly the numbers
$$-\frac{\gamma^2}{4n^2},\qquad n\ge l+1,$$
each with one-dimensional eigenspace spanned by the corresponding regular solution $u_{\mathrm{reg}}$; in particular every negative eigenvalue of $A_l$ is simple;

(c) the negative eigenvalues of $C$ are exactly the numbers $-\gamma^2/(4n^2)$ with $n\ge1$;

(d) every eigenfunction of $C$ with negative eigenvalue lies in the closed span of the transported regular solutions: if $C\psi=E\psi$ with $E<0$ and $U\psi=(u_{lm})$, then $E=-\gamma^2/(4n^2)$ for some $n\ge1$, and each nonzero $u_{lm}$ is a scalar multiple of the regular solution of $A_l$ at that energy.

This exhausts the negative spectrum of $A_l$ and of $C$ by the terminating
Laguerre solutions; no claim is made here about completeness of these
eigenfunctions in the negative spectral subspace, about the multiplicity of
the levels of $C$, or about any physical interpretation.

## Facts & Assumptions

**Given:** $\gamma>0$, $l\ge0$, $k>0$, $j=\gamma/(2k)-l-1$; the operators $A_l$, $C$ and the unitary $U$.

[F1] The substitution, regular solution, general solution and termination results of [[thm-nrqm-coulomb-kummer-recurrence-and-termination]]: every solution of the radial equation is $c_1u_{\mathrm{reg}}+c_2u_2$ with $u_2$ constructed by reduction of order on a zero-free interval near zero and extended globally by regular initial-value uniqueness, every solution not proportional to $u_{\mathrm{reg}}$ has $|u(r)|/r\to\infty$ as $r\downarrow0$, $v$ is a polynomial exactly when $j\in\mathbb N_0$, and then $u_{\mathrm{reg}}=cr^{l+1}e^{-kr}L_j^{(2l+1)}(2kr)$ and $A_lu_{\mathrm{reg}}=-k^2u_{\mathrm{reg}}$.

[F2] For $u\in D(A_l)$ with $A_lu=Eu$ and $E$ constant, $u$ is a $C^2$ solution of the radial equation on $(0,\infty)$, the function $r\mapsto u(r)/r$ is bounded on $(0,1]$ and the transported $\psi$ lies in $H^2(\mathbb R^3)$; the block identity $UCU^*=\bigoplus_{(l,m)}A_l$ holds ([[thm-nrqm-coulomb-transported-radial-endpoint-realization]] (c), (d), (e)).

[F3] $C$ is self-adjoint with $\sigma_{\mathrm{ess}}(C)=[0,\infty)$, so every negative spectral point of $C$ is an eigenvalue of finite multiplicity ([[thm-nrqm-coulomb-essential-spectrum]], [[thm-nrqm-coulomb-infinitesimal-kinetic-bound]]).

[F4] If $c_2\ne0$ then $|c_1u_{\mathrm{reg}}/r+c_2u_2/r|\to\infty$ as $r\downarrow0$, because $u_{\mathrm{reg}}/r$ is bounded and $|u_2/r|\to\infty$; and $u_{\mathrm{reg}},u_2$ are linearly independent solutions on $(0,\infty)$ ([[thm-nrqm-coulomb-kummer-recurrence-and-termination]], [[thm-nrqm-intervals-regular-ivp-parameter-series]]).

[F5] For a nonnegative function $w$ that dominates $c\,r^{l+1}e^{ar}$ for all large $r$ with $a>0$ one has $\int_1^\infty w^2dr=+\infty$; here $w=|u_{\mathrm{reg}}|$ is continuous ([[def-continuity-real]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

## Proof

1.1 [Non-terminating regular solutions fail $L^2$] Suppose $j\notin\mathbb N_0$. Then all coefficients $v_i$ are nonzero and for $i>j$ the recurrence has $(i-j)>0$ and $i+2l+2>0$, so $\operatorname{sign}(v_{i+1})=\operatorname{sign}(v_i)$ and $|v_{i+1}|/|v_i|=(i-j)/((i+1)(i+2l+2))$. Fix $\varepsilon\in(0,1/2)$; since $(i-j)/(i+2l+2)\to1$, there is $i_0>j$ with $(i-j)/(i+2l+2)\ge1-\varepsilon$ for all $i\ge i_0$, and then $|v_{i+1}|\ge(1-\varepsilon)|v_i|/(i+1)$ for $i\ge i_0$, whence by induction $|v_i|\ge c(1-\varepsilon)^i/i!$ for $i\ge i_0$ with $c:=|v_{i_0}|i_0!(1-\varepsilon)^{-i_0}>0$. Summing the positive terms for $x\ge0$ gives $|v(x)|\ge c\sum_{i\ge i_0}((1-\varepsilon)x)^i/i!-P(x)=c\,e^{(1-\varepsilon)x}-P(x)$ with a finite polynomial $P$ accounting for the initial terms $i<i_0$. Hence for large $r$, $|u_{\mathrm{reg}}(r)|=r^{l+1}e^{-kr}|v(2kr)|\ge c\,r^{l+1}e^{-kr}e^{2k(1-\varepsilon)r}-r^{l+1}e^{-kr}P(2kr)\ge\tfrac c2r^{l+1}e^{k(1-2\varepsilon)r}$, because $1-2\varepsilon>0$ makes the exponential term dominate every polynomial; by [F5], $u_{\mathrm{reg}}\notin L^2(0,\infty)$. [F1, F5, given, algebra]

1.2 [Every negative eigenfunction is a multiple of $u_{\mathrm{reg}}$] Let $u\in D(A_l)$ with $A_lu=-k^2u$. By [F1] $u$ solves the radial equation, so $u=c_1u_{\mathrm{reg}}+c_2u_2$; by [F2] $u(r)/r$ is bounded as $r\downarrow0$, and by [F4] this forces $c_2=0$. Hence the eigenspace of $A_l$ at $-k^2$ is contained in $\mathbb Cu_{\mathrm{reg}}$, so its dimension is at most one; the terminating case below supplies actual $D(A_l)$ membership, rather than inferring domain membership merely from square integrability. [F1, F2, F4, given, algebra]

2.1 [Case $j\notin\mathbb N_0$ gives no eigenvalue] If $j\notin\mathbb N_0$ then $u_{\mathrm{reg}}\notin L^2$ by step 1.1, so the eigenspace at $-k^2$ is $\{0\}$ by step 1.2: $-k^2$ is not an eigenvalue of $A_l$. This is (a). [step 1.1, step 1.2]

3.1 [Case $j\in\mathbb N_0$ gives exactly one level] If $j=n-l-1\in\mathbb N_0$ with $n:=j+l+1\ge l+1$, then $k=\gamma/(2n)$ and [F1] gives $A_lu_{\mathrm{reg}}=-(\gamma^2/(4n^2))u_{\mathrm{reg}}$, so $-(\gamma^2/(4n^2))$ is an eigenvalue with eigenspace exactly $\mathbb Cu_{\mathrm{reg}}$ by step 1.2. Combining steps 2.1 and 3.1, the negative eigenvalues of $A_l$ are exactly $\{-\gamma^2/(4n^2):n\ge l+1\}$, each simple. This is (b). [step 2.1, step 1.2, F1, algebra]

4.1 [Exhaustion for $C$] Since $C$ is self-adjoint with essential spectrum $[0,\infty)$, every negative eigenvalue of $C$ arises from the block decomposition: $E<0$ is an eigenvalue of $C$ with eigenvector $\psi$ if and only if $U\psi=(u_{lm})$ has at least one nonzero entry and $A_lu_{lm}=Eu_{lm}$ for every entry (with the other entries zero), by the block identity of [F2]. By step 3.1 the negative eigenvalues of each $A_l$ are $\{-\gamma^2/(4n^2):n\ge l+1\}$, so the negative eigenvalues of $C$ are $\bigcup_{l\ge0}\{-\gamma^2/(4n^2):n\ge l+1\}=\{-\gamma^2/(4n^2):n\ge1\}$, because for fixed $n$ the admissible $l$ are $0\le l\le n-1$. This is (c), and the description of the eigenfunctions in (d) also follows, since every nonzero entry must be a multiple of the corresponding regular solution by step 1.2. [step 3.1, step 1.2, F2, F3, algebra]

5.1 [Conclusion] Clauses (a), (b), (c), (d) are steps 2.1, 3.1, 4.1 and 4.1. [step 2.1, step 3.1, step 4.1] ∎
