---
id: thm-vertex-cover-reduces-to-set-cover
kind: theorem
title: "Vertex cover polynomial-time many-one reduces to set cover"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-clique-independent-set-and-vertex-cover-problems, def-set-cover, def-polynomial-time-many-one-reduction]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Fabrizio Iozzi and Luca Trevisan, Handout NP3"
      url: "https://lucatrevisan.github.io/30540/notes-np3.pdf"
verification:
  audited: 2026-09-05
  precheck: pass
---

## Statement

VERTEX COVER polynomial-time many-one reduces to SET COVER.

## Facts & Assumptions

**Given:** A VERTEX COVER instance $(G,k)$, where $G=(V,E)$.

[L1] A polynomial-time many-one reduction is a total polynomial-time function preserving membership in both directions, by [[def-polynomial-time-many-one-reduction]].

[F1] A vertex cover is a subset of vertices meeting every edge, by [[def-clique-independent-set-and-vertex-cover-problems]].

[F2] A set cover chooses at most $k$ members of a family of subsets whose union is the whole universe, by [[def-set-cover]].

## Proof

**Proof technique:** direct.

1.1 Let the SET COVER universe be the edge set $U:=E$. For each vertex $v\in V$, define the subset $S_v:=\{\, e\in E : v\in e \,\}$. Output the SET COVER instance $(U,\{S_v : v\in V\},k)$. This is computable in polynomial time by scanning the incidence relation of $G$. [F1, F2, given, construct]

2.1 If $C\subseteq V$ is a vertex cover with $|C|\le k$, then every edge of $G$ has an endpoint in $C$. Equivalently, every element of $U=E$ lies in one of the sets $S_v$ with $v\in C$. Hence $\{S_v : v\in C\}$ is a set cover of size at most $k$. [F1, F2, step 1.1]

2.2 Conversely, if $\{S_v : v\in C\}$ is a set cover of size at most $k$, then every edge $e\in E$ belongs to some $S_v$ with $v\in C$. By definition of $S_v$, that means $v$ is an endpoint of $e$. Therefore $C$ is a vertex cover of size at most $k$. [F1, F2, step 1.1]

3.1 Steps 2.1 and 2.2 prove $(G,k)\in VERTEX\ COVER \iff (U,\{S_v\}_{v\in V},k)\in SET\ COVER$. By [L1], the construction in step 1.1 is a polynomial-time many-one reduction. [L1, step 1.1, step 2.1, step 2.2] ∎
