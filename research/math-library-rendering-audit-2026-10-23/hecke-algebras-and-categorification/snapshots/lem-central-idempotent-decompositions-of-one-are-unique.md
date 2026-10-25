---
id: lem-central-idempotent-decompositions-of-one-are-unique
kind: lemma
title: "Decompositions of the identity into primitive central idempotents are unique"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-ring]
justified_by: []
aliases: []
landmark: false
dependency_level: 0
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  scraped: []
  references:
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete prepublication manuscript (1998; expanded published edition: AMS University Lecture Series 15, 1999); complete 79-page manuscript, SHA-256 8cfeb611a95a3ff25cb95ad22bfd3a68475818301c34b04d131a8480a1b997e0"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Chapter 2, printed pp. 9-10: the standard orthogonal-idempotent calculus behind the block decomposition (the uniqueness argument is proved locally and is not quoted from the source)"
---

## Statement

Let $A$ be a unital ring ([[def-ring]]), with centre
$Z(A):=\{z\in A: za=az\text{ for all }a\in A\}$. Suppose that
$$1=e_1+\cdots+e_k=f_1+\cdots+f_\ell$$
where $\{e_1,\dots,e_k\}$ and $\{f_1,\dots,f_\ell\}$ are finite families of
pairwise orthogonal central idempotents of $A$ that are primitive among central
idempotents: each is nonzero and admits no decomposition as a sum of two nonzero
orthogonal central idempotents (zero parts are omitted). Then $k=\ell$ and there
is a bijection $\sigma$ of the index sets with $e_i=f_{\sigma(i)}$ for all $i$;
in particular the decomposition of $1$ into primitive central idempotents is
unique up to order. No choice principle is used, the families being finite.

## Facts & Assumptions

**Given:** A unital ring $A$ with centre $Z(A)=\{z\in A:za=az\text{ for all }a\in A\}$; finite families $e_1,\dots,e_k$ and $f_1,\dots,f_\ell$ of pairwise orthogonal nonzero central idempotents of $A$ that are primitive among central idempotents, with $1=e_1+\cdots+e_k=f_1+\cdots+f_\ell$.

[F1] Ring axioms and the zero ring: $(A,+,0)$ is an abelian group, multiplication is associative with two-sided identity $1$ and distributes over addition on both sides, and a ring in which $1=0$ has exactly one element ([[def-ring]]).

## Proof

**Proof technique:** direct.

1.1 If $k=0$ or $\ell=0$ then $1=0$ in $A$, so $A$ has exactly one element by [F1], namely $0$; then no nonzero idempotent exists and the two families are empty, $k=\ell=0$, and the empty map is the required bijection. Assume henceforth that $k,\ell\ge1$. [given, F1]

1.2 For central idempotents $e,f\in A$ the products $ef$ and $e(1-f)$ are central idempotents with $ef+e(1-f)=e$ and $ef\cdot e(1-f)=0$: centrality gives $(ef)a=e(fa)=e(af)=(ea)f=(ae)f=a(ef)$ and $(1-f)a=a-af=a-fa=a(1-f)$ for all $a\in A$; idempotence gives $(ef)^2=efef=e^2f^2=ef$ and $(1-f)^2=1-2f+f^2=1-f$, hence $e(1-f)e(1-f)=e^2(1-f)^2=e(1-f)$; distributivity gives $ef+e(1-f)=e(f+1-f)=e$ and $ef\cdot e(1-f)=e^2f(1-f)=0$. [F1, given, algebra]

2.1 If $e$ is primitive and $f$ is a central idempotent, then $ef\in\{0,e\}$: by step 1.2, $e=ef+e(1-f)$ exhibits $e$ as a sum of the two orthogonal central idempotents $ef$ and $e(1-f)$, so primitivity forces $ef=0$ or $e(1-f)=0$; in the second case step 1.2 gives $ef=ef+0=ef+e(1-f)=e$. [step 1.2, given]

3.1 Fix $j\in\{1,\dots,\ell\}$. Since $1=e_1+\cdots+e_k$, distributivity and centrality give $f_j=f_j\cdot1=\sum_i f_je_i=\sum_i e_if_j$, and step 2.1 gives $e_if_j\in\{0,e_i\}$ for every $i$; since $f_j\ne0$, the set $S_j:=\{i: e_if_j=e_i\}$ is nonempty and $f_j=\sum_{i\in S_j}e_i$. [given, step 2.1, F1, algebra]

4.1 For every $j$ the set $S_j$ is a singleton: its elements $e_i$ are pairwise orthogonal nonzero central idempotents summing to $f_j$ by step 3.1, so if $S_j$ contained distinct $i\ne i'$ then $f_j=e_i+\sum_{i''\in S_j,\ i''\ne i}e_{i''}$ would exhibit $f_j$ as a sum of the two orthogonal central idempotents $e_i$ and $f_j-e_i$, both nonzero since multiplying the second sum by the nonzero idempotent $e_{i'}$ retrieves $e_{i'}$, contradicting primitivity of $f_j$; hence $S_j=\{i(j)\}$ and $f_j=e_{i(j)}$. [step 3.1, given, algebra]

5.1 The map $j\mapsto i(j)$ is injective: if $i(j)=i(j')=i$ with $j\ne j'$, then $e_i=e_i^2=f_jf_{j'}=0$ by idempotence, centrality and pairwise orthogonality of the $f$'s, contradicting $e_i\ne0$. [step 4.1, given, algebra]

5.2 The map $j\mapsto i(j)$ is surjective: from $f_j=e_{i(j)}$ for all $j$ and both decompositions, $\sum_je_{i(j)}=1=\sum_ie_i$; multiplying this equality by the central idempotent $e_i$ and using pairwise orthogonality of the $e$'s gives $e_i$ on the left when $i$ lies in the image of $j\mapsto i(j)$ and $0$ otherwise, while the right side is $e_i\ne0$; hence every $i$ lies in the image. [step 4.1, given, F1, algebra]

6.1 Steps 5.1 and 5.2 make $j\mapsto i(j)$ a bijection $\{1,\dots,\ell\}\to\{1,\dots,k\}$ with $f_j=e_{i(j)}$ for all $j$ by step 4.1; its inverse $\sigma$ satisfies $e_i=f_{\sigma(i)}$ for all $i$, and $k=\ell$. Since the families were arbitrary, the decomposition of $1$ into primitive central idempotents is unique up to order, as claimed. [step 4.1, step 5.1, step 5.2] ∎
