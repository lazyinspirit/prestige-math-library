# The proposed full-test H1 stability is false

This is an independent mathematical refutation, not an attributed literature claim. It addresses both P_Zh:V→Z_h and the weaker-looking restriction P_Zh:V_h→Z_h, on actual matching shape-regular MINI meshes refining the square.

## Explicit continuous square example

Let D=(0,1)², F(x)=sin²(pi x), g(y)=y-3y²+2y³, and

$$\psi(x,y)=-F(x)g(y),\qquad q(x,y)=x/2-\sin(2\pi x)/(4\pi).$$

Put

$$z=(\partial_y\psi,-\partial_x\psi)=(-Fg',F'g),\quad v=z+\nabla q=(F(1-g'),F'g).$$

All fields are smooth on the closed square. F=F'=0 on x=0,1; g=0 and g'=1 on y=0,1. Therefore v has zero trace on every edge, hence v∈H1_0(D)². The field z has zero divergence. Also ψ has zero trace, so ψ∈H1_0(D). Choose ψ_k∈C_c^∞(D) converging in H1 to ψ. Then rot ψ_k∈V_sigma and rot ψ_k→z in L². Consequently z∈H_sigma, exactly with the repository definition H_sigma=closure(V_sigma,L²); no unstated boundary characterization of H_sigma is needed.

For every w∈V_sigma, integration by parts gives (∇q,w)=−(q,div w)=0. Density extends this to every w∈H_sigma. Since v=z+∇q with z∈H_sigma, the Hilbert orthogonal projector P onto H_sigma obeys Pv=z. But on either horizontal edge z=(-F,0), which is not zero. Thus Pv∉H1_0, although v∈C^∞(closed D)∩H1_0. In particular P cannot be a bounded map H1_0→H1_0.

For a fully polynomial alternative, take F(x)=x²(1-x)² and q(x)=x³/3−x⁴/2+x⁵/5. The same proof and formulas apply verbatim; F=F'=0 on x=0,1 and q'=F. This avoids trigonometric prerequisites entirely.

## Why the discrete full-test estimate would contradict it

Use any matching shape-regular refining MINI family on the square, with max cell diameter→0. Its actual Fortin map Π_h is uniformly H1_0-stable, Π_h v→v in H1_0 for each fixed v, and Π_h w∈Z_h whenever w∈V_sigma. Continuous P1 mean-zero pressures approximate every fixed smooth mean-zero scalar in L².

Suppose, toward contradiction, that there is a constant C independent of h with

$$\|P_{Z_h}a_h\|_V\le C\|a_h\|_V\qquad(a_h\in V_h).$$

Set a_h=Π_h v and w_h=P_Zh a_h. The assumed estimate and Fortin stability bound w_h in V. Extract a weak-V subsequence w_h⇀w∈V. To prove div w=0, fix smooth r of zero mean, approximate it by r_h∈Q_h, and write

$$(\operatorname{div}w_h,r)=(\operatorname{div}w_h,r-r_h)\longrightarrow0.$$

The bound in V and strong L² approximation of r justify the limit; constants pair to zero since w_h∈H1_0. Hence w∈V_sigma. For each a∈V_sigma, mass orthogonality gives

$$(\Pi_hv-w_h,\Pi_ha)_{L²}=0.$$

Passing to the limit using strong L² convergence of Π_h v and Π_h a, and weak L² convergence of w_h, gives (v-w,a)=0. Density implies (v-w,a)=0 for all a∈H_sigma. Since w∈V_sigma⊂H_sigma, uniqueness of the orthogonal decomposition forces w=Pv=z. But w∈H1_0 and z has nonzero horizontal tangential trace, a contradiction.

Therefore the restricted V_h→Z_h uniform estimate is false already for this actual MINI family. A uniform estimate on all V inputs implies the restricted estimate and is false too. The argument never equates weak discrete divergence with exact divergence at finite h.

## Smooth disk witness

On the unit disk in R² let v=(1-r²,0) and q=x(3-r²)/4. Then Δq=−2x=div v and ∂_n q=0 on r=1. Thus z=v−∇q is divergence-free with zero normal trace and is the continuous Leray component. Its tangential trace equals +(sin theta)/2 on the circle, and is not zero. This is a second explicit witness, now on a smooth bounded domain. The square proof above is the one tied directly to the polyhedral MINI hypotheses.

## Consequence for pressure recovery

The algebraic identity (D_tau u_h,v_h)=(D_tau u_h,P_Zh v_h) remains correct. The false step is replacing the V norm of P_Zh v_h by an h-independent multiple of the V norm of an arbitrary v_h. Neither an H1-stable scalar L² projector nor the MINI Fortin map repairs this. Do not author the proposed stability lemma or use it as a supplier.
