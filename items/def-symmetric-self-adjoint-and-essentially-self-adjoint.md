---
id: def-symmetric-self-adjoint-and-essentially-self-adjoint
kind: definition
title: "Symmetric, self-adjoint and essentially self-adjoint operators"
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-adjoint-of-a-densely-defined-unbounded-operator, thm-closable-iff-adjoint-domain-is-dense, lem-unbounded-adjoint-is-well-defined-and-closed, thm-closure-of-a-closable-operator, def-densely-defined-closed-and-closable-operator, def-unbounded-linear-operator-domain-and-graph, def-countable-choice]
proof_strategy: not-applicable
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
      locator: "Definition 7.8, Example 7.19 and Proposition 7.22, pp.30-32"
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, second edition"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "Section 2.2, pp.66-69"
    - title: "Theo Buehler and Dietmar A. Salamon, Functional Analysis"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
      locator: "Chapter 6, Sec. 6.3.2"
---

## Definition

Assume Countable Choice. Let $T$ be a densely defined linear operator on $H$.

- $T$ is **symmetric** when $T\subseteq T^*$, that is, $D(T)\subseteq D(T^*)$ and
  $Tx=T^*x$ for all $x\in D(T)$; equivalently
  $\langle Tx,y\rangle=\langle x,Ty\rangle$ for all $x,y\in D(T)$.
- $T$ is **self-adjoint** when $T=T^*$, that is, the domains and the values
  agree.
- $T$ is **essentially self-adjoint** when its closure $\overline T$ is
  self-adjoint; by [[thm-closable-iff-adjoint-domain-is-dense]] this presupposes
  that $T$ is closable.

**Consequences, with proofs.** These are part of the content of the definition.

1. *A symmetric $T$ is closable.* $T\subseteq T^*$ and $T^*$ is closed
   ([[lem-unbounded-adjoint-is-well-defined-and-closed]]), so $T^*$ is a closed
   extension of $T$. In particular the closure $\overline T$ exists and
   $\overline T\subseteq T^*$.
2. *The closure of a symmetric operator is symmetric.* If $T\subseteq T^*$,
   the inclusion reversal of
   [[lem-unbounded-adjoint-is-well-defined-and-closed]] applied to
   $T\subseteq T^*$ gives $(T^*)^*\subseteq T^*$, that is
   $T^{**}\subseteq T^*$. Applying it once more to the inclusion
   $T^{**}\subseteq T^*$ gives $(T^*)^*\subseteq(T^{**})^*$, that is
   $T^{**}\subseteq T^{***}$. Since $\overline T=T^{**}$ and
   $(\overline T)^*=T^{***}$
   ([[thm-closable-iff-adjoint-domain-is-dense]]), this reads
   $\overline T\subseteq(\overline T)^*$: the closure is symmetric. (Each
   application is legitimate because the adjoint is defined once its operator
   is densely defined, and $D(T^{**})$ is dense because
   $T\subseteq T^{**}=\overline T$, so that $D(T^{**})$ contains the dense
   domain $D(T)$.)
3. *A self-adjoint operator has no proper symmetric extension.* If $T=T^*$ and
   $T\subseteq S\subseteq S^*$, then $S^*\subseteq T^*$ by inclusion reversal,
   so $T\subseteq S\subseteq S^*\subseteq T^*=T$ and all inclusions are
   equalities.
4. *A self-adjoint operator is closed*, being equal to the adjoint $T^*$ of the
   densely defined $T$, and *an essentially self-adjoint operator has exactly
   one self-adjoint extension*, namely $\overline T$: a self-adjoint extension
   $S$ of $T$ is closed, hence contains the least closed extension
   $\overline T$, and then $S\subseteq S^*\subseteq(\overline T)^*=\overline T$
   by item 2 and symmetry, so $S=\overline T$.
