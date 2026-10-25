---
id: "lem-qftx-round-s4-spin-twist-index-one"
kind: "lemma"
title: "An explicit round-S4 spin twist has charge one and chiral index one"
status: "draft"
origin: "pipeline"
domain: "mathematics"
library: "mathematics"
category: "quantum-field-theory-mathematics"
page: "qftx-instanton-topology-mathematics"
dependency_level: 5
deps:
  - prop-qftx-su2-bpst-explicit-connection-on-s4
  - def-qftx-instanton-number-and-asd-sector
  - thm-hodge-laplacian-kernel-represents-de-rham-and-dolbeault-cohomology
  - thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition
  - thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity
  - thm-de-rham-cohomology-of-spheres
  - thm-general-stokes-theorem
  - def-axiom-of-choice
  - def-fredholm-operator-cokernel-and-index
dependency_roles:
  prop-qftx-su2-bpst-explicit-connection-on-s4: mathematical-premise
  def-qftx-instanton-number-and-asd-sector: mathematical-premise
  thm-hodge-laplacian-kernel-represents-de-rham-and-dolbeault-cohomology: mathematical-premise
  thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition: mathematical-premise
  thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity: mathematical-premise
  thm-de-rham-cohomology-of-spheres: mathematical-premise
  thm-general-stokes-theorem: mathematical-premise
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

Assume full AC. Let $B^5=\{z\in\mathbb R^5:|z|\leq1\}$ and $S^4=\partial B^5=\{z\in\mathbb R^5:|z|=1\}$ have the induced unit round metric and boundary orientation. Let $F^+_{SO}(S^4)$ be the principal $SO(4)$-bundle of positively oriented orthonormal frames. A spin structure is a principal right $\operatorname{Spin}(4)$-bundle $Q$ with a smooth equivariant double-cover map to $F^+_{SO}(S^4)$ over the double covering $\operatorname{Spin}(4)\to SO(4)$. Use the lift obtained from $\operatorname{Spin}(5)\to SO(5)$ by restricting to the preimage of oriented $SO(5)$-frames whose first vector is the outward unit normal; the stabilizer of that vector is $SO(4)$ and its preimage is $\operatorname{Spin}(4)$. Identify $\operatorname{Spin}(4)=Sp(1)_+\times Sp(1)_-$, where $Sp(1)$ is the unit-quaternion group identified with $SU(2)$ and $(a,b)$ acts on $\mathbb H\cong\mathbb R^4$ by $q\mapsto aqb^{-1}$. Let $\Delta^\pm$ be the two defining two-dimensional complex half-spin representations, and set $S^\pm=Q\times_{\Delta^\pm}\mathbb C^2$ and $S=S^+\oplus S^-$. The Clifford action $c$ is skew-Hermitian and satisfies $c(v)c(w)+c(w)c(v)=-2\langle v,w\rangle$; in an oriented orthonormal frame define $\Gamma=-c(e_1)c(e_2)c(e_3)c(e_4)$, which acts by $+1$ on $\Delta^+$ and $-1$ on $\Delta^-$. The connection on spinors is the lift of the Levi-Civita connection. Set $E=S^+$ with its rank-two Hermitian $SU(2)$ connection $A_+$ induced by this lift.

Here a complex Banach space is a complex normed vector space complete in its norm. For complex Banach spaces $X,Y$, a bounded complex-linear map $T:X\to Y$ is Fredholm when its range is closed and both $\ker T$ and $\operatorname{coker}T:=Y/\operatorname{ran}T$ are finite dimensional; its index is $\operatorname{ind}_{\mathbb C}T:=\dim_{\mathbb C}\ker T-\dim_{\mathbb C}\operatorname{coker}T$. Here $L^2$ uses the bundle metric and Riemannian volume, and $H^1$ is the completion of smooth sections in the norm $\|u\|_{H^1}^2=\|u\|_2^2+\|\nabla u\|_2^2$, equivalent to the finite-chart Sobolev norm. These are complex Hilbert, hence Banach, spaces. A smooth first-order differential operator on this compact base is bounded from $H^1$ to $L^2$.

On smooth sections of $S\otimes E$, define the full twisted Dirac expression by $D_{A_+}=\sum_i c(e_i)\nabla_{e_i}$, where $\nabla$ is the tensor-product connection. Its positive chiral restriction has the bounded realization $D^+_{A_+}:H^1(S^4;S^+\otimes E)\to L^2(S^4;S^-\otimes E)$. This operator is Fredholm, with complex kernel dimension $1$, cokernel dimension $0$ and index $1$. In the anti-Hermitian Chern convention,

