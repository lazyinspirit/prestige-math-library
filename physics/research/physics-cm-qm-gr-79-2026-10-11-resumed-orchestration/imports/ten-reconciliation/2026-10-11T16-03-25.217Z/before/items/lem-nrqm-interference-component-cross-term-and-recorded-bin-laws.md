---
id: lem-nrqm-interference-component-cross-term-and-recorded-bin-laws
aliases: [nrqm-interference-component-cross-term-and-recorded-bin-laws]
kind: lemma
domain: mathematics
title: "Component amplitudes, coherent and incoherent bin laws, and recorded detector weights"
status: draft
origin: session
dependency_level: 0
deps: [def-l-p-space-as-a-quotient-by-null-functions, def-complex-lp-and-euclidean-test-function-conventions, cor-cauchy-schwarz-inequality-for-l-two, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces, lem-l-two-with-the-integral-pairing-is-a-hilbert-space, thm-monotone-convergence-for-the-integral, thm-indefinite-integral-of-a-nonnegative-function-is-a-measure, prop-order-and-scalar-rules-for-the-nonnegative-integral, def-measure, def-probability-measure, def-countable-choice]
dependency_roles:
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-complex-lp-and-euclidean-test-function-conventions: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
  lem-l-two-with-the-integral-pairing-is-a-hilbert-space: mathematical-premise
  thm-monotone-convergence-for-the-integral: mathematical-premise
  thm-indefinite-integral-of-a-nonnegative-function-is-a-measure: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  def-measure: mathematical-premise
  def-probability-measure: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 1.2 printed pages 5-6 and Section 1.4 printed page 15 (PDF page 23): composite amplitudes, the superposition of two paths and the cross term of the interference law"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 2.1 printed pages 55-58 (PDF pages 67-70): the L2 space and its pairing; Section 3.1 printed pages 87-98 (PDF pages 99-110): the spectral theorem and scalar measures from projection-valued measures; PDF page = printed page + 12"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]), the choice
hypothesis of the cited Hilbert-space and measure suppliers. Let
$(D,\mathcal A,dx)$ be a $\sigma$-finite measure space ([[def-measure]]), let
$r\ge1$ be an integer, and let
$$L^{2}(D;\mathbb C^{r}):=\Bigl\{f:D\to\mathbb C^{r}\ \text{measurable}:\ \int_{D}\|f(x)\|_{\mathbb C^{r}}^{2}\,dx<\infty\Bigr\}\Big/\!\sim,$$
the quotient by equality $dx$-almost everywhere
([[def-l-p-space-as-a-quotient-by-null-functions]],
[[def-complex-lp-and-euclidean-test-function-conventions]]), with
$$\langle f,g\rangle:=\int_{D}\langle f(x),g(x)\rangle_{\mathbb C^{r}}\,dx,\qquad \|f\|^{2}:=\langle f,f\rangle=\int_{D}\|f(x)\|_{\mathbb C^{r}}^{2}\,dx,$$
linear in the first argument ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]).
For $a,b\in L^{2}(D;\mathbb C^{r})$ and measurable $B\subseteq D$ write
$$\langle a,b\rangle_{B}:=\int_{B}\langle a(x),b(x)\rangle_{\mathbb C^{r}}\,dx,\qquad N:=\|a\|^{2}+\|b\|^{2},\qquad c:=\operatorname{Re}\langle a,b\rangle_{D}.$$
Then:

(a) *Pointwise and integrated cross term.* For $dx$-almost every $x\in D$,
$$\|a(x)+b(x)\|_{\mathbb C^{r}}^{2}=\|a(x)\|_{\mathbb C^{r}}^{2}+\|b(x)\|_{\mathbb C^{r}}^{2}+2\operatorname{Re}\langle a(x),b(x)\rangle_{\mathbb C^{r}},$$
and for every measurable $B\subseteq D$, the three functions $\|a\|^{2}$,
$\|b\|^{2}$, $\langle a,b\rangle_{\mathbb C^{r}}$ being $dx$-integrable on $B$,
$$\int_{B}\|a+b\|^{2}\,dx=\int_{B}\|a\|^{2}\,dx+\int_{B}\|b\|^{2}\,dx+2\operatorname{Re}\langle a,b\rangle_{B}.$$

