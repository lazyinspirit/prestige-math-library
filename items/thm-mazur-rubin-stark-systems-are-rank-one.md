---
id: thm-mazur-rubin-stark-systems-are-rank-one
kind: theorem
title: "Stark Systems Form a Free Rank-One Module"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 29
deps:
  - def-core-rank-and-stark-system
  - thm-poitou-tate-exact-sequence-for-finite-modules
  - lem-artinian-exterior-contraction-image-by-kernel-length
justified_by: []
proof_strategy: direct
axiom_use: Poitou–Tate is invoked only conditionally under AC, Countable Choice and DC; the unqualified scope remains unresolved.
provenance:
  statement: literature-derived
  proof: conditional-with-explicit-gaps
sources:
  references:
    - title: "Barry Mazur and Karl Rubin, Kolyvagin Systems"
      url: "https://arxiv.org/pdf/1312.4052"
      locator: "§4 hypotheses H.1–H.7 and §6 Theorem 6.10, printed pp. 9–15."
verification: {}
---

## Statement

Let $R$ be a principal artinian local ring, let $(T,\mathcal F,P,r)$ be the Selmer datum and rank-$r$ Stark-system module defined for this setting, and suppose hypotheses H.1–H.7 of Mazur and Rubin hold: the residual primal and dual invariants vanish and the residual representation is absolutely irreducible; an element $\tau$ and a finite Galois extension provide auxiliary primes for which $T/(\tau-1)T$ is free of rank one; the two residual $H^1$ groups in the Selmer extension vanish; either the residual representation is not self-dual or $p>3$; the local conditions are cartesian; $r$ is the positive core rank; and each selected auxiliary ideal $I_q$ is zero. Then the module $\operatorname{SS}_r(T)$ of rank-$r$ Stark systems is free of rank one over $R$, and for every squarefree auxiliary product $n$, the image of the projection $\operatorname{SS}_r(T)\to Y_n$ is the stub submodule $Y'_n$ defined by the length of the dual Selmer group with transverse conditions.

## Statement references

[Mazur–Rubin, *Kolyvagin Systems*, §6 Theorem 6.10](https://arxiv.org/pdf/1312.4052)

## Facts & Assumptions

**Given:** The Selmer datum and H.1–H.7 in the Statement, with $I_q=0$ for every selected auxiliary prime.

[A1] The available Poitou–Tate theorem assumes AC, Countable Choice and DC; the present public Statement does not explicitly assume them. Its use here remains conditional on resolving this scope difference. [[thm-poitou-tate-exact-sequence-for-finite-modules]]

[F1] Over a principal Artinian local ring, the actual exterior contraction from a free module has image the maximal-ideal power determined by the length of its kernel. [[lem-artinian-exterior-contraction-image-by-kernel-length]]

[A2] The following arithmetic and structural assertions remain to be proved for this actual Selmer datum: there exists a squarefree auxiliary product $d$ with zero dual transverse Selmer group, and this vanishing persists after adjoining auxiliary primes; for such a vertex $n$ the primal module in $Y_n$ is free of rank $r+\nu(n)$; for every $m\mid n$, the localization map to the transverse modules at $n/m$ fits the actual Selmer groups into the kernel diagram required by [F1], the actual Stark transition is its contraction with the canonical determinant factors, and its kernel $M$ satisfies $\operatorname{length}_R(M)-(r+\nu(m))\operatorname{length}_R(R)=\operatorname{length}_R H^1_{(\mathcal F^\vee)_m}(K,T^\vee)$. The identification $Y_{m,n}=Y_m$ and identity reduction map for $I_m=I_n=0$ must also follow from the actual transition definitions. These arithmetic and structural assertions are not assumed by the public Statement and are not supplied by Poitou–Tate alone.

## Proof

**Proof status:** The following proves the exterior transition image and inverse-system deduction conditionally on [A2]. The arithmetic assertions in [A2] and the unqualified choice scope in [A1] remain open; the Statement is not yet proved.

1.1 Since every auxiliary ideal is zero, $I_n=0$ for every auxiliary product $n$, including $n=1$. Under the exact reduction-map identification still required in [A2], a Stark system is therefore a compatible family in the inverse system of the actual maps $\Psi_{n,m}:Y_n\to Y_m$. [A2, given, algebra]

2.1 For a vertex $n$ with vanishing dual Selmer group and a divisor $m$, the free primal module, localization kernel and determinant factors in [A2] put the actual Stark transition in the situation of [F1]. The length identity in [A2] makes the exponent in [F1] exactly the dual-Selmer length defining $Y'_m$. Hence the transition image is $Y'_m$. This conclusion is conditional on the structural and arithmetic identifications in [A2]. [F1, A2, step 1.1, algebra]

3.1 Choose $d$ as in [A2], and restrict the system to auxiliary products divisible by $d$. This subsystem is cofinal because $\operatorname{lcm}(d,m)$ is an auxiliary product for every $m$. For $m\mid n$ in the subsystem, the dual group vanishes at both vertices by [A2], so $Y_n$ and $Y_m$ are free of rank one and the image of $\Psi_{n,m}$ is $Y'_m=Y_m$ by step 2.1. A surjective endomorphism between two free rank-one modules over the artinian local ring $R$ is an isomorphism: after choosing bases it is multiplication by a unit. Thus every transition in this cofinal subsystem is an isomorphism. [A2, step 1.1, step 2.1, given, choose, construct, algebra]

4.1 Any element of $Y_d$ determines a unique compatible family on the cofinal subsystem by pulling it back through these isomorphisms; compatibility follows from the transition composition law. For an arbitrary vertex $m$, choose an $n$ divisible by $d$ and $m$, and define the $m$-coordinate as the transition image of the already constructed $n$-coordinate. This definition is independent of $n$: any two choices divide their least common multiple, and the composition law applies there. Hence projection to $Y_d$ is an isomorphism from the full inverse limit to the free rank-one module $Y_d$. [A2, step 1.1, step 3.1, choose, construct, algebra]

5.1 For a fixed $m$, choose $n$ divisible by both $d$ and $m$. Step 3.1 makes projection of the inverse limit onto $Y_n$ an isomorphism, and the transition image to $Y_m$ is $Y'_m$ by step 2.1. Thus the claimed projection image and rank-one conclusion follow from [A2]. This is a conditional reduction only; it does not establish the missing arithmetic and choice hypotheses. [A1, A2, step 2.1, step 3.1, step 4.1, choose, algebra] ∎

## Unresolved prerequisites

- Prove the actual auxiliary-prime dual-Selmer vanishing and the localization-kernel, Selmer-length and determinant-factor identifications stated in [A2].
- Resolve the choice-scope difference in [A1] without altering the unqualified public Statement.
