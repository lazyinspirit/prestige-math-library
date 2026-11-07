---
id: lem-spin-c-structures-form-an-h2-torsor
kind: lemma
title: "Spin-c structures on a fixed oriented bundle form an H2 torsor"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
page: branched-cover-correction-terms-and-sliceness
deps:
  - def-given-spin-and-spinc-structures-and-associated-spinor-bundles
  - def-principal-g-bundle-and-associated-fiber-bundle
  - prop-associated-bundle-is-locally-trivial-and-functorial-under-pullback
  - thm-first-chern-class-classifies-complex-line-bundles
  - def-axiom-of-choice
dependency_level: 0
justified_by: []
aliases: []
proof_strategy: direct
axiom_strength: "Assume AC, inherited through the first-Chern-class classification."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Peter S. Ozsvath and Zoltan Szabo, Absolutely graded Floer homologies and intersection forms for four-manifolds with boundary"
      url: "https://arxiv.org/pdf/math/0110170v1"
      locator: "Section 2, Spin-c structures and the H^2 action"
---

## Statement

Assume AC. Let $E\to X$ be an oriented real vector bundle over a path-connected paracompact Hausdorff compactly generated weak Hausdorff space of CW homotopy type, and suppose one numerable Spin$^c$ lift of its oriented frame bundle is given. Among numerable Spin$^c$ lifts of that same frame bundle, isomorphism classes form a torsor for $H^2(X;\mathbb Z)$: tensoring a lift by a complex line bundle defines a free and transitive action, identified with $H^2(X;\mathbb Z)$ by the first Chern class. For a continuous map $f:X\to Z$ between bases with these hypotheses and an oriented bundle $E_Z\to Z$, the pullback action on lifts of $f^*E_Z\to X$ is equivariant for $f^*:H^2(Z;\mathbb Z)\to H^2(X;\mathbb Z)$.

## Statement references

[[def-given-spin-and-spinc-structures-and-associated-spinor-bundles|Spin-c lifts of the oriented frame bundle]]

[[def-principal-g-bundle-and-associated-fiber-bundle|Principal bundles and associated bundles]]

[[prop-associated-bundle-is-locally-trivial-and-functorial-under-pullback|Local triviality and pullback naturality of associated bundles]]

[[thm-first-chern-class-classifies-complex-line-bundles|Classification of complex line bundles by the first Chern class]]

## Facts & Assumptions

**Given:** A path-connected paracompact Hausdorff base $X$ of CW homotopy type, an oriented real vector bundle $E\to X$, and one fixed Spin$^c$ lift $P_0$ of its oriented frame bundle.

[A1] The Axiom of Choice is assumed by the first-Chern-class classification used to identify line-bundle classes with $H^2(X;\mathbb Z)$ ([[def-axiom-of-choice]]).

[F1] A Spin$^c$ structure is a principal $\mathrm{Spin}^c(n)$-bundle lifting the oriented frame bundle through $\mathrm{Spin}^c(n)\to\mathrm{SO}(n)$; the kernel is the central $U(1)$ ([[def-given-spin-and-spinc-structures-and-associated-spinor-bundles]]).

[F2] A principal $U(1)$-bundle has the associated complex line bundle for the standard scalar representation; its unit circle subbundle is canonically the original principal bundle, and associated bundles are locally trivial and natural under pullback ([[def-principal-g-bundle-and-associated-fiber-bundle]], [[prop-associated-bundle-is-locally-trivial-and-functorial-under-pullback]]).

[F3] For a path-connected CW-type paracompact Hausdorff compactly generated weak Hausdorff base, the first Chern class gives a natural group isomorphism from isomorphism classes of complex line bundles under tensor product to $H^2(X;\mathbb Z)$, under AC ([[thm-first-chern-class-classifies-complex-line-bundles]]).

## Proof
**Proof technique:** construct the difference line bundle between two lifts and use its first Chern class.

**Given:** The data above.

1.1 For any second lift $P_1$, define $L(P_0,P_1)_x$ to be the set of Spin$^c$-equivariant maps from $(P_0)_x$ to $(P_1)_x$ covering the identity map of the common oriented frame fiber. Since both are lifts of that same frame fiber, two such maps differ by a unique element of the central kernel $U(1)$ from [F1]. In local lift trivializations, the transition functions of $P_0$ and $P_1$ project to the same $\mathrm{SO}(n)$ functions, so their pointwise quotient lies in central $U(1)$; the cocycle identity for each lift makes these quotients a $U(1)$-valued cocycle. Thus the difference fibers form a principal $U(1)$-bundle $L(P_0,P_1)$ over $X$. [F1, given, construct]

2.1 Associate to the principal difference bundle in step 1.1 the standard complex line. By [F2], its unit circle bundle is that principal bundle. The diagonal central action defines the twist $P_0\otimes L=(P_0\times_X L)/U(1)$; evaluation of each difference map gives a Spin$^c$-equivariant isomorphism $P_0\otimes L(P_0,P_1)\cong P_1$. If $P_0\otimes L\cong P_0$, its difference bundle is trivial, so the action is free; the construction for arbitrary $P_1$ proves transitivity. Tensor product of line bundles gives the group law and pullback commutes with the fiberwise construction. [F1, F2, step 1.1, construct]

3.1 By [F3], the isomorphism class of the associated line $L$ is uniquely identified with $c_1(L)\in H^2(X;\mathbb Z)$, compatibly with tensor product and pullback. Thus the free transitive line-bundle action is precisely a free transitive $H^2(X;\mathbb Z)$ action and is natural under $f^*$. If $X$ is a point, $H^2(X;\mathbb Z)=0$ and the given lift is the only class in its torsor; no existence of an initial lift is asserted. AC is used only through [A1] and [F3]. [A1, F2, F3, step 2.1] ∎
