---
id: lem-compactness-allows-a-cutoff-to-produce-a-compactly-supported-time-dependent-field
kind: lemma
title: "Compactness gives a compactly supported time-dependent velocity field"
status: draft
origin: session
dependency_level: 7
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-compactness-of-a-subspace-is-ambient,
       lem-an-isotopy-velocity-field-extends-over-a-tubular-neighbourhood,
       def-time-dependent-vector-field-and-evolution-operator,
       def-smooth-section-local-section-and-support,
       thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary,
       thm-smooth-urysohn-lemma-for-a-closed-set-in-an-open-set,
       def-compact-space,
       def-countable-choice,
       lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure,
       def-embedded-submanifold-and-slice-chart,
       prop-smooth-maps-are-continuous]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Morris W. Hirsch, Differential Topology (Graduate Texts in Mathematics 33, Springer 1976; full text retrieved from the Internet Archive Wayback Machine snapshot of the luis.impa.br course copy), Chapter 8 “Isotopy”, §1, printed pp. 177–183 (Theorems 1.1–1.8 and Exercises 3, 7, 9, 10, 11, 16, printed pp. 182–184)"
      url: "https://web.archive.org/web/20230823153633/https://luis.impa.br/aulas/anvar/Hirsch_DifferentialTopology.pdf"
    - title: "Julian Chaidez, Notes on Smooth Topology and Symplectic Embedding Problems (Berkeley Geometry REU), Proposition 2.38 (Picard–Lindelöf for time-dependent fields) and Theorem 2.39 (isotopy extension), printed pp. 35–36"
      url: "https://julianchaidez.net/materials/reu/notes_on_smooth_and_symplectic_topology.pdf"
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $M$ be a compact smooth manifold, $N$ a smooth manifold, and let $F:M\times I\to N$ be a smooth isotopy of embeddings that is **constant near the ends**: for some $\varepsilon\in(0,\tfrac12)$, $F(x,t)=F(x,0)$ for all $x$ and $t\le\varepsilon$, and $F(x,t)=F(x,1)$ for all $x$ and $t\ge1-\varepsilon$. Let $W\subseteq N$ be an open neighbourhood of the compact image $F(M\times I)$ with $\overline W$ compact. Then there is a smooth horizontal map $G:N\times I\to TN$ with $G(y,t)\in T_yN$, whose time-first version $H(t,y):=G(y,t)$ is a time-dependent vector field on $N$ ([[def-time-dependent-vector-field-and-evolution-operator]]), such that:

1. $\bigcup_{t\in I}\operatorname{supp}G_t$ is contained in a compact subset of $W$, where $G_t=G(\cdot,t)$; its closure is therefore compact;
2. $G_t(F(x,t))=\partial_tF(x,t)$ for every $(x,t)\in M\times I$;
3. $G_t=0$ for $t\le\varepsilon/2$ and for $t\ge1-\varepsilon/2$.

## Facts & Assumptions

**Given:** Countable choice, a compact $M$, a smooth isotopy $F$ constant near the ends with parameter $\varepsilon$, a compact image $F(M\times I)$ and an open neighbourhood $W$ of it with $\overline W$ compact.

[F1] The track $S=\overline F(M\times I)$ is a compact closed smoothly embedded track in $N\times I$, with time endpoint faces; the horizontal velocity $Y$ is a smooth vector field along $S$ with values in $TN\oplus0$; the projection of $S$ to $N$ is the compact image $F(M\times I)$ ([[lem-an-isotopy-velocity-field-extends-over-a-tubular-neighbourhood]], [[prop-smooth-maps-are-continuous]]).

[L1] Under $\mathrm{AC}_\omega$ the velocity extends to a smooth horizontal map $\widetilde Y:\Omega\to TN$ on an open neighbourhood $\Omega$ of $S$, and for every open neighbourhood of $S$ such an extension exists with $\Omega$ inside it ([[lem-an-isotopy-velocity-field-extends-over-a-tubular-neighbourhood]]).

[L2] Compact subsets admit finite subcovers from ambient open covers ([[lem-compactness-of-a-subspace-is-ambient]]). In a locally compact Hausdorff space every point has basic open neighbourhoods with compact closure; a smooth manifold is locally compact Hausdorff ([[lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure]], [[def-embedded-submanifold-and-slice-chart]]).

[L3] A compact set inside an open set admits a smooth cutoff equal to one near that set, with support in the open set. On $N\times I$ take finitely many restricted Euclidean chart bumps as in [[lem-an-isotopy-velocity-field-extends-over-a-tubular-neighbourhood]], step 1.1, equal to one on smaller chart neighbourhoods covering the compact set. Compose their sum with a smooth scalar function zero near zero and one above $1/2$. This finite construction applies also at product corners. The boundaryless and boundary suppliers are [[thm-smooth-urysohn-lemma-for-a-closed-set-in-an-open-set]] and [[thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary]].

