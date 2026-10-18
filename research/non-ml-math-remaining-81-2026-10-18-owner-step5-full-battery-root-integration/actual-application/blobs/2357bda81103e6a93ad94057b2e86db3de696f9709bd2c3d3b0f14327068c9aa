---
id: ex-2vect-cyclic-four-cocycle-cochain-gauge
kind: example
title: A C4 coboundary changes the pentagonator and is gauged away
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - thm-three-cochain-gauge-equivalence-2vect-g
  - def-group
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Décoppet and Yu, Fiber 2-Functors and Tambara-Yamagami Fusion 2-Categories, §2.1
      url: https://arxiv.org/pdf/2306.08117
    - title: Douglas and Reutter, Fusion 2-Categories and a State-Sum Invariant for 4-Manifolds, Construction 2.1.16
      url: https://arxiv.org/pdf/1812.11933
---

## Example

Write $C_4=\mathbb Z/4\mathbb Z$ additively, with elements $0,1,2,3$. Define the normalized 3-cochain
$$\beta(g,h,k)=\begin{cases}-1,&(g,h,k)=(1,1,1),\\1,&\text{otherwise}.\end{cases}$$
Let $\omega=\delta\beta$, with the multiplicative coboundary convention in [[thm-three-cochain-gauge-equivalence-2vect-g]].

## Facts & Assumptions


**Given:** The group $C_4$, the normalized cochain $\beta$, and the group-cochain convention in the A-page gauge theorem.

[F1] [[thm-three-cochain-gauge-equivalence-2vect-g]]: A normalized coboundary changes the pentagonator by a monoidal 2-equivalence; its value is
$$\delta\beta(g,h,k,l)=\beta(h,k,l)\beta(g+h,k,l)^{-1}\beta(g,h+k,l)\beta(g,h,k+l)^{-1}\beta(g,h,k).$$

[F2] [[def-group]]: A group has associative multiplication, identity, and inverses.

## Verification

1.1 The cochain $\beta$ is normalized because it equals $1$ whenever any input is $0$. At $(g,h,k,l)=(1,2,3,1)$ in $C_4$, the five factors in [F1] are respectively $\beta(2,3,1)=1$, $\beta(3,3,1)^{-1}=1$, $\beta(1,1,1)=-1$, $\beta(1,2,0)^{-1}=1$, and $\beta(1,2,3)=1$. Thus $\omega(1,2,3,1)=-1$, so the resulting 4-cochain is not the constant cochain. [F1, F2, given, algebra]

2.1 If $g=0$, the first two factors in $\delta\beta$ are equal with opposite exponents and the remaining three have an input $0$, so all remaining normalized values are $1$. If $h=0$, the second and third factors cancel and the other factors are normalized; if $k=0$, the third and fourth factors cancel and the other factors are normalized; if $l=0$, the fourth and fifth factors cancel and the other factors are normalized. Thus $\omega=\delta\beta$ is normalized. Applying the degree-four coboundary to this expression gives a product of the 30 composites $d_jd_i\beta$ from the six degree-four faces and five degree-three faces. For each $0\le i<j\le5$, the simplicial face identity $d_jd_i=d_id_{j-1}$ pairs two occurrences with opposite exponents; the interior face identities use associativity in $C_4$, and the endpoint identities delete the same first or last entry. All 15 pairs cancel, so $\delta\omega=1$ and $\omega$ is a 4-cocycle. [F1, step 1.1, algebra]

3.1 Theorem [F1] applies to $\omega$ and $\omega'=1$ with cochain $\beta^{-1}$ (whose coboundary is $\omega^{-1}$), and gives a monoidal 2-equivalence $2\mathrm{Vect}^{\omega}_{C_4}\simeq2\mathrm{Vect}_{C_4}$. The example checks a nonconstant representative and its coherent untwisting; it does not assert a nonzero class in $H^4(C_4;\mathbb C^\times)$. [F1, step 2.1, algebra] ∎
