---
id: cor-classical-dirichlet-and-poisson-problems-are-unique
kind: corollary
title: Uniqueness of classical Dirichlet and compatible Neumann solutions
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (2014)"
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: "§2.5 Theorem 2.24, printed p.32"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript)"
      url: https://web.archive.org/web/20250601000000id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf
      locator: "§5.4 Theorem 5.21 and equation (5.43), printed pp.124,128"
proof_strategy: direct
deps:
  - cor-first-green-identity-on-a-bounded-c-one-domain
  - cor-uniqueness-for-the-classical-dirichlet-problem
  - cor-zero-dirichlet-green-representation-for-poisson-data
  - def-bounded-c-one-domain-boundary-charts-and-outward-normal
  - def-classical-normal-derivative
  - def-countable-choice
  - def-dirichlet-green-function-for-minus-laplacian
  - def-laplacian-of-a-c2-function
  - def-surface-integral-on-a-compact-c-one-hypersurface
  - lem-euclidean-balls-have-positive-finite-lebesgue-measure
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - thm-algebra-of-total-derivatives
  - thm-divergence-theorem-for-bounded-c-one-euclidean-domains
  - thm-green-representation-formula
  - thm-nonnegative-integral-zero-iff-zero-almost-everywhere
  - thm-zero-derivative-on-connected-open-euclidean-set-iff-constant
---

## Statement

Assume Countable Choice, let $n\ge2$, and let $\Omega\subset\mathbb R^n$ be a
bounded connected $C^1$ domain. Let $u_1,u_2\in C^2(\overline\Omega)$ be real.

1. If $-\Delta u_1=-\Delta u_2$ in $\Omega$ and $u_1=u_2$ on $\partial\Omega$,
then $u_1=u_2$ on $\overline\Omega$. Thus a fixed source and a fixed Dirichlet
trace determine at most one solution in $C^2(\overline\Omega)$; when a
Dirichlet Green function with the regularity of [[thm-green-representation-formula]]
exists, that representation gives the same conclusion.
2. If $-\Delta u_1=-\Delta u_2$ in $\Omega$ and
$\partial_\nu u_1=\partial_\nu u_2$ on $\partial\Omega$ for the outward normal
$\nu$, then $u_1-u_2$ is constant on $\overline\Omega$; conversely, adding any
real constant to a solution preserves both data. Thus a fixed source and a
fixed outward Neumann trace determine the solutions up to an additive
constant.
3. If $u\in C^2(\overline\Omega)$ solves $-\Delta u=f$ in $\Omega$ and
$\partial_\nu u=g$ on $\partial\Omega$, then necessarily
$$\int_\Omega f=-\int_{\partial\Omega}g\,dS.$$

Existence is not asserted: clause 3 is a necessary compatibility equation for
the Neumann problem, and no uniqueness statement here produces a solution.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, $n\ge2$, the bounded connected $C^1$ domain
$\Omega$, and real $C^2(\overline\Omega)$ functions on which the Laplacian and
outward normal derivative are taken.

[A1] Countable Choice, written $\mathrm{AC}_\omega$, says every sequence of
nonempty sets has a choice function ([[def-countable-choice]]). It is inherited
from the Green, surface, Green-identity and divergence conventions used below.

[F1] For $u,v\in C^2(\Omega)\cap C(\overline\Omega)$ with $\Delta u=\Delta v$
in $\Omega$ and $u=v$ on $\partial\Omega$, the two functions agree on
$\overline\Omega$; the theorem needs only bounded nonempty open $\Omega$
([[cor-uniqueness-for-the-classical-dirichlet-problem]]).

[F2] For real $u\in C^2(\overline\Omega)$ and $v\in C^1(\overline\Omega)$,
$\int_\Omega(v\Delta u+Du\cdot Dv)\,dx=\int_{\partial\Omega}v\partial_\nu u\,dS$,
with all integrals finite ([[cor-first-green-identity-on-a-bounded-c-one-domain]]).

[F3] For a bounded $C^1$ domain and $F\in C^1(\overline\Omega;\mathbb R^n)$,
$\int_\Omega\operatorname{div}F\,dx=\int_{\partial\Omega}F\cdot\nu\,dS$, both
integrals finite ([[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]]);
the classical normal derivative is $\partial_\nu u=Du\cdot\nu$ with the
continuous interior trace of $Du$ ([[def-classical-normal-derivative]]), and
surface integrals are chart integrals on the compact hypersurface
$\partial\Omega$ ([[def-surface-integral-on-a-compact-c-one-hypersurface]]).

