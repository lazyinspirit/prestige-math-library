---
id: lem-minimal-parabolic-polynomial-flag-model-realizes-the-graded-diagram-relations
kind: lemma
title: "The minimal-parabolic polynomial flag model realizes the graded diagram relations"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 6
deps: [def-minimal-parabolic-klr-diagram-proof-category,
       def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum,
       def-klr-grading-and-diagrammatic-composition,
       def-divided-power-klr-idempotents-and-projectives,
       thm-klr-pbw-basis-theorem]
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
degree $\lambda_i$; initially its coefficients have their universal homogeneous
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
$\pi:D_1\to D_0$ and $f\mapsto Q_{ij}(z,y)f:D_0\to D_1$; their normalized
opposite-sideways composites have the scalars $t_{ij}$ and $t_{ji}$, and in the
NE/SW-$i$, NW/SE-$j$ source orientation the double-mate ratio is
$t_{ji}/t_{ij}$. Native minus signs leave the two-crossing scalars and the
ratio unchanged. The basic isomorphism $E_iG_j\cong(G_jE_i)\{-b_{ij}\}$ holds,
and the normalized formal $H_iG_j\cong G_jH_i$ is unshifted.

**Realized equations.** The canonical rank-one $\rho$ and its inverse, the
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

## Proof

**Proof technique:** constructive: build the monic splitting rings and their Artin bases, define the flag modules and the four coefficient maps, compute the rank-one intertwiner and its inverse by monic division, and verify each family of formal relations by the displayed polynomial identities.

1.1 Monic splitting and the vertex ring. Over the universal coefficient ring $S=k[c_1,\dots,c_N]$, adjoin roots of the monic framing polynomial one at a time and divide by the root: at step $s$ the residual polynomial is monic of degree $N-s+1$, so ordinary monic division preserves monicity. This produces the Artin basis $X_1^{a_1}\cdots X_N^{a_N}$, $0\le a_k\le N-k$, of the full root algebra; the pairing that reads the top coefficient has Gram matrix zero below the anti-diagonal and unit anti-diagonal in reversed order, hence is perfect over $S$, with no factorial division and no characteristic hypothesis. Block decomposition into the $r$ roots of $c_r$ and the $N-r$ roots of $b_{N-r}$ makes $L_m$ finite free over $C$ of rank $\binom Nr$, and $L_m=0$ for $r>N$ because then $p_m$ has degree below $r$. [F1, F2, F3, construct]

2.1 The vertex ring as a matrix quotient. Representing $\mathrm{NH}_r$ as the matrix algebra on its Artin module (step 1.1, [F2]) shows that the two-sided ideal generated by a monic $p(X_1)$ is the matrix ideal of the coefficients of the remainder of $p$ modulo $c_r$, and monic division makes these coefficients a unit triangular change from the consecutive relations; hence $\mathrm{NH}_r/(p(X_1))$ is the matrix algebra over the monic factor ring $L_m$ of the Statement. The same computation shows the $i$-flag $B_m$ is free of rank $N-r$ over $L_m$ and rank $r+1$ over $L_{m+i}$, giving the two root extensions of the model. [step 1.1, F2, F3, algebra]

3.1 The four coefficient maps and their triangles. For a monic $f$, the polynomial kernel $K_f(X,Y)=(f(X)-f(Y))/(X-Y)$ is defined before imposing $f(X)=f(Y)=0$ and satisfies $(X-Y)K_f=f(X)-f(Y)$ and $\tau_XK_f=1$; therefore $\tau_X(X^aK_f)=Y^a$ for every $a$, which identifies $K_f$ with the dual-power-basis Casimir of the two monic coefficient forms. The two Casimirs of $b_{N-r}$ and $c_{r+1}$ give the four displayed cups and caps; their contractions are the identities $\sum_av_a\tau(z^ab)=b$ and $\sum_a\tau(bv_a)z^a=b$ for dual Artin bases, and substituting them into the tensor composites proves both triangles of each of the two adjunctions. Degrees: $\tau_{\mathrm{old}}$ extracts $z^{N-r-1}$ and has degree $-2d_i(N-r-1)$; $\tau_{\mathrm{new}}$ extracts $z^r$ and has degree $-2d_ir$; the first maps have degree $0$ after the $B\{-2d_ir\}$ shift; the second cap has degree $-2d_i(N-r-1)+2d_ir=-2d_i(h_m-1)$, with inverse degree on its unit. Restoring the normalized $H_i$ at its input weight produces exactly the four formal degrees of [[def-minimal-parabolic-klr-diagram-proof-category]]. [step 2.1, algebra]

