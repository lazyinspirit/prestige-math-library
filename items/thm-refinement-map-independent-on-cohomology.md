---
id: "thm-refinement-map-independent-on-cohomology"
kind: "theorem"
title: "Refinement choices induce the same Čech map"
status: published
origin: pipeline
deps: [def-refinement-open-cover, lem-increasing-cech-complex-extends-to-alternating-tuples, thm-chain-homotopic-maps-induce-the-same-map-on-homology, def-chain-homotopy, def-cochain-complex-in-an-abelian-category, def-cohomology-object-of-a-cochain-complex, def-cech-cohomology-open-cover, def-section-restriction-and-global-section]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Cohomology of Sheaves"
      url: https://stacks.math.columbia.edu/download/cohomology.pdf
    - title: "Jiahui Gao and Shuwu Zhang, Lectures on Algebraic Geometry"
      url: https://web.math.princeton.edu/~shouwu/publications/LAG2.pdf
verification:
  audited: 2026-09-27
---

## Statement

Let $X$ be a topological space, let $\mathcal F$ be a sheaf of abelian groups
on $X$, and let $\mathcal U=(U_i)_{i\in I}$ and $\mathcal V=(V_j)_{j\in J}$ be open
covers of $X$ indexed by linearly ordered sets, with fixed-cover Čech cohomology
$\check H^\bullet$ ([[def-cech-cohomology-open-cover]]). Let $c,c':J\to I$ be two
refinement functions from $\mathcal V$ to $\mathcal U$
([[def-refinement-open-cover]]) and let $c^\sharp,c'^\sharp:
C^\bullet(\mathcal U,\mathcal F)\to C^\bullet(\mathcal V,\mathcal F)$ be the
induced cochain maps. Then $c^\sharp$ and $c'^\sharp$ are chain-homotopic
([[def-chain-homotopy]]), and consequently they induce the same homomorphism
$$\check H^p(\mathcal U,\mathcal F)\longrightarrow\check H^p(\mathcal V,\mathcal F)$$
for every $p$.

Explicitly, the homotopy is the family of degree $(-1)$ maps
$$(h^ps)_{j_0\cdots j_{p-1}}:=\sum_{a=0}^{p-1}(-1)^a\,s_{c(j_0)\cdots c(j_a)\,c'(j_a)\cdots c'(j_{p-1})}\Big|_{V_{j_0}\cap\cdots\cap V_{j_{p-1}}}$$
for $p\ge1$, and $h^0:=0$, where $s$ is evaluated at the displayed tuple of
$p+1$ $U$-indices in the alternating model
([[lem-increasing-cech-complex-extends-to-alternating-tuples]]); it satisfies
$$\delta^{\mathcal V}\circ h^p+h^{p+1}\circ\delta^{\mathcal U}=c'^\sharp-c^\sharp$$
as maps $C^p(\mathcal U,\mathcal F)\to C^p(\mathcal V,\mathcal F)$, for every
$p\ge0$. In particular the refinement maps on cohomology do not depend on the
choice of the refinement function.

## Facts & Assumptions

[F1] $(c^\sharp s)_{j_0\cdots j_p}=s_{c(j_0)\cdots c(j_p)}|_{V_{j_0}\cap\cdots\cap V_{j_p}}$, evaluated in the alternating model of $\mathcal U$, and $c^\sharp$ commutes with the differentials ([[def-refinement-open-cover]]).

[F2] A refinement function from $\mathcal V$ to $\mathcal U$ satisfies $V_j\subseteq U_{c(j)}$ for every $j\in J$ ([[def-refinement-open-cover]]).

[F3] An ordered cochain $t\in C^p(\mathcal U,\mathcal F)$ extends to the alternating family with $(e^pt)_K=\operatorname{sgn}(\tau_K)\,t_{i_{\tau_K(0)}\cdots i_{\tau_K(p)}}$ on tuples $K=(i_0,\dots,i_p)$ of pairwise distinct indices, so $t$ may be evaluated at an arbitrary tuple of $U$-indices ([[lem-increasing-cech-complex-extends-to-alternating-tuples]]).

[F4] A chain homotopy $s:f\simeq g$ between chain maps consists of degree $1$ morphisms $s_n$ with $f_n-g_n=d^D_{n+1}s_n+s_{n-1}d^C_n$ for every $n$ ([[def-chain-homotopy]]).

