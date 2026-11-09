---
id: thm-author-50b5133c29cc-klocal-extension-by-zero-input
kind: theorem
title: External exact extension by zero for module sheaves
status: draft
domain: mathematics
deps:
  - thm-adjudicate-1ef158934564-ringed-derived-enhancement
  - math:def-axiom-of-choice
dependency_roles:
  thm-adjudicate-1ef158934564-ringed-derived-enhancement: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: literature-derived
  proof: literature-derived
proof_strategy: direct
external_input: true
sources:
  references:
    - title: The Stacks Project, Sheaves on Spaces
      url: https://stacks.math.columbia.edu/tag/009Z
      locator: Definition 6.31.5(5)–(6); Lemma 6.31.8(2)–(4); Lemma 6.31.12
      statement: For an open subspace j:V→X of a ringed space, extension by zero j_!
        on sheaves of modules is left adjoint to restriction, has the original
        stalks on V and zero stalks off V, and j^*j_!=id.
      hypotheses: Any ringed space and open subspace with restricted structure sheaf.
        This concerns module sheaves, not extension by the empty set on sheaves
        of sets.
      reading_limits: Read full module definition, Lemma 6.31.8 and Lemma 6.31.12,
        including the source’s explicit omitted-proof markings. Stalk formula
        and adjunction are imported as stated.
    - title: The Stacks Project, Cohomology of Sheaves
      url: https://stacks.math.columbia.edu/tag/0D5U
      locator: §20.32 opening paragraphs; Lemma 20.32.8
      statement: Restriction and module extension by zero are exact and induce derived
        functors by applying them degreewise to any complex; extension by zero
        is left adjoint to restriction on derived categories.
      hypotheses: Any ringed space and open subspace. No quasi-coherence,
        constructibility, or finiteness hypothesis is required for these sheaf
        functors.
      reading_limits: Read the opening paragraphs and Lemma 20.32.8 with its displayed
        proof. Exactness is explicitly stated there with reference to Modules
        Lemma 17.3.4; that lemma’s underlying proof was not reconstructed. The
        local proof below checks when j_! preserves perfection; it does not
        assume it preserves all quasi-coherent sheaves.
dependency_level: 1
---

## Statement
For an open subspace $v:V\hookrightarrow X$ of a ringed space, module extension by zero $v_!$ is an exact additive functor left adjoint to exact restriction $v^*$. Its stalk is the given module stalk at points of $V$ and zero outside $V$, and $v^*v_!=\mathrm{id}$. Assuming the Axiom of Choice and fixed suitable universes for the derived constructions, applying both functors degreewise to complexes preserves quasi-isomorphisms and mapping cones, so they induce actual exact functors on the sheaf-derived infinity-localizations for these arbitrary ringed spaces. Their ordinary natural unit/counit maps induce natural transformations there.

## Source contract
**Given:** A ringed space and an open subspace with restricted structure sheaf; for enhancements, Choice and suitable fixed universes.

**Goal:** Supply an actual chain-level functor for the supported-category excision argument.

[F1] Stacks Definition 6.31.5 and Lemma 6.31.8 supply module extension by zero, its adjunction, stalks and restriction identity.

[A1] Choice is retained for the Grothendieck-module derived enhancement, not for an additional stalkwise step. [[math:def-axiom-of-choice]]

[F2] Stacks §20.32 opening paragraphs and Lemma 20.32.8 supply exactness and the degreewise derived construction. [[thm-adjudicate-1ef158934564-ringed-derived-enhancement]] specifies the infinity-localization and exactness of induced functors.

## External input
Import the sheaf results [F1]–[F2]. The enhanced conclusion follows by the universal property of the supplied localization: the actual degreewise functors send quasi-isomorphisms to quasi-isomorphisms and commute with zero and cones. No claim is made that extension by zero preserves every quasi-coherent or perfect object; the following local support lemma proves preservation on precisely the subcategories where it is used.
