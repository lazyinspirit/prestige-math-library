---
id: lem-zero-localized-intersection-rank-forces-finite-boundary-union-kernel-isotropy
kind: lemma
title: Zero localized intersection rank gives isotropy on a finite boundary union
status: published
origin: pipeline
deps:
  - thm-compact-collared-manifold-local-coefficient-lefschetz-duality-in-zf
  - thm-compact-oriented-manifold-local-coefficient-duality-in-zf
  - lem-involutive-twisted-chain-duals-realize-local-coefficient-duality
  - lem-compact-manifold-twisted-singular-chains-admit-one-vertex-reduction
  - lem-choice-free-low-degree-coefficient-bockstein-on-compact-manifolds
  - thm-pair-long-exact-sequences-with-local-coefficients
  - def-cup-and-cap-products-with-local-coefficient-pairings
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Cha and Kim, Iterated satellite operators on the knot concordance group
      url: https://arxiv.org/pdf/2402.04629v2
      locator: Section4.3, Blanchfield bordisms
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
---

## Statement

Let $W$ be a compact connected oriented topological four-manifold with a supplied boundary collar. Supply a unital involution-stable inclusion $R\subseteq K$ into an involutive division ring and a based rank-one right-$R$ coefficient system on $W$, with unitary monodromy and the transported standard Hermitian form. Suppose
$$H_2(W;K)=\operatorname{im}\{H_2(\partial W;K)\longrightarrow H_2(W;K)\}.$$
Let $N$ be a finite union of connected boundary components, each satisfying $H_1(N_j;K)=0$, with its induced boundary orientation and coefficient system. On each component define the linking form by inverse coefficient Bockstein, inverse oriented cap duality and evaluation; let $B_N$ be their orthogonal sum. Then
$$B_N(x,y)=0\quad\text{whenever }x,y\in\ker\{H_1(N;R)\longrightarrow H_1(W;R)\}.$$
No choice axiom or finite CW structure is assumed. No vanishing condition is imposed on the unselected boundary components.

## Facts & Assumptions

**Given:** The manifolds, collar, rings, parallel Hermitian structure and localized boundary-generation hypothesis in the Statement.

[F1] Absolute and relative cap duality hold for compact collared manifolds and closed manifolds, with arbitrary abelian-group local systems and commuting scalar actions. [[thm-compact-collared-manifold-local-coefficient-lefschetz-duality-in-zf]], [[thm-compact-oriented-manifold-local-coefficient-duality-in-zf]]

[F2] The supplied Hermitian structure identifies intrinsic dual coefficients with conjugate right coefficients, compatibly with scalar extension and restriction. [[lem-involutive-twisted-chain-duals-realize-local-coefficient-duality]]

[F3] A compact connected closed manifold has a choice-free one-vertex right-chain model. Its low-degree coefficient Bockstein is natural and exact without requiring arbitrary products of quotient-fiber maps to be onto. [[lem-compact-manifold-twisted-singular-chains-admit-one-vertex-reduction]], [[lem-choice-free-low-degree-coefficient-bockstein-on-compact-manifolds]]

[F4] The pair exact sequences and the signed cap boundary identity identify homology and cohomology connectors. [[thm-pair-long-exact-sequences-with-local-coefficients]], [[def-cup-and-cap-products-with-local-coefficient-pairings]]

## Proof

1.1 Write $M=\partial W$. Under relative cap duality, the map $j:H^2(W,M;K^\vee)\to H^2(W;K^\vee)$ corresponds to the intersection map on $H_2(W;K)$. This map is zero under the given boundary-generation hypothesis. Indeed, if $z=i_*b$ for $b\in H_2(M;K)$, closed duality represents $\bar b$ by a degree-one cohomology class on $M$. Its pair connector is the relative dual class of $\bar z$, by the cap boundary identity, and its image under $j$ is zero by exactness. Every $z$ has this form by hypothesis. Thus $j=0$, with intrinsic dual systems identified using the supplied Hermitian form. [F1, F2, F4, given, construct, algebra]

2.1 Extend $x$ by zero from $N$ to $H_1(M;R)$. Since it dies in $W$, the pair sequence supplies $a\in H_2(W,M;R)$ with $\partial a=x$. Absolute cap duality sends its conjugate to $u\in H^2(W;R^\vee)$, whose boundary restriction is the dual of $\bar x$, by the signed cap boundary formula in degree two. The image of $x$ in $H_1(M;K)$ is zero: on selected components this is the assumed vanishing and on other components $x$ was zero. Hence $u_K|_M=0$. Pair exactness puts $u_K$ in the image of $j$, which is zero by step 1.1. Choose one $R^\vee$-valued two-cocycle representing $u$. Since its image represents zero over $K$, one whole $K^\vee$-valued one-cochain $b$ satisfies $\delta b=u$. Its quotient $\nu=b\bmod R$ is a $(K/R)^\vee$-valued cocycle on $W$, and on each selected component its coefficient Bockstein is the dual of $\bar x$. This constructs a whole cochain, rather than choosing lifts of infinitely many quotient coefficients. [F1, F2, F3, F4, step 1.1, construct, algebra]

3.1 On a selected connected component $N_j$, closed duality gives $H^2(N_j;K^\vee)=0$ from $H_1(N_j;K)=0$. Also $H^1(N_j;K^\vee)=0$. To see this without a universal-coefficient theorem, use the one-vertex model over $K$ from [F3], so $C_0=K$. Its $d_1$ image is either zero or $K$. In the first case $H_1=0$ says $C_1=\operatorname{im}d_2$, so every one-cocycle vanishes. In the second case one vector $v$ with $d_1v=1$ splits $C_1=\ker d_1\oplus vK$; a one-cocycle vanishes on $\ker d_1=\operatorname{im}d_2$, so equals a zero-cochain composed with $d_1$. The dual identification in [F2] preserves these assertions. Exactness [F3] therefore makes the degree-one coefficient Bockstein an isomorphism. Consequently the restriction of $[\nu]$ in step 2.1 is exactly the inverse-Bockstein class defining the linking form of $x|_{N_j}$. This applies to the finite component list separately. [F1, F2, F3, step 2.1, construct, algebra]

4.1 Let $y$ also belong to the displayed kernel. Its image cycle in $W$ is the boundary of a single $R$-valued two-chain $c$. The sum of the component linking evaluations is therefore $\nu(y)=\nu(\partial c)=\delta\nu(c)=0$. Different components do not have cross terms because the chain and cochain groups on the finite disjoint union split componentwise; their cap fundamental classes carry their induced orientations. This is precisely $B_N(x,y)$. The proof used only finite component operations, exactness and one individual cochain witness, and made no assertion about the other boundary components. [F3, F4, step 2.1, step 3.1, algebra] ∎
