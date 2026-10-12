---
id: lem-minimal-parabolic-polynomial-flag-model-realizes-the-graded-diagram-relations
kind: lemma
title: "The minimal-parabolic polynomial flag model realizes the graded diagram relations"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 7
deps: [def-minimal-parabolic-klr-diagram-proof-category,
       def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum,
       def-klr-grading-and-diagrammatic-composition,
       def-divided-power-klr-idempotents-and-projectives,
       thm-klr-pbw-basis-theorem,
       lem-cyclotomic-polynomial-flag-comparison-has-the-prescribed-second-mate-inverse]
justified_by: []
aliases: []
proof_strategy: constructive
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Ben Webster, Knot invariants and higher representation theory I, arXiv:1001.2020v9"
      url: "https://arxiv.org/pdf/1001.2020"
      locator: "Sections 1.1-1.3, PDF pages 5-19: Definition 1.1, Definition 1.2, Theorem 1.4 (polynomial model), Figures 1-4 and the whole proof of Proposition 1.7 pages 17-19."
    - title: "Raphael Rouquier, 2-Kac-Moody Algebras, arXiv:0812.5023v3"
      url: "https://arxiv.org/pdf/0812.5023"
      locator: "Sections 3.2.1-3.2.3, PDF pages 22-27: the downward KLR presentation and PBW; Section 5.2, Lemma 5.13 and Proposition 5.15, PDF pages 54-55: the explicit rank-one unit and polynomial model."
---

## Statement

Fix a color $i$ and the formal proof category of
[[def-minimal-parabolic-klr-diagram-proof-category]], on a symmetrizable real
Cartan datum with finite index set and arbitrary field $k$. Use the native KLR
parameters of
[[def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum]], degrees of
[[def-klr-grading-and-diagrammatic-composition]], the PBW convention of
[[thm-klr-pbw-basis-theorem]], and the nil-Hecke matrix/idempotent convention
of [[def-divided-power-klr-idempotents-and-projectives]]. Then the polynomial
flag construction described below realizes all the defining graded diagram
relations of that formal category, including its rank-one cross/cap,
bubble-slide/inversion and mixed-color cup/cap relations; it asserts a
representation of the formal proof category, not faithfulness or a cyclotomic
quotient identification.

**The model.** Choose a color order with $i$ last. For spectator alphabets
$Y_j$ of sizes $m_j$ ($j\ne i$) put $C=\bigotimes_{j\ne i}k[Y_j]^{S_{m_j}}$,
$r=m_i$, $A_{ij}=-a_{ij}$,
$t_{ij}=[u^{A_{ij}}]Q_{ij}(u,v)\in k^\times$,
$q_{ij}=Q_{ij}/t_{ij}$, and choose a monic framing polynomial $a_i(u)$ of
degree $\lambda_i\geq0$; initially its coefficients have their universal homogeneous
degrees, so all formulas are graded, and the standard specialization is
$a_i(u)=u^{\lambda_i}$. Set
$$p_m(u)=a_i(u)\prod_{j\ne i}\prod_{y\in Y_j}q_{ij}(u,y),\qquad N=\lambda_i+\sum_{j\ne i}A_{ij}m_j,\qquad h_m=N-2r,$$
and $c_r(u)=u^r-e_1u^{r-1}+\cdots+(-1)^re_r$. The vertex ring $L_m$ is the
monic factor ring for $p_m=c_rb_{N-r}$, equivalently $C[e_1,\ldots,e_r]$ modulo
all coefficients beyond degree $N-r$ of the monic expansion $p_m/c_r$; it is
finite free over $C$ of rank $\binom Nr$ and is zero for $r>N$. Its $i$ flag is
$B_m=L_m[z]/b_{N-r}(z)$, free of rank $N-r$ over $L_m$ and rank $r+1$ over
$L_{m+i}$, with the target root alphabet obtained by adjoining $z$. The
underlying spectator flag is $C_m^j=L_m[y]$; its target action appends $y$ to
$Y_j$ and replaces $p_m$ by $p_mq_{ij}(u,y)$.

