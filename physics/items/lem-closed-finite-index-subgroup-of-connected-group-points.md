---
id: lem-closed-finite-index-subgroup-of-connected-group-points
kind: lemma
title: "Closed finite-index subgroups of rational points of smooth connected groups over algebraically closed fields are the whole point group"
dependency_level: 1
deps:
  - cor-weak-nullstellensatz-algebraically-closed-coordinate-form
  - def-axiom-of-choice
  - def-dimension-noetherian-topological-space
  - def-irreducible-component-scheme
  - lem-nonaffine-connected-group-geometrically-connected
  - lem-smooth-finite-type-schemes-have-schematically-dense-rational-points
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
status: published
origin: pipeline
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: Summary 1.36 and its use in the proof of Theorem 16.30, printed pp. 17 and 335
---
## Statement

Assume the Axiom of Choice. Let $k$ be an algebraically closed field, let $G$ be a smooth connected algebraic group of finite type over $k$, and let $H\subseteq G(k)$ be a subgroup that is closed for the Zariski topology on $G(k)$ and of finite index in $G(k)$. Then $H=G(k)$.

The connectedness hypothesis is used: for $G=\mu_2$ over an algebraically closed field of characteristic $\ne2$ the trivial subgroup $H=\{1\}$ of $G(k)=\{\pm1\}$ is closed of index $2$ and $H\ne G(k)$, because $\mu_2$ is not connected. The Axiom of Choice is inherited from the connectedness and density suppliers.

## Facts & Assumptions

**Given:** The Axiom of Choice, an algebraically closed field $k$, a smooth connected finite-type $k$-group $G$, and a closed finite-index subgroup $H\subseteq G(k)$.

[F1] Assume AC. A smooth connected finite-type $k$-group scheme is geometrically integral; in particular its underlying space is irreducible. ([[lem-nonaffine-connected-group-geometrically-connected]])

[F2] Assume AC. For a smooth finite-type $k$-scheme $X$ over an algebraically closed field $k$, the set $X(k)$ is dense in $X$. ([[lem-smooth-finite-type-schemes-have-schematically-dense-rational-points]])

[F3] A subset of a topological space is irreducible when it is nonempty and not the union of two proper closed subsets; a dense subset of an irreducible space is irreducible, and a finite union of proper closed subsets cannot be the whole space. ([[def-irreducible-component-scheme]], [[def-dimension-noetherian-topological-space]])


## Proof

**Given:** The Axiom of Choice, an algebraically closed field $k$, a smooth connected finite-type $k$-group $G$, and a closed finite-index subgroup $H\subseteq G(k)$.

1.1 By [F1] the space $|G|$ is irreducible, and by [F2] the subset $G(k)$ is dense in $|G|$; a dense subset of an irreducible space is irreducible by [F3], so $G(k)$ is irreducible in the Zariski topology. [F1, F2, F3]

1.2 For $g\in G(k)$ let $\lambda_g:G\to G$, $x\mapsto gx$, be left translation; it is an automorphism of $k$-schemes with inverse $\lambda_{g^{-1}}$, hence induces a homeomorphism of $G(k)$ onto itself. The cosets of $H$ in $G(k)$ are the images $\lambda_g(H)$ of $H$, and because $H$ is closed in $G(k)$, every coset is closed in $G(k)$; distinct cosets are disjoint and nonempty. [F3, given]

2.1 Suppose $H\ne G(k)$. Since $H$ has finite index, $G(k)$ is the disjoint union of the finitely many distinct cosets $g_1H,\dots,g_rH$ with $r\ge2$, each closed and nonempty by [step 1.2]. Then $H$ and the union $g_2H\cup\dots\cup g_rH$ are two disjoint nonempty closed subsets whose union is $G(k)$, contradicting the irreducibility of $G(k)$ from [step 1.1] by [F3]. Hence $H=G(k)$. [F3, step 1.1, step 1.2] ∎ 