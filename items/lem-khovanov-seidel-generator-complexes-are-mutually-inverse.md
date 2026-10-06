---
id: lem-khovanov-seidel-generator-complexes-are-mutually-inverse
kind: lemma
title: "The generator complexes are mutually inverse"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
deps:
  - def-khovanov-seidel-positive-and-negative-twist-complexes
  - thm-khovanov-seidel-u-functors-satisfy-temperley-lieb-relations
  - thm-homological-gaussian-elimination-splits-off-a-contractible-two-term-complex
  - def-invertible-differential-block-and-schur-complement-reduction
  - def-signed-totalization-of-graded-a-m-bimodule-actions
  - lem-bounded-two-sided-projective-a-m-bimodule-complexes-act-on-c-m
  - def-khovanov-seidel-beta-and-gamma-bimodule-maps
  - def-complex-homotopy-and-contractibility-in-an-additive-category
  - lem-graded-balanced-tensor-and-shift-isomorphisms
  - lem-the-khovanov-seidel-algebra-has-the-four-m-plus-one-path-basis
  - def-two-sided-projective-khovanov-seidel-bimodule-functors
proof_strategy: direct
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mikhail Khovanov and Paul Seidel, Quivers, Floer Cohomology, and Braid Group Actions, J. Amer. Math. Soc. 15 (2002) 203-271, Proposition 2.4"
      url: "https://arxiv.org/pdf/math/0006056"
      locator: "Proposition 2.4 with its proof, printed pp. 11-13"
    - title: "Dror Bar-Natan, Fast Khovanov homology computations, Section 4 (Gaussian elimination)"
      url: "https://www.math.utoronto.ca/~drorbn/papers/FastKh/FastKh.pdf"
      locator: "Section 4, printed pp. 4-5"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Fix $m\ge1$ and let $R_i=[U_i\xrightarrow{\beta_i}A_m]$ and
$R_i^{-1}=[A_m\xrightarrow{\gamma_i}U_i\{-1\}]$ be the positive and negative twist
complexes of [[def-khovanov-seidel-positive-and-negative-twist-complexes]], with
$U_i$ in homological degree $-1$ and $A_m$ in degree $0$ in the first complex and
$A_m$ in degree $0$ and $U_i\{-1\}$ in degree $1$ in the second. Then for every
$1\le i\le m$ there are homotopy equivalences of complexes of graded
$(A_m,A_m)$-bimodules
$$R_i\otimes_{A_m}R_i^{-1}\;\simeq\;A_m\;\simeq\;R_i^{-1}\otimes_{A_m}R_i,$$
where $A_m$ denotes the diagonal bimodule concentrated in homological degree
$0$; they become isomorphisms in $C_m$ and induce isomorphisms of endofunctors
$$R_iR_i^{-1}\cong\operatorname{Id}_{C_m}\cong R_i^{-1}R_i .$$
In particular $R_i^{-1}$ is a two-sided inverse of $R_i$ on $C_m$, and both are
equivalences of $C_m$.

## Facts & Assumptions
**Given:** An integer $m\ge1$, the algebra $A_m$ with corner bases, the bimodules $U_i=P_i\otimes_{\mathbb Z}{}_iP$ and maps $\beta_i,\gamma_i$, and the complexes $R_i,R_i^{-1}$ with the totalization of [[def-signed-totalization-of-graded-a-m-bimodule-actions]].

[L1] $\beta_i(e_i\otimes e_i)=e_i$ and $\gamma_i(1)=w_i$ with $w_i=(i-1|i)\otimes(i|i-1)+(i+1|i)\otimes(i|i+1)+(i)\otimes(i|i-1|i)+(i|i-1|i)\otimes(i)$, the term $(i+1|i)\otimes(i|i+1)$ being omitted for $i=m$; both are degree-zero maps of graded $(A_m,A_m)$-bimodules ([[def-khovanov-seidel-beta-and-gamma-bimodule-maps]]).

