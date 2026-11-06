---
id: thm-cft-r5-radial-liouville-poisson-spectral-resolution
kind: theorem
title: Radial Liouville Poisson spectral resolution
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
dependency_level: 5
proof_strategy: direct
deps:
  - def-cft-r5-liouville-radial-hamiltonian-data
  - lem-cft-r5-circle-gmc-positive-and-inverse-moments
  - def-cft-r5-liouville-spherical-conformal-blocks
  - thm-bounded-normal-operator-abstract-spectral-theorem
  - def-axiom-of-choice
  - thm-rmk-positive-functional-is-integration-against-its-representing-measure
dependency_roles:
  def-cft-r5-liouville-radial-hamiltonian-data: mathematical-premise
  lem-cft-r5-circle-gmc-positive-and-inverse-moments: mathematical-premise
  def-cft-r5-liouville-spherical-conformal-blocks: mathematical-premise
  thm-bounded-normal-operator-abstract-spectral-theorem: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-rmk-positive-functional-is-integration-against-its-representing-measure: mathematical-premise
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Guillarmou, Kupiainen, Rhodes and Vargas, Conformal Bootstrap in Liouville Theory"
      url: https://arxiv.org/pdf/2005.11530v1
      locator: "Sections 1.2–1.6 and 3–6; explicit local construction below. Actual source-reading limits are recorded in the attached research proofs; no full-paper reading is asserted."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $0<\gamma<\sqrt2$, $\mu>0$, $Q=2/\gamma+\gamma/2$ and $E_0=Q^2/2$. The closure of the exact initial radial form defines a self-adjoint $H$ with purely absolutely continuous spectrum $[E_0,\infty)$ and no eigenvalues. It has complete incoming-amplitude-one Poisson states $\Psi_{P,e}$, $P>0$, for each oscillator vector $e$ of energy $N$, with energy $E_0+P^2/2+N$. For weighted test vectors $u,v$ satisfying $e^{-\delta\rho}u,e^{-\delta\rho}v\in\mathcal H$ for some $\delta>0$, where $\rho(c)=c$ sufficiently far left and $\rho=0$ on $c\ge0$, the resolution is $\langle u,v\rangle=(2\pi)^{-1}\sum_{N,e}\int_0^\infty\langle u,\Psi_{P,e}\rangle\langle\Psi_{P,e},v\rangle\,dP$, with positive finite-cutoff limits and polarized extension. In the free Feigin–Fuchs descendant basis it uses precisely the two inverse Shapovalov matrices and the same $1/(2\pi)$. Let $\mathcal E\subset(0,\infty)$ be the union, over all finite chiral levels, of the zeros of the descendant-to-oscillator change-of-basis determinants at $\alpha=Q+iP$. This set is countable. The descendant integrands use inverse Gram matrices on $(0,\infty)\setminus\mathcal E$ and are assigned value zero on $\mathcal E$; all integrals are Lebesgue integrals, independent of this null-set convention. Pointwise nondegeneracy on $\mathcal E$ is not asserted. The analytic Poisson family has the connected weighted continuation (S8) and actual negative-charge uncut semigroup limit (S9) proved below, at every fixed finite descendant level. No extra $1/\sqrt{2\pi}$ occurs in an individual descendant state.

## Statement references

[[def-cft-r5-liouville-radial-hamiltonian-data]]

[[lem-cft-r5-circle-gmc-positive-and-inverse-moments]]

[[def-cft-r5-liouville-spherical-conformal-blocks]]

[[thm-bounded-normal-operator-abstract-spectral-theorem]]

[[def-axiom-of-choice]]

[[thm-rmk-positive-functional-is-integration-against-its-representing-measure|Positive functionals on $C_c(X)$ are integration against a Radon measure]]

## Facts & Assumptions

**Given:** Exactly the parameters, concrete Gaussian/vertex conventions and weighted-domain conditions in the Statement.

[F1] [[def-cft-r5-liouville-radial-hamiltonian-data]]: the exact initial finite-Hermite form, circle potential and Hilbert space.

[F2] [[lem-cft-r5-circle-gmc-positive-and-inverse-moments]]: existence, positivity, positive and inverse moments of that exact circle potential.

[F3] [[def-cft-r5-liouville-spherical-conformal-blocks]]: the descendant ordering, normalized Shapovalov matrices and weights.

[F4] [[thm-bounded-normal-operator-abstract-spectral-theorem]]: the actual bounded self-adjoint spectral representation applied to $(H+1)^{-1}$.

[F5] [[def-axiom-of-choice]]: the inherited Hilbert and spectral foundational choice context.

[F6] [[thm-rmk-positive-functional-is-integration-against-its-representing-measure|Positive functionals on $C_c(X)$ are integration against a Radon measure]]: a positive real-linear functional on $C_c(K;\mathbb R)$ for a locally compact Hausdorff space $K$ is integration against its constructed Radon measure. For compact $K$, $C_c(K)=C(K)$ and its mass is the functional at $1$.

## Proof

1.1 **FProof.** **1. Weighted integrability of every finite Hermite polynomial** [F1, F2, F3, F4, F5, construct, algebra]

2.1 Let $V_N$ be the total regularized mass. For a polynomial p in the first m real Gaussian coordinate pairs, the elementary Gaussian shift identity gives $E[|p|² V_N] = \int_T E[|p(Z+\gamma \operatorname{Cov}(Z,\phi_N(\theta)))|²] d\theta$. [F1, F2, F3, F4, F5, step 1.1, construct, algebra]

3.1 Indeed completing the square in the joint finite Gaussian density proves this identity for each theta; coordinates of $\phi_N$ beyond the first m integrate to one. For fixed m the shift vector is uniformly bounded in N and theta, since its entries are gamma cos(n theta)/sqrt(n) and −gamma sin(n theta)/sqrt(n), $1\le n\le m$. Gaussian polynomial moments therefore bound the right side by a finite constant depending on p,m,gamma. Along a subsequence on which the admitted random measures converge almost surely, their total masses converge because T is compact. Fatou proves E[|p|² $V]<\infty$. In particular $E[V]\le 2\pi$. This argument uses neither uniform integrability of the approximating masses nor an unproved second moment of V. [F1, F2, F3, F4, F5, step 2.1, construct, algebra]

4.1 **2. Actual initial form and closability** [F1, F2, F3, F4, F5, step 3.1, construct, algebra]

