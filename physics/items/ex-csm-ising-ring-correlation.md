---
id: ex-csm-ising-ring-correlation
kind: example
title: "Exact finite-ring correlations and limiting correlation length at a chosen coupling"
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 5
deps:
  - pthm-csm-ising-ring-correlation
dependency_roles:
  pthm-csm-ising-ring-correlation: physical-result
physical_scope: "Zero-field finite periodic nearest-neighbor Ising ring at the exact parameter choice beta J=(log 2)/2; no observed magnetic data."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Statistical Physics, §5.3.1, the one-dimensional Ising chain"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
verification:
  precheck: pass
---

## Example

For any finite $N\ge2$ at zero field, choose coupling $J>0$ in joules and inverse temperature $\beta=(\log2)/(2J)$ in J$^{-1}$. Then $t=\tanh(\beta J)=1/3$ and the exact ring correlation at separation $1\le r<N$ is
$$\mathbb E_N[s_i s_{i+r}]=\frac{3^{-r}+3^{-(N-r)}}{1+3^{-N}}.$$
At fixed $r$, the limit is $3^{-r}=e^{-r\log3}$, so the correlation length is $1/\log3$ lattice spacings.

## Facts & Assumptions

**Given:** The finite zero-field ring theorem [[pthm-csm-ising-ring-correlation]] with $J>0$, $\beta>0$, and its indexed-bond convention.

[F1] [[pthm-csm-ising-ring-correlation]]: with $t=\tanh(\beta J)$, $C_N(r)=(t^r+t^{N-r})/(1+t^N)$ and, for $0<t<1$, $\xi=-1/\log t$.

[A1] Set $\beta J=(\log2)/2$ in the finite model.

## Verification
1.1 Since $\tanh(x)=(e^{2x}-1)/(e^{2x}+1)$, the choice [A1] gives $t=(2-1)/(2+1)=1/3$. [A1, algebra]



2.1 Substituting $t=1/3$ in [F1] gives the displayed finite-$N$ correlation. Its fixed-$r$ limit is $3^{-r}$ by the theorem's error bound, and $3^{-r}=e^{-r\log3}$ gives $\xi=1/\log3$. [F1, step 1.1, algebra] ∎

## Remarks

This is a finite-model calculation. The displayed coupling is a chosen parameter and is not an experimentally fitted value.

