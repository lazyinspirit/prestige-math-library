---
id: lem-dihedral-operation-is-a-quandle
kind: lemma
title: "The dihedral operation is a quandle"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [ def-quandle-and-knot-coloring ]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "V. O. Manturov, Knot Theory, Chapter 5, §§5.1–5.2, printed pp. 49–55"
      url: "https://varf.ru/rudn/manturov/book.pdf"
    - title: "J. Scott Carter, A Survey of Quandle Ideas, §2, arXiv:1002.4429v2, pp. 3–5"
      url: "https://arxiv.org/pdf/1002.4429"
dependency_level: 1
---

## Statement

For an odd prime $p$, let $\mathbb F_p=\mathbb Z/p\mathbb Z$ and define
$a*b=2b-a$. Then $(\mathbb F_p,*)$ is a quandle.

## Statement references

[[def-quandle-and-knot-coloring]].

[Manturov, *Knot Theory*, Chapter 5](https://varf.ru/rudn/manturov/book.pdf).

[Carter, *A Survey of Quandle Ideas*](https://arxiv.org/pdf/1002.4429).

## Facts & Assumptions

**Given:** An odd prime $p$ and $a,b,c\in\mathbb F_p$, with $a*b=2b-a$.

[F1] [[def-quandle-and-knot-coloring]]: a quandle has bijective right translations, is idempotent, and is right self-distributive.

[A1] $p$ is prime, so a nonzero residue class modulo $p$ has an inverse.

## Proof

1.1 Addition and multiplication of residue classes are well-defined because congruence modulo $p$ is preserved by sums and products. If $\bar r\ne0$ in $\mathbb Z/p\mathbb Z$, choose an integer representative $r$ not divisible by $p$. Since $p$ is prime, $\gcd(r,p)=1$; Bézout's identity gives integers $u,v$ with $ur+vp=1$, so $\bar u\bar r=1$. Hence the residue classes form a field. For fixed $b$, the right translation is $R_b(a)=2b-a$ and satisfies $R_b(R_b(a))=2b-(2b-a)=a$. It is therefore a bijection. [given, A1, construct]

1.2 Idempotency holds because $a*a=2a-a=a$. [given, F1, algebra]

2.1 For all $a,b,c$, $(a*b)*c=2c-(2b-a)=a-2b+2c$, while $(a*c)*(b*c)=2(2c-b)-(2c-a)=a-2b+2c$. Thus right self-distributivity holds; together with step 1.1 and step 1.2, [F1] gives the quandle axioms. [F1, step 1.1, step 1.2, algebra] ∎

## Sources

[[def-quandle-and-knot-coloring]].
