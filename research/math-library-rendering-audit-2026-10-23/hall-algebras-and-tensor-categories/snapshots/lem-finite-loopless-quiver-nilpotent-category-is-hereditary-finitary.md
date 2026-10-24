---
id: lem-finite-loopless-quiver-nilpotent-category-is-hereditary-finitary
kind: lemma
title: "Finite loopless quiver nilpotent representation categories are hereditary and finitary"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - lem-finite-acyclic-quiver-hall-category-is-hereditary-finitary
  - def-finite-field-hereditary-hall-category
  - lem-yext-exact-sequences-in-both-variables
  - lem-yext-zero-splice-factorization
  - def-baer-sum-of-extension-classes
  - thm-baer-sum-makes-extension-classes-an-abelian-group
  - def-hall-finitary-abelian-category
  - def-grothendieck-group-of-an-essentially-small-abelian-category
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Olivier Schiffmann, Lectures on Hall Algebras, arXiv:math/0611617v2"
      url: "https://arxiv.org/pdf/math/0611617v2"
      locator: "§3.1, PDF pp. 32–34: nilpotent representations of a finite loopless quiver, simple objects, K_0 and the hereditary claim."
    - title: "Claus Michael Ringel, The Hall Algebra Approach to Quantum Groups, E.L.A.M. Lectures (1993)"
      url: "https://www.math.uni-bielefeld.de/~ringel/opus/elam.pdf"
      locator: "§§2–4: quiver representation Hall categories and their hereditary structure."
---

## Statement

Let $Q$ be a finite loopless quiver over $\mathbb F_q$. If $Q$ has oriented
cycles, take the abelian category of finite-dimensional nilpotent
representations; if $Q$ is acyclic, take all finite-dimensional
representations. In either case the indicated representation category is
essentially small; let $\mathcal A_Q$ be the explicit small skeleton
constructed in the proof. This skeleton is a finite-field hereditary Hall
category. Its simple objects
are $S_i$, $K_0\cong\mathbb Z^{Q_0}$ by dimension vector, and
$\dim_{\mathbb F_q}\operatorname{YExt}^1(S_i,S_j)=c_{ij}$ for arrows $i\to j$.

## Facts & Assumptions

**Given:** A finite loopless quiver $Q$, the finite field $k=\mathbb F_q$, and the category of its finite-dimensional nilpotent representations. Nilpotent means that some integer $n\geq1$ kills the composite along every path of length $n$.

[F1] The target Hall-category conditions are those of [[def-finite-field-hereditary-hall-category]] and [[def-hall-finitary-abelian-category]]. In particular, heredity here means vanishing of endpoint-fixed Yoneda two-extension classes, rather than a resolution assertion.

[F2] A two-fold splice is zero if its second short extension is the pushout of an extension by the first middle object ([[lem-yext-zero-splice-factorization]]).

[F3] The Grothendieck-group relation is $[B]=[A]+[C]$ for each short exact sequence ([[def-grothendieck-group-of-an-essentially-small-abelian-category]]). Baer addition is the diagonal-pullback/codiagonal-pushout operation of [[def-baer-sum-of-extension-classes]] and [[thm-baer-sum-makes-extension-classes-an-abelian-group]].

## Proof

**Proof technique:** direct.

1.1 Kernels and cokernels of representation maps are formed at each vertex; the induced arrow maps satisfy the abelian identities vertexwise. Subrepresentations and quotients of a representation killed by all paths of length $n$ have the same property. If $0\to U\to V\to W\to0$ is vertexwise exact and all length-$r$ paths kill $U$ while all length-$s$ paths kill $W$, then any length-$s$ path sends $V$ into $U$, and the next $r$ arrows kill it. Thus all length-$(r+s)$ paths kill $V$. Consequently nilpotent finite-dimensional representations are closed under kernels, cokernels, and extensions, and form an abelian $k$-linear category. This quantitative bound applies to every extension constructed below. [given, construct]

2.1 Fix an ordering of the finite field and of the finite vertex and arrow sets. For each dimension vector $d$, use the fixed spaces $k^{d_i}$ and list the finitely many arrow-matrix tuples. Keep the nilpotent tuples and the lexicographically least member of each orbit under the finite group $\prod_i\operatorname{GL}_{d_i}(k)$. Their union over $d\in\mathbb N^{Q_0}$, with all commuting families of matrices as morphisms, is the supplied small skeleton $\mathcal A_Q$. Isomorphisms to representatives may also be chosen as the least in the corresponding finite matrix sets, so transporting kernels, cokernels, and biproducts to it needs no infinite choice. We use this small abelian model when applying [F1]. Hom spaces are subspaces of the finite-dimensional vector space $\bigoplus_i\operatorname{Hom}_k(V_i,W_i)$. [F1, step 1.1, construct]

