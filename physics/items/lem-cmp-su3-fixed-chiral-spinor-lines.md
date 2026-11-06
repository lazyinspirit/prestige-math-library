---
id: lem-cmp-su3-fixed-chiral-spinor-lines
kind: lemma
title: SU(3)-fixed chiral spinor lines in six dimensions
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: physics
deps:
  - def-given-spin-and-spinc-structures-and-associated-spinor-bundles
dependency_roles:
  def-given-spin-and-spinc-structures-and-associated-spinor-bundles: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Philip Candelas, Gary T. Horowitz, Andrew Strominger, and Edward Witten, Vacuum Configurations for Superstrings, Nuclear Physics B 258 (1985), 46–74"
      url: https://ooguri.caltech.edu/documents/31340/Candelas_Horowitz_Strominger_Witten.pdf
      locator: "Section 3, printed p. 56 (PDF p. 11): the SU(3) decomposition of six-dimensional spinors and its two invariant spinors. Used only for the internal representation statement; the paper's spacetime model is not Type II."
    - title: "M. J. D. Hamilton, The field and Killing spinor equations of M-theory and type IIA/IIB supergravity in coordinate-free notation, arXiv:1607.00327v3"
      url: https://arxiv.org/pdf/1607.00327v3
      locator: "§3.3, PDF pp. 13–14, defines the Levi-Civita-induced spin connection on an associated spinor bundle; §3.5, PDF p. 15, defines the Spin-equivariant antilinear involution and Majorana fixed real form; §3.6, PDF p. 16, states that both ten-dimensional chiralities admit Majorana–Weyl modules of real dimension 16. Used only for these representation and connection conventions, not as a Type-II compactification result."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $H=\operatorname{Spin}^+(1,3)\cong SL_2(\mathbb C)$, let $W=\mathbb C^2$ be its standard complex representation, and let $\overline W$ be its conjugate representation. Identify the complex Dirac module as $\Delta_4=\Delta_4^+\oplus\Delta_4^-=W\oplus\overline W$, where $\Delta_4^+$ and $\Delta_4^-$ are its two Weyl modules; write $W_{\mathbb R}$ for $W$ with its underlying real vector-space structure. Fix an $H$-equivariant antilinear involution $J_4:\Delta_4\to\Delta_4$ that exchanges $W$ and $\overline W$, and define the real $H$-module $S_4^{\mathrm M}:=\{s\in\Delta_4:J_4s=s\}$. Let $V=\mathbb C^3$ with its standard Hermitian form, and let $SU(3)=\{g\in U(V):\det g=1\}$ act on $V$ and its exterior powers. Use $S_6=\Lambda^\bullet V$ with $S_6^+=\Lambda^{\mathrm{even}}V$ and $S_6^-=\Lambda^{\mathrm{odd}}V$. Define the two complex $H\times SU(3)$ modules $D_+=(W\otimes S_6^+)\oplus(\overline W\otimes S_6^-)$ and $D_-=(W\otimes S_6^-)\oplus(\overline W\otimes S_6^+)$; a reversed ten-dimensional orientation interchanges these labels. Equip each $D_\pm$ with an $H\times SU(3)$-equivariant antilinear involution $R_\pm$. By the ten-dimensional Majorana–Weyl module restricted to $H\times SU(3)$, mean the corresponding fixed real module $\operatorname{Fix}(R_\pm)$. Let $Y$ be a connected smooth Riemannian six-manifold and let $P\to Y$ be a supplied spin structure: a principal $\operatorname{Spin}(6)$-bundle with its equivariant two-fold covering of the oriented orthonormal frame bundle, as in the earlier Spin-structure definition. Fix $y_0\in Y$. Let $\rho_6^\pm:\operatorname{Spin}(6)\to GL(S_6^\pm)$ be the chiral representations induced by restricting the negative-square Clifford representation $c$ in [A2] to the even and odd subspaces selected by the orientation convention in [A3], and set $S_Y^\pm:=P\times_{\rho_6^\pm}S_6^\pm$.

