# Exact basepoint relations, conditional only on an actual colored count matrix

The new geometric old-link construction must supply a finite polynomial matrix $D$ over the independent marked-variable ring $P$, with the actual curved identity $D^2=\omega I$. For an alternating marked link,
$$\omega=\sum_{\text{oriented adjacent }w,z\text{ intervals}}U_wV_z.$$
Each variable occurs at most to the first power in this polynomial, although one pair may occur twice and cancel. The following derivations supply the basepoint algebra once that geometric matrix and its curvature have been constructed. They do not prove existence, regularity or the curvature count.

For an individual variable $x_r$, let $D_r$ mean entrywise formal differentiation BEFORE identifying any colors. Differentiating the actual matrix identity gives
$$DD_r+D_rD=\omega_r I.$$
After sending all w variables to $U$ and all z variables to $V$, each $\omega_r$ vanishes: the two intervals incident to the marked point contribute two equal terms. Hence $\Phi_w=(D_{U_w})_{\rm col}$ and $\Psi_z=(D_{V_z})_{\rm col}$ are actual equivariant chain maps. They are finite and polynomial; differentiating a nonzero coefficient power only decreases a positive exponent, so it introduces no negative exponents. The differentiation must precede coloring; it does not mean differentiating the colored matrix with respect to the common variable.

For distinct variables $x_r,x_s$, differentiate the same identity twice and collect the four matrix terms. With $H_{rs}=(D_{rs})_{\rm col}$, the result is
$$D_{\rm col}H_{rs}+H_{rs}D_{\rm col}=(D_r)_{\rm col}(D_s)_{\rm col}+(D_s)_{\rm col}(D_r)_{\rm col}+\omega_{rs}I.$$
Here $\omega_{rs}$ is the parity of the intervals having those two marked points as endpoints. It is zero for two w points or two z points, and for a w,z pair it is their adjacency number modulo two. This proves the commutation and mixed bypass homotopies, with the explicit equivariant polynomial homotopy $H_{rs}$, rather than just stating that an unspecified homotopy exists.

Ordinary second derivatives in characteristic two do not prove the square relation. Instead expand $D=\sum_{k\ge0}D_kx_r^k$, where each $D_k$ omits $x_r$, and put
$$H_r^{[2]}=\sum_{k\ge2}{k\choose2}D_kx_r^{k-2}.$$
Apply this divided derivative to $D^2=\omega I$. Its product formula is the finite binomial identity
$${a+b\choose2}={a\choose2}+ab+{b\choose2}.$$
Since $\omega$ is at most linear in $x_r$, its divided second derivative is zero. Consequently
$$D H_r^{[2]}+H_r^{[2]}D=D_r^2.$$
After coloring, this is the actual square-zero homotopy for each individual basepoint action. Again all nonzero powers are nonnegative, so the homotopy is finite, equivariant and polynomial in the colored variables.

These actions are natural with respect to any ACTUALLY SUPPLIED finite uncolored comparison matrix $F$ satisfying $D'F=FD$, with the same marked labels on its two ends. Entrywise differentiation gives
$$D'F_r+F_rD=F D_r+D'_rF.$$
Thus after coloring $F_r$ is the explicit homotopy between $F(D_r)_{\rm col}$ and $(D'_r)_{\rm col}F$. This calculation does not construct such a comparison matrix, prove that auxiliary top cycles are carried to one another, or establish a movie move. Those remain genuine geometric premises. It supplies the exact basepoint homotopies needed by a subsequent elementary-map proof, without a choice axiom or an appeal to a rank computation.
