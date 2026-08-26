---
id: def-isometric-proper-and-cobounded-actions-on-metric-spaces
kind: definition
title: "Isometric, proper, and cobounded actions on metric spaces"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-group-action, def-metric-space]
justified_by: []
aliases: []
landmark: true
verification:
  audited: 2026-08-26
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "C. Löh, Geometric Group Theory, Sections 4.4 and 5.1"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf"
    - title: "C. Drutu and M. Kapovich, Lectures on Geometric Group Theory, Chapter 5"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf"
pipeline_run: null
---

## Definition

Let $G$ act on a metric space $(X,d)$ by a left action ([[def-group-action]],
[[def-metric-space]]).

The action is **isometric** if every $g \in G$ acts by an isometry, that is,
$$d(g \cdot x,\ g \cdot y) = d(x,y) \qquad \text{for all } x,y \in X.$$

The action is **proper** if for every bounded subsets $B,C \subseteq X$, the
transporter set
$$\{\, g \in G : (g \cdot B) \cap C \ne \varnothing \,\}$$
is finite.

The action is **cobounded** if some bounded subset $B \subseteq X$ has
$$G \cdot B := \bigcup_{g \in G} g \cdot B = X.$$
If the action is isometric and $X$ is nonempty, coboundedness is equivalent to
the existence of $x_0 \in X$ and $R \ge 0$ such that every point of $X$ lies
within distance at most $R$ of the orbit $G \cdot x_0$.
