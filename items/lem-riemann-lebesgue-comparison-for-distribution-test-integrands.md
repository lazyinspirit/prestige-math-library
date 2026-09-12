---
id: "lem-riemann-lebesgue-comparison-for-distribution-test-integrands"
kind: "lemma"
title: "Riemann–Lebesgue comparison for distribution test integrands"
deps: ["thm-multidimensional-darboux-equals-riemann", "thm-lebesgue-measure-of-a-box-of-every-kind", "prop-order-and-scalar-rules-for-the-nonnegative-integral", "prop-the-nonnegative-integral-agrees-with-the-simple-integral", "thm-linearity-of-the-lebesgue-integral-on-l-one", "def-countable-choice", "def-riemann-integral-over-a-jordan-set", "thm-continuous-functions-on-compact-jordan-sets-are-integrable", "thm-extreme-value-metric", "thm-compact-subset-is-closed-and-bounded"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
sources:
  references:
    - title: "J. Lebl, Basic Analysis, Riemann Integral in Several Variables; Darboux criterion combined with the elementary Lebesgue simple-integral construction"
      url: "https://www.jirka.org/ra/html/sec_rirect.html"
verification:
  audited: 2026-09-13
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Assume Countable Choice. Let $Q=\prod_{i=1}^n[a_i,b_i]$ with $n\ge1$ and $a_i<b_i$. If a bounded Borel real function $f$ on $Q$ is Riemann integrable, then it is Lebesgue integrable and the two integrals agree. The corresponding assertion for complex functions holds componentwise. In particular it applies to smooth compact test integrands and their bounded Borel zero extensions from compact Jordan regions.

## Facts & Assumptions

[F1] Darboux and tagged Riemann integrability agree, with the same value ([[thm-multidimensional-darboux-equals-riemann]]).

[F2] Under Countable Choice, any set between the interior and closure of a box has its box volume as Lebesgue measure ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[F3] The nonnegative integral is monotone and homogeneous and agrees with the simple integral on nonnegative simple functions ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[prop-the-nonnegative-integral-agrees-with-the-simple-integral]]).

[F4] Lebesgue integration is complex-linear on $L^1$ ([[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

[F5] Assume [[def-countable-choice]], used for F2 and the Lebesgue-measure interface.

[F6] A continuous real function on a nonempty compact metric space is bounded ([[thm-extreme-value-metric]]), and a compact subset of a metric space is closed ([[thm-compact-subset-is-closed-and-bounded]]). Riemann integration over a bounded Jordan set is defined by the zero extension to a bounding rectangle ([[def-riemann-integral-over-a-jordan-set]]), and a continuous real function on a compact Jordan set is integrable in that sense ([[thm-continuous-functions-on-compact-jordan-sets-are-integrable]]).

## Proof

**Given:** the bounded Borel Riemann integrand and F5.

1.1 Choose $C\ge0$ with $|f|\le C$, and put $g=f+C\ge0$. F2 and F3 give $\int_Q|f|\le C\operatorname{vol}Q<\infty$ and $\int_Qg\le2C\operatorname{vol}Q<\infty$, so both are integrable. Borel measurability makes all these integrals defined. [given, F2, F3, F5]

2.1 For a finite rectangular grid, list its closed cells $Q_1,\ldots,Q_s$ and set $D_i=Q_i\setminus\bigcup_{j<i}Q_j$. These Borel sets partition $Q$, contain each cell's interior and lie in its closure, so $\lambda_n(D_i)=\operatorname{vol}Q_i$ by F2. Put $m_i=\inf_{Q_i}g$ and $M_i=\sup_{Q_i}g$. The simple functions $l=\sum_i m_i\mathbf1_{D_i}$ and $h=\sum_i M_i\mathbf1_{D_i}$ satisfy $l\le g\le h$ everywhere, including grid faces. F3 identifies their integrals as the grid's lower and upper Darboux sums for $g$, so these sums bracket $\int_Qg$. [step 1.1, F2, F3]

3.1 Every tagged sum of $g$ is the corresponding sum of $f$ plus $C\operatorname{vol}Q$. Thus $g$ is Riemann integrable with value $I_R(f)+C\operatorname{vol}Q$. F1 says its supremum of lower Darboux sums and infimum of upper sums have this same value. Taking these bounds in step 2.1 squeezes $\int_Qg$ to that value. F4 and F2 then give $\int_Qf=\int_Qg-C\operatorname{vol}Q=I_R(f)$. [step 2.1, F1, F2, F4]

4.1 Apply the real result separately to the real and imaginary parts for the complex assertion; the bound $|f|\le|\operatorname{Re}f|+|\operatorname{Im}f|$ ensures absolute integrability. For the last clause, let $E\subseteq Q$ be compact Jordan and let $h:E\to\mathbb R$ be continuous. If $E$ is empty its zero extension is zero. Otherwise F6 makes $h$ bounded, and compactness makes $E$ closed. Its zero extension $\widetilde h$ is Borel: for every open $O\subseteq\mathbb R$, continuity in the subspace gives $h^{-1}(O)=E\cap G$ for some open $G\subseteq Q$; then $\widetilde h^{-1}(O)=E\cap G$ when $0\notin O$, while $\widetilde h^{-1}(O)=(Q\setminus E)\cup(E\cap G)$ when $0\in O$. The definition and theorem in F6 say exactly that this bounded zero extension is Riemann integrable on $Q$. The real result therefore applies; treating real and imaginary parts gives the same conclusion for continuous complex integrands, in particular smooth compact test integrands. The zero function has both integrals zero; the constant one has both integrals $\operatorname{vol}Q$. Degenerate boxes are excluded from this statement. No choices of tags over an infinite family were used; Countable Choice is precisely the measure hypothesis in F2. $\square$ [step 3.1, F1, F2, F4, F5, F6]