2.2 For fixed nilpotent $V,W$, split a short extension vertexwise, using bases in finitely many finite-dimensional vector spaces. Each arrow $a:i\to j$ then acts on $W_i\oplus V_i$ by the block matrix $\begin{pmatrix}W_a&\xi_a\\0&V_a\end{pmatrix}$ with $\xi_a:V_i\to W_j$. Conversely every tuple $(\xi_a)$ defines a representation extension because a quiver representation has no relations beyond the specified compositions of arrows. It is nilpotent by step 1.1, independently of the tuple. Changing the vertex sections by maps $\theta_i:V_i\to W_i$ changes the tuple by $d(\theta)_a=W_a\theta_i-\theta_jV_a$. Every endpoint-fixed isomorphism is exactly such a change of sections. Hence $\operatorname{YExt}^1(V,W)$ is identified with $\operatorname{coker}\bigl(d:\bigoplus_i\operatorname{Hom}_k(V_i,W_i)\to\bigoplus_{a:i\to j}\operatorname{Hom}_k(V_i,W_j)\bigr)$. Under [F3], Baer sum adds arrow tuples and pushout along $\lambda\operatorname{id}_W$ multiplies them by $\lambda$. This proves that the prescribed extension operations give a finite-dimensional $k$-space. [F3, step 1.1, construct, algebra]

2.3 The vertex representations $S_i$ are simple. Every nonzero nilpotent representation has a subobject isomorphic to some $S_i$: among all nonzero images of nonzero vectors under paths choose one of greatest path length, which exists because sufficiently long paths vanish. Its terminal vector is killed by every outgoing arrow, so its one-dimensional span at that vertex and zero at the other vertices is the required subrepresentation. In a simple representation this is the whole object. Total vector-space dimension strictly decreases on a proper quotient, giving a finite composition series with factors among the $S_i$. Counting vertex dimensions along it and using [F3] gives $[V]=\sum_i\dim_k(V_i)[S_i]$. The dimension-vector map is additive on short exact sequences and sends these classes to the standard basis, so it is inverse to the map $\mathbb Z^{Q_0}\to K_0$ taking that basis to $[S_i]$. [F3, step 1.1, construct, algebra]

3.1 Consider an arbitrary two-extension $0\to A\to B\to D\to X\to0$ in the nilpotent category. Its image $C\subset D$ gives short extensions $E:0\to A\to B\xrightarrow{p}C\to0$ and $F:0\to C\to D\to X\to0$. Choose a vector-space section of $D_i\to X_i$ and of $p_i:B_i\to C_i$ at every vertex. There are finitely many choices, so this does not use the Axiom of Choice. In the resulting coordinates $D_i=C_i\oplus X_i$, its arrow maps have form $\begin{pmatrix}C_a&\xi_a\\0&X_a\end{pmatrix}$. If $s_j:C_j\to B_j$ is the chosen section of $p_j$, put $\widetilde\xi_a=s_j\xi_a$. Define $T_i=B_i\oplus X_i$ and $T_a=\begin{pmatrix}B_a&\widetilde\xi_a\\0&X_a\end{pmatrix}$. These maps define a finite-dimensional quiver representation and an exact sequence $0\to B\to T\to X\to0$. [step 1.1, step 2.2, construct]

4.1 If length-$r$ paths kill $B$ and length-$s$ paths kill $X$, then length-$(r+s)$ paths kill $T$ by step 1.1. Thus the constructed intermediate object belongs to the nilpotent category, including when $Q$ has oriented cycles. The maps $T_i\to D_i$ given by $(b,x)\mapsto(p_i b,x)$ commute with arrows because $p_j\widetilde\xi_a=\xi_a$ and $p_jB_a=C_ap_i$. They give a surjection $T\to D$ with kernel $A$, and the pushout of $0\to B\to T\to X\to0$ along $p$ is precisely $F$. By [F2] the given two-extension is zero within the nilpotent category itself: the finite zigzag in that lemma involves only finite sums, subquotients, and extensions of these objects, which remain finite-dimensional and nilpotent by step 1.1. Since the original two-extension was arbitrary, all its Yoneda two-extension classes vanish. [F2, step 1.1, step 3.1, construct]

5.1 Apply step 2.2 to $V=S_i,W=S_j$. If $i\ne j$, the source of $d$ is zero, and its target has one scalar coordinate for each arrow $i\to j$. If $i=j$, that target is zero because $Q$ has no loops. Thus $\dim_k\operatorname{YExt}^1(S_i,S_j)=c_{ij}$ in all cases. Steps 1.1–4.1 verify every condition in [F1], while step 2.3 and this computation prove the remaining assertions for the chosen skeleton. If $Q$ is acyclic then every path has length less than $|Q_0|$, so all finite-dimensional representations are nilpotent; hence the same argument covers the chosen small skeleton of the acyclic category in the statement, consistently with [[lem-finite-acyclic-quiver-hall-category-is-hereditary-finitary]]. [F1, step 1.1, step 2.1, step 2.2, step 3.1, step 4.1, step 2.3, algebra] ∎

## Source notes

Schiffmann §3.1 explicitly allows cycles, defines nilpotence by uniformly vanishing path composites, proves the simple-object and Grothendieck-group assertions, and states that this nilpotent category is hereditary. The proof above supplies the missing local hereditary argument by lifting arrow coordinates. It neither places infinite-dimensional path projectives in the category nor assumes an ambient-to-Serre-subcategory comparison for Yoneda Ext².
