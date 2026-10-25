---
id: def-gateaux-and-frechet-derivatives-of-a-functional
kind: definition
title: "Gateaux and Frechet derivatives of a functional"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [def-frechet-derivative-between-banach-spaces, def-bounded-linear-operator, def-dual-space-of-a-normed-space]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Section 13.1, (13.1)-(13.6) and Examples 13.1-13.2, printed pp. 293-295"
    - title: "Viktor Grigoryan, Math 246B Partial Differential Equations, UCSB 2011 (complete 31-page course notes)"
      url: "https://web.math.ucsb.edu/~grigoryan/246B/lecs/246B.pdf"
      locator: "Section 4.1, printed pp. 26-27"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Let $X$ be a real Banach space, $U\subseteq X$ open and $F:U\to\mathbb R$.
**Frechet differentiability.** $F$ is **Frechet differentiable at $u\in U$** if there is a bounded linear functional $DF(u)\in X^*$ ([[def-frechet-derivative-between-banach-spaces]], [[def-bounded-linear-operator]], [[def-dual-space-of-a-normed-space]]) with
$$F(u+h)=F(u)+DF(u)h+o(\|h\|)\qquad(h\to0),$$
that is, $\lim_{h\to0}|F(u+h)-F(u)-D F(u)h|/\|h\|=0$; such $DF(u)$ is unique.
**Gateaux differentiability.** $F$ is **Gateaux differentiable at $u$ in the direction $v\in X$** if the limit
$$\delta F(u;v):=\lim_{\varepsilon\to0,\ \varepsilon\ne0}\frac{F(u+\varepsilon v)-F(u)}{\varepsilon}\in\mathbb R$$
exists; $F$ is **Gateaux differentiable at $u$** if that limit exists for every $v\in X$ and the resulting map $v\mapsto\delta F(u;v)$ is a bounded linear functional, written $\delta F(u)\in X^*$ and called the **Gateaux (variational) derivative** of $F$ at $u$.
**Relation and caveat.** Frechet differentiability at $u$ implies Gateaux differentiability at $u$ with $\delta F(u)=DF(u)$, because $F(u+\varepsilon v)-F(u)=DF(u)(\varepsilon v)+o(|\varepsilon|)$; the converse fails, and the directional limits $\delta F(u;v)$ need not be linear or bounded in $v$ when only the one-dimensional limits exist. For each fixed $v$ the function $\varphi(\varepsilon):=F(u+\varepsilon v)$ satisfies $\varphi'(0)=\delta F(u;v)$.
