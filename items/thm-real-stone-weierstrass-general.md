---
id: thm-real-stone-weierstrass-general
kind: theorem
title: "Real Stone–Weierstrass theorem for compact Hausdorff spaces"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-uniform-closure-of-a-general-real-function-algebra-is-a-lattice, thm-lattice-stone-weierstrass]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
sources:
  scraped: []
  references:
    - title: "J. M. Erdman, A Companion to Real Analysis, Theorem 21.2.6"
      url: "https://web.pdx.edu/~erdman/CRA/COMPANION_ANALYSIS_pdf.pdf"
    - title: "M. Xu, Math 205B notes from a course by R. Mazzeo (Stanford), Theorem 9.3"
      url: "https://math.berkeley.edu/~moorxu/oldsite/notes/205b/205bmain.pdf"
    - title: "E. Carlen, Notes on Topology and the Stone-Weierstrass Theorem, Theorem 1.26"
      url: "https://sites.math.rutgers.edu/~carlen/502S13/Topology502.pdf"
pipeline_run: null
---

## Statement

Let $X$ be a compact Hausdorff space. Every unital point-separating real function algebra $A\subseteq C(X,\mathbb R)$ is uniformly dense in $C(X,\mathbb R)$.

## Facts & Assumptions

**Given:** A compact Hausdorff space $X$ and a unital point-separating real function algebra $A\subseteq C(X,\mathbb R)$.

[L1] The uniform closure of a real function algebra on a compact Hausdorff space is itself a real function algebra and a real vector sublattice of $C(X,\mathbb R)$ ([[lem-uniform-closure-of-a-general-real-function-algebra-is-a-lattice]]).

[L2] On a compact Hausdorff space, a unital point-separating real vector sublattice of $C(X,\mathbb R)$ contains, for every $f\in C(X,\mathbb R)$ and every $\varepsilon>0$, a member within $\varepsilon$ of $f$ at every point; that is, it is uniformly dense ([[thm-lattice-stone-weierstrass]]).

## Proof

**Proof technique:** direct.

1.1 If $X=\varnothing$, then $C(X,\mathbb R)$ contains only the empty function, which is a constant function and therefore belongs to the unital algebra $A$; thus $A=C(X,\mathbb R)$. [given]

1.2 Assume $X\ne\varnothing$ and let $B:=\overline A$ be the uniform closure. By [L1], $B$ is a real vector sublattice and a real function algebra; it is unital and point-separating because it contains $A$. [L1, given]

2.1 By [L2], the vector sublattice $B$ is dense in $C(X,\mathbb R)$, while by definition $B$ is closed; hence $B=C(X,\mathbb R)$, which says exactly that $A$ is uniformly dense. [step 1.2, L2] ∎
