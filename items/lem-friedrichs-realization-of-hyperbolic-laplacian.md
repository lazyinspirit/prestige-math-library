---
id: lem-friedrichs-realization-of-hyperbolic-laplacian
kind: lemma
title: "Friedrichs Realization of the Hyperbolic Laplacian"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-weight-zero-maass-form-on-gamma0n
  - def-hyperbolic-laplacian-on-the-upper-half-plane
  - def-congruence-subgroup-of-sl2-z
  - def-modular-group-action-on-the-upper-half-plane
  - def-properly-discontinuous-group-action
  - thm-standard-fundamental-domain-for-the-modular-group
  - def-countable-choice
  - def-orthogonality-and-orthogonal-complement
  - def-real-and-complex-inner-product-space
  - lem-l-two-with-the-integral-pairing-is-a-hilbert-space
  - lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set
  - lem-smooth-bump-between-concentric-euclidean-balls
  - thm-double-orthogonal-complement-is-closure
  - thm-lax-milgram
  - thm-self-adjointness-range-criterion
  - thm-greens-theorem-for-finite-unions-of-elementary-regions
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Austin Lei, Automorphic Forms Learning Seminar Notes (Columbia University, Fall 2024)"
      url: "https://www.math.columbia.edu/~aghosh/ALNotes12.pdf"
      locator: "§3.1: the hyperbolic Laplacian; the local form realization is proved in this item."
    - title: "A. Knightly and C. Li, Kuznetsov's Trace Formula and the Hecke Eigenvalues of Maass Forms, Memoirs of the AMS 224 (2012), arXiv:1202.0189v1"
      url: "https://arxiv.org/pdf/1202.0189v1"
      locator: "§4.1: positive-sign hyperbolic Laplacian and its weight-zero eigenfunction convention."
---

## Statement

Assume Countable Choice. Let $N\ge1$, let $\chi:(\mathbb Z/N\mathbb Z)^\times\to S^1$ be a group homomorphism with $\chi(-1)=1$, let $\Gamma=\Gamma_0(N)$, and let $\mathcal H=L^2(\Gamma\backslash\mathbb H,\chi)$ with measure $d\mu=y^{-2}dx\,dy$. Let $\mathcal D$ be the smooth functions $u:\mathbb H\to\mathbb C$ satisfying $u(\gamma z)=\chi(\gamma)u(z)$ whose support in the quotient $\Gamma\backslash\mathbb H$ is compact. On $\mathcal D$ define
$$q(u,v)=\int_{\mathcal F_N}(u_x\overline{v_x}+u_y\overline{v_y})\,dx\,dy,$$
where $\mathcal F_N$ is a fundamental region. Let $\mathcal V$ be the completion of $\mathcal D$ in the norm $\|u\|_{\mathcal V}^2=\|u\|_{\mathcal H}^2+q(u,u)$, and let $\bar q$ be the resulting closed form. Define
$$D(A_{N,\chi})=\{u\in\mathcal V:\text{ there exists }h\in\mathcal H\text{ with }\bar q(u,v)=\langle h,v\rangle\text{ for all }v\in\mathcal V\},\qquad A_{N,\chi}u=h.$$
Then $\mathcal D$ contains a nonzero function and is dense in the nonzero Hilbert space $\mathcal H$, the form closure is well-defined, and $A_{N,\chi}$ is a densely defined nonnegative self-adjoint operator extending the positive-sign differential expression $-y^2(\partial_x^2+\partial_y^2)$ on $\mathcal D$. This specifies the Friedrichs realization; it makes no assertion that the differential operator on $\mathcal D$ is essentially self-adjoint.

## Statement references

[[def-weight-zero-maass-form-on-gamma0n]]

[[def-hyperbolic-laplacian-on-the-upper-half-plane]]

## Facts & Assumptions

**Given:** Countable Choice, an integer $N\ge1$, an even unitary character $\chi$, the automorphic $L^2$ space $\mathcal H$, the positive-sign hyperbolic Laplacian, and the form $q$ and test domain $\mathcal D$ in the statement.

