---
id: lem-rankine-hugoniot-jump-is-a-weak-solution
kind: lemma
title: "A moving jump is a weak solution exactly under Rankine–Hugoniot"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-hyperbolic-system-and-characteristic-families
  - def-rankine-hugoniot-and-lax-shocks
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Randall J. LeVeque, Numerical Methods for Conservation Laws"
      url: "https://tevza.org/home/course/modelling-II_2016/books/Leveque%20-%20Numerical%20Methods%20for%20Conservation%20Laws.pdf"
      locator: "Ch. 7 §7.1, printed pp. 70–73: weak jumps and the Rankine–Hugoniot condition"
---

## Statement

For a conservation system as in
[[def-hyperbolic-system-and-characteristic-families]], constant states
$u_L,u_R\in G$, and a constant speed $s$, define
$u(t,x)=u_L$ for $x<st$ and $u(t,x)=u_R$ for $x>st$, and let
$u_0(x)=u_L$ for $x<0$ and $u_0(x)=u_R$ for $x>0$ (values on the jump lines
are immaterial). Then $u$ is a distributional weak solution with initial datum
$u_0$ in the sense of [[def-hyperbolic-system-and-characteristic-families]]
if and only if
$$f(u_R)-f(u_L)=s(u_R-u_L).$$

## Facts & Assumptions

**Given:** A system as in [[def-hyperbolic-system-and-characteristic-families]],
states $u_L,u_R\in G$, and the jump at speed $s$.

[F1] [[def-rankine-hugoniot-and-lax-shocks]]: a Rankine–Hugoniot jump is exactly the algebraic equality $[f]=s[u]$.

[F2] [[def-hyperbolic-system-and-characteristic-families]]: a distributional
weak solution with initial data satisfies the vector test-function identity for
the PDE and converges to that datum in $L^1_{\rm loc}$ as $t\downarrow0$.

## Proof

1.1 Write $u=u_L+[u]H(x-st)$ and $f(u)=f(u_L)+[f]H(x-st)$, where $H$ is the unit step and $[u]=u_R-u_L$, $[f]=f(u_R)-f(u_L)$. Testing against a smooth compactly supported function and integrating by parts on the two sides of the line $x=st$ gives $\partial_tu=-s[u]\delta_{x=st}$ and $\partial_xf=[f]\delta_{x=st}$. [given, F2, algebra]

2.1 For every compact $K\subset\mathbb R$, the functions $u(t,\cdot)$ and $u_0$ agree almost everywhere outside the interval with endpoints $0$ and $st$. Hence
$$\|u(t,\cdot)-u_0\|_{L^1(K)}\le |s|t\,\|u_R-u_L\|_2\longrightarrow0$$
as $t\downarrow0$. Thus the required local $L^1$ initial trace holds. [given, F2, algebra]

3.1 By step 1.1 the distributional PDE identity holds exactly when $[f]=s[u]$, which is [F1]. Step 2.1 supplies the initial trace in either case, so the definition of weak solution gives both implications. [step 1.1, step 2.1, F1, F2, algebra] ∎
