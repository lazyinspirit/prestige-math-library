---
id: thm-positive-measure-analytic-kam-family
kind: theorem
title: "Positive-measure families of invariant Lagrangian tori for nondegenerate real analytic Hamiltonians: persistence for $\\varepsilon\\le c\\alpha^2$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 11
deps: [def-countable-choice, def-holomorphic-kam-domain-and-diophantine-labels, lem-kam-parameter-sequences-satisfy-all-step-hypotheses, lem-kam-generator-flow-and-remainder-bound, lem-frequency-reparametrization-by-contraction, lem-truncated-homological-equation-with-conservative-loss, lem-kam-affine-taylor-fourier-truncation, lem-kam-composed-map-and-derivative-convergence, thm-parameter-kam-torus-invariance-and-lagrangianity, lem-kam-limit-is-an-embedding, lem-nondegenerate-frequency-reduction-and-alpha-square-smallness, lem-diophantine-resonance-slab-measure, lem-kam-conjugation-symmetry-of-the-construction, prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart, def-cm-phase-domain-and-standard-symplectic-two-form, thm-real-analytic-inverse-and-implicit-function-theorems, def-metric-ball, def-metric-topology, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, thm-lebesgue-measure-is-a-complete-measure, thm-lebesgue-measure-of-a-box-of-every-kind, def-product-measure-on-sigma-finite-spaces, thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique, thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets, thm-mean-value-inequality, thm-chain-rule-for-total-derivatives, def-operator-norm, def-interval, thm-heine-borel-rn, thm-continuous-image-of-a-compact-space-is-compact]
dependency_roles:
  def-countable-choice: mathematical-premise
  def-holomorphic-kam-domain-and-diophantine-labels: mathematical-premise
  lem-kam-parameter-sequences-satisfy-all-step-hypotheses: mathematical-premise
  lem-kam-generator-flow-and-remainder-bound: mathematical-premise
  lem-frequency-reparametrization-by-contraction: mathematical-premise
  lem-truncated-homological-equation-with-conservative-loss: mathematical-premise
  lem-kam-affine-taylor-fourier-truncation: mathematical-premise
  lem-kam-composed-map-and-derivative-convergence: mathematical-premise
  thm-parameter-kam-torus-invariance-and-lagrangianity: mathematical-premise
  lem-kam-limit-is-an-embedding: mathematical-premise
  lem-nondegenerate-frequency-reduction-and-alpha-square-smallness: mathematical-premise
  lem-diophantine-resonance-slab-measure: mathematical-premise
  lem-kam-conjugation-symmetry-of-the-construction: mathematical-premise
  prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart: mathematical-premise
  def-cm-phase-domain-and-standard-symplectic-two-form: mathematical-premise
  thm-real-analytic-inverse-and-implicit-function-theorems: mathematical-premise
  def-metric-ball: mathematical-premise
  def-metric-topology: mathematical-premise
  def-lebesgue-measure-and-the-lebesgue-sigma-algebra: mathematical-premise
  thm-lebesgue-measure-is-a-complete-measure: mathematical-premise
  thm-lebesgue-measure-of-a-box-of-every-kind: mathematical-premise
  def-product-measure-on-sigma-finite-spaces: mathematical-premise
  thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique: mathematical-premise
  thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets: mathematical-premise
  thm-mean-value-inequality: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-operator-norm: mathematical-premise
  def-interval: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-continuous-image-of-a-compact-space-is-compact: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Jürgen Pöschel, A Lecture on the Classical KAM Theorem, arXiv:0908.2234, §1, §5 and Appendices A-B (the classical KAM theorem for real analytic nondegenerate Hamiltonians, the $\\varepsilon\\le c\\alpha^2$ smallness and the positive measure $\\mathrm{mes}(\\mathcal D_\\alpha\\cap B)=\\mathrm{mes}(B)-O(\\alpha)$ of the surviving frequencies), PDF pp. 1-7, 23-30 and 31-33."
      url: "https://arxiv.org/pdf/0908.2234"
    - title: "Rafael de la Llave, A Tutorial on KAM Theory (AMS Proc. Sympos. Pure Math. 69, revised version), §6.1-§6.4 (the invariant tori of the perturbed mechanical system, their Lagrangian character, and the measure of the persistence set), printed pp. 92-118."
      url: "https://www.johndcook.com/KAM.pdf"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $n\ge2$,
