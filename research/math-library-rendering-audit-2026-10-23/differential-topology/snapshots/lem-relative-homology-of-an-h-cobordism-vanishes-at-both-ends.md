---
id: lem-relative-homology-of-an-h-cobordism-vanishes-at-both-ends
kind: lemma
title: "Relative homology of an h-cobordism vanishes at both ends"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 2
deps: [def-h-cobordism, def-relative-singular-homology, thm-long-exact-sequence-of-a-pair-in-singular-homology, thm-homotopy-equivalences-induce-isomorphisms-on-singular-homology, def-homotopy-equivalence]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: "John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow, Princeton University Press 1965; scanned edition with searchable text layer)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf"
      locator: "Introduction and §§1--9, printed pp. 1--113; Concluding Remarks, printed pp. 113--114"
    - title: "Wolfgang Lück, A Basic Introduction to Surgery Theory (ICTP lecture notes, 27 October 2004; complete author text)"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "Chapter 1, printed pp. 1--22 (§§1.1--1.5)"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $(W;M_0,M_1)$ be an h-cobordism ([[def-h-cobordism]]) and let $G$ be any
abelian coefficient group. Then $H_k(W,M_0;G)=0$ and $H_k(W,M_1;G)=0$ for every
$k\ge0$; equivalently, each inclusion $M_i\hookrightarrow W$ induces an
isomorphism $H_k(M_i;G)\to H_k(W;G)$ for all $k\ge0$. In particular
$H_k(W,M_i;\mathbb Z)=0$ for both ends. No orientability, finite generation or
simple connectivity hypothesis is used, and the conclusion is symmetric in the
two ends.

## Facts & Assumptions

**Given:** An h-cobordism $(W;M_0,M_1)$ and an abelian group $G$.

[F1] Both face inclusions of an h-cobordism are homotopy equivalences: the triad $(W;M_0,M_1)$ has $\dim W=n+1\ge2$ and both $M_0\hookrightarrow W$ and $M_1\hookrightarrow W$ are homotopy equivalences; the definition is symmetric in the two faces ([[def-h-cobordism]]).

[F2] If $f:X\to Y$ is a homotopy equivalence, then for every $n\ge0$ and every abelian group $G$ the induced map $H_n(f_\#):H_n^{\mathrm{sing}}(X;G)\to H_n^{\mathrm{sing}}(Y;G)$ is an isomorphism ([[thm-homotopy-equivalences-induce-isomorphisms-on-singular-homology]]).

[F3] For every subspace $A\subseteq X$ the singular homology groups of the pair form the long exact sequence
$$\cdots\to H_k(A;G)\to H_k(X;G)\to H_k(X,A;G)\xrightarrow{\delta}H_{k-1}(A;G)\to H_{k-1}(X;G)\to\cdots$$
(the display is printed for $n$ and degree $n-1$ in the source), and $H_k(X,A;G)$ denotes the relative singular homology group in degree $k$ ([[thm-long-exact-sequence-of-a-pair-in-singular-homology]], [[def-relative-singular-homology]]).

## Proof

**Proof technique:** direct.

1.1 By [F1] the inclusion $\iota_0:M_0\hookrightarrow W$ is a homotopy equivalence, so by [F2] the induced map $H_k(\iota_0;G):H_k(M_0;G)\to H_k(W;G)$ is an isomorphism for every $k\ge0$, in particular surjective; the same applies to $\iota_1:M_1\hookrightarrow W$. [F1, F2, given]

2.1 Fix $k\ge0$ and read the exact sequence of [F3] for the pair $(W,M_0)$ around $H_k(W,M_0;G)$, namely $H_k(M_0;G)\xrightarrow{H_k(\iota_0;G)}H_k(W;G)\to H_k(W,M_0;G)\xrightarrow{\delta}H_{k-1}(M_0;G)\xrightarrow{H_{k-1}(\iota_0;G)}H_{k-1}(W;G)$. Surjectivity of $H_k(\iota_0;G)$ together with exactness at $H_k(W;G)$ makes $H_k(W;G)\to H_k(W,M_0;G)$ the zero map; injectivity of $H_{k-1}(\iota_0;G)$ together with exactness at $H_{k-1}(M_0;G)$ makes $\delta$ the zero map (for $k=0$ the group $H_{-1}(M_0;G)$ is zero, so $\delta$ is automatically zero). The image of the zero map $H_k(W;G)\to H_k(W,M_0;G)$ is $0$, so exactness at $H_k(W,M_0;G)$ gives $\ker\delta=0$, and since $\delta=0$ this says $H_k(W,M_0;G)=0$. [F3, step 1.1]

3.1 Interchanging the roles of $M_0$ and $M_1$, which is legitimate for an h-cobordism by [F1], the argument of step 2.1 gives $H_k(W,M_1;G)=0$ for every $k\ge0$. By step 1.1 each inclusion induces an isomorphism in every degree, and specialising $G=\mathbb Z$ gives $H_k(W,M_0;\mathbb Z)=H_k(W,M_1;\mathbb Z)=0$. [F1, F2, F3, step 1.1, step 2.1] ∎
