---
id: post-qftx-s4-n2-localization-model
kind: postulate
title: Adopted N=2* U(2) Model on the Round Four-Sphere
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-s4-partition-functions
dependency_level: 3
axiom_base: ZF + AC_omega inherited from the supplied rigid-background definition.
deps:
  - def-qftx-susy-background-data
dependency_roles:
  def-qftx-susy-background-data: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: A source-qualified Euclidean N=2* U(2) model on a round S4, with
  one adjoint hypermultiplet and the specified formal noncommutative Omega
  regulator. It asserts no constructed functional measure, continuum limit, or
  empirical claim.
sources:
  references:
    - title: "Vasily Pestun, Localization of Gauge Theory on a Four-Sphere and
        Supersymmetric Wilson Loops"
      url: https://arxiv.org/pdf/0712.2824
      locator: "§1, equations (1.3)–(1.4) and the regulator qualification; §2,
        equations (2.1)–(2.14), (2.24)–(2.30); §4.1, equations (4.1)–(4.3);
        §§4.2–4.3, equations (4.4)–(4.12); §5, equations (5.1), (5.11)–(5.12)."
    - title: "Vasilis Peelaers, 4d N=2 Localization"
      url: https://indico.math.cnrs.fr/event/3026/attachments/2163/2457/Peelaers-LectureNotes.pdf
      locator: "Lecture 1, §§1.1–1.2, equations (19)–(30), PDF pp. 3–5; Lecture 2,
        equations (31)–(35), PDF pp. 5–6."
verification:
  precheck: pass
---
## Postulate

Use natural units $c=\hbar=1$. For $r>0$, let

$$S^4_r=\{y\in\mathbb R^5:\sum_{j=1}^5y_j^2=r^2\}$$

with its standard orientation, round metric, scalar curvature $12/r^2$, and standard spin structure. The radius has dimension $[r]=\mathrm{mass}^{-1}$. In stereographic length coordinates $x^\mu$, $\mu=1,\ldots,4$, use

$$ds^2=\frac{\sum_{\mu=1}^4(dx^\mu)^2}{(1+x^2/(4r^2))^2},\qquad x^2=\sum_{\mu=1}^4(x^\mu)^2.$$

Let $G=U(2)$, with Lie algebra $\mathfrak u(2)=\{X\in M_2(\mathbb C):X^\dagger=-X\}$ and positive invariant form $(X,Y)=-\operatorname{tr}_{\mathbf 2}(XY)$. A gauge sector is a smooth right principal $U(2)$ bundle $P\to S^4_r$ up to smooth bundle isomorphism, with a smooth connection $A$ and curvature $F_A=dA+A\wedge A$ in a local trivialization. Fields in the adjoint representation are smooth sections of the associated adjoint bundle. This postulate does not classify the bundle sectors.

Use Pestun's dimensional-reduction notation only as a field and spinor convention: $M,N=0,\ldots,9$ are ten-dimensional indices, $\mu=1,\ldots,4$ are the S4 coordinate indices, $A\in\{0,5,\ldots,9\}$ labels the six reduced scalars, and $i,j,k=5,\ldots,8$ label the four hypermultiplet scalars. Independently, $a,b=1,\ldots,7$ label localization auxiliaries $K_a$ and their background spinors $\nu_a$; these labels are not reduced spacetime directions. Write the reduced ten-dimensional connection as $A_M=(A_\mu,\Phi_A)$; $\Phi_0,\Phi_9$ and the fermion components in the $\Gamma_{5678}=+1$ multiplet form the N=2 vector multiplet, while $\Phi_5,\ldots,\Phi_8$ and the complementary fermion components form one adjoint hypermultiplet. There is no other matter. The ten-dimensional indices do not enlarge the four-dimensional spacetime.

