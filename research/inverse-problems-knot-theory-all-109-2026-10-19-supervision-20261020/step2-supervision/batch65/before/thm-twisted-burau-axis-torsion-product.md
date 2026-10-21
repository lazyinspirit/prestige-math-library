---
id: thm-twisted-burau-axis-torsion-product
kind: theorem
title: "The braid-axis torsion product gives the twisted Burau determinant"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 8
deps:
  - def-knot-twisted-chain-complex-and-reidemeister-torsion
  - def-knot-wada-quotient-for-deficiency-one-presentation
  - lem-twisted-fox-jacobian-is-cellular-boundary
  - thm-wada-deleted-minor-equals-twisted-reidemeister-torsion
  - lem-twisted-torsion-cell-basis-change-ambiguity
  - alg-twisted-burau-determinant-for-colored-braid-closure
  - thm-abelian-cover-chain-model-computes-alexander-module
  - thm-seifert-van-kampen
  - def-knot-exterior
  - def-closure-of-a-geometric-braid
  - def-artin-automorphisms-of-the-free-group
  - def-the-artin-representation-on-a-free-group
  - prop-the-geometric-action-on-meridians-is-the-artin-representation
  - def-standard-meridians-of-a-punctured-disk
  - def-group-presentation
  - def-free-group
  - def-axiom-of-choice
  - thm-the-punctured-disk-fundamental-group-is-free-on-standard-meridians
  - def-field-of-fractions
  - thm-field-of-fractions-is-a-field-and-the-domain-embeds
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony Conway, Burau Maps and Twisted Alexander Polynomials, Theorem 3.15 and its proof"
      url: "https://arxiv.org/pdf/1510.06678"
      locator: "Complete version-2 PDF, §§3.1–3.3; Theorem 3.15 is printed on pp. 16–17 and gives the colored Burau determinant and axis-filling torsion product."
    - title: "Paul Kirk and Charles Livingston, Twisted Alexander Invariants, Reidemeister Torsion, and Casson–Gordon Invariants, §§2–4"
      url: "https://chuck-livingston.github.io/math/Livingston_papers/1999_Twisted%20Alexander%20invariants%2C%20Reidemeister%20torsion%2C%20and%20Casson-Gordon%20invariants.pdf"
      locator: "Complete paper, especially the chain-level torsion convention and deficiency-one Fox quotient in §4."
    - title: "Andrew Ranicki, Notes on Reidemeister Torsion, Definitions 4 and 6 and Theorem 15"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/torsion.pdf"
      locator: "Complete lecture notes; torsion of based acyclic cellular complexes and basis-change formula."
verification:
  precheck: n/a
---

## Statement

Assume the Axiom of Choice convention of the twisted-chain definition. Let $\beta\in B_n$ be a geometric braid with $n\ge2$ strands, let $X$ be the compact exterior of its oriented closure, and let $Y$ be the compact exterior of the closure together with the braid axis. Suppose finite based deficiency-one two-dimensional spine certificates are supplied for $X$ and $Y$, with compatible cell bases for the filling decomposition $X=Y\cup_T V$, where $T$ is the boundary torus and $V\cong D^2\times S^1$ is the filled solid torus. The certificate for $X$ has generators $g_1,\ldots,g_n$, where $g_i=x_1\cdots x_i$ are cumulative positive meridians, and relators $r_i=g_i^{-1}\beta_*(g_i)$ for $1\le i<n$; the certificate for $Y$ has generators $g_1,\ldots,g_n,x$, where $x$ is the axis meridian, and relators $s_i=\beta_*(g_i)(x^{-1}g_ix)^{-1}$ for $1\le i\le n$. The gluing certificate gives $T$ its one-vertex cell structure with $1$-cells $x,g_n$ and one commutator $2$-cell, and gives $V$ its one-vertex and one-core-edge structure, with compatible based cell bases. Assume these are actual compatible based spine and gluing certificates; an abstract group isomorphism or matching relator list alone is insufficient.

