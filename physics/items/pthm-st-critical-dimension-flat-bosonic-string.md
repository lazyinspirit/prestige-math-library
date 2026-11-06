---
id: pthm-st-critical-dimension-flat-bosonic-string
kind: physics-theorem
title: "Critical Dimension Flat Bosonic String"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
dependency_level: 10
deps:
  - pthm-st-bosonic-brst-nilpotence
  - pthm-st-bosonic-virasoro-central-extension
  - pthm-st-bosonic-bc-ghost-central-charge
  - def-st-bosonic-matter-oscillator-modes
  - pthm-st-open-neumann-classical-mode-expansion
  - pthm-st-closed-classical-mode-expansion
dependency_roles:
  pthm-st-bosonic-brst-nilpotence: physical-result
  pthm-st-bosonic-virasoro-central-extension: physical-result
  pthm-st-bosonic-bc-ghost-central-charge: physical-result
  def-st-bosonic-matter-oscillator-modes: formulation-prerequisite
  pthm-st-open-neumann-classical-mode-expansion: physical-result
  pthm-st-closed-classical-mode-expansion: physical-result
physical_scope: "Criticality conditions in the standard flat tensile D-coordinate-boson model with the stated exponential-cutoff finite-part prescription and standard reparametrization ghosts; excludes arbitrary internal CFTs and noncritical/Liouville strings."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "David Tong, Lectures on String Theory, arXiv:0908.0333v3, full 218-page lecture notes"
      url: "https://arxiv.org/pdf/0908.0333v3"
      locator: "§§2.2–2.4 and 5.3–5.3.2 (PDF file pp.39–54 and 124–126; printed pp.32–47 and 117–119); printed pp.32–47 and 117–119); printed pp.32–47 and 117–119); printed pp.32–47 and 117–119); printed pp.32–47 and 117–119); printed pp.32–47 and 117–119); printed pp.32–48 and 115–120); zero-point and anomaly conventions."
    - title: "Kazuyuki Furuuchi and Nobuyoshi Ohta, On the No-ghost Theorem in String Theory, arXiv:hep-th/0607105v3"
      url: "https://arxiv.org/pdf/hep-th/0607105v3"
      locator: "pp. 2–5; open bosonic BRST nilpotence at D=26 and intercept one."
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

In the standard flat tensile bosonic string, define target null coordinates $X^\pm=(X^0\pm X^{D-1})/\sqrt2$, momentum components $p^\pm=(p^0\pm p^{D-1})/\sqrt2$, oscillator components $\alpha_n^\pm=(\alpha_n^0\pm\alpha_n^{D-1})/\sqrt2$ (and $\widetilde\alpha_n^\pm$ by the same formula in the closed sector), and transverse indices $i=1,\ldots,D-2$. The light-cone consistency calculation uses the chart $p^+\ne0$ and the target gauge $X^+=x^++2\alpha'p^+\tau$ on the open strip or $X^+=x^++\alpha'p^+\tau$ on the closed cylinder, with dimensionless conformal-gauge worldsheet coordinates. The intercept $a$ is the real dimensionless normal-ordering constant in $L_0^m-a$. On this chart, quantum Lorentz-algebra closure and cancellation of the conformal anomaly in the covariant matter-plus-bc system select $D=26$ and $a=1$. This statement concerns the usual $D$ free-coordinate-boson model, not every worldsheet CFT or noncritical/Liouville string.

## Statement references