[F4] The Laplacian is $\Delta u=\operatorname{div}\nabla u=\sum_i\partial_i\partial_iu$,
and $\Delta u=0$ defines harmonicity
([[def-laplacian-of-a-c2-function]]); total derivatives are linear, so the
Laplacian and the gradient are linear on $C^2$ functions
([[thm-algebra-of-total-derivatives]]).

[F5] Let $U\subseteq\mathbb R^m$ be nonempty, open and connected and let
$f:U\to\mathbb R^q$ be totally differentiable at every point. Then $Df=0$ on
$U$ if and only if $f$ is constant on $U$
([[thm-zero-derivative-on-connected-open-euclidean-set-iff-constant]]).

[F6] A measurable $f\ge0$ has $\int f=0$ exactly when $f=0$ almost everywhere
([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]); every ball of
positive radius has positive finite Lebesgue measure
([[lem-euclidean-balls-have-positive-finite-lebesgue-measure]]), and the
nonnegative integral is monotone
([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[F7] A bounded $C^1$ domain carries its $C^k(\overline\Omega)$ convention: a
$C^2(\overline\Omega)$ function is in particular $C^1(\overline\Omega)$, and
$C^2(\overline\Omega)$ functions restrict to $C^2(\Omega)$ functions that are
continuous on $\overline\Omega$
([[def-bounded-c-one-domain-boundary-charts-and-outward-normal]]).

[F8] Under the hypotheses of [[thm-green-representation-formula]] and with
$w\in C^2(\overline\Omega)$ real, harmonic and vanishing on $\partial\Omega$,
the representation reduces to $w(x)=\int_\Omega G_\Omega(x,y)\cdot0\,dy=0$ for
every $x\in\Omega$, where $G_\Omega$ is the Dirichlet Green function with
correctors $H_y\in C^2(\overline\Omega)$
([[cor-zero-dirichlet-green-representation-for-poisson-data]],
[[def-dirichlet-green-function-for-minus-laplacian]]).

## Proof

**Proof technique:** direct.

1.1 Put $w:=u_1-u_2$. By [F4, F7], $w$ is a real $C^2(\overline\Omega)$ function and $\Delta w=\Delta u_1-\Delta u_2=0$, so $w$ is harmonic; also $w\in C^2(\Omega)\cap C(\overline\Omega)$. If $u_1=u_2$ on $\partial\Omega$ then $w=0$ on $\partial\Omega$, and if $\partial_\nu u_1=\partial_\nu u_2$ on $\partial\Omega$ then, since $\partial_\nu w=Du_1\cdot\nu-Du_2\cdot\nu$ by [F3, F4], also $\partial_\nu w=0$ there. For every real constant $c$, [F4] gives $\Delta(u_1+c)=\Delta u_1$ and $\partial_\nu(u_1+c)=\partial_\nu u_1$, so a constant shift changes neither datum. [given, A1, F3, F4, F7, algebra]

1.2 Suppose $u\in C^2(\overline\Omega)$ is real, $-\Delta u=f$ and $\partial_\nu u=g$ on $\partial\Omega$. By [F7] the field $\nabla u$ lies in $C^1(\overline\Omega;\mathbb R^n)$, so the divergence theorem [F3] applies to it: $\int_\Omega\Delta u\,dx=\int_\Omega\operatorname{div}\nabla u\,dx=\int_{\partial\Omega}\nabla u\cdot\nu\,dS=\int_{\partial\Omega}g\,dS$, the last step by [F3] and the definition of $g$. Since $\Delta u=-f$ pointwise, this is $-\int_\Omega f=\int_{\partial\Omega}g$, that is, $\int_\Omega f=-\int_{\partial\Omega}g\,dS$, the compatibility equation of clause 3. [given, A1, F3, F4, algebra]

2.1 Dirichlet uniqueness. Assume $u_1=u_2$ on $\partial\Omega$, so that $\Delta u_1=\Delta u_2=\Delta$ and $w$ has zero boundary trace by step 1.1. First route: the published uniqueness theorem [F1] applies to $u_1,u_2$, which lie in $C^2(\Omega)\cap C(\overline\Omega)$ by [F7] and have equal Laplacians and equal boundary values; hence $u_1=u_2$ on $\overline\Omega$. Second route: if in addition a Dirichlet Green function with the regularity of [F8] exists, then all hypotheses of the zero-Dirichlet representation are met by $w$, which is real, $C^2(\overline\Omega)$, harmonic and has zero trace; the representation gives $w(x)=\int_\Omega G_\Omega(x,y)\cdot0\,dy=0$ for every $x\in\Omega$, hence $u_1=u_2$ on $\Omega$ and, by continuity [F7], on $\overline\Omega$. Either route gives clause 1. [given, F1, F7, F8, step 1.1]

2.2 Neumann data determine exactly the affine family. Assume $\partial_\nu u_1=\partial_\nu u_2$ on $\partial\Omega$. By step 1.1 the difference $w$ is real, harmonic and satisfies $\partial_\nu w=0$ on $\partial\Omega$, and $w\in C^2(\overline\Omega)\subset C^1(\overline\Omega)$ by [F7]; so the first Green identity [F2] applies with both slots equal to $w$: $\int_\Omega\bigl(w\Delta w+|Dw|^2\bigr)dx=\int_{\partial\Omega}w\partial_\nu w\,dS$. The right side is $0$ because $\partial_\nu w=0$, and $\Delta w=0$, so $\int_\Omega|Dw|^2\,dx=0$. The integrand $|Dw|^2$ is nonnegative with finite integral, so it vanishes almost everywhere by [F6]; if $|Dw(y_0)|>0$ at some $y_0\in\Omega$, continuity of $Dw$ would give a ball $B(y_0,r)\subset\Omega$ and a constant $c>0$ with $|Dw|^2\ge c$ on that ball, whence $\int_\Omega|Dw|^2\ge c\,\lambda(B(y_0,r))>0$ by monotonicity and the positive ball measure of [F6], a contradiction. Hence $Dw=0$ on the nonempty open connected set $\Omega$, and [F5] makes $w$ constant on $\Omega$; by continuity [F7] that constant is the value on $\overline\Omega$. Conversely, step 1.1 shows that $u_1+c$ has the same source and the same outward Neumann trace for every real $c$, so the solution set is exactly the affine family $u_1+\mathbb R$ whenever one solution exists. [given, F2, F5, F6, F7, step 1.1]

3.1 The three clauses are independent statements: clause 1 uses only the Dirichlet data, clause 2 only the Neumann data, and clause 3 is the necessary equation of step 1.2. No existence is asserted, and no sufficiency of the compatibility equation is claimed; in particular the second clause says that the solution set is either empty or a full affine line in $C^2(\overline\Omega)$. The empty-support and zero-data cases are included: if $f=0$ and the traced data are zero, then $u\equiv0$ is a solution and clauses 1–2 apply with no exception, while clause 3 reads $0=0$. Countable Choice is inherited from the Green, surface, Green-identity and divergence conventions of [F1], [F2], [F3] and [F8]; the pointwise differentiation, energy and limiting arguments add no further choice. For complex-valued $u_1,u_2$ the argument applies to $\mathrm{Re}\,u$ and $\mathrm{Im}\,u$ separately, since the Laplacian and the normal derivative are real-linear and the Green identity used is stated for real functions; the statement is formulated for real data. Dimension $n=1$ is excluded by [F1] and [F3]. [given, A1, F1, F2, F3, F8, step 1.2, step 2.1, step 2.2, cases] ∎

## Source notes

Hunter §2.5 Theorem 2.24, printed p.32, proves the classical Dirichlet
uniqueness by the maximum principle, and the surrounding Green-identity
material supplies the energy argument for Neumann data. Teschl §5.4 Theorem 5.21, printed
p.124, proves Dirichlet uniqueness, and equation (5.43), printed
p.128, records the Neumann compatibility identity
$\int_\Omega f=-\int_{\partial\Omega}g\,dS$ for the sign convention
$-\Delta u=f$ used here. Neither source is used as a proof of the statements
below: clause 1 is proved both by the published uniqueness theorem and, when a
Green function exists, by the representation of this pair; clause 2 is the
energy argument of the first Green identity together with connectedness; and
clause 3 is the divergence theorem applied to $\nabla u$. The corollary
deliberately asserts no Neumann existence, so compatibility is presented as
necessary only.
