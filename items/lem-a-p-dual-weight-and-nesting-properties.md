---
id: lem-a-p-dual-weight-and-nesting-properties
kind: lemma
title: Duality and nesting of the A_p classes
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 4
deps: [def-muckenhoupt-a-p-and-a-one-weights, lem-a-one-cube-average-and-maximal-function-forms-agree, thm-holder-inequality-for-integrals, thm-generalized-holder-inequality-for-products, def-conjugate-exponents, def-weight-and-weighted-lp-space, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed. (Springer GTM 249, 2014)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "Proposition 7.1.5 (4), (5) and (6)-(7), printed p. 504"
    - title: "Juha Kinnunen, Harmonic Analysis (Aalto University lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/harmonic_analysis.pdf"
      locator: "Theorem 4.18 (1)-(2), printed pp. 76-78"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]).

Let $w$ be a weight on $\mathbb R^n$
([[def-weight-and-weighted-lp-space]]). Then:

1. For $1<p<\infty$, $w\in A_p$ if and only if its reciprocal power
   $w^{-1/(p-1)}$ lies in $A_{p'}$, where $1/p+1/p'=1$, and then
   $[w^{-1/(p-1)}]_{A_{p'}}=[w]_{A_p}^{1/(p-1)}$
   ([[def-conjugate-exponents]]).
2. The classes are nested: $A_p\subseteq A_q$ for $1<p<q<\infty$ with
   $[w]_{A_q}\le[w]_{A_p}$, and $A_1\subseteq A_q$ for every $1<q<\infty$ with
   $[w]_{A_q}\le C_n[w]_{A_1}$ for a dimensional constant $C_n$.

## Facts & Assumptions

**Given:** Countable Choice; A weight $w$ and the characteristic constants $[w]_{A_p}=\sup_Q\langle w\rangle_Q\langle w^{-1/(p-1)}\rangle_Q^{p-1}$ of [[def-muckenhoupt-a-p-and-a-one-weights]].

[F1] The $A_1$ condition is equivalent to the cube-average/essential-infimum form: there is a dimensional constant $c_n\ge1$ with $\langle w\rangle_Q\le c_n[w]_{A_1}\operatorname{ess\,inf}_Qw$ for every cube $Q$, and conversely the cube-average form with constant $C'$ gives $[w]_{A_1}\le c_nC'$ ([[lem-a-one-cube-average-and-maximal-function-forms-agree]]).

[F2] Hölder's inequality with conjugate exponents $r,r'$ and the generalized form for finitely many factors hold for nonnegative measurable functions; in particular $\langle g^\theta\rangle_Q\le\langle g\rangle_Q^\theta$ for $0<\theta\le1$ and nonnegative measurable $g\in L^1_{\mathrm{loc}}$ ([[thm-holder-inequality-for-integrals]], [[thm-generalized-holder-inequality-for-products]]).

## Proof

**Proof technique:** direct.

1.1 Set $v:=w^{-1/(p-1)}$. Since $p'-1=1/(p-1)$, one has $v^{-1/(p'-1)}=v^{-(p-1)}=w$, and therefore $\langle v\rangle_Q\langle v^{-1/(p'-1)}\rangle_Q^{p'-1}=\langle w^{-1/(p-1)}\rangle_Q\langle w\rangle_Q^{1/(p-1)}=\bigl(\langle w\rangle_Q\langle w^{-1/(p-1)}\rangle_Q^{p-1}\bigr)^{1/(p-1)}$ for every cube $Q$. Taking suprema, the two suprema are finite simultaneously and $[v]_{A_{p'}}=[w]_{A_p}^{1/(p-1)}$; if $w\in A_p$, finiteness of its product and positivity of $\langle w\rangle_Q$ imply local integrability of $v$, so $v$ is a weight. Conversely, if $v\in A_{p'}$, the displayed identity gives the $A_p$ bound for the already given weight $w$. [F2, given, algebra]

1.2 For $1<p<q<\infty$ put $\theta:=(p-1)/(q-1)\in(0,1)$ and $\sigma:=w^{-1/(p-1)}$, so that $w^{-1/(q-1)}=\sigma^\theta$. By the power-mean inequality of [F2], $\langle\sigma^\theta\rangle_Q\le\langle\sigma\rangle_Q^\theta$ for every cube $Q$; raising to the $(q-1)$-th power gives $\langle w^{-1/(q-1)}\rangle_Q^{q-1}\le\langle w^{-1/(p-1)}\rangle_Q^{p-1}$. [F2, given, algebra]

1.3 For $w\in A_1$ and every cube $Q$, put $m=\operatorname{ess\,inf}_Qw$. By [F1], $m\ge\langle w\rangle_Q/(c_n[w]_{A_1})>0$. For every $q>1$, $w^{-1/(q-1)}\le m^{-1/(q-1)}$ a.e. on $Q$, so $\langle w\rangle_Q\langle w^{-1/(q-1)}\rangle_Q^{q-1}\le\langle w\rangle_Q/m\le c_n[w]_{A_1}$. Taking suprema proves $A_1\subseteq A_q$ with the stated bound for the entire range $q>1$. [F1, given, algebra]

2.1 Combining step 1.2 with the definition, for every cube $Q$ one has $\langle w\rangle_Q\langle w^{-1/(q-1)}\rangle_Q^{q-1}\le\langle w\rangle_Q\langle w^{-1/(p-1)}\rangle_Q^{p-1}\le[w]_{A_p}$; taking the supremum in $Q$ gives $[w]_{A_q}\le[w]_{A_p}$ and in particular $A_p\subseteq A_q$ for $1<p<q<\infty$. [step 1.2, given, algebra]

3.1 Steps 2.1 and 1.3 are the two nesting assertions, and step 1.1 is the duality assertion together with the exact identity of characteristics; this proves the lemma with $C_n=c_n$. [step 1.1, step 2.1, step 1.3] ∎

