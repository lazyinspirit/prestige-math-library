---
id: lem-finite-cusp-maass-selberg-truncation-identity
kind: lemma
title: Finite-cusp Maass–Selberg truncation identity
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-finite-cusp-pseudo-laplacian-data
  - def-axiom-of-choice
  - thm-finite-area-fuchsian-quotients-have-compact-cusp-truncations
  - lem-initial-cofinite-eisenstein-cusp-asymptotics
  - thm-greens-theorem-for-finite-unions-of-elementary-regions
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Yves Colin de Verdière, Pseudo-laplaciens II, Annales de l'Institut Fourier 33(2) (1983), 87–113"
      url: "https://www.numdam.org/article/AIF_1983__33_2_87_0.pdf"
      locator: "Sections 1–2, printed pp. 89–92 / PDF pp. 4–7: one-cusp Green identity and pseudo-Laplacian truncation route; the finite-cusp vector identity is proved here."
    - title: "Peter Sarnak, Spectral Theory of Automorphic Forms; notes by Tony Feng and Gyujin Oh"
      url: "https://web.math.princeton.edu/~gyujino/Sarnak_course.pdf"
      locator: "Section 5.1, Lemma 5.1.1, printed pp. 24–25 / PDF pp. 24–25: Maass–Selberg formula statement; its Green calculation is omitted there and proved here."
dependency_level: 8
---

## Statement

Assume AC and the public finite-cusp data. Let $E(s)$ be the initially convergent Eisenstein column matrix, and let $\Phi(s)$ be its outgoing constant-coefficient matrix on the open cusps. For $a,b\in\mathbb C^{J}$, write $\langle a,b\rangle=\sum_{j\in J}a_j\overline{b_j}$ and let $\Lambda^Y E(s)a$ be obtained by subtracting its complete constant term $a_jy^s+(\Phi(s)a)_jy^{1-s}$ on every open cusp tail $y>Y$. If $\operatorname{Re}s,\operatorname{Re}t>1$, $s+\overline t\ne1$, and $s\ne\overline t$, then
$$\begin{aligned}\langle\Lambda^Y E(s)a,\Lambda^Y E(t)b\rangle_H={}&\frac{Y^{s+\overline t-1}\langle a,b\rangle-Y^{1-s-\overline t}\langle\Phi(s)a,\Phi(t)b\rangle}{s+\overline t-1}\\&+\frac{Y^{s-\overline t}\langle a,\Phi(t)b\rangle-Y^{\overline t-s}\langle\Phi(s)a,b\rangle}{s-\overline t}.\end{aligned}$$
At coincident denominator values, the formula holds by its continuous limit for parameter families with the locally uniform cusp decay in the preceding lemma. This is an identity on the initial half-plane and asserts no continuation.

## Facts & Assumptions

**Given:** The Axiom of Choice, the finite-cusp data, $Y>b$, $\operatorname{Re}s,\operatorname{Re}t>1$, and column vectors $a,b$.

[F1] The normalized cusp coordinates have unit period, the quotient inner product is linear in its first argument, and the characters are unitary. [[def-finite-cusp-pseudo-laplacian-data]]

[F2] The initial Eisenstein columns have the stated constant terms and exponentially decaying nonconstant modes, with locally uniform first normal derivatives. [[lem-initial-cofinite-eisenstein-cusp-asymptotics]]

[F3] Green's identity holds on a finite union of elementary regions with piecewise smooth boundary. [[thm-greens-theorem-for-finite-unions-of-elementary-regions]]

[F4] A finite-area Fuchsian quotient has a compact core bounded by finitely many standard cusp horocycles, and a free-basepoint Dirichlet region is finite-sided. [[thm-finite-area-fuchsian-quotients-have-compact-cusp-truncations]]

[A1] AC is the explicit scope assumption in the finite-cusp data. [[def-axiom-of-choice]]

## Proof

**Proof technique:** direct.

