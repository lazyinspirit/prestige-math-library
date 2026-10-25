---
id: lem-qftx-positive-real-monad-analytic-twist-cohomology
kind: lemma
title: Analytic negative-twist vanishings for the positive real monad
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-positive-real-linear-monad-normal-forms
dependency_level: 3
deps:
  - thm-qftx-gaga-analytic-projective-dolbeault-scalar-cohomology
  - lem-qftx-positive-real-monad-hyperplane-twist-sequences
  - thm-long-exact-sequence-sheaf-cohomology
dependency_roles:
  thm-qftx-gaga-analytic-projective-dolbeault-scalar-cohomology: mathematical-premise
  lem-qftx-positive-real-monad-hyperplane-twist-sequences: mathematical-premise
  thm-long-exact-sequence-sheaf-cohomology: mathematical-premise
axiom_base: "ZF + full AC inherited from the planned analytic scalar-cohomology supplier; the hyperplane-sequence deductions use no additional choice."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Jean-Pierre Serre, Géométrie algébrique et géométrie analytique"
      url: https://www.college-de-france.fr/media/jean-pierre-serre/UPL1698785858825941763_Serre_GAGA.pdf
      locator: "Theorems 1–3, §§12–17, printed pp. 19–27: analytic/algebraic comparison context. The proof below does not assume GAGA; it derives the negative twists conditionally from the exact planned scalar input and analytic hyperplane sequences."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Statement

Assume full AC. Then the analytic sheaf cohomology of $\mathcal O(-1)$ vanishes in every degree on $\mathbb P^r(\mathbb C)$ for $1\le r\le3$. The analytic cohomology of $\mathcal O(-2)$ vanishes in every degree on $\mathbb P^r(\mathbb C)$ for $r=2,3$. In particular, $H^0(\mathbb P^1,\mathcal O(-1))=0$ and $H^q(\mathbb P^3,\mathcal O(-2))=0$ for $q=0,1,2$. This is an analytic deduction from the named scalar-cohomology supplier and does not identify algebraic and analytic cohomology by GAGA.

## Statement references

[[thm-qftx-gaga-analytic-projective-dolbeault-scalar-cohomology]]

[[lem-qftx-positive-real-monad-hyperplane-twist-sequences]]

## Facts & Assumptions

**Given:** Full AC and the standard holomorphic hyperplane inclusions $\mathbb P^{r-1}\hookrightarrow\mathbb P^r$ for $1\le r\le3$.

[A1] Under full AC, the batch-67 scalar cohomology theorem states that for every $0\le r\le3$, $H^0(\mathbb P^r,\mathcal O)=\mathbb C$ and $H^q(\mathbb P^r,\mathcal O)=0$ for $q>0$. [[thm-qftx-gaga-analytic-projective-dolbeault-scalar-cohomology]]

[F1] For a hyperplane inclusion $i:\mathbb P^{r-1}\hookrightarrow\mathbb P^r$, multiplication by its defining linear form gives the exact holomorphic sequences $0\to\mathcal O(-1)\to\mathcal O\to i_*\mathcal O_{\mathbb P^{r-1}}\to0$ and $0\to\mathcal O(-2)\to\mathcal O(-1)\to i_*\mathcal O_{\mathbb P^{r-1}}(-1)\to0$. [[lem-qftx-positive-real-monad-hyperplane-twist-sequences]]

[F2] For this closed inclusion, $i_*$ is exact because its stalk is the original stalk on $H=\mathbb P^{r-1}$ and zero off $H$. The inverse-image functor $i^{-1}$ is exact and left adjoint to $i_*$, so $i_*$ sends injective sheaves to injective sheaves. Also $\Gamma(\mathbb P^r,i_*\mathcal G)=\Gamma(H,\mathcal G)$. Applying $i_*$ to an injective resolution therefore gives the natural isomorphism $H^q(\mathbb P^r,i_*\mathcal G)\cong H^q(H,\mathcal G)$ for every sheaf $\mathcal G$ on $H$.

[F3] A short exact sequence of sheaves gives the natural long exact sequence in the same sheaf cohomology groups. [[thm-long-exact-sequence-sheaf-cohomology]]

## Proof

**Given:** [A1] and [F1]. All cohomology in this proof is analytic sheaf cohomology.

1.1 Fix $r\in\{1,2,3\}$. In the first sequence of [F1], [F2] identifies the cohomology of the quotient sheaf with that of $\mathcal O_{\mathbb P^{r-1}}$. The map $H^0(\mathbb P^r,\mathcal O)\to H^0(\mathbb P^{r-1},\mathcal O)$ is restriction of constants and hence is the identity $\mathbb C\to\mathbb C$. Exactness therefore gives $H^0(\mathbb P^r,\mathcal O(-1))=0$. The adjacent higher groups of $\mathcal O$ and $\mathcal O_{\mathbb P^{r-1}}$ vanish by [A1]; the long exact sequence [F3] then gives $H^q(\mathbb P^r,\mathcal O(-1))=0$ for every $q>0$. [given, A1, F1, F2, F3, algebra]

2.1 Fix $r\in\{2,3\}$. By [F2], the second sequence of [F1] has quotient cohomology equal to that of $\mathcal O_{\mathbb P^{r-1}}(-1)$. Both this sheaf and $\mathcal O_{\mathbb P^r}(-1)$ are acyclic by step 1.1, since $r-1\in\{1,2\}$. Its long exact cohomology sequence [F3] therefore gives $H^q(\mathbb P^r,\mathcal O(-2))=0$ for every $q\ge0$, including the stated $\mathbb P^3$ groups. [given, F1, F2, F3, step 1.1, algebra] ∎

## Proof sources

[[thm-qftx-gaga-analytic-projective-dolbeault-scalar-cohomology]]
