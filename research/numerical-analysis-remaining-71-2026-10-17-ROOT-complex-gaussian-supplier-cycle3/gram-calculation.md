# Exact conditional Gram covariance: valid but insufficient

This is a same-round research calculation responding to root's Gram-route suggestion. It is not a complete expected-rangefinder proof or a proposed accepted supplier.

Let G be m-by-k normalized complex Gaussian. For a fixed positive Hermitian k-by-k matrix M, set Q=G M G*. For a fixed compatible complex S set H=SS*. Complex Wick expansion uses only

E[g_ia conjugate(g_jb)]=delta_ij delta_ab,

E[g_ia g_jb]=0,

and the scalar fourth moment E|g|^4=2 (the exponential squared-modulus density). Thus

E_G Q_ij=delta_ij tr M,

E_G[(Q_ij-delta_ij tr M) conjugate(Q_ab-delta_ab tr M)]
=delta_ia delta_jb tr(M^2).

For completeness, expand Q_ij=sum_uv g_iu M_uv conjugate(g_jv). In the product with conjugate(Q_ab), the pairing internal to each Q gives delta_ij delta_ab (tr M)^2 and cancels on centering. The remaining pairing joins g_iu to conjugate(g_ax), and g_by to conjugate(g_jv), forcing i=a, j=b, u=x, y=v and giving sum_uv M_uv M_vu=tr M^2. Coincident scalar indices are correctly counted by E|g|^4=2.

Diagonalize S*S by deterministic unitary invariance, or expand its entries in the previous covariance identity. The resulting exact centered weighted Frobenius identity is

E_G ||S(Q-(tr M)I)S*||_F^2=(tr M^2)||S||_F^4.

Now let M=(Omega_1 Omega_1*)^-1 be independent of G, with Omega_1 k-by-(k+p) normalized complex Gaussian, p>=2. Put mu=E tr M=k/p, supplied by the actual canonical inverse-Frobenius lemma. Centering conditionally, the cross term vanishes and gives

E ||S(Q-mu I)S*||_F^2
= (E tr M^2)||S||_F^4 + Var(tr M)||SS*||_F^2.

All integrals here exist from the actual inverse spectral moment bound at q=2 (2<p+1). No unproved Wishart density or independence of inverse entries is needed.

The established reciprocal Gamma law gives E M_11^2=1/[p(p-1)]. The invariant complex-sphere fourth moment gives

E M_11^2=[E(tr M)^2+E tr M^2]/[k(k+1)].

To see this identity, diagonalize each fixed positive M and use E|v_i|^4=2/[k(k+1)] and E|v_i|^2|v_j|^2=1/[k(k+1)] for i!=j, obtained from the same normalized complex Gaussian sphere coordinates already proved in the canonical spectral-moment item. Integrate over M and use unitary invariance. Jensen and tr M^2>=(tr M)^2/k consequently give the sufficient explicit bounds

E tr M^2 <= k(k+p)/[p^2(p-1)],

Var(tr M) <= k^2/[p^2(p-1)].

For a weighted product S G M^(1/2), the positive Gram matrix is S Q S*. Since lambda_max(mu H+E)<=mu||H||op+||E||op and ||E||op<=||E||F, Jensen gives the valid bound

E||S G M^(1/2)||op
<= { (k/p)||S||op^2
 + [ (E tr M^2)||S||F^4 + Var(tr M)||SS*||F^2 ]^(1/2) }^(1/2).

The formula proves an actual covariance-based estimate, but it does not close the approved coefficient. Even for an unweighted rank-m tail and k much larger than p, the dominant Frobenius-fluctuation coefficient from these explicit bounds is of order sqrt(k)/p^(3/4) times ||S||F, whereas the required tail coefficient has order sqrt(k)/p. It loses a factor of order p^(1/4). This diagnoses this particular Frobenius conversion, not a counterexample to the desired theorem. Obtaining the required spectral fluctuation control directly, with effective rank and the exact constants, remains the missing step.
