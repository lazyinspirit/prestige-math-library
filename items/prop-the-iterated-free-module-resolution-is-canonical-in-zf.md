---
id: prop-the-iterated-free-module-resolution-is-canonical-in-zf
kind: proposition
title: "The iterated free-module resolution is canonical in ZF"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-every-module-is-a-quotient-of-a-free-module, lem-one-step-extension-of-a-partial-projective-resolution, thm-free-modules-are-projective-with-choice-boundary]
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
      url: "https://djvu.online/file/WrPctxOTQCdBj"
    - title: "Romyar Sharifi, Homological Algebra"
      url: "https://math.ucla.edu/~sharifi/homalg.pdf"
    - title: "The Stacks Project, Section 12.28: Projectives"
      url: "https://stacks.math.columbia.edu/tag/013A"
pipeline_run: frontier-28
---
## Statement

For every left $R$-module $M$, repeatedly taking the canonical free cover of the current kernel yields a functorial exact augmented complex of free modules $$\cdots\to F_2\to F_1\to F_0\to M\to0.$$ This construction is available in ZF because it uses only underlying sets and canonical free-module maps. Under the previously recorded choice boundary for free modules, the same complex is a projective resolution.
## Facts & Assumptions

**Given:** A left $R$-module $M$.

[L1] Every module has a canonical free cover $R^{(X)}\twoheadrightarrow X$ on its underlying set ([[cor-every-module-is-a-quotient-of-a-free-module]]).

[L2] Free modules are projective with the previously recorded choice boundary ([[thm-free-modules-are-projective-with-choice-boundary]]).

[L3] A chosen surjection onto the current kernel extends an exact augmented complex by one degree ([[lem-one-step-extension-of-a-partial-projective-resolution]]).
## Proof

**Proof technique:** constructive.

1.1 Put $F_0:=R^{(M)}$ and let $\varepsilon_0:F_0\twoheadrightarrow M$ be the canonical map from [L1]. Having defined $K_n$ as the current kernel, set $F_{n+1}:=R^{(K_n)}$ and let $\varepsilon_{n+1}:F_{n+1}\twoheadrightarrow K_n$ be its canonical free cover from [L1]. These assignments are functorial because they depend only on the underlying-set construction in [L1]. [L1, construct]

2.1 Each $F_n$ is free, hence projective under the recorded boundary [L2]. By applying [L3] successively to the canonical surjections of step 1.1, one obtains an exact augmented complex $$\cdots\to F_2\to F_1\to F_0\to M\to0.$$ [L2, L3, step 1.1, construct]

3.1 Therefore the iterated free-cover construction gives a functorial exact free resolution in ZF. No basis choice or arbitrary lift is used at any stage; projectivity enters only through [L2]. [L2, step 2.1, discharge-construct] ∎
