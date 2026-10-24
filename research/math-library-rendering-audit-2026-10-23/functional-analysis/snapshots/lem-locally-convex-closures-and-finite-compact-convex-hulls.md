---
id: "lem-locally-convex-closures-and-finite-compact-convex-hulls"
kind: "lemma"
title: "Convex closures and hulls of finitely many compact convex sets"
status: published
origin: "pipeline"
deps: ["def-locally-convex-topological-vector-space", "lem-topological-vector-space-translation-scaling-and-absorption", "thm-closure-characterisation-top", "thm-finite-products-of-compact-spaces", "cor-heine-borel-in-the-product-topology", "thm-compactness-under-continuous-maps", "thm-compact-subset-of-a-hausdorff-space-is-closed", "lem-finite-choice"]
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  scraped: []
  references:
    - title: "Theo B\u00fchler and Dietmar Salamon, Functional Analysis (8 June 2017)"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Harald Hanche-Olsen, Topological vector spaces, version 1.6 (bibliographic origin; complete local argument replaces unavailable backing)"
      url: "https://hanche.folk.ntnu.no/notes/topvec/topvec-a4.pdf"
pipeline_run: "phase-2-next-20"
proof_strategy: "direct"
---

## Statement

In any real or complex TVS, the closure and interior of a convex set are convex, and the closure of a balanced set is balanced. If a convex set has nonempty interior, it is contained in the closure of its interior.

For finitely many nonempty compact convex subsets $K_1,\ldots,K_n$, with $n\ge1$,
$$\operatorname{co}\left(\bigcup_{j=1}^nK_j\right)=\left\{\sum_{j=1}^nt_jx_j:t_j\ge0,\ \sum_{j=1}^nt_j=1,\ x_j\in K_j\right\}$$
is compact, and is closed if the ambient TVS is Hausdorff. In particular finite point hulls are compact. Empty members may be removed; the hull of an empty family is empty and compact.

## Facts & Assumptions

**Given:** A real or complex TVS $X$; convex and balanced sets as specified in each assertion; a finite list of compact convex sets.

[F1] Convexity, balance and the finite-combination description of a hull are as in [[def-locally-convex-topological-vector-space]].

[F2] Translations and nonzero dilations are homeomorphisms, and the vector operations are continuous ([[lem-topological-vector-space-translation-scaling-and-absorption]]).

[F3] Closure is tested by all open neighborhoods ([[thm-closure-characterisation-top]], clauses 1–2).

[F4] Finite products of compact spaces are compact in ZF ([[thm-finite-products-of-compact-spaces]]).

[F5] Closed bounded subsets of finite-dimensional real product space are compact ([[cor-heine-borel-in-the-product-topology]]).

[F6] Continuous images of compact spaces are compact ([[thm-compactness-under-continuous-maps]], clause 1).

[F7] Compact subsets of a Hausdorff space are closed ([[thm-compact-subset-of-a-hausdorff-space-is-closed]], clause 3).

[F8] Choice for a finite indexed list of nonempty sets is available in ZF ([[lem-finite-choice]]).

## Proof

1.1 Let $x,y\in\overline C$ for convex $C$, and $0<t<1$. The affine map $(a,b)\mapsto(1-t)a+tb$ is continuous by the vector operations. For an open neighborhood $O$ of $(1-t)x+ty$, its preimage contains a product neighborhood $P\times Q$ of $(x,y)$. There exist $a\in P\cap C$ and $b\in Q\cap C$ by the closure test. Their convex combination is in $O\cap C$. Thus $(1-t)x+ty\in\overline C$. At $t=0,1$ the assertion follows from membership of $x,y$; for $C=\varnothing$ its closure is empty. [F1, F2, F3]

1.2 For $x,y\in\operatorname{int}C$ and $0<t<1$, the open set $(1-t)\operatorname{int}C+t\operatorname{int}C$ contains their combination and lies in $C$. It is open as a union of translates of a nonzero dilate of an open set. The endpoints $t=0,1$ are immediate, and an empty interior is convex vacuously. If $y\in\operatorname{int}C$ and $x\in C$, then for $0<s\le1$ the open set $(1-s)x+s\operatorname{int}C$ lies in $C$. Hence $(1-s)x+sy$ belongs to its interior. Continuity of the orbit at $s=0$ shows every neighborhood of $x$ contains such a point, so $x\in\overline{\operatorname{int}C}$. [F1, F2, F3]

1.3 Let $C$ be balanced. For $0<|\lambda|\le1$, the homeomorphism $D_\lambda:x\mapsto\lambda x$ carries $\overline C$ onto $\overline{\lambda C}$. Indeed, pull an open neighborhood back by $D_\lambda$ for one inclusion and use its inverse for the other. Since $\lambda C\subseteq C$, the closure test gives $\overline{\lambda C}\subseteq\overline C$. For $\lambda=0$ and $C\ne\varnothing$, balance gives $0\in C$, so $0\overline C=\{0\}\subseteq\overline C$; for empty $C$ the dilation has empty image. Thus the closure is balanced. [F1, F2, F3]

1.4 Suppose $n\ge1$ and each $K_j$ is nonempty. The simplex $\Delta=\{t\in\mathbb R^n:t_j\ge0,\ \sum_jt_j=1\}$ is closed: coordinate maps and their finite sum are continuous, and the conditions are inverse images of closed real rays and $\{1\}$. It is bounded since $0\le t_j\le1$ and $\sum_jt_j^2\le n$. It is compact by Heine–Borel. Finite product compactness makes $\Delta\times\prod_jK_j$ compact. The map $\Phi(t,x)=\sum_jt_jx_j$ is continuous: coordinate projections and inclusions are continuous by preimages of basic opens, scalar multiplication is jointly continuous, and iterating addition preserves continuity. Therefore its image is compact. [F2, F4, F5, F6]

2.1 Every value of $\Phi$ is a convex combination from the union. Conversely, write a hull point as $\sum_{\ell=1}^m a_\ell y_\ell$. Assign each $y_\ell$ the least index $j$ for which $y_\ell\in K_j$, and let $t_j$ be the sum of the weights with that label. For $t_j>0$, their normalized combination $x_j=t_j^{-1}\sum_{\ell\text{ labelled }j}a_\ell y_\ell$ belongs to $K_j$ by finite convexity. For the finitely many zero $t_j$, choose any $x_j\in K_j$ using finite choice. Then $t\in\Delta$ and $\sum_jt_jx_j=\sum_\ell a_\ell y_\ell$. This proves equality of the two sets. [F1, F8, step 1.4]

3.1 The hull is compact by step 1.4 and step 2.1, and Hausdorffness gives closedness. Each singleton is compact since any cover has one member covering its sole point, and convex since its every combination is that point; hence finite point hulls are covered. Delete empty members of a finite family in their original order. If none remain, its union and hull are empty, and the empty subcover proves compactness. For one nonempty convex member the hull is that member. All choices made above are finite. [F1, F7, step 1.4, step 2.1] ∎