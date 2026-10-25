---
id: lem-qftx-gaga-pseudoconvex-intersection-acyclicity
kind: lemma
title: Coherent sheaves are acyclic on pseudoconvex intersections with local resolutions
status: "published"
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-qftx-analytic-coherent-module
  - def-plurisubharmonic-function
  - def-plurisubharmonic-exhaustion-and-hartogs-pseudoconvexity
  - def-levi-form-and-strict-plurisubharmonicity
  - thm-c-two-levi-criterion-for-plurisubharmonicity
  - thm-stability-operations-for-plurisubharmonic-functions
  - thm-holomorphic-pullback-of-plurisubharmonic-functions
  - lem-smooth-regularization-of-psh-exhaustion
  - lem-smooth-psh-exhaustion-implies-hartogs-pseudoconvexity
  - cor-dolbeault-vanishing-pseudoconvex-domain
  - thm-long-exact-sequence-sheaf-cohomology
  - lem-qftx-gaga-scalar-pseudoconvex-acyclicity
  - lem-qftx-gaga-euclidean-sheaf-cohomological-dimension
  - thm-qftx-gaga-analytic-oka-coherence
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-qftx-analytic-coherent-module: mathematical-premise
  def-plurisubharmonic-function: mathematical-premise
  def-plurisubharmonic-exhaustion-and-hartogs-pseudoconvexity: mathematical-premise
  def-levi-form-and-strict-plurisubharmonicity: mathematical-premise
  thm-c-two-levi-criterion-for-plurisubharmonicity: mathematical-premise
  thm-stability-operations-for-plurisubharmonic-functions: mathematical-premise
  thm-holomorphic-pullback-of-plurisubharmonic-functions: mathematical-premise
  lem-smooth-regularization-of-psh-exhaustion: mathematical-premise
  lem-smooth-psh-exhaustion-implies-hartogs-pseudoconvexity: mathematical-premise
  cor-dolbeault-vanishing-pseudoconvex-domain: mathematical-premise
  thm-long-exact-sequence-sheaf-cohomology: mathematical-premise
  lem-qftx-gaga-scalar-pseudoconvex-acyclicity: mathematical-premise
  lem-qftx-gaga-euclidean-sheaf-cohomological-dimension: mathematical-premise
  thm-qftx-gaga-analytic-oka-coherence: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jean-Pierre Demailly, Complex Analytic and Differential Geometry
      url: https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf
      locator: "Chapter IX §4.B, Lemma 4.4, printed p. 421: coherent dimension shifting on pseudoconvex neighborhoods using local finite free resolutions and ordinary cohomological dimension."
    - title: Yuan Liu, Cartan’s method and its applications in sheaf cohomology
      url: https://arxiv.org/pdf/2204.13185
      locator: "§2.1, Theorems 2.2–2.5, PDF pp. 6–10: Godement’s ordinary cohomological-dimension bound for open subsets of Euclidean manifolds."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
page: qftx-gaga-compact-coherent-finiteness
category: quantum-field-theory-mathematics
---

## Statement

Assume full AC and the local Oka interface stated below. Let $r\ge1$, let $M$ be a complex manifold of complex dimension $r$, and let $V$ be an open subset of $M$ on which a coherent analytic module $\mathcal F$ is defined. Let $D_1,\ldots,D_s$ be relatively compact coordinate polydiscs in $M$ with nonempty intersection $V=\bigcap_{i=1}^sD_i$. Suppose that for one index $i_0$, a neighborhood of $\overline{D_{i_0}}$ in its chart lies in the domain of $\mathcal F$ and carries an exact partial finite-rank free resolution of $\mathcal F$ of length $2r$. Then $H^q(V,\mathcal F|_V)=0$ for every $q>0$. The result applies to a disconnected $V$ componentwise. The assumed local Oka interface is: under AC, on every finite-dimensional complex manifold $\mathcal O_M$ is coherent, coherent modules are closed under kernels, cokernels and finite extensions, and for each coherent $\mathcal F$, point $x$ and finite integer $\ell\ge0$, an exact partial finite-rank resolution $\mathcal O^{p_\ell}\to\cdots\to\mathcal O^{p_0}\to\mathcal F\to0$ exists on a chart neighborhood, exact at the module and all free terms except possibly the leftmost. No global free resolution is asserted.

## Statement references

[Jean-Pierre Demailly, *Complex Analytic and Differential Geometry*, Chapter IX §4.B](https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf)

