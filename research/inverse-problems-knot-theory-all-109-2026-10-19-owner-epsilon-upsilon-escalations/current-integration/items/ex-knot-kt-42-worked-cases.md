---
id: ex-knot-kt-42-worked-cases
kind: example
title: "Epsilon and Upsilon for the trefoil and its mirror"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-epsilon-from-filtered-knot-floer-complex
  - def-upsilon-function-from-filtered-complex
  - thm-epsilon-upsilon-are-concordance-homomorphism-data
  - lem-epsilon-stable-equivalence-and-not-a-homomorphism
  - thm-upsilon-additivity-mirror-and-genus-bound
  - thm-grid-upsilon-equals-oss-upsilon
  - def-knot-floer-filtration-and-tau
  - lem-knot-floer-duality-and-filtration-swap
  - def-countable-choice
  - def-axiom-of-choice
dependency_level: 13
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Peter S. Ozsvath, Andras I. Stipsicz, and Zoltan Szabo, Concordance homomorphisms from knot Floer homology, §§2 and 6"
      url: "https://arxiv.org/pdf/1407.1795"
      locator: "Theorem 2.10 and Theorem 1.15; the right-handed trefoil staircase and torus-knot Upsilon calculation"
    - title: "Peter S. Ozsvath, Andras I. Stipsicz, and Zoltan Szabo, Grid Homology for Knots and Links, §§4.1–4.6 and 13.2"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
      locator: "Grid staircase model, Maslov/Alexander gradings, and filtered grid-to-knot Floer comparison setup"
---

## Example

Let $T_{2,3}$ be the right-handed trefoil and $-T_{2,3}$ its reverse mirror. A filtered basis for $\mathrm{CFK}^{\infty}(T_{2,3})$ is $x_0,x_1,x_2$ with $(M,A)(x_0)=(0,1)$, $(M,A)(x_1)=(-1,0)$, $(M,A)(x_2)=(-2,-1)$ and differential $\partial x_1=Ux_0+x_2$, $\partial x_0=\partial x_2=0$. Under the conventions of this page,
$$ \epsilon(T_{2,3})=1,\qquad \Upsilon_{T_{2,3}}(t)=\begin{cases}-t,&0\le t\le1,\\ t-2,&1\le t\le2.\end{cases} $$
The graph has its unique interior breakpoint at $t=1$. For the reverse mirror, $\epsilon(-T_{2,3})=-1$ and $\Upsilon_{-T_{2,3}}(t)=-\Upsilon_{T_{2,3}}(t)$.

## Example references

[[def-epsilon-from-filtered-knot-floer-complex|Epsilon sign convention]]

[[def-upsilon-function-from-filtered-complex|Cycle-minimax Upsilon convention]]

