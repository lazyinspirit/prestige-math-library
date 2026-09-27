---
id: "lem-ag-local-flatness-regular-parameters"
kind: "lemma"
title: "Local flatness criterion by regular parameters"
status: draft
origin: "pipeline"
deps: ["thm-long-exact-tor-sequence-in-the-right-module-variable", "thm-flatness-criteria-by-injections-and-ideals", "thm-right-exactness-of-tensor-products", "thm-artin-rees-lemma", "thm-krull-intersection-theorem", "def-composition-series-and-length-of-a-module", "cor-length-is-additive-in-short-exact-sequences", "def-simple-module", "def-local-ring", "def-noetherian-ring", "def-tor-by-resolving-the-right-module", "def-balanced-tor-bifunctor", "thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic", "thm-recursion", "def-dependent-choice", "def-axiom-of-choice", "lem-regular-local-residue-field-koszul-resolution", "thm-regular-sequences-give-acyclic-koszul-complexes", "def-koszul-complex-of-a-sequence-with-coefficients", "thm-regular-local-rings-are-domains-and-cohen-macaulay"]
proof_strategy: "direct"
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Stacks Algebra 10.99.6–7"
      url: "https://stacks.math.columbia.edu/download/algebra.pdf"
    - title: "Vakil §25.6.2–3, pp.678–679"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $(R,\mathfrak m)\to(S,\mathfrak n)$
be a local homomorphism of Noetherian local rings and let $M$ be a finite
$S$-module. If $\operatorname{Tor}_1^R(R/\mathfrak m,M)=0$, then $M$ is flat
over $R$. The module $M$ is not assumed finite over $R$.

Consequently, if $R$ and $S$ are regular local rings and the images in $S$ of a
regular system of parameters of $R$ extend to a regular system of parameters of
$S$, then $S$ is flat over $R$.

## Facts & Assumptions

**Given:** A local homomorphism $(R,\mathfrak m)\to(S,\mathfrak n)$ of Noetherian local rings and a finite $S$-module $M$ with $\operatorname{Tor}_1^R(R/\mathfrak m,M)=0$; for the second assertion regular local $R,S$ and a regular system of parameters of $R$ whose images extend to one of $S$; and the Axiom of Choice.