In the source's reduced $(9,1)$ Clifford convention, let $g_{MN}=\operatorname{diag}(-1,1,\ldots,1)$ and let $\gamma^M$ be the $32\times32$ matrices satisfying $\gamma^M\gamma^N+\gamma^N\gamma^M=2g^{MN}I$. Their two chiral blocks are $\Gamma^M:S^+\to S^-$ and $\widetilde\Gamma^M:S^-\to S^+$, satisfying $\Gamma^{(M}\widetilde\Gamma^{N)}=\widetilde\Gamma^{(M}\Gamma^{N)}=g^{MN}I$, where parentheses and brackets denote symmetrization and antisymmetrization with factor $1/2$. Set $\Gamma^{MN}=\widetilde\Gamma^{[M}\Gamma^{N]}$ on $S^+$ and $\widetilde\Gamma^{MN}=\Gamma^{[M}\widetilde\Gamma^{N]}$ on $S^-$, as in Pestun Appendix A (A.7). The blocks are symmetric and $(\Gamma^{MN})^{\mathsf T}=-\widetilde\Gamma^{MN}$. A bilinear $\zeta B\chi$ means $\zeta^{\mathsf T}B\chi$ in this basis, with no Hermitian conjugation; the background spinors commute and dynamical fermions are odd. The spinor $\Psi$ and supersymmetry parameter $\epsilon$ are chiral Majorana-Weyl spinors in this reduced convention; after Euclidean continuation $\Psi$ is complex and its conjugate is not an independent field. The operators $D_M$ and $F_{MN}$ below are the covariant derivatives and curvature obtained by dimensional reduction of the ten-dimensional connection, with the mass twist in the 0 direction specified below.

The hypermultiplet has real Euclidean mass $m_E$ of mass dimension one, supplied by a nondynamical background flavor-vector multiplet whose fields are fixed and not integrated. In the source's orthonormal basis of the four hypermultiplet scalar directions, set $M_{ij}=i m_EJ_{ij}$, where $J$ is a real antisymmetric self-dual endomorphism of the oriented $i=5,\ldots,8$ space, $J^2=-I$, and $J_{ij}J^{ij}=4$. Thus $M$ is imaginary, antisymmetric, and self-dual, as required by the source. This is the N=2* deformation; $m_E=0$ is its N=4 limit. Its Scherk--Schwarz twist is

$$D_0\Phi_i=[\Phi_0,\Phi_i]+M_{ij}\Phi_j,\qquad D_0\Psi=[\Phi_0,\Psi]+\frac14M_{ij}\Gamma^{ij}\Psi.$$

For $D_\mu$, use the Levi-Civita derivative on spacetime/spin indices and the gauge covariant derivative $\nabla_\mu^A X=\nabla_\mu X+[A_\mu,X]$ on adjoint fields. In reduced scalar directions, $D_A X=[\Phi_A,X]$ before the displayed 0-direction twist. Define $F_{\mu\nu}=\partial_\mu A_\nu-\partial_\nu A_\mu+[A_\mu,A_\nu]$ and $F_{\mu A}=D_\mu\Phi_A$. Before the twist, $F_{AB}=[\Phi_A,\Phi_B]$; afterward, $F_{0i}=D_0\Phi_i$, $F_{i0}=-F_{0i}$, and the other reduced internal components retain their commutator values. The vector multiplet is neutral under this flavor twist. The fields have $[A_\mu]=[\Phi_A]=[m_E]=\mathrm{mass}$, $[\Psi]=\mathrm{mass}^{3/2}$, and $[K_a]=\mathrm{mass}^2$; the seven $K_a$ are smooth adjoint-valued scalars carrying the source's auxiliary $SO(7)$ index.

Let $R_{ij}$ be the source's real antisymmetric anti-self-dual matrix on the $i=5,\ldots,8$ scalar directions, normalized by $R_{ij}R^{ij}=4$. Adopt the source's curvature-coupled Scherk--Schwarz action

$$S_{\mathcal N=2^*}=-\frac{1}{g_{\mathrm{YM}}^2}\int_{S^4_r}d^4x\sqrt g\,\operatorname{tr}_{\mathbf 2}\!\left(\frac12F_{MN}F^{MN}-\Psi\Gamma^MD_M\Psi+\frac{2}{r^2}\Phi_A\Phi^A-\frac{1}{4r}(R_{ki}M_{kj})\Phi^i\Phi^j-\sum_{a=1}^7K_aK_a\right).$$

Here $g_{\mathrm{YM}}>0$ is dimensionless, repeated ten-dimensional indices use the source's $(9,1)$ reduction metric before Euclidean continuation, and the trace is in the defining representation. In particular its four-dimensional gauge term is

$$S_{\mathrm{YM}}=\frac{1}{2g_{\mathrm{YM}}^2}\int_{S^4_r}d^4x\sqrt g\,(F_{\mu\nu},F^{\mu\nu}).$$

