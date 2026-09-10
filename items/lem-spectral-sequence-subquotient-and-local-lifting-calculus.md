---
id: lem-spectral-sequence-subquotient-and-local-lifting-calculus
kind: lemma
title: Spectral sequence subquotient and local lifting calculus
deps: ["def-abelian-category", "prop-the-kernel-of-a-monomorphism-is-zero-and-the-cokernel-of-an-epimorphism-is-zero", "prop-the-cokernel-of-a-zero-morphism-out-of-the-zero-object-is-an-isomorphism"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: The Stacks Project, Abelian categories, Section 12.5
      url: https://stacks.math.columbia.edu/tag/00ZX
status: draft
origin: pipeline
pipeline_run: phase-2-catchup-24
proof_strategy: direct
---



## Statement

In an abelian category, finite sums of subobjects are images of biproduct maps, intersections and inverse images are pullbacks. For subobjects $U,V,W\subseteq X$ there are canonical isomorphisms
$$ (U+V)/V\cong U/(U\cap V),\qquad (X/V)/(U/V)\cong X/U\quad(V\subseteq U). $$
If $U\subseteq W$, then $W\cap(U+V)=U+(W\cap V)$. A map preserving a numerator and denominator induces a unique quotient map. A map into $\operatorname{im}f$ lifts through $f$ after an epimorphism onto its domain. Equality and factorization through a subobject can be tested after that epimorphism. These constructions are natural for maps preserving the displayed data.

## Facts & Assumptions

**Given:** An abelian category, morphisms $f,e$ and the subobjects in the statement.

[F1] Finite biproducts, kernels, cokernels and the canonical isomorphism $\operatorname{coim}f\cong\operatorname{im}f$ exist ([[def-abelian-category]]).

[F2] A monomorphism has zero kernel and an epimorphism has zero cokernel ([[prop-the-kernel-of-a-monomorphism-is-zero-and-the-cokernel-of-an-epimorphism-is-zero]]).

[F3] The cokernel of $0\to A$ and the kernel of $A\to0$ are represented by $1_A$ ([[prop-the-cokernel-of-a-zero-morphism-out-of-the-zero-object-is-an-isomorphism]]).

## Proof

**Proof technique:** direct.

1.1 A cokernel $q$ is epic: if $uq=vq$, uniqueness in its universal property applied to that common composite gives $u=v$. A kernel is monic by the corresponding uniqueness. Thus [F1] factors every $f:A\to B$ as $A\xrightarrow{e}\operatorname{im}f\xrightarrow{m}B$ with $e$ epic, $m$ monic and $A/\ker f\cong\operatorname{im}f$. [F1]

1.2 For $f:A\to X$ and $e:B\to X$, set $D=f\pi_A-e\pi_B:A\oplus B\to X$ and $P=\ker D$. Its projections $\alpha:P\to A$, $\beta:P\to B$ satisfy $f\alpha=e\beta$. Any pair $(a,b)$ with $fa=eb$ factors uniquely through $\ker D$, proving the pullback property, also when one object is zero. [F1]

2.1 If $f$ is monic, [F2] and [F3] identify its coimage projection with an isomorphism; the factorization in step 1.1 therefore makes $f$ a kernel of its cokernel. If $f$ is epic, its image inclusion is an isomorphism by the kernel clause of [F3], so $f$ is a cokernel of its kernel. In particular a map both monic and epic is an isomorphism. [F2, F3, step 1.1]

3.1 If $e$ is epic, $D$ is epic since $D\iota_B=-e$. If $q:A\to Q$ satisfies $q\alpha=0$, then $q\pi_A$ kills $\ker D$; step 2.1 gives $v:X\to Q$ with $vD=q\pi_A$. Composing with $\iota_B$ gives $ve=0$, hence $v=0$; composing with $\iota_A$ gives $q=0$. Apply this to the difference of any two maps agreeing after $\alpha$: $\alpha$ is epic. [step 2.1, step 1.2, algebra]

3.2 Define $U+V=\operatorname{im}(U\oplus V\to X)$ and $U\cap V=U\times_X V$. Both have their least-upper-bound and greatest-lower-bound properties: a common upper subobject contains the biproduct map and hence its image by normality, while a common lower subobject factors through the pullback. A map $h:M\to M'$ with $h(N)\subseteq N'$ gives a unique $\bar h:M/N\to M'/N'$ because the composite $M\to M'\to M'/N'$ kills $N$. [step 1.1, step 2.1, step 1.2]

4.1 For $h:T\to\operatorname{im}f$, pull back the epic $e$ of step 1.1 along $h$. Step 3.1 gives an epic $t:T'\to T$ and a lift $a:T'\to A$ with $ea=ht$. Equalities after $t$ descend by epic cancellation. If $ht$ factors through a subobject $N\hookrightarrow Y$, then $(Y\to Y/N)ht=0$, hence $(Y\to Y/N)h=0$, and normality in step 2.1 factors $h$ through $N$. Conversely, a factorization of $h$ gives one of $ht$ by composition. Finite repetitions compose epimorphisms; no section or choice of global representatives is asserted. [step 1.1, step 2.1, step 3.1]

5.1 The kernel of $U\to X/V$ is $U\cap V$, since $V=\ker(X\to X/V)$ by step 2.1. Its image agrees with that of $U+V\to X/V$: after the epic $U\oplus V\to U+V$ the latter map is $[\bar u,0]$, which has the same image as $\bar u$. The kernel of $U+V\to X/V$ is $V$, so step 1.1 identifies this image both with $U/(U\cap V)$ and with $(U+V)/V$, proving the first isomorphism. [step 1.1, step 2.1, step 4.1, step 3.2]

6.1 For $V\subseteq U$, step 5.1 makes $U/V\to X/V$ monic. Maps $X/V\to T$ killing $U/V$ correspond uniquely to maps $X\to T$ killing $U$: each direction follows by composing with the epic quotient from $X$ and then applying cokernel descent. Thus $X/U$ and $(X/V)/(U/V)$ satisfy the same cokernel property, giving inverse compatible maps and the second isomorphism. [step 3.2, step 5.1]

7.1 For $U\subseteq W$, let $h:T\to W\cap(U+V)$. Step 4.1 locally writes its composite into $X$ as $u+v$, with $u$ through $U$ and $v$ through $V$. Since both $h$ and $u$ factor through $W$, their difference $v$ factors through $W\cap V$. Thus $h$ locally, and by step 4.1 globally, factors through $U+(W\cap V)$. The reverse inclusion holds because both summands lie in $W$ and in $U+V$. This proves modularity. All comparison maps above are characterized by the original inclusions and quotient projections; composing with a map preserving the subobjects yields the same characterizations. Uniqueness and epic cancellation prove naturality and identity/composition compatibility. [step 4.1, step 3.2, step 5.1, step 6.1] ∎

## Source notes

[Stacks, §12.5](https://stacks.math.columbia.edu/tag/00ZX), Definition 12.5.1 and Lemmas 12.5.11–15. The finite categorical argument below is supplied locally.
