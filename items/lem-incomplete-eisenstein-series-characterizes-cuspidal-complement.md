---
id: lem-incomplete-eisenstein-series-characterizes-cuspidal-complement
kind: lemma
title: "Incomplete Eisenstein Series and the Cuspidal Complement"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-weight-zero-maass-form-on-gamma0n
  - def-eisenstein-series-for-congruence-subgroups
  - def-congruence-subgroup-of-sl2-z
  - def-modular-group-action-on-the-upper-half-plane
  - def-properly-discontinuous-group-action
  - lem-smooth-bump-between-concentric-euclidean-balls
  - thm-bezout-identity
  - thm-standard-fundamental-domain-for-the-modular-group
  - def-countable-choice
  - lem-l-two-with-the-integral-pairing-is-a-hilbert-space
  - lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set
  - thm-orthogonal-decomposition-by-a-closed-subspace
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Austin Lei, Automorphic Forms Learning Seminar Notes (Columbia University, Fall 2024)"
      url: "https://www.math.columbia.edu/~aghosh/ALNotes12.pdf"
      locator: "§3.1 and §3.16: Eisenstein series and the cuspidal/continuous orthogonal split; the unfolding identity is proved locally."
    - title: "A. Knightly and C. Li, Kuznetsov's Trace Formula and the Hecke Eigenvalues of Maass Forms, Memoirs of the AMS 224 (2012), arXiv:1202.0189v1"
      url: "https://arxiv.org/pdf/1202.0189v1"
      locator: "§5.2 and §6.1: Eisenstein series and the cuspidal/continuous orthogonal decomposition."
---

## Statement

Assume Countable Choice. Let $N\ge1$, let $\chi:(\mathbb Z/N\mathbb Z)^\times\to S^1$ be a group homomorphism with $\chi(-1)=1$, let $\Gamma=\Gamma_0(N)$, and let $\mathcal H=L^2(\Gamma\backslash\mathbb H,\chi)$ be the Hilbert space of square-integrable measurable functions satisfying $f(\gamma z)=\chi(\gamma)f(z)$. For each singular cusp $\mathfrak a$, use a scaling matrix $\sigma_{\mathfrak a}$ and cusp width $w_{\mathfrak a}$ as in the definition of weight-zero Maass forms, and define for almost every $y>0$
$$c_{\mathfrak a}(f,y)=\frac1{w_{\mathfrak a}}\int_0^{w_{\mathfrak a}} f\bigl(\sigma_{\mathfrak a}(x+iy)\bigr)\,dx.$$
Let $\mathcal C\subseteq\mathcal H$ be the subspace of functions for which these constant terms vanish almost everywhere at every singular cusp. Let $\mathcal E$ be the closed linear span in $\mathcal H$ of all incomplete Eisenstein series $E_{\mathfrak a}(\cdot\mid\psi)$, where $\mathfrak a$ is singular and $\psi\in C_c^\infty((0,\infty))$. Then
$$\mathcal H=\mathcal C\oplus\mathcal E,$$
an orthogonal direct sum.

## Statement references

[[def-weight-zero-maass-form-on-gamma0n]]

[[def-eisenstein-series-for-congruence-subgroups]]

## Facts & Assumptions

**Given:** Countable Choice, an integer $N\ge1$, an even unitary character $\chi$, the quotient Hilbert space $\mathcal H$, its singular cusps with fixed scaling matrices, and the constant-term maps and incomplete Eisenstein series in the statement.

[F1] $\Gamma_0(N)$ is a finite-index subgroup of $SL_2(\mathbb Z)$; the modular group has the standard fundamental region $\{x+iy:|x|\le1/2,\ |x+iy|\ge1\}$; the action on $\mathbb H$ satisfies $\operatorname{Im}(\gamma z)=\operatorname{Im}(z)/|cz+d|^2$; and every primitive integer column can be completed to a determinant-one matrix by Bézout. ([[def-congruence-subgroup-of-sl2-z]], [[thm-standard-fundamental-domain-for-the-modular-group]], [[def-modular-group-action-on-the-upper-half-plane]], [[thm-bezout-identity]])

