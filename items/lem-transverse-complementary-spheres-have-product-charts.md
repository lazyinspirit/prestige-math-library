---
id: lem-transverse-complementary-spheres-have-product-charts
kind: lemma
title: "Transverse submanifolds have product charts"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 0
deps: [def-transverse-embedded-submanifolds, thm-smooth-inverse-function-theorem-on-manifolds, def-embedded-submanifold-and-slice-chart, def-smooth-manifold, def-differential-of-a-smooth-map]
justified_by: []
aliases: []
proof_strategy: "direct"
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156; complete PDF)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
      locator: "Lemma 4.8.1, §4.8, printed pp. 122-123 (mutually transverse submanifolds have coordinate-subspace normal form)"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $N$ be a smooth $m$-manifold and let $S_1,S_2\subseteq N$ be transverse embedded submanifolds meeting at a point $p$, with $\dim S_1+\dim S_2=m$. Then there are an open neighbourhood $U$ of $p$ and a chart $\phi:(U,p)\to(\mathbb R^m,0)$ such that $\phi(S_1\cap U)=\mathbb R^{a}\times\{0\}\cap\phi(U)$ and $\phi(S_2\cap U)=\{0\}\times\mathbb R^{b}\cap\phi(U)$, where $a=\dim S_1$ and $b=\dim S_2$. More generally, if finitely many embedded submanifolds $S_1,\dots,S_r$ pass through $p$ with $T_pN=T_pS_1\oplus\cdots\oplus T_pS_r$, then one chart simultaneously maps each $S_i\cap U$ to a coordinate subspace.

## Facts & Assumptions

**Given:** A smooth $m$-manifold $N$, transverse embedded submanifolds $S_1,S_2\subseteq N$ through $p$ with $\dim S_1+\dim S_2=m$, and, in the general clause, finitely many embedded submanifolds $S_1,\dots,S_r$ through $p$ with $T_pN=T_pS_1\oplus\cdots\oplus T_pS_r$.

[F1] [[def-transverse-embedded-submanifolds]]: $S,T\subseteq M$ are transverse when for every $q\in S\cap T$ the tangent spaces satisfy $T_qS+T_qT=T_qM$; equivalently the inclusions are transverse as smooth maps.

[F2] [[def-embedded-submanifold-and-slice-chart]]: for an embedded $k$-submanifold $S\subseteq M$ and $p\in S$ there is a smooth chart $\varphi:U\to\varphi(U)\subseteq\mathbb R^m$ with $p\in U$ and $\varphi(S\cap U)=\varphi(U)\cap(\mathbb R^k\times\{0\})$. In such a chart the last $m-k$ coordinate functions vanish on $S$ and their differentials at $p$ are independent, so they span the annihilator of $T_pS$; restricting the chart gives the same statement for any smaller neighbourhood of $p$.

[F3] [[thm-smooth-inverse-function-theorem-on-manifolds]] and [[def-differential-of-a-smooth-map]]: the differential $dF_p:T_pM\to T_{F(p)}N$ is the linear map induced on tangent spaces; if it is an isomorphism, then $p$ has an open neighbourhood mapped diffeomorphically onto an open neighbourhood of $F(p)$.

[F4] [[def-smooth-manifold]]: a smooth $m$-manifold is a topological $m$-manifold with a smooth structure; charts are homeomorphisms onto open subsets of $\mathbb R^m$.

## Proof

**Proof technique:** direct.

1.1 By [F2] choose a chart at $p$ for $S_1$ and let $f_1,\dots,f_b$ be the last $b=m-\dim S_1$ coordinate functions; they are smooth, vanish on $S_1$ near $p$, and their differentials at $p$ are linearly independent and span the annihilator of $T_pS_1$. Similarly choose $g_1,\dots,g_a$ from a slice chart of $S_2$, $a=m-\dim S_2$, spanning the annihilator of $T_pS_2$. Restricting to a common smaller neighbourhood of $p$, all these functions are defined there and still have the same properties at $p$. [F2, given]

