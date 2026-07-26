---
id: lem-factorial-beats-geometric
kind: lemma
title: "For every real $x$, $x^k/k! \\to 0$"
status: published
origin: session
deps: [def-finite-sum, lem-finite-sum-laws, def-integer-power, lem-power-laws, lem-power-monotone, lem-geometric-sequence-null, thm-of-archimedean, thm-squeeze, thm-algebra-of-limits, lem-limit-of-tail, def-real-limit, def-sequence, lem-of-abs-value, thm-induction-principle, lem-of-naturals-positive, lem-of-inverse-positive, lem-of-sign-rules, lem-of-add-order, prop-of-multiply-inequalities, def-nat-order, thm-nat-linear-order]
justified_by: []
forward_refs: [ex-standard-limits-worked]
aliases: []
landmark: false
short: "$x^k/k! \\to 0$"
proof_strategy: induction
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Factorial (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Factorial"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.5"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Write $\iota(n) := n \cdot 1_{\mathbb{R}}$ for the canonical natural
([[lem-of-naturals-positive]]) and define the **factorial** as the finite product
([[def-finite-sum]])

$$k! \;:=\; \prod_{j < k} \iota(j+1) \qquad (k \in \mathbb{N}),$$

so that $0! = 1$, the empty product, and $(k+1)! = k! \cdot \iota(k+1)$. Every
$k!$ is a positive real. Then, for every $x \in \mathbb{R}$,

$$\frac{x^{k}}{k!} \longrightarrow 0 ,$$

the numerator being the integer power of [[def-integer-power]] and the
convergence that of [[def-real-limit]].

The index range needs no adjustment: $k!$ is defined at $k = 0$ with value $1$,
and $x^0 = 1$, so the sequence begins with $x^0/0! = 1$.

## Facts & Assumptions

**Given:** A real $x$; the modulus $M := |x| \ge 0$; the factorials $k! = \prod_{j<k}\iota(j+1)$; and the canonical naturals $\iota(n) = n \cdot 1_{\mathbb{R}}$.

[A1] $P(j)$ denotes the statement $M^{N+j}/(N+j)! \le A \lambda^{j}$, where $N$, $\lambda$ and $A$ are fixed in step 1.3.

[L1] Finite products: the empty product is $1$, $\prod_{j<m+1} a_j = \big(\prod_{j<m} a_j\big) a_m$, and a product of positive factors is positive ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L2] Integer powers: $z^{0} = 1$, $z^{m+1} = z^{m} z$, and $z \ge 0$ implies $z^{m} \ge 0$ ([[def-integer-power]], [[lem-power-monotone]], [[lem-power-laws]]).

[L3] Absolute value: $|zw| = |z||w|$, $|z| \ge 0$, and $|z| = z$ for $z \ge 0$ ([[lem-of-abs-value]]).

[L4] Induction principle ([[thm-induction-principle]]).

[L5] Canonical naturals: $\iota(n) > 0$ and invertible for $n \ge 1$, $\iota$ is strictly increasing, and for every real $y$ there is a natural $N \ge 1$ with $y < \iota(N)$ ([[lem-of-naturals-positive]], [[thm-of-archimedean]], [[def-nat-order]], [[thm-nat-linear-order]]).

[L6] Order arithmetic: [[lem-of-inverse-positive]], claim 4 of [[lem-of-sign-rules]] and [[lem-of-add-order]] state the strict forms, that $0 < u < v$ gives $0 < 1/v < 1/u$, that multiplication by a positive element preserves $<$, and that inequalities may be translated and added; adjoining the case of equality gives the nonstrict forms used below, and multiplication by $0$ sends both sides to $0$, so a nonnegative multiplier preserves $\le$. Products of nonnegative inequalities multiply in the nonstrict form stated by [[prop-of-multiply-inequalities]].

[L7] Geometric sequences: $|r| < 1$ implies $r^{j} \to 0$ ([[lem-geometric-sequence-null]]); a scalar multiple of a convergent sequence converges to the scalar multiple of the limit ([[thm-algebra-of-limits]]).

[L8] Squeeze theorem, and the fact that a constant sequence converges to its value ([[thm-squeeze]], [[def-sequence]]).

[L9] A sequence converges to $z$ if and only if some tail of it does; the $K$-th tail of $(z_k)$ is $j \mapsto z_{j+K}$ ([[lem-limit-of-tail]], [[def-sequence]]).

## Proof

**Proof technique:** induction.

