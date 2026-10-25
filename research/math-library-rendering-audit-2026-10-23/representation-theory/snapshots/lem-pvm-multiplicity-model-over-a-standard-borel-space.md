---
id: lem-pvm-multiplicity-model-over-a-standard-borel-space
kind: lemma
title: Multiplicity model of a projection-valued measure over a standard Borel base
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 1
local_addition: true
proof_strategy: direct
deps:
  - lem-direct-integrals-transport-along-bimeasurable-base-isomorphisms
  - thm-spectral-multiplicity-model-for-separable-abelian-von-neumann-algebras
  - def-von-neumann-algebra-and-commutant
  - def-direct-integral-of-a-measurable-hilbert-field
  - def-measurable-hilbert-field-from-a-countable-fundamental-family
  - thm-direct-integrals-of-measurable-hilbert-fields-are-hilbert-spaces
  - lem-measurable-sections-have-measurable-pointwise-inner-products
  - def-measurable-and-decomposable-operator-fields
  - thm-measurable-essentially-bounded-operator-fields-act-decomposably
  - thm-decomposable-operators-are-the-commutant-of-diagonal-multiplication
  - thm-bounded-borel-pvm-integral
  - thm-pvm-integral-is-a-star-homomorphism
  - lem-scalar-and-complex-measures-from-a-pvm
  - def-projection-valued-measure
  - thm-support-and-uniqueness-of-the-spectral-measure
  - thm-standard-borel-spaces-admit-bimeasurable-real-codings
  - thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality
  - def-standard-borel-space
  - def-separable-space
  - def-hilbert-space
  - def-axiom-of-choice
  - thm-composition-with-borel-functions-preserves-measurability
  - thm-bounded-normal-operator-abstract-spectral-theorem
  - thm-continuous-functional-calculus-for-bounded-self-adjoint-operators
  - lem-continuous-functional-calculus-produces-a-regular-pvm
  - def-borel-functional-calculus-for-a-bounded-normal-operator
  - def-self-adjoint-positive-unitary-and-normal-operator
  - cor-second-countable-lch-locally-finite-borel-measures-are-regular
  - lem-unitary-intertwiners-preserve-fiber-multiplicity-over-a-standard-borel-base
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "C. Anantharaman and S. Popa, An Introduction to II_1 Factors, Chapter 8 §8.1 (spectral multiplicity model)"
      url: "https://www.idpoisson.fr/anantharaman/publications/IIun.pdf"
    - title: "G. Misra, E. K. Narayanan and C. Varughese, Mackey Imprimitivity and commuting tuples of homogeneous normal operators, arXiv:2402.15737"
      url: "https://arxiv.org/pdf/2402.15737"
    - title: "V. S. Sunder, Notes on the Imprimitivity Theorem (ISIBangalore/IMSc lecture notes, 22 pp.)"
      url: "https://www.imsc.res.in/~sunder/imp.pdf"
---

## Statement

Assume AC. Let $X$ be a standard Borel space, $P$ a projection-valued measure
on $X$ acting on a nonzero separable complex Hilbert space $H$, and let $\mu$
be a finite Borel measure on $X$ that is $P$-faithful, i.e. $P(E)=0$ iff
$\mu(E)=0$. Then there exist a Borel function
$m:X\to\{1,2,\dots\}\cup\{\infty\}$ and a unitary
$$W:H\longrightarrow\int_X^\oplus\mathbb C^{m(x)}\,d\mu(x)$$
such that $WP(E)W^{-1}=M_{\mathbf 1_E}$ for every Borel $E\subseteq X$. Such a
$\mu$ exists for every nonzero separable $H$: for any dense sequence $(\xi_j)$
with $\xi_j\ne0$,
$\mu=\sum_j2^{-j}\|\xi_j\|^{-2}\langle P(\cdot)\xi_j,\xi_j\rangle$ is finite,
$P$-faithful and Borel. Any two $P$-faithful measures are mutually absolutely
continuous.

## Facts & Assumptions

**Given:** AC, the standard Borel space $X$, the PVM $P$ on the nonzero separable Hilbert space $H$, and a finite $P$-faithful Borel measure $\mu$ on $X$.

