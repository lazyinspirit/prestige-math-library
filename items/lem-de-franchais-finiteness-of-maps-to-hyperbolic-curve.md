---
id: lem-de-franchais-finiteness-of-maps-to-hyperbolic-curve
kind: lemma
title: "Finitely many maps to a curve of genus at least two"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - cor-projective-embedding-every-smooth-proper-curve
  - thm-riemann-hurwitz-complete
  - cor-canonical-degree-two-g-minus-two
  - def-canonical-line-bundle-curve
  - lem-degree-pullback-divisor-finite-morphism-curves
  - thm-riemann-roch-euler-characteristic-curve
  - thm-hilbert-scheme-represents-projective-flat-families
  - cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - lem-hilbert-scheme-tangent-space-is-normal-bundle-sections
  - lem-determinant-trick-for-nakayama
  - thm-line-bundle-rational-section-cartier-divisor
  - def-axiom-of-choice
  - def-dependent-choice
  - thm-choice-implies-dependent-implies-countable-choice
justified_by: []
proof_strategy: direct
axiom_use: "The present proof additionally assumes AC and DC through projective embedding and Hilbert representability. The original unqualified Statement is preserved and its choice scope remains held."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Abelian Varieties, version 2.0, Chapter IV §5, proof of Theorem 5.2, printed pp. 148–149"
      url: "https://www.jmilne.org/math/CourseNotes/AV.pdf"
      locator: "De Franchis finiteness via graphs in the product, negative self-intersection, and the Hilbert scheme."
    - title: "G. Faltings, G. Wüstholz et al., Rational Points, 2nd ed. (1986), Chapter V §4.5, printed pp. 196–197"
      url: "https://yhzhumath.github.io/Mordell2024/RP.pdf"
      locator: "The final Mordell deduction uses finiteness of maps from a fixed curve to a target of genus at least two."
verification: {}
---

## Statement

Let $k$ be a field of characteristic zero, and let $X$ and $C$ be smooth proper geometrically connected curves over $k$. If $g(C)\ge2$, then the set of nonconstant $k$-morphisms $X\to C$ is finite.

## Statement references

[[def-algebraic-curve-over-field]]

[[thm-riemann-hurwitz-complete]]

