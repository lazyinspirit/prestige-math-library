---
id: cor-c-one-change-of-variables-for-l-one-functions
kind: corollary
title: "A C^1 diffeomorphism satisfies the change-of-variables formula for L^1 functions"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-countable-choice, cor-change-of-variables-for-compactly-supported-functions, thm-continuous-on-a-rectangle-is-riemann-integrable, thm-multidimensional-darboux-equals-riemann, thm-lebesgue-measure-of-a-box-of-every-kind, prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null, thm-dynkin-pi-lambda, thm-rational-box-generators-of-the-borel-sigma-algebra-on-rn, thm-indefinite-integral-of-a-nonnegative-function-is-a-measure, cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure, thm-nonnegative-integral-zero-iff-zero-almost-everywhere, cor-integral-over-a-null-set-vanishes, thm-monotone-convergence-for-the-integral, cor-additivity-of-the-nonnegative-lebesgue-integral, def-integrable-real-and-complex-functions-and-their-integrals, thm-linearity-of-the-lebesgue-integral-on-l-one]
proof_strategy: direct
verification:
  verified:
    model: gpt-6-astra
    verdict: pass
    date: 2026-09-09
    scope: owner-authorized local defect repair; no independent judge
    delegated_by: owner
  precheck: pass
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Theorem 2.47"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Statement

Assume the Axiom of Countable Choice. Let $U,V \subseteq \mathbb R^n$ be open and let $T : U \to V$ be a
$C^1$ diffeomorphism. If $f : V \to \mathbb C$ belongs to $L^1(\lambda_n)$,
then
$$ \int_V f(y)\,d\lambda_n(y) = \int_U f(T(x))\,|\det DT(x)|\,d\lambda_n(x). $$

## Facts & Assumptions

**Given:** Countable choice, open sets $U,V \subseteq \mathbb R^n$, a $C^1$ diffeomorphism $T : U \to V$, and a function $f \in L^1(\lambda_n)$.

[L1] Compact-support Riemann substitution holds. Continuous functions on boxes are Riemann integrable, equivalently their Darboux sums converge. Box Lebesgue measure equals volume and coordinate faces are null under countable choice. ([[cor-change-of-variables-for-compactly-supported-functions]], [[thm-continuous-on-a-rectangle-is-riemann-integrable]], [[thm-multidimensional-darboux-equals-riemann]], [[thm-lebesgue-measure-of-a-box-of-every-kind]], [[prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null]])

[L5] Rational boxes generate Euclidean Borel sets; Dynkin's theorem extends equality of finite measures from a generating pi-system. A nonnegative density defines a measure. ([[thm-rational-box-generators-of-the-borel-sigma-algebra-on-rn]], [[thm-dynkin-pi-lambda]], [[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]])

[L2] Lebesgue measurable sets differ from Borel sets only inside Borel null sets, under countable choice. ([[cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure]], [[def-countable-choice]])

[L3] A nonnegative measurable function has zero integral exactly when it vanishes almost everywhere; integrals on measurable null sets vanish. ([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]], [[cor-integral-over-a-null-set-vanishes]])

[L4] Nonnegative integrals are additive and obey monotone convergence; complex integrals are linear on $L^1$. ([[cor-additivity-of-the-nonnegative-lebesgue-integral]], [[thm-monotone-convergence-for-the-integral]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]], [[def-integrable-real-and-complex-functions-and-their-integrals]])

## Proof

**Proof technique:** direct.

1.1 First identify continuous compact-support Riemann and Lebesgue integrals locally. Extend a continuous compactly supported function on an open set by zero; this is continuous because its support is compact inside that open set. On a bounding closed box it is bounded and Riemann integrable by [L1]. Its lower and upper grid step functions, disjointifying cells along null coordinate faces, have Lebesgue integrals equal to the lower and upper Darboux sums. Their difference tends to zero. After adding a fixed constant to make all functions nonnegative, monotonicity squeezes the Lebesgue integral to the Riemann integral; subtract the constant using finite integrability. Apply this to $k\in C_c(V)$ and $(k\circ T)|\det DT|$, whose support is contained in the compact preimage of $\operatorname{supp}k$. Riemann substitution [L1] therefore proves the Lebesgue substitution formula for $k$. [L1, L4, given]