$\tau>n-1$, $s_0>0$, and
$0<\sigma_0\le\min(1,s_0/24)$. Put
$$\mathcal V_{2r_0}(K):=\{p\in\mathbb C^n:\operatorname{dist}_\infty(p,K)<2r_0\}.$$
Assume the following data.

1. $K\subset\mathbb R^n$ is compact, $r_0>0$, $\mathcal V_{2r_0}(K)$ is
   contained in an open set $U\subseteq\mathbb C^n$, and
   $h:U\to\mathbb C$ is holomorphic and real-valued on real points.
2. $\Omega\subseteq\mathbb R^n$ is nonempty and open, $\Omega'\subseteq\mathbb C^n$
   is a conjugation-invariant open neighborhood of $\Omega$, and
   $b:\Omega'\to U$ is holomorphic, real on real points, and satisfies
   $Dh(b(\nu))=\nu$ on $\Omega'$ and
   $b(\Omega)+(B_{r_0}\cap\mathbb R^n)\subseteq K$.
3. $M_2\ge1$ and
   $|I^{\mathsf T}D^2h(J)I|\le M_2|I|_\infty^2$ for every $I\in\mathbb C^n$
   and every $J\in\mathcal V_{2r_0}(K)$. The inverse-frequency-map case
   $b=(Dh)^{-1}$ on a regular patch is one source of such data; no convexity is
   assumed.
4. $F$ is holomorphic and conjugation-symmetric on
   $\mathcal V_{2r_0}(K)\times S_{s_0}$, is $2\pi$-periodic in each angle, and
   has supremum norm at most $\varepsilon>0$ there. A compact cube $C^*$ of
   positive side length has $C^*\subset\Omega$ and positive distance from
   $\partial\Omega$.

Define the physical Hamiltonian
$$H(p,\vartheta):=h(p)+F(p,\vartheta)$$
on the phase domain
$(\mathcal V_{2r_0}(K)\cap\mathbb R^n)\times\mathbb T^n$, with
$\omega=\sum_{j=1}^n d\vartheta_j\wedge dp_j$. For
$\nu\in\overline{C^*}$ put
$$\Omega_{\alpha,\tau}:=\{\nu\in\overline{C^*}:|k\cdot\nu|\ge\alpha|k|_1^{-\tau}\text{ for every }k\in\mathbb Z^n\setminus\{0\}\}.$$
There is $c>0$, depending only on the fixed analytic data, $n,\tau,s_0$ and
$\sigma_0$, such that for every $0<\alpha<c$ and
$0<\varepsilon\le c\alpha^2$ the following conclusions hold.

1. **Positive measure of labels.** $\Omega_{\alpha,\tau}$ has positive
   $n$-dimensional Lebesgue measure and
   $$|\Omega_{\alpha,\tau}|\ge|C^*|-C_{n,\tau}(\operatorname{diam}C^*)^{n-1}\alpha,$$
   where $C_{n,\tau}$ is the constant of
   [[lem-diophantine-resonance-slab-measure]]. Here $\operatorname{diam}$ is
   the diameter in the supremum norm.
2. **Invariant Lagrangian tori.** The parameter KAM construction gives
   $\Psi_\infty(0,\vartheta,\nu)=(a(\vartheta,\nu),\vartheta+w(\vartheta,\nu))$
   and an original-parameter map $\chi_\infty(\nu)$. The physical lift is
   $$\Psi^{\rm phys}_\nu(\vartheta):= (b(\chi_\infty(\nu))+a(\vartheta,\nu),\,\vartheta+w(\vartheta,\nu)).$$
   It lies in the stated phase domain, descends modulo $2\pi$ to an embedded
   torus $\widehat\Psi^{\rm phys}_\nu:\mathbb T^n\to
   (\mathcal V_{2r_0}(K)\cap\mathbb R^n)\times\mathbb T^n$, and satisfies
   $$X_H(\Psi^{\rm phys}_\nu(\vartheta))= \sum_{j=1}^n\nu_j\partial_{\vartheta_j}\Psi^{\rm phys}_\nu(\vartheta), \qquad (\Psi^{\rm phys}_\nu)^*\omega=0.$$
