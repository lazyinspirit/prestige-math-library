---
id: thm-fractional-sobolev-inequality-on-euclidean-space
kind: theorem
title: "The critical fractional Sobolev inequality on $\\mathbb R^d$"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
deps: [lem-slobodeckij-seminorm-controls-dyadic-level-sets, lem-dyadic-level-set-summability-estimate, def-fractional-slobodeckij-space-on-euclidean-space, def-l-p-space-as-a-quotient-by-null-functions, thm-fatou-lemma, thm-dominated-convergence, thm-holder-inequality-for-integrals, thm-lyapunov-interpolation-inequality-for-l-p-norms, def-countable-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Eleonora Di Nezza, Giampiero Palatucci and Enrico Valdinoci, Hitchhiker's guide to the fractional Sobolev spaces (arXiv:1104.4345, survey)"
      url: "https://arxiv.org/pdf/1104.4345"
      locator: "Theorem 6.5 and its proof, printed pp. 45-47; Theorem 6.7 for the extension-domain consequence, printed pp. 47-48"
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Theorem 3.31 and the interpolation Lemma 1.11, printed pp. 66-67 (the integer-order model of the same layer-cake and interpolation pattern)"
---

## Statement

Assume the Axiom of Countable Choice. Let $d\ge1$, $0<\theta<1$,
$1\le p<\infty$ with $p\theta<d$ and $p_\star:=\frac{dp}{d-p\theta}$. There is
$C=C(d,p,\theta)>0$ such that every measurable, compactly supported
$f:\mathbb R^d\to\mathbb R$ satisfies
$$\|f\|_{L^{p_\star}(\mathbb R^d)}^{p}\ \le\ C\,[f]_{\theta,p}^{p}.$$
Consequently, for every bounded open $U\subseteq\mathbb R^d$ and every
$1\le q\le p_\star$ there is $C'=C'(d,p,\theta,U,q)$ with
$\|f\|_{L^q(U)}\le C'\bigl(\|f\|_{L^p(\mathbb R^d)}+[f]_{\theta,p}\bigr)$ for
every compactly supported measurable $f$.

## Facts & Assumptions

**Given:** Countable Choice, $d\ge1$, $0<\theta<1$, $1\le p<\infty$ with $p\theta<d$, and $p_\star=dp/(d-p\theta)$; write $\alpha:=p\theta/d$, so that $p/p_\star=(d-p\theta)/d=1-\alpha$ and $p_\star/p=1/(1-\alpha)$.

[F1] *Dyadic summability.* For a bounded nonnegative nonincreasing sequence $(a_k)$ vanishing for all large $k$ and $T=2^p>1$, $\sum_ka_k^{1-\alpha}T^k\le C_1\sum_{k:a_k\ne0}a_{k+1}a_k^{-\alpha}T^k$. ([[lem-dyadic-level-set-summability-estimate]])

[F2] *Level-set bound.* For $f\in L^\infty$ compactly supported with $a_k=|\{|f|>2^k\}|$, $[f]_{\theta,p}^p\ge c\sum_{k:a_k\ne0}a_{k+1}a_k^{-\alpha}2^{pk}$. ([[lem-slobodeckij-seminorm-controls-dyadic-level-sets]])

[F3] *Fatou and dominated convergence.* Fatou's lemma bounds the integral of a pointwise limit below by the lower limit of the integrals; dominated convergence applies under an integrable dominating function. ([[thm-fatou-lemma]], [[thm-dominated-convergence]])

[F4] *Interpolation and H\"older.* For $p<q<p_\star$, let $\sigma\in(0,1)$ be defined by $1/q=(1-\sigma)/p+\sigma/p_\star$. Lyapunov interpolation, with its parameter $1-\sigma$, gives $\|g\|_{L^q}\le\|g\|_{L^p}^{1-\sigma}\|g\|_{L^{p_\star}}^\sigma$. For $q\le p$ on a set $U$ of finite measure, $\|g\|_{L^q(U)}\le|U|^{1/q-1/p}\|g\|_{L^p(U)}$. ([[thm-lyapunov-interpolation-inequality-for-l-p-norms]], [[thm-holder-inequality-for-integrals]])

[F5] *Seminorm and classes.* $[\cdot]_{\theta,p}$ is the Slobodeckij seminorm, finite on $W^{\theta,p}$. The scalar truncation $T_N(t)=\max(-N,\min(N,t))$ is 1-Lipschitz, hence $|T_N(f(x))-T_N(f(y))|\le|f(x)-f(y)|$ and $[T_Nf]_{\theta,p}\le[f]_{\theta,p}$. ([[def-fractional-slobodeckij-space-on-euclidean-space]], [[def-l-p-space-as-a-quotient-by-null-functions]])

## Proof

**Proof technique:** prove the inequality for bounded compactly supported $f$ by the layer-cake expansion and the two dyadic estimates, then pass to general $f$ by truncation and Fatou. If the seminorm is infinite, the inequality is immediate.

1.1 Let first $f\in L^\infty$ have compact support, put $A_k=\{|f|>2^k\}$ and $a_k=|A_k|$. On $D_k=A_k\setminus A_{k+1}$ one has $|f|\le2^{k+1}$, and the $D_k$ partition $\{f\ne0\}$, and $f$ vanishes on the remaining set, so $\|f\|_{p_\star}^{p_\star}=\int|f|^{p_\star}\le\sum_k2^{(k+1)p_\star}|D_k|\le2^{p_\star}\sum_k2^{kp_\star}a_k$; raising to the power $p/p_\star<1$ and using the concavity bound $(\sum_kb_k^{1/(1-\alpha)})^{1-\alpha}\le\sum_kb_k$ for $b_k:=a_k^{1-\alpha}2^{pk}$, whose $1/(1-\alpha)$-th powers are $a_k2^{kp_\star}$, gives $\|f\|_{p_\star}^{p}\le2^p\sum_ka_k^{1-\alpha}2^{pk}$. Since the sequence $a_k$ is bounded, nonincreasing and eventually $0$, [F1] followed by [F2] bounds the last sum by a constant times $[f]_{\theta,p}^p$, proving the inequality for this $f$. [F1, F2, F5, algebra]

2.1 For general compactly supported measurable $f$ with $[f]_{\theta,p}<\infty$ put $f_N:=\max\{-N,\min\{N,f\}\}$. Then $f_N\to f$ pointwise with $|f_N|\le|f|$, so $[f_N]_{\theta,p}\le[f]_{\theta,p}$ by the pointwise contraction in [F5]; the bounded case of step 1.1 gives $\|f_N\|_{p_\star}^p\le C[f_N]_{\theta,p}^p\le C[f]_{\theta,p}^p$, and Fatou's lemma [F3] passes to the limit: $\|f\|_{p_\star}^p\le\liminf_N\|f_N\|_{p_\star}^p\le C[f]_{\theta,p}^p$, which is the asserted inequality. [F3, F5, step 1.1]

3.1 Let $U$ be bounded open and $1\le q\le p_\star$. If $U=\varnothing$ or $\|f\|_{L^p(\mathbb R^d)}+[f]_{\theta,p}=\infty$, the conclusion is immediate. For $q\le p$, Holder [F4] on the finite-measure set $U$ gives $\|f\|_{L^q(U)}\le|U|^{1/q-1/p}\|f\|_{L^p(U)}\le|U|^{1/q-1/p}\|f\|_{L^p(\mathbb R^d)}$. If $p<q<p_\star$, choose $\sigma\in(0,1)$ so that $1/q=(1-\sigma)/p+\sigma/p_\star$. Lyapunov [F4], the embedding of the restricted $L^p$ and $L^{p_\star}$ norms below their global norms, and step 2.1 give $$\|f\|_{L^q(U)}\le\|f\|_{L^p(\mathbb R^d)}^{1-\sigma}\bigl(C^{1/p}[f]_{\theta,p}\bigr)^\sigma.$$ Put $a=\|f\|_{L^p(\mathbb R^d)}$ and $b=C^{1/p}[f]_{\theta,p}$. Weighted AM--GM yields $a^{1-\sigma}b^\sigma\le(1-\sigma)a+\sigma b\le\max\{1,C^{1/p}\}(a+[f]_{\theta,p})$. At $q=p_\star$, step 2.1 directly gives $\|f\|_{L^{p_\star}(U)}\le C^{1/p}[f]_{\theta,p}$. These estimates, and the $q\le p$ Holder bound, give the claimed consequence with a constant depending on $d,p,\theta,U,q$. Countable Choice is inherited through [F1], [F2] and [F3]. [F1, F2, F3, F4, step 1.1, step 2.1, algebra] ∎