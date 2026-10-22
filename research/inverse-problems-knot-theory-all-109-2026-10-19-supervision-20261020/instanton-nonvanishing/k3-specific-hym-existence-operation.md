# Specific K3 existence operation

This constructs the new existence step for the two explicit bundle families, without asserting a general Hermitian–Yang–Mills theorem. The spherical step below is supplied by an elliptic implicit-function argument. The isotropic bubble-obstruction comparison at the end is still a genuine outstanding operation. No repaired supplier is checked or re-reviewed, and no final review cycle is consumed.

## Spherical bundle: actual HYM existence near its wall

Use the K3 and its classes from the algebraic construction. Vary Kähler forms smoothly with class proportional to $H_t=\sigma+tF$ near $t=4$. Fix determinant metrics and choose Hermitian metrics on $L=\mathcal O(\sigma-F)$ and $M=\mathcal O(F)$ with constant contracted curvature. This scalar adjustment exists directly: changing a line metric by $e^u$ changes its contracted curvature by a scalar Laplacian, whose mean-zero inverse solves the required equation; the integral fixes the constant. The inverse and resulting metrics depend smoothly on $t$.

At $t=4$ the two line degrees coincide, so the split Chern connection on $L\oplus M$ has trace-free curvature of type $(1,1)$ and contraction zero. It is ASD for the Kähler orientation. The extension space $H^1(\sigma-2F)$ is one-dimensional as already calculated. Choose a nonzero harmonic representative $\beta$ at this wall. On the fixed smooth direct sum consider the holomorphic operators

$$\bar\partial_x=\begin{pmatrix}\bar\partial_L&x\beta\\0&\bar\partial_M\end{pmatrix},\qquad x\in\mathbb C.$$

They are integrable: $\bar\partial\beta=0$ and the strictly upper triangular square is zero. Every $x\ne0$ gives the same nonsplit holomorphic bundle, after rescaling the two line factors.

Consider determinant-one changes $e^s$ of the split Hermitian metric, with $s$ a trace-free Hermitian endomorphism in $H^{k+2}$, $k\ge3$. The equation is the smooth map

$$\mathcal F(x,t,s)=i\Lambda_{\omega_t}F^0_{(\bar\partial_x,h_t e^s)}\in H^k(\operatorname{Herm}_0 E).$$

At $(0,4,0)$ its $s$ derivative is the nonnegative covariant scalar Laplacian, up to a fixed positive normalization. Integration by parts identifies its kernel with parallel Hermitian endomorphisms. On the diagonal the only trace-free ones are $h=\operatorname{diag}(1,-1)$, since $X$ is connected. Off the diagonal they would be holomorphic sections of $\sigma-2F$ or its negative, both zero. Thus its kernel and cokernel are exactly the real line spanned by $h$. On their orthogonal complements the actual elliptic estimate is

$$\|s\|_{H^{k+2}}\le C\|\Delta s\|_{H^k},\qquad s\perp h.$$

For completeness, the estimate follows from the usual local elliptic estimate plus compactness: otherwise normalize a violating sequence in $H^{k+2}$, take its compact lower-Sobolev limit, and obtain a nonzero kernel vector orthogonal to $h$. The local estimate then upgrades convergence and yields the contradiction. Self-adjointness gives surjectivity onto the complement.

Project $\mathcal F$ to that complement. The Banach implicit-function theorem produces a unique small $s(x,t)\perp h$ solving the projected equation. Sobolev multiplication in dimension four makes the curvature map smooth on these spaces; elliptic bootstrap makes the resulting metrics smooth. The remaining equation is the real scalar

$$\Phi(x,t)=\langle h,\mathcal F(x,t,s(x,t))\rangle_{L^2}=0.$$

Its first $t$ derivative at the wall is a nonzero positive multiple of $t-4$, because the line degree difference is $H_t\cdot(\sigma-2F)=t-4$. Its first $x$ derivative vanishes. Indeed the harmonic representative satisfies $\bar\partial\beta=\bar\partial^*\beta=0$, and the Kähler commutator identity makes the contraction of the off-diagonal first curvature variation zero. The order-$|x|^2$ term is positive. Explicitly the Chern connection has off-diagonal entries $x\beta$ and $-\bar x\beta^*$; their products give opposite diagonal curvature terms, whose pairing with $h$ after $i\Lambda$ is a positive multiple of $|x|^2\|\beta\|_2^2$. The order-two correction $s$ contributes $\Delta s$, orthogonal to $h$, so does not change this leading coefficient.

The diagonal unitary stabilizer acts by phase on $x$ and fixes $\Phi$. It follows, including the remainder and its first derivatives, that

$$\Phi(x,t)=c(t-4)+b|x|^2+O((t-4)^2+|t-4||x|^2+|x|^4),\qquad c,b>0.$$

Apply the ordinary finite-dimensional implicit-function theorem in $t$. For each sufficiently small $x\ne0$ it gives

$$t(x)=4-\frac bc|x|^2+O(|x|^4)<4.$$

