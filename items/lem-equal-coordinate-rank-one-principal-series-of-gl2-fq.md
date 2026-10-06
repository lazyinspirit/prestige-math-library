---
id: lem-equal-coordinate-rank-one-principal-series-of-gl2-fq
kind: lemma
title: "The equal-coordinate rank-one principal series of GL_2"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-principal-series-module-for-finite-gl-n
  - thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order
  - thm-weyl-stabilizer-controls-principal-series-endomorphisms
  - def-diagonal-torus-characters-and-weyl-action
  - thm-finite-hecke-algebra-as-convolution-corner-and-endomorphisms
  - def-standard-intertwining-operators-for-finite-principal-series
  - lem-rank-one-hecke-quadratic-relation
  - def-tensor-product-of-complex-representations
  - thm-determinant-multiplicative
  - thm-determinant-of-a-triangular-matrix
  - thm-bruhat-decomposition-of-gl-n-over-a-finite-field
  - def-bruhat-double-coset-basis-of-the-finite-hecke-algebra
  - cor-schurs-lemma-for-irreducible-representations
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Masao Oi, Representation Theory of Finite Groups of Lie Type - Propositions 2.7 and 2.8 and their proofs (the cases $\\chi_1\\ne\\chi_2$ and $\\chi_1=\\chi_2$, including $1\\times1=1\\oplus\\operatorname{St}$ with $\\dim\\operatorname{St}=q$), printed pp. 11-13"
      url: "https://masaooi.github.io/DL.pdf"
    - title: "Olivier Dudas and Jean Michel, Lectures on Finite Reductive Groups and Their Representations - Lemma 11.10 and the rank-one computation for the quadratic relation, printed p. 49"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/lectures_beijing_2015.pdf"
    - title: "Jay Taylor, Finite Reductive Groups - Exercise 5.11 and Remark 5.12 ($q_s=q$ for each simple reflection of $GL_n$), printed p. 44"
      url: "https://pages.uoregon.edu/belias/WARTHOG/DLtheory/TaylorReductiveGroups.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $M=\operatorname{GL}_2(\mathbb F_q)$ with Borel $B_2=T_2\ltimes U_2$, and
let $\chi=(a,a)$ be the character of the diagonal torus with equal coordinates,
$a$ a character of $\mathbb F_q^\times$
([[def-diagonal-torus-characters-and-weyl-action]]). Then the principal series
$I(\chi)=\operatorname{Ind}_{B_2}^{M}(\widetilde\chi)$
([[def-principal-series-module-for-finite-gl-n]]) has dimension $q+1$ and
splits as a direct sum of exactly two non-isomorphic simple $M$-modules,
$$I(\chi)\;\cong\;\bigl(a\circ\det\bigr)\;\oplus\;\bigl(\operatorname{St}\otimes(a\circ\det)\bigr),$$
where $a\circ\det$ is the unique one-dimensional constituent (equivalently, the
unique constituent on which $M$ acts by a character) and
$\operatorname{St}$ is the Steinberg representation of
$\operatorname{GL}_2(\mathbb F_q)$, of dimension $q$; here $\operatorname{St}$
is defined as the nontrivial simple constituent of $I(1)$, equivalently the
$M$-stable complement of the constant functions in
$I(1)\cong\mathbb C[\mathbb P^1(\mathbb F_q)]$. Each constituent has multiplicity
one in $I(\chi)$ and
$\operatorname{End}_M(I(\chi))\cong\mathbb C\oplus\mathbb C$. In the spherical
case $a=1$ the one-dimensional constituent is the trivial representation; it
contains the $B_2$-fixed constant function on
$M/B_2\cong\mathbb P^1(\mathbb F_q)$, and the standard intertwiner $B_s$ acts on
it by the scalar $q$ and on $\operatorname{St}$ by the scalar $-1$, so
$B_s^2=(q-1)B_s+q\,\mathrm{id}_{I(\chi)}$. For $a\ne1$, $I(\chi)$ has no nonzero
$B_2$-fixed vector. No choice principle is used.

## Facts & Assumptions

**Given:** $M=\operatorname{GL}_2(\mathbb F_q)$ with Borel $B_2=T_2\ltimes U_2$ and diagonal torus $T_2$, a character $a$ of $\mathbb F_q^\times$, the character $\chi=(a,a)$ of $T_2$ and the principal series module $I(\chi)$ with its inflation $\widetilde\chi$.

