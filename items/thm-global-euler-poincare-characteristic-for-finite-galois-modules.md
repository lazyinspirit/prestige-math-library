---
id: thm-global-euler-poincare-characteristic-for-finite-galois-modules
kind: theorem
title: Global Euler–Poincaré characteristic for finite Galois modules
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 35
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
  - thm-poitou-tate-exact-sequence-for-finite-modules
  - lem-finite-s-high-cohomology-is-archimedean
  - lem-global-euler-characteristic-for-prime-to-p-split-module
  - lem-modular-cyclic-prime-to-p-induction
  - thm-continuous-lyndon-hochschild-serre-spectral-sequence
  - lem-finite-module-profinite-ext-colimits-and-products
  - thm-local-finite-module-tate-duality-in-characteristic-zero
proof_strategy: direct
axiom_use: AC, Countable Choice and DC are inherited from the finite-module Poitou–Tate, local cohomology and modular induction interfaces.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: J. S. Milne, Arithmetic Duality Theorems
      url: https://www.jmilne.org/math/Books/ADTnot.pdf
      locator: I Theorem 5.1, printed pp.67–70; the equivariant S-unit and prime-to-p induction proof below avoids cancellation of the regular representation.
verification: {}
---

## Statement

Assume AC, Countable Choice and DC, and the finite-module Poitou–Tate theorem in its stated scope. Let $K$ be a number field, let $M$ be a finite continuous $G_K$-module, and let $S$ be a finite set of places containing all archimedean places, every place where $M$ is ramified, and every finite place whose residue characteristic divides $|M|$. Put $G=G_{K,S}$. The groups $H^i(G,M)$ for $i=0,1,2$ are finite, and
$$\frac{|H^0(G,M)|\,|H^2(G,M)|}{|H^1(G,M)|}=\prod_{v\mid\infty}\frac{|H^0(K_v,M)|}{|M|^{[K_v:\mathbb R]}}.$$
Here $H^0(K_v,M)$ is ordinary invariant cohomology, including at real and complex places. In particular, if $M$ is an $\mathbb F_p$-vector space, the logarithm base $p$ gives the corresponding dimension formula. No assertion about infinite $S$ is made.

## Facts & Assumptions

**Given:** The number field, finite module, finite set of places, choices and assumed Poitou–Tate theorem in the Statement.

[A1] AC, Countable Choice and DC are assumed. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

[F1] Finite-module Poitou–Tate supplies the exact sequence and finite localization kernels; local cohomology of finite modules at finite number-field places is finite. [[thm-poitou-tate-exact-sequence-for-finite-modules]] [[thm-local-finite-module-tate-duality-in-characteristic-zero]]

[F2] For finite $S$, global localization in degrees $r\ge3$ is naturally an isomorphism onto the direct sum of the real local cohomology groups. [[lem-finite-s-high-cohomology-is-archimedean]]

[F3] The Euler dimension formula holds for every module split by a totally imaginary finite Galois extension containing $\mu_p$ whose group order is prime to $p$. [[lem-global-euler-characteristic-for-prime-to-p-split-module]]

[F4] A positive integral multiple of every finite-dimensional $\mathbb F_p[G]$-module class is an integral combination of induced restrictions from cyclic subgroups of order prime to $p$. [[lem-modular-cyclic-prime-to-p-induction]]

[F5] Continuous cohomology satisfies the Hochschild–Serre and finite-index coinduction/Shapiro identifications. [[thm-continuous-lyndon-hochschild-serre-spectral-sequence]] [[lem-finite-module-profinite-ext-colimits-and-products]]

## Proof

**Proof technique:** use high-degree real localization to make the Euler defect additive, then reduce it by modular induction to the proved prime-to-$p$ splitting case.

1.1 The groups in degrees zero through two are finite. Indeed [F1] gives finite first and second localization kernels, while the finite set $S$ and the local finite-cohomology statement in [F1] make the local degree-one and degree-two products finite. The zero module satisfies the formula, so suppose $M\ne0$. [F1, given, algebra]

