---
id: def-upsilon-function-from-filtered-complex
kind: definition
title: "The Upsilon function from the filtered knot Floer complex"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-admissible-pointed-heegaard-floer-data
  - def-grid-diagram-for-an-oriented-knot
  - def-knot-floer-filtration-and-tau
  - def-epsilon-from-filtered-knot-floer-complex
  - def-axiom-of-choice
  - lem-upsilon-real-series-valuation-domain
  - thm-grid-homology-independent-of-grid-and-equals-knot-floer
dependency_level: 9
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "The finite Maslov-zero minimax uses no choice. The full-AC edge is retained from KT-42; the in-run analytic grid supplier states ACω, which is not being upgraded to full AC."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Peter S. Ozsvath, Andras I. Stipsicz, and Zoltan Szabo, Concordance homomorphisms from knot Floer homology, §§3–5"
      url: "https://arxiv.org/pdf/1407.1795"
      locator: "Definitions 3.4 and 3.6; §§4–5, t-modification, the non-torsion grading, and piecewise linearity"
    - title: "Charles Livingston, Notes on the knot concordance invariant Upsilon"
      url: "https://www.maths.gla.ac.uk/~mpowell/Upsilon-revised.pdf"
      locator: " §§2–7; the CFK-infinity cycle minimax definition, finite support, and piecewise linearity"
---

## Definition

Let $K\subset S^3$ be a smooth oriented knot and $C=\mathrm{CFK}^{\infty}(K)$ a finitely generated free $\mathbb F_2[U,U^{-1}]$ complex. Choose a finite homogeneous basis $\{x_r\}$, with $M(x_r)$ and Alexander filtration $A(x_r)$. The translate $U^k x_r$ has Maslov grading $M(x_r)-2k$ and filtration coordinates $(i,j)=(-k,A(x_r)-k)$. The total homology is $\mathbb F_2[U,U^{-1}]$; use the standard normalization in which its Maslov-zero tower generator first appears at algebraic filtration level $i=0$, and denote it by $\xi_K$.

For $t\in[0,2]$ and a nonzero finite chain $z$, define
$$ F_t(U^k x_r)=(1-t/2)(-k)+(t/2)(A(x_r)-k),\qquad F_t(z)=\max\{F_t(U^k x_r):U^k x_r\text{ has nonzero coefficient in }z\}. $$
Let $\mathcal Z_0(C)$ be the set of Maslov-zero cycles representing $\xi_K$. Set
$$ \nu_t(C)=\min_{z\in\mathcal Z_0(C)}F_t(z),\qquad \Upsilon_K(t)=-2\nu_t(C). $$
The minimum is over cycles representing the normalized homology generator, not over individual basis terms. For comparison, let $C^-(K)$ be the $\mathbb F_2[U]$-span of the chosen basis and form its $t$-modified complex over the ring $\mathcal R$ of formal sums $\sum_{\alpha\in S}c_\alpha v^\alpha$ whose support $S\subset[0,\infty)$ is well-ordered (every nonempty subset of $S$ has a least element). The coefficient extension uses $U=v^2$. In the extended Laurent complex, $v$ lowers both filtration coordinates by $1/2$ and Maslov grading by one, so a diagonal $U$-translation lowers the extended $t$-grading by two. On arbitrary homogeneous Laurent terms this grading is $M-t(j-i)$; the formula $M-tA$ below is specified on the chosen generators at $i=0$. A homogeneous generator $x$ has $t$-grading $M(x)-tA(x)$, extended by $\operatorname{gr}_t(v^\alpha x)=\operatorname{gr}_t(x)-\alpha$. If a term $U^k y$ occurs in $\partial x$, its $t$-modified differential coefficient is $v^{\operatorname{gr}_t(y)-\operatorname{gr}_t(x)+1}$; thus for $\partial x=\sum_y c_{xy}U^{(M(y)-M(x)+1)/2}y$, define $\partial_t x=\sum_y c_{xy}v^{\operatorname{gr}_t(y)-\operatorname{gr}_t(x)+1}y$. This differential lowers $t$-grading by one. The comparison between its non-torsion tower grading and the finite cycle minimum is the separate filtered tower-splitting claim.

## Definition references

