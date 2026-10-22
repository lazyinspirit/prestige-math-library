# Isotropic HYM existence by holomorphic BPST metric gluing

This is a new constructive candidate for the exact isotropic existence step. It uses the already constructed holomorphic Serre bundles rather than asserting the general HYM theorem. It is author-stage, not independently accepted. No repaired supplier has been checked. The earlier local BPST flux does not alone establish the global ASD obstruction; the construction below instead uses the exact holomorphic-line degree identity to identify the remaining scalar equation.

Use the elliptic K3 and its Kähler classes $H_t=\sigma+tF$ near $t=3$. The algebraic family is

$$0\longrightarrow\mathcal O(F)\longrightarrow E_p\longrightarrow I_p(\sigma)\longrightarrow0.$$

The extension class is one-dimensional. Scaling its nonzero value changes neither the isomorphism class nor its stability. We take its value to be $x=\lambda^2$, while keeping the two end-line trivializations fixed. These trivializations matter in the local metric normalization below.

## A compatible holomorphic BPST metric

Near $p$ take holomorphic coordinates $z=(z_1,z_2)$, $u=|z|^2$, and use the Koszul presentation of the extension. Its injection is $s/x$, where $s=(-z_2,z_1)$, and its quotient is $(z_1,z_2)$. Let $P$ be the ordinary Hermitian projection onto $s$, $Q=1-P$, and put

$$a(u)=\frac{\lambda^2}{u+\lambda^2},\qquad h_\lambda=\lambda^2(aP+a^{-1}Q).$$

This is smooth and positive at $z=0$. Indeed $a-a^{-1}$ is divisible by $u$, so its product with $P=ss^*/u$ is smooth. Its determinant in this local holomorphic frame is $\lambda^4=x^2$, exactly compensating the determinant of the fixed injection/quotient frame, which is $-1/x$. Thus it has the fixed determinant metric in the line-splitting convention, not an untracked scalar determinant.

Its Chern connection is the ordinary charge-one BPST connection. This can be verified directly rather than inferred from its name. For a radial metric $aP+a^{-1}Q$, the two contracted trace-free curvature equations reduce to one equation for $l=\log a$:

$$u^2l''+2ul'=a^2-1.$$

Substitution of $a=\lambda^2/(u+\lambda^2)$ gives both sides $-1+\lambda^4/(u+\lambda^2)^2$. The trace curvature is zero because the determinant is constant. Thus its curvature has type $(1,1)$ and zero contraction in the flat Kähler metric. The normalization on the injection is especially useful:

$$|s/x|_{h_\lambda}^2=\frac{u}{u+\lambda^2}.$$

In the line-splitting unitary frame this approaches one, with metric error $O(\lambda^2/r^2)$ and successive derivative errors $O(\lambda^2/r^{2+j})$. The Chern–Weil formula for a holomorphic line in a HYM bundle makes the local squared second fundamental form equal, in the standard Euclidean convention, to

$$|\beta_\lambda|^2=\frac{2\lambda^4}{r^2(r^2+\lambda^2)^2},\qquad \int_{\mathbb R^4}|\beta_\lambda|^2=2\pi^2\lambda^2.$$

For the integral, multiply by $2\pi^2r^3dr$ and integrate $r/(r^2+\lambda^2)^2$. This is a nonzero calibrated line-energy, not a generic instanton existence statement.

## The actual global approximate metric

Choose constant-contracted-curvature metrics on $\mathcal O(F)$ and $\mathcal O(\sigma)$, smoothly in $t$. At $t=3$ their contracted curvatures agree. Use normal holomorphic coordinates and normal line frames at $p$. On a ball about $p$ use the metric just constructed. On its complement use the split line metrics in a smooth splitting of the actual extension of value $x=\lambda^2$. The local Serre cocycle has a primitive with size $O(r^{-2})$ and derivative $O(r^{-3})$: this follows from the two-coordinate Koszul splitting $(z_1,z_2)^*/r^2$ off the origin. Multiplication by $x$ gives precisely the bounds needed to compare with the local BPST splitting. Away from a fixed small ball the splitting and its derivatives are smooth and bounded; no singular estimate is used there.

Interpolate the two Hermitian metrics in the line-splitting frame on $r\asymp R=\lambda^{1/4}$, then correct their scalar determinant to the fixed one. All resulting metrics are metrics on the same holomorphic $E_p$, so integrability is exact throughout the interpolation. Let $A_{\lambda,t,p}$ be their Chern connections and let $K=i\Lambda F^0$ be their moment defect.

