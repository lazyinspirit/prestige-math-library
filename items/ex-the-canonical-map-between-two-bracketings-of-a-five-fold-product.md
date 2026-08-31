---
id: ex-the-canonical-map-between-two-bracketings-of-a-five-fold-product
kind: example
title: "A canonical map between two bracketings of a five-fold product"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-mac-lane-coherence-in-the-canonical-map-form]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Chapter 2.9"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
pipeline_run: null
---

## Example

Take the two parenthesisations
$$u:=((A\otimes(B\otimes C))\otimes(D\otimes E)),\qquad v:=A\otimes(B\otimes(C\otimes(D\otimes E))).$$
A canonical map $u\to v$ is obtained by associators alone.

## Facts & Assumptions

**Given:** Objects $A,B,C,D,E$ of a monoidal category.

[L1] Between any two parenthesisations of one ordered tensor word there is a unique canonical natural isomorphism ([[thm-mac-lane-coherence-in-the-canonical-map-form]]).

## Verification

**Proof technique:** direct.

1.1 Apply the outer associator to obtain $((A\otimes(B\otimes C))\otimes(D\otimes E)) \xrightarrow{\alpha_{A,B\otimes C,D\otimes E}} A\otimes((B\otimes C)\otimes(D\otimes E))$. [given]

2.1 Apply $1_A\otimes\alpha_{B,C,D\otimes E}$ to the result of step 1.1 and get $A\otimes((B\otimes C)\otimes(D\otimes E)) \to A\otimes(B\otimes(C\otimes(D\otimes E)))=v$. [step 1.1]

3.1 The composite of steps 1.1 and 2.1 is therefore a canonical map $u\to v$. Any other chain of associators with the same endpoints is equal to it by [L1]. [L1, step 2.1] ∎