[F2] A weight-zero automorphic function satisfies $f(\gamma z)=\chi(\gamma)f(z)$, its norm is the integral over a measurable fundamental region with measure $d\mu=y^{-2}dx\,dy$, and at a singular cusp its constant coefficient is the width-normalized integral in the statement. ([[def-weight-zero-maass-form-on-gamma0n]])

[F3] For $\psi\in C_c^\infty((0,\infty))$, $E_{\mathfrak a}(z\mid\psi)$ is automorphic, locally finite, bounded on the finite-area quotient, and belongs to $\mathcal H$. ([[def-eisenstein-series-for-congruence-subgroups]])

[F4] Under Countable Choice, $\mathcal H$ with $\langle f,g\rangle=\int_{\Gamma\backslash\mathbb H}f\overline g\,d\mu$ is a complex Hilbert space; its inner product is linear in the first variable. ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]], [[def-countable-choice]])

[F5] Under Countable Choice, smooth compactly supported functions are dense in $L^2(J,y^{-2}dy)$ for every open interval $J\subset(0,\infty)$: multiplication by $y^{-1}$ identifies this weighted space with ordinary $L^2(J,dy)$ and preserves smooth compact support. ([[lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set]], [[def-countable-choice]])

[F6] Under Countable Choice, if $M$ is a closed linear subspace of a Hilbert space $H$, then $H=M\oplus M^\perp$. ([[thm-orthogonal-decomposition-by-a-closed-subspace]], [[def-countable-choice]])

[F7] An action is properly discontinuous when only finitely many group elements move a given compact set to meet itself. ([[def-properly-discontinuous-group-action]])

[F8] If a compact subset of an open interval is given, there is a smooth function valued in $[0,1]$, equal to one on that subset and compactly supported in the interval; this follows by translating and rescaling a smooth bump between concentric balls in dimension one. ([[lem-smooth-bump-between-concentric-euclidean-balls]])

## Proof

1.1 The standard fundamental region has finite hyperbolic area, since its area is $\int_{-1/2}^{1/2}\int_{\sqrt{1-x^2}}^\infty \frac{dy\,dx}{y^2} =\int_{-1/2}^{1/2}\frac{dx}{\sqrt{1-x^2}}<\infty.$ Taking finitely many translates indexed by $\Gamma_0(N)\backslash PSL_2(\mathbb Z)$ gives a finite-area fundamental region for $\Gamma$. The modular group acts transitively on $\mathbb P^1(\mathbb Q)$, by completing each primitive integer column to a determinant-one matrix; hence the $\Gamma$-cusps are represented by the finite set of these cosets. In particular the singular cusp set is finite. The boundary of this finite union of standard regions has area zero, and restriction to its interior identifies $\mathcal H$ isometrically with an ordinary $L^2$ space: unitary automorphy extends a representative from the region to its translates, while boundary values do not affect its class. Thus [F4] applies. To verify proper discontinuity, let a compact $K\subset\mathbb H$ satisfy $|\operatorname{Re}z|\le M$ and $m\le\operatorname{Im}z\le M_1$ on $K$, with $m>0$. If $\gamma K\cap K\ne\varnothing$, choose $z,z'=\gamma z\in K$ and write $\gamma=\begin{pmatrix}a&b\\c&d\end{pmatrix}$. Then $|cz+d|^2=\operatorname{Im}z/\operatorname{Im}z'$ lies between $m/M_1$ and $M_1/m$. Its imaginary part $c\operatorname{Im}z$ bounds $c$, and its real part $c\operatorname{Re}z+d$ then bounds $d$. For each of the finitely many possible pairs $(c,d)$, fix one determinant-one solution $(a_0,b_0)$ if one exists. Every other solution is $(a,b)=(a_0+kc,b_0+kd)$ for an integer $k$, and its transformation is $z\mapsto(a_0z+b_0)/(cz+d)+k$. The denominator is bounded below by $\sqrt{m/M_1}$, so the first term is uniformly bounded on $K$; boundedness of $\operatorname{Re}z$ and $\operatorname{Re}z'$ bounds $k$. Only finitely many $\gamma$ occur, proving the property in [F7]. [F1, F4, F7, algebra, choose]

