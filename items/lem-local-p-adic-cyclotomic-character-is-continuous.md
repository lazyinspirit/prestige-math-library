---
id: lem-local-p-adic-cyclotomic-character-is-continuous
kind: lemma
title: The local p-adic cyclotomic character is continuous
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - def-local-p-adic-cyclotomic-character
  - def-absolute-galois-group-of-a-local-field
  - def-p-adic-integers-as-compatible-residue-classes
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Olivier Brinon and Brian Conrad, CMI Summer School Notes on p-adic Hodge Theory, Part I, Chapter 1, Section 1.1
      url: https://math.stanford.edu/~conrad/papers/notes.pdf
    - title: Laurent Berger, An Introduction to the Theory of p-adic Representations, Section I.2.2
      url: https://perso.ens-lyon.fr/laurent.berger/articles/article05.pdf
proof_strategy: direct
verification:
  precheck: n/a
---

## Statement

For a finite extension $K/\mathbb Q_p$, the character $\chi_p:G_K\to\mathbb Z_p^\times$ defined by the action of $G_K$ on compatible primitive $p$-power roots of unity is continuous for the profinite topology on $G_K$ and the inverse-limit topology on $\mathbb Z_p^\times$.

## Facts & Assumptions

**Given:** a finite extension $K/\mathbb Q_p$, its separable closure, a compatible system $(\zeta_{p^n})_{n\ge1}$ of primitive roots of unity, and the cyclotomic character constructed from that system.

[F1] [[def-local-p-adic-cyclotomic-character]]: each $g\in G_K$ acts on $\zeta_{p^n}$ by a unique unit exponent modulo $p^n$, and compatibility of the roots gives the compatible inverse-limit character $\chi_p$.

[F2] [[def-absolute-galois-group-of-a-local-field]]: $G_K=\operatorname{Gal}(K_s/K)$ has the inverse-limit topology from restriction to finite Galois subextensions of $K_s/K$.

[F3] [[def-p-adic-integers-as-compatible-residue-classes]]: $\mathbb Z_p$ is the inverse limit of $\mathbb Z/p^n\mathbb Z$ with its inverse-limit topology from the reduction maps.

## Proof

1.1 Fix $n\ge1$ and put $L_n=K(\zeta_{p^n})$. Since $K$ has characteristic zero, $T^{p^n}-1$ is separable, and $L_n$ is its splitting field over $K$; hence $L_n/K$ is finite Galois. The kernel of $\chi_{p,n}:G_K\to(\mathbb Z/p^n\mathbb Z)^\times$ is exactly $\operatorname{Gal}(K_s/L_n)$: exponent $1$ means that $g$ fixes $\zeta_{p^n}$, and $g$ already fixes $K$. By [F2], this restriction kernel is open in $G_K$. [given, F1, F2, algebra]

1.2 The map $\chi_{p,n}$ is a homomorphism by [F1]. Each nonempty fiber is therefore a coset of its open kernel from step 1.1, so every fiber is open. The target is finite and discrete, so preimages of all its subsets are open; thus $\chi_{p,n}$ is continuous. [F1, step 1.1, algebra]

2.1 The inverse-limit character $\chi_p$ has $n$th coordinate $\chi_{p,n}$ for every $n$. By [F3], basic neighborhoods in $\mathbb Z_p$ are specified by finitely many residue coordinates; intersecting such neighborhoods with $\mathbb Z_p^\times$ gives the inverse-limit topology on the unit subgroup, whose $n$th coordinate lies in $(\mathbb Z/p^n\mathbb Z)^\times$. Since each coordinate map is continuous by step 1.2, preimages of these basic neighborhoods are open, so $\chi_p$ is continuous. [F3, step 1.2] ∎
