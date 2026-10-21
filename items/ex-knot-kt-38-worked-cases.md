---
id: ex-knot-kt-38-worked-cases
kind: example
title: Unknot, trefoils, and the 2-twisted positive Whitehead double
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - lem-knot-kt41-whitehead-double-values
  - lem-two-twisted-positive-whitehead-trefoil-double-has-s-two
  - def-lee-deformed-khovanov-complex
  - thm-lee-homology-of-a-knot-has-two-generators
  - def-rasmussen-s-invariant
  - cor-rasmussen-s-for-positive-knots
  - lem-rasmussen-s-mirror
  - lem-lee-cobordism-filtration-genus-bound
  - thm-rasmussen-s-bounds-smooth-four-ball-genus
  - def-smooth-and-topological-slice-genus
  - def-knot-floer-filtration-and-tau
dependency_level: 12
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
axiom_use: AC_omega is inherited through the s, tau and smooth-genus definitions; the unknot and trefoil calculations are finite.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: Jacob Rasmussen, Khovanov homology and the slice genus, arXiv:math/0402131v1
      url: https://arxiv.org/pdf/math/0402131v1
      locator: §§3.1 and 5.2, printed pp. 6–7 and 13–14
    - title: Curtis T. McMullen, 4-Manifolds, Stanford lecture notes
      url: https://web.stanford.edu/~cm5/4Mnotes.pdf
      locator: §§5.6 and 5.8, printed pp. 97–99 and 102–104
    - title: Matthew Hedden and Philip Ording, The Ozsváth–Szabó and Rasmussen concordance invariants are not equal, arXiv:math/0512348v1
      url: https://arxiv.org/pdf/math/0512348v1
      locator: Theorem 1.1 and §2.1, printed pp. 2–5
---

## Example

Assume the Axiom of Countable Choice. Let $U$ be the standard unknot, let $T_{2,3}$ be the closure of the positive two-strand braid with three crossings, and let $T_{2,3}^{\dagger}$ be its reverse mirror. Let $D_+(T_{2,3},2)$ denote the positive-clasped Whitehead double of $T_{2,3}$ with Hedden–Ording twist parameter $t=2$. Then
$$ s(U)=0,\qquad s(T_{2,3})=2,\qquad s(T_{2,3}^{\dagger})=-2,\qquad s(D_+(T_{2,3},2))=2,\qquad \tau(D_+(T_{2,3},2))=0. $$
The smooth four-ball genus of $T_{2,3}$ is $1$. Here $\tau$ is the integer knot Floer concordance invariant defined from the filtered knot Floer complex.


The trefoil is the closure of the positive two-strand braid shown schematically below. Both braid strands point downward; each crossing has the right-to-left segment passing over the left-to-right segment, in the positive Artin convention fixed by the crossing-sign definition. The outer arcs connect the corresponding top and bottom endpoints. This drawing specifies the braid closure but is not used in the value calculation.

```tikz
\begin{tikzpicture}[scale=0.85,>=stealth]
  % The two outside closure arcs connect like-named endpoints.
  \draw[->] (-1,0) .. controls (-2.0,0.3) and (-2.0,2.7) .. (-1,3);
  \draw[->] (1,0) .. controls (2.0,0.3) and (2.0,2.7) .. (1,3);
  % First braid strand: left-to-right, right-to-left, left-to-right.
  \draw (-1,3) .. controls (-1.55,2.8) and (1.55,2.2) .. (1,2)
                .. controls (1.55,1.8) and (-1.55,1.2) .. (-1,1)
                .. controls (-1.55,0.8) and (1.55,0.2) .. (1,0);
  % Second braid strand, initially right-to-left.
  \draw (1,3) .. controls (1.55,2.8) and (-1.55,2.2) .. (-1,2)
               .. controls (-1.55,1.8) and (1.55,1.2) .. (1,1)
               .. controls (1.55,0.8) and (-1.55,0.2) .. (-1,0);
  % Open the under-strand at each crossing, then redraw the positive over-strand.
  \draw[white,line width=5pt] (-0.3,2.65) -- (0.3,2.35);
  \draw[white,line width=5pt] (-0.3,1.65) -- (0.3,1.35);
  \draw[white,line width=5pt] (-0.3,0.65) -- (0.3,0.35);
  \draw[line width=1pt] (0.3,2.65) -- (-0.3,2.35);
  \draw[line width=1pt] (0.3,1.65) -- (-0.3,1.35);
  \draw[line width=1pt] (0.3,0.65) -- (-0.3,0.35);
  \draw[->] (-0.75,2.85) -- (-0.52,2.75);
  \draw[->] (0.75,2.85) -- (0.52,2.75);
  \draw[->] (0.75,1.85) -- (0.52,1.75);
  \draw[->] (-0.75,1.85) -- (-0.52,1.75);
  \draw[->] (-0.75,0.85) -- (-0.52,0.75);
  \draw[->] (0.75,0.85) -- (0.52,0.75);
  \node at (0,-0.42) {$\widehat{\sigma_1^3}=T_{2,3}$};
\end{tikzpicture}
```

