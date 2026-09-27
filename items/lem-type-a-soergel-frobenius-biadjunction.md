---
id: lem-type-a-soergel-frobenius-biadjunction
kind: lemma
title: "Frobenius biadjunction for the type-A Soergel generators"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-type-a-soergel-bimodule-for-a-simple-reflection, lem-type-a-soergel-generators-are-finite-free-on-both-sides, def-type-a-reflection-realization-and-polynomial-ring, def-bott-samelson-bimodule-of-a-word]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Soergel, Kazhdan–Lusztig-Polynome und unzerlegbare Bimoduln, Proposition 5.10, PDF p.16"
      url: "https://arxiv.org/pdf/math/0403496"
    - title: "Elias–Williamson, Soergel Calculus, §3.3, PDF pp.23–24"
      url: "https://arxiv.org/pdf/1309.0865"
verification:
  precheck: pass
---

## Statement

Let $s=s_i$ be a simple reflection, $R^s$ its invariant ring, $\alpha=\alpha_i$,
$\delta=\alpha/2$, and $B_s=R\otimes_{R^s}R(1)$ with its two generators
$u=1\otimes1$ of degree $-1$ and $w_0=1\otimes\delta$ of degree $1$. Write
$\partial_s(f):=(f-s(f))/\alpha$ for the Demazure operator and
$\langle f,g\rangle_s:=\partial_s(fg)$ for the induced $R^s$-bilinear form on
$R$.

1. $\partial_s$ is $R^s$-linear, $\ker\partial_s=R^s$, $\partial_s(\alpha
g)=g+s(g)$, and $\langle\cdot,\cdot\rangle_s$ has Gram matrix
$\begin{pmatrix}0&1\\1&0\end{pmatrix}$ in the $R^s$-basis $(1,\delta)$;
   thus $(1,\delta)$ and $(\delta,1)$ are mutually dual bases of the free
   rank-two $R^s$-module $R$.
2. Currying the form gives a natural $R$-linear isomorphism
   $$\Phi_M:R\{-2\}\otimes_{R^s}M\longrightarrow\operatorname{Hom}_{R^s}(R,M),\qquad \Phi_M(f\otimes m)(g)=\partial_s(fg)\,m,$$
   of graded $R$-modules, homogeneous of degree zero, for every graded
   $R^s$-module $M$.
3. Consequently, for graded $(R,R)$-bimodules $M,N$ there are natural degree-zero
   bijections
   $$\operatorname{Hom}_{R\text{-}R}(B_s\otimes_RM,N)\cong \operatorname{Hom}_{R\text{-}R}(M,B_s\otimes_RN),\qquad \operatorname{Hom}_{R\text{-}R}(M\otimes_RB_s,N)\cong \operatorname{Hom}_{R\text{-}R}(M,N\otimes_RB_s),$$
   and the unit and counit of the resulting adjunction are built from the dual
   bases of part 1; the same holds with $B_s$ tensored on the right, because
   $f\otimes g\mapsto g\otimes f$ is an isomorphism $B_s\to B_s^{\mathrm{op}}$
   of graded bimodules.

## Facts & Assumptions

**Given:** A simple reflection $s=s_i$, the polynomial ring $R$ with its grading $\deg x_j=2$ and invariant ring $R^s$, the element $\delta=\alpha/2$, and the rank-one bimodule $B_s=R\otimes_{R^s}R(1)$ with basis $u,w_0$.

[F1] $R=R^s\oplus\delta R^s$ with $\delta^2\in R^s$, and the Demazure operator $\partial_s(f)=(f-s(f))/\alpha$ satisfies $\partial_s(\alpha f)=2f$ for $f\in R^s$; $2$ is invertible in $k=\mathbb Q$ ([[def-type-a-reflection-realization-and-polynomial-ring]]).

[F2] $B_s$ is a graded $(R,R)$-bimodule, free of rank two as a left and as a right $R$-module, with left basis $u=1\otimes1$ of degree $-1$, $w_0=1\otimes\delta$ of degree $1$, and right action $u\cdot g=g^+u+g^-w_0$, $w_0\cdot g=\delta^2g^-u+g^+w_0$ for the decomposition $g=g^++\delta g^-$ with $g^\pm\in R^s$ ([[def-type-a-soergel-bimodule-for-a-simple-reflection]], [[lem-type-a-soergel-generators-are-finite-free-on-both-sides]]).

[F3] A bimodule map $R\otimes_{R^s}X\to Y$, with $X$ a graded $(R^s,R)$-bimodule and $Y$ a graded $(R,R)$-bimodule, is the same as an $R^s$-$R$-bilinear map $X\to Y$, and shifts may be moved across a balanced tensor product: $(X\{r\})\otimes_RY\cong X\otimes_R(Y\{r\})$ ([[def-bott-samelson-bimodule-of-a-word]]).

## Proof

1.1 Since $\alpha$ is $s$-anti-invariant, $\partial_s$ is $R^s$-linear and $\partial_s(h)=0$ for $h\in R^s$, while $\partial_s(\delta)=\tfrac12\partial_s(\alpha)=1$ by [F1]; and $\delta^2=\alpha^2/4\in R^s$ lies in the kernel, so in the basis $(1,\delta)$ the form $\langle f,g\rangle_s=\partial_s(fg)$ has $\langle1,1\rangle_s=0$, $\langle1,\delta\rangle_s=1$, $\langle\delta,\delta\rangle_s=0$, that is Gram matrix $\begin{pmatrix}0&1\\1&0\end{pmatrix}$, whence $(1,\delta)$ and $(\delta,1)$ are mutually dual bases. [F1]

