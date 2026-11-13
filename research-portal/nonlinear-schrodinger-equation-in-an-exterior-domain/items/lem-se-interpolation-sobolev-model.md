---
id: lem-se-interpolation-sobolev-model
kind: lemma
domain: mathematics
title: An explicit common interpolation model for the fractional Strichartz targets
status: published
deps:
  - math:def-axiom-of-choice
  - math:def-banach-space
  - math:def-bounded-linear-operator
  - math:def-sobolev-space-wkp-and-its-norm
  - math:thm-sobolev-spaces-are-banach-spaces
  - math:def-strongly-measurable-banach-valued-function
  - lem-se-author-ccbb64dfef2c-strip-model-well-defined
  - lem-se-author-ccbb64dfef2c-single-exterior-extension
  - lem-se-author-ccbb64dfef2c-sobolev-quotient-bochner-retraction
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  math:def-banach-space: mathematical-premise
  math:def-bounded-linear-operator: mathematical-premise
  math:def-sobolev-space-wkp-and-its-norm: mathematical-premise
  math:thm-sobolev-spaces-are-banach-spaces: mathematical-premise
  math:def-strongly-measurable-banach-valued-function: mathematical-premise
  lem-se-author-ccbb64dfef2c-strip-model-well-defined: mathematical-premise
  lem-se-author-ccbb64dfef2c-single-exterior-extension: mathematical-premise
  lem-se-author-ccbb64dfef2c-sobolev-quotient-bochner-retraction: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "J. C. Bellido and G. García-Sáez, Bessel Potential Spaces and Complex
        Interpolation: Continuous embeddings, arXiv:2503.04310v6"
      url: https://arxiv.org/pdf/2503.04310v6
      locator: "Compatible couples and sums: PDF pp.4–6; §2.2, PDF pp.9–10 (strip
        definition, Banach property and exact operator bound); Example 2.7(i),
        PDF p.11 (Bochner interpolation); Definitions 3.1, 3.3, 3.6 and Theorem
        3.7, PDF pp.15–17 (whole-space Bessel convention and identity)."
      statement: "For compatible complex Banach couples the strip class F with the
        maximum boundary norm is Banach, evaluation at an interior strip point
        is continuous into the sum, and complex interpolation is exact of
        exponent theta. For 1<q<infinity and 0<s<1, [Lq(Rn),W1q(Rn)]_s is the
        Bessel-potential space {f in S prime: F inverse((1+4 pi squared |xi|
        squared)^(s/2) Ff) in Lq}, with equivalent norms. Example 2.7(i) states
        [Lp0(E0),Lp1(E1)]_theta=Lp(theta)([E0,E1]_theta) for 1<=p0,p1<infinity."
      hypotheses: Complex Banach spaces continuously embedded into a common Hausdorff
        topological vector space; common bounded endpoint operator on their sum;
        0<theta<1. The whole-space Sobolev assertion requires 1<q<infinity.
        Bochner identity uses the same Lebesgue measure space at both endpoints
        and finite 1<=p0,p1<infinity; here use (0,T) and p0=p1=p.
      reading_limits: This adjudication inspected the compatible-couple and common
        operator passage on v6 PDF p.4, the strip definitions and exactness on
        pp.9–10, Example 2.7(i) on p.11, and Definitions 3.1, 3.3, 3.6 and the
        statement of Theorem 3.7 on pp.15–17. Theorem 3.7 and Mihlin proofs were
        not reconstructed; the original interpolation books were not read. No
        exterior extension theorem is imported; the extension is supplied by the
        existing local helpers.
dependency_level: 4
---

## Statement

Assume AC. For $1<q<\infty$, $0<s<1$ and a smooth exterior domain $\Omega$, fix the convention $\mathcal W^{s,q}(\Omega)=[L^q(\Omega),W^{1,q}(\Omega)]_s$ by complex strip interpolation. For a compatible couple $E_0,E_1$ embedded in a common Hausdorff vector space, its sum has norm $\inf_{x=x_0+x_1}(\|x_0\|_{E_0}+\|x_1\|_{E_1})$; the strip functions are bounded and continuous in this sum, norm-holomorphic inside, and have continuous $E_j$ boundary values tending to zero at imaginary infinity. The interpolation norm is the infimum of their maximum boundary supremum norm over functions taking value $x$ at $s$. A single collar-reflection/free-tail extension, bounded at both $L^q$ and $W^{1,q}$ endpoints and right-inverse to restriction, identifies this space with the restriction quotient of whole-space $H^{s,q}$, with equivalent norms. For each $0<T<\infty$ and $1\le p<\infty$, let $L^p(0,T;X)$ denote the Bochner space of strongly measurable almost-everywhere classes with norm $(\int_0^T\|f(t)\|_X^p\,dt)^{1/p}$. Then the corresponding target interpolation is $[L^p(0,T;L^q(\Omega)),L^p(0,T;W^{1,q}(\Omega))]_s=L^p(0,T;\mathcal W^{s,q}(\Omega))$. This is an explicit model chosen for the proposed applications; it is not an assertion that BGT specified this unique model, nor an identification with Slobodeckij spaces for $q\ne2$.

