---
id: thm-author-b87d598e83f3-krishna-cycle-input
kind: theorem
title: Krishna's affine zero-cycle divisibility and kernel input
status: draft
domain: mathematics
external_input: true
deps:
  - def-levine-weibel-zero-cycles
  - math:def-axiom-of-choice
  - lem-affine-perfect-k-zero-bridge
dependency_roles:
  def-levine-weibel-zero-cycles: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  lem-affine-perfect-k-zero-bridge: mathematical-premise
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: Amalendu Krishna, Murthy’s conjecture on 0-cycles, arXiv:1511.04221v3 (18
        March 2019)
      url: https://arxiv.org/pdf/1511.04221v3
      locator: Theorems 1.3 and 1.4, printed/PDF p. 2; §2.1, pp. 6–8, quotient (2.1),
        cycle map (2.2), and the following K-theory convention
      statement: For reduced affine algebras of dimension d at least 2 over an
        algebraically closed field, CH^d is uniquely divisible; for d at least 1
        the kernel of its cycle map to K0 has exponent dividing (d−1)!. Section
        2.1 also supplies the quotient cycle map for reduced quasi-projective
        schemes, sending each permitted regular closed point to its
        residue-sheaf class.
      hypotheses: Reduced finite-type affine algebra over an algebraically closed
        field; the displayed dimensional bounds and the source's top-dimensional
        regular-point convention. The map in Section 2.1 assumes a reduced
        quasi-projective scheme of dimension d at least 1 over a perfect field
        and a forbidden closed subset containing X_sing but no d-dimensional
        component. Here use d=3 and Y=X_sing.
      reading_limits: Read the v3 theorem statements on p. 2 and the Section 2.1
        definitions, equations (2.1)–(2.2), and following K-theory convention on
        pp. 6–8 in extracted PDF text and versioned HTML. The deep theorem
        proofs and the recalled Levine–Weibel Proposition 2.1 were not
        reconstructed or validated. PDF screenshots were unavailable.
dependency_level: 11
---

## Statement
Assume the Axiom of Choice and the fixed universe bounds of the affine perfect comparison. Let $k$ be algebraically closed and let $X$ be a reduced, pure-dimensional affine $k$-scheme of finite type and dimension $3$. For the Levine–Weibel zero-cycle group and actual residue-class cycle map $\operatorname{cyc}_X:\operatorname{CH}^{LW}_0(X)\to K_0(X)$ imported from Krishna’s Section 2.1 and transported to perfect $K_0$ by the affine comparison, multiplication by every positive integer is bijective on $\operatorname{CH}^{LW}_0(X)$, and every element of $\ker(\operatorname{cyc}_X)$ is killed by $2$.

## External input
This is the $d=3$ instance of Krishna's Theorems 1.3 and 1.4. Section 2.1 defines the source group using closed smooth points on top-dimensional components and its cycle map by their residue-sheaf classes. For this reduced pure-dimensional affine $X$, its displayed source definition is the presentation of [[def-levine-weibel-zero-cycles]]. Apply [[lem-affine-perfect-k-zero-bridge]] to its commutative coordinate algebra: the isomorphism to the actual perfect $K_0$ sends the source residue Euler class to the same perfect residue-sheaf class, so it preserves the kernel and the stated annihilation bound. Krishna’s own §2.1, equation (2.2), supplies the quotient map for this reduced scope; no extension from the separate normal-only import is inferred. The cited theorems are imported established inputs; no local reconstruction of their proofs is asserted.
