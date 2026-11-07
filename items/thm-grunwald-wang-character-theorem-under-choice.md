---
id: thm-grunwald-wang-character-theorem-under-choice
kind: theorem
title: Grunwald–Wang character theorem under choice
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 25
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
  - lem-odd-and-cyclic-prime-power-local-global-powers
  - lem-wang-two-primary-power-obstruction-classification
  - lem-idelic-character-extension-criterion-for-number-fields
proof_strategy: direct
axiom_use: AC, Countable Choice and DC are explicit because the three actual local-global and character-extension suppliers require them.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Song Wang, An Effective Version of the Grunwald–Wang Theorem
      url: https://thesis.caltech.edu/6803/1/Wang_s_2002.pdf
      locator: Chapter 0 Theorems 0.2–0.4 and Chapter 1 §§1.3–1.4, printed pp.7–8 and 20–34; the proof below uses separately reconstructed power-classification and character-extension suppliers.
verification: {}
---

## Statement

Assume AC, Countable Choice and DC. let $K$ be a number field, let $S$ be a finite set of places of $K$, and
let $\chi_v:K_v^\times\to\mathbb C^\times$ be continuous finite-order
characters for $v\in S$. Put
$$m=\operatorname{lcm}_{v\in S}\operatorname{ord}(\chi_v),$$
with $m=1$ when every $\chi_v$ is trivial. There is a continuous finite-order
character $\chi:C_K\to\mathbb C^\times$ whose restriction to each embedded
local factor $K_v^\times$ is $\chi_v$. If the special case below does not
occur, $\chi$ can be chosen of order $m$. To state the exception, fix the
compatible roots $\zeta_{2^r}=e^{2\pi i/2^r}$ for $r\ge1$, so
$\zeta_{2^{r+1}}^2=\zeta_{2^r}$, and put
$\eta_{2^r}=\zeta_{2^r}+\zeta_{2^r}^{-1}$. Let $s$ be the largest integer
with $\eta_{2^s}\in K$; then
$\eta_{2^{s+1}}\notin K$. The special case occurs exactly when all of the
following hold: $-1$, $2+\eta_{2^s}$, and $-2-\eta_{2^s}$ are nonsquares in
$K^\times$; $m=2^t m'$ for an odd integer $m'$ and an integer $t>s$; and
$$S_0:=\{v:v\text{ is a finite place above }2,\ -1,\ 2+\eta_{2^s},\ -2-\eta_{2^s}\text{ are all nonsquares in }K_v^\times\}\subseteq S.$$
In that case set $a_0=(2+\eta_{2^s})^{m/2}$. A global character of order
$m$ matching the given local characters exists if and only if
$$\prod_{v\in S_0}\chi_v(a_0)=1.$$
If this product is not $1$, no matching global character has order $m$, but
one exists of order $2m$.

## Facts & Assumptions

**Given:** Exactly the field, local characters, finite set, exponent, exceptional parameters and explicit choices in the Statement.

[A1] AC, Countable Choice and DC are assumed. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

[F1] The exact local-to-global power group $P(n,S)$ is classified by the two-primary obstruction theorem, with the odd and cyclic cases separately supplied. [[lem-wang-two-primary-power-obstruction-classification]] [[lem-odd-and-cyclic-prime-power-local-global-powers]]

[F2] Continuous local characters of exponent dividing $n$ extend to a global character of exponent dividing $n$ exactly when their product on $S$ kills $P(n,S)$. [[lem-idelic-character-extension-criterion-for-number-fields]]

## Proof

**Proof technique:** apply the exact character-extension criterion to the classified local power group at $m$ and $2m$.

1.1 If $m=1$, all local characters are trivial and the trivial global character works. Otherwise regard each $\chi_v$ as $\mu_m$-valued and write $P(n,S)=\{a\in K^\times:a\in K_v^{\times n}$ for all finite $v\notin S\}$. By [F2], extension with order dividing $m$ is equivalent to the product $\prod_{v\in S}\chi_v$ being trivial on $P(m,S)$. Every $m$th power is killed by this product. [F2, given, algebra]

2.1 If the three displayed elements are nonsquares and $t>s$, the extension $K(i,\sqrt{2+\eta_{2^s}})/K$ is biquadratic inside $K(\zeta_{2^t})$, so that cyclotomic Galois group is noncyclic. Conversely, [F1] shows that its noncyclic case has $t>s$ and the first two elements nonsquare; the third and $S_0\subseteq S$ are exactly its remaining exceptional conditions. Thus, if the special case does not occur, [F1] gives $P(m,S)=K^{\times m}$, so step 1.1 gives a global character of order dividing $m$. Its local restrictions have least common multiple $m$, so its order is exactly $m$. In the special case [F1] gives $P(m,S)=K^{\times m}\cup a_0K^{\times m}$, and says that $a_0$ is an $m$th power at each finite place outside $S_0$. At each real place $a_0>0$ because $m/2$ is even, so it is an $m$th power, and every nonzero complex number is an $m$th power. Thus the product on $a_0$ equals $\prod_{v\in S_0}\chi_v(a_0)$. The criterion in step 1.1 proves the stated if and only if and excludes order $m$ when this product is not one. [F1, F2, step 1.1, algebra]

3.1 In every case $P(2m,S)\subseteq K^{\times m}$. Indeed [F1] either makes it $K^{\times2m}$, or gives one additional class represented by $(2+\eta_{2^s})^{(2m)/2}=(2+\eta_{2^s})^m$, itself an $m$th power. Therefore the product of the $\chi_v$ kills $P(2m,S)$, and [F2] supplies a global character of order dividing $2m$. This proves unconditional finite-order extension under the explicit choice assumptions. If the special-case product is not one, step 2.1 excludes order $m$, while the local restrictions force the order to be a multiple of $m$. A divisor of $2m$ with that property is then exactly $2m$. This includes empty $S_0$ and all trivial characters. [F1, F2, step 1.1, step 2.1, algebra] ∎
