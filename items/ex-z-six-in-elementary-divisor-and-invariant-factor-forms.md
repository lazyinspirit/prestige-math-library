---
id: ex-z-six-in-elementary-divisor-and-invariant-factor-forms
kind: example
title: "The cyclic group of order six in elementary-divisor and invariant-factor forms"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-fundamental-theorem-of-finite-abelian-groups-elementary-divisor-form, thm-fundamental-theorem-of-finite-abelian-groups-invariant-factor-form, thm-chinese-remainder-theorem, prop-integers-modulo-n-as-a-quotient-group]
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
## Example

The Chinese remainder isomorphism gives $$C_6\cong C_2\times C_3.$$ Thus the elementary divisors are $2$ and $3$, while the invariant-factor list is the single entry $6$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the example.

[L1] Every finite abelian group is isomorphic to a finite direct product of cyclic groups of prime-power order. The multiset of their orders is uniquely determined by the group, up to permutation of the factors. ([[thm-fundamental-theorem-of-finite-abelian-groups-elementary-divisor-form]]).

[L2] For every finite abelian group $G$ there is a unique list $$1<n_1\mid\cdots\mid n_r$$ such that $G\cong C_{n_1}\times\cdots\times C_{n_r}$. Moreover $|G|=n_1\cdots n_r$. The trivial group corresponds to the empty list and empty product. ([[thm-fundamental-theorem-of-finite-abelian-groups-invariant-factor-form]]).

[L3] Let $n_0,\ldots,n_{r-1}$ be a finite pairwise-coprime list of positive integers and let $N:=\prod_{i<r}n_i$. The map $$\Phi:\mathbb Z/N\longrightarrow\prod_{i<r}\mathbb Z/n_i,\qquad[x]_N\longmapsto([x]_{n_i})_{i<r},$$ is a bijection. It preserves addition, multiplication, $[0]$, and $[1]$ componentwise. For the empty list, $N=1$ and both sides have one element. ([[thm-chinese-remainder-theorem]]).

[L4] For every $n\in\mathbb N$, view $n$ as its canonical nonnegative integer and put $n\mathbb Z:=\{nk:k\in\mathbb Z\}$. Then the left cosets of $n\mathbb Z$ in $(\mathbb Z,+)$ are exactly the congruence classes modulo $n$, and coset addition is the published addition of congruence classes. Thus $$(\mathbb Z,+)/n\mathbb Z=(\mathbb Z/n,+)$$ as the same group on the same underlying set. This includes $n=0$ and $n=1$. ([[prop-integers-modulo-n-as-a-quotient-group]]).

## Verification

**Proof technique:** direct.

1.1 The residue map $[x]_6\mapsto([x]_2,[x]_3)$ is an isomorphism by the Chinese remainder theorem. [given, L1, L2, L3, L4]

2.1 The factors $C_2,C_3$ have prime-power orders, so $\{2,3\}$ is the elementary-divisor multiset; regrouping the coprime factors gives the invariant factor $6$. [step 1.1] ∎
