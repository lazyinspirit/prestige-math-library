---
id: lem-cyclic-cover-linking-form-inverse-matrix
kind: lemma
title: "Inverse-matrix formula for a surgery linking form"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-oriented-link-in-s-three-and-ambient-isotopy
  - lem-the-complement-of-an-oriented-link-is-a-connected-smooth-three-manifold
  - thm-alexander-duality-for-compact-locally-contractible-subsets-of-a-sphere
  - def-one-variable-alexander-module-of-an-oriented-link
  - thm-mayer-vietoris-sequence-in-singular-homology
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Jozef H. Przytycki and Akira Yasuhara, Linking Numbers in Rational Homology 3-Spheres, Cyclic Branched Covers and Infinite Cyclic Covers"
      url: "https://arxiv.org/pdf/math/0111203v1"
      locator: "Section 1, printed pp. 4–7, Theorem 1.1 and Corollary 1.2; surgery comparison and reverse-link matrix"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Assume the Axiom of Choice. Let $J=J_1\cup\cdots\cup J_n$ be an oriented link of $n\ge1$ smooth components in $S^3$. Choose pairwise disjoint closed tubular neighborhoods $N(J_i)$, let $X=S^3\setminus\operatorname{int}(\bigcup_iN(J_i))$, and let $\mu_i$ be the positive meridian of $J_i$. Let $\lambda_i$ be the longitude parallel to $J_i$ with zero self-linking. Alexander duality identifies $H_1(X;\mathbb Z)$ with $\mathbb Z^n$ on the meridian basis $[\mu_1],\ldots,[\mu_n]$; for $i\ne j$, define $\operatorname{lk}_{S^3}(J_i,J_j)$ to be the $j$-th coordinate of $[\lambda_i]$, the usual oriented linking number. Use the boundary-torus intersection convention $\mu_i\mathbin{\cdot}\lambda_i=+1$. Give $J_i$ an integer framing $f_i$ and fill along $\delta_i=\lambda_i+f_i\mu_i$. Let $A$ be the symmetric integer matrix with $A_{ii}=f_i$ and $A_{ij}=\operatorname{lk}_{S^3}(J_i,J_j)$ for $i\ne j$. Assume $\det A\ne0$, and let $Y$ be the resulting oriented surgery manifold, oriented as the boundary of the 4-dimensional surgery handlebody with outward normal first. Then $H_1(Y;\mathbb Z)\cong\mathbb Z^n/A\mathbb Z^n$. For torsion classes $[C],[D]\in H_1(Y;\mathbb Z)$ represented by oriented 1-cycles, choose $m>0$ and an integral 2-chain $F$ with $\partial F=mC$ and define $\lambda_Y([C],[D])=(F\mathbin{\cdot}D)/m\pmod{\mathbb Z}$, where the intersection is signed by the orientation of $Y$. If $x,y\in\mathbb Z^n$ are meridian-coordinate representatives of $[C],[D]$, then
$$
\lambda_Y([x],[y])=-x^TA^{-1}y\pmod{\mathbb Z}.
$$
## Statement references

[[def-oriented-link-in-s-three-and-ambient-isotopy|Finite disjoint unions of smooth oriented circles in $S^3$]]

[[lem-the-complement-of-an-oriented-link-is-a-connected-smooth-three-manifold|The link exterior and its connected complement]]

[[thm-alexander-duality-for-compact-locally-contractible-subsets-of-a-sphere|Alexander-duality meridian coordinates]]

[[def-one-variable-alexander-module-of-an-oriented-link|Positive meridian normalization]]

[[thm-mayer-vietoris-sequence-in-singular-homology|Homology exactness for the surgery filling]]

