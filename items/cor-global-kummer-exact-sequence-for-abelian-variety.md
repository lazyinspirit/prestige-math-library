---
id: cor-global-kummer-exact-sequence-for-abelian-variety
kind: corollary
title: "Global Kummer sequence in flat cohomology"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-abelian-variety-over-a-field
  - def-axiom-of-choice
  - def-dependent-choice
  - def-fppf-h1-of-commutative-group-sheaves-as-torsors
  - lem-contracted-product-and-pushout-of-commutative-fppf-torsors
  - def-n-torsion-of-an-abelian-variety-as-a-finite-flat-group-scheme
  - thm-fppf-kummer-exact-sequence-for-abelian-variety
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Cohomology on Sites, Section 21.4, Lemma 21.4.3"
      url: "https://stacks.math.columbia.edu/tag/03AJ"
      locator: "First cohomology as torsor classes; the exact Kummer argument is proved locally."
    - title: "Andrew Snowden, Abelian varieties (algebraic theory), Lecture 4"
      url: "https://open.umich.edu/sites/default/files/downloads/2014-math679-asnowden-lecture04-handout.pdf"
      locator: "The displayed number-field Galois Kummer sequence is related context; this item proves the fppf torsor sequence separately."
---

## Statement

Assume the Axiom of Choice and Dependent Choice. Let $K$ be a field, let $A/K$ be an abelian variety, and let $n\ge2$. For the torsor groups $H^1_{fppf}$ defined on $\operatorname{Spec}K$, the Kummer connecting map gives a short exact sequence
$$0\longrightarrow A(K)/nA(K)\xrightarrow{\delta}H^1_{fppf}(K,A[n])\xrightarrow{i_*}H^1_{fppf}(K,A)[n]\longrightarrow0,$$
where $i:A[n]\hookrightarrow A$ is inclusion and $H^1_{fppf}(K,A)[n]$ is the subgroup of classes killed by multiplication by $n$.

## Statement references

[The Stacks Project, First Cohomology and Torsors, Lemma 21.4.3](https://stacks.math.columbia.edu/tag/03AJ)

[Andrew Snowden, Abelian varieties (algebraic theory), Lecture 4](https://open.umich.edu/sites/default/files/downloads/2014-math679-asnowden-lecture04-handout.pdf)

## Facts & Assumptions


**Given:** The Axiom of Choice, Dependent Choice, a field $K$, an abelian variety $A/K$, and an integer $n\ge2$.

[A1] The Axiom of Choice states that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[A2] Dependent Choice states that every serial relation on a nonempty set admits an infinite chain ([[def-dependent-choice]]).

[F1] [[thm-fppf-kummer-exact-sequence-for-abelian-variety]]: $0\to A[n]\xrightarrow{i}A\xrightarrow{[n]}A\to0$ is exact as abelian sheaves on the big fppf site; in particular $[n]$ is an fppf epimorphism.

[F2] [[def-fppf-h1-of-commutative-group-sheaves-as-torsors]] and [[lem-contracted-product-and-pushout-of-commutative-fppf-torsors]]: $H^1_{fppf}(K,G)$ is the set of isomorphism classes of right $G$-torsors, with its abelian group structure induced by contracted product; pushout along a group homomorphism induces the corresponding homomorphism on classes, and multiplication by $n$ is pushout along $[n]$.

[F3] [[def-n-torsion-of-an-abelian-variety-as-a-finite-flat-group-scheme]]: $A[n]$ is the scheme-theoretic kernel of $[n]$.

## Proof


1.1 For $a\in A(K)$, let $P_a=A\times_{A,a,[n]}\operatorname{Spec}K$ be the fiber of $[n]$ above $a$. By [F1], $P_a\to\operatorname{Spec}K$ is an fppf cover. Translation by $A[n]$ acts simply transitively on its sections: for any $K$-scheme $T$, if $x,y\in P_a(T)$ then $y-x\in A[n](T)$ and this difference is unique. Thus $P_a$ is an $A[n]$-torsor and defines $\delta(a)=[P_a]\in H^1_{fppf}(K,A[n])$. [A1, A2, F1, F2, F3, given, construct]

1.2 If $P$ is an $A[n]$-torsor, its pushout $i_*P$ is an $A$-torsor. Pushing this torsor out along $[n]$ is the pushout of $P$ along $[n]\circ i=0$, which is the trivial $A$-torsor. By [F2], the image of $i_*$ is contained in $H^1_{fppf}(K,A)[n]$. [F2, F3, algebra]

1.3 Conversely, let $T$ be an $A$-torsor whose class is killed by $n$. By [F2], the pushout $T\times^{A,[n]}A$ is trivial; fix an isomorphism $\phi:T\times^{A,[n]}A\to A$ of $A$-torsors. Define $u:T\to A$ by $u(t)=\phi([t,0])$. The pushout relation gives $u(t+a)=u(t)+na$. Let $P=u^{-1}(0)$. For every local section $t$ of $T$, [F1] supplies an fppf cover on which $-u(t)$ lifts under $[n]$, so $P$ is fppf-locally nonempty. If $p,p'\in P(T')$ over any test scheme $T'$, the torsor property of $T$ gives a unique $a\in A(T')$ with $p'=p+a$; then $na=u(p')-u(p)=0$, so $a\in A[n](T')$. Thus $P$ is an $A[n]$-torsor. The map $P\times^{A[n]}A\to T$, $[p,a]\mapsto p+a$, is an isomorphism: it is an isomorphism after an fppf cover on which $P$ has a section, and such a cover detects isomorphisms of sheaves. Hence $[T]$ lies in the image of $i_*$. [A1, A2, F1, F2, F3, construct]

2.1 For $a,b\in A(K)$, the contracted product $P_a\otimes^{A[n]}P_b\to P_{a+b}$ given by $[x,y]\mapsto x+y$ is well-defined and is an isomorphism: after an fppf cover trivializing both torsors, it is translation between copies of $A[n]$. Hence $\delta$ is a homomorphism. The torsor $P_a$ is trivial exactly when it has a $K$-section, which is exactly a point $x\in A(K)$ with $nx=a$. Therefore $\ker\delta=nA(K)$, and $\delta$ induces the stated injection from $A(K)/nA(K)$. [F1, F2, step 1.1, algebra]

3.1 Steps 1.2 and 1.3 identify the image of $i_*$ with the kernel of multiplication by $n$ on $H^1_{fppf}(K,A)$; step 2.1 identifies the kernel of $\delta$ with $nA(K)$. These are precisely the two exactness assertions in the displayed short exact sequence. [F1, F2, step 2.1, step 1.2, step 1.3] ∎
