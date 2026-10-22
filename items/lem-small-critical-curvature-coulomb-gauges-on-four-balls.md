---
id: lem-small-critical-curvature-coulomb-gauges-on-four-balls
kind: lemma
title: "Coulomb gauges from small critical curvature on four-balls"
status: published
origin: session
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - lem-strong-lp-neumann-inverse-on-four-dimensional-balls
  - lem-normal-boundary-hodge-estimate-on-four-dimensional-balls
  - lem-neumann-coulomb-gauge-correction-by-contraction
  - thm-higher-order-sobolev-embedding
  - thm-sobolev-embedding-on-bounded-extension-domains-for-p-less-than-n
  - thm-extension-theorem-for-bounded-smooth-domains
  - thm-holder-inequality-for-integrals
  - thm-meyers-serrin-density-on-an-arbitrary-open-set
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Terence Tao and Gang Tian, A singularity removal theorem for Yang–Mills fields in higher dimensions, Theorem 4.6 and full §9 proof, pp.36–39"
      url: "https://arxiv.org/pdf/math/0209352"
    - title: "Karen K. Uhlenbeck, Connections with Lp bounds on curvature, Communications in Mathematical Physics 83 (1982), 31–42"
      url: "https://doi.org/10.1007/BF01947069"
dependency_level: 3
---

## Statement

Assume full AC, using Sobolev norms formed from the $L^p$ norms of Euclidean ordered derivative tensors. There exist constants $\varepsilon,C,C_3>0$ with the following property. Let $A$ be a smooth $\mathfrak{su}(2)$-valued one-form on the closed Euclidean ball $B_r(0)\subset\mathbb R^4$, with Frobenius target norm and curvature $F_A=dA+A\wedge A$. If $\|F_A\|_{L^2(B_r)}\le\varepsilon$, then there exists $g:B_r\to SU(2)$ belonging to $W^{2,p}$ for every finite $p\ge2$ such that
$$a=A^g=g^{-1}dg+g^{-1}Ag,\qquad d^*a=0,$$
and $a$ belongs to the $W^{1,3}$ closure $Y_3$ of smooth one-forms with zero normal component on the sphere. In particular the normal condition is valid in the weak integration identity. The form $a$ belongs to every $W^{1,p}$ with finite $p\ge2$ and satisfies
$$r^{-1}\|a\|_2+\|\nabla a\|_2+\|a\|_4\le C\|F_A\|_2,\qquad r^{-1}\|a\|_3+\|\nabla a\|_3\le C_3\|F_A\|_3.$$
The constants are independent of $r$ and $A$; no uniform bound on the gauge's higher norms in terms of the critical curvature norm alone is asserted.

If a fixed finite $\Gamma\le O(4)$ acts on the ball and $\tau$ is an action of $\Gamma$ on $SU(2)$ by constant unitary conjugations, assume $\gamma^*A=d\tau_\gamma(A)$. Then $g$ may be chosen with $g(\gamma x)=\tau_\gamma(g(x))$. This includes prescribed conjugation actions coming from $PU(2)$ representations, without choosing a lift to an $SU(2)$ representation.

For a finite collection of balls with smooth local connection forms $A_i$ and given smooth $SU(2)$ transition maps $t_{ij}$ satisfying $A_j=A_i^{t_{ij}}$ and $t_{ij}t_{jk}=t_{ik}$, apply the construction on each ball where its curvature bound holds. The transformed maps $h_{ij}=g_i^{-1}t_{ij}g_j$ are continuous $W^{2,3}_{\mathrm{loc}}$ transition maps on the overlaps, satisfy the cocycle identities pointwise, and identify the transformed connection forms by $a_j=a_i^{h_{ij}}$.

## Statement references

[[lem-strong-lp-neumann-inverse-on-four-dimensional-balls|Constructed strong Neumann inverse]]

[[lem-normal-boundary-hodge-estimate-on-four-dimensional-balls|Constructed normal Hodge estimate]]

[[lem-neumann-coulomb-gauge-correction-by-contraction|Constructed nonlinear gauge correction]]

