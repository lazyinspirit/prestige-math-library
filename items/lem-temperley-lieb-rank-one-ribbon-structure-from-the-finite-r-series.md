---
id: lem-temperley-lieb-rank-one-ribbon-structure-from-the-finite-r-series
kind: lemma
title: "The corrected finite rank-one R series gives the full tilting ribbon structure"
status: draft
dependency_level: 3
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
proof_strategy: direct
deps:
  - def-temperley-lieb-rank-one-lusztig-tilting-category
  - lem-temperley-lieb-rank-one-weyl-and-dual-weyl-filtrations
  - lem-temperley-lieb-rank-one-tilting-character-and-dimension
  - thm-the-drinfeld-jimbo-formulas-define-a-hopf-algebra
  - lem-quantum-pascal-recurrence-and-gaussian-integrality
  - def-rigid-object-and-rigid-monoidal-category
  - def-braiding
  - def-twist-and-ribbon-structure
  - def-pivotal-structure
  - thm-a-braided-rigid-category-has-a-drinfeld-morphism
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Stephen F. Sawin, Quantum Groups at Roots of Unity and Modularity"
      url: "https://arxiv.org/pdf/math/0308281"
      locator: "Section 1, actual PDF pp.6–9; the source's unexpanded quasitriangular calculation is replaced by the local finite tensor proof."
---

## Statement

For every $\ell\ge3$, the full tilting category of [[def-temperley-lieb-rank-one-lusztig-tilting-category]] is rigid and braided by $c_{M,N}=\operatorname{flip}\circ R_{M,N}$, where

$$R_{M,N}=D\sum_{r\ge0}q^{r(r+1)/2}(1-q^{-2})^r[r]_q!E_M^{(r)}\otimes F_N^{(r)},\qquad D|_{M_m\otimes N_n}=s^{mn}.$$

The sum is finite on every pair of objects. Its pivotal map is $j_M(x)(\varphi)=\varphi(Kx)$ and its ribbon twist is $\theta_M=u_M^{-1}j_M$, with $u$ the Drinfeld map. For $V=\Delta(1)$, the self-dual cup and cap are

$$w=v_+\otimes v_- -q^{-1}v_-\otimes v_+,\qquad b(v_+\otimes v_-)=-q,\quad b(v_-\otimes v_+)=1,$$

with $b(v_\pm\otimes v_\pm)=0$. They obey both snakes, $b(w)=-\delta$ and Frobenius–Schur sign $-1$ for $j$. Nevertheless $\dim_j V=\delta$. If $U=-wb$, then $U^2=\delta U$, the adjacent TL relations hold, and

$$c_{V,V}=sI-s^{-1}U,\qquad T=qU-I=-s\,c_{V,V}^{-1}.$$

The $\Delta(2)$ and trivial channels have crossing eigenvalues $s,-s^{-3}$ and Hecke eigenvalues $-1,q^2$, respectively. Their twists are $s^8,1$; $\theta_V=s^3I$. The $\Delta(2)$ channel is removed in the negligible quotient when $\ell=3$. More generally $\theta_{\Delta(a)}=s^{a(a+2)}I$ for $0\le a\le\ell-1$. These assertions include even $\ell$ and use no small-quantum-group substitution.

## Facts & Assumptions

**Given:** The full toral characters, $q=s^2=e^{\pi i/\ell}$ and the positive-$K$ Hopf convention.

[F1] [[def-temperley-lieb-rank-one-lusztig-tilting-category]] specifies the generators, coproduct, antipode, weight-pairing $D$ and divided-power formula.

[F2] [[lem-temperley-lieb-rank-one-weyl-and-dual-weyl-filtrations]] proves that every finite tilting is a finite sum of summands of powers of $V$; [[lem-temperley-lieb-rank-one-tilting-character-and-dimension]] proves simplicity of $\Delta(a)$ for $a<\ell$ and its positive-$K$ trace.

[F3] [[thm-the-drinfeld-jimbo-formulas-define-a-hopf-algebra]] gives the generic Hopf identities, transported to [F1]'s convention as stated there; [[lem-quantum-pascal-recurrence-and-gaussian-integrality]] gives the integral Gaussian identities.

