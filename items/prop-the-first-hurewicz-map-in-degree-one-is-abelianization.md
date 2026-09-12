---
id: "prop-the-first-hurewicz-map-in-degree-one-is-abelianization"
kind: "proposition"
title: "The first Hurewicz map is abelianization"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-hurewicz-homomorphism","def-based-loops-and-fundamental-group","def-singular-chain-complex-and-singular-homology","def-singular-boundary-operator","thm-singular-chain-homotopy-formula","thm-derived-subgroup-is-characteristic-and-abelianization-is-universal","lem-finite-choice","cor-homology-of-spheres","thm-fundamental-group-laws"]
sources:
  references:
    - title: Hatcher Hurewicz discussion §2.A/§4.2; May Chapter 15 §1
      url: https://math.mit.edu/~hrm/papers/notes-905.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

For every path-connected topological space $X$ and $x_0\in X$, the Hurewicz map
$$h:\pi_1(X,x_0)\longrightarrow H_1(X;\mathbb Z)$$
is surjective and has kernel $[\pi_1(X,x_0),\pi_1(X,x_0)]$. Hence it induces a natural isomorphism
$$\pi_1(X,x_0)^{\mathrm{ab}}\cong H_1(X;\mathbb Z).$$
The proof is choice-free and requires no CW, separation, local path-connectivity or local simple-connectivity assumption.

## Facts & Assumptions

[F1] [[def-hurewicz-homomorphism]] supplies the natural homomorphism defined using the positive circle generator.

[F2] [[def-based-loops-and-fundamental-group]] uses first-loop-first concatenation and equality given by endpoint-fixed homotopy. [[thm-fundamental-group-laws]] proves associativity, the constant identity and the reversed-path inverse.

[F3] [[def-singular-chain-complex-and-singular-homology]] and [[def-singular-boundary-operator]] give finite chains, cycles modulo boundaries, $\partial e=e(1)-e(0)$, and $\partial\sigma=\sigma_{12}-\sigma_{02}+\sigma_{01}$ for a singular triangle.

[F4] [[thm-singular-chain-homotopy-formula]] gives the prism relation for a path homotopy, including its endpoint terms.

[F5] [[thm-derived-subgroup-is-characteristic-and-abelianization-is-universal]] gives the universal abelian quotient and factorization of homomorphisms into abelian groups.

[F6] [[lem-finite-choice]] supplies paths for one finite list of vertices without AC.

[F7] [[cor-homology-of-spheres]] computes $H_1(S^1;\mathbb Z)\cong\mathbb Z$ by the alternating boundary cycle of an oriented triangle, transported from its simplicial boundary to singular homology.

## Proof

**Given:** A path-connected $X$ and a basepoint $x_0$. Write $G=\pi_1(X,x_0)$ and use additive notation in $G^{\mathrm{ab}}$. For one-chains write $u\sim v$ if $u-v$ is a singular boundary; neither chain is required individually to be a cycle.

1.1 A constant edge is the boundary of the constant singular two-simplex, since its three boundary terms have coefficients $1,-1,1$. If $a,b$ are composable paths, define $s:\Delta^2\to X$ as $(a*b)\circ\ell$, where in barycentric coordinates $\ell(t_0,t_1,t_2)=t_1/2+t_2$. On edges $01,12,02$ it gives respectively $a,b,a*b$, so $\partial s=b-(a*b)+a$ and $a*b\sim a+b$. If two paths are homotopic with endpoints fixed, [F4] says their difference is a prism boundary plus a difference of constant endpoint edges, which are themselves boundaries as just proved; hence they are equivalent under $\sim$. Finally $a*\bar a$ contracts rel endpoints by retracing shorter initial segments: on the two half-intervals use $a(2t(1-s))$ and $a(2(1-t)(1-s))$. Therefore $\bar a\sim-a$. All these are finite chain relations. [F2, F3, F4]

1.2 For a finite singular cycle $c=\sum_e m_e e$, let $V$ be its finite set of endpoints together with $x_0$. By path-connectedness and [F6], there are paths $p_v:x_0\to v$ for $v\in V$, with $p_{x_0}$ the constant path. Define $$T_p(c)=\sum_e m_e[\,p_{e(0)}*e*\bar p_{e(1)}\,]_{\mathrm{ab}}.$$ Repeated edges may be combined and zero coefficients removed; the sum is finite and lies in $G^{\mathrm{ab}}$. [F2, F3, F6, given]