$$
\langle c_2(E),[S^4]\rangle=\frac1{8\pi^2}\int_{S^4}\operatorname{tr}(F_{A_+}\wedge F_{A_+})=-1.
$$

Its positive trace-form instanton charge $q=-(8\pi^2)^{-1}\int\operatorname{tr}(F\wedge F)$ is $1$; its connection is the scale-one self-dual BPST connection. More precisely there are unitary bundle identifications $F:\Lambda^0_{\mathbb C}\oplus\Lambda^2_{+,\mathbb C}\to S^+\otimes S^+$ and $G:\Lambda^1_{\mathbb C}\to S^-\otimes S^+$ which are parallel, meaning that they intertwine the indicated induced connections, and under which

$$
G^{-1}D^+_{A_+}F(f,\omega)=df+\sqrt2\,d^*\omega.
$$

Here $\Lambda^2_+$ is the $+1$ Hodge-star subbundle, $d^*$ is the Riemannian formal adjoint, and all Sobolev spaces and adjoints use the specified bundle metrics. In the complete twisted spinor bundle the full Dirac operator is selfadjoint with domain $H^1$ and its square has domain $H^2$. This is a direct operator calculation for this explicit bundle, not an application of a general index formula.

## Statement references

[[prop-qftx-su2-bpst-explicit-connection-on-s4]]

[[def-qftx-instanton-number-and-asd-sector]]

[[thm-hodge-laplacian-kernel-represents-de-rham-and-dolbeault-cohomology]]

[[thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition]]

[[thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity]]

[[thm-de-rham-cohomology-of-spheres]]

[[thm-general-stokes-theorem]]

[[def-axiom-of-choice]]

[[def-fredholm-operator-cokernel-and-index]]

## Facts & Assumptions

**Given:** full AC and the round, oriented, standard-spin sphere, its spin connection and twist specified in the Statement.

[F1] [[prop-qftx-su2-bpst-explicit-connection-on-s4]] gives the scale-one smooth global connection, its transition $u^{-1}$, self-duality and charge $1$. [[def-qftx-instanton-number-and-asd-sector]] fixes $q=-\langle c_2,[S^4]\rangle$ for the defining $SU(2)$ representation.

[F2] [[thm-hodge-laplacian-kernel-represents-de-rham-and-dolbeault-cohomology]] identifies smooth Hodge kernels with de Rham cohomology. [[thm-de-rham-cohomology-of-spheres]] gives $H^0(S^4;\mathbb C)=\mathbb C$ and $H^1=H^2=0$.

[F3] [[thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition]] supplies Green inverses and smooth kernels for compact scalar-symbol Laplace-type operators. [[thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity]] supplies Sobolev domains, weak regularity, smooth density and compact Sobolev inclusions.

[F4] [[thm-general-stokes-theorem]] makes an exact top-form integral vanish on the closed sphere.

[F5] [[def-fredholm-operator-cokernel-and-index]] supplies the bounded Banach-space definition of Fredholm, cokernel and index stated above. Fredholm assertions here concern the bounded $H^1\to L^2$ realization; selfadjointness concerns the unbounded $L^2$ realization with domain $H^1$.

[A1] [[def-axiom-of-choice]] supplies the full AC hypotheses of [F1]–[F3].

## Proof

1.1 Write a quaternion as $q=x^4I+x^aQ_a$ with $Q_a=-i\sigma_a$, where the Pauli matrices satisfy $\sigma_a\sigma_b=\delta_{ab}I+i\epsilon_{abc}\sigma_c$. Thus $Q_aQ_b=-\delta_{ab}I+\epsilon_{abc}Q_c$, $\operatorname{tr}(Q_aQ_b)=-2\delta_{ab}$. On $\mathbb C^4=\mathbb H\oplus\mathbb H$ take $c(q)=\begin{pmatrix}0&q\\-\bar q&0\end{pmatrix}$. Direct multiplication gives the Clifford relation and $\Gamma=\operatorname{diag}(-I,I)$, so $S^+$ is the second quaternionic factor. The spin action $\operatorname{diag}(a,b)$ conjugates $c(q)$ to $c(aqb^{-1})$. Its kernel on vectors is $(1,1),(-1,-1)$; surjectivity onto $SO(4)$ follows since its differential spans the six independent plane rotations, and a compact subgroup with full Lie algebra is open and closed in the connected group $SO(4)$. For an explicit five-dimensional lift extend the matrices by $c_5=i\Gamma$ and use the antiunitary $K_5=\Gamma\operatorname{diag}(i\sigma_2,i\sigma_2)\circ\text{complex conjugation}$; direct multiplication gives $K_5^2=-1$ and $K_5c_j=-c_jK_5$ for all five Clifford generators. Even products commute with $K_5$. The standard sphere lift exists concretely as the normal-frame reduction of the trivial five-dimensional spin frame: products of two unit Clifford vectors act as plane rotations, generate $SO(5)$, and their kernel is $\{1,-1\}$ (an element commuting with all Clifford vectors is scalar, and in the quaternionic-unitary even algebra such a scalar is real). Restricting the last vector to the outward normal gives exactly this $\operatorname{Spin}(4)$ lift. The invariant alternating form $\varepsilon(v,w)=v^T(i\sigma_2)w$ on $S^+$ identifies $S^+$ with its complex dual, so $S^+\otimes S^+\cong\operatorname{End}(S^+)$ and $S^-\otimes S^+\cong\operatorname{Hom}(S^+,S^-)$, preserving metrics and connections. [given, algebra, construct]

