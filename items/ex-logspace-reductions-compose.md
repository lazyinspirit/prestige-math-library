---
id: ex-logspace-reductions-compose
kind: example
title: "Composing two logspace reductions through a virtual tape"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-logspace-many-one-reduction, lem-logspace-reductions-compose]
proof_strategy: direct
verification: {precheck: pass}
sources:
  references:
    - title: "Arora and Barak, Computational Complexity, Figure 3.3"
      url: "https://courses.cs.duke.edu/spring07/cps240/books/AB/ABbook.pdf"
---

## Example

Work over $\Sigma=\{0,1,\#\}$. Let $f(x)=0x\#x^{\mathrm{rev}}$. Let $g(y)$ output the first and last symbols of
$y$ when $y\ne\epsilon$, and set $g(\epsilon)=00$. Both total functions are
deterministic logspace transductions. To compute $g(f(x))$, a composed machine
asks for virtual cells $1$ and $|f(x)|$ rather than storing the string $f(x)$.
Let $A$ be the words starting with $1$, let $B$ be the nonempty words starting
with $0$ and ending with $1$, and let $C=\{01\}$. Then $f$ reduces $A$ to
$B$ and $g$ reduces $B$ to $C$.

## Facts & Assumptions

**Given:** an input $x$ of length $n$.

[L1] A reduction output can be recomputed at a requested position in logarithmic work space ([[def-logspace-many-one-reduction]]).

[L2] If $A\leq_{\log}B$ and $B\leq_{\log}C$, then $A\leq_{\log}C$ ([[lem-logspace-reductions-compose]]).

## Verification

**Proof technique:** direct computation.

1.1 The first requested virtual symbol is $0$. Maintain a counter to find $|f(x)|=2n+2$ and recompute the final virtual symbol, which is $x_1$ when $n>0$ and $\#$ when $n=0$. Forward and backward scans emit $f$, while two endpoint scans emit $g$; both use at most logarithmic work space and halt on every input. [L1, construct]

2.1 Thus the composed output is $0x_1$ for $n>0$ and $0\#$ for $n=0$, exactly $g(f(x))$; it used only counters and a reread of $x$. [L1, step 1.1, cases]

3.1 The word $f(x)$ lies in $B$ exactly when $x$ starts with $1$, and $g(y)=01$ exactly when $y$ starts with $0$ and ends with $1$; the empty input maps to $00$. Thus these are total logspace reductions $A\leq_{\log}B\leq_{\log}C$, and the explicit virtual computation illustrates their composition in [L2]. [L2, step 2.1, algebra] ∎
