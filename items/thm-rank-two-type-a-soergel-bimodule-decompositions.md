---
id: thm-rank-two-type-a-soergel-bimodule-decompositions
kind: theorem
title: "Rank-two type-A Soergel bimodule decompositions"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-the-type-a-soergel-category, def-the-rank-two-longest-type-a-soergel-bimodule, lem-type-a-soergel-generators-are-finite-free-on-both-sides, def-type-a-soergel-bimodule-for-a-simple-reflection, def-type-a-reflection-realization-and-polynomial-ring, def-bott-samelson-bimodule-of-a-word]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Libedinsky, Gentle Introduction to Soergel Bimodules I, §4.3–4.4, PDF pp. 22–26"
      url: "https://arxiv.org/pdf/1702.00039"
    - title: "Elias–Williamson, Soergel Calculus, §3.4 and p. 6, PDF pp. 5–6, 24–27"
      url: "https://arxiv.org/pdf/1309.0865"
verification:
  precheck: pass
  repair: research/frontier-44-special-representation-examples-28-six-step-owner-escalation-repairs/soergel/receipts/thm-rank-two-type-a-soergel-bimodule-decompositions.json
---

## Statement

Let $1\le i\le n-2$, put $s:=s_i$, $t:=s_{i+1}$ and write
$B_iB_{i+1}B_i:=B_i\otimes_RB_{i+1}\otimes_RB_i$. Then there are degree-zero
isomorphisms of graded $(R,R)$-bimodules
$$B_i\otimes_RB_{i+1}\otimes_RB_i\cong B_{i,i+1,i}\oplus B_i,\qquad B_{i+1}\otimes_RB_i\otimes_RB_{i+1}\cong B_{i,i+1,i}\oplus B_{i+1},$$
with no additional grading shift on any summand, where $B_{i,i+1,i}$ is the
rank-two longest bimodule of
[[def-the-rank-two-longest-type-a-soergel-bimodule]]. On split Grothendieck
classes the two decompositions read $[B_iB_{i+1}B_i]=[B_{i,i+1,i}]+[B_i]$ and
$[B_{i+1}B_iB_{i+1}]=[B_{i,i+1,i}]+[B_{i+1}]$.

## Facts & Assumptions

**Given:** Adjacent indices $1\le i\le n-2$, the simple reflections $s=s_i$, $t=s_{i+1}$, the coordinate roots $\alpha_s=x_i-x_{i+1}$ and $\alpha_t=x_{i+1}-x_{i+2}$, the coordinate Demazure operator $\partial_s^\beta(f):=(f-s(f))/\alpha_s$, and the graded $(R,R)$-bimodules $B_s,B_t,B_{i,i+1,i}$. The two roots and the second dot $Z_s=\alpha_s\otimes1+1\otimes\alpha_s$ used in the four maps below are in the *coordinate* (length) normalization $\beta_s,\beta_t$ of [[def-type-a-reflection-realization-and-polynomial-ring]], written $\alpha_s,\alpha_t$ only inside this item; they are not the balanced roots $\alpha_s^{\mathrm{bal}}=\varepsilon_s\beta_s$ of that item, and the diagrammatic generator normalization developed later on this page uses the balanced root: $\Delta_s=\tfrac12(\alpha_s^{\mathrm{bal}}\otimes1+1\otimes\alpha_s^{\mathrm{bal}})=\varepsilon_s\tfrac12Z_s$. The coordinate operator is related to the balanced one by $\partial_r^{\mathrm{bal}}=\varepsilon_r\partial_r^\beta$. Thus the root insertions $\mu_r^a$ and Demazure contractions $\kappa_r$ acquire a factor $\varepsilon_r$ when written in the balanced normalization, while multiplication $\mu_r$ and unit insertion $\kappa_r^a$ do not. Since $\varepsilon_s\varepsilon_t=-1$, the zig-zag composite changes from $-\operatorname{id}$ to $+\operatorname{id}$. Accordingly, if bars denote the balanced maps, the balanced idempotent is $e_{\mathrm{bal}}:=\bar\mu_t^a\kappa_s^a\bar\kappa_s\mu_t$; this is the same endomorphism as the coordinate idempotent $e=-\mu_t^a\kappa_s^a\kappa_s\mu_t$. The decomposition is therefore normalization-independent, although identifying these maps with the fixed six-valent diagrammatic generator requires this translation.

