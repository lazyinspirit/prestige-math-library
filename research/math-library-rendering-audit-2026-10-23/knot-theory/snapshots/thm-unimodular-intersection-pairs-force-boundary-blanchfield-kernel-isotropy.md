---
id: thm-unimodular-intersection-pairs-force-boundary-blanchfield-kernel-isotropy
kind: theorem
title: Unimodular intersection pairs force boundary kernel isotropy
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
    - title: Cochran, Orr and Teichner, Knot concordance, Whitney towers and
        L2-signatures
      url: https://arxiv.org/pdf/math/9908117
      locator: Section2.1, Bockstein-duality linking form
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
---

## Statement

Let $W$ be a compact connected oriented topological four-manifold with a supplied boundary collar, and put $M=\partial W$. Let $R\subseteq K$ be a unital involution-stable subring of an involutive division ring. Supply a based rank-one right-$R$ coefficient system $\mathcal R$ on $W$, with its base fiber identified with $R$, unitary monodromy and the transported standard Hermitian form. Write $H_*(W;R)$ and $H_*(W;K)$ for its homology and scalar-extended homology.

Define the equivariant intersection pairing $\lambda_R$ by sending $\bar p\in\overline{H_2(W;R)}$ through inverse relative cap duality to $H^2(W,M;\mathcal R^\vee)$, then into $H^2(W;\mathcal R^\vee)$, then evaluating on $q\in H_2(W;R)$. Here $\mathcal R^\vee$ is the intrinsic dual coefficient system, identified with the conjugate system by the supplied Hermitian form. Thus $\lambda_R(p,q)$ is conjugate-linear in $p$ and right-linear in $q$. Define $\lambda_K$ by the same construction over $K$.

Suppose $m\ge0$ and classes $\ell_1,\ldots,\ell_m,d_1,\ldots,d_m\in H_2(W;R)$ satisfy
$$\lambda_R(\ell_i,\ell_j)=0,\qquad\lambda_R(\ell_i,d_j)=\lambda_R(d_j,\ell_i)=\delta_{ij},$$
and suppose
$$\dim_K\bigl(H_2(W;K)/\operatorname{im}H_2(M;K)\bigr)\le2m.$$
Let $M_0$ be one connected boundary component with $H_1(M_0;K)=0$. Its coefficient Bockstein, oriented cap duality and evaluation define the linking form $B_0$ with values in $K/R$. Then
$$B_0(x,y)=0\quad\text{for all }x,y\in\ker\{H_1(M_0;R)\longrightarrow H_1(W;R)\}.$$
No vanishing condition on the other boundary components is imposed. No choice axiom, finite CW structure, or general noncommutative universal-coefficient theorem is assumed.

## Facts & Assumptions

**Given:** The manifolds, collar, rings, unitary coefficient system, finite list of intersection pairs and dimension bound in the Statement.

[F1] Oriented relative cap duality holds for a compact collared manifold with arbitrary abelian-group local systems and commuting scalar actions; closed cap duality holds on its boundary. [[thm-compact-collared-manifold-local-coefficient-lefschetz-duality-in-zf]], [[thm-compact-oriented-manifold-local-coefficient-duality-in-zf]]

[F2] Supplied standard parallel Hermitian structures identify intrinsic dual coefficient systems with conjugate right systems. The cochain identification is simplexwise, so restriction to a subspace and the relative cochain subcomplex preserve it. [[lem-involutive-twisted-chain-duals-realize-local-coefficient-duality]]

[F3] A compact connected closed manifold has a choice-free one-vertex right-chain model with degree-zero term its coefficient ring. The low-degree coefficient Bockstein is natural and exact, without lifting an infinite product of quotient fibers. [[lem-compact-manifold-twisted-singular-chains-admit-one-vertex-reduction]], [[lem-choice-free-low-degree-coefficient-bockstein-on-compact-manifolds]]

[F4] The pair exact sequences use explicit zero extension for subspace cochains. The cap boundary formula identifies their connectors after the prescribed degree signs. [[thm-pair-long-exact-sequences-with-local-coefficients]], [[def-cup-and-cap-products-with-local-coefficient-pairings]]

## Proof

1.1 All coefficient maps and pair maps in the definitions of $\lambda_R,\lambda_K$ commute with cap, conjugation and evaluation: on simplex representatives these are transport, the ring inclusion and finite sums. Thus scalar extension carries each displayed $R$ intersection identity to its $K$ counterpart. In a unitary frame a right-linear functional is conjugate to a right vector by the standard form, as in [F2]; this calculation is valid equally on simplices of a manifold with boundary and on its relative subcomplex. All cap and exact-sequence arguments below can therefore be performed on the intrinsic underlying abelian-group systems, retaining the left coefficient actions. [F1, F2, F4, given, construct, algebra]

2.1 The pairing $\lambda_K$ descends in both variables to $V=H_2(W;K)/\operatorname{im}H_2(M;K)$. For the first variable, take $b\in H_2(M;K)$. Closed duality represents $\bar b$ by a class of degree one on $M$ with dual coefficients. Its pair cohomology connector maps to the relative duality preimage of $\overline{i_*b}$: extending the cocycle to $W$, the identity $\delta a\cap[W,M]=a|_M\cap[M]+\partial(a\cap[W,M])$ in this degree proves the equality on homology. Its image in absolute cohomology is zero by exactness, so $\lambda_K(i_*b,q)=0$. For the second variable, the absolute cohomology class defining $\lambda_K(p,-)$ is the image of a relative class; its restriction to $M$ is zero. Naturality of evaluation gives $\lambda_K(p,i_*b)=0$. These also prove that the kernel of the map from relative degree-two cohomology to absolute cohomology corresponds under duality exactly to the boundary image in degree-two homology. [F1, F4, step 1.1, construct, algebra]

