---
id: pthm-aqft-global-anomaly-test
kind: physics-theorem
title: A global SU(2) determinant-line phase and its mod-two inflow cancellation
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
dependency_level: 7
deps:
  - def-aqft-thooft-anomaly
  - def-aqft-global-anomaly-holonomy
  - def-aqft-anomaly-inflow-relative-theory
  - def-qftx-finite-groupoid-integration
  - lem-qftx-round-s4-spin-twist-index-one
  - lem-qftx-periodic-su2-product-kernel-and-center-line-sign
  - def-axiom-of-choice
  - def-fredholm-operator-cokernel-and-index
dependency_roles:
  def-aqft-thooft-anomaly: formulation-prerequisite
  def-aqft-global-anomaly-holonomy: formulation-prerequisite
  def-aqft-anomaly-inflow-relative-theory: formulation-prerequisite
  def-qftx-finite-groupoid-integration: mathematical-premise
  lem-qftx-round-s4-spin-twist-index-one: mathematical-premise
  lem-qftx-periodic-su2-product-kernel-and-center-line-sign: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-fredholm-operator-cokernel-and-index: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: >-
  This is a conditional calculation for a specified Euclidean massless
  left-handed SU(2) fundamental-fermion inverse-determinant-line model on S^4,
  one fixed index-one background, its order-two central transformation, and the
  stated mod-two-index bulk response. It does not identify this line with a
  fermionic Pfaffian line, construct an interacting continuum theory, classify
  every anomaly loop, or infer that even copies have no other anomalies.
axiom_use: >-
  Full AC is assumed for the general periodic-product kernel and mod-two-index
  calculation through the compact elliptic/Hodge suppliers, and for the concrete
  round benchmark through Hodge/Green and BPST suppliers. The finite-dimensional
  inverse-determinant central sign uses no additional choice principle.
sources:
  references:
    - title: "Juven Wang, Xiao-Gang Wen, and Edward Witten, A New SU(2) Anomaly"
      url: "https://arxiv.org/pdf/1810.00844v4"
      locator: "§2.2, PDF pp. 6–9, especially (2.3)–(2.8); instanton index parity,
        zero-mode measure sign, and the mapping-torus mod-two-index
        interpretation."
    - title: "Xianzhe Dai and Daniel S. Freed, Eta-Invariants and Determinant Lines"
      url: "https://arxiv.org/pdf/hep-th/9405012"
      locator: "§5, PDF pp. 31–35, especially Corollary 5.11; the holonomy formula for
        the inverse determinant line and its sign convention."
    - title: "Daniel S. Freed, Lectures on Field Theory and Topology"
      url: "https://abel.math.harvard.edu/~dafr/CBMS133.pdf"
      locator: "Lecture 11, §§11.1–11.2, printed pp.154–158/PDF pp.162–166;
        Pfaffian/determinant anomaly lines and the relative invertible-theory
        interface."
verification:
  precheck: pass
---

## Statement

