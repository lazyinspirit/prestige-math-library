---
id: pthm-em-lorentz-field-transform
kind: physics-theorem
title: "Covariance, boosts and the two field invariants"
status: draft
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
domain: physics
dependency_level: 15
deps: [pthm-em-tensor-maxwell-equivalence,
       def-em-electromagnetic-tensor,
       lem-em-boost-preserves-metric,
       thm-sr-tensor-and-current-transformation,
       thm-sr-proper-orthochronous-lorentz-algebra,
       thm-sr-antisymmetric-observer-decomposition,
       def-spatial-rotation-of-an-inertial-frame,
       def-em-fields,
       def-em-sources,
       def-em-lab-geometry,
       def-em-si-conventions,
       def-cross-product-in-r3,
       def-euclidean-inner-product,
       def-determinant-of-a-linear-operator,
       def-lorentz-boost,
       post-sr-inertial-covariance,
       post-em-vacuum-maxwell,
       lem-cross-product-is-bilinear-alternating-and-orthogonal,
       thm-cross-product-norm-is-the-two-vector-gram-determinant,
       thm-determinant-of-transpose,
       thm-real-square-matrix-invertible-iff-determinant-nonzero,
       def-determinant-of-a-square-matrix]
dependency_roles:
  pthm-em-tensor-maxwell-equivalence: physical-result
  def-em-electromagnetic-tensor: formulation-prerequisite
  lem-em-boost-preserves-metric: mathematical-premise
  thm-sr-tensor-and-current-transformation: mathematical-premise
  thm-sr-proper-orthochronous-lorentz-algebra: mathematical-premise
  thm-sr-antisymmetric-observer-decomposition: mathematical-premise
  def-spatial-rotation-of-an-inertial-frame: mathematical-premise
  def-em-fields: formulation-prerequisite
  def-em-sources: formulation-prerequisite
  def-em-lab-geometry: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-cross-product-in-r3: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-determinant-of-a-linear-operator: mathematical-premise
  def-lorentz-boost: mathematical-premise
  post-sr-inertial-covariance: physical-assumption
  post-em-vacuum-maxwell: physical-assumption
  lem-cross-product-is-bilinear-alternating-and-orthogonal: mathematical-premise
  thm-cross-product-norm-is-the-two-vector-gram-determinant: mathematical-premise
  thm-determinant-of-transpose: mathematical-premise
  thm-real-square-matrix-invertible-iff-determinant-nonzero: mathematical-premise
  def-determinant-of-a-square-matrix: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "Conditional statement on the smooth branch of the framework's Maxwell fields in one inertial chart: the exact passive-boost component formulas for $E,B$ along one spatial axis and in every vector direction (including the zero boost), invariance of $B^2-E^2/c^2$ and $E\\cdot B$ under every proper orthochronous change of inertial description, the rotation and general-factorization laws, and form-invariance of the four Maxwell equations. Excluded: accelerating coordinates, curved spacetime, media, weak or singular fields, orientation-reversing changes, apparatus and any measurement or empirical claim."
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 author-hosted revision, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "§5.3.2 printed pp. 106-108 (the transformation of $E,B$ under a boost, eqs. (5.16)-(5.18), and the rotation embedding (5.4)) and §5.3.5 printed pp. 111-113 (the two Lorentz scalars (5.23) and (5.25)), read in the full extracted text; signs converted from the source's $(+---)$ dictionary"
    - title: "R. Fitzpatrick, Classical Electromagnetism: An intermediate level course, University of Texas at Austin (complete author-hosted lecture notes, document dated 2006-02-02)"
      url: "https://farside.ph.utexas.edu/teaching/em/lectures/node106.html"
      locator: "node 122 'The dual electromagnetic field tensor' (eqs. (1491)-(1510)) and node 123 'Transformation of fields', read in the complete author-hosted lecture notes; the source's fourth component and scaled field tensor are converted to the framework's $x^0=ct$ dictionary"
    - title: "N. Beisert, Elektrodynamik, Vorlesungsskript, ETH Zürich 2024 FS (author-hosted 176-page lecture script)"
      url: "https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf"
      locator: "§9.3 'Kovariante Elektrodynamik' pp. 9.8-9.11 (the field-strength tensor (9.42), the dual (9.48) and the transformation properties), read in the author-hosted script; overall sign converted to the framework's dictionary"
verification:
  precheck: pass
---

## Statement

Let $E,B$ be jointly $C^k$ fields of [[def-em-fields]] on the laboratory region
$U\cong I\times\Omega$ of an inertial chart $x$ of the framework
([[def-em-lab-geometry]]), $k\ge1$, with the SI units of
[[def-em-si-conventions]], and let $F$ be the electromagnetic two-form of
[[def-em-electromagnetic-tensor]] with its fixed components
$F_{0i}=-E_i/c$, $F_{ij}=\epsilon_{ijk}B_k$, $F^{0i}=E_i/c$,
$F^{ij}=\epsilon_{ijk}B_k$. Let $0\le\beta<1$, $\gamma:=(1-\beta^2)^{-1/2}$,
$v:=\beta c\,e_1$, and let $\Lambda_\beta$ be the explicit boost of
[[lem-em-boost-preserves-metric]] with
$\Lambda_\beta{}^0{}_0=\Lambda_\beta{}^1{}_1=\gamma$,
$\Lambda_\beta{}^0{}_1=\Lambda_\beta{}^1{}_0=-\gamma\beta$,
$\Lambda_\beta{}^2{}_2=\Lambda_\beta{}^3{}_3=1$ and all other entries zero. Let
$x'=\Lambda_\beta x+b$ be the corresponding inertial chart, and for every event
$p$ in the overlap of the two chart restrictions define the primed field
components by reading the components of the same $F$ in $x'$ through the
dictionary of [[def-em-electromagnetic-tensor]], so that $F'_{0i}=-E'_i/c$,
$F'_{ij}=\epsilon_{ijk}B'_k$ at $p$. Then:

(a) [Boosted fields] at every such $p$, with $\parallel$ and $\perp$ the
components along and orthogonal to $e_1$ in the spatial Euclidean structure of
the chart,
$$E'_1=E_1,\quad B'_1=B_1,\qquad E'_\parallel=E_\parallel,\quad B'_\parallel=B_\parallel,\qquad E'_\perp=\gamma\,(E+v\times B)_\perp,\qquad B'_\perp=\gamma\,(B-v\times E/c^2)_\perp,$$
equivalently, componentwise,
$E'_2=\gamma(E_2-\beta cB_3)$, $E'_3=\gamma(E_3+\beta cB_2)$,
$B'_2=\gamma(B_2+\beta E_3/c)$, $B'_3=\gamma(B_3-\beta E_2/c)$.

(a′) [Arbitrary boost direction] For a velocity vector $v\in\mathbb R^3$ with
$|v|<c$, use the actual vector boost $B(v/c)$ of [[def-lorentz-boost]], with
$\gamma_v=(1-|v|^2/c^2)^{-1/2}$. If $v\ne0$, decompose the fields along
$\widehat v=v/|v|$ and its orthogonal complement. Then $E'_\parallel=E_\parallel$,
$B'_\parallel=B_\parallel$, $E'_\perp=\gamma_v(E+v\times B)_\perp$ and
$B'_\perp=\gamma_v(B-v\times E/c^2)_\perp$. Equivalently, for every $v$,
including $v=0$,
$$E'=\gamma_v(E+v\times B)-\frac{\gamma_v^2}{\gamma_v+1}\frac{v(v\cdot E)}{c^2},\qquad B'=\gamma_v(B-v\times E/c^2)-\frac{\gamma_v^2}{\gamma_v+1}\frac{v(v\cdot B)}{c^2}.$$
At $v=0$ these are the identity and no preferred parallel direction is
assigned.

(b) [Invariants] at every such $p$,
$$|B'|^2-\frac{|E'|^2}{c^2}=|B|^2-\frac{|E|^2}{c^2},\qquad E'\cdot B'=E\cdot B;$$
equivalently the scalar fields $I_1:=\tfrac12F_{ab}F^{ab}=|B|^2-|E|^2/c^2$
and $I_2:=F_{ab}(*F)^{ab}=4\,E\cdot B/c$ of [[def-em-electromagnetic-tensor]]
(b) take the same values whether computed from the components in $x$ or in
$x'$.

(c) [General proper orthochronous changes] for any proper orthochronous Lorentz
matrix $\Lambda$ with chart $x'=\Lambda x+b$, the primed components of $F$ are
given by the component law of [[thm-sr-tensor-and-current-transformation]] (iii),
$F'^{ab}=\Lambda^a{}_c\Lambda^b{}_dF^{cd}$; in particular, if
$\Lambda=\widehat R$ is the extension of a spatial rotation $R$ of the frame
([[def-spatial-rotation-of-an-inertial-frame]]), then $E'=RE$ and $B'=RB$, and
by the unique factorization $\Lambda=B(-\beta)\widehat R$ of
[[thm-sr-proper-orthochronous-lorentz-algebra]] (iii) every proper
orthochronous change acts first by $(E,B)\mapsto(RE,RB)$ and then by the
arbitrary-direction boost law (a′) with velocity $-c\beta$, where $\beta$ is
the vector parameter of that factorization. The axis-only law (a) is not
substituted for a general vector boost.

(d) [Form invariance of the Maxwell branch] if $(E,B,\rho,J)$ satisfy the
smooth branch of [[post-em-vacuum-maxwell]] in $x$ on the overlap, and
$(\rho',J')$ are the components of the same four-current in $x'$, then
$(E',B',\rho',J')$ satisfy the same four equations in $x'$, by
[[pthm-em-tensor-maxwell-equivalence]].

(e) [Scope] All clauses are pointwise on the overlap $U\cap U'$ of the two
chart restrictions, are conditional on the adopted postulates, and concern the
smooth classical flat branch; no accelerating coordinates, curved spacetime,
material medium, apparatus or empirical claim is involved; the transformation
is exact algebra, and the primed component functions are $C^k$ wherever the
overlap is open. The invariants clause uses only the proper orthochronous
changes of description adopted in [[post-sr-inertial-covariance]];
orientation-reversing changes are outside the framework's field conventions
([[def-em-fields]]).

## Facts & Assumptions

