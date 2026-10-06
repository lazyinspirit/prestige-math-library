---
id: cor-a-p-classes-are-open-in-the-exponent
kind: corollary
title: The A_p classes are open in the exponent
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 7
deps: [thm-reverse-holder-self-improvement-for-a-p-weights, lem-a-p-dual-weight-and-nesting-properties, def-muckenhoupt-a-p-and-a-one-weights, thm-holder-inequality-for-integrals, def-conjugate-exponents, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed. (Springer GTM 249, 2014)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "Theorem 7.2.5 and Corollary 7.2.6, printed pp. 518-519"
    - title: "Juha Kinnunen, Harmonic Analysis (Aalto University lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/harmonic_analysis.pdf"
      locator: "Theorem 4.43, printed pp. 92-93"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$1<p<\infty$ and $w\in A_p$
([[def-muckenhoupt-a-p-and-a-one-weights]]). Then there is
$\varepsilon=\varepsilon(n,p,[w]_{A_p})>0$ with $w\in A_{p-\varepsilon}$ and
$[w]_{A_{p-\varepsilon}}$ bounded in terms of $n,p,[w]_{A_p}$. More precisely,
if the dual weight $v:=w^{1/(1-p)}=w^{-1/(p-1)}\in A_{p'}$ satisfies a reverse
Hölder inequality with exponent $q>1$ and constant $c$ (as supplied by the
previous theorem), then one may take
$$p-\varepsilon=1+\frac{p-1}{q}<p,\qquad [w]_{A_{p-\varepsilon}}\le c^{p-1}[w]_{A_p}.$$
Hence $A_p=\bigcup_{1<r<p}A_r$.

## Facts & Assumptions

**Given:** Countable Choice, $1<p<\infty$, $w\in A_p$, the dual weight $v=w^{-1/(p-1)}$, and a reverse Hölder pair $(q,c)$ for $v$.

[F1] Duality: $v\in A_{p'}$ with $[v]_{A_{p'}}=[w]_{A_p}^{1/(p-1)}$, where $p'$ is the conjugate exponent of $p$ ([[lem-a-p-dual-weight-and-nesting-properties]], [[def-conjugate-exponents]]).

[F2] The reverse Hölder theorem applied to $v$ with a fixed $0<\alpha<1$ supplies $q=1+\gamma>1$ and $c=C<\infty$, depending only on $n,p',[v]_{A_{p'}}$ and $\alpha$, with $(\langle v^q\rangle_Q)^{1/q}\le c\langle v\rangle_Q$ for every cube $Q$ ([[thm-reverse-holder-self-improvement-for-a-p-weights]]).

[F3] The $A_p$ condition is the finiteness of $\langle w\rangle_Q\langle w^{-1/(p-1)}\rangle_Q^{p-1}$ uniformly in $Q$; all averages are nonnegative and the exponents combine by the usual power laws ([[def-muckenhoupt-a-p-and-a-one-weights]], [[thm-holder-inequality-for-integrals]]).

## Proof

**Proof technique:** direct.

1.1 By step [F1], $v\in A_{p'}$ with $[v]_{A_{p'}}=[w]_{A_p}^{1/(p-1)}$, so [F2] applies to $v$ and yields $q>1$, $c<\infty$ with $(\langle v^q\rangle_Q)^{1/q}\le c\langle v\rangle_Q$ for every cube $Q$. Define $\varepsilon$ by $1/(p-\varepsilon-1)=q/(p-1)$, i.e. $p-\varepsilon=1+(p-1)/q$; since $q>1$ one has $p-\varepsilon<p$ and $p-\varepsilon>1$. [F1, F2, given, algebra]

2.1 With this choice, $1/(1-(p-\varepsilon))=-1/(p-\varepsilon-1)=-q/(p-1)$, so $w^{1/(1-(p-\varepsilon))}=w^{-q/(p-1)}=(w^{-1/(p-1)})^q=v^q$. Therefore, for every cube $Q$, $(\langle w^{1/(1-(p-\varepsilon))}\rangle_Q)^{p-\varepsilon-1}=(\langle v^q\rangle_Q)^{(p-1)/q}\le(c\langle v\rangle_Q)^{p-1}=c^{p-1}\langle v\rangle_Q^{p-1}$ by the reverse Hölder inequality and the exponent identity. [F2, step 1.1, given, algebra]

3.1 Multiplying the estimate of step 2.1 by $\langle w\rangle_Q$ and inserting the $A_p$ bound $\langle w\rangle_Q\langle v\rangle_Q^{p-1}\le[w]_{A_p}$ valid for every cube $Q$ gives $\langle w\rangle_Q\bigl(\langle w^{1/(1-(p-\varepsilon))}\rangle_Q\bigr)^{p-\varepsilon-1}\le c^{p-1}[w]_{A_p}$ for every cube; this is exactly the $A_{p-\varepsilon}$ condition with characteristic at most $c^{p-1}[w]_{A_p}$. [F3, step 2.1, given, algebra]

4.1 The monotonicity part of [F1] gives $A_r\subseteq A_p$ for every $1<r<p$; step 1.1 and step 3.1 exhibit, for each $w\in A_p$, an exponent $p-\varepsilon<p$ with $w\in A_{p-\varepsilon}$, so every element of $A_p$ lies in some $A_r$ with $r<p$. Hence $A_p=\bigcup_{1<r<p}A_r$, and $\varepsilon$ and the bound on $[w]_{A_{p-\varepsilon}}$ depend only on $n,p,[w]_{A_p}$ (through $[v]_{A_{p'}}$ and the fixed $\alpha$). [F1, step 1.1, step 3.1, given, algebra] ∎
