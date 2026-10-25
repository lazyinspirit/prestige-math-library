---
id: "thm-locally-convex-strict-separation"
kind: "theorem"
title: "Uniform strict separation of compact and closed convex sets"
status: published
origin: "pipeline"
deps: ["def-locally-convex-topological-vector-space", "lem-topological-vector-space-translation-scaling-and-absorption", "lem-balanced-convex-zero-neighborhood-refinement", "thm-locally-convex-open-convex-separation", "def-hahn-banach-extension-principle-relative", "def-compact-space", "def-subspace-topology-top", "lem-finite-choice", "thm-compactness-under-continuous-maps"]
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
    - title: "Gerald Teschl, Topics in Real and Functional Analysis (17 November 2017)"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
pipeline_run: "phase-2-next-20"
proof_strategy: "direct"
---

## Statement

Assume HB. Let $K$ be a nonempty compact convex subset and $C$ a nonempty closed convex subset of a locally convex real or complex TVS, with $K\cap C=\varnothing$. There are a nonzero continuous scalar-linear $f$, $\alpha\in\mathbb R$ and $\varepsilon>0$ such that
$$\operatorname{Re}f(k)\le\alpha-\varepsilon<\alpha+\varepsilon\le\operatorname{Re}f(c)\qquad(k\in K,\ c\in C).$$
Hausdorffness is not required.

## Facts & Assumptions

**Given:** HB, the stated TVS, and $K,C$ with the stated hypotheses.

[F1] Convex sets and real parts of the continuous dual have their TVS meanings ([[def-locally-convex-topological-vector-space]]).

[F2] Translations and nonzero dilations are homeomorphisms ([[lem-topological-vector-space-translation-scaling-and-absorption]]).

[F3] Every zero-neighborhood has an open convex refinement ([[lem-balanced-convex-zero-neighborhood-refinement]]).

[F4] Compactness of $K$ means every relative open cover of $K$ has a finite subcover ([[def-compact-space]]).

[F5] Traces of ambient open sets are relatively open; restrictions of continuous maps are continuous ([[def-subspace-topology-top]]).

[F6] Choice for a finite indexed list of nonempty sets is a theorem of ZF ([[lem-finite-choice]]).

[F7] Open convex separation supplies $u(a)<\beta\le u(c)$ for a nonzero continuous scalar-linear functional with real part $u$ ([[thm-locally-convex-open-convex-separation]]).

[F8] A continuous real function on a nonempty compact space attains its maximum ([[thm-compactness-under-continuous-maps]], clause 2).

[A1] HB is explicitly assumed as an additional principle over ZF ([[def-hahn-banach-extension-principle-relative]]).

## Proof

1.1 Consider all pairs $(k,N)$ with $k\in K$ and $N$ an open convex zero-neighborhood such that $k+N\subseteq X\setminus C$. There is such a pair above every $k$: since $C$ is closed, $(X\setminus C)-k$ is an open zero-neighborhood, and it admits an open convex refinement. Each $G_{k,N}=K\cap(k+\tfrac12N)$ is open in $K$ and contains $k$. The family of all such sets covers $K$; it is defined by a property, without choosing a neighborhood for every $k$. [F2, F3, F5]

2.1 Compactness gives finitely many cover members $G_1,\ldots,G_m$ with $m\ge1$. For each $j$ its set of representing pairs $(k,N)$ is nonempty. Finite choice gives representatives $(k_j,N_j)$ for this finite list. Put $W=\bigcap_{j=1}^m\tfrac12N_j$. It is an open convex zero-neighborhood. [F1, F2, F4, F6, step 1.1]

3.1 For $k\in K$, some $j$ has $k=k_j+n/2$ with $n\in N_j$. If $w\in W$, write $w=n'/2$ with $n'\in N_j$. Convexity gives $n/2+n'/2\in N_j$, so $k+w\in k_j+N_j\subseteq X\setminus C$. Therefore $(K+W)\cap C=\varnothing$. The set $K+W$ is nonempty and open as a union of translates of $W$, and convex because the convex combinations of its $K$ and $W$ components stay in those respective sets. [F1, F2, step 1.1, step 2.1]

4.1 Apply open separation to $K+W$ and $C$, using HB once. Obtain a nonzero continuous scalar-linear $f$ and $\beta\in\mathbb R$ such that $u(k+w)<\beta\le u(c)$, where $u=\operatorname{Re}f$. The restriction $u|_K$ is continuous, since real part is continuous and restrictions are continuous. It attains a maximum $d=u(k_*)$ for some $k_*\in K$. Since $0\in W$, the strict inequality at $k_*+0$ gives $d<\beta$. This attainment step turns pointwise strict separation into a uniform gap. [F1, F5, F7, F8, A1, step 3.1]

5.1 Put $\alpha=(d+\beta)/2$ and $\varepsilon=(\beta-d)/2>0$. Then $\alpha-\varepsilon=d$ and $\alpha+\varepsilon=\beta$, so $u(k)\le d=\alpha-\varepsilon<\alpha+\varepsilon=\beta\le u(c)$ for all $k,c$. A singleton $K$ is allowed and simply has its sole value as the maximum. Nonemptiness of $K$ is used for attainment and of $C$ in open separation; no other separation axiom or choice principle is used. [step 4.1, algebra] ∎