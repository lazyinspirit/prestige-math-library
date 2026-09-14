---
id: lem-homotopic-grassmannian-maps-classify-isomorphic-bundles-and-conversely
kind: lemma
title: Homotopic Grassmannian maps classify isomorphic bundles and conversely
status: draft
origin: pipeline
deps: [thm-homotopy-invariance-of-vector-bundle-pullback, lem-a-bundle-embedding-produces-its-grassmannian-classifying-map, thm-stable-stiefel-space-is-contractible, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, proof of Theorem 1.16"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Homotopy-to-isomorphism and stabilized embedding homotopy, printed pp.30–33"
---

## Statement

Fix $\mathbb F\in\{\mathbb R,\mathbb C\}$. Assume AC. Homotopic maps
$f_0,f_1:X\to\operatorname{Gr}_n(\mathbb F^\infty)$ pull back isomorphic
tautological bundles when $X$ is paracompact Hausdorff. Conversely, if the
two pullbacks are isomorphic, then $f_0$ and $f_1$ are homotopic after the
standard stabilization. In particular, classifying maps obtained from two
numerable embeddings of one bundle are homotopic.

## Facts & Assumptions

**Given:** $\mathbb F\in\{\mathbb R,\mathbb C\}$, AC, a paracompact Hausdorff $X$, and the two maps in the statement.

[F1] Endpoint pullbacks along a homotopy are isomorphic under the stated
paracompact and AC hypotheses
([[thm-homotopy-invariance-of-vector-bundle-pullback]]).

[F2] A bundle embedding is isomorphic to the pullback along its image-plane
map ([[lem-a-bundle-embedding-produces-its-grassmannian-classifying-map]]).

[F3] Odd-coordinate displacement followed by Gram normalization gives a
continuous stable homotopy of frames
([[thm-stable-stiefel-space-is-contractible]]).

[A1] AC has the meaning fixed in [[def-axiom-of-choice]].

## Proof

**Proof technique:** direct.

1.1 If $H:X\times I\to\operatorname{Gr}_n(\mathbb F^\infty)$ joins $f_0$ to $f_1$, then $H^*\gamma_n$ restricts to $f_0^*\gamma_n$ and $f_1^*\gamma_n$. By [F1] these endpoint bundles are isomorphic. This proves the forward implication, with AC used exactly as in [F1]. [F1, A1, assume-hyp]

1.2 Conversely, suppose $\Phi:f_0^*\gamma_n\to f_1^*\gamma_n$ is an isomorphism. With coordinates indexed by $r\geq0$, let $O(e_r)=e_{2r+1}$ and $P(e_r)=e_{2r+2}$. The injective paths $(1-s)I+sO$ and $(1-s)I+sP$, with Gram normalization as in [F3], homotope $f_0$ to $Of_0$ and $f_1$ to $Pf_1$ as image-plane maps. The formulas are stagewise continuous and hence continuous in the stable weak topology. [F3, assume-hyp]

2.1 View the tautological inclusions as embeddings $j_i:f_i^*\gamma_n\to X\times\mathbb F^\infty$. For $0\leq\theta\leq\pi/2$, the fiber map $v\mapsto\cos\theta\,O(j_0v)+\sin\theta\,P(j_1\Phi v)$ is injective: its two terms lie in orthogonal odd and even coordinate subspaces, so its squared norm is $\cos^2\theta\|j_0v\|^2+\sin^2\theta\|j_1\Phi v\|^2>0$ for $v\ne0$. Its image planes therefore give a continuous homotopy from $Of_0$ to $Pf_1$. [F2, step 1.2, algebra]

3.1 Concatenate the first displacement homotopy, the interpolation of step 2.1, and the reverse of the second displacement homotopy. This proves $f_0\simeq f_1$, the reverse implication. If two embeddings classify one bundle, [F2] identifies both pullbacks with that bundle, so this reverse implication applies. For $n=0$ every Grassmannian is a point, and for $X=\varnothing$ there is one map and one bundle; both implications remain valid. [F2, step 1.2, step 2.1] ∎
