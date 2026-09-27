---
id: thm-brauer-nesbitt-module-determination
kind: theorem
title: "Brauer-Nesbitt determines semisimplifications"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-splitting-p-modular-system-for-a-finite-group, def-brauer-character-of-a-finite-dimensional-kg-module, thm-brauer-character-is-additive-on-short-exact-sequences, thm-irreducible-brauer-characters-form-a-basis-of-p-regular-class-functions]
proof_strategy: iff
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  scraped: []
  references:
    - title: "J. Miquel Martinez, Modular Representation Theory of Finite Groups"
      url: "https://www.uv.es/jomimar8/pdfs/course%20notes.pdf"
    - title: "Tudor Ciurca, Representation Theory"
      url: "https://www.scribd.com/document/951548499/ModRep"
---

## Statement

Fix a finite group $G$, a prime $p$, and a splitting $p$-modular system
$(K,\mathcal O,k)$ for $G$
([[def-splitting-p-modular-system-for-a-finite-group]]). Let $V$ and $W$ be
finite-dimensional $kG$-modules, with Brauer characters defined using this
system ([[def-brauer-character-of-a-finite-dimensional-kg-module]]). Then

$$\varphi_V=\varphi_W$$

if and only if the semisimplifications $V^{\mathrm{ss}}$ and $W^{\mathrm{ss}}$
are isomorphic.

## Facts & Assumptions

**Given:** A finite group $G$, a prime $p$, a fixed splitting $p$-modular
system $(K,\mathcal O,k)$ for $G$, and finite-dimensional $kG$-modules $V$
and $W$.

[L1] Brauer characters are additive on short exact sequences ([[thm-brauer-character-is-additive-on-short-exact-sequences]]).

[L2] The irreducible Brauer characters form a basis of the complex vector space of class functions on $G^0$ ([[thm-irreducible-brauer-characters-form-a-basis-of-p-regular-class-functions]]).

## Proof

**Proof technique:** iff.

1.1 Repeatedly applying [L1] along a composition series of $V$ shows that $\varphi_V$ is the sum of the irreducible Brauer characters of the composition factors of $V$, counted with multiplicity. The same holds for $W$. [L1, given, algebra]

2.1 If $V^{\mathrm{ss}}\cong W^{\mathrm{ss}}$, then $V$ and $W$ have the same irreducible composition factors with the same multiplicities. Step 1.1 then gives $\varphi_V=\varphi_W$. [step 1.1]

2.2 Conversely, suppose $\varphi_V=\varphi_W$. Subtracting the two expansions from step 1.1 gives a linear relation among irreducible Brauer characters. By [L2], those characters are linearly independent, so every coefficient is $0$. Hence the composition multiplicities in $V$ and $W$ agree, and therefore $V^{\mathrm{ss}}\cong W^{\mathrm{ss}}$. [L2, step 1.1, algebra]

3.1 Steps 2.1 and 2.2 prove the equivalence. [step 2.1, step 2.2] ∎
