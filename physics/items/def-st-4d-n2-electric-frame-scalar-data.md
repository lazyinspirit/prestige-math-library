---
id: def-st-4d-n2-electric-frame-scalar-data
kind: definition
title: Four-Dimensional $N=2$ Electric-Frame Scalar Data
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: physics
library: physics
deps: []
dependency_roles: {}
physical_scope: "Regular local scalar and gauging data in the two-derivative electric-frame N=2 convention used for the matter-coupled scalar-potential calculation; no existence theorem for a compactification or global special-geometry patch is asserted."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "L. Andrianopoli et al., N=2 Supergravity and N=2 Super Yang-Mills Theory on General Scalar Manifolds: Symplectic Covariance, Gaugings and the Momentum Map"
      url: "https://arxiv.org/pdf/hep-th/9605032v1"
      locator: "§4.3, equations (4.27)–(4.34), and §§5.1, 7.3 and 9; local special-geometry differential identities, quaternionic geometry, moment maps, and electric-frame potential."
    - title: "L. Andrianopoli et al., Observations on BI from N=2 SUGRA and the General Ward Identity"
      url: "https://arxiv.org/pdf/1508.01474v2"
      locator: "§2, equations (2.10)–(2.26), Appendix A equations (A.10)–(A.15), (A.30)–(A.35), (A.39), and (A.45)–(A.58), and Appendix B; special-geometry compatibility, quaternionic parallelism and curvature, gauging, and contraction identities."
    - title: "Jan Louis, Introduction to Supersymmetry and Supergravity"
      url: "https://www.physik.uni-hamburg.de/th2/ag-louis/dokumente/lectures/ws-15-16/ws-15-susy-lecture-notes.pdf"
      locator: "§§13.1–13.2, introductory special-Kähler symplectic section and quaternionic scalar geometry; precise gauging identities and potential use the Andrianopoli references; full lecture notes."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---
## Definition

Fix integers $n_V,n_H\geq0$, natural units $\hbar=c=1$, and source convention $M_P=1$. Let $U\subseteq\mathbb C^{n_V}$ and $Q\subseteq\mathbb R^{4n_H}$ be open coordinate domains, with complex coordinates $z^i$ on $U$ and real coordinates $q^u$ on $Q$; a zero-dimensional factor is a point. All fields below are $C^\infty$ on their stated domains, and every section and coefficient in a displayed contraction is finite there. The vector index is $\Lambda=0,\ldots,n_V$, including the graviphoton. A regular **special-Kähler electric-frame datum** consists locally on $U$ of a real smooth potential $K_{\rm SK}$ and a smooth positive Hermitian metric $g_{i\bar j}=\partial_i\partial_{\bar j}K_{\rm SK}$, together with a flat rank-$2(n_V+1)$ real symplectic vector bundle whose local frames have constant symplectic transition matrices. Its fiber pairing is a nondegenerate antisymmetric form $\langle\cdot,\cdot\rangle$, and its local section $\mathcal V$ is smooth and satisfies
$$\mathcal V=(L^\Lambda,M_\Lambda),\qquad i\langle\overline{\mathcal V},\mathcal V\rangle=1,\qquad D_{\bar i}\mathcal V:=\left(\partial_{\bar i}-\frac12\partial_{\bar i}K_{\rm SK}\right)\mathcal V=0.$$
On this section use $D_i:=\partial_i+\tfrac12\partial_iK_{\rm SK}$ and set $f_i^\Lambda:=D_iL^\Lambda$, write $\bar f_{\bar i}^\Lambda:=\overline{f_i^\Lambda}$, and
$$U^{\Lambda\Sigma}:=g^{i\bar j}f_i^\Lambda\bar f_{\bar j}^{\Sigma}.$$
For every symplectic slot $M$, define $U_i^M:=(\partial_i+\tfrac12K_{{\rm SK},i})\mathcal V^M$ and $\bar U_{\bar i}^M:=\overline{U_i^M}$. Require the local special-geometry identities of the cited source: there is a smooth symmetric tensor $\mathscr C_{ijk}$ of Kähler weight $2$ satisfying $(\partial_{\bar\ell}-K_{{\rm SK},\bar\ell})\mathscr C_{ijk}=0$, and
$$\mathcal D_iU_j^M:=\left(\partial_i+\tfrac12K_{{\rm SK},i}\right)U_j^M-\Gamma^k{}_{ij}U_k^M=i\mathscr C_{ijk}g^{k\bar\ell}\bar U_{\bar\ell}^M,\qquad \mathcal D_i\bar U_{\bar j}^M:=\left(\partial_i-\tfrac12K_{{\rm SK},i}\right)\bar U_{\bar j}^M=g_{i\bar j}\overline{\mathcal V}^M,$$
$$\langle\mathcal V,U_i\rangle=0,\qquad \langle\mathcal V,\bar U_{\bar i}\rangle=0.$$
Here $\Gamma^k{}_{ij}:=g^{k\bar\ell}\partial_i g_{j\bar\ell}$ is the Levi-Civita connection coefficient in these Kähler coordinates. The tensor $\mathscr C_{ijk}$ is distinct from the symplectic matrix $C_{\alpha\beta}$ below.
No prepotential representation is assumed. Write a symplectic slot as $M=(\mathrm e,\Lambda)$ or $M=(\mathrm m,\Lambda)$, for $0\leq\Lambda\leq n_V$; these are the electric and magnetic blocks denoted by $M=(\Lambda,\Lambda)$ in the source, where upper/lower placement distinguishes the blocks. In this local frame $\mathcal V^M=(L^\Lambda,M_\Lambda)$ retains both blocks. An **electric frame** is a choice of symplectic basis separating electric and magnetic slots in which the vector potentials and gauging labels are electric. An electric gauging has embedding tensor supported on the electric slots in both generator sectors defined below, $\Theta_{(\mathrm m,\Lambda)}{}^a=\Theta_{(\mathrm m,\Lambda)}{}^m=0$; it does not set the magnetic section components $M_\Lambda$ to zero. In contractions with electric gauging data, only the electric slot of the section is selected, so those contractions are written with $L^\Lambda$ and electric labels $\Lambda$.

