---
id: def-wkp-zero-as-a-sobolev-closure
kind: definition
title: Zero-boundary Sobolev space as a norm closure
status: published
origin: pipeline
deps: [def-sobolev-space-wkp-and-its-norm, lem-classical-derivatives-are-weak-derivatives, lem-sobolev-norm-is-well-defined-and-definite, def-countable-choice]
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  scraped: []
  references:
    - title: Juha Kinnunen, Sobolev Spaces (2026), Definition 1.23
      url: https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf
      locator: Chapter 1 §1.6, Definition 1.23 and Remarks 1.24, printed pp. 21–22
    - title: Richard S. Laugesen, Linear Analysis and Partial Differential Equations (2020), Definition 3.11
      url: https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf
      locator: Chapter 3 §3.5, Definition 3.11, printed p. 59
---

## Definition

Assume Countable Choice. Let $\Omega\subseteq\mathbb R^n$ be open with
$n\ge1$, let $k\in\mathbb N_0$, let $1\le p\le\infty$, and let
$\mathbb K\in\{\mathbb R,\mathbb C\}$.

Every $\varphi\in C_c^\infty(\Omega;\mathbb K)$ belongs to
$W^{k,p}(\Omega;\mathbb K)$. Indeed $\varphi$ is bounded with compact support,
hence lies in $L^p(\Omega;\mathbb K)$ for every exponent in range, and each of
its classical partial derivatives is again smooth and compactly supported,
hence lies in $L^p(\Omega;\mathbb K)$ and is the corresponding weak derivative
by [[lem-classical-derivatives-are-weak-derivatives]].

Define the **zero-boundary Sobolev space**
$$W_0^{k,p}(\Omega;\mathbb K):=\overline{C_c^\infty(\Omega;\mathbb K)},$$
the closure taken in the normed space
$(W^{k,p}(\Omega;\mathbb K),\|\cdot\|_{W^{k,p}(\Omega)})$ of
[[def-sobolev-space-wkp-and-its-norm]]. The norm is a genuine norm on classes
by [[lem-sobolev-norm-is-well-defined-and-definite]], so this is the usual
metric closure of a subset of a normed space: $u\in W_0^{k,p}(\Omega;\mathbb K)$
if and only if for every $\delta>0$ there is
$\varphi\in C_c^\infty(\Omega;\mathbb K)$ with
$\|u-\varphi\|_{W^{k,p}(\Omega)}<\delta$. Write
$H_0^k(\Omega):=W_0^{k,2}(\Omega;\mathbb K)$ when the scalar field is fixed by
context.

Three warnings are part of the definition. First, this is a closure of
almost-everywhere classes, and all its equalities are equalities of Sobolev
classes. Second, no pointwise boundary values and no trace characterization
are asserted: a description of $W_0^{k,p}$ by vanishing boundary data belongs
to the later trace theory and is not used here. Third, the closure is defined
for every $1\le p\le\infty$, but for $p=\infty$ it is not claimed that every
compactly supported $W^{k,\infty}(\Omega)$ function lies in $W_0^{k,\infty}(\Omega)$;
the definition merely names the closure of the test functions.

## Source notes

Kinnunen, Definition 1.23 and Remarks 1.24, printed pp. 21–22, defines
$W_0^{k,p}$ as the closure of the test functions and warns that this is not yet
a boundary-value statement. Laugesen, Definition 3.11, printed p. 59, uses the
same closure convention for $W_0^{k,p}$.
