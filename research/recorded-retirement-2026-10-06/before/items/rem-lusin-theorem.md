---
id: rem-lusin-theorem
kind: remark
title: "Lusin's theorem"
status: published
origin: session
proved_here: false
deps: [rem-lebesgue-measure-and-integral, rem-egorov-theorem]
justified_by: []
forward_refs: []
aliases: [rem-luzin-theorem]
landmark: false
short: "A measurable function is continuous on the complement of a set of small measure"
verification:
  precheck: n/a
  sources_checked:
    date: 2026-07-26
    scope: citations
    by: session-audit
sources:
  scraped: []
  references:
    - title: "Lusin's theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lusin%27s_theorem"
    - title: "Luzin C-property (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Luzin-C-property"
pipeline_run: null
---

## Statement

Let $E \subseteq \mathbb{R}^n$ be measurable with $\lambda_n(E) < \infty$ and let
$f : E \to \mathbb{R}$ be measurable. Then for every $\varepsilon > 0$ there is a
closed set $K \subseteq E$ with

$$\lambda_n(E \setminus K) < \varepsilon \qquad \text{and} \qquad f|_{K} \text{ continuous}.$$

$K$ may be taken compact when $E$ is bounded, and $f|_K$ extends to a continuous
function on all of $\mathbb{R}^n$ by Tietze. The assertion is about the
restriction $f|_K$ and not about continuity of $f$ at the points of $K$: the
Dirichlet function $\mathbf{1}_{\mathbb{Q}}$ is nowhere continuous on
$\mathbb{R}$, yet its restriction to the closed set $\mathbb{R} \setminus U$,
where $U$ is an open set of measure below $\varepsilon$ containing $\mathbb{Q}$,
is identically zero and so continuous.

## Remarks

**Not proved in this library.** It is recorded with citations and used in no
proof here.

**What would prove it.** Regularity of Lebesgue measure, which supplies closed
sets from inside and open sets from outside, applied to the preimages of a
countable base of intervals, plus Egorov's theorem
([[rem-egorov-theorem]]) in the version where a measurable function is an almost
everywhere limit of simple functions. Both ingredients are measure-theoretic
([[rem-lebesgue-measure-and-integral]]).

**Which page it serves.** The continuity page and the uniform convergence page,
where the question "how badly can a function fail to be continuous" is answered
only for specific examples (Dirichlet, Thomae, Volterra). Lusin's theorem is the
general answer: measurability is exactly continuity after deleting a set of
arbitrarily small measure, which is Littlewood's second principle. It also
belongs beside the Riesz-Markov-Kakutani theorem
([[rem-riesz-markov-kakutani]]), since both express that continuous functions
are dense in the measurable world.
