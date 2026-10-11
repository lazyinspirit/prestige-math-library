---
id: prop-r-cycle-virtual-character-filter
kind: proposition
title: "The $r$-cycle virtual character filter"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 2
deps: [def-removable-border-strip-and-height,
       lem-character-value-on-a-full-cycle-is-supported-on-hooks,
       lem-alternating-hook-induction-cancels-disconnected-rim-removals,
       def-outer-induction-product-for-symmetric-group-characters,
       def-virtual-character-and-character-ring-of-a-finite-group,
       def-induced-character-of-a-complex-representation,
       def-column-antisymmetrizer-polytabloid-and-specht-module,
       def-permutation-support-disjoint-cycles-and-cycle-type,
       def-finite-symmetric-group-and-permutation-notation,
       thm-frobenius-formula-for-induced-characters,
       thm-determinantal-form-of-a-specht-character,
       lem-young-permutation-module-is-induced-from-the-trivial-character,
       def-trivial-regular-and-permutation-representations,
       thm-complex-irreducibles-of-symmetric-groups-are-specht-modules,
       thm-first-orthogonality-relation-for-irreducible-complex-characters,
       thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions,
       def-standard-inner-product-on-complex-class-functions,
       thm-symmetric-permutations-are-conjugate-iff-same-cycle-type,
       thm-frobenius-characteristic-sends-specht-characters-to-schur-functions]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  references:
    - title: "G. D. James, The Representation Theory of the Symmetric Groups, Lecture Notes in Mathematics 682, Springer 1978 (complete author-hosted scan, 161 pp.)"
      url: "https://www-users.cse.umn.edu/~webb/oldteaching/Year2010-11/the-representation-theory-of-the-symmetric-groups-SLN.pdf"
      locator: "§21.7, printed pp. 83–84: the generalised character carried by the signed skew r-hook sum is zero on all classes except those containing an r-cycle; the alternating hook operator [r]-[r-1,1]+...+/-[1^r] is the one used there"
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Oxford Mathematical Monographs, 1995 (complete author-hosted scan, 486 pp.)"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
      locator: "Chapter I §3 Example 11, displayed identity (2), printed p. 48: s_mu p_r = sum over border strips lambda - mu of length r with signs (-1)^ht; with mu empty this is p_r = sum_x (-1)^{r-x} s_(x,1^{r-x}), the symmetric-function shadow of psi_r = r times the r-cycle indicator proved here"
---

## Statement

Let $r\ge1$, $n\ge r$ and $\nu\vdash n-r$, and put
$$\Psi_\nu:=\sum_{\substack{\lambda\vdash n\\ \lambda/\nu\text{ a removable border strip of size }r}}(-1)^{\operatorname{ht}(\lambda/\nu)}\,\chi^\lambda\in R(S_n),$$
a virtual character of $S_n$
([[def-virtual-character-and-character-ring-of-a-finite-group]],
[[def-removable-border-strip-and-height]]), and
$$\psi_r:=\sum_{x=1}^{r}(-1)^{r-x}\chi^{(x,1^{r-x})}\in R(S_r).$$
Then
$$\Psi_\nu(\sigma)=0\qquad\text{for every }\sigma\in S_n\text{ whose cycle type has no part equal to }r$$
([[def-permutation-support-disjoint-cycles-and-cycle-type]]); equivalently,
the signed sum over the partitions $\lambda$ obtained from $\nu$ by adding an
$r$-border strip vanishes on all classes that contain no $r$-cycle. Moreover
$\Psi_\nu$ is the outer induction product $\Psi_\nu=\chi^\nu\circ\psi_r$
([[def-outer-induction-product-for-symmetric-group-characters]]), and $\psi_r$
vanishes on every class of $S_r$ other than the class of $r$-cycles: it is the
function that takes the value $r$ on every $r$-cycle and the value $0$ on every
other element of $S_r$. No choice principle is used.

## Facts & Assumptions

**Given:** Integers $r\ge1$ and $n\ge r$, a partition $\nu\vdash n-r$, and for every partition of an integer the character $\chi^\lambda$ of the complex Specht module $S^\lambda$ ([[def-column-antisymmetrizer-polytabloid-and-specht-module]]).

[F1] $\Psi_\nu=\sum_{\lambda/\nu}(-1)^{\operatorname{ht}(\lambda/\nu)}\chi^\lambda$ is an integral combination of irreducible characters $\chi^\lambda$ of $S_n$, hence an element of $R(S_n)$ and a class function, and $\psi_r=\sum_{x=1}^{r}(-1)^{r-x}\chi^{(x,1^{r-x})}$ is an element of $R(S_r)$; here $\lambda/\nu$ runs over the removable border strips of size $r$, with $\operatorname{ht}(\lambda/\nu)=r-c$ when $\lambda/\nu$ occupies $c$ columns ([[def-removable-border-strip-and-height]], [[def-virtual-character-and-character-ring-of-a-finite-group]]).

