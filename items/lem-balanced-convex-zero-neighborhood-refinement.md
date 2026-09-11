---
id: "lem-balanced-convex-zero-neighborhood-refinement"
kind: "lemma"
title: "Open and closed balanced convex zero-neighborhood refinements"
status: "draft"
origin: "pipeline"
deps: ["def-locally-convex-topological-vector-space", "lem-topological-vector-space-translation-scaling-and-absorption", "lem-locally-convex-closures-and-finite-compact-convex-hulls", "thm-closure-characterisation-top"]
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, section 5.1"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
pipeline_run: "phase-2-next-20"
proof_strategy: "direct"
---

## Statement

For every zero-neighborhood $U$ in a locally convex real or complex TVS, there is an open balanced convex zero-neighborhood $V$ with $\overline V\subseteq U$. Consequently $U$ contains a closed balanced convex zero-neighborhood. Balanced sets are symmetric. No Hausdorffness, Hahn–Banach or choice principle is assumed.

## Facts & Assumptions

**Given:** A locally convex TVS $X$ and a zero-neighborhood $U$.

[F1] Local convexity supplies an open convex zero-neighborhood inside each zero-neighborhood; convex hulls consist of finite convex combinations ([[def-locally-convex-topological-vector-space]]).

[F2] Symmetric small neighborhoods, open translations and dilations, and joint vector continuity are available ([[lem-topological-vector-space-translation-scaling-and-absorption]]).

[F3] Closures preserve convexity and balance ([[lem-locally-convex-closures-and-finite-compact-convex-hulls]]).

[F4] Every open neighborhood of a closure point meets the set; closure is closed and contains the set ([[thm-closure-characterisation-top]]).

## Proof

1.1 Choose a symmetric open zero-neighborhood $O$ with $O+O\subseteq U$, then an open convex zero-neighborhood $C\subseteq O$. Joint scalar continuity at $(0,0)$ supplies $\delta>0$ and an open zero-neighborhood $W$ with $\{a:|a|<\delta\}W\subseteq C$. Put $W_0=(\delta/2)W$, which is open and contains zero. [F1, F2]

2.1 Define $B=\bigcup_{|a|\le1}aW_0$. If $aw\in B$ and $|\lambda|\le1$, then $\lambda(aw)=(\lambda a)w\in B$, so $B$ is balanced. It contains $W_0$. For $w=(\delta/2)v\in W_0$, $aw=(a\delta/2)v\in C$ since $|a\delta/2|<\delta$, so $B\subseteq C$. Moreover $B$ is open: all nonzero dilates are open, and the zero dilate contributes only zero, which already belongs to $W_0$. [F2, step 1.1]

3.1 Put $V=\operatorname{co}(B)$. Then $W_0\subseteq B\subseteq V\subseteq C\subseteq O$, and $V$ is convex. For $|\lambda|\le1$, distributing $\lambda$ through a finite convex sum leaves its summands in $B$, proving balance of $V$. To prove openness, represent $v=\sum_jt_jb_j\in V$. Some $t_k>0$, and $t_kB+\sum_{j\ne k}t_jb_j$ is an open subset of $V$ containing $v$. Thus $V$ is an open balanced convex zero-neighborhood. Zero coefficients cause no problem because the sum of the coefficients is one. [F1, F2, step 2.1]

4.1 If $x\in\overline V$, then $x-O$ is an open neighborhood of $x$ and meets $V$. Write $v=x-o\in V$ with $o\in O$; hence $x=v+o\in V+O\subseteq O+O\subseteq U$. Thus $\overline V\subseteq U$. By closure preservation, $\overline V$ is convex and balanced; it is closed and contains the open zero-neighborhood $V$. Finally balance implies $-V\subseteq V$ and applying negation again gives $V=-V$; the same applies to every balanced set, including the empty set. [F2, F3, F4, step 1.1, step 3.1] ∎