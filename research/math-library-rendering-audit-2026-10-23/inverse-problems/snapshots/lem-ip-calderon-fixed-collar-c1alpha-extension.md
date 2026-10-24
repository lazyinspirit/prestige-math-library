---
id: lem-ip-calderon-fixed-collar-c1alpha-extension
kind: lemma
title: Fixed-collar extension of C1alpha conductivities
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-ip-calderon-admissible-conductivity-class
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Caro, García and Reyes, Stability of the Calderón problem for less regular conductivities"
      url: "https://arxiv.org/pdf/1205.2487"
      locator: "Section 2, coefficient extensions; here the fixed background collar permits direct extension instead of a Whitney construction."
dependency_level: 3
---

## Statement

Let $d\ge3$ and let $\gamma\in X_d(R)$ for the domain, collar, ellipticity bounds and exponent $0<\alpha<1$ defining that class. Extend $\gamma$ by $1$ outside $\Omega$, using its continuous representative on $\overline\Omega$. Then $\gamma_e\in C^{1,\alpha}(\mathbb R^d)$, $\gamma_e-1$ has support contained in $\overline{\Omega'}$, and
$$\min\{m,1\}\le\gamma_e\le M,\qquad \sup_{\mathbb R^d}|\gamma_e|\le\max\{R,1\},\qquad \sup_{\mathbb R^d}|\partial_j\gamma_e|\le R,\qquad [\partial_j\gamma_e]_{C^{0,\alpha}(\mathbb R^d)}\le R.$$
Here the Hölder seminorm is $[f]_{C^{0,\alpha}}:=\sup_{x\ne y}|f(x)-f(y)|/|x-y|^\alpha$, and $j=1,\ldots,d$.

## Statement references

[[def-ip-calderon-admissible-conductivity-class|The fixed-background C1alpha class and its maximum norm.]]

## Facts & Assumptions

**Given:** A member $\gamma\in X_d(R)$ with $d\ge3$.

[F1] The class has $\gamma\in C^{1,\alpha}(\overline\Omega)$, each first derivative has supremum and Hölder seminorm at most $R$, $m\le\gamma\le M$ almost everywhere, $M\ge1$, and $\gamma=1$ almost everywhere outside $\Omega'\Subset\Omega$. ([[def-ip-calderon-admissible-conductivity-class]])

## Proof

**Given:** The data in the statement.

1.1 Since $\overline{\Omega'}$ is compact in $\Omega$, every boundary point of $\Omega$ has a neighborhood disjoint from $\overline{\Omega'}$. On the open set $\Omega\setminus\overline{\Omega'}$, continuity and the almost-everywhere background condition force $\gamma=1$ everywhere: otherwise a sufficiently small ball would have positive measure and $|\gamma-1|$ bounded below by a positive number. Thus $\gamma_e$ is identically $1$ in a neighborhood of every boundary point and is $C^1$ globally. Its derivatives vanish off $\Omega$ and near $\partial\Omega$. The same continuity argument promotes the almost-everywhere ellipticity bounds to pointwise bounds in $\Omega$, and the extension gives the claimed global value and derivative bounds. It also shows $\gamma_e-1=0$ outside $\overline{\Omega'}$. [F1, given, algebra]

2.1 For $x,y\in\Omega$, the Hölder estimate for each derivative follows from [F1]. For $x,y\notin\Omega$, both derivatives are zero. In the remaining case take $x\in\Omega$ and $y\notin\Omega$. The segment from $x$ to $y$ has a first exit point $z\in\partial\Omega$, with $|x-z|\le|x-y|$. By step 1.1, $\partial_j\gamma_e(z)=\partial_j\gamma_e(y)=0$. Applying the original Hölder estimate on $\overline\Omega$ to $x,z$ gives $|\partial_j\gamma_e(x)-\partial_j\gamma_e(y)|\le R|x-z|^\alpha\le R|x-y|^\alpha$. These cases exhaust all pairs, establishing the global seminorm and hence $C^{1,\alpha}$ regularity. [F1, step 1.1, algebra] ∎
