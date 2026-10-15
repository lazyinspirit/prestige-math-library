---
id: cex-rpm-h-nonhausdorff-first-class-quotient
kind: counterexample
title: "A regular first-class quotient can be non-Hausdorff"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 3
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: construction
deps: [def-countable-choice, def-rpm-h-cotangent-phase-space, def-rpm-h-regular-constraint-system, thm-rpm-h-first-class-local-reduction]
dependency_roles:
  def-countable-choice: mathematical-premise
  def-rpm-h-cotangent-phase-space: mathematical-premise
  def-rpm-h-regular-constraint-system: mathematical-premise
  thm-rpm-h-first-class-local-reduction: mathematical-premise
sources:
  references:
    - title: "Henneaux, Teitelboim and Regge, Constrained Hamiltonian Systems, Part 1"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0e1d11ee-2741-4da4-83ed-b7cabc0cd7d6/download"
      locator: "Chapter I, printed pp. 7–11, first-class constraints and gauge orbits."
physical_scope: "Explicit mathematical counterexample on the cotangent bundle of the compact base $T^2$; the total cotangent space is noncompact. No physical claim about a particle model."
---

## Statement refuted

Every regular first-class constraint system has a Hausdorff global space of characteristic-flow orbits on its constraint surface, endowed with the quotient topology.

## Example

Let $T^2=\mathbb R^2/\mathbb Z^2$ with periodic coordinates $x,y$, irrational $a\in\mathbb R\setminus\mathbb Q$, and canonical cotangent coordinates $(x,y,p_x,p_y)$. On $T^*T^2$ use $\omega=dx\wedge dp_x+dy\wedge dp_y$ and the single constraint $C=p_x+a p_y=0$. It is regular and first class. Its flow on the constraint surface is $(x,y,p_x,p_y)\mapsto(x+s,y+as,p_x,p_y)$. Every orbit on a fixed momentum fibre is dense in that torus, and the orbit quotient is not Hausdorff. Thus regular first-class constraints need not produce a Hausdorff global quotient, despite the local result of [[thm-rpm-h-first-class-local-reduction]].

## Facts & Assumptions

**Given:** The standard torus as a periodic smooth quotient, an irrational real number $a$, its cotangent bundle with canonical form, and the regular level $C=0$.

[A1] [[def-countable-choice]]: Assume countable choice ACω, meaning every sequence of nonempty sets has a choice function; no full Axiom of Choice is assumed.

[F1] [[def-rpm-h-cotangent-phase-space]]: cotangent coordinates carry $\omega=dx^i\wedge dp_i$, with Hamiltonian convention $\iota_{X_C}\omega=dC$.

[F2] [[def-rpm-h-regular-constraint-system]]: a regular constraint level is an embedded hypersurface; a one-constraint system is first class when its self-bracket vanishes.

[F3] [[thm-rpm-h-first-class-local-reduction]]: regular first-class constraints have local symplectic leaf spaces, with no global Hausdorff conclusion.

## Counterexample

1.1 The periodic quotient atlas makes $T^2$ a smooth manifold. By [F1], its cotangent form is $\omega=dx\wedge dp_x+dy\wedge dp_y$. The differential $dC=dp_x+a\,dp_y$ is nowhere zero, so $C^{-1}(0)$ is a regular embedded hypersurface. The canonical bracket is skew, hence $\{C,C\}=0$ and the single constraint is first class. [given, A1, F1, F2, algebra, construct]

2.1 Contraction with $dx\wedge dp_x+dy\wedge dp_y$ gives $X_C=\partial_x+a\partial_y$. Integrating this constant vector field yields the stated flow and leaves momenta fixed. [given, F1, step 1.1, algebra]

3.1 Fix a starting point $(x_0,y_0)$ and any target first coordinate $u\in[0,1)$. For each $n\in\mathbb Z$, the flow parameter $s=n-x_0+u$ makes the first coordinate equal to $u$ modulo one and the second equal to $y_0+a(n-x_0+u)$ modulo one. The residues $na\bmod1$ are dense: for any integer $N\ge2$, divide $[0,1)$ into $N$ half-open intervals of length $1/N$. Two of the $N+1$ residues $0,a,\ldots,Na\bmod1$ lie in one interval, so for some nonzero integer $k$ and integer $r$ we have $0<\delta:=|ka-r|<1/N$; the strict lower bound follows from irrationality. Replacing $k$ by $-k$ if needed, $\delta$ is an integer multiple of $a$ modulo one. The residues $j\delta$ for $j=0,1,\ldots,\lfloor1/\delta\rfloor$ have gaps at most $\delta$ around the unit interval, so they form a $1/N$-net. Since $N$ is arbitrary, the multiples of $a$ are dense modulo one. Therefore the orbit is dense in the second coordinate for the chosen $u$; as $u$ was arbitrary, the flow orbit is dense in $T^2$. [given, step 2.1, algebra]

4.1 The orbits through $(0,0,0,0)$ and $(0,1/2,0,0)$ are distinct: equality would require integers $n,k$ with $an+k=1/2$; if $n\ne0$ this would make $a$ rational, and if $n=0$ it would assert that an integer equals $1/2$. Both orbits are dense by step 3.1. Let $U$ be a saturated open subset of the constraint surface that meets the fixed-momentum torus. Its intersection with that torus is nonempty, open, and saturated. Its complement is closed and saturated; if nonempty, it contains a whole dense orbit and hence the whole torus. Therefore the intersection is the whole torus. Any quotient neighborhoods of the two distinct orbit classes have such preimages and therefore intersect, so the orbit space is non-Hausdorff. This does not contradict the local symplectic leaf spaces in [F3]. [F3, step 3.1, algebra] ∎