5.1 Write E0=Q²/2. Let C be the algebraic span of f(c)p with f smooth and compactly supported and p a finite Hermite polynomial. Tensor-product density of the Hermite basis and compactly supported smooth functions makes C dense in $H=L²(dc dP_T)$. Put $q0(u)= (1/2)||∂_c u||² + \sum_{\eta} \operatorname{energy}(\eta)||u_{\eta}||²$, qV(u)= mu integral exp(gamma c)V |u|² dc $dP_T$, q(u)=q0(u)+E0||u||²+qV(u). [F1, F2, F3, F4, F5, step 4.1, construct, algebra]

6.1 Here $u_{\eta}(c)$ are Hermite coefficients. All terms are finite on C by part F1 and compact c-support. The maximal q0 domain is complete for q0+||.||²: the weak derivative is a closed operator by testing against compactly supported functions, and the diagonal Hermite multiplier is closed coefficientwise, with Fatou controlling its summed norm. The maximal qV domain is also complete for qV+||.||²: multiplication by sqrt(mu exp(gamma c)V) is closed, because an L²-convergent subsequence converges pointwise almost everywhere, identifying any L² limit of the multiplied sequence. [F1, F2, F3, F4, F5, step 5.1, construct, algebra]

7.1 If $u_j$ in C tends to zero in H and $q(u_j−u_k)$ tends to zero, closedness of these two maximal forms implies $q0(u_j)\to 0$ and $qV(u_j)\to 0$. Thus q is closable on exactly the declared initial domain C. Denote its closure by qbar, with form domain F. We do not silently identify F with the full maximal intersection domain, since such a core identification is unnecessary here. The inequalities $qbar\ge E_0||.||²$ and $qbar\ge q0$ persist by the same closed-graph argument. [F1, F2, F3, F4, F5, step 6.1, construct, algebra]

8.1 **3. Self-adjoint operator from the closed form** [F1, F2, F3, F4, F5, step 7.1, construct, algebra]

9.1 Give F its Hilbert norm qbar(u)+||u||². For f in H there is a unique Sf in F satisfying $qbar(Sf,v)+\langle Sf,v\rangle=\langle f,v\rangle $ for all v in F. [F1, F2, F3, F4, F5, step 8.1, construct, algebra]

10.1 For completeness, the Hilbert representation used here follows by projecting onto the closed kernel of a bounded functional; the projection exists by the parallelogram identity applied to a minimizing sequence, and its orthogonal complement is one-dimensional for a nonzero functional. The displayed functional is bounded by ||f|| $||v||_F$. Its representative defines a bounded positive self-adjoint operator S on H. It is injective since F is dense; its range is dense since its orthogonal complement is ker S. Define $H=S^{-1}−I$ on Ran S. The inverse of an injective bounded self-adjoint operator with dense range is self-adjoint: if $\langle S^{-1}x,y\rangle=\langle x,z\rangle $ for all $x=Sf$, then $\langle f,y\rangle=\langle f,Sz\rangle $ for all f, whence $y=Sz$ belongs to Ran S and $S^{-1}y=z$. This characterizes its adjoint domain exactly. Thus H is self-adjoint, and its defining form is qbar. It is the Friedrichs realization of the specified initial form, without an assumption of closability or a formal differential-operator assertion on an inadmissible domain. [F1, F2, F3, F4, F5, step 9.1, construct, algebra]

11.1 For real lambda<E0, the same construction with the coercive inner product qbar−lambda<.,.> gives a bounded everywhere-defined inverse of H−lambda. Self-adjointness excludes nonreal spectrum. Therefore sigma(H) is contained in [E0,infinity). [F1, F2, F3, F4, F5, step 10.1, construct, algebra]

12.1 **4. Form-Weyl vectors prove the reverse spectral inclusion** [F1, F2, F3, F4, F5, step 11.1, construct, algebra]

13.1 Fix $\lambda\ge E_0$ and $k=\sqrt{2(\lambda−E_0)}$. Choose a smooth compactly supported chi in (−1,1) with $||\chi||_2=1$. For $L\ge 1$ put $f_L(c)=L^{-1/2}$ chi((c+L²)/L) exp(ikc), $u_L(c,\phi)=f_L(c)$ 1(phi). [F1, F2, F3, F4, F5, step 12.1, construct, algebra]

14.1 Then $u_L$ belongs to C, $||u_L||=1$, and the oscillator vacuum has number energy zero. Direct differentiation yields $||(−(1/2)∂_c²+E_0−\lambda)f_L||_2$ = $O(L^{-1})$. [F1, F2, F3, F4, F5, step 13.1, construct, algebra]

15.1 Its support satisfies $c\le −L²+L$. Consequently $qV(u_L)\le \mu$ E[V] exp(gamma(−L²+L)) $\to 0$. [F1, F2, F3, F4, F5, step 14.1, construct, algebra]

16.1 For every v in F, integration by parts first on C and then continuity in the form norm give $|qbar(u_L,v)−\lambda\langle u_L,v\rangle | \le  O(L^{-1})||v|| + \sqrt{qV(u_L)} \sqrt{qV(v)}$. [F1, F2, F3, F4, F5, step 15.1, construct, algebra]

17.1 No expression V $u_L$ in L² is used. This is essential when the second moment of V is unavailable. [F1, F2, F3, F4, F5, step 16.1, construct, algebra]

18.1 If lambda were in the resolvent, let $v_L=(H−\lambda)^{-1}u_L$. Its Hilbert norm is uniformly bounded. Moreover $qbar(v_L)=\langle u_L,v_L\rangle +\lambda||v_L||²$ [F1, F2, F3, F4, F5, step 17.1, construct, algebra]

19.1 is uniformly bounded, so $v_L$ is bounded in the form norm. In the preceding estimate with $v=v_L$ the left side is exactly $|<u_L,(H−\lambda)v_L>|=1$, whereas the right side tends to zero, a contradiction. Hence every $\lambda\ge E_0$ belongs to sigma(H). Combined with part F3 this proves sigma(H)=[E0,infinity). [F1, F2, F3, F4, F5, step 18.1, construct, algebra]

20.1 **5. Threshold is not an eigenvalue** [F1, F2, F3, F4, F5, step 19.1, construct, algebra]

21.1 If Hu=E0u, then qbar(u)−E0||u||²=0. In particular $||∂_c u||=0$. Testing the weak derivative against scalar test functions shows that u is constant in c as an $H_T$-valued distribution; the only such function in $L²(R;H_T)$ is zero. Thus E0 is not an eigenvalue. No claim of absence of embedded eigenvalues, singular continuous spectrum, or completeness of scattering states follows from this argument. [F1, F2, F3, F4, F5, step 20.1, construct, algebra]

