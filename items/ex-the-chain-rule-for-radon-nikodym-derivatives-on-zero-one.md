---
id: ex-the-chain-rule-for-radon-nikodym-derivatives-on-zero-one
kind: example
title: "The chain rule for Radon-Nikodym derivatives on $[0,1]$"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-radon-nikodym-derivative,
       cor-integral-over-a-null-set-vanishes,
       thm-chain-rule-for-radon-nikodym-derivatives]
proof_strategy: direct
verification:
  precheck: pass
---

## Example

Let $\mu:=2\lambda$ on $[0,1]$, and let
$$\nu(E):=\int_E 2x\,\chi_{[0,1]}(x)\,d\lambda(x).$$
Then
$$\frac{d\mu}{d\lambda}=2,\qquad \frac{d\nu}{d\mu}=x\,\chi_{[0,1]}(x),\qquad \frac{d\nu}{d\lambda}=2x\,\chi_{[0,1]}(x),$$
so
$$\frac{d\nu}{d\lambda}=\frac{d\nu}{d\mu}\frac{d\mu}{d\lambda}\qquad\lambda\text{-almost everywhere.}$$

## Facts & Assumptions

**Given:** The measures $\mu=2\lambda$ and $\nu(E)=\int_E2x\,\chi_{[0,1]}(x)\,d\lambda(x)$.

[L1] For an absolutely continuous signed measure and a sigma-finite positive
base satisfying a common finite exhaustion, a Radon--Nikodym derivative is any
representative whose measurable-set integrals recover the measure
([[def-radon-nikodym-derivative]]).

[L3] Integrals over null sets vanish
([[cor-integral-over-a-null-set-vanishes]]).

[L2] Under the sigma-finiteness, common finite-exhaustion, and
$\nu\ll\mu\ll\lambda$ hypotheses, Radon--Nikodym derivatives satisfy the chain
rule ([[thm-chain-rule-for-radon-nikodym-derivatives]]).

## Verification

**Proof technique:** direct.

1.1 On the measurable space $[0,1]$, the measures $\lambda$, $\mu$, and $\nu$ are finite, their one-set exhaustion is common, and [L3] gives $\nu\ll\mu\ll\lambda$. For every measurable set $E$, one has $\mu(E)=\int_E2\,d\lambda$ and $\nu(E)=\int_E2x\,\chi_{[0,1]}(x)\,d\lambda(x)$. Therefore [L1] lets us take $d\mu/d\lambda=2$ and $d\nu/d\lambda=2x\,\chi_{[0,1]}$. [L1, L3, given]

2.1 The function $x\,\chi_{[0,1]}$ satisfies $\int_E x\,d\mu=\int_E2x\,d\lambda=\nu(E)$, so it represents $d\nu/d\mu$. On the measurable space $[0,1]$, all three measures are finite, the one-set exhaustion $X_1=[0,1]$ is common, and $\nu\ll\mu\ll\lambda$. Applying [L2] now yields $$\frac{d\nu}{d\lambda}=\frac{d\nu}{d\mu}\frac{d\mu}{d\lambda}=x\cdot2=2x\qquad\lambda\text{-almost everywhere on }[0,1].$$ [step 1.1, L2, algebra] ∎
