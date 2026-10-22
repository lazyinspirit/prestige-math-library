---
id: ex-ip-nonlinear-tikhonov-has-two-global-minimizers
kind: example
title: A nonlinear Tikhonov functional can have two global minimizers
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-ip-weakly-closed-nonlinear-forward-map
  - def-ip-nonlinear-tikhonov-functional
  - def-ip-nonlinear-forward-map
  - def-hilbert-space
  - def-real-and-complex-inner-product-space
  - thm-reals-cauchy-complete
  - def-weak-convergence-of-nets-and-sequences
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Christian Clason, Regularization of Inverse Problems, Chapter 10, nonuniqueness discussion"
      url: "https://arxiv.org/pdf/2001.00617v2"
    - title: "Benedikt Wirth, Inverse Problems, Remark 84"
      url: "https://www.uni-muenster.de/AMM/Veranstaltungen/WS21/InverseProblems/lecture2021.pdf"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Example

Let $X=Y=\mathbb R$ with the usual inner product, let $U=\mathbb R$, and define $F:U\to Y$ by $F(t)=t^2$. Take $x_0=0$, $y=1$, and $\alpha=1$. The domain $U$ is weakly closed and, whenever $t_n$ converges weakly to $t$ and $F(t_n)$ converges weakly to $z$, one has $z=F(t)$; weak convergence means convergence under every bounded real-linear functional. The Tikhonov functional is

$$
J(t)=\frac12(t^2-1)^2+\frac12t^2\qquad(t\in\mathbb R).
$$

It has exactly two distinct global minimizers, $t=1/\sqrt2$ and $t=-1/\sqrt2$.

## Example references

[[def-ip-nonlinear-forward-map|Nonlinear forward maps on an open real Hilbert domain]]

[[def-ip-weakly-closed-nonlinear-forward-map|Weakly closed forward maps]]

[[def-ip-nonlinear-tikhonov-functional|The Tikhonov functional]]

[[def-hilbert-space|Real Hilbert spaces]]

[[def-weak-convergence-of-nets-and-sequences|Weak sequence convergence]]

[Christian Clason, *Regularization of Inverse Problems*, Chapter 10](https://arxiv.org/pdf/2001.00617v2)

[Benedikt Wirth, *Inverse Problems*, Remark 84](https://www.uni-muenster.de/AMM/Veranstaltungen/WS21/InverseProblems/lecture2021.pdf)

## Facts & Assumptions

**Given:** $X=Y=\mathbb R$ with the standard real inner product and norm, $U=\mathbb R$, $F(t)=t^2$, $x_0=0$, $y=1$, and $\alpha=1$.

[F1] The standard real inner product induces the usual norm, and $\mathbb R$ is complete for it; hence it is a real Hilbert space ([[def-real-and-complex-inner-product-space]], [[thm-reals-cauchy-complete]], [[def-hilbert-space]]).

[F2] Weak convergence is convergence under every bounded real-linear functional; in particular the identity functional shows that weak convergence in $\mathbb R$ implies ordinary convergence ([[def-weak-convergence-of-nets-and-sequences]]).

[F3] A weakly closed forward map has weakly closed domain and sequentially weak-to-weak closed graph ([[def-ip-weakly-closed-nonlinear-forward-map]]).

[F4] The nonlinear Tikhonov functional is $\frac12\|F(t)-y\|^2+\frac{\alpha}{2}\|t-x_0\|^2$ ([[def-ip-nonlinear-tikhonov-functional]]).

[F5] A nonlinear forward map is a map from a nonempty norm-open subset of a real Hilbert space to a real Hilbert space; no linearity is assumed ([[def-ip-nonlinear-forward-map]]).

## Verification

1.1 The domain $U=\mathbb R$ is open and weakly closed. The map is nonlinear because $F(1)+F(-1)=2\ne0=F(0)$. If $t_n\rightharpoonup t$, [F2] gives $t_n\to t$, hence $t_n^2\to t^2$; if also $F(t_n)\rightharpoonup z$, applying [F2] to the output gives $t_n^2\to z$, so uniqueness of real limits gives $z=t^2$. Thus the graph has the required sequential weak-to-weak closure, and [F1, F5] identify this as an open-domain nonlinear forward map between real Hilbert spaces. [given, F1, F2, F3, F5, algebra]

1.2 By [F4] and the given parameters, $J(t)=\frac12(t^2-1)^2+\frac12t^2$. Set $u=t^2\ge0$. Then $J(t)=\frac12(u-1)^2+\frac12u$. [given, F4, algebra]

2.1 Completing the square gives $J(t)=\frac12(u-\frac12)^2+\frac38$. This is at least $3/8$, with equality exactly when $u=1/2$, equivalently $t=1/\sqrt2$ or $t=-1/\sqrt2$. These two distinct points are therefore exactly the global minimizers. [step 1.2, algebra] ∎