[Yuan Liu, *Cartan’s method and its applications in sheaf cohomology*, §2.1](https://arxiv.org/pdf/2204.13185)

## Facts & Assumptions

**Given:** Full AC; an $r$-dimensional complex manifold; a coherent analytic module on a neighborhood of $V$; finitely many relatively compact coordinate polydiscs with intersection $V$ nonempty; and an exact length-$2r$ partial free resolution on a neighborhood of one participating polydisc. The resolution is only assumed exact through the penultimate free term.

[A1] Oka coherence and local partial resolutions: assume AC; on every finite-dimensional complex manifold $M$, $\mathcal O_M$ is coherent, coherent modules are closed under kernels, cokernels and finite extensions, and for every coherent $\mathcal F$, point $x$ and finite $\ell\ge0$ there is a chart neighborhood with an exact partial finite-rank free resolution $\mathcal O^{p_\ell}\to\cdots\to\mathcal O^{p_0}\to\mathcal F\to0$, exact at the module and each free term except the leftmost. No global free resolution is asserted ([[thm-qftx-gaga-analytic-oka-coherence]]).

[F1] A continuous plurisubharmonic exhaustion on a domain can be regularized to a smooth strictly plurisubharmonic exhaustion under AC ([[lem-smooth-regularization-of-psh-exhaustion]]).

[F2] A bounded domain with a smooth plurisubharmonic exhaustion is Hartogs pseudoconvex ([[lem-smooth-psh-exhaustion-implies-hartogs-pseudoconvexity]]).

[F3] A Hartogs-pseudoconvex domain has zero positive-degree derived cohomology for its holomorphic structure sheaf ([[lem-qftx-gaga-scalar-pseudoconvex-acyclicity]], [[cor-dolbeault-vanishing-pseudoconvex-domain]]).

[F4] If $m\ge1$ and $W\subseteq\mathbb R^m$ is nonempty and open and $\mathcal G$ is any sheaf of abelian groups on $W$, then $H^j(W,\mathcal G)=0$ for $j>m$ ([[lem-qftx-gaga-euclidean-sheaf-cohomological-dimension]]). This is ordinary cohomology, not a compact-support assertion.

[F5] A short exact sequence of sheaves gives the long exact sequence of derived sheaf cohomology ([[thm-long-exact-sequence-sheaf-cohomology]]).

[F6] The coordinate polydisc $D=\{|z_j-a_j|<R_j\}_{j=1}^r$ has the smooth strictly plurisubharmonic exhaustion $\rho_D(z)=-\sum_{j=1}^r\log(R_j^2-|z_j-a_j|^2)$; its Levi matrix is diagonal with entries $R_j^2/(R_j^2-|z_j-a_j|^2)^2>0$. Finite maxima preserve plurisubharmonicity, and holomorphic coordinate changes preserve it ([[def-plurisubharmonic-function]], [[def-levi-form-and-strict-plurisubharmonicity]], [[thm-c-two-levi-criterion-for-plurisubharmonicity|The $C^2$ Levi criterion for plurisubharmonicity]], [[thm-stability-operations-for-plurisubharmonic-functions]], [[thm-holomorphic-pullback-of-plurisubharmonic-functions]]).

## Proof

1.1 Choose the chart of $D_{i_0}$ and write $V$ in those coordinates. For each $D_i$, the function $\rho_{D_i}$ in [F6] is a smooth plurisubharmonic exhaustion of $D_i$; on $V$ it remains plurisubharmonic after composing with the holomorphic chart transition. The continuous function $\rho:=\max_{1\le i\le s}\rho_{D_i}$ is plurisubharmonic by [F6]. If a sequence in $V$ leaves every compact subset of $V$, it approaches the boundary of at least one of the finitely many $D_i$, and the corresponding $\rho_{D_i}$ tends to $+\infty$. Thus $\rho$ is an exhaustion of $V$. [F6, given, construct]

2.1 Each connected component $V_\alpha$ is a bounded domain in the chart of $D_{i_0}$ and inherits the continuous plurisubharmonic exhaustion $\rho$. Apply [F1] to obtain a smooth plurisubharmonic exhaustion on $V_\alpha$, then [F2] to conclude that $V_\alpha$ is Hartogs pseudoconvex. By [F3], $H^q(V_\alpha,\mathcal O)=0$ for $q>0$, hence $H^q(V_\alpha,\mathcal O^{p})=0$ for every finite rank $p$. [A1, F1, F2, F3, step 1.1]

3.1 Restrict the assumed partial resolution to $V_\alpha$ and define $K_{-1}=\mathcal F|_{V_\alpha}$ and $K_j=\ker(\mathcal O_{V_\alpha}^{p_j}\to\mathcal O_{V_\alpha}^{p_{j-1}})$ for $1\le j\le2r$, with $K_0=\ker(\mathcal O_{V_\alpha}^{p_0}\to K_{-1})$. Exactness of the resolution through the penultimate free term gives short exact sequences $0\to K_j\to\mathcal O_{V_\alpha}^{p_j}\to K_{j-1}\to0$ for $0\le j\le2r$, where at $j=0$ the rightmost term is $K_{-1}$. By [A1] each $K_j$ is coherent, and by step 2.1 the middle free sheaf in each sequence is acyclic in positive degree. [A1, F5, step 2.1, given]

4.1 The long exact sequence [F5] for each short exact sequence in step 3.1 therefore gives, for every $q>0$, isomorphisms $H^q(V_\alpha,K_{j-1})\cong H^{q+1}(V_\alpha,K_j)$ for $j=0,1,\ldots,2r$. Iterating yields $H^q(V_\alpha,\mathcal F)\cong H^{q+2r+1}(V_\alpha,K_{2r})$. The chart identifies $V_\alpha$ with an open subset of $\mathbb C^r\cong\mathbb R^{2r}$, so [F4] makes the last group zero because $q+2r+1>2r$. [F4, F5, step 3.1]

5.1 The components of the open set $V$ are disjoint open subsets and are at most countable because the chart is second countable. Sheaves on their disjoint union are tuples of sheaves on the components; global sections are products, and products of abelian groups are exact under AC. Applying componentwise injective resolutions therefore gives $H^q(V,\mathcal F)=\prod_\alpha H^q(V_\alpha,\mathcal F)=0$ for $q>0$ by step 4.1. [A1, step 4.1, algebra] ∎