[F5] A cochain complex is read as a chain complex by the reindexing convention $(C^\sharp)_n:=C^{-n}$, $d^\sharp_n:=d^{-n}$ ([[def-cochain-complex-in-an-abelian-category]]).

[F6] Chain-homotopic chain maps $f,g$ induce the same map on homology: $H_n(f)=H_n(g)$ for every $n$ ([[thm-chain-homotopic-maps-induce-the-same-map-on-homology]]).

[F7] $\check H^p(\mathcal U,\mathcal F)=\ker(\delta^p)/\operatorname{im}(\delta^{p-1})$ is the cohomology of the ordered Čech complex ([[def-cech-cohomology-open-cover]]).

[F8] Restrictions are compatible and are group homomorphisms: $(s|_V)|_W=s|_W$ for $W\subseteq V\subseteq U$ ([[def-section-restriction-and-global-section]]).

[F9] The $n$-th cohomology object of a cochain complex is $H^n(C)=\operatorname{coker}(B^n(C)\to Z^n(C))$ ([[def-cohomology-object-of-a-cochain-complex]]).

## Proof

**Given:** A topological space $X$, a sheaf of abelian groups $\mathcal F$ on it, open covers $\mathcal U=(U_i)_{i\in I}$, $\mathcal V=(V_j)_{j\in J}$ indexed by linearly ordered sets and two refinement functions $c,c':J\to I$ from $\mathcal V$ to $\mathcal U$.

