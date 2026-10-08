---
id: lem-restricted-regular-representation-is-weakly-contained-in-subgroup-regular-representation
kind: lemma
title: Restriction of the regular representation to a closed subgroup
status: published
origin: pipeline
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-topological-group
  - def-locally-compact-space
  - def-hausdorff-space
  - def-neighbourhood-top
  - def-subspace-topology-top
  - def-compact-space
  - lem-compactness-of-a-subspace-is-ambient
  - def-product-topology
  - def-borel-sigma-algebra
  - def-compact-support-c-c-and-c-zero-on-an-lch-space
  - thm-compactness-under-continuous-maps
  - thm-closed-subspace-of-a-compact-space-is-compact
  - thm-locally-compact-hausdorff-basics
  - thm-finite-products-of-compact-spaces
  - thm-compact-subset-of-a-hausdorff-space-is-closed
  - thm-existence-of-rho-functions-and-quasi-invariant-measures-on-g-mod-h
  - thm-weil-quotient-integration-formula-with-rho-function
  - def-rho-function-for-a-closed-subgroup
  - lem-closed-subgroup-quotient-averaging-and-compact-lifts
  - lem-compactly-supported-kernels-admit-commuting-radon-integrals
  - lem-haar-change-of-variables-under-inversion
  - lem-complex-haar-l1-and-l2-are-complete-and-cc-dense
  - def-left-and-right-regular-unitary-representations
  - thm-regular-representations-are-unitary-and-strongly-continuous
  - thm-the-modular-function-is-a-continuous-homomorphism
  - thm-nth-roots-exist
  - def-weak-containment-of-unitary-representations
  - thm-cauchy-schwarz-in-an-inner-product-space
proof_strategy: direct
axiom_use: >-
  Assume full AC. It supplies the rho-function and Radon quotient measure and
  discharges the choice hypotheses of the Weil, quotient, kernel, inversion,
  regular-representation and C_c-density suppliers. The proof makes only finite
  choices when forming its partition and choosing quotient lifts; it uses no
  measurable section, direct integral, countability hypothesis, or stronger
  choice principle.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix F, Proposition F.1.10 and complete proof (printed p. 426 / PDF p. 432); Appendix A, Proposition A.4.1 (printed p. 323 / PDF p. 329); Appendix B, Theorem B.1.4 (printed p. 347 / PDF p. 353). The local proof expands the compact-quotient-support approximation and the left/right intertwiner."
verification:
  audited: "2026-10-08"
---

## Statement

Assume AC. Let $G$ be a locally compact Hausdorff group and let $H\leq G$ be
closed. Fix left Haar measures on $G$ and $H$. Then the restriction of the left
regular representation of $G$ to $H$ is weakly contained in the left regular
representation of $H$:
$$\lambda_G|_H\prec\lambda_H,$$
where weak containment means uniform approximation of each diagonal coefficient
on every compact subset of $H$ by finite sums of diagonal coefficients.

## Facts & Assumptions

**Given:** AC, a locally compact Hausdorff group $G$, a closed subgroup $H$, and fixed left Haar measures $dx$ on $G$ and $dh$ on $H$.

[A1] AC is the choice-function principle ([[def-axiom-of-choice]]).

[F1] There is a positive continuous rho-function $r$ for $(G,H)$ and a Radon
measure $\mu$ on $G/H$ such that
$$\int_G u(y)r(y)\,dy=\int_{G/H}\int_H u(xh)\,dh\,d\mu(xH)$$
for every $u\in C_c(G)$; by real and imaginary parts it also holds for complex
$u$ ([[thm-existence-of-rho-functions-and-quasi-invariant-measures-on-g-mod-h]], [[thm-weil-quotient-integration-formula-with-rho-function]]).

[F2] The closed subspace $H$ is locally compact and Hausdorff; $G/H$ is locally compact Hausdorff and the quotient map $p:G\to G/H$ is open. Locally compact Hausdorff spaces have compact neighborhoods ([[def-subspace-topology-top]], [[thm-locally-compact-hausdorff-basics]], [[lem-closed-subgroup-quotient-averaging-and-compact-lifts]]).

