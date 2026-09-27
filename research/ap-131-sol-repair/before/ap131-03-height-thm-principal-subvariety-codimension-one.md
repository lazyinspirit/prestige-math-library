---
id: "thm-principal-subvariety-codimension-one"
kind: "theorem"
title: "A nontrivial principal section has pure codimension one"
deps: ["thm-affine-variety-dimension-coordinate-ring", "def-codimension-irreducible-subvariety", "thm-krull-principal-ideal-theorem", "cor-height-plus-quotient-dimension-affine-domain", "cor-strong-nullstellensatz-two-inclusions", "thm-hilbert-basis-theorem", "def-axiom-of-choice"]
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  precheck: pass
  verified:
    model: "gpt-6-astra"
    verdict: pass
    date: 2026-09-08
    scope: "Local prerequisite and principal-section proof repair; not independent judging or whole-closure certification."
    delegated_by: "Owner-requested UC-73 audit"
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

**Given:** AC, an irreducible affine algebraic set X over algebraically closed k, and a nonzero nonunit $f\in A=k[X]$.

[F1] Geometric affine dimension equals coordinate-ring dimension. Its proof establishes the inclusion-reversing bijection between irreducible closed subsets and primes in the coordinate ring ([[thm-affine-variety-dimension-coordinate-ring]]).

[F2] Codimension in an irreducible variety is the difference of dimensions ([[def-codimension-irreducible-subvariety]]).

[F3] A prime minimal over a principal ideal in a Noetherian ring has height at most one ([[thm-krull-principal-ideal-theorem]]).

[F4] For an affine domain A and prime p, $\operatorname{ht}p+\dim(A/p)=\dim A$ ([[cor-height-plus-quotient-dimension-affine-domain]]).

[F5] Under AC, polynomial zero loci satisfy $I(V(J))=\sqrt J$ ([[cor-strong-nullstellensatz-two-inclusions]]).

[F6] Polynomial rings over Noetherian rings are Noetherian ([[thm-hilbert-basis-theorem]]).

## Proof

1.1 Write $A=R/I(X)$, where R is a finite-variable polynomial ring over k. The field k has only two ideals, so repeated F6 makes R Noetherian; lifting ideals makes its quotient A Noetherian. A is a nonzero domain: if the product of two coordinate functions vanishes on X, their closed zero sets cover the irreducible X, forcing one function to vanish everywhere. [F6, given, algebra]

1.2 Lift the proper ideal (f) to an ideal J of R. If $V_X(f)=V(J)$ were empty, F5 would give $\sqrt J=R$, and then $1\in J$, contradicting properness of (f). Hence $V_X(f)$ is nonempty. This invocation and the prime/closed-set dictionary F1 are the exact inherited Nullstellensatz uses of AC. [F5, given, algebra]

2.1 Let Z be any irreducible component of $V_X(f)$. By F1 its vanishing prime $p\subset A$ contains f. It is minimal among primes containing (f): a strictly smaller such prime would correspond, by F1, to a strictly larger irreducible closed subset of $V_X(f)$, contrary to the maximality defining a component. The same dictionary identifies $k[Z]=A/p$. [F1, step 1.2, algebra]

3.1 F3 applies to A and p, so $\operatorname{ht}p\le1$. Since A is a domain and $f\ne0$ lies in p, the strict chain $(0)\subsetneq p$ shows the reverse inequality. Thus $\operatorname{ht}p=1$. [F3, step 1.1, step 2.1, algebra]

4.1 F4 now gives $\dim(A/p)=\dim A-1$. Apply F1 to X and Z, then F2, to obtain $\dim Z=\dim X-1$ and $\operatorname{codim}_X Z=1$ for every component. All these dimensions are finite because the rings are finite-type domains. [F1, F2, F4, step 2.1, step 3.1] ∎
