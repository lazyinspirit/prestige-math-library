---
id: thm-the-kazhdan-lusztig-character-formula-in-regular-integral-category-o
kind: theorem
title: "The Kazhdan–Lusztig character formula in regular integral category O"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-simple-verma-composition-multiplicities-are-kazhdan-lusztig-values, def-inverse-kazhdan-lusztig-polynomials, thm-kazhdan-lusztig-inversion-formula, def-grothendieck-group-and-character-of-category-o, prop-the-grothendieck-group-of-o-has-simple-and-standard-bases, def-kazhdan-lusztig-polynomials-in-the-classical-q-normalization, thm-kazhdan-lusztig-polynomial-recursion, lem-bruhat-order-basic-properties-for-permutations, def-regular-integral-dot-orbit-labelling-convention, def-axiom-of-choice]
justified_by: []
aliases: []
landmark: false
dependency_level: 17
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  scraped: []
  references:
    - title: "Lin Chen, lecture notes (Spring 2024), Lecture 8: Hecke algebras and the Kazhdan-Lusztig conjecture (complete 10-page lecture)"
      url: "https://windshower.github.io/linchen/teaching/s2024/lecture8.pdf"
      locator: "Section 1 (printed pp. 2-3): Remarks 1.16-1.18, in particular 1.17 ('although the conjecture only uses the value at v=1, it is not possible to define this value without knowing the deformation') and 1.18 (Verma and simple modules as incarnations of the standard and Kazhdan-Lusztig bases); complete passage read."
    - title: "Anders Bjoerner and Francesco Brenti, Combinatorics of Coxeter Groups, Graduate Texts in Mathematics 231, Springer (author-hosted complete 370-page PDF)"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "Section 5.1 (printed pp. 133-136): Theorems 5.1.4 and 5.1.7 and Proposition 5.1.5 (uniqueness, constant term, degree and the descent recursion for P_{u,v}); the S_3 computation on p. 135; complete passages read."
---

## Statement

Assume the Axiom of Choice. In a regular integral type-$A$ block
$\mathcal O_\lambda$, for every $w\in W$ the class of $L(w\cdot\lambda)$ in the
Grothendieck group, equivalently its formal character, is
$$[L(w\cdot\lambda)]=\sum_{x\in W}q'_{w,x}(1)\,[M(x\cdot\lambda)],\qquad\text{i.e.}\qquad \mathrm{ch}\,L(w\cdot\lambda)=\sum_{x\in W}q'_{w,x}(1)\,\mathrm{ch}\,M(x\cdot\lambda),$$
where $q'_{x,w}$ are the inverse Kazhdan–Lusztig coefficients of
[[def-inverse-kazhdan-lusztig-polynomials]] ($Q'=P^{-1}$, $q'_{x,w}\in v\mathbb Z[v]$
for $x<w$, $q'_{w,w}=1$) and the sum is supported on $x\ge w$. Equivalently, in
the signed normalization $q_{x,w}=\mathrm{sgn}(x)\mathrm{sgn}(w)q'_{x,w}$ the
formula is the signed inverse-Kazhdan–Lusztig sum
$$\mathrm{ch}\,L(w\cdot\lambda)=\sum_{x\ge w}(-1)^{\ell(w)-\ell(x)}q_{w,x}(1)\,\mathrm{ch}\,M(x\cdot\lambda).$$
The coefficients $q'_{w,x}(1)$ are the weighted incidence-algebra inverse of
$(P_{y,z}(1))$, given by the finite signed chain sum of products of
$P_{y,z}(1)$; they are integers that may be negative. They specialize to
ordinary Bruhat Möbius values on intervals where every comparable-pair
Kazhdan–Lusztig value is $1$, but not in general. Only the value at $q=1$
occurs.

## Facts & Assumptions

**Given:** The Axiom of Choice (inherited from the Grothendieck-group and multiplicity theory cited below), a regular integral type-$A$ block $\mathcal O_\lambda$ with $W=S_n$, and the coefficient matrices $P=(p_{x,w})$, $Q'=(q'_{x,w})$ and $A=(P_{y,z}(1))$ indexed by $W\times W$.

[F1] The composition-multiplicity theorem ([[thm-simple-verma-composition-multiplicities-are-kazhdan-lusztig-values]]): for all $y,w\in W$, $[M(y\cdot\lambda):L(w\cdot\lambda)]=P_{y,w}(1)$ in the regular integral block, and this vanishes unless $y\le w$; at $y=w$ it is $P_{w,w}(1)=1$.

[F2] Grothendieck group and bases ([[prop-the-grothendieck-group-of-o-has-simple-and-standard-bases]], [[def-grothendieck-group-and-character-of-category-o]]): the classes $[L(\lambda)]$ and separately the classes $[M(\lambda)]$ form $\mathbb Z$-bases of $K_0(\mathcal O)$, the transition on a finite central-character label set is unitriangular, $K_0$ is the free abelian group on isomorphism classes modulo $[B]=[A]+[C]$ for short exact sequences, and the formal character $\mathrm{ch}\,M=\sum_\mu(\dim M_\mu)e^\mu$ is an additive map on $K_0$.

