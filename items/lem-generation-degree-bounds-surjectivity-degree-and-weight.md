---
id: lem-generation-degree-bounds-surjectivity-degree-and-weight
kind: lemma
title: "Bounded generation degree bounds surjectivity degree and weight"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 4
deps: [lem-generated-in-degree-d-is-a-quotient-of-free-fi-modules,
       lem-free-fi-modules-have-explicit-weight-and-stability-bounds,
       def-injectivity-surjectivity-and-stability-degree-of-an-fi-module,
       def-weight-of-a-characteristic-zero-fi-module,
       def-fi-coinvariant-functors-and-transition-maps,
       lem-specht-modules-classify-irreducibles-over-characteristic-zero-fields,
       thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order,
       def-direct-sum-of-a-family-of-modules,
       def-free-fi-module-generated-by-an-sm-module]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Thomas Church, Jordan S. Ellenberg and Benson Farb, “FI-modules and stability for representations of symmetric groups”, arXiv:1204.4533v4 (2014); published in Duke Math. J. 164 (2015) 1833–1910"
      url: "https://arxiv.org/pdf/1204.4533"
      locator: "Lemma 3.1.6 (quotients have surjectivity degree at most that of the source), Proposition 3.1.8 (generated in degree $d$ implies surjectivity degree $\\le d$) and Proposition 3.2.5 (generated in degree $d$ implies weight $\\le d$), printed pp. 17–19"
    - title: "Thomas Church, Jordan S. Ellenberg, Benson Farb and Rohit Nagpal, “FI-modules over Noetherian rings”, Geom. Topol. 18 (2014) 2951–2984; author-hosted full text"
      url: "https://www.math.uchicago.edu/~farb/papers/FImodNoetherian.pdf"
      locator: "Proposition 2.3 with proof (generation via surjections from free FI-modules), printed pp. 10–11"
---

## Statement

Let $V$ be an FI-module over $k$, with surjectivity degree and stability degree
as in [[def-injectivity-surjectivity-and-stability-degree-of-an-fi-module]] and
weight as in [[def-weight-of-a-characteristic-zero-fi-module]].

(a) Every quotient $V\twoheadrightarrow W$ of FI-modules satisfies
$\operatorname{surj-deg}(W)\le\operatorname{surj-deg}(V)$.

(b) If $V$ is generated in degree $\le d$
(with the generation convention of
[[lem-generated-in-degree-d-is-a-quotient-of-free-fi-modules]]), then
$\operatorname{surj-deg}(V)\le d$.

(c) If moreover $k$ is a field of characteristic $0$ and $V$ is generated in
degree $\le d$, then $\operatorname{weight}(V)\le d$.

No choice principle is used.

## Facts & Assumptions

**Given:** An FI-module $V$ over $k$, and for part (c) a characteristic-zero field $k$ with $V$ generated in degree $\le d$; for $m\ge0$ the FB-module $V_m$ (supported on $m$-element sets) and the free FI-module $M(V_m)$.

[F1] $\Phi_a$ is right exact in every degree: a surjection $V\twoheadrightarrow W$ induces surjections $\Phi_a(V)_n\twoheadrightarrow\Phi_a(W)_n$, and the transition maps are natural in the FI-module variable ([[def-fi-coinvariant-functors-and-transition-maps]]).

[F2] $\Phi_a\bigl(\bigoplus_iU_i\bigr)_n\cong\bigoplus_i\Phi_a(U_i)_n$ with $T$ acting diagonally, so $T$ is surjective if and only if every component is surjective and $\operatorname{surj-deg}$ of a finite direct sum is the maximum of the summands' surjectivity degrees ([[def-fi-coinvariant-functors-and-transition-maps]], [[def-direct-sum-of-a-family-of-modules]]).

[F3] If $V$ is generated in degree $\le d$, the evaluation map $\bigoplus_{m\le d}M(V_m)\twoheadrightarrow V$ is surjective ([[lem-generated-in-degree-d-is-a-quotient-of-free-fi-modules]]); $M(W)_S=\bigoplus_{T\subseteq S}W(T)$, which is additive in $W$ ([[def-free-fi-module-generated-by-an-sm-module]]).

[F4] For an FB-module $W$: $\operatorname{inj-deg}(M(W))=0$, and if $W_i=0$ for $i>m$ then $\operatorname{surj-deg}(M(W))\le m$; for a partition $\lambda$ over a characteristic-zero field, $\operatorname{weight}(M(\lambda))=|\lambda|$ ([[lem-free-fi-modules-have-explicit-weight-and-stability-bounds]]).

