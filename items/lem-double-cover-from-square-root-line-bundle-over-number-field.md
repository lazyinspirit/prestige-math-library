---
id: lem-double-cover-from-square-root-line-bundle-over-number-field
kind: lemma
title: A square root of two rational points gives a smooth double cover
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-axiom-of-choice
  - def-number-field
  - cor-fields-of-characteristic-zero-and-finite-fields-are-perfect
  - def-algebraic-curve-over-field
  - def-genus-euler-characteristic-curve
  - def-cartier-divisor
  - def-effective-cartier-divisor
  - def-invertible-sheaf
  - def-invertible-sheaf-of-cartier-divisor
  - def-finite-morphism-schemes
  - def-flat-morphism-schemes
  - def-etale-morphism-schemes
  - def-smooth-morphism-schemes
  - def-sheaf-relative-differentials
  - lem-finite-etale-algebra-module-presentation-and-rank
  - lem-section-of-smooth-relative-curve-effective-cartier
  - thm-local-ring-smooth-curve-dvr
  - def-embedding-dimension-and-regular-local-ring
  - thm-krull-principal-ideal-theorem
  - thm-one-dimensional-regular-local-rings-are-dvrs
  - thm-regular-equals-smooth-over-perfect-field
  - thm-smooth-morphisms-stable-base-change-composition
  - lem-composite-finite-proper-morphism-proper
  - thm-riemann-hurwitz-complete
  - lem-curve-different-local-support-and-index-bound
justified_by: []
proof_strategy: direct
axiom_use: "AC is inherited through the section-effective-Cartier, finite-etale, regular-smooth, properness, Riemann-Hurwitz, and different suppliers."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: J. S. Milne, Abelian Varieties, version 2.0, Chapter IV §5, Theorem 5.1 and Lemma 5.3 proofs
      url: https://www.jmilne.org/math/CourseNotes/AV.pdf
      locator: Printed pp. 146–149; construction of the double cover from a square-root line bundle and its genus calculation.
    - title: G. Faltings, G. Wüstholz et al., Rational Points, Chapter V §§4.3–4.4, Proposition 4.9
      url: https://yhzhumath.github.io/Mordell2024/RP.pdf
      locator: Section 4.3, printed pp. 188–191, cyclic-cover construction; §4.4, Proposition 4.9, printed pp. 195–196, the Kodaira–Parshin cover and genus formula.
---

## Statement

Assume the Axiom of Choice. Let $k$ be a number field, let $C/k$ be a smooth proper geometrically connected curve of genus $g$, and let $P,Q\in C(k)$ be distinct. Let $\mathcal M$ be an invertible sheaf with a specified isomorphism $\mathcal M^{\otimes2}\cong\mathcal O_C(P+Q)$. Then there is a smooth proper geometrically connected curve $\widetilde C/k$ and a finite flat morphism $\pi:\widetilde C\to C$ of degree $2$ such that the set of points of $C$ over which $\pi$ is not étale is exactly $\{P,Q\}$, with ramification index $2$ above each. The genus of $\widetilde C$ is $2g$.

## Statement references