This is an actual smooth Hermitian metric solving the full equation on the nonsplit bundle, with $3<t(x)<4$. Its Chern connection is ASD: on a Kähler surface the self-dual two-forms are the Kähler form and the real and imaginary $(0,2)$ directions; integrability and zero contraction kill precisely those components. The already-proved stability identifies this holomorphic bundle with the unique spherical bundle.

Uniqueness of its determinant-fixed HYM metric also has a direct proof. Join two such metrics by $h_0e^{us}$, $0\le u\le1$, with $s$ trace-free Hermitian. The derivative of the moment functional along this path has derivative equal to a positive multiple of $\|\bar\partial s\|_{h_u}^2$, by the curvature variation and integration by parts. Its endpoint values are zero because both metrics solve HYM. Hence $\bar\partial s=0$; Hermitian symmetry also gives the adjoint equation, so $s$ is parallel. Stability forces $s$ scalar, and fixed determinant forces $s=0$. This proves uniqueness without importing general HYM existence.

This supplies existence for the spherical sector near $t=4$, at the explicit K3/Riemann–Roch/elliptic inputs stated in the preceding notes. The relative Donaldson orientation comparison is still separate.

## The isotropic wall has a precisely identified obstruction problem

At $t=3$ the split bundle $\mathcal O(F)\oplus\mathcal O(\sigma)$ has equal line degrees. Its Chern connection is ASD and has $c_2=1$. Adding one ordinary BPST bubble gives the required $c_2=2$ ideal configuration. Its off-diagonal cohomology is that of $D=\sigma-F$ and $-D$, both acyclic by the explicit calculation. Its diagonal $H^1$ is zero on K3. Thus its only gauge stabilizer is the diagonal circle, and its only obstruction modes are the three real diagonal self-dual harmonic forms.

Those three forms have a pointwise invertible evaluation matrix: a Kähler form together with the real and imaginary parts of a nowhere-zero holomorphic two-form span the self-dual space at every point. Ricci-flatness is unnecessary. A framed charge-one bubble supplies center $p$ (four parameters), scale (one), and orientation $SO(3)$ (three). Quotienting the stabilizer removes one framing parameter, leaving seven; the three genuine obstruction equations leave the expected four.

The radius/framing coefficient cannot be replaced by a dimension count. Here is an exact local calibration useful for that remaining equation. In singular gauge write the BPST connection with radial coefficient $\lambda^2/(r^2+\lambda^2)$ multiplying the right quaternion Maurer–Cartan form. For a constant unit adjoint vector $H$, the covariantly harmonic Higgs field tending to $H$ is

$$\varphi_H(r)=\frac{r^2}{r^2+\lambda^2}H.$$

Direct substitution reduces the covariant Laplace equation to

$$f''+\frac3r f'-\frac{8\lambda^4}{r^2(r^2+\lambda^2)^2}f=0,$$

which the displayed $f$ satisfies. Its radial and angular derivative norms sum to $12r^2\lambda^4/(r^2+\lambda^2)^4$. Therefore, in the unit-quaternion adjoint norm,

$$\|d_A\varphi_H\|_2^2=24\pi^2\lambda^4\int_0^\infty\frac{r^5}{(r^2+\lambda^2)^4}\,dr=4\pi^2\lambda^2.$$

Equivalently this is the boundary flux $\lim_{R\to\infty}2\pi^2R^3f(R)f'(R)$. The scale derivative has norm squared $4\pi^2$ by the same radial integral. These are nonzero exact local fluxes. They calibrate the flat scale/framing cone and its quadratic circle moment map; they are not yet the projected obstruction of the glued K3 connection.

To finish the isotropic existence step one must construct the actual augmented inverse, control its first derivatives uniformly under bubbling, and identify the remaining diagonal harmonic projection with this calibrated moment map. The needed form after writing $\delta=t-3$ is

$$\operatorname{Obs}(\delta,p,\lambda,u)=\delta v_0+c\lambda^2B(p)u+o(\delta+\lambda^2),\qquad u\in S^2,\quad c\ne0,$$

with the remainder small also in the rescaled first derivatives. Here $B(p)$ is the invertible harmonic-form evaluation matrix. The local BPST norm/flux calculation proves a nonzero coefficient in its own framing problem; it does not by itself prove this equality for the **global** obstruction. Pairing a naive cutoff with a background harmonic form omits the bubble correction to the adjoint projection and is insufficient.

Once this actual comparison and uniform estimate are proved, setting $\delta=\varepsilon^2$, $\lambda=\varepsilon l$ gives a nonsingular three-variable radius/sphere problem, and the finite-dimensional implicit-function theorem produces an ASD connection. That would supply one point in the isotropic ASD moduli. Local HYM metric inversion makes its image in the constructed algebraic moduli open; compactness and the lower-Chern exclusions can then make it closed. A lower stable Mukai vector has square less than $-2$ and is impossible by the self-Ext calculation. At a generic irrational $3<t<4$, an equal-slope line splitting would require $(2a-1)(t-2)+(2b-1)=0$ with integral $a,b$, which is impossible. These are concrete inputs for that continuation, not a substitute for constructing the first solution.

The global bubble projection/comparison is consequently the remaining analytic existence operation in this route. This note claims the spherical HYM construction and the explicit BPST local flux, not the missing isotropic ASD existence or a completed Floer point count.
