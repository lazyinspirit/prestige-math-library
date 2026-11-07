---
dependency_level: 0
id: lem-complete-discrete-valuation-extension-degree-and-tame-norm
kind: lemma
title: Finite complete-DVR extensions and their tame determinant norm
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-axiom-of-choice
- thm-finite-dimensional-norm-equivalence-over-a-complete-valued-field
- thm-unique-extension-of-a-nonarchimedean-absolute-value
- def-field-norm-and-trace
justified_by: []
proof_strategy: direct
axiom_use: 'AC arbitrary-residue complete DVR, including inseparable field/residue
  extensions: integral closure finite free, n=ef, residue norm and tame norm identity
  with a base-field entry.'
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: Fesenko–Vostokov, Local Fields and Their Extensions, Chapter IX §§2–3;
      explicit finite reduction and local reconstruction below
    url: https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf
verification: {}
---

## Statement

Assume AC. Let $K$ be complete for a surjective discrete valuation $v_K$, with arbitrary residue field $k$, and let $L/K$ be a finite field extension of degree $n$. The unique extended absolute value gives a normalized discrete valuation $v_L$ with $v_L|_K=e v_K$. Its valuation ring $B$ is the integral closure of $A=\mathcal O_K$, is finite free of rank $n$ over $A$, and, writing $l=k_L$ and $f=[l:k]$, one has $n=ef$. These assertions include inseparable field and residue extensions. The determinant field norm satisfies
$$v_K(N_{L/K}b)=f v_L(b),\qquad \overline{N_{L/K}u}=N_{l/k}(\bar u)^e\quad(u\in B^\times).$$
If $t_K(a,b)=(-1)^{v_K(a)v_K(b)}\overline{a^{v_K(b)}b^{-v_K(a)}}$ is the usual tame expression, then
$$t_K(a,N_{L/K}b)=N_{l/k}\bigl(t_L(a,b)\bigr)\quad(a\in K^\times,\ b\in L^\times).$$

## Statement references

[[def-axiom-of-choice]]

[[thm-finite-dimensional-norm-equivalence-over-a-complete-valued-field]]

[[thm-unique-extension-of-a-nonarchimedean-absolute-value]]

[[def-field-norm-and-trace]]

## Facts & Assumptions

**Given:** The objects and assumptions in the Statement.

[F1] A finite extension of a complete nonarchimedean field has its unique complete extended absolute value $|x|_L=|N_{L/K}x|_K^{1/n}$, without separability restrictions. [[thm-unique-extension-of-a-nonarchimedean-absolute-value]]

[F2] Finite-dimensional norms over a complete valued field are equivalent to coordinate norms. [[thm-finite-dimensional-norm-equivalence-over-a-complete-valued-field]]

[F3] The field norm is the determinant of multiplication. [[def-field-norm-and-trace]]

[A1] Full AC is assumed, so any countable selection implicit in the complete-metric suppliers is permitted. [[def-axiom-of-choice]]

## Proof

**Given:** The data above.

1.1 Normalize $|x|_K=c^{-v_K(x)}$ with $c>1$ and extend it by [F1]. The value $w(x)=-\log_c|x|_L$ equals $v_K(Nx)/n$, so its value group is a subgroup of $(1/n)\mathbb Z$ containing $\mathbb Z$. It is therefore $(1/e)\mathbb Z$ for a divisor $e$ of $n$. Put $v_L=ew$ and choose a value-one element $\varpi$. Its valuation ring $B$ is a DVR: a nonzero ideal has a least nonnegative valuation and an element of that valuation generates it. This also proves the corresponding assertion for $A$. Completeness comes from [F1]. [F1, F3, A1, given, construct, algebra]

