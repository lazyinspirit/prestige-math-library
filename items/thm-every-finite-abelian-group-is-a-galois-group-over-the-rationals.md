---
id: thm-every-finite-abelian-group-is-a-galois-group-over-the-rationals
kind: theorem
title: "Every finite abelian group is the Galois group of some finite Galois extension of $\\mathbb Q$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-infinitely-many-primes-congruent-to-one-modulo-n, lem-a-finite-abelian-group-is-a-quotient-of-a-power-of-a-cyclic-group, cor-the-galois-group-of-a-rational-cyclotomic-field, cor-cyclotomic-extensions-are-abelian, thm-chinese-remainder-theorem, thm-normal-subgroups-and-quotients-in-the-galois-correspondence, thm-fundamental-theorem-of-finite-galois-theory, cor-finite-subgroups-of-units-in-a-domain-are-cyclic, thm-z-mod-p-is-a-field, cor-totient-at-one-and-at-a-prime, thm-classification-of-cyclic-groups, thm-first-isomorphism-theorem-groups, def-quotient-group, def-normal-subgroup, def-unit-group-modulo-n-and-euler-totient, def-cyclotomic-extension, def-external-direct-product-of-groups, def-integers-modulo-n, def-congruence-modulo-an-integer, thm-integers-modulo-n-basic-algebra, def-finite-galois-extension-and-galois-group, def-common-divisor-and-gcd, def-coprime, def-countable, def-field, def-prime, def-divides-in-z, thm-rat-ordered-field, def-ring-characteristic]
justified_by: []
forward_refs: [fs-every-finite-abelian-group-is-the-galois-group-of-a-cyclotomic-field]
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory (course notes/monograph), Corollary 9.12"
      url: "https://web.archive.org/web/2023/http://alpha.math.uga.edu/~pete/FieldTheory.pdf"
    - title: "K. Conrad, Cyclotomic Extensions (expository blurb), Section 5"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/cyclotomic.pdf"
pipeline_run: null
---

## Statement

For every finite abelian group $G$ there is a finite Galois extension
$L/\mathbb Q$ ([[def-finite-galois-extension-and-galois-group]]) with

$$\operatorname{Gal}(L/\mathbb Q)\cong G,$$

and $L$ may be taken inside a cyclotomic field $\mathbb Q(\mu_N)$
([[def-cyclotomic-extension]]).

## Facts & Assumptions

**Given:** A finite abelian group $G$; $\mathbb Q$ is an ordered field ([[thm-rat-ordered-field]]), so $\operatorname{char}\mathbb Q=0$ ([[def-ring-characteristic]]) and divides no positive integer ([[def-divides-in-z]]).

[L1] There are positive integers $n,k$ and a surjective group homomorphism $(\mathbb Z/n)^{k}\to G$ ([[lem-a-finite-abelian-group-is-a-quotient-of-a-power-of-a-cyclic-group]], [[def-external-direct-product-of-groups]]).

[L2] For every $n\ge1$ the set of primes $p$ with $p\equiv1\pmod n$ is not finite ([[thm-infinitely-many-primes-congruent-to-one-modulo-n]], [[def-congruence-modulo-an-integer]], [[def-countable]], [[def-prime]]).

[L3] For a finite pairwise-coprime list $n_0,\dots,n_{r-1}$ of positive integers with $N=\prod_i n_i$, the map $[x]_N\mapsto([x]_{n_i})_i$ is a bijection $\mathbb Z/N\to\prod_i\mathbb Z/n_i$ preserving addition, multiplication, $[0]$ and $[1]$ ([[thm-chinese-remainder-theorem]], [[def-integers-modulo-n]], [[thm-integers-modulo-n-basic-algebra]], [[def-coprime]], [[def-common-divisor-and-gcd]]).

[L4] $(\mathbb Z/p)^{\times}$ is a finite subgroup of the unit group of the field $\mathbb Z/p$, hence cyclic ([[cor-finite-subgroups-of-units-in-a-domain-are-cyclic]], [[thm-z-mod-p-is-a-field]], [[def-field]]), of order $\varphi(p)=p-1$ ([[cor-totient-at-one-and-at-a-prime]], [[def-unit-group-modulo-n-and-euler-totient]]).

[L5] A cyclic group of finite order $m$ is isomorphic to $(\mathbb Z/m,+)$ ([[thm-classification-of-cyclic-groups]]).

[L6] $\operatorname{Gal}(\mathbb Q(\mu_N)/\mathbb Q)\cong(\mathbb Z/N)^{\times}$ ([[cor-the-galois-group-of-a-rational-cyclotomic-field]]), and this group is abelian ([[cor-cyclotomic-extensions-are-abelian]]).

