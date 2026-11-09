---
id: thm-author-30ec96de6e59-seminormalization-input
kind: theorem
title: Seminormalization and the finite-type interface
status: draft
domain: mathematics
external_input: true
deps: []
dependency_roles: {}
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: The Stacks Project, Absolute weak normalization and seminormalization
      url: https://stacks.math.columbia.edu/tag/0EUS
      locator: Lemma 29.48.7 (3)–(4) and its functoriality assertion
      statement: The category of universal homeomorphisms to a scheme inducing
        residue-field isomorphisms has an initial object with seminormal source,
        functorial in the scheme; an object is seminormal exactly when the
        initial arrow to it is an isomorphism.
      hypotheses: The base is an arbitrary scheme; seminormality is the affine-local
        square-cube condition.
      reading_limits: Statement and displayed proof inspected; the source explicitly
        omits the proof of the seminormal parts (3) and (4). No local
        reconstruction is claimed.
    - title: The Stacks Project, Weak normalization
      url: https://stacks.math.columbia.edu/tag/0H3I
      locator: Lemmas 29.56.3 and 29.56.7, and the implication following Definition
        29.56.9
      statement: The relative seminormalization is constructed by intermediate
        subalgebras of the normalization; it equals the absolute
        seminormalization when quasi-compact opens have finitely many
        irreducible components. Normal schemes in that scope are seminormal.
      hypotheses: For the comparison, every quasi-compact open has finitely many
        irreducible components; the relative construction uses a quasi-compact,
        quasi-separated, dominant morphism.
      reading_limits: The stated passages and their displayed proofs were inspected;
        the proof of the residue-field version in Lemma 29.56.3 is omitted in
        the source. The wider normalization theory was not reconstructed.
    - title: The Stacks Project, Normalization
      url: https://stacks.math.columbia.edu/tag/0BXR
      locator: Lemma 33.27.1(1)–(2)
      statement: The normalization of a scheme locally of finite type over a field is
        finite and factors through its reduction.
      hypotheses: The scheme is locally of finite type over a field.
      reading_limits: The statement and displayed proof were inspected; its cited
        prerequisites were not independently reconstructed.
    - title: The Stacks Project, Absolute weak normalization and seminormalization
      url: https://stacks.math.columbia.edu/tag/0H3G
      locator: Lemma 29.48.9
      statement: A scheme is seminormal if and only if every universal homeomorphism
        to it inducing residue-field isomorphisms and having reduced source is
        an isomorphism.
      hypotheses: The target is any scheme.
      reading_limits: Statement and displayed proof inspected; cited prerequisites
        were not independently reconstructed.
dependency_level: 0
---

## Statement
For a scheme $X$, the category of universal homeomorphisms $Y\to X$ inducing isomorphisms on residue fields has an initial object $X^{\mathrm{sn}}\to X$, with seminormal source; its construction is functorial in $X$. A scheme is seminormal precisely when every such morphism with reduced source is an isomorphism. If $X$ is locally of finite type over a field, then $X^{\mathrm{sn}}\to X_{\mathrm{red}}$ is finite, and a normal $X$ is seminormal. Here seminormal means that every point has an affine neighbourhood whose ring has the unique square-cube root property stated in the interface definition.

## External input
The universal construction, its functoriality, the characterization and normality implication are imported from the cited Stacks passages. For finite type over a field, the cited relative construction places the seminormalization algebra inside the finite normalization algebra on affine opens; those rings are noetherian, so the intermediate algebra is finite. The reduction has the same underlying points and residue fields as $X$. This input is not a locally reconstructed proof of the cited results.
