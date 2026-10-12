---
id: def-the-level-one-vector-representation-its-affinization-and-energy-function
kind: definition
title: "The level-one vector representation, its affinization and the energy function"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 1
deps: [def-cyclic-affine-type-a-cartan-datum, def-drinfeld-jimbo-quantized-enveloping-algebra,
       def-positive-negative-and-toral-quantum-subalgebras,
       def-kac-moody-integral-and-dominant-integral-weights]
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
    - title: "Masaki Kashiwara, Tetsuji Miwa and Eugene Stern, Decomposition of q-deformed Fock spaces, arXiv:q-alg/9508006"
      url: "https://arxiv.org/pdf/q-alg/9508006"
      locator: "sec. 1.1, printed pp. 1-3: presentation of $U'_q(\\widehat{\\mathfrak{sl}}_n)$ and the evaluation module (16)-(23); sec. 1.2, printed pp. 3-5: the affine Hecke action used later."
    - title: "Masaki Kashiwara, Tetsuji Miwa, Jens-Ulrik H. Petersen and Chong Ming Yung, Perfect crystals and q-deformed Fock spaces, arXiv:q-alg/9603025"
      url: "https://arxiv.org/pdf/q-alg/9603025"
      locator: "sec. 2.2, printed pp. 9-11: the opposite coproduct $\\Delta_+$ and rule (2.2.13); sec. 3.1-3.2, printed pp. 12-14: affinization, axioms (E1)-(E4) and condition (L); sec. 5.2, printed pp. 35-36: the level-one $A_n^{(1)}$ crystal, energy $H(b_i\\otimes b_j)=1$ for $i>j$ and $l(z^mb_j)=mh-j$."
    - title: "Bernard Leclerc, Fock space representations (author-hosted complete 38-page treatment)"
      url: "https://leclercb.users.lmno.cnrs.fr/lectnotes_final.pdf"
      locator: "sec. 3.1-3.2, printed pp. 16-17: vector representation $U$ with residues, tensor action (23)-(24) and the Hecke loops $Y_j=z$ used below."
    - title: "Eugene Stern, Semi-infinite wedges and vertex operators, arXiv:q-alg/9504013"
      url: "https://arxiv.org/pdf/q-alg/9504013"
      locator: "sec. 4.1-4.3, printed pp. 10-15: evaluation modules, loop variable and the Hecke antisymmetrization conventions."
---

## Definition

Fix $e\ge2$ and let $(I,A,D,P,P^\vee,\alpha_i,h_i,\delta,d,c,q)$ be the cyclic
affine type $A$ Cartan datum of
[[def-cyclic-affine-type-a-cartan-datum]], so $I=\mathbb Z/e\mathbb Z$ and
$q_i=q$ for all $i$. Choose once and for all the representatives
$j\in\{1,\dots,e\}$ of the residues of $I$, so that $j=e$ represents the residue
$0$; all indices $j-1$, $j+1$ below are read in this representative range.

**The derived vector module.** Let $V:=\bigoplus_{j=1}^{e}\mathbb Q(q)v_j$ and
define $\mathbb Q(q)$-linear operators $K_h$ ($h\in P^\vee$), $E_i$, $F_i$
($i\in I$) on $V$ by

$$K_hv_j:=q^{\langle\Lambda_j-\Lambda_{j-1},h\rangle}v_j,\qquad E_iv_j:=\delta_{j\equiv i+1}\,v_{j-1},\qquad F_iv_j:=\delta_{j\equiv i}\,v_{j+1},$$

where $v_0:=v_e$ and $v_{e+1}:=v_1$ are read cyclically, and $\equiv$ refers to
the residues of $I$. The vector $v_j$ has **classical weight**
$\lambda_j:=\Lambda_j-\Lambda_{j-1}\in P$ and **residue** $j\in I$.

**Affinization.** The **affinization** $V_{\mathrm{aff}}$ is the
$\mathbb Q(q)$-vector space with basis $\{u_m\}_{m\in\mathbb Z}$, identified
with $V\otimes\mathbb Q[z,z^{-1}]$ by $u_m:=z^av_j$ whenever
$m=j-ae$ with $j\in\{1,\dots,e\}$ and $a\in\mathbb Z$; this representation of
$m$ is unique. The operators become

