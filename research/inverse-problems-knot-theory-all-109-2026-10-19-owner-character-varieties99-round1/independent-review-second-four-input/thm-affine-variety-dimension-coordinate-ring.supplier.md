---
id: "thm-affine-variety-dimension-coordinate-ring"
kind: "theorem"
title: "Affine geometric dimension equals ring dimension"
deps: ["def-dimension-noetherian-topological-space", "cor-strong-nullstellensatz-two-inclusions", "thm-hilbert-basis-theorem", "thm-correspondence-theorem-ideals", "def-krull-dimension-of-a-ring", "def-axiom-of-choice"]
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  precheck: pass
  verified:
    model: "gpt-6-astra"
    verdict: pass
    date: 2026-09-08
    scope: "Local prerequisite and proof repair; not independent judging or whole-closure certification."
    delegated_by: "Owner-requested UC-73 audit"
sources:
  references:
    - title: "Milne Definition 3.39 and chain/prime dictionary §3l"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
status: published
origin: "pipeline"
proof_strategy: "The Nullstellensatz reverses chains between irreducible closed subsets and prime ideals of k[X]. Handle the zero ring separately."
---

## Statement

For a nonempty affine algebraic set $X$, $\dim X=\dim k[X]$, where the right side is Krull dimension. For this comparison only, extend ring dimension to the zero ring by $\dim(0)=-\infty$; then the equality also holds for $X=\varnothing$.

Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points.

## Facts & Assumptions

**Given:** AC, an algebraically closed field $k$, and a polynomial zero set $X\subseteq k^n$. Write $R=k[t_1,\ldots,t_n]$, $I(X)=\{f\in R:f|_X=0\}$ and $k[X]=R/I(X)$. Geometric dimension means chain dimension as in [[def-dimension-noetherian-topological-space]].

[F1] Under AC, $I(V(J))=\sqrt J$ for polynomial ideals J ([[cor-strong-nullstellensatz-two-inclusions]]).

[F2] A polynomial ring over a Noetherian ring is Noetherian ([[thm-hilbert-basis-theorem]]).

[F3] Ideals of a quotient correspond to ideals containing its kernel ([[thm-correspondence-theorem-ideals]]).

[F4] Ring dimension counts strict prime chains ([[def-krull-dimension-of-a-ring]]).

## Proof

1.1 The field $k$ has only the ideals 0 and $k$, hence is Noetherian. Iterating F2 makes R Noetherian. For every relatively closed subset $Z$ of X, polynomial defining equations show $V(I(Z))=Z$ in $k^n$. Thus a descending chain of closed subsets gives an ascending chain of vanishing ideals, whose stabilization forces stabilization of the closed sets. This makes X Noetherian and its geometric chain dimension well-defined. [F2, given, algebra]

1.2 If Z is nonempty irreducible closed, then $I(Z)$ is proper and prime: $fg$ vanishing on Z writes Z as the union of its closed zero loci for f and g, so one factor vanishes on all of Z. Conversely, if $I(Z)$ is prime and Z were the union of two proper closed subsets, choose a defining equation of each subset nonzero somewhere on Z. Their product vanishes on Z, contradicting primality. These choices are finite. [given, algebra]

2.1 For every proper prime $P\supseteq I(X)$, F1 gives $I(V(P))=P$ since P is radical. In particular $V(P)$ is nonempty, since the empty set has vanishing ideal R; it lies in X and is irreducible by step 1.2. Together with $V(I(Z))=Z$, this gives inverse inclusion-reversing correspondences between nonempty irreducible closed subsets of X and primes of R containing I(X). This application of F1 is the precise inherited AC use. [F1, step 1.1, step 1.2, algebra]

3.1 F3 identifies ideals of $k[X]$ with ideals of R containing I(X). A corresponding pair is prime in one ring exactly when it is prime in the other: lift the two factors in the product test along the surjective quotient map; properness is also preserved. Thus step 2.1 is a strict inclusion-reversing bijection with primes of $k[X]$. [F3, step 2.1, algebra]

4.1 Reverse each finite chain through this bijection. Its length is unchanged, so the suprema of geometric and prime-chain lengths coincide by F4. If X is empty, I(X)=R and k[X] is the zero ring; both dimensions are $-\infty$ under the stated extension. [F4, step 3.1, given] ∎
