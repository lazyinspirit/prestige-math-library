---
id: ex-four-square-congruence-for-an-odd-prime
kind: example
title: "The two intersecting square sets modulo $11$ give $1^2+3^2+1=11$"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [lem-four-square-congruence-for-primes, prop-every-nonzero-residue-mod-prime-is-a-sum-of-two-squares, def-congruence-modulo-an-integer]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Proofs by Descent, §6, Lemma 6.4"
      url: "https://kconrad.math.uconn.edu/blurbs/ugradnumthy/descent.pdf"
pipeline_run: null
---

## Example

Let $p=11$ and work with the representatives $0,1,\dots,10$. Put

$$Q=\{\,r: 0\le r\le 10 \text{ and } r\equiv y^2 \pmod{11} \text{ for some } y\in\mathbb Z\,\},\qquad R=\{\,r: 0\le r\le 10 \text{ and } r\equiv -1-y^2 \pmod{11} \text{ for some } y\in\mathbb Z\,\}.$$

Then $Q=\{0,1,3,4,5,9\}$ and $R=\{1,5,6,7,9,10\}$, each with $6=(11+1)/2$
elements, and $Q\cap R=\{1,5,9\}$. Taking the common value $1$, which is $1^2$
and is also congruent to $-1-3^2$, gives

$$1^2+3^2+1=11\equiv 0\pmod{11}.$$

This is the mechanism behind
[[prop-every-nonzero-residue-mod-prime-is-a-sum-of-two-squares]] at $a=-1$,
written out at $p=11$: two subsets of the $11$ residues, each of size $6$, cannot
be disjoint. That proposition supplies such a common value for every odd prime,
and [[lem-four-square-congruence-for-primes]] cites it rather than repeating the
count.

## Facts & Assumptions

**Given:** The prime $p=11$ and the sets $Q$ and $R$ displayed above.

[F1] For $a,b,n\in\mathbb Z$, $a\equiv b\pmod n$ means $n\mid(a-b)$ ([[def-congruence-modulo-an-integer]]).

[L1] For every prime $p$ there are integers $x,y$ with $x^2+y^2+1\equiv 0\pmod p$ ([[lem-four-square-congruence-for-primes]]).

[L2] Let $p$ be an odd prime and let $a\in\mathbb Z$ with $p\nmid a$. Then there are integers $x,y$ such that $x^2+y^2\equiv a\pmod p$ ([[prop-every-nonzero-residue-mod-prime-is-a-sum-of-two-squares]]).

## Verification

**Proof technique:** direct.

1.1 Since $y$ and $-y$ have the same square and $y\equiv y+11$ modulo $11$, every square residue is $y^2$ for some $y$ with $0\le y\le 5$; computing, $0^2=0$, $1^2=1$, $2^2=4$, $3^2=9$, $4^2=16\equiv 5$ and $5^2=25\equiv 3$, so $Q=\{0,1,3,4,5,9\}$. [given, F1, algebra]

2.1 For the same six values of $y$, $-1-0=-1\equiv 10$, $-1-1=-2\equiv 9$, $-1-4=-5\equiv 6$, $-1-9=-10\equiv 1$, $-1-16=-17\equiv 5$ and $-1-25=-26\equiv 7$ modulo $11$, so $R=\{1,5,6,7,9,10\}$. [step 1.1, F1, algebra]

3.1 Comparing the two displayed lists, $Q\cap R=\{1,5,9\}$; taking $r=1$ with $1\equiv 1^2$ from step 1.1 and $1\equiv -1-3^2$ from step 2.1 gives $1^2+3^2\equiv -1\pmod{11}$, hence $1^2+3^2+1=1+9+1=11\equiv 0\pmod{11}$, an instance of [L1] at $p=11$. [step 1.1, step 2.1, L1, F1, algebra]

4.1 The nonempty intersection exhibited in step 3.1 is exactly what [L2] asserts at $a=-1$ for an arbitrary odd prime, since $R$ is the set of residues of $a-y^2$ at $a=-1$; the argument at $p=11$ therefore instantiates the cited proposition rather than adding to it. [step 3.1, L2] ∎

## Remarks

**Why $11$ is a good modulus for this.** Here $11\equiv 3\pmod 4$ and $-1\equiv 10$ is not in $Q$, so $-1$ is not itself a square modulo $11$ and no pair with $y=0$ works. The example is therefore not a disguised one-square case: two squares are genuinely needed, which is what the cited proposition provides.

**Other solutions exist.** The intersection has the further common values $5$ and $9$: the value $5$ is $4^2$ and also $-1-4^2$ modulo $11$, giving $4^2+4^2+1=33=3\cdot 11$, and the value $9$ is $3^2$ and also $-1-1^2$, giving $3^2+1^2+1=11$. So the solution pair is not unique; the cited proposition asserts that at least one common value exists and says nothing about how many do.
