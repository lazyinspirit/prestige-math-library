---
id: def-general-gl2-rankin-selberg-l-function
kind: definition
title: "Rankin–Selberg L-Function for a Pair of GL2 Automorphic Representations"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-adelic-gln-automorphic-representation
  - def-standard-and-rankin-selberg-l-functions-on-gln
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Philippe Michel and Akshay Venkatesh, The Subconvexity Problem for GL2, arXiv:0903.3591v2"
      url: "https://arxiv.org/pdf/0903.3591v2"
      locator: "§1.1, Theorem 1.2; §§4.2 and 4.4, Rankin–Selberg integrals and regularization."
    - title: "James W. Cogdell, L-functions and Converse Theorems for GL(n), PCMI lecture notes (2003)"
      url: "https://people.math.osu.edu/cogdell.1/pcmi-www.pdf"
      locator: "Lecture 2, §2.3; Lecture 3, §§3.1–3.2; Lecture 4, §4.1, Theorem 4.1."
forward_refs: []
---

## Definition

Let $F$ be a number field and let $\pi_1,\pi_2$ be automorphic representations of $\mathrm{GL}_2(\mathbb A_F)$ with unitary central characters, meaning that both central characters have image in $S^1$. For each place $v$, let $(r_{i,v},N_{i,v})$ be the two-dimensional Weil–Deligne parameter of the local component $\pi_{i,v}$. Form the tensor parameter
$$(r_{12,v},N_{12,v})=(r_{1,v}\otimes r_{2,v},\;N_{1,v}\otimes 1+1\otimes N_{2,v}).$$
For a finite place $v$, let $q_v$ be its residue-field cardinality, $I_v$ its inertia subgroup, and $\mathrm{Fr}_v$ the Frobenius element normalized by $|\mathrm{Fr}_v|_v=q_v^{-1}$. Define
$$L_v(s,\pi_{1,v}\times\pi_{2,v})=\det\!\left(1-q_v^{-s}r_{12,v}(\mathrm{Fr}_v)\mid(\ker N_{12,v})^{I_v}\right)^{-1}.$$
At an archimedean place $v$, write the local factor of the tensor parameter as
$$L_v(s,\pi_{1,v}\times\pi_{2,v})=\prod_{j=1}^4\Gamma_v(s+\mu_{v,j}),$$
where $\Gamma_v=\Gamma_{\mathbb R}$ for $F_v\cong\mathbb R$ and $\Gamma_v=\Gamma_{\mathbb C}$ for $F_v\cong\mathbb C$, with $\Gamma_{\mathbb R}(s)=\pi^{-s/2}\Gamma(s/2)$ and $\Gamma_{\mathbb C}(s)=2(2\pi)^{-s}\Gamma(s)$. The finite Rankin–Selberg L-function is
$$L(s,\pi_1\times\pi_2)=\prod_{v\text{ finite}}L_v(s,\pi_{1,v}\times\pi_{2,v})$$
in any right half-plane where this Euler product converges absolutely, and its completed form is
$$\Lambda(s,\pi_1\times\pi_2)=L(s,\pi_1\times\pi_2)\prod_{v\mid\infty}L_v(s,\pi_{1,v}\times\pi_{2,v}).$$
This definition asserts no continuation, functional equation, nonvanishing, or size bound.

The archimedean factors and $\Lambda$ in this item use Michel–Venkatesh's gamma normalization. Put $\Gamma_{\mathbb C}^{0}(s)=(2\pi)^{-s}\Gamma(s)$, as in the standard-factor convention. For the same four tensor shifts at a complex place, replacing each $\Gamma_{\mathbb C}$ by $\Gamma_{\mathbb C}^{0}$ gives a factor $L_v^{0}$ with $L_v=2^4L_v^{0}$. Thus the corresponding completions satisfy $\Lambda=2^{4r_2(F)}\Lambda^{0}$ when the finite and real-place factors are kept fixed, where $r_2(F)$ is the number of complex places. The finite Euler product and all gamma shifts are unchanged by this normalization conversion. This algebraic comparison assumes the same local parameters on both sides; it supplies no parameter-assignment theorem.

For $q_v^{-s}$ use $\exp(-s\log q_v)$ with the real logarithm.

## Definition references

[[def-adelic-gln-automorphic-representation|the global number field, local components, and central characters]]

[[def-standard-and-rankin-selberg-l-functions-on-gln|Weil–Deligne parameters and standard local factors]]

[Michel and Venkatesh, *The Subconvexity Problem for GL2*, §1.1 and §§4.2–4.4](https://arxiv.org/pdf/0903.3591v2)

[Cogdell, *L-functions and Converse Theorems for GL(n)*, Lecture 2 §2.3 and Lectures 3–4](https://people.math.osu.edu/cogdell.1/pcmi-www.pdf)
