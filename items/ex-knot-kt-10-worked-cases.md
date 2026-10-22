---
id: ex-knot-kt-10-worked-cases
kind: example
title: "Trefoil torsion from its torus spine and colored Burau block"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 10
deps:
  - def-knot-twisted-chain-complex-and-reidemeister-torsion
  - def-knot-wada-quotient-for-deficiency-one-presentation
  - thm-knot-wada-quotient-equals-reidemeister-torsion
  - alg-twisted-burau-determinant-for-colored-braid-closure
  - thm-twisted-burau-determinant-formula-under-extension-hypotheses
  - thm-seifert-van-kampen
  - def-knot-exterior
  - def-knot-meridian-and-preferred-longitude
  - thm-knot-exterior-homology-and-longitude
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony Conway, Burau Maps and Twisted Alexander Polynomials, §§3.1–3.3"
      url: "https://arxiv.org/pdf/1510.06678"
      locator: "Complete version-2 PDF; trefoil calculation, reduced Burau convention and braid-axis torsion formula."
    - title: "Paul Kirk and Charles Livingston, Twisted Alexander Invariants, Reidemeister Torsion, and Casson–Gordon Invariants, §4"
      url: "https://chuck-livingston.github.io/math/Livingston_papers/1999_Twisted%20Alexander%20invariants%2C%20Reidemeister%20torsion%2C%20and%20Casson-Gordon%20invariants.pdf"
      locator: "Complete §4; Fox derivatives and the deficiency-one torsion quotient."
    - title: "Andrew Ranicki, Notes on Reidemeister Torsion, Definitions 4 and 6 and Theorem 15"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/torsion.pdf"
      locator: "Complete lecture notes; based acyclic torsion and unit convention."
    - title: "Alessia Cattabriga and Stefano Francaviglia, Knot Theory and Applications: Lecture Notes, §5.2, Theorem 5.2.1 and proof"
      url: "https://poisson.phc.dm.unipi.it/~camponovo/libri/knot.pdf"
      locator: "Complete 53-page lecture notes; §5.2, proof of Theorem 5.2.1, printed pp. 28–29: the two-solid-torus decomposition, annular intersection and core inclusions, and the Seifert–van Kampen group calculation. This source does not assert a simple-spine equivalence."
    - title: "Allen Hatcher, Algebraic Topology, §1.2, Example 1.24 (Torus Knots)"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch1.pdf"
      locator: "The complete mapping-cylinder construction of the torus-knot exterior 2-complex and the boundary-torus mapping cylinder."
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: n/a
---

## Example

Assume the Axiom of Choice. Let $K$ be the positively oriented trefoil, the closure of the positive two-strand braid $\sigma_1^3$, and use the trivial one-dimensional representation and the single-color deck map sending each positive meridian to $t$. Use the standard genus-one Heegaard decomposition of $S^3$ with $K$ the $(2,3)$ curve on the splitting torus. Its two exterior pieces are solid tori meeting in an annulus whose core maps with degrees $2$ and $3$ to their oriented cores; the associated based simple-spine certificate has one vertex, core generators $a,b$, and one $2$-cell with attaching word $a^2b^{-3}$. The full abelianization sends $a$ to $t^3$ and $b$ to $t^2$. Deleting the $a$ column in this spine gives Wada quotient $-(t^4+t^2+1)/(t^3-1)=(t^2-t+1)/(1-t)$. In the cumulative-meridian basis, the reduced colored Burau block for $\sigma_1$ is $[-t]$, so for $\sigma_1^3$ it is $[-t^3]$; its numerator and boundary denominator are $-(t^3+1)$ and $t^2-1$. Their quotient is also $(t^2-t+1)/(1-t)$, the twisted torsion value for this based spine up to the declared units. Interpreting that ratio as the output of the full braid-axis procedure additionally requires the compatible axis-exterior and filling certificate in the procedure hypotheses.

