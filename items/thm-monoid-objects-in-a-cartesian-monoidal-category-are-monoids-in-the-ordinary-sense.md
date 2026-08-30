---
id: thm-monoid-objects-in-a-cartesian-monoidal-category-are-monoids-in-the-ordinary-sense
kind: theorem
title: "Monoid objects in a cartesian category are internal monoids; in Set they are ordinary monoids"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-monoid-object-and-comonoid-object-in-a-monoidal-category, def-semigroup-and-monoid, thm-a-category-with-finite-products-is-monoidal]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. Mac Lane, Categories for the Working Mathematician, Chapter VII.3"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Chapter 2.3 and 2.7"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
pipeline_run: null
---

## Statement

Let $\mathcal C$ have finite products and let $M$ be an object of $\mathcal C$.
With the cartesian monoidal structure from
[[thm-a-category-with-finite-products-is-monoidal]], a monoid object structure
on $M$ is exactly a multiplication morphism
$\mu:M\times M\to M$ and a unit morphism $e:1\to M$ satisfying the ordinary
associativity and unit equations after the canonical product rebracketings are
inserted. In particular, in $\mathbf{Set}$ these are exactly ordinary monoids in
the sense of [[def-semigroup-and-monoid]].

## Facts & Assumptions

**Given:** A category $\mathcal C$ with finite products and an object $M$.

[L1] The cartesian monoidal structure on $\mathcal C$ uses product as tensor and a terminal object as unit ([[thm-a-category-with-finite-products-is-monoidal]]).

[L2] A monoid object is an object with multiplication and unit maps satisfying associativity and unit equations with the monoidal associator and unitors written explicitly ([[def-monoid-object-and-comonoid-object-in-a-monoidal-category]]).

[L3] An ordinary monoid is a set with an associative unital binary operation ([[def-semigroup-and-monoid]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the tensor is $M\times M$ and the unit is a terminal object $1$. So [L2] says exactly that a monoid object on $M$ is data $\mu:M\times M\to M$ and $e:1\to M$ satisfying the usual associative and left and right unit diagrams, with the only extra notation being the canonical rebracketing isomorphism $((M\times M)\times M)\cong M\times(M\times M)$. [given, L1, L2]

2.1 In $\mathbf{Set}$, a morphism $1\to M$ is the choice of an element $e\in M$, and a morphism $M\times M\to M$ is a binary operation on the underlying set. The three diagrams from step 1.1 then say exactly $\mu(\mu(x,y),z)=\mu(x,\mu(y,z))$ and $\mu(e,x)=x=\mu(x,e)$ for all $x,y,z\in M$. [step 1.1, L3, algebra]

3.1 Therefore monoid objects in a cartesian monoidal category are associative unital multiplications internal to that cartesian structure, and in $\mathbf{Set}$ they are exactly ordinary monoids. [step 1.1, step 2.1, L2, L3] ∎