2.1 Fix a singular cusp $\mathfrak a$ and $\psi\in C_c^\infty((0,\infty))$, and choose a smooth $0\le\phi\le1$ supported in a compact interval with $\phi=1$ on $\operatorname{supp}\psi$, using [F8]. The absolute sum is bounded by $\|\psi\|_\infty M_{\mathfrak a}(z\mid\phi)$, where $M_{\mathfrak a}(z\mid\phi)=\sum_{\gamma\in\Gamma_{\mathfrak a}\backslash\Gamma}\phi(\operatorname{Im}(\sigma_{\mathfrak a}^{-1}\gamma z))$. On a compact core, a term can be nonzero only when its lower-row entries satisfy $|c_\gamma z+d_\gamma|^2\le y/\alpha$, where $\operatorname{supp}\phi\subset[\alpha,\beta]$; compactness bounds these integer entries, and each row has at most cusp-width multiplicity. Hence the majorant is locally finite and bounded on the compact core. On any cusp tail of height $y>1/\alpha$, every term with nonzero lower-left matrix entry has imaginary part at most $1/y<\alpha$, and the zero-entry term occurs at most once; thus the majorant is bounded there as well. The finite-area quotient from step 1.1 therefore gives $M_{\mathfrak a}(\cdot\mid\phi)\in L^2$. Hence the majorant times $|f|$ is integrable by Cauchy–Schwarz, and expanding and unfolding the pairing is justified. On changing variables $w=\gamma z$, $f(\gamma^{-1}w)=\chi(\gamma)^{-1}f(w)$ cancels the coefficient $\chi(\gamma)$ in the conjugate series; the quotient region unfolds to $\Gamma_{\mathfrak a}\backslash\mathbb H$. The measure $dx\,dy/y^2$ is invariant under each determinant-one Möbius map: its Jacobian is $|cz+d|^{-4}$, while the transformed imaginary part is $y/|cz+d|^2$. Conjugating by $\sigma_{\mathfrak a}$, this is the strip $0\le x<w_{\mathfrak a}$, $y>0$, up to boundary sets of measure zero. Therefore $\langle f,E_{\mathfrak a}(\cdot\mid\psi)\rangle =w_{\mathfrak a}\int_0^\infty c_{\mathfrak a}(f,y)\overline{\psi(y)}\,\frac{dy}{y^2}.$ [given, F1, F2, F3, F4, F8, step 1.1, algebra, construct]

3.1 For each compact interval $J\Subset(0,\infty)$, the scaling image of $[0,w_{\mathfrak a}]\times J$ is compact in $\mathbb H$. By the proper-discontinuity proof in step 1.1, every point has a relatively compact neighborhood meeting only finitely many of its translates. For each of the finitely many translates not fixing its center, choose disjoint neighborhoods $U_\gamma$ of the center and $V_\gamma$ of its image with $\gamma U_\gamma\subset V_\gamma$. The finite intersection of the $U_\gamma$ then meets no such translate; the resulting quotient chart is the neighborhood modulo its finite stabilizer. A finite subcover of the compact scaling image therefore has uniformly bounded multiplicity. Since the quotient measure is induced by the invariant measure, the pullback of an $L^2$ automorphic function is locally $L^2$ on that strip. Cauchy–Schwarz in $x$ gives $|c_{\mathfrak a}(f,y)|^2\le w_{\mathfrak a}^{-1}\int_0^{w_{\mathfrak a}}|f(\sigma_{\mathfrak a}(x+iy))|^2dx$, so $c_{\mathfrak a}(f,\cdot)\in L^2(J,y^{-2}dy)$. If $f\perp E_{\mathfrak a}(\cdot\mid\psi)$ for every $\psi$, the unfolding identity and [F5] imply that this locally square-integrable constant term vanishes almost everywhere on every compact interval. Conversely, a vanishing constant term makes every pairing in step 2.1 zero. Thus the functions orthogonal to all incomplete series at $\mathfrak a$ are exactly those with zero constant term there; intersecting over the finite singular cusp set gives $\mathcal E^\perp=\mathcal C$. [F1, F2, F5, step 1.1, step 2.1, algebra]

4.1 The closed subspace $\mathcal E$ has the orthogonal decomposition $\mathcal H=\mathcal E\oplus\mathcal E^\perp$ by [F6]. Substituting $\mathcal E^\perp=\mathcal C$ from step 3.1 proves $\mathcal H=\mathcal C\oplus\mathcal E$. [F4, F6, step 3.1] ∎