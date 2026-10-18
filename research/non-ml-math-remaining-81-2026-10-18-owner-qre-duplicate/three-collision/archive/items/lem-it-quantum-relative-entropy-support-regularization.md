---
id: lem-it-quantum-relative-entropy-support-regularization
kind: lemma
title: Support-sensitive regularization limit for quantum relative entropy
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps: [def-it-finite-dimensional-quantum-relative-entropy, thm-non-negative-operator-characterisations, thm-non-negative-square-root-exists-and-is-unique, def-natural-logarithm, thm-natural-logarithm-laws, lem-natural-logarithm-bounded-by-argument, thm-trace-of-ab-equals-trace-of-ba]
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

[F4] [[thm-natural-logarithm-laws]]: the natural logarithm is strictly increasing and tends to $-\infty$ as its positive argument tends to $0$.

[F5] [[lem-natural-logarithm-bounded-by-argument]]: for $x\ge1$, $0\le\ln x\le x-1$.

## Proof

1.1 First suppose $\operatorname{supp}(A)\subseteq\operatorname{supp}(B)$. Taking orthogonal complements gives $\ker B\subseteq\ker A$. Choose an orthonormal eigenbasis $(e_j)$ of $B$ with eigenvalues $b_j\ge0$, and put $a_j:=\langle Ae_j,e_j\rangle\ge0$. If $b_j=0$, then $e_j\in\ker B\subseteq\ker A$, so $a_j=0$. Hence

$$\operatorname{tr}(A\ln(B+\varepsilon I))=\sum_{j:b_j>0}a_j\ln(b_j+\varepsilon)+\sum_{j:b_j=0}0\ln\varepsilon\longrightarrow\operatorname{tr}(A\ln B),$$

while $\varepsilon\operatorname{tr}(\ln(B+\varepsilon I))\to0$. Indeed, for $0<\varepsilon\le1$, set $u=\varepsilon^{-1/2}\ge1$; [F5] gives $0\le\varepsilon\ln(1/\varepsilon)=2\varepsilon\ln u\le2(\sqrt\varepsilon-\varepsilon)\to0$. Applying the same bound to eigenvalues $a'_j+\varepsilon$ shows $t\ln t\to0$ at $t=0$; thus $\operatorname{tr}((A+\varepsilon I)\ln(A+\varepsilon I))\to\operatorname{tr}(A\ln A)$. Substituting in the definition proves the limit in this case. [given, F1, F2, F4, F5, algebra, choose]

2.1 Now suppose $\operatorname{supp}(A)\nsubseteq\operatorname{supp}(B)$. There is a unit vector $e\in\ker B\setminus\ker A$, so $a:=\langle Ae,e\rangle>0$ by [F3]. In an orthonormal eigenbasis of $B$, the sum of nonnegative diagonal coefficients of $A$ on $\ker B$ is therefore positive and multiplies $\ln\varepsilon\to-\infty$ in $\operatorname{tr}(A\ln(B+\varepsilon I))$. Terms from positive eigenvalues of $B$ remain bounded. The entropy trace $\operatorname{tr}((A+\varepsilon I)\ln(A+\varepsilon I))$ has a finite limit as in step 1.1, and the additional $\varepsilon\operatorname{tr}(\ln(B+\varepsilon I))$ tends to zero by [F4]–[F5]. Therefore the relative entropy tends to $+\infty$, equal to the right side of the Statement. [given, F1, F2, F3, F4, F5, step 1.1, algebra, choose] ∎

