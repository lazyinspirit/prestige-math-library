---
id: lem-kam-composed-map-and-derivative-convergence
kind: lemma
title: "Convergence of the composed KAM transformations, with derivative and frequency-Lipschitz bounds"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 8
deps: [def-holomorphic-kam-domain-and-diophantine-labels, lem-kam-parameter-sequences-satisfy-all-step-hypotheses, lem-kam-generator-flow-and-remainder-bound, lem-frequency-reparametrization-by-contraction, lem-kam-affine-taylor-fourier-truncation, lem-truncated-homological-equation-with-conservative-loss, lem-cauchy-fourier-and-lattice-shell-bounds, thm-weierstrass-convergence-holomorphic-functions, thm-power-series-expansion-in-several-complex-variables, thm-geometric-series, def-operator-norm, def-interval, def-metric-ball]
dependency_roles:
  def-holomorphic-kam-domain-and-diophantine-labels: mathematical-premise
  lem-kam-parameter-sequences-satisfy-all-step-hypotheses: mathematical-premise
  lem-kam-generator-flow-and-remainder-bound: mathematical-premise
  lem-frequency-reparametrization-by-contraction: mathematical-premise
  lem-kam-affine-taylor-fourier-truncation: mathematical-premise
  lem-truncated-homological-equation-with-conservative-loss: mathematical-premise
  lem-cauchy-fourier-and-lattice-shell-bounds: mathematical-premise
  thm-weierstrass-convergence-holomorphic-functions: mathematical-premise
  thm-power-series-expansion-in-several-complex-variables: mathematical-premise
  thm-geometric-series: mathematical-premise
  def-operator-norm: mathematical-premise
  def-interval: mathematical-premise
  def-metric-ball: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Jürgen Pöschel, A Lecture on the Classical KAM Theorem, arXiv:0908.2234, §4-§5 (weighted composed Jacobians, uniform convergence of the corrections on $I=0$, Lipschitz dependence on the parameter, and $C^1_{\\vartheta}$ convergence), PDF pp. 20-27."
      url: "https://arxiv.org/pdf/0908.2234"
    - title: "Rafael de la Llave, A Tutorial on KAM Theory (AMS Proc. Sympos. Pure Math. 69, revised version), §6.1-§6.2 (limits of the composed Newton transformations and uniformity of the estimates in the parameter), printed pp. 92-106."
      url: "https://www.johndcook.com/KAM.pdf"
verification:
  precheck: pass
---

## Statement

Let $n\ge2$, $\tau>n-1$, $\mu:=\tau+3n+2$, $\alpha>0$, $s_0>0$, and let
$C\ge1$, $C_*\ge3C2^{\mu}$ be constants as in
[[lem-kam-parameter-sequences-satisfy-all-step-hypotheses]], with widths
$0<\sigma_0\le\min(1,s_0/24)$, $0<r_0\le1$, $K_0\ge1$ and $h_0,E_0$ satisfying
conditions 1-3 of that item, and with the sequences
$(\sigma_j,K_j,h_j,s_j,E_j,\eta_j,r_j,\varepsilon_j)$ defined there. Assume given
a perturbation $P_0$ holomorphic on $D_{r_0,s_0,h_0}(\Omega_{\alpha,\tau})$ with
$|P_0|\le\varepsilon_0$, and suppose the following **one-step construction** is
available at every stage $j\ge0$: applying
[[lem-kam-affine-taylor-fourier-truncation]],
[[lem-kam-generator-flow-and-remainder-bound]] and
[[lem-frequency-reparametrization-by-contraction]] to $P_j$ on
$D_{r_j,s_j,h_j}(\Omega_{\alpha,\tau})$ produces

1. a holomorphic map $\widetilde\Phi_j:D_{r_j/2,s_j-8\sigma_j,h_j}\to D_{3r_j/4,s_j-7\sigma_j,h_j}$
   with the weighted bounds and the $2\pi$-equivariance in $\vartheta$ of [[lem-kam-generator-flow-and-remainder-bound]] clause 2,
   affine in $I$ and canonical on real points;
2. a holomorphic $\phi_j:O_{h_{j+1}}(\Omega_{\alpha,\tau})\to O_{h_j}(\Omega_{\alpha,\tau})$
   with $\nu+\partial_I\widehat R_j(0,\nu)=\phi_j(\nu)$ for the frequency shift of
   stage $j$, $|\phi_j-\mathrm{id}|\le CE_j$ and
   $h_j\|D\phi_j-I_n\|\le(16n/7)CE_j$ ([[lem-frequency-reparametrization-by-contraction]]);
