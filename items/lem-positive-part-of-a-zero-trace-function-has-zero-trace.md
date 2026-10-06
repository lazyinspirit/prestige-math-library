---
id: lem-positive-part-of-a-zero-trace-function-has-zero-trace
kind: lemma
title: "A function whose trace is at most a level has positive part in the zero-boundary space"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 6
deps: [def-weak-subsolution-and-supersolution-of-a-divergence-form-equation, lem-positive-part-is-an-admissible-weak-test-by-truncation, cor-positive-negative-part-and-truncation-calculus-in-w-one-p, thm-lp-trace-operator-on-a-bounded-c-one-domain, lem-sobolev-trace-agrees-with-continuous-boundary-values, thm-kernel-of-the-trace-is-w-one-p-zero, thm-smooth-up-to-the-boundary-density-on-smooth-domains, thm-local-smooth-approximation-in-wkp, def-wkp-zero-as-a-sobolev-closure, def-bounded-c-k-domain-and-boundary-charts, def-countable-choice, def-axiom-of-choice, thm-dominated-convergence, thm-chebyshev-markov-inequality-for-the-integral]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Leon Simon, Lectures on Partial Differential Equations (Stanford University; complete author scan, 118 sheets reproducing the 223 printed pages of the manuscript, two logical pages per sheet)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lecture 13, printed pp. 147-158: the boundary conventions (i)-(iv), u <= 0 on dOmega iff u^+ in W^{1,p}_0 (read in full)"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (author manuscript, version 11 February 2025; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Chapter 10, Section 1, the convention after (10.8) and Lemma 10.2, printed pp. 223-232 (read in full)"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume Countable Choice and the Axiom of Choice, inherited through the published trace and density suppliers named below. Let $n\ge2$, let $\Omega\subset\mathbb R^n$ be a bounded $C^1$ domain ([[def-bounded-c-k-domain-and-boundary-charts]]), let $u\in H^1(\Omega;\mathbb R)$, and let $T$ be the trace operator of [[thm-lp-trace-operator-on-a-bounded-c-one-domain]]. Then $Tu\le0$ a.e. on $\partial\Omega$ implies $u^+\in H^1_0(\Omega)$, and conversely $u^+\in H^1_0(\Omega)$ implies $Tu\le0$ a.e.; more generally, for every $k\in\mathbb R$, $(u-k)^+\in H^1_0(\Omega)$ if and only if $Tu\le k$ a.e. on $\partial\Omega$. In particular the weak boundary order of [[def-weak-subsolution-and-supersolution-of-a-divergence-form-equation]] is the pointwise trace order, and the two conventions give the same boundary supremum $\sup_{\partial\Omega}u=\operatorname{ess\,sup}_{\partial\Omega}Tu$ (with value $+\infty$ only if the trace is not essentially bounded above).

## Facts & Assumptions

**Given:** Countable Choice and the Axiom of Choice; a bounded $C^1$ domain $\Omega\subset\mathbb R^n$, $n\ge2$; a real class $u\in H^1(\Omega;\mathbb R)$; the trace $T$; and a real level $k$.

[F1] $T:W^{1,2}(\Omega;\mathbb R)\to L^2(\partial\Omega;\mathbb R)$ is linear and bounded, and $Tv=v|_{\partial\Omega}$ for every $v\in C(\overline\Omega)\cap H^1(\Omega)$ ([[thm-lp-trace-operator-on-a-bounded-c-one-domain]], [[lem-sobolev-trace-agrees-with-continuous-boundary-values]]).

[F2] Assume the Axiom of Choice. Smooth functions on $\overline\Omega$ (restrictions of $C_c^\infty(\mathbb R^n)$ functions) are dense in $H^1(\Omega)$, and $C_c^\infty(\Omega)$ is dense in $H^1_0(\Omega)$ by definition ([[thm-smooth-up-to-the-boundary-density-on-smooth-domains]], [[def-wkp-zero-as-a-sobolev-closure]]).

[F3] Assume the Axiom of Choice. $\{w\in H^1(\Omega):Tw=0\}=H^1_0(\Omega)$ ([[thm-kernel-of-the-trace-is-w-one-p-zero]]).