[F1] $I(\chi)=\operatorname{Ind}_{B_2}^M(\widetilde\chi)$ is the complex $M$-module of covariant functions $f(gb)=\widetilde\chi(b)^{-1}f(g)$ with left action $(g\cdot f)(x)=f(g^{-1}x)$, and $\dim_{\mathbb C}I(\chi)=[M:B_2]=\prod_{i=1}^2\frac{q^i-1}{q-1}=q+1$ ([[def-principal-series-module-for-finite-gl-n]]).

[F2] Every finite-dimensional complex representation of the finite group $M$ is semisimple, and every subrepresentation of a finite-dimensional complex representation of $M$ is again semisimple ([[thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order]]).

[F3] $\dim_{\mathbb C}\operatorname{End}_M(I(\chi))=|W_\chi|$, where $W_\chi=\{w\in S_2:w\cdot\chi=\chi\}$; for the given equal-coordinate $\chi=(a,a)$ one has $W_\chi=S_2$, so the dimension is $2$ ([[thm-weyl-stabilizer-controls-principal-series-endomorphisms]], [[def-diagonal-torus-characters-and-weyl-action]]).

[F4] If a finite-dimensional $M$-module decomposes as $U\oplus W$ with $U$ and $W$ non-isomorphic simple modules, then $\operatorname{End}_M(U\oplus W)\cong\operatorname{End}_M(U)\oplus \operatorname{End}_M(W)$, and for a simple module $V$ every nonzero $M$-endomorphism of $V$ is an isomorphism ([[cor-schurs-lemma-for-irreducible-representations]]).

[F5] The finite Hecke algebra $H=e_B\mathbb C[M]e_B$ satisfies $\mathbb C[M]e_B\cong I(1)$ as left $\mathbb C[M]$-modules, with $g e_B$ corresponding to the function vanishing outside $gB_2$ and equal to $1$ on $gB_2$, and right multiplication by $h\in H$ is a $\mathbb C[M]$-linear endomorphism of $\mathbb C[M]e_B$ ([[thm-finite-hecke-algebra-as-convolution-corner-and-endomorphisms]]).

[F6] The standard intertwiner for the trivial character is $B_s=R_{\Theta_{s^{-1}}}$ with $\Theta_{s^{-1}}=q\,e_B\dot se_B=T_s$ in the standard basis of $H$ ([[def-standard-intertwining-operators-for-finite-principal-series]], [[def-bruhat-double-coset-basis-of-the-finite-hecke-algebra]]), and $T_s^2=(q-1)T_s+q\,e_B$ in $H$ ([[lem-rank-one-hecke-quadratic-relation]]).

[F7] The tensor product of two complex representations carries the diagonal action $g\cdot(v\otimes w)=gv\otimes gw$ ([[def-tensor-product-of-complex-representations]]). Tensoring with a one-dimensional character $\psi$ has inverse tensoring with $\psi^{-1}$, so it preserves simplicity and direct sum multiplicities.

[F8] The determinant is multiplicative, $\det(xy)=\det(x)\det(y)$, and the determinant of an upper triangular matrix is the product of its diagonal entries; hence for $b\in B_2$ the inflation of $\chi=(a,a)$ is $\widetilde\chi(b)=a(\det b)$ ([[thm-determinant-multiplicative]], [[thm-determinant-of-a-triangular-matrix]]).

[F9] $M=B_2\sqcup B_2\dot sB_2$ is the Bruhat decomposition for $n=2$ ([[thm-bruhat-decomposition-of-gl-n-over-a-finite-field]]).



## Proof

**Proof technique:** direct.

1.1 By [F1] the dimension is $\dim_{\mathbb C}I(\chi)=[M:B_2]=q+1$, and by [F2] the $M$-module $I(\chi)$ and each of its submodules are semisimple. [F1, F2]

1.2 Define $f_0(g):=a(\det g)^{-1}$ for $g\in M$. Then $f_0\in I(\chi)$: for $b\in B_2$, using multiplicativity of $\det$ and [F8], $f_0(gb)=a(\det g)^{-1}a(\det b)^{-1}=\widetilde\chi(b)^{-1}f_0(g)$ since $\widetilde\chi(b)=a(\det b)$. The line $\mathbb CV:=\mathbb C f_0$ is stable under $M$ because $\det$ is multiplicative: $(g\cdot f_0)(x)=a(\det(g^{-1}x))^{-1}=a(\det g)a(\det x)^{-1}=a(\det g)f_0(x)$, so $V\cong a\circ\det$ is a one-dimensional submodule of $I(\chi)$, and for $a=1$ it is spanned by the constant function $f_0=1$. [F1, F8, algebra]

1.3 For $\chi=(a,a)$ the stabiliser is $W_\chi=S_2$, so [F3] gives $\dim_{\mathbb C}\operatorname{End}_M(I(\chi))=2$. [F3]

