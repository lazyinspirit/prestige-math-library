---
id: lem-product-integrable-generator-neighborhoods-and-relative-tame-extension
kind: lemma
title: "Product-integrable generator neighborhoods and relative tame extension"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-countable-choice, thm-euclidean-inverse-function-theorem, thm-higher-regularity-of-local-inverses]
dependency_level: 0
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Dusa McDuff and Dietmar Salamon, Introduction to Symplectic Topology, spaces of tame almost complex structures"
      url: "https://global.oup.com/academic/product/introduction-to-symplectic-topology-9780198794905"
---

## Statement

Assume Countable Choice. Let $\Sigma$ be a closed oriented smooth surface with positive area form $\eta$ and an orientation-compatible complex structure $j$. Use its smooth complex symmetric product $X=\operatorname{Sym}^m\Sigma$, $m\ge1$, and the descended product symplectic form $\omega$ off the diagonal. Let $\alpha_1,\ldots,\alpha_m$ be disjoint embedded circles, and likewise $\beta_1,\ldots,\beta_m$, with every alpha-beta intersection transverse. Let $T_\alpha,T_\beta\subset X$ be their product tori. Fix finitely many points $p$ of $\Sigma$ away from all these circles and the associated divisors $E_p=\{p\}+\operatorname{Sym}^{m-1}\Sigma$.

The intersection $K=T_\alpha\cap T_\beta$ is finite and disjoint from the diagonal and all $E_p$. There exist pairwise disjoint neighborhoods $U_x$ of its points, with closures disjoint from those protected sets, and smooth coordinate charts $q_x$ centered at $x$ taking $T_\alpha,T_\beta$ to $\mathbb R^m,i\mathbb R^m$. There is a smooth almost complex structure $J_*$ on $X$ equal to $\operatorname{Sym}^m(j)$ near the diagonal and all $E_p$, taming $\omega$ elsewhere, and exactly $i$ in each $q_x$ chart near $x$.

More generally any smooth family $J_t$ with the first two properties can be modified inside the $U_x$, retaining its values outside them and near all protected sets, to have those exact product-integrable values on smaller neighborhoods for every $t$. The constant path $J_*$ therefore provides a genuine admissible geometric choice with the local hypotheses needed for product-integrable end asymptotics. No regularity or moduli count is asserted for that path.

## Statement references

[[def-countable-choice]]

## Facts & Assumptions

**Given:** The surface, symmetric product, product form, two curve systems, and finite protected points of the statement. The complex symmetric product and its ordinary off-diagonal unordered-product charts are part of this setup.

[F1] The actual finite-dimensional proofs in [[thm-euclidean-inverse-function-theorem]] and [[thm-higher-regularity-of-local-inverses]] supply the smooth local coordinate inverses used below.



## Proof

1.1 Two transverse embedded curves on a compact surface have finitely many intersections. Each crossing is isolated by [F1] applied to the difference of their local parametrizations in a surface chart, whose derivative is invertible by transversality. Their intersection is closed and compact, so the isolating neighborhoods have a finite subcover and the intersection is finite. There are only finitely many pairs of curves. A generator in $T_\alpha\cap T_\beta$ consists of one point on each alpha circle and one on each beta circle, so it is selected from that finite union of crossings; hence $K$ is finite. Its coordinates are distinct because the alpha circles are disjoint. None is a protected point $p$ because those lie off all circles. Thus $K$ avoids the diagonal and the divisors $E_p$. [F1, given, construct, algebra]

1.2 We prove a pointwise interpolation formula. In a real symplectic vector space let $J_0$ be compatible, write $g_0(v,w)=\omega(v,J_0w)$, and let $J$ be any $\omega$-tame complex structure. Set $A=-J_0J$. The operator $A+I$ is invertible: a vector in its kernel would satisfy $Jv=-J_0v$, contrary to positive $\omega(v,Jv)$ for nonzero $v$. Define $B=(A-I)(A+I)^{-1}$. The relation $AJ_0A=J_0$, obtained directly from $J^2=J_0^2=-I$, gives $J_0^{-1}AJ_0=A^{-1}$ and hence $J_0^{-1}BJ_0=-B$. Thus $B$ anticommutes with $J_0$. Also $I-B=2(A+I)^{-1}$ is invertible and $A=(I+B)(I-B)^{-1}$. For $v=(I-B)w$ we have $$\omega(v,Jv)=g_0(v,Av)=g_0((I-B)w,(I+B)w)=|w|_{g_0}^2-|Bw|_{g_0}^2.$$ Tameness therefore gives $|Bw|_{g_0}<|w|_{g_0}$ for every nonzero $w$. The unit sphere is compact, so $\|B\|_{g_0}<1$. No symmetry of $B$ is assumed or needed. [given, construct, algebra]

