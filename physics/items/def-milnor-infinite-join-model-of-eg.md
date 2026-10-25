---
id: def-milnor-infinite-join-model-of-eg
kind: definition
title: Milnor's infinite-join model of EG
status: published
verification:
  audited: 2026-09-14
origin: pipeline
deps: ["def-universal-principal-bundle-and-classifying-space", "def-quotient-topology"]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: John Milnor, Construction of Universal Bundles II
      url: https://uregina.ca/~franklam/Math527/Milnor_Universal2.pdf
      locator: Sections 2--3, printed pages 430--433; strong join and ordinary principal charts
    - title: Tammo tom Dieck, Algebraic Topology
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/diecktop.pdf
      locator: Section 14.4.3, printed pages 345--346; coordinate topology and orbit bundle
    - title: Dale Husemoller, Fibre Bundles, Third Edition
      url: https://link.springer.com/book/10.1007/978-1-4757-2261-1
      locator: Chapter 4, Section 11.1, printed pages 54--55
---

## Definition

Let $G$ be a topological group. All products, quotient spaces, and actions
below use the stated ordinary topologies.

For $N\geq0$, let $J_N^{\mathrm q}=G^{*(N+1)}$ denote the ordinary quotient of $\Delta^N\times G^{N+1}$ in which

$$ (t_0,\ldots,t_N;g_0,\ldots,g_N)\sim(t_0,\ldots,t_N;g'_0,\ldots,g'_N) $$

exactly when $g_i=g'_i$ for every $i$ with $t_i>0$. We write its points as finite formal sums $\sum_{i=0}^N t_i g_i$. Appending a zero coordinate gives the usual inclusions of these finite quotient joins.

As a **set**, Milnor's infinite join is the increasing union

$$ EG=G*G*\cdots=\bigcup_{N\geq0}J_N^{\mathrm q}. $$

Every point therefore has an expression

$$ x=\sum_{i\geq0}t_i g_i,\qquad t_i\geq0,\quad \sum_i t_i=1, $$

with only finitely many $t_i$ nonzero; a label $g_i$ is ignored when $t_i=0$. We choose one of two **ordinary topologies** on this set, according to $G$:

- If $G$ is compact Hausdorff, $EG$ has the ordinary weak direct-limit topology of the compact finite quotient joins $J_N^{\mathrm q}$: a set is open exactly when its intersection with every $J_N^{\mathrm q}$ is open. These are compact Hausdorff stages with closed inclusions. This branch makes the circle and two-point-group models the standard weak CW unions of their finite joins.
- Otherwise, $EG$ has Milnor's ordinary coordinate-label **strong topology**: the coarsest topology for which every barycentric function $t_i:EG\to[0,1]$ and every partial label function $g_i:\{t_i>0\}\to G$ is continuous. A map from any ordinary topological space into this strong join is continuous exactly when all its weights and all its labels on their positive-weight loci are continuous. This is not the weak direct-limit topology; the subspace topology on a finite-stage set need not equal the quotient topology of $J_N^{\mathrm q}$.

In both branches the weights $t_i$ and partial labels $g_i$ are continuous; in the weak branch this follows by checking their restrictions to the finite quotient stages. For compact Hausdorff $G$, each finite strong join and finite quotient join agree because the latter is compact and the former Hausdorff. Neither branch is additionally kified. The noncompact strong branch is an explicit ordinary-Top exception to the standing CGWH convention; all bundle charts and homotopies use ordinary products, as required by the library's ordinary bundle definition. We do not silently replace an ordinary product by a k-product.

The diagonal right action is

$$ \left(\sum_i t_i g_i\right)h=\sum_i t_i(g_i h). $$

Define $BG=EG/G$ with the ordinary orbit-quotient topology, and let $p:EG\to BG$ be the orbit map. Each $t_i$ is invariant and hence descends to a continuous function, again denoted $t_i$, on $BG$. We use the identity-labelled vertex in coordinate $1$ as $e_0\in EG$ and its orbit as $b_0\in BG$.