[F1] $\Gamma_0(N)$ has finite index in $SL_2(\mathbb Z)$, and restriction to a measurable fundamental region identifies its unitary-character automorphic $L^2$ space with ordinary $L^2$ on that region. ([[def-congruence-subgroup-of-sl2-z]], [[def-weight-zero-maass-form-on-gamma0n]])

[F2] The standard modular fundamental region is bounded by the vertical lines $x=\pm1/2$ and the unit-circle arc, has boundary of area zero, and its only elliptic points are on the boundary; the action satisfies $\operatorname{Im}(\gamma z)=\operatorname{Im}(z)/|cz+d|^2$. ([[thm-standard-fundamental-domain-for-the-modular-group]], [[def-modular-group-action-on-the-upper-half-plane]])

[F3] Under Countable Choice, smooth compactly supported functions on an open subset of $\mathbb R^2$ are dense in its $L^2$ space. ([[lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set]], [[def-countable-choice]])

[F4] Under Countable Choice, $\mathcal H$ is a complex Hilbert space with inner product $\langle u,v\rangle=\int u\overline v\,d\mu$, linear in the first variable. ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]], [[def-countable-choice]])

[F5] The Lax–Milgram theorem under Countable Choice gives a unique solution in a Hilbert space for every bounded coercive sesquilinear form and bounded conjugate-linear functional. ([[thm-lax-milgram]], [[def-countable-choice]])

[F6] Under Countable Choice, a densely defined symmetric operator $T$ is self-adjoint if $\operatorname{ran}(T-i)=\operatorname{ran}(T+i)=\mathcal H$. ([[thm-self-adjointness-range-criterion]], [[def-countable-choice]])

[F7] Under Countable Choice, for a subspace $M$ of a Hilbert space, $M^{\perp\perp}=\overline M$; hence $M^\perp=\{0\}$ implies that $M$ is dense. ([[def-orthogonality-and-orthogonal-complement]], [[thm-double-orthogonal-complement-is-closure]], [[def-countable-choice]])

[F8] A group action is properly discontinuous when only finitely many group elements move any fixed compact set to meet itself. ([[def-properly-discontinuous-group-action]])

[F9] Any open ball contains a nonzero smooth compactly supported function, by a bump equal to one on a smaller concentric ball. ([[lem-smooth-bump-between-concentric-euclidean-balls]])

[F10] Green's formula holds on finite unions of elementary planar regions, by applying the real identity to real and imaginary parts. ([[thm-greens-theorem-for-finite-unions-of-elementary-regions]])

## Proof

1.1 Let $D$ be the interior of the standard modular fundamental region. Its hyperbolic area is finite because $\int_{-1/2}^{1/2}\int_{\sqrt{1-x^2}}^\infty\frac{dy\,dx}{y^2}=\int_{-1/2}^{1/2}\frac{dx}{\sqrt{1-x^2}}<\infty.$ Since $\Gamma$ has finite index, finitely many translates of $D$ form a fundamental region for $\Gamma$, with boundary of area zero. Their interiors form a nonempty open set $\Omega\subset\mathbb H$ whose complement in a fundamental region has measure zero. By [F9], a nonzero smooth bump supported inside a ball in $\Omega$, extended by the character law, gives a nonzero element of $\mathcal D$, so $\mathcal H\ne\{0\}$. Restriction identifies $\mathcal H$ with $L^2(\Omega,y^{-2}dx\,dy)$; on the finitely many translated polygons, the character condition extends a function uniquely to its $\Gamma$-translates. Multiplication by $y^{-1}$ is an isometry from this weighted $L^2$ space to ordinary $L^2(\Omega,dx\,dy)$ and maps smooth compactly supported functions bijectively to themselves. Thus [F3] implies density for the weighted space too. Extending such functions by the unitary character law gives elements of $\mathcal D$, so $\mathcal D$ is dense in $\mathcal H$. [given, F1, F2, F3, F4, F9, algebra, construct]

