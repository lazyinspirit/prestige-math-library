---
id: thm-qftx-taubes-arbitrary-divisor-plane-vortex
kind: theorem
title: Planar critical vortices for arbitrary finite divisors
status: draft
origin: pipeline
domain: mathematics
library: mathematics
deps:
- def-qftx-critical-abelian-higgs-divisor-data
- lem-qftx-taubes-disk-barriers-and-monotone-iteration
- def-axiom-of-choice
- thm-interior-w-two-p-estimate-for-uniformly-elliptic-equations
- thm-interior-schauder-estimate-for-uniformly-elliptic-equations
- thm-higher-order-sobolev-embedding
- thm-extension-theorem-for-bounded-smooth-domains
- thm-weak-maximum-principle-for-coercive-divergence-form-equations
- thm-strong-maximum-principle-for-classical-subharmonic-functions
- cor-real-and-euclidean-vector-valued-ascoli-arzela
dependency_roles:
  def-qftx-critical-abelian-higgs-divisor-data: mathematical-premise
  lem-qftx-taubes-disk-barriers-and-monotone-iteration: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-interior-w-two-p-estimate-for-uniformly-elliptic-equations: mathematical-premise
  thm-interior-schauder-estimate-for-uniformly-elliptic-equations: mathematical-premise
  thm-higher-order-sobolev-embedding: mathematical-premise
  thm-extension-theorem-for-bounded-smooth-domains: mathematical-premise
  thm-weak-maximum-principle-for-coercive-divergence-form-equations: mathematical-premise
  thm-strong-maximum-principle-for-classical-subharmonic-functions: mathematical-premise
  cor-real-and-euclidean-vector-valued-ascoli-arzela: mathematical-premise
dependency_level: 2
axiom_base: ZF + full Axiom of Choice; AC supports the finite-disk subsequence extraction and the stated compactness/regularity suppliers. No physical premise.
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: Clifford H. Taubes, Arbitrary N-vortex solutions to the first order Ginzburg-Landau equations, Communications in Mathematical Physics 72 (1980), 277–292
    url: https://doi.org/10.1007/BF01197552
    locator: Primary theorem attribution. Publisher metadata/abstract were inspected; the article proof text was not retrieved. No proof step below is attributed to unseen text.
  - title: 'David Tong, TASI Lectures on Solitons, Lecture 3: Vortices'
    url: https://www.damtp.cam.ac.uk/user/tong/tasi/vortex.pdf
    locator: '§§3.1–3.3, printed pp. 70–75: model, critical square completion and arbitrary-position context; no analytic arbitrary-divisor proof.'
  - title: Shouxin Chen and Yisong Yang, Existence of Multiple Vortices in Supersymmetric Gauge Field Theory
    url: https://arxiv.org/pdf/1203.3071
    locator: '§§2–3 and 5–7, PDF pp. 2–20: independent scalar reduction, full-plane existence/uniqueness, decay and flux treatment; model-normalization limits are recorded in batch coverage.'
---

## Statement

Assume the Axiom of Choice. Fix $e>0$, $\xi>0$, $\kappa=2e^2\xi$, and an effective finite divisor $D=\sum_{j=1}^Jm_j[z_j]$ on $\mathbb C$ with distinct centers and positive integer multiplicities; let $N=\sum_jm_j$. There is a unique real scalar function $h$, smooth on $\mathbb C\setminus\{z_j\}$, such that $h-2m_j\log|z-z_j|$ extends smoothly across each center, $h\to0$ as $|z|\to\infty$, and
$$\Delta h+\kappa(1-e^h)=4\pi\sum_{j=1}^Jm_j\delta_{z_j}$$
in distributions, where $\langle\delta_z,\psi\rangle=\psi(z)$ for $\psi\in C_c^\infty(\mathbb R^2)$. For $N>0$, $h<0$ off the divisor; for the empty divisor, $h=0$. With $P(z)=\prod_j(z-z_j)^{m_j}$, $s=2\log|P|$, and the orientation $*dx_1=dx_2$, $*dx_2=-dx_1$, the fields
$$q(z)=\sqrt\xi\,e^{(h(z)-s(z))/2}P(z),\qquad A=-\tfrac12 *d(h-s)$$
extend smoothly across the centers and solve $(D_{A,1}+iD_{A,2})q=0$ and $B=e^2(\xi-|q|^2)$, where $D_A=d-iA$ and $B\,dx_1\wedge dx_2=dA$. They have finite energy
$$E(A,q)=\int_{\mathbb R^2}\left(\frac{B^2}{2e^2}+|D_{A,1}q|^2+|D_{A,2}q|^2+\frac{e^2}{2}(|q|^2-\xi)^2\right)dx_1dx_2$$
and flux $\int_{\mathbb R^2}B\,dx_1dx_2=2\pi N$. For every $0<\alpha<\sqrt\kappa$ and every multi-index $\beta$, $|\partial^\beta h(z)|=O(e^{-\alpha|z|})$ as $|z|\to\infty$; the curvature $B$ and covariant gradient $D_Aq$ have the same exponential decay. On the exterior of a disk, the local gauge $e^{-i\arg P}$ gives $q_{\mathrm{ext}}=\sqrt\xi e^{h/2}$ and $A_{\mathrm{ext}}=-\tfrac12 *dh$, so the fields approach the vacuum exponentially in that exterior gauge; the raw global representative $q$ need not have an exponentially small phase correction. Negative winding $-N$ is obtained by complex conjugation and $A\mapsto-A$, with flux $-2\pi N$.

