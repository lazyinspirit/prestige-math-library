---
id: "lem-qftx-periodic-su2-product-kernel-and-center-line-sign"
kind: "lemma"
title: "Periodic real product kernel and central action on the inverse
  determinant line"
status: "draft"
origin: "pipeline"
domain: "mathematics"
library: "mathematics"
category: "quantum-field-theory-mathematics"
page: "qftx-instanton-topology-mathematics"
dependency_level: 6
deps:
  - lem-qftx-round-s4-spin-twist-index-one
  - thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition
  - thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity
  - def-axiom-of-choice
  - def-fredholm-operator-cokernel-and-index
dependency_roles:
  lem-qftx-round-s4-spin-twist-index-one: mathematical-premise
  thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition: mathematical-premise
  thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-fredholm-operator-cokernel-and-index: mathematical-premise
proof_strategy: "direct"
axiom_use: "Full AC is inherited through the pinned compact elliptic/Hodge Green
  and Chern–Weil supplier interfaces; no Atiyah–Singer theorem or physical
  premise is used."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
sources:
  {
    "references":
      [
        {
            "title": "Konstantin Wernli, Lecture Notes on Spin Geometry",
            "url": "https://arxiv.org/pdf/1911.09766",
            "locator": "§§1.5.2–1.5.3, printed28–30/PDF29–31, and §§2.3.3–2.3.5,
              printed68–72/PDF69–73; Clifford chirality, spin representation,
              induced spin connection and Dirac operator. The explicit round-S4
              Hodge intertwiner and index calculation are supplied locally."
          },
        {
            "title": "Wang, Wen and Witten, A New SU(2) Anomaly",
            "url": "https://arxiv.org/pdf/1810.00844v4",
            "locator": "§§2.1–2.2, PDF6–9/printed5–8; real five-dimensional Dirac structure,
              fixed-background center transformation and periodic product-kernel
              parity. Its Atiyah–Singer index value is replaced here by the
              local Hodge calculation."
          }
      ]
  }
---

## Statement

Assume full AC. A complex Banach space is a complex normed vector space complete in its norm. For complex Banach spaces $X,Y$, a bounded complex-linear map $T:X\to Y$ is Fredholm when its range is closed and both $\ker T$ and $\operatorname{coker}T:=Y/\operatorname{ran}T$ are finite dimensional; its index is $\operatorname{ind}_{\mathbb C}T:=\dim_{\mathbb C}\ker T-\dim_{\mathbb C}\operatorname{coker}T$. Here $L^2$ uses the bundle metric and Riemannian volume, and $H^1$ is the completion of smooth sections in the norm $\|u\|_{H^1}^2=\|u\|_2^2+\|\nabla u\|_2^2$, equivalent to the finite-chart Sobolev norm. These are complex Hilbert, hence Banach, spaces. A smooth first-order differential operator on this compact base is bounded from $H^1$ to $L^2$. Fredholm and index below refer to this bounded Sobolev realization; the full selfadjoint Dirac operators are separately regarded as unbounded operators on $L^2$ with domain $H^1$.

For the concrete case, set $M=S^4$ with the unit round metric and spin structure induced from the Euclidean ball, take $E=S^+$ with its positive-spin Levi-Civita connection, and use the Clifford action and full Dirac operator $D_4=D_{A_+}=\sum_i c(e_i)\nabla_{e_i}$ on the complete twisted spinor bundle specified in the round-sphere spin-twist result. Let $z=-I_2\in SU(2)$ be the central gauge automorphism. Write $S^1=\mathbb R/\mathbb Z$ and $t$ for the coordinate on its universal cover. Call the circle spin structure periodic (nonbounding) when lifted spinors satisfy $\psi(t+1)=+\psi(t)$, and antiperiodic (bounding) when they satisfy $\psi(t+1)=-\psi(t)$. If the gauge bundle is glued at the ends by a scalar $\epsilon_g\in\{+1,-1\}$ on $E$ and the spin bundle has multiplier $\epsilon_s\in\{+1,-1\}$, the total spinor section satisfies $\Psi(t+1)=\epsilon_s\epsilon_g\Psi(t)$. In particular, a trivial gauge gluing with periodic spin structure gives periodic total spinors; gluing gauge fibers by $z$ with an antiperiodic spin clutch also gives periodic total spinors, while the same $z$ clutch with periodic spin clutch gives antiperiodic total spinors.

