---
id: rem-hh-affine-hecke-general-bernstein-pbw-awaits-local-proof
kind: remark
title: "The general Bernstein PBW theorem remains a local proof obligation"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps: [def-hh-affine-hecke-algebra-from-root-datum, def-hh-affine-hecke-bernstein-presentation, lem-hh-affine-hecke-bernstein-quotients-are-well-defined, lem-hh-affine-hecke-im-basis]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Maarten Solleveld, Affine Hecke Algebras and Their Representations"
      url: "https://arxiv.org/pdf/2009.03007"
      locator: "§1.3, Definition 1.6 and equation (1.16), PDF pp. 9–10; §1.4, Theorems 1.8 and 1.10, PDF pp. 10–12. The survey refers the associativity and basis proofs to Lusztig."
    - title: "Dan Ciubotaru, Tutorial on Affine Hecke Algebras"
      url: "https://imsarchives.nus.edu.sg/oldwww/Programs/016theory/files/dan.pdf"
      locator: "§3, Theorem 3.1, PDF p. 4. The Bernstein–Lusztig basis theorem is stated with its proof referred to the cited source."
---

## Remark

The cited treatments state that for an affine Hecke algebra from a reduced based root datum, the Bernstein generators give both ordered bases $\{\theta_yN_w:y\in Y,w\in W_0\}$ and $\{N_w\theta_y:y\in Y,w\in W_0\}$ and present the algebra by the finite Hecke, lattice, and cross-relations. Their full theorem also gives the equivalence with the Iwahori–Matsumoto algebra. Solleveld uses the dual convention with group algebra $\mathbb C[X]$ and special-root condition $\alpha^\vee\in2Y$; this page uses $\mathbb C[Y]$ and the dual condition $\alpha\in2X$.

This item is a source report, not a logical supplier. The local batch proves that the displayed cross-relation quotients are elements of $\mathbb C[Y]$ and proves the Iwahori–Matsumoto basis, but it does not yet prove the Bernstein elements multiply as a lattice group, that the cross-relations agree with the Iwahori–Matsumoto generators, or that the two Bernstein families are bases. The source theorem cites Lusztig for those steps; the citation does not supply the local proof. Keep Bernstein PBW, the full presentation isomorphism, and consumers using them blocked until those arguments are supplied.