Use natural units $c=\hbar=1$. Assume full Axiom of Choice for the analytic product-kernel and mod-two-index calculation on every index-one background below, as well as for the concrete round-sphere benchmark. The finite-dimensional inverse-determinant sign calculation itself needs no additional choice principle. Let $M=S^4$ have its boundary orientation, a specified smooth Riemannian metric, and the standard spin structure induced from the Euclidean $5$-ball. Here a spin structure means a principal right $\operatorname{Spin}(4)$-bundle $Q\to M$ with a smooth equivariant double-cover map to the principal $\mathrm{SO}(4)$-bundle $F^+_{\mathrm{SO}}(M)$ of positively oriented orthonormal frames, covering $\operatorname{Spin}(4)\to\mathrm{SO}(4)$. Let $\Delta^\pm$ be the complex half-spin representations with representation maps $\rho_\pm$, and let $S^\pm=Q\times_{\rho_\pm}\Delta^\pm$ be their associated bundles; the Levi-Civita connection lifts to $Q$. Let $E\to M$ be a smooth rank-two Hermitian bundle with structure group $SU(2)$ and smooth unitary connection $A$. Treat $SU(2)$ as a nondynamical background global symmetry and consider the chiral Dirac family for one massless left-handed Weyl doublet in the fundamental representation. Use the Clifford convention $c(v)c(w)+c(w)c(v)=-2g(v,w)$ for $v,w\in T_xM$, and the tensor-product spin and gauge connection in $D_A^+=\sum_i c(e_i)\nabla_{e_i}:H^1(M;S^+\otimes E)\to L^2(M;S^-\otimes E)$. Here $(e_i)$ is any positively oriented local orthonormal frame and the expression is frame-independent. The $H^1$ norm is $\|u\|_{H^1}^2=\|u\|_2^2+\|\nabla u\|_2^2$ and $L^2$ uses the bundle metric and Riemannian volume; these are complex Hilbert spaces, and the smooth first-order expression defines a bounded map between them. For complex Banach spaces $X,Y$, a bounded complex-linear map $T:X\to Y$ is Fredholm when its range is closed and both $\ker T$ and $\operatorname{coker}T:=Y/\operatorname{ran}T$ are finite dimensional; its index is $\operatorname{ind}_{\mathbb C}T:=\dim_{\mathbb C}\ker T-\dim_{\mathbb C}\operatorname{coker}T$. Put $n_+=\dim_{\mathbb C}\ker D_A^+$ and $n_-=\dim_{\mathbb C}\operatorname{coker}D_A^+$. Assume this bounded chiral realization is Fredholm with $n_+-n_-=\operatorname{ind}_{\mathbb C}D_A^+=1$; this is the index-one-sector hypothesis. The chosen boundary line in this theorem is the inverse determinant line $\mathcal L_A=(\det_{\mathbb C}\ker D_A^+)^*\otimes\det_{\mathbb C}\operatorname{coker}D_A^+$, equipped with the supplied Quillen metric and Bismut--Freed unitary connection. This explicitly selects the complex chiral determinant line; no identification with the fermionic Pfaffian line of a pseudoreal path-integral presentation is asserted. For $N$ independent identical doublets use $\mathcal L_A^{\otimes N}$. For a proved concrete instance, assume full AC and take the unit round metric, $E=S^+$ and the positive-spin Levi-Civita connection: its complex chiral kernel has dimension $1$, its cokernel dimension $0$, and $\langle c_2(E),[S^4]\rangle=-1$ in the convention $c(E)=\det(I-F_A/(2\pi i))$. The conditional conclusion below still applies to every stipulated index-one background; this concrete instance supplies that index by proof rather than as a physical postulate.

Let $\mathcal R^{TM}$ be the curvature $2$-form of the Levi-Civita connection, viewed as a skew-symmetric matrix of real $2$-forms, and fix the Chern--Weil convention

$$p_1(TM)=-\frac{1}{8\pi^2}\operatorname{tr}_{\mathbb R}(\mathcal R^{TM}\wedge\mathcal R^{TM}),\qquad \widehat A(TM)=\det_{\mathbb C}^{1/2}\!\left(\frac{i\mathcal R^{TM}/(4\pi)}{\sinh(i\mathcal R^{TM}/(4\pi))}\right),$$

where the determinant and square root are formal power series with constant term $1$, so $\widehat A_4=-p_1(TM)/24$. With $F_A$ anti-Hermitian, set $\operatorname{ch}(E)=\operatorname{tr}_{\mathbf 2}\exp(-F_A/(2\pi i))$ and, for $k\ge0$, $\operatorname{ch}_k(E)=\frac1{k!}\operatorname{tr}_{\mathbf 2}((-F_A/(2\pi i))^k)$. The adopted degree-six index-density polynomial is $I_6=[\widehat A(TM)\operatorname{ch}(E)]_6=\operatorname{ch}_3(E)-p_1(TM)\operatorname{ch}_1(E)/24$. This is the formal Chern--Weil polynomial used in this theorem; no descent relation between it and an infinitesimal BRST variation is assumed here.

Let $z=-I\in SU(2)$ act on the fermion fibers and form the corresponding order-two loop $\gamma_z$ of the background/gauge-field groupoid. Since $z$ acts as $-1$ in the fundamental representation, its action on this fermion is the same twist as $(-1)^F$; use the fermion-parity mapping-torus convention represented by $Y_z=S^4\times S^1$ with product metric $g_{S^4}+dt^2$, product orientation $\operatorname{or}(S^4)\wedge dt$, and gauge connection pulled back from $S^4$, and periodic total spinors around $S^1=\mathbb R/\mathbb Z$, meaning $\Psi(t+1)=\Psi(t)$. Equivalently, the central $z$ gauge clutch combined with an antiperiodic spin clutch gives this periodic total fermion boundary condition. A periodic spin clutch combined with the same $z$ gauge clutch instead gives antiperiodic total fermions; the two conventions must not be conflated in an eta-holonomy formula.

