---
id: cor-every-distinguished-open-is-compact
kind: corollary
title: "Every distinguished open subset is compact"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-compact-space, cor-principal-localisation-spectrum-is-distinguished-open, thm-prime-spectrum-is-compact]
justified_by: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Proposition (13.20)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "The Stacks Project, Lemma 10.17.9"
      url: "https://stacks.math.columbia.edu/tag/00DY"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

Assume the Axiom of Choice.

Let $R$ be a commutative ring and let $f\in R$. Then the distinguished open subset $D(f)\subseteq\operatorname{Spec}(R)$ is compact in its subspace topology.

## Facts & Assumptions

**Given:** A commutative ring $R$, an element $f\in R$, an open cover $\mathcal U$ of $D(f)$, and the Axiom of Choice.

[L1] The localization map $R\to R_f$ induces a homeomorphism $h:\operatorname{Spec}(R_f)\to D(f)$ ([[cor-principal-localisation-spectrum-is-distinguished-open]]).

[L2] The spectrum of every commutative ring is compact ([[thm-prime-spectrum-is-compact]]).

[L3] A topological space is compact when every open cover has a finite subcover ([[def-compact-space]]).

[A1] If $h:X\to Y$ is a homeomorphism and $\mathcal V$ is an open cover of $Y$, then $\{h^{-1}(V):V\in\mathcal V\}$ is an open cover of $X$; a finite subcover of the latter pushes forward to a finite subcover of the former.

## Proof

**Proof technique:** direct.

1.1 By [L1], there is a homeomorphism $h:\operatorname{Spec}(R_f)\to D(f)$. By [L2], the domain $\operatorname{Spec}(R_f)$ is compact. [L1, L2]

2.1 Apply [A1] to the open cover $\mathcal U$ of $D(f)$. The inverse images $h^{-1}(U)$ with $U\in\mathcal U$ form an open cover of $\operatorname{Spec}(R_f)$, so compactness from step 1.1 gives finitely many $U_1,\dots,U_n\in\mathcal U$ whose inverse images cover $\operatorname{Spec}(R_f)$. Then $U_1,\dots,U_n$ cover $D(f)$. [A1, step 1.1, choose]

3.1 Thus every open cover of $D(f)$ has a finite subcover, so $D(f)$ is compact by [L3]. [L3, step 2.1] ∎
