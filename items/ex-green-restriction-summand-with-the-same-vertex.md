---
id: ex-green-restriction-summand-with-the-same-vertex
kind: example
title: Green restriction summand with the same vertex
status: published
verification:
  audited: 2026-09-12
origin: pipeline
deps: [cor-green-correspondence-for-modules-of-vertex-exactly-p, thm-higman-criterion-for-relative-projectivity, def-vertex-and-source-of-an-indecomposable-module, def-axiom-of-choice]
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references: []
proof_strategy: direct
generation:
  role: example
---

## Example

Assume AC for the inherited Green-correspondence identification. Let $k$ have characteristic $2$, $G=S_3$, $P=H=\{1,(12)\}$ and $M=k$ with trivial action, so every action matrix is $[1]$. Then $N_G(P)=P$, $M$ has vertex $P$, and $\operatorname{Res}_H^G M=k$ is its unique indecomposable restriction summand, also of vertex $P$. It is therefore the Green correspondent. The explicit calculations below do not use choice.

## Facts & Assumptions

**Given:** These concrete groups and their one-dimensional trivial modules.

[A1] AC ([[def-axiom-of-choice]]) is needed only for the inherited general correspondence.

[F1] The exact-$P$ Green correspondence identifies the unique same-vertex restriction summand ([[cor-green-correspondence-for-modules-of-vertex-exactly-p]]).

[F2] Relative projectivity is equivalent to writing the identity as a relative trace ([[thm-higman-criterion-for-relative-projectivity]]).

[F3] A vertex is a minimal $p$-subgroup for relative projectivity ([[def-vertex-and-source-of-an-indecomposable-module]]).

## Verification

1.1 The six permutations are $1,(12),(13),(23),(123),(132)$. Conjugation sends $(12)$ to $(g(1)\ g(2))$. To normalize $P$, a permutation must preserve $\{1,2\}$ and fix $3$, hence is $1$ or $(12)$. Thus $N_G(P)=P=H$. A one-dimensional nonzero module is indecomposable, since dimensions of nonzero summands would add to at least two. [given, algebra]

1.2 Every endomorphism of a one-dimensional trivial module is multiplication by a scalar $a$. For a subgroup $D\leq G$, its relative trace is multiplication by $[G:D]a$, since each conjugation in the trace formula acts trivially. For $D=P$, the trace of the identity is $3\cdot1=1$ in characteristic $2$, proving relative $P$-projectivity. For $D=1$, every trace is $6a=0$, never the identity. The only proper subgroup of $P$ is $1$, so $P$ is a vertex of $M$. [F2, F3, given, algebra]

2.1 Restriction is the same trivial one-dimensional space. Its trace from $H$ is $1$ on the identity, whereas its trace from $1$ is $2a=0$ for every scalar. Thus it is relatively $H$-projective and not relatively $1$-projective, so its vertex is $P=H$. Its dimension gives precisely one nonzero indecomposable summand and no nonzero complement. [F2, F3, step 1.1, algebra]

3.1 The normalizer condition in 1.1 and the two vertex calculations in 1.2–2.1 verify every hypothesis of F1. Under A1 that corollary identifies the sole restriction summand $k$ as the Green correspondent. No group or vector-space choice was needed for the matrices or traces; AC is only propagated from F1. The nonzero condition is witnessed by $\dim_k k=1$. [A1, F1, step 1.1, step 1.2, step 2.1] ∎