[F1] [[thm-long-exact-tor-sequence-in-the-right-module-variable]]: under Dependent Choice, a short exact sequence $0\to N'\to N\to N''\to0$ of right $R$-modules and a left module $M$ with a supplied projective resolution give the natural long exact sequence $\cdots\to\operatorname{Tor}_i^R(N',M)\to\operatorname{Tor}_i^R(N,M)\to\operatorname{Tor}_i^R(N'',M)\to\operatorname{Tor}_{i-1}^R(N',M)\to\cdots$, with the usual tensor-product tail.

[F2] [[thm-flatness-criteria-by-injections-and-ideals]]: $M$ is flat over $R$ if and only if $I\otimes_RM\to M$ is injective for every finitely generated ideal $I\subseteq R$.

[F3] [[thm-artin-rees-lemma]]: for a Noetherian ring $S$, an ideal $J$, a finite $S$-module $N$ and a submodule $K$ there is $c\ge0$ with $J^nN\cap K=J^{n-c}(J^cN\cap K)$ for every $n\ge c$.

[F4] [[thm-krull-intersection-theorem]]: for a Noetherian ring $S$, an ideal $J\subseteq J(S)$ and a finite $S$-module $N$, the intersection $\bigcap_{n\ge0}J^nN$ is zero.

[F5] [[def-composition-series-and-length-of-a-module]]: a composition series of a module is a finite chain with simple factors, the length is the number of factors, and the zero module has length $0$.

[F6] [[cor-length-is-additive-in-short-exact-sequences]]: for $0\to N'\to N\to N''\to0$, the module $N$ has finite length if and only if $N'$ and $N''$ do, and then $\ell(N)=\ell(N')+\ell(N'')$.

[F7] [[def-simple-module]]: a module is simple when it is nonzero and has no proper nonzero submodule.

[F8] [[def-local-ring]]: a local ring has exactly one maximal ideal.

[F9] [[def-noetherian-ring]]: in a Noetherian ring every ideal is finitely generated.

[F10] [[def-tor-by-resolving-the-right-module]]: for a right module $N$ with a specified projective resolution $Q_\bullet$ one sets $\operatorname{Tor}^{R,Q}_n(N,M)=H_n(Q_\bullet\otimes_RM)$.

[F11] [[def-balanced-tor-bifunctor]]: under Dependent Choice, $\operatorname{Tor}_i^R(N,M)$ is the balanced bifunctor obtained from either a resolution of $N$ or one of $M$, identified by the left-right comparison theorem.

[F12] [[thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic]]: under Dependent Choice there is a natural isomorphism $H_i(N\otimes_RP_\bullet)\cong H_i(Q_\bullet\otimes_RM)$ for supplied projective resolutions.

[F13] [[thm-recursion]]: for a set $X$, an element $x\in X$ and a function $f\colon X\to X$ there is a unique $g\colon\mathbb N\to X$ with $g(0)=x$ and $g(n+1)=f(g(n))$.

[F14] [[def-dependent-choice]]: for every nonempty set $X$, every entire relation $R$ on $X$ and every $a\in X$ there is $x\colon\mathbb N\to X$ with $x_0=a$ and $x_n\mathbin{R}x_{n+1}$ for all $n$.

[F15] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function.

[F16] [[lem-regular-local-residue-field-koszul-resolution]]: under the Axiom of Choice, for a regular local ring $(R,\mathfrak m,\kappa)$ of dimension $d$ the Koszul complex on any regular system of parameters is a minimal free resolution of $\kappa$ of length $d$.

[F17] [[def-koszul-complex-of-a-sequence-with-coefficients]]: $K(\mathbf x;M)$ has degree-$p$ term $\bigwedge^pR^d\otimes_RM$ and differential $d(e_{i_1}\wedge\cdots\wedge e_{i_p}\otimes m)=\sum_j(-1)^{j-1}e_{i_1}\wedge\cdots\widehat{e_{i_j}}\cdots\wedge e_{i_p}\otimes x_{i_j}m$.

[F18] [[thm-regular-sequences-give-acyclic-koszul-complexes]]: every finite $M$-regular sequence is $M$-Koszul-regular, that is $H_i(K(\mathbf x;M))=0$ for $i>0$.

[F19] [[thm-regular-local-rings-are-domains-and-cohen-macaulay]]: under the Axiom of Choice, for a regular local ring of dimension $d$ every regular system of parameters $(y_1,\dots,y_d)$ is a regular sequence and $R/(y_1,\dots,y_c)$ is regular local of dimension $d-c$ for $0\le c\le d$; in particular an initial segment of a regular system of parameters is a regular sequence.

[F20] [[thm-right-exactness-of-tensor-products]]: tensoring an exact sequence $A'\to B'\to C'\to0$ with a module preserves exactness at the right.

## Proof

1.1 AC gives DC, so the Dependent-Choice suppliers [F1], [F11] and [F12] are available. Given a nonempty set $X$, an entire relation $R$ on $X$ and $a\in X$, apply [F15] to the family of nonempty subsets of $X$ to obtain $g$ with $g(T)\in T$ for every nonempty $T\subseteq X$, and put $f(x):=g(\{y\in X:x\mathbin{R}y\})$, a function $X\to X$ because $R$ is entire. By [F13] there is $x\colon\mathbb N\to X$ with $x_0=a$ and $x_{n+1}=f(x_n)$; then $x_n\mathbin{R}x_{n+1}$ for all $n$ because $f(x_n)\in\{y:x_n\mathbin{R}y\}$. This is exactly the statement of [F14]. Supply a free resolution of $M$ by mapping the free module on its underlying set onto $M$, then repeating this construction on each successive kernel; recursion gives the required resolution for [F1]. [F13, F14, F15]

1.2 Ideals of finite colength. Let $J\subseteq R$ be an ideal containing $\mathfrak m^n$ for some $n\ge0$. For $n=0$, $J=R$ and $R/J=0$. For $n\ge1$, $R/J$ has finite length over $R$: the ring $R/\mathfrak m^n$ carries the finite chain $0\subseteq\mathfrak m^{n-1}/\mathfrak m^n\subseteq\cdots\subseteq R/\mathfrak m^n$ whose successive quotients are $\mathfrak m^i/\mathfrak m^{i+1}=\mathfrak m^i/(\mathfrak m\cdot\mathfrak m^i)$; each $\mathfrak m^i$ is finitely generated over the Noetherian ring $R$ by [F9], so each $\mathfrak m^i/\mathfrak m^{i+1}$ is a finitely generated module over the field $\kappa=R/\mathfrak m$, hence a finite-dimensional $\kappa$-vector space, which has a finite composition series with simple factors $\kappa$ and therefore finite length by [F5]; a finite extension of modules of finite length has finite length with additive length by [F6], so $\ell_R(R/\mathfrak m^n)<\infty$, and $R/J$, being a quotient of $R/\mathfrak m^n$, has finite length as well. [F5, F6, F9]

2.1 Vanishing on finite length. Suppose $\operatorname{Tor}_1^R(\kappa,M)=0$ with $\kappa=R/\mathfrak m$. Then $\operatorname{Tor}_1^R(N,M)=0$ for every $R$-module $N$ of finite length $\ell_R(N)$: prove this by induction on $\ell_R(N)$. For $\ell_R(N)=0$ we have $N=0$. If $\ell_R(N)\ge1$, choose a proper submodule $N'\subset N$ that is maximal for inclusion, which exists because $N$ has finite length; then $N/N'$ is simple by [F7], so choosing $0\ne s\in N/N'$ presents it as $(R/\operatorname{Ann}(s))\cdot s$, and $\operatorname{Ann}(s)$ is a maximal ideal of $R$, because for a proper ideal $J\supsetneq\operatorname{Ann}(s)$ the submodule $Js$ is nonzero and hence all of $N/N'$, forcing $Js=N/N'$ and $1\in J$. By [F8] the only maximal ideal is $\mathfrak m$, so $N/N'\cong\kappa$. By [F6] $\ell_R(N')=\ell_R(N)-1$, so the induction hypothesis applies to $N'$, and the exact sequence $\operatorname{Tor}_1^R(N',M)\to\operatorname{Tor}_1^R(N,M)\to\operatorname{Tor}_1^R(\kappa,M)=0$ from [F1] has vanishing outer terms, whence $\operatorname{Tor}_1^R(N,M)=0$. [step 1.1, F1, F5, F6, F7, F8]

3.1 Injectivity for finite colength ideals. Let $J\subseteq R$ be any ideal. Since the free module $R$ with the resolution concentrated in degree $0$ satisfies $\operatorname{Tor}_1^R(R,M)=0$ by [F10], the long exact sequence of [F1] for $0\to J\to R\to R/J\to0$ exhibits $\ker(J\otimes_RM\to M)$ as the image of $\operatorname{Tor}_1^R(R/J,M)\to J\otimes_RM$. Hence if $J\supseteq\mathfrak m^n$ and $\operatorname{Tor}_1^R(\kappa,M)=0$, then $R/J$ has finite length by step 1.2 and $\operatorname{Tor}_1^R(R/J,M)=0$ by step 2.1, so $J\otimes_RM\to M$ is injective. [step 1.1, step 1.2, step 2.1, F1, F10]

4.1 The diagram chase. Let $I\subseteq R$ be a finitely generated ideal and let $K:=\ker(I\otimes_RM\to M)$. For every $n$ the sequence $0\to I\cap\mathfrak m^n\to I\oplus\mathfrak m^n\to I+\mathfrak m^n\to0$, with maps $x\mapsto(x,-x)$ and $(a,b)\mapsto a+b$, is exact, so after tensoring with $M$ and using [F20] the sequence $(I\cap\mathfrak m^n)\otimes_RM\to I\otimes_RM\oplus\mathfrak m^n\otimes_RM\to(I+\mathfrak m^n)\otimes_RM\to0$ is exact; the vertical maps to $M$ are the multiplication maps, which are injective on $\mathfrak m^n\otimes_RM$ and on $(I+\mathfrak m^n)\otimes_RM$ because both ideals contain $\mathfrak m^n$ and step 3.1 applies. Given $k\in K$, its image $(k,0)$ in the middle maps to zero in $(I+\mathfrak m^n)\otimes_RM$ and hence, by exactness at the middle, equals $(x,-x)$ for some $x\in(I\cap\mathfrak m^n)\otimes_RM$; then $x$ maps to $k$ in $I\otimes_RM$ and to $0$ in $\mathfrak m^n\otimes_RM$, so $x\in\ker((I\cap\mathfrak m^n)\otimes_RM\to M)$ and $K$ lies in the image of $(I\cap\mathfrak m^n)\otimes_RM\to I\otimes_RM$. [step 3.1, F20]

5.1 Concluding $K=0$. Apply Artin–Rees [F3] over the Noetherian ring $R$ to the finite module $R$, its submodule $I$ and the ideal $\mathfrak m$. It gives $c\ge0$ such that $I\cap\mathfrak m^n=\mathfrak m^{n-c}(I\cap\mathfrak m^c)\subseteq\mathfrak m^{n-c}I$ for every $n\ge c$. Put $N:=I\otimes_RM$, a finite $S$-module because $I$ is finite over $R$ and $M$ is finite over $S$. By step 4.1 and this inclusion, $K\subseteq(\mathfrak mS)^{n-c}N$ for every $n\ge c$: an elementary tensor $ra\otimes m$ with $r\in\mathfrak m^{n-c}$ equals $r(a\otimes m)$. The local homomorphism gives $\mathfrak mS\subseteq\mathfrak n=J(S)$, so Krull intersection [F4] on the finite $S$-module $N$ gives $\bigcap_{j\ge0}(\mathfrak mS)^jN=0$. Hence $K=0$. [step 4.1, F3, F4, F8]

6.1 Since $I\subseteq R$ was an arbitrary finitely generated ideal and $I\otimes_RM\to M$ is injective, [F2] shows that $M$ is flat over $R$. This proves the first assertion. [step 5.1, F2]

7.1 The regular-parameter case. Let $x_1,\dots,x_d$ be a regular system of parameters of $R$ and let $\overline x_1,\dots,\overline x_d\in S$ be their images, extending to a regular system of parameters $y_1,\dots,y_e$ of $S$. By [F19] the tuple $(y_1,\dots,y_e)$ is $S$-regular, hence so is its initial segment $\overline x_1,\dots,\overline x_d$. By [F16] the Koszul complex $K_R(x_1,\dots,x_d;R)$ is a free resolution of $\kappa=R/\mathfrak m$, and tensoring its defining formulas, [F17], with $- \otimes_RS$ replaces each $x_i$ by $\overline x_i$ and reproduces the Koszul complex $K_S(\overline x_1,\dots,\overline x_d;S)$ of [F17] term by term, so $K_R(x)\otimes_RS\cong K_S(\overline x;S)$ as complexes. Therefore, using [F10] for the right-resolution construction and [F12] (available by step 1.1) to identify it with the balanced Tor of [F11], $\operatorname{Tor}_1^R(\kappa,S)=H_1(K_R(x)\otimes_RS)=H_1(K_S(\overline x;S))=0$ by [F18], as $\overline x$ is an $S$-regular sequence. The module $S$ is a finite $S$-module, so the first assertion of this lemma, applied to $M=S$, gives that $S$ is flat over $R$. [step 1.1, step 6.1, F10, F11, F12, F16, F17, F18, F19] ∎
