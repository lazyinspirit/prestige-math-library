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
dependency_level: 6
deps:
  - def-aqft-thooft-anomaly
  - def-aqft-global-anomaly-holonomy
  - def-aqft-anomaly-inflow-relative-theory
  - def-qftx-finite-groupoid-integration
dependency_roles:
  def-aqft-thooft-anomaly: formulation-prerequisite
  def-aqft-global-anomaly-holonomy: formulation-prerequisite
  def-aqft-anomaly-inflow-relative-theory: formulation-prerequisite
  def-qftx-finite-groupoid-integration: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
physical_scope: >-
  This is a conditional calculation for a specified Euclidean massless left-handed
  SU(2) fundamental-fermion determinant/Pfaffian family on S^4, one fixed
  index-one background, its order-two central transformation, and the stated
  mod-two-index bulk response. It does not construct an interacting continuum
  theory, classify every anomaly loop, or infer that even copies have no other
  anomalies.
axiom_use: >-
  The local deduction uses no choice principle. The odd chiral-index equality is
  stated as an explicit mathematical input; it is not derived in this item.
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
      locator: "Lecture 11, §§11.1–11.2, PDF pp. 154–163; Pfaffian/determinant anomaly lines and the relative invertible-theory interface."
verification:
  precheck: pass
---

## Statement

Use natural units $c=\hbar=1$. Let $M=S^4$ with its boundary orientation and standard spin structure, and let $E\to M$ be a smooth rank-two Hermitian bundle with structure group $SU(2)$ and smooth unitary connection $A$. Treat $SU(2)$ as a nondynamical background global symmetry and consider one massless left-handed Weyl fermion in the fundamental representation. Use the inverse determinant/Pfaffian line and the index-density normalization $I_6=[\widehat A(TM)\operatorname{ch}(E)]_6$ for its universal local anomaly polynomial, with $F_A$ anti-Hermitian and $\operatorname{ch}(E)=\operatorname{tr}_{\mathbf 2}\exp(-F_A/(2\pi i))$. Assume the selected background is in the index-one sector, meaning the coupled chiral Dirac operator $D_A^+$ is Fredholm and $\operatorname{ind}_{\mathbb C}D_A^+=1$. Let $z=-I\in SU(2)$ act on the fermion fibers and form the corresponding order-two loop $\gamma_z$ of the background/gauge-field groupoid. Since $z$ acts as $-1$ in the fundamental representation, its action on this fermion is the same twist as $(-1)^F$; represent the resulting mapping torus by $Y_z=S^4\times S^1$ with the connection pulled back from $S^4$ and the periodic spin structure around $S^1$. For $N\ge1$ independent identical Weyl doublets, the local polynomial vanishes and the boundary holonomy on this loop is $(-1)^N$. Adopt, for this test, a five-dimensional invertible bulk response with phase $Z_{\mathrm{bulk}}(Y_z,A)=(-1)^{N\operatorname{ind}_2D_{Y_z}}$, where $\operatorname{ind}_2D_{Y_z}$ is the real dimension of the mod-two Dirac kernel; then the bulk phase is $(-1)^N$ and the combined boundary/bulk holonomy is $+1$. For the finite normalization check take $K$ to be a single-vertex ordered simplicial complex and the ordinary field groupoid $\mathcal F(K)=BC_2$, with one object and automorphism group $C_2=\{1,z\}$. The boundary line alone has no invariant scalar gauging weight when $N$ is odd, while the boundary line tensored with the inverse bulk line has the normalized finite groupoid sum $1/2$. Even $N$ cancels this tested anomaly; this statement does not exclude other global or local anomalies outside the stated model and loop.

## Statement references

