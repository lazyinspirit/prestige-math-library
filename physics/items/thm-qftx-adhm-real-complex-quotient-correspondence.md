---
id: thm-qftx-adhm-real-complex-quotient-correspondence
kind: theorem
title: "Real and complex ADHM quotients at positive and regular zero FI"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-adhm-linear-data-and-framed-monads
dependency_level: 2
deps:
  - def-qftx-adhm-linear-data-stability-and-regularity
  - lem-adhm-stable-quotient-and-torus-lift
  - def-axiom-of-choice
  - thm-heine-borel-rn
  - thm-extreme-value-metric
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - lem-xd-finite-matrix-exponential-series
  - thm-parametrized-implicit-function-theorem-with-higher-regularity
  - thm-free-proper-action-quotient-manifold
  - thm-constant-rank-theorem-for-manifolds
dependency_roles:
  def-qftx-adhm-linear-data-stability-and-regularity: mathematical-premise
  lem-adhm-stable-quotient-and-torus-lift: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  thm-complex-spectral-theorem-for-normal-endomorphisms: mathematical-premise
  lem-xd-finite-matrix-exponential-series: mathematical-premise
  thm-parametrized-implicit-function-theorem-with-higher-regularity: mathematical-premise
  thm-free-proper-action-quotient-manifold: mathematical-premise
  thm-constant-rank-theorem-for-manifolds: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Nikita A. Nekrasov, Seiberg–Witten Prepotential from Instanton Counting"
      url: https://arxiv.org/pdf/hep-th/0206161
    - title: "Hiraku Nakajima and Kota Yoshioka, Lectures on Instanton Counting"
      url: https://arxiv.org/pdf/math/0311058
verification:
  precheck: pending
---

## Statement

Assume AC. Fix $N\ge1$, $k\ge0$, standard Hermitian $V=\mathbb C^k$, $W=\mathbb C^N$ and ADHM data $x=(B_1,B_2,I,J)$ with the complex equation $[B_1,B_2]+IJ=0$. Stability means that the $B_1,B_2$ words applied to $I(W)$ span $V$; costability means no nonzero common invariant subspace of $V$ lies in $\ker J$; regular means both. Set

$$\mu_{\mathbb R}(x)=[B_1,B_1^\dagger]+[B_2,B_2^\dagger]+II^\dagger-J^\dagger J.$$

For every $\zeta>0$, each stable $GL(V)$ orbit meets $\mu_{\mathbb R}=\zeta I_V$ in exactly one $U(V)$ orbit, and the inclusion induces a diffeomorphism of smooth real manifolds

$$\{\mu_{\mathbb C}=0,\ \mu_{\mathbb R}=\zeta I_V,\ \mathrm{stable}\}/U(V)\ \cong\ X^s/GL(V).$$

At $\zeta=0$, every stable datum satisfying the real equation is automatically costable. Each regular complex orbit meets the zero real level in exactly one unitary orbit, giving instead

$$\{\mu_{\mathbb C}=0,\ \mu_{\mathbb R}=0,\ \mathrm{stable}\}/U(V)\ \cong\ X^{\mathrm{reg}}/GL(V).$$

Both identifications are equivariant for the compact rotation/framing torus in the raw-data convention. For $k=0$ all spaces are points. This theorem identifies the stated finite-dimensional quotients; it asserts no correspondence with sheaves or ASD connections, and no identification of the entire positive-FI quotient with the zero-FI regular locus.

## Statement references

[[def-qftx-adhm-linear-data-stability-and-regularity]]

