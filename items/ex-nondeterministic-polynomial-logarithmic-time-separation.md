---
id: "ex-nondeterministic-polynomial-logarithmic-time-separation"
kind: "example"
title: "A nondeterministic polynomial/logarithmic time separation"
status: "draft"
origin: "pipeline"
deps: ["thm-nondeterministic-recursive-padding-separation"]
justified_by: []
landmark: false
provenance:
  statement: "ai-altered"
  proof: "ai-generated"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Seiferas, Fischer, and Meyer, Corollary 4.1, p. 155"
      url: https://www.researchgate.net/publication/220430544_Separating_Nondeterministic_Time_Complexity_Classes
proof_strategy: "direct"
---

## Example

For every fixed integer $k\ge2$, the class $\mathrm{NTIME}(\lceil(n+1)^k/\log_2(n+2)\rceil)$ is a proper subclass of $\mathrm{NTIME}((n+1)^k)$, using all-branch halting.

## Facts & Assumptions

**Given:** A fixed integer $k\ge2$.

[F1] For every exact clock $T\ge n$ there is a language in NTIME(T) outside every recursive a with $a\ge n$ and $a(n+1)=o(T(n))$ ([[thm-nondeterministic-recursive-padding-separation]]).

## Verification

1.1 Build a deterministic clock by first scanning the whole input, making k unary tapes of length $n+1$, and then executing k nested loops over those tapes. Each loop tape has endpoint marks and its head is the corresponding loop index; after a complete sweep return it to its left mark. The innermost loop makes at least one transition per index tuple. At depth j, a complete traversal including resets has cost at most a fixed multiple of $n+1$ times the cost at depth $j-1$, plus $O(n+1)$ reset work. Induction gives an upper bound $C_k(n+1)^k$ and the $(n+1)^k$ tuples give a positive lower bound of that order. Replace bookkeeping stays by right/left excursions if necessary. Make both input bits follow the same scan instructions, and halt after all loops. Its actual runtime $T_k(n)$ therefore depends only on n, is an exact clock, satisfies $T_k(n)\ge n$, and is $\Theta((n+1)^k)$. This uses no equivalence between a value constructor and an exact clock. [given, construct]

2.1 Put $g(n)=\lceil(n+1)^k/\log_2(n+2)\rceil$ and $a(n)=\max(n,g(n))$. These are total recursive integer functions: g(n) is the least positive integer j with $(n+2)^j\ge2^{(n+1)^k}$, an effective search using integer powers. Since $g(n)\le(n+1)^k/\log_2(n+2)+1$, for a fixed lower constant $c_k>0$ of $T_k$ one has $$\frac{a(n+1)}{T_k(n)}\le\frac{n+1}{c_k(n+1)^k}+\frac{(n+2)^k}{c_k(n+1)^k\log_2(n+3)}+\frac{1}{c_k(n+1)^k}\longrightarrow0.$$ The first term tends to zero because k is at least two; the ratio of the k-th powers in the second is bounded while its logarithm diverges. Thus a satisfies F1. [F1, step 1.1]

3.1 F1 supplies a language in NTIME($T_k$) outside NTIME(a). Constant-factor equivalence of $T_k$ and $(n+1)^k$ identifies their classes directly from the big-O definition. As $g\le a$, NTIME(g) is contained in NTIME(a), so that language also lies outside NTIME(g). Finally $g(n)\le(n+1)^k+1=O((n+1)^k)$ gives the inclusion NTIME(g) in the upper class by the same bound comparison. Combining inclusion and the witness makes it proper. At n=0, g(0)=a(0)=1; finite initial lengths do not disturb any class comparison. The construction is finite for each k and uses no AC. [F1, step 1.1, step 2.1] ∎