Set $p_0=9/4$. After subtracting the single diagonal constant component, its $L^{p_0}$ norm is $O(\lambda^{13/9})$, uniformly for $|t-3|\le C\lambda^2$ and $p$ in a fixed coordinate patch. The annulus has pointwise curvature defect $O(\lambda^2R^{-4})$ and volume $O(R^4)$, giving $\lambda^2R^{-4+4/p_0}=\lambda^{13/9}$. On the inner ball the Kähler metric differs from its flat value by $O(r^2)$, so its contraction error is $O(r^2\lambda^2/(r^2+\lambda^2)^2)$, of $L^{p_0}$ norm $O(\lambda^{16/9})$. Outside the annulus the extension and its derivatives have size $O(\lambda^2r^{-3-j})$, giving the same or smaller bound. Smooth background changes and the scalar determinant correction obey these same estimates. A finite coordinate cover makes them uniform in $p$.

## Complement inversion with the near-diagonal mode retained

Retain the smooth trace-free Hermitian section $h_\lambda$ that is the BPST covariantly harmonic framing section on the inner ball, joined to the diagonal section on the exterior. Its inner radial factor is $r^2/(r^2+\lambda^2)$; hence it is smooth at the origin, bounded, has a nonzero limiting $L^2$ norm, and has covariant derivative of $L^2$ norm $O(\lambda)$. Its covariant Laplacian is zero on the flat inner model and has $L^{p_0}$ norm $O(\lambda^{13/9})$ after joining and background correction.

The scalar covariant Laplacian has a uniform Poincaré estimate on the complement of $h_\lambda$. To prove this, suppose normalized sections perpendicular to $h_\lambda$ have covariant gradients tending to zero. On every complement of a small ball, their connection converges to the split background; its only parallel trace-free section is the diagonal one, because the two off-diagonal line systems have no holomorphic sections. Orthogonality kills that limit. Kato's inequality bounds the ordinary $H^1$ norm of their scalar absolute values. Compactness into scalar $L^2$ prevents their normalized mass from concentrating at the shrinking point. The limit therefore has zero norm, a contradiction. This proves the estimate without assuming that a disappearing diagonal eigenvalue stays uniformly bounded away from zero.

The linearized Hermitian metric equation is the covariant scalar Laplacian, up to its fixed positive normalization and the commutator with the moment defect. The latter is a small $L^{p_0}$ perturbation in the form estimate: $p_0>2$ and four-dimensional Sobolev multiplication apply to it. Projecting off $h_\lambda$ on domain and range therefore gives an inverse. Lax–Milgram gives its weak inverse; local elliptic regularity gives its smooth inverse for each positive $\lambda$.

Here are uniform norms sufficient for the nonlinear problem. Write $L_\lambda$ for this projected linearization and set

$$\|s\|_{\mathcal X_\lambda}=\|s\|_\infty+\|d_As\|_2+\lambda^{1/9}\|d_As\|_{9/2}+\|L_\lambda s\|_{9/4}.$$

Its inverse has $\|s\|_{\mathcal X_\lambda}\le C\|f\|_{9/4}$. The energy estimate gives the derivative $L^2$ term. The scalar inequality $\Delta|s|\le|\nabla_A^*\nabla_A s|$, the fixed background Sobolev inequality and iteration give $\|s\|_\infty\le C(\|f\|_{9/4}+\|s\|_2)$, independently of the connection. A projection term is bounded here: its coefficient is the pairing with $d_Ah_\lambda$, of norm $O(\lambda)$ times the energy bound, and $h_\lambda$ is bounded. For the derivative $L^{9/2}$ bound, rescale balls of radius $\lambda$ in the inner model and use dyadic balls of radius $r$ on the annuli. Their connections have uniformly bounded rescaled coefficients. The local bound is $C(r^{-1+2/p_0}\|s\|_\infty+r^{1-2/p_0}\|f\|_{p_0})$; summing the finite dyadic series gives the factor $\lambda^{-1/9}$. The exterior uses fixed-size charts. This proves the asserted norm rather than applying an unscaled elliptic constant to a bubbling family.

The exact exponential-metric formula expands the nonlinear remainder as terms bounded by $|s||L_\lambda s|$, $|d_As|^2$, and the moment defect times $|s|^2$. Consequently on a fixed small $C^0$ ball

