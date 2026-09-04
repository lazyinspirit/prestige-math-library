---
id: lem-parameter-power-series-subring-makes-ring-finite
kind: lemma
title: "Parameters make a complete local domain finite over the image of a power-series map"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-equicharacteristic-complete-local-ring-has-coefficient-field, def-system-of-parameters-and-parameter-ideal, lem-parameter-ideal-equivalent-m-primary, lem-formal-power-series-evaluation-unique-continuous-map, thm-complete-nakayama-lemma, def-dependent-choice]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Melvin Hochster, The structure theory of complete local rings"
      url: "https://sites.lsa.umich.edu/hochster/wp-content/uploads/sites/1337/2026/04/Structure.pdf"
    - title: "The Stacks Project, Section 10.160: The Cohen structure theorem"
      url: "https://stacks.math.columbia.edu/tag/0323"
pipeline_run: null
---

## Statement

Assume the Axiom of Dependent Choice.

Let $(A,\mathfrak m)$ be a complete equicharacteristic Noetherian local domain
of dimension $d$, let $k \subseteq A$ be a coefficient field, and let
$x_1,\ldots,x_d$ be a system of parameters. Then the continuous map
$$\phi:k\llbracket X_1,\ldots,X_d\rrbracket \to A, \qquad X_i \mapsto x_i,$$
has image $A_0$ such that $A$ is a finite $A_0$-module.

## Facts & Assumptions

**Given:** A complete equicharacteristic Noetherian local domain $(A,\mathfrak m)$
of dimension $d$, a coefficient field $k \subseteq A$, a system of parameters
$x_1,\ldots,x_d$, and the Axiom of Dependent Choice.

[L1] A system of parameters generates an $\mathfrak m$-primary ideal
([[def-system-of-parameters-and-parameter-ideal]], [[lem-parameter-ideal-equivalent-m-primary]]).

[L2] The continuous map from the formal power-series ring exists
([[lem-formal-power-series-evaluation-unique-continuous-map]]).

[L3] Complete Nakayama lifts generators modulo an ideal to actual generators
([[thm-complete-nakayama-lemma]]).

## Proof

**Proof technique:** choose finitely many residue representatives modulo the parameter ideal and apply complete Nakayama over the source power-series ring.

1.1 Let $J=(x_1,\ldots,x_d)$. By [L1], $J$ is $\mathfrak m$-primary, so $A/J$ has finite length and hence is a finite-dimensional $k$-vector space. Choose lifts $y_1,\ldots,y_r \in A$ of a $k$-basis of $A/J$. [L1, given, choose]

2.1 By [L2], the map $\phi$ exists. Put $B=k\llbracket X_1,\ldots,X_d\rrbracket$, $I_0=(X_1,\ldots,X_d)$, and $A_0=\phi(B)$. Regard $A$ as a $B$-module through $\phi$. Then $I_0A=J$, and step 1.1 says that the classes of $y_1,\ldots,y_r$ generate $A/I_0A=A/J$ as a module over $B/I_0=k$. [L2, step 1.1, algebra]

3.1 The ring $B$ is $I_0$-adically complete by its coefficientwise formal-series construction. The $B$-module $A$ is $I_0$-adically separated: indeed, $I_0^nA=J^n\subseteq\mathfrak m^n$ for every $n$, and $A$ is $\mathfrak m$-adically separated. Therefore [L3] applies to the $B$-module $A$ and the ideal $I_0$, showing that $y_1,\ldots,y_r$ generate $A$ as a $B$-module. Since the $B$-action factors through $A_0=\phi(B)$, the same elements generate $A$ as an $A_0$-module. Hence $A$ is finite over $A_0$. [L3, step 2.1, given]

4.1 Therefore a complete equicharacteristic local domain is finite over the image of the parameter power-series map determined by any system of parameters and a coefficient field. [step 3.1] ∎
