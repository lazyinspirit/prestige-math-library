---
id: lem-an-antipode-is-unique
kind: lemma
title: "Uniqueness of the antipode"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-bialgebra-counit-and-antipode
aliases: []
dependency_level: 1
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Pavel Etingof and Mykola Semenyakin, A Brief Introduction to Quantum Groups (lecture notes, arXiv:2106.05252v3)"
      url: "https://arxiv.org/pdf/2106.05252v3"
      locator: "§2.2.1, Proposition 2.2(iv), printed p. 4: the counit and antipode are uniquely determined by the coproduct."
    - title: "Richard Borcherds, Mark Haiman, Theo Johnson-Freyd, Nicolai Reshetikhin and Vera Serganova, Berkeley Lectures on Lie Groups and Quantum Groups (book-length lecture notes, last updated 18 January 2024)"
      url: "https://categorified.net/LieQuantumGroups.pdf"
      locator: "Ch. 12, Remark 12.1.2.3, printed p. 274: the antipode is unique because it is an inverse in the convolution monoid."
pipeline_run: frontier-43-complex-representation-15
---

## Statement

Let $(A,m,\eta,\Delta,\varepsilon)$ be a bialgebra over a commutative ring $R$ ([[def-bialgebra-counit-and-antipode]]) and let $S,S':A\to A$ be antipodes. Then $S=S'$. Thus a bialgebra admits at most one Hopf algebra structure with its fixed multiplication, unit, coproduct and counit. Every antipode also satisfies $S(1_A)=1_A$.

## Facts & Assumptions

**Given:** A bialgebra $(A,m,\eta,\Delta,\varepsilon)$ over a commutative ring $R$ and two antipodes $S,S'$.

[F1] The multiplication $m$ is associative and the coproduct $\Delta$ is coassociative ([[def-bialgebra-counit-and-antipode]]).

[F2] The counit identities are $(\varepsilon\otimes\operatorname{id})\Delta=\operatorname{id}=(\operatorname{id}\otimes\varepsilon)\Delta$ ([[def-bialgebra-counit-and-antipode]]).

[F3] The unit map $\eta$ and the algebra maps $\Delta,\varepsilon$ are unital, so $\Delta(1_A)=1_A\otimes1_A$ and $\eta(\varepsilon(1_A))=1_A$ ([[def-bialgebra-counit-and-antipode]]).

[F4] Each antipode $T$ satisfies $m(T\otimes\operatorname{id})\Delta=\eta\circ\varepsilon=m(\operatorname{id}\otimes T)\Delta$ ([[def-bialgebra-counit-and-antipode]]).

## Proof

**Proof technique:** Use uniqueness of a two-sided inverse in the convolution monoid of endomorphisms.

1.1 For $f,g\in\operatorname{Hom}_R(A,A)$ define $f\star g:=m\circ(f\otimes g)\circ\Delta$. Coassociativity of $\Delta$ and associativity of $m$ give $(f\star g)\star h=f\star(g\star h)$ for all $f,g,h$. [given, F1, algebra]

1.2 The map $e:=\eta\circ\varepsilon$ is a two-sided unit for $\star$: for every $f$ and $a$, $(e\star f)(a)=\sum\varepsilon(a_{(1)})f(a_{(2)})=f(a)$ and $(f\star e)(a)=\sum f(a_{(1)})\varepsilon(a_{(2)})=f(a)$, by the two counit identities and $R$-linearity of $f$. [F2, algebra]

1.3 Evaluating either antipode equation for $S$ at $1_A$, and using $\Delta(1_A)=1_A\otimes1_A$ and $e(1_A)=1_A$, gives $S(1_A)1_A=e(1_A)=1_A$. Hence $S(1_A)=1_A$. [given, F3, F4, algebra]

2.1 By [F4], $S\star\operatorname{id}=e=\operatorname{id}\star S'$; using [F1] and step 1.2, $S=S\star e=S\star(\operatorname{id}\star S')=(S\star\operatorname{id})\star S'=e\star S'=S'$. Therefore the antipode is unique, and the stated bialgebra has at most one Hopf structure. [step 1.1, step 1.2, F4, algebra] ∎
