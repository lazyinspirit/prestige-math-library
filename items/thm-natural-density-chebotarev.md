---
id: thm-natural-density-chebotarev
kind: theorem
title: Natural density of prime ideals in a Frobenius-stable set
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 30
proof_strategy: direct
axiom_use: AC, CC and DC are inherited from the exact unified effective Chebotarev and reciprocity interfaces.
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
- def-chebotarev-prime-ideal-counting-function
- thm-unified-effective-chebotarev-thorner-zaman
- thm-global-artin-reciprocity-and-norm-index
- def-finite-order-ray-class-hecke-character-and-l-function
- lem-character-orthogonality-for-finite-abelian-groups
- lem-number-field-extension-ramified-at-finitely-many-places
- def-axiom-of-choice
- def-countable-choice
- def-dependent-choice
sources:
  references:
  - title: Jesse Thorner and Asif Zaman, A unified and improved Chebotarev density theorem
    url: https://arxiv.org/pdf/1803.02823v3
    locator: Section 1, Theorem 1.4; the proof below uses the already locally reconstructed full subgroup form.
  - title: J. C. Lagarias and A. M. Odlyzko, Effective Versions of the Chebotarev Density Theorem
    url: https://aareyanmanzoor.github.io/assets/articles/lagarias-odlyzko.pdf
    locator: Theorem 1.3 and Section 9, printed pp. 409–464; bibliographic context only, not a premise of this deduction.
---

## Statement

Assume the Axiom of Choice, Countable Choice, and Dependent Choice. Let $L/F$ be a finite Galois extension of number fields, let $G=\operatorname{Gal}(L/F)$, and let $C\subseteq G$ be stable under conjugation, meaning $gCg^{-1}=C$ for every $g\in G$. For real $x\ge2$, let $\pi_C(x;L/F)$ count the nonzero prime ideals $\mathfrak p$ of $\mathcal O_F$ that are unramified in $L$ (all ramification indices above $\mathfrak p$ are $1$), have arithmetic Frobenius conjugacy class contained in $C$, where arithmetic Frobenius acts on residue classes by $a\mapsto a^{N_{F/\mathbb Q}\mathfrak p}$, and satisfy $N_{F/\mathbb Q}\mathfrak p\le x$. Let $\pi_F(x)$ count all nonzero prime ideals of $\mathcal O_F$ with absolute norm at most $x$. Then the natural density, defined by the ratio of these two counting functions, exists and is
$$\lim_{x\to\infty}\frac{\pi_C(x;L/F)}{\pi_F(x)}=\frac{|C|}{|G|}.$$

## Statement references

[[def-chebotarev-prime-ideal-counting-function]]

[[thm-unified-effective-chebotarev-thorner-zaman]]

## Facts & Assumptions

**Given:** The original finite Galois extension, conjugacy-stable set and choice hypotheses in the Statement.

[F1] For any conjugacy class $C_j$, any abelian $H$ meeting it, and $K=L^H$ with $A=D_KQn_K^{n_K}>1$, the unified effective theorem gives the stated relative estimate with fixed $\theta_j\in\{0,\pm1\}$ and, when present, a fixed real zero $0<\beta_j<1$; both effective error terms tend to zero for fixed $L/F,H$ as $x\to\infty$. [[thm-unified-effective-chebotarev-thorner-zaman]]

[F2] The global Artin map is onto the abelian Galois group, so its pullback distinguishes the characters of that group. A finite abelian group has exactly as many complex characters as elements. A finite-order ray character of $\mathbb Q$ with finite conductor one is trivial: its residue character is trivial, its principal-ideal formula at $-1$ forces even parity, and every integral ideal has a positive generator. [[thm-global-artin-reciprocity-and-norm-index]] [[lem-character-orthogonality-for-finite-abelian-groups]] [[def-finite-order-ray-class-hecke-character-and-l-function]]

[F3] Only finitely many finite primes of $F$ ramify in $L$, and the counting function counts unramified primes by absolute norm and arithmetic Frobenius class. [[lem-number-field-extension-ramified-at-finitely-many-places]] [[def-chebotarev-prime-ideal-counting-function]]

[A1] The original AC, CC and DC apply to [F1]–[F3]. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

## Proof

1.1 Decompose the finite conjugacy-stable set as $C=\bigsqcup_{j=1}^r C_j$, allowing the empty union. For each class choose $g_j\in C_j$ and its cyclic subgroup $H_j=\langle g_j\rangle$, which is abelian and meets $C_j$. Put $K_j=L^{H_j}$ and $A_j=D_{K_j}Q_jn_{K_j}^{n_{K_j}}$ as in [F1]. If $A_j=1$, its positive integer factors force $n_{K_j}=D_{K_j}=Q_j=1$ and $K_j=\mathbb Q$. Every Hecke character in the given Artin family then has finite conductor one, so [F2] makes them all trivial. Surjectivity of Artin and character counting in [F2] imply $H_j=1$. Thus $L=K_j=\mathbb Q$ and also $F=\mathbb Q$. Therefore, unless $L=\mathbb Q$, every $A_j>1$ and [F1] applies to every class. [A1, F1, F2, given, choose, construct, algebra]

2.1 Suppose first $L\ne\mathbb Q$. Fix $j$ and write $a_j=|C_j|/|G|$. The two relative errors in [F1] tend to zero because $A_j>1$ and $n_{K_j}$ are fixed. If an exceptional $\beta_j$ occurs, $0<\beta_j<1$ and $$\frac{\operatorname{Li}(x^{\beta_j})}{\operatorname{Li}(x)}\le\frac{2\log x}{\log2}x^{\beta_j-1}\longrightarrow0.$$ Indeed $\operatorname{Li}(x)\ge x/(2\log x)$ for $x\ge4$ by integration on $[x/2,x]$, and $\operatorname{Li}(x^{\beta_j})\le x^{\beta_j}/\log2$ once $x^{\beta_j}\ge2$. Put $u=(1-\beta_j)\log x$ and use $e^u\ge u^2/2$. Thus [F1] gives $\pi_{C_j}(x;L/F)/\operatorname{Li}(x)\to a_j$. Each class may have its own subgroup and exceptional zero; no common exceptional zero is assumed. [F1, step 1.1, algebra]

3.1 Finite addition of the class counts in step 2.1 gives $\pi_C(x;L/F)/\operatorname{Li}(x)\to|C|/|G|$. Applying the same finite sum to all classes gives $\pi_G(x;L/F)/\operatorname{Li}(x)\to1$. By [F3], $\pi_F(x)=\pi_G(x;L/F)+O(1)$, since only finitely many prime ideals ramify; hence their quotient tends to $|C|/|G|$. The empty-set case is included by the empty finite sum. [F3, step 2.1, algebra]

4.1 If $L=\mathbb Q$, then $F=\mathbb Q$ and $G=1$. The only conjugacy-stable subsets are $\varnothing$ and $G$, and every rational prime is unramified in the identity extension. Consequently $\pi_C(x;L/F)$ is respectively $0$ or exactly $\pi_F(x)$, so its ratio is respectively $0$ or $1=|C|/|G|$ for all sufficiently large $x$; infinitude of rational primes follows from Euclid's finite product argument. This covers the sole possible $A_j=1$ case without changing the public Statement. [F3, step 1.1, given, algebra] ∎