(b) *Coherent bin law.* If $\|a+b\|>0$, then
$$p_{\mathrm{coh}}(B):=\frac{\displaystyle\int_{B}\|a+b\|^{2}\,dx}{\|a+b\|^{2}}\qquad(B\in\mathcal A)$$
defines a probability measure on $(D,\mathcal A)$
([[def-probability-measure]]), and for every $B\in\mathcal A$ the expansion of
(a) holds with $\|a+b\|^{2}=N+2c$ in the denominator.

(c) *Incoherent bin law.* If $\|a\|>0$, $\|b\|>0$ and $w\in[0,1]$, then
$$p_{\mathrm{mix}}(B):=w\,\frac{\displaystyle\int_{B}\|a\|^{2}\,dx}{\|a\|^{2}}+(1-w)\,\frac{\displaystyle\int_{B}\|b\|^{2}\,dx}{\|b\|^{2}}\qquad(B\in\mathcal A)$$
defines a probability measure on $(D,\mathcal A)$.

(d) *Recorded weights, sub-probability and conditioning.* Let $\mu$ be a
probability measure on $(D,\mathcal A)$ and let $W:D\to[0,1]$ be measurable.
Then $B\mapsto\nu(B):=\int_{B}W\,d\mu$ is a finite measure on $(D,\mathcal A)$
with $0\le\nu(D)\le1$; if $\nu(D)>0$, then
$\bar\nu(B):=\nu(B)/\nu(D)$ defines a probability measure on $(D,\mathcal A)$.
More generally, for finitely many measurable weights $W_{1},\dots,W_{m}:D\to[0,1]$
with $\sum_{a=1}^{m}W_{a}\le1$ pointwise, the numbers
$\nu_{a}:=\int_{D}W_{a}\,d\mu$ satisfy $\nu_{a}\ge0$ and
$\sum_{a=1}^{m}\nu_{a}\le1$; if $\sum_{a=1}^{m}W_{a}=1$ pointwise, then
$\sum_{a=1}^{m}\nu_{a}=1$.

(e) *Coincidence criterion.* Let $\|a\|>0$, $\|b\|>0$ and put
$w_{*}:=\|a\|^{2}/N$, so that $p_{\mathrm{mix}}$ with weight $w_{*}$ is
$p_{*}(B)=N^{-1}\int_{B}\bigl(\|a\|^{2}+\|b\|^{2}\bigr)dx$. Then
$p_{\mathrm{coh}}(B)=p_{*}(B)$ for every $B\in\mathcal A$ if and only if
$$N\operatorname{Re}\langle a(x),b(x)\rangle_{\mathbb C^{r}}=c\,\bigl(\|a(x)\|_{\mathbb C^{r}}^{2}+\|b(x)\|_{\mathbb C^{r}}^{2}\bigr)\qquad\text{for }dx\text{-almost every }x\in D .$$
In particular, if $\langle a(x),b(x)\rangle_{\mathbb C^{r}}=0$ for almost every
$x$, then the two laws coincide; and if $c=0$, then they coincide if and only
if $\operatorname{Re}\langle a(x),b(x)\rangle_{\mathbb C^{r}}=0$ for almost
every $x$.

The assertions concern the specified classes and weights only; no probability
law of an apparatus, no sample of trials and no empirical claim is asserted.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice; a $\sigma$-finite measure space $(D,\mathcal A,dx)$; an integer $r\ge1$; classes $a,b\in L^{2}(D;\mathbb C^{r})$; a probability measure $\mu$ on $(D,\mathcal A)$; measurable weights $W,W_{1},\dots,W_{m}:D\to[0,1]$; reals $w\in[0,1]$.

