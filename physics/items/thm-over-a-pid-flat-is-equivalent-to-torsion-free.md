---
id: thm-over-a-pid-flat-is-equivalent-to-torsion-free
title: "Over a principal ideal domain flatness is equivalent to torsion-freeness"
kind: theorem
status: published
origin: pipeline
deps: [def-principal-ideal-domain, def-annihilator-and-torsion-of-a-module, def-left-and-right-flat-modules-over-an-arbitrary-ring, thm-flatness-criteria-by-injections-and-ideals, thm-unit-isomorphisms-for-module-tensor-products, prop-functoriality-of-module-tensor-products]
proof_strategy: direct
sources:
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
---

## Statement

Over a principal ideal domain $R$, an $R$-module is flat if and only if it is torsion-free.

## Facts & Assumptions

**Given:** a PID $R$ and an $R$-module $M$.

[L1] Every ideal of the integral domain $R$ is principal ([[def-principal-ideal-domain]]). Torsion-freeness means $rm=0$ and $r\ne0$ imply $m=0$ ([[def-annihilator-and-torsion-of-a-module]]).

[L2] Over a commutative ring, flatness is equivalent both to preserving injections under tensoring and to injectivity of $I\otimes_R M\to M$, $a\otimes m\mapsto am$, for every ideal $I$ ([[thm-flatness-criteria-by-injections-and-ideals]]). This agrees with [[def-left-and-right-flat-modules-over-an-arbitrary-ring]].

[L3] The isomorphism $R\otimes_R M\cong M$ sends $a\otimes m$ to $am$ ([[thm-unit-isomorphisms-for-module-tensor-products]]). Tensoring homomorphisms preserves identities and compositions, hence isomorphisms ([[prop-functoriality-of-module-tensor-products]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $M$ is flat and $0\ne r\in R$. Since $R$ is a domain, multiplication by $r$ is an injection $R\to R$. By [L2], tensoring with $M$ preserves this injection. Under [L3] the resulting map is multiplication by $r$ on $M$, so $rm=0$ implies $m=0$. Thus $M$ is torsion-free. [given, L1, L2, L3]

1.2 Conversely, suppose $M$ is torsion-free and fix an ideal $I$. If $I=0$, then $I\otimes_R M=0$, so its map to $M$ is injective. If $I\ne0$, choose a generator $r\ne0$ using [L1]. The map $f:R\to I$, $a\mapsto ar$, is bijective by principality and cancellation in the domain, and its inverse is $R$-linear. [given, L1]

2.1 By [L3], $f\otimes1$ identifies $R\otimes_R M$ with $I\otimes_R M$. The composite with the ideal multiplication map sends $a\otimes m$ to $arm$, so under $R\otimes_R M\cong M$ it is multiplication by $r$. This is injective by torsion-freeness. Since $f\otimes1$ is an isomorphism, the ideal multiplication map is injective. [step 1.2, L1, L3]

3.1 The ideal test [L2] now proves $M$ flat. Only one generator of one fixed ideal was chosen at a time; no choice function on all ideals, and no AC, is used. The zero module is included in both directions. [step 1.1, step 1.2, step 2.1, L2] ∎
