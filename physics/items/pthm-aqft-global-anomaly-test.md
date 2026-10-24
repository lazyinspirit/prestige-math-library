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
dependency_roles:
  def-aqft-thooft-anomaly: formulation-prerequisite
  def-aqft-global-anomaly-holonomy: formulation-prerequisite
  def-aqft-anomaly-inflow-relative-theory: formulation-prerequisite
  def-qftx-finite-groupoid-integration: mathematical-premise
  lem-qftx-round-s4-spin-twist-index-one: mathematical-premise
  lem-qftx-periodic-su2-product-kernel-and-center-line-sign: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: >-
  This is a conditional calculation for a specified Euclidean massless left-handed
  SU(2) fundamental-fermion determinant/Pfaffian family on S^4, one fixed
  index-one background, its order-two central transformation, and the stated
  mod-two-index bulk response. It does not construct an interacting continuum
  theory, classify every anomaly loop, or infer that even copies have no other
  anomalies.
axiom_use: >-
  The concrete round-sphere benchmark assumes full AC through the local
  Hodge/Green and BPST mathematical suppliers. The general conditional
  index-one exterior-power calculation uses no additional choice principle.
sources:
  references:
    - title: "Juven Wang, Xiao-Gang Wen, and Edward Witten, A New SU(2) Anomaly"
      url: "https://arxiv.org/pdf/1810.00844v4"
      locator: "§2.2, PDF pp. 6–9, especially (2.3)–(2.8); instanton index parity, zero-mode measure sign, and the mapping-torus mod-two-index interpretation."
    - title: "Xianzhe Dai and Daniel S. Freed, Eta-Invariants and Determinant Lines"
      url: "https://arxiv.org/pdf/hep-th/9405012"
      locator: "§5, PDF pp. 31–35, especially Corollary 5.11; the holonomy formula for the inverse determinant line and its sign convention."
    - title: "Daniel S. Freed, Lectures on Field Theory and Topology"
      url: "https://abel.math.harvard.edu/~dafr/CBMS133.pdf"
      locator: "Lecture 11, §§11.1–11.2, printed pp.154–158/PDF pp.162–166; Pfaffian/determinant anomaly lines and the relative invertible-theory interface."
verification:
  precheck: pass
---

## Statement

Use natural units $c=\hbar=1$. Let $M=S^4$ with its boundary orientation, a specified smooth Riemannian metric and standard spin structure, and let $E\to M$ be a smooth rank-two Hermitian bundle with structure group $SU(2)$ and smooth unitary connection $A$. Treat $SU(2)$ as a nondynamical background global symmetry and consider one massless left-handed Weyl fermion in the fundamental representation. Use the inverse determinant/Pfaffian line and the index-density normalization $I_6=[\widehat A(TM)\operatorname{ch}(E)]_6$ for its universal local anomaly polynomial, with $F_A$ anti-Hermitian and $\operatorname{ch}(E)=\operatorname{tr}_{\mathbf 2}\exp(-F_A/(2\pi i))$. Assume the selected background is in the index-one sector, meaning the coupled chiral Dirac operator $D_A^+$ is Fredholm and $\operatorname{ind}_{\mathbb C}D_A^+=1$. For a proved concrete instance, assume full AC and take the unit round metric, $E=S^+$ and the positive-spin Levi-Civita connection: its complex chiral kernel has dimension $1$, its cokernel dimension $0$, and $\langle c_2(E),[S^4]\rangle=-1$ in the convention $c(E)=\det(I-F_A/(2\pi i))$. The conditional conclusion below still applies to every stipulated index-one background; this concrete instance supplies that index by proof rather than as a physical postulate. Let $z=-I\in SU(2)$ act on the fermion fibers and form the corresponding order-two loop $\gamma_z$ of the background/gauge-field groupoid. Since $z$ acts as $-1$ in the fundamental representation, its action on this fermion is the same twist as $(-1)^F$; use the fermion-parity mapping-torus convention represented by $Y_z=S^4\times S^1$ with pulled-back gauge connection and periodic spinors around $S^1$. Equivalently, a central $z$ gauge clutch combined with an antiperiodic spin clutch has this periodic total fermion boundary condition. A periodic spin clutch combined with the same $z$ gauge clutch would instead give antiperiodic total fermions; the two conventions must not be conflated in an eta-holonomy formula. For $N\ge1$ independent identical Weyl doublets, the local polynomial vanishes and the boundary holonomy on this loop is $(-1)^N$. Adopt, for this test, a five-dimensional invertible bulk response with phase $Z_{\mathrm{bulk}}(Y_z,A)=(-1)^{N\operatorname{ind}_2D_{Y_z}}$, where $\operatorname{ind}_2D_{Y_z}=\dim_{\mathbb R}\ker D_{Y_z}\bmod2$ for the real Dirac realization; then the bulk phase is $(-1)^N$ and the combined boundary/bulk holonomy is $+1$. For the finite normalization check take $K$ to be a single-vertex ordered simplicial complex and the ordinary field groupoid $\mathcal F(K)=BC_2$, with one object and automorphism group $C_2=\{1,z\}$. The boundary line alone has no invariant scalar gauging weight when $N$ is odd, while the boundary line tensored with the inverse bulk line has the normalized finite groupoid sum $1/2$. Even $N$ cancels this tested anomaly; this statement does not exclude other global or local anomalies outside the stated model and loop.