[F3] Inverse Kazhdan–Lusztig coefficients ([[def-inverse-kazhdan-lusztig-polynomials]], [[thm-kazhdan-lusztig-inversion-formula]]): $q'_{x,w}=\sum_{m\ge0}(-1)^m\sum_{x=z_0<\cdots<z_m=w}p_{z_0,z_1}\cdots p_{z_{m-1},z_m}$, a finite chain sum; $Q'=P^{-1}$, so $Q'P=PQ'=I$; $q'_{w,w}=1$ and $q'_{x,w}=0$ unless $x\le w$, while $q'_{x,w}\in v\mathbb Z[v]$ for $x<w$; the signed coefficients are $q_{x,w}=\mathrm{sgn}(x)\mathrm{sgn}(w)q'_{x,w}$.

[F4] Classical normalization ([[def-kazhdan-lusztig-polynomials-in-the-classical-q-normalization]]): $p_{y,w}=v^{\ell(w)-\ell(y)}P_{y,w}(v^{-2})$ for $y\le w$, with $P_{y,w}=0$ unless $y\le w$, $P_{w,w}=1$, constant term $1$, and degree at most $(\ell(w)-\ell(y)-1)/2$ for $y<w$; in particular $p_{y,w}(1)=P_{y,w}(1)$.

[F5] Bruhat order of $S_n$ ([[lem-bruhat-order-basic-properties-for-permutations]]): it is graded by inversion length, has the reduced-subword criterion and finite intervals, and $y\le w$ implies $y^{-1}\le w^{-1}$.

[F6] Descent recursion ([[thm-kazhdan-lusztig-polynomial-recursion]]): for a simple reflection $s$ with $sw<w$ and $y\le w$, $$P_{y,w}(q)=q^{1-c}P_{sy,sw}(q)+q^{c}P_{y,sw}(q)-\!\!\!\sum_{\substack{y\le z\le sw\\ sz<z,\ \mu(z,sw)\ne0}}\!\!\!\mu(z,sw)\,q^{(\ell(w)-\ell(z))/2}P_{y,z}(q),$$ where $c=1$ if $sy<y$ and $c=0$ if $sy>y$.

[F7] Block conventions ([[def-regular-integral-dot-orbit-labelling-convention]]): the indexed simples, standards and projectives of $\mathcal O_\lambda$, the multiplicity notations, the Bruhat direction of nonzero multiplicities, and the classical normalization $q=v^{-2}$ of the Kazhdan–Lusztig coefficients.

## Proof

**Proof technique:** direct.

1.1 By [F1] the class of every standard in $K_0(\mathcal O_\lambda)$ expands in the simple basis as $[M(y\cdot\lambda)]=\sum_w[M(y\cdot\lambda):L(w\cdot\lambda)]\,[L(w\cdot\lambda)]=\sum_wA_{y,w}[L(w\cdot\lambda)]$, where $A_{y,w}=P_{y,w}(1)$; by [F4] and [F7] the matrix $A$ is unitriangular for the Bruhat order: $A_{w,w}=1$ and $A_{y,w}=0$ unless $y\le w$. [F1, F4, F7]

1.2 The matrix $A$ is the specialization at $v=1$ of the Kazhdan–Lusztig coefficient matrix $P=(p_{x,w})$, because $p_{y,w}(1)=P_{y,w}(1)$ by [F4]; specialisation $v\mapsto1$ is a ring homomorphism $\mathbb Z[v^{\pm1}]\to\mathbb Z$, so the inverse matrix of $A$ is $A^{-1}=Q'(1)=(q'_{x,w}(1))$ by the two-sided inverse statement $Q'=P^{-1}$ of [F3]. By the support clause of [F3], $q'_{w,x}(1)=0$ unless $w\le x$, and all entries are integers; in particular the sum in the formula is supported on $x\ge w$, and every coefficient $q'_{w,x}(1)$ is the value at one of an integer Laurent polynomial. [F3, F4]