2.1 We show that $V$ occurs in $I(\chi)$ with multiplicity exactly one, that it has a complement $W$ with $\dim_{\mathbb C}W=q$, and that $W$ is simple. If $V$ occurred at least twice, then by semisimplicity (step 1.1) $I(\chi)$ would contain $V\oplus V$ as a direct summand, and every endomorphism of $V\oplus V$ extended by zero would be an $M$-endomorphism of $I(\chi)$, so $\operatorname{End}_M(I(\chi))$ would contain $\operatorname M_2(\mathbb C)$ and have dimension at least $4$, contradicting step 1.3. Hence $V$ occurs with multiplicity one. By semisimplicity $I(\chi)=V\oplus W$ for some submodule $W$, necessarily nonzero because $\dim I(\chi)=q+1\ge3$ and $\dim V=1$. No simple constituent of $W$ is isomorphic to $V$, since that would again give multiplicity at least two; hence $\operatorname{Hom}_M(V,W)=\operatorname{Hom}_M(W,V)=0$ by [F4], and restriction gives $\operatorname{End}_M(I(\chi))\cong\operatorname{End}_M(V)\oplus\operatorname{End}_M(W)$. Since $\operatorname{End}_M(V)=\mathbb C$ and $\dim\operatorname{End}_M(I(\chi))=2$ by step 1.3, we get $\dim_{\mathbb C}\operatorname{End}_M(W)=1$. If $W$ had a nonzero proper submodule, Maschke would give a nontrivial invariant splitting of $W$. Its projection would be an idempotent in the one-dimensional algebra $\operatorname{End}_M(W)=\mathbb C\,\mathrm{id}_W$ different from $0$ and $\mathrm{id}_W$, which is impossible. Thus $W$ is simple. Therefore $I(\chi)\cong V\oplus W$ with $V\not\cong W$ simple, each of multiplicity one, and $\operatorname{End}_M(I(\chi))\cong\mathbb C\oplus\mathbb C$; in particular $V$ is the unique one-dimensional constituent, since $\dim W=q\ne1$. [F4, step 1.1, step 1.3, algebra]

2.2 Let $f\in I(\chi)$ be fixed by $B_2$. Then $f(b^{-1}g)=f(g)$ for all $b\in B_2$ and $g\in M$, so $f$ is left $B_2$-invariant; taking $g=1$ and using covariance gives $f(b)=f(1\cdot b)=\widetilde\chi(b)^{-1}f(1)$, while left invariance gives $f(b)=f(1)$, so $(\widetilde\chi(b)^{-1}-1)f(1)=0$ for all $b\in B_2$. If $a\ne1$, then $\widetilde\chi\ne1$: choosing $t\in T_2$ with $\chi(t)\ne1$ (possible since $a$ is a nontrivial character of $\mathbb F_q^\times$) gives $b\in B_2$ with $\widetilde\chi(b)\ne1$, so $f(1)=0$; then $f=0$ on $B_2$ by the formula, and for $g\in B_2\dot sB_2$ writing $g=b_1\dot s b_2$ by [F9], left invariance and right covariance give $f(g)=\widetilde\chi(b_2)^{-1}f(\dot s)$, while applying covariance to $g=\dot s$ and $b=\dot s^{-1}t\dot s\in B_2$ gives $f(\dot s)=f(t\dot s)=\widetilde\chi(\dot s^{-1}t\dot s)^{-1}f(\dot s)=\chi(t)^{-1}f(\dot s)$, so $f(\dot s)=0$ and $f=0$. Hence $I(\chi)$ has no nonzero $B_2$-fixed vector when $a\ne1$. For $a=1$ the constant function is fixed by $B_2$, since $\widetilde\chi=1$. [F9, step 1.2, algebra]

