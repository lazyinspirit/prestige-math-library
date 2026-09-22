---
id: def-norm-and-strong-resolvent-convergence
kind: definition
title: "Norm and strong resolvent convergence"
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-countable-choice, def-resolvent-and-spectrum-of-a-closed-unbounded-operator, thm-self-adjoint-resolvent-estimate, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-operator-norm, def-bounded-linear-operator, def-weak-convergence-of-nets-and-sequences]
proof_strategy: not-applicable
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, second edition"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "Section 6.6, (6.49) and Corollary 6.32, pp.179-180"
verification:
  audited: 2026-09-22
---

## Definition

Assume Countable Choice ([[def-countable-choice]]). Let $A_n$
$(n\in\mathbb N)$ and $A$ be self-adjoint operators on the same
Hilbert space $H$ and fix a nonreal $z_0$. One writes $A_n\to A$ in the
**norm resolvent sense** when
$$\|R_{A_n}(z_0)-R_A(z_0)\|\longrightarrow0$$
in operator norm, and in the **strong resolvent sense** when
$$R_{A_n}(z_0)x\longrightarrow R_A(z_0)x\qquad\text{for every }x\in H,$$
that is, strong operator convergence
([[def-operator-norm]], [[def-bounded-linear-operator]],
[[def-weak-convergence-of-nets-and-sequences]]).

Both notions are well posed for every choice of nonreal $z_0$: by
[[thm-self-adjoint-resolvent-estimate]] each nonreal number belongs to
$\rho(A_n)\cap\rho(A)$, so all resolvents occurring are bounded with
$\|R_{A_n}(z_0)\|\le1/|\operatorname{Im}z_0|$. The definition deliberately
does not assert independence of the parameter $z_0$: that independence is a
theorem, proved for the norm case by
the resolvent-star-algebra density lemma below and used in
the continuous-calculus-under-resolvent-convergence theorem below.
Norm resolvent convergence implies strong resolvent convergence, and both are
notions about the resolvents rather than about the operators: no convergence
of the operators themselves is asserted or implied.
