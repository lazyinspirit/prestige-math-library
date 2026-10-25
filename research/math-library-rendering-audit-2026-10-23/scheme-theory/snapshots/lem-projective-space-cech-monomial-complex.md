---
id: lem-projective-space-cech-monomial-complex
kind: lemma
title: "Laurent-monomial decomposition of the projective Cech complex"
status: published
origin: pipeline
deps:
  - thm-projective-space-as-proj
  - lem-standard-opens-proj-affine
  - def-relative-projective-space-standard-charts
  - def-twisting-sheaf-proj
  - lem-proj-associated-sheaf-basic-sections
  - def-associated-sheaf-graded-module-proj
  - def-twist-quasi-coherent-sheaf-projective
  - def-cech-cochain-complex-open-cover
  - def-cech-cohomology-open-cover
  - def-direct-sum-of-a-family-of-modules
  - def-module-homomorphism-kernel-image-and-cokernel
  - lem-affine-qc-cech-unit-ideal-exact
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "The Stacks Project, Cohomology of Schemes, Section 30.8 (tag 01XS), Lemma 30.8.1 (tag 01XT)"
      url: https://stacks.math.columbia.edu/tag/01XT
    - title: "The Stacks Project, Cohomology of Schemes, Section 30.2 (tag 01X9)"
      url: https://stacks.math.columbia.edu/tag/01X9
    - title: "Ravi Vakil, The Rising Sea (29 August 2022), Sections 19.1, 19.9, 28.1-28.2"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
---

## Statement

Assume the Axiom of Choice, inherited from the constructions of
$\operatorname{Proj}$ and of associated sheaves. Let $A$ be a commutative ring
with $1$, let $n\ge0$ and let
$$S=A[x_0,\dots,x_n],\qquad X=\mathbb P^n_A\cong\operatorname{Proj}S,$$
with the total-degree grading $\deg x_i=1$ and with the standard affine open
cover $U_i=D_+(x_i)$, $i=0,\dots,n$
([[thm-projective-space-as-proj]],
[[def-relative-projective-space-standard-charts]]). Order the index set by
$0<1<\cdots<n$ and fix $d\in\mathbb Z$, with the twisting sheaf
$\mathcal O_X(d)$ ([[def-twisting-sheaf-proj]],
[[def-twist-quasi-coherent-sheaf-projective]]). For
$e=(e_0,\dots,e_n)\in\mathbb Z^{n+1}$ with $\sum_i e_i=d$ put
$$N(e)=\{\,i\in\{0,\dots,n\}:e_i<0\,\}.$$
Then the ordered Čech complex $C^\bullet(\mathcal U,\mathcal O_X(d))$
([[def-cech-cochain-complex-open-cover]]) decomposes canonically as a direct
sum of complexes of $A$-modules
$$C^\bullet(\mathcal U,\mathcal O_X(d))=\bigoplus_{e\in\mathbb Z^{n+1},\ \sum e_i=d}K^\bullet(e),$$
where $K^p(e)$ is the free $A$-module with one basis element $x^e_\sigma$ for
each subset $\sigma\subseteq\{0,\dots,n\}$ with $|\sigma|=p+1$ and
$N(e)\subseteq\sigma$, the differential being the Čech differential
$$(\delta x^e_\sigma)_\tau=\begin{cases}(-1)^{\operatorname{pos}(k,\tau)}x^e_\tau,& \tau=\sigma\cup\{k\}\text{ with }k\notin\sigma,\\ 0,& \text{otherwise},\end{cases}$$
with $\operatorname{pos}(k,\tau)$ the position of $k$ in the ordered set
$\tau$. Moreover:

1. if $N(e)=\varnothing$, then $H^0(K^\bullet(e))=A$ and
   $H^q(K^\bullet(e))=0$ for $q\ge1$;
2. if $N(e)=\{0,\dots,n\}$, then $H^n(K^\bullet(e))=A$ and
   $H^q(K^\bullet(e))=0$ for $q\ne n$;
