---
id: lem-metric-spaces-have-sigma-discrete-open-bases
kind: lemma
title: 'Under choice, metric spaces have sigma-discrete open bases'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-metric-space, def-metric-ball, def-discrete-family-and-sigma-bases, thm-well-ordering-theorem, def-axiom-of-choice]
aliases: []
landmark: false
proof_strategy: direct
sources:
  references:
    - title: 'R. H. Bing, Metrization of Topological Spaces'
      url: 'https://www.cambridge.org/core/services/aop-cambridge-core/content/view/48C1A50A9E249D05BD7054529F93BAA1/S0008414X00030923a.pdf/metrization-of-topological-spaces.pdf'
---

## Statement

Assume the Axiom of Choice. Every metric space has a $\sigma$-discrete open basis. More precisely, a well-order of the underlying set suffices; after fixing it, the construction uses no further choice.

## Facts & Assumptions

[F1] A metric satisfies the triangle inequality, and its open balls give its topology ([[def-metric-space]], [[def-metric-ball]]).

[F2] A family is discrete when each point has a neighborhood meeting at most one member; a $\sigma$-discrete basis is a union of a sequence of discrete families of open sets ([[def-discrete-family-and-sigma-bases]]).

[A1] Assume [[def-axiom-of-choice]]; [[thm-well-ordering-theorem]] supplies a well-order $<$ of $X$.



**Given:** A metric space $(X,d)$ and the axiom assumption A1.

## Proof

1.1 Fix the well-order in A1. For $k,n\in\mathbb N$ and $a\in X$, put $U_{a,k}=B_d(a,2^{-k})$, $r_n=2^{-n}$, and define
$$F_{a,k,n}=\{z\in X:(\forall y\in X\setminus U_{a,k})\ d(z,y)\ge r_n\}\setminus\bigcup_{b<a}U_{b,k}.$$
The first set is closed, being the intersection over $y\notin U_{a,k}$ of the closed sets $\{z:d(z,y)\ge r_n\}$; the triangle inequality makes their complements open. Its defining condition is vacuous if $U_{a,k}=X$. The subtracted union is open, so $F_{a,k,n}$ is closed, and it lies in $U_{a,k}$ since a point outside that set violates the condition with $y=z$. [A1, F1, construct]

2.1 For fixed $k,n$ the nonempty cores are pairwise $r_n$ separated. Indeed, if $a<b$, $u\in F_{a,k,n}$ and $v\in F_{b,k,n}$, then $v\notin U_{a,k}$ by the subtraction defining the latter core, and hence $d(u,v)\ge r_n$. For each fixed $k$ their union over $a,n$ is $X$: given $x$, the set of centers $a$ with $x\in U_{a,k}$ is nonempty (it contains $x$), so has a least member $a$. Openness gives some $\delta>0$ with $B_d(x,\delta)\subseteq U_{a,k}$. Take $n$ with $r_n\le\delta$. Then every $y\notin U_{a,k}$ satisfies $d(x,y)\ge r_n$, and $x$ lies in none of the earlier balls, so $x\in F_{a,k,n}$. These are least selections or existential instantiations, requiring no further choice. [F1, step 1.1]

3.1 For each nonempty core define the open set $V_{a,k,n}=\bigcup_{u\in F_{a,k,n}}B_d(u,r_n/3)$. It contains its core and is contained in $U_{a,k}$: a point outside $U_{a,k}$ has distance at least $r_n$ from every core point. For fixed $k,n$, every ball $B_d(x,r_n/6)$ meets at most one of these sets. Otherwise two points of that ball belonging to different $V$ sets yield corresponding core points $u,v$ with $d(u,x)<r_n/2$ and $d(v,x)<r_n/2$, whence $d(u,v)<r_n$, contradicting step 2.1. Thus each layer $\mathcal V_{k,n}=\{V_{a,k,n}:F_{a,k,n}\ne\varnothing\}$ is discrete, and its union over $n$ covers $X$ for every $k$. [F1, F2, step 2.1, construct]

4.1 The union of all layers is a basis. If $x\in O$ with $O$ open, choose $\varepsilon>0$ with $B_d(x,\varepsilon)\subseteq O$ and $k$ with $2^{1-k}<\varepsilon$. By step 3.1 some $V_{a,k,n}$ contains $x$. Both $x$ and each $z$ in that set lie in $U_{a,k}$, so $d(x,z)<2^{1-k}<\varepsilon$; therefore $x\in V_{a,k,n}\subseteq O$. Enumerate pairs $(k,n)$ by successive finite diagonals $k+n=0,1,2,\ldots$ to obtain a sequence of discrete layers. If $X$ is empty, all layers are empty and the same basis criterion holds vacuously. This proves the claimed $\sigma$-discrete open basis, with AC used only for the initial well-order. [F1, F2, step 3.1] ∎
