---
id: lem-em-sphere-outgoing-dirichlet-to-neumann-map
kind: lemma
domain: mathematics
title: "Outgoing spherical trace and Dirichlet-to-Neumann map"
status: draft
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
dependency_level: 3
deps: [thm-sharp-trace-theorem-for-w-one-p, thm-smooth-up-to-the-boundary-density-on-smooth-domains, thm-interior-derivative-estimates-for-harmonic-functions, lem-em-helmholtz-boundary-representation, lem-em-outgoing-spherical-hankel-dtn-bounds, lem-em-spherical-harmonic-basis-and-addition, lem-em-prescribed-fractional-dirichlet-existence, lem-em-ball-poisson-series-boundary-convergence, cor-first-green-identity-on-a-bounded-c-one-domain, def-axiom-of-choice, thm-lp-trace-operator-on-a-bounded-c-one-domain, def-surface-integral-on-a-compact-c-one-hypersurface, cor-cauchy-schwarz-inequality-for-l-two, lem-l-two-with-the-integral-pairing-is-a-hilbert-space, thm-dominated-convergence, def-laplacian-of-a-c2-function, thm-algebra-of-derivatives]
dependency_roles:
  thm-sharp-trace-theorem-for-w-one-p: mathematical-premise
  thm-smooth-up-to-the-boundary-density-on-smooth-domains: mathematical-premise
  thm-interior-derivative-estimates-for-harmonic-functions: mathematical-premise
  lem-em-helmholtz-boundary-representation: mathematical-premise
  lem-em-outgoing-spherical-hankel-dtn-bounds: mathematical-premise
  lem-em-spherical-harmonic-basis-and-addition: mathematical-premise
  lem-em-prescribed-fractional-dirichlet-existence: mathematical-premise
  lem-em-ball-poisson-series-boundary-convergence: mathematical-premise
  cor-first-green-identity-on-a-bounded-c-one-domain: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-lp-trace-operator-on-a-bounded-c-one-domain: mathematical-premise
  def-surface-integral-on-a-compact-c-one-hypersurface: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  lem-l-two-with-the-integral-pairing-is-a-hilbert-space: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  def-laplacian-of-a-c2-function: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "NIST Digital Library of Mathematical Functions, Section 10.47 (spherical Bessel and Hankel functions) and Section 10.50 (Wronskians)"
      url: "https://dlmf.nist.gov/10.50"
      locator: "Spherical Hankel functions, their radial Helmholtz equation and Wronskian relations, used through the batch supplier lem-em-outgoing-spherical-hankel-dtn-bounds; the boundary-norm equivalence, the exterior realisation and the uniqueness argument are local."
    - title: "S. Dyatlov, Lecture notes for 18.155: distributions, elliptic regularity, and applications (MIT), Sections 9.1-9.2 and 15.1"
      url: "https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      locator: "Sections 9.1-9.2 (fundamental solutions and interior elliptic regularity) and 15.1 (elliptic regularity in Sobolev spaces) are contextual background, with no sphere DtN theorem attributed to those sections; the modal realisation and finite-local-energy statements are local."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Statement

Assume the Axiom of Choice inherited from the explicitly used trace and weak Dirichlet-solvability suppliers ([[def-axiom-of-choice]]). Let $k>0$ and $R>0$. Use the sphere-normalised basis $Y^R_{lm}(Rn):=R^{-1}Y_{lm}(n)$ on $S_R$, where $Y_{lm}$ is the complete normalised unit-sphere basis of the spherical-harmonic lemma ([[lem-em-spherical-harmonic-basis-and-addition]]) and the coefficients $t_l$ are those of the outgoing radial-function lemma ([[lem-em-outgoing-spherical-hankel-dtn-bounds]]). The map

$$T_Rf=\sum_{l,m}t_l\,f_{lm}Y^R_{lm},\qquad f\in H^{1/2}(S_R),$$

is a bounded linear operator $H^{1/2}(S_R)\to H^{-1/2}(S_R)$ with

$$\operatorname{Re}\langle T_Rf,f\rangle\le0,\qquad\operatorname{Im}\langle T_Rf,f\rangle=\sum_{l,m}(\operatorname{Im}t_l)|f_{lm}|^2>0\quad(f\ne0).$$