Define $\nabla^{\mathrm{LC}}$ by the Koszul identity
$$2g(\nabla^{\mathrm{LC}}_XY,Z)=Xg(Y,Z)+Yg(Z,X)-Zg(X,Y)+g([X,Y],Z)-g([Y,Z],X)+g([Z,X],Y)$$
for smooth vector fields $X,Y,Z$; nondegeneracy of $g$ determines $\nabla^{\mathrm{LC}}_XY$ uniquely, and the formula directly gives the torsion-free, metric-compatible connection. In a local oriented orthonormal frame $e_1,\ldots,e_6$, define $\omega^a{}_b$ by $\nabla^{\mathrm{LC}}_Xe_b=\omega^a{}_b(X)e_a$. For the standard covering $\lambda_6:\operatorname{Spin}(6)\to SO(6)$, its differential $d\lambda_6$ identifies the Lie algebras. In a local spin frame $s$, put $A_s:=(d\lambda_6)^{-1}\omega$ and define the induced spin connection by $\nabla^{S_Y^\pm}_X[s,\psi]:=[s,X(\psi)+d\rho_6^\pm(A_s(X))\psi]$. A global parallel section is a smooth section $\psi$ satisfying $\nabla^{S_Y^\pm}_X\psi=0$ for every smooth vector field $X$. Along any piecewise-$C^1$ curve $\gamma:[0,1]\to Y$, parallel transport is the linear map obtained by solving the corresponding local linear ODE for this connection.

Choose a spin frame $p_0\in P_{y_0}$. Define the lifted holonomy subgroup $\operatorname{Hol}_{p_0}(P)$ to consist of all $h\in\operatorname{Spin}(6)$ for which parallel transport in the lifted principal connection around some piecewise-$C^1$ loop based at $y_0$ sends $p_0$ to $p_0h$. Its actions on the two chiral fibers are $\rho_6^\pm(h)$. Assume that, under an orthonormal identification of $T_{y_0}Y$ with the underlying real vector space of $V$, $\operatorname{Hol}_{p_0}(P)$ is exactly the standard $SU(3)$ subgroup of $\operatorname{Spin}(6)$. Then each chiral spinor bundle has a one-complex-dimensional space of global parallel sections, and for either $D_\pm$ the corresponding holonomy-fixed real module $\operatorname{Fix}(R_\pm)^{SU(3)}$ is $H$-equivariantly isomorphic to $S_4^{\mathrm M}$, hence has real dimension four.

## Facts & Assumptions

**Given:** The connected Riemannian six-manifold, its supplied spin structure, the exact lifted holonomy hypothesis, and the standard product spin representation described below.

[F1] [[def-given-spin-and-spinc-structures-and-associated-spinor-bundles]]: a spin structure is a principal $\operatorname{Spin}(6)$-lift of the oriented orthonormal frame bundle, and a spinor bundle is the associated bundle for a specified Clifford representation.

[A1] $V=\mathbb C^3$ has its standard Hermitian inner product, taken linear in the first slot, and $SU(3)=\{g\in U(V):\det g=1\}$ acts naturally on $V$ and on every exterior power $\Lambda^kV$.

[A2] On $S_6=\Lambda^\bullet V$, for $x\in V$ viewed as a real vector define $c(x)=x\wedge-\iota_{\bar x}$, where
$$\iota_{\bar x}(v_1\wedge\cdots\wedge v_k)=\sum_{j=1}^k(-1)^{j-1}\langle v_j,x\rangle v_1\wedge\cdots\wedge\widehat{v_j}\wedge\cdots\wedge v_k.$$
The chiral grading is exterior-degree parity. For the exterior action $U_g=\Lambda^\bullet g$ of $g\in SU(3)$, the Clifford covariance convention is $U_gc(x)U_g^{-1}=c(gx)$.

[A3] Choose Clifford generators $\gamma_\mu$ on $\Delta_4$ with $\gamma_\mu\gamma_\nu+\gamma_\nu\gamma_\mu=2\eta_{\mu\nu}I$ for $\eta=\operatorname{diag}(-1,1,1,1)$, and set $\Gamma_4=i\gamma_0\gamma_1\gamma_2\gamma_3$. For an oriented orthonormal real basis $e_1,\ldots,e_6$ of $V$, set $\rho_a:=i c(e_a)$, so $\rho_a\rho_b+\rho_b\rho_a=2\delta_{ab}I$. Choose the internal orientation so $\Gamma_6:=i\rho_1\cdots\rho_6$ acts as $+I$ on $S_6^+=\Lambda^{\mathrm{even}}V$ and $-I$ on $S_6^-=\Lambda^{\mathrm{odd}}V$. The product Clifford action is $\Gamma_\mu=\gamma_\mu\otimes\Gamma_6$ and $\Gamma_a=1\otimes\rho_a$ on $\Delta_4\otimes S_6$; ten-dimensional chirality is the product of the two factor chirality operators, up to the fixed overall orientation sign.

