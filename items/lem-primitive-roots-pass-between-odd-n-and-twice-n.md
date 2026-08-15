---
id: lem-primitive-roots-pass-between-odd-n-and-twice-n
kind: lemma
title: "For odd $n$, primitive-root existence is equivalent for $n$ and $2n$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-unit-group-chinese-remainder-decomposition, prop-primitive-root-iff-unit-group-generator, cor-totient-at-one-and-at-a-prime, def-unit-group-modulo-n-and-euler-totient]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Hackman, Elementary Number Theory, Lemma C.I.6"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
pipeline_run: null
---

## Statement

If $n\ge1$ is odd, then $n$ admits a primitive root if and only if $2n$ admits a primitive root.

## Facts & Assumptions

**Given:** An odd positive integer $n$.

[L1] CRT restricts to an isomorphism of unit groups for coprime positive moduli ([[thm-unit-group-chinese-remainder-decomposition]]).

[L2] A modulus admits a primitive root exactly when its unit group is cyclic ([[prop-primitive-root-iff-unit-group-generator]]).

[L3] For a prime $p$, $\varphi(p)=p-1$; in particular $\varphi(2)=1$ ([[cor-totient-at-one-and-at-a-prime]]).

[L4] The totient is the cardinality of the unit group: $\varphi(n)=\bigl|(\mathbb Z/n)^\times\bigr|$ ([[def-unit-group-modulo-n-and-euler-totient]]).

## Proof

**Proof technique:** direct.

1.1 Since $n$ is odd, [L1] gives $(\mathbb Z/2n)^\times\cong(\mathbb Z/2)^\times\times(\mathbb Z/n)^\times$. [L1]

1.2 By [L3], $\varphi(2)=1$, and by [L4] that number is $\bigl|(\mathbb Z/2)^\times\bigr|$, so the first factor is trivial and the right-hand side is isomorphic to $(\mathbb Z/n)^\times$. [L3, L4, algebra]

2.1 Therefore the two unit groups are cyclic simultaneously, and [L2] converts this into the asserted equivalence of primitive-root existence. [step 1.1, step 1.2, L2] ∎