[L4] A time-dependent vector field on $N$ over $I$ is a smooth map $H:I\times N\to TN$ with $H(t,y)\in T_yN$. Its space-first representation is $G(y,t):=H(t,y)$, with slices $G_t=H(t,\cdot)$; $\operatorname{supp}G_t$ is the support of the section $G_t$ ([[def-time-dependent-vector-field-and-evolution-operator]], [[def-smooth-section-local-section-and-support]], [[def-compact-space]]).

[A1] Countable choice is used exactly for the cutoffs and the partition-of-unity selections of [L1] and [L3]; no further selection is made ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 A relatively compact neighbourhood of the track inside $W\times I$: $S$ is compact by [F1] and $S\subseteq F(M\times I)\times I\subseteq W\times I$, which is open. Since $N\times I$ is locally compact Hausdorff and $S$ is compact, [L2] applied at each point of $S$ yields finitely many open sets with compact closure covering $S$ and contained in $W\times I$; their union $\Omega_0$ is an open neighbourhood of $S$ with $\overline{\Omega_0}$ compact and $\overline{\Omega_0}\subseteq W\times I$. [F1, L2]

1.2 Choose a smooth cutoff $\psi:N\to[0,1]$ with $\psi=1$ on the compact image $F(M\times I)$ and $\operatorname{supp}\psi\subseteq W$ by [L3], applied to the closed set $F(M\times I)$ inside the open set $W$; and choose a smooth function $\beta:I\to[0,1]$ with $\beta=1$ on $[\varepsilon,1-\varepsilon]$ and $\beta=0$ on $[0,\varepsilon/2]\cup[1-\varepsilon/2,1]$, which exists by the smooth Urysohn lemma on the interval. [L3, A1]

2.1 Apply [L1] with the prescribed neighbourhood $\Omega_0$: there is an open neighbourhood $\Omega\subseteq\Omega_0$ of $S$ and a smooth horizontal $\widetilde Y:\Omega\to TN$ extending $Y$. By [L3] applied to the closed set $S$ inside the open set $\Omega$, choose a smooth cutoff $\rho:N\times I\to[0,1]$ with $\rho=1$ on a neighbourhood of $S$ and $\operatorname{supp}\rho\subseteq\Omega$. [L1, L3, step 1.1]

3.1 Define $G$ on $\Omega$ by $G(y,t):=\rho(y,t)\,\beta(t)\,\psi(y)\,\widetilde Y(y,t)$, and define $G:=0$ on the complement of the closed set $\operatorname{supp}(\rho\beta\psi)\subseteq\Omega$. The two definitions agree on the overlap, where $\rho\beta\psi=0$, so $G$ is a well-defined smooth map on all of $N\times I$: at a point outside $\operatorname{supp}(\rho\beta\psi)$ it vanishes on a whole neighbourhood, and on $\Omega$ it is a product of smooth functions with the smooth map $\widetilde Y$. It lies in $T_yN$ at $(y,t)$ by construction. Thus $H:I\times N\to TN$, $H(t,y):=G(y,t)$, is smooth by composition with the factor-swap map and has $H(t,y)\in T_yN$, so it is a time-dependent vector field on $N$ by [L4], with slices $H_t=G_t$. [L1, L4, step 1.2, step 2.1, construct]

4.1 Clause 2: let $(x,t)\in M\times I$. Since $\overline F(x,t)\in S$ and $\rho=1$ near $S$ and $\psi=1$ on $F(M\times I)$, one has $\rho\beta\psi\,\widetilde Y(\overline F(x,t))=\beta(t)\,\partial_tF(x,t)$. The isotopy is constant near the ends, so $\partial_tF(x,t)=0$ for $t\le\varepsilon$ and for $t\ge1-\varepsilon$, while $\beta=1$ on $[\varepsilon,1-\varepsilon]$; in all cases $\beta(t)\,\partial_tF(x,t)=\partial_tF(x,t)$. Hence $G_t(F(x,t))=\partial_tF(x,t)$. [F1, step 1.2, step 3.1]

4.2 Clause 3: for $t\le\varepsilon/2$ and for $t\ge1-\varepsilon/2$ one has $\beta(t)=0$, so $G_t=\rho\beta\psi\widetilde Y(\cdot,t)=0$ by step 3.1. [step 1.2, step 3.1]

4.3 Put $K:=\operatorname{pr}_N(\operatorname{supp}\rho)$. The support of $\rho$ is closed and contained in the compact set $\overline{\Omega_0}$, so it is compact, and its continuous projection $K$ is compact and contained in $W$. Off $K$ the field $G_t$ vanishes for every $t$. Since $K$ is closed, every $\operatorname{supp}G_t$ lies in $K$. Thus their union and its closure lie in the compact subset $K\subseteq W$, proving clause 1. Containment alone would not prove that the union itself is closed. [L4, step 1.1, step 2.1, step 3.1]

5.1 Clauses 1, 2 and 3 are steps 4.3, 4.1 and 4.2; the field is smooth and horizontal, and countable choice was used only as declared in [A1]. [step 3.1, step 4.1, step 4.2, step 4.3] ∎