**Given:** The inertial chart $x$ of the framework's laboratory region with the fields $E,B$ (jointly $C^k$, $k\ge1$) and the continuous sources $(\rho,J)$, and the SI units of [[def-em-si-conventions]]; the electromagnetic two-form $F$ with the dictionary, invariants and conventions of [F1]; the axis boost $\Lambda_\beta$ of [F2] with $0\le\beta<1$ and its chart $x'=\Lambda_\beta x+b$; a velocity vector $v\in\mathbb R^3$ with $|v|<c$ and the vector boost $B(v/c)$ of [F2]; a general proper orthochronous Lorentz matrix $\Lambda$ with chart $x'=\Lambda x+b$; and the postulates [F4] and [F9]. Every primed component is read through the dictionary [F1].

[F1] In the chart $x$ the electromagnetic two-form has components $F_{00}=0$, $F_{0i}=-E_i/c$, $F_{ij}=\epsilon_{ijk}B_k$, $F_{ab}=-F_{ba}$ and $F^{0i}=E_i/c$, $F^{i0}=-E_i/c$, $F^{ij}=\epsilon_{ijk}B_k$, where $\eta=\operatorname{diag}(-1,1,1,1)$ and $\epsilon_{ijk}=+1$ for even, $-1$ for odd permutations of $(1,2,3)$ and $0$ for repeated indices; its Hodge dual is $(*F)_{ab}=\tfrac12\varepsilon_{ab}{}^{cd}F_{cd}$ and its scalar contractions are $I_1:=\tfrac12F_{ab}F^{ab}=|B|^2-|E|^2/c^2$ and $I_2:=F_{ab}(*F)^{ab}=4\,E\cdot B/c$, with $|\cdot|$ and $\cdot$ the spatial Euclidean structure of the frame ([[def-em-electromagnetic-tensor]] (a), (b), [[thm-sr-antisymmetric-observer-decomposition]] (a), (c)). The fields carry V m$^{-1}$ and T, $E$ is a polar and $B$ an axial vector relative to the orientation of the spatial basis, only orientation-preserving changes of inertial description are adopted, and no value of a field at a point of singular source support is asserted ([[def-em-fields]] (a)-(c), [[def-em-si-conventions]] (b)). The four-current is $j^0=c\rho$, $j^i=J^i$ ([[def-em-sources]] (c)).

[F2] For $0\le\beta<1$ and $\gamma=(1-\beta^2)^{-1/2}$ the map $\Lambda_\beta$ with matrix $\Lambda_\beta{}^0{}_0=\Lambda_\beta{}^1{}_1=\gamma$, $\Lambda_\beta{}^0{}_1=\Lambda_\beta{}^1{}_0=-\gamma\beta$, $\Lambda_\beta{}^2{}_2=\Lambda_\beta{}^3{}_3=1$ and all other entries zero is a proper orthochronous Lorentz map with $\det\Lambda_\beta=1$ and $\Lambda_\beta^{-1}=\Lambda_{-\beta}$ ([[lem-em-boost-preserves-metric]] (a)-(d)). For $\boldsymbol\beta\in\mathbb R^3$ with $|\boldsymbol\beta|<1$ and $\gamma(\boldsymbol\beta)=(1-|\boldsymbol\beta|^2)^{-1/2}$, the vector boost $B(\boldsymbol\beta)$ has matrix $B^0{}_0=\gamma(\boldsymbol\beta)$, $B^0{}_i=B^i{}_0=-\gamma(\boldsymbol\beta)\beta_i$, $B^i{}_j=\delta^i{}_j+\frac{\gamma(\boldsymbol\beta)-1}{|\boldsymbol\beta|^2}\beta_i\beta_j$ for $\boldsymbol\beta\ne0$, and $B(\boldsymbol 0)=\operatorname{id}_V$; it is a proper orthochronous Lorentz map with $B(\boldsymbol\beta)^{-1}=B(-\boldsymbol\beta)$, and for $\boldsymbol\beta\ne0$ one has $\frac{\gamma(\boldsymbol\beta)-1}{|\boldsymbol\beta|^2}=\frac{\gamma(\boldsymbol\beta)^2}{\gamma(\boldsymbol\beta)+1}$ ([[def-lorentz-boost]], [[thm-sr-proper-orthochronous-lorentz-algebra]] (i)).

[F3] For a second inertial chart $x'=\Lambda x+b$ with $\Lambda$ proper orthochronous, the components of the same tensor and vector fields satisfy $F'^{ab}=\Lambda^a{}_c\Lambda^b{}_dF^{cd}$, $F'_{ab}=(\Lambda^{-1})^c{}_a(\Lambda^{-1})^d{}_bF_{cd}$ and $j'^a=\Lambda^a{}_bj^b$, and every contraction of one contravariant with one covariant index is invariant ([[thm-sr-tensor-and-current-transformation]] (i), (iii)).

[F4] A change of inertial description is an affine map $x'=\Lambda x+b$ whose linear part $\Lambda$ is a proper orthochronous Lorentz matrix ($\eta$-preserving, $\det=+1$, $C^+$-preserving), and such a $\Lambda$ is invertible ([[post-sr-inertial-covariance]] (ii)). Every vector boost $B(\boldsymbol\beta)$ with $|\boldsymbol\beta|<1$ and every spatial rotation of the frame belongs to $SO^+(V,\eta)$, and every $L\in SO^+(V,\eta)$ has a unique factorization $L=B(-\boldsymbol\beta)\widehat R$ with $|\boldsymbol\beta|<1$ and $\widehat R$ the extension of a spatial rotation of the frame, where $\boldsymbol\beta=u_{\mathrm{vec}}/u^0$ for $u=Le_0$ ([[thm-sr-proper-orthochronous-lorentz-algebra]] (i)-(iii)).

