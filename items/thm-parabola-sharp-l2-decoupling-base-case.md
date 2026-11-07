---
id: thm-parabola-sharp-l2-decoupling-base-case
kind: theorem
title: Sharp L2 Decoupling for the Parabola (Induction Base Case)
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 8
deps:
- def-l2-decoupling-constant-for-moment-curve
- lem-moment-curve-finite-branching-iteration
- lem-bandlimited-tools-for-weighted-decoupling
- def-countable-choice
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Jean Bourgain and Ciprian Demeter, The proof of the l^2 decoupling conjecture
    url: https://annals.math.princeton.edu/wp-content/uploads/annals-v182-n1-p09-p.pdf
    locator: Theorem 1.1 and its parabola specialization, pp. 1–3; the BDG 2016 paper
      identifies n=2 as the already-proved base case.
  - title: Jean Bourgain, Ciprian Demeter, and Larry Guth, Proof of the main conjecture
      in Vinogradov’s mean value theorem for degrees higher than three
    url: https://annals.math.princeton.edu/wp-content/uploads/annals-v184-n2-p07-p.pdf
    locator: '§1, p. 635; §9, pp. 675–676: n=2 is the base case for the induction
      on dimension.'
proof_strategy: direct
axiom_use: Countable Choice is inherited from the Euclidean Lebesgue/Fourier and approximation
  suppliers; no full Axiom of Choice is used.
---

## Statement

Assume Countable Choice. For every real $E\ge200$, every $\varepsilon>0$, every $0<\delta\le1$, every ball $B\subset\mathbb R^2$ of radius $\delta^{-2}$, and every $g\in L^1([0,1])$,
$$\|E^{(2)}g\|_{L^6(w_{B,E})}\le C_{E,\varepsilon}\,\delta^{-\varepsilon}\left(\sum_{J\in\mathcal P_\delta}\|E_J^{(2)}g\|_{L^6(w_{B,E})}^2\right)^{1/2},$$
where $C_{E,\varepsilon}$ is independent of $\delta$, $B$, and $g$.

## Statement references

[Moment-curve decoupling constants]([[def-l2-decoupling-constant-for-moment-curve]])

[Moment-curve extension operator]([[def-moment-curve-extension-operator]])

[Polynomially weighted norms]([[def-polynomial-decoupling-weight-and-norm]])

[Bourgain–Demeter, Theorem 1.1](https://annals.math.princeton.edu/wp-content/uploads/annals-v182-n1-p09-p.pdf)

[BDG, Theorem 1.2 and induction setup](https://annals.math.princeton.edu/wp-content/uploads/annals-v184-n2-p07-p.pdf)

## Facts & Assumptions

**Given:** All hypotheses of the Statement.

[F1] The finite-branching supplier includes its independent $n=2$ base and subcritical estimates; local Fourier tools and homogeneous weighted transfer are [[lem-moment-curve-finite-branching-iteration]] and [[lem-bandlimited-tools-for-weighted-decoupling]]. In the proof $n=2$ and $p_c=6$.

## Proof

1.1 Take $n=2$, $p_c=6$, and $4<p<6$. The finite-branching supplier has no lower-dimensional hypothesis here. Its one-inflation base has $\alpha=(p-4)/(p-2)$ and first scale moment $4/(p-2)>1$, so its full exponent closure proves $D_{p,2}(\delta,E)\le C_\eta\delta^{-\eta}$ for every $E\ge200$ and $\eta>0$. [given, F1, construct, algebra]

1.2 For $R=\delta^{-n}\ge1$ cover the unweighted ball $B_R$ by unit balls with centers in a fixed dilation. The local Fourier bound at unit scale applies to $Eg$, whose frequency support lies in a fixed bounded ball. Take its input weight exponent $L>E+n+1$. Unit-center shell counting gives $\sum_Uw_{U,L}\le Cw_{B_R,E}$: inside a fixed dilation use the integrable lattice sum, and outside it use $R^n(1+\operatorname{dist}(x,B_R))^{-L}\le C(1+|x-c_B|/R)^{-E}$. Local Bernstein followed by $\ell^{p_c}\subset\ell^p$ thus gives $\|Eg\|_{L^{p_c}(B_R)}\le C\|Eg\|_{L^p(w_{B_R,E})}$. This is an unweighted left inequality, not the false same-weight weighted reverse Holder. [given, F1, construct, algebra]

1.3 Apply subcritical decoupling to the right and Holder in the finite measure $w_{B_R,E}(x)\,dx$ to each piece. Its total mass is $C_{n,E}R^n$. Therefore
$$ \|Eg\|_{L^{p_c}(B_R)}\le C D_{p,n}(\delta,E)R^{n(1/p-1/p_c)}\left(\sum_J\|E_Jg\|_{L^{p_c}(w_{B_R,E})}^2\right)^{1/2}. $$
The $p_c$th-power right functional is degree one and superadditive, so homogeneous local-to-weighted transfer gives $D_{p_c,n}(\delta,E)\le C\delta^{-n^2(1/p-1/p_c)}D_{p,n}(\delta,E)$. Given $\varepsilon>0$, take $p$ sufficiently close to $p_c$ that $n^2(1/p-1/p_c)<\varepsilon/2$, and use subcritical loss $\eta=\varepsilon/2$. This proves the full endpoint bound with the same target weight $E$, all real scales, all centers and every integrable input. [given, F1, construct, algebra]

2.1 Set $n=2$ in the preceding computation. It applies to every real $E\ge200$ as requested in the Statement. Its constants depend only on $E,\varepsilon$ and the fixed dimension, as required; $\delta=1$ follows from its single interval or from the same bound. [given, F1, construct, algebra] ∎
