---
id: rem-schatten-p-classes
kind: remark
title: Schatten p classes
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-absolute-value-and-singular-values-of-a-compact-operator, def-hilbert-schmidt-operator, thm-hilbert-schmidt-norm-is-basis-independent, def-trace-class-operator, thm-singular-value-decomposition-for-compact-operators, def-square-summable-family-on-an-arbitrary-index-set, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, thm-parseval-equivalences-for-a-complete-orthonormal-family, def-hilbert-space, def-operator-norm, def-bounded-linear-operator, def-compact-linear-operator, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §3.6, Schatten classes"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Anthony W. Knapp, Advanced Real Analysis — Chapter II, §5"
      url: "https://www.math.stonybrook.edu/~aknapp/download/a2-realanal-inside.pdf"
---

## Remark

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H$ and $K$
be real or complex Hilbert spaces and let $T\in\mathcal B(H,K)$ be compact
([[def-compact-linear-operator]]) with zero-padded singular-value sequence
$(s_n(T))_{n\ge1}$
([[def-absolute-value-and-singular-values-of-a-compact-operator]]). For a real
$1\le p<+\infty$ the **Schatten $p$-class** $\mathcal S_p(H,K)$ is defined to be
the set of compact operators with
$$\|T\|_p:=\Bigl(\sum_{n\ge1}s_n(T)^{p}\Bigr)^{1/p}<+\infty .$$
This is an **orientation remark only**. It records the scale of ideals without
developing any of its theory.

The two endpoints that this page does develop are recognised as follows.
$\mathcal S_1(H,K)$ is exactly the trace-class ideal and $\|\cdot\|_1$ is the
trace norm, by definition of the latter
([[def-trace-class-operator]]), including the zero padding and the finite-rank
case. $\mathcal S_2(H,K)$ is exactly the class of operators that are
Hilbert–Schmidt relative to a supplied Hilbert basis $E$ of $H$: for such a
basis, let $(e_j)_{j\in J}\subseteq H$ and $(f_j)_{j\in J}\subseteq K$ be the
right and left singular families supplied by the SVD.  Its expansion gives
$$Te=\sum_{j\in J}s_j\langle e,e_j\rangle f_j,$$
so orthonormality of the $f_j$, Parseval for the supplied basis $E$, and the
interchange of the nonnegative finite-subset suprema give
$$\sum_{e\in E}\|Te\|^2=\sum_{n\ge1}s_n(T)^2,$$
since
$$\sum_{e\in E}\|Te\|^2
=\sum_{j\in J}s_j^2\sum_{e\in E}|\langle e,e_j\rangle|^2
=\sum_{j\in J}s_j^2,$$
and the last sum is the zero-padded singular-value sum
([[thm-singular-value-decomposition-for-compact-operators]],
[[def-hilbert-schmidt-operator]],
[[thm-parseval-equivalences-for-a-complete-orthonormal-family]],
[[def-square-summable-family-on-an-arbitrary-index-set]],
[[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]), so
that $\|T\|_2=\|T\|_{HS}$ by the basis-independence of the Hilbert–Schmidt norm
([[thm-hilbert-schmidt-norm-is-basis-independent]]). For $p=+\infty$ one writes
$\mathcal S_\infty(H,K)$ for the compact operators with the operator norm
$\|T\|_{S_\infty}:=\|T\|=s_1(T)$ ([[def-operator-norm]]).

**Deliberate boundaries.** Nothing here asserts completeness of $\|\cdot\|_p$,
Hölder or Young inequalities, duality, interpolation, or the identification of
$\mathcal S_p$ with a space of sequences; no monotonicity of the norms beyond
$\|T\|\le\|T\|_1$ from the trace-class page is claimed. Later items must not use
this remark as a supplier: it is recorded for orientation, exactly as the
functional-analysis plan's FA-16 boundary requires, and the general theory of
Schatten classes belongs to a later, separate development.
