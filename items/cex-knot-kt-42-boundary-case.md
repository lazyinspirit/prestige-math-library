---
id: cex-knot-kt-42-boundary-case
kind: counterexample
title: "A low-weight basis term does not define Upsilon"
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
      locator: "Theorem 2.10 and Theorem 1.15; explicit trefoil staircase complex"
    - title: "Charles Livingston, Notes on the knot concordance invariant Upsilon, §§4–6"
      url: "https://www.maths.gla.ac.uk/~mpowell/Upsilon-revised.pdf"
      locator: "Finite minimax definition and staircase computation"
---
## Statement refuted

Let $C=\mathrm{CFK}^{\infty}(T_{2,3})$ be the right-handed trefoil staircase on generators $x_0,x_1,x_2$ with $(M,A)(x_0)=(0,1)$, $(M,A)(x_1)=(-1,0)$, $(M,A)(x_2)=(-2,-1)$ and differential $\partial x_1=Ux_0+x_2$, $\partial x_0=\partial x_2=0$. The claim that $\Upsilon_{T_{2,3}}(1)$ is obtained by minimizing $F_1(x)$ over the individual displayed basis terms $x_0,x_1,x_2$, instead of over Maslov-zero cycles representing the normalized generator, is false. Under the diagonal-grid convention, every grid diagram of the trefoil also has grid Upsilon value $-1$ at $t=1$.

## Statement references

[[def-upsilon-function-from-filtered-complex|The cycle-minimax definition, including the normalized-generator condition]]

[Ozsvath, Stipsicz, and Zoltan Szabo, *Concordance homomorphisms from knot Floer homology*, §§2 and 6](https://arxiv.org/pdf/1407.1795)

[Livingston, *Notes on the knot concordance invariant Upsilon*, §§4–6](https://www.maths.gla.ac.uk/~mpowell/Upsilon-revised.pdf)

## Facts & Assumptions

**Given:** The explicitly displayed right-handed trefoil staircase and the definition of $F_1$ on a finite chain.

[F1] [[def-upsilon-function-from-filtered-complex]]: $F_1(z)$ is the maximum weight among terms in the support of $z$, and $\nu_1$ minimizes this value over Maslov-zero cycles representing the normalized generator.

[F2] [[thm-grid-upsilon-equals-oss-upsilon]] now contains a proof of the grid-value comparison using the normalized grid/Heegaard supplier, whose own current Proof is present and whose [F1]–[F5] prerequisites remain explicit. MOS Proposition 2.3 supplies the chosen-variable filtered comparison and tilde-homology $V$-factor, and Theorem 3.3 identifies the grid filtered complex with the knot filtration; the current in-run comparison proof supplies the chain-level collapse factor and its absolute normalization argument.

## Counterexample

1.1 The only Maslov-zero basis terms in the displayed staircase are $x_0$ and $U^{-1}x_2$; $x_1$ has odd Maslov parity, so no integral $U$-translate of $x_1$ has Maslov grading zero. Both even-degree terms are cycles, and $\partial(U^{-1}x_1)=x_0+U^{-1}x_2$ shows they represent the same nonzero generator. Their coordinates are $(0,1)$ and $(1,0)$, each of $F_1$-weight $1/2$. The sum is a boundary, so every Maslov-zero cycle representing the normalized generator has filtration $1/2$. Thus $\nu_1=1/2$ and $\Upsilon(1)=-2(1/2)=-1$. [given, F1, algebra]

2.1 The displayed basis term $x_2$ has coordinates $(0,-1)$ and weight $F_1(x_2)=-1/2$, which is less than $1/2$. It has Maslov grading $-2$, so it is excluded from the Maslov-zero representative set; although it is a cycle, its homology class is not the normalized degree-zero generator. The false rule would return $-2(-1/2)=+1$, contradicting step 1.1. [given, F1, step 1.1, algebra]

3.1 By [F2], the diagonal grid complex has the same Upsilon value as the original invariant, so step 1.1 gives the stated grid value $-1$. The grid comparison uses the supplier prerequisites recorded in [F2]. [given, F2, step 1.1, algebra] ∎

## Unresolved proof obligations

The finite staircase refutation is complete. Its right-handed trefoil identification is supplied by the signed three-crossing grid proof in [[lem-epsilon-stable-equivalence-and-not-a-homomorphism]], step 1.4, together with that item's finite staircase computation. The universal grid-value clause is supplied by [F2] under the comparison prerequisites it records; the earlier missing-comparison escalation is no longer current.
