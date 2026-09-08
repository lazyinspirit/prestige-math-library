---
id: lem-the-open-star-criterion-produces-a-simplicial-map
kind: lemma
title: "The open star criterion produces a simplicial map"
status: published
origin: pipeline
deps: ["def-open-and-closed-stars-in-a-subdivision", "def-simplicial-map-and-its-geometric-realization", "prop-a-finite-simplicial-complex-has-compact-hausdorff-realization", "thm-closed-subspace-of-a-compact-space-is-compact", "lem-finite-simplicial-weak-topology-agrees-with-euclidean-topology", "def-homotopy-relative-and-path-homotopy"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
---

## Statement

Let $K$ be finite, $L$ arbitrary, $f:|K|\to|L|$ continuous, and assign a vertex $g(v)$ of $L$ to every vertex $v$ of $K$ such that $f(\operatorname{st}_K(v))\subseteq\operatorname{st}_L(g(v))$. Then $g$ extends to a simplicial map. For each $x$, $f(x)$ and $|g|(x)$ lie in the carrier simplex of $f(x)$ (the face given by its positive support). The straight-line homotopy between them is continuous and fixes every point where they agree. It respects every subcomplex pair $(A,B)$ for which $f(|A|)\subseteq|B|$. These conclusions require no choice axiom.

## Source locators

2C.1 and 2C.2 proofs, pp.178–179; Appendix A.1, p.520, closed-discrete argument. The finite-source rational-grid/least-index choice-free refinement is proved locally, not attributed to Hatcher..


## Facts & Assumptions

[F1] The finite source is compact. [[prop-a-finite-simplicial-complex-has-compact-hausdorff-realization]].

[F2] Finite realizations are Euclidean and finite subcomplexes embed with that topology. [[lem-finite-simplicial-weak-topology-agrees-with-euclidean-topology]].

[F3] Closed subsets of compact spaces are compact. [[thm-closed-subspace-of-a-compact-space-is-compact]].

[F4] Open stars are positivity loci. [[def-open-and-closed-stars-in-a-subdivision]].

[F5] The image of each face must be a face and realization sums vertex coordinates. [[def-simplicial-map-and-its-geometric-realization]].

[F6] A relative homotopy is jointly continuous and fixed on the specified subspace. [[def-homotopy-relative-and-path-homotopy]].


## Proof

**Given:** A finite source $K$, continuous $f$, and a vertex assignment satisfying the star inclusions.

1.1 If $K$ is vertex-free all assertions concern empty maps. Otherwise enumerate its finitely many vertices. For each positive denominator enumerate, lexicographically, all barycentric rational grid points on every face, allowing repetitions, to obtain a sequence $d_j$. On a face with $s$ vertices, round the first $s-1$ coordinates down to multiples of $1/N$ and give the last coordinate the remaining mass; every coordinate error is at most $(s-1)/N$. These points approximate every point of each simplex. Hence the sequence is dense in the finite Euclidean realization, and therefore in the weak realization. The image $C=f(|K|)$ is compact: pull an open cover back to compact $|K|$ and take a finite subcover. [F1, F2]

2.1 Suppose the union of the finite supports of $f(d_j)$ were infinite. Recursively select the least index whose image support is not contained in the finite union of previously selected supports, and call the resulting images $q_n$. Each new point introduces a fresh target vertex. In a fixed closed simplex $\tau$, at most $\#\tau$ of the points $q_n$ can occur, since each such occurrence introduces a fresh vertex of $\tau$. Every subset of $Q=\{q_n\}$ thus has finite closed trace on each target simplex and is weakly closed. Therefore $Q$ is closed in compact $C$, and every subset is closed in $Q$, making $Q$ discrete. Its singleton cover contradicts compactness. All repeated choices here are least natural indices, not applications of Countable Choice. [F3, step 1.1]

3.1 The union $W$ of those supports is therefore finite. Let $P$ contain all faces of $L$ whose vertices lie in $W$. This is finite and weakly closed: its intersection with any simplex is a finite union of closed faces. The closed set $f^{-1}(|P|)$ contains the dense sequence, so equals $|K|$. By the closed-embedding assertion, $f$ regarded as a map into $|P|$ is continuous for its Euclidean topology. [F2, step 1.1, step 2.1]

4.1 For any nonempty source face $\sigma$, its barycenter lies in the star of every vertex of $\sigma$. Its image therefore has every $g(v)$, $v\in\sigma$, in its support. That support is a face of $L$, so its subset $g(\sigma)$ is a face. This proves simpliciality. For an arbitrary point $x$ the same reasoning applies to each positive-coordinate vertex of $x$: every corresponding $g(v)$ belongs to $\operatorname{supp}f(x)$. Consequently $|g|(x)=\sum_v x_v e_{g(v)}$ lies in that very simplex. In particular the image of $g$ lies in $|P|$. [F4, F5, step 3.1]

5.1 The realization $|g|$ is affine on each of finitely many closed source simplices; these maps agree on their common faces, so it is continuous into finite Euclidean $|P|$. Hence $H(x,t)=(1-t)f(x)+t|g|(x)$ is jointly continuous into its ambient Euclidean space. The common-carrier conclusion puts its image in $|P|$, so it is continuous into $|P|$ and then $|L|$. At $t=0,1$ it equals $f,|g|$, and if $f(x)=|g|(x)$ it is constant in $t$. If $x\in|A|$ and $f(x)\in|B|$, its carrier is a simplex of $B$, so the entire segment remains in $|B|$. [F2, F6, step 4.1] ∎


## Remarks

The star condition also composes: if $g$ approximates $f$ and $k$ approximates $j$, then $jf(\operatorname{st}(v))\subseteq j(\operatorname{st}(g(v)))\subseteq\operatorname{st}(k(g(v)))$. Thus the simplicial composite $kg$ approximates $jf$ (Maunder 2.5.5, p.47). The finite-image proof above replaces any appeal to the separate compact-subset lemma with Countable Choice.
