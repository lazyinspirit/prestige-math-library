---
id: lem-second-countable-smooth-manifolds-have-cw-homotopy-type
kind: lemma
title: Smooth manifolds have CW homotopy type
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - thm-weak-whitney-proper-embedding-theorem
  - thm-euclidean-tubular-neighbourhood-theorem
  - thm-collar-neighborhood-theorem
  - thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary
  - thm-smooth-partitions-of-unity-exist-on-manifolds
  - def-axiom-of-choice
  - def-countable-choice
  - def-topological-manifold-with-and-without-boundary
  - def-topological-manifold-without-boundary
  - def-smooth-manifold
  - def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary
  - def-smooth-vector-bundle-rank-fibre-and-trivial-bundle
  - def-real-and-complex-topological-vector-bundle
  - def-complex-linear-and-compatible-bundle-connections
  - thm-locally-compact-hausdorff-basics
  - thm-second-countable-implies-lindelof
  - lem-regularity-via-closed-neighbourhoods
  - lem-regular-lindelof-spaces-are-paracompact
  - def-compactly-generated-conventions-for-based-homotopy
  - thm-compact-subset-of-a-hausdorff-space-is-closed
  - def-abstract-simplicial-complex
  - def-geometric-realization-of-an-abstract-simplicial-complex
  - def-cw-complex-with-closure-finiteness-and-weak-topology
  - thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold
  - thm-heine-borel-rn
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: Allen Hatcher, Algebraic Topology
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
      locator: §4G, Propositions 4G.1–4G.2 and Corollary 4G.3, printed pp. 458–460 (PDF pp. 466–468)
---

## Statement

Assume AC. Every finite-dimensional Hausdorff second-countable smooth manifold, including a manifold with boundary and the empty manifold, is paracompact Hausdorff, compactly generated weak Hausdorff, and has the homotopy type of a CW complex. Every smooth finite-rank vector bundle on it is numerable.

## Facts & Assumptions

**Given:** AC and a finite-dimensional Hausdorff second-countable smooth manifold $M$, possibly with boundary or empty.

[A1] The Axiom of Choice says every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[F1] The Axiom of Countable Choice says every at-most-countable family of nonempty sets has a choice function ([[def-countable-choice]]).

[F2] Under $\mathrm{AC}_\omega$, every smooth $n$-manifold admits a proper smooth embedding into $\mathbb R^{2n+1}$ ([[thm-weak-whitney-proper-embedding-theorem]]).

[F3] Under $\mathrm{AC}_\omega$, every embedded smooth submanifold of Euclidean space has a tubular neighbourhood diffeomorphic to an open neighbourhood of that submanifold ([[thm-euclidean-tubular-neighbourhood-theorem]]).

[F4] Under $\mathrm{AC}_\omega$, every smooth manifold with boundary has a smooth collar ([[thm-collar-neighborhood-theorem]]).

[F5] Under $\mathrm{AC}_\omega$, every open cover of a smooth manifold with boundary has a smooth partition of unity subordinate to it ([[thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary]]).

[F6] Under $\mathrm{AC}_\omega$, every open cover of a smooth manifold has a smooth partition of unity subordinate to it ([[thm-smooth-partitions-of-unity-exist-on-manifolds]]).

[F7] In a locally compact Hausdorff space every neighbourhood of a point contains a compact neighbourhood ([[thm-locally-compact-hausdorff-basics]]).

[F8] In a locally compact Hausdorff space, an open neighbourhood of a point contains an open neighbourhood whose compact closure stays inside it ([[thm-locally-compact-hausdorff-basics]]).

[F9] Under $\mathrm{AC}_\omega$, every second-countable space is Lindelöf ([[thm-second-countable-implies-lindelof]]).

[F10] A space is regular exactly when each open neighbourhood $O$ of $x$ contains an open $V$ with $x\in V\subseteq\overline V\subseteq O$ ([[lem-regularity-via-closed-neighbourhoods]]).

