---
id: thm-substitution-preserves-the-erdos-hajnal-property
kind: theorem
title: "Alon–Pach–Solymosi: if $H_1$ and $H_2$ have the Erdős–Hajnal property, so does the graph obtained from $H_1$ by substituting $H_2$ for a vertex"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-substitution-of-a-graph-for-a-vertex, def-erdos-hajnal-property-and-constant, def-homogeneous-set-and-homogeneous-number, def-clique-stable-set-and-numbers, lem-a-large-set-contains-a-pattern-when-the-homogeneous-number-is-small, lem-supersaturation-for-induced-copies, lem-induced-copies-counted-by-extending-a-deleted-vertex, lem-a-pattern-inside-an-extension-set-produces-the-substitution, cor-the-averaging-principle, def-h-free-and-family-free-graph, lem-forbidden-induced-subgraph-classes-are-hereditary, def-induced-copy-number, def-induced-embedding-and-induced-copy, def-subgraph-induced-subgraph-and-spanning-subgraph, def-real-power, thm-real-power-laws, thm-natural-logarithm-laws, thm-exponential-is-strictly-increasing, def-logarithm-to-a-base, thm-of-archimedean, thm-well-ordering-principle]
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. Chudnovsky, The Erdős–Hajnal Conjecture: A Survey, Theorem 2.2"
      url: "https://arxiv.org/pdf/1606.08827"
    - title: "T. Huang, Y. Ju and R. Zhou, Erdős–Hajnal beyond the five-vertex path, Theorem 1.4"
      url: "https://arxiv.org/pdf/2606.06258v2"
pipeline_run: null
---

## Statement

Let $H_1$ and $H_2$ be finite simple graphs with the Erdős–Hajnal property, let
$v\in V(H_1)$, and suppose the substitution $H=H_1[v\to H_2]$ is defined
([[def-substitution-of-a-graph-for-a-vertex]]). Then $H$ has the Erdős–Hajnal
property.

## Facts & Assumptions

**Given:** Finite simple graphs $H_1,H_2$ with the Erdős–Hajnal property, a vertex $v\in V(H_1)$, and the substitution $H=H_1[v\to H_2]$; write $h=|V(H_1)|$, so $h\ge1$.

[F1] A real $\epsilon>0$ is an Erdős–Hajnal constant for a hereditary class $\mathcal C$ when every nonempty $J\in\mathcal C$ satisfies $\operatorname{hom}(J)\ge|V(J)|^{\epsilon}$; a finite graph $K$ has the Erdős–Hajnal property when the class of $K$-free graphs has such a constant ([[def-erdos-hajnal-property-and-constant]]).

[F2] $\operatorname{hom}(G)=\max\{\omega(G),\alpha(G)\}$, where $\omega(G)$ and $\alpha(G)$ are the largest cardinalities of a clique and of a stable set of $G$ ([[def-homogeneous-set-and-homogeneous-number]], [[def-clique-stable-set-and-numbers]]).

[F3] $G$ is $K$-free when $G$ has no induced copy of $K$, an induced copy being the image of an induced embedding ([[def-h-free-and-family-free-graph]], [[def-induced-embedding-and-induced-copy]]).

[L1] For every family $\mathcal F$ of finite graphs, the class of $\mathcal F$-free finite graphs is hereditary ([[lem-forbidden-induced-subgraph-classes-are-hereditary]]).

[L2] If $\epsilon>0$ is an Erdős–Hajnal constant for the class of $K$-free graphs and $W\subseteq V(G)$ is nonempty with $|W|^{\epsilon}>\operatorname{hom}(G)$, then $G[W]$ has an induced copy of $K$ ([[lem-a-large-set-contains-a-pattern-when-the-homogeneous-number-is-small]]).

[L3] If $h\le m\le n=|V(G)|$ and every $m$-element $W\subseteq V(G)$ has an $h$-element subset $S$ with $G[S]\cong H_1$, then the number of $h$-element sets $S\subseteq V(G)$ with $G[S]\cong H_1$ is at least $(n-h+1)^{h}/m^{h}$ ([[lem-supersaturation-for-induced-copies]]).

[L4] With $\Psi$ the set of induced embeddings of $H_1-v$ into $G$ and $X_\varphi$ the extension set of $\varphi\in\Psi$, one has $\operatorname{ind}_{H_1}(G)=\sum_{\varphi\in\Psi}|X_\varphi|$ and $|\Psi|\le n^{\,h-1}$ ([[lem-induced-copies-counted-by-extending-a-deleted-vertex]]).

[L5] If $\varphi\in\Psi$ and $\psi$ is an induced embedding of $H_2$ into $G$ whose image lies in $X_\varphi$, then $G$ has an induced copy of $H=H_1[v\to H_2]$ ([[lem-a-pattern-inside-an-extension-set-produces-the-substitution]]).

