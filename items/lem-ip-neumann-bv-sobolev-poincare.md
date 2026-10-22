---
id: lem-ip-neumann-bv-sobolev-poincare
kind: lemma
title: BV Sobolev–Poincaré inequality for Neumann TV
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-countable-choice
  - def-ip-boundary-tv-conventions
  - def-ip-spatial-bv-and-distributional-tv
  - lem-ip-bv-compactness-lower-semicontinuity
  - lem-ip-bv-extension-and-translation
  - lem-ip-bv-sobolev-inequality
  - lem-ip-bv-zero-gradient-constant-on-connected-domain
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: José A. Iglesias, Gwenael Mercier, and Otmar Scherzer, A note on
        convergence of solutions of total variation regularized linear inverse
        problems, §4.3
      url: https://arxiv.org/pdf/1711.06495
      locator: §4.3, BV Sobolev–Poincaré constant in the Neumann density estimate
    - title: Gláucio Terra, Introduction to Geometric Measure Theory — Lecture Notes,
        version 1.6, §7.5
      url: https://www.ime.usp.br/~glaucio/mat6704/textos/GMTLecureNotes.pdf
      locator: §7.5, bounded-domain BV compactness, extension, and Sobolev estimates
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Assume Countable Choice. For every nonempty bounded connected Lipschitz domain $\Omega\subseteq\mathbb R^2$, there is a finite constant $C_\Omega>0$ such that every $u\in BV(\Omega)$ satisfies
$$\|u-u_\Omega\|_{L^2(\Omega)}\le C_\Omega TV(u;\Omega),\qquad u_\Omega:=|\Omega|^{-1}\int_\Omega u\,dx.$$

## Statement references

[[def-ip-boundary-tv-conventions|Neumann TV is the interior distributional variation.]]

[[lem-ip-bv-compactness-lower-semicontinuity|Bounded-domain BV sequences are compact in L¹.]]

[[lem-ip-bv-extension-and-translation|Zero extension from a bounded Lipschitz domain has controlled BV norm.]]

[[lem-ip-bv-sobolev-inequality|In two dimensions, full-space BV embeds into L² with the stated TV bound.]]

## Facts & Assumptions

**Given:** Countable Choice, a nonempty bounded connected Lipschitz domain $\Omega\subseteq\mathbb R^2$, and the Neumann total-variation convention.

[A1] Countable Choice is used to choose a sequence contradicting the proposed $L^1$ Poincaré bound. ([[def-countable-choice]])

[F1] [[lem-ip-bv-compactness-lower-semicontinuity]]: a BV sequence bounded in $L^1$ and TV has an $L^1$-convergent subsequence, and TV is lower semicontinuous.

[F2] [[lem-ip-bv-zero-gradient-constant-on-connected-domain]]: a locally integrable function with zero distributional gradient on a connected open set is a.e. constant.

[F3] [[lem-ip-bv-extension-and-translation]]: zero extension satisfies $\|\widetilde v\|_1+TV(\widetilde v;\mathbb R^2)\le C_{\rm ext}(\|v\|_1+TV(v;\Omega))$.

[F4] [[lem-ip-bv-sobolev-inequality]]: $\|g\|_{L^2(\mathbb R^2)}\le TV(g;\mathbb R^2)$ for $g\in BV(\mathbb R^2)$.

[F5] [[def-ip-boundary-tv-conventions]]: adding a constant leaves Neumann TV unchanged.


## Proof

1.1 First there is $C_1<\infty$ such that every zero-mean $v\in BV(\Omega)$ satisfies $\|v\|_1\le C_1TV(v;\Omega)$. If no such constant existed, [A1] would select $v_k$ with $\int_\Omega v_k=0$, $\|v_k\|_1=1$, and $TV(v_k;\Omega)<1/k$. Their BV norms are bounded, so [F1] gives a subsequence converging in $L^1$ to $v$. The limit has mean zero and $\|v\|_1=1$, while lower semicontinuity gives $TV(v;\Omega)=0$. Hence every distributional derivative of $v$ is zero; [F2] makes $v$ constant a.e., and its mean forces $v=0$, contradicting $\|v\|_1=1$. [A1, F1, F2, given, choose, contradiction]

2.1 For any $u\in BV(\Omega)$ set $v=u-u_\Omega$. Then $v$ has mean zero, $TV(v;\Omega)=TV(u;\Omega)$ by [F5], and step 1.1 gives $\|v\|_1\le C_1TV(u;\Omega)$. By [F3], $\widetilde v\in BV(\mathbb R^2)$ and $$TV(\widetilde v;\mathbb R^2)\le C_{\rm ext}(\|v\|_1+TV(v;\Omega))\le C_{\rm ext}(C_1+1)TV(u;\Omega).$$ Applying [F4] and using $\|\widetilde v\|_{L^2(\mathbb R^2)}=\|v\|_{L^2(\Omega)}$ proves the Statement with $C_\Omega=C_{\rm ext}(C_1+1)$. The same argument also shows every BV function on this bounded domain belongs to $L^2(\Omega)$. [F3, F4, F5, step 1.1, algebra] ∎

