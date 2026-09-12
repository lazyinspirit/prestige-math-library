---
id: lem-abelian-group-model-for-spectral-sequence-computations
kind: lemma
title: Abelian-group model for spectral-sequence computations
deps: ["def-abelian-category", "def-group-homomorphism", "thm-int-ordered-ring", "thm-integers-modulo-n-basic-algebra", "def-equivalence-relation", "thm-division-algorithm-in-z"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: The Stacks Project, Definition 12.5.1 (axiom checklist; model verified locally)
      url: https://stacks.math.columbia.edu/tag/00ZX
status: published
origin: pipeline
pipeline_run: phase-2-catchup-24
proof_strategy: direct
---



## Statement

Abelian groups and homomorphisms form an abelian category. Kernels and images are the ordinary subgroup kernels and images, and cokernels are coset quotients. In particular $\mathbb Z$, $\mathbb Z/2$, $\mathbb Z/4$ and their finite products are legitimate objects for filtered-complex computations. Multiplication by 2 on $\mathbb Z$ is injective with cokernel $\mathbb Z/2$.

## Facts & Assumptions

**Given:** Abelian groups and additive homomorphisms, with the indicated integer and congruence constructions.

[F1] An additive category with kernels and cokernels is abelian when its canonical coimage-to-image map is an isomorphism ([[def-abelian-category]]).

[F2] Group homomorphisms preserve the group operation ([[def-group-homomorphism]]).

[F3] The integers form a totally ordered commutative ring ([[thm-int-ordered-ring]]).

[F4] The congruence-class groups $\mathbb Z/m$ are abelian with addition of representatives ([[thm-integers-modulo-n-basic-algebra]]).

[F5] An equivalence relation gives its set of equivalence classes ([[def-equivalence-relation]]).

[F6] Division by a positive integer has a unique remainder between zero and that integer ([[thm-division-algorithm-in-z]]).

## Proof

**Proof technique:** direct.

1.1 For abelian groups A,B the homomorphisms form an abelian group under $(f+g)(a)=f(a)+g(a)$: additivity follows from commutativity in B, with zero map and pointwise negatives as identity and inverses. The group laws hold pointwise. Composition is bilinear because each map is additive [F2]. Identities and composites are homomorphisms by the same calculation, so this is a preadditive category. [F2]

2.1 The one-element group 0 is both initial and terminal. The product group $A\times B$ with coordinate operations has projections and injections a↦(a,0), b↦(0,b). A pair of maps T→A,B induces t↦(f(t),g(t)), uniquely by coordinates. Maps A→T and B→T induce $(a,b)\mapsto f(a)+g(b)$, uniquely since $(a,b)=(a,0)+(0,b)$. These are its product and coproduct properties. Iterating yields every finite biproduct, including the empty one 0. [step 1.1]

2.2 For f:A→B, the subset $K=\{a:f(a)=0\}$ is a subgroup: f(0)=0 follows from f(0)=f(0)+f(0), and $f(a-a')=f(a)-f(a')$. Any homomorphism killed by f has values in K and factors uniquely through its inclusion. The image I={f(a):a∈A} is likewise a subgroup, since f(a)-f(a')=f(a-a'). [F2, step 1.1]

3.1 For a subgroup I⊆B define b∼b' by b-b'∈I. Zero, negation and addition in I prove reflexivity, symmetry and transitivity. On the quotient set of [F5], define [b]+[c]=[b+c]; changing b,c by elements of I changes their sum by an element of I, so addition is well defined, and the group laws descend. A homomorphism h:B→T vanishes on I exactly when b↦h(b) is constant on each coset: one direction follows from h(b)-h(b')=h(b-b'), and the other by comparing i and 0 for i∈I. Thus [b]↦h(b) is the unique quotient homomorphism. With I=im f, this is a cokernel of f. [F2, F5, step 2.2]

4.1 The kernel of B→B/I is exactly I since [b]=[0] iff b∈I. Consequently the categorical image of f is I, and its coimage is A/K. The canonical comparison [a]↦f(a) is well defined, is onto I by definition, and is injective since f(a)=f(a') iff a-a'∈K. Its inverse is the uniquely specified relation sending f(a) to [a], not a chosen representative function; it is additive because both maps preserve addition. Hence [F1] applies to steps 1.1–3.1 and proves the abelian-category assertion. [F1, step 1.1, step 2.1, step 2.2, step 3.1]

5.1 By [F3] the additive integers are an abelian group. If 2a=0 and a>0, positivity gives 2a>0; if a<0 it gives 2(-a)>0. Thus a=0, proving injectivity. Its image is 2ℤ and its cokernel is ℤ/2ℤ by step 3.1, with the congruence operations of [F4]. Division [F6] for divisors 2 and 4 gives exactly the distinct residue lists {0,1} and {0,1,2,3}. Their additions are modulo 2 and 4, so 1+1=0 in ℤ/2 and 1+1=2≠0, 2+2=0 in ℤ/4. Finite products have the coordinate operations of step 2.1. [F3, F4, F6, step 2.1, step 3.1] ∎

## Source notes

[Stacks, §12.5](https://stacks.math.columbia.edu/tag/00ZX), Definition 12.5.1 and Lemmas 12.5.11–15. The finite categorical argument below is supplied locally.