3. if $N(e)$ is nonempty and proper, then $K^\bullet(e)$ is contractible and
   $H^q(K^\bullet(e))=0$ for every $q\ge0$.

For $n=0$ the cover has the single member $U_0$, every $e=(d)$ satisfies
$N(e)=\varnothing$ for $d\ge0$ and $N(e)=\{0\}$ for $d<0$, and both descriptions
in (1) and (2) concern degree $0$, where they agree: $H^0(K^\bullet(e))=A$.
The ring $A=0$ gives $X=\varnothing$, all terms zero and the assertions read
$0=0$.

## Facts & Assumptions

**Given:** A commutative ring $A$ with $1$, an integer $n\ge0$, the graded ring $S=A[x_0,\dots,x_n]$, the scheme $X=\mathbb P^n_A\cong\operatorname{Proj}S$ with its standard cover $U_i=D_+(x_i)$, and an integer $d$.

[F1] The standard charts and their finite intersections are the affine open subschemes $D_+(x_{i_0})\cap\cdots\cap D_+(x_{i_p})=D_+(x_{i_0}\cdots x_{i_p}) =\operatorname{Spec}S_{(x_{i_0}\cdots x_{i_p})}$ of $X=\operatorname{Proj}S$, and $\mathbb P^n_A\cong\operatorname{Proj}S$ with $U_i=D_+(x_i)$ under this isomorphism. ([[thm-projective-space-as-proj]], [[lem-standard-opens-proj-affine]], [[def-relative-projective-space-standard-charts]])

[F2] Twisting sheaf: $\mathcal O_X(d)=\widetilde{S(d)}$ and for a homogeneous $f$ of positive degree the sections are $\Gamma(D_+(f),\mathcal O_X(d))= S(d)_{(f)}$, the degree zero part of the homogeneous localisation, with restriction maps induced by homogeneous localisation, natural in $f$ ([[def-twisting-sheaf-proj]], [[lem-proj-associated-sheaf-basic-sections]], [[def-associated-sheaf-graded-module-proj]]).

[F3] Ordered Čech complex: $C^p(\mathcal U,\mathcal F)=\prod_{i_0<\cdots<i_p} \mathcal F(U_{i_0}\cap\cdots\cap U_{i_p})$ with differential $(\delta s)_{i_0\cdots i_{p+1}}=\sum_{j=0}^{p+1}(-1)^j s_{i_0\cdots\widehat{i_j}\cdots i_{p+1}}|_{U_{i_0}\cap\cdots\cap U_{i_{p+1}}}$, and the cohomology of this complex is the ordered Čech cohomology ([[def-cech-cochain-complex-open-cover]], [[def-cech-cohomology-open-cover]]).

[F4] Direct sums of modules are computed coordinatewise, and kernels, images and cokernels of module homomorphisms are computed on elements ([[def-direct-sum-of-a-family-of-modules]], [[def-module-homomorphism-kernel-image-and-cokernel]]). Consequently, if a complex of $A$-modules is the direct sum of subcomplexes $K^\bullet(e)$, then its kernels and images are the direct sums of the kernels and images of the summands, and $H^q(\bigoplus_e K^\bullet(e))\cong\bigoplus_e H^q(K^\bullet(e))$.

[F5] Principal-open exactness: for a commutative ring $R$ with $1$, an $R$-module $M$ and elements $f_1,\dots,f_r$ generating the unit ideal, the augmented alternating complex $$0\longrightarrow M\longrightarrow\bigoplus_i M_{f_i}\longrightarrow\bigoplus_{i<j}M_{f_if_j}\longrightarrow\cdots$$ is exact, and it remains exact after localising $R$ and $M$ ([[lem-affine-qc-cech-unit-ideal-exact]]).

## Proof

**Proof technique:** direct: the Čech complex of the twisting sheaf carries a $\mathbb Z^{n+1}$-grading by Laurent monomials; each graded piece is a simplicial-type complex on the subsets of $\{0,\dots,n\}$ containing $N(e)$, which is the unit-ideal complex when $N(e)=\varnothing$, has a single term when $N(e)$ is everything, and is contractible by insertion of a vertex outside $N(e)$ otherwise.

