---
id: ex-na-weno-js-critical-point-epsilon-scaling
kind: example
title: A first-order critical point exposes WENO-JS epsilon scaling
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
aliases: []
deps:
  - def-na-high-resolution-reconstruction
  - lem-na-weno5-optimal-linear-reconstruction
  - thm-na-weno-js-fixed-epsilon-fifth-order-reconstruction
justified_by: []
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Andrew K. Henrick, Tariq D. Aslam and Joseph M. Powers, Mapped weighted essentially non-oscillatory schemes: Achieving optimal order near critical points"
      url: "https://academicweb.nd.edu/~powers/paper.list/jcp.weno5m.05.pdf"
      locator: "§§4.2–4.5, printed pp. 552–554: the WENO-JS order depends on epsilon and resolution at critical points. The source analyzes finite-difference fluxes; the cell-average face calculation here is performed explicitly."
    - title: "Guang-Shan Jiang and Chi-Wang Shu, Efficient Implementation of Weighted ENO Schemes"
      url: "https://lsec.cc.ac.cn/lcfd/DEWENO/paper/WENO_1996.pdf"
      locator: "§3, PDF pp. 7–13: the WENO-JS smoothness indicators and normalized weights used in the calculation."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Example

Work in nondimensional coordinates with $u(x)=x^2+x^3$ and reconstruct the face $x=0$, the interface between cells $I_{-1}$ and $I_0$. This is a first-order critical point: $u'(0)=0$ and $u''(0)=2$. If the WENO-JS parameter is scaled as $\epsilon_h=h^4$, the cell-average face state has error $\frac{54}{95}h^4+O(h^5)$, so this branch is fourth order at the face. With the fixed $\epsilon_0>0$ of [[thm-na-weno-js-fixed-epsilon-fifth-order-reconstruction]], the theorem's fifth-order branch applies; with the same $\epsilon_h$, the WENO-Z comparison has error $O(h^6)$ on this polynomial.

## Facts & Assumptions

**Given:** Uniform cells $I_j=[jh,(j+1)h)$, $u(x)=x^2+x^3$, target face $x=0$, the displayed WENO-JS/WENO-Z weights, and $\epsilon_h=h^4>0$.

[F1] [[def-na-high-resolution-reconstruction]]: the three cell-average candidates are $p_0,p_1,p_2$, the ideal weights are $(1/10,6/10,3/10)$, and the JS and Z weights use the displayed $\beta_k$ and $\tau_5=|\beta_0-\beta_2|$.

[F2] [[lem-na-weno5-optimal-linear-reconstruction]]: the ideal linear combination reproduces cubics and each candidate is exact through degree two.

[F3] [[thm-na-weno-js-fixed-epsilon-fifth-order-reconstruction]]: fifth-order face accuracy is proved for fixed positive $\epsilon_0$; this does not assert the same order for $\epsilon_h=h^4$.

## Verification

1.1 The five stencil averages, ordered from $i-2$ through $i+2$ with $i=-1$, are $(U_{i-2},U_{i-1},U_i,U_{i+1},U_{i+2})=h^2(19/3,7/3,1/3,1/3,7/3)+h^3(-65/4,-15/4,-1/4,1/4,15/4)$. Substitution in the three candidate formulas gives $(p_0,p_1,p_2)=h^3(-3/2,1/2,-1/2)$; the quadratic contributions vanish by [F2]. [given, F1, F2, algebra]

2.1 Substitution of the same averages in the indicator formulas gives exactly $\beta_0=(16/3)h^4-37h^5+(355/4)h^6$, $\beta_1=(16/3)h^4-17h^5+(55/4)h^6$, and $\beta_2=(16/3)h^4+15h^5+(43/4)h^6$. Put $C=19/3$ and $(c_0,c_1,c_2)=(-37,-17,15)$; then $\epsilon_h+\beta_k=Ch^4+c_kh^5+O(h^6)$. [F1, step 1.1, algebra]

3.1 Expanding $\alpha_k^J=d_k(Ch^4+c_kh^5+O(h^6))^{-2}$ and normalizing gives $\omega_k^J=d_k[1-2(c_k-\bar c)h/C+O(h^2)]$, where $\bar c=\sum d_kc_k=-47/5$. Since $\sum d_kp_k=0$ by [F2], and $\sum_kd_k(c_k-\bar c)(-3/2,1/2,-1/2)_k=-9/5$, the reconstructed state is $\sum_k\omega_k^Jp_k=-\frac{2h^4}{C}(-9/5)+O(h^5)=\frac{54}{95}h^4+O(h^5)$. Thus the face error is not $O(h^5)$. [F1, F2, step 1.1, step 2.1, algebra]

4.1 By step 3.1 the scaled-epsilon JS state has a nonzero $h^4$ leading error. For WENO-Z, $\tau_5=|-52h^5+78h^6|=52h^5+O(h^6)$, so $\tau_5/(\epsilon_h+\beta_k)=(52/C)h+O(h^2)$ and its square has the same leading $O(h^2)$ term for each $k$. That common term cancels on normalization, giving $\omega_k^Z-d_k=O(h^3)$. Since the ideal combination is exactly zero on this cubic, [F2] gives $\sum_k\omega_k^Zp_k=O(h^6)$. This establishes the stated scaled-epsilon contrast; the fixed-$\epsilon_0$ theorem in [F3] remains a separate branch. [F1, F2, F3, step 1.1, step 2.1, step 3.1, algebra] ∎
