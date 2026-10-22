---
id: lem-ip-planar-conductivity-cgo-logarithmic-phases
kind: lemma
title: Conductivity CGO solutions and continuous logarithmic phases
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - lem-ip-planar-measurable-beltrami-cgo-solutions
  - lem-ip-planar-beltrami-cgo-power-phase-decay
  - lem-ip-planar-cauchy-beurling-and-near-two-inversion
  - thm-winding-number-equals-circle-degree
  - cor-winding-number-classifies-loops-in-the-punctured-plane
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Astala and Päivärinta, Calderón's inverse conductivity problem in the plane"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v163-n1-p05.pdf"
      locator: "Section 4, Proposition 4.3 and full proof, printed pp. 279–280; Section 1, equations (1.14)–(1.17)."
    - title: "Faraco and Prats, Characterization for stability in planar conductivities"
      url: "https://arxiv.org/pdf/1701.06480"
      locator: "Section 4.4, Lemmas 4.14 and 4.18 and Proposition 4.19 with proofs, printed pp. 27–30."
---

## Statement

Assume the Axiom of Choice and Countable Choice. Let $\mu$ be real, supported in $D_1$ and bounded by $0<\kappa<1$, and put $\gamma=(1-\mu)/(1+\mu)$. Let $f_\pm=f_{\pm\mu}$ be the measurable Beltrami CGO solutions. Then
$$\operatorname{Re}\frac{f_+(z,k)}{f_-(z,k)}>0,\qquad u_\gamma(z,k):=\operatorname{Re}f_+(z,k)+i\operatorname{Im}f_-(z,k)\ne0.$$
The function $u_\gamma$ solves $\operatorname{div}(\gamma\nabla u_\gamma)=0$ weakly, has the form $e^{ikz}(1+R_\gamma)$ with $R_\gamma\in W^{1,r}(\mathbb C)$ and $R_\gamma(z,k)=O(1/z)$, and $u_\gamma(\cdot,0)=1$. For $k\ne0$ there is a continuous logarithmic phase $\delta_\gamma(\cdot,k)$, uniquely normalized by
$$u_\gamma(z,k)=e^{\delta_\gamma(z,k)},\qquad \delta_\gamma(z,k)-ikz=O(1/z)\quad(z\to\infty).$$
It maps $\mathbb C$ onto $\mathbb C$. If the power-modulus hypotheses of the Beltrami phase-decay result hold, uniformly for unimodular multiples of $\mu$, then for some $C,b>0$,
$$|\delta_\gamma(z,k)-ikz|\le C|k|\min\{(1+|z|)^{-1},|k|^{-b}\}\qquad(|k|\ge1).$$
For each fixed $k$, $u_\gamma$ is uniformly Hölder continuous on every fixed disk, with an exponent $1-2/r>0$ and a constant depending only on that disk, $\kappa,r,|k|$.

## Statement references

[[lem-ip-planar-measurable-beltrami-cgo-solutions|The measurable CGO solutions and the similarity factorization in their local proof.]]

[[lem-ip-planar-beltrami-cgo-power-phase-decay|Uniform power phase bounds for all rotations of a coefficient.]]

## Facts & Assumptions

**Given:** The Axiom of Choice and Countable Choice and the real coefficient and parameters in the statement.

[F1] The normalized multipliers $M_{\pm\mu}$ never vanish and obey uniform $W^{1,r}$ and supremum bounds. The local similarity proof gives $F=c e^a$ whenever a bounded normalized function satisfies $|\bar\partial F|\le\kappa\mathbf1_{D_1}|\partial F|+B\mathbf1_{D_1}|F|$, with its limiting value $c$ at infinity. The CGO solution depends continuously on a unimodular coefficient rotation in $W^{1,r}$ and uniformly on compact sets, by the same Fredholm construction and its resolvent identity. ([[lem-ip-planar-measurable-beltrami-cgo-solutions]])

[F2] The principal phases for all rotated coefficients have uniform spatial decay and, under the extra modulus hypothesis, uniform power decay in $|k|$. The Cauchy transform has Hölder exponent $1-2/r$. ([[lem-ip-planar-beltrami-cgo-power-phase-decay]], [[lem-ip-planar-cauchy-beurling-and-near-two-inversion]])

[F3] The winding number of a loop in the punctured plane is its circle degree, is invariant under homotopy there, and vanishes for a null-homotopic loop. ([[thm-winding-number-equals-circle-degree]], [[cor-winding-number-classifies-loops-in-the-punctured-plane]])

[A1] The Axiom of Choice and Countable Choice are inherited from these analytic interfaces. ([[def-axiom-of-choice]], [[def-countable-choice]])

## Proof

**Given:** The data in the statement.

