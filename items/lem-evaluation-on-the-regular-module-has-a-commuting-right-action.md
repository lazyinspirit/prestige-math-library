---
id: lem-evaluation-on-the-regular-module-has-a-commuting-right-action
kind: lemma
title: "$F(A)$ is a $(B,A)$-bimodule for every additive functor $F$"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - def-bimodule
  - def-additive-functor
  - def-functor-and-contravariant-functor
  - def-left-and-right-modules
justified_by: []
aliases: []
dependency_level: 0
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "M. Kamensky, Non-Commutative Algebra (BGU course notes, Spring 2017), §5.1, Theorem 5.1.43, Proposition 5.1.40, Lemma 5.1.46, Corollaries 5.1.48-5.1.49"
      url: "https://mkamensky.github.io/teaching/2017s/noncommutative-algebra/notes.pdf"
    - title: "A. Nyman and S. P. Smith, A Generalization of Watts's Theorem: Right Exact Functors on Module Categories, arXiv:0806.0832, Theorem 1.1-1.2, Propositions 3.2-3.3, Lemma 3.4"
      url: "https://arxiv.org/pdf/0806.0832"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $A$ and $B$ be unital rings and let
$F:A\text{-}\mathbf{Mod}\to B\text{-}\mathbf{Mod}$ be an additive functor
([[def-additive-functor]]). On the left $B$-module $M=F(A)$ define, for
$a\in A$ and $m\in M$,

$$ma:=F(r_a)(m),$$

where $r_a:A\to A$, $r_a(x)=xa$, is right multiplication, a left $A$-linear
endomorphism of $A$. Together with the given left $B$-action this makes $M$ a
$(B,A)$-bimodule ([[def-bimodule]]): the right $A$-action satisfies the unit,
associativity and distributivity laws of [[def-left-and-right-modules]] and
commutes with the left $B$-action. No commutativity of the rings is assumed and
no choice is used.

## Facts & Assumptions

**Given:** Unital rings $A$ and $B$, an additive functor
$F:A\text{-}\mathbf{Mod}\to B\text{-}\mathbf{Mod}$, and the left $B$-module
$M=F(A)$.

[F1] A right $R$-module is an abelian group with an action $(m,r)\mapsto mr$
satisfying the right-handed analogues of the left-module axioms, in particular
$m1=m$, $(m+m')a=ma+m'a$, $m(a+a')=ma+ma'$ and $(ma)a'=m(aa')$
([[def-left-and-right-modules]]). Multiplication in a ring satisfies
$(cx)a=c(xa)$ and $x(a+a')=xa+xa'$.

[F2] An additive functor satisfies $F(f+g)=Ff+Fg$ for every parallel pair of
morphisms $f,g$ ([[def-additive-functor]]).

[F3] A functor satisfies $F(1_X)=1_{FX}$ and $F(g\circ f)=Fg\circ Ff$
([[def-functor-and-contravariant-functor]]).

[F4] An $(S,R)$-bimodule is an abelian group that is a left $S$-module and a
right $R$-module whose two actions commute ([[def-bimodule]]).

## Proof

**Proof technique:** direct.

1.1 For $a\in A$ the map $r_a:A\to A$, $r_a(x)=xa$, is a left $A$-module endomorphism, because $r_a(x+y)=r_a(x)+r_a(y)$ and $r_a(cx)=(cx)a=c(xa)=c\,r_a(x)$ by the ring laws. Hence $F(r_a):M\to M$ is a $B$-linear, in particular additive, endomorphism, and $ma:=F(r_a)(m)$ defines a map $M\times A\to M$ with $(m+m')a=ma+m'a$ for all $m,m'\in M$. [F1, F3]

1.2 Unit law: $r_1=\mathrm{id}_A$ because $x1=x$, so $m1=F(\mathrm{id}_A)(m)=F(1_A)(m)=1_M(m)=m$ for every $m\in M$. [F1, F3]

1.3 Associativity: $r_{aa'}=r_{a'}\circ r_a$ because $x(aa')=(xa)a'$, so functoriality gives $F(r_{aa'})=F(r_{a'})F(r_a)$ and hence $m(aa')=(ma)a'$ for all $m\in M$ and $a,a'\in A$. [F1, F3]

1.4 Additivity in the ring variable: $r_{a+a'}=r_a+r_{a'}$ because $x(a+a')=xa+xa'$, and additivity of $F$ gives $F(r_{a+a'})=F(r_a)+F(r_{a'})$, so $m(a+a')=ma+ma'$. [F1, F2]

2.1 Commutation with the left $B$-action: for $b\in B$ and $m\in M$ we have $b(ma)=b\bigl(F(r_a)(m)\bigr)=F(r_a)(bm)=(bm)a$, since the morphism $F(r_a)$ of $B\text{-}\mathbf{Mod}$ is $B$-linear. [F4, given, step 1.1]

3.1 Steps 1.1-1.4 make $M$ a right $A$-module for the assignment $(m,a)\mapsto ma$, and step 2.1 shows that this right $A$-action commutes with the given left $B$-action; by [F4] the abelian group $M$ is a $(B,A)$-bimodule. [F1, F4, step 1.1, step 1.2, step 1.3, step 1.4, step 2.1] ∎
