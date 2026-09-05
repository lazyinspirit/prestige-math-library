---
id: cor-dirichlet-character-residue-class-indicator
kind: corollary
title: "A residue-class indicator from character sums"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-dirichlet-character-orthogonality]
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "Kiran S. Kedlaya, Notes on Analytic Number Theory, Chapter 4"
      url: "https://kskedlaya.org/ant/chap-primes-in-ap.html"
    - title: "Leonard Tomczak, Analytic Number Theory, Corollary 4.3"
      url: "https://math.berkeley.edu/~ltomczak/notes/Mich2022/AnaNT_Notes.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

Let $(a,q)=1$. Then for every integer $n$,

$$\frac1{\varphi(q)}\sum_{\chi\bmod q}\overline{\chi(a)}\chi(n)= \begin{cases} 1,&n\equiv a\pmod q,\\ 0,&n\not\equiv a\pmod q. \end{cases}$$

## Facts & Assumptions

**Given:** A reduced residue class $a$ modulo $q$ and an integer $n$.

[L1] For unit classes $u,v$ modulo $q$, $\sum_{\chi\bmod q}\chi(u)\overline{\chi(v)}=\varphi(q)$ when $u=v$ and $0$ otherwise ([[thm-dirichlet-character-orthogonality]]).

## Proof

**Proof technique:** direct.

1.1 If $(n,q)>1$, then every Dirichlet character has $\chi(n)=0$, so the sum is $0$, and this matches the fact that $n$ cannot be congruent to the reduced class $a$. If $(n,q)=1$, then both $a$ and $n$ are unit classes modulo $q$ and [L1] applies with $u=n$ and $v=a$. [L1, given, algebra]

2.1 In the unit case from step 1.1, [L1] gives $\sum_{\chi}\overline{\chi(a)}\chi(n)=\varphi(q)$ exactly when $n\equiv a\pmod q$, and $0$ otherwise. Dividing by $\varphi(q)$ yields the indicator formula. [step 1.1, L1, algebra] ∎
