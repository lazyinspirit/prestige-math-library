---
id: lem-absolute-frobenius-multiplies-etale-multiplicative-cohomology
kind: lemma
title: "Absolute Frobenius multiplies étale multiplicative cohomology by p"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-axiom-of-choice
  - thm-etale-locally-standard-etale
  - lem-site-slice-restriction-locality-and-composition
  - thm-a-grothendieck-abelian-category-has-functorial-injective-embeddings
justified_by: []
proof_strategy: direct
axiom_use: "AC is assumed for the standard-étale and injective-resolution suppliers."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Raymond T. Hoobler, A cohomological interpretation of Brauer groups of rings"
      url: "https://msp.org/pjm/1980/86-1/pjm-v86-n1-p05-s.pdf"
      locator: "p. 90, the Frobenius annihilation of characteristic-primary Brauer classes; the étale-site argument is reconstructed here."
verification: {}
---

## Statement

Assume AC. Let $X$ be a scheme of characteristic $p>0$ and let $F_X:X\to X$ be absolute Frobenius. For every $q\ge0$, its natural pullback on étale multiplicative cohomology is multiplication by $p$:
$$F_X^*=p:H^q_{\mathrm{et}}(X,\mathbb G_m)\longrightarrow H^q_{\mathrm{et}}(X,\mathbb G_m).$$
Consequently $F_X^{e,*}$ kills every class annihilated by $p^e$. No regularity, flatness or finiteness hypothesis on Frobenius is imposed.

## Facts & Assumptions

**Given:** The scheme of characteristic $p$, the absolute Frobenius and the degree in the Statement.

[A1] The Axiom of Choice is assumed. [[def-axiom-of-choice]]

[F1] Étale morphisms have local standard-étale presentations with invertible derivative. [[thm-etale-locally-standard-etale]]

[F2] Slice restriction and locality use the actual small-site cohomology models. [[lem-site-slice-restriction-locality-and-composition]]

[F3] Under AC, a Grothendieck abelian category has functorial injective embeddings. [[thm-a-grothendieck-abelian-category-has-functorial-injective-embeddings]]

## Proof

**Proof technique:** identify Frobenius pullback on the étale site and on its actual unit sheaf.

1.1 For every étale $u:U\to X$, the relative Frobenius $U\to U\times_{X,F_X}X$ is an isomorphism. It is étale as a morphism between étale $X$-schemes. Both the absolute Frobenius on $U$ and the projection $U\times_{X,F_X}X\to U$ are universal homeomorphisms with purely inseparable residue extensions, so the relative map is universally bijective and radicial. An étale radicial surjection is an isomorphism: its geometric fibres have exactly one reduced point, and the standard-étale charts of [F1] give local inverse sections which glue by uniqueness. These relative isomorphisms are natural in $U$ and preserve fibre products and covers. [A1, F1, given, construct, algebra]

2.1 Step 1.1 identifies Frobenius base change on the small étale site with the identity, compatibly with the site structure. Under this identification, the structural map $F_X^{-1}\mathbb G_m\to\mathbb G_m$ sends a unit $a$ to $a^p$, because the absolute Frobenius on every étale object raises functions to their $p$th powers. The induced map is therefore multiplication by $p$ on the abelian sheaf $\mathbb G_m$. [step 1.1, algebra]

3.1 Abelian sheaves on the small étale site form a Grothendieck category, so [A1] and [F3] give actual injective resolutions. The naturality of derived sections [F2] and the exact site equivalence from step 2.1 carry the structural sheaf map to its induced map in every cohomological degree. Thus $F_X^*=p$ as asserted. Iteration gives $F_X^{e,*}=p^e$ and hence kills every $p^e$-torsion class. The empty scheme and $q=0$ are included. [A1, F2, F3, step 2.1, algebra] ∎
