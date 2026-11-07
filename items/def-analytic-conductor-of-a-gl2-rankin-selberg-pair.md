---
id: def-analytic-conductor-of-a-gl2-rankin-selberg-pair
kind: definition
title: "Analytic Conductor of a GL2 Rankin–Selberg Pair"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - def-analytic-conductor-of-a-gl2-automorphic-representation
  - def-general-gl2-rankin-selberg-l-function
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
      locator: "§1.1, Theorem 1.2 and its conductor convention; §3.1.8, local analytic conductors."
    - title: "James W. Cogdell, L-functions and Converse Theorems for GL(n), PCMI lecture notes (2003)"
      url: "https://people.math.osu.edu/cogdell.1/pcmi-www.pdf"
      locator: "Lecture 3, §§3.1–3.2; Lecture 4, §4.1, Rankin–Selberg local and global factors."
forward_refs: []
---

## Definition

Let $F$ be a number field and let $\pi_1,\pi_2$ be automorphic representations of $\mathrm{GL}_2(\mathbb A_F)$ with unitary central characters. At each finite place $v$, use the tensor parameter $(r_{12,v},N_{12,v})$ of $\pi_{1,v}\times\pi_{2,v}$ and define $a_v(\pi_1\times\pi_2)=a(r_{12,v},N_{12,v})$, where, for a finite-inertia representation $r$ on $V$ and nilpotent monodromy $N$,
$$a(r,N)=\sum_{j\ge0}\frac{\dim V-\dim V^{G_j}}{[G_0:G_j]}+\dim V^{I_v}-\dim(\ker N)^{I_v}.$$
Here $I_v$ is the local inertia group, while $G_j=G_j(E/F_v)$ are the full finite lower-numbering ramification groups of a finite Galois extension through whose inertia quotient $r|_{I_v}$ factors, as in the GL2 conductor convention. In particular $G_0$ is finite inertia and the index $[G_0:G_j]$ is finite; $V^{G_j}$ uses the induced action on $V$. The independence of this sum from the auxiliary extension is a separate ramification-theoretic proof obligation, alongside the held parameter assignments. Set $C_v(\pi_1\times\pi_2)=q_v^{a_v(\pi_1\times\pi_2)}$, where $q_v$ is the residue-field cardinality. At an archimedean place $v$, write the tensor local factor as $L_v(s,\pi_{1,v}\times\pi_{2,v})=\prod_{j=1}^4\Gamma_v(s+\mu_{v,j})$, with $\Gamma_v=\Gamma_{\mathbb R}$ for $F_v\cong\mathbb R$ and $\Gamma_v=\Gamma_{\mathbb C}$ for $F_v\cong\mathbb C$, and $\deg(v)=[F_v:\mathbb R]$. Set
$$C_v(\pi_1\times\pi_2)=\prod_{j=1}^4(2+|\mu_{v,j}|)^{\deg(v)}.$$
The Rankin–Selberg analytic conductor is
$$C(\pi_1\times\pi_2)=\prod_{v\text{ finite}}q_v^{a_v(\pi_1\times\pi_2)}\prod_{v\mid\infty}\prod_{j=1}^4(2+|\mu_{v,j}|)^{\deg(v)}.$$
Here the tensor local factor uses the same Michel–Venkatesh gamma normalization as the pair L-function definition. At a complex place, replacing $\Gamma_{\mathbb C}(s)=2(2\pi)^{-s}\Gamma(s)$ by $\Gamma_{\mathbb C}^{0}(s)=(2\pi)^{-s}\Gamma(s)$ divides its four-factor product by $2^4$ while keeping the tensor shifts fixed. Consequently the displayed conductor is identical in these two gamma normalizations. This comparison supplies no missing tensor-parameter or ramification-theoretic well-definedness proof.

The finite-place product has only finitely many nonunit factors because the local tensor parameter is unramified at almost every finite place.

## Definition references

[[def-analytic-conductor-of-a-gl2-automorphic-representation|the Artin-conductor and archimedean gamma-factor conventions]]

[[def-general-gl2-rankin-selberg-l-function|the tensor parameter and local Rankin–Selberg factors]]

[[def-standard-and-rankin-selberg-l-functions-on-gln|the local Weil–Deligne parameter conventions]]

[Michel and Venkatesh, *The Subconvexity Problem for GL2*, §1.1 and §3.1.8](https://arxiv.org/pdf/0903.3591v2)

[Cogdell, *L-functions and Converse Theorems for GL(n)*, Lecture 3 and Lecture 4](https://people.math.osu.edu/cogdell.1/pcmi-www.pdf)
