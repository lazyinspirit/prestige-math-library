---
id: lem-finite-covolume-kleinian-quasiconformal-conjugacy-is-mobius
kind: lemma
title: A quasiconformal conjugacy of finite-covolume Kleinian groups is Möbius
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-c-c-is-dense-in-l-p-for-radon-measures
  - thm-tonelli-and-fubini-for-completed-product-measures
  - thm-composition-and-inverse-quasiconformal
  - thm-one-quasiconformal-is-conformal
  - thm-biholomorphic-self-maps-riemann-sphere-are-mobius
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Gopal Prasad, Strong Rigidity of Q-Rank 1 Lattices
      url: https://www.maths.gla.ac.uk/~mpowell/Prasad-on-Mostow-rigidity.pdf
      locator: Printed pp. 256–257 invoke Mostow's rigidity theorem after equivariant pseudo-isometries; the specialized boundary argument is proved independently here
    - title: Bekka, de la Harpe and Valette, Kazhdan's Property (T)
      url: https://ncatlab.org/nlab/files/BekkaHarpeValetteOnKashdanPropertyT.pdf
      locator: The elementary contraction mechanism commonly called the Mautner phenomenon; its entire required argument is supplied locally below
dependency_level: 0
---

## Statement

Assume the Axiom of Choice. Let $G=\mathrm{PSL}_2(\mathbb C)$ act on the Riemann sphere by Möbius transformations. Let $\Gamma\le G$ be discrete, with finite nonzero Haar quotient measure $\nu$ on $X=\Gamma\backslash G$. Here Haar quotient measure means the right invariant Radon measure obtained by locally transporting Haar measure through the covering projection $G\to X$; its normalization is immaterial. Let $\theta:\Gamma\to G$ be a homomorphism, and let $h:\widehat{\mathbb C}\to\widehat{\mathbb C}$ be an orientation-preserving quasiconformal homeomorphism satisfying $h\circ\gamma=\theta(\gamma)\circ h$ for every $\gamma\in\Gamma$. Then $h$ is Möbius.

This statement assumes the existence of the quasiconformal boundary conjugacy. It does not assert that an abstract group isomorphism or a quasi-isometry produces one.

## Statement references

[[def-axiom-of-choice]]

[[thm-c-c-is-dense-in-l-p-for-radon-measures]]

[[thm-composition-and-inverse-quasiconformal]]

[[thm-one-quasiconformal-is-conformal]]

[[thm-biholomorphic-self-maps-riemann-sphere-are-mobius]]

## Facts & Assumptions

**Given:** The Axiom of Choice, the discrete subgroup, its finite Haar quotient measure, the homomorphism and the quasiconformal conjugacy in the Statement.

