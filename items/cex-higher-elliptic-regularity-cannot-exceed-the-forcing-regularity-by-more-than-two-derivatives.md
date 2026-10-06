---
id: cex-higher-elliptic-regularity-cannot-exceed-the-forcing-regularity-by-more-than-two-derivatives
kind: counterexample
title: "Higher elliptic regularity cannot gain more than two derivatives"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 8
deps: [thm-interior-h-k-plus-two-elliptic-regularity, def-local-weak-solution-for-a-divergence-form-operator, def-uniformly-elliptic-divergence-form-operator, def-sobolev-space-wkp-and-its-norm, def-weak-derivative-of-a-locally-integrable-function, def-countable-choice]
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter graduate notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Sections 4.11-4.12, the two-derivative gain in Theorems 4.28 and 4.31, printed pp. 114-116 (read in full)"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, complete 392 pages)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Section 10.3, Corollary 10.19 and its data hypothesis $f\\in H^k$, printed p. 243 (read in full)"
---

## Statement refuted

Assume Countable Choice. For every integer $k\ge0$, smooth constant
coefficients and $f\in H^k_{\mathrm{loc}}(\Omega)$ force every $H^1$
local weak solution of $-u''=f$ into $H^{k+3}_{\mathrm{loc}}(\Omega)$.

## Facts & Assumptions

**Given:** Countable Choice; a fixed integer $k\ge0$; the interval $\Omega=(-1,1)$; the datum $f(x)=|x|^{k+1/2}$; and the function $u(x)=-A|x|^{k+5/2}$ with $A=((k+\tfrac52)(k+\tfrac32))^{-1}>0$.

[F1] On each half-interval the classical derivative of order $j$ of $f(x)=|x|^{k+1/2}$ is a nonzero constant times $|x|^{k+1/2-j}$, with a possible sign change across $0$. For $j\le k$ these derivatives tend to $0$ at $0$ and are in $L^2$; the order $k+1$ derivative is locally integrable with magnitude a positive constant times $|x|^{-1/2}$, but is not in $L^2$ near $0$. Since all derivatives through order $k$ extend continuously across $0$, the piecewise classical derivatives are the weak derivatives through order $k+1$, with no point-mass terms. Thus $f\in H^k((-1,1))$ but $f\notin H^{k+1}_{\mathrm{loc}}((-1,1))$ near $0$. ([[def-sobolev-space-wkp-and-its-norm]], [[def-weak-derivative-of-a-locally-integrable-function]])

[F2] A class $u\in H^1((-1,1))$ is a local weak solution of $-u''=f$ if $\int_{-1}^1u'\overline{\varphi'}\,dx=\int_{-1}^1f\overline\varphi\,dx$ for every $\varphi\in C_c^\infty((-1,1))$. ([[def-local-weak-solution-for-a-divergence-form-operator]])

[F3] Put $p=k+\tfrac52$ and $A=(p(p-1))^{-1}$. For $u=-A|x|^p$, its derivatives through order $k+2$ are piecewise constant multiples of $|x|^{p-j}$, hence lie in $L^2((-1,1))$; the $(k+3)$rd derivative has magnitude a positive constant times $|x|^{-1/2}$ and is not locally in $L^2$ at $0$. The derivatives through order $k+2$ extend continuously across $0$, so these piecewise formulas are the weak derivatives and no delta mass occurs. ([[def-sobolev-space-wkp-and-its-norm]], [[def-weak-derivative-of-a-locally-integrable-function]])

[F4] Assume Countable Choice. For the operator $L=-u''$ in dimension one, $a^{11}=1$ and $b=c=0$, so it is uniformly elliptic with $\theta=M_a=1$, $M_b=M_c=0$, and its constant coefficients lie in $W^{k+1,\infty}_{\mathrm{loc}}$ for every $k$. If $f\in H^k_{\mathrm{loc}}(\Omega)$ and $u\in H^1(\Omega)$ is a local weak solution of $Lu=f$, the interior theorem gives $u\in H^{k+2}_{\mathrm{loc}}(\Omega)$. ([[thm-interior-h-k-plus-two-elliptic-regularity]], [[def-uniformly-elliptic-divergence-form-operator]], [[def-countable-choice]])

## Counterexample

1.1 Data regularity. The piecewise derivative calculation in [F1] shows $f\in H^k((-1,1))$ but $f\notin H^{k+1}_{\mathrm{loc}}$ near $0$. [F1, algebra, given]

1.2 The solution's regularity. With $u=-A|x|^p$ from [F3], one has $-u''=A p(p-1)|x|^{p-2}=|x|^{k+1/2}=f$ on both sides of $0$. Since $u'$ is continuous at $0$ and $u''=-f$ is locally integrable, this also holds distributionally across $0$. The piecewise derivative calculation in [F3] gives $u\in H^{k+2}((-1,1))$ but $u\notin H^{k+3}_{\mathrm{loc}}$ near $0$. [F3, algebra, given]

2.1 The weak equation. For every $\varphi\in C_c^\infty((-1,1))$, the distributional identity $-u''=f$ gives $\int_{-1}^1u'\overline{\varphi'}\,dx=\int_{-1}^1f\overline\varphi\,dx$. Thus $u$ is a local weak solution by [F2]. [F2, step 1.2, algebra]

3.1 The interior $H^{k+2}$ theorem agrees with the direct calculation. The Laplacian has smooth constant coefficients, $f\in H^k_{\mathrm{loc}}$, and the weak solution satisfies the hypotheses of [F4], so that theorem gives $u\in H^{k+2}_{\mathrm{loc}}$. The explicit formula in step 1.2 gives the stronger global $H^{k+2}$ membership. [F4, step 1.1, step 2.1, algebra]

4.1 No third extra local derivative. If $u\in H^{k+3}(I)$ on a neighborhood $I$ of $0$, then its third weak derivative lies in $H^k(I)$. But $u'''=-f'$ in distributions, so $f'\in H^k(I)$ and hence $f\in H^{k+1}(I)$, contradicting step 1.1. Therefore this interior weak solution belongs to $H^{k+2}_{\mathrm{loc}}$ but not to $H^{k+3}_{\mathrm{loc}}$ near $0$, even with constant smooth coefficients. [F1, step 1.1, step 3.1, algebra] ∎


## Source notes

Hunter's Theorems 4.28 and 4.31 and Teschl's Corollary 10.19 (printed pp. 114-116 and p. 243) record the gain of exactly two derivatives. The interior cusp $f=|x|^{k+1/2}$ shows the sharpness at an interior point, rather than only at the boundary; the exact $H^{k+2}$ and failure of $H^{k+3}_{\mathrm{loc}}$ follow directly from the explicit formula.