[F5] A spatial rotation $R$ of the frame fixes $e_0$, preserves the spatial three-space $S$, satisfies $\delta(Rw,Rz)=\delta(w,z)$ on $S$, and its restriction has determinant $+1$ in the ordered basis $(e_1,e_2,e_3)$; under the identification of $S$ with $\mathbb R^3$ by that basis, the maps of these conditions are exactly those with block matrix $\operatorname{diag}(1,A)$ where $A^{\mathsf T}A=I_3$ and $\det A=+1$, so the columns of $A$ are an orthonormal family of $\mathbb R^3$ ([[def-spatial-rotation-of-an-inertial-frame]]).

[F6] For coordinate columns in $\mathbb R^3$ the cross product is $u\times v=(u_2v_3-u_3v_2,\ u_3v_1-u_1v_3,\ u_1v_2-u_2v_1)$ ([[def-cross-product-in-r3]]); it is bilinear and alternating, $u\times v$ is orthogonal to $u$ and $v$, and $\langle u\times v,w\rangle=\det[u\ v\ w]$, where the bracket denotes the $3\times3$ matrix with these columns ([[lem-cross-product-is-bilinear-alternating-and-orthogonal]]); moreover $\lVert u\times v\rVert_2^2=\lVert u\rVert_2^2\lVert v\rVert_2^2-\langle u,v\rangle^2$ ([[thm-cross-product-norm-is-the-two-vector-gram-determinant]]). The Euclidean inner product is bilinear, symmetric and positive definite, so $\langle z,z\rangle=0$ implies $z=0$ ([[def-euclidean-inner-product]]).

[F7] For a real $n\times n$ matrix $A$ one has $\det A=\sum_{\sigma\in S_n}\operatorname{sgn}(\sigma)\prod_{i<n}A^{\sigma(i)}{}_i$ (sum over columns $i$); permuting the columns by a permutation $\pi$ multiplies the determinant by $\operatorname{sgn}(\pi)$, so a determinant with two equal columns vanishes and $\det I_n=1$ ([[def-determinant-of-a-square-matrix]]); $\det(A^{\mathsf T})=\det A$ ([[thm-determinant-of-transpose]]); $A$ is invertible if and only if $\det A\ne0$ ([[thm-real-square-matrix-invertible-iff-determinant-nonzero]]); and the determinant of a linear operator is the determinant of its coordinate matrix ([[def-determinant-of-a-linear-operator]]).

[F8] [[pthm-em-tensor-maxwell-equivalence]]: under that theorem's hypotheses, stated for the framework's chart $x$, the four smooth-branch Maxwell equations hold on the laboratory region if and only if the two tensor systems $(\mathrm{TM1})$ $\partial_\mu F^{\mu\nu}=-\mu_0j^\nu$ and $(\mathrm{TM2})$ $\partial_\lambda F_{\mu\nu}+\partial_\mu F_{\nu\lambda}+\partial_\nu F_{\lambda\mu}=0$ hold there; and for a second inertial chart $x'=\Lambda x+b$ with proper orthochronous $\Lambda$, $(\mathrm{TM1})$ holds in $x$ if and only if it holds in $x'$ with $j'$, and $(\mathrm{TM2})$ holds in $x$ if and only if it holds in $x'$; consequently the four smooth-branch equations are form-invariant, the primed fields satisfying the primed equations with the primed sources (clauses (a), (b)).

[F9] The smooth branch of the vacuum Maxwell postulate: for jointly $C^1$ fields with the additional derivatives required by each equation existing and continuous, and continuous sources, $\operatorname{div}E=\rho/\varepsilon_0$, $\operatorname{div}B=0$, $\operatorname{curl}E=-\partial_tB$ and $\operatorname{curl}B=\mu_0J+c^{-2}\partial_tE$ ([[post-em-vacuum-maxwell]] (a)).

## Proof

**Proof technique:** direct component computation in the fixed dictionary, the explicit conjugation of the vector boost by a rotation, and the constant component law.