[Ozsvath, Stipsicz, and Szabo, *Concordance homomorphisms from knot Floer homology*, §§2 and 6](https://arxiv.org/pdf/1407.1795)

[Ozsvath, Stipsicz, and Szabo, *Grid Homology for Knots and Links*, §§4.1–4.6 and 13.2](https://web.math.princeton.edu/~petero/GridHomologyBook.pdf)

## Diagram

The horizontal and vertical coordinates are the algebraic and Alexander filtrations $(i,j)$. Arrows point from $x_1$ to the two terms in its differential, $Ux_0$ and $x_2$. The dotted vertex is the translated cycle $U^{-1}x_2$ used in the Upsilon minimax. All diagonal $U$-translates are omitted; the differential and filtration calculations in the proof use the displayed algebraic data, not the drawing.

```tikz
\begin{tikzpicture}[x=1.1cm,y=1.1cm,>=stealth]
  \draw[->] (-1.35,0) -- (1.65,0) node[right] {$i$};
  \draw[->] (0,-1.45) -- (0,1.55) node[above] {$j$};
  \node[circle,fill=black,inner sep=1.5pt,label=above left:$x_0$] at (0,1) {};
  \node[circle,fill=black,inner sep=1.5pt,label=above right:$x_1$] at (0,0) {};
  \node[circle,fill=black,inner sep=1.5pt,label=below left:$x_2$] at (0,-1) {};
  \node[circle,fill=black,inner sep=1.5pt,label=below:$Ux_0$] at (-1,0) {};
  \node[circle,draw=black,dashed,inner sep=1.7pt,label=below right:$U^{-1}x_2$] at (1,0) {};
  \draw[->] (0,0) -- (-0.82,0);
  \draw[->] (0,-0.08) -- (0,-0.82);
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** The displayed staircase complex, the epsilon map convention, and the Upsilon cycle-minimax definition.

[F1] [[def-epsilon-from-filtered-knot-floer-complex]]: epsilon is $1$ when the distinguished vertical class is a horizontal boundary, $-1$ when it is not a horizontal cycle, and $0$ when it is a horizontal cycle but not a boundary.

[F2] [[def-upsilon-function-from-filtered-complex]]: $\Upsilon=-2\nu_t$, where $\nu_t$ is the minimum $F_t$-level of a Maslov-zero cycle representing the normalized generator.

[A2] [[def-knot-floer-filtration-and-tau]]: the current tau threshold is defined for specified Heegaard data; its identification with the filtered complex used in this example is conditional on the unresolved model comparison.

[F3] [[lem-knot-floer-duality-and-filtration-swap]]: the reverse-mirror complex is filtered-chain-homotopy equivalent to the dual, which negates the two filtration coordinates; the current analytic proof remains conditional.

[A1] [[thm-grid-upsilon-equals-oss-upsilon]] (present draft, proof conditional): this example's grid realization is not independently verified until the grid/Heegaard comparison proof is supplied.

## Proof

1.1 In the vertical complex, the differential is $x_1\mapsto x_2$, so its degree-zero homology generator is $x_0$ and first appears at Alexander level $1$; under the specified-data threshold convention [A2], this gives $\tau(T_{2,3})=1$. For the exact epsilon maps at $s=1$, the target of $F_1$ contains $U^{-1}x_1$ with boundary $x_0$: its other differential term $U^{-1}x_2$ has $j<1$ and is killed there. Thus $F_1=0$. The source of $G_1$ contains the degree-zero cycle $x_0$, while $U^{-1}x_1$ has $i>0$ and is excluded, so that class survives and maps to the nonzero vertical class. Thus $G_1\ne0$ and the exact three-case definition gives epsilon $1$ for this complex. The identification of this staircase with the knot-level model remains conditional on the unresolved filtration-comparison interface. [given, A2, F1]

1.2 A Maslov-zero cycle representing the normalized total generator is either $x_0$ or $U^{-1}x_2$: the Maslov-zero chain group in the displayed basis is spanned by these two cycles, and $\partial(U^{-1}x_1)=x_0+U^{-1}x_2$ makes their homology classes equal. Their coordinates are $(0,1)$ and $(1,0)$, so their filtration levels are $t/2$ and $1-t/2$. Therefore $\nu_t=\min(t/2,1-t/2)$ and $\Upsilon_{T_{2,3}}(t)=-2\nu_t$, which gives the stated two linear pieces. They agree at $t=1$, where the slope changes. [given, F2, algebra]

2.1 The algebraic Laurent dual of the displayed complex has generators $x_0^*,x_1^*,x_2^*$ at Maslov/Alexander values $(0,-1),(1,0),(2,1)$ and differential $\partial x_0^*=Ux_1^*$, $\partial x_2^*=x_1^*$, $\partial x_1^*=0$. In its vertical complex $x_2^*$ maps to $x_1^*$, leaving $x_0^*$ as generator at Alexander level $-1$. At $s=-1$, the $F_{-1}$ target kills $Ux_1^*$ because $i<0$, so $x_0^*$ becomes a cycle; its only degree-one basis vector is $x_1^*$ with zero differential, so the class is not a boundary and $F_{-1}\ne0$. The $G_{-1}$ source has only $x_0^*$ in degree zero, and its differential $Ux_1^*$ is retained; $Ux_2^*$ lies above $j=-1$ and is excluded. Hence $G_{-1}=0$ and the exact epsilon convention gives $-1$. The degree-zero chain space has basis $x_0^*,Ux_2^*$; their individual differentials are both $Ux_1^*$, so the only nonzero cycle is $x_0^*+Ux_2^*$, and it represents the normalized generator. Its two terms have coordinates $(0,-1)$ and $(-1,0)$, giving $\nu_t^*=\max(-t/2,-1+t/2)=-\min(t/2,1-t/2)$. Thus its Upsilon is the negative of the value in step 1.2 by an explicit cycle computation. Interpreting this dual as the actual reverse-mirror knot complex still requires the unresolved geometric duality [F3], and both knot-level values still require admission of the specific staircase from an actual diagram. [F1, F2, F3, step 1.2, algebra]

2.2 Under [A1], the same calculation is obtained from the diagonal grid complex after accounting for its $W^{\otimes(n-1)}$ factors, whose nonzero t-grade shifts are nonpositive on $[0,1]$. This last identification is conditional on the missing comparison proof. [given, A1, step 1.2, algebra]

## Unresolved proof obligations

The positive and algebraic-dual staircase arithmetic in steps 1.1–1.3 is local. The identification of that particular staircase with an admitted trefoil diagram remains a separate authoring obligation, and the knot-level dual identification and grid comparison are also held. Thus the full example remains escalated; a citation to a reported staircase is not a proof of its geometric admission.
