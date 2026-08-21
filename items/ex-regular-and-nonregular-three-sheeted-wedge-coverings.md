---
id: ex-regular-and-nonregular-three-sheeted-wedge-coverings
kind: example
title: "The two-circle wedge has both regular and nonregular connected three-sheeted coverings"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [cor-fundamental-group-of-two-circle-wedge,
       thm-classification-of-connected-covering-spaces,
       thm-regular-covering-characterizations,
       thm-sheets-equal-fundamental-group-index, def-free-group,
       thm-reduced-words-form-the-free-group, def-symmetric-group,
       lem-symmetric-group-is-a-group, def-orbit-and-stabilizer,
       lem-stabilizer-is-a-subgroup, thm-orbit-stabilizer,
       prop-integers-modulo-n-as-a-quotient-group,
       thm-standard-representatives-modulo-n,
       thm-image-subgroup-and-kernel-normal,
       thm-first-isomorphism-theorem-groups, def-normal-subgroup, def-index,
       def-wedge-of-pointed-spaces, lem-finite-circle-wedge-open-cover,
       lem-open-quotient-arcs-in-real-line-mod-integers,
       thm-convex-subsets-have-trivial-fundamental-group,
       def-locally-connected, def-semilocally-simply-connected-space,
       prop-local-path-connectedness-lifts-and-descends-along-coverings,
       thm-connected-and-locally-path-connected-implies-path-connected]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

Let $W=S^1\vee S^1$ with standard loop classes $a,b$. There are connected three-sheeted coverings $E_{\mathrm{reg}}\to W$ and $E_{\mathrm{nonreg}}\to W$ such that the first is regular and the second is not.

The regular cover is classified by the kernel of $F(a,b)\to\mathbb Z/3$ sending $a$ to $[1]$ and $b$ to $[0]$. The nonregular cover is classified by the preimage of the stabilizer of $1$ under the surjection $F(a,b)\to S_3$ sending $a$ to $(12)$ and $b$ to $(123)$.

## Facts & Assumptions

**Given:** The two-circle wedge group and the two assignments in the Example.

[L1] The group $\pi_1(W,w)$ is free on $a,b$ ([[cor-fundamental-group-of-two-circle-wedge]]).

[F1] An assignment on a free basis extends uniquely to a group homomorphism from the free group ([[thm-reduced-words-form-the-free-group]]).

[F2] The kernel of a group homomorphism is normal ([[thm-image-subgroup-and-kernel-normal]]).

[F3] The first isomorphism theorem identifies a quotient by a kernel with the image ([[thm-first-isomorphism-theorem-groups]]).

[F4] A point stabilizer is a subgroup, and its coset set is in bijection with its orbit ([[lem-stabilizer-is-a-subgroup]], [[thm-orbit-stabilizer]]).

[F5] Every subgroup is realized by a connected covering, up to based isomorphism ([[thm-classification-of-connected-covering-spaces]]).

[F6] For a covering with path-connected total space and path-connected locally path-connected base, regularity is equivalent to normality of its induced subgroup ([[thm-regular-covering-characterizations]]).

[F7] For a covering with nonempty path-connected total space, the number of sheets equals the index of its induced subgroup ([[thm-sheets-equal-fundamental-group-index]]).

[F8] The group $\mathbb Z/3$ has three elements ([[prop-integers-modulo-n-as-a-quotient-group]], [[thm-standard-representatives-modulo-n]]).

[F9] The index of a subgroup is the cardinality of its coset set when that set is finite ([[def-index]]).

[F10] The two-circle wedge is the tagged quotient identifying only its two basepoints. It has a standard open-cover overlap that deformation retracts to the wedge point and is path-connected and simply connected ([[def-wedge-of-pointed-spaces]], [[lem-finite-circle-wedge-open-cover]]).

[F11] Open quotient arcs of length below one are homeomorphic to real intervals ([[lem-open-quotient-arcs-in-real-line-mod-integers]]).

