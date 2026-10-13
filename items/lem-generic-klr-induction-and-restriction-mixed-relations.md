---
id: lem-generic-klr-induction-and-restriction-mixed-relations
kind: lemma
title: "Generic KLR induction and restriction: mixed relations and the opposite-end exact sequence"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 6
deps: [def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum,
       def-klr-grading-and-diagrammatic-composition,
       def-klr-induction-and-restriction-bimodules,
       def-divided-power-klr-idempotents-and-projectives,
       thm-klr-pbw-basis-theorem,
       thm-klr-induction-and-restriction-are-biadjoint-and-preserve-projectives]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Seok-Jin Kang and Masaki Kashiwara, Categorification of Highest Weight Modules via Khovanov-Lauda-Rouquier Algebras, arXiv:1102.4677v4"
      url: "https://arxiv.org/pdf/1102.4677v4"
      locator: "Section 3, Proposition 3.2 (right coset decomposition of R(n+1) over R(n,1)), Proposition 3.3, Corollary 3.4 (the corner isomorphism with its q-shifts), Theorem 3.6 (mixed isomorphisms), Proposition 3.7 and Corollary 3.8 (the (R(n),R(n))-bimodule exact sequence), Theorem 3.9 (the opposite-end functorial exact sequence)."
    - title: "Mikhail Khovanov and Aaron D. Lauda, A diagrammatic approach to categorification of quantum groups I, Representation Theory 13 (2009) 309-347, arXiv:0803.4121v2"
      url: "https://arxiv.org/pdf/0803.4121"
      locator: "Sections 2.3-2.5: the shuffle/PBW decomposition of R(n+1) over R(n) x R(1) and the exactness of the convolution functors."
---

## Statement

Let $R=\bigoplus_\beta R(\beta)$ be a KLR algebra on a symmetrizable Cartan datum
with no imaginary simple roots
([[def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum]]) and let
$E_i$ denote restriction $e(\beta,i)(-)$ and $F_i$, $\bar F_i$ the right-append
and left-append inductions of [[def-klr-induction-and-restriction-bimodules]]
(so that $\bar F_i(M)=R(\beta+\alpha_i)e(i,\beta)\otimes_{R(\beta)}M$ with
$e(i,\beta)=\sum_{\nu\in I^\beta}e(i\ast\nu)$). Let $t_i$ be an indeterminate of
degree $(\alpha_i\mid\alpha_i)=2d_i$. Then:

(a) for $i\ne j$ there are natural isomorphisms
$E_iF_j\cong q^{-(\alpha_i\mid\alpha_j)}F_jE_i$ and
$\bar F_jE_i\cong E_i\bar F_j$;

(b) for $i=j$ there is a natural isomorphism
$E_iF_i\cong q^{-(\alpha_i\mid\alpha_i)}F_iE_i\oplus(\mathrm{Id}\otimes_kk[t_i])$,
where $(\mathrm{Id}\otimes_kk[t_i])(M)=M\otimes_kk[t_i]$ with $t_i$ homogeneous
of degree $2d_i$;

(c) the opposite-end corner comparison gives a functorial exact sequence in
$\mathrm{Mod}(R(\beta))$
$$0\longrightarrow \bar F_iE_iM\longrightarrow E_i\bar F_iM\longrightarrow q^{-(\alpha_i\mid\beta)}M\otimes_kk[t_i]\longrightarrow 0,$$
where $\otimes_kk[t_i]$ is understood in the graded sense. For $n\ge1$, the underlying uncolored bimodules have the exact sequence
$0\to R(n)\otimes_{R_1(n-1)}R_1(n)\to R(n+1)\to R(n)\otimes_kk^I[t]\to0$,
where $k^I=\bigoplus_{j\in I}k\epsilon_j$ retains the transferred strand color,
and the right $R(n)$ action is through the shift embedding $\xi_n$.
The quotient grading is the degree of the full transfer word on each labeled
corner; its fixed-color $i$ corner is the shifted polynomial term of (c). All shifts are computed in the fixed grading of
[[def-klr-grading-and-diagrammatic-composition]]; the functors are exact
([[thm-klr-induction-and-restriction-are-biadjoint-and-preserve-projectives]]).

## Facts & Assumptions

**Given:** A KLR algebra $R$ for a symmetrizable Cartan datum with $a_{ii}=2$,
colors $i,j$, and $\beta\in Q_+$ with $|\beta|=n$; the idempotents
$e(\beta,i)$, $e(i,\beta)$ and the functors $E_i,F_i,\bar F_i$ of
[[def-klr-induction-and-restriction-bimodules]].