4.1 The rank-one intertwiner and its inverse. Splitting off one extra $i$-strand by the two-coset PBW decomposition [F3] gives the transfer term $\kappa_rb$ and the new-dot algebra as its complement; the rank-one intertwiner $g=(u-X)-(u-X)^2\kappa$ is verified to satisfy its quadratic and dot-commutation identities by expanding $\kappa X_{r+1}-X_r\kappa=1$ and $\kappa^2=0$. Multiplying these intertwiners along the extra strand and the other transfer by $p(X_1)$, then projecting to the polynomial complement, yields a coefficient map $A$ with $A(u^kS_r)=(-1)^ru^kp(u)$ where $S_r(u)=\prod_{a\le r}(u-X_a)^2$, and the same mixed relation gives $\phi_{k+1}(u)=u\phi_k+E(\psi_k)$; hence $A(u^k)=(-1)^r\operatorname{quo}_{S_r}(u^kp)$ by uniqueness of monic division, with no cyclotomic commutator theorem used as a supplier. If $h_m\ge0$ the quotients have distinct leading degrees $h_m+k$ and unit leading coefficients $(-1)^r$, so $\rho$ is the displayed (transfer, dot-power unit) map from $F_iE_i\{-2d_i\}$ plus the $h_m$ identity columns to $E_iF_i$, and its inverse subtracts the section and inverts the transfer. If $h_m\le0$ the map $A$ is surjective with kernel $\mathrm{span}\{1,u,\dots,u^{-h_m-1}\}$, and the connecting images have an anti-triangular dot/cap matrix with unit anti-diagonal, whose successive solution gives the negative-branch inverse. This verifies the rank-one matrix and both inverse equations of the formal definition. [step 2.1, step 3.1, F3, algebra]

5.1 Same-color crossing, curl and bubble identities. Equal crossings act by $\kappa=(s-1)/(X-Y)$, so $\kappa^2=0$, the braid relation holds and the two mixed dot equations follow from the rational divided-difference expansion; $K_f$ is symmetric, so its divided-difference correction vanishes and $(X-Y)K_f=f(X)-f(Y)$ gives the dot-mate equations. Contracting a crossing against either Casimir and using the rank-one block inverse of step 4.1 produces the cross-and-cap/curl equations: expanding $(f(X)-f(Y))/(X-Y)$ in the power bases and taking the top-coefficient rows gives the four signed sums over $a+b=-1$ and $a+b+c=-1$ with the stated orientation signs. The resulting oriented bubble Laurent series is $\Phi_i(u)=p_m(u)/c_r(u)^2$ of leading degree $h_m=N-2r$; its reciprocal is the opposite series with product $1$ coefficient by coefficient, forced by composing the two flag coefficient pairings, since each existing $i$ root contributes one factor from each side of the cap. Appending an $i$ root $z$ changes $\Phi_i$ to $\Phi_i/(u-z)^2$ and appending a spectator $j$ root $y$ changes it to $\Phi_iQ_{ij}(u,y)/t_{ij}$; expanding at infinity gives every finite bubble-slide coefficient equation. At a monic vacuum, $a_i(x)x^{\ell-1}=0$ gives $h_\ell+\sum_jc_{\lambda_i-j}h_{\ell-j}=0$ with $h_0=1$, $h_{<0}=0$, so $H(t)a_i^{\mathrm{rev}}(t)=1$. All coefficients use only addition, multiplication and monic formal inversion. [step 3.1, step 4.1, algebra]

