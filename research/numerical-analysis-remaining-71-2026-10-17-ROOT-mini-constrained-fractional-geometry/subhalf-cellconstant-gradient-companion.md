# Sub-half negative-norm companion for cellconstant gradients

Research proof, 2026-10-18. This is a scalar gradient approximation lemma, not a negative angle for the MINI mass projector. No canonical files or controls changed.

Fix 0<s<1/2 and put t=1-s. For a matching shape-regular simplicial mesh, let M_h=P0(T_h)^d and let Q_h be the continuous P1 scalar space, without any boundary condition. Then

    inf_(q_h in Q_h) ||m-grad q_h||H^-s(D)
       <= C_s inf_(phi in H^t(D)) ||m-grad phi||H^-s(D),   (1)

for every m in M_h. Here H^-s(D) is the dual of H_0^s(D), with the equivalent zero-extension norm on its tests. Below half, H_0^s(D)=H^s(D). Constants are independent of grading. Mean-zero normalization of q_h is immaterial.

## Local potential estimate and its source

For a cell K define the scaled positive norm

    ||v||s,K,sc^2=h_K^(-2s)||v||2,K^2+|v|Hs(K)^2,

and let ||r||-s,K,sc be its dual, with pairing defined by zero extension of the test. Likewise define ||v||t,K,sc with exponent t. For r=grad phi-m_K, choose the affine p_K with gradient m_K and mean equal to the mean of phi. Then

    ||phi-p_K||t,K,sc <= C_s ||r||-s,K,sc.              (2)

The reference-simplex derivative estimate used here is established by the regularized Poincare operator: R_1 maps H^-s to H^(1-s), and R_1 d phi=phi-<theta,phi>. The scalar constant may be changed to the mean at bounded cost. Affine scaling gives exactly (2).

Source checked in full text: Martin Costabel and Alan McIntosh, *On Bogovskii and regularized Poincare integral operators for de Rham complexes on Lipschitz domains*, arXiv:0808.2614, https://arxiv.org/pdf/0808.2614 . The relevant statements are the definition of H^a(Omega) as a restriction/quotient space in section 2, the homotopy identity (3.12) at degree zero, Corollary 3.4 (mapping H^a to H^(a+1) for every real a on a domain starlike with respect to a ball), and Proposition 4.1(i). These statements were read from the downloaded PDF, not inferred from its abstract. Simplices are uniformly starlike after shape-regular affine normalization.

Below half, the intrinsic scaled H^s norm used here is uniformly equivalent, under affine scaling, to the norm of zero extension into R^d. Consequently the local restriction negative norm in the cited theorem is equivalent to the displayed dual norm. This is the specific reason for keeping s<1/2 in this proof.

## Summing the local negative norms

For arbitrary cell tests v_K, zero extension gives

    ||sum_K v_K||Hs(D)^2 <= C_s sum_K ||v_K||s,K,sc^2.  (3)

Indeed each cell zero-extension norm is bounded by its scaled intrinsic norm for s<1/2. In the global double integral, at most two zero-extended summands are nonzero at a pair of points. Pointwise Cauchy therefore bounds the norm of the sum by twice the squared-sum norms. The L2 part is disjoint. Duality in this finite Hilbert direct sum gives

    sum_K ||r|K||-s,K,sc^2 <= C_s ||r||H^-s(D)^2.       (4)

No converse localization is claimed. In particular (4) is not an assertion that a global negative norm is bounded by a weighted L2 norm.

## Averaging the affine potentials

Let p be the broken affine function p_K from (2). At every mesh vertex average the values p_K(a) over incident cells, obtaining a continuous affine q_h. Boundary vertices are included; there is no scalar Dirichlet condition.

The standard local averaging estimate, with t in (1/2,1), is

    ||phi-q_h||Ht(D)^2
       <= C_t sum_K ||phi-p_K||t,K,sc^2.               (5)

Here is the local content of this estimate. Across F=K intersect L, phi has one trace and hence [p]=-(phi-p_K)+(phi-p_L). Since [p] is affine, inverse scaling on F and the H^t trace inequality give, at each vertex a of F,

    |p_K(a)-p_L(a)|
       <= C h_F^(t-d/2)
                (||phi-p_K||t,K,sc+||phi-p_L||t,L,sc).

A vertex star contains a uniformly bounded number of cells and has uniformly comparable sizes. Connecting its cells by faces therefore bounds every nodal averaging correction. Polynomial inverse scaling bounds the scaled H^t norm of p_K-q_h on each cell by the nearby errors above. Summing gives the corresponding bound for the broken scaled H^t norm of phi-q_h.

To pass to the global norm, use that phi-q_h has matching traces. On a bounded shape-regular patch, gluing H^t functions with matching traces is bounded for 1/2<t<1; after scaling, its norm is bounded by the sum of scaled cell norms. Cover neighboring cell pairs by these bounded patches. Nonneighboring pairs in the Slobodeckij integral are bounded directly by the h_K^(-2t)L2 terms, since their separation from the inner part of K is comparable to h_K. Equivalently one may use a bounded-overlap partition of unity on vertex patches and the scaled H^t product estimate. This proves (5) with local sizes, without a global mesh ratio.

Combining (2), (4), and (5) yields

    ||phi-q_h||H^(1-s)(D) <= C_s ||grad phi-m||H^-s(D). (6)

The distributional derivative maps H^(1-s)(D) boundedly into H^-s(D), so the triangle inequality proves (1).

## Precise limit of this result

For g=F*delta, the weighted negative-curl lemma in the neighboring note controls e=(I-P0)g in H^-s. Applying (1) to P0g can therefore control g modulo grad Q_h by its distance to continuous gradients, in this same negative norm. It does not yet prove

    ||delta||H^-s <= C dist_H^-s(F*delta,grad H^(1-s)),

or its weighted-oscillation variant. The L2 argument (delta,F*delta)=||delta||2^2 cannot be reused with a negative-norm duality map without proving that it preserves the relevant kernel/gradient orthogonality. No such preservation is asserted.