[L2] $R_i=[U_i\xrightarrow{\beta_i}A_m]$ and $R_i^{-1}=[A_m\xrightarrow{\gamma_i}U_i\{-1\}]$ are bounded complexes of graded $(A_m,A_m)$-bimodules with degree-zero differentials whose terms are finitely generated graded projective on both sides; their actions on $C_m$ are exact endofunctors agreeing with derived tensor ([[def-khovanov-seidel-positive-and-negative-twist-complexes]], [[lem-bounded-two-sided-projective-a-m-bimodule-complexes-act-on-c-m]]).

[L3] The corner $e_iA_me_i$ has $\mathbb Z$-basis $e_i$ in degree $0$ and the return $(i|i-1|i)$ in degree $1$, and $e_iA_me_{i\pm1}$ is free of rank one on the arrow $(i|i\pm1)$ whenever the neighboring index lies in $\{0,\ldots,m\}$; every path of length at least three is zero in $A_m$ and $(i|i-1|i)=(i|i+1|i)$ when $i<m$ ([[lem-the-khovanov-seidel-algebra-has-the-four-m-plus-one-path-basis]]).

[L4] ${}_iP\otimes_{A_m}P_i\cong e_iA_me_i$ as graded abelian groups under $y\otimes x\mapsto yx$, and the balanced tensor is associative and unital, with $M\otimes_{A_m}A_m\cong M$ and $A_m\otimes_{A_m}N\cong N$ naturally in the graded variables ([[lem-graded-balanced-tensor-and-shift-isomorphisms]], [[def-two-sided-projective-khovanov-seidel-bimodule-functors]]).

[L5] The totalization $(R\otimes_{A_m}S)^n=\bigoplus_{p+q=n}R^p\otimes_{A_m}S^q$ of two bounded complexes of graded bimodules is a bounded complex with $d(r\otimes s)=d_Rr\otimes s+(-1)^pr\otimes d_Ss$, its square-zero condition holding automatically, and it is functorial and associative up to canonical degree-zero isomorphism ([[def-signed-totalization-of-graded-a-m-bimodule-actions]]).

[L6] If a two-term cochain complex in an additive category has terms $U,V$ in adjacent degrees and differential $\varphi:U\to V$ an isomorphism, then it is contractible, with contracting homotopy $\varphi^{-1}$ in the upper degree ([[thm-homological-gaussian-elimination-splits-off-a-contractible-two-term-complex]], [[def-invertible-differential-block-and-schur-complement-reduction]], [[def-complex-homotopy-and-contractibility-in-an-additive-category]]).



## Proof

**Proof technique:** direct.

1.1 *The middle corner and the module $Q$.* By [L3] and the tensor-unit and associativity isomorphisms of [L4] the graded abelian group $Q:={}_iP\otimes_{A_m}P_i$ is free with basis $u_1=e_i\otimes e_i$ in degree $0$ and $u_2=(i|i-1|i)\otimes e_i$ in degree $1$, so that $Q=\mathbb Zu_1\oplus\mathbb Zu_2$; by [L5] and [L4] the terms of the totalization $N:=R_i\otimes_{A_m}R_i^{-1}$ are $N^{-1}\cong U_i$, $N^{0}\cong A_m\oplus(P_i\otimes_{\mathbb Z}Q\otimes_{\mathbb Z}{}_iP\{-1\})$ and $N^{1}\cong U_i\{-1\}$. [L3, L4, L5]

