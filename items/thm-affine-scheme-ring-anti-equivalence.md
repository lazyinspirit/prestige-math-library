---
id: thm-affine-scheme-ring-anti-equivalence
kind: theorem
title: "Affine schemes are contravariantly equivalent to commutative rings"
status: published
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-affine-scheme, def-morphism-affine-schemes-from-ring-map, lem-spectrum-map-stalk-homomorphisms-local, thm-global-sections-affine-scheme, thm-sections-basic-open-affine-scheme]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}
sources:
  references:
    - title: "The Stacks Project, Lemmas 26.6.4 and 26.6.5"
      url: "https://stacks.math.columbia.edu/tag/01HX"
---
## Statement

For commutative unital rings $A,B$, the assignment $\varphi\mapsto
\operatorname{Spec}(\varphi)$ gives a natural bijection
$$ \operatorname{Hom}_{\rm CRing}(A,B)\cong \operatorname{Hom}_{\rm LRS}(\operatorname{Spec}B,\operatorname{Spec}A). $$
Consequently $A\mapsto\operatorname{Spec}A$ is a contravariant equivalence
from commutative rings to affine schemes, with quasi-inverse global sections.

## Facts & Assumptions

**Given:** Commutative unital rings $A,B$ and a morphism $u:\operatorname{Spec}B\to\operatorname{Spec}A$.

[F1] Global sections of an affine spectrum recover its ring ([[thm-global-sections-affine-scheme]]).

[F2] A ring map gives a morphism of affine spectra
([[def-morphism-affine-schemes-from-ring-map]]), and its stalk maps are local
([[lem-spectrum-map-stalk-homomorphisms-local]]).

## Proof

**Proof technique:** direct.

1.1 By [F2], every ring map $A\to B$ induces a locally ringed-space morphism $\operatorname{Spec}B\to\operatorname{Spec}A$. [F2]

1.2 A morphism $u$ gives a global-sections map $u^\sharp:A\to B$ using [F1]. [F1]

2.1 Locality determines its point map by contraction and localization determines each basic-open section map, so $u=\operatorname{Spec}(u^\sharp)$. [step 1.2, algebra]

3.1 The constructions of steps 1.1--2.1 are inverse and natural; global sections is the quasi-inverse. [step 1.1, step 2.1] ∎
 
