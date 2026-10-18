---
id: lem-pe05-strong-l1-limit-preserves-dry-admissibility
kind: lemma
title: A strong local L1 limit preserves shallow-water dry admissibility
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-pe05-shallow-water-balance-law]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "E. Audusse, F. Bouchut, M.-O. Bristeau, R. Klein, and B. Perthame, A Fast and Stable Well-Balanced Scheme with Hydrostatic Reconstruction for Shallow Water Flows"
      url: "https://publications.imp.fu-berlin.de/478/1/file_2004_siam.pdf"
      locator: "Complete 16-page paper; §1 dry-depth convention and balance law, printed pp. 2050–2051."
    - title: "D. I. Ketcheson, R. J. LeVeque, and M. J. del Razo, Riemann Problems and Jupyter Solutions, Chapter 12"
      url: "https://www.clawpack.org/riemann_book/html/Shallow_water_approximate.html"
      locator: "Complete chapter; opening shallow-water conserved variables and dry-depth discussion, lines 0–14 and 518–552."
---

## Statement

Let $h_k\ge0$ almost everywhere on $\mathbb R\times(0,T)$ and suppose $h_k\to h$ strongly in $L^1_{\mathrm{loc}}$. Let $u$ be measurable, put $m=hu$ almost everywhere, and suppose $u=0$ almost everywhere on $\{h=0\}$. Then $U=(h,m)$ belongs to the admissible state set $K$ from [[def-pe05-shallow-water-balance-law]] almost everywhere. Also, let initial reconstructions $U_k^0=(h_k^0,m_k^0)\in K$ satisfy $m_k^0=h_k^0u_k^0$, $u_k^0=0$ where $h_k^0=0$, and $|u_k^0|\le M_Q$ on each compact spatial interval $Q$ for a constant $M_Q$ independent of $k$. If $U_k^0\to U_0=(h_0,m_0)$ strongly in $L^1_{\mathrm{loc}}(\mathbb R)$, then $U_0\in K$ almost everywhere.

## Facts & Assumptions

**Given:** Nonnegative bulk depths converging strongly locally in $L^1$, $m=hu$ with zero velocity on the dry set, and admissible initial reconstructions converging strongly locally in $L^1$ with locally uniform primitive-velocity bounds. Prove both limit states are admissible.

[F1] [[def-pe05-shallow-water-balance-law]]: $K=\{(h,m):h>0,\ m\in\mathbb R\}\cup\{(0,0)\}$, so any positive-depth state is admissible and zero depth requires zero momentum.

## Proof

1.1 Write $r_-:=\max(-r,0)$. On each compact rectangle $Q\subset\mathbb R\times(0,T)$, $h_k\ge0$ implies $h_-\le|h-h_k|$, so $\int_Qh_-\le\|h-h_k\|_{L^1(Q)}\to0$. On each compact interval $I\subset\mathbb R$, $h_k^0\ge0$ gives $(h_0)_-\le|h_0-h_k^0|$, so $\int_I(h_0)_-\le\|h_0-h_k^0\|_{L^1(I)}\to0$. Countable compact exhaustions of $\mathbb R\times(0,T)$ and $\mathbb R$ now give $h\ge0$ and $h_0\ge0$ almost everywhere on their domains. [given, algebra]

2.1 Where $h>0$, [F1] allows arbitrary momentum $m$; where $h=0$, $m=hu=0$, so $U\in K$. For the initial data, on each compact interval $I$ the bound on $u_k^0$ and $U_k^0\in K$ imply $|m_k^0|\le M_Ih_k^0$. Hence $(|m_0|-M_Ih_0)_+\le |m_0-m_k^0|+M_I|h_k^0-h_0|$ pointwise, and integration followed by strong $L^1(I)$ convergence gives $|m_0|\le M_Ih_0$ almost everywhere. Thus $m_0=0$ wherever $h_0=0$; step 1.1 gives $h_0\ge0$, and [F1] yields $U_0\in K$. A countable compact exhaustion proves the bulk and initial claims almost everywhere on their domains. [F1, step 1.1, given, algebra] ∎
