---
id: thm-pure-positive-type-functions-correspond-to-irreducible-gns-representations
kind: theorem
title: Extreme normalized positive type is equivalent to irreducible GNS
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - cor-normalized-positive-type-functions-correspond-to-pointed-cyclic-representations
  - def-axiom-of-choice
  - def-continuous-function-of-positive-type
  - def-countable-choice
  - def-extreme-point-and-face
  - def-orthogonality-and-orthogonal-complement
  - def-real-and-complex-inner-product-space
  - def-self-adjoint-positive-unitary-and-normal-operator
  - def-strongly-continuous-unitary-representation
  - lem-dominated-positive-type-functions-give-positive-commutant-contractions
  - lem-nonscalar-positive-commutant-elements-split-a-normalized-positive-type-function
  - lem-orthogonal-projection-is-linear-self-adjoint-contractive
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-gns-construction-for-topological-groups
  - thm-orthogonal-decomposition-by-a-closed-subspace
  - thm-schurs-lemma-for-unitary-representations
axiom_audit: "Assume AC. It gives Countable Choice for the orthogonal decomposition and projection suppliers; it is also the hypothesis of normalized GNS, Schur's lemma, the dominated-operator correspondence, and the commutant-splitting lemma. Once the invariant subspace is fixed, its orthogonal decomposition and projection are unique. The invariant-complement, commuting-projection and convexity calculations make no further choice."
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: "Bekka, de la Harpe and Valette, Kazhdan's Property (T), Theorem C.5.2 and complete proof"
      url: "https://ncatlab.org/nlab/files/BekkaHarpeValetteOnKashdanPropertyT.pdf"
      locator: "Appendix C §C.5, printed pp. 380–381"
    - title: "Bekka, de la Harpe and Valette, Kazhdan's Property (T), Proposition C.5.1 and complete proof"
      url: "https://ncatlab.org/nlab/files/BekkaHarpeValetteOnKashdanPropertyT.pdf"
      locator: "Appendix C §C.5, printed pp. 379–380"
---

## Statement

Assume the Axiom of Choice, let $G$ be a topological group, let
$\varphi\in P_1(G)$, and let
$(\pi_\varphi,H_\varphi,\xi_\varphi)$ be its cyclic GNS triple. Then
$\varphi$ is an extreme point of the convex set $P_1(G)$ if and only if
$\pi_\varphi$ is irreducible. The complex Hilbert pairing is linear in its
first variable.

## Facts & Assumptions

**Given:** AC; a topological group $G$; a normalized continuous positive-type
function $\varphi$; its canonical GNS triple; and the library's first-variable-
linear complex Hilbert pairing.

[F1] $P(G)$ is the set of continuous positive-type functions and
$P_1(G)=\{\psi\in P(G):\psi(e)=1\}$; multiplying a positive-type function by
any nonnegative real scalar preserves positive type by the defining matrix test
([[def-continuous-function-of-positive-type]]). The same test proves $P_1(G)$ is convex: convex combinations preserve positive semidefiniteness and keep the identity value equal to $1$.

[F2] For a convex set, $x$ is extreme exactly when every expression
$x=(1-t)y+tz$ with $0<t<1$ and $y,z$ in the set has $y=z=x$
([[def-extreme-point-and-face]]).

[F3] Under AC, the normalized positive-type/pointed-cyclic correspondence
identifies $\varphi$ with its canonical cyclic GNS triple
([[cor-normalized-positive-type-functions-correspond-to-pointed-cyclic-representations]]).

[F4] Under AC, the GNS triple is cyclic, has diagonal coefficient $\varphi$,
and satisfies $\|\xi_\varphi\|^2=\varphi(e)$; here therefore
$\|\xi_\varphi\|=1$ ([[thm-gns-construction-for-topological-groups]]).

[F5] A unitary representation is a homomorphism into bijective complex-linear
isometries; a closed linear subspace $M$ is invariant when
$\pi(g)M=M$ for every $g$; irreducible means that the only such subspaces are
$\{0\}$ and $H$ ([[def-strongly-continuous-unitary-representation]]).