1.1 (Clause (a): the axis boost components) For a spatial vector $W$ write $W_\parallel:=(W\cdot e_1)e_1$ and $W_\perp:=W-W_\parallel$. By [F2] and [F3](iii), $F'^{ab}=\Lambda_\beta{}^a{}_c\Lambda_\beta{}^b{}_dF^{cd}$ on the overlap; substituting the nonzero entries of [F2] and the components of [F1] gives $F'^{01}=\Lambda^0{}_0\Lambda^1{}_1F^{01}+\Lambda^0{}_1\Lambda^1{}_0F^{10}=\gamma^2(1-\beta^2)F^{01}=F^{01}$, $F'^{02}=\Lambda^0{}_0\Lambda^2{}_2F^{02}+\Lambda^0{}_1\Lambda^2{}_2F^{12}=\gamma(E_2/c-\beta B_3)$, $F'^{03}=\gamma(E_3/c+\beta B_2)$, $F'^{12}=\Lambda^1{}_0\Lambda^2{}_2F^{02}+\Lambda^1{}_1\Lambda^2{}_2F^{12}=\gamma(B_3-\beta E_2/c)$, $F'^{13}=-\gamma(B_2+\beta E_3/c)$ and $F'^{23}=F^{23}=B_1$, because $F^{00}=F^{11}=0$, $F^{10}=-E_1/c$, $F^{02}=E_2/c$, $F^{03}=E_3/c$, $F^{12}=B_3$, $F^{13}=-B_2$ and $F^{23}=B_1$ by [F1]. Reading the dictionary [F1] in the primed chart, $E'_i=cF'^{0i}$ and $F'^{ij}=\epsilon_{ijk}B'_k$, gives $E'_1=E_1$, $E'_2=\gamma(E_2-\beta cB_3)$, $E'_3=\gamma(E_3+\beta cB_2)$, $B'_1=B_1$, $B'_2=\gamma(B_2+\beta E_3/c)$ and $B'_3=\gamma(B_3-\beta E_2/c)$. Since $v=\beta ce_1$, the coordinate formulas of [F6] give $v\times B=\beta c\,(0,-B_3,B_2)$ and $v\times E=\beta c\,(0,-E_3,E_2)$; hence $(E+v\times B)_\perp=(0,E_2-\beta cB_3,E_3+\beta cB_2)$ and $(B-v\times E/c^2)_\perp=(0,B_2+\beta E_3/c,B_3-\beta E_2/c)$, so the transverse formulas and the unchanged parallel components read $E'_\parallel=E_\parallel$, $B'_\parallel=B_\parallel$, $E'_\perp=\gamma(E+v\times B)_\perp$ and $B'_\perp=\gamma(B-v\times E/c^2)_\perp$, as claimed. [given, F1, F2, F3, F6, algebra]

1.2 (Clause (c), rotation case; the orientation identity) Let $A\in M_3(\mathbb R)$ satisfy $A^{\mathsf T}A=I_3$ and $\det A=+1$, and let $\Lambda=\operatorname{diag}(1,A)$; then the components $F'^{ab}=\Lambda^a{}_c\Lambda^b{}_dF^{cd}$ of [F3] satisfy $E'=AE$ and $B'=AB$. First $F'^{0i}=A^i{}_jF^{0j}$, so $E'_i=cF'^{0i}=A^i{}_jE_j$. For the magnetic block, the dictionary gives $B'_q=\tfrac12\epsilon_{qij}F'^{ij}$, since inserting $F'^{ij}=\epsilon_{ijp}B'_p$ yields $\tfrac12\epsilon_{qij}\epsilon_{ijp}B'_p=\delta_{qp}B'_p$ by the elementary contraction $\epsilon_{qij}\epsilon_{ijp}=2\delta_{qp}$ (direct enumeration of the two contributing index pairs). Hence $B'_q=\tfrac12\epsilon_{qij}A^i{}_kA^j{}_l\epsilon_{klm}B_m$, and the matrix $A$ satisfies the cofactor identity $\epsilon_{qij}A^i{}_kA^j{}_l=A^q{}_m\epsilon_{mkl}$ for all $q,k,l$: the determinant of the matrix with columns $(c_m,c_k,c_l)$ of $A$ equals $\epsilon_{mkl}\det A=\epsilon_{mkl}$ by column alternation [F7], and it also equals $\sum_{n,i,j}\epsilon_{nij}A^n{}_mA^i{}_kA^j{}_l$ by the permutation expansion [F7]; multiplying that equality by $A^q{}_m$ and summing over $m$ turns the factor $A^q{}_mA^n{}_m$ into $(AA^{\mathsf T})^{qn}=\delta^{qn}$ and yields the identity, where $AA^{\mathsf T}=I_3$ holds because $A^{\mathsf T}A=I_3$ with $\det A=1\ne0$ makes $A$ invertible with inverse $A^{\mathsf T}$ [F7]. Then $B'_q=\tfrac12A^q{}_m\epsilon_{mkl}\epsilon_{klp}B_p=A^q{}_m\delta_{mp}B_p=A^q{}_mB_m$ by the elementary identity $\epsilon_{mkl}\epsilon_{klp}=2\delta_{mp}$ (direct enumeration), so $B'=AB$. If $A$ is the matrix in the basis $(e_1,e_2,e_3)$ of a spatial rotation $R$ of the frame, then $A^{\mathsf T}A=I_3$ and $\det A=+1$ by [F5], and $E'=RE$, $B'=RB$, which is the rotation case of clause (c). [given, F1, F3, F5, F6, F7, algebra]