3. **Closeness and label regularity.** Put
   $$r:=\sqrt{\varepsilon/M_2},\qquad E_0:=\frac{2\sqrt{\varepsilon M_2}}{\alpha\sigma_0^\mu},\qquad \mu:=\tau+3n+2.$$
   For a fixed finite constant $C_{\rm phys}$ depending only on the fixed
   analytic data, including bounds for $Db$ near $C^*$, one has
   $$|b(\chi_\infty(\nu))+a(\vartheta,\nu)-b(\nu)|\le 2C_{\rm phys}rE_0,\qquad |w(\vartheta,\nu)|\le 2C_{\rm phys}\sigma_0E_0.$$
   The physical family is Lipschitz in $\nu\in\Omega_{\alpha,\tau}$ with
   constant at most
   $$C_{\rm phys}\left[1+\frac{(r+\sigma_0)E_0}{h_0}\right],$$
   where $h_0=\alpha/(2K_0^{\tau+1})$ and $K_0$ is the initial cutoff selected
   in the proof. The variation of the unperturbed centre $b(\nu)$ is included.
4. **Positive phase-space measure.** The union of the surviving tori
   $$\mathcal K:=\bigcup_{\nu\in\Omega_{\alpha,\tau}} \widehat\Psi^{\rm phys}_\nu(\mathbb T^n)$$
   has positive $2n$-dimensional Lebesgue measure in the stated phase domain.
   Phase-space Lebesgue measure means ordinary Lebesgue measure in action
   coordinates and any local lift of the angular coordinates; changes of angle
   lift are translations and preserve that measure.

No probability, frequency-of-occurrence or empirical claim is made.

## Facts & Assumptions

**Given:** The analytic data and the parameters $\alpha,\varepsilon$ in the Statement.

[F1] The suppliers [[lem-kam-affine-taylor-fourier-truncation]], [[lem-truncated-homological-equation-with-conservative-loss]], [[lem-kam-generator-flow-and-remainder-bound]], [[lem-frequency-reparametrization-by-contraction]] and [[lem-kam-parameter-sequences-satisfy-all-step-hypotheses]] supply the affine Taylor step, truncated solution, one-step Hamiltonian map and remainder, inverse frequency shifts, and parameter sequences. In particular the sequences have $h_j=h_04^{-\mu j}$, angle loss $8\sigma_j$, and a summable relative error sequence $E_j$ satisfying $E_j\le4^{-(\mu+1)j}E_0$.

[F2] [[lem-kam-composed-map-and-derivative-convergence]] gives the parameter limit $\Psi_\infty=(a,\vartheta+w)$ and $\chi_\infty$, with $|a|\le ArE$, $|w|\le A\sigma E$, $|D_\vartheta a|\le ArE/\sigma$, $|D_\vartheta w|\le AE$, $\operatorname{Lip}(\chi_\infty-\mathrm{id})\le C_LB_0/h_0$, and $\operatorname{Lip}_\nu(a,w)$ in the fixed scaled phase norm at most $2C_L(r+\sigma)E/h_0$. Here $\sigma=\min(\sigma_0,s_0/32)$, $E=2\sqrt{\varepsilon M_2}/(\alpha\sigma^\mu)$, and $B_0=C\alpha E\sigma^\mu$; all constants depend only on the fixed analytic data, $n$ and $\tau$.

[F3] The parameter limit satisfies the invariance and Lagrangian conclusions of [[thm-parameter-kam-torus-invariance-and-lagrangianity]], and is an embedded real torus by [[lem-kam-limit-is-an-embedding]] and [[lem-kam-conjugation-symmetry-of-the-construction]], provided the initial smallness is chosen as in [F1].

