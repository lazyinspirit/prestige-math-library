---
id: cor-number-of-abelian-groups-of-a-given-finite-order
kind: corollary
title: "The number of finite abelian groups of order n is the product of the partition numbers of the prime exponents of n"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-primary-decomposition-of-a-finite-abelian-group, cor-abelian-p-groups-of-order-pn-are-counted-by-partitions, thm-canonical-prime-factorisation, def-monoid-finite-product]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Decomposition of Finite Abelian Groups, §§1-4"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/finite-abelian.pdf"
    - title: "Richard Elman, Lectures on Abstract Algebra, Ch. 14"
      url: "https://www.math.ucla.edu/~rse/algebra_book.pdf"
pipeline_run: null
---
## Statement

If $n=\prod_p p^{a_p}$, then the number of isomorphism classes of abelian groups of order $n$ is $$\prod_p P(a_p),$$ where $P(a)$ is the number of partitions of $a$. For $n=1$ the empty product is $1$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[L1] If $G$ is finite abelian and $|G|=\prod_{i<r}p_i^{a_i}$ is its prime factorisation, then the subgroups $G(p_i)$ form an internal direct product of $G$. Thus $$G\cong\prod_{i<r}G(p_i).$$ For the trivial group, this is the empty product. ([[thm-primary-decomposition-of-a-finite-abelian-group]]).

[L2] For a prime $p$ and $n>0$, isomorphism classes of abelian groups of order $p^n$ are in bijection with partitions of $n$. For $n=0$, the unique group is the trivial group and corresponds separately to the empty partition. ([[cor-abelian-p-groups-of-order-pn-are-counted-by-partitions]]).

[L3] Powers are the natural powers of def-group-power and finite products those of def-monoid-finite-product, both taken in the commutative monoid $(\mathbb{Z},\cdot,1)$ of lem-units-of-z. Call $p : r \to \mathbb{Z}$ an **injective list of primes** when every $p_i$ is prime (def-prime) and $p_i = p_j$ forces $i = j$ (def-injection-surjection-bijection). Let $n \in \mathbb{Z}$ with $n \ge 1$ and let $p : r \to \mathbb{Z}$ be an injective list of primes such that every prime divisor of $n$ equals $p_i$ for some $i < r$. Then, with $v_q$ as in def-p-adic-valuation: 1. $\displaystyle n \;=\; \prod_{i<r} p_i^{\,v_{p_i}(n)}$; 2. $v_q(n) = 0$ for every prime $q$ that is not among $p_0,\dots,p_{r-1}$; 3. the exponents are determined by $n$: if $e : r \to \mathbb{N}$ and $n = \prod_{i<r} p_i^{\,e_i}$, then $e_j = v_{p_j}(n)$ for every $j < r$. Clause 3 needs only injectivity of the list, not the covering hypothesis. ([[thm-canonical-prime-factorisation]]).

[L4] Let $(M,\cdot,e)$ be a monoid (def-semigroup-and-monoid) and let $g : \mathbb{N} \to M$ be a family of elements of $M$, written $g_i := g(i)$. There is exactly one function $P_g : \mathbb{N} \to M$ satisfying $$P_g(0) = e, \qquad P_g(\sigma(n)) = P_g(n) \cdot g_n \quad (n \in \mathbb{N}),$$ and we write $$\prod_{i<n} g_i \;:=\; P_g(n), \qquad \text{also written } g_0 g_1 \cdots g_{n-1}.$$ In particular the **empty product** is $\prod_{i<0} g_i = e$, and $\prod_{i<1} g_i = e \cdot g_0 = g_0$. **Why the recursion is legitimate.** The clause $P_g(\sigma(n)) = P_g(n) \cdot g_n$ consults $n$ as well as $P_g(n)$, so thm-recursion does not apply to it directly. Apply that theorem instead with the set $A = \mathbb{N} \times M$, the element $a = (0,e)$, and the function $F : A \to A$ given by $F(n,x) = (\sigma(n),\, x \cdot g_n)$: it yields a unique $H : \mathbb{N} \to \mathbb{N} \times M$ with $H(0) = (0,e)$ and $H(\sigma(n)) = F(H(n))$. Writing $H(n) = (H_1(n), H_2(n))$, induction (thm-induction-principle) gives $H_1(n) = n$ for every $n$, since $H_1(0) = 0$ and $H_1(\sigma(n)) = \sigma(H_1(n))$. Hence $H(\sigma(n)) = (\sigma(n),\, H_2(n) \cdot g_n)$, so $P_g := H_2$ satisfies the two displayed equations. It is the only such function: if $Q$ satisfies them too, then $\{ n : P_g(n) = Q(n) \}$ contains $0$ and is closed under $\sigma$, hence is all of $\mathbb{N}$ by induction. **The value depends only on $g_0,\dots,g_{n-1}$.** If $g, g' : \mathbb{N} \to M$ satisfy $g_i = g'_i$ for every $i < n$, then $P_g(n) = P_{g'}(n)$. Indeed the set of $n$ for which this implication holds contains $0$, both products then being $e$; and if it holds at $n$, and $g, g'$ agree at every $i < \sigma(n)$, then they agree at every $i < n$ and also at $n$ itself, because $i < \sigma(n)$ is equivalent to $i \le n$ (lem-nat-order-is-membership), so $P_g(\sigma(n)) = P_g(n) \cdot g_n = P_{g'}(n) \cdot g'_n = P_{g'}(\sigma(n))$. Induction finishes it. This is what makes the notation $g_0 g_1 \cdots g_{n-1}$ unambiguous: it names a value determined by the first $n$ terms alone, and a finite list $u$ of length $n$, that is a function $u : n \to M$ on the von Neumann natural $n = \{0,\dots,n-1\}$ (def-natural-numbers), determines the product $\prod_{i<n} u_i := P_{\tilde u}(n)$ computed from any extension $\tilde u : \mathbb{N} \to M$ of $u$. ([[def-monoid-finite-product]]).

## Proof

**Proof technique:** direct.

1.1 Primary decomposition makes an abelian group of order $n$ the product of one abelian $p$-group of order $p^{a_p}$ for each prime divisor $p$. [given, L1, L2, L3, L4]

2.1 The choices for distinct primes are independent and the preceding corollary counts them by $P(a_p)$, so the product rule gives the formula. The empty prime factorisation of $1$ gives one choice. [step 1.1] ∎
