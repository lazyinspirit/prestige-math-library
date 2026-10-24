---
id: def-john-domain-and-john-constant
kind: definition
title: "John domains and the John constant"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [def-arc-length-function, def-absolute-line-integral-over-a-rectifiable-path, def-metric-interior-closure-boundary, cor-euclidean-closed-balls-and-spheres-are-compact, lem-distance-to-set-is-lipschitz, def-countable-choice]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Juha Kinnunen, Sobolev Spaces (Aalto University, 2026, complete graduate lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf"
      locator: "Chapter 5 §5.4, Definition 5.31 and Remarks 5.32, printed pp. 140-141: John domains, the distinguished point, the relative-distance condition and the interior-cone remark."
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Chapter 1 §1.1, printed pp. 3-5: open sets, connectedness and rectifiable curves used in the convention below."
---

## Definition

Assume Countable Choice. Let $n\ge2$ and let $\Omega\subseteq\mathbb R^n$ be
open, bounded and nonempty. Its boundary $\partial\Omega$ is then a nonempty
compact subset of $\mathbb R^n$ contained in a sufficiently large closed ball
([[def-metric-interior-closure-boundary]],
[[cor-euclidean-closed-balls-and-spheres-are-compact]]), and the distance
$\operatorname{dist}(x,\partial\Omega)$ is defined for every $x$ and is a
$1$-Lipschitz function of $x$ ([[lem-distance-to-set-is-lipschitz]]).

Rectifiable curves, their arclength functions are used with the conventions of [[def-arc-length-function]].

**John domain and John constant.** A pair $(\Omega,x_0)$ with $x_0\in\Omega$
satisfies the **John condition** with constant $c\ge1$ if for every $x\in\Omega$
there is a rectifiable curve $\gamma:[0,l]\to\Omega$ parametrised by arclength,
with $\gamma(0)=x$, $\gamma(l)=x_0$ and
$$\operatorname{dist}(\gamma(t),\partial\Omega)\ge c^{-1}|x-\gamma(t)|\qquad\text{for every }t\in[0,l].$$
Write $c_J(\Omega,x_0)$ for the infimum of the admissible constants $c\ge1$;
with the convention $\inf\varnothing=+\infty$, this value belongs to $[1,+\infty]$. The domain $\Omega$ is a
**John domain** if $c_J(\Omega,x_0)<\infty$ for some $x_0\in\Omega$, and
$c_J(\Omega,x_0)$ is the **John constant of the pair** $(\Omega,x_0)$. The
estimates below use an admissible constant, never the finiteness of the
infimum alone, and whether the infimum is attained is immaterial.

**Arclength form.** If $\gamma$ is arclength parametrised from $x$, then
$t\ge|\gamma(t)-x|$ for $0\le t\le l$, because the straight segment from $x$ to
$\gamma(t)$ is no longer than the curve. Hence a curve satisfying the
arclength normalisation $\operatorname{dist}(\gamma(t),\partial\Omega)\ge
c^{-1}t$ for all $t$ also satisfies the displayed relative-distance condition
with the same constant $c$. Only this implication is used here; the chain construction below uses the displayed relative-distance condition.

**Connectedness.** A John domain is path-connected and hence connected: given
$x,y\in\Omega$, choose curves $\gamma_x$ from $x$ to $x_0$ and $\gamma_y$ from
$y$ to $x_0$ as in the definition (under Countable Choice the two curves may be
chosen simultaneously) and traverse $\gamma_x$ followed by the reverse of
$\gamma_y$. No regularity of $\partial\Omega$ is assumed beyond what the
definition uses.