[F1] **Componentwise $L^{2}$ and its pairing.** For $f=(f_{1},\dots,f_{r})$ with components in the scalar space $L^{2}(D;\mathbb C)$ of [[def-l-p-space-as-a-quotient-by-null-functions]] and [[def-complex-lp-and-euclidean-test-function-conventions]], the integral $\langle f,g\rangle=\sum_{l=1}^{r}\int_{D}f_{l}\overline{g_{l}}\,dx$ is finite and defines an inner product, linear in the first argument, with $\|f\|^{2}=\sum_{l}\|f_{l}\|^{2}$; for every measurable $B$ the partial pairing satisfies $|\langle f,g\rangle_{B}|\le\|f\|_{L^{2}(B)}\|g\|_{L^{2}(B)}\le\|f\|\,\|g\|$ ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]], [[cor-cauchy-schwarz-inequality-for-l-two]], [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]). Two choices of representatives of $f,g$ change $x\mapsto\langle f(x),g(x)\rangle_{\mathbb C^{r}}$ and $x\mapsto\|f(x)+g(x)\|^{2}$ only on a $dx$-null set, so the pointwise assertions are well posed almost everywhere.

[F2] **Indefinite integrals are measures.** For nonnegative measurable $h$ the set function $B\mapsto\int_{B}h\,dx$ is a measure on $(D,\mathcal A)$ ([[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]]); for $g\in L^{1}(dx)$ the real and imaginary parts of $B\mapsto\int_{B}g\,dx$ are countably additive by monotone convergence ([[thm-monotone-convergence-for-the-integral]]).

[F3] **Monotonicity of the integral.** If $0\le h\le H$ are measurable, then $\int_{D}h\,dx\le\int_{D}H\,dx$ ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[F4] **Probability measures and normalization.** A probability measure is a measure on $(D,\mathcal A)$ with total mass $1$ ([[def-probability-measure]], [[def-measure]]). A finite measure $\nu\ge0$ with $0<\nu(D)<\infty$ is normalized to a probability measure by $\bar\nu(B)=\nu(B)/\nu(D)$, because countable additivity divided by the constant $\nu(D)$ stays countably additive and $\bar\nu(D)=1$.

## Proof

**Proof technique:** direct; expand the squared component norm pointwise, then read off in turn the two normalized laws and the weight bounds, integrate the cross term, normalize it, and compute the coincidence condition from the two displayed formulas.

**Given:** The data of the statement and [F1]-[F4].

1.1 [Pointwise identity] Fix representatives of $a,b$. For every $x\in D$ the identity $\|a(x)+b(x)\|_{\mathbb C^{r}}^{2}=\|a(x)\|_{\mathbb C^{r}}^{2}+\|b(x)\|_{\mathbb C^{r}}^{2}+2\operatorname{Re}\langle a(x),b(x)\rangle_{\mathbb C^{r}}$ holds by the expansion of the finite-dimensional inner product; by [F1] the three real functions $x\mapsto\|a(x)\|^{2}$, $\|b(x)\|^{2}$ and $\operatorname{Re}\langle a(x),b(x)\rangle$ are measurable, and the last is integrable because $|\operatorname{Re}\langle a(x),b(x)\rangle|\le\|a(x)\|\,\|b(x)\|$ with $\|a\|\,\|b\|\in L^{1}(dx)$; representatives differing on null sets change the identity only on a null set. This proves the pointwise assertion of (a). [given, F1, algebra]

1.2 [Incoherent law] Assume $\|a\|,\|b\|>0$. By [F2] each of $B\mapsto\int_{B}\|a\|^{2}dx$ and $B\mapsto\int_{B}\|b\|^{2}dx$ is a finite measure with positive total masses $\|a\|^{2}$ and $\|b\|^{2}$; by [F4] each normalized set function is a probability measure, and a convex combination with $w\in[0,1]$ of two probability measures is again a probability measure, because countable additivity is preserved and $w\cdot1+(1-w)\cdot1=1$. This is (c). [F2, F4, algebra]

