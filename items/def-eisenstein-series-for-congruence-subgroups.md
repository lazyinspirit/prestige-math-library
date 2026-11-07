---
id: def-eisenstein-series-for-congruence-subgroups
kind: definition
title: "Eisenstein Series for a Congruence Subgroup"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-congruence-subgroup-of-sl2-z
  - def-modular-group-action-on-the-upper-half-plane
  - thm-well-ordering-principle
  - thm-standard-fundamental-domain-for-the-modular-group
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "A. Knightly and C. Li, Kuznetsov's Trace Formula and the Hecke Eigenvalues of Maass Forms, Memoirs of the AMS 224 (2012), arXiv:1202.0189v1"
      url: "https://arxiv.org/pdf/1202.0189v1"
      locator: "§5.2, printed pp. 39–40: Eisenstein series for finite-level nebentypus; §§5.6–5.7, printed pp. 48–52: Fourier expansion and meromorphic continuation."
    - title: "Austin Lei, Automorphic Forms Learning Seminar Notes (Columbia University, Fall 2024)"
      url: "https://www.math.columbia.edu/~aghosh/ALNotes12.pdf"
      locator: "§3.1: the level-one Eisenstein series, convergence, automorphy, and eigenvalue."
---

## Definition

Let $N\ge1$, let $\chi:(\mathbb Z/N\mathbb Z)^\times\to S^1$ be a group
homomorphism with $\chi(-1)=1$, and put
$$\Gamma=\Gamma_0(N)=\left\{\begin{pmatrix}a&b\\c&d\end{pmatrix}\in SL_2(\mathbb Z):N\mid c\right\},\qquad \chi\!\left(\begin{pmatrix}a&b\\c&d\end{pmatrix}\right)=\chi(d\bmod N).$$
For a cusp $\mathfrak a\in\Gamma\backslash\mathbb P^1(\mathbb Q)$ choose
$\sigma_{\mathfrak a}\in SL_2(\mathbb Z)$ with $\sigma_{\mathfrak a}\infty=\mathfrak a$,
let $\Gamma_{\mathfrak a}=\{\gamma\in\Gamma:\gamma\mathfrak a=\mathfrak a\}$,
and let $w_{\mathfrak a}$ be the least positive integer $m$ such that
$\sigma_{\mathfrak a}\begin{pmatrix}1&m\\0&1\end{pmatrix}\sigma_{\mathfrak a}^{-1}\in\Gamma$,
and call $\mathfrak a$ singular for $\chi$ when $\chi(\gamma)=1$ for every
$\gamma\in\Gamma_{\mathfrak a}$. For a singular cusp and $\operatorname{Re}s>1$,
the weight-zero Eisenstein series attached to this scaling matrix is
$$E_{\mathfrak a}(z,s)=\sum_{\gamma\in\Gamma_{\mathfrak a}\backslash\Gamma}\overline{\chi(\gamma)}\,\operatorname{Im}(\sigma_{\mathfrak a}^{-1}\gamma z)^s.$$
For $\psi\in C_c^\infty((0,\infty))$, the associated incomplete Eisenstein
series is
$$E_{\mathfrak a}(z\mid\psi)=\sum_{\gamma\in\Gamma_{\mathfrak a}\backslash\Gamma}\overline{\chi(\gamma)}\,\psi\!\left(\operatorname{Im}(\sigma_{\mathfrak a}^{-1}\gamma z)\right).$$
For compactly supported $\psi$, this incomplete series is bounded on the
finite-area quotient.
The chosen $\sigma_{\mathfrak a}$ is part of the normalization. For
$\mathfrak a=\infty$ take $\sigma_{\infty}=I$; then $\infty$ is singular and
$\Gamma_{\infty}$ contains the translation $z\mapsto z+1$.

## Definition references

[[def-congruence-subgroup-of-sl2-z]]

[[def-modular-group-action-on-the-upper-half-plane]]

[[thm-well-ordering-principle]]

[[thm-standard-fundamental-domain-for-the-modular-group]]

## Facts & Assumptions

**Given:** $N\ge1$, an even unitary character $\chi$, a cusp $\mathfrak a$,
a scaling matrix $\sigma_{\mathfrak a}$, and $\operatorname{Re}s>1$ (or
$\psi\in C_c^\infty((0,\infty))$ for the incomplete series).

[F1] For $N\ge1$, $\Gamma(N)$ is the kernel of reduction modulo $N$,
$\Gamma(N)\subseteq\Gamma_0(N)$, and $\Gamma_0(N)$ is a subgroup of
$SL_2(\mathbb Z)$ of finite index. ([[def-congruence-subgroup-of-sl2-z]])

[F2] The action is $\gamma z=(az+b)/(cz+d)$, and
$\operatorname{Im}(\gamma z)=\operatorname{Im}(z)/|cz+d|^2$ for
$\gamma\in SL_2(\mathbb R)$. ([[def-modular-group-action-on-the-upper-half-plane]])

[F3] Every nonempty subset of $\mathbb N$ has a least element.
([[thm-well-ordering-principle]])

[F4] The modular group has a finite-area fundamental domain. Together with
the finite index of $\Gamma_0(N)$, this gives finite area and finitely many
cusp classes for $\Gamma_0(N)$. ([[thm-standard-fundamental-domain-for-the-modular-group]],
[[def-congruence-subgroup-of-sl2-z]])

