---
id: def-levi-form-and-strict-plurisubharmonicity
kind: definition
title: "The Levi form and strict plurisubharmonicity"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
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
