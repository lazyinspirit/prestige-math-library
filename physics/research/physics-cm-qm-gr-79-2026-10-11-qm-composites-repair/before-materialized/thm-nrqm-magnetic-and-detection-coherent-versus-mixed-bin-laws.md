---
id: thm-nrqm-magnetic-and-detection-coherent-versus-mixed-bin-laws
aliases: [nrqm-magnetic-and-detection-coherent-versus-mixed-bin-laws]
kind: theorem
domain: mathematics
title: "Coherent and incoherent two-path bin laws and the marker overlap"
status: draft
origin: pipeline
dependency_level: 4
deps: [lem-nrqm-composites-marker-overlap-contraction, lem-nrqm-composites-chsh-and-finite-sampling-law, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces, thm-monotone-convergence-for-the-integral, lem-l-two-with-the-integral-pairing-is-a-hilbert-space, def-l-p-space-as-a-quotient-by-null-functions, def-complex-lp-and-euclidean-test-function-conventions, def-measure, def-probability-measure, def-hilbert-space, def-countable-choice]
dependency_roles:
  lem-nrqm-composites-marker-overlap-contraction: mathematical-premise
  lem-nrqm-composites-chsh-and-finite-sampling-law: mathematical-premise
  thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
  thm-monotone-convergence-for-the-integral: mathematical-premise
  lem-l-two-with-the-integral-pairing-is-a-hilbert-space: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-complex-lp-and-euclidean-test-function-conventions: mathematical-premise
  def-measure: mathematical-premise
  def-probability-measure: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 1.4 pp. 13-18 and Chapter 2 pp. 19-38 (coherent superposition versus mixture of two paths, and the two-slit cross term)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 3.3 pp. 92-95 (scalar measures and probabilities from projection-valued measures)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$(D,\mathcal A,dx)$ be a $\sigma$-finite measure space, let $L^2(D)$ be the
complex Hilbert space of
[[def-l-p-space-as-a-quotient-by-null-functions]] and
[[def-complex-lp-and-euclidean-test-function-conventions]], and let
$a,b\in L^2(D)$.

(a) *Coherent law.* If $a+b\ne0$ as a class, i.e. $\|a+b\|>0$, then
$$p_{\mathrm{coh}}(B):=\frac{\displaystyle\int_B|a+b|^2\,dx}{\|a+b\|^2}, \qquad B\in\mathcal A,$$
defines a probability measure on $(D,\mathcal A)$
([[def-measure]], [[def-probability-measure]]), and for every $B$
$$\int_B|a+b|^2dx=\int_B|a|^2dx+\int_B|b|^2dx+2\operatorname{Re}\int_Ba\overline b\,dx .$$

(b) *Incoherent law.* If $a\ne0$, $b\ne0$ and $w\in[0,1]$, then
$$p_{\mathrm{mix}}(B):=w\,\frac{\displaystyle\int_B|a|^2dx}{\|a\|^2} +(1-w)\,\frac{\displaystyle\int_B|b|^2dx}{\|b\|^2}$$
defines a probability measure on $(D,\mathcal A)$.

(c) *Signed difference.* Let $a,b$ be unit vectors with
$\operatorname{Re}\langle a,b\rangle\ne-1$, and put
$$N(B):=\int_B\bigl(|a|^2+|b|^2\bigr)dx,\qquad c(B):=\operatorname{Re}\int_Ba\overline b\,dx,\qquad p_{\mathrm{coh}}(B):=\frac{N(B)+2c(B)}{2+2c(D)},\qquad p_{\mathrm{mix}}(B):=\frac{N(B)}2 .$$
Then for every $B$, $N(B)-2c(B)=\int_B|a-b|^2dx\ge0$, and
$$p_{\mathrm{coh}}(B)-p_{\mathrm{mix}}(B) =\frac{2c(B)-c(D)N(B)}{2\bigl(1+c(D)\bigr)} .$$
In particular, if $a\perp b$ then $p_{\mathrm{coh}}=p_{\mathrm{mix}}$ on
every bin, and if $b=a$ then also $p_{\mathrm{coh}}=p_{\mathrm{mix}}$ on every
bin: coherence of the preparation does not by itself change the bin law
beyond what the amplitudes determine.