3. the maps $\Phi_j(I,\vartheta,\nu):=\widetilde\Phi_j(I,\vartheta,\phi_j(\nu))$, holomorphic on
   $D_{r_j/2,s_j-8\sigma_j,h_{j+1}}$, and the perturbations
   $P_{j+1}(I,\vartheta,\nu):=P^+_j(I,\vartheta,\phi_j(\nu))$, holomorphic on
   $D_{r_{j+1},s_{j+1},h_{j+1}}$ with $|P_{j+1}|\le\varepsilon_{j+1}$.

Write $\Psi_j:=\Phi_0\circ\Phi_1\circ\cdots\circ\Phi_{j-1}$ for $j\ge0$ (so
$\Psi_0=\mathrm{id}$) and $\mathcal L:=\{0\}\times S_{s_0/4}\times\Omega_{\alpha,\tau}$.
Then:

1. **Domains.** For every $j\ge0$ the map $\Psi_j$ is defined and holomorphic on
$$D_j:=B_{r_j/2}\times S_{s_j-8\sigma_j}\times O_{h_{j+1}}(\Omega_{\alpha,\tau}),$$
   and $\Phi_j(D_{j+1})\subseteq D_j$; $\mathcal L\subseteq D_j$ for every $j$; moreover every $\Phi_j$ and every $\Psi_j$ is $2\pi$-equivariant in $\vartheta$, i.e. $\Psi_j(I,\vartheta+2\pi k,\nu)=\Psi_j(I,\vartheta,\nu)+(0,2\pi k)$ for all $k\in\mathbb Z^n$ and every point of $D_j$.
2. **Convergence.** $\Psi_j$ converges uniformly on $\mathcal L$, together with
   all $\vartheta$-derivatives, to a limit $\Psi_\infty$ which is holomorphic in
   $\vartheta$ on $S_{s_0/4}$ for every fixed $\nu\in\Omega_{\alpha,\tau}$; and for
   all $j$
$$\sup_{\mathcal L}|\Psi_{j+1}-\Psi_j|\le2C(r_j+\sigma_j)E_j,\qquad \sup_{\mathcal L}|\partial_{\vartheta_i}(\Psi_{j+1}-\Psi_j)|\le2CE_j .$$
3. **Frequency-Lipschitz bound.** There is a constant $C_L=C_L(n,\tau)$ with,
   for all $j$ and all $\nu,\nu'\in\Omega_{\alpha,\tau}$,
