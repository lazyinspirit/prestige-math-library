---
id: lem-the-coinvariant-algebra-is-a-gorenstein-algebra-with-one-dimensional-socle
kind: lemma
title: The coinvariant algebra is a complete intersection with one-dimensional socle
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 1
deps: [def-the-coinvariant-algebra-of-a-finite-weyl-group,
       thm-chevalley-shephard-todd-for-finite-weyl-groups,
       lem-reflection-basic-invariants-form-a-regular-sequence,
       lem-weyl-coinvariant-hilbert-series-has-order-w-dimension,
       cor-koszul-complex-resolves-a-regular-quotient, def-axiom-of-choice,
       def-koszul-complex-of-a-sequence-with-coefficients,
       thm-basic-koszul-homology,
       thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic,
       def-tor-by-resolving-the-left-module,
       def-tor-by-resolving-the-right-module,
       def-multivariate-polynomial-ring-by-iteration]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Wolfgang Soergel, Kategorie O, perverse Garben und Moduln ueber den Koinvarianten zur Weylgruppe, J. Amer. Math. Soc. 3 (1990) 421-445 (MPIM preprint 1989/46 full text)"
      url: "https://archive.mpim-bonn.mpg.de/3653/1/preprint_1989_46.pdf"
      locator: "Section 2.3, the proof of Lemma 6: 'Er hat genau ein maximales Ideal C_+. ... Poincare-Dualitaet besagt, dass C x C -> C, (f,g) -> w(fg) eine nichtentartete Paarung ist. Somit hat der Sockel von C die Dimension Eins.' (preprint p. 13)"
    - title: "Arthur Garnier, The classical theory of Soergel bimodules and the link with Lusztig's conjecture, Oberwolfach Arbeitsgemeinschaft note (2022)"
      url: "https://www.lamfa.u-picardie.fr/agarnier/talks/soergel_notes.pdf"
      locator: "Part 4, Section 10: the coinvariant algebra as C = R/I_W with R = Sym(h) and deg(h*) = 2 (used here only for the degree convention of the Hilbert series), printed p. 10"
---

## Statement

Assume the Axiom of Choice, inherited from the published invariant-theory
items. Let $W$ act on the Cartan space $\mathfrak h$ by reflections and on
$S=S(\mathfrak h)$ by graded algebra automorphisms, with coinvariant algebra
$C=S/I$ as in [[def-the-coinvariant-algebra-of-a-finite-weyl-group]]. Let
$w_1,\dots,w_r$ be homogeneous basic invariants of page degrees
$2d_1,\dots,2d_r$, where $d_1,\dots,d_r$ are the classical degrees
($\deg\mathfrak h=1$; for the Cartan of $\mathfrak{sl}_n$ they are
$2,3,\dots,n$), so that $S^W=\mathbb C[w_1,\dots,w_r]$
([[thm-chevalley-shephard-todd-for-finite-weyl-groups]]), and let
$\rho:S\to C$ be the quotient by the ideal $I=(w_1,\dots,w_r)$. Put
$N:=\sum_{i=1}^r(d_i-1)$. Then:

1. The sequence $w_1,\dots,w_r$ is a homogeneous $S$-regular sequence and $C$
is a complete intersection: $C=S/(w_1,\dots,w_r)$ with
$$\operatorname{Hilb}(C,t)=\prod_i\frac{1-t^{2d_i}}{(1-t^2)^r}=\prod_i(1+t^2+\cdots+t^{2(d_i-1)}),$$
so that $\dim_{\mathbb C}C_{2N}=1$ and $C_j=0$ for $j>2N$.
2. The multiplication pairing $C_i\times C_{2N-i}\to C_{2N}\cong\mathbb C$ is
nondegenerate for every $i$, and consequently
$$\operatorname{soc}(C)=\{c\in C:C_+c=0\}=C_{2N}$$ is one dimensional.
3. Equivalently, $C$ is a graded Gorenstein algebra with one-dimensional socle
in the top degree $2N$.

## Facts & Assumptions

**Given:** A finite Weyl reflection group $W$ acting on the Cartan space $\mathfrak h$ of rank $r$, the symmetric algebra $S=S(\mathfrak h)$ with page grading $\deg\mathfrak h=2$, homogeneous basic invariants $w_1,\dots,w_r$ of page degrees $2d_i$, the ideal $I=(w_1,\dots,w_r)$, the coinvariant algebra $C=S/I$, and a basis $x_1,\dots,x_r$ of $\mathfrak h^*$ viewed as degree-two elements of $S$.

