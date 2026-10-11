---
id: lem-cyclotomic-schur-weight-gram-valuations-equal-signed-rim-hook-kostka-sums
kind: lemma
title: "Cyclotomic Schur weight Gram valuations equal signed rim-hook Kostka sums"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 24
deps: [lem-cyclotomic-schur-weight-gram-determinants-are-products-of-monic-semistandard-norms,
       lem-laurent-binomial-valuation-at-one-over-any-field,
       def-arbitrary-level-cyclotomic-hecke-murphy-cell-and-schur-modules,
       def-young-tableau-standard-tableau-and-shape,
       def-semistandard-tableau-and-kostka-number,
       def-determinant-of-a-square-matrix]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Lyle–Mathas, Blocks of cyclotomic Hecke algebras, math/0607451v4"
      url: "https://arxiv.org/pdf/math/0607451v4"
      locator: "Extracted text PDF pp. 5–6, Definition 2.5 and Theorem 2.6 actually read; original Jucys–Murphy full proof unread, complete independent local alternative supplied."
---

## Statement

Fix any field $F$, level $\ell\ge1$, $q_H\in F^\times$ of finite order
$e\ge2$, charges $Q_a=q_H^{c_a}$, $n\ge0$, and the Lyle–Mathas parameters
$\mathcal O=F[t,t^{-1}]_{(t-1)}$, $z=q_Ht$, $U_a=Q_at^{na}$, with
$V=\nu_{t-1}\circ(-)$. Then for every multipartition shape $\lambda$ and
actual multipartition Schur weight $\nu$,
$$V(\det G_{\lambda\nu})=\sum_\mu J_{\lambda\mu}K_{\mu\nu},$$
where $K_{\mu\nu}$ is the semistandard Kostka number of
[[def-semistandard-tableau-and-kostka-number]] and $J_{\lambda\mu}=0$ unless
$\lambda$ strictly dominates $\mu$; otherwise $J_{\lambda\mu}$ is the sum over
all pairs of equal-length rim hooks removed from $\lambda$ and from $\mu$ to
the same remainder of $(-1)^{\operatorname{leg}_\lambda+\operatorname{leg}_\mu}$
times $V\bigl(\mathrm{res}_{\mathcal O}(\operatorname{foot}_\lambda)-\mathrm{res}_{\mathcal O}(\operatorname{foot}_\mu)\bigr)$,
the modulus $\nu_{t-1}$ of the Laurent difference of the two foot residues.
Every such difference is nonzero in $F(t)$. The full signed marked-strip
commutator and its auxiliary coefficient identity are proved locally below;
arbitrary-composition coefficients are combinatorial only and never introduce
extra Schur modules.

## Facts & Assumptions

**Given:** The monic weight-Gram supplier [F1], the Laurent-binomial valuation
leaf [F2], the multipartition and Schur conventions [F3], the tableau
conventions [F4]–[F5], and the determinant convention [F6].

[F1] The exact monic product
$\det G_{\lambda\nu}=\prod_{T}\gamma_{t_T}/(C_{t_T}u_T)$ with the explicit
node-pair factors $C_+(A,B)=(zB-A)/(B-A)$ and
$R(A,B)=(zB-A)(B-zA)/(B-A)^2$
([[lem-cyclotomic-schur-weight-gram-determinants-are-products-of-monic-semistandard-norms]]).

[F2] For $k>0$, $V(z^k-1)=1$ in characteristic zero and $p^{v_p(k)}$ in
characteristic $p$, and $V$ is a valuation with $V(ab)=V(a)+V(b)$; the
valuation of a nonzero constant is $0$
([[lem-laurent-binomial-valuation-at-one-over-any-field]]).

[F3] Multipartitions, their dominance order, the flag condition and the
multipartition parameters $z,U_a$ over $\mathcal O$
([[def-arbitrary-level-cyclotomic-hecke-murphy-cell-and-schur-modules]]).

