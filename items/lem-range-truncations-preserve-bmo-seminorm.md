---
id: lem-range-truncations-preserve-bmo-seminorm
kind: lemma
title: "Range truncations preserve the BMO seminorm up to a constant"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps: [def-bmo-seminorm-and-quotient-by-constants]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Juha Kinnunen, Harmonic Analysis (Aalto University lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/harmonic_analysis.pdf"
      locator: "Theorem 3.6(1) and Remark 3.7 (truncation $f_k=\\min\\{\\max\\{f,-k\\},k\\}$ with $\\|f_k\\|_*\\lesssim\\tfrac94\\|f\\|_*$), printed pp. 40-41"
    - title: "Mark Williams, Notes on Harmonic Analysis (January 11, 2022)"
      url: "https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf"
      locator: "Definition 7.39(3) and footnote 61 (the truncation $f^{KL}=...$ and its contract), printed pp. 46-47"
---

## Statement

For every real-valued $b\in\mathrm{BMO}(\mathbb R^n)$ and every $c\in\mathbb R$
the one-sided truncations satisfy
$\|\max(b,c)\|_{\mathrm{BMO}}\le\tfrac32\|b\|_{\mathrm{BMO}}$ and
$\|\min(b,c)\|_{\mathrm{BMO}}\le\tfrac32\|b\|_{\mathrm{BMO}}$; consequently for
$-\infty<L\le K<\infty$ the two-sided truncation
$b_{[L,K]}:=\min\bigl(K,\max(L,b)\bigr)$ satisfies
$\|b_{[L,K]}\|_{\mathrm{BMO}}\le\tfrac94\|b\|_{\mathrm{BMO}}$. For a
complex-valued $b$ the componentwise truncation
$b_M:=\min(M,\max(-M,\operatorname{Re}b))+i\min(M,\max(-M,\operatorname{Im}b))$
satisfies $|b_M|\le|b|$, $b_M\to b$ pointwise as $M\to\infty$, and
$\|b_M\|_{\mathrm{BMO}}\le\tfrac92\|b\|_{\mathrm{BMO}}$.

## Facts & Assumptions

**Given:** A function $b\in\mathrm{BMO}(\mathbb R^n)$, a cube $Q$ and constants $c\in\mathbb R$, $-\infty<L\le K<\infty$ and $M>0$, with the mean and seminorm of [[def-bmo-seminorm-and-quotient-by-constants]].

[F1] The mean is $b_Q=|Q|^{-1}\int_Qb$ and $\|b\|_{\mathrm{BMO}}=\sup_Q|Q|^{-1}\int_Q|b-b_Q|$; for every constant $d$ one has $(b+d)_Q=b_Q+d$ and hence $\|b+d\|_{\mathrm{BMO}}=\|b\|_{\mathrm{BMO}}$ ([[def-bmo-seminorm-and-quotient-by-constants]]).

[F2] The reverse triangle inequality gives $\bigl||u|-|v|\bigr|\le|u-v|$ for real or complex numbers $u,v$, and for real $b,c$ the maximum and minimum decompose as $\max(b,c)=c+\tfrac12\bigl((b-c)+|b-c|\bigr)$ and $\min(b,c)=c+\tfrac12\bigl((b-c)-|b-c|\bigr)$.

## Proof

**Proof technique:** direct.

1.1 For a locally integrable $g$, a cube $Q$ and a constant $d$, one has $|g_Q-d|\le|Q|^{-1}\int_Q|g-d|$, so $|Q|^{-1}\int_Q|g-g_Q|\le|Q|^{-1}\int_Q|g-d|+|g_Q-d|\le2|Q|^{-1}\int_Q|g-d|$; taking the supremum over $Q$ gives $\|g\|_{\mathrm{BMO}}\le2\sup_Q|Q|^{-1}\int_Q|g-d_Q|$ for any choice of constants $d_Q$. [F1]

2.1 Let $b$ be real-valued, fix $c\in\mathbb R$ and put $g=|b-c|$. For every cube $Q$, [F2] with $d=|b_Q-c|$ gives $\bigl||b-c|-|b_Q-c|\bigr|\le|b-b_Q|$ pointwise on $Q$, so choosing $d_Q=|b_Q-c|$ in step 1.1 yields $\||b-c|\|_{\mathrm{BMO}}\le2\|b\|_{\mathrm{BMO}}$. [F2, step 1.1]

3.1 By [F2], $\max(b,c)=c+\tfrac12(b-c)+\tfrac12|b-c|$ and $\min(b,c)=c+\tfrac12(b-c)-\tfrac12|b-c|$; translation by constants leaves the seminorm unchanged by [F1] and the triangle inequality for the supremum gives $\|\max(b,c)\|_{\mathrm{BMO}}\le\tfrac12\|b-c\|_{\mathrm{BMO}}+\tfrac12\||b-c|\|_{\mathrm{BMO}}\le\tfrac12\|b\|_{\mathrm{BMO}}+\|b\|_{\mathrm{BMO}}=\tfrac32\|b\|_{\mathrm{BMO}}$, and the same computation applies to $\min(b,c)$. [F1, step 2.1, algebra]

4.1 If $-\infty<L\le K<\infty$, then $b_{[L,K]}=\min\bigl(K,\max(L,b)\bigr)$ and applying step 3.1 twice gives $\|b_{[L,K]}\|_{\mathrm{BMO}}\le\tfrac32\|\max(L,b)\|_{\mathrm{BMO}}\le\tfrac94\|b\|_{\mathrm{BMO}}$. [step 3.1, algebra]

5.1 Let $b=u+iv$ be complex-valued and put $u_M=\min(M,\max(-M,u))$ and $v_M=\min(M,\max(-M,v))$, so $b_M=u_M+iv_M$. Then $|u_M|\le|u|$ and $|v_M|\le|v|$, hence $|b_M|=\bigl(u_M^2+v_M^2\bigr)^{1/2}\le\bigl(u^2+v^2\bigr)^{1/2}=|b|$, and $u_M\to u$, $v_M\to v$ pointwise as $M\to\infty$. Moreover $\|\operatorname{Re}b\|_{\mathrm{BMO}}\le\|b\|_{\mathrm{BMO}}$ and $\|\operatorname{Im}b\|_{\mathrm{BMO}}\le\|b\|_{\mathrm{BMO}}$, because $|\operatorname{Re}(b-b_Q)|\le|b-b_Q|$ and similarly for the imaginary part; step 4.1 applied to $u$ and $v$ gives $\|b_M\|_{\mathrm{BMO}}\le\|u_M\|_{\mathrm{BMO}}+\|v_M\|_{\mathrm{BMO}}\le\tfrac94\bigl(\|u\|_{\mathrm{BMO}}+\|v\|_{\mathrm{BMO}}\bigr)\le\tfrac92\|b\|_{\mathrm{BMO}}$. [step 4.1, algebra]

6.1 Steps 3.1, 4.1 and 5.1 are the three assertions of the statement. No choice principle is used: only linearity of the integral, the definition of the seminorm and elementary real and complex inequalities. [step 3.1, step 4.1, step 5.1] ∎ 