[F1] Under AC, $S^W=\mathbb C[w_1,\dots,w_r]$ with the $w_i$ algebraically independent and homogeneous of positive page degree $2d_i$, $I=S\,S^W_+$, $C$ is a finite-dimensional commutative graded $\mathbb C$-algebra with $C_0=\mathbb C$ generated in degree two, and $\rho:S\to C$ is the quotient map ([[thm-chevalley-shephard-todd-for-finite-weyl-groups]], [[def-the-coinvariant-algebra-of-a-finite-weyl-group]], [[def-axiom-of-choice]]).

[F2] Minimal homogeneous invariant generators $f_1,\dots,f_m$ of $I=S\,S^W_+$ have common zero set $\{0\}$, satisfy $m=r$, and form an $S$-regular sequence; every homogeneous lift of a homogeneous basis of $C$ is a graded free $S^W$-basis of $S$ ([[lem-reflection-basic-invariants-form-a-regular-sequence]]).

[F3] For a finite sequence $\mathbf x=(x_1,\dots,x_n)$ in a commutative ring and a module $M$, the Koszul complex $K(\mathbf x;M)$ has $H_i=0$ for $i>n$ and $H_n(K(\mathbf x;M))=\{m\in M:x_im=0\text{ for all }i\}$; if $M$ is finite free and $\mathbf x$ is $M$-regular, then $K(\mathbf x;M)$ is a finite free resolution of $M/(\mathbf x)M$. The differential preserves internal degree when the $x_i$ are given their degrees, the top exterior generator $e_1\wedge\cdots\wedge e_n$ carrying the sum of the degrees of the $x_i$ ([[def-koszul-complex-of-a-sequence-with-coefficients]], [[thm-basic-koszul-homology]], [[cor-koszul-complex-resolves-a-regular-quotient]]).

[F4] Under AC, $\operatorname{Hilb}(S/I^{\mathrm{ord}},t)=\prod_i(1+t+\cdots+t^{d_i-1})$ and $\prod_id_i=|W|$ in the classical normalization $\deg\mathfrak h=1$ ([[lem-weyl-coinvariant-hilbert-series-has-order-w-dimension]]).

[F5] In the polynomial ring $S=\mathbb C[x_1,\dots,x_r]$, the variables form a regular sequence with $S/(x_1,\dots,x_r)=\mathbb C$, and $S/(x_1,\dots,x_i)\cong\mathbb C[x_{i+1},\dots,x_r]$ ([[def-multivariate-polynomial-ring-by-iteration]]).

[F6] Under AC (hence Dependent Choice) the two constructions of $\operatorname{Tor}^S_n(-,-)$ by resolving either variable are naturally isomorphic ([[def-tor-by-resolving-the-left-module]], [[def-tor-by-resolving-the-right-module]], [[thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic]]).

## Proof

**Proof technique:** direct.

1.1 The invariant ideal is generated by the basic invariants: $I=S\,S^W_+=(w_1,\dots,w_r)$, because $S^W=\mathbb C[w_1,\dots,w_r]$ and every element of $S^W_+$ is a polynomial in the $w_i$ with zero constant term. Hence $C=S/(w_1,\dots,w_r)$; since $C$ is generated by the images of the degree-two elements, its augmentation ideal satisfies $C_+=(x_1,\dots,x_r)C$. [F1]

1.2 The $r$ basic invariants form an $S$-regular sequence: they are minimal homogeneous invariant generators of $I$ (they generate $I$, and no $w_i$ lies in the ideal generated by the others, since the $w_i$ are algebraically independent and all of positive degree), and by [F2] the minimal homogeneous invariant generators of $I$ are $r$ in number with common zero set $\{0\}$ and form an $S$-regular sequence; consequently, by [F3], $K(\mathbf w;S)$ is a finite free resolution of $C$. [F1, F2, F3]

1.3 The variables $x_1,\dots,x_r$ form an $S$-regular sequence with $S/(x_1,\dots,x_r)=\mathbb C=:k$, by [F5]; consequently, by [F3], $K(\mathbf x;S)$ is a finite free resolution of $k$. [F3, F5]

