---
id: "cor-obstacle-reaction-is-supported-on-the-contact-set-under-measure-regularity"
kind: "corollary"
title: "The obstacle reaction is supported on the contact set under measure regularity"
status: draft
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 11
deps:
  - "thm-extreme-value-metric"
  - "cor-integral-over-a-null-set-vanishes"
  - "cor-obstacle-complementarity-in-distribution-form"
  - "def-axiom-of-choice"
  - "def-closed-convex-obstacle-set-and-variational-inequality"
  - "def-countable-choice"
  - "def-distribution"
  - "def-measure-null-set-and-almost-everywhere"
  - "def-radon-measure-on-an-lch-space"
  - "def-test-function-space-d-of-an-open-set"
  - "def-wkp-zero-as-a-sobolev-closure"
  - "lem-euclidean-balls-have-positive-finite-lebesgue-measure"
  - "lem-test-function-cutoffs-and-euclidean-localization"
  - "prop-measure-monotonicity"
  - "thm-existence-and-uniqueness-for-the-obstacle-problem"
  - "thm-nonnegative-integral-zero-iff-zero-almost-everywhere"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
sources:
  references:
    - title: "John Andersson, The Obstacle Problem, KTH lecture notes, 16 December 2015 (complete 52-page notes)"
      url: "https://www.kth.se/social/files/5671638ef276544fe6bf8bb4/Lectures_Obstacle_Problem.pdf"
      locator: "Chapter 4 Section 4.2, Theorem 4.2 with (58), printed pp. 36-38 (the reaction is a nonnegative measure carried by the contact set); Chapter 5, Lemma 5.3, printed pp. 45-47 (comparison principle)"
---

## Statement

Assume Countable Choice and the Axiom of Choice, in the setting of [[cor-obstacle-complementarity-in-distribution-form]], and suppose additionally that the reaction agrees on $C_c^\infty(\Omega)$ with a nonnegative Radon measure $\mu$ ([[def-radon-measure-on-an-lch-space]]): $\Lambda_u(\varphi)=\int_\Omega\varphi\,d\mu$ for every test function. Assume $u$ and $\psi$ have continuous representatives. Then $\mu(\{u>\psi\})=0$, so $\mu$ is concentrated on the contact set $\{u=\psi\}$, and $\int_\Omega(u-\psi)\,d\mu=0$.

## Facts & Assumptions

**Given:** The obstacle setting of [[cor-obstacle-complementarity-in-distribution-form]]: a bounded $C^1$ domain $\Omega\subseteq\mathbb R^n$ (a bounded interval when $n=1$), a uniformly elliptic divergence-form operator $L$ with symmetric bounded coercive form $a$, $f\in L^2(\Omega)$, $F(\varphi)=\int_\Omega f\varphi$, an obstacle $\psi\in H^1(\Omega)$ with $T\psi\le0$, the admissible set $K=\{v\in H^1_0(\Omega):v\ge\psi\text{ a.e.}\}$ ([[def-wkp-zero-as-a-sobolev-closure]]), the obstacle solution $u\in K$, and the reaction $\Lambda_u(\varphi)=a(u,\varphi)-F(\varphi)$ for real tests, extended complex linearly ([[def-closed-convex-obstacle-set-and-variational-inequality]]). The functions $u$ and $\psi$ are represented by continuous functions on $\Omega$, again written $u$ and $\psi$. A nonnegative Radon measure $\mu$ on the locally compact space $\Omega$ satisfies $\Lambda_u(\varphi)=\int_\Omega\varphi\,d\mu$ for every $\varphi\in C_c^\infty(\Omega)$ ([[def-test-function-space-d-of-an-open-set]]).

[F1] [[def-closed-convex-obstacle-set-and-variational-inequality]], [[thm-existence-and-uniqueness-for-the-obstacle-problem]]: $u\in K$ satisfies $a(u,v-u)\ge F(v-u)$ for every $v\in K$, so in particular $u\ge\psi$ almost everywhere on $\Omega$; and $C_c^\infty(\Omega;\mathbb R)\subseteq H^1_0(\Omega;\mathbb R)$, so a compactly supported smooth function belongs to the zero-boundary test space.

[F2] [[cor-obstacle-complementarity-in-distribution-form]]: $\Lambda_u(\varphi)=a(u,\varphi)-F(\varphi)$ on real tests, extended complex linearly, defines the reaction distribution of the solution $u$ on $C_c^\infty(\Omega)$ ([[def-distribution]]), and the additional product conclusions recorded there require the separate hypothesis that $\Lambda_u$ be represented by an $L^2$ function.

[F3] [[lem-test-function-cutoffs-and-euclidean-localization]]: in ZF, for compact $K_0\subseteq O\subseteq\mathbb R^n$ with $O$ open there is $\chi\in C_c^\infty(O)$ with $0\le\chi\le1$ and $\chi=1$ on a neighborhood of $K_0$.

[F4] [[def-radon-measure-on-an-lch-space]]: $\mu$ is a Borel measure on the locally compact Hausdorff space $\Omega$ with $\mu(K_0)<\infty$ for every compact $K_0$, outer regular on Borel sets and inner regular on open sets: $\mu(O)=\sup\{\mu(K_0):K_0\subseteq O\text{ compact}\}$ for every open $O$.

[F5] [[lem-euclidean-balls-have-positive-finite-lebesgue-measure]]: every Euclidean ball has positive finite Lebesgue measure, so a nonempty open subset of $\mathbb R^n$ is not Lebesgue-null ([[def-measure-null-set-and-almost-everywhere]]).

