---
id: thm-splitting-lemma-for-modules
kind: theorem
title: "The splitting lemma for short exact sequences of modules"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-split-short-exact-sequence, lem-endpoints-in-a-short-exact-sequence, thm-universal-property-of-module-direct-sums]
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

For a short exact sequence
$$0\to A\xrightarrow iB\xrightarrow pC\to0,$$
the following are equivalent:

1. $p$ has a section $s:C\to B$;
2. $i$ has a retraction $r:B\to A$;
3. there is an isomorphism $\Phi:A\oplus C\to B$ with $\Phi(a,0)=i(a)$ and $p(\Phi(a,c))=c$.

Given a section, $\Phi(a,c)=i(a)+s(c)$ and $B=i(A)\oplus s(C)$.

## Facts & Assumptions

**Given:** A short exact sequence $0\to A\xrightarrow iB\xrightarrow pC\to0$.

[F1] A section satisfies $p\circ s=\operatorname{id}_C$, and a retraction satisfies $r\circ i=\operatorname{id}_A$ ([[def-split-short-exact-sequence]]).

[L1] Short exactness means that $i$ is injective, $p$ is surjective, and $\operatorname{im}i=\ker p$ ([[lem-endpoints-in-a-short-exact-sequence]]).

[L2] Homomorphisms from $A\oplus C$ are uniquely determined by their restrictions to the two summands ([[thm-universal-property-of-module-direct-sums]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $s$ is a section and define $\Phi:A\oplus C\to B$ by $\Phi(a,c)=i(a)+s(c)$; [L2] makes this a homomorphism. [assume-hyp, F1, L2]

1.2 Suppose assertion 3 holds. Define $r:B\to A$ as the first coordinate of $\Phi^{-1}$; then $\Phi(a,0)=i(a)$ gives $r(i(a))=a$, so $r$ is a retraction. [assume-hyp, F1, construct]

1.3 Suppose instead that $r$ is a retraction. For each $c\in C$, choose any $b$ with $p(b)=c$ using surjectivity and put $k=b-i(r(b))$. Then $r(k)=0$ and $p(k)=c$. [assume-hyp, F1, L1, choose]

2.1 For $b\in B$, the element $b-s(p(b))$ lies in $\ker p=\operatorname{im}i$, so by injectivity of $i$ there is a unique $a\in A$ with $i(a)=b-s(p(b))$; hence $b=\Phi(a,p(b))$ and $\Phi$ is surjective. [step 1.1, F1, L1]

2.2 If $\Phi(a,c)=0$, applying $p$ gives $c=0$, and then injectivity of $i$ gives $a=0$; thus $\Phi$ is injective and satisfies the compatibility conditions in assertion 3. [step 1.1, F1, L1]

2.3 The element $k$ of step 1.3 is unique in $\ker r$ with image $c$: if $k'\in\ker r$ and $p(k')=c$, then $k-k'\in\ker p=\operatorname{im}i$, say $k-k'=i(a)$, and applying $r$ gives $a=0$. Therefore the rule $s(c)=k$ is independent of the temporary lift $b$, is linear by uniqueness, and satisfies $p\circ s=\operatorname{id}_C$. [step 1.3, F1, L1]

3.1 Steps 1.1, 2.1, and 2.2 prove $1\Rightarrow3$, step 1.2 proves $3\Rightarrow2$, and steps 1.3 and 2.3 prove $2\Rightarrow1$. The formula for $\Phi$ also yields the internal direct sum $B=i(A)\oplus s(C)$. [step 1.1, step 2.1, step 2.2, step 1.2, step 1.3, step 2.3] ∎
