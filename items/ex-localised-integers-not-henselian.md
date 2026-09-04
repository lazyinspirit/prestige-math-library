---
id: ex-localised-integers-not-henselian
kind: example
title: "A localization of the integers at p need not be Henselian"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-henselian-local-simple-root-criterion, thm-localisation-at-a-prime-is-local, cor-residue-field-of-a-localisation-at-a-prime, thm-z-mod-p-is-a-field]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., Chapter 22"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Example

The local ring $\mathbf Z_{(7)}$ is not Henselian.

## Facts & Assumptions

**Given:** The localization $A=\mathbf Z_{(7)}$ and the polynomial
$f(T)=T^2-2 \in A[T]$.

[L1] The localization at the prime $(7)$ is a local ring
([[thm-localisation-at-a-prime-is-local]]).

[L2] Its residue field is $\mathbf F_7$
([[cor-residue-field-of-a-localisation-at-a-prime]], [[thm-z-mod-p-is-a-field]]).

[L3] In a Henselian local ring, every simple residue root lifts
([[cor-henselian-local-simple-root-criterion]]).

## Verification

**Proof technique:** find a simple residue root that has no lift.

1.1 By [L1] and [L2], the ring $A=\mathbf Z_{(7)}$ is local with residue field $\mathbf F_7$. In that field, $$\overline f(3)=3^2-2=7 \equiv 0 \pmod 7, \qquad \overline f'(3)=2\cdot 3=6 \not\equiv 0 \pmod 7,$$ so $3$ is a simple residue root. [L1, L2, given, algebra]

2.1 Suppose $a/b \in \mathbf Z_{(7)}$ with $7 \nmid b$ satisfies $(a/b)^2=2$. Then $a^2=2b^2$ in $\mathbf Z$. The $2$-adic valuation of the left side is even, while the valuation of the right side is odd, impossible. Hence $2$ has no square root in $\mathbf Q$, and therefore no root in $\mathbf Z_{(7)}$. [step 1.1, given, assume-contra, algebra, discharge-contradiction]

3.1 The simple residue root from step 1.1 does not lift, so [L3] shows that $A$ cannot be Henselian. [L3, step 1.1, step 2.1] ∎
