---
id: lem-twisted-acyclicity-from-torsion-module
kind: lemma
title: "Torsion first homology forces twisted acyclicity for a deficiency-one exterior spine"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-knot-twisted-chain-complex-and-reidemeister-torsion
  - def-field-of-fractions
  - thm-field-of-fractions-is-a-field-and-the-domain-embeds
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Anthony Conway, Burau Maps and Twisted Alexander Polynomials, Lemma 2.6"
      url: "https://arxiv.org/pdf/1510.06678"
      locator: "Complete version-2 PDF, §2(d), Lemma 2.6, printed pp. 8–9; localized acyclicity from torsion first homology."
    - title: "Paul Kirk and Charles Livingston, Twisted Alexander Invariants, Reidemeister Torsion, and Casson–Gordon Invariants, §§3–4"
      url: "https://chuck-livingston.github.io/math/Livingston_papers/1999_Twisted%20Alexander%20invariants%2C%20Reidemeister%20torsion%2C%20and%20Casson-Gordon%20invariants.pdf"
      locator: "Complete paper; localized twisted homology and torsion-module comparison."
    - title: "Andrew Ranicki, Notes on Reidemeister Torsion, Example 17"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/torsion.pdf"
      locator: "Complete lecture notes, printed pp. 8–9; the deficiency-one knot-exterior cellular model and localized acyclicity."
---

## Statement

Assume the Axiom of Choice convention of the twisted-chain definition. Let $X$ be a connected finite based two-dimensional CW complex with one $0$-cell, $n\ge2$ $1$-cells and $n-1$ $2$-cells, so $\chi(X)=0$. Let $G=\pi_1(X)$, let $\psi:G\twoheadrightarrow H\cong\mathbb Z^m$ be an epimorphism with $m\ge1$, let $\rho:G\to\mathrm{GL}_d(\mathbb F)$ be a representation over a field $\mathbb F$, set $\Lambda=\mathbb F[H]$ and $Q=\operatorname{Frac}(\Lambda)$, and give $\Lambda^d$ the right $\mathbb F[G]$-action $v\cdot g=v\rho(g)\psi(g)$, with $\psi(g)$ acting by its central monomial. Form

$$C_*^{\rho,\psi}(X;\Lambda^d)=\Lambda^d\otimes_{\mathbb F[G]}C_*(\widetilde X;\mathbb F),$$

where $\widetilde X$ is the universal cover, and set $C_*^{\rho,\psi}(X;Q^d)=Q\otimes_\Lambda C_*^{\rho,\psi}(X;\Lambda^d)$. If every element of $H_1(C_*^{\rho,\psi}(X;\Lambda^d))$ is annihilated by some nonzero element of $\Lambda$, then $C_*^{\rho,\psi}(X;Q^d)$ is acyclic. No assumption that its degree-two homology vanishes before localization is required.

## Statement references

[[def-knot-twisted-chain-complex-and-reidemeister-torsion|Twisted coefficient complex and deck action]]

[Conway, Lemma 2.6](https://arxiv.org/pdf/1510.06678)

[Kirk and Livingston, §§3–4](https://chuck-livingston.github.io/math/Livingston_papers/1999_Twisted%20Alexander%20invariants%2C%20Reidemeister%20torsion%2C%20and%20Casson-Gordon%20invariants.pdf)

[Ranicki, Example 17](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/torsion.pdf)

## Facts & Assumptions

**Given:** AC; the finite based $2$-complex and its cell counts; a positive-rank free abelian quotient $\psi:G\twoheadrightarrow H$; a field $\mathbb F$; and the torsion hypothesis on $H_1$ over $\Lambda=\mathbb F[H]$.

[A1] AC is inherited from the maximal-abelian-cover convention used to define the coefficient complex. The finite-dimensional linear-algebra argument below itself uses no choice principle. [[def-axiom-of-choice]]

[F1] The twisted complex is formed from the chosen based universal-cover cellular chains using the right action $v\cdot g=v\rho(g)\psi(g)$; the boundary of a lifted oriented $1$-cell $x$ is multiplication by $\rho(x)\psi(x)-I_d$. [[def-knot-twisted-chain-complex-and-reidemeister-torsion]]

[F2] The field of fractions of an integral domain is a field, and the canonical map embeds the domain. [[def-field-of-fractions]]; [[thm-field-of-fractions-is-a-field-and-the-domain-embeds]]

## Proof



1.1 By [A1], use the prescribed AC-based twisted coefficient convention. Choose an ordered basis $t_1,\ldots,t_m$ of $H$. Then $\Lambda$ is the Laurent-polynomial ring $\mathbb F[t_1^{\pm1},\ldots,t_m^{\pm1}]$. Order exponent vectors lexicographically. For nonzero Laurent polynomials $f,g$, their finite supports have largest exponents $a,b$ with nonzero coefficients $f_a,g_b$; the largest exponent of $fg$ is $a+b$ and its coefficient is $f_ag_b\ne0$. Thus $\Lambda$ is an integral domain, and [F2] makes $Q$ a field containing $\Lambda$. [A1, given, F2, algebra]

2.1 Let $z/s\in C_1\otimes_\Lambda Q$ be a fraction-field cycle, with $z\in C_1$ and $0\ne s\in\Lambda$. Since $d_1(z)/s=0$ and each coordinate of $C_0$ lies in the domain $\Lambda$, $d_1(z)=0$. The torsion hypothesis gives $0\ne f\in\Lambda$ and $w\in C_2$ with $fz=d_2(w)$. Hence $z/s=d_2(w/(fs))$, so every fraction-field $1$-cycle is a boundary and $H_1(C_*\otimes Q)=0$. [given, F1, step 1.1, algebra]

2.2 Because $\psi$ is onto a positive-rank free abelian group, some $1$-cell generator $x$ has $\psi(x)=h\ne1$. Lift that oriented edge from the unique $0$-cell to the universal-cover vertex; its cellular boundary is $(x-1)$ times that vertex. Tensoring with the stated right action gives the corresponding $d_1$ block $A=\rho(x)h-I_d$. Its determinant is a polynomial in the distinct monomials $1,h,\ldots,h^d$ whose top coefficient is $\det\rho(x)\ne0$, so $\det A\ne0$ in $\Lambda$. Thus $A$ is invertible over $Q$, this block makes $d_1:C_1\otimes Q\to C_0\otimes Q$ surjective, and $H_0(C_*\otimes Q)=0$. [given, F1, step 1.1, algebra]

3.1 The fraction-field chain dimensions are $d(n-1),dn,d$, whose alternating sum is $d((n-1)-n+1)=0$. Euler–Poincaré for this finite-dimensional complex gives $\dim_QH_0-\dim_QH_1+\dim_QH_2=0$. Steps 2.1 and 2.2 make the first two terms zero, hence $H_2=0$; there are no chain groups above degree $2$. The localized complex is acyclic. [F1, step 2.1, step 2.2, algebra] ∎

