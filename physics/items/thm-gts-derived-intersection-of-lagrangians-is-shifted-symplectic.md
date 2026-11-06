---
id: thm-gts-derived-intersection-of-lagrangians-is-shifted-symplectic
kind: theorem
title: Derived intersection of Lagrangians is shifted symplectic
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 2
domain: mathematics
library: physics
deps:
- def-derived-scheme-and-cotangent-complex
- def-gts-closed-n-shifted-symplectic-form
- def-gts-derived-artin-stack-and-cotangent-complex
- def-axiom-of-choice
- thm-gts-derived-artin-stacks-closed-under-homotopy-fiber-products
dependency_roles:
  def-derived-scheme-and-cotangent-complex: mathematical-premise
  def-gts-closed-n-shifted-symplectic-form: mathematical-premise
  def-gts-derived-artin-stack-and-cotangent-complex: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-gts-derived-artin-stacks-closed-under-homotopy-fiber-products: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Pantev, Toën, Vaquié, Vezzosi, Shifted Symplectic Structures
    url: https://arxiv.org/pdf/1111.3209
    locator: Definitions 2.7–2.8 and Theorem 2.9 with complete proof (PDF pp. 38–40).
  - title: Damien Calaque and Stefano Ronchi, Shifted Symplectic Geometry by Examples
    url: https://arxiv.org/pdf/2510.04625
    locator: Complete §4.3, Definition 4.8, Examples 4.9–4.12 and Remark 4.13 (PDF pp. 35–38).
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $k$ be a characteristic-zero field, assume AC for the cotangent
constructions inherited from [[def-derived-scheme-and-cotangent-complex]],
and let $F,X,Y$ be derived Artin
stacks in a common finite geometricity range, each with perfect cotangent
complex over $k$. Their tangent complexes are the duals of these perfect
cotangent complexes; the relative cotangent complexes below are perfect as
cofibers of maps of perfect complexes. Suppose $F$ has a closed
$n$-shifted symplectic form $\omega$, and maps $f:X\to F$ and $g:Y\to F$
carry Lagrangian structures. Here a Lagrangian structure on $f$ is a path
$h:0\leadsto f^*\omega$ in $\mathcal A^{2,\mathrm{cl}}(X,n)$ whose induced
map $T_X\to L_{X/F}[n-1]$ is a quasi-isomorphism, where
$L_{X/F}=\operatorname{cofib}(f^*L_F\to L_X)$ is the relative cotangent
complex. Equivalently, the induced relative tangent-to-cotangent map
$\operatorname{fib}(T_X\to f^*T_F)\to L_X[n-1]$ is a
quasi-isomorphism; use the same convention for $g$. Then the derived homotopy fiber product
$Z=X\times_F^hY$ carries a canonical closed $(n-1)$-shifted symplectic
structure, the residue of $(\omega,h,k)$.

## Statement references

[[def-gts-closed-n-shifted-symplectic-form]]

[[def-gts-derived-artin-stack-and-cotangent-complex]]

[[thm-gts-derived-artin-stacks-closed-under-homotopy-fiber-products]]

## Facts & Assumptions

**Given:** AC, the derived Artin stacks $F,X,Y$, the $n$-shifted symplectic form $\omega$, and Lagrangian paths and nondegeneracy maps for $f$ and $g$.

[F1] [[def-gts-closed-n-shifted-symplectic-form]]: closed 2-forms of degree $m$ are points of the weighted negative-cyclic complex in weight two, with underlying 2-form map $T\to L[m]$; nondegeneracy means this map is a quasi-isomorphism.

[F2] [[def-gts-derived-artin-stack-and-cotangent-complex]]: cotangent complexes corepresent derived derivations, and tangent complexes are their duals when perfect.

[F3] [[thm-gts-derived-artin-stacks-closed-under-homotopy-fiber-products]]: the derived homotopy fiber product of the stated Artin stacks is derived Artin.

[A1] The isotropic paths for $f$ and $g$ induce quasi-isomorphisms $T_X\to L_{X/F}[n-1]$ and $T_Y\to L_{Y/F}[n-1]$ under the relative cotangent convention in the Statement.

