---
id: thm-marked-bounded-beltrami-dolbeault-and-lone-quadratic-duality
kind: theorem
title: Marked bounded Beltrami classes have Dolbeault cohomology and integrable quadratic dual
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-line-bundle-associated-to-a-divisor
  - def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface
  - thm-cech-dolbeault-comparison-for-line-bundles-on-compact-surfaces
  - thm-serre-duality-compact-riemann-surfaces
  - thm-riemann-roch-compact-riemann-surfaces
  - thm-smooth-partitions-of-unity-exist-on-manifolds
  - thm-weyl-lemma-for-the-laplacian
  - thm-laurent-expansion-annulus
  - thm-complex-hahn-banach-norm-preserving-extension
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Michael Kapovich, Hyperbolic Manifolds and Discrete Groups
      url: https://www.math.ucdavis.edu/~kapovich/RFG/book.pdf
      locator: Entire Section 5.4, printed pp. 119–124, especially the compact-surface discussion and Teichmuller Lemma statement at pp. 122–123; the marked bounded-data analytic argument is supplied below
    - title: Karl Otto Forster, Lectures on Riemann Surfaces
      url: https://ronan.terpereau.perso.math.cnrs.fr/Master_Class_2023_Dijon/FORSTER_Lectures%20on%20Riemann%20Surfaces.pdf
      locator: Compact Dolbeault, Serre and Riemann–Roch context of the explicitly cited local proved suppliers; no additional bounded-data existence theorem is invoked from this source
---

## Statement

Assume the Axiom of Choice. Let $\Sigma$ be a compact connected Riemann surface of genus $g$, let $P=\{p_1,\ldots,p_n\}$ be a finite labeled set, possibly empty, and suppose $2g-2+n>0$. Put $X=\Sigma\setminus P$, let $K$ be the canonical bundle and $T=K^*$ the holomorphic tangent line bundle, and set $E=T\otimes\mathcal O(-P)$. Its holomorphic sections are holomorphic vector fields vanishing at every marked point. In a coordinate centered at $p_j$, the inclusion $E\to T$ sends a local frame of $E$ to $z\partial_z$.

Let $B^\infty(X)$ be the complex vector space of measurable Beltrami tensors, written $\mu(z)d\bar z\otimes\partial_z$, with $\|\mu\|_\infty<\infty$. Here there is no strict bound below one: this is the full linear space of bounded infinitesimal coefficients. The coordinate rule for its scalar coefficient is the usual modulus-one Beltrami rule. Finite point sets do not affect its almost-everywhere classes, so these tensors are also locally bounded $T$-valued $(0,1)$-forms on $\Sigma$.

Define $\mathcal V_P$ to consist of continuous sections $v$ of $T$ on all of $\Sigma$, vanishing at every $p_j$, for which the distributional derivative $\bar\partial_Tv$ belongs to $B^\infty(X)$. This derivative is taken in holomorphic frames on $\Sigma$, including at marked points. Define the analytic marked infinitesimally trivial coefficients and their quotient by
$$N_P=\bar\partial_T\mathcal V_P,\qquad \mathcal T_P=B^\infty(X)/N_P,\qquad \|[\mu]\|=\inf_{\nu\in N_P}\|\mu-\nu\|_\infty.$$
Let $Q(X)=H^0(\Sigma,K^2\otimes\mathcal O(P))$. Thus its elements are holomorphic quadratic differentials on $X$ with at most simple poles at the marked points. Give it the norm $\|q\|_1=\int_X|\phi(z)|\,dx\,dy$ for $q=\phi(z)dz^2$.

Then:

1. Every $v\in\mathcal V_P$ is locally log-Lipschitz: in a fixed coordinate disc, $|v(z+h)-v(z)|\le C|h|(1+|\log|h||)$ on smaller compact discs. In particular, $v(z)=O(|z|(1+|\log|z||))$ at a marked point where its value is zero. No Sobolev differentiability stronger than the stated distributional condition is assumed.
2. For $\mu\in B^\infty(X)$, there is $v\in\mathcal V_P$ with $\bar\partial_Tv=\mu$ if and only if
$$\langle\mu,q\rangle:=\int_X\mu(z)\phi(z)\,dx\,dy=0\quad\text{for every }q\in Q(X).$$
When it exists, this marked primitive is unique. Consequently $N_P$ is closed in the essential-supremum norm.
3. There is a canonical complex-linear isomorphism $\mathcal T_P\cong H^1(\Sigma,E)$. Both this space and $Q(X)$ have dimension $3g-3+n$. The pairing above induces an isometric complex-linear identification
$$Q(X)\xrightarrow{\sim}(\mathcal T_P)^*,$$
and the quotient norm is exactly
$$\|[\mu]\|=\sup_{q\in Q(X),\ \|q\|_1\le1}|\langle\mu,q\rangle|.$$
The holomorphic quadratic differentials on $X$ integrable in this coordinate-invariant $L^1$ norm are exactly $Q(X)$.

This is the analytic marked Beltrami deformation quotient, including its cohomological and norm-dual identifications. It does not assert that a global Teichmüller manifold has been constructed or identify a derivative of a global moduli projection without such a separate construction.

## Statement references

[[thm-cech-dolbeault-comparison-for-line-bundles-on-compact-surfaces]]

[[thm-serre-duality-compact-riemann-surfaces]]

[[thm-riemann-roch-compact-riemann-surfaces]]

