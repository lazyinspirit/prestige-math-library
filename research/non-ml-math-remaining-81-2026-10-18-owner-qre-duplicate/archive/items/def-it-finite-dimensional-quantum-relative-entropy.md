---
id: def-it-finite-dimensional-quantum-relative-entropy
kind: definition
title: Finite-dimensional quantum relative entropy
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps: [def-it-von-neumann-entropy, def-qc-density-operator, thm-non-negative-operator-characterisations, def-trace-of-an-endomorphism, thm-trace-of-ab-equals-trace-of-ba]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information, §5.2.1"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, arXiv:1106.1445v8, §11.8"
      url: "https://arxiv.org/pdf/1106.1445v8"
---

## Definition

Let $H$ be a finite-dimensional complex inner-product space and let $A,B\in\operatorname{End}(H)$ be non-negative operators. For any such operator $A$, define $\operatorname{supp}(A):=(\ker A)^\perp$, agreeing with the support convention for density operators in [[def-qc-density-operator]], and let $P_A$ denote the orthogonal projection onto this subspace. If $\operatorname{supp}(A)\subseteq\operatorname{supp}(B)$, define

$$D(A\|B):=\operatorname{tr}(A\ln A)-\operatorname{tr}(A\ln B),$$

where each logarithm is defined by spectral calculus on the positive eigenspaces, $0\ln0:=0$, and the second trace is taken on $\operatorname{supp}(B)$ (equivalently, $A$ vanishes on $\ker B$ under the support condition). If $\operatorname{supp}(A)\nsubseteq\operatorname{supp}(B)$, set $D(A\|B):=+\infty$. In particular, $D(0\|B)=0$. For density operators this is **quantum relative entropy**; the logarithms are natural, so the value is in nats. The base-two value is $D_2(A\|B):=D(A\|B)/\ln2$.

