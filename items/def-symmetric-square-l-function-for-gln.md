---
id: def-symmetric-square-l-function-for-gln
kind: definition
title: Symmetric-Square L-Function for GL(n)
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-standard-and-rankin-selberg-l-functions-on-gln
  - def-unitary-cuspidal-generic-gln-representation
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Henry H. Kim, Functoriality for the Exterior Square of GL4 and the Symmetric Fourth of GL2, Appendix 2"
      url: "https://web.archive.org/web/20200307192400id_/https://www.ams.org/journals/jams/2003-16-01/S0894-0347-02-00410-1/S0894-0347-02-00410-1.pdf"
      locator: "Appendix 2, Proposition 1, printed pp. 175–176: symmetric-square Euler product and unramified Satake factors."
    - title: "James W. Cogdell, L-functions and Converse Theorems for GL(n)"
      url: "https://people.math.osu.edu/cogdell.1/pcmi-www.pdf"
      locator: "Lecture 1, §1.2: local Langlands factors and unramified Euler factors."
---

## Definition

Let $F$ be a number field, $n\ge1$, and $\Pi$ a unitary cuspidal generic
automorphic representation of $\mathrm{GL}_n(\mathbb A_F)$. At a place $v$, let
$(r_{\Pi_v},N_{\Pi_v})$ be the Weil–Deligne parameter used for its standard
local factor, and let
$(\operatorname{Sym}^2r_{\Pi_v},d(\operatorname{Sym}^2)(N_{\Pi_v}))$ be its
symmetric-square parameter. Define $L_v(s,\Pi_v,\operatorname{Sym}^2)$ to be
the local Langlands factor of that parameter. At a finite unramified place,
if $\alpha_{1,v},\ldots,\alpha_{n,v}$ are the Satake parameters, this is
$$L_v(s,\Pi_v,\operatorname{Sym}^2)=\prod_{1\le i\le j\le n}(1-\alpha_{i,v}\alpha_{j,v}q_v^{-s})^{-1}.$$
The global symmetric-square $L$-function is the Euler product
$$L(s,\Pi,\operatorname{Sym}^2)=\prod_vL_v(s,\Pi_v,\operatorname{Sym}^2),$$
in any half-plane where this product converges absolutely; the completed
function includes every archimedean local factor. This definition asserts no
continuation, functional equation, nonvanishing, or convergence in
$\operatorname{Re}(s)>1$.

## Definition references

[Henry H. Kim, *Functoriality for the Exterior Square of GL4 and the Symmetric Fourth of GL2*, Appendix 2](https://web.archive.org/web/20200307192400id_/https://www.ams.org/journals/jams/2003-16-01/S0894-0347-02-00410-1/S0894-0347-02-00410-1.pdf)

[James W. Cogdell, *L-functions and Converse Theorems for GL(n)*](https://people.math.osu.edu/cogdell.1/pcmi-www.pdf)

## Remarks

The current GL(n) standard-factor supplier is itself owner-escalated because
its local Langlands assignments are not fully established in local content.
This definition fixes the symmetric-square convention relative to that supplier;
it does not close its well-definedness obligation.
