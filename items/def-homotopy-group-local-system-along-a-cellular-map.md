---
id: def-homotopy-group-local-system-along-a-cellular-map
kind: definition
title: Homotopy-group local system along a cellular map
status: draft
origin: pipeline
deps: ["def-fiber-transport-and-monodromy-action", "def-local-system-of-r-modules-and-its-pullback", "prop-higher-homotopy-basepoint-transport-and-moving-homotopies", "lem-high-relative-cells-do-not-change-lower-homotopy"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: James Davis and Paul Kirk, Lecture Notes in Algebraic Topology
      url: https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf
      locator: Chapter 7, Sections 7.2--7.3 and 7.10, printed pages 168--173 and 188--193
---

## Definition

Let $n\geq2$, let $X$ be a CW complex, and let
$f:X^n\to Y$ be cellular. On $X^n$ define the **homotopy-group local
system along $f$** by

$$ (f^*\Pi_nY)_x=\pi_n(Y,f(x)),\qquad T_\gamma=\beta_{\overline{f\gamma}}:\pi_n(Y,f(x))\longrightarrow\pi_n(Y,f(y)) $$

for a path class $\gamma:x\to y$. The reversal is forced by the published
basepoint-transport convention, in which
$\beta_\rho:\pi_n(Y,\rho(1))\to\pi_n(Y,\rho(0))$. Endpoint-fixed homotopy
invariance and
$\beta_{\rho*\lambda}=\beta_\rho\beta_\lambda$ give
$T_{\gamma*\eta}=T_\eta T_\gamma$, so this is a covariant functor to abelian
groups.

## Extension from the skeleton

The pair $(X,X^n)$ has only cells of dimension at least $n+1\geq3$.
The published high-relative-cell lemma therefore shows that
$\Pi_1(X^n)\to\Pi_1(X)$ is an equivalence: it is bijective on components and
induces isomorphisms on all vertex groups. Consequently $f^*\Pi_nY$ extends
to a local system on $X$, uniquely up to a natural isomorphism whose
restriction to $X^n$ is the identity. An obstruction calculation must either
fix one such extension as coefficient data or use the equivalent
universal-cover module model. For a point outside $X^n$ its stalk is **not**
written $\pi_n(Y,f(x))$, since $f(x)$ is not defined there. This corrects the
ill-typed wording in the Step-1 scaffold.

For $n=1$, this page uses the construction only when the relevant
$\pi_1(Y)$ is abelian and all conjugation transport is trivial. Then the
system has trivial monodromy and is isomorphic to a constant abelian system
on each component. No nonabelian group is inserted into a cellular cochain
group. The definition itself chooses neither component basepoints nor a
set-indexed family of paths; any concrete coordinate extension is treated as
supplied data.