[F3] The modular functions are positive continuous homomorphisms and
$$r(xh)=\frac{\Delta_H(h)}{\Delta_G(h)}r(x)$$
([[def-rho-function-for-a-closed-subgroup]], [[thm-the-modular-function-is-a-continuous-homomorphism]]).

[F4] Inversion changes left Haar integration by
$$\int_G u(y^{-1})\,dy=\int_G u(y)\Delta_G(y^{-1})\,dy$$
for nonnegative Borel $u$ and for complex Borel $u$ satisfying
$\int_G\Delta_G(y^{-1})|u(y)|\,dy<\infty$. The same identity applies
on $H$ with $\Delta_H$
([[lem-haar-change-of-variables-under-inversion]]).

[F5] A compactly supported continuous kernel on a product of locally compact Hausdorff spaces has continuous compactly supported partial integrals; the two positive Radon integrations commute, and the result extends to complex kernels ([[lem-compactly-supported-kernels-admit-commuting-radon-integrals]]).

[F6] On complex $L^2$ the left and right regular representations are strongly
continuous and unitary, with
$$\lambda_G(k)f(x)=f(k^{-1}x),\qquad R_H(k)b(h)=\Delta_H(k)^{1/2}b(hk).$$
Also $C_c(G)$ and $C_c(H)$ are the continuous complex functions of compact
support, are dense in their respective $L^2$ spaces, and those spaces are
complete ([[def-compact-support-c-c-and-c-zero-on-an-lch-space]],
[[def-left-and-right-regular-unitary-representations]],
[[thm-regular-representations-are-unitary-and-strongly-continuous]],
[[lem-complex-haar-l1-and-l2-are-complete-and-cc-dense]]).

[F7] For every $\xi\in L^2(G)$, compact $Q\subseteq H$ and $\epsilon>0$,
$\lambda_G|_H\prec\lambda_H$ means that there are finitely many
$\eta_j\in L^2(H)$ with
$$\sup_{k\in Q}\left|\langle\lambda_G(k)\xi,\xi\rangle-\sum_j\langle\lambda_H(k)\eta_j,\eta_j\rangle\right|<\epsilon$$
([[def-weak-containment-of-unitary-representations]]).

[F8] In an inner-product space, $|\langle u,v\rangle|\leq\|u\|\,\|v\|$ ([[thm-cauchy-schwarz-in-an-inner-product-space]]).

[F9] Continuous images of compact sets and closed subsets of compact spaces are compact; compact subsets of Hausdorff spaces are closed; open sets generate the Borel sigma-algebra, which is closed under finite unions, intersections and complements ([[thm-compactness-under-continuous-maps]], [[thm-closed-subspace-of-a-compact-space-is-compact]], [[thm-compact-subset-of-a-hausdorff-space-is-closed]], [[def-borel-sigma-algebra]]).

[F10] Every nonnegative real number has a nonnegative square root ([[thm-nth-roots-exist]]).

[F11] Every ambient open cover of a compact subspace has a finite subcover ([[lem-compactness-of-a-subspace-is-ambient]]).

## Proof

**Proof technique:** direct.

1.1 Fix $f\in C_c(G)$ and put $S=\operatorname{supp}f$. For $x\in G$ define $a_x\in C_c(H)$ by $a_x(h):=\left(\frac{\Delta_G((xh)^{-1})}{r(xh)}\right)^{1/2}f((xh)^{-1})$. Its support is contained in the compact set $x^{-1}S^{-1}\cap H$. For $k\in H$ put $B(xH,k):=\langle R_H(k)a_x,a_x\rangle$. If $t\in H$, then $a_{xt}(h)=a_x(th)$; changing $h$ by the left translation $t$ in the Haar integral shows $B(xtH,k)=B(xH,k)$. Thus $B$ is well defined on $(G/H)\times H$. [A1, F1, F3, F6, F9, construct]