22.1 **S1. Concrete estimates supplied by the actual GMC construction.** The circle construction proves $V>0$ almost surely, V in $L^{1+\epsilon}$ for some $\epsilon>0$, and $V^{-1}$ in every finite $L^r$. Every finite Hermite polynomial is in every $L^r$. Hence for each finite oscillator projection $\Pi_K$, $V^{1/2}\Pi_K$, $V^{-1/2}\Pi_K$ : $L²(\Omega_T)\to L²(\Omega_T)$ [F1, F2, F3, F4, F5, step 21.1, construct, algebra]

23.1 are bounded. Their constants need not be uniform in K. The first bound also follows directly from the Gaussian-tilt/Fatou argument in the Friedrichs supplier. On a half-cylinder $c<0$, $\Pi_K$ and $1−\Pi_K$ are bounded on F, since $||W^{1/2}\Pi_K u||² \le  C_K ||u||²$ [F1, F2, F3, F4, F5, step 22.1, construct, algebra]

24.1 there. They preserve the actual form closure, by approximating with its declared core. Multiplication by a smooth c-cutoff with bounded derivative is bounded on F. [F1, F2, F3, F4, F5, step 23.1, construct, algebra]

25.1 The local embedding $F\to L²(I \times \Omega_T)$ is compact for every bounded c-interval I. Indeed split at $\Pi_K$: the high-channel L² norm is at most $K^{-1/2}||P^{1/2}u||$, uniformly for bounded F sets. The finite low-channel functions have bounded H¹(I), and piecewise constant interpolation on meshes of size h approximates them in L² with error at most h||∂c u||. Thus each low-channel set is precompact. First choose K and then h. By Hilbert duality, the injection $L²(I \times \Omega_T)\to F'$ is compact as well. This explicit finite-channel proof will make the cutoff commutators compact; no finite-dimensional spacetime elliptic theorem is presumed. [F1, F2, F3, F4, F5, step 24.1, construct, algebra]

26.1 **S2. Compactness at the confining end.** On $c>a$ impose Dirichlet boundary at $c=a$ and close the same form on compactly supported initial tensors. Call its domain $F_+$ and operator $H_+$. Its form embedding into L² is compact. To prove the only additional point, uniform control of $c\to +\infty$, write $||\Pi_K u(c)||² \le  C_K E[V |u(c)|²]$ [F1, F2, F3, F4, F5, step 25.1, construct, algebra]

27.1 by Cauchy–Schwarz against $V^{-1/2}$ times a finite oscillator basis. Therefore $\int_{c>R} ||\Pi_K u(c)||² dc \le  C_K \operatorname{exp}(−\gamma R) qV(u)$, $\int_{c>R} ||(1−\Pi_K)u(c)||² dc \le  K^{-1} qP(u)$. [F1, F2, F3, F4, F5, step 26.1, construct, algebra]

28.1 Taking K large and then R large proves the tail bound; local compactness is part S1. It follows that (H_++b)^{-1}:F_+'->F_+ followed by the injection into F_+' is compact: factor through F_+->L², which is compact, and the continuous injection L²->F_+'. This is the exact compact operator needed below, including for form-dual sources. [F1, F2, F3, F4, F5, step 27.1, construct, algebra]

29.1 **S3. No eigenvalues, by an actual form difference quotient.** Suppose Hu=lambda u with u nonzero. Translations $T_h$ u(c)=u(c+h) preserve F, since they preserve the initial core and multiply the potential form by exp(−gamma h). Let $D_h=(T_h−I)/h$. We have $||D_h u||\le ||\partial_c  u||$. Translating the weak eigen-equation gives $q(D_h u,v)=\lambda\langle D_h u,v\rangle  − ((\operatorname{exp}(\gamma h)−1)/h)\langle W^{1/2}T_h u,W^{1/2}v\rangle $. (S2) [F1, F2, F3, F4, F5, step 28.1, construct, algebra]

30.1 Testing with $v=D_h u$ and absorbing the mixed potential term gives a uniform bound in F: $q(D_h u)\le C(||\partial_c  u||²+qV(u))$, since $qV(T_h u)=\operatorname{exp}(−\gamma h)qV(u)$. Weak compactness in F and the strong L² difference-quotient limit imply ∂c u belongs to F. Passing to the limit in (S2) is justified because translations are strongly continuous in the weighted potential norm (first on the initial core, then by density). Hence $q(\partial_c  u,v)=\lambda\langle \partial_c  u,v\rangle −\gamma\langle W^{1/2}u,W^{1/2}v\rangle $. [F1, F2, F3, F4, F5, step 29.1, construct, algebra]

31.1 Take $v=u$, and compare with the conjugate of the original eigen-equation tested at ∂c u. It gives gamma qV(u)=0. Since $W>0$ almost everywhere, $u=0$, contradiction. Thus H has no eigenvalues anywhere, not only at the threshold. This uses only weak compactness of the form difference quotients; an unproved strong-form convergence claim is unnecessary. [F1, F2, F3, F4, F5, step 30.1, construct, algebra]

32.1 **S4. Weighted resolvents: the finite-channel form parametrix.** Let rho(c)=c plus a constant for $c\le −1$ and rho=0 for $c\ge 0$, smooth with bounded first two derivatives. For a positive small $b<\gamma/4$ set $X_b=\operatorname{exp}(b \rho)$F', $Y_b=\operatorname{exp}(−b \rho)$F. [F1, F2, F3, F4, F5, step 31.1, construct, algebra]

33.1 The source decays at the open end and the target allows outgoing waves. Work in a bounded energy region, using local square-root coordinates $p_j(z)=\sqrt{2(z−E_0−j)}$, [F1, F2, F3, F4, F5, step 32.1, construct, algebra]

34.1 one for each finitely many low oscillator levels, choosing Im $p_j>0$ on the physical resolvent sheet. Choose K above that bounded energy region, so the high-channel Dirichlet operator on $c<0$, obtained by closing q on $(1−\Pi_K)$ initial tensors, has lower bound E0+K. Its inverse $R_{\mathrm{high}}(z)$ is analytic there. Conjugating its form by exp(plus or minus b rho) changes its real part by at most b²||u||²/2; the high gap still gives a bounded inverse on the corresponding weighted form-dual/form spaces. [F1, F2, F3, F4, F5, step 33.1, construct, algebra]

35.1 For the low channels use the exact full-line inverse of $−(1/2)\partial_c ²−p_j²/2$, kernel $G_j(z;c,c')=i \operatorname{exp}(i p_j(z)|c−c'|)/p_j(z)$. [F1, F2, F3, F4, F5, step 34.1, construct, algebra]

