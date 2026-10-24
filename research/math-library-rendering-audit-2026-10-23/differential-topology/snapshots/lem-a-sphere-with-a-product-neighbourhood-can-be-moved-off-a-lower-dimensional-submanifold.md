---
id: lem-a-sphere-with-a-product-neighbourhood-can-be-moved-off-a-lower-dimensional-submanifold
kind: lemma
title: "Moving a sphere off a lower-dimensional submanifold"
status: published
origin: pipeline
dependency_level: 0
deps: [thm-fundamental-theorem-on-flows, def-tubular-neighbourhood-of-an-embedded-submanifold, thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold, prop-the-image-of-a-lower-dimensional-c1-manifold-is-null, prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold, lem-euclidean-bump-for-a-compact-set-inside-an-open-set, thm-compactly-supported-vector-fields-are-complete, def-local-and-global-flow, def-countable-choice]
justified_by: []
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow), Sections 2-4, printed pp. 10-48"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf"
proof_strategy: "product neighbourhood, null projection, flow of a translated field"
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $A,B\subseteq V$ be embedded submanifolds with $A$ compact of a
smooth manifold $V$ with $\dim A+\dim B<\dim V$, and suppose that $A$ has a
product neighbourhood in $V$. Then for every neighbourhood of $A$ there is a
diffeomorphism $h:V\to V$, smoothly isotopic to the identity and supported in
that neighbourhood, with $h(A)\cap B=\varnothing$. The isotopy may be chosen arbitrarily close to the identity in $C^\infty$ on its fixed compact support.

## Facts & Assumptions

[A1] **Product neighbourhood.** There are an open set $U\subseteq V$ with $A\subseteq U$ and a diffeomorphism $k:A\times\mathbb R^{d}\to U$, where $d=\dim V-\dim A$, with $k(a,0)=a$ for every $a\in A$; such a neighbourhood may be chosen inside any prescribed neighbourhood of $A$. The product trivialization is a hypothesis; the tubular neighbourhood theorem [[thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold]] alone does not assert that the normal bundle is trivial. Compactness of $A$ permits a uniform product tube inside the prescribed neighbourhood.

[F1] [[prop-the-image-of-a-lower-dimensional-c1-manifold-is-null]]: Assume the Axiom of Countable Choice. Let $P^m$ and $N^n$ be smooth manifolds with $m<n$, and let $F:P\to N$ be a $C^1$ map. Then $F(P)\subseteq N$ is a null subset of $N$.

[F2] [[prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold]]: Let $M$ be a positive-dimensional smooth manifold, let $\mathcal A$ be a smooth atlas on $M$, and let $E\subseteq M$ be $\mathcal A$-null (null in the sense of the cited definition). Then $M\setminus E$ is dense in $M$. In particular, under Countable Choice the conclusion holds for any manifold-null set $E$.

[F3] [[lem-euclidean-bump-for-a-compact-set-inside-an-open-set]]: If $K\subseteq U\subseteq\mathbb R^n$ with $K$ compact and $U$ open, then there exists a smooth function $\rho:\mathbb R^n\to[0,1]$ such that $\rho=1$ on $K$ and $\operatorname{supp}(\rho)\subseteq U$.

[F4] [[thm-compactly-supported-vector-fields-are-complete]]: Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Every compactly supported smooth vector field on a smooth manifold is complete.

[F5] [[def-local-and-global-flow]]: Let $X$ be a smooth vector field on $M$. A **local flow** of $X$ consists of an open set $\mathcal D\subseteq\mathbb R\times M$ containing $\{0\}\times M$ and a smooth map $\Phi:\mathcal D\to M$ such that: $\Phi(0,p)=p$ for every $p\in M$; for each $p$, the fibre $\mathcal D_p:=\{t:(t,p)\in\mathcal D\}$ is an interval; for each $p$, the curve $t\mapsto\Phi(t,p)$ is an integral curve of $X$ on $\mathcal D_p$; and whenever both sides are defined, $\Phi(t,\Phi(s,p))=\Phi(t+s,p)$. If $\mathcal D=\mathbb R\times M$, then $\Phi$ is the **global flow** of $X$.

## Proof

**Given:** The objects and hypotheses in the statement, and a prescribed neighbourhood $W_0$ of $A$ in $V$.

1.1 Choose a product neighbourhood $k:A\times\mathbb R^d\to U$ of $A$ with $U\subseteq W_0$, write $\pi:A\times\mathbb R^d\to\mathbb R^d$ for the projection, and put $B_0:=k^{-1}(B\cap U)\subseteq A\times\mathbb R^d$. Since $B\cap U$ is open in $B$, the set $B_0$ is an embedded submanifold of dimension $\dim B$; the projection $\pi$ is smooth, hence $C^1$, and $\dim B_0\le\dim B<d$, so $\pi(B_0)$ is a null subset of $\mathbb R^d$ with dense complement, and an arbitrarily small nonzero $w$ lies outside it. [A1, F1, F2, choose]

1.2 Fix $r>0$, restrict the choice of $w$ to $0<|w|<r$, and choose a smooth cutoff $\chi:\mathbb R^d\to[0,1]$ with $\chi=1$ on the closed ball of radius $r$ about $0$ and $\operatorname{supp}\chi$ in the ball of radius $2r$; it exists by [F3] after normalizing any bump for the compact ball inside the larger ball. Define a vector field $X$ on $V$ by $X(k(a,z)):=\chi(z)\,(0,w)$ in the coordinates of $U$ and $X:=0$ on $V\setminus U$. The field is smooth, for the two definitions agree near $\partial U$ where $\operatorname{supp}\chi$ is avoided, and its support is contained in $k(A\times\operatorname{supp}\chi)$, a compact subset of $U$; hence it is complete and has a global flow $\Phi:\mathbb R\times V\to V$. [F3, F4, F5, A1, construct]

2.1 The time-one map $h:=\Phi_1$ is a diffeomorphism of $V$ with inverse $\Phi_{-1}$, it is supported in $U\subseteq W_0$, and $t\mapsto\Phi_t$ is a smooth isotopy from the identity to $h$. Because the cutoff is fixed and the field is linear in $w$, the field tends to zero in every coordinate derivative as $w\to0$. Its flow tends smoothly to the identity: apply [[thm-fundamental-theorem-on-flows]] to the augmented field with $w$ as a constant parameter coordinate, using a parameter cutoff outside a fixed ball. Its support is compact since $A$ is compact, so the flow is defined for the entire time interval. Smooth dependence on $(w,t,x)$ and compactness give convergence of every derivative. For $a\in A$ the trajectory of $k(a,0)$ is $t\mapsto k(a,tw)$, because along the segment from $0$ to $w$ the cutoff equals $1$ and the second coordinate moves linearly; hence $h(k(a,0))=k(a,w)$, that is, $h(A)=k(A\times\{w\})\subseteq U$. [F5, step 1.2, algebra]

3.1 Finally $h(A)\cap B=\varnothing$: a point of $h(A)\cap B$ would lie in $U$ and equal $k(a,w)$ for some $a\in A$; then $(a,w)\in B_0$, contradicting $w\notin\pi(B_0)$, since $\pi(a,w)=w$. Together with steps 1.1 and 2.1 this gives a diffeomorphism supported in the prescribed neighbourhood, isotopic to the identity, that moves $A$ off $B$. If $B=\varnothing$ or $A=\varnothing$ the identity map already satisfies the conclusion, and the construction above also covers these cases because then $\pi(B_0)$ is empty. [step 1.1, step 2.1, algebra] ∎
