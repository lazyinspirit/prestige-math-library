---
id: ex-localising-an-abelian-group-at-a-prime
kind: example
title: "Localising cyclic abelian groups and Q/Z at a prime"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-localisation-at-a-prime-ideal, thm-localisation-of-modules-is-tensor-product, cor-tensor-product-with-a-quotient-ring, thm-localisation-at-a-prime-is-local, lem-zero-in-a-localised-module]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Section 12"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Section 5"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---

## Example

Fix a prime number $p$ and let $R=\mathbb Z$. Then $\mathbb Z_{(p)}$ is the localisation of $\mathbb Z$ at the prime ideal $(p)$. For a natural number $n=p^a m$ with $(m,p)=1$,
$$ (\mathbb Z/n\mathbb Z)_{(p)} \cong \begin{cases} 0,& a=0,\\ \mathbb Z/p^a\mathbb Z,& a>0. \end{cases} $$
Moreover $(\mathbb Q/\mathbb Z)_{(p)}$ is exactly the $p$-primary torsion subgroup of $\mathbb Q/\mathbb Z$.

## Facts & Assumptions

**Given:** A prime number $p$, the local ring $\mathbb Z_{(p)}$, and a natural number $n=p^a m$ with $(m,p)=1$.

[L1] Localisation of a module is tensoring with the localised ring ([[thm-localisation-of-modules-is-tensor-product]]).

[L2] For a commutative ring $A$, $A \otimes_{\mathbb Z} \mathbb Z/n\mathbb Z \cong A/nA$ ([[cor-tensor-product-with-a-quotient-ring]]).

[L3] In $\mathbb Z_{(p)}$, the units are exactly the fractions whose numerator is not divisible by $p$ ([[thm-localisation-at-a-prime-is-local]]).

[L4] A localised fraction is zero exactly when one denominator kills its numerator ([[lem-zero-in-a-localised-module]]).

## Verification

**Proof technique:** direct.

1.1 By [L1] and [L2], $(\mathbb Z/n\mathbb Z)_{(p)} \cong \mathbb Z_{(p)} \otimes_{\mathbb Z} \mathbb Z/n\mathbb Z \cong \mathbb Z_{(p)}/n\mathbb Z_{(p)}$. [L1, L2]

2.1 If $a=0$, then $p \nmid n$, so $n/1$ is a unit in $\mathbb Z_{(p)}$ by [L3]. Hence $n\mathbb Z_{(p)}=\mathbb Z_{(p)}$, and step 1.1 gives $(\mathbb Z/n\mathbb Z)_{(p)}=0$. [step 1.1, L3]

2.2 If $a>0$, write $n=p^a m$ with $(m,p)=1$. Then $m/1$ is a unit in $\mathbb Z_{(p)}$, so $n\mathbb Z_{(p)}=p^a\mathbb Z_{(p)}$. Reduction modulo $p^a$ identifies $\mathbb Z_{(p)}/p^a\mathbb Z_{(p)}$ with $\mathbb Z/p^a\mathbb Z$, so step 1.1 gives $(\mathbb Z/n\mathbb Z)_{(p)}\cong\mathbb Z/p^a\mathbb Z$. [step 1.1, L3, algebra]

3.1 For a class $q+\mathbb Z \in \mathbb Q/\mathbb Z$, if some integer prime to $p$ kills it then [L4] makes it zero in the localisation; this happens exactly for the torsion of order prime to $p$. On the other hand a class of order $p^r$ cannot be killed by any denominator outside $(p)$, so it survives. Therefore $(\mathbb Q/\mathbb Z)_{(p)}$ is exactly the $p$-primary torsion subgroup. [L4, algebra] ∎