1.1 For a nonempty subset $\sigma=\{i_0<\cdots<i_p\}\subseteq\{0,\dots,n\}$ put $U_\sigma=U_{i_0}\cap\cdots\cap U_{i_p}=D_+(x_\sigma)$ with $x_\sigma=\prod_{i\in\sigma}x_i$. By [F1] and [F2], $\Gamma(U_\sigma,\mathcal O_X(d))=S(d)_{(x_\sigma)}$, the degree-$0$ part of $S(d)[x_\sigma^{-1}]$, which has as $A$-basis the Laurent monomials $x^e=x_0^{e_0}\cdots x_n^{e_n}$ with $e\in\mathbb Z^{n+1}$, $\sum_i e_i=d$ and $e_i\ge0$ for every $i\notin\sigma$; this is precisely the condition $N(e)\subseteq\sigma$ for $N(e)=\{i:e_i<0\}$. For $\sigma\subseteq\tau$ the restriction $S(d)_{(x_\sigma)}\to S(d)_{(x_\tau)}$ is the localisation inverting $x_{\tau\setminus\sigma}$ and sends the basis monomial $x^e$ to itself. [F1, F2]

2.1 Taking the product over all $(p+1)$-element subsets $\sigma$, step 1.1 gives a decomposition of $A$-modules $$C^p(\mathcal U,\mathcal O_X(d))=\prod_{|\sigma|=p+1}\Gamma(U_\sigma,\mathcal O_X(d))=\bigoplus_{\sum e_i=d}K^p(e),\qquad K^p(e)=\bigoplus_{\sigma\supseteq N(e),\ |\sigma|=p+1}A\cdot x^e_\sigma,$$ where the factor $\Gamma(U_\sigma,\mathcal O_X(d))$ contributes to $K^p(e)$ exactly when $N(e)\subseteq\sigma$, and the Čech differential [F3], being a sum of restriction maps followed by the sign change of the ordered complex, sends the basis element $x^e_\sigma$ to $(-1)^{\operatorname{pos}(k,\sigma\cup\{k\})}x^e_{\sigma\cup\{k\}}$ for each $k\notin\sigma$ and respects the grading by $e$; a term whose target satisfies $\sigma\cup\{k\}\not\supseteq N(e)$ does not occur, and such a term never arises from a nonzero $x^e_\sigma$ with $\sigma\supseteq N(e)$. Hence $C^\bullet(\mathcal U,\mathcal O_X(d))=\bigoplus_eK^\bullet(e)$ as complexes, and it suffices to compute the cohomology of each $K^\bullet(e)$. [F3, step 1.1]

3.1 Suppose $N(e)=\varnothing$, so that $K^p(e)=A$ for every $(p+1)$-element subset $\sigma$, $p=0,\dots,n$, and the differential is the alternating sum of the maps $x^e_{\sigma\setminus\{i\}}\mapsto x^e_\sigma$. Taking $M=A$ and $f_0=\cdots=f_n=1$ in the unit ideal of $A$ generated by $1$, the complex of [F5] has exactly these terms and this differential, hence is exact in positive degrees; therefore $H^q(K^\bullet(e))=0$ for $q\ge1$, while $H^0(K^\bullet(e))=\ker\delta^0=A$, generated by the cochain whose component at every $i$ is $x^e_i$ (the diagonal class, corresponding to the global monomial section $x^e$ of $\mathcal O_X(d)$). [F5, step 2.1]

3.2 Suppose $N(e)=\{0,\dots,n\}$, i.e. every $e_i<0$. Then the only subset $\sigma$ with $N(e)\subseteq\sigma$ is $\sigma=\{0,\dots,n\}$ itself, so $K^p(e)=0$ for $p<n$ and $K^n(e)=A\cdot x^e_{\{0,\dots,n\}}$; consequently $H^n(K^\bullet(e))=A$ and $H^q(K^\bullet(e))=0$ for $q\ne n$. [step 2.1]

