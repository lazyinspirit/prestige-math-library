---
id: lem-a-bundle-embedding-produces-its-grassmannian-classifying-map
kind: lemma
title: A bundle embedding produces its Grassmannian classifying map
status: published
origin: pipeline
deps: [def-stiefel-space-grassmannian-and-tautological-bundle, def-partition-of-unity-subordinate-to-a-cover, thm-finite-rank-complement-theorem-over-compact-hausdorff-bases, thm-principal-bundles-are-classified-by-maps-to-bg, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  precheck: pass
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, proof of Theorem 1.16"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Numerated embedding and classifying map, printed pp.29–33; countable refinement Lemma 1.21, pp.36–37"
    - title: "MIT 18.906 notes, Lecture 20"
      url: https://ocw.mit.edu/courses/18-906/algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: "Gauss map from a bundle embedding, printed pp.66–68"
---

## Statement

Assume AC. If $j:E\to X\times\mathbb F^N$ is a continuous
fiberwise-linear embedding of a rank-$n$ bundle, then
$c_j(x)=j(E_x)$ is continuous as a map
$X\to\operatorname{Gr}_n(\mathbb F^N)$, and
$e\mapsto(p(e),j(e))$ identifies $E$ with $c_j^*\gamma_n^N$.

A supplied numeration gives an embedding into $X\times\mathbb F^S$ with
locally finite coordinates. Every numeration has a countable numerable
refinement under AC, so one may take $S=\mathbb N$ and target
$\mathbb F^\infty$. Over a compact Hausdorff base, finitely many coordinates
suffice.

## Facts & Assumptions

**Given:** AC, a rank-$n$ bundle $E\to X$, and the data in the applicable clause of the statement.

[F1] The tautological bundle over the Grassmannian has fiber $W$ over the plane $W$ ([[def-stiefel-space-grassmannian-and-tautological-bundle]]).

[F2] A numeration is support-subordinate and locally finite ([[def-partition-of-unity-subordinate-to-a-cover]]).

[F3] Steps 1.1–2.1 of [[thm-principal-bundles-are-classified-by-maps-to-bg]] countabilize an arbitrary indexed numeration under AC, producing countably many disjoint-union chart domains and a subordinate partition.

[F4] Under AC, a finite-rank bundle over a compact Hausdorff base is a direct summand of a finite trivial bundle ([[thm-finite-rank-complement-theorem-over-compact-hausdorff-bases]]).

[A1] AC has the meaning fixed in [[def-axiom-of-choice]].

## Proof

**Proof technique:** direct.

1.1 In a local frame of $E$, write $j_x$ as a continuous full-rank $N\times n$ matrix $A(x)$. The orthogonal projection onto its image is $P(x)=A(x)(A(x)^*A(x))^{-1}A(x)^*$. Invertibility of the positive matrix $A^*A$ and continuity of matrix inversion make $P$ continuous. The graph chart of [F1] identifies a plane continuously from its projection, so $x\mapsto j(E_x)$ is continuous. [F1, algebra]

1.2 For supplied numerating charts $\phi_s:E|_{U_s}\to U_s\times\mathbb F^n$ and partition $(\rho_s)$ from [F2], define $J(e)=(\sqrt{\rho_s(p(e))}\,\phi_s(e))_{s\in S}$, with a zero coordinate off $U_s$. Support containment makes each zero extension continuous, and local finiteness makes $J$ locally land in a finite coordinate subspace. Some $\rho_s(x)>0$ at every $x$, so $J_x$ is injective. This proves the locally finite-coordinate assertion without any choice beyond the supplied data. [F2, algebra]

2.1 The map $\Theta:E\to c_j^*\gamma_n^N$, $e\mapsto(p(e),j(e))$, is continuous and linear and bijective on every fiber. In the same local frame, its inverse on the image plane is represented by $(A^*A)^{-1}A^*$, which varies continuously. Hence $\Theta$ is a bundle isomorphism. [F1, step 1.1, algebra]

2.2 Apply the countabilization [F3] to an arbitrary numeration. Using its countable chart domains in step 1.2 gives an embedding into $\mathbb F^\infty$, continuous for the weak direct-limit topology because it locally lands in a finite stage. This is the exact AC use in the countable clause. [F3, A1, step 1.2]

3.1 If $X$ is compact Hausdorff, [F4] gives $E\oplus E'\cong X\times\mathbb F^N$ for finite $N$. Restricting this isomorphism to the first summand gives a finite-dimensional bundle embedding, and steps 1.1–2.1 give its finite Grassmannian map and tautological pullback. The empty base and rank-zero cases use $N=0$ as in [F4]. [F4, step 1.1, step 2.1] ∎
