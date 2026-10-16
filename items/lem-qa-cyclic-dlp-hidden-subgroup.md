---
id: lem-qa-cyclic-dlp-hidden-subgroup
kind: lemma
title: Cyclic discrete logarithm hides a rank-one subgroup
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 16
deps:
  - def-qa-finite-cyclic-discrete-logarithm-problem
  - def-qa-finite-abelian-hidden-subgroup-problem
  - lem-group-power-laws
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "None; the proof uses finite cyclic group arithmetic."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement

Let $G=\langle g\rangle$ have exact order $q\ge2$, let $x=g^a$, and define $f:\mathbb Z_q\times\mathbb Z_q\to G$ by $f(u,v)=g^u x^v$. Then
$$
f(u,v)=f(u',v')\quad\Longleftrightarrow\quad (u-u',v-v')\in H,\qquad H:=\langle(-a,1)\rangle.
$$
Thus the fibers of $f$ are exactly the additive cosets of the rank-one subgroup $H$ in the finite abelian group $\mathbb Z_q^2$.

## Facts & Assumptions

**Given:** A cyclic group $G=\langle g\rangle$ of exact order $q\ge2$, $x=g^a$, and $u,v,u',v'\in\mathbb Z_q$.

[F1] The cyclic discrete-log instance has $\operatorname{ord}(g)=q$ and $x=g^a$ for a unique $a\in\{0,\ldots,q-1\}$ ([[def-qa-finite-cyclic-discrete-logarithm-problem]]).

[F2] The additive hidden-subgroup promise defines a fiber by the relation that two inputs differ by an element of the subgroup ([[def-qa-finite-abelian-hidden-subgroup-problem]]).

[F3] Integer powers in a group satisfy the product and exponent laws ([[lem-group-power-laws]]).

## Proof

1.1 If $f(u,v)=f(u',v')$, then cancellation and $x=g^a$ give $g^{u-u'}x^{v-v'}=e$, hence $g^{(u-u')+a(v-v')}=e$. Since $g$ has exact order $q$ by [F1], this is equivalent to $(u-u')+a(v-v')\equiv0\pmod q$. [given, F1, F3, algebra]

2.1 Put $t=v-v'\in\mathbb Z_q$. The congruence in step 1.1 is equivalent to $u-u'=-at$, so $(u-u',v-v')=t(-a,1)\in H$. Conversely, if the difference is $t(-a,1)$, then $(u-u')+a(v-v')=0$ in $\mathbb Z_q$, and [F3] gives $f(u,v)=f(u',v')$. [F2, step 1.1, F3, algebra] ∎
