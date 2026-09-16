---
id: thm-extreme-amenability-yields-bpi-in-finite-support-models
kind: theorem
title: "Extreme amenability yields BPI in finite-support permutation models"
status: draft
origin: pipeline
deps: [thm-fraenkel-mostowski-permutation-model, def-boolean-prime-ideal-principle, def-symmetric-and-hereditarily-symmetric-sets, def-permutation-support-system-and-normal-filter, thm-bpi-equivalent-to-set-ultrafilter-lemma, def-boolean-ideals-filters-and-primality, def-stone-ultrafilter-space-and-clopens, def-hausdorff-space, def-compact-space, thm-compact-iff-fip, def-subspace-topology-top, def-product-topology, def-continuous-map-top, def-zfa-universe-atoms-and-kernel, def-topological-space]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Andreas Blass, Partitions and Permutation Groups"
      url: "https://janos.cs.technion.ac.il/RESEARCH/AMS-Book-files/pdfs/11_Blass.pdf"
      locator: "Definition 2.1, Theorems 5.1-5.2, pp. 2 and 12-14"
---

## Statement

Let $G$ act on a set of atoms $A$ and let the associated permutation model be
built from the finite-support filter
([[def-permutation-support-system-and-normal-filter]],
[[def-symmetric-and-hereditarily-symmetric-sets]]). Suppose that for every finite
$E \subseteq A$ the pointwise stabiliser $\operatorname{fix}(E)$ is **extremely
amenable** in the topology of pointwise convergence: every continuous action of
$\operatorname{fix}(E)$ on a nonempty compact Hausdorff space has a fixed point.
Then the permutation model satisfies BPI
([[def-boolean-prime-ideal-principle]]).

## Facts & Assumptions

**Given:** A finite-support permutation system over a ZFA + AC ground model; the extreme-amenability hypothesis for every finite point stabiliser; a Boolean algebra $B$ of the permutation model and a finite support $E$ of a name for it.

[F1] A hereditarily symmetric interpretation of a normal permutation system is a ZFA model with the same atoms and kernel, and a set belongs to it exactly when it admits a support in the filter ([[thm-fraenkel-mostowski-permutation-model]], [[def-symmetric-and-hereditarily-symmetric-sets]]).

[F2] The set of prime ideals of a nontrivial Boolean algebra is nonempty by the ultrafilter lemma in the ground model, and it is a closed subspace of the product $2^{B}$, hence compact Hausdorff in the product topology ([[def-boolean-prime-ideal-principle]], [[thm-bpi-equivalent-to-set-ultrafilter-lemma]], [[def-boolean-ideals-filters-and-primality]], [[def-stone-ultrafilter-space-and-clopens]], [[def-product-topology]], [[def-compact-space]], [[def-hausdorff-space]]).

[F3] Extreme amenability of $H = \operatorname{fix}(E)$: every continuous action of $H$ on a nonempty compact Hausdorff space has a fixed point. [given]

[L1] The $H$-action on the prime-ideal space is continuous: the stabiliser in $H$ of a basic clopen set of $2^{B}$ determined by one element of $B$ is open in the pointwise-convergence topology, hence so is the stabiliser of each point ([[def-continuous-map-top]], [[def-subspace-topology-top]], [[def-topological-space]]).

## Proof

**Proof technique:** direct.

1.1 Work in the permutation model and let $B$ be a nontrivial Boolean algebra there, with $E$ a finite support of $B$; put $H := \operatorname{fix}(E)$. [given, F1]

2.1 In the ground model the prime ideals of $B$ form the nonempty compact Hausdorff space $S(B) \subseteq 2^{B}$ of [F2], and $H$ acts on it continuously by [L1], because an automorphism of the atoms induces a Boolean automorphism of $B$ preserving its support. [step 1.1, F2, L1]

3.1 By extreme amenability [F3] applied to $H$ and to the nonempty compact Hausdorff space $S(B)$, there is an $H$-fixed prime ideal $P \subseteq B$. [step 2.1, F3]

4.1 The fixed ideal $P$ is supported by $E$: every $\pi \in H$ fixes $P$ by step 3.1, so $H \subseteq \operatorname{sym}(P)$ and the filter contains $H$; since each element of $P$ is an element of the model's Boolean algebra $B$ and hence hereditarily symmetric, $P$ itself is hereditarily symmetric. [step 3.1, F1]

5.1 By [F1] the hereditarily symmetric set $P$ belongs to the permutation model, where it is a prime ideal of $B$; since $B$ was an arbitrary nontrivial Boolean algebra of the model, BPI holds there. [step 4.1, F1] ∎

## Remarks

- **What the extreme-amenability hypothesis is used for.** It replaces the missing choice inside the symmetric model by a fixed-point statement in the ground model: the prime-ideal space is nonempty and compact there, and one stabiliser of the algebra's finite support has a fixed point, which is then supported by that same finite set.

- **Why finite supports.** The argument needs the stabiliser of the algebra to be one of the groups assumed extremely amenable, and in a finite-support model the stabiliser of any set with finite support has finite support; no claim is made for infinite supports.