[Tao–Tian, Theorem 4.6 and §9](https://arxiv.org/pdf/math/0209352)

## Facts & Assumptions

[F1] On $B_1$ the constructed normal-boundary Hodge estimate applies to the closure classes $Y_p$ and, for $p=2,3$, absorbs the curvature nonlinearity when $\|a\|_4\le\rho_p$. It then bounds $\|a\|_{W^{1,p}}$ by $C_p\|F_a\|_p$ for Coulomb forms ([[lem-normal-boundary-hodge-estimate-on-four-dimensional-balls]]).

[F2] For $a\in Y_3$ Coulomb with $\|a\|_4\le\rho_c$, and $\lambda\in Y_3$ with sufficiently small $W^{1,3}$ norm, the proved contraction constructs a Neumann gauge $h=e^u$ with $b=(a+\lambda)^h\in Y_3$ Coulomb, and $\|b-a\|_{W^{1,3}}\le C_c(1+\|a\|_{W^{1,3}})\|\lambda\|_{W^{1,3}}$. It preserves given finite constant-conjugation equivariance. Its Neumann gauge class is the $W^{2,3}$ closure $\mathcal G_N$ of smooth $SU(2)$ maps with zero normal derivative ([[lem-neumann-coulomb-gauge-correction-by-contraction]]).

[F3] The constructed strong Neumann inverse supplies the unique mean-zero weak solution in $W^{2,p}$ for every finite $p\ge2$ and preserves normal polynomial approximation ([[lem-strong-lp-neumann-inverse-on-four-dimensional-balls]]).

[F4] On the ball, $W^{1,2}\hookrightarrow L^4$, $W^{1,3}\hookrightarrow L^{12}$, and $W^{2,3}\hookrightarrow L^\infty$. Also $W^{2,6}$ has bounded first derivatives. These follow from the proved first- and higher-order embeddings and the ball's extension property ([[thm-sobolev-embedding-on-bounded-extension-domains-for-p-less-than-n]], [[thm-higher-order-sobolev-embedding]], [[thm-extension-theorem-for-bounded-smooth-domains]]).

[F5] Holder gives the product estimates below, and smooth approximation gives weak product rules. In particular the embeddings in [F4] prove continuity of multiplication $W^{2,3}\times W^{2,3}\to W^{2,3}$ and $W^{2,3}\times W^{1,3}\to W^{1,3}$: second-derivative cross terms use $L^6\cdot L^6\subset L^3$, and first derivatives of mixed products use $L^{12}\cdot L^4\subset L^3$ ([[thm-holder-inequality-for-integrals]], [[thm-meyers-serrin-density-on-an-arbitrary-open-set]]).

[F6] Full AC is inherited from these analytic suppliers ([[def-axiom-of-choice]]).

## Proof

**Given:** Full AC and the smooth connection of the statement. Work first on the unit ball.

1.1 **A constructed radial gauge.** Put $M(s,x)=\sum_i x_iA_i(sx)$ and define $P(s,x)$ by the convergent iterated-integral series $I+\sum_{k\ge1}(-1)^k\int_{0<t_k<\cdots<t_1<s}M(t_1,x)\cdots M(t_k,x)\,dt_k\cdots dt_1$. On the compact parameter set every term has norm at most $L^k/k!$; any fixed number $N$ of spatial derivatives is bounded by $C_N k^N L_N^k/k!$. Uniform convergence of these derivative series, followed by the coordinate-segment fundamental theorem, identifies them as the derivatives of the sum. The series also gives the integral equation $P(s,x)=I-\int_0^sM(t,x)P(t,x)\,dt$, which also gives smoothness in $s$. It satisfies $\partial_sP=-MP$, $P(0,x)=I$. Since $M$ is skew-Hermitian and trace zero, differentiation gives $\partial_s(P^*P)=0$; thus $P$ is unitary, and the two-by-two determinant derivative gives $\partial_s\det P=-\operatorname{tr}(M)\det P=0$, so $P\in SU(2)$. Uniqueness of the integral equation follows by iterating its difference estimate $k$ times and taking $k\to\infty$ using $L^k/k!\to0$. Set $U(x)=P(1,x)$. Rescaling the integration parameters gives $U(sx)=P(s,x)$, so $x\cdot dU=-(x\cdot A)U$. Therefore $C=A^U$ is smooth and $x\cdot C=0$. [given, construct, algebra]

2.1 **Gauge algebra and the scaling path.** The matrix identity $d(g^{-1})=-g^{-1}(dg)g^{-1}$ gives $F_{A^g}=g^{-1}F_Ag$ and $(A^g)^h=A^{gh}$ by expansion and cancellation. It applies to smooth gauges first; [F4]–[F5] pass it to $W^{2,3}$ gauges and their $W^{1,3}$ connection forms. Unitarity preserves pointwise curvature norms. Define $A_t(x)=tC(tx)$ for $0\le t\le1$. It is a smooth path of smooth zero-normal forms, starts at zero, and ends at $C$. Its curvature is $F_{A_t}(x)=t^2F_C(tx)$, hence $\|F_{A_t}\|_2=\|F_C\|_{L^2(B_t)}\le\|F_A\|_2$ for $t>0$, and $\|F_{A_t}\|_3=t^{2/3}\|F_C\|_{L^3(B_t)}\le\|F_C\|_3$. The same inequalities at $t=0$ are immediate. There are finite constants $L,X$ for which $\|A_t-A_s\|_{W^{1,3}}\le L|t-s|$ and $1+\sup_t(\|A_t\|_{W^{1,3}}+\|F_{A_t}\|_3)\le X$: differentiate $tC(tx)$ and $t^2DC(tx)$ in $t$, using bounded derivatives of the fixed smooth $C$ through order two. [F4, F5, step 1.1, construct, algebra]

3.1 **Uniform critical improvement in any admissible gauge.** Choose $\rho>0$ no larger than $\rho_c,\rho_2,\rho_3$ in [F1]–[F2]. Call $t$ admissible if some $g\in\mathcal G_N$ has $a=A_t^g\in Y_3$, $d^*a=0$ and $\|a\|_4\le\rho$. All such forms belong to $Y_2$ by finite-volume norm comparison of their smooth normal approximants. By [F1], curvature covariance and [F4], there is a fixed $K_0$ such that $\|a\|_{W^{1,2}}\le C_2\|F_A\|_2$ and $\|a\|_4\le K_0\|F_A\|_2$. Also $\|a\|_{W^{1,3}}\le C_3\|F_{A_t}\|_3\le C_3X$. Choose the theorem's fixed $\varepsilon>0$ so that $K_0\varepsilon\le\rho/4$. Consequently every admissible gauge has the improved margin $\|a\|_4\le\rho/4$, and its higher connection norm is bounded by a constant depending only on $X$. These estimates require only the given curvature bound, once admissibility holds. [F1, F2, F4, F5, step 2.1, choose, construct, algebra]

4.1 **A uniform bound on the transported perturbation.** In an admissible gauge, $dg=g a-A_tg$ holds as a weak matrix identity. Unitarity and [F4] give $\|dg\|_{12}\le C(\|a\|_{12}+\|A_t\|_{12})\le C_X$, with $C_X$ independent of $t$ and of the chosen admissible gauge. For another parameter $s$, set $\lambda=g^{-1}(A_s-A_t)g$. Product differentiation, $g^{-1}=g^*$, Holder and $W^{1,3}\hookrightarrow L^4$ give $\|\lambda\|_{W^{1,3}}\le C(1+\|dg\|_{12})\|A_s-A_t\|_{W^{1,3}}\le C_XL|s-t|$. Moreover $\lambda\in Y_3$: approximate $g$ by the defining smooth Neumann gauges of $\mathcal G_N$; conjugating the smooth zero-normal form $A_s-A_t$ by these gauges preserves zero normal component, and [F5] gives convergence in $W^{1,3}$. [F4, F5, step 2.1, step 3.1, construct, algebra]

5.1 **A uniform admissibility step.** Let $K_4$ be the fixed embedding norm from $W^{1,3}$ to $L^4$. Using the uniform bound for $\|a\|_{W^{1,3}}$ in step 3.1, choose $\delta_X>0$ below the perturbation threshold of [F2] and so small that $K_4C_c(1+C_3X)\delta_X\le\rho/4$. Choose $\kappa>0$ so that $C_XL\kappa<\delta_X$, replacing $L$ by $1+L$ in this choice if necessary. Whenever $t$ is admissible and $|s-t|<\kappa$, step 4.1 allows [F2] to correct $a+\lambda$ by $h\in\mathcal G_N$. The result is $b=(a+\lambda)^h=A_s^{gh}\in Y_3$, Coulomb, and $\|b-a\|_4\le\rho/4$. The group $\mathcal G_N$ is closed under multiplication by the Sobolev product and approximation argument in [F2], so $gh\in\mathcal G_N$. Step 3.1 gives $\|b\|_4\le\rho/2<\rho$. Thus $s$ is admissible, with the same step length $\kappa$ for every admissible $t$. [F2, F4, F5, step 3.1, step 4.1, choose, algebra]

6.1 **Finite construction reaches the original connection.** At $t=0$, take $g=I$ and $a=0$, so admissibility holds. Choose a positive integer $N$ with $1/N<\kappa$ and successively apply step 5.1 to $t_j=j/N$, $j=0,\ldots,N$. This finite induction constructs an admissible $G\in\mathcal G_N$ at $t=1$, with $a=C^G$ Coulomb and in $Y_3$. Take the total gauge $g=UG$. Step 2.1 gives $a=A^g$, and step 3.1 gives $\|a\|_{W^{1,2}}+\|a\|_4\le(C_2+K_0)\|F_A\|_2$ and $\|a\|_{W^{1,3}}\le C_3\|F_A\|_3$. In particular the construction obtains a gauge from small curvature alone. It used no assumed small potential norm of the original connection: the admissible small potentials were constructed from the zero starting connection by finitely many proved correction steps. [F1, F2, step 1.1, step 2.1, step 3.1, step 5.1, choose, construct, induction, algebra]

7.1 **Higher regularity from the constructed Neumann inverse.** The family gauge $G$ is in $W^{2,3}$ and obeys $\partial_iG=G a_i-(A_1)_iG$. Contracting its derivative and using $\sum_i\partial_i a_i=0$ gives $\Delta G=\sum_i((\partial_iG)a_i-(A_1)_i\partial_iG)-(\operatorname{div}A_1)G$. Initially $\nabla G,a\in L^{12}$ by [F4], while $A_1$ is smooth and $G$ is bounded; hence the right side belongs to $L^6$. The form $dG$ belongs to $Y_3$ with target the real eight-dimensional matrix space, by the defining smooth Neumann approximation of $G$. The integration identity of [F1] applied to $dG$ therefore gives the zero-normal weak identity for each component of $G$. In particular $-\Delta G$ has zero mean. Apply [F3] at $p=6$ to each component, after subtracting its mean, and use weak-solution uniqueness to conclude $G\in W^{2,6}$. By [F4] its first derivatives are now bounded; the displayed equation then has bounded right side, because $a=G^{-1}dG+G^{-1}A_1G$ is bounded as well. For every finite $p\ge2$, apply [F3] again to this same zero-mean source and uniqueness to obtain $G\in W^{2,p}$. The smooth factor $U$ preserves this regularity for the total gauge $g$, and the gauge formula gives $a\in W^{1,p}$ by ordinary weak product differentiation. This proves exactly the claimed Sobolev regularity, without asserting unproved smooth boundary bootstrapping. [F1, F3, F4, F5, step 2.1, step 6.1, algebra]

7.2 **Given finite equivariance.** Suppose the stated $\Gamma,\tau$ data are present. The equality $M(s,\gamma x)=d\tau_\gamma(M(s,x))$ follows from the equivariance of $A$ evaluated on the radial vector. Constant conjugation commutes with all products and integrals in step 1.1, so $U(\gamma x)=\tau_\gamma(U(x))$. Hence $C$ and every $A_t$ have the same equivariance. The initial gauge $I$ is equivariant. If an admissible family gauge is equivariant, its transported perturbation in step 4.1 is equivariant, and [F2] supplies an equivariant correction. The finite induction of step 6.1 therefore produces equivariant $G$ and total $g=UG$. Only the conjugation action is used; scalar representatives of a projective unitary element act trivially, so a lift to an $SU(2)$ representation is unnecessary. [F2, step 1.1, step 2.1, step 4.1, step 5.1, step 6.1, algebra]

8.1 **Scaling and overlap compatibility.** For $B_r$, pull back the connection as $A_r(y)=rA(ry)$. Its critical curvature norm equals $\|F_A\|_2$. Apply the unit-ball construction and define the physical gauge by $g(x)=g_r(x/r)$. The transformed one-form obeys $a_r(y)=r a(ry)$, so $\|a_r\|_2=r^{-1}\|a\|_2$, $\|\nabla a_r\|_2=\|\nabla a\|_2$, $\|a_r\|_4=\|a\|_4$, and the derivative/curvature $L^3$ norms have common factor $r^{2/3}$. This gives both stated estimates and preserves the approximation class, regularity and equivariance. Finally, on the given overlaps the continuous representatives of $g_i$ supplied by [F4] make $h_{ij}=g_i^{-1}t_{ij}g_j$ continuous and $W^{2,3}_{\mathrm{loc}}$ by [F5]. Direct multiplication gives $h_{ij}h_{jk}=h_{ik}$ pointwise, and the gauge composition identity of step 2.1 gives $a_j=a_i^{h_{ij}}$; smooth approximation justifies the equality for the Sobolev forms. Full AC is used only through the actual analytic suppliers [F1]–[F6]. [F1, F2, F3, F4, F5, F6, step 2.1, step 6.1, step 7.1, step 7.2, construct, algebra] ∎

## Source notes

The complete proof in Tao–Tian §9, including Lemma 9.1 and all three steps of Proposition 9.2 (PDF pp.36–39), was read. The curvature-controlled scaling path and uniform perturbative radius are reconstructed above in the ordinary four-dimensional Lebesgue spaces. The proof supplies its own radial gauge and uses the newly proved local Neumann, Hodge and contraction suppliers. Uhlenbeck's original theorem is cited for provenance; the original paper's full text has not been obtained or used as a premise.

This is the local Euclidean small-curvature gauge and compatible-overlap module, including a precisely prescribed constant finite conjugation action. It supplies no singular removable-singularity theorem, general curved-metric or nonconstant-lift equivariant gauge theorem, ASD Fredholm/transversality or gluing theorem, or Floer invariant by itself. Those further original instanton-foundation obligations remain separate.
