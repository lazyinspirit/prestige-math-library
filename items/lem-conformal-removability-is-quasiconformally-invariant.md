---
id: lem-conformal-removability-is-quasiconformally-invariant
kind: lemma
title: Conformal removability is invariant under quasiconformal maps
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
dependency_level: 14
deps:
  - def-conformal-removable-compact-set
  - lem-positive-area-compact-sets-are-not-conformally-removable
  - def-measurable-beltrami-coefficient
  - def-beltrami-coefficient-and-maximal-dilatation
  - def-acl-sobolev-quasiconformal-homeomorphism
  - lem-analytic-quasiconformality-implies-modulus-distortion
  - thm-measurable-riemann-mapping-sphere
  - thm-composition-and-inverse-quasiconformal
  - thm-one-quasiconformal-is-conformal
  - def-mobius-transformation
  - thm-mobius-transformations-biholomorphic-sphere
  - def-riemann-sphere-holomorphic-charts
  - rem-riemann-sphere-one-point-compactification
  - thm-biholomorphic-self-maps-riemann-sphere-are-mobius
  - def-axiom-of-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
axiom_use: Assume AC for the measurable Riemann mapping theorem, the analytic quasiconformal convention, composition/inversion, and the local 1-quasiconformal criterion. Countable Choice is used in the measurable coefficient and area interfaces and follows from AC by [[thm-choice-implies-dependent-implies-countable-choice]].
sources:
  scraped: []
  references:
    - title: "Malik Younsi, On removable sets for holomorphic functions, EMS Surv. Math. Sci. 2 (2015), 219–254"
      url: "https://ems.press/content/serial-article-files/36977?nt=1"
      locator: "§5.1, Proposition 5.3 and proof, printed pp. 241–242: quasiconformal invariance of CH-removability; the source assumes h(∞)=∞ and uses the measurable Riemann mapping theorem, null-set preservation, and Weyl's lemma. Section 4.1, Theorem 4.2, printed p. 234, supplies the Beltrami existence and uniqueness-up-to-conformal-map interface."
    - title: "Mikhail Lyubich, Conformal Geometry and Dynamics of Quadratic Polynomials, vol. I (book draft, Stony Brook)"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 2 §§14.1–14.5, printed pp. 195–198: the sphere measurable Riemann mapping theorem, uniqueness, and the coefficient-straightening argument; read in full."
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $h:\widehat{\mathbb C}\to\widehat{\mathbb C}$ be a quasiconformal homeomorphism. For every compact set $K\subseteq\widehat{\mathbb C}$, $K$ is globally conformally removable if and only if $h(K)$ is globally conformally removable ([[def-conformal-removable-compact-set]]).

## Facts & Assumptions

**Given:** AC, a quasiconformal sphere homeomorphism $h$, and a compact set $K$.

[F1] Global conformal removability means that every sphere homeomorphism conformal off the compact set is Möbius; it is invariant under Möbius maps ([[def-conformal-removable-compact-set]]).

[F2] Every globally conformally removable compact sphere set has zero area in a finite chart: otherwise [[lem-positive-area-compact-sets-are-not-conformally-removable]] supplies a non-Möbius sphere homeomorphism conformal off it.

[F3] A quasiconformal homeomorphism and its inverse preserve planar null sets in local charts. The area formula and null-set clause of [[lem-analytic-quasiconformality-implies-modulus-distortion]] give this for relatively compact Borel sets; cover the compact source set by finitely many relatively compact chart patches whose images lie in target charts, apply the planar clause on each patch, and take their finite union for the sphere version.

[F4] A measurable sphere Beltrami coefficient with essential norm below $1$ has a quasiconformal sphere solution with that coefficient ([[thm-measurable-riemann-mapping-sphere]], [[def-measurable-beltrami-coefficient]]).

[F5] In holomorphic charts, the Beltrami coefficient of a composition is given by the quasiconformal chain rule, and inverses and compositions of quasiconformal maps remain quasiconformal ([[thm-composition-and-inverse-quasiconformal]], [[def-beltrami-coefficient-and-maximal-dilatation]]). Möbius maps are conformal, hence $1$-quasiconformal ([[thm-mobius-transformations-biholomorphic-sphere]]).

[F6] A local analytic $1$-quasiconformal homeomorphism is conformal ([[thm-one-quasiconformal-is-conformal]]); a biholomorphic self-map of the sphere is Möbius ([[thm-biholomorphic-self-maps-riemann-sphere-are-mobius]]).

[F7] AC implies Countable Choice ([[thm-choice-implies-dependent-implies-countable-choice]]).

## Proof

**Proof technique:** straighten the Beltrami coefficient of a conformal-off-set homeomorphism, use removability on the preimage set, and then use the area-zero image to apply the local $1$-quasiconformal criterion.

1.1 First suppose $K$ is removable. If $h(\infty)=p\ne\infty$, put $A(z)=1/(z-p)$; if $h(\infty)=\infty$, put $A=\operatorname{id}$. Then $h_0=A\circ h$ fixes $\infty$. By [F1] and [F5], $h_0(K)$ is removable exactly when $h(K)$ is, and $h_0$ is quasiconformal, so it suffices to treat the case $h(\infty)=\infty$. By [F2], $K$ has area zero; [F3] then gives area zero for $S:=h(K)$. [F1, F2, F3, F5, given, construct]

2.1 Let $G:\widehat{\mathbb C}\to\widehat{\mathbb C}$ be any homeomorphism conformal off $S$, and define $u:=h^{-1}\circ G^{-1}$. On $\widehat{\mathbb C}\setminus G(S)$, $G^{-1}$ is conformal and $h^{-1}$ is quasiconformal, so $u$ is quasiconformal there with dilatation bounded by that of $h^{-1}$. Extend its Beltrami coefficient by zero on the compact set $G(S)$; this gives a measurable sphere coefficient $\mu$ with $\|\mu\|_\infty<1$. Countable Choice for the measurable-coefficient interface follows from [F7] and the assumed AC. By [F4], choose a quasiconformal sphere homeomorphism $F$ with $\mu_F=\mu$ almost everywhere. [F3, F4, F5, F7, step 1.1, given, construct]

3.1 The equality $\mu_F=\mu_u$ holds on $\widehat{\mathbb C}\setminus G(S)$. The composition formula [F5] therefore gives zero Beltrami coefficient for $F\circ u^{-1}$ on $u(\widehat{\mathbb C}\setminus G(S))=\widehat{\mathbb C}\setminus K$, since $u^{-1}=G\circ h$. Thus $F\circ u^{-1}=F\circ G\circ h$ is locally $1$-quasiconformal there; [F6] makes it conformal on every component of $\widehat{\mathbb C}\setminus K$. Removability of $K$ and [F1] imply that $\Phi:=F\circ G\circ h$ is Möbius. [F1, F5, F6, step 1.1, step 2.1, given]

4.1 Rearranging gives $G=F^{-1}\circ\Phi\circ h^{-1}$, which is quasiconformal on the whole sphere by [F5]. It is conformal off $S$, and $S$ has area zero by step 1.1; hence its Beltrami coefficient vanishes almost everywhere. Thus $G$ is locally $1$-quasiconformal in sphere charts, and [F6] makes it conformal everywhere and Möbius. This proves that $S=h(K)$ is removable. [F3, F5, F6, step 1.1, step 2.1, step 3.1, algebra]

5.1 Conversely, if $h(K)$ is removable, apply the implication just proved to the quasiconformal map $h^{-1}$ and the compact set $h(K)$; this shows that $K$ is removable. Therefore removability is equivalent for $K$ and $h(K)$. [step 1.1, step 4.1, given] ∎