[L6] For finite sets $X\ne\varnothing$ and $Y$ and a relation $R\subseteq X\times Y$ with row fibres $R_x$, there is $x_{+}\in X$ with $|R_{x_{+}}|\ge|R|/|X|$ ([[cor-the-averaging-principle]]).

[F4] $\operatorname{ind}_{K}(G)$ is the number of induced embeddings of $K$ into $G$ ([[def-induced-copy-number]]).

[F5] $G[W]=(W,\,E(G)\cap[W]^2)$, so two vertices of $W$ are adjacent in $G[W]$ exactly when they are adjacent in $G$ ([[def-subgraph-induced-subgraph-and-spanning-subgraph]]).

[F6] For $a>0$ and real $x$, $a^{x}=\exp(x\log a)$ ([[def-real-power]]).

[L7] For $a,b>0$ and real $r,s$: $a^{r+s}=a^{r}a^{s}$, $(ab)^{r}=a^{r}b^{r}$, $(a/b)^{r}=a^{r}/b^{r}$ and $(a^{r})^{s}=a^{rs}$ ([[thm-real-power-laws]]).

[L8] The logarithm is continuous and strictly increasing on $(0,\infty)$, is onto $\mathbb R$, satisfies $\log(xy)=\log x+\log y$ and $\log(x/y)=\log x-\log y$, and $\log1=0$ ([[thm-natural-logarithm-laws]]).

[L9] The exponential is continuous and strictly increasing on $\mathbb R$ ([[thm-exponential-is-strictly-increasing]]).

[F7] For $b>0$ with $b\ne1$ and $x>0$, $\log_b x=\log x/\log b$ ([[def-logarithm-to-a-base]]).

[L10] Every complete ordered field is Archimedean: for every $x$ there is a natural number $k\ge1$ with $x<k$ ([[thm-of-archimedean]]).

[L11] Every nonempty subset of $\mathbb N$ has a least element ([[thm-well-ordering-principle]]).

## Proof

**Proof technique:** direct.

1.1 Choose Erdős–Hajnal constants $\epsilon_1>0$ for the class of $H_1$-free graphs and $\epsilon_2>0$ for the class of $H_2$-free graphs, and set $\beta=1/(2(h+1))$, $\epsilon_0=\beta\min\{\epsilon_1,\epsilon_2\}$, $n_0=\max\{4\cdot16^{h},\,2h,\,h^{2(h+1)}\}$ and $\epsilon=\min\{\epsilon_0,\,1/\log_2 n_0\}$. Then $0<\beta\le1/4$, $\epsilon_0>0$, $n_0\ge64$ and $\epsilon>0$, and $\beta(h+1)=1/2$ gives $1-\beta h=1/2+\beta$. [given, F1, F7, L8, choose, algebra]

1.2 For $a\ge1$ and $s\le t$ one has $a^{s}\le a^{t}$, because $\log a\ge0$ and both $\exp$ and $\log$ are increasing; and for $0<a\le b$ and $r>0$ one has $a^{r}\le b^{r}$ for the same reason. [F6, L8, L9]

1.3 By [L1] the class of $H$-free graphs is hereditary, so it is a class for which [F1] can supply a constant. [L1, F1]

2.1 Let $G$ be a finite simple graph with $n=|V(G)|\ge n_0$ and $\operatorname{hom}(G)<n^{\epsilon_0}$. The set of natural numbers $k$ with $k\ge n^{\beta}$ is nonempty by [L10], so it has a least element $m$ by [L11]; since $n^{\beta}>0$ we have $m\ge1$, and $m-1<n^{\beta}$, so $n^{\beta}\le m<n^{\beta}+1\le2n^{\beta}$, the last step because $n\ge1$ gives $n^{\beta}\ge1$. [step 1.1, step 1.2, L10, L11, F6, choose]

2.2 Turning to the small orders, let $J$ be any nonempty $H$-free graph with $n'=|V(J)|<n_0$. If $n'\ge2$ then two distinct vertices of $J$ form a clique or a stable set, so $\operatorname{hom}(J)\ge2$; and ${n'}^{\epsilon}<n_0^{\epsilon}\le n_0^{1/\log_2 n_0}=\exp\big(\log n_0\cdot\log2/\log n_0\big)=2$, so $\operatorname{hom}(J)\ge {n'}^{\epsilon}$. If $n'=1$ then $\operatorname{hom}(J)=1=1^{\epsilon}$. [step 1.1, step 1.2, F2, F6, F7, L8, algebra]