2.1 First fix a prime $p$ and let $N$ be a finite-dimensional $\mathbb F_p$-module satisfying the same place hypotheses. Define its integer Euler defect $\delta_K(N)=h^0(N)-h^1(N)+h^2(N)-\sum_{v\mid\infty}h^0_v(N)+[K:\mathbb Q]\dim N$, with $h$ denoting the appropriate dimensions. For a short exact sequence $0\to N'\to N\to N''\to0$, let $C$ be the kernel of $H^3(G,N')\to H^3(G,N)$. Truncating the exact cohomology sequence at $C$ gives $\chi(N')-\chi(N)+\chi(N'')=\dim C$. By [F2], $C$ is the direct sum over real places of the kernels in local degree three. The standard two-periodic resolution for the group of order two identifies each such kernel with the kernel in degree one. Exactness of the local invariants sequence shows that their dimensions sum to $\sum_{v\mid\infty}(h^0_v(N')-h^0_v(N)+h^0_v(N''))$; complex local cohomology in degree one is zero. Hence $\delta_K(N')-\delta_K(N)+\delta_K(N'')=0$. This includes $p=2$ without a semisimplicity assumption. [F2, step 1.1, given, construct, algebra]

3.1 Choose a finite Galois extension $L/K$ inside $K_S$ splitting $N$, containing $\mu_p$, and containing $i$ if $p=2$. The cyclotomic extensions are unramified outside places above $p$, so the prescribed set $S$ admits them. Put $Q=\operatorname{Gal}(L/K)$. By step 2.1, $\delta_K$ defines an additive homomorphism on the Grothendieck group of finite $\mathbb F_p[Q]$-modules. Apply [F4]: a positive integer times $[N]$ is an integral combination of classes $[\operatorname{Ind}_{H}^Q\operatorname{Res}_H^Q N]$ with $H$ cyclic of order prime to $p$. [F4, step 2.1, given, choose, construct, algebra]

4.1 Let $H$ be one of those subgroups and $F=L^H$. By finite-index Shapiro [F5], global cohomology of the induced module over $K$ is cohomology of $\operatorname{Res}_H N$ over $F$, with the place set $S_F$ above $S$. The local finite-coset decomposition gives the same identity for the sum of ordinary archimedean invariant dimensions: for each archimedean $v$ of $K$, the invariants of the induced module split over the places $w\mid v$ of $F$. Also $\dim\operatorname{Ind}_H^Q\operatorname{Res}_H N=[F:K]\dim N$. Hence $\delta_K(\operatorname{Ind}_H^Q\operatorname{Res}_H N)=\delta_F(\operatorname{Res}_H N)$. [F5, step 3.1, construct, algebra]

5.1 The field $L$ is totally imaginary: when $p=2$ it contains $i$, and when $p$ is odd it contains a primitive $p$th root of unity. The extension $L/F$ has group $H$ of order prime to $p$, so [F3] gives $\delta_F(\operatorname{Res}_H N)=0$. Steps 3.1–4.1 then make a positive integer multiple of $\delta_K(N)$ zero. Since the defect is an integer, $\delta_K(N)=0$. This proves the formula for every $\mathbb F_p$-module. [F3, step 3.1, step 4.1, algebra]

6.1 A general finite module decomposes as the direct sum of its characteristic primary parts, and each $p$-primary part has the canonical filtration by powers of $p$ with finite $\mathbb F_p$-module quotients. These submodules and quotients are Galois-stable and satisfy the same place hypotheses. Apply the additive defect calculation of step 2.1 to their cohomology exact sequences, using logarithms base $p$ of finite group orders rather than vector-space dimensions; equivalently use the $p$-power filtration in the Grothendieck group of finite $p$-primary modules. Step 5.1 makes every quotient defect zero. Multiplying the primary formulas proves the displayed cardinality identity. The trivial module and $p=2$ are included. [F1, F2, step 2.1, step 5.1, algebra] ∎
