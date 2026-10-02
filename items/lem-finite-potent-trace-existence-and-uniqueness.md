---
id: lem-finite-potent-trace-existence-and-uniqueness
kind: lemma
title: "The trace of a finite potent endomorphism exists and is unique"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-every-vector-space-has-a-basis
  - def-axiom-of-choice
  - def-dimension
  - def-linear-map
  - def-quotient-vector-space-and-canonical-projection
  - def-trace-of-an-endomorphism
  - def-vector-space
  - thm-rank-nullity
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Tate, Residues of differentials on curves, Ann. Sci. E.N.S. (4) 1 (1968) 149-159"
      url: "http://www.numdam.org/article/ASENS_1968_4_1_1_149_0.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Assume the Axiom of Choice as inherited from the linear algebra suppliers
([[def-axiom-of-choice]]). Let $k$ be a field and $V$ a $k$-vector space
([[def-vector-space]]), and let $\theta$ be a $k$-linear endomorphism of $V$
([[def-linear-map]]). Call $\theta$ **finite potent** when $\theta^n(V)$ is
finite-dimensional ([[def-dimension]]) for some $n\ge0$. Then there is a unique
element $\operatorname{Tr}_V(\theta)\in k$ with the following three properties:

- **(T1)** if $V$ is finite-dimensional, $\operatorname{Tr}_V(\theta)$ is the
  ordinary trace of $\theta$ ([[def-trace-of-an-endomorphism]]);
- **(T2)** if $W$ is a $\theta$-stable subspace of $V$, then
  $\operatorname{Tr}_V(\theta)=\operatorname{Tr}_W(\theta)+\operatorname{Tr}_{V/W}(\theta)$
  ([[def-quotient-vector-space-and-canonical-projection]]);
- **(T3)** if $\theta$ is nilpotent, then $\operatorname{Tr}_V(\theta)=0$.

Existence is by choosing $n$ with $W:=\theta^n(V)$ finite-dimensional and
$\theta$-stable and setting $\operatorname{Tr}_V(\theta):=\operatorname{Tr}_W(\theta)$;
the value is independent of $n$ and of $W$, and any finite-dimensional
$\theta$-stable $W$ containing $\theta^m(V)$ for some $m$ computes it. In
particular $\operatorname{Tr}_V$ is unchanged when $V$ is replaced by any such
$W$.

## Facts & Assumptions

**Given:** a field $k$, a $k$-vector space $V$, and a $k$-linear endomorphism $\theta\colon V\to V$ that is finite potent, together with an integer $n\ge0$ such that $\theta^n(V)$ is finite-dimensional. Here $\theta^0$ is the identity and $\theta^{m+1}=\theta\circ\theta^m$.

[F1] $V$ is a $k$-vector space, a linear map is additive and $k$-homogeneous, the image of a subspace under a linear map is again a subspace, and a subspace $W\subseteq V$ is $\theta$-stable when $\theta(W)\subseteq W$. ([[def-vector-space]], [[def-linear-map]])

[F2] Assume the Axiom of Choice: every vector space over a field has a basis, and a basis of a subspace of a finite-dimensional vector space extends to a basis of the whole space. ([[def-axiom-of-choice]], [[cor-every-vector-space-has-a-basis]])

[F3] Let $V$ be a finite-dimensional $k$-vector space and $T\colon V\to V$ linear. For any ordered basis $\mathcal B$ of $V$ the trace $\operatorname{tr}(T)$ is the sum of the diagonal entries of the matrix of $T$ in that basis, and this sum does not depend on $\mathcal B$; the trace of the zero endomorphism is $0$; and for a linear isomorphism $S\colon V\to V'$ of finite-dimensional spaces one has $\operatorname{tr}(S T S^{-1})=\operatorname{tr}(T)$. ([[def-trace-of-an-endomorphism]])

[F4] (Rank-nullity) If $T\colon V\to W$ is linear and $V$ is finite-dimensional, then $\dim_k V=\dim_k(\ker T)+\dim_k(\operatorname{im}T)$; consequently every subspace $U\subseteq V$ of a finite-dimensional space is finite-dimensional with $\dim_k U\le\dim_k V$: extend a basis of $U$ to a basis of $V$ by [F2], and the projection onto $U$ along the span of the extra basis vectors is a linear retraction $r\colon V\to U$ with $\dim_k V=\dim_k(\ker r)+\dim_k U$. ([[thm-rank-nullity]], [[def-dimension]], [[cor-every-vector-space-has-a-basis]])

[F5] Let $U\subseteq V$ be a subspace of a finite-dimensional space. Then $V/U$ is a $k$-vector space, the canonical projection $\pi\colon V\to V/U$ is linear with kernel $U$, and $\dim_k(V/U)=\dim_k V-\dim_k U$; for a further subspace $W\subseteq V$ there is a canonical isomorphism $(U+W)/W\cong U/(U\cap W)$; and if $U$ is $\theta$-stable then $\theta$ induces a linear map $\bar\theta$ on $V/U$ with $\bar\theta^n(\pi(v))=\pi(\theta^n(v))$ for every $n\ge0$ and every $v\in V$. ([[def-quotient-vector-space-and-canonical-projection]], [[def-linear-map]])

