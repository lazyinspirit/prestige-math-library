---
id: def-primitive-vector-of-a-rational-representation
kind: definition
title: "Primitive vectors for a Borel pair"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 26
deps: [def-axiom-of-choice, def-borel-subgroup-and-maximal-torus, def-rational-representation-and-comodule-of-an-affine-group-scheme, def-roots-and-root-groups-of-a-split-reductive-group, def-unipotent-algebraic-group, def-weight-and-dominant-weight-of-a-rational-representation, thm-root-subgroups-of-a-split-reductive-group, lem-unipotent-and-diagonalizable-intersection-is-trivial, lem-nonaffine-group-image-exact-quotient-properties]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)"
      url: "https://www.jmilne.org/math/Books/iAG2022.pdf"
      locator: "Ch. 22 (22.16), printed p. 468"
    - title: "Robert Steinberg, Lectures on Chevalley Groups (Yale University, 1967; notes prepared by J. Faulkner and R. Wilson)"
      url: "https://math.soimeme.org/~arunram/Resources/YaleNotes.pdf"
      locator: "Ch. 12, Theorem 39(a) (a nonzero weight vector fixed by U^+)"
---
## Definition

Let $(G,T)$ be a split reductive group, $B\supseteq T$ a Borel subgroup with
unipotent radical $U=B_u$ and roots $\Phi$
([[def-borel-subgroup-and-maximal-torus]],
[[def-unipotent-algebraic-group]],
[[def-roots-and-root-groups-of-a-split-reductive-group]],
[[thm-root-subgroups-of-a-split-reductive-group]]). Let $(V,r)$ be a rational
representation
([[def-rational-representation-and-comodule-of-an-affine-group-scheme]]). A
nonzero vector $v\in V$ is **primitive** (for the pair $(B,T)$) if it spans a
$B$-stable line. Such a vector is fixed by $U$ and is a $T$-eigenvector: the action on its one-dimensional line restricts to a character of $T$, and unipotence forces the action of $U$ on that line to be trivial. Assuming the Axiom of Choice ([[def-axiom-of-choice]]) for the cited split-Borel structure, multiplication is an isomorphism $U\rtimes T\to B$, as justified in the Remarks below. Consequently the converse holds as well: a nonzero $U$-fixed $T$-eigenvector is primitive.
The **weight** of a primitive vector is the character $\lambda\in X(T)$ with
$t\cdot v=\lambda(t)v$ for all $t$ and all $k$-algebras; for a finite-dimensional
$V$ it is the weight $\lambda$ with $v\in V_\lambda$
([[def-weight-and-dominant-weight-of-a-rational-representation]]).

## Remarks

- **Weight and converse.** Restriction to a fixed line gives a unique character of $T$, so its weight is well defined without a choice principle. The forward implication uses only the defining fixed-vector property of a unipotent group applied to that line. For the converse, under AC, the root-group coordinates give $\dim U=|\Phi^+|$, while the adjoint weight decomposition gives $\dim B=\dim T+|\Phi^+|$. The intersection $U\cap T$ is trivial by [[lem-unipotent-and-diagonalizable-intersection-is-trivial]]. Since $U$ is normal in $B$, multiplication gives a homomorphism $U\rtimes T\to B$ with trivial scheme kernel; the exact-image theorem [[lem-nonaffine-group-image-exact-quotient-properties]] identifies its source with a smooth connected closed image of the same dimension as the smooth connected group $B$. Thus that image is $B$, proving $B=U\rtimes T$. A $U$-fixed $T$-eigenline is consequently $B$-stable.
- **Normalisation.** The Borel subgroup is the one used to define the positive
  system $\Phi^+$, so a primitive vector is fixed by the unipotent group of
  *positive* root subgroups. The opposite unipotent group $U^-$ generates the
  big cell with $B$ and is used only in the proofs of the weight statements.
- **Choice scope.** The definition by a $B$-stable line, its weight, and the forward implication above are choice-free. AC is inherited only for the supplemental structural converse and the root-group facts used to describe the opposite big cell.