2.1 In any $K$-basis of $L$, [F2] bounds the unit ball $B$ between $\pi^h A^n$ and $\pi^{-h}A^n$ for some integer $h\ge0$, where $\pi$ is a uniformizer of $K$. It is an $A$-submodule. Every submodule of $A^n$ is finite free: induct on $n$, project to the first coordinate, choose a generator of its image ideal when nonzero and a preimage, and split off that free rank-one summand; the kernel is a submodule of $A^{n-1}$. If the image is zero just use the kernel. This is finite induction, since every ideal of a DVR is principal. Scaling by $\pi^h$ applies this to $B$, and the two lattice inclusions make its rank $n$. An element integral over $A$ has nonnegative valuation, since in a monic relation a negative-valued leading power would be the unique term of least valuation. Conversely multiplication by any $b\in B$ preserves the finite free $A$-module $B$; its characteristic polynomial annihilates it by the adjugate identity, and evaluating on $1$ gives a monic relation for $b$. Thus $B$ is exactly the integral closure, not an assumed finite normalization. [F1, F2, F3, step 1.1, algebra]

3.1 The free lattice gives $\dim_k B/\pi B=n$. Since $\pi B=\varpi^eB$, its filtration by $\varpi^iB/\varpi^eB$, $0\le i\le e$, has $e$ quotients isomorphic as $k$-vector spaces to $l=B/\varpi B$. In particular $l/k$ is finite and $n=ef$. Choose lifts $b_1,\ldots,b_f$ of a $k$-basis of $l$. The $ef=n$ elements $b_j\varpi^i$ with $0\le i<e$ form a basis modulo $\pi B$, by successively inspecting those filtration quotients. In an existing free $A$-basis their coefficient matrix consequently has determinant a unit, so they are an $A$-basis of $B$. No primitive element or residue separability is used. [F3, step 1.1, step 2.1, algebra]

4.1 The absolute-value formula in [F1] and $n=ef$ give $v_K(Nb)=f v_L(b)$. For a unit $u$, multiplication by $u$ preserves the filtration of step 3.1 and acts on every quotient by multiplication by $\bar u$ on $l$. Its determinant modulo $\pi$ is consequently the product of $e$ copies of the $k$-determinant of that multiplication, proving $\overline{Nu}=N_{l/k}(\bar u)^e$. This determinant argument also applies to inseparable $l/k$. [F1, F3, step 3.1, algebra]

5.1 Write $\pi=\varpi^e w$ with $w\in B^\times$. In the basis of step 3.1, multiplication by $\varpi$ sends the $i$th block identically to the $(i+1)$st block for $i<e-1$, and sends the last block to $\pi w^{-1}b_j$. Factor $\pi$ from each of those last $f$ columns. In the remaining determinant modulo $\pi$, the shift columns occupy all rows of positive block index. Only the block-index-zero coefficients of $w^{-1}b_j$ contribute to the last columns; their reduction is the matrix of multiplication by $\bar w^{-1}$ on $l$. The cyclic block permutation has sign $(-1)^{f(e-1)}$. Thus $$\overline{N(\varpi)/\pi^f}=(-1)^{f(e-1)}N_{l/k}(\bar w)^{-1}.$$ This proves the leading norm identity, including $e=1$ and residue-inseparable extensions. [F3, step 3.1, step 4.1, algebra]

6.1 Write $a=\pi^s u$ and $b=\varpi^r z$ with units $u\in A^\times,z\in B^\times$ and integers $s,r$. By steps 4.1–5.1 the leading unit of $Nb$ is $(-1)^{f(e-1)r}N(\bar w)^{-r}N(\bar z)^e$. Hence $t_K(a,Nb)$ equals $$(-1)^{f e s r}\bar u^{fr}N(\bar w)^{sr}N(\bar z)^{-es},$$ since $fsr-f(e-1)sr$ and $fesr$ have the same parity. On the other hand $v_L(a)=es$ and its leading unit is $\bar w^s\bar u$, so applying $N_{l/k}$ to $t_L(a,b)$ gives exactly that expression; here $N_{l/k}(\bar u)=\bar u^f$ and $N_{l/k}(-1)=(-1)^f$ follow from scalar determinants. This proves the tame identity for all signs of $s,r$ and all finite extensions, without a no-defect assumption or a finite-residue hypothesis. [F3, step 4.1, step 5.1, algebra] ∎

