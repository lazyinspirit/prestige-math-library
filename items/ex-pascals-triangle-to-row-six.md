---
id: ex-pascals-triangle-to-row-six
kind: example
title: "Pascal's triangle computed to row $6$, with Pascal's rule checked at every interior entry"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-binomial-coefficient, thm-pascals-rule, thm-binomial-closed-formula,
       cor-binomial-theorem-consequences, def-factorial-and-falling-factorial,
       def-nat-power, def-nat-finite-sum-and-product, def-canonical-natural]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-02
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Pascal's triangle (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Pascal%27s_triangle"
    - title: "Pascal's rule (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Pascal%27s_rule"
    - title: "Binomial coefficient (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Binomial_coefficient"
pipeline_run: null
---

## Example

The array whose $n$-th row is $\binom{n}{0}, \binom{n}{1}, \dots, \binom{n}{n}$
is Pascal's triangle. Rows $0$ to $6$ are

$$\begin{array}{c} 1 \\ 1 \quad 1 \\ 1 \quad 2 \quad 1 \\ 1 \quad 3 \quad 3 \quad 1 \\ 1 \quad 4 \quad 6 \quad 4 \quad 1 \\ 1 \quad 5 \quad 10 \quad 10 \quad 5 \quad 1 \\ 1 \quad 6 \quad 15 \quad 20 \quad 15 \quad 6 \quad 1 \end{array}$$

```tikz
\begin{tikzpicture}[x=0.9cm,y=0.75cm]
  \node (r00) at (0,4) {$1$};
  \node (r10) at (-0.5,3) {$1$};
  \node (r11) at (0.5,3) {$1$};
  \node (r20) at (-1,2) {$1$};
  \node (r21) at (0,2) {$2$};
  \node (r22) at (1,2) {$1$};
  \node (r30) at (-1.5,1) {$1$};
  \node (r31) at (-0.5,1) {$3$};
  \node (r32) at (0.5,1) {$3$};
  \node (r33) at (1.5,1) {$1$};
  \node (r40) at (-2,0) {$1$};
  \node (r41) at (-1,0) {$4$};
  \node[draw,circle] (r42) at (0,0) {$6$};
  \node (r43) at (1,0) {$4$};
  \node (r44) at (2,0) {$1$};
  \draw[->] (r31) -- (r42);
  \draw[->] (r32) -- (r42);
  \node at (3.25,0.35) {$3+3=6$};
  \node at (0,-0.85) {${4\choose2}={3\choose1}+{3\choose2}$};
\end{tikzpicture}
```

Every interior entry is produced below by [[thm-pascals-rule]] from the row
above, the boundary entries being the values $\binom{n}{0} = \binom{n}{n} = 1$;
four interior entries are cross-checked against the closed formula of
[[thm-binomial-closed-formula]]. The row
sums and the alternating row sums are then checked against
[[cor-binomial-theorem-consequences]], including the row where the alternating
sum is **not** zero.

## Facts & Assumptions

**Given:** The binomial coefficients of [[def-binomial-coefficient]] and the factorials $0! = 1$, $1! = 1$, $2! = 2$, $3! = 6$, $4! = 24$, $5! = 120$, $6! = 720$ of [[def-factorial-and-falling-factorial]].

[L1] Boundary values: $\binom{n}{0} = \binom{n}{n} = 1$ for every $n$, and $\binom{n}{k} = 0$ for $k > n$ ([[def-binomial-coefficient]]).

[L2] Pascal's rule: $\binom{n+1}{k+1} = \binom{n}{k} + \binom{n}{k+1}$ ([[thm-pascals-rule]]).

[L3] The closed formula: $\binom{n}{k}\,k!\,(n-k)! = n!$ for $k \le n$, so $\binom{n}{k}$ is the natural number whose canonical natural is $\iota(n!)/(\iota(k!)\iota((n-k)!))$ ([[thm-binomial-closed-formula]], [[def-canonical-natural]]).

[L4] Row sums: $\sum_{k<n+1}\binom{n}{k} = 2^{n}$, and $\sum_{k<n+1}(-1)^{k}\iota\binom{n}{k} = 0$ for $n \ge 1$ ([[cor-binomial-theorem-consequences]], [[def-nat-power]], [[def-nat-finite-sum-and-product]]).

## Verification

**Proof technique:** direct.

1.1 Row $0$ is the single entry $\binom{0}{0} = 1$, and row $1$ is $\binom{1}{0} = 1$, $\binom{1}{1} = 1$, both by [L1]. Every row begins and ends with $1$ for the same reason. [given, L1]

2.1 The interior entries, each by [L2] from the row above. Row $2$: $\binom{2}{1} = \binom{1}{0}+\binom{1}{1} = 2$. Row $3$: $\binom{3}{1} = \binom{2}{0}+\binom{2}{1} = 3$ and $\binom{3}{2} = \binom{2}{1}+\binom{2}{2} = 3$. Row $4$: $4$, $\binom{4}{2} = 3+3 = 6$, $4$. Row $5$: $5$, $\binom{5}{2} = 4+6 = 10$, $\binom{5}{3} = 6+4 = 10$, $5$. Row $6$: $6$, $\binom{6}{2} = 5+10 = 15$, $\binom{6}{3} = 10+10 = 20$, $\binom{6}{4} = 10+5 = 15$, $6$. This is the array displayed above. [step 1.1, L1, L2]

3.1 The closed formula agrees, checked on four interior entries by [L3]: $\binom{4}{2}\cdot 2!\cdot 2! = 6\cdot 2\cdot 2 = 24 = 4!$; $\binom{5}{2}\cdot 2!\cdot 3! = 10\cdot 2\cdot 6 = 120 = 5!$; $\binom{6}{2}\cdot 2!\cdot 4! = 15\cdot 2\cdot 24 = 720 = 6!$; $\binom{6}{3}\cdot 3!\cdot 3! = 20\cdot 6\cdot 6 = 720 = 6!$. So the two routes give the same numbers. [step 2.1, L3]

3.2 The row sums are $1$, $1+1 = 2$, $1+2+1 = 4$, $1+3+3+1 = 8$, $1+4+6+4+1 = 16$, $1+5+10+10+5+1 = 32$ and $1+6+15+20+15+6+1 = 64$, that is $2^{0}, 2^{1}, \dots, 2^{6}$, as [L4] requires. [step 2.1, L4]

3.3 The alternating row sums are $1$ for row $0$, and $1-1 = 0$, $1-2+1 = 0$, $1-3+3-1 = 0$, $1-4+6-4+1 = 0$, $1-5+10-10+5-1 = 0$, $1-6+15-20+15-6+1 = 0$ for rows $1$ to $6$. Row $0$ is the exception, and it is exactly the row where the hypothesis $n \ge 1$ of [L4] fails: the sum there has the single term $\binom{0}{0} = 1$. [step 2.1, L1, L4]

4.1 Rows $0$ to $6$ are as displayed, each interior entry agreeing with [L2] and the four checked in step 3.1 agreeing with [L3], the row sums with the powers of $2$, and the alternating sums with $0$ from row $1$ onwards and with $1$ at row $0$. [step 3.1, step 3.2, step 3.3] ∎

## Remarks

- **The exceptional row is the point of the last check.** A reader who computes only rows $1$ to $6$ sees an alternating sum that is always $0$ and will state the identity for every $n$. Row $0$ is where that statement is false, and this page records it as a false statement for exactly that reason ([[fs-the-alternating-row-sum-vanishes-for-every-n]]).

- **Symmetry is visible in every row** and is [[thm-binomial-closed-formula]] clause 3: row $6$ read backwards is row $6$.
