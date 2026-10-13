---
id: ex-sr-boost-rotation-factorization-worked
kind: example
title: "Worked boost-rotation factorization of a composition of two perpendicular boosts"
status: published
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
domain: mathematics
dependency_level: 9
deps: [def-lorentz-boost, lem-boost-rotation-factorization,
       lem-boost-is-proper-orthochronous-with-inverse,
       lem-lorentz-map-preserves-metric-and-causal-structure,
       def-spatial-rotation-of-an-inertial-frame,
       def-inertial-frame-and-inertial-chart, def-euclidean-inner-product]
dependency_roles:
  def-lorentz-boost: mathematical-premise
  lem-boost-rotation-factorization: mathematical-premise
  lem-boost-is-proper-orthochronous-with-inverse: mathematical-premise
  lem-lorentz-map-preserves-metric-and-causal-structure: mathematical-premise
  def-spatial-rotation-of-an-inertial-frame: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook), Section 1.4 'The Lorentz transformation' pp. 30-32 including Examples 11-14, Sections 2.3-2.4 'Additional postulates'/'Other axiomatizations' pp. 46-49, and Section 8.3 'Boosts and rotations' pp. 174-176; signature (+---) converted to (-+++) with x^0 = ct restored"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 1 'Special relativity and flat spacetime' pp. 3-7 (PDF pp. 10-14), equations (1.3)-(1.21)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
---

## Example