1.1 Put $M_\pm=e^{-ikz}f_\pm$. Their equations are $\bar\partial M_\pm=\pm\mu e^{-i(kz+\overline k\overline z)}(\overline{\partial M_\pm}-i\overline k\overline M_\pm)$. For every real $t$, the combination $G=M_+-itM_-$ satisfies the same displayed equation with its plus coefficient, because conjugation changes $-it$ to $it$. It therefore obeys the similarity inequality in [F1], with $B=|k|\kappa$, and tends to $1-it$ at infinity. Thus $G=(1-it)e^a$ and has no zeros. The continuous ratio $M_+/M_-$ tends to $1$ at infinity and never meets the imaginary axis: a value $it$ would give a zero of $G$. If its real part were nonpositive anywhere, continuity along a path to a sufficiently large point would force such an imaginary-axis value. Hence its real part is strictly positive everywhere. Since the exponential prefactors cancel, this is also the ratio $f_+/f_-$. [A1, F1, given, algebra]

2.1 Write $f_+=a+ib$. The equation $\bar\partial f_+=\mu\overline{\partial f_+}$ with real $\mu$ gives $b_y=\gamma a_x$ and $b_x=-\gamma a_y$. Equality of the mixed weak derivatives of $b$ implies $\operatorname{div}(\gamma\nabla a)=0$. The same computation for $f_-$, with coefficient $-\mu$, shows that its imaginary part solves the $\gamma$ equation. Thus their stated complex combination $u_\gamma$ solves that equation. Setting $A=f_++f_-$ and $B=f_+-f_-$ gives $u_\gamma=(A+\overline B)/2$. Step 1.1 is equivalent to $|B|<|A|$, so $u_\gamma\ne0$. Its normalized remainder is $R_\gamma=\tfrac12[M_++M_-+e^{-i(kz+\overline k\overline z)}(\overline M_+-\overline M_-)]-1$. The multiplier bounds in [F1] and differentiation of the unit-modulus exponential give $R_\gamma\in W^{1,r}$ and its $O(1/z)$ normalization; the case $k=0$ follows from $f_\pm=1$. [F1, step 1.1, algebra]

3.1 For every constant $|\lambda|=1$, uniqueness of the CGO solution gives $f_{\lambda\mu}=\tfrac12[(1+\lambda)f_++(1-\lambda)f_-]=(A+\lambda B)/2$. To check its equation, the constants $a=(1+\lambda)/2$, $b=(1-\lambda)/2$ satisfy $a=\lambda\overline a$ and $-b=\lambda\overline b$; substitution proves the required real-linear Beltrami equation, and $a+b=1$ gives the normalization. At a point where $B\ne0$, choose $\lambda(z,k)=\overline B/B$; where $B=0$, choose any unit value. Then $u_\gamma(z,k)=f_{\lambda(z,k)\mu}(z,k)$. Each right side is $e^{ik\Phi_{\lambda\mu}(z,k)}$. [F1, F2, step 2.1, algebra]

4.1 For fixed $k\ne0$, the phases $\Phi_{\lambda\mu}$ depend continuously on $\lambda$ and $z$. Indeed, the coefficients in the Fredholm construction of [F1] depend continuously on $\lambda$ in operator norm; the resolvent identity gives continuity of its solution locally in $\lambda$, hence on the compact parameter circle. Its nonvanishing normalized multiplier admits the uniquely determined logarithm tending to zero at infinity. That logarithm depends continuously on $\lambda$ on compact sets: start at a uniformly large base point where all multipliers are close to $1$, use the principal logarithm there, and extend along a finite covering of any fixed compact path by disks where the multipliers stay away from zero. The resulting phase is the normalized principal phase in [F2]. Therefore $\widetilde\delta(z)=ik\Phi_{\lambda(z,k)\mu}(z,k)$ is continuous where $B\ne0$. If $B(z_0,k)=0$, all values $f_{\lambda\mu}(z_0,k)$ coincide. Their phases have equal exponentials and vary continuously with $\lambda$, so their differences belong to the discrete set $2\pi i\mathbb Z$ and are constant; they are thus all equal. Compactness of the rotation circle and joint continuity then give continuity of $\widetilde\delta$ also at $z_0$. Its exponential is $u_\gamma$ by step 3.1, and [F2] gives its required normalization and bounds. Uniqueness follows because any two continuous logarithms on the connected plane differ by a constant $2\pi i n$, which the normalization forces to be zero. [F1, F2, step 3.1, algebra]

5.1 The phase $\delta_\gamma=\widetilde\delta$ differs from $ikz$ by a bounded function. For any target $w$, choose a large circle $|z|=R$ on which $|\delta_\gamma(z)-ikz|+|w|<|k|R$. The straight homotopy between $\delta_\gamma(z)-w$ and $ikz$ avoids zero on this circle, so their winding numbers are both one. If $\delta_\gamma-w$ had no zero in the disk, its boundary loop would extend to a loop through a disk in $\mathbb C\setminus\{0\}$ and would have winding zero, a contradiction. Thus the phase is onto. Finally the Hölder and supremum bounds on $M_\pm$ in [F1]–[F2], combined with the smooth exponential on a fixed disk, give the asserted Hölder estimate for $f_\pm$ and hence for their real and imaginary combination $u_\gamma$. [F1, F2, F3, step 4.1, algebra] ∎