(d) *Marker overlap.* Let $K$ be a complex Hilbert space
([[def-hilbert-space]]) with unit vectors $e_1,e_2$, let $\alpha,\beta\in\mathbb C$
with $|\alpha|^2+|\beta|^2=1$, let $a,b$ be unit vectors and put
$\Psi:=\alpha\,a\otimes e_1+\beta\,b\otimes e_2$ in the completed tensor
product $L^2(D)\widehat\otimes K$. If $B\in\mathcal A$ has finite measure and
$P_B$ is multiplication by $\mathbf 1_B$, then the normalized bin law of the
reduced weight $\rho=\operatorname{Tr}_KT_{\Psi,\Psi}$ is
$$\frac{\operatorname{tr}(\rho P_B)}{\operatorname{tr}\rho} =\frac{1}{\|\Psi\|^2}\int_B\Bigl(|\alpha|^2|a|^2+|\beta|^2|b|^2 +2\operatorname{Re}\bigl(\alpha\overline\beta\,\langle e_1,e_2\rangle\, a(x)\overline{b(x)}\bigr)\Bigr)dx,$$
and $|\langle e_1,e_2\rangle|\le1$: the marker overlap contracts the cross
term, which vanishes identically when $e_1\perp e_2$, leaving the incoherent
weight.

(e) *Finite sampling.* If a detector model produces, for a fixed bin $B$,
$N$ independent trials each with success probability $p=p_{\mathrm{coh}}(B)$
or $p=p_{\mathrm{mix}}(B)$, and $S_N$ is the number of successes, then $S_N$
is binomial$(N,p)$ and $\mathbb E[S_N/N]=p$,
$\operatorname{Var}(S_N/N)=p(1-p)/N$
([[lem-nrqm-composites-chsh-and-finite-sampling-law]], clause (c)).

All assertions are identities and inequalities for the specified
preparation vectors; no detector law, no measured counting rate and no
empirical claim is asserted, and (e) is conditional on the stated
independent-trials model.

## Facts & Assumptions

**Given:** a $\sigma$-finite measure space $(D,\mathcal A,dx)$, classes $a,b\in L^2(D)$; in (d) a Hilbert space $K$ with unit vectors $e_1,e_2$ and coefficients $\alpha,\beta$.

[F1] For measurable $B$ the set function $B\mapsto\int_Bg\,dx$ is countably additive for $g\in L^1$: for pairwise disjoint $B_n$ with union $B$, the partial sums of $\int|g|\mathbf 1_{B_n}$ increase to $\int|g|\mathbf 1_B\le\int|g|$, and monotone convergence applied to the positive and negative parts gives $\int_Bg=\sum_n\int_{B_n}g$ ([[thm-monotone-convergence-for-the-integral]]).