2.1 *The two maps of the source's square.* Define the $A_m$-bimodule maps $\tau\colon U_i\to P_i\otimes_{\mathbb Z}Q\otimes_{\mathbb Z}{}_iP\{-1\}$ and $\delta\colon P_i\otimes_{\mathbb Z}Q\otimes_{\mathbb Z}{}_iP\{-1\}\to U_i\{-1\}$ by $\tau(x\otimes y):=x\otimes u_1\otimes(i|i-1|i)y+x\otimes u_2\otimes y$, $\delta(x\otimes u_1\otimes y):=x\otimes y$ and $\delta(x\otimes u_2\otimes y):=x(i|i-1|i)\otimes y$; both are bilinear because multiplication is, and both are degree zero: in the shifted middle object the $u_1$ and $u_2$ components have degrees $\deg x+\deg y-1$ and $\deg x+\deg y$, respectively, matching the degrees of their images $x\otimes y$ and $x(i|i-1|i)\otimes y$ in $U_i\{-1\}$. Each summand in $\tau(x\otimes y)$ has degree $\deg x+\deg y$; the natural balanced identification gives differentials $(\beta_i,-\tau)$ and $(\gamma_i,\delta)$. Negating the middle $P_i\otimes Q\otimes{}_iP\{-1\}$ coordinate gives the source’s signed chart, in which the differentials read $\partial^{-1}=\beta_i+\tau$, $\partial^{-1}(u)=(\beta_i(u),\tau(u))$, and $\partial^{0}=(\gamma_i,-\delta)$, $\partial^{0}(a,z)=\gamma_i(a)-\delta(z)$, the source's anticommutative square of Section 2 with the sign on $\delta$, and $\partial^{0}\partial^{-1}=0$ is the automatic square-zero condition of the totalization [L5]. [L5, step 1.1, L1]

