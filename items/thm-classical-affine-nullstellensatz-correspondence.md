---
id: "thm-classical-affine-nullstellensatz-correspondence"
kind: "theorem"
title: "Classical affine algebraic sets correspond to radical ideals, and irreducible sets to prime ideals"
status: "draft"
origin: "pipeline"
deps: ["thm-classical-affine-zero-loci-form-zariski-closed-sets", "def-classical-vanishing-ideal", "lem-classical-zero-locus-vanishing-ideal-galois-connection", "cor-strong-nullstellensatz-two-inclusions", "cor-weak-nullstellensatz-algebraically-closed-coordinate-form", "def-prime-and-maximal-ideals", "thm-correspondence-theorem-ideals", "lem-radical-commutes-with-quotient-correspondence", "def-axiom-of-choice"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry v6.10, 2.13–2.17, 2.20, 2.27–2.28 and §2i, pp. 41–49"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
landmark: false
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice, inherited from the Nullstellensatz route. For every ideal $J\subseteq R=k[x_1,\ldots,x_n]$, $I(V(J))=\sqrt J$. Together with $V(I(X))=X$ for algebraic $X$, these are inverse inclusion-reversing bijections between radical ideals and algebraic sets. Nonempty irreducible algebraic sets correspond precisely to proper prime ideals, and points to maximal ideals. The empty set corresponds to $R$. For $A=R/I(X)$ the same correspondence identifies radical ideals of $A$ with closed subsets of $X$; in particular $I_X(V_X(H))=\sqrt H$.

## Facts & Assumptions

**Given:** An algebraically closed field $k$, AC, an ideal $J\subseteq R=k[x_1,\ldots,x_n]$, and an affine algebraic set $X\subseteq k^n$. In the relative assertion let $H$ be an ideal of $R/I(X)$.

[F1] Under AC and algebraic closure, $I(V(J))=\sqrt J$ ([[cor-strong-nullstellensatz-two-inclusions]]).

[F2] The zero-locus/ideal connection reverses inclusion and closes algebraic sets ([[lem-classical-zero-locus-vanishing-ideal-galois-connection]]).

[F3] Zero loci are closed under finite unions ([[thm-classical-affine-zero-loci-form-zariski-closed-sets]]).

[F4] Prime ideals are proper and satisfy the product test ([[def-prime-and-maximal-ideals]]).

[F5] Every maximal ideal has a unique coordinate point ([[cor-weak-nullstellensatz-algebraically-closed-coordinate-form]]).

[F6] Ideals of a quotient correspond to ideals containing its kernel ([[thm-correspondence-theorem-ideals]]).

[F7] Taking radicals commutes with quotient correspondence ([[lem-radical-commutes-with-quotient-correspondence]]).

## Proof

**Proof technique:** direct.

1.1 The ring is a finite-variable polynomial ring over algebraically closed $k$, so the strong Nullstellensatz applies with the assumed AC and gives $I(V(J))=\sqrt J$. The other composite is the identity on closed sets by F2. For radical $J$ the first composite is also the identity, proving the stated inverse bijections and their inclusion reversal. [F1, F2, given]

1.2 If $X$ is nonempty irreducible and $fg\in I(X)$, then $X=(X\cap V(f))\cup(X\cap V(g))$. Irreducibility forces one of these closed sets to be $X$, hence $f\in I(X)$ or $g\in I(X)$. Also $1\notin I(X)$ because $X$ has a point. Thus $I(X)$ is prime. [F3, F4, given]

2.1 Conversely suppose $P=I(X)$ is prime. Then $X$ is nonempty, since $I(\varnothing)=R$. If $X=C\cup D$ with $C,D$ proper closed subsets, choose $f\in I(C)\setminus I(X)$ and $g\in I(D)\setminus I(X)$; these exist by the injective reversing correspondence in step 1.1. The product vanishes on $C\cup D=X$, contradicting primality. Thus $X$ is irreducible. For any prime $P$, the elementary implication $f^r\in P\Rightarrow f\in P$ makes $P$ radical, so step 1.1 realizes it by such an $X$. [F4, step 1.1, step 1.2, algebra]

2.2 For a point $a$, evaluation onto $k$ has kernel $I(\{a\})$. A proper ideal strictly containing this kernel would contain an $f$ with $f(a)\ne0$; subtracting $f-f(a)$ in the kernel puts a nonzero constant in that ideal, hence 1. Thus the kernel is maximal. Conversely F5 writes each maximal ideal as $(x_i-a_i)_i$, whose locus is exactly $\{a\}$. The unit ideal has empty locus, and the empty set has vanishing ideal $R$. [F5, step 1.1, algebra]

3.1 Let $\pi:R\to A$ be the quotient and $H\trianglelefteq A$. Its inverse image contains $I(X)$, so its zero locus lies in $X$ and equals $V_X(H)$. Polynomial vanishing upstairs gives $I(V_X(H))=\sqrt{\pi^{-1}H}$. Passing to the quotient using F6 and F7 yields $I_X(V_X(H))=\sqrt H$. This also proves the relative closed-set correspondence. [F1, F6, F7, step 1.1] ∎


## Sources

Source comparison: Milne, *Algebraic Geometry*, v6.10, 2.13–2.17, 2.20, 2.27–2.28 and §2i, pp. 41–49. Conventions here distinguish arbitrary affine algebraic sets from nonempty irreducible varieties.
