---
id: lem-reversing-a-cobordism-gives-symmetry
kind: lemma
title: Reversing a cobordism gives symmetry
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-unoriented-smooth-cobordism-of-closed-manifolds
  - def-oriented-smooth-cobordism
  - def-oriented-smooth-manifold-and-oriented-chart
  - def-induced-boundary-orientation
  - prop-boundary-orientation-is-independent-of-the-outward-vector-field
  - def-orientation-preserving-parametrization
  - def-diffeomorphism-and-local-diffeomorphism-of-manifolds
  - def-smooth-immersion-and-embedding-for-manifolds-with-boundary
provenance:
  statement: literature-derived
  proof: literature-derived
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-13.md"
      - "research/frontier-38-owner-30-alpha-batch-13-5a.md"
      - "research/frontier-38-owner-30-step5-hash-13-post-5a.json"
    content_sha256: "96091b7a038d04176b7398037d1a05950642e8de3c1127ea43828afcc46c1c1e"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: https://people.math.harvard.edu/~dafr/bordism.pdf
      locator: "Definition 1.22, Remark 1.24 and (2.20)-(2.22), printed pp.9-10 and 18-19"
    - title: "John Milnor and James Stasheff, Characteristic Classes (original pagination)"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
      locator: "Lemma 17.2, symmetry, printed p.201"
---

## Statement

If $(W,\theta_0,\theta_1)$ is a bordism from a closed smooth manifold $M_0$ to a
closed smooth manifold $M_1$
([[def-unoriented-smooth-cobordism-of-closed-manifolds]]), then swapping the
two boundary parts and the two collar parametrisations yields a bordism from
$M_1$ to $M_0$.

In the oriented theory, if $M_0$ and $M_1$ are oriented and
$(W,\theta_0,\theta_1)$ with an orientation of $W$ is an oriented bordism from
$M_0$ to $M_1$ ([[def-oriented-smooth-cobordism]]), then the same manifold with
the opposite orientation, again with the two boundary parts and the two collar
parametrisations interchanged, is an oriented bordism from $M_1$ to $M_0$: the
induced boundary orientations match $-M_1$ on the incoming face and $M_0$ on the
outgoing face.

## Facts & Assumptions

**Given:** A bordism $(W,\theta_0,\theta_1)$ from $M_0$ to $M_1$ with boundary decomposition $\partial W=(\partial W)_0\sqcup(\partial W)_1$ and collars $\theta_0:[0,1)\times M_0\to W$, $\theta_1:(-1,0]\times M_1\to W$; in the oriented case, orientations $o_0,o_1$ and an orientation of $W$ with induced boundary orientations $-o_0$ on $(\partial W)_0$ and $o_1$ on $(\partial W)_1$.

[F1] A bordism is data $(W,\theta_0,\theta_1)$ with a decomposition of $\partial W$ into open and closed parts and smooth embeddings $\theta_i$ onto open collar neighbourhoods with $\theta_i(\{0\}\times M_i)=(\partial W)_i$ ([[def-unoriented-smooth-cobordism-of-closed-manifolds]], [[def-smooth-immersion-and-embedding-for-manifolds-with-boundary]]).

[F2] An oriented bordism additionally carries an orientation of $W$ whose induced boundary orientation is $-o_0$ on the incoming face and $o_1$ on the outgoing face; the opposite orientation $-M$ of an oriented manifold reverses every determinant ray pointwise ([[def-oriented-smooth-cobordism]], [[def-oriented-smooth-manifold-and-oriented-chart]]).

[F3] The induced boundary orientation is defined by the outward-normal-first rule: an outward vector followed by a positive basis of the boundary is a positive basis of the ambient tangent space; it is independent of the chosen outward vector field ([[def-induced-boundary-orientation]], [[prop-boundary-orientation-is-independent-of-the-outward-vector-field]]).

[F4] The reflection $s\mapsto-s$ is a diffeomorphism of $[0,1)$ onto $(-1,0]$ and of $(-1,0]$ onto $[0,1)$ ([[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]], [[def-orientation-preserving-parametrization]]).

## Proof

1.1 (The dual bordism.) Keep the manifold $W$ and swap the roles of the two boundary parts, setting $(\partial W')_0:=(\partial W)_1$ and $(\partial W')_1:=(\partial W)_0$; these are again open and closed in $\partial W$ and cover it. Define $$\theta'_0:[0,1)\times M_1\to W,\qquad \theta'_0(s,x):=\theta_1(-s,x),\qquad \theta'_1:(-1,0]\times M_0\to W,\qquad \theta'_1(s,x):=\theta_0(-s,x).$$ The reflection $s\mapsto-s$ maps $[0,1)$ onto $(-1,0]$ and $(-1,0]$ onto $[0,1)$ by [F4], so the composites are defined; each $\theta'_i$ is a smooth embedding, being a composite of the smooth embedding $\theta_{1-i}$ with a diffeomorphism of the interval factor, and its image is the same open collar neighbourhood as that of $\theta_{1-i}$. Moreover $\theta'_0(\{0\}\times M_1)=\theta_1(\{0\}\times M_1)=(\partial W)_1=(\partial W')_0$ and $\theta'_1(\{0\}\times M_0)=(\partial W)_0=(\partial W')_1$. By [F1], $(W,\theta'_0,\theta'_1)$ is a bordism from $M_1$ to $M_0$. No choice is used. [F1, F4]

2.1 (The oriented dual.) Suppose now that $M_0,M_1$ are oriented and $W$ carries an orientation making $(W,\theta_0,\theta_1)$ an oriented bordism from $M_0$ to $M_1$. Keep the swapped data of step 1.1 and give $W$ the opposite orientation. By [F3], the induced boundary orientation of a face is computed from the ambient orientation by the outward-normal-first rule, so reversing the ambient orientation reverses the induced orientation of every boundary face: for a face with induced orientation $\mu$ under one orientation of $W$, the same face has induced orientation $-\mu$ under the opposite orientation. Hence the new incoming face $(\partial W')_0=(\partial W)_1$ carries $-o_1=-M_1$ and the new outgoing face $(\partial W')_1=(\partial W)_0$ carries $-(-o_0)=o_0=M_0$. By [F2], $(W,\theta'_0,\theta'_1)$ with the opposite orientation is an oriented bordism from $M_1$ to $M_0$. [F2, F3, step 1.1]

3.1 (Assembly.) Step 1.1 gives symmetry of the unoriented cobordism relation; step 2.1 gives symmetry of the oriented relation with the reversed orientation on the dual bordism and the required boundary signs $-M_1$ incoming and $M_0$ outgoing. The constructions are explicit and use no choice principle. [F1, F2, step 1.1, step 2.1] ∎