$$\|N(s)-N(s')\|_{9/4}\le C\lambda^{-2/9}(\|s\|_{\mathcal X_\lambda}+\|s'\|_{\mathcal X_\lambda})\|s-s'\|_{\mathcal X_\lambda}.$$

The factor $\lambda^{-2/9}$ is exactly the square of the derivative loss above. The inverse and this estimate give a contraction on the ball of radius $C\lambda^{13/9}$, since $\lambda^{-2/9}\lambda^{13/9}\to0$. Thus an actual small determinant-fixed metric change solves the complement equation, with that same bound. Smooth bootstrap removes its Sobolev completion.

Parameter differentiation is also controlled in these norms. The coefficients on rescaled inner balls have bounded $\lambda\partial_\lambda$ derivatives; their changes in the inverse identity $Q'=-QL'Q$ lose at most another $\lambda^{-2/9}$ by the same dyadic derivative estimate. First derivatives in the rescaled radius therefore give bounds $O(\lambda^{11/9})$ for the metric correction. Background/polarization derivatives are uniformly smooth; the diagonal constant derivative has been projected out. These losses still leave a strictly higher power than $\lambda^2$ in the line-energy error below. Logarithms from an alternative nested partition may be retained; they do not change those strict inequalities.

## The remaining scalar equation is fixed by an exact degree identity

After the complement correction, the moment defect is a scalar multiple of the retained mode (conjugated by the small metric change when identifying Hermitian endomorphisms). On $X\setminus\{p\}$ the holomorphic line $\mathcal O(F)$ has its actual orthogonal projection $P$. Its Chern–Weil identity is

$$2\pi\left(\deg_{H_t}\mathcal O(F)-\tfrac12\deg_{H_t}E_p\right)=\int\operatorname{tr}\bigl((P-\tfrac12)K\bigr)-\int|\beta|^2.$$

It holds on all of $X$: near the omitted point the line metric has logarithm $\log r^2+O(1)$, whose boundary term against the smooth Kähler form is $O(r^2)$ and tends to zero. The degree on the left is $(3-t)/2$. The coefficient pairing the retained mode with $P-\tfrac12$ tends to a positive nonzero multiple of volume. Therefore its scalar moment vanishes exactly when

$$\pi(t-3)=\int|\beta|^2.$$

The approximate metric has line-energy $2\pi^2\lambda^2+o(\lambda^2)$. Its local missing tail is $O(\lambda^4/R^2)$, and the exterior cocycle has that same energy order. Smooth metric errors are smaller. The metric correction changes the second fundamental form in $L^2$ by $O(\lambda^{13/9})$: differentiating a change of orthogonal projection gives a bounded multiple of $d_As$ plus $s\beta$. Its energy change is consequently $O(\lambda^{22/9})+O(\lambda^{26/9})$. First rescaled derivatives have error $O(\lambda^{20/9})$ by the preceding inverse differentiation. These are all $o(\lambda^2)$, including the needed rescaled first derivatives.

The scalar implicit-function theorem now gives $t-3=2\pi\lambda^2+o(\lambda^2)>0$. Its derivative in $t$ is $\pi+o(1)$; the degree fixes this coefficient exactly. Conversely a fixed sufficiently small positive $t-3$ determines a positive radius, uniformly in $p$. A finite cover of the compact parameter surface gives existence for every $p$ at the same sufficiently small $3<t<4$. Local choices of coordinates or extension scalar change the constructed metric presentation but not existence; uniqueness of determinant-fixed HYM metrics on stable bundles, proved in the spherical-operation note, identifies them on overlaps.

Thus this construction supplies HYM metrics for the actual isotropic holomorphic family, rather than inferring existence from stability. Their Chern connections are ASD by integrability and zero contraction. Conversely an irreducible ASD connection in these Kähler topological sectors is stable: the line degree identity is strict unless its second fundamental form is zero; a parallel equal-slope splitting is excluded at an irrational $3<t<4$ by the integral slope equation. The algebraic classification therefore identifies the entire ASD moduli with the constructed family. Metric uniqueness and the elliptic inverse identify its local smooth structure and its universal adjoint bundle, so its point-class evaluation is the already computed integral two.

This remains an author-stage candidate requiring the single consolidated original-facing review, together with the separate actual orientation and quotient-gluing donor. It supplies no higher-genus fiber-sum count, excision/decomposition theorem or KHI nonvanishing by itself.