2.1 Extend $c$ from vectors to a one-form $\alpha$ by $c(\alpha)=c(\alpha^\sharp)$, where $\alpha^\sharp$ is its metric-dual vector, and to a two-form $\omega$ by $c(\omega)=\tfrac12\sum_{i,j}\omega(e_i,e_j)c(e_i)c(e_j)$ in an orthonormal frame. For an oriented orthonormal coframe let $\Omega_1=e^{14}+e^{23}$, $\Omega_2=e^{24}+e^{31}$, $\Omega_3=e^{34}+e^{12}$. They form an orthogonal self-dual basis, each of squared norm $2$. Matrix multiplication gives $c(\Omega_a)|_{S^+}=2Q_a$ and $\operatorname{tr}(Q_a^*Q_b)=2\delta_{ab}$. Consequently $F(f,\omega)=fI/\sqrt2+c(\omega)|_{S^+}/2$ and $G(\alpha)=c(\alpha)|_{S^+}/\sqrt2$ are unitary fiber maps. They are independent of spin frame because Clifford multiplication and $\varepsilon$ are equivariant. They are parallel because the lifted Levi-Civita connection preserves both operations: its local coefficient $-\tfrac14\omega_{ij}c(e_i)c(e_j)$ satisfies the Clifford derivative rule by the commutator identity, and $SU(2)$ preserves $\varepsilon$. At a point choose an oriented orthonormal frame with $\nabla e_i=0$ there; such a frame is obtained by parallel transport in geodesic normal coordinates. Directly on the displayed three basis forms, $c(e_i)c(\omega)|_{S^+}=-2c(\iota_{e_i}\omega)|_{S^+}$; linearity proves it for every self-dual two-form. Applying the Dirac operator to $F(f,\omega)$ at that point gives $c(df)/\sqrt2-\sum_i c(\iota_{e_i}\nabla_i\omega)=G(df+\sqrt2d^*\omega)$. Since this identity is tensorial, it holds globally. [given, step 1.1, algebra]

3.1 Put $T:H^1(S^4;\Lambda^0_{\mathbb C}\oplus\Lambda^2_{+,\mathbb C})\to L^2(S^4;\Lambda^1_{\mathbb C})$, $T(f,\omega)=df+\sqrt2d^*\omega$; the first-order estimate makes it bounded. In this proof $T^*$ denotes the formal $L^2$ adjoint differential expression, rather than the Hilbert adjoint of this bounded map between differently normed spaces. Integration by parts gives $T^*\alpha=(d^*\alpha,\sqrt2P_+d\alpha)$, where $P_+=(1+*)/2$. Since $d^2=(d^*)^2=0$, $T^*T=\Delta_0\oplus\Delta_{2,+}$: on a self-dual two-form, $d^*d\omega=*dd^*\omega$, hence $\Delta\omega=2P_+dd^*\omega$. Also $TT^*=\Delta_1$, since $2d^*P_+d\alpha=d^*d\alpha+d^**d\alpha=d^*d\alpha$ and $d^**d\alpha=-*d(d\alpha)=0$. These exact identities initially hold on smooth sections and extend distributionally on Sobolev sections. Hodge star is parallel and commutes with $\Delta$, so its self-dual restriction has the same scalar positive principal symbol. [given, step 2.1, algebra]