2.1 The map in [F1] sends a loop, viewed as a singular one-cycle, to its homology class. To verify the generator identification, realize the oriented circle as the boundary of a positively oriented triangle. Its boundary is $e_{01}+e_{12}-e_{02}$ by [F3]. In that triangle-boundary simplicial complex, the one-cycle condition forces the three oriented edge coefficients to be equal, and there are no two-simplices, so this alternating boundary is a primitive positive generator; [F7] transfers that generator to singular homology. Step 1.1 identifies this class with the single positively traversed loop $e_{01}*e_{12}*\bar e_{02}$. Its parametrization gives the positive based identification $I/\partial I\cong S^1$, so postcomposing it with any based sphere map gives exactly the singular loop representing that based class, up to endpoint-fixed reparametrization. Thus $h([a])=[a]$ in singular homology with the stated orientation. Since $h$ is a homomorphism into an abelian group, [F5] factors it uniquely as $\bar h:G^{\mathrm{ab}}\to H_1(X)$. [F1, F3, F5, F7, step 1.1]

2.2 This value is independent of the chosen finite paths. For another family $p'_v$, put $d_v=[p'_v*\bar p_v]_{\mathrm{ab}}$. Canceling a path followed by its reverse, with the retracing homotopy of step 1.1, gives $$[p'_{e(0)}*e*\bar p'_{e(1)}]_{\mathrm{ab}}=d_{e(0)}+[p_{e(0)}*e*\bar p_{e(1)}]_{\mathrm{ab}}-d_{e(1)}.$$ The difference of the two sums is therefore $\sum_e m_e(d_{e(0)}-d_{e(1)})$. For each vertex its coefficient is the negative of its coefficient in $\partial c$, hence zero. Enlarging $V$ does not change the sum either. Thus there is one uniquely defined value $T(c)$ for each cycle, without choosing paths for all points of $X$. For two cycles choose paths on the union of their finite vertex sets; the same formula then proves $T(c+c')=T(c)+T(c')$ and $T(0)=0$. [F3, step 1.1, step 1.2]

3.1 This homomorphism on cycles kills boundaries. For one singular triangle $\sigma$, choose paths to its three vertex images and $x_0$. Write $a_{ij}=\sigma|_{[i,j]}$ and $L_{ij}=p_{\sigma(i)}*a_{ij}*\bar p_{\sigma(j)}$. The path $a_{01}*a_{12}$ is endpoint-fixed homotopic to $a_{02}$: in the convex triangle, interpolate the broken two-edge parametrized path linearly to the direct $02$ edge, then compose with $\sigma$. Cancellation of the middle $p$ and reversed $p$ shows $[L_{01}][L_{12}]=[L_{02}]$ in $G$. Thus the value assigned to $\partial\sigma$ is $[L_{12}]_{\mathrm{ab}}-[L_{02}]_{\mathrm{ab}}+[L_{01}]_{\mathrm{ab}}=0$. For an arbitrary finite two-chain, choose paths on the finite union of all its vertex images and apply this calculation term by term, with its integer coefficients. Any cancellation among its boundary edges also cancels the corresponding loop terms. By the independence in step 2.2 this proves $T(\partial b)=0$ for every two-chain $b$. Therefore $T$ descends to a homomorphism $\widetilde T:H_1(X)\to G^{\mathrm{ab}}$. [F3, F6, step 1.1, step 2.2]

4.1 For a cycle $c=\sum_e m_e e$, step 1.1 gives $$p_{e(0)}*e*\bar p_{e(1)}\sim p_{e(0)}+e-p_{e(1)}.$$ Summing with coefficients $m_e$, the $p_v$ terms cancel exactly because $\partial c=0$. The sum of the based loops is therefore homologous to $c$. By step 2.1 this says $\bar h\widetilde T([c])=[c]$. Conversely, for a based loop $a$ choose only the constant path to its sole endpoint $x_0$. Its defining sum gives $T(a)=[a]_{\mathrm{ab}}$, so $\widetilde T\bar h([a]_{\mathrm{ab}})=[a]_{\mathrm{ab}}$. Every element of $G^{\mathrm{ab}}$ is the coset of some element represented by a based loop, hence these are inverse maps on the whole groups. [F3, step 1.1, step 2.1, step 2.2, step 3.1]

5.1 Thus $\bar h$ is an isomorphism. Since $h=\bar h\circ(G\to G^{\mathrm{ab}})$, it is onto and its kernel is exactly the kernel of the quotient, namely the commutator subgroup. Naturality follows from [F1] and [F5]: a based map commutes with $h$ and induces the map of universal abelian quotients, so it commutes with $\bar h$, and then also with its inverse. No global family of transport paths is used in this conclusion. [F1, F5, step 2.1, step 4.1]

6.1 The zero cycle uses just the basepoint path and gives zero; integer coefficients, negative coefficients, repeated simplices and degenerate triangles were handled by linearity and the explicit triangle relations. For a singleton target, all loops are constant and all one-cycles are boundaries, so both groups are zero. Empty $X$ has no basepoint and is not an instance. The proof uses path-connectedness exactly to supply paths for the finite vertex sets in steps 1.2 and 3.1. Finite choice suffices for each such set, and independence specifies a unique value for every cycle; no AC or countable choice is used. Endpoint-fixed path homotopies and first-loop-first order were retained throughout. [F2, F6, step 1.1, step 1.2, step 2.2, step 3.1, step 4.1, step 5.1] ∎
