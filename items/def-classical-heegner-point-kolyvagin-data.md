---
id: def-classical-heegner-point-kolyvagin-data
kind: definition
title: "Classical Heegner-Point Kolyvagin Data"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 27
deps:
  - def-core-rank-and-stark-system
  - def-kolyvagin-derivative-operator
  - def-kolyvagin-system-for-a-selmer-triple
  - def-p-primary-selmer-groups-for-an-elliptic-curve
  - def-selmer-structure-for-a-galois-representation
  - thm-number-field-ray-class-field-artin-isomorphism
  - thm-ring-class-group-is-ray-class-group-quotient-by-scalar-residues
  - thm-ring-class-reciprocity-on-cm-singular-moduli
  - thm-singular-modulus-generates-the-ring-class-field
justified_by: []
proof_strategy: direct
axiom_use: >-
  The class-field and complex multiplication inputs carry AC, CC, and DC as
  declared by their suppliers. The finite products and group-ring operators
  require no additional choice.
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Benjamin Howard, The Heegner Point Kolyvagin System"
      url: "https://arxiv.org/pdf/1202.6340"
      locator: "§1.7, printed pp. 19–21: CM points, ring class fields, Heegner points, and derived classes."
    - title: "D. A. Cox, Primes of the Form x² + ny², 2nd ed."
      url: "https://www.math.utoronto.ca/~ila/Cox-Primes_of_the_form_x2%2Bny2.pdf"
      locator: "Chapter 11 §§11B–11C: ring class fields and CM reciprocity."
verification: {}
---

## Definition

Assume AC, CC, and DC. Let $E/\mathbb Q$ be an elliptic curve of conductor $N$, meaning a smooth projective geometrically connected genus-one curve with a specified rational point, let $K$ be an imaginary quadratic field of discriminant $D_K\ne-3,-4$ with $p\nmid ND_K$, and let $p$ be an odd prime. Require every prime dividing $N$ to split in $K$, choose an integral ideal $\mathfrak a\subset\mathcal O_K$ with $\mathcal O_K/\mathfrak a\cong\mathbb Z/N\mathbb Z$, and fix an embedding $K\hookrightarrow\mathbb C$. Write $X_0(N)$ for the smooth projective modular curve parametrizing cyclic $N$-isogenies of elliptic curves and $J_0(N)=\operatorname{Pic}^0(X_0(N))$ for its Jacobian; fix a nonconstant morphism $J_0(N)\to E$ over $\mathbb Q$. Put $T=T_p(E)$ and $A=E[p^\infty]$. For each conductor $m$ coprime to $ND_K$, let $\mathcal O_m=\mathbb Z+m\mathcal O_K$, let $K[m]$ be its ring class field, and let $h_m\in X_0(N)(K[m])$ be the CM point represented by the cyclic $N$-isogeny
$$\mathbb C/\mathcal O_m\longrightarrow\mathbb C/(\mathcal O_m\cap\mathfrak a)^{-1}.$$
Let $P[m]\in E(K[m])$ be its image under the modular parametrization. A **classical Heegner-point Kolyvagin datum** also specifies a Selmer triple for $(T,\mathcal F)$ and a set $\mathcal L$ of rational primes $\ell$ inert in $K$, with $\ell\nmid NpD_K$, for which $\operatorname{Gal}(K[n\ell]/K[n])$ is cyclic of order $\ell+1$. For $\ell\in\mathcal L$, put $a_\ell=\operatorname{tr}(\operatorname{Frob}_\ell\mid T)$ and $I_\ell=(a_\ell,\ell+1)\subseteq\mathbb Z_p$, and require $T/I_\ell T$ to be free of rank one over $\mathbb Z_p/I_\ell$. For every squarefree product $n$ of primes in $\mathcal L$, put $K[n]$ for the corresponding ring class field and $D_n=\prod_{\ell\mid n}D_\ell$. The points are required to satisfy the norm relations $\operatorname{Norm}_{K[n\ell]/K[n]}P[n\ell]=a_\ell P[n]$ and Howard's reduction congruence (13) in §1.7 for every prime of $K[n\ell]$ above $\ell$. The datum also includes the derived Kummer classes obtained from $D_nP[n]$; it is **admissible** when those classes lie in the Selmer stalks $S(n)$ and satisfy the local finite-to-singular edge relations of a Kolyvagin system. This definition asserts no existence of such a datum for every $(E,K,p)$.

## Definition references

[[def-kolyvagin-derivative-operator]]

[[def-p-primary-selmer-groups-for-an-elliptic-curve]]

[[def-selmer-structure-for-a-galois-representation]]

[[def-core-rank-and-stark-system]]

[[def-kolyvagin-system-for-a-selmer-triple]]

[[thm-number-field-ray-class-field-artin-isomorphism]]

[[thm-ring-class-group-is-ray-class-group-quotient-by-scalar-residues]]

[[thm-ring-class-reciprocity-on-cm-singular-moduli]]

[[thm-singular-modulus-generates-the-ring-class-field]]

[Howard, *The Heegner Point Kolyvagin System*, §1.7](https://arxiv.org/pdf/1202.6340)

[Cox, *Primes of the Form x² + ny²*, Chapter 11](https://www.math.utoronto.ca/~ila/Cox-Primes_of_the_form_x2%2Bny2.pdf)

## Facts & Assumptions

**Given:** The number field and modular parametrization data, ring class fields and reciprocity maps, CM points, the Selmer triple, auxiliary ideals, Heegner norm/reduction relations, and finite-to-singular maps listed in the Definition.

[F1] [[def-kolyvagin-derivative-operator]]: for a squarefree product $n$, $D_n$ is the product of the commuting group-ring derivatives $D_\ell$.

[F2] [[def-kolyvagin-system-for-a-selmer-triple]]: a Kolyvagin system is a family in the Selmer stalks that satisfies the edge compatibility equations.

[A1] The ring-class fields, CM points, congruences, and Selmer edge conditions are required data; no universal construction theorem is included in this definition.

## Verification

1.1 Each $D_n$ is a finite product of group-ring elements, so it acts on the specified Heegner point in the group ring of its finite ring-class Galois group. The stipulated Kummer maps therefore produce the derived classes as elements of the stated cohomology modules. [given, F1, A1, construct]

2.1 Admissibility requires each derived class to lie in its Selmer stalk and to satisfy every specified edge equation. By [F2] those equations are exactly the defining condition for a Kolyvagin system, so the admissible datum supplies the claimed system without asserting arithmetic existence beyond its hypotheses. [given, F2, step 1.1, A1, algebra] ∎
