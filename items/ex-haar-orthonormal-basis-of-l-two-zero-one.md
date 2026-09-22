---
id: ex-haar-orthonormal-basis-of-l-two-zero-one
kind: example
title: The Haar orthonormal basis of $L^2((0,1))$
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [lem-continuous-periodic-functions-are-dense-in-l-p-of-finite-tori, lem-l-two-with-the-integral-pairing-is-a-hilbert-space, thm-heine-cantor-metric, thm-heine-borel-r, def-countable-choice, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, lem-pythagorean-theorem-and-finite-orthogonal-sums, thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral, thm-continuous-implies-integrable, def-real-and-complex-inner-product-space, def-integral-of-a-nonnegative-simple-function, prop-the-nonnegative-integral-agrees-with-the-simple-integral, thm-linearity-of-the-lebesgue-integral-on-l-one, thm-lebesgue-measure-of-a-box-of-every-kind]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Vladimir Dobrushkin, Eigenfunction Expansion, APMA0360 course tutorial — Example 5, dyadic functions and span discussion"
      url: "https://www.cfm.brown.edu/people/dobrush/am36/Mathematica/ch2/expand.html"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §2.1, p.50"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
verification:
  audited: 2026-09-22
---

## Example

Assume the Axiom of Countable Choice ([[def-countable-choice]]). For integers
$j\ge0$ and $0\le k<2^j$ let $I_{j,k}:=[k2^{-j},(k+1)2^{-j})$ be the dyadic
interval of level $j$, split at its midpoint $m_{j,k}:=(2k+1)2^{-j-1}$, and let
$h_{j,k}:=2^{j/2}\bigl(\mathbf 1_{[k2^{-j},\,m_{j,k})}-\mathbf 1_{[m_{j,k},\,(k+1)2^{-j})}\bigr)$.
Then the family consisting of the constant function $1$ and of all $h_{j,k}$
with $j\ge0$, $0\le k<2^j$, is an orthonormal basis of $L^2((0,1))$ for
Lebesgue measure, in the real and in the complex case
([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]],
[[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]).

## Facts & Assumptions

[A1] The dyadic intervals of level $j$ partition $[0,1)$ into $2^j$ half-open intervals of length $2^{-j}$.

[A2] Indicators of measurable sets of finite measure have integral equal to their measure; finite linear combinations have the corresponding linear combination of integrals ([[def-integral-of-a-nonnegative-simple-function]], [[prop-the-nonnegative-integral-agrees-with-the-simple-integral]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]]). The interval $[a,b)$ has Lebesgue measure $b-a$, and singleton endpoints have measure zero, so restricting these indicators to $(0,1)$ does not alter the calculations below ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[A3] The Hilbert space $L^2((0,1))$ has pairing $\int fg$ in the real case and $\int f\overline g$ in the complex case, and orthogonality of a family means the vanishing of these pairings on distinct indices ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]], [[def-real-and-complex-inner-product-space]]).

[A4] A continuous function on the compact metric space $[0,1]$ is uniformly continuous ([[thm-heine-cantor-metric]], [[thm-heine-borel-r]]), and the restrictions to $(0,1)$ of continuous functions on $[0,1]$ are dense in $L^2((0,1))$ ([[lem-continuous-periodic-functions-are-dense-in-l-p-of-finite-tori]]).

## Verification

**Proof technique:** direct.

**Given:** The family $\{1\}\cup\{h_{j,k}: j\ge0,\ 0\le k<2^j\}$ in $L^2((0,1))$.

1.1 Orthonormality and $\int_0^1h_{j,k}=0$: each $h_{j,k}$ takes the two values $\pm2^{j/2}$ on two intervals of equal length $2^{-j-1}$, so its integral over $\mathbb R$ is $2^{j/2}(2^{-j-1}-2^{-j-1})=0$ and $\|h_{j,k}\|_2^2=2^j\cdot 2\cdot2^{-j-1}=1$. Two distinct such functions either have disjoint supports, giving pairing $0$, or have nested supports $I_{j',k'}\subseteq I_{j,k}$ with $j'>j$, and the finer interval lies wholly in one half of the coarser interval, so the coarser function is constant there. Then the pairing is $\pm2^{j/2}\int h_{j',k'}=0$ because the integral of the finer function vanishes; and $\langle 1,h_{j,k}\rangle=\int h_{j,k}=0$, while $\|1\|_2^2=1$. [A1, A2, A3]

1.2 Every continuous $f:[0,1]\to\mathbb C$ is uniformly approximated on $[0,1)$ by functions constant on the level-$J$ dyadic intervals: by uniform continuity choose $\delta>0$ with $|f(x)-f(y)|<\varepsilon$ whenever $|x-y|<\delta$, choose $J$ with $2^{-J}<\delta$, and let $s_J$ be the function that on each level-$J$ interval takes the value of $f$ at its left endpoint; then $\sup_{x\in[0,1)}|f(x)-s_J(x)|\le\varepsilon$ and hence $\|f-s_J\|_{L^2((0,1))}\le\varepsilon$. [A2, A3, A4]

2.1 For every $J\ge0$ the linear span of $\{1\}\cup\{h_{j,k}: j<J\}$ is exactly the space $V_J$ of functions constant on each level-$J$ dyadic interval: the two functions $1_{[a,m)}$ and $1_{[m,b)}$ of a level-$(j+1)$ interval inside a level-$j$ interval are $\bigl(1_{[a,b)}\pm2^{-j/2}h_{j,k}\bigr)/2$, so by induction every level-$J$ dyadic indicator lies in the span, and conversely every $h_{j,k}$ with $j<J$ is a linear combination of level-$J$ indicators; hence the span is contained in $V_J$ and contains all its indicators. [step 1.1, A1, A2, algebra]

3.1 Therefore the closed linear span of the family is $L^2((0,1))$: it contains $V_J$ for every $J$ by step 2.1, hence by step 1.2 it contains the restrictions of $C([0,1])$, and their $L^2((0,1))$-closure is $L^2((0,1))$. [step 1.2, step 2.1, A4]

4.1 Since the family is orthonormal by step 1.1 and its closed linear span is all of $L^2((0,1))$ by step 3.1, it is an orthonormal basis of $L^2((0,1))$ in both the real and the complex case. [step 1.1, step 3.1] ∎
