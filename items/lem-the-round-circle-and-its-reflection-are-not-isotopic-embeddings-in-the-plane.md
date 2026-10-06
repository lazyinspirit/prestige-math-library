---
id: lem-the-round-circle-and-its-reflection-are-not-isotopic-embeddings-in-the-plane
kind: lemma
title: "The round circle and its reflection are not isotopic embeddings in the plane"
status: draft
origin: session
deps: [thm-isotopy-extension, prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps, prop-degree-of-an-orientation-preserving-or-reversing-diffeomorphism, def-induced-boundary-orientation, def-primary-double-point-obstruction-to-removing-self-intersections, thm-choice-implies-dependent-implies-countable-choice, def-axiom-of-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Morris W. Hirsch, Differential Topology, Chapter 8 section 1, isotopy extension"
      url: https://web.archive.org/web/20230823153633/https://luis.impa.br/aulas/anvar/Hirsch_DifferentialTopology.pdf
---

## Statement

Assume AC. The embeddings $i:S^1\to\mathbb R^2$, $i(x_1,x_2)=(x_1,x_2)$, and $r:S^1\to\mathbb R^2$, $r(x_1,x_2)=(x_1,-x_2)$, have trivial normal lines and empty double point sets, but are not isotopic as parametrized embeddings. Their primary unoriented double point counts are both zero.

## Facts & Assumptions

**Given:** AC, the unit circle $S^1=\partial D^2$ with boundary orientation, and $i,r$ as stated.

[F1] A smooth isotopy of embeddings of a compact source extends to an ambient isotopy, after flattening the time parameter near its ends; the theorem assumes countable choice, supplied by AC ([[thm-isotopy-extension]], [[thm-choice-implies-dependent-implies-countable-choice]], [[def-axiom-of-choice]]).

[F2] A coordinate reflection of the circle has degree $-1$; an orientation-preserving circle diffeomorphism has degree $1$, with the boundary orientation using the outward normal first ([[prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps]], [[prop-degree-of-an-orientation-preserving-or-reversing-diffeomorphism]], [[def-induced-boundary-orientation]]).

[F3] For a self-transverse immersion $M^m\to X^{2m}$ the unoriented primary count is the number of unordered double point pairs modulo two; an embedding has empty pair set ([[def-primary-double-point-obstruction-to-removing-self-intersections]]).

## Proof

1.1 Both maps are embeddings. The radial fields $n_i(x)=x$ and $n_r(x)=r(x)$ are smooth nowhere-zero normal vectors: reflection preserves the inner product, so $\langle r(x),dr_x(v)\rangle=\langle x,v\rangle=0$ for tangent vectors $v$. They trivialize the normal lines. Both double point sets are empty, so self-transversality is vacuous and [F3] gives zero primary counts. [given, F3, construct, algebra]

1.2 Suppose an isotopy exists. By [F1] its ambient extension has time-one diffeomorphism $H$ with $H\circ i=r$. Its orientation sign is positive, since the differential determinants of the ambient isotopy vary continuously from the identity and never vanish. Also $H(S^1)=S^1$. The plane complement consists of the open disk and its exterior, and $H$ permutes these components. The image of the closed disk is compact; thus the open disk cannot map to the exterior, whose closure is unbounded. Therefore $H(D^2)=D^2$. [F1, given, construct]

2.1 The orientation-preserving disk diffeomorphism $H|_{D^2}$ carries outward-pointing boundary vectors to outward-pointing vectors: in local boundary coordinates a diffeomorphism preserving the interior has positive inward-coordinate derivative on the boundary. Consequently it preserves the induced boundary orientation, so $H|_{S^1}$ has degree $1$ by [F2]. But $H\circ i=r$ identifies this restriction with the coordinate reflection of degree $-1$, a contradiction. Thus the embeddings are not isotopic, while their normals and primary counts agree by step 1.1. [F2, step 1.1, step 1.2] ∎
