---
id: def-serre-filtration-of-the-total-space-over-base-skeleta
kind: definition
title: Serre filtration over the base skeleta
status: draft
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-filtered-chain-complex, def-singular-cochain-complex-with-coefficients, def-cw-complex-with-closure-finiteness-and-weak-topology, lem-compact-cw-images-have-finite-cell-support-without-choice]
proof_strategy: definition
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Hatcher, Algebraic Topology, proof of Theorem 5.3"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch5.pdf"
      locator: "§5.1, printed pp. 526–528"
---

## Definition

Let $p:E\to B$ be a continuous map to a CW complex with skeleta $B^a$. Put $B^a=\varnothing$ for $a<0$ and
$$E_a=p^{-1}(B^a).$$
For a commutative ring $R$, the **homological Serre filtration** on singular chains is the increasing filtration
$$F_aC_n(E;R)=\operatorname{im}\bigl(C_n(E_a;R)\to C_n(E;R)\bigr)=C_n(E_a;R),\qquad F_{-1}C_n=0.$$
The last equality identifies a singular simplex in the subspace with the same simplex in $E$. Since faces remain in the same preimage, $\partial F_aC_n\subseteq F_aC_{n-1}$.

This filtration is exhaustive one chain at a time. Indeed, the projection to $B$ of each singular simplex has compact domain, so [[lem-compact-cw-images-have-finite-cell-support-without-choice]] places its image in a finite subcomplex and hence in some skeleton. A finite chain has one maximum of its finitely many resulting dimensions. There is generally no uniform bound depending only on $n$: an $n$-simplex can map into cells of arbitrarily high dimension. Thus this definition does **not** assert that $F_nC_n=C_n$ or that the chain filtration is degreewise finite.

The induced increasing filtration on homology is
$$F_aH_n(E;R)=\operatorname{im}\bigl(H_n(E_a;R)\to H_n(E;R)\bigr).$$
If $\widetilde E^r_{a,n}$ denotes the singly graded filtered-complex indexing,
write
$$E^r_{a,b}=\widetilde E^r_{a,a+b},\qquad d_r:E^r_{a,b}\to E^r_{a-r,b+r-1}.$$

The **cohomological Serre filtration** is the decreasing annihilator filtration
$$F^aC^n(E;R)=\ker\bigl(C^n(E;R)\to C^n(E_{a-1};R)\bigr).$$
Thus $F^0C^n=C^n$, and $\delta F^aC^n\subseteq F^aC^{n+1}$. Its reindexed differential convention is
$$d_r:E_r^{a,b}\to E_r^{a+r,b-r+1}.$$
These conventions include $E=\varnothing$, the zero ring, $a=0$, and zero chains/cochains. The compact-support statement is applied separately to each specified simplex, so no choice principle is used.
