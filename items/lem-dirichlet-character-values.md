---
id: lem-dirichlet-character-values
kind: lemma
title: "Character values on units are roots of unity"
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
    - title: "Kiran S. Kedlaya, Notes on Analytic Number Theory, section 3.1"
      url: "https://kskedlaya.org/ant/chap-lfunc.html"
    - title: "Andrew V. Sutherland, Number Theory I, section 18.2"
      url: "https://ocw.mit.edu/courses/18-785-number-theory-i-fall-2021/mit18_785f21_full_lec.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

Let $\chi$ be a Dirichlet character modulo $q$. If $(n,q)=1$, then $\chi(n)$ is
a root of unity and $\overline{\chi(n)}=\chi(n)^{-1}$. If $(n,q)>1$, then
$\chi(n)=0$.

## Facts & Assumptions

**Given:** A Dirichlet character $\chi$ modulo $q$ and an integer $n$.

[L1] A Dirichlet character modulo $q$ is a homomorphism on
$(\mathbb Z/q\mathbb Z)^\times$, extended by zero on nonunits
([[def-dirichlet-character-modulo-q]]).

[L2] The extension vanishes exactly when $(n,q)>1$
([[lem-dirichlet-character-extension-well-defined]]).

[A1] The finite group $(\mathbb Z/q\mathbb Z)^\times$ has finite order, so every
element of it has finite order.

## Proof

**Proof technique:** direct.

1.1 If $(n,q)>1$, then [L2] gives $\chi(n)=0$. Assume now that $(n,q)=1$. By [A1], the unit class $\bar n$ has some positive order $m$, so $\bar n^m=\bar1$. Applying the homomorphism of [L1] gives $\chi(n)^m=\bar\chi(\bar n)^m =\bar\chi(\bar1)=1$. Thus $\chi(n)$ is a root of unity, hence nonzero. [L1, L2, A1, given, algebra]

2.1 For a nonzero complex number on the unit circle, complex conjugation equals reciprocal. Since step 1.1 gives $\chi(n)^m=1$, the value $\chi(n)$ lies on the unit circle, so $\overline{\chi(n)}=\chi(n)^{-1}$. Together with the nonunit case from step 1.1, this proves the statement. [step 1.1, algebra] ∎
