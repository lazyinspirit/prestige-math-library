---
id: ex-nonclosed-support-without-finiteness
kind: example
title: "An infinitely generated module can have specialization-closed support that is not Zariski closed"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-support-is-specialisation-closed, thm-support-of-arbitrary-direct-sums, lem-support-of-a-cyclic-module-is-its-vanishing-set, ex-zariski-spectrum-of-the-integers, lem-distinguished-open-refinement-at-a-point]
justified_by: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Exercise (13.34)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
verification:
  audited: 2026-09-05
  precheck: pass
---

## Example

Let $$ M=\bigoplus_{p\text{ prime}}\mathbb Z/p\mathbb Z $$ as a $\mathbb Z$-module. Then $$ \operatorname{Supp}_{\mathbb Z}(M)=\{(p):p\text{ prime}\}, $$ which is closed under specialisation but is not Zariski-closed in $\operatorname{Spec}(\mathbb Z)$.

## Facts & Assumptions

**Given:** The $\mathbb Z$-module $M=\bigoplus_{p\text{ prime}}\mathbb Z/p\mathbb Z$.

[L1] Support is closed under specialisation ([[lem-support-is-specialisation-closed]]).

[L2] Support of a direct sum is the union of the supports of the summands ([[thm-support-of-arbitrary-direct-sums]]).

[L3] The support of the cyclic module $\mathbb Z/p\mathbb Z$ is $V((p))=\{(p)\}$ ([[lem-support-of-a-cyclic-module-is-its-vanishing-set]]).

[L4] In $\operatorname{Spec}(\mathbb Z)$, the points are $(0)$ and the closed points $(p)$, and for nonzero $n$ one has $D(n)=\{(0)\}\cup\{(q):q\nmid n\}$ ([[ex-zariski-spectrum-of-the-integers]]).

[L5] Every open neighbourhood of a point contains a distinguished-open neighbourhood of that point ([[lem-distinguished-open-refinement-at-a-point]]).

## Verification

**Proof technique:** direct.

1.1 By [L2] and [L3], $\operatorname{Supp}_{\mathbb Z}(M)=\bigcup_{p\text{ prime}}\operatorname{Supp}_{\mathbb Z}(\mathbb Z/p\mathbb Z)=\bigcup_{p\text{ prime}}\{(p)\}=\{(p):p\text{ prime}\}$. [L2, L3]

2.1 This support is closed under specialisation by [L1]: each point $(p)$ is already closed, so the only specialisation of $(p)$ is itself. [L1, step 1.1]

2.2 The set from step 1.1 is not Zariski-closed. Indeed, if it were closed, its complement would be an open neighborhood of the missing point $(0)$. By [L5], that neighbourhood contains some distinguished open $D(n)$ with $(0)\in D(n)$. Since $(0)\in D(n)$, the integer $n$ is nonzero by [L4]. Now [L4] says that $D(n)$ also contains every closed point $(q)$ with $q\nmid n$. Choosing such a prime $q$, we get $(q)\in D(n)$ and $(q)$ lies in the support from step 1.1, contradicting disjointness. [L4, L5, step 1.1, choose]

3.1 Therefore $M$ has specialization-closed support that is not Zariski-closed. [step 2.1, step 2.2] ∎
