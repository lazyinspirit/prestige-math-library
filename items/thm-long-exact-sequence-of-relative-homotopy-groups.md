---
id: thm-long-exact-sequence-of-relative-homotopy-groups
kind: theorem
title: Long exact sequence of relative homotopy groups
deps: ["lem-relative-homotopy-operations-are-well-defined-in-their-valid-degrees", "lem-relative-cubical-disk-model-and-compression", "prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant", "def-path-connected"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Hatcher, Algebraic Topology, Chapter 4
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf
      locator: §4.1, Definitions and Basic Constructions, pp.340–346
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

For every based pair $(X,A,x_0)$, the natural sequence
$$\cdots\longrightarrow\pi_n(A)\xrightarrow{i_*}\pi_n(X)\xrightarrow{j_*}\pi_n(X,A)\xrightarrow{\partial}\pi_{n-1}(A)\longrightarrow\cdots\longrightarrow\pi_1(X,A)\xrightarrow{\partial}\pi_0(A)\xrightarrow{i_*}\pi_0(X)$$
is exact at each term with an incoming and outgoing arrow. Exactness means that the incoming image equals the inverse image of the distinguished element under the outgoing arrow. Basepoints are $x_0$ throughout. No terminal surjectivity onto $\pi_0(X)$ is claimed. Arrows are homomorphisms where both group structures have been established.

## Facts & Assumptions

[F1] Boundary maps, pair maps and their group ranges are well-defined. [[lem-relative-homotopy-operations-are-well-defined-in-their-valid-degrees]]

[F2] Relative nullity is equivalent to compression into A fixing the whole disk boundary. [[lem-relative-cubical-disk-model-and-compression]]

[F3] Based maps induce homomorphisms and preserve homotopy classes. [[prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant]]

[F4] Two points lie in the same path component when a path joins them. [[def-path-connected]]


## Proof

**Given:** The spaces, maps, and hypotheses in the statement above.

1.1 At $\pi_n(X)$, an absolute class represented by a map into A is relatively null: in the disk model contract its domain to the marked boundary point, through maps into A. Conversely a class killed by j compresses into A with its full boundary fixed by F2; since that boundary was constant x0, the compressed representative defines an absolute class in $\pi_n(A)$ mapping to the original. This proves both image inclusions for all n≥1. [F1, F2, F3]

1.2 At $\pi_n(X,A)$ for n≥2, the boundary of an absolute representative is constant, so $\partial j_*=0$. If $a(u,t)$ has distinguished face $h(u)=a(u,0)$ nullhomotopic in A, take a boundary-fixed $B(u,s)$ from h to x0. For a collar width $0<\lambda\le1$ define $a_\lambda(u,t)=B(u,\lambda-2t)$ for $0\le t\le\lambda/2$, and $a(u,(t-\lambda/2)/(1-\lambda/2))$ for $\lambda/2\le t\le1$. At the seam both values are h. As λ goes from 0 to 1, using this formula for $0<\lambda\le1$ and $a_0=a$, it gives a relative homotopy: near λ=t=0 both arguments tend to the common value h. At λ=1 the bottom value is $B(u,1)=x_0$, and all other faces are fixed, so it is an absolute representative. [F1]

1.3 At $\pi_n(A)$ for n≥1, a relative $(n+1)$-cube is itself an X-nullhomotopy of its distinguished face, so $i_*\partial=0$. Conversely, if an A-based cube is nullhomotopic in X rel its boundary, that nullhomotopy, with time as the final coordinate, is a relative $(n+1)$-cube whose boundary is the given cube. This proves equality of kernel and image there. [F1, F3]

1.4 At $\pi_1(X,A)$, a path α starts at some $a\in A$ and ends at x0. Its boundary component is distinguished precisely when a can be joined to x0 in A. Given a path $p:x_0\to a$ in A, the based loop $p*\alpha$ has the same relative class as α: attach the terminal segment $p|_{[1-s,1]}$ ahead of α with width s/2. At s=0 it is α; at s=1 it is the loop, the changing initial endpoint stays in A, and the seam agrees at a. Conversely the initial point of a based loop is x0, and any relative homotopy keeps its initial endpoint within the same A-component. [F1, F4]

1.5 At $\pi_0(A)$, the component of a maps to the distinguished X-component exactly when a path in X joins a to x0. Such a path is a relative degree-one representative with boundary component [a]. Conversely every relative path provides that connection. Components of X not meeting A are not constrained by this calculation. [F1, F4]

2.1 Composition with a map of based pairs commutes pointwise with inclusion and distinguished-face restriction. Hence every square of the displayed sequence commutes by F1 and F3. Steps 1.1–1.5 establish exactness at all eligible terms, with the pointed-set interpretation in the low tail. [F1, F3, step 1.1, step 1.2, step 1.3, step 1.4, step 1.5] ∎