2.1 The function $(x,k,h)\longmapsto\Delta_H(k)^{1/2}a_x(hk)\overline{a_x(h)}$ is continuous. At each $(x_0,k_0)\in G\times H$, choose compact neighborhoods $C\ni x_0$ and $K\ni k_0$ by [F2]. For $x\in C$ and $k\in K$, its support in $h$ lies in the fixed compact set $D:=C^{-1}S^{-1}\cap H$, because the second factor vanishes unless $xh\in S^{-1}$; compactness of $D$ follows from [F9]. The support of the restricted kernel on $C\times K\times H$ is contained in the compact product $C\times K\times D$, which is compact by [[thm-finite-products-of-compact-spaces]]. The compact-kernel result [F5] therefore makes the integral over $h$ continuous jointly in $(x,k)$ near $(x_0,k_0)$. The map $p\times\operatorname{id}_H$ is open on product-basis rectangles and surjective, hence is a quotient map; since $B$ is constant on its fibers, it descends continuously. If $q\notin T:=p(S^{-1})$, no representative $x$ has $xh\in S^{-1}$, so $a_x=0$ and $B(q,k)=0$. The set $T$ is compact by continuity of $p$ and [F9]. [F2, F5, F9, step 1.1, construct]

3.1 The coefficient $c_f(k):=\langle\lambda_G(k)f,f\rangle$ has the formula $c_f(k)=\int_{G/H}B(q,k)\,d\mu(q)$. Indeed, inversion [F4] gives $c_f(k)=\int_G\Delta_G(y^{-1})f((yk)^{-1})\overline{f(y^{-1})}\,dy$. The inversion input is in $C_c(G)$, so its weighted absolute integral is finite by continuity of $\Delta_G$ and compact finiteness of Haar measure. The resulting integrand is continuous and supported in the compact set $S^{-1}\cap S^{-1}k^{-1}$. Apply the Weil formula [F1] after dividing it by $r(y)$; for a complex integrand apply the real formula to its real and imaginary parts. At $y=xh$ the resulting integrand is $\frac{\Delta_G((xh)^{-1})}{r(xh)}f((xhk)^{-1})\overline{f((xh)^{-1})}$. The rho covariance [F3] gives $\Delta_H(k)^{1/2}a_x(hk)\overline{a_x(h)} =\frac{\Delta_G((xh)^{-1})}{r(xh)}f((xhk)^{-1})\overline{f((xh)^{-1})}$, which is exactly the inner product defining $B(xH,k)$. Since $B$ vanishes off compact $T$ and $\mu(T)<\infty$, this quotient integral is finite. [F1, F3, F4, F6, F9, step 1.1, step 2.1, algebra]