## Statement references

[[lem-qftx-round-s4-spin-twist-index-one]]

[[lem-qftx-periodic-su2-product-kernel-and-center-line-sign]]

[[def-axiom-of-choice]]

[Wang, Wen, and Witten, §2.2](https://arxiv.org/pdf/1810.00844v4)

[Dai and Freed, §5](https://arxiv.org/pdf/hep-th/9405012)

[Freed, Lecture 11, §§11.1–11.2](https://abel.math.harvard.edu/~dafr/CBMS133.pdf)

## Facts & Assumptions

**Given:** The spin background, smooth $SU(2)$ connection, Weyl-doublet content, index-one hypothesis, determinant/Pfaffian-line convention, order-two transformation and mapping torus, local anomaly-polynomial normalization, and adopted mod-two-index bulk response in the Statement.

[F1] [[def-aqft-global-anomaly-holonomy]] defines $\operatorname{Hol}_{\gamma_z}$ as the scalar of the inverse determinant/Pfaffian line parallel transport followed by the endpoint gauge identification.

[F2] [[def-aqft-anomaly-inflow-relative-theory]] uses outward-normal-first boundary orientation and cancels a boundary line exactly when the bulk line has inverse holonomy.

[F3] [[def-aqft-thooft-anomaly]] defines the local perturbative anomaly class for nondynamical backgrounds modulo the model's admissible local counterterms. It expressly makes no claim about large or disconnected transformations, determinant-line holonomy, or torsion phases. It supplies this local/global scope distinction only.

[F4] [[def-qftx-finite-groupoid-integration]] defines the normalized integral of an invariant function on a finite groupoid as the sum over isomorphism classes weighted by reciprocal automorphism order.

[A1] For the general conditional statement the chosen background has $\operatorname{ind}_{\mathbb C}D_A^+=1$. For the explicit round instance this value is supplied by [F5], not assumed as a physical law.

[F5] [[lem-qftx-round-s4-spin-twist-index-one]] proves the actual round $E=S^+$ bundle has charge $1$, Chern number $-1$, chiral kernel dimension $1$ and cokernel dimension $0$, by the exact Hodge intertwiner and Green inverse.

[F6] [[lem-qftx-periodic-su2-product-kernel-and-center-line-sign]] proves the periodic product real-kernel parity equals the chiral index modulo two and the central inverse-determinant action is $(-1)^{\operatorname{ind}D^+}$, including the precise gauge/spin clutch distinction.

[A4] [[def-axiom-of-choice]] is assumed for the concrete benchmark, through these mathematical Hodge/Green and characteristic-form suppliers.

[A2] The adopted perturbative anomaly convention is the degree-six index-density polynomial $I_6=[\widehat A(TM)\operatorname{ch}(E)]_6$ stated above.

[A3] The chosen five-dimensional mod-two-index phase is assumed to define the candidate invertible bulk response on the backgrounds in this item; only its value on $Y_z$ is computed here.

[L1] Wang, Wen, and Witten, §2.2, PDF pp. 6–9, give the one-instanton index/zero-mode argument, identify the fermion-measure sign, and relate the fixed-background mapping-torus mod-two index to the four-dimensional zero-mode parity. The general conditional clause keeps the index-one hypothesis explicit, while [F5] proves the concrete round instance without the source’s Atiyah–Singer shortcut.

[L2] Dai–Freed, §2–§3 and §5, distinguish their determinant line from its dual carrying the exponentiated $\xi$ transport. The displayed supplier line $\mathcal L$ equals their $\mathrm{Det}$; using their $\mathrm{Det}^{-1}$ transport on this line would require inversion of the unitary scalar. This proof instead computes the actual inverse endpoint action on the supplied line directly; no eta formula or SU(2) index value is imported.

## Proof

1.1 For the fundamental $SU(2)$ representation $F_A$ is a traceless $2\times2$ matrix over the commuting algebra of even curvature forms. Cayley–Hamilton gives $F_A^2=-\det(F_A)I$, hence $\operatorname{tr}F_A=\operatorname{tr}F_A^3=0$. Thus the odd Chern-character components $\operatorname{ch}_1(E)$ and $\operatorname{ch}_3(E)$ vanish. The degree-six component of $\widehat A\operatorname{ch}(E)$ is $\operatorname{ch}_3(E)-p_1(TM)\operatorname{ch}_1(E)/24$, hence $I_6=0$. This eliminates the infinitesimal local variation in the adopted normalization, but by itself says nothing about holonomy around $\gamma_z$. [given, A2, algebra]

1.2 Put $n_+=\dim\ker D_A^+$ and $n_-=\dim\ker(D_A^+)^*$. By [A1], $n_+-n_-=1$, and $(n_++n_-)-(n_+-n_-)=2n_-$, so the total number $n=n_++n_-$ of chiral zero-mode coordinates is odd. The center fixes the connection, so represent $\gamma_z$ by the constant path $A_t=A$ and endpoint arrow $z$. Its parallel transport is the identity. On the defined inverse determinant line $(\det\ker D_A^+)^*\otimes\det\operatorname{coker}D_A^+$, the endpoint map acts by $(-1)^{-n_+}(-1)^{n_-}=(-1)^{n_++n_-}=-1$. Its inverse has the same sign. Thus the loop holonomy is $-1$ directly from [F1]; in the stated Weyl-measure convention this is the odd zero-mode Berezin sign. This calculation uses the actual endpoint action and does not drop an index-parity factor from a general eta-invariant formula. [given, A1, F1, L1, L2, algebra]

1.3 The product realization in [F6] has $D_5^2=D_4^2-\partial_t^2$ and the explicit real structure obtained by tensoring the pseudoreal Spin(5) and $SU(2)$ factors. Its kernel consists exactly of the circle-constant four-dimensional zero modes, so its real dimension is $n_++n_-$. Therefore $\operatorname{ind}_2(iD_5)=n_++n_-\bmod2=n_+-n_-\bmod2=1$ by [A1]. The real skew-adjoint operator $iD_5$ and the selfadjoint complex convention $D_5$ have the same kernel. The periodic total boundary condition is the one stipulated above; [F6] also proves that switching it to antiperiodic would remove these constant modes. [A3] now gives bulk phase $-1$ for one copy and $(-1)^N$ for $N$ copies. [given, A1, A3, F6, algebra]

1.4 For the concrete unit round sphere choose $E=S^+$ with the induced Levi-Civita connection. By [A4] and [F5], this is the actual self-dual charge-one bundle with chiral index $1$; by [F6] its periodic real product kernel has dimension one and its central inverse-determinant action is $-1$. Thus the index-one sector in [A1] is explicitly instantiated with a complete local mathematical proof. This neither assumes an unproved mathematical index value as a physical law nor replaces the general conditional statement by a finite groupoid model. [given, A4, F5, F6, algebra]

2.1 The determinant/Pfaffian line for $N$ independent copies is the $N$-fold tensor power, so the same loop has holonomy $(-1)^N$. It is therefore trivial for this loop exactly when $N$ is even; no conclusion about any other loop follows. [given, step 1.2, algebra]

3.1 By [F3], the local perturbative anomaly interface concerns infinitesimal transformations and expressly excludes determinant-line holonomy; the nontrivial phase computed here is therefore separate global loop data, not a conclusion of [F3]. By [F2], the boundary and bulk line holonomies multiply. Steps 1.3 and 2.1 give $(-1)^N(-1)^N=1$, so the combined relative amplitude is invariant under $\gamma_z$; step 1.1 gives the vanishing of the adopted local polynomial. This proves cancellation only for the declared background family and order-two test. [F2, F3, step 1.1, step 1.3, step 2.1, algebra]

4.1 The finite test groupoid $BC_2$ has one object and two automorphisms. For odd $N$ the boundary line carries the nontrivial character $\chi(z)=-1$, so it does not define an arrow-invariant scalar weight. The inverse bulk character is also $\chi$ because $\chi^{-1}=\chi$; their tensor product is the trivial character. The combined unit weight is invariant, and its normalized integral is $1/|C_2|=1/2$ by [F4]. For even $N$ the boundary character is already trivial and the same finite integral applies. [given, F4, step 2.1, step 3.1, algebra] ∎
