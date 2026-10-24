---
id: def-continuous-galois-character-module
kind: definition
title: "Continuous Galois character modules"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "historical complete Step5 reader; item def-continuous-galois-character-module; evidence research/frontier-38-owner-30-reader-25.md, research/frontier-38-owner-30-reader-findings-25.json. Original reports retain their scope and source limitations; no recursive audit of all published prerequisites or complete bibliography is claimed. Restored from completed 2026-10-03 evidence; no new audit performed."
    delegated_by: "tools/autopilot frontier-38-owner-30 historical dispatched reader/repair lane"
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups, corrected 2022 edition"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
    - title: "SGA 3, Expose VIII, section 1, Polo\u2013Gille edition"
      url: https://webusers.imj-prg.fr/~patrick.polo/SGA3/Exp8-8nov09.pdf
    - title: "SGA 3, Expose X, section 1, Polo\u2013Gille edition"
      url: https://webusers.imj-prg.fr/~patrick.polo/SGA3/Expo10-8nov09.pdf
deps: ["def-axiom-of-choice", "lem-multiplicative-type-groups-split-separably"]
---

## Definition

Fix a separable closure $k_s/k$ and $\Gamma_k=\operatorname{Gal}(k_s/k)$ with its Krull topology. A continuous Galois character module is a finitely generated abelian group $M$ with a $\Gamma_k$-action by group automorphisms, continuous for the discrete topology on $M$. Equivalently every $m$ has an open stabilizer. Module morphisms are equivariant group homomorphisms.

For a multiplicative-type group $G$, set $X^*(G)=\operatorname{Hom}_{k_s\text{-groups}}(G_{k_s},\mathbf G_{m,k_s})$. The action is transport of structure: on a group-like coordinate function $a$, it is the canonical semilinear action on $\mathcal O(G)\otimes k_s$. On points this reads $(\sigma\chi)(g)=\sigma(\chi(\sigma^{-1}g))$. Assuming [[def-axiom-of-choice|the Axiom of Choice]], the separable splitting in [[lem-multiplicative-type-groups-split-separably]] permits using the full character group over $k_s$ even when $G$ is nonsmooth.
