---
id: cor-the-local-lie-group-law-is-determined-by-the-lie-bracket
kind: corollary
title: The local Lie-group law is determined by the Lie bracket
status: draft
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-countable-choice, thm-baker-campbell-hausdorff, def-local-logarithm-on-a-lie-group]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: Michael Müger, Notes on the Baker-Campbell-Hausdorff-Dynkin theorem
      url: https://www.math.ru.nl/~mueger/PDF/BCHD.pdf
      locator: Theorem 2.14 and complete proof, printed pages 10–11
    - title: Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
      locator: Corollary 3.38, printed page 38
---

## Statement

Assume $\mathrm{AC}_\omega$. In exponential coordinates near the identity of a
finite-dimensional real Lie group, multiplication is

$$(X,Y)\longmapsto\operatorname{BCH}(X,Y).$$

Thus the germ of multiplication at the identity is determined by the
Lie-algebra bracket.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a finite-dimensional real Lie group, and the
local logarithm and BCH neighborhood below.

[F1] On a sufficiently small neighborhood,
$\log_G(\exp_GX\exp_GY)=\operatorname{BCH}(X,Y)$.
[[thm-baker-campbell-hausdorff]].

[F2] The local logarithm is inverse to the exponential on its stated domain.
[[def-local-logarithm-on-a-lie-group]].

[F3] Countable choice is the assumption inherited by both suppliers.
[[def-countable-choice]].

## Proof

**Proof technique:** direct.

1.1 Choose the neighborhood supplied by [F1], already shrunk inside the domain in [F2]. In the chart $\log_G$, the coordinate of the product of the points with coordinates $X$ and $Y$ is $\log_G(\exp_GX\exp_GY)=\operatorname{BCH}(X,Y)$. [F1, F2]

2.1 Dynkin's series is built solely from addition, scalar multiplication, and the Lie bracket, so step 1.1 shows that the multiplication germ is determined by that bracket. [F1, step 1.1]

3.1 The identity makes the group nonempty. In dimensions zero and one the formula respectively reduces to the unique product and to $X+Y$. Degenerate adjoint maps are allowed; no division by them occurs. There is no interval, endpoint, metric, or biconditional. $\mathrm{AC}_\omega$ is used exactly through [F1]–[F2], and the one neighborhood choice adds no family choice. [F1, F2, F3, step 1.1, step 2.1] ∎