[Milne, *Abelian Varieties*, Chapter IV §5, Theorem 5.1 and Lemma 5.3 proofs](https://www.jmilne.org/math/CourseNotes/AV.pdf)

[Faltings–Wüstholz et al., *Rational Points*, Chapter V §§4.3–4.4, Proposition 4.9](https://yhzhumath.github.io/Mordell2024/RP.pdf)

## Facts & Assumptions

**Given:** AC; a number field $k$; a smooth proper geometrically connected curve $C/k$ of genus $g$; distinct rational points $P,Q$; an invertible sheaf $\mathcal M$; and an isomorphism $\mathcal M^{\otimes2}\cong\mathcal O_C(P+Q)$.

[A1] AC is the stated set-theoretic axiom. [[def-axiom-of-choice]]

[F1] A number field is a finite extension of $\mathbb Q$, hence has characteristic zero and is perfect; every finite extension of it is separable. [[def-number-field]] [[cor-fields-of-characteristic-zero-and-finite-fields-are-perfect]]

[F2] A curve over a field is a separated finite-type geometrically integral scheme of dimension one; smoothness and properness are additional properties. The genus of a smooth proper geometrically integral curve is $\dim_kH^1(C,\mathcal O_C)$. [[def-algebraic-curve-over-field]] [[def-genus-euler-characteristic-curve]]

[F3] The points $P,Q$ are sections of the smooth separated relative-dimension-one morphism $C\to\operatorname{Spec}k$, so each is a closed immersion cut out locally by one nonzerodivisor and is an effective Cartier divisor. Their local rings are discrete valuation rings with uniformizers. Since they are distinct, their sum $D=P+Q$ is an effective Cartier divisor with a simple local equation at each point. [[lem-section-of-smooth-relative-curve-effective-cartier]] [[thm-local-ring-smooth-curve-dvr]] [[def-cartier-divisor]] [[def-effective-cartier-divisor]]

[F4] For a Cartier divisor $D$ with local equation $x$, $\mathcal O_C(D)$ is locally $x^{-1}\mathcal O_C$. Its canonical section $1$ is locally $x\cdot x^{-1}$, so its zero divisor is exactly $D$ with the displayed multiplicities. An invertible sheaf is locally free of rank one. [[def-invertible-sheaf-of-cartier-divisor]] [[def-invertible-sheaf]]

[F5] If $s\in H^0(C,\mathcal M^{\otimes2})$, the sheaf $\mathcal A=\mathcal O_C\oplus\mathcal M^{-1}$ with multiplication on $\mathcal M^{-1}\otimes\mathcal M^{-1}=\mathcal M^{-2}$ given by contraction against $s$ is locally $\mathcal O_C[z]/(z^2-a)$ when $s=a m^2$ in a local generator $m$ of $\mathcal M$. This is free of rank two with basis $1,z$, hence defines a finite flat degree-two morphism. [[def-finite-morphism-schemes]] [[def-flat-morphism-schemes]]

[F6] For $B=A[z]/(z^2-a)$, the relative differentials are $\Omega_{B/A}=B\,dz/(2z\,dz)$. A finitely presented flat finite algebra is étale exactly when its relative differentials vanish. [[def-sheaf-relative-differentials]] [[lem-finite-etale-algebra-module-presentation-and-rank]]

[F7] A Noetherian local ring is regular when its embedding dimension equals its Krull dimension. In a Noetherian ring, a prime minimal over one element has height at most one; a one-dimensional regular local domain is a discrete valuation ring. A finite-type scheme over a perfect field is smooth if and only if it is regular. A composition of smooth morphisms is smooth, and étale morphisms are smooth. [[def-embedding-dimension-and-regular-local-ring]] [[thm-krull-principal-ideal-theorem]] [[thm-one-dimensional-regular-local-rings-are-dvrs]] [[thm-regular-equals-smooth-over-perfect-field]] [[thm-smooth-morphisms-stable-base-change-composition]] [[def-etale-morphism-schemes]] [[def-smooth-morphism-schemes]]

[F8] A finite morphism followed by a proper morphism has proper composite. [[lem-composite-finite-proper-morphism-proper]]

[F9] For a finite surjective separable morphism $f:X\to Y$ of smooth proper geometrically integral curves of degree $n$, $2g(X)-2=n(2g(Y)-2)+\deg(R_f)$, where $R_f$ is the different divisor. [[thm-riemann-hurwitz-complete]]

[F10] At a closed point of such a curve map, the coefficient of the different divisor is the length of the relative differential module. In the tame case, where the residue extension is separable and the ramification index $e$ is invertible in the residue field, that coefficient is $e-1$. [[lem-curve-different-local-support-and-index-bound]]

## Proof

1.1 Set $D=P+Q$ and let $s_D$ be the canonical section of $\mathcal O_C(D)$ from [F4]. Transfer it through the given isomorphism to a section $s$ of $\mathcal M^{\otimes2}$. Define the $\mathcal O_C$-algebra $\mathcal A=\mathcal O_C\oplus\mathcal M^{-1}$ by contracting two sections of $\mathcal M^{-1}$ against $s$. On a trivializing open with generator $m$ and $s=a m^2$, this is the associative algebra $\mathcal O_C[z]/(z^2-a)$ with $z=m^{-1}$. Thus $\widetilde C=\operatorname{Spec}_C\mathcal A$ is finite flat of degree $2$ over $C$; each fibre has a nonzero rank-two algebra, so the map is surjective. [A1, F3, F4, F5, given, construct]

2.1 On an open disjoint from $D$, $a$ is a unit. In the local algebra $z^2=a$, both $2$ and $z$ are units, so [F6] gives $\Omega_{\mathcal A/\mathcal O_C}=0$ and the finite flat map is étale there. At $P$, the local ring $R=\mathcal O_{C,P}$ is a discrete valuation ring by smoothness, with uniformizer $x$; [F3]–[F4] make the coefficient $a=u x$ for a unit $u$. The fibre algebra is $k[z]/(z^2)$, with one point of residue field $k$. At that point the relative differential module is nonzero because $2z$ lies in the maximal ideal, so the map is not étale. The relation $x=z^2/u$ gives ramification index $2$ once the source local ring is shown to be a discrete valuation ring. The same argument applies at $Q$. [A1, F1, F3, F4, F6, step 1.1, given]

3.1 Over an algebraic closure $\bar k$, the coefficient $a$ at $P$ has valuation one, so it is not a square in $\bar k(C)$; the generic algebra $\bar k(C)[z]/(z^2-a)$ is a field. Since $\mathcal A$ is locally free over the integral curve, its affine algebras inject into their generic fibres, so $\widetilde C_{\bar k}$ is integral. The same odd-valuation argument shows that the generic algebra over $k(C)$ is a field. At a point above $P$, the local algebra is the localization of $R[z]/(z^2-u x)$ at its unique maximal ideal $(x,z)=(z)$. It is a Noetherian local domain: it is finite over the Noetherian DVR $R$ and injects into its generic field. Its maximal ideal is nonzero and generated by $z$. The principal ideal theorem [F7] gives dimension at most one; the nonzero maximal ideal in a domain has positive height, so the dimension is one. Also $z\notin(z^2)$, since otherwise cancellation in the domain would make $z$ a unit. Thus the embedding dimension is one and the local ring is regular. The same argument applies above $Q$. Away from these points the map is étale, so its composite with the smooth structure map of $C$ is smooth and hence regular. The cover is finite type over $k$; hence [F7] implies it is smooth over $k$. The branch local rings are discrete valuation rings by [F7], and $x=z^2/u$ therefore confirms ramification index $2$. [A1, F1, F2, F3, F5, F6, F7, step 2.1]

4.1 The map is finite and $C$ is proper, so [F8] makes $\widetilde C$ proper. It is geometrically integral by step 3.1, hence geometrically connected. Its function-field extension has degree $2$ and is separable because $k$ has characteristic zero. Outside $P,Q$ the map is étale, so the different divisor has coefficient zero there. Above either rational point the residue extension is $k/k$, and the ramification index is $2$, which is invertible; [F10] gives different coefficient $2-1=1$. Thus $\deg(R_\pi)=2$. Applying [F9] gives $2g(\widetilde C)-2=2(2g(C)-2)+2,$ so $g(\widetilde C)=2g$. Together with step 2.1 this proves the non-étale locus is exactly $\{P,Q\}$ and establishes the Statement. [A1, F1, F8, F9, F10, step 2.1, step 3.1, given, algebra] ∎