36.1 The derivative jump is −2, so this kernel has the asserted inverse normalization. Restricted to negative c,c', it maps $\operatorname{exp}(b \rho)H^{-1}$ into exp(−b rho)H¹ whenever Im $p_j>−b$, meromorphically in $p_j$ with its possible pole only at $p_j=0$. To verify the bound, conjugate the kernel by exp(b(c+c')); it is integrable with its first derivative off the diagonal when Im $p_j>−b$, and the derivative jump treats $H^{-1}$ data by one integration by parts. For closed channels with Im $p_j$ positive larger than b the ordinary exponentially decaying kernel bound applies. Finite-channel projection of a source in $X_b$ lies in the indicated $H^{-1}$ space, because a finite oscillator test function supported in $c<0$ has form norm bounded by its H¹ norm. [F1, F2, F3, F4, F5, step 35.1, construct, algebra]

37.1 Choose a partition chi+(1−chi)=1 with chi=1 sufficiently far left and chi=0 before $c=0$. Enlarge its left cutoff slightly to $\chi_L$, and use a right cutoff $\chi_+$ equal to one on supp(1−chi), with support strictly to the right of the boundary chosen in part S2. Define $Q(z)=\chi_L [R_{\mathrm{free,low}}(z)\Pi_K+R_{\mathrm{high}}(z)(1−\Pi_K)]\chi +\chi_+(H_++b0)^{-1}(1−\chi)$. [F1, F2, F3, F4, F5, step 36.1, construct, algebra]

38.1 Here b0 is a fixed positive number. Every term maps $X_b$ to $Y_b$. Direct multiplication gives (H−z)Q(z)=I+E(z), (S3) [F1, F2, F3, F4, F5, step 37.1, construct, algebra]

39.1 where E(z) is compact on $X_b$. The full list and its compactness are as follows. [F1, F2, F3, F4, F5, step 38.1, construct, algebra]

40.1 * The cutoff commutators are [H,chi]=−chi'∂c−chi''/2. Their outputs have bounded L² norm on a bounded c-interval. The compact injection of that L² space into F' from part S1 makes them compact in $X_b$. This holds for high channels as well as low ones; it is why no uniform Hermite $L^p$ estimate is required. * The right zero-order error $(−b0−z)\chi_+(H_++b0)^{-1}(1−\chi)$ is compact by part S2. * The low free-potential error W $\chi_L$ $R_{\mathrm{free,low}}$ $\Pi_K$ chi is compact into $X_b$. Its norm there is controlled by $||W^{1/2}\operatorname{exp}(−b \rho)u_{\mathrm{low}}||$. A $Y_b$-bounded finite-channel $u_{\mathrm{low}}$ has that quantity bounded with an extra left factor exp((gamma/2−2b)c). It tends uniformly to zero at $c\to −\infty$; on bounded intervals H¹ compactness applies. The positive exponent follows from $b<\gamma/4$. Multiplication $W^{1/2}:L²\to F'$ in this factorization is the exact adjoint of $F\to L²$, $u\to W^{1/2}u$. * The high-to-low error $\Pi_K$ W $\chi_L$ $R_{\mathrm{high}}(1−\Pi_K)\chi$ is compact. After cancelling its same source/output weight, it factors through the adjoint of the compact map $v\to W^{1/2}\Pi_K v$ from the left form space to L². That map is compact by finite-channel H¹ compactness and the factor exp(gamma c/2) at the left end. The other factor $W^{1/2}R_{\mathrm{high}}$ is bounded by its form estimate. [F1, F2, F3, F4, F5, step 39.1, construct, algebra]

41.1 These are all errors, since P commutes with the oscillator projections and W commutes with c-cutoffs. In particular the dangerous unbounded potential is never multiplied as an L² operator on an unrestricted high-channel vector. [F1, F2, F3, F4, F5, step 40.1, construct, algebra]

42.1 To ensure actual invertibility at an anchor, choose a real $z_*<E_0−b²/2$. The actual physical resolvent $R_*$ exists from the closed form and maps $X_b$ into exp(b rho)F. This follows by coercivity of the conjugated form: its real part is $q−b²||\rho'u||²/2−z_*||u||²$. A bounded coercive form is inverted directly by representing it as an operator on the form Hilbert space: its lower norm bound gives closed range, and the identical adjoint lower bound gives dense range, hence surjectivity. Correct Q by $Q_1(z)=Q(z)−R_*$ E(z). [F1, F2, F3, F4, F5, step 41.1, construct, algebra]

43.1 Then $(H−z)Q_1(z)=I+(z−z_*)R_*E(z)$. (S4) [F1, F2, F3, F4, F5, step 42.1, construct, algebra]

44.1 Away from thresholds the right side is identity plus an analytic compact family, and equals identity at $z_*$. To invert it meromorphically, approximate its compact part locally in norm by a fixed finite-rank operator. The complementary block is a Neumann-invertible operator, leaving one finite matrix Schur complement; its inverse is the adjugate divided by a determinant not identically zero. At a threshold use the square-root coordinate $t=p_j(z)$: the only singular free-kernel term is $i/t$ times the constant kernel in the finite oscillator eigenspace of level $j$, so its cutoff polar part has finite rank. Include the ranges of these polar coefficients in the finite block. The complementary block remains analytic and invertible, and the finite Schur complement now has meromorphic entries; its inverse is again meromorphic. Nonvanishing on overlaps with the continuation anchored at $z_*$ excludes an identically zero determinant. This proves meromorphic inversion with finite-rank polar parts also at thresholds, without assuming an unspecified analytic-Fredholm conclusion. Connected continuation gives $R_{\mathrm{out}}(z):X_b\to Y_b$. [F1, F2, F3, F4, F5, step 36.1, step 43.1, construct, algebra]

45.1 agreeing with (H−z)^{-1} on the physical sheet. Square-root thresholds are its only branch points. The construction can be repeated at arbitrarily large energies with larger finite K, and uniqueness on the physical sheet identifies the overlapping continuations. [F1, F2, F3, F4, F5, step 44.1, construct, algebra]

46.1 **S5. Actual outgoing asymptotics and absence of real poles.** For f in exp(b rho)L² (a dense test space), let $u=R_{\mathrm{out}}(E)f$ away from poles and thresholds. Projecting its equation to a low channel gives $(−(1/2)\partial_c ²−p_j(E)²/2)u_j=f_j−\Pi_j$ W u. [F1, F2, F3, F4, F5, step 45.1, construct, algebra]

