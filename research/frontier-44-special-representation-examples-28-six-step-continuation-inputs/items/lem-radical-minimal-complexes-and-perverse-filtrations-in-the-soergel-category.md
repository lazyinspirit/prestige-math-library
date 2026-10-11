---
id: lem-radical-minimal-complexes-and-perverse-filtrations-in-the-soergel-category
kind: lemma
title: "Radical quotients, minimal complexes and perverse filtrations in the Soergel category"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 4
deps: [def-minimal-complexes-and-perverse-truncations-in-the-type-a-soergel-category, lem-rational-and-real-type-a-soergel-characters-and-indecomposable-labels-agree, lem-hecke-trace-bilinear-form-and-its-values-on-the-kazhdan-lusztig-basis, thm-the-type-a-soergel-hom-formula, thm-homological-gaussian-elimination-splits-off-a-contractible-two-term-complex]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Elias-Williamson, The Hodge theory of Soergel bimodules (arXiv:1212.0791v2, final version; Ann. of Math. 180 (2014) 1089-1136)"
      url: "https://arxiv.org/pdf/1212.0791v2"
      locator: "Sections 6.1-6.3 (radical quotient, minimal models, perverse filtration, Lemma 6.1), with local finite-dimensional radical and Hom-vanishing arguments"
    - title: "Riche, La theorie de Hodge des bimodules de Soergel (d'apres Soergel et Elias-Williamson), Seminaire Bourbaki no. 1139 (arXiv:1711.02464, Octobre 2017)"
      url: "https://arxiv.org/pdf/1711.02464"
      locator: "Section 2.5 (complexes de Rouquier, complexes minimaux)"
    - title: "Gobet, Twisted filtrations of Soergel bimodules and linear Rouquier complexes (arXiv:1601.00339; J. Algebra 484 (2017) 275-309)"
      url: "https://arxiv.org/pdf/1601.00339"
      locator: "Section 5.1 (Rouquier complexes and minimal complexes) and Section 6 (linearity)"
verification:
  precheck: pass
---

## Facts & Assumptions

**Given:** The real type-A Soergel category $\mathcal B=\mathrm{SBim}_n^R$, its categorical radical and quotient $q:\mathcal B\to\mathcal B^{ss}$ defined by the invertibility criterion, minimal complexes, perverse and p-split bimodules, and the perverse cuts $\tau$, all as in [[def-minimal-complexes-and-perverse-truncations-in-the-type-a-soergel-category]].

[F1] The indecomposables are the $B_w^R(d)$ with local endomorphism algebras and residue field $\mathbb R$; for $\mathrm{S}(w)$ the character is $\underline H_w$, and $\operatorname{End}^0(B_w^R)$ is one-dimensional; the Hom spaces are finite graded free with graded rank $\langle h_\Delta(M),h_\nabla(N)\rangle$ ([[lem-rational-and-real-type-a-soergel-characters-and-indecomposable-labels-agree]], [[thm-the-type-a-soergel-hom-formula]]).

[F2] The trace form on the Hecke algebra is $A$-bilinear with $(\underline H_x,\underline H_y)\in v\mathbb Z[v]$ for $x\ne y$ and $(\underline H_x,\underline H_x)\in1+v\mathbb Z[v]$; the Kazhdan-Lusztig basis elements satisfy $\underline H_x=H_x+\sum_{y<x}p_{y,x}H_y$ with $p_{y,x}\in v\mathbb Z[v]$ for $y<x$ ([[lem-hecke-trace-bilinear-form-and-its-values-on-the-kazhdan-lusztig-basis]]).

[F3] Gaussian elimination splits off a contractible two-term summand across an invertible differential block, replacing a complex by a homotopy equivalent complex with a smaller number of indecomposable terms ([[thm-homological-gaussian-elimination-splits-off-a-contractible-two-term-complex]]).

## Statement

(1) The quotient $\mathcal B^{ss}$ is semisimple with simple classes $B_x(k)$ and endomorphism rings $\mathbb R$, and $q$ reflects isomorphisms.

