---
id: def-base-two-entropy-of-a-finite-source
kind: definition
title: "Base-two entropy of a finite source"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps: [def-finite-discrete-source-and-blocks, def-qa-35-finite-probability-entropy-and-stochastic-matrices, def-it-information-units-and-logarithm-base]
justified_by: []
strategy: "Convert the published natural-unit entropy to bits explicitly by division by ln 2."
axiom_use: "No choice axiom is used; the defining sum is finite."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Stanford EE376A, Information Theory Course Notes, Chapter 4: Lossless Compression"
      url: "https://web.stanford.edu/class/ee376a/files/lecture_notes.pdf"
      locator: "§4.3, Shannon codes and expected length in bits"
    - title: "MIT OpenCourseWare 6.450, Memory-less sources, prefix free codes, and entropy"
      url: "https://ocw.mit.edu/courses/6-450-principles-of-digital-communication-i-fall-2009/f57623d4056984d18685fdb37cea01d6_MIT6_450F09_slide03.pdf"
      locator: "PDF slides 1–2 and 9–10, entropy and the binary code-length convention"
---
## Definition

For a finite source $p$ of [[def-finite-discrete-source-and-blocks]], define its **base-two Shannon entropy**, measured in bits, by
$$H_2(p):=\frac{H(p)}{\ln 2}=-\sum_{i=1}^m p_i\log_2 p_i.$$
Here $H(p)=-\sum_i p_i\ln p_i$ is the finite Shannon entropy in natural units from [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]. By [[def-it-information-units-and-logarithm-base]], information quantities use natural logarithms by default and $\log_2 t=\ln(t)/\ln 2$. Substituting this identity termwise and using $\sum_i p_i=1$ gives the displayed equality. Every $p_i$ is positive by the source convention, so no zero-term convention is needed here.
