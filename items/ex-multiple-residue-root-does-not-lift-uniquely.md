---
id: ex-multiple-residue-root-does-not-lift-uniquely
kind: example
title: "A multiple residue root need not lift uniquely"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-factor-hensel-implies-simple-root-hensel]
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
    - title: "The Stacks Project, Section 10.153: Henselian local rings"
      url: "https://stacks.math.columbia.edu/tag/04GE"
pipeline_run: null
---

## Example

Over the $2$-adic integers $\mathbf Z_2$, the polynomial
$$f(T)=T^2-1$$
has the multiple residue root $\overline 1 \in \mathbf F_2$, but that root does
not lift uniquely.

## Facts & Assumptions

**Given:** The polynomial $f(T)=T^2-1$ over $\mathbf Z_2$.

[L1] Simple roots lift uniquely in Henselian local rings; the derivative
hypothesis is therefore the load-bearing condition
([[cor-factor-hensel-implies-simple-root-hensel]]).

## Verification

**Proof technique:** exhibit two distinct lifts of the same multiple residue root.

1.1 Modulo $2$, the polynomial becomes $$\overline f(T)=T^2-1=(T-1)^2,$$ so the residue root $\overline 1$ has multiplicity $2$. Equivalently, $\overline f'(\overline 1)=2\overline 1=0$. [given, algebra]

2.1 In $\mathbf Z_2$, both $1$ and $-1$ satisfy $f(T)=0$, and both reduce to $\overline 1$ modulo $2$. Hence the residue root $\overline 1$ has at least two lifts. [step 1.1, given]

3.1 Therefore the derivative-unit hypothesis in [L1] cannot be dropped: a multiple residue root need not lift uniquely even in a complete local ring. [L1, step 2.1] ∎
