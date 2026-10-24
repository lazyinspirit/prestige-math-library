---
id: ex-logarithmic-capacity-of-disc-and-equilibrium-circle
kind: example
title: "Capacity of a disc and its circular equilibrium measure"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-logarithmic-potential-and-energy
  - def-logarithmic-capacity-compact-set
  - def-probability-measure
  - lem-logarithmic-energy-strict-positivity-for-zero-mass-charges
  - thm-equilibrium-measure-existence-and-uniqueness
  - def-harmonic-measure-plane-domain
  - thm-harmonic-measure-disc-poisson-density
  - def-mean-value-property-for-plane-functions
  - thm-mean-value-property-for-plane-harmonic-functions
  - thm-jensen-formula-on-a-disc
  - thm-dominated-convergence
  - thm-sine-and-cosine-derivatives
  - lem-log-modulus-is-harmonic-off-its-centre
  - def-plane-harmonic-function
  - def-complex-exponential
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-complex-polynomials-and-rational-functions-are-holomorphic
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "E. B. Saff, Logarithmic Potential Theory with Applications to Approximation Theory, §§1–3"
      url: "https://arxiv.org/pdf/1010.3760"
      locator: "§1, Example 1.10 (the disc) and formula (1.17), printed p. 173"
    - title: "B. Khoruzhenko, LTCC Potential Theory notes, §§3 and 5"
      url: "https://maths.qmul.ac.uk/~boris/potential_th_notes.pdf"
      locator: "§3, equilibrium measure of the disc; §5, capacity of a disc"
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let $a\in\mathbb C$, $r>0$ and let
$K:=\overline{D(a,r)}$ be the closed disc. Let $\mu$ be normalized arclength
on the circle $|z-a|=r$, that is, in the parametrization $w=a+re^{it}$,
$d\mu=dt/(2\pi)$. Then $\mu$ is the unique equilibrium measure of $K$,

$$U^\mu(z)=\log\frac1r\quad(|z-a|\le r),\qquad U^\mu(z)=\log\frac1{|z-a|}\quad(|z-a|\ge r),$$

and $\operatorname{cap}(K)=r$, with Robin constant $V_K=\log(1/r)$. The same
potential, capacity and equilibrium measure hold for the boundary circle
$\partial K=\{z:|z-a|=r\}$.

The Axiom of Choice is inherited from the equilibrium framework and supplies
Countable Choice for the strict positivity of the zero-mass energy; the
calculation of the potential itself is choice-free.

## Facts & Assumptions

**Given:** a point $a\in\mathbb C$, a radius $r>0$, the closed disc
$K=\overline{D(a,r)}$, its boundary circle $\partial K$, the logarithmic
kernel and potential conventions of [[def-logarithmic-potential-and-energy]],
the Robin constant and capacity of [[def-logarithmic-capacity-compact-set]],
and the Axiom of Choice ([[def-axiom-of-choice]]).

[F1] $U^\nu(z)=\int\log\frac1{|z-w|}\,d\nu(w)\in(-\infty,+\infty]$ for finite
positive Borel $\nu$ of compact support; for $R>\operatorname{diam}
\operatorname{supp}\nu$ one has $k_R=k+\log R\ge0$ on the product of the
support with itself, $k_R=k+\log R$ pointwise as extended functions, and
$I(\nu)=\iint k_R\,d\nu\,d\nu-\nu(\mathbb C)^2\log R$, independently of $R$;
the mixed energy $I(\nu,\rho)=\iint k\,d\nu\,d\rho$ is symmetric
([[def-logarithmic-potential-and-energy]]).

[F2] For nonempty compact $F$, $V_F=\inf_{\rho\in P(F)}I(\rho)$ and
$\operatorname{cap}(F)=e^{-V_F}$ when $V_F<+\infty$ and $0$ otherwise
([[def-logarithmic-capacity-compact-set]]); a Borel probability measure on
$F$ is a finite positive measure carried by $F$
([[def-probability-measure]]).