47.1 Cauchy–Schwarz with $V^{1/2}\Pi_j$ gives an L² bound for $\Pi_j$ W u with an extra factor exp((gamma/2−b)c) at the left end. Thus variation of constants in this scalar finite-dimensional ODE gives $u(c)=\sum_{j<E−E_0} \operatorname{exp}(−i p_j c)a_j(f)+r(c)$, r,∂c r in L² at the left end. (S5) [F1, F2, F3, F4, F5, step 46.1, construct, algebra]

48.1 Closed channels have no growing exponential because its rate exceeds b (shrink b locally away from thresholds). For completeness, the remaining high projection is L² as well: multiply it by a far-left cutoff and apply the coercive high-channel inverse. Its source is a compact-cutoff commutator plus $(1−\Pi_K)W$ $u_{\mathrm{low}}$; the latter lies in the unweighted high form dual since $W^{1/2}u_{\mathrm{low}}$ is L² at the left end. Weighted uniqueness removes a homogeneous high solution. This also proves the derivative assertion in (S5). [F1, F2, F3, F4, F5, step 47.1, construct, algebra]

49.1 At a real nonthreshold pole, the highest Laurent coefficient is a nonzero homogeneous solution of $(H−E)u=0$ with outgoing expansion (S5). Apply Green's identity with left and right cutoffs. At the right end the form norm is finite and the averaged boundary term tends to zero. At the left end the L² remainder and its derivative have zero averaged boundary term, while the finite open waves give $\sum_{\mathrm{open}} p_j ||a_j||²=0$. [F1, F2, F3, F4, F5, step 48.1, construct, algebra]

50.1 All $p_j$ are strictly positive, so every outgoing coefficient vanishes. The solution is then L² and in the global form domain; its weak equation makes it an eigenvector, contradicting part S3. Therefore there are no real nonthreshold poles. The argument applies to the highest polar coefficient of any pole order. [F1, F2, F3, F4, F5, step 49.1, construct, algebra]

51.1 **S6. Pure absolute continuity, with thresholds treated honestly.** Apply [F4] to the bounded positive self-adjoint operator $S=(H+1)^{-1}$ on the nonzero complex Hilbert space $\mathcal H$, under [F5]. Its compact spectrum $K\subseteq[0,\|S\|]$ is locally compact Hausdorff. For each $u\in\mathcal H$, $\Lambda_u(f)=\langle f(S)u,u\rangle$ on real $C(K)=C_c(K)$ is real-linear and positive: for $f\ge0$, functional calculus gives $f(S)=\sqrt f(S)^*\sqrt f(S)$. By [F6] it has a finite Radon representing measure $\mu_u$, of mass $\|u\|^2$. There is no mass at zero. Indeed $f_m(s)=(1+ms)^{-1}$ gives contractions $f_m(S)$, and $\|f_m(S)Sv\|\le m^{-1}\|v\|$; density of $\operatorname{Ran}S$ implies $f_m(S)u\to0$. Dominated convergence in $\Lambda_u(f_m)=\int_K f_m\,d\mu_u$ then gives $\mu_u(\{0\})=0$. Push this measure forward on $K\setminus\{0\}$ by $s\mapsto s^{-1}-1$; the resolvent identity and continuous functional calculus show that its Cauchy transform is $\langle(H-z)^{-1}u,u\rangle$ for nonreal $z$. Polarization gives mixed measures. Integrating its imaginary part gives Stone's formula from the elementary Poisson kernel, by Tonelli and convergence to the indicator of an interval whose endpoints are not atoms. [F4, F5, F6, step 50.1, construct, algebra]

52.1 For $u$ in the dense test space $\mathcal D_b=e^{b\rho}\mathcal H$, parts S4–S5 give continuous upper/lower boundary values of its Cauchy transform on every compact interval avoiding the threshold set $\{E_0+j:j\in\mathbb N\}$. Stone's formula gives an absolutely continuous scalar measure there. Its singular part is supported on that countable set. An atom at $\lambda$ would give an eigenvector: continuous bumps on $K$ shrinking to $s_\lambda=(1+\lambda)^{-1}>0$, applied to $u$ by the functional calculus, converge in norm to a nonzero $w$ with $Sw=s_\lambda w$, hence $Hw=\lambda w$. S3 therefore excludes atoms, so the singular part is zero. For an arbitrary $u\in\mathcal H$ and a Lebesgue-null Borel set $B$, uniqueness of the representing measures and the parallelogram identity for the functional calculus give $\mu_u(B)\le2\mu_v(B)+2\mu_{u-v}(B)$ for every $v$. Choose $v\in\mathcal D_b$: then $\mu_v(B)=0$ and $\mu_{u-v}(B)\le\|u-v\|^2$. Taking $v\to u$ by density gives $\mu_u(B)=0$. Thus every scalar spectral measure is absolutely continuous. This argument claims boundary values only for $\mathcal D_b$ and requires neither uniform threshold bounds nor absence of threshold resonances. [F1, F2, F3, F4, F5, F6, step 51.1, construct, algebra]

53.1 **S7. Poisson states and the exact flux normalization.** At a nonthreshold energy E, for a vector F in the finite open-channel space define $P_E$ $F=\chi(c) \sum_{\mathrm{open}} \operatorname{exp}(+i p_j c)F_j$ $−R_{\mathrm{out}}(E)(H−E)[\chi(c)\sum_{\mathrm{open}} \operatorname{exp}(+i p_j c)F_j]$. (S6) [F1, F2, F3, F4, F5, step 52.1, construct, algebra]

54.1 The residual belongs to $X_b$, in the form-dual sense, because its potential part factors through $W^{1/2}$ times the finite-channel seed and exp((gamma/2−b)c) decays. Thus this is an actual homogeneous solution, with incoming coefficient F and outgoing coefficient $S_E$ F. Green's identity for two such solutions proves $S_E^*$ D $S_E=D$, $D=\operatorname{diag}(p_j)$, [F1, F2, F3, F4, F5, step 53.1, construct, algebra]

55.1 so $S_E$ is invertible and unitary in the velocity-weighted finite-channel metric. Outgoing uniqueness from part S5 proves cutoff independence. [F1, F2, F3, F4, F5, step 54.1, construct, algebra]