3.1 The images of the $2m$ given classes in $V$ are linearly independent. Indeed if $v=\sum_j\ell_j r_j+d_j s_j$ is zero there, pair it on the left with each $\ell_i$ to obtain $s_i=0$, and then with each $d_i$ to obtain $r_i=0$. The dimension bound makes them a basis of $V$, including the empty basis if $m=0$. Write $D_{ij}=\lambda_R(d_i,d_j)\in R$. If a class $z\in H_2(W;K)$ satisfies $\lambda_K(z,\ell_i),\lambda_K(z,d_i)\in R$ for every $i$, write its class in that basis as $\sum_j\ell_j r_j+d_j s_j$. Then $\lambda_K(z,\ell_i)=\bar s_i$ and $\lambda_K(z,d_i)=\bar r_i+\sum_j\bar s_jD_{ji}$. Involution stability of $R$ first gives $s_i\in R$ and then $r_i\in R$. Consequently $z$ is congruent modulo the boundary image to an actual class $p=\sum_j\ell_jr_j+d_js_j\in H_2(W;R)$, viewed in $K$ homology. This is finite matrix algebra, not a selection of an infinite basis. [given, step 1.1, step 2.1, construct, algebra]

4.1 Let $x$ belong to the displayed kernel and extend it by zero to $H_1(M;R)$. The homology pair sequence gives a relative class $a\in H_2(W,M;R)$ with $\partial a=x$. Inverse absolute-to-relative cap duality sends $\bar a$ to $u\in H^2(W;\mathcal R^\vee)$. By the cap boundary identity in degree two, its restriction to $M$ is the closed-duality preimage of $\bar x$. The image of $x$ in $K$ homology is zero, since it is supported on $M_0$ and $H_1(M_0;K)=0$. Hence $u_K$ restricts to zero on the whole of $M$, and the cohomology pair sequence gives a relative degree-two class mapping to $u_K$. Relative cap duality identifies it with $\bar z$ for some $z\in H_2(W;K)$. Therefore $\lambda_K(z,\ell_i)=u_K(\ell_i)$ and $\lambda_K(z,d_i)=u_K(d_i)$, both in $R$ because $u$ was an $R$-cohomology class evaluated on $R$-cycles. Step 3.1 supplies an integral class $p$ congruent to $z$ modulo the boundary image. By the last assertion of step 2.1 its relative dual class has the same absolute $K$-image $u_K$. [F1, F2, F4, step 2.1, step 3.1, construct, algebra]

5.1 Choose an $R$-valued cocycle representing $u$ and a relative $R$-valued cocycle representing the dual of $\bar p$. Their difference $a_2$ is an absolute $R$-valued two-cocycle whose image is zero in $K$ cohomology by step 4.1. By the definition of a zero cohomology class, there is one whole $K$-valued one-cochain $b$ with $\delta b=a_2$ in $K$ coefficients. No collection of quotient-fiber representatives is being lifted. Its quotient $\nu=b\bmod R$ is an intrinsic $(K/R)$-valued one-cocycle on $W$. The relative cocycle subtracted to form $a_2$ vanishes on $M$. Thus on $M_0$, the coefficient Bockstein sends $[\nu|_{M_0}]$ to $[u|_{M_0}]$, the duality preimage of $\bar x$, by the actual representative formula in [F3]. [F2, F3, F4, step 4.1, construct, algebra]

6.1 On $M_0$ the Bockstein in step 5.1 is an isomorphism. Its surrounding $H^2(K)$ term is zero by closed duality and $H_1(M_0;K)=0$. For its $H^1(K)$ term use [F3]'s one-vertex model over $K$. Its degree-zero term is $K$, and the image of $d_1$ is zero or $K$. In the first case $d_1=0$, and the homology vanishing forces every degree-one chain to be a boundary, so every dual one-cocycle is zero. In the second case choose one $z_1$ with $d_1z_1=1$; splitting off $z_1K$ and using $\ker d_1=\operatorname{im}d_2$ shows that each dual one-cocycle is a coboundary. The intrinsic dual identification [F2] therefore gives $H^1(K)=0$ too. Exactness [F3] proves the claimed Bockstein isomorphism. Hence the inverse-Bockstein–duality evaluation defining $B_0(x,y)$ is precisely evaluation of $\nu|_{M_0}$ on a cycle for $y$. [F1, F2, F3, step 5.1, construct, algebra]

7.1 If $y$ is also in the displayed kernel, its image cycle in $W$ is the boundary of one $R$-valued two-chain $c$. Cochain evaluation then gives $\nu(y)=\nu(\partial c)=\delta\nu(c)=0$. By step 6.1 this is $B_0(x,y)$. The other boundary components were used only through the pair sequences and the quotient $V$; none was assumed $K$-acyclic. All bases, coefficients and lifts above belonged to finite matrix computations or one supplied whole cochain, and the coefficient systems carry the supplied parallel Hermitian structure throughout. Thus no choice principle or noncommutative universal-coefficient theorem is used. This proves the full claimed kernel isotropy. [F3, F4, step 3.1, step 4.1, step 5.1, step 6.1, algebra] ∎
