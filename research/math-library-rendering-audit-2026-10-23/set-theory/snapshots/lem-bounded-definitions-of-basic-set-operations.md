---
id: lem-bounded-definitions-of-basic-set-operations
kind: lemma
title: "Absolute basic set operations and relations"
status: published
origin: pipeline
deps: [thm-delta-zero-absoluteness-for-transitive-sets]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
proof_strategy: direct
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Freiburg, Course Notes for Set Theory and Independence Proofs (2024) — Propositions 3.5.6/3.5.8 and Lemma 3.5.7 pp51–52"
      url: "https://home.mathematik.uni-freiburg.de/maxwell/coursenotes-settheoryandindependenceproofs.pdf"
---


## Statement

The graphs of empty set, subset, unordered pair, singleton, union, intersection (with $\bigcap\varnothing=\varnothing$), difference, Kuratowski ordered pair, Cartesian product, relation domain/range, functionhood, evaluation and injection have $\Delta_0$ definitions. Thus their values agree between transitive membership structures whenever the input and output sets are in the smaller domain. This is graph agreement, not an assertion that an arbitrary transitive domain is closed under these operations.

## Facts & Assumptions

[F1] [[thm-delta-zero-absoluteness-for-transitive-sets]]: If $M\subseteq N$ are nonempty transitive sets, every $\Delta_0$ formula is absolute between them on parameter tuples from $M$. No internal set-theory axioms are required. The analogous assertion for definable transitive classes is a formula-by-formula scheme.

## Proof

**Given:** Actual sets, the Kuratowski pair convention, and nonempty transitive domains for the concluding absoluteness assertion.

1.1 Write $Z(z):=\forall u\in z\,(u\ne u)$, $S(x,y):=\forall u\in x\,(u\in y)$, and $P(z,x,y):=x\in z\land y\in z\land\forall u\in z\,(u=x\lor u=y)$. These say respectively $z=\varnothing$, $x\subseteq y$, and $z=\{x,y\}$. The singleton graph is $P(z,x,x)$. Every quantifier displayed is bounded; extensional equality with the indicated sets follows from the two inclusions encoded in each formula. [given, algebra]

2.1 The union graph is $\forall v\in a\,\forall u\in v\,(u\in z)\land\forall u\in z\,\exists v\in a\,(u\in v)$. The intersection graph is $(Z(a)\land Z(z))\lor[\exists v\in a\,(v=v)\land\forall u\in z\,\forall v\in a\,(u\in v)\land\forall v\in a\,\forall u\in v\,((\forall w\in a\,u\in w)\to u\in z)]$. If $a$ is nonempty, any member of the actual intersection lies in any chosen member $v$ of $a$, so the last clause puts it in $z$; the other clause gives the reverse inclusion. For difference use $\forall u\in z\,(u\in a\land u\notin b)\land\forall u\in a\,(u\notin b\to u\in z)$. [step 1.1, algebra]

2.2 Put $K(p,x,y):=\exists s\in p\,\exists t\in p\,(P(s,x,x)\land P(t,x,y)\land P(p,s,t))$. It says exactly $p=\{\{x\},\{x,y\}\}$. To bound coordinates without assuming a union object in the domain, abbreviate $\exists x\in\bigcup p\,\chi$ by $\exists t\in p\,\exists x\in t\,\chi$, and its universal version by two bounded universals. Write $\operatorname{Pair}(p):=\exists x\in\bigcup p\,\exists y\in\bigcup p\,K(p,x,y)$. This includes the case $x=y$, where $p$ is a singleton. [step 1.1, algebra]

3.1 The product graph $z=a\times b$ is $\forall p\in z\,\exists x\in a\,\exists y\in b\,K(p,x,y)\land\forall x\in a\,\forall y\in b\,\exists p\in z\,K(p,x,y)$. Let $R(r):=\forall p\in r\,\operatorname{Pair}(p)$ and $E(r,x,y):=\exists p\in r\,K(p,x,y)$. The graph $d=\operatorname{dom}(r)$ includes $R(r)$, $\forall x\in d\,\exists p\in r\,\exists y\in\bigcup p\,K(p,x,y)$, and $\forall p\in r\,\forall x\in\bigcup p\,\forall y\in\bigcup p\,(K(p,x,y)\to x\in d)$. Interchange $x,y$ for the range. Both clauses are necessary: one excludes surplus coordinates and the other prevents missing coordinates. [step 2.2, algebra]

4.1 Functionhood is $R(r)$ together with: for all $p,q\in r$, all $x,y\in\bigcup p$ and all $u,v\in\bigcup q$, $(K(p,x,y)\land K(q,u,v)\land x=u)\to y=v$. Injection replaces the last implication by $y=v\to x=u$, while retaining functionhood. Evaluation at $x$ with value $y$ is functionhood and $E(r,x,y)$. For $r:a\to b$ also require domain $a$ by the preceding graph and $\forall p\in r\,\forall x,y\in\bigcup p\,(K(p,x,y)\to y\in b)$. These formulas quantify only through supplied sets. [step 3.1, algebra]

5.1 Expanding each finite abbreviation gives bounded membership formulas. Their truth therefore agrees by bounded absoluteness, with every input and candidate output in the smaller transitive structure. Each formula characterizes its actual graph by the calculations above, so an output present there has the same value outside. No clause quantifies over all subsets of an input or produces an output set inside a domain. [F1, step 1.1, step 2.1, step 2.2, step 3.1, step 4.1] ∎