Let $Y=S^4\times S^1$ have product metric and pulled-back gauge connection. On the pulled-back complex bundle $S\otimes E$, put $c_5=i\Gamma$ and $D_5=D_4+i\Gamma\partial_t$, with domain the periodic Sobolev space $H^1(Y;S\otimes E)$, so total spinors obey $\Psi(t+1)=\Psi(t)$. There is a parallel antiunitary involution $J$ on this bundle with $J^2=1$ and $JD_5=-D_5J$; antiunitary means conjugate-linear and isometric. Thus $J$ preserves $\ker D_5$, and $iD_5$ restricts to a real skew-adjoint operator on the fixed real Hilbert space $(L^2(Y;S\otimes E))^J:=\{\Psi\in L^2(Y;S\otimes E):J\Psi=\Psi\}$. The kernel of this restriction has

$$
\dim_{\mathbb R}(\ker D_5)^J=\dim_{\mathbb C}\ker D_4=1, \qquad \operatorname{ind}_2(iD_5):=\dim_{\mathbb R}(\ker D_5)^J\bmod2=1.
$$

Independently, for the general version let $M$ be a nonempty compact closed oriented Riemannian four-manifold. Let $F^+_{SO}(M)$ be its principal $SO(4)$-bundle of positively oriented orthonormal frames, and specify a spin lift $Q\to F^+_{SO}(M)$, meaning a principal $\operatorname{Spin}(4)$-bundle with an equivariant double covering for $\operatorname{Spin}(4)\to SO(4)$. Use $\operatorname{Spin}(4)=Sp(1)_+\times Sp(1)_-$, where $Sp(1)$ is the unit-quaternion group identified with $SU(2)$ and $(a,b)$ acts on $\mathbb H\cong\mathbb R^4$ by $q\mapsto aqb^{-1}$. Let $\Delta^+$ and $\Delta^-$ be the two defining two-dimensional complex half-spin representations, labeled by the Clifford chirality operator $\Gamma=-c(e_1)c(e_2)c(e_3)c(e_4)$ so that it acts by $+1$ on $\Delta^+$ and $-1$ on $\Delta^-$. Define $S^\pm:=Q\times_{\Delta^\pm}\mathbb C^2$. The Clifford action is skew-Hermitian and satisfies $c(v)c(w)+c(w)c(v)=-2g(v,w)$. An $SU(2)$ structure on a Hermitian rank-two bundle is a specified reduction of its unitary frame bundle to $SU(2)$. Let $E\to M$ be such a smooth bundle and let $A$ be a supplied unitary connection compatible with this reduction, meaning that its local connection matrices in $SU(2)$ frames lie in $\mathfrak{su}(2)$. Let $\nabla$ be the tensor-product connection induced by the lifted Levi-Civita connection and $A$. Define the full Dirac operator and its positive chiral restriction by

$$D_A=\sum_{i=1}^4c(e_i)\nabla_{e_i}:H^1(M;S\otimes E)\longrightarrow L^2(M;S\otimes E),\qquad S:=S^+\oplus S^-; \quad D_A^+:=D_A|_{H^1(M;S^+\otimes E)}:H^1(M;S^+\otimes E)\longrightarrow L^2(M;S^-\otimes E),$$

where the displayed local expression is independent of the chosen oriented orthonormal frame. Define $\operatorname{coker}D_A^+:=L^2(M;S^-\otimes E)/\operatorname{ran}D_A^+$. Assume $D_A^+$ is Fredholm; put $n_+=\dim_{\mathbb C}\ker D_A^+$, $n_-=\dim_{\mathbb C}\operatorname{coker}D_A^+$, and $\operatorname{ind}_{\mathbb C}D_A^+:=n_+-n_-$. This hypothesis assigns no index value to an arbitrary bundle.

For either fixed four-dimensional background, set $H_+=H^1(M;S^+\otimes E)$ and $H_-=L^2(M;S^-\otimes E)$, and write $\mathfrak F=\operatorname{Fred}(H_+,H_-)$ for the norm-topological space of Fredholm operators from $H_+$ to $H_-$. For a finite-dimensional complex vector space $V$, define $\det_{\mathbb C}V=\bigwedge^{\dim_{\mathbb C}V}V$ and $\det_{\mathbb C}0=\mathbb C$. Use the inverse determinant-line bundle $\operatorname{Det}^{-1}\to\mathfrak F$ whose fiber at $T\in\mathfrak F$ is

$$\mathcal L_T=(\det_{\mathbb C}\ker T)^*\otimes\det_{\mathbb C}\operatorname{coker}T, \qquad \operatorname{coker}T:=H_-/\operatorname{ran}T.$$

