---
id: ex-unit-group-modulo-one-hundred-decomposition
kind: example
title: "The unit group modulo one hundred is isomorphic to C_20 times C_2"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-unit-group-modulo-n-and-euler-totient, def-internal-direct-product-of-subgroups, thm-internal-direct-product-recognition, thm-fundamental-theorem-of-finite-abelian-groups-invariant-factor-form]
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

In the unit group $U(100)$, the class of $3$ has order $20$ and the class of $-1$ has order $2$. Their subgroups form an internal direct product, so $$U(100)\cong C_{20}\times C_2,$$ with invariant factors $2\mid20$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the example.

[L1] Let $n\ge1$ be an integer. Multiplication makes $\mathbb Z/n$ a commutative monoid with identity $[1]_n$ by thm-integers-modulo-n-basic-algebra. A class $u\in\mathbb Z/n$ is a **unit** when it is invertible in that monoid (def-invertible-element). The set of all units is $$(\mathbb Z/n)^\times:=\{\,u\in\mathbb Z/n:\text{some }v\in\mathbb Z/n\text{ satisfies }uv=[1]_n\,\}.$$ By lem-monoid-units-form-a-group, multiplication restricts to a group operation on $(\mathbb Z/n)^\times$, called the **unit group modulo $n$**. The quotient $\mathbb Z/n$ is finite with cardinality $n$ by thm-standard-representatives-modulo-n, and its unit set is a finite subset by thm-subset-of-a-finite-set. Euler's **totient function** is therefore defined for every positive integer $n$ by $$\varphi(n):=\big|(\mathbb Z/n)^\times\big|\in\mathbb N$$ (def-finite-cardinality). For $n=1$, the quotient has one element, which is its multiplicative identity and hence a unit, so $\varphi(1)=1$ follows from the definition. ([[def-unit-group-modulo-n-and-euler-totient]]).

[L2] Let $G$ be a group and let $N_0,\ldots,N_{r-1}$ be normal subgroups, where $r\in\mathbb N$. They form an **internal direct product** when they generate $G$ and, for each $i<r$, $$N_i\cap\langle N_j:j<r,\ j\ne i\rangle=\{e\}.$$ The empty family is an internal direct product of the trivial group. For two subgroups of an abelian group this says $G=HK$ and $H\cap K=\{e\}$; in additive notation one writes $G=H\oplus K$. Normal subgroups and generated subgroups are those of def-normal-subgroup and def-generated-subgroup, and the comparison product is def-external-direct-product-of-groups. ([[def-internal-direct-product-of-subgroups]]).

[L3] Let $N_0,\ldots,N_{r-1}\trianglelefteq G$. The following are equivalent: the $N_i$ form an internal direct product of $G$; every $g\in G$ has a unique expression $g=n_0\cdots n_{r-1}$ with $n_i\in N_i$; and the multiplication map $\mu:\prod_{i<r}N_i\to G$ is an isomorphism. These statements include the empty family and the one-factor case. ([[thm-internal-direct-product-recognition]]).

[L4] For every finite abelian group $G$ there is a unique list $$1<n_1\mid\cdots\mid n_r$$ such that $G\cong C_{n_1}\times\cdots\times C_{n_r}$. Moreover $|G|=n_1\cdots n_r$. The trivial group corresponds to the empty list and empty product. ([[thm-fundamental-theorem-of-finite-abelian-groups-invariant-factor-form]]).

## Verification

**Proof technique:** direct.

1.1 Successive powers of $3$ modulo $100$ are $$3,9,27,81,43,29,87,61,83,49,47,41,23,69,7,21,63,89,67,1.$$ Thus the first positive exponent giving $1$ is $20$, so $\operatorname{ord}(3)=20$. [given, L1]

2.1 The class of $-1$, represented by $99$, has order $2$. The list in step 1.1 contains all $20$ elements of $\langle3\rangle$ and does not contain $99$, so $-1\notin\langle3\rangle$. Hence the two cyclic subgroups intersect trivially. [step 1.1]

3.1 Trivial intersection makes the $20\cdot2=40$ products distinct. A unit representative modulo $100$ is divisible by neither $2$ nor $5$, since a multiple of either prime cannot have a product congruent to $1$ modulo $100$. Among $0,\ldots,99$, inclusion-exclusion leaves $100-50-20+10=40$ representatives divisible by neither. Thus $U(100)$ has at most $40$ elements, so the displayed products exhaust it. The two subgroups therefore form an internal direct product; recognition gives the isomorphism, and $2\mid20$ gives the invariant-factor order. [step 2.1, L1, L2, L3, L4] ∎