1.2 The form $q$ is independent of the fundamental region. For a determinant-one Möbius map, its differential is a rotation followed by scaling by $|cz+d|^{-2}$, so the squared Euclidean gradient norm scales by $|cz+d|^{-4}$; its area Jacobian is also $|cz+d|^{-4}$. The unitary factor $\chi(\gamma)$ preserves that norm. Therefore the energy integral agrees on any two fundamental regions. Thus $q$ is a well-defined Hermitian nonnegative form. [F1, F2, algebra]

1.3 The action is properly discontinuous. If $K\subset\mathbb H$ is compact, choose $m,M_1,M>0$ so that $m\le\operatorname{Im}z\le M_1$ and $|\operatorname{Re}z|\le M$ on $K$. If $z,z'=\gamma z\in K$, then $|cz+d|^2=\operatorname{Im}z/\operatorname{Im}z'$ lies between $m/M_1$ and $M_1/m$. The imaginary part $c\operatorname{Im}z$ and real part $c\operatorname{Re}z+d$ consequently bound the integers $c,d$. For each of the finitely many possible pairs $(c,d)$, fix one determinant-one solution $(a_0,b_0)$ if one exists. Every other solution is $(a,b)=(a_0+kc,b_0+kd)$ for some integer $k$, and its transformation is $z\mapsto (a_0z+b_0)/(cz+d)+k$. The denominator is bounded below by $\sqrt{m/M_1}$, so the first term is bounded on $K$; boundedness of $\operatorname{Re}z$ and $\operatorname{Re}z'$ then bounds $k$. Thus only finitely many matrices move $K$ to meet itself, as required by [F8]. Since $-I$ acts trivially and $\chi(-I)=1$, work with the effective group $\Gamma/\{\pm I\}$ when forming quotient charts. At a point with trivial stabilizer for this effective action, choose a compact neighborhood; proper discontinuity leaves only finitely many translates that can meet it, and for each such nonidentity translate $\gamma$ choose disjoint neighborhoods $U_\gamma$ of the point and $V_\gamma$ of its image with $\gamma U_\gamma\subset V_\gamma$. Their finite intersection is a relatively compact neighborhood disjoint from all its translates except the identity, so the quotient projection is injective there. The elliptic points lie on the finitely many polygon boundaries and have measure zero. [F1, F2, F8, algebra]

2.1 The form is closable. Suppose $u_n\in\mathcal D$, $u_n\to0$ in $\mathcal H$, and $\nabla u_n$ converges in the energy $L^2$ norm to a vector field $G$. On any relatively compact injective quotient chart away from polygon boundaries, the hyperbolic and Euclidean measures are equivalent. For every smooth compactly supported test function $\varphi$ in that chart, integration by parts gives $\int G_x\overline\varphi\,dx\,dy=\lim_n\int (u_n)_x\overline\varphi\,dx\,dy=-\lim_n\int u_n\overline{\varphi_x}\,dx\,dy=0,$ and the same holds for $G_y$. Density [F3] implies $G=0$ on each chart. A countable chart cover and the measure-zero exceptional boundaries then give $G=0$ in the global energy space. This is the closability criterion for the gradient form, so the completion $\mathcal V$ embeds injectively in $\mathcal H$ and $\bar q$ is well-defined. [F2, F3, F4, step 1.3, algebra]

2.2 The completion $\mathcal V$ with inner product $a(u,v)=\langle u,v\rangle+\bar q(u,v)$ is a Hilbert space, and $a$ is bounded and coercive with constant $1$ in the $\mathcal V$ norm. For each $f\in\mathcal H$, the functional $v\mapsto\langle f,v\rangle$ is bounded and conjugate-linear on $\mathcal V$. By [F5] there is a unique $Rf\in\mathcal V$ such that $a(Rf,v)=\langle f,v\rangle\qquad(v\in\mathcal V).$ Taking $v=Rf$ and using coercivity gives $\|Rf\|_{\mathcal V}\le\|f\|_{\mathcal H}$. Uniqueness makes $R$ linear, so its inclusion into $\mathcal H$ is bounded. [F3, F4, F5, step 1.1]

