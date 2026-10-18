---
id: lem-state-field-reconstruction-from-local-generators
kind: lemma
title: Mutually local creative generators determine a state–field map
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-formal-distribution-on-a-vector-space
  - def-vertex-algebra-state-field
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: Christophe Nozaradan, Introduction to Vertex Algebras, §§3.5 and 4.3
      url: https://arxiv.org/pdf/0809.1380
    - title: Tomoyuki Arakawa and Anne Moreau, Arc spaces and vertex algebras, §§2.3–2.7
      url: https://www.imo.universite-paris-saclay.fr/~anne.moreau/Arc_space-vertex_algebras-BOOK_version.pdf
---

## Statement

Let $V$ be a complex vector space with nonzero $\mathbf1\in V$ and $T\in\operatorname{End}(V)$, with $T\mathbf1=0$. Let $\mathcal S$ be a family of fields on $V$ such that:

- every pair in $\mathcal S$ is mutually local;
- $[T,A(z)]=\partial_zA(z)$ for every $A\in\mathcal S$;
- for each $A\in\mathcal S$ a state $a_A\in V$ is specified and $A(z)\mathbf1=e^{zT}a_A$;
- $V$ is spanned by $\mathbf1$ and the states $A^1_{(n_1)}\cdots A^r_{(n_r)}\mathbf1$ with $A^i\in\mathcal S$ and every $n_i<0$.

Then there exists a unique state–field map making $(V,\mathbf1,T)$ a vertex algebra in the sense of [[def-vertex-algebra-state-field]] and satisfying $Y(a_A,z)=A(z)$ for every $A\in\mathcal S$.

## Facts & Assumptions

**Given:** The vector space, vacuum, translation operator, and generating family satisfying the stated field, locality, creation, covariance, and spanning conditions.

[F1] [[def-formal-distribution-on-a-vector-space]]: a field is vectorwise lower-truncated, its $n$th product is the prescribed residue of the two binomial expansions, and locality is polynomial annihilation of the commutator.

[F2] [[def-vertex-algebra-state-field]]: a vertex algebra is the state–field map with lower truncation, vacuum/creation, translation covariance, and locality.

## Proof

1.1 For fields $A(z),B(z)$ and any integer $n$, the residue definition in [F1] gives $\bigl(A_{(n)}B\bigr)_{(m)}v=\sum_{j\ge0}(-1)^j\binom nj A_{(n-j)}B_{(m+j)}v-(-1)^n\sum_{j\ge0}(-1)^j\binom nj B_{(m+n-j)}A_{(j)}v$ by expanding $\iota_{z,w}(z-w)^n$ and $\iota_{w,z}(z-w)^n$ and taking the $z^{-1}w^{-m-1}$ coefficient. For fixed $m,v$, the first sum is finite because $B_{(m+j)}v=0$ for large $j$, and the second is finite because $A_{(j)}v=0$ for large $j$. For lower truncation, fix $n,v$ and choose $J\ge0$ with $A_{(j)}v=0$ for $j\ge J$. Choose $b_v$ with $B_{(r)}v=0$ for $r\ge b_v$, and for each $0\le j<J$ choose $b_j$ with $B_{(r)}A_{(j)}v=0$ for $r\ge b_j$. Whenever $m\ge b_v$ and $m\ge b_j-n+j$ for every $j<J$, both sums vanish termwise. These finitely many conditions give a cutoff, including $J=0$ when the second family is empty. Thus every $n$th product is again a field. [F1, given, algebra]

1.2 (Dong locality.) Suppose $A(z),B(x),C(w)$ are pairwise local, and choose a common positive integer locality order $r$ large enough that $r+n>0$. Put $D_n(x,w)=\iota_{x,w}(x-w)^nB(x)C(w)-\iota_{w,x}(x-w)^nC(w)B(x)$, so $B_{(n)}C=\operatorname{Res}_xD_n(x,w)$ by [F1]. Expand the commutator residue using $(z-w)^{4r}=(z-w)^r\sum_{i=0}^{3r}\binom{3r}{i}(z-x)^i(x-w)^{3r-i}$. For each $i$, set $Q_i=(z-w)^r(z-x)^i(x-w)^{3r-i}D_n(x,w)$. If $i\le r$, then $3r-i+n\ge2r+n\ge r+1$. The two binomial expansions of $(x-w)^{3r-i+n}$ are therefore the same polynomial, so $Q_i$ is that polynomial times $(z-w)^r(z-x)^i[B(x),C(w)]$ and is zero by locality of $B,C$. If $i>r$, $(z-x)^i$ contains a locality factor for $A,B$ and $(z-w)^r$ contains one for $A,C$. These scalar factors commute with the fields; moving $A(z)$ past $B(x)$ and then $C(w)$, or past $C(w)$ and then $B(x)$, shows $[A(z),Q_i]=0$ for each of the two ordered products in $D_n$. Thus $(z-w)^{4r}[A(z),(B_{(n)}C)(w)]=\sum_{i=0}^{3r}\binom{3r}{i}\operatorname{Res}_x[A(z),Q_i]=0$. If $(z-w)^r[A(z),B(w)]=0$, differentiating and multiplying by $z-w$ gives $(z-w)^{r+1}[\partial_zA(z),B(w)]=0$; differentiating in $w$ gives the same assertion for a derivative of the second field. A derivative of a field remains a field because its mode coefficients are scalar multiples of shifted modes, so derivatives and linear combinations preserve pairwise locality. Hence the closure of $\mathcal S$ under linear combinations, derivatives, and all $n$th products is pairwise local. [F1, algebra]