[A4] The involutions $R_\pm$ specified in the Statement are the restrictions of the standard $\operatorname{Spin}^+(1,9)$-equivariant Majorana real structures on the corresponding complex chiral ten-dimensional spin modules. In particular they are $H\times SU(3)$-equivariant, and their fixed real modules are the corresponding ten-dimensional Majorana–Weyl modules.

## Proof

**Given:** [F1], [A1]–[A3], the exact lifted holonomy $SU(3)$ at $y_0$, and the definitions in the Statement.

1.1 For $x,y\in V$ and $\omega\in\Lambda^\bullet V$, wedge and contraction satisfy $\iota_{\bar x}(y\wedge\omega)+y\wedge\iota_{\bar x}\omega=\langle y,x\rangle\omega$, while two wedge operators and two contractions anticommute. Expanding with $c(x)=x\wedge-\iota_{\bar x}$ therefore gives $$c(x)c(y)+c(y)c(x)=-(\langle x,y\rangle+\langle y,x\rangle)I=-2\operatorname{Re}\langle x,y\rangle I.$$ Thus $S_6$ is a complex Clifford module for the underlying Euclidean six-space, with even and odd exterior degree as its two chiral modules. For $U_g=\Lambda^\bullet g$, preservation of wedge products gives $U_g(x\wedge)U_g^{-1}=(gx)\wedge$. Preservation of the Hermitian form gives $\langle gv,gx\rangle=\langle v,x\rangle$; applying this equality to each term of the displayed contraction formula in [A2] yields $U_g\iota_{\bar x}U_g^{-1}=\iota_{\overline{gx}}$. Subtracting these identities proves $U_gc(x)U_g^{-1}=c(gx)$, the required Clifford covariance. [A1, A2, algebra]

1.2 For the displayed Koszul formula, write its right-hand side as $K(X,Y,Z)$. Substituting $fX$, $fY$, and $fZ$ and using $[X,fY]=f[X,Y]+X(f)Y$ gives $K(fX,Y,Z)=fK(X,Y,Z)$, $K(X,Y,fZ)=fK(X,Y,Z)$, and $K(X,fY,Z)=fK(X,Y,Z)+2X(f)g(Y,Z)$. Thus nondegeneracy of $g$ makes the formula a smooth affine connection. Directly exchanging $X,Y$ gives $K(X,Y,Z)-K(Y,X,Z)=2g([X,Y],Z)$, so it is torsion-free; adding the expressions with $Y,Z$ exchanged gives $K(X,Y,Z)+K(X,Z,Y)=2Xg(Y,Z)$, so it is metric-compatible. These identities also force the formula for any torsion-free metric-compatible connection, proving uniqueness. [given, algebra]

1.3 The local spin-frame change $s'=sa$, with $A=\lambda_6(a)$, changes the orthonormal-frame connection form by $\omega'=A^{-1}\omega A+A^{-1}dA$. Applying $d\lambda_6$ gives $A_{s'}=\operatorname{Ad}(a^{-1})A_s+a^{-1}da$. Associated-bundle coordinates change by $\psi'=\rho_6^\pm(a)^{-1}\psi$, so differentiating this identity gives $d\psi'+d\rho_6^\pm(A_{s'})\psi'=\rho_6^\pm(a)^{-1}(d\psi+d\rho_6^\pm(A_s)\psi)$. Thus the displayed local covariant derivatives agree on overlaps. Along each smooth path segment in a local frame the transport equation is $\dot v(t)=-B(t)v(t)$ with continuous matrix $B(t)=d\rho_6^\pm(A_s(\dot\gamma(t)))$. On a compact interval, its fundamental matrix is the uniformly convergent Picard series whose $m$th term has norm at most $(T\sup\|B\|)^m/m!$; substitution into the integral equation proves existence, and iterating that equation for a difference proves uniqueness. Reversing the path gives the inverse map. For a smooth family of straight coordinate paths in a chart, the same series and its parameter derivatives converge uniformly on compact parameter sets, so transport depends smoothly on the endpoint. Composing finitely many chart-segment transports defines the piecewise-$C^1$ transport used in the Statement. [F1, A3, given, construct, algebra]