**The shifts and generators.** Every downward generator carries the ordered
shift $s_j(m)=-2d_jm_j+\sum_{\ell>j}(-b_{j\ell})m_\ell$. Thus
$G_i=F_i^{\mathrm{basic}}$ is the $B_m\{-2d_ir\}$ tensor functor; $G_j$ for
$j\ne i$ is the $C_m^j\{s_j(m)\}$ tensor functor. The basic reversed $i$ flag
is $E_i^{\mathrm{basic}}=B_m\otimes_{L_{m+i}}-$ without a shift, whereas the
formal upward generator at INPUT vertex $m$ is
$H_i(m)=E_i^{\mathrm{basic}}(m)\{-d_i(1+h_m)\}$. These are distinct
conventions. The basic flags have degree-zero
$F_i^{\mathrm{basic}}\dashv E_i^{\mathrm{basic}}$ and
$E_i^{\mathrm{basic}}\{t_i(m)\}\dashv F_i^{\mathrm{basic}}$, where
$t_i(m)=-2d_i(h_m-1)$. At vertex $m$ the formal first unit and second cap have
degree $d_i(1-h_m)$, and the formal first cap and second unit have degree
$d_i(1+h_m)$.

**The four maps and the Casimir.** All four maps are the explicit dual-basis
maps of the two monic coefficient forms on $B_m$: $\tau_{\mathrm{old}}:B_m\to
L_m$ extracts $z^{N-r-1}$ and has degree $-2d_i(N-r-1)$;
$\tau_{\mathrm{new}}:B_m\to L_{m+i}$ extracts $z^r$ and has degree $-2d_ir$.
The first cap is $b_1\otimes b_2\mapsto\tau_{\mathrm{new}}(b_1b_2)$ and the
first cup is its dual-power-basis Casimir; the second cap and cup use
$\tau_{\mathrm{old}}$. For a monic polynomial $f$ their Casimir is the
polynomial kernel $K_f(X,Y)=(f(X)-f(Y))/(X-Y)$ in the two-root quotient.

**Crossings, colors and bubbles.** Source crossings are
$\kappa=-\tau_{\mathrm{native}}$ for EVERY color pair. Source equal-color
operators are $(s-1)/(X-Y)$; source unequal operators are the switch/quotient
in the increasing-color direction and switch times $Q$ in the reverse
direction. Thus native operators are their negatives, and both actual crossing
degrees are $-b_{jk}$ with the ordered shifts above. On the $i,j$ pair the
successive underlying rings are
$D_1=L_m[y,z]/(b(z)q_{ij}(z,y))$ and $D_0=L_m[y,z]/b(z)$, with source maps
$\pi:D_1\to D_0$ and $f\mapsto Q_{ij}(z,y)f:D_0\to D_1$; the actual
handed pair $a:G_jH_i\to H_iG_j$, $b:H_iG_j\to G_jH_i$ of the
formal Definition satisfies $ba=t_{ij}1_{G_jH_i}$ and
$ab=t_{ij}1_{H_iG_j}$. Thus $a$ and $t_{ij}^{-1}b$ are mutually inverse.
Native minus signs negate both source mates and preserve both cancellation
scalars. Full comparison with a separately distinguished $j$-adjunction
belongs to coherent assembly, rather than to this category with only $H_i$. The basic isomorphism $E_iG_j\cong(G_jE_i)\{-b_{ij}\}$ holds,
and the normalized formal $H_iG_j\cong G_jH_i$ is unshifted.

**Realized equations.** The canonical rank-one $\rho$ and its prescribed second-mate and finite
coefficient-convolution inverse of
[[lem-cyclotomic-polynomial-flag-comparison-has-the-prescribed-second-mate-inverse]], the
same-color cross/cap equations, the bubble series
$\Phi_i(u)=p_m(u)/c_r(u)^2$ and its reciprocal, and the finite-coefficient
bubble-slide identities are realized by the stated polynomial maps. In
particular the normalized positive $h$ identity columns have degrees
$d_i(1-h+2k)$ for $0\le k<h$, and the negative branch uses the inverse
crossing plus the dot/cap rows. All polynomial pairings and relations persist
after arbitrary monic coefficient specialization as UNGRADED identities; such
a specialization does not assert nilpotence, a homogeneous trace degree, or a
highest-weight $K_0$ claim. No geometry, characteristic restriction, or
one-dimensional-Hom hypothesis is imposed.

## Facts & Assumptions

