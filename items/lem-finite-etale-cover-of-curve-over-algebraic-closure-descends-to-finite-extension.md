---
id: lem-finite-etale-cover-of-curve-over-algebraic-closure-descends-to-finite-extension
kind: lemma
title: Finite étale covers and finite diagrams descend to a finite Galois extension
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-algebraic-curve-over-field
  - def-etale-morphism-schemes
  - lem-finite-etale-algebra-module-presentation-and-rank
  - thm-faithfully-flat-descent-of-flatness
  - lem-differentials-base-change
  - lem-relative-spec-glues-affine-algebras
  - lem-etale-specialization-proper-geometric-finite-etale-invariance
  - thm-algebraic-extension-is-purely-inseparable-over-its-separable-closure
  - thm-galois-closures-exist-and-are-minimal
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: The Stacks Project, Limits of Schemes, §10 Lemma 10.1 and §8 Lemma 8.10
      url: https://stacks.math.columbia.edu/download/limits.pdf
---

## Statement

Assume the Axiom of Choice. Let $k$ be a field, let $\bar k$ be an algebraic closure, and let $C/k$ be a smooth geometrically connected curve. Every finite diagram of finite étale covers of $C_{\bar k}$, including finitely many specified cover morphisms and commuting identities, is the base change of such a diagram over $C_L$ for some finite Galois extension $L/k$ inside $\bar k$. In particular every possibly empty finite étale morphism $Y\to C_{\bar k}$ descends to a finite étale morphism over $C_L$. A specified isomorphism can be descended with its inverse.

## Statement references

[The Stacks Project, Limits of Schemes, §10 Lemma 10.1 and §8 Lemma 8.10](https://stacks.math.columbia.edu/download/limits.pdf)

[[def-algebraic-curve-over-field]]

[[def-etale-morphism-schemes]]

## Facts & Assumptions

**Given:** The Axiom of Choice, a field $k$ with algebraic closure $\bar k$, a smooth geometrically connected curve $C/k$, and the specified finite diagram of finite étale covers of $C_{\bar k}$.

[F1] A finite étale algebra is finite locally free and finitely presented as a module; for a module-finite algebra, it is finite étale exactly when it is finitely presented, flat, and has zero Kähler differentials. [[lem-finite-etale-algebra-module-presentation-and-rank]]

[F2] Flatness of a module descends along a faithfully flat ring map. [[thm-faithfully-flat-descent-of-flatness]]

[F3] Kähler differentials commute with scalar base change: $\Omega_{B/A}\otimes_B(B\otimes_A A')\cong\Omega_{B\otimes_A A'/A'}$. [[lem-differentials-base-change]]

[F4] Compatible affine-local algebra charts and their restriction maps glue to a scheme by relative spectrum. [[lem-relative-spec-glues-affine-algebras]]

[F5] The purely inseparable clause of [[lem-etale-specialization-proper-geometric-finite-etale-invariance]] states that for any finite purely inseparable extension $K/K_s$ and any $K_s$-scheme $Z$, the pullback functor on finite étale covers is an equivalence, including all cover morphisms. This clause has no properness assumption on $Z$.

[F6] A finite algebraic extension is purely inseparable over its maximal separable subextension by [[thm-algebraic-extension-is-purely-inseparable-over-its-separable-closure]]. A finite separable extension inside $\bar k$ is contained in a finite Galois extension by [[thm-galois-closures-exist-and-are-minimal]].

## Proof

**Proof technique:** direct finite-presentation descent on affine charts.

1.1 If every cover in the diagram is empty, including if the diagram has no objects, take $L=k$; all specified maps are unique. Otherwise perform the following construction for its finitely many covers simultaneously, allowing zero algebras on the empty covers. Choose a finite affine open cover $C=\bigcup_{j=1}^m U_j$, with $U_j=\operatorname{Spec}A_j$. Because $C$ is separated, finite intersections of these affine opens are affine. The inverse image of each $U_j$ in each specified finite cover is affine, say $\operatorname{Spec}\bar B_j$ over $\bar A_j=A_j\otimes_k\bar k$. By [F1], $\bar B_j$ is a finitely presented $\bar A_j$-module. Choose finite module presentations, unit and multiplication maps, overlap isomorphisms and their inverses, and the finitely many cocycle identities. Add the finitely many specified cover morphisms: on each chart they are algebra homomorphisms, determined by finitely many generator images satisfying finitely many module, multiplication and unit equations. Include their overlap compatibility and all the specified commuting identities, and include inverses whenever a specified map is an isomorphism. Each datum uses finitely many coefficients in $\bar k$. The finite subextensions of $\bar k/k$ form a directed system with union $\bar k$, so one finite extension $K/k$ contains all coefficients. A map between finitely presented modules is determined by finitely many generator images and relations; each relation that holds in the filtered union holds at some later finite stage. Taking a common finite extension for the finitely many maps and relations therefore descends all affine algebras, overlap maps, cocycles and specified morphisms to $K$, with base change recovering the given finite diagram. [F1, given, choose, construct]

2.1 For each cover the descended algebras are finite modules over their affine base rings, and their overlap maps satisfy the cocycle identity by step 1.1. Apply [F4] to glue their relative spectra to a finite morphism $Y_K\to C_K$. On each $U_{j,\bar k}$ its base change has the original algebra and transition maps, so the base-changed cover is isomorphic to the specified geometric cover. The descended algebra maps glue to cover morphisms because their overlap identities were included. Faithful field base change detects their specified identities and inverse identities. [F4, step 1.1, construct]

3.1 It remains to check étaleness. On each chart, $A_{j,K}\to A_{j,\bar k}$ is faithfully flat because it is induced by the field extension $\bar k/K$. The base-changed algebra $\bar B_j$ is flat, so [F2] gives flatness of $B_{j,K}$. The base change $B_{j,K}\to\bar B_j$ is itself faithfully flat. By [F3], $\Omega_{B_{j,K}/A_{j,K}}\otimes_{B_{j,K}}\bar B_j\cong\Omega_{\bar B_j/\bar A_j}=0$; faithful flatness of $B_{j,K}\to\bar B_j$ forces $\Omega_{B_{j,K}/A_{j,K}}=0$. The algebra is finite and finitely presented by construction, so [F1] proves it is finite étale on each chart. Étaleness is affine-local on the target; hence every descended $K$-cover is finite étale. [F1, F2, F3, step 2.1, algebra]

4.1 Let $K_s$ be the maximal separable subextension of $K/k$. By [F6], $K/K_s$ is finite purely inseparable. Apply [F5] to $Z=C_{K_s}$: every descended $K$-cover comes from $K_s$, every specified morphism has a unique lift between chosen lifted covers, and faithfulness detects every commuting identity. Thus the entire finite diagram descends to $K_s$. This use of [F5] is its arbitrary-scheme purely inseparable clause, not its separate smooth proper algebraically closed extension assertion. [F5, F6, step 2.1, step 3.1, construct]

5.1 Choose the finite Galois closure $L/k$ of $K_s/k$ inside $\bar k$ using [F6], and base change the diagram over $K_s$ to $L$. Finite étaleness and the given diagram identities are preserved, and base change to $\bar k$ recovers the original diagram. This proves the assertion for all specified finite diagrams and in particular for a single cover. [F6, step 4.1, construct] ∎

## Axiom use

The Axiom of Choice is assumed through the finite-étale and purely inseparable descent suppliers and the choice of the stipulated algebraic closure. The finite presentation and diagram arguments use only finite choices of charts, coefficients and common extensions; no additional countable-choice or Dependent Choice argument is used.