[F12] Nonempty convex real intervals are simply connected ([[thm-convex-subsets-have-trivial-fundamental-group]]).

[F13] Local path-connectedness asks for arbitrarily small open path-connected neighbourhoods, and semilocal simple connectedness asks for a neighbourhood whose inclusion induces the trivial fundamental-group map ([[def-locally-connected]], [[def-semilocally-simply-connected-space]]).

[F14] Local path-connectedness lifts from the base of a covering to its total space ([[prop-local-path-connectedness-lifts-and-descends-along-coverings]]).

[F15] A connected locally path-connected space is path-connected ([[thm-connected-and-locally-path-connected-implies-path-connected]]).

## Verification

**Proof technique:** direct.

1.1 By [L1] and [F1], the assignment $a\mapsto[1]$, $b\mapsto[0]$ extends to a homomorphism $\phi:F(a,b)\to\mathbb Z/3$. It is surjective because $[1]$ generates $\mathbb Z/3$. [L1, F1, F8]

1.2 Again by [L1] and [F1], $a\mapsto(12)$ and $b\mapsto(123)$ extend to $\psi:F(a,b)\to S_3$. The elements $(12)$ and $(123)$ generate all six permutations, as seen from $1,(123),(132),(12),(12)(123),(12)(132)$, so $\psi$ is surjective. [L1, F1]

2.1 Put $H_{\mathrm{reg}}=\ker\phi$. It is normal by [F2], and [F3] identifies $F(a,b)/H_{\mathrm{reg}}$ with the three-element group $\mathbb Z/3$, so [F9] makes $H_{\mathrm{reg}}$ a subgroup of index three. [step 1.1, F2, F3, F8, F9]

2.2 Let $J=\operatorname{Stab}_{S_3}(1)$ and $H_{\mathrm{nonreg}}=\psi^{-1}(J)$. The set $J$ is a subgroup by [F4], and its preimage is a subgroup because $x,y\in\psi^{-1}(J)$ gives $\psi(xy^{-1})=\psi(x)\psi(y)^{-1}\in J$. The natural action of $S_3$ on $\{1,2,3\}$ is transitive, so [F4] gives three cosets of $J$; surjectivity of $\psi$ gives a bijection between cosets of $H_{\mathrm{nonreg}}$ and cosets of $J$, hence [F9] gives $[F(a,b):H_{\mathrm{nonreg}}]=3$. The subgroup is not normal: $bab^{-1}$ maps to $(123)(12)(132)=(23)$, which fixes $1$, while $b(bab^{-1})b^{-1}$ maps to $(123)(23)(132)=(13)$, which does not fix $1$. Thus conjugation by $b$ takes an element of $H_{\mathrm{nonreg}}$ outside it. [step 1.2, F4, F9, algebra]

3.1 The base $W$ satisfies the hypotheses of [F5]. It is nonempty and path-connected because every point in either circle is joined to the wedge point. Away from the wedge point, [F11] and [F12] give arbitrarily small open simply connected arcs. At the wedge point, the quotient topology in [F10] makes every open neighbourhood contain a smaller wedge of open arcs; the interval coordinates of [F11] join every point of that smaller wedge to the wedge point along its own branch, so it is path-connected. The particular open overlap supplied by [F10] is simply connected, and therefore has trivial inclusion-induced fundamental group. Thus [F13] gives local path-connectedness and semilocal simple connectedness. Now [F5] realizes the two index-three subgroups from steps 2.1 and 2.2 by connected coverings of $W$. Since $W$ is locally path-connected, [F14] and [F15] make their total spaces path-connected. This licenses [F7], which makes both covers three-sheeted, and [F6], which makes the normal kernel cover regular and the nonnormal stabilizer-preimage cover nonregular. [step 2.1, step 2.2, F5, F6, F7, F10, F11, F12, F13, F14, F15] ∎