1.2 The assignment $\Phi_M(f\otimes m)(g):=\partial_s(fg)m$ is well defined on the balanced tensor product, since $\partial_s(hfg)m=\partial_s(fg)\,hm$ for $h\in R^s$, and its values are $R^s$-linear in $g$. For the left $R$-action $(r\cdot\psi)(g)=\psi(rg)$ on $\operatorname{Hom}_{R^s}(R,M)$, one has $\Phi_M(rf\otimes m)(g)=\Phi_M(f\otimes m)(rg)$, so $\Phi_M$ is $R$-linear. On the unshifted tensor product its formula lowers degree by two because $\partial_s$ has degree $-2$; hence the domain shift $R\{-2\}$ makes $\Phi_M$ homogeneous of degree zero. [F1, F3]

1.3 Hom-tensor adjunction over $R^s$ as in [F3] turns $B_s\otimes_RM=R\otimes_{R^s}(R\{-1\}\otimes_RM)$ into the hom space $\operatorname{Hom}_{R^s\text{-}R}(R\{-1\}\otimes_RM,N)$, and a second adjunction identifies the latter with $\operatorname{Hom}_{R\text{-}R}(M,\operatorname{Hom}_{R^s}(R\{-1\},N))$. [F3]

2.1 Put $b_1=1$, $b_2=\delta$ and $b^1=\delta$, $b^2=1$. The Gram matrix of step 1.1 gives the two dual-basis identities $r=\sum_i b_i\partial_s(b^i r)=\sum_i\partial_s(r b_i)b^i$ for every $r\in R$. For any graded $R^s$-module $M$ define $\Psi_M(\psi):=1\otimes\psi(\delta)+\delta\otimes\psi(1)$ in $R\{-2\}\otimes_{R^s}M$ for $\psi\in\operatorname{Hom}_{R^s}(R,M)$. The first identity and $R^s$-linearity of $\psi$ give $\Phi_M\Psi_M(\psi)(r)=\psi(r)$. Conversely, writing $f=h_0+\delta h_1$ with $h_0,h_1\in R^s$, we have $\partial_s(f\delta)=h_0$ and $\partial_s(f)=h_1$, so $\Psi_M\Phi_M(f\otimes m)=1\otimes h_0m+\delta\otimes h_1m=f\otimes m$. If $\psi$ has degree $d$, then $1\otimes\psi(\delta)$ has degree $-2+(d+2)=d$ and $\delta\otimes\psi(1)$ has degree $0+d=d$; thus $\Psi_M$ is degree zero. Both formulas commute with every graded $R^s$-linear map $M\to M'$, so $\Phi_M$ is a natural degree-zero $R$-linear isomorphism for every graded $M$, without a freeness assumption. [F1, step 1.1, step 1.2]

3.1 Applying step 2.1 to the graded $R^s$-module $N\{1\}$ gives $\operatorname{Hom}_{R^s}(R\{-1\},N)\cong\operatorname{Hom}_{R^s}(R,N\{1\})\cong R\{-2\}\otimes_{R^s}N\{1\}\cong R\{-1\}\otimes_{R^s}N$. The last object is $B_s\otimes_RN$: by the balanced tensor relation, $(R\otimes_{R^s}R\{-1\})\otimes_RN\cong R\otimes_{R^s}N\{-1\}\cong R\{-1\}\otimes_{R^s}N$, with no extra $R$ factor. These are degree-zero $(R,R)$-bimodule identifications by the shift convention; composing them with the two Hom-tensor adjunctions of step 1.3 gives the first displayed natural bijection. [F3, step 2.1, step 1.3]

4.1 The flip $f\otimes g\mapsto g\otimes f$ on $R\otimes_{R^s}R\{-1\}$ is well defined because $R$ is commutative and $R^s$ is central, is homogeneous because the factor degrees add, and is its own inverse. It intertwines the left and right $R$-actions, so it is a graded bimodule isomorphism $B_s\to B_s^{\mathrm{op}}$. In particular it fixes $u=1\otimes1$ and sends $w_0=1\otimes\delta$ to $\delta\otimes1$, both with their original degrees; it does not swap $u$ and $w_0$. Applying the first adjunction of step 3.1 to opposite bimodules yields the second displayed natural degree-zero bijection $\operatorname{Hom}_{R\text{-}R}(M\otimes_RB_s,N)\cong\operatorname{Hom}_{R\text{-}R}(M,N\otimes_RB_s)$. [F2, step 3.1]

5.1 For completeness, the two triangle maps can be checked directly. Under $B_s\otimes_RB_s\cong R\otimes_{R^s}R\otimes_{R^s}R\{-2\}$, evaluation is the degree-zero bimodule map $\varepsilon((a\otimes b)\otimes(c\otimes d))=a\partial_s(bc)d$, and coevaluation is the degree-zero bimodule map sending $1\in R$ to $E:=\sum_i(b_i\otimes1)\otimes(1\otimes b^i)$, with the dual bases of step 2.1. The underlying degree of $E$ is two and the total shift is $-2$; $E$ is central for the outer $R$-actions, as is checked on the generators $R^s$ and $\delta$ using $\delta^2\in R^s$. For $z=a\otimes b\in B_s$, the composite $(\operatorname{id}_{B_s}\otimes\varepsilon)(E\otimes z)$ equals $\sum_i b_i\otimes\partial_s(b^i a)b=a\otimes b$, while $(\varepsilon\otimes\operatorname{id}_{B_s})(z\otimes E)$ equals $\sum_i a\partial_s(b b_i)\otimes b^i=a\otimes b$, by the two dual-basis identities of step 2.1. Tensoring these maps with any graded bimodule gives the unit and counit triangle identities for both adjunctions; all maps are natural and degree zero. ∎ [step 1.1, step 2.1, step 3.1, step 4.1]
