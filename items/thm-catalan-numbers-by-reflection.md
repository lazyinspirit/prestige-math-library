---
id: thm-catalan-numbers-by-reflection
kind: theorem
title: "$C_n+\\binom{2n}{n+1}=\\binom{2n}{n}$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-catalan-number, thm-reflection-principle-for-diagonal-lattice-paths, def-dyck-path-and-semilength, def-binomial-coefficient]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'C. Krattenthaler, "Lattice Path Enumeration", ch. 10 of the Handbook of Enumerative Combinatorics, §10.3, Corollary 10.3.2'
      url: "https://arxiv.org/pdf/1503.05930"
pipeline_run: null
---

## Statement

For every $n\in\mathbb{N}$, in $\mathbb{N}$,

$$C_n+\binom{2n}{n+1}=\binom{2n}{n},$$

where $C_n$ is the Catalan number ([[def-catalan-number]]) and the coefficients
are those of [[def-binomial-coefficient]]. Equivalently
$C_n=\binom{2n}{n}-\binom{2n}{n+1}$, the subtraction being legitimate because the
displayed identity has been proved.

## Facts & Assumptions

**Given:** a natural number $n$.

[F1] $\mathcal{D}_n$ is the set of diagonal paths of length $2n$ from $(0,0)$ to $(2n,0)$ whose height function satisfies $h(i)\ge0$ for every $i$ with $0\le i\le 2n$; for $n=1$ it has exactly one element, with step word $UD$ ([[def-dyck-path-and-semilength]]).

[F2] $C_n=\lvert\mathcal{D}_n\rvert$, and $C_0=1$ ([[def-catalan-number]]).

[L1] For $c,a,b\in\mathbb{Z}$, $\ell\in\mathbb{N}$ and $a>c$, $b>c$: if $2$ divides $\ell+b-a$ and $b-a\ge-\ell$, and $u\in\mathbb{N}$ satisfies $2u=\ell+b-a$, then $u+a-c\in\mathbb N$, the set $\mathcal{A}$ of paths in $\mathcal{W}((0,a),(\ell,b))$ staying strictly above the level $c$ is finite, and $\lvert\mathcal{A}\rvert+\binom{\ell}{u+a-c}=\binom{\ell}{u}$ ([[thm-reflection-principle-for-diagonal-lattice-paths]], clause 2).

[L2] $\binom{m}{k}=0$ for $k>m$, $\binom{m}{0}=1$ and $\binom{m}{m}=1$ ([[def-binomial-coefficient]]).

## Proof

**Proof technique:** direct.

1.1 Since heights are integers, $h(i)\ge0$ holds exactly when $h(i)>-1$; so $\mathcal{D}_n$ is precisely the set of paths in $\mathcal{W}((0,0),(2n,0))$ that stay strictly above the level $-1$. [F1]

2.1 Apply [L1] with $\ell=2n$, $a=0$, $b=0$ and $c=-1$. The hypotheses hold: $a>c$ and $b>c$ because $0>-1$; and $\ell+b-a=2n$ is even with $2n\ge0$, so the natural number $u$ with $2u=2n$ is $u=n$ and $u+a-c=n+1$. By step 1.1 the set $\mathcal{A}$ is $\mathcal{D}_n$, whose cardinality is $C_n$, so $C_n+\binom{2n}{n+1}=\binom{2n}{n}$. [F2, L1, step 1.1, algebra]

3.1 Since the identity holds in $\mathbb{N}$, the difference form follows. At $n=0$ it reads $1+\binom{0}{1}=\binom{0}{0}$, that is $1+0=1$ by [L2] and $C_0=1$; at $n=1$ it reads $C_1+\binom{2}{2}=\binom{2}{1}$, that is $1+1=2$, matching the single element of $\mathcal{D}_1$. [F1, F2, L2, step 2.1, algebra] ∎

## Remarks

- **Where the reflection is spent.** The level is $-1$ and not $0$: a Dyck path starts and ends at height $0$, so no path stays strictly above $0$, and it is only because heights are integers that the weak condition against $0$ is the strict condition against $-1$. The reflected starting height is $2(-1)-0=-2$, which is why the subtracted coefficient is the one attached to the endpoint pair from $-2$ to $0$.

- **The additive form is the one proved.** Writing the difference first would require knowing in advance that $\binom{2n}{n+1}\le\binom{2n}{n}$, which is a consequence of the identity rather than an input to it.