[Kapovich, Section 5.4](https://www.math.ucdavis.edu/~kapovich/RFG/book.pdf)

## Facts & Assumptions

**Given:** Full AC, the compact Riemann surface, its labeled marked points, the stable inequality $2g-2+n>0$, the bundles and the distributional vector-field space in the Statement.

[A1] AC supplies Countable Choice for the partition, distributional regularity and metric suppliers; full AC is inherited by compact Dolbeault, Serre, Riemann–Roch and complex Hahn–Banach. [[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]

[F1] Divisors define holomorphic line bundles with the expected tensor and dual rules. A canonical divisor $K_0$ identifies $\mathcal O(K_0)$ with $K$. Compatible Riemannian and Hermitian bundle metrics exist under Countable Choice, so the compact Dolbeault suppliers apply after supplying them. [[def-line-bundle-associated-to-a-divisor]], [[def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface]]

[F2] For a holomorphic line bundle $L$ on a compact Riemann surface, smooth Dolbeault cohomology is $H^1(\Sigma,L)=\Omega^{0,1}(\Sigma,L)/\bar\partial_L C^\infty(\Sigma,L)$. For divisor line bundles $L$, Serre duality is perfect against $H^0(\Sigma,K\otimes L^*)$; its convention is $(2\pi i)^{-1}\int_\Sigma\theta\wedge\omega$. These spaces are finite dimensional. [[thm-cech-dolbeault-comparison-for-line-bundles-on-compact-surfaces]], [[thm-serre-duality-compact-riemann-surfaces]]

[F3] Compact Riemann–Roch supplies a nonzero meromorphic differential, $h^0(\mathcal O)=1$, $h^1(\mathcal O)=g$, and $h^0(\mathcal O(D))-h^0(K\otimes\mathcal O(-D))=\deg D+1-g$. Negative-degree divisor bundles have no nonzero holomorphic sections. [[thm-riemann-roch-compact-riemann-surfaces]]

[F4] Smooth partitions of unity exist, and a distribution with zero Laplacian is smooth harmonic. A holomorphic function on an annulus has its Laurent expansion with coefficients given by contour integrals. [[thm-smooth-partitions-of-unity-exist-on-manifolds]], [[thm-weyl-lemma-for-the-laplacian]], [[thm-laurent-expansion-annulus]]

[F5] A bounded complex-linear functional on a normed subspace extends to the ambient complex normed space with the same norm. [[thm-complex-hahn-banach-norm-preserving-extension]]

## Proof

1.1 The norms and bilinear pairing in the Statement are intrinsic. Under a holomorphic coordinate change $z=\psi(\zeta)$ one has $\mu_\zeta=(\mu_z\circ\psi)\overline{\psi'}/\psi'$ and $\phi_\zeta=(\phi_z\circ\psi)(\psi')^2$. Thus $|\mu_\zeta|=|\mu_z\circ\psi|$, $|\phi_\zeta|\,dA_\zeta=|\phi_z|\,dA_z$ and $\mu_\zeta\phi_\zeta\,dA_\zeta=\mu_z\phi_z\,dA_z$. Holomorphic coordinate changes and their inverses preserve null sets locally, so these are equalities of the stated measurable classes. A simple pole has coefficient $O(1/|z|)$, integrable against $dA$, proving $Q(X)\subset L^1$. Conversely, if a quadratic coefficient $\phi$ is holomorphic and integrable on a punctured disc, write $A(r)=\int_0^{2\pi}|\phi(re^{it})|\,dt$. Integrability is $\int_0^\epsilon rA(r)dr<\infty$, so there are radii $r_k\to0$ with $r_k^2A(r_k)\to0$; otherwise the integral would dominate a positive multiple of $\int_0^\epsilon dr/r$. For each $j\ge2$, the Laurent coefficient formula in [F4] gives $|a_{-j}|\le r_k^jA(r_k)/(2\pi)\to0$. All coefficients of pole order at least two vanish, including every such coefficient of a potential essential singularity. The Laurent expansion therefore has at most a simple pole. This proves the asserted exact integrable class. [A1, F4, given, algebra]

1.2 We supply the needed bounded-data local primitive. Let $b$ be bounded and supported in a fixed planar disc, and put $Cb(z)=\pi^{-1}\int b(\zeta)/(z-\zeta)\,dA_\zeta$. The kernel $1/z$ is locally integrable, so this integral exists and is bounded on compact sets by $C\|b\|_\infty$. The distribution identity $\bar\partial(1/(\pi z))=\delta_0$ follows directly by integrating a compactly supported smooth test function on the complement of a radius-$r$ disc: Stokes gives $-\pi^{-1}\int (\bar\partial\eta)/z\,dA\to\eta(0)$, since the inner boundary integral of $\eta(z)/z$ tends to $-2\pi i\eta(0)$. Fubini applies to the locally integrable kernel against a compactly supported test derivative and the bounded compactly supported $b$, and gives $\bar\partial Cb=b$ distributionally. To bound differences at points a distance $h$ apart, set $r=|h|$. On the union of radius-$2r$ discs about those points, the separate kernel integrals are $O(r\|b\|_\infty)$. Outside that union, the kernel difference is at most $Cr/|z-\zeta|^2$. Integration in polar coordinates from radius $2r$ to a fixed larger radius gives $Cr(1+|\log r|)\|b\|_\infty$. Hence $Cb$ is continuous and log-Lipschitz on fixed compact sets. All constants may depend on the fixed discs. This proves the local analytic estimate, without a Calderón–Zygmund or global $L^p$ solvability assertion. [given, construct, algebra]

2.1 A continuous function $a$ whose distributional $\bar\partial a$ is bounded is locally the sum of a log-Lipschitz function and a holomorphic function. Indeed, multiply its bounded derivative by a smooth cutoff equal to one on a smaller disc, apply step 1.2, and subtract that Cauchy primitive. The difference has distributional $\bar\partial$ zero. Distributional derivatives commute, so its Laplacian $4\partial\bar\partial$ is zero. By [F4] it is smooth; its Cauchy–Riemann equation makes it holomorphic. Equality of the smooth representative and the continuous difference is pointwise, since two continuous functions equal almost everywhere agree everywhere. A holomorphic function has bounded derivative on a smaller compact disc, so is Lipschitz there. This proves the log-Lipschitz assertion. The same argument applies in a holomorphic vector-bundle frame, proving the first assertion for every $v\in\mathcal V_P$. If $v(p)=0$, subtracting its value gives $|v(z)|\le C|z|(1+|\log|z||)$ in a coordinate centered at $p$. [A1, F4, step 1.2, algebra]

2.2 For an arbitrary bounded $\mu$ we now reduce to smooth compact Dolbeault data. Choose finitely many holomorphic coordinate/frame discs $U_i$ with larger coordinate discs $V_i$ containing their closures. Near each marked point, arrange that a single one of these discs contains it and all other discs avoid a smaller fixed neighborhood of that point. This is done by taking disjoint marked coordinate discs first and then covering the compact complement of smaller marked discs. Use [F4] to choose a subordinate smooth partition $\chi_i$; the designated marked-disc function equals one near its marked point. On $V_i$ multiply the local coefficient of $\mu$ by a cutoff equal to one near $\overline U_i$, extend by zero, and use step 1.2 to construct a local continuous log-Lipschitz vector field $v_i$ with $\bar\partial_Tv_i=\mu$ on $U_i$. For a marked disc subtract its value at the marked point, a constant multiple of its holomorphic coordinate frame, so that $v_i(p_j)=0$. Put $v_0=\sum_i\chi_i v_i$ and $\beta=\mu-\bar\partial_Tv_0=-\sum_i(\bar\partial\chi_i)v_i$. Products are extended by zero from the supports of the partition. The field $v_0$ is continuous, vanishes at all marked points and is locally log-Lipschitz. [A1, F4, step 1.2, construct, algebra]

3.1 Every $\bar\partial_Tv$ with $v\in\mathcal V_P$ annihilates $Q(X)$. Write $q=\phi dz^2$ and contract it with $v$ to get the globally defined $(1,0)$-form $\alpha=v\phi dz$ on $X$. Its distributional exterior derivative there is $d\alpha=2i(\bar\partial_Tv)\phi\,dA$. Choose smooth cutoffs $\eta_r$ equal to zero on radius-$r$ discs about the marked points, equal to one outside the radius-$2r$ discs and with $|d\eta_r|\le C/r$. Compact-support distributional integration by parts on $X$ gives $2i\int_X\eta_r(\bar\partial_Tv)q=-\int_X d\eta_r\wedge\alpha$. In each transition annulus, step 2.1 gives $|v|\le Cr(1+|\log r|)$ and the simple-pole bound gives $|\phi|\le C/r$. Its area is $O(r^2)$, so this last integral is $O(r(1+|\log r|))$, tending to zero. Dominated convergence on the left is valid because the coefficient is bounded and $q$ is integrable by step 1.1. If $P$ is empty take $\eta_r=1$ and the same identity has right side zero. Thus $N_P\subseteq Q(X)^\perp$. This argument requires the continuous marked value and its proved regularity, rather than a point value assigned to a mere $L^p$ representative. [step 1.1, step 2.1, construct, algebra]

4.1 The residual $\beta$ is actually smooth, despite the merely bounded original data. On a neighborhood inside $U_j$, subtract $v_j$ from every summand using $\sum_i\bar\partial\chi_i=0$: $\beta=-\sum_i(\bar\partial\chi_i)(v_i-v_j)$. On each overlap $v_i-v_j$ has distributional $\bar\partial_T$ zero and is holomorphic by the argument of step 2.1. The products therefore are smooth, including their zero extensions away from compact partition supports. Near a marked point the single partition function is one and all derivatives of partition functions vanish, so $\beta=0$ there. Consequently $\beta$ is a smooth $E$-valued $(0,1)$-form, using $E=T(-P)$ away from the marked points and its zero extension near them. Also $\bar\partial_Tv_0=\mu-\beta$ is bounded, hence $v_0\in\mathcal V_P$. Step 3.1 yields $\langle\mu,q\rangle=\langle\beta,q\rangle$ for all $q\in Q(X)$. This is the promised full marked bounded-data reduction; dividing a bounded coefficient by $z$ and then assuming an unproved $L^p$ theorem is unnecessary. [step 2.1, step 3.1, step 2.2, algebra]

5.1 Apply compact Dolbeault and Serre duality precisely to $E$. By [F3] choose a nonzero meromorphic differential and its canonical divisor $K_0$. Then [F1] identifies $E\cong\mathcal O(-K_0-P)$ and $K\otimes E^*\cong K^2(P)$, so [F2] applies to exactly this bundle and its quadratic dual. Choose auxiliary compatible metrics using [F1]; their choice changes none of the cohomology or pairings. On a chart away from marked points, contraction gives $\beta\wedge q=\beta(z)\phi(z)d\bar z\wedge dz=2i\beta(z)\phi(z)dA$. Thus the Serre convention in [F2] is $\pi^{-1}\langle\beta,q\rangle$. It follows that $[\beta]=0$ in $H^1(\Sigma,E)$ if and only if all pairings $\langle\mu,q\rangle$ vanish. In that case [F2]'s smooth Dolbeault quotient supplies a smooth section $w$ of $E$ with $\bar\partial_Ew=\beta$. Its image in $T$ is smooth and vanishes at $P$, and $v=v_0+w$ belongs to $\mathcal V_P$ and solves $\bar\partial_Tv=\mu$. Together with step 3.1 this proves exactly $N_P=Q(X)^\perp$. Every pairing is bounded by $\|\mu\|_\infty\|q\|_1$, so this annihilator is closed. [A1, F1, F2, F3, step 3.1, step 4.1, construct, algebra]

6.1 The construction $\mu\mapsto[\beta]$ is canonical. Fixing one of the finite covers, cutoffs and Cauchy formulas in step 2.2 makes it complex linear, since subtraction of the local value at a marked point also is linear. With any other choices, the two resulting residuals have the same pairings against every $q$ by step 4.1. The perfect pairing in [F2] then makes their classes equal. Thus the map $\Psi:B^\infty(X)\to H^1(\Sigma,E)$ is independent of all these choices. Step 5.1 says its kernel is exactly $N_P$. Its local coordinate-obstruction interpretation can also be checked: the holomorphic difference cocycle is $c_{ij}=v_j-v_i$, and $b_i=v_i-v_0$ has $b_j-b_i=c_{ij}$ and $\bar\partial b_i=\beta$. Each $b_i$ is smooth: locally subtract a smooth primitive of the smooth $\beta$ using the local exactness in [F2], and apply step 2.1 to the resulting distributionally holomorphic difference. Near a marked point in its designated disc, $b_i=0$ because the sole partition function is one. Thus these are smooth $E$-valued splittings, and [F2]'s Forster convention sends their cocycle to $[\beta]$. This checks the marked Dolbeault class without assuming that an arbitrary chosen cover is acyclic. It remains to establish its range and the norm statement, without presupposing a global Teichmüller construction. [F2, step 2.1, step 2.2, step 4.1, step 5.1, algebra]

7.1 For any nonzero $q=\phi dz^2\in Q(X)$, the phase field $\mu_q=\overline\phi/|\phi|$ where $\phi\ne0$, and zero where it vanishes, is a global bounded Beltrami tensor. Indeed, its coordinate change is exactly the modulus-one rule of step 1.1: $\overline{\phi(\psi)(\psi')^2}/|\phi(\psi)(\psi')^2|=(\overline\phi/|\phi|)\circ\psi\cdot\overline{\psi'}/\psi'$. The field is measurable with norm at most one and $\langle\mu_q,q\rangle=\|q\|_1>0$. The evaluation map $A:B^\infty(X)\to Q(X)^*$ therefore is onto. To verify this last finite-dimensional assertion explicitly, if its range were proper there would be a nonzero functional on $Q(X)^*$ vanishing on that range; the algebraic finite-dimensional bidual identifies it with a nonzero $q\in Q(X)$, contrary to the phase-field calculation. Finiteness is supplied by [F2]. The perfect Serre pairing identifies $\Psi$ with $A$ up to the fixed scalar $1/\pi$, so $\Psi$ too is onto. Step 6.1 now gives the canonical isomorphism $\mathcal T_P\cong H^1(\Sigma,E)$. [F2, step 1.1, step 5.1, step 6.1, construct, algebra]

8.1 We compute the finite dimensions and the uniqueness of marked primitives at the full stable scope. Apply [F2] to the trivial bundle and [F3] to obtain $h^0(K)=h^1(\mathcal O)=g$. Riemann–Roch with divisor $K_0$ gives $g-1=\deg K_0+1-g$, hence $\deg K_0=2g-2$. Thus $\deg E=2-2g-n<0$ by the given stable inequality, and [F3] gives $H^0(\Sigma,E)=0$. Riemann–Roch with divisor $-K_0-P$ and its Serre twist $K^2(P)$ yields $0-\dim Q(X)=2-2g-n+1-g$, so $\dim Q(X)=3g-3+n$. Serre duality and step 7.1 give the same dimension for $H^1(\Sigma,E)$ and $\mathcal T_P$. If two marked continuous primitives solve the same coefficient, their difference has distributional $\bar\partial_T$ zero and is a global holomorphic vector field by step 2.1. It vanishes at $P$, so its coordinate coefficient is divisible holomorphically by $z$ there and it is a holomorphic section of $E$. The vanishing just established makes the difference zero. This includes the stable sphere and torus cases; no positive-genus or no-puncture restriction has been imposed. [F1, F2, F3, step 2.1, step 7.1, given, algebra]

9.1 Each $q\in Q(X)$ induces a functional on the quotient because $N_P$ is its annihilator. Its norm is at most $\|q\|_1$: for every representative $\mu$ and every $\nu\in N_P$, $|\langle\mu,q\rangle|=|\langle\mu-\nu,q\rangle|\le\|\mu-\nu\|_\infty\|q\|_1$, and taking the infimum gives the assertion. Conversely, the phase field in step 7.1 has quotient norm at most one and pairing $\|q\|_1$, so the induced functional has norm at least $\|q\|_1$. This proves an isometric injection $Q(X)\to(\mathcal T_P)^*$. Since $N_P$ is closed by step 5.1, the quotient norm is a norm; both spaces have the same finite dimension by step 8.1, so this injection is onto. The argument concerns the $L^1$ norm of quadratic differentials and the essential-supremum quotient norm exactly as defined; it does not use or confuse the full dual of $L^\infty$ with $L^1$. [step 5.1, step 7.1, step 8.1, algebra]

10.1 Finally a complex normed space has its norm recovered by its continuous dual under [F5]. For a nonzero $t$, the functional $ct\mapsto c\|t\|$ on its one-dimensional span has norm one; extend it by [F5] to obtain a norm-one functional taking value $\|t\|$ at $t$. The opposite inequality is the definition of functional norm, and $t=0$ is immediate. Apply this to $\mathcal T_P$ and use step 9.1's isometric identification of its dual with $Q(X)$. This gives exactly the quotient-norm supremum in the Statement. If $Q(X)=0$, step 8.1 makes the quotient zero and the formula still holds. We have asserted no attainment of the infimum over representatives. All existence, regularity, annihilator, dimension and norm claims have now been proved. [A1, F5, step 8.1, step 9.1, algebra] ∎

## Source reading, regularity and precise scope

The actual compact Čech–Dolbeault comparison, compact Serre duality and compact Riemann–Roch suppliers were read in full, including their precise smooth-form and divisor conventions. The divisor-bundle and compatible-metric definitions, Weyl lemma, Laurent-expansion theorem and complex Hahn–Banach theorem were read in full. Kapovich's entire Section 5.4, printed pp. 119–124 (cached primary PDF pp. 140–145, read through fresh OCR), was read. Its deformation-theoretic discussion explicitly treats the compact case for simplicity and states the sufficiency part of the Teichmüller Lemma without proving the marked bounded-data argument. The local Cauchy and smooth residual steps supply that missing analytic argument here by an elementary Cauchy construction and smooth residual reduction. The Forster reference records the context of the actual proved compact suppliers; no extra bounded-data theorem is imported from an unread primary passage.

The correct vector fields here are continuous on the compactification, vanish at the actual marked points, and have bounded distributional $\bar\partial$; their local log-Lipschitz regularity is proved, rather than assumed. We have neither divided arbitrary bounded data by a puncture coordinate and assumed an $L^p$ solution nor treated point evaluation as an operation on a general $L^p$ class. For an actual smooth family of marked coordinate changes $h_t$ with $h_0=\mathrm{id}$, differentiating $\mu_{h_t}=(h_t)_{\bar z}/(h_t)_z$ at zero gives $\bar\partial v$, with $v=\partial_t h_t|_0$ and $v(P)=0$, so these smooth infinitesimal changes lie in $N_P$. Identifying every analytic class above with the tangent space of a global Teichmüller complex manifold, and differentiating skinning or uniformization maps, require separate deformation and dependence theorems. Neither those theorems nor global extremal maps or hyperbolization are asserted here.
