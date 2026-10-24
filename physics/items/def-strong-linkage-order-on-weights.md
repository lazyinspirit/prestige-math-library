---
id: def-strong-linkage-order-on-weights
kind: definition
title: "The strong linkage order on weights"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-root-reflections-and-the-weyl-group-action, def-weyl-vector-rho-for-a-chosen-positive-system]
verification:
  audited: 2026-09-07
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Pavel Etingof, Representations of Lie Groups, §15.2"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
---

## Definition

For the shifted (dot) action
$$s_\alpha\mathbin\cdot\eta:=s_\alpha(\eta+\rho)-\rho,$$
write $\mu\uparrow\lambda$ if there are weights $\lambda=\eta_0\succ\eta_1\succ\cdots\succ\eta_r=\mu$ and positive roots $\alpha_j$ such that
$$\eta_j=s_{\alpha_j}\mathbin\cdot\eta_{j-1}\quad\hbox{and}\quad\langle\eta_{j-1}+\rho,\alpha_j^\vee\rangle\in\mathbb Z_{>0}$$
for every $j$. The empty chain is allowed, so $\lambda\uparrow\lambda$.
