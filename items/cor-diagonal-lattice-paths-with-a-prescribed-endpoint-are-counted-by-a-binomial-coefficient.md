---
id: cor-diagonal-lattice-paths-with-a-prescribed-endpoint-are-counted-by-a-binomial-coefficient
kind: corollary
title: "The number of diagonal paths from $(0,a)$ to $(n,b)$ is $\\binom{n}{u}$ for the natural number $u$ with $2u=n+b-a$, and $0$ when no such $u$ exists"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-monotone-and-diagonal-lattice-paths-correspond, thm-monotone-lattice-paths-in-a-rectangle-are-counted-by-a-binomial-coefficient, def-diagonal-lattice-path-and-its-height, def-binomial-coefficient, thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse, def-finite-cardinality]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'C. Krattenthaler, "Lattice Path Enumeration", ch. 10 of the Handbook of Enumerative Combinatorics, §10.3'
      url: "https://arxiv.org/pdf/1503.05930"
pipeline_run: null
---

## Statement

Let $a,b\in\mathbb{Z}$ and $n\in\mathbb{N}$, and let $\mathcal{W}((0,a),(n,b))$ be
the set of diagonal lattice paths of length $n$ from $(0,a)$ whose height
function ends at $b$ ([[def-diagonal-lattice-path-and-its-height]]).

1. Suppose $2$ divides $n+b-a$ and $-n\le b-a\le n$, and let $u\in\mathbb{N}$ be
   the natural number with $2u=n+b-a$; then $0\le u\le n$ and

   $$\lvert\mathcal{W}((0,a),(n,b))\rvert = \binom{n}{u}.$$

2. If either condition fails then $\mathcal{W}((0,a),(n,b))=\varnothing$, so its
   cardinality is $0$.

In both cases the set is finite, and the count depends on $a$ and $b$ only through
the difference $b-a$.

## Facts & Assumptions

**Given:** integers $a$ and $b$ and a natural number $n$.

[F1] A diagonal path of length $n$ from $(0,a)$ has $v(i)=(i,h(i))$ with $h(0)=a$ and $h(i)-h(i-1)\in\{1,-1\}$; with $\mu(n)$ the number of up-steps its endpoint height is $h(n)=a+2\mu(n)-n$; and $\mathcal{W}((0,a),(n,b))$ is nonempty exactly when $2$ divides $n+b-a$ and $-n\le b-a\le n$ ([[def-diagonal-lattice-path-and-its-height]]).

[L1] For $u,d\in\mathbb{N}$ and $n=u+d$, replacing $U$ by $N$ and $D$ by $E$ is a bijection $\mathcal{W}((0,0),(n,u-d))\to\mathcal{M}((0,0),(d,u))$ ([[lem-monotone-and-diagonal-lattice-paths-correspond]]).

[L2] For $m,n'\in\mathbb{N}$ the set $\mathcal{M}((0,0),(m,n'))$ is finite with $\lvert\mathcal{M}((0,0),(m,n'))\rvert=\binom{m+n'}{n'}$ ([[thm-monotone-lattice-paths-in-a-rectangle-are-counted-by-a-binomial-coefficient]]).

[L3] For $f:A\to B$: $f$ is a bijection if and only if there is a function $g:B\to A$ with $g\circ f=\Delta_A$ and $f\circ g=\Delta_B$ ([[thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse]]).

[L4] If $A$ is finite and $f:A\to B$ is a bijection then $B$ is finite and $\lvert B\rvert=\lvert A\rvert$; and a finite set has cardinality $0$ exactly when it is empty ([[def-finite-cardinality]]).

[L5] $\binom{n}{k}$ is the number of $k$-element subsets of the natural number $n$, and $\binom{n}{0}=\binom{n}{n}=1$ ([[def-binomial-coefficient]]).

## Proof

**Proof technique:** direct.

1.1 Subtracting the constant $(0,a)$ leaves every difference $v(i)-v(i-1)$ unchanged and sends $(0,a)$ to $(0,0)$ and $(n,b)$ to $(n,b-a)$, and adding it back inverts the operation; so it is a bijection $\mathcal{W}((0,a),(n,b))\to\mathcal{W}((0,0),(n,b-a))$ and the two sets have the same cardinality. [F1, L3, L4]

2.1 If $2$ does not divide $n+b-a$, or if $b-a$ lies outside the range from $-n$ to $n$, then $\mathcal{W}((0,a),(n,b))$ is empty and its cardinality is $0$, which is clause 2. [F1, L4, step 1.1]

2.2 If the two conditions hold, let $u$ be the natural number with $2u=n+b-a$ and put $d:=n-u$. From $2u=n+b-a$ and $u+d=n$ one gets $u-d=b-a$, and $0\le u\le n$ because $0\le n+b-a\le 2n$. [F1, step 1.1, algebra]

3.1 By step 2.2 and [L1] the set $\mathcal{W}((0,0),(n,b-a))=\mathcal{W}((0,0),(n,u-d))$ is in bijection with $\mathcal{M}((0,0),(d,u))$, which by [L2] is finite with $\binom{d+u}{u}=\binom{n}{u}$ elements; transporting along that bijection and along the translation of step 1.1 gives clause 1. At $n=0$ the conditions force $b=a$ and $u=0$, and the one empty path is counted by $\binom{0}{0}=1$; at $b-a=n$ they force $u=n$, and the one all-up path is counted by $\binom{n}{n}=1$. [L1, L2, L4, L5, step 1.1, step 2.1, step 2.2] ∎

## Remarks

- **The vanishing clause is used, not decorative.** The reflection principle below
  subtracts one of these counts from another, and both the parity and the range
  conditions can fail for the reflected endpoint while holding for the original;
  the difference is correct only because the count is then $0$ rather than
  undefined.

- **Why the answer is stated through $u$ rather than as a quotient.** The natural
  number $u$ with $2u=n+b-a$ exists exactly under the stated hypotheses, and
  writing $\tfrac{1}{2}(n+b-a)$ would name an element of a field where the
  hypothesis of the statement is that the halving is exact in $\mathbb{Z}$.
