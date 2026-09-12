---
id: "def-order-of-a-distribution-on-a-compact-set"
kind: "definition"
title: "Order of a distribution on a compact set"
deps: ["thm-local-finite-order-characterization-of-distributions"]
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

For $u\in\mathcal D'(\Omega)$ and compact $K\subseteq\Omega$, the **order of $u$ on $K$** is the least integer $m\ge0$ for which there exists $C\ge0$ satisfying $|u(\varphi)|\le C p_m(\varphi)$ for all $\varphi\in\mathcal D_K$. The set of such integers is nonempty by [[thm-local-finite-order-characterization-of-distributions]], so its least element exists without choice. If $u$ vanishes on $\mathcal D_K$, including the empty or empty-interior compact cases, its order on $K$ is assigned to be zero.

The distribution has **global finite order** if there is one integer $m\ge0$ such that for every compact $K\subseteq\Omega$ there is a finite $C_K\ge0$ with this bound of order $m$. The exponent is uniform; the constants need not be. Its global order is the least such exponent when one exists, and is infinity otherwise. The zero distribution has global order zero. Compactwise finite order by itself does not assert a uniform exponent over all compacts. An order-zero bound controls test values; it does not by definition identify the distribution with a function or a measure.