[F4] Standard tableaux, shapes, and contents
([[def-young-tableau-standard-tableau-and-shape]]).

[F5] Semistandard tableaux, weight, and the Kostka number
([[def-semistandard-tableau-and-kostka-number]]).

[F6] Determinants of square matrices over a commutative ring
([[def-determinant-of-a-square-matrix]]).

## Proof

**Proof technique:** direct.

**Given:** The data and suppliers of [F1]–[F6]; work throughout with the fixed final-rank-$n$ parameters $z=q_Ht$, $U_a=Q_at^{na}$ at every auxiliary rank.

1.1 Characters as finite symmetric polynomials. Fix $d\ge n$ row labels per type component with ordered variables $x_{(a,r)}$, put $Y_a=\{x_{(b,r)}:b\ge a\}$ with the inherited order, and for a shape $\lambda$ let $\operatorname{ch}_\lambda(x)=\sum_{T\in\operatorname{SStd}(\lambda)}x^{\operatorname{wt}(T)}$. The flag condition says that the physical component $a$ of a semistandard tableau is an ordinary semistandard tableau over the alphabet $Y_a$, and the components are chosen independently, so $\operatorname{ch}_\lambda(x)=\prod_a s_{\lambda^{(a)}}(Y_a)$ with $s_\rho(Y)=\det(h_{\rho_i-i+j}(Y))$. The determinant equals the ordinary semistandard generating polynomial: expand it as signed families of east/north lattice paths from $(-j,1)$ to $(\rho_i-i,m)$ with east steps at height $r$ weighted $y_r$, choose the first intersection in a fixed order and exchange the two tails, an involution that preserves the monomial weight and reverses the permutation sign, so all intersecting families cancel; a nonintersecting family forces the identity matching, and the surviving families are exactly the semistandard tableaux, sign $+1$. Hence the coefficient of $x^\nu$ in $\operatorname{ch}_\lambda$ is the Kostka number $K_{\lambda\nu}$; empty and short-row cases are included. [F3, F4, F5, algebra]

2.1 Beta determinants and rim-hook signs. Choose $N\ge n$, put $\beta_{a,i}=\lambda^{(a)}_i+N-i$ with zero parts appended, and for a nonnegative integer array $v$ define $\chi(v;x)=\prod_a\det\bigl(h_{v_{a,i}-N+j}(Y_a)\bigr)_{i,j}$. If two entries of one component of $v$ agree the determinant has equal rows and is zero; otherwise sorting that component into strictly decreasing order and writing $\rho_i=v'_i-N+i$ gives $\chi(v;x)=\varepsilon(v)\prod_a s_{\rho^{(a)}}(Y_a)$ with $\varepsilon$ the product of the row-sorting signs, so every coefficient is a signed Kostka multiplicity. A beta move lowering a bead from $v+L$ to an unoccupied $v$ is exactly the removal of a rim hook of length $L$: tracing the southeast boundary shows the strip between the two boundary steps has $L$ boxes, its leg is the number of occupied positions strictly between $v$ and $v+L$, its foot content is $v-N+1$, and the associated sorting sign is $(-1)^{\operatorname{leg}}$; the correspondence is a bijection by the reverse move. [F4, step 1.1, algebra]