## Statement references

[Primary arbitrary-divisor theorem attribution (Taubes, 1980; proof text not retrieved)](https://doi.org/10.1007/BF01197552)

[Critical Abelian-Higgs normalization and first-order equations (Tong, §§3.1–3.2)](https://www.damtp.cam.ac.uk/user/tong/tasi/vortex.pdf)

[Independent scalar reduction, full-plane existence and decay (Chen–Yang, §§2–7)](https://arxiv.org/pdf/1203.3071)

## Facts & Assumptions

**Given:** The constants, divisor and scalar/gauge conventions stated above.

[A1] Full AC is the declared base; it includes Countable Choice for the Sobolev and elliptic suppliers and supports the diagonal subsequence selection. ([[def-axiom-of-choice]])

[F1] [[def-qftx-critical-abelian-higgs-divisor-data]]: $D_A=d-iA$, $B=dA$, $\kappa=2e^2\xi$, $\Delta\log|z-z_j|^2=4\pi\delta_{z_j}$, and the positive first-order equations are $(D_1+iD_2)q=0$, $B=e^2(\xi-|q|^2)$.

[F2] [[lem-qftx-taubes-disk-barriers-and-monotone-iteration]]: for every exhausting disk $D_R$, it supplies $u_R$ with $u_-\le u_R\le0$, the exact divisor equation and smooth center subtraction, plus $R$-uniform local $W^{2,p}$ and $C^{2,\alpha}$ bounds after subtracting the fixed logarithmic singular function $s$.

[F3] [[thm-interior-w-two-p-estimate-for-uniformly-elliptic-equations]]: for $p>2$ on a two-dimensional ball, the interior $W^{2,p}$ norm is bounded by the local $L^p$ norms of the solution and its Laplacian.

[F4] [[thm-interior-schauder-estimate-for-uniformly-elliptic-equations]]: a bounded classical solution of a uniformly elliptic equation with $C^{0,\alpha}$ right-hand side and coefficients is $C^{2,\alpha}$ on a smaller ball with the stated estimate.

[F5] [[thm-higher-order-sobolev-embedding]] and [[thm-extension-theorem-for-bounded-smooth-domains]]: on each bounded disk, $W^{2,p}$ for $p>2$ supplies $C^{1,\beta}$ representatives for $0<\beta<1-2/p$.

[F6] Under full AC, every pointwise bounded equicontinuous sequence of maps from a nonempty compact metric space into a finite-dimensional real Euclidean space has a uniformly convergent subsequence. [[cor-real-and-euclidean-vector-valued-ascoli-arzela]]

[F7] [[thm-weak-maximum-principle-for-coercive-divergence-form-equations]]: a real weak subsolution of $-\Delta w+c(x)w=0$ on a bounded smooth disk, with $c\ge0$ and nonpositive boundary trace, has nonpositive essential supremum.

[F8] [[thm-strong-maximum-principle-for-classical-subharmonic-functions]]: a classical subharmonic function on a connected domain that attains an interior maximum is constant.

## Proof

**Given:** The assumptions and conventions in the Statement.

1.1 Choose radii $R_k\to\infty$ with every center in $D_{R_k}$. Let $s=2\sum_jm_j\log|z-z_j|$ and $w_k=u_{R_k}-s$. For each compact disk $K$ and each $0<\alpha<1$, [F2] gives a uniform $C^{2,\alpha}$ bound on $w_k$ on a slightly larger disk. Thus $(w_k,Dw_k,D^2w_k)$ is uniformly bounded and equicontinuous there. Apply the Euclidean sequence statement [F6] to the finite derivative tuple on each nonempty compact disk. A countable diagonal selection under [A1] then gives locally uniform convergence of $w_k$ and all its derivatives through order two. The fundamental theorem of calculus on coordinate segments identifies the limiting derivative tuple as the first and second derivatives of one $C^2$ function w. Thus the subsequence converges in $C^2$ on every compact disk. Set $h=s+w$. [A1, F2, F6, given, algebra]

2.1 On every compact set, $e^{u_{R_k}}=e^s e^{w_k}$ converges uniformly to $e^h$. Passing to the limit in the weak divisor equation for $u_{R_k}$ gives $\Delta h+\kappa(1-e^h)=4\pi D$ distributionally. Since $s-2m_j\log|z-z_j|$ is smooth near each center and $w$ is $C^2$ there, the prescribed logarithmic subtraction extends continuously. The equation for $w$ is $\Delta w=\kappa(e^s e^w-1)$ with smooth coefficient $e^s=|P|^2$; repeated interior Schauder regularity [F4] bootstraps $w$ to $C^\infty$, so each center subtraction is smooth. The bounds $u_-\le u_{R_k}\le0$ pass to the limit, and $u_-(z)\to0$ at infinity; hence $h\le0$ and $h\to0$. [F1, F2, F4, step 1.1, algebra]

3.1 If $h_1,h_2$ are two solutions with the same divisor and boundary condition, $v=h_1-h_2$ extends smoothly across the centers. Subtracting their equations gives $\Delta v-c(z)v=0$, where $c(z)=\kappa\int_0^1 e^{(1-t)h_2+th_1}\,dt\ge0$, extended continuously by $0$ at the centers. On $D_R$, the weak maximum principle [F7] applied to $v$ and $-v$ bounds $|v|$ by $\sup_{\partial D_R}|v|$. This boundary supremum tends to $0$ as $R\to\infty$, so $v=0$ and the scalar solution is unique. When $D$ is empty, $h=0$ is a solution and the same uniqueness argument shows it is the only one. [F7, step 2.1, algebra]

3.2 Suppose $N>0$ and put $w=-h\ge0$. Away from the divisor, $\Delta w=\kappa(1-e^{-w})\le\kappa w$. On $\Omega=(\mathbb R^2\setminus\{z_j\})\times(-\pi/(2\sqrt\kappa),\pi/(2\sqrt\kappa))$, define $U(z,t)=-w(z)\cos(\sqrt\kappa t)$. Then $U\le0$ and $\Delta_{z,t}U=\cos(\sqrt\kappa t)(\kappa w-\Delta w)\ge0$. The finite-punctured plane is path connected (polygonal paths can detour around finitely many points), hence $\Omega$ is connected. If $w$ vanished at a point, $U$ would attain its maximum $0$ in $\Omega$; [F8] would force $U\equiv0$, so $w\equiv0$ off the divisor, contradicting $w(z)\to+\infty$ at each positive-multiplicity center. Thus $h<0$ away from the divisor. [F8, step 2.1, algebra]

3.3 Fix $0<\alpha<\sqrt\kappa$. Since $w=-h\to0$, choose $c$ with $\alpha^2<c<\kappa$ and $R_0$ so large that $\kappa(1-e^{-w})\ge c w$ for $|z|\ge R_0$. Let $\varphi(z)=C e^{-\alpha(|z|-R_0)}$ with $C\ge\sup_{|z|=R_0}w$. For $r=|z|\ge R_0$, $\Delta\varphi=(\alpha^2-\alpha/r)\varphi<c\varphi$, so $(\Delta-c)(w-\varphi)\ge0$. The function $w-\varphi$ is nonpositive on $|z|=R_0$ and tends to $0$ at infinity. If it were positive somewhere, its positive maximum would be attained at a finite interior point, where $(\Delta-c)(w-\varphi)<0$, a contradiction. Therefore $0\le w\le\varphi$, proving the claimed scalar exponential bound. [step 2.1, algebra]

3.4 Let $P(z)=\prod_j(z-z_j)^{m_j}$ and $s=2\log|P|$. The factor $h-s$ is smooth on all of $\mathbb C$. Define $q=\sqrt\xi e^{(h-s)/2}P$ and $A=-\frac12*d(h-s)$; both extend smoothly over the centers and $q$ has exactly the prescribed zeros. On the punctured plane write $P=|P|e^{i\chi}$; holomorphicity gives $d\chi=\frac12*ds$, hence $A=d\chi-\frac12*dh$. Writing $q=\sqrt\xi e^{h/2}e^{i\chi}$ and using $*dh=( -\partial_2h)dx_1+(\partial_1h)dx_2$ gives $D_{A,1}q=\frac12e^{i\chi}\sqrt\xi e^{h/2}(\partial_1h-i\partial_2h)$ and $D_{A,2}q=\frac12e^{i\chi}\sqrt\xi e^{h/2}(\partial_2h+i\partial_1h)$, so $D_{A,1}q+iD_{A,2}q=0$. [F1, step 2.1, algebra]

4.1 To obtain derivative decay, fix $\alpha<\alpha'<\sqrt\kappa$ and use step 3.3 at rate $\alpha'$. On each unit ball centered at large $z$, both $w$ and $\Delta w=\kappa(1-e^{-w})$ are $O(e^{-\alpha'|z|})$. By [F3] and [F5], $w$ has a $C^{1,\beta}$ norm of that order on the concentric half-ball for some $\beta>0$. Thus the right-hand side has a $C^{0,\beta}$ norm of the same order, and [F4] gives $C^{2,\beta}$ decay on a smaller ball. Inductively, for each multi-index $\gamma$, differentiating $\Delta w=\kappa(1-e^{-w})$ gives $\Delta D^\gamma w=\kappa e^{-w}D^\gamma w+G_\gamma$, where $G_\gamma$ is a finite sum of products of lower derivatives of $w$ and is exponentially small by the induction hypothesis. Applying [F3] and [F4] on nested unit balls gives the same $e^{-\alpha'|z|}$ bound for two more derivatives. Since $e^{-\alpha'|z|}\le e^{-\alpha|z|}$ outside a fixed disk, every finite derivative has the stated rate. [F3, F4, F5, step 3.3, algebra]

5.1 The curvature is $dA=-\frac12\Delta(h-s)\,dx_1\wedge dx_2$. Since $\Delta s=4\pi D$ and $h$ satisfies the divisor equation, $\Delta(h-s)=-\kappa(1-e^h)$; therefore $B=\frac\kappa2(1-e^h)=e^2(\xi-|q|^2)$. On the exterior of a disk, $e^{-i\chi}$ is a smooth local gauge, not asserted to extend across the zeros; it gives $q_{\mathrm{ext}}=\sqrt\xi e^{h/2}$ and $A_{\mathrm{ext}}=-\frac12*dh$. The phase satisfies $\chi=N\theta+O(r^{-1})$ because $P(z)=z^N\prod_j(1-z_j/z)^{m_j}$. Thus the gauge-invariant $B,D_Aq$ decay exponentially by step 4.1, while no exponential decay of the raw phase correction is claimed. [F1, step 4.1, step 3.4, algebra]

6.1 The reconstructed fields are smooth on compact sets. In the exterior gauge of step 5.1, $B$, $D_Aq$, and $|q|^2-\xi=\xi(e^h-1)$ all decay exponentially, so each squared term in the defining energy is integrable on $\mathbb R^2$; hence the energy is finite. To compute flux, write $v=h-s$, so $\Delta v=-\kappa(1-e^h)$. Since $v$ is smooth at the origin, polar coordinates and the one-variable fundamental theorem of calculus give
$$\int_{D_R}\Delta v\,dx_1dx_2=\int_0^{2\pi}\int_0^R\partial_r(r\partial_rv)\,dr\,d\theta=\int_0^{2\pi}R\partial_rv(R,\theta)\,d\theta,$$
as $r\partial_rv\to0$ at $r=0$. By step 4.1, $\partial_rh$ decays exponentially; from $s=2N\log r+O(r^{-1})$, $\partial_rs=2N/R+O(R^{-2})$ uniformly in $\theta$. Therefore the boundary integral tends to $-4\pi N$, so $\kappa\int_{\mathbb R^2}(1-e^h)=4\pi N$. Using $B=\frac\kappa2(1-e^h)$ gives flux $2\pi N$. For the empty divisor $h=0$, the reconstruction is the flat constant vacuum and has zero flux. [F1, step 2.1, step 4.1, step 5.1, algebra] ∎
## Proof references

[Primary theorem attribution (Taubes, 1980; full proof text unavailable after recorded attempts)](https://doi.org/10.1007/BF01197552)

[Critical model and square completion (Tong, §§3.1–3.2)](https://www.damtp.cam.ac.uk/user/tong/tasi/vortex.pdf)

[Independent U(1) scalar reduction, existence and decay (Chen–Yang, §§2–7)](https://arxiv.org/pdf/1203.3071)
