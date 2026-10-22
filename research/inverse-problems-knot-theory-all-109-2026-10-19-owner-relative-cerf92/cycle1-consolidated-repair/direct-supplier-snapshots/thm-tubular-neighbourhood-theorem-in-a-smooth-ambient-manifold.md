---
id: thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold
kind: theorem
title: "The tubular neighbourhood theorem in a smooth ambient manifold"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-countable-choice, def-tubular-neighbourhood-of-an-embedded-submanifold, thm-every-smooth-manifold-embeds-in-some-finite-dimensional-euclidean-space, prop-the-image-of-a-smooth-embedding-is-an-embedded-submanifold, thm-euclidean-tubular-neighbourhood-theorem, def-normal-addition-map-for-a-euclidean-submanifold, def-smooth-bundle-metric, prop-an-ambient-riemannian-metric-identifies-the-normal-quotient-with-the-orthogonal-normal-bundle, def-smooth-vector-bundle-rank-fibre-and-trivial-bundle, prop-the-inclusion-of-an-embedded-submanifold-is-a-smooth-embedding, thm-smooth-inverse-function-theorem-on-manifolds, thm-chain-rule-for-differentials-of-smooth-maps, prop-identity-maps-and-composites-of-smooth-maps-are-smooth, prop-smooth-maps-are-continuous, prop-smoothness-is-local-on-the-source, def-complete-ordered-field]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  verified:
    model: Codex
    verdict: repaired-and-locally-checked
    date: 2026-09-10
    scope: "Owner-authorized Euclidean-retraction and explicit global-shrinking proof under countable choice; no independent judge"
    delegated_by: owner
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Theorem 6.24 and Proposition 6.25, pp.139-141"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy, Chapter 8 section 1, Theorem 8.1, pp.237-239"
      url: "https://math.stanford.edu/~ralph/bookR4.pdf"
---

## Statement

Assume countable choice $\mathrm{AC}_\omega$. Let $i:S\hookrightarrow M$ be a closed smooth embedded submanifold. Then there are an open neighbourhood $\Omega\subseteq\nu(S)$ of the zero section in the quotient normal bundle and a diffeomorphism $\Phi:\Omega\to U$ onto an open neighbourhood $U$ of $i(S)$ in $M$, with $\Phi(0_p)=i(p)$ for every $p\in S$. Thus $S$ has a tubular neighbourhood in $M$.

## Facts & Assumptions

**Given:** Countable choice and a closed smooth embedded submanifold $i:S\hookrightarrow M$.

[A1] Countable choice is [[def-countable-choice]]. It covers the embedding, Euclidean tube and normal-bundle structures used below. No additional family of local inverse radii will be selected.

[F1] A tubular neighbourhood means precisely the open normal-bundle neighbourhood and diffeomorphism fixed on the zero section specified in the statement ([[def-tubular-neighbourhood-of-an-embedded-submanifold]]).

[L1] Under [A1], $M$ admits a proper smooth embedding $j:M\to\mathbb R^k$; its image $P=j(M)$ is an embedded submanifold and $j:M\to P$ is a diffeomorphism ([[thm-every-smooth-manifold-embeds-in-some-finite-dimensional-euclidean-space]], [[prop-the-image-of-a-smooth-embedding-is-an-embedded-submanifold]]).

[L2] Under [A1], normal addition on the Euclidean normal bundle of $P$ is a diffeomorphism from an open zero-section neighbourhood onto an open $W\supseteq P$ ([[thm-euclidean-tubular-neighbourhood-theorem]]). That bundle's projection $\pi_P(p,v)=p$ is smooth and its addition is $p+v$ ([[def-normal-addition-map-for-a-euclidean-submanifold]]).

[L3] A smooth bundle metric is a fibrewise inner product with smooth local coefficients ([[def-smooth-bundle-metric]]). For such a metric on $TM$, the orthogonal complements $C_p=(di_p(T_pS))^\perp\subseteq T_{i(p)}M$ form a smooth subbundle $C$ and the quotient map restricts to a smooth bundle isomorphism $Q:C\to\nu(S)$, under [A1] ([[prop-an-ambient-riemannian-metric-identifies-the-normal-quotient-with-the-orthogonal-normal-bundle]]). Smooth vector bundles have local linear trivializations ([[def-smooth-vector-bundle-rank-fibre-and-trivial-bundle]]).

