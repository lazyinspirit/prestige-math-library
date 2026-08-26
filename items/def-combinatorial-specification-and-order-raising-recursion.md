---
id: def-combinatorial-specification-and-order-raising-recursion
kind: definition
title: "Combinatorial specifications and order-raising recursive specifications"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-combinatorial-class-and-ordinary-generating-function, def-formal-order-and-x-adic-topology]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Philippe Flajolet and Robert Sedgewick, Analytic Combinatorics"
      url: "https://ac.cs.princeton.edu/home/AC.pdf"
    - title: "Stephen Melczer, An Invitation to Enumeration, Chapter 5: Combinatorial Constructions"
      url: "https://enumeration.ca/toolbox/combinatorial-constructions/"
pipeline_run: null
---

## Definition

Fix a commutative ring $R$.

A **combinatorial specification** for an unknown class $\mathcal{Y}$ is an
equation

$$\mathcal{Y} = \Phi(\mathcal{Y})$$

whose right-hand side is built from already defined classes and from
$\mathcal{Y}$ using symbolic constructions whose generating-function operations
are defined over $R$. Replacing those constructions by their generating-function
operations produces an associated operation $F_\Phi(f)$ whenever all the
required formal-series operations are defined at $f$. Write

$$D_\Phi:=\{f\in R\llbracket x\rrbracket:F_\Phi(f)\text{ is defined}\}$$

for its natural domain. For example, a factor $\operatorname{SEQ}(\mathcal Y)$
contributes $(1-f)^{-1}$, which is defined precisely when the constant
coefficient of $1-f$ is a unit; being defined over $R$ does not make this
operation total on $R\llbracket x\rrbracket$.

Thus a specification using a construction whose series formula needs rational
scalars, such as $\operatorname{CYC}$, is admitted here only when $R$ is a
commutative $\mathbb Q$-algebra and the input satisfies that construction's
order and constant-term conditions.

A nonempty set $D\subseteq D_\Phi$ is an **admissible domain** when
$F_\Phi(D)\subseteq D$. The specification is **order-raising on $D$** when

$$\operatorname{ord}_x\bigl(F_\Phi(f)-F_\Phi(g)\bigr) \ge \operatorname{ord}_x(f-g)+1$$

for all $f,g\in D$. When $D=R\llbracket x\rrbracket$, so that $F_\Phi$ is a
total endomorphism of the whole series ring, we call the specification simply
an **order-raising recursive specification** and write

$$F_\Phi:R\llbracket x\rrbracket\longrightarrow R\llbracket x\rrbracket.$$

This is the $x$-adic contraction condition. It says that changing the input only
changes the output in strictly higher order, so successive coefficient prefixes
stabilize. Specifications on a proper admissible domain require the corresponding
invariant-domain fixed-point theorem; the total-map theorem developed here
applies to the unqualified notion.
