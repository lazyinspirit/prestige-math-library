---
id: thm-intermediate-fields-of-an-extension-of-finite-fields
kind: theorem
title: "The intermediate fields of $\\mathbb F_{q^n}/\\mathbb F_q$ are the $\\mathbb F_{q^d}$, one for each positive divisor $d$ of $n$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group, lem-subgroup-lattice-of-a-finite-cyclic-group, thm-fundamental-theorem-of-finite-galois-theory, lem-fixed-field-of-the-relative-frobenius, lem-order-of-the-relative-frobenius, def-relative-frobenius-of-a-finite-field-extension, def-fixed-field-of-an-automorphism-group, def-extension-degree-and-finite-extension, thm-lagrange, def-divides-in-z]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "K. Conrad, Finite Fields (expository blurb), Theorem 5.2"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/finitefields.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Proposition 4.23 and Corollary 4.21"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
pipeline_run: null
---

## Statement

Let $\mathbb F_q$ be a finite field of order $q$, let $n\ge1$, and let
$\mathbb F_{q^{n}}$ be a finite field having $\mathbb F_q$ as a subfield with
$[\mathbb F_{q^{n}}:\mathbb F_q]=n$ ([[def-extension-degree-and-finite-extension]]). For a
positive divisor $d$ of $n$ ([[def-divides-in-z]]) put

$$\mathbb F_{q^{d}}:=\{\,x\in\mathbb F_{q^{n}}: x^{q^{d}}=x\,\}.$$

Then the fields $\mathbb F_{q^{d}}$, as $d$ runs over the positive divisors of
$n$, are exactly the intermediate fields of $\mathbb F_{q^{n}}/\mathbb F_q$, with
distinct divisors giving distinct fields;

$$[\mathbb F_{q^{d}}:\mathbb F_q]=d,\qquad \bigl|\mathbb F_{q^{d}}\bigr|=q^{d};$$

and for positive divisors $d,e$ of $n$,

$$\mathbb F_{q^{d}}\subseteq\mathbb F_{q^{e}}\quad\Longleftrightarrow\quad d\mid e.$$

The two ends of the lattice are instances: $d=1$ gives the base field
$\mathbb F_q$ and $d=n$ gives $\mathbb F_{q^{n}}$.

## Facts & Assumptions

**Given:** Finite fields $\mathbb F_q\subseteq E:=\mathbb F_{q^{n}}$ with $|\mathbb F_q|=q$ and $[E:\mathbb F_q]=n\ge1$, and the relative Frobenius $\sigma_q(x)=x^{q}$ ([[def-relative-frobenius-of-a-finite-field-extension]]), whose $i$-th iterate is $x\mapsto x^{q^{i}}$.

[L1] $E/\mathbb F_q$ is Galois and $\operatorname{Gal}(E/\mathbb F_q)=\langle\sigma_q\rangle$ is cyclic of order $n$ ([[thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group]]).

[L2] In a cyclic group $\langle g\rangle$ of finite order $n$, for each positive divisor $c$ of $n$ the subgroup $\langle g^{n/c}\rangle$ has order $c$ and is the unique subgroup of that order, every subgroup has this form for exactly one such $c$, and $\langle g^{n/c}\rangle\subseteq\langle g^{n/c'}\rangle$ if and only if $c\mid c'$ ([[lem-subgroup-lattice-of-a-finite-cyclic-group]]).

[L3] For $K/F$ finite Galois with $G=\operatorname{Gal}(K/F)$, the assignments $H\mapsto K^{H}$ and $F'\mapsto\operatorname{Gal}(K/F')$ are mutually inverse inclusion-reversing bijections between subgroups $H\le G$ and intermediate fields $F\subseteq F'\subseteq K$, and $[K:K^{H}]=|H|$, $[K^{H}:F]=[G:H]$ ([[thm-fundamental-theorem-of-finite-galois-theory]]).