[F5] Over a characteristic-zero field, every finite-dimensional $kS_m$-module is a direct sum of Specht modules $S^\lambda_k$, which are exactly the irreducibles ([[lem-specht-modules-classify-irreducibles-over-characteristic-zero-fields]], [[thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order]]).

[F6] Weight is monotone under subquotients, and constituents are subquotients isomorphic to some $V(\lambda)_N$ ([[def-weight-of-a-characteristic-zero-fi-module]]).

## Proof

**Proof technique:** direct.

1.1 For (a), let $q\colon V\twoheadrightarrow W$ be a quotient. By [F1] each $q_n$ is surjective on $\Phi_a$, and naturality gives $T_{\Phi_a(W)}\circ q_n=q_{n+1}\circ T_{\Phi_a(V)}$. If $T_{\Phi_a(V)}$ is surjective, then $T_{\Phi_a(W)}$ is surjective as well, because every element of $\Phi_a(W)_{n+1}$ is the image under the surjection $q_{n+1}$ of an element hit by $T_{\Phi_a(V)}$. Hence the threshold controlling surjectivity of $T$ for $W$ is at most that for $V$, i.e. $\operatorname{surj-deg}(W)\le\operatorname{surj-deg}(V)$. [F1, given]

1.2 Let $k$ have characteristic $0$ and let $W$ be a finite-dimensional $kS_m$-module regarded as an FB-module supported on cardinality $m$. By [F5] $W\cong\bigoplus_\lambda c_\lambda S^\lambda_k$ (finite sum), and by the additivity in [F3] $M(W)\cong\bigoplus_\lambda M(S^\lambda_k)^{\oplus c_\lambda}$; hence $\operatorname{weight}(M(W))=\max(\{0\}\cup\{|\lambda|:c_\lambda\ne0\})\le m$ by [F4] and [F6]. [F3, F4, F5, F6]

2.1 Let $W$ be an arbitrary $kS_m$-module (characteristic zero) and let $V(\eta)_N$ be a constituent of $M(W)_N$. Let $P/Q\subseteq M(W)_N$ be a subquotient isomorphic to $V(\eta)_N$ and choose $x\in P\setminus Q$. The $S_N$-orbit span $X$ of $x$ is a finite-dimensional $S_N$-submodule of $M(W)_N$, and $X/(X\cap Q)$ is a nonzero submodule of the simple $V(\eta)_N$, hence is isomorphic to $V(\eta)_N$; in particular $V(\eta)_N$ is a constituent of $X$. Now $X$ lies in the direct sum $\bigoplus_{T\subseteq[N]}W(T)$ of [F3] over finitely many $T$, and for each of those $T$ the projection of $X$ to $W(T)$ is finite-dimensional; let $W'$ be the $kS_m$-submodule of $W$ generated by the finitely many images of these projections under bijections $[m]\to T$ chosen for the finitely many $m$-subsets $T$. Then $W'$ is finite-dimensional and $X\subseteq M(W')_N$, so $V(\eta)_N$ is a constituent of $M(W')_N$; by step 1.2 and [F6], $|\eta|\le m$. Therefore $\operatorname{weight}(M(W))\le m$ for every $kS_m$-module $W$. [F3, F6, step 1.2]

2.2 For (b), suppose $V$ is generated in degree $\le d$. By [F3] the evaluation map $\bigoplus_{m\le d}M(V_m)\twoheadrightarrow V$ is surjective, and each $V_m$ is supported in degree $m\le d$, so $\operatorname{surj-deg}(M(V_m))\le m\le d$ by [F4]; by [F2] the finite direct sum has surjectivity degree at most $d$, and step 1.1 applied to the quotient gives $\operatorname{surj-deg}(V)\le d$. [F2, F3, F4, step 1.1]

3.1 For (c), the same surjection $\bigoplus_{m\le d}M(V_m)\twoheadrightarrow V$ and [F6] give $\operatorname{weight}(V)\le\operatorname{weight}\bigl(\bigoplus_{m\le d}M(V_m)\bigr)$. A simple subquotient of a finite direct sum occurs in one summand: lift a nonzero vector of that quotient and take its finite group-orbit span. The component projections lie in finite-dimensional invariant subspaces of the summands; their finite direct sum is semisimple by [F5], so the simple quotient is isomorphic to a simple summand occurring in one component. Thus the weight of the finite direct sum is $\max_{m\le d}\operatorname{weight}(M(V_m))\le d$ by step 2.1. Hence $\operatorname{weight}(V)\le d$. [F3, F5, F6, step 2.1]

4.1 Step 1.1 proves (a); step 2.2 proves (b); step 3.1 proves (c). [step 1.1, step 2.2, step 3.1] ∎
