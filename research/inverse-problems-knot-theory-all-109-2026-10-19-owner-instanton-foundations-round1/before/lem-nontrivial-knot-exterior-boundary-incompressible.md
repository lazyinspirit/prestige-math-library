---
id: lem-nontrivial-knot-exterior-boundary-incompressible
kind: lemma
title: "The boundary of a nontrivial knot exterior is incompressible"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-knot-exterior
  - def-knot-meridian-and-preferred-longitude
  - thm-knot-exterior-homology-and-longitude
  - lem-essential-curves-on-torus-with-same-primitive-class-are-isotopic
  - def-axiom-of-choice
  - def-countable-choice
proof_strategy: direct
axiom_use: "Assumes full AC through the knot-exterior homology supplier; the torus-slope and annulus arguments are choice-free."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Alessia Cattabriga and Stefano Francaviglia, Knot Theory and Applications: Lecture Notes, §4.4"
      url: "https://poisson.phc.dm.unipi.it/~camponovo/libri/knot.pdf"
      locator: "§4.4, Lemma 4.4.1, Exercise 4.4.2, and Theorem 4.4.8."
    - title: "P. B. Kronheimer and T. S. Mrowka, Knots, sutures and excision, §4.3"
      url: "https://arxiv.org/pdf/0807.4891"
---

## Statement

Assume the Axiom of Choice. Let $K\subset S^3$ be a smooth knot that is not ambient isotopic to the standard unknot, let $E_K$ be its chosen compact exterior, and let $T_K=\partial E_K$. There is no properly embedded disk $D\subset E_K$ whose boundary is a simple closed curve in $T_K$ that is not null-homotopic in $T_K$.

## Statement references

[[def-knot-exterior|Chosen compact knot exterior]]

[[def-knot-meridian-and-preferred-longitude|Meridian and preferred longitude]]

[[thm-knot-exterior-homology-and-longitude|Exterior homology and the preferred longitude]]

[Cattabriga–Francaviglia, *Knot Theory and Applications: Lecture Notes*, §4.4](https://poisson.phc.dm.unipi.it/~camponovo/libri/knot.pdf)

[Kronheimer–Mrowka, *Knots, sutures and excision* (2008), §4.3](https://arxiv.org/pdf/0807.4891)

## Facts & Assumptions

**Given:** Full AC, a smooth nontrivial knot $K$, its chosen exterior $E_K$, and a properly embedded disk $D$ whose boundary $c=\partial D$ is essential on $T_K$.

[F1] The Axiom of Choice is the assertion that every set-indexed family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[F2] The boundary torus has a basis $[\mu],[\lambda]$ for which $[\mu]$ generates $H_1(E_K;\mathbb Z)$ and the kernel of $H_1(T_K;\mathbb Z)\to H_1(E_K;\mathbb Z)$ is $\mathbb Z[\lambda]$; the preferred longitude has degree one under projection to the oriented core ([[thm-knot-exterior-homology-and-longitude]], Statement; [[def-knot-meridian-and-preferred-longitude]], Definition).

[F3] Essential simple curves on a torus with the same primitive homology class up to orientation are isotopic on the torus ([[lem-essential-curves-on-torus-with-same-primitive-class-are-isotopic]], Statement).

## Proof

1.1 Under the full-AC hypothesis [F1], the supplier in [F2] applies. Since $c$ is essential on the torus, it is nonseparating: a separating simple curve on a genus-one surface cuts off a disk on one side and is null-homotopic. Cutting the torus along $c$ therefore gives a connected orientable surface with two boundary circles and Euler characteristic zero, hence an annulus. An embedded arc joining its two boundary circles closes after regluing to a loop meeting $c$ transversely once. The algebraic intersection is therefore $\pm1$, so $[c]$ is primitive in $H_1(T_K;\mathbb Z)$. [F1, F2, given, construct, algebra]

1.2 Because $c=\partial D$, its image in $H_1(E_K;\mathbb Z)$ is zero. By [F2], write $[c]=q[\lambda]$ for an integer $q$. Since both $[c]$ and $[\lambda]$ are primitive, $q=\pm1$. Orient $c$ to make $[c]=[\lambda]$. By [F3], $c$ is isotopic on $T_K$ to a chosen simple representative of the preferred longitude. [F2, F3, step 1.1, algebra]

2.1 In product coordinates $N(K)\cong S^1\times D^2$, a degree-one parallel curve has primitive homology class $(1,k)$ for some integer $k$. The standard graph $\gamma_k(t)=(e^{it},e^{ikt})$ has that same class, so [F3] gives an isotopy of the curve to $\gamma_k$. This isotopy traces an annulus on $T_K$. The radial annulus $(s,t)\mapsto(e^{it},s e^{ikt})$, $0\le s\le1$, is embedded and joins $\gamma_k$ to the core $K$. Concatenating the two annuli gives an embedded annulus in $N(K)$ from $c$ to $K$. [F2, F3, step 1.2, construct]

2.2 The disk $D$ and that annulus meet only along $c$. Their union, after smoothing the corner along $c$, is an embedded disk in $S^3$ with boundary $K$. This makes $K$ the unknot, contrary to the hypothesis. Therefore no such disk $D$ exists. [given, step 2.1, construct] ∎
