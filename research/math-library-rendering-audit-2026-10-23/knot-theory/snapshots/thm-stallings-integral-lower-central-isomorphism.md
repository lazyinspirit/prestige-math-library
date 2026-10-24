---
id: thm-stallings-integral-lower-central-isomorphism
kind: theorem
title: "Integral Stallings theorem for finite lower-central quotients"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - thm-five-term-homology-sequence-for-group-extensions
  - lem-diagonal-bar-coinvariants-compute-group-homology
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "John McCleary, Nontrivial fundamental groups, §8bis.2"
      url: "https://pages.vassar.edu/mccleary/files/2011/04/MC08bis.fin_.pdf"
      locator: "Theorem 8bis.16 and proof, PDF p. 15"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Assume AC. Let $\phi:A\to B$ be a group homomorphism inducing an isomorphism
$H_1(A;\mathbb Z)\to H_1(B;\mathbb Z)$ and an epimorphism
$H_2(A;\mathbb Z)\to H_2(B;\mathbb Z)$. For a group $X$, define
$\Gamma_1X=X$ and $\Gamma_{n+1}X=[X,\Gamma_nX]$. Then for every finite
$n\ge1$, the induced homomorphism
$$A/\Gamma_nA\longrightarrow B/\Gamma_nB$$
is an isomorphism.

## Statement references

[McCleary, Theorem 8bis.16](https://pages.vassar.edu/mccleary/files/2011/04/MC08bis.fin_.pdf)

[Cochran and Harvey, Introduction](https://citeseerx.ist.psu.edu/document?doi=0bcc9546b436e84c2099f89be24699e31bf14276&repid=rep1&type=pdf)

## Facts & Assumptions

**Given:** AC and a group homomorphism $\phi:A\to B$ satisfying the stated
$H_1$ and $H_2$ hypotheses.

[A1] Full AC, written AC, is [[def-axiom-of-choice]]; it is inherited from the
group-extension homology sequence supplier.

[F1] For every group extension $1\to N\to G\to Q\to1$, the exact sequence
$H_2(G)\to H_2(Q)\to N/[G,N]\to H_1(G)\to H_1(Q)\to0$ is natural in maps of
extensions, including its transgression (the supplier proves this naturality using maps of classifying-space fibrations). [[thm-five-term-homology-sequence-for-group-extensions]]

[L1] AC implies DC by choosing one successor at each stage of a serial relation. [[def-dependent-choice]]

[F2] Under DC with supplied projective-resolution data, the bar complex computes group homology. In the bar complex, degree one has generators $[x]$ and degree-two boundaries $[y]-[xy]+[x]$, so $H_1(X;\mathbb Z)\cong X/[X,X]$. [[lem-diagonal-bar-coinvariants-compute-group-homology]]

## Proof

**Given:** The group map and hypotheses above.

1.1 Supply the resolution convention for [F2] by taking, for every module over each relevant group ring, the free module on its underlying set, augmented $[m]\mapsto m$, and repeating this construction on successive kernels. These surjections give an exact free resolution. By [A1] and [L1], DC also holds. The case $n=1$ is the map between two trivial quotients. For $n=2$, the bar degree-one calculation in [F2] identifies $A/\Gamma_2A\to B/\Gamma_2B$ with the assumed isomorphism on $H_1$. These are the base cases. [A1, L1, F2, given, construct]

1.2 Fix $n\ge2$ and assume $A/\Gamma_nA\to B/\Gamma_nB$ is an isomorphism. Apply [F1] to the extensions $1\to\Gamma_nA\to A\to A/\Gamma_nA\to1$ and $1\to\Gamma_nB\to B\to B/\Gamma_nB\to1$. Since $\Gamma_nX\subseteq[X,X]$ for $n\ge2$, the maps $H_1(X)\to H_1(X/\Gamma_nX)$ are isomorphisms. Exactness therefore makes the transgression $H_2(X/\Gamma_nX)\to\Gamma_nX/[X,\Gamma_nX]$ onto, with kernel the image of $H_2(X)$. By definition $[X,\Gamma_nX]=\Gamma_{n+1}X$. [A1, F1, F2, given, algebra]

2.1 Naturality of [F1] makes the map $H_2(A/\Gamma_nA)\to H_2(B/\Gamma_nB)$ compatible with the two transgressions. It is an isomorphism because the quotient-group map is an isomorphism by the induction hypothesis. The epimorphism $H_2(A)\to H_2(B)$ makes the image of $H_2(A)$ in $H_2(A/\Gamma_nA)$ map onto the image of $H_2(B)$ in $H_2(B/\Gamma_nB)$. The induced map on the two cokernels is consequently an isomorphism. By step 1.2 and exactness, those cokernels are $\Gamma_nA/\Gamma_{n+1}A$ and $\Gamma_nB/\Gamma_{n+1}B$. [F1, step 1.2, algebra]

3.1 The inclusions and quotient maps give exact central extensions $$1\to\Gamma_nX/\Gamma_{n+1}X\to X/\Gamma_{n+1}X\to X/\Gamma_nX\to1, \qquad X=A,B,$$ because $[X,\Gamma_nX]=\Gamma_{n+1}X$. The maps on the kernel and quotient terms are isomorphisms by step 2.1 and the induction hypothesis. The middle map is injective: an element in its kernel projects to the identity in the quotient, hence lies in the kernel term, where injectivity holds. It is surjective: for a target element, lift its quotient class through the quotient isomorphism and then correct the chosen middle lift by a kernel element using the kernel isomorphism. Thus $A/\Gamma_{n+1}A\to B/\Gamma_{n+1}B$ is an isomorphism. [step 2.1, algebra, choose]

4.1 Steps 1.1 and 3.1 prove by induction the isomorphism for every finite $n$. Apart from the inherited AC used to obtain the homology sequence [F1], the induction uses only exactness and a single element lift at a time; no additional choice principle is used. [A1, step 1.1, step 3.1] ∎

