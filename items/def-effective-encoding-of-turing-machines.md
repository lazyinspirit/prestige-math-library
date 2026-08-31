---
id: def-effective-encoding-of-turing-machines
kind: definition
title: "A fixed effective binary encoding of deterministic one-tape Turing machines"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-deterministic-one-tape-turing-machine, def-effective-binary-encoding-and-decoder, lem-finite-tuples-admit-effective-prefix-free-encodings]
justified_by: []
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Richard Zach, Sets, Logic, Computation: An Open Introduction to Metalogic"
      url: "https://slc.openlogicproject.org/slc-screen.pdf"
    - title: "Michael Sipser, MIT 18.404J Theory of Computation, Lecture 6: TM Variants, Church-Turing Thesis"
      url: "https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/7405f6112c8ca7242e1edd9a021c1e63_MIT18_404f20_lec6.pdf"
---

## Definition

For this page, a **coded deterministic one-tape Turing machine** is presented
in the normalized numeric form
$$ M=(m,s,n,\tau), $$
where:

- $m\ge 3$, and the state set is $Q_m:=\{0,\dots,m-1\}$ with start state $0$,
  accept state $1$, and reject state $2$;
- $n\ge 1$, and the tape alphabet is $\Gamma_n:=\{0,\dots,n-1\}$ with blank
  symbol $0$;
- $0\le s<n$, and the input alphabet is $\Sigma_s:=\{1,\dots,s\}$;
- $\tau$ is a total function
  $$ \tau:(Q_m\setminus\{1,2\})\times\Gamma_n\to Q_m\times\Gamma_n\times\{0,1\}, $$
  where the last coordinate encodes the move direction by
  $$ 0=L,\qquad 1=R. $$

By [[def-deterministic-one-tape-turing-machine]], each such tuple determines a
deterministic one-tape Turing machine, and on this page we use this numeric
presentation as the machine description to be encoded.

Let $\operatorname{bin}(r)$ denote the usual binary numeral for a natural
number $r$, with $\operatorname{bin}(0)=0$. List the source pairs
$(q,a)\in(Q_m\setminus\{1,2\})\times\Gamma_n$ in lexicographic order, and for
each such pair write
$$ \tau(q,a)=\bigl(q',a',d\bigr). $$
The **description tuple** of $M$ is the finite tuple of binary words
$$ \operatorname{Desc}(M):=\bigl(\operatorname{bin}(m),\operatorname{bin}(s),\operatorname{bin}(n),\operatorname{bin}(q'_1),\operatorname{bin}(a'_1),\operatorname{bin}(d_1),\dots,\operatorname{bin}(q'_N),\operatorname{bin}(a'_N),\operatorname{bin}(d_N)\bigr), $$
where $N=(m-2)n$ and the triples are listed in the same lexicographic source
order.

For a binary word $w$, put $c(w):=1^{|w|}0w$. For every finite nonempty tuple
of binary words define one variable-arity encoder by
$$E(w_1,\dots,w_k):=1^k0c(w_1)\cdots c(w_k).$$
The first $0$ recovers the arity $k$, and the self-delimiting blocks then
recover the entries. Different arities have different unary headers, so this
single encoder is injective and prefix-free across all finite positive arities;
for each fixed arity it is the construction from
[[lem-finite-tuples-admit-effective-prefix-free-encodings]].

The **chosen code** of $M$, written $\ulcorner M\urcorner$, is
$$\ulcorner M\urcorner:=E(\operatorname{Desc}(M)).$$

Its total decoder first parses the unary arity and the indicated
self-delimiting blocks. It then checks that every entry is a canonical binary
numeral, that the first three entries give $m\ge3$, $n\ge1$, and $0\le s<n$,
that the arity is $3+3(m-2)n$, and that every transition triple lies in
$Q_m\times\Gamma_n\times\{0,1\}$. If every check succeeds, it returns the
unique coded machine determined by those data; otherwise it returns a fixed
malformed-code symbol. Thus the chosen machine coding is effective in the
sense of [[def-effective-binary-encoding-and-decoder]].

## Remarks

- This coding fixes one concrete syntax for machine descriptions. Universality
  on this page is always relative to that syntax.

- The coding describes machines, not the partial functions or languages they
  induce. Different coded machines may still compute the same mathematical
  function.
