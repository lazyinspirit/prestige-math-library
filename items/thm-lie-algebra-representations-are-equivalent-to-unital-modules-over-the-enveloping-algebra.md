---
id: thm-lie-algebra-representations-are-equivalent-to-unital-modules-over-the-enveloping-algebra
kind: theorem
title: Lie representations are U(g)-modules
status: draft
origin: pipeline
pipeline_run: phase-2-next-21
deps: [thm-universal-property-of-the-universal-enveloping-algebra, def-universal-enveloping-algebra, def-representation-of-a-lie-algebra, def-subrepresentation-quotient-representation-and-intertwiner, def-left-and-right-modules]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Etingof, MIT 18.745 notes, §12.1, printed pp. 69–70"
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
    - title: "Kirillov, An Introduction to Lie Groups and Lie Algebras, Theorem 5.2, printed pp. 71–72"
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
---

## Statement

Restriction along $\iota_{\mathfrak g}:\mathfrak g\to U(\mathfrak g)$ and extension by the
universal property give mutually inverse correspondences between
representations of $\mathfrak g$ and unital left $U(\mathfrak g)$-module
structures whose restriction along $k\to U(\mathfrak g)$ is the given scalar
action on $V$. A linear map is an intertwiner on one side exactly when it is a
module homomorphism on the other.

## Facts & Assumptions

**Given:** A Lie algebra $\mathfrak g$ and a vector space $V$ over $k$.

[L1] A unital left $U(\mathfrak g)$-module structure whose central
$k$-scalars act by the given scalar multiplication is equivalently a unital
$k$-algebra map $U(\mathfrak g)\to\operatorname{End}_k(V)$. Indeed, the
module axioms give additivity, multiplicativity, and preservation of the
unit, while the stated scalar compatibility gives $k$-linearity; conversely
such a map defines the required action
([[def-left-and-right-modules]]).

[L2] Lie maps from $\mathfrak g$ into a commutator algebra extend uniquely
across $U(\mathfrak g)$
([[thm-universal-property-of-the-universal-enveloping-algebra]]).

[L3] Representations and intertwiners are as in
[[def-representation-of-a-lie-algebra]] and
[[def-subrepresentation-quotient-representation-and-intertwiner]].

[L4] By its quotient-tensor-algebra definition, every element of
$U(\mathfrak g)$ is a finite linear combination of images of tensor words,
including the empty word $1$; these images are products of elements
$\iota_{\mathfrak g}(x)$.
[[def-universal-enveloping-algebra]].

## Proof

**Proof technique:** direct.

1.1 A representation $\rho:\mathfrak g\to\operatorname{End}_k(V)_{\mathrm{Lie}}$ extends uniquely by [L2] to a unital algebra map $\overline\rho:U(\mathfrak g)\to\operatorname{End}_k(V)$, hence to a unital left module structure by [L1]. [L1, L2, L3]

1.2 Conversely, a scalar-compatible unital module gives a $k$-algebra map $\alpha:U(\mathfrak g)\to\operatorname{End}_k(V)$. Its restriction $\alpha\iota_{\mathfrak g}$ preserves Lie brackets because both $\iota_{\mathfrak g}$ and every algebra map preserve commutators, so it is a representation. Starting with $\rho$ recovers $\rho$ by $\overline\rho\iota_{\mathfrak g}=\rho$; starting with $\alpha$ recovers $\alpha$ by uniqueness in [L2]. [L1, L2, algebra]

1.3 Let $T:V\to W$ be linear. If $T$ intertwines the $\mathfrak g$-actions, then it intertwines each $\rho(x)$, each finite product of these operators, and finite linear combinations of the products. By [L4], these include the actions of every element of $U(\mathfrak g)$; the empty product acts as the identity on both modules. Thus $T$ is a module homomorphism. Conversely, restricting a module homomorphism to $\iota_{\mathfrak g}(\mathfrak g)$ gives an intertwiner. [L3, L4, algebra]

2.1 The object and morphism correspondences in steps 1.1–1.3 are mutually inverse, proving the claimed equivalence without any PBW or injectivity assumption. [step 1.1, step 1.2, step 1.3] ∎