The braid portion shown below uses the positive crossing convention from the colored procedure. The closure joins bottom endpoint $i$ to top endpoint $i$; because the endpoint permutation is a transposition, the closure is one component.

```tikz
\begin{tikzpicture}[x=1cm,y=0.8cm,line width=1pt]
  \node at (0,4.5) {$1$};
  \node at (1,4.5) {$2$};
  \node at (0,0.2) {$1$};
  \node at (1,0.2) {$2$};
  % First positive crossing: left strand passes over right.
  \draw (0,4) -- (1,3);
  \draw (1,4) -- (0.58,3.58);
  \draw[white,line width=3pt] (0.42,3.42) -- (0,3);
  \draw (0.42,3.42) -- (0,3);
  % Second positive crossing.
  \draw (0,3) -- (1,2);
  \draw (1,3) -- (0.58,2.58);
  \draw[white,line width=3pt] (0.42,2.42) -- (0,2);
  \draw (0.42,2.42) -- (0,2);
  % Third positive crossing.
  \draw (0,2) -- (1,1);
  \draw (1,2) -- (0.58,1.58);
  \draw[white,line width=3pt] (0.42,1.42) -- (0,1);
  \draw (0.42,1.42) -- (0,1);
  \draw (0,1) -- (0,0.5);
  \draw (1,1) -- (1,0.5);
\end{tikzpicture}
```

## Example references

[[def-knot-wada-quotient-for-deficiency-one-presentation|Fox quotient and denominator convention]]

[[thm-knot-wada-quotient-equals-reidemeister-torsion|Exterior-spine torsion equality]]

[[thm-twisted-burau-determinant-formula-under-extension-hypotheses|Colored Burau torsion formula]]

