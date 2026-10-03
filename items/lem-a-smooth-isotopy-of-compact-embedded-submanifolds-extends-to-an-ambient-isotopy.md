---
id: lem-a-smooth-isotopy-of-compact-embedded-submanifolds-extends-to-an-ambient-isotopy
kind: lemma
title: "A smooth isotopy of a compact manifold extends to an ambient isotopy"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-smooth-embedding, def-smooth-partition-of-unity-on-a-manifold-with-boundary,
       thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary,
       thm-euclidean-tubular-neighbourhood-theorem,
       cor-every-closed-embedded-submanifold-has-a-smooth-neighbourhood-retraction,
       lem-a-vector-field-along-an-embedded-submanifold-extends-to-a-neighbourhood-and-globally-when-closed,
       thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval,
       def-countable-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Julian Chaidez, Notes on Smooth Topology and Symplectic Embedding Problems (Berkeley Geometry REU), Isotopy Extension Theorem 2.39 and Proposition 2.38, printed pp. 35-36"
      url: "https://julianchaidez.net/materials/reu/notes_on_smooth_and_symplectic_topology.pdf"
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $M$ be a compact smooth manifold without
boundary, let $N$ be a smooth manifold, and let
$F\colon M\times I\to N$ be a smooth isotopy such that $F_t:=F(\cdot,t)$ is an
embedding for every $t\in I$. Suppose $F$ is constant near the ends of $I$:
there is $\varepsilon\in(0,\tfrac12)$ with $F(x,t)=F(x,0)$ for $t\le\varepsilon$
and $F(x,t)=F(x,1)$ for $t\ge1-\varepsilon$ and all $x\in M$. Then for every
open neighbourhood $W$ of the image $F(M\times I)$ there is an ambient isotopy
$H\colon N\times I\to N$ such that

$$H_t\circ F_0=F_t\quad\text{for every }t\in I,$$

$H_0=\mathrm{id}_N$, each $H_t$ is a diffeomorphism of $N$, and $H_t$ is the
identity outside $W$ for every $t$. Moreover $H_t=\mathrm{id}_N$ for $t\in[0,\tfrac{\varepsilon}{2}]$ and
$H_t=H_1$ for $t\in[1-\tfrac{\varepsilon}{2},1]$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a compact boundaryless smooth manifold $M$, a smooth manifold $N$, a smooth isotopy $F\colon M\times I\to N$ with every $F_t$ an embedding and $F$ constant on $M\times[0,\varepsilon]\cup M\times[1-\varepsilon,1]$ for some $\varepsilon\in(0,\tfrac12)$, and an open neighbourhood $W$ of $F(M\times I)$ in $N$.

[F1] $\mathrm{AC}_\omega$ is the countable axiom of choice ([[def-countable-choice]]).

[F2] Assume $\mathrm{AC}_\omega$: every open cover of a smooth manifold with boundary admits a smooth partition of unity subordinate to it, and a smooth partition of unity subordinate to a cover $(U_j)_{j\in J}$ is a family $(\phi_j)_{j\in J}$ of smooth functions $M\to[0,1]$ with locally finite supports, $\operatorname{supp}\phi_j\subseteq U_j$ and $\sum_j\phi_j=1$ ([[thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary]], [[def-smooth-partition-of-unity-on-a-manifold-with-boundary]]).

[F4] Assume $\mathrm{AC}_\omega$. For a smooth embedded submanifold $S\hookrightarrow N$ and a smooth vector field $Y$ along $S$: if $S$ is closed in $N$, then there is a global smooth vector field $\widehat Y$ on $N$ with $\widehat Y|_S=Y$ ([[lem-a-vector-field-along-an-embedded-submanifold-extends-to-a-neighbourhood-and-globally-when-closed]]).

[F5] Let $J\subseteq\mathbb R$ be a compact interval and let $X_t$ be a smooth time-dependent vector field on $N$ whose union of supports over $t\in J$ is contained in a compact subset $K\subseteq N$. Then there is a global evolution operator $\Psi_{t,s}\colon N\to N$ for all $s,t\in J$ ([[thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval]]): $\Psi_{s,s}=\mathrm{id}_N$, the cocycle law $\Psi_{u,t}\circ\Psi_{t,s}=\Psi_{u,s}$ holds, each $\Psi_{t,s}$ is smooth, and for fixed $s$ and $p$ the curve $t\mapsto\Psi_{t,s}(p)$ solves $\dot\gamma(t)=X_t(\gamma(t))$.

