---
id: def-author-4f905b3f6478-spinning
kind: definition
title: Simple spinning graphs and cluster-constant equilibria
domain: mathematics
status: draft
origin: pipeline
deps:
  - def-expander-prereq-loop-compatible-networks
  - prop-expander-prereq-pair-potential-calculus
  - math:def-integers-modulo-n
  - math:def-addition-and-multiplication-modulo-n
  - math:thm-standard-representatives-modulo-n
  - math:cor-trigonometric-parity-and-pythagorean-identity
  - math:thm-sine-cosine-zero-sets-and-fundamental-period
  - math:thm-sine-and-cosine-derivatives
  - math:lem-derivative-algebra-and-chain-rules
dependency_roles:
  def-expander-prereq-loop-compatible-networks: mathematical-premise
  prop-expander-prereq-pair-potential-calculus: mathematical-premise
  math:def-integers-modulo-n: mathematical-premise
  math:def-addition-and-multiplication-modulo-n: mathematical-premise
  math:thm-standard-representatives-modulo-n: mathematical-premise
  math:cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  math:thm-sine-cosine-zero-sets-and-fundamental-period: mathematical-premise
  math:thm-sine-and-cosine-derivatives: mathematical-premise
  math:lem-derivative-algebra-and-chain-rules: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Eduardo A. Canale, From weighted to unweighted graphs in Synchronizing
        Graph Theory, arXiv:2209.06362v3
      url: https://arxiv.org/pdf/2209.06362v3
      locator: Section II.A, p. 4 (spinning construction); Section II.B, pp. 5–7
        (equation, potential and Hessian); Section III, Proposition 1, p. 7
        (equilibrium lifting)
      statement: Section II.A defines the k-spinning of a simple graph with
        natural-number edge weights for a positive integer k at least the
        largest edge weight, using vertices V times Z_k and complete
        within-cluster edges. Proposition 1 states that a weighted equilibrium
        is equivalent to its cluster-constant lift being an equilibrium of the
        spinning graph.
      hypotheses: A finite simple weighted graph with positive integer edge weights
        and a positive integer k at least every edge weight; homogeneous
        Kuramoto dynamics and the cluster-constant lift. The local item fixes
        one orientation per base edge explicitly.
      reading_limits: Read the PDF text extraction of Sections II.A–B and the
        statement and calculation of Proposition 1, printed pp. 4–7. These
        document attribution; the precise oriented construction and all claims
        below have a local proof from the declared suppliers. No general
        stability-transfer theorem is imported.
proof_strategy: direct
dependency_level: 2
---

## Definition

Let a weighted network mean a finite simple graph on an ordered nonempty vertex set $V$ with positive integer edge weights $w_{uv}$. Fix a positive integer $k\ge\max w_{uv}$, with maximum zero if there are no edges. Write $\mathbb Z_k=\mathbb Z/k$ for integers modulo $k$, with addition of residue classes; $i+r$ means $i+[r]_k$. Its spinning graph $S_k$ has vertex set $V\times\mathbb Z_k$. Each cluster $\{u\}\times\mathbb Z_k$ is a clique, meaning that every unordered pair of distinct vertices within it is an edge. For every edge with $u<v$, add the undirected edges $\{(u,i),(v,i+r)\}$ for $i\in\mathbb Z_k$ and integer offsets $0\le r<w_{uv}$. Fixing this orientation once is part of the construction; the reverse adjacency is the transpose relation. All edges have unit weight and there are no loops. For phases $\theta_u$ modulo $2\pi$, the cluster-constant lift is $\Theta_{u,i}=\theta_u$.

For either graph, set $w_{uv}=w_{vu}$ equal to its edge weight on edges and zero on nonedges and on the diagonal; in the spinning graph the edge weights are one. Indices in the following formulas run over the vertex set of the graph in question, and unordered-pair sums run over its edges. Its Kuramoto equation is $\dot\theta_u=\sum_vw_{uv}\sin(\theta_v-\theta_u)$ and its potential is $U(\theta)=\sum_{\{u,v\}}w_{uv}(1-\cos(\theta_u-\theta_v))$. An equilibrium has zero right-hand side at every vertex. At a phase configuration its Hessian has off-diagonal entries $-w_{uv}\cos(\theta_u-\theta_v)$ and diagonal entries the sums of the corresponding edge coefficients. The quadratic form is $\sum_{\{u,v\}}w_{uv}\cos(\theta_u-\theta_v)(x_u-x_v)^2$.

