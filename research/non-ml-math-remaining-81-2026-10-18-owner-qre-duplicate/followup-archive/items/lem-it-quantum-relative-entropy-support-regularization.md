---
id: lem-it-quantum-relative-entropy-support-regularization
kind: lemma
title: Support-sensitive regularization limit for quantum relative entropy
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps: [def-it-finite-dimensional-quantum-relative-entropy, thm-non-negative-operator-characterisations, thm-non-negative-square-root-exists-and-is-unique, def-natural-logarithm, thm-logarithm-derivative-and-integral, thm-trace-of-ab-equals-trace-of-ba]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information, §§5.2.1 and 5.2.3"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, arXiv:1106.1445v8, §11.8"
      url: "https://arxiv.org/pdf/1106.1445v8"
---

## Statement

For non-negative $A,B$ on a finite-dimensional complex inner-product space,

$$\lim_{\varepsilon\downarrow0}D(A+\varepsilon I\|B+\varepsilon I)=D(A\|B),$$

where the right side may be $+\infty$ under the support convention of [[def-it-finite-dimensional-quantum-relative-entropy]].

## Facts & Assumptions

**Given:** The finite-dimensional non-negative operators $A,B$ in the Statement.

[F1] [[def-it-finite-dimensional-quantum-relative-entropy]]: $D(A\|B)$ is finite exactly when $\operatorname{supp}(A)\subseteq\operatorname{supp}(B)$, and on that branch it is the difference of the two spectral logarithmic traces.

[F2] [[thm-non-negative-operator-characterisations]]: $A,B$ have orthonormal eigenbases with nonnegative eigenvalues.

[F3] [[thm-non-negative-square-root-exists-and-is-unique]]: $\langle Av,v\rangle=\|A^{1/2}v\|^2$, so zero quadratic form for a non-negative operator implies it annihilates the vector.

[F4] [[thm-logarithm-derivative-and-integral]]: the scalar natural logarithm is continuous on $(0,\infty)$ and has derivative $1/t$ there.

## Proof

1.1 First suppose $\operatorname{supp}(A)\subseteq\operatorname{supp}(B)$. Choose an orthonormal eigenbasis $(e_j)$ of $B$ with eigenvalues $b_j\ge0$, and put $a_j:=\langle Ae_j,e_j\rangle\ge0$. If $b_j=0$, then $e_j\in\ker B\subseteq\ker A$, so $a_j=0$. Hence

$$\operatorname{tr}(A\ln(B+\varepsilon I))=\sum_{j:b_j>0}a_j\ln(b_j+\varepsilon)+\sum_{j:b_j=0}0\ln\varepsilon\longrightarrow\operatorname{tr}(A\ln B),$$

while $\varepsilon\operatorname{tr}(\ln(B+\varepsilon I))\to0$ because $\varepsilon\ln\varepsilon\to0$ and there are finitely many eigenvalues. The eigenvalues of $A+\varepsilon I$ are $a'_j+\varepsilon$ if $a'_j$ are those of $A$; continuity of $t\ln t$ at $0$ with value $0$ gives $\operatorname{tr}((A+\varepsilon I)\ln(A+\varepsilon I))\to\operatorname{tr}(A\ln A)$. Substituting in the definition proves the limit in this case. [given, F1, F2, F4, algebra, choose]

2.1 Now suppose $\operatorname{supp}(A)\nsubseteq\operatorname{supp}(B)$. There is a unit vector $e\in\ker B\setminus\ker A$, so $a:=\langle Ae,e\rangle>0$ by [F3]. In an orthonormal eigenbasis of $B$, the coefficient of $\ln\varepsilon$ in $\operatorname{tr}(A\ln(B+\varepsilon I))$ is the sum of nonnegative diagonal coefficients on $\ker B$, at least $a>0$. All positive-eigenvalue terms remain bounded, so this cross trace tends to $-\infty$. The entropy trace $\operatorname{tr}((A+\varepsilon I)\ln(A+\varepsilon I))$ has a finite limit as in step 1.1, and the additional $\varepsilon\operatorname{tr}(\ln(B+\varepsilon I))$ tends to zero. Therefore the relative entropy tends to $+\infty$, equal to the right side of the Statement. [given, F1, F2, F3, F4, step 1.1, algebra, choose] ∎