[F4] [[def-rigid-object-and-rigid-monoidal-category]], [[def-braiding]], [[def-pivotal-structure]] and [[def-twist-and-ribbon-structure]] fix the snakes, hexagons, pivotal and dual-compatible twist conditions. [[thm-a-braided-rigid-category-has-a-drinfeld-morphism]] gives $u$ and its tensor defect.

## Proof

1.1 In the basis $(v_+,v_-)$, $K=\operatorname{diag}(q,q^{-1})$, $E_{12}=1$ and $F_{21}=1$. Substitution in the coproduct shows that $w$ and $b$ are invariant for $E,F,K$. They preserve total integral weight, hence all toral binomials. Divided powers of index $r\ge3$ vanish on $V^{\otimes2}$ by weight range, and the index-$2$ actions are ordinary squares divided by nonzero $[2]$; invariance therefore holds for the full divided-power algebra. The two direct contractions $(1\otimes b)(w\otimes1)$ and $(b\otimes1)(1\otimes w)$ each send $v_\pm$ to itself. Their closed composite is $-q-q^{-1}=-\delta$. Every invariant cup and cap is a scalar multiple of these, by solving the weight-zero $E$ equation, and the snakes force the two scalars' product to be $1$; that loop cannot become $+\delta$ by rescaling. With $B=\begin{pmatrix}0&-q\\1&0\end{pmatrix}$ one has $KB^t=-B$, or $b(y,Kx)=-b(x,y)$. This is the exact negative pivotal symmetry sign. [F1, F4, given, algebra]

1.2 Work generically over $\mathbb Q(s)$ and put $t=q^{-2}$. In ordinary powers the nilpotent series is $f(Z)=\sum_{r\ge0}a_rZ^r$, where $a_r=q^{r(r-1)/2}(q-q^{-1})^r/[r]_q!=(q-q^{-1})^r/(r)!_t$ and $(r)!_t=\prod_{j=1}^r(1+t+\cdots+t^{j-1})$. If $AB=q^2BA$, Pascal induction gives $(A+B)^r=\sum_{i+j=r}{r\brack i}_t A^iB^j$; dividing by $(r)!_t$ proves $f(A+B)=f(A)f(B)$. On weight spaces $D_{ij}E_iD_{ij}^{-1}=E_iK_j$ and $D_{ij}F_jD_{ij}^{-1}=K_i^{-1}F_j$. Hence $(\Delta\otimes1)R=D_{13}D_{23}f(E_1K_2F_3)f(E_2F_3)=R_{13}R_{23},$ because $E_1K_2F_3$ and $E_2F_3$ $q^2$-commute and $D_{23}^{-1}F_3D_{23}=K_2F_3$. Likewise $(1\otimes\Delta)R=D_{12}D_{13}f(E_1K_2^{-1}F_3)f(E_1F_2)=R_{13}R_{12},$ using $K_2^{-1}F_2=q^2F_2K_2^{-1}$ and $D_{12}^{-1}E_1D_{12}=E_1K_2^{-1}$. These are coefficientwise identities of finite series on any fixed tensor powers. [F1, F3, algebra]

2.1 In the ordered tensor basis $(++,+-,-+,--)$, $U=-wb$ has its nonzero middle block $\begin{pmatrix}q&-1\\-1&q^{-1}\end{pmatrix}$. Thus $U^2=\delta U$. The snakes give $(wb)_1(wb)_2(wb)_1=(wb)_1$, so also $U_1U_2U_1=U_1$; disjoint operators commute. The finite series on $V^{\otimes2}$ is $R=D(1+(q-q^{-1})E\otimes F)$, giving $c=sI-s^{-1}U$ and inverse $s^{-1}I-sU$. It is a full-algebra intertwiner by direct $E,F,K$ substitution and the divided-power/toral check of step 1.1. Its eigenvalues on $\ker U$ and $\operatorname{im}U$ are $s$ and $-s^{-3}$, respectively; $\operatorname{im}U=\mathbb Cw$ is the trivial channel. The complementary three-dimensional highest-weight string is $\Delta(2)$ by [F2]. Substitution gives $qU-I=-s c^{-1}$ and the stated Hecke eigenvalues. The adjacent TL relations give Yang–Baxter: after expanding both triple products, the remaining coefficient is $s-s^{-1}\delta+s^{-3}=0$. [F1, F2, step 1.1, algebra]