3.1 The operator $R:\mathcal H\to\mathcal H$ is self-adjoint: the symmetry of $a$ and its defining equation give $\langle Rf,g\rangle=a(Rf,Rg)=\langle f,Rg\rangle$. It is positive because $a(Rf,Rf)=\langle f,Rf\rangle$ is nonnegative real, so $\langle Rf,f\rangle=\overline{\langle f,Rf\rangle}=a(Rf,Rf)\ge0$. It is injective, since $Rf=0$ implies $\langle f,v\rangle=0$ for the dense subspace $\mathcal V\subset\mathcal H$, hence $f=0$. Therefore $(\operatorname{ran}R)^\perp=\ker R=\{0\}$; [F7] shows that $\operatorname{ran}R$ is dense. [F3, F4, F7, step 1.1, step 2.2]

4.1 Define $T=R^{-1}$ on the dense domain $\operatorname{ran}R$. If $x=Rf$ and $y=Rg$, symmetry of $R$ gives $\langle Tx,y\rangle=\langle f,Rg\rangle=\langle Rf,g\rangle=\langle x,Ty\rangle$, so $T$ is symmetric. For every $v\in\mathcal H$, $\|(I\pm iR)v\|^2=\|v\|^2+\|Rv\|^2\ge\|v\|^2,$ because $R$ is self-adjoint. Hence each range $\operatorname{ran}(I\pm iR)$ is closed; its orthogonal complement is $\ker(I\mp iR)=\{0\}$ by the same inequality, so it is also dense and equals $\mathcal H$. Given $h\in\mathcal H$, choose $v=(I\pm iR)^{-1}h$ and put $x=Rv$. Then $x\in D(T)$ and $(T\pm i)x=(I\pm iR)v=h$. Thus $\operatorname{ran}(T\pm i)=\mathcal H$, and [F6] makes $T$ self-adjoint. [F4, F6, step 3.1, algebra]

5.1 For $x\in D(T)$, write $x=Rf$. Its defining variational identity gives $\bar q(x,v)=\langle f-x,v\rangle=\langle Tx-x,v\rangle$ for all $v\in\mathcal V$. Conversely, if $x\in\mathcal V$ and $\bar q(x,v)=\langle h,v\rangle$ for all $v$, then $a(x,v)=\langle h+x,v\rangle$; uniqueness in step 2.2 yields $x=R(h+x)$, so $x\in D(T)$ and $Tx=h+x$. Therefore the operator defined in the statement is $A_{N,\chi}=T-I$ on $D(T)$, is self-adjoint, and satisfies $\langle A_{N,\chi}x,x\rangle=\bar q(x,x)\ge0$. [step 2.2, step 4.1, algebra]

6.1 For $u\in\mathcal D$ and $v\in\mathcal D$, apply Green's formula [F10] on the finite union of fundamental polygons truncated above the compact quotient supports. Cusp boundary terms vanish because $u$ and $v$ vanish on sufficiently high cusp tails. Terms on paired polygon sides cancel: the pairing and energy form are invariant by step 1.2, the automorphy factors are $\chi(\gamma)$ and $\overline{\chi(\gamma)}$, whose product is $1$, and the paired outward normals have opposite signs. Elliptic vertices have boundary measure zero. Hence $q(u,v)=\langle-\Delta_{\mathrm{Eucl}}u,v\rangle_{L^2(dx\,dy)}=\langle\Delta_{\mathbb H}u,v\rangle_{\mathcal H}$, since $d\mu=y^{-2}dx\,dy$ and $\Delta_{\mathbb H}=-y^2\Delta_{\mathrm{Eucl}}$. Both sides are continuous in the $\mathcal V$ norm of $v$, so the identity extends to all $v\in\mathcal V$. The domain characterization in step 5.1 now gives $u\in D(A_{N,\chi})$ and $A_{N,\chi}u=\Delta_{\mathbb H}u$. [F2, F10, step 1.2, step 5.1, algebra] ∎