[Milne, proof of Theorem 5.2](https://www.jmilne.org/math/CourseNotes/AV.pdf)

[Faltings–Wüstholz et al., Chapter V §4.5](https://yhzhumath.github.io/Mordell2024/RP.pdf)

## Facts & Assumptions

**Given:** AC and DC for the current proof route; smooth proper geometrically connected curves $X,C$ over a characteristic-zero field $k$; and $g(C)\ge2$.

[A1] AC and DC are used at their actual projective-embedding and Hilbert-representability supplier scopes. ([[def-axiom-of-choice]], [[def-dependent-choice]])

[F1] Under AC, smooth proper curves over a field are projective and admit very ample line bundles. [[cor-projective-embedding-every-smooth-proper-curve]]

[F2] For every nonconstant morphism $f:X\to C$ of degree $d$, Riemann–Hurwitz gives $2g(X)-2=d(2g(C)-2)+\deg R_f$ with $\deg R_f\ge0$. [[thm-riemann-hurwitz-complete]]

[F3] For a line bundle $L$ on a smooth proper curve, Riemann–Roch gives $\chi(L)=\deg(L)+1-g$. [[thm-riemann-roch-euler-characteristic-curve]]

[F4] The tangent line bundle of $C$ has degree $2-2g(C)$, the degree of a pullback is multiplied by the finite-map degree, and a nonzero section of a line bundle has an effective zero divisor of the same degree. [[cor-canonical-degree-two-g-minus-two]] [[def-canonical-line-bundle-curve]] [[lem-degree-pullback-divisor-finite-morphism-curves]] [[thm-line-bundle-rational-section-cartier-divisor]]

[F5] Under AC and DC, for a fixed Hilbert polynomial, the Hilbert scheme of a projective scheme over a field is proper and of finite presentation and represents flat projective families; being of finite type over a field, it is Noetherian and has finitely many irreducible components. [[thm-hilbert-scheme-represents-projective-flat-families]] [[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]]

[F6] The Hilbert-scheme tangent space at a closed subscheme $\Gamma\subset Z$ is $H^0(\Gamma,\mathcal Hom(\mathcal I_\Gamma/\mathcal I_\Gamma^2,\mathcal O_\Gamma))$ when $\Gamma$ is a regular immersion. [[lem-hilbert-scheme-tangent-space-is-normal-bundle-sections]]

[F7] If $R$ is local with maximal ideal $\mathfrak m$, apply the determinant trick to $I=M=\mathfrak m$: from $\mathfrak m^2=\mathfrak m$ it gives $a\in\mathfrak m$ with $(1-a)\mathfrak m=0$. Since $1-a$ is a unit, $\mathfrak m=0$. [[lem-determinant-trick-for-nakayama]]

## Proof
1.1 If no nonconstant map exists, the claim is immediate. Otherwise, for any such $f:X\to C$, [F2] gives $d=\deg(f)\ge1$ and $d\le (g(X)-1)/(g(C)-1)$. The right side is fixed, so only finitely many positive integer degrees can occur. [F2, given, algebra]

2.1 Work over $k$ itself. By [F1], choose very ample line bundles $A$ on $X$ and $B$ on $C$, and put $H=\operatorname{pr}_X^*A\otimes\operatorname{pr}_C^*B$ on $Z=X\times_k C$. The graph $\Gamma_f\subset Z$ is isomorphic to $X$, and $\deg(H|_{\Gamma_f})=\deg A+d\deg B$. Riemann–Roch [F3] gives its Hilbert polynomial $P_f(m)=m(\deg A+d\deg B)+1-g(X)$. Since the degrees $d$ range over a finite set, only finitely many such Hilbert polynomials occur. [F1, F3, step 1.1, choose, algebra]

3.1 For each of these polynomials, [F5] gives a finite-type Hilbert scheme. The graph $\Gamma_f$ is a regular immersion: locally choose a smooth relative parameter on $C$; the graph is cut out in the product by the difference between that parameter and its pullback along $f$, whose differential in the $C$ direction is nonzero. Its normal bundle is $f^*T_C$: along the graph, the quotient of $T_X\oplus f^*T_C$ by the graph tangent map $v\mapsto(v,df(v))$ is identified with $f^*T_C$ by $(a,b)\mapsto b-df(a)$. By [F6], the Hilbert tangent space at $[\Gamma_f]$ is therefore $H^0(X,f^*T_C)$. By [F4], $\deg(f^*T_C)=d(2-2g(C))<0$, so this space is zero: a nonzero regular section would have an effective zero divisor of negative degree. [F3, F4, F5, F6, step 2.1, algebra]

4.1 Let $\mathfrak m$ be the maximal ideal of the local ring of the relevant Hilbert scheme at $[\Gamma_f]$. The zero tangent space in step 3.1 means $\mathfrak m/\mathfrak m^2=0$. This local ring is Noetherian by [F5], so $\mathfrak m$ is finitely generated; apply the determinant-trick conclusion [F7] to $I=M=\mathfrak m$ to obtain $a\in\mathfrak m$ with $(1-a)\mathfrak m=0$. Since $1-a$ is a unit in the local ring, $\mathfrak m=0$. Thus each graph point is an isolated closed point and hence an irreducible component by itself. By [F5], each Hilbert scheme has only finitely many irreducible components, so only finitely many graph points occur across the finitely many Hilbert polynomials. [F5, F7, step 3.1]

5.1 A morphism is determined by its graph, and each graph is a closed $k$-rational point of its Hilbert scheme. The finite set of graph points from step 4.1 therefore bounds the set of nonconstant $k$-morphisms $X\to C$. [step 4.1, algebra] ∎

## Proof status

The degree/Hilbert-polynomial/negative-tangent argument proves the full finiteness conclusion under AC and DC through the actual suppliers [F1] and [F5]. The original unqualified Statement is unchanged; its original choice scope remains held. This conditional argument can be used by AC consumers, since AC supplies DC via [[thm-choice-implies-dependent-implies-countable-choice]].
