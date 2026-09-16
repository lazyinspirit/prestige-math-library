---
id: def-holomorphic-functional-calculus
kind: definition
title: Holomorphic functional calculus
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-spectrum-and-resolvent-set-in-a-banach-algebra, def-banach-algebra-valued-contour-integral, def-complex-chain-and-cycle, def-null-homologous-and-homologous-complex-cycles, lem-admissible-cycle-around-a-compact-plane-set, thm-spectrum-is-nonempty-compact-and-norm-bounded, def-axiom-of-choice]
forward_refs: [ex-bounded-operators-form-a-noncommutative-banach-algebra]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Theo Bühler and Dietmar A. Salamon, Functional Analysis — Definition 5.24, printed pp. 227–228"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Vahid Shirbisheh, Lectures on C-star Algebras, v2 — Definition 2.5.1, printed pp. 46–47"
      url: "https://arxiv.org/pdf/1211.3404"
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $A$ be a unital
complex Banach algebra, let $a \in A$, and let $f$ be a function holomorphic on
an open set $U \subseteq \mathbb C$ containing the spectrum $\sigma_A(a)$
([[def-spectrum-and-resolvent-set-in-a-banach-algebra]]); the spectrum is a
nonempty compact subset of the plane
([[thm-spectrum-is-nonempty-compact-and-norm-bounded]]). By
[[lem-admissible-cycle-around-a-compact-plane-set]] applied to the compact set
$\sigma_A(a) \subseteq U$ there is a finite polygonal complex cycle $\Gamma$ with
trace in $U \setminus \sigma_A(a)$ such that

$$n(\Gamma,z) = 1 \quad \text{for } z \in \sigma_A(a), \qquad n(\Gamma,z) = 0 \quad \text{for } z \notin U ;$$

such a cycle is called **admissible for $(f,U)$** (or simply admissible). Define

$$f(a) \;:=\; \frac{1}{2\pi i}\int_\Gamma f(z)\,R(z,a)\,dz \;\in\; A ,$$

where $R(z,a) = (z1-a)^{-1}$ is the resolvent and the integral is that of
[[def-banach-algebra-valued-contour-integral]] over the chain $\Gamma$
([[def-complex-chain-and-cycle]]). The integrand $z \mapsto f(z)R(z,a)$ is
continuous on the trace of $\Gamma$: $f$ is holomorphic on $U$, and $z \mapsto
R(z,a)$ is norm continuous on the resolvent set
[[thm-resolvent-is-banach-valued-holomorphic]], which contains
$\Gamma^\ast$. So the integral exists, and $f(a) \in A$.

The construction describes the value attached to the **germ** of $f$ near
$\sigma_A(a)$: two holomorphic functions $f_1$ on $U_1$ and $f_2$ on $U_2$ with
the same germ at $\sigma_A(a)$ — that is, agreeing on some neighbourhood of
$\sigma_A(a)$ — give the same $f(a)$. The value is also independent of which
admissible cycle is used; that is
[[lem-holomorphic-functional-calculus-is-contour-independent]], and until it is
proved the notation $f(a)$ refers to the value computed from any one chosen
admissible cycle.

## Remarks

- **The hypothesis is nonempty and the cycle exists without choice.** The
  spectrum of $a$ is nonempty and compact, so the admissible cycle of
  [[lem-admissible-cycle-around-a-compact-plane-set]] always exists; the
  construction inside that lemma uses only finitely many grid cells.

- **Notation for operators.** For a nonzero complex Banach space $X$ and
  $T \in \mathcal B(X)$ the definition applies with $A = \mathcal B(X)$ and
  gives $f(T) = \frac{1}{2\pi i}\int_\Gamma f(z)(z1-T)^{-1}dz \in
  \mathcal B(X)$, the Dunford integral of the resolvent. The spectrum is taken
  in $\mathcal B(X)$ ([[ex-bounded-operators-form-a-noncommutative-banach-algebra]]).

- **What is *not* part of the definition.** The definition does not assert that
  $f \mapsto f(a)$ is multiplicative, that it preserves polynomials, or that
  $\sigma(f(a)) = f(\sigma(a))$; those properties are proved from this
  definition in [[thm-holomorphic-functional-calculus-homomorphism]] and
  [[thm-holomorphic-spectral-mapping]]. In particular the contour independence
  of the value is a theorem, and the notation is provisional until then.

- **Wider or smaller domains of holomorphy.** Only the germ at $\sigma_A(a)$
  matters: enlarging $U$ beyond a neighbourhood of the spectrum does not change
  the value, and shrinking it is allowed as long as it still contains the
  spectrum and the cycle lies inside it. Both statements follow from
  [[lem-holomorphic-functional-calculus-is-contour-independent]].