The displayed $S_{\mathcal N=2^*}$ is the local curvature-coupled action; the theta angle $\theta$ is real and dimensionless and enters the source's sector weights. The source's sector-weight convention is

$$\tau=\frac{4\pi i}{g_{\mathrm{YM}}^2}+\frac{\theta}{2\pi},\qquad q=e^{2\pi i\tau},$$

so a positive-instanton sector with formal label $k\in\mathbb Z_{\geq0}$ carries weight $q^k$, and the corresponding anti-instanton factor uses $\bar q^{\,k}$ on the physical real slice. This adopts the source's convention without classifying bundle sectors or constructing the path-integral measure.

The rigid background is the fixed round metric and spin structure, the trivial $SU(2)_R$ background bundle with zero connection, the mass background, and a nonzero smooth conformal Killing-spinor pair $(\epsilon,\widetilde\epsilon)$ satisfying

$$\nabla_\mu\epsilon=\widetilde\Gamma_\mu\widetilde\epsilon,\qquad \nabla_\mu\widetilde\epsilon=-\frac{1}{4r^2}\Gamma_\mu\epsilon.$$

Choose the source's N=2 projection $\Gamma_{5678}\epsilon=\epsilon$, the source's constant-unit-norm solution, and $\widetilde\epsilon\epsilon=0$. Use the same anti-self-dual matrix $R_{ij}$ as in the action to set $\Lambda=\frac14\Gamma^{ij}R_{ij}$, normalized by $\Lambda^2=-I$; the selected spinor pair satisfies $\widetilde\epsilon=\frac{1}{2r}\Lambda\epsilon$. Choose seven smooth auxiliary spinors $\nu_a$, $a=1,\ldots,7$, in the source's chiral spinor bundle satisfying

$$\epsilon\Gamma^M\nu_a=0,\qquad \frac12(\epsilon\Gamma_N\epsilon)\widetilde\Gamma^N_{\alpha\beta}=\sum_{a=1}^7\nu^a_\alpha\nu^a_\beta+\epsilon_\alpha\epsilon_\beta,\qquad \nu^a\Gamma^M\nu^b=\delta^{ab}\epsilon\Gamma^M\epsilon.$$

The selected supersymmetry transformation $s=\delta_\epsilon$ on the reduced physical and auxiliary fields is

$$sA_M=\Psi\Gamma_M\epsilon,\qquad s\Psi=\frac12\Gamma^{MN}F_{MN}\epsilon+\frac12\Gamma^{\mu A}\Phi_A\nabla_\mu\epsilon+\sum_{a=1}^7K_a\nu_a,\qquad sK_a=-\nu_a\Gamma^M D_M\Psi.$$

These are the off-shell transformations for this one selected generator; the finite set $K_a$ does not assert off-shell closure of the full N=2 hypermultiplet algebra. Their closure on the auxiliaries is

$$s^2K_a=-(\epsilon\Gamma^M\epsilon)D_MK_a-\sum_{b=1}^7(\nu_{[a}\Gamma^M D_M\nu_{b]})K_b-4(\widetilde\epsilon\epsilon)K_a.$$

Use the bilinear in exactly the source's order,
$$R^Q_{AB}=2\epsilon\widetilde\Gamma_{AB}\widetilde\epsilon,\qquad (\delta_R\Phi)_A=R^Q_{AB}\Phi^B,\qquad \delta_R\Psi=\tfrac14R^Q_{AB}\Gamma^{AB}\Psi.$$
Indices are raised with the reduction metric. The fixed normalized matrix $R_{ij}$ entering the mass action and $\Lambda$ above is distinguished from this dimensionful supercharge-square matrix $R^Q$. No interchange of $\epsilon$ and $\widetilde\epsilon$ is used: the stated transpose relation instead gives $2\widetilde\epsilon\Gamma_{AB}\epsilon=-R^Q_{AB}$. The source square is $s^2=-\mathscr L_v^{\mathrm{cov}}-\delta_R-\delta_\Omega-\delta_M$, with $v^M=\epsilon\Gamma^M\epsilon$, and $\delta_\Omega=0$ because $\widetilde\epsilon\epsilon=0$. Here $\mathscr L_v^{\mathrm{cov}}$ already contains the gauge connection: on an adjoint scalar $X$ it is $v^\mu D_\mu X+[v^A\Phi_A,X]$, on the connection it is $\iota_vF_A-D_A(v^A\Phi_A)$, and on spinors it includes the geometric spin lift. The positive-sign mass operator is $\delta_M\Phi_i=v^0M_{ij}\Phi_j$ and $\delta_M\chi=\tfrac14v^0M_{ij}\Gamma^{ij}\chi$ on the adjoint hypermultiplet Dirac fermion $\chi$, and zero on the vector multiplet; consequently $-\delta_M$ gives exactly Pestun (2.25).

