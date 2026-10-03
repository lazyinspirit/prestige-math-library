---
id: lem-sobolev-trace-agrees-with-continuous-boundary-values
kind: lemma
title: "The trace agrees with classical restriction for continuous Sobolev functions"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [thm-lp-trace-operator-on-a-bounded-c-one-domain, def-bounded-c-k-domain-and-boundary-charts, def-surface-integral-on-a-compact-c-one-hypersurface, def-sobolev-space-wkp-and-its-norm, def-l-p-space-as-a-quotient-by-null-functions, def-countable-choice, thm-lebesgue-measure-of-a-box-of-every-kind, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (archived 2025 author manuscript)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Section 9.2, Theorem 9.18 statement, printed p. 209: $Tf=f|_{\\partial U}$ for continuous functions."
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, complete 158-page graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "Chapter 3, Section 3.7, Theorem 3.14, opening clause and Step 4, printed pp. 62-64."
    - title: "Armin Schikorra, Partial Differential Equations (University of Pittsburgh, version 4 December 2019)"
      url: "https://sites.pitt.edu/~armin/pde1_2019/pde_script.pdf"
      locator: "Chapter III, Section III.3.5, Theorem III.3.21(1), printed p. 76."
---

## Statement

Assume the Axiom of Choice. Let $\Omega\subset\mathbb R^n$, $n\ge2$, be a
bounded $C^1$ domain, $1\le p<\infty$, and let
$u\in W^{1,p}(\Omega;\mathbb K)$ admit a representative
$\tilde u\in C(\overline\Omega;\mathbb K)$. Then, with $T$ the trace operator
of [[thm-lp-trace-operator-on-a-bounded-c-one-domain]],
$$Tu=\tilde u|_{\partial\Omega}\qquad\text{in }L^p(\partial\Omega);$$
in particular $Tu=0$ whenever such a representative vanishes on
$\partial\Omega$. Two representatives continuous on $\overline\Omega$ of the
same class have the same restriction to $\partial\Omega$.

## Facts & Assumptions

**Given:** The Axiom of Choice; a bounded $C^1$ domain $\Omega$; $1\le p<\infty$; a class $u\in W^{1,p}(\Omega;\mathbb K)$ and a representative $\tilde u\in C(\overline\Omega;\mathbb K)$; and the trace operator $T$ of [[thm-lp-trace-operator-on-a-bounded-c-one-domain]].

[F1] $T:W^{1,p}(\Omega)\to L^p(\partial\Omega)$ is the unique bounded linear operator with $Tu=u|_{\partial\Omega}$ for every $u\in C(\overline\Omega)\cap W^{1,p}(\Omega)$, where $L^p(\partial\Omega)$ uses the chart-independent surface measure of [[def-surface-integral-on-a-compact-c-one-hypersurface]]. ([[thm-lp-trace-operator-on-a-bounded-c-one-domain]])

[F2] Membership in $W^{1,p}(\Omega)$ is a property of the $L^p$ class: a representative differing on a null set defines the same class and the same weak derivatives, and classes are almost-everywhere classes. ([[def-sobolev-space-wkp-and-its-norm]], [[def-l-p-space-as-a-quotient-by-null-functions]])

[F3] If two continuous functions on an open set $\Omega\subseteq\mathbb R^n$ agree almost everywhere, they agree everywhere: the disagreement set is open, and a nonempty open subset of $\mathbb R^n$ contains a nondegenerate box, which has positive Lebesgue measure by the box formula. ([[thm-lebesgue-measure-of-a-box-of-every-kind]])

[F4] Every point of the topological boundary $\partial\Omega$ of an open set $\Omega$ is the limit of a sequence in $\Omega$; hence a function continuous on $\overline\Omega$ is determined on $\partial\Omega$ by its values on $\Omega$.

## Proof

**Proof technique:** direct.

1.1 The trace is the classical restriction. The representative $\tilde u$ lies in $C(\overline\Omega)\cap W^{1,p}(\Omega)$: its class is the class of $u$, so it is an element of $W^{1,p}(\Omega)$ in the quotient sense, and it is continuous on the compact set $\overline\Omega$ by hypothesis. By the defining property of $T$ in [F1], $Tu=\tilde u|_{\partial\Omega}$ in $L^p(\partial\Omega)$. [F1, F2, algebra, given]

1.2 Continuous representatives are unique on $\partial\Omega$. Let $\tilde u,\tilde v\in C(\overline\Omega)$ represent the same class. Then $\tilde u=\tilde v$ almost everywhere on $\Omega$, so by [F3] they agree everywhere on $\Omega$ (the disagreement set, if nonempty, would be a nonempty open subset of $\Omega$ and would have positive measure). For $x\in\partial\Omega$ take $x_m\in\Omega$ with $x_m\to x$ by [F4]; then $\tilde u(x)=\lim_m\tilde u(x_m)=\lim_m\tilde v(x_m)=\tilde v(x)$ by continuity of both functions on $\overline\Omega$. Hence the restrictions to $\partial\Omega$ coincide. [F3, F4, algebra]

2.1 Conclusion. Step 1.1 gives $Tu=\tilde u|_{\partial\Omega}$; if $\tilde u$ vanishes on $\partial\Omega$ then $Tu=0$ in $L^p(\partial\Omega)$, and step 1.2 shows that two such continuous representatives have the same boundary restriction, so the identity is independent of the choice of continuous representative. [step 1.1, step 1.2, algebra, given] ∎

## Source notes

Teschl's Theorem 9.18 (printed p. 209) states $Tf=f|_{\partial U}$ for
continuous functions; Laugesen's opening clause and Step 4 of Theorem 3.14
(printed pp. 62-64) and Schikorra's Theorem III.3.21(1) (printed p. 76) record
the same agreement. The lemma above is the formal unpacking of the defining
clause of the trace operator together with the elementary uniqueness of a
continuous representative on the boundary.
