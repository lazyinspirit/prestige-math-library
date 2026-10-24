---
id: lem-folner-nets-give-reiter-nets
kind: lemma
title: Følner nets give Reiter nets
status: published
origin: pipeline
dependency_level: 1
deps:
  - def-left-folner-net-for-a-locally-compact-group
  - def-reiter-condition-p1
  - def-complex-haar-lp-spaces-and-compactly-supported-functions
  - def-left-haar-integral-and-left-haar-measure
  - def-measurable-function-between-measurable-spaces
  - thm-continuous-preimages-of-borel-sets-are-borel
  - def-nonnegative-simple-measurable-function
  - def-integral-of-a-nonnegative-simple-function
  - prop-the-nonnegative-integral-agrees-with-the-simple-integral
proof_strategy: direct
axiom_use: No choice principle is used.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: "2026-10-08"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix G, §G.5, first paragraph of the proof of Theorem G.5.1 (printed p. 467): normalized characteristic functions of Følner sets satisfy the Reiter estimates"
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix G, Theorem G.3.1(iii), definition of Reiter's Property (P1) and $L^1(G)_{1,+}$ (printed pp. 453–454)"
---

## Statement

Let $G$ be a locally compact Hausdorff group with fixed left Haar measure
$\mu$, and let $F\subseteq G$ be Borel with $0<\mu(F)<\infty$. The class
$$f_F:=\mu(F)^{-1}\mathbf 1_F\in L^1(G)$$
belongs to $\mathcal P$ from [[def-reiter-condition-p1]], and for every
$x\in G$,
$$\|L_xf_F-f_F\|_1=\frac{\mu(xF\mathbin\triangle F)}{\mu(F)}.$$
Consequently, every left Følner net $(F_i)$ gives a Reiter net
$(f_{F_i})$. In particular, the left Følner condition implies Reiter's
condition (P1).

## Facts & Assumptions

**Given:** A locally compact Hausdorff group $G$ with left Haar measure $\mu$ and a Borel set $F$ with $0<\mu(F)<\infty$.

[A1] Left translation carries Borel sets to Borel sets and preserves $\mu$; thus $\mu(xF)=\mu(F)$ and $\mu(xF\mathbin\triangle F)\le2\mu(F)$ ([[def-left-haar-integral-and-left-haar-measure]], [[thm-continuous-preimages-of-borel-sets-are-borel]]).

[F1] $L^1(G)$ consists of complex measurable almost-everywhere classes with $\|f\|_1=\int_G|f|\,d\mu$ ([[def-complex-haar-lp-spaces-and-compactly-supported-functions]]).

[F2] An indicator of a Borel set is a nonnegative simple measurable function; its nonnegative Lebesgue integral is its simple integral, namely the measure of that set ([[def-measurable-function-between-measurable-spaces]], [[def-nonnegative-simple-measurable-function]], [[def-integral-of-a-nonnegative-simple-function]], [[prop-the-nonnegative-integral-agrees-with-the-simple-integral]]).

## Proof

**Proof technique:** direct.

1.1 The indicator $\mathbf1_F$ is Borel measurable and simple. By [F2], $\int_G\mathbf1_F\,d\mu=\mu(F)$, so the nonnegative Borel function $\mu(F)^{-1}\mathbf1_F$ has finite integral and defines an $L^1(G)$ class. It is nonnegative and $\|f_F\|_1=\mu(F)^{-1}\int_G\mathbf1_F\,d\mu=1$; hence $f_F\in\mathcal P$. [F1, F2, given, construct, algebra]

1.2 For every $x,y\in G$, $(L_x\mathbf1_F)(y)=\mathbf1_F(x^{-1}y)=\mathbf1_{xF}(y)$. Thus $L_xf_F-f_F=\mu(F)^{-1}(\mathbf1_{xF}-\mathbf1_F)$, whose modulus is $\mu(F)^{-1}\mathbf1_{xF\mathbin\triangle F}$. The symmetric difference is Borel and has finite measure by [A1]. Applying [F2] to its indicator gives $\|L_xf_F-f_F\|_1=\mu(F)^{-1}\int_G\mathbf1_{xF\mathbin\triangle F}\,d\mu=\frac{\mu(xF\mathbin\triangle F)}{\mu(F)}$. [A1, F1, F2, algebra]

2.1 If $(F_i)$ is a left Følner net, set $f_i:=f_{F_i}$. Steps 1.1 and 1.2 show that $f_i\in\mathcal P$ and, for every compact $Q$, $\Delta_Q(f_i)=\Delta_Q(F_i)$, since the pointwise discrepancies agree for each $x\in Q$. The defining eventual estimates therefore make $(f_i)$ a Reiter net. If only the single-set left Følner condition is given, for each compact $Q$ and $\varepsilon>0$ choose a Følner witness $F$; step 1.1 gives $f_F\in\mathcal P$ and step 1.2 gives the same estimate, so Reiter's condition (P1) holds. This uses one witness at a time and no global choice function. [step 1.1, step 1.2, given, construct] ∎