[Wang, Wen, and Witten, §2.2](https://arxiv.org/pdf/1810.00844v4)

[Dai and Freed, §5](https://arxiv.org/pdf/hep-th/9405012)

[Freed, Lecture 11, §§11.1–11.2](https://abel.math.harvard.edu/~dafr/CBMS133.pdf)

## Facts & Assumptions

**Given:** The spin background, smooth $SU(2)$ connection, Weyl-doublet content, index-one hypothesis, determinant/Pfaffian-line convention, order-two transformation and mapping torus, local anomaly-polynomial normalization, and adopted mod-two-index bulk response in the Statement.

[F1] [[def-aqft-global-anomaly-holonomy]] defines $\operatorname{Hol}_{\gamma_z}$ as the scalar of the inverse determinant/Pfaffian line parallel transport followed by the endpoint gauge identification.

[F2] [[def-aqft-anomaly-inflow-relative-theory]] uses outward-normal-first boundary orientation and cancels a boundary line exactly when the bulk line has inverse holonomy.

[F3] [[def-aqft-thooft-anomaly]] defines the local perturbative anomaly class for nondynamical backgrounds modulo the model's admissible local counterterms. It expressly makes no claim about large or disconnected transformations, determinant-line holonomy, or torsion phases. It supplies this local/global scope distinction only; its current Step 1 readiness record is missing.

[F4] [[def-qftx-finite-groupoid-integration]] defines the normalized integral of an invariant function on a finite groupoid as the sum over isomorphism classes weighted by reciprocal automorphism order.

[A1] The source-supported chiral-index input is $\operatorname{ind}_{\mathbb C}D_A^+=1$ for the selected index-one background. This exact equality is a hypothesis of the present conditional theorem, not a local index-theorem proof.

[A2] The adopted perturbative anomaly convention is the degree-six index-density polynomial $I_6=[\widehat A(TM)\operatorname{ch}(E)]_6$ stated above.

[A3] The chosen five-dimensional mod-two-index phase is assumed to define the candidate invertible bulk response on the backgrounds in this item; only its value on $Y_z$ is computed here.

[L1] Wang, Wen, and Witten, §2.2, PDF pp. 6–9, give the one-instanton index/zero-mode argument, identify the fermion-measure sign, and relate the fixed-background mapping-torus mod-two index to the four-dimensional zero-mode parity. The local proof below keeps the odd-index statement explicit as [A1].

[L2] Dai and Freed, §5, PDF pp. 31–35, prove the eta-invariant formula for holonomy of the inverse determinant line; this fixes the line convention but supplies no SU(2) index value for the selected bundle.

## Proof

1.1 For the fundamental $SU(2)$ representation the formal Chern roots are $x$ and $-x$, so the odd components $\operatorname{ch}_1(E)$ and $\operatorname{ch}_3(E)$ vanish. The degree-six component of $\widehat A\operatorname{ch}(E)$ is $\operatorname{ch}_3(E)-p_1(TM)\operatorname{ch}_1(E)/24$, hence $I_6=0$. This eliminates the infinitesimal local variation in the adopted normalization, but by itself says nothing about holonomy around $\gamma_z$. [given, A2, algebra]

1.2 Put $n_+=\dim\ker D_A^+$ and $n_-=\dim\ker(D_A^+)^*$. By [A1], $n_+-n_-=1$, and $(n_++n_-)-(n_+-n_-)=2n_-$, so the total number $n=n_++n_-$ of chiral zero-mode coordinates is odd. The center $z$ multiplies each such Grassmann coordinate by $-1$, making its Berezin measure transform by $(-1)^n=-1$. Pseudoreality pairs nonzero modes in two-dimensional blocks, whose determinant under $z$ is $+1$. Thus the full determinant/Pfaffian line holonomy is $-1$ for one copy by [F1] and the mapping-torus convention in [L1]–[L2]. [given, A1, F1, L1, L2, algebra]

1.3 On $S^4\times S^1$ with the product connection and periodic spin structure, the product Dirac operator has square $D_5^2=D_4^2-\partial_s^2$ in the self-adjoint convention. Fourier expansion along the periodic circle shows that a zero mode must have zero circle momentum and lie in the four-dimensional Dirac kernel, so the complex dimension of the product kernel is $n$. The five-dimensional spinor tensored with the pseudoreal $SU(2)$ fundamental has the real structure used to define the mod-two index; its real kernel is a real form of this product kernel and therefore has real dimension $n$. Hence $\operatorname{ind}_2D_{Y_z}=n\equiv1\pmod2$, and [A3] gives $Z_{\mathrm{bulk}}(Y_z,A)=-1$ for one copy and $(-1)^N$ for $N$ copies. [given, A1, A3, L1, L2, algebra]

2.1 The determinant/Pfaffian line for $N$ independent copies is the $N$-fold tensor power, so the same loop has holonomy $(-1)^N$. It is therefore trivial for this loop exactly when $N$ is even; no conclusion about any other loop follows. [given, step 1.2, algebra]

3.1 By [F3], the local perturbative anomaly interface concerns infinitesimal transformations and expressly excludes determinant-line holonomy; the nontrivial phase computed here is therefore separate global loop data, not a conclusion of [F3]. By [F2], the boundary and bulk line holonomies multiply. Steps 1.3 and 2.1 give $(-1)^N(-1)^N=1$, so the combined relative amplitude is invariant under $\gamma_z$; step 1.1 gives the vanishing of the adopted local polynomial. This proves cancellation only for the declared background family and order-two test. The current Step 1 readiness record for [F3] is missing. [F2, F3, step 1.1, step 1.3, step 2.1, algebra]

4.1 The finite test groupoid $BC_2$ has one object and two automorphisms. For odd $N$ the boundary line carries the nontrivial character $\chi(z)=-1$, so it does not define an arrow-invariant scalar weight. The inverse bulk character is also $\chi$ because $\chi^{-1}=\chi$; their tensor product is the trivial character. The combined unit weight is invariant, and its normalized integral is $1/|C_2|=1/2$ by [F4]. For even $N$ the boundary character is already trivial and the same finite integral applies. [given, F4, step 2.1, step 3.1, algebra] ∎