3.1 In the case $a=1$ the submodule $V$ of step 1.2 is the trivial module spanned by the constants, and we **define** the Steinberg representation by $\operatorname{St}:=W$ for the decomposition $I(1)=V\oplus W$ of step 2.1; it is a simple module of dimension $q$. We claim that for every character $a$ of $\mathbb F_q^\times$ there is an isomorphism of $M$-modules $$I(\chi)\;\cong\;I(1)\otimes(a\circ\det),\qquad \chi=(a,a),$$ where $a\circ\det$ is the one-dimensional $M$-module $g\mapsto a(\det g)$. Let $\psi:=a\circ\det$ and let $W_\psi=\mathbb C z$ be the one-dimensional space on which $M$ acts by $\psi$; define $\Phi:I(1)\otimes W_\psi\to I(\chi)$ by $\Phi(f\otimes z)(x):=f(x)\psi(x)^{-1}$. This is well defined and lands in $I(\chi)$ because $f(xb)=f(x)$ and $\psi(xb)^{-1}=\psi(x)^{-1}\psi(b)^{-1}$, while $\widetilde\chi(b)=\psi(b)$ by [F8]; it is $M$-equivariant because $\Phi(g\cdot(f\otimes z))(x)=f(g^{-1}x)\psi(g)\psi(x)^{-1}=(\Phi(f\otimes z))(g^{-1}x)$, using the diagonal action of [F7]; and its inverse sends $F\in I(\chi)$ to the function $x\mapsto F(x)\psi(x)$ tensored with $z$, which is right $B_2$-invariant. Thus $\Phi$ is an isomorphism. Tensoring the decomposition $I(1)=V\oplus\operatorname{St}$ of step 2.1 with the one-dimensional module $a\circ\det$ and applying $\Phi$ gives $$I(\chi)\cong(a\circ\det)\oplus\bigl(\operatorname{St}\otimes(a\circ\det)\bigr),$$ where $\Phi(V\otimes W_\psi)=\mathbb C\cdot(a^{-1}\circ\det)$ is the one-dimensional constituent $a\circ\det$ of step 1.2 and $\operatorname{St}\otimes(a\circ\det)$ is simple of dimension $q$; the two summands are non-isomorphic because their dimensions $1$ and $q\ge2$ differ, and each occurs with multiplicity one. [F7, F8, step 1.2, step 2.1, algebra]

4.1 Take $a=1$, so that $I(1)=\mathbb C\cdot1\oplus\operatorname{St}$ by step 3.1, and recall $B_s=R_{T_s}$ under the identification $\mathbb C[M]e_B\cong I(1)$ of [F5] and [F6]. The vector $\sum_{g\in M}g$ satisfies $(\sum_g g)e_B=\sum_g g$ because right multiplication by $B_2$ permutes $M$, and it corresponds to the constant function under [F5]; since $\sum_g g$ is invariant under left multiplication by $M$, it spans the trivial constituent. Applying $B_s$ gives $B_s(\sum_g g)=(\sum_g g)T_s=q(\sum_g g)e_B\dot se_B=q(\sum_g g)\dot se_B=q(\sum_g g)e_B=q\sum_g g$, using $\dot s$ permuting $M$ on the left and $(\sum_gg)e_B=\sum_gg$; hence $B_s$ acts on the trivial constituent by $q$. The corner anti-isomorphism $h\mapsto R_h$ transfers the polynomial identity of [F6] to $B_s^2=(q-1)B_s+q\,\mathrm{id}$. The projections $(B_s+\mathrm{id})/(q+1)$ and $(q\,\mathrm{id}-B_s)/(q+1)$ split $I(1)$ into its $q$ and $-1$ eigenspaces. They are $M$-equivariant and preserve $\operatorname{St}$: maps from this nontrivial simple module to the trivial summand vanish by [F4]. Simplicity of $\operatorname{St}$ therefore makes $B_s$ scalar on it, with value $q$ or $-1$. The eigenvalue cannot be $q$: if $B_s=q\,\mathrm{id}$ on $\operatorname{St}$ as well, then $B_s=q\,\mathrm{id}$ on $I(1)$, but $B_s(e_B)=e_BT_s=T_se_B=q\,e_B\dot se_Be_B=q\,e_B\dot se_B=T_s$ and $T_s,e_B$ are distinct basis elements of $H$, so $B_s(e_B)\ne q\,e_B$. Hence $B_s$ acts on $\operatorname{St}$ by $-1$, and the displayed quadratic identity $B_s^2=(q-1)B_s+q\,\mathrm{id}_{I(\chi)}$ holds. [F5, F6, step 3.1, algebra]

5.1 Steps 1.1 and 2.1 give the dimension, the multiplicity-one splitting into two non-isomorphic simple constituents and $\operatorname{End}_M(I(\chi))\cong\mathbb C\oplus\mathbb C$; step 3.1 identifies the constituents as $a\circ\det$ and $\operatorname{St}\otimes(a\circ\det)$ with $\operatorname{St}$ of dimension $q$ and shows uniqueness of the one-dimensional constituent; steps 2.2 and 4.1 give the fixed-vector statement and the action of $B_s$ in the spherical case. All modules are finite-dimensional over $\mathbb C$, all decompositions are finite, and no choice principle is used. [step 1.1, step 2.1, step 3.1, step 2.2, step 4.1] ∎ 