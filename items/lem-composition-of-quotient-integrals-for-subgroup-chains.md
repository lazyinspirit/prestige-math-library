---
id: lem-composition-of-quotient-integrals-for-subgroup-chains
kind: lemma
title: "Composition of Weil quotient integrals"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-axiom-of-choice, thm-weil-quotient-integration-formula-with-rho-function, lem-closed-subgroup-quotient-averaging-and-compact-lifts, lem-compactly-supported-kernels-admit-commuting-radon-integrals, def-rho-function-for-a-closed-subgroup]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Bekka–de la Harpe–Valette, Kazhdan’s Property (T), Appendices B and E"
      url: "https://ncatlab.org/nlab/files/BekkaHarpeValetteOnKashdanPropertyT.pdf"
    - title: "Bruhat, Lectures on Lie Groups and Representations of Locally Compact Groups, Chapters 1 and 7"
      url: "https://ncatlab.org/nlab/files/Bruhat-LecturesOnLie.pdf"
    - title: "David Vogan, Unitary Representations of Locally Compact Groups and Induced Representations"
      url: "https://math.mit.edu/~dav/ind.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Assume AC. For closed $L\le H\le G$ and rho-functions $\rho_{GL},\rho_{GH},\rho_{HL}$ with their Weil measures, define
$$r_x(hL)=\frac{\rho_{GL}(xh)}{\rho_{GH}(xh)\rho_{HL}(h)}.$$
Then $r_x$ is positive continuous on $H/L$, and for $\phi\in C_c(G/L)$,
$$\int_{G/L}\phi(q)d\mu_{GL}(q)=\int_{G/H}\int_{H/L}\phi(xhL)r_x(hL)d\mu_{HL}(hL)d\mu_{GH}(xH).$$
The inner integral is independent of the chosen representative $x$.

## Facts & Assumptions

**Given:** AC, closed $L\le H\le G$, fixed compatible left Haar measures, rho-functions and Weil measures.

[F1] The rho covariance law for each subgroup pair ([[def-rho-function-for-a-closed-subgroup]]).

[F2] The Weil formula for $G/L$, $G/H$, and $H/L$ ([[thm-weil-quotient-integration-formula-with-rho-function]]).

[F3] $T_L:C_c(G)\to C_c(G/L)$ is onto ([[lem-closed-subgroup-quotient-averaging-and-compact-lifts]]).

[F4] Compactly supported continuous kernels have continuous compactly supported partial integrals, and the associated positive Radon integrations commute ([[lem-compactly-supported-kernels-admit-commuting-radon-integrals]]).

[A1] AC is the choice-function principle required by the stated hypothesis ([[def-axiom-of-choice]]).
## Proof

**Proof technique:** direct.

1.1 Under $h\mapsto hl$, the numerator of $r_x$ is multiplied by $\Delta_L(l)\Delta_G(l)^{-1}$; the two denominator factors multiply together by the same amount. Thus $r_x(hl)=r_x(h)$. Its positive continuous lift on $H$ therefore descends continuously to $H/L$. [F1, construct]
1.2 Fix $x\in G$ and put $u_x(h)=f(xh)\rho_{GL}(xh)/(\rho_{GH}(xh)\rho_{HL}(h))$ for $f\in C_c(G)$. The support in $H$ is compact. By [F1], this function is constant under right $L$ in its rho ratio, and $u_x(hl)=f(xhl)r_x(hL)$. The $H/L$ Weil formula gives $$\int_{H/L}T_Lf(xhL)r_x(hL)d\mu_{HL}(hL)=\int_Hu_x(h)\rho_{HL}(h)dh=\int_Hf(xh)\frac{\rho_{GL}(xh)}{\rho_{GH}(xh)}dh.$$ All integrals are finite by compact support. [F1, F2, construct]
2.1 The final expression in step 1.2 is unchanged when $x$ is replaced by $xk$ for $k\in H$: substitute $j=kh$ and use left invariance of Haar measure on $H$. Hence it descends to a function of $xH$. [step 1.2, algebra]
3.1 Integrate step 1.2 over $G/H$. Set $v(x)=f(x)\rho_{GL}(x)/\rho_{GH}(x)\in C_c(G)$. The inner expression in step 1.2 is $T_Hv(xH)$; local compact support and [F4] make this a continuous compactly supported quotient function. Applying the $G/H$ Weil formula to $v$ shows that the iterated integral is $\int_G f(x)\rho_{GL}(x)dx$. Applying the $G/L$ Weil formula to $f$ gives the same value as $\int_{G/L}T_Lf\,d\mu_{GL}$. Thus the asserted identity holds for $\phi=T_Lf$; surjectivity [F3] proves it for every $C_c(G/L)$ test function. ∎ [A1, F2, F3, F4, step 1.1, step 1.2, step 2.1]



## Sources

Bekka–de la Harpe–Valette, *Kazhdan’s Property (T)*, Appendix E §E.2, proof route preceding Theorem E.2.4, PDF pp. 416–419. The source’s induction-in-stages argument is a sketch; this quotient-integral composition is written out here.