---
id: thm-author-3cde9692a7e9-plus-model-input
kind: theorem
title: External Quillen acyclicity and the actual local free-class model
status: published
domain: mathematics
deps:
  - thm-author-d026a7b99ace-universal-chern-space
  - thm-author-da44cda020c0-units-k1-classical-comparisons
  - thm-author-da44cda020c0-units-k1-enhanced-comparisons
  - math:def-axiom-of-choice
dependency_roles:
  thm-author-d026a7b99ace-universal-chern-space: mathematical-premise
  thm-author-da44cda020c0-units-k1-classical-comparisons: mathematical-premise
  thm-author-da44cda020c0-units-k1-enhanced-comparisons: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: literature-derived
  proof: literature-derived
external_input: true
sources:
  references:
    - title: Charles Weibel, The K-book, Chapter IV
      url: https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.IV.pdf
      locator: Definition1.1.1/Functoriality1.1.2 p3; Definitions1.4/1.4.1,
        Theorem1.5, Lemma1.6 pp4–5; Constructions1.9(ii) p6; §4 group-completion
        and plus comparisons4.9/4.11.1 pp38–45; Theorem IV.7.1, printed p61 (PDF
        page61), for group-completion/Q; Corollary IV.7.2, printed p62 (PDF
        page62), for the resulting plus/Q comparison
      hypotheses: The plus construction is on connected CW spaces/componentwise; for
        the local free-module K-space use local rings, whose finite projectives
        are free and K0=Z. The actual sheaf/model comparison is that of the
        completed universal-Chern and connective/nonconnective suppliers.
        Theorem IV.7.1 requires a split exact category. Finite projective
        modules satisfy this hypothesis because a surjection onto a projective
        module splits; over the local ring these modules are finite free.
      statement: The canonical plus map is acyclic and hence an integral homology
        isomorphism; Bousfield–Kan integral completion is a functorial model for
        BGL⁺. Actual K-space addition is induced by direct sum/block sum through
        the explicit group-completion/Q comparison. This yields the stated
        acyclic free-class test on local stalks, not all global affine K-spaces.
      reading_limits: The inherited source-authoring record reports reading pp3–6
        completely, including Theorem1.5 statement and Lemma1.6 proof, and the
        stated §4 actual comparisons in earlier K1 source authoring. This
        adjudication independently read the author-hosted Chapter IV PDF text
        accessed 2026-11-10, §7 opening through Theorem7.1 and its following
        explanation on printed p61, and Corollary7.2 on printed p62. Theorem7.1
        and Corollary7.2 are imported as established inputs; the full proof of
        Theorem7.1 and its prerequisites were not reconstructed or checked here.
        The split-exact hypothesis was checked in the present finite-projective
        application. Plus-existence obstruction theory is imported, not
        reconstructed. No universal all-affine K0=Z claim is made.
dependency_level: 18
---

## Statement
Assume the Axiom of Choice and the fixed compatible universe and site-size bounds of the supplied constructions.

At a Nisnevich local ring $R$, the actual free-module map into the sheaf K-space model is
$$\mathbb Z\times BGL(R)\longrightarrow\mathbb Z\times BGL(R)^+\simeq\Omega^\infty K_{\rm Perf}(R),$$
with $K_0(R)=\mathbb Z$ and the first arrow integral-homology acyclic on each component. It is the canonical plus/completion arrow used by the completed universal Chern construction. The categorical comparison with perfect K-theory is natural and matches free object/core maps. Block sum corresponds to the direct-sum K-space operation. On arbitrary affine rings with nonfree projectives the displayed rank component model is not asserted for all $K_0$; it is used only locally in the sheaf sense.

## External input
Import the exact plus acyclicity and explicit free-module comparison, retaining the completed enhancement/model inputs. The passage from this local comparison to a global identity is the separately authored normalized-chain adjunction argument; it is not justified by affine group agreement.

## Facts & Assumptions

**Given:** The stated scheme and model hypotheses, Choice and the fixed universe and site-size bounds.

[A1] Assume the Axiom of Choice as formulated in [[math:def-axiom-of-choice]] and the stated universe and site-size bounds. They are inherited from the completed universal Chern construction and enhanced perfect K-space comparison in the dependency list, including small presentations and local descent. The external local plus comparison is applied under those same assumptions.