For a chosen sector, supply a one-parameter principal-bundle lift of the base flow and its induced spin lift, and let $\mathcal L_v^{\mathrm{lift}}$ denote its infinitesimal pullback. In a local gauge frame write its vertical coefficient as $\beta_{v,P}$, so on adjoint scalars $\mathcal L_v^{\mathrm{lift}}X=v^\mu\partial_\mu X+[\beta_{v,P},X]$, and on connections $\mathcal L_v^{\mathrm{lift}}A=\mathcal L_v A-D_A\beta_{v,P}$. The difference $\mu_{v,A}=v^\mu A_\mu-\beta_{v,P}$ is a global adjoint section. Set $\kappa_v=\mu_{v,A}+v^A\Phi_A$ and $\phi=-\kappa_v$, and use $\delta_{\mathrm{gauge}}(u)X=[u,X]$, $\delta_{\mathrm{gauge}}(u)A=-D_Au$. Then
$$\mathscr L_v^{\mathrm{cov}}=\mathcal L_v^{\mathrm{lift}}+\delta_{\mathrm{gauge}}(\kappa_v),\qquad s^2=\delta_{\mathrm{gauge}}(\phi)-\mathcal L_v^{\mathrm{lift}}-\delta_R-\delta_M.$$
On scalars the vertical coefficients add to $v^\mu A_\mu+v^A\Phi_A$; on connections, $\mathcal L_v A-D_A(v^\mu A_\mu+v^A\Phi_A)=\iota_vF_A-D_A(v^A\Phi_A)$. This explicitly reconciles the split with Pestun's gauge-covariant Lie derivative, rather than counting a gauge action twice. The auxiliary bundle is a rank-seven real orthogonal bundle tensored with $\operatorname{ad}P$; its combined spin/flavor/index lift is fixed by the displayed exact formula for $s^2K_a$. Equivalently its nongauge generator is $\omega K_a=s^2K_a-[\phi,K_a]$, with $s^2K_a$ exactly as above; a further independent scalar $R^Q$ or hypermultiplet $M_{ij}$ action is not added to its seven index labels. In this formula $D_\mu K_a=\partial_\mu K_a+[A_\mu,K_a]$ and $D_AK_a=[\Phi_A,K_a]$; the auxiliary flavor rotation is placed in the index matrix rather than added to $D_0K_a$. On the gauge-singlet background spinors set $D_\mu\nu_a=\nabla_\mu\nu_a$, $D_0\nu_a=\tfrac14M_{ij}\Gamma^{ij}\nu_a$ and $D_A\nu_a=0$ in the other reduced directions. This allocation follows directly from the mass term in $sK_a=-\nu_a\Gamma^MD_M\Psi$: its $K_b$ contribution on applying $s$ again is $-\tfrac14\nu_a\Gamma^0M_{ij}\Gamma^{ij}\nu_b K_b$, the antisymmetric auxiliary-index rotation encoded by $\nu_{[a}\Gamma^0D_0\nu_{b]}$. It fixes the induced auxiliary action even when the background spinors vary, without assigning the four-dimensional hypermultiplet index range to the seven auxiliaries. The spacetime component $v^\mu$ rotates the two orthogonal coordinate planes with equal angular magnitudes $r^{-1}$, so $\epsilon_1=\epsilon_2=r^{-1}$ at the poles. These sectorwise lifts are formal model inputs, not existence theorems for arbitrary bundles.