It is precisely the outgoing scalar Helmholtz normal derivative at $r=R$: for every $f\in H^{1/2}(S_R)$ the function $u(rn)=\sum_{l,m}f_{lm}h_l(kr)/h_l(kR)\,R^{-1}Y_{lm}(n)$ for $r\ge R$ is the unique outgoing finite-local-energy exterior solution with trace $f$ on $S_R$ and normal derivative $T_Rf$ in the weak trace sense; it is smooth away from the sphere, and for smooth $f$ it satisfies the ordinary Sommerfeld condition. No uniform pointwise outgoing condition is asserted for arbitrary rough traces; the outgoing condition there is its modal/weak version. Here finite-local-energy means membership in $H^1(\{R<|x|<R_1\})$ for every finite $R_1>R$, with the $H^{1/2}$ trace on $S_R$; no global $H^1$ or global $L^2$ condition at infinity is imposed. The outgoing modal class consists of the displayed outgoing $h_l$ radial factors with no incoming partners; for rough traces this modal class is the definition, rather than a pointwise Sommerfeld assertion. Here the boundary Sobolev spaces are their complex versions (or complexifications of the real trace spaces), $f_{lm}=\int_{S_R}f\overline{Y^R_{lm}}\,d\sigma_R$, and the DtN dual pairing is linear in its first argument and conjugate-linear in its second.

## Facts & Assumptions
**Given:** The Axiom of Choice; $k>0$, $R>0$; the unit-sphere harmonics $Y_{lm}$ and their solid homogeneous harmonic extensions; the sphere-normalised basis $Y^R_{lm}(Rn)=R^{-1}Y_{lm}(n)$ with $\sigma_R$ the surface measure on $S_R$ ([[def-surface-integral-on-a-compact-c-one-hypersurface]]); the coefficients $t_l$ of [[lem-em-outgoing-spherical-hankel-dtn-bounds]] with $-(l+1)/R\le\operatorname{Re}t_l\le-1/R$ and $0<\operatorname{Im}t_l\le k$; and the data $f\in H^{1/2}(S_R)$.

[F1] **Traces and weak solvability.** The trace operator on $W^{1,2}$ of a bounded $C^1$ domain is bounded and onto $H^{1/2}$ of the boundary, and for prescribed fractional data there is a unique harmonic $H^1$ extension whose trace is the data, with $\|u\|_{H^1}\le C\|f\|_{H^{1/2}}$ ([[lem-em-prescribed-fractional-dirichlet-existence]], [[thm-sharp-trace-theorem-for-w-one-p]], [[thm-lp-trace-operator-on-a-bounded-c-one-domain]], [[def-axiom-of-choice]]). Smooth ambient restrictions are dense in $H^1(B_R)$ by [[thm-smooth-up-to-the-boundary-density-on-smooth-domains]].

[F2] **Spherical harmonics and ball expansion.** The $Y_{lm}$ form a complete orthonormal basis of $L^2(S^2)$, with solid homogeneous harmonic extensions; the ball Poisson series has interior convergence with all derivatives, $L^2$ boundary limits and uniqueness ([[lem-em-spherical-harmonic-basis-and-addition]], [[lem-em-ball-poisson-series-boundary-convergence]]). Real $L^2$ (and its complexification) is a Hilbert space with the integral pairing ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]).

[F3] **First Green identity and Dirichlet energy.** For $C^2$ functions, $\int_\Omega|\nabla u|^2=-\int_\Omega u\Delta u+\int_{\partial\Omega}u\partial_\nu u$ on a bounded $C^1$ domain ([[cor-first-green-identity-on-a-bounded-c-one-domain]]); the Laplacian is the Euclidean one ([[def-laplacian-of-a-c2-function]]).

[F4] **Hankel functions.** The explicit finite-polynomial functions $h_l$ solve the radial Helmholtz equation, never vanish for positive real arguments, obey $\operatorname{Im}(\overline{h_l}h_l')=z^{-2}$, and have $-(l+1)/r\le\operatorname{Re}(kh_l'(kr)/h_l(kr))\le-1/r$ and $0<\operatorname{Im}(kh_l'(kr)/h_l(kr))\le k$ ([[lem-em-outgoing-spherical-hankel-dtn-bounds]]). In particular $F_l(z):=z^2|h_l(z)|^2$ is nonincreasing, because its logarithmic derivative is $2/z+2\operatorname{Re}(h_l'/h_l)\le0$.

[F5] **Bounds.** Cauchy-Schwarz for $L^2$ ([[cor-cauchy-schwarz-inequality-for-l-two]]), dominated convergence ([[thm-dominated-convergence]]) and the algebra of derivatives ([[thm-algebra-of-derivatives]]).

[F6] **Harmonic derivative estimate.** Under Countable Choice, for a harmonic $v$ and $B_\rho(x)\Subset\Omega$, $|D^\alpha v(x)|\le C_{3,\alpha}\rho^{-3-|\alpha|}\int_{B_\rho(x)}|v|$ ([[thm-interior-derivative-estimates-for-harmonic-functions]]). The smooth modal branch of [[lem-em-helmholtz-boundary-representation]] gives uniform $r^{-1}$ amplitude and the ordinary uniform Sommerfeld residual for smooth angular traces, using the same explicit outgoing radial factors.




