---
id: "lem-qftx-periodic-su2-product-kernel-and-center-line-sign"
kind: "lemma"
title: "Periodic real product kernel and central action on the inverse determinant line"
status: "draft"
origin: "pipeline"
domain: "mathematics"
library: "mathematics"
category: "quantum-field-theory-mathematics"
page: "qftx-instanton-topology-mathematics"
dependency_level: 6
deps: ["lem-qftx-round-s4-spin-twist-index-one", "thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition", "thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity", "def-axiom-of-choice"]
dependency_roles: {"lem-qftx-round-s4-spin-twist-index-one": "mathematical-premise", "thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition": "mathematical-premise", "thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity": "mathematical-premise", "def-axiom-of-choice": "mathematical-premise"}
proof_strategy: "direct"
axiom_use: "Full AC is inherited through the pinned compact elliptic/Hodge Green and Chern–Weil supplier interfaces; no Atiyah–Singer theorem or physical premise is used."
provenance: {"statement": "ai-altered", "proof": "ai-generated"}
sources: {"references": [{"title": "Konstantin Wernli, Lecture Notes on Spin Geometry", "url": "https://arxiv.org/pdf/1911.09766", "locator": "§§1.5.2–1.5.3, printed28–30/PDF29–31, and §§2.3.3–2.3.5, printed68–72/PDF69–73; Clifford chirality, spin representation, induced spin connection and Dirac operator. The explicit round-S4 Hodge intertwiner and index calculation are supplied locally."}, {"title": "Wang, Wen and Witten, A New SU(2) Anomaly", "url": "https://arxiv.org/pdf/1810.00844v4", "locator": "§§2.1–2.2, PDF6–9/printed5–8; real five-dimensional Dirac structure, fixed-background center transformation and periodic product-kernel parity. Its Atiyah–Singer index value is replaced here by the local Hodge calculation."}]}
---

## Statement

Assume full AC and use the explicit round spin sphere, $E=S^+$ connection, Clifford action and chiral Dirac operator of the round-sphere spin-twist lemma. Let $Y=S^4\times(\mathbb R/\mathbb Z)$ have product metric, pulled-back gauge connection and periodic, nonbounding circle spin structure. On the pulled-back complex bundle $S\otimes E$, put $c_5=i\Gamma$ and $D_5=D_4+i\Gamma\partial_t$, with periodic Sobolev domain $H^1$. There is a parallel antiunitary involution $J$ preserving $\ker D_5$, and the real skew-adjoint realization $iD_5$ on its $J$-fixed Hilbert space has

$$
\dim_{\mathbb R}(\ker D_5)^J=\dim_{\mathbb C}\ker D_4=1, \qquad \operatorname{ind}_2(iD_5):=\dim_{\mathbb R}(\ker D_5)^J\bmod2=1.
$$

More generally, let a nonempty compact closed oriented Riemannian spin four-manifold have a smooth unitary $SU(2)$ rank-two twist and a Fredholm chiral Dirac realization with $n_+=\dim_{\mathbb C}\ker D^+$ and $n_-=\dim_{\mathbb C}\operatorname{coker}D^+$. With the same Clifford and periodic product conventions, the real product kernel has dimension $n_++n_-$, its parity is $\operatorname{ind}_{\mathbb C}D^+\bmod2$, and the central action on its inverse determinant line is $(-1)^{\operatorname{ind}_{\mathbb C}D^+}$. This general product statement does not assign an index value to an arbitrary bundle.

Let $z=-I$ be the central gauge automorphism of $E$. On the inverse chiral determinant line

$$
\mathcal L=(\det_{\mathbb C}\ker D^+)^*\otimes\det_{\mathbb C}\operatorname{coker}D^+
$$

its induced action is $-1$. For the constant connection path closed by $z$, the closed-loop automorphism $z_*^{-1}\circ\mathrm{PT}$ is $-1$ for any supplied connection on the determinant line. The $N$-fold tensor power has action $(-1)^N$.

The spin convention is part of the statement: using antiperiodic spinors in the circle direction gives no product zero mode. Equivalently, gluing the gauge fibers by $z=-1$ with an antiperiodic spin clutch gives periodic total spinor boundary conditions; gluing by $z$ with periodic spin clutch gives antiperiodic total boundary conditions instead. This distinguishes the tested fermion-parity mapping-torus convention from an automatic eta-holonomy formula. No general spectral-flow or Atiyah–Singer theorem is asserted.

## Statement references

[[lem-qftx-round-s4-spin-twist-index-one]]

[[thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition]]

[[thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity]]

[[def-axiom-of-choice]]

## Facts & Assumptions

**Given:** the explicit round-sphere data, product metric and gauge connection, periodic spinors and determinant-line convention of the Statement.

[F1] [[lem-qftx-round-s4-spin-twist-index-one]] gives the explicit quaternionic Clifford model, parallel chirality, unitary spin-twist connections, chiral kernel dimension one and cokernel zero, and selfadjoint full Dirac domain $H^1$.

[F2] [[thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition]] and [[thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity]] give the weak regularity and shifted inverse for a formally symmetric scalar-symbol Laplace-type operator on the compact product.