4.1 Fix a compact $Q\subseteq H$ and $\epsilon>0$. If $Q=\varnothing$, the approximation condition is vacuous, so take one zero vector. If $\mu(T)=0$, the coefficient formula is zero on $Q$, so again take one zero vector. Otherwise $\mu(T)>0$. Set $\delta:=\epsilon/(2\mu(T))>0$. For each $q_0\in T$, joint continuity of $B$ gives, at each $k_0\in Q$, neighborhoods $U_{k_0}$ of $q_0$ and $V_{k_0}$ of $k_0$ such that both $B(q',k)$ and $B(q'',k)$ lie within $\delta/2$ of $B(q_0,k_0)$ whenever $q',q''\in U_{k_0}\cap T$ and $k\in V_{k_0}$. By [F11], compactness of $Q$ gives finitely many $V_{k_0}$ covering it; intersect their corresponding $U_{k_0}$ to obtain a neighborhood $U_{q_0}$ on which $|B(q',k)-B(q'',k)|<\delta$ for all $q',q''\in U_{q_0}\cap T$ and $k\in Q$. By [F11], compactness of $T$ gives a finite subcover $U_1,\ldots,U_N$. The compact set $T$ is closed in the Hausdorff space $G/H$ by [F9]; form the disjoint Borel partition $E_j=(U_j\cap T)\setminus\bigcup_{i<j}U_i$, omitting empty pieces. It covers $T$, and each $E_j\subseteq U_j$. Choose $q_j\in E_j$ and a lift $x_j\in G$ with $p(x_j)=q_j$. Radon finiteness gives $\mu(E_j)<\infty$. The square root in $v_j:=\mu(E_j)^{1/2}a_{x_j}$ exists by [F10], and $\langle R_H(k)v_j,v_j\rangle=\mu(E_j)B(q_j,k)$. Since the $E_j$ partition $T$ and $B$ vanishes off $T$, $c_f(k)=\sum_j\int_{E_j}B(q,k)\,d\mu(q)$. Comparing each integral with $\mu(E_j)B(q_j,k)$ gives $\sup_{k\in Q}\left|c_f(k)-\sum_j\langle R_H(k)v_j,v_j\rangle\right|\leq\delta\mu(T)=\epsilon/2<\epsilon$. Thus every $C_c(G)$ diagonal coefficient is uniformly approximated on $Q$ by a finite sum of right-regular diagonal coefficients. [A1, F1, F7, F9, F10, F11, step 2.1, step 3.1, choose]

5.1 Define $J:C_c(H)\to C_c(H)$ by $(Jb)(h):=\Delta_H(h)^{-1/2}b(h^{-1})$. The function $Jb$ is continuous with compact support because inversion is a homeomorphism and $\Delta_H$ is positive continuous. Applying inversion [F4] to $u(h)=\Delta_H(h)|b(h)|^2$ gives $\|Jb\|_2^2=\int_H\Delta_H(h)^{-1}|b(h^{-1})|^2\,dh=\int_H|b(h)|^2\,dh=\|b\|_2^2$. The homomorphism law in [F3] gives $J^2b(h)=\Delta_H(h)^{-1/2}\Delta_H(h^{-1})^{-1/2}b(h)=b(h)$. Also $J\lambda_H(k)b(h)=\Delta_H(h)^{-1/2}b((hk)^{-1})$, while $R_H(k)Jb(h)=\Delta_H(k)^{1/2}\Delta_H(hk)^{-1/2}b((hk)^{-1})=\Delta_H(h)^{-1/2}b((hk)^{-1})$, so $J\lambda_H(k)=R_H(k)J$. By density and completeness in [F6], $J$ extends to an isometry on $L^2(H)$; $J^2=I$ makes it onto, hence unitary. Thus $\langle R_H(k)v_j,v_j\rangle=\langle\lambda_H(k)Jv_j,Jv_j\rangle$, and replacing every $v_j$ in step 4.1 by $Jv_j$ converts its sum to left-regular coefficients. [F3, F4, F6, step 4.1, algebra]

6.1 Now let $\xi\in L^2(G)$, compact $Q\subseteq H$, and $\epsilon>0$. Set $\alpha:=\min\{1,\epsilon/(8(\|\xi\|_2+1))\}>0$. By $C_c(G)$-density [F6] choose $f\in C_c(G)$ with $\|\xi-f\|_2<\alpha$. Then $(\|\xi\|_2+\|f\|_2)\|\xi-f\|_2\leq(2\|\xi\|_2+\alpha)\alpha<\epsilon/2$. For every $k\in H$, unitarity and Cauchy--Schwarz [F8] give $|\langle\lambda_G(k)\xi,\xi\rangle-\langle\lambda_G(k)f,f\rangle|\leq(\|\xi\|_2+\|f\|_2)\|\xi-f\|_2<\epsilon/2$. Apply steps 4.1 and 5.1 to $f$, $Q$, and tolerance $\epsilon/2$, and combine the two bounds. The resulting finite sum of $\lambda_H$ diagonal coefficients approximates the coefficient of $\xi$ within $\epsilon$ uniformly on $Q$. By [F7] this is $\lambda_G|_H\prec\lambda_H$. [F6, F7, F8, step 4.1, step 5.1, given] ∎
