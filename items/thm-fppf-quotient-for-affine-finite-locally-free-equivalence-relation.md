---
id: thm-fppf-quotient-for-affine-finite-locally-free-equivalence-relation
kind: theorem
title: "Affine finite locally free equivalence relations have finite locally free scheme quotients"
status: draft
origin: pipeline
dependency_level: 1
deps: [def-axiom-of-choice, def-faithfully-flat-morphism-schemes, def-quotient-sheaf-and-representable-quotient, thm-nonaffine-finite-flat-affine-equivalence-quotient]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "The Stacks Project, Groupoid Schemes, Sections 39.20 and 39.23 (tags 02VG, 03BD, 03C5, 03BM, 03BE)"
      url: https://stacks.math.columbia.edu/download/groupoids.pdf
      locator: "Chapter 39, Proposition 39.23.9 and Lemma 39.23.8, printed pp. 50-51"
    - title: "The Stacks Project, Properties of Algebraic Spaces, Section 66.14 (tags 07S5, 07S6, 0BBM)"
      url: https://stacks.math.columbia.edu/download/spaces-properties.pdf
      locator: "Chapter 66, Proposition 66.14.1 and Lemma 66.14.2"
---

## Statement

Assume the Axiom of Choice. Let $k$ be a field, let $U=\operatorname{Spec}A$
and $R=\operatorname{Spec}B$ be affine finite-type $k$-schemes, and let
$s,t:R\to U$ be finite locally free morphisms
([[def-faithfully-flat-morphism-schemes]]) such that $j=(t,s):R\to U\times_kU$
is an equivalence relation. Put $C=\{a\in A: s^\sharp(a)=t^\sharp(a)\}$
([[def-quotient-sheaf-and-representable-quotient]] for the quotient sheaf
$U/R$). Then $C$ is a finite-type $k$-algebra, the morphism
$U\to M=\operatorname{Spec}C$ is finite locally free and surjective, the
canonical morphism $R\to U\times_MU$ is an isomorphism, and $M$ represents the
fppf quotient sheaf $U/R$.

## Facts & Assumptions

**Given:** AC, the affine finite-type $k$-schemes $U=\operatorname{Spec}A$ and $R=\operatorname{Spec}B$, and finite locally free $s,t:R\to U$ with $j=(t,s)$ an equivalence relation.

[F1] The published affine quotient theorem: for affine finite-type $k$-schemes $U=\operatorname{Spec}A$, $R=\operatorname{Spec}B$ with an equivalence-relation groupoid whose source and target maps are finite locally free, the ring $C=\{a\in A:s^*(a)=t^*(a)\}$ is a finite-type $k$-algebra, $U\to\operatorname{Spec}C$ is finite locally free and onto, $R\to U\times_MU$ is an isomorphism, and $M$ represents the fppf quotient sheaf $U/R$ ([[thm-nonaffine-finite-flat-affine-equivalence-quotient]]).

[F2] The fppf quotient sheaf $U/R$ is the sheafification of the naive quotient presheaf in the fppf topology, and a scheme represents it when its functor is naturally isomorphic to it ([[def-quotient-sheaf-and-representable-quotient]]).

## Proof

**Given:** AC, $U=\operatorname{Spec}A$, $R=\operatorname{Spec}B$ and finite locally free $s,t:R\to U$ with $j=(t,s)$ an equivalence relation.

1.1 The equivalence-relation hypothesis includes that $j$ is a monomorphism. Reflexivity supplies the diagonal arrow $e:U\to R$ with $j\circ e=\Delta_{U/k}$, symmetry supplies the unique arrow $i:R\to R$ with $j\circ i=\sigma\circ j$ for the factor swap $\sigma$, and transitivity supplies the unique composition arrow through $j$; these are exactly the groupoid-scheme arrows dual to the identities of the relation, so $(R\rightrightarrows U)$ is an equivalence-relation groupoid with finite locally free source and target. [given, construct]

2.1 Applying [F1] to the groupoid produced in step 1.1 gives that $C=\{a\in A:s^\sharp(a)=t^\sharp(a)\}$ is a finite-type $k$-algebra, $U\to M=\operatorname{Spec}C$ is finite locally free and surjective, and $R\to U\times_MU$ is an isomorphism; all hypotheses coincide because both statements use the comorphisms $s^\sharp,t^\sharp$ of $s,t$ on coordinate rings. [F1, step 1.1, given, algebra]

3.1 The representing claim is a claim about the same object: by [F2] the phrase "$M$ represents the fppf quotient sheaf $U/R$" means that $h_M$ is naturally isomorphic to the sheafification of the naive quotient presheaf of $s,t:R\to U$ in the fppf topology, which is exactly the conclusion recorded here; no further hypothesis is added and no step of the published proof is repeated. [F1, F2, step 2.1] ∎ 