[F6] A smooth map $F\colon M\to N$ is a smooth embedding when it is injective, an immersion, and a homeomorphism onto its image with the subspace topology ([[def-smooth-embedding]]).

## Proof

**Proof technique:** direct.

1.1 **Compactness of the image and a relatively compact neighbourhood.** If $M=\varnothing$, take $H_t=\mathrm{id}_N$ for every $t$; all extension and support assertions are then immediate. Assume $M\ne\varnothing$. The set $K:=F(M\times I)\subseteq N$ is compact, being the continuous image of the compact space $M\times I$, and it is closed in $N$ because smooth manifolds are Hausdorff. Each point of $K$ has a coordinate ball whose closure is compact and contained in $W$; finitely many of these balls cover $K$, and their union $V$ is an open neighbourhood of $K$ with compact closure $\overline V\subseteq W$. Fix such a $V$. [F1, given, construct]

1.2 **The velocity field along the slices, as a field along a graph.** Extend $F$ to $\mathbb R\times M$ by $F_t=F_0$ for $t<0$ and $F_t=F_1$ for $t>1$. This extension is smooth because the given $F$ is constant on the full endpoint collars of width $\varepsilon$, and every extended slice remains an embedding. Put $J:=\mathbb R$ and consider the map $\Theta\colon J\times M\to J\times N$, $\Theta(t,x):=(t,F_t(x))$, with image $S:=\Theta(J\times M)$. $\Theta$ is injective because its first coordinate is $t$; its derivative at $(t,x)$ equals $(\mathrm{d}t,\partial_tF(x,t)\,\mathrm{d}t+\mathrm{d}(F_t)_x)$, which is injective because $\mathrm{d}(F_t)_x$ is injective by [F6]; and $\Theta$ is proper: for a compact subset $L\subseteq J\times N$, its time projection is compact, and $\Theta^{-1}(L)$ is closed in the compact product of that projection with $M$. The inverse on the image is continuous locally by the embedding property of its slices, or globally by this properness. Its injective derivative therefore makes $S$ a closed embedded submanifold without boundary of $J\times N$, of dimension $1+\dim M$. The constant time extension avoids applying a boundaryless extension theorem to a graph with boundary. The assignment $Y(t,F_t(x)):=\bigl(0,\partial_tF(x,t)\bigr)\in T_{(t,F_t(x))}(J\times N)$ is well defined because each $F_t$ is injective, and it is a smooth vector field along $S$: near a point of $S$ the inverse $y\mapsto x$ of $F_t$ is smooth by [F6], so $Y$ is the composite of smooth maps; along $S$ it is everywhere tangent to the splitting of $T(J\times N)$ into the $J$-direction and $TN$. [F6, given, algebra]

2.1 **Extension and truncation.** By [F4] applied to the closed embedded submanifold $S$ of the smooth manifold $J\times N$, the field $Y$ extends to a global smooth vector field $\widetilde Y$ on $J\times N$ with $\widetilde Y|_S=Y$. Write $\widetilde Y=(a,X)$ in the splitting $T(J\times N)\cong\mathbb R\oplus TN$, so that $X$ is a smooth family $X_t:=X(t,\cdot)$ of vector fields on $N$ with $X_t(F_t(x))=\partial_tF(x,t)$ for all $x\in M$ and $t\in J$. Choose a smooth function $\psi\colon N\to[0,1]$ with $\psi=1$ on a neighbourhood of $K$ and $\operatorname{supp}\psi\subseteq V$: the open sets $V$ and $N\setminus K$ cover $N$ because $K$ is closed, so [F2] applied to this two-element cover produces $\psi$ as the member subordinate to $V$, whose support lies in $V$. The other member has closed support contained in $N\setminus K$; its support complement is an open neighbourhood of $K$ on which that other member vanishes and hence $\psi=1$. Choose a smooth $\beta\colon\mathbb R\to[0,1]$ with $\beta=1$ on $[\varepsilon,1-\varepsilon]$ and $\beta=0$ on $(-\infty,\tfrac{\varepsilon}{2}]\cup[1-\tfrac{\varepsilon}{2},\infty)$, and put $X'_t:=\beta(t)\,\psi\,X_t$ for $t\in J$. Every $X'_t$ is a smooth vector field on $N$ with $\operatorname{supp}X'_t\subseteq\overline V$, so $\bigcup_{t\in I}\operatorname{supp}X'_t\subseteq\overline V$ is compact. [F2, F4, step 1.2, construct]