[F4] The reduction in
[[lem-nondegenerate-frequency-reduction-and-alpha-square-smallness]] gives
$$G(I,\vartheta,\lambda)=h(b(\lambda)+I)-h(b(\lambda))-\lambda\cdot I+ F(b(\lambda)+I,\vartheta),\qquad |G|\le2\varepsilon,$$
on a sufficiently small frequency neighborhood, and the choice
$r=\sqrt{\varepsilon/M_2}$ yields the relative KAM smallness. The parameter
Hamiltonian is exactly $H_{\rm par}(I,\vartheta,\lambda)=
H(b(\lambda)+I,\vartheta)$.

[F5] [[lem-diophantine-resonance-slab-measure]] bounds the resonant slabs in a cube by $C_{n,\tau}R^{n-1}\alpha$ for half-width $R$ and exponent $\tau>n-1$. For a translated cube, the orthogonal image is contained in a ball of the same radius centred at the translated centre, so the projected $(n-1)$-dimensional box bound and the slab thickness are unchanged. Under Lebesgue measure $\lambda_n$ is the restriction of Lebesgue outer measure to its measurable sets ([[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]). Under countable choice, it is countably subadditive and every open, closed, or half-open cube has measure equal to the product of its side lengths ([[thm-lebesgue-measure-is-a-complete-measure]], [[thm-lebesgue-measure-of-a-box-of-every-kind]]). On Borel subsets of $\mathbb R^{2n}$, $\lambda_n\times\lambda_n$ agrees with $\lambda_{2n}$, and the product-measure rectangle formula gives $\lambda_{2n}(E_1\times E_2)=\lambda_n(E_1)\lambda_n(E_2)$ for measurable factors ([[thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets]], [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]], [[def-product-measure-on-sigma-finite-spaces]]).

[F6] The set $\Lambda$ is closed in $C^*$: for each $k\ne0$, the map
$\nu\mapsto|k\cdot\nu|$ is continuous (indeed Lipschitz), so its superlevel set
is closed by [[def-metric-topology]], and $\Lambda$ is their intersection with
$C^*$. Thus $\Lambda$ is
compact. A cube in $\mathbb R^n$ is compact by Heine--Borel. The compact set
$\Lambda\cap Q$ and the closed angle cube used below are therefore Borel.
If a compact set in a metric space is considered in a local phase chart, its
image there is Borel: compact subsets of metric spaces are closed, as a finite
subcover of disjoint-neighbourhood balls separates any exterior point.
Equip the phase space with the supremum product metric
$$d_{\mathrm{phase}}((p,\pi\theta),(p',\pi\theta')):=\max\{|p-p'|_\infty,d_{\mathbb T^n}(\pi\theta,\pi\theta')\},$$
using $d_{\mathbb T^n}$ of [[lem-kam-limit-is-an-embedding]].
If a holomorphic map has invertible derivative at a point, continuity of
the derivative gives a small convex cube on which the map is lower-Lipschitz:
write $A=Db(\nu_0)$, choose the cube so
$\sup\|Db-A\|\le(2\|A^{-1}\|)^{-1}$, and integrate the derivative along a
segment ([[thm-mean-value-inequality]], [[thm-chain-rule-for-total-derivatives]],
[[def-operator-norm]], [[def-interval]]). A closed bounded subset of a finite
dimensional Euclidean space is compact by Heine--Borel, and a continuous image
of a compact metric space is compact ([[thm-heine-borel-rn]],
[[thm-continuous-image-of-a-compact-space-is-compact]]). A
Lipschitz map between subsets of $\mathbb R^{2n}$ sends null sets to null sets:
cover a null set by cubes of arbitrarily small total volume and cover each cube's
image by a dimension-dependent finite number of cubes with side bounded by its
Lipschitz constant times the original side.

[F7] Hamiltonian translation and vector-field conventions are those of [[prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart]] and [[def-cm-phase-domain-and-standard-symplectic-two-form]].

## Proof

**Proof technique:** direct; construct the translated parameter family, apply the complete iteration, transfer its tori to physical coordinates, then prove a joint lower-Lipschitz estimate for the frequency-angle parametrisation.