[A1] The Axiom of Choice implies Dependent Choice and Countable Choice; these are retained for the measure and density suppliers. [[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]

[F1] Continuous compactly supported functions are dense in $L^2$ of a Radon measure on an LCH space. [[thm-c-c-is-dense-in-l-p-for-radon-measures]]

[F2] Completed-product Tonelli and Fubini apply to sigma-finite Radon measures. [[thm-tonelli-and-fubini-for-completed-product-measures]]

[F3] Quasiconformal maps obey the almost-everywhere Beltrami composition rule; in particular precomposition by a holomorphic local diffeomorphism $g$ gives $\mu_{h\circ g}=(\mu_h\circ g)\overline{g'}/g'$, and holomorphic postcomposition leaves the coefficient unchanged. [[thm-composition-and-inverse-quasiconformal]]

[F4] A quasiconformal homeomorphism with zero Beltrami coefficient almost everywhere is holomorphic, and a biholomorphic self-map of the Riemann sphere is Möbius. [[thm-one-quasiconformal-is-conformal]], [[thm-biholomorphic-self-maps-riemann-sphere-are-mobius]]

## Proof

1.1 The quotient $X$ is a second-countable smooth manifold: left translation by a discrete subgroup is free, and each point of $G$ has a small open neighborhood disjoint from its nontrivial left translates. The projection restricts to a diffeomorphism there, giving the quotient charts. The subgroup is countable, since a discrete subgroup of the second-countable manifold $G$ is discrete and closed and its distinct points can be assigned distinct elements of a countable neighborhood basis. A Borel set in $X$ is $\nu$-null exactly when its full inverse image is Haar null, by the local quotient definition of $\nu$, countable quotient charts and countability of $\Gamma$. Both measures are sigma-finite: $G$ and $X$ have countable relatively compact chart covers, and their Radon measures are finite on compact sets. [A1, given, algebra]

1.2 Let $\mu$ be the Beltrami coefficient of $h$ in the standard finite source coordinate, defined arbitrarily on its null exceptional set, with $|\mu|\le k<1$. Finite source and target charts suffice outside at most finitely many points. Since holomorphic coordinate changes obey [F3], the conjugacy identity gives $\mu(\gamma z)\overline{\gamma'(z)}/\gamma'(z)=\mu(z)$ almost everywhere, for every $\gamma\in\Gamma$. Consider the evaluation map $p:G\to\widehat{\mathbb C}$, $p(g)=g(0)$. It is a smooth submersion: infinitesimal translations span the tangent plane at $0$, and left translation transports that statement to every $g$. Its local coordinates are a product of a sphere chart and a four-dimensional fiber chart; Haar measure has a smooth positive density in these coordinates. Thus inverse images under $p$ of area-null sets are Haar null by Fubini; conversely a positive-area set has inverse image of positive Haar measure in some such product chart. [A1, F2, F3, given, algebra]

2.1 Define $R_g f(x)=f(xg)$ on $L^2(X,\nu)$. Right invariance of $\nu$ makes every $R_g$ unitary, and $R_gR_k=R_{gk}$. This representation is strongly continuous. Indeed, if $f\in C_c(X)$ and $g$ stays in a compact identity neighborhood, the supports of $R_gf-f$ lie in one compact subset of $X$. Joint continuity of the action and compactness give uniform convergence $R_gf\to f$ there as $g\to e$, so convergence holds in $L^2$. For a general $v\in L^2$, approximate by $f\in C_c(X)$ using [F1] and use $\|R_gv-v\|_2\le2\|v-f\|_2+\|R_gf-f\|_2$. [A1, F1, step 1.1, algebra]

2.2 Outside the Haar-null set where $g(0)=\infty$, define $F(g)=\mu(g(0))\overline{g'(0)}/g'(0)$, and put it equal to zero on that exceptional set. This is bounded and measurable. Step 1.2 and the holomorphic chain rule give $F(\gamma g)=F(g)$ for almost every $g$, for each $\gamma$. Because $\Gamma$ is countable, remove the union of the exceptional sets and all their $\Gamma$ translates; this is an invariant Haar-null set. Redefining $F$ as zero on it gives an exactly left-$\Gamma$-invariant representative. It descends to a measurable bounded function on $X$: on each quotient chart use a local section of the covering projection, and exact invariance makes the resulting definitions agree. Finite measure gives $F\in L^2(X,\nu)$. [A1, step 1.1, step 1.2, algebra]

3.1 Put $a_t=\left[\begin{smallmatrix}e^{t/2}&0\\0&e^{-t/2}\end{smallmatrix}\right]$, $n_+(z)=\left[\begin{smallmatrix}1&z\\0&1\end{smallmatrix}\right]$ and $n_-(z)=\left[\begin{smallmatrix}1&0\\z&1\end{smallmatrix}\right]$. If $v\in L^2(X)$ satisfies $R_{a_t}v=v$ for every $t$, then $\|R_nv-v\|_2=\|R_{a_tna_{-t}}v-v\|_2$ by unitarity and this invariance. For $n=n_+(z)$ the conjugate is $n_+(e^tz)$ and tends to the identity as $t\to-\infty$; for $n=n_-(z)$ it is $n_-(e^{-t}z)$ and tends to the identity as $t\to+\infty$. Strong continuity from step 2.1 forces $R_nv=v$ in both cases. [step 2.1, algebra]

4.1 These two unipotent subgroups generate $G$. To check this without any structural rigidity theorem, define $w(\lambda)=n_+(\lambda)n_-(-\lambda^{-1})n_+(\lambda)=\left[\begin{smallmatrix}0&\lambda\\-\lambda^{-1}&0\end{smallmatrix}\right]$ for $\lambda\ne0$. Then $w(\lambda)w(-1)=\operatorname{diag}(\lambda,\lambda^{-1})$. Every determinant-one matrix with upper left entry $a\ne0$ factors as $n_-(c/a)\operatorname{diag}(a,a^{-1})n_+(b/a)$, where $b,c$ are its other off-diagonal entries. If $a=0$, its lower left entry is nonzero, so left multiplication by $n_+(1)$ makes that upper left entry nonzero. The factorization descends to $G$. Thus every vector in step 3.1 is invariant under every $R_g$. [step 3.1, algebra]

5.1 A vector invariant under all $R_g$ is constant almost everywhere. Take a Borel representative $v$ and its lift $\widetilde v$ to $G$. For each fixed $k\in G$, right invariance in $L^2(X)$ and the null-set equivalence in step 1.1 give $\widetilde v(gk)=\widetilde v(g)$ for Haar-almost every $g$. Tonelli on compact exhaustions of $G\times G$ gives this equality for almost every pair $(g,k)$. The smooth change of variables $(g,k)\mapsto(g,y=gk)$ preserves the Haar product measure class, since for fixed $g$ left translation preserves Haar measure. Hence $\widetilde v(y)=\widetilde v(g)$ for almost every $(g,y)$. Fubini supplies one $g$ whose section has full measure, proving $\widetilde v$, and therefore $v$, almost everywhere constant. The preceding argument has proved the complete contraction assertion needed below. [A1, F2, step 1.1, step 4.1, algebra]

6.1 In the finite source coordinate, $a_t(z)=e^tz$, so $a_t$ fixes $0$ and has positive real derivative there. Consequently $F(ga_t)=F(g)$ for Haar-almost every $g$, for every $t$; the redefinition in step 2.2 changes this only on a null set and its right translate. Thus $R_{a_t}F=F$ in $L^2(X)$, and steps 3.1–5.1 imply $F=c$ almost everywhere for a complex constant $c$. Now let $m_\theta(z)=e^{i\theta}z$. The same computation gives $F(gm_\theta)=e^{-2i\theta}F(g)$ almost everywhere. Right translation preserves the measure class, so the constant satisfies $c=e^{-2i\theta}c$ for every $\theta$. Taking $\theta=\pi/2$ gives $c=-c$, hence $c=0$. [step 3.1, step 4.1, step 5.1, step 2.2, algebra]

7.1 Since the derivative ratio in step 2.2 has modulus one, $F=0$ Haar-almost everywhere implies $\mu\circ p=0$ Haar-almost everywhere. The positive-area converse in step 1.2 forces $\mu=0$ area-almost everywhere. By [F4], $h$ is holomorphic in every finite source and target chart. The finitely many omitted chart points cause no issue: use alternate source and target charts there and the conformal coefficient transformation law [F3]; their exceptional sets remain null. Thus $h$ is a biholomorphic sphere homeomorphism and is Möbius by [F4]. [F3, F4, step 1.2, step 2.2, step 6.1, algebra] ∎

## Scope and source-reading record

The entire cached Prasad text was read sequentially at lines 1–1641, covering all 32 PDF pages (printed pp. 255–286). PDF pages 2–3 were also visually inspected to verify the exact Mostow invocation and the weaker conclusion of Theorem C. The paper's complete Section 4 constructs equivariant pseudo-isometries; it does not supply the quasiconformal-conjugacy-to-Möbius argument proved above. Its Lemma 3.2 additionally invokes uniform Mostow rigidity, a step unnecessary for ordinary two-dimensional torus cusp cross-sections. The additional representation-theory source listed above documents the standard mechanism; no claim is made to have read that source during this task, and no theorem from it is invoked in this proof.

To obtain the full knot-exterior theorem one still needs local proofs of: the finite-volume cusp decomposition; algebraic recognition and preservation of rank-two parabolic peripheral subgroups; an equivariant quasi-isometry extending the affine cusp maps; a quasiconformal equivariant boundary extension of that quasi-isometry; and descent, uniqueness, orientation and proper homotopy of the resulting hyperbolic isometry. This lemma alone proves none of those prerequisites.
