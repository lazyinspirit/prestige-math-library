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
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Yacine Ikhlef, Jesper Lykke Jacobsen, and Hubert Saleur, A Temperley-Lieb quantum chain with two- and three-site interactions, section 2"
      url: "https://arxiv.org/pdf/0901.4685"
---

## Definition

Let $N\geq1$ be an integer. The finite spin-half tensor chain is the complex
inner-product space $\mathcal H_N:=(\mathbb C^2)^{\otimes N}$. On each factor
use the inner product
$$\langle (z_0,z_1),(w_0,w_1)\rangle_{\mathbb C^2}:=z_0\overline{w_0}+z_1\overline{w_1},$$
which is linear in its first argument, and let $|0\rangle=(1,0)$ and
$|1\rangle=(0,1)$. By the finite tensor-product basis theorem, for
$\alpha=(a_1,\ldots,a_N)\in\{0,1\}^N$ the words
$|\alpha\rangle:=|a_1\rangle\otimes\cdots\otimes|a_N\rangle$ form a basis of
$\mathcal H_N$. For $u=\sum_{\alpha\in\{0,1\}^N}c_\alpha|\alpha\rangle$ and
$v=\sum_{\alpha\in\{0,1\}^N}d_\alpha|\alpha\rangle$, define
$$\langle u,v\rangle_{\mathcal H_N}:=\sum_{\alpha\in\{0,1\}^N}c_\alpha\overline{d_\alpha}.$$
This is a positive-definite inner product because
$\langle u,u\rangle=\sum_\alpha|c_\alpha|^2$, and it makes the tensor words
orthonormal. Expanding each factor in $|0\rangle,|1\rangle$ gives its
elementary-tensor product formula
$$\langle v_1\otimes\cdots\otimes v_N,w_1\otimes\cdots\otimes w_N\rangle_{\mathcal H_N}=\prod_{j=1}^N\langle v_j,w_j\rangle_{\mathbb C^2}.$$
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