[F11] Under $\mathrm{AC}_\omega$, every regular Lindelöf space is paracompact ([[lem-regular-lindelof-spaces-are-paracompact]]).

[F12] Every compact subset of a Hausdorff space is closed ([[thm-compact-subset-of-a-hausdorff-space-is-closed]]).

[F13] Weak Hausdorffness tests closed images of maps from compact Hausdorff spaces, and compact generation tests closed subsets by their preimages under all such maps ([[def-compactly-generated-conventions-for-based-homotopy]]).

[F14] A topological manifold without boundary is Hausdorff and second-countable, and every point has a neighbourhood homeomorphic to an open subset of Euclidean space ([[def-topological-manifold-without-boundary]]).

[F15] A topological manifold with boundary is Hausdorff and second-countable, and every point has a chart to a relatively open subset of the closed half-space ([[def-topological-manifold-with-and-without-boundary]]).

[F16] A smooth manifold without boundary has a smooth atlas whose chart domains are open subsets of the manifold ([[def-smooth-manifold]]).

[F17] For a smooth manifold with boundary, boundary charts are homeomorphisms onto relatively open subsets of a closed half-space and their compatible atlases define its smooth structure ([[def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary]]).

[F18] A smooth finite-rank vector bundle has an open cover by local trivializations that are linear on every fiber ([[def-smooth-vector-bundle-rank-fibre-and-trivial-bundle]]).

[F19] A smooth complex rank-$r$ bundle is a smooth real rank-$2r$ bundle with a smooth fiberwise endomorphism $J$ satisfying $J^2=-I$; equivalently, it has local smooth complex frames ([[def-complex-linear-and-compatible-bundle-connections]]).

[F20] A vector bundle is numerable when it has a linear trivializing cover with a locally finite subordinate partition of unity ([[def-real-and-complex-topological-vector-bundle]]).

[F21] An abstract simplicial complex is a set of finite vertex subsets closed under taking subsets ([[def-abstract-simplicial-complex]]).

[F22] Its geometric realization consists of finitely supported barycentric coordinates on simplices and has the weak topology with respect to its closed simplex inclusions ([[def-geometric-realization-of-an-abstract-simplicial-complex]]).

[F23] A CW complex is Hausdorff, has closure-finite cells, and has the weak topology with respect to the closed cells ([[def-cw-complex-with-closure-finiteness-and-weak-topology]]).

[F24] The boundary of a smooth manifold with boundary is closed, and it is empty in dimension zero ([[thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold]]).

[F25] In positive-dimensional Euclidean space every closed bounded subset is compact ([[thm-heine-borel-rn]]).

## Proof

**Proof technique:** direct.

1.1 Given any sequence $(X_n)_{n\in\mathbb N}$ of nonempty sets, apply [A1] to its range $\{X_n:n\in\mathbb N\}$ and compose the resulting choice function with $n\mapsto X_n$. Thus the assumed AC implies [F1], which is the exact choice strength required by the published suppliers below. [A1, F1, construct]

1.2 Each point of $M$ has a chart into an open subset of $\mathbb R^n$ or a relatively open subset of the closed half-space by [F14] or [F15]. If $n\ge1$, around its coordinate image choose a small open ball (intersected with the half-space when needed) whose closed ball lies in the chart image; this closed, bounded subset is compact by [F25]. Its chart preimage is compact because the chart is a homeomorphism (pull back any open cover), and it contains an open neighbourhood of the original point. Hence $M$ is locally compact; it is Hausdorff by the given hypothesis. If $n=0$, the local model is a point, which is itself a compact neighbourhood. [F14, F15, F25, given, construct]

1.3 If $f:K\to M$ is continuous with $K$ compact Hausdorff, then $f(K)$ is compact: pull any open cover of $f(K)$ back to a cover of $K$ and take a finite subcover. Since $M$ is Hausdorff, [F12] makes $f(K)$ closed. By [F13], $M$ is weak Hausdorff. [F12, F13, given]