1.1 Put $\sigma:=\min(\sigma_0,s_0/32)$, so [given, F1, F2, F5, choose, algebra]
$3\sigma_0/4\le\sigma\le\sigma_0$, and put $E:=2\sqrt{\varepsilon M_2}/(\alpha\sigma^\mu)$. Choose a compact complex neighborhood of $C^*$ inside $\Omega'$ on which $b$ has bounded derivative and $\operatorname{dist}_\infty(b(\lambda),K)<r_0/2$; compactness and $b(C^*)\subset K$ permit this. Reduce $c$ so that $r\le r_0/4$, $h_0+AB_0$ is smaller than the width of this neighborhood, and $E$ meets the initial smallness requirements of [F1]-[F3]. The parameter-sequence lemma allows $K_0=O(1+|\log E|)$ and $h_0=\alpha/(2K_0^{\tau+1})$. Since $E_0\le(4/3)^\mu E$ and $E(1+|\log E|)^{\tau+1}\to0$ as $E\downarrow0$, $c$ can also be chosen so every small Lipschitz bound used below is below its fixed positive threshold. Finally reduce $c$ so $C_{n,\tau}(\operatorname{diam}C^*)^{n-1}\alpha<|C^*|/2$ whenever $0<\alpha<c$. [given, F1, F2, F5, choose, algebra]

2.1 Let $\Lambda:=\Omega_{\alpha,\tau}$. By [F6], $\Lambda$ is a closed subset
of the compact cube $C^*$, hence compact. For every $\delta>0$, the resonant
part $C^*\setminus\Lambda$ is contained in the resonant part of the translated
open cube obtained by enlarging each side by $2\delta$; [F5] bounds its measure
by the slab constant with half-width $R+\delta$. Letting $\delta\downarrow0$
gives
$$|C^*\setminus\Lambda|\le C_{n,\tau}(\operatorname{diam}C^*)^{n-1}\alpha.$$
Since $C^*$ and $\Lambda$ are
measurable, subtraction from $|C^*|$ gives the lower bound in clause 1; choose
$c$ so this lower bound is positive. [F2, F5, F6, step 1.1, algebra]
Every label is in the regular
frequency patch; differentiating $Dh(b(\nu))=\nu$ gives
$D^2h(b(\nu))Db(\nu)=I_n$, so $Db(\nu)$ is invertible. On a sufficiently
small neighborhood of each frequency, $b$ is lower-Lipschitz by [F6]. The
frequency cube is covered by finitely many smaller closed cubes $Q_1,\ldots,Q_N$
whose slightly larger convex neighborhoods have this property and lie in
$\Omega'$. At least one, say $Q$, has $|\Lambda\cap Q|>0$, because the finite
cover covers the positive-measure set $\Lambda$. Choose the constants in
step 1.1 so $\chi_\infty(\Lambda\cap Q)$ remains in that larger neighborhood. [F2, F5, F6, step 1.1, algebra]

2.2 Define the physical family map on $\Lambda\times\mathbb T^n$ by [step 1.1, F3, F4, F7, algebra]
$$\mathcal P(\nu,\vartheta):= (b(\chi_\infty(\nu))+a(\vartheta,\nu),\,\vartheta+w(\vartheta,\nu)).$$
For fixed $\nu$, the translation $I\mapsto b(\chi_\infty(\nu))+I$ is canonical.
Since $H_{\rm par}(I,\vartheta,\chi_\infty(\nu))=
H(b(\chi_\infty(\nu))+I,\vartheta)$ by [F4], [F3] transports the
invariance identity and vanishing Lagrangian pullback to $H$. The reality and
embedding statements of [F3] make each descended $\widehat\Psi^{\rm phys}_\nu$
an embedded real torus. The geometric choice in step 1.1 keeps the image inside
the actual domain of $H$. This proves clause 2. [step 1.1, F3, F4, F7, algebra]