## Facts & Assumptions

[F1] Finite simple weighted networks and their adjacency conventions are supplied by [[def-expander-prereq-loop-compatible-networks]].

[F2] For an even, twice continuously differentiable, $2\pi$-periodic real function and symmetric real weights, [[prop-expander-prereq-pair-potential-calculus]] supplies the gradient and Hessian formulas. We apply it to $v(t)=1-\cos t$ after verifying these hypotheses.

[F3] Residue classes and their representative-independent addition are supplied by [[math:def-integers-modulo-n]] and [[math:def-addition-and-multiplication-modulo-n]]. Since $k$ is positive, [[math:thm-standard-representatives-modulo-n]] gives exactly $k$ classes, uniquely represented by $0,\ldots,k-1$.

[F4] For real $t$, $\sin(-t)=-\sin t$ and $\cos(-t)=\cos t$ by [[math:cor-trigonometric-parity-and-pythagorean-identity]]. Both functions are $2\pi$-periodic by [[math:thm-sine-cosine-zero-sets-and-fundamental-period]]. They are differentiable with $(\sin t)'=\cos t$ and $(\cos t)'=-\sin t$, and $\sin0=0$, by [[math:thm-sine-and-cosine-derivatives]].

[F5] Differentiability implies continuity, and differentiable real functions obey the sum and product rules, by [[math:lem-derivative-algebra-and-chain-rules]]. Constant functions have derivative zero directly from their difference quotients; the product rule therefore gives the scalar multiplication rule.

## Justification

**Given:** The finite weighted graph, its ordering and the positive integer $k$ in the Definition.

**Goal:** Verify simplicity, degree, and equilibrium lifting.

1.1 By [F3], each cluster is nonempty and has $k$ vertices. For fixed $i\in\mathbb Z_k$, equality $i+[r]_k=i+[s]_k$ implies $k\mid(r-s)$; for $0\le r,s<w_{uv}\le k$ this forces $r=s$. Thus distinct offsets give distinct neighbours on the forward side of each cross block. On the transpose side the neighbours are indexed by $j-[r]_k$ for fixed $j$, and the same divisibility argument gives exactly $w_{uv}$ distinct neighbours there too. The orientation is fixed once per base edge, preventing accidental union with a second, reverse offset convention. Within-cluster edges join all distinct pairs and are disjoint from cross edges. Thus the construction is finite and simple. Each vertex of cluster $u$ has $k-1+\sum_vw_{uv}$ neighbours. [F1, F3, given, construct, algebra]

1.2 By [F4], $v(t)=1-\cos t$ is even and $2\pi$-periodic. The derivative rules in [F5] and identities in [F4] give $v'(t)=\sin t$ and $v''(t)=\cos t$. Since sine and cosine are differentiable on $\mathbb R$ by [F4], they are continuous by [F5]. Thus $v$ is twice continuously differentiable and satisfies every function hypothesis of [F2]. With the symmetric zero-extended weights from the Definition, each unordered edge appears twice in the ordered-pair sum, so its half-sum potential is exactly $U$. The gradient formula in [F2] and sine oddness in [F4] give the negative-gradient equations in the Definition. Differentiating the gradient component using [F5] and [F4] gives the stated off-diagonal and diagonal Hessian entries; [F2]'s quadratic-form identity, with $v''=\cos$ and the same double counting of edges, gives the stated quadratic form. [F1, F2, F4, F5, given, algebra]

2.1 At the lifted phase, within-cluster sine terms vanish because $\sin0=0$ by [F4]. Every neighbour cluster $v$ supplies exactly $w_{uv}\sin(\theta_v-\theta_u)$ at each vertex in cluster $u$, by step 1.1. Thus the lifted right-hand side at each vertex of cluster $u$ equals the base right-hand side at $u$. Since each cluster is nonempty, the lifted configuration is an equilibrium exactly when the original one is. [F4, step 1.1, step 1.2, algebra] ∎

This gives an explicitly oriented version of Canale §II.A, p. 4, and the direct calculation of Proposition 1, p. 7. The local justification uses the declared network, residue-arithmetic, trigonometric and differentiation suppliers. It does not assert a blanket stability transfer for arbitrary $k$.

## Source notes

This gives an explicitly oriented version of Canale §II.A, p. 4, and the direct calculation of Proposition 1, p. 7. The local justification uses the declared network, residue-arithmetic, trigonometric and differentiation suppliers. It does not assert a blanket stability transfer for arbitrary $k$.
