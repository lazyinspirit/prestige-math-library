---
id: prop-quadratic-residue-is-representative-independent
kind: proposition
title: "Quadratic residuosity is representative-independent and the residues are the image of squaring"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-quadratic-residue-modulo-n, def-integers-modulo-n, def-unit-group-modulo-n-and-euler-totient, thm-unit-criterion-modulo-n, thm-integers-modulo-n-basic-algebra]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "H. Hackman, Elementary Number Theory, Chapter D, Section D.I"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
    - title: "W. Stein, Elementary Number Theory, Section 4.1"
      url: "https://wstein.org/ent/ent.pdf"
pipeline_run: null
---

## Statement

Let $n\ge2$. Whether an integer $a$ with $\gcd(a,n)=1$ is a quadratic residue modulo $n$ depends only on its class $[a]_n$. Moreover, the quadratic-residue classes are exactly

$$\{u^2:u\in(\mathbb Z/n)^\times\},$$

the image of squaring on the unit group.

## Facts & Assumptions

**Given:** An integer $n\ge2$ and integers representing unit classes modulo $n$.

[L1] For $\gcd(a,n)=1$, the integer $a$ is a quadratic residue modulo $n$ exactly when some integer $x$ satisfies $x^2\equiv a\pmod n$ ([[def-quadratic-residue-modulo-n]]).

[L2] Two classes in $\mathbb Z/n$ are equal exactly when their representatives are congruent modulo $n$ ([[def-integers-modulo-n]]).

[L3] The class $[a]_n$ is a unit exactly when $\gcd(a,n)=1$, and this condition depends only on the class ([[thm-unit-criterion-modulo-n]]).

[L4] A class $u\in\mathbb Z/n$ is a unit exactly when some $v\in\mathbb Z/n$ satisfies $uv=[1]_n$ ([[def-unit-group-modulo-n-and-euler-totient]]).

[L5] Multiplication makes $\mathbb Z/n$ a commutative monoid with identity $[1]_n$ ([[thm-integers-modulo-n-basic-algebra]]).

## Proof

**Proof technique:** direct.

1.1 If $a\equiv b\pmod n$ and $x^2\equiv a\pmod n$, then $[x]_n^2=[a]_n=[b]_n$, so $x^2\equiv b\pmod n$; reversing the roles of $a$ and $b$ gives the converse. [L1, L2, given]

2.1 By [L3], congruent representatives are simultaneously units. If $[x]_n^2=[a]_n$ and $[a]_n$ is a unit with inverse $v$, then $[x]_n([x]_nv)=[x]_n^2v=[1]_n$, so $[x]_n$ is a unit. Thus every quadratic-residue class lies in the image of squaring on $(\mathbb Z/n)^\times$. [L3, L4, L5, step 1.1]

3.1 Conversely, let $u=[x]_n$ be a unit with $u^2=[a]_n$. By [L4] there is $v$ with $uv=[1]_n$, so $u^2v^2=[1]_n$ by [L5] and $[a]_n=u^2$ is itself a unit; [L3] then gives $\gcd(a,n)=1$, which is the hypothesis [L1] requires. Since $[x]_n^2=[a]_n$, [L2] gives $x^2\equiv a\pmod n$, so [L1] makes $a$ a quadratic residue. Hence the quadratic-residue classes are exactly the displayed image. [L1, L2, L3, L4, L5, step 1.1, step 2.1] ∎
