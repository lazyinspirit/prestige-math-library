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

Use the sequences and hypotheses of [[lem-kam-parameter-sequences-satisfy-all-step-hypotheses]], with $n\ge2$, $\mu=\tau+3n+2$, $\sigma_0\le s_0/32$, $h_j=h_04^{-\mu j}$ and $E_j\le E_04^{-(\mu+1)j}$. The step constants may be enlarged and their smallness constant decreased, depending only on $n,\tau$. Put $\Lambda:=\Omega_{\alpha,\tau}$ and $W_j:=\operatorname{diag}(r_j^{-1}I_n,\sigma_j^{-1}I_n)$.

Let $H_0(z,\nu)=e_0(\nu)+\nu\cdot I+P_0(z,\nu)$ be holomorphic and real on real points on $D_{r_0,s_0,h_0}(\Lambda)$, with $|P_0|\le\varepsilon_0$. Suppose at every stage the cited one-step suppliers produce the following data:

1. A canonical, $2\pi$-equivariant holomorphic phase map $\widetilde\Phi_j$ on $D_{r_j/2,s_j-8\sigma_j,h_j}(\Lambda)$ with the weighted estimates of [[lem-kam-generator-flow-and-remainder-bound]], affine in $I$ and with angle component independent of $I$.
2. A frequency shift $v_j$ with $|v_j|\le B_j:=C\varepsilon_j/r_j=C\alpha E_j\sigma_j^\mu$, and its inverse $\phi_j$ supplied by [[lem-frequency-reparametrization-by-contraction]] on $O_{h_j/4}(\Lambda)$, satisfying $\phi_j+v_j\circ\phi_j=\mathrm{id}$, $|\phi_j-\mathrm{id}|\le B_j$ and $\|D\phi_j-I_n\|\le(16n/7)B_j/h_j$.
3. The exact transformed identity
$$H_j(\widetilde\Phi_j(z,\phi_j(\nu)),\phi_j(\nu))=e_{j+1}(\nu)+\nu\cdot I+P_{j+1}(z,\nu)=:H_{j+1}(z,\nu),$$
where $|P_{j+1}|\le\varepsilon_{j+1}$ on $D_{r_{j+1},s_{j+1},h_{j+1}}(\Lambda)$.

Define the **extended** step and composition by
$$T_j(z,\nu):=(\widetilde\Phi_j(z,\phi_j(\nu)),\phi_j(\nu)),\qquad T_0\circ\cdots\circ T_{j-1}(z,\nu)=(\Psi_j(z,\nu),\chi_j(\nu)),$$
with $(\Psi_0,\chi_0)=(\mathrm{id},\mathrm{id})$. Thus parameter changes in every earlier factor are included. Set
$$D_j:=B_{r_j/2}\times S_{s_j-8\sigma_j}\times O_{h_{j+1}}(\Lambda),\qquad \mathcal L:=\{0\}\times S_{s_0/4}\times\Lambda.$$
There are constants $A,C_L$ depending only on $n,\tau$ such that:

1. $T_j(D_{j+1})\subseteq D_j$; all extended compositions are holomorphic on $D_j$, take values in $D_0$, and are equivariant in the angles. They are canonical in the phase variables for each real parameter. Every $D_j$ contains $\mathcal L$.
2. On $\mathcal L$, $\Psi_j$ converges uniformly, together with every angular derivative, to $\Psi_\infty$, holomorphic in the angles for each label. Writing $\Delta_j\Psi:=\Psi_{j+1}-\Psi_j$, one has
$$|W_0\Delta_j\Psi|\le A E_j2^{-j},\qquad |W_0\partial_{\vartheta_i}\Delta_j\Psi|\le A E_j2^{-j}/\sigma_0.$$
3. For every pair $\nu,\nu'\in\Lambda$,
$$\sup_{\vartheta\in S_{s_0/4}}|W_0(\Delta_j\Psi(0,\vartheta,\nu)-\Delta_j\Psi(0,\vartheta,\nu'))|\le C_L(E_0/h_0)2^{-j}|\nu-\nu'|.$$
Consequently the phase limit has weighted frequency-Lipschitz constant $2C_LE_0/h_0$. In the unweighted norm the corresponding bound is $2C_L(r_0+\sigma_0)E_0/h_0$.
4. Writing $\Psi_\infty(0,\vartheta,\nu)=(b(\vartheta,\nu),\vartheta+w(\vartheta,\nu))$, the bounds are
$$|b|\le Ar_0E_0,\qquad |w|\le A\sigma_0E_0,\qquad |\partial_{\vartheta_i}b|\le Ar_0E_0/\sigma_0,\qquad |\partial_{\vartheta_i}w|\le AE_0.$$
One may impose $nAE_0\le1/2$ by decreasing the initial smallness constant.
5. The parameter maps converge uniformly on $\Lambda$ to $\chi_\infty$, with $|\chi_\infty-\mathrm{id}|\le AB_0$ and $\operatorname{Lip}(\chi_\infty-\mathrm{id})\le C_LB_0/h_0$. The exact finite-stage normal form is
$$H_0(\Psi_j(z,\nu),\chi_j(\nu))=e_j(\nu)+\nu\cdot I+P_j(z,\nu),\qquad |P_j|\le\varepsilon_j\quad\text{on }D_j.$$

## Facts & Assumptions

**Given:** The sequence hypotheses, the Hamiltonian family and the specified one-step data.

[F1] [[lem-kam-parameter-sequences-satisfy-all-step-hypotheses]] gives $\eta_j\le1/8$, $\eta_j\le\sigma_j$, $s_j\ge s_0/2$, $B_j\le h_{j+1}/(16n)$, $h_{j+1}\le h_j/4$, and $E_j\le E_0q^j$, where $q=4^{-(\mu+1)}$. In particular $r_j/r_0\le2^{-j}$, $\sigma_j/\sigma_0=2^{-j}$ and $r_j/\sigma_j\le r_0/\sigma_0$.

[F2] [[lem-kam-generator-flow-and-remainder-bound]] supplies $|W_j(\widetilde\Phi_j-\mathrm{id})|\le CE_j$, $\|W_j(D_z\widetilde\Phi_j-I)W_j^{-1}\|\le CE_j$ and $|W_j\partial_\nu\widetilde\Phi_j|\le CE_j/h_j$ on $O_{h_j/2}$, with dimensional constants absorbed into $C$. Its phase Jacobian is block upper triangular. [[lem-frequency-reparametrization-by-contraction]] supplies the inverse bounds in the statement.

[F3] Cauchy bounds on polydiscs, and convergence and differentiation of locally uniformly convergent holomorphic series, are supplied by [[lem-cauchy-fourier-and-lattice-shell-bounds]], [[thm-weierstrass-convergence-holomorphic-functions]] and [[thm-power-series-expansion-in-several-complex-variables]]. Geometric sums and submultiplicative operator norms are supplied by [[thm-geometric-series]] and [[def-operator-norm]].

## Proof

**Proof technique:** direct; retain the parameter coordinate, use triangular weighted Jacobians, and estimate holomorphic increments on parameter tubes before passing to their label restrictions.

1.1 *Domain inclusions.* On $D_{j+1}$ the step moves actions by at most $Cr_jE_j$, angles by at most $C\sigma_jE_j$ and parameters by at most $B_j$. Take the step smallness so that $CE_j\le1/8$. Then $r_{j+1}/2+Cr_jE_j\le r_j/16+r_j/8<r_j/2$. The angular loss $s_j-s_{j+1}$ is at least $5\sigma_j$, so $s_{j+1}-8\sigma_{j+1}+C\sigma_jE_j\le s_j-9\sigma_j+\sigma_j/8<s_j-8\sigma_j$. Moreover $h_{j+2}+B_j\le h_{j+1}/4+h_{j+1}/(16n)<h_{j+1}$. These inequalities also put the input to $\phi_j$ in $O_{h_j/4}$ and its image in $O_{h_j/2}$. Thus $T_j(D_{j+1})\subseteq D_j$, and induction defines the extended composition on $D_j$ with image in $D_0$. The exact sequence formula for $s_j$ gives $s_j-8\sigma_j\ge s_0-24\sigma_0\ge s_0/4$, and in fact for the sequence with loss $8\sigma_j$ it gives $s_j-8\sigma_j\ge s_0-16\sigma_0\ge s_0/2$. Hence the common larger angular strip $S_t$, $t:=s_0/4+2\sigma_0$, lies in every $D_j$ at $I=0$. Equivariance and fixed-parameter canonicity follow by composition; real parameters remain real by the stated real one-step construction. [given, F1, F2, algebra]

2.1 *Phase Jacobians in a fixed weight.* Because the phase Jacobians are upper triangular in $(I,\vartheta)$, conjugating their error matrices from $W_j$ to $W_0$ leaves diagonal blocks unchanged, multiplies the upper right block by $(r_j/\sigma_j)/(r_0/\sigma_0)\le1$, and leaves the lower left block zero. Thus $\|W_0(D_zT_j-I)W_0^{-1}\|\le CE_j$. The parameter block satisfies $\|D\phi_j\|\le1+(16n/7) B_j/h_j$. Their products are bounded by $\exp(C\sum E_j)$ and $\exp((16n/7)\sum B_j/h_j)$ respectively. Here $\sum E_j\le2E_0$ and $\sum B_j/h_j\le2B_0/h_0$, since $B_j/h_j=(B_0/h_0)(E_j/E_0)2^{\mu j}\le(B_0/h_0)4^{-j}$. Decrease the initial smallness so the phase product is at most $2$; the parameter product is already at most $\exp(2/(7\cdot4^\mu))<2$, since $B_0/h_0\le(16n4^\mu)^{-1}$. The chain rule therefore gives $\|W_0D_z\Psi_jW_0^{-1}\|\le2$ and $\|D\chi_j\|\le2$. [step 1.1, F1, F2, F3, algebra]

3.1 *The parameter block of the phase composition.* The single-step phase-parameter block in the fixed weight is bounded by $CE_j2^{-j}/h_j$, because $\|W_0W_j^{-1}\|\le2^{-j}$ and $\|D\phi_j\|\le2$. Expanding the parameter block of the product of block triangular extended Jacobians yields one term for each step, with a phase product on its left and a parameter product on its right. Step 2.1 bounds these products by $2$, so $$\|W_0\partial_\nu\Psi_j\|\le4C\sum_{k<j}E_k2^{-k}/h_k\le A E_0/h_0.$$ The last inequality follows from $E_k/h_k\le(E_0/h_0)4^{-k}$. The same product expansion for $D\chi_j-I$ gives $\|D\chi_j-I\|\le A B_0/h_0$. All bounds hold throughout the respective $D_j$; earlier factors are evaluated at the parameter images established in step 1.1. [step 2.1, F1, F2, F3, algebra]

4.1 *Holomorphic increments.* For $(0,\vartheta,\nu)$ with $\vartheta\in S_t$, $\nu\in O_{h_{j+2}}(\Lambda)$, the straight segment from this point to $T_j(0,\vartheta,\nu)$ lies in $D_j$. For the parameter segment this follows by choosing a label within $h_{j+2}$ of $\nu$: its entire segment stays within $h_{j+2}+B_j<h_{j+1}$ of that label. The action and angle segments stay inside their convex domains by step 1.1, with the same stronger margins on $S_t$. Integrating the derivatives of $\Psi_j$ along this segment and using steps 2.1-3.1 gives $$|W_0\Delta_j\Psi|\le2CE_j2^{-j}+A(E_0/h_0)B_j\le A E_j2^{-j}.$$ Indeed $(E_0/h_0)B_j=(B_0/h_0)E_j2^{-\mu j}$ and $B_0/h_0$ is bounded by a dimensional small constant. This estimates both changes of phase and changes of the parameter fed into every earlier factor. Likewise $|\chi_{j+1}-\chi_j|\le2B_j$ on this parameter tube. Cauchy's estimate with angular margin $\sigma_0$ gives the displayed first derivative bound on $S_{s_0/4}$ and, for every multi-index $\beta$, the bound $|W_0\partial_\vartheta^\beta\Delta_j\Psi|\le A\beta!\sigma_0^{-|\beta|}E_j2^{-j}$. [step 1.1, step 2.1, step 3.1, F1, F3, algebra]

5.1 *Frequency Lipschitz bounds without convexity of the label set.* A holomorphic function $f$ bounded by $M$ on $O_a(\Lambda)$ has $|f(\nu)-f(\nu')|\le4n(M/a)|\nu-\nu'|$ for labels $\nu,\nu'$. If $|\nu-\nu'|<a/2$, their segment stays within $a/2$ of $\nu\in\Lambda$, and Cauchy bounds on coordinate discs of radius $a/2$ give the derivative bound $2nM/a$ there. If their distance is at least $a/2$, use $|f(\nu)-f(\nu')|\le2M$. Apply this argument to the weighted phase increment of step 4.1 with $a=h_{j+2}$. Since $$E_j2^{-j}/h_{j+2}\le4^{2\mu}(E_0/h_0)4^{-j}2^{-j},$$ it proves clause 3 with a dimensional $C_L$. Apply it also to $\chi_{j+1}-\chi_j$, bounded by $2B_j$ on the same tube. The bound $B_j/h_{j+2}\le4^{2\mu}(B_0/h_0)4^{-j}$ makes its Lipschitz series summable. This argument uses no segment contained in $\Lambda$ and therefore applies to disconnected Diophantine label sets. [step 4.1, F1, F3, algebra]

6.1 *Limits and sizes.* The bounds of step 4.1 are summable for every fixed angular multi-index, uniformly on $\mathcal L$. Their series therefore define $\Psi_\infty$, with uniform convergence of all angular derivatives. For each label, holomorphic convergence on $S_t$ and Cauchy differentiation prove holomorphy and identify these derivative limits with derivatives of $\Psi_\infty$. Summing the component bounds gives clause 4 after enlarging $A$; decreasing the initial smallness gives $nAE_0\le1/2$. The identity phase map has zero parameter derivative, so summing step 5.1 gives clause 3 for the limit. The parameter increments have summable sizes $2B_j$ and summable Lipschitz constants, yielding $\chi_\infty$, its displacement bound and its asserted Lipschitz bound relative to the identity. [step 4.1, step 5.1, F1, F3, algebra]

7.1 *Exact invariance data.* By the stated one-step identity, $H_j\circ T_j=H_{j+1}$. Induction on the extended compositions gives $H_0(\Psi_j(z,\nu),\chi_j(\nu))=H_j(z,\nu)=e_j(\nu)+\nu\cdot I+P_j(z,\nu)$ on $D_j$. The perturbation bound holds there because $D_j\subseteq D_{r_j,s_j,h_j}(\Lambda)$. The parameter coordinate is essential: for a parameter-dependent $H_0$ the Hamiltonian transported by the phase map at stage $j$ is $H_0(\cdot,\chi_j(\nu))$. This proves clause 5. [given, step 1.1, algebra] ∎

## Remarks

The estimates are in a fixed initial weight and retain both action and angle scales. No inequality $r_0\le\sigma_0$ is assumed. Frequency reparametrisation is part of the composition, so the eventual invariant torus has label frequency $\nu$ for the Hamiltonian with original parameter $\chi_\infty(\nu)$.