1.3 [Recorded weights] Applying [F3] with $h=W$ and $H=1$ gives $\nu(D)=\int_{D}W\,d\mu\le\int_{D}1\,d\mu=1$ and $\nu(B)\ge0$ for every $B$ because $W\ge0$; countable additivity of $\nu$ follows from [F2] applied to the measure $\mu$. If $\nu(D)>0$, [F4] makes $\bar\nu$ a probability measure. For the finite family, $\nu_{a}=\int_{D}W_{a}d\mu\ge0$ and $\sum_{a}\nu_{a}=\int_{D}\sum_{a}W_{a}\,d\mu\le\int_{D}1\,d\mu=1$ by finite additivity and [F3]; if $\sum_{a}W_{a}=1$ pointwise, the middle integral equals $\mu(D)=1$. This is (d). [F2, F3, F4, algebra]

2.1 [Integrated identity] Let $B\in\mathcal A$. Integrating the identity of step 1.1 over $B$ is legitimate because all three terms are integrable on $B$ by step 1.1 and [F1]; the integral of the left side is $\int_{B}\|a+b\|^{2}dx$ and the integral of the right side is $\int_{B}\|a\|^{2}dx+\int_{B}\|b\|^{2}dx+2\operatorname{Re}\langle a,b\rangle_{B}$, which is the displayed identity of (a). [step 1.1, F1, algebra]

3.1 [Coherent law] Assume $\|a+b\|>0$. The set function $B\mapsto\int_{B}\|a+b\|^{2}dx$ is a finite measure with total mass $\|a+b\|^{2}$ by [F2], and $\|a+b\|^{2}\in(0,\infty)$; dividing by this constant gives a finite measure of total mass one, hence a probability measure by [F4], whose value at $B$ is $p_{\mathrm{coh}}(B)$ with denominator $N+2c$ by step 2.1 applied to $B=D$. This is (b). [step 2.1, F2, F3, F4, algebra]

4.1 [Coincidence criterion] By steps 2.1 and 1.2 with $w=w_{*}$, $p_{*}(B)=\frac{1}{N}\int_{B}(\|a\|^{2}+\|b\|^{2})dx$ and $p_{\mathrm{coh}}(B)=\frac{\int_{B}(\|a\|^{2}+\|b\|^{2})dx+2c(B)}{N+2c}$ with $c(B):=\operatorname{Re}\langle a,b\rangle_{B}$; since $N>0$ and $N+2c=\|a+b\|^{2}>0$, the equality $p_{\mathrm{coh}}(B)=p_{*}(B)$ is equivalent to $N c(B)=c\,M(B)$ for the finite measure $M(B):=\int_{B}(\|a\|^{2}+\|b\|^{2})dx$. The signed measure $N c(\cdot)-c\,M(\cdot)$ vanishes on every $B\in\mathcal A$ if and only if its density $N\operatorname{Re}\langle a(x),b(x)\rangle_{\mathbb C^{r}}-c(\|a(x)\|^{2}+\|b(x)\|^{2})$ vanishes $dx$-almost everywhere by [F2], since a nonzero integrable density has a level set of strictly positive or strictly negative integral. This is the displayed criterion; if $\langle a(x),b(x)\rangle=0$ a.e., then $c=0$ and $c(B)=0$ for every $B$, so the laws coincide, and if $c=0$ the criterion reduces to $\operatorname{Re}\langle a(x),b(x)\rangle=0$ a.e. This proves (e), and steps 1.1, 1.2, 1.3, 2.1, 3.1 prove the remaining clauses. [step 1.2, step 1.3, step 2.1, step 3.1, F1, F2, algebra] ∎

## Remarks

- **Convention.** The pairing is linear in the first argument, as fixed by the cited $L^{2}$ items, so the cross term of a sum $a+b$ is $2\operatorname{Re}\langle a,b\rangle$ and not $2\operatorname{Re}\langle b,a\rangle$; the two agree because the real part is symmetric.
- **What is not asserted.** The lemma is an identity and inequality package for classes and weights; it produces no detector law, no state update, no sample of trials and no measured frequency. The coincidence criterion concerns the two declared laws, not the question of which preparation a laboratory realizes.
