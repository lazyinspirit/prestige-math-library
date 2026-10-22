---
id: def-nrqmx-spin-half-tensor-chain
kind: definition
domain: mathematics
library: mathematics
title: "Finite spin-half tensor chains"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 0
deps:
  - def-inner-product-space
  - thm-tensor-product-basis-from-bases
  - prop-nrqm-orbital-and-spin-finite-spin-matrices
dependency_roles:
  def-inner-product-space: mathematical-premise
  thm-tensor-product-basis-from-bases: mathematical-premise
  prop-nrqm-orbital-and-spin-finite-spin-matrices: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Yacine Ikhlef, Jesper Lykke Jacobsen, and Hubert Saleur, A Temperley-Lieb quantum chain with two- and three-site interactions, section 2"
      url: "https://arxiv.org/pdf/0901.4685"
---

## Definition

Let $N\geq1$ be an integer. The finite spin-half tensor chain is the complex
inner-product space
$$\mathcal H_N:=(\mathbb C^2)^{\otimes N}$$
with the standard tensor-product inner product, linear in its first argument.
Fix the standard orthonormal basis $|0\rangle,|1\rangle$ of $\mathbb C^2$.
Let $\sigma^x,\sigma^y,\sigma^z$ be the Pauli matrices of the finite-spin
matrix supplier, and for $1\leq k\leq N$ define
$$\sigma_k^a:=I^{\otimes(k-1)}\otimes\sigma^a\otimes I^{\otimes(N-k)},\qquad J_k^a:=\tfrac12\sigma_k^a\quad(a\in\{x,y,z\}).$$
For $1\leq i<N$, define the adjacent swap $s_i$ on elementary tensors by
$$s_i(v_1\otimes\cdots\otimes v_N):=v_1\otimes\cdots\otimes v_{i+1}\otimes v_i\otimes\cdots\otimes v_N.$$
Write
$$|\omega\rangle:=\tfrac1{\sqrt2}(|0\rangle\otimes|1\rangle-|1\rangle\otimes|0\rangle),\qquad P_i:=I^{\otimes(i-1)}\otimes P_\omega\otimes I^{\otimes(N-i-1)},$$
where $P_\omega v:=\langle v,\omega\rangle\,\omega$ on the adjacent two
factors. Also put $e_i:=I_{\mathcal H_N}-s_i$ for $1\leq i<N$. If $N=1$,
these bond-indexed families are empty.

This is a mathematical definition of finite-dimensional tensor spaces and
operators; it makes no physical claim about a material, a particle species, or
an adopted statistics sector.

## Definition references

[[def-inner-product-space]]

[[thm-tensor-product-basis-from-bases]]

[[prop-nrqm-orbital-and-spin-finite-spin-matrices]]

## Remarks

The convention $J_k^a=\sigma_k^a/2$ is dimensionless. If a later model
interprets angular momentum in SI units, it uses $S_k^a=\hbar J_k^a$ with
$\hbar$ in joule-seconds; that physical interpretation is not part of this
mathematical definition.
