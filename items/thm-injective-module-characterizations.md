---
id: thm-injective-module-characterizations
kind: theorem
title: "Equivalent characterizations of injective modules"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-injective-module, thm-splitting-lemma-for-modules, thm-hom-functors-are-left-exact, def-quotient-module]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Kleshchev, Lectures on Abstract Algebra for Graduate Students, sections 3.6, 3.14, and 3.15"
      url: "https://darkwing.uoregon.edu/~klesh/teaching/Alg600LN12.pdf"
    - title: "The Stacks Project, Algebra"
      url: "https://stacks.math.columbia.edu/tag/05CD"
    - title: "P. Hekmati, Homological Algebra, section 3.1"
      url: "https://www.math.auckland.ac.nz/~hekmati/HomologicalAlgebra.pdf"
pipeline_run: null
---

## Statement

For a left $R$-module $I$, the following are equivalent:

1. $I$ is injective;
2. every short exact sequence $0\to I\to E\to C\to0$ splits;
3. $\operatorname{Hom}_R(-,I)$ takes every short exact sequence to a short exact sequence.

These equivalences use no choice principle.

## Facts & Assumptions

**Given:** A left $R$-module $I$.

[F1] Injectivity is the extension property along every module monomorphism ([[def-injective-module]]).

[L1] A short exact sequence splits exactly when its monomorphism has a retraction ([[thm-splitting-lemma-for-modules]]).

[L2] Applying $\operatorname{Hom}_R(-,I)$ to an exact sequence $A\to B\to C\to0$ gives an exact sequence $0\to\operatorname{Hom}_R(C,I)\to\operatorname{Hom}_R(B,I)\to\operatorname{Hom}_R(A,I)$ ([[thm-hom-functors-are-left-exact]]).

[F2] Quotient modules have the usual coset operations ([[def-quotient-module]]).

## Proof

**Proof technique:** direct.

1.1 If $I$ is injective and $0\to I\xrightarrow jE\to C\to0$ is short exact, extend $\operatorname{id}_I$ along $j$ using [F1]. The extension is a retraction, so [L1] makes the sequence split. [assume-hyp, F1, L1]

1.2 Conversely, assume every short exact sequence beginning in $I$ splits. Given a monomorphism $u:A\to B$ and $f:A\to I$, let $S=\{(f(a),-u(a)):a\in A\}\le I\oplus B$ and $P=(I\oplus B)/S$. [assume-hyp, F2, construct]

1.3 If $I$ is injective, every map $A\to I$ extends across the monomorphism in a short exact sequence $0\to A\to B\to C\to0$, so the final precomposition map in [L2] is surjective; hence $\operatorname{Hom}_R(-,I)$ is exact. [assume-hyp, F1, L2]

1.4 Conversely, if $\operatorname{Hom}_R(-,I)$ takes short exact sequences to short exact sequences, apply it to $0\to A\xrightarrow uB\to B/u(A)\to0$. Surjectivity of $u^*$ extends every $A\to I$ across $u$, so [F1] makes $I$ injective. [assume-hyp, F1, F2, L2]

2.1 The map $j:I\to P$, $j(t)=[(t,0)]$, is injective: if $(t,0)=(f(a),-u(a))$, injectivity of $u$ gives $a=0$ and $t=0$. Hence $0\to I\xrightarrow jP\to P/j(I)\to0$ is short exact and splits by hypothesis; let $r:P\to I$ retract $j$. [step 1.2, L1, F2]

3.1 Define $\tilde f:B\to I$ by $\tilde f(b)=r([(0,b)])$. In $P$, $[(0,u(a))]=[(f(a),0)]$, so $\tilde f(u(a))=r(j(f(a)))=f(a)$. Thus $I$ is injective by [F1]. [step 1.2, step 2.1, F1, construct]

4.1 Steps 1.1, 1.2, 2.1, and 3.1 prove $1\Leftrightarrow2$, while steps 1.3 and 1.4 prove $1\Leftrightarrow3$. [step 1.1, step 1.2, step 2.1, step 3.1, step 1.3, step 1.4] ∎