1.4 Koszul differentials vanish after base change to $k$: tensoring $K(\mathbf w;S)$ with $k$ multiplies by the images of the $w_i$ in $k$, which lie in the positive-degree part and hence act as zero; so $H_r(K(\mathbf w;S)\otimes_Sk)=K_r(\mathbf w;S)\otimes_Sk$, a one-dimensional space in internal degree $\sum_i2d_i$. [F1, F3, algebra]

2.1 First computation: by resolution 1.2 and the left-resolution construction of Tor, $\operatorname{Tor}^S_r(C,k)\cong H_r(K(\mathbf w;S)\otimes_Sk)$, which by step 1.4 is one dimensional and concentrated in internal degree $\sum_i2d_i$. [F3, F6, step 1.2, step 1.4]

2.2 Second computation: by resolution 1.3 and the right-resolution construction of Tor, $\operatorname{Tor}^S_r(C,k)\cong H_r(C\otimes_SK(\mathbf x;S))=H_r(K(\mathbf x;C))$; by [F3] the top homology is $\{c\in C:x_ic=0\text{ for all }i\}$, placed in internal degree $2r$ above the degrees of its elements, since $e_1\wedge\cdots\wedge e_r$ carries degree $2r$. [F3, F6, step 1.3]

2.3 Hilbert series: applying the Euler characteristic to the finite free resolution $K(\mathbf w;S)$ of $C$ gives $$\operatorname{Hilb}(C,t)=\prod_i(1-t^{2d_i})\cdot\operatorname{Hilb}(S,t)=\frac{\prod_i(1-t^{2d_i})}{(1-t^2)^r}=\prod_i(1+t^2+\cdots+t^{2(d_i-1)}),$$ the last equality by cancelling one factor $1-t^2$ per invariant. Hence $\operatorname{Hilb}(C,t)$ is a polynomial of degree $2N$ with leading coefficient $1$, so $\dim_{\mathbb C}C_{2N}=1$ and $C_j=0$ for $j>2N$; the classical formula [F4] gives the same series after substituting $t^2$ for $t$. [F3, F4, step 1.2, algebra]

3.1 Comparing steps 2.1 and 2.2 through the natural isomorphism [F6] identifies the top Koszul homology of step 2.2 with a one-dimensional space in internal degree $\sum_i2d_i$; shifting back by the degree $2r$ of the top exterior generator, the space $\{c\in C:x_ic=0\text{ for all }i\}$ is one dimensional and concentrated in internal degree $\sum_i2d_i-2r=2\sum_i(d_i-1)=2N$. [F6, step 2.1, step 2.2]

4.1 Since $C_+=(x_1,\dots,x_r)C$ by step 1.1, the space of step 3.1 is exactly the socle $\operatorname{soc}(C)=\{c\in C:C_+c=0\}$; it is one dimensional in degree $2N$. The top graded piece $C_{2N}$ is one dimensional by step 2.3, and every element of $C_{2N}$ is annihilated by $C_+$ because $C$ has no degrees above $2N$; hence $0\neq C_{2N}\subseteq\operatorname{soc}(C)$ and both are one dimensional in degree $2N$, so $\operatorname{soc}(C)=C_{2N}$. [step 1.1, step 2.3, step 3.1]

5.1 Nondegeneracy of the top pairing: let $0\neq c\in C_i$ be homogeneous and consider the nonzero graded ideal $cC$ of the finite-dimensional graded algebra $C$; let $m$ be the largest degree with $(cC)_m\neq0$, so $m\le2N$ by step 2.3. Choose $0\neq y\in(cC)_m$; then $C_+y\subseteq(cC)_{>m}=0$, so $y\in\operatorname{soc}(C)=C_{2N}$ by step 4.1, forcing $m=2N$. Writing $y=cb$ with $b\in C_{2N-i}$ gives a nonzero product $cb$, so the pairing $C_i\times C_{2N-i}\to C_{2N}\cong\mathbb C$ has no nonzero left radical; by commutativity it has no nonzero right radical either, and finite-dimensionality of the two sides makes it a perfect pairing for every $i$. Hence $C$ is a graded Gorenstein algebra with one-dimensional socle in top degree $2N$. [step 2.3, step 4.1, algebra] ∎