$$K_hu_m:=q^{\langle\lambda_j+a\delta,h\rangle}u_m,\qquad E_iu_m:=\delta_{m\equiv i+1}\,u_{m-1},\qquad F_iu_m:=\delta_{m\equiv i}\,u_{m+1},$$

so that in the $z$-picture
$E_i(z^av_j)=\delta_{j\equiv i+1}z^{a+\delta_{i0}}v_{j-1}$ and
$F_i(z^av_j)=\delta_{j\equiv i}z^{a-\delta_{i0}}v_{j+1}$. We write
$\mathrm{wt}(u_m):=\lambda_j+a\delta\in P$ and $l(u_m):=ae-j=-m$; the
**ordinary order** is $u_m>u_n\iff m>n$.

**Crystal data.** Put $B:=\{b_1,\dots,b_e\}$, $B_{\mathrm{aff}}:=\{u_m\}_{m\in\mathbb Z}$,
and define partial operators $f_i,e_i$ on $B_{\mathrm{aff}}$ by
$f_iu_m:=u_{m+1}$ if $m\equiv i$ and $f_iu_m:=0$ otherwise, and
$e_iu_m:=u_{m-1}$ if $m\equiv i+1$ and $e_iu_m:=0$ otherwise. Let

$$\varepsilon_i(u_m):=\delta_{m\equiv i+1},\qquad \varphi_i(u_m):=\delta_{m\equiv i},\qquad \varepsilon(u_m):=\sum_i\varepsilon_i(u_m)\Lambda_i^{\mathrm{cl}},\qquad \varphi(u_m):=\sum_i\varphi_i(u_m)\Lambda_i^{\mathrm{cl}},$$

in $P_{\mathrm{cl}}$. On the finite set $B$ the same formulas apply through
$b_j\leftrightarrow v_j$, so that $f_ib_j=b_{j+1}$ if $j\equiv i$ and $0$
otherwise, and $e_ib_j=b_{j-1}$ if $j\equiv i+1$ and $0$ otherwise.

**The opposite channel and its energy.** On $B_{\mathrm{aff}}\otimes B_{\mathrm{aff}}$
use the tensor rule $\otimes_+$

$$f_i(x\otimes y):=\begin{cases}f_ix\otimes y,&\varepsilon_i(x)\ge\varphi_i(y),\\x\otimes f_iy,&\varepsilon_i(x)<\varphi_i(y),\end{cases}\qquad e_i(x\otimes y):=\begin{cases}e_ix\otimes y,&\varepsilon_i(x)>\varphi_i(y),\\x\otimes e_iy,&\varepsilon_i(x)\le\varphi_i(y),\end{cases}$$

and the **energy function**

$$H_{\mathrm{op}}(z^ab_j\otimes z^bb_k):=\chi(j>k)+b-a,\qquad \chi(j>k):=\begin{cases}1,&j>k,\\0,&j\le k,\end{cases}$$

for $a,b\in\mathbb Z$ and $j,k\in\{1,\dots,e\}$. For a fixed **charge**
$M\in\mathbb Z$ the **ground sequence** is $b^\circ_s:=u_{M-s}$ ($s\ge0$).

## Facts & Assumptions

**Given:** The cyclic affine type $A$ Cartan datum of [[def-cyclic-affine-type-a-cartan-datum]] with residues $I=\mathbb Z/e\mathbb Z$, $e\ge2$; the representatives $j\in\{1,\dots,e\}$; the spaces $V$ and $V_{\mathrm{aff}}$ with the displayed operators, crystal data, tensor rule and energy function; a charge $M\in\mathbb Z$ with ground sequence $b^\circ_s=u_{M-s}$.

[F1] $U_q(\mathfrak g)$ is presented by generators $E_i,F_i,K_h$ ($i\in I$, $h\in P^\vee$) with $K_0=1$, $K_hK_{h'}=K_{h+h'}$, $K_hE_iK_h^{-1}=q^{\langle\alpha_i,h\rangle}E_i$, $K_hF_iK_h^{-1}=q^{-\langle\alpha_i,h\rangle}F_i$, $E_iF_j-F_jE_i=\delta_{ij}(K_i-K_i^{-1})/(q-q^{-1})$ and the two quantum Serre sums, $q_i=q$; any assignment satisfying these relations extends uniquely to an algebra homomorphism ([[def-drinfeld-jimbo-quantized-enveloping-algebra]], [[def-positive-negative-and-toral-quantum-subalgebras]]).