56.1 **Higher thresholds for a strictly open incoming channel.** Fix oscillator levels $N<j$, a vector $e\in\ker(\mathcal P-N)$, and $E_*=E_0+j$. Write $z(t)=E_*+t^2/2$, $p_j(t)=t$, and $p_\ell(t)=\sqrt{2(j-\ell)+t^2}$ for $\ell<j$, choosing the branch positive at $t=0$. Thus $p_N(0)=\sqrt{2(j-N)}>0$. Set $W=\mu e^{\gamma c}V$ as a form multiplication operator and use the same left cutoff $\chi$ as in (S6). By steps 36.1 and 44.1, $U(t)=\chi e^{ip_N(t)c}e-R_{\mathrm{out}}(z(t))(H-z(t))[\chi e^{ip_N(t)c}e]$ is meromorphic near $t=0$ in $Y_b=e^{-b\rho}\mathcal F$, for sufficiently small $0<b<\min(\gamma/4,1/2)$. Its residual is holomorphic in $X_b$, since $p_N(t)$ is holomorphic and has small imaginary part there. For real $t>0$ sufficiently small, $U(t)$ is precisely the nonthreshold Poisson state of step 53.1 with incoming data $e$ in channel $N$. [F1, F2, step 36.1, step 44.1, step 53.1, step 55.1, construct]

57.1 Let $\pi_\ell$ project onto $\ker(\mathcal P-\ell)$ and $L_j=\sum_{\ell=0}^j\pi_\ell$, a finite-rank projection including all multiplicities. For $c<0$, Cauchy–Schwarz with $V^{1/2}\pi_\ell$ gives $\|\pi_\ell WU(t,c)\|\le C_\ell e^{\gamma c}\|V^{1/2}U(t,c)\|$. Hence $h_\ell(t)=\pi_\ell WU(t)$ is meromorphic with values in $e^{ac}L^2(( -\infty,0);\ker(\mathcal P-\ell))$ whenever $0<a<\gamma/2-b$. Shrink the $t$-disk so $|\operatorname{Im}p_\ell(t)|<a/2$ for $\ell\le j$. The projected homogeneous equation is $U_\ell''+p_\ell(t)^2U_\ell=2h_\ell(t)$. Its particular solution $r_\ell(t,c)=2\int_{-\infty}^c \frac{\sin(p_\ell(t)(c-s))}{p_\ell(t)}h_\ell(t,s)\,ds$ is meromorphic in $e^{ac}H^1$ on the left. Indeed the weighted integral kernels for it and its first derivative are bounded by integrable multiples of $(1+c-s)e^{-a(c-s)/2}$; at $p_j=0$ the quotient is $c-s$, so this operator has no threshold pole. Subtracting $r_\ell$ leaves the two free waves. The outgoing construction fixes their coefficients for real $t>0$, and meromorphic continuation then gives $U_\ell(t,c)=\mathbf1_{\ell=N}e^{ip_N(t)c}e+e^{-ip_\ell(t)c}A_\ell(t)+r_\ell(t,c)$, with meromorphic finite-dimensional $A_\ell(t)$. They are meromorphic because solving for the free coefficients from the value and derivative at a fixed left point requires only division by $p_\ell(t)$, with a possible finite-order pole at $t=0$. [F1, F2, step 22.1, step 47.1, step 54.1, step 56.1, construct, algebra]

58.1 The remaining component has a meromorphic unweighted form norm at the left end, uniformly through $t=0$. To check this rather than infer it from a weighted expansion, let $C_j=1-L_j$ and close the initial form on $c<0$ in the channels $\ell>j$, with Dirichlet boundary at $0$. Its operator $H_{>j,-}$ is at least $E_0+j+1$, so its unweighted form-dual inverse at $z(t)$ is holomorphic near $0$. The same conjugated-form estimate as step 34.1 makes its $b$-weighted inverse holomorphic as well, since the gap persists after subtracting $b^2/2$. For a cutoff $\eta$ equal to one far left and zero near $0$, the exact equation is $(H_{>j,-}-z(t))\eta C_jU=[-\tfrac12\partial_c^2,\eta]C_jU-\eta C_jWL_jU$. The commutator is an unweighted form-dual source supported in a compact interval. The second source factors through $W^{1/2}L_jU\in L^2$ on $c<0$, by the finite-channel bound and $\gamma/2>b$. Both are meromorphic in the unweighted form dual. Uniqueness for the weighted coercive inverse identifies $\eta C_jU$ with the unweighted inverse of this source. It therefore lies meromorphically in the actual closed form domain on the half-cylinder. On the right, cutoffs of $U\in Y_b$ already lie meromorphically in $\mathcal F$, since $\rho=0$ there. Consequently a Laurent coefficient of $U$ whose finite incoming and outgoing wave coefficients vanish belongs to the global actual form domain $\mathcal F$: its low-channel remainder is in $e^{ac}H^1$ with finite potential norm, its high-channel part is in the half-cylinder form closure, and cutoff gluing preserves $\mathcal F$. [F1, F2, step 24.1, step 34.1, step 48.1, step 57.1, construct, algebra]

59.1 For real $t>0$, the flux identity of step 54.1 applied to $U(t)$ gives $\sum_{\ell=0}^j p_\ell(t)\|A_\ell(t)\|^2=p_N(t)\|e\|^2$. Therefore $A_\ell(t)=O(1)$ for $\ell<j$ and $A_j(t)=O(t^{-1/2})$ as $t\downarrow0$. Each $A_\ell$ is meromorphic in the coordinate $t$ and has only integer Laurent powers. A nonzero pole would grow at least as $t^{-1}$ on the positive real axis, contradicting these bounds. All $A_\ell$ thus have removable singularities. If $U$ nevertheless had a pole of order $m\ge1$, its highest Laurent coefficient $u_{-m}$ would be nonzero and satisfy $(H-E_*)u_{-m}=0$ weakly. The incoming seed and every outgoing wave coefficient are holomorphic, so step 58.1 gives $u_{-m}\in\mathcal F\subset\mathcal H$. Its weak equation extends from the initial form core to $\mathcal F$, placing it in $D(H)$ as an eigenvector. This contradicts step 31.1. Hence $U$ itself is holomorphic at $t=0$ in $Y_b$. [step 31.1, step 54.1, step 57.1, step 58.1, algebra]

60.1 Define $\Psi_{\sqrt{2(j-N)},e}=U(0)$. Its weak equation, incoming coefficient $e$ in channel $N$, and cutoff independence follow by taking the $Y_b$ limit of the corresponding identities for $t>0$. For unit $e$ this retains incoming amplitude one. This supplies every omitted $P>0$ with $E_0+N+P^2/2=E_0+j$; the case $j=N$ would have $P=0$ and is not asserted. No absence of threshold resonances is needed: only the continued state is selected. Regularity here is in the square-root coordinate $t$, not necessarily holomorphy in the energy $z$. For a fixed channel the omitted momenta form a countable set, so these values preserve the Lebesgue resolution and its normalization. They also give the threshold boundary values of the connected continuation in S8. The argument permits holomorphic incoming data $e(t)$ in the fixed finite-dimensional eigenspace as well, since their norms remain bounded near $0$. [step 56.1, step 59.1, construct, algebra]