[L7] For $K/\mathbb Q$ finite Galois with group $G'$ and $H\le G'$, the field $K^{H}$ is an intermediate field ([[thm-fundamental-theorem-of-finite-galois-theory]]); it is Galois over $\mathbb Q$ exactly when $H$ is normal ([[def-normal-subgroup]]), and then $\operatorname{Gal}(K^{H}/\mathbb Q)\cong G'/H$ ([[thm-normal-subgroups-and-quotients-in-the-galois-correspondence]], [[def-quotient-group]]).

[L8] For a homomorphism $f:A\to B$ the rule $a\ker f\mapsto f(a)$ is an isomorphism $A/\ker f\to\operatorname{im}f$ ([[thm-first-isomorphism-theorem-groups]]).

## Proof

**Proof technique:** direct.

1.1 Fix $n,k\ge1$ and a surjection $\pi\colon(\mathbb Z/n)^{k}\to G$ by [L1]. [L1]

2.1 Choose pairwise distinct primes $p_1,\dots,p_k$ with $p_i\equiv1\pmod n$: the set of such primes is not finite by [L2], so at each of the $k$ steps one may pick a prime outside the finitely many already chosen. Put $N:=p_1\cdots p_k$. [step 1.1, L2]

3.1 Distinct primes are coprime: a positive common divisor of $p_i$ and $p_j$ is $1$ or $p_i$, and is $1$ or $p_j$, so if it is not $1$ then $p_i=p_j$. Hence $p_1,\dots,p_k$ is a pairwise-coprime list. [step 2.1, given, algebra]

3.2 For each $i$ there is a surjective homomorphism $(\mathbb Z/p_i)^{\times}\to\mathbb Z/n$: by [L4] the group $(\mathbb Z/p_i)^{\times}$ is cyclic of order $m_i=p_i-1$, which $n$ divides by step 2.1; [L5] identifies it with $(\mathbb Z/m_i,+)$, and $[a]_{m_i}\mapsto[a]_n$ is well defined because $n\mid m_i$, is a homomorphism, and is onto. [step 2.1, L4, L5]

4.1 By [L3] the map $[x]_N\mapsto([x]_{p_i})_i$ is a bijection $\mathbb Z/N\to\prod_i\mathbb Z/p_i$ preserving multiplication and $[1]$, so it carries units to units bijectively and restricts to a group isomorphism $(\mathbb Z/N)^{\times}\to\prod_i(\mathbb Z/p_i)^{\times}$. [step 3.1, L3]

5.1 Taking the product of the maps of step 3.2 and composing with step 4.1 and with $\pi$ gives a surjective group homomorphism $\Psi_0\colon(\mathbb Z/N)^{\times}\to G$; composing with the isomorphism of [L6] gives a surjective homomorphism $\Psi\colon\operatorname{Gal}(\mathbb Q(\mu_N)/\mathbb Q)\to G$. [step 1.1, step 4.1, step 3.2, L6]

6.1 Put $G':=\operatorname{Gal}(\mathbb Q(\mu_N)/\mathbb Q)$ and $H:=\ker\Psi$. The group $G'$ is abelian by [L6], so every subgroup is normal, $gHg^{-1}=H$ holding for all $g$; hence $L:=\mathbb Q(\mu_N)^{H}$ is an intermediate field, $L/\mathbb Q$ is finite Galois, and $\operatorname{Gal}(L/\mathbb Q)\cong G'/H$ by [L7]. [step 5.1, L6, L7]

7.1 By [L8] applied to $\Psi$, which is surjective, $G'/H\cong\operatorname{im}\Psi=G$; hence $\operatorname{Gal}(L/\mathbb Q)\cong G$, with $L$ inside $\mathbb Q(\mu_N)$. [step 5.1, step 6.1, L8] ∎

## Remarks

- **What is produced is a subfield, not a cyclotomic field.** The construction realises $G$ as the Galois group of an intermediate field of $\mathbb Q(\mu_N)/\mathbb Q$, and it must: the Galois group of $\mathbb Q(\mu_N)$ itself is $(\mathbb Z/N)^{\times}$, whose order $\varphi(N)$ is even for $N\ge3$, so most finite abelian groups are not of that form. The companion page spells out that failure in [[fs-every-finite-abelian-group-is-the-galois-group-of-a-cyclotomic-field]].

- **The distinctness of the primes is needed twice.** It makes the list pairwise coprime so that the Chinese remainder theorem applies, and it makes the product $N$ have exactly the intended unit group. Repeating a prime would collapse two factors into one.