[F3] Assume the Axiom of Choice. A compact nonpolar $F$ has exactly one
equilibrium measure, namely the unique $\rho\in P(F)$ with $I(\rho)=V_F$
([[thm-equilibrium-measure-existence-and-uniqueness]]).

[F4] Assume Countable Choice. If $\nu,\rho$ are finite positive compactly
supported Borel measures with equal total mass and finite energy, then
$I(\nu,\rho)$ is finite, $I(\nu-\rho)=I(\nu)-2I(\nu,\rho)+I(\rho)$ is a real
number, $I(\nu-\rho)\ge0$, and $I(\nu-\rho)=0$ if and only if $\nu=\rho$
([[lem-logarithmic-energy-strict-positivity-for-zero-mass-charges]]). The
Axiom of Choice implies Countable Choice
([[thm-choice-implies-dependent-implies-countable-choice]],
[[def-countable-choice]]).

[F5] Assume Dependent Choice, supplied by the Axiom of Choice of the statement
([[thm-choice-implies-dependent-implies-countable-choice]]). For
$c\in\mathbb C$, $R>0$ the harmonic measure
$\omega_{D(c,R)}^{c}$ of the disc at its centre has, on Borel
$E\subseteq\partial D(c,R)$, the form
$\omega_{D(c,R)}^{c}(E)=\frac1{2\pi}\int_{\{t\in[0,2\pi):\,c+Re^{it}\in E\}}dt$,
so it is the normalized arclength measure on the circle, a Borel probability
measure on $\partial D(c,R)$, and for every Borel $f\ge0$,
$\int f\,d\omega_{D(c,R)}^{c}=\frac1{2\pi}\int_0^{2\pi}f(c+Re^{it})\,dt$
([[thm-harmonic-measure-disc-poisson-density]],
[[def-harmonic-measure-plane-domain]]).

[F6] Every plane harmonic function satisfies the circle mean-value property
([[thm-mean-value-property-for-plane-harmonic-functions]],
[[def-mean-value-property-for-plane-functions]]); the function
$z\mapsto\log|z-c|$ is $C^\infty$ and harmonic on $\mathbb C\setminus\{c\}$
([[lem-log-modulus-is-harmonic-off-its-centre]],
[[def-plane-harmonic-function]]).

[F7] Jensen's formula: if $f$ is holomorphic on a neighbourhood of the closed
unit disc, $f(0)\ne0$, and $a_1,\dots,a_N$ are the zeros of $f$ in $|z|<1$
counted with multiplicity, while $f$ has no zero on $|z|=1$, then
$\log|f(0)|=\frac1{2\pi}\int_0^{2\pi}\log|f(e^{it})|dt-\sum_k\log\frac1{|a_k|}$.
Only this boundary-zero-free case is used below
([[thm-jensen-formula-on-a-disc]]).