Worked computation in a fixed inertial frame $(o;e_0,e_1,e_2,e_3)$ with
coordinates $(x^0,x^1,x^2,x^3)$ and
$\eta_0=\operatorname{diag}(-1,1,1,1)$. Take the two passive boosts
$B_1:=B((3/5,0,0))$ and $B_2:=B((0,3/5,0))$ ([[def-lorentz-boost]]), each
acting as the identity on the orthogonal complement of its own coordinate plane, and let $L:=B_1B_2$ be
their composition (matrix product in the frame's ordered basis). Then:

(i) $L=\begin{pmatrix}25/16&-3/4&-15/16&0\\ -15/16&5/4&9/16&0\\ -3/4&0&5/4&0\\ 0&0&0&1\end{pmatrix}$,
and direct multiplication gives $L^{T}\eta_0L=\eta_0$ and $\det L=1$; since
$B_1$ and $B_2$ are proper orthochronous Lorentz maps, $L$ is a proper
orthochronous Lorentz map.

(ii) $u:=Le_0$ has coordinates $(25/16,-15/16,-3/4,0)$, with
$\eta_0(u,u)=-625/256+225/256+9/16=-256/256=-1$ and $u^0=25/16>0$, so $u$ is a
future timelike unit vector. The parameter
$\boldsymbol\beta:=u_{\mathrm{vec}}/u^0$ of
[[lem-boost-rotation-factorization]] is
$\boldsymbol\beta=(-3/5,-12/25,0)$, with
$|\boldsymbol\beta|^2=369/625$ and
$\gamma(\boldsymbol\beta)=(1-369/625)^{-1/2}=25/16$, consistent with
$u^0=\gamma(\boldsymbol\beta)$.

(iii) $B(\boldsymbol\beta)L=\operatorname{diag}(1,R)$ with
$R=\begin{pmatrix}40/41&9/41&0\\ -9/41&40/41&0\\ 0&0&1\end{pmatrix}$, whose extension $\operatorname{diag}(1,R)$ is
a spatial rotation of the frame: $R^{T}R=I_3$ and $\det R=1$ (using
$40^2+9^2=41^2$). Hence
$L=B(-\boldsymbol\beta)\operatorname{diag}(1,R)=B(\frac35,\frac{12}{25},0)\operatorname{diag}(1,R)$
is the unique factorization of [[lem-boost-rotation-factorization]]; since
$R\neq I_3$, $L$ is not a passive boost.

(iv) The map $R$ fixes $e_3$ and acts on the $e_1$-$e_2$ plane as the rotation
with cosine parameter $40/41$ and sine parameter $9/41$ in the clockwise coordinate convention $C(c_*,s_*):=\begin{pmatrix}c_*&s_*\\-s_*&c_*\end{pmatrix}$, $c_*^2+s_*^2=1$ (Carroll, equation (1.17)); this rotation is nontrivial because
$9/41\neq0$. The two boosts therefore compose to a nonzero rotation followed by a boost of the $e_1$-$e_2$ plane; this composition of the explicit
pair $B_1,B_2$ has a rotation factor $R$, called its **Thomas-Wigner rotation**. No
gyroscope, precession or physical observation claim is attached here.

## Facts & Assumptions

**Given:** A fixed inertial frame $(o;e_0,e_1,e_2,e_3)$ with coordinates $x=(x^0,x^1,x^2,x^3)$, the boosts $B_1:=B((3/5,0,0))$, $B_2:=B((0,3/5,0))$ and their composition $L:=B_1B_2$.

[L1] For $0<|\boldsymbol\beta|<1$ the passive boost has, in the frame's ordered basis, the matrix $\begin{pmatrix}\gamma&-\gamma\boldsymbol\beta^{T}\\ -\gamma\boldsymbol\beta&I_3+\frac{\gamma-1}{|\boldsymbol\beta|^{2}}\boldsymbol\beta\boldsymbol\beta^{T}\end{pmatrix}$ with $\gamma=(1-|\boldsymbol\beta|^2)^{-1/2}$; for $\boldsymbol\beta=\mathbf0$ one defines $B(\mathbf0)=\operatorname{id}_V$, whose matrix is $I_4$ ([[def-lorentz-boost]]).

[L2] For every $|\boldsymbol\beta|<1$ the boost $B(\boldsymbol\beta)$ is a proper orthochronous Lorentz map with $B(\boldsymbol\beta)^{-1}=B(-\boldsymbol\beta)$; $B(\boldsymbol\beta)e_0=\gamma(e_0-\beta_1e_1-\beta_2e_2-\beta_3e_3)$; and if $u$ is a future timelike unit vector with coordinates $(u^0,u_{\mathrm{vec}})$, $u^0>0$, then $B(u_{\mathrm{vec}}/u^0)u=e_0$ ([[lem-boost-is-proper-orthochronous-with-inverse]]).

[L3] For a proper orthochronous Lorentz map $L$ with $u:=Le_0$, coordinates $(u^0,u_{\mathrm{vec}})$, the parameter $\boldsymbol\beta:=u_{\mathrm{vec}}/u^0$ satisfies $|\boldsymbol\beta|<1$; the map $\widehat R:=B(\boldsymbol\beta)L$ satisfies $\widehat Re_0=e_0$, $\widehat R(S)=S$ and $\widehat R|_S:S\to S$ is a determinant-one $\delta$-isometry and $\widehat R$ is a spatial rotation of the frame, so that $L=B(-\boldsymbol\beta)\widehat R$; the factorization with a spatial rotation $\widehat R$ and a parameter in the open unit ball is unique; and $L$ is a passive boost if and only if $\widehat R$ is the identity ([[lem-boost-rotation-factorization]]).

[L4] A spatial rotation of the frame is an extension of a linear map $R$ with $Re_0=e_0$, $R(S)\subseteq S$, $\delta(Rw,Rz)=\delta(w,z)$ on $S$ and $\det(R|_S)=+1$; via the $\delta$-orthonormal basis $(e_1,e_2,e_3)$ these are exactly the maps whose spatial matrix $A$ satisfies $A^{T}A=I_3$ and $\det A=+1$ ([[def-spatial-rotation-of-an-inertial-frame]]).

[L5] In the frame, $\eta(e_a,e_b)=\operatorname{diag}(-1,1,1,1)_{ab}$, $e_0\in C^+$, and the ordered basis is positively oriented; $\eta(x^0e_0+x^1e_1+x^2e_2+x^3e_3,x^0e_0+x^1e_1+x^2e_2+x^3e_3)=-(x^0)^2+(x^1)^2+(x^2)^2+(x^3)^2$ ([[def-inertial-frame-and-inertial-chart]]).

[L6] The Euclidean norm on $\mathbb R^3$ satisfies $|\boldsymbol\beta|^2=\beta_1^2+\beta_2^2+\beta_3^2$ ([[def-euclidean-inner-product]]).

[L7] Composition of proper orthochronous Lorentz maps is a proper orthochronous Lorentz map, and every Lorentz map satisfies $\eta(Lv,Lw)=\eta(v,w)$ and $\det L=\pm1$ ([[lem-lorentz-map-preserves-metric-and-causal-structure]]).



## Proof

**Proof technique:** direct.

1.1 By [L1] with $\boldsymbol\beta=(3/5,0,0)$ and $|\boldsymbol\beta|^2=9/25$, one has $\gamma=(16/25)^{-1/2}=5/4$ and $B_1=\begin{pmatrix}5/4&-3/4&0&0\\ -3/4&5/4&0&0\\ 0&0&1&0\\ 0&0&0&1\end{pmatrix}$; with $\boldsymbol\beta=(0,3/5,0)$ one has $B_2=\begin{pmatrix}5/4&0&-3/4&0\\ 0&1&0&0\\ -3/4&0&5/4&0\\ 0&0&0&1\end{pmatrix}$. Multiplying, $L^{a}{}_{c}=\sum_bB_1^{a}{}_{b}B_2^{b}{}_{c}$; row by row: the $(0,\cdot)$ entries are $(5/4)(5/4)=25/16$, $(5/4)\cdot0+(-3/4)\cdot1=-3/4$, $(5/4)(-3/4)+0=-15/16$ and $0$; the $(1,\cdot)$ entries are $(-3/4)(5/4)=-15/16$, $(-3/4)\cdot0+(5/4)\cdot1=5/4$, $(-3/4)(-3/4)=(9/16)$ and $0$; the $(2,\cdot)$ entries are $1\cdot(-3/4)=-3/4$, $0$, $1\cdot(5/4)=5/4$ and $0$; the $(3,\cdot)$ entries are $0,0,0,1$. This proves the displayed matrix of clause (i). [L1, algebra]

1.2 To verify $L^{T}\eta_0L=\eta_0$, the matrix $L^{T}\eta_0L$ is symmetric, and its upper triangle is computed from the columns of $L$: the $(0,0)$ entry is $-(25/16)^2+(15/16)^2+(3/4)^2=(-625+225+144)/256=-1$; the $(1,1)$ entry is $-(3/4)^2+(5/4)^2+0^2=(-9+25)/16=1$; the $(2,2)$ entry is $-(15/16)^2+(9/16)^2+(5/4)^2=(-225+81+400)/256=1$; the $(3,3)$ entry is $-0+0+0+1=1$; the $(0,1)$ entry is $-(25/16)(-3/4)+(-15/16)(5/4)+0=75/64-75/64=0$; the $(0,2)$ entry is $-(25/16)(-15/16)+(-15/16)(9/16)+(-3/4)(5/4)=(375-135-240)/256=0$; the $(1,2)$ entry is $-(-3/4)(-15/16)+(5/4)(9/16)+0=-45/64+45/64=0$; the remaining upper-triangle entries involving the fourth row or column are $0$ because the fourth row and column of $L$ are those of the identity. Hence $L^{T}\eta_0L=\eta_0$. Expanding $\det L$ along the fourth row gives $\det L=\det\begin{pmatrix}25/16&-3/4&-15/16\\ -15/16&5/4&9/16\\ -3/4&0&5/4\end{pmatrix}=\frac{25}{16}\cdot\frac{25}{16}+\frac34\left(-\frac{75}{64}+\frac{27}{64}\right)-\frac{15}{16}\cdot\frac{15}{16}=\frac{625-225}{256}-\frac{36}{64}=\frac{400-144}{256}=1$. [L5, algebra]

2.1 $B_1$ and $B_2$ are proper orthochronous Lorentz maps by [L2], so their composition $L$ is a proper orthochronous Lorentz map by [L7]; this, with the direct metric and determinant checks of step 1.2, is clause (i). The coordinates of $Le_0$ are the entries of the first column of $L$, namely $u=Le_0=(25/16,-15/16,-3/4,0)$. [L2, L7, step 1.2, algebra]

3.1 With $u$ as in step 2.1, [L5] gives $\eta_0(u,u)=-(25/16)^2+(15/16)^2+(3/4)^2=(-625+225+144)/256=-1$, and $u^0=25/16>0$; thus $u$ is timelike, and because $L$ is orthochronous by step 2.1 and $e_0\in C^+$ by [L5], $u=Le_0$ lies in $C^+$, so $u$ is a future timelike unit vector. Its parameter as in [L3] is $\boldsymbol\beta=u_{\mathrm{vec}}/u^0=\left((-15/16)\cdot(16/25),(-3/4)\cdot(16/25),0\right)=(-3/5,-12/25,0)$; by [L6], $|\boldsymbol\beta|^2=(9/25)+(144/625)=(225+144)/625=369/625<1$, and $\gamma(\boldsymbol\beta)=(1-369/625)^{-1/2}=(256/625)^{-1/2}=25/16=u^0$. [L3, L5, L6, step 2.1, algebra]

4.1 By [L1] with $\boldsymbol\beta=(-3/5,-12/25,0)$: $\gamma=25/16$, the coefficient is $\frac{\gamma-1}{|\boldsymbol\beta|^2}=\frac{9/16}{369/625}=\frac{9\cdot625}{16\cdot369}=\frac{625}{656}$, and the matrix of $B(\boldsymbol\beta)$ is $\begin{pmatrix}25/16&15/16&3/4&0\\ 15/16&881/656&45/164&0\\ 3/4&45/164&50/41&0\\ 0&0&0&1\end{pmatrix}$, because $B^0{}_1=-\gamma\beta_1=15/16$, $B^0{}_2=-\gamma\beta_2=3/4$, $B^1{}_1=1+\frac{625}{656}\cdot\frac{9}{25}=1+\frac{225}{656}=\frac{881}{656}$, $B^1{}_2=\frac{625}{656}\cdot\frac{3}{5}\cdot\frac{12}{25}=\frac{45}{164}$ and $B^2{}_2=1+\frac{625}{656}\cdot\frac{144}{625}=1+\frac{144}{656}=\frac{50}{41}$. [L1, step 3.1, algebra]

5.1 Multiply $M:=B(\boldsymbol\beta)L$ using steps 1.1 and 4.1. The first column is $B(\boldsymbol\beta)Le_0=B(\boldsymbol\beta)u=e_0$ by [L2] applied to the future timelike unit vector $u$ of step 3.1, so it is $(1,0,0,0)^{T}$. The first row entries are $M^0{}_j=(25/16)L^0{}_j+(15/16)L^1{}_j+(3/4)L^2{}_j$: for $j=0$, $(625-225-144)/256=1$; for $j=1$, $-75/64+75/64=0$; for $j=2$, $(-375+135+240)/256=0$; and for $j=3$, $0$. The fourth row and column are those of the identity because $L$ and $B(\boldsymbol\beta)$ fix $e_3$ and preserve the splitting. The remaining $2\times2$ block is $M^i{}_j=B^i{}_0L^0{}_j+B^i{}_1L^1{}_j+B^i{}_2L^2{}_j$ for $i,j\in\{1,2\}$: $M^1{}_1=-45/64+\frac{881}{656}\cdot\frac54=(-1845+4405)/2624=\frac{2560}{2624}=\frac{40}{41}$, $M^1{}_2=-225/256+\frac{881}{656}\cdot\frac{9}{16}+\frac{45}{164}\cdot\frac54=(-9225+7929+3600)/10496=\frac{2304}{10496}=\frac{9}{41}$, $M^2{}_1=-9/16+\frac{45}{164}\cdot\frac54=(-369+225)/656=-\frac{144}{656}=-\frac{9}{41}$, and $M^2{}_2=-45/64+\frac{45}{164}\cdot\frac{9}{16}+\frac{50}{41}\cdot\frac54=(-1845+405+4000)/2624=\frac{2560}{2624}=\frac{40}{41}$. Hence $B(\boldsymbol\beta)L=\operatorname{diag}(1,R)$ with $R$ as displayed. [L1, L2, step 1.1, step 4.1, algebra]

6.1 For the displayed $R$ one has $R^{T}R=I_3$: the $(1,1)$ and $(2,2)$ entries are $(40/41)^2+(9/41)^2=(1600+81)/1681=1$ and the $(1,2)$ entry is $(40/41)(9/41)+(-9/41)(40/41)=0$, with the third row and column those of the identity. Moreover $\det R=\frac{40}{41}\cdot\frac{40}{41}-\frac{9}{41}\cdot\left(-\frac{9}{41}\right)=\frac{1681}{1681}=1$ (using $40^2+9^2=1681=41^2$). Since $R$ acts on $S=\operatorname{span}(e_1,e_2,e_3)$ in the $\delta$-orthonormal basis $(e_1,e_2,e_3)$ and satisfies $R^{T}R=I_3$, $\det R=1$, the extension $\operatorname{diag}(1,R)$ is a spatial rotation of the frame by [L4]. [L4, step 5.1, algebra]

6.2 By [L3] applied to the proper orthochronous Lorentz map $L$ with $u=Le_0$ and $\boldsymbol\beta=u_{\mathrm{vec}}/u^0$ from step 3.1, the factorization $L=B(-\boldsymbol\beta)\widehat R$ with $\widehat R$ the extension of a spatial rotation is the unique such factorization, and by step 5.1 the map $\widehat R$ equals $\operatorname{diag}(1,R)$; hence $L=B\left(\frac35,\frac{12}{25},0\right)\operatorname{diag}(1,R)$, since $-\boldsymbol\beta=(3/5,12/25,0)$. Since $R\neq I_3$ (the entry $9/41\neq0$), [L3] clause (v) gives that $L$ is not a passive boost. [L3, step 3.1, step 5.1, algebra]

7.1 Finally, $R$ fixes $e_3$ and multiplies the coordinate pair $(e_1,e_2)$ by the matrix $\begin{pmatrix}40/41&9/41\\ -9/41&40/41\end{pmatrix}$, whose entries have squares summing to $(1600+81)/1681=1$; it is therefore $C(40/41,9/41)$ in the clockwise coordinate convention defined in (iv), and it is nontrivial because $9/41\neq0$. This is clause (iv): $L$ is this nonzero rotation followed by the boost (the rightmost factor acts first) of the $e_1$-$e_2$ plane. [step 5.1, step 6.1, algebra]

8.1 Steps 1.1, 1.2 and 2.1 prove clause (i), steps 3.1, 4.1 and 5.1 prove clause (ii), steps 5.1, 6.1 and 6.2 prove clause (iii), and step 7.1 proves clause (iv); every assertion is a finite rational computation from the displayed matrices. [step 1.1, step 1.2, step 2.1, step 3.1, step 4.1, step 5.1, step 6.1, step 6.2, step 7.1] ∎
