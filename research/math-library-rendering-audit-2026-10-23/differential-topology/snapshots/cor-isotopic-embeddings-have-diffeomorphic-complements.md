---
id: cor-isotopic-embeddings-have-diffeomorphic-complements
kind: corollary
title: "Isotopic embeddings of a compact manifold have diffeomorphic complements"
status: published
origin: session
dependency_level: 10
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-isotopy-extension,
       def-smooth-embedding,
       def-diffeomorphism-and-local-diffeomorphism-of-manifolds,
       def-countable-choice,
       def-smooth-isotopy-of-embeddings-diffeotopy-and-ambient-isotopy,
       def-compact-space]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Morris W. Hirsch, Differential Topology (Graduate Texts in Mathematics 33, Springer 1976; full text retrieved from the Internet Archive Wayback Machine snapshot of the luis.impa.br course copy), Chapter 8 “Isotopy”, §1, printed pp. 177–183 (Theorems 1.1–1.8 and Exercises 3, 7, 9, 10, 11, 16, printed pp. 182–184)"
      url: "https://web.archive.org/web/20230823153633/https://luis.impa.br/aulas/anvar/Hirsch_DifferentialTopology.pdf"
    - title: "The Isotopy Extension Theorem (University of California, Riverside, graduate differential topology hand-out, 2010), complete 14-page document: statement and applications of the isotopy extension theorem, uniqueness of tubular and collar neighbourhoods, and the knotted-line counterexample to ambient extension"
      url: "https://math.ucr.edu/~res/math260s10/isotopyextension.pdf"
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $N$ be a smooth manifold without boundary, let $M$ be a compact smooth manifold and let $f_0,f_1:M\to N$ be isotopic embeddings. Then there is a diffeomorphism $H:N\to N$ with $H\circ f_0=f_1$; consequently $H$ restricts to a diffeomorphism of pairs $(N,f_0(M))\cong(N,f_1(M))$, hence restricts to a diffeomorphism of complements
$$N\setminus f_0(M)\cong N\setminus f_1(M).$$
Moreover, if $W$ is a smooth manifold containing $M$ as an embedded submanifold and $f_0$ extends to an embedding $W\to N$, then $f_1$ extends to an embedding $W\to N$ as well.

## Facts & Assumptions

**Given:** Countable choice, a boundaryless $N$, compact $M$ and isotopic embeddings $f_0,f_1:M\to N$.

[F1] Isotopic embeddings are joined by a smooth isotopy $F:M\times I\to N$ with $F_0=f_0$ and $F_1=f_1$; an ambient isotopy $H$ of $N$ extends $F$ when $H_t\circ F_0=F_t$ ([[def-smooth-isotopy-of-embeddings-diffeotopy-and-ambient-isotopy]]).

[L1] Under $\mathrm{AC}_\omega$, every smooth isotopy of a compact $M$, possibly with boundary, into a boundaryless $N$ extends to an ambient isotopy supported in any prescribed neighbourhood of its image, with no constancy assumption near the ends ([[thm-isotopy-extension]], clause 4). [F1]

[L2] A diffeomorphism is a bijective smooth map with smooth inverse; a smooth embedding is an injective immersion that is a homeomorphism onto its image ([[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]], [[def-smooth-embedding]]).

[A1] Countable choice is inherited from the extension theorem [L1]; the rest of the argument selects nothing ([[def-countable-choice]], [[def-compact-space]]).

## Proof

**Proof technique:** direct.

1.1 Let $F:M\times I\to N$ be an isotopy with $F_0=f_0$ and $F_1=f_1$ by [F1]; since $M$ is compact and [L1] allows source boundary with the isotopy definition's product-corner coordinate convention, [L1] applied to $F$ produces an ambient isotopy $H:N\times I\to N$ with $H_t\circ f_0=F_t$ for all $t\in I$, supported in a prescribed neighbourhood of $F(M\times I)$. [F1, L1, A1]

2.1 The time-one map $H_1$ is a diffeomorphism of $N$ by [L2] and satisfies $H_1\circ f_0=F_1=f_1$; hence it restricts to a bijection $f_0(M)\to f_1(M)$ with smooth inverse (the restriction of $H_1^{-1}$), so it is a diffeomorphism of pairs $(N,f_0(M))\to(N,f_1(M))$ and carries $N\setminus f_0(M)$ onto $N\setminus f_1(M)$ with smooth inverse, giving the claimed diffeomorphism of complements. [L2, step 1.1]

3.1 The extension clause: if $g:W\to N$ is an embedding extending $f_0$, then $H_1\circ g:W\to N$ is a smooth map with injective differential (a composite of the immersion $g$ and the diffeomorphism $H_1$) and is injective because $H_1$ and $g$ are; it is a smooth embedding again by [L2] applied to the composite, and it extends $f_1$ because $(H_1\circ g)|_M=H_1\circ f_0=f_1$. [L2, step 2.1]

4.1 The claims are steps 2.1 and 3.1. [step 2.1, step 3.1] ∎
