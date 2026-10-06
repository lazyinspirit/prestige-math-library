---
id: lem-trace-form-of-a-faithful-representation-of-a-semisimple-lie-algebra-is-nondegenerate
kind: lemma
title: "Trace forms of faithful representations of semisimple Lie algebras are nondegenerate"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
deps: [thm-cartans-solvability-criterion, prop-trace-forms-are-symmetric-and-invariant, lem-orthogonal-complements-under-invariant-forms-are-ideals, prop-ideals-and-quotients-of-semisimple-lie-algebras, def-trace-form-of-a-finite-dimensional-representation, def-radical-of-a-finite-dimensional-lie-algebra, def-lie-subalgebra-ideal-and-center, def-simple-semisimple-and-reductive-lie-algebras]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)"
      url: "https://www.jmilne.org/math/Books/iAG2022.pdf"
      locator: "Ch. 22, section 22c, printed p. 476; Milne, Lie Algebras, Ch. 5"
    - title: "J. S. Milne, Lie Algebras, Lie Groups, and Algebraic Groups (v2.00)"
      url: "https://www.jmilne.org/math/CourseNotes/LAG.pdf"
      locator: "Ch. 5, the proof of the semisimplicity criterion via Cartan's criterion"
---

## Statement

Let $\mathfrak h$ be a finite-dimensional semisimple Lie algebra over a field
$k$ of characteristic $0$ and let $\rho:\mathfrak h\to\mathfrak{gl}(V)$ be a
faithful finite-dimensional representation with trace form
$B_\rho(x,y)=\operatorname{tr}(\rho(x)\rho(y))$
([[def-trace-form-of-a-finite-dimensional-representation]]). Then $B_\rho$ is a
nondegenerate symmetric invariant form on $\mathfrak h$; equivalently, its
radical is zero ([[prop-trace-forms-are-symmetric-and-invariant]]).

## Facts & Assumptions

**Given:** A finite-dimensional Lie algebra $\mathfrak h$ over a characteristic-zero field $k$ with $\operatorname{rad}(\mathfrak h)=0$, and a faithful finite-dimensional representation $\rho:\mathfrak h\to\mathfrak{gl}(V)$. Write $B_\rho(x,y)=\operatorname{tr}(\rho(x)\rho(y))$ for its trace form and $\mathfrak r=\{x\in\mathfrak h:B_\rho(x,y)=0\text{ for every }y\in\mathfrak h\}$ for its radical.

[F1] *Symmetry and invariance.* $B_\rho$ is bilinear and symmetric, and $B_\rho([z,x],y)+B_\rho(x,[z,y])=0$ for all $x,y,z\in\mathfrak h$ ([[prop-trace-forms-are-symmetric-and-invariant]]).

[F2] *Radicals of invariant forms are ideals.* If $\mathfrak i$ is an ideal of a Lie algebra carrying a symmetric invariant bilinear form $B$, then $\mathfrak i^\perp$ is an ideal; in particular $\mathfrak r=\mathfrak h^\perp$ is an ideal of $\mathfrak h$ ([[lem-orthogonal-complements-under-invariant-forms-are-ideals]], [[def-lie-subalgebra-ideal-and-center]]).

[F3] *Cartan's solvability criterion.* Let $\mathfrak l\subseteq\mathfrak{gl}(V)$ be a finite-dimensional linear Lie algebra over a characteristic-zero field. If $\operatorname{tr}(xy)=0$ for all $x\in[\mathfrak l,\mathfrak l]$ and $y\in\mathfrak l$, then $\mathfrak l$ is solvable ([[thm-cartans-solvability-criterion]]).

[F4] *The solvable radical.* The solvable radical $\operatorname{rad}(\mathfrak h)$ is the largest solvable ideal of $\mathfrak h$: it is solvable and contains every solvable ideal ([[def-radical-of-a-finite-dimensional-lie-algebra]]), and semisimplicity means $\operatorname{rad}(\mathfrak h)=0$ ([[def-simple-semisimple-and-reductive-lie-algebras]]).

[F5] *Faithfulness transfers solvability.* If $\rho$ is injective and bracket preserving then $\rho(D^j\mathfrak r)=D^j\rho(\mathfrak r)$ for every $j$, so $\mathfrak r$ is solvable as soon as the linear Lie algebra $\rho(\mathfrak r)$ is solvable; ideals and quotients of a semisimple algebra are again semisimple ([[prop-ideals-and-quotients-of-semisimple-lie-algebras]]).

## Proof

**Proof technique:** direct.

1.1 The trace form $B_\rho$ is symmetric and invariant, and its radical $\mathfrak r$ is a linear subspace of $\mathfrak h$. [F1, given]

2.1 The radical $\mathfrak r=\mathfrak h^\perp$ is an ideal of $\mathfrak h$: it is the orthogonal complement of the ideal $\mathfrak h$, and orthogonal complements of ideals under symmetric invariant forms are ideals. [F2, step 1.1]

3.1 Since $\mathfrak r$ is an ideal by step 2.1, $[\mathfrak r,\mathfrak r]\subseteq\mathfrak r$. Thus $B_\rho(x,y)=0$ for every $x\in[\mathfrak r,\mathfrak r]$ and every $y\in\mathfrak h$, by the definition of the radical $\mathfrak r$. [given, step 2.1, algebra]

4.1 The linear Lie algebra $\rho(\mathfrak r)\subseteq\mathfrak{gl}(V)$ is solvable. Its derived algebra is $[\rho(\mathfrak r),\rho(\mathfrak r)]=\rho([\mathfrak r,\mathfrak r])$, and for $x\in[\mathfrak r,\mathfrak r]$ and $y\in\mathfrak r$ step 3.1 gives $\operatorname{tr}(\rho(x)\rho(y))=B_\rho(x,y)=0$; Cartan's criterion therefore makes $\rho(\mathfrak r)$ solvable. [F3, step 3.1]

5.1 The algebra $\mathfrak r$ is solvable. The representation $\rho$ is injective and bracket preserving, so $\rho(D^j\mathfrak r)=D^j\rho(\mathfrak r)$ for every $j$; since $\rho(\mathfrak r)$ is solvable by step 4.1, [F5] gives that $\mathfrak r$ is solvable: some $D^j\rho(\mathfrak r)$ is zero, hence $D^j\mathfrak r=0$. [step 4.1]

6.1 By step 5.1 the radical $\mathfrak r$ is a solvable ideal of $\mathfrak h$, so $\mathfrak r\subseteq\operatorname{rad}(\mathfrak h)=0$ because the solvable radical is the largest solvable ideal and $\mathfrak h$ is semisimple. Hence $\mathfrak r=0$, that is, $B_\rho$ is nondegenerate; together with step 1.1 this proves the lemma. [F4, step 2.1, step 5.1] ∎

## Remarks

- Semisimplicity of $\mathfrak h$ is used exactly once, at step 6.1, through $\operatorname{rad}(\mathfrak h)=0$: any solvable ideal lies in the radical.
- The faithfulness of $\rho$ is used exactly at step 5.1 to transfer solvability from the linear algebra $\rho(\mathfrak r)$ back to $\mathfrak r$; a nonfaithful representation can have degenerate trace form.
- Characteristic zero enters only through Cartan's solvability criterion at step 4.1.