[F1] $B_s=R\otimes_{R^s}R(1)$ with $(B_s)_d=(R\otimes_{R^s}R)_{d+1}$, left action $r'(r\otimes r'')=r'r\otimes r''$ and right action $(r\otimes r'')r'=r\otimes r''r'$, the graded left $R$-module isomorphism $B_s\cong R(-1)\oplus R(1)$; the coordinate operator $\partial_s^\beta(f)=(f-s(f))/\alpha_s$ is $R^s$-linear and satisfies $\partial_s^\beta(\alpha_s h)=2h$ for $h\in R^s$ ([[def-type-a-reflection-realization-and-polynomial-ring]], [[def-type-a-soergel-bimodule-for-a-simple-reflection]]).

[F2] $B_s$ is finite free of rank two as a left $R$-module and as a right $R$-module ([[lem-type-a-soergel-generators-are-finite-free-on-both-sides]]).

[F3] $R$ is free over $R^s$ with basis $\{1,\alpha_s\}$: every $f\in R$ has a unique expression $f=f^++\alpha_sf^-$ with $f^\pm\in R^s$, $f^+=\tfrac12(f+s(f))$ and $f^-=\tfrac12\partial_s^\beta(f)$; the action of $S_n$ on $R$ is given by $(w\cdot f)(x_1,\ldots,x_n)=f(x_{w(1)},\ldots,x_{w(n)})$ and $s_t$ fixes $x_a$ for $a\notin\{t,t+1\}$ ([[def-type-a-reflection-realization-and-polynomial-ring]]).

[F4] $B_{i,i+1,i}=R\otimes_{R^{W_{i,i+1}}}R(3)$ for the parabolic $W_{i,i+1}=\langle s,t\rangle\cong S_3$ of the three coordinates $x_i,x_{i+1},x_{i+2}$, and as a graded left $R$-module $B_{i,i+1,i}\cong R(-3)\oplus R(-1)^{\oplus2}\oplus R(1)^{\oplus2}\oplus R(3)$; the Bott–Samelson bimodule of the word is $B_{\underline{i,i+1,i}}=R\otimes_{R^s}R\otimes_{R^t}R\otimes_{R^s}R(3)$ ([[def-the-rank-two-longest-type-a-soergel-bimodule]], [[def-bott-samelson-bimodule-of-a-word]]).

[F5] The basis $1,x,y,x^2,xy,x^2y$ over the parabolic invariant ring, with $x=x_i$, $y=x_{i+1}$, is proved in [[def-the-rank-two-longest-type-a-soergel-bimodule]]. Its reduction modulo positive-degree invariants has relations $x^3=0$, $y^2+xy+x^2=0$.



## Proof

1.1 The four maps: define $R$-bimodule maps $\mu_s:B_s\to R$ by $\mu_s(p\otimes q)=pq$, $\mu_s^a:R\to B_s$ by $\mu_s^a(1)=\alpha_s\otimes1+1\otimes\alpha_s$, $\kappa_s:B_s\otimes_RB_s\to B_s$ by $\kappa_s(p\otimes q\otimes h)=\tfrac12p\,\partial_s^\beta(q)\otimes h$ and $\kappa_s^a:B_s\to B_s\otimes_RB_s$ by $\kappa_s^a(p\otimes q)=p\otimes1\otimes q$, and let $\mu_t,\mu_t^a$ be the same constructions for $t$. [F1]



1.2 Degrees: $\mu_s$ and $\mu_s^a$ have degree $+1$ and $\kappa_s,\kappa_s^a$ have degree $-1$: an element of $B_s$ of degree $d$ is an element of $R\otimes_{R^s}R$ of degree $d+1$ by $B_s=R\otimes_{R^s}R(1)$, so $pq$ has degree $d+1$ in $R$, $\alpha_s\otimes1$ and $1\otimes\alpha_s$ have degree $1$ in $B_s$ because $\deg\alpha_s=2$ and $1\otimes1$ has degree $-1$, and $\partial_s^\beta$ lowers degrees by $2$. [F1]