[F2] The datum has $\langle\alpha_j,h_i\rangle=a_{ij}$, $\langle\alpha_i,d\rangle=\delta_{i0}$, $\langle\Lambda_j,h_i\rangle=\delta_{ij}$, $\langle\delta,h_i\rangle=0$, $\langle\Lambda_j,d\rangle=0$ and $\langle\delta,d\rangle=1$ ([[def-cyclic-affine-type-a-cartan-datum]]).

[F3] For $e\ge3$, $\alpha_i=-\Lambda_{i-1}+2\Lambda_i-\Lambda_{i+1}$ and for $e=2$, $\alpha_0=2\Lambda_0-2\Lambda_1+\delta$, $\alpha_1=-2\Lambda_0+2\Lambda_1$; in all cases $\lambda_j-\lambda_{j-1}=\alpha_{j-1}$ and $\lambda_1+\delta-\lambda_e=\alpha_0$ with $\lambda_j:=\Lambda_j-\Lambda_{j-1}$ ([[def-cyclic-affine-type-a-cartan-datum]]).

[F4] The level of $\lambda\in P$ is $\langle c,\lambda\rangle$; $\lambda_j$ has level $0$ and $\Lambda_i$, as an element of $P_{\mathrm{cl}}=P/\mathbb Z\delta$, has level $1$; $q\neq q^{-1}$ in $\mathbb Q(q)$, and $q^m\ne1$ for $m\ne0$ ([[def-cyclic-affine-type-a-cartan-datum]], [[def-kac-moody-integral-and-dominant-integral-weights]]).

[F5] Writing $j(m)\in\{1,\dots,e\}$ for the representative of $m\bmod e$ and $a(m):=(j(m)-m)/e$, every $m\in\mathbb Z$ has the unique expression $m=j(m)-a(m)e$; hence $u_m=z^{a(m)}v_{j(m)}$ and the assignment $m\mapsto(j(m),a(m))$ is a bijection $\mathbb Z\to\{1,\dots,e\}\times\mathbb Z$.

[F6] For all $m\in\mathbb Z$ the identities $\langle\lambda_{j(m)},h_i\rangle=\delta_{i,j(m)}-\delta_{i,j(m)-1}$ and $\langle\lambda_{j(m)}+a(m)\delta,d\rangle=a(m)$ hold ([[def-cyclic-affine-type-a-cartan-datum]]).

## Verification

**Proof technique:** check the defining relations of the quantized affine algebra on the explicit cyclic shifts, compute the weights and crystal data, then verify the energy axioms on the opposite channel by a two-factor case analysis.

1.1 The derived operators on $V$ are well defined and give a $\mathbb Q(q)$-linear action of the generators. Each displayed formula assigns to each $v_j$ either $0$ or a unique basis vector with a coefficient in $\{0,1\}$, so $E_i,F_i,K_h$ are well-defined linear endomorphisms of the finite-dimensional space $V$; $K_0=\mathrm{id}$ and $K_{h+h'}=K_hK_{h'}$ hold because $\langle\lambda_j,\cdot\rangle$ is additive, so the toral assignment is a homomorphism $P^\vee\to\mathrm{GL}(V)$. [F1, F2, given, algebra]

