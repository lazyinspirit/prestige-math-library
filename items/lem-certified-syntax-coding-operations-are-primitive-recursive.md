---
id: lem-certified-syntax-coding-operations-are-primitive-recursive
kind: lemma
title: "Primitive-recursive sentinel coding for certified syntax"
status: draft
origin: pipeline
deps: [def-effective-theory-and-certified-godel-numbering, def-bounded-arithmetic-formula, lem-bounded-quantifiers-preserve-primitive-recursiveness]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Klaus Sutner, Primitive Recursion — Printed slides 13–38, 42–59; bounded-search exercise supplied by the local formula"
      url: "https://www.cs.cmu.edu/~cdm/resources/00-primrec.pdf"
    - title: "Klaus Sutner, Coding Functions — Printed slides 9–35; coding/state recursion framework, with the sentinel variant proved locally"
      url: "https://www.cs.cmu.edu/~cdm/resources/02-coding.pdf"
---


## Statement

In ZF the sentinel list encoding is injective. Validity, total length, coordinates, append, concatenation and every fixed-arity encoder are primitive recursive, with the stipulated defaults. A recursion on a fixed finite register tuple with primitive-recursive updates, and a recursion retaining its finite history, are primitive recursive. No universal evaluator or unbounded minimization is assumed.

## Facts & Assumptions

[F1] [[def-bounded-arithmetic-formula]]: Work in the first-order language $0,S,+,\cdot,<,=$ over the natural numbers of def-natural-numbers. A quantifier is **bounded**
when it has the form $\exists u<t(\vec x)$ or $\forall u<t(\vec x)$, where
$t$ is an arithmetic term. A formula is **bounded** when every one of its
quantifiers is bounded.

For the normal-form presentation of the arithmetical hierarchy on this page,
we also permit an arbitrary primitive-recursive predicate $R(\vec x)$ as the quantifier-free matrix. Here the primitive-recursive functions are exactly those obtained by finitely many applications of composition and primitive recursion from zero functions, successor, and coordinate projections. Zero functions of every arity, including the nullary constant $0$, are allowed; the projections are $P_i^k(x_1,\ldots,x_k)=x_i$ for $1\leq i\leq k$. Composition substitutes functions of one common arity into the arguments of another. Primitive recursion takes functions $g$ of arity $k$ and $h$ of arity $k+2$ to $f$ of arity $k+1$ with
$$f(0,\vec x)=g(\vec x),\qquad f(m+1,\vec x)=h(m,f(m,\vec x),\vec x).$$
These clauses define a unique total function: for each fixed $\vec x$, apply thm-recursion on $\mathbb N^2$ with initial value $(0,g(\vec x))$ and transition $(m,y)\mapsto(m+1,h(m,y,\vec x))$, then take the second coordinate. Uniqueness for each parameter tuple makes this one well-defined function of all its arguments. A predicate is primitive recursive when its characteristic function, taking value $1$ exactly where it holds and $0$ elsewhere, is such a function.

This is an additional presentation convention: it does not assert that every
primitive-recursive predicate is definable by a bounded formula in the bare
first-order language chosen above.

[F2] [[lem-bounded-quantifiers-preserve-primitive-recursiveness]]: If $R(\vec x,u)$ is primitive recursive and $t(\vec x)$ is primitive
recursive, then each relation
$$ \exists u<t(\vec x)\ R(\vec x,u),\qquad \forall u<t(\vec x)\ R(\vec x,u) $$
is primitive recursive.

## Proof

**Given:** The sentinel convention of the preceding definition and the initial-function/parameter-recursion class; all computations are on natural numbers.

1.1 From the initial functions and parameter recursion in F1 define $a+0=a$, $a+S n=S(a+n)$, $a\cdot0=0$, $a\cdot S n=a\cdot n+a$, $\operatorname{pred}(0)=0$, $\operatorname{pred}(S n)=n$, and $a\mathbin{\dot{-}}0=a$, $a\mathbin{\dot{-}} S n=\operatorname{pred}(a\mathbin{\dot{-}} n)$. Set $z(0)=1,z(S n)=0$. Then equality is $z((a\mathbin{\dot{-}} b)+(b\mathbin{\dot{-}} a))$ and $a\le b$ has characteristic function $z(a\mathbin{\dot{-}} b)$. Products, complements and $rg+(1-r)h$ implement Boolean tests and case splits for a 0–1 test $r$. Bounded sums/products have initial values 0/1 and append one term, so are primitive recursive. [F1, given]