[A2] AC is the foundational premise in the cotangent-comparison construction inherited from [[def-derived-scheme-and-cotangent-complex]].

## Proof

1.1 By [F3], $Z$ is derived Artin, so the closed-form spaces and cotangent complex in the claim are defined. Write $p:Z\to X$, $q:Z\to Y$, and $\pi=f\circ p\simeq g\circ q:Z\to F$; the homotopy in the derived fiber product is the displayed equivalence. [F2, F3, A2, given]

1.2 Pulling back the paths $h$ and $k$ gives paths from zero to $p^*f^*\omega$ and $q^*g^*\omega$. The homotopy $f\circ p\simeq g\circ q$ induces a path between those two endpoints in $\mathcal A^{2,\mathrm{cl}}(Z,n)$. Concatenate the first path, this endpoint homotopy, and the reverse of the second path. The result is a loop at zero. This space is a simplicial abelian group represented by a shifted complex, so $\Omega\mathcal A^{2,\mathrm{cl}}(Z,n)\simeq \mathcal A^{2,\mathrm{cl}}(Z,n-1)$. The loop therefore defines a closed form $\omega_Z\in\mathcal A^{2,\mathrm{cl}}(Z,n-1)$. [F1, A2, given, construct]

2.1 At every affine test point of $Z$, derived derivations identify its tangent complex with the homotopy fiber in the exact triangle $$T_Z\longrightarrow p^*T_X\oplus q^*T_Y\longrightarrow\pi^*T_F.$$ For the cotangent triangle write $L_{X/F}=\operatorname{cofib}(f^*L_F\to L_X)$ and $L_{Y/F}=\operatorname{cofib}(g^*L_F\to L_Y)$. The pullback cotangent calculation gives the exact triangle $$L_Z\longrightarrow p^*L_{X/F}\oplus q^*L_{Y/F}\longrightarrow\pi^*L_F[1].$$ Shift it by $n-1$. The isotropic homotopies from step 1.2 induce a commutative map from the tangent triangle to this shifted cotangent triangle: the left map is the adjoint of $\omega_Z$, the middle maps are those induced by the two Lagrangian structures, and the right map is $\Theta_\omega$. The endpoint homotopy makes the component maps compatible with the common map to $F$. [F1, F2, A2, step 1.2, given]

3.1 The middle vertical map in this comparison is the direct sum of the two quasi-isomorphisms in [A1]. The right vertical map is a quasi-isomorphism by nondegeneracy of $\omega$ in [F1]. In a map of exact triangles, if the second and third vertical maps are quasi-isomorphisms, then the first is as well: the long exact cohomology sequences and the five lemma give an isomorphism in every degree. Thus the adjoint $T_Z\to L_Z[n-1]$ induced by $\omega_Z$ is a quasi-isomorphism. [F1, A1, A2, step 2.1]

4.1 Step 1.2 gives closedness and step 3.1 gives nondegeneracy. By the definition of shifted symplectic structure, $\omega_Z$ is therefore an $(n-1)$-shifted symplectic structure on $Z$. Its construction used only the given paths and the canonical fiber-product homotopy, so it is canonical relative to those data. [F1, A2, step 1.2, step 3.1] ∎
## Remarks

The exact tangent and relative-cotangent triangles compared in steps 2.1 and 3.1 are summarized here. The proof uses their exactness and the five-lemma argument, not the diagram as evidence.

```tikzcd
T_Z \arrow[r] \arrow[d,"\Theta_{\mathrm{res}}"] &
p^*T_X\oplus q^*T_Y \arrow[r] \arrow[d,"\Theta_h\oplus\Theta_k"] &
\pi^*T_F \arrow[d,"\Theta_\omega"] \\
L_Z[n-1] \arrow[r] &
p^*L_{X/F}[n-1]\oplus q^*L_{Y/F}[n-1] \arrow[r] &
\pi^*L_F[n]
```

The statement includes derived intersections, including empty classical intersections whose derived fiber product is still the relevant moduli object. It makes no assertion that the ordinary underived intersection is smooth or nonempty.