**Given:** The vectors, parameters, truncation height, and cusp data in the Statement.

1.1 The constant terms subtracted in $\Lambda^Y E(s)a$ and $\Lambda^Y E(t)b$ leave only exponentially decaying modes on every cusp tail by [F2]. Their squared integrals are bounded by a constant times $\int_Y^\infty e^{-cy}y^{-2}dy<\infty$; the compact core has finite measure and both functions are smooth there. Thus both truncations lie in $H$. Their nonconstant remainders have zero mean in every open cusp, as do their normal derivatives. [F1, F2, given, algebra]

1.2 For $R>Y$, truncate the quotient at height $R$ in every cusp and apply [F3] to $u=E(s)a$ and $v=E(t)b$. By [F4], a free-basepoint Dirichlet polygon is finite-sided and has a compact truncation. Its sides are vertical lines or circular arcs and the new boundaries are finitely many horizontal horocycles. Subdivide at their finitely many intersections, vertical tangencies and horizontal extrema; every resulting piece has boundary given by finitely many graphs and is a finite elementary Green region. Paired sides contribute opposite fluxes: the automorphy factors multiply to $|\chi(\gamma)|^2=1$, the Möbius change of variable preserves the hyperbolic Green flux, and orientations reverse. Elliptic vertices have finite stabilizer; removing disks of radius $\varepsilon$ around them contributes flux tending to zero because the lifted sections and their first derivatives are bounded and the boundary lengths are $O(\varepsilon)$. The remaining top-boundary flux is the sum over cusps of $\int_0^1(-u_y\overline v+u\overline{v_y})\,dx$ at height $R$. For a cusp eigenvalue pair $\lambda_s=s(1-s)$ and $\lambda_t=t(1-t)$ this gives $(\lambda_s-\overline{\lambda_t})\int_{X_R}u\overline v\,d\mu$ equal to that flux. [F1, F2, F3, F4, algebra]

2.1 At a cusp, substitute $C_u(y)=a_jy^s+(\Phi(s)a)_jy^{1-s}$ and $C_v(y)=b_jy^t+(\Phi(t)b)_jy^{1-t}$. The mixed constant/nonconstant terms vanish after $x$-integration by step 1.1, and the nonconstant/nonconstant flux tends to zero exponentially by [F2]. The remaining constant flux is $W_j(R)=-C_u'(R)\overline{C_v(R)}+C_u(R)\overline{C_v'(R)}$. Direct differentiation gives $W_j'(y)=(\lambda_s-\overline{\lambda_t})C_u(y)\overline{C_v(y)}y^{-2}$. Subtracting the constant-term product from $\int_{X_R}u\overline v\,d\mu$ is exactly the inner product of the truncated functions on height at most $R$. Integrating this derivative from $Y$ to $R$ and letting $R\to\infty$ therefore gives the truncated inner product as $\sum_j W_j(Y)/(\lambda_s-\overline{\lambda_t})$. [F1, F2, step 1.1, step 1.2, algebra]

3.1 Expanding $W_j(Y)$ yields four terms: $(\overline t-s)a_j\overline{b_j}Y^{s+\overline t-1}$, $(1-s-\overline t)a_j\overline{(\Phi(t)b)_j}Y^{s-\overline t}$, $(s+\overline t-1)(\Phi(s)a)_j\overline{b_j}Y^{\overline t-s}$, and $(s-\overline t)(\Phi(s)a)_j\overline{(\Phi(t)b)_j}Y^{1-s-\overline t}$. Since $\lambda_s-\overline{\lambda_t}=(s-\overline t)(1-s-\overline t)$, division and summation over $j$ give the displayed formula. In analytic continuation the variables are $s$ and $\overline t$, with the second Eisenstein column conjugated; the identity is meromorphic in those independent variables. If a denominator vanishes, the truncated inner product is continuous there by its locally uniform cusp-integral representation, so the apparent singularity has the corresponding continuous limit. [given, step 2.1, algebra] ∎