2.1 For a 0–1 predicate $r$, $\sum_{j<N}\prod_{i\le j}(1-r(i))$ counts the unsuccessful initial positions: it equals the least successful index, or $N$ if none succeeds. This explicitly proves bounded search, consistent with bounded closure F2. Powers satisfy $b^0=1,b^{n+1}=b\cdot b^n$. For $d>0$ put $q(a,d)=\sum_{j=1}^a[dj\le a]$ and $r(a,d)=a\mathbin{\dot{-}} dq(a,d)$, and set both to 0 for $d=0$. The successful indices are exactly $1,\ldots,q$; thus $dq\le a<d(q+1)$, giving quotient and remainder. Every operation just defined is primitive recursive. [F2, step 1.1]

3.1 Put $P(u,v)=(u+v)^2+u$. For a fixed sum $t$, its values occupy $[t^2,t^2+t]$ with distinct offsets $u$; the next interval starts at $(t+1)^2>t^2+t$. Hence $P$ is injective. Both coordinates are at most $P(u,v)$, including $(0,0)$. Bounded search therefore gives its range test and inverses, with zero off-range. Nesting a fixed number of these pairs stores a fixed register tuple. Decode, apply the finitely many update functions, and encode again: ordinary primitive recursion on the one state code implements the simultaneous register recursion, regardless of how large the registers grow. [step 1.1, step 2.1]

4.1 For $s>0$, its binary width is $\ell(s)=1+\sum_{j=1}^s[2^j\le s]$, and $\ell(0)=1$. Indeed the powers of two are strictly increasing and $2^s>s$ for $s\ge1$ including s=1; induction proves this bound. Thus the counted indices give the largest exponent below $s$. The left-to-right bit at $j<\ell(s)$ is the remainder modulo 2 of the quotient of $s$ by $2^{\ell(s)-1-j}$; elsewhere return zero. Horner updating $v\mapsto2v+b$ evaluates any specified payload. These are primitive-recursive register computations by steps 2.1–3.1. [step 2.1, step 3.1]

5.1 Parse the canonical binary word of $s>0$. After the initial 1, count the consecutive 1s to the first 0; failure to find that delimiter is invalid. Their number is $k$. At each of $k$ block starts $p$, find the next zero below $\ell(s)$ and let $m$ be its distance. Require $m\ge1$, require $m$ payload bits after the delimiter to fit, and require their first bit to be 1 unless $m=1$. Evaluate those bits by Horner and advance by $2m+1$. Finally require the position to equal $\ell(s)$. Each scan and block loop has at most $\ell(s)+1$ iterations. A persistent error flag freezes invalid states. The counters, current position, flag and requested entry are finitely many registers, so step 3.1 proves primitive recursiveness. At the end reset length and coordinates to zero on failure, and coordinates to zero outside $0\le j<k$. [step 3.1, step 4.1]

6.1 The header and every block delimiter determine their lengths uniquely. Each canonical payload therefore recovers its unique original natural number. Induction over the blocks proves that parsing an encoded list returns that list; conversely, a successful parse consumes the whole word and reconstruction reproduces it. Thus two lists with the same code have equal length and equal entries. The word 10 has k=0 and no payload, so parses successfully as the empty list. [step 5.1]

7.1 For construction represent a word by value and width $(v,L)$; concatenating $(w,M)$ gives $(v2^M+w,L+M)$. The length-k header is $(2^{k+2}-2,k+2)$. For $m=\ell(a)$ the entry block has width $2m+1$ and value $(2^m-1)2^{m+1}+a$. Fixed-arity encoders concatenate finitely many such blocks. Append and concatenation build the enlarged header and copy coordinates from the validated inputs, followed by the new entry or second list, using their lengths as bounds. Induction on the number copied gives exactly the required output list. Invalid inputs return 2. Finally a history recursion stores its current list code, computes the primitive-recursive next value from it and appends. This is one ordinary parameter recursion; retrieving a coordinate supplies the result. [step 1.1, step 3.1, step 5.1, step 6.1] ∎