**Given:** The formal proof category of [[def-minimal-parabolic-klr-diagram-proof-category]]; the native KLR datum $Q$ and its degrees; a fixed color $i$; the monic framing polynomial $a_i$ and the spectator alphabets $Y_j$.

[F1] The native relations (1)-(7) of [[def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum]], with $Q_{ii}=0$, the equal-color mixed relations $\tau x-y\tau=e$, $\tau y-x\tau=-e$ and the correction $\tau f=(s f)\tau+(\partial f)e$ in the sign convention $\partial f=(f-sf)/(x-y)$ ([[def-klr-grading-and-diagrammatic-composition]]).

[F2] The nil-Hecke algebra of rank $r$ has PBW basis $\{x_1^{a_1}\cdots x_r^{a_r}\tau_w\}$, the Artin monomials $x_1^{a_1}\cdots x_r^{a_r}$, $0\le a_k\le r-k$, form a $k$-basis of the coinvariants, the staircase pairing is perfect with unit anti-diagonal over every coefficient ring, and the divided-power idempotents of [[def-divided-power-klr-idempotents-and-projectives]] provide the matrix units; in particular $\mathrm{NH}_r$ is the full matrix algebra over the symmetric polynomial ring on the Artin module.

[F3] The PBW basis and integrality conventions of [[thm-klr-pbw-basis-theorem]]: monic division by a monic polynomial of degree $q$ produces an Artin basis of the quotient, with no division by factorials and no characteristic restriction.


[F4] The actual monic flag comparison, its prescribed second-adjunction mate $S$, both finite $A/\mathsf H$ convolution inverse systems, typed curls and cancellations, normalized matrix-Morita cap transport and distinguished-$i$ mixed mate pair are proved independently in [[lem-cyclotomic-polynomial-flag-comparison-has-the-prescribed-second-mate-inverse]]. The supplier uses only the downward nil-Hecke matrix algebra, actual coefficient cups/caps and integral interpolation; it does not assume this realization.

## Proof

**Proof technique:** constructive: build the monic splitting rings and their Artin bases, define the flag modules and the four coefficient maps, identify the actual rank-one comparison and prescribed mate inverse by interpolation and monic division, and verify each family of formal relations by the displayed polynomial identities.

1.1 Monic splitting and the vertex ring. Over universal graded $S=k[p_1,\ldots,p_N]$, successive monic division gives the full splitting Artin basis $X_1^{a_1}\cdots X_N^{a_N}$ with $0\leq a_k\leq N-k$ and perfect coefficient pairing. The two-block staircase and longest-divided-difference retraction of [F4] shows the block-invariant factor ring $L_r$ is finite graded projective over $S$. Lift a homogeneous basis modulo $S_+$; graded Nakayama gives a finite graded free-module surjection onto $L_r$. A projective splitting and the least-degree argument kill its kernel, whose $S_+$ fiber is zero, so $L_r$ is graded free. The full splitting algebra has Artin ranks $N!$ over $S$ and $r!(N-r)!$ over $L_r$, hence the free rank is $\binom Nr$. Base change to the coefficients of $p_m$ proves the claimed finite free $C$-module in every characteristic. For $r>N$ the excessive coefficient ideal contains $1$, since a monic degree-$r$ factor cannot divide degree-$N$ $p_m$, so $L_m=0$. [F2, F3, F4, construct, algebra]

2.1 The vertex ring as a matrix quotient. Representing $\mathrm{NH}_r$ as the matrix algebra on its Artin module (step 1.1, [F2]) shows that the two-sided ideal generated by a monic $p(X_1)$ is the matrix ideal of the coefficients of the remainder of $p$ modulo $c_r$, and monic division makes these coefficients a unit triangular change from the consecutive relations; hence $\mathrm{NH}_r/(p(X_1))$ is the matrix algebra over the monic factor ring $L_m$ of the Statement. The same computation shows the $i$-flag $B_m$ is free of rank $N-r$ over $L_m$ and rank $r+1$ over $L_{m+i}$, giving the two root extensions of the model. [step 1.1, F2, F3, algebra]

