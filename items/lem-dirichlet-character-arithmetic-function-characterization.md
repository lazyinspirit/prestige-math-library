---
id: lem-dirichlet-character-arithmetic-function-characterization
kind: lemma
title: "Arithmetic characterization of Dirichlet characters modulo q"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-dirichlet-character-modulo-q, lem-dirichlet-character-extension-well-defined]
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "Andrew V. Sutherland, Number Theory I, Definition 18.4 and Definition 18.6"
      url: "https://ocw.mit.edu/courses/18-785-number-theory-i-fall-2021/mit18_785f21_full_lec.pdf"
    - title: "Kiran S. Kedlaya, Notes on Analytic Number Theory, section 3.1"
      url: "https://kskedlaya.org/ant/chap-lfunc.html"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

A function $\chi:\mathbb Z\to\mathbb C$ comes from a Dirichlet character modulo
$q$ if and only if all of the following hold:

1. $\chi$ is $q$-periodic.
2. $\chi(mn)=\chi(m)\chi(n)$ for all integers $m,n$.
3. $\chi(n)=0$ exactly when $(n,q)>1$.
4. $\chi(1)=1$.

## Facts & Assumptions

**Given:** A positive integer $q$ and a function $\chi:\mathbb Z\to\mathbb C$.

[L1] Every Dirichlet character modulo $q$ is extended by zero from a
homomorphism on $(\mathbb Z/q\mathbb Z)^\times$
([[def-dirichlet-character-modulo-q]]).

[L2] That extension is representative-independent, $q$-periodic, and vanishes
exactly on the nonunits modulo $q$
([[lem-dirichlet-character-extension-well-defined]]).

## Proof

**Proof technique:** direct.

1.1 Assume first that $\chi$ comes from a Dirichlet character modulo $q$. Periodicity and the support condition are exactly [L2]. If $(m,q)>1$ or $(n,q)>1$, then both $\chi(mn)$ and $\chi(m)\chi(n)$ are $0$ by [L2]. If both are coprime to $q$, then [L1] gives $\chi(mn)=\bar\chi(\bar m\bar n)=\bar\chi(\bar m)\bar\chi(\bar n)=\chi(m)\chi(n)$. Also $\chi(1)=\bar\chi(\bar1)=1$ because every homomorphism sends the identity to the identity. [L1, L2, given, algebra]

1.2 Conversely, assume properties 1-4. If $(n,q)=1$, define $\bar\chi(\bar n):=\chi(n)$. This is well defined because property 1 makes $\chi$ constant on residue classes modulo $q$, and property 3 shows that only unit classes receive nonzero values. For unit classes $\bar m,\bar n$, property 2 gives $\bar\chi(\bar m\bar n)=\chi(mn)=\chi(m)\chi(n)=\bar\chi(\bar m)\bar\chi(\bar n)$, so $\bar\chi$ is a homomorphism $(\mathbb Z/q\mathbb Z)^\times\to\mathbb C^\times$; property 4 makes it unital. Extending this homomorphism by zero recovers the original $\chi$ by property 3. [given, algebra]

2.1 Step 1.1 proves necessity and step 1.2 proves sufficiency. [step 1.1, step 1.2] ∎
