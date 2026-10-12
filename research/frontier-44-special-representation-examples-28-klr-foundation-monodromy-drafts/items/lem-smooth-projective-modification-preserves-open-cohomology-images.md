---
id: lem-smooth-projective-modification-preserves-open-cohomology-images
kind: lemma
title: "Modification preserves open cohomology images"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-poincare-duality-for-oriented-topological-manifolds, cor-cohomology-over-a-field-is-dual-to-homology-over-that-field, prop-cap-product-naturality-and-projection-formula, def-axiom-of-choice]
sources:
  references:
    - title: "Pierre Deligne, Theorie de Hodge II, 3.2.16–3.2.18 and 4.1.1"
      url: "https://www.numdam.org/item/PMIHES_1971__40__5_0/"
---

## Statement

Assume AC. Let $p:X'\to X$ be a proper morphism between smooth projective complex varieties of equal pure dimension, restricting to the identity on a common open variety $U$. Then $H^n(X,\mathbb Q)$ and $H^n(X',\mathbb Q)$ have the same image in $H^n(U,\mathbb Q)$ for every $n$. Consequently the compactification-image formula of logarithmic weights extends from an SNC compactification to every smooth projective compactification.

## Facts & Assumptions

**Given:** $p,X',X,U$, their complex orientations, and AC [[def-axiom-of-choice]]. Compact-support Poincaré duality and its open-extension naturality are [[thm-poincare-duality-for-oriented-topological-manifolds]]. The cup/cap projection formula is [[prop-cap-product-naturality-and-projection-formula]]. Field cohomology is dual to field homology by [[cor-cohomology-over-a-field-is-dual-to-homology-over-that-field]].

## Proof

1.1 Define $p_!:H^n(X')\to H^n(X)$ by $D_X^{-1}p_*D_{X'}$, where $D$ caps with the compact fundamental class. The cup/cap projection formula gives $\langle p_!a,b\rangle_X=\langle a,p^*b\rangle_{X'}$ for $b\in H^{2d-n}(X)$. If $c\in H_c^{2d-n}(U)$, its extension $e_Xc$ pulls back to $e_{X'}c$: at a compact-support representative supported in $K\subset U$, the proper preimage of $K$ is exactly $K$ because $p$ is identity over $U$, and excision identifies the two extensions. Therefore $\langle (p_!a)|_U,c\rangle_U=\langle p_!a,e_Xc\rangle_X=\langle a,e_{X'}c\rangle_{X'}=\langle a|_U,c\rangle_U.$ The pairing $H^n(U)\times H_c^{2d-n}(U)\to\mathbb Q$ detects every cohomology class, since duality identifies the second factor with $H_n(U)$ and the field universal-coefficient comparison identifies the first with its full linear dual. Hence $(p_!a)|_U=a|_U$. [given, construct, algebra]

2.1 One image inclusion follows from $p^*$ and its identity restriction over $U$. The reverse inclusion follows from step 1.1: the restriction of any $a\in H^n(X')$ is the restriction of $p_!a\in H^n(X)$. Any smooth compactification is dominated by an SNC smooth projective one by boundary principalization. The two images are therefore equal, proving the last assertion without requiring the original boundary to be SNC. [step 1.1, given, algebra] ∎