3.1 **The ambient isotopy.** Apply [F5] on the compact interval $I$ to the family $X'_t$ of step 2.1 and let $\Psi_{t,s}$ be the resulting global evolution operator. Put $H_t:=\Psi_{t,0}$ for $t\in I$. Then $H_0=\mathrm{id}_N$, the map $H\colon N\times I\to N$ is smooth, and each $H_t$ is a diffeomorphism with inverse $H_t^{-1}=\Psi_{0,t}$, by the cocycle law in [F5]. Since $\operatorname{supp}X'_t\subseteq V$ for every $t$, every trajectory of $X'$ starting outside $V$ is constant, so $H_t=\mathrm{id}_N$ on $N\setminus V$ for every $t$; a fortiori $H_t$ is the identity outside $W$, because $V\subseteq W$. Finally $X'_t=0$ whenever $t\le\tfrac{\varepsilon}{2}$ or $t\ge1-\tfrac{\varepsilon}{2}$, because $\beta$ vanishes there. Uniqueness of the evolution with zero velocity gives $\Psi_{t,s}=\mathrm{id}_N$ when $s,t$ belong to either one of those intervals. Starting at time zero therefore gives $H_t=\mathrm{id}_N$ on the initial interval. On the terminal interval the cocycle law gives $H_1=\Psi_{1,t}\circ H_t=H_t$, so the ambient isotopy is stationary at its final map there. [F5, step 2.1]

4.1 **The isotopy identity.** Fix $x\in M$ and consider $\gamma(t):=F_t(x)$. Then $\gamma(0)=F_0(x)$, and for every $t\in I$ the derivative is $\gamma'(t)=\partial_tF(x,t)$. Since $\gamma(t)\in K$ for all $t$, we have $\psi(\gamma(t))=1$, and therefore $X'_t(\gamma(t))=\beta(t)\,\partial_tF(x,t).$ If $t\in[\varepsilon,1-\varepsilon]$ then $\beta(t)=1$ and this equals $\gamma'(t)$; if $t\notin[\varepsilon,1-\varepsilon]$ then either $\beta(t)=0$ or, by the standing hypothesis that $F$ is constant near the ends, $\partial_tF(x,t)=0$; in both cases $X'_t(\gamma(t))=0=\gamma'(t)$. Hence $\gamma$ solves the initial-value problem $\dot\gamma=X'_t(\gamma)$, $\gamma(0)=F_0(x)$, and by the defining property of the evolution operator in [F5] the unique solution is $t\mapsto\Psi_{t,0}(F_0(x))=H_t(F_0(x))$. [F5, step 2.1, step 3.1, algebra]

5.1 **Conclusion.** Step 4.1 gives $H_t\circ F_0=F_t$ for every $t\in I$; step 3.1 gives that $H_0=\mathrm{id}_N$, that every $H_t$ is a diffeomorphism, that $H_t=\mathrm{id}_N$ outside $W$, and that $H_t=\mathrm{id}_N$ for $t\in[0,\tfrac{\varepsilon}{2}]$ and $H_t=H_1$ for $t\in[1-\tfrac{\varepsilon}{2},1]$. Thus $H$ is an ambient isotopy of $N$ extending the isotopy $F$ of $F_0(M)$ and supported in the prescribed neighbourhood $W$. [step 3.1, step 4.1] ∎

## Remarks

- The argument is the standard proof of the isotopy extension theorem: the velocity of the isotopy is read as a vector field along the image of the trajectory $(t,x)\mapsto(t,F_t(x))$, extended to the ambient manifold, truncated to a prescribed neighbourhood, and integrated. The neighbourhood-retraction corollary and the Euclidean tubular-neighbourhood theorem recorded as dependencies of this item are the standard alternative suppliers of the same extension step; the proof above quotes the vector-field extension lemma directly.
- Compactness of $M$ is used twice: to make $F(M\times I)$ compact, so that $W$ may be taken with compact closure and the field truncated, and to make $\Theta$ proper, so that $S$ is closed in $J\times N$ and the extension lemma [F4] applies in its global form.
