---
id: def-bilateral-symbol-and-bounded-sequence-space
kind: definition
title: "The two-sign bilateral shift space, its coding map, and the ball of bounded bilateral real sequences"
status: published
origin: pipeline
domain: mathematics
dependency_level: 2
deps: [def-cm-bilateral-shift-space-and-cylinders, lem-cm-bilateral-shift-metric-and-sequential-compactness, def-function-space, def-metric-space, def-bounded-set, lem-sup-unique, def-complete-ordered-field, def-abs-value, def-integer-power, def-series, thm-geometric-series]
dependency_roles:
  def-cm-bilateral-shift-space-and-cylinders: mathematical-premise
  lem-cm-bilateral-shift-metric-and-sequential-compactness: mathematical-premise
  def-function-space: mathematical-premise
  def-metric-space: mathematical-premise
  def-bounded-set: mathematical-premise
  lem-sup-unique: mathematical-premise
  def-complete-ordered-field: mathematical-premise
  def-abs-value: mathematical-premise
  def-integer-power: mathematical-premise
  def-series: mathematical-premise
  thm-geometric-series: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "G. Teschl, Ordinary Differential Equations and Dynamical Systems, AMS Graduate Studies in Mathematics 140 (author's preliminary online edition, complete PDF), Section 11.5, the two-sided shift on finitely many symbols with the metric (11.35)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf"
    - title: "P. Cvitanović, R. Artuso, R. Mainieri, G. Tanner, G. Vattay, Chaos: Classical and Quantum (ChaosBook.org, edition 17.6.8, complete PDF), Chapter 14 Section 14.6, symbolic dynamics and the binary itinerary of a trajectory"
      url: "https://chaosbook.org/chapters/ChaosBook.pdf"
    - title: "R. Devaney and Z. Nitecki, Shift automorphisms in the Hénon mapping, Communications in Mathematical Physics 67 (1979) 137-146, the coding of an invariant Cantor set by bi-infinite binary sequences"
      url: "https://projecteuclid.org/journals/communications-in-mathematical-physics/volume-67/issue-2/Shift-automorphisms-in-the-H%C3%A9non-mapping/cmp/1103905161.pdf"
verification:
  precheck: pass
---

## Definition

Write $\Sigma_{\pm}:=\{-1,+1\}$ and

$$X_{\pm}\ :=\ \Sigma_{\pm}^{\mathbb Z}\ =\ \{\,s\ :\ s \text{ is a function } \mathbb Z\to\Sigma_{\pm}\,\},$$

with the function-set convention of [[def-function-space]]; for $s\in X_{\pm}$ write $s_k:=s(k)$. The elements of $X_{\pm}$ are called **two-sign bilateral sequences**.

**Coding correspondence with the two-symbol space.** Let

$$\varphi:X_{\pm}\longrightarrow\{0,1\}^{\mathbb Z},\qquad \varphi(s)_k:=\frac{s_k+1}{2}\in\{0,1\},$$

and let $X_2:=\{0,1\}^{\mathbb Z}$, $d_2$ and $\sigma_2$ be the set, the metric expression and the shift map of [[def-cm-bilateral-shift-space-and-cylinders]]. The formulas $\varphi(s)_k=(s_k+1)/2$ and $\varphi^{-1}(t)_k=2t_k-1$ define maps $X_{\pm}\to X_2$ and $X_2\to X_{\pm}$ that are inverse to each other, coordinate by coordinate.

**Metric expression on $X_{\pm}$.** Define

$$D_{\pm}(s,t):=d_2\bigl(\varphi(s),\varphi(t)\bigr)\qquad(s,t\in X_{\pm}).$$

Unwinding the series of [[def-cm-bilateral-shift-space-and-cylinders]] and using $|\varphi(s)_k-\varphi(t)_k|=\tfrac12|s_k-t_k|$ for every $k\in\mathbb Z$ gives the explicit expression

$$D_{\pm}(s,t)=\sum_{k\ge 0}2^{-(k+1)}\,|s_k-t_k|\;+\;\sum_{k\ge 1}2^{-(k+1)}\,|s_{-k}-t_{-k}| .$$

Both series converge by comparison with the geometric series $\sum_{k\ge0}2^{-k}=2$ ([[def-series]], [[thm-geometric-series]], [[def-integer-power]], [[def-abs-value]]), because $|s_k-t_k|\in\{0,2\}$ for every $k$; hence $D_{\pm}(s,t)$ is a well-defined nonnegative real number. Whether $D_{\pm}$ is a metric is **not** asserted here; it is proved in the companion lemma on this page, together with the statement that $\varphi$ is an isometry of $(X_{\pm},D_{\pm})$ onto $(X_2,d_2)$.

**The shift.** The **(bilateral) shift** of $X_{\pm}$ is

$$S_{\pm}:X_{\pm}\longrightarrow X_{\pm},\qquad S_{\pm}(s)_k:=s_{k+1}\qquad(k\in\mathbb Z,\ s\in X_{\pm}).$$

For $m\in\mathbb Z$ its iterate satisfies $S_{\pm}^{m}(s)_k=s_{k+m}$; in particular $S_{\pm}$ is a bijection with inverse $S_{\pm}^{-1}(s)_k=s_{k-1}$, and $S_{\pm}=\varphi^{-1}\circ\sigma_2\circ\varphi$.

**Bounded bilateral sequences.** A function $x:\mathbb Z\to\mathbb R$ is **bounded** when its range $\{x_k:k\in\mathbb Z\}$ is a bounded subset of $\mathbb R$ ([[def-bounded-set]]). Write

$$\ell^{\infty}(\mathbb Z):=\{\,x:\mathbb Z\to\mathbb R\ :\ x \text{ is bounded}\,\},\qquad \|x\|_{\infty}:=\sup\{\,|x_k|\ :\ k\in\mathbb Z\,\}.$$

The set $\{|x_k|:k\in\mathbb Z\}$ whose supremum is taken is nonempty and bounded above ([[def-bounded-set]]), so $\|x\|_\infty$ is a well-defined nonnegative real number ([[lem-sup-unique]], [[def-complete-ordered-field]]). For $R\ge0$ put

$$B_R:=\{\,x\in\ell^{\infty}(\mathbb Z)\ :\ \|x\|_{\infty}\le R\,\}.$$

Thus $B_R$ is the closed ball of radius $R$ in the supremum norm, and $\|x\|_\infty\le R$ is by definition the statement that $|x_k|\le R$ for every $k\in\mathbb Z$ ([[def-bounded-set]], [[def-abs-value]]).

## Remarks

- The only difference between $(X_{\pm},D_{\pm},S_{\pm})$ and the $(X_2,d_2,\sigma_2)$ is the relabelling $0\leftrightarrow -1$, $1\leftrightarrow+1$ of the two symbols: $\varphi$ is a bijection satisfying $\varphi\circ S_{\pm}=\sigma_2\circ\varphi$. Every metric, compactness or chaos statement about the two-symbol shift therefore transfers through $\varphi$ once it is known that $\varphi$ is an isometry, which is the content of [[lem-bounded-bilateral-sequence-ball-is-complete]] clause 3.

- No measure, probability or invariant measure on $X_{\pm}$ is introduced; all statements on this page are topological or metric.

- The space $\ell^{\infty}(\mathbb Z)$ and its closed ball $B_R$ are used to state the square-root recurrence of [[lem-coded-quadratic-recurrence-is-a-contraction]]; nothing in this definition asserts that $B_R$ is complete, which is a separate lemma.