2.1 For any second-countable locally compact Hausdorff space $X$, [F8] gives the closure-shrinking property, so [F10] makes $X$ regular; [F9] makes it Lindelöf under [F1], and [F11] then makes it paracompact. Applying this implication to $M$ proves its paracompactness. [F1, F8, F9, F10, F11, F14, F15, step 1.1, step 1.2]

2.2 Let $A\subseteq M$ be k-closed in the sense of [F13], and fix $x\notin A$. By [F7], choose a compact neighbourhood $K$ of $x$ and an open $U$ with $x\in U\subseteq K$. The inclusion $K\hookrightarrow M$ is a compact Hausdorff test, so $A\cap K$ is closed in $K$. There is therefore an open $W\subseteq M$ with $W\cap K=K\setminus A$. Then $U\cap W$ is an open neighbourhood of $x$ disjoint from $A$. Thus every k-closed subset of $M$ is closed; the reverse implication follows by continuity of every test map, so $kM=M$. Hence $M$ is compactly generated and, with step 1.3, CGWH. [F7, F13, step 1.3]

2.3 First suppose $M$ has no boundary. By [F2] and step 1.1 it admits a proper smooth embedding $i:M\hookrightarrow\mathbb R^N$, where $N=2n+1$. [F2, F14, F16, step 1.1]

2.4 Now suppose $\partial M\ne\varnothing$. By [F4] take a collar $c:\partial M\times[0,1)\to V\subseteq M$ with open image. By [F24], $\operatorname{int}M$ is open. Apply [F5] to the cover $\{V,\operatorname{int}M\}$ and let $\lambda$ be the partition function assigned to $V$. Its support lies in $V$, and $\lambda=1$ on $\partial M$ because the other cover member misses the boundary. Put $\rho(u)=0$ for $u\le0$ and $\rho(u)=e^{-1/u}$ for $u>0$, and define $\chi(t)=\rho(\frac12-t)/(\rho(\frac12-t)+\rho(t-\frac14))$. Then $\chi=1$ near $0$ and $\chi=0$ for $t\ge\frac12$. On the collar set $H_s(c(p,t))=c(p,t+\frac{s}{4}\lambda(c(p,t))\chi(t))$ and set $H_s(x)=x$ outside $V$. The new collar coordinate stays below $1$; because $\lambda$ has support contained in $V$, this formula glues continuously to the identity. For $s>0$ every boundary point moves into the interior, and every interior point stays there. Thus $r:=H_1$ maps $M$ to $\operatorname{int}M$, while $H_s$ gives both $i r\simeq\operatorname{id}_M$ and, on the interior, $r i\simeq\operatorname{id}_{\operatorname{int}M}$ for the inclusion $i:\operatorname{int}M\hookrightarrow M$. [F4, F5, F24, step 1.1]

2.5 Let $E\to M$ be a finite-rank real or complex smooth vector bundle. In the real case [F18] gives a linear trivializing cover. For a complex bundle presented as a real smooth bundle with smooth fiberwise $J^2=-I$, fix any point $p$ and a complex basis in $E_p$; extend its vectors to smooth local sections in a real trivialization. Those sections and their $J$-images remain real-linearly independent after shrinking, since their coordinate determinant is nonzero at $p$ and varies continuously. They form local complex frames; on overlaps the transition maps commute with $J$ and have smooth real matrix entries, so are smooth complex-linear trivializations. The pointwise construction selects no global family. If $M$ has boundary, [F5] supplies a locally finite smooth partition subordinate to either cover; otherwise [F6] does. Forgetting smoothness gives a topological linear trivializing cover, and [F20] makes the cover with its partition a numeration. This includes rank zero and the empty manifold, where the empty cover and empty partition satisfy the definition. [F5, F6, F18, F19, F20, step 1.1]

