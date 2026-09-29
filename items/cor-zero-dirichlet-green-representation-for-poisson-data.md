---
id: cor-zero-dirichlet-green-representation-for-poisson-data
kind: corollary
title: Zero-Dirichlet Green representation for Poisson data
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
      locator: "§§2.5–2.7, printed pp.32–42"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript)"
      url: https://web.archive.org/web/20250601000000id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf
      locator: "Chapter 5 §§5.3–5.4, printed pp.117–129"
proof_strategy: direct
deps:
  - def-countable-choice
  - def-dirichlet-green-function-for-minus-laplacian
  - def-laplacian-of-a-c2-function
  - def-surface-integral-on-a-compact-c-one-hypersurface
  - thm-green-representation-formula
---

## Statement

Assume Countable Choice and the hypotheses and sign convention of
[[thm-green-representation-formula]]: $n\ge2$, a bounded $C^1$ domain $\Omega$
carrying a Dirichlet Green function for $-\Delta$ whose correctors satisfy
$H_y\in C^2(\overline\Omega)$, and $P_\Omega=-\partial_{\nu_y}G_\Omega$. If
$u\in C^2(\overline\Omega)$ is real with $u=0$ on $\partial\Omega$ and
$$f:=-\Delta u,$$
then
$$u(x)=\int_\Omega G_\Omega(x,y)f(y)\,dy\qquad(x\in\Omega),$$
the integral being absolutely finite. No regularity beyond $u\in C^2(\overline\Omega)$ is assumed, and no existence of Green functions is claimed.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, $n\ge2$, the bounded $C^1$ domain $\Omega$, its
Dirichlet Green function $G_\Omega$ with correctors $H_y\in C^2(\overline\Omega)$,
and the real function $u\in C^2(\overline\Omega)$ with $u|_{\partial\Omega}=0$
and $f=-\Delta u$.

[A1] Countable Choice, written $\mathrm{AC}_\omega$, says every sequence of
nonempty sets has a choice function ([[def-countable-choice]]).

[F1] Under the stated hypotheses the Green representation formula holds for
every $x\in\Omega$,
$$u(x)=\int_\Omega G_\Omega(x,y)\bigl(-\Delta u(y)\bigr)dy+\int_{\partial\Omega}P_\Omega(x,y)u(y)\,dS(y),$$
and both integrals are absolutely finite
([[thm-green-representation-formula]]).

[F2] The Green function is $G_\Omega(x,y)=\Phi(x-y)-H_y(x)$ for $x\ne y$, with
the kernel normalized by $-\Delta\Phi=\delta_0$, and the Poisson kernel is
$P_\Omega=-\partial_{\nu_y}G_\Omega$
([[def-dirichlet-green-function-for-minus-laplacian]]).

[F3] Surface integration on a compact embedded $C^1$ hypersurface is chart
integration; signed integrands with finite absolute integral are integrated
through their positive and negative parts, so an integrand that vanishes
identically integrates to zero
([[def-surface-integral-on-a-compact-c-one-hypersurface]]).

[F4] The Laplacian is $\Delta u=\sum_i\partial_i\partial_iu$, and $f=-\Delta u$
means $\Delta u=-f$ pointwise ([[def-laplacian-of-a-c2-function]]).

## Proof

**Proof technique:** direct.

1.1 Fix $x\in\Omega$. The datum $u$ is real and $C^2$ up to the boundary, the correctors satisfy the regularity hypothesis, and $f=-\Delta u$; so the representation formula [F1] applies at $x$, and its second integral is the surface integral over the compact hypersurface $\partial\Omega$ of the product $y\mapsto P_\Omega(x,y)u(y)$. The hypothesis $u|_{\partial\Omega}=0$ means that the continuous trace of $u$ vanishes at every boundary point. [given, A1, F1, F2, F4]

1.2 For every $y\in\partial\Omega$ we have $u(y)=0$ by hypothesis, hence $P_\Omega(x,y)u(y)=0$. The boundary integrand is therefore the identically zero function on $\partial\Omega$, and its surface integral vanishes; this uses only the chart definition and the signed-integral convention of [F3], with no appeal to the size of $P_\Omega$. [given, A1, F3]

2.1 Substituting $f=-\Delta u$ and the vanishing boundary integral of step 1.2 into the formula of step 1.1 gives $u(x)=\int_\Omega G_\Omega(x,y)f(y)\,dy$ for the fixed $x$, and the absolute finiteness asserted there is exactly the absolute finiteness of this integral. [step 1.1, step 1.2, F1, F4, algebra]

3.1 Since $x\in\Omega$ was arbitrary, the identity holds for every $x\in\Omega$. If $f=0$, then $\Delta u=0$ and $u=0$ on $\partial\Omega$, and the formula returns $u(x)=\int_\Omega G_\Omega(x,y)\cdot0\,dy=0$ for every $x$, consistent with the statement; the zero and empty cases are covered by this same substitution. Countable Choice is inherited from the representation theorem and its Green, kernel and surface conventions; no new choice is used in steps 1.1–2.1. For complex-valued $u$ the real result applies to the real and imaginary parts, whose boundary traces also vanish; the statement is formulated for real $u$. [given, A1, F1, F3, step 2.1, cases] ∎

## Source notes

Hunter §§2.5–2.7, printed pp.32–42, constructs the Green function for the
Laplacian and states the representation $u=\int Gf$ for zero boundary data as
the classical motivation for the Green function, after the Green identities of
§2.5. Teschl §§5.3–5.4, printed pp.117–129, defines the Green function by the
harmonic correction and derives the representation formula for classical data.
Neither reference is used here as a proof of the specialization: the corollary
is the substitution $f=-\Delta u$ into the already proved representation
theorem, with the boundary term disposed of by the zero trace. The regularity
hypotheses are those of [[thm-green-representation-formula]] and are not
weakened; in particular no weak-boundary or $L^2$-trace statement is made.
