---
id: lem-na-shrinking-boundary-stream-corrector
kind: lemma
title: "A shrinking clamped-stream correction on the square"
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: [def-axiom-of-choice, thm-holder-inequality-for-integrals, thm-chain-sum-product-and-composition-rules-for-banach-derivatives]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661, Chapter 53: Stokes equations"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap53.pdf
      locator: "No-slip mixed-formulation context only; the explicit shrinking correction and all estimates are derived locally."
---

## Statement

Assume the Axiom of Choice. Let $D=(0,1)^2$, $b\in C^\infty(\overline D)$ vanish on $\partial D$, and choose $\rho\in C^\infty([0,\infty))$ equal to $1$ on $[0,1/3]$ and $0$ on $[1,\infty)$. Set $d_1=x$, $d_2=1-x$, $d_3=y$, $d_4=1-y$, and
$$R_\ell(x,y)=1-\prod_{i=1}^4(1-\rho(d_i/\ell)),\qquad 0<\ell<1/16.$$
This function is $1$ near the boundary and supported in strips of total area at most $4\ell$. There is $C$, independent of $\ell$, such that
$$\|\nabla(bR_\ell)\|_\infty\le C,\qquad \|D^k(bR_\ell)\|_2\le C\ell^{3/2-k}\quad(k=1,2,3).$$
For $\ell(t)=\sqrt t$, $0<t<T<1/256$,
$$\|\partial_t\nabla(bR_{\sqrt t})\|_2\le Ct^{-1}t^{1/4}.$$
If $m\in C^1((0,T))$, $\operatorname{rot}\psi=(\psi_y,-\psi_x)$, and $r=-m\operatorname{rot}(bR_{\sqrt t})$, then
$$\|r\|_\infty\le C|m|,\quad \|r\|_2\le C|m|t^{1/4},\quad \|\nabla r\|_2\le C|m|t^{-1/4},$$
$$\|r_t\|_2+\|\Delta r\|_2\le C(|m'|t^{1/4}+|m|t^{-3/4}).$$
Moreover $bR_\ell=0$ and $\partial_n(bR_\ell)=\partial_n b$ on each side. Thus if a smooth stream $\Psi$ has zero boundary value and $\partial_n\Psi=m\partial_n b$, then $\Psi-mbR_\ell$ has both zero value and zero normal derivative there, and its rotation has zero velocity trace. On any fixed $J\Subset(0,1)$ and sufficiently small $t$, the additional estimate $\|\partial_xr\|_{L^\infty(J\times(0,1))}\le C_J|m|$ holds.

## Facts & Assumptions

**Given:** The Axiom of Choice, the square, smooth $b,\rho$, and the parameters of the Statement.

[F1] The product and chain rules apply to these finite products of smooth scalar functions. ([[thm-chain-sum-product-and-composition-rules-for-banach-derivatives]])

[F2] A function supported in a set of area at most $A$ and bounded by $B$ has $L^2$ norm at most $A^{1/2}B$. ([[thm-holder-inequality-for-integrals]])

## Proof

1.1 The product formula shows that $R_\ell=1$ whenever some $d_i<\ell/3$, and $R_\ell=0$ whenever every $d_i\ge\ell$. The supporting union has area at most $4\ell$. Smoothness follows from the finite product. Because $b=0$ on each side, the fundamental theorem in its normal coordinate gives $|b(x,y)|\le C d_i(x,y)$ for every side $i$, and $\nabla b$ and all fixed higher derivatives are bounded on the closed square. [F1, given, algebra]

2.1 Expand $D^k(bR_\ell)$ by the product rule. Every spatial derivative on a cutoff costs at most $C\ell^{-1}$. If at least one cutoff is differentiated, choose that side $i$; on that term's support $d_i\le\ell$, so an undifferentiated $b$ supplies a factor $C\ell$. Thus the terms with no derivative on $b$ have magnitude at most $C\ell^{1-k}$. If $j\ge1$ derivatives hit $b$, the other factors cost at most $C\ell^{-(k-j)}\le C\ell^{1-k}$. Terms with no differentiated cutoff have the same bound for $k\ge1$. All terms are supported in the union from step 1.1. Therefore $\|D^k(bR_\ell)\|_2\le C\ell^{3/2-k}$ for $k=1,2,3$; for $k=1$ the pointwise bound also gives $\|\nabla(bR_\ell)\|_\infty\le C$. Intersections of strips require no disjointness: the bound uses any differentiated side and the total union area. [F1, F2, step 1.1, algebra]

3.1 With $\ell=\sqrt t$, a time derivative of $\rho(d_i/\ell)$ is bounded by $Ct^{-1}$ and is supported where $d_i\le\ell$. One extra spatial derivative costs at most $C\ell^{-1}$, offset by $b=O(\ell)$ if it does not hit $b$. If it hits $b$, its derivative is bounded. Hence $|\partial_t\nabla(bR_{\sqrt t})|\le Ct^{-1}$ on the same union of strips, and its $L^2$ norm is at most $Ct^{-1}\ell^{1/2}$. Differentiating $r$ and applying step 2.1 with $k=1,2,3$ gives every asserted bound for $r$, $r_t$ and $\Delta r$. [F1, F2, step 2.1, algebra]

4.1 Near each boundary point $R_\ell=1$, so the boundary value of $bR_\ell$ is zero and its normal derivative equals that of $b$. Subtraction therefore cancels the stated stream trace and normal derivative. The tangential derivative of a zero boundary stream is zero, so its rotation has both zero normal and zero tangential velocity on each side. For $x\in J$ and sufficiently small $t$, the cutoffs of the vertical sides vanish identically and $R$ depends only on $y$. Since $b(x,0)=b(x,1)=0$, also $b_x,b_{xx}$ vanish on those edges and satisfy $|b_x|+|b_{xx}|\le C\min(y,1-y)$. Consequently $\partial_xr=-m\operatorname{rot}(b_xR)$ is bounded by $C_J|m|$: the only factor $R_y=O(\ell^{-1})$ is multiplied by $b_x=O(\ell)$ in its supporting strip. This proves the last estimate and completes the proof. [F1, step 1.1, step 2.1, given, algebra] ∎