1.3 (Conjugation of the vector boost) Let $v\in\mathbb R^3$ with $0<|v|<c$, put $u:=v/|v|$ and $\beta:=|v|/c\in(0,1)$, so $v/c=\beta u$. Among the standard basis vectors $e_1,e_2,e_3$ at most one is a multiple of $u$ (two independent vectors cannot both be nonzero multiples of one vector), so let $j\in\{1,2,3\}$ be the least index for which $e_j$ is not a multiple of $u$; set $\hat a:=\bigl(e_j-(e_j\cdot u)u\bigr)/\lVert e_j-(e_j\cdot u)u\rVert_2$, whose denominator is nonzero because $e_j$ is not a multiple of $u$, and $b:=u\times\hat a$. Then $(u,\hat a,b)$ is an orthonormal family, since $u\cdot\hat a=0$, $\lVert u\rVert_2=\lVert\hat a\rVert_2=1$, $b$ is orthogonal to $u$ and $\hat a$, and $\lVert b\rVert_2^2=\lVert u\rVert_2^2\lVert\hat a\rVert_2^2-(u\cdot\hat a)^2=1$ [F6]; it is positively oriented because $\det[u\ \hat a\ b]=\langle u\times\hat a,b\rangle=\lVert b\rVert_2^2=1$ [F6]. Let $S$ be the matrix with columns $u,\hat a,b$ and $R:=S^{\mathsf T}$, so the rows of $R$ are $u,\hat a,b$ and $Ru=e_1$; then $S^{\mathsf T}S=I_3$, $\det S=1$ and, since $\det S=1\ne0$, $S$ is invertible with $S^{-1}=S^{\mathsf T}$, so $SS^{\mathsf T}=I_3$, $R^{-1}=R^{\mathsf T}$ and $\det R=\det(S^{\mathsf T})=\det S=1$ [F7]. The conjugation identity $\widehat RB(v/c)\widehat R^{-1}=\Lambda_\beta$, where $\widehat R:=\operatorname{diag}(1,R)$, follows by direct substitution in the matrix of [F2]: for all $x\in V$ set $y:=\widehat Rx$, so $y^0=x^0$, $y_{\mathrm{vec}}=Rx_{\mathrm{vec}}$ and $x_{\mathrm{vec}}=R^{\mathsf T}y_{\mathrm{vec}}$; since $u\cdot x_{\mathrm{vec}}=u\cdot R^{\mathsf T}y_{\mathrm{vec}}=(Ru)\cdot y_{\mathrm{vec}}=y^1_{\mathrm{vec}}$ and $(v/c)\cdot x_{\mathrm{vec}}=\beta y^1_{\mathrm{vec}}$, the formula of [F2] with parameter $\beta u$ gives $(\widehat RB(v/c)x)^0=(B(v/c)x)^0=\gamma(x^0-\beta u\cdot x_{\mathrm{vec}})=\gamma(y^0-\beta y^1_{\mathrm{vec}})$ and $(\widehat RB(v/c)x)_{\mathrm{vec}}=R\bigl(R^{\mathsf T}y_{\mathrm{vec}}+(\gamma-1)y^1_{\mathrm{vec}}u-\gamma\beta y^0u\bigr)=y_{\mathrm{vec}}+(\gamma-1)y^1_{\mathrm{vec}}e_1-\gamma\beta y^0e_1$ using $(Ru)=e_1$; with $\widehat Rx=y$ this is exactly $\Lambda_\beta y$ by the matrix of [F2]. Hence $B(v/c)=\widehat R^{\mathsf T}\Lambda_\beta\widehat R$. [given, F2, F6, F7, choose, algebra]

