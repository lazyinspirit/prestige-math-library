---
id: lem-root-of-unity-weyl-flags-summands-and-orthogonality
kind: lemma
title: Weyl flag summands, standard-costandard orthogonality and tilting uniqueness
status: published
dependency_level: 7
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps: [def-axiom-of-choice, def-root-of-unity-weyl-and-dual-weyl-module-families, lem-root-of-unity-integral-weyl-specialization, thm-root-of-unity-tilting-modules-are-tensor-stable]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Stephen F. Sawin, Quantum Groups at Roots of Unity and Modularity
      url: https://arxiv.org/pdf/math/0308281v2
      locator: Section 3, Lemmas 5–6 and Proposition 4, PDF pages 16–18. Summand closure is proved explicitly here rather than assumed.
---

## Statement

Assume the inherited Axiom of Choice ([[def-axiom-of-choice]]). For the actual root Weyl families of [[def-root-of-unity-weyl-and-dual-weyl-module-families]], Weyl-filtered and dual-Weyl-filtered modules are closed under direct summands. Hence tiltings are closed under direct summands, and each tilting is a finite direct sum of indecomposable tiltings. One has $\operatorname{Hom}(\Delta_\zeta(\lambda),\nabla_\zeta(\mu))=\delta_{\lambda\mu}\mathbb C$ and every extension of a Weyl-filtered module by a dual-Weyl-filtered module splits. Every indecomposable tilting has a unique maximal label, of multiplicity one, and two indecomposable tiltings with the same maximal label are isomorphic. These assertions give uniqueness where the objects exist; they make no existence claim for an arbitrary prescribed label.

## Facts & Assumptions

**Given:** The finite dimensional root type-1 category and the actual Weyl and dual Weyl families.

[F1] Weyl modules are universal finite highest modules, cyclic with one-dimensional highest space and unique simple head; dual Weyl modules have a unique simple socle with the indicated highest label. All have weights at most their label, and ordinary exact duality exchanges the families with label involution $\lambda\mapsto\lambda^*=-w_0\lambda$ ([[lem-root-of-unity-integral-weyl-specialization]]).

[F2] The filtrations are finite and tensor and dual stable as proved in [[thm-root-of-unity-tilting-modules-are-tensor-stable]].

## Proof

**Given:** These data. All Hom and extension arguments are in the stated label-preserving module category.

1.1 If a finite module $V$ has no label strictly greater than $\lambda$, every surjection $V\to\Delta_\zeta(\lambda)$ splits: lift its highest vector to a label-$\lambda$ vector $v\in V$. All positive divided powers kill $v$ because they would increase its label strictly. The universal property in [F1] extends the highest-vector lift to a module map from $\Delta_\zeta(\lambda)$, and its composite with the surjection fixes the highest generator, hence is the identity. This argument permits labels incomparable with $\lambda$ in $V$. [F1, algebra]

1.2 A nonzero map $\Delta_\zeta(\lambda)\to\nabla_\zeta(\mu)$ has image containing the unique simple socle $L_\zeta(\mu)$: every nonzero finite-length submodule contains a simple submodule, and this socle is unique. Its weights are at most $\lambda$, so $\mu\le\lambda$. On the other hand the highest generator has label $\lambda$ in the target, so $\lambda\le\mu$. Thus $\lambda=\mu$. At equal labels the image of the highest line is an arbitrary scalar multiple of the unique highest line, which lies in the simple socle; its generated image is precisely that socle. This gives a one-dimensional Hom space, and the map is the simple-head quotient followed by socle inclusion. [F1, algebra]

2.1 If $M$ is Weyl-filtered and $\lambda$ is a maximal support label, the canonical action map $\Delta_\zeta(\lambda)\otimes_{\mathbb C} M_\lambda\to M$ is injective and its quotient is Weyl-filtered with no section of label $\lambda$. To prove this, induct along a chosen Weyl filtration. If its final section has label $\lambda$, the short exact sequence splits by step 1.1; the trace acquires exactly this additional copy. If its final section has different label $\gamma$, it has no $\lambda$ weight, since otherwise $\lambda\le\gamma$ would contradict maximality and distinctness. Thus $M_\lambda$ and its generated trace are contained in the preceding flag subobject, where induction applies, and the quotient extends by $\Delta_\zeta(\gamma)$. This proves the claim in both cases; it also identifies the submodule canonically, independently of the chosen filtration. [F1, step 1.1, induction]

