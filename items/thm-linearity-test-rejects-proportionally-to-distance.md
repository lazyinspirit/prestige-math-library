---
id: thm-linearity-test-rejects-proportionally-to-distance
kind: theorem
title: "BLR rejection is proportional to distance from linearity"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-hadamard-linearity-constraint-system, def-linearity-test, lem-blr-acceptance-fourier-identity, lem-boolean-cube-fourier-inversion-and-parseval]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct calculation
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-27
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  scraped: []
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §18.4.1 Theorem 18.23 and §19.3 Theorem 19.9, printed pp. 364 and 390-391."
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Irit Dinur, The PCP theorem by gap amplification, §5 (distance of a table from linearity), printed pp. 17-18."
      url: "https://www.cs.umd.edu/users/gasarch/TOPICS/pcp/dinur.pdf"
---

## Statement

For every $n\ge0$ and every $f:\mathbb F_2^n\to\mathbb F_2$, let $\alpha(f)$ be the BLR acceptance probability and $\varepsilon(f)=1-\alpha(f)$ the BLR rejection probability of [[def-linearity-test]], and let
$$\operatorname{dist}\bigl(f,\Lambda\bigr):=\min_{a\in\mathbb F_2^n}\operatorname{dist}\bigl(f,\ell_a\bigr),\qquad \Lambda=\{\ell_a:x\mapsto a\cdot x\}$$
be the relative Hamming distance from $f$ to the nearest linear function, the minimum being over the nonempty finite set of $2^n$ linear functions. Then
$$\varepsilon(f)\ \ge\ \operatorname{dist}\bigl(f,\Lambda\bigr).$$
Equivalently, the fraction of violated constraints of the Hadamard linearity constraint system $\operatorname{Lin}_n(f)$ of [[def-hadamard-linearity-constraint-system]] is at least the distance of $f$ from $\Lambda$. There is no restriction on the acceptance probability: the bound holds in the low-acceptance regime $\alpha\le1/2$ as well, and it holds in dimension $n=0$.

## Facts & Assumptions

**Given:** an integer $n\ge0$ and a fixed table $f:\mathbb F_2^n\to\mathbb F_2$, with $h(x):=(-1)^{f(x)}$ and $\widehat h(a)=\mathbb E_xh(x)\chi_a(x)$.

[F1] The BLR test chooses independent uniform $x,y\in\mathbb F_2^n$ and accepts exactly when $f(x)+f(y)=f(x+y)$; its acceptance probability is denoted $\alpha$ and $\varepsilon=1-\alpha$ is its rejection probability. The linear functions are $\ell_a(x)=a\cdot x$ with $a\in\mathbb F_2^n$, the normalized distance is $\operatorname{dist}(f,g)=2^{-n}\#\{x:f(x)\ne g(x)\}$, and for $n=0$ the cube has one point and the sole linear function is $\ell_0=0$ ([[def-linearity-test]]).

[F2] With $h=(-1)^f$ one has $2\alpha-1=\mathbb E_{x,y}h(x)h(y)h(x+y)=\sum_a\widehat h(a)^3$, the sum being over the $2^n$ indices $a$ ([[lem-blr-acceptance-fourier-identity]]).

[F3] The characters are orthonormal and Parseval holds: $\sum_a\widehat h(a)^2=\mathbb E_xh(x)^2=1$, with $\widehat h(a)=\mathbb E_xh(x)\chi_a(x)$ and $\chi_a(x)=(-1)^{a\cdot x}$ ([[lem-boolean-cube-fourier-inversion-and-parseval]]).

[F4] The Hadamard linearity constraint system $\operatorname{Lin}_n(f)$ lists one ternary constraint for each ordered pair $(x,y)$ with tuple $(x,y,x+y)$ and relation $a+b=c$, has $4^n$ constraints, and the fraction of its constraints violated by $f$ equals the BLR rejection probability $\varepsilon$; every linear table satisfies all its constraints ([[def-hadamard-linearity-constraint-system]]).

## Proof

**Proof technique:** direct calculation.

1.1 The index set $\mathbb F_2^n$ is finite and nonempty for every $n\ge0$, so $M:=\max_a\widehat h(a)$ exists; it is a signed maximum, attained at some index, and no absolute value is taken. [F3, given, algebra]

2.1 By [F2] and [F3], $2\alpha-1=\sum_a\widehat h(a)^3\le\sum_aM\,\widehat h(a)^2=M\sum_a\widehat h(a)^2=M$, because $\widehat h(a)\le M$ and $\widehat h(a)^2\ge0$ for every index $a$; the sum has $2^n\ge1$ terms, and the inequality is preserved by the finite sum. [F2, F3, step 1.1, algebra]