[F6] Let $V$ be finite-dimensional, $T\colon V\to V$ linear, and $U\subseteq V$ a $T$-stable subspace. Then $\operatorname{tr}_V(T)=\operatorname{tr}_U(T|_U)+\operatorname{tr}_{V/U}(\bar T)$: a basis of $U$ extends to a basis of $V$ by [F2], and in that basis the matrix of $T$ is block upper triangular with diagonal blocks the matrices of $T|_U$ and of the induced map $\bar T$, while traces are sums of diagonal entries by [F3]. ([[def-trace-of-an-endomorphism]], [[def-quotient-vector-space-and-canonical-projection]], [[cor-every-vector-space-has-a-basis]])

[F7] Let $V$ be finite-dimensional and $T\colon V\to V$ nilpotent, say $T^N=0$. Then $\operatorname{tr}(T)=0$: the chain $V\supseteq T(V)\supseteq T^2(V)\supseteq\cdots\supseteq 0$ consists of $T$-stable subspaces, and a basis of $V$ adapted to this chain, built successively by [F2], gives a matrix that is strictly upper triangular, so every diagonal entry vanishes. ([[def-trace-of-an-endomorphism]], [[cor-every-vector-space-has-a-basis]])

[F8] For every $m\ge0$ one has $\theta^{m+1}(V)\subseteq\theta^m(V)$, and $\theta^m(V)$ is $\theta$-stable. ([[def-linear-map]])

## Proof

**Proof technique:** direct.

1.1 By hypothesis $\theta$ is finite potent, so fix $n\ge0$ with $W:=\theta^n(V)$ finite-dimensional; by [F8] each $\theta^m(V)$ is $\theta$-stable, $W$ is $\theta$-stable, and $\theta^{m+1}(V)\subseteq\theta^m(V)$ for all $m$, so that $\theta^m(V)\subseteq W$ and $\theta^m(V)$ is finite-dimensional by [F4] for every $m\ge n$. [given, F1, F4, F8]

2.1 Define $\operatorname{Tr}_V(\theta):=\operatorname{tr}_W(\theta|_W)$, the ordinary trace of the restriction of $\theta$ to the finite-dimensional space $W$; this is a well-defined element of $k$ by [F3], independent of any auxiliary basis chosen there. [F3, step 1.1]

