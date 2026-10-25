---
id: thm-hll-flux-is-consistent-and-conservative
kind: theorem
title: "The HLL flux follows from the conservative two-wave model"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-hll-two-wave-flux
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
      locator: "Ch. 14 §14.1, printed pp. 146–148: approximate Riemann solutions and interface flux"
    - title: "David I. Ketcheson, Randall J. LeVeque, and Mauricio J. del Razo, Riemann Problems and Jupyter Solutions"
      url: "https://www.clawpack.org/riemann_book/html/Shallow_water_approximate.html"
      locator: "Part II, Shallow-water approximate solvers, HLL solver derivation and two-wave flux"
---

## Statement

When $S_L<0<S_R$, the HLL intermediate state
$$u_* =\frac{S_Ru_R-S_Lu_L-(f_R-f_L)}{S_R-S_L}$$
together with the assigned model flux
$$f_* = f_L+S_L(u_*-u_L)$$
satisfies the two model balances
$$f_*-f_L=S_L(u_*-u_L),\qquad f_R-f_*=S_R(u_R-u_*).$$
This $f_*$ is the middle formula in [[def-hll-two-wave-flux]]. In general
$f_*\ne f(u_*)$, even when $u_*\in G$; the model is not asserted to be a
weak solution of the original conservation law. For equal states
the HLL flux is consistent. A finite-volume update using the same HLL flux at
each periodic interface is conservative: for any finite periodic array with
adjacent pairs in the flux domain, define
$$U_j^{new}=U_j-\nu\bigl(\widehat f_{\rm HLL}(U_j,U_{j+1})-\widehat f_{\rm HLL}(U_{j-1},U_j)\bigr).$$
Here $n\ge1$. The result holds for any scalar $\nu$ and assumes the supplied speeds; it does
not prove that they enclose a nonlinear Riemann fan.

## Facts & Assumptions

**Given:** $S_L<S_R$, the two states and fluxes, and the HLL two-wave definition.

[F1] [[def-hll-two-wave-flux]]: the speeds and three-branch HLL flux are explicit inputs; the middle formula applies when $S_L<0<S_R$.

[F2] [[def-rankine-hugoniot-and-lax-shocks]]: a physical jump at speed $S$ requires $f(u_R)-f(u_L)=S(u_R-u_L)$, using the physical flux at each state.

## Proof

1.1 Put $D=S_R-S_L>0$. Direct subtraction gives $u_*-u_L=(S_R(u_R-u_L)-(f_R-f_L))/D$ and $u_R-u_*=(-S_L(u_R-u_L)+(f_R-f_L))/D$. Define $f_*=f_L+S_L(u_*-u_L)$; substitution gives $f_*=(S_Rf_L-S_Lf_R+S_LS_R(u_R-u_L))/D$. Then $f_*-f_L=S_L(u_*-u_L)$ and $f_R-f_*=S_R(u_R-u_*)$, which are the two model balances. They have the algebraic form of [F2], but use the assigned $f_*$ rather than $f(u_*)$. [given, F1, F2, algebra]

2.1 If $u_L=u_R=u$, the middle numerator is $(S_R-S_L)f(u)$, so the middle flux is $f(u)$; the outer branches also equal $f(u)$ when applicable. In a periodic finite-volume sum, each shared interface flux cancels with the opposite sign from the neighboring cell. This proves consistency and conservation without claiming any bound on $S_L,S_R$. [step 1.1, F1, algebra] ∎
