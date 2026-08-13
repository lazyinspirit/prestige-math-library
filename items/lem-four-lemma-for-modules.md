---
id: lem-four-lemma-for-modules
kind: lemma
title: "The injective and surjective Four Lemmas"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-exact-and-short-exact-sequences-of-modules, def-injection-surjection-bijection]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-13
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

Consider a commutative diagram of module homomorphisms with exact rows:

```tikzcd
A \arrow[r, "u"] \arrow[d, "a"'] & B \arrow[r, "v"] \arrow[d, "b"'] & C \arrow[r, "w"] \arrow[d, "c"'] & D \arrow[r, "x"] \arrow[d, "d"'] & E \arrow[d, "e"] \\
A' \arrow[r, "u'"'] & B' \arrow[r, "v'"'] & C' \arrow[r, "w'"'] & D' \arrow[r, "x'"'] & E'
```

The following implications hold.

1. If $a$ is surjective and $b,d$ are injective, then $c$ is injective.
2. If $b,d$ are surjective and $e$ is injective, then $c$ is surjective.

## Facts & Assumptions

**Given:** The diagram in the statement, with both rows exact.

**Diagram:** $u\colon A\to B$, $v\colon B\to C$, $w\colon C\to D$, $x\colon D\to E$, $u'\colon A'\to B'$, $v'\colon B'\to C'$, $w'\colon C'\to D'$, $x'\colon D'\to E'$, $a\colon A\to A'$, $b\colon B\to B'$, $c\colon C\to C'$, $d\colon D\to D'$, $e\colon E\to E'$.

[C1] $b\circ u=u'\circ a$ (given).

[C2] $c\circ v=v'\circ b$ (given).

[C3] $d\circ w=w'\circ c$ (given).

[C4] $e\circ x=x'\circ d$ (given).

[F1] Exactness identifies the kernel of each horizontal arrow with the image of the preceding horizontal arrow ([[def-exact-and-short-exact-sequences-of-modules]]).

[F2] Injectivity and surjectivity have their elementwise meanings ([[def-injection-surjection-bijection]]).

## Proof

**Proof technique:** direct.

1.1 Assume $a$ is surjective and $b,d$ are injective, and let $z\in C$ satisfy $c(z)=0$. Then [C3] gives $d(w(z))=w'(c(z))=0$, so injectivity of $d$ gives $w(z)=0$. [assume-hyp, C3, F2]

1.2 Assume $b,d$ are surjective and $e$ is injective, and let $z'\in C'$. By surjectivity of $d$, choose $q\in D$ with $d(q)=w'(z')$. [assume-hyp, F2, choose]

2.1 Exactness gives $y\in B$ with $v(y)=z$. By [C2], $v'(b(y))=c(v(y))=0$, so exactness gives $y'\in A'$ with $u'(y')=b(y)$. [step 1.1, C2, F1, choose]

2.2 By [C4], $e(x(q))=x'(d(q))=x'w'(z')=0$; injectivity of $e$ gives $x(q)=0$. Exactness gives $z\in C$ with $w(z)=q$. [step 1.2, C4, F1, F2, choose]

3.1 Surjectivity of $a$ gives $y'=a(t)$ for some $t\in A$. Then [C1] gives $b(y-u(t))=0$; injectivity of $b$ gives $y=u(t)$, and exactness gives $z=v(y)=v(u(t))=0$. Thus $c$ is injective. [step 2.1, C1, F1, F2, choose]

3.2 Now $w'(c(z)-z')=d(w(z))-w'(z')=0$ by [C3], so exactness gives $y'\in B'$ with $v'(y')=c(z)-z'$. Surjectivity of $b$ gives $y'=b(y)$; then [C2] yields $c(z-v(y))=z'$. Thus $c$ is surjective. [step 1.2, step 2.2, C2, C3, F1, F2, choose]

4.1 Steps 1.1, 2.1, and 3.1 prove the injective Four Lemma, while steps 1.2, 2.2, and 3.2 prove the surjective Four Lemma. [step 3.1, step 3.2] ∎