3.1 (Independence of the auxiliary index) Let $m\le m'$ be indices for which both $\theta^m(V)$ and $\theta^{m'}(V)$ are finite-dimensional; then $\theta^{m'}(V)=\theta^{m'-m}(\theta^m(V))\subseteq\theta^m(V)$ and both subspaces are $\theta$-stable. Applying [F6] to the $\theta$-stable subspace $\theta^{m'}(V)$ of the finite-dimensional space $\theta^m(V)$ gives $\operatorname{tr}_{\theta^m(V)}(\theta)=\operatorname{tr}_{\theta^{m'}(V)}(\theta)+\operatorname{tr}_{\theta^m(V)/\theta^{m'}(V)}(\bar\theta)$, and the induced endomorphism $\bar\theta$ of the quotient satisfies $\bar\theta^{m'-m}=0$, because $\bar\theta^{m'-m}$ sends the class of $x$ to the class of $\theta^{m'-m}(x)$ with $x\in\theta^m(V)$, and $\theta^{m'-m}(x)\in\theta^{m'}(V)$; hence the quotient trace vanishes by [F7] and the two traces agree. Consequently, applying this agreement with $m=n$ and step 1.1 whenever $m\ge n$, and to the pair $(m,n)$ whenever $\theta^m(V)$ is finite-dimensional with $m\le n$, one has $\operatorname{Tr}_V(\theta)=\operatorname{tr}_{\theta^m(V)}(\theta)$ for every $m\ge0$ with $\theta^m(V)$ finite-dimensional. [F4, F5, F6, F7, step 2.1]

3.2 (T3) If $\theta$ is nilpotent, say $\theta^N=0$, then $W_N:=\theta^N(V)=0$ is finite-dimensional and $\theta$-stable, so step 2.1 applied with $n$ replaced by $N$ gives $\operatorname{Tr}_V(\theta)=\operatorname{tr}_{W_N}(\theta|_0)=0$, the zero endomorphism of the zero space having trace $0$ by [F3]. [F3, step 2.1]

4.1 (Any finite-dimensional computing subspace) Let $W'\subseteq V$ be a finite-dimensional $\theta$-stable subspace containing $Z:=\theta^m(V)$ for some $m\ge0$; then $Z$ is a finite-dimensional $\theta$-stable subspace of $W'$ by [F4]. Applying [F6] to $Z\subseteq W'$ gives $\operatorname{tr}_{W'}(\theta)=\operatorname{tr}_Z(\theta)+\operatorname{tr}_{W'/Z}(\bar\theta)$, and $\bar\theta^m=0$ on $W'/Z$ because $\theta^m(W')\subseteq\theta^m(V)=Z$, so [F7] kills the quotient term; by step 3.1 the remaining term is $\operatorname{Tr}_V(\theta)$. Hence every such $W'$ computes the value $\operatorname{Tr}_V(\theta)=\operatorname{tr}_{W'}(\theta)$, and replacing $V$ by such a $W'$ does not change the trace. [F4, F5, F6, F7, step 3.1]

5.1 (T1) If $V$ itself is finite-dimensional, then $V$ is a finite-dimensional $\theta$-stable subspace containing $\theta^0(V)=V$, so step 4.1 with $W'=V$ gives $\operatorname{Tr}_V(\theta)=\operatorname{tr}_V(\theta)$; that is, $\operatorname{Tr}_V(\theta)$ is the ordinary trace of $\theta$. [F3, step 2.1, step 4.1]

5.2 (T2) Let $W\subseteq V$ be a $\theta$-stable subspace and let $m\ge0$ be such that $U:=\theta^m(V)$ is finite-dimensional (for instance $m=n$ by step 1.1); then $Z:=\theta^m(W)\subseteq U\cap W\subseteq U$ are finite-dimensional $\theta$-stable subspaces by [F4]. By step 3.1, $\operatorname{Tr}_V(\theta)=\operatorname{tr}_U(\theta)$ and $\operatorname{Tr}_W(\theta)=\operatorname{tr}_Z(\theta)$, while $\theta^m(V/W)=(U+W)/W$ by [F5], so step 4.1 applied to the induced endomorphism $\bar\theta$ of $V/W$ gives $\operatorname{Tr}_{V/W}(\theta)=\operatorname{tr}_{(U+W)/W}(\bar\theta)$. Now [F6] applied to the $\theta$-stable subspaces $Z\subseteq U\cap W\subseteq U$ gives $\operatorname{tr}_U(\theta)=\operatorname{tr}_{U\cap W}(\theta)+\operatorname{tr}_{U/(U\cap W)}(\bar\theta)$ and $\operatorname{tr}_{U\cap W}(\theta)=\operatorname{tr}_Z(\theta)+\operatorname{tr}_{(U\cap W)/Z}(\bar\theta)$, and the last term vanishes by [F7] because $\theta^m(U\cap W)\subseteq\theta^m(W)=Z$ makes the induced map nilpotent; finally the canonical isomorphism $U/(U\cap W)\cong(U+W)/W$ of [F5] carries the map induced by $\theta$ on $U/(U\cap W)$ to the map induced by $\theta$ on $(U+W)/W$, so by [F3] the two quotient traces are equal. Hence $\operatorname{Tr}_V(\theta)=\operatorname{Tr}_W(\theta)+\operatorname{Tr}_{V/W}(\theta)$. [F3, F5, F6, F7, step 3.1, step 4.1]

6.1 (Uniqueness) Let $\operatorname{Tr}'$ be any assignment $(V,\theta)\mapsto\operatorname{Tr}'_V(\theta)\in k$, defined for all pairs $(V,\theta)$ with $\theta$ finite potent, that satisfies (T1)-(T3) of the statement; let $\theta$ be finite potent on $V$ and choose $m\ge0$ with $W:=\theta^m(V)$ finite-dimensional. Applying (T2), as established in step 5.2, to the $\theta$-stable subspace $W$ gives $\operatorname{Tr}'_V(\theta)=\operatorname{Tr}'_W(\theta)+\operatorname{Tr}'_{V/W}(\theta)$; the induced endomorphism of $V/W$ is nilpotent because $\theta^m(V/W)=0$ by [F5], so $\operatorname{Tr}'_{V/W}(\theta)=0$ by (T3), as established in step 3.2; and $\operatorname{Tr}'_W(\theta)=\operatorname{tr}_W(\theta)$ by (T1), as established in step 5.1, since $W$ is finite-dimensional. Therefore $\operatorname{Tr}'_V(\theta)=\operatorname{tr}_W(\theta)=\operatorname{Tr}_V(\theta)$ by steps 3.1 and 4.1, so the three properties determine the value. [F3, F5, step 3.2, step 4.1, step 5.1, step 5.2]

7.1 By step 2.1 the assignment $\theta\mapsto\operatorname{Tr}_V(\theta)$ is defined by an ordinary trace on the finite-dimensional space $\theta^n(V)$, independent of every auxiliary choice by steps 3.1 and 4.1; by steps 5.1, 5.2 and 3.2 it satisfies (T1), (T2) and (T3); and by step 6.1 it is the only assignment with these three properties, so $\operatorname{Tr}_V(\theta)$ exists and is unique. The Axiom of Choice is used only through [F2], to select bases in the auxiliary finite-dimensional spaces, as in [F4], [F6] and [F7]; no other choice is made. [F2, step 2.1, step 3.1, step 3.2, step 4.1, step 5.1, step 5.2, step 6.1] ∎
