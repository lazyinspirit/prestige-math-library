---
id: lem-induced-copies-counted-by-extending-a-deleted-vertex
kind: lemma
title: "The induced copies of $H_1$ in $G$ are counted by summing, over the induced embeddings of $H_1-v$, the number of vertices that extend them at $v$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-induced-copy-number, def-induced-embedding-and-induced-copy, thm-double-counting, def-a-finite-incidence-relation-and-its-fibres, def-sum-over-a-finite-index-set, def-subgraph-induced-subgraph-and-spanning-subgraph, thm-cardinality-of-a-set-of-functions, thm-subset-of-a-finite-set, def-finite-cardinality]
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "M. Chudnovsky, The Erdős–Hajnal Conjecture: A Survey, sec. 2"
      url: "https://arxiv.org/pdf/1606.08827"
pipeline_run: null
---

## Statement

Let $H_1$ be a finite simple graph with $h_1=|V(H_1)|\ge1$, let $v\in V(H_1)$,
write $H_1-v$ for the induced subgraph $H_1[V(H_1)\setminus\{v\}]$, and let $G$
be a finite simple graph with $n=|V(G)|$. For an induced embedding $\varphi$ of
$H_1-v$ into $G$ define its **extension set**

$$X_\varphi:=\{\,u\in V(G)\setminus\varphi[V(H_1)\setminus\{v\}] : \text{the map extending }\varphi\text{ by }v\mapsto u\text{ is an induced embedding of }H_1\text{ into }G\,\}.$$

Then, writing $\Psi$ for the set of induced embeddings of $H_1-v$ into $G$,

$$\operatorname{ind}_{H_1}(G)=\sum_{\varphi\in\Psi}|X_\varphi|,\qquad |\Psi|\le n^{\,h_1-1}.$$

## Facts & Assumptions

**Given:** A finite simple graph $H_1$ with $h_1=|V(H_1)|\ge1$, a vertex $v\in V(H_1)$, and a finite simple graph $G$ with $n=|V(G)|$; the sets $\Phi$ of induced embeddings of $H_1$ into $G$ and $\Psi$ of induced embeddings of $H_1-v$ into $G$.

[F1] An induced embedding of $H$ in $G$ is an injection $\varphi:V(H)\to V(G)$ such that, for all distinct $x,y\in V(H)$, $xy\in E(H)$ if and only if $\varphi(x)\varphi(y)\in E(G)$ ([[def-induced-embedding-and-induced-copy]]).

[F2] $\operatorname{ind}_{H}(G)$ is the number of induced embeddings of $H$ into $G$ ([[def-induced-copy-number]]).

[F3] $H_1[W]=(W,\,E(H_1)\cap[W]^2)$, so two vertices of $W$ are adjacent in $H_1[W]$ exactly when they are adjacent in $H_1$ ([[def-subgraph-induced-subgraph-and-spanning-subgraph]]).

[L1] For finite sets $X,Y$ and a relation $R\subseteq X\times Y$ with row fibres $R_x$ and column fibres $R^{y}$, one has $\sum_{x\in X}|R_x|=|R|=\sum_{y\in Y}|R^{y}|$ ([[thm-double-counting]], [[def-a-finite-incidence-relation-and-its-fibres]]).

[F4] For a finite index set $S$ and a constant $c$, $\sum_{i\in S}c=|S|\cdot c$ ([[def-sum-over-a-finite-index-set]]).

[L2] For finite sets $A$ and $B$, the set $A^{B}$ of functions $B\to A$ is finite with $|A^{B}|=|A|^{|B|}$ ([[thm-cardinality-of-a-set-of-functions]]).

[L3] Every subset of a finite set is finite, and its cardinality is at most that of the set ([[thm-subset-of-a-finite-set]], [[def-finite-cardinality]]).

## Proof

**Proof technique:** direct.

1.1 If $\psi\in\Phi$ then its restriction $\psi'$ to $V(H_1)\setminus\{v\}$ is injective, and for distinct $x,y\in V(H_1)\setminus\{v\}$ the condition $xy\in E(H_1-v)$ is the condition $xy\in E(H_1)$, which holds exactly when $\psi(x)\psi(y)\in E(G)$; so $\psi'\in\Psi$, and it is the only member of $\Psi$ that $\psi$ restricts to. [F1, F3]

1.2 Let $R\subseteq\Psi\times\Phi$ consist of the pairs $(\varphi,\psi)$ whose second entry restricts to the first. Both $\Phi$ and $\Psi$ are sets of functions between finite sets, hence finite. [F1, L2, L3]

2.1 The column fibre of $R$ at $\psi\in\Phi$ has exactly one element by step 1.1, so $\sum_{\psi\in\Phi}|R^{\psi}|=|\Phi|$. [step 1.1, step 1.2, F4]

2.2 The row fibre of $R$ at $\varphi\in\Psi$ is carried bijectively onto $X_\varphi$ by $\psi\mapsto\psi(v)$: the map is injective because $\psi$ is determined by $\varphi$ together with $\psi(v)$, and its image is exactly $X_\varphi$, because a vertex $u$ arises as some $\psi(v)$ precisely when extending $\varphi$ by $v\mapsto u$ gives an induced embedding of $H_1$, and injectivity of that extension is exactly the requirement $u\notin\varphi[V(H_1)\setminus\{v\}]$. [step 1.2, F1, given]

3.1 Double counting $R$ therefore gives $\sum_{\varphi\in\Psi}|X_\varphi|=|R|=|\Phi|=\operatorname{ind}_{H_1}(G)$. [step 2.1, step 2.2, L1, F2]

4.1 Every member of $\Psi$ is a function from $V(H_1)\setminus\{v\}$, a set of $h_1-1$ elements, to $V(G)$, so $\Psi$ is a subset of a set of size $n^{\,h_1-1}$ and $|\Psi|\le n^{\,h_1-1}$. [step 3.1, F1, L2, L3] ∎
