---
id: ex-simple-root-and-factor-hensel-same-lift
kind: example
title: "Simple-root lifting and factor lifting produce the same root"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-complete-local-rings-are-henselian, cor-factor-hensel-implies-simple-root-hensel, def-henselian-pair-and-henselian-local-ring]
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

For the polynomial
$$f(T)=T^2-T-t \in k\llbracket t\rrbracket[T],$$
the residue class $\overline a=1 \in k$ is a simple root of $\overline f$.
Lifting that root directly or by first lifting the factor $T-1$ produces the
same root.

## Facts & Assumptions

**Given:** The complete local ring $k\llbracket t\rrbracket$ and the polynomial $f(T)=T^2-T-t$.

[L1] Complete local rings are Henselian ([[cor-complete-local-rings-are-henselian]]).

[L2] In a Henselian local ring, every simple residue root lifts uniquely ([[cor-factor-hensel-implies-simple-root-hensel]]).

[L3] A Henselian local ring has the unique coprime factor-lifting property ([[def-henselian-pair-and-henselian-local-ring]]).

## Verification

**Proof technique:** compare the two constructions at the same residue root.

1.1 By [L1], the complete local ring $k\llbracket t\rrbracket$ is Henselian. Modulo $t$, one has $\overline f=T(T-1)$, so $\overline a=1$ is a simple root. By [L2], there is a unique root $a \in k\llbracket t\rrbracket$ with $a \equiv 1 \pmod t$ and $f(a)=0$. The first two correction stages give $$a \equiv 1+t \pmod{t^2}, \qquad a \equiv 1+t-t^2 \pmod{t^3}.$$ [L1, L2, given, algebra]

2.1 The residue factorization $\overline f=T(T-1)$ is monic and coprime, so [L3] gives a factorization $$f=(T-b)h(T)$$ with $b \equiv 1 \pmod t$. Evaluating at $T=b$ gives $f(b)=0$, so $b$ is another lift of the same simple residue root. [L3, step 1.1, given, algebra]

3.1 By uniqueness in [L2], one has $a=b$. Equivalently, the root obtained from the lifted linear factor is exactly the same root obtained from the simple-root lifting procedure. [L2, step 1.1, step 2.1] ∎