[F1] The PBW basis of [[thm-klr-pbw-basis-theorem]]: for a reduced-expression
system, $\{\tau_wx_1^{a_1}\cdots x_n^{a_n}e(\nu)\}$ with $w\in S_n$, $a_r\ge0$,
$\nu\in I^n$ is a $k$-basis of $R_n(Q)$, and each $R(\beta)$ has
finite-dimensional homogeneous components. In particular, for each $w$ there is
$\ell(w)$ and $\tau_w$ is a $k$-linear combination of products of crossings; the
elementary relations of (Q1)-(Q4) and the braid relations let every product of
crossings be rewritten in this form.

[F2] The native dot moves have $\tau_ax_a-x_{a+1}\tau_a=e$ and $\tau_ax_{a+1}-x_a\tau_a=-e$ on equal-color corners. With $\kappa_a:=-\tau_a$, the polynomial dot-move identity is $\kappa_af-(s_af)\kappa_a=(\partial_af)e$, where $\partial_af=(s_af-f)/(x_a-x_{a+1})$; equivalently the native $\tau_a$ identity uses $(f-s_af)/(x_a-x_{a+1})$. The far dot moves remain $\tau_ax_b=x_{s_a(b)}\tau_a$ for $b\notin\{a,a+1\}$; on unequal-color corners $\tau_ax_a=x_{a+1}\tau_a$, $\tau_ax_{a+1}=x_a\tau_a$ and $\tau_a^2=Q_{ij}(x_a,x_{a+1})$, and hence $\kappa_a^2=Q_{ij}(x_a,x_{a+1})$ also. These are relations (4)-(7) of [[def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum]] and the grading conventions of [[def-klr-grading-and-diagrammatic-composition]].

[F3] The append bimodules $R(\beta+\alpha_i)e(\beta,i)$ and
$e(\beta,i)R(\beta+\alpha_i)$ are ungraded free, respectively on the right
and left, over $R(\beta)\otimes_k k[t_i]$, of shuffle rank $n+1$. Their
graded decompositions have the labelled shuffle shifts and principal
idempotent summands of
[[thm-klr-induction-and-restriction-are-biadjoint-and-preserve-projectives]].
On forgetting the $k[t_i]$ action they remain projective over $R(\beta)$,
with all powers of the extra dot retained; there is no finite shuffle basis
over $R(\beta)$ alone. Thus right-append induction is exact; idempotent
restriction is exact, and tensor--Hom evaluation gives $F_i\dashv E_i$
([[def-klr-induction-and-restriction-bimodules]]).

## Proof

**Proof technique:** compare PBW bases for the two same-end double cosets and for the opposite-end overlap, then pass to the correct colored corners and tensor only a right-split exact sequence.

1.1 Conventions and PBW coordinates. Put $\kappa_a=-\tau_a$ for every color pair, so $\kappa_w=(-1)^{\ell(w)}\tau_w$ has the same degree and is a PBW basis with the source dot and braid signs. For $n\ge1$, embed $R(n)$ on positions $1,\ldots,n$ and $R_1(n)=\xi_nR(n)$ on positions $2,\ldots,n+1$; their overlap is $R_1(n-1)$ on positions $2,\ldots,n$. Write $k^I=\bigoplus_{j\in I}k\epsilon_j$ for the color algebra. Choosing reduced words adapted to the cosets gives the left PBW decomposition $R(n+1)=\bigoplus_{a=1}^{n+1}R(n,1)\kappa_n\cdots\kappa_a$ and the right PBW decomposition $R(n+1)=\bigoplus_{a=1}^{n+1}\kappa_a\cdots\kappa_n(k^I[x_{n+1}]\otimes_kR(n))$, where the product for $a=n+1$ is $1$. These are labelled decompositions: polynomial and idempotent coefficients keep the transferred color, and crossing degrees are summed on the actual word. PBW independence follows by using those reduced coset words followed by a reduced word in $S_n$; the resulting products have additive lengths and are precisely the chosen PBW basis. [F1, F2, algebra]

