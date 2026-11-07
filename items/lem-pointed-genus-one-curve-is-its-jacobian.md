---
id: lem-pointed-genus-one-curve-is-its-jacobian
kind: lemma
title: A pointed genus-one curve is its Jacobian
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-algebraic-curve-over-field
  - def-genus-euler-characteristic-curve
  - def-jacobian-of-smooth-proper-curve
  - thm-picard-zero-represented-by-jacobian
  - def-pointed-abel-jacobi-map-of-curve
  - cor-fields-of-characteristic-zero-and-finite-fields-are-perfect
  - def-etale-locus-morphism
  - ex-finite-etale-separable-extension
  - lem-function-with-poles-defines-map-p1
  - thm-nonconstant-morphism-proper-curves-finite-surjective
  - thm-etale-locus-open
  - thm-finite-morphism-integral-closed
  - lem-finite-etale-algebra-module-presentation-and-rank
  - cor-birational-smooth-proper-curves-isomorphic
  - thm-affine-domain-dimension-transcendence-degree
justified_by: []
proof_strategy: direct
axiom_use: "AC implies DC, which the current Jacobian representability carrier assumes. The unchanged field Picard proof has existing independent owner acceptance; the pointed Abel–Jacobi Definition is used with the given representing object."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: J. S. Milne, Abelian Varieties, version 2.0, Chapter III §§1–2 and §6
      url: https://www.jmilne.org/math/CourseNotes/AV.pdf
      locator: Jacobian construction and the pointed Abel–Jacobi map
---

## Statement

Assume the Axiom of Choice. Let $k$ be a field of characteristic zero, let $C/k$ be a smooth proper geometrically connected curve of genus $1$, and let $P\in C(k)$. Let $J_C$ be the algebraic Jacobian of $C$, and let $u_P:C\to J_C$ be the morphism sending a point $Q$ to the degree-zero divisor class $[\mathcal O_C(Q-P)]$. Then $u_P$ is an isomorphism over $k$.

## Statement references

[Milne, *Abelian Varieties*, Chapter III §§1–2 and §6](https://www.jmilne.org/math/CourseNotes/AV.pdf)

## Facts & Assumptions

**Given:** AC; a characteristic-zero field $k$; a smooth proper geometrically connected genus-one curve $C/k$; a point $P\in C(k)$; the Jacobian $J_C$; and the pointed Abel–Jacobi morphism $u_P$.

[A1] AC implies DC, which is assumed by the current Jacobian representability carrier. [[def-axiom-of-choice]] [[thm-choice-implies-dependent-implies-countable-choice]]

[F1] [[def-jacobian-of-smooth-proper-curve]] denotes the abelian variety representing the degree-zero relative Picard fppf sheaf by $J_C$ when such a representative exists; the definition alone does not assert existence.

[L1] [[thm-picard-zero-represented-by-jacobian]] proves that, assuming AC and DC, this sheaf is represented by an abelian variety of dimension $g$, its Jacobian. Its unchanged full field-level AC/DC proof has existing independent owner acceptance. The AC hypothesis here supplies DC by [A1].

[F2] [[def-pointed-abel-jacobi-map-of-curve]] defines $u_P$ by the family $Q\mapsto[\mathcal O_C(Q-P)]$. Its unchanged Definition is used with the given representing object and the accepted field Picard provider.

[F3] A curve is a nonempty integral finite-type scheme of dimension one; a smooth proper geometrically connected curve is geometrically integral. Its function field has transcendence degree one. [[def-algebraic-curve-over-field]] [[thm-affine-domain-dimension-transcendence-degree]]

[F4] A nonconstant rational function on a smooth proper geometrically integral curve defines a finite locally free surjective morphism to $\mathbb P^1$ whose degree is the degree of its pole divisor. [[lem-function-with-poles-defines-map-p1]]

[F5] If a divisor $Q-R$ with distinct geometric points is principal, its defining nonconstant rational function has a single simple pole, so its map to $\mathbb P^1$ has degree one. A degree-one map between smooth proper geometrically integral curves is birational and therefore an isomorphism. The projective line has genus zero. [[lem-function-with-poles-defines-map-p1]] [[cor-birational-smooth-proper-curves-isomorphic]] [[def-genus-euler-characteristic-curve]]

[F6] A nonconstant morphism between proper integral curves is finite and surjective. [[thm-nonconstant-morphism-proper-curves-finite-surjective]]

[F7] A finite separable morphism of curves is étale at the generic point. Its étale locus is open; since the morphism is finite and hence closed, deleting the image of the non-étale locus gives a nonempty open of the target over which the restriction is finite étale. [[def-etale-locus-morphism]] [[thm-etale-locus-open]] [[thm-finite-morphism-integral-closed]]

[F8] A finite étale morphism of constant degree $n$ over an algebraically closed field has exactly $n$ distinct geometric points in every fibre. [[lem-finite-etale-algebra-module-presentation-and-rank]]

[F9] A characteristic-zero field is perfect, so every finite extension of it is separable; a finite field extension gives an étale morphism of spectra exactly when it is separable. [[cor-fields-of-characteristic-zero-and-finite-fields-are-perfect]] [[ex-finite-etale-separable-extension]]

## Proof

1.1 Let $\bar k$ be an algebraic closure of $k$. By [F3], the function field of $C_{\bar k}$ has transcendence degree one, so it contains a nonconstant rational function. By [F4], this gives a finite surjective map $C_{\bar k}\to\mathbb P^1_{\bar k}$. Since $\mathbb P^1(\bar k)$ is infinite, $C(\bar k)$ contains distinct points. If $Q,R\in C(\bar k)$ are distinct and $u_P(Q)=u_P(R)$, then [F2] gives $[\mathcal O_C(Q-R)]=0$, so $Q-R$ is principal. By [F5], its function would give a degree-one map $C_{\bar k}\to\mathbb P^1_{\bar k}$ and hence an isomorphism, contradicting $g(C)=1$ and $g(\mathbb P^1)=0$. Thus $u_P$ is injective on geometric points and is nonconstant. [F2, F3, F4, F5, given, choose]

2.1 By [L1], $J_C$ is a smooth proper geometrically connected curve of dimension one, and by [F2] $u_P$ is a morphism. Since it is nonconstant, [F6] makes it finite and surjective. Its function-field extension is finite separable by [F9]. Thus the generic point lies in the étale locus [F7], which is open by [[thm-etale-locus-open]]. The complement is closed in $C_{\bar k}$ and, because $u_P$ is finite, its image is closed in $J_{C,\bar k}$; this image omits the generic point. Removing it gives a nonempty open subset $V\subseteq J_{C,\bar k}$ over which $u_P^{-1}(V)\to V$ is finite étale. Its degree is the generic degree $n=[k(C):k(J_C)]$. [L1, F2, F6, F7, F9, step 1.1, given]

3.1 The nonempty open $V_{\bar k}$ has a geometric point because it is a nonempty open subset of a curve over the algebraically closed field $\bar k$. By [F8], its fibre under the finite étale degree-$n$ map consists of $n$ distinct geometric points. Injectivity from step 1.1 forces $n=1$. Hence $u_P$ induces an isomorphism of function fields and is birational; [F5] then makes it an isomorphism over $k$. [F5, F8, step 1.1, step 2.1, given] ∎

## Proof status

The field-geometric argument is complete under the stated AC hypothesis, which supplies DC for the independently accepted field Picard provider [L1]. The unchanged pointed Abel–Jacobi Definition [F2] is used with the given representing object. This uses existing supplier acceptance and the bounded independent138 review; it asserts no relative-DVR Picard result or native gate credit.
