---
id: lem-coordinatewise-addition-and-negation-make-zp-a-topological-abelian-group
kind: lemma
title: "Coordinatewise addition and negation make Zp a topological abelian group"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-p-adic-integers-as-compatible-residue-classes]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jordan Bell, The profinite completion of the integers, the p-adic integers, and Prufer p-groups"
      url: "https://jordanbell.info/LaTeX/mathematics/profinite/"
    - title: "Gareth Wilkes, Profinite Groups and Group Cohomology lecture notes"
      url: "https://www.dpmms.cam.ac.uk/~grw46/LectureNotes.pdf"
---

## Statement

If $x=(x_n)$ and $y=(y_n)$ are elements of $\mathbb Z_p$, then

$$ x+y:=(x_n+y_n)_n,\qquad -x:=(-x_n)_n $$

are again elements of $\mathbb Z_p$. With these operations and the
inverse-limit topology, $\mathbb Z_p$ is a topological abelian group.

## Facts & Assumptions

**Given:** Two elements $x=(x_n)$ and $y=(y_n)$ of $\mathbb Z_p$.

[F1] An element of $\mathbb Z_p$ is a compatible tuple
$(x_n)_{n\ge1}\in\prod_n\mathbb Z/p^n\mathbb Z$ with
$x_{n+1}\bmod p^n=x_n$ for every $n$ ([[def-p-adic-integers-as-compatible-residue-classes]]).

## Proof

**Proof technique:** direct.

1.1 Because reduction modulo $p^n$ is a group homomorphism, compatibility of the tuples in [F1] gives $(x_{n+1}+y_{n+1})\bmod p^n=x_n+y_n$ and $(-x_{n+1})\bmod p^n=-x_n$ for every $n$. Thus $x+y$ and $-x$ are again compatible tuples, so they lie in $\mathbb Z_p$. [F1, given, algebra]

2.1 Associativity, commutativity, the zero element, and additive inverses all hold coordinatewise because they hold in every finite quotient $\mathbb Z/p^n\mathbb Z$. The inverse-limit topology is the subspace topology from the product of the discrete coordinate groups, so coordinatewise addition and negation are continuous. Hence $\mathbb Z_p$ is a topological abelian group. [F1, step 1.1, algebra] ∎