[L4] The inclusion $i$ is a smooth embedding; differentials of composites satisfy the chain rule; an invertible differential gives a smooth local inverse ([[prop-the-inclusion-of-an-embedded-submanifold-is-a-smooth-embedding]], [[thm-chain-rule-for-differentials-of-smooth-maps]], [[thm-smooth-inverse-function-theorem-on-manifolds]]).

[L5] Smooth composites are smooth, smooth maps are continuous, and smoothness is local ([[prop-identity-maps-and-composites-of-smooth-maps-are-smooth]], [[prop-smooth-maps-are-continuous]], [[prop-smoothness-is-local-on-the-source]]).

[L6] Nonempty bounded-above real sets have suprema, with their least-upper-bound property ([[def-complete-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 If $S=\varnothing$, take the empty normal-bundle neighbourhood and empty diffeomorphism onto the open set $\varnothing\subseteq M$. Otherwise choose $j:M\to P\subseteq\mathbb R^k$ by [L1] and use [L2] to obtain $E_P:\Theta\to W$. Put $$R=\pi_P\circ E_P^{-1}:W\to P.$$ This is smooth and fixes $P$ pointwise, since $E_P(p,0)=p$. Thus a Euclidean retraction of a neighbourhood of the entire ambient manifold has been supplied without invoking the theorem being proved. [A1, L1, L2, L5, given, choose]

2.1 Define a metric on $TM$ by $$g_x(v,w)=\langle dj_x(v),dj_x(w)\rangle_{\mathbb R^k}.$$ It is positive definite because $dj_x$ is injective. Its coordinate coefficients are finite sums of products of first partial derivatives of the smooth coordinate functions of $j$, so are smooth; hence it is the smooth bundle metric of [L3]. This is an explicitly constructed induced metric, not an invocation of a later Riemannian-metric existence theorem. Apply [L3] to obtain $C$ and $Q:C\to\nu(S)$. For $p\in S$ write $$b(p)=j(i(p)),\qquad \lambda_p(v)=dj_{i(p)}(v)\quad(v\in C_p),\qquad |v|=\|\lambda_p(v)\|.$$ Fibrewise, $T_{i(p)}M=di_p(T_pS)\oplus C_p$. [A1, L1, L3, L4, step 1.1, construct, algebra]

3.1 The map $(p,v)\mapsto(b(p),\lambda_p(v))$ identifies $C$ topologically with its image in $\mathbb R^k\times\mathbb R^k$, and its coordinate expressions are smooth. To check the topology, work in a local frame $e_1,\ldots,e_c$ of $C$. The vectors $\lambda_p(e_\alpha(p))$ are linearly independent and smooth in $p$. Their Gram matrix is invertible, and the coefficients of a vector $z$ in their span are its inner products with these vectors multiplied by the inverse Gram matrix. These coefficient functions are continuous (indeed smooth), by the cofactor formula and the nonzero determinant. Together with the subspace topology of the embedding $b$, this proves the asserted inverse topology in every frame patch. For rank $c=0$ the same assertion just concerns the zero section. Thus the sets $$V_a(p)=\{(q,v)\in C:\|b(q)-b(p)\|<a,\ |v|<a\}$$ are open and form a neighbourhood basis at $(p,0)$. [L3, L4, L5, step 2.1, construct, algebra]

4.1 Define the open subset $$D=\{(p,v)\in C:b(p)+\lambda_p(v)\in W\}$$ and the smooth map $$F:D\to M,\qquad F(p,v)=j^{-1}\bigl(R(b(p)+\lambda_p(v))\bigr).$$ The coordinate formula in step 3.1 makes the addition smooth and continuous, so $D$ is open and contains the zero section; also $F(p,0)=i(p)$. At $(p,0)$, local bundle coordinates identify $T_{(p,0)}C$ with $T_pS\oplus C_p$. Differentiating the addition sends $(u,w)$ to $dj_{i(p)}(di_p(u)+w)$: derivatives of the frame vectors are multiplied by the zero fibre coordinates and vanish. Since $R$ fixes $P$, differentiating that identity and using [L4] shows $$dF_{(p,0)}(u,w)=di_p(u)+w.$$ This is an isomorphism by the direct sum in step 2.1. Therefore [L4] makes $F$ a local diffeomorphism at each zero vector. [L1, L4, L5, step 1.1, step 2.1, step 3.1, construct, algebra]

5.1 For each $p\in S$ form the set $$A_p=\{a\in(0,1]:V_a(p)\subseteq D,\ F|_{V_a(p)}\text{ is a diffeomorphism onto an open subset of }M\}.$$ The neighbourhood basis from step 3.1 and the local inverse from step 4.1 make $A_p$ nonempty. It is bounded above by one, so let $r(p)=\sup A_p\in(0,1]$ by [L6]. The cap is imposed BEFORE taking the supremum, and these unique supremum values require no simultaneous choice of inverse neighbourhoods. Every $0<a<r(p)$ is eligible: choose $b\in A_p$ with $a<b$ and restrict its diffeomorphism to $V_a(p)$. [L6, step 3.1, step 4.1, construct, algebra]

6.1 The map $F$ is a diffeomorphism on $V_{r(p)}(p)$ as well. Each point there lies in a smaller $V_a(p)$ with $a<r(p)$, hence in $D$ and in a local diffeomorphism domain. Any two points lie in a COMMON such smaller domain, by taking $a$ above their finitely many strict distance bounds. Thus $F$ is injective on $V_{r(p)}(p)$; its image is open and its local smooth inverses agree and give a smooth global inverse. This proves the supremum-endpoint claim, not merely local invertibility at zero. [L5, step 5.1, algebra]

7.1 For $p,q\in S$ and $0<a<r(p)-\|b(p)-b(q)\|$, the triangle inequality gives $V_a(q)\subseteq V_{r(p)}(p)$ and $a<1$. Thus $a\in A_q$ by step 6.1. Taking the supremum over such $a$ when the upper endpoint is positive, and using $r(q)>0$ otherwise, proves $$r(q)\ge r(p)-\|b(p)-b(q)\|.$$ Interchanging $p,q$ gives $|r(p)-r(q)|\le\|b(p)-b(q)\|$. Hence $r$ is positive and continuous on $S$. [L6, step 5.1, step 6.1, algebra]

8.1 Shrink by TWO conditions, including displacement of the image in the Euclidean ambient space: $$\Omega_C=\{(p,v)\in D:|v|<r(p)/4,\ \|j(F(p,v))-b(p)\|<r(p)/4\}.$$ All displayed functions are continuous, so $\Omega_C$ is open. It contains every $(p,0)$ because $F(p,0)=i(p)$ and $r(p)>0$. At any $(p,v)\in\Omega_C$, one has $(p,v)\in V_{r(p)}(p)$, so step 6.1 makes $F|_{\Omega_C}$ a local diffeomorphism. No positive smooth radius or geodesic exponential is being assumed. [L5, step 4.1, step 6.1, step 7.1, construct]

9.1 If $F(p,v)=F(q,w)$ for two points of $\Omega_C$, arrange $r(q)\le r(p)$. With $z=j(F(p,v))=j(F(q,w))$, step 8.1 gives $$\|b(p)-b(q)\|\le\|b(p)-z\|+\|z-b(q)\|<\frac{r(p)+r(q)}4\le\frac{r(p)}2<r(p).$$ Also $|v|<r(p)/4$ and $|w|<r(q)/4\le r(p)/4$. Thus both points lie in $V_{r(p)}(p)$, where step 6.1 gives injectivity. They are equal. The displacement condition is essential here: for this retracted map, equality of images alone does not imply the normal-addition identity $b(p)+\lambda_p(v)=b(q)+\lambda_q(w)$. [step 6.1, step 8.1, algebra]

10.1 Set $U=F(\Omega_C)$. Step 8.1 makes $U$ open, and it contains $i(S)$ because the zero section is included. By step 9.1, $F:\Omega_C\to U$ is bijective and a local diffeomorphism. Its inverse is smooth since the local smooth inverses agree, so it is a diffeomorphism. Finally put $$\Omega=Q(\Omega_C)\subseteq\nu(S),\qquad \Phi=F\circ Q^{-1}:\Omega\to U.$$ The bundle isomorphism $Q$ is a diffeomorphism and sends zero vectors to zero vectors. Consequently $\Omega$ is open, contains the zero section, and $\Phi$ is a diffeomorphism with $\Phi(0_p)=i(p)$. By [F1] this is the required tubular neighbourhood. Together with step 1.1 this proves the statement. [F1, L3, L5, step 1.1, step 2.1, step 4.1, step 8.1, step 9.1, construct] ∎
