---
id: thm-author-c5bc2838d897-kcoherent-nonconnective-multiplicative-input
kind: theorem
title: External nonconnective lax symmetric monoidal K-theory
status: draft
domain: mathematics
deps:
  - def-stable-spectra-interface
  - math:def-axiom-of-choice
dependency_roles:
  def-stable-spectra-interface: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: literature-derived
  proof: literature-derived
external_input: true
sources:
  references:
    - title: Blumberg–Gepner–Tabuada, A universal characterization of higher algebraic
        K-theory
      url: https://arxiv.org/pdf/1001.2282v4
      locator: §2.2 (Cat_perf domain), §3.1 (tensor universal property); Definition
        9.6 and Theorem 9.8, PDF pp. 58–59
      statement: Nonconnective algebraic K-theory 𝕂 is a spectrum-valued functor on
        small stable infinity-categories, in particular small
        idempotent-complete ones, and is represented on localizing motives by
        Map(U_loc(Sp^ω),U_loc(−)). Cat_perf has the tensor universal property
        for functors exact separately in each variable.
      hypotheses: Small stable infinity-categories and exact functors; we apply only
        to idempotent-complete categories. Smallness is relative to a fixed
        universe. The functor called IK in the paper is nonconnective; it is
        distinct from the connective functor K there.
      reading_limits: Read the domain definitions in §2.2, §3.1 tensor
        construction/universal property, Definition 9.6, Theorem 9.8 and its
        announced reduction, and the beginning of §9.3. The long proof of
        Theorem 9.8, suspension constructions and classical comparison theorems
        are imported, not reconstructed. No claim to have independently
        established localization for schemes or the degree-zero comparison.
    - title: Blumberg–Gepner–Tabuada, Uniqueness of the multiplicative cyclotomic
        trace
      url: https://arxiv.org/pdf/1103.3923v3
      locator: Proposition 5.9 and Corollary 5.10, PDF p. 23; Theorem 1.13, PDF p. 5
      statement: Both connective K and nonconnective IK:Cat_perf→Sp are lax symmetric
        monoidal; hence a coherent E∞ algebra category gives an E∞ ring
        spectrum. The nonconnective functor is Map(U_loc(Sp^ω),U_loc(−)), not
        the connective U_add version.
      hypotheses: Cat_perf consists of small idempotent-complete stable
        infinity-categories and exact functors, with its exact tensor product.
        Lax symmetric monoidal structure supplies coherent external products,
        units, and transport of algebra/module operations.
      reading_limits: Read Proposition 5.9 and its complete displayed proof, Corollary
        5.10, Theorem 1.13, and the explicit U_add/U_loc distinction near
        equation (1.3). The proof states that the nonconnective argument is
        identical; that is the imported nonconnective assertion. Did not
        reconstruct motivic monoidal localization or a point-set K-theory
        machine.
dependency_level: 4
---

## Statement
Assume AC and fixed universes. Let Cat_perf be the infinity-category of small idempotent-complete stable infinity-categories and exact functors. It is symmetric monoidal with tensor characterized by exact functors in each variable. The nonconnective algebraic K-theory functor 𝕂:Cat_perf→Sp exists and is lax symmetric monoidal. It is the functor denoted IK, not connective K, in BGT: 𝕂(A)≃Map($U_{\mathrm{loc}}$(Sp^ω),$U_{\mathrm{loc}}$(A)). In particular it carries coherent commutative algebra categories to E∞ ring spectra, with the corresponding functorial algebra and module operations induced by its lax structure.

## Source contract
**Given:** Small stable idempotent-complete infinity-categories, exact functors, their exact tensor and AC.

**Goal:** Import the precise nonconnective multiplicative functor used for schemes and supported categories.

[F1] BGT, A universal characterization, §2.2, §3.1, Definition 9.6 and Theorem 9.8, supplies the domain, nonconnective invariant and tensor universal property.

[F2] BGT, Uniqueness of the multiplicative cyclotomic trace, Proposition 5.9 and Corollary 5.10 explicitly include nonconnective IK in the lax symmetric monoidal assertion.

## External input
Import [F1] and [F2], with the recorded limits. The target Sp and smash-product notation are those of [[def-stable-spectra-interface]]. This input does not assert that every restriction sequence of schemes is a localization sequence; it does not identify π₀ with a separately defined degree-zero group. Those application/comparison theorems remain separate suppliers.
