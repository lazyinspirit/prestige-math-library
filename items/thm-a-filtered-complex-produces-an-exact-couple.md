---
id: thm-a-filtered-complex-produces-an-exact-couple
kind: theorem
title: A filtered complex produces an exact couple
status: published
origin: pipeline
pipeline_run: phase-2-next-20
deps: [def-exact-couple, def-filtered-chain-complex, thm-long-exact-sequence-in-homology, lem-spectral-sequence-subquotient-and-local-lifting-calculus, def-short-exact-sequence-of-complexes]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Weibel, Section 5.9, filtered-complex exact couple"
      url: https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf
---

## Statement

For an increasingly filtered chain complex $(C,d,F)$ in an abelian category,
the families
$$D^1_{p,q}=H_{p+q}(F_pC),\qquad E^1_{p,q}=H_{p+q}(F_pC/F_{p-1}C)$$
form an initial exact couple. Its maps are induced by inclusion $i$, quotient
$j$, and the homology connecting morphism $k$, of degrees $(1,-1)$,
$(0,0)$ and $(-1,0)$ respectively. No boundedness or completeness hypothesis
on the filtration is needed for this construction.

## Facts & Assumptions

[F1] [[def-filtered-chain-complex]] makes each filtration piece a subcomplex.

[F2] [[lem-spectral-sequence-subquotient-and-local-lifting-calculus]] supplies quotient descent and normality of subobjects; [[def-short-exact-sequence-of-complexes]] means exactness in every chain degree.

[F3] [[thm-long-exact-sequence-in-homology]] gives the exact homology sequence of each short exact sequence of complexes, with connecting degree $-1$.

[F4] [[def-exact-couple]] specifies the three required exactness conditions and initial grading.

## Proof

**Given:** The filtered chain complex in the statement, with integer indices throughout.

1.1 Since $d$ preserves $F_{p-1}C\subseteq F_pC$, it induces a unique differential on each quotient $G_pC=F_pC/F_{p-1}C$. Its square is zero after precomposition with the epic quotient, since $d^2=0$. The inclusion and quotient therefore form chain maps. In each degree the inclusion is a kernel of its cokernel, so $0\to F_{p-1}C\to F_pC\to G_pC\to0$ is a short exact sequence of complexes. [F1, F2, given]

2.1 With $n=p+q$, the homology sequence contains $H_n(F_{p-1}C)\to H_n(F_pC)\to H_n(G_pC)\to H_{n-1}(F_{p-1}C)\to H_{n-1}(F_pC)$. In the proposed notation these arrows are $D^1_{p-1,q+1}\xrightarrow{i}D^1_{p,q}\xrightarrow{j}E^1_{p,q}\xrightarrow{k}D^1_{p-1,q}\xrightarrow{i}D^1_{p,q-1}$. This calculates the degrees of all three maps, including the $q$ coordinate of the connector. [F3, step 1.1]

3.1 Exactness of this sequence gives $\operatorname{im}i=\ker j$ in $D^1_{p,q}$, $\operatorname{im}j=\ker k$ in $E^1_{p,q}$, and $\operatorname{im}k=\ker i$ in $D^1_{p-1,q}$. Letting $(p,q)$ range over all integers gives every vertex required by the initial exact-couple definition. The argument applies when adjacent filtration pieces coincide or vanish; their zero quotient causes no exception. It treats the families componentwise and never takes an infinite sum of exact sequences, so no infinite exactness or choice hypothesis is used. [F3, F4, step 2.1] ∎
