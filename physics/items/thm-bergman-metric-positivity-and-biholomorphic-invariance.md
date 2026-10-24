---
id: thm-bergman-metric-positivity-and-biholomorphic-invariance
kind: theorem
title: The Bergman metric is positive definite on bounded domains and biholomorphically invariant
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 7
proof_strategy: direct
deps:
  - cor-holomorphic-functions-in-several-variables-are-smooth
  - def-bergman-metric-bounded-domain
  - def-bergman-space-and-kernel
  - def-ck-and-multi-index-notation-in-several-variables
  - def-countable-choice
  - def-hilbert-orthogonal-projection
  - def-holomorphic-function-in-several-complex-variables
  - def-holomorphic-map-and-complex-jacobian
  - def-levi-form-and-strict-plurisubharmonicity
  - def-wirtinger-operators-in-several-complex-variables
  - lem-bergman-evaluation-bound-on-compact-subsets
  - lem-bergman-kernel-smoothness-and-positive-diagonal
  - lem-complex-hessian-domination-at-a-common-minimum
  - lem-mean-value-inequality-for-a-differentiable-banach-valued-curve
  - thm-complex-plane-is-complete
  - rem-complex-euclidean-space-dictionary
  - thm-bergman-basis-expansion-and-closedness
  - thm-bergman-kernel-biholomorphic-transformation
  - thm-cauchy-schwarz-in-an-inner-product-space
  - thm-chain-rule-for-holomorphic-maps-in-several-variables
  - thm-chain-rule-for-total-derivatives
  - thm-clairaut-schwarz-mixed-partials
  - thm-logarithm-derivative-and-integral
  - thm-orthogonal-decomposition-by-a-closed-subspace
  - thm-riesz-representation-for-hilbert-space
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: Zbigniew Błocki, The Bergman Kernel and Metric (lecture notes)
      url: https://gamma.im.uj.edu.pl/~blocki/publ/ln/bergman.pdf
      locator: >-
        §1, printed pp. 4–5, Theorem 1.1 with its full proof: the diagonal
        formula, the orthonormal-system selection with the reduced derivative
        functional, and the supremum identity
        $B_\Omega(z;X)=K_\Omega(z,z)^{-1/2}\sup\{|f_X(z)|:\|f\|\le1,f(z)=0\}$;
        printed p. 5: biholomorphic invariance
        $B_\Omega(z;X)=B_D(F(z);F'(z)X)$. The proof below replaces the
        orthonormal-system selection by the Riesz representer of the derivative
        functional on the closed subspace $\{f(z)=0\}$; the explicit
        second-order computation of the reduced kernel is local.
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]) and let $m\ge1$. Let $\Omega\subseteq\mathbb C^m$ be a bounded domain with Bergman kernel $K_\Omega$, Bergman metric form $g_\Omega$, and quadratic form $B^2_\Omega(z;X)=g_\Omega(z)(X,X)$ as in [[def-bergman-metric-bounded-domain]], and use the one-based coordinate aliases of [[def-levi-form-and-strict-plurisubharmonicity]].

1. For every $z\in\Omega$ and every $X\in\mathbb C^m\setminus\{0\}$,
   $$B^2_\Omega(z;X)=\frac{1}{K_\Omega(z,z)}\sup\bigl\{|\partial_Xf(z)|^2:\ f\in A^2(\Omega),\ \|f\|_{L^2}\le1,\ f(z)=0\bigr\},$$
   where $\partial_Xf=\sum_{j=1}^mX_j\frac{\partial f}{\partial z_j}$. The supremum is finite, positive, and attained. In particular $B^2_\Omega(z;X)>0$, so the Hermitian form $g_\Omega(z)$ is positive definite.