3.3 Suppose $N(e)$ is nonempty and proper, and choose $v\notin N(e)$, for instance the least such index. Since $v\notin N(e)$ one has $N(e)\subseteq\sigma$ if and only if $N(e)\subseteq\sigma\cup\{v\}$, so the formula $$(h\kappa)_\sigma=\begin{cases}0,& v\in\sigma,\\ (-1)^{\operatorname{pos}(v,\sigma\cup\{v\})}\kappa_{\sigma\cup\{v\}},& v\notin\sigma,\end{cases}$$ defines a homomorphism $h:K^{p+1}(e)\to K^p(e)$ for every $p\ge0$. We verify $\delta h+h\delta=\operatorname{id}$ on $K^\bullet(e)$. For a $(p+1)$-element $\tau$ with $v\in\tau$, the sum $\delta(h\kappa)_\tau$ receives only the term with omitted index $v$, giving $(-1)^{\operatorname{pos}(v,\tau)}(h\kappa)_{\tau\setminus\{v\}}=(-1)^{\operatorname{pos}(v,\tau)}(-1)^{\operatorname{pos}(v,\tau)}\kappa_\tau=\kappa_\tau$, while $(h\delta\kappa)_\tau=0$ by the definition of $h$. For $\tau$ with $v\notin\tau$, put $t=\operatorname{pos}(v,\tau\cup\{v\})$. The terms in $\delta(h\kappa)_\tau$ and $(h\delta\kappa)_\tau$ that omit a fixed $i_j\in\tau$ cancel: the inserted-vertex position in $\tau\setminus\{i_j\}$ is $t$ if $i_j>v$ and $t-1$ if $i_j<v$, while the Cech position of $i_j$ in $\tau\cup\{v\}$ shifts by one exactly when $v<i_j$. The remaining term, which omits $v$ in $h\delta\kappa$, is $(-1)^t(-1)^t\kappa_\tau=(-1)^{2t}\kappa_\tau=\kappa_\tau$. Hence the identity of $K^\bullet(e)$ is null-homotopic and $K^\bullet(e)$ is acyclic: $H^q(K^\bullet(e))=0$ for every $q\ge0$. [step 2.1]

4.1 By steps 3.1, 3.2 and 3.3 the cohomology of each summand $K^\bullet(e)$ is $A$ in degree $0$ when $N(e)=\varnothing$, $A$ in degree $n$ when $N(e)$ is all of $\{0,\dots,n\}$, and zero in all other degrees and cases. Since cohomology of complexes of $A$-modules commutes with direct sums by [F4], $H^q(C^\bullet(\mathcal U,\mathcal O_X(d)))$ is the direct sum over the $e$ with $\sum e_i=d$ of these groups; the monomials $x^e$ with all $e_i\ge0$ contribute $A$ to degree $0$ and the monomials $x^e$ with all $e_i<0$ contribute $A$ to degree $n$. This proves the asserted decomposition and the three cases. [F4, step 3.1, step 3.2, step 3.3]

5.1 Boundary and choice cases. For $n=0$ the cover has the single member $U_0=D_+(x_0)$ and $K^0(e)=A$ for every $e=(d)$: if $d\ge0$ then $N(e)=\varnothing$ and step 3.1 gives $H^0=A$, while if $d<0$ then $N(e)=\{0\}$ is all indices and step 3.2 with $n=0$ gives $H^0(K^\bullet(e))=H^n(K^\bullet(e))=A$; the two descriptions coincide in degree zero, as asserted. If $A=0$ then $S=0$, $\operatorname{Proj}S=\varnothing$, all section modules vanish and every assertion reads $0=0$. The vertex $v$ in step 3.3 is chosen as the least index outside $N(e)$, and the cover order and the monomial bases are canonical, so no choice beyond those inherited from [F1], [F2] and [F5] is used; AC is declared in the statement. [F1, F2, F5, step 3.1, step 3.2, step 3.3] ∎