Suppose a connection $\nabla^{\operatorname{Det}}$ on this line bundle is supplied. The central gauge automorphism $z$ fixes $A$ and induces multiplication by $-1$ on both chiral section spaces, hence on $\ker D_A^+$ and $\operatorname{coker}D_A^+$. Its induced fiber map $z_*:\mathcal L_{D_A^+}\to\mathcal L_{D_A^+}$ is the dual top-exterior-power action on $\ker D_A^+$ tensored with the top-exterior-power action on $\operatorname{coker}D_A^+$; thus it acts by $(-1)^{n_++n_-}$. The constant connection path $A_t=A$ gives the constant operator path $\gamma(t)=D_A^+$ in $\mathfrak F$, so parallel transport $\operatorname{PT}_\gamma$ for any supplied line-bundle connection is the identity. For the loop closed by the endpoint gauge identification, the automorphism $z_*^{-1}\circ\operatorname{PT}_\gamma$ is therefore $(-1)^{n_++n_-}=(-1)^{\operatorname{ind}_{\mathbb C}D_A^+}$. On $M\times S^1$, the product spin and compatible $SU(2)$ structures give a parallel antiunitary involution $J$ of the same type for $D_5=D_A+i\Gamma\partial_t$ with periodic domain $H^1$. The real kernel of its restriction to the $J$-fixed space has dimension $n_++n_-$, so its parity is $\operatorname{ind}_{\mathbb C}D_A^+\bmod2$. This calculation does not assign an index value to an arbitrary bundle.

In particular, for the explicit round background, the fiber $\mathcal L_{D_A^+}$ has action $-1$, since its chiral kernel dimension is $1$ and cokernel dimension is $0$. The $N$-fold tensor power has action $(-1)^N$. For the fixed product background, antiperiodic total spinor boundary conditions give no product zero mode because a zero mode must be constant in $t$. This distinguishes the tested fermion-parity mapping-torus convention from an automatic eta-holonomy formula. No general spectral-flow or Atiyah–Singer theorem is asserted.

## Statement references

[[lem-qftx-round-s4-spin-twist-index-one]]

[[thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition]]

[[thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity]]

[[def-axiom-of-choice]]

[[def-fredholm-operator-cokernel-and-index]]

## Facts & Assumptions

**Given:** the explicit round-sphere data, the optional general spin lift and unitary twist, product metric and gauge connection, periodic spinors, and the supplied inverse determinant-line bundle and connection from the Statement.

[F1] [[lem-qftx-round-s4-spin-twist-index-one]] gives the explicit quaternionic Clifford model, parallel chirality, unitary spin-twist connections, chiral kernel dimension one and cokernel zero, and selfadjoint full Dirac domain $H^1$.

[F2] [[thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition]] and [[thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity]] give the weak regularity and shifted inverse for a formally symmetric scalar-symbol Laplace-type operator on the compact product.

[F3] [[def-fredholm-operator-cokernel-and-index]] supplies the bounded Banach-space definition of Fredholm, cokernel and index used in the Statement. In particular the assumed closed range identifies the quotient cokernel with its $L^2$ orthogonal complement; the latter is the weak kernel of the formal negative-chirality adjoint, not a change of the $H^1$ domain norm.

[A1] [[def-axiom-of-choice]] supplies the full AC hypotheses of these mathematical suppliers.

## Proof

1.1 For any given spin four-manifold the local quaternionic model glues by its specified Spin(4) lift. In that model, give each half-spin fiber the complex structure of right multiplication by $i$ and let $J_0$ be right multiplication by a quaternionic unit $j$ on $S^+\oplus S^-$. Then $J_0$ is conjugate-linear, isometric, and satisfies $J_0^2=-1$. It commutes with the four Clifford matrices and $\Gamma$ and is parallel, since the spin transition and connection matrices act from the left. In an $SU(2)$ frame of $E$, put $\varepsilon=i\sigma_2$ and define $J_E(v)=\varepsilon\overline v$. The identity $g\varepsilon=\varepsilon\overline g$ for $g\in SU(2)$ makes this definition frame-independent; it is conjugate-linear, isometric, and satisfies $J_E^2=-1$. Compatibility of $A$ with the $SU(2)$ reduction makes its local connection matrices preserve $J_E$, so $J_E$ is parallel. Define $J_5=\Gamma J_0$ on the spin factor. Then $J_5^2=-1$, it anticommutes with each of the four tangent Clifford matrices, and it anticommutes with $c_5=i\Gamma$ because anti-linearity changes $i$ to $-i$. Thus it is the pseudoreal Spin(5) structure, since even products of Clifford matrices commute with it. On the complex tensor product set $J=J_5\otimes J_E$; it is well-defined and antiunitary, $J^2=1$, and $JD_5=-D_5J$. Hence $J$ preserves the kernel and $iD_5$ commutes with $J$. [given, F1, algebra, construct]