## Proof

**Proof technique:** direct.

1.1 For finite harmonic data the harmonic ball extension $v(rn)=\sum(r/R)^lf_{lm}R^{-1}Y_{lm}(n)$ has, by [F3] and the orthonormality of the solid harmonics, Dirichlet energy $\int_{B_R}|\nabla v|^2=\sum_{l,m}(l/R)|f_{lm}|^2$ and $L^2$ norm $\sum_{l,m}R|f_{lm}|^2/(2l+3)$; hence its $H^1$ norm squared is $\sum_{l,m}|f_{lm}|^2(l/R+R/(2l+3))$, comparable to $\sum_{l,m}(l+1)|f_{lm}|^2$; the sharp trace bound of [F1] gives $\|f\|_{H^{1/2}}\le C\|v\|_{H^1}$, and the weak harmonic-solver bound gives the reverse inequality $\|v\|_{H^1}\le C\|f\|_{H^{1/2}}$, since this finite harmonic polynomial is the unique weak solution with that trace. To extend the norm equivalence, smooth data are dense in $H^{1/2}$: lift an arbitrary datum by [F1], approximate its lift in $H^1$ by the smooth restrictions of [F1], and apply the bounded sharp trace. For a smooth sphere datum $g$, the rotation-generator integration-by-parts calculation in [F6] gives $|g_{lm}|\le\|\Lambda^pg\|_2[l(l+1)]^{-p}$ for $l\ge1$ and any $p$, with $\Lambda Y_{lm}=-l(l+1)Y_{lm}$. Hence its harmonic partial sums have Cauchy ball extensions in $H^1$ by the finite energy formula just computed. Their traces converge in $H^{1/2}$ by the sharp trace, and in $L^2$ to $g$ by completeness [F2], so the trace limit is $g$. Thus finite harmonic data are dense in $H^{1/2}$. The two equivalent norms on finite data consequently have the same completion; weighted coefficient convergence and $L^2$ completeness identify that completion with $\sum_{l,m}(l+1)|f_{lm}|^2<\infty$ for the actual coefficients of $f$. This proves the claimed norm equivalence for every $f\in H^{1/2}(S_R)$. [given, F1, F2, F3, F6, algebra]

