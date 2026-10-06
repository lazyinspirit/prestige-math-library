---
id: lem-higher-index-handle-attachments-do-not-change-lower-homology
kind: lemma
title: "Attaching handles of index at least q preserves homology below q-1"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-one-handle-changes-relative-homology-in-one-degree, lem-long-exact-sequence-of-a-triple-in-singular-homology, thm-long-exact-sequence-of-a-pair-in-singular-homology, def-relative-singular-homology, def-attaching-a-smooth-handle-with-corner-rounding, def-field, def-countable-choice]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction-on-handles
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, Sections 2.1-2.2 (relative homology and long exact sequences)"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy, Chapter 12 Section 5, printed pp. 489-493 (PDF pp. 501-505)"
      url: "https://math.stanford.edu/~ralph/bookR4.pdf"
dependency_level: 1
---

## Statement

Assume $\mathrm{AC}_\omega$, let $F$ be a field, and let $q$ be an integer. Let $W'$ be obtained from a
smooth manifold $W$ with boundary by successively attaching finitely many
rounded handles of indices at least $q$
([[def-attaching-a-smooth-handle-with-corner-rounding]]). Then
$H_i(W',W;F)=0$ for every $i\le q-1$. Consequently the inclusion
$W\to W'$ induces isomorphisms $H_i(W;F)\to H_i(W';F)$ for $i\le q-2$ and a
surjection for $i=q-1$.

## Facts & Assumptions

**Given:** A field $F$, a smooth manifold $W$ with boundary, handles attached successively to obtain $W'\supseteq W$ with indices $\ell_1,\dots,\ell_r\ge q$, and the intermediate manifolds $W_0=W\subseteq W_1\subseteq\cdots\subseteq W_r=W'$.

[F1] If $N'=N\cup_\varphi h^k$ is obtained by attaching a rounded $k$-handle to a smooth manifold $N$ with boundary, then $H_i(N',N;F)=0$ for $i\ne k$ and $H_k(N',N;F)\cong F$, with the core class as generator ([[lem-one-handle-changes-relative-homology-in-one-degree]], part (a)).

[F2] For spaces $B\subseteq A\subseteq X$ and every abelian group $G$ there is a long exact sequence $$\cdots\to H_n(A,B;G)\to H_n(X,B;G)\to H_n(X,A;G)\xrightarrow{\delta}H_{n-1}(A,B;G)\to\cdots,$$ with the first two maps induced by inclusions ([[lem-long-exact-sequence-of-a-triple-in-singular-homology]]).

[F3] For $A\subseteq X$ the pair sequence $\cdots\to H_n(A;G)\to H_n(X;G)\to H_n(X,A;G)\xrightarrow{\delta}H_{n-1}(A;G)\to\cdots$ is exact, with the first two maps induced by inclusions ([[thm-long-exact-sequence-of-a-pair-in-singular-homology]]).

[L1] For $A=X$ the relative group $H_n(X,X;G)$ vanishes for every $n$ ([[def-relative-singular-homology]]).

## Proof

**Proof technique:** induction-on-handles.

1.1 The intermediate manifolds $W_j$ are smooth manifolds with boundary, since attaching a rounded handle to a smooth manifold with boundary produces one, and $W_j$ is obtained from $W_{j-1}$ by attaching one handle of index $\ell_j\ge q$ for each $j$. [given]

1.2 Claim, by induction on $j$, that $H_i(W_j,W;F)=0$ for every $i\le q-1$. For $j=0$ we have $W_0=W$ and $H_i(W,W;F)=0$ by [L1]. [L1, given]

2.1 Induction step: by [F1] applied to the attachment $W_{j-1}\to W_j$, the group $H_i(W_j,W_{j-1};F)$ is $F$ for $i=\ell_j$ and zero otherwise; since $\ell_j\ge q$, it vanishes for every $i\le q-1$. [F1, step 1.1]

3.1 The long exact sequence of the triple $(W_j,W_{j-1},W)$ from [F2] reads $$\cdots\to H_i(W_{j-1},W;F)\to H_i(W_j,W;F)\to H_i(W_j,W_{j-1};F)\to H_{i-1}(W_{j-1},W;F)\to\cdots.$$ For $i\le q-1$ the first and last terms vanish by the induction hypothesis of step 1.2 and the middle term vanishes by step 2.1; exactness at the middle node then forces $H_i(W_j,W;F)=0$. This completes the induction. [F2, step 1.2, step 2.1]

4.1 Taking $j=r$ gives $H_i(W',W;F)=0$ for every $i\le q-1$. [step 3.1]

5.1 The pair sequence contains $H_{i+1}(W\prime,W;F)\to H_i(W;F)\to H_i(W\prime;F)\to H_i(W\prime,W;F)$. For $i\le q-2$ both relative groups vanish by step 4.1, giving an isomorphism. For $i=q-1$ only the right relative group is known to vanish, giving a surjection; its kernel is the image of the connecting map from $H_q(W\prime,W;F)$. Thus injection in this degree is not asserted. [F3, step 4.1] ∎

## Remarks

- **The case $q=0$.** Every index is at least $0$, so the vanishing statement is about $i\le-1$, where all homology vanishes; the isomorphism statements are about degrees $\le-2$ and $-1$ and are vacuous. The lemma is used only for $q\ge1$.
- **Use.** This is the handle analogue of the skeletal stabilization step in the computation of cellular homology: handles attached above degree $j$ leave the homology below $j$ unchanged, which is what lets the handle chain complex of an index-ordered presentation compute $H_*(M;F)$.
