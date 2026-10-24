---
id: cex-pe05-centered-source-produces-spurious-current
kind: counterexample
title: A centered pressure flux and centered bed source move a discrete lake
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-pe05-shallow-water-balance-law]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "E. Audusse, F. Bouchut, M.-O. Bristeau, R. Klein, and B. Perthame, A Fast and Stable Well-Balanced Scheme with Hydrostatic Reconstruction for Shallow Water Flows"
      url: "https://publications.imp.fu-berlin.de/478/1/file_2004_siam.pdf"
      locator: "Complete 16-page paper; motivation for exact lake-at-rest preservation, §1 and §2.1, printed pp. 2051–2054."
    - title: "F. Bouchut, III. Shallow water problem – Hydrostatic reconstruction scheme"
      url: "https://www.lestudium-ias.com/sites/default/files/07_-_bouchut.pdf"
      locator: "Complete 20-page lecture; §II, smooth source consistency and well-balancing, PDF pp. 5–8."
---

## Statement refuted

On a periodic three-cell grid, the central physical-flux rule $\widehat F_{i+1/2}=(F(U_i)+F(U_{i+1}))/2$ with centered bed source $(0,-g h_i(b_{i+1}-b_{i-1})/(2\Delta x))$ preserves every lake-at-rest state under the update
$$U_i^+=U_i-\frac{\Delta t}{\Delta x}(\widehat F_{i+1/2}-\widehat F_{i-1/2})+\Delta t\left(0,-\frac{g h_i(b_{i+1}-b_{i-1})}{2\Delta x}\right).$$

## Facts & Assumptions

**Given:** The periodic central-flux/centered-source update in the refuted statement, $\Delta x=g=1$, any $\Delta t>0$, bed values $(b_0,b_1,b_2)=(0,1/2,0)$, and states $m_i=0$, $h_i=1-b_i=(1,1/2,1)$. These are admissible lake-at-rest data with level $\eta_0=1$ under [[def-pe05-shallow-water-balance-law]]. Show one updated momentum is nonzero.

[F1] [[def-pe05-shallow-water-balance-law]]: for a wet rest state, $m_i=0$, $h_i+b_i=\eta_0$, and the momentum flux is $g h_i^2/2$.

## Counterexample

1.1 The pressure values are $p_0=1/2$, $p_1=1/8$, and $p_2=1/2$ by [F1]. Thus the central right and left momentum fluxes at cell $0$ are $\widehat F^m_{1/2}=(p_0+p_1)/2=5/16$ and $\widehat F^m_{-1/2}=(p_2+p_0)/2=1/2$. [given, F1, algebra]

2.1 The central-flux contribution to $m_0^+$ is $-\Delta t(5/16-1/2)=3\Delta t/16$. The centered source contributes $-\Delta t\,h_0(b_1-b_2)/2=-\Delta t/4=-4\Delta t/16$. Therefore $m_0^+=-\Delta t/16\ne0$, so the stated update moves this lake and the universal preservation claim is false. [given, step 1.1, algebra] ∎