2.1 Define $T_Rf=\sum_{l,m}t_lf_{lm}Y^R_{lm}$ and pair it with $f'\in H^{1/2}(S_R)$ by $\langle T_Rf,f'\rangle=\sum_{l,m}t_lf_{lm}\overline{f'_{lm}}$; the bounds $|t_l|\le(l+1)/R+k$ of [F4] and Cauchy-Schwarz [F5] give $|\langle T_Rf,f'\rangle|\le C(R,k)\|f\|_{H^{1/2}}\|f'\|_{H^{1/2}}$ with the weight $(l+1)$ supplied by step 1.1, so $T_R$ is a bounded operator into $H^{-1/2}(S_R)$. [step 1.1, given, F4, F5, algebra]

2.2 Exterior realisation and convergence away from the sphere. For $l\ge1$, establish the needed positive-coefficient identity locally from the explicit formula of [F4]. Put $y=zh_l$ and $L=l(l+1)$, so $y''+(1-Lz^{-2})y=0$ and $F_l=|y|^2$. Product differentiation gives $F_l'''+4(1-Lz^{-2})F_l'+4Lz^{-3}F_l=0$. The displayed finite polynomial formula for $h_l$ shows that $F_l$ is an even polynomial in $z^{-1}$ (the odd cross terms cancel in conjugate pairs), with constant term $a_0=1$. Substitution of $F_l=\sum_{j=0}^la_jz^{-2j}$ gives $a_{j+1}=(2j+1)[L-j(j+1)]a_j/[2(j+1)]$, so $a_j=(2j)!(l+j)!/[2^{2j}(j!)^2(l-j)!]>0$ for $0\le j\le l$. Thus the coefficients satisfy $a_{j-1}/a_j=2j/[(2j-1)(l+j)(l-j+1)]\le2/[l(l-j+1)]$. Thus $a_{l-d}/a_l\le(2/l)^d/d!$ and $a_lz^{-2l}\le F_l(z)\le a_lz^{-2l}\exp(2z^2/l)$. For $R+\delta\le r\le R_1$ this gives $|h_l(kr)/h_l(kR)|\le(R/r)^{l+1}\exp(k^2R_1^2/l)$, a geometric bound in $l$. The logarithmic-derivative bound $|kh_l'(kr)/h_l(kr)|\le(l+1)/r+k$, followed by induction in the radial ODE, bounds each fixed radial derivative by that geometric factor times a polynomial in $l$ on the same annulus. For angular derivatives, write the solid harmonic as $P_{lm}(x)=|x|^lY_{lm}(x/|x|)$. The addition diagonal gives $\|Y_{lm}\|_\infty\le\sqrt{(2l+1)/(4\pi)}$; on a ball of radius $1/[2(l+1)]$ about a unit vector, $|P_{lm}|\le(1+1/[2(l+1)])^l\sqrt{(2l+1)/(4\pi)}\le e^{1/2}\sqrt{(2l+1)/(4\pi)}$. Applying [F6] to this harmonic polynomial gives $|D^\alpha P_{lm}|\le C_\alpha(l+1)^{|\alpha|+1/2}$ on $S^2$. Chain rules in any fixed finite sphere atlas therefore give polynomial bounds for all fixed angular derivatives of $Y_{lm}$. Combining these bounds with $\sum_{l,m}(l+1)|f_{lm}|^2<\infty$ from step 1.1 proves absolute uniform convergence of the series defining $u$ and of every fixed derivative on the closed annulus, by Cauchy-Schwarz against a geometric sequence. Termwise differentiation is justified by the coordinate FTC and uniform convergence of the derivative series. The radial ODE and angular harmonic identity give $(\Delta+k^2)u=0$ there. [step 1.1, given, F2, F4, F5, F6, algebra]


3.1 Signs: $\operatorname{Re}\langle T_Rf,f\rangle=\sum\operatorname{Re}(t_l)|f_{lm}|^2\le0$ and $\operatorname{Im}\langle T_Rf,f\rangle=\sum(\operatorname{Im}t_l)|f_{lm}|^2>0$ for $f\ne0$, by $-(l+1)/R\le\operatorname{Re}t_l\le-1/R$ and $0<\operatorname{Im}t_l$ of [F4] together with the completeness of the basis (a nonzero $f$ has some nonzero coefficient). [step 2.1, given, F4, F2, algebra]

3.2 Finite local energy, trace and normal derivative. Let $u_N$ be a finite harmonic sum. Orthogonality and $|h_l(kr)/h_l(kR)|\le R/r$ give $\|u_N\|_{L^2(R<|x|<R_1)}^2\le(R_1-R)\sum_{l,m}|f_{lm}|^2$. Apply the complex Green identity (obtained by applying [F3] to both real parts and both mixed real/imaginary pairs) on the annulus. The outer boundary real term is nonpositive since the radial logarithmic derivative at $R_1$ has negative real part. The inner outward normal is $-e_r$, so the inner real term is $-\sum\operatorname{Re}t_l|f_{lm}|^2\le\sum(l+1)|f_{lm}|^2/R$. Consequently $\|\nabla u_N\|_2^2\le k^2(R_1-R)\sum|f_{lm}|^2+R^{-1}\sum(l+1)|f_{lm}|^2$. The same estimate for differences of finite sums proves convergence in $H^1$ on every finite annulus, to the smooth interior limit of step 2.2. Boundedness of the trace operator [F1] and step 1.1 identify the inner trace as $f$. The finite sums have increasing-radial derivative $T_Rf_N$ on $S_R$; the Green pairing against any $H^1$ test passes to the limit by the $H^1$ convergence and the bounded pairing in step 2.1, identifying the increasing-radial weak normal derivative as $T_Rf$. Thus the claimed finite-local-energy and weak-trace assertions hold for every $f$. [step 1.1, step 2.1, step 2.2, F1, F2, F3, F4, F5, algebra]


4.1 Uniqueness: in the outgoing modal class defined in the Statement every degree-$l$ radial coefficient is an $h_l(kr)$ multiple. Since $h_l(kR)\ne0$ by [F4], the prescribed trace fixes that multiple to $f_{lm}/h_l(kR)$ in the sphere-normalised basis; harmonic completeness [F2] then fixes the function on every exterior sphere, and the l=0 mode $e^{ikr}/r$ shows why no global $L^2$ or $H^1$ condition at infinity is imposed (its global energy integrals diverge). [step 2.2, step 3.2, F4, F2, algebra]

5.1 For complex boundary data apply the real prescribed-trace and harmonic solver of [F1] to the real and imaginary parts and combine; the squared boundary norm is the sum of the two real energy norms and the pairing is linear-conjugate-linear as stated, For smooth $f$, the smooth modal branch of [F6], with angular coefficients $f_{lm}/R$ and sphere radius $R$, gives the ordinary uniform Sommerfeld condition for exactly this series. This completes the identification of $T_R$ with the outgoing DtN map and its properties. [step 1.1, step 3.1, step 3.2, F1, F5, F6, algebra] ∎
