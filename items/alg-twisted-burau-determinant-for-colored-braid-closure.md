---
id: alg-twisted-burau-determinant-for-colored-braid-closure
kind: algorithm
title: "Compute the twisted Burau determinant for a colored braid closure"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - def-knot-twisted-chain-complex-and-reidemeister-torsion
  - def-knot-wada-quotient-for-deficiency-one-presentation
  - lem-twisted-fox-jacobian-is-cellular-boundary
  - def-braid-group-by-the-artin-presentation
  - def-closure-of-a-geometric-braid
  - def-artin-automorphisms-of-the-free-group
  - def-the-artin-representation-on-a-free-group
  - prop-the-geometric-action-on-meridians-is-the-artin-representation
  - def-standard-meridians-of-a-punctured-disk
  - thm-the-punctured-disk-fundamental-group-is-free-on-standard-meridians
  - def-group-presentation
  - def-free-group
  - def-group-ring
  - thm-group-ring-is-a-unital-algebra-with-basis-g
  - def-field-of-fractions
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: not-applicable
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Anthony Conway, Burau Maps and Twisted Alexander Polynomials, §§2.1–2.4 and 3.1–3.3"
      url: "https://arxiv.org/pdf/1510.06678"
      locator: "Complete version-2 PDF; colored braid conventions, twisted Burau maps, reduced block, and Theorem 3.15 (printed pp. 16–17)."
    - title: "Paul Kirk and Charles Livingston, Twisted Alexander Invariants, Reidemeister Torsion, and Casson–Gordon Invariants, §§2–4"
      url: "https://chuck-livingston.github.io/math/Livingston_papers/1999_Twisted%20Alexander%20invariants%2C%20Reidemeister%20torsion%2C%20and%20Casson-Gordon%20invariants.pdf"
      locator: "Complete paper; twisted chain, Fox matrix and Wada quotient conventions."
    - title: "Andrew Ranicki, Notes on Reidemeister Torsion, Definitions 4 and 6"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/torsion.pdf"
      locator: "Complete lecture notes; exact based torsion convention."
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Definition

**Inputs.** An integer $n\ge2$; a finite Artin word $\beta\in B_n$ in the positive-half-twist convention where $\sigma_i$ sends the $i$th meridian $x_i$ to $x_ix_{i+1}x_i^{-1}$ and $x_{i+1}$ to $x_i$; a surjective color map $c$ from the cycles of the endpoint permutation to $\{1,\ldots,\mu\}$, written on strands as $c_1,\ldots,c_n$ and constant around each cycle; a field $\mathbb F$ with encoded exact arithmetic and equality; a positive integer $d$ and invertible matrices $\rho(x_i)\in\mathrm{GL}_d(\mathbb F)$; and compatible finite certificates of based deficiency-one $2$-spines for the closure exterior $X$ and the closure-with-axis exterior $Y$. The $X$ spine has generators $g_i=x_1\cdots x_i$ and relators $r_i=g_i^{-1}\beta_*(g_i)$ for $1\le i<n$. The $Y$ spine has generators $g_1,\ldots,g_n,x$ and relators $s_i=\beta_*(g_i)(x^{-1}g_ix)^{-1}$ for $1\le i\le n$; $x$ is the meridian of the axis. The certificates include a based cell structure on $T$ with one vertex, $1$-cells $x,g_n$, and the commutator $2$-cell; the one-vertex, one-core-edge structure on $V=D^2\times S^1$; and compatible cell bases for $X=Y\cup_TV$. These spine and gluing certificates are geometric input and are not recognized by the procedure. Put $H=\langle t_1,\ldots,t_\mu\rangle\cong\mathbb Z^\mu$, $\psi(x_i)=t_{c_i}$, $g_n=x_1\cdots x_n$, $\Lambda=\mathbb F[H]$, and $Q=\operatorname{Frac}(\Lambda)$.

**Instructions.**

1. Read the supplied $X$ and $Y$ spine/presentation correspondences and compatible gluing as certified geometric input; check their finite cell counts and relator lists, but do not attempt to recognize whether the data describe exterior spines. Return `not-applicable` if either certificate is absent. Compute the induced free-group automorphism $\beta_*$ by substituting the displayed Artin rules in the declared word order. For the mapping-torus checks, set the axis meridian's representation matrix to $\rho(x)=I_d$. Return `not-applicable` if the coloring is not preserved on endpoints, if the representation fails any closure relator, or if it fails any mapping-torus relator $s_i=\beta_*(g_i)(x^{-1}g_ix)^{-1}$. Equivalently the braid invariance checks $\rho(\beta_*(x_i))=\rho(x_i)$ must hold for all meridians.