For this test take the candidate bulk line to be the dual of the boundary line with its specified unitary connection. Adopt the five-dimensional mod-two-index response $Z_{\mathrm{bulk}}(Y_z,A)=(-1)^{N\operatorname{ind}_2D_{Y_z}}$, where $S=S^+\oplus S^-$, $D_4=\sum_i c(e_i)\nabla_{e_i}$ is the full Dirac operator on $H^1(S^4;S\otimes E)$, $\Gamma$ acts by $+1$ on $S^+$ and $-1$ on $S^-$, and $D_{Y_z}=D_4+i\Gamma\partial_t$ on periodic $H^1$ sections over $Y_z$. The pseudoreal $\operatorname{Spin}(5)$ and $SU(2)$ structures give a specified parallel antiunitary involution $J$ with $J^2=1$ preserving this kernel; define $\operatorname{ind}_2D_{Y_z}=\dim_{\mathbb R}((\ker D_{Y_z})^J)\bmod2$, and stipulate that this closed response is the bulk-line holonomy $\operatorname{Hol}_{\gamma_z}(\mathcal L_{\mathrm{bulk}})$ in the mapping-torus orientation and endpoint-identification convention above. For $N\ge1$ copies the adopted polynomial $I_6$ vanishes and the boundary holonomy on this loop is $(-1)^N$; the bulk phase is also $(-1)^N$, so the combined boundary/bulk holonomy is $+1$. For the finite normalization check take $K$ to be a single-vertex ordered simplicial complex and the ordinary field groupoid $\mathcal F(K)=BC_2$, with one object and automorphism group $C_2=\{1,z\}$. The boundary line alone has no invariant scalar gauging weight when $N$ is odd, while its tensor product with the assigned bulk line, which is its dual has the normalized finite groupoid sum $1/2$. Even $N$ makes the boundary character trivial for this tested loop; this statement does not exclude other global anomalies or prove vanishing of the infinitesimal local anomaly outside the stated polynomial calculation.

## Statement references

[[lem-qftx-round-s4-spin-twist-index-one]]

[[lem-qftx-periodic-su2-product-kernel-and-center-line-sign]]

[[def-axiom-of-choice]]

[[def-fredholm-operator-cokernel-and-index]]