1.2 The defining relations of $U_q(\mathfrak g)$ hold on $V$; equivalently $V$ is a $U_q(\mathfrak g)$-module. Toral conjugation: $K_hE_iK_h^{-1}v_j$ has coefficient $q^{\langle\lambda_j,h\rangle}q^{\langle\lambda_{j-1}-\lambda_j,h\rangle}=q^{\langle\alpha_{j-1},h\rangle}$ on $v_{j-1}$ whenever $j\equiv i+1$, and $\alpha_{j-1}=\alpha_i$ then, so $K_hE_iK_h^{-1}=q^{\langle\alpha_i,h\rangle}E_i$; similarly $K_hF_iK_h^{-1}=q^{-\langle\alpha_i,h\rangle}F_i$. Mixed commutators: for $i\ne j$, both $F_jE_i$ and $E_iF_j$ contain successive shifts by residues $i+1$ then $j$, and $i+1\equiv j$ would give $i\equiv j$, so both compositions vanish; for $i=j$, $E_iF_iv_j=\delta_{j\equiv i}v_j$ and $F_iE_iv_j=\delta_{j\equiv i+1}v_j$, while $(K_i-K_i^{-1})/(q-q^{-1})v_j=\frac{q^{\delta_{ij}-\delta_{i,j-1}}-q^{-\delta_{ij}+\delta_{i,j-1}}}{q-q^{-1}}v_j$, which is $1$ for $j\equiv i$, $-1$ for $j\equiv i+1$ and $0$ otherwise; the two sides agree. Serre sums: $E_i^2=0$ and $F_i^2=0$ for every $i$, because $E_i^2v_j\ne0$ would need $j\equiv i+1$ and $j-1\equiv i+1$, that is $i\equiv i+1$ in $\mathbb Z/e\mathbb Z$, impossible for $e\ge2$; every Serre summand contains $E_i^{1-a_{ij}}$ or $F_i^{1-a_{ij}}$ with $1-a_{ij}\ge2$, so all Serre sums vanish. Hence the universal property [F1] gives the module structure, and linearity is clear. [F1, F2, F3, algebra]

1.3 The affinized space is well defined and carries the displayed operators. By [F5] each $u_m$ is $z^{a(m)}v_{j(m)}$ for a unique pair, so $\{u_m\}$ is a $\mathbb Q(q)$-basis of $V_{\mathrm{aff}}$. The formulas $E_iu_m=\delta_{m\equiv i+1}u_{m-1}$ and $F_iu_m=\delta_{m\equiv i}u_{m+1}$ define linear endomorphisms, and they agree with the $z$-picture: if $m=j-ae$ with $j\equiv i+1$ and $j\ne1$, then $m-1=(j-1)-ae$ and $u_{m-1}=z^av_{j-1}$, while for $j=1$ one has $m=1-ae$, $m-1=e-(a+1)e$ and $u_{m-1}=z^{a+1}v_e$, matching $E_i(z^av_1)=z^{a+\delta_{i0}}v_e$ because $j=1\equiv i+1$ forces $i=0$; the $F_i$ computation is the mirror image. [F5, given, algebra]

2.1 $V_{\mathrm{aff}}$ is a $U_q(\mathfrak g)$-module with the stated weights and integrable strings. The toral conjugation checks of step 1.2 transfer verbatim because $E_i$ and $F_i$ move one residue in the same direction and the $K$-eigenvalues record the weights; explicitly, $E_iu_m\ne0$ shifts the weight by $\mathrm{wt}(u_{m-1})-\mathrm{wt}(u_m)=\alpha_i$ when $m\equiv i+1$, by [F3] in the non-wrap case $j(m)\ge2$ and by $\lambda_1+\delta-\lambda_e=\alpha_0$ in the wrap case, and $F_i$ shifts by $-\alpha_i$; hence toral, mixed and Serre relations hold exactly as in step 1.2, with $E_i^2=F_i^2=0$ on $V_{\mathrm{aff}}$ by the same residue argument, and $K_du_m=q^{a(m)}u_m$ by [F6]. Integrability: for fixed $i$ and $m$, the space spanned by $u_m$ together with its images under $E_i,F_i$ is $\{u_{m-1},u_m\}$ when $m\equiv i+1$, $\{u_m,u_{m+1}\}$ when $m\equiv i$, and $\{u_m\}$ otherwise, a finite-dimensional $U_q(\mathfrak{sl}_2)_i$-stable space on which $K_i$ has the two distinct eigenvalues $q^{\pm1}$ and on which $E_i,F_i$ interchange the pair; so every $u_m$ lies in a finite-dimensional $\{E_i,F_i,K_i^{\pm1}\}$-stable space, and $V_{\mathrm{aff}}=\bigoplus_m\mathbb Q(q)u_m$ is a weight decomposition with weights $\lambda_{j(m)}+a(m)\delta$ of level $0$. [step 1.2, step 1.3, F1, F3, F4, F6, algebra]