[Przytycki–Yasuhara, Theorem 1.1 and Corollary 1.2](https://arxiv.org/pdf/math/0111203v1)

## Facts & Assumptions

**Given:** Full AC, the framed link, its surgery slopes, the symmetric linking matrix $A$, and $\det A\ne0$.

[A1] Full AC is the choice-function axiom required by Alexander duality. [[def-axiom-of-choice]]

[F1] A finite oriented link in $S^3$ is compact and locally contractible; Alexander duality identifies the first homology of its complement with $\mathbb Z^n$, with the positive meridians as coordinate generators. [[def-oriented-link-in-s-three-and-ambient-isotopy]], [[thm-alexander-duality-for-compact-locally-contractible-subsets-of-a-sphere]]

[F2] The open complement of a nonempty smooth link is connected. [[lem-the-complement-of-an-oriented-link-is-a-connected-smooth-three-manifold]]

[F3] The positive meridians use the total-linking normalization: each positive component meridian maps to $1$ under the sum of the Alexander-duality component coordinates. [[def-one-variable-alexander-module-of-an-oriented-link]]

[F4] Mayer–Vietoris is exact for the collar-thickened cover by the exterior and the attached solid tori. [[thm-mayer-vietoris-sequence-in-singular-homology]]

## Proof

**Given:** The data and boundary-torus intersection convention in the Statement. Write $X=S^3\setminus\operatorname{int}N(J)$ for the compact exterior and use $[\mu_1],\ldots,[\mu_n]$ as its meridian-coordinate basis.

1.1 In each chosen tubular neighborhood, normalize the normal-disk radius to one and set $H_t(s,v)=(s,((1-t)+t/|v|)v)$ for $0<|v|\le1$ and $0\le t\le1$. Its radius is $(1-t)|v|+t$, so this homotopy stays off $J$, fixes the disk boundary, and glues to the identity on $X$. It is a strong deformation retraction from $S^3\setminus J$ onto $X$; in particular $X$ is connected by [F2]. By [F1], Alexander duality identifies $H_1(S^3\setminus J;\mathbb Z)$ with $\widetilde H^1(J;\mathbb Z)=\bigoplus_iH^1(J_i;\mathbb Z)\cong\mathbb Z^n$. The locally constructed retraction makes the inclusion of $X$ a homotopy equivalence and hence a homology isomorphism. Thus $H_1(X;\mathbb Z)\cong\mathbb Z^n$. [A1, F1, F2, given, construct]

2.1 The boundary of a small positive normal disk to $J_i$ maps to the $i$-th Alexander-duality coordinate generator: it meets $J_i$ once positively and misses every other component. Hence $[\mu_1],\ldots,[\mu_n]$ are the coordinate basis, with the positive orientation normalized as in [F3]. The $i$-th coordinate of $[\lambda_i]$ is zero by its zero self-linking convention, and for $j\ne i$ its $j$-th coordinate is the defined linking number $\operatorname{lk}_{S^3}(J_i,J_j)$. Therefore $[\delta_i]=[\lambda_i+f_i\mu_i]=\sum_jA_{ij}[\mu_j]$. [F3, step 1.1, given, construct]

3.1 In Mayer–Vietoris for the filling, the map $H_1(\partial V_i)\to H_1(V_i)$ is onto and its kernel is generated by the meridian-disk boundary $\delta_i$. The map $H_0(\bigsqcup_i\partial V_i)\to H_0(X)\oplus H_0(\bigsqcup_iV_i)$ is injective: in coordinates it sends $(a_1,\ldots,a_n)$ to $(\sum_i a_i,-a_1,\ldots,-a_n)$. Exactness therefore gives $H_1(Y;\mathbb Z)=\mathbb Z^n/A\mathbb Z^n$. [F4, step 1.1, step 2.1, given, algebra]

4.1 Since $A$ is invertible over $\mathbb Q$, for every $x\in\mathbb Z^n$ some positive integer $m$ clears the denominators of $A^{-1}x$, so $mx\in A\mathbb Z^n$ and each class is torsion. If $F,F'$ bound $mC,m'C$, pass to a common multiple $M$; the difference $(M/m)F-(M/m')F'$ is a 2-cycle $Z$. If $r[D]=0$, write $rD=\partial G$; the chain boundary identity gives $r(Z\mathbin{\cdot}D)=Z\mathbin{\cdot}\partial G=\partial Z\mathbin{\cdot}G=0$, hence $Z\mathbin{\cdot}D=0$. Thus the quotient is independent of the chosen bounding chain and multiple modulo integers. Replacing either cycle representative by a homologous one adds an integer by the same boundary identity. [step 3.1, given, algebra]

4.2 Let $B$ be the slope-coordinate matrix $[\delta]=B[\mu]$ in $H_1(X;\mathbb Q)$; step 2.1 gives $B=A$. In the reverse filling, the slope-coordinate matrix is $B^{-1}$. Let $\widetilde J_i$ denote the core of the attached solid torus, oriented so the boundary longitude $\ell_i$ mapping to it satisfies $\delta_i\mathbin{\cdot}\ell_i=1$. Since $\delta_i\mathbin{\cdot}\mu_i=-1$, the image of $\mu_i$ in that solid torus is $-[\widetilde J_i]$. Define $H_{ij}=\operatorname{lk}_Y(\widetilde J_i,\widetilde J_j)$ for $i\ne j$, and let $H_{ii}$ be the reverse-surgery framing determined by the slope $\mu_i$. For $i\ne j$, clear denominators in $[\mu_i]=\sum_k(B^{-1})_{ik}[\delta_k]$ and cap each $\delta_k$ by its meridian disk. The chain in $X$ realizing this homology relation misses every core; with $\delta_k\mathbin{\cdot}\ell_k=+1$, the capped disk in $V_k$ meets the oriented core $\widetilde J_j$ once positively if $k=j$ and not at all otherwise. Hence $(B^{-1})_{ij}=\operatorname{lk}_Y(\mu_i,\widetilde J_j)=-H_{ij}$. The reverse diagonal framing is the reverse slope coefficient divided by $\delta_i\mathbin{\cdot}\mu_i=-1$, so $H_{ii}=-(B^{-1})_{ii}$. Therefore $H=-B^{-1}=-A^{-1}$. [step 2.1, step 3.1, given, construct, algebra]

5.1 Each old meridian $\mu_i$ represents $-\widetilde J_i$ in its attached solid torus. Hence for distinct indices their linking equals the core-linking entry $H_{ij}$; for a self-pairing, a parallel meridian maps to the parallel core specified by the reverse framing, also giving $H_{ii}$. Thus $\lambda_Y([\mu_i],[\mu_j])=-(A^{-1})_{ij}$. The chain formula is additive in both cycles, by taking common multiples and summing bounding chains, so its matrix on the meridian basis gives $\lambda_Y([x],[y])=-x^TA^{-1}y\pmod{\mathbb Z}$. If $x$ is replaced by $x+Az$, the value changes by $-z^Ty$; if $y$ is replaced by $y+Az$, it changes by $-x^Tz$, both integers because $A$ is symmetric and integral. [step 3.1, step 4.1, step 4.2, algebra] ∎

## Remarks

The reverse filling restores $S^3$ by surgery on the core link. The diagram records the two surgery descriptions; the slope-basis calculation in steps 4.2–5.1 supplies the inverse-matrix sign.

```tikzcd
\begin{tikzcd}
S^3 \arrow[r, "\text{forward surgery}"] & Y \arrow[r, "\text{reverse surgery}"] & S^3
\end{tikzcd}
```
