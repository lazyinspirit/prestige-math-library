---
id: lem-na-lipschitz-domain-finite-star-shaped-cover
kind: lemma
title: "Finite star-shaped cover of a bounded Lipschitz domain"
status: published
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: [ "thm-heine-borel-rn" ]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Chapters 53–54 (complete course
        notes)"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap53.pdf
      locator: "Chapter 53, §§53.1–53.4: weak Stokes problem, divergence lift and
        inf-sup; Chapter 54, §§54.1–54.2: Fortin criteria and MINI element."
    - title: "Daniele Boffi, Franco Brezzi, Michel Fortin, Mixed Finite Element
        Methods and Applications (complete textbook)"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "Chapter 5, Theorem 5.2.2; Chapter 8, §§8.2, 8.4.2, 8.5.5, 8.6.1 and
        8.7.1."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Let $D\subset\mathbb R^d$ be nonempty, bounded, connected and Lipschitz. Here Lipschitz means that its compact boundary has a finite atlas of rigidly moved cylinders in which $D$ is the strict epigraph $x_d>\varphi(x')$ of a Lipschitz function. There are finitely many bounded open sets $U_i\subset D$ covering $D$, each star-shaped with respect to a closed ball $\overline B_i\subset U_i$, and the graph joining $i,j$ when $U_i\cap U_j\ne\varnothing$ is connected. There are measurable sets $E_i\subset U_i$ partitioning $D$ and, for every edge of a spanning tree of this graph, a function $\psi_{ij}\in C_c^\infty(U_i\cap U_j)$ with integral one.

## Facts & Assumptions

**Given:** A nonempty bounded connected open set with the finite graph-chart definition of Lipschitz boundary stated above.

[F1] A closed bounded subset of $\mathbb R^d$ is compact and every open cover of a compact set has a finite subcover. ([[thm-heine-borel-rn]])

## Proof

1.1 Fix one graph chart, with Lipschitz constant $L$, and a smaller horizontal ball $C$ whose closure lies in its base. Shrink its radius $r$ until the chart's upper height $H_{\rm chart}$ satisfies $H_{\rm chart}-\sup_C\varphi>4(L+1)r$. Choose $c$ with $\sup_C\varphi+3(L+1)r<c<H_{\rm chart}-(L+1)r$ and $0<\rho<r$. Then the closed ball $\overline B((x'_0,c),\rho)$ stays in the cylinder. Set $U=\{(x',x_d):x'\in C,\ \varphi(x')<x_d<H\}$ with $c+\rho<H<H_{\rm chart}$. [given, construct]

2.1 If $x\in U$, $z\in\overline B((x'_0,c),\rho)$, and $w=(1-t)x+tz$ with $0<t<1$, then $z'\in C$ and convexity keeps $w'\in C$. Since $|z'-x'|\le2r$, Lipschitz continuity gives $\varphi(w')\le\varphi(x')+2Lrt$. Also $c-\rho>\sup_C\varphi+2Lr$, so $w_d>(1-t)\varphi(x')+t(c-\rho)>\varphi(x')+2Lrt\ge\varphi(w')$, and $w_d<H$ by convexity of the vertical interval. Thus $w\in U$; the endpoints belong to $U$ as well, proving star-shapedness with respect to the closed ball. [given, algebra, step 1.1]

3.1 The boundary $\partial D$ is closed and bounded, hence compact by [F1]. At any $p\in\partial D$, a chart containing $p$ writes the boundary locally as $x_d=\varphi(x')$, with $p_d=\varphi(p')$ strictly below the chart's upper height. Shrinking a horizontal ball $C$ about $p'$ makes its closure lie in the chart base and makes the height-gap inequality of step 1.1 hold; the choices there then produce a patch $U=\{(x',x_d):x'\in C,\ \varphi(x')<x_d<H\}$ star-shaped with respect to its selected closed ball by step 2.1. Since $p$ lies inside the chart and inside the open set with $x'\in C$ and $x_d<H$, there is an ambient open ball $N$ about $p$ whose closure lies in that chart and open set. For every $x\in N\cap D$, the chart description gives $x_d>\varphi(x')$, so $x\in U$ and $N\cap D\subset U$. Let $\mathscr N$ be the family of all pairs $(N,U)$ obtained this way from the finite chart atlas and admissible local choices; the preceding existence argument shows that its first components cover $\partial D$, without choosing a patch simultaneously for every boundary point. Compactness supplies a finite subfamily $(N_i,U_i)$, $1\le i\le m$, whose neighborhoods cover $\partial D$. Their union is an open neighborhood of the compact boundary, so some relative collar $\{x\in D:\operatorname{dist}(x,\partial D)<\delta\}$ lies in that union and hence in $\bigcup_{i=1}^mU_i$. The remainder $K_\delta=\{x\in\overline D:\operatorname{dist}(x,\partial D)\ge\delta\}$ is closed and bounded, hence compact by [F1], and is contained in $D$ because every point of $\overline D\setminus D$ lies on $\partial D$. Finitely many balls with closures in $D$ cover $K_\delta$; each ball is convex and star-shaped with respect to a smaller concentric ball. Together these sets form a finite star-shaped cover of $D$. [F1, given, step 1.1, step 2.1]

4.1 The intersection graph is connected: if it split into two nonempty graph components, the unions of the corresponding open sets would be disjoint nonempty relatively open subsets whose union is $D$, contradicting connectedness. Order the cover and set $E_i=U_i\setminus\bigcup_{j<i}U_j$. Then the $E_i$ are disjoint measurable sets with $E_i\subset U_i$ and union $D$. A finite connected graph has a spanning tree. [given, step 3.1]

5.1 Each tree-edge intersection is nonempty and open, so it contains a ball. Choose a nonnegative smooth bump supported in that ball. Its integral is strictly positive; dividing by that integral gives $\psi_{ij}\in C_c^\infty(U_i\cap U_j)$ with integral one. [construct, step 4.1] ∎