[F4] Assume the Axiom of Choice. If $w,w_j\in H^1(\Omega;\mathbb R)$ with $w_j\to w$ in $H^1$, then $w_j^+\to w^+$ in $H^1$: pointwise $|w_j^+-w^+|\le|w_j-w|$ and $D(w_j^+-w^+)=1_{\{w_j>0\}}Dw_j-1_{\{w>0\}}Dw=1_{\{w_j>0\}}D(w_j-w)+(1_{\{w_j>0\}}-1_{\{w>0\}})Dw$, whose first term tends to $0$ in $L^2$. Every subsequence has a further subsequence with $w_j\to w$ a.e.: choose the further terms with $\|w_j-w\|_2^2\le2^{-3j}$, so $|\{|w_j-w|>2^{-j}\}|\le2^{-j}$ and countable subadditivity makes the limsup null. Along this further subsequence the indicator difference tends to zero where $w\ne0$, while $Dw=0$ a.e. where $w=0$; dominated convergence with $4|Dw|^2$ makes the second term tend to zero in $L^2$. If the full positive-part sequence did not converge, a subsequence with errors bounded below would contradict this argument. Therefore $w_j^+\to w^+$ in $H^1$ ([[lem-positive-part-is-an-admissible-weak-test-by-truncation]], [[cor-positive-negative-part-and-truncation-calculus-in-w-one-p]]).

[F5] Weak boundary order: $u\le k$ on $\partial\Omega$ means $(u-k)^+\in H^1_0(\Omega)$, and $\sup_{\partial\Omega}u=\inf\{k:u\le k\text{ on }\partial\Omega\}$ with $\inf\varnothing=+\infty$ ([[def-weak-subsolution-and-supersolution-of-a-divergence-form-equation]]).

## Proof

**Proof technique:** direct; approximate by functions smooth up to the boundary, where the trace is the boundary restriction and commutes with truncation, then pass to the limit.

1.1 Fix $k\in\mathbb R$ and put $w:=u-k\in H^1(\Omega;\mathbb R)$ and $w_k:=(u-k)^+$. By [F2] choose $w_j\in C^\infty(\overline\Omega)$ with $w_j\to w$ in $H^1$. For each $j$, $w_j^+$ is continuous on $\overline\Omega$ as the maximum of the continuous functions $w_j$ and $0$, and it lies in $H^1(\Omega)$ by the Lipschitz chain rule, so [F1] gives $Tw_j^+=w_j^+|_{\partial\Omega}=(w_j|_{\partial\Omega})^+=(Tw_j)^+$ (the last equality using $Tw_j=w_j|_{\partial\Omega}$ from [F1]); moreover $Tw_j\to Tw$ in $L^2(\partial\Omega)$, so $(Tw_j)^+\to(Tw)^+$ in $L^2(\partial\Omega)$ because $t\mapsto t^+$ is $1$-Lipschitz on $\mathbb R$. [given, F1, F2]

2.1 By [F4], $w_j^+\to w^+$ in $H^1(\Omega)$, so the continuity of $T$ in [F1] gives $Tw_j^+\to Tw^+$ in $L^2(\partial\Omega)$. Since step 1.1 gives $Tw_j^+=(Tw_j)^+\to(Tw)^+$ in the same space, uniqueness of $L^2$ limits yields $T(w^+)=(Tw)^+$ a.e. on $\partial\Omega$. [step 1.1, F1, F4]

3.1 Consequently, by [F3], $w^+\in H^1_0(\Omega)\iff Tw^+=0$ in $L^2(\partial\Omega)\iff(Tw)^+=0$ a.e. $\iff Tw\le0$ a.e. on $\partial\Omega$; since $w=u-k$ and $w^+=(u-k)^+$, this is the asserted equivalence $(u-k)^+\in H^1_0(\Omega)\iff Tu\le k$ a.e. [step 2.1, F3, algebra]

4.1 The boundary supremum. By [F5] and step 3.1, the admissible levels are $\{k\in\mathbb R:u\le k$ on $\partial\Omega\}=\{k\in\mathbb R:Tu\le k$ a.e.$\}=[\operatorname{ess\,sup}_{\partial\Omega}Tu,+\infty)$ when the trace is essentially bounded above, and the empty set when it is not; the infimum is therefore $\operatorname{ess\,sup}_{\partial\Omega}Tu$ in the first case and $+\infty$ in the second, which proves the boundary-supremum identification. The argument uses only the declared Countable Choice and Axiom of Choice. [step 3.1, F3, F5] ∎ 