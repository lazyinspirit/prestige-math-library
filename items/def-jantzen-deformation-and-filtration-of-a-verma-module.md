---
id: def-jantzen-deformation-and-filtration-of-a-verma-module
kind: definition
title: "The Jantzen deformation and filtration of a Verma module"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-existence-and-uniqueness-of-the-shapovalov-form, def-weyl-vector-rho-for-a-chosen-positive-system, thm-pbw-model-of-a-verma-module]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Pavel Etingof, Representations of Lie Groups, §20.5"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
---

## Definition

Put $R=\mathbb C\llbracket t\rrbracket$ and
$\mathfrak b_R=\mathfrak b\otimes_{\mathbb C}R$.  Let
$R_{\lambda+t\rho}$ be the free rank-one $\mathfrak b_R$-module on which
$\mathfrak n^+_R$ acts by zero and $h\in\mathfrak h$ acts by
$\lambda(h)+t\rho(h)$.  The **Jantzen deformation** is
$$M_t(\lambda):=U(\mathfrak g_R)\otimes_{U(\mathfrak b_R)}R_{\lambda+t\rho}.$$
PBW makes each of its weight blocks finite free over $R$.  Applying the same
PBW-projection construction as for the Shapovalov form, now over $R$, gives a
contravariant $R$-bilinear form and hence a deformed Shapovalov map
$S_t:M_t(\lambda)\to M_t(\lambda)^\vee$, where the dual is taken
weight-spacewise.  Reduction modulo $t$ recovers the usual Shapovalov map on
$M(\lambda)$.  Define
$$M^i(\lambda)=\{\bar v\in M(\lambda):\text{some lift }v\text{ has }S_t(v)\in t^iM_t(\lambda)^\vee\}.$$
Thus $M^0(\lambda)=M(\lambda)\supseteq M^1(\lambda)\supseteq\cdots$; the definition is made weight-spacewise, where the PBW blocks are finite free $\mathbb C\llbracket t\rrbracket$-modules.