2.3 The angle component of the parameter invariance equation is [F2, F3, F4, step 1.1, algebra]
$$Dh(b(\lambda)+a)+F_p(b(\lambda)+a,\vartheta+w)= \nu+D_\vartheta w\,\nu,\qquad \lambda=\chi_\infty(\nu).$$
Average over $\vartheta\in\mathbb T^n$. Each component of the periodic $w$ has
mean-zero derivatives, hence
$$\nu-\lambda=\operatorname{mean}\bigl(Dh(b(\lambda)+a)-Dh(b(\lambda))\bigr) +\operatorname{mean}F_p(b(\lambda)+a,\vartheta+w).$$
Polarization of the Hessian quadratic-form bound gives
$\|D^2h\|_{\infty\to\infty}\le nM_2$ on the real tube. The composition
bounds [F2] and Cauchy's estimate on action discs of radius $r_0/4$ give
$|a|\le ArE$ and $|F_p|\le4\varepsilon/r_0$. Therefore
$$|\lambda-\nu|\le nM_2ArE+4\varepsilon/r_0.$$
With $|Db|\le M_b$ on the chosen compact neighborhood,
$$|b(\lambda)+a-b(\nu)|\le ArE+M_b(nM_2ArE+4\varepsilon/r_0).$$
Since $\varepsilon/(rE)=\alpha\sigma^\mu/2\le1/2$, this is bounded by a
fixed multiple of $rE$. Also $|w|\le A\sigma E$. The comparisons
$E\le(4/3)^\mu E_0$ and $\sigma\le\sigma_0$ give clause 3 after enlarging
$C_{\rm phys}$. [F2, F3, F4, step 1.1, algebra]