3.1 In the boundaryless branch of step 2.3, the image $i(M)$ is closed. Indeed, for $y\notin i(M)$ take an open Euclidean ball $V$ about $y$ contained in a compact closed ball $K$, compact by [F25]. Properness means compact sets have compact preimages, so $i^{-1}(K)$ is compact; its image is compact and closed by [F12]. The open set $V\setminus i(i^{-1}(K))$ contains $y$ and misses $i(M)$, proving closedness. Now [F3] gives an open tubular neighbourhood $U$ of $i(M)$, diffeomorphic to a disk neighbourhood in its normal bundle. The homotopy $E(p,v)\mapsto E(p,(1-s)v)$, $0\le s\le1$, is defined inside that disk neighbourhood and retracts $U$ onto $i(M)$. Thus in this branch $M\simeq U$. [F3, F12, F25, step 1.2, step 2.3]

4.1 In the boundaryless branch, the open set $U\subseteq\mathbb R^N$ from step 3.1 is second-countable, locally compact, and Hausdorff, so the implication proved in step 2.1 makes it paracompact. Let $\mathcal U$ be the set of all Euclidean open balls whose closed balls lie in $U$. This is an open cover; each nonempty finite intersection is convex and hence contractible by straight-line contraction to any point in that intersection. Since $U$ is itself a smooth manifold, [F6] supplies a subordinate partition of unity. Hatcher, *Algebraic Topology*, §4G, Proposition 4G.2 and Corollary 4G.3, then give $U\simeq |N\mathcal U|$: the proposition uses the subordinate partition, and the corollary uses the paracompactness and contractible finite intersections just verified. [F6, step 1.1, step 2.1, step 3.1]

5.1 In the boundaryless branch, the nerve $N\mathcal U$ is the abstract simplicial complex whose vertices are the balls and whose finite simplices are the subfamilies with nonempty intersection. In its realization, distinct points differ at some vertex coordinate; that coordinate is continuous by the weak topology, so disjoint intervals separate the points. The open simplices are cells, each closed simplex meets only its finitely many faces, and the weak topology in [F22] is exactly the closed-cell topology in [F23]. Attaching the simplices in increasing dimension therefore gives a CW structure on $|N\mathcal U|$. From steps 3.1 and 4.1, the boundaryless $M$ has the homotopy type of this CW complex. [F21, F22, F23, step 3.1, step 4.1]

6.1 The interior is a finite-dimensional Hausdorff second-countable smooth manifold without boundary by [F14] and restriction of the charts and smooth structure in [F16] and [F17]. Applying the boundaryless argument of steps 2.3, 3.1, 4.1, and 5.1 to $\operatorname{int}M$ gives it CW homotopy type; step 2.4 makes its inclusion into $M$ a homotopy equivalence. Therefore $M$ also has CW homotopy type. [F14, F16, F17, step 2.3, step 2.4, step 3.1, step 4.1, step 5.1]

7.1 Step 2.1 establishes paracompactness; steps 1.3 and 2.2 establish weak Hausdorffness and compact generation, while Hausdorffness is assumed. Steps 5.1 and 6.1 establish CW homotopy type in the boundaryless and boundary cases, and step 2.5 establishes numerability. Together with step 1.1, all AC-dependent supplier hypotheses are met, proving the statement. [step 1.1, step 2.1, step 1.3, step 2.2, step 5.1, step 6.1, step 2.5] ∎
## Remarks

The statement assumes full AC, but the proof uses only its countable-choice consequence: step 1.1 derives $\mathrm{AC}_\omega$. It is spent in the cited embedding, tube, collar, Lindelöf-to-paracompact, and smooth partition suppliers. Hatcher's open-cover-to-nerve argument needs a subordinate partition, supplied here by [F6]. The Euclidean cover consists of all eligible balls, the contraction of each nonempty convex intersection is pointwise, and the collar displacement uses the displayed fixed cutoff; none requires an uncountable selection.
