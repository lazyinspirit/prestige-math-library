---
id: ex-st-pure-spinor-curved-quartet-superdeterminant
kind: example
title: Finite Matched Curved Non-Minimal Quartet Determinant
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
domain: mathematics
library: physics
category: string-theory
deps:
  - def-st-pure-spinor-cone-bv-geometry
dependency_roles:
  def-st-pure-spinor-cone-bv-geometry: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Osvaldo Chandia and Brenno Carlini Vallilo, Non-minimal fields of the pure spinor string in general curved backgrounds"
      url: "https://arxiv.org/pdf/1412.1030v1"
      locator: "§3.2, equations (3.12)–(3.23), generic type-II non-minimal transformations and action; §4 is the special $AdS_5\times S^5$ case. The finite matched determinant is derived here and is not attributed as a theorem of that paper."
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Example

Use the finite integration conventions of the Pure-Spinor Cone and Finite BV Semidensity Geometry definition. Fix a finite exterior coefficient algebra $\mathcal A=\Lambda_{\mathbb C}(\xi_1,\ldots,\xi_q)$, where the generators anticommute and have odd parity; its body map kills all $\xi_i$. Let $E=\mathbb C^n$ have a specified basis. The variables $x^i,\bar b_i$ are independent even variables, and $r^i,\bar\eta_i$ are independent odd generators; bars label dual variables, not complex conjugation. All products lie in $\mathcal A[x,\bar b]\otimes\Lambda(r,\bar\eta)$ with the Koszul sign rule $uv=(-1)^{|u||v|}vu$ for homogeneous elements. Pair a row dual with a column in the displayed order.

Let $D\in\operatorname{Mat}_n(\mathcal A_{\bar0})$ have invertible body, so its nilpotent expansion gives an inverse. It acts identically in the even and odd sectors. Let $M$ be a finite graded complex parameter space with homogeneous basis of parities $\epsilon_j$, and hold fixed coefficients $m^j\in\mathcal A_{\epsilon_j}$. Choose matrices $B,C$ with $B_{ij}\in\mathcal A_{\epsilon_j}$ and $C_{ij}\in\mathcal A_{\epsilon_j+1}$, and $K\in\operatorname{Mat}_n(\mathcal A_{\bar1})$. Thus $Bm$ is even, while $Cm$ and $Kx$ are odd; the lower-left block has odd coefficients even though the full supermatrix is even. With a specified complex Gaussian contour/continuation for the body and coefficientwise nilpotent expansion, consider

$$S=\bar b\,D x+\bar b\,B m+\bar\eta\,D r+\bar\eta\,Kx+\bar\eta\,C m,$$

The paired Gaussian factor is exactly one, including its determinant-line phase, while the fixed $m$-dependent minimal action and minimal-only antifield sources are unchanged. This is a finite mode calculation; it proves neither convergence of a noncompact integral nor BV Stokes at the pure-spinor cone apex/infinity.

## Statement references

[[def-st-pure-spinor-cone-bv-geometry]]