3.1 The hook side as a complete finite alternating polynomial. Define $B_\lambda(x)$ as the finite alternating sum of step 2.1: for crosscomponent terms, over $a<b$, over beads $i,j$ and lengths $h\le\beta_{a,i}$, of $\chi(\beta-h e_{a,i}+h e_{b,j};x)V(U_az^{\beta_{a,i}-h}-U_bz^{\beta_{b,j}})$; and for same-component terms, over $a$, $i<j$ and $1\le h\le\beta_{a,i}-\beta_{a,j}-1$, of $\chi(\beta-he_{a,i}+he_{a,j};x)V(U_az^{\beta_{a,i}-h}-U_az^{\beta_{a,j}})$; terms whose $\chi$ is the zero polynomial are omitted before any valuation is evaluated. Then $B_\lambda(x)=\sum_{\mu:\lambda\triangleright\mu}J_{\lambda\mu}\operatorname{ch}_\mu(x)$: a crosscomponent move removing from the earlier component $a$ and adding to a later component $b>a$ produces a strictly dominated $\mu$ and occurs exactly once by the bead description; occupied targets give repeated rows and zero; sorting contributes $(-1)^{\text{removed leg}+\text{added leg}}$; and the prefactor $z^{-N+1}$ converts the beta difference to the difference of the deformed foot residues. In one component the two moved beads $i<j$ give a strict dominance decrease precisely for $1\le h<\beta_i-\beta_j$, the exchange case $h=\beta_i-\beta_j$ giving $\mu=\lambda$ and the outward case giving the reverse dominance; occupied intermediate positions again give zero rows, and the range exceeding a component's size gives a repeated or negative bead, hence a zero determinant. Thus no hook pair is lost or added, and the surviving summands are exactly the $J_{\lambda\mu}$ terms. [step 1.1, step 2.1, algebra]

3.2 Nonvanishing of every retained foot difference. For a removable rim hook of length $L$ from a partition of size $M+L$ with foot $(h,j)$, one has $-(M+L-1)\le j-h\le M$: every box left of the foot in its row survives, so $j-1\le M$, and $h\le M+L$ gives the lower bound. If $\lambda$ and $\mu$ remove equal-length hooks in distinct components $a\ne b$ to the same remainder with remainder sizes $M_a,M_b$, their foot contents satisfy $|\gamma_x-\gamma_y|\le M_a+M_b+L-1\le n-1$, so the exponent $n(a-b)+\gamma_x-\gamma_y$ is a nonzero integer; in the same component equal foot content and equal length reconstruct the same inverse hook addition, hence would force $\lambda=\mu$, which the strict-dominance terms exclude. Therefore every retained Laurent difference $U_az^u-U_bz^v$ is nonzero in $F(t)$: it is a unit times a nonzero Laurent monomial times $(z^{N}-1)$-type factors and, by [F2], its valuation is finite, being $0$ when the constant residues differ, $1$ in characteristic zero when they agree, and $p^{v_p(N)}$ in characteristic $p$ when they agree. [F2, step 2.1, algebra]

