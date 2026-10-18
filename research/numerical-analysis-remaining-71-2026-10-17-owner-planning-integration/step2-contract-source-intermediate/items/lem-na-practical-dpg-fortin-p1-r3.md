---
id: "lem-na-practical-dpg-fortin-p1-r3"
kind: "lemma"
title: "A uniformly bounded Fortin map for the practical P1/R3 DPG family"
status: "draft"
origin: "session"
pipeline_run: "numerical-analysis-remaining-71-2026-10-17"
dependency_level: 7
deps:
  [
    "def-na-ultraweak-poisson-dpg-formulation",
    "lem-na-ultraweak-poisson-skeleton-quotients",
    "def-na-simplicial-mesh-rt-bdm-spaces",
    "def-na-contravariant-piola-map",
    "lem-na-piola-preserves-rt-bdm-spaces",
    "thm-affine-piola-differential-and-trace-moment-identities",
    "lem-na-hdiv-weak-normal-trace",
    "lem-na-simplex-h1-facet-trace-bound",
    "lem-shape-regular-affine-simplex-scaling",
    "def-countable-choice",
    "thm-reference-simplex-poincare-wirtinger"
  ]
justified_by: []
aliases: []
proof_strategy: direct
provenance: { "statement": "literature-derived", "proof": "ai-altered" }
sources:
  {
    "references":
      [
        {
            "title": "Jay Gopalakrishnan and Weifeng Qiu, An analysis of the practical DPG
              method",
            "url": "https://wiki.math.ntnu.no/_media/tma4183/2017v/1107.4293.pdf",
            "locator": "Complete 15-page paper; §2 Theorem 2.1 and proof; §§3.1–3.4,
              including Lemmas 3.1–3.3 on ultraweak Poisson and Fortin maps."
          },
        {
            "title": "Leszek Demkowicz and Jay Gopalakrishnan, Analysis of the DPG method
              for the Poisson equation",
            "url": "https://web.pdx.edu/~gjay/pub/DPGlaplace.pdf",
            "locator": "Complete 22-page paper; §§3.1–3.2, Lemmas 4.1–4.4, Theorem 4.2. The
              graph inf-sup proof assumes simply connected Lipschitz domain."
          },
        {
            "title": "Leszek Demkowicz, Mathematical Theory of Finite Elements",
            "url": "https://users.ices.utexas.edu/~leszek/classes/EM394H/book.pdf",
            "locator": "Complete 229-page course monograph; §§5.1–5.2 ideal/practical DPG;
              §§5.6.2 and 5.6.4 Fortin and mixed stability."
          },
        {
            "title": "C. Carstensen, L. Demkowicz, and J. Gopalakrishnan, A Posteriori Error
              Control for DPG Methods",
            "url": "https://web.pdx.edu/~gjay/pub/cdg.pdf",
            "locator": "Complete 21-page paper; full §2 and Theorem 2.1 proof, §3.1. The
              Poisson stability application cites the same simply-connected
              source."
          }
      ]
  }
verification:
  precheck: pass
---

## Statement

Assume Countable Choice. For trials $P_1(K)^2\times P_1(K)$, continuous trace $\widetilde P_2(\partial K)$ and normal trace $P_1(\partial K)$ on a shape-regular triangular mesh, there is an element-local Fortin map into $P_3(K)^2\times P_3(K)$. It has a mesh-independent broken graph bound, preserves the scalar cell mean, satisfies $\|v-\Pi^{grad}_3v\|_{L^2(K)}\le Ch_K\|\nabla v\|_{L^2(K)}$, and $b(w_h,y-\Pi y)=0$ for all discrete trial tuples and broken tests.

## Facts & Assumptions

**Given:** The stated polynomial trial/test spaces and Countable Choice.

[A1] Countable Choice is declared for Sobolev traces. ([[def-countable-choice]])

[F1] The DPG form and trial moments are fixed by its definition. ([[def-na-ultraweak-poisson-dpg-formulation]])

[F2] Skeleton norms are global quotient lift norms. ([[lem-na-ultraweak-poisson-skeleton-quotients]])

[F3] The RT polynomial families are $\operatorname{RT}_k=\mathbb P_k^d+x\widetilde{\mathbb P}_k$. ([[def-na-simplicial-mesh-rt-bdm-spaces]])

[F4] The weak H(div) normal trace is continuous. ([[lem-na-hdiv-weak-normal-trace]])

[F5] H1 facet trace is bounded. ([[lem-na-simplex-h1-facet-trace-bound]])

[F6] Shape-regular affine simplex scaling is uniform. ([[lem-shape-regular-affine-simplex-scaling]])

