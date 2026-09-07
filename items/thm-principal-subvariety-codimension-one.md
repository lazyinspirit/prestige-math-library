---
id: "thm-principal-subvariety-codimension-one"
kind: "theorem"
title: "A nontrivial principal section has pure codimension one"
deps: ["thm-affine-variety-dimension-coordinate-ring", "def-codimension-irreducible-subvariety", "thm-krull-principal-ideal-theorem", "cor-height-plus-quotient-dimension-affine-domain", "thm-affine-nullstellensatz-correspondence"]
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Milne Theorem 3.42, p.76"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
    - title: "Arapura Theorem 4.1.6, p.31; restricted to irreducible X"
      url: https://www.math.purdue.edu/~arapura/preprints/algeom.pdf
status: published
origin: "pipeline"
proof_strategy: "Minimal primes over (f) have height <=1 by PIT and >0 since the ring is a domain. Height-plus-quotient gives the exact dimension; a proper ideal lies in a maximal ideal."
---

## Statement

Let $X$ be irreducible affine and $0\ne f\in k[X]$ be a nonunit. Then $V_X(f)$ is nonempty and every irreducible component has dimension $\dim X-1$, hence codimension one.

Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[F1] For a nonempty affine algebraic set $X$, $\dim X=\dim k[X]$, where the right side is Krull dimension. For this comparison only, extend ring dimension to the zero ring by $\dim(0)=-\infty$; then the equality also holds for $X=\varnothing$. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[thm-affine-variety-dimension-coordinate-ring]]).

[F2] For a nonempty irreducible closed subvariety $Z$ of an irreducible classical variety $X$, define $\operatorname{codim}_X Z=\dim X-\dim Z$. These are finite integers. In a reducible ambient variety a difference of global dimensions must not be substituted for the height of a local prime; the containing component matters. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[def-codimension-irreducible-subvariety]]).

[F3] Let $R$ be a Noetherian commutative ring, let $x\in R$, and let $\mathfrak p$ be a prime ideal minimal over $(x)$. Then $\operatorname{ht}(\mathfrak p)\le1$. ([[thm-krull-principal-ideal-theorem]]).

[F4] Let $k$ be a field, let $A$ be a finite-type $k$-domain, and let $\mathfrak p\in\operatorname{Spec}(A)$. Then $$ \operatorname{ht}(\mathfrak p)+\dim(A/\mathfrak p)=\dim A. $$ ([[cor-height-plus-quotient-dimension-affine-domain]]).

[F5] Assume the Axiom of Choice. Let $k$ be an algebraically closed field. 1. The assignments $$ X\longmapsto I(X),\qquad J\longmapsto V(J) $$ induce mutually inverse inclusion-reversing correspondences between affine algebraic sets $X\subseteq \mathbf A_k^n$ and radical ideals $J\subseteq k[x_1,\ldots,x_n]$. 2. Under this correspondence, nonempty irreducible affine algebraic sets correspond exactly to prime ideals. ([[thm-affine-nullstellensatz-correspondence]]).

## Proof

1.1 Put $A=k[X]$. The proper ideal $(f)$ has a nonempty zero set: otherwise the Nullstellensatz would give $\sqrt{(f)}=A$, implying $1\in(f)$. Its irreducible components correspond to primes $\mathfrak p$ minimal over $(f)$. [F5]

2.1 The finite-type ring $A$ is Noetherian. The principal ideal theorem gives $\operatorname{ht}\mathfrak p\le1$. Since $A$ is a domain and $f\ne0$, $(0)\subsetneq\mathfrak p$, so the height is at least one and therefore equals one. [F3, step 1.1]

3.1 The affine-domain height formula yields $\dim(A/\mathfrak p)=\dim A-1$. The affine geometric/ring comparison and the codimension definition give the asserted dimension and codimension for each component. The hypotheses exclude dimension-zero $X$: the prime already obtained has height one, so $\dim A\ge1$. [F1, F2, F4, step 2.1] ∎