61.1 For the nonthreshold members of the Poisson family completed in step 60.1, the same cutoff Green identity for $u=R_{\mathrm{out}}(E)f$ and $P_E$ F relates $P_E^*f$ to the outgoing coefficient a(f) by an overall phase times $S_E^*$ D a(f). The scalar phase has modulus one; its sign depends only on which boundary resolvent is called outgoing. The resolvent flux is $|\operatorname{Im}\langle R_{\mathrm{out}}(E)f,f\rangle |=(1/2)\langle D a(f),a(f)\rangle $. [F1, F2, F3, F4, F5, step 55.1, step 60.1, construct, algebra]

62.1 Using $S_E^*D$ $S_E=D$ eliminates $S_E$ and gives the positive spectral density $d\langle u,1_E(H)v\rangle /dE$ = (1/(2pi)) $\sum_{\mathrm{open}} (1/p_j) \langle u,P_E e_j\rangle \langle P_E e_j,v\rangle $, (S7) [F1, F2, F3, F4, F5, step 61.1, construct, algebra]

63.1 for any orthonormal oscillator basis $e_j$ (including multiplicities). The factor 1/2 is the coefficient of −∂c² in H and the factor 1/pi is the Poisson-kernel normalization; thus no unspecified scattering-measure normalization remains. [F1, F2, F3, F4, F5, step 62.1, construct, algebra]

64.1 For the channel with oscillator energy N, put $E=E_0+N+P²/2$, so $p_N=P$ and dE=P dP. Integrating (S7), using pure absolute continuity, gives exactly (S1). At finite energy only finitely many channels occur. For diagonal matrix elements all summands are nonnegative, so exhaustion by finite energy ranges and then by N and P cutoffs is monotone. Polarization and Cauchy–Schwarz give the mixed limit. This proves completeness rather than merely an isometry into a possible proper scattering subspace. [F1, F2, F3, F4, F5, step 63.1, construct, algebra]

65.1 **S8. The connected analytic bridge and the actual negative-alpha semigroup limit.** The analytic interface needed by the Ward proof is stronger than real-axis completeness. It follows from the same construction, as follows. For every $\beta\ge 0$ the physical resolvent also acts R(z):exp(−beta rho)F' $\to $ exp(−beta rho)F [F1, F2, F3, F4, F5, step 64.1, construct, algebra]

66.1 whenever Im $p_0(z)>\beta$ on the physical sheet. Repeat part S4 with the SAME growing weight on source and target. The free kernels are bounded exactly under $\operatorname{Im} p_j\ge \operatorname{Im} p_0>\beta$. In the potential errors the two equal weights cancel, leaving the factor exp(gamma c/2), so their compactness proof requires no $\beta<\gamma/4$. The high inverse remains coercive after taking K larger than beta² and the bounded energy region. Anchor at a sufficiently negative $z_*$ and use (S4). Its meromorphic continuation has no physical poles: on compactly supported sources it agrees by analytic continuation with the actual physical resolvent, which is analytic off the real spectrum; these sources are dense in the weighted form dual. A finite-rank polar coefficient vanishing on this dense subspace is zero. [F1, F2, F3, F4, F5, step 65.1, construct, algebra]

67.1 For a fixed oscillator energy N let alpha be the internal primary label, put $k=−i(\alpha−Q)$, z(alpha)=E0+k²/2+N, $p_0(\alpha)=\sqrt{k²+2N}$, Im $p_0>0$ when $\operatorname{Im} k>0$. [F1, F2, F3, F4, F5, step 66.1, construct, algebra]

68.1 The seed is exp(i k c)F. Its cutoff residual belongs to exp(−beta rho)F' whenever $\beta>\operatorname{Im} k−\gamma/2$. Consequently (S6), now using the physical resolvent, is analytic in the region $\operatorname{Im} k>0$, Im $p_0>\operatorname{max}(0,\operatorname{Im} k−\gamma/2)$. (S8) [F1, F2, F3, F4, F5, step 67.1, construct, algebra]

69.1 It is locally a holomorphic weighted-form-valued function, choosing beta strictly between the two bounds. This region has a connected unbounded component joining the far positive imaginary k-axis to a neighborhood above EVERY positive real k. Explicitly, on a sufficiently large upper semicircle $p_0−k=N/k+O(|k|^{-3})$, so $|\operatorname{Im}(p_0−k)|<\gamma/2$; near the positive real axis the same strict inequality holds by continuity. Move from the large semicircle to any fixed positive real k through a sufficiently thin upper strip, where both imaginary parts are positive and their difference tends to zero. Part S4 continues it through the physical boundary away from the discrete thresholds, and steps 56.1–60.1 supply the removable continuation in the local square-root coordinate at each higher threshold of the fixed incoming channel. Changing beta or the cutoff gives the same family by the resolvent identity on overlaps. [F1, F2, F3, F4, F5, step 56.1, step 60.1, step 68.1, construct, algebra]

70.1 For real alpha with $k=i$ kappa, choose kappa large enough that $\kappa>\gamma/2$ and $\sqrt{\kappa²−2N}>\kappa−\gamma/2$. [F1, F2, F3, F4, F5, step 69.1, construct, algebra]

71.1 Choose beta between these two values. Then z=E0−kappa²/2+N<E0−beta²/2 and the FULL uncut seed psi=exp(−kappa c)F satisfies (H−z)psi=W psi in exp(−beta rho)F'. [F1, F2, F3, F4, F5, step 70.1, construct, algebra]

72.1 At the right end the condition $\kappa>\gamma/2$ makes the potential-form pairing integrable. Choose a larger $\beta_0>\kappa$ to contain the seed itself at the left end. The conjugated form defines the semigroup on $\operatorname{exp}(−\beta_0 \rho)$F', and its restriction to the smaller beta-space has decay exp(−t(E0−beta²/2−epsilon)). To see this without an assumed weighted-semigroup theorem, the conjugated form has real part at least q−beta²||u||²/2, and its imaginary part is bounded by C||u||||∂c u||; the rotated form estimates give sectorial resolvent bounds. Integrating exp(−t z) times that resolvent on two rays outside its numerical-range sector defines the semigroup. The resolvent identity proves its semigroup law, and closing the contour at zero proves strong convergence to the identity on the form core and then by density. The same contour with the form/dual estimates gives the asserted bound with arbitrary $\epsilon>0$. [F1, F2, F3, F4, F5, step 71.1, construct, algebra]

73.1 Variation of constants, first for compact cutoffs and then in the beta_0 weighted form dual, now gives exp(−t(H−z))psi =psi−integral_0^t exp(−s(H−z))W psi ds. [F1, F2, F3, F4, F5, step 72.1, construct, algebra]