[F7] A mean-zero H1 function on the reference simplex satisfies the Poincare–Wirtinger inequality. ([[thm-reference-simplex-poincare-wirtinger]])

[F8] The contravariant Piola map sends $\operatorname{RT}_2$ bijectively between affine simplices; for weak H(div) fields it preserves the distributional divergence transformation, and affine scalar pullback transforms H1 weak gradients. ([[def-na-contravariant-piola-map]], [[lem-na-piola-preserves-rt-bdm-spaces]], [[thm-affine-piola-differential-and-trace-moment-identities]])

[F9] Cell weak normal traces are the Green functionals on $H^1/H^1_0$ and satisfy the graph-norm bound. ([[lem-na-hdiv-weak-normal-trace]])

## Proof

1.1 On the reference triangle $B^{grad}_3=\{p\in P_3:p(a_i)=0\}$ has dimension $7$. Define $\Pi^0_3w\in B^{grad}_3$ by matching one cell mean and two edge $P_1$ moments on each edge. In the homogeneous system an edge restriction is $t(1-t)(a+bt)$; testing against $a+bt$ forces its weighted square integral to vanish. Each edge restriction is zero, leaving $c\lambda_0\lambda_1\lambda_2$, whose mean forces $c=0$. Hence the seven scalar moments are unisolvent. [F5, algebra]


1.2 On the reference triangle $RT_2=P_2^2+x\widetilde P_2$ has dimension $15$. Its normal trace map is onto broken P2: for an edge $F$ opposite vertex $a_i$, extend any $q\in P_2(F)$ polynomially in the other two barycentric coordinates and set $\tau=(x-a_i)q(x)/H_i$, where $H_i$ is the altitude to $F$. This vector is tangent to the other two edges and has normal trace $q$ on $F$; it lies in $RT_2$ because its cubic part is $x$ times a homogeneous degree-two polynomial and its remaining terms lie in $P_2^2$. Thus the broken normal trace image has dimension $9$. Let $B^{div}_3$ be its inverse image of continuous P2 boundary traces, a $12$-dimensional subspace. Define $\Pi^{div}_3\tau\in B^{div}_3$ by matching six volume moments against $P_1^2$ and six continuous boundary P2 normal moments. In the homogeneous system the normal trace is continuous P2 and orthogonal to itself, hence zero. Green’s identity and $\nabla P_2\subset P_1^2$ then give $div\tau=0$; its homogeneous cubic part $xq_2$ has divergence $4q_2$, so $\tau\in P_2^2$. Write $\tau=R\nabla\phi$: explicitly, for polynomial $\tau=(\tau_1,\tau_2)$ use $\phi(x,y)=\int_0^x\tau_2(s,0)\,ds-\int_0^y\tau_1(x,t)\,dt$. The identity $\partial_x\tau_1+\partial_y\tau_2=0$ gives $\partial_x\phi=\tau_2$ and $\partial_y\phi=-\tau_1$, and $\deg\phi\le3$. Zero normal trace makes $\phi$ constant on each edge; vertex continuity makes these constants equal. After subtracting the common constant, $\phi=c\lambda_0\lambda_1\lambda_2$. The volume moment against $Rx$ is $\int_K\nabla\phi\cdot x=-2c\int_K\lambda_0\lambda_1\lambda_2$ by Green’s identity and $\phi|_{\partial K}=0$, so $c=0$. Thus the 12 moments are unisolvent. [F3, F4, algebra]


2.1 On the reference triangle set $\widehat\Pi^{grad}_3\widehat v=\bar{\widehat v}+\Pi^0_3(\widehat v-\bar{\widehat v})$; for a physical cell let $F_K(\widehat x)=A_K\widehat x+b_K$ be its orientation-preserving affine map and define $\Pi^{grad}_{3,K}v=(\widehat\Pi^{grad}_3(v\circ F_K))\circ F_K^{-1}$. Affine change of variables preserves the cell mean and, since each edge Jacobian is constant, the edge $P_1$ moments. The bounded inverse reference moment matrix, [F5], mean-zero Poincare–Wirtinger [F7], and shape scaling [F6] yield $\|\Pi^{grad}_{3,K}v\|_{H^1(K)}\le C\|v\|_{H^1(K)}$ and $\|v-\Pi^{grad}_{3,K}v\|_2\le Ch_K\|\nabla v\|_2$. [A1, F5, F6, F7, step 1.1, algebra]


