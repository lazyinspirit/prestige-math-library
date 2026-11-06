---
id: def-cft-voa-conformal-block-and-dual-fusion-product
kind: definition
title: VOA conformal block and dual fusion product
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 3
deps:
  - def-cft-pointed-analytic-worldsheet
  - def-vertex-algebra-state-field
  - def-conformal-vertex-algebra
  - def-vertex-algebra-module
  - def-grading-restricted-generalized-vertex-module
  - lem-cft-formal-coordinate-change-action
  - lem-cft-state-field-and-residue-coordinate-covariance
  - def-axiom-of-choice
justified_by: []
domain: mathematics
library: mathematics
dependency_roles:
  def-cft-pointed-analytic-worldsheet: mathematical-premise
  def-vertex-algebra-state-field: mathematical-premise
  def-conformal-vertex-algebra: mathematical-premise
  def-vertex-algebra-module: mathematical-premise
  def-grading-restricted-generalized-vertex-module: mathematical-premise
  lem-cft-formal-coordinate-change-action: mathematical-premise
  lem-cft-state-field-and-residue-coordinate-covariance: mathematical-premise
  def-axiom-of-choice: mathematical-premise
axiom_use: "The compact-surface genus convention is inherited through def-cft-pointed-analytic-worldsheet; no choice beyond that convention is used in these algebraic definitions."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Bin Gui and Hao Zhang, Analytic Conformal Blocks of C2-cofinite Vertex Operator Algebras I: Propagation and Dual Fusion Products"
      url: https://arxiv.org/pdf/2305.10180v4
      locator: "§§1.2–1.7, especially Definitions 1.7–1.8 and 1.16–1.21, PDF pp. 18–25, and Theorem 0.5, PDF pp. 7–8."
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Let $V$ be a conformal vertex algebra of CFT type over $\mathbb C$, with state-field map $Y(v,z)=\sum_{n\in\mathbb Z}v_{(n)}z^{-n-1}$, conformal vector, and Virasoro operators as in the supplied definitions. Let $(C;p_1,\ldots,p_N;z_1,\ldots,z_N)$ be a pointed compact analytic worldsheet, and let $W_i$ be grading-restricted generalized left $V$-modules at the marked points. Here each $W_i$ is the algebraic direct sum of its finite-dimensional generalized $L(0)$-eigenspaces, with the real parts of its weights bounded below; set $W=W_1\otimes_{\mathbb C}\cdots\otimes_{\mathbb C}W_N$.

For clarity, a grading-restricted generalized $V^{\otimes k}$-module in this page means a vector space with commuting component actions $Y_i(v,z)$ of $V$, with the actions for distinct $i$ commuting, and commuting grading operators $L_i(0)$. It has a joint generalized-weight decomposition $M=\bigoplus_{\lambda\in\mathbb C^k}M_{[\lambda]}$; each joint generalized-weight space is finite dimensional, each vector has finite support in the direct sum, and the real parts of the weights are bounded below in each coordinate. The component fields use the state-field convention fixed above.

For a coordinate chart $\eta:U\to\mathbb C$ on $C$, the **sheaf of VOA states** is locally $V\otimes_{\mathbb C}\mathcal O_U$. On an overlap of charts $\eta,\mu$, glue these trivializations by the formal-coordinate operator $U(\rho_{\eta|\mu})$, where
$$
\rho_{\eta|\mu,p}(t)=\eta\!\left(\mu^{-1}(t+\mu(p))\right)-\eta(p).
$$
The composition identity in that supplier is the cocycle condition for these transition maps. Write $\omega_C$ for the holomorphic cotangent line bundle, whose local sections are $f(z)\,dz$ and whose coordinate changes use the chain rule. Write $\omega_C(*P)=\bigcup_{k\geq0}\omega_C(k\sum_i p_i)$ for meromorphic one-forms with poles of finite order only at the marked points.

A global section $\sigma$ of $\mathcal V_C\otimes\omega_C(*P)$ acts on $W$ by the sum of its residue actions. In the coordinate $z_i$ at $p_i$, write its state-valued differential as $\sum_k v_{i,k}z_i^k\,dz_i$; its $i$th action on $w_1\otimes\cdots\otimes w_N$ is
$$
\sum_k w_1\otimes\cdots\otimes (v_{i,k})_{(k)}w_i\otimes\cdots\otimes w_N,
$$
and the global action is the sum over $i$. The **coinvariant space** is the quotient of $W$ by the linear span of all such global actions. The **space of conformal blocks** is the algebraic dual of this quotient, equivalently the set of linear functionals on $W$ that vanish on every global residue action. For an analytic family, use the same construction fiberwise with the relative cotangent line bundle and the sheaf of VOA states on the total family.

For an $(M,N)$-pointed surface $X$ with $N$ incoming points, $M$ outgoing points, and a grading-restricted generalized $V^{\otimes N}$-module $W$ at the incoming points, a **dual fusion product** is a grading-restricted generalized $V^{\otimes M}$-module $D_X(W)$ together with a conformal block $\gamma_X\in\mathrm{CB}_X(W\otimes D_X(W))$ such that, for every grading-restricted generalized $V^{\otimes M}$-module $M_0$ and every $\Gamma\in\mathrm{CB}_X(W\otimes M_0)$, there is a unique $V^{\otimes M}$-module homomorphism $T:M_0\to D_X(W)$ satisfying $\Gamma=\gamma_X\circ(\mathrm{id}_W\otimes T)$. This is a definition of the representing property when such an object exists; existence is a separate theorem.

## Definition references

[[def-cft-pointed-analytic-worldsheet]]

[[def-vertex-algebra-state-field]]

[[def-conformal-vertex-algebra]]

[[def-vertex-algebra-module]]

[[def-grading-restricted-generalized-vertex-module]]

[[lem-cft-formal-coordinate-change-action]]

[[lem-cft-state-field-and-residue-coordinate-covariance]]

## Remarks

The source's conformal-block spaces depend on the analytic coordinate convention through the formal-coordinate action above. The universal property does not assert that $D_X(W)$ exists; it also does not assert finite-dimensionality or semisimplicity. The separate existence item records the C2-cofinite case. The local finite-weight state-sheaf cocycle is supplied by [[lem-cft-formal-coordinate-change-action]]. The formal field identity, finite-pole residue action, coordinate covariance and compatibility with arbitrary module maps are supplied by [[lem-cft-state-field-and-residue-coordinate-covariance]]. The marked local coordinates are part of the data here; the family construction uses its specified vertical coordinates. The supplier distinguishes its branch-free integral normalization from the conformal $L_M(0)$ dilation, so it makes no substitution of the normalized generator in later Ward identities or geometric connections. Outgoing factors use the stated left-module and contragredient conventions; no additional sign is inserted in the sum of local residues.
