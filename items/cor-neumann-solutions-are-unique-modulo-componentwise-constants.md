---
id: cor-neumann-solutions-are-unique-modulo-componentwise-constants
kind: corollary
title: Classical Neumann solutions differ by componentwise constants
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: John K. Hunter, Notes on Partial Differential Equations (2014)
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: §2.5, Theorem 2.23 and equations (2.10)–(2.11), printed p. 32
status: published
origin: pipeline
proof_strategy: direct
deps: ["cor-first-green-identity-on-a-bounded-c-one-domain", "def-classical-normal-derivative", "def-countable-choice", "thm-zero-derivative-on-connected-open-euclidean-set-iff-constant", "cor-mean-value-theorem", "thm-connected-subsets-of-r-are-intervals", "thm-algebra-of-total-derivatives", "def-laplacian-of-a-c2-function"]
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume $\mathrm{AC}_\omega$ when $n\ge2$. Assume $\Omega\subset\mathbb R^n$, $n\ge1$, is a bounded $C^1$ domain with finitely many connected components. If $u,v\in C^2(\overline\Omega)$ solve the same Poisson equation and have the same outward normal derivative on $\partial\Omega$, then $u-v$ is constant on each connected component. In particular it is constant when $\Omega$ is connected.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$. The set $\Omega$ is a bounded $C^1$ open set with finitely many connected components, each a bounded $C^1$ domain; $u,v\in C^2(\overline\Omega)$ have equal Laplacians and equal outward normal derivatives.

[A1] Countable Choice, written $\mathrm{AC}_\omega$, says that every sequence of nonempty sets has a choice function. ([[def-countable-choice]]).

[F1] For $n\ge2$, real $a\in C^2(\overline U)$ and $b\in C^1(\overline U)$ on a bounded $C^1$ domain, the first Green identity is $\int_U(b\Delta a+Da\cdot Db)\,dx=\int_{\partial U}b\partial_\nu a\,dS$. ([[cor-first-green-identity-on-a-bounded-c-one-domain]]).

[F2] The classical normal derivative is $\partial_\nu a=Da\cdot\nu$, with the continuous interior gradient and the outward unit normal. ([[def-classical-normal-derivative]]).

[F3] For a differentiable map on a nonempty connected open Euclidean set, zero derivative is equivalent to constancy. ([[thm-zero-derivative-on-connected-open-euclidean-set-iff-constant]]).

[F4] If a real function is continuous on $[a,b]$ and differentiable on $(a,b)$, then $f(b)-f(a)=f'(c)(b-a)$ for some $c\in(a,b)$. ([[cor-mean-value-theorem]]).

[F5] A subset of $\mathbb R$ is connected exactly when it is order-convex. ([[thm-connected-subsets-of-r-are-intervals]]).

[F6] Sums and scalar multiples of differentiable maps have the corresponding sum and scalar-multiple derivatives. ([[thm-algebra-of-total-derivatives]]).

[F7] For a $C^2$ scalar function, the Laplacian is the trace of the derivative of its gradient. ([[def-laplacian-of-a-c2-function]]).

## Proof

**Proof technique:** direct.

1.1 First take real-valued functions and put $w=u-v$. By [F6], $D(\nabla w)=D(\nabla u)-D(\nabla v)$; taking traces and using [F7] gives $\Delta w=0$ on every component. By [F2] and the same derivative linearity, $\partial_\nu w=\partial_\nu u-\partial_\nu v=0$ on its boundary. For complex-valued functions, apply this real argument separately to their real and imaginary parts. [given, F2, F6, F7, algebra]

2.1 Suppose $n\ge2$ and fix a connected component $U$. Apply [F1] with $a=b=w$ on $U$. The volume integrand is $w\Delta w+|Dw|^2=|Dw|^2$ and the boundary integrand is $w\partial_\nu w=0$, so $\int_U|Dw|^2\,dx=0$. Continuity of $Dw$ forces $Dw=0$ throughout $U$: if it were nonzero at one point, it would be bounded away from zero on a small ball of positive measure. By [F3], $w$ is constant on $U$. The invocation of [F1] uses precisely the Countable Choice assumption [A1]. [step 1.1, A1, F1, F3, algebra]

2.2 Suppose $n=1$. By [F5], each connected component $U$ is an interval; boundedness makes it an interval with finite endpoints $a<b$. The equation in step 1.1 is $w''=0$. For any $x<y$ in $U$, the mean value theorem [F4] applied to $w'$ on $[x,y]$ gives $w'(y)-w'(x)=w''(c)(y-x)=0$, so $w'$ is constant on $U$. Its continuous trace at the right endpoint is zero because the outward normal there is $+1$ and $\partial_\nu w=0$. Thus $w'=0$ on $U$, and [F3] gives that $w$ is constant there. [step 1.1, F3, F4, F5]

3.1 The components are handled independently, so their constants need not agree. If there is only one component, the conclusion is one constant on all of $\Omega$; zero difference is included. In dimensions at least two, the only use of $\mathrm{AC}_\omega$ is through [F1] under [A1]; the interval proof in dimension one uses no choice. [step 2.1, step 2.2, A1, F1, cases] ∎

## Source notes

Hunter §2.5, Theorem 2.23, equations (2.10)–(2.11), printed p. 32. The energy argument is the Neumann uniqueness corollary of that identity; the one-dimensional case is derived directly to respect the cited theorem's stated $n\ge2$ hypothesis.