The hypermultiplet scalar patch is $Q$, with a smooth positive-definite Riemannian metric $h_{uv}$ and smooth endomorphism fields $J^x:TQ\to TQ$, $x=1,2,3$, satisfying
$$J^xJ^y=-\delta^{xy}I+\epsilon^{xyz}J^z,\qquad h(J^xv,J^xw)=h(v,w)$$
for all tangent vectors $v,w$. Define the associated real two-forms by $K^x(v,w):=h(v,J^xw)$, equivalently $K^x_{uv}:=h_{uw}(J^x)^w{}_v$ and $K^x=\tfrac12 K^x_{uv}dq^u\wedge dq^v$, with summation over both tangent indices. The source instead writes $K^x_{\rm src}=K^x_{uv}dq^u\wedge dq^v=2K^x$; its coefficient array $K^x_{uv}=h_{uw}(J^x)^w{}_v$ is the same one used here in all component identities. A smooth local $SU(2)$ connection $\omega^x$ makes these forms parallel in its adjoint representation:
$$dK^x+\epsilon^{xyz}\omega^y\wedge K^z=0.$$
Its curvature is $\Omega^x:=d\omega^x+\tfrac12\epsilon^{xyz}\omega^y\wedge\omega^z$; require $\Omega^x=2\lambda K^x$ and fix the source local-supergravity normalization $\lambda=-1$ and $\epsilon^{123}=+1$, so $\Omega^x=-2K^x$. This is precisely the source relation $\Omega^x=\lambda K^x_{\rm src}$ in the explicitly stated exterior-form convention. A gauging supplies the following local Killing fields. On $U$, $k_\Lambda=k_\Lambda^i\partial_i+\overline{k_\Lambda^i}\partial_{\bar i}$ is real and holomorphic ($\partial_{\bar j}k_\Lambda^i=0$) and satisfies $\mathcal L_{k_\Lambda}g=0$. On $Q$, $k_\Lambda=k_\Lambda^u\partial_u$ is real and satisfies $\mathcal L_{k_\Lambda}h=0$ while preserving the quaternionic subbundle $\mathscr Q=\operatorname{span}_{\mathbb R}\{J^1,J^2,J^3\}\subset\operatorname{End}(TQ)$, meaning $\mathcal L_{k_\Lambda}\mathscr Q\subseteq\mathscr Q$. The real triplet moment maps $P_\Lambda^x\in C^\infty(Q,\mathbb R)$ obey
$$2\iota_{k_\Lambda}K^x=-\nabla P_\Lambda^x,\qquad \nabla_vP_\Lambda^x=-2k_\Lambda^uK^x_{uv},\qquad \nabla P^x=dP^x+\epsilon^{xyz}\omega^yP^z.$$
Here contraction uses $(\iota_kK^x)(v)=K^x(k,v)$. The triplets $P_\Lambda^x$ retain the source normalization; no rescaling of the moment maps, Killing fields, scalar metric, fermion shifts, or component equivariance relation below is made.
For electric gauge generators with structure coefficients $X_{\Lambda\Sigma}{}^\Gamma$ (the electric restriction of $X_{MN}{}^P$), their vector fields close by $[k_\Lambda,k_\Sigma]=-X_{\Lambda\Sigma}{}^\Gamma k_\Gamma$ in the source convention. Impose the local quaternionic equivariance relation
$$2K^x_{uv}k_\Lambda^u k_\Sigma^v+\epsilon^{xyz}P_\Lambda^yP_\Sigma^z=X_{\Lambda\Sigma}{}^\Gamma P_\Gamma^x.$$
The gauging is admissible only when the isometries close and the special-Kähler gauging obeys the source locality and equivariance constraints.