2. Set $\psi(x)=1$ on the axis meridian. Verify the deck map on the relators $r_i$ and the axis relators $s_i$, and verify the colors are surjective, so $\psi$ descends to both spine groups and is an epimorphism. Compute the positive-meridian full abelianization basis first, then use the explicit color map $H_L\to H$; no unannounced equal-variable or total-linking specialization is performed.

3. Rewrite $\beta_*(g_i)$ in the free basis $g_1,\ldots,g_n$, using $x_i=g_{i-1}^{-1}g_i$ and $g_0=1$. Compute the block Fox matrix $B_\beta$ with $(i,j)$ block $\Phi(\partial\beta_*(g_i)/\partial g_j)$, using the product and inverse recursions of the Wada definition and $\Phi(g)=\rho(g)\psi(g)$. The braid fixes the boundary word $g_n$, so its last block row is $(0,\ldots,0,I_d)$. Let $\overline B_\rho(\beta)$ be the upper-left $(n-1)d$-square block.

4. Compute $D=\det(\rho(g_n)\psi(g_n)-I_d)$. If $D=0$, return `not-applicable`: this designated deleted column is inadmissible, even if another column of the Fox matrix could be used.

5. Form the twisted cellular boundary matrices $d_1,d_2$ of the closure-exterior spine $X$ from the Fox lemma. Use exact Gaussian elimination over $Q$ to check the chain identity $d_1\circ d_2=0$ (the row-matrix product $J A_{\rm stack}=0$). If this identity fails, return `not-applicable` because the encoded data do not define a chain complex. If it holds but the ranks are not $\operatorname{rank}(d_1)=d$ and $\operatorname{rank}(d_2)=(n-1)d$, return $0$ under the declared torsion convention. Otherwise compute $N=\det(\overline B_\rho(\beta)-I_{(n-1)d})$ and return the rational function $N/D$ as the twisted Burau determinant value, modulo the determinant/deck units of the based torsion convention.

The braid convention is shown for two adjacent downward-oriented strands. The left strand crosses over the right strand for $\sigma_i$; the gap records the underpass. The word, color map, and algebraic action above, rather than the diagram, determine the computation.

```tikz
\begin{tikzpicture}[x=1.2cm,y=1.0cm,>=stealth,line width=1pt]
  \node at (0,2.2) {$x_i$};
  \node at (1,2.2) {$x_{i+1}$};
  \draw (0,2) -- (1,0);
  \draw (1,2) -- (0.53,1.06);
  \draw[white,line width=4pt] (0.47,0.94) -- (0,0);
  \draw (0.47,0.94) -- (0,0);
  \node at (0, -0.25) {$x_{i+1}$};
  \node at (1, -0.25) {$x_i$};
\end{tikzpicture}
```

The displayed generator interchanges endpoint positions, with the original left strand passing over; the colors must follow the same permutation along each link component.

## Definition references

[[def-knot-twisted-chain-complex-and-reidemeister-torsion|Twisted coefficient and torsion conventions]]

[[def-knot-wada-quotient-for-deficiency-one-presentation|Admissible Fox quotient and denominator]]

[[def-artin-automorphisms-of-the-free-group|Positive Artin action on punctured-disk meridians]]

[[def-the-artin-representation-on-a-free-group|Well-defined Artin representation of the braid group]]

[[prop-the-geometric-action-on-meridians-is-the-artin-representation|Identification with the geometric braid action]]

[[def-closure-of-a-geometric-braid|Closed-braid closure and component cycles]]

[Conway, §§2.1–2.4 and 3.1–3.3](https://arxiv.org/pdf/1510.06678)

[Kirk and Livingston, §§2–4](https://chuck-livingston.github.io/math/Livingston_papers/1999_Twisted%20Alexander%20invariants%2C%20Reidemeister%20torsion%2C%20and%20Casson-Gordon%20invariants.pdf)

[Ranicki, Definitions 4 and 6](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/torsion.pdf)
