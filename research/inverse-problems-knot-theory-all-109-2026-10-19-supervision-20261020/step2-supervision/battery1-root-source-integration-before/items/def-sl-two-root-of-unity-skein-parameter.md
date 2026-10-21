---
id: def-sl-two-root-of-unity-skein-parameter
kind: definition
title: "The BHMV root-of-unity skein parameter"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-kauffman-bracket-skein-module-of-a-three-manifold
justified_by: []
aliases: []
proof_strategy: not-applicable
axiom_use: "Choice-free: the parameter and finite label set are specified from one fixed root of unity."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "C. Blanchet, N. Habegger, G. Masbaum, and P. Vogel, Topological Quantum Field Theories Derived from the Kauffman Bracket, Topology 34 (1995), §§1–3"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bhmv.pdf"
    - title: "Louis H. Kauffman and Sostenes L. Lins, Temperley-Lieb Recoupling Theory and Invariants of 3-Manifolds, Chapters 2–3"
      url: "https://api.pageplace.de/preview/DT0400.9781400882533_A27764847/preview-9781400882533_A27764847.pdf"
    - title: "Joshua Chen, The Temperley-Lieb Categories and Skein Modules, §§2.1 and 5.1–5.4"
      url: "https://arxiv.org/pdf/1502.06845v1"
---

## Definition

Fix an even integer $p\ge4$ and a primitive $2p$-th root of unity $A\in\mathbb C$. Put

$$
\zeta=A^2,\qquad q=-\zeta,\qquad r=p/2,\qquad
\delta=-A^2-A^{-2}=q+q^{-1}.
$$

The coefficient field after specialization is $\mathbb C$, and the Kauffman bracket loop coefficient is $\delta$ in the framed-link relation $[L\sqcup O]=\delta[L]$. Define the quantum integers by $[0]=0$, $[1]=1$, and $[j+1]=\delta[j]-[j-1]$ for $j\ge1$. Since $q^2=A^4$ has order $r\ge2$, these quantum integers also satisfy

$$
[j]=\frac{q^j-q^{-j}}{q-q^{-1}}=(-1)^{j-1}\frac{A^{2j}-A^{-2j}}{A^2-A^{-2}}.
$$

The BHMV simple-label convention is the finite set

$$
\mathcal J_p=\{0,1,\ldots,r-2\}.
$$

The pivotal loop and coefficient conventions throughout this page are the displayed $\delta$ and $\mathbb C$; no zero quantum integer is inverted.

## Definition references

[[def-kauffman-bracket-skein-module-of-a-three-manifold|Framed-link skein module and its loop coefficient]]

[Blanchet, Habegger, Masbaum, and Vogel, *Topological Quantum Field Theories Derived from the Kauffman Bracket*, §§1–3](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bhmv.pdf)

[Kauffman and Lins, *Temperley-Lieb Recoupling Theory and Invariants of 3-Manifolds*, Chapters 2–3](https://api.pageplace.de/preview/DT0400.9781400882533_A27764847/preview-9781400882533_A27764847.pdf)

[Chen, *The Temperley-Lieb Categories and Skein Modules*, §§2.1 and 5.1–5.4](https://arxiv.org/pdf/1502.06845v1)