## Example references

[[def-rasmussen-s-invariant|Rasmussen's s-invariant]]

[[cor-rasmussen-s-for-positive-knots|Positive-diagram formula]]

[[lem-rasmussen-s-mirror|Mirror sign rule]]

[[def-smooth-and-topological-slice-genus|Smooth four-ball genus]]

[[thm-rasmussen-s-bounds-smooth-four-ball-genus|Rasmussen's four-ball genus bound]]

[[def-knot-floer-filtration-and-tau|Knot Floer tau invariant]]

[Rasmussen, *Khovanov homology and the slice genus* (2004), §§3.1 and 5.2](https://arxiv.org/pdf/math/0402131v1)

[McMullen, *4-Manifolds*, §§5.6 and 5.8](https://web.stanford.edu/~cm5/4Mnotes.pdf)

[Hedden–Ording, *The Ozsváth–Szabó and Rasmussen concordance invariants are not equal* (2005), Theorem 1.1](https://arxiv.org/pdf/math/0512348v1)

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, the crossingless unknot, the standard positive trefoil diagram, and the positive-clasped Whitehead double with Hedden–Ording twist parameter $t=2$.

[F1] The standard unknot is the one-crossingless oriented knot with Lee circle algebra $A_L$ ([[def-lee-deformed-khovanov-complex]]).

[F2] A positive diagram with $n$ crossings and $k$ oriented-resolution circles has $s=n-k+1$ ([[cor-rasmussen-s-for-positive-knots]]).

[F3] The reverse mirror changes the sign of $s$ ([[lem-rasmussen-s-mirror]]).

[F4] The actual positive-clasped Whitehead double with Hedden–Ording twist parameter $t=2$ has $\tau(D_+(T_{2,3},2))=0$ and $s(D_+(T_{2,3},2))=2$. [[lem-knot-kt41-whitehead-double-values]]

[F5] The smooth four-ball genus is the minimum genus of a smooth orientable proper spanning surface ([[def-smooth-and-topological-slice-genus]]).

[A1] $\mathrm{AC}_\omega$ is the stated axiom branch for the knot invariants and smooth genus used in this Example ([[def-countable-choice]]).

[L1] [[lem-two-twisted-positive-whitehead-trefoil-double-has-s-two]] supplies the finite Lee computation for this exact Whitehead diagram. The joint numerical result [[lem-knot-kt41-whitehead-double-values]] also proves its independently normalized knot Floer value $\tau=0$ by the admitted twelve-grid and its full filtered quotient calculation. Both values in [F4] are proved inputs.

[F6] The general smooth four-ball bound is $|s(K)|\le2g_4^{\mathrm{sm}}(K)$ ([[thm-rasmussen-s-bounds-smooth-four-ball-genus]]).

## Proof

**Given:** The knots and conventions in the Example.


1.1 Under [A1], the crossingless unknot complex has one cohomological degree and basis $1,X$ in quantum degrees $1,-1$, so its two filtration levels are $1,-1$. The definition $s=s_{\max}-1=s_{\min}+1$ gives $s(U)=0$. [A1, F1, algebra]

1.2 The standard positive trefoil diagram has $n=3$ crossings and $k=2$ circles in its oriented resolution. Applying [F2] gives $s(T_{2,3})=3-2+1=2$. By [F3], its reverse mirror has value $-2$. [A1, F2, F3, algebra]

2.1 The trefoil Seifert construction from the given diagram starts with two disks and attaches three bands, so its connected orientable surface has Euler characteristic $2-3=-1$ and one boundary component. The identity $\chi=1-2g$ gives genus $1$. Push its interior into a collar of the boundary three-sphere in the four-ball, using a height function that vanishes only on the boundary knot; its graph is still an embedded orientable surface with the same boundary and genus. Thus [F5] gives $g_4^{\mathrm{sm}}(T_{2,3})\le1$. The bound in [F6] gives $2=|s(T_{2,3})|\le2g_4^{\mathrm{sm}}(T_{2,3})$, so its smooth four-ball genus is $1$. [F2, F5, F6, step 1.2, algebra]

3.1 Apply the joint value lemma [F4] to the actual positive-clasped double with Hedden–Ording twist parameter $t=2$. Its diagram and zero-longitude convention are exactly those stipulated here, so it gives $s(D_+(T_{2,3},2))=2$ and $\tau(D_+(T_{2,3},2))=0$. Together with the unknot and trefoil calculations and the smooth genus computation above, these are every value asserted in the Example. [A1, F4, L1, step 1.1, step 1.2, step 2.1, algebra] ∎
