---
id: thm-smale-hirsch-immersion-theorem
kind: theorem
title: "The Smale–Hirsch immersion theorem"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: ["lem-parametric-immersion-extension-on-a-disk", "lem-finite-relative-homotopy-lifting-across-a-weak-equivalence", "lem-a-handle-decomposition-gives-a-relative-cw-complex", "def-compact-parameter-pair", "thm-smale-hirsch-for-open-source-manifolds", "lem-positive-codimension-thickening-reduces-closed-sources-to-the-open-case", "def-formal-immersion-between-smooth-manifolds", "def-space-of-immersions-and-space-of-formal-immersions", "def-derivative-map-from-immersions-to-formal-immersions", "def-weak-homotopy-equivalence", "def-countable-choice", "lem-formal-immersion-homotopies-extend-over-a-subcritical-handle"]

justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery, Ch. 7 §7.4 “The Smale–Hirsch classification of immersions”, printed pp. 142–146 (Theorem 7.35, Proposition 7.39)"
      url: https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro
    - title: "John Francis, The h-Principle, Lectures 5 & 6: The Hirsch–Smale theorem (notes by C. Elliott), PDF pp. 1–4: Lemma 1.1, Corollary 1.2, Lemma 1.3 (Hirsch–Smale Fibration Lemma, n > k), Theorems 1.5 and 1.7, Lemma 1.6, Lemma 1.9"
      url: https://sites.math.northwestern.edu/jnf960/classes/hprin/5%266smalehirsch.pdf
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy, Ch. 7 §2 “Obstructions to the existence of embeddings and immersions, the Hirsch–Smale theorem”, printed pp. 226–232 (Theorem 7.5, Corollary 7.6)"
      url: http://math.stanford.edu/~ralph/bookR4.pdf
    - title: "Janek Wilhelm, The Smale–Hirsch Immersion Theorem and other Applications to Closed Manifolds, §§1–2, PDF pp. 1–3 (Theorem 1, relative parametric C⁰-dense h-principle for immersions with q > n; microextension and local h-principle 8.3.1)"
      url: https://www2.mathematik.hu-berlin.de/~wendl/Sommer2025/hPrinzip/20250530_Wilhelm.pdf
dependency_level: 11
---

## Statement

Assume the axiom of countable choice. Let $M^m$ and $N^n$ be smooth manifolds without boundary with $m<n$. Then the derivative map
$$D:\operatorname{Imm}(M,N)\longrightarrow\operatorname{FImm}(M,N),\qquad f\longmapsto(f,df),$$
is a weak homotopy equivalence for the weak compact-open $C^\infty$ topology. Its relative parametric form is stated for compact parameter pairs [[def-compact-parameter-pair]]: a continuous family of formal immersions that is smoothly holonomic on the prescribed closed sub-parameter set $Q$ can be deformed relative to $Q$ to a continuous family of genuine immersions. Here smoothly holonomic means that the original data are smooth and holonomic on an open parameter neighbourhood of $Q$, as in that definition. A smooth family with this property admits a smooth relative deformation. Positive codimension is essential for the closed-source assertion.

## Facts & Assumptions

**Given:** Countable choice, boundaryless $M^m,N^n$ with $m<n$, and the compact parameter pair with original neighbourhood-holonomic relative data.

[F1] Open-source derivative equivalence holds also in equal dimension, with compatible relative compact-parameter homotopies ([[thm-smale-hirsch-for-open-source-manifolds]]).

[F2] The normal disk-bundle reduction constructs genuine and formal restriction comparisons on the enriched normal-identification spaces, and proves their forgetful Serre lifting comparison with common fibre $\operatorname{Aut}(E)$ ([[lem-positive-codimension-thickening-reduces-closed-sources-to-the-open-case]]).

[F3] The weak equivalence includes every component and every based homotopy group ([[def-weak-homotopy-equivalence]]). Finite relative parameter lifting is [[lem-finite-relative-homotopy-lifting-across-a-weak-equivalence]], and the countable-choice finite parameter model is [[lem-a-handle-decomposition-gives-a-relative-cw-complex]]. Statement (iv) of [[lem-parametric-immersion-extension-on-a-disk]] is the compact-source neighbourhood-pair transfer, including interval factors and smooth relative output. It applies to the compact closed source components below; the open components use [F1].

## Proof

**Proof technique:** direct open/closed comparison and normal-identification fibration descent.

1.1 For a connected noncompact source, [F1] applies because such a boundaryless component is open in the no-compact-component sense. Suppose the connected source is closed. For any fixed normal-bundle type $E$ of rank $n-m>0$, its open disk-bundle interior has dimension $n$ and every component is noncompact. Apply [F1] there. The dimension-preserving collar and enriched restriction comparisons of [F2] show that the derivative map on the enriched spaces $\mathcal I_E\to\mathcal F_E$ is a weak equivalence. [F1, F2, given]

2.1 The enriched spaces are not ordinary formal components. Their forgetful maps over the loci of normal type $E$ are Serre fibrations, with fibre the actual isomorphisms $E\cong\nu$, which after one identification form $\operatorname{Aut}(E)$. The derivative induces the identity on that common fibre. The exact-sequence and component-action comparison in [F2] therefore descends the enriched equivalence to the ordinary locus, at every genuine basepoint. Every formal component meets some such locus, taking $E$ to be the datum's own normal bundle; all compact based homotopies and paths in that locus have their identifications transported by the forgetful lifting comparison. This accounts for their monodromy rather than discarding the identification fibre. Consequently the ordinary closed-source derivative map is a weak equivalence on all components and at every basepoint. [F2, F3, step 1.1]

3.1 For disconnected $M$, its second-countable component set is at most countable. The weak mapping spaces are products over source components: every tested compact source set meets only finitely many components. Componentwise maps and homotopies therefore compute homotopy groups and components of the product. The component comparisons of steps 1.1–2.1 give all higher isomorphisms, and countable choice gives the product component bijection. Empty sources give singleton spaces. Thus the ordinary derivative map is a weak equivalence for all the stated sources. [F1, F3, step 1.1, step 2.1]

4.1 Fix one compact collared parameter neighbourhood $R$ with $Q\subset\operatorname{int}R\subset R\subset W$, where the original data on $W\times M$ are smooth and holonomic. For every closed source component $X$, compactness and the ordinary derivative weak equivalence of steps 1.1–2.1 satisfy exactly the compact-source transfer hypothesis in [F3]. It gives a formal deformation to genuine families, fixed on $R$ before smoothing and hence fixed on a common smaller neighbourhood of $Q$ afterward; smooth original data give a smooth deformation. The finite pair model of $(P,R)$ can be fixed once for all these components. For each noncompact source component apply the direct relative construction of [F1], fixing that same smaller parameter neighbourhood. The at-most-countably many component constructions may be selected by countable choice. Their product homotopy is weakly continuous because every compact source set meets finitely many components; smoothness is local on those open components. This proves the relative conclusions on all of $M$. The compact-source transfer is applied only after ordinary weak equivalence is established by the normal-identification fibration descent, so varying normal-bundle identifications and their monodromy are retained. [F1, F2, F3, step 1.1, step 2.1, step 3.1, construct] ∎
