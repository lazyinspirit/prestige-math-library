---
id: lem-author-50b5133c29cc-klocal-enhanced-localization
kind: lemma
title: The actual enhanced restriction sequence and its K fiber
status: published
domain: mathematics
deps:
  - math:def-axiom-of-choice
  - lem-author-50b5133c29cc-klocal-kernel
  - lem-author-50b5133c29cc-klocal-quotient-full-faithfulness
  - lem-author-50b5133c29cc-klocal-retract-density
  - thm-author-50b5133c29cc-klocal-categorical-localizing-input
  - def-nonconnective-k-spectrum-interface
  - lem-author-c5bc2838d897-kcoherent-perfect-essential-smallness
  - lem-fiber-sequence-homotopy-exactness
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  lem-author-50b5133c29cc-klocal-kernel: mathematical-premise
  lem-author-50b5133c29cc-klocal-quotient-full-faithfulness: mathematical-premise
  lem-author-50b5133c29cc-klocal-retract-density: mathematical-premise
  thm-author-50b5133c29cc-klocal-categorical-localizing-input: mathematical-premise
  def-nonconnective-k-spectrum-interface: mathematical-premise
  lem-author-c5bc2838d897-kcoherent-perfect-essential-smallness: mathematical-premise
  lem-fiber-sequence-homotopy-exactness: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 15
---

## Statement
Assume the Axiom of Choice and fix the suitable universes of the supplied derived and K-theory constructions. For qcqs $X$, quasi-compact open $U$ and closed complement $T$, the actual sequence of essentially small stable categories
$$\mathrm{Perf}_T(X)\longrightarrow\mathrm{Perf}(X)\xrightarrow{j^*}\mathrm{Perf}(U)$$
is exact: the induced enhanced Verdier quotient becomes equivalent to $\mathrm{Perf}(U)$ after idempotent completion. Applying the supplied nonconnective functor gives a natural fiber sequence $K_T(X)\to K(X)\to K(U)$, in all integer homotopy degrees.

## Facts & Assumptions
**Given:** The stated schemes and actual enhanced inclusion and restriction, with their zero composite. Assume the Axiom of Choice and use the universes fixed in the Statement.

**Goal:** Apply the precise categorical localization criterion, then the chosen nonconnective functor.

[A1] Choice is inherited when invoking the actual enhanced sequence in [F1], the quotient comparison in [F2], and the specified nonconnective K-theory interface in [F3]. [[math:def-axiom-of-choice]]

[F1] [[lem-author-50b5133c29cc-klocal-kernel]] supplies the actual exact functors, full inclusion and nullhomotopy. [[lem-author-c5bc2838d897-kcoherent-perfect-essential-smallness]] supplies small equivalent models and idempotent completeness.

[F2] [[lem-author-50b5133c29cc-klocal-quotient-full-faithfulness]] and [[lem-author-50b5133c29cc-klocal-retract-density]] establish the induced triangulated quotient equivalence after completion.

[F3] [[thm-author-50b5133c29cc-klocal-categorical-localizing-input]] imports BGT's enhanced criterion and the localizing property of the same $\mathbb K$ used in [[def-nonconnective-k-spectrum-interface]].

[F4] [[lem-fiber-sequence-homotopy-exactness]] supplies the natural long exact homotopy sequence of a spectral fiber sequence in every integer degree, including its connecting homomorphisms.

## Proof
1.1 Use equivalent small models, or the equivalent essentially small domain fixed by the supplied K interface. Apply BGT Proposition 5.15 with $\kappa=\omega$ to the actual sequence in [F1]. All categories are stable and therefore admit finite colimits; all functors are exact and preserve them. The composite is zero, the first arrow is fully faithful, and the triangulated quotient is an equivalence after idempotent completion by [F2]. Thus BGT yields the enhanced exact sequence and the claimed completion equivalence for its actual quotient functor. The use of homotopy categories is legitimate because an actual exact restriction functor was specified before applying the criterion. [A1, F1, F2, F3]

2.1 By [F3], applying $\mathbb K$ yields a cofiber sequence, hence a fiber sequence in spectra. Its terms and maps are exactly $K_T(X)$, $K(X)$ and $K(U)$ by their supplied definitions. The construction is natural for restriction diagrams preserving the indicated supports, because quotient, $U_{\mathrm{loc}}$, and its mapping-spectrum description are functorial on the actual diagrams. Apply [F4] to this fiber sequence to obtain its natural long exact sequence of homotopy groups. No connective truncation is performed, so this exact sequence retains all integer groups. [F1, F3, F4, step 1.1] ∎