1.4 (Regularity of the primed components) The overlap $V=U\cap U'$ is open and carries both charts: $x(U)=\{(ct,y):t\in I,\ y\in\Omega\}$ and $x'(U')$ are open in $\mathbb R^4$, the affine map $x\mapsto\Lambda^{-1}(x-b)$ carries $x'(U')$ bijectively onto $x(U')$, and $x$ carries $V$ onto the open set $x(U)\cap x(U')$ because $x$ and $x'$ are bijections [F3, F4]. On $V$ the primed component functions $F'^{ab}=\Lambda^a{}_c\Lambda^b{}_dF^{cd}$ and $j'^a=\Lambda^a{}_bj^b$ are constant-coefficient finite linear combinations of the unprimed component functions [F3], so $E',B'$ inherit the joint class of $E,B$ under the fixed linear relabelling of the dictionary [F1], the additional derivatives required by each displayed equation exist and are continuous, and $\rho',J'$ are continuous whenever $\rho,J$ are. [given, F1, F3, F4, algebra]

2.1 (Clause (a′): arbitrary-direction boost) Let $v\in\mathbb R^3$ with $|v|<c$. If $v=0$, then $B(0)=\operatorname{id}_V$ [F2], the charts differ by the translation $x'=x+b$, the components are unchanged by [F3], so $E'=E$ and $B'=B$, and the closed formulas reduce to the identity because $\gamma_v=1$ and all terms carrying $v$ vanish; no parallel direction is needed. Let $v\ne0$ and use $u,\hat a,b,S,R,\beta$ and the conjugation identity $B(v/c)=\widehat R^{\mathsf T}\Lambda_\beta\widehat R=\operatorname{diag}(1,S)\Lambda_\beta\operatorname{diag}(1,R)$ of step 1.3. By [F3] the total component law of the composite is the matrix product of the factors of $B(v/c)=\widehat R^{\mathsf T}\Lambda_\beta\widehat R$; applied successively, the first stage is the rotation $\widehat R=\operatorname{diag}(1,R)$ (step 1.2 with $A=R$, whose hypotheses $R^{\mathsf T}R=I_3$ and $\det R=1$ hold by step 1.3), giving $E''=RE$, $B''=RB$; the second stage is the axis boost $\Lambda_\beta$ in the intermediate frame, where step 1.1 applies because its proof uses only the dictionary and the component law; the third stage is the rotation $\widehat R^{\mathsf T}=\operatorname{diag}(1,R^{\mathsf T})$ (step 1.2 with $A=R^{\mathsf T}$, whose hypotheses $RR^{\mathsf T}=I_3$ and $\det(R^{\mathsf T})=\det R=1$ hold by step 1.3 and [F7]), giving $E'=R^{\mathsf T}E'''$ and $B'=R^{\mathsf T}B'''$. Writing $\parallel,\perp$ for the components along $e_1$ in the intermediate coordinates, step 1.1 applied in the intermediate frame gives $E'''=E''_\parallel+\gamma(E''+\beta c\,e_1\times B'')_\perp$ and $B'''=B''_\parallel+\gamma(B''-\beta c\,e_1\times E''/c^2)_\perp$; applying $S=R^{\mathsf T}$ to the intermediate vectors and using the cross-product identity $R^{\mathsf T}(p\times q)=(R^{\mathsf T}p)\times(R^{\mathsf T}q)$ for the orthogonal matrix $R$ (obtained from the identity of step 1.2 by applying $R$ to both sides: $R\bigl((R^{\mathsf T}p)\times(R^{\mathsf T}q)\bigr)=(RR^{\mathsf T}p)\times(RR^{\mathsf T}q)=p\times q$) gives $R^{\mathsf T}(E''+\beta ce_1\times B'')=E+\beta c\,(R^{\mathsf T}e_1)\times(R^{\mathsf T}B'')=E+v\times B$, since $R^{\mathsf T}e_1=S e_1=u$ and $v=\beta cu$; moreover $R^{\mathsf T}E''_\parallel=(e_1\cdot E'')R^{\mathsf T}e_1=(u\cdot E)u=E_\parallel$ and $R^{\mathsf T}B''_\parallel=(u\cdot B)u=B_\parallel$. Hence $E'=E_\parallel+\gamma(E+v\times B)_\perp$ and $B'=B_\parallel+\gamma(B-v\times E/c^2)_\perp$, which is the stated parallel/perpendicular form, and it yields $E'_\parallel=E_\parallel$, $B'_\parallel=B_\parallel$ by taking inner products with $u$. Finally $E_\parallel+\gamma(E+v\times B)_\perp=\gamma(E+v\times B)-(\gamma-1)(u\cdot E)u$ and $(\gamma-1)(u\cdot E)u=\frac{\gamma^2}{\gamma+1}\frac{v(v\cdot E)}{c^2}$, because $(u\cdot E)u=(v\cdot E)v/|v|^2$ and $(\gamma-1)/\beta^2=\gamma^2/(\gamma+1)$ [F2]; the same computation for $B$ gives the displayed closed formulas for every $v\ne0$, with $\gamma_v=\gamma$ since $|v|/c=\beta$. [given, step 1.1, step 1.2, step 1.3, F2, F6, algebra]

2.2 (Clause (b): the invariants under the axis boost) Substituting the components of step 1.1, $|B'|^2-\frac{|E'|^2}{c^2}=B_1^2-\frac{E_1^2}{c^2}+\gamma^2\bigl[(B_2+\beta E_3/c)^2+(B_3-\beta E_2/c)^2\bigr]-\frac{\gamma^2}{c^2}\bigl[(E_2-\beta cB_3)^2+(E_3+\beta cB_2)^2\bigr]$; the linear terms cancel in pairs and the transverse contributions combine to $\gamma^2(1-\beta^2)\bigl(B_2^2+B_3^2-(E_2^2+E_3^2)/c^2\bigr)=B_2^2+B_3^2-(E_2^2+E_3^2)/c^2$ because $\gamma^2(1-\beta^2)=1$ [F2], giving the first display. Likewise $E'\cdot B'=E_1B_1+\gamma^2\bigl[(E_2-\beta cB_3)(B_2+\beta E_3/c)+(E_3+\beta cB_2)(B_3-\beta E_2/c)\bigr]=E_1B_1+\gamma^2(1-\beta^2)(E_2B_2+E_3B_3)=E\cdot B$, since the mixed terms cancel in pairs. By [F1] the scalar fields $I_1$ and $I_2$ computed from the components in $x$ are $|B|^2-|E|^2/c^2$ and $4E\cdot B/c$, and those computed from the components in $x'$ are the same expressions in the primed fields, so the two displays say exactly that $I_1$ and $I_2$ take the same values in the two charts. [given, step 1.1, F1, F2, algebra]

3.1 (Clause (c): general proper orthochronous changes) Let $\Lambda$ be proper orthochronous with chart $x'=\Lambda x+b$. By [F3] the primed components are $F'^{ab}=\Lambda^a{}_c\Lambda^b{}_dF^{cd}$, which is the first assertion. By [F4] there is a unique $\boldsymbol\beta\in\mathbb R^3$ with $|\boldsymbol\beta|<1$ and a spatial rotation $R$ of the frame with $\Lambda=B(-\boldsymbol\beta)\widehat R$. Taking the intermediate chart $x''=\widehat Rx$ and the final chart $x'=B(-\boldsymbol\beta)x''+b$ realizes the same transition $x'=\Lambda x+b$; by step 1.2 the intermediate fields are $E''=RE$, $B''=RB$, and by step 2.1 applied with velocity $v=-c\boldsymbol\beta$ — for which $|v|=c|\boldsymbol\beta|<c$ and $B(v/c)=B(-\boldsymbol\beta)$ [F2] — the final fields are $E'=E''_\parallel+\gamma_v(E''+v\times B'')_\perp$ and $B'=B''_\parallel+\gamma_v(B''-v\times E''/c^2)_\perp$, with $\gamma_v=(1-|v|^2/c^2)^{-1/2}=(1-|\boldsymbol\beta|^2)^{-1/2}$. This is exactly the statement that the change acts first by $(E,B)\mapsto(RE,RB)$ and then by the boost law (a′) with velocity $-c\boldsymbol\beta$; the axis-only law of (a) was not substituted for it. [given, step 1.2, step 2.1, F3, F4]

3.2 (Clause (b), general changes: the two scalar combinations) Every proper orthochronous change preserves $|B|^2-|E|^2/c^2$ and $E\cdot B$. Indeed, writing $\Lambda=B(-\boldsymbol\beta)\widehat R$ by [F4], the transformation factorizes into the rotation $\widehat R$, the axis boost $\Lambda_\beta$ in the intermediate frame and the inverse rotation, as in step 2.1; a spatial rotation with matrix $A$ satisfying $A^{\mathsf T}A=I_3$ preserves the Euclidean norm and inner product of vectors, $|AE|^2=|E|^2$, $|AB|^2=|B|^2$ and $(AE)\cdot(AB)=E\cdot B$ [F5]; and the axis boost preserves the two combinations $|B|^2-|E|^2/c^2$ and $E\cdot B$ by step 2.2. Chaining the three stages gives the invariance for every proper orthochronous change, hence in particular for the boost chart $x'$ of clause (b), and by [F1] the equivalently stated invariance of $I_1$ and $I_2$. [given, step 1.2, step 2.1, step 2.2, F1, F5, F6]

4.1 (Clause (d): form invariance of the smooth Maxwell branch) Let $x'=\Lambda x+b$ with $\Lambda$ proper orthochronous, and assume that on $V$ the four smooth-branch equations of [F9] hold for $(E,B,\rho,J)$. By [F8] the two tensor systems $(\mathrm{TM1})$ and $(\mathrm{TM2})$ hold in $x$ on $V$ and therefore also hold in $x'$ on $V$ with the primed components of the same $F$ and the same four-current, and then the four smooth-branch equations hold in $x'$ for the primed dictionary fields; the primed fields are exactly the fields $E',B'$ read in the dictionary [F1], which by step 3.1 are the components of the same $F$ given by the component law, and the primed sources are $(c\rho',J')$ because $j'^a=\Lambda^a{}_bj^b$ with $j^0=c\rho$, $j^i=J^i$ [F3, F1]. The hypotheses of [F8] in the chart $x'$ are met because the primed fields and sources are again of the required class on the open set $V$ by step 1.4. The converse is the same chain with the roles of $x$ and $x'$ exchanged, since $\Lambda^{-1}$ is again a proper orthochronous Lorentz matrix [F4]. [given, step 1.4, step 3.1, F1, F3, F4, F8, F9]

5.1 (Hypotheses and scope) Clause (a) is step 1.1, clause (a′) is step 2.1, clause (b) is steps 2.2 and 3.2, clause (c) is steps 1.2 and 3.1, and clause (d) is step 4.1. The argument used only the component dictionary and invariants [F1], the two boost matrices and the identity $(\gamma-1)/\beta^2=\gamma^2/(\gamma+1)$ [F2], the constant component law and the invertibility of the changes of chart [F3, F4], the unique factorization of a proper orthochronous Lorentz map [F4], the matrix form and determinant of a spatial rotation [F5], the cross-product and Euclidean identities [F6], the determinant identities [F7], the tensor equivalence of [F8] and the smooth Maxwell branch [F9]. Only finitely many choices are made (the least index $j$ in step 1.3 and the finite index sets of [F7]); no choice principle, no potential, no derivative of the fields beyond the class required by the cited statements, no boundary, decay or medium hypothesis and no empirical premise are used. All clauses are pointwise on the open overlap of the two chart restrictions and conditional on the adopted postulates; orientation-reversing changes are outside the framework's conventions [F1], and no apparatus, detector or measurement model is introduced. [given, step 1.1, step 1.2, step 1.3, step 1.4, step 2.1, step 2.2, step 3.1, step 3.2, step 4.1] ∎

## Source notes

The three cited treatments present the transformation of the fields under a passive boost, the rotation embedding and the two independent scalar contractions of the field tensor in their own conventions. The deduction above is the component computation in the framework's fixed dictionary (signs $F_{0i}=-E_i/c$, $F_{ij}=\epsilon_{ijk}B_k$, $x^0=ct$, $\eta=\operatorname{diag}(-1,1,1,1)$), the explicit conjugation of the general vector boost by a rotation, and the resulting invariance of the two scalar combinations and of the smooth Maxwell branch; the conversion from the sources' conventions is carried out here rather than assumed.