$$\sup_{\vartheta\in S_{s_0/4}}|(\Psi_{j+1}-\Psi_j)(0,\vartheta,\nu)-(\Psi_{j+1}-\Psi_j)(0,\vartheta,\nu')| \le C_L\frac{\sigma_0}{h_0}E_0\,2^{-j}\,|\nu-\nu'|,$$
   and consequently the limit satisfies
$$\sup_{\vartheta\in S_{s_0/4}}|\Psi_\infty(0,\vartheta,\nu)-\Psi_\infty(0,\vartheta,\nu')| \le 2C_L\frac{\sigma_0E_0}{h_0}|\nu-\nu'| .$$
4. **Size at the limit.** Writing $\Psi_\infty(0,\vartheta,\nu)=(b(\vartheta,\nu),\vartheta+w(\vartheta,\nu))$,
$$|b|\le2Cr_0E_0,\qquad |w|\le2C\sigma_0E_0,\qquad |\partial_{\vartheta_i}w|\le2CE_0\le\tfrac12,\qquad |\partial_{\vartheta_i}b|\le C\frac{r_0E_0}{\sigma_0},$$
   on $S_{s_0/4}\times\Omega_{\alpha,\tau}$, and the maps $\Psi_j$ are canonical on
   real points.
5. **Invariance data.** $H\circ\Psi_j=e_j+\nu\cdot I+P_j$ on $D_j$ with
   $|P_j|\le\varepsilon_j$ for every $j$.


## Facts & Assumptions

**Given:** The sequences and constants of
[[lem-kam-parameter-sequences-satisfy-all-step-hypotheses]], the initial
perturbation $P_0$ and the one-step construction.

[F1] All conclusions (a)-(g) of
[[lem-kam-parameter-sequences-satisfy-all-step-hypotheses]], in particular
$\eta_j\le\sigma_j$, $E_j\le4^{-j}E_0$, $CE_j\le h_j/(16n)$,
$\varepsilon_j=\alpha E_jr_j\sigma_j^{\mu}$ and the displayed sum bounds.

[F2] The one-step weighted estimates and $2\pi$-equivariance of
[[lem-kam-generator-flow-and-remainder-bound]] clause 2: on
$B_{r_j/2}\times S_{s_j-8\sigma_j}\times O_{h_j}$,
$|W_j(\widetilde\Phi_j-\mathrm{id})|+\|W_j(D\widetilde\Phi_j-\mathrm{id})W_j^{-1}\|\le CE_j$
with $W_j=\operatorname{diag}(r_j^{-1}I_n,\sigma_j^{-1}I_n)$, and
$h_j|W_j(\partial_{\nu}\widetilde\Phi_j)|\le CE_j$ on the parameter
neighbourhood with margin $h_j/2$; here $C$ is the constant of the one-step
lemma.

[F3] The Cauchy bound in the parameter variable with margin $h_{j+1}/2$ gives
$|\partial_{\nu}(\Phi_j-\mathrm{id})|\le\frac{4}{h_{j+1}}\sup|\widetilde\Phi_j-\mathrm{id}|$
on the parameter neighbourhood with margin $h_{j+1}/4$
([[lem-cauchy-fourier-and-lattice-shell-bounds]] clause 2);
$\sup|\widetilde\Phi_j-\mathrm{id}|\le C(r_j+\sigma_j)E_j\le2C\sigma_jE_j$.

[F4] Uniform limits and termwise differentiation of holomorphic functions
([[thm-weierstrass-convergence-holomorphic-functions]],
[[thm-power-series-expansion-in-several-complex-variables]]).

[F5] Elementary sums: $\sum_j2^{-j}=2$, $\sum_j4^{-j}=4/3$, $\sum_j2^{-j}\cdot2^{-j}=4/3$
([[thm-geometric-series]], [[def-interval]]); and
$1+C\sum_kE_k\le2$ after enlarging $C$ (which changes no statement).

## Proof

**Proof technique:** direct; bound the one-step increments and their derivatives, telescope the composition, and pass to the uniform limit.

1.1 *Domains.* By [F1], $\eta_j\le\sigma_0\le1$ and $E_0$ is small enough that $\eta_j\le3/4$; and by [F2] $\widetilde\Phi_j$ moves the action by at most $C r_jE_j\le r_j/4$ and the angle by at most $C\sigma_jE_j\le\sigma_j/4$, while $\phi_j$ moves the parameter by at most $CE_j\le h_j/(16n)\le h_j/16$. Hence $\Phi_j$ maps $D_{j+1}=B_{r_{j+1}/2}\times S_{s_{j+1}-8\sigma_{j+1}}\times O_{h_{j+2}}$ into $B_{r_{j+1}/2+r_j/4}\times S_{s_{j+1}-8\sigma_{j+1}+\sigma_j/8}\times O_{h_{j+1}}$; since $r_{j+1}/2+r_j/4\le r_j/2$ (because $\eta_j/2+1/4\le1/2$ for $\eta_j\le1/2$) and $s_{j+1}-8\sigma_{j+1}+\sigma_j/8=s_j-5\sigma_j-4\sigma_j+\sigma_j/8\le s_j-8\sigma_j$, and $h_{j+2}+h_j/(16n)\le h_{j+1}$ for $n\ge1$, we get $\Phi_j(D_{j+1})\subseteq D_j$. Since $\Psi_0=\mathrm{id}$ is defined on $D_0$ and maps $D_0$ into itself, induction gives $\Psi_j$ defined on $D_j$ with $\Psi_j(D_j)\subseteq D_0$, and $\mathcal L\subseteq D_j$ for all $j$ because $r_j>0$, $s_j-8\sigma_j\ge s_0-10\sigma_0-8\sigma_0\ge s_0/4$ and $\Omega_{\alpha,\tau}\subseteq O_{h_{j+1}}$. Moreover each $\Phi_j$ is $2\pi$-equivariant in $\vartheta$ by hypothesis (1), a composition of $2\pi$-equivariant maps is $2\pi$-equivariant (each factor maps the relevant domain into the domain of the next, and the translation preserves the domains), and $\Psi_0=\mathrm{id}$ is equivariant, so $\Psi_j(I,\vartheta+2\pi k,\nu)=\Psi_j(I,\vartheta,\nu)+(0,2\pi k)$ for every $k\in\mathbb Z^n$ and every point of $D_j$. [given, F1, F2, algebra]

2.1 *Increment bound.* By the mean-value estimate along the segment joining a point of $D_{j+1}$ to its image under $\Phi_j$, the chain rule and [F2], $\sup_{D_{j+1}}|\Psi_{j+1}-\Psi_j|=\sup_{D_{j+1}}|(\Psi_j\circ\Phi_j)-\Psi_j|\le\sup_{D_j}\|D\Psi_j\|\cdot\sup|\Phi_j-\mathrm{id}|$. The Jacobian bound $\|D\Psi_j\|\le\prod_{k<j}(1+CE_k)\le2$ follows by induction from [F2] and the chain rule, so $\sup_{\mathcal L}|\Psi_{j+1}-\Psi_j|\le2C(r_j+\sigma_j)E_j$, and differentiating the composition in $\vartheta$ with the same product bound gives $\sup_{\mathcal L}|\partial_{\vartheta_i}(\Psi_{j+1}-\Psi_j)|\le2CE_j$. This is clause 2's estimate; note $c$ small enough forces $\eta_j\le1/2$ needed above. [step 1.1, F2, F4, algebra]

3.1 *Uniform convergence.* By [F1], $E_j\le4^{-j}E_0$, so $\sum_j(r_j+\sigma_j)E_j\le\sum_j2\sigma_0 2^{-j}\cdot4^{-j}E_0\cdot\ldots$ with $r_j+\sigma_j\le2\sigma_0$, the series converges; and $\sum_jE_j$ converges by the geometric bounds of [F5]. Hence the increments of $\Psi_j$ and of each $\partial_{\vartheta_i}\Psi_j$ are summable in the supremum norm on $\mathcal L$, so $(\Psi_j)$ and each derivative sequence satisfy the uniform Cauchy criterion; by [F4] the limit $\Psi_\infty$ exists, is continuous on $\mathcal L$, and for every fixed $\nu$ is holomorphic in $\vartheta$ on the open strip $S_{s_0/4}$ as a locally uniform limit of holomorphic functions. This proves the convergence statement of clause 2 and the holomorphy assertion. [step 2.1, F1, F4, F5, algebra]

3.2 *Size and derivative bounds at the limit.* Summing the one-step bounds: $|b|\le\sum_jC r_jE_j\le2Cr_0E_0$, $|w|\le\sum_jC\sigma_jE_j\le2C\sigma_0E_0$ and $|\partial_{\vartheta_i}w|\le\sum_jCE_j\le2CE_0\le1/2$ after enlarging $c$; similarly $|\partial_{\vartheta_i}b|\le\sum_jC E_jr_j/\sigma_j\le Cr_0E_0/\sigma_0\sum_j2^{-j}\cdot\ldots\le C'r_0E_0/\sigma_0$. Canonicity of the $\Psi_j$ on real points is inherited from the canonicity of each $\Phi_j$ ([F2]) by composition. This proves clause 4. [step 2.1, F1, F2, algebra]

4.1 *Frequency Lipschitz bound.* Fix $\nu,\nu'\in\Omega_{\alpha,\tau}$. Then $(\Psi_{j+1}-\Psi_j)(\nu)-(\Psi_{j+1}-\Psi_j)(\nu')$ is bounded by the derivative with respect to the parameter of the increment, which by the chain rule is the sum of terms containing $\partial_{\nu}\Phi_j$ and $\partial_{\nu}\phi_j$ and factors $\|D\Psi_j\|,\|D\Phi_j\|\le2$; by [F3] and $E_j\le4^{-j}E_0$ and $r_j+\sigma_j\le2\sigma_0$, the dominant term is bounded by $\frac{4}{h_{j+1}}\cdot2C\sigma_jE_j\cdot2\le32C\sigma_02^{-j}E_j/h_{j+1}\le32C \sigma_0E_02^{-j}4^{j+1}4^{-j}/h_0\le256C\sigma_0E_02^{-j}/h_0$, which is clause 3 with $C_L=256C$ after noting $h_{j+1}^{-1}=4^{j+1}/h_0$ and $\sigma_jE_j\le\sigma_0E_02^{-j}4^{-j}$. Summing the geometric series gives the limit bound with $h_0$ and the factor $2$. [step 2.1, step 3.1, F1, F3, algebra]

5.1 *Invariance data.* By construction of the one-step lemma and clause 3 of the construction, $H\circ\Psi_{j+1}=H\circ\Psi_j\circ\Phi_j$ has the normal form $e_{j+1}+\nu\cdot I+P_{j+1}$ on $D_{j+1}$ with $|P_{j+1}|\le\varepsilon_{j+1}$; induction from $j=0$ proves clause 5. [given, F1, F2, algebra] ∎

## Remarks

- **The product bound.** The weighted Jacobian bound of the one-step lemma is the only place where derivatives of the composed map are controlled; the product $\prod_j(1+CE_j)$ converges because $\sum_jE_j<+\infty$, and its value is absorbed into the constant $C$.
- **Uniformity in the parameter.** The Lipschitz bound of clause 3 is uniform on $\Omega_{\alpha,\tau}$, which is the form used to show that the limiting family is close to a diffeomorphism and hence has a positive-measure image.
