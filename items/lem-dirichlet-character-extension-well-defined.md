---
id: lem-dirichlet-character-extension-well-defined
kind: lemma
title: "Extension by zero is well defined and periodic"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-dirichlet-character-modulo-q]
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "Andrew V. Sutherland, Number Theory I, section 18.2"
      url: "https://ocw.mit.edu/courses/18-785-number-theory-i-fall-2021/mit18_785f21_full_lec.pdf"
    - title: "Kiran S. Kedlaya, Notes on Analytic Number Theory, section 3.1"
      url: "https://kskedlaya.org/ant/chap-lfunc.html"
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

Let $\chi$ be a Dirichlet character modulo $q$. Then the zero extension from
[[def-dirichlet-character-modulo-q]] is independent of the chosen integer
representative, is periodic modulo $q$, and satisfies $\chi(n)=0$ exactly when
$(n,q)>1$.

## Facts & Assumptions

**Given:** A modulus $q\ge1$ and a Dirichlet character $\chi$ modulo $q$ in the
sense of [[def-dirichlet-character-modulo-q]].

[L1] A Dirichlet character modulo $q$ is a homomorphism
$\bar\chi:(\mathbb Z/q\mathbb Z)^\times\to\mathbb C^\times$, extended by zero on
nonunits ([[def-dirichlet-character-modulo-q]]).

## Proof

**Proof technique:** direct.

1.1 If $m\equiv n\pmod q$, then $m$ and $n$ determine the same residue class in $\mathbb Z/q\mathbb Z$. Hence $(m,q)=1$ iff $(n,q)=1$, because both conditions say exactly that this common class is a unit. When they are units, [L1] gives $\chi(m)=\bar\chi(\bar m)=\bar\chi(\bar n)=\chi(n)$; when they are nonunits, [L1] gives $\chi(m)=\chi(n)=0$. [L1, given, algebra]

2.1 Step 1.1 is exactly representative-independence, and applying it to $m=n+q$ gives $\chi(n+q)=\chi(n)$ for every integer $n$, so $\chi$ is $q$-periodic. The final clause of [L1] says $\chi(n)=0$ precisely on the nonunit residue classes, equivalently exactly when $(n,q)>1$. [L1, step 1.1, algebra] ∎