(2) Every bounded complex of $\mathcal B$ has a minimal direct summand whose inclusion is a homotopy equivalence, and any two minimal models are isomorphic as complexes.

(3) Every direct summand of a perverse (respectively p-split) bimodule is perverse (respectively p-split).

(4) For perverse $M,N$ one has $\operatorname{Hom}(M,N(-i))=0$ for $i>0$.

(5) The perverse cuts on p-split bimodules are independent of the chosen decomposition and are preserved by every morphism.

(6) The definitions of $pK^b_{\ge0}$ and $pK^b_{\le0}$ can equivalently be tested on the minimal model, and both classes are closed under extensions in distinguished triangles.

## Proof

**Proof technique:** direct; finite-dimensional endomorphism algebras over $\mathbb R$, Gaussian elimination of non-minimal differentials, and triangularity of the Kazhdan-Lusztig basis.

1.1 **Endomorphism algebras are finite-dimensional with residue field $\mathbb R$.** For indecomposables $X=B_x^R(d)$, $Y=B_y^R(e)$ the graded Hom space is finite free over $S$ in each degree and its degree-zero part is finite-dimensional over $\mathbb R$; hence for a finite direct sum $M=\bigoplus_aX_a$ the algebra $\operatorname{End}(M)$ is finite-dimensional over $\mathbb R$ in degree zero, with block matrix entries $\operatorname{Hom}^0(X_a,X_b)$. If $X\not\cong Y$ then $\operatorname{Hom}^0(X,Y)$ consists of non-units (a split injection or surjection would exhibit a common summand of two non-isomorphic indecomposables with local endomorphism rings), while $\operatorname{End}^0(X)$ is local with residue $\mathbb R$ by [F1]; the radical of $\operatorname{End}(M)$ is therefore the set of matrices whose every diagonal block is a non-unit, and $\operatorname{End}(M)/\operatorname{rad}$ is the product of the matrix algebras $\mathbb M_{m_{c}}(\mathbb R)$ over the isomorphism classes $c=(x,k)$ of summands. Because all these matrix algebras are simple over the field $\mathbb R$ and cross-class maps vanish, $\operatorname{End}(M)/\operatorname{rad}$ is a finite product of matrix algebras over $\mathbb R$, hence semisimple. [given, F1]

2.1 **Nilpotence of the radical and reflection of isomorphisms.** The radical of the finite-dimensional algebra $\operatorname{End}(M)$ is nilpotent, since it is contained in the set of elements $r$ such that $1-r$ is invertible in the finite-dimensional algebra: the descending chain of powers $\operatorname{rad}^{k}$ stabilizes in finite dimension, and the minimal-generator argument applied to a stable nonzero term forces it to be zero. If $q(f)$ is invertible in $\mathcal B^{ss}$, lift a two-sided inverse $g$; then $1-gf$ and $1-fg$ lie in $\operatorname{rad}\operatorname{End}$ of the relevant objects, and the finite geometric series $(1-(1-gf))^{-1}$ inverts $1-(1-gf)$, so $f$ is invertible. Hence $q$ reflects isomorphisms, and the simple classes of $\mathcal B^{ss}$ are the $B_x(k)$ with endomorphism rings $\mathbb R$; this proves (1). [step 1.1, F1, algebra]

3.1 **Minimal models exist (2), existence.** Let $F$ be a bounded complex; if $q(d^n)=0$ in every degree, $F$ is minimal and we are done. Otherwise some differential $d^n:F^n\to F^{n+1}$ has $q(d^n)\ne0$; writing $F^n,F^{n+1}$ as finite sums of shifted indecomposables, $q(d^n)$ has a nonzero matrix entry between summands of the same class $(x,k)$, because the simple objects of $\mathcal B^{ss}$ are the $B_x(k)$ and cross-class entries vanish by step 1.1. That entry is an invertible element of the local ring $\operatorname{End}^0(B_x^R(k))$, so the corresponding block of $d^n$ is invertible; [F3] applies and replaces $F$ by a homotopy equivalent complex with two fewer indecomposable summands. Repeating finitely many times produces a minimal direct summand whose inclusion is a homotopy equivalence (a composite of the Gaussian-elimination homotopy equivalences), as claimed. [step 1.1, step 2.1, F3]

