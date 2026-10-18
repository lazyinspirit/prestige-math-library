---
id: thm-filtered-l-infinity-morphisms-preserve-maurer-cartan-elements
kind: theorem
title: "Filtered L∞-morphisms preserve Maurer–Cartan elements and compose on solutions"
status: draft
origin: session
deps:
  - def-filtered-l-infinity-morphism
  - lem-filtered-l-infinity-taylor-map-extends-to-completed-coalgebra
  - def-maurer-cartan-element-of-complete-filtered-l-infinity-algebra
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification: {}
sources:
  references:
    - title: "Vasily Dolgushev and Christopher Rogers, A Version of the Goldman–Millson Theorem for Filtered L-infinity-Algebras, §§1–2"
      url: "https://arxiv.org/pdf/1407.6735"
    - title: "Ezra Getzler, Lie theory for nilpotent L-infinity-algebras, §4"
      url: "https://arxiv.org/pdf/math/0404003"
---

## Statement

Let $f:W\to Z$ be a filtered L∞-morphism between complete filtered algebras over a characteristic-zero field. For every $w\in F^1W^0$, the Taylor series $f_*(w)=\sum_{n\ge1}f_n(w^n)/n!$ converges in $F^1Z^0$, and its curvature satisfies

$$c_r(f_*(w))=\sum_{n\ge0}\frac1{n!}f_{n+1}(w^n,c_q(w)),\qquad c_q(w)=\sum_{n\ge1}\frac{q_n(w^n)}{n!}.$$

Consequently $f_*$ defines an actual continuous map $\operatorname{MC}(W)\to\operatorname{MC}(Z)$, with Maurer–Cartan elements as in [[def-maurer-cartan-element-of-complete-filtered-l-infinity-algebra]]. If $g:Z\to T$ is another filtered L∞-morphism, the composite $h=g\circ f$ has Taylor coefficients

$$h_n(x_1,\ldots,x_n)=\sum_{s=1}^n\frac1{s!}\sum_{(B_1,\ldots,B_s)}\epsilon(B_1,\ldots,B_s;x)\,g_s\bigl(f_{|B_1|}(x_{B_1}),\ldots,f_{|B_s|}(x_{B_s})\bigr),$$

where blocks and signs are as in [[def-filtered-l-infinity-morphism]]. The composite is filtered, and

$$(g\circ f)_*(w)=g_*(f_*(w)).$$

Identity morphisms act as identities. These are equalities of convergent elements, not merely formal Taylor expressions; no quasi-isomorphism hypothesis is needed.

## Facts & Assumptions

**Given:** Complete filtered shifted L∞-algebras over one characteristic-zero field and the stated filtered morphisms.

[F1] [[lem-filtered-l-infinity-taylor-map-extends-to-completed-coalgebra]] supplies the completed coaugmented coalgebras, exponentials, curvature and marked-input identities, and continuous Taylor extensions.

[F2] [[def-maurer-cartan-element-of-complete-filtered-l-infinity-algebra]] defines $\operatorname{MC}(W)$ by $w\in F^1W^0$ and $c_q(w)=0$.

## Proof

1.1 The series defining $u=f_*(w)$ converges in $F^1Z^0$ by [F1]. Since $FQ=RF$, its exponential satisfies $c_r(u)e^u=R(e^u)=RF(e^w)=FQ(e^w)=F(c_q(w)e^w)$. The marked-input identity of [F1] rewrites the last expression as $(\sum_{n\ge0}f_{n+1}(w^n,c_q(w))/n!)e^u$. Multiply by $e^{-u}$ to obtain the curvature formula. This series converges since its $n$th term has filtration at least $n+1$. [F1, algebra]

1.2 The continuous coalgebra map $GF$ intertwines coderivations because $GFQ=GRF=S GF$, where $S$ is the coderivation on $T$. Its length-one projection on $S^nW$ applies $g_s$ to the length-$s$ part of the partition formula for $F$, giving exactly the stated formula for $h_n$. Every term has degree zero and additive filtration, because first the $f$ blocks and then $g_s$ add the input filtration indices. Thus $h$ is a filtered morphism. [F1, algebra]

2.1 If $c_q(w)=0$, every term on the right vanishes, so $c_r(f_*(w))=0$ and [F2] gives the asserted map on Maurer–Cartan elements. For $w-v\in F^pW$ with $w,v\in F^1W^0$, the multilinear telescoping expansion of $f_n(w^n)-f_n(v^n)$ has in every term one input in $F^pW$ and all other inputs in $F^1W$, so it lies in $F^{p+n-1}Z$. Hence $f_*(w)-f_*(v)\in F^pZ$. This proves continuity in the filtration topology. [F1, F2, step 1.1, algebra]

2.2 For repeated degree-zero $w$, the coefficient formula becomes $h_n(w^n)=\sum_{s=1}^n(1/s!)\sum_{i_1+\cdots+i_s=n,\ i_j\ge1}(n!/(i_1!\cdots i_s!))g_s(f_{i_1}(w^{i_1}),\ldots,f_{i_s}(w^{i_s}))$. After dividing by $n!$ and summing over $n$, the result is $\sum_{s\ge1}(1/s!)g_s((\sum_{i\ge1}f_i(w^i)/i!)^s)=g_*(f_*(w))$. The regrouping is finite modulo $F^N$, since each input has filtration at least one and all terms with input count at least $N$ vanish there. Equivalently $GF(e^w)=G(e^{f_*(w)})=e^{g_*(f_*(w))}$, and projection to $T$ gives the same result. [F1, step 1.2, algebra]

3.1 The identity Taylor family has only its linear term nonzero, so its Taylor pushforward is $w$ itself. Composition is associative because composition of the continuous coalgebra maps is associative; it can also be read from refinement of the finite set partitions modulo each filtration quotient. Together with the preceding calculations this proves all the claims on actual solution sets. [step 1.1, step 2.1, step 1.2, step 2.2, algebra] ∎
