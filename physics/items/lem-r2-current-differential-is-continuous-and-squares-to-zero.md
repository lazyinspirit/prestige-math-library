---
id: lem-r2-current-differential-is-continuous-and-squares-to-zero
kind: lemma
title: "The current differential is continuous and squares to zero"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
dependency_level: 1
deps:
  - def-r2-compact-de-rham-current-of-a-source-cycle
  - thm-local-coordinate-formula-for-the-exterior-derivative
  - thm-the-exterior-derivative-squares-to-zero
dependency_roles:
  def-r2-compact-de-rham-current-of-a-source-cycle: mathematical-premise
  thm-local-coordinate-formula-for-the-exterior-derivative: mathematical-premise
  thm-the-exterior-derivative-squares-to-zero: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  scraped: []
  references:
    - title: "Tien-Cuong Dinh and Nessim Sibony, Introduction to the Theory of Currents, §§3.1–3.2"
      url: "https://people.math.harvard.edu/~demarco/Math274/DinhSibony_Introduction.pdf"
    - title: "Victor Guillemin and Peter J. Haine, Differential Forms, MIT 18.952 course book, §5.5"
      url: "https://math.mit.edu/classes/18.952/2018SP/files/18.952_book.pdf"
---

## Statement

Let $X$ be a compact oriented smooth $n$-manifold without boundary and let $T$ be a degree-$k$ de Rham current as in [[def-r2-compact-de-rham-current-of-a-source-cycle]]. Then $dT$ is a continuous current of degree $k+1$ and $d^2T=0$, with the zero-current convention at degrees outside $0,\ldots,n$.

## Statement references

[[def-r2-compact-de-rham-current-of-a-source-cycle]]

## Facts & Assumptions

**Given:** The manifold $X$, the degree $k$, and a continuous linear functional $T:\Omega^{n-k}(X)\to\mathbb R$.

[F1] [[def-r2-compact-de-rham-current-of-a-source-cycle]] defines degree-$k$ currents as continuous linear functionals on $\Omega^{n-k}(X)$ and sets $dT(\eta)=(-1)^{k+1}T(d\eta)$.

[F2] [[thm-local-coordinate-formula-for-the-exterior-derivative]] gives $d(\sum_I f_I\,dx^I)=\sum_I df_I\wedge dx^I$ in every smooth chart.

[F3] [[thm-the-exterior-derivative-squares-to-zero]] states $d(d\eta)=0$ for every smooth form $\eta$.

## Proof

**Given:** Use the seminorms defining the $C^\infty$ topology in [F1].

1.1 If $k=n$, then $dT=0$ by the convention in [F1], hence it is continuous. Suppose $k<n$. In a chart, [F2] expresses each coefficient of $d\eta$ as a finite signed sum of first partial derivatives of coefficients of $\eta$. Therefore, for every compact coordinate set $K$ and order $m$, the order-$m$ seminorm of $d\eta$ on $K$ is bounded by a finite constant times the order-$(m+1)$ seminorms of $\eta$ on the same set. Since $T$ is continuous, continuity at zero and linearity give finitely many seminorms $p_j$ and a constant $C$ with $|T(\xi)|\le C\max_j p_j(\xi)$: continuity supplies a neighborhood on which $|T|<1$, and scaling any nonzero $\xi$ into that neighborhood gives the bound. Applying it to $\xi=d\eta$ proves that $\eta\mapsto(-1)^{k+1}T(d\eta)$ is continuous. Thus $dT$ is a current. [F1, F2, given, algebra]

2.1 If $k<n-1$, then for every $\zeta\in\Omega^{n-k-2}(X)$, applying the definition twice gives $$\langle d^2T,\zeta\rangle=(-1)^{k+2}\langle dT,d\zeta\rangle=(-1)^{k+2}(-1)^{k+1}\langle T,d^2\zeta\rangle=0$$ by [F3]. If $k=n-1$, then $dT$ has degree $n$ and its differential is zero by the top-degree convention in [F1]. If $k=n$, then $dT=0$ already by [F1]. Hence $d^2T=0$ also at both endpoints. [F1, F3, step 1.1, given, algebra] ∎

## Statement references

[[thm-local-coordinate-formula-for-the-exterior-derivative]]

[[thm-the-exterior-derivative-squares-to-zero]]