[Chandía and Vallilo, curved non-minimal quartet](https://arxiv.org/pdf/1412.1030v1)

## Facts & Assumptions

**Given:** Matched finite even/odd mode spaces, the same invertible even $D$ in both sectors, compatible determinant-line orientation/branch, and allowed formal Gaussian shifts over $\mathcal A$.

[F1] [[def-st-pure-spinor-cone-bv-geometry]] defines finite graded integration data and requires the actual contour and determinant branch to be declared.

[A1] The commuting and anticommuting Gaussian integrals use paired measures normalized on compatible branches by $\int d\bar b\,dx\,e^{-\bar bDx}=(\det D)^{-1}$ and $\int d\bar\eta\,dr\,e^{-\bar\eta Dr}=\det D$. For an even matrix with nilpotent coefficients these equations mean the finite Taylor extension of the body Gaussian. The additional variables $m$ are held fixed in the high integration.

## Proof

1.1 Set $x'=x+D^{-1}Bm$, then set $r'=r+D^{-1}(Kx'+Cm-KD^{-1}Bm)$. Substitution gives $Dx+Bm=Dx'$ and $Dr+Kx+Cm=Dr'$, so $S=\bar bDx'+\bar\eta Dr'$. In the ordered variables $(x,r)$ this is triangular with identity on the $x$ and $r$ diagonal blocks; its Berezinian (the graded change-of-variables determinant) is $\det I/\det I=1$. The odd entries of $K$ make the second shift parity preserving, and the nilpotent part of an even shift is interpreted coefficientwise.  The shifts leave $m$ and every source depending only on the fixed minimal variables unchanged. [F1, A1, algebra]

2.1 The commuting Gaussian contributes $(\det D)^{-1}$ and the matched anticommuting Gaussian contributes $\det D$; the shared determinant-line branch makes their product exactly $1$, including phase. Equivalently, the even supermatrix $\left(\begin{smallmatrix}D&0\\K&D\end{smallmatrix}\right)$ has $\operatorname{sdet}=\det D/\det D=1$ by the block formula $\operatorname{sdet}\left(\begin{smallmatrix}A&B_0\\C_0&D_0\end{smallmatrix}\right)=\det(A-B_0D_0^{-1}C_0)/\det D_0$ for even diagonal blocks and odd off-diagonal blocks, here with $B_0=0$. [A1, step 1.1, algebra] ∎

## Local quartet identification

Here is the local curved-quartet realization to which this finite model applies. In the non-minimal sector the additional bosonic spinor $\ell_\alpha$ satisfies $\ell\gamma^a\ell=0$ and $\ell\ne0$, and its odd partner obeys $\ell\gamma^a r=0$, the linearized constraint. Thus $r$ is a parity-reversed tangent vector to the non-minimal cone, and the conjugates $s,\omega$ are the corresponding odd and even cotangent variables modulo conormal gauge. On an eleven-coordinate cone chart, $x,r,\bar\eta,\bar b$ are respectively finite mode coefficients of the coordinate fluctuation of $\ell$, its tangent partner $r$, and the dual variables $s,\omega$. The cone is the one in [F1], with the dual Weyl block used for $\ell$; exchanging the two Weyl modules gives the same eleven-coordinate construction. No sixteen unconstrained pairs are used.

More explicitly, fix an open worldsheet coordinate patch $U\subseteq\mathbb C$, a smooth background map $\ell_0:U\to C$ into that chart, and its coordinate frame of the rank-eleven bundle $V=\ell_0^*TC$. Choose linearly independent modes $u_j\in C_c^\infty(U,V)$ and specified complex-linear maps $p^i:C^\infty(U,V)\to\mathbb C$ with $p^i(u_j)=\delta^i_j$, extended coefficientwise over $\mathcal A$. Specify a smooth even matrix $a_{\bar z}:U\to\operatorname{Mat}_{11}(\mathcal A_{\bar0})$; the operator $u\mapsto(\partial_{\bar z}u+a_{\bar z}u)d\bar z$ is a connection in the $(0,1)$ direction in this frame. Its common finite kinetic matrix, after using $d\bar z$ to identify the output coefficients, is $D_{ij}=p^i(\partial_{\bar z}u_j+a_{\bar z}u_j)$ in both parity sectors. Retain only a chosen block with invertible body. Let $q$ be the odd left derivation on the minimal coefficient algebra induced by the minimal BRST variation, and let $\sigma$ be the odd matrix of its induced frame rotation. The linear quartet rules used in the gauge fermion are $Qx=-r+\sigma x$ and $Q\bar\eta=\bar b+\bar\eta\sigma$, with $Q$ acting as $q$ on fixed minimal coefficients. For a fixed even column $b=Bm$, the graded Leibniz rule gives the exact finite identity

$$Q\bigl(\bar\eta(Dx+b)\bigr)=\bar bDx+\bar b b+\bar\eta Dr+\bar\eta(\sigma D-qD-D\sigma)x+\bar\eta(\sigma b-qb).$$

Thus the affine gauge-fermion realization identifies $K=\sigma D-qD-D\sigma$ and $Cm=\sigma b-qb$; independent fixed odd source columns $Cm$ are also allowed in the Gaussian above. These are odd coefficients, as required. Chandía–Vallilo (3.14), (3.17), and (3.23) provide the curved non-minimal rules and the gauge fermion $\int s\nabla\ell$ motivating this linear mode realization. The calculation here is conditional on the declared common truncation and linear quartet rules: it does not assert that an arbitrary cutoff of their complete interacting action preserves them, or discard additional nonlinear vertices. Minimal-only antifield sources are precisely fixed coefficients multiplying functions of $m$ alone, so they factor out of the quartet integration.

## Scope boundary

Unmatched zero modes, unequal operators, incompatible contours, noncompact convergence and a cone boundary contribution are outside this finite example.