Let $H_L=H_1(X;\mathbb Z)$ have its ordered positive-meridian basis, let $\chi:H_L\twoheadrightarrow H\cong\mathbb Z^m$ be the declared color map with $m\ge1$, and write $\psi$ for the induced deck map. Let $\mathbb F$ be a field, let $\rho:\pi_1(X)\to\mathrm{GL}_d(\mathbb F)$ be a representation, and use the coefficient systems on $Y,T,V$ pulled back or extended across the filling; thus $x$ acts as the identity and the core $g_n$ of $V$ acts by $M_n=\rho(g_n)\psi(g_n)$. Put $D=\det(M_n-I_d)$ and assume $D\ne0$. Compute the reduced colored Burau block $\overline B_\rho(\beta)$ in the cumulative-meridian basis as in the finite procedure, and put $N=\det(\overline B_\rho(\beta)-I_{(n-1)d})$. For the declared convention that torsion is zero on a nonacyclic fraction-field complex, if the twisted complex of $X$ is acyclic then its torsion is represented by $N/D$ modulo the exact determinant and deck-unit subgroup of the coefficient system. If the complex is nonacyclic then $N=0$ and $\tau(X)=N/D=0$ in $Q$. The acyclic identity follows from the braid-axis filling product.

The diagram records only the supplied gluing certificate; it is schematic and is not a substitute for the cell or spine data.

```tikz
\begin{tikzpicture}[>=stealth, node distance=2.5cm]
  \node (T) {$T$};
  \node (Y) [right of=T] {$Y$};
  \node (V) [below of=T] {$V=D^2\times S^1$};
  \node (X) [right of=V] {$X=Y\cup_TV$};
  \draw[->] (T) -- node[above] {inclusion} (Y);
  \draw[->] (T) -- node[left] {inclusion} (V);
  \draw[->] (Y) -- node[right] {glue along $T$} (X);
  \draw[->] (V) -- node[below] {glue along $T$} (X);
\end{tikzpicture}
```

## Statement references

[[alg-twisted-burau-determinant-for-colored-braid-closure|Colored Burau block and boundary denominator conventions]]

[[def-the-artin-representation-on-a-free-group|Well-defined Artin representation of the braid group]]

[[prop-the-geometric-action-on-meridians-is-the-artin-representation|Identification with the geometric braid action]]

[[def-knot-twisted-chain-complex-and-reidemeister-torsion|Twisted coefficient and torsion conventions]]