[L4] $\{\,x\in E:x^{q}=x\,\}=\mathbb F_q$ ([[lem-fixed-field-of-the-relative-frobenius]]).

[L5] For an extension of finite fields $L/\mathbb F_q$ of degree $m$ one has $|L|=q^{m}$ ([[lem-order-of-the-relative-frobenius]]).

[L6] $K^{H}=\{\,x\in K:\sigma(x)=x\text{ for every }\sigma\in H\,\}$ ([[def-fixed-field-of-an-automorphism-group]]).

[L7] For a finite group $G$ and $H\le G$ one has $|G|=[G:H]\,|H|$ ([[thm-lagrange]]).

## Proof

**Proof technique:** direct.

1.1 Write $G:=\operatorname{Gal}(E/\mathbb F_q)=\langle\sigma_q\rangle$, cyclic of order $n$ by [L1], and for a positive divisor $d$ of $n$ put $H_d:=\langle\sigma_q^{\,d}\rangle$. [L1]

2.1 By [L2] applied to $G$ with generator $\sigma_q$ and $c=n/d$, the subgroup $H_d=\langle\sigma_q^{\,n/(n/d)}\rangle$ has order $n/d$; every subgroup of $G$ is $H_d$ for exactly one positive divisor $d$ of $n$; and $H_e\subseteq H_d$ if and only if $d\mid e$, since $H_e\subseteq H_d$ reads $\langle\sigma_q^{\,n/(n/e)}\rangle\subseteq\langle\sigma_q^{\,n/(n/d)}\rangle$, which by [L2] says $(n/e)\mid(n/d)$, that is $d\mid e$. [step 1.1, L2, algebra]

2.2 The fixed field of $H_d$ is $E^{H_d}=\{\,x\in E:\sigma_q^{\,d}(x)=x\,\}=\{\,x\in E:x^{q^{d}}=x\,\}=\mathbb F_{q^{d}}$, because an element fixed by $\sigma_q^{\,d}$ is fixed by all its powers and conversely. [step 1.1, L6, given]

3.1 By [L3] the map $H\mapsto E^{H}$ is a bijection from the subgroups of $G$ onto the intermediate fields of $E/\mathbb F_q$; composing with the bijection of step 2.1 between positive divisors of $n$ and subgroups, the fields $\mathbb F_{q^{d}}=E^{H_d}$ are exactly the intermediate fields, distinct divisors giving distinct fields. [step 2.1, step 2.2, L3]

3.2 Degrees: [L3] gives $[\mathbb F_{q^{d}}:\mathbb F_q]=[E^{H_d}:\mathbb F_q]=[G:H_d]$, and [L7] with step 2.1 turns this into $|G|/|H_d|=n/(n/d)=d$; then [L5] gives $\bigl|\mathbb F_{q^{d}}\bigr|=q^{d}$. [step 2.1, step 2.2, L3, L5, L7, algebra]

4.1 Inclusions: [L3] makes the correspondence inclusion-reversing, so $\mathbb F_{q^{d}}=E^{H_d}\subseteq E^{H_e}=\mathbb F_{q^{e}}$ exactly when $H_e\subseteq H_d$, which by step 2.1 holds exactly when $d\mid e$. At $d=1$ one has $H_1=G$ and $\mathbb F_{q^{1}}=E^{G}=\mathbb F_q$ by [L4], and at $d=n$ one has $H_n=\{\mathrm{id}\}$ and $\mathbb F_{q^{n}}=E$; with steps 3.1 and 3.2 this proves every clause. [step 2.1, step 2.2, step 3.1, step 3.2, L3, L4] ∎

## Remarks

- **Why the lattice is exactly the divisor lattice.** Uniqueness of the subgroup of each order in a cyclic group is what leaves no choice: had $\operatorname{Gal}(E/\mathbb F_q)$ been the Klein four-group, three distinct subgroups of order two would have produced three intermediate fields of the same degree, and no indexing by divisors could exist.
