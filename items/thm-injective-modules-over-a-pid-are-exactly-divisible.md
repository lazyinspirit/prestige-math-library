---
id: thm-injective-modules-over-a-pid-are-exactly-divisible
kind: theorem
title: "Over a PID, injective modules are exactly divisible modules"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-divisible-module-over-an-integral-domain, def-principal-ideal-domain, thm-baer-criterion-for-injective-modules]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
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

Assume the Axiom of Choice through Baer's criterion. Over a principal ideal domain $R$, a module is injective if and only if it is divisible. In particular, an abelian group is an injective $\mathbb Z$-module if and only if it is divisible.

The implication from injective to divisible is choice-free; the converse inherits the Zorn-lemma use in Baer's criterion.

## Facts & Assumptions

**Given:** A principal ideal domain $R$ and an $R$-module $D$.

[F1] Divisibility means that for every $0\ne r\in R$ and $d\in D$, some $x$ satisfies $rx=d$ ([[def-divisible-module-over-an-integral-domain]]).

[F2] Every ideal of a PID is principal, and a PID is an integral domain ([[def-principal-ideal-domain]]).

[L1] Under AC, a module is injective exactly when maps from left ideals extend to $R$ ([[thm-baer-criterion-for-injective-modules]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $D$ is injective. For $0\ne r\in R$ and $d\in D$, define $f:rR\to D$ by $f(sr)=sd$. This is well defined because $R$ is a domain, and injectivity extends it to $F:R\to D$. [assume-hyp, F2, L1]

1.2 Conversely, suppose $D$ is divisible and let $f:J\to D$ be a homomorphism from an ideal. By [F2], $J=rR$. If $r=0$, $J=0$ and the zero map extends $f$; if $r\ne0$, put $d=f(r)$ and choose $x\in D$ with $rx=d$ by [F1]. [assume-hyp, F1, F2, choose]

2.1 With $x=F(1)$, one has $rx=F(r)=f(r)=d$, so $D$ is divisible by [F1]. [step 1.1, F1]

2.2 The homomorphism $F:R\to D$ defined by $F(s)=sx$ satisfies $F(sr)=s(rx)=sd=f(sr)$, so it extends $f$. Baer's criterion [L1] therefore makes $D$ injective. [step 1.2, L1, algebra]

3.1 Steps 1.1 and 2.1 prove that injective modules are divisible, while steps 1.2 and 2.2 prove that divisible modules are injective. Since $\mathbb Z$ is a PID and its modules are abelian groups, the specialization follows. [step 2.1, step 2.2] ∎