2.1 For Borel $E\subseteq V$, let $\alpha(E)=\lambda_n(E)$ and $\beta(E)=\int_{T^{-1}(E)}J\,dx$, with $J=|\det DT|$. These are Borel measures by [L5]. For an open rational box $R$ with compact closure in $V$, the continuous functions $k_j(y)=\min(1,j\operatorname{dist}(y,\mathbb R^n\setminus R))$ have support in $\overline R$ and increase to $1_R$. Step 1.1 and monotone convergence give $\alpha(R)=\beta(R)<\infty$. List all such boxes as $(R_j)$ and set $W_j=\bigcup_{i\le j}R_i$. They exhaust $V$; finite inclusion-exclusion, whose terms are finite and are boxes or empty, gives agreement on $W_j$ and $W_j\cap R$ for every such box $R$. Thus the finite measures $E\mapsto\alpha(E\cap W_j)$ and $E\mapsto\beta(E\cap W_j)$ agree on the pi-system of these boxes, the empty set and $V$. This pi-system generates the Borel sets because the boxes form a countable basis of $V$. The equality class is a lambda-system: equal finite total masses allow complements and countable additivity allows disjoint unions. Apply [L5], then take $j\to\infty$, to obtain $\alpha=\beta$ on all Borel sets. If $V$ is empty there is nothing to prove. [L4, L5, step 1.1, construct]

3.1 The Borel set equality of step 2.1 gives substitution for nonnegative Borel simple functions by finite sums. Explicit increasing dyadic simple approximations and [L4] extend it to all nonnegative Borel functions. This establishes the Borel formula locally without a later-page supplier. [L4, step 2.1]

4.1 Put $J=|\det DT|$, continuous and strictly positive since $T$ is a diffeomorphism. If $Z\subseteq V$ is Borel null, step 3.1 gives $\int_U1_Z(T(x))J(x)\,dx=0$. By [L3] and positivity of $J$, the Borel set $T^{-1}(Z)$ is null. Countable choice is used in the Borel construction and the completion interface [L2], not in the finite real/imaginary decomposition below. [L1, L2, L3, given]

5.1 For Lebesgue measurable $E\subseteq V$, write $E=A\cup N$ with $A$ Borel and $N\subseteq Z$ for Borel null $Z$, intersecting all sets with $V$. Then $T^{-1}(E)$ is a Borel set modified inside the Borel null set $T^{-1}(Z)$, hence measurable by [L2]. The indicator functions of $E,A$ and their pullbacks agree off the respective null sets, so [L3] and step 3.1 give $\lambda_n(E)=\int_U1_E(T(x))J(x)\,dx$. [L1, L2, L3, step 4.1]

6.1 Finite nonnegative sums give substitution for nonnegative simple Lebesgue measurable functions. For any nonnegative measurable $h$, the explicit simple functions $s_k=2^{-k}\lfloor2^k\min(h,k)\rfloor$ increase to $h$. Step 5.1 ensures measurability of their pullbacks, hence of $h\circ T$. By [L4], passing to the increasing limits proves $\int_Vh=\int_U(h\circ T)J$. [L4, step 5.1, construct]

7.1 Apply step 6.1 first to $|f|$. It gives $\int_U|f\circ T|J=\int_V|f|<\infty$, so the transformed complex function is integrable. Write $f=u-v+i(p-q)$ using the nonnegative positive and negative parts of its real and imaginary parts; each is bounded by $|f|$. Apply step 6.1 to these four functions and recombine their finite integrals by [L4]. This proves the stated identity. [L4, step 6.1, algebra] ∎