2.1 If $A(z)\mathbf1=e^{zT}a$ and $B(z)\mathbf1=e^{zT}b$, then $[T,A(z)]=\partial_zA(z)$ implies $A(z)e^{wT}=e^{wT}A(z-w)$ by differentiating both sides as formal power series in $w$. In the residue defining $A(z)_{(n)}B(w)\mathbf1$, the second term has no $z^{-1}$ coefficient because $\iota_{w,z}(z-w)^n$ and $e^{zT}$ contain only nonnegative powers of $z$. In the first term write $A(u)b=\sum_q A_{(q)}b\,u^{-q-1}$, where only finitely many $q\ge0$ contribute by field truncation. For every integer $s$, $\operatorname{Res}_z\iota_{z,w}(z-w)^s$ is $1$ when $s=-1$ and $0$ otherwise, since its powers of $z$ are $s-j$ with $j\ge0$. Thus $\operatorname{Res}_z\iota_{z,w}(z-w)^nA(z-w)b=\sum_q A_{(q)}b\operatorname{Res}_z\iota_{z,w}(z-w)^{n-q-1}=A_{(n)}b$, because only $q=n$ contributes. The coefficientwise residue is therefore finite and $(A(z)_{(n)}B(w))\mathbf1=e^{wT}A_{(n)}b$. Likewise, if $A$ and $B$ are translation-covariant, then $A_{(n)}B$ is translation-covariant: in its residue, $[T,-]$ differentiates both fields, and $\partial_z+\partial_w$ kills $(z-w)^n$ in either binomial expansion; the remaining total $z$-derivative has zero residue. Derivatives preserve both creativity and covariance. [F1, F2, step 1.1, algebra]

3.1 Let $\mathcal F$ be the linear span of $\operatorname{id}_V$ and all fields obtained from $\mathcal S$ by finitely many derivatives and $n$th products. By steps 1.1–1.2 its elements are fields and are pairwise local; by step 2.1 they are translation-covariant and creative, so each has a unique state $s(F)\in V$ with $F(z)\mathbf1=e^{zT}s(F)$. Step 2.1 gives $s(A_{(n)}B)=A_{(n)}s(B)$. Starting with $s(\operatorname{id}_V)=\mathbf1$, this identity and the assumed negative-mode spanning condition show that $s:\mathcal F\to V$ is surjective. [given, step 1.1, step 1.2, step 2.1, construct]

4.1 The state map $s$ is injective. If $H\in\mathcal F$ has $s(H)=0$, then $H(z)\mathbf1=0$. For arbitrary $b\in V$, choose $G\in\mathcal F$ with $s(G)=b$ by step 3.1. Locality gives $(z-w)^M[H(z),G(w)]=0$ for some $M$. Apply it to $\mathbf1$ and use $G(w)\mathbf1=e^{wT}b$; the reversed term vanishes because $H(z)\mathbf1=0$. Setting $w=0$ yields $z^M H(z)b=0$, and multiplication by $z^M$ is injective on formal distributions. Thus $H(z)b=0$ for every $b$, so $H=0$. [given, step 3.1, algebra]

5.1 Since $s$ is bijective, define $Y(a,z)=s^{-1}(a)(z)$. Step 1.1 gives lower truncation; the state of $\operatorname{id}_V$ is $\mathbf1$, so injectivity gives $Y(\mathbf1,z)=\operatorname{id}_V$; creativity gives $Y(a,z)\mathbf1=e^{zT}a$; translation covariance and locality follow from the defining properties of $\mathcal F$. These are exactly the axioms in [F2], so this is a vertex-algebra state–field map extending $\mathcal S$. [F2, step 1.1, step 3.1, step 4.1, construct]

6.1 For any other state–field map extending $\mathcal S$, the difference $H(z)$ from $Y(a,z)$ is a field with $H(z)\mathbf1=0$ and is local with every element of $\mathcal F$: it is local with generators by the vertex-algebra locality axiom, and repeated application of step 1.2 preserves locality under derivatives and $n$th products. For any $b\in V$, choose $G\in\mathcal F$ with $G(w)\mathbf1=e^{wT}b$ by step 3.1. Applying the locality identity $[H(z),G(w)]=0$ after multiplication by a sufficient power of $z-w$ to $\mathbf1$, then setting $w=0$, gives $z^M H(z)b=0$; injectivity of multiplication by $z^M$ gives $H(z)b=0$. This holds for every $b$, so $H=0$ and the extension is unique. [F2, step 1.2, step 3.1, algebra] ∎
