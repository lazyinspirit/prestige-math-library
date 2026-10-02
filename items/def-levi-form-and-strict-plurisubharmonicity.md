---
id: def-levi-form-and-strict-plurisubharmonicity
kind: definition
title: "The Levi form and strict plurisubharmonicity"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [rem-complex-euclidean-space-dictionary, def-wirtinger-operators-in-several-complex-variables]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-10-02
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, §2.3"
      url: "https://www.jirka.org/scv/scv.pdf"
    - title: "Harold P. Boas, Lecture Notes on Several Complex Variables, §3.3.1"
      url: "https://haroldpboas.gitlab.io/courses/650-2007c/notes.pdf"
pipeline_run: null
---

## Definition

Fix an integer $m\ge1$. In this Definition, use one-based aliases for the canonical coordinates of
[[rem-complex-euclidean-space-dictionary]]: for $1\le j\le m$, the symbols
$z_j$ and $v_j$ denote the canonical coordinate and vector component with
index $j-1$. The derivatives $\partial_{z_j}$ and
$\partial_{\overline z_j}$ denote the corresponding canonical Wirtinger
operators of [[def-wirtinger-operators-in-several-complex-variables]] with
index $j-1$; all derivatives below use these aliases.

Let $\Omega\subseteq\mathbb C^m$ be open and let $u\in C^2(\Omega,\mathbb R)$.
For $a\in\Omega$ and $v\in\mathbb C^m$, the **Levi form** of $u$ at $a$ in the
direction $v$ is

$$\mathcal L_u(a;v):=\sum_{j=1}^m\sum_{k=1}^m \frac{\partial^2 u}{\partial z_j\partial\overline z_k}(a)\,v_j\overline{v_k}.$$

The function $u$ is **strictly plurisubharmonic** when

$$\mathcal L_u(a;v)>0\qquad\text{for every }a\in\Omega\text{ and every }v\ne0.$$

## Remarks

The Levi form is Hermitian in the vector variable. Semipositivity,
$\mathcal L_u(a;v)\ge0$ for all $v$, is the condition that characterizes
ordinary plurisubharmonicity in the $C^2$ setting.
