---
id: def-scheme-perfect-complexes
kind: definition
title: Perfect complexes on schemes and their support
status: published
domain: mathematics
deps:
  - thm-author-4f716d60801a-derived-enhancement-input
  - lem-author-4f716d60801a-local-perfect-qc
  - lem-author-4f716d60801a-restriction-support
  - lem-author-4f716d60801a-supported-stability
  - lem-author-4f716d60801a-lifted-affine-equivalence
  - math:def-perfect-complex-over-a-ring
  - math:def-axiom-of-choice
  - math:def-scheme
  - math:def-associated-sheaf-module-affine-scheme
  - math:def-grothendieck-universe-closure-convention
  - math:def-module-on-ringed-space
  - math:def-cochain-complex-in-an-abelian-category
  - math:def-stalk-of-presheaf
  - math:def-restriction-sheaf-open-subspace
  - math:def-open-immersion-schemes
  - math:def-quasi-coherent-module-scheme
  - math:def-commutative-ring
  - math:def-left-and-right-modules
  - math:def-projective-module
  - math:def-generated-cyclic-finitely-generated-and-free-modules
  - math:def-affine-scheme
  - math:def-affine-scheme-spectrum
  - math:thm-structure-sheaf-affine-scheme
  - math:cor-spectrum-with-structure-sheaf-locally-ringed
dependency_roles:
  thm-author-4f716d60801a-derived-enhancement-input: mathematical-premise
  lem-author-4f716d60801a-local-perfect-qc: mathematical-premise
  lem-author-4f716d60801a-restriction-support: mathematical-premise
  lem-author-4f716d60801a-supported-stability: mathematical-premise
  lem-author-4f716d60801a-lifted-affine-equivalence: mathematical-premise
  math:def-perfect-complex-over-a-ring: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-scheme: mathematical-premise
  math:def-associated-sheaf-module-affine-scheme: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
  math:def-module-on-ringed-space: mathematical-premise
  math:def-cochain-complex-in-an-abelian-category: mathematical-premise
  math:def-stalk-of-presheaf: mathematical-premise
  math:def-restriction-sheaf-open-subspace: mathematical-premise
  math:def-open-immersion-schemes: mathematical-premise
  math:def-quasi-coherent-module-scheme: mathematical-premise
  math:def-commutative-ring: mathematical-premise
  math:def-left-and-right-modules: mathematical-premise
  math:def-projective-module: mathematical-premise
  math:def-generated-cyclic-finitely-generated-and-free-modules: mathematical-premise
  math:def-affine-scheme: mathematical-premise
  math:def-affine-scheme-spectrum: mathematical-premise
  math:thm-structure-sheaf-affine-scheme: mathematical-premise
  math:cor-spectrum-with-structure-sheaf-locally-ringed: mathematical-premise
provenance:
  statement: ai-generated
  proof: not-applicable
dependency_level: 6
---

## Definition
Assume the Axiom of Choice and fix suitable universes. Let $X$ be any scheme. Let $\mathcal D(X)$ be the stable derived infinity-category obtained from cochain complexes of Zariski $\mathcal O_X$-modules by inverting quasi-isomorphisms. A quasi-isomorphism induces an isomorphism on every cohomology sheaf. Its homotopy category is the ordinary unbounded derived category $D(\mathcal O_X)$.

An object $E$ is **perfect** if every point has an open neighbourhood on which $E$ is equivalent to a bounded complex of finite locally free modules. Bounded means nonzero in only finitely many degrees; finite locally free means locally a finite direct sum of copies of the structure sheaf. Bounds may vary between neighbourhoods. Write $\operatorname{Perf}(X)$ for the full enhanced subcategory on these objects, retaining all ambient mapping spaces and their composition coherences.

The **support** of $E$ is $\operatorname{Supp}(E)=\bigcup_{n\in\mathbb Z}\{x\in X:H^n(E)_x\ne0\}$. For any subset $T\subseteq X$, define $\operatorname{Perf}_T(X)$ as the full subcategory of perfect objects with support contained in $T$. If $T$ is closed and $j:X\setminus T\hookrightarrow X$ is the open immersion, this is equivalently the full subcategory on objects with $j^*E\simeq0$; thus these complexes are acyclic on the open complement. For arbitrary $T$, the condition is interpreted stalkwise.

These full subcategories are stable and idempotent complete. Their finite limits and colimits are inherited from $\mathcal D(X)$; their exact triangles are the images in the homotopy category of ambient cofiber sequences $E\to F\to G\to E[1]$. For cochains, $E[1]^n=E^{n+1}$ with differential $-d$.

For a commutative unital ring $A$, degreewise associated sheaf gives an exact equivalence $\operatorname{Perf}(A)\simeq\operatorname{Perf}(\operatorname{Spec}A)$, where $\operatorname{Perf}(A)$ is the full subcategory of $\mathcal D(A)$ on objects represented by bounded complexes of finitely generated projective $A$-modules.

## Justification
[[lem-author-4f716d60801a-local-perfect-qc]] proves that the local condition is independent of representatives and gives quasi-coherent cohomology. [[lem-author-4f716d60801a-restriction-support]] proves invariance of support and the open-complement equivalence. [[lem-author-4f716d60801a-supported-stability]] proves the stable and idempotent-complete subcategory assertions. [[lem-author-4f716d60801a-lifted-affine-equivalence]] proves the enhanced affine comparison for the actual associated-sheaf functor, and [[math:def-perfect-complex-over-a-ring]] supplies the ring convention. No global bound or global vector-bundle resolution is imposed.