1.3 The specialization is not the Möbius function in general; the following finite witness is computed inside $S_4$ with the recursion [F6]. Put $b:=1324=s_2$ and $T:=3412=s_2s_1s_3s_2$; the reduced subwords of this reduced word for $T$ give the interval $[b,T]=\{1324;\ 1342,1423,2314,3124;\ 1432,2413,3142,3214;\ 3412\}$, ten elements, and all comparable pairs of gap at most two have $P=1$ by the degree bound of [F4], so the only pair that can be nonconstant is the endpoint $(b,T)$, of gap $3$. Apply [F6] with the left descent $s=s_2$ of $T$: $s_2T=2413$, $s_2b=1234$ and $c=1$, so $P_{b,T}=P_{1234,2413}+qP_{b,2413}-\sum_z\mu(z,2413)q^{(4-\ell(z))/2}P_{b,z}$, where $z$ runs over the elements of $[b,2413]=\{1324,1423,2314,2413\}$ with $s_2z<z$; left multiplication by $s_2$ swaps the values $2$ and $3$, turning these four elements into $1234,1432,3214,3412$ of lengths $0,3,3,4$, so only $z=b$ has the required descent, and there $\mu(b,2413)=0$ because the gap $2$ is even by [F4]. Hence the correction sum vanishes, and with $P_{b,2413}=1$ (gap $2$) the recursion reduces to $P_{b,T}=P_{1234,2413}+q$. For the remaining value apply [F6] at $(1234,2413)$ with the left descent $s_1$: $s_12413=1423$ and $c=0$, so $P_{1234,2413}=qP_{2134,1423}+P_{1234,1423}-\sum_{z}\mu(z,1423)q^{(3-\ell(z))/2}P_{1234,z}$; the first term vanishes because $1423=s_3s_2$ has no reduced subword $s_1$, so $2134\not\le1423$ and $P_{2134,1423}=0$ by [F4] and [F5], and the correction sum is empty because the four elements of $[1234,1423]=\{1234,1324,1243,1423\}$ all have lengths $0,1,1,2$ raised to $1,2,2,3$ by left multiplication with $s_1$, so none is a left descent. Thus $P_{1234,2413}=1$, and altogether $P_{b,T}(q)=1+q$, while $P_{y,z}=1$ for every other comparable pair in $[b,T]$. [F4, F5, F6]

2.1 Since the classes $[L(w\cdot\lambda)]$ and $[M(x\cdot\lambda)]$ are the two $\mathbb Z$-bases of the Grothendieck group of the block by [F2], step 1.1 exhibits the transition matrix from simples to standards, and its inverse from step 1.2 performs the reverse change of basis: for every $w\in W$ one has $[L(w\cdot\lambda)]=\sum_xq'_{w,x}(1)\,[M(x\cdot\lambda)]$, the sum being finite and supported on $x\ge w$ by [F5] and step 1.2. Applying the additive character map of [F2] termwise gives the equivalent formal-character identity $\mathrm{ch}\,L(w\cdot\lambda)=\sum_xq'_{w,x}(1)\,\mathrm{ch}\,M(x\cdot\lambda)$. In the signed normalization $q_{x,w}=\mathrm{sgn}(x)\mathrm{sgn}(w)q'_{x,w}$ of [F3], substituting $q'_{w,x}(1)=(-1)^{\ell(w)+\ell(x)}q_{w,x}(1)$ and using that $\ell(w)+\ell(x)$ and $\ell(w)-\ell(x)$ differ by the even number $2\ell(x)$ gives the signed inverse-Kazhdan–Lusztig sum $\mathrm{ch}\,L(w\cdot\lambda)=\sum_{x\ge w}(-1)^{\ell(w)-\ell(x)}q_{w,x}(1)\,\mathrm{ch}\,M(x\cdot\lambda)$. [F2, F3, F5, step 1.1, step 1.2]

3.1 The chain formula of [F3] expresses the inverse coefficients of step 2.1 as the weighted incidence-algebra inverse of $A$: $q'_{x,w}(1)=\sum_{m\ge0}(-1)^m\sum_{x=z_0<z_1<\cdots<z_m=w}P_{z_0,z_1}(1)\cdots P_{z_{m-1},z_m}(1)$, a finite sum over the strictly increasing chains of the finite interval $[x,w]$ described in [F5]. If every comparable-pair value $P_{y,z}(1)$ in $[x,w]$ equals $1$, each product in the $m$-th term equals $1$ and the alternating chain count $\sum_m(-1)^m\#\{\text{strictly increasing chains }x=z_0<\cdots<z_m=w\}$ is exactly the ordinary Bruhat Möbius value $\mu(x,w)$; so on intervals with all comparable-pair values equal to $1$ the coefficients are ordinary Bruhat Möbius numbers. [F3, F5, step 2.1]

4.1 Consequently the specialized multiplicity matrix on the interval $[b,T]$ is $A=Z+E$, where $Z$ is the zeta matrix of the Bruhat poset and $E$ has the single nonzero entry $1$ at $(b,T)$. Since $b$ is the minimum and $T$ the maximum of the interval, $Z_{x,b}=1$ only for $x=b$ and $Z_{T,x}=1$ only for $x=T$, so $EZ^{-1}=E=ZE$ and $(Z+E)(Z^{-1}-E)=I-ZE+EZ^{-1}=I$, that is $A^{-1}=Z^{-1}-E$; at the endpoint the inverse entry is therefore $\mu(b,T)-1=-1-1=-2$, whereas the ordinary Bruhat Möbius value of the interval is $\mu(b,T)=-1$ (the rank sizes are $1,4,4,1$ and the Möbius recursion gives $1$ at the bottom, $-1$ at the four atoms, $+1$ at the four rank-two elements and $-(1-4+4)=-1$ at the top). Using the endpoint polynomial from step 1.3, this proves the claim that the coefficients specialize to ordinary Bruhat Möbius values when all comparable-pair values are $1$ but not in general, and exhibits them as integers that may be negative; by step 2.1 these are exactly the coefficients of the character formula, and only their value at $q=1$ occurs. [F3, F4, step 1.3, step 2.1, step 3.1] ∎
