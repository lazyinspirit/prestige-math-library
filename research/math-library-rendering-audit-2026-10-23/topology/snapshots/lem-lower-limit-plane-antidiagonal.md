---
id: lem-lower-limit-plane-antidiagonal
kind: lemma
title: "The lower-limit plane has a countable dense set and a closed discrete antidiagonal of size $|\\mathbb{R}|$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-lower-limit-topology, def-product-topology, def-dense-top, def-subspace-topology-top, thm-rationals-countable, lem-rat-embeds-dense, thm-product-of-countable, thm-r-uncountable]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "G. Gruenhage, General Topology Course Notes, Sorgenfrey plane"
      url: "https://webhome.auburn.edu/~gruengf/papers/Topology_Course_Notes.pdf"
    - title: "Sorgenfrey plane (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sorgenfrey_plane"
    - title: "Sorgenfrey topology (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Sorgenfrey_topology"
pipeline_run: null
---

## Statement

In the square of the lower-limit line, $\mathbb Q\times\mathbb Q$ is a countable dense subset, while $D=\{(x,-x):x\in\mathbb R\}$ is closed and discrete and has the same cardinality as $\mathbb R$.

## Facts & Assumptions

**Given:** The lower-limit plane and its basic rectangles $[a,b)\times[c,d)$.

[F1] Basic product-open sets restrict finitely many coordinates; for this binary product they are the basic rectangles ([[def-product-topology]], [[def-lower-limit-topology]]).

[F2] A subset is dense iff it meets every nonempty basic open set, the rational numbers are countably infinite, and a rational lies strictly between any two distinct reals ([[def-dense-top]], [[thm-rationals-countable]], [[lem-rat-embeds-dense]]).

[L1] A product of two at most countable sets is at most countable, and $\mathbb R$ is uncountable ([[thm-product-of-countable]], [[thm-r-uncountable]]).

## Proof

**Proof technique:** direct.

1.1 Every nonempty $[a,b)\times[c,d)$ contains a point of $\mathbb Q\times\mathbb Q$: choose rationals $p\in[a,b)$ and $q\in[c,d)$. Hence $\mathbb Q\times\mathbb Q$ is dense, and it is at most countable by [L1]. [F1, F2, L1]

1.2 The map $x\mapsto(x,-x)$ is a bijection from $\mathbb R$ onto $D$, so $D$ has cardinality $|\mathbb R|$ and is uncountable. [L1]

1.3 For $(x,-x)\in D$, the rectangle $[x,x+1)\times[-x,-x+1)$ meets $D$ only at $(x,-x)$, so $D$ is discrete in its subspace topology. [F1]

1.4 If $(u,v)\notin D$ and $u+v>0$, every sufficiently small lower-limit rectangle at $(u,v)$ has positive coordinate sum; if $u+v<0$, choose its two right endpoints so that their total increment is less than $-(u+v)$. In either case the rectangle misses $D$, so the complement of $D$ is open. [F1]

2.1 Therefore $D$ is closed discrete, with the stated cardinality, and the plane has the stated countable dense subset. [step 1.1, step 1.2, step 1.3, step 1.4] ∎