[F1] For bounded Borel $b$, $M_b^P=\int b\,dP$ satisfies $\langle M_b^P\xi,\eta\rangle=\int b\,dE_{\xi,\eta}$ and $\|M_b^P\|\le\|b\|_\infty$, with $M_{bc}=M_b^PM_c^P$ and $M_{\bar b}=(M_b^P)^*$; each $E_{\xi,\eta}$ is a finite complex measure; projections $P(E)=M_{\mathbf 1_E}^P$ commute ([[thm-bounded-borel-pvm-integral]], [[thm-pvm-integral-is-a-star-homomorphism]], [[lem-scalar-and-complex-measures-from-a-pvm]], [[def-projection-valued-measure]]).

[F2] Every standard Borel space $X$ admits a bimeasurable injection $c:X\to[0,1]$ onto a Borel subset of $[0,1]$ ([[thm-standard-borel-spaces-admit-bimeasurable-real-codings]], [[def-standard-borel-space]]).

[F3] The operator $S=\int_Xc\,dP$ is bounded and self-adjoint, hence normal; it has a spectral PVM $E_S$ on the compact $\sigma(S)\subseteq[0,1]$ with $\int z\,dE_S(z)=S$ and $E_S(D)=\mathbf 1_D(S)$ for Borel $D$ given by the bounded Borel functional calculus. If $Q$ is a regular PVM on a nonempty compact $\Lambda\subseteq\mathbb R$ with $\int z\,dQ(z)=S$, then $Q(\Lambda\setminus\sigma(S))=0$ and $Q(D)=E_S(D)$ for Borel $D\subseteq\sigma(S)$ ([[thm-bounded-normal-operator-abstract-spectral-theorem]], [[thm-continuous-functional-calculus-for-bounded-self-adjoint-operators]], [[lem-continuous-functional-calculus-produces-a-regular-pvm]], [[def-borel-functional-calculus-for-a-bounded-normal-operator]], [[thm-support-and-uniqueness-of-the-spectral-measure]], [[def-self-adjoint-positive-unitary-and-normal-operator]]).