[F8] The complex exponential satisfies $|e^{it}|=1$ for real $t$, so
$|a+re^{it}-a|=r$ and $t\mapsto a+re^{it}$ parametrizes $\partial K$
([[def-complex-exponential]],
[[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]); for
each $c\in\mathbb C$ the polynomial $\zeta\mapsto r\zeta-c$ is entire
([[thm-complex-polynomials-and-rational-functions-are-holomorphic]]).



## Verification

**Proof technique:** direct.

1.1 Put $\mu:=\omega_{D(a,r)}^{a}$, the harmonic measure of the disc $K^\circ=D(a,r)$ at its centre. By [F5] the measure $\mu$ is a Borel probability measure carried by $\partial K\subseteq K$, and for every Borel $f\ge0$ one has $\int f\,d\mu=\frac1{2\pi}\int_0^{2\pi}f(a+re^{it})\,dt$; in particular $\mu$ has no atoms, since for a single point $w$ the set $\{t\in[0,2\pi):a+re^{it}=w\}$ has at most two elements and Lebesgue measure zero, so $\mu(\{w\})=0$. [F5, F2, given]

1.2 **The circle average of the kernel.** For $c\in\mathbb C$ put $M(c):=\frac1{2\pi}\int_0^{2\pi}\log|c-re^{it}|\,dt\in[-\infty,\infty)$. If $|c|>r$, then $z\mapsto\log|z-c|$ is harmonic on an open set containing the closed disc $\overline{D(0,r)}$, so the circle mean-value property of [F6] gives $M(c)=\log|0-c|=\log|c|$. [F6, algebra]

1.3 If $0<|c|<r$, apply Jensen's formula [F7] on the unit disc to the entire function $f(\zeta):=r\zeta-c$, which satisfies $f(0)=-c\ne0$ and has the single zero $\zeta_0=c/r$ of modulus $<1$: $\frac1{2\pi}\int_0^{2\pi}\log|re^{it}-c|\,dt=\log|f(0)|+\log\frac1{|\zeta_0|}=\log|c|+\log\frac r{|c|}=\log r$, that is, $M(c)=\log r$. [F7, F8, algebra]

2.1 If $c=0$, the integrand defining $M(c)$ is constantly $\log r$, so $M(0)=\log r$. If $|c|=r$, rotate the angle to write $c=r$ without changing the average. For $1/2\le s<1$, step 1.3 gives $M(sr)=\log r$, and $|e^{it}-s|^2=(1-s)^2+4s\sin^2(t/2)\ge2\sin^2(t/2)$. The positive part of $\log|r(e^{it}-s)|$ is bounded by $\log^+(2r)$; its negative part is bounded by $|\log(r\sqrt2)|+\log^-|\sin(t/2)|$. This last function is integrable on $[0,2\pi]$: $(\sin)'(0)=1$ ([[thm-sine-and-cosine-derivatives]]) gives $\sin v\ge v/2$ for small positive $v$, the same bound applies near $t=2\pi$, and away from the endpoints the sine has a positive minimum. Thus its only singularities are bounded by constants plus $-\log t$ or $-\log(2\pi-t)$, both integrable. Dominated convergence ([[thm-dominated-convergence]]) along $s\uparrow1$ yields $M(r)=\log r$, and rotation gives $M(c)=\log r$ for every $|c|=r$. [step 1.3, F8, algebra]

3.1 Consequently, for $z\in\mathbb C$ and $c:=z-a$, the substitution $w=a+re^{it}$ and [F5] give $U^\mu(z)=\int\log\frac1{|z-w|}\,d\mu(w)=\frac1{2\pi}\int_0^{2\pi}\log\frac1{|z-a-re^{it}|}\,dt=-M(z-a)$; by steps 1.2, 1.3 and 2.1 this is $\log\frac1r$ when $|z-a|\le r$ and $\log\frac1{|z-a|}$ when $|z-a|\ge r$. [step 1.2, step 1.3, step 2.1, F1, F5, algebra]

4.1 **The energy of $\mu$.** Choose $R>2r=\operatorname{diam}(\partial K)$; by [F1], $k_R=k+\log R\ge0$ on $\partial K\times\partial K$ and $k_R=k+\log R$ pointwise, so the iterated integral of $k_R$ against $\mu\otimes\mu$ equals $\int U^\mu\,d\mu+\log R$; since $\operatorname{supp}\mu=\partial K$ and $U^\mu=\log\frac1r$ there by step 3.1 with $|z-a|=r$, [F1] gives $I(\mu)=\int U^\mu\,d\mu=\log\frac1r$, a finite real number. [step 1.1, step 3.1, F1, algebra]

5.1 Let $\sigma\in P(K)$ be a Borel probability measure on $K$ with $I(\sigma)<+\infty$; then $\sigma$ is a finite positive compactly supported measure of total mass $1$, and since $\operatorname{supp}\sigma\subseteq K$ step 3.1 gives $U^\mu=\log\frac1r$ on $\operatorname{supp}\sigma$, so by [F1] the mixed energy is $I(\mu,\sigma)=\int U^\mu\,d\sigma=\log\frac1r=I(\mu)$. [step 3.1, step 4.1, F1, F2]

6.1 By [F4], whose Countable Choice hypothesis is supplied by the Axiom of Choice of the statement, the pair $\mu,\sigma$ of step 5.1 satisfies $I(\sigma-\mu)=I(\sigma)-2I(\mu,\sigma)+I(\mu)=I(\sigma)-\log\frac1r\ge0$, with equality if and only if $\sigma=\mu$; hence every $\sigma\in P(K)$ with finite energy has $I(\sigma)\ge\log\frac1r=I(\mu)$, with equality only for $\sigma=\mu$, while $\sigma\in P(K)$ with $I(\sigma)=+\infty$ also satisfies $I(\sigma)\ge I(\mu)$ since $I(\mu)$ is finite. Therefore $V_K=\inf_{\sigma\in P(K)}I(\sigma)=I(\mu)=\log\frac1r$, and $\mu$ is the unique minimizer. [step 5.1, F2, F4, given]

7.1 By step 6.1 the unique minimizer of the energy over $P(K)$ is $\mu$, so [F3] identifies $\mu$ as the equilibrium measure of $K$ and shows it is the only one; the capacity is $\operatorname{cap}(K)=e^{-V_K}=e^{-\log(1/r)}=r$. [step 6.1, F2, F3]

8.1 **The boundary circle.** The circle $\partial K$ is compact and nonempty and $P(\partial K)\subseteq P(K)$, so its Robin constant satisfies $V_{\partial K}\ge V_K$; conversely every $\sigma\in P(\partial K)$ is a probability carried by $K$ with $\operatorname{supp}\sigma\subseteq\partial K\subseteq K$, so step 3.1 gives $U^\mu=\log\frac1r$ on $\operatorname{supp}\sigma$ and the argument of steps 5.1 and 6.1 applies verbatim to yield $I(\sigma)\ge I(\mu)$ with equality only for $\sigma=\mu$; hence $V_{\partial K}=V_K=\log\frac1r$ and $\operatorname{cap}(\partial K)=r$, with unique equilibrium measure $\mu$, which is carried by $\partial K$. [step 5.1, step 6.1, step 7.1, F1, F2, F3, F5]

9.1 Combining steps 3.1, 7.1 and 8.1 gives the displayed potential, the capacity $r$ of both $K$ and $\partial K$, the Robin constant $V_K=\log(1/r)$, and the identification of normalized arclength as the unique equilibrium measure of each of the two compact sets. Two choice principles are spent in the calculation, both supplied by the Axiom of Choice of the statement: Countable Choice in step 6.1 through [F4], and Dependent Choice in steps 1.1, 3.1 and 8.1 through [F5]. [step 3.1, step 7.1, step 8.1, F4, F5, given] ∎

## Remarks

**Where the disc enters.** Steps 1.3 and 2.1 are the only places where the
specific geometry is used: Jensen's formula computes the circle average of
$\log|c-re^{it}|$ exactly when the singular point stays inside or on the
circle, and the mean-value property computes it when the singular point is
outside. The two formulas agree on $|c|=r$, which is why the potential is
continuous across the boundary of $K$.

**Uniqueness is strict convexity.** Step 6.1 does not merely bound $I(\sigma)$
below by $I(\mu)$: the strict positivity of the zero-mass charge $\sigma-\mu$
gives equality only for $\sigma=\mu$, which is what makes the equilibrium
measure unique rather than merely minimal.

**Choice.** The statement assumes the Axiom of Choice; it is used only to
supply Countable Choice for
[[lem-logarithmic-energy-strict-positivity-for-zero-mass-charges]] and to
supply, through
[[thm-choice-implies-dependent-implies-countable-choice]], the Dependent
Choice hypothesis of the harmonic-measure interface [F5] used in the proof at
steps 1.1, 3.1 and 8.1. The circle computation, the atom argument and the
energy comparison are otherwise choice-free.
