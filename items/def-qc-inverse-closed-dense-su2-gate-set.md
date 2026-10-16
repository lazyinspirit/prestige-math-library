---
id: def-qc-inverse-closed-dense-su2-gate-set
kind: definition
title: Inverse-Closed Dense SU(2) Gate Set
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
provenance:
  statement: ai-altered
  proof: not-applicable
deps:
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
justified_by: []
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Christopher M. Dawson and Michael A. Nielsen, The Solovay–Kitaev Algorithm, arXiv:quant-ph/0505030v2"
      url: https://arxiv.org/pdf/quant-ph/0505030
      locator: Definition 1, §2, PDF pp. 2–4
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: https://arxiv.org/pdf/1907.09415
      locator: Ch. 2 §2.2, PDF pp. 26–29
---

## Definition

Write $SU(2):=\{M\in M_2(\mathbb C):M^*M=I_2,\det M=1\}$. An
**inverse-closed dense $SU(2)$ gate package** consists of a finite set
$G\subset SU(2)$ of exact matrices with finite labels such that $g^{-1}=g^*$
belongs to $G$ for each $g\in G$ and the subgroup $\langle G\rangle$ of finite
products is dense in $SU(2)$ in operator norm. A word is a finite ordered list
of labels; its value is the corresponding matrix product, and its length is
the number of labels.

For a compiler package, also fix a rational $0<\eta_0<1/4096$, a finite list
$\mathcal N_0$ of words, and an integer $L_0$ such that every $U\in SU(2)$ is
within operator-norm distance $\eta_0/4$ of the value of some word in
$\mathcal N_0$, and every listed word has length at most $L_0$. This is a
finite **base-net certificate**. Density proves that such a certificate
exists, but does not compute the list or its maximum word length.
