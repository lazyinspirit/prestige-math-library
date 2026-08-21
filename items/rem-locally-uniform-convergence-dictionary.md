---
id: rem-locally-uniform-convergence-dictionary
kind: remark
title: "Locally uniform convergence on an open subset of the complex plane is compact convergence"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topology-of-compact-convergence, thm-heine-borel-rn, lem-compactness-is-intrinsic]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
sources:
  scraped: []
  references:
    - title: "Lars Ahlfors, Complex Analysis, 3rd ed., Ch. 5 §1.1"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "E. Stein and R. Shakarchi, Complex Analysis, Ch. 2 §5.2"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
    - title: "Matthias Weber, Complex Analysis, §2.4"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
pipeline_run: null
---

## Remark

Let $\Omega\subseteq\mathbb C$ be open, and let $f_n,f:\Omega\to\mathbb C$ be continuous. The sequence $(f_n)$ converges **locally uniformly** to $f$ when each $a\in\Omega$ has an open neighbourhood $V\subseteq\Omega$ on which $f_n\to f$ uniformly. This is equivalent to uniform convergence on every compact subset of $\Omega$, hence to convergence in the topology of compact convergence of [[def-topology-of-compact-convergence]].

Indeed, suppose first that convergence is uniform on compact subsets. Openness gives $r>0$ with the closed disc $\overline D(a,r)\subseteq\Omega$ after shrinking an available ball; this closed disc is compact by [[thm-heine-borel-rn]], so convergence is uniform on the neighbourhood $D(a,r)$. Conversely, suppose convergence is uniform on a neighbourhood $V_x$ of every $x\in\Omega$. For a compact $K\subseteq\Omega$ and $\varepsilon>0$, the sets $V_x$ cover $K$, and compactness in the ambient space ([[lem-compactness-is-intrinsic]]) gives a finite subcover. Taking the largest of the corresponding finitely many convergence thresholds makes $|f_n-f|<\varepsilon$ throughout $K$. The empty compact set satisfies the uniform condition vacuously.
