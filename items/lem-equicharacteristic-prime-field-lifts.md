---
id: lem-equicharacteristic-prime-field-lifts
kind: lemma
title: "The prime field lifts in the equicharacteristic case"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-equicharacteristic-local-ring-and-coefficient-field, thm-prime-subfield-classification]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Melvin Hochster, The structure theory of complete local rings"
      url: "https://sites.lsa.umich.edu/hochster/wp-content/uploads/sites/1337/2026/04/Structure.pdf"
    - title: "The Stacks Project, Section 10.160: The Cohen structure theorem"
      url: "https://stacks.math.columbia.edu/tag/0323"
pipeline_run: null
---

## Statement

Let $(A,\mathfrak m)$ be an equicharacteristic local ring with residue field
$k=A/\mathfrak m$. Then the prime field of $k$ has a canonical copy inside $A$,
and the residue map identifies that copy with the prime field of $k$.

## Facts & Assumptions

**Given:** An equicharacteristic local ring $(A,\mathfrak m)$ with residue field $k$.

[L1] Every field has a prime subfield, isomorphic either to $\mathbf Q$ or to
$\mathbf F_p$ according to its characteristic
([[thm-prime-subfield-classification]]).

[L2] Equicharacteristic means $\operatorname{char}(A)=\operatorname{char}(k)$
([[def-equicharacteristic-local-ring-and-coefficient-field]]).

## Proof

**Proof technique:** compare the two characteristics.

1.1 By [L2], the ring $A$ and its residue field $k$ have the same characteristic. If that characteristic is $0$, then the unique map $\mathbf Z \to A$ kills no nonzero integer, so it extends to an embedding $\mathbf Q \hookrightarrow A$. If the characteristic is $p>0$, then the image of $\mathbf Z \to A$ is a copy of $\mathbf F_p$ inside $A$. [L1, L2, given, algebra]

2.1 Reducing these embedded prime fields modulo $\mathfrak m$ gives the prime subfield of $k$, because $A$ and $k$ have the same characteristic and prime subfields are unique by [L1]. [L1, step 1.1]

3.1 Therefore the prime field of the residue field lifts canonically in the equicharacteristic case. [step 2.1] ∎