2.1 The degree-zero line $\Lambda^0V$ is fixed by every $g\in SU(3)$, and the degree-three line $\Lambda^3V$ is fixed because $g$ acts on it by $\det g=1$. Neither $V=\Lambda^1V$ nor $V^*=\Lambda^2V$ has a nonzero invariant vector: $D_1=\operatorname{diag}(i,-i,1)$ and $D_2=\operatorname{diag}(1,i,-i)$ lie in $SU(3)$, and their fixed subspaces in $V$ are respectively $\mathbb Ce_3$ and $\mathbb Ce_1$, whose intersection is zero; their dual actions have fixed subspaces $\mathbb Ce^3$ and $\mathbb Ce^1$, also with zero intersection. The map $u\wedge v\mapsto(w\mapsto\Omega(u,v,w))$, for $\Omega=e^1\wedge e^2\wedge e^3$, is an isomorphism $\Lambda^2V\to V^*$ and is $SU(3)$-equivariant because $\Omega$ is invariant. Hence $(S_6^+)^{SU(3)}=\Lambda^0V$ and $(S_6^-)^{SU(3)}=\Lambda^3V$, each of complex dimension $1$. [A1, A2, step 1.1, algebra]

3.1 The operators in [A3] satisfy the ten-dimensional Clifford relations: the same-factor anticommutators are those of $\Delta_4$ and $S_6$, while the mixed anticommutators vanish because $\Gamma_6$ anticommutes with each $\rho_a$. Their module has complex dimension $4\cdot8=32$. The product chirality operator therefore splits its positive eigenspace into $(\Delta_4^+\otimes S_6^+)\oplus(\Delta_4^-\otimes S_6^-)$, up to swapping both internal signs if the orientation sign is reversed; the negative eigenspace has the opposite pairing. Either ten-dimensional chirality uses one four-dimensional Weyl module with each internal chirality. [A3, step 2.1, algebra]


3.2 Define $y\sim z$ when a piecewise-smooth path in $Y$ joins them. Constant paths, reversal, and concatenation make this an equivalence relation. Each class is open: in a coordinate ball about any point of the class, coordinate straight segments join that point to every other point of the ball. If there were more than one class, one class and the union of the others would be disjoint nonempty open sets covering $Y$, contrary to connectedness. Thus a piecewise-smooth path from $y_0$ to every $y\in Y$ exists. Evaluation at $y_0$ injects global parallel sections into the holonomy-fixed fiber vectors, since a parallel section is recovered along every path by its transport. Conversely, for a holonomy-fixed vector $v$ in a chiral fiber at $y_0$, set $\psi(y):=P_\gamma v$ for any piecewise-smooth path $\gamma$ from $y_0$ to $y$. This is path-independent because two such paths compose with the reverse of one to a based loop, whose transport fixes $v$. The smooth endpoint-dependence established in step 1.3 makes $\psi$ smooth locally, and the transport ODE makes it parallel. Hence evaluation is an isomorphism from global parallel sections to the $SU(3)$-fixed vectors in the chiral fiber. By step 2.1 each such invariant space is one-dimensional over $\mathbb C$. [F1, step 2.1, step 1.3, given, construct]

4.1 Let $L_+$ and $L_-$ be the one-dimensional $SU(3)$-fixed lines in $S_6^+$ and $S_6^-$ from step 2.1. By steps 2.1, 3.1, and 3.2, the holonomy-fixed part of either ten-dimensional chirality is $U\oplus V$, where $U=W\otimes L_+$ and $V=\overline W\otimes L_-$, or with the two internal lines interchanged. The real structure $R$ in [A4] preserves this subspace and commutes with $H$. There is no nonzero $H$-equivariant antilinear map $W\to W$: such a map has the form $z\mapsto C\overline z$, and for $g_t=\operatorname{diag}(t,t^{-1})\in SL_2(\mathbb C)$ equivariance gives $C\operatorname{diag}(\overline t,\overline t^{-1})=\operatorname{diag}(t,t^{-1})C$; $t=2$ forces the off-diagonal entries of $C$ to vanish, and $t=i$ forces the diagonal entries to vanish. The same calculation applies to $\overline W$. Hence $R$ exchanges $U$ and $V$. Choose $e_+\ne0$ in $L_+$. The map $W_{\mathbb R}\to\operatorname{Fix}(R)$, $w\mapsto w\otimes e_+ + R(w\otimes e_+)$, is a real-linear $H$-equivariant bijection, with inverse given by projection to $U$ followed by the identification $w\otimes e_+\mapsto w$. Likewise $w\mapsto w+J_4w$ identifies the underlying real representation $W_{\mathbb R}$ with $S_4^{\mathrm M}$, with inverse given by projection to $W$. Thus $\operatorname{Fix}(R)\cong S_4^{\mathrm M}$ as real $H$-modules, so it has real dimension $4$. The same argument applies when the ten-dimensional chirality or orientation interchanges the two internal lines. [A3, A4, step 2.1, step 3.1, step 3.2, construct, algebra] ∎