## External input

The abstract strip-space Banach property and exact operator theorem are the independent contract in reference 0, §2.2, PDF pp.9–10. Its whole-space Bessel identity is Definition 3.6 and Theorem 3.7, PDF p.17, using Definitions 3.1 and 3.3 on pp.15–16. The finite-exponent Bochner identity is Example 2.7(i), PDF p.11. These imported inputs have the hypotheses and reading limits in the source record. The exterior extension, its simultaneous endpoint bounds and the restriction quotient application are local arguments in the five named intermediate items.

## Facts & Assumptions

**Given:** The hypotheses of the Statement and the independently cited external contracts.

[F1] Assume the Axiom of Choice [[math:def-axiom-of-choice]]; in particular its countable and dependent instances are available.

[F2] [[math:def-banach-space]] and [[math:def-bounded-linear-operator]] define complex Banach spaces and common bounded linear endpoint operators; [[math:def-sobolev-space-wkp-and-its-norm]] fixes the $L^q,W^{1,q}$ weak-derivative endpoints. Under AC, [[math:thm-sobolev-spaces-are-banach-spaces]] proves their completeness on the open set $\Omega$, using $k=0,1$, exponent $q$ and scalar field $\mathbb C$.

[F3] [[lem-se-author-ccbb64dfef2c-strip-model-well-defined]] verifies the stated sum/strip norms, their Banach well-definedness and exact interpolation of a common endpoint map.

[F4] [[lem-se-author-ccbb64dfef2c-single-exterior-extension]] constructs the one collar/reflection plus tail map, and [[lem-se-author-ccbb64dfef2c-sobolev-quotient-bochner-retraction]] proves the quotient-norm comparison and finite-time Bochner identity for that map.

[F5] The abstract strip-space Banach property and exact operator theorem are the independent contract in reference 0, §2.2, PDF pp.9–10. Its whole-space Bessel identity is Definition 3.6 and Theorem 3.7, PDF p.17, using Definitions 3.1 and 3.3 on pp.15–16. The finite-exponent Bochner identity is Example 2.7(i), PDF p.11. These imported inputs have the hypotheses and reading limits in the source record. The exterior extension, its simultaneous endpoint bounds and the restriction quotient application are local arguments in the five named intermediate items.

[F6] [[math:def-strongly-measurable-banach-valued-function]] defines strong measurability by almost-everywhere norm limits of measurable simple functions, for complex as well as real Banach values. The Bochner norm and null-set class convention in the Statement are those of [[lem-se-author-ccbb64dfef2c-sobolev-quotient-bochner-retraction]].

## Proof

**Given:** The hypotheses and data in the Statement.

**Goal:** Prove the conclusions in the statement under its stated hypotheses.

1.1 By the Sobolev completeness theorem with $k=0,1$, exponent $q$ and scalar field $\mathbb C$, the endpoints $L^q(\Omega)$ and $W^{1,q}(\Omega)$ are complex Banach spaces under AC. Both inject into $L^q(\Omega)$; indeed their sum is $L^q(\Omega)$ and the displayed sum norm is its $L^q$ norm because $\|u\|_q\le\|u\|_{W^{1,q}}$. The strip-model helper therefore makes the stated interpolation convention a definite complete normed space, with precisely the boundary continuity and decay specified in the Statement. All spaces are spaces of almost-everywhere classes, so there is no representative-dependent boundary value of a spatial function in this definition. [F1, F2, F3, given]

2.1 The exterior extension helper supplies one map at both endpoints. The quotient/retraction helper applies the strip theorem to this map and restriction, identifies the whole-space target using the cited Bessel convention, and proves both inequalities comparing the interpolation and restriction-quotient norms. Thus $\mathcal W^{s,q}(\Omega)$ has exactly the asserted quotient realization without importing a bounded-domain extension as an exterior theorem. [F3, F4, F5, step 1.1]

3.1 Let $0<T<\infty$ and $1\le p<\infty$, the finite Bochner range in the Statement. Example2.7(i) and the quotient/retraction helper give $[L^p(0,T;L^q(\Omega)),L^p(0,T;W^{1,q}(\Omega))]_s=L^p(0,T;\mathcal W^{s,q}(\Omega))$. The maps are consistent on sums and on strongly measurable classes as proved there. This supplies exactly the chosen fractional target model; it adds no identification with a different fractional convention and no claim about how BGT named its spaces. [F4, F5, F6, step 2.1] ∎


## Source notes

The prior planned citation’s p.23 Bochner locator has been replaced by the independently inspected Example2.7(i), PDF p.11. Local proof provenance records the extension and retraction argument; the abstract and whole-space inputs remain explicit external premises. No proof or scaffold review is asserted.