3.2 Use the stereographic embedding $x\mapsto(2x/(1+r^2),(1-r^2)/(1+r^2))$. At $x=0$, the outward normal is $e_5$ and the tangent vectors are $2e_1,\ldots,2e_4$; moving $e_5$ past four vectors has positive sign, so this chart is compatible with the boundary orientation everywhere by continuity. Its orthonormal coframe is $e^a=2(1+r^2)^{-1}dx^a$. Cartan's equation $de^a+\omega_{ab}\wedge e^b=0$ gives $\omega_{ab}=-2(x_bdx^a-x_adx^b)/(1+r^2)$. The positive spin connection from step 2.1 is therefore $A_+=\eta_{a\mu\nu}x^\nu Q_a\,dx^\mu/(1+r^2)=2\eta_{a\mu\nu}x^\nu T_a\,dx^\mu/(1+r^2)$ with $T_a=Q_a/2=-i\sigma_a/2$. The two conformal oriented frames are related by the product of reflections $h_{x/r}h_1$ on quaternions, where $h_v(w)=-v\bar wv$; their product is $w\mapsto uwu$, with $u=(x^4I-i x^a\sigma_a)/r$. Its spin lift is $(u,u^{-1})$, so the positive-spin frame has transition $u^{-1}$, exactly the bundle gluing in [F1]. Hence this is the scale-one global BPST connection, not merely a local curvature match. [F1] gives $q=1$ and $\langle c_2(E),[S^4]\rangle=-1$ in the declared convention. Equivalently its orthonormal-frame curvature is $-\tfrac12\sum_aQ_a\Omega_a$, giving $\operatorname{tr}(F\wedge F)=-3\,d\mathrm{vol}_{S^4}$, consistent with that charge. [given, A1, F1, step 1.1, step 2.1, algebra]

4.1 If $T(f,\omega)=0$ with $(f,\omega)\in H^1$, step 3.1 and weak regularity [F3] make both entries smooth and harmonic. By [F2], $f$ is constant and the harmonic two-form is zero, giving a one-dimensional complex kernel. The same vanishing has an elementary check: $d^*\omega=0$ and $*\omega=\omega$ imply $d\omega=0$; since $H^2=0$, write $\omega=d\beta$, and [F4] gives $\|\omega\|_2^2=\int\omega\wedge\overline\omega=\int d(\beta\wedge\overline\omega)=0$. Since $H^1(S^4;\mathbb C)=0$, [F2] implies $\ker\Delta_1=0$. Its Green inverse $G_1:L^2\to H^2$ from [F2]–[F3] therefore satisfies $\Delta_1G_1=I$. By step 3.1, $T^*G_1:L^2\to H^1$ is a bounded right inverse of $T$. Thus $T$ is surjective, its range is closed and its cokernel is zero. It is Fredholm by [F5], with index $1-0=1$. The unitary maps in step 2.1 transfer this conclusion to $D^+_{A_+}$. [given, A1, F2, F3, F4, F5, step 3.1, algebra]

4.2 Under the unitary identifications, the full Dirac differential expression is $\mathscr D=\begin{pmatrix}0&T^*\\T&0\end{pmatrix}$ on smooth sections. Its square expression is the direct sum of the Hodge Laplacians in step 3.1; let $P:H^2\to L^2$ be this second-order operator with domain $H^2$. It is formally symmetric, has scalar positive principal symbol, and is nonnegative because $(Pu,u)_2=\|\mathscr D u\|_2^2$ on smooth sections; [F3] therefore makes $P$ selfadjoint on $H^2$. For $u\in H^2$, Cauchy–Schwarz and nonnegativity give $\|(P+I)u\|_2\|u\|_2\geq((P+I)u,u)_2\geq\|u\|_2^2$, so $P+I$ has closed range and zero kernel. Since $P+I$ is selfadjoint, its range has orthogonal complement $\ker(P+I)=0$ and is therefore dense; hence it is onto. Write $B=(P+I)^{-1}:L^2\to H^2$; the elliptic estimate in [F3] makes this inverse bounded. Then $(\mathscr D\mp i)B$ maps $L^2$ to $H^1$ and is a right inverse of $\mathscr D\pm i$. The block expression is symmetric on $H^1$ by smooth density. If $v\in\operatorname{dom}\mathscr D^*$, choose $u\in H^1$ with $(\mathscr D+i)u=(\mathscr D^*+i)v$; then $v-u\in\ker(\mathscr D^*+i)=\operatorname{ran}(\mathscr D-i)^\perp=0$. Thus $\mathscr D$ is selfadjoint with domain $H^1$. Finally, if $u\in H^1$ and $\mathscr D u\in H^1$, then $Pu=\mathscr D^2u\in L^2$ distributionally, so elliptic regularity [F3] gives $u\in H^2$; conversely $H^2$ lies in the square domain. Hence the square domain is exactly $H^2$. [given, A1, F3, step 3.1, algebra]

5.1 The exact isometries and operator identities prove the chiral kernel, cokernel and Fredholm index directly, while step 3.2 supplies the actual global charge-one bundle and connection and step 4.2 the analytic full-Dirac realization. Full AC is used only through the cited analytic and characteristic-form interfaces. No Atiyah–Singer input or physical anomaly formula was assumed. [A1, step 2.1, step 4.1, step 4.2, step 3.2] ∎