3.1 Coefficient maps, triangles and normalized transport. The kernel $K_f(X,Y)=(f(X)-f(Y))/(X-Y)$ is the trace-dual power-basis Casimir: coefficient extraction gives $\tau_X(X^aK_f)=Y^a$ in the root quotient. Its contractions prove both adjunction triangles, and symmetry gives cyclic dots. The actual nil-Hecke matrix corners identify induction with $B_m$ and its dual with $g\mapsto[v\mapsto\tau_{\mathrm{new}}(gv)]$ [F4], so evaluation and coevaluation are the stated first cap and cup. The same supplier proves the ordered-residue relative cap normalized by $(-1)^{N+1}=(-1)^{h_m+1}$ transports exactly to $\tau_{\mathrm{old}}$, and its dual unit to that Casimir. This fixes actual second maps, not merely dimensions or trace values. The coefficient forms have degrees $-2d_ir$ and $-2d_i(N-r-1)$; after the basic induction shift their adjunction degrees are $0$ and $-2d_i(h_m-1)$. Normalizing $H_i$ at its input gives first unit/second cap degree $d_i(1-h_m)$ and first cap/second unit degree $d_i(1+h_m)$. [step 2.1, F4, algebra]

4.1 The actual canonical comparison and prescribed inverse. Take the typed native mates $T:G_iH_i\to H_iG_i$ and $S:H_iG_i\to G_iH_i$ built from the actual maps of step 3.1 and the downward crossing and its twofold mate. On equal-endpoint generic root paths their matrices are $(-T)_{z,w}=c(z)/[c'(w)(z-w)]$ and $S_{w,z}=b(w)/[b'(z)(w-z)]$, with $w$ selected and $z$ complementary; swap paths have $T=-1,S=1$ [F4]. Thus they are the two polynomial interpolation maps. At $h_m\geq0$, divide the degree-$<N-r$ interpolant by $c$: its remainder has degree $<r$, and its quotient degree $<h_m$. Expanding $b/c=u^{h_m}A(u^{-1})$ identifies quotient coefficients with the prescribed $R_k=\sum_{a+j=h_m-1-k}A_j\varepsilon'x^a$, with columns $C_k=x^k\eta$. The supplier proves all five equations $-ST=1$, $RT=0$, $SC=0$, $RC=1$, $-TS+CR=1$. At $h_m<0$, division of the degree-$<r$ interpolant by $b$ gives $R^-_k=\sum_{a+j=-h_m-1-k}\mathsf H_j\varepsilon x^a$, $C^-_k=x^k\eta'$ and all five equations $-TS=1$, $TC^-=0$, $R^-S=0$, $R^-C^-=1$, $-ST+C^-R^-=1$. At zero weight both identity blocks are empty. These are identities on actual finite projective tensor bimodules, descended integrally before specialization, with degree-zero components after the prescribed shifts. [step 2.1, step 3.1, F4, algebra]

5.1 Typed curls, cancellation and bubble coefficients. The downward crossing $\kappa=(s-1)/(X-Y)$ has square zero and obeys the braid and mixed dot equations by expansion; the symmetric Casimir gives dot mates. The actual curls of [F4] are $L_\mu=\sum_{a+j=-h_m}x^a\mathsf H_j$ on $H_i$ at input $\mu$, and $R_\mu=-\sum_{a+j=h_m}x^aA_j$ at input $\mu-\alpha_i$, of degrees $-2d_ih_m$ and $2d_ih_m$. Mating the completeness equations of step 4.1 gives the cancellation corrections. Positively, $a+j+c=h_m-1$ and the clockwise bubble has literal dots $b=-h_m-1+j$; negatively, $a+j+c=-h_m-1$ and counterclockwise dots are $b=h_m-1+j$. Both give $a+b+c=-2$, with the prescribed native signs; the single-curl sums give $a+b=-1$. Actual pairings determine the bubble coefficients: $\varepsilon'x^n\eta=\sum_z c(z)z^n/b'(z)$ is the $u^{-1}$ coefficient of $u^nc/b$, namely $\mathsf H_{n-h_m+1}$, whereas $\varepsilon x^n\eta'=\sum_w b(w)w^n/c'(w)=A_{n+h_m+1}$. Here $A(t)=t^{h_m}p_m(t^{-1})/c_r(t^{-1})^2$ and $\mathsf H=A^{-1}$; negative indices vanish and coefficient zero is $1$. Integral descent proves these identities without distinct-root hypotheses after specialization. Thus $\Phi_i=p_m/c_r^2$ has the prescribed normalized series and reciprocal. Appending $i$ root $z$ divides $A$ by $(1-zt)^2$, and appending spectator root $y$ multiplies it by $q_{ij}^{\mathrm{rev}}(y,t)$; reciprocal coefficients give the opposite slides. All recursions are finite at each coefficient. At a monic vacuum, closing $a_i(x)x^{\ell-1}=0$ gives $\mathsf H(t)a_i^{\mathrm{rev}}(t)=1$. [step 3.1, step 4.1, F4, algebra]

