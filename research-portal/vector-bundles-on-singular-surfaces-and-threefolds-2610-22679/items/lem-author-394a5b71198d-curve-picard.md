---
id: lem-author-394a5b71198d-curve-picard
kind: lemma
title: The actual first Chern map is the Picard isomorphism on an affine curve
status: published
domain: mathematics
deps:
  - lem-author-394a5b71198d-line-determinant
  - math:thm-regular-equals-smooth-over-perfect-field
  - math:thm-one-dimensional-regular-local-rings-are-dvrs
  - math:cor-dvr-is-a-pid
  - math:thm-principal-ideal-domains-are-unique-factorisation-domains
  - math:thm-cartier-weil-isomorphism-locally-factorial
  - math:thm-cartier-divisors-mod-principal-to-picard
  - math:def-intersection-with-a-cartier-divisor-and-first-chern-class
  - math:def-chow-group-of-cycles-mod-rational-equivalence
  - math:def-axiom-of-choice
  - math:def-algebraic-curve-over-field
  - math:cor-fields-of-characteristic-zero-and-finite-fields-are-perfect
  - def-exterior-determinant-bundles
  - lem-adjudicate-b5ccab493b5a-curve-local-rings
  - math:lem-curve-closed-subsets-finite
  - math:thm-line-bundle-rational-section-cartier-divisor
dependency_roles:
  lem-author-394a5b71198d-line-determinant: mathematical-premise
  math:thm-regular-equals-smooth-over-perfect-field: mathematical-premise
  math:thm-one-dimensional-regular-local-rings-are-dvrs: mathematical-premise
  math:cor-dvr-is-a-pid: mathematical-premise
  math:thm-principal-ideal-domains-are-unique-factorisation-domains: mathematical-premise
  math:thm-cartier-weil-isomorphism-locally-factorial: mathematical-premise
  math:thm-cartier-divisors-mod-principal-to-picard: mathematical-premise
  math:def-intersection-with-a-cartier-divisor-and-first-chern-class: mathematical-premise
  math:def-chow-group-of-cycles-mod-rational-equivalence: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-algebraic-curve-over-field: mathematical-premise
  math:cor-fields-of-characteristic-zero-and-finite-fields-are-perfect: mathematical-premise
  def-exterior-determinant-bundles: mathematical-premise
  lem-adjudicate-b5ccab493b5a-curve-local-rings: mathematical-premise
  math:lem-curve-closed-subsets-finite: mathematical-premise
  math:thm-line-bundle-rational-section-cartier-divisor: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 17
---

## Statement
Assume AC. Let $C$ be a smooth integral affine curve over an algebraically closed field. The actual first Chern map $\operatorname{Pic}(C)\to\mathrm{CH}^1(C)$, $[L]\mapsto c_1(L)$, is an isomorphism. In particular $c_1(L)=0$ if and only if $L\cong\mathcal O_C$, and this is equivalent to $\varepsilon(L)=0$. Since $\det L=L$, this is the determinant/line-bundle interface in dimension one.

## Facts & Assumptions

**Given:** The hypotheses and data in the statement, with AC and the article's fixed universes wherever perfect K-theory is used.

**Goal:** Establish the asserted conclusion.

[A1] AC is carried through the local-geometry suppliers in [F0], the regularity, DVR and PID-to-UFD suppliers in [F1], the Cartier/Weil comparison in [F2], the Chow and Chern constructions in [F3], and the exterior-dual criterion in [F4]. The fixed-universe assumptions for the perfect $K_0$ class are inherited from [F4]. The quotient composition and the rank-one identification below introduce no additional choice assumption. [[math:def-axiom-of-choice]]

[F0] A curve over $k$ is a separated geometrically integral finite-type $k$-scheme of chain dimension one; a smooth curve has smooth structure morphism. In particular $C$ is integral, quasi-compact and one-dimensional. It has a unique generic point $\eta$, whose local ring is the function field $k(C)$, and every nongeneric point is closed with a one-dimensional Noetherian local domain as its local ring. Every proper closed subset is a finite set of closed points. [[math:def-algebraic-curve-over-field]], [[lem-adjudicate-b5ccab493b5a-curve-local-rings]], [[math:lem-curve-closed-subsets-finite]]

