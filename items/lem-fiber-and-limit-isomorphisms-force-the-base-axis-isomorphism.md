---
id: lem-fiber-and-limit-isomorphisms-force-the-base-axis-isomorphism
kind: lemma
title: "Fiber and limit isomorphisms force a base-axis isomorphism"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - def-cohomological-spectral-sequence
  - def-morphism-of-spectral-sequences
  - def-r-page-of-the-spectral-sequence-of-a-filtered-complex
  - def-strong-convergence-of-a-spectral-sequence
dependency_level: 0
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Spectral Sequences in Algebraic Topology, Chapter 1"
      url: "https://pi.math.cornell.edu/~hatcher/SSAT/SSch1.pdf"
      locator: "Theorem 1.36 and proof, printed pp. 56–58: fiber-axis and limiting isomorphisms imply the base-axis isomorphism."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $\Phi:\bar E\to E$ be a morphism of first-quadrant cohomological spectral sequences of vector spaces, with $d_r$ of bidegree $(r,1-r)$ and

$$\bar E_2^{p,q}=\bar E_2^{p,0}\otimes\bar E_2^{0,q},\qquad E_2^{p,q}=E_2^{p,0}\otimes E_2^{0,q}.$$

Assume $\Phi_2$ factors as the tensor product of its axis maps, the fiber-axis map is an isomorphism, and $\Phi_\infty$ is an isomorphism in every position. Then the base-axis map $\Phi_2^{p,0}$ is an isomorphism in every degree.

## Facts & Assumptions

**Given:** A morphism $\Phi:\bar E\to E$ of first-quadrant cohomological spectral sequences of vector spaces over a field, with $d_r$ of bidegree $(r,1-r)$; tensor-factorized second pages $\bar E_2^{p,q}=\bar E_2^{p,0}\otimes\bar E_2^{0,q}$ and $E_2^{p,q}=E_2^{p,0}\otimes E_2^{0,q}$; $\Phi_2$ factoring as the tensor product of its axis maps; the fiber-axis map $\Phi_2^{0,q}$ an isomorphism; and $\Phi_\infty$ an isomorphism in every position.

[F1] A morphism of spectral sequences commutes with the differentials and their induced homology maps. Successive cohomological pages satisfy $E_{r+1}=H(E_r,d_r)$, where $d_r$ has bidegree $(r,1-r)$ ([[def-morphism-of-spectral-sequences]], [[def-cohomological-spectral-sequence]]). Writing $Z_r^{p,q}=\ker d_r$ and $B_r^{p,q}=\operatorname{im}d_r$, the valid short exact sequences are $0\to B_r^{p,q}\to Z_r^{p,q}\to E_{r+1}^{p,q}\to0$ and $0\to Z_r^{p,q}\to E_r^{p,q}\to B_r^{p+r,q-r+1}\to0$.

[F2] In a strongly convergent first-quadrant spectral sequence the stationary page identifies with the associated graded of the abutment ([[def-strong-convergence-of-a-spectral-sequence]]). First-quadrant bidegrees alone give stationarity; the assumed $\Phi_\infty$ isomorphism identifies these stationary pages positionwise, without additional abutment data.

## Proof

**Proof technique:** direct.

1.1 Induct on $k$, assuming the base-axis maps are isomorphisms through column $k$. Column zero starts this induction. The tensor condition implies isomorphism on all $E_2^{p,q}$ with $p\le k$. [given, F1]

2.1 Induction on $r\ge2$ gives simultaneously: $$(A_r)\quad\Phi_r^{p,q}\text{ is an isomorphism if }p\le k-r+1, \qquad (B_r)\quad\Phi_r^{p,q}\text{ is injective if }p\le k.$$ For $r=2$ these follow from the preceding $E_2$ isomorphisms. Write $Z_r=\ker d_r$ and $B_r=\operatorname{im}d_r$, distinguishing the boundary group $B_r$ from the assertion $(B_r)$ by context. If $p\le k-r$, the domain map is an isomorphism and the outgoing-target map in column $p+r\le k$ is injective, so the map on cycles $Z_r^{p,q}$ is an isomorphism. If $p\le k-r+1$, both the domain and incoming-source maps are isomorphisms by $(A_r)$, so the maps on boundary groups and on the quotients by those boundaries are isomorphisms. Quotienting cycles by boundaries gives $(A_{r+1})$. For $p\le k$, the cycle map is injective by $(B_r)$, and the incoming-source map is surjective since $p-r\le k-r+1$. Thus every target boundary in the image of a source cycle lifts to a source boundary; the map on cycle/boundary quotients is injective. This gives $(B_{r+1})$. [step 1.1, F1, algebra]

3.1 Now consider the unknown bottom position $(k+1,0)$. It has no outgoing differential, and for each $r$ there is an exact sequence $$Z_r^{k-r+1,r-1}\longrightarrow E_r^{k-r+1,r-1} \xrightarrow{d_r}E_r^{k+1,0} \longrightarrow E_{r+1}^{k+1,0}\longrightarrow0.$$ The second term is mapped isomorphically by $(A_r)$. We claim the cycle term is mapped surjectively. Put $(u,v)=(k-r+1,r-1)$. For $s\ge r$, use $$E_s^{u-s,v+s-1}\longrightarrow Z_s^{u,v} \longrightarrow E_{s+1}^{u,v}\longrightarrow0.$$ Here the first map is the incoming differential restricted to cycles; this is exact because $d_s^2=0$. The map on the first term is an isomorphism by $(A_s)$, since $u-s=k-r-s+1\le k-s+1$. At all pages later than $s$, outgoing differentials from $(u,v)$ have negative fiber target, so $E_{s+1}^{u,v}=Z_{s+1}^{u,v}$. Start from stationarity, where its map is an isomorphism by the assumed limiting isomorphism, and descend on $s$; lifting an element of the third term and correcting by an element of the first proves surjectivity on $Z_s^{u,v}$, including $s=r$. The first quadrant gives a finite stationarity bound at every position, so this is finite downward induction. [step 2.1, F2, algebra]

4.1 Finally the bottom position itself is stationary for $r>k+1$. Starting from its limiting isomorphism, descend on $r$ in the displayed five-term exact sequence. Surjectivity on the first term and isomorphisms on the second and fourth show the third map is an isomorphism: for surjectivity lift its quotient in the fourth term and correct the difference by the second; for injectivity first lift a kernel element to the second, then lift its image in the first and subtract, using injectivity of the second. Thus $\Phi_2^{k+1,0}$ is an isomorphism. Induction on $k$ proves the claim. [step 3.1, step 1.1, F2] ∎
