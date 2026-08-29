---
id: ex-language-concatenation-is-associative
kind: example
title: "A concrete calculation of $(L_1L_2)L_3=L_1(L_2L_3)$"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [lem-language-concatenation-is-associative, def-language-concatenation-powers-and-kleene-star]
proof_strategy: direct
justified_by: []
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
---

## Example

Let $L_1=\{a\}$, $L_2=\{\varepsilon,b\}$, and $L_3=\{a,bb\}$ over the alphabet
$\{a,b\}$. Then
$$ (L_1L_2)L_3=L_1(L_2L_3)=\{aa,abb,aba,abbb\}. $$

## Facts & Assumptions

**Given:** $L_1=\{a\}$, $L_2=\{\varepsilon,b\}$, and $L_3=\{a,bb\}$.

[L1] Language concatenation is $LK=\{uv:u\in L\text{ and }v\in K\}$ by
[[def-language-concatenation-powers-and-kleene-star]].

[L2] Language concatenation is associative by
[[lem-language-concatenation-is-associative]].

## Verification

**Proof technique:** direct.

1.1 Using [L1], we have $L_1L_2=\{a\varepsilon,ab\}=\{a,ab\}$. Therefore $$ (L_1L_2)L_3=\{aa,abb,aba,abbb\}. $$ [given, L1]

1.2 Again by [L1], $L_2L_3=\{\varepsilon a,\varepsilon bb,ba,bbb\}=\{a,bb,ba,bbb\}$. Therefore $$ L_1(L_2L_3)=\{aa,abb,aba,abbb\}. $$ [given, L1]

2.1 The two explicit calculations in steps 1.1 and 1.2 agree, so this example realizes the identity of [L2] as the four-word set $\{aa,abb,aba,abbb\}$. [L2, step 1.1, step 1.2] ∎