## Verification

1.1 For any $\sigma_{\mathfrak a}$, the set of positive integers $m$ with $\sigma_{\mathfrak a}\begin{pmatrix}1&m\\0&1\end{pmatrix}\sigma_{\mathfrak a}^{-1}\in\Gamma$ is nonempty: $T^N\in\Gamma(N)$ and the kernel $\Gamma(N)$ is normal in $SL_2(\mathbb Z)$, so its conjugate by $\sigma_{\mathfrak a}$ is in $\Gamma(N)\subseteq\Gamma$. By [F3] the set has a least element, the cusp width. Also, if $\gamma=\begin{pmatrix}a&b\\c&d\end{pmatrix}\in\Gamma$, then $ad\equiv1\pmod N$, so $d\bmod N$ is a unit and $\chi(\gamma)$ is defined. [given, F1, F3, algebra]

2.1 If $\eta\in\Gamma_{\mathfrak a}$, then $\sigma_{\mathfrak a}^{-1}\eta\sigma_{\mathfrak a}$ is a translation and preserves imaginary part. Singularity gives $\chi(\eta)=1$. Therefore both summands in the two displayed series are unchanged when a representative $\gamma$ of a left coset is replaced by $\eta\gamma$; the series are well-defined on $\Gamma_{\mathfrak a}\backslash\Gamma$. [given, step 1.1, F2, algebra]

3.1 Write $\sigma_{\mathfrak a}^{-1}\gamma=\begin{pmatrix}* & *\\c_\gamma&d_\gamma\end{pmatrix}$. Then $\operatorname{Im}(\sigma_{\mathfrak a}^{-1}\gamma z)^\sigma =y^\sigma|c_\gamma z+d_\gamma|^{-2\sigma}$ for $\sigma=\operatorname{Re}s$. The cosets over each primitive bottom row $(c,d)$ of $SL_2(\mathbb Z)$ have multiplicity at most the cusp width. On any compact $K\subset\mathbb H$, $|cz+d|\ge C_K(c^2+d^2)^{1/2}$ with $C_K>0$. The sum is consequently bounded uniformly on $K$ by a constant times $\sum_{(c,d)\in\mathbb Z^2\setminus\{(0,0)\}}(c^2+d^2)^{-\sigma}$, which converges for $\sigma>1$: the dyadic annulus $2^j\le(c^2+d^2)^{1/2}<2^{j+1}$ contains $O(2^{2j})$ integer pairs, while each summand there is $O(2^{-2\sigma j})$, so the annulus bounds form the convergent geometric series $O(2^{(2-2\sigma)j})$. Hence the complete series converges absolutely and locally uniformly for $\operatorname{Re}s>1$. [given, F1, F2, step 1.1, step 2.1, algebra]

3.2 For $\gamma_0\in\Gamma$, right multiplication permutes $\Gamma_{\mathfrak a}\backslash\Gamma$. Reindexing by $\gamma'=\gamma\gamma_0$ multiplies each coefficient by $\chi(\gamma_0)$, because $\chi$ is unitary; hence $E_{\mathfrak a}(\gamma_0 z,s)=\chi(\gamma_0)E_{\mathfrak a}(z,s)$, and the same holds for $E_{\mathfrak a}(z\mid\psi)$. [given, step 2.1, algebra]

4.1 On compact subsets of $\mathbb H$, only finitely many cosets in the incomplete series can have $\operatorname{Im}(\sigma_{\mathfrak a}^{-1}\gamma z)$ in the compact support of $\psi$. If the support lies in $[a,b]$ with $a>0$, then $|c_\gamma z+d_\gamma|^2\le y/a$; for $z$ in a fixed compact set, [F2] and the lower bound in step 3.1 bound $|c_\gamma|$ and $|d_\gamma|$. Only finitely many integer bottom rows occur, and each has at most the cusp-width multiplicity. Thus the incomplete series is locally finite and well-defined. [given, F2, step 2.1, step 3.1, algebra]


5.1 Put $\operatorname{supp}\psi\subseteq[\alpha,\beta]$ with $\alpha>0$. On a cusp tail represented by $z=\sigma_{\mathfrak b}(x+iy)$, terms for which $\sigma_{\mathfrak a}^{-1}\gamma\sigma_{\mathfrak b}$ has lower-left entry $c=0$ occur only if $\mathfrak b=\mathfrak a$; modulo $\Gamma_{\mathfrak a}$ there is at most one such term, bounded by $\|\psi\|_\infty$. Every other term has nonzero integer $c$, and $\operatorname{Im}(\sigma_{\mathfrak a}^{-1}\gamma\sigma_{\mathfrak b}(x+iy)) =y/|c(x+iy)+d|^2\le1/y$. It therefore vanishes for $y>1/\alpha$. The incomplete series is bounded on all cusp tails. On a compact core, step 4.1 gives a uniformly finite sum of bounded terms; there are finitely many cusps by [F4], so the series is bounded on the quotient. Finite area [F4] then gives $E_{\mathfrak a}(\cdot\mid\psi)\in L^2(X_{N,\chi})$. [given, F2, F4, step 4.1, step 3.2, algebra] ∎