1.2 The empty-word case. At $\beta=0$ the KLR presentation gives $R(0)=k$ and $R(\alpha_j)=k[x_1]e(j)$ with $\deg x_1=2d_j$. The empty word has no last strand, so its $E_i$-restriction is zero on the weight-graded category, without introducing a negative-height algebra. Both append inductions of a graded $k$-module $M$ are $k[x_1]e(j)\otimes_kM$. Orthogonality of $e(i),e(j)$ gives $E_iF_jM=E_i\bar F_jM=0$ for $i\ne j$, whereas $E_iF_iM=E_i\bar F_iM\cong M\otimes_kk[t_i]$ by $x_1^a\otimes m\mapsto m\otimes t_i^a$, naturally and in degree zero. Thus (a) is zero-to-zero, (b) has precisely the polynomial summand with coefficient $1$, and (c) is $0\to0\to M\otimes_kk[t_i]\xrightarrow{\mathrm{id}}M\otimes_kk[t_i]\to0$, since $(\alpha_i\mid0)=0$. The uncolored overlap formula involving $R_1(n-1)$ below is used only for $n\ge1$. [F2, F3, algebra]

2.1 The same-end double cosets. For $n\ge1$ define $T:R(n)\otimes_{R(n-1)}R(n)\to R(n+1)$ by $x\otimes y\mapsto x\kappa_ny$, with both outer algebras embedded on the first $n$ positions. It is balanced because $\kappa_n$ commutes with the generators on positions $1,\ldots,n-1$. Decompose the first factor as the right $R(n-1)$-module $\bigoplus_{a=1}^n\kappa_a\cdots\kappa_{n-1}(k^I[x_n]\otimes_kR(n-1))$. For a polynomial/color coefficient $f(x_n)$, the dot move gives $f(x_n)\kappa_n=\kappa_nf(x_{n+1})+c$, where $c$ lies in the polynomial/idempotent algebra on the first $n+1$ positions and its last-color projector equals its adjacent-color projector; consequently $\kappa_a\cdots\kappa_{n-1}c\,y$ lies in $R(n,1)$. Modulo $R(n,1)$ the image is therefore exactly $\kappa_a\cdots\kappa_nf(x_{n+1})y$. These are the right PBW cosets $a=1,\ldots,n$, bijectively, with coefficient $1$, so the induced quotient map is an isomorphism. Inclusion of $R(n,1)$ then gives the actual bimodule isomorphism $T\oplus\mathrm{incl}:R(n)\otimes_{R(n-1)}R(n)\oplus R(n,1)\to R(n+1)$: injectivity and surjectivity follow by first passing to the quotient and then to the included summand. This retains all nonidentity cosets, rather than discarding cosets $a>1$. [step 1.1, F2, algebra]

2.2 The opposite-end overlap map. For $n\ge1$, multiplication defines a balanced $(R(n),R_1(n))$-bimodule map $U:R(n)\otimes_{R_1(n-1)}R_1(n)\to R(n+1)$, $x\otimes y\mapsto xy$. The PBW decomposition in the last $n$ positions is $R_1(n)=\bigoplus_{a=2}^{n+1}(R_1(n-1)\otimes_kk^I[x_{n+1}])\kappa_n\cdots\kappa_a$. Tensoring this displayed free decomposition identifies the domain of $U$ with $\bigoplus_{a=2}^{n+1}R(n,1)\kappa_n\cdots\kappa_a$. Multiplication maps each basis element to the identically named PBW element, so $U$ is injective and its image $J$ is exactly those cosets. Using the opposite PBW decomposition gives also $J=\bigoplus_{a=0}^{n-1}\kappa_a\cdots\kappa_1R(1,n)$, where $a=0$ is the empty product. Thus $J$ is the overlap bimodule, not a two-sided ideal, and the quotient has the sole remaining transfer coset $R(n,1)\kappa_n\cdots\kappa_1$, equivalently $\kappa_n\cdots\kappa_1R(1,n)$. [step 1.1, F1, F2, algebra]