6.1 Downward $Q$-relations and exact word grading. Give every flag the ordered shift $s_j(m)$ of the Statement. For $j<k$ the increasing word $(j,k)$ maps to the word $(k,j)$ by a quotient/switch of underlying degree $0$, with target-minus-source unit shift $-b_{jk}$; the reverse operator has underlying degree $-2b_{jk}$ and unit-shift $+b_{jk}$, so both have actual degree $-b_{jk}$, and same-color divided differences have degree $-2d_j$. Native operators are the negatives of the source operators, so their degrees and two-crossing composites are unchanged. The ordinary polynomial operators satisfy the idempotent, dot, far-commutation and quadratic $Q$-relations directly; expanding a three-strand composition gives zero difference for distinct outer colors and the divided difference of $Q$ for equal outer colors, and the global substitution $\kappa=-\tau$ changes all cubic signs to the native numerator. The quotient relations descend: on an $i,j$ pair $D_1$ has $bq=0$ and $D_0$ has $b=0$, and $Qb=t_{ij}bq$ makes multiplication by $Q$ well defined while the other crossing is the literal quotient. [step 2.1, step 3.1, step 5.1, F1, algebra]

7.1 The typed partial-color mixed pair. At input $\mu$ put $\xi=\mu+\alpha_i-\alpha_j$, $X=G_jH_i$, $Y=H_iG_j$. The native maps are $a=(H_iG_j\varepsilon_\mu)(H_i\tau^{G_iG_j}H_i)(\eta_\xi G_jH_i):X\to Y$ and $b=(\varepsilon'_\xi G_jH_i)(H_i\tau^{G_jG_i}H_i)(H_iG_j\eta'_\mu):Y\to X$. Their middle words are $H_iG_iG_jH_i$ and $H_iG_jG_iH_i$; final counits consume respectively the rightmost $G_iH_i$ and leftmost $H_iG_i$. For $p'=pq_{ij}$, [F4] proves the actual normalized cap equation $\pi\widehat\varepsilon^{p'}(Q_{ij}\operatorname{lift}(z))=t_{ij}\widehat\varepsilon^p(z)$ with lift independence on every matrix-corner element, and its dual cup equation. The ordered-residue sign $(-1)^{N+1}$ transports precisely to $\tau_{\mathrm{old}}$ of step 3.1. Substituting the quotient/switch and multiplication-by-$Q$ in the two mate contractions therefore proves $ba=t_{ij}1_X$ and $ab=t_{ij}1_Y$ for this same pair. Source crossings negate both maps and preserve the products. They commute with the $j$ dot and have degree $d_i(1+h_m)+d_i(-1-h_m+a_{ij})-b_{ij}=0$, giving the unshifted mixed isomorphism. The separately distinguished-$j$ model has its own scalar $t_{ji}$; a full two-color adjunction comparison is not a relation of the category containing only $H_i$. [step 2.1, step 3.1, step 5.1, step 6.1, F4, algebra]

8.1 Conclusion. Steps 3.1-7.1 verify every defining relation of [[def-minimal-parabolic-klr-diagram-proof-category]] on the explicit flag modules: the generators and their degrees, both adjunction triangles, the rank-one matrices in both branches with their inverses, the bubble series and slides, the cross-and-cap equations, the mixed isomorphism with its scalars, and the downward $Q$-relations. Monic extensions, their Casimirs, the finite rank-one inverses and the coefficient identities survive arbitrary monic specialization as ungraded maps, and the construction is choice-free. This proves only the formal MODEL relations; faithfulness and the cyclotomic word-corner transfer belong to separate suppliers. [step 3.1, step 4.1, step 5.1, step 6.1, step 7.1, discharge-construct: explicit flag modules] ∎
