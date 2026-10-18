---
id: lem-na-elliptic-spacetime-jets-imply-parabolic-hjb-inequalities
kind: lemma
title: Closed elliptic space-time jets test the parabolic diagonal HJB inequality
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  [
    def-na-second-order-elliptic-semijets-and-closure,
    def-na-second-order-parabolic-viscosity-solution,
    def-na-periodic-diagonal-controlled-diffusion-hjb-problem
  ]
proof_strategy: direct
axiom_base: No additional choice is used; a closed jet already includes its
  witnessing sequence.
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Crandall, Ishii and Lions, User's guide to viscosity solutions
      url: https://arxiv.org/pdf/math/9207212
      locator: Section 2, equations (2.3), (2.6), Remark 2.4; Section 8, Remark 8.1.
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Let $u$ be a USC viscosity subsolution in the sense of
[[def-na-second-order-parabolic-viscosity-solution]], and write the local
space-time variable as $z=(t,x)$. If
$((a,p),H)\in\overline J^{2,+}u(t,x)$ is a closed elliptic jet in all $d+1$
variables ([[def-na-second-order-elliptic-semijets-and-closure]]), and $X$ is the spatial
principal block of $H$, then
$$a-\max_{c\in A}\left\{\sum_j(\alpha_j^c(x,t)X_{jj}+b_j^c(x,t)p_j)+f^c(x,t)\right\}\le0.$$
For an LSC supersolution and a closed elliptic subjet the reverse inequality
holds. All points are interior in time; local periodic lifts are understood.

## Facts & Assumptions

**Given:** The stated viscosity subsolution or supersolution and jet.

[F1] An ordinary elliptic superjet $(q,H)$ means an upper expansion by
$u(z)+q\cdot h+\tfrac12h^THh+o(|h|^2)$. A closed jet is the limit of
ordinary jets at points $z_n\to z$, with function values and jet entries
converging. Subjets have the reversed expansion
([[def-na-second-order-elliptic-semijets-and-closure]]).

[F2] Every $C^2$ space-time polynomial is a $C^{1,2}$ admissible test;
the diagonal HJB residual is continuous in the point, time derivative,
spatial gradient and spatial Hessian
([[def-na-second-order-parabolic-viscosity-solution]],
[[def-na-periodic-diagonal-controlled-diffusion-hjb-problem]]).

## Proof

1.1 First let the superjet be ordinary. For each $\theta>0$, the definition of the remainder in [F1] gives a neighborhood where the polynomial $u(z)+q\cdot h+\tfrac12h^T(H+\theta I)h$ lies above $u(z+h)$ and agrees at $h=0$. It is an admissible upper test by [F2]. Its tested derivatives are $a,p,X+\theta I_d$, so the subsolution inequality holds for these entries. Continuity in [F2] and $\theta\downarrow0$ give the stated inequality for $a,p,X$. [F1, F2, given, algebra]

2.1 For a closed superjet, apply step 1.1 at every interior point in its witnessing sequence from [F1]. All sufficiently late points are interior; coefficient continuity and convergence of the finite jet entries let the inequalities pass to the limit by [F2]. For an ordinary subjet, the polynomial with $H-\theta I$ lies below the function locally; use the lower-test inequality and let $\theta\downarrow0$. Passing along the closed-subjet witnessing sequence proves the supersolution assertion. [F1, F2, step 1.1, algebra] ∎
