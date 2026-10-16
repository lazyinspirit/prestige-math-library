---
id: thm-qc-counting-hierarchy-time-space-lower-bound
kind: theorem
title: "Counting Hierarchy Time Space Lower Bound"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 15
deps:
  - thm-qc-bqtisp-to-ptisp-simulation
  - thm-qc-unbounded-error-counting-time-space-alternative
  - def-qc-unbounded-error-time-space-counting-model
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Van Melkebeek and Watson, Time-Space Efficient Simulations of Quantum Computations, Theorem 1.3 and Corollary 1.4"
      url: https://doi.org/10.4086/toc.2012.v008a001
    - title: "Van Melkebeek and Watson, Time-Space Efficient Simulations of Quantum Computation"
      url: https://arxiv.org/pdf/0712.2545
    - title: "Eric Allender et al., Time-Space Tradeoffs in the Counting Hierarchy"
      url: https://people.cs.rutgers.edu/~allender/papers/tradeoff.pdf
proof_strategy: direct
---

## Statement

In the final published VMW erased-index quantum model, for every real $d$ and $\varepsilon>0$ there exists $c>1$ such that either $\mathrm{MajMajSAT}$ has no bounded-error algorithm of time $O(n^c)$, or $\mathrm{MajSAT}$ has no bounded-error algorithm using both time $O(n^d)$ and space $O(n^{1-\varepsilon})$. Consequently, for every $\varepsilon>0$, $\mathrm{MajMajSAT}$ has no bounded-error algorithm with time $n^{1+o(1)}$ and space $O(n^{1-\varepsilon})$. The fixed gates have the polynomial-time precision approximation condition of the model definition.

## Facts & Assumptions

**Given:** the published VMW quantum profile and derived full-basis classical comparison, the at-least-half majority-formula conventions, and the stated resource bounds.

[F1] [[thm-qc-bqtisp-to-ptisp-simulation]] maps a bounded-error quantum computation of time $t$ and space $s$ to a matching-profile strict-majority classical computation of time $O(t\,\mathrm{polylog}\,t)$ and space $O(s+\mathrm{polylog}\,t)$.

[F2] [[thm-qc-unbounded-error-counting-time-space-alternative]] gives the direct classical alternative in the derived full-basis profile.

[F3] [[def-qc-unbounded-error-time-space-counting-model]] defines the derived basis, erased-index-only, sequential and historical profiles, and the common plain-formula encoding.

## Proof

1.1 Fix $d,\varepsilon$ and choose rational $D>\max(d,1)$ and rational $0<\varepsilon'<\min(\varepsilon,1)$. By [F2] there is a classical time exponent $C>1$ for the alternative with parameters $D,\varepsilon'$. Choose rational $1<c<C$ and suppose, for contradiction, that both quantum algorithms in the statement exist. For the time-only $\mathrm{MajMajSAT}$ algorithm, choose rational $\tau_{\rm mm}$ with $c<\tau_{\rm mm}<C$ and use the constructible simulation clock $t_{\rm mm}=\lceil K_{\rm mm}(n+2)^{\tau_{\rm mm}}\rceil$. The published VMW model permits maximum work addresses exponential in the running time: in $t_{\rm mm}$ transitions only $O(t_{\rm mm})$ address bits can be emitted, so a constructible space majorant $s_{\rm mm}=2^{K t_{\rm mm}}$, for a fixed sufficiently large $K$, bounds every work operand and query endpoint of this fixed machine. Its binary numeral is a $1$ followed by $K t_{\rm mm}$ zeroes and is generated in $O(t_{\rm mm})$ time, within the required constructibility bounds. Both $t_{\rm mm},s_{\rm mm}\ge\log n$, so [F1] gives a matching-profile classical time $O(n^{\tau_{\rm mm}}\mathrm{polylog}\,n)\subseteq O(n^C)$ decider. For the $\mathrm{MajSAT}$ algorithm, choose rational $\tau_{\rm sat}$ with $\max(d,1)<\tau_{\rm sat}<D$ and use constructible majorants $t_{\rm sat}=\lceil K_{\rm sat}(n+2)^{\tau_{\rm sat}}\rceil$ and $s_{\rm sat}=\lceil K'_{\rm sat}(n+2)^{1-\varepsilon'}\rceil$. They are at least $\log n$ for large $n$ and dominate the assumed time $O(n^d)$ and space $O(n^{1-\varepsilon})$. Theorem [F1] then gives classical time $O(n^{\tau_{\rm sat}}\mathrm{polylog}\,n)\subseteq O(n^D)$ and space $O(n^{1-\varepsilon'}+\mathrm{polylog}\,n)\subseteq O(n^{1-\varepsilon'})$. These two classical algorithms contradict both sides of [F2]'s alternative. [F1, F2, F3, given, construct, algebra, contradiction]

2.1 Suppose $\mathrm{MajMajSAT}$ has time $n^{1+o(1)}$ and space $O(n^{1-\varepsilon})$. By [F3], a plain $\mathrm{MajSAT}$ encoding is already the identical bit string accepted as a $\mathrm{MajMajSAT}$ instance with an implicit fresh unused outer variable. Both of its outer assignments have the original inner majority value. First validate the plain encoding in $O(n\,\mathrm{polylog}\,n)$ time and $O(\log n)$ workspace, rejecting malformed or partition-tagged inputs. On a valid plain input, reset that scratch and run the assumed quantum algorithm on the identical bit string, with exactly the same coherent input oracle and bounded error. Total time remains $n^{1+o(1)}$ and space is $O(n^{1-\varepsilon}+\log n)$; no coherent virtual-input compilation is required. Choose $0<\varepsilon''<\min(\varepsilon,1)$ and any fixed $d>1$. These resources meet $O(n^d)$ and $O(n^{1-\varepsilon''})$. The original $\mathrm{MajMajSAT}$ algorithm also meets $O(n^c)$ for every fixed $c>1$, contradicting the disjunction of step 1.1 with parameters $d,\varepsilon''$. This proves the corollary. [F1, F2, F3, step 1.1, construct, algebra, contradiction] ∎

## Historical profile

The 2007 preprint's nonerasing delimited-head model is retained separately in the definitions. No equivalence with the final published model, and no extension of this theorem to that distinct profile, is asserted by this proof.