1.1 Let $c^\sharp,c'^\sharp$ be the cochain maps of the two refinement functions, so that $V_j\subseteq U_{c(j)}$ and $V_j\subseteq U_{c'(j)}$ for every $j\in J$ [F2] and the displayed formula of [F1] applies to both. For $p\ge1$ define $h^p:C^p(\mathcal U,\mathcal F)\to C^{p-1}(\mathcal V,\mathcal F)$ on increasing tuples by the formula of the statement, and set $h^0:=0$. This is well defined: for a tuple $J=(j_0,\dots,j_{p-1})$ the tuple $M_a:=(c(j_0),\dots,c(j_a),c'(j_a),\dots,c'(j_{p-1}))$ has $p+1$ entries, so $s$ may be evaluated there in the alternating model [F3], and $V_{j_0}\cap\cdots\cap V_{j_{p-1}}\subseteq U_{c(j_b)}$ and $\subseteq U_{c'(j_b)}$ for every $b$ by [F2], so the restriction lands in $\mathcal F(V_{j_0}\cap\cdots\cap V_{j_{p-1}})$; the map is additive in $s$ because evaluation and restriction are homomorphisms [F8]. [F1, F2, F3, F8]

1.2 Fix a tuple $J=(j_0,\dots,j_p)$ of pairwise distinct indices and suppress the restrictions to $V_{j_0}\cap\cdots\cap V_{j_p}$, which are compatible [F8]. Put $M_a:=(c(j_0),\dots,c(j_a),c'(j_a),\dots,c'(j_p))$ for $0\le a\le p$, a tuple of $p+2$ $U$-indices, and for $0\le a\le p-1$ and $0\le b\le p$ let $N_{a,b}:=M_a(J\setminus b)$ be the mixed tuple formed from the tuple $J$ with the $b$-th entry deleted, so that $N_{a,b}$ has $p+1$ entries. Expanding the definitions, $(h^{p+1}\delta^{\mathcal U}s)_J=\sum_{a=0}^{p}\sum_{i=0}^{p+1}(-1)^{a+i}s_{M_a\setminus i}$ and $(\delta^{\mathcal V}h^ps)_J=\sum_{a=0}^{p-1}\sum_{b=0}^{p}(-1)^{a+b}s_{N_{a,b}}$, where $M_a\setminus i$ is $M_a$ with the entry at position $i$ removed. Comparing entries gives $N_{a,b}=M_{a+1}\setminus b$ when $b\le a$ and $N_{a,b}=M_a\setminus(b+1)$ when $b>a$: deleting $j_b$ from $J$ and then forming the mixed tuple of split $a$ removes the entry $c(j_b)$, which occupies position $b$ of $M_{a+1}$, in the first case, and removes the entry $c'(j_b)$, which occupies position $b+1$ of $M_a$, in the second. [F1, F3]

2.1 Match the terms of the two sums. If $i<a$ then the pair $(a-1,i)$ of the second sum is admissible and contributes $N_{a-1,i}=M_a\setminus i$ with coefficient $(-1)^{a-1+i}=-(-1)^{a+i}$, cancelling the term $(-1)^{a+i}s_{M_a\setminus i}$ of the first sum; if $i>a+1$ then $a\le p-1$ and the pair $(a,i-1)$ of the second sum is admissible with $i-1>a$, contributing $N_{a,i-1}=M_a\setminus i$ with coefficient $(-1)^{a+i-1}=-(-1)^{a+i}$ and cancelling the same term. Conversely every term of the second sum is covered: a term $N_{a,b}$ with $b\le a$ is the term $M_{a+1}\setminus b$ of the first sum with $b\le a<a+1$, and a term with $b>a$ is the term $M_a\setminus(b+1)$ of the first sum with $b+1>a+1$. Hence in the sum $(h^{p+1}\delta^{\mathcal U}s)_J+(\delta^{\mathcal V}h^ps)_J$ all terms cancel in pairs except the terms of the first sum with $i=a$ and $i=a+1$, that is $s_{M_a\setminus a}$ and $-s_{M_a\setminus(a+1)}$ for $0\le a\le p$. [F1, step 1.2]

3.1 It remains to identify the surviving terms. For $0\le a\le p$ the tuple $M_a\setminus a$ deletes the entry $c(j_a)$ at position $a$ of $M_a$ and hence equals $Q_a:=(c(j_0),\dots,c(j_{a-1}),c'(j_a),\dots,c'(j_p))$, while $M_a\setminus(a+1)$ deletes the entry $c'(j_a)$ at position $a+1$ of $M_a$ and hence equals $Q_{a+1}=(c(j_0),\dots,c(j_a),c'(j_{a+1}),\dots,c'(j_p))$; in particular $Q_0=(c'(j_0),\dots,c'(j_p))$ and $Q_{p+1}=(c(j_0),\dots,c(j_p))$. Therefore the surviving terms telescope: $(h^{p+1}\delta^{\mathcal U}s)_J+(\delta^{\mathcal V}h^ps)_J=\sum_{a=0}^{p}s_{Q_a}-\sum_{a=0}^{p}s_{Q_{a+1}}=s_{Q_0}-s_{Q_{p+1}}=s_{c'(j_0)\cdots c'(j_p)}-s_{c(j_0)\cdots c(j_p)}=(c'^\sharp s)_J-(c^\sharp s)_J$, the last equality by the formula of the cochain maps [F1] restricted to $V_{j_0}\cap\cdots\cap V_{j_p}$ [F8]. [F1, F8, step 2.1]

4.1 Since $J$ was an arbitrary tuple of pairwise distinct indices, the identity $\delta^{\mathcal V}h^p+h^{p+1}\delta^{\mathcal U}=c'^\sharp-c^\sharp$ holds as maps $C^p(\mathcal U,\mathcal F)\to C^p(\mathcal V,\mathcal F)$ for every $p\ge0$: for $p=0$ the first sum is empty because $h^0=0$, and the second sum consists of the two surviving terms $Q_0,Q_1$ found in [step 2.1] and [step 3.1], which is the same computation. Reading the two cochain complexes as chain complexes by the reindexing convention [F5] and the family $h$ as a degree $+1$ map, this identity is exactly the chain-homotopy relation $f_n-g_n=d^D_{n+1}s_n+s_{n-1}d^C_n$ of [F4] for $f=c'^\sharp$, $g=c^\sharp$ and $s=h$, so $c^\sharp$ and $c'^\sharp$ are chain-homotopic. By homotopy invariance [F6] they induce the same map on $H_n$ for every $n$, that is the same map on $\check H^p(\mathcal U,\mathcal F)\to\check H^p(\mathcal V,\mathcal F)$ for every $p$, since $\check H^p$ is the $p$-th cohomology object [F7] of the Čech complex, computed as a cokernel of cocycles by coboundaries [F9]. ∎ [F4, F5, F6, F7, F9]
