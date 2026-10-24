---
id: def-binary-sequence-cylinders-and-fair-coin-content
kind: definition
title: Binary-sequence cylinders and fair-coin content
deps: ["def-algebra-of-subsets"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: E–W Examples 2.8–2.9 pp.17–18
      url: https://webspace.maths.qmul.ac.uk/f.vivaldi/teaching/ETAD/NotesI.pdf
status: published
origin: pipeline
---

## Definition

Put $\Omega=\{0,1\}^{\mathbb N_0}$, the set of functions from nonnegative integers to $\{0,1\}$. For a finite set $F\subseteq\mathbb N_0$ and a function $a:F\to\{0,1\}$ the **cylinder** $[a]_F$ consists of x with $x_j=a(j)$ for every j in F. The empty prescription gives all of Omega. Every cylinder is nonempty by filling unspecified coordinates with zero.

The **cylinder algebra** $\mathcal C$ is the set of finite unions of cylinders, including the empty union. It is an algebra in the sense of [[def-algebra-of-subsets]]: any finite list of prescriptions can be refined to their finite coordinate union G; the $2^{|G|}$ complete prescriptions on G are disjoint nonempty atoms partitioning Omega, and union, intersection and complement of unions of these atoms again are such unions.

Give each G-atom mass $2^{-|G|}$. If A is a union of m distinct G-atoms, define its **fair-coin content** by $p_0(A)=m2^{-|G|}$. This is independent of G and its representation. Enlarging G to H splits each atom into exactly $2^{|H|-|G|}$ atoms, leaving its mass unchanged. Two representations agree after refining to their coordinate union; because all refined atoms are nonempty, the same subset A selects precisely the same atoms in both. Common refinement also proves finite additivity on disjoint sets. In particular $p_0(\varnothing)=0$, $p_0(\Omega)=1$, and $p_0([a]_F)=2^{-|F|}$. All constructions here involve finite coordinate sets and are choice-free.