[Nekrasov, §§3.1–3.3: moment maps and the positive-FI chamber](https://arxiv.org/pdf/hep-th/0206161)

## Facts & Assumptions

**Given:** AC, the specified finite-dimensional spaces, equations, stability and gauge actions. [[def-axiom-of-choice]]

[F1] The raw moment maps, regularity and torus conventions are exactly as defined; in particular the real moment uses $+II^\dagger-J^\dagger J$. [[def-qftx-adhm-linear-data-stability-and-regularity]]

[F2] Stable word frames of length at most $k-1$ cover $X^s$; the complex gauge action is free and proper and its quotient has smooth holomorphic word-frame charts. [[lem-adhm-stable-quotient-and-torus-lift]]

[F3] Closed bounded sets of finite real matrices are compact, and a continuous real function on a nonempty compact metric space attains its minimum. [[thm-heine-borel-rn]], [[thm-extreme-value-metric]]

[F4] Normal complex matrices have orthonormal eigenbases; Hermitian eigenvalues are real, by taking the inner product of an eigenvector with its image. Finite matrix exponential series converge with their differential identities. [[thm-complex-spectral-theorem-for-normal-endomorphisms]], [[lem-xd-finite-matrix-exponential-series]]

[F5] The finite real implicit-function theorem gives a local $C^r$ solution when the derivative in the unknown block is invertible. [[thm-parametrized-implicit-function-theorem-with-higher-regularity]]

[F6] Free proper actions have smooth manifold quotients with submersive quotient maps; submersions have local smooth sections by the constant-rank normal form. [[thm-free-proper-action-quotient-manifold]], [[thm-constant-rank-theorem-for-manifolds]]

[F7] For $A=P+iQ\in M_k(\mathbb C)$, with $P,Q\in M_k(\mathbb R)$, define its realification by $\rho(A)=\begin{pmatrix}P&-Q\\Q&P\end{pmatrix}\in M_{2k}(\mathbb R)$. This is an injective real-linear map satisfying $\rho(AB)=\rho(A)\rho(B)$ and $\rho(I)=I$. Define $e^A=\sum_{m\ge0}A^m/m!$ for complex matrices. The real-matrix exponential supplier [[lem-xd-finite-matrix-exponential-series]] applied to $\rho(A)$, together with these identities and continuity of $\rho^{-1}$ on its image, gives convergence of this series, $\rho(e^{tA})=e^{t\rho(A)}$ for real $t$, and $\frac{d}{dt}e^{tA}=Ae^{tA}=e^{tA}A$. The map $A\mapsto e^A$ is smooth in the real matrix entries: on a bounded set of realified matrices with norm at most $R$, an order-$s$ derivative of the degree-$m$ term is bounded by a constant times $m^sR^{m-s}/m!$ for $m\ge s$ and is zero for $m<s$; these bounds are summable for every fixed $s$.

## Proof

**Given:** A fixed stable datum $x$, and $k>0$ until the final step. Every norm below is Frobenius unless explicitly an operator norm.

1.1 For $g\in GL(V)$ put $x'=g\cdot x$ and $M(g)^2=\sum_i\|B_i'\|^2+\|I'\|^2+\|J'\|^2$. A fixed word frame $C(x)$ exists by [F2]. Each column of $gC(x)=C(x')$ is a product of at most $k-1$ matrices $B_i'$ followed by $I'$ on a unit framing vector. Submultiplicativity and operator norm bounded by Frobenius norm give $\|g\|_{\mathrm{op}}\le A_x(1+M(g))^k$ for $A_x=\sqrt{k}\|C(x)^{-1}\|_{\mathrm{op}}$. If $x$ is costable, the rows consisting of coordinate rows of $JB_{i_1}\cdots B_{i_m}$ span $V^*$: their common annihilator is the largest common $B_i$-invariant subspace in $\ker J$, hence zero. The same finite dimension-growth argument as for columns gives a row basis $D(x)$ using words of length at most $k-1$. Since $D(x')=D(x)g^{-1}$, the identical norm estimate gives $\|g^{-1}\|_{\mathrm{op}}\le A_x'(1+M(g))^k$. This also proves costability is open, since it is covered by the nonvanishing determinants of finitely many such row frames. [F1, F2, algebra]

2.1 Define $F_\zeta(g)=M(g)^2-\zeta\log\det(g^\dagger g)$. It is continuous and invariant under left $U(V)$. By [F4], the positive eigenvalues of $g^\dagger g$ are at most $\|g\|_{\mathrm{op}}^2$, so $\det(g^\dagger g)\le\|g\|_{\mathrm{op}}^{2k}$. The column bound in step 1.1 therefore gives $\log\det(g^\dagger g)\le C_x+2k^2\log(1+M(g))$, with $C_x=2k\log\max\{1,A_x\}$. Since $\log(1+M)\le M$ for $M\ge0$, a sublevel $F_\zeta\le c$ with $\zeta>0$ bounds $M$ by the quadratic inequality $M^2-2\zeta k^2M-\zeta C_x\le c$, and hence bounds $g$. The same sublevel gives $\det(g^\dagger g)\ge e^{-c/\zeta}>0$; bounded entries and the adjugate formula therefore bound $g^{-1}$. The sublevel is closed in the finite matrix space, since any matrix limit remains invertible by this determinant bound. It is compact by [F3]. The nonempty sublevel at $F_\zeta(I)$ has a minimum, which is a global minimum since all points outside have larger value. For $\zeta=0$ and regular $x$, $F_0=M^2$ directly bounds $M$, and the two word bounds in step 1.1 bound both $g$ and $g^{-1}$; the same closedness/compactness argument gives a minimum. [F3, F4, step 1.1, algebra]

3.1 Let $H=H^\dagger$ and vary $g$ by $e^{tH}g$. Differentiating the finite trace expressions gives $\frac{d}{dt}F_\zeta(e^{tH}g)|_{t=0}=2\operatorname{tr}(H(\mu_{\mathbb R}(x')-\zeta I))$: a $B_i'$ term contributes $2\operatorname{tr}H[B_i',B_i'^\dagger]$, the $I'$ term contributes $2\operatorname{tr}HI'I'^\dagger$, the $J'$ term contributes $-2\operatorname{tr}HJ'^\dagger J'$, and $\log\det(g^\dagger e^{2tH}g)$ has derivative $2\operatorname{tr}H$. These derivatives of $e^{tH}$ follow by applying the real-matrix supplier to $\rho(H)$ and using [F7]. Thus each minimum from step 2.1 is balanced, because the trace pairing on Hermitian matrices is nondegenerate. Conversely a balanced point is critical: these Hermitian directions and the skew-Hermitian directions tangent to the left unitary orbit span every real tangent direction of $GL(V)$, and the latter derivatives vanish by unitary invariance. [F1, F4, F7, step 2.1, algebra]

4.1 Diagonalize $H$ by [F4], with real eigenvalues $\lambda_i$. Along the preceding path the squared $B_i'$ entries have factors $e^{2t(\lambda_a-\lambda_b)}$, the squared $I'$ entries have $e^{2t\lambda_a}$ and the squared $J'$ entries have $e^{-2t\lambda_a}$. The log determinant is affine in $t$. Hence $F_\zeta''$ is a sum of $4w^2|z|^2e^{2tw}$ over those entries and their listed weights $w$, and is nonnegative. It can vanish only when $[H,B_i']=0$, $HI'=0$ and $J'H=0$. Stability of $x'$ then forces $H=0$, by applying $H$ to all spanning word vectors. Thus the path is strictly convex for every nonzero $H$. Given two critical matrices $g_1,g_2$, diagonalize the positive matrix $(g_2g_1^{-1})^\dagger(g_2g_1^{-1})$ and take the positive logarithms of its eigenvalues to write $g_2g_1^{-1}=u e^H$ with $u$ unitary and $H$ Hermitian. The endpoints of $e^{tH}g_1$ are both critical, after removing $u$ by invariance. Strict convexity forces $H=0$, so $g_2=ug_1$. This proves uniqueness of the unitary orbit at either level. [F2, F4, step 3.1, algebra]

5.1 Suppose now that $x$ is stable and $\mu_{\mathbb R}(x)=0$. For a common invariant subspace $S\subseteq\ker J$, write $V=S\oplus S^\perp$ and $B_i=\left(\begin{smallmatrix}A_i&C_i\\0&D_i\end{smallmatrix}\right)$, $I=(I_S,I_{S^\perp})^T$, $J=(0,J_{S^\perp})$. The trace on $S$ of the real equation is $0=\sum_i\|C_i\|^2+\|I_S\|^2$. Thus all $C_i$ and $I_S$ vanish. Then $S^\perp$ is invariant under both $B_i$ and contains $I(W)$, so stability gives $S^\perp=V$, hence $S=0$. This proves automatic costability at zero real level. Combining with existence and uniqueness from steps 2.1–4.1 proves both asserted bijections of orbit sets. [F1, step 2.1, step 3.1, step 4.1, algebra]

6.1 At a balanced datum $x$, let $L_x:\operatorname{Herm}(V)\to\operatorname{Herm}(V)$ be $H\mapsto\frac{d}{dt}\mu_{\mathbb R}(e^{tH}\cdot x)|_{t=0}$. Step 4.1 gives $2\operatorname{tr}(H L_xH)=F_\zeta''(e^{tH})|_{t=0}>0$ for nonzero $H$, so $L_x$ is injective and hence invertible in finite equal dimensions. The map $(H,y)\mapsto\mu_{\mathbb R}(e^H\cdot y)-\zeta I$ is smooth by [F7] and the polynomial formula for $\mu_{\mathbb R}$. By [F5] the balancing $H=H(y)$ is locally $C^r$ for every finite $r$, and uniqueness glues these branches to the same smooth map. The same invertible derivative along the Hermitian gauge directions in $T_xX^s$ proves that the real-level locus is a smooth submanifold. The unitary group is compact (closed bounded matrices), its action there is free by [F2] and proper (inverse images are closed subsets of $U(V)$ times a compact coordinate projection); therefore its quotient is smooth by [F6]. The map to the complex quotient is smooth using local submersion sections in [F6]. On any word-frame chart [F2], the local balancing map just constructed, followed by the unitary quotient map, is its smooth inverse; step 4.1 proves independence of all choices. Thus the bijections are diffeomorphisms. The compact torus commutes with gauge actions and preserves both the complex equation and $\mu_{\mathbb R}$, so the bijections are equivariant. For $k=0$ all matrices and equations are empty and all quotients are points, proving every boundary case stated. No sheaf or ASD identification was used. [F2, F3, F4, F5, F6, F7, step 3.1, step 4.1, step 5.1, algebra] ∎
