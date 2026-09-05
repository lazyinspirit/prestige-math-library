---
id: lem-nonprincipal-dirichlet-character-complete-sum
kind: lemma
title: "A nonprincipal character has zero complete sum"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-principal-dirichlet-character, lem-dirichlet-character-values]
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "Kiran S. Kedlaya, Notes on Analytic Number Theory, Lemma 3.2"
      url: "https://kskedlaya.org/ant/chap-lfunc.html"
    - title: "Andrew V. Sutherland, Number Theory I, Lemma 18.12"
      url: "https://ocw.mit.edu/courses/18-785-number-theory-i-fall-2021/mit18_785f21_full_lec.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

Let $\chi$ be a Dirichlet character modulo $q$ with $\chi\ne\chi_0$. Then for
every complete residue system $R$ modulo $q$,

$$\sum_{r\in R}\chi(r)=0.$$

## Facts & Assumptions

**Given:** A nonprincipal Dirichlet character $\chi$ modulo $q$.

[L1] The principal character is $1$ on integers coprime to $q$ and $0$
otherwise ([[def-principal-dirichlet-character]]).

[L2] If $(a,q)=1$, then $\chi(a)$ is a root of unity and hence may differ from
$1$ only as a nonzero scalar ([[lem-dirichlet-character-values]]).

## Proof

**Proof technique:** direct.

1.1 Since $\chi\ne\chi_0$, [L1] shows that some unit $a$ modulo $q$ satisfies $\chi(a)\ne1$. Let $S:=\sum_{r\in R}\chi(r)$. Multiplication by the unit $a$ permutes the residue classes modulo $q$, so $aR$ is again a complete residue system modulo $q$. [L1, L2, given, choose]

2.1 Reindex over $aR$ and use multiplicativity on units: $S=\sum_{r\in R}\chi(ar)=\chi(a)\sum_{r\in R}\chi(r)=\chi(a)S$. Because $\chi(a)\ne1$, this gives $(\chi(a)-1)S=0$, hence $S=0$. [step 1.1, L2, algebra] ∎