[Conway, Theorem 3.15 and proof](https://arxiv.org/pdf/1510.06678)

[Kirk and Livingston, §§2–4](https://chuck-livingston.github.io/math/Livingston_papers/1999_Twisted%20Alexander%20invariants%2C%20Reidemeister%20torsion%2C%20and%20Casson-Gordon%20invariants.pdf)

[Ranicki, Definitions 4 and 6 and Theorem 15](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/torsion.pdf)

## Facts & Assumptions

**Given:** AC; the actual compatible based spine and filling certificates; the full positive-meridian abelianization followed by the explicit color map; a field-valued representation of $\pi_1(X)$; and $D\ne0$.

[A1] The maximal-abelian-cover and twisted-chain conventions explicitly assume AC. [[def-axiom-of-choice]]; [[def-knot-twisted-chain-complex-and-reidemeister-torsion]]

[F1] For a based acyclic twisted complex, torsion is the alternating determinant product in the cellular bases; nonacyclic torsion is defined to be zero. [[def-knot-twisted-chain-complex-and-reidemeister-torsion]]

[F2] For a certified deficiency-one exterior spine with torsion degree-one homology over the Laurent ring and an admissible deleted column, the Fox minor divided by its boundary determinant equals the based torsion class. [[thm-wada-deleted-minor-equals-twisted-reidemeister-torsion]]

[F3] The finite braid procedure fixes the positive Artin convention, the cumulative meridians $g_i$, the closure relators, the reduced Fox block $\overline B_\rho(\beta)$, and the numerator and denominator $N,D$. [[alg-twisted-burau-determinant-for-colored-braid-closure]]

[F4] The closure and axis exteriors, their meridian generators, and the Artin action use the stated geometric braid and punctured-disk conventions; the assignment of generator automorphisms extends to a well-defined Artin representation and agrees with the geometric action on meridians; the standard positive puncture meridians form a free basis. [[def-closure-of-a-geometric-braid]]; [[def-artin-automorphisms-of-the-free-group]]; [[def-the-artin-representation-on-a-free-group]]; [[prop-the-geometric-action-on-meridians-is-the-artin-representation]]; [[def-standard-meridians-of-a-punctured-disk]]; [[thm-the-punctured-disk-fundamental-group-is-free-on-standard-meridians]]

[F5] The based Fox block matrix is the cellular boundary matrix of the based presentation complex under the row-coefficient convention. [[lem-twisted-fox-jacobian-is-cellular-boundary]]

[F6] The chain-model theorem proves that the full positive-meridian cellular model computes the maximal-abelian-cover module. The colored-braid algorithm separately requires forming the full positive-meridian basis before applying the declared map $\chi$. [[thm-abelian-cover-chain-model-computes-alexander-module]]; [[alg-twisted-burau-determinant-for-colored-braid-closure]]

[F7] Filling the axis torus kills its meridian in the fundamental group, and the gluing fundamental group is determined by the inclusions of the common boundary torus. [[thm-seifert-van-kampen]]; [[def-knot-exterior]]

[F8] The Laurent coefficient ring is an integral domain embedded in its fraction field, so clearing a nonzero denominator in a free module is valid. [[def-field-of-fractions]]; [[thm-field-of-fractions-is-a-field-and-the-domain-embeds]]

## Proof



1.1 Let $\alpha(g)=\rho(g)\psi(g)$ denote the coefficient matrix. Under [A1], the supplied filling certificate and [F7] identify $\pi_1(X)$ as the quotient of $\pi_1(Y)$ that kills the axis meridian $x$. Pulling the coefficient system back from $X$ therefore gives $\alpha(x)=I_d$ and $\psi(x)=1$; the core of $V$ is represented on $T$ by $g_n$, with matrix $M_n$. The algorithm forms the full positive-meridian basis on $X$ before applying $\chi$, while the compatible filling certificate specifies the resulting pulled-back or extended coefficient systems on $Y,T,V$ and makes them agree on overlaps. The chain-model theorem [F6] supplies the maximal-abelian-cover module computation on the full system; it does not prescribe the specialization order. The map $\pi_1(Y)\to\pi_1(X)$ is surjective, so the pulled-back deck map on $Y$ is still onto and the coefficient-unit images for the two exteriors agree. Since $D\ne0$, $M_n-I_d$ is invertible. [A1, given, F3, F4, F6, F7]

2.1 Give $V$ one $0$-cell and one $1$-cell for its core $g_n$. Its twisted boundary is $M_n-I_d$, so it is acyclic and its torsion is $D^{-1}$. Give $T$ the standard one-vertex CW structure with $1$-cells $x,g_n$ and one commutator $2$-cell $xg_nx^{-1}g_n^{-1}$. The Fox boundary blocks are $d_1=(0,M_n-I_d)^\mathsf{T}$ and $d_2=(I_d-M_n,0)$: hence $d_1$ is onto, $d_2$ is injective onto $\ker d_1$, and $T$ is acyclic. In the torsion determinant product, the factors $\det(I_d-M_n)$ and $\det((M_n-I_d)^{-1})$ cancel up to $(-1)^d$, so $\tau(T)=(-1)^d$. [F1, F5, step 1.1, algebra]

2.2 For $X$, Fox differentiation of $r_i=g_i^{-1}\beta_*(g_i)$ gives block row $M_i^{-1}(\widetilde B_{i,*}-e_i)$, where $e_i$ is the $i$th identity block row and $M_i=\rho(g_i)\psi(g_i)$. Thus, after deleting the $g_n$ column, the Fox block is $\operatorname{diag}(M_1^{-1},\ldots,M_{n-1}^{-1})(\overline B_\rho(\beta)-I)$, whose determinant is $\left(\prod_{i=1}^{n-1}\det(M_i^{-1})\right)N$. The prefactor is a nonzero coefficient unit. The $d_1$ block for $g_n$ is $M_n-I_d$, which is invertible, so $d_1$ is onto and projection from $\ker d_1$ to the first $n-1$ coordinate blocks is an isomorphism. By [F5], the projected $d_2$ is the displayed deleted Fox block. Therefore $N\ne0$ implies $d_2$ injective and, by dimensions and $d_1d_2=0$, the complex is acyclic; if the complex is acyclic, the same projection makes $d_2$ injective and forces $N\ne0$. Hence nonacyclicity is equivalent to $N=0$. [F3, F5, step 1.1, algebra]

3.1 In each degree, the compatible cellular gluing certificate partitions the cells of $X$ into the common cells of $T$, the cells belonging only to $Y$, and the cells belonging only to $V$. The inclusion and difference maps therefore give the short exact sequence $0\to C_*(T)\to C_*(Y)\oplus C_*(V)\to C_*(X)\to0$. Since $T$ and $V$ are acyclic by step 2.1, the long exact homology sequence identifies $H_*(C_*(Y))$ with $H_*(C_*(X))$. Thus $Y$ is acyclic over $Q$ exactly when $X$ is. [given, step 2.1, algebra]

4.1 In the acyclic case, choose boundary bases in the short exact sequence compatibly: lift a basis of each quotient boundary space, append a basis of the subcomplex boundary space, and lift the resulting boundary bases to chain groups. The change-of-basis matrices are block triangular with diagonal blocks the matrices for the subcomplex and quotient, so their determinants multiply degree by degree; the alternating torsion product therefore gives $\tau(Y)\tau(V)=\pm\tau(T)\tau(X)$. As $\tau(T)=\pm1$ and both signs lie in the declared unit subgroup, step 2.1 yields $\tau(Y)\doteq\tau(X)D$. [F1, step 2.1, step 3.1, algebra]

4.2 Suppose $X$ and hence $Y$ are acyclic over $Q$. The finite based chain modules over $\Lambda=\mathbb F[H]$ are free. If $z\in C_1(Y;\Lambda^d)$ is a $1$-cycle, acyclicity over $Q$ gives $z/1=d_2(y)/s$ for some $y\in C_2(Y;\Lambda^d)$ and nonzero $s\in\Lambda$. By [F8], equality in the fraction field means that some nonzero $u\in\Lambda$ annihilates $sz-d_2(y)$; since $C_1(Y;\Lambda^d)$ is free over the domain $\Lambda$, multiplication by $u$ is injective, so $sz=d_2(y)$. Every degree-one homology class is therefore killed by a nonzero element of $\Lambda$. [given, F1, F8, step 3.1, algebra]

5.1 Apply [F2] to the certified spine of $Y$ and delete the $g_n$ column, whose denominator is $D\ne0$. For $s_i=\beta_*(g_i)(x^{-1}g_ix)^{-1}$, the $g_1,\ldots,g_n$ Fox blocks evaluate to $\widetilde B-I$, where $\widetilde B$ is the full cumulative-meridian Fox matrix, and the $x$-column blocks are $I_d-M_i$ with $M_i=\rho(g_i)\psi(g_i)$. Because $\beta_*(g_n)=g_n$, the last row of $\widetilde B-I$ is zero; after deleting its $g_n$ column, the remaining matrix has upper-left block $\overline B_\rho(\beta)-I$, arbitrary upper-right block, zero lower-left block, and lower-right block $I_d-M_n$. It is block upper triangular, so its determinant is $(-1)^dND$. Dividing by $D$ gives $(-1)^dN$, which represents $N$ modulo the sign unit. Consequently $\tau(Y)\doteq N$. [F2, F3, F5, step 4.2, algebra]

6.1 If the complex is acyclic, combine steps 4.1 and 5.1 to obtain $\tau(X)D\doteq N$, hence $\tau(X)\doteq N/D$. If it is nonacyclic, step 2.2 gives $N=0$, and the declared convention sets $\tau(X)=0=N/D$. This proves the statement in both branches. [F1, step 4.1, step 5.1, step 2.2, algebra] ∎

