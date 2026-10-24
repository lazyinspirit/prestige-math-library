---
id: cex-an-lone-function-with-nonzero-integral-is-not-in-real-hone
kind: counterexample
title: "A compactly supported $L^1$ function of nonzero integral is not in $H^1$"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 11
deps: [cor-integrable-hardy-functions-have-vanishing-moments-in-the-atomic-range, def-real-hardy-space-by-a-radial-maximal-function, def-multidimensional-rectangle-and-volume, thm-lebesgue-measure-of-a-box-of-every-kind, def-countable-choice, thm-atomic-characterisation-of-real-hp, def-hp-atom-with-moment-order, thm-complex-lp-completeness-and-almost-everywhere-subsequences, thm-holder-inequality-for-integrals]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mark Williams, Notes on Harmonic Analysis (January 11, 2022)"
      url: "https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf"
      locator: "Proposition 6.10(b) and footnote 47, printed p. 26: elements of $H^1$ satisfy $\\int f\\,dx=0$, so $H^1\\subsetneq L^1$"
    - title: "Stefano Meda, Peter Sjogren, Maria Vallarino, Atomic decompositions and operators on Hardy spaces, Revista de la Union Matematica Argentina 50 (2009), no. 2, 15-22"
      url: "https://inmabb.criba.edu.ar/revuma/pdf/v50n2/v50n2a02.pdf"
      locator: "section 1, p. 16: the unsplit indicator is not in $H^p$, while the split difference is"
verification:
  precheck: pass
---

## Statement refuted

Assume Countable Choice ([[def-countable-choice]]). The claim refuted is that the size and compact support of an $L^1$ function
suffice for membership in $H^1$. Let $f\in L^1(\mathbb R^n)$ be compactly
supported with $\int_{\mathbb R^n}f\ne0$; for instance $f=\mathbf 1_Q$ for a
nondegenerate cube $Q$. Then $f\notin H^1(\mathbb R^n)$. Consequently $H^1(\mathbb R^n)\subsetneq L^1(\mathbb R^n)$: the atomic characterisation gives the inclusion, and $\mathbf 1_Q$ is in $L^1$ but outside $H^1$. In particular no compactly supported integrable function of nonzero integral is an $H^1$ atom or a finite sum of atoms.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, a compactly supported $f\in L^1(\mathbb R^n)$ with $\int_{\mathbb R^n}f\ne0$, and the space $H^1$ of [[def-real-hardy-space-by-a-radial-maximal-function]].

[A1] Countable Choice is assumed ([[def-countable-choice]]).

[L1] Vanishing moments: if $g\in H^1$ is represented by a locally integrable function with $g\in L^1$, then $\int_{\mathbb R^n}g=0$ ([[cor-integrable-hardy-functions-have-vanishing-moments-in-the-atomic-range]] with $p=1$, $s=0$).

[F1] For a nondegenerate cube $Q$, $\mathbf 1_Q\in L^1_c$ with $\int\mathbf 1_Q=|Q|>0$ ([[def-multidimensional-rectangle-and-volume]], [[thm-lebesgue-measure-of-a-box-of-every-kind]]).


[F2] Every $g\in H^1$ has an atomic representation $g=\sum_j\lambda_ja_j$ in $\mathcal S'$ with $\sum_j|\lambda_j|<\infty$; the $(1,\infty,0)$-atoms obey $\|a_j\|_1\le1$ ([[thm-atomic-characterisation-of-real-hp]], [[def-hp-atom-with-moment-order]]). Complex $L^1$ is complete under Countable Choice ([[thm-complex-lp-completeness-and-almost-everywhere-subsequences]]).

[F3] The integral pairing satisfies $|\int uv|\le\|u\|_1\|v\|_\infty$ for $u\in L^1$ and $v\in L^\infty$ ([[thm-holder-inequality-for-integrals]]).

The witness is a compactly supported $f\in L^1$ with $\int f\ne0$, for instance $f=\mathbf 1_Q$.

## Counterexample

**Proof technique:** direct.

1.1 **The witness is admissible.** For $f=\mathbf 1_Q$ with $Q$ nondegenerate, $f$ is compactly supported and integrable, and $\int f=|Q|>0$ by [F1]; more generally the assumed $f$ is itself compactly supported in $L^1$ with nonzero integral. [F1, given]

1.2 **Every $H^1$ element has an $L^1$ representative.** For $g\in H^1$, take the representation of [F2]. Its partial sums $S_N=\sum_{j\le N}\lambda_ja_j$ are Cauchy in $L^1$, since $\|S_M-S_N\|_1\le\sum_{N<j\le M}|\lambda_j|$. By completeness they converge to $h\in L^1$. For every Schwartz test $\psi$, [F3] gives $|\int(S_N-h)\psi|\le\|S_N-h\|_1\|\psi\|_\infty\to0$, whereas the atomic series converges to $g$ in $\mathcal S'$. Thus $g$ is the regular distribution of $h$, proving $H^1\subseteq L^1$. [A1, F2, F3, algebra]

2.1 **Nonzero integral excludes $H^1$.** Suppose $f\in H^1$. Since $f$ is (represented by) an $L^1$ function, [L1] forces $\int f=0$, contradicting the hypothesis $\int f\ne0$. Hence $f\notin H^1$; specializing to $\mathbf 1_Q$ gives $\mathbf 1_Q\notin H^1$ with $\mathbf 1_Q\in L^1$, so $H^1\subsetneq L^1$. [L1, step 1.1, step 1.2, given]

3.1 **Consequences for atoms.** Every $(1,\infty,0)$-atom has integral zero by definition, so a compactly supported integrable function with nonzero integral is not an atom; and since finite sums of atoms have zero integral as well, such a function is not a finite sum of atoms either, in accordance with its exclusion from $H^1$. [L1, step 2.1]

4.1 **Conclusion.** The compactly supported $L^1$ function of nonzero integral is a witness that $L^1\nsubseteq H^1$; together with step 1.2 this proves $H^1\subsetneq L^1$, and refutes the claimed sufficiency of compact support and integrability. [step 1.1, step 1.2, step 2.1, step 3.1] ∎
