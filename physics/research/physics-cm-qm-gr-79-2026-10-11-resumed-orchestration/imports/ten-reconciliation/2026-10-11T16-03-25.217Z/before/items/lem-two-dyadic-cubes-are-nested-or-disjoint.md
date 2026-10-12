---
id: lem-two-dyadic-cubes-are-nested-or-disjoint
kind: lemma
title: "Two dyadic cubes are either disjoint or one contains the other"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-dyadic-cube-in-rn, def-half-open-box, def-integer-power, lem-power-laws, def-integers, thm-int-ordered-ring, lem-nat-embeds-int, lem-nat-discrete]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "T. Tao, An Introduction to Measure Theory (GSM 126), Exercise 1.1.14"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
pipeline_run: null
---

## Statement

Let $n \ge 1$ and let $Q$ and $Q'$ be dyadic cubes in $\mathbb{R}^n$
([[def-dyadic-cube-in-rn]]) of generations $k$ and $k'$ with $k \le k'$. If
$Q \cap Q' \ne \varnothing$ then $Q' \subseteq Q$. Consequently any two dyadic
cubes are either disjoint or one of them contains the other, and two dyadic cubes
of the same generation are either equal or disjoint.

## Facts & Assumptions

**Given:** A natural number $n \ge 1$ and dyadic cubes $Q = Q_{k,m}$ and $Q' = Q_{k',m'}$ with $k \le k'$.

[L1] $Q_{k,m} = \{\, x \in \mathbb{R}^n : m_i 2^{-k} < x_i \le (m_i+1)2^{-k} \text{ for every } i<n \,\}$, and every dyadic cube is nonempty ([[def-dyadic-cube-in-rn]]).

[L2] $B(a,b) := \{\, x \in \mathbb{R}^n : a_i < x_i \le b_i \ \text{ for every } i < n \,\}$ ([[def-half-open-box]]).

[F1] For $a \ne 0$ and $m,n \in \mathbb{Z}$, $a^{m+n} = a^m a^n$ ([[lem-power-laws]], claim 3; [[def-integer-power]]).

[F2] The order relation on $\mathbb{Z}$ is a total order compatible with addition: $x \le y$ implies $x + z \le y + z$ ([[thm-int-ordered-ring]]).

[F3] The canonical embedding of $\mathbb{N}$ into $\mathbb{Z}$ is injective and preserves addition, multiplication and order, and its image is exactly the set of nonnegative integers, so every $x \ge 0$ in $\mathbb{Z}$ is the image of a unique natural number ([[lem-nat-embeds-int]], [[def-integers]]).

[F4] For all $m, n \in \mathbb{N}$: $m < n$ if and only if $\sigma(m) \le n$ ([[lem-nat-discrete]]).

## Proof

**Proof technique:** direct.

1.1 Put $d := k'-k \ge 0$ and $M_i := m_i2^{d}$, an integer; then $m_i2^{-k} = M_i2^{-k'}$ and $(m_i+1)2^{-k} = (M_i + 2^{d})2^{-k'}$, so in coordinate $i$ the cube $Q$ is cut out by $M_i2^{-k'} < x_i \le (M_i+2^{d})2^{-k'}$ and the cube $Q'$ by $m'_i2^{-k'} < x_i \le (m'_i+1)2^{-k'}$. [L1, L2, F1]

1.2 For integers $u < v$ one has $u + 1 \le v$, since $v - u > 0$ is the image of a unique natural number, that natural is not $0$, hence it is at least $1$ and $v - u \ge 1$; consequently, for integers $A < B$ and $C$, if the real conditions $A < t \le B$ and $C < t \le C+1$ hold for some real $t$, then $A \le C$ and $C+1 \le B$, because $C < A$ would give $C+1 \le A$ and $t \le C+1 \le A$, contradicting $A<t$, while $B < C+1$ would give $B \le C$ and $t \le B \le C$, contradicting $C<t$. [F2, F3, F4]

2.1 If $x \in Q \cap Q'$ then step 1.2, applied in each coordinate with $A := M_i$, $B := M_i+2^{d}$, $C := m'_i$ and $t := 2^{k'}x_i$, gives $M_i \le m'_i$ and $m'_i + 1 \le M_i + 2^{d}$, so the parameter interval of $Q'$ in coordinate $i$ is contained in that of $Q$, and hence $Q' \subseteq Q$. [step 1.1, step 1.2, L1, L2]

3.1 For arbitrary dyadic cubes, relabel so that the generation of the first is the smaller, and step 2.1 gives the dichotomy; when the generations are equal, $Q' \subseteq Q$ and the symmetric conclusion $Q \subseteq Q'$ both hold, so $Q = Q'$. [step 2.1, L1] ∎
