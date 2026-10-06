---
id: cex-a-normalised-cube-indicator-is-not-a-hone-atom
kind: counterexample
title: "A normalised cube indicator is not an $H^1$ atom"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps: [def-hp-atom-with-moment-order, def-multidimensional-rectangle-and-volume, thm-lebesgue-measure-of-a-box-of-every-kind, def-l-p-space-as-a-quotient-by-null-functions, def-countable-choice]
justified_by: []
aliases: []
landmark: false
generation:
  role: counterexample
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Stefano Meda, Peter Sjogren, Maria Vallarino, Atomic decompositions and operators on Hardy spaces, Revista de la Union Matematica Argentina 50 (2009), no. 2, 15-22"
      url: "https://inmabb.criba.edu.ar/revuma/pdf/v50n2/v50n2a02.pdf"
      locator: "section 1, p. 16: the unit-ball indicator is 'not in $H^p$ for any $0<p\\le1$' because of the missing cancellation"
    - title: "Li-An Daniel Wang, Multiplier Theorems on Anisotropic Hardy Spaces (PhD dissertation, University of Oregon, 2012)"
      url: "https://scholarsbank.uoregon.edu/bitstreams/9f6ef525-2867-467f-8ce0-ae7bfbeca1c1/download"
      locator: "Remark 1.1, printed pp. 10-11: the vanishing-moment condition is independent of the size normalisation"
verification:
  precheck: pass
---

## Statement refuted

Assume Countable Choice ([[def-countable-choice]]). The claim refuted is that the support and $L^\infty$ size conditions alone
characterise $(1,\infty,0)$-atoms, in particular that the normalised cube
indicator is an atom. Let $Q\subseteq\mathbb R^n$ be a nondegenerate
axis-parallel cube and put $a=|Q|^{-1}\mathbf 1_Q$. Then
$\operatorname{supp}a\subseteq Q$ and
$|a|=|Q|^{-1}\mathbf 1_Q\le|Q|^{-1}$ pointwise, so $a$ satisfies the support and size
conditions of a $(1,\infty,0)$-atom
([[def-hp-atom-with-moment-order]]); but
$\int_{\mathbb R^n}a=|Q|^{-1}|Q|=1\ne0$, so the zeroth-moment condition fails
and $a$ is not an atom. This refutes only the atom property; it does not by
itself prove $|Q|^{-1}\mathbf 1_Q\notin H^1$, which is the separate and
stronger counterexample on this page and requires the vanishing-moment
corollary.

## Facts & Assumptions

**Given:** Countable Choice and $n\ge1$, a nondegenerate closed axis-parallel cube $Q$ with volume $|Q|$ in the sense of [[def-multidimensional-rectangle-and-volume]], and the function $a=|Q|^{-1}\mathbf 1_Q$.

[L1] A $(1,\infty,0)$-atom is a measurable $a$ with $\operatorname{supp}a\subseteq Q$, $|a|\le|Q|^{-1}$ almost everywhere, and $\int_{\mathbb R^n}a=0$ ([[def-hp-atom-with-moment-order]]).

[F1] $|Q|>0$ and $\int_{\mathbb R^n}\mathbf 1_Q=|Q|$ ([[thm-lebesgue-measure-of-a-box-of-every-kind]], [[def-multidimensional-rectangle-and-volume]]); $L^1$ is the quotient by almost-everywhere null functions ([[def-l-p-space-as-a-quotient-by-null-functions]]).

## Counterexample

The witness is the pair $(Q,a)$ with $a=|Q|^{-1}\mathbf 1_Q$.

1.1 **The support and size conditions hold.** Since $\mathbf 1_Q$ vanishes off $Q$, $\operatorname{supp}a\subseteq Q$, and $|a|=|Q|^{-1}\mathbf 1_Q\le|Q|^{-1}$ pointwise. [L1, given]

1.2 **The moment condition fails.** By [F1], $\int_{\mathbb R^n}a=|Q|^{-1}\int\mathbf 1_Q=|Q|^{-1}|Q|=1$, which is nonzero because $|Q|>0$. Hence the zeroth-moment requirement $\int a=0$ of [L1] fails, and $a$ is not a $(1,\infty,0)$-atom. [L1, F1, algebra]

2.1 **Conclusion.** The function $a$ meets the support and size parts of the atom definition but not the cancellation part; therefore the support and size conditions alone do not suffice for the atom property, and the moment condition is a genuine part of [[def-hp-atom-with-moment-order]]. [step 1.1, step 1.2] ∎
