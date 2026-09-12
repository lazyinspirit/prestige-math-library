---
id: "lem-finite-cw-complexes-are-euclidean-neighborhood-retracts"
kind: "lemma"
title: "Finite CW complexes are Euclidean neighborhood retracts"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-cw-complex-with-closure-finiteness-and-weak-topology","thm-compact-locally-contractible-euclidean-subsets-are-neighborhood-retracts","def-axiom-of-choice","thm-heine-borel-rn","thm-compact-subset-of-a-hausdorff-space-is-closed"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher, Algebraic Topology, Appendix Corollary A.10, pp.10–11
      url: https://pi.math.cornell.edu/~hatcher/AT/ATapp.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Assume AC. Every finite CW complex $X$ has an embedding $e:X\hookrightarrow\mathbb R^m$ for some finite $m$, with compact image, an open set $O\supset e(X)$, and a continuous retraction $r:O\to e(X)$. Thus $X$ is a compact **Euclidean neighborhood retract** (ENR). The embedding and weak local contractibility below are choice-free; AC is used only in the Euclidean neighborhood-retract criterion.

## Facts & Assumptions

[F1] [[def-cw-complex-with-closure-finiteness-and-weak-topology]] supplies Hausdorffness, characteristic attaching maps and the weak topology.

[F2] [[thm-compact-locally-contractible-euclidean-subsets-are-neighborhood-retracts]] says, under AC, that a compact Euclidean subset is a neighborhood retract if every neighborhood of each point contains a smaller neighborhood whose inclusion in the first is nullhomotopic.

[F3] [[def-axiom-of-choice]] supplies the nearest-point and controlled-extension selections used in [F2].

[F4] [[thm-heine-borel-rn]] supplies compactness of finite-dimensional closed bounded sets without choice.

[F5] [[thm-compact-subset-of-a-hausdorff-space-is-closed]] supplies closedness of compact subsets in Hausdorff spaces and compactness of closed subsets of a compact Hausdorff space.

## Proof

**Given:** A CW complex $X$ with finitely many cells. A nullhomotopy of an inclusion is allowed to end at any constant point of its target neighborhood.

1.1 Order the finitely many cells by nondecreasing dimension. At each stage the union $A$ of previous cells contains the attaching boundary of the next cell. It is compact: an open cover pulls back under each of its finitely many characteristic maps to a cover of a closed disk, each disk is compact by [F4] (a zero-disk is one point), and the union of the finitely many finite subcovers covers $A$. The same proves compactness of the next stage $Y$. These stages have the subspace topology from the Hausdorff space $X$ and are closed by [F5]. The map $q:A\sqcup D^k\to Y$ given by inclusion and the next characteristic map is continuous and surjective. Its source is compact, and its target is Hausdorff. Every closed subset of the source is compact by [F5], its image is compact by pulling back open covers, and that image is closed by [F5]. Thus $q$ is closed and hence quotient. Its identifications are exactly $v\sim f(v)$ for $v\in S^{k-1}$, by the attaching condition in [F1]. Consequently we can work one attachment at a time in the actual topology of $X$. [F1, F4, F5, given]

2.1 Inductively suppose $A$ embeds in $\mathbb R^m$ and identify it with its image. For $k\ge1$, write points of $D^k$ as $rv$, $0\le r\le1$, $v\in S^{k-1}$, with the value at $r=0$ independent of $v$. Map $A$ to $(0,A,1)$ in $\mathbb R^k\times\mathbb R^m\times\mathbb R$, and map the disk by $$rv\longmapsto\begin{cases}(2rv,0,0),&0\le r\le1/2,\\((2-2r)v,(2r-1)f(v),2r-1),&1/2\le r\le1.\end{cases}$$ The formulas agree at $r=1/2$ and are continuous on their two closed domains. At $r=1$ the value is $(0,f(v),1)$, precisely the prescribed identification, so step 1.1 gives a continuous map on $Y$. On the inner half-disk it is injective. On the outer annulus with $r<1$, height recovers $r$ and the nonzero first coordinate recovers $v$; positive height separates this part from the inner half-disk except for their common seam. Height one occurs only on the image of $A$ and on the attached boundary. Thus there are no additional identifications. The map is an embedding: it is a continuous bijection onto its image, and it maps closed subsets of compact $Y$ to compact, hence closed, subsets of its Hausdorff image by [F5]. A zero-cell is a disjoint point; embed $A\sqcup\{*\}$ as $(A,0)\cup\{(0,1)\}$ in $\mathbb R^{m+1}$. Start with the empty subspace of $\mathbb R$, and these finitely many constructions embed $X$. [F5, step 1.1]