[David Tong, Lectures on String Theory, arXiv:0908.0333v3, full 218-page lecture notes](https://arxiv.org/pdf/0908.0333v3), §§2.2–2.4 and 5.3–5.3.2 (PDF file pp.39–54 and 124–126; printed pp.32–47 and 117–119); printed pp.32–47 and 117–119); printed pp.32–47 and 117–119); printed pp.32–47 and 117–119); printed pp.32–47 and 117–119); printed pp.32–47 and 117–119); printed pp.32–48 and 115–120); zero-point and anomaly conventions.

[Kazuyuki Furuuchi and Nobuyoshi Ohta, On the No-ghost Theorem in String Theory, arXiv:hep-th/0607105v3](https://arxiv.org/pdf/hep-th/0607105v3), pp. 2–5; open bosonic BRST nilpotence at $D=26$ and intercept one.

## Facts & Assumptions

[F1] [[pthm-st-bosonic-brst-nilpotence]] proves that the flat open bosonic BRST charge is nilpotent exactly when $D=26$ and $a=1$ on its stated algebraic domain.

[F2] [[pthm-st-bosonic-bc-ghost-central-charge]] gives $c_{gh}=-26$ for the specified reparametrization ghosts.

[F3] [[pthm-st-bosonic-virasoro-central-extension]] gives the covariant matter central charge $c_m=D$ in the specified oscillator convention.

[A1] Adopt the standard one-loop Weyl-consistency criterion for this flat free-coordinate model: the total matter-plus-ghost central charge must vanish.

[A2] For the transverse zero-point sum use the declared exponential finite-part prescription $\operatorname{FP}_{\epsilon\downarrow0}\sum_{n\ge1}n e^{-\epsilon n}$. This is a regulator convention for the model, not convergence of $\sum n$.

[A3] For the light-cone consistency calculation put $k^\mu=\alpha_0^\mu$ in each chiral oscillator sector, use $\eta_{+-}=-1$, and restrict to the chart $k^+=\alpha_0^+\ne0$. The zero-mode conventions in [F4]--[F6] identify this with $p^+\ne0$ in the open or closed field gauge stated above. That gauge sets every nonzero $\alpha_n^+$ mode to zero; for closed strings this holds separately for $\alpha_n^+$ and $\widetilde\alpha_n^+$. The light-cone quantization prescription imposes the normal-ordered constraints $L_n^m=0$ for $n\ne0$ and $L_0^m-a=0$ on the reduced oscillator sector. This is a chartwise gauge fixing used in the derivation, not a claim of a global gauge slice.

**Given:** Consider only the standard flat tensile bosonic model with $D$ free coordinate bosons and the usual $bc$ ghosts.


[F4] [[def-st-bosonic-matter-oscillator-modes]] fixes the transverse oscillator algebra, normal ordering, adjoint and dimensionless open-string zero mode $k=\sqrt{2\alpha'}p$. Its quadratic Virasoro computation in [F3] applies to the $d=D-2$ transverse Euclidean families.

[F5] The draft physics theorem [[pthm-st-open-neumann-classical-mode-expansion]] locally proves the open Neumann oscillator expansion and the classical constraints $L_n=0$ in that normalization.

[F6] The draft physics theorem [[pthm-st-closed-classical-mode-expansion]] locally proves the closed periodic-cylinder left/right oscillator expansions, their common target zero mode, and the chiral constraints $L_n=\widetilde L_n=0$.

[L1] For the momentum-derivative realization, put $d=D-2$ and $\Omega=\{(s,k_1,\ldots,k_d)\in\mathbb R^{d+1}:s\ne0\}$, where $s=k^+$. Let $\mathcal F_N^\perp$ be the transverse oscillator level-$N$ space: its basis is indexed by nonnegative occupations $r_{n,i}$ with $\sum_{n,i}nr_{n,i}=N$, normalized by dividing $\prod_{n,i}(\alpha_{-n}^i)^{r_{n,i}}|0\rangle$ by $\sqrt{\prod_{n,i}n^{r_{n,i}}r_{n,i}!}$, with vacuum norm one. These finitely many basis vectors are orthonormal for the Euclidean transverse oscillator adjoint. Define $\mathscr H=\bigoplus_{N\ge0}L^2(\Omega,ds\,d^dk;\mathcal F_N^\perp)$, with pairing $\langle\psi,\phi\rangle=\sum_N\int_\Omega\sum_{\mathbf r}\overline{\psi_{N,\mathbf r}(s,k)}\phi_{N,\mathbf r}(s,k)\,ds\,d^dk$, antilinear in the first argument, and its algebraic test domain $\mathscr D=\bigoplus_{N\ge0}^{\rm alg} C_c^\infty(\Omega;\mathcal F_N^\perp)$. A vector of $\mathscr D$ has only finitely many levels and smooth coefficient functions of compact support away from $s=0$. At closed level matching replace $\mathcal F_N^\perp$ by $\mathcal F_N^\perp\otimes\widetilde{\mathcal F}_N^\perp$, retaining the same momentum variables and measure. Fixed-momentum fibres remain the domain for the preceding oscillator identities; momentum derivatives act only on these test functions, never on a single momentum fibre. This choice is a local differential-operator realization, not a new physical measure or a global self-adjointness assertion.

## Proof

1.1 By [A1], [F2], and [F3], cancellation of the total central charge requires $0=c_m+c_{gh}=D-26$, hence $D=26$. This is the critical dimension of this free-boson model; a different matter CFT would replace $D$ by its central charge. [given, A1, F2, F3, algebra]

1.2 For $\epsilon>0$, the geometric series gives $\sum_{n\ge1}e^{-\epsilon n}=e^{-\epsilon}/(1-e^{-\epsilon})$; differentiating in $\epsilon$ gives $\sum_{n\ge1}n e^{-\epsilon n}=e^{-\epsilon}/(1-e^{-\epsilon})^2=1/(4\sinh^2(\epsilon/2))$. Taylor expansion $\sinh x=x+x^3/6+O(x^5)$ yields $1/(4\sinh^2(\epsilon/2))=\epsilon^{-2}-1/12+O(\epsilon^2)$. Thus the declared finite part is $-1/12$. The $D-2$ transverse oscillator families have vacuum energy $E_0=\frac{D-2}{2}(-1/12)=-(D-2)/24$, so the intercept that subtracts this zero-point contribution is $a=-E_0=(D-2)/24$. [given, A2, algebra]

1.3 For nonzero $n$, first at transverse momentum zero, put $\ell_n=\frac12\sum_{r\in\mathbb Z}:\alpha_{n-r}^a\alpha_r^a:,\quad \alpha_0^a=0,\quad N=\sum_{n>0,a}\alpha_{-n}^a\alpha_n^a,$ $E_i=\sum_{n>0}\frac{\alpha_{-n}^i\ell_n-\ell_{-n}\alpha_n^i}{n},\quad B_{m,ij}=\alpha_{-m}^i\alpha_m^j-\alpha_{-m}^j\alpha_m^i,\quad A_{ij}=\sum_{m>0}\frac{B_{m,ij}}m.$ All sums act locally finitely and preserve level. The transverse oscillator computation in the existing Virasoro supplier applies with Euclidean metric and $d$ components: $[\ell_n,\alpha_m^a]=-m\alpha_{n+m}^a$ and $[\ell_m,\ell_n]=(m-n)\ell_{m+n}+d(m^3-m)\delta_{m+n,0}/12$. Also $E_i^\dagger=-E_i$, $E_i|0\rangle=0$ and $[N,E_i]=0$. We prove the complete operator identity (1): $[E_i,E_j]=-2NA_{ij}+\sum_{m>0}\left[2m-\frac d{12}\left(m-\frac1m\right)\right]B_{m,ij}.$ [given, F3, F4, algebra]

2.1 The expression for $E_i$ is the normally ordered cubic $E_i=-\frac12\sum_{r+s+t=0\atop r,s,t\ne0}\frac1r:\alpha_r^i\alpha_s^a\alpha_t^a:.$ There is no internal contraction: a paired opposite pair would force the third index to zero. A commutator of two such cubics has only quartic, quadratic and scalar normal-ordered terms. Its quartic part is obtained by one oscillator contraction, equivalently by the commutative Poisson bracket with $\{x_r^a,x_s^b\}=r\delta^{ab}\delta_{r+s,0}$. Here is the complete cancellation of that quartic bracket. Write $l_n=\frac12\sum_{r+s=n}x_r^a x_s^a$, with $x_0=0$, and $e_i=-\frac12\sum_{r+s+t=0}x_r^i x_s^a x_t^a/r$. Its derivative is $\frac{\partial e_i}{\partial x_r^a}=-\frac{\delta_{ai}}r l_{-r}-\sum_{u+v=-r}\frac{x_u^i x_v^a}{u}.$ The two mixed products in $\sum_{r,a}r(\partial e_i/\partial x_r^a)(\partial e_j/\partial x_{-r}^a)$ combine to $\sum_{u,v\ne0\atop u+v\ne0}\left(\frac1v-\frac1u\right)x_u^i x_v^j l_{-u-v}.$ In the product of the two sums, symmetrize the two equally colored contracted variables. Their coefficient becomes $(v-u)/(2uv)$, giving $\sum_{u,v\ne0}\left(\frac1u-\frac1v\right)x_u^i x_v^j l_{-u-v}.$ These cancel for $u+v\ne0$. At $v=-u$ the remaining sum is $\sum_{u\ne0}(2/u)x_u^i x_{-u}^j l_0=-2NA_{ij}$. Thus the quartic normal-ordered part of $[E_i,E_j]$ is exactly $-2:NA_{ij}:$. This coefficient calculation is legitimate term by term: each fixed quartic monomial has finitely many contractions, and all resulting operators act locally finitely on each finite level. The scalar part vanishes since both $E_i$ annihilate the vacuum. Every remaining quadratic term has total mode index zero. Inspecting its Kronecker contractions leaves only $B_{m,ij}$: terms proportional to $\delta_{ij}$ cancel by antisymmetry, while the two free indices are $i,j$. Hence it remains to compute one coefficient for each $m$, with no uncomputed higher-degree operator remainder. [F4, step 1.3, algebra]

2.2 On each level in [L1], $N$ is the real scalar $N$, $A_{ij}$ and $E_i(0)$ from step 1.3 are finite matrices with $A_{ij}^\dagger=-A_{ij}$ and $E_i(0)^\dagger=-E_i(0)$. Put $E_i(k)=E_i(0)+k_aA_{ia}$ and $P^-=(k_ak_a/2+N-a)/s$. They act by smooth matrix multiplication on $\Omega$. Multiplication by $s^{-1}$, momentum polynomials, $N$, and these matrices, and differentiation in $s,k_i$, preserve $\mathscr D$. All compositions and commutators below therefore share that invariant domain. Finite-level truncation followed by compact cutoff and scalar mollification in each coefficient approximates any vector in $\mathscr H$, so $\mathscr D$ is dense. With Lebesgue measure, integration by parts without boundary terms gives $V_i^\dagger=-V_i-\operatorname{div}V_i$ on test functions for $V_i=k_i\partial_s+P^-\partial_{k_i}$, and $\operatorname{div}V_i=\partial_s k_i+\partial_{k_i}P^-=k_i/s$. Consequently $i(V_i+k_i/(2s)-E_i(k)/s)$ is symmetric on $\mathscr D$: both $V_i+\operatorname{div}V_i/2$ and $-E_i(k)/s$ are skew-symmetric. Here symmetric means equality of the two integrated pairings on $\mathscr D$, not an assertion of a self-adjoint extension or global unitary Lorentz representation. In the closed sector the two commuting spin matrices are added on the level-matched tensor factor and the orbital derivative occurs once; the same domain and symmetry argument applies. [given, F4, L1, step 1.3, algebra]

3.1 For $i\ne j$, let $|i_m\rangle=\alpha_{-m}^i|0\rangle$, whose norm is $m$. Directly from $[\ell_n,\alpha_{-m}^i]=m\alpha_{n-m}^i$, $E_i|j_m\rangle=m\sum_{n=1}^{m-1}\frac{\alpha_{-n}^i\alpha_{-(m-n)}^j}{n}|0\rangle-\delta_{ij}\ell_{-m}|0\rangle.$ Put $F_i=m\sum_{n=1}^{m-1}n^{-1}\alpha_{-n}^i\alpha_{-(m-n)}^i|0\rangle$ and $L=\ell_{-m}|0\rangle$. The exact Wick contractions give $\langle F_i,F_j\rangle=0\ (i\ne j),\quad \langle F_i,L\rangle=m\sum_{n=1}^{m-1}(m-n)=\frac{m^2(m-1)}2,$ $\langle L,L\rangle=\frac d2\sum_{n=1}^{m-1}n(m-n)=\frac d{12}(m^3-m),$ $\langle E_j i_m,E_i j_m\rangle=m^2\sum_{n=1}^{m-1}1=m^2(m-1).$ Using $E_i^\dagger=-E_i$ therefore gives $\langle i_m,[E_i,E_j]j_m\rangle=2m^2(m-1)-\frac d{12}(m^3-m).$ The normal-ordered quartic term kills every one-oscillator state, and $\langle i_m,B_{m,ij}j_m\rangle=m^2$. Thus the remaining quadratic coefficient is exactly $2(m-1)-d(m-1/m)/12$. Finally normal ordering the product $NA_{ij}$ gives $NA_{ij}=:NA_{ij}:+\sum_{m>0}B_{m,ij}.$ Substitution proves (1) for every mode, including $m=1$ with its empty finite sums. For $i=j$ both sides vanish. When $d=1$ there is no pair $i\ne j$, and this particular Lorentz commutator is identically zero; no incorrect low-dimensional uniqueness claim is needed below. [F3, F4, step 1.3, step 2.1, algebra]

4.1 In the target null basis of the Statement, the gauge in [A3] gives $\alpha_n^+=0$ for $n\ne0$ and $k^+=\alpha_0^+\ne0$. The mode expansions and constraints in [F5]--[F6] then give, in each chiral sector, $0=L_n^m=-k^+\alpha_n^-+L_n^\perp$ for $n\ne0$, where $L_n^\perp=\frac12\sum_{r\in\mathbb Z}\sum_{i=1}^{d}:\alpha_{n-r}^i\alpha_r^i:$. Thus $\alpha_n^-=L_n^\perp/k^+$. The zero-mode constraint is $0=L_0^m-a=-k^+k^-+k_i k_i/2+N-a$, so $k^-=(k_i k_i/2+N-a)/k^+$. In a closed string the same formulas hold separately for the tilded chiral sector. This derives the longitudinal constraint solution on the stated chart. For general transverse momentum write $L_n^\perp=\ell_n+k_a\alpha_n^a$ and $E_i(k)=E_i(0)+k_a A_{ia}$. The elementary rotation commutators, obtained from the same oscillator CAR, give identity (2): $[E_i(k),E_j(k)]=[E_i(0),E_j(0)]-k_iE_j(k)+k_jE_i(k)-k_a k_a A_{ij}.$ For example $[A_{ia},E_j(0)]=\delta_{aj}E_i(0)-\delta_{ij}E_a(0)$, and the quadratic $k$ term follows from $[A_{ia},A_{jb}]=\delta_{aj}A_{ib}-\delta_{ij}A_{ab}+\delta_{ib}A_{aj}-\delta_{ab}A_{ij}$. Thus (2) includes, rather than discards, all transverse momentum terms. Put $P^-=(k_a k_a/2+N-a)/k^+$ and use the symmetric dynamical generator on $\mathscr D$ established in step 2.2, $J^{-i}=i\left[k_i\partial_{k^+}+P^-\partial_{k_i}+\frac{k_i}{2k^+}-\frac{E_i(k)}{k^+}\right].$ The first three terms are the symmetrically ordered orbital generator; the last is the light-cone oscillator spin with $\alpha_n^-=L_n^\perp/k^+$. The sign convention is $J^{\mu\nu}=k^\mu q^\nu-k^\nu q^\mu$ as in the source. The vector fields $V_i=k_i\partial_{k^+}+P^-\partial_{k_i}$ commute, since $V_i(P^-)=0$ and $V_i(k_j)=P^-\delta_{ij}$. Their half-divergence terms have symmetric derivatives and contribute no antisymmetric commutator. Also $\partial_{k_i}E_j-\partial_{k_j}E_i=-2A_{ij}$. Direct differential-operator multiplication consequently gives $[J^{-i},J^{-j}]=-(k^+)^{-2}\left([E_i(k),E_j(k)]+k_iE_j(k)-k_jE_i(k)+2k^+P^-A_{ij}\right).$ Substitute (1) and (2). All level operators, quartic pieces and transverse momentum pieces cancel, leaving the complete anomaly (3): $[J^{-i},J^{-j}]=\frac1{(k^+)^2}\sum_{m>0}\left[\left(\frac d{12}-2\right)m+\frac{2a-d/12}{m}\right]B_{m,ij}.$ The other generators are the orbital momentum derivatives and the exact transverse rotations $A_{ij}$. Their commutators with $E_i$ are the rotation relation above, and with $P^-$ are its displayed first derivatives; hence all the other Lorentz relations have their classical values. No further multiple contraction can occur in those rotation or first-order momentum actions. Equation (3) is therefore the only possible light-cone Lorentz anomaly on this common invariant test domain $\mathscr D$. [F4, F5, F6, A3, L1, step 1.3, step 3.1, step 2.2, algebra]

5.1 At $d=24,a=1$ every coefficient in (3) vanishes. If $d\ge2$, independence of the $B_{m,ij}$ (detected on $|j_m\rangle$) shows that Lorentz closure requires each coefficient to vanish. Modes $m=1$ and $m=2$ give respectively $2(a-1)=0$ and $d=24$. Thus $D=26,a=1$. For the usual closed string, two independent chiral spin sums give the two copies of (3); on the level-matched subspace the same cancellation applies, and the two independent oscillator families cannot cancel a nonzero anomaly. No all-level condition is inferred only from finitely many low-level states: the finite-state tests determine coefficients only after the complete operator identity has been proved. The original Statement requires both this Lorentz closure and covariant conformal-anomaly cancellation. The already proved total central charge is $D-26$, so their joint conditions force $D=26$ even in the low-dimensional cases where the particular $[J^{-i},J^{-j}]$ test is vacuous. The declared finite-part zero-point prescription gives $a=(D-2)/24=1$, and the corrected-consistent BRST nilpotence theorem gives the same intercept. This proves the unchanged standard-flat-model criticality claim, not a claim about arbitrary internal matter CFTs or Liouville strings. [F1, F2, F3, step 1.1, step 1.2, step 4.1, algebra] ∎

