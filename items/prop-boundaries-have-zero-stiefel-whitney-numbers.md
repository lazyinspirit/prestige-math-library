---
id: prop-boundaries-have-zero-stiefel-whitney-numbers
kind: proposition
title: Boundaries have zero Stiefel-Whitney numbers
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-null-cobordant-closed-manifold
  - def-stiefel-whitney-number-of-a-closed-manifold
  - lem-fundamental-class-of-a-boundary-pushes-forward-to-zero
  - lem-boundary-stable-tangent-splits-off-a-trivial-line
  - lem-second-countable-smooth-manifolds-have-cw-homotopy-type
  - thm-naturality-of-stiefel-whitney-classes
  - thm-whitney-sum-formula-for-stiefel-whitney-classes
  - def-stiefel-whitney-classes-from-the-projective-bundle-relation
  - def-kronecker-evaluation-pairing
  - lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives
  - prop-every-manifold-is-f-two-orientable-and-orientability-is-componentwise
  - def-fundamental-class-of-a-compact-oriented-manifold
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "John Milnor and James Stasheff, Characteristic Classes (original pagination)"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
      locator: "Theorem 4.9 with its proof, printed pp.52-53"
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, 2002)"
      url: https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro
      locator: "Section 6.3, Stiefel-Whitney numbers of a boundary, electronic p.117"
---

## Statement

Assume AC ([[def-axiom-of-choice]]), used only through the Stiefel-Whitney
class construction, its admissibility input, and the inward field used in
the boundary tangent splitting (which requires $\mathrm{AC}_\omega$). Let $M$ be a closed smooth
$n$-manifold that is the boundary of a compact smooth $(n+1)$-manifold $W$,
with canonical mod-two fundamental class $[M]\in H_n(M;\mathbb F_2)$
([[def-stiefel-whitney-number-of-a-closed-manifold]]) and inclusion
$i:M\hookrightarrow W$. Then
$$w^{I}[M]=\langle w^{I}(TM),[M]\rangle=0$$
for every monomial $w^{I}=w_1^{r_1}\cdots w_n^{r_n}$ of total degree $n$.
Hence every Stiefel-Whitney number of a closed boundary vanishes, and a closed
manifold with at least one nonzero Stiefel-Whitney number is not
null-cobordant ([[def-null-cobordant-closed-manifold]]).

## Facts & Assumptions

**Given:** A closed smooth $n$-manifold $M=\partial W$ that is the boundary of a compact smooth $(n+1)$-manifold $W$, its inclusion $i:M\to W$, and the monomials $w^I$ of total degree $n$ in the tangent classes of $M$. AC is assumed.

[F1] The restriction of the tangent bundle of $W$ to the boundary splits off a trivial line: $TW|_M\cong TM\oplus\varepsilon^1$, under $\mathrm{AC}_\omega$, which follows from AC ([[lem-boundary-stable-tangent-splits-off-a-trivial-line]], [[def-axiom-of-choice]]).

[F2] Stiefel-Whitney classes are natural, $w_i(f^*E)=f^*w_i(E)$, and satisfy the Whitney sum formula with stability for trivial summands, $w(E\oplus\varepsilon^r)=w(E)$; the construction applies to $M$ because a closed smooth manifold is a paracompact Hausdorff CGWH base of CW homotopy type with numerable tangent bundle ([[thm-naturality-of-stiefel-whitney-classes]], [[thm-whitney-sum-formula-for-stiefel-whitney-classes]], [[def-stiefel-whitney-classes-from-the-projective-bundle-relation]], [[lem-second-countable-smooth-manifolds-have-cw-homotopy-type]]).

[F3] The Kronecker pairing is natural: $\langle i^*\alpha,z\rangle=\langle\alpha,i_*z\rangle$, and is additive ([[def-kronecker-evaluation-pairing]], [[lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives]]).

[F4] The fundamental class of the boundary pushes forward to zero: $i_*[M]=0$ in $H_n(W;\mathbb F_2)$, where $[M]$ is the fundamental class of the canonical mod-two orientation ([[lem-fundamental-class-of-a-boundary-pushes-forward-to-zero]], [[prop-every-manifold-is-f-two-orientable-and-orientability-is-componentwise]], [[def-fundamental-class-of-a-compact-oriented-manifold]]).

[F5] A Stiefel-Whitney number of a closed smooth $n$-manifold is the evaluation $w^I[M]=\langle w^I(TM),[M]\rangle$ of a degree-$n$ monomial, it is a diffeomorphism invariant, and $M$ is null-cobordant exactly when $M$ is diffeomorphic to the whole boundary of a compact smooth $(n+1)$-manifold ([[def-stiefel-whitney-number-of-a-closed-manifold]], [[def-null-cobordant-closed-manifold]]).

## Proof

1.1 (The tangent classes of $M$ are restrictions from $W$.) By [F1], $TW|_M\cong TM\oplus\varepsilon^1$. Applying naturality and the Whitney sum formula with the trivial summand from [F2] gives $$w(TM)=w(TM\oplus\varepsilon^1)=w(TW|_M)=w(i^*TW)=i^*w(TW),$$ and hence $w^I(TM)=i^*w^I(TW)$ for every monomial. [F1, F2]

2.1 (The evaluations vanish.) For a degree-$n$ monomial $w^I$, naturality of the Kronecker pairing [F3] and the vanishing of the boundary pushforward [F4] give $$w^I[M]=\langle w^I(TM),[M]\rangle=\langle i^*w^I(TW),[M]\rangle=\langle w^I(TW),i_*[M]\rangle=\langle w^I(TW),0\rangle=0.$$ [F3, F4, step 1.1]

3.1 (All numbers vanish; null-cobordism consequence.) Since the monomial $w^I$ of total degree $n$ was arbitrary, every Stiefel-Whitney number of the closed boundary $M=\partial W$ vanishes. If a closed smooth $n$-manifold $N$ is null-cobordant, then by [F5] it is diffeomorphic to the whole boundary of some compact smooth $(n+1)$-manifold, and diffeomorphism invariance of the numbers transfers the vanishing to $N$. Contrapositively, a closed manifold with at least one nonzero Stiefel-Whitney number is not null-cobordant. [F5, step 2.1] ∎
