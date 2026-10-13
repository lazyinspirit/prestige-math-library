---
id: def-cm-second-variation-of-the-action
kind: definition
title: "The fixed-endpoint second variation of a time-dependent action at a curve"
status: published
origin: pipeline
domain: mathematics
dependency_level: 2
deps: [def-cm-time-dependent-lagrangian-and-action, lem-cm-first-variation-formula]
dependency_roles:
  def-cm-time-dependent-lagrangian-and-action: mathematical-premise
  lem-cm-first-variation-formula: mathematical-premise
justified_by: [lem-cm-second-variation-formula]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Sections 5.1-5.2: the parametric family $q+\\epsilon\\eta$ of a path with fixed endpoints and stationarity as the vanishing of the first-order term, pages 143-147 of the PDF pagination; the second derivative of the family is not computed there"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
    - title: "D. Tong, Classical Dynamics (University of Cambridge Part II Mathematical Tripos), Section 2.1: first variation of the action with fixed endpoints, and the remark that the true path may be a minimum or a saddle point, printed page 12"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
---

## Definition

Let $n\ge1$, let $a<b$ be reals, let $U\subseteq\mathbb R^n$ be open and nonempty, and let
$(O,\mathcal L)$ be a time-dependent Lagrangian chart over $[a,b]\times U$ in the sense of
[[def-cm-time-dependent-lagrangian-and-action]]: $O\subseteq\mathbb R\times\mathbb R^n\times\mathbb R^n$
is open with

$$[a,b]\times U\times\mathbb R^n\subseteq O,$$

and $\mathcal L:O\to\mathbb R$ is of class $C^2$. Recall from that definition that a $C^2$ curve
$q:[a,b]\to U$ is the restriction to $[a,b]$ of a $C^2$ map on an open interval, that a
**variation** of $q$ is such a map $\eta:[a,b]\to\mathbb R^n$ with

$$\eta(a)=\eta(b)=0,$$

and that the **action** of a $C^2$ curve is

$$S(q):=\int_a^b\mathcal L\bigl(t,q(t),q'(t)\bigr)\,dt .$$

**The fixed-endpoint family.** Let $q:[a,b]\to U$ be a $C^2$ curve and let $\eta$ be a variation
of $q$. For $\varepsilon\in\mathbb R$ put

$$q_\varepsilon(t):=q(t)+\varepsilon\eta(t)\qquad(t\in[a,b]).$$

By clause 1 of [[lem-cm-first-variation-formula]] there is $\varepsilon_0>0$ such that
$q_\varepsilon$ is a $C^2$ admissible curve with values in $U$ for every
$\varepsilon\in(-\varepsilon_0,\varepsilon_0)$, so that the action $S(q_\varepsilon)$ is defined
for those $\varepsilon$.

**The second variation.** The **second variation of $S$ at $q$ in the direction $\eta$** is the
second derivative at $\varepsilon=0$ of the function $\varepsilon\mapsto S(q+\varepsilon\eta)$:

$$\delta^2S(q)[\eta,\eta]:=\frac{d^2}{d\varepsilon^2}\Big|_{\varepsilon=0}S(q+\varepsilon\eta).$$

This is a well-defined real number under the present hypotheses: the map
$\varepsilon\mapsto S(q+\varepsilon\eta)$ is twice differentiable at $0$, with the explicit
integral formula, by [[lem-cm-second-variation-formula]], which depends on this definition only
for the notation $\delta^2S(q)[\eta,\eta]$. The value is a single real number determined by the
pair $(q,\eta)$ and does not depend on the choice of the $C^2$ extensions of $q$ and $\eta$, since
the values of $q_\varepsilon$ and $q_\varepsilon'$ on $[a,b]$ are those of any such extension and
the derivative on $[a,b]$ is extension-independent
([[def-cm-time-dependent-lagrangian-and-action]]).

**Scope.** The definition introduces the one-parameter family and its second derivative at
$\varepsilon=0$, nothing else. It asserts nothing about minimising or maximising $S$, nothing
about the sign of $\delta^2S$, and no physical interpretation of $\mathcal L$; stationarity of a
curve is the separate first-order condition recorded in
[[def-cm-time-dependent-lagrangian-and-action]], and no equivalence with the vanishing of an
Euler-Lagrange expression is used at this point.

## Remarks

- **Normalisation.** The symbol $\delta^2S(q)[\eta,\eta]$ denotes the second derivative itself,
  not one half of it. The companion propositions of this page use exactly this normalisation when
  they compute second-variation values for the oscillator Lagrangian.

- **First and second variation together.** The first variation
  $\delta S(q)[\eta]=\frac{d}{d\varepsilon}\big|_0S(q+\varepsilon\eta)$ of
  [[def-cm-time-dependent-lagrangian-and-action]] and the second variation defined here are the
  two fixed-endpoint derivatives of the family $q+\varepsilon\eta$. For a stationary $q$ the
  first one vanishes and $\delta^2S(q)[\eta,\eta]$ is the leading second-order quantity computed
  by [[lem-cm-second-variation-formula]].
