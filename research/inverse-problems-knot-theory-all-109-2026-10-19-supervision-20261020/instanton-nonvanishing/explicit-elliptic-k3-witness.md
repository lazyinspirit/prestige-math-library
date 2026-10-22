# Explicit elliptic witness without a Picard-rank assumption

This supplies the remaining existence hypothesis of the **new** K3 construction. It does not check a repaired supplier or alter a canonical statement. In the new spherical and isotropic calculations, the Picard-rank-two hypothesis can be replaced by the properties proved here and the explicit degree estimates below.

Take the Weierstrass fibration over $\mathbb P^1$ with fundamental line bundle $\mathcal O(2)$, affine equation

$$y^2=x^3+x+t^{12}.$$

In the other base coordinate $u=1/t$, put $x'=u^4x,y'=u^6y$; its equation is $y'^2=x'^3+u^8x'+1$. The relative projective cubic completion carries the section at infinity. Its discriminant is $4+27t^{24}$, with twenty-four distinct nonzero roots, and is nonzero at infinity in the second chart.

The total surface is smooth. In the first affine chart a singular point would require $y=0,t=0,3x^2+1=0$, incompatible with the equation. In the second chart at $u=0$, a singular point would require $y'=x'=0$, incompatible with its constant term one. Elsewhere the two charts agree. The projective section is smooth: in the chart where the homogeneous $y$ coordinate is nonzero the equation solves its $z$ coordinate as a holomorphic function of the $x$ coordinate and base.

Every singular fiber is an irreducible nodal cubic. At a discriminant root its affine polynomial has the form $(x-r)^2(x+2r)$ with $r\ne0$; it has a node and is not a polynomial square, so the cubic is irreducible. Simplicity of the discriminant rules out any other singular fiber. All fibers are therefore irreducible.

The two-form $dt\wedge dx/y$ is nowhere zero and extends over the whole surface. Under the displayed coordinate change it is $-du\wedge dx'/y'$. At a nodal point the base derivative of the equation is nonzero; solving for $t$ cancels the apparent $y$ denominator and gives a nonzero multiple of $dy\wedge dx$. At the section, write projective coordinates $X=x/y,Z=z/y$; the equation has $Z=X^3+\cdots$, and the relative form extends as a nonzero multiple of $dX$. Thus the canonical bundle is trivial.

Connected fibers give $\pi_*\mathcal O=\mathcal O_{\mathbb P^1}$. Relative duality gives $R^1\pi_*\mathcal O=\mathcal O(-2)$: the relative differential $dx/y$ has the transition of $\mathcal O(2)$, and its fiber space is one-dimensional also at nodal fibers. The base cohomology sequence consequently gives $H^1(X,\mathcal O)=0$. Thus $\chi(\mathcal O)=2$, the canonical two-form is unique up to scalar, and the projective Kähler surface has $b_1=0,b_+=3$ by its Hodge decomposition. These are the K3 properties used in the gauge and Riemann–Roch calculations; no assertion about its full Picard lattice is needed.

Let $\sigma$ be the section and $F$ a fiber. They satisfy $F^2=0,\sigma F=1,\sigma^2=-2$, the last identity following from adjunction for the section sphere and the trivial canonical bundle. For $t>2$, the class $H_t=\sigma+tF$ is ample when rational, and Kähler for real $t$: it has positive square; it is positive on the section, on fibers, and on every other irreducible curve, since that curve has nonnegative intersection with $\sigma$ and positive intersection with $F$. The surface ampleness criterion gives the rational case, and openness/interpolation gives the real case.

Here are the exact effective-divisor estimates replacing the Picard-rank assumption. An irreducible curve with $FC=0$ is vertical, because its map to the base has degree zero. Irreducibility of the fibers then makes it a fiber component of degree $H_tF=1$. The section has degree $t-2>1$ for $3<t<4$. Every other nonvertical irreducible curve has $\sigma C\ge0$ and $FC\ge1$, so $H_tC\ge t$. Hence every nonzero effective divisor has $H_t$ degree at least one.

Neither $\sigma-F$ nor $\sigma-2F$ is effective. Each has negative intersection with $\sigma$, so an effective representative would contain the section; removing it would leave a negative multiple of $F$, impossible by ample degree. Their negatives have negative intersection with the nef fiber, so are not effective either. Their cohomology vanishings and one-dimensional Ext calculations now follow by exactly their displayed squares and K3 Riemann–Roch/duality.

The stability arguments use no further Picard information. In the spherical construction a putative line mapping nontrivially to $\mathcal O(F)$ has form $\mathcal O(F-D)$ with effective $D$; if $D\ne0$ its degree is at most zero, and $D=0$ would split the extension. In the isotropic construction a line mapping to $I_p(\sigma)$ has form $\mathcal O(\sigma-D)$; for $D\ne0$ its degree is at most $t-3<(t-1)/2$, while $D=0$ would give a section of $I_p$. The converse classification's saturation step likewise uses only the lower bound one for a nonzero effective degree. Thus both actual bundle classifications and the universal-adjoint degree-two calculation apply to this explicit surface.

Finally choose an irrational $3<t<4$. A parallel splitting of an ASD bundle with determinant $\sigma+F$ would give an integral class $L$ with

$$2H_tL=H_t(\sigma+F),\qquad (2FL-1)t+(2\sigma L+1)=0.$$

Its coefficient of $t$ is a nonzero odd integer, contradiction. For determinant $\sigma$ the corresponding coefficient is again $2FL-1$, and the constant is $2\sigma L+2$; the same argument excludes a splitting. These exclusions use integral pairings, not a guessed Picard basis.

This supplies an explicit smooth projective witness with all the properties required by the new specific HYM constructions. The ASD existence and orientation/gluing arguments remain those separately authored operations, rather than consequences of the word K3.