For gauge fixing in each declared sector, choose a lift-invariant background connection $A_*$, set $a=A-A_*\in\Omega^1(S^4,\operatorname{ad}P)$, and use the background slice $d_{A_*}^*a=0$, with Faddeev–Popov operator $d_{A_*}^*D_A$ on smooth adjoint-valued scalar sections. Here $d_{A_*}^*$ is the metric adjoint of the exterior covariant derivative. Let $\mathfrak h_P=\ker D_{A_*}$ be the finite-dimensional stabilizer algebra, give sections the $L^2$ pairing from the round metric and $-\operatorname{tr}_{\mathbf2}(XY)$, and take nonzero modes in the smooth part of $\mathfrak h_P^\perp$. The chosen gauge charts assume the kernel of the Faddeev–Popov operator is exactly $\mathfrak h_P$ and the reduced operator is invertible; a primed determinant denotes only that restriction. These are formal chart/determinant inputs, not a global gauge-slice theorem. In the trivial sector with $A_*=0$ they reduce to the source's $d^*A=0$ and $d^*D_A$, with constant zero modes.

Let $c,\widetilde c$ be odd adjoint-valued smooth ghost/antighost scalar fields and $b$ an even multiplier of the same bundle type. The even variables $a_0,\widetilde a_0,b_0$ and odd $c_0,\widetilde c_0$ lie in $\mathfrak h_P$, which the lift fixes pointwise. They are parallel background zero modes, and are literally constant only in the trivial background frame. In the cohomological change of variables, $X$ is a homogeneous physical/auxiliary doublet coordinate, $X'=sX$ has the opposite parity, and the even unpaired parameter is $\phi=-\kappa_v$ above. On tensor fields set $[\omega,X]=-(\mathcal L_v^{\mathrm{lift}}+\delta_R+\delta_M)X$, with the auxiliary action fixed by its exact square as above. On ghosts and multipliers set $[\omega,c]=-\mathcal L_v^{\mathrm{lift}}c$ and likewise for the other adjoint scalar ghost fields; there is no R/flavor charge. On connections $[\omega,A]=-\mathcal L_v^{\mathrm{lift}}A$. The source's supersymmetry complex is $sX=X'$, $sX'=[\phi+\omega,X]$, $s\phi=0$, and for the connection $sA=\psi\in\Omega^1(S^4,\operatorname{ad}P)$ with $s\psi=\delta_{\mathrm{gauge}}(\phi)A+[\omega,A]$. Brackets with two homogeneous matrix fields are parity-graded, and brackets with $\omega$ denote the just-defined linear symmetry operator.

The source's BRST-like differential $\delta$ and its supersymmetry differential $s$ act on this combined complex by

$$\begin{aligned} \delta X&=-[c,X],&\delta X'&=-[c,X'],&\delta A_\mu&=-[c,\nabla_\mu],&\delta c&=-a_0-\frac12[c,c],&\delta\widetilde c&=b,&\delta a_0&=0,\\ \delta\phi&=-[c,\phi]+[\omega,c],&\delta\widetilde a_0&=\widetilde c_0,&\delta b_0&=c_0,&\delta b&=[a_0,\widetilde c],&\delta\widetilde c_0&=[a_0,\widetilde a_0],&\delta c_0&=[a_0,b_0],\\ s a_0&=0,&sX&=X',&sX'&=[\phi+\omega,X],&s\phi&=0,&s c&=\phi,&s\widetilde c&=0,\\ s\widetilde a_0&=0,&s b_0&=0,&s b&=[\omega,\widetilde c],&s\widetilde c_0&=0,&s c_0&=0. \end{aligned}$$