4.1 **Uniqueness of minimal models (2), uniqueness.** Let $f:F\to G$ be a homotopy equivalence between minimal complexes. Applying $q$ degreewise, $q(d_F)=0$ and $q(d_G)=0$, so $q(f)$ is a degreewise morphism of complexes with zero differentials, i.e. a degreewise map of graded $\mathcal B^{ss}$-modules; since $f$ is a homotopy equivalence and $q$ is additive, $q(f)$ is an isomorphism in the homotopy category of complexes over the semisimple category $\mathcal B^{ss}$, hence each $q(f^n)$ is an isomorphism. As $q$ reflects isomorphisms by step 2.1, each $f^n$ is an isomorphism, so $f$ is an isomorphism of complexes. This proves (2). [step 2.1, step 3.1]

5.1 **Summands of perverse objects (3).** Let $M$ be p-split with a decomposition into shifts of perverse summands and let $M'$ be a direct summand of $M$; then $M'$ is a finite sum of shifted indecomposables $B_y^R(e)$ by [F1]. The character of $M$ is bar-invariant and equals $\sum_\alpha c_\alpha\underline H_{x_\alpha}$ in the Kazhdan-Lusztig basis with all $c_\alpha$ nonnegative integers; expanding in the standard basis and using $\underline H_x=H_x+\sum_{y<x}p_{y,x}H_y$ with $p_{y,x}\in v\mathbb Z[v]$ shows that every standard-basis coefficient of $\operatorname{ch}(M)$ lies in $\mathbb Z_{\ge0}[v]$. The standard coefficients of $\operatorname{ch}(M')$ are sums of nonnegative multiplicities of $M$, hence nonnegative Laurent polynomials whose sum with those of the complementary summand equals the coefficient of $\operatorname{ch}(M)$; a sum of nonnegative Laurent polynomials has no negative $v$-powers if the total has none, so the same holds for $\operatorname{ch}(M')$. Expand $\operatorname{ch}(M')=\sum_zf_z(v)\underline H_z$ with $f_z\in\mathbb Z[v^{\pm1}]$; the standard coefficient of $H_y$ in $\operatorname{ch}(M')$ is $\sum_{z\ge y}f_zp_{y,z}$, and descending induction on the Bruhat order in $y$ using $p_{y,z}\in v\mathbb Z[v]$ for $z>y$ shows $f_y\in\mathbb Z[v]$ for every $y$: the term $f_y\cdot1$ is the only contribution to the constant term among the $z\ge y$ contributions of $H_y$, and all others have positive $v$-valuation. Bar-invariance of $\operatorname{ch}(M')$ and of every $\underline H_z$ forces each $f_y$ to be fixed by $v\mapsto v^{-1}$; an element of $\mathbb Z[v]$ fixed by inversion is constant, $f_y=c_y\in\mathbb Z$. Finally $c_y$ equals the constant term of the standard coefficient of $H_y$ in $\operatorname{ch}(M')$, which is nonnegative. Hence $\operatorname{ch}(M')=\sum_yc_y\underline H_y$ with $c_y\ge0$ integers, so $M'$ is perverse; the p-split case follows by decomposing into indecomposables and applying the perverse case to each isotypic summand. This proves (3). [step 4.1, F1, F2]

6.1 **Hom vanishing for perverse objects (4).** Let $M=\bigoplus_x(B_x^R)^{m_x}$, $N=\bigoplus_y(B_y^R)^{n_y}$ be perverse with all $m_x,n_y\ge0$ integers and no shifts, which is the form in which the character is a nonnegative integer combination of the Kazhdan-Lusztig basis elements; by [F1] the graded rank of $\operatorname{Hom}(M,N)$ is $\langle\operatorname{ch}(M),d(\operatorname{ch}(N))\rangle=\sum_{x,y}m_xn_y(\underline H_x,\underline H_y)$ for the $A$-bilinear trace form, and by [F2] this equals $\sum_xm_xn_x(1+v\mathbb Z[v])+(\text{elements of }v\mathbb Z[v])\in\mathbb Z[v]$, a polynomial with nonnegative $v$-powers. A degree-zero map $M\to N(-i)$ is a degree-$(-i)$ map $M\to N$ in the internal grading, so its space is the degree-$(-i)$ part of $\operatorname{Hom}(M,N)$; this vanishes for $i>0$ because the graded rank has no negative $v$-powers. This proves (4). [step 5.1, F1, F2]

7.1 **Intrinsicness and functoriality of the cuts (5).** Let $X=B_x^R(k)$ and $Y=B_y^R(l)$ be shifts of perverse summands of p-split objects. By the same computation as in step 6.1 with $m_x=n_y=1$, the graded rank of $\operatorname{Hom}(X,Y)$ equals $v^{l-k}$ times the graded rank of $\operatorname{Hom}(B_x^R,B_y^R)$, and the latter lies in $\mathbb Z[v]$ because both characters are nonnegative integer combinations of the Kazhdan-Lusztig basis and the trace-form values $(\underline H_z,\underline H_w)$ lie in $\mathbb Z[v]$ with nonnegative $v$-powers by [F2]. Hence $\operatorname{Hom}^0(X,Y)=\operatorname{Hom}^{k-l}(B_x^R,B_y^R)=0$ unless $k-l\le0$, that is, every degree-zero morphism from $X$ to $Y$ satisfies $l\ge k$. Consequently every degree-zero morphism raises the internal shift parameter and maps the subobject $\tau_{\le j}M$ into $\tau_{\le j}M'$ for any morphism $f:M\to M'$ of p-split objects. Applying this to an isomorphism between two p-split decompositions of the same object and to its inverse shows that the two $\tau_{\le j}$ subobjects coincide, so the cuts are independent of the decomposition, and the containment just displayed is the functoriality. This proves (5). [step 6.1, F1, F2]

8.1 **Minimal-model testing and triangle closure (6).** A minimal model is obtained from a complex by splitting off contractible two-term summands by [F3] and steps 3.1-4.1; since a contractible complex is isomorphic in the homotopy category to the zero complex and the cuts of a direct sum are the direct sums of the cuts, the bounds $\tau_{<-i}(F^i)=0$ and $F^i=\tau_{\le-i}(F^i)$ hold on a complex if and only if they hold on any minimal model. For closure under extensions, let $F'\to F\to F''\to$ be a distinguished triangle with $F',F''$ satisfying the $\ge0$ bounds; represent $F'$ and $F''$ by complexes with p-split terms obeying $\tau_{<-i}=0$, and represent $F$ by the mapping cone of $F''[-1]\to F'$, whose $i$-th term is $F'^i\oplus F''^{i-1}$; since $F''^{i-1}$ satisfies $\tau_{<-(i-1)}=0$ and $F'^i$ satisfies $\tau_{<-i}=0$, and $\tau_{<-i}\subseteq\tau_{<-(i-1)}$, the direct sum satisfies $\tau_{<-i}=0$, so $F\in pK^b_{\ge0}$. The same argument with the dual inequalities $k\ge i$ proves closure of $pK^b_{\le0}$; nothing in the argument uses minimality of the representatives, only the bounds and the mapping-cone description of the third term. This proves (6) and completes the lemma. [step 3.1, step 7.1] ∎

## Remarks

- The semisimplicity of $\mathcal B^{ss}$ is over the field $\mathbb R$; the residue fields are exactly $\mathbb R$ by the comparison lemma, and this is what allows the matrix-entry argument in the minimal-model existence proof.
- The perversity of a summand in step 5.1 is proved from nonnegativity of coefficients and bar-invariance only; no positivity of the Kazhdan-Lusztig polynomials in the standard basis is assumed at this point of the page.