[F4] For an abelian concrete von Neumann algebra $\mathcal A$ on a nonzero separable $H$ and a bounded self-adjoint generator $S\in\mathcal A$ with $\mathcal A=W^*(S)$, the spectral multiplicity construction produces a nonzero finite regular Borel measure $\nu$ on $K=\sigma(S)\subseteq\mathbb R$, a Borel multiplicity $m:K\to\{1,2,\dots\}\cup\{\infty\}$, and a unitary $U:H\to\int_K^\oplus\mathbb C^{m(t)}\,d\nu(t)$ with $USU^{-1}=M_t$ and $U\mathcal AU^{-1}=\{M_f:f\in L^\infty(K,\nu)\}$; the construction (the cited proof's steps 1.2–1.9 and 2.1) uses only that $S$ is a prescribed bounded self-adjoint generator, its initial selection step being immaterial for a given $S$; for a fixed generator the measure class and multiplicity function are unique ([[thm-spectral-multiplicity-model-for-separable-abelian-von-neumann-algebras]], [[def-von-neumann-algebra-and-commutant]], [[def-direct-integral-of-a-measurable-hilbert-field]]).

[F5] In the model of [F4] the fibre $\mathbb C^{m(t)}$ is nonzero for every $t$ and $\nu$ is faithful for $E_S$: $\nu(N)=0$ iff $E_S(N)=0$, because multiplication by $\mathbf 1_N$ is the zero operator exactly when the indicator vanishes almost everywhere ([[thm-spectral-multiplicity-model-for-separable-abelian-von-neumann-algebras]], [[def-measurable-hilbert-field-from-a-countable-fundamental-family]], [[thm-direct-integrals-of-measurable-hilbert-fields-are-hilbert-spaces]]).

[F6] Finite Borel measures on the second-countable LCH space $[0,1]$ are regular; the Radon–Nikodym theorem gives densities for mutually absolutely continuous finite Borel measures and the corresponding isometry of $L^2$ spaces intertwines multiplication operators ([[cor-second-countable-lch-locally-finite-borel-measures-are-regular]], [[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]]).

[F7] Direct integrals transport along bimeasurable base isomorphisms, and multiplication operators transport accordingly ([[lem-direct-integrals-transport-along-bimeasurable-base-isomorphisms]]).

[F8] The commutant of the diagonal multiplications on a direct integral consists of the decomposable operators; measurable sections and operator fields obey the usual calculus ([[thm-decomposable-operators-are-the-commutant-of-diagonal-multiplication]], [[def-measurable-and-decomposable-operator-fields]], [[thm-measurable-essentially-bounded-operator-fields-act-decomposably]], [[lem-measurable-sections-have-measurable-pointwise-inner-products]], [[thm-composition-with-borel-functions-preserves-measurability]]).

[F9] AC is the standing hypothesis ([[def-axiom-of-choice]], [[def-separable-space]], [[def-hilbert-space]]).

## Proof

**Proof technique:** direct.

**Given:** AC, the PVM $P$, the separable nonzero $H$, and a finite $P$-faithful measure $\mu$; also the density construction of the statement.

1.1 Existence of a faithful measure: for a dense sequence $(\xi_j)$ with $\xi_j\ne0$ put $\mu_0=\sum_j2^{-j}\|\xi_j\|^{-2}E_{\xi_j,\xi_j}$. This is a finite Borel measure, and $\mu_0(E)=0$ forces $E_{\xi_j,\xi_j}(E)=\langle P(E)\xi_j,\xi_j\rangle=0$ for every $j$, so $P(E)\xi_j=0$ for every $j$; density of $(\xi_j)$ and boundedness of $P(E)$ give $P(E)=0$; the converse is immediate. Hence $\mu_0$ is $P$-faithful. If $\mu_1,\mu_2$ are $P$-faithful, then $\mu_1(E)=0\Leftrightarrow P(E)=0\Leftrightarrow\mu_2(E)=0$, so they are mutually absolutely continuous. [F1]

1.2 Let $c:X\to[0,1]$ be a bimeasurable injection onto the Borel set $Y=c(X)$ by [F2], and put $S=\int_Xc\,dP$, a bounded self-adjoint operator by [F3]. Then $Q(D):=P(c^{-1}(D))$ for Borel $D\subseteq[0,1]$ is a projection-valued measure on $[0,1]$, because $D\mapsto c^{-1}(D)$ preserves the Boolean operations: $Q(\varnothing)=0$, $Q([0,1])=P(X)=I$, $Q(D_1)Q(D_2)=P(c^{-1}(D_1)\cap c^{-1}(D_2))=Q(D_1\cap D_2)$, and countable additivity transfers. Its coordinate integral is $S$: by [F1] and change of variables for the PVM, $\int_{[0,1]}z\,dQ(z)=\int_{[0,1]}z\,dP(c^{-1}(z))=\int_Xc(x)\,dP(x)=S$. For $z\notin[0,1]$, the bounded integral of $(z-t)^{-1}$ against $Q$ is a two-sided inverse of $zI-S$ by [F1], so $\sigma(S)\subseteq[0,1]$. Each scalar measure of $Q$ is a finite Borel measure on the compact metric space $[0,1]$, hence regular by [F6], so $Q$ is a regular PVM. [F1, F2, F3, F6]

2.1 Spectral identification: by the uniqueness clause of [F3] applied to the regular PVM $Q$ on $\Lambda=[0,1]$, one has $Q([0,1]\setminus\sigma(S))=0$ and $Q(D)=E_S(D)$ for every Borel $D\subseteq\sigma(S)$. Extend $E_S$ by zero outside $\sigma(S)$ when writing it on $[0,1]$. Consequently, since $c^{-1}(c(B))=B$, $$P(B)=Q(c(B))=E_S(c(B))\qquad(B\subseteq X\ \text{Borel}),$$ with $c(B)$ Borel by bimeasurability; in particular $E_S$ is carried by $Y\cap\sigma(S)$ because $E_S(c(X))=P(X)=I$. Set $\mathcal A:=W^*(S)$; it is abelian because polynomials in the self-adjoint $S$ commute and commutation with a fixed bounded operator is WOT closed, so their WOT closure still commutes pairwise. Thus $S$ is a prescribed self-adjoint generator to which [F4] applies. [F3, step 1.2]

3.1 Apply the spectral multiplicity model of [F4] to the pair $(\mathcal A,S)$: there are a finite regular Borel measure $\nu$ on $K=\sigma(S)$, a Borel function $m:K\to\{1,2,\dots\}\cup\{\infty\}$ and a unitary $U:H\to\int_K^\oplus\mathbb C^{m(t)}\,d\nu(t)$ with $USU^{-1}=M_t$ and $U\mathcal AU^{-1}=\{M_f\}$. Since $U\mathbf 1_D(S)U^{-1}=\mathbf 1_D(M_t)=M_{\mathbf 1_D}$, the operator $UE_S(D)U^{-1}$ is the multiplication by $\mathbf 1_D$, so $\nu$ is $E_S$-faithful: $\nu(D)=0$ iff $M_{\mathbf 1_D}=0$ iff $UE_S(D)U^{-1}=0$ iff $E_S(D)=0$, the middle equivalence using that every fibre is nonzero so that a multiplication operator is zero exactly when its symbol vanishes a.e. [F4, F5, step 2.1]

4.1 The pushforward $\nu_0:=c_*\mu$ restricted to $Y$ is likewise $E_S$-faithful: for Borel $D\subseteq[0,1]$ one has $\nu_0(D)=\mu(c^{-1}D)=0$ iff $P(c^{-1}D)=E_S(c(c^{-1}D))=E_S(D\cap Y)=E_S(D)$, using $P$-faithfulness of $\mu$ and $E_S$ being carried by $Y$ from [step 2.1]. Extend $\nu$ by zero off $K$, restrict both measures to $Y$, and extend $m$ by $1$ on $Y\setminus K$, which is null. Identify the integrals over $K$ and $Y$ by restriction and zero extension, since $\nu(K\setminus Y)=0$. Hence $\nu$ and $\nu_0$ are mutually absolutely continuous finite Borel measures on the standard Borel space $Y$ and have Radon–Nikodym densities; the isometry $J:L^2(Y,\nu_0;\mathbb C^{m})\to L^2(Y,\nu;\mathbb C^{m})$, $J\xi=\sqrt{d\nu_0/d\nu}\,\xi$, is unitary and commutes with every bounded Borel scalar multiplier by [F6]. Thus $U':=J^{-1}\circ U$ is a unitary $H\to\int_Y^\oplus\mathbb C^{m(t)}\,d\nu_0(t)$ with $U'\mathcal AU'^{-1}=\{M_f\}$ and $U'S U'^{-1}=M_t$. [F6, step 2.1, step 3.1]

5.1 Transport along $c$: the map $c:X\to Y$ is a bimeasurable bijection with $c_*\mu=\nu_0$, so by [F7] pullback of sections is a unitary $T:\int_Y^\oplus\mathbb C^{m(t)}\,d\nu_0(t)\to\int_X^\oplus\mathbb C^{m(c(x))}\,d\mu(x)$ intertwining multiplication by $f$ with multiplication by $f\circ c$. Define $m'(x):=m(c(x))$, a Borel function $X\to\{1,2,\dots\}\cup\{\infty\}$ by [F8]. [F7, F8, step 3.1, step 4.1]

6.1 The composite $W:=T\circ U'$ is a unitary $H\to\int_X^\oplus\mathbb C^{m'(x)}\,d\mu(x)$, and for every Borel $B\subseteq X$, $WP(B)W^{-1}=T\,U'\,E_S(c(B))\,U'^{-1}T^{-1}=T M_{\mathbf 1_{c(B)}}T^{-1}=M_{\mathbf 1_{c(B)}\circ c}=M_{\mathbf 1_B}$, using $P(B)=E_S(c(B))$ from [step 2.1] and the intertwining property of $T$. [step 2.1, step 5.1, step 4.1]

7.1 Steps 1.1, 5.1 and 6.1 produce the faithful finite measure $\mu$, the Borel multiplicity $m'$ and the unitary $W$ with $WP(E)W^{-1}=M_{\mathbf 1_E}$; any two $P$-faithful measures are mutually absolutely continuous by [step 1.1]. The uniqueness of the multiplicity is the rigidity statement of the intertwiner lemma: two models over the same base with a unitary intertwining all multiplications have the same multiplicity almost everywhere, and such an intertwiner is decomposable with unitary fibres a.e. ([[lem-unitary-intertwiners-preserve-fiber-multiplicity-over-a-standard-borel-base]]). [step 1.1, step 3.1, step 5.1, step 6.1, F9] ∎
