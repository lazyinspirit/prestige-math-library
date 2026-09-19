---
id: lem-compact-fibre-numerable-bundle-totals-are-paracompact-hausdorff-of-cw-type
kind: lemma
title: Totals of numerable bundles with compact fibre are paracompact Hausdorff of CW type
status: draft
origin: pipeline
deps: ["def-locally-trivial-fiber-bundle", "def-paracompact-space", "lem-tube-lemma-for-a-compact-factor", "lem-products-preserve-t0-t1-and-hausdorff", "thm-numerable-fiber-bundles-are-hurewicz-fibrations", "def-axiom-of-choice"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Allen Hatcher, Vector Bundles & K-Theory
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "§3.1 projective bundles over paracompact bases, printed pp.77–78; §1.2 numerated bundles, printed pp.28–31"
    - title: Rolf Schon, Fibrations Over a CWh-Base
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/schoen.pdf
      locator: "Theorem 2, printed page 165 (Hurewicz fibration with CW-type base and fibre has CW-type total space)"
    - title: Haynes Miller, MIT 18.906 Algebraic Topology II lecture notes
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: "Lecture 34 projective-bundle constructions over paracompact bases, printed pp.123–126"
---

## Statement

Assume AC. Let $p:S\to B$ be a numerable locally trivial fiber bundle with
compact Hausdorff fiber $F$ over a paracompact Hausdorff base $B$. Then $S$ is
paracompact and Hausdorff. If in addition $B$ and $F$ have the homotopy type of
CW complexes, then $S$ has the homotopy type of a CW complex.

Consequently the total spaces of the projective bundle and of the flag bundle
of a numerable bundle with compact fiber over such a base are again
paracompact Hausdorff spaces of CW type, and the same holds for finitely many
fiber products of such total spaces over $B$.

## Facts & Assumptions

**Given:** AC, a numerable locally trivial fiber bundle $p:S\to B$ with compact Hausdorff fiber $F$ over a paracompact Hausdorff base $B$.

[F1] A locally trivial bundle has fiber homeomorphisms $\theta_i:p^{-1}(U_i)\to U_i\times F$ over an open cover. A numeration additionally supplies a partition of unity whose cozero sets, not necessarily the original chart cover, are locally finite and whose supports lie in the chart domains; the overlap change on $U_i\cap U_j$ is $(b,x)\mapsto(b,g_{ji}(b,x))$ with each $g_{ji}(b,-)$ a homeomorphism of $F$ ([[def-locally-trivial-fiber-bundle]]).

[F2] Let $K\subseteq X$ be compact, $z_0\in Z$, and $N\subseteq X\times Z$ open with $K\times\{z_0\}\subseteq N$. Then there is an open $W\subseteq Z$ with $z_0\in W$ and $K\times W\subseteq N$ ([[lem-tube-lemma-for-a-compact-factor]]).

[F3] A space is paracompact when every open cover has a locally finite open refinement that covers it ([[def-paracompact-space]]).

[F4] Products of Hausdorff spaces are Hausdorff ([[lem-products-preserve-t0-t1-and-hausdorff]]).

[F5] Schon's Theorem 2: a Hurewicz fibration whose base and fiber have the homotopy type of CW complexes has total space of the same type (Rolf Schon, *Fibrations Over a CWh-Base*, Theorem 2, printed page 165).

[F6] Every numerable fiber bundle is a Hurewicz fibration ([[thm-numerable-fiber-bundles-are-hurewicz-fibrations]]).

[A1] AC is the Axiom of Choice in the form fixed by [[def-axiom-of-choice]].

## Proof
1.1 $S$ is Hausdorff. Let $s\ne s'$ be points of $S$. If $p(s)\ne p(s')$, choose disjoint open $U,V\subseteq B$ containing them, possible because $B$ is Hausdorff; then $p^{-1}(U)$ and $p^{-1}(V)$ are disjoint open subsets of $S$ containing $s$ and $s'$. If $p(s)=p(s')=b$, choose a chart domain $U_i$ containing $b$ and apply the homeomorphism $\theta_i$: the images lie in $U_i\times F$, which is Hausdorff by [F4] because $U_i\subseteq B$ and $F$ are Hausdorff; separating them there and applying $\theta_i^{-1}$ separates $s$ and $s'$ in $S$. [F1, F4]

1.2 $S$ is paracompact. Let $\mathcal W$ be an open cover of $S$. For $b\in B$ the fiber $S_b\cong F$ is compact, so $\mathcal W$ has a finite subfamily covering $S_b$; fix such a finite list for every $b$ (this is the only choice made, and it is a choice of one set for every element of $B$). In a chart $\theta_i$ about $b$ the union of the listed open sets contains $\{b\}\times F$ in $U_i\times F$; the tube lemma [F2] applied with compact factor $F$ gives an open $V_b\ni b$ with $V_b\times F$ contained in that union, that is, $p^{-1}(V_b)$ is covered by the finitely many listed members of $\mathcal W$. The family $\{V_b\}$ is an open cover of the paracompact space $B$, so by [F3] it has a locally finite open refinement $\{V_\beta\}_{\beta\in J}$. Choose for each $\beta$ an index $b(\beta)$ with $V_\beta\subseteq V_{b(\beta)}$; then the family consisting of the open sets $W\cap p^{-1}(V_\beta)$, for all $\beta$ and all $W$ in the finite list attached to $b(\beta)$, covers $S$ and refines $\mathcal W$, since $p^{-1}(V_\beta)\subseteq p^{-1}(V_{b(\beta)})$ is covered by that finite list. It is locally finite: given $s\in S$ with $p(s)=b_0$, local finiteness of $\{V_\beta\}$ at $b_0$ supplies an open $N\ni b_0$ meeting only finitely many $V_\beta$, and then the neighborhood $p^{-1}(N)$ of $s$ meets $p^{-1}(V_\beta)$ only for those finitely many $\beta$. Hence every open cover of $S$ has a locally finite open refinement, so $S$ is paracompact by [F3]. [F1, F2, F3, A1]

1.3 The CW-type clause. If $B$ and $F$ have the homotopy type of CW complexes, then [F6] makes $p:S\to B$ a Hurewicz fibration, and [F5] gives the homotopy type of a CW complex for $S$. [F5, F6]

2.1 Consequences and boundary cases. The projective bundle of a numerable rank-$n$ bundle $E\to B$ with $n\geq1$ is a numerable fiber bundle with fiber $\mathbb{RP}^{n-1}$, and the flag bundle is a composite of such bundles, each with the compact CW complex $\mathbb{RP}^{j}$ as fiber; if the final base is paracompact Hausdorff of CW type, the three preceding steps apply at each stage and give the same conclusion for every intermediate total space. A fiber product over $B$ of finitely many such total spaces is a numerable bundle over $B$ with compact fiber, so the same two clauses apply. If $F=\varnothing$ then $S=\varnothing$; if $F$ is a point then $S\cong B$ over $B$; if $B=\varnothing$ then $S=\varnothing$. In each case paracompactness, Hausdorffness and the CW-type conclusion hold because the empty space and $B$ itself are paracompact Hausdorff and $B$ is of CW type. The one-place and one-point fibers are the degenerate cases $F=S^0$ and $F=S^{-1}=\varnothing$ of the projective fibers, and both are compact. [F5, F6, step 1.1, step 1.2, step 1.3] ∎
