---
id: thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians
kind: theorem
title: Real and complex vector bundles are classified by stable Grassmannians
status: published
origin: pipeline
deps: [lem-a-bundle-embedding-produces-its-grassmannian-classifying-map, lem-homotopic-grassmannian-maps-classify-isomorphic-bundles-and-conversely, def-frame-bundle-and-associated-vector-bundle, thm-stable-stiefel-space-is-contractible, thm-principal-bundles-are-classified-by-maps-to-bg, thm-subordinate-partitions-of-unity-exist, lem-ac-supplies-dependent-choice-for-vector-bundle-constructions, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  precheck: pass
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, Theorem 1.16"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Statement and complete embedding/uniqueness proof, printed pp.29–33"
    - title: "MIT 18.906 notes, Lectures 19–21"
      url: https://ocw.mit.edu/courses/18-906/algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: "Numerable classification and BO/BU models, printed pp.62–72"
---

## Statement

Assume AC. For every paracompact Hausdorff CGWH space $X$ and $n\geq0$,
pullback gives natural bijections

$$[X,\operatorname{Gr}_n(\mathbb R^\infty)]\cong\operatorname{Vect}^{\mathbb R}_n(X),\qquad [X,\operatorname{Gr}_n(\mathbb C^\infty)]\cong\operatorname{Vect}^{\mathbb C}_n(X),$$

where the right sides are isomorphism classes of numerable rank-$n$ bundles.
These Grassmannians are denoted $B\operatorname O(n)$ and
$B\operatorname U(n)$ in this model. The assertion also holds for any CGWH
$X$ when numerability is supplied explicitly. Nonnumerable bundles are not
classified by this statement.

## Facts & Assumptions

**Given:** AC, a CGWH space $X$, $n\geq0$, and
$\mathbb F\in\{\mathbb R,\mathbb C\}$.

[F1] Under AC every numerable rank-$n$ bundle has a countable
$\mathbb F^\infty$ embedding whose image-plane map pulls the tautological
bundle back to the original bundle
([[lem-a-bundle-embedding-produces-its-grassmannian-classifying-map]]).

[F2] Under AC, homotopic Grassmannian maps have isomorphic pullbacks, and
isomorphic pullbacks have homotopic classifying maps
([[lem-homotopic-grassmannian-maps-classify-isomorphic-bundles-and-conversely]]).

[F3] Vector bundles and their frame bundles determine one another by the
associated standard representation, compatibly with pullback and numerations
([[def-frame-bundle-and-associated-vector-bundle]]).

[F4] Under AC, numerable principal bundles over CGWH bases are classified by
the Milnor $BG$ model; its proof includes arbitrary-numeration
countabilization ([[thm-principal-bundles-are-classified-by-maps-to-bg]]).

[F5] The stable Stiefel total space is contractible
([[thm-stable-stiefel-space-is-contractible]]).

[F6] Hatcher, Appendix Proposition 1.19, proves that a weak direct limit of an
increasing sequence of compact Hausdorff spaces is paracompact. Each finite
real or complex Grassmannian is compact Hausdorff, so the stable
Grassmannian is paracompact.

[F7] Under AC and DC a paracompact Hausdorff chart cover has a subordinate
locally finite partition ([[thm-subordinate-partitions-of-unity-exist]]).

[A1] AC has the meaning fixed in [[def-axiom-of-choice]] and implies DC
([[lem-ac-supplies-dependent-choice-for-vector-bundle-constructions]]).

## Proof

**Proof technique:** direct.

1.1 By [F6], the stable Grassmannian is paracompact. Apply [A1] and [F7] to the linear graph-chart cover of $\gamma_n$; this supplies a numeration of the tautological bundle, and every pullback of that numeration is again a numeration. Thus $\Phi([f])=[f^*\gamma_n]$ always lands in numerable bundles. [F3, F6, F7, A1]

2.1 If $f_0\simeq f_1$ and $X$ is paracompact, [F2] makes the two pullbacks isomorphic. For arbitrary CGWH $X$, pull back the numerable principal Stiefel bundle along the homotopy. The equivariant endpoint-transport argument in [F4] applies to this numerable principal $\operatorname O(n)$- or $\operatorname U(n)$-bundle and is a principal-bundle isomorphism; [F3] makes the associated vector bundles isomorphic. Hence $\Phi$ is well-defined in both stated branches. [F2, F3, F4, step 1.1]

3.1 Let $E\to X$ be numerable. By [F1] it has an embedding $j:E\to X\times\mathbb F^\infty$, and its image-plane map $c_j$ satisfies $c_j^*\gamma_n\cong E$. Thus $\Phi$ is surjective. The paracompact branch obtains a numeration from [F7], while the explicitly numerable branch starts with that data; [F1] uses AC to countabilize it. [F1, F7, A1, step 2.1, choose]

4.1 If $\Phi([f_0])=\Phi([f_1])$, identify the two pullbacks. The reverse construction in [F2] moves the two tautological embeddings to odd and even coordinates and interpolates their image planes through fiberwise injections; that construction uses no paracompactness. It yields $f_0\simeq f_1$, so $\Phi$ is injective. Together with step 3.1 this proves both displayed bijections. [F2, step 3.1]

5.1 For $a:X'\to X$, the canonical pullback comparison identifies $a^*(f^*\gamma_n)$ with $(fa)^*\gamma_n$, so the bijections are natural. The numerable principal $\operatorname O(n)$- or $\operatorname U(n)$-bundle $V_n(\mathbb F^\infty)\to\operatorname{Gr}_n(\mathbb F^\infty)$ has contractible total space by [F5], so its quotient is the concrete $B\operatorname O(n)$ or $B\operatorname U(n)$ model. The published theorem [F4] has the same numerability boundary and likewise excludes nonnumerable bundles. [F4, F5, step 1.1, step 4.1]

6.1 When $n=0$, the Grassmannian is a point and the only rank-zero bundle is $X\to X$, so both sides are singletons. When $X=\varnothing$, there is one map and one empty bundle in every rank. AC is used in steps 1.1–3.1 for partitions, endpoint transport, and countabilization; no claim is made for a locally trivial bundle lacking a numeration. [F1, F2, F4, F7, A1, step 3.1, step 4.1, step 5.1] ∎
