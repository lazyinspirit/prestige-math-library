---
id: lem-fd-bounded-solenoidal-basis
kind: lemma
title: Countable smooth solenoidal basis for bounded closure spaces
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps: [def-fd-bounded-solenoidal-spaces, lem-zero-extension-from-w-one-p-zero, thm-sobolev-spaces-are-banach-spaces, def-sobolev-space-wkp-and-its-norm, def-wkp-zero-as-a-sobolev-closure, thm-fourier-basis-and-parseval-on-the-n-torus, def-axiom-of-choice, def-countable-choice]
dependency_roles:
  def-fd-bounded-solenoidal-spaces: mathematical-premise
  lem-zero-extension-from-w-one-p-zero: mathematical-premise
  thm-sobolev-spaces-are-banach-spaces: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  def-wkp-zero-as-a-sobolev-closure: mathematical-premise
  thm-fourier-basis-and-parseval-on-the-n-torus: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
physical_scope: null
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
sources:
  references:
    - title: "L. C. Berselli and S. Spirito, On the Existence of Leray–Hopf Weak Solutions to the Navier–Stokes Equations, Fluids 6(1), 42 (2021)"
      url: "https://www.mdpi.com/2311-5521/6/1/42/pdf"
      locator: "§§2.1–2.2 and §5.2, printed pp. 4–5 and 14–15; the proof here constructs the basis from the closure spaces."
    - title: "Leonid Ryzhik, Math 256B Lecture Notes, version 2024"
      url: "https://virtualmath1.stanford.edu/~ryzhik/notes-256B-24.pdf"
      locator: "§5.2, printed pp. 39–43, for the periodic Fourier separability input."
---

## Statement

Assume the Axiom of Choice. For every nonempty bounded open
$\Omega\subset\mathbb R^3$, the closure spaces $H,V$ of
Bounded no-slip solenoidal closure spaces are separable Hilbert spaces, with
$V\hookrightarrow H$ continuous and dense. There is a countable sequence
$e_j\in D_\sigma(\Omega)$ that is orthonormal in $H$ and whose finite linear
span is dense in both $H$ and $V$. No Stokes eigenfunction regularity or
identification of $V$ with a larger solenoidal space is asserted.

## Statement references

[Berselli and Spirito, *On the Existence of Leray–Hopf Weak Solutions*, §§2.1–2.2 and §5.2, pp. 4–5, 14–15](https://www.mdpi.com/2311-5521/6/1/42/pdf).

[Leonid Ryzhik, *Math 256B Lecture Notes*, §5.2, pp. 39–43](https://virtualmath1.stanford.edu/~ryzhik/notes-256B-24.pdf).

## Facts & Assumptions

**Given:** Axiom of Choice, a bounded nonempty open $\Omega\subset\mathbb R^3$, and the closure spaces $H,V,D_\sigma$ defined in [[def-fd-bounded-solenoidal-spaces]].

[F1] [[def-fd-bounded-solenoidal-spaces]]: $H$ is the $L^2$ closure of $D_\sigma$, $V$ is its $H_0^1$ closure, and $\|a\|_V^2=\|a\|_2^2+\|\nabla a\|_2^2$.

[F2] [[lem-zero-extension-from-w-one-p-zero]]: under Countable Choice, zero extension sends $H_0^1(\Omega)$ isometrically into $H^1(\mathbb R^3)$ and preserves weak derivatives.

[F3] [[thm-sobolev-spaces-are-banach-spaces]]: under the Axiom of Choice, Sobolev spaces with their weak-derivative graph norm are complete.

[F4] [[thm-fourier-basis-and-parseval-on-the-n-torus]]: under Countable Choice, Fourier polynomials give a countable dense family in $L^2$ on a finite torus.

[F5] [[def-axiom-of-choice]] and [[def-countable-choice]]: choice permits selecting points in a countable base and countable Sobolev approximants.

## Proof

1.1 The zero-extension map embeds $H$ isometrically into $L^2$ of a periodic cube containing $\overline\Omega$ in its interior. By [F2], it embeds $V$ into the finite product consisting of the zero extension and its three first derivatives in $L^2$ of that cube. Each ambient space is separable by [F4]. Every subspace of a separable metric space is separable: take its countable base of intersections with ambient rational balls and, using [F5], choose one point from each nonempty intersection. Thus $H$ and $V$ are separable. [given, F2, F4, F5]

1.2 The $L^2$ and $H^1$ graph inner products make the ambient spaces Hilbert: completeness of $L^2$ and the Sobolev completeness in [F3] give convergence of Cauchy sequences in the function and all derivative coordinates, and the weak-derivative identity passes to the limit against each test. The spaces $H,V$ are closed by their definitions as closures, so they inherit Hilbert structure. The $V$ norm dominates the $H$ norm; since $D_\sigma$ is dense in both closures, the inclusion $V\hookrightarrow H$ is continuous with dense image. [given, F1, F3]

2.1 Separability of $V$ and density of $D_\sigma$ in $V$ allow Countable Choice to select $d_j\in D_\sigma$ approximating a countable dense subset of $V$ to every rational precision; the selected countable collection is dense in $V$ and, because $D_\sigma$ is also dense in $H$, its linear span is dense in $H$. The space $D_\sigma$ is infinite dimensional: choose countably many disjoint balls in one ball contained in $\Omega$ and in each choose a nonzero smooth compactly supported curl field; their disjoint supports give linear independence. Apply Gram–Schmidt in $H$ to the selected collection, discarding zero remainders. Each resulting $e_j$ is a finite linear combination of elements of $D_\sigma$, so is still in $D_\sigma$; its span contains every selected $d_j$ after the corresponding finite stage and is therefore dense in $V$ and $H$. [given, F1, F5, step 1.1, step 1.2] ∎
