---
id: cor-a-unique-quadratic-subfield-of-the-p-th-cyclotomic-field
kind: corollary
title: "For an odd prime $p$, $\\mathbb Q(\\zeta_p)$ has exactly one intermediate field of degree two over $\\mathbb Q$"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: direct-corollary
deps: [cor-the-galois-group-of-a-rational-cyclotomic-field, lem-subgroup-lattice-of-a-finite-cyclic-group, thm-fundamental-theorem-of-finite-galois-theory, thm-the-cyclotomic-galois-group-embeds-in-the-unit-group-modulo-n, cor-finite-subgroups-of-units-in-a-domain-are-cyclic, thm-z-mod-p-is-a-field, cor-totient-at-one-and-at-a-prime, def-unit-group-modulo-n-and-euler-totient, def-extension-degree-and-finite-extension, def-cyclotomic-extension, def-roots-of-unity-in-a-field, thm-lagrange, def-field, def-prime, def-divides-in-z]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "K. Conrad, Cyclotomic Extensions (expository blurb), Section 4"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/cyclotomic.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Chapter 5, cyclotomic extensions"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
pipeline_run: null
---

## Statement

Let $p$ be an odd prime ([[def-prime]]) and let $\zeta$ be a primitive $p$-th
root of unity ([[def-roots-of-unity-in-a-field]]) in $\mathbb Q(\mu_p)$
([[def-cyclotomic-extension]]). Then there is **exactly one** intermediate field
$F$ with

$$\mathbb Q\subseteq F\subseteq\mathbb Q(\zeta),\qquad [F:\mathbb Q]=2$$

([[def-extension-degree-and-finite-extension]]).

**Intermediate, not proper.** At $p=3$ the Galois group has order two, the unique
subgroup of index two is the trivial one, and the field it names is
$\mathbb Q(\zeta_3)$ itself. Reading the statement as "proper subfield" would
make it false at the smallest case in scope.

## Facts & Assumptions

**Given:** An odd prime $p$ and a primitive $p$-th root of unity $\zeta$ in the cyclotomic extension $\mathbb Q(\mu_p)=\mathbb Q(\zeta)$; write $G:=\operatorname{Gal}(\mathbb Q(\mu_p)/\mathbb Q)$.

[L1] $\mathbb Q(\mu_p)/\mathbb Q$ is finite Galois ([[thm-the-cyclotomic-galois-group-embeds-in-the-unit-group-modulo-n]]) and the embedding $G\to(\mathbb Z/p)^{\times}$ is an isomorphism ([[cor-the-galois-group-of-a-rational-cyclotomic-field]]).

[L2] Every finite subgroup of the unit group of an integral domain is cyclic ([[cor-finite-subgroups-of-units-in-a-domain-are-cyclic]]); $\mathbb Z/p$ is a field ([[thm-z-mod-p-is-a-field]], [[def-field]]), hence an integral domain, and $(\mathbb Z/p)^{\times}$ is its group of units ([[def-unit-group-modulo-n-and-euler-totient]]).

[L3] $\varphi(p)=p-1$ for a prime $p$ ([[cor-totient-at-one-and-at-a-prime]]), and $\varphi(p)=\bigl|(\mathbb Z/p)^{\times}\bigr|$ ([[def-unit-group-modulo-n-and-euler-totient]]).

[L4] In a cyclic group of finite order $m$ there is exactly one subgroup of each order dividing $m$, and every subgroup has that form ([[lem-subgroup-lattice-of-a-finite-cyclic-group]]).

[L5] For $K/F$ finite Galois with $G=\operatorname{Gal}(K/F)$, the maps $H\mapsto K^{H}$ and $E\mapsto\operatorname{Gal}(K/E)$ are mutually inverse bijections between subgroups and intermediate fields, and $[K^{H}:F]=[G:H]$ ([[thm-fundamental-theorem-of-finite-galois-theory]]).

[L6] For a finite group $G$ and $H\le G$, $|G|=[G:H]\,|H|$ ([[thm-lagrange]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] the group $G$ is isomorphic to $(\mathbb Z/p)^{\times}$, which is cyclic by [L2] and has order $p-1$ by [L3]; so $G$ is cyclic of order $p-1$. [L1, L2, L3]

2.1 Since $p$ is odd, $p-1$ is even, so $2$ divides $p-1$ and $(p-1)/2$ is a positive divisor of $p-1$ ([[def-divides-in-z]]). By [L4] there is exactly one subgroup $H\le G$ with $|H|=(p-1)/2$. [step 1.1, L4, given]

2.2 By [L5] and [L6], an intermediate field $F$ of $\mathbb Q(\mu_p)/\mathbb Q$ has $[F:\mathbb Q]=[G:H]=|G|/|H|$ for its corresponding subgroup $H$, so $[F:\mathbb Q]=2$ holds exactly when $|H|=(p-1)/2$. [step 1.1, L5, L6]

3.1 The correspondence of [L5] is a bijection, so the intermediate fields of degree two over $\mathbb Q$ are in bijection with the subgroups of order $(p-1)/2$, of which there is exactly one by step 2.1. Hence there is exactly one such field. [step 2.1, step 2.2, L5] ∎

## Remarks

- **Which field it is, is a different question.** The argument counts intermediate fields; it produces no generator of the one it counts, and no claim is made here about identifying it. Naming that field concretely requires a computation this proof does not carry out.

- **Oddness is needed.** At $p=2$ the field $\mathbb Q(\mu_2)$ is $\mathbb Q$ itself, of degree $\varphi(2)=1$, and it has no intermediate field of degree two at all; the step that fails is step 2.1, where $p-1=1$ is odd.
