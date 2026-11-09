---
id: thm-author-60d95bfb692a-huber-kelly-representable-input
kind: theorem
title: Huber–Kelly representable cdh sheafification input
status: published
domain: mathematics
external_input: true
deps:
  - def-cdh-topology-interface
  - def-seminormal-scheme-interface
dependency_roles:
  def-cdh-topology-interface: mathematical-premise
  def-seminormal-scheme-interface: mathematical-premise
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: "Differential forms in positive characteristic, II: cdh-descent via
        functorial Riemann–Zariski spaces"
      url: https://msp.org/ant/2018/12-3/ant-v12-n3-p05-p.pdf
      locator: Published 2018 version, Algebra & Number Theory 12(3), 649–692; Theorem
        1.4 and comparisons (2)–(3), pp. 651–652; Section 2A, Definition 2.1 and
        Remark 2.2(1), pp. 653–654; Remark 2.7 and Proposition 2.8 statement,
        pp. 654–655
      statement: For a noetherian Nagata scheme S and separated finite-type S-schemes
        X and Y, the canonical maps identify the cdh sheafification of
        Hom_S(-,Y) at X with Hom_S(X^sn,Y).
      hypotheses: S is noetherian and Nagata; X and Y are separated and of finite type
        over S.
      reading_limits: Read the published PDF-extracted Theorem 1.4 and its displayed
        rh-to-cdh comparisons, Section 2A notation, Definition 2.1, Remark
        2.2(1), Remark 2.7 and the statement of Proposition 2.8. The proof of
        Proposition 6.14 was not read or reconstructed; no independent
        reconstruction of the imported results is claimed. Browser screenshot
        retrieval was unavailable; reading used PDF text.
dependency_level: 8
---

## Statement
Let $S$ be noetherian and Nagata, and let $X,Y$ be separated finite-type $S$-schemes. The canonical map identifies the cdh sheafification of the presheaf $h_Y(Z)=\operatorname{Hom}_S(Z,Y)$, evaluated at $X$, with $\operatorname{Hom}_S(X^{\mathrm{sn}},Y)$, naturally in $X$ and $Y$. Here noetherian means admitting a finite affine cover by spectra of noetherian rings; Nagata means that the normalization of every finite-type $S$-scheme is finite over that scheme. The notation $X^{\mathrm{sn}}\to X$ denotes the seminormalization of the reduction, with its canonical map to $X$.

For this statement, use a suitably small category equivalent to the category of separated finite-type $S$-schemes, with all $S$-morphisms. Its **cdh topology** is the least Grothendieck topology in which Nisnevich covering families and singleton proper completely decomposed morphisms generate covering sieves. A Nisnevich family consists of étale morphisms such that every target point has a lift inducing an isomorphism of residue fields. A morphism is completely decomposed if it has such a lift at every target point, and proper means separated, of finite type and universally closed. On a field base this is the supplied field-site topology.

## Statement references

[[def-seminormal-scheme-interface]]

[[def-cdh-topology-interface]]

## External input
The formula is the cdh case of Huber–Kelly Theorem 1.4: its rh formula (2) and rh-to-cdh comparison (3) give the stated identification. The source includes the spectrum of a perfect field as an example of a noetherian Nagata base. Its general-base site convention is Section 2A and Remark 2.2(1), using the cdp-morphisms of Definition 2.1; the statement above supplies that convention explicitly rather than extending the field-only interface by reference. The source's Proposition 2.8 also places $X^{\mathrm{sn}}$ in this finite-type site under the Nagata hypothesis. These are precise external inputs; their proofs are not reconstructed here. The local finite-subintegral descent lemmas do not by themselves prove this representable-sheaf formula.