2.2 Let $F_K(\widehat x)=A_K\widehat x+b_K$, $J_K=\det A_K>0$, and $\widehat\tau=J_KA_K^{-1}(\tau\circ F_K)$. Applying [F8] to the affine inverse shows $\widehat\tau\in H(\operatorname{div};\widehat K)$ with the transformed divergence. Define the physical projection by $\Pi^{div}_{3,K}\tau:=\mathcal P_K(\widehat\Pi^{div}_3\widehat\tau)$. For every $w\in H^1(K)$, $w\circ F_K\in H^1(\widehat K)$ by [F8], and the weak Green functional, affine weak-derivative/divergence transformations, and change of variables give $\langle\gamma_{n,K}\tau,[w]\rangle=\int_{\widehat K}\bigl(\widehat\tau\cdot\widehat\nabla(w\circ F_K)+(\widehat{\operatorname{div}}\widehat\tau)(w\circ F_K)\bigr) =\langle\gamma_{\widehat n,\widehat K}\widehat\tau,[w\circ F_K]\rangle.$ The volume moments also transport: for $p\in P_1(K)^2$, affine change of variables gives $(\Pi^{div}_3\tau,p)_K=(\widehat\Pi^{div}_3\widehat\tau,A_K^{\mathsf T}(p\circ F_K))_{\widehat K},\qquad A_K^{\mathsf T}(p\circ F_K)\in P_1(\widehat K)^2,$ and the same identity with $\widehat\Pi^{div}_3\widehat\tau$ replaced by $\widehat\tau$; hence every physical $P_1(K)^2$ volume moment is matched. This derives the weak normal-trace transport for arbitrary $H(\operatorname{div})$ inputs; it does not infer it from the smooth-field flux identity. Each continuous boundary $P_2$ function on a triangle is the trace of a polynomial in $P_2(K)$ (the six vertex and edge-midpoint values determine that polynomial), so the identity transports exactly the six boundary moments used in step 1.2. By [F8], the Piola-conjugated reference projection lands in $\operatorname{RT}_2(K)\subset P_3(K)^2$. Its reference moment vector is bounded by $C\|\widehat\tau\|_{H(\operatorname{div};\widehat K)}$: volume moments are controlled by $L^2$, and boundary moments by [F9] and the fixed polynomial trace norms. The unisolvent reference moment matrix therefore gives $\|\widehat\Pi^{div}_3\widehat\tau\|_{L^2(\widehat K)}\le C\|\widehat\tau\|_{H(\operatorname{div};\widehat K)}$. In dimension two, [F6] implies $J_K^{1/2}\|A_K^{-1}\|\le C$ and $\|A_K\|J_K^{-1/2}\le C$, while $\|\widehat\tau\|_{L^2}\le C\|\tau\|_{L^2(K)}$ and $\|\widehat{\operatorname{div}}\widehat\tau\|_{L^2}\le C h_K\|\operatorname{div}\tau\|_{L^2(K)}$. Since $h_K\le\operatorname{diam}\Omega$ on the fixed bounded domain, Piola scaling gives $\|\Pi^{div}_3\tau\|_{L^2(K)}\le C_\Omega\|\tau\|_{H(\operatorname{div};K)}$. Finally, for every $q\in P_2(K)$, Green’s formula, the matched volume moments against $\nabla q\in P_1(K)^2$, and the matched continuous boundary moments imply $(\operatorname{div}\Pi^{div}_3\tau,q)_K=(\operatorname{div}\tau,q)_K$. Thus $\operatorname{div}\Pi^{div}_3\tau=P_2(\operatorname{div}\tau)$ and its $L^2$ norm is at most $\|\operatorname{div}\tau\|_{L^2(K)}$. This proves the uniform broken H(div) graph bound. [A1, F3, F4, F6, F8, F9, step 1.2, algebra]


3.1 Vector moments match $\sigma_h\in P_1^2$, and the divergence projection from step 2.2 matches $u_h\in P_1$. The continuous boundary $P_2$ moments match $\widehat u_h$, while the scalar edge $P_1$ moments match $\widehat\sigma_{n,h}$. For the remaining volume term, put $q=v-\Pi^{grad}_3v$ and integrate $-(\sigma_h,\nabla q)_K$ by parts: $\operatorname{div}\sigma_h\in P_0(K)$ pairs to zero with $q$ by cell-mean preservation, and $\sigma_h\cdot n\in P_1(F)$ pairs to zero with $q$ on each edge by the scalar edge moments. Hence every term of [F1] vanishes locally, and summing gives $b(w_h,y-\Pi y)=0$. The cell bounds add in broken graph norms. [A1, F1, F2, step 2.1, step 2.2, algebra] ∎

