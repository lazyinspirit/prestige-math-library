---
id: ex-valuation-ring-ideals-linearly-ordered
kind: example
title: "Ideals in a valuation ring are linearly ordered"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-valuation-ring-characterisations, ex-nondiscrete-ordered-subgroup-valuation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., Exercise (26.3) and Example (26.12)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "The Stacks Project, Section 10.50: Valuation rings"
      url: "https://stacks.math.columbia.edu/tag/00I8"
pipeline_run: null
---

## Example

Let $V$ be the valuation ring from [[ex-nondiscrete-ordered-subgroup-valuation]],
with value group $\Gamma=\mathbb Z+\mathbb Z\sqrt2$. Then any two ideals of $V$
are comparable. The ideal
$$ I:=\{x\in V:x=0\text{ or }v(x)>1\} $$
is an explicit nonprincipal ideal.

## Facts & Assumptions

**Given:** The valuation ring $V$ and valuation $v$ constructed in [[ex-nondiscrete-ordered-subgroup-valuation]].

[L1] In a valuation ring the ideals are linearly ordered by inclusion
([[thm-valuation-ring-characterisations]]).

[L2] The valuation ring in the incommensurate-value example has value group
$\Gamma=\mathbb Z+\mathbb Z\sqrt2$, and that ordered group has no least positive
element ([[ex-nondiscrete-ordered-subgroup-valuation]]).

## Verification

**Proof technique:** direct.

1.1 The ideal-comparability statement is exactly [L1]. For the displayed set $I$, closure under multiplication by elements of $V$ is immediate because $v(zx)=v(z)+v(x)\ge v(x)>1$ when $v(z)\ge0$. If $x,y\in I$, then $v(x+y)\ge\min\{v(x),v(y)\}>1$, so $x+y\in I$. Thus $I$ is an ideal of $V$. [L1, L2, given, algebra]

2.1 If $I=(a)$ were principal, then $v(a)>1$ and every element of $I$ would have value at least $v(a)$. But [L2] says there is no least element of the set $\{\gamma\in\Gamma:\gamma>1\}$, so one can choose $1<\gamma<v(a)$ and then an element $x\in V$ with $v(x)=\gamma$. Such an $x$ lies in $I$ but not in $(a)$, contradiction. Hence $I$ is nonprincipal. [L2, step 1.1, algebra] ∎
