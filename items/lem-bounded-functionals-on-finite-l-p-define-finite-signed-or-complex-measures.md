---
id: lem-bounded-functionals-on-finite-l-p-define-finite-signed-or-complex-measures
kind: lemma
title: "On a finite-measure space, a bounded functional on $L^p$ defines a finite signed measure"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-bounded-linear-functional-on-l-p-and-its-operator-norm, def-signed-measure, thm-dominated-convergence]
proof_strategy: "Define $\\nu(E)=\\Lambda([\\mathbf 1_E])$. Finite measure puts every indicator in $L^p$, and countable additivity comes from $L^p$ convergence of partial indicator sums plus continuity of $\\Lambda$."
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Theorem 6.15"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Theorem 15.11"
      url: "https://www.math.wustl.edu/~victor/classes/ma5051/rags100514.pdf"
    - title: "John K. Hunter, Measure Theory, Theorem 7.14"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Let $(X,\mathcal A,\mu)$ be a finite measure space, let $1 \le p < \infty$,
and let $\Lambda:L^p(\mu)\to\mathbb R$ be a bounded linear functional. Define
$$\nu(E):=\Lambda([\mathbf 1_E])\qquad(E \in \mathcal A).$$
Then $\nu$ is a finite signed measure on $(X,\mathcal A)$.

## Facts & Assumptions

**Given:** A finite measure space $(X,\mathcal A,\mu)$, an exponent $1 \le p < \infty$, and a bounded linear functional $\Lambda:L^p(\mu)\to\mathbb R$.

[L1] A bounded linear functional on $L^p(\mu)$ is linear and continuous with respect to the $L^p$ norm ([[def-bounded-linear-functional-on-l-p-and-its-operator-norm]]).

[L2] A real-valued countably additive set function with finite values is a signed measure ([[def-signed-measure]]).

[L3] Dominated convergence applies to integrable majorants ([[thm-dominated-convergence]]).

## Proof

**Proof technique:** Define $\nu(E)=\Lambda([\mathbf 1_E])$. Finite measure puts every indicator in $L^p$, and countable additivity comes from $L^p$ convergence of partial indicator sums plus continuity of $\Lambda$.

1.1 For every measurable $E \subseteq X$, $$\int |\mathbf 1_E|^p\,d\mu=\mu(E)\le\mu(X)<\infty,$$ so $[\mathbf 1_E] \in L^p(\mu)$ and $\nu(E)$ is a finite scalar. Also $\nu(\varnothing)=\Lambda(0)=0$. [L1, given]

1.2 Let $(E_n)$ be pairwise disjoint measurable sets, and put $$E:=\bigcup_{n=1}^\infty E_n,\qquad s_N:=\sum_{n=1}^N \mathbf 1_{E_n}=\mathbf 1_{\bigcup_{n=1}^N E_n}.$$ Then $s_N \to \mathbf 1_E$ pointwise and $$|s_N-\mathbf 1_E|^p=\mathbf 1_{\bigcup_{n>N}E_n}\le \mathbf 1_E.$$ Because $\mu(X)<\infty$, the majorant $\mathbf 1_E$ is integrable, so [L3] gives $$\|[s_N]-[\mathbf 1_E]\|_p^p=\int |s_N-\mathbf 1_E|^p\,d\mu\longrightarrow0.$$ [L3, given, construct]

2.1 If $A,B \in \mathcal A$ are disjoint, then $\mathbf 1_{A \cup B}=\mathbf 1_A+\mathbf 1_B$. By linearity of $\Lambda$, $$\nu(A \cup B)=\Lambda([\mathbf 1_A+\mathbf 1_B]) =\Lambda([\mathbf 1_A])+\Lambda([\mathbf 1_B]) =\nu(A)+\nu(B).$$ So $\nu$ is finitely additive on disjoint measurable sets. [L1, step 1.1, algebra]

3.1 By continuity of $\Lambda$ from [L1], finite additivity from step 2.1, and the convergence from step 1.2, $$\nu(E)=\Lambda([\mathbf 1_E])=\lim_{N\to\infty}\Lambda([s_N]) =\lim_{N\to\infty}\sum_{n=1}^N \nu(E_n).$$ So $\nu$ is countably additive. Together with step 1.1, [L2] shows that $\nu$ is a finite signed measure. [L1, L2, step 1.1, step 1.2, step 2.1] ∎
