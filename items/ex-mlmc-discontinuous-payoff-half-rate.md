---
id: ex-mlmc-discontinuous-payoff-half-rate
kind: example
title: "A discontinuous payoff with bias order one and variance order one-half"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - def-mlmc-hierarchy-and-coupled-corrections
  - thm-mlmc-complexity-under-rate-assumptions
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
sources:
  references:
    - title: "Michael B. Giles, Multilevel Monte Carlo Path Simulation, §3"
      url: "https://people.maths.ox.ac.uk/gilesm/files/opre.pdf"
---

## Example

Fix an integer $M\ge2$, put $h_\ell=M^{-\ell}$, and choose $c\in(0,1]$. Let $X$ have density $f_c(x)=\frac12(1+cx)$ on $[-1,1]$, let $S$ be an independent Rademacher variable, and use the discontinuous payoff $\varphi(x)=\mathbf1_{\{x\ge0\}}$. The target law is that of $P=\varphi(X)$, and for each $\ell\ge0$ the level law is that of $P_\ell=\varphi(X+\sqrt{h_\ell}S)$. Couple adjacent level laws using the same pair $(X,S)$ within each coupling.

For each correction sample, draw a fresh independent pair $(X,S)$ with the stated law; within each positive-level correction use that same pair for the fine and coarse payoffs, and take all samples in distinct level blocks independently as required by the definition. This gives an infinite compatible family whose finite prefixes are MLMC hierarchies. The example has bias order $\alpha=1$ and single-correction variance order $\beta=\frac12$ for positive levels. The level-zero correction is bounded and $h_0=1$, so enlarge the variance constant to include it. One sample costs $O(1)$, so it also satisfies the abstract theorem's upper work assumption $O(h_\ell^{-1})$. Substituting that conservative work rate into the theorem gives the guarantee $O(\epsilon^{-5/2})$; the example does not claim this is a sharp cost for its constant-work evaluator.

## Facts & Assumptions

**Given:** An integer $M\ge2$, $c\in(0,1]$, the density and payoff above, independence of $X$ and $S$, and the common-pair coupling across each adjacent level.

[F1] [[def-mlmc-hierarchy-and-coupled-corrections]]: adjacent corrections may use any joint law with the stated fine and coarse marginals; here the same $(X,S)$ supplies that coupling.

[F2] [[thm-mlmc-complexity-under-rate-assumptions]]: with $\alpha=1$, $\beta=\frac12$, and work exponent $\gamma=1$, the guaranteed cost exponent is $2+(1-\beta)/\alpha=5/2$.

## Verification

1.1 This is a hierarchy of the form in [F1]. The density is nonnegative on $[-1,1]$ because $c\le1$, and its integral is $\frac12\int_{-1}^1(1+cx)\,dx=1$. The target mean is $\mathbb E P=\frac12+c/4$. Writing $\delta=\sqrt{h_\ell}$ and averaging over $S=\pm1$ gives $\mathbb E P_\ell=\tfrac12\bigl(\mathbb P(X\ge-\delta)+\mathbb P(X\ge\delta)\bigr)=\mathbb E P-\frac{c\delta^2}{4}.$ Thus $|\mathbb E P_\ell-\mathbb E P|=c h_\ell/4$, so the bias exponent is $\alpha=1$. [F1, given, algebra]

1.2 For $\ell\ge1$, put $\delta_f=\sqrt{h_\ell}$ and $\delta_c=\sqrt{h_{\ell-1}}=\sqrt M\,\delta_f$. The correction $\Delta_\ell=P_\ell-P_{\ell-1}$ is $+1$ when $S=-1$ and $\delta_f\le X<\delta_c$, is $-1$ when $S=+1$ and $-\delta_c\le X<-\delta_f$, and is zero otherwise. Integrating the density on those two intervals and averaging over the two signs gives $\mathbb P(\Delta_\ell\ne0)=\frac{\delta_c-\delta_f}{2}=\frac{\sqrt M-1}{2}\sqrt{h_\ell}=:p_\ell.$ The level-0 correction is bounded, so it has finite variance as well. [F1, given, algebra]

2.1 The two signed crossing probabilities give $\mathbb E\Delta_\ell=c(M-1)h_\ell/4$. Since $\Delta_\ell^2=\mathbf1_{\{\Delta_\ell\ne0\}}$, $\operatorname{Var}(\Delta_\ell)=p_\ell-(\mathbb E\Delta_\ell)^2$. For $\ell\ge1$, $h_\ell\le1/M$ and $\frac{(\mathbb E\Delta_\ell)^2}{p_\ell} =\frac{c^2(M-1)^2h_\ell^{3/2}}{8(\sqrt M-1)} \le\frac{c^2(\sqrt M-1)(\sqrt M+1)^2}{8M^{3/2}} \le\frac{c^2}{4}\le\frac14.$ The last inequality follows from $(\sqrt M-1)(\sqrt M+1)^2\le2M^{3/2}$ for $M\ge2$. Hence $\frac34p_\ell\le\operatorname{Var}(\Delta_\ell)\le p_\ell$, which proves the exact order $\beta=\frac12$. [given, step 1.2, algebra]

3.1 The sample evaluator uses a constant number of draws, so its cost is $O(1)\le O(h_\ell^{-1})$ because $0<h_\ell\le1$. Substituting $\alpha=1$, $\beta=\frac12$, $\gamma=1$ into [F2] gives the stated $O(\epsilon^{-5/2})$ upper guarantee under that work-rate bound. [F2, step 1.1, step 2.1, algebra] ∎