2.1 At a surface crossing $r$, choose parametrizations $a(x),b(y)$ of the two unique local curves with $a(0)=b(0)=r$, in any smooth surface coordinate chart. The map $\Psi(x,y)=a(x)+b(y)-r$ has invertible derivative at zero. Reverse the parameter $y$ if needed to make its orientation positive. By [F1] its inverse is a smooth orientation-positive chart taking the alpha and beta arcs to the real and imaginary axes in $\mathbb C$. Pulling back the standard complex structure from that chart defines a smooth local structure $j_r$. It is compatible with $\eta$: in the chart $\eta=f(x,y)dx\wedge dy$ with $f>0$, so $\eta(v,j_rv)=f|v|^2>0$ and $\eta(j_rv,j_rw)=\eta(v,w)$. [F1, step 1.1, construct, algebra]

2.2 Conversely, if $B$ anticommutes with $J_0$ and has norm less than one, then $I-B$ is invertible and $$J_B=J_0(I+B)(I-B)^{-1}$$ is an almost complex structure. Indeed conjugation of the Cayley factor by $J_0$ replaces $B$ by $-B$ and therefore replaces that factor by its inverse, giving $J_B^2=-I$. The calculation of step 1.2 gives $\omega(v,J_Bv)>0$ for nonzero $v$. Consequently replacing $B$ by $rB$, $0\le r\le1$, joins the prescribed compatible $J_0$ to the original tame $J$ through tame structures, fixing either endpoint exactly. All expressions depend smoothly on the input operators and $r$ because their denominators remain invertible. [step 1.2, construct, algebra]

3.1 For $x=\{r_1,\ldots,r_m\}\in K$, choose disjoint small surface neighborhoods of its distinct coordinates and the charts from step 2.1. A nearby unordered tuple containing exactly one point in each of these neighborhoods has a unique ordering by the neighborhoods, giving the ordinary smooth off-diagonal product chart on $X$. In these coordinates $T_\alpha$ is $\mathbb R^m$ and $T_\beta$ is $i\mathbb R^m$, after assigning the beta indices to the corresponding factors. The product of the $j_{r_a}$ defines a local $J_{0,x}$, equal to $i$ in this chart and compatible with the descended product form, since its pullback is the sum of the positive two-dimensional compatible forms in step 2.1. By finiteness of $K$ shrink these neighborhoods to pairwise disjoint $U_x$ with compact closures avoiding the diagonal and all protected divisors. Such separation is possible because those sets are closed and disjoint from the finite $K$. [step 1.1, step 2.1, construct, algebra]

4.1 Apply this formula on each $U_x$ with $J_0=J_{0,x}$ and the given background $J_t$. Choose a smooth cutoff $\chi_x$ supported compactly in $U_x$ and equal to one on a smaller neighborhood of $x$. Compute $B_t$ from step 1.2 and replace it by $(1-\chi_x)B_t$ in step 2.2. Its norm remains less than one. Where $\chi_x=1$ the resulting structure is exactly $J_{0,x}$, and where $\chi_x=0$ it is exactly $J_t$, so it glues smoothly to $J_t$ outside $U_x$. The finitely many supports are disjoint and avoid every protected set. Thus all modifications can be made simultaneously, are smooth in the family parameter, preserve tameness, and preserve every original value near the diagonal and protected divisors. [step 3.1, step 1.2, step 2.2, construct, algebra]

5.1 Finally a background exists here without an extension theorem: use $J=\operatorname{Sym}^m(j)$ itself on all of $X$. Off the diagonal its pullback is the product complex structure and is compatible with the product of $\eta$, because an orientation-compatible complex structure on a surface preserves its positive area form and makes $\eta(\cdot,j\cdot)$ positive symmetric. It therefore tames the descended form there. On the diagonal and protected divisors it already has exactly the required value by its definition as the given complex symmetric-product structure. Apply step 4.1 to this constant family to obtain $J_*$. The same argument proves the relative family assertion for any allowed background. These actual geometric constructions impose no genericity, universal submersion, Fredholm, or gluing conclusion on the resulting path. [step 3.1, step 4.1, given, construct, algebra] ∎
