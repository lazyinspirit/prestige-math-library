---
id: def-analytic-conductor-of-a-gl2-automorphic-representation
kind: definition
title: "Analytic Conductor of a GL2 Automorphic Representation"
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
      locator: "§3.1.8, local analytic conductor for d=2; §4.1.4, global conductor convention."
    - title: "Akshay Venkatesh, Sparse Equidistribution Problems, Period Bounds and Subconvexity"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v172-n2-p05-p.pdf"
      locator: "§2.12, analytic conductor of a GL2 automorphic representation."
    - title: "James W. Cogdell, L-functions and Converse Theorems for GL(n), PCMI lecture notes (2003)"
      url: "https://people.math.osu.edu/cogdell.1/pcmi-www.pdf"
      locator: "Lecture 1, §§1.1–1.2; Lecture 3, §3.1."
forward_refs: []
---

## Definition

Let $F$ be a number field, let $\mathbb A_F$ be its adele ring, and let $\pi=\bigotimes'_v\pi_v$ be an automorphic representation of $\mathrm{GL}_2(\mathbb A_F)$ with unitary central character, meaning its central character has image in $S^1$. At a finite place $v$, let $(r_v,N_v)$ be the two-dimensional Weil–Deligne parameter of $\pi_v$ and let $I_v$ be inertia. Choose a finite Galois extension $E/F_v$ through whose inertia quotient the finite inertia image of $r_v$ factors. Write $G_j=G_j(E/F_v)$ for the finite lower-numbering ramification groups of that chosen extension, so $G_0$ is its finite inertia group. The action of $I_v$ on $V$ factors through $G_0$, and $V^{G_j}$ denotes the fixed subspace for that induced action. For $j\ge0$, the groups are
$$G_j(E/F_v)=\{\sigma\in\operatorname{Gal}(E/F_v):\operatorname{ord}_E(\sigma x-x)\ge j+1\text{ for every }x\in\mathcal O_E\}.$$
For a finite-inertia representation $r$ on $V$, define
$$a(r)=\sum_{j\ge0}\frac{\dim V-\dim V^{G_j}}{[G_0:G_j]},\qquad a(r,N)=a(r)+\dim V^{I_v}-\dim(\ker N)^{I_v}.$$
Set $a_v(\pi)=a(r_v,N_v)$ and $C_v(\pi)=q_v^{a_v(\pi)}$, where $q_v$ is the residue-field cardinality. At an archimedean place $v$, write
$$L_v(s,\pi_v)=\prod_{j=1}^2\Gamma_v(s+\mu_{v,j}),$$
where $\Gamma_v=\Gamma_{\mathbb R}$ for $F_v\cong\mathbb R$ and $\Gamma_v=\Gamma_{\mathbb C}$ for $F_v\cong\mathbb C$, with $\Gamma_{\mathbb R}(s)=\pi^{-s/2}\Gamma(s/2)$, $\Gamma_{\mathbb C}(s)=2(2\pi)^{-s}\Gamma(s)$, and $\deg(v)=[F_v:\mathbb R]$. Set
$$C_v(\pi)=\prod_{j=1}^2(2+|\mu_{v,j}|)^{\deg(v)}.$$
The analytic conductor is
$$C(\pi)=\prod_{v\text{ finite}}q_v^{a(r_v,N_v)}\prod_{v\mid\infty}\prod_{j=1}^2(2+|\mu_{v,j}|)^{\deg(v)}.$$
The gamma factors here follow Michel–Venkatesh's normalization. To compare with the standard-factor convention, put $\Gamma_{\mathbb C}^{0}(s)=(2\pi)^{-s}\Gamma(s)$. Then $\Gamma_{\mathbb C}=2\Gamma_{\mathbb C}^{0}$, so at a complex place the displayed two-factor product is $2^2$ times the product formed with $\Gamma_{\mathbb C}^{0}$ and the same shifts. This constant changes the local L-factor normalization but leaves every shift $\mu_{v,j}$ and hence $C(\pi)$ unchanged. The finite local factors use the standard-factor convention without any rescaling. The parameter assignments and their well-definedness remain separate proof obligations.

The ramification sum uses the full finite groups $G_j(E/F_v)$ in its weights, not the sizes of their images under $r$ and not an index in the profinite group $I_v$. Independence of the auxiliary extension $E$ is a separate ramification-theoretic well-definedness assertion; it is not proved by this formula or by an unproved parameter assignment. The finite-place product has only finitely many nonunit factors because the restricted tensor product $\pi=\bigotimes'_v\pi_v$ is unramified at almost every finite place.

## Definition references

[[def-adelic-gln-automorphic-representation|adelic representation and restricted tensor product conventions]]

[[def-standard-and-rankin-selberg-l-functions-on-gln|local Weil–Deligne and archimedean standard-factor conventions]]

[Michel and Venkatesh, *The Subconvexity Problem for GL2*, §3.1.8](https://arxiv.org/pdf/0903.3591v2)

[Venkatesh, *Sparse Equidistribution Problems, Period Bounds and Subconvexity*, §2.12](https://annals.math.princeton.edu/wp-content/uploads/annals-v172-n2-p05-p.pdf)

[Cogdell, *L-functions and Converse Theorems for GL(n)*, Lecture 1, §§1.1–1.2](https://people.math.osu.edu/cogdell.1/pcmi-www.pdf)