[[lem-upsilon-real-series-valuation-domain|The real-exponent coefficient ring and its field of fractions]]

[[def-knot-floer-filtration-and-tau|The diagram-specific knot Floer filtration and tau convention]]

[Ozsvath, Stipsicz, and Szabo, *Concordance homomorphisms from knot Floer homology*, §§3–5](https://arxiv.org/pdf/1407.1795)

[Livingston, *Notes on the knot concordance invariant Upsilon*, §§2–7](https://www.maths.gla.ac.uk/~mpowell/Upsilon-revised.pdf)

## Facts & Assumptions

**Given:** A finitely generated free bifiltered knot Floer complex $C$ whose total homology has a normalized Maslov-zero generator, as stated in the definition.

[A1] [[def-knot-floer-filtration-and-tau]]: that item defines a diagram-specific hat threshold and does not itself prove diagram/surface independence or supply the Laurent filtration comparison. The current [[thm-grid-homology-independent-of-grid-and-equals-knot-floer]] separately supplies a normalized grid-to-analytic filtered comparison; localization gives the Laurent comparison under its stated prerequisites. This Definition remains algebraic on a supplied normalized complex.

## Proof

1.1 For each of the finitely many basis generators $x_r$, at most one Laurent translate has Maslov grading zero, since $M(x_r)-2k=0$ determines $k$ uniquely when it has an integer solution. Thus the Maslov-zero chain group is finite-dimensional over $\mathbb F_2$. A finite chain represents $\xi_K$, so $\mathcal Z_0(C)$ is nonempty; being a subset of a finite vector space, it is finite. The minimum defining $\nu_t$ therefore exists for every $t\in[0,2]$. The algebraic argument here does not establish knot-model independence; the current grid comparison theorem supplies the normalized comparison for its stated grid and analytic models. [given, A1, algebra]

2.1 If $f:C\to C'$ is a bifiltered chain homotopy equivalence, then it sends every Maslov-zero cycle representing $\xi_K$ to one representing the normalized generator of $C'$. Each term of $f(z)$ has both filtration coordinates no larger than the corresponding input term, so $F_t(f(z))\le F_t(z)$ for $0\le t\le2$. Hence $\nu_t(C')\le\nu_t(C)$. Applying the same argument to a filtered inverse gives the reverse inequality, so $\nu_t(C')=\nu_t(C)$. [given, step 1.1, algebra]

3.1 For a fixed cycle support, $F_t(z)$ is the maximum of finitely many affine functions of $t$. Since $\mathcal Z_0(C)$ is finite, $\nu_t$ is the minimum of finitely many such finite maxima. A finite minimum or maximum of affine functions is continuous and piecewise linear with finitely many breakpoints. Therefore $\Upsilon_K(t)=-2\nu_t(C)$ is continuous and piecewise linear on $[0,2]$. [given, step 1.1, step 2.1, algebra]

4.1 For a differential term $U^k y$ in $\partial x$, the $i$-filtration gives $k\ge0$ and the $j$-filtration gives $A(y)-A(x)\le k$. The Maslov grading gives $M(y)-M(x)+1=2k$, so its exponent in $\partial_t x$ is $\operatorname{gr}_t(y)-\operatorname{gr}_t(x)+1=2k-t(A(y)-A(x))\ge(2-t)k\ge0$. For a two-step path $x\to y\to z$, the two exponents sum to $\operatorname{gr}_t(z)-\operatorname{gr}_t(x)+2$, independent of $y$. Thus the coefficient of each $z$ in $\partial_t^2x$ is the coefficient of $z$ in $\partial^2x$ multiplied by the same power of $v$; since $\partial^2=0$, $\partial_t^2=0$. [given, step 3.1, algebra] ∎

## Unresolved proof obligations

The diagramwise tau definition alone does not supply a normalized $\mathrm{CFK}^{\infty}$ model. The current [[thm-grid-homology-independent-of-grid-and-equals-knot-floer]] has an authored proof of the normalized grid-to-analytic comparison; localization gives the Laurent comparison under that supplier's stated prerequisites. The filtered tower-splitting item supplies the separate $t$-modified grading identification. This definition makes no assertion that $s=2\tau$ and does not itself prove model invariance.