3.1 The crystal data of $u_m$ and $b_j$ are as displayed. By step 2.1, $F_iu_m\ne0$ exactly when $m\equiv i$, and then the image is $u_{m+1}$, so the $i$-string through $u_m$ has length $\varphi_i(u_m)=\delta_{m\equiv i}$; dually the $e_i$-string has length $\varepsilon_i(u_m)=\delta_{m\equiv i+1}$. Hence $\varepsilon(u_m)=\sum_i\delta_{m\equiv i+1}\Lambda_i^{\mathrm{cl}}=\Lambda^{\mathrm{cl}}_{j(m)-1}$ and $\varphi(u_m)=\Lambda^{\mathrm{cl}}_{j(m)}$, which lie in $P_{\mathrm{cl}}$ and have level $1$ by [F4]; the consistency identity $\varphi_i(u_m)=\varepsilon_i(u_m)+\langle h_i,\mathrm{wt}(u_m)\rangle$ holds because $\langle h_i,\mathrm{wt}(u_m)\rangle=\delta_{i,j(m)}-\delta_{i,j(m)-1}$ by [F6]. On $B$ the same computation with $\mathrm{wt}(b_j)=\lambda_j$ gives $f_ib_j=b_{j+1}$ for $j\equiv i$, $e_ib_j=b_{j-1}$ for $j\equiv i+1$, $\varepsilon(b_j)=\Lambda_{j-1}^{\mathrm{cl}}$, $\varphi(b_j)=\Lambda_j^{\mathrm{cl}}$, and the two maps $j\mapsto\Lambda_{j-1}^{\mathrm{cl}}$ and $j\mapsto\Lambda_j^{\mathrm{cl}}$ are bijections from $\{1,\dots,e\}$ onto the $e$ level-one fundamental classes $\{\Lambda_0^{\mathrm{cl}},\dots,\Lambda_{e-1}^{\mathrm{cl}}\}$. [step 2.1, F4, F6, given, algebra]

4.1 The tensor rule $\otimes_+$ together with $\varepsilon_i,\varphi_i$ is a legitimate crystal rule on $B_{\mathrm{aff}}\otimes B_{\mathrm{aff}}$, and it is the opposite-coproduct $\otimes_+$ rule of the cited KMPY section. The assignments $f_i$, $e_i$ of the definition are partial maps with images in $B_{\mathrm{aff}}$, and for all $x,y$ one has $\varepsilon_i(x\otimes y)=\max(\varepsilon_i(x)-\langle h_i,\mathrm{wt}(y)\rangle,\varepsilon_i(y))$ and $\varphi_i(x\otimes y)=\max(\varphi_i(x),\varphi_i(y)+\langle h_i,\mathrm{wt}(x)\rangle)$: for the first identity, if $\varepsilon_i(x)\ge\varphi_i(y)$ then $f_i(x\otimes y)=f_ix\otimes y$ and computing $\varphi_i$ of the tensor from the rule gives $\varphi_i(x\otimes y)=\max(\varphi_i(x),\varphi_i(y)+\langle h_i,\mathrm{wt}(x)\rangle)$, so subtracting $\langle h_i,\mathrm{wt}(x)+\mathrm{wt}(y)\rangle$ and using $\varphi_i=\varepsilon_i+\langle h_i,\mathrm{wt}\rangle$ on each factor yields $\max(\varepsilon_i(x)-\langle h_i,\mathrm{wt}(y)\rangle,\varepsilon_i(y))$; the case $\varepsilon_i(x)<\varphi_i(y)$ is symmetric, and the same computation in reverse gives the second identity. Consequently $\varphi_i(x\otimes y)=\varepsilon_i(x\otimes y)+\langle h_i,\mathrm{wt}(x\otimes y)\rangle$, the weight of a tensor is additive, and the two maps $f_i,e_i$ are the partial inverses prescribed by that rule. [step 3.1, given, algebra]