1.1 Each $k!$ is a product of the positive reals $\iota(j+1)$, $j < k$, hence positive, and $(k+1)! = k! \cdot \iota(k+1)$; also $M = |x| \ge 0$. [given, L1, L3, L5]

1.2 For every $k \in \mathbb{N}$ one has $|x^{k}| = M^{k}$: at $k = 0$ both sides are $|1| = 1 = M^{0}$, and if $|x^{k}| = M^{k}$ then $|x^{k+1}| = |x^{k} x| = |x^{k}||x| = M^{k} M = M^{k+1}$, so this follows by induction on $k$. [given, L2, L3, L4]

1.3 Take a natural $N \ge 1$ with $M < \iota(N)$ and put $\lambda := M/\iota(N)$ and $A := M^{N}/N!$. Then $0 \le \lambda < 1$, since $0 \le M < \iota(N)$ and $\iota(N) > 0$, and $A \ge 0$. [given, L1, L2, L5, L6, choose]

1.4 The statement $P(0)$ holds, with equality: $M^{N+0}/(N+0)! = M^{N}/N! = A = A \cdot 1 = A\lambda^{0}$. [given, A1, L2, base]

1.5 Fix $j \in \mathbb{N}$ and assume $P(j)$, that is $M^{N+j}/(N+j)! \le A\lambda^{j}$. [A1, ih]

2.1 Then $P(j+1)$ holds. Indeed $M^{N+j+1}/(N+j+1)! = \big(M^{N+j}/(N+j)!\big)\big(M/\iota(N+j+1)\big)$, and $N + j + 1 > N$ gives $\iota(N+j+1) > \iota(N) > 0$, hence $0 \le M/\iota(N+j+1) \le M/\iota(N) = \lambda$; since also $0 \le M^{N+j}/(N+j)! \le A\lambda^{j}$ by step 1.5 and $A\lambda^{j} \ge 0$, multiplying the two nonnegative inequalities gives $M^{N+j+1}/(N+j+1)! \le A\lambda^{j}\lambda = A\lambda^{j+1}$. [step 1.5, A1, L1, L2, L5, L6]

3.1 By the induction principle $P(j)$ holds for every $j \in \mathbb{N}$, and $M^{N+j}/(N+j)! \ge 0$ always, so $0 \le M^{N+j}/(N+j)! \le A\lambda^{j}$ for every $j$. [step 1.4, step 2.1, A1, L1, L2, L4]

4.1 Since $|\lambda| = \lambda < 1$, the sequence $(\lambda^{j})_j$ converges to $0$, hence so does $(A\lambda^{j})_j$; the constant sequence $0$ also converges to $0$, so the squeeze theorem applied to step 3.1 shows that the $N$-th tail $j \mapsto M^{N+j}/(N+j)!$ converges to $0$, and therefore $(M^{k}/k!)_k$ converges to $0$. Finally $|x^{k}/k! - 0| = |x^{k}|/k! = M^{k}/k!$ by steps 1.1 and 1.2, so $x^{k}/k! \to 0$. [step 3.1, step 1.1, step 1.2, L3, L7, L8, L9, discharge-induction] ∎

## Remarks

- **The threshold $N$ is chosen so that the ratio is bounded by a constant less
  than $1$.** Beyond index $N$ each further factor of the factorial is at least
  $\iota(N)$, so multiplying by $x$ and dividing by that factor shrinks the term
  by at least the factor $\lambda = M/\iota(N) < 1$. That is the entire mechanism:
  a factorial eventually beats a geometric sequence because its ratios, unlike a
  geometric sequence's, tend to $0$.

- **No halving is used.** Many texts take $N$ with $M/N \le 1/2$; here it is
  enough to take $N$ with $M < \iota(N)$, which the Archimedean property supplies
  directly and which keeps every quantity a ratio of things already in hand.

- **The case $x = 0$ is not special.** Then $M = 0$, $\lambda = 0$ and the bound
  reads $M^{N+j}/(N+j)! \le 0$ for $j \ge 1$, which is correct since those terms
  are $0$; and $(0^{j})_j$ converges to $0$ because $|0| < 1$, so
  [[lem-geometric-sequence-null]] applies unchanged.

- **This is the strongest of the three standard comparisons on this page.**
  [[lem-power-over-geometric-null]] says a power is beaten by a geometric
  sequence; this says every geometric sequence, that is every fixed $x$, is beaten
  by the factorial. Instances are worked in [[ex-standard-limits-worked]].
