---
id: def-cm-time-dependent-lagrangian-and-action
kind: definition
title: "A time-dependent Lagrangian chart, its action functional and its fixed-endpoint first variations"
status: published
origin: pipeline
domain: mathematics
dependency_level: 0
deps: [def-ck-euclidean-maps-and-diffeomorphisms, def-ck-and-multi-index-notation-in-several-variables, def-directional-and-partial-derivatives, def-jacobian-matrix-and-gradient, def-interval, def-darboux-integral, def-vector-valued-derivative-and-integral, def-derivative]
dependency_roles:
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-ck-and-multi-index-notation-in-several-variables: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-interval: mathematical-premise
  def-darboux-integral: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-derivative: mathematical-premise
justified_by: [lem-cm-first-variation-formula]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Sections 5.1-5.2 (Introduction to the Calculus of Variations; Euler's Differential Equation) and Sections 6.1-6.4 (Lagrangian Dynamics: the d'Alembert and Hamilton principles)"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
    - title: "D. Tong, Classical Dynamics (University of Cambridge Part II Mathematical Tripos), Section 2.1 'The Principle of Least Action' (the action functional, its first variation and Lagrange's equations), printed pages 10-13"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
---

## Definition

**Chart data.** Let $n\ge1$, let $a<b$ be reals and let $U\subseteq\mathbb R^n$ be open and
nonempty. Let $O\subseteq\mathbb R\times\mathbb R^n\times\mathbb R^n$ be an open set with

$$[a,b]\times U\times\mathbb R^n\subseteq O,$$

and let $\mathcal L:O\to\mathbb R$ be of class $C^2$
([[def-ck-euclidean-maps-and-diffeomorphisms]]). The pair $(O,\mathcal L)$ is a **time-dependent
Lagrangian chart over $[a,b]\times U$**. The three slots of $\mathcal L$ are written
$(t,q,v)$, so that $t$ is the time, $q$ the configuration and $v$ the velocity; the open set
$O$ has the three coordinate blocks of sizes $1,n,n$.

**Admissible curves and variations.** A map $q:[a,b]\to U$ is **of class $C^2$** when there are
$\varepsilon>0$ and a $C^2$ map $\tilde q:(a-\varepsilon,b+\varepsilon)\to\mathbb R^n$ with
$\tilde q|_{[a,b]}=q$ and $\tilde q(t)\in U$ for every $t\in[a,b]$; the derivative $q'$ and the
second derivative $q''$ below are those of any such extension, and they are independent of the
extension on $[a,b]$. A **variation** of a $C^2$ curve $q$ is a map $\eta:[a,b]\to\mathbb R^n$ of
class $C^2$ in the same sense with

$$\eta(a)=\eta(b)=0 .$$

Thus the admissible curves and variations are the restrictions to $[a,b]$ of $C^2$ maps on a
common open interval. This closed-interval extension convention is stipulated here; on the
open interval each component has continuous derivatives through order two in the sense of
[[def-ck-and-multi-index-notation-in-several-variables]].

**The action.** For a $C^2$ curve $q:[a,b]\to U$ the map $t\mapsto\mathcal L(t,q(t),q'(t))$ is
continuous on $[a,b]$, because $q,q'$ are continuous and $\mathcal L$ is continuous
([[def-vector-valued-derivative-and-integral]]); it is therefore Darboux integrable
([[def-darboux-integral]]). The **action** of $q$ is the real number

$$S(q):=\int_a^b\mathcal L\bigl(t,q(t),q'(t)\bigr)\,dt .$$

**First variation.** For a $C^2$ curve $q$ and a variation $\eta$ the curve $q_\varepsilon:=q+\varepsilon\eta$
takes values in $U$ for all sufficiently small $|\varepsilon|$; this is proved in
[[lem-cm-first-variation-formula]] and is *not* part of the present definition. The **first
variation of $S$ at $q$ in the direction $\eta$** is the ordinary two-sided derivative at $\varepsilon=0$
of the function $\varepsilon\mapsto S(q+\varepsilon\eta)$, written

$$\delta S(q)[\eta]:=\frac{d}{d\varepsilon}\Big|_{\varepsilon=0}S(q+\varepsilon\eta),$$

whenever this derivative exists; [[lem-cm-first-variation-formula]] proves that it does exist
under the present hypotheses and computes it, so the notation denotes a single real number for
every pair $(q,\eta)$ arising here.

**Euler–Lagrange expression.** Let $\mathcal L_q(t,q,v)\in\mathbb R^n$ and
$\mathcal L_v(t,q,v)\in\mathbb R^n$ be the gradients of $\mathcal L$ in the second and third slots
([[def-jacobian-matrix-and-gradient]], [[def-directional-and-partial-derivatives]]). Since
$\mathcal L$ is $C^2$, the maps $t\mapsto\mathcal L_v(t,q(t),q'(t))$ are $C^1$ and
$t\mapsto\mathcal L_q(t,q(t),q'(t))$ is continuous on $[a,b]$. The **Euler–Lagrange expression of
$\mathcal L$ along $q$** is the continuous map

$$E_{\mathcal L}(q)(t):=\mathcal L_q\bigl(t,q(t),q'(t)\bigr)-\frac{d}{dt}\Bigl(\mathcal L_v\bigl(t,q(t),q'(t)\bigr)\Bigr)\in\mathbb R^n.$$

**Stationarity.** A $C^2$ curve $q$ is **stationary for $S$** when

$$\delta S(q)[\eta]=0\qquad\text{for every variation }\eta.$$

**Scope.** The definition introduces only chart data, the action and its first variation. It
asserts nothing about minimising $S$, nothing about the existence of stationary curves and nothing
about any physical interpretation of $\mathcal L$; the equivalence of stationarity with the
vanishing of $E_{\mathcal L}(q)$ is the theorem [[thm-cm-stationarity-iff-euler-lagrange]], and
the distinction between stationary and minimising curves is recorded in
[[rem-cm-scope-of-stationarity]].

## Remarks

- The Lagrangian is allowed to depend on $t$, which is what makes the chart suitable for systems
  with prescribed time-dependent constraints, moving frames or external drifts; the chart
  formulation with the extension convention above is the one used by the consuming classical
  mechanics pages.

- If $U=\mathbb R^n$ and $\mathcal L$ is the restriction of a $C^2$ function on
  $\mathbb R\times\mathbb R^n\times\mathbb R^n$, then $O$ may be taken to be all of
  $\mathbb R^{1+2n}$ and no extension discussion is needed. The general formulation keeps $O$
  open so that the Legendre map of [[def-cm-legendre-map-in-a-time-dependent-chart]] can be
  studied on the same domain.