[Conway, §§3.1–3.3](https://arxiv.org/pdf/1510.06678)

[Kirk and Livingston, §4](https://chuck-livingston.github.io/math/Livingston_papers/1999_Twisted%20Alexander%20invariants%2C%20Reidemeister%20torsion%2C%20and%20Casson-Gordon%20invariants.pdf)

[Ranicki, Definitions 4 and 6 and Theorem 15](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/torsion.pdf)

[Cattabriga and Francaviglia, Theorem 5.2.1 and proof](https://poisson.phc.dm.unipi.it/~camponovo/libri/knot.pdf)

[Hatcher, §1.2, Example 1.24](https://pi.math.cornell.edu/~hatcher/AT/ATch1.pdf)

## Facts & Assumptions

**Given:** AC; the standard genus-one splitting and $(2,3)$ torus-knot certificate; the trivial representation; the positive-meridian deck map; and the positive braid convention.

[A1] AC is inherited from the maximal-abelian-cover and twisted-chain conventions. [[def-axiom-of-choice]]; [[def-knot-twisted-chain-complex-and-reidemeister-torsion]]

[F1] For an admissible deficiency-one exterior-spine column, the Wada quotient is the deleted Fox minor divided by $\det(\rho(x_j)\psi(x_j)-I)$. [[def-knot-wada-quotient-for-deficiency-one-presentation]]

[F2] The based torsion uses the declared acyclic fraction-field determinant convention and is invariant under certified simple spine changes modulo determinant and deck units. [[def-knot-twisted-chain-complex-and-reidemeister-torsion]]; [[thm-knot-wada-quotient-equals-reidemeister-torsion]]

[F3] The braid procedure uses $\sigma_1(x_1)=x_1x_2x_1^{-1}$, $\sigma_1(x_2)=x_1$, the cumulative basis $g_1=x_1$, $g_2=x_1x_2$, and the reduced block obtained from the evaluated Fox Jacobian. [[alg-twisted-burau-determinant-for-colored-braid-closure]]

[F4] Seifert–van Kampen computes the group of a union from the two solid-torus pieces and their annular intersection. [[thm-seifert-van-kampen]]

[F5] The colored Burau formula identifies the procedure value with exterior torsion only when the compatible based spine and axis-filling certificates are supplied. [[thm-twisted-burau-determinant-formula-under-extension-hypotheses]]

[F6] The positive meridian generates the first homology of a knot exterior. [[thm-knot-exterior-homology-and-longitude]]; [[def-knot-meridian-and-preferred-longitude]]

[F7] In the standard torus-knot construction, the finite complex $X_{m,n}$ is the union of mapping cylinders of the degree-$m$ and degree-$n$ maps of a circle, and the compact exterior is the mapping cylinder of a map from the boundary torus to $X_{m,n}$. [Hatcher, §1.2, Example 1.24](https://pi.math.cornell.edu/~hatcher/AT/ATch1.pdf)

## Proof




1.1 Under [A1], let $A$ be the annulus left on the Heegaard torus after removing an open annular neighborhood of the $(2,3)$ curve. The torus-knot model identifies its core with the common source circle $c$ in the finite spine $X=M_2\cup_c M_3$, where $M_2$ and $M_3$ are mapping cylinders of the degree-two and degree-three maps of a circle and their target core circles are $a$ and $b$. By [F7], the compact exterior is the mapping cylinder of an explicit map from its boundary torus to $X$. Choose finite cell structures compatible with this map and the two degree maps, with circle vertices $v_c,v_a,v_b$ and cylinder edges $e_a:v_c\to v_a$, $e_b:v_c\to v_b$; take $v_c$ as basepoint. In the resulting exterior mapping-cylinder CW structure, each prism over a boundary-torus cell $\sigma$ pairs with its unglued face $\sigma\times\{0\}$; removing these pairs in decreasing cell dimension gives a finite sequence of elementary collapses onto $X$, fixing $X$ and $v_c$. Thus this specific exterior-to-$X$ equivalence is simple. The natural CW structure on $X$ has these three vertices, edges $a,b,c,e_a,e_b$, and $2$-cells with based words $e_a a^2e_a^{-1}c^{-1}$ and $e_b b^3e_b^{-1}c^{-1}$. The two connecting edges form a maximal tree. Contract it to obtain a based presentation complex $\overline X$: this contraction is simple, as can be seen by moving the loops and attaching paths at each terminal vertex across its connecting edge by cellular edge slides, then collapsing that edge with the now free terminal vertex. Each cellular slide is realized by an elementary expansion followed by an elementary collapse; the root $v_c$ is fixed. After the two contractions, $\overline X$ has one vertex, edges $a,b,c$, and $2$-cells $\lambda_2,\lambda_3$ attached by $r_2=a^2c^{-1}$ and $r_3=b^3c^{-1}$. Work in $\overline X$ for the following further simple changes. Slide $\lambda_3$ over the oppositely oriented $\lambda_2$, replacing its attaching word by $$r_3r_2^{-1}=(b^3c^{-1})(a^2c^{-1})^{-1}=b^3a^{-2}.$$ This elementary based $2$-cell slide removes $c$ from that attaching map. The edge $c$ now occurs exactly once in the boundary of $\lambda_2$ and nowhere else, so $(c,\lambda_2)$ is a free $1$- and $2$-cell pair and collapses. Reversing the orientation of the remaining $2$-cell gives the attaching word $a^2b^{-3}$. Thus the resulting one-vertex complex with core edges $a,b$ and one $2$-cell is based simple-homotopy equivalent to the chosen compact exterior and supplies the required certificate. [A1, given, F4, F7, construct, algebra]

2.1 The abelianization of this spine has generators $[a],[b]$ and relation $2[a]-3[b]=0$. By [F6], the positive meridian class $[m]$ generates $H_1(E_K;\mathbb Z)\cong\mathbb Z$. Write $[a]=p[m]$ and $[b]=q[m]$; the relation gives $2p=3q$, and $a,b$ generate the abelianization, so $\gcd(p,q)=1$. Hence $(p,q)=(3,2)$ or $(-3,-2)$; orient the two core generators consistently with the positive meridian to choose $(3,2)$. Thus the full positive-meridian deck map sends $a\mapsto t^3$ and $b\mapsto t^2$. [F6, step 1.1, algebra]

3.1 For $r=a^2b^{-3}$, the Fox product and inverse rules give $\partial r/\partial a=1+a$ and $\partial r/\partial b=-a^2(b^{-1}+b^{-2}+b^{-3})$. Evaluating at $a=t^3$, $b=t^2$ gives $1+t^3$ and $-(t^4+t^2+1)$. The $a$ denominator is $t^3-1\ne0$, so the deleted-$a$ quotient is $-(t^4+t^2+1)/(t^3-1)$. Factoring $t^4+t^2+1=(t^2+t+1)(t^2-t+1)$ and $t^3-1=(t-1)(t^2+t+1)$ reduces it to $(t^2-t+1)/(1-t)$. [F1, step 2.1, algebra]

3.2 In the cumulative basis, $g_1=x_1$ and $g_2=x_1x_2$. The positive Artin rule gives $\sigma_1(g_1)=g_2g_1^{-1}$ and fixes $g_2$. The Fox row of $g_2g_1^{-1}$ is $(-g_2g_1^{-1},1)$, which evaluates to $(-t,1)$ under the trivial representation and equal strand colors; the fixed boundary word contributes the second row $(0,1)$. Therefore the reduced block for $\sigma_1$ is $[-t]$. For automorphisms $\beta,\gamma$ of the free group, the product and inverse recursions imply $\partial(\beta(u))/\partial g_j=\sum_k\beta(\partial u/\partial g_k)\,\partial(\beta(g_k))/\partial g_j$: it holds for generators and inverses, and the product rule extends it to every word by induction. After evaluation, the braid-preserved color map makes coefficient substitution by $\beta$ leave the coefficients unchanged, so the full Fox matrices compose by matrix multiplication; their block form has bottom row $(0,1)$, so the reduced scalar blocks multiply. The two strands close to one component, hence this coloring is preserved, and the reduced block for $\sigma_1^3$ is $[-t]^3=[-t^3]$. [F1, F3, step 2.1, induction]

4.1 The fraction-field $d_1$ has the invertible block $t^3-1$, so it is onto. The deleted Fox minor from step 3.1 is nonzero, so $d_2$ is injective; since the chain dimensions are $1,2,1$ and $d_1d_2=0$, its image is the one-dimensional kernel of $d_1$. The complex is acyclic. Moreover, any Laurent-ring $1$-cycle becomes a boundary over $\mathbb Q(t)$; clearing its denominator and using that the chain module is free over the domain $\mathbb Q[t^{\pm1}]$ shows that the cycle's homology class is annihilated by a nonzero Laurent polynomial. Thus the degree-one Laurent-ring homology is torsion, and the hypotheses of the exterior-spine Wada theorem hold. [F1, step 3.1, algebra]

5.1 Apply [F2] to the certified spine and admissible $a$ column. Its Wada quotient from step 3.1 represents the twisted torsion class. This identifies the displayed rational function with the torsion computed from the torus-spine certificate. [F2, step 3.1, step 4.1]

6.1 The Burau numerator and boundary denominator are $N=\det([-t^3]-[1])=-(t^3+1)$ and $D=t^2-1$. Hence $N/D=-(t^3+1)/(t^2-1)=-((t+1)(t^2-t+1))/((t-1)(t+1))=(t^2-t+1)/(1-t)$. This is exactly the quotient in step 3.1, so the finite determinant calculation equals the based-spine torsion value. If the compatible axis-filling certificate is supplied as well, [F5] identifies the same ratio with the procedure output. [F1, F5, step 3.2, step 3.1, algebra] ∎