[F6] Under AC, a function $0\le\psi\le\varphi$ has a unique bounded
self-adjoint commutant operator $T$ with $T$ and $I-T$ positive and
$\psi(g)=\langle\pi_\varphi(g)T\xi_\varphi,\xi_\varphi\rangle$; conversely
such an operator gives a positive-type function dominated by $\varphi$
([[lem-dominated-positive-type-functions-give-positive-commutant-contractions]]).

[F7] For normalized $\varphi$ and its unit cyclic GNS vector, every strict
convex decomposition into distinct members of $P_1(G)$ gives a nonscalar
positive contraction in $\pi_\varphi(G)'$ whose coefficient is the first
weighted summand; every nonscalar positive contraction in that commutant gives
such a strict decomposition ([[lem-nonscalar-positive-commutant-elements-split-a-normalized-positive-type-function]]).

[F8] Under AC, every bounded self-intertwiner of an irreducible complex
unitary representation is scalar ([[thm-schurs-lemma-for-unitary-representations]]).

[F9] Under Countable Choice, every vector has a unique decomposition
$x=m+n$ with $m\in M$ and $n\in M^\perp$ when $M$ is a closed linear
subspace of a Hilbert space ([[thm-orthogonal-decomposition-by-a-closed-subspace]]).

[F10] For that decomposition, the orthogonal projection $P_M$ is a bounded
linear idempotent with range $M$, kernel $M^\perp$, and $P_M^*=P_M$
([[lem-orthogonal-projection-is-linear-self-adjoint-contractive]]).

[F11] $M^\perp=\{y:\langle y,m\rangle=0\text{ for every }m\in M\}$, and
orthogonality is symmetric ([[def-orthogonality-and-orthogonal-complement]]).

[F12] The complex Hilbert pairing is linear in its first variable and
conjugate-linear in its second ([[def-real-and-complex-inner-product-space]]).

[F13] A self-adjoint bounded operator is positive when its quadratic form is
real and nonnegative on every vector ([[def-self-adjoint-positive-unitary-and-normal-operator]]).

[F14] AC implies DC and then Countable Choice, whose definition supplies the
assumption required in [F9], [F10] and [F13]
([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]],
[[def-countable-choice]]).

## Proof

Bekka–de la Harpe–Valette prove the same equivalence in Theorem C.5.2. Their
proof decomposes the cyclic vector along a proper invariant subspace in one
direction and uses their preceding domination proposition plus Schur's lemma
in the other. Here the projection is shown to lie in the commutant and the
two checked local positive-contraction lemmas supply the exact convex-splitting
and domination statements used below; no later group-$C^*$ pure-state theorem
is needed.

**Proof technique:** direct.

1.1 For $\psi_1,\psi_2\in P_1(G)$ and $r\in[0,1]$, every test matrix of $r\psi_1+(1-r)\psi_2$ is a convex combination of positive semidefinite matrices and is therefore positive semidefinite; its value at $e$ is $1$. Thus $P_1(G)$ is convex by [F1]. The normalized correspondence [F3] identifies the canonical GNS triple as the pointed cyclic class associated with $\varphi$, while [F4] gives its coefficient and $\|\xi_\varphi\|^2=\varphi(e)=1$, so $H_\varphi\ne\{0\}$. [F1, F3, F4, algebra]

1.2 Suppose $\pi_\varphi$ is irreducible and write $\varphi=s\varphi_1+(1-s)\varphi_2$ with $0<s<1$ and $\varphi_1,\varphi_2\in P_1(G)$. [F1, F2]

1.3 If $\varphi_1=\varphi_2$, the convex identity gives $\varphi_1=\varphi_2=\varphi$. In the remaining case assume $\varphi_1\ne\varphi_2$. The matrix test in [F1] shows that $s\varphi_1$ and $(1-s)\varphi_2=\varphi-s\varphi_1$ are of positive type, so $0\le s\varphi_1\le\varphi$. By [F6] there is a unique positive contraction $T$ in the commutant with coefficient $s\varphi_1$. [F1, F6, algebra]