[F2] For $a,b\in L^2(D)$ and measurable $B$, $\int_B|a+b|^2=\int_B|a|^2+\int_B|b|^2+2\operatorname{Re}\int_Ba\overline b$, and $|\int_Ba\overline b|\le\|a\|_{L^2(B)}\|b\|_{L^2(B)}\le\|a\|\,\|b\|$ ([[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]], [[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]).

[F3] Marker overlap contraction of [[lem-nrqm-composites-marker-overlap-contraction]]: with $\Psi=\alpha a\otimes e_1+\beta b\otimes e_2$, $\rho=\operatorname{Tr}_KT_{\Psi,\Psi}$ is a positive trace-class weight with $\operatorname{tr}\rho=\|\Psi\|^2$ and, for every measurable $B$ of finite measure, $\operatorname{tr}(\rho P_B)=\int_B\bigl(|\alpha|^2|a|^2+|\beta|^2|b|^2+2\operatorname{Re}(\alpha\overline\beta\langle e_1,e_2\rangle a\overline b)\bigr)dx$; also $|\langle e_1,e_2\rangle|\le1$.

[F4] Binomial frequencies: if $S_N$ is binomial$(N,p)$ with $N\ge1$, $p\in[0,1]$, then $\mathbb E[S_N/N]=p$ and $\operatorname{Var}(S_N/N)=p(1-p)/N$ ([[lem-nrqm-composites-chsh-and-finite-sampling-law]], clause (c)).

## Proof

1.1 [Coherent law] Assume $\|a+b\|>0$; then $\|a+b\|^2=\int_D|a+b|^2>0$ is finite, and $p_{\mathrm{coh}}(D)=1$. The set function $B\mapsto\int_B|a+b|^2$ is countably additive by [F1] applied to $g=|a+b|^2\in L^1$, and nonnegative; dividing by the finite positive number $\|a+b\|^2$ preserves countable additivity and total mass one, so $p_{\mathrm{coh}}$ is a probability measure. The expansion is the pointwise identity $|a+b|^2=|a|^2+|b|^2+2\operatorname{Re}(a\overline b)$ integrated over $B$, legitimate for $L^1$ classes. This is (a). [given, F1, F2, algebra]

1.2 [Incoherent law] If $a\ne0$ and $b\ne0$, the two normalized set functions $B\mapsto\|a\|^{-2}\int_B|a|^2$ and $B\mapsto\|b\|^{-2}\int_B|b|^2$ are probability measures by [F1] applied to $|a|^2$ and $|b|^2$, so any convex combination with $w\in[0,1]$ is a probability measure. This is (b). [given, F1, algebra]

1.3 [Signed difference] Let $a,b$ be unit vectors; then $N(D)=2$ and, since $\|a-b\|^2=2-2\operatorname{Re}\langle a,b\rangle=2+2(-c(D))$, the hypothesis $\operatorname{Re}\langle a,b\rangle\ne-1$ ensures $2+2c(D)\ne0$. Expanding, $p_{\mathrm{coh}}(B)-p_{\mathrm{mix}}(B)=\frac{N(B)+2c(B)}{2+2c(D)}-\frac{N(B)}2=\frac{2N(B)+4c(B)-2N(B)-2c(D)N(B)}{4(1+c(D))}=\frac{2c(B)-c(D)N(B)}{2(1+c(D))}$, and $N(B)-2c(B)=\int_B(|a|^2+|b|^2-2\operatorname{Re}a\overline b)=\int_B|a-b|^2\ge0$. If $a\perp b$ then $c\equiv0$, so the difference vanishes. If $b=a$ (unit), then $N(B)=2\int_B|a|^2$ and $c(B)=\int_B|a|^2$, so $2c(B)-c(D)N(B)=2\int_B|a|^2-2\int_B|a|^2=0$; the difference vanishes for every $B$. This is (c). [given, F2, algebra]

1.4 [Marker law] Under the hypotheses of (d), $\operatorname{tr}\rho=\|\Psi\|^2$ by [F3]; if $\Psi\ne0$ the normalized law is $\operatorname{tr}(\rho P_B)/\operatorname{tr}\rho$, and substituting [F3]'s formula gives the displayed identity. The contraction $|\langle e_1,e_2\rangle|\le1$ is [F3]; if $e_1\perp e_2$ the cross term $2\operatorname{Re}(\alpha\overline\beta\langle e_1,e_2\rangle a\overline b)$ vanishes pointwise, leaving the incoherent weight $|\alpha|^2|a|^2+|\beta|^2|b|^2$. This is (d). [given, F3, algebra]

2.1 [Finite sampling] Under the stated independent-trials model, the number of successes $S_N$ is by definition binomial$(N,p)$, and the mean and variance of $S_N/N$ are those of [F4]. This is (e), and it is conditional on that model. [given, F4, algebra] ∎