3.1 *The splitting of $N^{0}$.* Let $\xi(a)$ be the image of $\gamma_i(a)=\sum_jx_j\otimes y_j$ under $x\otimes y\mapsto x\otimes u_1\otimes y$, so that $\delta\xi(a)=\sum_jx_j\otimes y_j=\gamma_i(a)$ because $\delta$ removes the middle $u_1$; write $W:=P_i\otimes_{\mathbb Z}\mathbb Zu_1\otimes_{\mathbb Z}{}_iP\{-1\}$ for the $u_1$-component and define $\Psi(a,w,u):=(a+\beta_i(u),\,\xi(a)+w+\tau(u))$. The map $\Psi\colon A_m\oplus W\oplus U_i\to N^{0}$ is an isomorphism of graded bimodules: its inverse sends $(a',z)$ to $u:=\tau_2^{-1}(z_2)$, $a:=a'-\beta_i(u)$, $w:=z_1-\xi_1(a)-\tau_1(u)$, where $z=z_1+z_2$ decomposes along the $u_1$- and $u_2$-components, $\tau_2$ denotes the injective $u_2$-component $x\otimes y\mapsto x\otimes u_2\otimes y$ of $\tau$, and the subscript $1$ denotes the $u_1$-component; these four maps are well defined and degree zero. Consequently $N^{0}$ is the direct sum of $\partial^{-1}(U_i)=\{(\beta_i(u),\tau(u))\}$, the graph $T_0^{0}:=\{(a,\xi(a)):a\in A_m\}$ and the $u_1$-component $T_1^{0}:=\{(0,w):w\in W\}$, while $N^{-1}=U_i$ and $N^{1}=U_i\{-1\}$. [step 2.1]

4.1 *$N$ splits as a direct sum of three subcomplexes.* Put $T_{-1}:=[U_i\xrightarrow{\partial^{-1}}\partial^{-1}(U_i)]$, $T_0:=\{(a,\xi(a)):a\in A_m\}$ concentrated in degree $0$, and $T_1:=[W\xrightarrow{-\delta}U_i\{-1\}]$, with differentials the restrictions of $\partial^{-1}$ and $\partial^{0}$; these are subcomplexes of $N$ because $\partial^{0}\partial^{-1}=0$ on $U_i$ by step 2.1, $\partial^{0}(a,\xi(a))=\gamma_i(a)-\delta\xi(a)=0$ by step 3.1 and $\partial^{0}(0,w)=-\delta(w)$, and by the direct sum decomposition of step 3.1 the objects of $N$ are the degreewise direct sums $N^{j}=T_{-1}^{j}\oplus T_0^{j}\oplus T_1^{j}$. Hence $N=T_{-1}\oplus T_0\oplus T_1$ as complexes of graded bimodules, and $a\mapsto(a,\xi(a))$ identifies $T_0$ with the diagonal bimodule $A_m$ concentrated in degree $0$. [step 2.1, step 3.1]

5.1 *The two outer summands are contractible.* The restriction $\partial^{-1}:U_i\to\partial^{-1}(U_i)$ is surjective by construction and injective because $\tau$ is injective (its $u_2$-component $\tau_2$ alone is already injective, as observed in step 3.1); hence it is an isomorphism, and $T_{-1}$ is a two-term complex with invertible differential, contractible by [L6]. The restriction $-\delta:W\to U_i\{-1\}$ is an isomorphism, with inverse $x\otimes y\mapsto -x\otimes u_1\otimes y$, so $T_1$ is contractible by [L6] as well. [L6, step 4.1]

6.1 *The first homotopy equivalence.* By steps 4.1 and 5.1 the complex $N$ is the direct sum of $T_0\cong A_m$ with two contractible complexes; a finite direct sum of contractible complexes is contractible, the contracting homotopy of a biproduct being the biproduct of the given homotopies, so the projection $N\to T_0\cong A_m$ and the inclusion $T_0\to N$ are inverse homotopy equivalences. This proves $R_i\otimes_{A_m}R_i^{-1}\simeq A_m$, and since the action of a complex with two-sided finite graded projective terms on $C_m$ is well defined on homotopy classes [L2], these maps induce natural isomorphisms $R_iR_i^{-1}\cong\operatorname{Id}_{C_m}$. [L2, step 4.1, step 5.1]

7.1 *The opposite order.* Write $c_i=(i|i-1|i)$. The middle corner in $N'=R_i^{-1}\otimes_{A_m}R_i$ is again $Q={}_iP\otimes_{A_m}P_i$, not the oppositely typed tensor $P_i\otimes_{A_m}{}_iP$. Its terms are $U_i$ in degree $-1$, $A_m\oplus(P_i\otimes Q\otimes{}_iP\{-1\})$ in degree $0$, and $U_i\{-1\}$ in degree $1$. Define $$\tau'(x\otimes y)=xc_i\otimes u_1\otimes y+x\otimes u_2\otimes y,$$ $$\delta'(x\otimes u_1\otimes y)=x\otimes y,\qquad\delta'(x\otimes u_2\otimes y)=x\otimes c_i y.$$ These formulas are obtained by inserting $\gamma_i$ on the left and multiplying on the right in the tensor totalization; in particular $\partial'^{-1}=(\beta_i,\tau')$ and $\partial'^0=(\gamma_i,-\delta')$. They are bimodule-linear and homogeneous, and their composite is zero by [L5]. The $u_2$-component of $\tau'$ is the identity under its shift identification, while $\delta'$ is the identity from the $u_1$-component to $U_i\{-1\}$. With $\xi'$ given by inserting $u_1$ in $\gamma_i(a)$, one has $\delta'\xi'=\gamma_i$. Hence the same explicit coordinate map $\Psi'(a,w,u)=(a+\beta_i(u),\xi'(a)+w+\tau'(u))$ and its componentwise inverse from step 3.1 split $N'$ into its diagonal $A_m$ and two identity-pivot pairs. Their inverse differentials are the contracting homotopies, proving $R_i^{-1}\otimes_{A_m}R_i\simeq A_m$. Applying the action as in step 6.1 gives the opposite functor identity. [L5, L1, L3, L4, L6, step 3.1, step 6.1, algebra]

8.1 *Conclusion.* The complexes $R_i$ and $R_i^{-1}$ are mutually inverse up to the homotopy equivalences of steps 6.1 and 7.1, hence are inverse isomorphisms in $C_m$ and induce two-sided inverse functor isomorphisms on $C_m$; in particular both are equivalences of $C_m$. No choice principle is used, all the identifications being explicit finite formulas. [step 6.1, step 7.1] ∎

