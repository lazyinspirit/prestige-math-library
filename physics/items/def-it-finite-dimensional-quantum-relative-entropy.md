---
id: def-it-finite-dimensional-quantum-relative-entropy
kind: definition
title: Finite-dimensional quantum relative entropy
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps: [def-it-von-neumann-entropy, def-qc-density-operator, def-kernel-and-image-of-a-linear-map, thm-non-negative-operator-characterisations, def-trace-of-an-endomorphism, thm-trace-of-ab-equals-trace-of-ba]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information, §5.2.1"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, arXiv:1106.1445v8, §11.8"
      url: "https://arxiv.org/pdf/1106.1445v8"
---

## Definition

Let $H$ be a finite-dimensional complex inner-product space and let $A,B:H\to H$ be non-negative operators. For such an operator $A$, set $\operatorname{supp}(A):=(\ker A)^\perp$, where $\ker A$ is the kernel of a linear map ([[def-kernel-and-image-of-a-linear-map]]); this extends the density-operator support convention in [[def-qc-density-operator]]. If $\operatorname{supp}(A)\subseteq\operatorname{supp}(B)$, define

$$D(A\|B):=\operatorname{tr}(A\ln A)-\operatorname{tr}(A\ln B).$$

Here $\ln A$ is defined spectrally on the positive eigenspaces of $A$ with $0\ln0:=0$, and $\ln B$ in the cross term is restricted to $\operatorname{supp}(B)$; the support condition ensures that $A$ vanishes on $\ker B$, so the omitted kernel contributes zero. If $\operatorname{supp}(A)\nsubseteq\operatorname{supp}(B)$, set $D(A\|B):=+\infty$. In particular, $D(0\|B)=0$. For density operators this is the finite-dimensional **quantum relative entropy**. The logarithms are natural, so the value is in nats; the base-two value is $D_2(A\|B):=D(A\|B)/\ln2$.