6.1 Downward $Q$-relations and exact word grading. Give every flag the ordered shift $s_j(m)$ of the Statement. For $j<k$ the increasing word $(j,k)$ maps to the word $(k,j)$ by a quotient/switch of underlying degree $0$, with target-minus-source unit shift $-b_{jk}$; the reverse operator has underlying degree $-2b_{jk}$ and unit-shift $+b_{jk}$, so both have actual degree $-b_{jk}$, and same-color divided differences have degree $-2d_j$. Native operators are the negatives of the source operators, so their degrees and two-crossing composites are unchanged. The ordinary polynomial operators satisfy the idempotent, dot, far-commutation and quadratic $Q$-relations directly; expanding a three-strand composition gives zero difference for distinct outer colors and the divided difference of $Q$ for equal outer colors, and the global substitution $\kappa=-\tau$ changes all cubic signs to the native numerator. The quotient relations descend: on an $i,j$ pair $D_1$ has $bq=0$ and $D_0$ has $b=0$, and $Qb=t_{ij}bq$ makes multiplication by $Q$ well defined while the other crossing is the literal quotient. [step 2.1, step 3.1, step 5.1, algebra]

6.2 Mixed cups and caps with their constants. In $D[z]/p$ versus $D[z]/(pq)$ the coefficient form satisfies $\tau_{pq}(Qf)=t_{ij}\tau_p(f)$, because $Q=t_{ij}q$ and the leading coefficient of $Qf$ is $t_{ij}$ times that of $f$. For a full existing $i$-string use the ordered residue form $t_r^p(z)=(-1)^{r(N-r)}\operatorname{Res}\bigl(\Delta_r(X)X_1^{r-1}\cdots X_{r-1}\operatorname{Tr}(z)/\prod_ap(X_a)\bigr)$, in which no $1/r!$ occurs; expanding parabolic divided differences verifies this over the universal integral coefficient ring, and over its generic-root fraction field the sum over root orderings is the Vandermonde determinant whose two factors cancel the internal root-difference denominator, so the identity is an integral polynomial identity and specializes to every field. With $p'=pq$ and $U_r=\prod_aQ_{ij}(X_a,y)$, cancellation gives $t_r^{p'}(U_rz)=(-1)^{rA_{ij}}t_{ij}^rt_r^p(z)$, and perfectness of the model forms makes $U_r$ injective on the old quotient. Testing the relative cap against these forms gives $\pi_r\varepsilon_r^{p'}(Q(X_{r+1},y)\operatorname{lift}(z))=(-1)^{A_{ij}}t_{ij}\varepsilon_r^p(z)$ for every nil-Hecke coset element. Normalizing the second maps by the global weight sign $(-1)^{h+1}$ — legitimate because $N$ and $h$ have the same parity and the new $N$ changes by $A_{ij}$ — cancels that sign and gives the exact constant $t_{ij}$; dual-power-basis contraction gives the mixed-unit equation, and reversing colors gives $t_{ji}$ with the stated double-mate ratio. Native minus signs occur twice in these composites, so the scalars persist. [step 2.1, step 3.1, step 5.1, algebra]

7.1 Conclusion. Steps 3.1-6.2 verify every defining relation of [[def-minimal-parabolic-klr-diagram-proof-category]] on the explicit flag modules: the generators and their degrees, both adjunction triangles, the rank-one matrices in both branches with their inverses, the bubble series and slides, the cross-and-cap equations, the mixed isomorphism with its scalars, and the downward $Q$-relations. Monic extensions, their Casimirs, the finite rank-one inverses and the coefficient identities survive arbitrary monic specialization as ungraded maps, and the construction is choice-free. This proves only the formal MODEL relations; faithfulness and the cyclotomic word-corner transfer belong to separate suppliers. [step 3.1, step 4.1, step 5.1, step 6.1, step 6.2, discharge-construct: explicit flag modules] ∎