2.1 Since $\dim S_1+\dim S_2=m$ and $T_pS_1+T_pS_2=T_pN$ by [F1], the sum is direct, $T_pN=T_pS_1\oplus T_pS_2$. Hence the annihilator of $T_pS_1$ and the annihilator of $T_pS_2$ meet only in $0$, and the $a+b=m$ covectors $dg_1(p),\dots,dg_a(p),df_1(p),\dots,df_b(p)$ are linearly independent: a linear relation splits into a combination of the $dg_j$ equal to minus a combination of the $df_i$, which lies in the intersection of the two annihilators and hence vanishes, forcing all coefficients to vanish by independence in each family. [F1, step 1.1, algebra]

2.2 Within the slice chart of $S_1$ used in [F2], the functions $f_1,\dots,f_b$ are $b$ of the coordinate functions, namely the last $b$, so their common zero locus inside that chart is exactly $S_1$ intersected with the chart domain; after restriction to the common smaller neighbourhood of step 1.1 this remains true there. The same holds for $g_1,\dots,g_a$ and $S_2$. [F2, step 1.1]

3.1 Put $F:=(g_1,\dots,g_a,f_1,\dots,f_b)$ on the common neighbourhood of $p$, regarded as a smooth map into $\mathbb R^m$. By step 2.1 its differential at $p$ is an isomorphism, so by [F3] there is an open neighbourhood $U$ of $p$ such that $F|_U$ is a diffeomorphism onto an open subset of $\mathbb R^m$; composing with a translation, $F|_U$ is a chart $\phi:(U,p)\to(\mathbb R^m,0)$ of the smooth manifold $N$ of [F4] at $p$. [F3, F4, step 2.1]

4.1 In the chart $\phi$ of step 3.1 the coordinates are the ordered functions $g_1,\dots,g_a,f_1,\dots,f_b$; by step 2.2, $\phi(S_2\cap U)=\{x_1=\cdots=x_a=0\}\cap\phi(U)$ and $\phi(S_1\cap U)=\{x_{a+1}=\cdots=x_m=0\}\cap\phi(U)$. Writing $a=\dim S_1$ and $b=\dim S_2$ and identifying the last $b$ coordinates with $\mathbb R^b$ and the first $a$ with $\mathbb R^a$ gives exactly $\phi(S_1\cap U)=\mathbb R^a\times\{0\}\cap\phi(U)$ and $\phi(S_2\cap U)=\{0\}\times\mathbb R^b\cap\phi(U)$. [step 3.1, step 2.2, algebra]

5.1 For the general clause use the sum map instead of defining functions. Identify a neighbourhood of $p$ with $\mathbb R^m$ by a chart [F4] carrying $p$ to $0$, and consider $H:S_1\times\cdots\times S_r\to\mathbb R^m$, $H(s_1,\dots,s_r)=s_1+\cdots+s_r$. Its differential at $(p,\dots,p)$ sends $(v_1,\dots,v_r)$ to $v_1+\cdots+v_r$, which is invertible exactly because $T_pN=T_pS_1\oplus\cdots\oplus T_pS_r$; by [F3] $H$ restricts to a diffeomorphism from a neighbourhood of $(p,\dots,p)$ onto an open neighbourhood $U$ of $p$, with smooth inverse $H^{-1}(q)=(a_1(q),\dots,a_r(q))$, $a_j(q)\in S_j$. Shrink $U$ so that for each $i$, every $q\in S_i\cap U$ lies in the chosen factor neighbourhood and $(p,\dots,q,\dots,p)$ lies in the inverse-function domain. Since $H$ is injective there and $H(p,\dots,q,\dots,p)=q$, a point $q\in U$ lies in $S_i$ exactly when $a_j(q)=p$ for every $j\ne i$: if $q\in S_i$ then $(p,\dots,q,\dots,p)$ and $(a_1(q),\dots,a_r(q))$ are two preimages of $q$, hence equal, and conversely $a_j(q)=p$ for $j\ne i$ gives $q=a_i(q)\in S_i$. Composing $H^{-1}$ with charts of the $S_j$ at $p$ given by [F2] produces a chart $\phi=(\phi^{(1)},\dots,\phi^{(r)})$ of $N$ at $p$, $\phi^{(j)}$ taking values in $\mathbb R^{\dim S_j}$, and the criterion just proved says $\phi(S_i\cap U)=\{\phi^{(j)}=0,\ j\ne i\}\cap\phi(U)$, a coordinate subspace. [F1, F2, F3, F4, construct] ∎
