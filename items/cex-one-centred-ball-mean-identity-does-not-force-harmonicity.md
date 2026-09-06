---
id: cex-one-centred-ball-mean-identity-does-not-force-harmonicity
kind: counterexample
title: "One centred ball-mean identity does not force harmonicity"
status: draft
origin: pipeline
deps: [def-ball-average-operator-on-r-n, thm-polar-coordinates-formula-for-lebesgue-measure]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "PDE source treatment"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
---
## Statement refuted

One ball-mean identity at one centre forces harmonicity.

## Counterexample

**Given:** $n\ge1$, $R>0$, and $u:\mathbb R^n\to\mathbb R$ defined by
$$u(x)=|x|^2\left(|x|^2-\frac{n+2}{n+4}R^2\right).$$

1.1 Polar coordinates [[thm-polar-coordinates-formula-for-lebesgue-measure]] give $\frac{1}{|B_R|}\int_{B_R}|x|^2=\frac n{n+2}R^2$ and $\frac{1}{|B_R|}\int_{B_R}|x|^4=\frac n{n+4}R^4$, hence $\frac{1}{|B_R|}\int_{B_R}u=0=u(0)$ [given, algebra].

2.1 Yet $\Delta u=4(n+2)|x|^2-2n\frac{n+2}{n+4}R^2$, which is not identically zero [given, algebra]. ∎
