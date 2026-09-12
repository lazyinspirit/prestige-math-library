---
id: "def-dirac-delta-and-its-derivatives"
kind: "definition"
title: "Dirac delta and its derivatives"
deps: ["def-distribution", "def-distributional-derivative"]
provenance:
  statement: "ai-altered"
  proof: "not-applicable"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - url: "https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      title: "Semyon Dyatlov, Lecture notes for 18.155 (2022)"
status: "draft"
origin: "pipeline"
---

## Definition

For $a\in\Omega$, the **Dirac distribution at $a$** is the complex-linear functional $\delta_a(\varphi)=\varphi(a)$ on $\mathcal D(\Omega)$, with the bilinear convention of [[def-distribution]]. It is continuous: the seminorm $q(\varphi)=|\varphi(a)|$ restricts on each $\mathcal D_K$ to a seminorm bounded by $p_0$ (and is zero if $a\notin K$), so it is one of the admissible seminorms defining the test topology.

Its derivatives are those of [[def-distributional-derivative]]:
$$\langle\partial^\alpha\delta_a,\varphi\rangle=(-1)^{|\alpha|}\partial^\alpha\varphi(a).$$
They are distributions by that definition; on each fixed-support stage the absolute value is at most $p_{|\alpha|}(\varphi)$. If $a\notin K$ all derivatives of the test vanish at $a$, so the bound has zero left side. For $\alpha=0$ this is $\delta_a$; a first derivative evaluates the negative first derivative of the test. No conjugation and no choice are involved. On the empty open set there is no permitted point $a$, rather than a new Dirac distribution. The sharp order of these distributions requires a test witness and is proved in the assigned example later.