[A1] [[def-axiom-of-choice]] supplies the full AC hypotheses of these mathematical suppliers.

## Proof

1.1 For any given spin four-manifold the local quaternionic model glues by its specified Spin(4) lift. In that quaternionic spin model, right multiplication by a quaternionic unit $j$ is an antiunitary map $J_0$ on $S^+\oplus S^-$, with $J_0^2=-1$. It commutes with the four Clifford matrices and $\Gamma$ and is parallel: the transition and connection matrices act from the left and hence commute with right multiplication. The same operation $J_E$ on the $SU(2)$ twist is parallel, antiunitary and has square $-1$. Define $J_5=\Gamma J_0$ on the spin factor. Then $J_5^2=-1$, it anticommutes with each of the four tangent Clifford matrices, and it anticommutes with $c_5=i\Gamma$ because anti-linearity changes $i$ to $-i$. Thus it is the pseudoreal Spin(5) structure, since even products of Clifford matrices commute with it. On the complex tensor product set $J=J_5\otimes J_E$; it is well-defined and antiunitary, $J^2=1$, and $JD_5=-D_5J$. Hence $J$ preserves the kernel and $iD_5$ commutes with $J$. [given, F1, algebra, construct]

1.2 Chirality anticommutes with $D_4$ and is parallel, so $D_5^2=D_4^2-\partial_t^2$. It has scalar positive principal symbol and smooth coefficients. Formal symmetry follows from unitary connection compatibility and periodic integration by parts. The same shifted-resolvent argument applies to $D_4$ and $D_5$ on a general compact background: each square has scalar positive principal symbol, and [F2] gives the inverse of its positive shift from $L^2$ to $H^2$; multiplying by $D_j\mp i$ gives surjectivity of $D_j\pm i$ and the $H^1$ selfadjoint domain exactly as in [F1]. An $L^2$ weak chiral cokernel vector also has square zero distributionally; testing against smooth sections and using their $H^2$ density puts it in the adjoint domain of the selfadjoint square, hence in $H^2$, and [F2] then makes it smooth. This justifies identifying the cokernel with the negative-chirality kernel. Weak kernels are smooth by the same argument. For a zero mode $\psi$, integration by parts gives $0=\|D_5\psi\|^2=\|D_4\psi\|^2+\|\partial_t\psi\|^2$. Thus $\psi$ is independent of $t$ and lies in $\ker D_4$; conversely every such spinor gives a periodic product zero mode. In general its complex dimension is $n_++n_-$, identifying the smooth negative-chirality kernel with the cokernel by the formal $L^2$ adjoint. For the concrete round twist this dimension is $1$ by [F1]. This avoids any unproved general spectral-flow identity. [given, A1, F1, F2, algebra]

1.3 The constant central automorphism acts by $-1$ on both chiral spinor kernels and cokernels, and fixes the background connection. Its scalar on the inverse determinant line is $(-1)^{-n_+}(-1)^{n_-}=(-1)^{n_+-n_-}$. For the actual round twist [F1] gives dimensions one and zero, hence scalar $-1$. Parallel transport along a constant path is the identity for any connection. Closing by the inverse endpoint identification gives $z_*^{-1}\circ\mathrm{PT}=-1$; tensor powers give $(-1)^N$. This is an actual finite-dimensional exterior-power action, not an assumption equating a periodic eta invariant with holonomy. [given, F1, algebra]

2.1 For any finite-dimensional complex vector space $V$ with anti-linear involution $J$, every $v$ has the unique decomposition $v=(v+Jv)/2+i(v-Jv)/(2i)$ with both displayed real components fixed by $J$. Thus $V=V^J\otimes_{\mathbb R}\mathbb C$ and $\dim_{\mathbb R}V^J=\dim_{\mathbb C}V$. Apply this to $V=\ker D_5$ using steps 1.1–1.2. The restriction of $iD_5$ is real and skew-adjoint, because $D_5$ is selfadjoint and $J(iD_5)=(iD_5)J$. Its real kernel has dimension $n_++n_-$. This has the same parity as $n_+-n_-$, since their difference is $2n_-$. For the concrete round twist the real dimension and parity are one by [F1]. [step 1.1, step 1.2, algebra]

2.2 For antiperiodic boundary conditions the energy argument in step 1.2 would again force a zero mode to be constant in $t$, but a constant antiperiodic spinor is zero. In a mapping-torus clutch the total spinor boundary multiplier is the product of its spin and gauge multipliers. The central gauge multiplier is $-1$, so a bounding/antiperiodic spin multiplier $-1$ makes the total periodic, whereas a nonbounding/periodic spin multiplier $+1$ makes it antiperiodic. Moving the central sign from the gauge clutch to the spin clutch therefore exchanges these two spin conventions, exactly as stated. [given, step 1.2, algebra]

3.1 The kernel parity, central inverse-determinant action and spin-clutch distinctions follow from the explicit Clifford construction, energy identity and finite exterior powers. The full AC hypothesis enters only through the analytic suppliers. These are the complete assertions for this fixed product; no general mod-two index theorem or global anomaly classification has been imported. [A1, step 2.1, step 1.3, step 2.2] ∎