3.1 Fix $\alpha>0$. On a lifted physical phase chart define the invertible [F2, F6, step 1.1, step 2.1, algebra]
linear output scaling
$$S_\alpha(p,\theta):=(p/\alpha,\theta),\qquad \mathcal P_\alpha:=S_\alpha\circ\mathcal P.$$
Use the output norm $\|(u,v)\|_*:=|u|_\infty+|v|_\infty$ and the input
distance
$$d_\alpha((\nu,\vartheta),(\nu',\vartheta')):= |\nu-\nu'|_\infty/\alpha+|\vartheta-\vartheta'|_\infty.$$
We prove a lower-Lipschitz estimate for $\mathcal P_\alpha$ from this input
distance to $\|\cdot\|_*$ on $(\Lambda\cap Q)\times A$, where $A$ is a fixed closed angular cube of positive
volume lying strictly inside one angle chart. Shrink $c$ so the angular
correction has supremum less than the distance from $A$ to the boundary of a
larger angle chart. Then both angular outputs have unique lifts in that chart.
The composition estimates [F2], with constants enlarged to absorb the finite
dimensional norm conversions, give for $X:=|\nu-\nu'|_\infty/\alpha$ and
$Y:=|\vartheta-\vartheta'|_\infty$,
$$\frac{|a(\vartheta,\nu)-a(\vartheta',\nu')|_\infty}{\alpha} \le C\left(\frac{rE}{\alpha\sigma}Y+\frac{rE}{h_0}X\right),$$
$$|w(\vartheta,\nu)-w(\vartheta',\nu')|_\infty \le C\left(EY+\frac{\alpha\sigma E}{h_0}X\right).$$
The frequency map $\chi_\infty$ has
$\operatorname{Lip}(\chi_\infty-\mathrm{id})\le C_LB_0/h_0$, with
$B_0=C\alpha E\sigma^\mu$. Our choice of $c$ makes this less than $1/2$;
hence $|\chi_\infty(\nu)-\chi_\infty(\nu')|_\infty\ge
|\nu-\nu'|_\infty/2$. Take $m>0$ to be the minimum of the finitely many lower-Lipschitz
constants for $b$ on the larger frequency cubes chosen in step 2.1; these
cubes and constants depend only on the fixed analytic data. In particular
it is a lower-Lipschitz constant on the selected cube. Thus the scaled base
map $\mathcal B_\alpha(\nu,\vartheta):=
(b(\chi_\infty(\nu))/\alpha,\vartheta)$ satisfies
$$\|\mathcal B_\alpha(\nu,\vartheta)- \mathcal B_\alpha(\nu',\vartheta')\|_* \ge (m/2)X+Y\ge m_*(X+Y),\qquad m_*:=\min(m/2,1).$$
The two error bounds above show that the scaled perturbation $(a/\alpha,w)$
has Lipschitz constant at most
$$C\left(E+\frac{rE}{\alpha\sigma}+\frac{rE}{h_0} +\frac{\alpha\sigma E}{h_0}\right).$$
Here $r/\alpha\le\sqrt{c/M_2}$,
$h_0=\alpha/(2K_0^{\tau+1})$, and
$E K_0^{\tau+1}\to0$ as $E\downarrow0$ because
$K_0=O(1+|\log E|)$. Reducing $c$ makes this Lipschitz constant smaller than
$m_*/2$. Subtracting the error difference from the base difference proves
the explicit scaled inequality
$$\|\mathcal P_\alpha(\nu,\vartheta)- \mathcal P_\alpha(\nu',\vartheta')\|_* \ge (m_*/2)d_\alpha((\nu,\vartheta),(\nu',\vartheta')).$$
The unscaled physical output has an equivalent norm for each fixed
$\alpha>0$, but no uniform unscaled lower-Lipschitz constant as
$\alpha\downarrow0$ is asserted. [F2, F6, step 1.1, step 2.1, algebra]

4.1 The compact set $\Lambda\cap Q$ has positive measure, and $A$ has positive [step 2.1, step 2.2, step 3.1, F5, F6, algebra]
$n$-dimensional measure, so $\mathcal E:=(\Lambda\cap Q)\times A$ is Borel and has positive $2n$-dimensional measure by [F5]. To see that $\mathcal K$ is measurable, represent each torus angle by a point of $C_0:=[0,2\pi]^n$. The domain $\Lambda\times C_0$ is a closed bounded subset of $\mathbb R^{2n}$, hence compact by [F6]. The map $(\nu,\vartheta)\mapsto \mathcal P(\nu,\pi(\vartheta))$ is continuous by the parameter Lipschitz and angular holomorphy bounds in [F2], and has image exactly $\mathcal K$, because $\pi(C_0)=\mathbb T^n$. Thus $\mathcal K$ is compact in the metric phase space and is Lebesgue-measurable in its local charts. If the lifted physical image $\mathcal P(\mathcal E)$ had measure zero, then $\mathcal P_\alpha(\mathcal E)= S_\alpha(\mathcal P(\mathcal E))$ would also have measure zero: for this fixed $\alpha>0$, $S_\alpha$ and its inverse are linear Lipschitz maps with finite constants. Step 3.1 makes $\mathcal P_\alpha$ injective, and its inverse on $\mathcal P_\alpha(\mathcal E)$ is Lipschitz in ordinary Euclidean coordinates. Indeed $|\nu-\nu'|_\infty+|\vartheta-\vartheta'|_\infty \le\max(\alpha,1)d_\alpha$; combining this with step 3.1 and the fixed finite-dimensional norm comparisons gives a finite inverse Lipschitz constant for each fixed $\alpha$. By the cube-cover property in [F6], that inverse would send the null set $\mathcal P_\alpha(\mathcal E)$ to the positive-measure set $\mathcal E$, a contradiction. The passage back to physical coordinates uses only invertibility of the fixed scaling, not a bound uniform as $\alpha\downarrow0$. Therefore this image, and hence $\mathcal K$, has positive phase-space measure. This is clause 4. [step 2.1, step 2.2, step 3.1, F5, F6, algebra] ∎

## Remarks

- **Scope.** The theorem is a positive-measure persistence statement: it produces a family of invariant Lagrangian tori over a set of frequencies of positive measure, not all tori, not a neighbourhood of any torus, and nothing about stability in the sense of Lyapunov or about the dynamics off the tori.
- **Nondegeneracy.** The hypothesis on $h$ enters only through the existence of the inverse frequency map $b$ (clause 2) and the Hessian constant $M_2$; a merely smooth perturbation, a degenerate Hessian, a separatrix, or an arbitrarily large perturbation are all outside the statement.
- **Constants.** The constant $c$ depends on the fixed analytic domains and the integrable part; no quantitative value is asserted, and in particular the theorem does not claim a sharp threshold.
