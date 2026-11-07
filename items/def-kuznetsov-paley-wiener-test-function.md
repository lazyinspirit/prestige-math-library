---
id: def-kuznetsov-paley-wiener-test-function
kind: definition
title: "Even Paley–Wiener Test Function for Kuznetsov"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-complex-differentiability-holomorphic-and-entire
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "A. Knightly and C. Li, Kuznetsov's Trace Formula and the Hecke Eigenvalues of Maass Forms, Memoirs of the AMS 224 (2012), arXiv:1202.0189v1"
      url: "https://arxiv.org/pdf/1202.0189v1"
      locator: "§3.3, definition (3.14), printed p. 19; §3.4, Selberg rotation (3.15) and Proposition 3.7, printed pp. 20–21."
    - title: "Dorian Goldfeld, Trace Formulae for SL(2,R), Columbia lecture notes"
      url: "https://www.math.columbia.edu/~goldfeld/TraceFormulae-4-12-2020.pdf"
      locator: "§9, test-function hypotheses for the Kuznetsov trace formula; printed pp. 46–48."
---

## Definition

For $m>0$, an entire function $H$ belongs to $PW^m(\mathbb C)$ if constants $A_H>0$, $C_H\geq1$ satisfy

$$|H(\sigma+it)|\leq A_H C_H^{|\sigma|}(1+|t|)^{-m}\quad(\sigma,t\in\mathbb R).$$

The even subspace consists of $H(-z)=H(z)$. The spectral test function is instead $h(t)=H(it)$, so the spectral order-$m$ class is defined by $h(i\,\cdot)\in PW^m(\mathbb C)_{\mathrm{even}}$. Equivalently it consists of even entire $h$ satisfying

$$|h(x+iy)|\leq A_h C_h^{|y|}(1+|x|)^{-m}\quad(x,y\in\mathbb R).$$

The equivalence is the substitution $(\sigma,t)=(y,-x)$ and evenness. In particular the spectral function decays on the real axis. This page's compact-support Kuznetsov test class is the spectral order-$12$ class. The unrotated Mellin class $PW^m$ does not by itself give real-axis decay for a function called $h$.

## Definition references

[[def-complex-differentiability-holomorphic-and-entire]]
