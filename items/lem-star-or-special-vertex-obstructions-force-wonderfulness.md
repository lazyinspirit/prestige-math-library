---
id: lem-star-or-special-vertex-obstructions-force-wonderfulness
kind: lemma
title: "Star and special-vertex obstructions force wonderfulness"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-wonderful-finite-family, lem-the-auxiliary-pattern-has-a-polynomial-homogeneous-set-under-the-source-hypotheses, lem-a-polynomial-homogeneous-set-in-the-auxiliary-pattern-yields-a-y-four-restricted-union]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Lemma 2.1"
      url: "https://arxiv.org/html/2606.06258v2"
pipeline_run: null
---

## Statement

Let $\mathcal F$ be a finite family of finite graphs. Assume one of the
following.

1. There exist $F_\star\in\mathcal F$ and an integer $t\ge1$ such that
   $F_\star$ is an induced subgraph of the $1$-subdivision of $K_{1,t}$.
2. There exist a graph $H$ on vertex set $[q]$ with $12\in E(H)$, with
   distinguished vertices $1,2$, such that $\{H\}\cup\overline{\mathcal F}$ has
   the Erdős-Hajnal property and $H^+$ is not $\overline{\mathcal F}$-free.

Then $\mathcal F$ is wonderful.

## Facts & Assumptions

**Given:** A finite family $\mathcal F$ satisfying one of the two hypotheses in the Statement.

[L1] To prove that $\mathcal F$ is wonderful, it suffices to exhibit a constant $a\ge6$ with the two-outcome property recorded in the definition of wonderfulness ([[def-wonderful-finite-family]]).

[L2] Under either obstruction hypothesis, the auxiliary graph on the blocks with $0<|N_G(v)\cap B_i|<\tfrac12|B_i|$ for a fixed outside vertex has a clique or stable set of size at least a positive power of its order ([[lem-the-auxiliary-pattern-has-a-polynomial-homogeneous-set-under-the-source-hypotheses]]).

[L3] A polynomial-size clique or stable set in that auxiliary graph yields a $y^4$-restricted union of whole blocks ([[lem-a-polynomial-homogeneous-set-in-the-auxiliary-pattern-yields-a-y-four-restricted-union]]).

## Proof

**Proof technique:** follow the source route through the auxiliary graph, but keep the counting and obstruction lifts explicit.

1.1 Choose $a_0:=1$ in case 1. In case 2, let $a_0$ be the maximum order of a graph in $\{H\}\cup\overline{\mathcal F}$. By [L2], fix a constant $c\in(0,1)$ suitable for the corresponding obstruction hypothesis, and then choose $a\ge \max\{6,a_0,5/c+1\}$. [L2, given, choose]

1.2 Let $y\in(0,\tfrac12)$, let $G$ be a $\overline{\mathcal F}$-free graph, and let $\mathcal B=(B_1,\dots,B_\ell)$ be an $(\ell,w)$-blockade satisfying the hypotheses from [L1] for the constant $a$. For each outside vertex $x\in V(G)\setminus V(\mathcal B)$, define $I(x):=\{i\in[\ell]:0<|N_G(x)\cap B_i|<\tfrac12|B_i|\}$. Suppose first that $|I(x)|\le y\ell$ for every such $x$. Then the number of pairs $(x,i)$ with $x\in V(G)\setminus V(\mathcal B)$ and $i\in I(x)$ is at most $y\ell|V(G)\setminus V(\mathcal B)|\le y\ell|V(G)|$. Averaging over the $\ell$ indices, some $i\in[\ell]$ is contained in at most $y|V(G)|$ of the sets $I(x)$. That is exactly the second conclusion from [L1]. [L1, given, algebra]

2.1 It remains to consider the opposite case. Choose $v\in V(G)\setminus V(\mathcal B)$ with $|I(v)|\ge y\ell$. Let $\rho:[s]\to I(v)$ be the increasing bijection, where $s=|I(v)|$, put $C_j:=B_{\rho(j)}$, and form the auxiliary graph $J$ on $[s]$ by $ij\in E(J)$ if and only if $C_i$ is complete to $C_j$. The reordered family of blocks still has equal size, still satisfies $s\ge y\ell$, and still satisfies the pairwise complete-or-mutually-$y^a$-sparse hypothesis. Therefore [L2] applies and gives a clique or stable set $R\subseteq[s]$ with $|R|\ge s^c$. [step 1.1, L2, choose]

3.1 Put $R':=\rho(R)\subseteq I(v)$. In the auxiliary graph on the original index set $I(v)$, the set $R'$ is a clique or stable set with $|R'|=|R|\ge |I(v)|^c$. The original blockade $\mathcal B$ has length $\ell\ge y^{-a}$, the subset $I(v)$ has size at least $y\ell$, and $a\ge5/c+1$. Thus [L3] applies to $\mathcal B$, $I(v)$, and $R'$. It follows that $\bigcup_{i\in R'}B_i$ induces a $y^4$-restricted subgraph of $G$ whose size is at least the common block size, and therefore at least the width $w$ of $\mathcal B$. This is the first conclusion from [L1]. [step 1.1, step 2.1, L1, L3]

4.1 Step 1.2 gives the second wonderfulness outcome when no outside vertex belongs to many index sets $I(x)$, and step 3.1 gives the first outcome otherwise. Thus the constant $a$ from step 1.1 satisfies [L1], so $\mathcal F$ is wonderful. [L1, step 1.2, step 3.1] ∎