[F6] [[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]], [[cor-integral-over-a-null-set-vanishes]]: a nonnegative measurable function has integral $0$ if and only if it vanishes almost everywhere, and the integral of a nonnegative measurable function over a null set vanishes.

[F7] [[prop-measure-monotonicity]]: a measure is monotone under inclusion of measurable sets.

[F8] [[thm-extreme-value-metric]]: a continuous real function on a nonempty compact metric space attains its minimum and maximum, so a positive continuous function has a positive minimum there and a continuous test function has finite sup norm.

## Proof

**Proof technique:** direct.

**Given:** The setting above, with the continuous representatives of $u$ and $\psi$, the nonnegative Radon measure $\mu$ representing the reaction on test functions, and the open set $O:=\{u>\psi\}\subseteq\Omega$.

1.1 ($O$ is open and the two-sided test vanishes there) Because $u-\psi$ is continuous, $O$ is open in $\Omega$, hence in $\mathbb R^n$; and for every real $\chi\in C_c^\infty(O;\mathbb R)$ one has $\Lambda_u(\chi)=0$. Indeed, if $\chi=0$ this is trivial, so let $\chi\ne0$, put $S:=\operatorname{supp}\chi\subseteq O$, a nonempty compact set, and let $m:=\min_S(u-\psi)>0$, which is positive because $u-\psi$ is continuous and positive on $S$. For every $0<\varepsilon<m/\|\chi\|_\infty$ define $v_\pm:=u\pm\varepsilon\chi$; then $v_\pm\in H^1_0(\Omega)$ by [F1]. On the set $\{\chi\ne0\}\subseteq S$ one has $v_\pm-\psi\ge(u-\psi)-\varepsilon|\chi|\ge m-\varepsilon\|\chi\|_\infty>0$, while off $\{\chi\ne0\}$ one has $v_\pm=u\ge\psi$ almost everywhere by [F1]; hence $v_\pm\in K$. Testing the variational inequality [F1] at $v_\pm$ gives $a(u,\pm\varepsilon\chi)\ge F(\pm\varepsilon\chi)$, that is $\pm\varepsilon\Lambda_u(\chi)\ge0$, so $\Lambda_u(\chi)=0$. For a complex test $\chi=\chi_1+i\chi_2$ on $O$, apply this argument to its real and imaginary parts; complex linearity [F2] gives $\Lambda_u(\chi)=0$ as well. [given, F1, F2, F8]

2.1 (Compact subsets of the noncontact set are $\mu$-null) Let $K_0\subseteq O$ be compact. By [F3] there is $\chi\in C_c^\infty(O)$ with $0\le\chi\le1$ and $\chi=1$ on a neighborhood $U$ of $K_0$; then $K_0\subseteq U\subseteq\{\chi=1\}\subseteq\{\chi\ne0\}$. Step 1.1 and the measure representation give $\int_\Omega\chi\,d\mu=\Lambda_u(\chi)=0$, and $\chi\ge0$ is continuous, hence $\mu$-measurable; by [F6] $\chi=0$ $\mu$-almost everywhere, that is $\mu(\{\chi\ne0\})=0$. Monotonicity [F7] applied to $K_0\subseteq\{\chi\ne0\}$ gives $\mu(K_0)=0$. [given, step 1.1, F3, F6, F7]

3.1 ($\mu(O)=0$ by inner regularity) By [F4] inner regularity on the open set $O$ gives $\mu(O)=\sup\{\mu(K_0):K_0\subseteq O\text{ compact}\}$, and every term of this supremum is $0$ by step 2.1, so $\mu(O)=0$; this includes the case $O=\varnothing$, where the only compact subset is the empty set, whose measure is $0$. [step 2.1, F4]

4.1 (The complementary open set is empty) The set $\{u<\psi\}$ is open in $\Omega$ and has Lebesgue measure zero, because $u\ge\psi$ almost everywhere by [F1]; were it nonempty it would contain a Euclidean ball of positive measure by [F5]. Hence $\{u<\psi\}=\varnothing$ and therefore $\Omega\setminus\{u=\psi\}=\{u>\psi\}\cup\{u<\psi\}=O$ with $\mu(\Omega\setminus\{u=\psi\})=\mu(O)=0$; equivalently, $\mu$ is concentrated on the contact set $\{u=\psi\}$. [given, step 3.1, F1, F5]

5.1 (The integral vanishes) The functions $(u-\psi)^+$ and $(u-\psi)^-$ are nonnegative and continuous, hence $\mu$-measurable; $(u-\psi)^+$ vanishes outside $O$, which is $\mu$-null by step 3.1, and $(u-\psi)^-$ vanishes outside $\{u<\psi\}=\varnothing$ by step 4.1, so [F6] gives $\int_\Omega(u-\psi)^+\,d\mu=0=\int_\Omega(u-\psi)^-\,d\mu$; both integrals being finite, $\int_\Omega(u-\psi)\,d\mu=0$. This proves all the asserted conclusions: $\mu(\{u>\psi\})=0$, concentration on $\{u=\psi\}$ and vanishing of the integral. The positive-measure ball supplier [F5] uses Countable Choice; the cutoff [F3] is constructed in ZF and inner regularity is part of [F4], so the local argument makes no further selections. The assumed Axiom of Choice and Countable Choice also cover the inherited obstacle setting and existence of $u$ [F1]. [step 3.1, step 4.1, F1, F3, F4, F5, F6] ∎ 