3.1 Correct same-end colored kernels. For an input weight $\beta$ set $\delta=\beta-\alpha_i$ and $\gamma=\delta+\alpha_j$. When $\delta\in Q_+$, the kernel of $E_iF_j$ is $e(\gamma,i)R(\beta+\alpha_j)e(\beta,j)$, an $(R(\gamma),R(\beta))$-bimodule. Cutting the isomorphism of step 2.1 by these idempotents gives the image under $T$ of $R(\gamma)e(\delta,j)\otimes_{R(\delta)}e(\delta,i)R(\beta)$, the kernel of $F_jE_i$. The factors project onto the two colors interchanged by $\kappa_n$, so its degree is exactly $-b_{ij}$, and the image is the domain shifted by $-b_{ij}$. If $\delta\notin Q_+$, $E_i$ has zero restriction on the input weight because no word of weight $\beta$ ends in $i$; the transfer summand is zero, without writing any algebra at a negative weight. For $i\ne j$ the one-strand-enlarged word then also has no $i$ endpoint, so $E_iF_j$ is zero. The other summand $R(n,1)$ preserves the last color, so it vanishes exactly for $i\ne j$; for $i=j$ its corner is $R(\beta)\otimes_kk[t_i]$, with $\deg t_i=2d_i$. Hence the bimodule maps give (a)'s same-end isomorphism and (b), with coefficient $1$ on the polynomial summand. Tensoring an actual bimodule isomorphism with any graded input module preserves it; no exactness or flatness assumption is needed for this passage. [step 2.1, F2, F3, algebra]

3.2 The quotient and its right splitting. Put $w=\kappa_n\cdots\kappa_1$. Move a dot or crossing along $w$ by the local relations. Modulo $J$ these moves give $x_aw=w x_{a+1}$ for $1\le a\le n$, $x_{n+1}w=w x_1$, and $\kappa_aw=w\kappa_{a+1}$ for $1\le a<n$. Dot corrections remove one crossing and braid corrections remove the three-crossing braid block; in each case the surviving permutation fails to transfer the first endpoint all the way to the last endpoint, so its PBW coset is among $a=2,\ldots,n+1$ and lies in $J$. Idempotents simply follow the same cyclic permutation. These generator identities prove $a f(x_{n+1})w=w\xi_n(a)f(x_1)$ in the quotient. Taking the coefficient of $w$ therefore identifies the underlying bimodule quotient with $R(n)\otimes_kk^I[t]$, the right $R(n)$ action being through $\xi_n$, and both indicated endpoint dots becoming $t$. The color algebra is retained because the transferred endpoint can have any color. Its right PBW expression $w(k^I[x_1]\otimes_kR_1(n))$ provides a right $R_1(n)$-linear section of the quotient map by choosing those same PBW representatives. It need not be a bimodule section. Hence the sequence defined by $U$ and this coefficient map is right-split before any tensoring. [step 2.2, F2, algebra]

4.1 Opposite-end colored kernels and degrees. With $\delta,\gamma$ as in step 3.1 and $\delta\in Q_+$, the kernel of $E_i\bar F_j$ is $e(\gamma,i)R(\beta+\alpha_j)e(j,\beta)$, with right $R(\beta)$ action through $\xi_n$. Cutting $U$ identifies its overlap submodule with $R(\gamma)e(j,\delta)\otimes_{R(\delta)}e(\delta,i)R(\beta)$, the kernel of $\bar F_jE_i$, by the plain multiplication map; this map adds no crossing and has degree zero. The quotient transfer word $w$ takes bottom $(j,\nu)$ to top $(\nu,j)$, so this quotient corner vanishes for $i\ne j$ and gives the unshifted opposite-end isomorphism in (a). For $i=j$ and $\nu$ of weight $\beta$, $w e(i,\nu)$ has degree $-\sum_a b_{i\nu_a}=-(\alpha_i\mid\beta)$. Thus the quotient corner is $q^{-(\alpha_i\mid\beta)}R(\beta)\otimes_kk[t_i]$, with the label $i$ fixed and $\deg t_i=2d_i$. The right section in step 3.2 respects these color projectors and this degree shift, so the colored sequence is split as right $R(\beta)$-modules. Tensoring with any graded $M$ retains its injective first map and exact quotient and gives precisely (c), functorially, with the stated shift. If $\delta\notin Q_+$ the overlap corner is zero; at $\beta=0$ this agrees with step 1.2. [step 3.1, step 2.2, step 3.2, F3, algebra]

5.1 Conclusion. Steps 1.2 and 3.1 establish the same-end mixed isomorphisms, and step 4.1 establishes the opposite-end isomorphism and exact sequence for every weight. All maps are the explicit homogeneous PBW corner maps above; the opposite-end sequence is right-split before tensoring, and the uncolored expression retains its transferred-color labels and uses $n\ge1$. The dots, crossing signs and shifts are those of the fixed native grading, with the source normalization $\kappa=-\tau$ affecting only unit PBW coefficients. No quotient flatness, uniform shift for all labelled cosets, or negative-height algebra is assumed. [step 1.2, step 3.1, step 4.1] ∎