For the gauging constraints, distinguish the special-Kähler generators $t_a$ acting on $U$ from the quaternionic-Kähler generators $t_m$ acting on $Q$. The labels $a$ and $m$ range over fixed bases of these two isometry Lie algebras; the letter $m$ here is a generator label, distinct from the magnetic-slot tag $\mathrm m$. Their Killing fields are respectively $k_a^i$ and $k_m^u$. The real special-Kähler scalar moment map $P_a\in C^\infty(U,\mathbb R)$ obeys $k_a^i=i g^{i\bar j}\partial_{\bar j}P_a$, while the real quaternionic triplet $P_m^x\in C^\infty(Q,\mathbb R)$ obeys the quaternionic moment-map equation above with $k_m$. Let $C^{MN}$ be the canonical antisymmetric symplectic pairing and let the constant embedding-tensor blocks be $\Theta_M{}^a$ and $\Theta_M{}^m$. The section derivatives $U_i^M$ and $\bar U_{\bar i}^M$ are the local-special-geometry data defined above. In the source equations (2.16) and (2.22), the combined gauge generator and embedded Killing fields and moment maps are
$$X_M:=\Theta_M{}^a t_a+\Theta_M{}^m t_m,\qquad k_M^i:=\Theta_M{}^a k_a^i,\qquad k_M^u:=\Theta_M{}^m k_m^u,$$
$$P_M:=\Theta_M{}^aP_a,\qquad P_M^x:=\Theta_M{}^mP_m^x.$$
In particular the triplet is embedded from the quaternionic generators, not from an undeclared $P_a^x$. Its electric components are precisely the previously specified $P_\Lambda^x=\Theta_{(\mathrm e,\Lambda)}{}^m P_m^x$; similarly $k_\Lambda^u=\Theta_{(\mathrm e,\Lambda)}{}^m k_m^u$. Only the special-Kähler generators have the indicated symplectic matrix action, so $X_{MN}{}^P:=\Theta_M{}^a(t_a)_N{}^P$. In this electric frame both $\Theta_{(\mathrm m,\Lambda)}{}^a=0$ and $\Theta_{(\mathrm m,\Lambda)}{}^m=0$. The source closure convention is $[X_M,X_N]=-X_{MN}{}^P X_P$. Here $\Theta_P$ in the mixed-shift identity below denotes a fixed covector projection from the image of this embedding tensor. The source linear and quadratic locality constraints include $\Theta_M{}^aC^{MN}\Theta_N{}^b=0$, $\Theta_M{}^aC^{MN}\Theta_N{}^n=0$, and $\Theta_M{}^mC^{MN}\Theta_N{}^n=0$, together with gauge closure in both sectors; $m,n$ are quaternionic generator labels here. Admissibility also includes the source special-Kähler contraction identity
$$\overline{\mathcal V}^M k_M^i U_i^P\Theta_P=-X_{MN}{}^P\overline{\mathcal V}^M\mathcal V^N\Theta_P =X_{NM}{}^P\overline{\mathcal V}^M\mathcal V^N\Theta_P =-\mathcal V^M k_M^{\bar i}\bar U_{\bar i}^P\Theta_P,$$
for each fixed gauge projection $\Theta_P$. This is the precise mixed-shift identity used in the Ward contraction, not a consequence asserted here for arbitrary Killing vectors. Define $U^{MN}:=g^{i\bar j}U_i^M\bar U_{\bar j}^N$. Let $\mathcal M^{MN}$ denote the real symmetric special-geometry vector-coupling matrix in the source symplectic frame, fixed by its vector kinetic couplings. The additional source special-geometry identity is
$$U^{MN}=-\frac12\mathcal M^{MN}-\frac{i}{2}C^{MN}-\overline{\mathcal V}^M\mathcal V^N.$$
Together with the stated electric locality constraint, this identity fixes the antisymmetric part needed to contract the two moment-map terms in the gaugino shifts. Use the source quaternionic frame $\mathcal U_u^{A\alpha}$, with $A=1,2$, $\alpha=1,\ldots,2n_H$, $\epsilon_{12}=+1$, and the real canonical antisymmetric matrix $C=\begin{pmatrix}0&I_{n_H}\\-I_{n_H}&0\end{pmatrix}$. Thus $CC^{\mathsf T}=I$, and lower both frame indices by the source reality convention $\mathcal U_{A\alpha u}:=(\mathcal U_u^{A\alpha})^*=\epsilon_{AB}C_{\alpha\beta}\mathcal U_u^{B\beta}$. In the Ward contraction use the typed product
$$\mathcal U_u^{A\alpha}\mathcal U_{B\alpha v}=\frac12h_{uv}\delta^A{}_B+\frac{i}{2}K^x_{uv}(\sigma^x)^A{}_B.$$
Here $(\sigma^x)^A{}_B$ denotes the source matrix component written $(\sigma^x)_B{}^A$; both tangent indices $u,v$ are covariant. This is the source equation (A.39) with $(u,A)$ and $(v,B)$ interchanged, using $K^x_{vu}=-K^x_{uv}$, and is the product used directly in its equation (B.14). For the lower hyperino frame write $\mathcal U^A{}_{u\alpha}:=C_{\alpha\beta}\mathcal U_u^{A\beta}$ and $\overline{\mathcal U}^{\alpha}{}_{vB}:=(\mathcal U^B{}_{v\alpha})^*$. Since $CC^{\mathsf T}=I$, its product $\mathcal U^A{}_{u\alpha}\overline{\mathcal U}^{\alpha}{}_{vB}$ equals the same displayed matrix. These definitions fix the conjugations and index positions without raising a tangent index with an unstated metric.
These additional conditions specify the exact input interface used by the local contraction below; this definition does not prove existence of data satisfying them.