[Wang, Wen, and Witten, §2.2](https://arxiv.org/pdf/1810.00844v4)

[Dai and Freed, §5](https://arxiv.org/pdf/hep-th/9405012)

[Freed, Lecture 11, §§11.1–11.2](https://abel.math.harvard.edu/~dafr/CBMS133.pdf)

## Facts & Assumptions

**Given:** The specified spin background, smooth $SU(2)$ connection, Weyl-doublet content, index-one hypothesis, chosen inverse determinant line and its admissible connection, order-two transformation and mapping torus, local index-density polynomial normalization, and adopted mod-two-index bulk response identified with the bulk-line holonomy in the Statement.

[F1] [[def-aqft-global-anomaly-holonomy]] defines $\operatorname{Hol}_{\gamma_z}$ as the scalar of parallel transport in the chosen inverse determinant line followed by the inverse endpoint gauge identification; its line is $(\det\ker D_A^+)^*\otimes\det\operatorname{coker}D_A^+$ with the supplied Quillen metric and Bismut--Freed connection.

[F2] [[def-aqft-anomaly-inflow-relative-theory]] uses outward-normal-first boundary orientation and cancels a boundary line exactly when the bulk line has inverse holonomy.

[F3] [[def-aqft-thooft-anomaly]] defines the local perturbative anomaly class for nondynamical backgrounds modulo the model's admissible local counterterms. It expressly makes no claim about large or disconnected transformations, determinant-line holonomy, or torsion phases. It supplies this local/global scope distinction only.

[F4] [[def-qftx-finite-groupoid-integration]] defines the normalized integral of an invariant function on a finite groupoid as the sum over isomorphism classes weighted by reciprocal automorphism order.

[A1] For the general conditional statement the chosen background has $\operatorname{ind}_{\mathbb C}D_A^+=1$. For the explicit round instance this value is supplied by [F5], not assumed as a physical law.

[F5] [[lem-qftx-round-s4-spin-twist-index-one]] is a draft local mathematical lemma with a complete authored proof. Its Statement fixes full AC, the round oriented standard-spin $S^4$, $E=S^+$ and the positive-spin Levi-Civita connection; its proof gives the actual charge $1$, Chern number $-1$, chiral kernel dimension $1$ and cokernel dimension $0$ by the exact Hodge intertwiner and Green inverse.

[F6] [[lem-qftx-periodic-su2-product-kernel-and-center-line-sign]] is a draft local mathematical lemma with a complete authored proof. Under its specified compact spin four-manifold, smooth $SU(2)$ twist and full AC hypotheses, it proves that the periodic product $J$-fixed real-kernel parity equals the chiral index modulo two and that the central inverse-determinant action is $(-1)^{\operatorname{ind}D^+}$, including the precise gauge/spin clutch distinction.

[F7] [[def-fredholm-operator-cokernel-and-index]] supplies the bounded Banach-space Fredholm, quotient-cokernel and index definitions stated above. [F6] identifies this cokernel with the smooth negative-chirality kernel using the formal $L^2$ adjoint and closed range. The full Dirac selfadjoint realization on $L^2$ has domain $H^1$; no bounded-operator criterion is applied to it as a map on all of $L^2$.

[A4] [[def-axiom-of-choice]] supplies full AC for the analytic product-kernel calculation [F6] on every stipulated index-one background, and for the concrete benchmark [F5]. The finite-dimensional exterior-power argument in step 1.2 does not use [F5] or [F6].

[A2] The adopted perturbative index-density convention is $I_6=[\widehat A(TM)\operatorname{ch}(E)]_6$ with $p_1(TM)=-(8\pi^2)^{-1}\operatorname{tr}_{\mathbb R}(\mathcal R^{TM}\wedge\mathcal R^{TM})$ and $\widehat A_4=-p_1(TM)/24$, as stated above. This fixes the polynomial normalization but supplies no descent relation to an infinitesimal BRST variation.

[A3] On the tested mapping torus $Y_z$, the adopted closed five-dimensional mod-two-index response is stipulated to equal the holonomy of the candidate bulk-line connection, with the same orientation and endpoint-identification convention as the relative-theory Definition. This identification is part of the chosen model data; only its value on $Y_z$ is computed here.

[L1] Wang, Wen, and Witten, §2.2, PDF pp. 6–9, give the one-instanton index/zero-mode argument, identify the fermion-measure sign, and relate the fixed-background mapping-torus mod-two index to the four-dimensional zero-mode parity. Their §4.1 describes the pseudoreal fermion integral as a Pfaffian; this theorem instead explicitly selects the inverse determinant line and makes no identification with that Pfaffian line. The general conditional clause keeps the index-one hypothesis explicit, while [F5] proves the concrete round instance without the source’s Atiyah--Singer shortcut.

[L2] Dai–Freed, §2–§3 and §5, distinguish their determinant line from its dual carrying the exponentiated $\xi$ transport. The displayed supplier line $\mathcal L$ equals their $\mathrm{Det}$; using their $\mathrm{Det}^{-1}$ transport on this line would require inversion of the unitary scalar. This proof instead computes the actual inverse endpoint action on the supplied line directly; no eta formula or SU(2) index value is imported.

## Proof

1.1 For the fundamental $SU(2)$ representation $F_A$ is a traceless $2\times2$ matrix over the commuting algebra of even curvature forms. Cayley--Hamilton gives $F_A^2=-\det(F_A)I$, hence $\operatorname{tr}F_A=\operatorname{tr}F_A^3=0$. Thus the odd Chern-character components $\operatorname{ch}_1(E)$ and $\operatorname{ch}_3(E)$ vanish. By [A2], the degree-six component of $\widehat A\operatorname{ch}(E)$ is $\operatorname{ch}_3(E)-p_1(TM)\operatorname{ch}_1(E)/24$, so the adopted characteristic polynomial is $I_6=0$. No conclusion about the infinitesimal BRST variation or its cohomology class follows without a descent premise, and this calculation by itself says nothing about holonomy around $\gamma_z$. [given, A2, algebra]

1.2 Put $n_+=\dim_{\mathbb C}\ker D_A^+$ and $n_-=\dim_{\mathbb C}\operatorname{coker}D_A^+$. These are finite by [F7]. By [A1] and the index definition in [F7], $n_+-n_-=1$, and $(n_++n_-)-(n_+-n_-)=2n_-$, so $n_++n_-$ is odd. The center acts by scalar $-1$ on the section spaces, hence on their invariant kernel and quotient cokernel. On a $d$-dimensional vector space its top exterior power is multiplication by $(-1)^d$, as follows by applying it to a wedge of $d$ basis vectors; this is a finite-dimensional calculation. The center fixes the connection, so represent $\gamma_z$ by the constant path $A_t=A$ and endpoint arrow $z$. Its parallel transport is the identity. On the defined inverse determinant line $(\det\ker D_A^+)^*\otimes\det\operatorname{coker}D_A^+$, the endpoint map acts by $(-1)^{-n_+}(-1)^{n_-}=(-1)^{n_++n_-}=-1$. Its inverse has the same sign. Thus the loop holonomy is $-1$ directly from [F1], as the endpoint action on the selected inverse determinant line. The cited fermion-measure discussion is not used to identify this determinant-line action with a Pfaffian-line action, and this calculation does not drop an index-parity factor from a general eta-invariant formula. [given, A1, F1, F7, L1, L2, algebra]

1.3 Under the full AC hypothesis [A4], the product realization in [F6] applies to the stipulated smooth compact spin background and unitary $SU(2)$ twist. It has $D_5^2=D_4^2-\partial_t^2$ and the explicit real structure obtained by tensoring the pseudoreal Spin(5) and $SU(2)$ factors. Its complex kernel consists exactly of the circle-constant four-dimensional zero modes; by [F6] its $J$-fixed real kernel has dimension $n_++n_-$. Therefore $\operatorname{ind}_2(iD_5)=n_++n_-\bmod2=n_+-n_-\bmod2=1$ by [A1]. The real skew-adjoint operator $iD_5$ and the selfadjoint complex convention $D_5$ have the same kernel. The periodic total boundary condition is the one stipulated above; [F6] also proves that switching it to antiperiodic would remove these constant modes. [A3] now gives bulk phase $-1$ for one copy and $(-1)^N$ for $N$ copies. [given, A1, A3, A4, F6, algebra]

1.4 For the concrete unit round sphere choose $E=S^+$ with the induced Levi-Civita connection. By [A4] and [F5], this is the actual self-dual charge-one bundle with chiral index $1$; by [F6] its periodic real product kernel has dimension one and its central inverse-determinant action is $-1$. Thus the index-one sector in [A1] is explicitly instantiated with a complete local mathematical proof. This neither assumes an unproved mathematical index value as a physical law nor replaces the general conditional statement by a finite groupoid model. [given, A4, F5, F6, algebra]

2.1 The selected inverse determinant line for $N$ independent copies is the $N$-fold tensor power, so the same loop has holonomy $(-1)^N$. It is therefore trivial for this loop exactly when $N$ is even; no conclusion about any other loop follows. [given, step 1.2, algebra]

3.1 By [F3], the local perturbative anomaly interface concerns infinitesimal transformations and expressly excludes determinant-line holonomy; the nontrivial phase computed here is therefore separate global loop data, not a conclusion of [F3]. Step 1.1 proves only that the adopted characteristic polynomial vanishes and, by [A2], does not establish vanishing of the local BRST class. By [F2] and [A3], the boundary and bulk line holonomies multiply using the stipulated bulk-response identification. Steps 1.3 and 2.1 give $(-1)^N(-1)^N=1$, so the combined relative amplitude is invariant under $\gamma_z$. This proves cancellation only for the declared background family and order-two test. [F2, F3, A2, A3, step 1.1, step 1.3, step 2.1, algebra]

4.1 The finite test groupoid $BC_2$ has one object and two automorphisms. For odd $N$ the boundary line carries the nontrivial character $\chi(z)=-1$, so it does not define an arrow-invariant scalar weight. The bulk line has inverse character $\chi^{-1}=\chi$ because $\chi$ takes values in $\{1,-1\}$; their tensor product is the trivial character. The combined unit weight is invariant, and its normalized integral is $1/|C_2|=1/2$ by [F4]. For even $N$ the boundary character is already trivial and the same finite integral applies. [given, F4, step 2.1, step 3.1, algebra] ∎