1.3 Balancedness of the four maps: $\mu_s$ and $\kappa_s^a$ are visibly balanced in the middle slots; $\kappa_s$ is balanced because $\partial_s^\beta$ is $R^s$-linear, so $\partial_s^\beta(r_sq)=r_s\partial_s^\beta(q)$ and $\partial_s^\beta(qr_s)=\partial_s^\beta(q)r_s$ for $r_s\in R^s$, whence $p\partial_s^\beta(r_sq)\otimes h=pr_s\partial_s^\beta(q)\otimes h$ and $p\partial_s^\beta(qr_s)\otimes h=p\partial_s^\beta(q)\otimes r_sh$. [F1]



1.4 The adjoint $\mu_s^a$ is well defined: a map out of the regular bimodule $R$ must send $f$ to the same element through $f\cdot\mu_s^a(1)$ and $\mu_s^a(1)\cdot f$, so it suffices that $Z_s:=\alpha_s\otimes1+1\otimes\alpha_s$ commutes with $R$. Every $f$ is $f^++\alpha_sf^-$ with $f^\pm\in R^s$ by [F3], and elements of $R^s$ slide across the tensor divider and commute with $Z_s$. For the remaining generator $\alpha_s$, one has $\alpha_s Z_s=\alpha_s^2\otimes1+\alpha_s\otimes\alpha_s$ and $Z_s\alpha_s=\alpha_s\otimes\alpha_s+1\otimes\alpha_s^2$; these are equal because $\alpha_s^2\in R^s$. Thus $fZ_s=Z_sf$ for every $f$, and $\mu_s^a(f):=fZ_s$ is a well-defined $R$-bimodule map of degree $+1$ because $Z_s$ has degree $1$. [F1, F3]



1.5 The natural map $j:R\otimes_{R^{W_{i,i+1}}}R(3)\to T:=B_sB_tB_s$, $j(p\otimes q)=p\otimes1\otimes1\otimes q$, is balanced and has degree zero: a parabolic invariant slides across all three dividers. Its injectivity will follow from the explicit perfect trace pairing below, rather than by an assumed description of the complement. [F4]

2.1 The composite identity: for the adjacent pair, $s(\alpha_t)=\alpha_t+\alpha_s$ because $s$ exchanges $x_i$ and $x_{i+1}$ and fixes every other coordinate, so $\partial_s^\beta(\alpha_t)=\bigl(\alpha_t-s(\alpha_t)\bigr)/\alpha_s=-1$. Applying $\kappa_s\circ\mu_t\circ\mu_t^a\circ\kappa_s^a$ to $p\otimes q\in B_s$, the successive images are $p\otimes1\otimes q$ under $\kappa_s^a$, then $p\otimes\alpha_t\otimes1\otimes q+p\otimes1\otimes\alpha_t\otimes q$ under the middle-slot insertion $\mu_t^a$, then $2p\otimes\alpha_t\otimes q$ under the middle-slot multiplication $\mu_t$, and finally $\tfrac12\cdot2p\,\partial_s^\beta(\alpha_t)\otimes q=-(p\otimes q)$ under $\kappa_s$; hence $\kappa_s\circ\mu_t\circ\mu_t^a\circ\kappa_s^a=-\operatorname{id}_{B_s}$. [F1, F3, step 1.1]



