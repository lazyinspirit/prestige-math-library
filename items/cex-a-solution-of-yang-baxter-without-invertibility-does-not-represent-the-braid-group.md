---
id: cex-a-solution-of-yang-baxter-without-invertibility-does-not-represent-the-braid-group
kind: counterexample
title: "A non-invertible solution of the Yang–Baxter equation does not represent the braid group"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 1
deps: [def-yang-baxter-operator-on-an-object]
justified_by: []
aliases: []
landmark: false
generation:
  role: counterexample
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories (AMS Mathematical Surveys and Monographs 205), author's final version"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
      locator: "§8.2 Remark 8.2.5 (generators of $B_n$ map to automorphisms), printed p. 198"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement refuted

The claim refuted is: every solution of the Yang–Baxter equation on an object
gives a representation of the braid group. Take $\mathcal C=\mathbf{Vect}_k$,
$X=k$ one-dimensional, and $R=0$, the zero endomorphism of
$X\otimes X\cong k$. The cubic relation holds because both sides are zero, so
the cubic equation alone does not force invertibility. But $R$ is not
invertible, so for $n\ge2$ the local operators $R_i=0$ are not automorphisms of
$X^{\otimes n}$, and the assignment $\sigma_i\mapsto R_i$ cannot define a
homomorphism $B_n\to\operatorname{Aut}(X^{\otimes n})$: a Yang–Baxter operator
in the sense of [[def-yang-baxter-operator-on-an-object]] is required to be
invertible, and a homomorphism from a group lands in a group. The zero operator
therefore witnesses, for every braid group with at least two strands, that invertibility in the definition of a Yang–Baxter
operator is not redundant.

## Facts & Assumptions

**Given:** $n\ge2$, the field $k$, the one-dimensional vector space $X=k$, the object $X\otimes X\cong k$, the zero endomorphism $R=0$ of $X\otimes X$, and the defining cubic equation of [[def-yang-baxter-operator-on-an-object]] read using the canonical associativity identifications in $\mathbf{Vect}_k$.

[L1] A Yang–Baxter operator on $X$ is an **invertible** morphism $R\colon X\otimes X\to X\otimes X$ satisfying $(R\otimes1_X)(1_X\otimes R)(R\otimes1_X) =(1_X\otimes R)(R\otimes1_X)(1_X\otimes R)$ ([[def-yang-baxter-operator-on-an-object]]).

[F1] In $\mathbf{Vect}_k$ the tensor product $X\otimes X$ is again one-dimensional, hence nonzero, and the zero endomorphism of a nonzero vector space is not invertible: from $0\circ f=\operatorname{id}$ one gets $\operatorname{id}=0$, which fails on a nonzero vector.

## Counterexample

The witness is the pair $(X,R)=(k,0)$.

1.1 **The cubic equation holds for $R=0$.** Every factor in both composites $(R\otimes1_X)(1_X\otimes R)(R\otimes1_X)$ and $(1_X\otimes R)(R\otimes1_X)(1_X\otimes R)$ is a tensor product containing the zero morphism $R$; a composite with a zero factor is zero, so both sides are the zero endomorphism of $X\otimes X\otimes X$ and the cubic relation holds. [L1, given, algebra]

1.2 **The morphism $R$ is not invertible.** By [F1] the object $X\otimes X$ is nonzero and $0$ has no inverse as an endomorphism of it. The local operator $R_i=1^{\otimes(i-1)}\otimes R\otimes1^{\otimes(n-i-1)}$ is the tensor product of $R=0$ with identities, hence is the zero endomorphism of the nonzero object $X^{\otimes n}$, so it too has no inverse. [F1, algebra]

2.1 **No braid-group representation arises.** The assignment $\sigma_i\mapsto R_i$ does not even land in $\operatorname{Aut}(X^{\otimes n})$, because $R_i=0$ is not invertible by step 1.2. Moreover there is no homomorphism $\rho\colon B_n\to\operatorname{End}(X^{\otimes n})$ with $\rho(\sigma_i)=R_i$: from $\sigma_i\sigma_i^{-1}=1$ one would get $R_i\rho(\sigma_i^{-1})=\operatorname{id}$, contradicting $R_i\rho(\sigma_i^{-1})=0$. So the non-invertible solution $R=0$ of the cubic equation gives no representation of the braid group. [step 1.2, given]

3.1 **Conclusion.** The zero solution satisfies the Yang–Baxter equation but is not a Yang–Baxter operator in the sense of [L1], and it produces no braid-group action; the claim that the cubic equation alone suffices is therefore refuted, and invertibility is a genuine part of the definition. [step 1.1, step 2.1] ∎ 
## Remarks

The group $B_1$ has no braid generator, so its trivial action exists independently of the chosen cubic-equation solution. The counterexample concerns $n\ge2$.