2. If $F:\Omega\to\Omega'$ is a biholomorphism of bounded domains, then for all $z\in\Omega$ and all $X,Y\in\mathbb C^m$,
   $$g_\Omega(z)(X,Y)=g_{\Omega'}(F(z))\bigl(DF(z)X,\,DF(z)Y\bigr).$$
   Equivalently, $B^2_\Omega(z;X)=B^2_{\Omega'}(F(z);DF(z)X)$ for every $X$.

## Facts & Assumptions

[A1] The only choice principle assumed is $\mathrm{AC}_\omega$ ([[def-countable-choice]]): it enters through the Bergman Hilbert/Riesz structure and the orthogonal projection. No full Axiom of Choice is used.

[F1] For a nonempty open $\Omega\subseteq\mathbb C^m$, $A^2(\Omega)$ is a closed complex Hilbert subspace of $L^2(\Omega)$ for the first-variable-linear pairing, each class has a unique holomorphic representative, point evaluation has a unique Riesz section $k_w=K_\Omega(\cdot,w)$ with $f(w)=\langle f,k_w\rangle$, and $K_\Omega(z,w)=\langle k_w,k_z\rangle=\overline{K_\Omega(w,z)}$ ([[def-bergman-space-and-kernel]], [[thm-bergman-basis-expansion-and-closedness]]).

[F2] For a bounded domain $\Omega$, $K_\Omega\in C^\infty(\Omega\times\Omega)$, the diagonal is smooth with $K_\Omega(z,z)\ge1/\lambda_\Omega(\Omega)>0$, and $K_\Omega$ is holomorphic in its first and antiholomorphic in its second variable ([[lem-bergman-kernel-smoothness-and-positive-diagonal]], [[thm-bergman-basis-expansion-and-closedness]]).

[F3] For every nonempty compact $K\subseteq\Omega$ there are finite constants with $\sup_K|f|\le C_K\|f\|_2$ and $\sup_K|\partial^\alpha_zf|\le C_{K,\alpha}\|f\|_2$ for every multi-index $|\alpha|\le1$ ([[lem-bergman-evaluation-bound-on-compact-subsets]]).

[F4] Every bounded linear functional on a real or complex Hilbert space has a unique representing vector, isometrically; in the first-variable-linear convention $f(x)=\langle x,y\rangle$ ([[thm-riesz-representation-for-hilbert-space]]).

[F5] A closed linear subspace $M$ of a Hilbert space satisfies $H=M\oplus M^\perp$ uniquely, and the orthogonal projection onto $M$ is defined by that decomposition ([[thm-orthogonal-decomposition-by-a-closed-subspace]], [[def-hilbert-orthogonal-projection]]).

[F6] Cauchy–Schwarz: $|\langle x,y\rangle|\le\|x\|\|y\|$, with equality exactly for linearly dependent pairs ([[thm-cauchy-schwarz-in-an-inner-product-space]]).

[F7] If real $C^2$ functions satisfy $u\ge v$ near $a$ with $u(a)=v(a)$, then $\mathcal L_u(a;X)\ge\mathcal L_v(a;X)$ for every $X$ ([[lem-complex-hessian-domination-at-a-common-minimum]]).

[F8] The Bergman metric form is the Levi form of $u_\Omega=\log K_\Omega(z,z)$, and $B^2_\Omega(z;X)=\mathcal L_{u_\Omega}(z;X)=\sum_{j,k=1}^m\frac{\partial^2u_\Omega}{\partial z_j\partial\overline z_k}(z)X_j\overline{X_k}$ for the one-based coordinate aliases ([[def-bergman-metric-bounded-domain]], [[def-levi-form-and-strict-plurisubharmonicity]]).

[F9] Wirtinger operators are $\partial_{z_j}=\tfrac12(\partial_{x_j}-i\partial_{y_j})$, $\partial_{\overline z_j}=\tfrac12(\partial_{x_j}+i\partial_{y_j})$, for holomorphic functions the real-coordinate derivative identities in [F12] give $\partial_{\overline z_j}f=0$, real mixed partials commute by [[thm-clairaut-schwarz-mixed-partials]], $\log'(x)=1/x$ for $x>0$ by [[thm-logarithm-derivative-and-integral]], and the product and chain rules hold for these first-order operators ([[def-wirtinger-operators-in-several-complex-variables]], [[rem-complex-euclidean-space-dictionary]], [[def-ck-and-multi-index-notation-in-several-variables]], [[thm-chain-rule-for-total-derivatives]]).

[F10] A holomorphic map is complex differentiable with complex-linear derivative $DF(z)$, the chain rule holds ([[def-holomorphic-function-in-several-complex-variables]], [[def-holomorphic-map-and-complex-jacobian]], [[thm-chain-rule-for-holomorphic-maps-in-several-variables]]).

[F11] A biholomorphism $F:\Omega\to\Omega'$ satisfies $K_\Omega(z,w)=J_F(z)K_{\Omega'}(F(z),F(w))\overline{J_F(w)}$ with $J_F=\det_{\mathbb C}DF\ne0$, and $U_Fg=(g\circ F)J_F$ is a unitary isomorphism $A^2(\Omega')\to A^2(\Omega)$ ([[thm-bergman-kernel-biholomorphic-transformation]]).

[F12] A holomorphic function on an open set is of class $C^n$ in the real coordinates for every natural $n$, hence smooth ([[cor-holomorphic-functions-in-several-variables-are-smooth]]).

[F13] The complex plane is complete, hence Banach for its modulus norm. A continuous differentiable complex-valued curve whose derivative is bounded by $C$ changes by at most $C$ times the parameter distance ([[thm-complex-plane-is-complete]], [[lem-mean-value-inequality-for-a-differentiable-banach-valued-curve]]).

## Proof

**Proof technique:** direct, using the reduced Riesz kernel of the subspace $\{f(z)=0\}$ and a second-order comparison with $\log K_\Omega$.

**Given:** $\mathrm{AC}_\omega$, the bounded domain $\Omega$, a point $z\in\Omega$, and a direction $X\in\mathbb C^m$.

1.1 Put $M:=K_\Omega(z,z)$. By [F2], $M>0$, so $k_z\ne0$ and the subspace $H':=\{f\in A^2(\Omega):f(z)=0\}=\{f:\langle f,k_z\rangle=0\}=(\mathbb Ck_z)^\perp$ is closed; by [F5], $A^2(\Omega)=\mathbb Ck_z\oplus H'$. By [F3] with the singleton $K=\{\zeta\}$ the evaluation $\varepsilon_\zeta(f):=f(\zeta)$ is bounded on $A^2(\Omega)$ and hence on $H'$ for every $\zeta\in\Omega$; [F4] gives a unique $h_\zeta\in H'$ with $f(\zeta)=\langle f,h_\zeta\rangle$ for all $f\in H'$. Define $E(\zeta):=\|h_\zeta\|_2^2$. [A1, F1, F2, F3, F4, F5]

1.2 By [F5] the projection of $k_\zeta$ onto $H'$ is $h_\zeta=k_\zeta-\frac{\langle k_\zeta,k_z\rangle}{M}k_z$, and $\langle k_\zeta,k_z\rangle=K_\Omega(z,\zeta)$ by [F1]. Hence, pointwise in $\eta$, $h_\zeta(\eta)=K_\Omega(\eta,\zeta)-\frac{K_\Omega(z,\zeta)}{M}K_\Omega(\eta,z)$, and reproducing on $h_\zeta$ gives $$E(\zeta)=\|h_\zeta\|_2^2=K_\Omega(\zeta,\zeta)-\frac{|K_\Omega(z,\zeta)|^2}{M}.$$ By [F2] the function $E$ is $C^\infty$ on $\Omega$; by [F6] it satisfies $E(\zeta)\ge0$ with $E(z)=0$, and $E(\zeta)>0$ for $\zeta\ne z$, since then some coordinate satisfies $\zeta_j\ne z_j$ and the bounded function $\eta\mapsto\eta_j-z_j$ lies in $H'$ with nonzero value at $\zeta$. [F1, F2, F5, F6, algebra]

1.3 Compute the Levi form of $E$. Write $D(\zeta):=K_\Omega(\zeta,\zeta)$ and $A(\zeta):=K_\Omega(\zeta,z)$, so that $E=D-\frac{|A|^2}{M}$, $D(z)=A(z)=M$ and $|A(z)|^2=M^2$, and $D$ is $C^\infty$ near $z$. Set $a_j:=\partial_jA(z)$ and $c_{jk}:=\partial_j\partial_{\overline k}D(z)$. Since $K_\Omega$ is holomorphic in the first and antiholomorphic in the second variable [F2, F9], the Wirtinger derivatives $\partial_{\overline\zeta}K_\Omega$ and $\partial_\eta K_\Omega$ vanish identically, and the product and chain rules give $\partial_jD(z)=a_j$, $\partial_{\overline k}D(z)=\overline{a_k}$, $\partial_j|A|^2(z)=a_jM$, $\partial_{\overline k}|A|^2(z)=M\overline{a_k}$, and $\partial_j\partial_{\overline k}|A|^2(z)=a_j\overline{a_k}$; consequently $\partial_jE(z)=\partial_{\overline j}E(z)=0$, $\partial_j\partial_kE(z)=\partial_{\overline j}\partial_{\overline k}E(z)=0$, and $$\partial_j\partial_{\overline k}E(z)=c_{jk}-\frac{a_j\overline{a_k}}{M}.$$ Since $D(z)=M>0$, the same rules applied to $\log D$ give $\partial_j\partial_{\overline k}\log D(z)=\frac{c_{jk}}{M}-\frac{a_j\overline{a_k}}{M^2}$, so $M\,\partial_j\partial_{\overline k}\log D(z)=\partial_j\partial_{\overline k}E(z)$; summing against $X_j\overline{X_k}$ and using [F8] yields $$\mathcal L_E(z;X)=M\,\mathcal L_{\log D}(z;X)=M\,B^2_\Omega(z;X).$$ [F2, F8, F9, algebra]

2.1 Let $f\in H'$ with $\|f\|_2\le1$. By [F6] and the reproducing identity of step 1.1, $|f(\zeta)|^2=|\langle f,h_\zeta\rangle|^2\le\|f\|_2^2E(\zeta)\le E(\zeta)$ for every $\zeta\in\Omega$, with equality at $\zeta=z$. Both $E$ and $|f|^2$ are $C^2$: $E$ was shown $C^\infty$ in step 1.2, and $f$ is holomorphic, hence smooth in the real coordinates by [F12]. So [F7] gives $\mathcal L_E(z;X)\ge\mathcal L_{|f|^2}(z;X)=|\partial_Xf(z)|^2$; hence $\sup\{|\partial_Xf(z)|^2:f\in H',\|f\|_2\le1\}\le\mathcal L_E(z;X)$. [A1, F5, F6, F7, F8, F12, step 1.2]

2.2 Fix $X\ne0$ and $\delta>0$ such that $z+\tau X\in\Omega$ for real $|\tau|<\delta$. Set $H(\tau,\sigma):=h_{z+\tau X}(z+\sigma X)$. The explicit formula in step 1.2 makes $H$ smooth, with $H(\tau,0)=H(0,\sigma)=0$. Differentiating that formula gives $\partial_\tau\partial_\sigma H(0,0)=\sum_{j,k}X_j\overline{X_k}(c_{jk}-a_j\overline{a_k}/M)=b$, where $b:=\mathcal L_E(z;X)$ by step 1.3. Put $R(\tau,\sigma):=H(\tau,\sigma)-b\tau\sigma$. For every $\varepsilon>0$, continuity makes $|\partial_\tau\partial_\sigma R|<\varepsilon$ on a small rectangle about $(0,0)$. Since $\partial_\sigma R(0,\sigma)=0$ and $R(\tau,0)=0$, applying [F13] first to $\tau\mapsto\partial_\sigma R(\tau,\sigma)$ and then to $\sigma\mapsto R(\tau,\sigma)$ yields $|R(\tau,\sigma)|\le\varepsilon|\tau\sigma|$. Thus $H(\tau,\sigma)/(\tau\sigma)\to b$ as both nonzero real parameters tend to $0$, and in particular $E(z+\tau X)/\tau^2=H(\tau,\tau)/\tau^2\to b$. [F2, F9, F13, step 1.2, step 1.3]

3.1 Assume $X\ne0$. The function $f_0(\eta):=\langle\eta-z,X\rangle=\sum_{j=1}^m(\eta_j-z_j)\overline{X_j}$ is holomorphic on $\Omega$ and bounded there because $\Omega$ is bounded, so $f_0\in H'$; also $\partial_Xf_0(z)=\sum_{j=1}^mX_j\overline{X_j}=|X|^2$. Applying step 2.1 to $f_0/\|f_0\|_2$ gives $\mathcal L_E(z;X)\ge|X|^4/\|f_0\|_2^2>0$ for $X\ne0$. Hence by step 1.3, $B^2_\Omega(z;X)=\mathcal L_E(z;X)/M>0$: the quadratic form of $g_\Omega(z)$ is positive on every nonzero vector, so the Hermitian form is positive definite. [A1, F4, F8, step 2.1, step 1.3]

4.1 For real $\tau\ne0$ put $g_\tau:=h_{z+\tau X}/\tau\in H'$. Reproduction gives $\langle g_\tau,g_\sigma\rangle=H(\tau,\sigma)/(\tau\sigma)$, so step 2.2 implies $\|g_\tau-g_\sigma\|_2^2\to0$ as $\tau,\sigma\to0$. Choose, for example, $\tau_n=\delta/(n+2)$. The closed subspace $H'$ is complete by [F1, F5], so $g_{\tau_n}\to g\in H'$; the same Cauchy estimate gives $g_\tau\to g$ for all real $\tau\to0$. By step 2.2, $\|g\|_2^2=b$. For every $f\in H'$, continuity of the pairing and holomorphic differentiability give $\langle f,g\rangle=\lim_{\tau\to0}f(z+\tau X)/\tau=\partial_Xf(z)$. Hence $g$ represents the derivative functional, and Cauchy–Schwarz gives $\sup_{f\in H',\|f\|_2\le1}|\partial_Xf(z)|^2=\|g\|_2^2=b$, attained at $g/\|g\|_2$ because $b>0$ by step 3.1. [A1, F1, F4, F5, F6, F10, step 1.1, step 3.1, step 2.2]

5.1 Combining steps 1.3, 2.1 and 4.1 yields $\sup\{|\partial_Xf(z)|^2:f\in A^2(\Omega),\|f\|_2\le1,f(z)=0\}=\mathcal L_E(z;X)=K_\Omega(z,z)B^2_\Omega(z;X)$, which is the displayed formula, with the supremum attained; step 3.1 gives its strict positivity for $X\ne0$. This proves the two assertions of part 1. [step 2.1, step 1.3, step 3.1, step 4.1]

6.1 For part 2, let $F:\Omega\to\Omega'$ be a biholomorphism, $J:=J_F=\det_{\mathbb C}DF$, and let $U_Fg=(g\circ F)J$ be the unitary isomorphism of [F11], so that $U_F$ maps the closed unit ball of $A^2(\Omega')$ onto that of $A^2(\Omega)$ and $\{g:g(F(z))=0\}$ onto $H'=\{f:f(z)=0\}$ (because $J(z)\ne0$). If $f=U_Fg$, then the product rule and [F10] give $\partial_Xf(z)=J(z)\,\partial_{DF(z)X}g(F(z))+g(F(z))\,\partial_XJ(z)$, and for $f\in H'$ the second term vanishes; hence the supremum identity of part 1 applied on both domains, together with the diagonal kernel law $K_\Omega(z,z)=|J(z)|^2K_{\Omega'}(F(z),F(z))$ from [F11], gives $$K_\Omega(z,z)B^2_\Omega(z;X)=|J(z)|^2K_{\Omega'}(F(z),F(z))B^2_{\Omega'}(F(z);DF(z)X).$$ Since $K_\Omega(z,z)>0$ and $|J(z)|^2K_{\Omega'}(F(z),F(z))=K_\Omega(z,z)$, dividing by the positive number $K_\Omega(z,z)$ yields $B^2_\Omega(z;X)=B^2_{\Omega'}(F(z);DF(z)X)$ for every nonzero $X$; when $X=0$, both quadratic forms are zero by definition. [A1, F8, F10, F11, step 5.1]

7.1 The quadratic forms of the Hermitian forms agree under the complex-linear map $DF(z)$. For all $X,Y$, applying step 6.1 to the four directions $X+Y,X-Y,X+iY,X-iY$ and using complex linearity of $DF(z)$ plus the polarization identity $g(X,Y)=\tfrac14\bigl(q(X+Y)-q(X-Y)+iq(X+iY)-iq(X-iY)\bigr)$ for the quadratic form $q(Z)=g(Z,Z)$ gives $g_\Omega(z)(X,Y)=g_{\Omega'}(F(z))(DF(z)X,DF(z)Y)$. [F10, step 6.1] ∎

## Remarks

The supremum in part 1 is taken over all of $A^2(\Omega)$ with the single constraint $f(z)=0$; since $f(z)=\langle f,k_z\rangle$, this is exactly the closed subspace $H'$ of the proof. In the orthonormal-system proof of the source, the reduced kernel of $H'$ plays the role of the element $g$ of step 4.1. The constant hidden in the formula is carried by $K_\Omega(z,z)$; the Bergman metric is normalized so that on the disc at the origin one obtains $B^2_{\mathbb D}(0;X)=2|X|^2$.
