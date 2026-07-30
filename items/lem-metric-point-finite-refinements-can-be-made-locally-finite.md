---
id: lem-metric-point-finite-refinements-can-be-made-locally-finite
kind: lemma
title: "Under choice, Ornstein's second construction turns a point-finite metric open cover into a locally finite open refinement"
status: published
origin: session
deps: [lem-metric-open-covers-have-point-finite-refinements, def-cover-refinement-and-local-finiteness, def-metric-topology, def-axiom-of-choice, thm-well-ordering-theorem]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "D. Ornstein, A New Proof of the Paracompactness of Metric Spaces, Proc. Amer. Math. Soc. 21 (1969), 341–342"
      url: "https://www.ams.org/proc/1969-021-02/S0002-9939-1969-0242120-3/S0002-9939-1969-0242120-3.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice. Every point-finite open cover of a metric space has
a locally finite open refinement. Consequently every metric open cover has a
locally finite open refinement.

## Facts & Assumptions

**Given:** Choice, a metric space $X$, and a point-finite open cover $\{C_\alpha\}_{\alpha\in A}$.

[A1] The Axiom of Choice permits the cover to be well ordered and used to select its first eligible member ([[def-axiom-of-choice]], [[thm-well-ordering-theorem]]).

[F1] Metric balls are open, and every point has a positive-radius ball inside some cover member ([[def-metric-topology]]).

[F2] A locally finite open refinement is the paracompactness refinement of [[def-cover-refinement-and-local-finiteness]].

[L1] Under choice every metric open cover has a point-finite open refinement ([[lem-metric-open-covers-have-point-finite-refinements]]).

## Proof

**Proof technique:** constructive.

1.1 Well order the point-finite cover. For $x\in X$ let $$\rho_x=\sup\{r>0:B(x,r)\subseteq C_\alpha \text{ for some }\alpha\}.$$ Put $m_x=\min\{1,\rho_x/4\}$ when $\rho_x<\infty$, and $m_x=1$ otherwise. Then $0<m_x\le1$ and $B(x,2m_x)$ lies in some cover member: its radius is strictly below $\rho_x$. Assign $x$ to the first $C_\alpha$ containing $B(x,2m_x)$, and let $C'_\alpha$ be the union of all $B(x,m_x)$ assigned to $\alpha$. [A1, F1, construct]

2.1 The selected smaller balls cover $X$ and each lies in its assigned $C_\alpha$, so $\{C'_\alpha\}$ is an open refining cover. [step 1.1]

2.2 Fix $x$. If $C'_\alpha$ meets $B(x,m_x/8)$, choose a ball $B(y,m_y)\subseteq C'_\alpha$ meeting it. We claim $x\in C_\alpha$. Otherwise $x\notin B(y,2m_y)$, while intersection gives $d(x,y)<m_y+m_x/8$; hence $m_y<m_x/8\le1/8$. Thus the truncation in step 1.1 is inactive at $y$ and $\rho_y=4m_y$. But $$B(y,5m_y)\subseteq B(x,2m_x),$$ because $d(x,y)+5m_y<6m_y+m_x/8<7m_x/8$; the right-hand ball lies in some cover member by step 1.1. This contradicts the definition of $\rho_y$. Thus $x\in C_\alpha$. [step 1.1]

3.1 The input cover is point-finite, so $x$ belongs to only finitely many $C_\alpha$. Step 2.2 shows that $B(x,m_x/8)$ meets only the corresponding finitely many $C'_\alpha$; hence the new cover is locally finite. [step 2.2, F2]

4.1 Hence $\{C'_\alpha\}$ is a locally finite open refinement of the point-finite cover. For an arbitrary metric open cover, first apply [L1] and then this construction; refinement is transitive, so the result refines the original cover. [L1, F2, step 2.1, step 3.1, discharge-construct] ∎

## Remarks

In the primary paper, part (B) is applied to the point-finite cover obtained in part (A), with that cover renamed $\{C_\alpha\}$. Its local-finiteness test concludes that every new set meeting a fixed small ball has an index $\alpha$ for which $x\in C_\alpha$; point-finiteness of the input is exactly what turns this conclusion into finiteness. Thus part (B) upgrades part (A) rather than restarting from the original arbitrary cover.