3.3 The same-component operator. In the same-component beta sum put $D=\beta_i-\beta_j$ and $k=D-h$, so the valuation is $f(k)=V(z^k-1)$ up to unit factors; swapping the two changed determinant rows shows $\chi(\beta-(D-k)e_i+(D-k)e_j;x)=-\chi(\beta-ke_i+ke_j;x)$. Hence the complete coefficient of $f(k)$ is $-\sum_{i<j:\beta_i-\beta_j>k}\chi(\beta-ke_i+ke_j;x)$, which is the strictly dominance-lowering part of $-p_kp_k^\perp$ on the abstract shape basis, where $p_k^\perp$ lowers an occupied bead by $k$ into an unoccupied nonnegative position with sign $(-1)^{\#\text{crossed beads}}$ and $p_k$ raises a bead by $k$ with the same sign rule; the bead-raising formula follows from the alternant identity $\det(y_r^{\beta_i})\sum_ry_r^k=\sum_i\det(y_r^{\beta_i+k\delta_{ij}})$ divided by the Vandermonde, and the removal map is its transpose. After one removal and one addition a non-diagonal lower-dominance result comes only from distinct beads $i<j$ with $0<k<\beta_i-\beta_j$, occupied intermediate positions giving zero repeated rows and the diagonal being removed by the strict projection; this proves the operator identification integrally, in every characteristic. [step 2.1, algebra]

4.1 The crosscomponent operator as exterior currents. On the $N$-fold exterior power of a space with basis $e_0,e_1,\dots$, represent a partition by the ordered wedge of its beta beads and let $E(p,q)$ insert $e_p$ after removing $e_q$, with exterior signs; it vanishes if $q$ is absent or $p$ is occupied, and its sign is the bead-sorting sign. Expanding $E=\text{creation}\cdot\text{contraction}$ gives $[E(p,q),E(r,s)]=\delta_{q,r}E(p,s)-\delta_{p,s}E(r,q)$. The crosscomponent matrix acting on column shape vectors is $J^{\mathrm{cross}}=\sum_{a<b}\sum_{h>0}\sum_{q\ge h,w\ge0}V(U_az^{q-h}-U_bz^w)E_a(q,q-h)E_b(w,w+h)$, a finite operator on each size-$n$ sector; the reverse hook pair has forward current $E_a(q-h,q)E_b(w+h,w)$, and transposing gives exactly this operator with the same signs and valuation. [step 3.1, step 3.2, step 3.3, algebra]

5.1 Horizontal strips and their conjugation. With $S e_q=e_{q+1}$ and $H(x)=(I-xS)^{-1}=\sum_{r\ge0}x^rS^r$, whose entry $H_{p,q}$ is $x^{p-q}$ for $p\ge q$ and $0$ otherwise, the matrix of $\wedge^NH(x)$ between $\beta_\mu$ and $\beta_\rho$ is $x^{|\mu|-|\rho|}\det(1_{\beta_{\mu,i}\ge\beta_{\rho,j}})$. Subtracting consecutive columns of the $0/1$ matrix makes its determinant $1$ exactly when $\beta_{\mu,i}\ge\beta_{\rho,i}>\beta_{\mu,i+1}$ for all $i$, i.e. $\mu_i\ge\rho_i\ge\mu_{i+1}$, the horizontal-strip criterion, and $0$ otherwise; so $\Gamma(x)=\wedge^NH(x)$ adds every horizontal strip once with weight $x^{\text{strip size}}$. For a type component $a$, $\Gamma_a(x)=\prod_{b\le a}\Gamma_b(x)$ adds a horizontal strip in every permitted physical component $b\le a$ and leaves the rest unchanged, so the successive $\Gamma_a$ from the empty shape enumerate exactly the flagged semistandard tableaux and give the branching matrix. Conjugation is explicit: since $H^{-1}=I-xS$ has column vector $e_p-xe_{p+1}$ and row covector $\sum_{r\le q}x^{q-r}e_r^*$, $\Gamma(x)^{-1}E(p,q)\Gamma(x)=\sum_{r=0}^qx^{q-r}\bigl(E(p,r)-xE(p+1,r)\bigr),$ and the two-current conjugation is the ordered product of two such sums. [step 4.1, algebra]

6.1 The marked-strip factor and the local commutator identity. For a permitted $\Gamma_a$ transition $\rho\to\lambda$ with new-node set $\eta$, put $r_x=U_{\operatorname{comp}(x)}z^{\operatorname{content}(x)}$ and $F^{(a)}_{\lambda\rho}=\prod_{x\in\eta}\prod_{\operatorname{comp}(x)<b\le a}(r_x-U_b)\prod_{\substack{x\in[\rho],\,y\in\eta\\x,y\ \text{same physical row}}}C_+(r_x,r_y)\prod_{\substack{x<y,\ x,y\in\eta\\\text{different physical rows}}}C_+(r_x,r_y)\prod_{\substack{x\in\eta,\,y\in[\rho]\\x<y}}R(r_x,r_y).$ Splitting the node pairs of [F1] into old/old, old/new and new/new pairs shows that along any semistandard chain the product of these factors is exactly $\gamma_{t_T}/(C_{t_T}u_T)$; older labels are smaller than the new label, same-row old/new pairs and same-label new/new pairs give $C_+$, a row-reading-earlier new node before an old node is a different-label inversion giving $R$, and all other pairs give nothing. Then $(J_n\Gamma_a^{(n,m)}-\Gamma_a^{(n,m)}J_m)_{\lambda\rho}=x^{n-m}V(F^{(a)}_{\lambda\rho})$ on permitted transitions and $0$ otherwise, on the reachable prefix sector. On support this is the exact row/column minor computation: the strip matrix is upper unitriangular, the row- and column-replacement determinants are $d_i^{\mathrm{row}}(v)=1_{p_i\le v<p_{i-1}}$ and $d_i^{\mathrm{col}}(v)=1_{q_{i+1}<v\le q_i}$ with $p_0=\infty$, the $J\Gamma$ term of index $j+1$ pairs with the $\Gamma J$ term of index $j$ sharing the bound $K_j=p_{b,j}-q_{b,j+1}-1$, and the elementary interval identity $\sum_{s=0}^{M-1}(\psi(A+s+K+1)-\psi(A+s+1))=\sum_{h=1}^{\min(M,K)}(\psi(A+M+K+1-h)-\psi(A+h))$ matches the two sides term by term, with $\psi(d)=V(U_az^d-U_b)$; the same-component telescoping is the analogue of this computation with the boundary factor. Off support, the defective strip step matrix has rank at most $N-2$, whence both sides vanish, or rank $N-1$ with one missing tail type $[P,P')$ and one duplicated type $(Q',Q]$; then the adjugate is $\varepsilon vu^{\mathsf T}$ with $u=e_i-e_{i+1}$, $v=e_r-e_{r-1}$ and one common sign, and replacing a row or column at position $x$ gives $D_{\mathrm{row}}(x)=\varepsilon u_l1_{P\le x<P'}$ and $D_{\mathrm{col}}(x)=\varepsilon v_l1_{Q'<x\le Q}$, so the a-only, b-only and both-defective cases cancel by the displayed interval translations; in the deficiency-two pattern with duplicate thresholds $r<s$ and missing intervals $I_1,I_2$ strictly between them, the row-side coefficient of $\phi(k)$ is $\varepsilon(A_{I_1}(k)B_{I_2}(k)-A_{I_2}(k)B_{I_1}(k))$ and the column-side coefficient is the same expression after the endpoint-reciprocity substitution $A_{I}=D^-$, $B_{I}=D^+$, so every formal coefficient cancels exactly, including adjacent missing thresholds and overlapping column groups, and higher deficiency kills both sides. [F1, F6, step 3.3, step 4.1, step 5.1, algebra]

7.1 Telescoping and the valuation formula. Multiply the $\Gamma$ matrices in increasing type-row-label order and telescope $J\Gamma-\Gamma J$ from $J_0=0$; by step 6.1 each commutator inserts exactly $V(F)$ at its strip position, so the $\lambda$-coordinate of the resulting identity is $\sum_{T}\gamma_{t_T}/(C_{t_T}u_T)=L_\lambda(x)$ on one side and $B_\lambda(x)$ on the other. All padded artificial symbols cancel before the surviving coefficients are evaluated, and every surviving coefficient corresponds to a valid current, hence by step 3.2 to a nonzero foot difference with finite valuation. Comparing with the exact monic product [F1] and the hook side of step 3.1, and taking the coefficient of $x^\nu$ at an actual multipartition weight $\nu$ (auxiliary compositions only index the same polynomials and never enter the Schur conclusion), gives $V(\det G_{\lambda\nu})=\sum_\mu J_{\lambda\mu}K_{\mu\nu};$ the empty case $n=0$ gives $0$, all ranks keep the fixed parameters $z=q_Ht$, $U_a=Q_at^{na}$, and arbitrary-composition coefficients are combinatorial only. [F1, step 3.1, step 3.2, step 6.1, algebra] ∎

## Remarks

The lemma converts the exact monic determinant product of the sibling into
the signed rim-hook Kostka sum by an explicit exterior-current commutator and
a finite marked-strip case analysis; the foot-exponent bound makes every
retained valuation finite over any field, including the charged finite-order
regime. No choice principle is used: all sums, determinants, strips and
currents are finite.
