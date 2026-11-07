---
id: lem-sen-congruence-for-cyclic-p-power-local-extensions
kind: lemma
title: "Sen congruence for a cyclic p-power local extension"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - def-local-field-valuation-ring-uniformizer-and-residue-field
  - def-finite-galois-extension-and-galois-group
  - lem-choice-free-finite-local-extension-isometry-degree-and-digits
  - lem-tame-character-and-graded-conjugation-for-local-ramification
  - thm-fundamental-theorem-of-finite-galois-theory
justified_by: []
proof_strategy: direct
axiom_use: >-
  The finite-extension setting and valuation normalization are used as supplied
  by the local-field definition. The argument uses only finite algebra,
  completeness, and the finite residue field.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "I. B. Fesenko and S. V. Vostokov, Local Fields and Their Extensions, second edition, Chapter III §4.3, Sen's Proposition"
      url: "https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf"
verification: {}
---

## Statement

Let $p$ be a prime and let $L/F$ be a finite Galois extension of local fields
with cyclic Galois group of order $p^m$ and residue degree one (that is, totally
ramified). Let $\sigma$ generate its Galois group, and let $\varpi$ be a
uniformizer of $L$. For every integer
$k$ with $p^m\nmid k$, put
$$c_k=v_L\!\left(\frac{\sigma^k(\varpi)}{\varpi}-1\right).$$
Here $v_p(k)$ is the exponent of $p$ in the factorization of the nonzero
integer $k$, with $v_p(0)=+\infty$. Then $c_k$ depends only on $v_p(k)$; for each such $k$ there is
$\alpha_k\in L^\times$ with $v_L(\alpha_k)=k$ and
$v_L(\sigma(\alpha_k)/\alpha_k-1)=c_k$; and for all integers $k_1,k_2$
with $p^m\nmid k_1k_2$ and every $a\ge0$,
$$v_p(k_1-k_2)\ge a\quad\Longrightarrow\quad v_p(c_{k_1}-c_{k_2})\ge a+1,$$
where the same convention $v_p(0)=+\infty$ applies.

## Statement references

[[def-local-field-valuation-ring-uniformizer-and-residue-field]]

[[def-finite-galois-extension-and-galois-group]]

[Fesenko and Vostokov, *Local Fields and Their Extensions*, Chapter III §4.3, printed pp. 92–94](https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf)

## Facts & Assumptions

**Given:** The extension, its compatible normalized valuations, the generator, and uniformizer in the Statement. Put $\ell=\operatorname{char}(k_L)$; the prime $p$ need not equal $\ell$.

[F1] For finite valued local extensions, degree is $ef$, automorphisms are isometries, intermediate fields are local, and total ramification gives deterministic expansions using a fixed finite residue representative set in the base field. These assertions are choice-free. [[lem-choice-free-finite-local-extension-isometry-degree-and-digits]]

[F2] In total ramification, the tame character has kernel $G_1$, that kernel is an $\ell$-group, and an element of $G_1$ acts trivially on every integer-valued associated graded piece. [[lem-tame-character-and-graded-conjugation-for-local-ramification]]

[F3] A subgroup fixes an intermediate field of the corresponding degree, with that subgroup as its Galois group. [[thm-fundamental-theorem-of-finite-galois-theory]]

## Proof

**Proof technique:** simultaneous induction for cyclic wild extensions, using deterministic displacement expansions.

**Given:** The data above; no choice axiom is assumed.

1.1 Write $G=\langle\sigma\rangle$. By [F1], $v_L(F^\times)=p^m\mathbb Z$. If $p\ne\ell$, [F2] gives $G_1=1$, because it is both a subgroup of a $p$-group and an $\ell$-group. Thus every nonidentity $\sigma^k$ has $v_L(\sigma^k\varpi-\varpi)=1$ and $c_k=0$. The dependence and congruence assertions follow in this case. If $p=\ell$, the tame character has trivial image (its order divides both $p^m$ and $|k_L^\times|$), so every element of $G$ acts trivially on every associated graded piece. For $\rho=\sigma^{p^j}$ and a positive $i$ prime to $p$, the sum $\rho^i\varpi-\varpi=\sum_{t=0}^{i-1}\rho^t(\rho\varpi-\varpi)$ has leading coefficient $i$ times that of $\rho\varpi-\varpi$, hence the same valuation. Isometry gives the same conclusion for negative $i$. Consequently $c_k=c_{p^{v_p(k)}}$. Replacing $i$ by $p$ cancels the leading coefficient, so $c_{p^{j+1}}>c_{p^j}$ whenever $j+1<m$. [F1, F2, given, algebra]

2.1 For every positive $k$, put $\alpha_k=\prod_{i=0}^{k-1}\sigma^i\varpi$; for negative $k$, put $\alpha_k=\alpha_{-k}^{-1}$. Then $v_L(\alpha_k)=k$. The quotient $\sigma\alpha_k/\alpha_k$ telescopes for positive $k$ to $\sigma^k\varpi/\varpi$; for negative $k$ it is the inverse quotient for $-k$. Isometry and inversion of a unit preserve the displacement valuation, giving $v_L(\sigma\alpha_k/\alpha_k-1)=c_k$. This also proves the element assertion in the tame case of step 1.1. [F1, step 1.1, construct, algebra]