2.2 Injectivity of the large-summand map. On $k[x,y,z]$ put $\tau=\partial_s^\beta\partial_t^\beta\partial_s^\beta$, a map of degree $-6$ into the symmetric invariant ring. Explicitly, its value is the alternating sum of the six permuted inputs divided by $(x-y)(x-z)(y-z)$: expanding the three operators gives this identity, and the alternating numerator is divisible by each of these distinct linear factors. Therefore it is symmetric and invariant-ring-linear. It sends $x^2y$ to $1$ (successively the three operators give $xy,x,1$) and kills polynomials of degree less than $6$. The Gram determinant of $\tau(fg)$ in the six-element basis of [F5] is homogeneous of degree zero: the sum of the six basis degrees is $18$, so every determinant term has degree $2\cdot18-6\cdot6=0$. Evaluate at zero positive-degree invariants. Complementary degrees pair by $1$ in degrees $0,6$ and by the matrix $\begin{pmatrix}0&1\\1&-1\end{pmatrix}$ in degrees $2,4$, using $x^3=0$ and $xy^2=-x^2y$; all noncomplementary pairings vanish. The determinant is nonzero. Thus the original determinant is a nonzero constant, and $\tau(fg)$ is a perfect pairing over the invariant ring. On the unshifted commutative tensor algebra underlying $T$, successive rank-one traces give a right-$R$-linear map $\operatorname{Tr}_T$ of degree $-6$. Indeed a rank-one trace sends $a\otimes b$ to $\partial_s^\beta(a)b$ in the right-coefficient convention, and iterating gives $\operatorname{Tr}_T(j(p\otimes q))=\tau(p)q$. Termwise multiplication consequently gives $\operatorname{Tr}_T(j(u)j(v))$ equal to the scalar extension of the perfect $\tau$ pairing, for $u,v\in R\otimes_{R^{W_{i,i+1}}}R$. If $j(u)=0$, all these pairings vanish, and perfection forces $u=0$. Hence $j$ is injective. [F1, F3, F5, step 1.5, algebra]



3.1 The idempotent: with the identities understood in the sense of tensor slots (as in the sources), let $e:=-\mu_t^a\circ\kappa_s^a\circ\kappa_s\circ\mu_t\in\operatorname{End}_{R\text{-}R}(B_sB_tB_s)$; then $e^2=\mu_t^a\kappa_s^a(\kappa_s\mu_t\mu_t^a\kappa_s^a)\kappa_s\mu_t=\mu_t^a\kappa_s^a(-\operatorname{id})\kappa_s\mu_t=e$ by step 2.1, so $e$ is an idempotent, and it is homogeneous of degree $0$ by step 1.2. [step 1.2, step 2.1]



4.1 The splitting and its small summand: $1-e$ is an idempotent orthogonal to $e$, so the graded bimodule splits as $B_sB_tB_s=\operatorname{im}(e)\oplus\operatorname{im}(1-e)$. The composite identity of step 2.1 makes $-\kappa_s\mu_t$ a left inverse to $\mu_t^a\kappa_s^a$, so $\operatorname{im}(e)=\operatorname{im}(\mu_t^a\kappa_s^a)\cong B_s$ without a separate injectivity or surjectivity claim; the comparison has degree zero by step 1.2. [step 1.2, step 2.1, step 3.1]

5.1 Its image lies in the complementary summand. The split projection $d=-\kappa_s\mu_t:T\to B_s$ from step 4.1 kills $1^\otimes$, because the middle polynomial entering $\partial_s^\beta$ is $1$. By bimodule linearity it kills every $j(p\otimes q)$. With the section $a=\mu_t^a\kappa_s^a$, the identity $da=\operatorname{id}$ shows $e=ad$, so $\ker d=\operatorname{im}(1-e)$. Thus $j$ injects into that complement. [step 2.1, step 3.1, step 4.1, step 2.2]

6.1 Write $u$ for the degree of a homogeneous left-$R$ basis generator. The triple tensor has rank $(u^{-1}+u)^3$, while the split small summand has rank $u^{-1}+u$. Thus the complement has Hilbert series equal to the Hilbert series of $R$ times $u^{-3}+2u^{-1}+2u+u^3$, precisely the series of the source of $j$ by the proved six-element basis. In each degree these vector spaces have equal finite dimension. The injection of step 5.1 is therefore surjective degree by degree, and $j$ is an isomorphism onto $\operatorname{im}(1-e)$. [F1, F2, F4, step 4.1, step 5.1]

7.1 Conclusion: the injection and Hilbert-series comparison in the preceding injectivity and Hilbert-series calculations prove that $\operatorname{im}(1-e)\cong R\otimes_{R^{W_{i,i+1}}}R(3)=B_{i,i+1,i}$ with a degree-zero identification; combined with step 4.1 this gives $B_iB_{i+1}B_i\cong B_{i,i+1,i}\oplus B_i$. The second decomposition is the same argument with $s$ and $t$ interchanged, the identity $\partial_t^\beta(\alpha_s)=-1$ being symmetric, so $B_{i+1}B_iB_{i+1}\cong B_{i,i+1,i}\oplus B_{i+1}$. [F4, step 4.1, step 6.1] ∎