[F1] An algebraically closed field is perfect. For a finite-type scheme over a perfect field, smoothness implies regularity: the scheme is locally Noetherian and all its local rings are regular local. A one-dimensional regular local ring is a DVR, and a DVR is a PID and hence a UFD under AC. [[math:cor-fields-of-characteristic-zero-and-finite-fields-are-perfect]], [[math:thm-regular-equals-smooth-over-perfect-field]], [[math:thm-one-dimensional-regular-local-rings-are-dvrs]], [[math:cor-dvr-is-a-pid]], [[math:thm-principal-ideal-domains-are-unique-factorisation-domains]]

[F2] On a locally factorial Noetherian integral scheme, meaning here that every local ring is a UFD, the Cartier-to-Weil cycle map is an isomorphism, compatibly with principal divisors. The map $D\mapsto[\mathcal O_C(D)]$ identifies Cartier divisors modulo principal divisors with $\operatorname{Pic}(C)$, the group of isomorphism classes of invertible sheaves under tensor product, with identity $[\mathcal O_C]$. [[math:thm-cartier-weil-isomorphism-locally-factorial]], [[math:thm-cartier-divisors-mod-principal-to-picard]]

[F3] For a pure one-dimensional scheme, $\mathrm{CH}^1(C)=A_0(C)$ is the group of zero-cycles modulo divisors of rational functions on integral one-dimensional closed subschemes. On a normal integral curve these divisors agree with principal Weil divisors. The actual first Chern class of a line bundle is the divisor cycle of a nonzero rational section, modulo these relations; the order is computed on its coefficient in a local frame. This class is independent of the rational section and additive under tensor product. [[math:def-chow-group-of-cycles-mod-rational-equivalence]], [[math:def-intersection-with-a-cartier-divisor-and-first-chern-class]]

[F4] On a Noetherian affine scheme the exterior-dual class of a line bundle is $\varepsilon(L)=1-[L^\vee]$ in the article's perfect $K_0$, and its vanishing is equivalent to $L\cong\mathcal O_C$. [[lem-author-394a5b71198d-line-determinant]]

[F5] A line bundle is a locally free sheaf of rank one. The determinant of a rank-$r$ bundle is its top exterior power $\det E=\Lambda^rE$, and the degree-one exterior power is canonically $\Lambda^1E=E$. [[def-exterior-determinant-bundles]]

[F6] On an integral scheme, the coefficients of a nonzero rational section $s$ of a line bundle $L$ define a Cartier divisor $D=\operatorname{div}_C(s)$, with a canonical isomorphism $\mathcal O_C(D)\cong L$ taking the canonical rational section $1_D$ to $s$. Conversely every Cartier divisor $D$ has this canonical rational section of $\mathcal O_C(D)$, whose Cartier divisor is $D$. [[math:thm-line-bundle-rational-section-cartier-divisor]]

## Proof

1.1 By [F0], the generic local ring is a field and every other local ring is one-dimensional. The base field is perfect by [F1], so smoothness and finite type give regularity and local Noetherianity. Since $C$ is quasi-compact, finitely many Noetherian affine neighbourhoods cover it, so it is Noetherian. The nongeneric local rings are DVRs, then PIDs and UFDs by [F1]; the generic field is a UFD since it has no nonzero nonunits. Thus $C$ is locally factorial. By [F2], Cartier divisors modulo principal divisors identify with Picard classes and with Weil divisors modulo principal divisors. Every proper closed subset is finite by [F0], so the only integral one-dimensional closed subscheme is $C$ itself (an integral closed subscheme is reduced, and $C$ is reduced). Hence [F3] identifies the latter quotient precisely with $\mathrm{CH}^1(C)$. [A1, F0, F1, F2, F3]

2.1 Given $L$, choose a Cartier divisor $D$ with $\mathcal O_C(D)\cong L$ by [F2]. Transport its canonical rational section from [F6] to a section $s$ of $L$; its Cartier divisor is $D$. In a local frame $s=fe$, the local equation of $D$ is $f$, so its Weil coefficient is the same order of $f$ as in [F3]. Thus the composed quotient isomorphism carries $[L]$ to the actual $c_1(L)$, fixing the sign and the map. Independence of section and tensor additivity in [F3] ensure this is the stated homomorphism. Its kernel is the trivial line class $[\mathcal O_C]$. Combining with [F4] gives the asserted equivalences, and [F5] gives $\det L=\Lambda^1L=L$ canonically. [F2, F3, F4, F5, F6, step 1.1] ∎