[F2] Character form of the cancellation lemma: $\sum_{x=1}^{r}(-1)^{r-x}\chi^\nu\circ\chi^{(x,1^{r-x})}=\sum_{\lambda/\nu}(-1)^{\operatorname{ht}(\lambda/\nu)}\chi^\lambda=\Psi_\nu$ in $R(S_n)$ ([[lem-alternating-hook-induction-cancels-disconnected-rim-removals]]).

[F3] The outer induction product is $\mathbb Z$-bilinear in its two arguments and is the induction of the external tensor product: for $f\in R(S_m)$, $g\in R(S_p)$ one has $f\circ g=\operatorname{Ind}_{S_m\times S_p}^{S_{m+p}}(f\boxtimes g)$, and $(f\boxtimes g)(\sigma,\tau)=f(\sigma)g(\tau)$; the subgroup is the two-block subgroup acting on $\{1,\dots,m\}$ and $\{m+1,\dots,m+p\}$ ([[def-outer-induction-product-for-symmetric-group-characters]], [[def-induced-character-of-a-complex-representation]]).

[F4] Frobenius' formula: for $H\le G$ and a character $\chi$ of $H$, $\operatorname{Ind}_H^G\chi(g)=\frac1{|H|}\sum_{x\in G,\ x^{-1}gx\in H}\chi(x^{-1}gx)$; for a virtual character of $H$ the same display holds by finite linearity in $\chi$ ([[thm-frobenius-formula-for-induced-characters]]).

[F5] Full-cycle values: for $r\ge1$, if $\rho\in S_r$ is an $r$-cycle then $\chi^\lambda(\rho)=(-1)^{r-x}$ when $\lambda=(x,1^{r-x})$ for some $1\le x\le r$, and $\chi^\lambda(\rho)=0$ otherwise ([[lem-character-value-on-a-full-cycle-is-supported-on-hooks]]).

[F6] For a finite group $G$ the standard inner product is $\langle\varphi,\psi\rangle=\frac1{|G|}\sum_{g\in G}\varphi(g)\overline{\psi(g)}$ ([[def-standard-inner-product-on-complex-class-functions]]); the irreducible complex characters of $G$ are orthonormal ([[thm-first-orthogonality-relation-for-irreducible-complex-characters]]) and form an orthonormal basis of the space of class functions ([[thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions]]); the irreducible complex characters of $S_r$ are exactly the characters $\chi^\lambda$ with $\lambda\vdash r$, distinct partitions giving distinct characters ([[thm-complex-irreducibles-of-symmetric-groups-are-specht-modules]]).

[F7] Specht character values are integers ([[thm-frobenius-characteristic-sends-specht-characters-to-schur-functions]], Statement). In particular $\overline{\chi^\lambda(\sigma)}=\chi^\lambda(\sigma)$.

[F8] Conjugation preserves the cycle type: $x^{-1}\sigma x$ has the same cycle type as $\sigma$ for all $\sigma,x\in S_n$ ([[thm-symmetric-permutations-are-conjugate-iff-same-cycle-type]], [[def-permutation-support-disjoint-cycles-and-cycle-type]]); writing an element of the two-block subgroup $K$ as a pair $(u,v)$ means $u$ acts on $B_1=\{0,\dots,n-r-1\}$ and $v$ on $B_2=\{n-r,\dots,n-1\}$, with the order-preserving relabelling sending cycles of $v$ on $B_2$ to cycles of the same length in $S_r$ ([[def-finite-symmetric-group-and-permutation-notation]]).

## Proof

**Proof technique:** direct.

1.1 By the character form of the cancellation lemma [F2], $\sum_{x=1}^{r}(-1)^{r-x}\chi^\nu\circ\chi^{(x,1^{r-x})}=\Psi_\nu$; since the outer product is $\mathbb Z$-bilinear [F3] and $\psi_r=\sum_{x=1}^{r}(-1)^{r-x}\chi^{(x,1^{r-x})}$ by [F1], the same sum is $\chi^\nu\circ\psi_r$. Hence $\Psi_\nu=\chi^\nu\circ\psi_r$ in $R(S_n)$. [F1, F2, F3, algebra]