2.2 Consider an extension $0\to\nabla_\zeta(\mu)\to V\to\Delta_\zeta(\lambda)\to0$. If $\lambda\not<\mu$, no weight of $V$ is strictly greater than $\lambda$, since such a weight would lie at most $\mu$ and force $\lambda<\mu$. Thus it splits by step 1.1. If $\lambda<\mu$, dualizing produces an extension with Weyl quotient of label $\mu^*$ and dual Weyl kernel of label $\lambda^*$. The involution $-w_0$ preserves the dominance order, so $\lambda^*<\mu^*$, and the already settled case splits this dual extension. Exact involutive duality then splits the original extension. Therefore all standard-costandard degree-one extension groups vanish. Inducting on a Weyl filtration in the first variable and a dual Weyl filtration in the second variable, using the Hom-extension exact sequences (equivalently pullback and pushout of short exact sequences), proves that every extension of a Weyl-filtered module by a dual-Weyl-filtered module splits. [F1, F2, step 1.1, algebra]

3.1 Suppose $M=Q\oplus R$ is Weyl-filtered. Its canonical maximal trace from step 2.1 is stable under the two projection idempotents, since it is generated by $M_\lambda$; the restrictions to this trace are the identity on the Weyl factor tensored with the corresponding projections of $M_\lambda$. Hence its intersections with $Q,R$ are respectively $\Delta_\zeta(\lambda)\otimes Q_\lambda$ and $\Delta_\zeta(\lambda)\otimes R_\lambda$. The quotient decomposes as the direct sum of $Q$ and $R$ modulo these intersections, and is Weyl-filtered of smaller total dimension. Induction on total dimension therefore gives Weyl filtrations of these two quotients, and adjoining the respective Weyl traces gives Weyl filtrations of $Q,R$. The base $M=0$ is immediate. Exact duality proves the same for dual Weyl flags, hence for tiltings. Any finite dimensional module splits into indecomposables by repeatedly decomposing a decomposable summand, since positive dimensions decrease; the established summand closure makes each resulting tilting summand tilting. [F1, step 2.1, induction, algebra]

3.2 For a sufficiently high power of any endomorphism $a$ of a finite dimensional module, kernel and image stabilize and give the module decomposition $T=\ker a^n\oplus\operatorname{im}a^n$. For an indecomposable $T$, every endomorphism is therefore nilpotent or invertible. The maximal-trace proof in step 2.1 also works simultaneously for the finite set $\Gamma$ of all maximal support labels: the corresponding Weyl sections split past one another by step 1.1, and their sum is the injected submodule $S=\bigoplus_{\lambda\in\Gamma}\Delta_\zeta(\lambda)\otimes T_\lambda$ with Weyl-filtered quotient. If the total dimension of $\bigoplus_{\lambda\in\Gamma}T_\lambda$ exceeded one, define a homomorphism $S\to T$ fixing one selected highest basis line and killing another, by acting on the displayed multiplicity spaces. step 2.2 extends this map to an endomorphism of $T$ because its cokernel is Weyl-filtered. That endomorphism fixes a nonzero vector and kills another, so it is neither nilpotent nor invertible, a contradiction. Thus an indecomposable tilting has a unique maximal label and a one-dimensional highest space. [F1, step 1.1, step 2.1, step 2.2, algebra]

4.1 Let $T,T'$ be indecomposable tiltings and $\lambda$ their common maximal label. step 2.1 supplies inclusions of a copy of $\Delta_\zeta(\lambda)$ into each, with Weyl-filtered cokernels. step 2.2 extends the common highest-line identification to homomorphisms $f:T\to T'$ and $g:T'\to T$, whose composites fix that line. By step 3.2 these composites are not nilpotent and hence are invertible. Therefore $f$ is an isomorphism. This proves the claimed uniqueness of indecomposable tiltings at each label where one exists, without asserting existence at the remaining labels. [F1, step 2.1, step 2.2, step 3.2, algebra] ∎
