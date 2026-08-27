---
id: thm-continuity-principle-for-domains-of-holomorphy
kind: theorem
title: "Continuity principle for domains of holomorphy"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-continuous-family-of-analytic-discs,
       thm-cartan-thullen-theorem,
       thm-boundary-maximum-modulus-principle]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, §2.5"
      url: "https://www.jirka.org/scv/scv.pdf"
    - title: "Harold P. Boas, Lecture Notes on Several Complex Variables, Theorem 8, continuity-principle implication"
      url: "https://haroldpboas.gitlab.io/courses/650-2007c/notes.pdf"
pipeline_run: null
---

## Statement

Let $\Omega\subseteq\mathbb C^m$ be a domain of holomorphy, and let
$\Phi:[0,1]\times\overline{\mathbb D}\to\mathbb C^m$ be a continuous family of
analytic discs. Assume that there is a compact set $K\Subset\Omega$ with
$\Phi_t(\partial\mathbb D)\subseteq K$ for every $t$, and that
$\Phi_0(\overline{\mathbb D})\Subset\Omega$. Then

$$\Phi_t(\overline{\mathbb D})\subseteq\Omega\qquad(t\in[0,1]).$$

## Facts & Assumptions

**Given:** A domain of holomorphy $\Omega$ and a continuous family of analytic
discs $\Phi$ satisfying the boundary and initial-disc hypotheses.

[L1] The family and its boundary hypotheses are those of
[[def-continuous-family-of-analytic-discs]].

[L2] A domain of holomorphy is holomorphically convex, so the holomorphic hull
of a compact subset is compactly contained in the domain
([[thm-cartan-thullen-theorem]]).

[L3] A function holomorphic on a disc and continuous on its closure is bounded
there by its boundary maximum ([[thm-boundary-maximum-modulus-principle]]).

## Proof

**Proof technique:** direct.

1.1 Put $H:=\widehat K_\Omega$. By [L2], $H\Subset\Omega$. Let $$S:=\{t\in[0,1]:\Phi_t(\overline{\mathbb D})\subseteq\Omega\}.$$ The initial-disc hypothesis gives $0\in S$. If $t\in S$, then the compact set $\Phi_t(\overline{\mathbb D})$ lies in the open set $\Omega$; uniform continuity of $\Phi$ on the compact parameter product shows that the same containment holds for all parameters sufficiently close to $t$. Thus $S$ is open in $[0,1]$. [L1, L2, given]

2.1 If $t\in S$ and $f\in\mathcal O(\Omega)$, then $f\circ\Phi_t$ is holomorphic on $\mathbb D$ and continuous on its closure. By [L3] and the boundary hypothesis, $$|f(\Phi_t(\lambda))|\le\sup_{\partial\mathbb D}|f\circ\Phi_t|\le\sup_K|f|\qquad(\lambda\in\overline{\mathbb D}).$$ Since this holds for every $f$, one has $\Phi_t(\overline{\mathbb D})\subseteq H$. [L1, L3, step 1.1]

3.1 Let $t_n\in S$ and $t_n\to t$. For every $\lambda\in\overline{\mathbb D}$, step 2.1 gives $\Phi_{t_n}(\lambda)\in H$. The compact set $H$ is closed in $\mathbb C^m$, so continuity of $\Phi$ yields $\Phi_t(\lambda)\in H\subseteq\Omega$. Hence $t\in S$, and $S$ is closed. Since $[0,1]$ is connected and $S$ is nonempty, open, and closed, $S=[0,1]$. [step 1.1, step 2.1, L2] ∎