1.4 Suppose instead that $\pi_\varphi$ is reducible. By [F4] its Hilbert space is nonzero, so [F5] supplies a proper nonzero closed invariant linear subspace $M\subset H_\varphi$. AC gives Countable Choice by [F14]; apply [F9] and [F10] to obtain the unique orthogonal projection $P=P_M$ onto $M$. [F4, F5, F9, F10, F14]

1.5 If $y\in M^\perp$, $m\in M$, and $g\in G$, unitarity and invariance give $\langle\pi_\varphi(g)y,m\rangle=\langle y,\pi_\varphi(g)^{-1}m\rangle=0$, since $\pi_\varphi(g)^{-1}m\in M$. Applying this for $g^{-1}$ shows $\pi_\varphi(g)M^\perp=M^\perp$. [F5, F11, F12]

2.1 In the distinct-summand case of step 1.3, $T$ is a bounded self-intertwiner of the irreducible representation, so [F8] gives $T=\lambda I$. Evaluating its coefficient at $e$ and using $\|\xi_\varphi\|=1$ gives $\lambda=s$; for each $g$, $s\varphi_1(g)=\langle\pi_\varphi(g)T\xi_\varphi,\xi_\varphi\rangle=s\varphi(g)$, so $\varphi_1=\varphi$ and then $\varphi_2=\varphi$, contradicting that case. Together with the equal-summand case in step 1.3, every strict convex decomposition is trivial, and [F2] makes $\varphi$ extreme. [F2, F4, F8, step 1.3, algebra]

2.2 For $x=m+n$ with $m\in M$ and $n\in M^\perp$, both summands remain in their respective subspaces under $\pi_\varphi(g)$. Uniqueness in [F9] therefore gives $P\pi_\varphi(g)x=\pi_\varphi(g)m=\pi_\varphi(g)Px$ for every $x,g$, so $P\in\pi_\varphi(G)'$. From [F10], $P=P^*=P^2$, and $I-P$ is also self-adjoint and idempotent. Orthogonality of $Px$ and $(I-P)x$ gives $\langle Px,x\rangle=\|Px\|^2\ge0$ and $\langle(I-P)x,x\rangle=\|(I-P)x\|^2\ge0$; thus [F13] makes $P$ and $I-P$ positive. [F9, F10, F11, F12, F13, F14, step 1.5]

3.1 The projection is nonscalar: if $P=\lambda I$, idempotence yields $\lambda^2=\lambda$, so $\lambda=0$ or $1$; its range would then be $\{0\}$ or $H_\varphi$, contrary to $\operatorname{ran}P=M$ being proper and nonzero. By [F7], this nonscalar positive contraction yields $s\in(0,1)$ and distinct $\varphi_1,\varphi_2\in P_1(G)$ with $\varphi=s\varphi_1+(1-s)\varphi_2$. The definition [F2] then shows $\varphi$ is not extreme. [F2, F7, F10, step 2.2, algebra]

4.1 Steps 1.2, 1.3 and 2.1 prove irreducibility implies extremality, and steps 1.4, 1.5, 2.2 and 3.1 prove that reducibility implies non-extremality. These give both implications of the stated equivalence. [step 1.2, step 1.3, step 2.1, step 1.4, step 1.5, step 2.2, step 3.1]

5.1 AC is declared because [F3], [F4], [F6], [F7] and [F8] assume it, and because [F14] supplies Countable Choice for the orthogonal decomposition and projection in [F9] and [F10] and for the positive-operator definition [F13]. After the subspace in [F5] is fixed, the decomposition and projection are unique; the invariant-complement and commutation arguments use no further choice. [F3, F4, F5, F6, F7, F8, F9, F10, F13, F14, step 1.4, step 1.5, step 2.2] ∎