5.1 The energy function is constant on every connected component of the crystal graph $B_{\mathrm{aff}}\otimes B_{\mathrm{aff}}$ for the rule of step 4.1. Write $x=z^ab_j$ with $m=j-ae$ and $y=z^bb_k$ with $n=k-be$, so $H_{\mathrm{op}}(x\otimes y)=\chi(j>k)+b-a$. By step 4.1 the arrow $f_i$ acts on the first factor precisely when $\varepsilon_i(x)\ge\varphi_i(y)$ and on the second factor when $\varepsilon_i(x)<\varphi_i(y)$, and an arrow is nonzero only when the selected factor lies in the domain of $f_i$; explicitly, the first-factor case is nonzero exactly for $j\equiv i$ (whence $\varepsilon_i(x)=0$) and $k\not\equiv i$ (whence $\varphi_i(y)=0$), and the second-factor case is nonzero exactly for $k\equiv i$ and $j\not\equiv i+1$. In the first case the new pair is $(z^{a'}b_{j'},z^bb_k)$ with $j'=j+1,a'=a$ if $j\ne e$, and with $j'=1,a'=a-1$ if $j=e$ (then $i=0$): for $j\ne e$ one has $k\ne j$, so $\chi(j'>k)=\chi(j>k)$, and for $j=e$ one has $k\le e-1$, so $\chi(j'>k)-\chi(j>k)=[1>k]-1=-1$ while $a'-a=-1$, giving $\Delta H=(b-a')-(b-a)+(-1)=1-1=0$. In the second case the new pair is $(z^ab_j,z^{b'}b_{k'})$ with $k'=k+1,b'=b$ if $k\ne e$, and $k'=1,b'=b-1$ if $k=e$ (then $i=0$): for $k\ne e$ one has $j\ne k+1$, so $\chi(j>k')=\chi(j>k)$, and for $k=e$ one has $j\ne1$, so $\chi(j>1)-\chi(j>e)=1-0=1$ while $b'-b=-1$, giving $\Delta H=1-1=0$. The defining rule is reversible by $e_i$, so every edge of the graph is covered by these two cases and $H_{\mathrm{op}}$ is constant on components. [step 4.1, given, algebra]

6.1 The energy function has the two loop-shift axioms, vanishes on extremal diagonals and has the stated positivity criterion. For $x=z^ab_j$ and $y=z^bb_k$: $H_{\mathrm{op}}(zx\otimes y)=\chi(j>k)+b-(a+1)=H_{\mathrm{op}}(x\otimes y)-1$ and $H_{\mathrm{op}}(x\otimes zy)=\chi(j>k)+(b+1)-a=H_{\mathrm{op}}(x\otimes y)+1$, which are the two axioms (E1) and (E2); $H_{\mathrm{op}}(z^ab_j\otimes z^ab_j)=0$ for every $j,a$, which includes every extremal element $z^ab_j$ because all $b_j$ have extremal weight $\lambda_j$ in $P_{\mathrm{cl}}$, so the normalization (E4) holds. For $m_1=j-ae$ and $m_2=k-be$: if $j>k$ then $m_1-m_2=(j-k)+(b-a)e$ and $H_{\mathrm{op}}=\chi+ b-a$; the case $b\ge a$ gives $H_{\mathrm{op}}\ge1$ and $m_1-m_2\ge1$; the case $b<a$ gives $H_{\mathrm{op}}\le0$ and $m_1-m_2\le(j-k)-e\le e-1-e<0$. If $j\le k$ then $H_{\mathrm{op}}=b-a$, and $m_1>m_2$ forces $(b-a)e>k-j\ge0$, so $b>a$ and $H_{\mathrm{op}}>0$; conversely $b>a$ gives $H_{\mathrm{op}}>0$ and $m_1-m_2\ge(k-j)+e>0$. Hence in all cases $H_{\mathrm{op}}(x\otimes y)>0\iff m_1>m_2$, and this criterion includes $e=2$. [step 3.1, step 5.1, given, algebra]

7.1 The ground sequence satisfies the two ground identities. Let $b^\circ_s=u_{M-s}$ and write $M-s=j-ae$ and $M-s-1=k-be$ with $j,k\in\{1,\dots,e\}$. If $j\ne1$ then $k=j-1$ and $b=a$; if $j=1$ then $k=e$ and $b=a+1$. In the first case $\chi(j>k)=1$ and $b-a=0$, in the second $\chi(1>e)=0$ and $b-a=1$; hence $H_{\mathrm{op}}(b^\circ_s\otimes b^\circ_{s+1})=1$ in both cases, for every $M$ and every $s\ge0$. For the $\varepsilon$-$\varphi$ identity: $b^\circ_s=u_{M-s}$ has $\varepsilon(b^\circ_s)=\Lambda^{\mathrm{cl}}_{j-1}$ and $b^\circ_{s+1}=u_{M-s-1}$ has $\varphi(b^\circ_{s+1})=\Lambda^{\mathrm{cl}}_k$, and $k\equiv M-s-1\equiv j-1$ in $\mathbb Z/e\mathbb Z$ with $k=j-1$ when $j\ne1$ and $k=e$ representing $0=j-1$ when $j=1$; hence $\varepsilon(b^\circ_s)=\varphi(b^\circ_{s+1})$. [step 3.1, step 6.1, given, algebra]

8.1 Conclusion. The derived module $V$ is a well-defined finite-dimensional $U_q(\mathfrak g)$-module of level $0$ with basis $v_j$ of classical weights $\Lambda_j-\Lambda_{j-1}$ and crystal operators $f_ib_j=b_{j+1}$ for $j\equiv i$, $e_ib_j=b_{j-1}$ for $j\equiv i+1$, with $\varepsilon(b_j)=\Lambda^{\mathrm{cl}}_{j-1}$, $\varphi(b_j)=\Lambda^{\mathrm{cl}}_{j}$, both of level $1$, by steps 1.1, 1.2 and 3.1; its affinization $V_{\mathrm{aff}}$ has basis $u_m=z^{a}v_j$ with $m=j-ae$, weights $\Lambda_j-\Lambda_{j-1}+a\delta$ and $K_d$ eigenvalue $q^a$, carries the integrable action $E_iu_m=\delta_{m\equiv i+1}u_{m-1}$, $F_iu_m=\delta_{m\equiv i}u_{m+1}$ by step 2.1, and has ordinary order $u_m>u_n\iff m>n$; the opposite-channel tensor rule and energy $H_{\mathrm{op}}(z^ab_j\otimes z^bb_k)=\chi(j>k)+b-a$ with $l(z^ab_j)=ae-j$ satisfy the two loop-shift axioms, constancy on components, the extremal normalization and the positivity criterion by steps 5.1 and 6.1; and the charge-$M$ ground sequence $b^\circ_s=u_{M-s}$ satisfies $\varepsilon(b^\circ_s)=\varphi(b^\circ_{s+1})$ and $H_{\mathrm{op}}(b^\circ_s\otimes b^\circ_{s+1})=1$ by step 7.1. All statements hold for every $e\ge2$. [step 2.1, step 3.1, step 5.1, step 6.1, step 7.1] ∎

## Remarks

- The residue convention is fixed once and for all: $v_j$ represents the residue
  $j\in\mathbb Z/e\mathbb Z$ with $j=e$ representing $0$, and $E_i$ **removes**
  residue $i$ from the weight (it lowers $j$ by $1$ when $j\equiv i+1$), while
  $F_i$ **adds** residue $i$. This matches the node convention
  $c-r$ of the partition Fock space below.

- The energy function is defined in the channel opposite to the fixed coproduct
  of the library: its tensor rule compares $\varepsilon_i$ of the first factor
  with $\varphi_i$ of the second, and it is $H_{\mathrm{op}}$ and not $H$ that
  the normal-ordering rule uses. Passing between the two channels is the content
  of [[lem-the-q-wedge-relations-coincide-with-the-type-a-energy-braiding-kernel]].

- After the ground state is fixed, every element of the ground sequence is
  determined; an overall loop shift changes the charge and the phase of
  $b^\circ_0$, so the sequence is not determined independently of that choice.

- The finite module $V$ is a level-$0$ $U_q'(\mathfrak g)$-module whose crystal
  $\varepsilon,\varphi$ take the level-$1$ values; the level refers to the target
  of $\varepsilon,\varphi$ and not to the weights of $V$. The vector
  representation itself never carries level-$1$ weights.
