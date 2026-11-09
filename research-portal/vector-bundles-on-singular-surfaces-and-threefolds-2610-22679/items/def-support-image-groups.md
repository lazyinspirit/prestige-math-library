---
id: def-support-image-groups
kind: definition
title: Images of support groups in global groups
status: published
domain: mathematics
deps:
  - def-cohomology-with-support
  - def-motivic-filtration
  - def-motivic-cohomology
  - math:def-axiom-of-choice
dependency_roles:
  def-cohomology-with-support: mathematical-premise
  def-motivic-filtration: mathematical-premise
  def-motivic-cohomology: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
proof_strategy: direct-proof
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: PDF p. 6, Definition 2.7, final two displays; p. 7, equation (2.8)
      reading_limits: These passages were read in the supplied article text. The
        support spectra, extension to non-quasi-compact complements, and
        indexing convention used below are those of the cited local supplier; no
        separate comparison with evaluation on the quotient sheaf is asserted.
dependency_level: 14
---

## Definition
Assume the Axiom of Choice and the size conventions of the support construction. Fix a field $k$, a quasi-compact quasi-separated $k$-scheme $X$, and a closed subset $Y\subseteq X$ with its reduced induced closed-subscheme structure. Put $U=X\setminus Y$. Let $j\geq0$ and $i\in\mathbb Z$.

Use the support spectra and their support-to-global maps from the preceding support definition. In particular, $F^j_{\mathrm{mot}}K_{i,Y}(X)$ is the image of $\pi_iF^j_{\mathrm{mot}}K(X/U)$ in $\pi_iK(X/U)$, and $F^j_{\mathrm{mot}}K_i(X)$ is the image of $\pi_iF^j_{\mathrm{mot}}K(X)$ in $K_i(X)=\pi_iK(X)$. An image is the subgroup consisting of the values of the indicated homomorphism. Define

$$F^j_{\mathrm{mot}}K_i(Y;X):=\operatorname{im}\bigl(F^j_{\mathrm{mot}}K_{i,Y}(X)\longrightarrow F^j_{\mathrm{mot}}K_i(X)\bigr),$$

where the arrow is induced by the support-to-global map on $K$-theory. For supported motivic cohomology $H^{a,j}_{\mathrm{mot},Y}(X,\mathbb Z)$ and global motivic cohomology $H^{a,j}_{\mathrm{mot}}(X,\mathbb Z)$, define

$$H^{a,j}_{\mathrm{mot}}(Y;X):=\operatorname{im}\bigl(H^{a,j}_{\mathrm{mot},Y}(X,\mathbb Z)\longrightarrow H^{a,j}_{\mathrm{mot}}(X,\mathbb Z)\bigr)$$

for every integer $a$; in particular this includes the article's degree $a=2j-i$. The arrow is the support-to-global map. Finally, put

$$K_0(Y;X):=\operatorname{im}\bigl(\pi_0K(X/U)\longrightarrow K_0(X)\bigr).$$

These are image subgroups of the respective global groups; the supported groups are their domains before the final image is taken. No injectivity of a support-to-global map is part of the definition.

## Definition references
[[def-cohomology-with-support]]

[[def-motivic-filtration]]

[[def-motivic-cohomology]]

## Facts & Assumptions
**Given:** The field, scheme, closed subset, complement, choice and size conventions, and indices in the definition.

**Goal:** Show that each displayed map has the stated target and that each image is a well-defined subgroup.

[A1] The Axiom of Choice, [[math:def-axiom-of-choice]], discharges the inherited Choice hypotheses of the support and global filtration constructions invoked in [F1] and [F2]. The subgroup-image argument below requires no additional choice principle.

[F1] [[def-cohomology-with-support]] supplies the filtered and unfiltered support spectra as fibers, their compatible maps to the corresponding global spectra, and the supported motivic cohomology groups and support-to-global homomorphisms. Its construction also specifies the extension used when $U$ is not quasi-compact.

[F2] [[def-motivic-filtration]] defines $K_i(X)=\pi_iK(X)$ and $F^j_{\mathrm{mot}}K_i(X)$ as the image of the global stage-to-$K$ homomorphism. The stage-to-$K$ maps are compatible with restriction.

[F3] [[def-motivic-cohomology]] defines the global group $H^{a,j}_{\mathrm{mot}}(X,\mathbb Z)$. The support definition in [F1] identifies its support-to-global target with this group, using the stated cohomological indexing convention.

## Justification
1.1 The compatible support and global stage-to-$K$ maps form a commutative square after applying $\pi_i$. If an element of $F^j_{\mathrm{mot}}K_{i,Y}(X)$ is represented by an element of $\pi_iF^j_{\mathrm{mot}}K(X/U)$, its image in $K_i(X)$ is represented by the image of that element in $\pi_iF^j_{\mathrm{mot}}K(X)$. It therefore belongs to $F^j_{\mathrm{mot}}K_i(X)$. The map is the restriction of the homomorphism on unfiltered $K$-theory, so it is independent of the chosen representative. [A1, F1, F2, given]

2.1 The image of a group homomorphism is a subgroup: zero is the image of zero, and the difference of two image elements is the image of the difference of their preimages. Apply this to the homomorphism in step 1.1 and to the support-to-global homomorphisms for motivic cohomology and unfiltered $K$-theory. The resulting subgroups are exactly the three displayed definitions. The construction uses no injectivity; it justifies the definitions and their stated targets. [F1, F3, step 1.1] ∎

## Indexing and scope
The supported cohomology supplier uses an explicit $2j$ shift to reconcile the article's displayed $\pi_i$ notation with the global cohomological convention. The image in degree $2j-i$ is taken using that supplier's support-to-global map. The construction does not identify $K(X/U)$ with the $K$-theory of a category of supported perfect complexes.