3.1 These tensor powers have explicit free integral tensor lattices. Their divided-power matrices are Laurent integral by the coproduct Gaussian expansion, and a toral binomial acts by the integral Gaussian at the total weight. All generic defining relations and associativity identities are therefore matrix identities over that lattice and remain true after specialization; this argument concerns finite matrices and needs no basis selection for an arbitrary completed algebra. Rewriting each series term as $q^{r(r+1)/2}(1-q^{-2})^r[r]_q!E^{(r)}\otimes F^{(r)}$ makes its coefficient Laurent integral. Only finitely many $r$ act by weight range, $D$ has powers $s^{mn}$, and $[r]!$ multiplies the term. Thus step 1.2 specializes at every $\ell\ge3$, including $r\ge\ell$, where the coefficient is zero. Inducting on tensor lengths identifies this finite series on $V^{\otimes m}\otimes V^{\otimes n}$ with the ordered block product of the elementary crossings of step 2.1. It is invertible and intertwines the entire specialized algebra. The block products satisfy both hexagons by partitioning their strands. [F1, F3, step 2.1, step 1.2, algebra]

4.1 If $g:M\to M'$ and $h:N\to N'$ are module maps, they preserve integral weights and commute with every divided power. Consequently $g\otimes h$ commutes, in the typed sense, with each series term and $D$. This proves naturality with every full-algebra intertwiner directly. In particular the series and its inverse restrict to summands of tensor powers. By [F2], direct sums and such restrictions exhaust all tiltings, so invertibility, naturality and both hexagons hold throughout that category, not merely on tensor powers or on a small-quantum-group subcategory. Duals of tiltings are tilting by their two filtrations; evaluation and coevaluation for the antipode satisfy the vector-space snakes and are module maps. This proves rigidity and braiding. [F1, F2, F4, step 3.1, algebra]

5.1 Since $S^2=\operatorname{Ad}K$, $j_M(x)(\varphi)=\varphi(Kx)$ is a module map to the double dual. It is natural, invertible and monoidal because $K$ is group-like. Form $\theta=u^{-1}j$ using [F4]. On $V^*$ the matrices are $E^*=-(EK^{-1})^t$, $F^*=-(KF)^t$, with weights $-1,1$. Inserting them into the finite $R$ and the evaluation formula for $u$ gives $u_V=\operatorname{diag}(s^{-1},s^{-5})$: its second entry is $s^{-1}(1-(q-q^{-1})q^{-1})=s^{-5}$. Thus $\theta_V=s^3I$. The tensor defect in [F4] gives the balancing identity for $\theta$. Dual compatibility holds on $V$, since it is self-dual and this twist is scalar. It then holds on every tensor power: duality reverses tensor order, the two dual crossings are the reversed crossings given by the evaluation snakes, and balancing on the two factors gives the same composite on either side. Naturality extends this equality to direct sums and summands. By [F2] these are all tiltings, proving the ribbon condition. [F1, F2, F4, step 1.1, step 4.1, algebra]

6.1 The simple $\Delta(a)$ for $a\le\ell-1$ occurs as a highest-weight summand in $V^{\otimes a}$ by [F2]. Its highest vector is $v_+^{\otimes a}$. Every elementary crossing there acts by $s$; balancing therefore gives twist $(s^3)^a s^{a(a-1)}=s^{a(a+2)}$. Naturality and the scalar endomorphism property make this its twist on the whole simple. The values at $a=0,1,2$ give $1,s^3,s^8$. At $\ell=3$, [F2] says $\Delta(2)$ has zero endomorphism trace and is removed in the negligible quotient; it is a genuine prequotient channel, not a retained one. Finally $\operatorname{tr}(K|_V)=q+q^{-1}=\delta$, despite the self-dual loop in step 1.1 being $-\delta$. These prove all stated convention and boundary assertions. [F1, F2, step 2.1, step 5.1, algebra] ∎