1.2 We prove the evaluation $\psi_r=r\cdot 1_C$, where $C$ is the conjugacy class of the $r$-cycles of $S_r$ and $1_C$ is its indicator function. Let $\rho\in S_r$ be an $r$-cycle. For every $\lambda\vdash r$, orthonormality [F6] gives $\langle\psi_r,\chi^\lambda\rangle=\sum_{x=1}^{r}(-1)^{r-x}\langle\chi^{(x,1^{r-x})},\chi^\lambda\rangle$, which equals $(-1)^{r-\lambda_1}$ if $\lambda=(\lambda_1,1^{r-\lambda_1})$ is a hook and $0$ otherwise; by the full-cycle lemma [F5] this is exactly $\chi^\lambda(\rho)$. On the other hand, for $f:=r\cdot 1_C$ the definition of the standard inner product [F6], the integrality $\overline{\chi^\lambda(\sigma)}=\chi^\lambda(\sigma)$ [F7] and the constancy of $\chi^\lambda$ on $C$ give $\langle f,\chi^\lambda\rangle=\frac{1}{r!}\,r\sum_{\sigma\in C}\chi^\lambda(\sigma)=\frac{r\,|C|}{r!}\,\chi^\lambda(\rho)=\chi^\lambda(\rho)$, because $C$ consists of the $r!/r=(r-1)!$ cyclic orderings of the $r$ points up to rotation. Thus $\langle\psi_r-f,\chi^\lambda\rangle=0$ for every $\lambda\vdash r$; the $\chi^\lambda$ exhaust the irreducible characters of $S_r$ and form an orthonormal basis of the class functions [F6], so $\psi_r-f=0$, that is, $\psi_r(\rho)=r$ for every $r$-cycle $\rho$ and $\psi_r(\tau)=0$ for every $\tau\in S_r$ that is not an $r$-cycle. [F5, F6, F7, algebra]

2.1 Let $\sigma\in S_n$ have cycle type with no part equal to $r$; we show $\Psi_\nu(\sigma)=0$. By step 1.1, $\Psi_\nu=\chi^\nu\circ\psi_r$, and by [F3] this outer product is $\operatorname{Ind}_K^{S_n}(\chi^\nu\boxtimes\psi_r)$ for the two-block subgroup $K=\operatorname{Sym}(B_1)\times\operatorname{Sym}(B_2)$ with $B_1=\{0,\dots,n-r-1\}$ and $B_2=\{n-r,\dots,n-1\}$; applying Frobenius' formula [F4] to the honest characters of the finite expansion of $\chi^\nu\boxtimes\psi_r$ and extending by linearity gives $$(\chi^\nu\circ\psi_r)(\sigma)=\frac{1}{|K|}\sum_{\substack{x\in S_n\\ x^{-1}\sigma x\in K}}(\chi^\nu\boxtimes\psi_r)(x^{-1}\sigma x).$$ For an index $x$ of the sum write $x^{-1}\sigma x=(u,v)$ with $u\in\operatorname{Sym}(B_1)$ and $v\in\operatorname{Sym}(B_2)$; then $(\chi^\nu\boxtimes\psi_r)(u,v)=\chi^\nu(u)\psi_r(v)$ by [F3]. If $r=1$, then $K$ fixes the single point of $B_2$, so no conjugate of $\sigma$ (which has no fixed point) lies in $K$ and the sum is empty; hence assume $r\ge2$. If $v$ were an $r$-cycle on $B_2$, then the disjoint-cycle decomposition of $x^{-1}\sigma x$ would contain that $r$-cycle, so the cycle type of $x^{-1}\sigma x$ would have a part equal to $r$, contradicting [F8] and the hypothesis on $\sigma$. Therefore $v$ is not an $r$-cycle, so $\psi_r(v)=0$ by step 1.2 and every term of the sum vanishes; hence $(\chi^\nu\circ\psi_r)(\sigma)=0$ and therefore $\Psi_\nu(\sigma)=0$ by step 1.1. [step 1.1, step 1.2, F3, F4, F8, given]

3.1 Step 1.1 identifies $\Psi_\nu$ with the outer product $\chi^\nu\circ\psi_r$, step 1.2 shows that $\psi_r$ equals $r$ on the class of $r$-cycles of $S_r$ and vanishes on every other class, and step 2.1 shows $\Psi_\nu(\sigma)=0$ for every $\sigma\in S_n$ whose cycle type has no part equal to $r$. These are exactly the three assertions of the statement. [step 1.1, step 1.2, step 2.1] ∎

## Remarks

- **The value on the $r$-cycle class is $r$, not a sign.** Evaluating the definition of $\psi_r$ at an $r$-cycle by the full-cycle lemma gives $\sum_{x=1}^{r}(-1)^{r-x}(-1)^{r-x}=r$, in agreement with step 1.2; in particular $\psi_r$ must not be confused with the sign character, which takes the value $(-1)^{r-1}$ there. For $r\ge2$ the identity is not an $r$-cycle, so $\psi_r(1)=0$ by step 1.2. Frobenius' formula [F4] at the identity gives $(\chi^\nu\circ\psi_r)(1)=[S_n:K]\chi^\nu(1)\psi_r(1)=0$, so $\Psi_\nu$ has degree $0$ in that range.

- **Dictionary to symmetric functions.** Under the Frobenius characteristic the alternating hook combination $\psi_r$ corresponds to the power sum $p_r=\sum_{x=1}^{r}(-1)^{r-x}s_{(x,1^{r-x})}$ (Macdonald I §3 (2)), whose expansion coefficient at $p_\rho/z_\rho$ is the value of $\psi_r$ on the class $\rho$; this is the symmetric-function form of the evaluation proved in step 1.2 and is consistent with the counterterm structure of [[lem-alternating-hook-induction-cancels-disconnected-rim-removals]].
