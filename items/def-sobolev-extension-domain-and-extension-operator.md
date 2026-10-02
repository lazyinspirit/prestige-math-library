---
id: def-sobolev-extension-domain-and-extension-operator
kind: definition
title: Sobolev extension domains and extension operators
status: draft
origin: pipeline
deps: [def-sobolev-space-wkp-and-its-norm, lem-weak-derivative-linearity-locality-and-commutation, lem-weak-derivatives-are-unique-almost-everywhere, lem-sobolev-norm-is-well-defined-and-definite, def-countable-choice]
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  scraped: []
  references:
    - title: Juha Kinnunen, Sobolev Spaces (2026), Definition 3.42
      url: https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf
      locator: Chapter 3 §3.6, Definition 3.42, printed p. 84
    - title: Richard S. Laugesen, Linear Analysis and Partial Differential Equations (2020), Theorem 3.12
      url: https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf
      locator: Chapter 3 §3.6, Theorem 3.12, printed pp. 60–62
---

## Definition

Assume Countable Choice. Fix $k\in\mathbb N_0$, $1\le p\le\infty$, an open set
$\Omega\subseteq\mathbb R^n$ with $n\ge1$, and $\mathbb K\in\{\mathbb R,\mathbb C\}$.

**Restriction.** Let $F\in W^{k,p}(\mathbb R^n;\mathbb K)$ and let
$\alpha\in\mathbb N_0^n$ with $|\alpha|\le k$. By the restriction and locality
clause of
[[lem-weak-derivative-linearity-locality-and-commutation]], applied with
$V=\Omega$, the class $F|_\Omega$ lies in $W^{k,p}(\Omega;\mathbb K)$ and
$D^\alpha(F|_\Omega)=(D^\alpha F)|_\Omega$ almost everywhere on $\Omega$;
by [[lem-weak-derivatives-are-unique-almost-everywhere|the uniqueness of weak
derivatives]] the derivative class of the restriction is determined by the
class of $F$ alone. So restriction is a well-defined operation on Sobolev
classes, and the norm formula of [[def-sobolev-space-wkp-and-its-norm]] gives
$\|F|_\Omega\|_{W^{k,p}(\Omega)}\le\|F\|_{W^{k,p}(\mathbb R^n)}$, since each
restricted derivative has no larger $L^p$ norm.

**Extension domain.** For fixed $k,p,\Omega$ and scalar field $\mathbb K$, call
$\Omega$ a **$W^{k,p}$-extension domain** if there is a bounded linear operator
$$E:W^{k,p}(\Omega;\mathbb K)\longrightarrow W^{k,p}(\mathbb R^n;\mathbb K)$$
such that, for every $u\in W^{k,p}(\Omega;\mathbb K)$,
$$(Eu)|_\Omega=u\qquad\text{as an almost-everywhere class on }\Omega.$$
Equivalently, the restriction map in the first paragraph possesses a bounded
linear right inverse. Boundedness of $E$ is the finiteness of the operator
norm
$$\|E\|=\sup\{\|Eu\|_{W^{k,p}(\mathbb R^n)}:u\in W^{k,p}(\Omega;\mathbb K),\|u\|_{W^{k,p}(\Omega)}\le1\};$$
the displayed right-inverse identity is an identity of $L^p(\Omega)$ classes,
not of pointwise values.

The operator, and the numerical bound $\|E\|$, may depend on $k$, $p$,
$\Omega$ and $\mathbb K$. This definition asserts no common operator for all
indices at once, no linearity of some canonically selected extension, and no
control of pointwise values on $\partial\Omega$; in particular it does not
define a trace operator. No claim is made here that zero extension is an
extension operator for a general open set, and none that any particular open
set fails to be an extension domain; both assertions belong to later items of
this page and to its companion.

## Source notes

Kinnunen, Definition 3.42, printed p. 84, introduces the extension domain and
the bounded right inverse of the restriction map; Theorem 3.43 there transfers
whole-space Sobolev inequalities through such an operator. Laugesen, Theorem
3.12, printed pp. 60–62, constructs such an operator for bounded $C^1$ graph
domains and finite $p$, and Corollary 3.13 extends the first-order result to
$p=\infty$ by direct local bounds.