3.1 It remains to consider $p=\ell$. For each $n\ge1$, prove simultaneously for every such extension of order $p^m$ with $m\ge n+1$ that $p^n\mid c_{p^{n-1}}-c_{p^n}$. Suppose the assertions for smaller $n$ proved. Write $c_*=c_{p^{n-1}}$. The numbers $k+c_k$ for nonzero integers with $v_p(k)\le n-1$ are pairwise distinct, and none equals $c_*$. Indeed, indices with equal $p$-valuation have equal $c$ by step 1.1, so their sums differ by the nonzero difference of indices. If the valuations differ with smaller value $r\le n-2$, their index difference has valuation exactly $r$, whereas their $c$ difference is divisible by $p^{r+1}$, by summing the already proved consecutive gaps up to index $n-1$. These cannot cancel. To compare $c_*$ with $k+c_k$, use the same divisibility when $v_p(k)<n-1$; when $v_p(k)=n-1$ the difference is the nonzero integer $k$. For $n=1$ these comparisons use only the equal-valuation case. [step 1.1, step 2.1, given, algebra]

4.1 Suppose $d=c_*-c_{p^n}$ is not divisible by $p^n$. It is negative by step 1.1. For $n\ge2$, apply the simultaneous induction assertion for $n-1$ to $\sigma^p$ on $L/L^{\langle\sigma^p\rangle}$. This is a totally ramified local extension of order $p^{m-1}$ by [F1] and [F3]. It shows $p^{n-1}\mid d$; for $n=1$ this divisibility is automatic. Hence $v_p(d)=n-1$. Apply step 2.1 to the generator $\sigma^p$ and index $d$, obtaining $\alpha$ of valuation $d$ with $v_L(\sigma^p\alpha-\alpha)=d+c_d(\sigma^p)=d+c_{p^n}(\sigma)=c_*$. Define $\beta=\sum_{i=0}^{p-1}\sigma^i\alpha$. All terms have the same leading coefficient by [F2], whose sum is zero in residue characteristic $p$. Thus $v_L(\beta)>d$. Telescoping gives $\sigma\beta-\beta=\sigma^p\alpha-\alpha$, of valuation $c_*$; in particular $\beta\ne0$. [F1, F2, F3, step 1.1, step 2.1, step 3.1, algebra]

5.1 Fix one finite ordered representative set $S\subset\mathcal O_F$ for $k_L=k_F$, including $0$, and a uniformizer $\pi_F$. For each integer $k\ge v_L(\beta)$ choose the following specified element $b_k$ of valuation $k$: use $\alpha_k$ from step 2.1 if $p^m\nmid k$, and $\pi_F^{k/p^m}$ otherwise. At successive indices subtract $\beta_k=s_k b_k$, where $s_k$ is the unique element of $S$ matching the leading residue of the current remainder divided by $b_k$. A zero coefficient is allowed. The new remainder has valuation at least $k+1$, so completeness gives $\beta=\sum_{k\ge v_L(\beta)}\beta_k$. This is a single-valued recursion, not an appeal to countable choice. Every nonzero term for $p^m\nmid k$ has displacement valuation $k+c_k$, while a term for $p^m\mid k$ is fixed. For $n\le v_p(k)<m$, this valuation is at least $v_L(\beta)+c_{p^n}>d+c_{p^n}=c_*$. For $v_p(k)\le n-1$, the possible valuations are pairwise distinct and avoid $c_*$ by step 3.1. There are only finitely many terms of displacement valuation below any fixed bound, because $c_k\ge0$ and $k$ tends to infinity. Therefore, if a nonzero term below $c_*$ occurs, the least one is unique and survives summation; if none occurs, all terms have valuation strictly above $c_*$. Isometry permits passing $\sigma-1$ through the convergent sum. Either case contradicts step 4.1. This proves the simultaneous induction assertion. [F1, step 1.1, step 2.1, step 3.1, step 4.1, construct, algebra]

6.1 If $v_p(k_1)=v_p(k_2)$, their $c$ values are equal. Otherwise put $r=\min(v_p(k_1),v_p(k_2))=v_p(k_1-k_2)$. Their $c$ difference is a sum of consecutive gaps proved in step 5.1, each divisible by $p^{r+1}$. If $v_p(k_1-k_2)\ge a$, this is divisible by $p^{a+1}$. Equal indices and zero differences use $v_p(0)=+\infty$. If $m=0$ there are no admissible indices; if $m=1$ all admissible indices have equal valuation zero and hence equal $c$. Together with the tame case, all stated cases follow. [step 1.1, step 5.1, algebra] ∎

## Remark

In residue characteristic $p$, the proof also establishes the auxiliary identities
$1\le c_{p^0}<c_{p^1}<\cdots<c_{p^{m-1}}$ and
$p^j\mid(c_{p^{j-1}}-c_{p^j})$ for every $1\le j<m$.
These are the explicit conclusions of steps 1.1 and 5.1; the consecutive-gap
identity is proved simultaneously for all cyclic $p$-power extensions and
is available even when the pair of indices does not satisfy the product
restriction in the Statement. In residue characteristic different from $p$,
all $c_k$ are zero.
