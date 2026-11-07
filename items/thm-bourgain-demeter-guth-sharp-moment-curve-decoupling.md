---
id: thm-bourgain-demeter-guth-sharp-moment-curve-decoupling
kind: theorem
title: Bourgain–Demeter–Guth Sharp Moment-Curve Decoupling
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps:
- def-l2-decoupling-constant-for-moment-curve
- thm-parabola-sharp-l2-decoupling-base-case
- lem-moment-curve-finite-branching-iteration
- lem-bandlimited-tools-for-weighted-decoupling
- def-countable-choice
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Jean Bourgain, Ciprian Demeter, and Larry Guth, Proof of the main conjecture
      in Vinogradov’s mean value theorem for degrees higher than three
    url: https://annals.math.princeton.edu/wp-content/uploads/annals-v184-n2-p07-p.pdf
    locator: Theorem 1.2, p. 635; §§6–10, pp. 640–681, proof for n≥3.
  - title: Shaoming Guo, Zane Kun Li, Po-Lam Yung, and Pavel Zorin-Kranich, A short
      proof of ℓ² decoupling for the moment curve
    url: https://arxiv.org/pdf/1912.09798
    locator: 'Theorem 1.1 and §§1–4: an independent bilinear proof of the all-dimensional
      frequency-supported moment-curve decoupling estimate.'
proof_strategy: direct
axiom_use: Countable Choice is inherited from the Euclidean Lebesgue/Fourier and approximation
  suppliers; no full Axiom of Choice is used.
---

## Statement

Assume Countable Choice. Let $n\ge2$, $E\ge100n$, $0<\delta\le1$, $\varepsilon>0$, and $p=n(n+1)$. For every ball $B\subset\mathbb R^n$ of radius $\delta^{-n}$ and every $g\in L^1([0,1])$,
$$\|E^{(n)}g\|_{L^p(w_{B,E})}\le C_{n,E,\varepsilon}\,\delta^{-\varepsilon}\left(\sum_{J\in\mathcal P_\delta}\|E_J^{(n)}g\|_{L^p(w_{B,E})}^2\right)^{1/2},$$
where $C_{n,E,\varepsilon}$ is independent of $\delta$, $B$, and $g$.

## Statement references

[Moment-curve decoupling constants and interval partition]([[def-l2-decoupling-constant-for-moment-curve]])

[Moment-curve extension operator]([[def-moment-curve-extension-operator]])

[Polynomially weighted norms]([[def-polynomial-decoupling-weight-and-norm]])

[BDG, Theorem 1.2](https://annals.math.princeton.edu/wp-content/uploads/annals-v184-n2-p07-p.pdf)

[Guo–Li–Yung–Zorin-Kranich, Theorem 1.1](https://arxiv.org/pdf/1912.09798)

## Facts & Assumptions

**Given:** All hypotheses of the Statement.

[F1] The actual local finite-branching proof and local Fourier/weighted-transfer tools are [[lem-moment-curve-finite-branching-iteration]] and [[lem-bandlimited-tools-for-weighted-decoupling]]. Lower-dimensional endpoints in the proof are obtained by finite induction, with an explicitly proved $n=2$ base.

## Proof

1.1 Induct on dimension $n$. For $n=2$ the finite-branching lemma's independent one-inflation case gives the subcritical estimates for every real $E\ge200$, and the endpoint calculation below proves the base. This also contains the separately stated parabola theorem. For $n\ge3$, assume the complete endpoint conclusion in every $2\le d<n$ and every real admissible weight exponent. These are precisely the hypotheses of the finite-branching supplier, so it gives all subcritical estimates needed below in dimension $n$. [given, F1, construct, algebra]

2.1 For $R=\delta^{-n}\ge1$ cover the unweighted ball $B_R$ by unit balls with centers in a fixed dilation. The local Fourier bound at unit scale applies to $Eg$, whose frequency support lies in a fixed bounded ball. Take its input weight exponent $L>E+n+1$. Unit-center shell counting gives $\sum_Uw_{U,L}\le Cw_{B_R,E}$: inside a fixed dilation use the integrable lattice sum, and outside it use $R^n(1+\operatorname{dist}(x,B_R))^{-L}\le C(1+|x-c_B|/R)^{-E}$. Local Bernstein followed by $\ell^{p_c}\subset\ell^p$ thus gives $\|Eg\|_{L^{p_c}(B_R)}\le C\|Eg\|_{L^p(w_{B_R,E})}$. This is an unweighted left inequality, not the false same-weight weighted reverse Holder. [given, F1, construct, algebra]

3.1 Apply subcritical decoupling to the right and Holder in the finite measure $w_{B_R,E}(x)\,dx$ to each piece. Its total mass is $C_{n,E}R^n$. Therefore
$$ \|Eg\|_{L^{p_c}(B_R)}\le C D_{p,n}(\delta,E)R^{n(1/p-1/p_c)}\left(\sum_J\|E_Jg\|_{L^{p_c}(w_{B_R,E})}^2\right)^{1/2}. $$
The $p_c$th-power right functional is degree one and superadditive, so homogeneous local-to-weighted transfer gives $D_{p_c,n}(\delta,E)\le C\delta^{-n^2(1/p-1/p_c)}D_{p,n}(\delta,E)$. Given $\varepsilon>0$, take $p$ sufficiently close to $p_c$ that $n^2(1/p-1/p_c)<\varepsilon/2$, and use subcritical loss $\eta=\varepsilon/2$. This proves the full endpoint bound with the same target weight $E$, all real scales, all centers and every integrable input. [given, F1, construct, algebra]

4.1 The preceding step proves the endpoint induction implication and its dimension-two base. Therefore finite induction gives the asserted bound for every $n\ge2$, every real $E\ge100n$, every $\varepsilon>0$ and every real $0<\delta\le1$. No same-weight anisotropic-rescaling assertion or unproved same-weight linear/multilinear comparison is a logical supplier: the finite-branching proof uses its explicit buffered versions. The two stronger original supplier interfaces remain separate authoring obligations. [given, F1, construct, algebra] ∎