1.2 Chirality anticommutes with $D_4$ and is parallel, so $D_5^2=D_4^2-\partial_t^2$. For $j=4,5$, let $P_j$ be the second-order differential expression $D_j^2$ with domain $H^2$. The Clifford relation gives it scalar positive principal symbol; formal symmetry follows from unitary connection compatibility and integration by parts, and $(P_ju,u)_2=\|D_ju\|_2^2\geq0$ on smooth sections. Thus [F2] applies and makes $P_j$ selfadjoint on $H^2$. For $u\in H^2$, Cauchy--Schwarz gives $\|(P_j+I)u\|_2\|u\|_2\geq((P_j+I)u,u)_2\geq\|u\|_2^2$, so $P_j+I$ has closed range and zero kernel. Since it is selfadjoint, its range is dense and therefore all of $L^2$. Let $B_j=(P_j+I)^{-1}:L^2\to H^2$; the elliptic estimate in [F2] makes this inverse bounded into $H^2$. Then $(D_j\mp i)B_j$ is a right inverse of $D_j\pm i$. For $v\in\operatorname{dom}D_j^*$, surjectivity of $D_j+i$ gives $u\in H^1$ with $(D_j+i)u=(D_j^*+i)v$. Symmetry implies $\ker(D_j^*+i)=\operatorname{ran}(D_j-i)^\perp=0$, so $v=u$ and $\operatorname{dom}D_j^*\subseteq H^1$; symmetry gives the reverse inclusion. Thus the $L^2$ realizations of $D_4,D_5$ are selfadjoint with domain $H^1$. If $u\in H^1$ and $D_ju\in H^1$, elliptic regularity [F2] applied to $P_ju=D_j^2u\in L^2$ gives $u\in H^2$; conversely $H^2$ is contained in the square domain, so $\operatorname{dom}D_j^2=H^2$. An $L^2$ weak chiral cokernel vector has square zero distributionally; testing against smooth sections and using their $H^2$ density puts it in the adjoint domain of the selfadjoint square, hence in $H^2$, and [F2] then makes it smooth. Since [F3] gives closed range, orthogonal projection identifies its quotient cokernel with this smooth negative-chirality kernel. Weak kernels are smooth by the same argument. For a zero mode $\psi$, integration by parts gives $0=\|D_5\psi\|^2=\|D_4\psi\|^2+\|\partial_t\psi\|^2$. Thus $\psi$ is independent of $t$ and lies in $\ker D_4$; conversely every such spinor gives a periodic product zero mode. In general its complex dimension is $n_++n_-$, identifying the smooth negative-chirality kernel with the cokernel by the formal $L^2$ adjoint. For the concrete round twist this dimension is $1$ by [F1]. This avoids any unproved general spectral-flow identity. [given, A1, F1, F2, F3, algebra]

1.3 The constant central automorphism acts by $-1$ on both chiral spinor kernels and cokernels, and fixes the background connection. Its scalar on the inverse determinant line is $(-1)^{-n_+}(-1)^{n_-}=(-1)^{n_+-n_-}$. For the actual round twist [F1] gives dimensions one and zero, hence scalar $-1$. Parallel transport along a constant path is the identity for any connection. Closing by the inverse endpoint identification gives $z_*^{-1}\circ\mathrm{PT}=-1$; tensor powers give $(-1)^N$. This is an actual finite-dimensional exterior-power action, not an assumption equating a periodic eta invariant with holonomy. [given, F1, F3, algebra]

2.1 For any finite-dimensional complex vector space $V$ with anti-linear involution $J$, every $v$ has the unique decomposition $v=(v+Jv)/2+i(v-Jv)/(2i)$ with both displayed real components fixed by $J$. Thus $V=V^J\otimes_{\mathbb R}\mathbb C$ and $\dim_{\mathbb R}V^J=\dim_{\mathbb C}V$. Apply this to $V=\ker D_5$ using steps 1.1–1.2. The restriction of $iD_5$ is real and skew-adjoint, because $D_5$ is selfadjoint and $J(iD_5)=(iD_5)J$. Its real kernel has dimension $n_++n_-$. This has the same parity as $n_+-n_-$, since their difference is $2n_-$. For the concrete round twist the real dimension and parity are one by [F1]. [step 1.1, step 1.2, algebra]

2.2 For antiperiodic boundary conditions the energy argument in step 1.2 would again force a zero mode to be constant in $t$, but a constant antiperiodic spinor is zero. In a mapping-torus clutch the total spinor boundary multiplier is the product of its spin and gauge multipliers. The central gauge multiplier is $-1$, so a bounding/antiperiodic spin multiplier $-1$ makes the total periodic, whereas a nonbounding/periodic spin multiplier $+1$ makes it antiperiodic. Moving the central sign from the gauge clutch to the spin clutch therefore exchanges these two spin conventions, exactly as stated. [given, step 1.2, algebra]

3.1 The kernel parity, central inverse-determinant action and spin-clutch distinctions follow from the explicit Clifford construction, energy identity and finite exterior powers. The full AC hypothesis enters only through the analytic suppliers. These are the complete assertions for this fixed product; no general mod-two index theorem or global anomaly classification has been imported. [A1, step 2.1, step 1.3, step 2.2] ∎
