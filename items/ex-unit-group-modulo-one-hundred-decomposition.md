---
id: ex-unit-group-modulo-one-hundred-decomposition
kind: example
title: "The unit group modulo one hundred is isomorphic to C_20 times C_2"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-unit-group-modulo-n-and-euler-totient, thm-eulers-theorem, def-internal-direct-product-of-subgroups, thm-internal-direct-product-recognition, thm-fundamental-theorem-of-finite-abelian-groups-invariant-factor-form]
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

[L2] Let $n\ge1$ be an integer and let $a\in\mathbb Z$. If $\gcd(a,n)=1$, then $$a^{\varphi(n)}\equiv1\pmod n.$$ ([[thm-eulers-theorem]]).

[L3] Let $G$ be a group and let $N_0,\ldots,N_{r-1}$ be normal subgroups, where $r\in\mathbb N$. They form an **internal direct product** when they generate $G$ and, for each $i<r$, $$N_i\cap\langle N_j:j<r,\ j\ne i\rangle=\{e\}.$$ The empty family is an internal direct product of the trivial group. For two subgroups of an abelian group this says $G=HK$ and $H\cap K=\{e\}$; in additive notation one writes $G=H\oplus K$. Normal subgroups and generated subgroups are those of def-normal-subgroup and def-generated-subgroup, and the comparison product is def-external-direct-product-of-groups. ([[def-internal-direct-product-of-subgroups]]).

[L4] Let $N_0,\ldots,N_{r-1}\trianglelefteq G$. The following are equivalent: the $N_i$ form an internal direct product of $G$; every $g\in G$ has a unique expression $g=n_0\cdots n_{r-1}$ with $n_i\in N_i$; and the multiplication map $\mu:\prod_{i<r}N_i\to G$ is an isomorphism. These statements include the empty family and the one-factor case. ([[thm-internal-direct-product-recognition]]).

[L5] For every finite abelian group $G$ there is a unique list $$1<n_1\mid\cdots\mid n_r$$ such that $G\cong C_{n_1}\times\cdots\times C_{n_r}$. Moreover $|G|=n_1\cdots n_r$. The trivial group corresponds to the empty list and empty product. ([[thm-fundamental-theorem-of-finite-abelian-groups-invariant-factor-form]]).

## Verification

**Proof technique:** direct.

1.1 Direct computation gives $3^{10}\equiv49\pmod{100}$ and $3^{20}\equiv1\pmod{100}$, while the proper divisors $1,2,4,5,10$ do not give $1$; hence $\operatorname{ord}(3)=20$. [given, L1, L2, L3, L4, L5]

2.1 The class of $-1$ has order $2$ and is not a power of $3$, so the two cyclic subgroups intersect trivially. [step 1.1]

3.1 Their product has $20\cdot2=40=\varphi(100)$ elements and therefore equals $U(100)$. Internal-product recognition gives the isomorphism and the invariant-factor order. [step 2.1] ∎
