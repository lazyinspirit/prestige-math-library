---
id: def-riesz-spectral-projection
kind: definition
title: Riesz spectral projection
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-holomorphic-functional-calculus-homomorphism, def-holomorphic-functional-calculus, lem-admissible-cycle-around-a-compact-plane-set, lem-banach-valued-cauchy-integral-vanishes, def-null-homologous-and-homologous-complex-cycles, def-spectrum-and-resolvent-set-in-a-banach-algebra, def-axiom-of-choice]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Theo Bühler and Dietmar A. Salamon, Functional Analysis — Theorem 5.25(vi) and equation (5.26), printed pp. 226–228"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Vahid Shirbisheh, Lectures on C-star Algebras, v2 — Exercise 2.5.3 and §2.5, printed pp. 48–50"
      url: "https://arxiv.org/pdf/1211.3404"
verification:
  audited: 2026-09-22
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $A$ be a unital
complex Banach algebra, let $a \in A$, and let $E \subseteq \sigma_A(a)$ be
**clopen in the spectrum**, that is, both $E$ and
$\sigma_A(a)\setminus E$ are relatively open in $\sigma_A(a)$
([[def-spectrum-and-resolvent-set-in-a-banach-algebra]]). Equivalently
$E \subseteq \sigma_A(a)$ is closed in $\mathbb C$ — hence compact — and
$\sigma_A(a)\setminus E$ is compact as well, and the two are disjoint.

Choose disjoint open sets $U_1 \supseteq E$ and $U_0 \supseteq
\sigma_A(a)\setminus E$; such sets exist because $E$ and
$\sigma_A(a)\setminus E$ are disjoint compact subsets of the plane. Let

$$\chi_E(z) := \begin{cases} 1, & z \in U_1,\\ 0, & z \in U_0,\end{cases}$$

a locally constant function on the open neighbourhood $U_1 \cup U_0$ of
$\sigma_A(a)$, hence holomorphic there. The **Riesz spectral projection of $a$
associated with $E$** is the calculus value

$$P_E \;:=\; \chi_E(a) \;=\; \frac{1}{2\pi i}\int_\Gamma \chi_E(z)\, R(z,a)\,dz \;\in\; A ,$$

where $\Gamma$ is any cycle with trace in $(U_1\cup U_0)\setminus\sigma_A(a)$
whose index is $1$ at every point of $E$, whose index is $0$ at every point of
$\sigma_A(a)\setminus E$, and whose index is $0$ outside $U_1\cup U_0$ — for
instance the difference $c_{\mathrm{all}} - c_{E}$, where $c_{\mathrm{all}}$ is
admissible for $(\chi_E, U_1\cup U_0)$ and $c_E$ is a cycle with index $1$ on
the compact set $\sigma_A(a)\setminus E$ and index $0$ outside $U_0$ (the zero
cycle when $\sigma_A(a)\setminus E=\varnothing$): the difference has index
$1-0=1$ on $E$, index $1-1=0$ on $\sigma_A(a)\setminus E$, and index $0$
outside $U_1\cup U_0$, because $c_{\mathrm{all}}$ has index $0$ there and
$c_E$ has index $0$ outside $U_0\subseteq U_1\cup U_0$. Such cycles exist by
[[lem-admissible-cycle-around-a-compact-plane-set]] applied to the two compact
sets $\sigma_A(a)$ and $\sigma_A(a)\setminus E$.

Here the equality with the displayed integral, and its independence of the
separating cycle, do not use contour independence outside its admissible-cycle
hypothesis. Indeed, put
$F(z)=\chi_E(z)R(z,a)$ on
$\Omega:=(U_1\setminus E)\cup U_0$. This is Banach-valued holomorphic: it is
$R(z,a)$ on $U_1\setminus E$ and identically zero on $U_0$, so in particular
it extends holomorphically across $\sigma_A(a)\setminus E$. If
$c_{\mathrm{all}}$ is admissible and $\Gamma$ has the separating indices just
specified, then $c_{\mathrm{all}}-\Gamma$ has index zero on $E$ and outside
$U_1\cup U_0$, hence is null-homologous in $\Omega$. Therefore
[[lem-banach-valued-cauchy-integral-vanishes]] gives
$$\int_{c_{\mathrm{all}}}F(z)\,dz=\int_\Gamma F(z)\,dz.$$
The left side is the defining calculus integral for $\chi_E(a)$. Thus every
such $\Gamma$ gives $P_E$, while germ independence of the calculus makes the
value independent of the chosen $U_0,U_1$.

## Remarks

- **The function $\chi_E$ is a germ, and that is all the definition needs.**
  Its definition depends on the chosen neighbourhoods, but every two such
  locally constant functions agree on a neighbourhood of $\sigma_A(a)$, and the
  calculus depends only on the germ
  ([[lem-holomorphic-functional-calculus-is-contour-independent]]).

- **When $E = \sigma_A(a)$ or $E = \varnothing$.** If $E = \sigma_A(a)$ then
  $\chi_E = 1$ on a neighbourhood of the spectrum and $P_E = 1$; if
  $E = \varnothing$ then $\chi_E = 0$ on a neighbourhood of the spectrum and
  $P_E = 0$. Both are consistent with the definition and with the multiplicativity
  of the calculus ([[thm-holomorphic-functional-calculus-homomorphism]]).

- **No idempotence is assumed here.** That $P_E^2 = P_E$ and that $P_E$
  commutes with $a$ are consequences of multiplicativity of the calculus, not
  part of the definition; they are proved for operators in
  [[thm-riesz-spectral-projection-properties]].

- **Why the contour has index one on $E$ and zero on the rest of the
  spectrum.** This makes the integral a function of the *spectral subset* $E$
  alone: replacing the cycle by another with the same indices does not change
  the value, as in the calculus at large. For a single isolated eigenvalue
  $\lambda$ the projection is the classical residue
  (`ex-riesz-projection-for-a-matrix-with-separated-spectrum`).

- **Reading order.** The example items named by ID above are homed on later pages of the plan, so they are named rather than hyperlinked: a body link to later material must be declared as a forward reference, and Step-5b closure removes every such declaration. Rehoming those items to an earlier page (an owner-only reading-order change) would make the citations backward and restore the links.