Here $X$ ranges over physical and auxiliary fields, and $\delta A_\mu$ is the infinitesimal gauge action on a connection. Summing the two displayed differentials gives $QX=X'-[c,X]$, $QX'=[\phi+\omega,X]-[c,X']$, $QA_\mu=sA_\mu-[c,\nabla_\mu]$, $Qc=\phi-a_0-\frac12[c,c]$, $Q\widetilde c=b$, $Q\phi=-[c,\phi]+[\omega,c]$, $Qa_0=0$, $Q\widetilde a_0=\widetilde c_0$, $Qb_0=c_0$, $Qb=[a_0+\omega,\widetilde c]$, $Q\widetilde c_0=[a_0,\widetilde a_0]$, and $Qc_0=[a_0,b_0]$. The source's mixed squares are $\delta^2=[a_0,\cdot]$, $s^2=[\phi+\omega,\cdot]$, and $\{s,\delta\}=-[\phi,\cdot]$ on physical/auxiliary fields; on gauge-fixing ghosts other than the unpaired $\phi$, $s^2=0$ and $\{s,\delta\}$ is the $\omega$-action. Thus $Q^2=[a_0+\omega,\cdot]$, the gauge transformation by $a_0\in\mathfrak h_P$ together with the selected combined spacetime/R/flavor action. Here $\delta\phi=-[c,\phi]+[\omega,c]=-[c,\phi+\omega]$ in semidirect-product notation follows the total complex (4.12), rather than the differently ordered entry printed in (4.10). For example $s\delta c=-[\phi,c]$ and $\delta sc=\delta\phi$ give $\{s,\delta\}c=[\omega,c]$, and the graded Jacobi identity yields $Q^2c=[a_0,c]+[\omega,c]$. The chosen $\omega$ action fixes all zero-mode parameters. The sectorwise zero-mode and gauge-fixing prescription remains formal.

For completeness the invariant gauge-fixed insertion is $S_{\mathrm{gf}}^Q=Q\Psi_{\mathrm{gf}}$, not the Faddeev–Popov part alone. With positive gauge parameters $\xi_1,\xi_2$ and the declared $L^2$ pairing, take
$$\Psi_{\mathrm{gf}}=(\widetilde c,\,i d_{A_*}^*a+\tfrac{\xi_1}{2}b+i b_0)-(c,\,\widetilde a_0-\tfrac{\xi_2}{2}a_0).$$
The background and zero-mode invariance give $Q^2\Psi_{\mathrm{gf}}=[a_0+\omega,\Psi_{\mathrm{gf}}]=0$, so $QS_{\mathrm{gf}}^Q=0$ in the adopted algebra. With $\psi=sA$, its supersymmetry correction to $\delta\Psi_{\mathrm{gf}}$ is $-(\widetilde c,i d_{A_*}^*\psi+\tfrac{\xi_1}{2}[\omega,\widetilde c])-(\phi,\widetilde a_0-\tfrac{\xi_2}{2}a_0)$. These are the explicit sectorwise formal completion data; no equivalence of constructed infinite-dimensional measures is inferred.

On the Euclidean contour, gauge and hypermultiplet fields take values in the real Lie algebra $\mathfrak u(2)$; the scalar descending from the time component is continued as $\Phi_0=i\Phi_0^E$, and the seven localization auxiliaries as $K_a=iK_a^E$, with $\Phi_0^E,K_a^E$ real $\mathfrak u(2)$-valued fields. The finite-dimensional Coulomb matrix $a_{\mathrm C}$ is the zero mode $\Phi_0^E$ integrated over $\mathfrak u(2)$, while the continued physical scalar is $\Phi_0=i a_{\mathrm C}$. The real mass $m_E$ and pole weights $\epsilon_i$ have mass dimension one. In the source's finite-dimensional Coulomb convention, $a_E=(a_1^E,a_2^E)\in\mathbb R^2$ parametrizes the skew-Hermitian Cartan element $a_{\mathrm C}=i\operatorname{diag}(a_1^E,a_2^E)$; the one-loop and Nekrasov factors use the continued arguments $ia_E$ and $a^{\mathrm P}=ia_E$, respectively. This fixes the contour relation but constructs no field-space measure. Let $\Sigma$ denote the chosen noncommutative $\mathbb R^4$ regulator for the instanton sectors, with its $U(1)^2$ rotations and the above $\epsilon_i$. Adopt the additional source assumption that a supersymmetry-compatible noncommutative deformation on $S^4_r$ exists and agrees near each pole with Nekrasov's noncommutative $\mathbb R^4$ deformation. Pestun explicitly does not construct this $S^4$ deformation. The gauge-fixed functional measure and this regulator extension remain formal model inputs; this postulate proves no measure existence, anomaly cancellation, regulator-removal limit, continuum Q-exact identity, or empirical claim.

## Postulate references

[Pestun, §§1–5 and Appendix C](https://arxiv.org/pdf/0712.2824)

[Peelaers, Lecture 1 §§1.1–1.2 and Lecture 2](https://indico.math.cnrs.fr/event/3026/attachments/2163/2457/Peelaers-LectureNotes.pdf)

[[def-qftx-susy-background-data|Rigid supersymmetric background and localization data]]