3.1 Since $n\ge h^{2(h+1)}=h^{1/\beta}$, raising to the power $\beta$ gives $n^{\beta}\ge h$, so $m\ge h$; and $\beta\le1/4$ with $n\ge64$ gives $m<n^{1/4}+1\le n$. Hence $h\le m\le n$. [step 1.1, step 2.1, step 1.2, L7, algebra]

4.1 Let $W\subseteq V(G)$ with $|W|=m$. Then $W\ne\varnothing$ and $|W|^{\epsilon_1}=m^{\epsilon_1}\ge(n^{\beta})^{\epsilon_1}=n^{\beta\epsilon_1}\ge n^{\epsilon_0}>\operatorname{hom}(G)$, using $\epsilon_0\le\beta\epsilon_1$ and $n\ge1$; so by [L2] the graph $G[W]$ has an induced copy of $H_1$, that is, an $h$-element $S\subseteq W$ with $G[S]\cong H_1$. [step 2.1, step 3.1, step 1.2, L2, L7, F5, F3]

5.1 By [L3] the number $g$ of $h$-element sets $S\subseteq V(G)$ with $G[S]\cong H_1$ is at least $(n-h+1)^{h}/m^{h}$, and each such $S$ carries at least one induced embedding of $H_1$ into $G$, distinct sets carrying distinct embeddings because their images differ; so $\operatorname{ind}_{H_1}(G)\ge g\ge(n-h+1)^{h}/m^{h}>0$. [step 3.1, step 4.1, L3, F3, F4]

6.1 By [F4] and step 5.1 the set $\Phi$ of induced embeddings of $H_1$ into $G$ is nonempty, so the set $\Psi$ of [L4] is nonempty as well, since each member of $\Phi$ restricts into it. Applying [L6] to the relation pairing $\varphi\in\Psi$ with the members of $\Phi$ restricting to it, whose row fibres have sizes $|X_\varphi|$ and whose total size is $\operatorname{ind}_{H_1}(G)$ by [L4], gives $\varphi_{+}\in\Psi$ with $|X_{\varphi_{+}}|\ge\operatorname{ind}_{H_1}(G)/|\Psi|$. [step 5.1, L4, L6, F4]

7.1 Since $|\Psi|\le n^{\,h-1}$ and $n\ge n_0\ge2h$ gives $n-h+1>n/2$, and $m<2n^{\beta}$ by step 2.1, we get $|X_{\varphi_{+}}|\ge\frac{(n-h+1)^{h}}{m^{h}\,n^{\,h-1}}>\frac{(n/2)^{h}}{2^{h}n^{\beta h}n^{\,h-1}}=\frac{n^{1-\beta h}}{4^{h}}=4^{-h}n^{1/2}n^{\beta}$. [step 1.1, step 2.1, step 5.1, step 6.1, L4, L7, algebra]

8.1 From $n\ge4\cdot16^{h}$ we get $n^{1/2}\ge2\cdot4^{h}$, so $4^{-h}n^{1/2}\ge2$ and step 7.1 gives $|X_{\varphi_{+}}|>2n^{\beta}>m\ge n^{\beta}$. In particular $X_{\varphi_{+}}$ is nonempty. [step 1.1, step 2.1, step 7.1, step 1.2, L7, algebra]

9.1 Therefore $|X_{\varphi_{+}}|^{\epsilon_2}\ge(n^{\beta})^{\epsilon_2}=n^{\beta\epsilon_2}\ge n^{\epsilon_0}>\operatorname{hom}(G)$, so by [L2] the graph $G[X_{\varphi_{+}}]$ has an induced copy of $H_2$; the corresponding induced embedding has image inside $X_{\varphi_{+}}$ and, adjacency in $G[X_{\varphi_{+}}]$ agreeing with adjacency in $G$, it is an induced embedding of $H_2$ into $G$. [step 2.1, step 8.1, step 1.2, L2, L7, F5, F3]

10.1 By [L5] applied to $\varphi_{+}$ and that embedding, the graph $G$ of step 2.1 has an induced copy of $H$ and so is not $H$-free. Hence an $H$-free graph $G$ with $|V(G)|=n\ge n_0$ cannot satisfy $\operatorname{hom}(G)<n^{\epsilon_0}$, and therefore satisfies $\operatorname{hom}(G)\ge n^{\epsilon_0}\ge n^{\epsilon}$, the last inequality by step 1.2 and $\epsilon\le\epsilon_0$. [step 2.1, step 9.1, step 1.2, L5, F3]

11.1 Steps 10.1 and 2.2 together give $\operatorname{hom}(G)\ge|V(G)|^{\epsilon}$ for every nonempty $H$-free graph $G$, whatever its order, and the class of $H$-free graphs is hereditary by step 1.3; that is, $\epsilon$ is an Erdős–Hajnal constant for it and $H$ has the Erdős–Hajnal property. [step 1.3, step 10.1, step 2.2, F1] ∎