74.1 The integrand is in the SMALLER beta-space and decays exponentially there, since $z<E_0−\beta²/2$. The integral therefore tends to R(z)W psi. Its limit is psi−R(z)W psi. This equals the cutoff Poisson construction: their difference is (1−chi)psi minus R(z)(H−z)((1−chi)psi), which is zero because (1−chi)psi lies in the smaller weighted form domain. Thus $P_{z(\alpha)}F=\operatorname{lim}_{t\to \infty}$ exp(t z(alpha)) exp(−tH) [exp((alpha−Q)c)F]. (S9) [F1, F2, F3, F4, F5, step 73.1, construct, algebra]

75.1 This proves the exact negative-alpha-to-spectrum bridge requested by the Ward owner, rather than assuming that an arbitrarily normalized real-axis solution is its continuation. [F1, F2, F3, F4, F5, step 74.1, construct, algebra]

76.1 **S9. Descendant Gram normalization, without a determinant formula premise.** Use the actual Gaussian complex coordinates $\varphi_n=(x_n+iy_n)/(2\sqrt n)$ and $\varphi_{-n}=\overline{\varphi_n}$. For $n>0$, define $\partial_n=\sqrt n(\partial_{x_n}-i\partial_{y_n})$ and $\partial_{-n}=\sqrt n(\partial_{x_n}+i\partial_{y_n})$; these satisfy $\partial_n\varphi_n=\partial_{-n}\varphi_{-n}=1$ and $\partial_n\varphi_{-n}=\partial_{-n}\varphi_n=0$. Put $A_n=(i/2)\partial_n$, $A_{-n}=(i/2)(\partial_{-n}-2n\varphi_n)$, [F1, F2, F3, F4, F5, step 75.1, construct, algebra]

77.1 and the analogous tilde operators interchanging n and −n. Gaussian integration by parts gives $A_n^*=A_{−n}$, $[A_n,A_m]=(n/2)\delta_{n,−m}$, and the two families commute. The creation monomials $\prod_n$ $A_{−n}^{k_n}$ $\widetilde A_{−n}^{l_n}1$ are an orthogonal basis, with squared norm $\prod_n$ $(n/2)^{k_n+l_n}$ $k_n!$ $l_n!$: move each annihilator right using the displayed commutators. Their leading terms in the Gaussian coordinates span the same finite polynomial spaces as the Hermite basis, so this accounts for every oscillator channel. At primary label alpha define on finite oscillator polynomials $L_n^{\alpha}=i(\alpha−(n+1)Q)A_n+\sum_{m\ne 0,n}$ $A_{n−m}A_m$, $n\ne 0$, $L_0^{\alpha}=\Delta_{\alpha}+2\sum_{m>0}A_{−m}A_m$, [F1, F2, F3, F4, F5, step 76.1, construct, algebra]

78.1 with normal ordering and the same tilde construction. Only finitely many summands act on each polynomial. Expanding commutators using $[A_n,A_m]$ gives the Virasoro relation at $c_L=1+6Q²$: quartic terms cancel in pairs and the bilinear part is $(n−m)L_{n+m}$; when $m=−n$ the scalar is fixed by action on the vacuum. Indeed the linear-oscillator contribution is (n/2)(n²Q²−(alpha−Q)²), [F1, F2, F3, F4, F5, step 77.1, construct, algebra]

79.1 and the double-contraction contribution is $\sum_{j=1}^{n−1}j(n−j)/2=n(n²−1)/12$. Their sum is 2n $\Delta_{\alpha}+(1+6Q²)(n³−n)/12$. This gives the complete scalar and sign normalization. The vacuum is highest weight, the tilde family commutes, and for $\alpha=Q+iP$ these operators satisfy $(L_n^{\alpha})^*=L_{−n}^{\alpha}$. [F1, F2, F3, F4, F5, step 78.1, construct, algebra]

80.1 For partitions $\nu,\widetilde{\nu}$ define $Q_{\alpha,\nu,\widetilde{\nu}}=L_{−\nu}^{\alpha}$ $\widetilde L_{−\widetilde{\nu}}^{\alpha}$ 1. [F1, F2, F3, F4, F5, step 79.1, construct, algebra]

81.1 They lie in oscillator level $N=|\nu|+|\widetilde{\nu}|$. At any fixed chiral level the determinant of their change of basis to the oscillator monomials is a nonzero polynomial in alpha: the highest alpha-degree term in the column indexed by nu is $i^{\operatorname{length}(\nu)}$ $\alpha^{\operatorname{length}(\nu)}$ $A_{−\nu}1$. These leading monomials are a basis indexed by partitions, so the determinant has nonzero leading coefficient. Thus all level changes are invertible outside a countable exceptional set of alpha, which meets Q+iR in a Lebesgue-null set. No Kac determinant formula or unproved irreducibility is needed for this a.e. spectral statement. [F1, F2, F3, F4, F5, step 80.1, construct, algebra]

82.1 For real P, move positive Virasoro modes across the Gaussian scalar product, commute them with negative modes, and use their annihilation of the vacuum. This is exactly the recursive Shapovalov form, with highest-vector norm one. Since the two oscillator Fock families are orthogonal tensor factors, the Gram matrix at fixed separate levels is $G(P)=F_{Q+iP}(\nu,\nu')$ $F_{Q+iP}(\widetilde{\nu},\widetilde{\nu}')$. [F1, F2, F3, F4, F5, step 81.1, construct, algebra]

83.1 It is positive definite at the nonexceptional $P$. Define the interacting normalized descendant states by applying the Poisson map at energy $z(\alpha)=2\Delta_\alpha+N$ to these incoming polynomials. Equations (S8)–(S9) identify them with the analytic continuations of the actual free-descendant semigroup limits. By step 81.1, the exceptional set $\mathcal E$ in the Statement is a countable union of finite zero sets and hence is Lebesgue-null. Off $\mathcal E$, finite-dimensional change of basis in (S1) inserts $G(P)^{-1}$, the two inverse Shapovalov matrices, while leaving $1/(2\pi)$ unchanged. Extend the resulting integrands by zero on $\mathcal E$; this preserves each finite-cutoff Lebesgue integral and its positive diagonal and polarized limits. It does not evaluate any inverse matrix on $\mathcal E$. With this normalization no extra $1/\sqrt{2\pi}$ is included in an individual descendant state. The resolution therefore has exactly the normalization of A1 in the current bootstrap item. [F1, F2, F3, F4, F5, step 81.1, step 82.1, construct, algebra] ∎