3.1 We prove weak local contractibility by the same finite attachment induction. The empty stage has no points. At a new zero-cell the singleton is open and contracts to itself, while neighborhoods in the old stage are unchanged. For a positive-dimensional attachment, $Y\setminus A$ is open, since $A$ is compact and closed by [F5], and its characteristic map is a homeomorphism from the disk interior. A point there therefore has, inside any prescribed open neighborhood, a smaller ball contracting by straight segments. It remains to treat a point $x\in A$. Given an open neighborhood $U$ of $x$ in $Y$, induction supplies an open neighborhood $V_A$ of $x$ in $A$, contained in $U\cap A$, and a nullhomotopy of $V_A\hookrightarrow U\cap A$. [F1, F5, step 1.1, step 2.1]

4.1 Let $\phi:D^k\to Y$ be the characteristic map, $W=f^{-1}(V_A)\subset S^{k-1}$, and $F=D^k\setminus\phi^{-1}(U)$. For $v\in S^{k-1}$ put $$\eta(v)=\tfrac14\min\{1,\operatorname{dist}(v,S^{k-1}\setminus W),\operatorname{dist}(v,F)\},$$ replacing a distance to an empty set by the constant $1$. Distance to a nonempty subset is continuous: the triangle inequality bounds the difference of its infima by the distance between the two points. The two sets measured here are closed in the disk or sphere, so their distance from an exterior point is positive, since some ball around that point misses the set. Because $f(W)\subset U$, it follows that $\eta(v)>0$ exactly for $v\in W$, and always $0\le\eta\le1/4$. The set $$E=\{rv:1-\eta(v)<r\le1\}$$ is open relative to the disk: all its points have $r>3/4$, where polar coordinates are continuous and the inequality is strict. It meets the boundary exactly in $W$. Also $E\subset\phi^{-1}(U)$, since $|rv-v|=1-r<\operatorname{dist}(v,F)$ whenever $F$ is nonempty; if $F$ is empty there is nothing to check. The subset $N=V_A\cup\phi(E)$ has preimages $V_A$ in $A$ and $E$ in $D^k$, including all identified boundary fibers. It is therefore open in $Y$ by step 1.1, contains $x$, and lies in $U$. [step 1.1, step 3.1]

5.1 On $N$ keep $V_A$ fixed and push each $\phi(rv)$ with $rv\in E$ to $\phi((r+t(1-r))v)$ at time $t\in[0,1]$. Increasing the radius preserves the strict collar inequality, so this stays in $N$. At radius one it agrees with the fixed value $f(v)$ in $V_A$; hence it is well-defined on all identified fibers. It is jointly continuous, not merely separately continuous: the surjection $q\times\mathrm{id}_{[0,1]}$ is a closed quotient map. Indeed its source is a finite disjoint union of compact products $A\times[0,1]$ and $D^k\times[0,1]$. By step 2.1 and [F4], these products are compact closed bounded Euclidean subsets; the target $Y\times[0,1]$ is Hausdorff. The closed-map argument of step 1.1 applies. Restrict this quotient map to the inverse image of the open subset $N\times[0,1]$; it remains quotient, since openness can be checked on this open inverse image. The displayed continuous formulas on that inverse image agree on fibers, so descend continuously. At $t=0$ this is the identity and at $t=1$ its image lies in $V_A$. Concatenating, on two half-intervals, this deformation with the nullhomotopy in step 3.1 gives a nullhomotopy of $N\hookrightarrow U$. Agreement at the joining time proves continuity by the finite closed-set pasting rule. This completes the local induction. [F4, F5, step 1.1, step 2.1, step 3.1, step 4.1]

6.1 The image of the embedding in step 2.1 is compact by step 1.1 and weakly locally contractible by step 5.1, which is invariant under a homeomorphism by transporting the open neighborhoods and homotopies. Apply [F2] to obtain the open neighborhood and retraction. Its hypothesis AC is supplied by [F3]; its exact uses are selection of nearest points at vertices of a locally finite cell structure in the complement and selection of controlled continuous extensions over its positive-dimensional cells. No choice beyond finite existential choices was used in the embedding or contraction induction. [F2, F3, step 1.1, step 2.1, step 5.1]

7.1 For $X=\varnothing$ take the empty embedding, $O=\varnothing$ and the empty retraction. For a one-point complex a constant map on a Euclidean ball is a retraction; a finite zero-dimensional complex is covered by finitely many disjoint balls with the corresponding constant retractions. At $r=0,1/2,1$ the embedding formulas and boundary identifications were checked in step 2.1, and both time endpoints and the concatenation endpoint were checked in step 5.1. Attaching maps need not be injective: their collapsed or repeated boundary fibers are exactly those identified in steps 2.1 and 5.1. In particular the argument covers nonregular CW complexes and constant attaching maps. Positive-dimensional attachment to the empty stage is impossible because its sphere boundary is nonempty. There are no coefficients or algebraic zero cases here. The phrase compact ENR names precisely the embedding, compactness and neighborhood retraction just constructed, without a separate converse assertion about arbitrary ENRs being finite CW complexes. [step 2.1, step 5.1, step 6.1] ∎
