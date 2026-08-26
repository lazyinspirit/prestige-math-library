---
id: ex-residue-of-p-over-q-at-a-simple-zero
kind: example
title: "A residue of p over q at a simple zero is p(a)/q'(a)"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [cor-residue-quotient-simple-zero]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

For

$$p(z)=z+1,\qquad q(z)=z^2-1,$$

the function $p/q$ has a simple pole at $a=1$, and

$$\operatorname{Res}\!\left(\frac{z+1}{z^2-1},1\right)=1.$$

## Facts & Assumptions

**Given:** The quotient $f(z)=(z+1)/(z^2-1)$.

[L1] If $q(a)=0$ and $q'(a)\ne0$, then $\operatorname{Res}(p/q,a)=p(a)/q'(a)$ ([[cor-residue-quotient-simple-zero]]).

## Verification

**Proof technique:** direct.

1.1 At $a=1$ one has $q(1)=0$, $q'(z)=2z$, and therefore $q'(1)=2\ne0$. [given, algebra]

2.1 Applying [L1] gives $$\operatorname{Res}\!\left(\frac{z+1}{z^2-1},1\right)=\frac{p(1)}{q'(1)}=\frac{2}{2}=1.$$ [step 1.1, L1, algebra] ∎