2.2 For each $a$, since $h=(-1)^f$ takes the value $+1$ exactly where $f=\ell_a$ and $-1$ exactly where $f\ne\ell_a$, $$\widehat h(a)=\mathbb E_xh(x)\chi_a(x)=\Pr\bigl[f(x)=\ell_a(x)\bigr]-\Pr\bigl[f(x)\ne\ell_a(x)\bigr]=1-2\operatorname{dist}(f,\ell_a),$$ so $\operatorname{dist}(f,\ell_a)=(1-\widehat h(a))/2$ and therefore $\operatorname{dist}(f,\Lambda)=\min_a(1-\widehat h(a))/2=(1-M)/2$, the minimum of the distances corresponding to the maximum of the coefficients. [F1, F3, step 1.1, algebra]

3.1 Combining steps 2.1 and 2.2, $\varepsilon=1-\alpha=\bigl(1-(2\alpha-1)\bigr)/2\ge(1-M)/2=\operatorname{dist}(f,\Lambda)$. This is the claimed inequality, with no hypothesis on $\alpha$; in particular it is available when $\alpha\le1/2$, where the acceptance-based form of BLR soundness imposes no restriction on $f$. [step 2.1, step 2.2, algebra]

4.1 By [F4] the fraction of constraints of $\operatorname{Lin}_n(f)$ violated by the table $f$ equals $\varepsilon$, so step 3.1 says exactly that this violated fraction is at least $\operatorname{dist}(f,\Lambda)$; the system has $4^n$ constraints of arity $3$ over $\mathbb F_2$, and the statement of the theorem is the conjunction of the two formulations. [F4, step 3.1]

5.1 Degenerate and extremal cases. For $n=0$ we have $M=\widehat h(0)=h(0)=(-1)^{f(0)}$, so $2\alpha-1=M$ and $\operatorname{dist}(f,\ell_0)=(1-M)/2$: if $f(0)=0$ then $\varepsilon=0=\operatorname{dist}$ and the single constraint $(0,0,0)$ of the system is satisfied, while if $f(0)=1$ then $\varepsilon=1=\operatorname{dist}$, matching the constraint $f(0)+f(0)=f(0)$ being violated. For a linear table $f=\ell_u$ every constraint is satisfied by [F4], so $\varepsilon=0=\operatorname{dist}(f,\Lambda)$. The inequality is not in general an equality: for $n\ge1$ and $f=\ell_u+1$ one has $f(x)+f(y)=\ell_u(x+y)$ and $f(x+y)=\ell_u(x+y)+1$ for all $x,y$, so every constraint is violated and $\varepsilon=1$, while $\operatorname{dist}(f,\ell_u)=1$ and $\operatorname{dist}(f,\ell_b)=1/2$ for $b\ne u$ give $\operatorname{dist}(f,\Lambda)=1/2<1$. [F1, F4, step 3.1, algebra] ∎

## Remarks

- **What the bound does and does not say.** The inequality $\varepsilon\ge\operatorname{dist}(f,\Lambda)$ is one-sided: it converts a large distance into a large rejection probability and says nothing about the converse, and the example $f=\ell_u+1$ shows the two quantities can differ by a factor two. Read backwards it recovers the classical form of [[thm-blr-linearity-test-soundness]], which concludes agreement with a linear function from acceptance above one half; the present statement covers all acceptance probabilities, including the ones for which that conclusion is vacuous.
- **Why the signed Fourier maximum is the right object.** Step 2.2 identifies $\operatorname{dist}(f,\Lambda)$ with $(1-M)/2$ where $M=\max_a\widehat h(a)$ is the largest coefficient, and step 2.1 bounds $2\alpha-1$ by the same $M$; both the geometry of the nearest linear table and the acceptance probability are controlled by that single signed maximum. A maximum of $|\widehat h(a)|$ would not do: the constant table $f\equiv1$ has $\widehat h(0)=-1$ and is at distance $1$ from the only linear table of dimension zero, while $\varepsilon=1$.
- **Use in the tester.** The proportional form is what the exponential-base tester of [[lem-exponential-base-assignment-tester-from-quadratic-oracles]] needs for its first rejection family: a table that is not close to *any* linear function is rejected with probability bounded below by the constant distance threshold, and the Hadamard system of [[def-hadamard-linearity-constraint-system]] materializes the tests as explicit constraints.
