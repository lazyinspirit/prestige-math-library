---
id: thm-brauer-nesbitt-module-determination
kind: theorem
title: "Brauer-Nesbitt determines semisimplifications"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-brauer-character-is-additive-on-short-exact-sequences, thm-irreducible-brauer-characters-form-a-basis-of-p-regular-class-functions]
proof_strategy: iff
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "J. Miquel Martinez, Modular Representation Theory of Finite Groups"
      url: "https://www.uv.es/jomimar8/pdfs/course%20notes.pdf"
    - title: "Tudor Ciurca, Representation Theory"
      url: "https://www.scribd.com/document/951548499/ModRep"
---

## Statement

Let $V$ and $W$ be finite-dimensional $kG$-modules over a splitting field of
characteristic $p$. Then

$$\varphi_V=\varphi_W$$

if and only if the semisimplifications $V^{\mathrm{ss}}$ and $W^{\mathrm{ss}}$
are isomorphic.

## Facts & Assumptions

**Given:** Finite-dimensional $kG$-modules $V$ and $W$.

[L1] Brauer characters are additive on short exact sequences
([[thm-brauer-character-is-additive-on-short-exact-sequences]]).

[L2] The irreducible Brauer characters form a basis of the complex vector space
of class functions on $G^0$
([[thm-irreducible-brauer-characters-form-a-basis-of-p-regular-class-functions]]).

## Proof

**Proof technique:** iff.

1.1 Repeatedly applying [L1] along a composition series of $V$ shows that $\varphi_V$ is the sum of the irreducible Brauer characters of the composition factors of $V$, counted with multiplicity. The same holds for $W$. [L1, given, algebra]

2.1 If $V^{\mathrm{ss}}\cong W^{\mathrm{ss}}$, then $V$ and $W$ have the same irreducible composition factors with the same multiplicities. Step 1.1 then gives $\varphi_V=\varphi_W$. [step 1.1]

2.2 Conversely, suppose $\varphi_V=\varphi_W$. Subtracting the two expansions from step 1.1 gives a linear relation among irreducible Brauer characters. By [L2], those characters are linearly independent, so every coefficient is $0$. Hence the composition multiplicities in $V$ and $W$ agree, and therefore $V^{\mathrm{ss}}\cong W^{\mathrm{ss}}$. [L2, step 1.1, algebra]

3.1 Steps 2.1 and 2.2 prove the equivalence. [step 2.1, step 2.2] ∎