## Definition references

[Andrianopoli et al., §§4–5, 7.3](https://arxiv.org/pdf/hep-th/9605032v1)

[Andrianopoli et al., §2 and Appendices A–B](https://arxiv.org/pdf/1508.01474v2)

[Louis, §§13.1–13.2 (scalar geometry)](https://www.physik.uni-hamburg.de/th2/ag-louis/dokumente/lectures/ws-15-16/ws-15-susy-lecture-notes.pdf)

## Facts & Assumptions

**Given:** The regular local geometric data and an admissible electric gauging just listed, with nondegenerate scalar metrics and finite components of all sections, derivatives, Killing vectors, and moment maps on the patch.

[A1] The listed special-Kähler, quaternionic-Kähler, electric-polarization, vielbein normalization, locality, closure, and equivariance conditions are adopted source conventions. They do not follow merely from naming a scalar target special-Kähler or quaternionic-Kähler.

## Proof

1.1 For each $x$, $h$-compatibility and $(J^x)^2=-I$ imply $h(J^xv,w)=-h(v,J^xw)$, so $K^x(v,w)=h(v,J^xw)$ is antisymmetric and is a two-form. Positivity and nondegeneracy of $g_{i\bar j}$ give its inverse $g^{i\bar j}$; therefore the contraction defining $U^{\Lambda\Sigma}$ is finite and defined wherever the listed section and its covariant derivatives are regular. The definition does not require a prepotential. [given, A1, algebra]

2.1 The triplet moment-map equation, quaternionic vielbein product, and displayed closure/locality identities specify both the normalization and the exact gauging constraints used in the later Ward contraction. They are explicit hypotheses on admissible data; this definition makes no claim that arbitrary Killing vectors admit them. [given, A1, step 1.1] ∎
