---
id: def-cft-outgoing-mode-algebra-action
kind: definition
title: Global outgoing mode algebra and residue action
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 5
domain: mathematics
library: mathematics
deps:
  - def-cft-pointed-curve-with-formal-coordinates
  - def-cft-coordinate-independent-chiral-algebra
  - def-cft-local-mode-algebra
  - lem-cft-local-mode-algebra-representation-on-module
  - def-cft-integrally-graded-conformal-module
  - lem-cft-formal-residue-coordinate-invariance
  - def-vertex-algebra-module
dependency_roles:
  def-cft-pointed-curve-with-formal-coordinates: mathematical-premise
  def-cft-coordinate-independent-chiral-algebra: mathematical-premise
  def-cft-local-mode-algebra: mathematical-premise
  lem-cft-local-mode-algebra-representation-on-module: mathematical-premise
  def-cft-integrally-graded-conformal-module: mathematical-premise
  lem-cft-formal-residue-coordinate-invariance: mathematical-premise
  def-vertex-algebra-module: mathematical-premise
justified_by:
  - lem-cft-outgoing-mode-action-well-defined
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Beilinson and Drinfeld, Chiral Algebras, preliminary Chapter 4, §§4.4.4–4.4.5
      url: https://math.uchicago.edu/~drinfeld/langlands/chiral/cha_ch4.pdf
      locator: Global de Rham coinvariants and the outgoing Lie-algebra action.
    - title: Bin Gui, Lectures on Vertex Operator Algebras and Conformal Blocks, arXiv:2305.03822v1, §§11.10–11.18
      url: https://arxiv.org/pdf/2305.03822v1
      locator: Algebraic residue action and coinvariant quotient; analytic comparison is separate.
---

## Definition

Let $V$ be a conformal vertex algebra of CFT type, and let $(X,p_1,\ldots,p_n,t_1,\ldots,t_n)$ be a pointed curve and let $U:=X\setminus\{p_1,\ldots,p_n\}$. For this fixed $V$ and each $N\ge0$, let $V_{\le N,X}^r$ be the finite-stage bundle from the coordinate-independent chiral-algebra construction above. A **finite-pole section** has finite energy $N$ and lies in $\Gamma(X,V_{\le N,X}^r(D))$ for some $D=\sum_i k_ip_i$ with integers $k_i\ge0$; $V_{\le N,X}^r(D)$ means sections allowed poles of order at most $k_i$ at $p_i$. Define $\Gamma_{\mathrm{fp}}(U,V_X^r)$ as the union of these spaces and define $\Gamma_{\mathrm{fp}}(U,V_X^r\otimes\mathcal T_X)$ similarly, where $\mathcal T_X$ is the holomorphic tangent line. Right differentiation preserves these unions because it raises finite energy and increases a finite pole order by at most one.

For this item, $H^0_{\mathrm{dR}}(U,V_X^r)$ means the degree-zero cohomology of the finite-energy, finite-pole right-D-module complex
$$\Gamma_{\mathrm{fp}}(U,V_X^r\otimes\mathcal T_X)\xrightarrow{\,a\otimes\xi\mapsto a\cdot\xi\,}\Gamma_{\mathrm{fp}}(U,V_X^r),$$
so it is the cokernel of global right derivatives on this specified space. This definition excludes holomorphic sections with essential singularities at a puncture; it makes no assertion identifying this finite-pole complex with all analytic sections on $U$.

Expanding a finite-pole representative at $p_i$ in $t_i$ gives a Laurent one-form with a finite lower bound and coefficients in some $V_{\le N}$, hence a class in $\widehat{\mathfrak L}_{t_i}(V)$. The image of the resulting map
$$H^0_{\mathrm{dR}}(U,V_X^r)\longrightarrow\prod_{i=1}^n\widehat{\mathfrak L}_{t_i}(V)$$
is the **outgoing mode algebra** $\mathfrak g_{\mathrm{out}}$. For integrally graded conformal $V$-modules $M_i$ at the marked points, its action on the algebraic tensor product $M_\bullet:=M_1\otimes_{\mathbb C}\cdots\otimes_{\mathbb C}M_n$ is the sum of the local residue actions. The local-derivative factorization, coordinate independence, Lie closure, and action are proved in the outgoing-mode action lemma below.

For $n=0$, take $D=0$, the product of local mode algebras to be the zero Lie algebra, the empty tensor product to be $\mathbb C$, and its action to be zero. For a family, this definition only names the relative cokernel once the corresponding finite-pole sheaves and relative chiral structure have been supplied; it asserts no finite-rank, local-freeness, or base-change property.

## Definition references

[[def-cft-pointed-curve-with-formal-coordinates]]

[[def-cft-coordinate-independent-chiral-algebra]]

[[def-cft-local-mode-algebra]]

[[lem-cft-local-mode-algebra-representation-on-module]]

[[def-cft-integrally-graded-conformal-module]]

[[lem-cft-formal-residue-coordinate-invariance]]

[[def-vertex-algebra-module]]

[[lem-cft-outgoing-mode-action-well-defined]]
